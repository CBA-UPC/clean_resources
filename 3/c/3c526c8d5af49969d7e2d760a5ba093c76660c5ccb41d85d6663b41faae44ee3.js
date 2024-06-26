"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{368:function(e,t,i){i.d(t,{a:function(){return getIframeUrl}});let r=/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S*)$/,o=/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(\?[\w-]+\S+)?$/,n=/https?:\/\/(?:www\.)?loom.com\/share\/(\w+)(\?[\w-]+\S+)?$/,l=/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/(\w+)(?:$|\/|\?)/,a=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)(\?[\w-]+\S+)?$/;function getIframeUrl(e){if(r.test(e)){let[t,i,o,n,l,a,s,d]=e.match(r);return"".concat("https://www.youtube.com/embed/").concat(s).concat(d||"")}if(o.test(e)){let[t,i,r,n,l]=e.match(o);return"".concat("https://player.vimeo.com/video/").concat(n).concat(l||"")}if(n.test(e)){let[t,i,r]=e.match(n);return"".concat("https://www.loom.com/embed/").concat(i).concat(r||"")}if(l.test(e))return"".concat("https://fast.wistia.net/embed/iframe/").concat(e.match(l)[4]);if(a.test(e)){let[t,i,r]=e.match(a);return"".concat("https://play.vidyard.com/").concat(i).concat(r||"")}return null}},30555:function(e,t,i){i.d(t,{j:function(){return resetPlayer},v:function(){return buildCapture}});var r=i(22146),o=i(39688),n=i(89370),l=i(88841),a=i(55283),s=i(49208),d=i(20851),c=i(83408),u=i(94561),f=i(97015),h=i(99e3),m=i(14285),p=i(23712);let v=(0,c.hu)("debug:navattic");async function buildCapture(e){var t;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(null==e?void 0:e.id))return;let s=30,onMissing=async()=>{if(!e.id){v.debug("No capture ID, cannot retrieve");return}if(0===s){v.debug("Could not find capture ".concat(e.id,", retries exceeded"));return}return v.debug("Capture isn't available, retrying in 1 second ".concat(e.id)),s--,await (0,d._v)(1e3),await (0,p.$h)(e.id,onMissing)},{playerEl:c,afterRebuildSyncCb:b}=i,g=c||document.querySelector(n.YT),y=null==g?void 0:g.contentDocument,_=(null==e?void 0:e.node)||(e.id?await (0,p.$h)(e.id,onMissing):void 0);if(!_||!1===_[r.Z.nv_ok]){v.debug("Missing capture ".concat(e.id));return}let w=y||(null===(t=(0,f.IR)())||void 0===t?void 0:t.contentDocument);if(!w){v.error("Could not find player document");return}let N=(0,l.X)(_),A=w.__nv_sn,D=null==g?void 0:g.getAttribute("capture"),S=!D||!A;if(D!==e.id){console.time("rebuild");try{(function(e){let{previousNode:t,node:i,doc:r,initial:l}=e;m.Z.resetIdGenerator(),(0,u.yG)();let{built:s,map:d}=(0,h.VU)(i,r,t)||{};if(l&&d)!function(e){if(!(null==e?void 0:e.head)||!(null==e?void 0:e.body)){var t,i,r;return void(0,o.oi)(null===(t=(null===(i=e.defaultView)||void 0===i?void 0:i.parent)||(null===(r=window)||void 0===r?void 0:r.parent))||void 0===t?void 0:t.parent,{kind:"navattic:stylesheetsLoaded"})}let endWaiting=()=>{console.timeEnd("load stylesheets");let t=e.defaultView||window,i=null==t?void 0:t.parent;i&&(0,o.oi)(i.parent,{kind:"navattic:stylesheetsLoaded"})};console.time("load stylesheets");let n=function(){let e=[],t=(0,u.Lt)();return t.forEach(t=>{let i=(0,a.Zq)(t)?t:t.ownerDocument,r=null==i?void 0:i.querySelectorAll('link[rel="stylesheet"]:not([disabled]):not([href=""])');r&&e.push(...r)}),e}(),l=n.length;if(!l)return void endWaiting();let s=e.body.style.display;e.body.style.display="none";let d=setTimeout(()=>{var t;v.debug("Stylesheets took too long to load, showing body",l),e.body.style.display=s,console.timeLog("load stylesheets","timed out");let i=null===(t=e.defaultView)||void 0===t?void 0:t.parent;i&&(0,o.oi)(i.parent,{kind:"navattic:stylesheetsLoaded"})},6e3),unloadSheet=()=>{--l||(clearTimeout(d),setTimeout(()=>{e.body.style.display=s,v.debug("All stylesheets loaded"),endWaiting()},300))};for(let e=n.length-1;e>=0;--e){let t=n[e];t.sheet?--l:(t.addEventListener("load",unloadSheet,{once:!0}),t.addEventListener("error",unloadSheet,{once:!0}))}l||(clearTimeout(d),e.body.style.display=s,endWaiting())}(r);else{let e=r.defaultView||window,t=null==e?void 0:e.parent;t&&(0,o.oi)(null==t?void 0:t.parent,{kind:"navattic:stylesheetsLoaded"})}d&&(globalThis[n.os]=d)})({previousNode:A,node:N,doc:w,initial:S}),console.timeLog("rebuild","DOM rebuilt"),null==b||b(),await injectStyles(w)}catch(e){console.error("Capture rebuild failed:",e)}console.timeEnd("rebuild")}e.id&&(null==g||g.setAttribute("capture",e.id))}let b=["noscript { display: none !important; }",".navattic-clickable {cursor: pointer !important;}",".navattic-clickable * {cursor: pointer !important;}",":root { zoom: 1 }",".c-virtual_list.c-virtual_list--scrollbar.c-message_list { height: calc(100vh - 181px) !important; }",".p-channel_sidebar .c-virtual_list.c-virtual_list--scrollbar { height: calc(100vh - 144px) !important; }",".c-virtual_list.c-virtual_list--scrollbar.c-message_list, .c-virtual_list.c-virtual_list--scrollbar.c-message_list .c-scrollbar__child { width: calc(100vw - 260px) !important; }",".p-workspace__sidebar, .p-channel_sidebar, .p-channel_sidebar .c-virtual_list.c-virtual_list--scrollbar, .p-channel_sidebar .c-virtual_list.c-virtual_list--scrollbar .c-scrollbar__child { width: 260px !important; }"],g={MESSAGE_PANE:".p-message_pane",CHANNEL_SIDEBAR:".p-channel__sidebar",WORKSPACE_SIDEBAR:".p-workspace__sidebar"};async function injectStyles(e){await new Promise(e=>(0,s.P2)(e,0));let t=function(e){let t=function(e){var t,i;let r=[],o=null!==(i=null===(t=e.defaultView)||void 0===t?void 0:t.innerHeight)&&void 0!==i?i:e.documentElement.clientHeight,{MESSAGE_PANE:n,CHANNEL_SIDEBAR:l,WORKSPACE_SIDEBAR:a}=g,s=e.querySelector(n);if(null==s?void 0:s.clientHeight){let e=o-s.clientHeight;r.push(".c-virtual_list.c-virtual_list--scrollbar.c-message_list { height: calc(100vh - ".concat(e,"px) !important; }"))}let d=e.querySelector(l);if(null==d?void 0:d.clientHeight){let e=o-d.clientHeight;r.push(".p-channel_sidebar .c-virtual_list.c-virtual_list--scrollbar { height: calc(100vh - ".concat(e,"px) !important; }"))}let c=e.querySelector(a);if(null==c?void 0:c.clientWidth){let e=c.clientWidth;r.push(".c-virtual_list.c-virtual_list--scrollbar.c-message_list, .c-virtual_list.c-virtual_list--scrollbar.c-message_list .c-scrollbar__child { width: calc(100vw - ".concat(e,"px) !important; }"),".p-workspace__sidebar, .p-channel_sidebar, .p-channel_sidebar .c-virtual_list.c-virtual_list--scrollbar, .p-channel_sidebar .c-virtual_list.c-virtual_list--scrollbar .c-scrollbar__child { width: ".concat(e,"px !important; }"))}return r}(e);return[...b,...t]}(e),i=document.createElement("style");i.setAttribute("navatticjs","");let{documentElement:r,head:o}=e;r.insertBefore(i,o);let n=t.length;for(let e=0;e<n;e++){var l;null===(l=i.sheet)||void 0===l||l.insertRule(t[e],e)}}function resetPlayer(){let e=document.querySelector(n.YT);e&&e.removeAttribute("capture")}},15468:function(e,t,i){i.d(t,{FQ:function(){return areNodesIdentical},oC:function(){return compareAttributes},qu:function(){return compare}});var r=i(89370),o=i(12761);let n=new Set(["class","style","id","aria-current","aria-selected","aria-checked","aria-pressed"]);function*compareAttributes(e,t){for(let i in e)Object.prototype.hasOwnProperty.call(t,i)||(yield[i,null]);for(let i in t)Object.prototype.hasOwnProperty.call(t,i)&&e[i]!==t[i]&&(yield[i,t[i]])}function compare(e,t){if(e.type!==t.type||!e.isShadow!=!t.isShadow)return{attributeIterator:void 0,patches:void 0,result:o.B.Fail};let i=[];switch(t.type){case r.Jq.Element:{if(e.tagName!==t.tagName||e.isShadowHost&&!t.isShadowHost)return{attributeIterator:void 0,patches:void 0,result:o.B.Fail};let r=compareAttributes(e.attributes,t.attributes);for(let e=r.next();!0!==e.done;e=r.next()){let[t,l]=e.value;if(i.push([t,l]),!n.has(t))return{attributeIterator:r,patches:i,result:o.B.Partial}}break}case r.Jq.Text:case r.Jq.Comment:case r.Jq.CDATA:if(e.textContent!==t.textContent)return{attributeIterator:void 0,patches:void 0,result:o.B.Partial};break;case r.Jq.DocumentType:if(e.name!==t.name||e.publicId!==t.publicId||e.rootId!==t.rootId)return{attributeIterator:void 0,patches:void 0,result:o.B.Fail}}return{attributeIterator:void 0,patches:i,result:o.B.Pass}}let areNodesIdentical=e=>{var t;return e.result===o.B.Pass&&!((null===(t=e.patches)||void 0===t?void 0:t.length)>0)}},92097:function(e,t,i){i.d(t,{Ds:function(){return diffAttributes},Hg:function(){return diff},TH:function(){return diffChildren}});var r=i(89370),o=i(83615),n=i(15468),l=i(12761),a=i(44423);function*diffAttributes(e,t){if(!e){for(let e in t)Object.prototype.hasOwnProperty.call(t,e)&&(yield[e,t[e]]);return}yield*(0,n.oC)(e,t),yield*handleSpecialAttributeDiffCases(e,t)}function*handleSpecialAttributeDiffCases(e,t){"rr_width"in t&&t.rr_width===e.rr_width&&(yield["rr_width",t.rr_width]),"rr_height"in t&&t.rr_height===e.rr_height&&(yield["rr_height",t.rr_height]),"rr_scrollLockRoot"in t&&"rr_scrollLockRoot"in e&&(yield["rr_scrollLockRoot",t.rr_scrollLockRoot])}function determineMatchingChildren(e,t){let i=e.childNodes,o=t.childNodes,a=new Map(i.map(e=>[e.id,e])),s=[];for(let i=0;i<o.length;++i){let f;let h=o[i];for(let e of a.values()){var d,c,u;let t=(0,n.qu)(e,h);switch(t.result){case l.B.Pass:(null==f?void 0:null===(c=f.compareResult)||void 0===c?void 0:null===(d=c.attributeIterator)||void 0===d?void 0:d.return)&&f.compareResult.attributeIterator.return(),f={compareResult:t,node:e};break;case l.B.Partial:if(f)(null===(u=t.attributeIterator)||void 0===u?void 0:u.return)&&t.attributeIterator.return();else{if("link"===h.tagName&&"stylesheet"===h.attributes.rel!=("stylesheet"===e.attributes.rel))continue;f={compareResult:t,node:e}}case l.B.Fail:continue}break}(null==f?void 0:f.node.type)===r.Jq.Element&&((null==f?void 0:f.compareResult.attributeIterator)&&f.compareResult.patches.push(...f.compareResult.attributeIterator),f.compareResult.patches.push(...handleSpecialAttributeDiffCases(f.node.attributes,h.attributes)));let m={beforeNode:null==f?void 0:f.node,afterNode:h,beforeParent:e,afterParent:t,patches:null==f?void 0:f.compareResult.patches,result:function(e){switch(null==e?void 0:e.result){case l.B.Pass:var t;return(null===(t=e.patches)||void 0===t?void 0:t.length)>0?l.e.MUTATED:l.e.SAME;case l.B.Partial:return l.e.MUTATED;case l.B.Fail:throw Error("Tried to match a node with a node that was not a match. This should never happen");case void 0:return l.e.ADDED;default:throw Error("Unknown CompareResult, please fix me")}}(null==f?void 0:f.compareResult)};m.beforeNode&&(m.beforeNode.diffDetails=m,a.delete(m.beforeNode.id)),m.afterNode&&(m.afterNode.diffDetails=m),s.push(m)}let f=[...a.values()].map(i=>{let o={beforeNode:i,afterNode:void 0,beforeParent:e,afterParent:t,patches:void 0,result:l.e.REMOVED};return i.diffDetails=o,i.type===r.Jq.Group&&i.childNodes.forEach(e=>{let r={beforeNode:e,afterNode:void 0,beforeParent:i,afterParent:t,patches:void 0,result:l.e.REMOVED};e.diffDetails=r}),o});return s.push.apply(s,f),s}function diffChildren(e,t){let i=determineMatchingChildren(e,t),r=i.filter(a._V);for(;r.length;){let e=r.pop(),{beforeNode:t,afterNode:n}=e;if(!(0,o.hQ)(t))continue;let l=determineMatchingChildren(t,n);for(let e=0;e<l.length;++e){let t=l[e];i.push(t),(0,a._V)(t)&&r.push(t)}}return i}let diff=(e,t)=>diffChildren({childNodes:[e]},{childNodes:[t]})},12761:function(e,t,i){var r,o,n,l;i.d(t,{B:function(){return r},e:function(){return o}}),(n=r||(r={}))[n.Pass=0]="Pass",n[n.Partial=1]="Partial",n[n.Fail=2]="Fail",(l=o||(o={}))[l.SAME=0]="SAME",l[l.MUTATED=1]="MUTATED",l[l.ADDED=2]="ADDED",l[l.REMOVED=3]="REMOVED"},44423:function(e,t,i){i.d(t,{Me:function(){return isAddedDetails},YX:function(){return isMutatedDetails},_V:function(){return isMatchDetails},pK:function(){return isSameDetails},vr:function(){return isRemovedDetails}});var r=i(12761);let isMatchDetails=e=>(null==e?void 0:e.result)<r.e.ADDED,isSameDetails=e=>(null==e?void 0:e.result)===r.e.SAME,isMutatedDetails=e=>(null==e?void 0:e.result)===r.e.MUTATED,isAddedDetails=e=>(null==e?void 0:e.result)===r.e.ADDED,isRemovedDetails=e=>(null==e?void 0:e.result)===r.e.REMOVED},99e3:function(e,t,i){i.d(t,{qv:function(){return buildNode},qq:function(){return mutateNode},VU:function(){return rebuild},lJ:function(){return setStyleTemporary},zp:function(){return suppressTransition}});var r,o=i(89370),n=i(20851),l=i(48893);let a=null===(r=globalThis.queueMicrotask)||void 0===r?void 0:r.bind(globalThis);"function"==typeof a&&(0,n.QC)(a)||(a=e=>{l.n.resolve().then(e)});var s=i(55283),d=i(83615),c=i(49208),u=i(83408),f=i(71664),h=i(15628),m=i(40338),p=i(14285),v=i(368);let b=/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;(base64|charset=.*))?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i,g={urls:new Set([]),patterns:[/^https?:\/\/my\.matterport\.com\/show\//i,/^https?:\/\/(capture|c)\.navattic\.com\//i]};function shouldUseExternalUrl(e){return null!==e&&(g.urls.has(e)||g.patterns.some(t=>t.test(e))||!!(0,v.a)(e)||b.test(e))}let y="__nv_animation",getActiveAnimations=e=>e[y],cancelActiveAnimations=e=>{let t=getActiveAnimations(e);if(t)for(let e of t)e.cancel()},setActiveAnimations=(e,t)=>{e[y]=t},getKeyFrameAnimationOptions=e=>"number"==typeof e?{duration:e}:e,applySerializedAnimations=(e,t)=>{if(!t){cancelActiveAnimations(e),setActiveAnimations(e,void 0);return}let i=[];for(let r of t){let{keyframes:t}=r,o=getKeyFrameAnimationOptions(r.options);o.duration=0,o.iterations=1,o.delay=0,o.endDelay=0;let n=e.animate(t,o);i.push(n)}cancelActiveAnimations(e),setActiveAnimations(e,i)};var _=i(92097),w=i(12761),N=i(44423);let A={HTML:"http://www.w3.org/1999/xhtml/",SVG:"http://www.w3.org/2000/svg"},getElementStyleGetter=e=>{var t;return e&&(null===(t=Object.getOwnPropertyDescriptor(e.prototype,"style"))||void 0===t?void 0:t.get)},D={[A.HTML]:getElementStyleGetter(globalThis.HTMLElement),[A.SVG]:getElementStyleGetter(globalThis.SVGElement)},getElementStyleDeclaration=e=>{if(!e.namespaceURI)return;let t=D[e.namespaceURI];if(t)return t.apply(e)},S={script:"noscript",altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",fedropshadow:"feDropShadow",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient"};function getTagName(e){let t=S[e.tagName]||e.tagName;return"link"===t&&e.attributes._cssText?"style":t}function styleInNode(e){return"style"in e}let E=new Set(["clipPath","circle","defs","desc","ellipse","g","line","path","polygon","polyline","rect","svg","symbol","text","tspan","use"]),ensureShadow=e=>{try{(0,s.A2)(e)||e.attachShadow({mode:"open"})}catch(e){}return(0,s.A2)(e)},resetCanvas=e=>{e.width=e.width};function buildNode(e,t,i){let{idAttribute:r=!0,hasSvgAncestor:n=!1}=i;switch(e.id>=p.Z.peekNextId()&&p.Z.setNextId(e.id+1),e.type){case o.Jq.Document:return t.implementation.createHTMLDocument(t.title||void 0);case o.Jq.DocumentType:try{return t.implementation.createDocumentType(e.name||"html",e.publicId,e.systemId)}catch(e){return null}case o.Jq.Element:{var l;let i;(0,d.hK)(e)&&(e=(0,m.F)(e));let o=getTagName(e),a="svg"===e.tagName||n&&((l=e).isSVG||E.has(l.tagName));return i=a?t.createElementNS("http://www.w3.org/2000/svg",o):t.createElement(o),r&&i.setAttribute("nv_id","".concat(e.id)),e.diffDetails=void 0,applyElementAttributes(i,e,t,{isSvg:a}),e.isShadowHost&&ensureShadow(i),styleInNode(i)&&suppressTransition(i),i}case o.Jq.Text:return t.createTextNode(e.textContent);case o.Jq.CDATA:return t.createCDATASection(e.textContent);case o.Jq.Comment:return t.createComment(e.textContent);default:return null}}function buildChild(e,t,i,r){let o=buildNode(e,i,{...r,hasSvgAncestor:(0,s.kK)(t)&&!!t.closest("svg")});if(!o){console.warn("Failed to rebuild",e);return}if(e.isShadow&&(0,s.A2)(t))t.shadowRoot.appendChild(o);else if((0,s.qk)(t)&&!t.hasChildNodes()){if((0,s.kK)(o)){var n,l;t.write(o.outerHTML),o=t.documentElement,null===(n=t.head)||void 0===n||n.remove(),null===(l=t.body)||void 0===l||l.remove()}else{if(!(0,s.AB)(o))return;t.write(new XMLSerializer().serializeToString(o)),o=t.doctype}if(!o)return;o.__nv_sn=e}else t.appendChild(o);return buildChildren(e,o,i,r)}let isSerializedFrame=e=>e.type===o.Jq.Element&&("iframe"===e.tagName||"frame"===e.tagName||"embed"===e.tagName||"object"===e.tagName&&e.childNodes.some(d.bZ));function buildChildren(e,t,i,r){let{map:n}=r;if(t.__nv_sn=e,n[e.id]=t,(0,d.hQ)(e)){if(isSerializedFrame(e)){let i=!!t.data;if("object"!==e.tagName?i=!!t.src:i||t.contentDocument||(t.data="about:blank"),!i){let i=e.childNodes[0];if(!i||!(0,d.bZ)(i))return t;try{rebuildFullDocument(i,t.contentDocument,r),t.contentWindow.name=""}catch(e){console.warn("iframe document never loaded")}}}else for(let n of e.childNodes)if(n.type===o.Jq.Group){if("spread"===n.note)for(let e of n.childNodes)n.isShadow&&(e.isShadow=!0),buildChild(e,t,i,r)}else buildChild(n,t,i,r)}return t}let extractNvId=e=>{let t;return e.type===o.Jq.Element&&(t=e.attributes.nv_id),t||String(e.id)},maybeSetNvId=(e,t)=>{(0,s.kK)(e)&&e.getAttribute("nv_id")!==t&&e.setAttribute("nv_id",t)},applyElementAttributes=(e,t,i,r)=>{var o,n;let{previousNode:l,isSvg:a=!1}=r,s=getTagName(t),d=!l&&(null===(o=t.diffDetails)||void 0===o?void 0:o.patches)?t.diffDetails.patches:(0,_.Ds)((null==l?void 0:l.attributes)||(null===(n=e.__nv_sn)||void 0===n?void 0:n.attributes),t.attributes);for(let[r,o]of d)applyAttribute(e,t,i,r,o,a);if("form"===s)try{e.setAttribute("onsubmit","return false")}catch(e){}},_setChecked=(e,t)=>{null===t?e.checked=!1:e.checked=t},setInputElementChecked=(e,t)=>{_setChecked(e,t),(0,c.P2)(()=>_setChecked(e,t),0)},_setMuted=(e,t)=>{null===t?e.muted=!1:e.muted=t},setMediaMuted=(e,t)=>{_setMuted(e,t),(0,c.P2)(()=>_setMuted(e,t),0)},_setInput=(e,t)=>{e.value=t||""},setInputValue=(e,t)=>{_setInput(e,t),(0,c.P2)(()=>_setInput(e,t),0)},applyAttribute=function(e,t,i,r,l){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],d=getTagName(t);if("option"!==d||"selected"!==r||!1!==l){if("input"===d&&"checked"===r&&("boolean"==typeof l||null===l)){setInputElementChecked(e,l);return}if("muted"===r&&("boolean"==typeof l||null===l)){setMediaMuted(e,l);return}if(("link"!==d||"crossorigin"!==r)&&(l="boolean"==typeof l||"number"==typeof l?"":l,"integrity"!==r)){if(r.startsWith("rr_"))switch(r){case"rr_static_src":case"rr_src":if("rr_src"===r&&"rr_static_src"in t.attributes&&e.hasAttribute("src"))break;"iframe"===d||"frame"===d||"embed"===d?(e.hasAttribute(o.wK)||shouldUseExternalUrl(l))&&(null===l?e.removeAttribute("src"):(e.setAttribute("src",l),t.childNodes.splice(0))):"object"===d&&shouldUseExternalUrl(l)&&(null===l?e.removeAttribute("data"):(e.setAttribute("data",l),t.childNodes.splice(0)));break;case"rr_dataURL":if("canvas"===d){if(null===l){resetCanvas(e);break}let t=document.createElement("img");t.src=l,t.crossOrigin="anonymous",t.onload=()=>{let i=e.getContext("2d");i&&(resetCanvas(e),i.drawImage(t,0,0,t.width,t.height))}}break;case"rr_height":case"rr_width":{let t=r.slice(3),i=getElementStyleDeclaration(e);i&&(i[t]=l),""===e.getAttribute("style")&&e.removeAttribute("style")}break;case"rr_mediaState":switch(l){case"played":e.addEventListener("load",e.play.bind(e),{once:!0});break;case"paused":e.addEventListener("load",e.pause.bind(e),{once:!0})}break;case"rr_scrollLockRoot":"rr_scrollLockVersion"in t.attributes&&a(()=>{setStyleTemporary({node:e,property:"scroll-behavior",value:"auto",priority:"important"},100);let applyScrollValues=()=>{(0,n.Rw)(t.attributes.rr_scrollLockTop)||function(e,t){let i=(0,n.IV)({min:0,value:t,max:e.scrollHeight-e.clientHeight});e.scrollTop=i}(e,t.attributes.rr_scrollLockTop),(0,n.Rw)(t.attributes.rr_scrollLockLeft)||function(e,t){let i=(0,n.IV)({min:0,value:t,max:e.scrollWidth-e.clientWidth});e.scrollLeft=i}(e,t.attributes.rr_scrollLockLeft)},throttleCb=()=>{if(!e.scrollHeight&&!e.scrollWidth){(0,c.P2)(throttleCb,30);return}applyScrollValues()};applyScrollValues(),(0,c.P2)(throttleCb,30)});break;case"rr_animations":applySerializedAnimations(e,l)}else{var u,f;if(null===l){if(e[r]&&"object"!=typeof e[r])try{e[r]=null}catch(e){}e.removeAttribute(r);return}let n="textarea"===d&&"value"===r,a="style"===d&&"_cssText"===r;if("value"===r&&("input"===d&&"file"!=="".concat(t.attributes.type).toLowerCase()||"textarea"===d||"select"===d)&&setInputValue(e,l),"input"===d&&"type"===r&&("checkbox"===l||"radio"===l)&&setInputElementChecked(e,!!t.attributes.checked),"src"===r&&((null===(u=e.parentElement)||void 0===u?void 0:u.tagName.toLowerCase())==="video"||(null===(f=e.parentElement)||void 0===f?void 0:f.tagName.toLowerCase())==="audio")&&(e.parentElement.srcObject=null),n||a){let r=i.createTextNode(l);if(a){let i={type:o.Jq.Text,textContent:l,isStyle:!0,id:p.Z.PLACEHOLDER_NODE_ID,diffDetails:void 0};r.__nv_sn=i,t.childNodes=[i],e.replaceChildren(r)}else{for(let e of t.childNodes)switch(e.type){case o.Jq.Comment:case o.Jq.Text:if(e.textContent)return}e.appendChild(r)}return}try{if(s&&("xlink:href"===r||"href"===r)){let t=l.replace(/https:\/\/(?:app|capture|c).navattic.com/,location.origin);"a"===d?"xlink:href"===r?e.setAttributeNS("http://www.w3.org/1999/xlink",r,"javascript:void(0)"):e.setAttribute(r,"javascript:void(0)"):"xlink:href"===r?e.setAttributeNS("http://www.w3.org/1999/xlink",r,t):e.setAttribute(r,t)}else r.startsWith("xml:")?e.setAttributeNS("http://www.w3.org/XML/1998/namespace",r,l):"a"===d&&"href"===r?e.setAttribute("href","javascript:void(0)"):"onsubmit"===r||"target"===r||"onload"===r||"onclick"===r||"onresize"===r||r.startsWith("onmouse")?e.setAttribute("_"+r,l):e.setAttribute(r,l)}catch(e){}}}}},suppressTransition=(e,t)=>{setStyleTemporary({node:e,property:"transition-property",value:"none",priority:"important"},null==t?void 0:t.debounce),setStyleTemporary({node:e,property:"animation-duration",value:"0s",priority:"important"},null==t?void 0:t.debounce),setStyleTemporary({node:e,property:"animation-iteration-count",value:"1",priority:"important"},null==t?void 0:t.debounce)},setStyleTemporary=(e,t)=>{let{node:i,property:r,value:o,priority:n}=e,l=getElementStyleDeclaration(i);if(!l)return;let a=l.getPropertyValue(r),s=l.getPropertyPriority(r);(o!==a||n!==s)&&(l.setProperty(r,o,n),(0,c.P2)(()=>{l.setProperty(r,a,s),""===i.getAttribute("style")&&i.removeAttribute("style")},t))};function mutateNode(e,t,i){let{previousNode:r,disableJit:n=!1}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};switch(t.type){case o.Jq.Element:if(!n&&(0,d.hK)(t))return function(e,t,i,r){let o=(0,m.F)(t);if(e.tagName.toLowerCase()!==o.tagName){let t=buildNode(o,i,{idAttribute:!0,hasSvgAncestor:null!==e.closest("svg")});if(t)return e.replaceWith(t),t}return applyElementAttributes(e,o,i,{previousNode:r,isSvg:(0,f.o)(e,"SVGElement")}),e}(e,t,i,r);applyElementAttributes(e,t,i,{previousNode:r,isSvg:(0,f.o)(e,"SVGElement")});break;case o.Jq.Text:case o.Jq.CDATA:case o.Jq.Comment:e.textContent=t.textContent}return e}let needsRebuildChildren=(e,t)=>!!(0,d.hQ)(t)&&!!(e.childNodes.length!==t.childNodes.length||t.childNodes.some(e=>!(0,N._V)(e.diffDetails)||(0,N.YX)(e.diffDetails)&&(0,d.hK)(e)));function maybeAdd(e,t,i,r,n,l,a){let d=e;for(;d=function(e,t,i,r,n){let l=null==e?void 0:e.__nv_sn.id,a=r.get(l);if(!a||a.type===o.Jq.Document)return;let d=buildNode(a,i,{...n,hasSvgAncestor:n.hasSvgAncestor||(0,s.kK)(t)&&!!t.closest("svg")});if(d)return d.__nv_sn=a,d}(d,t,i,r,a);){let e=n[d.__nv_sn.id];l[e]=d}}function reconcileChildren(e,t,i,r,n){let l=!1,a=r.map(t=>{if((0,s.qk)(e)&&!l){if(t.type!==o.Jq.DocumentType&&t.type!==o.Jq.Element)return[];l=!0}return t.type===o.Jq.Group?t.childNodes:[t]}).flat(),d=new Map,c={},u=Array(a.length);for(let e=0;e<a.length;++e){let t=a[e];c[t.id]=e,(!t.diffDetails||(0,N.Me)(t.diffDetails))&&(0===e?d.set(void 0,t):d.set(a[e-1].id,t))}for(let r of(maybeAdd(void 0,e,t,d,c,u,n),i))(0,s.qQ)(r)&&function(e,t,i,r,o,n,l){let a=e.__nv_sn.diffDetails,s=e,d=a.afterNode;switch(a.result){case w.e.REMOVED:s.remove();return;case w.e.MUTATED:s=mutateNode(s,d,i);case w.e.SAME:{maybeSetNvId(s,extractNvId(d)),s.__nv_sn=d;let e=o[d.id];n[e]=s,maybeAdd(s,t,i,r,o,n,l)}case w.e.ADDED:}styleInNode(s)&&suppressTransition(s)}(r,e,t,d,c,u,n);let f=u.every((t,i)=>e.childNodes.item(i)===t);if(!f){if((0,s.kK)(e)){let t=0;for(let i=0;i<u.length;++i){let r=u[i],o=e.childNodes.item(i);if(r&&r!==o){if(!o){e.appendChild(r);continue}if(isSerializedFrame(r.__nv_sn)&&r.parentNode){++t;continue}o.before(r)}}if(t>0)for(let t=0;t<u.length;++t){let i=u[t],r=e.childNodes.item(t);if(!(!i||i===r||isSerializedFrame(i.__nv_sn)&&"HEAD"===e.tagName)){if(!r){e.appendChild(i);continue}r.before(i)}}}else if((0,s.qk)(e)){let t=!1;for(let i of u)t||(t=(0,s.AB)(i)||(0,s.kK)(i)),!t||(0,s.AB)(i)||e.appendChild(i)}else for(let t of(e.replaceChildren(),u))e.appendChild(t)}for(let e of u)!e||(0,s.kK)(e)&&e.tagName.toLowerCase()!==e.__nv_sn.tagName||(!e.__nv_sn.diffDetails||(0,N.Me)(e.__nv_sn.diffDetails)?buildChildren(e.__nv_sn,e,t,n):mutateDepthFirst(e,t,n))}let reconcileAllChildren=(e,t,i,r)=>{if(!(0,d.hQ)(t))return;let o=[...e.childNodes],n=t.isShadowHost?t.childNodes.filter(e=>!e.isShadow):t.childNodes;if(reconcileChildren(e,i,o,n,r),t.isShadowHost&&ensureShadow(e)){let o=[...e.shadowRoot.childNodes],n=t.childNodes.filter(e=>e.isShadow);reconcileChildren(e.shadowRoot,i,o,n,r)}maybeSetNvId(e,extractNvId(t))},shouldFullRebuildDocument=e=>{if(!(0,s.h6)(e))throw Error("No __nv_sn present");let t=e.__nv_sn.diffDetails;if(!t)return!0;if((0,N._V)(t)){let i=t.afterNode.childNodes.find(e=>e.type===o.Jq.Element);if((0,N._V)(null==i?void 0:i.diffDetails)&&!(0,s.h6)(e.documentElement))return!0}let{beforeNode:i,afterNode:r}=t;return!!(r&&(!i||needsRebuildChildren(i,r)))},maybeFullRebuildDocument=(e,t)=>{let i=shouldFullRebuildDocument(e);if(i){let i=e.__nv_sn.diffDetails.afterNode,{built:r}=rebuildFullDocument(i,e,t);return r}};function defineCustomElements(e,t){let{customElementNames:i}=t,r=e.defaultView;if(!i||!r)return;let o=r.customElements;for(let e of i)o.get(e)||o.define(e,class extends r.HTMLElement{})}let C=h.MT?h.MT.getItem("debug:navattic:reconciliation:disable"):void 0,R=!!C&&("true"===C||"false"!==C);function rebuild(e,t,i){if(!t)return null;if(R||!i||!t.documentElement)return(0,u.ZP)("Rebuilding full"),rebuildFullDocument(e,t,{});console.time("diffs"),(0,_.Hg)(i,e),console.timeEnd("diffs");let r={},o=maybeFullRebuildDocument(t,{map:r});if(!o){let e=t.querySelector("style[navatticjs]");e&&e.remove(),console.time("mutate"),o=mutateDepthFirst(t,t,{map:r}),console.timeEnd("mutate")}return{built:o,map:r}}let mutateDepthFirst=(e,t,i)=>{let{__nv_sn:r}=e,o=null==r?void 0:r.diffDetails;if(!o||(0,N.vr)(o))return;let{afterNode:n}=o;if(i.map[n.id]=e,isSerializedFrame(n)){let[t]=n.childNodes;if(!t)return;let r=e.contentDocument;if(!r)return;r.__nv_sn=t;let o=maybeFullRebuildDocument(r,i);o||mutateDepthFirst(r,r,i)}else{var l;if((0,d.hg)(n)&&n.diffDetails&&!(null===(l=n.diffDetails.patches)||void 0===l?void 0:l.some(e=>{let[t]=e;return"_cssText"===t}))){let t=e.firstChild;if((0,s.qQ)(t)){let e=t.__nv_sn;e.diffDetails.afterNode=e,e.diffDetails.result=w.e.SAME,e.diffDetails.patches=void 0,n.childNodes=[e]}}else(0,s.qk)(e)&&defineCustomElements(e,n);reconcileAllChildren(e,n,t,i)}return maybeSetNvId(e,extractNvId(n)),e.__nv_sn=n,e};function rebuildFullDocument(e,t,i){if(!t)return{built:void 0,map:void 0};let r={};t.close(),t.open(),defineCustomElements(t,e);let o=buildChildren(e,t,t,{map:r,idAttribute:!0,...i});return{built:o,map:r}}},14285:function(e,t,i){var r=i(49933),o=i(63749);let _SerializedNode=class _SerializedNode{static genNextId(){return this.next_id++}static peekNextId(){return this.next_id}static setNextId(e){this.next_id=e}static resetIdGenerator(){this.next_id=0,this.usedIds.clear(),this.usedIds.add(-1)}handleChildren(){if(this.childNodes){let e=new r.f.Array;for(let t of this.childNodes)e.push(new n(t,null==t?void 0:t.id));this.childNodes=e}}replace(e,t){var i;let r=t?this.id:null!==(i=e.id)&&void 0!==i?i:this.id;return(0,o.w)(this,e),(0,o.w)(this,{id:r}),"childNodes"in e&&this.handleChildren(),this}constructor(e,t=_SerializedNode.genNextId()){for((0,o.w)(this,e);_SerializedNode.usedIds.has(t);)t=_SerializedNode.genNextId();this.id=t,this.id!==_SerializedNode.IGNORE_NODE_ID&&_SerializedNode.usedIds.add(this.id),this.handleChildren()}};_SerializedNode.PLACEHOLDER_NODE_ID=-1,_SerializedNode.IGNORE_NODE_ID=-2,_SerializedNode.next_id=0,_SerializedNode.usedIds=new Set([_SerializedNode.PLACEHOLDER_NODE_ID]);let n=_SerializedNode;t.Z=n},94561:function(e,t,i){i.d(t,{Lt:function(){return getRoots},ST:function(){return watchRoots},yG:function(){return resetRootsObserver}});var r,o=i(55283),n=i(83408),l=i(97015);let a=["debug:navattic:roots","debug:navattic:roots:cache","debug:navattic:roots:traversal","debug:navattic:roots:traversal:verbose","debug:navattic:roots:traversal:frame","debug:navattic:roots:traversal:shadow","debug:navattic:roots:watch"],getFlags=e=>a.filter(t=>t.startsWith(e)),s={any:(0,n.hu)(getFlags("debug:navattic:roots")),cache:(0,n.hu)(getFlags("debug:navattic:roots:cache")),traversal:(0,n.hu)(getFlags("debug:navattic:roots:traversal")),verbose:(0,n.hu)(getFlags("debug:navattic:roots:traversal:verbose")),frame:(0,n.hu)(getFlags("debug:navattic:roots:traversal:frame")),shadow:(0,n.hu)(getFlags("debug:navattic:roots:traversal:shadow")),watch:(0,n.hu)(getFlags("debug:navattic:roots:watch"))},d=new Set,c=new Map,u=new Set,f=new Set,h="";function getRoots(){return s.any.time("getRoots"),collectNodeRoots(),s.any.timeEnd("getRoots"),d}function watchRoots(e,t){for(let t of(s.watch.log("watchRoots"),collectNodeRoots(),s.watch.log("setting up watchRoots"),d))e(t);return u.add(e),f.add(t),()=>{for(let i of(s.watch.log("tearing down watchRoots"),u.delete(e),f.delete(t),d))t(i)}}let m=["iframe","frame","object","embed"],p="undefined"!=typeof MutationObserver?new MutationObserver(e=>{for(let t of e){if(!b)return;for(let e of t.addedNodes)if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE||(0,o.kK)(e)&&m.includes(e.tagName.toLowerCase())){s.cache.log("potential root was added, disconnecting",e),b=!1,p.disconnect();return}for(let e of t.removedNodes)d.has(e)?removeRoot(e):(0,o.A2)(e)?removeRoot(e.shadowRoot):(0,o.qk)(e)&&removeRoot(e.body)}}):{observe(){},disconnect(){}},v={subtree:!0,childList:!0};"undefined"!=typeof Element&&(Element.prototype.attachShadow=(r=Element.prototype.attachShadow,function(e){return b&&(s.cache.log("shadow root was created, disconnecting"),b=!1,p.disconnect()),r.call(this,e)}));let b=!1;function collectNodeRoots(){if(s.cache.log("collected?",b),b){s.any.log("roots already up to date");return}s.any.log("will collect roots"),b=!0,function(){let e=(0,l.IR)();for(let t of d)t.ownerDocument.defaultView&&(0,l.Mb)({root:t,doc:(null==e?void 0:e.contentDocument)||document})||removeRoot(t)}();let e=(0,l.IR)();if(null==e?void 0:e.contentDocument){s.any.log("has player frame");let t=e.getAttribute("capture");if(t&&t===h)return;h=t,function(){for(let e of(s.watch.log("resetRoots"),d))removeRoot(e)}(),findRoots(e.contentDocument),p.observe(e.contentDocument,v),s.any.log("collected roots:",[...d]);return}findRoots(document),p.observe(document,v),s.any.log("collected roots:",[...d])}function addRoot(e){if(s.verbose.log("addRoot",e),d.has(e)){s.verbose.log("already has root, skipping setup");return}for(let t of(d.add(e),u))t(e)}function removeRoot(e){var t;if(d.has(e))for(let i of(null===(t=c.get(e))||void 0===t||t.disconnect(),c.delete(e),d.delete(e),f))i(e)}function findRoots(e){for(let t of(s.verbose.log("findRoots",e),(0,o.qk)(e)&&addRoot(e.body),e.childNodes))(0,o.kK)(t)&&m.includes(t.tagName.toLowerCase())?function addFrame(e){if(s.verbose.log("addFrame",e),function findParentById(e,t){if(e.id===t)return!0;let i=e.parentElement;return!!i&&findParentById(i,t)}(e,"navattic-js")){s.frame.log("frame is within navattic, ignoring");return}let t=null,i=null;try{t=e.contentWindow,i=e.contentDocument}catch(e){}if(!t||!i){s.frame.log("frameWin or frameDoc is null, will listen for load event"),e.addEventListener("load",()=>addFrame(e),{once:!0});return}let r=i.body;if(!r){s.frame.log("frameDoc has no body");return}s.verbose.log("adding frame root",r),findRoots(i)}(t):(0,o.A2)(t)&&(s.verbose.log("addShadowRoot",t),addRoot(t.shadowRoot),findRoots(t.shadowRoot)),findRoots(t)}function resetRootsObserver(){p.disconnect(),b=!1}},49208:function(e,t,i){i.d(t,{yW:function(){return cancelThrottle},P2:function(){return throttle}});let r=globalThis.requestAnimationFrame,o=globalThis.cancelAnimationFrame;("function"!=typeof globalThis.requestAnimationFrame||"function"!=typeof globalThis.cancelAnimationFrame)&&(r=e=>setTimeout(()=>e(Date.now()),16.6667),o=e=>clearTimeout(e));let n=!1,l=!1,a=[],s=0,d=new Set;function onScroll(){}function addAnimationFrameCb(e){if(l){a.push(e);return}d.has(e)||(d.add(e),1===d.size&&(n=!0,s=r(onAnimationFrame),globalThis.addEventListener("scroll",onScroll)))}function callFn(e){e()}function onAnimationFrame(){l=!0,d.forEach(callFn),l=!1,a.splice(0).forEach(addAnimationFrameCb),n&&(s=r(onAnimationFrame))}let c=150/9,u=!1,f=new Map;function throttle(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;f.set(e,t),u||1!==f.size||(u=!0,addAnimationFrameCb(throttleOnAnimationFrame))}function cancelThrottle(e){f.delete(e)&&0===f.size&&(d.delete(throttleOnAnimationFrame)&&0===d.size&&(n=!1,o(s),globalThis.removeEventListener("scroll",onScroll)),u=!1)}function throttleOnAnimationFrame(){for(let[e,t]of f)t<0?(f.delete(e),e()):f.set(e,t-c)}},88841:function(e,t,i){i.d(t,{X:function(){return function deepcopy(e){if("object"!=typeof e||null===e)return e;if(Array.isArray(e))return e.map(deepcopy);let t={__proto__:Object.getPrototypeOf(e)};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=deepcopy(e[i]));return t}}})}}]);
//# sourceMappingURL=555-a44a13ddbea84ccb.js.map4acb11a8df9fcf730b25.js","dependencies":[{"path":"/etc.clientlibs/rc-www/clientlibs/essential.min.f35326dc52e2f83caa7d3e0ce7ea4596.js","dependencies":null,"embed":[],"properties":{}},{"path":"/etc.clientlibs/commons/clientlibs/utility/sticky/bundles/js-modern.min.e89141a6eb4a3989e5899fb24339c673.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/resolution-detect/bundles/js-modern.min.af38c19eeb3f986f2da02e6350cda078.js","dependencies":null,"embed":null,"properties":{}}],"embed":null,"properties":{}},{"path":"/etc.clientlibs/rc-www/clientlibs/utility/select.min.2a3e61b0469a915c2ae0cf1579e190a3.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/tools/bundles/js-modern.min.f23fa693bdc9d4cb17e8893d8352365b.js","dependencies":[],"embed":null,"properties":{}},{"path":"/etc.clientlibs/commons/clientlibs/utility/event-bus/bundles/js-modern.min.ecbc38cdc93ffb2669731a70d4425589.js","dependencies":null,"embed":null,"properties":{}}],"embed":null,"properties":{}}],"embed":[{"path":"/etc.clientlibs/rc-www/components/structure/login/clientlibs/common.min.9f84f565f984efc33bfd6f5abd5f446b.js","dependencies":[],"embed":null,"properties":{}},{"path":"/etc.clientlibs/rc-www/components/structure/search/clientlibs/common.min.e3c823049c03d457fdf2be290cf3c93d.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/navigator-data/bundles/js-modern.min.ae8de6fa5f5ed68a079352c80ddde614.js","dependencies":null,"embed":null,"properties":{}}],"embed":null,"properties":{}},{"path":"/etc.clientlibs/rc-www/components/structure/logo/clientlibs/common.min.8a5a701e3977958f75b10a959660eabd.js","dependencies":[],"embed":null,"properties":{}},{"path":"/etc.clientlibs/rc-www/components/structure/phone-number/clientlibs/common.min.fc540f20955a23744d1235d401a72795.js","dependencies":[],"embed":null,"properties":{}}],"properties":{}}]',
            async: 'true'
        });
	</script>
<div class="global-header__wrapper global-header__wrapper--design-2023" data-dl-cmp="Header">
<div class="global-header__bg"></div>
<div class="l-container global-header__container">
<div class="global-header__mob-overlay"></div>
<div class="global-header__content">
<div class="global-header__logo">
<div class="logo">
<style>.IID-logo-bc992f{color:#002fa7}</style>
<div class="logo__wrapper" data-dl-custom-type="headerButtons">
<a class="logo__link" href="/gb/en/" title="RingCentral Logo" aria-label="RingCentral Logo" data-dl-name="Logo" data-automation-id="Logo">
<span class="logo__img-block" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-1330251413-263886854-title" class="logo__img" fill="none" height="146" id="svg-1330251413-263886854" role="img" viewBox="0 0 961 146" width="961">
<title id="svg-1330251413-263886854-title">RingCentral Logo</title>
<path clip-rule="evenodd" d="M174.671 17.6394C174.671 17.6396 174.672 17.6396 174.673 17.6396C175.436 19.1741 177.059 19.9746 178.653 19.8197C179.132 19.768 179.597 19.6279 180.04 19.4139C182.021 18.4069 182.821 16.0054 181.822 14.0208C181.549 13.3826 176.126 3.40055 160.614 0.637594C156.804 -0.0448463 153.373 -0.100179 150.374 0.217063C140.613 1.23519 135.501 6.18196 135.11 6.56191C133.542 8.11492 133.542 10.6639 135.11 12.2169C136.666 13.7884 139.208 13.8032 140.765 12.2317C140.765 12.2317 140.813 12.1616 141.222 11.8776C142.391 10.9517 145.726 8.74572 151.204 8.17395C153.469 7.94155 156.11 7.96737 159.183 8.51701C165.432 9.66425 169.287 12.0841 171.663 14.1462C172.832 15.1975 173.632 16.1345 174.119 16.7911C174.355 17.1121 174.518 17.374 174.595 17.5215C174.634 17.5806 174.651 17.6101 174.66 17.6248C174.667 17.6363 174.668 17.6388 174.671 17.6394ZM926.183 1.0289L905.828 118.379H939.743L960.106 1.0289H926.183ZM447.474 45.7813C447.43 46.1096 447.389 46.4674 447.389 46.8695H481.924C482.009 46.0469 482.075 45.287 482.075 44.5603V42.2437C482.075 29.3105 478.088 19.2805 470.142 12.1942C462.178 5.10048 450.122 1.56285 433.991 1.56285C426.285 1.56285 418.811 2.92404 411.559 5.63167C404.318 8.36512 397.774 12.2421 391.916 17.2811C386.054 22.3127 381.071 28.4215 376.961 35.6148C372.841 42.8302 370.033 50.8904 368.48 59.8174C368.071 62.1894 367.761 64.4728 367.558 66.6787C367.344 68.881 367.248 71.0205 367.248 73.0641C367.248 80.1726 368.348 86.5027 370.561 92.1097C372.76 97.7021 376.013 102.461 380.266 106.364C384.538 110.27 389.75 113.243 395.915 115.298C402.082 117.356 409.172 118.382 417.185 118.382C424.485 118.382 431.39 117.331 437.923 115.224C444.442 113.129 450.355 110.086 455.641 106.142C460.934 102.191 465.516 97.3774 469.364 91.7335C473.207 86.0784 476.162 79.6524 478.22 72.4555H443.239C441.597 77.8154 439.004 82.2826 435.463 85.8682C431.903 89.4611 427.207 91.2539 421.349 91.2539C417.86 91.2539 414.982 90.7781 412.721 89.7894C410.46 88.823 408.634 87.4802 407.25 85.7907C405.863 84.0901 404.882 82.1055 404.318 79.8553C403.757 77.6051 403.48 75.1373 403.48 72.4555C403.48 70.7069 403.565 68.881 403.783 66.9812C403.986 65.0962 404.296 63.1079 404.698 61.0421C406.546 50.2743 409.748 42.1773 414.263 36.7731C418.771 31.3763 424.271 28.6945 430.76 28.6945C436.101 28.6945 440.233 30.0741 443.161 32.8481C446.09 35.6148 447.562 39.5692 447.562 44.7152C447.562 45.1284 447.533 45.4862 447.474 45.7813ZM551.122 63.6157C551.225 63.0698 551.284 62.2656 551.284 61.1737C551.284 57.6877 550.082 54.7514 547.71 52.3721C545.312 49.9854 542.324 48.7939 538.735 48.7939C533.637 48.7939 529.513 50.1108 526.355 52.7778C523.197 55.4486 521.191 59.0489 520.32 63.6157H551.122ZM517.383 80.9054C517.28 81.4329 517.199 81.9826 517.147 82.5211C517.081 83.0597 517.066 83.6057 517.066 84.159C517.066 88.3016 518.42 91.5736 521.131 94.0156C523.857 96.4687 527.222 97.675 531.228 97.675C533.954 97.675 536.577 97.0516 539.059 95.8195C541.56 94.5616 543.619 92.7098 545.245 90.1903H577.693C575.299 95.5133 572.178 99.9584 568.323 103.555C564.453 107.13 560.204 110.04 555.523 112.287C550.845 114.493 545.932 116.082 540.775 117.005C535.595 117.919 530.542 118.384 525.536 118.384C519.449 118.384 513.85 117.621 508.751 116.094C503.639 114.577 499.238 112.298 495.553 109.251C491.849 106.222 488.975 102.5 486.913 98.0845C484.848 93.6763 483.804 88.6188 483.804 82.8494C483.804 81.4329 483.903 79.9832 484.058 78.5187C484.202 77.0579 484.405 75.5824 484.623 74.0441C485.818 67.098 488.157 60.7605 491.639 55.0612C495.11 49.3619 499.371 44.5221 504.421 40.5566C509.478 36.5837 515.126 33.5219 521.371 31.3381C527.631 29.1654 534.171 28.0846 541.011 28.0846C547.861 28.0846 553.918 29.0658 559.193 31.0172C564.453 32.9649 568.902 35.691 572.488 39.1696C576.059 42.6445 578.788 46.8904 580.625 51.8888C582.477 56.8725 583.399 62.3689 583.399 68.3485C583.399 72.0448 582.96 76.2206 582.097 80.9054H517.383ZM625.346 32.9698H594.392L579.714 118.382H613.622L621.115 74.8606C621.989 69.3199 623.616 64.9892 625.999 61.8979C628.393 58.8066 632.218 57.261 637.43 57.261C641.116 57.261 643.635 58.2349 644.993 60.1936C646.354 62.1451 647.036 64.5871 647.036 67.5271C647.036 69.3863 646.874 71.2713 646.553 73.2338L638.714 118.382H672.637L681.416 67.1951C682.069 63.4989 682.409 59.9797 682.409 56.6118C682.409 48.1347 680.177 41.6534 675.721 37.212C671.257 32.7632 664.256 30.5241 654.687 30.5241C648.172 30.5241 642.473 31.8632 637.582 34.5155C632.694 37.201 627.858 41.1222 623.066 46.342L625.346 32.9698ZM735.326 117.738C731.508 117.938 728.003 118.118 724.79 118.229C721.6 118.343 718.634 118.38 715.911 118.38C710.802 118.38 706.516 118.133 703.045 117.654C699.562 117.174 696.788 116.289 694.723 115.045C692.657 113.806 691.192 112.128 690.314 110.069C689.447 108.029 689.02 105.406 689.02 102.26C689.02 100.308 689.16 98.1025 689.429 95.6494C689.702 93.2074 690.093 90.5035 690.643 87.5745L696.847 51.9032H684.774L688.046 32.3264H700.588L705.324 5.75179H738.727L734.009 32.3264H750.303L747.034 51.9032H730.737L725.37 82.9929C725.148 83.9816 724.993 84.8558 724.875 85.66C724.761 86.4937 724.706 87.2204 724.706 87.877C724.706 89.9538 725.37 91.4257 726.664 92.311C727.985 93.1742 730.42 93.6021 734.009 93.6021H739.384L735.326 117.738ZM788.103 32.9698H757.286L742.626 118.382H776.531L781.585 88.8783C783.211 79.6672 786.066 73.1748 790.143 69.4822C794.223 65.797 799.726 63.9415 806.68 63.9415C807.879 63.9415 809.048 64.0596 810.199 64.2625C810.424 64.3073 810.649 64.3518 810.873 64.3962L811.294 64.4793C812.052 64.6289 812.801 64.7769 813.526 64.9265L819.572 31.0184C818.856 30.928 818.146 30.8147 817.486 30.7093L817.486 30.7091L817.367 30.6901C816.658 30.5831 815.924 30.5241 815.164 30.5241C802.22 30.5241 792.334 37.1014 785.506 50.2485H785.163L788.103 32.9698ZM849.266 99.1371C852.184 99.1371 854.777 98.617 857.005 97.5288C859.23 96.4442 861.104 94.9466 862.616 93.0284C864.155 91.1323 865.328 88.9079 866.206 86.3441C867.083 83.7988 867.674 81.0654 868.006 78.1253C864.97 79.4238 861.886 80.3718 858.798 80.9879C855.711 81.5781 852.815 82.231 850.159 82.9393C847.499 83.6439 845.194 84.6436 843.312 85.9531C841.398 87.2516 840.232 89.2473 839.801 91.9881V92.9546C839.801 94.8211 840.579 96.3078 842.165 97.4402C843.737 98.5912 846.112 99.1371 849.266 99.1371ZM864.94 118.566L864.741 106.821C859.215 111.365 853.745 114.446 848.352 116.017C842.988 117.581 837.093 118.378 830.671 118.378C827.093 118.378 823.658 117.976 820.408 117.175C817.151 116.36 814.322 115.084 811.935 113.328C809.534 111.594 807.63 109.466 806.217 106.883C804.819 104.349 804.104 101.265 804.104 97.6723C804.104 96.1562 804.255 94.4778 804.602 92.637C805.682 86.211 808.051 81.1942 811.684 77.5459C815.325 73.9123 819.571 71.1715 824.407 69.3271C829.217 67.4716 834.352 66.2026 839.723 65.4833C842.032 65.1822 844.272 64.8913 846.442 64.6095C849.325 64.2353 852.084 63.877 854.719 63.5319C859.333 62.9232 863.258 62.1338 866.449 61.0862C869.644 60.0459 871.488 58.183 871.909 55.4643C871.909 55.2504 871.949 55.0585 871.997 54.8962C872.045 54.7302 872.071 54.5495 872.071 54.3318C872.082 53.0186 871.687 51.9857 870.931 51.2332C870.171 50.4807 869.271 49.9015 868.234 49.5068C867.213 49.1305 866.11 48.8723 864.907 48.6953C863.716 48.5329 862.723 48.4518 861.971 48.4518C860.761 48.4518 859.499 48.5329 858.145 48.6953C856.788 48.8723 855.497 49.2523 854.305 49.8536C853.11 50.4512 852.007 51.2885 850.971 52.3731C849.941 53.4686 849.196 54.9294 848.765 56.7812H816.166C816.93 52.196 818.45 48.1604 820.737 44.6264C823.016 41.0962 826.259 38.0971 830.427 35.6625C834.622 33.2168 839.742 31.3391 845.828 30.0407C851.915 28.7164 859.215 28.0893 867.674 28.0893C875.395 28.0893 881.732 28.602 886.653 29.6423C891.607 30.6604 895.499 32.1618 898.314 34.1242C901.143 36.0646 903.105 38.4107 904.186 41.122C905.267 43.837 905.828 46.8877 905.828 50.263C905.828 52.314 905.684 54.4388 905.415 56.6005C905.138 58.7806 904.776 61.0566 904.352 63.4544L897.495 103.39C897.196 105.234 897.019 106.758 897.019 107.942C897.019 109.156 897.225 110.207 897.668 111.126C898.1 112.048 898.93 113.118 900.11 114.316L899.988 118.566H864.94ZM164.706 26.7555C164.697 26.7619 164.695 26.7594 164.678 26.727C164.655 26.684 164.603 26.5883 164.467 26.3903L164.46 26.3818C164.197 26.0531 163.786 25.537 163.139 24.9775C161.858 23.8561 159.719 22.5059 156.185 21.8456C154.444 21.5321 152.957 21.5173 151.718 21.6501C148.671 21.9711 146.863 23.1847 146.247 23.6569C146.074 23.7897 146.085 23.8081 146.085 23.8081C144.786 25.1029 142.669 25.114 141.356 23.8081C140.05 22.4986 140.05 20.3885 141.356 19.0753C141.68 18.747 144.919 15.652 151.017 15.0102C152.883 14.822 155.008 14.8663 157.358 15.2795V15.2758C166.979 16.9911 170.461 23.2253 170.682 23.7565C171.509 25.387 170.848 27.4085 169.192 28.2311C168.827 28.4229 168.432 28.5409 168.034 28.5778C166.698 28.718 165.341 28.0245 164.706 26.7555ZM153.155 42.3399C157.943 42.3546 161.831 39.0568 161.857 34.9437C161.886 30.8565 158.013 27.4848 153.225 27.459C148.422 27.4479 144.523 30.7532 144.516 34.8736C144.493 38.9609 148.359 42.3178 153.155 42.3399Z" fill="#FF7A00" fill-rule="evenodd" />
<path clip-rule="evenodd" d="M65.8562 51.2376H50.7097L54.6088 27.9314H72.5367C76.5539 27.9314 79.8296 28.7208 82.3159 30.2886C84.8243 31.8748 86.0601 34.3389 86.0601 37.7032C86.0601 38.8025 86.0158 39.6103 85.9015 40.1489C85.2559 44.2915 83.2381 47.1651 79.8628 48.7956C76.4986 50.415 71.8321 51.2376 65.8562 51.2376ZM39.1268 117.899L46.143 76.9897H57.8736C64.7128 76.9897 69.4124 77.8308 71.9688 79.5055C74.5215 81.2135 75.8089 84.1092 75.8089 88.2408C75.8089 90.7455 75.4769 93.7667 74.8203 97.367C74.171 100.949 73.6988 104.188 73.4332 107.047C73.1713 109.953 73.0238 112.3 73.0238 114.162C73.0238 115.564 73.1308 116.815 73.3595 117.899H112.314L112.793 114.321C110.846 114.321 109.868 113.011 109.868 110.415C109.868 108.884 110.078 106.766 110.525 104.048C110.953 101.336 111.55 97.9056 112.314 93.7667C113.077 89.3179 113.457 85.4188 113.457 82.0398C113.457 78.7862 113.077 76.1265 112.314 74.0644C111.55 71.9913 110.495 70.2538 109.141 68.841C107.777 67.4282 106.15 66.2625 104.239 65.3403C102.347 64.4144 100.196 63.518 97.8093 62.6363C104.973 60.803 110.599 57.2395 114.667 51.9755C118.751 46.6968 121.381 40.6913 122.576 33.9554C123.119 30.9158 123.403 28.2377 123.403 25.969C123.403 21.6198 122.558 17.8793 120.854 14.7217C119.179 11.5603 116.464 8.93752 112.716 6.82381C108.964 4.7064 104.128 3.13494 98.2077 2.0873C92.2907 1.06549 85.0237 0.552734 76.4581 0.552734H21.0366L0.659302 117.899H39.1268ZM137.751 48.5791L118.657 117.9H152.406L162.315 48.5791H137.751ZM177.394 32.4887H208.366L206.079 45.8609C210.859 40.6411 215.699 36.7235 220.583 34.0344C225.482 31.3858 231.189 30.043 237.707 30.043C247.257 30.043 254.274 32.2821 258.73 36.7309C263.19 41.1723 265.41 47.6536 265.41 56.1307C265.41 59.4986 265.082 63.0178 264.44 66.714L255.639 117.901H221.723L229.555 72.7527C229.879 70.7902 230.053 68.9052 230.053 67.046C230.053 64.106 229.355 61.664 228.002 59.7126C226.648 57.7538 224.117 56.7799 220.425 56.7799C215.216 56.7799 211.387 58.3255 209.015 61.4168C206.617 64.5118 204.983 68.8388 204.127 74.3795L196.624 117.901H162.727L177.394 32.4887ZM310.705 54.044C312.553 53.0554 314.726 52.5721 317.22 52.5721H317.559C321.897 52.5721 324.933 53.8559 326.667 56.427C328.404 58.9834 329.29 62.0562 329.29 65.6676C329.29 67.5231 329.113 69.327 328.803 71.0792C328.371 73.37 327.703 75.5833 326.84 77.7118C325.977 79.8402 324.856 81.7253 323.505 83.3668C322.144 84.9899 320.51 86.3179 318.614 87.2659C316.699 88.2619 314.567 88.7673 312.17 88.7673H311.365C307.544 88.664 304.814 87.3877 303.117 84.9087C301.45 82.452 300.609 79.5378 300.598 76.1403C300.598 75.5021 300.616 74.8418 300.686 74.1815C300.73 73.5434 300.808 72.8203 300.926 72.0457C301.346 69.327 301.985 66.7743 302.804 64.3581C303.608 61.9566 304.666 59.8835 305.972 58.1497C307.289 56.4012 308.861 55.0326 310.705 54.044ZM297.012 121.189V120.706H262.949V121.831C262.949 124.892 263.691 127.829 265.14 130.64C266.612 133.48 268.91 135.974 272.075 138.158C275.226 140.323 279.361 142.049 284.463 143.363C289.575 144.665 295.813 145.31 303.202 145.31C313.748 145.31 322.222 144.137 328.64 141.821C335.044 139.482 340.102 136.247 343.791 132.111C347.483 127.98 350.176 123.14 351.873 117.607C353.544 112.059 354.927 106.079 356.027 99.6864L367.923 30.8927H338.091L336.306 42.0589C333.908 37.9495 330.669 34.6443 326.589 32.1691C322.532 29.6901 317.887 28.4581 312.66 28.4581C305.589 28.4581 299.436 29.7307 294.164 32.276C288.893 34.8398 284.381 38.1413 280.637 42.2286C276.878 46.3048 273.883 50.9454 271.673 56.1614C269.445 61.3849 267.888 66.5936 267.025 71.8133C266.793 73.3331 266.612 74.7939 266.461 76.2067C266.299 77.6196 266.21 79.0435 266.21 80.4416C266.21 84.9088 266.867 89.0809 268.165 92.9948C269.467 96.9123 271.422 100.277 274.041 103.113C276.646 105.928 279.877 108.163 283.725 109.779C287.58 111.398 292.076 112.232 297.174 112.232C303.375 112.232 308.566 111.303 312.749 109.454C316.932 107.617 320.425 105.426 323.262 102.933L321.952 109.941C320.868 116.046 319.064 120.333 316.574 122.83C314.066 125.324 310.38 126.563 305.496 126.563C302.01 126.563 299.675 125.87 298.48 124.461C297.499 123.468 297.012 122.391 297.012 121.189Z" fill="#0684BC" fill-rule="evenodd" />
</svg>
</span>
</a>
</div>
</div>
</div>
<div class="global-header__parsys">
<div data-grid="tablet" class="grid IID-grid-9602ea8f CID-grid-1659f761">
<style>
	@media (max-width: 1229px){.IID-grid-9602ea8f{margin:0 0 28px}}
	@media (max-width: 1229px){.IID-grid-9602ea8f{--halfHorizGap:0px;--halfVertGap:8px}}
</style>
<div class="grid__parsys l-flex--align-items-center        ">
<div class="grid-item l-tab-flex__col--12 l-mob-flex__col--12 IID-grid-item-4ac7029 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-4ac7029{margin:0 30px 0 0}@media (max-width: 767px){.IID-grid-item-4ac7029{margin:0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="phone-number CID-phone-number-a7e901a9 IID-phone-number-50d93451">
<div class="phone-number__wrapper l-flex l-flex--align-items-center" data-dl-custom-type="headerButtons" data-automation-id="Phone number">
<span class="phone-number__title">Talk to an expert:</span>
<div class="phone-number__text l-flex l-flex--align-items-center">
<a href="tel:+44 (0)800 098 8136" data-dl-name="Call" class="phone-number__dynamic-number dynamicNumber">
+44 (0)800 098 8136
</a>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-tab-flex__col--12 l-mob-flex__col--12 IID-grid-item-70f9a9cb CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="grid IID-grid-faa082a5 CID-grid-1659f761">
<div class="grid__parsys         ">
<div class="grid-item IID-grid-item-507b46d3 CID-grid-item-1e7a19ff" data-join="tablet">
<style>.IID-grid-item-507b46d3{margin:0 33px 0 0}@media (max-width: 1229px) and (min-width: 768px){.IID-grid-item-507b46d3{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px){.IID-grid-item-507b46d3{margin:0 26px 0 0}}@media (max-width: 767px){.IID-grid-item-507b46d3{margin:0}.IID-grid-item-507b46d3{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="cta cta--custom cta--link-desktop-size--default cta--link-tablet-size--default cta--link-mobile-size--default IID-cta-4ded10c9 CID-cta-113ca695">
<style>
	
	.IID-cta-4ded10c9.cta--custom .cta__el{font-size:14px;font-weight:400;color:#222;border-radius:4px}
</style>
<div class="cta__wrapper" data-dl-custom-type="headerButtons">
<a class="cta__el cta__el--type--link" href="https://video.ringcentral.com/join" aria-label="Join a meeting" tabindex="0" title="Join a meeting" target="_blank" rel="noopener noreferrer" data-dl-element="button" data-trackname="Site Header|Join a meeting">
<span class="cta__content">
<span class="cta__text">Join a meeting</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div data-support="tablet" class="grid-item IID-grid-item-a5186d61 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="cta cta--custom cta--link-desktop-size--default cta--link-tablet-size--default cta--link-mobile-size--default CID-cta-113ca695 IID-cta-8845e57b">
<style>
	
	.IID-cta-8845e57b.cta--custom .cta__el{font-size:14px;font-weight:400;color:#222;border-radius:4px}
</style>
<div class="cta__wrapper" data-dl-custom-type="headerButtons">
<a class="cta__el cta__el--type--link" href="https://support.ringcentral.com/gb/en/" aria-label="Support" tabindex="0" title="Support" target="_blank" rel="noopener noreferrer" data-dl-element="button" data-trackname="Site Header|Support" data-funnel-type="secure">
<span class="cta__content">
<span class="cta__text">Support</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-tab-flex__col--12 l-mob-flex__col--12 CID-grid-item-1e7a19ff IID-grid-item-1220884e">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-login="tablet" class="login itlList IID-login-2fa4f247 CID-login-50763168">
<div class="login__wrapper" data-cs-override-id="login_button" data-dl-custom-type="headerButtons">
<button class="login__toggler" title="Login" data-dl-element="button" data-automation-id="Login">
<div class="login__toggler-icon-block u-mob-display-none">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-2063957340-1707369137-title" class="login__toggler-icon" id="svg-2063957340-1707369137" role="img" viewBox="0 0 12.812 6.906">
<title id="svg-2063957340-1707369137-title">Click to expand for more information</title>
<path d="M6.977 6.906H5.883L.009 1.025 1.042-.008l5.39 5.4c1.852-1.866 4.811-4.85 5.346-5.39l1.029 1.029z" fill-rule="evenodd" />
</svg>
</div>
<div class="login__toggler-text">Login</div>
</button>
<div class="login__dropdown">
<div class="login__item">
<a href="https://app.ringcentral.com/" target="_blank" rel="noopener noreferrer" title="Access your calls, messages, and meetings." data-automation-id="Site Header|RingCentral App" data-trackname="Site Header|RingCentral App" data-dl-name="RingCentral App" class="login__link">
<span class="login__link-icon-block" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--660809422-1471562645-title" class="login__link-icon" id="svg--660809422-1471562645" role="img" viewBox="0 0 56 56">
<title id="svg--660809422-1471562645-title">Access your calls, messages, and meetings.</title>
<g>
<path d="M23.62 46h-7.4a2.69 2.69 0 01-1.73-.61A11.47 11.47 0 0111 40.17a16.59 16.59 0 01-.95-5.6V17a6.8 6.8 0 014.63-6.59 6.94 6.94 0 012.21-.41h22.23A6.82 6.82 0 0146 16.89V28.13A7.84 7.84 0 0143.32 34 11.09 11.09 0 0141 35.61c1.29 2.4 2.6 4.76 3.88 7l.2.38a2 2 0 01-1.76 3h-7.57a2.43 2.43 0 01-2.18-1.27L29 36.83a3 3 0 01-2.16-3v-6a2.19 2.19 0 012.29-2.27h5v-3.7H21.92v11.71a13.45 13.45 0 003.23 8.87 2.19 2.19 0 01.63 1.45 2 2 0 01-.93 1.77 2.28 2.28 0 01-1.23.34zm7.24-12.88a2.41 2.41 0 011.29 1.11L36.61 42h3.33c-1.12-2-2.25-4.08-3.36-6.17a2.19 2.19 0 01-.15-1.92 2.23 2.23 0 011.43-1.28A7.1 7.1 0 0040.59 31 3.88 3.88 0 0042 28.13v-.71V16.9a2.82 2.82 0 00-2.89-2.9H16.89a2.71 2.71 0 00-.93.15A2.82 2.82 0 0014 17v17.61a12.15 12.15 0 00.72 4.24 7.88 7.88 0 002 3.19H20a17.43 17.43 0 01-2.11-8.43V20.27a2.26 2.26 0 012.35-2.34h15.55a2.23 2.23 0 012.33 2.33v7a2.29 2.29 0 01-.66 1.68 2.26 2.26 0 01-1.68.66h-4.92v3.54zM16.21 42zM30 37zm-1.28-.75z" />
<path d="M50 56H14.27A14.28 14.28 0 010 41.74V14.26A14.28 14.28 0 0114.27 0h27.47A14.28 14.28 0 0156 14.26V50h-4V14.26A10.27 10.27 0 0041.74 4H14.27A10.27 10.27 0 004 14.26v27.48A10.27 10.27 0 0014.27 52H50z" />
<path d="M56 54a2 2 0 11-2-2 2 2 0 012 2" fill-rule="evenodd" />
</g>
</svg>
</span>
<span class="login__link-text">
<span class="login__link-title">RingCentral App</span>
<span class="login__link-desc">Access your calls, messages, and meetings.</span>
</span>
</a>
</div>
<div class="login__item">
<a href="https://service.ringcentral.co.uk/" target="_blank" rel="noopener noreferrer" title="Access your account settings." data-automation-id="Site Header|Admin Portal" data-trackname="Site Header|Admin Portal" data-dl-name="Admin Portal" class="login__link">
<span class="login__link-icon-block" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-1330422524--1760632409-title" class="login__link-icon" id="svg-1330422524--1760632409" role="img" viewBox="0 0 56 56">
<title id="svg-1330422524--1760632409-title">Access your account settings.</title>
<g>
<path d="M34.18 56H22.01a2 2 0 01-2-1.56l-1.47-6.51a22.43 22.43 0 01-3.22-1.79l-6.57 2a2 2 0 01-2.32-.9L.35 36.89a2 2 0 01.39-2.5l4.94-4.46q-.09-1-.09-1.95c0-.56 0-1.14.07-1.73l-5-4.51a2 2 0 01-.38-2.5l6.1-10.38a2 2 0 012.31-.9l6.45 2a22.8 22.8 0 013.25-1.87l1.48-6.53A2 2 0 0121.82 0h12.19a2 2 0 012 1.56l1.48 6.53a22.22 22.22 0 013.15 1.79l6.63-2.05a2 2 0 012.32.9l6.1 10.38a2 2 0 01-.39 2.5l-5.08 4.58c0 .61.07 1.21.07 1.79s0 1.08-.06 1.63l5.15 4.65a2 2 0 01.38 2.49l-6.13 10.39a2 2 0 01-2.32.9l-6.6-2a22.46 22.46 0 01-3.07 1.78l-1.51 6.67A2 2 0 0134.18 56zm-10.6-4h9l1.43-6.08a2 2 0 011.17-1.41 18.23 18.23 0 004-2.31 2 2 0 011.8-.32l6 1.87 4.47-7.61-4.69-4.23a2 2 0 01-.65-1.74 16.63 16.63 0 00.14-2.17 18.83 18.83 0 00-.15-2.33 2 2 0 01.64-1.74l4.63-4.18-4.47-7.61L40.84 14a2 2 0 01-1.8-.31 17.84 17.84 0 00-4.03-2.32A2 2 0 0133.77 10l-1.35-6h-9l-1.35 6a2 2 0 01-1.19 1.41 18.18 18.18 0 00-4.17 2.39 2 2 0 01-1.8.31l-5.9-1.86-4.46 7.61L9.1 24a2 2 0 01.64 1.74A18.17 18.17 0 009.59 28a17.53 17.53 0 00.18 2.47 2 2 0 01-.64 1.76l-4.5 4.06L9.1 43.9l6-1.86a2 2 0 011.78.31 18.44 18.44 0 004.13 2.29 2 2 0 011.21 1.41z" />
<path d="M36.01 28.83a8 8 0 11-8-8.83 7.91 7.91 0 014.59 1.46l3.49-2.32A12 12 0 1040.01 28a12.94 12.94 0 00-.13-1.77z" fill-rule="evenodd" />
<path d="M37.67 25.26a2 2 0 11.56-2.77 2 2 0 01-.56 2.77" fill-rule="evenodd" />
</g>
</svg>
</span>
<span class="login__link-text">
<span class="login__link-title">Admin Portal</span>
<span class="login__link-desc">Access your RingCentral App account settings.</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-mob-flex__col--12 IID-grid-item-b55dd9bd CID-grid-item-1e7a19ff">
<style>@media (min-width: 1230px){.IID-grid-item-b55dd9bd{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-grid-item-b55dd9bd{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-grid-item-b55dd9bd{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="cta cta--custom cta--link-desktop-size--default cta--link-tablet-size--default cta--link-mobile-size--default IID-cta-eb78d58 CID-cta-113ca695">
<style>
	.IID-cta-eb78d58{padding:20px 30px 20px 23px}@media (max-width: 1229px){.IID-cta-eb78d58{margin:0 30px 0 0}}@media (max-width: 767px){.IID-cta-eb78d58{margin:0}.IID-cta-eb78d58{padding:0}}
	.IID-cta-eb78d58.cta--custom .cta__el{font-size:14px;font-weight:500;color:#001138}
</style>
<div class="cta__wrapper" data-dl-custom-type="headerButtons">
<a class="cta__el cta__el--type--link" href="https://support.ringcentral.com/" aria-label="Support" tabindex="0" title="Login" target="_blank" rel="noopener noreferrer" data-dl-element="button" data-trackname="Site Header|Login">
<span class="cta__content">
<span class="cta__text">Login</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="global-header__search">
<div class="search">
<div class="search__wrapper" data-optgroup-title="Suggestions">
<div class="search__form-overlay search__toggler-element"></div>
<form class="search__form" role="search" action="/gb/en/search.html" method="get" autocomplete="off">
<div class="search__form-container">
<div class="search__field-icon search__field-icon--search" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" id="svg--1603000658" role="img" viewBox="0 0 20 20">
<path d="M19.73 18.45l-6.71-6.73a7.27 7.27 0 1 0-1.28 1.29l6.7 6.72a.9.9 0 0 0 1.3 0 .9.9 0 0 0 0-1.28M1.81 7.27a5.46 5.46 0 1 1 10.92.01 5.46 5.46 0 0 1-10.92 0" />
</svg>
</div>
<div class="search__field-wrapper">
<input type="text" class="search__field" name="q" tabindex="0" placeholder="Search ringcentral.com/gb/en" aria-label="Search ringcentral.com/gb/en" />
</div>
<button type="button" class="search__field-icon search__field-icon--close search__toggler-element" aria-label="Close search box">
<span aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.42 12.31" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--21285217" />
</svg>
</span>
</button>
<input type="submit" tabindex="-1" class="search__submit" />
</div>
<div class="search__form-end" tabindex="0"></div>
</form>
<button class="search__toggler search__toggler-element" aria-label="Site search" data-automation-id="Search">
<div class="search__toggler-icon search__toggler-icon--on" data-dl-element="button" data-dl-button-name="Search button" data-dl-name="Search button" aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1603000658" />
</svg>
</div>
</button>
</div>
<script type="application/ld+json">
{
	"@context": "http://schema.org",
	"@type": "WebSite",
	"url": "https://www.ringcentral.com/gb/en/",
	"potentialAction": {
		"@type": "SearchAction",
		"target": "https://www.ringcentral.com/gb/en/search?&q={q}",
		"query-input": "required name=q"
	}
}


</script>
</div>
</div>
<nav class="global-header__nav header-nav-space" role="navigation" aria-label="Main Navigation">
<div data-orange="true" class="primary-nav primary-nav--small primary-nav--rc2_0-rebranding CID-primary-nav-40e8e197 IID-primary-nav-5d1a8435">
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/structure/primary-nav/clientlibs/common.min.3b57897f8fb8dd4416e4d697ca1dccde.css" type="text/css" />
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/components/structure/primary-nav/clientlibs/common.min.1a772c44eae7c96e5e521d239bbdf147.js","dependencies":[{"path":"/etc.clientlibs/rc-www/clientlibs/essential.min.f35326dc52e2f83caa7d3e0ce7ea4596.js","dependencies":null,"embed":[],"properties":{}}],"embed":null,"properties":{}}]',
            async: 'true'
        });
	</script>
<style>@media (max-width: 1229px){.IID-primary-nav-5d1a8435{margin:0 0 48px}}</style>
<div class="primary-nav__wrapper" data-dl-custom-type="navMenu" data-automation-resolution="desktop" data-automation-segment="small">
<div class="primary-nav__item primary-nav__item--has-dropdown  " data-section-name="Products" data-dl-cmp="Products">
<div class="primary-nav__link-wrapper">
<button tabindex="0" data-dl-name="Products" class="primary-nav__link" data-automation-id="Products" data-dl-events-hover="true" data-dl-element="dropdown">
<span class="primary-nav__link-text">Products</span>
<span class="primary-nav__link-icon" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" id="svg-2063957340" role="img" viewBox="0 0 12.812 6.906">
<path d="M6.977 6.906H5.883L.009 1.025 1.042-.008l5.39 5.4c1.852-1.866 4.811-4.85 5.346-5.39l1.029 1.029z" fill-rule="evenodd" />
</svg>
</span>
</button>
</div>
<div class="primary-nav__dropdown">
<div class="primary-nav__dropdown-content">
<div class="l-container">
<div class="primary-nav__dropdown-wrapper ">
<div class="primary-nav__content-block">
<div class="grid IID-grid-4ad6d8c5 CID-grid-1659f761">
<style>
	.IID-grid-4ad6d8c5{min-height:437px}@media (max-width: 1229px){.IID-grid-4ad6d8c5{min-height:0}}
	
</style>
<div class="grid__parsys       l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-wrap ">
<div class="grid-item IID-grid-item-4737f4b3 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth IID-background-e2a1173f CID-background-79490109" data-navigation-wrapper="tablet">
<style>
	.IID-background-e2a1173f{color:#222;padding:44px 35px 23px}@media (max-width: 1229px){.IID-background-e2a1173f{padding:28px 0 0}}@media (max-width: 767px){.IID-background-e2a1173f{padding:0}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="rawhtml IID-rawhtml-b7c02e34 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
	.primary-nav .links-list__link-label{
		text-transform: none;
		font-size: 10px;
		color: #401D19;
		background: linear-gradient(98deg, #E54800 -13.26%, #FE8624 52.57%, #FFAB64 115.51%);
	}
	.primary-nav[data-orange="true"] .primary-nav__dropdown .links-list__description{
		font-weight: 400;
	}
	.primary-nav__dropdown .links-list[data-padding="vertical"] .links-list__link{
		padding-top: 16px;
		padding-bottom: 16px;
	}
	.primary-nav .link-card:hover [data-link="hover"]{
		color: #852800;
	}
</style>
</div>
</div>
<div class="rawhtml IID-rawhtml-6377c020 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
	.primary-nav--rc2_0-rebranding .primary-nav__item:first-child .primary-nav-dropdown-item .primary-nav-dropdown-item__shadow,
	.primary-nav--rc2_0-rebranding .primary-nav__item:first-child .primary-nav-dropdown-item:hover .primary-nav-dropdown-item__shadow {
		display: none;
	}
	.primary-nav--rc2_0-rebranding .primary-nav__item:first-child .primary-nav-dropdown-item .primary-nav-dropdown-item__text,
	.primary-nav--rc2_0-rebranding .primary-nav__item:first-child .primary-nav-dropdown-item:hover .primary-nav-dropdown-item__text {
		color: inherit;
	}
	@media only screen and (max-width: 1229px){
		.global-header .global-header__wrapper--design-2023 .global-header__nav .primary-nav--rc2_0-rebranding .primary-nav__item--hover .primary-nav__link-text {
			color: #852800;
		}
		.global-header .global-header__wrapper--design-2023 .global-header__nav .primary-nav--rc2_0-rebranding .primary-nav__item--hover .primary-nav__link-icon {
			color: #852800;
		}
		.global-header__wrapper--design-2023 .global-header__nav .primary-nav ~ .grid .cta {
			padding-left: 0px;
		}
		.global-header .global-header__wrapper--design-2023 .primary-nav--rc2_0-rebranding .primary-nav__item:last-of-type .primary-nav__link {
			border-bottom: 0;
		}
	}
	@media only screen and (max-width: 1229px) and (min-width: 768px), only screen and (orientation: landscape) and (max-device-width: 1229px) and (min-device-width: 768px){
		.global-header .primary-nav__content-block .background__content {
			padding-left: 0px;
		}
	}
	
</style>
</div>
</div>
<div data-grid-wrapper="padding" class="grid CID-grid-1659f761 IID-grid-6eb6219">
<style>
	@media (max-width: 1229px){.IID-grid-6eb6219{padding:0 16px 0 0}}
	.IID-grid-6eb6219{--halfHorizGap:10.5px;--halfVertGap:0px}@media (max-width: 1229px){.IID-grid-6eb6219{--halfHorizGap:0px;--halfVertGap:0px}}
</style>
<div class="grid__parsys       l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-wrap ">
<div class="grid-item l-flex__col--2 l-tab-flex__col--12 l-mob-flex__col--12 l-flex__col--flex-grow-1 IID-grid-item-4784bddf CID-grid-item-1e7a19ff" data-grid-item="padding">
<style>.IID-grid-item-4784bddf{padding:0 0 48px}@media (max-width: 1229px){.IID-grid-item-4784bddf{padding:0 0 32px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="link-card IID-link-card-631b52a2 CID-link-card-7153c5c8">
<style>
	.IID-link-card-631b52a2{color:#222;border-color:rgba(156,126,113,.3);border-width:1px;border-style:solid;border-radius:14px;min-height:138px}.IID-link-card-631b52a2:hover{background-color:#fae5d1;border-color:#fff}.IID-link-card-631b52a2[data-active="true"]{border-color:#fff}@media (min-width: 1488px){.IID-link-card-631b52a2{border-radius:14px}}@media (max-width: 1229px){.IID-link-card-631b52a2{min-height:0}}[data-active="true"] .IID-link-card-631b52a2:not([data-active]):not([data-active="true"] [data-active="false"] .IID-link-card-631b52a2){border-color:#fff}
</style>
<div class="link-card__wrapper link-card__wrapper--type--link" data-delegate-hover="true">
<div class="link-card__parsys" aria-hidden="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-cd7122c5" data-link="hover">
<style>
	.IID-custom-text-cd7122c5{margin:32px 12px 8px}
	.IID-custom-text-cd7122c5{font-size:16px;font-weight:500;line-height:1.2;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Phone &amp; Message</div>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-8deaa42c">
<style>
	.IID-custom-text-8deaa42c{color:#6f6f6f;margin:0 12px 28px}
	.IID-custom-text-8deaa42c{font-size:12px;font-weight:400;line-height:1.4;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>The complete cloud communication solution</div>
</div>
</div>
</div>
<a href="/gb/en/office/product-overview.html" target="_self" class="link-card__overlay link-card__overlay--type--link " data-dl-element="button">
</a>
</div>
</div>
<div class="links-list IID-links-list-223c7097 links-list--direction--vertical CID-links-list-2da41a0d links-list--mob-direction--vertical" data-links="padding">
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/content/links-list/clientlibs/common.min.136b21e71dc46f03ee6dea30dac6bc7f.css" type="text/css" />
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/components/content/links-list/clientlibs/common.min.c7be8a3fea9acfa8be9b5235a09edba3.js","dependencies":[{"path":"/etc.clientlibs/rc-www/clientlibs/essential.min.f35326dc52e2f83caa7d3e0ce7ea4596.js","dependencies":null,"embed":[],"properties":{}}],"embed":null,"properties":{}}]',
            async: 'true'
        });
	</script>
<style>
	.IID-links-list-223c7097{color:#6f6f6f;padding:28px 0 0}@media (max-width: 1229px){.IID-links-list-223c7097{padding:16px 0 0}}@media (max-width: 767px){.IID-links-list-223c7097{margin:0}}
	.IID-links-list-223c7097 .links-list__link{font-weight:500;font-size:14px;color:#222;padding:12px;border-radius:14px}.IID-links-list-223c7097 .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper links-list__wrapper--item-as-link">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/solutions/office/call.html" data-automation-id="Products - Business Phone System" data-dl-name="Products - Business Phone System" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">Business Phone System</span>
</span>
<span class="links-list__description">Reliable, AI-first cloud calling across devices</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/microsoft-teams.html" data-automation-id="Products - RingCentral for Microsoft Teams" data-dl-name="Products - RingCentral for Microsoft Teams" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">RingCentral for Microsoft Teams</span>
</span>
<span class="links-list__description">AI-first calling, SMS, and fax in Teams</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/video.html" data-automation-id="Products - Video Meetings" data-dl-name="Products - Video Meetings" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">Video Meetings</span>
</span>
<span class="links-list__description">AI-first meetings, transcripts, &amp; recordings </span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/fax/features/how-it-works.html" data-automation-id="Products - Cloud Faxing" data-dl-name="Products - Cloud Faxing" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">Cloud Faxing</span>
</span>
<span class="links-list__description">Easy to use, secure digital fax solutions</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/teams/overview.html" data-automation-id="Products - Team Messaging" data-dl-name="Products - Team Messaging" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">Team Messaging</span>
</span>
<span class="links-list__description">Organised chat &amp; file-sharing</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="grid-item l-flex__col--2 l-tab-flex__col--12 l-mob-flex__col--12 l-flex__col--flex-grow-1 IID-grid-item-548978b8 CID-grid-item-1e7a19ff" data-grid-item="padding">
<style>.IID-grid-item-548978b8{padding:0 0 48px}@media (max-width: 1229px){.IID-grid-item-548978b8{padding:0 0 32px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth background--vertical-alignment--top IID-background-2492fafa CID-background-79490109">
<style>
	.IID-background-2492fafa{border-color:rgba(156,126,113,.3);border-width:1px;border-style:solid;border-radius:14px;min-height:138px;max-height:138px}@media (min-width: 1488px){.IID-background-2492fafa{border-radius:14px}}@media (max-width: 1229px){.IID-background-2492fafa{min-height:0;max-height:100%}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-e4b793ae" data-link="hover">
<style>
	.IID-custom-text-e4b793ae{margin:32px 12px 8px}body.page .IID-custom-text-e4b793ae a{color:#222}body.page .IID-custom-text-e4b793ae a:hover{color:#852800}
	.IID-custom-text-e4b793ae{font-size:16px;font-weight:500;line-height:1.2;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Contact Centre</div>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-69b6691b">
<style>
	.IID-custom-text-69b6691b{color:#6f6f6f;margin:0 12px 28px}
	.IID-custom-text-69b6691b{font-size:12px;font-weight:400;line-height:1.4;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Omnichannel Contact Centres for every budget and business size</div>
</div>
</div>
</div>
</div>
</div>
<div class="links-list IID-links-list-56badf24 CID-links-list-2da41a0d" data-links="padding">
<style>
	.IID-links-list-56badf24{padding:28px 0 0}@media (max-width: 1229px){.IID-links-list-56badf24{padding:16px 0 0}}@media (max-width: 767px){.IID-links-list-56badf24{margin:0}}
	.IID-links-list-56badf24 .links-list__link{font-weight:500;font-size:14px;color:#222;padding:12px;border-radius:14px}.IID-links-list-56badf24 .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper links-list__wrapper--item-as-link">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/ringcx.html" data-automation-id="Products - RingCX" data-dl-name="Products - RingCX" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">RingCX</span>
<span class="links-list__link-label">New</span>
</span>
<span class="links-list__description">AI-First Contact Centre that&#39;s simple to use and easy to deploy</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/contact-centre/overview.html" data-automation-id="Products - RingCentral Contact Center" data-dl-name="Products - RingCentral Contact Center" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">RingCentral Contact Centre</span>
</span>
<span class="links-list__description">Contact Centre solution for advanced, large-scale enterprise deployments</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="grid-item l-flex__col--2 l-tab-flex__col--12 l-mob-flex__col--12 l-flex__col--flex-grow-1 IID-grid-item-463daa9 CID-grid-item-1e7a19ff" data-grid-item="padding">
<style>.IID-grid-item-463daa9{padding:0 0 48px}@media (max-width: 1229px){.IID-grid-item-463daa9{padding:0 0 32px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth background--vertical-alignment--top CID-background-79490109 IID-background-1362dc89">
<style>
	.IID-background-1362dc89{border-color:rgba(156,126,113,.3);border-width:1px;border-style:solid;border-radius:14px;min-height:138px;max-height:138px}@media (min-width: 1488px){.IID-background-1362dc89{border-radius:14px}}@media (max-width: 1229px){.IID-background-1362dc89{min-height:0;max-height:100%}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-854f90fd" data-link="hover">
<style>
	.IID-custom-text-854f90fd{margin:32px 12px 8px}body.page .IID-custom-text-854f90fd a{color:#222}body.page .IID-custom-text-854f90fd a:hover{color:#852800}
	.IID-custom-text-854f90fd{font-size:16px;font-weight:500;line-height:1.2;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Video</div>
</div>
</div>
<div class="custom-text IID-custom-text-d914a4ec CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-d914a4ec{color:#6f6f6f;margin:0 12px 28px}
	.IID-custom-text-d914a4ec{font-size:12px;font-weight:400;line-height:1.4;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Smarter video experiences from start to finish</div>
</div>
</div>
</div>
</div>
</div>
<div class="links-list CID-links-list-2da41a0d IID-links-list-463ade13" data-links="padding">
<style>
	.IID-links-list-463ade13{padding:28px 0 0}@media (max-width: 1229px){.IID-links-list-463ade13{padding:16px 0 0}}@media (max-width: 767px){.IID-links-list-463ade13{margin:0}}
	.IID-links-list-463ade13 .links-list__link{font-weight:500;font-size:14px;color:#222;padding:12px;border-radius:14px}.IID-links-list-463ade13 .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper links-list__wrapper--item-as-link">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/webinar.html" data-automation-id="Products - Webinar" data-dl-name="Products - Webinar" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">Webinar</span>
</span>
<span class="links-list__description">Hassle-free webinar solution for single-session events</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/video.html" data-automation-id="Products - Video Meetings" data-dl-name="Products - Video Meetings" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">Video Meetings</span>
</span>
<span class="links-list__description">Al-first meetings with transcripts, summaries, recordings, and messaging</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/rooms.html" data-automation-id="Products - Rooms" data-dl-name="Products - Rooms" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">Rooms</span>
</span>
<span class="links-list__description">Conference rooms that make it easy to run or join meetings</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="grid-item l-flex__col--2 l-tab-flex__col--12 l-mob-flex__col--12 l-flex__col--flex-grow-1 CID-grid-item-1e7a19ff IID-grid-item-dd496864" data-grid-item="padding">
<style>.IID-grid-item-dd496864{padding:0 0 48px}@media (max-width: 1229px){.IID-grid-item-dd496864{padding:0 0 32px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth background--vertical-alignment--top IID-background-f9b20c6e CID-background-79490109">
<style>
	.IID-background-f9b20c6e{border-color:rgba(156,126,113,.3);border-width:1px;border-style:solid;border-radius:14px;min-height:138px;max-height:138px}@media (min-width: 1488px){.IID-background-f9b20c6e{border-radius:14px}}@media (max-width: 1229px){.IID-background-f9b20c6e{min-height:0;max-height:100%}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-eca24738" data-link="hover">
<style>
	.IID-custom-text-eca24738{margin:32px 12px 8px}
	.IID-custom-text-eca24738{font-size:16px;font-weight:500;line-height:1.2;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Revenue Intelligence</div>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-d30a7b0">
<style>
	.IID-custom-text-d30a7b0{color:#6f6f6f;margin:0 12px 28px}
	.IID-custom-text-d30a7b0{font-size:12px;font-weight:400;line-height:1.4;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>AI for accelerating revenue and unlocking new efficiencies at scale</div>
</div>
</div>
</div>
</div>
</div>
<div class="links-list IID-links-list-2c8a0df8 CID-links-list-2da41a0d" data-links="padding">
<style>
	.IID-links-list-2c8a0df8{padding:28px 0 0}@media (max-width: 1229px){.IID-links-list-2c8a0df8{padding:16px 0 0}}@media (max-width: 767px){.IID-links-list-2c8a0df8{margin:0}}
	.IID-links-list-2c8a0df8 .links-list__link{font-weight:500;font-size:14px;color:#222;padding:12px;border-radius:14px}.IID-links-list-2c8a0df8 .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper links-list__wrapper--item-as-link">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/ringsense.html" data-automation-id="Products - RingSense for Sales" data-dl-name="Products - RingSense for Sales" target="_self">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">RingSense for Sales</span>
<span class="links-list__link-label">New</span>
</span>
<span class="links-list__description">AI-powered conversation intelligence for sales leaders, teams, managers, account executives, and more</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="grid-item l-flex__col--2 l-tab-flex__col--12 l-flex__col--flex-grow-1 CID-grid-item-1e7a19ff IID-grid-item-48fbba80">
<style>@media (max-width: 1229px){.IID-grid-item-48fbba80{padding:0 0 32px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="link-card IID-link-card-be05c8d3 CID-link-card-7153c5c8">
<style>
	.IID-link-card-be05c8d3{color:#222;border-color:rgba(156,126,113,.3);border-width:1px;border-style:solid;border-radius:14px;min-height:138px}.IID-link-card-be05c8d3:hover{background-color:#fae5d1;border-color:#fff}.IID-link-card-be05c8d3[data-active="true"]{border-color:#fff}@media (min-width: 1488px){.IID-link-card-be05c8d3{border-radius:14px}}@media (max-width: 1229px){.IID-link-card-be05c8d3{min-height:0}}[data-active="true"] .IID-link-card-be05c8d3:not([data-active]):not([data-active="true"] [data-active="false"] .IID-link-card-be05c8d3){border-color:#fff}
</style>
<div class="link-card__wrapper link-card__wrapper--type--link" data-delegate-hover="true">
<div class="link-card__parsys" aria-hidden="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-1510f4f4" data-link="hover">
<style>
	.IID-custom-text-1510f4f4{margin:32px 12px 8px}
	.IID-custom-text-1510f4f4{font-size:16px;font-weight:500;line-height:1.2;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Developers</div>
</div>
</div>
<div class="custom-text IID-custom-text-b68c79b CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-b68c79b{color:#6f6f6f;margin:0 12px 28px}
	.IID-custom-text-b68c79b{font-size:12px;font-weight:400;line-height:1.4;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Evolve productivity from our open cloud ecosystem</div>
</div>
</div>
</div>
<a href="https://developers.ringcentral.com/" target="_blank" rel="noopener noreferrer" class="link-card__overlay link-card__overlay--type--link " data-dl-element="button">
</a>
</div>
</div>
<div class="links-list links-list--direction--vertical links-list--tab-direction--vertical links-list--mob-direction--vertical IID-links-list-ddf1a578 CID-links-list-2da41a0d" data-links="padding">
<style>
	.IID-links-list-ddf1a578{padding:28px 0 0}@media (max-width: 1229px){.IID-links-list-ddf1a578{padding:16px 0 0}}@media (max-width: 767px){.IID-links-list-ddf1a578{margin:0}}
	.IID-links-list-ddf1a578 .links-list__link{font-weight:500;font-size:14px;color:#222;padding:12px;border-radius:14px}.IID-links-list-ddf1a578 .links-list__link:hover{color:#852800;background-color:#fae5d1}@media (max-width: 1229px){.IID-links-list-ddf1a578{--columnGap:30px;--columnCount:2;--itemWidth:var(--itemCalcWidth)}}@media (max-width: 767px){.IID-links-list-ddf1a578{--columnGap:0px;--itemWidth:auto}}
</style>
<ul class="links-list__wrapper links-list__wrapper--item-as-link">
<li class="links-list__item">
<a class="links-list__link" href="https://developers.ringcentral.com/login.html#/" data-automation-id="Products - Developers Portal" data-dl-name="Products - Developers Portal" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">Developers Portal</span>
</span>
<span class="links-list__description">Open platform developer portal</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://www.ringcentral.com/apps/" data-automation-id="Products - App Gallery" data-dl-name="Products - App Gallery" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text-wrapper">
<span class="links-list__link-text">App Gallery</span>
</span>
<span class="links-list__description">Integrated business apps</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="primary-nav__dropdown-close">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.42 12.31" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--21285217" />
</svg>
</div>
</div>
<div class="primary-nav__arrow-element"></div>
<div class="primary-nav__end" tabindex="0"></div>
</div>
</div>
<div class="primary-nav__item primary-nav__item--has-dropdown  " data-section-name="Solutions" data-dl-cmp="Solutions">
<div class="primary-nav__link-wrapper">
<button tabindex="0" data-dl-name="Solutions" class="primary-nav__link" data-automation-id="Solutions" data-dl-events-hover="true" data-dl-element="dropdown">
<span class="primary-nav__link-text">Solutions</span>
<span class="primary-nav__link-icon" aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.812 6.906" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-2063957340" />
</svg>
</span>
</button>
</div>
<div class="primary-nav__dropdown">
<div class="primary-nav__dropdown-content">
<div class="l-container">
<div class="primary-nav__dropdown-wrapper ">
<div class="primary-nav__content-block">
<div class="grid IID-grid-576fce46 CID-grid-1659f761">
<div class="grid__parsys       l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-wrap ">
<div class="grid-item l-flex__col--9 l-tab-flex__col--12 IID-grid-item-a88a9152 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth IID-background-9d16b7c0 CID-background-79490109" data-navigation-wrapper="tablet">
<style>
	.IID-background-9d16b7c0{padding:48px 50px}@media (max-width: 1229px){.IID-background-9d16b7c0{padding:25px 30px 5px 0}}@media (max-width: 767px){.IID-background-9d16b7c0{padding:16px 0 5px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid IID-grid-cdf7491a CID-grid-1659f761">
<style>
	@media (max-width: 1229px){.IID-grid-cdf7491a{margin:0 0 32px}}@media (max-width: 767px){.IID-grid-cdf7491a{margin:0}}
	.IID-grid-cdf7491a{--halfHorizGap:25px;--halfVertGap:0px}@media (max-width: 1229px){.IID-grid-cdf7491a{--halfHorizGap:0px;--halfVertGap:0px}}
</style>
<div class="grid__parsys       l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-wrap l-mob-flex--flex-wrap-wrap">
<div class="grid-item l-flex__col--4 l-tab-flex__col--12 l-mob-flex__col--12 IID-grid-item-7f7598fe CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-title="padding" class="custom-text CID-custom-text-e0b1298e IID-custom-text-d9e26e9">
<style>
	.IID-custom-text-d9e26e9{color:#6f6f6f;margin:0 0 24px;padding:0 0 0 12px}@media (min-width: 1488px){.IID-custom-text-d9e26e9{padding-left:12px}}@media (max-width: 1229px){.IID-custom-text-d9e26e9{padding:0}}@media (max-width: 767px){.IID-custom-text-d9e26e9{margin:0 0 24px}.IID-custom-text-d9e26e9{border-style:none}}
	.IID-custom-text-d9e26e9{font-size:12px;font-weight:500;line-height:1.667;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>BY AUDIENCE</div>
</div>
</div>
<div data-padding="vertical" class="links-list links-list--direction--vertical CID-links-list-2da41a0d IID-links-list-bc97d01e" data-links="margin">
<style>
	.IID-links-list-bc97d01e{margin:0 0 14px}@media (max-width: 1229px){.IID-links-list-bc97d01e{margin:0 0 32px}}
	.IID-links-list-bc97d01e .links-list__link{font-weight:500;font-size:16px;color:#222;padding:12px;border-radius:14px}.IID-links-list-bc97d01e .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="navMenu">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/solutions/enterprise-business.html" data-automation-id="Solutions - Enterprise" data-dl-name="Solutions - Enterprise" target="_self">
<span class="links-list__link-text">Enterprise</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/solutions/small-business.html" data-automation-id="Solutions - Small business" data-dl-name="Solutions - Small business" target="_self">
<span class="links-list__link-text">Small business</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/solutions/startups.html" data-automation-id="Solutions - Startups " data-dl-name="Solutions - Startups " target="_self">
<span class="links-list__link-text">Startups </span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/pushtotalk.html" data-automation-id="Solutions - Frontline workers" data-dl-name="Solutions - Frontline workers" target="_self">
<span class="links-list__link-text">Frontline workers</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/ventures.html" data-automation-id="Solutions - RingCentral Ventures" data-dl-name="Solutions - RingCentral Ventures" target="_self">
<span class="links-list__link-text">RingCentral Ventures</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="grid-item l-flex__col--8 l-tab-flex__col--12 l-mob-flex__col--12 IID-grid-item-ad94c439 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-title="padding" class="custom-text IID-custom-text-457c1546 CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-457c1546{color:#6f6f6f;margin:0 0 24px;padding:0 0 0 12px}@media (min-width: 1488px){.IID-custom-text-457c1546{padding-left:12px}}@media (max-width: 1229px){.IID-custom-text-457c1546{padding:0}}@media (max-width: 767px){.IID-custom-text-457c1546{margin:0 0 24px}.IID-custom-text-457c1546{padding:7px 0 0}}
	.IID-custom-text-457c1546{font-size:12px;font-weight:500;line-height:1.667;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>BY INDUSTRY</div>
</div>
</div>
<div class="grid IID-grid-f1b16813 CID-grid-1659f761">
<div class="grid__parsys         ">
<div class="grid-item l-flex__col--6 l-tab-flex__col--12 l-mob-flex__col--12 IID-grid-item-51602b25 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-padding="vertical" class="links-list links-list--direction--vertical CID-links-list-2da41a0d IID-links-list-ab25c217">
<style>
	
	.IID-links-list-ab25c217 .links-list__link{font-weight:500;font-size:16px;color:#222;padding:12px;border-radius:14px}.IID-links-list-ab25c217 .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="navMenu">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/industry-solutions/business-communications-for-financial-services.html" data-automation-id="Solutions - Financial services" data-dl-name="Solutions - Financial services" target="_self">
<span class="links-list__link-text">Financial services</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/industry-solutions/healthcare-communications-cloud-phone-systems.html" data-automation-id="Solutions - Healthcare" data-dl-name="Solutions - Healthcare" target="_self">
<span class="links-list__link-text">Healthcare</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/industry-solutions/education-cloud-phone-systems.html" data-automation-id="Solutions - Education" data-dl-name="Solutions - Education" target="_self">
<span class="links-list__link-text">Education</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/industry-solutions/government-agencies.html" data-automation-id="Solutions - Government" data-dl-name="Solutions - Government" target="_self">
<span class="links-list__link-text">Government</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/industry-solutions/retail-business-cloud-phone-systems.html" data-automation-id="Solutions - Retail" data-dl-name="Solutions - Retail" target="_self">
<span class="links-list__link-text">Retail</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/industry-solutions/professional-services-firms-cloud-phone-systems.html" data-automation-id="Solutions - Professional services" data-dl-name="Solutions - Professional services" target="_self">
<span class="links-list__link-text">Professional services</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="grid-item l-flex__col--6 l-tab-flex__col--12 l-mob-flex__col--12 IID-grid-item-ab5e087f CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-padding="vertical" class="links-list links-list--direction--vertical CID-links-list-2da41a0d IID-links-list-556b7f7d">
<style>
	@media (max-width: 767px){.IID-links-list-556b7f7d{margin:0 0 20px}}
	.IID-links-list-556b7f7d .links-list__link{font-weight:500;font-size:16px;color:#222;padding:12px;border-radius:14px}.IID-links-list-556b7f7d .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="navMenu">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/industry-solutions/tech-industry-cloud-phone-systems.html" data-automation-id="Solutions - High tech" data-dl-name="Solutions - High tech" target="_self">
<span class="links-list__link-text">High tech</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/industry-solutions/nonprofit.html" data-automation-id="Solutions - Nonprofit" data-dl-name="Solutions - Nonprofit" target="_self">
<span class="links-list__link-text">Nonprofit</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/industry-solutions/automotive.html" data-automation-id="Solutions - Automotive" data-dl-name="Solutions - Automotive" target="_self">
<span class="links-list__link-text">Automotive</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/industry-solutions/consumer-services.html" data-automation-id="Solutions - Consumer services" data-dl-name="Solutions - Consumer services" target="_self">
<span class="links-list__link-text">Consumer services</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-tablet="hidden" class="grid-item l-flex__col--3 l-tab-flex__col--12 IID-grid-item-650b7efa CID-grid-item-1e7a19ff">
<style>.IID-grid-item-650b7efa{padding:48px 50px 48px 0}@media (max-width: 1229px) and (min-width: 768px){.IID-grid-item-650b7efa{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-grid-item-650b7efa{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-3b4edd07">
<style>
	.IID-custom-text-3b4edd07{color:#6f6f6f;margin:0 0 24px}
	.IID-custom-text-3b4edd07{font-size:12px;font-weight:500;line-height:1.667;text-transform:uppercase;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>RingCentral for Microsoft Teams</div>
</div>
</div>
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-97d190bc">
<style>
	.IID-background-97d190bc{border-color:rgba(156,126,113,.3);border-width:1px;padding:20px 20px 28px;border-style:solid;border-radius:30px}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="youtube-card youtube-card--btn-size--custom youtube-card--btn-theme--custom IID-youtube-card-3858b37c CID-youtube-card-cef71095">
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/content/youtube-card/clientlibs/common.min.0d785617b4fb56e0927f692c76fad26b.css" type="text/css" />
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/components/content/youtube-card/clientlibs/common.min.34f936877f374c57812eb43d110ce157.js","dependencies":[{"path":"/etc.clientlibs/rc-www/clientlibs/utility/video-api.min.0f51d56a2a037ec486a4d21c415402ef.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/tools/bundles/js-modern.min.f23fa693bdc9d4cb17e8893d8352365b.js","dependencies":[],"embed":null,"properties":{}},{"path":"/etc.clientlibs/commons/clientlibs/utility/navigator-data/bundles/js-modern.min.ae8de6fa5f5ed68a079352c80ddde614.js","dependencies":null,"embed":null,"properties":{}}],"embed":null,"properties":{}},{"path":"/etc.clientlibs/rc-www/clientlibs/essential.min.f35326dc52e2f83caa7d3e0ce7ea4596.js","dependencies":null,"embed":[],"properties":{}},{"path":"/etc.clientlibs/commons/clientlibs/utility/onetrust-helper/bundles/js-modern.min.52cc62398038e455a7aa2cf1c1303d22.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/event-bus/bundles/js-modern.min.ecbc38cdc93ffb2669731a70d4425589.js","dependencies":null,"embed":null,"properties":{}}],"embed":null,"properties":{}}],"embed":null,"properties":{}}]',
            async: 'true'
        });
	</script>
<style>
	.IID-youtube-card-3858b37c{margin:0 0 20px;border-radius:10px;overflow:hidden}@media (min-width: 1488px){.IID-youtube-card-3858b37c{border-radius:10px}}
	.IID-youtube-card-3858b37c{color:72}.IID-youtube-card-3858b37c .youtube-card__btn-icon{color:#ff8801}.IID-youtube-card-3858b37c .youtube-card__btn{width:72px;height:72px}
</style>
<div class="youtube-card__wrapper" data-delegate-hover="true">
<div class="youtube-card__parsys">
<div class="image IID-image-baf99bcb CID-image-b4fec0a0">
<style>.IID-image-baf99bcb{background-color:rgba(0,0,0,.1);margin:0 auto}</style>
<div class="image__wrap  ">
<img data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/www-4183/microsoft-teams-png-rendition.webp" src="data:image/svg+xml,%3Csvg viewBox=%220 0 561 360%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt="Microsoft Teams integrated with RingCentral app" width="561" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/www-4183/microsoft-teams.png" class="image__img" height="360" />
</div>
</div>
</div>
<button class="youtube-card__overlay" data-video-value="nJnHqczvu64" data-video-name="RingCentral for Microsoft Teams (2022)" data-dl-element="video" data-dl-name="Solutions - Bring world-class customer experiences and RingCentral’s best-of-breed telephony into Microsoft Teams" data-dl-button-name="RingCentral for Microsoft Teams (2022)" aria-label="Play video: Solutions - Bring world-class customer experiences and RingCentral’s best-of-breed telephony into Microsoft Teams">
<div class="youtube-card__btn" data-icon-url="/content/dam/rc-www/en_us/images/svg/play-orange.svg">
<div class="youtube-card__btn-icon" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="92" id="svg--134274298" role="img" viewBox="0 0 93 92" width="93">
<circle cx="46.1699" cy="43" fill="white" r="36" />
<path d="M39.175 29.5434C39.173 28.7114 40.1284 28.2409 40.7866 28.7497L58.151 42.1721C58.6675 42.5713 58.6692 43.3503 58.1545 43.7518L40.8576 57.2442C40.2018 57.7557 39.2446 57.2898 39.2425 56.4582L39.175 29.5434Z" fill="#852800" />
</svg>
</div>
</div>
</button>
</div>
<script type="application/ld+json">
	{
		"@context": "http://schema.org",
		"@type": "VideoObject",
		"name": "RingCentral for Microsoft Teams",
		"thumbnailUrl": "https://i.ytimg.com/vi/nJnHqczvu64/sddefault.jpg",
		"duration": "PT2M11S",
		"contentUrl": "https://www.youtube.com/video/nJnHqczvu64/file.mp4",
		"embedUrl": "https://www.youtube.com/embed/nJnHqczvu64",
		"description": "RingCentral for Microsoft Teams enhances the Teams experience with RingCentral’s best-in-class telephony. Organizations large and small choose RingCentral for Teams for several reasons:",
        "uploadDate": "2022-06-30T22:04:26"
	}


</script>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-3955ea6b">
<style>
	.IID-custom-text-3955ea6b{color:#222;margin:0 0 15px}
	.IID-custom-text-3955ea6b{font-size:16px;font-weight:500;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Bring world-class customer experiences and RingCentral’s best-of-breed telephony into Microsoft Teams.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right CID-cta-v2-e0fe0cb4 IID-cta-v2-65bc29e0">
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/content/cta-v2/clientlibs/common.min.a0ede3e0420701c8f090b02c5fd8f3ed.css" type="text/css" />
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/components/content/cta-v2/clientlibs/common.min.8ffd3834fadb448c71b0151c56aea129.js","dependencies":[{"path":"/etc.clientlibs/rc-www/clientlibs/essential.min.f35326dc52e2f83caa7d3e0ce7ea4596.js","dependencies":null,"embed":[],"properties":{}}],"embed":null,"properties":{}}]',
            async: 'true'
        });
	</script>
<style>
	.IID-cta-v2-65bc29e0{margin:0 0 0 -12px}@media (min-width: 1488px){.IID-cta-v2-65bc29e0{margin-left:-12px}}
	.IID-cta-v2-65bc29e0 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:16px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-65bc29e0 .cta-v2__el .cta-v2__icon{width:16px;height:16px;rotate:180deg}.IID-cta-v2-65bc29e0 .cta-v2__el{border-radius:16px}.IID-cta-v2-65bc29e0 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-65bc29e0 .cta-v2__el:hover:before,.IID-cta-v2-65bc29e0 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-65bc29e0 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="noPostfix">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/microsoft-teams.html" tabindex="0" title="Learn more" target="_self" data-dl-element="button">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" id="svg--1926380478" role="img" viewBox="0 0 28 17">
<path clip-rule="evenodd" d="M1.088 9.02c-.336-.436-.314-1.053.072-1.44L8.285.457l.111-.097C8.821.04 9.44.083 9.84.483l.1.115c.335.436.314 1.053-.073 1.44l-5.75 5.749h22.787l.149.01c.535.067.947.493.947 1.009 0 .563-.49 1.019-1.096 1.019H4.931l5.165 5.165.1.114c.336.437.314 1.053-.072 1.44-.422.422-1.118.41-1.555-.027L1.188 9.135l-.1-.114z" fill-rule="evenodd" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="primary-nav__dropdown-close">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.42 12.31" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--21285217" />
</svg>
</div>
</div>
<div class="primary-nav__arrow-element"></div>
<div class="primary-nav__end" tabindex="0"></div>
</div>
</div>
<div class="primary-nav__item  " data-section-name="Plans &amp; Pricing" data-dl-cmp="Plans &amp; Pricing">
<div class="primary-nav__link-wrapper">
<a href="/gb/en/office/plansandpricing.html" tabindex="0" role="link" data-dl-name="Plans &amp; Pricing" class="primary-nav__link" data-automation-id="Plans &amp; Pricing">
<span class="primary-nav__link-text">Plans &amp; Pricing</span>
</a>
</div>
</div>
<div class="primary-nav__item primary-nav__item--has-dropdown  " data-section-name="Partners" data-dl-cmp="Partners">
<div class="primary-nav__link-wrapper">
<button tabindex="0" data-dl-name="Partners" class="primary-nav__link" data-automation-id="Partners" data-dl-events-hover="true" data-dl-element="dropdown">
<span class="primary-nav__link-text">Partners</span>
<span class="primary-nav__link-icon" aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.812 6.906" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-2063957340" />
</svg>
</span>
</button>
</div>
<div class="primary-nav__dropdown">
<div class="primary-nav__dropdown-content">
<div class="l-container">
<div class="primary-nav__dropdown-wrapper ">
<div class="primary-nav__content-block">
<div data-grid-wrapper="padding" class="grid IID-grid-70a1b948 CID-grid-1659f761">
<style>
	@media (max-width: 1229px){.IID-grid-70a1b948{padding:0 16px 0 0}}
	
</style>
<div class="grid__parsys       l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-wrap ">
<div class="grid-item l-flex__col--9 l-tab-flex__col--12 IID-grid-item-6b2fca90 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-1201f8c2" data-navigation-wrapper="tablet">
<style>
	.IID-background-1201f8c2{padding:40px 50px 23px}@media (max-width: 1229px){.IID-background-1201f8c2{padding:25px 16px 5px 0}}@media (max-width: 767px){.IID-background-1201f8c2{padding:16px 0 5px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid IID-grid-5c0f171c CID-grid-1659f761">
<style>
	.IID-grid-5c0f171c{margin:0 0 20px}@media (max-width: 767px){.IID-grid-5c0f171c{margin:0 0 26px}}
	.IID-grid-5c0f171c{--halfHorizGap:10.5px;--halfVertGap:0px}@media (max-width: 1229px){.IID-grid-5c0f171c{--halfHorizGap:15px;--halfVertGap:0px}}@media (max-width: 767px){.IID-grid-5c0f171c{--halfHorizGap:0px;--halfVertGap:0px}}
</style>
<div class="grid__parsys       l-flex--flex-wrap-nowrap  l-mob-flex--flex-wrap-wrap">
<div class="grid-item l-flex__col--12 l-mob-flex__col--12 IID-grid-item-ef574f3c CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-tablet="hidden" class="custom-text CID-custom-text-e0b1298e IID-custom-text-cfb69beb">
<style>
	.IID-custom-text-cfb69beb{color:#6f6f6f;margin:0 0 24px 15px}@media (max-width: 1229px) and (min-width: 768px){.IID-custom-text-cfb69beb{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-custom-text-cfb69beb{margin:0 0 24px}.IID-custom-text-cfb69beb{border-style:none}.IID-custom-text-cfb69beb{visibility:hidden;position:absolute;top:-99999px}}
	.IID-custom-text-cfb69beb{font-size:12px;font-weight:500;line-height:1.667;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>PARTNERS</div>
</div>
</div>
<div class="grid IID-grid-d0bf8f7e CID-grid-1659f761">
<style>
	.IID-grid-d0bf8f7e{margin:0 0 20px}@media (max-width: 767px){.IID-grid-d0bf8f7e{margin:0}}
	.IID-grid-d0bf8f7e{--halfHorizGap:25px;--halfVertGap:0px}
</style>
<div class="grid__parsys       l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-wrap l-mob-flex--flex-wrap-wrap">
<div class="grid-item l-flex__col--4 l-tab-flex__col--12 l-mob-flex__col--12 IID-grid-item-127e671a CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="link-card IID-link-card-8ed5a5ed CID-link-card-7153c5c8">
<style>
	.IID-link-card-8ed5a5ed{color:#222;border-color:rgba(156,126,113,.3);border-width:1px;border-style:solid;border-radius:14px;min-height:138px}.IID-link-card-8ed5a5ed:hover{background-color:#fae5d1;border-color:#fff}.IID-link-card-8ed5a5ed[data-active="true"]{border-color:#fff}@media (min-width: 1488px){.IID-link-card-8ed5a5ed{border-radius:14px}}@media (max-width: 1229px){.IID-link-card-8ed5a5ed{min-height:0}}[data-active="true"] .IID-link-card-8ed5a5ed:not([data-active]):not([data-active="true"] [data-active="false"] .IID-link-card-8ed5a5ed){border-color:#fff}
</style>
<div class="link-card__wrapper link-card__wrapper--type--link" data-delegate-hover="true">
<div class="link-card__parsys" aria-hidden="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-d861bd9a" data-link="hover">
<style>
	.IID-custom-text-d861bd9a{margin:32px 12px 8px}
	.IID-custom-text-d861bd9a{font-size:16px;font-weight:500;line-height:1.2;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Global service providers</div>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-22ab78c1">
<style>
	.IID-custom-text-22ab78c1{color:#6f6f6f;margin:0 12px 28px}
	.IID-custom-text-22ab78c1{font-size:12px;font-weight:400;line-height:1.4;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Customised and integrated solutions for service providers</div>
</div>
</div>
</div>
<a href="/gb/en/partner/service-providers.html" target="_self" class="link-card__overlay link-card__overlay--type--link " data-dl-element="button">
</a>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-tab-flex__col--12 l-mob-flex__col--12 IID-grid-item-300d4c9d CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-padding="vertical" data-links-list="margin" class="links-list IID-links-list-afe11a15 CID-links-list-2da41a0d">
<style>
	@media (max-width: 1229px){.IID-links-list-afe11a15{margin:16px 0 0}}
	.IID-links-list-afe11a15 .links-list__link{font-weight:500;font-size:16px;color:#222;padding:12px;border-radius:14px}.IID-links-list-afe11a15 .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="navMenu">
<li class="links-list__item">
<a class="links-list__link" href="https://affiliates.ringcentral.com/" data-automation-id="Partners - Affiliates program" data-dl-name="Partners - Affiliates program" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Affiliates program</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/partner/agent.html" data-automation-id="Partners - Channel partners" data-dl-name="Partners - Channel partners" target="_self">
<span class="links-list__link-text">Channel partners</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/partner/connectivity-partners.html" data-automation-id="Partners - Connectivity partners" data-dl-name="Partners - Connectivity partners" target="_self">
<span class="links-list__link-text">Connectivity partners</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="grid-item l-tab-flex__col--12 l-mob-flex__col--12 CID-grid-item-1e7a19ff IID-grid-item-4686f398">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-padding="vertical" class="links-list CID-links-list-2da41a0d IID-links-list-165aca90">
<style>
	
	.IID-links-list-165aca90 .links-list__link{font-weight:500;font-size:16px;color:#222;padding:12px;border-radius:14px}.IID-links-list-165aca90 .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="navMenu">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/consultant-relations-program.html" data-automation-id="Partners - Consultant relations program" data-dl-name="Partners - Consultant relations program" target="_self">
<span class="links-list__link-text">Consultant relations program</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/partner/hardware.html" data-automation-id="Partners - Hardware partners" data-dl-name="Partners - Hardware partners" target="_self">
<span class="links-list__link-text">Hardware partners</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/partner/isv.html" data-automation-id="Partners - ISV partners " data-dl-name="Partners - ISV partners " target="_self">
<span class="links-list__link-text">ISV partners </span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-tablet="hidden" class="grid-item l-flex__col--3 l-tab-flex__col--12 IID-grid-item-3b7794a7 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-3b7794a7{padding:48px 50px 48px 0}@media (max-width: 1229px) and (min-width: 768px){.IID-grid-item-3b7794a7{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-grid-item-3b7794a7{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-d8affbb4">
<style>
	.IID-custom-text-d8affbb4{color:#6f6f6f;margin:0 0 24px}
	.IID-custom-text-d8affbb4{font-size:12px;font-weight:500;line-height:1.667;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>PARTNER PORTAL</div>
</div>
</div>
<div class="background background--alignment--fullwidth IID-background-c0bac4cb CID-background-79490109">
<style>
	.IID-background-c0bac4cb{text-align:center;border-color:rgba(156,126,113,.3);border-width:1px;padding:87px 20px 28px;border-style:solid;border-radius:30px;min-height:320px}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-2a2dffd8">
<style>
	.IID-custom-text-2a2dffd8{color:#222;margin:0 0 28px}@media (max-width: 1229px){.IID-custom-text-2a2dffd8{margin:0 0 10px}}
	.IID-custom-text-2a2dffd8{font-size:24px;font-weight:500;line-height:1.333;letter-spacing:-.08px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-2a2dffd8{font-size:20px;line-height:1.4}}
</style>
<div class="custom-text__wrapper" data-style="h4" data-content-wrapper="true">
<div>Already a partner? </div>
</div>
</div>
<div class="cta-v2 CID-cta-v2-e0fe0cb4 IID-cta-v2-bd471274" data-test-block="cta" data-test-number="gw-43182">
<style>
	.IID-cta-v2-bd471274{max-width:94px;margin:0 auto}.IID-cta-v2-bd471274:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-cta-v2-bd471274 .cta-v2__el{padding-top:18px;padding-bottom:18px;padding-left:24px;padding-right:24px;font-size:16px;font-weight:500;line-height:16px;color:#852800}.IID-cta-v2-bd471274 .cta-v2__el:hover,.IID-cta-v2-bd471274 .cta-v2__el:focus{color:#fff}.IID-cta-v2-bd471274 .cta-v2__el:active{color:#fff}.IID-cta-v2-bd471274 .cta-v2__el{border-radius:40px}.IID-cta-v2-bd471274 .cta-v2__el:before{left:auto;right:auto}.IID-cta-v2-bd471274 .cta-v2__el:before{background-color:#fae5d1}.IID-cta-v2-bd471274 .cta-v2__el:hover:before,.IID-cta-v2-bd471274 .cta-v2__el:focus:before{background-color:#852800}.IID-cta-v2-bd471274 .cta-v2__el:active:before{background-color:#681f00}.IID-cta-v2-bd471274.cta-v2--active .cta-v2__el{color:#fff}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="heroBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="https://partners.ringcentral.com/" tabindex="0" title="Log in" target="_blank" rel="noopener noreferrer" data-dl-element="button" data-dl-additional-info="Intelligent communication">
<span class="cta-v2__content">
<span class="cta-v2__text">Log in</span>
</span>
</a>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-4f460f8b">
<style>
	.IID-custom-text-4f460f8b{color:#716e6a;margin:auto 0 0}body.page .IID-custom-text-4f460f8b a{color:#852800;text-decoration:underline}body.page .IID-custom-text-4f460f8b a:hover{text-decoration:underline}
	.IID-custom-text-4f460f8b{font-size:12px;font-weight:400;line-height:1.667;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote-small" data-content-wrapper="true">
<div>Interested in partnering with us? Tell us a little about your business <a href="https://docs.google.com/forms/d/15RCbwDK4oGehaOU8jGWGJJ8Aox_fmy0PpPDl0Sq3LFU/viewform?edit_requested=true" data-dl-name="Partners - Tell us a little about your business here" target="_blank" class="Select Class Name" rel="noopener noreferrer">here</a>.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="primary-nav__dropdown-close">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.42 12.31" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--21285217" />
</svg>
</div>
</div>
<div class="primary-nav__arrow-element"></div>
<div class="primary-nav__end" tabindex="0"></div>
</div>
</div>
<div class="primary-nav__item primary-nav__item--has-dropdown  " data-section-name="Resources" data-dl-cmp="Resources">
<div class="primary-nav__link-wrapper">
<button tabindex="0" data-dl-name="Resources" class="primary-nav__link" data-automation-id="Resources" data-dl-events-hover="true" data-dl-element="dropdown">
<span class="primary-nav__link-text">Resources</span>
<span class="primary-nav__link-icon" aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.812 6.906" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-2063957340" />
</svg>
</span>
</button>
</div>
<div class="primary-nav__dropdown">
<div class="primary-nav__dropdown-content">
<div class="l-container">
<div class="primary-nav__dropdown-wrapper ">
<div class="primary-nav__content-block">
<div data-grid-wrapper="padding" class="grid IID-grid-2a1b2ab6 CID-grid-1659f761">
<style>
	@media (max-width: 1229px){.IID-grid-2a1b2ab6{margin:0 0 32px}.IID-grid-2a1b2ab6{padding:0 16px 0 0}}
	
</style>
<div class="grid__parsys       l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-wrap ">
<div class="grid-item l-flex__col--9 l-tab-flex__col--12 IID-grid-item-8e55a2e2 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth IID-background-3e48e430 CID-background-79490109" data-navigation-wrapper="tablet">
<style>
	.IID-background-3e48e430{padding:40px 50px 23px}@media (max-width: 1229px){.IID-background-3e48e430{padding:25px 30px 5px 0}}@media (max-width: 767px){.IID-background-3e48e430{padding:16px 0 5px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid CID-grid-1659f761 IID-grid-129a4d8a">
<style>
	.IID-grid-129a4d8a{margin:0 0 20px}@media (max-width: 767px){.IID-grid-129a4d8a{margin:0 0 26px}}
	.IID-grid-129a4d8a{--halfHorizGap:25px;--halfVertGap:0px}@media (max-width: 1229px){.IID-grid-129a4d8a{--halfHorizGap:0px;--halfVertGap:0px}}@media (max-width: 767px){.IID-grid-129a4d8a{--halfHorizGap:0px;--halfVertGap:13px}}
</style>
<div class="grid__parsys       l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-wrap l-mob-flex--flex-wrap-wrap">
<div class="grid-item l-flex__col--6 l-tab-flex__col--12 l-mob-flex__col--12 IID-grid-item-fc8e028e CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-title="padding" class="custom-text CID-custom-text-e0b1298e IID-custom-text-357bb359">
<style>
	.IID-custom-text-357bb359{color:#6f6f6f;margin:0 0 24px;padding:0 0 0 12px}@media (min-width: 1488px){.IID-custom-text-357bb359{padding-left:12px}}@media (max-width: 1229px){.IID-custom-text-357bb359{padding:0}}@media (max-width: 767px){.IID-custom-text-357bb359{margin:0 0 24px}.IID-custom-text-357bb359{border-style:none}}
	.IID-custom-text-357bb359{font-size:12px;font-weight:500;line-height:1.667;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>LEARN</div>
</div>
</div>
<div data-padding="vertical" class="links-list CID-links-list-2da41a0d IID-links-list-68f9a48e">
<style>
	.IID-links-list-68f9a48e{margin:0 0 35px}@media (max-width: 1229px){.IID-links-list-68f9a48e{margin:0 0 32px}}
	.IID-links-list-68f9a48e .links-list__link{font-weight:500;font-size:16px;color:#222;padding:12px;border-radius:14px}.IID-links-list-68f9a48e .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="navMenu">
<li class="links-list__item">
<a class="links-list__link" href="https://www.ringcentral.com/gb/en/blog/" data-automation-id="Resources - Blog" data-dl-name="Resources - Blog" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Blog</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/whyringcentral/casestudies.html" data-automation-id="Resources - Customer stories" data-dl-name="Resources - Customer stories" target="_self">
<span class="links-list__link-text">Customer stories</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/newsroom.html" data-automation-id="Resources - Newsroom" data-dl-name="Resources - Newsroom" target="_self">
<span class="links-list__link-text">Newsroom </span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/whats-new.html" data-automation-id="Resources - What&#39;s new" data-dl-name="Resources - What&#39;s new" target="_self">
<span class="links-list__link-text">What&#39;s new</span>
</a>
</li>
</ul>
</div>
<div data-tablet="hidden" class="cta-v2 cta-v2--icon-position--right CID-cta-v2-e0fe0cb4 IID-cta-v2-bfde8cb2">
<style>
	.IID-cta-v2-bfde8cb2{position:relative}@media (max-width: 1229px) and (min-width: 768px){.IID-cta-v2-bfde8cb2{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-cta-v2-bfde8cb2{visibility:hidden;position:absolute;top:-99999px}}
	.IID-cta-v2-bfde8cb2 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:16px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-bfde8cb2 .cta-v2__el .cta-v2__icon{width:16px;height:16px;rotate:180deg}.IID-cta-v2-bfde8cb2 .cta-v2__el{border-radius:16px}.IID-cta-v2-bfde8cb2 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-bfde8cb2 .cta-v2__el:hover:before,.IID-cta-v2-bfde8cb2 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-bfde8cb2 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="navMenu">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/resources/learning-center.html" data-active-dl-name="Resources - View all resources" tabindex="0" title="View all resources" target="_self" data-dl-element="button" data-dl-name="Resources - View all resources" data-automation-id="Resources - View all resources">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">View all resources</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--6 l-tab-flex__col--12 l-mob-flex__col--12 IID-grid-item-c23dc0a9 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-title="padding" class="custom-text CID-custom-text-e0b1298e IID-custom-text-4312c1b6">
<style>
	.IID-custom-text-4312c1b6{color:#6f6f6f;margin:0 0 24px;padding:0 0 0 12px}@media (min-width: 1488px){.IID-custom-text-4312c1b6{padding-left:12px}}@media (max-width: 1229px){.IID-custom-text-4312c1b6{padding:0}}@media (max-width: 767px){.IID-custom-text-4312c1b6{margin:0 0 24px}.IID-custom-text-4312c1b6{padding:7px 0 0}}
	.IID-custom-text-4312c1b6{font-size:12px;font-weight:500;line-height:1.667;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>CONNECT</div>
</div>
</div>
<div data-padding="vertical" class="links-list CID-links-list-2da41a0d IID-links-list-6a9e3813">
<style>
	
	.IID-links-list-6a9e3813 .links-list__link{font-weight:500;font-size:16px;color:#222;padding:12px;border-radius:14px}.IID-links-list-6a9e3813 .links-list__link:hover{color:#852800;background-color:#fae5d1}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="navMenu">
<li class="links-list__item">
<a class="links-list__link" href="https://go.ringcentral.com/resources-webinar-registration.html" data-automation-id="Resources - Webinars" data-dl-name="Resources - Webinars" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Webinars</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/events.html" data-automation-id="Resources - Events" data-dl-name="Resources - Events" target="_self">
<span class="links-list__link-text">Events</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/company/careers/overview.html" hreflang="en-us" data-automation-id="Resources - Careers" data-dl-name="Resources - Careers" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Careers</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://support.ringcentral.com/gb/en/" data-automation-id="Resources - Support" data-dl-name="Resources - Support" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Support</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--3 l-tab-flex__col--12 l-flex__col--flex-grow-1 IID-grid-item-b999dc8a CID-grid-item-1e7a19ff" data-download="padding">
<style>.IID-grid-item-b999dc8a{padding:48px 50px 48px 0}@media (max-width: 1229px){.IID-grid-item-b999dc8a{padding:0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-65a917dc">
<style>
	.IID-custom-text-65a917dc{color:#6f6f6f;margin:0 0 24px}@media (max-width: 767px){.IID-custom-text-65a917dc{border-style:none}}
	.IID-custom-text-65a917dc{font-size:12px;font-weight:500;line-height:1.667;text-transform:uppercase;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Download app</div>
</div>
</div>
<div class="link-card IID-link-card-2397ff57 CID-link-card-7153c5c8">
<style>
	.IID-link-card-2397ff57{text-align:center;border-color:rgba(156,126,113,.3);border-width:1px;padding:83px 20px;border-style:solid;border-radius:30px}@media (min-width: 1488px){.IID-link-card-2397ff57{border-radius:30px}}
</style>
<div class="link-card__wrapper link-card__wrapper--type--link" data-delegate-hover="true">
<div class="link-card__parsys" aria-hidden="true">
<div class="image CID-image-b4fec0a0 IID-image-80e7abd0">
<style>.IID-image-80e7abd0{max-width:78px;margin:0 auto 28px}.IID-image-80e7abd0:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-1449210930-264840166-title" class="image__img" id="svg-1449210930-264840166" role="img" viewBox="0 0 20 20">
<title id="svg-1449210930-264840166-title">RingCentral logo</title>
<g fill="none" fill-rule="evenodd">
<g fill-rule="nonzero">
<path d="M4.688 0h10.625C17.9 0 20 2.1 20 4.688v10.625C20 17.9 17.9 20 15.312 20H4.688A4.689 4.689 0 0 1 0 15.312V4.688C0 2.1 2.1 0 4.688 0z" fill="#F80" />
<path d="M7.307 2.5h5.384c1.672 0 2.278.174 2.89.5a3.41 3.41 0 0 1 1.417 1.418c.326.611.5 1.217.5 2.889V17.5H7.307c-1.672 0-2.278-.174-2.889-.5A3.41 3.41 0 0 1 3 15.582c-.326-.611-.5-1.217-.5-2.889V7.307c0-1.672.174-2.278.5-2.889A3.41 3.41 0 0 1 4.418 3c.611-.328 1.217-.5 2.889-.5z" fill="#FFF" />
<path d="M6.348 4.775h7.304c.873 0 1.582.71 1.582 1.582v3.692c0 1.156-1.097 1.88-1.892 2.115.357.674.916 1.695 1.678 3.06H12.44l-1.7-2.945h-.112a.35.35 0 0 1-.35-.35V9.864h2.373V7.352h-5.3v4.503c0 .75.146 2.05 1.28 3.37H6.056c-.948-.694-1.29-2.112-1.29-2.946V6.357c0-.873.71-1.582 1.583-1.582z" fill="#0684BD" />
</g>
</g>
</svg>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-b7fa3529">
<style>
	.IID-custom-text-b7fa3529{color:#222}
	.IID-custom-text-b7fa3529{font-size:16px;font-weight:500;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Get messaging, video, and phone in one single app</div>
</div>
</div>
</div>
<a href="/gb/en/download.html" target="_self" class="link-card__overlay link-card__overlay--type--link " data-dl-element="button">
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="phone-number CID-phone-number-a7e901a9 IID-phone-number-275c37fc">
<div class="phone-number__wrapper l-flex l-flex--align-items-center" data-dl-custom-type="headerButtons" data-automation-id="Phone number">
<span class="phone-number__title">Talk to an expert:</span>
<div class="phone-number__text l-flex l-flex--align-items-center">
<a href="tel:+44 (0)800 098 8136" data-dl-name="Call" class="phone-number__dynamic-number dynamicNumber">
+44 (0)800 098 8136
</a>
</div>
</div>
</div>
<div class="phone-number CID-phone-number-a7e901a9 IID-phone-number-aec7e757">
<div class="phone-number__wrapper l-flex l-flex--align-items-center" data-dl-custom-type="headerButtons" data-automation-id="Phone number">
<span class="phone-number__title">Talk to an expert:</span>
<div class="phone-number__text l-flex l-flex--align-items-center">
<a href="tel:+44 (0)800 098 8136" data-dl-name="Call" class="phone-number__dynamic-number dynamicNumber">
+44 (0)800 098 8136
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="primary-nav__dropdown-close">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.42 12.31" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--21285217" />
</svg>
</div>
</div>
<div class="primary-nav__arrow-element"></div>
<div class="primary-nav__end" tabindex="0"></div>
</div>
</div>
</div>
</div>
<div class="grid IID-grid-6da3d127 CID-grid-1659f761">
<style>
	@media (max-width: 1229px){.IID-grid-6da3d127{max-width:100%}.IID-grid-6da3d127:before{display:table-cell;content:'';width:9999px;max-width:100%}}@media (max-width: 767px){.IID-grid-6da3d127{max-width:100%}}
	.IID-grid-6da3d127{--halfHorizGap:15px;--halfVertGap:0px}@media (max-width: 1229px){.IID-grid-6da3d127{--halfHorizGap:0px;--halfVertGap:0px}}
</style>
<div class="grid__parsys l-flex--align-items-center    l-tab-flex--justify-content-flex-end  l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-wrap ">
<div class="grid-item l-tab-flex__col--12 l-tab-flex__col--order-2 l-flex__col--flex-grow-0 IID-grid-item-28d28c91 CID-grid-item-1e7a19ff">
<style>@media (max-width: 767px){.IID-grid-item-28d28c91{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="phone-number CID-phone-number-a7e901a9 IID-phone-number-70f8110b">
<style>.IID-phone-number-70f8110b .phone-number__title{color:#fff;font-size:14px;font-weight:400}.IID-phone-number-70f8110b .phone-number__dynamic-number{color:#fff;font-size:14px;font-weight:500;border-width:1px;border-bottom-style:dashed}@media (max-width: 767px){.IID-phone-number-70f8110b .phone-number__title{font-size:16px;font-weight:400}.IID-phone-number-70f8110b .phone-number__dynamic-number{font-size:16px}}</style>
<style>.IID-phone-number-70f8110b{margin:0 0 0 auto}@media (max-width: 1229px){.IID-phone-number-70f8110b{margin:0 0 0 auto}}@media (max-width: 767px){.IID-phone-number-70f8110b{margin:0}}</style>
<div class="phone-number__wrapper l-flex l-flex--align-items-center" data-dl-custom-type="headerButtons" data-automation-id="Phone number">
<span class="phone-number__title">Talk to an expert:</span>
<div class="phone-number__text l-flex l-flex--align-items-center">
<a href="tel:+44 (0)800 098 8136" data-dl-name="Call" class="phone-number__dynamic-number dynamicNumber">
+44 (0)800 098 8136
</a>
</div>
</div>
</div>
<div class="rawhtml IID-rawhtml-c046bc8e CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
/* Remove after activation GW-39046*/
@media only screen and (min-width: 768px){
	.global-header__nav.header-nav-space .phone-number__wrapper{
		justify-content: flex-end;
	}
}
</style>
</div>
</div>
</div>
</div>
<div class="grid-item l-tab-flex__col--12 l-mob-flex__col--12 l-mob-flex__col--order-1 l-flex__col--flex-shrink-0 IID-grid-item-3294dfd1 CID-grid-item-1e7a19ff">
<style>@media (max-width: 1229px){.IID-grid-item-3294dfd1{position:absolute;bottom:-50px;left:0}}@media (max-width: 767px){.IID-grid-item-3294dfd1{position:absolute;bottom:-50px;left:0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="rawhtml IID-rawhtml-871df24a CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
	/* it can be fixed if this style is moved to the ususal cta */
	[data-position="right"]{
		margin-left: auto;
	}
</style>
</div>
</div>
<div class="dynamic-content CID-dynamic-content-13204df0 IID-dynamic-content-49787c27">
<script src="/etc.clientlibs/rc-www/clientlibs/utility/login.min.0e4e837b6ed38e596b20ed7c4940f5e3.js"></script>
<script src="/etc.clientlibs/rc-www/clientlibs/utility/user.min.9ccda2a402da2e0b701428f00bff3b57.js"></script>
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/clientlibs/utility/login.min.0e4e837b6ed38e596b20ed7c4940f5e3.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/tools/bundles/js-modern.min.f23fa693bdc9d4cb17e8893d8352365b.js","dependencies":[],"embed":null,"properties":{}}],"embed":null,"properties":{}},{"path":"/etc.clientlibs/rc-www/clientlibs/utility/user.min.9ccda2a402da2e0b701428f00bff3b57.js","dependencies":null,"embed":null,"properties":{}}]',
            async: 'false'
        });
	</script>
<script src="/etc.clientlibs/rc-www/components/content/dynamic-content/clientlibs/common.min.06c45c9866b32d64387ac05e00c8cf65.js"></script>
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/components/content/dynamic-content/clientlibs/common.min.06c45c9866b32d64387ac05e00c8cf65.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/component/bundles/js-modern.min.4cfd46438c71dab9bce6b898c119533c.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/event-bus/bundles/js-modern.min.ecbc38cdc93ffb2669731a70d4425589.js","dependencies":null,"embed":null,"properties":{}}],"embed":null,"properties":{}},{"path":"/etc.clientlibs/commons/clientlibs/utility/tools/bundles/js-modern.min.f23fa693bdc9d4cb17e8893d8352365b.js","dependencies":[],"embed":null,"properties":{}}],"embed":null,"properties":{}}]',
            async: 'false'
        });
	</script>
<div class="dynamic-content__wrapper u-display-none-overflow" data-config="{&#34;operator&#34;:&#34;and&#34;,&#34;requirements&#34;:[{&#34;type&#34;:&#34;user-api&#34;,&#34;name&#34;:&#34;extension.name&#34;,&#34;condition&#34;:&#34;4&#34;,&#34;value&#34;:null},{&#34;type&#34;:&#34;cookie&#34;,&#34;name&#34;:&#34;gw_active_user&#34;,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;1&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/gb/en/vanity-pages/lp/ringsense&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/gb/en/vanity-pages/lp/product-showcase&#34;}]}">
<div class="dynamic-content IID-dynamic-content-293d9de CID-dynamic-content-13204df0">
<div class="dynamic-content__wrapper u-display-none-overflow" data-config="{&#34;operator&#34;:&#34;or&#34;,&#34;requirements&#34;:[{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/effortless-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/effortless-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/contact-center/overview&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/contact-center/overview&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/gb/en/contact-center/overview&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/ie/en/contact-center/overview&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/nl/en/contact-center/overview&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/engage/engage-voice&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/engage/engage-voice&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/gb/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/ie/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/nl/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/au/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/sg/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/remote-support-customer-service&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/sg/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/au/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/ie/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/nl/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/gb/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;/content/rc-www/fr/fr/engage&#34;}]}">
<div class="cta-v2 IID-cta-v2-2777c1bd CID-cta-v2-e0fe0cb4" data-test-block="cta" data-test-number="gw-43182">
<style>
	.IID-cta-v2-2777c1bd{border-radius:40px}@media (min-width: 1488px){.IID-cta-v2-2777c1bd{border-radius:40px}}
	.IID-cta-v2-2777c1bd .cta-v2__el{padding-top:17px;padding-bottom:17px;padding-left:24px;padding-right:24px;font-size:16px;font-weight:500;line-height:16px;color:#852800}.IID-cta-v2-2777c1bd .cta-v2__el:hover,.IID-cta-v2-2777c1bd .cta-v2__el:focus{color:#fff}.IID-cta-v2-2777c1bd .cta-v2__el:active{color:#fff}.IID-cta-v2-2777c1bd .cta-v2__el{border-radius:40px}.IID-cta-v2-2777c1bd .cta-v2__el:before{background-color:#fae5d1}.IID-cta-v2-2777c1bd .cta-v2__el:hover:before,.IID-cta-v2-2777c1bd .cta-v2__el:focus:before{background-color:#852800}.IID-cta-v2-2777c1bd .cta-v2__el:active:before{background-color:#681f00}.IID-cta-v2-2777c1bd.cta-v2--active .cta-v2__el{color:#fff}@media (max-width: 1229px){.IID-cta-v2-2777c1bd .cta-v2__el{min-width:100%}}@media (max-width: 767px){.IID-cta-v2-2777c1bd .cta-v2__el{min-width:100%}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="navMenu">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/view_demo.html#cc" tabindex="0" title="View demo" target="_self" data-dl-element="button" data-dcr="true" data-position="right" data-custom-tabindex="7">
<span class="cta-v2__content">
<span class="cta-v2__text">View demo</span>
</span>
</a>
</div>
</div>
</div>
<script>
	{
		const el = document.querySelector(".IID-dynamic-content-293d9de");
		RC_STORE.addComponentInstance(el, 'dynamic-content', DynamicContent);
	}
</script>
</div>
<div class="dynamic-content CID-dynamic-content-13204df0 IID-dynamic-content-6d290936">
<div class="dynamic-content__wrapper u-display-none-overflow" data-config="{&#34;operator&#34;:&#34;and&#34;,&#34;requirements&#34;:[{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/effortless-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/effortless-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/contact-center/overview&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/contact-center/overview&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/gb/en/contact-center/overview&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ie/en/contact-center/overview&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/nl/en/contact-center/overview&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/engage/engage-voice&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/engage/engage-voice&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/gb/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ie/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/nl/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/au/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/sg/en/digital-customer-engagement&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/remote-support-customer-service&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/sg/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/gb/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/au/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ie/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/nl/en/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/fr/fr/engage&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/vanity-pages/lp/rc-events&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/vanity-pages/lp/rc-events&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/vanity-pages/lp/ringcx&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/vanity-pages/lp/ringcx&#34;}]}">
<div class="cta-v2 CID-cta-v2-e0fe0cb4 IID-cta-v2-85c2875a" data-test-block="cta" data-test-number="gw-43182">
<style>
	.IID-cta-v2-85c2875a{border-radius:40px}@media (min-width: 1488px){.IID-cta-v2-85c2875a{border-radius:40px}}
	.IID-cta-v2-85c2875a .cta-v2__el{padding-top:17px;padding-bottom:17px;padding-left:24px;padding-right:24px;font-size:16px;font-weight:500;line-height:16px;color:#852800}.IID-cta-v2-85c2875a .cta-v2__el:hover,.IID-cta-v2-85c2875a .cta-v2__el:focus{color:#fff}.IID-cta-v2-85c2875a .cta-v2__el:active{color:#fff}.IID-cta-v2-85c2875a .cta-v2__el{border-radius:40px}.IID-cta-v2-85c2875a .cta-v2__el:before{background-color:#fae5d1}.IID-cta-v2-85c2875a .cta-v2__el:hover:before,.IID-cta-v2-85c2875a .cta-v2__el:focus:before{background-color:#852800}.IID-cta-v2-85c2875a .cta-v2__el:active:before{background-color:#681f00}.IID-cta-v2-85c2875a.cta-v2--active .cta-v2__el{color:#fff}@media (max-width: 1229px){.IID-cta-v2-85c2875a .cta-v2__el{min-width:100%}}@media (max-width: 767px){.IID-cta-v2-85c2875a .cta-v2__el{min-width:100%}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="navMenu">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/view_demo.html" tabindex="0" title="View demo" target="_self" data-dl-element="button" data-dcr="true" data-position="right" data-custom-tabindex="7">
<span class="cta-v2__content">
<span class="cta-v2__text">View demo</span>
</span>
</a>
</div>
</div>
</div>
<script>
	{
		const el = document.querySelector(".IID-dynamic-content-6d290936");
		RC_STORE.addComponentInstance(el, 'dynamic-content', DynamicContent);
	}
</script>
</div>
</div>
<script>
	{
		const el = document.querySelector(".IID-dynamic-content-49787c27");
		RC_STORE.addComponentInstance(el, 'dynamic-content', DynamicContent);
	}
</script>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-9b20d136">
<style>
	
	.IID-custom-text-9b20d136{--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-content-wrapper="true">
</div>
</div>
<div class="rawhtml CID-rawhtml-3925c5d8 IID-rawhtml-69ab814e">
<div class="rawhtml__wrapper">
<script>
let viewDemo = document.querySelectorAll('[data-dcr]');
viewDemo.forEach(function(elem){
	elem.addEventListener('click',function(){
		if(typeof _satellite !== 'undefined')
		_satellite.track("viewDemoBtDCR");
	})
})

</script>
</div>
</div>
<div class="dynamic-content CID-dynamic-content-13204df0 IID-dynamic-content-8d40f6f4">
<div class="dynamic-content__wrapper u-display-none-overflow" data-config="{&#34;operator&#34;:&#34;or&#34;,&#34;requirements&#34;:[{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/ca/en/vanity-pages/lp/rc-events&#34;},{&#34;type&#34;:&#34;url&#34;,&#34;name&#34;:null,&#34;condition&#34;:&#34;2&#34;,&#34;value&#34;:&#34;/content/rc-www/us/en/vanity-pages/lp/rc-events&#34;}]}">
<div class="dynamic-content IID-dynamic-content-dcd07e83 CID-dynamic-content-13204df0">
<div class="dynamic-content__wrapper u-display-none-overflow" data-config="{&#34;operator&#34;:&#34;or&#34;,&#34;requirements&#34;:[{&#34;type&#34;:&#34;user-api&#34;,&#34;name&#34;:&#34;extension.name&#34;,&#34;condition&#34;:&#34;3&#34;,&#34;value&#34;:null},{&#34;type&#34;:&#34;cookie&#34;,&#34;name&#34;:&#34;gw_active_user&#34;,&#34;condition&#34;:&#34;1&#34;,&#34;value&#34;:&#34;1&#34;}]}">
<div class="cta-v2 CID-cta-v2-e0fe0cb4 IID-cta-v2-75603727" data-test-block="cta" data-test-number="gw-43182">
<style>
	.IID-cta-v2-75603727{border-radius:40px}@media (min-width: 1488px){.IID-cta-v2-75603727{border-radius:40px}}
	.IID-cta-v2-75603727 .cta-v2__el{padding-top:17px;padding-bottom:17px;padding-left:24px;padding-right:24px;font-size:16px;font-weight:500;line-height:16px;color:#852800}.IID-cta-v2-75603727 .cta-v2__el:hover,.IID-cta-v2-75603727 .cta-v2__el:focus{color:#fff}.IID-cta-v2-75603727 .cta-v2__el:active{color:#fff}.IID-cta-v2-75603727 .cta-v2__el{border-radius:40px}.IID-cta-v2-75603727 .cta-v2__el:before{background-color:#fae5d1}.IID-cta-v2-75603727 .cta-v2__el:hover:before,.IID-cta-v2-75603727 .cta-v2__el:focus:before{background-color:#852800}.IID-cta-v2-75603727 .cta-v2__el:active:before{background-color:#681f00}.IID-cta-v2-75603727.cta-v2--active .cta-v2__el{color:#fff}@media (max-width: 1229px){.IID-cta-v2-75603727 .cta-v2__el{min-width:100%}}@media (max-width: 767px){.IID-cta-v2-75603727 .cta-v2__el{min-width:100%}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="navMenu">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/download.html" tabindex="0" title="Download app" target="_self" data-dl-element="button" data-dcr="true" data-custom-tabindex="7">
<span class="cta-v2__content">
<span class="cta-v2__text">Download app</span>
</span>
</a>
</div>
</div>
</div>
<script>
	{
		const el = document.querySelector(".IID-dynamic-content-dcd07e83");
		RC_STORE.addComponentInstance(el, 'dynamic-content', DynamicContent);
	}
</script>
</div>
</div>
<script>
	{
		const el = document.querySelector(".IID-dynamic-content-8d40f6f4");
		RC_STORE.addComponentInstance(el, 'dynamic-content', DynamicContent);
	}
</script>
</div>
</div>
</div>
</div>
</div>
</nav>
<div class="global-header__nav-toggler">
<button class="global-header__nav-toggler-btn" aria-label="Open the site navigation drop down menu" data-aria-label-open-text="Open the site navigation drop down menu" data-aria-label-close-text="Close the site navigation drop down menu">
<div class="global-header__nav-toggler-item global-header__nav-toggler-item--top"></div>
<div class="global-header__nav-toggler-item global-header__nav-toggler-item--middle"></div>
<div class="global-header__nav-toggler-item global-header__nav-toggler-item--bottom"></div>
</button>
</div>
<div class="global-header__content-end"></div>
</div>
</div>
</div>
</div>
</nav>
</header>
<div id="maincontent"></div>
<main role="main">
<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
<div class="responsivegrid CID-responsivegrid-d5df7ee5 aem-GridColumn aem-GridColumn--default--12 IID-responsivegrid-69cbf14f">
<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
<div class="rawhtml aem-GridColumn aem-GridColumn--default--12 IID-rawhtml-ab020858 CID-rawhtml-3925c5d8">
<style>.IID-rawhtml-ab020858{margin:100px 0 0}@media (min-width: 1230px){.IID-rawhtml-ab020858{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-rawhtml-ab020858{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-rawhtml-ab020858{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="rawhtml__wrapper">
<style>
.grid[data-scroll="true"]::-webkit-scrollbar,
.grid[data-scroll-integrations="true"]::-webkit-scrollbar,
.grid[data-scroll-integrations-next="true"]::-webkit-scrollbar	{
	display: none;
}
.grid[data-scroll="true"],
.grid[data-scroll-integrations="true"],
.grid[data-scroll-integrations-next="true"]{
	-ms-overflow-style: none; 
	scrollbar-width: none;
}
.grid[data-scroll="true"] .grid__parsys,
.grid[data-scroll-integrations="true"]	.grid__parsys,
.grid[data-scroll-integrations-next="true"] .grid__parsys{
	cursor: grab;
}
.grid[data-scroll-integrations="true"] .grid__parsys,
.grid[data-scroll-integrations-next="true"] .grid__parsys{	
	width: 1792px;
	}
.grid[data-scroll="true"] .grid__parsys{
	width: 1288px;
}
@media only screen and (min-width: 1793px){
	.grid[data-scroll-integrations="true"] .grid__parsys,
	.grid[data-scroll-integrations-next="true"] .grid__parsys{
		margin: 0 auto;
	}		
}
@media only screen and (max-width: 767px){
	.grid[data-scroll-mob="true"]::-webkit-scrollbar{
		display: none;
	}
	.grid[data-scroll-mob="true"]{
		-ms-overflow-style: none; 
		scrollbar-width: none;
	}
	.grid[data-scroll-mob="true"] .grid__parsys{
		width: 712px;
		cursor: grab;
	}
}
</style>
<script>	
document.addEventListener("DOMContentLoaded", () => {
	const parentLogo = document.querySelector('.grid[data-scroll="true"]');
	const parentLogoMob = document.querySelector('.grid[data-scroll-mob="true"]');
	const parentLogoIntegr = document.querySelector('.grid[data-scroll-integrations="true"]');
	const parentLogoIntegrNext = document.querySelector('.grid[data-scroll-integrations-next="true"]');

	function addMove(parent){
		parent.scrollLeft = 0;
		let pos = { left: 0, x: 0};
		
		const mouseDownHandler = function (e) {
		    pos = {
		        left: parent.scrollLeft,
		        x: e.clientX,
		    };
		    document.addEventListener('mousemove', mouseMoveHandler);
		    document.addEventListener('mouseup', mouseUpHandler);
		};
		
		const mouseMoveHandler = function (e) {
		    const dx = e.clientX - pos.x;
		    parent.scrollLeft = pos.left - dx;
		};
		
		const mouseUpHandler = function () {
		    document.removeEventListener('mousemove', mouseMoveHandler);
		    document.removeEventListener('mouseup', mouseUpHandler);
		};
		parent.addEventListener('mousedown', mouseDownHandler);
	}
	
	addMove(parentLogo);
	addMove(parentLogoMob);
	addMove(parentLogoIntegr);
	addMove(parentLogoIntegrNext);
	
});
</script>
</div>
</div>
<div class="rawhtml aem-GridColumn aem-GridColumn--default--12 CID-rawhtml-3925c5d8 IID-rawhtml-952a64ea">
<div class="rawhtml__wrapper">
<style>
	/* Carouesel bottom block */
  @media (min-width: 1369px) {
	  [data-cstm-lft-padding="1"] {
		padding-left: calc((100vw - 1316px) / 2);
	  }
  }
  
</style>
</div>
</div>
<div class="rawhtml aem-GridColumn aem-GridColumn--default--12 IID-rawhtml-233df12a CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
	
	[data-custom-arrow="custom"] .carousel-v2__container{
		position: inherit;
	}
	[data-custom-arrow="custom"] .carousel-v2__wrapper{
		position: inherit;
	}

	.carousel-v2--freemium[data-custom-arrow="custom"] button[disabled="disabled"]{
		opacity: .5;
		visibility: visible;
	}

	.carousel-v2--freemium[data-custom-arrow="custom"] .carousel-v2__arrow{
		border: 1px solid #222;
		border-radius: 50%;
		position: absolute;
		top: 150px;
		width: 48px;
		height: 48px;
	}

	.carousel-v2--freemium[data-custom-arrow="custom"] .carousel-v2__arrow:hover,
	.carousel-v2--freemium[data-custom-arrow="custom"] .carousel-v2__arrow:focus{
		background-color: #222;
	}

	
	[data-custom-arrow="custom"] .carousel-v2__arrow--prev{
		left: calc((100vw - 1316px) / 2 );
	}
	[data-custom-arrow="custom"] .carousel-v2__arrow--next{
		left: calc((100vw - 1316px) / 2 + 68px);
	}
	
	@media (min-width:1230px) and (max-width: 1368px) {
		[data-custom-arrow="custom"] .carousel-v2__arrow--prev{
			left: 0px
		}
		[data-custom-arrow="custom"] .carousel-v2__arrow--next{
			left: 68px;
		}
	}
	
	@media (max-width:1229px){
		[data-custom-arrow="custom"] .carousel-v2__arrow--prev{
			left: 30px
		}
		[data-custom-arrow="custom"] .carousel-v2__arrow--next{
			left: 98px;
		}
	}
	@media (max-width:767px){
		.carousel-v2--freemium[data-custom-arrow="custom"] .carousel-v2__arrow{
			top: 100px;
		}
		[data-custom-arrow="custom"] .carousel-v2__arrow--prev{
			left: 28px
		}
		[data-custom-arrow="custom"] .carousel-v2__arrow--next{
			left: 96px;
		}
	}

</style>
</div>
</div>
<div class="rawhtml aem-GridColumn IID-rawhtml-13030f53 aem-GridColumn--default--12 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper" data-dl-context="item0">
<style>
	@media (min-width: 768px) and (max-width: 1229px){
		.background--back-position-x-tab--right[data-bkg-tablet="right"]>.background__layers .background__image--back{
			background-position-x: 200px;
		}
	}
</style>
</div>
</div>
<div class="rawhtml aem-GridColumn IID-rawhtml-8dfe7ce2 aem-GridColumn--default--12 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
	@media (min-width: 1230px) and (max-width: 1229px){
		.custom-text[data-landscape-orange="title"]{
			font-size: 24px;
		}
		.custom-text[data-landscape-orange="subtitle"]{
			font-size: 26px;
		}
		.grid-item[data-landscape-orange="grid-item"]{
			min-width: 635px;
		}
		
		.custom-text[data-landscape-promo="title"]{
			font-size: 20px;
		}
		
	}
</style>
</div>
</div>
<div class="rawhtml aem-GridColumn IID-rawhtml-d51b46ce aem-GridColumn--default--12 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
		.background--back-position-x--left-35[data-position-left="twenty"]>.background__layers .background__image--back {
    	background-position-x: 28%;
	}
</style>
</div>
</div>
<div class="rawhtml IID-rawhtml-57db8121 aem-GridColumn aem-GridColumn--default--12 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
	/*currently the color is changed on all cards if the card is hovered. And underline is not supported*/
	[data-delegate-hover]:hover > .link-card__parsys > [data-hover="underlined"],
	[data-delegate-hover]:focus > .link-card__parsys > [data-hover="underlined"]{
		text-decoration: underline;
		color: #5A1B00;
	}
</style>
</div>
</div>
<div class="rawhtml IID-rawhtml-93fe8a05 aem-GridColumn aem-GridColumn--default--12 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
	[data-custom-arrow="custom"] .link-card{
		display: flex;
		flex-grow: 1;
	}
</style>
</div>
</div>
<div class="rawhtml aem-GridColumn IID-rawhtml-1cf0efeb aem-GridColumn--default--12 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
	.image[data-play-hidden="true"] .image__button{
		display: none;
	}
</style>
</div>
</div>
<div class="background background--alignment--fullwidth aem-GridColumn IID-background-6f20a0ee aem-GridColumn--default--12 CID-background-79490109">
<style>
	.IID-background-6f20a0ee{color:#222;padding:41px 0 48px}@media (max-width: 1229px){.IID-background-6f20a0ee{padding:33px 0 48px}}@media (max-width: 767px){.IID-background-6f20a0ee{padding:40px 12px 48px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div data-play-hidden="true" class="image CID-image-b4fec0a0 IID-image-e7fe9799" data-test-block="img" data-test-number="gw-43182">
<style>.IID-image-e7fe9799{max-width:298px;margin:0 auto}.IID-image-e7fe9799:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (min-width: 1230px){.IID-image-e7fe9799{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-image-e7fe9799{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px){.IID-image-e7fe9799{max-width:218px}}@media (max-width: 767px){.IID-image-e7fe9799{max-width:158px}.IID-image-e7fe9799{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="image__wrap " data-animation-path="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/hero-text-animation" data-animation-speed="1.0" data-animation-mobile data-animation-class-name="image__img" data-animation-ratio="xMidYMid meet" data-svg-title="Animation which changes the words - Reliable, Connected, Intelligent one by one">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 72" width="300" height="72" class="image__img"></svg>
</div>
<button class="image__button" data-animation-play-button="true">
<div class="image__button-icon-block" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" class="image__button-icon image__button-icon--pause image__button-icon--active" fill="none" height="24" id="svg-286089171" role="img" viewBox="0 0 25 24" width="25">
<path clip-rule="evenodd" d="M12.7305 22C18.2533 22 22.7305 17.5228 22.7305 12C22.7305 6.47715 18.2533 2 12.7305 2C7.20762 2 2.73047 6.47715 2.73047 12C2.73047 17.5228 7.20762 22 12.7305 22ZM12.7305 24C19.3579 24 24.7305 18.6274 24.7305 12C24.7305 5.37258 19.3579 0 12.7305 0C6.10305 0 0.730469 5.37258 0.730469 12C0.730469 18.6274 6.10305 24 12.7305 24Z" fill="white" fill-rule="evenodd" />
<path d="M9.23047 7.5C9.23047 7.22386 9.45433 7 9.73047 7H10.7305C11.0066 7 11.2305 7.22386 11.2305 7.5V16.5C11.2305 16.7761 11.0066 17 10.7305 17H9.73047C9.45433 17 9.23047 16.7761 9.23047 16.5V7.5Z" fill="white" />
<path d="M14.2305 7.5C14.2305 7.22386 14.4543 7 14.7305 7H15.7305C16.0066 7 16.2305 7.22386 16.2305 7.5V16.5C16.2305 16.7761 16.0066 17 15.7305 17H14.7305C14.4543 17 14.2305 16.7761 14.2305 16.5V7.5Z" fill="white" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="image__button-icon image__button-icon--play" fill="none" height="24" id="svg-1028862563" role="img" viewBox="0 0 25 24" width="25">
<path d="M9.31445 6.88133C9.31445 6.47383 9.77123 6.2332 10.1073 6.46366L17.5718 11.5823C17.8651 11.7834 17.8651 12.2164 17.5718 12.4176L10.1073 17.5362C9.77123 17.7667 9.31445 17.526 9.31445 17.1185L9.31445 6.88133Z" fill="white" />
<circle cx="12.2305" cy="12" r="11" stroke="white" stroke-width="2" />
</svg>
</div>
<span class="image__button-text"></span>
</button>
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/commons/clientlibs/utility/animated-image/bundles/js-modern.min.c2603ce52c22f4c92aea9ed7dc3174b2.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/viewport-intersection/bundles/js-modern.min.61b26e2f440ba8c1b9a5648bae372076.js","dependencies":[],"embed":null,"properties":{}},{"path":"/etc.clientlibs/commons/clientlibs/utility/resolution-detect/bundles/js-modern.min.af38c19eeb3f986f2da02e6350cda078.js","dependencies":null,"embed":null,"properties":{}}],"embed":null,"properties":{}}]',
            async: 'true'
        });
	</script>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-ce5a62fb" data-test-block="text" data-test-number="gw-43182">
<style>
	.IID-custom-text-ce5a62fb{text-align:center;font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif;margin:0 0 26px}@media (max-width: 767px){.IID-custom-text-ce5a62fb{margin:0 0 20px}}
	.IID-custom-text-ce5a62fb{font-size:60px;font-weight:500;line-height:1.2;letter-spacing:-.32px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-ce5a62fb{font-size:44px;letter-spacing:-.346px}}@media (max-width: 767px){.IID-custom-text-ce5a62fb{font-size:32px}}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<h1>Intelligent communications you can trust</h1>
</div>
</div>
<div class="grid IID-grid-f6f6dd48 CID-grid-1659f761">
<style>
	
	.IID-grid-f6f6dd48{--halfHorizGap:10px;--halfVertGap:0px}@media (max-width: 767px){.IID-grid-f6f6dd48{--halfHorizGap:10px;--halfVertGap:10px}}
</style>
<div class="grid__parsys    l-flex--justify-content-center     ">
<div class="grid-item IID-grid-item-3d472690 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="cta-v2 CID-cta-v2-e0fe0cb4 IID-cta-v2-988feb05">
<style>
	
	.IID-cta-v2-988feb05 .cta-v2__el{padding-top:14px;padding-bottom:14px;padding-left:30px;padding-right:30px;font-size:20px;font-weight:500;line-height:24px;color:#852800}.IID-cta-v2-988feb05 .cta-v2__el:hover,.IID-cta-v2-988feb05 .cta-v2__el:focus{color:#fff}.IID-cta-v2-988feb05 .cta-v2__el:active{color:#fff}.IID-cta-v2-988feb05 .cta-v2__el{border-radius:40px}.IID-cta-v2-988feb05 .cta-v2__el:before{background-color:#fae5d1}.IID-cta-v2-988feb05 .cta-v2__el:hover:before,.IID-cta-v2-988feb05 .cta-v2__el:focus:before{background-color:#852800}.IID-cta-v2-988feb05 .cta-v2__el:active:before{background-color:#681f00}.IID-cta-v2-988feb05.cta-v2--active .cta-v2__el{color:#fff}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="heroBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/plansandpricing.html" tabindex="0" title="Try free" target="_self" data-dl-element="button" data-dl-additional-info="Intelligent communication">
<span class="cta-v2__content">
<span class="cta-v2__text">Try free</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-ca63dbc4 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="cta-v2 IID-cta-v2-cb7a5ce3 CID-cta-v2-e0fe0cb4">
<style>
	
	.IID-cta-v2-cb7a5ce3 .cta-v2__el{padding-top:14px;padding-bottom:14px;padding-left:30px;padding-right:30px;font-size:20px;font-weight:500;line-height:24px;color:#852800}.IID-cta-v2-cb7a5ce3 .cta-v2__el:hover,.IID-cta-v2-cb7a5ce3 .cta-v2__el:focus{color:#fff}.IID-cta-v2-cb7a5ce3 .cta-v2__el:active{color:#fff}.IID-cta-v2-cb7a5ce3 .cta-v2__el{border-radius:40px}.IID-cta-v2-cb7a5ce3 .cta-v2__el:before{border-top-style:solid;border-left-style:solid;border-right-style:solid;border-bottom-style:solid;border-width:1px;border-color:rgba(153,46,1,.28)}.IID-cta-v2-cb7a5ce3 .cta-v2__el:hover:before,.IID-cta-v2-cb7a5ce3 .cta-v2__el:focus:before{border-color:#fff}.IID-cta-v2-cb7a5ce3 .cta-v2__el:active:before{border-color:#fff}.IID-cta-v2-cb7a5ce3 .cta-v2__el:before{background-color:#fff}.IID-cta-v2-cb7a5ce3 .cta-v2__el:hover:before,.IID-cta-v2-cb7a5ce3 .cta-v2__el:focus:before{background-color:#852800}.IID-cta-v2-cb7a5ce3 .cta-v2__el:active:before{background-color:#681f00}.IID-cta-v2-cb7a5ce3.cta-v2--active .cta-v2__el{color:#fff}.IID-cta-v2-cb7a5ce3.cta-v2--active .cta-v2__el:before{border-color:#fff}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="heroBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/feedback/sales-contact.html" tabindex="0" title="Contact sales" target="_self" data-dl-element="button" data-dl-additional-info="Intelligent communication">
<span class="cta-v2__content">
<span class="cta-v2__text">Contact sales</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--fullwidth aem-GridColumn aem-GridColumn--default--12 CID-background-79490109 IID-background-6f08fa76">
<style>
	.IID-background-6f08fa76{padding:10px 0}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="rawhtml CID-rawhtml-3925c5d8 IID-rawhtml-6a442809">
<div class="rawhtml__wrapper">
<style>
.new-hero-hp {
  padding: 10px 40px;
}
.new-hero-hp__flex-wrapper {
  display: flex;
  align-items: center;
  margin: 0 -21px;
}
.new-hero-hp__flex-item {
  display: flex;
  width: 25%;
  padding: 0 21px;
  height: 560px;
  will-change: width;
  transition: width .5s linear, flex-shrink .5s linear;
}
.new-hero-hp__background {
  position: relative;
  z-index: 2;
  width: 100%;
  transition: z-index 0s .3s;
}
.new-hero-hp__background:before {
  content: '';
  position: absolute;
  z-index: 2;
  inset: 0;
  border-radius: 20px;
  box-shadow: 0 0 0 20px #fff;
  transition: inset .3s linear;
}
.new-hero-hp__background:hover:before,
.new-hero-hp__flex-item--opened .new-hero-hp__background:before{
  inset: -10px;
}
.new-hero-hp__flex-item--opened .new-hero-hp__background:before {
  opacity: 0;
}
.new-hero-hp__background-layers {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 20px;
  transition: transform .3s linear;
}
.new-hero-hp__background-resolution-layer{
  position: absolute;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  left: -10px;
  top: -10px;
  z-index: 1;
}
.new-hero-hp__background-resolution-layer--mobile{
  display: none;
}
.new-hero-hp__background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  transition: opacity .3s linear;
}
.new-hero-hp__background-wrapper {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: width .3s linear;
}
.new-hero-hp__background:hover .new-hero-hp__background-wrapper,
.new-hero-hp__flex-item--opened .new-hero-hp__background-wrapper {
  width: calc(100% + 10px);
}
.new-hero-hp__product-name {
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.20) 100%), rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(15px);
  width: fit-content;
  white-space: nowrap;
  padding: 7px 14px 10px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 28px;
  font-size: 16px;
  line-height: 1.2;
}
.new-hero-hp__product-name-badge {
  font-size: 14px;
  background: linear-gradient(131deg, #E54800 0%, #FE8624 51.12%, #FFAB64 100%);
  color: #401D19;
  font-weight: 500;
  border-radius: 12px;
  padding: 5px 8px 7px 8px;
  line-height: 10px;
  margin-left: 8px;
}
.new-hero-hp__product-name--badge {
  padding-right: 8px;
}
.new-hero-hp__product-column-title {
  font-size: 26px;
  color: #222;
  line-height: 1.3;
  font-weight: 500;
  margin-bottom: 16px;
  max-width: 300px;
  font-family: 'RingCentralDisplay', Helvetica, Arial, sans-serif;
}
.new-hero-hp__product-column-title--no-cta{
  margin-bottom: 40px;
}
.new-hero-hp__toggler-wrapper {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 0;
  bottom: 0;
  z-index: 2;
}
.new-hero-hp__toggler-bg {
  width: 68px;
  height: 68px;
  border-radius: 39px 0 0 0;
  background-color: #fff;
}
.new-hero-hp__toggler-bg-part {
  position: absolute;
  inset: 0;
  color: #fff;
  transition: inset 0.3s linear;
  z-index: 2;
}
.new-hero-hp__toggler-bg-part svg {
  position: absolute;
}
.new-hero-hp__background:hover .new-hero-hp__toggler-bg-part--right,
.new-hero-hp__flex-item--opened .new-hero-hp__toggler-bg-part--right {
  inset: 0 -10px;
}
.new-hero-hp__background:hover .new-hero-hp__toggler-bg-part--bottom,
.new-hero-hp__flex-item--opened .new-hero-hp__toggler-bg-part--bottom {
  inset: -10px 0;
}
.new-hero-hp__toggler-bg-part--right:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 88px;
  background-color: #fff;
  bottom: -5px;
  right: -9px;
}
.new-hero-hp__toggler-bg-part--bottom:after {
  content: '';
  position: absolute;
  width: 88px;
  height: 10px;
  background-color: #fff;
  bottom: -9px;
  right: -5px;
}
.new-hero-hp__toggler-bg-part--right svg {
  height: 88px;
  width: 20px;
  bottom: 0;
  right: 0;
}
.new-hero-hp__toggler-bg-part--bottom svg {
  bottom: 0;
  right: 0;
  height: 20px;
  width: 88px;
}
.new-hero-hp__background:hover {
  z-index: 1;
  transition: z-index 0s;
}
.new-hero-hp__flex-item--opened .new-hero-hp__background{
  z-index: 3;
}
.new-hero-hp__toggler-bg:after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  right: -10px;
  bottom: -10px;
  background-color: #fff;
}
.new-hero-hp__toggler-btn {
  position: absolute;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  bottom: 0;
  color: #DA5001;
  transition: transform .3s linear;
}
.new-hero-hp__flex-item--opened {
  width: calc(100% - (166px + 42px) * 3);
  flex-shrink: 0;
  max-width: 938px;
}
.new-hero-hp__flex-item--opened .new-hero-hp__background-layer--outer{
  opacity: 0;
}
.new-hero-hp__flex-item--opened .new-hero-hp__product-name {
  background: linear-gradient(225deg, rgba(255, 188, 128, 0.20) 0%, rgba(255, 122, 0, 0.30) 100%);
  backdrop-filter: blur(15px);
  color: #401D19;
}
.new-hero-hp__product-column-cta-wrapper {
  margin-bottom: 40px;
}
.new-hero-hp__product-column-cta {
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 32px;
  border-radius: 16px;
  color: #992E01;
  position: relative;
  font-weight: 500;
  padding: 5px 8px 5px 12px;
  width: fit-content;
}
.new-hero-hp__product-column-cta-text {
  display: inline-block;
  margin-right: 16px;
}
.new-hero-hp__product-column-cta-ico {
  width: 17px;
  height: 17px;
}
.new-hero-hp__product-column-cta:after {
  content: '';
  position: absolute;
  right: 0;
  background-color: #FAE5D1;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  z-index: -1;
  transition: width .3s linear;
}
.new-hero-hp__product-column-cta:focus:after,
.new-hero-hp__product-column-cta:hover:after {
  width: 100%;
}

.new-hero-hp__flex-item--opened .new-hero-hp__toggler-btn {
  transform: rotate(45deg);
}
.new-hero-hp__product-columns {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.new-hero-hp__product-column {
  height: 100%;
}
.new-hero-hp__product-column--content {
  padding: 20px 0 0 20px;
  min-width: 50px;
  transition: min-width 0s .2s;
}
.new-hero-hp__flex-item--opened .new-hero-hp__product-column--content {
  min-width: 436px;
  max-width: 448px;
  transition: min-width 0s;
}
.new-hero-hp__product-column--image {
  max-width: 450px;
  position: relative;
  display: flex;
  opacity: 0;
  min-width: 340px;
  flex-shrink: 0;
  align-items: center;
  top: -10px;
  right: -10px;
  transition: opacity .3s linear, min-width 0s .2s;
}
.new-hero-hp__product-column-link {
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
  width: fit-content;
  font-size: 16px;
  color: #401D19;
  white-space: nowrap;
  top: 0;
  border-radius: 4px;
  text-decoration: underline;
}
.new-hero-hp__product-column-link-ico {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}
.new-hero-hp__product-column-link-text--badge{
  padding-right: 55px;
  display: flex;
}
.new-hero-hp__product-column-links-list {
  margin: -12px;
  display: flex;
  flex-wrap: wrap;
}
.new-hero-hp__product-column-link-wrapper {
  padding: 12px;
  width: 100%;
}
.new-hero-hp__product-hidden-elements {
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  max-width: 448px;
  visibility: hidden;
  transition: opacity .3s linear, transform .3s linear;
}
.new-hero-hp__flex-item--opened .new-hero-hp__product-hidden-elements{
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
  transition: opacity .3s linear, transform .3s linear;
}
.new-hero-hp__flex-item--opened .new-hero-hp__product-column--image {
  opacity: 1;
  transition: opacity .3s linear, min-width 0s;
}
.new-hero-hp__product-column-link-text-badge {
  background: linear-gradient(131deg, #E54800 0%, #FE8624 51.12%, #FFAB64 100%);
  font-size: 14px;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  color: #401D19;
  height: 22px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  position: absolute;
  justify-content: center;
}

.new-hero-hp__product-column-link-text-badge.new{
  right: -50px;
}
.new-hero-hp__product-column-link-text-badge.coming{
  right: -54px;
}

.new-hero-hp__item-focus-helper {
  visibility: hidden;
}
.new-hero-hp__flex-item--opened .new-hero-hp__item-focus-helper {
  visibility: visible;
}
@media (min-width: 1366px) {
  .new-hero-hp__product-column-links-list--two-columns-wide-screen .new-hero-hp__product-column-link-wrapper{
    width: 50%;
  }
}
@media (min-width: 1230px) and (max-width: 1367px) {
  .new-hero-hp__product-column--content {
    min-width: 100%;
  }
  .new-hero-hp__product-column--image {
    display: none;
  }
}
@media (max-width: 1367px) {
  .new-hero-hp {
    padding: 0 28px;
  }
  .new-hero-hp__flex-wrapper {
    margin: -16px 0;
  }
  .new-hero-hp__flex-item{
    padding: 0 16px;
    height: 580px;
  }
}
@media (max-width: 1229px) {
  .new-hero-hp__flex-wrapper {
    flex-wrap: wrap;
  }
  .new-hero-hp__flex-item{
    width: 100%;
    height: 260px;
    transition: height .3s ease-in-out;
    padding: 16px 0;
  }
  .new-hero-hp__flex-item--opened {
    max-width: 100%;
    height: 630px;
  }
  .new-hero-hp__background:before {
    display: none;
  }
  .new-hero-hp__background-resolution-layer {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .new-hero-hp__background:hover .new-hero-hp__toggler-bg-part--right,
  .new-hero-hp__background:hover .new-hero-hp__toggler-bg-part--bottom{
    inset: 0;
  }
  .new-hero-hp__background:hover .new-hero-hp__background-wrapper,
  .new-hero-hp__flex-item--opened .new-hero-hp__background-wrapper{
    width: 100%;
  }
  .new-hero-hp__product-column--image {
    max-width: 50%;
  }
  .new-hero-hp__flex-item--opened .new-hero-hp__product-column--content {
    min-width: 50%;
  }
  .new-hero-hp__product-column-link-wrapper {
    white-space: nowrap;
  }
}
@media (min-width: 1230px) and (max-width: 1229px) {
  .new-hero-hp__product-column-links-list--two-columns-wide-screen .new-hero-hp__product-column-link-wrapper {
    width: 50%;
  }
}
@media (max-width: 767px) {
  .new-hero-hp__flex-wrapper {
    margin: -10px 0;
  }
  .new-hero-hp__flex-item {
    padding: 10px 0;
    height: fit-content;
    max-height: 190px;
    overflow: hidden;
    transition: max-height .3s ease-in-out;
  }
  .new-hero-hp__flex-item--opened {
    max-height: 1100px;
  }
  .new-hero-hp__product-column--content {
    padding-left: 16px;
    padding-top: 16px;
  }
  .new-hero-hp__background-layer--inner {
    background-size: 715px 451px;
    background-position: bottom right;
    background-color: #F6F5F1;
  }
  .new-hero-hp__background-wrapper {
    position: relative;
  }
  .new-hero-hp__background-resolution-layer--desktop{
    display: none;
  }
  .new-hero-hp__background-resolution-layer--mobile{
    display: block;
  }
  .new-hero-hp__product-columns {
    width: auto;
    padding-bottom: 30px;
    flex-wrap: wrap;
  }
  .new-hero-hp__product-column--content {
    max-width: 100%;
    width: 100%;
    height: auto;
    margin-bottom: 32px;
  }
  .new-hero-hp__product-column--image {
    max-width: 100%;
    width: 100%;
    top: 0;
    right: 0;
    height: auto;
  }
  .new-hero-hp__product-column-link-wrapper {
    white-space: nowrap;
  }
  .new-hero-hp__background-layer--outer {
    transition: opacity .3s .2s linear;
  }
  .new-hero-hp__flex-item--opened .new-hero-hp__background-layer--outer {
    transition: unset;
  }
}
</style>
<div class="new-hero-hp" data-dl-custom-type="submitBtBanner">
<div class="new-hero-hp__flex-wrapper">
<div class="new-hero-hp__flex-item new-hero-hp__flex-item--mvp">
<div class="new-hero-hp__background">
<div class="new-hero-hp__toggler-bg-part new-hero-hp__toggler-bg-part--right" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 88">
<path d="m20,88V0c0,11.05-8.95,20-20,20v68h20Z" fill-rule="evenodd" />
</svg>
</div>
<div class="new-hero-hp__toggler-bg-part new-hero-hp__toggler-bg-part--bottom" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" id="a" data-name="Layer 1" viewBox="0 0 88 20">
<path d="m88,0H20c0,11.05-8.95,20-20,20h88V0Z" fill="#fff" fill-rule="evenodd" />
</svg>
</div>
<div class="new-hero-hp__background-layers">
<div class="new-hero-hp__background-resolution-layer new-hero-hp__background-resolution-layer--desktop">
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--inner" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-desktop.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-desktop-jpg-rendition.webp"></div>
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--outer" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/business-central-desktop.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/business-central-desktop-jpg-rendition.webp" role="img" aria-label="The RingCentral dialpad on a mobile phone"></div>
</div>
<div class="new-hero-hp__background-resolution-layer new-hero-hp__background-resolution-layer--mobile">
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--inner" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-mobile.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-mobile-jpg-rendition.webp"></div>
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--outer" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/BusinessCentral-IMG-mobile.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/BusinessCentral-IMG-mobile-jpg-rendition.webp" role="img" aria-label="The RingCentral dialpad on a mobile phone"></div>
</div>
</div>
<div class="new-hero-hp__background-wrapper">
<div class="new-hero-hp__product-columns">
<div class="new-hero-hp__product-column new-hero-hp__product-column--content">
<div class="new-hero-hp__product-name">
Intelligent Phone Solutions
</div>
<div class="new-hero-hp__product-hidden-elements">
<div class="new-hero-hp__product-column-title">
The complete cloud communication solution
</div>
<div class="new-hero-hp__product-column-cta-wrapper">
<a href="/gb/en/office/product-overview.html" class="new-hero-hp__product-column-cta" data-dl-additional-info="The complete cloud commun">
<span class="new-hero-hp__product-column-cta-text">
Learn more
</span>
<span class="new-hero-hp__product-column-cta-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M.917 8.553a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="m15.314 8.8-4.869 4.868a.5.5 0 0 0 0 .707l.354.354a.5.5 0 0 0 .707 0l5.186-5.187a1.05 1.05 0 0 0 0-1.485L11.506 2.87a.5.5 0 0 0-.707 0l-.354.354a.5.5 0 0 0 0 .707l4.869 4.868Z" /></svg>
</span>
</a>
</div>
<div class="new-hero-hp__product-column-links-list new-hero-hp__product-column-links-list--two-columns-wide-screen">
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/solutions/office/call.html" class="new-hero-hp__product-column-link" data-dl-additional-info="The complete cloud commun">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><style>.cps-st1{fill-rule:evenodd;clip-rule:evenodd;fill:#401d19}</style><path d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0z" style="fill:#ecdfcf" /><path class="cps-st1" d="M20.04 14.27c.06.34.36.58.7.58.05 0 .09 0 .14-.01.39-.08.64-.46.57-.84a4.321 4.321 0 0 0-3.42-3.43c-.4-.07-.76.18-.84.57-.08.39.18.77.57.84a2.88 2.88 0 0 1 2.28 2.29z" /><path class="cps-st1" d="M17.97 7.66a.658.658 0 0 0-.52.15.718.718 0 0 0 .36 1.28c2.71.3 4.81 2.41 5.11 5.13.04.36.35.64.71.64.03 0 .05 0 .08-.01a.722.722 0 0 0 .63-.8c-.37-3.39-2.99-6.02-6.37-6.39zM21.4 18.41c-2.12-2.12-2.88 1.73-6.21-1.6s.52-4.09-1.6-6.21c-2.04-2.04-2.45-3.23-5.04-.63-.26.32-3.4 2.39 3.85 9.63 7.24 7.24 9.31 4.11 9.63 3.85 2.59-2.59 1.41-3-.63-5.04z" /></svg>
</span>
<span class="new-hero-hp__product-column-link-text">
Cloud Phone System
</span>
</a>
</div>
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/video.html" class="new-hero-hp__product-column-link" data-dl-additional-info="The complete cloud commun">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0z" style="fill:#ecdfcf" /><path d="M23.89 11.79c-.34-.18-1.06-.38-2.04.31l-1.23.87c-.09-2.6-1.22-3.62-3.96-3.62h-5.01c-2.86 0-3.97 1.11-3.97 3.97V20c0 1.92 1.04 3.97 3.97 3.97h5.01c2.74 0 3.87-1.02 3.96-3.62l1.23.87c.52.37.97.48 1.33.48.31 0 .55-.09.71-.18.34-.18.92-.65.92-1.85v-6.05c0-1.17-.58-1.65-.92-1.83zm-8.48 4.36c-.86 0-1.57-.7-1.57-1.57 0-.87.71-1.57 1.57-1.57s1.57.7 1.57 1.57c0 .87-.71 1.57-1.57 1.57z" style="fill:#401d19" /></svg>
</span>
<span class="new-hero-hp__product-column-link-text">
Video Meetings
</span>
</a>
</div>
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/teams/overview.html" class="new-hero-hp__product-column-link" data-dl-additional-info="The complete cloud commun">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0z" fill="#ecdfcf" /><path d="M16.17 13.33h-6.03c-.12 0-.24.01-.36.02-1.62.15-2.67 1.32-2.67 3v3.62c0 .91.3 1.66.84 2.2.52.52 1.28.83 2.18.83v1.29c0 .48.53.77.93.5L13.75 23h2.42c1.49 0 2.58-.82 2.91-2.12.08-.28.12-.58.12-.9v-3.62c-.01-1.82-1.22-3.03-3.03-3.03z" /><path d="M21.11 7.11h-7.55c-2.09 0-3.78 1.69-3.78 3.78v.67c0 .25.2.44.44.44h5.95c2.41 0 4.36 1.95 4.36 4.36v2.4c0 .25.2.44.44.44h.14c1.13 0 2.08-.37 2.74-1.04.67-.66 1.04-1.61 1.04-2.74v-4.53c0-2.09-1.69-3.78-3.78-3.78z" /></svg>
</span>
<span class="new-hero-hp__product-column-link-text">
Team Messaging
</span>
</a>
</div>
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/pushtotalk.html" class="new-hero-hp__product-column-link" data-dl-additional-info="The complete cloud commun" data-dl-name="Push to Talk">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0z" fill="#ecdfcf" /><path d="M18.6 8.83h-5.2a4 4 0 0 0-1.15.17V6.23c0-.36-.36-.65-.8-.65-.44 0-.8.29-.8.65v3.74c-.71.71-1.15 1.68-1.15 2.76v7.8c0 2.15 1.75 3.9 3.9 3.9h5.2c2.15 0 3.9-1.75 3.9-3.9v-7.8c0-2.16-1.75-3.9-3.9-3.9zm.65 12.92h-6.5c-.36 0-.65-.29-.65-.65 0-.36.29-.65.65-.65h6.5c.36 0 .65.29.65.65 0 .36-.29.65-.65.65zm0-2.56h-6.5c-.36 0-.65-.29-.65-.65s.29-.65.65-.65h6.5c.36 0 .65.29.65.65s-.29.65-.65.65zm.65-5.5c0 .96-.78 1.73-1.73 1.73h-4.33c-.96 0-1.73-.78-1.73-1.73v-.53c0-.96.78-1.73 1.73-1.73h4.33c.96 0 1.73.78 1.73 1.73v.53z" fill="#401d19" /></svg>
</span>
<span class="new-hero-hp__product-column-link-text">
Push to Talk
</span>
</a>
</div>
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/fax/features/how-it-works.html" class="new-hero-hp__product-column-link" data-dl-additional-info="The complete cloud commun">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0z" fill="#ecdfcf" /><path d="M20.32 12.28c.58.01 1.38.01 2.07.01.35 0 .53-.42.28-.68-.88-.92-2.45-2.57-3.34-3.51a.395.395 0 0 0-.68.28v2.21c0 .92.75 1.69 1.67 1.69z" /><path d="M22.76 13.5c-.3 0-.64.01-.9.01h-.14c-.38 0-.88-.01-1.51-.01-1.52-.01-2.77-1.27-2.77-2.8V8c0-.21-.17-.39-.38-.39h-4.43c-2.07 0-3.75 1.7-3.75 3.78v9.04c0 2.18 1.76 3.95 3.92 3.95h6.61c2.06 0 3.73-1.69 3.73-3.77v-6.74a.385.385 0 0 0-.38-.37zm-9.34.74h2.81c.34 0 .62.29.62.63s-.28.62-.62.62h-2.81a.625.625 0 0 1 0-1.25zm4.52 5.44h-4.52c-.34 0-.62-.29-.62-.63s.28-.62.62-.62h4.52a.625.625 0 0 1 0 1.25z" /></svg>
</span>
<span class="new-hero-hp__product-column-link-text">
Cloud Faxing
</span>
</a>
</div>
</div>
</div>
</div>
<div class="new-hero-hp__product-column new-hero-hp__product-column--image">
<img src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/BusinessCentral-UI.png" alt="The RingCentral Desktop app and the RingCentral mobile app dialpad">
</div>
</div>
</div>
<div class="new-hero-hp__toggler-wrapper">
<div class="new-hero-hp__toggler-bg"></div>
<button class="new-hero-hp__toggler-btn" aria-label="Click to learn more" data-dl-element="button" data-dl-name="Intelligent Phone Solutions" data-dl-additional-info="Intelligent communication">
<span class="new-hero-hp__toggler-icon" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><circle cx="29" cy="29" r="29" /><path d="M30.37 15.68a.68.68 0 0 0-.68-.68h-1.36a.68.68 0 0 0-.68.68v11.95H15.68a.68.68 0 0 0-.68.68v1.36c0 .38.31.68.68.68h11.95V42.3c0 .38.31.68.68.68h1.36c.38 0 .68-.31.68-.68V30.36H42.3c.38 0 .68-.31.68-.68v-1.36a.68.68 0 0 0-.68-.68H30.37V15.68z" style="fill:#fff" /></svg>
</span>
</button>
</div>
</div>
<div class="new-hero-hp__item-focus-helper" tabindex="0"></div>
</div>
<div class="new-hero-hp__flex-item new-hero-hp__flex-item--video">
<div class="new-hero-hp__background">
<div class="new-hero-hp__toggler-bg-part new-hero-hp__toggler-bg-part--right" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 88">
<path d="m20,88V0c0,11.05-8.95,20-20,20v68h20Z" fill-rule="evenodd" />
</svg>
</div>
<div class="new-hero-hp__toggler-bg-part new-hero-hp__toggler-bg-part--bottom" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" id="a" data-name="Layer 1" viewBox="0 0 88 20">
<path d="m88,0H20c0,11.05-8.95,20-20,20h88V0Z" fill="#fff" fill-rule="evenodd" />
</svg>
</div>
<div class="new-hero-hp__background-layers">
<div class="new-hero-hp__background-resolution-layer new-hero-hp__background-resolution-layer--desktop">
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--inner" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-desktop.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-desktop-jpg-rendition.webp"></div>
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--outer" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/video-central-desktop.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/video-central-desktop-jpg-rendition.webp" role="img" aria-label="An ongoing RingCentral videoconference call on a tablet held by a woman"></div>
</div>
<div class="new-hero-hp__background-resolution-layer new-hero-hp__background-resolution-layer--mobile">
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--inner" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-mobile.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-mobile-jpg-rendition.webp"></div>
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--outer" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/VideoCentral-IMG-mobile.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/VideoCentral-IMG-mobile-jpg-rendition.webp" role="img" aria-label="An ongoing RingCentral videoconference call on a tablet held by a woman"></div>
</div>
</div>
<div class="new-hero-hp__background-wrapper">
<div class="new-hero-hp__product-columns">
<div class="new-hero-hp__product-column new-hero-hp__product-column--content">
<div class="new-hero-hp__product-name">
Intelligent Meetings
</div>
<div class="new-hero-hp__product-hidden-elements">
<div class="new-hero-hp__product-column-title new-hero-hp__product-column-title--no-cta">
Better engagements through AI data insights
</div>
<div class="new-hero-hp__product-column-links-list">
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/video.html" class="new-hero-hp__product-column-link" data-dl-additional-info="Better engagements throug">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0z" fill="#ecdfcf" /><path d="M23.89 11.79c-.34-.18-1.06-.38-2.04.31l-1.23.87c-.09-2.6-1.22-3.62-3.96-3.62h-5.01c-2.86 0-3.97 1.11-3.97 3.97V20c0 1.92 1.04 3.97 3.97 3.97h5.01c2.74 0 3.87-1.02 3.96-3.62l1.23.87c.52.37.97.48 1.33.48.31 0 .55-.09.71-.18.34-.18.92-.65.92-1.85v-6.05c0-1.17-.58-1.65-.92-1.83zm-8.48 4.36c-.86 0-1.57-.7-1.57-1.57 0-.87.71-1.57 1.57-1.57s1.57.7 1.57 1.57c0 .87-.71 1.57-1.57 1.57z" fill="#401d19" /></svg>
</span>
<span class="new-hero-hp__product-column-link-text">
Intelligent Meetings
</span>
</a>
</div>
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/webinar.html" class="new-hero-hp__product-column-link" data-dl-additional-info="Better engagements throug">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0z" fill="#ecdfcf" /><path d="M20.5 8.12h-9c-2.49 0-4.5 2.01-4.5 4.5v5.17c0 2.49 2.01 4.5 4.5 4.5h3.88v1.58h-3.26c-.35 0-.62.28-.62.62 0 .35.28.62.62.62h7.76c.35 0 .62-.28.62-.62 0-.35-.28-.62-.62-.62h-3.26v-1.58h3.88c2.49 0 4.5-2.01 4.5-4.5v-5.17a4.5 4.5 0 0 0-4.5-4.5zm-4.59 2.44c.64-.01 1.26.23 1.72.68a2.401 2.401 0 0 1 .06 3.41c-.44.46-1.05.73-1.69.74a.543.543 0 0 0-.18 0c-.62-.02-1.22-.28-1.65-.74-.43-.45-.68-1.05-.67-1.68a2.399 2.399 0 0 1 2.41-2.41zm3.47 9.41c-.34.48-.98.62-1.57.62h-3.63c-.59 0-1.22-.14-1.56-.62-.6-.84-.38-1.88.66-2.58 1.5-1 3.96-1 5.45 0 1.04.7 1.25 1.74.65 2.58z" fill="#401d19" /></svg>
</span>
<span class="new-hero-hp__product-column-link-text">
Webinar
</span>
</a>
</div>
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/office/rooms.html" class="new-hero-hp__product-column-link" data-dl-additional-info="Better engagements throug">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0z" fill="#ecdfcf" /><path d="M19.24 22.91c-1.01.36-2.1.56-3.24.56-1.14 0-2.23-.2-3.24-.56a.75.75 0 1 0-.51 1.41c1.17.42 2.43.65 3.75.65 1.31 0 2.58-.23 3.75-.65a.75.75 0 0 0 .45-.96.758.758 0 0 0-.96-.45zM17.88 14.18a1.3 1.3 0 0 1-.22-2.58 3.572 3.572 0 0 0-5.23 3.16c0 1.97 1.6 3.57 3.57 3.57a3.572 3.572 0 0 0 3.17-5.22c-.11.6-.64 1.07-1.29 1.07z" /><path d="M16 7.02c-4.27 0-7.73 3.46-7.73 7.73s3.46 7.73 7.73 7.73c4.27 0 7.73-3.46 7.73-7.73S20.27 7.02 16 7.02zm0 12.6a4.87 4.87 0 1 1-.001-9.739A4.87 4.87 0 0 1 16 19.62z" /></svg>
</span>
<span class="new-hero-hp__product-column-link-text">
Rooms
</span>
</a>
</div>
</div>
</div>
</div>
<div class="new-hero-hp__product-column new-hero-hp__product-column--image">
<img src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/VideoCentral-UI.png" alt="Two colleagues in a video meeting using the RingCentral app">
</div>
</div>
</div>
<div class="new-hero-hp__toggler-wrapper">
<div class="new-hero-hp__toggler-bg"></div>
<button class="new-hero-hp__toggler-btn" aria-label="Click to learn more" data-dl-element="button" data-dl-name="Intelligent Meetings" data-dl-additional-info="Intelligent communication">
<span class="new-hero-hp__toggler-icon" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><circle cx="29" cy="29" r="29" /><path d="M30.37 15.68a.68.68 0 0 0-.68-.68h-1.36a.68.68 0 0 0-.68.68v11.95H15.68a.68.68 0 0 0-.68.68v1.36c0 .38.31.68.68.68h11.95V42.3c0 .38.31.68.68.68h1.36c.38 0 .68-.31.68-.68V30.36H42.3c.38 0 .68-.31.68-.68v-1.36a.68.68 0 0 0-.68-.68H30.37V15.68z" style="fill:#fff" /></svg>
</span>
</button>
</div>
</div>
<div class="new-hero-hp__item-focus-helper" tabindex="0"></div>
</div>
<div class="new-hero-hp__flex-item new-hero-hp__flex-item--cc">
<div class="new-hero-hp__background">
<div class="new-hero-hp__toggler-bg-part new-hero-hp__toggler-bg-part--right" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 88">
<path d="m20,88V0c0,11.05-8.95,20-20,20v68h20Z" fill-rule="evenodd" />
</svg>
</div>
<div class="new-hero-hp__toggler-bg-part new-hero-hp__toggler-bg-part--bottom" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" id="a" data-name="Layer 1" viewBox="0 0 88 20">
<path d="m88,0H20c0,11.05-8.95,20-20,20h88V0Z" fill="#fff" fill-rule="evenodd" />
</svg>
</div>
<div class="new-hero-hp__background-layers">
<div class="new-hero-hp__background-resolution-layer new-hero-hp__background-resolution-layer--desktop">
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--inner" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-desktop.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-desktop-jpg-rendition.webp"></div>
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--outer" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/contact-central-desktop.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/contact-central-desktop-jpg-rendition.webp" role="img" aria-label="A male agent wearing a headset facing his laptop"></div>
</div>
<div class="new-hero-hp__background-resolution-layer new-hero-hp__background-resolution-layer--mobile">
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--inner" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-mobile.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-mobile-jpg-rendition.webp"></div>
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--outer" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/ContactCentral-IMG-mobile.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/ContactCentral-IMG-mobile-jpg-rendition.webp" role="img" aria-label="A male agent wearing a headset facing his laptop"></div>
</div>
</div>
<div class="new-hero-hp__background-wrapper">
<div class="new-hero-hp__product-columns">
<div class="new-hero-hp__product-column new-hero-hp__product-column--content">
<div class="new-hero-hp__product-name new-hero-hp__product-name--badge">
<span class="new-hero-hp__product-name-text">Contact Centre Solutions</span>
<span class="new-hero-hp__product-name-badge">New</span>
</div>
<div class="new-hero-hp__product-hidden-elements">
<div class="new-hero-hp__product-column-title new-hero-hp__product-column-title--no-cta">
Complete customer experience solution
</div>
<div class="new-hero-hp__product-column-links-list">
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/ringcx.html" class="new-hero-hp__product-column-link" data-dl-additional-info="Complete customer experie">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0z" fill="#ecdfcf" /><path d="M15.96 7.54c-2.03 0-3.92.79-5.33 2.22a7.446 7.446 0 0 0-2.13 5.39V19.6c0 1.57 1.28 2.86 2.86 2.86h.1c1.57 0 2.86-1.28 2.86-2.86v-1.41c0-1.57-1.28-2.86-2.86-2.86h-.1c-.65 0-1.25.23-1.73.6v-.8c-.03-1.74.61-3.37 1.81-4.59a6.302 6.302 0 0 1 4.53-1.88c3.54 0 6.41 2.88 6.41 6.41v.86c-.48-.37-1.08-.6-1.73-.6h-.1c-1.57 0-2.86 1.28-2.86 2.86v1.41c0 1.51 1.18 2.73 2.66 2.84a2.148 2.148 0 0 1-2.13 1.94h-.38a1.498 1.498 0 0 0-2.88.58c0 .83.67 1.5 1.5 1.5.64 0 1.18-.4 1.4-.96h.37c1.77 0 3.21-1.42 3.26-3.17a2.85 2.85 0 0 0 2.02-2.72v-4.52c-.01-4.17-3.39-7.55-7.55-7.55z" fill="#401d19" /></svg>
</span>
<span class="new-hero-hp__product-column-link-text">
RingCX
<span class="new-hero-hp__product-column-link-text-badge new">
New
</span>
</span>
</a>
</div>
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/contact-centre/overview.html" class="new-hero-hp__product-column-link" data-dl-additional-info="Complete customer experie">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
<path fill="#ECDFCF" d="M16,0L16,0c8.84,0,16,7.16,16,16l0,0c0,8.84-7.16,16-16,16l0,0C7.16,32,0,24.84,0,16l0,0C0,7.16,7.16,0,16,0z" />
<g>
<path fill="#5A1B00" d="M25.74,16c0,1.24-0.24,2.42-0.67,3.52c0.36,0.12,0.68,0.31,0.97,0.55c0.51-1.26,0.8-2.63,0.8-4.07
                          c0-4.93-3.31-9.1-7.83-10.41c0.01,0.09,0.03,0.18,0.03,0.28c0,0.29-0.05,0.56-0.13,0.83C22.87,7.95,25.74,11.64,25.74,16z" />
<path fill="#5A1B00" d="M21.52,24.02c-1.57,1.09-3.47,1.73-5.52,1.73c-2.05,0-3.95-0.64-5.52-1.73c-0.2,0.31-0.46,0.58-0.76,0.8
                          c1.77,1.27,3.94,2.02,6.28,2.02c2.34,0,4.51-0.75,6.28-2.02C21.98,24.6,21.72,24.33,21.52,24.02z" />
<path fill="#5A1B00" d="M6.93,19.52C6.5,18.42,6.26,17.24,6.26,16c0-4.36,2.88-8.05,6.83-9.3c-0.08-0.27-0.13-0.54-0.13-0.83
                          c0-0.1,0.02-0.19,0.03-0.28C8.47,6.9,5.16,11.07,5.16,16c0,1.44,0.29,2.81,0.8,4.07C6.24,19.83,6.57,19.64,6.93,19.52z" />
<path fill="#5A1B00" d="M16,8.02c0.97,0,1.78-0.65,2.04-1.54c0.06-0.19,0.1-0.39,0.1-0.6c0-0.18-0.03-0.35-0.07-0.51
                          C17.84,4.43,17,3.73,16,3.73c-1,0-1.84,0.7-2.07,1.63c-0.04,0.16-0.07,0.33-0.07,0.51c0,0.21,0.04,0.41,0.1,0.6
                          C14.22,7.36,15.03,8.02,16,8.02z" />
<path fill="#5A1B00" d="M10.06,22.38c0-1.18-0.96-2.14-2.14-2.14c-0.22,0-0.43,0.04-0.63,0.1c-0.36,0.11-0.68,0.31-0.94,0.58
                          C6,21.31,5.78,21.82,5.78,22.38c0,1.18,0.96,2.14,2.14,2.14c0.38,0,0.74-0.11,1.05-0.29c0.33-0.18,0.6-0.45,0.79-0.77
                          C9.95,23.15,10.06,22.78,10.06,22.38z" />
<path fill="#5A1B00" d="M24.71,20.34c-0.2-0.06-0.41-0.1-0.63-0.1c-1.18,0-2.14,0.96-2.14,2.14c0,0.4,0.12,0.77,0.31,1.09
                          c0.19,0.32,0.46,0.58,0.79,0.77c0.31,0.18,0.67,0.29,1.05,0.29c1.18,0,2.14-0.96,2.14-2.14c0-0.56-0.22-1.07-0.58-1.45
                          C25.39,20.66,25.07,20.45,24.71,20.34z" />
<path fill="#5A1B00" d="M17.61,21.31h-0.27c-0.18-0.3-0.49-0.5-0.86-0.5c-0.56,0-1.02,0.46-1.02,1.02s0.46,1.02,1.02,1.02
                          c0.38,0,0.71-0.22,0.88-0.53h0.25c1.27,0,2.3-1.02,2.33-2.28c0.79-0.25,1.36-0.98,1.36-1.84v-0.96c0-0.02,0-0.04-0.01-0.05v-2.06
                          c0-2.93-2.39-5.32-5.32-5.32c-1.43,0-2.77,0.56-3.77,1.57c-1,1.02-1.53,2.37-1.5,3.8v2.9c0,0.02,0.01,0.04,0.01,0.06v0.07
                          c0,1.07,0.87,1.94,1.94,1.94h0.07c1.07,0,1.94-0.87,1.94-1.94v-0.96c0-1.07-0.87-1.94-1.94-1.94h-0.07c-0.28,0-0.55,0.06-0.79,0.17
                          v-0.31c-0.02-1.13,0.4-2.19,1.17-2.97c0.77-0.79,1.81-1.22,2.93-1.22c2.29,0,4.16,1.86,4.16,4.16v0.34
                          c-0.24-0.1-0.5-0.16-0.77-0.16h-0.07c-1.07,0-1.94,0.87-1.94,1.94v0.96c0,0.94,0.68,1.73,1.57,1.9
                          C18.86,20.77,18.3,21.31,17.61,21.31z" />
</g>
</svg>
</span>
<span class="new-hero-hp__product-column-link-text">
Contact Centre Enterprise
</span>
</a>
</div>
</div>
</div>
</div>
<div class="new-hero-hp__product-column new-hero-hp__product-column--image">
<img src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/ContactCentral-UI.png" alt="A customer profile opened in the RingCentral Contact Centre app">
</div>
</div>
</div>
<div class="new-hero-hp__toggler-wrapper">
<div class="new-hero-hp__toggler-bg"></div>
<button class="new-hero-hp__toggler-btn" aria-label="Click to learn more" data-dl-element="button" data-dl-name="Contact Centre Solutions" data-dl-additional-info="Intelligent communication">
<span class="new-hero-hp__toggler-icon" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><circle cx="29" cy="29" r="29" /><path d="M30.37 15.68a.68.68 0 0 0-.68-.68h-1.36a.68.68 0 0 0-.68.68v11.95H15.68a.68.68 0 0 0-.68.68v1.36c0 .38.31.68.68.68h11.95V42.3c0 .38.31.68.68.68h1.36c.38 0 .68-.31.68-.68V30.36H42.3c.38 0 .68-.31.68-.68v-1.36a.68.68 0 0 0-.68-.68H30.37V15.68z" style="fill:#fff" /></svg>
</span>
</button>
</div>
</div>
<div class="new-hero-hp__item-focus-helper" tabindex="0"></div>
</div>
<div class="new-hero-hp__flex-item new-hero-hp__flex-item--ai">
<div class="new-hero-hp__background">
<div class="new-hero-hp__toggler-bg-part new-hero-hp__toggler-bg-part--right" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 88">
<path d="m20,88V0c0,11.05-8.95,20-20,20v68h20Z" fill-rule="evenodd" />
</svg>
</div>
<div class="new-hero-hp__toggler-bg-part new-hero-hp__toggler-bg-part--bottom" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" id="a" data-name="Layer 1" viewBox="0 0 88 20">
<path d="m88,0H20c0,11.05-8.95,20-20,20h88V0Z" fill="#fff" fill-rule="evenodd" />
</svg>
</div>
<div class="new-hero-hp__background-layers">
<div class="new-hero-hp__background-resolution-layer new-hero-hp__background-resolution-layer--desktop">
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--inner" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-desktop.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-desktop-jpg-rendition.webp"></div>
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--outer" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/aicentral-desktop.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/aicentral-desktop-jpg-rendition.webp" role="img" aria-label="A female on a call on her mobile phone while typing at her laptop"></div>
</div>
<div class="new-hero-hp__background-resolution-layer new-hero-hp__background-resolution-layer--mobile">
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--inner" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-mobile.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/bkg-mobile-jpg-rendition.webp"></div>
<div class="new-hero-hp__background-layer new-hero-hp__background-layer--outer" data-lazy-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/AiCentral-IMG-mobile.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/AiCentral-IMG-mobile-jpg-rendition.webp" role="img" aria-label="A female on a call on her mobile phone while typing at her laptop"></div>
</div>
</div>
<div class="new-hero-hp__background-wrapper">
<div class="new-hero-hp__product-columns">
<div class="new-hero-hp__product-column new-hero-hp__product-column--content">
<div class="new-hero-hp__product-name">
AI Solutions
</div>
<div class="new-hero-hp__product-hidden-elements">
<div class="new-hero-hp__product-column-title new-hero-hp__product-column-title--no-cta">
AI innovations for the future of your growing business
</div>
<div class="new-hero-hp__product-column-links-list new-hero-hp__product-column-links-list--two-columns-wide-screen">
<div class="new-hero-hp__product-column-link-wrapper">
<a href="/gb/en/ringsense.html" class="new-hero-hp__product-column-link" data-dl-additional-info="AI innovations for the fu" data-dl-name="RingSense for Sales">
<span class="new-hero-hp__product-column-link-ico" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0z" fill="#ecdfcf" /><path d="M23 16.6h2c.33 0 .6-.27.6-.6 0-.33-.27-.6-.6-.6h-2v-1.8h2c.33 0 .6-.27.6-.6 0-.33-.27-.6-.6-.6h-2V12c0-1.66-1.34-3-3-3h-.4V7c0-.33-.27-.6-.6-.6-.33 0-.6.27-.6.6v2h-1.8V7c0-.33-.27-.6-.6-.6-.33 0-.6.27-.6.6v2h-1.8V7c0-.33-.27-.6-.6-.6-.33 0-.6.27-.6.6v2H12c-1.66 0-3 1.34-3 3v.4H7c-.33 0-.6.27-.6.6 0 .33.27.6.6.6h1.99v1.8H7c-.33 0-.6.27-.6.6 0 .33.27.6.6.6h1.99v1.8H7c-.33 0-.6.27-.6.6 0 .33.27.6.6.6h1.99v.4c0 1.66 1.34 3 3 3h.4v2c0 .33.27.6.6.6.33 0 .6-.27.6-.6v-2h1.8v2c0 .33.27.6.6.6.33 0 .6-.27.6-.6v-2h1.8v2c0 .33.27.6.6.6.33 0 .6-.27.6-.6v-2H20c1.66 0 3-1.34 3-3v-.4h2c.33 0 .6-.27.6-.6 0-.33-.27-.6-.6-.6h-2v-1.8zM20 19c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v6z" /><path d="M13.2 13.2h5.6v5.6h-5.6z" /></svg>
</span>
<span class="new-hero-hp__product-column-link-text new-hero-hp__product-column-link-text--badge">
RingSense for Sales
<span class="new-hero-hp__product-column-link-text-badge coming">
Coming soon
</span>
</span>
<span class="new-hero-hp__product-column-link-text">
</span>
</a>
</div>
</div>
</div>
</div>
<div class="new-hero-hp__product-column new-hero-hp__product-column--image">
<img src="/content/dam/rc-www/en_us/images/content/ab-tests/homepages/orange-redesign/AiCentral-UI.png" alt="RingCentral App's RingSense Dashboard">
</div>
</div>
</div>
<div class="new-hero-hp__toggler-wrapper">
<div class="new-hero-hp__toggler-bg"></div>
<button class="new-hero-hp__toggler-btn" aria-label="Click to learn more" data-dl-element="button" data-dl-name="AI Solutions" data-dl-additional-info="Intelligent communication">
<span class="new-hero-hp__toggler-icon" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><circle cx="29" cy="29" r="29" /><path d="M30.37 15.68a.68.68 0 0 0-.68-.68h-1.36a.68.68 0 0 0-.68.68v11.95H15.68a.68.68 0 0 0-.68.68v1.36c0 .38.31.68.68.68h11.95V42.3c0 .38.31.68.68.68h1.36c.38 0 .68-.31.68-.68V30.36H42.3c.38 0 .68-.31.68-.68v-1.36a.68.68 0 0 0-.68-.68H30.37V15.68z" style="fill:#fff" /></svg>
</span>
</button>
</div>
</div>
<div class="new-hero-hp__item-focus-helper" tabindex="0"></div>
</div>
</div>
</div>
<script>
;(function (){
  const heroBlock = {
    init: function init() {
      const self = this;

      self.heroContainer = document.querySelector('.new-hero-hp');
      self.productColumnsList = self.heroContainer.querySelectorAll('.new-hero-hp__product-columns');
      self.heroFlexItems = self.heroContainer.querySelectorAll('.new-hero-hp__flex-item');
      self.heroTogglerButtons = self.heroContainer.querySelectorAll('.new-hero-hp__toggler-btn');
      self.previousOpenedFlexItem = '';
      self.additionalClasses = {
        heroFlexItemOpened: 'new-hero-hp__flex-item--opened',
      };
      self.maxWidthOfOpeneItem = 936;

      self.setBgWrapperWidth(self.getWindowWidth() >= 1368 ? 'count' : 'auto');
      self.attachEvents();
    },
    attachEvents: function attachEvents() {
      const self = this;

      self.heroTogglerButtons.forEach(toggler => {
        toggler.addEventListener('click', () => {
          const parentBlock = toggler.closest('.new-hero-hp__flex-item');
          if (!parentBlock.classList.contains(self.additionalClasses.heroFlexItemOpened)) {
            parentBlock.classList.add(self.additionalClasses.heroFlexItemOpened);
            if (!!self.previousOpenedFlexItem && !!self.previousOpenedFlexItem.classList.contains(self.additionalClasses.heroFlexItemOpened) && self.previousOpenedFlexItem !== parentBlock) {
              self.previousOpenedFlexItem.classList.remove(self.additionalClasses.heroFlexItemOpened);
            }
          } else if((!!self.previousOpenedFlexItem && !!self.previousOpenedFlexItem.classList.contains(self.additionalClasses.heroFlexItemOpened)) || !!parentBlock.classList.contains(self.additionalClasses.heroFlexItemOpened)) {
            self.previousOpenedFlexItem.classList.remove(self.additionalClasses.heroFlexItemOpened);
          }
          self.previousOpenedFlexItem = parentBlock;
        });
      });
      self.heroFlexItems.forEach((item, index) => {
        const helperFocus = item.querySelector('.new-hero-hp__item-focus-helper');
        const firstLink = item.querySelector('a');
        item.addEventListener('keydown', e => {
          if (e.code === 'Escape' && self.isActiveItem(item)) {
            item.classList.remove(self.additionalClasses.heroFlexItemOpened);
            self.heroTogglerButtons[index].focus();
          } else if (e.code === 'Tab' && e.shiftKey && document.activeElement === firstLink) {
            helperFocus.focus();
          }
        });
        item.addEventListener('keyup', e => {
          if(!self.isActiveItem(item)) return;
          if (e.code === 'Tab' && document.activeElement === helperFocus) {
            firstLink.focus();
          }
        });
      });
      window.addEventListener('resize', () => {
        self.setBgWrapperWidth(self.getWindowWidth() >= 1368 ? 'count' : 'auto');
      });
    },
    setBgWrapperWidth: function setBgWrapperWidth(widthProperty = 'auto') {
      const self = this;
      const widthCount = self.getContainerWidth() - ((166 + 42) * 3);
      const width = widthProperty === 'auto' ? 'auto' : widthCount < self.maxWidthOfOpeneItem ? `${widthCount}px` : `${self.maxWidthOfOpeneItem}px`;
      self.productColumnsList.forEach(item => {
        item.style.width = width;
      });
    },
    getContainerWidth: function getContainerWidth() {
      const self = this;
      const computedStyleContainer = getComputedStyle(self.heroContainer);
      const width = parseInt(computedStyleContainer.width);
      const paddingLeft = parseInt(computedStyleContainer.paddingLeft);
      const paddingRight = parseInt(computedStyleContainer.paddingRight);
      return width - (paddingLeft + paddingRight)
    },
    getWindowWidth: function getWindowWidth() {
      return window.innerWidth;
    },
    isActiveItem: function isActiveItem(item) {
      const self = this;
      return item.classList.contains(self.additionalClasses.heroFlexItemOpened);
    }
  };
  heroBlock.init();
})();
</script>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--center IID-background-72a369c4 aem-GridColumn aem-GridColumn--default--12 CID-background-79490109">
<style>
	.IID-background-72a369c4{color:#222;padding:78px 0 96px}@media (max-width: 1229px){.IID-background-72a369c4{padding:72px 0}}@media (max-width: 767px){.IID-background-72a369c4{padding:70px 0 72px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid CID-grid-1659f761 IID-grid-8615151e">
<style>
	.IID-grid-8615151e{margin:0 0 48px}@media (max-width: 767px){.IID-grid-8615151e{margin:0 0 44px}}
	.IID-grid-8615151e{--halfHorizGap:16px;--halfVertGap:0px}@media (max-width: 767px){.IID-grid-8615151e{--halfHorizGap:10px;--halfVertGap:6px}}
</style>
<div class="grid__parsys    l-flex--justify-content-space-between     ">
<div class="grid-item IID-grid-item-b770d57a CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-c66540ed">
<style>
	
	.IID-custom-text-c66540ed{font-size:24px;font-weight:500;line-height:1.333;letter-spacing:-.08px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-c66540ed{font-size:20px;line-height:1.4}}
</style>
<div class="custom-text__wrapper" data-dl-context="item0" data-style="h4" data-content-wrapper="true">
<h4>Trusted by 400,000+ businesses worldwide</h4>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-4a3f8a7c CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="cta-v2 cta-v2--icon-position--right IID-cta-v2-d7b04799 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-d7b04799{position:relative;margin:auto 0 0 -12px}@media (min-width: 1488px){.IID-cta-v2-d7b04799{margin-left:-12px}}
	.IID-cta-v2-d7b04799 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-d7b04799 .cta-v2__el .cta-v2__icon{width:16px;height:16px;rotate:180deg}.IID-cta-v2-d7b04799 .cta-v2__el{border-radius:16px}.IID-cta-v2-d7b04799 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-d7b04799 .cta-v2__el:hover:before,.IID-cta-v2-d7b04799 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-d7b04799 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="noPostfix">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/whyringcentral/casestudies.html" tabindex="0" title="See all customer stories" target="_self" data-dl-element="button">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">See all customer stories</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-scroll="true" class="grid IID-grid-1ab8e052 CID-grid-1659f761">
<style>
	.IID-grid-1ab8e052{max-width:100vw;margin:0 -28px 0 0}.IID-grid-1ab8e052:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-grid-1ab8e052{overflow:scroll}
	
</style>
<div class="grid__parsys l-flex--align-items-center   l-flex--justify-content-space-between     ">
<div class="grid-item l-flex__col--auto l-tab-flex__col--auto l-mob-flex__col--auto IID-grid-item-391e58c6 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-cstm-itl-edit="true" class="custom-itl itl custom-itl--logo IID-custom-itl-8d2bed2d CID-custom-itl-6a582420">
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/content/custom-itl/clientlibs/common.min.630bb65e15368e13b2847279a698c9bf.css" type="text/css" />
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/content/custom-itl/clientlibs/logo.min.fdcd2a5c198166ecb5f0ddf7f7ff7f4e.css" type="text/css" />
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/components/content/custom-itl/clientlibs/common.min.1c0a8fda664485daaae7099da8a0e0c0.js","dependencies":[{"path":"/etc.clientlibs/rc-www/clientlibs/essential.min.f35326dc52e2f83caa7d3e0ce7ea4596.js","dependencies":null,"embed":[],"properties":{}}],"embed":null,"properties":{}}]',
            async: 'true'
        });
	</script>
<style>
	.IID-custom-itl-8d2bed2d{max-width:67px;margin:0 auto}.IID-custom-itl-8d2bed2d:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.custom-itl.IID-custom-itl-8d2bed2d .custom-itl__icon{height:38px}.custom-itl.IID-custom-itl-8d2bed2d .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-8d2bed2d .custom-itl__icon img.custom-itl__img{width:auto}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile">
<div class="custom-itl__link custom-itl__link--type--link" data-dl-name="Restoration Hardware">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--2113114196--555720302-title" class="custom-itl__img" id="svg--2113114196--555720302" role="img" style="enable-background:new 0 0 100.75 56;" version="1.1" viewBox="0 0 100.75 56" x="0px" xml:space="preserve" y="0px"><title id="svg--2113114196--555720302-title">The Restoration Hardware logo</title>
<g>
<path d="M12.75,52.93c-0.52-0.39-0.57-0.44-0.76-0.64c-0.17-0.19-0.27-0.44-0.27-0.66c0-0.45,0.29-0.76,0.78-0.76   s0.92,0.38,1.12,0.97h0.11l-0.11-1.02H13.5c-0.05,0.06-0.08,0.08-0.12,0.08c-0.05,0-0.11-0.02-0.26-0.08   c-0.26-0.09-0.45-0.13-0.68-0.13c-0.7,0-1.23,0.5-1.23,1.18c0,0.34,0.14,0.68,0.39,0.94c0.19,0.22,0.45,0.43,0.9,0.77   c0.16,0.12,0.28,0.22,0.37,0.28c0.15,0.12,0.27,0.24,0.37,0.38c0.11,0.16,0.19,0.4,0.19,0.61c0,0.53-0.43,0.94-0.96,0.94   c-0.26,0-0.45-0.08-0.65-0.24c-0.26-0.21-0.39-0.45-0.51-0.91h-0.13l0.14,1.24h0.11c0.04-0.07,0.07-0.09,0.12-0.09   c0.05,0,0.09,0.02,0.22,0.06c0.31,0.11,0.53,0.16,0.75,0.16c0.82,0,1.42-0.6,1.42-1.39c0-0.34-0.1-0.65-0.32-0.91   C13.43,53.45,13.22,53.27,12.75,52.93z" fill="#242425" />
<path d="M9.86,55.37c-0.12,0.18-0.25,0.21-0.76,0.21H8.2c-0.07,0-0.13-0.02-0.19-0.05c-0.11-0.07-0.13-0.16-0.13-0.64   V53.4h0.98c0.55,0,0.61,0.06,0.67,0.64h0.12V52.5l0.01-0.01H9.54c-0.07,0.56-0.11,0.61-0.65,0.61H7.89v-2.02h1.2   c0.59,0,0.68,0.1,0.77,0.85h0.12l-0.06-1.12H6.61v0.14h0.15c0.48,0,0.55,0.11,0.55,0.88v3c0,0.77-0.09,0.87-0.68,0.87H6.47v0.16   h3.67l0.1-1.21h-0.12C10.07,54.94,9.96,55.21,9.86,55.37z" fill="#242425" />
<path d="M18.75,40.56h-1.52c-3.71,0-5.3-0.99-5.3-4.97V24.39c1.06,0.07,1.92,0.13,3.38,0.13   c1.79,0,2.85-0.07,4.51-0.13c1.59,1.06,3.91,2.97,6.82,5.9l4.19,4.19c5.55,5.52,8.7,7.87,19.94,7.36l-0.03-1.27   c-5.1-0.33-9.11-2.71-13.03-6.62l-0.01-0.01l-1.84-1.84h0.01l-2.68-2.68c-3.12-3.12-5.09-4.97-7.56-6.89   c5.44-1.59,8.82-5.77,8.82-10.74C34.44,5.1,29.04,0.1,17.06,0h-2.82c-2.5,0.02-3.78,0.09-5.9,0.19C5.63,0.33,1.59,0.6,0,0.6v1.26   h1.46c3.84,0,4.97,1.19,4.97,5.3v27.9c0,4.44-1.39,5.5-5.3,5.5H0v1.26h18.75V40.56z M11.92,1.39c1.19-0.13,2.05-0.13,3.31-0.13   c10.21,0,12.98,4.77,12.98,10.93c0,7.95-4.84,11.07-12.2,11.07h0.01c-1.52,0-2.52,0.07-4.11-0.13V1.39z" fill="#242425" />
<path d="M4.32,54.6l-0.39-0.45c-0.36-0.44-0.6-0.67-0.87-0.94c0.62-0.22,1.02-0.79,1.02-1.47   c0-0.41-0.15-0.79-0.4-1.06c-0.36-0.39-0.87-0.54-1.77-0.54c-0.43,0-1.28,0.04-1.77,0.08H0.09v0.17h0.06   c0.62,0,0.69,0.09,0.69,0.98v3.66c0,0.51-0.15,0.66-0.62,0.66H0.06v0.18h2.19v-0.18H2.06c-0.46,0-0.61-0.15-0.61-0.66v-0.31v-1.23   c0.14,0,0.2,0,0.39,0c0.26,0,0.33,0,0.53-0.03c0.14,0.11,0.19,0.15,0.39,0.37c0.25,0.26,0.41,0.45,0.73,0.8   c0.6,0.71,0.63,0.76,0.93,0.98c0.31,0.23,0.71,0.24,1.36,0.24c0.1,0,0.15-0.01,0.27-0.01v-0.16c-0.22-0.02-0.27-0.03-0.42-0.09   C5.25,55.47,4.86,55.24,4.32,54.6z M1.84,53.33c-0.16,0-0.22,0-0.38-0.02v-2.98c0.14-0.02,0.24-0.03,0.38-0.03   c1.01,0,1.52,0.5,1.52,1.52c0,0.55-0.19,1.01-0.47,1.24C2.63,53.24,2.32,53.33,1.84,53.33z" fill="#242425" />
<path d="M18.72,50.67c-0.05,0.12-0.07,0.13-0.42,0.13h-2.95c-0.35,0-0.37,0-0.42-0.13h-0.12l-0.1,1.33h0.12   c0.1-0.7,0.22-0.9,0.5-0.9h1.21v4.01c0,0.45-0.14,0.6-0.55,0.6h-0.25v0.16h2.15v-0.16h-0.23c-0.41,0-0.54-0.13-0.55-0.6v-4.01h1.21   c0.28,0,0.39,0.2,0.5,0.9h0.11l-0.1-1.33H18.72z" fill="#242425" />
<path d="M100.09,40.57c-3.98,0-5.3-1.06-5.3-5.77V7.31c0-4.11,1.06-5.3,5.04-5.44V0.62H82.8v1.26h1.26   c4.11,0,5.24,1.33,5.24,4.84v13.05H63.32V8.23c0-5.1,0.8-6.36,5.5-6.36V0.62H53.06v1.26c3.65,0.27,4.77,1.26,4.77,4.71v29.16   c0,3.78-1.33,4.84-5.24,4.84h-0.4v1.26h16.63v-1.26h-0.2c-4.44,0-5.3-1.52-5.3-5.83V22.16h25.97v13.44c0,3.45-0.93,4.97-5.24,4.97   H82v1.26h18.75v-1.26H100.09z" fill="#242425" />
<path d="M95.04,54.77l-0.35-0.41c-0.32-0.39-0.53-0.61-0.78-0.84c0.56-0.19,0.91-0.71,0.91-1.32   c0-0.37-0.13-0.71-0.36-0.95c-0.32-0.35-0.79-0.49-1.59-0.49c-0.38,0-1.15,0.03-1.59,0.07h-0.06v0.15h0.05   c0.57,0,0.62,0.09,0.62,0.87v3.28c0,0.45-0.13,0.6-0.55,0.6h-0.12v0.16h1.96v-0.16h-0.16c-0.42,0-0.55-0.13-0.55-0.6v-0.27v-1.11   h0.01c0.13,0,0.18,0,0.34,0c0.23,0,0.3,0,0.47-0.02c0.13,0.09,0.16,0.13,0.35,0.33c0.22,0.23,0.37,0.4,0.65,0.72   c0.53,0.63,0.58,0.62,0.83,0.82c0.28,0.22,0.64,0.28,1.22,0.28c0.09,0,0.13,0,0.24,0v-0.15c-0.19-0.02-0.25-0.03-0.37-0.07   C95.87,55.55,95.52,55.35,95.04,54.77z M92.84,53.59c-0.14,0-0.2,0-0.34-0.02v-2.66c0.12-0.02,0.21-0.03,0.33-0.03   c0.91,0,1.36,0.45,1.36,1.35c0,0.48-0.16,0.91-0.43,1.11C93.55,53.52,93.26,53.59,92.84,53.59z" fill="#242425" />
<path d="M72.16,54.77l-0.35-0.41c-0.32-0.39-0.53-0.61-0.78-0.84c0.56-0.2,0.91-0.71,0.91-1.32   c0-0.36-0.13-0.7-0.36-0.95c-0.32-0.35-0.79-0.49-1.59-0.49c-0.38,0-1.15,0.04-1.59,0.08h-0.06v0.14h0.05   c0.57,0,0.62,0.09,0.62,0.87v3.28c0,0.46-0.13,0.6-0.55,0.6h-0.12v0.16h1.96v-0.16h-0.16c-0.41,0-0.55-0.14-0.55-0.6v-0.27   l-0.01,0.01v-1.11c0.13,0,0.18,0,0.34,0c0.24,0,0.3,0,0.48-0.02c0.13,0.09,0.16,0.13,0.35,0.33c0.23,0.23,0.37,0.4,0.65,0.72   c0.53,0.63,0.57,0.62,0.83,0.82c0.27,0.22,0.63,0.28,1.22,0.28c0.09,0,0.13,0,0.25,0v-0.15c-0.19-0.02-0.25-0.03-0.37-0.08   C72.99,55.55,72.65,55.35,72.16,54.77z M69.94,53.61c-0.15,0-0.2,0-0.34-0.02l-0.01,0.01v-2.67c0.12-0.03,0.22-0.03,0.34-0.03   c0.92,0,1.36,0.45,1.36,1.35c0,0.48-0.16,0.91-0.43,1.11C70.65,53.54,70.36,53.61,69.94,53.61z" fill="#242425" />
<path d="M86.22,50.82h-1.43v0.14c0.4,0.02,0.53,0.09,0.53,0.27c0,0.04,0,0.09-0.05,0.19l-0.08,0.26l-1.13,3.51   l-0.91-2.54l0.38-1.09c0.18-0.52,0.28-0.61,0.75-0.62v-0.14h-2.84v0.14c0.48,0.02,0.58,0.09,0.76,0.61l0.51,1.46l-0.75,2.17   l-1.16-3.44c-0.1-0.31-0.13-0.43-0.13-0.51c0-0.2,0.11-0.28,0.45-0.28h0.05v-0.14h-1.8v0.14h0.04c0.54,0.03,0.62,0.09,0.86,0.86   L81.64,56h0.34l0.86-2.53l0.9,2.53h0.33l0,0h0.03l1.39-4.3c0.21-0.63,0.29-0.73,0.72-0.74V50.82z M82.99,52.2l-0.29-0.8l-0.05-0.13   c0,0-0.03-0.12-0.03-0.16c0-0.1,0.07-0.16,0.22-0.16h0.28c0.14,0,0.22,0.07,0.22,0.17c0,0.06-0.02,0.12-0.09,0.32L82.99,52.2   L82.99,52.2z" fill="#242425" />
<path d="M100.36,55.36c-0.12,0.18-0.25,0.21-0.75,0.21h-0.9c-0.08,0-0.13-0.02-0.19-0.05   c-0.11-0.07-0.13-0.16-0.13-0.64v-1.49h0.98c0.55,0,0.61,0.06,0.67,0.64h0.12v-0.01v-1.54h-0.12c-0.07,0.56-0.11,0.61-0.65,0.61   h-0.99v-2.02h1.2c0.59,0,0.68,0.1,0.77,0.85h0.12l-0.06-1.12h-3.31v0.14h0.15c0.47,0,0.55,0.11,0.55,0.88v3   c0,0.77-0.08,0.87-0.68,0.87h-0.16v0.16h3.67l0.11-1.21h-0.12C100.58,54.93,100.48,55.21,100.36,55.36z" fill="#242425" />
<path d="M21.83,50.69c-1.41,0-2.5,1.18-2.5,2.75c0,1.45,1.08,2.57,2.49,2.57s2.46-1.21,2.46-2.77   C24.28,51.77,23.24,50.69,21.83,50.69z M23.24,55.02c-0.32,0.54-0.73,0.78-1.31,0.78c-1.11,0-1.96-1.12-1.96-2.57h0.01   c0-1.37,0.69-2.36,1.67-2.36c1.16,0,1.99,1.09,1.99,2.59C23.63,54.06,23.5,54.59,23.24,55.02z" fill="#242425" />
<path d="M61.75,55.03v-0.31v-3.34v-0.31c0-0.5,0.14-0.64,0.6-0.67v-0.16h-1.99v0.16h0.14c0.46,0,0.61,0.16,0.62,0.67   v1.8H58.1v-1.8c0-0.5,0.15-0.67,0.61-0.67h0.02v-0.16h-1.84v0.16c0.44,0.04,0.55,0.17,0.56,0.67v3.96c0,0.51-0.15,0.66-0.61,0.66   H56.8v0.17h1.93v-0.17h-0.03c-0.45,0-0.6-0.15-0.61-0.66v-1.86h3.01l-0.02,0.01v1.86c0,0.51-0.15,0.66-0.62,0.66h-0.23v0.17h2.18   V55.7h-0.08C61.89,55.7,61.75,55.55,61.75,55.03z" fill="#242425" />
<path d="M45.36,50.69c-1.41,0-2.5,1.18-2.5,2.75c0,1.45,1.08,2.57,2.48,2.57s2.47-1.21,2.47-2.77   C47.81,51.77,46.77,50.69,45.36,50.69z M46.77,55.02c-0.32,0.54-0.73,0.78-1.31,0.78c-1.11,0-1.95-1.12-1.95-2.57   c0-1.37,0.69-2.36,1.67-2.36c1.16,0,1.99,1.09,1.99,2.59C47.17,54.06,47.03,54.59,46.77,55.02z" fill="#242425" />
<path d="M52.31,50.98c0.63,0.04,0.67,0.08,0.67,0.87v2.97l-3.26-4.01h-1.08v0.15c0.24,0.01,0.42,0.07,0.58,0.2v4   c0,0.39-0.15,0.54-0.55,0.54h-0.04v0.16h1.6v-0.16H50.2c-0.14,0-0.24-0.01-0.29-0.02c-0.08-0.01-0.15-0.04-0.22-0.09   c-0.12-0.09-0.14-0.22-0.14-0.79v-3.29l3.58,4.4l-0.01,0.01h0.18V51.4c0-0.13,0.02-0.2,0.06-0.27c0.08-0.1,0.19-0.13,0.58-0.15   v-0.15h-1.62V50.98z" fill="#242425" />
<path d="M67.08,55.22l-0.12-0.41l-1.32-4.11h-0.6l0.07,0.18l-1.26,4.03c-0.22,0.72-0.28,0.8-0.74,0.8v0.16h1.6v-0.16   h-0.25c-0.28-0.02-0.43-0.11-0.43-0.29c0-0.07,0.01-0.13,0.05-0.25l0.09-0.27l0.4-1.28h1.4l0.44,1.39c0,0,0.03,0.08,0.06,0.18   c0.04,0.12,0.05,0.17,0.05,0.25c0,0.23-0.11,0.27-0.63,0.27h-0.09v0.16h1.9v-0.16h-0.04C67.34,55.73,67.2,55.6,67.08,55.22z    M64.67,53.27l0.59-1.89l0.61,1.89H64.67z" fill="#242425" />
<path d="M76.28,50.75c-0.2,0-0.54,0.01-1.01,0.02c-0.24,0.02-0.4,0.02-0.49,0.02l-0.55,0.02v0.01h-0.05v0.14h0.06   c0.56,0,0.62,0.09,0.62,0.87v3.01v0.27c0,0.45-0.14,0.59-0.55,0.59h-0.11v0.16h1.72c0.92,0.01,0.98-0.01,1.42-0.16   c0.96-0.32,1.63-1.37,1.63-2.54c0-0.77-0.27-1.43-0.8-1.87C77.7,50.91,77.15,50.75,76.28,50.75z M77.19,55.5   c-0.32,0.17-0.56,0.22-1.19,0.22c-0.55,0-0.58-0.03-0.58-0.57h-0.01v-4.22c0.13-0.02,0.25-0.02,0.42-0.02c0.24,0,0.4,0,0.64,0.04   c0.53,0.06,0.83,0.17,1.13,0.45c0.45,0.4,0.71,1.11,0.71,1.9C78.3,54.28,77.87,55.13,77.19,55.5z" fill="#242425" />
<path d="M40.33,50.96c0.41,0.03,0.52,0.16,0.52,0.61v0.27v3v0.27c0,0.45-0.11,0.57-0.51,0.59v0.16H42v-0.16h-0.04   c-0.41,0-0.55-0.13-0.55-0.59v-3.28c0-0.76,0.08-0.88,0.55-0.88H42v-0.14h-1.68V50.96z" fill="#242425" />
<path d="M28.76,54.66l-0.34-0.31c-0.32-0.39-0.53-0.61-0.78-0.84c0.56-0.2,0.91-0.71,0.91-1.32   c0-0.36-0.13-0.7-0.36-0.95c-0.33-0.35-0.79-0.49-1.59-0.49c-0.38,0-1.15,0.04-1.59,0.08h-0.06v0.14H25c0.57,0,0.62,0.09,0.62,0.87   v3.28c0,0.46-0.13,0.6-0.55,0.6h-0.12v0.16h1.96v-0.16h-0.16c-0.41,0-0.55-0.14-0.55-0.6v-0.27v-0.01v-1.1c0.13,0,0.18,0,0.35,0   c0.23,0,0.29,0,0.47-0.02c0.13,0.09,0.16,0.13,0.35,0.33c0.22,0.23,0.36,0.4,0.64,0.72c0.53,0.63,0.57,0.59,0.83,0.79   c0.27,0.22,0.63,0.31,1.22,0.31c0.09,0,0.13-0.01,0.25-0.01v-0.15c-0.19-0.02-0.25-0.02-0.37-0.07   C29.59,55.54,29.24,55.24,28.76,54.66z M26.54,53.6c-0.15,0-0.2,0-0.34-0.02v-2.66c0.12-0.03,0.22-0.03,0.34-0.03   c0.92,0,1.36,0.45,1.36,1.35c0,0.48-0.16,0.91-0.43,1.11C27.25,53.53,26.97,53.6,26.54,53.6z" fill="#242425" />
<path d="M39.36,50.67c-0.05,0.12-0.07,0.13-0.42,0.13h-2.95c-0.34,0-0.37,0-0.42-0.13h-0.12l-0.1,1.33h0.11   c0.11-0.7,0.22-0.9,0.5-0.9h1.21v4.01c0,0.45-0.14,0.6-0.55,0.6h-0.25v0.16h0.01h2.15v-0.16h-0.23c-0.41,0-0.54-0.13-0.55-0.6   v-4.01h1.21c0.28,0,0.4,0.2,0.5,0.9h0.11l-0.1-1.33H39.36z" fill="#242425" />
<path d="M89.96,55.19l-0.12-0.41l-1.32-4.11h-0.6l0.07,0.18l-1.27,4.03c-0.22,0.72-0.29,0.8-0.74,0.8v0.16h1.59V55.7   h-0.06h-0.19c-0.29-0.02-0.43-0.1-0.43-0.28c0-0.07,0.01-0.13,0.05-0.25l0.09-0.27l0.4-1.28V53.6h1.42L89.3,55   c0.01,0.03,0.03,0.09,0.06,0.18c0.05,0.12,0.05,0.17,0.05,0.25c0,0.23-0.11,0.27-0.63,0.27h-0.09v0.16h1.9V55.7h-0.04   C90.22,55.7,90.07,55.57,89.96,55.19z M87.56,53.25l0.59-1.89l0.61,1.89H87.56z" fill="#242425" />
<path d="M34.55,55.21l-0.12-0.41l-1.32-4.11h-0.61l0.07,0.18l-1.26,4.03c-0.22,0.72-0.29,0.8-0.74,0.8v0.16h1.6v-0.16   h-0.24c-0.28-0.02-0.43-0.11-0.43-0.29c0-0.07,0.02-0.13,0.05-0.25l0.09-0.27l0.4-1.28h1.4l0.45,1.39c0,0,0.03,0.08,0.06,0.18   c0.04,0.12,0.05,0.17,0.05,0.25c0,0.23-0.11,0.27-0.63,0.27h-0.09v0.16h1.9v-0.16h-0.04C34.82,55.72,34.68,55.59,34.55,55.21z    M32.15,53.26l0.59-1.89l0.61,1.89H32.15z" fill="#242425" />
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-mob-flex__col--auto l-tab-flex__col--auto IID-grid-item-fa0878b6 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-cstm-itl-edit="true" class="custom-itl itl custom-itl--logo IID-custom-itl-1927f11d CID-custom-itl-6a582420">
<style>
	.IID-custom-itl-1927f11d{max-width:135px;margin:0 auto}.IID-custom-itl-1927f11d:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.custom-itl.IID-custom-itl-1927f11d .custom-itl__icon{height:23px}.custom-itl.IID-custom-itl-1927f11d .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-1927f11d .custom-itl__icon img.custom-itl__img{width:auto}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile">
<div class="custom-itl__link custom-itl__link--type--link" data-dl-name="Toyota">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--1162811263--2052308115-title" class="custom-itl__img" id="svg--1162811263--2052308115" role="img" style="enable-background:new 0 0 128 21.05;" version="1.1" viewBox="0 0 128 21.05" x="0px" xml:space="preserve" y="0px"><title id="svg--1162811263--2052308115-title">Toyota logo</title>
<g>
<path d="M16.16,0C7.24,0,0,4.71,0,10.53c0,5.82,7.24,10.53,16.16,10.53c8.92,0,16.16-4.72,16.16-10.53   C32.32,4.72,25.09,0,16.16,0z M16.16,1.25c5.21,0,9.44,1.52,9.44,3.4c0,1.4-2.35,2.6-5.7,3.13c-0.55-3.64-2.01-6.25-3.73-6.25   c-1.73,0-3.19,2.61-3.73,6.26c-3.35-0.53-5.7-1.73-5.7-3.13C6.73,2.77,10.95,1.25,16.16,1.25z M18.4,7.95   c-0.72,0.06-1.47,0.09-2.24,0.09c-0.77,0-1.52-0.03-2.24-0.09c0.36-2.34,1.23-3.99,2.24-3.99C17.17,3.96,18.04,5.61,18.4,7.95z    M15.12,19.98C7.88,19.6,2.18,15.34,2.18,10.14c0-1.77,0.66-3.42,1.81-4.86L4,5.26c0.09,2.4,3.49,4.43,8.2,5.17   c0,0.16,0,0.32,0,0.47c0,4.35,1.25,8.01,2.95,9.08H15.12z M16.16,16.71c-1.29,0-2.35-2.7-2.41-6.09c0.78,0.07,1.58,0.11,2.41,0.11   c0.83,0,1.63-0.04,2.41-0.11C18.52,14.01,17.46,16.71,16.16,16.71z M17.21,19.98L17.21,19.98l-0.03-0.01   c1.69-1.06,2.95-4.72,2.95-9.07c0-0.16,0-0.32,0-0.47c4.71-0.74,8.11-2.77,8.2-5.17l0.01,0.03c1.15,1.44,1.81,3.09,1.81,4.86   C30.15,15.35,24.45,19.61,17.21,19.98z" fill="#ED1C24" />
<path d="M90.51,2.48c-4.44,0-8.05,3.61-8.05,8.05c0,4.44,3.61,8.05,8.05,8.05c4.44,0,8.05-3.6,8.05-8.05   S94.96,2.48,90.51,2.48z M90.51,15.62c-2.48,0-4.49-2.28-4.49-5.1c0-2.81,2.01-5.1,4.49-5.1s4.5,2.28,4.5,5.1   C95.01,13.34,92.99,15.62,90.51,15.62z" fill="#ED1C24" />
<polygon fill="#ED1C24" points="112.42,3.04 99.57,3.04 99.57,5.84 104.3,5.84 104.3,18.21 107.69,18.21 107.69,5.84 107.71,5.84   112.42,5.84  " />
<path d="M121.74,3.05L121.74,3.05l-4.22-0.01l-6.26,15.17h3.96l1.3-3.41h3.11h3.11l1.3,3.42H128L121.74,3.05z    M119.63,12.24h-2.14l2.12-5.55h0.03l2.12,5.55H119.63z" fill="#ED1C24" />
<polygon fill="#ED1C24" points="37.08,5.84 41.81,5.84 41.81,18.21 45.2,18.21 45.2,5.84 45.21,5.84 49.93,5.84 49.93,3.04   37.08,3.04  " />
<path d="M58.84,2.48c-4.44,0-8.05,3.61-8.05,8.05c0,4.44,3.61,8.05,8.05,8.05c4.44,0,8.05-3.6,8.05-8.05   S63.28,2.48,58.84,2.48z M58.84,15.62c-2.48,0-4.5-2.28-4.5-5.1c0-2.81,2.02-5.1,4.5-5.1s4.5,2.28,4.5,5.1   C63.33,13.34,61.32,15.62,58.84,15.62z" fill="#ED1C24" />
<polygon fill="#ED1C24" points="74.68,9.41 71,3.04 67.04,3.04 72.96,12.45 72.96,12.52 72.96,18.21 74.68,18.21 76.39,18.21   76.39,12.52 76.39,12.45 82.31,3.04 78.36,3.04  " />
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-mob-flex__col--auto l-tab-flex__col--auto IID-grid-item-4b619b4e CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-cstm-itl-edit="true" class="custom-itl itl custom-itl--logo CID-custom-itl-6a582420 IID-custom-itl-e4669db5">
<style>
	.IID-custom-itl-e4669db5{max-width:96px;margin:0 auto}.IID-custom-itl-e4669db5:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.custom-itl.IID-custom-itl-e4669db5 .custom-itl__icon{height:21px}.custom-itl.IID-custom-itl-e4669db5 .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-e4669db5 .custom-itl__icon img.custom-itl__img{width:auto}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile">
<div class="custom-itl__link custom-itl__link--type--link" data-dl-name="Conair">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-347503371-1882416707-title" class="custom-itl__img" fill="none" height="24" id="svg-347503371-1882416707" role="img" viewBox="0 0 111 24" width="111">
<title id="svg-347503371-1882416707-title">ConAir logo</title>
<g clip-path="url(#svg-347503371-1882416707-a)" clip-rule="evenodd" fill="#231F20" fill-rule="evenodd">
<path d="M32.087.26c-6.506 0-11.781 5.315-11.781 11.87 0 6.556 5.275 11.87 11.78 11.87 6.507 0 11.782-5.314 11.782-11.87 0-6.555-5.275-11.87-11.781-11.87Zm0 5.366c3.565 0 6.455 2.912 6.455 6.504 0 3.592-2.89 6.504-6.455 6.504s-6.456-2.912-6.456-6.504c0-3.592 2.89-6.504 6.456-6.504Z" />
<path d="M.42 12.073c0 4.254 2.111 11.832 10.042 11.9 6.733.057 9.928-4.484 10.213-8.968h-5.591c-.514 3.449-2.967 3.564-4.28 3.564-1.312 0-4.85-.115-4.85-6.496 0-6.382 3.538-6.727 4.85-6.727 1.313 0 3.766.345 4.28 3.795h5.591C20.39 4.657 18.565 0 10.633 0 2.703 0 .42 7.818.42 12.073ZM44.868 1.265v22.42h5.25V10.923l6.218 12.762h6.048V1.265h-5.249v12.877L50.802 1.265h-5.934Zm37.43 8.565h5.477V1.266h-5.477V9.83Zm0 3.277h5.477v-2.644h-5.477v2.644Zm0 2.645h5.477v-1.955h-5.477v1.955Zm0 2.759h5.477v-1.61h-5.477v1.61Zm0 2.702h5.477v-1.322h-5.477v1.322Zm0 2.473h5.477v-.69h-5.477v.69Zm23.85-7.934H89.201v-1.955h15.292c1.027 0 1.712 1.438 1.655 1.955Zm-16.947 2.759h5.478v-1.61h-5.478v1.61Zm0 2.702h5.478v-1.322h-5.478v1.322Zm0 2.473h5.478v-.69h-5.478v.69ZM66.407 9.83h5.221l.542-1.983.6 1.984h5.249l-2.825-8.566h-6.02l-2.767 8.566Zm-.2.633-.884 2.644H70.6l.827-2.644h-5.22Zm-1.084 3.334-.628 1.955H79.93l-.657-1.955h-14.15Zm-.998 3.104-.542 1.61h17.231l-.542-1.61H64.125Zm-.998 2.99-.428 1.322h5.562l.372-1.322h-5.506Z" />
<path d="M62.128 22.995h5.62l-.2.69H61.9l.228-.69Zm16.033-12.532.856 2.644h-5.278l-.799-2.644h5.221Zm3.082 9.428.427 1.322h-5.563l-.371-1.322h5.507Zm.997 3.104h-5.62l.2.69h5.65l-.23-.69Zm12.44-12.532h4.678c3.024 0 2.625-4.255.057-4.255h-4.736v4.255Zm-5.48 2.644V1.265h11.412c3.252.057 6.105 2.415 6.277 5.231.171 2.818-1.313 5.29-3.995 6.611H89.201Zm11.585 5.404h5.477v-1.61h-5.477v1.61Zm0 2.702h5.477v-1.322h-5.477v1.322Zm6.047 1.782c.058.288.229.46.514.69h-5.478c-.285-.23-.456-.402-.513-.69h5.477Zm1.653-20.609h.5c.217 0 .459.082.459.363 0 .318-.299.347-.574.347h-.385v.136h.471l.546.842h.172l-.542-.838c.259-.041.468-.186.468-.483 0-.33-.18-.504-.59-.504h-.681v1.825h.156V2.386Z" />
<path d="M108.886 1.618c.849 0 1.534.689 1.534 1.544 0 .855-.685 1.544-1.534 1.544a1.535 1.535 0 0 1-1.532-1.544c0-.855.684-1.544 1.532-1.544l.005.136c-.791 0-1.381.61-1.381 1.408 0 .78.598 1.408 1.381 1.408s1.373-.632 1.373-1.412c0-.79-.586-1.404-1.373-1.404l-.005-.136Z" />
</g>
<defs>
<clipPath id="svg-347503371-1882416707-a">
<path d="M.42 0h110v24H.42z" fill="#fff" />
</clipPath>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-mob-flex__col--auto l-tab-flex__col--auto CID-grid-item-1e7a19ff IID-grid-item-9db1c8e">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-cstm-itl-edit="true" class="custom-itl itl custom-itl--logo IID-custom-itl-9c7a4ef5 CID-custom-itl-6a582420">
<style>
	.IID-custom-itl-9c7a4ef5{max-width:86px;margin:0 auto}.IID-custom-itl-9c7a4ef5:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.custom-itl.IID-custom-itl-9c7a4ef5 .custom-itl__icon{height:37px}.custom-itl.IID-custom-itl-9c7a4ef5 .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-9c7a4ef5 .custom-itl__icon img.custom-itl__img{width:auto}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile">
<div class="custom-itl__link custom-itl__link--type--link" data-dl-name="Office Depot">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--165093580--1526262789-title" class="custom-itl__img" id="svg--165093580--1526262789" role="img" style="enable-background:new 0 0 115 48.73;" version="1.1" viewBox="0 0 115 48.73" x="0px" xml:space="preserve" y="0px"><title id="svg--165093580--1526262789-title">Office Depot logo</title>
<g>
<path d="M28.36,14.16c0-8.58-5.84-12.3-13.66-12.3S0,6.88,0,14.82s4.47,12.4,13.65,12.4   C21.87,27.22,28.36,22.18,28.36,14.16z M7.26,14.39C7.26,9.26,10.59,7,14.17,7c4.54,0,6.92,2.59,6.92,7.49   c0,5.58-3.82,7.57-7.04,7.57C9.36,22.06,7.26,19.07,7.26,14.39z" fill="#CC0000" />
<path d="M42.74,0h-0.36c-6.3,0.01-9.1,2.43-9.1,7.23v1.53h-4.11V13h4.11v9.7c-1.3,0.12-2.7,0.28-3.84,0.46v3.58h14.32   v-3.58c-1.14-0.18-2.53-0.35-3.81-0.46V13h4.62V8.75h-4.62V7.14c0-1.92,1.15-2.72,3.14-2.72c0.76,0,1.65,0.13,2.63,0.33l0.4-4.48   C44.94,0.09,43.81,0.01,42.74,0z" fill="#CC0000" />
<path d="M46.38,23.16l-0.03,0.01v3.58h14.3v-3.58c-1.15-0.18-2.53-0.35-3.81-0.46v-9.7h4.57V8.76h-4.57V7.15   c0-1.92,1.13-2.72,3.16-2.72c0.74,0,1.64,0.13,2.65,0.33l0.38-4.48C61.71,0.08,60.46,0,59.3,0c-6.3,0-9.12,2.42-9.12,7.23v1.53   h-4.11V13h4.13v9.7C48.86,22.83,47.54,22.98,46.38,23.16z" fill="#CC0000" />
<path d="M70.12,6.88c2.25,0,4.09-1.48,4.09-3.26c0-1.78-1.83-3.26-4.09-3.26s-4.07,1.43-4.07,3.26   S67.89,6.88,70.12,6.88z" fill="#CC0000" />
<path d="M62.96,23.16v0.01v3.58h14.01v-3.58c-1-0.18-2.3-0.35-3.51-0.46V8.74c-3.7-0.12-7.33,0.01-10.49,0.32v3.55   c1.27,0.04,2.78,0.2,3.79,0.33v9.76C65.46,22.83,64.11,22.98,62.96,23.16z" fill="#CC0000" />
<path d="M87.6,27.09l0.01,0.02c2.33,0,4.14-0.25,6.12-0.71l-0.46-4.77c-1.27,0.47-2.81,0.71-4.18,0.71   c-3.9,0-5.41-1.61-5.41-4.68c0-3.08,1.66-4.66,3.98-4.66c0.42,0,0.87,0,1.19,0.12c0.12,0.61,0.23,1.29,0.4,2.02h4.29V8.97   c-1.56-0.37-3.37-0.58-5-0.58c-8.33,0-11.81,4.49-11.81,9.91C76.75,24.12,80.59,27.09,87.6,27.09z" fill="#CC0000" />
<path d="M115,16.71c0-4.73-2.89-8.39-9.47-8.39c-6.58,0-10.48,4.1-10.48,9.62c0,6.3,3.94,9.22,11.12,9.22   c2.68,0,5.61-0.42,8.06-1.25l-0.6-4.17c-2.03,0.75-4.26,1.13-6.41,1.13c-3.6,0-5.33-1.36-5.4-3.77h12.99   C114.93,18.23,115,17.45,115,16.71z M101.88,15.45c0.17-1.85,1.56-3.09,3.48-3.09c1.92,0,3.17,1.09,3.09,3.09H101.88z" fill="#CC0000" />
<path d="M15.57,29.83l0.01-0.01c-3.49,0-6.85,0.09-8.83,0.09H3.77v3.32c0.91,0.13,2.04,0.26,3.14,0.28v11.25   c-1.1,0.04-2.23,0.19-3.14,0.37v3.23h3.14c0.89,0,5.05,0.17,7.63,0.17c7.85,0,13.04-3.53,13.04-9.81   C27.58,32.04,22.64,29.83,15.57,29.83z M15.09,44.1c-0.78,0-1.26,0-1.53-0.06v-9.87c0.49-0.08,0.89-0.08,1.66-0.08   c4.44,0,5.19,2.12,5.19,4.98C20.41,42.54,18.05,44.1,15.09,44.1z" fill="#CC0000" />
<path d="M39.74,44.31h-0.01h-2.56v-3.59h2.16c0.08,0.32,0.1,0.41,0.23,0.71h4.39v-5.01h-4.39   c-0.13,0.35-0.16,0.4-0.23,0.76h-2.16v-3.26h2.55c0.08,0.38,0.11,0.57,0.23,1.03h5.16V29.9h-17.7v3.32   c0.91,0.13,2.03,0.26,3.11,0.28v11.25c-1.08,0.04-2.2,0.18-3.11,0.37v3.23h17.82v-5.17h-5.25C39.88,43.68,39.84,43.8,39.74,44.31z" fill="#CC0000" />
<path d="M57.46,29.79c-2.63,0-6.18,0.12-7.33,0.12h-3.06v3.32c0.95,0.13,2.03,0.26,3.1,0.28v11.25   c-1.06,0.04-2.15,0.18-3.1,0.37v3.23h12.88v-3.23c-0.95-0.19-2.04-0.32-3.13-0.37v-2.09c0.47,0.02,0.87,0.02,1.03,0.02   c6.49,0,9.59-3.18,9.59-6.75C67.44,31.91,63.94,29.79,57.46,29.79z M57.38,39.04c-0.12,0-0.27,0-0.56-0.06v-5.01   c0.31-0.04,0.6-0.04,0.69-0.04c2.44,0,3.31,1.14,3.31,2.44C60.83,38.11,59.19,39.04,57.38,39.04z" fill="#CC0000" />
<path d="M80.64,29.54c-6.79,0-12.29,3.94-12.29,9.87c0,5.91,3.7,9.3,11.23,9.32h0.13c6.85-0.02,12.22-3.91,12.22-9.91   C91.93,32.14,86.92,29.54,80.64,29.54z M79.99,44.09c-3.2,0-4.54-1.91-4.54-5.06c0-3.49,2.36-4.84,4.67-4.84   c3.19,0,4.73,1.65,4.73,4.9C84.85,43.01,82.08,44.09,79.99,44.09z" fill="#CC0000" />
<path d="M92.5,36.02h5.09c0.12-0.59,0.29-1.22,0.33-1.88h1.9v10.64c-1.08,0.04-2.2,0.18-3.13,0.37v3.23h12.86v-3.23   c-0.93-0.19-2.02-0.32-3.1-0.37V34.13h1.87c0.07,0.67,0.21,1.29,0.33,1.88h5.1V29.9H92.5V36.02z" fill="#CC0000" />
<path d="M112.02,45.45h-0.01c-0.71,0-1.3,0.61-1.3,1.36c0,0.78,0.6,1.36,1.3,1.36c0.76,0,1.29-0.57,1.29-1.36   S112.76,45.45,112.02,45.45z M112.01,47.96l0.01,0.01c-0.57,0-1.05-0.54-1.05-1.16s0.48-1.15,1.04-1.15c0.6,0,1.06,0.5,1.06,1.16   C113.07,47.44,112.61,47.96,112.01,47.96z" fill="#CC0000" />
<path d="M112.28,46.85v-0.01c0.16-0.04,0.28-0.14,0.28-0.36c0-0.15-0.06-0.26-0.12-0.31c-0.1-0.08-0.24-0.13-0.46-0.13   c-0.18,0-0.29,0.02-0.42,0.03v1.52h0.23v-0.66h0.14c0.19,0,0.3,0.09,0.34,0.28c0.02,0.19,0.04,0.33,0.08,0.38h0.26   c0,0-0.05-0.15-0.1-0.37C112.48,46.99,112.4,46.85,112.28,46.85z M111.96,46.8v-0.01h-0.16v-0.52c0,0,0.09,0,0.16,0   c0.27,0,0.37,0.12,0.37,0.27C112.32,46.71,112.17,46.8,111.96,46.8z" fill="#CC0000" />
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-mob-flex__col--auto l-tab-flex__col--auto IID-grid-item-3efc67aa CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-cstm-itl-edit="true" class="custom-itl itl custom-itl--logo IID-custom-itl-94a18b11 CID-custom-itl-6a582420">
<style>
	.IID-custom-itl-94a18b11{max-width:172px;margin:0 auto}.IID-custom-itl-94a18b11:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.custom-itl.IID-custom-itl-94a18b11 .custom-itl__icon{height:30px}.custom-itl.IID-custom-itl-94a18b11 .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-94a18b11 .custom-itl__icon img.custom-itl__img{width:auto}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile">
<div class="custom-itl__link custom-itl__link--type--link" data-dl-name="Lufthansa">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg-681696565-294677375-title" class="custom-itl__img" id="svg-681696565-294677375" role="img" style="enable-background:new 0 0 128 21.94;" version="1.1" viewBox="0 0 128 21.94" x="0px" xml:space="preserve" y="0px"><title id="svg-681696565-294677375-title">Lufthansa logo</title>
<g>
<polygon fill="#0A1D3D" points="39.96,3.66 36.57,3.66 36.57,18.29 46.25,18.29 46.25,15.34 39.96,15.34  " />
<path d="M12.65,8.39L12.65,8.39c-0.88,1.89-2.24,2.96-3.76,2.96c-0.69,0-1.44-0.25-2.43-0.79L5.29,9.91l0.22-0.17   l2.25,0.98l0.29-0.23L3.67,8.48L3.21,8.84L1.87,8.27l0.01,0.51c1.98,0.88,2.87,1.38,5.41,3.1c2.64,1.79,5.76,3.09,8.73,3.65   l0.72-0.7h-0.19c-2.06,0-4.18-0.88-5.48-2.27c1.36-0.83,2.68-1.19,4.35-1.19c0.65,0,1.38,0.04,1.98,0.12l0.45-0.43   c-0.85-0.13-1.74-0.19-2.68-0.19c-0.66,0-1.21,0.02-1.71,0.08c0.07-0.07,0.29-0.32,0.38-0.41c0.38-0.02,0.8-0.03,1.18-0.03   c1.05,0,2.22,0.09,3.17,0.23l0.45-0.43c-1.26-0.2-2.42-0.29-3.66-0.29c-0.36,0-0.62,0-0.75,0.01c0.12-0.14,0.24-0.3,0.29-0.38   c0.05,0,0.1,0,0.32,0c1.51,0,2.69,0.1,4.11,0.35l0.45-0.43c-1.58-0.28-3-0.41-4.57-0.41c0.1-0.16,0.17-0.27,0.21-0.35   c0.04,0,0.11-0.01,0.19-0.01c1.29,0,3.31,0.2,4.5,0.45l0.47-0.45c-1.91-0.36-3.6-0.52-5.34-0.52C14.01,8.27,13.31,8.31,12.65,8.39z   " fill="#0A1D3D" />
<path d="M53.85,13.77c0,1.4-0.71,2.03-1.86,2.03c-1.27,0-1.88-0.63-1.88-2.03V7.75h-3.16v6.17   c0,3.47,1.4,4.68,4.1,4.68c1.65,0,2.55-0.71,2.99-1.53v1.21h2.97V7.75h-3.16V13.77z" fill="#0A1D3D" />
<path d="M10.97,0C4.9,0,0,4.9,0,10.97c0,6.07,4.9,10.97,10.97,10.97c6.07,0,10.97-4.9,10.97-10.97   C21.94,4.9,17.04,0,10.97,0z M10.97,21.28L10.97,21.28c-5.69,0-10.31-4.62-10.31-10.31c0-5.69,4.62-10.31,10.31-10.31   c5.69,0,10.31,4.62,10.31,10.31C21.28,16.66,16.67,21.28,10.97,21.28z" fill="#0A1D3D" />
<path d="M59.43,7.36v0.4h-1.59v2.57h1.59v7.96h3.16v-7.96h2.32V7.75h-2.32V7.34c0-0.92,0.52-1.25,1.51-1.25   c0.38,0,0.82,0.04,0.82,0.04V3.57c0,0-0.52-0.13-1.34-0.13C61.04,3.45,59.43,4.81,59.43,7.36z" fill="#0A1D3D" />
<path d="M90.22,7.44c-3.11,0-4.62,1.19-4.74,3.43h3.07c0.04-0.59,0.38-1.02,1.67-1.02c1.15,0,1.69,0.38,1.69,0.94   c0,0.5-0.31,0.69-1.09,0.77l-2.01,0.21c-2.72,0.29-3.95,1.42-3.95,3.47c0,1.9,1.17,3.36,3.66,3.36c1.69,0,2.7-0.54,3.57-1.63v1.32   h2.88v-6.92C94.99,8.46,93.29,7.44,90.22,7.44z M91.98,14.19c0,1.15-1.09,2.01-2.76,2.01c-0.82,0-1.3-0.38-1.3-1.09   c0-0.54,0.34-1,1.4-1.15l1.82-0.25c0.31-0.04,0.65-0.1,0.84-0.17V14.19z" fill="#0A1D3D" />
<path d="M123.23,7.44c-3.11,0-4.62,1.19-4.74,3.43h3.07c0.04-0.59,0.38-1.02,1.67-1.02c1.15,0,1.69,0.38,1.69,0.94   c0,0.5-0.31,0.69-1.09,0.77l-2.01,0.21c-2.72,0.29-3.95,1.42-3.95,3.47c0,1.9,1.17,3.36,3.66,3.36c1.69,0,2.7-0.54,3.57-1.63v1.32   H128v-6.92C128,8.46,126.31,7.44,123.23,7.44z M124.99,14.19c0,1.15-1.09,2.01-2.76,2.01c-0.82,0-1.29-0.38-1.29-1.09   c0-0.54,0.33-1,1.4-1.15l1.82-0.25c0.31-0.04,0.65-0.1,0.84-0.17V14.19z" fill="#0A1D3D" />
<path d="M113.08,11.68L113.08,11.68l-1.11-0.15c-0.9-0.13-1.15-0.38-1.15-0.84s0.4-0.82,1.44-0.82   c1.04,0,1.4,0.38,1.5,0.98h3.07c-0.15-2.28-1.69-3.43-4.58-3.43c-3.11,0-4.6,1.48-4.6,3.49c0,2.01,1.34,2.99,3.66,3.3l1.11,0.15   c1.09,0.15,1.5,0.4,1.5,0.94c0,0.59-0.5,0.88-1.73,0.88c-1.23,0-1.76-0.38-1.84-1.15h-3.11c0.06,2.11,1.34,3.55,4.95,3.55   c3.32,0,4.89-1.32,4.89-3.53C117.09,12.85,115.75,12.04,113.08,11.68z" fill="#0A1D3D" />
<path d="M102.29,7.44c-1.69,0-2.59,0.71-3.03,1.53V7.75h-2.97v10.53h3.16v-6.02c0-1.4,0.71-2.03,1.9-2.03   c1.32,0,1.92,0.63,1.92,2.03v6.02h3.16v-6.17C106.42,8.65,105.02,7.44,102.29,7.44z" fill="#0A1D3D" />
<path d="M70.47,4.68h-3.16v3.07h-1.59v2.57h1.59v4.45c0,2.55,1.53,3.7,4.05,3.7c0.77,0,1.5-0.17,1.5-0.17v-2.53   c0,0-0.52,0.06-0.9,0.06c-0.92,0-1.51-0.29-1.51-1.42v-4.1h2.4V7.75h-2.4V4.68z" fill="#0A1D3D" />
<path d="M79.86,7.44L79.86,7.44c-1.48,0-2.34,0.57-2.88,1.34v-5.1H73.8v14.61h3.16v-6.02c0-1.4,0.71-2.03,1.9-2.03   c1.32,0,1.92,0.63,1.92,2.03v6.02h3.16v-6.17C83.93,8.65,82.53,7.44,79.86,7.44z" fill="#0A1D3D" />
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-mob-flex__col--auto l-tab-flex__col--auto IID-grid-item-b2eaadc6 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-cstm-itl-edit="true" class="custom-itl itl custom-itl--logo CID-custom-itl-6a582420 IID-custom-itl-3e6d022d">
<style>
	.IID-custom-itl-3e6d022d{max-width:130px;margin:0 auto}.IID-custom-itl-3e6d022d:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.custom-itl.IID-custom-itl-3e6d022d .custom-itl__icon{height:28px}.custom-itl.IID-custom-itl-3e6d022d .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-3e6d022d .custom-itl__icon img.custom-itl__img{width:auto}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile">
<div class="custom-itl__link custom-itl__link--type--link" data-dl-name="Waitrose &amp; Partners">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--283603577-522103963-title" class="custom-itl__img" id="svg--283603577-522103963" role="img" viewBox="0 0 128 27.37">
<title id="svg--283603577-522103963-title">Waitrose and Partners logo</title>
<rect fill="none" height="27.35" width="128" y="0.01" />
<rect fill="none" height="27.35" width="128" y="0.01" />
<path d="M128,14.19h-7.88c-.21,0-.32-.08-.3-.3s0-.26,0-.38V1c0-.73-.08-.68.69-.68h7c.22,0,.3.1.29.31s0,.51,0,.77c0,.8.1.72-.7.72h-4.54c-.85,0-.72-.1-.73.76v3c0,.42,0,.43.43.43H127c.63,0,.58,0,.57.59,0,.38.16.86-.07,1.11s-.77.09-1.16.09h-4c-.55,0-.54,0-.54.51,0,1.13,0,2.25,0,3.38,0,.42,0,.43.43.43h5l.7,0Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M29.42,27.33c0-.1-.12-.09-.2-.12a1.42,1.42,0,0,1-.49-2.51c.18-.15.37-.28.59-.45-.14-.2-.27-.38-.39-.57a1.24,1.24,0,0,1,.32-1.79,1.62,1.62,0,0,1,2.07.4,1.38,1.38,0,0,1-.06,1.45,3.47,3.47,0,0,1-.64.63.8.8,0,0,0,.13.22c.24.27.49.53.75.8a1.13,1.13,0,0,0,.3-.48c.23-.51.23-.51.89-.45a3,3,0,0,1-.45,1.16.47.47,0,0,0,.08.67c.27.27.52.55.79.84-.74.23-.85.2-1.56-.49a6.22,6.22,0,0,1-1.35.72A7,7,0,0,0,29.42,27.33Zm.45-.76a1.43,1.43,0,0,0,.83-.26c.28-.18.29-.25.09-.49s-.46-.5-.68-.75a.32.32,0,0,0-.54-.05,3.06,3.06,0,0,0-.32.3.74.74,0,0,0-.13.88A.73.73,0,0,0,29.87,26.57ZM29.51,23a1.27,1.27,0,0,0,.41.77.21.21,0,0,0,.23.05,1,1,0,0,0,.58-.85.61.61,0,0,0-.67-.54A.56.56,0,0,0,29.51,23Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M97.78,27.33c-.19-.18-.47-.16-.69-.27s-.54-.32-.46-.72a4.16,4.16,0,0,0,0-.54,4.06,4.06,0,0,0,.75.56,1.26,1.26,0,0,0,1.16.09.67.67,0,0,0,.29-1.05,2,2,0,0,0-.68-.57,8.42,8.42,0,0,1-1-.67,1.44,1.44,0,0,1,.93-2.58,2.46,2.46,0,0,1,1.07.14.53.53,0,0,1,.4.62,4.12,4.12,0,0,0,0,.5L99,22.5a1.46,1.46,0,0,0-1.17-.12.57.57,0,0,0-.3.95,1.77,1.77,0,0,0,.53.45c.3.17.59.34.87.52a1.83,1.83,0,0,1,.84,1.22A1.48,1.48,0,0,1,99,27.11c-.14.08-.35,0-.44.22Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M21.27.33c-.32.79-.63,1.56-.93,2.32q-2.25,5.55-4.48,11.1a2.09,2.09,0,0,1-.17.41.3.3,0,0,1-.52,0,2.67,2.67,0,0,1-.2-.46q-2-5-4-10a2.09,2.09,0,0,0-.3-.62c-.2.14-.22.36-.29.55L6.24,13.8c-.08.19-.06.5-.4.5s-.33-.29-.41-.49Q2.76,7.23.11.65c0-.1-.07-.2-.1-.3A9.31,9.31,0,0,1,1.83.25a.28.28,0,0,1,.24.17c.07.16.14.31.2.47L5.78,9.64c.24-.11.24-.35.32-.53C7.21,6.38,8.31,3.64,9.41.91A2.34,2.34,0,0,0,9.5.67a.49.49,0,0,1,.59-.42,5.79,5.79,0,0,0,1,0,.6.6,0,0,1,.71.46C12.38,2.16,13,3.59,13.55,5s1.17,2.87,1.76,4.31c0,.12.06.25.23.33l1.83-4.6c.57-1.44,1.15-2.88,1.71-4.32.13-.34.29-.53.69-.49S20.74.21,21.27.33Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M91.87,0a7.39,7.39,0,0,1,5.58,2.24,6.84,6.84,0,0,1,1.93,5.47,7,7,0,0,1-6.24,6.48,8.4,8.4,0,0,1-4.63-.54,6.71,6.71,0,0,1-4.15-5.95,6.85,6.85,0,0,1,1.83-5.39A7.17,7.17,0,0,1,91.48,0Zm0,12.41a5.26,5.26,0,0,0,3.78-9.11,5.48,5.48,0,0,0-4.87-1.28,5.22,5.22,0,0,0-3.62,7.77A5.13,5.13,0,0,0,91.84,12.44Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M74.89,7.62a10.3,10.3,0,0,1,2.55,3.13c.66,1,1.31,2.09,2.07,3.06a2.35,2.35,0,0,1,.23.38H77.57c-.27,0-.36-.18-.48-.35L75.24,11A15,15,0,0,0,74,9.38a7.92,7.92,0,0,0-.78-.75,2.92,2.92,0,0,0-2.13-.47c-.12,0-.19.08-.2.21s0,.34,0,.51v4.85c0,.46,0,.46-.45.47H69.17c-.26,0-.34-.11-.32-.34s0-.21,0-.32V.72c0-.43,0-.44.42-.44,1.26,0,2.52,0,3.78,0a4.43,4.43,0,0,1,2.46.78,3.51,3.51,0,0,1,1.54,3.24,3.48,3.48,0,0,1-1.75,3C75.17,7.39,75,7.42,74.89,7.62ZM71,4.08V6c0,.21.08.32.3.31a9.74,9.74,0,0,0,2.09-.11A2,2,0,0,0,75,4.1a2,2,0,0,0-1.64-2,8.64,8.64,0,0,0-2-.14c-.25,0-.34.11-.33.35C71,2.9,71,3.49,71,4.08Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M37.57,14.19c-.63,0-1.16,0-1.69,0a.52.52,0,0,1-.57-.38c-.44-1-.9-2-1.35-3a2.72,2.72,0,0,1-.16-.35c-.08-.31-.29-.36-.58-.36H28.1a.51.51,0,0,0-.57.37c-.41,1-.86,2-1.29,3-.36.83-.17.67-1,.68a6.37,6.37,0,0,1-1.3,0L25.25,11q2.14-5,4.3-10c.08-.18.17-.35.23-.53a.35.35,0,0,1,.37-.27c1.13-.09,1.13-.09,1.59,1q2.79,6.21,5.57,12.43Zm-4.87-6a35.89,35.89,0,0,0-2.15-4.67,35.72,35.72,0,0,0-1.9,4.71A25.44,25.44,0,0,0,32.7,8.15Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M105.46,10.61c.22.19.46.37.67.57a4.57,4.57,0,0,0,2.71,1.31,3,3,0,0,0,1.27-.11,1.72,1.72,0,0,0,1-2.7,4,4,0,0,0-1.19-1.14c-.61-.39-1.23-.76-1.85-1.14A9.74,9.74,0,0,1,106.31,6,3.51,3.51,0,0,1,107.81.3a5.49,5.49,0,0,1,4.62.47.61.61,0,0,1,.36.6c0,.59,0,1.18,0,1.82a.94.94,0,0,1-.5-.31,4.57,4.57,0,0,0-2.56-1,2.76,2.76,0,0,0-1.72.41,1.43,1.43,0,0,0-.54,1.94,2.44,2.44,0,0,0,.65.78,12.05,12.05,0,0,0,1.82,1.18,11.53,11.53,0,0,1,1.88,1.2,4.09,4.09,0,0,1,1.35,2,3.76,3.76,0,0,1-3.56,4.94,6.53,6.53,0,0,1-3.66-.94.84.84,0,0,1-.5-.86C105.49,11.87,105.46,11.22,105.46,10.61Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M58.07,8.15v5.54c0,.48,0,.48-.49.49H56.3c-.18,0-.28-.06-.27-.26V2.7C56,2,56.1,2,55.39,2H51.62c-.41,0-.43,0-.42-.43A3.84,3.84,0,0,1,51.27.3a6,6,0,0,1,1.27,0h9.72c.7,0,.66-.05.66.65,0,.3,0,.59,0,.89a.23.23,0,0,1-.24.24H58.51c-.41,0-.42,0-.43.43C58.07,4.37,58.07,6.26,58.07,8.15Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M45.27,7.25v6.69c0,.15-.05.25-.22.25h-1.6a.2.2,0,0,1-.23-.23V.84c0-.62,0-.58.6-.58H45c.22,0,.31.09.3.31s0,.3,0,.45Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M72.29,23.11v1.81c0,.66,0,1.31,0,2,0,.32-.19.32-.41.32s-.42,0-.42-.32c0-1.08,0-2.17,0-3.25V22.05c0-.16-.06-.37.16-.43a.61.61,0,0,1,.61.08c.14.13.26.28.39.42,1,1.13,2,2.27,3,3.4.07.08.13.18.25.2a1.06,1.06,0,0,0,.06-.61c0-1,0-2.08,0-3.12,0-.14,0-.32.14-.37a.93.93,0,0,1,.57,0,.17.17,0,0,1,.09.15,2.42,2.42,0,0,1,0,.38v4.52c0,.17.11.43-.15.49a.67.67,0,0,1-.72-.13l-.2-.24-2.77-3.16A2.13,2.13,0,0,0,72.29,23.11Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M58.08,24.57c.2.24.41.45.58.7.42.61.82,1.24,1.23,1.88a1.87,1.87,0,0,1-.77.07c-.21,0-.28-.18-.37-.32a15.67,15.67,0,0,0-1.09-1.57,1.29,1.29,0,0,0-.91-.54c-.24,0-.35.05-.34.31,0,.59,0,1.19,0,1.78,0,.3-.14.35-.39.34-.41,0-.45,0-.46-.34V22c0-.27.11-.38.38-.37h1.22a2,2,0,0,1,.8.19,1.49,1.49,0,0,1,.47,2.44C58.33,24.35,58.2,24.46,58.08,24.57Zm-1.65-1.39c0,.9.09,1,.89.82A.81.81,0,0,0,58,23c-.08-.5-.5-.73-1.25-.69-.31,0-.31,0-.31.72Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M93,27.13c-.13.12-.27.07-.39.09a.78.78,0,0,1-.87-.46,8.74,8.74,0,0,0-1.06-1.51,1.18,1.18,0,0,0-.87-.46c-.22,0-.32.05-.31.27v1.72c0,.39-.3.57-.67.42a.21.21,0,0,1-.13-.19V22.12c0-.5,0-.5.48-.5h1a1.92,1.92,0,0,1,.75.14,1.5,1.5,0,0,1,.55,2.53c-.1.1-.22.19-.36.31A19.14,19.14,0,0,1,93,27.13ZM90,22.34c-.54,0-.55,0-.56.49v.51c0,.74,0,.78.8.68h.13a.88.88,0,0,0,.69-.81.87.87,0,0,0-.68-.82A1.44,1.44,0,0,0,90,22.34Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M46.32,27.14a.52.52,0,0,1,0-.18c.72-1.68,1.44-3.35,2.15-5a.46.46,0,0,1,.52-.34c.26,0,.31.18.38.36l1.66,3.72c.22.48.43,1,.64,1.43-.13.18-.29.11-.43.13a.44.44,0,0,1-.53-.34c-.14-.36-.32-.69-.46-1.05a.41.41,0,0,0-.44-.28c-.58,0-1.15,0-1.73,0a.4.4,0,0,0-.43.29c-.1.28-.23.55-.35.82C47.06,27.29,47.05,27.3,46.32,27.14Zm1.89-2.39a5.44,5.44,0,0,0,1.56,0c-.27-.61-.53-1.18-.83-1.84A12.13,12.13,0,0,0,48.21,24.75Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M81.19,24.39V22c0-.41,0-.42.44-.42H84c.38,0,.43.08.42.45s-.1.3-.31.29c-.58,0-1.15,0-1.72,0-.29,0-.38.11-.35.37A4.06,4.06,0,0,0,82.11,24a5.44,5.44,0,0,0,1.14,0c.21,0,.43,0,.64,0,.46,0,.45,0,.46.45,0,.27-.13.32-.35.31-.51,0-1,0-1.54,0s-.42,0-.42.42,0,.64,0,.95.07.31.3.3c.58,0,1.15,0,1.72,0s.43.08.43.5c0,.19-.1.26-.27.25H81.6c-.39,0-.4,0-.4-.39C81.18,26,81.19,25.19,81.19,24.39Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M40,24.41v-2.3c0-.5,0-.5.49-.51s1,0,1.47,0a1.66,1.66,0,0,1,1.26.54,1.6,1.6,0,0,1-.72,2.54,3.61,3.61,0,0,1-1.08.11c-.62,0-.57,0-.57.6s0,1,0,1.53c0,.22-.09.29-.3.3-.5,0-.54,0-.54-.51C40,25.94,40,25.18,40,24.41Zm.85-1.23c0,1-.17.83.88.85h.25a.73.73,0,0,0,.7-.75.73.73,0,0,0-.57-.86,1.18,1.18,0,0,0-.37-.05C40.61,22.37,40.84,22.22,40.81,23.18Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M65.52,24.84c0,.68,0,1.36,0,2,0,.3-.14.35-.39.34-.41,0-.45,0-.46-.34,0-1.21,0-2.42,0-3.63v-.32c0-.61,0-.58-.6-.58H63c-.25,0-.27-.15-.26-.34s0-.41.26-.41h4.1c.12,0,.28,0,.34.1a.77.77,0,0,1,0,.56c0,.11-.18.09-.29.09H65.91c-.38,0-.39,0-.4.38C65.51,23.44,65.52,24.14,65.52,24.84Z" fill="#6f9131" transform="translate(0 0.01)" />
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-mob-flex__col--auto l-tab-flex__col--auto IID-grid-item-6dadf7da CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-cstm-itl-edit="true" class="custom-itl itl custom-itl--logo IID-custom-itl-40016f41 CID-custom-itl-6a582420">
<style>
	.IID-custom-itl-40016f41{max-width:155px;margin:0 auto}.IID-custom-itl-40016f41:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.custom-itl.IID-custom-itl-40016f41 .custom-itl__icon{height:19px}.custom-itl.IID-custom-itl-40016f41 .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-40016f41 .custom-itl__icon img.custom-itl__img{width:auto}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile">
<div class="custom-itl__link custom-itl__link--type--link" data-dl-name="Hugo Boss">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--1519884160--2030398765-title" class="custom-itl__img" id="svg--1519884160--2030398765" role="img" style="enable-background:new 0 0 128 15.59;" version="1.1" viewBox="0 0 128 15.59" x="0px" xml:space="preserve" y="0px"><title id="svg--1519884160--2030398765-title">Hugo Boss logo</title>
<g>
<path d="M82.89,6.99L82.89,6.99c0.65-0.83,0.92-1.65,0.92-2.57c0-2.23-1.82-4.05-4.05-4.05h-7V15.1h7.64   c2.49,0,4.51-2.03,4.51-4.51C84.91,9.04,84.18,7.73,82.89,6.99z M76.54,3.59L76.54,3.59l2.3,0c0.71,0,1.29,0.57,1.29,1.29   c0,0.71-0.57,1.29-1.29,1.29h-2.3V3.59z M79.56,11.79h-3.04V9.02h3.04c0.77,0,1.38,0.62,1.38,1.38   C80.95,11.16,80.33,11.79,79.56,11.79z" />
<path d="M94.67,0c-4.24,0-7.73,3.31-7.73,7.73c0,4.42,3.49,7.73,7.73,7.73s7.73-3.31,7.73-7.73C102.41,3.31,98.91,0,94.67,0z    M94.67,11.79c-2.21,0-3.78-1.85-3.78-4.05c0-2.21,1.57-4.05,3.78-4.05s3.78,1.85,3.78,4.05C98.45,9.94,96.88,11.79,94.67,11.79z" />
<path d="M108.11,4.61L108.11,4.61c0-0.54,0.74-1.01,1.84-1.01c1.47,0,2.3,0.74,2.3,0.74l2.12-2.86c0,0-1.85-1.47-4.79-1.47   c-2.77,0-5.16,2.03-5.16,4.6c0.01,4.4,6.64,4.59,6.64,6.25c0,0.55-0.55,1.01-1.47,1.01c-2.03,0-3.31-1.38-3.31-1.38l-2.21,2.95   c0,0,1.85,2.03,5.52,2.03c2.95,0,5.52-1.85,5.52-4.6C115.11,6.46,108.11,6.09,108.11,4.61z" />
<path d="M121,4.61L121,4.61c0-0.54,0.74-1.01,1.84-1.01c1.47,0,2.3,0.74,2.3,0.74l2.12-2.86c0,0-1.84-1.47-4.78-1.47   c-2.77,0-5.16,2.03-5.16,4.6c0,4.4,6.63,4.59,6.63,6.25c0,0.55-0.55,1.01-1.47,1.01c-2.03,0-3.31-1.38-3.31-1.38l-2.21,2.95   c0,0,1.84,2.03,5.52,2.03c2.95,0,5.52-1.85,5.52-4.6C128,6.46,121,6.09,121,4.61z" />
<path d="M56.64,0.15c-4.23,0-7.72,3.31-7.72,7.72c0,4.41,3.25,7.49,7.28,7.71c0.14,0.01,0.29,0.01,0.44,0.01   c0.15,0,0.29,0,0.44-0.01c4.03-0.22,7.28-3.45,7.28-7.71C64.36,3.61,60.87,0.15,56.64,0.15z M56.64,11.91   c-2.21,0-3.76-1.84-3.76-4.05c0-2.21,1.56-4.05,3.76-4.05c2.21,0,3.76,1.84,3.76,4.05C60.4,10.07,58.85,11.91,56.64,11.91z" />
<polygon points="9.19,6.03 4.04,6.03 4.04,0.51 0,0.51 0,0.51 0,15.22 0,15.22 4.05,15.22 4.05,9.33 9.2,9.33 9.2,15.22    13.25,15.22 13.25,0.51 9.19,0.51  " />
<path d="M25.94,9.34L25.94,9.34c0,1.84-1.48,2.57-2.58,2.57c-1.1,0-2.57-0.73-2.57-2.57V0.51h-4.05v8.46c0,4.23,3.04,6.43,6.21,6.6   c0.14,0.01,0.28,0.01,0.41,0.01c0.14,0,0.29,0,0.44-0.01c3.16-0.18,6.18-2.39,6.18-6.6V0.51h-4.04V9.34z" />
<path d="M39.9,9.33L39.9,9.33l3.13,0v1.84c0,0-0.92,0.74-2.76,0.74c-2.21,0-3.76-1.84-3.76-4.05c0-2.21,1.56-4.14,3.76-4.14   c1.65,0,2.48,0.74,2.48,0.74l2.3-2.86c0,0-1.83-1.47-4.78-1.47c-4.23,0-7.72,3.31-7.72,7.72s3.26,7.49,7.29,7.71   c0.14,0.01,0.29,0.01,0.44,0.01c0.17,0,0.33,0,0.49-0.01c3.9-0.19,5.75-2.56,5.75-2.56v-6.9H39.9V9.33z" />
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-mob-flex__col--auto l-tab-flex__col--auto CID-grid-item-1e7a19ff IID-grid-item-aa6b0b59">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-cstm-itl-edit="true" class="custom-itl itl custom-itl--logo IID-custom-itl-54464100 CID-custom-itl-6a582420">
<style>
	.IID-custom-itl-54464100{max-width:48px;margin:0 auto}.IID-custom-itl-54464100:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.custom-itl.IID-custom-itl-54464100 .custom-itl__icon{height:60px}.custom-itl.IID-custom-itl-54464100 .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-54464100 .custom-itl__icon img.custom-itl__img{width:auto}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile">
<div class="custom-itl__link custom-itl__link--type--link" data-dl-name="Golden State Warriors">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-1485071034-98478580-title" class="custom-itl__img" id="svg-1485071034-98478580" role="img" viewBox="0 0 45.7 56">
<title id="svg-1485071034-98478580-title">Golden State Warriors logo</title>
<path d="m7.51 45.12-1.57-1.4-.14.16a.37.37 0 0 1 .09.21.14.14 0 0 1 0 .11.61.61 0 0 1-.21.13l-2.79 1.38 1.12-2.83a.53.53 0 0 1 .13-.23.14.14 0 0 1 .12-.06.38.38 0 0 1 .18.06l.14-.15-1.5-1.33-.14.16a.43.43 0 0 1 .1.27 1.41 1.41 0 0 1-.11.43l-1.52 4.14-.15.34a.22.22 0 0 1-.15.08.38.38 0 0 1-.18-.06l-.1.13 1.38 1.24.13-.13a.45.45 0 0 1-.09-.24.15.15 0 0 1 0-.11 1 1 0 0 1 .28-.15l3-1.5-1.2 3.02a1.24 1.24 0 0 1-.15.35.17.17 0 0 1-.14.07.35.35 0 0 1-.2-.07l-.14.16 1.41 1.26.15-.17a.33.33 0 0 1-.1-.21.16.16 0 0 1 0-.18 1.11 1.11 0 0 1 .34-.21l3.91-2a1.53 1.53 0 0 1 .41-.16.68.68 0 0 1 .26.08l.14-.15-1.41-1.28-.14.15a.35.35 0 0 1 .1.22v.1a1 1 0 0 1-.27.17l-2.65 1.41 1.08-2.84a.67.67 0 0 1 .1-.21.19.19 0 0 1 .14-.07.45.45 0 0 1 .2.06l.11-.13Zm3.66 6.2-1.51-.74 1.57-1.27Zm1.69-2.94-1.85-.9-.09.19a.29.29 0 0 1 .12.21l-.03.12a.94.94 0 0 1-.22.23l-3.68 2.92a1 1 0 0 1-.3.19h-.25l-.1.19 1.73.84.1-.19a.33.33 0 0 1-.14-.22v-.07a.7.7 0 0 1 .17-.18l.68-.54 2.19 1.11v.84a.65.65 0 0 1 0 .25.2.2 0 0 1-.18.11h-.14l-.1.19 1.92 1 .09-.2a.46.46 0 0 1-.17-.22 1.37 1.37 0 0 1-.05-.41v-4.77a.56.56 0 0 1 0-.26.2.2 0 0 1 .19-.09h.09l.11-.14Zm5.46 2.75a.51.51 0 0 1 .18.41v.19a.58.58 0 0 1-.4.49h-.32l-.57-.1-1.79-.38.28-1.34 1.8.38a4.44 4.44 0 0 1 .51.22 1.31 1.31 0 0 1 .31.13Zm1.06-.57a1.71 1.71 0 0 0-.59-.4 5.52 5.52 0 0 0-1-.28l-3.45-.71v.17a.81.81 0 0 1 .19.18v.17l-1 4.6a.26.26 0 0 1-.08.15.4.4 0 0 1-.2 0l-.07.17 1.78.38v-.17l-.18-.17a.25.25 0 0 1 0-.1v-.07l.38-1.77 1.4.3.73 1.8a1.18 1.18 0 0 1 .12.36s-.07.06-.16.07l-.07.16 2.05.42.05-.21a.44.44 0 0 1-.27-.18 3.49 3.49 0 0 1-.3-.58l-.72-1.66h.02A1.49 1.49 0 0 0 19.72 52a2 2 0 0 0 0-.41 2.43 2.43 0 0 0 0-.38 1.15 1.15 0 0 0-.34-.65Zm5.19.81a.58.58 0 0 1 .31.55.57.57 0 0 1-.27.53 1.33 1.33 0 0 1-.3.11h-.58l-1.83.08-.06-1.42h2.41a.85.85 0 0 1 .32.15Zm-.79-1.1-3.47.14v.17a.9.9 0 0 1 .22.13.23.23 0 0 1 .05.16l.19 4.71a.21.21 0 0 1 0 .15.37.37 0 0 1-.18.1V56h1.79v-.18a.56.56 0 0 1-.21-.12.21.21 0 0 1-.06-.16l-.1-1.82 1.44-.06 1.16 1.57a.92.92 0 0 1 .2.32c0 .05-.06.09-.17.11v.17h2v-.18a1.08 1.08 0 0 1-.35-.15 3 3 0 0 1-.43-.49l-1.1-1.44A1.51 1.51 0 0 0 26.17 52v-.09a2 2 0 0 0-.16-.81 1.32 1.32 0 0 0-.52-.57 1.45 1.45 0 0 0-.68-.24h-.66Zm2.97.09 1 4.59v.14a.31.31 0 0 1-.16.13v.18l1.78-.4v-.17l-.23-.09a.18.18 0 0 1-.08-.15l-1-4.58v-.1a.36.36 0 0 1 .16-.13v-.22L26.4 50v.17a.79.79 0 0 1 .24.09.28.28 0 0 1 .11.1Zm6.38-1.14a2.06 2.06 0 0 1 1.29 1.83 1.79 1.79 0 0 1-.17.78 1.89 1.89 0 0 1-1 .94 2.1 2.1 0 0 1-.82.18 1.69 1.69 0 0 1-.56-.09 1.82 1.82 0 0 1-1.12-1.07 2 2 0 0 1-.18-.79 1.7 1.7 0 0 1 .18-.76 1.93 1.93 0 0 1 1-.93 2.18 2.18 0 0 1 .83-.18 1.33 1.33 0 0 1 .55.09Zm-1.79-.86a3 3 0 0 0-2 2.35 2.09 2.09 0 0 0 0 .43 2.79 2.79 0 0 0 .25 1.16 3.09 3.09 0 0 0 .62.93 2.57 2.57 0 0 0 1.05.66 2.71 2.71 0 0 0 1 .16 3.89 3.89 0 0 0 1.51-.34 3 3 0 0 0 2-2.36v-.47a2.65 2.65 0 0 0-.23-1.1 2.79 2.79 0 0 0-1.69-1.62 2.61 2.61 0 0 0-.94-.16 4.41 4.41 0 0 0-1.57.36Zm6.6-2.73a.83.83 0 0 1 .29-.1h.09a.58.58 0 0 1 .48.28.67.67 0 0 1 .16.41.41.41 0 0 1-.05.21.68.68 0 0 1-.18.26l-.44.38-1.43 1.12-.85-1.1L37.47 46Zm-3.41 1.73a.24.24 0 0 1 .14.11l2.86 3.72a.26.26 0 0 1 .07.15.36.36 0 0 1-.09.19l.13.17 1.44-1.11-.13-.17h-.17a.26.26 0 0 1-.14-.1L37.46 49l1.14-.89 1.86.62a1 1 0 0 1 .35.15.25.25 0 0 1-.09.15l.11.14L42.51 48l-.13-.17a.45.45 0 0 1-.28.09 3.32 3.32 0 0 1-.62-.15l-1.73-.54a1.74 1.74 0 0 0 .48-1.23 1.62 1.62 0 0 0-.38-1 1.89 1.89 0 0 0-.59-.51 1.31 1.31 0 0 0-.65-.17h-.1a1.57 1.57 0 0 0-.69.21 5.46 5.46 0 0 0-.85.56l-2.79 2.14.12.16a.41.41 0 0 1 .17 0Zm5.01-3.83a1.59 1.59 0 0 0 .61 1.15 1.57 1.57 0 0 0 .73.34h.24a1.27 1.27 0 0 0 .58-.13 1.78 1.78 0 0 0 .48-.3l.65-.61.44-.44a3.9 3.9 0 0 1 .63-.55.41.41 0 0 1 .23-.07.37.37 0 0 1 .22.09.68.68 0 0 1 .18.29v.42a2 2 0 0 1-.43.82 3.59 3.59 0 0 1-.79.69 2.22 2.22 0 0 1-.81.38h-.1a.36.36 0 0 1-.24-.08l-.21.07.66 1.4.17-.07v-.21l.24-.13a5 5 0 0 0 1.8-1.37 4.19 4.19 0 0 0 .61-1 2.4 2.4 0 0 0 .22-.95 1.32 1.32 0 0 0 0-.3 1.63 1.63 0 0 0-1.24-1.29h-.7a2.17 2.17 0 0 0-.63.31 4.67 4.67 0 0 0-.72.61l-.46.46a3.93 3.93 0 0 1-.62.56.58.58 0 0 1-.3.11.37.37 0 0 1-.22-.08.45.45 0 0 1-.16-.31v-.12a1 1 0 0 1 .06-.33 2.28 2.28 0 0 1 .4-.64 2.89 2.89 0 0 1 1.44-1h.21a.28.28 0 0 1 .13 0v.05l.17-.05-.62-1.41-.17.07a.54.54 0 0 1-.07.23.84.84 0 0 1-.24.15 9.12 9.12 0 0 0-1 .64 4.79 4.79 0 0 0-.72.71 2.87 2.87 0 0 0-.74 1.75Z" fill="#1e448c" fill-rule="evenodd" />
<path d="M22.41 4.36a21.9 21.9 0 0 0-8.66 1.75 22.21 22.21 0 0 0-13.6 20.5 22.17 22.17 0 0 0 6.52 15.73 22.22 22.22 0 0 0 31.46 0 22.22 22.22 0 0 0 0-31.46 22.12 22.12 0 0 0-7.07-4.77 21.68 21.68 0 0 0-8.65-1.75ZM1.18 10.43l-.34.32a4 4 0 0 0-.35.41 2.81 2.81 0 0 0-.39.72 2 2 0 0 0-.1.7 1.41 1.41 0 0 0 .2.64 1.75 1.75 0 0 0 .49.53 1.69 1.69 0 0 0 .65.31 1.51 1.51 0 0 0 .67 0 1.89 1.89 0 0 0 .64-.31 2.63 2.63 0 0 0 .56-.59l.27-.39.23-.42a4.09 4.09 0 0 0 .16-.46 2.76 2.76 0 0 0 .07-.49l-.07-.07h-.09a.1.1 0 0 1-.09 0l-.58-.42-.1-.06a.37.37 0 0 1 .06-.15l-.06-.07-.94 1.28-.06.09a.18.18 0 0 1-.14 0l-.07.09.65.48.07-.1a.28.28 0 0 1-.1-.14.26.26 0 0 1 .05-.14l.48-.65.44.32-.19.47a3 3 0 0 1-.34.56 2.13 2.13 0 0 1-.33.34 1.23 1.23 0 0 1-.41.21h-.46a1.21 1.21 0 0 1-.49-.23 1.24 1.24 0 0 1-.37-.4 1 1 0 0 1-.12-.45 1.16 1.16 0 0 1 .08-.45 1.78 1.78 0 0 1 .22-.41l.24-.31a1.83 1.83 0 0 1 .3-.27 1 1 0 0 1 .29-.16h.2l.11-.08-.45-.8h-.08v.21l-.13.11Zm5.35-2.08a1.18 1.18 0 0 1-.18.45 1.62 1.62 0 0 1-.3.39 2.07 2.07 0 0 1-.41.27 1.59 1.59 0 0 1-.47.14 1 1 0 0 1-.46 0 1 1 0 0 1-.41-.27.87.87 0 0 1-.23-.43 1.07 1.07 0 0 1 0-.47 1.35 1.35 0 0 1 .17-.45 2.21 2.21 0 0 1 .31-.39 2.07 2.07 0 0 1 .41-.27 1.33 1.33 0 0 1 .46-.13 1.07 1.07 0 0 1 .47.05.92.92 0 0 1 .41.28 1 1 0 0 1 .24.88ZM6.81 7a1.4 1.4 0 0 0-.65-.43 1.76 1.76 0 0 0-.72-.06 2.18 2.18 0 0 0-.7.21 2.58 2.58 0 0 0-.59.41 2.21 2.21 0 0 0-.45.55 1.85 1.85 0 0 0-.28.68 1.59 1.59 0 0 0 0 .72 1.42 1.42 0 0 0 .37.69 1.4 1.4 0 0 0 .65.43 1.76 1.76 0 0 0 .72.06 1.8 1.8 0 0 0 .69-.26 3.1 3.1 0 0 0 .59-.41A2.4 2.4 0 0 0 6.9 9a2 2 0 0 0 .29-.67 1.59 1.59 0 0 0 0-.72A1.69 1.69 0 0 0 6.81 7Zm.35-2 1.52 2.43c0 .07 0 .14-.1.2l.06.1 2.57-1.59.14-.07s.07 0 .11.06l.1-.06-.46-.74-.1.06a.14.14 0 0 1 0 .14.18.18 0 0 1-.11.12L9.11 6.76 7.78 4.62c0-.06 0-.13.09-.2l-.06-.09-.94.56.07.1Zm6.85-2.46a1.47 1.47 0 0 1 .27.48 2 2 0 0 1 .14.53.86.86 0 0 1-.08.41.82.82 0 0 1-.28.31 3.22 3.22 0 0 1-.46.24l-.92.37-.82-2.1.91-.37a2.79 2.79 0 0 1 .5-.14h.41a.74.74 0 0 1 .33.27Zm-.57-.88a2.1 2.1 0 0 0-.64.14l-2 .78.05.11c.09 0 .15 0 .18.05l1.07 2.69c0 .07 0 .13-.09.16v.11l2-.78a2.2 2.2 0 0 0 .56-.34 1.58 1.58 0 0 0 .38-.48 1.37 1.37 0 0 0 .14-.61 2 2 0 0 0-.16-.74 1.67 1.67 0 0 0-.4-.63 1.39 1.39 0 0 0-1.13-.46Zm5.34-1.5a.25.25 0 0 1-.18.08l-2.84.55V.9h.08a.12.12 0 0 1 .05.08l.55 2.83v.09a.15.15 0 0 1-.07 0v.11l2.9-.56h.16s.07 0 .08.09h.12l-.17-.85h-.12a.12.12 0 0 1 0 .13.17.17 0 0 1-.14.07l-2.08.41-.17-.86 1.22-.25h.21c.05 0 .08.08.11.17h.11l-.2-1h-.11v.19a.49.49 0 0 1-.19.08L16.83 2l-.16-.77 2-.4h.19a.13.13 0 0 1 .07.1h.11L18.91 0h-.11a.09.09 0 0 1-.02.16Zm4.8 2.08L21.76.35c-.09-.09-.13-.15-.13-.19s0-.06.05-.06V0h-1.09v.11a.11.11 0 0 1 .12.12v2.88c0 .08 0 .12-.13.12v.12h.94v-.12c-.1 0-.14 0-.14-.12V1l1.94 2c.07.07.1.12.1.15s0 .06-.08.06v.12h1v-.09a.11.11 0 0 1-.12-.12V.24a.11.11 0 0 1 .12-.12V0h-1v.11c.11 0 .17 0 .17.12v2m6.81-1.08a3.51 3.51 0 0 0-.55-.21 2.13 2.13 0 0 0-.68-.09 1.35 1.35 0 0 0-.53.1 1 1 0 0 0-.37.26.94.94 0 0 0-.2.35.89.89 0 0 0 .02.44.84.84 0 0 0 .21.35 1.38 1.38 0 0 0 .36.26 4.28 4.28 0 0 0 .43.19l.45.16.39.15a.75.75 0 0 1 .26.18.23.23 0 0 1 .05.24.28.28 0 0 1-.18.2l-.31.06h-.35l-.31-.05-.32-.12-.32-.19-.26-.21a.58.58 0 0 1-.1-.22v-.08h-.05l-.54.64.07.08a.11.11 0 0 1 .1 0 .33.33 0 0 1 .14.09l.22.18.37.21a3.92 3.92 0 0 0 .57.21l.55.11a1.88 1.88 0 0 0 .58 0 1.15 1.15 0 0 0 .51-.21.8.8 0 0 0 .31-.47.85.85 0 0 0 0-.47.82.82 0 0 0-.21-.36 1.38 1.38 0 0 0-.36-.26l-.43-.2-.44-.16a2.87 2.87 0 0 1-.39-.24.72.72 0 0 1-.25-.19.27.27 0 0 1-.05-.25.2.2 0 0 1 .13-.16.71.71 0 0 1 .17-.06h.28l.29.05a2.55 2.55 0 0 1 .35.14 2 2 0 0 1 .31.19.91.91 0 0 1 .24.2 1.3 1.3 0 0 1 .13.19.38.38 0 0 1 0 .15h.06l.63-.64-.06-.07a.32.32 0 0 1-.14 0 .56.56 0 0 1-.19-.11l-.27-.19Zm5.13 2.07L32.9 2l-.08-.08v-.14l-.11-.05-.38.81.1.05a.11.11 0 0 1 .1-.08h.11l1 .46-1.12 2.31-.07.06h-.09v.1l.88.42.05-.11c-.08 0-.11-.1-.08-.17L34.3 3.3l1 .44.08.08a.14.14 0 0 1 0 .13l.1.05.39-.8h-.1a.15.15 0 0 1-.1.09Zm1.69 2.07-.22 1.27-.91-.63Zm-2.7.92h-.16l-.06.1.74.5.05-.09c-.07 0-.08-.09-.06-.13s.07-.07.16-.12l.43-.25 1.28.86-.07.52a.43.43 0 0 1 0 .17h-.13l-.07.1.93.62.06-.1-.07-.12a.32.32 0 0 1 0-.14l.37-3a.3.3 0 0 1 0-.1.11.11 0 0 1 .09-.03h.08l.06-.1-.89-.6-.06.1.06.08a.12.12 0 0 1 0 .1l-.1.08-2.5 1.47Zm5.35-.28-.6.65.09.07a.13.13 0 0 1 .12-.05l.1.05.77.71-1.71 1.86a.12.12 0 0 1-.09 0h-.08l-.07.09.69.69.08-.08q-.11-.09 0-.18l1.72-1.89.77.71a.61.61 0 0 1 .07.1s0 .07 0 .13l.09.08.6-.65-.08-.08a.16.16 0 0 1-.23 0l-2.12-1.92-.06-.1a.14.14 0 0 1 0-.13Zm3.22 3.65-2.3 1.77a.1.1 0 0 1-.09 0h-.07l-.09.07 1.8 2.35.09.13s0 .07-.05.12l.07.09.69-.53-.05-.12a.12.12 0 0 1-.13 0 .26.26 0 0 1-.14-.1l-1.32-1.66.69-.53.76 1a.5.5 0 0 1 .09.18c0 .06 0 .11-.11.17l.07.09.78-.6-.07-.09c-.08.06-.14.08-.19.06l-.15-.14-.76-1 .62-.48L44.4 12a.31.31 0 0 1 .09.17.15.15 0 0 1-.06.11l.07.09.67-.51-.07-.09a.1.1 0 0 1-.12 0 .25.25 0 0 1-.15-.13l-1.77-2.28-.05.07a.09.09 0 0 1 0 .08v.07Z" fill="#1e448c" fill-rule="evenodd" />
<path d="m22.19 36.66-3.81-12.07L20.01 26l3.36 10.58Zm7.82-.33h-1.29l-1.53-4.84c.56.38 1.12.73 1.67 1.06Zm.43 0-1.07-3.43c.45.28.95.55 1.46.84l.8 2.57Zm2.41-1.54.48 1.52h-1.22L31.39 34Zm3.35 5.14c-4.46-.36-10.84-.45-19.13-.31q9.09-.42 19.57-.17ZM33.38 35a28.51 28.51 0 0 0 3.27 1.31h-2.86Zm-19.45 5.29a185.1 185.1 0 0 1 21.44.46 18.72 18.72 0 0 1-5.9 3.7 19 19 0 0 1-7.08 1.35 18.76 18.76 0 0 1-8.08-1.8c-.12-.93-.25-2.18-.38-3.71Zm-1.83 2.52c-.05-.74-.1-1.57-.15-2.47h.42c.05 1.08.1 2 .16 2.76Zm-2.34-1.76-.68-.62h.67ZM8.65 38l1.13-6.4v6.22Zm5.06-.6q-.16-2.4-.36-6.29l1.95 6.13Zm4-13.35 4 12.66-1.22.08-4.48-14.43c.59.58 1.16 1.13 1.73 1.64Zm-4.64 1.22 3.7 11.83-1.09.1-2.41-7.8Zm-3.33 4.21L8.22 38l-1.12.16L9.9 22.4q-.06 3.52-.1 7.06Zm-2-5.29L5.7 36.06a14.27 14.27 0 0 1-.69-1.34l1.46-8.31c.45-.73.88-1.47 1.3-2.22Zm2.16-4.27L6.77 37.76c-.3-.41-.56-.81-.79-1.19l2.4-13.5c.63-1.07 1.1-2.15 1.55-3.15Zm1.75-2.06q.3 12.41.58 19.66h-.43q-.33-8.13-.46-20Zm1.36 1.41 5.54 17.64-1.3.11-4.24-13.48-.15-4.37Zm2.32 2.39 4.82 15.12-1.18.09L13.65 20Zm-9.39 5.61-1.21 6.84c-.21-.49-.4-1-.58-1.58l.86-3.8Zm-2.29 3.42.67-1-.46 1.83Zm23 .5 1.64 5.19h-1.23l-2-6.35 1.59 1.11h.06ZM22.34 28l2.67 8.5-1.29.07-3.17-10.08c.58.51 1.17.99 1.79 1.51Zm2.15 1.65 2.17 6.81h-1.19l-2.54-8Zm5.37-20.72a19.18 19.18 0 0 1 11.72 17.68 18.79 18.79 0 0 1-2.12 8.76 46.76 46.76 0 0 1-16.9-7.74A58.69 58.69 0 0 1 12.87 19l-.07-2.51-.6-.27-.55.48v.89l-.32-.39v-1.41h-.82v.48l-.5.13v2.71a40.27 40.27 0 0 1-3.7 6.74 27.42 27.42 0 0 1-2.9 3.54 18.58 18.58 0 0 1-.21-2.78 19.11 19.11 0 0 1 5.62-13.56 19.07 19.07 0 0 1 6.09-4.12 19.26 19.26 0 0 1 15 0Zm-7.46-2.8A20.51 20.51 0 0 0 3.53 18.64a20.53 20.53 0 0 0 0 15.94 20.06 20.06 0 0 0 4.39 6.51 20.38 20.38 0 0 0 6.51 4.39 20.47 20.47 0 0 0 22.64-4.57 1.62 1.62 0 0 0 .4-.42 20.5 20.5 0 0 0 3.8-21.84 20.56 20.56 0 0 0-10.9-10.9 20.18 20.18 0 0 0-7.97-1.62Z" fill="#fcb415" fill-rule="evenodd" />
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-mob-flex__col--auto l-tab-flex__col--auto IID-grid-item-3bd9aa4d CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-cstm-itl-edit="true" class="custom-itl itl custom-itl--logo CID-custom-itl-6a582420 IID-custom-itl-d4ee8af4">
<style>
	.IID-custom-itl-d4ee8af4{max-width:72px;margin:0 auto}.IID-custom-itl-d4ee8af4:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.custom-itl.IID-custom-itl-d4ee8af4 .custom-itl__icon{height:35px}.custom-itl.IID-custom-itl-d4ee8af4 .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-d4ee8af4 .custom-itl__icon img.custom-itl__img{width:auto}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile">
<div class="custom-itl__link custom-itl__link--type--link" data-dl-name="Texas Christian University">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--1289928593--886993-title" class="custom-itl__img" id="svg--1289928593--886993" role="img" viewBox="0 0 83 40.06">
<title id="svg--1289928593--886993-title">Texas Christian University logo</title>
<rect fill="none" height="40.05" width="83" y="0.01" />
<path d="M82.81,8.89c-.51-.24-1-.5-1.53-.73-.77-.35-1.53-.7-2.31-1s-1.63-.66-2.45-1-1.59-.57-2.39-.84-1.5-.5-2.25-.73-1.37-.4-2.06-.6c-.15,0-.22,0-.21.16s0,.52,0,.78c0,2.53,0,5.05,0,7.58a.27.27,0,0,0,.22.31c.59.18,1.18.39,1.77.58a.25.25,0,0,1,.19.28V27.17a.46.46,0,0,1-.09.29c-.34.32-.71.62-1.06.93s-.4.36-.9.18l0,0-2.64-1a.74.74,0,0,1-.4-.32c-.46-.78-.93-1.55-1.4-2.33A1.18,1.18,0,0,1,65,24.3Q65,18.14,65,12v-.33c0-.11,0-.16.17-.13l2.28.58c.23.06.26,0,.26-.21V3.64a.27.27,0,0,0-.27-.31l-.78-.17c-.54-.13-1.07-.27-1.61-.39L63.36,2.4c-.81-.17-1.61-.35-2.42-.51s-1.85-.34-2.78-.5L56.38,1.1l-2-.31c-.2,0-.25,0-.25.2V9.12c0,.15.05.22.2.24.66.09,1.31.2,2,.28.16,0,.21.08.21.25V26.38a.68.68,0,0,0,.08.31c.41.69.83,1.37,1.25,2.06l3.27,5.45c.29.48.3.47.75.6.78.23,1.56.45,2.32.71s1.57.56,2.34.86,1.64.66,2.45,1,1.56.77,2.35,1.14a.27.27,0,0,0,.23,0c.24-.19.47-.4.7-.6l4-3.49,3.54-3.07A.45.45,0,0,0,80,31V17.09c0-.07,0-.15,0-.26L83,18.29c0-.12,0-.17,0-.23V9.15A.29.29,0,0,0,82.81,8.89Z" fill="#652688" transform="translate(0 0.01)" />
<path d="M26.51.69,24.36,1c-1,.16-2.05.3-3.07.48s-2.07.4-3.11.62c-1.19.26-2.38.53-3.56.82-1,.25-2,.54-3,.84-1.16.34-2.33.67-3.48,1C6.7,5.25,5.33,5.73,4,6.25S1.45,7.27.2,7.79a.27.27,0,0,0-.2.29V21.66c0,.14.06.16.18.1.53-.25,1.05-.52,1.59-.75,1.11-.5,2.22-1,3.34-1.47s2-.8,3-1.18A.3.3,0,0,0,8.35,18V13.87c0-.12,0-.2.15-.25s.51-.19.77-.28.25,0,.25.19v15.1a1.41,1.41,0,0,1,0,.29.36.36,0,0,1-.14.21c-.24.12-.5.22-.75.32l-2.4,1a.29.29,0,0,0-.2.3c0,.24,0,.48,0,.72v8.3c0,.27,0,.29.28.16l1.36-.66c.66-.32,1.31-.64,2-.93q1.42-.65,2.88-1.26c.77-.33,1.54-.65,2.32-1s1.66-.64,2.51-.93c1.22-.42,2.44-.81,3.66-1.22a.28.28,0,0,0,.23-.31c0-2.73,0-5.46,0-8.2,0-.38,0-.39-.37-.28-1,.28-1.95.58-2.92.87-.19.06-.23,0-.23-.16V11c0-.11,0-.2.14-.24l.83-.21c.22-.05.23,0,.23.19V14.7c0,.28,0,.29.27.21l.32-.07c1.28-.28,2.55-.58,3.84-.84,1-.21,2.08-.38,3.12-.56.3,0,.3,0,.3-.36V.87C26.76.66,26.75.65,26.51.69Z" fill="#652688" transform="translate(0 0.01)" />
<path d="M52.25,6.63v0l-4-4.19C47.63,1.77,47,1.13,46.39.48a.72.72,0,0,0-.56-.25l-.55,0C44,.13,42.67,0,41.36,0c-1,0-2.09,0-3.13.05s-1.82.11-2.74.14a.85.85,0,0,0-.72.34l-.06.06C33.52,1.82,32.34,3,31.14,4.26c-.82.85-1.66,1.68-2.47,2.53a.76.76,0,0,0-.29.56q0,4.39,0,8.79V25a.57.57,0,0,0,.14.34l3,3.21,3.07,3.24a.44.44,0,0,0,.41.16l1.32-.11c.79,0,1.59-.1,2.39-.11,1.37,0,2.75,0,4.11,0,1,0,2,.17,3,.25a.38.38,0,0,0,.27-.09c.19-.18.36-.37.54-.56l3.43-3.52c.81-.82,1.62-1.65,2.42-2.48a.49.49,0,0,0,.14-.3c0-2,0-4,0-6a.21.21,0,0,0-.22-.25l-1.75-.18-3.47-.4L44.8,18c-.31,0-.31,0-.31.27v3.11a.58.58,0,0,1-.15.35c-.31.34-.66.63-1,1a1.25,1.25,0,0,1-1.34.54s0,0-.08,0l-3.81,0a.31.31,0,0,1-.17-.05c-.39-.4-.77-.8-1.14-1.21a.45.45,0,0,1-.09-.28c0-.34,0-.68,0-1v-10a.5.5,0,0,1,.12-.32c.57-.61,1.16-1.2,1.73-1.8a.55.55,0,0,1,.45-.18h3.07a.6.6,0,0,1,.39.16c.61.59,1.21,1.2,1.82,1.8a.49.49,0,0,1,.16.38c0,.87,0,1.73,0,2.6,0,.16,0,.26.22.27l2.69.25,3,.31,2.05.21c.18,0,.23-.05.23-.23,0-2.15,0-4.3,0-6.45A1.15,1.15,0,0,0,52.25,6.63Z" fill="#652688" transform="translate(0 0.01)" />
<path d="M77.68,34.46a1.59,1.59,0,0,0-1.57,1.75,1.6,1.6,0,0,0,3.2-.14A1.59,1.59,0,0,0,77.68,34.46Zm0,2.92a1.32,1.32,0,0,1,0-2.63A1.3,1.3,0,0,1,79,36.06,1.32,1.32,0,0,1,77.69,37.38Z" fill="#652688" transform="translate(0 0.01)" />
<path d="M78.46,35.62c0-.21-.11-.38-.31-.4a7.6,7.6,0,0,0-1,0s-.1.1-.1.15q0,.75,0,1.5s.08.11.12.16.12-.11.13-.17,0-.29,0-.43,0-.2.1-.22a.21.21,0,0,1,.28.12c.09.18.19.35.28.52s.19.22.41.13c-.14-.25-.27-.5-.4-.75l.18-.09A.46.46,0,0,0,78.46,35.62Zm-.42.2a2.26,2.26,0,0,1-.58,0s-.09-.15-.1-.23a.24.24,0,0,1,.14-.16.64.64,0,0,1,.24,0h0a.74.74,0,0,1,.26,0,.24.24,0,0,1,.15.16C78.16,35.7,78.09,35.82,78,35.82Z" fill="#652688" transform="translate(0 0.01)" />
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--center background--back-size--contain background--back-position-x--left background--back-position-y--bottom background--back-size-mob--auto background--back-position-x-mob--center background--back-position-y-mob--top aem-GridColumn aem-GridColumn--default--12 CID-background-79490109 IID-background-4713640b">
<style>
	.IID-background-4713640b{color:#222;background-color:#f6f5f1;margin:0;padding:76px 0 96px;border-radius:0}@media (min-width: 1488px){.IID-background-4713640b{margin-left:40px;margin-right:40px}.IID-background-4713640b{border-radius:30px 30px 0 0}}@media (max-width: 1229px){.IID-background-4713640b{padding:56px 0 64px}}@media (max-width: 767px){.IID-background-4713640b{padding:64px 0 32px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--mobile" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/bkg-mob.png" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/bkg-mob-png-rendition.webp"></div>
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/stats-bkg-updated.png" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/stats-bkg-updated-png-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid IID-grid-46b4dce5 CID-grid-1659f761">
<style>
	
	@media (max-width: 767px){.IID-grid-46b4dce5{--halfHorizGap:0px;--halfVertGap:16px}}
</style>
<div class="grid__parsys  l-tab-flex--align-items-center  l-flex--justify-content-space-between   l-flex--flex-wrap-nowrap  l-mob-flex--flex-wrap-wrap">
<div class="grid-item l-flex__col--5 l-tab-flex__col--4 l-mob-flex__col--12 IID-grid-item-9cdeb493 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-9cdeb493{padding:0 32px 0 0}@media (min-width: 1488px){.IID-grid-item-9cdeb493{padding-right:32px}}@media (max-width: 767px){.IID-grid-item-9cdeb493{padding:0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-a062f134" data-landscape-orange="title">
<style>
	.IID-custom-text-a062f134{font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif;padding:16px 0 0}@media (max-width: 1229px){.IID-custom-text-a062f134{padding:0}}
	.IID-custom-text-a062f134{font-size:32px;font-weight:500;line-height:1.25;letter-spacing:.16px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-a062f134{font-size:24px;line-height:1.333;letter-spacing:-.08px}}
</style>
<div class="custom-text__wrapper" data-style="h3" data-content-wrapper="true">
<h3>On the reliable, global, and compliant platform</h3>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-tab-flex__col--8 l-mob-flex__col--12 l-flex__col--flex-grow-1 IID-grid-item-4b0b5fd5 CID-grid-item-1e7a19ff" data-landscape-orange="grid-item">
<style>.IID-grid-item-4b0b5fd5{min-width:738px}@media (max-width: 1229px){.IID-grid-item-4b0b5fd5{min-width:0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="grid IID-grid-baef79af CID-grid-1659f761">
<style>
	
	.IID-grid-baef79af{--halfHorizGap:16px;--halfVertGap:0px}@media (max-width: 767px){.IID-grid-baef79af{--halfHorizGap:0px;--halfVertGap:16px}}
</style>
<div class="grid__parsys         ">
<div class="grid-item l-flex__col--4 l-mob-flex__col--12 IID-grid-item-e4cc0509 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth IID-background-e3b8510b CID-background-79490109">
<style>
	.IID-background-e3b8510b{border-color:rgba(156,126,113,.3);border-width:1px;padding:20px;border-style:solid;border-radius:20px}@media (min-width: 1488px){.IID-background-e3b8510b{padding-left:20px;padding-right:20px}.IID-background-e3b8510b{border-radius:20px}}@media (max-width: 1229px){.IID-background-e3b8510b{padding:16px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="custom-text IID-custom-text-836851bc CID-custom-text-e0b1298e" data-landscape-orange="subtitle">
<style>
	.IID-custom-text-836851bc{font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif;margin:0 0 4px}
	.IID-custom-text-836851bc{font-size:45px;font-weight:500;line-height:1.33;letter-spacing:-.24px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-836851bc{font-size:26px;line-height:1.46}}@media (max-width: 767px){.IID-custom-text-836851bc{letter-spacing:-.16px}}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>99.999%</div>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-c7a1cb63">
<style>
	
	.IID-custom-text-c7a1cb63{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-dl-context="item0" data-style="footnote" data-content-wrapper="true">
<div>SLA uptime</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--4 l-mob-flex__col--12 IID-grid-item-d7b420eb CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth IID-background-7559f86d CID-background-79490109">
<style>
	.IID-background-7559f86d{border-color:rgba(156,126,113,.3);border-width:1px;padding:20px;border-style:solid;border-radius:20px}@media (min-width: 1488px){.IID-background-7559f86d{padding-left:20px;padding-right:20px}.IID-background-7559f86d{border-radius:20px}}@media (max-width: 1229px){.IID-background-7559f86d{padding:16px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="custom-text IID-custom-text-62f35b1a CID-custom-text-e0b1298e" data-landscape-orange="subtitle">
<style>
	.IID-custom-text-62f35b1a{font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif;margin:0 0 4px}
	.IID-custom-text-62f35b1a{font-size:45px;font-weight:500;line-height:1.33;letter-spacing:-.24px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-62f35b1a{font-size:26px;line-height:1.46}}@media (max-width: 767px){.IID-custom-text-62f35b1a{letter-spacing:-.16px}}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>11+</div>
</div>
</div>
<div class="custom-text IID-custom-text-abaf3741 CID-custom-text-e0b1298e">
<style>
	
	.IID-custom-text-abaf3741{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-dl-context="item0" data-style="footnote" data-content-wrapper="true">
<div>3rd-Party Compliant Certifications</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--4 l-mob-flex__col--12 CID-grid-item-1e7a19ff IID-grid-item-68feb3a">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-ac2b6cfc">
<style>
	.IID-background-ac2b6cfc{border-color:rgba(156,126,113,.3);border-width:1px;padding:20px;border-style:solid;border-radius:20px}@media (min-width: 1488px){.IID-background-ac2b6cfc{padding-left:20px;padding-right:20px}.IID-background-ac2b6cfc{border-radius:20px}}@media (max-width: 1229px){.IID-background-ac2b6cfc{padding:16px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-290c262b" data-landscape-orange="subtitle">
<style>
	.IID-custom-text-290c262b{font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif;margin:0 0 4px}
	.IID-custom-text-290c262b{font-size:45px;font-weight:500;line-height:1.33;letter-spacing:-.24px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-290c262b{font-size:26px;line-height:1.46}}@media (max-width: 767px){.IID-custom-text-290c262b{letter-spacing:-.16px}}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>46</div>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-f0b62112">
<style>
	
	.IID-custom-text-f0b62112{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-dl-context="item0" data-style="footnote" data-content-wrapper="true">
<div>Countries supported</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-linear-gradient="orange" class="background background--alignment--center aem-GridColumn aem-GridColumn--default--12 CID-background-79490109 IID-background-d754b4a4">
<style>
	.IID-background-d754b4a4{color:#222;background-color:#da5001;margin:0;padding:32px 0;border-radius:0}@media (min-width: 1488px){.IID-background-d754b4a4{margin-left:40px;margin-right:40px}.IID-background-d754b4a4{border-radius:0 0 30px 30px}}
	.IID-background-d754b4a4 > .background__layers > .background__layer--back .background__gradient{background-image:linear-gradient(90deg,#ff7a00 0%,#ff6a02 20%,#da5001 30%)}@media (max-width: 767px){.IID-background-d754b4a4 > .background__layers > .background__layer--back .background__gradient{background-image:linear-gradient(180deg,#ff7a00 0%,#da5001 40%)}}
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--linearGradient ">
<div class="background__gradient"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid IID-grid-fbcd0ffe CID-grid-1659f761">
<style>
	
	@media (max-width: 767px){.IID-grid-fbcd0ffe{--halfHorizGap:0px;--halfVertGap:16px}}
</style>
<div class="grid__parsys l-flex--align-items-center      l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-nowrap l-mob-flex--flex-wrap-wrap">
<div class="grid-item l-flex__col--5 l-tab-flex__col--auto l-mob-flex__col--12 IID-grid-item-fd11f69a CID-grid-item-1e7a19ff">
<style>.IID-grid-item-fd11f69a{padding:0 32px 0 0}@media (min-width: 1488px){.IID-grid-item-fd11f69a{padding-right:32px}}@media (max-width: 1229px){.IID-grid-item-fd11f69a{max-width:276px}.IID-grid-item-fd11f69a:before{display:table-cell;content:'';width:9999px;max-width:100%}}@media (max-width: 767px){.IID-grid-item-fd11f69a{max-width:100%}.IID-grid-item-fd11f69a{padding:0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-4014bcd">
<style>
	
	.IID-custom-text-4014bcd{font-size:16px;font-weight:500;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-dl-context="item0" data-style="custom" data-content-wrapper="true">
<p>Certified and compliant with:</p>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--auto l-tab-flex__col--auto l-mob-flex__col--12 l-flex__col--flex-grow-1 IID-grid-item-ee9ccf60 CID-grid-item-1e7a19ff" data-landscape-orange="grid-item">
<style>.IID-grid-item-ee9ccf60{min-width:738px}@media (max-width: 1229px){.IID-grid-item-ee9ccf60{min-width:0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="grid IID-grid-ddf6f0ba CID-grid-1659f761">
<style>
	
	@media (max-width: 767px){.IID-grid-ddf6f0ba{--halfHorizGap:22px;--halfVertGap:10px}}
</style>
<div class="grid__parsys    l-flex--justify-content-space-between  l-mob-flex--justify-content-flex-start l-flex--flex-wrap-nowrap  l-mob-flex--flex-wrap-wrap">
<div class="grid-item IID-grid-item-9306255e CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image IID-image-2d37c929 CID-image-b4fec0a0">
<style>.IID-image-2d37c929{max-width:76px}.IID-image-2d37c929:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-image-2d37c929{max-width:54px}}@media (max-width: 767px){.IID-image-2d37c929{max-width:48px}}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--451458855--1238395689-title" class="image__img" fill="none" height="39" id="svg--451458855--1238395689" role="img" viewBox="0 0 76 39" width="76">
<title id="svg--451458855--1238395689-title">HiTrust CSF Certified badge</title>
<path d="M4.22902 16.989C4.22902 18.3077 4.23551 19.6263 4.22469 20.945C4.22252 21.3022 4.35028 21.5967 4.55598 21.8717C4.59279 21.9215 4.64692 21.9518 4.69456 21.9821C4.80282 22.0471 4.89159 22.138 4.98253 22.2225C5.05831 22.2917 5.11245 22.387 5.11028 22.5018C5.10812 22.7811 5.11245 23.0583 5.10812 23.3376C5.10595 23.474 5.0345 23.5519 4.89593 23.5736C4.84396 23.5801 4.78983 23.5801 4.73787 23.5801C3.26549 23.5801 1.79528 23.5801 0.322899 23.5801C0.29042 23.5801 0.255771 23.5822 0.223292 23.5801C0.0912115 23.5714 0.011099 23.5043 0.00893375 23.3744C0.00460323 23.0821 0.011099 22.7919 0.00893375 22.4996C0.00893375 22.3957 0.0695541 22.3242 0.123686 22.2549C0.197304 22.164 0.281756 22.0817 0.387854 22.0211C0.543753 21.9301 0.643356 21.7829 0.727801 21.627C0.857717 21.391 0.920513 21.1333 0.920513 20.8692C0.924843 15.2352 0.924841 9.60333 0.918345 3.96932C0.918345 3.63371 0.84256 3.30675 0.619538 3.0296C0.513441 2.89752 0.379192 2.80658 0.251442 2.70265C0.102039 2.58139 -0.00621831 2.44715 0.00027747 2.23928C0.00893851 1.99461 0.000266369 1.74993 0.00243163 1.50309C0.00459689 1.3342 0.0609021 1.28007 0.227627 1.26491C0.266602 1.26058 0.307739 1.26275 0.346714 1.26275C1.82559 1.26275 3.30229 1.26275 4.78116 1.26275C4.80714 1.26275 4.83313 1.26275 4.86127 1.26275C5.05615 1.26708 5.10162 1.31255 5.10378 1.51608C5.10595 1.74127 5.09296 1.96646 5.10812 2.19164C5.12327 2.44065 5.00419 2.60521 4.81581 2.73729C4.70322 2.8174 4.59928 2.90185 4.50834 3.01228C4.33728 3.21798 4.25067 3.44966 4.22469 3.71166C4.21819 3.77661 4.22037 3.84374 4.22037 3.91086C4.22037 6.07829 4.22037 8.24571 4.22037 10.4131C4.22037 10.6946 4.22036 10.6946 4.50834 10.6946C5.42208 10.6946 6.33799 10.6946 7.25173 10.6946C7.30369 10.6946 7.35782 10.6989 7.40979 10.6925C7.50073 10.6838 7.55487 10.6297 7.56353 10.5409C7.57002 10.4889 7.56569 10.4348 7.56569 10.3828C7.56569 8.24138 7.56569 6.1021 7.56569 3.96066C7.56569 3.69433 7.51373 3.43667 7.38814 3.20066C7.3037 3.04043 7.17811 2.91484 7.03087 2.80874C6.97241 2.7676 6.90961 2.73513 6.85548 2.68099C6.70175 2.52943 6.6173 2.36487 6.63896 2.13751C6.65844 1.93398 6.64113 1.72611 6.64329 1.52258C6.64546 1.35586 6.73207 1.27358 6.90096 1.26708C6.92044 1.26708 6.93993 1.26708 6.96158 1.26708C8.45994 1.26708 9.9583 1.26708 11.4545 1.26708C11.4935 1.26708 11.5346 1.26491 11.5736 1.26924C11.671 1.28007 11.736 1.33637 11.7381 1.43597C11.7425 1.74127 11.7533 2.04657 11.7338 2.34971C11.7252 2.49478 11.6212 2.61171 11.5021 2.70481C11.3397 2.8304 11.1882 2.96464 11.0734 3.14003C10.95 3.33274 10.8959 3.5406 10.8612 3.76579C10.8092 4.09707 10.8287 4.42619 10.8287 4.75531C10.8266 10.045 10.8266 15.3326 10.8266 20.6223C10.8266 20.88 10.8547 21.1398 10.9197 21.3845C10.9868 21.6378 11.1254 21.8695 11.3614 22.0146C11.4653 22.0774 11.5519 22.1575 11.6299 22.2419C11.7187 22.3372 11.7814 22.4563 11.7793 22.5992C11.7771 22.8179 11.7771 23.0366 11.7793 23.2553C11.7836 23.4913 11.6234 23.5931 11.4307 23.5887C11.0799 23.5801 10.7291 23.5866 10.3762 23.5866C9.26975 23.5866 8.1633 23.5866 7.05468 23.5866C7.00272 23.5866 6.94859 23.5887 6.89662 23.5866C6.74289 23.5801 6.65194 23.4935 6.64761 23.3419C6.64328 23.0907 6.63895 22.8374 6.64761 22.5862C6.65411 22.3892 6.77321 22.2463 6.91395 22.1207C6.94426 22.0947 6.97457 22.0666 7.00705 22.0492C7.21925 21.9302 7.334 21.7288 7.44876 21.5274C7.47474 21.4819 7.50073 21.43 7.50289 21.3802C7.51372 21.2026 7.56785 21.0316 7.56785 20.8518C7.56568 18.2211 7.56785 15.5903 7.56785 12.9573C7.56785 12.6823 7.56785 12.6823 7.2907 12.6823C6.35531 12.6823 5.42208 12.6823 4.48669 12.6823C4.45421 12.6823 4.41956 12.6802 4.38708 12.6823C4.25067 12.6888 4.22686 12.7105 4.22037 12.8447C4.2182 12.8967 4.22037 12.9508 4.22037 13.0028C4.22903 14.3258 4.22902 15.6574 4.22902 16.989Z" fill="white" />
<path d="M34.4605 17.189C34.4605 18.434 34.4626 19.6812 34.4605 20.9263C34.4605 21.4264 34.6727 21.8118 35.0776 22.0912C35.2724 22.2254 35.3742 22.4008 35.3699 22.6368C35.3677 22.823 35.3699 23.0071 35.3699 23.1933C35.3677 23.4921 35.2638 23.6003 34.965 23.6003C34.2093 23.6003 33.4536 23.6003 32.6979 23.6003C31.9964 23.6003 31.2927 23.6003 30.5911 23.6003C30.5262 23.6003 30.4591 23.6068 30.3941 23.583C30.2772 23.5397 30.2014 23.4574 30.1992 23.3384C30.1949 23.0807 30.1819 22.8209 30.2036 22.5632C30.2187 22.377 30.3183 22.2167 30.4742 22.0998C30.5955 22.011 30.7146 21.9201 30.812 21.801C30.9961 21.5802 31.087 21.3247 31.113 21.0432C31.1238 20.9176 31.1238 20.792 31.1238 20.6664C31.1238 15.145 31.1238 9.62576 31.1238 4.10435C31.1238 3.87267 31.1216 3.64099 31.0394 3.42013C30.9809 3.2599 30.9138 3.10617 30.7925 2.97842C30.6669 2.84417 30.5067 2.75107 30.379 2.61899C30.2685 2.5064 30.1971 2.37864 30.1971 2.21625C30.1971 1.99756 30.1992 1.77887 30.1971 1.56018C30.1971 1.48439 30.2144 1.41727 30.2534 1.35448C30.2902 1.29385 30.3378 1.25487 30.4114 1.25271C30.4721 1.25271 30.5305 1.24838 30.5911 1.24838C32.0094 1.24838 33.4276 1.24838 34.8459 1.24838C35.136 1.24838 35.4305 1.24405 35.7163 1.29602C36.0129 1.35015 36.3139 1.37396 36.6106 1.43892C36.9267 1.50821 37.2277 1.6208 37.5373 1.69875C37.6997 1.73989 37.8491 1.83516 38.0072 1.89579C38.241 1.98457 38.4662 2.09716 38.6654 2.23574C38.8949 2.39164 39.1201 2.56702 39.3215 2.76623C39.551 2.99141 39.7718 3.2231 39.9581 3.48509C40.1096 3.69945 40.2395 3.92681 40.3456 4.16498C40.4799 4.46379 40.612 4.76693 40.6704 5.09171C40.7246 5.39702 40.8155 5.69149 40.8242 6.00762C40.8328 6.30209 40.9043 6.5944 40.8891 6.89104C40.8761 7.13355 40.8436 7.3739 40.822 7.61641C40.8155 7.68786 40.8155 7.76148 40.8112 7.8351C40.783 8.17071 40.7137 8.49767 40.6011 8.81379C40.5881 8.8506 40.5816 8.89174 40.5795 8.93072C40.5773 9.00434 40.5557 9.06713 40.5145 9.13425C40.4517 9.23818 40.4279 9.36377 40.3803 9.47853C40.2807 9.71671 40.1638 9.94839 40.0273 10.1628C39.9061 10.3533 39.761 10.5373 39.6159 10.7171C39.3518 11.044 39.0205 11.2844 38.6935 11.5355C38.4835 11.6958 38.2605 11.843 38.0288 11.9534C37.7538 12.0855 37.4767 12.2327 37.1757 12.3129C37.1627 12.3172 37.1497 12.3172 37.1367 12.3193C37.0826 12.3367 37.009 12.3388 37.0046 12.4146C37.0003 12.4882 37.0631 12.4991 37.1172 12.5294C37.3056 12.6355 37.4918 12.7459 37.6694 12.8693C37.8664 13.0101 38.0743 13.1357 38.254 13.3002C38.6372 13.651 38.9534 14.0537 39.1591 14.5257C39.2673 14.7748 39.3626 15.0346 39.4427 15.3009C39.551 15.6625 39.6224 16.0306 39.7177 16.3922C39.7935 16.678 39.8584 16.966 39.9126 17.2583C39.958 17.4965 40.0317 17.7303 40.0728 17.9707C40.1031 18.1439 40.1464 18.3171 40.1897 18.4882C40.2612 18.7697 40.3088 19.0555 40.3911 19.3326C40.4561 19.5513 40.482 19.7787 40.5557 19.9995C40.625 20.2074 40.6423 20.4369 40.6986 20.6534C40.7635 20.9003 40.8306 21.1493 40.9259 21.3875C41.0212 21.6278 41.1987 21.8183 41.4001 21.9764C41.4824 22.0414 41.556 22.1171 41.6513 22.1669C41.7379 22.2124 41.779 22.2925 41.7769 22.3965C41.7725 22.7148 41.7769 23.033 41.7725 23.3513C41.7704 23.5072 41.7054 23.5765 41.5538 23.6003C41.5214 23.6047 41.4867 23.6025 41.4542 23.6025C40.5253 23.6025 39.5986 23.6025 38.6697 23.6047C38.5333 23.6047 38.4099 23.5744 38.2995 23.4921C38.2172 23.4315 38.1566 23.3622 38.1284 23.2582C38.0418 22.9551 37.9638 22.6498 37.8859 22.3423C37.8361 22.1388 37.7776 21.9353 37.73 21.7339C37.6737 21.4914 37.6044 21.2489 37.5503 21.0064C37.4593 20.6036 37.3597 20.2031 37.2601 19.8025C37.2038 19.5795 37.1389 19.3564 37.0891 19.1334C37.009 18.7805 36.9115 18.4319 36.8249 18.0811C36.7708 17.8646 36.734 17.6459 36.6625 17.4315C36.6019 17.2518 36.5738 17.0613 36.524 16.8772C36.4612 16.6434 36.4049 16.4074 36.3442 16.1735C36.2879 15.957 36.2468 15.7383 36.1927 15.5196C36.1212 15.2338 36.0714 14.9415 35.9718 14.6665C35.8571 14.346 35.7575 14.0169 35.5626 13.7289C35.4197 13.5146 35.2443 13.3543 34.9996 13.2634C34.8913 13.2223 34.7939 13.1551 34.6705 13.1508C34.4713 13.1421 34.4496 13.1681 34.4518 13.3543C34.4561 14.123 34.454 14.8917 34.454 15.6603C34.4605 16.1692 34.4605 16.6802 34.4605 17.189ZM34.4605 7.17902C34.4605 8.49117 34.4605 9.80332 34.4605 11.1155C34.4605 11.1674 34.4561 11.2216 34.4626 11.2735C34.4713 11.3471 34.5297 11.3991 34.5947 11.3948C34.7766 11.3818 34.9606 11.3926 35.1404 11.3558C35.4262 11.2995 35.7012 11.2172 35.961 11.0852C36.1212 11.0029 36.262 10.8946 36.4005 10.782C36.5911 10.6283 36.76 10.4464 36.8747 10.2299C36.9592 10.0675 37.0393 9.90075 37.1086 9.7297C37.154 9.61927 37.1735 9.50451 37.2082 9.39192C37.3143 9.05197 37.3836 8.70337 37.4052 8.3461C37.4095 8.28114 37.4074 8.21402 37.4182 8.14906C37.4485 7.96068 37.4853 7.7723 37.4788 7.5796C37.4658 7.07726 37.5156 6.57492 37.4464 6.07258C37.416 5.85172 37.4139 5.62437 37.3814 5.40351C37.3338 5.07872 37.2688 4.7561 37.1497 4.44647C37.0544 4.19963 36.9462 3.95712 36.7535 3.76658C36.643 3.65615 36.5131 3.56521 36.394 3.4656C36.2251 3.32703 36.0346 3.24475 35.8376 3.17546C35.5907 3.09102 35.3331 3.04121 35.0754 2.99791C34.9238 2.97193 34.7723 2.96976 34.6229 2.96759C34.5146 2.96759 34.4778 3.00007 34.4648 3.09967C34.4583 3.14515 34.4626 3.19278 34.4626 3.23825C34.4605 4.55473 34.4605 5.86688 34.4605 7.17902Z" fill="white" />
<path d="M50.6044 11.419C50.6044 8.88136 50.6044 6.34154 50.6044 3.80389C50.6044 3.39466 50.4355 3.07421 50.1172 2.82521C50.0501 2.77324 49.9851 2.71695 49.918 2.66065C49.7513 2.52424 49.6972 2.33803 49.6928 2.13233C49.6885 1.95912 49.6907 1.78806 49.6928 1.61484C49.6928 1.57587 49.6928 1.53473 49.6993 1.49576C49.7383 1.30955 49.8054 1.25325 49.9981 1.25108C50.455 1.24892 50.9119 1.25108 51.3709 1.25108C51.988 1.25108 52.6029 1.25108 53.22 1.25108C53.272 1.25108 53.3261 1.24892 53.3781 1.25325C53.521 1.26191 53.5838 1.32037 53.5859 1.46111C53.5903 1.74043 53.5859 2.01758 53.5881 2.29689C53.5881 2.4268 53.5015 2.51558 53.4279 2.60435C53.3629 2.68447 53.2806 2.75592 53.1962 2.81438C52.906 3.01358 52.7588 3.29073 52.7047 3.63284C52.683 3.77141 52.6765 3.90782 52.6765 4.0464C52.6765 8.88569 52.6787 13.7228 52.6744 18.5621C52.6744 19.0558 52.6332 19.5516 52.5315 20.0366C52.46 20.3766 52.3561 20.7057 52.237 21.0326C52.1352 21.312 51.9793 21.561 51.8516 21.823C51.7585 22.0113 51.5961 22.1672 51.4597 22.3361C51.1804 22.6847 50.8361 22.9575 50.4702 23.2065C50.3056 23.317 50.1259 23.3971 49.9483 23.4837C49.6733 23.6179 49.3789 23.6807 49.0909 23.7717C48.9307 23.8215 48.7639 23.815 48.6015 23.8323C48.385 23.8539 48.1707 23.8951 47.952 23.8972C47.7311 23.8994 47.5168 23.8626 47.3024 23.8345C47.1595 23.815 47.0144 23.815 46.8715 23.7825C46.419 23.6807 45.9881 23.5357 45.581 23.3105C44.9834 22.9792 44.5028 22.5245 44.0914 21.9897C43.8662 21.6952 43.6865 21.3726 43.55 21.0326C43.353 20.5455 43.2296 20.0345 43.1711 19.5083C43.1343 19.1576 43.1257 18.809 43.1257 18.4582C43.1257 13.6124 43.1235 8.76877 43.1278 3.92298C43.1278 3.60036 43.0412 3.31455 42.8658 3.05256C42.777 2.91831 42.6341 2.83603 42.5086 2.74293C42.3094 2.59353 42.2033 2.40948 42.2119 2.15615C42.2206 1.93097 42.2119 1.70578 42.2163 1.4806C42.2184 1.35718 42.2964 1.2749 42.4198 1.25974C42.4718 1.25325 42.5259 1.25541 42.5778 1.25541C44.0632 1.25541 45.5464 1.25325 47.0317 1.25541C47.3176 1.25541 47.3782 1.20561 47.3825 1.59752C47.3847 1.79023 47.3825 1.98293 47.3825 2.17347C47.3825 2.42464 47.2504 2.59569 47.0599 2.74509C46.7091 3.01791 46.471 3.35136 46.4731 3.82771C46.4775 8.95714 46.4753 14.0887 46.4796 19.2182C46.4796 19.5062 46.5099 19.7941 46.5749 20.0821C46.616 20.264 46.668 20.4394 46.7329 20.6083C46.8066 20.7988 46.8823 20.9937 47.0188 21.1582C47.1855 21.3596 47.3717 21.5371 47.6055 21.6497C47.8264 21.7558 48.0602 21.8186 48.3092 21.8208C48.5149 21.823 48.7185 21.8165 48.922 21.784C49.0671 21.7623 49.2035 21.7017 49.3312 21.6389C49.6798 21.4635 49.9592 21.2037 50.1302 20.8486C50.2298 20.6386 50.3359 20.4307 50.3987 20.199C50.481 19.8937 50.5221 19.5819 50.5871 19.2745C50.6152 19.1402 50.6109 18.9973 50.6109 18.8587C50.6044 16.3774 50.6044 13.8982 50.6044 11.419Z" fill="white" />
<path d="M25.7437 12.1206C25.7437 15.0762 25.7458 18.0339 25.7415 20.9895C25.7415 21.3251 25.8325 21.6153 26.0663 21.8556C26.1529 21.9444 26.2525 22.0202 26.3521 22.096C26.5232 22.2259 26.6336 22.384 26.6293 22.6113C26.6249 22.8235 26.6293 23.0357 26.6271 23.2479C26.6249 23.4947 26.5253 23.5922 26.2763 23.6052C26.2438 23.6073 26.2092 23.6052 26.1767 23.6052C24.739 23.6052 23.2991 23.6052 21.8614 23.6052C21.8224 23.6052 21.7813 23.6073 21.7423 23.6052C21.5886 23.5943 21.502 23.5207 21.4695 23.3692C21.4673 23.3562 21.4608 23.3432 21.4608 23.3302C21.4652 23.0465 21.4348 22.7607 21.4803 22.4771C21.4955 22.3861 21.5366 22.319 21.5929 22.254C21.699 22.135 21.8268 22.0418 21.948 21.9379C22.21 21.7106 22.3421 21.4204 22.3616 21.0761C22.3637 21.0437 22.3616 21.009 22.3616 20.9765C22.3616 15.0567 22.3616 9.13897 22.3616 3.21911C22.3616 3.15848 22.3659 3.10002 22.3594 3.03939C22.3507 2.94845 22.2966 2.89432 22.2035 2.89432C21.9004 2.89215 21.5929 2.86401 21.2984 2.96794C21.0971 3.03939 20.9195 3.15415 20.7853 3.32088C20.6186 3.52875 20.5254 3.77559 20.4583 4.03325C20.428 4.15451 20.3782 4.27143 20.3522 4.39269C20.2764 4.73264 20.1812 5.06826 20.1595 5.41903C20.1509 5.55544 20.0967 5.68752 20.0707 5.82394C20.0513 5.92137 20.0015 5.97551 19.904 5.99499C19.5879 6.05129 19.2718 6.04696 18.96 5.97551C18.8712 5.95602 18.8127 5.89539 18.7824 5.80445C18.7564 5.72866 18.7456 5.65071 18.7456 5.5706C18.7456 4.18482 18.7456 2.79905 18.7456 1.41544C18.7456 1.32016 18.7673 1.23139 18.8019 1.14694C18.856 1.01486 18.9383 0.926085 19.0985 0.939077C19.2891 0.956399 19.4796 0.941242 19.6702 0.962895C19.8499 0.984548 20.0253 1.03002 20.2071 1.04301C20.3912 1.056 20.5709 1.09931 20.7528 1.12962C20.9217 1.15777 21.0949 1.14261 21.266 1.17293C21.8094 1.27253 22.3594 1.25088 22.9072 1.25088C24.1068 1.25088 25.3063 1.24871 26.5058 1.25304C26.8176 1.25521 27.1251 1.22922 27.4304 1.1686C27.727 1.11013 28.028 1.06899 28.3268 1.02785C28.4069 1.01703 28.4827 0.982383 28.5563 0.980218C28.7447 0.973722 28.9309 0.915258 29.1215 0.943407C29.2622 0.96506 29.364 1.09065 29.3705 1.23572C29.3726 1.27469 29.3705 1.31583 29.3705 1.35481C29.3705 2.76007 29.3705 4.16534 29.3705 5.5706C29.3705 5.62257 29.3726 5.6767 29.3683 5.72866C29.3575 5.86508 29.2903 5.96035 29.1604 5.98633C28.8595 6.04912 28.5563 6.05129 28.2554 5.98417C28.1103 5.95169 28.0453 5.83693 28.0172 5.69835C27.9587 5.41037 27.9024 5.12239 27.8418 4.83657C27.7963 4.62437 27.753 4.41218 27.6967 4.20431C27.6144 3.89901 27.5192 3.59587 27.3503 3.32737C27.2182 3.11951 27.0147 3.00258 26.7592 2.94629C26.482 2.88349 26.207 2.89865 25.932 2.89215C25.7697 2.88999 25.748 2.91381 25.7415 3.07187C25.7394 3.12384 25.7415 3.17797 25.7415 3.22994C25.7437 6.1942 25.7437 9.15846 25.7437 12.1206Z" fill="white" />
<path d="M54.9089 20.4731C54.9089 19.5658 54.9111 18.6564 54.9068 17.7491C54.9068 17.6041 54.9371 17.4763 55.0215 17.3572C55.0605 17.3031 55.106 17.2728 55.1644 17.2598C55.4654 17.2035 55.7664 17.1927 56.0673 17.2663C56.2211 17.3031 56.2557 17.4244 56.286 17.5434C56.351 17.7968 56.3705 18.0609 56.4225 18.3164C56.4961 18.6824 56.5286 19.0591 56.626 19.4186C56.6736 19.594 56.7039 19.778 56.7797 19.9469C56.8209 20.0357 56.8339 20.1374 56.8685 20.2305C56.9659 20.4925 57.0894 20.7437 57.2149 20.9949C57.36 21.2872 57.5441 21.5449 57.7801 21.7636C58.0637 22.0256 58.3928 22.2334 58.7783 22.2876C59.2135 22.3503 59.6595 22.333 60.0536 22.1165C60.3676 21.9433 60.6491 21.7181 60.8396 21.3933C60.9262 21.2482 61.0323 21.1075 61.0951 20.9559C61.199 20.7047 61.3441 20.4644 61.3571 20.1807C61.3593 20.1353 61.3852 20.0941 61.3982 20.0487C61.4177 19.9859 61.4437 19.9231 61.4524 19.8581C61.4935 19.4705 61.5217 19.0786 61.4892 18.691C61.4675 18.4377 61.4372 18.1844 61.3744 17.931C61.2835 17.5673 61.1817 17.2078 61.0215 16.87C60.8829 16.5821 60.7443 16.2919 60.5473 16.0343C60.3827 15.8221 60.242 15.5925 60.0753 15.3803C59.876 15.127 59.666 14.8845 59.469 14.6312C59.2828 14.393 59.0749 14.17 58.8757 13.9448C58.6873 13.7347 58.5011 13.5225 58.3062 13.3212C58.1287 13.1371 57.9403 12.9596 57.7757 12.7625C57.622 12.5763 57.4423 12.4118 57.2756 12.2364C57.1673 12.1216 57.0569 12.0112 56.9638 11.8834C56.8512 11.7297 56.7213 11.5911 56.6022 11.4417C56.3857 11.1711 56.1605 10.9069 55.9656 10.6167C55.8638 10.4652 55.7772 10.3049 55.6733 10.1555C55.5693 10.0083 55.5174 9.82642 55.4416 9.66186C55.3225 9.40419 55.2207 9.14003 55.119 8.87803C55.0323 8.65717 54.9782 8.42765 54.9241 8.20247C54.8527 7.90366 54.8201 7.59402 54.7898 7.28872C54.7617 6.99208 54.7357 6.6976 54.7444 6.39879C54.753 6.15412 54.792 5.91377 54.8028 5.6691C54.8072 5.59764 54.818 5.52619 54.8201 5.45257C54.831 5.2014 54.9024 4.96105 54.9522 4.71638C54.9977 4.49119 55.0713 4.2725 55.1471 4.0538C55.2034 3.89141 55.2749 3.73551 55.3507 3.58178C55.4524 3.37607 55.5412 3.15955 55.6754 2.9755C55.8075 2.79578 55.9353 2.61173 56.0782 2.44068C56.299 2.17868 56.5459 1.94267 56.823 1.74129C57.1825 1.48363 57.5679 1.27576 57.9988 1.17832C58.3517 1.09821 58.7133 1.01593 59.0771 1.0679C59.4148 1.11553 59.7526 1.16533 60.0753 1.29525C60.3308 1.39702 60.5776 1.51611 60.8266 1.63303C61.0193 1.72397 61.2099 1.73263 61.4112 1.61787C61.552 1.53776 61.7122 1.48579 61.8832 1.49445C62.0608 1.50312 62.2405 1.49662 62.4203 1.49662C62.6996 1.49662 62.8252 1.66984 62.8252 1.89936C62.8187 3.49083 62.823 5.08014 62.823 6.67162C62.823 6.7041 62.8251 6.73874 62.8187 6.77122C62.7862 6.94011 62.6974 7.02239 62.522 7.02672C62.2838 7.03322 62.0456 7.02456 61.8053 7.02889C61.6797 7.03105 61.6061 6.93362 61.5 6.89681C61.487 6.89248 61.4719 6.86649 61.4719 6.84917C61.461 6.68245 61.3896 6.53088 61.3463 6.37281C61.2445 6.00471 61.1925 5.62579 61.0821 5.25986C60.9782 4.91342 60.8742 4.56698 60.7292 4.23569C60.6447 4.04081 60.5841 3.82862 60.4195 3.67705C60.3827 3.6424 60.4 3.58611 60.3719 3.5493C60.2008 3.32411 60.0125 3.11191 59.7786 2.95385C59.5448 2.79362 59.2828 2.73299 58.9948 2.72649C58.6224 2.71783 58.3062 2.84342 58.0291 3.06861C57.8515 3.21368 57.7043 3.3934 57.5895 3.59477C57.3449 4.02782 57.2041 4.48686 57.2128 4.9892C57.2171 5.301 57.2518 5.60414 57.3232 5.90728C57.4098 6.27971 57.5441 6.63481 57.7086 6.97476C57.9057 7.38399 58.1612 7.76292 58.4427 8.12235C58.7869 8.56407 59.1507 8.98629 59.5274 9.39769C59.8695 9.77012 60.2312 10.1252 60.5754 10.4955C60.8223 10.7597 61.054 11.039 61.2986 11.3053C61.5303 11.5565 61.7317 11.8293 61.946 12.0956C62.1864 12.3944 62.4094 12.7041 62.6173 13.0245C62.7299 13.2021 62.8273 13.3883 62.9464 13.5593C63.1196 13.8062 63.1932 14.105 63.3794 14.3453C63.4422 14.681 63.6458 14.9689 63.7042 15.3089C63.7454 15.5471 63.8277 15.7809 63.8948 16.0148C63.9078 16.0602 63.9229 16.1014 63.9208 16.149C63.9164 16.2464 63.9316 16.3439 63.9598 16.4392C63.9987 16.5647 63.9922 16.7012 64.0139 16.8289C64.0702 17.1364 64.0095 17.4503 64.0788 17.7556C64.0832 17.7751 64.0853 17.7946 64.0832 17.8141C64.0312 18.2082 64.0702 18.6109 63.9965 18.9985C63.9467 19.2605 63.9468 19.5355 63.8428 19.791C63.78 19.9469 63.7627 20.1223 63.7086 20.2847C63.5873 20.6528 63.4444 21.01 63.2625 21.3543C63.0806 21.6986 62.8316 21.9974 62.6021 22.3092C62.4571 22.5062 62.2492 22.634 62.1106 22.8375C62.0543 22.922 61.9374 22.9718 61.8508 23.0411C61.5303 23.2901 61.186 23.5066 60.8136 23.6712C60.6945 23.7231 60.5646 23.7621 60.4369 23.7924C60.1944 23.8509 59.9583 23.9288 59.7028 23.9397C59.5058 23.9483 59.3066 23.9808 59.1117 23.9635C58.8172 23.9375 58.5206 23.9288 58.2304 23.8465C58.0399 23.7924 57.8537 23.7275 57.6588 23.6907C57.557 23.6712 57.4596 23.6235 57.3665 23.5824C57.2279 23.5196 57.0807 23.4828 56.9421 23.42C56.7581 23.3399 56.561 23.3182 56.3748 23.4308C56.3575 23.4416 56.3402 23.4503 56.3229 23.459C56.1496 23.5651 55.9678 23.6235 55.7577 23.604C55.6062 23.591 55.4524 23.6019 55.3009 23.6019C55.0302 23.5997 54.9133 23.4828 54.9133 23.2143C54.9068 22.3027 54.9089 21.3868 54.9089 20.4731Z" fill="white" />
<path d="M71.7282 12.0602C71.7282 15.0093 71.7282 17.9584 71.7282 20.9075C71.7282 21.1153 71.7585 21.3145 71.8451 21.5051C71.9144 21.6567 72.0032 21.7909 72.1331 21.897C72.2197 21.9663 72.3042 22.0377 72.3929 22.1049C72.551 22.2283 72.6463 22.3842 72.6398 22.5964C72.6333 22.8216 72.6311 23.0468 72.6398 23.2719C72.6485 23.4755 72.5489 23.5599 72.3453 23.5989C72.3063 23.6054 72.2652 23.6011 72.2262 23.6011C70.7625 23.6011 69.2966 23.6011 67.8329 23.6011C67.8004 23.6011 67.7658 23.6032 67.7333 23.5989C67.5709 23.5816 67.4757 23.4755 67.4735 23.3109C67.4713 23.0987 67.4821 22.8865 67.4713 22.6743C67.4562 22.4058 67.5926 22.2218 67.7874 22.0746C67.978 21.9273 68.1599 21.7757 68.253 21.5484C68.3201 21.386 68.3699 21.2193 68.3699 21.0352C68.4132 15.0981 68.3742 9.16311 68.3872 3.22598C68.3872 3.17401 68.3915 3.11988 68.3851 3.06791C68.3721 2.97697 68.2876 2.89253 68.2032 2.89253C67.9325 2.89469 67.6597 2.86654 67.3934 2.94016C67.0816 3.02677 66.8456 3.19566 66.6962 3.49663C66.6355 3.61789 66.5944 3.7478 66.5208 3.86473C66.4515 3.97732 66.4493 4.1159 66.4017 4.24148C66.3519 4.36923 66.3259 4.50781 66.3042 4.64422C66.2566 4.94952 66.1548 5.24616 66.1462 5.55796C66.144 5.60993 66.118 5.65973 66.1094 5.71169C66.0617 6.00833 66.0444 5.98235 65.7824 6.01699C65.5291 6.05164 65.2671 6.04731 65.0116 5.98668C64.8838 5.95637 64.8037 5.88491 64.7734 5.75283C64.7583 5.68787 64.7539 5.62292 64.7539 5.55579C64.7539 4.18952 64.7539 2.8254 64.7539 1.45912C64.7539 1.38551 64.7561 1.31405 64.7647 1.24043C64.7864 1.05855 64.9098 0.943793 65.0917 0.939463C65.3818 0.932967 65.6677 0.965445 65.9556 1.00442C66.3216 1.05206 66.6832 1.13 67.0534 1.15166C67.3219 1.16681 67.5882 1.21662 67.8567 1.24693C67.9152 1.25342 67.9758 1.25126 68.0364 1.25126C69.6279 1.25126 71.2172 1.25126 72.8087 1.25342C72.9299 1.25342 73.049 1.24476 73.1638 1.21878C73.428 1.16032 73.6986 1.15382 73.9606 1.07804C74.0797 1.04339 74.2074 1.03906 74.3308 1.02824C74.4304 1.01958 74.5257 0.987098 74.621 0.978437C74.8007 0.961115 74.9826 0.915645 75.1667 0.945958C75.2857 0.965445 75.3355 1.06288 75.3788 1.15815C75.4092 1.22528 75.4113 1.2989 75.4113 1.37251C75.4113 2.75828 75.4092 4.14188 75.4113 5.52765C75.4113 5.60776 75.4005 5.68571 75.381 5.76366C75.3485 5.89357 75.2857 5.98235 75.1298 5.99967C74.8592 6.03215 74.5929 6.03865 74.3222 5.99751C74.1447 5.96936 74.0624 5.8546 74.0407 5.70953C74.0082 5.48001 73.9433 5.25699 73.8957 5.0318C73.8545 4.83693 73.8393 4.63339 73.7722 4.44285C73.7073 4.25664 73.6639 4.06176 73.6055 3.87339C73.547 3.68501 73.4669 3.50096 73.3673 3.32991C73.2655 3.15452 73.101 3.0311 72.9061 2.97697C72.7307 2.92933 72.551 2.87953 72.3648 2.89036C72.2132 2.89686 72.0595 2.88819 71.9079 2.89253C71.7802 2.89469 71.7326 2.94449 71.7261 3.07441C71.7239 3.12637 71.7261 3.1805 71.7261 3.23247C71.7282 6.17506 71.7282 9.11764 71.7282 12.0602Z" fill="white" />
<path d="M13.6615 12.3957C13.6615 9.55914 13.6593 6.72262 13.6636 3.8861C13.6636 3.52016 13.564 3.20403 13.3193 2.93121C13.2479 2.85109 13.157 2.79696 13.0704 2.7385C12.8798 2.60641 12.7629 2.44402 12.7759 2.19501C12.791 1.95683 12.778 1.71865 12.7802 1.48047C12.7824 1.35704 12.8603 1.27693 12.9859 1.26394C13.0249 1.25961 13.066 1.26177 13.105 1.26177C14.5968 1.26177 16.0865 1.26177 17.5784 1.26177C17.6173 1.26177 17.6585 1.25961 17.6974 1.26394C17.823 1.27693 17.9075 1.3787 17.8923 1.50861C17.8663 1.7338 17.8685 1.95899 17.8858 2.18202C17.9031 2.40937 17.7905 2.55878 17.6411 2.69086C17.5156 2.80345 17.3705 2.89656 17.2644 3.03514C17.154 3.17805 17.0825 3.33395 17.0349 3.50934C16.9743 3.7237 16.9613 3.9359 16.9613 4.15459C16.9634 9.69555 16.9634 15.2365 16.9613 20.7753C16.9613 21.1348 17.0392 21.4704 17.2428 21.767C17.3077 21.8623 17.4008 21.9424 17.4939 22.0139C17.574 22.0745 17.652 22.1329 17.7213 22.2044C17.836 22.3257 17.9053 22.4556 17.888 22.6396C17.8663 22.8562 17.8793 23.077 17.8837 23.2957C17.8858 23.4538 17.8035 23.562 17.652 23.5815C17.613 23.5859 17.5719 23.5837 17.5329 23.5837C16.054 23.5837 14.5774 23.5837 13.0985 23.5837C13.0595 23.5837 13.0184 23.5859 12.9794 23.5815C12.8538 23.5642 12.7802 23.4841 12.7802 23.3563C12.778 23.077 12.7802 22.7999 12.7802 22.5205C12.7802 22.4534 12.7975 22.3949 12.8387 22.3365C12.9015 22.2499 12.9686 22.1719 13.0552 22.107C13.4817 21.7887 13.6723 21.3794 13.6701 20.8316C13.6528 18.2939 13.6615 15.754 13.6615 13.2163C13.6615 12.9392 13.6615 12.6663 13.6615 12.3957Z" fill="white" />
<path d="M12.8551 31.2478C12.5563 31.2478 12.2596 31.25 11.9608 31.2478C11.8136 31.2478 11.8093 31.2392 11.7876 31.0963C11.7616 30.9274 11.7486 30.7542 11.701 30.5896C11.6036 30.2475 11.3935 30.0137 11.0125 29.9725C10.7656 29.9466 10.5275 29.9834 10.3109 30.1241C10.2286 30.1782 10.1832 30.2518 10.1334 30.3255C9.88004 30.7 9.89086 31.0963 10.0706 31.486C10.1507 31.657 10.3044 31.7848 10.4538 31.906C10.6942 32.0987 10.98 32.2027 11.2571 32.3196C11.6988 32.5058 12.1622 32.6444 12.5931 32.8587C12.998 33.0601 13.3661 33.3091 13.6411 33.675C13.8706 33.9803 14.0113 34.3224 14.0633 34.7056C14.1023 34.9892 14.1088 35.2729 14.0936 35.5565C14.0785 35.838 14.0503 36.1173 13.9594 36.3901C13.8944 36.585 13.8273 36.7733 13.7255 36.9509C13.5631 37.2345 13.3444 37.4662 13.0781 37.6524C12.8941 37.7801 12.6992 37.8884 12.487 37.9577C12.2835 38.0248 12.0734 38.0746 11.8612 38.1201C11.3113 38.237 10.7548 38.1894 10.2027 38.1915C10.0489 38.1915 9.89303 38.1266 9.73713 38.1136C9.54659 38.0984 9.3712 38.0161 9.18066 37.9967C9.16117 37.9945 9.14168 37.9902 9.12436 37.9793C8.87103 37.8451 8.59605 37.7498 8.37736 37.5528C8.12619 37.3255 7.91832 37.0743 7.80573 36.7452C7.69963 36.4356 7.64983 36.1216 7.65199 35.7968C7.65416 35.6648 7.64983 35.5327 7.65199 35.3985C7.65416 35.2339 7.66716 35.2209 7.83605 35.2187C8.06773 35.2166 8.2994 35.2187 8.53108 35.2187C8.88835 35.2187 9.24779 35.2166 9.60505 35.2187C9.7826 35.2187 9.80426 35.2339 9.79559 35.4114C9.78693 35.6041 9.81725 35.7968 9.84756 35.9809C9.90169 36.31 10.129 36.6759 10.5707 36.7452C10.7808 36.7798 10.9865 36.7733 11.1749 36.717C11.5429 36.6088 11.7855 36.323 11.8266 35.9094C11.8418 35.7514 11.8353 35.5912 11.8266 35.4331C11.8136 35.156 11.6512 34.9568 11.4585 34.7792C11.2939 34.6255 11.0947 34.5259 10.889 34.4371C10.6552 34.3354 10.417 34.2358 10.181 34.1405C10.0727 34.0972 9.95799 34.0755 9.84756 34.0257C9.59422 33.911 9.32789 33.8222 9.08322 33.688C8.75194 33.5083 8.44447 33.2939 8.22145 32.9843C8.03091 32.718 7.87717 32.4387 7.79706 32.1074C7.68014 31.6332 7.74294 31.159 7.72778 30.687C7.80357 30.4099 7.85769 30.1263 8.00276 29.8708C8.12402 29.6586 8.24527 29.4486 8.43364 29.2927C8.70214 29.0718 8.98146 28.8748 9.3214 28.7622C9.51628 28.6972 9.71764 28.6691 9.90818 28.5977C10.0273 28.5522 10.168 28.5543 10.3001 28.55C10.6509 28.537 11.0016 28.5305 11.3524 28.55C11.701 28.5695 12.0388 28.6496 12.3744 28.7535C12.5649 28.8142 12.7425 28.9008 12.9071 29.0004C13.0933 29.1151 13.2708 29.2537 13.4137 29.4334C13.5718 29.6304 13.706 29.8405 13.7796 30.0808C13.8836 30.4207 13.9594 30.7693 13.929 31.1309C13.9204 31.2262 13.8987 31.2478 13.784 31.2478C13.4765 31.25 13.1647 31.2478 12.8551 31.2478Z" fill="white" />
<path d="M75.3877 33.3741C75.3877 34.8443 75.3877 36.3166 75.3877 37.7868C75.3877 38.038 75.392 38.012 75.1625 38.0141C74.6191 38.0141 74.0756 38.0141 73.5321 38.0141C73.4866 38.0141 73.439 38.0141 73.3935 38.0141C73.3372 38.0141 73.3091 37.9838 73.3091 37.9297C73.3069 37.8561 73.3091 37.7846 73.3069 37.711C73.3047 37.6461 73.3199 37.5724 73.2961 37.514C73.2701 37.4447 73.3177 37.3278 73.2225 37.3104C73.1488 37.2975 73.1575 37.4122 73.1229 37.4642C72.9583 37.7045 72.7764 37.9275 72.4993 38.0423C72.3066 38.1224 72.1117 38.2068 71.8952 38.2025C71.7761 38.2003 71.657 38.1982 71.5379 38.2025C71.2261 38.2155 70.9381 38.1311 70.6653 37.9925C70.3081 37.8106 70.0634 37.5205 69.8793 37.1632C69.7213 36.8558 69.6433 36.5245 69.5481 36.1997C69.5091 36.0611 69.5286 35.9117 69.5004 35.7688C69.364 35.089 69.4311 34.4004 69.4268 33.714C69.4247 33.4997 69.4788 33.2853 69.5048 33.071C69.5394 32.809 69.5719 32.5492 69.652 32.2958C69.7256 32.0663 69.8057 31.839 69.927 31.6246C70.0136 31.4709 70.1305 31.3518 70.2496 31.2306C70.4596 31.0162 70.7216 30.9036 71.0118 30.8495C71.3582 30.7867 71.709 30.7759 72.0533 30.8495C72.4733 30.9404 72.8197 31.1526 73.0449 31.5315C73.0514 31.5423 73.0557 31.5553 73.0644 31.5662C73.0861 31.5921 73.1142 31.6095 73.151 31.5986C73.1813 31.59 73.1943 31.5662 73.1965 31.5402C73.2051 31.4276 73.2355 31.3215 73.2355 31.2067C73.2311 30.4576 73.2333 29.7084 73.2333 28.9614C73.2333 28.7059 73.2333 28.7059 73.4823 28.7059C74.0583 28.7059 74.6342 28.7059 75.2123 28.7059C75.3834 28.7059 75.3834 28.7081 75.3899 28.8813C75.392 28.9333 75.3899 28.9874 75.3899 29.0394C75.3877 30.4857 75.3877 31.9299 75.3877 33.3741ZM73.2723 34.4892C73.2788 34.08 73.2658 33.6751 73.2008 33.268C73.1705 33.0753 73.138 32.8869 73.0514 32.7202C72.8501 32.337 72.6357 32.259 72.2005 32.3435C72.0641 32.3695 71.9601 32.4517 71.8865 32.5643C71.8259 32.6574 71.7696 32.7527 71.7328 32.861C71.6418 33.1208 71.6224 33.3871 71.6072 33.6578C71.6029 33.7379 71.6159 33.818 71.6007 33.8959C71.5292 34.238 71.5596 34.5823 71.5769 34.9222C71.5899 35.1886 71.6137 35.4592 71.6505 35.7255C71.6917 36.0286 71.7761 36.3166 72.0186 36.5353C72.1723 36.6739 72.3542 36.7237 72.5491 36.6934C72.8327 36.6522 72.9973 36.4574 73.086 36.2019C73.1445 36.0308 73.1878 35.8554 73.2073 35.6714C73.2355 35.4159 73.2831 35.1647 73.2766 34.9071C73.2701 34.7663 73.2723 34.6278 73.2723 34.4892Z" fill="white" />
<path d="M26.1107 33.3165C26.1107 32.8531 26.1086 32.3898 26.1129 31.9264C26.1151 31.803 26.1346 31.6774 26.1562 31.5562C26.1865 31.3938 26.2082 31.2314 26.2212 31.0668C26.2277 30.9954 26.2233 30.9218 26.271 30.859C26.2905 30.8352 26.2948 30.7984 26.3013 30.7659C26.4074 30.1813 26.6824 29.679 27.0959 29.2611C27.2388 29.116 27.4272 29.0056 27.6134 28.9038C27.9058 28.7479 28.224 28.6635 28.5423 28.5942C28.774 28.5444 29.0144 28.5401 29.2525 28.5401C29.5968 28.5401 29.9411 28.5314 30.2832 28.5855C30.4694 28.6137 30.6578 28.6526 30.8375 28.7111C31.0995 28.7956 31.3507 28.9103 31.5694 29.0835C31.7686 29.2394 31.944 29.4148 32.0782 29.6292C32.2904 29.9691 32.3965 30.3458 32.4679 30.7356C32.4874 30.8395 32.5026 30.9434 32.5091 31.0495C32.5199 31.2271 32.5004 31.4068 32.5394 31.5822C32.5524 31.645 32.5459 31.7142 32.5394 31.7814C32.5242 31.9373 32.5004 31.9567 32.3424 31.9567C31.7599 31.9567 31.1753 31.9567 30.5928 31.9567C30.4175 31.9567 30.3785 31.9113 30.3633 31.7359C30.3395 31.4219 30.3222 31.1037 30.2767 30.7919C30.2529 30.6273 30.1879 30.4671 30.0992 30.3155C29.9779 30.1033 29.7874 30.0102 29.573 29.9778C29.2829 29.9323 29.0079 29.9929 28.7935 30.2181C28.7654 30.2462 28.7437 30.2765 28.7264 30.3134C28.6203 30.5277 28.5705 30.7551 28.512 30.9867C28.4276 31.3137 28.4601 31.6406 28.4254 31.9676C28.3908 32.288 28.4168 32.6171 28.4168 32.9419C28.4168 33.3057 28.4232 33.6716 28.4146 34.0353C28.4038 34.4857 28.4232 34.936 28.4644 35.3799C28.4925 35.6874 28.5164 36.0143 28.6701 36.298C28.7957 36.5318 28.9559 36.7223 29.2525 36.744C29.363 36.7527 29.4712 36.7851 29.5838 36.7656C29.8891 36.7115 30.0862 36.5318 30.2118 36.2547C30.2507 36.1702 30.2724 36.0836 30.2984 35.9948C30.3936 35.6744 30.4153 35.3474 30.4023 35.0162C30.3958 34.83 30.4608 34.6502 30.4391 34.464C30.4348 34.4164 30.4673 34.3926 30.5106 34.3883C30.5495 34.3839 30.5907 34.3839 30.6296 34.3839C31.2402 34.3839 31.8487 34.3839 32.4593 34.3839C32.6152 34.3839 32.6217 34.3861 32.6174 34.5333C32.6109 34.8494 32.5957 35.1634 32.5502 35.4773C32.5329 35.5878 32.5329 35.7004 32.5264 35.813C32.5156 35.9992 32.442 36.1702 32.4095 36.3521C32.39 36.469 32.3315 36.5751 32.2817 36.679C32.18 36.8891 32.0674 37.0948 31.9093 37.2766C31.6755 37.5473 31.394 37.7465 31.0692 37.885C30.7726 38.0128 30.4608 38.0778 30.1425 38.1405C29.6748 38.2315 29.2071 38.1795 28.7394 38.2012C28.4471 38.1297 28.1439 38.1124 27.8581 37.9998C27.5918 37.8959 27.3406 37.7746 27.1284 37.5841C26.8578 37.3394 26.6564 37.0471 26.5135 36.705C26.3922 36.4192 26.3186 36.1204 26.2363 35.8238C26.193 35.6679 26.2039 35.4968 26.1779 35.3323C26.1281 34.9988 26.0956 34.6654 26.0978 34.3298C26.0999 33.992 26.0978 33.6543 26.0978 33.3165C26.1064 33.3165 26.1086 33.3165 26.1107 33.3165Z" fill="white" />
<path d="M2.44737 33.3293C2.44737 33.8121 2.44737 34.2971 2.44737 34.78C2.44737 34.8255 2.44087 34.8753 2.45602 34.9186C2.52314 35.1178 2.51881 35.3213 2.52531 35.527C2.5383 35.8475 2.62492 36.1506 2.77432 36.4321C2.84793 36.5685 2.97135 36.6746 3.12075 36.7157C3.3979 36.7915 3.67289 36.8197 3.93921 36.6529C4.11892 36.5403 4.19903 36.3649 4.27482 36.1852C4.3939 35.9081 4.39174 35.6093 4.43721 35.317C4.48051 35.0528 4.45885 34.7908 4.46968 34.5266C4.47617 34.3946 4.47835 34.3859 4.60177 34.3859C5.23185 34.3837 5.86192 34.3837 6.48984 34.3859C6.61109 34.3859 6.61759 34.3924 6.61759 34.5072C6.61759 34.8514 6.63924 35.2 6.60027 35.54C6.55696 35.9102 6.48551 36.2783 6.33395 36.6291C6.23218 36.8673 6.10877 37.086 5.94204 37.283C5.76883 37.4866 5.56313 37.6424 5.33361 37.7745C5.10194 37.9109 4.84643 37.9889 4.5931 38.0755C4.53247 38.0972 4.46103 38.082 4.39607 38.0993C3.9955 38.2032 3.58844 38.1989 3.17921 38.2097C2.81112 38.2206 2.44953 38.1729 2.10526 38.0755C1.53364 37.9153 1.05079 37.61 0.736832 37.0795C0.622075 36.8868 0.518143 36.6854 0.451021 36.4754C0.394725 36.2978 0.344924 36.1116 0.301619 35.9276C0.225837 35.6049 0.199863 35.278 0.176046 34.951C0.147898 34.5764 0.108923 34.1997 0.134906 33.8229C0.147897 33.6432 0.080768 33.4678 0.100255 33.2925C0.130568 33.037 0.134904 32.7793 0.132739 32.5216C0.128408 32.1968 0.186865 31.8785 0.195525 31.5559C0.204186 31.2679 0.279975 30.9951 0.33627 30.718C0.399062 30.417 0.51381 30.1269 0.665376 29.8562C0.84509 29.5336 1.0941 29.2737 1.38857 29.0572C1.55745 28.9316 1.74583 28.8515 1.94286 28.7736C2.11608 28.7064 2.30013 28.6848 2.47118 28.6112C2.50149 28.5982 2.53397 28.5939 2.56645 28.5895C3.04713 28.5332 3.53214 28.5202 4.01282 28.5549C4.19903 28.5679 4.38958 28.5722 4.57579 28.6437C4.7122 28.6956 4.86593 28.7194 5.00883 28.7692C5.37908 28.897 5.69087 29.107 5.93771 29.4058C6.18238 29.7046 6.31879 30.0532 6.42488 30.4257C6.55047 30.8695 6.52665 31.3156 6.53315 31.7616C6.53531 31.9305 6.50284 31.9565 6.33395 31.9565C5.7515 31.9565 5.16689 31.9565 4.58444 31.9565C4.3939 31.9565 4.38741 31.9478 4.38525 31.7508C4.38308 31.6317 4.38958 31.5126 4.38525 31.3935C4.37225 31.0428 4.32028 30.6963 4.17738 30.378C4.06262 30.1225 3.83527 29.9904 3.54946 29.971C3.38057 29.9601 3.22035 29.9839 3.06445 30.0489C2.92588 30.1074 2.82194 30.2178 2.75266 30.3434C2.61841 30.5881 2.54479 30.8544 2.52098 31.1337C2.50365 31.3307 2.52964 31.5321 2.44737 31.7205C2.43004 31.7595 2.44086 31.8114 2.44086 31.8591C2.44519 32.3484 2.44737 32.8377 2.44737 33.3293Z" fill="white" />
<path d="M15.5702 33.3676C15.5702 31.9234 15.5702 30.4792 15.5702 29.035C15.5702 28.9961 15.5702 28.9549 15.5702 28.916C15.5746 28.7233 15.5919 28.7059 15.7911 28.7059C17.4995 28.7059 19.21 28.7059 20.9184 28.7059C20.9509 28.7059 20.9855 28.7059 21.018 28.7059C21.0916 28.7059 21.1262 28.7449 21.1306 28.8142C21.1327 28.8467 21.1327 28.8813 21.1327 28.9138C21.1327 29.3706 21.1327 29.8275 21.1327 30.2843C21.1327 30.4554 21.1306 30.4576 20.953 30.4576C20.0263 30.4576 19.0974 30.4576 18.1707 30.4576C17.8286 30.4576 17.8286 30.4576 17.8286 30.7997C17.8286 31.237 17.8286 31.6744 17.8286 32.1117C17.8286 32.1572 17.8221 32.207 17.8373 32.2503C17.8589 32.3153 17.9087 32.3607 17.9845 32.3629C18.0365 32.3629 18.0906 32.3651 18.1425 32.3651C18.9783 32.3651 19.8119 32.3651 20.6477 32.3651C20.6867 32.3651 20.7278 32.3651 20.7668 32.3651C20.9097 32.3694 20.9335 32.3867 20.9335 32.5231C20.9357 33.0125 20.9357 33.504 20.9335 33.9933C20.9335 34.0994 20.9205 34.108 20.8209 34.1145C20.7755 34.1167 20.7278 34.1145 20.6824 34.1145C19.8076 34.1145 18.9329 34.1145 18.0581 34.1145C18.0191 34.1145 17.978 34.1124 17.939 34.1145C17.8697 34.121 17.8307 34.16 17.8286 34.2315C17.8264 34.2834 17.8286 34.3375 17.8286 34.3895C17.8286 35.5024 17.8286 36.6153 17.8286 37.7282C17.8286 37.7672 17.8307 37.8083 17.8286 37.8473C17.8243 37.988 17.8048 38.0097 17.6662 38.0118C17.415 38.014 17.1617 38.0118 16.9105 38.0118C16.5186 38.0118 16.1289 38.014 15.737 38.0118C15.5854 38.0118 15.5681 37.9924 15.5659 37.8386C15.5637 37.1956 15.5659 36.5525 15.5659 35.9116C15.5702 35.0629 15.5702 34.2163 15.5702 33.3676Z" fill="white" />
<path d="M37.6497 34.8286C37.1517 34.8286 36.6558 34.8286 36.1578 34.8286C36.1189 34.8286 36.0777 34.8265 36.0388 34.8286C35.7789 34.8394 35.7638 34.8568 35.7638 35.1166C35.7638 35.2833 35.7724 35.4479 35.7616 35.6124C35.7443 35.8744 35.7898 36.1299 35.8634 36.3745C35.976 36.7491 36.2748 36.9894 36.6862 36.9267C36.894 36.8942 37.0629 36.7859 37.1755 36.5932C37.2924 36.394 37.2989 36.1667 37.3617 35.9523C37.366 35.9393 37.3617 35.9264 37.3639 35.9134C37.431 35.6037 37.3704 35.6579 37.6454 35.6557C38.1758 35.6514 38.7063 35.6535 39.2346 35.6557C39.3905 35.6557 39.397 35.66 39.3884 35.8094C39.3819 35.9199 39.3905 36.0324 39.3321 36.1385C39.2931 36.21 39.3191 36.2966 39.3018 36.3724C39.174 36.9223 38.912 37.3943 38.4465 37.7234C38.2733 37.8447 38.0762 37.9335 37.8727 38.0136C37.628 38.1088 37.366 38.0937 37.1279 38.1933C37.0889 38.2106 37.0369 38.1976 36.9893 38.1976C36.8226 38.1976 36.658 38.1911 36.4935 38.1998C36.1817 38.2149 35.8785 38.163 35.5711 38.1088C35.2528 38.0525 34.9648 37.9226 34.7028 37.7537C34.4192 37.5697 34.194 37.3185 34.0337 37.0046C33.7458 36.4395 33.6592 35.8376 33.6202 35.2183C33.5942 34.7961 33.5747 34.3718 33.592 33.9496C33.6072 33.6161 33.6288 33.2805 33.7003 32.9493C33.7436 32.7436 33.7869 32.5357 33.867 32.343C34.0489 31.9013 34.3001 31.5116 34.7223 31.2453C34.9193 31.1197 35.1272 31.0179 35.3415 30.953C35.6035 30.875 35.8742 30.8079 36.1535 30.8079C36.5433 30.8079 36.933 30.7863 37.3206 30.8426C37.5241 30.8729 37.7211 30.9205 37.9138 30.9855C38.0806 31.0418 38.2408 31.1154 38.3924 31.2128C38.7691 31.4553 39.0008 31.8082 39.1675 32.2066C39.2173 32.3257 39.2671 32.4556 39.2801 32.5834C39.3061 32.8323 39.3797 33.0683 39.4014 33.3195C39.4403 33.7439 39.423 34.1661 39.4338 34.5883C39.436 34.6338 39.436 34.6814 39.4295 34.7269C39.423 34.7875 39.3862 34.8221 39.3234 34.8243C39.2779 34.8265 39.2303 34.8243 39.1848 34.8243C38.6695 34.8286 38.1607 34.8286 37.6497 34.8286ZM36.606 33.6291C36.8117 33.6291 37.0153 33.6313 37.221 33.6291C37.353 33.627 37.4137 33.5663 37.3899 33.4451C37.3422 33.2199 37.3704 32.9882 37.3054 32.7631C37.2708 32.644 37.247 32.5227 37.1885 32.4123C37.0413 32.1287 36.6212 31.9749 36.3332 32.1135C36.2531 32.1525 36.1557 32.1676 36.0907 32.2413C35.9781 32.3712 35.8958 32.5119 35.8417 32.6808C35.7594 32.9319 35.7638 33.1874 35.7659 33.4429C35.7659 33.5902 35.7746 33.5988 35.9153 33.6248C35.9608 33.6335 36.0063 33.6313 36.0539 33.6335C36.2358 33.6291 36.422 33.6291 36.606 33.6291Z" fill="white" />
<path d="M66.5082 34.828C65.9842 34.828 65.4624 34.828 64.9384 34.828C64.893 34.828 64.8453 34.8236 64.7998 34.8301C64.7024 34.8388 64.6548 34.8821 64.6548 34.9817C64.6548 35.1463 64.6396 35.3108 64.6678 35.4775C64.6851 35.575 64.6786 35.6746 64.6786 35.7742C64.6786 36.0557 64.7414 36.322 64.8626 36.5775C64.9969 36.8633 65.4581 37.0366 65.7677 36.8763C66.0275 36.7421 66.1488 36.532 66.2029 36.2614C66.2354 36.1011 66.2787 35.9431 66.2895 35.7764C66.296 35.6811 66.3328 35.6594 66.4368 35.6594C67.0192 35.6573 67.6038 35.6573 68.1863 35.6594C68.3011 35.6594 68.301 35.6638 68.2989 35.7893C68.2967 35.9019 68.2902 36.0102 68.2447 36.1185C68.2123 36.1943 68.2231 36.2874 68.2079 36.3718C68.1343 36.7832 67.9503 37.1448 67.6753 37.4545C67.5692 37.5757 67.4284 37.6688 67.2985 37.7684C67.1037 37.9157 66.8698 37.9871 66.6446 38.0737C66.584 38.0976 66.5126 38.0889 66.4498 38.1062C65.9648 38.247 65.4667 38.2188 64.9731 38.195C64.6353 38.1777 64.2953 38.0976 63.9814 37.9655C63.6436 37.8226 63.3469 37.6017 63.1261 37.3115C62.9572 37.0907 62.8316 36.8352 62.7493 36.5624C62.6865 36.348 62.6519 36.125 62.5913 35.9106C62.548 35.7547 62.5566 35.5858 62.5393 35.4212C62.4917 34.9925 62.5025 34.5638 62.5025 34.1329C62.5025 33.7843 62.5263 33.4357 62.5826 33.0914C62.6498 32.6756 62.7688 32.2707 62.994 31.9091C63.1607 31.6428 63.3708 31.4176 63.6458 31.2422C63.8428 31.1166 64.0528 31.0192 64.2672 30.9542C64.5227 30.8784 64.7868 30.8113 65.0597 30.8113C65.4494 30.8113 65.8392 30.7853 66.2267 30.846C66.519 30.8914 66.8005 30.9694 67.0734 31.095C67.2877 31.1946 67.4761 31.3202 67.6298 31.4912C67.7771 31.6558 67.9026 31.8377 68.0022 32.0434C68.1668 32.3747 68.2144 32.7319 68.2881 33.0827C68.3444 33.3512 68.3357 33.6349 68.3444 33.912C68.353 34.1567 68.3487 34.4014 68.3465 34.6482C68.3444 34.8106 68.327 34.828 68.1603 34.828C67.6082 34.8301 67.0582 34.828 66.5082 34.828ZM65.4408 33.6284C65.6529 33.6284 65.863 33.637 66.0752 33.6262C66.296 33.6154 66.2657 33.6046 66.2787 33.427C66.2982 33.1672 66.2419 32.9182 66.1943 32.6691C66.1553 32.4613 66.06 32.2816 65.863 32.1603C65.7071 32.065 65.549 32.0759 65.3866 32.0824C65.1571 32.091 64.9861 32.2123 64.8713 32.3963C64.7544 32.5869 64.6937 32.8056 64.6829 33.0329C64.6764 33.1845 64.6807 33.3361 64.6721 33.4876C64.6656 33.6154 64.6656 33.624 64.7868 33.6262C65.0034 33.6305 65.2221 33.6284 65.4408 33.6284Z" fill="white" />
<path d="M54.8162 35.2395C54.8162 34.3907 54.8162 33.5441 54.8162 32.6953C54.8162 32.6564 54.8184 32.6152 54.8162 32.5762C54.8075 32.4528 54.7686 32.4095 54.6473 32.4073C54.4611 32.403 54.277 32.4073 54.0908 32.4052C53.9241 32.403 53.9133 32.3922 53.9111 32.2211C53.909 31.8769 53.9111 31.5326 53.9111 31.1883C53.9111 31.1623 53.909 31.1342 53.9133 31.1082C53.9284 31.0043 53.9588 30.9739 54.0692 30.9718C54.2554 30.9696 54.4395 30.9718 54.6257 30.9696C54.7816 30.9675 54.814 30.9415 54.8162 30.7877C54.8205 30.5561 54.8292 30.3222 54.814 30.0927C54.7989 29.8697 54.8963 29.6683 54.9136 29.4518C55.063 29.166 55.2319 28.904 55.5545 28.7719C55.888 28.6333 56.2301 28.5575 56.5895 28.551C56.9944 28.5424 57.3972 28.5489 57.8021 28.5532C57.8346 28.5532 57.8692 28.5554 57.9017 28.5597C57.9688 28.5727 58.0035 28.6095 58.0013 28.6831C57.997 28.8282 58.0013 28.9754 58.0013 29.1205C58.0013 29.3457 58.0035 29.5709 58.0013 29.796C57.9991 29.9649 57.9926 29.9693 57.8173 29.9736C57.7241 29.9758 57.631 29.9736 57.5379 29.9736C57.4708 29.9736 57.4102 29.9888 57.3452 30.0039C57.0659 30.0667 57.0226 30.1901 56.9728 30.4889C56.9555 30.5929 56.9663 30.7011 56.9706 30.8072C56.9728 30.9176 57.0118 30.961 57.1244 30.9696C57.2175 30.9783 57.3106 30.9718 57.4015 30.9718C57.5466 30.9718 57.6938 30.9696 57.8389 30.9718C57.984 30.9739 57.9991 30.9891 58.0013 31.1298C58.0035 31.4351 58.0013 31.7404 58.0013 32.0436C58.0013 32.1302 57.997 32.2168 58.0013 32.3012C58.0056 32.3814 57.9667 32.4052 57.893 32.4052C57.6743 32.403 57.4556 32.4052 57.237 32.4052C57.1915 32.4052 57.1438 32.403 57.0984 32.4095C57.0053 32.4247 56.975 32.4593 56.9685 32.5524C56.9641 32.6109 56.9663 32.6715 56.9663 32.7321C56.9663 34.3821 56.9663 36.032 56.9663 37.6819C56.9663 37.7144 56.9663 37.749 56.9663 37.7815C56.9663 38.0132 56.9663 38.0132 56.7325 38.0132C56.1565 38.0132 55.5805 38.0132 55.0024 38.0132C54.8205 38.0132 54.8183 38.011 54.8183 37.8248C54.8162 36.9609 54.8162 36.1013 54.8162 35.2395Z" fill="white" />
<path d="M46.315 34.5139C46.315 33.9184 46.315 33.3208 46.315 32.7253C46.315 32.6647 46.3172 32.6063 46.3128 32.5456C46.3042 32.4265 46.2869 32.407 46.1699 32.4049C45.9642 32.4006 45.7586 32.4049 45.5529 32.4027C45.4446 32.4006 45.4359 32.3919 45.4338 32.2901C45.4316 31.8982 45.4316 31.5085 45.4338 31.1165C45.4338 30.9909 45.4597 30.9715 45.5918 30.9693C45.7845 30.9671 45.9751 30.9693 46.1678 30.9671C46.3042 30.965 46.3128 30.9585 46.3128 30.8199C46.315 30.2894 46.3128 29.7589 46.3128 29.2306C46.3128 29.1786 46.3128 29.1245 46.3128 29.0725C46.3172 28.9123 46.3258 28.9014 46.4817 28.8993C46.7329 28.8971 46.9862 28.8993 47.2374 28.8993C47.5752 28.8993 47.913 28.8993 48.2507 28.8993C48.3027 28.8993 48.3568 28.9014 48.4088 28.9014C48.4651 28.9036 48.4954 28.9296 48.4933 28.9881C48.4933 29.0335 48.4933 29.0812 48.4933 29.1266C48.4933 29.6441 48.4933 30.1595 48.4933 30.677C48.4933 30.7225 48.4911 30.7701 48.4933 30.8156C48.4998 30.9411 48.5236 30.965 48.6492 30.9671C48.8419 30.9715 49.0324 30.9671 49.2251 30.9671C49.5196 30.9671 49.5196 30.9671 49.5196 31.2616C49.5196 31.5604 49.5196 31.8571 49.5196 32.1559C49.5196 32.4006 49.5196 32.4006 49.2641 32.4027C49.0779 32.4027 48.8938 32.4006 48.7076 32.4027C48.556 32.4049 48.5084 32.4504 48.4933 32.5976C48.4889 32.6366 48.4911 32.6777 48.4911 32.7167C48.4911 33.8037 48.4911 34.8906 48.4911 35.9776C48.4911 36.1357 48.5062 36.2894 48.5994 36.428C48.7098 36.5926 48.8743 36.6424 49.0562 36.6553C49.1623 36.6618 49.2684 36.6553 49.3745 36.6553C49.4784 36.6575 49.5001 36.677 49.5153 36.7766C49.5196 36.8026 49.5174 36.8286 49.5174 36.8567C49.5174 37.1815 49.5196 37.5063 49.5174 37.8311C49.5174 37.9805 49.5023 37.9957 49.3615 38.0411C49.2208 38.0888 49.0735 38.0844 48.9306 38.0866C48.5257 38.0909 48.123 38.0888 47.7181 38.0866C47.5795 38.0866 47.4453 38.065 47.311 38.0216C47.1876 37.9827 47.0577 37.9653 46.9364 37.9069C46.642 37.764 46.4926 37.5171 46.4254 37.2183C46.3258 36.7788 46.2977 36.3327 46.3064 35.8823C46.3215 35.4276 46.315 34.9708 46.315 34.5139Z" fill="white" />
<path d="M42.7967 31.8503C42.8876 31.7918 42.9547 31.7356 43.0024 31.6533C43.1301 31.4432 43.2903 31.2592 43.496 31.1206C43.758 30.9431 44.0438 30.8218 44.3665 30.811C44.4985 30.8067 44.6306 30.8067 44.7649 30.811C44.897 30.8153 44.9121 30.8326 44.9165 30.9626C44.9186 31.0881 44.9165 31.2137 44.9165 31.3393C44.9165 31.7507 44.9186 32.1621 44.9165 32.5713C44.9165 32.7424 44.9013 32.7446 44.7367 32.7316C44.3405 32.6991 43.9399 32.6904 43.5632 32.8442C43.2405 32.9784 43.0218 33.2123 42.9201 33.5652C42.8594 33.7752 42.8486 33.9788 42.8486 34.191C42.8486 35.371 42.8486 36.5511 42.8486 37.7312C42.8486 37.7636 42.8486 37.7983 42.8486 37.8308C42.8465 38.0061 42.8465 38.0083 42.6754 38.0083C42.199 38.0083 41.7205 38.0083 41.2442 38.0083C41.1186 38.0083 40.993 38.0105 40.8674 38.0083C40.7267 38.0061 40.7093 37.9845 40.7029 37.8481C40.7007 37.8156 40.7029 37.781 40.7029 37.7485C40.7029 35.5811 40.705 33.4136 40.7007 31.2462C40.7007 30.9128 40.7418 30.9669 40.9887 30.9669C41.5192 30.9647 42.0496 30.9669 42.5801 30.9669C42.7382 30.9669 42.7663 30.9929 42.7707 31.1488C42.775 31.3068 42.7707 31.4671 42.7728 31.6251C42.7707 31.6922 42.7577 31.7594 42.7967 31.8503Z" fill="white" />
<path d="M61.1061 34.5047C61.1061 35.5981 61.1061 36.6894 61.1061 37.7828C61.1061 38.0123 61.1299 38.0145 60.8831 38.0145C60.3136 38.0123 59.7441 38.0145 59.1746 38.0145C59.1291 38.0145 59.0815 38.0145 59.036 38.0123C58.9559 38.008 58.9169 37.9647 58.9191 37.8846C58.9213 37.8391 58.9191 37.7915 58.9191 37.746C58.9191 35.5938 58.9191 33.4416 58.9191 31.2894C58.9191 31.2634 58.9213 31.2352 58.9191 31.2093C58.8975 31.0447 58.9732 30.9646 59.166 30.9689C59.7484 30.9776 60.3309 30.9711 60.9134 30.9711C60.9524 30.9711 60.9935 30.9711 61.0325 30.9732C61.0801 30.9754 61.1039 31.0057 61.1039 31.0512C61.1061 31.1032 61.1061 31.1573 61.1061 31.2093C61.1061 32.307 61.1061 33.4069 61.1061 34.5047Z" fill="white" />
<path d="M50.7212 34.4682C50.7212 33.3943 50.7212 32.3203 50.7212 31.2485C50.7212 31.203 50.719 31.1554 50.7212 31.1099C50.7277 30.9778 50.7298 30.9714 50.8554 30.9714C51.4725 30.9692 52.0875 30.9692 52.7046 30.9714C52.8215 30.9714 52.8561 31.0038 52.8691 31.1186C52.8734 31.1641 52.8713 31.2117 52.8713 31.2572C52.8713 33.4246 52.8713 35.592 52.8713 37.7594C52.8713 38.0128 52.8713 38.0149 52.6201 38.0149C52.0636 38.0149 51.5072 38.0149 50.9507 38.0149C50.9052 38.0149 50.8576 38.0149 50.8121 38.0149C50.7558 38.0149 50.7255 37.989 50.7233 37.9327C50.7212 37.8807 50.7212 37.8266 50.7212 37.7746C50.7212 36.6681 50.7212 35.5682 50.7212 34.4682Z" fill="white" />
<path d="M60.0213 30.2104C59.7159 30.2104 59.4128 30.2125 59.1074 30.2104C58.9537 30.2104 58.9212 30.18 58.919 30.0263C58.9147 29.6105 58.9168 29.1925 58.919 28.7767C58.919 28.6316 58.9645 28.5905 59.1117 28.5883C59.7268 28.5861 60.3418 28.5861 60.9569 28.5883C61.0825 28.5883 61.1041 28.61 61.1041 28.7421C61.1063 29.186 61.1063 29.6278 61.1041 30.0718C61.1041 30.2082 61.0998 30.2104 60.9525 30.2104C60.6428 30.2125 60.3332 30.2104 60.0213 30.2104Z" fill="white" />
<path d="M51.77 30.2104C51.4711 30.2104 51.1744 30.2125 50.8756 30.2104C50.7283 30.2104 50.724 30.206 50.7218 30.0718C50.7197 29.6278 50.7197 29.1838 50.7218 28.7399C50.7218 28.6078 50.7435 28.5883 50.8713 28.5883C51.4885 28.5861 52.1035 28.5861 52.7207 28.5883C52.816 28.5883 52.8507 28.6208 52.8658 28.7117C52.8723 28.7507 52.8701 28.7919 52.8701 28.8308C52.8701 29.2077 52.8701 29.5867 52.8701 29.9635C52.8701 29.996 52.8723 30.0306 52.868 30.0631C52.855 30.1757 52.8203 30.2082 52.7012 30.2104C52.4435 30.2125 52.1836 30.2104 51.9259 30.2104C51.8761 30.2104 51.8241 30.2104 51.77 30.2104Z" fill="white" />
<path d="M75.4224 25.8782H0.0952148V26.9521H75.4224V25.8782Z" fill="white" />
</svg>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-29d9edb6 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image IID-image-6f064fd1 CID-image-b4fec0a0">
<style>.IID-image-6f064fd1{max-width:86px}.IID-image-6f064fd1:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-image-6f064fd1{max-width:60px}}@media (max-width: 767px){.IID-image-6f064fd1{max-width:48px}}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--1053712840-219779032-title" class="image__img" fill="none" height="33" id="svg--1053712840-219779032" role="img" viewBox="0 0 86 33" width="86">
<title id="svg--1053712840-219779032-title">PCI DSS Compliant badge</title>
<g clip-path="url(#svg--1053712840-219779032-clip0_3090_34032)">
<path d="M58.628 18.8036L59.485 19.0607C59.4278 19.3035 59.3421 19.5035 59.2136 19.6606C59.085 19.8177 58.9422 19.9463 58.7565 20.0177C58.5708 20.1034 58.3423 20.1462 58.0566 20.1462C57.7138 20.1462 57.4425 20.1034 57.2139 20.0034C56.9997 19.9034 56.814 19.732 56.6569 19.4749C56.4998 19.2321 56.4141 18.9036 56.4141 18.5179C56.4141 18.0037 56.5569 17.6038 56.8283 17.3181C57.0997 17.0325 57.4996 16.9039 57.9995 16.9039C58.3994 16.9039 58.6994 16.9896 58.9279 17.1467C59.1565 17.3039 59.3279 17.5467 59.4278 17.8895L58.5708 18.0752C58.5423 17.9752 58.5137 17.9038 58.4709 17.8609C58.4137 17.7895 58.3566 17.7324 58.2709 17.6895C58.1852 17.6467 58.0995 17.6324 58.0138 17.6324C57.7995 17.6324 57.6281 17.7181 57.5139 17.9038C57.4282 18.0323 57.3853 18.2466 57.3853 18.5179C57.3853 18.8607 57.4425 19.1036 57.5424 19.2321C57.6424 19.3607 57.7995 19.4321 57.9852 19.4321C58.1709 19.4321 58.3137 19.3749 58.3994 19.275C58.5137 19.1464 58.5851 19.0036 58.628 18.8036Z" fill="white" />
<path d="M59.8276 18.5178C59.8276 18.0036 59.9705 17.6037 60.2561 17.318C60.5418 17.0324 60.9417 16.8895 61.4559 16.8895C61.9844 16.8895 62.3844 17.0324 62.67 17.3037C62.9557 17.5894 63.0985 17.9751 63.0985 18.4893C63.0985 18.8606 63.0414 19.1606 62.9128 19.3891C62.7843 19.6176 62.6129 19.8033 62.3701 19.9319C62.1415 20.0604 61.8416 20.1318 61.4988 20.1318C61.1417 20.1318 60.856 20.0747 60.6132 19.9604C60.3847 19.8462 60.199 19.6748 60.0419 19.4177C59.8848 19.1606 59.8276 18.8892 59.8276 18.5178ZM60.7989 18.5178C60.7989 18.8321 60.856 19.0606 60.9703 19.2034C61.0846 19.3463 61.2417 19.4177 61.4559 19.4177C61.6702 19.4177 61.8273 19.3463 61.9416 19.2177C62.0558 19.0749 62.113 18.8321 62.113 18.4893C62.113 18.1893 62.0558 17.9751 61.9273 17.8465C61.813 17.7037 61.6416 17.6465 61.4417 17.6465C61.2417 17.6465 61.0846 17.718 60.9703 17.8608C60.856 17.9751 60.7989 18.2036 60.7989 18.5178Z" fill="white" />
<path d="M63.5989 16.9467H64.8701L65.3557 18.8606L65.8414 16.9467H67.1126V20.089H66.3127V17.6894L65.6985 20.089H64.9844L64.3702 17.6894V20.089H63.5703V16.9467H63.5989Z" fill="white" />
<path d="M67.7407 16.9467H69.3547C69.7118 16.9467 69.9689 17.0324 70.1403 17.2038C70.3117 17.3752 70.3974 17.6037 70.3974 17.9179C70.3974 18.2322 70.2974 18.4893 70.1118 18.6607C69.9261 18.8463 69.6261 18.932 69.2405 18.932H68.712V20.1033H67.7407V16.9467ZM68.712 18.2893H68.9548C69.1405 18.2893 69.269 18.2607 69.3547 18.1893C69.4262 18.1179 69.469 18.0465 69.469 17.9465C69.469 17.8465 69.4404 17.7608 69.369 17.6894C69.2976 17.618 69.1833 17.5894 68.9977 17.5894H68.7263L68.712 18.2893Z" fill="white" />
<path d="M70.9116 16.9467H71.8829V19.3177H73.3969V20.089H70.9116V16.9467Z" fill="white" />
<path d="M73.8828 16.9467H74.8541V20.089H73.8828V16.9467Z" fill="white" />
<path d="M77.4822 19.5606H76.3824L76.2253 20.0748H75.2397L76.4253 16.9325H77.4822L78.6677 20.0748H77.6536L77.4822 19.5606ZM77.2823 18.8893L76.9395 17.7609L76.5967 18.8893H77.2823Z" fill="white" />
<path d="M78.9673 16.9467H79.8671L81.0527 18.6892V16.9467H81.9668V20.089H81.0527L79.8814 18.3607V20.089H78.9673V16.9467Z" fill="white" />
<path d="M82.3955 16.9467H85.3522V17.718H84.3666V20.089H83.3953V17.718H82.4098L82.3955 16.9467Z" fill="white" />
<path d="M48.8445 18.8177C48.1732 19.6605 47.5019 20.746 46.9448 21.7315L49.7586 20.846L48.8445 18.8177Z" fill="white" />
<path d="M13.9498 13.1329H12.75V16.5467H14.0926C14.0926 16.5467 15.5924 16.4752 15.8209 15.0898C15.8495 15.0612 15.8495 14.4756 15.8209 14.3899C15.6781 13.2044 13.9498 13.1329 13.9498 13.1329Z" fill="white" />
<path d="M40.4741 0.177979L0.109375 2.46331L11.2932 32.9725L32.8182 26.1879C32.204 25.3166 31.7755 24.3597 31.6184 23.4741C31.6041 23.4741 31.6041 23.4741 31.5898 23.4741C31.447 23.4741 30.0044 23.5312 29.2617 23.4741C21.7058 23.0027 21.7058 17.6179 21.7058 17.4608V16.1753C21.7058 15.9468 21.9772 10.6762 29.2617 10.0906C29.733 10.0192 31.4899 10.0335 31.5898 10.0906C33.5895 10.2049 34.2465 10.6334 34.2465 10.6334C34.2894 10.6619 34.318 10.7048 34.318 10.7476V14.0614C34.318 14.1042 34.2894 14.1185 34.2465 14.1042C34.2465 14.1042 33.0753 13.3901 31.6327 13.2044H30.39C27.0906 13.49 26.8621 16.1325 26.8621 16.1325C26.8478 16.161 26.8478 16.2324 26.8478 16.2753V17.218C26.8478 17.2466 26.8621 17.318 26.8621 17.3608C26.8621 17.3608 27.0192 19.8176 30.39 20.3889C30.6329 20.4317 30.9614 20.4603 31.6327 20.3889C34.0037 20.1461 34.5465 19.7176 34.5465 19.7176C34.5751 19.689 34.6036 19.7033 34.6036 19.7461V20.2889C35.3035 20.4032 36.032 20.7317 36.7176 21.203V10.2906H41.7167V18.4464C43.4879 15.9039 45.359 13.3186 45.9874 12.4616L40.4741 0.177979ZM12.9072 19.4462C12.8644 19.4462 12.8358 19.4748 12.8358 19.5176V23.317C12.8358 23.3598 12.8073 23.3884 12.7644 23.3884H7.89379C7.85094 23.3884 7.82238 23.3598 7.82238 23.317V10.362C7.82238 10.3191 7.85094 10.2906 7.89379 10.2906C7.89379 10.2906 14.1785 10.2906 14.207 10.2906C15.8068 10.2192 20.6917 10.6619 20.6917 14.7898C20.6917 20.0032 12.9072 19.4462 12.9072 19.4462ZM39.2171 9.04793C37.5317 9.04793 36.1605 7.74815 36.1605 6.1627C36.1605 4.56296 37.5317 3.27746 39.2171 3.27746C40.9026 3.27746 42.2738 4.56296 42.2738 6.1627C42.2738 7.76243 40.9026 9.04793 39.2171 9.04793Z" fill="white" />
<path d="M39.3599 29.6731C39.7598 29.6731 40.0741 29.6731 40.5883 29.4446C42.3594 28.5161 48.3441 13.9043 54.6574 9.40504C54.7002 9.37647 54.7431 9.33362 54.7716 9.29077C54.8145 9.23364 54.8145 9.17651 54.8145 9.17651C54.8145 9.17651 54.8145 8.87656 53.8861 8.87656C48.2727 8.71944 42.4308 20.5032 39.3599 25.1596C39.3171 25.2167 39.1171 25.1596 39.1171 25.1596C39.1171 25.1596 37.0603 22.7314 35.2749 21.803C35.232 21.7887 35.0321 21.7173 34.8178 21.7316C34.675 21.7316 33.8466 21.903 33.4609 22.3029C33.0038 22.7885 33.0181 23.0599 33.0181 23.6455C33.0181 23.6884 33.0467 23.8883 33.1038 23.9883C33.5466 24.7596 35.532 27.502 37.1746 29.0161C37.4174 29.2017 37.803 29.6731 39.3599 29.6731Z" fill="white" />
<path d="M56.314 4.99146H60.9846C61.913 4.99146 62.6558 5.12 63.2128 5.36282C63.7841 5.61992 64.2555 5.97701 64.6126 6.43407C64.984 6.90542 65.2553 7.44819 65.4125 8.06237C65.5839 8.67656 65.6695 9.33359 65.6695 10.0335C65.6695 11.119 65.541 11.9617 65.2982 12.5616C65.0554 13.1615 64.7126 13.6614 64.2698 14.0757C63.827 14.4756 63.3556 14.747 62.8557 14.8898C62.1701 15.0755 61.5417 15.1612 60.9846 15.1612H56.314V4.99146ZM59.4563 7.29107V12.8473H60.2276C60.8846 12.8473 61.356 12.7759 61.6274 12.633C61.8988 12.4902 62.1273 12.2331 62.2844 11.876C62.4415 11.5189 62.5272 10.919 62.5272 10.1049C62.5272 9.01936 62.3558 8.29091 61.9987 7.89097C61.6416 7.49104 61.0703 7.29107 60.2419 7.29107H59.4563Z" fill="white" />
<path d="M66.541 11.8046L69.5405 11.6189C69.6119 12.1046 69.7405 12.4759 69.9404 12.733C70.269 13.1473 70.726 13.3472 71.3259 13.3472C71.7687 13.3472 72.1258 13.2472 72.3686 13.033C72.6114 12.8187 72.74 12.5759 72.74 12.3045C72.74 12.0474 72.6257 11.8046 72.3972 11.5904C72.1686 11.3761 71.6259 11.1904 70.7832 11.0048C69.3977 10.6905 68.4264 10.2763 67.8265 9.7621C67.2266 9.2479 66.9409 8.59087 66.9409 7.791C66.9409 7.26252 67.0981 6.77689 67.398 6.30554C67.698 5.83419 68.155 5.4771 68.7692 5.20572C69.3834 4.93434 70.2118 4.80579 71.2688 4.80579C72.5686 4.80579 73.5684 5.0486 74.2397 5.53424C74.9253 6.01987 75.3253 6.79117 75.4538 7.84814L72.4829 8.01954C72.3972 7.56247 72.2401 7.23395 71.983 7.0197C71.7259 6.80545 71.3831 6.70547 70.9403 6.70547C70.5689 6.70547 70.2975 6.77689 70.1118 6.934C69.9262 7.09112 69.8405 7.2768 69.8405 7.50534C69.8405 7.66245 69.9119 7.81957 70.069 7.94812C70.2118 8.07667 70.5689 8.20522 71.126 8.31949C72.4972 8.61944 73.4827 8.91939 74.0826 9.21934C74.6825 9.51929 75.111 9.90494 75.3824 10.3477C75.6538 10.7905 75.7823 11.3047 75.7823 11.8618C75.7823 12.5188 75.5966 13.1187 75.2396 13.6615C74.8825 14.2185 74.3683 14.6327 73.7255 14.9184C73.0828 15.2041 72.2544 15.3469 71.2688 15.3469C69.5405 15.3469 68.3407 15.0184 67.6694 14.3471C67.0124 13.6757 66.641 12.833 66.541 11.8046Z" fill="white" />
<path d="M76.5825 11.8046L79.582 11.6189C79.6534 12.1046 79.782 12.4759 79.982 12.733C80.3105 13.1473 80.7675 13.3472 81.3674 13.3472C81.8102 13.3472 82.1673 13.2472 82.4101 13.033C82.6529 12.8187 82.7815 12.5759 82.7815 12.3045C82.7815 12.0474 82.6672 11.8046 82.4387 11.5904C82.2102 11.3761 81.6674 11.1904 80.8247 11.0048C79.4392 10.6905 78.4679 10.2763 77.868 9.7621C77.2824 9.2479 76.9825 8.59087 76.9825 7.791C76.9825 7.26252 77.1396 6.77689 77.4395 6.30554C77.7395 5.83419 78.1965 5.4771 78.8107 5.20572C79.4249 4.93434 80.2533 4.80579 81.3103 4.80579C82.6101 4.80579 83.6099 5.0486 84.2812 5.53424C84.9668 6.01987 85.3668 6.79117 85.4953 7.84814L82.5244 8.01954C82.4387 7.56247 82.2816 7.23395 82.0245 7.0197C81.7674 6.80545 81.4246 6.70547 80.9818 6.70547C80.6104 6.70547 80.339 6.77689 80.1534 6.934C79.9677 7.09112 79.882 7.2768 79.882 7.50534C79.882 7.66245 79.9534 7.81957 80.1105 7.94812C80.2533 8.07667 80.6104 8.20522 81.1675 8.31949C82.5387 8.61944 83.5242 8.91939 84.1241 9.21934C84.724 9.51929 85.1525 9.90494 85.4239 10.3477C85.6953 10.7905 85.8238 11.3047 85.8238 11.8618C85.8238 12.5188 85.6382 13.1187 85.2811 13.6615C84.924 14.2185 84.4098 14.6327 83.767 14.9184C83.1243 15.2041 82.2959 15.3469 81.3103 15.3469C79.582 15.3469 78.3822 15.0184 77.7109 14.3471C77.0396 13.6757 76.6682 12.833 76.5825 11.8046Z" fill="white" />
</g>
<defs>
<clipPath id="svg--1053712840-219779032-clip0_3090_34032">
<rect fill="white" height="32.7945" transform="translate(0.109375 0.177979)" width="85.7143" />
</clipPath>
</defs>
</svg>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-be4d9c5e CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image CID-image-b4fec0a0 IID-image-e609b229">
<style>.IID-image-e609b229{max-width:48px}.IID-image-e609b229:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-image-e609b229{max-width:32px}}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-223107605--1699873195-title" class="image__img" fill="none" height="49" id="svg-223107605--1699873195" role="img" viewBox="0 0 49 49" width="49">
<title id="svg-223107605--1699873195-title">American Institute of Certified Public Accountants SOC 2 badge</title>
<path d="M48.5049 24.5783C48.5003 26.735 48.2129 28.8523 47.6563 30.936C47.5894 31.1883 47.5118 31.2431 47.2503 31.1625C45.5501 30.6381 43.8438 30.129 42.1361 29.6289C41.911 29.5621 41.8426 29.5058 41.9064 29.2474C43.5062 22.8076 42.1649 17.0593 37.6864 12.1425C34.6252 8.78045 30.7427 6.89577 26.217 6.48995C20.8032 6.00511 16.057 7.63292 12.0848 11.3567C8.94909 14.2962 7.13942 17.9439 6.58131 22.2012C6.27564 24.5357 6.44597 26.8475 7.05882 29.1213C7.12269 29.3584 7.09836 29.4435 6.8444 29.5149C5.12141 29.9998 3.40298 30.4998 1.68759 31.0075C1.43971 31.0804 1.36672 31.0196 1.30893 30.7795C-0.737978 22.2437 1.10819 14.6685 7.0208 8.16793C10.3406 4.51864 14.4937 2.16584 19.3266 1.15814C26.877 -0.416476 33.734 1.1931 39.7303 6.05678C44.3867 9.83374 47.1666 14.7673 48.1901 20.6767C48.4091 21.9686 48.5034 23.2712 48.5049 24.5783ZM14.7629 4.52016C14.0709 4.52016 13.5022 5.06581 13.5022 5.73C13.5022 6.41092 14.0603 6.9976 14.7127 7.00216C15.4 7.00824 15.9794 6.46108 15.9855 5.79992C15.9916 5.09469 15.4426 4.52016 14.7629 4.52016ZM43.272 17.6369C43.5093 17.3132 43.7435 16.9925 43.9807 16.6687C44.335 17.0077 44.6194 17.0624 44.9205 16.8663C45.1882 16.6931 45.2505 16.421 45.1045 15.9969C45.0346 15.7963 44.9433 15.6048 44.8658 15.4072C44.8278 15.3084 44.7852 15.2583 44.665 15.3099C44.0415 15.5744 43.415 15.8313 42.7869 16.0881C42.6668 16.1368 42.644 16.2036 42.6957 16.3222C42.755 16.459 42.8386 16.3921 42.9147 16.3617C43.1032 16.2872 43.2857 16.2021 43.4758 16.1322C43.5595 16.1018 43.6583 15.9924 43.7419 16.1231C43.8134 16.234 43.856 16.3496 43.7465 16.4803C43.5838 16.6733 43.453 16.8937 43.2888 17.0852C43.1352 17.263 43.0956 17.4287 43.272 17.6369ZM19.0544 5.14636C19.1517 5.35459 19.1882 5.56738 19.0255 5.75888C18.8536 5.96103 18.621 6.01423 18.364 5.97319C18.3046 5.96407 18.2484 5.93823 18.1921 5.91695C18.0811 5.87439 18.0552 5.95799 18.0172 6.02942C17.9579 6.14038 18.037 6.18141 18.1146 6.20421C18.4871 6.30909 18.8399 6.25589 19.1502 6.02031C19.4209 5.81512 19.4528 5.51722 19.3768 5.22236C19.2581 4.76335 19.1015 4.31346 18.9646 3.85901C18.9084 3.67206 18.732 3.69942 18.7046 3.79669C18.6468 3.99428 18.551 3.90612 18.4491 3.89244C18.0735 3.83773 17.6872 4.05963 17.5701 4.39401C17.447 4.74815 17.5975 5.1874 17.9077 5.38195C18.2195 5.57649 18.6499 5.5233 18.9129 5.26187C18.9525 5.21932 18.9646 5.14484 19.0544 5.14636ZM5.12749 19.5413C5.23394 19.3863 5.3039 19.2465 5.12293 19.1371C4.80357 18.9455 4.75947 18.6978 4.92219 18.3817C4.97238 18.2844 5.01191 18.1734 5.0256 18.0655C5.06058 17.7889 5.22025 17.6901 5.4803 17.7114C5.70233 17.7281 5.82551 17.6399 5.81182 17.374C5.01344 17.4484 4.21961 17.5184 3.42731 17.6004C3.24482 17.6187 3.18247 17.8299 3.3239 17.9546C3.91699 18.4865 4.52072 19.0094 5.12749 19.5413ZM4.52224 24.6938C3.81206 25.0555 3.10187 25.4173 2.39017 25.7745C2.30045 25.8201 2.28828 25.8763 2.28828 25.9675C2.28828 26.0967 2.35976 26.1347 2.46621 26.1727C3.12316 26.4052 3.77708 26.6484 4.43556 26.8794C4.51311 26.9068 4.63173 27.036 4.68648 26.8825C4.73058 26.7594 4.69408 26.6104 4.51768 26.5906C4.12989 26.545 4.02496 26.3095 4.0645 25.9568C4.07514 25.8581 4.0645 25.7532 4.04321 25.6544C3.9839 25.4006 4.04625 25.2288 4.31694 25.1543C4.54201 25.0935 4.62413 24.9461 4.52224 24.6938ZM6.80334 15.2963C6.81094 14.9528 6.69232 14.7521 6.45965 14.6275C6.22546 14.5014 5.98975 14.509 5.77988 14.6822C5.60804 14.8236 5.45293 14.9832 5.28413 15.126C5.16703 15.2248 5.03473 15.2552 4.8933 15.1671C4.74731 15.0759 4.70016 14.9421 4.72602 14.778C4.75947 14.5637 4.86592 14.3965 5.07274 14.3174C5.2233 14.2597 5.12901 14.1731 5.1138 14.0971C5.08795 13.9679 5.01039 14.0059 4.93132 14.0439C4.66215 14.1715 4.52832 14.4041 4.45533 14.6761C4.36864 14.9999 4.48118 15.2902 4.7321 15.4467C4.99975 15.6124 5.25979 15.579 5.53353 15.3388C5.66279 15.2263 5.77989 15.0987 5.90763 14.9847C6.01864 14.8874 6.14182 14.8281 6.29541 14.9056C6.45053 14.9832 6.51592 15.1063 6.50832 15.2735C6.49767 15.5288 6.37753 15.7249 6.14182 15.8176C5.98823 15.8784 5.99735 15.9681 6.04297 16.0775C6.10532 16.231 6.21634 16.1459 6.29237 16.1003C6.62085 15.9012 6.77749 15.5972 6.80334 15.2963ZM44.1586 20.087C44.0461 20.3135 43.9883 20.4928 44.0263 20.6919C44.0902 21.0248 44.3259 21.2543 44.6787 21.3211C45.0087 21.3835 45.3737 21.2254 45.541 20.9442C45.7098 20.6615 45.6824 20.3013 45.4802 20.0338C45.4391 19.9791 45.3037 19.9152 45.3874 19.8605C45.503 19.7861 45.4817 19.7131 45.4421 19.6371C45.3859 19.5277 45.2764 19.5854 45.1958 19.6006C44.5799 19.7161 43.967 19.8392 43.3526 19.9593C43.2644 19.976 43.1671 19.9776 43.1884 20.1174C43.2112 20.2618 43.2918 20.2603 43.4059 20.2359C43.6401 20.1827 43.8758 20.1417 44.1586 20.087ZM4.01431 19.8909C4.02344 19.4957 3.8516 19.2678 3.48662 19.1933C3.15966 19.1264 2.90418 19.283 2.77644 19.6538C2.70496 19.862 2.67455 20.0855 2.61524 20.2983C2.56201 20.4898 2.60155 20.5825 2.82054 20.622C3.37713 20.7208 3.92611 20.8591 4.4827 20.9549C4.61044 20.9761 4.84463 21.1813 4.89178 20.8804C4.92827 20.6387 4.67735 20.7193 4.54809 20.6798C4.3656 20.6235 4.13141 20.6463 3.99759 20.5384C3.8227 20.3971 4.01888 20.1736 4.00975 19.9821C4.00671 19.9517 4.01127 19.9213 4.01431 19.8909ZM35.8189 7.56908C35.2137 7.59796 34.8107 7.14503 34.8928 6.55227C34.9521 6.12214 35.3232 5.75888 35.7627 5.69657C36.0866 5.65097 36.4546 5.83944 36.5747 6.15862C36.6386 6.33036 36.7329 6.41548 36.8774 6.33341C37.0188 6.25437 36.8956 6.12062 36.85 6.02638C36.6097 5.52938 35.9619 5.27859 35.4235 5.46554C34.8426 5.66769 34.4792 6.30453 34.5932 6.92313C34.6921 7.46421 35.2547 7.90346 35.8083 7.86395C35.9178 7.85635 36.0835 7.88978 36.0851 7.71804C36.0835 7.53565 35.9375 7.53717 35.8189 7.56908ZM4.74883 22.1936C4.76099 22.0188 4.72754 21.8288 4.61804 21.6646C4.55874 21.5765 4.52072 21.4078 4.36256 21.4853C4.18616 21.5719 4.28196 21.6829 4.35344 21.803C4.65302 22.3015 4.41883 22.8897 3.8592 23.066C3.43491 23.1997 2.97717 23.0538 2.72321 22.7027C2.48141 22.3684 2.50118 22.0629 2.82966 21.6631C2.93307 21.5385 2.84639 21.4807 2.79773 21.4078C2.72169 21.2953 2.65022 21.388 2.60307 21.4397C2.524 21.5294 2.44796 21.6297 2.39777 21.7376C2.19552 22.1677 2.28372 22.6982 2.60307 23.0386C2.95588 23.4125 3.54289 23.5372 4.03104 23.3426C4.48422 23.1602 4.74883 22.7453 4.74883 22.1936ZM44.3731 17.6962C44.0096 17.6931 43.6629 17.912 43.5519 18.213C43.4424 18.5139 43.5579 18.9653 43.8089 19.1507C43.8819 19.2039 43.9701 19.3438 44.0811 19.2252C44.2043 19.093 44.0796 19.0261 43.9837 18.944C43.7237 18.7191 43.7009 18.3862 43.9168 18.1719C44.0263 18.0625 44.1069 18.029 44.1571 18.2282C44.2271 18.5017 44.3259 18.7677 44.3959 19.0413C44.4415 19.2161 44.519 19.2328 44.6726 19.1644C45.0224 19.0079 45.2049 18.713 45.1425 18.3725C45.068 17.9591 44.773 17.7007 44.3731 17.6962ZM6.87025 12.7094C6.66343 12.6927 6.49615 12.7702 6.35472 12.9191C6.10684 13.1821 6.05362 13.5742 6.2285 13.8706C6.41859 14.1928 6.85504 14.3767 7.19569 14.2764C7.53633 14.1761 7.79334 13.8174 7.77661 13.442C7.77205 13.3477 7.82831 13.1927 7.6443 13.1973C7.47246 13.2034 7.51808 13.3295 7.5196 13.442C7.52112 13.7764 7.28389 14.0165 6.98279 14.0074C6.81855 14.0028 6.74859 13.9618 6.85961 13.7961C6.99343 13.594 7.11661 13.3857 7.24435 13.179C7.42836 12.8827 7.39642 12.8051 7.05122 12.7276C6.99191 12.7155 6.93108 12.7155 6.87025 12.7094ZM11.2119 7.90954C11.2089 8.30016 11.5191 8.68317 11.9008 8.75917C12.2521 8.8306 12.6992 8.57374 12.8163 8.21808C12.8437 8.13297 12.9577 8.00074 12.8011 7.93386C12.6445 7.86698 12.6125 7.98706 12.5669 8.11625C12.4635 8.41719 12.1548 8.5631 11.8902 8.45671C11.7366 8.39439 11.6636 8.32144 11.8446 8.19224C12.0666 8.03417 12.2719 7.85331 12.4985 7.70436C12.6718 7.58884 12.6414 7.50373 12.5137 7.3791C12.2734 7.14351 11.9982 7.07056 11.7153 7.18607C11.4112 7.31222 11.215 7.5934 11.2119 7.90954ZM26.6611 3.6827C26.4695 3.6675 26.2976 3.68878 26.1364 3.75109C25.9478 3.82405 25.8536 3.97604 25.846 4.17515C25.8368 4.36665 25.9296 4.50344 26.0984 4.58856C26.2672 4.67367 26.4451 4.69951 26.6276 4.64479C26.7462 4.60832 26.8557 4.50192 26.9698 4.67975C27.0048 4.73447 27.1584 4.74359 27.166 4.57032C27.1766 4.30738 27.2101 4.04747 27.2313 3.78453C27.2526 3.53375 27.2466 3.28448 26.988 3.14921C26.7128 3.00482 26.4223 3.01242 26.1395 3.14465C26.0832 3.17049 25.9904 3.19785 26.0528 3.29664C26.0954 3.362 26.1349 3.44255 26.2414 3.38176C26.3584 3.31488 26.4892 3.29208 26.6231 3.30728C26.7964 3.32704 26.9698 3.4 26.9576 3.58998C26.9455 3.81189 26.7462 3.62494 26.6611 3.6827ZM44.3077 22.5705C44.3092 23.0706 44.6285 23.4065 45.1045 23.4095C45.582 23.4125 45.9409 23.0706 45.947 22.6039C45.9531 22.1115 45.5988 21.7437 45.1213 21.7482C44.6346 21.7513 44.3046 22.0857 44.3077 22.5705ZM30.6636 5.50354C31.1259 5.50202 31.4757 5.1418 31.4772 4.66759C31.4788 4.22226 31.0727 3.85445 30.5891 3.86205C30.1359 3.86965 29.7892 4.24506 29.7968 4.72079C29.8044 5.16764 30.177 5.50506 30.6636 5.50354ZM42.5543 13.0164C42.5588 12.5468 42.1786 12.1349 41.7376 12.1303C41.3042 12.1257 40.9119 12.4981 40.9027 12.9222C40.8921 13.3979 41.2571 13.8052 41.7026 13.8174C42.1543 13.8296 42.5512 13.4557 42.5543 13.0164ZM37.3214 9.01755C37.7761 9.01603 38.132 8.64517 38.1259 8.17857C38.1213 7.73627 37.7381 7.35934 37.2864 7.35174C36.8424 7.34414 36.4637 7.72715 36.4637 8.18464C36.4622 8.64061 36.8515 9.01907 37.3214 9.01755ZM20.4154 3.36048C20.125 3.3696 19.9333 3.42735 19.7706 3.55655C19.7022 3.61126 19.5638 3.6599 19.6505 3.78605C19.7387 3.91524 19.8284 3.83925 19.9273 3.76933C20.093 3.64926 20.277 3.55807 20.4884 3.6675C20.5629 3.7055 20.6222 3.77085 20.6177 3.85749C20.6116 3.9502 20.5188 3.94564 20.455 3.95932C20.2557 4.0034 20.0626 4.05963 19.8969 4.18123C19.7478 4.29066 19.6718 4.44113 19.7007 4.62808C19.7265 4.79831 19.8102 4.94422 19.982 4.98981C20.2116 5.05061 20.4443 5.04605 20.6435 4.88646C20.7302 4.81806 20.791 4.67519 20.9279 4.84238C20.9507 4.87126 21.1393 4.86822 21.0967 4.69039C21.0237 4.38641 20.9735 4.07635 20.8899 3.77693C20.8154 3.50639 20.6344 3.34528 20.4154 3.36048ZM32.6239 4.8439C32.9356 4.84998 33.0938 5.07493 32.9873 5.36979C32.8991 5.61601 32.7896 5.85616 32.6832 6.0963C32.6406 6.19053 32.6178 6.26045 32.7379 6.31517C32.8611 6.3714 32.9006 6.30301 32.9387 6.21029C33.0466 5.94887 33.1652 5.69201 33.2611 5.42602C33.4268 4.97005 33.1287 4.584 32.6406 4.61592C32.5326 4.62352 32.417 4.70559 32.3927 4.49584C32.3851 4.43049 32.2239 4.35145 32.1524 4.5308C32.0004 4.91534 31.8361 5.29531 31.6765 5.67681C31.6384 5.76648 31.6156 5.844 31.7373 5.89415C31.8589 5.94431 31.8985 5.87743 31.9365 5.78168C32.0201 5.57649 32.1068 5.37131 32.2011 5.16916C32.2878 4.98829 32.4247 4.86214 32.6239 4.8439ZM21.8175 3.9806C21.8023 3.55199 21.9483 3.34072 22.2251 3.31944C22.4684 3.3012 22.5779 3.45167 22.6174 3.85445C22.6372 4.05507 22.6631 4.2557 22.6828 4.45785C22.6935 4.57184 22.7452 4.6144 22.8623 4.60072C22.9855 4.58704 22.9748 4.51104 22.9657 4.42897C22.9322 4.14779 22.9033 3.86661 22.8608 3.58694C22.7878 3.10514 22.3468 2.90907 21.9316 3.16897C21.8388 3.22673 21.7674 3.37416 21.6381 3.18873C21.6046 3.14161 21.4389 3.16441 21.4602 3.33008C21.5134 3.75109 21.559 4.17211 21.6092 4.59312C21.6198 4.68887 21.6655 4.73143 21.7704 4.72079C21.889 4.70863 21.8921 4.63872 21.8829 4.55208C21.8571 4.33929 21.8343 4.12955 21.8175 3.9806ZM39.6603 9.41272C39.6633 9.16498 39.4611 8.91724 39.1965 8.83972C39.1022 8.81236 38.9547 8.87468 39.0049 8.65125C39.0292 8.54638 38.8954 8.44607 38.76 8.59502C38.4939 8.88684 38.2141 9.16498 37.9495 9.4568C37.8963 9.51456 37.7533 9.56471 37.881 9.69543C38.0042 9.8231 38.062 9.72582 38.1456 9.64983C38.354 9.46136 38.5076 9.21058 38.7661 9.07531C38.9851 8.96131 39.16 9.03731 39.3029 9.20754C39.4459 9.37777 39.3638 9.5328 39.2436 9.66807C39.0687 9.86413 38.8817 10.0496 38.6992 10.2396C38.6338 10.3079 38.5715 10.3642 38.6779 10.4615C38.7737 10.5481 38.8254 10.5177 38.8984 10.4371C39.09 10.2289 39.2908 10.0283 39.4839 9.82158C39.5903 9.70911 39.6557 9.57231 39.6603 9.41272ZM44.2468 26.9053C44.2468 27.2381 44.3746 27.4312 44.6331 27.4722C44.9327 27.5193 45.0772 27.34 45.1669 27.0892C45.2003 26.9949 45.2368 26.8992 45.2809 26.8095C45.3174 26.7335 45.3722 26.6712 45.4695 26.6925C45.5623 26.7138 45.5927 26.7898 45.6048 26.8733C45.6246 27.001 45.6018 27.1226 45.4984 27.2032C45.3874 27.2898 45.4041 27.3856 45.4817 27.46C45.5942 27.5679 45.6672 27.4464 45.725 27.3764C45.8847 27.1804 45.8999 26.9509 45.8345 26.7168C45.7843 26.5359 45.6626 26.4219 45.471 26.3976C45.2733 26.3733 45.1395 26.466 45.0574 26.6378C44.9935 26.7746 44.9418 26.9174 44.8779 27.0542C44.843 27.1317 44.7821 27.1895 44.6894 27.1773C44.586 27.1637 44.5297 27.0877 44.5099 26.9949C44.4734 26.8141 44.513 26.6484 44.6635 26.5329C44.7761 26.4463 44.7076 26.3718 44.659 26.3019C44.5829 26.194 44.516 26.2806 44.4613 26.3292C44.2879 26.4812 44.2438 26.6849 44.2468 26.9053ZM24.6066 4.2937C24.9077 3.93044 25.1586 3.62798 25.4095 3.32704C25.4779 3.24497 25.5296 3.15529 25.484 3.05042C25.4475 2.96834 25.3593 3.0033 25.2939 3.00178C25.0202 2.99418 24.748 2.99114 24.4743 2.99114C24.4013 2.99114 24.2963 2.96074 24.2887 3.08538C24.2811 3.22521 24.3876 3.21305 24.4788 3.21305C24.675 3.21609 24.8712 3.20697 25.0932 3.26928C24.8149 3.6067 24.5533 3.91372 24.307 4.23138C24.2279 4.33322 24.0956 4.50192 24.3678 4.52472C24.6887 4.5536 25.0141 4.54296 25.338 4.55056C25.4293 4.55208 25.5023 4.52928 25.4947 4.41833C25.4871 4.31498 25.4034 4.33018 25.335 4.32714C25.1145 4.3165 24.894 4.30738 24.6066 4.2937ZM10.6964 9.85806C11.0355 9.86413 11.396 9.61487 11.4826 9.30025C11.5054 9.21514 11.5815 9.09355 11.4233 9.05099C11.2986 9.01755 11.2393 9.07531 11.2317 9.20754C11.2287 9.26225 11.1861 9.31849 11.1496 9.36561C11.0036 9.55408 10.8044 9.62855 10.5854 9.54344C10.336 9.44616 10.1581 9.25313 10.1566 8.97347C10.155 8.72421 10.3162 8.5631 10.555 8.5023C10.6858 8.46887 10.8074 8.43543 10.7512 8.27736C10.6964 8.12385 10.5565 8.21656 10.4698 8.23936C10.0912 8.33815 9.8372 8.73941 9.89347 9.1209C9.95278 9.52368 10.3101 9.85198 10.6964 9.85806ZM9.0966 11.2396C8.91412 11.1834 8.80158 11.1515 8.68905 11.1135C8.45942 11.036 8.22675 10.963 8.00168 10.8749C7.84656 10.8141 7.79942 10.9326 7.74315 11.0177C7.69145 11.0937 7.77813 11.1181 7.83135 11.1348C8.27237 11.2822 8.7149 11.4251 9.15439 11.5755C9.26084 11.612 9.32319 11.574 9.38706 11.4935C9.44485 11.422 9.46158 11.3643 9.41596 11.2776C9.19545 10.8688 8.97799 10.4584 8.76508 10.045C8.69817 9.91581 8.65255 9.94773 8.57195 10.0344C8.47462 10.1377 8.53697 10.2168 8.58564 10.3049C8.74379 10.5937 8.90195 10.884 9.0966 11.2396ZM45.1821 25.3139C45.1821 25.3094 45.1821 25.3063 45.1821 25.3018C45.0513 25.3018 44.919 25.2987 44.7882 25.3018C44.4354 25.3109 44.2575 25.5602 44.3563 25.8961C44.3791 25.9705 44.408 26.0207 44.4978 26.0207C44.5981 26.0207 44.6164 25.9705 44.6057 25.8869C44.5677 25.6042 44.7411 25.5678 44.9601 25.583C45.1015 25.5936 45.2429 25.6103 45.3828 25.6027C45.6033 25.5906 45.766 25.6179 45.7083 25.9052C45.6946 25.9751 45.6839 26.0754 45.8117 26.0784C45.9364 26.0815 45.9242 25.9888 45.9333 25.9113C45.9501 25.7638 45.9318 25.5906 46.1766 25.6468C46.2785 25.6696 46.3804 25.6726 46.3911 25.5191C46.4017 25.358 46.2907 25.3671 46.1919 25.3702C46.0443 25.3732 45.9318 25.3565 45.9668 25.1619C45.9805 25.089 45.9531 25.0191 45.8573 25.0145C45.7569 25.01 45.7387 25.0875 45.7387 25.1559C45.7387 25.3458 45.6337 25.361 45.4832 25.3352C45.3843 25.317 45.2825 25.32 45.1821 25.3139ZM40.1774 10.1332C40.1774 10.2289 40.1089 10.2624 40.0587 10.3079C39.8717 10.4782 39.6755 10.6393 39.5006 10.8217C39.2756 11.0542 39.3638 11.4144 39.6573 11.5436C39.7439 11.5816 39.7896 11.5482 39.8398 11.4935C39.8991 11.4312 39.8686 11.3886 39.8124 11.3476C39.5675 11.1667 39.6694 11.0147 39.8504 10.8642C39.9751 10.7609 40.1013 10.6575 40.2123 10.5405C40.3431 10.4037 40.445 10.3748 40.5667 10.5527C40.6108 10.618 40.6655 10.7533 40.7963 10.6286C40.9256 10.5055 40.7948 10.4417 40.7339 10.3885C40.5849 10.2578 40.6062 10.1651 40.7552 10.0572C40.8282 10.004 40.9377 9.94773 40.8237 9.82006C40.7142 9.69847 40.6533 9.7851 40.5758 9.84894C40.4891 9.92037 40.4131 10.0541 40.2899 9.88693C40.2458 9.82766 40.1986 9.74102 40.0968 9.8231C39.9918 9.90821 40.0359 9.97509 40.1104 10.0465C40.1363 10.0739 40.1576 10.1088 40.1774 10.1332ZM28.4936 3.60366C28.5802 3.57934 28.711 3.69334 28.746 3.53223C28.784 3.35136 28.6289 3.3772 28.5285 3.36504C28.3734 3.3468 28.3141 3.28904 28.3643 3.12641C28.3917 3.03522 28.4571 2.90147 28.2654 2.87563C28.1073 2.85435 28.1058 2.9729 28.0951 3.06562C28.0799 3.19481 28.048 3.28144 27.8913 3.24953C27.8123 3.23433 27.7241 3.21761 27.7134 3.34376C27.7043 3.45927 27.7834 3.48055 27.867 3.48511C28.0237 3.49423 28.0054 3.58238 27.9826 3.69486C27.9324 3.9426 27.8853 4.19186 27.8564 4.44265C27.8168 4.78767 28.0632 5.00349 28.4023 4.94574C28.4905 4.93054 28.5225 4.88798 28.5346 4.81046C28.5468 4.73143 28.5103 4.69951 28.4358 4.69951C28.1073 4.70103 28.1195 4.49128 28.162 4.26178C28.1925 4.10219 28.232 3.94564 28.2518 3.78605C28.2685 3.6295 28.305 3.52159 28.4936 3.60366ZM3.42883 24.0266C3.42883 24.019 3.42883 24.0099 3.42883 24.0023C3.11556 24.0023 2.80381 24.0038 2.49054 24.0023C2.37344 24.0023 2.23962 23.9536 2.24114 24.1558C2.24114 24.3458 2.378 24.2971 2.47533 24.3002C3.111 24.3108 3.74666 24.3154 4.38233 24.3245C4.48726 24.326 4.58307 24.3458 4.58763 24.1877C4.59219 24.0114 4.48118 24.0266 4.36712 24.0281C4.05537 24.0266 3.7421 24.0266 3.42883 24.0266ZM41.9566 14.7217C41.984 14.7065 42.0114 14.6929 42.0372 14.6777C42.679 14.3129 43.3207 13.9481 43.9655 13.5864C44.0583 13.5347 44.0689 13.4876 44.0187 13.3949C43.9655 13.2976 43.9077 13.2946 43.8225 13.3432C43.1717 13.714 42.5208 14.0819 41.8699 14.4527C41.8182 14.4816 41.762 14.5135 41.8106 14.591C41.8486 14.6488 41.8623 14.7293 41.9566 14.7217ZM45.2216 23.905C45.2216 23.908 45.2216 23.9111 45.2216 23.9141C45.0194 23.9141 44.8186 23.9141 44.6164 23.9141C44.5221 23.9141 44.4339 23.9111 44.4293 24.0463C44.4232 24.1998 44.5206 24.1998 44.6285 24.1983C44.8095 24.1968 44.992 24.1968 45.173 24.1983C45.576 24.2044 45.6474 24.2546 45.7402 24.6589C45.766 24.7698 45.8193 24.7835 45.906 24.782C46.0261 24.7804 46.0307 24.6968 46.0185 24.6148C46.0063 24.5357 45.985 24.4567 45.9531 24.3853C45.909 24.285 45.766 24.2059 45.9577 24.0904C46.0139 24.057 45.9911 23.8974 45.8284 23.9019C45.6246 23.9111 45.4239 23.905 45.2216 23.905ZM8.25412 12.9024C8.30126 12.8507 8.34232 12.8082 8.3773 12.7626C8.43052 12.6942 8.37882 12.6547 8.33015 12.6182C8.16135 12.492 7.98799 12.3689 7.82071 12.2382C7.50896 11.995 7.4755 11.8765 7.65495 11.5299C7.71122 11.422 7.66407 11.3886 7.60324 11.3339C7.51808 11.2579 7.45877 11.2898 7.41467 11.3764C7.3797 11.4479 7.3432 11.5223 7.32343 11.5983C7.29301 11.7123 7.33864 11.8461 7.12421 11.8537C7.02232 11.8567 7.00864 12.0072 7.14246 12.0984C7.47398 12.3279 7.79638 12.5711 8.12333 12.8082C8.16287 12.8371 8.20241 12.8659 8.25412 12.9024ZM41.695 11.5147C41.6646 11.4828 41.6205 11.4281 41.5703 11.381C41.4548 11.27 41.2038 11.2959 41.2449 11.0162C41.2586 10.925 41.1354 10.9129 41.0411 10.9919C40.7309 11.2503 40.4115 11.4995 40.0968 11.7519C40.0177 11.8142 39.9219 11.8658 40.0298 11.989C40.1363 12.1121 40.2062 12.0178 40.2823 11.9601C40.4191 11.8552 40.553 11.7473 40.6883 11.6439C41.0229 11.3901 41.105 11.3871 41.4441 11.6531C41.5171 11.7108 41.5643 11.7078 41.6281 11.6637C41.6692 11.6318 41.7148 11.6044 41.695 11.5147ZM16.4174 4.57032C16.2866 4.59616 16.1984 4.62048 16.2729 4.78767C16.4357 5.157 16.5771 5.53546 16.7292 5.90935C16.7641 5.99447 16.793 6.08414 16.9223 6.0355C17.0683 5.98079 17.0242 5.88959 16.9831 5.79232C16.9132 5.62361 16.8447 5.45642 16.7809 5.28619C16.6425 4.91382 16.6714 4.80742 17.0059 4.58552C17.1017 4.52168 17.0926 4.46393 17.0668 4.38641C17.0287 4.27242 16.9482 4.2937 16.8736 4.33777C16.8052 4.37881 16.7429 4.43201 16.682 4.48217C16.6029 4.54904 16.5756 4.76791 16.4174 4.57032ZM10.1201 10.6636C10.1687 10.618 10.2204 10.583 10.2539 10.5344C10.3132 10.4493 10.2311 10.4098 10.1839 10.3642C9.89651 10.0815 9.60909 9.8003 9.32167 9.5176C9.25628 9.45376 9.20762 9.38233 9.10269 9.48264C8.99471 9.58751 9.04642 9.64983 9.1255 9.72582C9.40835 9.99789 9.68969 10.2715 9.97255 10.5435C10.0166 10.5861 10.0668 10.6195 10.1201 10.6636ZM23.7991 3.75565C23.7854 3.75565 23.7717 3.75565 23.758 3.75565C23.758 3.56415 23.758 3.37416 23.758 3.18265C23.758 3.08842 23.761 3.0033 23.6242 3.00026C23.4691 2.99722 23.4691 3.09298 23.4736 3.19937C23.4903 3.60062 23.5071 4.00188 23.5253 4.40313C23.5284 4.48521 23.5314 4.57184 23.65 4.56576C23.7656 4.5612 23.8021 4.49736 23.8006 4.38793C23.796 4.17667 23.7991 3.9654 23.7991 3.75565ZM29.4683 3.71766C29.4957 3.5839 29.4455 3.55655 29.3634 3.53983C29.2585 3.51855 29.2144 3.56718 29.1931 3.65686C29.1003 4.06875 29.0091 4.48065 28.9118 4.89254C28.8874 4.99893 28.9254 5.04301 29.0228 5.05973C29.1018 5.07493 29.1566 5.06125 29.1779 4.96853C29.2767 4.5384 29.3786 4.10675 29.4683 3.71766ZM8.86849 9.09507C8.85937 8.98259 8.8031 8.90964 8.68601 8.89596C8.56131 8.88228 8.49287 8.95219 8.48375 9.06771C8.47462 9.1817 8.53089 9.26073 8.65711 9.26833C8.78029 9.27593 8.84416 9.2121 8.86849 9.09507ZM29.4836 3.15073C29.6387 3.14161 29.6934 3.06714 29.6873 2.94859C29.6812 2.82851 29.6052 2.76012 29.4881 2.77076C29.3756 2.77988 29.2995 2.85587 29.3071 2.97442C29.3163 3.08994 29.3938 3.15073 29.4836 3.15073ZM23.5785 2.21447C23.4615 2.23271 23.393 2.29503 23.3961 2.41662C23.3991 2.53973 23.4751 2.60357 23.5907 2.60053C23.7093 2.59749 23.7747 2.52301 23.7717 2.40294C23.7686 2.27983 23.6941 2.22359 23.5785 2.21447Z" fill="white" />
<path d="M24.488 48.5723C18.215 48.4811 12.7328 46.3699 8.12037 42.0959C5.03328 39.2369 2.88144 35.7745 1.59186 31.771C1.51126 31.5232 1.54472 31.4381 1.80781 31.3636C3.5308 30.8788 5.24923 30.3772 6.96461 29.8711C7.18816 29.8042 7.26268 29.8483 7.34328 30.0732C9.69433 36.6165 14.2413 40.772 21.0633 42.1384C27.0626 43.3392 32.3943 41.7052 36.9063 37.5558C39.1251 35.5161 40.6702 33.0219 41.6313 30.169C41.7012 29.9592 41.7712 29.9136 41.9871 29.979C43.7086 30.5049 45.4316 31.0217 47.1576 31.5308C47.3766 31.5962 47.4435 31.657 47.3644 31.9002C46.1691 35.5754 44.2211 38.7961 41.4807 41.5183C37.6606 45.3136 33.0741 47.6011 27.7287 48.3428C27.2375 48.4112 26.7448 48.4689 26.249 48.5009C25.6651 48.5404 25.0796 48.5875 24.488 48.5723ZM34.4093 44.1767C34.1204 43.9867 33.8527 43.8043 33.5805 43.6325C33.4558 43.5535 33.4163 43.5033 33.5394 43.3665C33.7584 43.1218 33.7584 42.827 33.5774 42.5564C33.4041 42.2965 33.1592 42.2296 32.8612 42.2919C32.5099 42.3664 32.2103 42.5655 31.8788 42.6886C31.6993 42.7555 31.6948 42.8406 31.7723 43.0033C32.0567 43.596 32.3274 44.1934 32.592 44.7953C32.6635 44.9579 32.7304 45.0096 32.9038 44.9169C33.0482 44.8393 33.138 44.7861 33.03 44.6053C32.9327 44.4411 32.8597 44.2618 32.7897 44.0824C32.7608 44.011 32.6498 43.9274 32.7699 43.8468C32.8734 43.7769 32.9798 43.7374 33.1015 43.8377C33.2581 43.9654 33.4436 44.0596 33.5881 44.1979C33.8588 44.4578 34.1112 44.4305 34.4093 44.1767ZM13.0323 41.6186C13.0263 41.3374 12.7206 41.0608 12.3465 41.0502C12.2264 41.0471 12.1731 41.0395 12.1518 40.9012C12.1093 40.617 11.8994 40.4787 11.6439 40.4011C11.5435 40.3707 11.4462 40.4057 11.4067 40.2203C11.358 39.9938 11.139 39.9892 10.99 40.1762C10.7588 40.4695 10.5307 40.7675 10.2996 41.0623C10.1977 41.1915 10.0867 41.2857 10.2996 41.4453C10.4988 41.5928 10.5566 41.4697 10.6509 41.3496C10.7938 41.1657 10.9337 40.9802 11.0873 40.8054C11.2303 40.6428 11.4052 40.6352 11.574 40.7675C11.7534 40.9073 11.7047 41.0654 11.5861 41.2173C11.4264 41.4256 11.2698 41.6384 11.098 41.8375C10.9687 41.9864 11.0843 42.0381 11.177 42.1171C11.2805 42.2053 11.3595 42.2631 11.466 42.1111C11.6241 41.8892 11.7929 41.6718 11.9754 41.4712C12.1047 41.3298 12.2705 41.3025 12.4362 41.4347C12.6126 41.5745 12.5822 41.7296 12.4651 41.8846C12.313 42.0868 12.1655 42.2935 11.9998 42.4835C11.8811 42.6187 11.9116 42.6962 12.0423 42.795C12.164 42.8878 12.2431 42.9364 12.3526 42.7738C12.5046 42.5473 12.6856 42.3421 12.8529 42.1247C12.9609 41.9819 13.0293 41.8253 13.0323 41.6186ZM21.3979 46.4018C21.6138 46.3775 21.8724 46.6192 21.9743 46.3137C22.0898 45.9686 22.3134 45.9139 22.6236 45.9732C22.7529 45.9975 22.8852 46.0158 23.0144 46.0112C23.1848 46.0051 23.2593 46.075 23.3125 46.2362C23.4524 46.6648 23.4813 46.6739 23.9466 46.5903C23.6714 45.8197 23.3931 45.0537 23.1285 44.2815C23.0768 44.1295 22.9749 44.1265 22.8548 44.1037C22.7057 44.0733 22.6373 44.1432 22.5719 44.2618C22.3134 44.7405 22.0472 45.2163 21.7842 45.6935C21.6534 45.9307 21.5256 46.1662 21.3979 46.4018ZM29.0457 44.3089C29.0457 44.7953 29.2464 45.3485 29.5125 45.6221C29.7498 45.8653 30.0357 45.92 30.3489 45.8364C30.6652 45.7513 30.8827 45.5568 30.9511 45.2239C31.0546 44.7299 30.9131 44.28 30.6805 43.8575C30.4493 43.438 30.0874 43.2951 29.6585 43.4136C29.254 43.5261 29.0457 43.8286 29.0457 44.3089ZM40.9196 38.6699C41.1553 38.6775 41.5187 38.3523 41.5248 38.1562C41.5294 38.0301 41.4199 37.9905 41.3408 37.9389C41.242 37.8735 41.2343 37.9845 41.2009 38.0361C41.0777 38.2261 40.9393 38.2292 40.7766 38.0848C40.6793 37.9981 40.5774 37.9115 40.4649 37.8431C40.2808 37.7322 40.2656 37.6197 40.4238 37.4707C40.5257 37.375 40.5409 37.2944 40.404 37.1865C40.255 37.0679 40.1896 37.1394 40.1242 37.2503C40.0269 37.419 39.9174 37.454 39.7775 37.302C39.6589 37.1728 39.5707 37.1607 39.4505 37.3233C39.3395 37.4722 39.3319 37.5619 39.4977 37.6516C39.7106 37.7671 39.6573 37.9024 39.5114 38.0209C39.3334 38.1653 39.1798 38.3158 39.1737 38.5651C39.1722 38.6639 39.1068 38.6167 39.049 38.6213C38.9046 38.6335 38.827 38.7611 38.7708 38.8706C38.7175 38.9739 38.8483 39.018 38.9091 39.0743C39.2042 39.3494 39.5114 39.6138 39.8003 39.895C39.9387 40.0303 40.0071 39.9649 40.112 39.8555C40.2291 39.7354 40.2474 39.6503 40.1014 39.55C40.0436 39.5105 39.9949 39.4573 39.9417 39.4102C39.3106 38.8417 39.3137 38.8311 39.8535 38.1836C39.9585 38.0589 40.0284 38.0468 40.1409 38.1562C40.2215 38.2322 40.3128 38.2976 40.4025 38.3629C40.5743 38.4891 40.7234 38.6502 40.9196 38.6699ZM36.8075 42.5701C36.8896 42.5488 36.917 42.5397 36.9459 42.5336C37.4158 42.447 37.6865 42.1719 37.7017 41.7645C37.7184 41.3207 37.4234 40.9164 37.0082 40.8161C36.6402 40.7279 36.2479 40.9362 36.0532 41.3359C36.0137 41.418 36.0076 41.4423 35.892 41.4195C35.7004 41.383 35.5331 41.608 35.6289 41.7372C36.0471 42.3087 36.4744 42.871 36.8896 43.444C37.0097 43.6082 37.0873 43.4957 37.1831 43.4319C37.282 43.3665 37.3671 43.3118 37.2576 43.1765C37.104 42.9911 36.9687 42.7905 36.8075 42.5701ZM20.5721 46.3C20.8702 46.3076 21.1865 46.1009 21.2778 45.7604C21.3781 45.382 21.2656 45.1448 20.8732 44.9138C20.7425 44.8363 20.6071 44.7679 20.4794 44.6858C20.3729 44.6174 20.2954 44.5232 20.3364 44.3818C20.379 44.2329 20.4946 44.1782 20.6375 44.1767C20.8155 44.1736 20.9675 44.2299 21.1044 44.3545C21.2914 44.5262 21.3918 44.2982 21.4937 44.2207C21.6245 44.1204 21.4633 44.052 21.3964 44.0019C21.0846 43.7724 20.7303 43.7146 20.3592 43.8028C20.0673 43.8711 19.8848 44.0657 19.8346 44.3651C19.7829 44.6737 19.9228 44.8925 20.1783 45.0476C20.3425 45.1479 20.5113 45.2376 20.671 45.344C20.7774 45.4154 20.8337 45.5218 20.7957 45.6586C20.7607 45.7817 20.6664 45.8349 20.5539 45.8623C20.3106 45.92 20.119 45.8273 19.9623 45.6479C19.7783 45.4367 19.6779 45.6738 19.5685 45.7376C19.4255 45.8212 19.5654 45.9139 19.6278 45.9732C19.8559 46.1982 20.1463 46.2772 20.5721 46.3ZM24.9366 46.6663C24.9823 46.6602 25.0629 46.6541 25.1419 46.642C25.5586 46.5721 25.8126 46.3243 25.8415 45.961C25.8734 45.5598 25.7107 45.3485 25.2575 45.1996C25.1039 45.1494 24.9473 45.1053 24.7983 45.0461C24.7009 45.0065 24.6295 44.929 24.6295 44.815C24.6295 44.6904 24.7009 44.6098 24.8104 44.5597C25.002 44.473 25.186 44.4928 25.3594 44.6038C25.5921 44.7542 25.6347 44.5019 25.7153 44.4107C25.84 44.2678 25.6529 44.2329 25.5708 44.1979C25.2043 44.0414 24.8378 44.0566 24.4911 44.2526C24.2401 44.3925 24.12 44.6159 24.1413 44.9093C24.1626 45.1965 24.3253 45.3728 24.5823 45.4686C24.7329 45.5248 24.8925 45.5598 25.0446 45.6145C25.221 45.6783 25.4035 45.7619 25.3427 45.9975C25.2879 46.2103 25.1009 46.2483 24.9093 46.2559C24.7952 46.2605 24.6781 46.2316 24.5975 46.1556C24.3572 45.9246 24.2371 46.1693 24.1595 46.2985C24.0577 46.4657 24.2736 46.4961 24.3709 46.5523C24.5321 46.645 24.7177 46.6602 24.9366 46.6663ZM8.32263 36.1529C8.37433 36.2137 8.423 36.2609 8.46254 36.3141C8.61461 36.5284 8.77125 36.7412 8.91115 36.9631C8.99327 37.0938 9.0617 37.0847 9.17272 37.0011C9.27917 36.9205 9.36129 36.8673 9.2518 36.7184C8.99479 36.3673 8.75148 36.007 8.50968 35.6453C8.44429 35.548 8.3865 35.5359 8.29069 35.6027C7.70977 36.007 7.12733 36.4113 6.54033 36.8065C6.37153 36.9205 6.47494 37.0026 6.54185 37.0999C6.60876 37.1971 6.65438 37.3248 6.81558 37.1987C6.99047 37.0619 7.18512 36.9494 7.36152 36.8156C7.46645 36.7351 7.52728 36.7442 7.59876 36.8567C7.72954 37.0619 7.88314 37.2519 8.00784 37.4586C8.10212 37.6151 8.18272 37.5954 8.32111 37.5087C8.47774 37.4099 8.42908 37.3294 8.35 37.2199C8.23138 37.0558 8.11581 36.8901 8.00936 36.7184C7.96069 36.6393 7.82079 36.5588 7.89986 36.4691C8.00632 36.346 8.16599 36.2654 8.32263 36.1529ZM17.5733 44.9047C17.5474 44.7998 17.5292 44.7527 17.5246 44.7041C17.5048 44.4214 17.4942 44.1387 17.4714 43.8559C17.4531 43.631 17.2417 43.6219 17.1049 43.6158C16.9315 43.6082 17.0227 43.7845 17.0288 43.8711C17.0562 44.2952 17.1064 44.7177 17.1368 45.1403C17.1657 45.5476 16.9269 45.7361 16.5376 45.5978C16.3977 45.5476 16.384 45.6251 16.3445 45.7027C16.2974 45.7923 16.238 45.8714 16.3673 45.958C16.6289 46.1328 17.0045 46.145 17.2098 45.9215C17.7284 45.3576 18.2256 44.774 18.732 44.1949C18.4492 43.9867 18.2485 44.0171 18.0675 44.2982C17.9397 44.4989 17.7664 44.6721 17.5733 44.9047ZM9.69281 38.7535C9.68673 38.2398 9.22899 37.7717 8.73018 37.7702C8.27244 37.7671 7.87401 38.1577 7.87097 38.6137C7.86641 39.132 8.34544 39.6214 8.85184 39.6138C9.31111 39.6062 9.69889 39.211 9.69281 38.7535ZM34.7226 43.2601C35.0374 43.0701 35.3476 42.8862 35.6548 42.6993C35.7232 42.6567 35.8251 42.6446 35.7597 42.5032C35.5939 42.1491 35.1697 41.9363 34.8047 42.0472C34.3789 42.1749 34.0945 42.5534 34.1127 42.9668C34.1295 43.3498 34.4199 43.6979 34.7803 43.7663C35.2107 43.8483 35.6928 43.6097 35.8646 43.2237C35.8951 43.1537 35.9696 43.0717 35.9027 43.0017C35.8297 42.9273 35.7141 42.9334 35.6168 42.944C35.5209 42.9546 35.5225 43.0625 35.4845 43.1294C35.2974 43.4486 35.0039 43.5064 34.7226 43.2601ZM13.3289 42.795C13.6634 42.9926 13.9706 43.1674 14.2687 43.3544C14.4086 43.4425 14.4725 43.4106 14.5455 43.2708C14.7492 42.8802 14.6884 42.4789 14.3736 42.2296C14.0087 41.9408 13.5129 41.9317 13.1996 42.2083C12.9061 42.4667 12.8134 42.8558 12.9624 43.2009C13.1251 43.5793 13.5646 43.8316 13.9737 43.78C14.0451 43.7708 14.1714 43.7936 14.1425 43.6705C14.1181 43.5672 14.1136 43.4182 13.9524 43.4015C13.8931 43.3954 13.8307 43.4121 13.7714 43.4076C13.446 43.3863 13.2772 43.1674 13.3289 42.795ZM37.4979 40.4118C37.4888 40.8799 37.8598 41.2721 38.3221 41.2842C38.8407 41.2979 39.3289 40.8282 39.3319 40.3145C39.3334 39.8525 38.9502 39.4634 38.4879 39.4603C37.9708 39.4588 37.507 39.9026 37.4979 40.4118ZM27.5356 46.4018C27.7546 46.3426 28.0024 46.4155 28.0663 46.221C28.2914 45.5324 28.4936 44.8348 28.67 44.1311C28.7446 43.8301 28.6123 43.7313 28.3096 43.786C27.9127 43.8559 27.5173 43.938 27.1189 43.9988C26.9638 44.0231 26.909 44.0763 26.9471 44.2329C26.979 44.3666 27.0094 44.4502 27.1843 44.4046C27.417 44.3423 27.6603 44.321 27.8975 44.2724C28.1104 44.2298 28.1925 44.2557 28.1104 44.5065C27.9097 45.1175 27.7348 45.7376 27.5356 46.4018ZM40.5455 36.8308C40.5424 37.0345 40.6321 37.1789 40.8101 37.2731C40.9849 37.3658 41.1446 37.3294 41.2891 37.2139C41.4077 37.1196 41.5142 37.0117 41.6297 36.9144C41.6936 36.8612 41.7712 36.8187 41.8487 36.881C41.9217 36.9403 41.9126 37.0239 41.8867 37.1044C41.835 37.264 41.7073 37.337 41.5613 37.3947C41.3666 37.4722 41.4792 37.6212 41.5096 37.7276C41.5522 37.8765 41.6678 37.7762 41.7301 37.7428C42.0449 37.5741 42.2259 37.3035 42.276 36.9524C42.3065 36.7457 42.2395 36.5755 42.0464 36.4661C41.8548 36.3566 41.6769 36.3855 41.5111 36.5147C41.3925 36.6074 41.2845 36.7153 41.1674 36.8126C41.1096 36.8612 41.0397 36.8871 40.9743 36.8339C40.9104 36.7822 40.918 36.7108 40.9484 36.6393C40.9986 36.5192 41.096 36.46 41.207 36.3992C41.3636 36.3141 41.2937 36.1529 41.2496 36.0496C41.2024 35.9386 41.0853 36.0268 41.0184 36.0663C40.7325 36.2396 40.5637 36.4904 40.5455 36.8308ZM17.1855 42.6537C17.1429 42.5275 17.003 42.5367 16.9041 42.4835C16.7642 42.4075 16.7536 42.5366 16.7232 42.6081C16.4388 43.2753 16.162 43.9471 15.8731 44.6129C15.8046 44.7694 15.8016 44.8561 15.9871 44.9305C16.1635 45.0005 16.2259 44.9625 16.2943 44.7953C16.5635 44.1326 16.8463 43.4744 17.1246 42.8148C17.1444 42.7692 17.1611 42.7206 17.1855 42.6537ZM9.35521 40.5683C9.43276 40.506 9.47382 40.4771 9.5088 40.4422C9.65783 40.2917 9.80078 40.1367 9.95285 39.9892C10.2007 39.7476 10.3817 39.7354 10.6281 39.968C10.7345 40.0683 10.8014 40.088 10.8927 39.9725C10.9398 39.9117 11.0402 39.8707 11.0006 39.7765C10.9413 39.6336 10.8075 39.5758 10.6706 39.5348C10.5748 39.5059 10.4684 39.5637 10.4927 39.3524C10.517 39.1472 10.2251 39.0727 10.07 39.2293C9.78557 39.515 9.50424 39.8038 9.22442 40.0941C9.17424 40.1473 9.06779 40.1914 9.1271 40.2872C9.18945 40.3875 9.27613 40.4741 9.35521 40.5683ZM14.8146 44.3834C14.9044 44.3879 14.9272 44.3271 14.953 44.2739C15.0412 44.0931 15.1279 43.9107 15.2176 43.7298C15.388 43.3924 15.5674 43.3133 15.8974 43.4896C16.0708 43.5824 16.0784 43.4699 16.1301 43.3787C16.1894 43.2738 16.2335 43.1765 16.0799 43.1112C15.9658 43.0625 15.8518 43.0382 15.7256 43.0504C15.6632 43.0565 15.5568 43.1659 15.5689 42.9607C15.5765 42.8391 15.3758 42.7981 15.2587 42.7662C15.1462 42.7358 15.1416 42.8786 15.1051 42.9516C14.9272 43.3027 14.7538 43.6553 14.5835 44.0095C14.4922 44.201 14.6185 44.391 14.8146 44.3834Z" fill="white" />
<path d="M16.4539 30.0073C16.4402 27.9935 17.8757 26.4873 20.172 26.5694C22.0502 26.6362 23.4112 28.0589 23.393 30.0362C23.3732 32.047 21.8798 33.4773 19.8314 33.4453C17.818 33.4134 16.4326 32.003 16.4539 30.0073ZM17.6872 29.9663C17.6872 31.5956 18.9463 32.6656 20.4443 32.3206C22.2813 31.8966 22.5991 29.4997 21.5863 28.3704C20.9735 27.6865 19.9835 27.4524 19.0847 27.7883C18.2225 28.109 17.6872 28.9434 17.6872 29.9663Z" fill="white" />
<path d="M14.8002 28.1479C14.3881 27.6965 13.8787 27.5688 13.3038 27.6767C12.8993 27.7527 12.6393 28.0096 12.5891 28.3637C12.5419 28.692 12.7001 28.9626 13.0909 29.1434C13.3829 29.2787 13.6947 29.3714 13.9988 29.4824C14.1418 29.534 14.2877 29.5766 14.4276 29.6328C15.3142 29.9915 15.6944 30.5281 15.6823 31.4005C15.6701 32.2775 15.2093 32.969 14.3699 33.2518C13.2977 33.6135 12.2758 33.5147 11.3603 32.7867C11.1854 32.6483 11.0912 32.5161 11.3375 32.3535C11.412 32.3048 11.4668 32.2258 11.5322 32.162C11.6782 32.0221 11.8044 31.8139 11.9777 31.7622C12.1633 31.7075 12.2439 31.9872 12.4005 32.0875C12.8887 32.3991 13.3936 32.4736 13.9288 32.2365C14.2391 32.0981 14.4353 31.858 14.4489 31.513C14.4626 31.1771 14.2801 30.9384 13.9942 30.7804C13.7448 30.6421 13.4741 30.5569 13.2065 30.4658C12.948 30.3776 12.6895 30.2894 12.4385 30.1831C11.812 29.9171 11.4196 29.4687 11.3634 28.7665C11.3025 28.005 11.5611 27.3971 12.218 26.9791C13.1289 26.3985 14.5949 26.4471 15.4435 27.0718C15.6153 27.1979 15.6412 27.2846 15.48 27.4381C15.2458 27.6615 15.0314 27.9047 14.8002 28.1479Z" fill="white" />
<path d="M35.2027 32.3617C35.995 32.3617 36.7189 32.3571 37.4442 32.3632C38.0312 32.3677 37.9567 32.2705 37.9613 32.8739C37.9658 33.4454 37.9628 33.4454 37.391 33.4454C36.1243 33.4454 34.8575 33.4408 33.5922 33.45C33.3809 33.4515 33.3337 33.3907 33.3155 33.1809C33.2835 32.8131 33.4067 32.5638 33.685 32.3206C34.3633 31.7278 35.0263 31.1183 35.627 30.4435C35.9037 30.1319 36.1699 29.8111 36.3402 29.4281C36.5653 28.922 36.6428 28.3945 36.252 27.9416C35.8673 27.4947 35.338 27.519 34.8164 27.6406C34.5184 27.709 34.2462 27.8519 34.0013 28.0343C33.8736 28.1285 33.8128 28.1027 33.7641 27.9613C33.7215 27.8367 33.6652 27.7181 33.6151 27.5965C33.4447 27.1846 33.4447 27.1816 33.8204 26.9688C34.4849 26.5918 35.2027 26.4459 35.957 26.5341C37.4412 26.7089 38.1985 28.0328 37.6541 29.4768C37.3682 30.2367 36.8329 30.8158 36.2657 31.3706C35.9342 31.6929 35.5905 31.9999 35.2027 32.3617Z" fill="white" />
<path d="M24.062 30.0209C24.0559 26.9248 26.994 26.0828 28.7535 26.8139C29.1048 26.9598 29.3983 27.1893 29.6674 27.4538C29.7739 27.5571 29.815 27.6453 29.6507 27.7289C29.6157 27.7471 29.5853 27.7775 29.5534 27.8003C29.3572 27.9432 29.1793 28.1499 28.9603 28.2137C28.7139 28.2852 28.5847 27.9766 28.3839 27.8641C27.7118 27.4826 26.7218 27.5982 26.0572 28.1605C24.903 29.1378 25.0642 31.2718 26.3538 32.0636C27.1917 32.5774 28.1254 32.4725 28.8113 31.7627C28.9588 31.6092 29.0546 31.6077 29.2067 31.7369C29.3603 31.8676 29.5245 31.9937 29.7009 32.0864C29.9701 32.2278 29.9138 32.357 29.7404 32.5363C29.0242 33.2811 28.13 33.5212 27.1385 33.4255C25.236 33.2416 24.062 31.9284 24.062 30.0209Z" fill="white" />
<path d="M23.7977 15.3074C24.847 15.315 25.7139 15.6235 26.3845 16.3986C26.5031 16.5354 26.529 16.6327 26.3495 16.7239C26.3313 16.733 26.3161 16.7467 26.2993 16.7588C25.945 17.0218 25.945 17.0218 25.6272 16.7208C24.6798 15.8226 23.0511 15.8196 22.1204 16.7376C21.4589 17.3896 21.284 18.1906 21.5836 19.0569C21.8999 19.9688 22.607 20.4415 23.5438 20.557C24.3939 20.6619 25.1542 20.4384 25.7534 19.8001C25.8918 19.6527 25.98 19.6755 26.1245 19.7819C26.5837 20.1208 26.5883 20.1162 26.1473 20.4992C25.0782 21.4264 23.2594 21.5768 22.0504 20.8366C20.9555 20.1679 20.4369 18.8851 20.7304 17.572C20.9874 16.4184 22.1143 15.4639 23.3643 15.3423C23.524 15.3226 23.6867 15.315 23.7977 15.3074Z" fill="white" />
<path d="M18.4477 21.1786C18.1603 21.1786 17.9215 21.1786 17.6828 21.1786C17.5352 21.1786 17.5155 21.0449 17.4683 20.9552C17.2265 20.4886 16.9878 20.0205 16.7597 19.5478C16.6897 19.4019 16.6061 19.3426 16.4373 19.3441C15.7697 19.3548 15.1006 19.3532 14.433 19.3441C14.2794 19.3426 14.2003 19.3943 14.1334 19.5326C13.9144 19.987 13.665 20.4278 13.4566 20.8883C13.3532 21.1163 13.224 21.1954 12.9761 21.1862C12.4149 21.168 12.4134 21.1802 12.6659 20.6771C13.5388 18.9337 14.4101 17.1889 15.2846 15.4471C15.3332 15.3513 15.3545 15.2343 15.4762 15.1628C16.4616 17.1554 17.4425 19.1435 18.4477 21.1786ZM16.2898 18.6024C16.0084 18.0431 15.7423 17.5126 15.4488 16.9259C15.1492 17.5202 14.8831 18.0507 14.6048 18.6024C15.1903 18.6024 15.721 18.6024 16.2898 18.6024Z" fill="white" />
<path d="M36.5289 21.179C36.2476 21.179 36.0195 21.1729 35.7898 21.1805C35.656 21.1851 35.621 21.0909 35.5769 21.0027C35.329 20.5163 35.0736 20.0345 34.8363 19.5421C34.7633 19.3916 34.6782 19.3399 34.5124 19.343C33.8448 19.3521 33.1757 19.3521 32.5081 19.343C32.353 19.3415 32.2769 19.3962 32.2115 19.533C31.9926 19.9874 31.7477 20.4312 31.5363 20.8902C31.4329 21.1152 31.3021 21.214 31.0527 21.1836C30.887 21.1638 30.7151 21.179 30.4946 21.179C31.515 19.1469 32.5126 17.1573 33.5361 15.1191C34.5428 17.1543 35.5237 19.1423 36.5289 21.179ZM33.5285 16.9309C33.238 17.5115 32.9673 18.0495 32.683 18.6195C33.2243 18.6195 33.7079 18.6165 34.1915 18.621C34.3314 18.6225 34.374 18.5891 34.3025 18.4493C34.0471 17.9583 33.7992 17.4659 33.5285 16.9309Z" fill="white" />
<path d="M27.5477 18.3152C27.5477 17.4443 27.5538 16.5735 27.5431 15.7041C27.5401 15.4898 27.5796 15.3971 27.8229 15.4047C28.5316 15.423 29.2403 15.3956 29.9474 15.4579C30.9602 15.5461 31.5716 16.2923 31.4332 17.2787C31.3465 17.8988 30.8918 18.3532 30.2075 18.5006C29.6782 18.6146 29.1384 18.5796 28.6046 18.6024C28.3947 18.6116 28.3293 18.6648 28.3324 18.8775C28.3446 19.5554 28.3293 20.2347 28.3415 20.9126C28.3446 21.1208 28.2928 21.1922 28.0739 21.1877C27.5477 21.1785 27.5477 21.1907 27.5477 20.6557C27.5477 19.8745 27.5477 19.0949 27.5477 18.3152ZM28.3369 17.0066C28.3369 17.23 28.3415 17.4519 28.3354 17.6753C28.3324 17.8015 28.375 17.8638 28.5073 17.8608C28.9726 17.8547 29.441 17.8927 29.9033 17.8182C30.3732 17.7422 30.6576 17.4003 30.6409 16.9625C30.6241 16.5476 30.3154 16.2437 29.8486 16.1905C29.4151 16.1403 28.9787 16.1631 28.5438 16.1555C28.3856 16.1525 28.3293 16.2133 28.3369 16.3698C28.3446 16.5811 28.3369 16.7938 28.3369 17.0066Z" fill="white" />
<path d="M19.6928 18.2908C19.6928 19.1723 19.6867 20.0524 19.6974 20.934C19.7004 21.1376 19.635 21.1878 19.4404 21.1863C18.9036 21.1832 18.9036 21.1924 18.9036 20.6421C18.9036 18.9915 18.9081 17.3408 18.8975 15.6917C18.896 15.4622 18.9598 15.3998 19.1864 15.4059C19.6928 15.4181 19.6928 15.4059 19.6928 15.9227C19.6928 16.71 19.6928 17.5004 19.6928 18.2908Z" fill="white" />
<path d="M14.752 6.70727C14.2532 6.70119 13.8137 6.23457 13.8091 5.70565C13.8046 5.21167 14.2501 4.7861 14.7535 4.8013C15.2462 4.8165 15.6872 5.30135 15.6796 5.82116C15.6735 6.31057 15.2508 6.71335 14.752 6.70727Z" fill="white" />
<path d="M44.8853 16.3482C44.8747 16.5428 44.7378 16.6584 44.5173 16.669C44.3272 16.6766 43.9409 16.1947 44.0139 15.9895C44.0976 15.7508 44.3941 15.7736 44.5934 15.6732C44.6709 15.6337 44.8884 16.1035 44.8853 16.3482Z" fill="white" />
<path d="M18.9021 4.69432C18.9067 4.98626 18.6633 5.23411 18.3698 5.23715C18.0839 5.24019 17.8209 4.96649 17.8193 4.66695C17.8193 4.37196 18.055 4.13475 18.3577 4.13019C18.6573 4.12563 18.8975 4.37348 18.9021 4.69432Z" fill="white" />
<path d="M3.64453 17.8682C4.04146 17.8332 4.35018 17.8073 4.6589 17.78C4.79273 17.7678 4.81858 17.8286 4.77752 17.9412C4.76992 17.9594 4.75927 17.9776 4.75471 17.9974C4.56917 18.6604 4.56917 18.6619 4.04754 18.2194C3.93348 18.1236 3.82246 18.0233 3.64453 17.8682Z" fill="white" />
<path d="M2.68213 25.9521C3.0243 25.7878 3.30717 25.6586 3.58243 25.5157C3.74515 25.432 3.75732 25.505 3.76796 25.6449C3.82575 26.3565 3.8288 26.3565 3.16574 26.1284C3.02582 26.0813 2.88591 26.0266 2.68213 25.9521Z" fill="white" />
<path d="M44.8075 21.0377C44.5094 21.0407 44.2661 20.8065 44.257 20.51C44.2494 20.2196 44.5064 19.9702 44.8243 19.9581C45.1299 19.9459 45.39 20.1968 45.39 20.5055C45.393 20.7913 45.1269 21.0346 44.8075 21.0377Z" fill="white" />
<path d="M3.73145 19.956C3.625 20.0898 3.81813 20.4442 3.48205 20.4274C3.3026 20.4198 2.95283 20.5202 2.93306 20.1872C2.90873 19.769 3.12011 19.4998 3.37408 19.5028C3.60523 19.5074 3.74361 19.6716 3.73145 19.956Z" fill="white" />
<path d="M44.8904 18.4838C44.8874 18.5644 44.8767 18.6556 44.8113 18.724C44.7642 18.7727 44.7049 18.8396 44.6486 18.8426C44.5619 18.8472 44.568 18.7468 44.5467 18.683C44.4981 18.5309 44.4464 18.3804 44.4053 18.2253C44.3825 18.1432 44.3125 18.0367 44.4068 17.9805C44.4813 17.9349 44.5817 17.9942 44.6577 18.0413C44.8144 18.1417 44.8752 18.2952 44.8904 18.4838Z" fill="white" />
<path d="M6.82443 12.9691C6.8959 12.9722 6.98259 12.9722 7.00996 13.0421C7.02517 13.0801 6.97954 13.1486 6.95065 13.1972C6.85789 13.3523 6.76208 13.5075 6.66323 13.6595C6.6313 13.7082 6.58872 13.7781 6.54461 13.7827C6.46402 13.7918 6.44425 13.7006 6.41839 13.6398C6.29369 13.3615 6.52941 12.9737 6.82443 12.9691Z" fill="white" />
<path d="M11.9878 7.38929C12.0775 7.39842 12.1915 7.42732 12.2356 7.51404C12.2919 7.62509 12.1535 7.65096 12.0942 7.70116C11.965 7.81222 11.8251 7.9111 11.6867 8.01151C11.6411 8.04498 11.597 8.10888 11.53 8.06628C11.4723 8.02977 11.4829 7.95979 11.4814 7.90198C11.4692 7.64944 11.7216 7.38777 11.9878 7.38929Z" fill="white" />
<path d="M26.6247 3.91482C26.7098 3.9665 26.9136 3.83273 26.9243 4.06683C26.9334 4.25989 26.7053 4.45598 26.4923 4.44534C26.3251 4.43622 26.1638 4.39214 26.1456 4.1854C26.1289 4.01363 26.3098 3.91026 26.6247 3.91482Z" fill="white" />
<path d="M45.681 22.5813C45.6795 22.8885 45.4347 23.1151 45.1062 23.1151C44.7808 23.1136 44.5527 22.884 44.5618 22.5616C44.5694 22.2589 44.8294 22.0247 45.1473 22.0354C45.4514 22.046 45.6826 22.2817 45.681 22.5813Z" fill="white" />
<path d="M30.6486 5.24925C30.349 5.25686 30.0996 5.02568 30.092 4.73216C30.0844 4.4143 30.314 4.14358 30.6045 4.12837C30.9208 4.11317 31.1793 4.35194 31.1793 4.65764C31.1778 4.97398 30.9375 5.24317 30.6486 5.24925Z" fill="white" />
<path d="M41.771 12.4219C42.0448 12.4295 42.3109 12.7124 42.2972 12.9861C42.2835 13.275 41.9794 13.5351 41.6707 13.5229C41.3984 13.5123 41.1567 13.2583 41.1597 12.9846C41.1627 12.7048 41.479 12.4143 41.771 12.4219Z" fill="white" />
<path d="M37.3172 7.62195C37.5757 7.62195 37.8495 7.88506 37.8601 8.14208C37.8708 8.42801 37.5757 8.74587 37.2944 8.75347C37.0207 8.76108 36.7363 8.48732 36.7378 8.21813C36.7378 7.92308 37.0313 7.62195 37.3172 7.62195Z" fill="white" />
<path d="M20.2634 4.77729C20.0976 4.77425 19.9912 4.70277 19.9957 4.52637C19.9988 4.35604 20.3455 4.15683 20.5964 4.16595C20.7394 4.17051 20.7227 4.27392 20.7227 4.35756C20.7227 4.59632 20.5143 4.78337 20.2634 4.77729Z" fill="white" />
<path d="M33.2156 42.9651C33.2156 43.178 33.0772 43.2677 32.9297 43.3331C32.7989 43.3909 32.6468 43.5566 32.5328 43.4563C32.4096 43.3483 32.3457 43.1506 32.3031 42.9803C32.2803 42.889 32.4293 42.8769 32.5039 42.8373C32.6377 42.7674 32.7746 42.6959 32.9282 42.6974C33.1091 42.6989 33.1897 42.8176 33.2156 42.9651Z" fill="white" />
<path d="M23.0898 45.5763C23.0548 45.593 23.0366 45.6097 23.0184 45.6097C22.3401 45.6371 22.3401 45.6356 22.6199 45.0395C22.6701 44.933 22.7279 44.8311 22.8115 44.6699C22.918 45.0151 23.0047 45.2965 23.0898 45.5763Z" fill="white" />
<path d="M29.4805 44.3308C29.485 44.0724 29.5474 43.8748 29.7937 43.8064C30.0325 43.7411 30.1755 43.89 30.2865 44.0694C30.4538 44.3414 30.5359 44.6438 30.5374 44.9614C30.5389 45.1712 30.4842 45.3657 30.2439 45.4371C30.0021 45.5101 29.8607 45.3672 29.7466 45.1894C29.5748 44.9204 29.5048 44.618 29.4805 44.3308Z" fill="white" />
<path d="M36.7673 42.2207C36.5088 42.2237 36.2852 42.0017 36.2837 41.7386C36.2822 41.4938 36.5149 41.2474 36.7597 41.2368C37.0167 41.2246 37.2691 41.477 37.2631 41.7401C37.257 41.988 37.0197 42.2191 36.7673 42.2207Z" fill="white" />
<path d="M8.76637 38.1971C9.01729 38.1895 9.28038 38.445 9.28038 38.699C9.28038 38.9424 9.03402 39.1812 8.78614 39.1812C8.53673 39.1812 8.30406 38.95 8.29798 38.696C8.29189 38.4344 8.50632 38.2062 8.76637 38.1971Z" fill="white" />
<path d="M35.2348 42.5268C35.212 42.5527 35.1922 42.5877 35.1618 42.6059C34.99 42.7124 34.8166 42.8128 34.6433 42.9162C34.5855 42.9512 34.5277 42.9695 34.5064 42.8797C34.4577 42.682 34.5596 42.5481 34.7132 42.4507C34.8698 42.3519 35.0341 42.3336 35.1861 42.4675C35.2029 42.4827 35.2135 42.4994 35.2348 42.5268Z" fill="white" />
<path d="M13.811 42.3313C13.9585 42.3526 14.0863 42.4073 14.1806 42.5199C14.2596 42.6157 14.3296 42.7389 14.249 42.8483C14.1471 42.9867 14.065 42.824 13.9783 42.7906C13.8871 42.7556 13.8004 42.6978 13.7213 42.637C13.6574 42.5883 13.5145 42.5868 13.5601 42.4636C13.5966 42.3632 13.7167 42.3526 13.811 42.3313Z" fill="white" />
<path d="M38.3978 40.8592C38.1362 40.8546 37.9218 40.6326 37.9263 40.368C37.9309 40.0988 38.1742 39.8692 38.4419 39.8813C38.6943 39.8935 38.9179 40.1383 38.9057 40.3893C38.892 40.6387 38.6487 40.8622 38.3978 40.8592Z" fill="white" />
<path d="M36.4908 23.8127H12.6152V23.9648H36.4908V23.8127Z" fill="white" />
</svg>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-b65efc1 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image CID-image-b4fec0a0 IID-image-e11537a6">
<style>.IID-image-e11537a6{max-width:48px}.IID-image-e11537a6:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-image-e11537a6{max-width:32px}}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-224031126--812369514-title" class="image__img" fill="none" height="49" id="svg-224031126--812369514" role="img" viewBox="0 0 49 49" width="49">
<title id="svg-224031126--812369514-title">American Institute of Certified Public Accountants SOC 3 badge</title>
<path d="M42.3126 24.3268C42.3446 23.791 42.305 23.1625 42.2395 22.5384C42.2014 22.1686 42.1465 21.7988 42.084 21.4305C42.0215 21.0682 41.953 20.7075 41.8752 20.3483C41.7899 19.9557 41.6817 19.566 41.5658 19.1795C41.325 18.3865 41.0324 17.6134 40.6849 16.8585C40.3496 16.131 39.967 15.4293 39.5403 14.7521C38.7051 13.4295 37.7175 12.2317 36.5713 11.1663C35.509 10.1785 34.3446 9.32928 33.0796 8.61548C32.2657 8.15737 31.4214 7.76622 30.5496 7.43748C29.9308 7.20461 29.2998 7.0098 28.6566 6.85C28.236 6.74498 27.8123 6.65062 27.3871 6.573C27.0365 6.50755 26.6799 6.46037 26.3217 6.42384C25.9193 6.38123 25.517 6.32796 25.1131 6.31883C24.4425 6.30361 23.7719 6.29295 23.1028 6.32492C22.6044 6.34927 22.1045 6.39797 21.6092 6.47863C21.3165 6.52734 21.0209 6.56843 20.7297 6.6217C20.4219 6.67801 20.1155 6.74194 19.8138 6.82108C19.4144 6.92609 19.0166 7.04329 18.6219 7.16352C18.1525 7.30659 17.6952 7.48313 17.2411 7.66881C16.4089 8.00821 15.6103 8.41306 14.8421 8.87726C14.1624 9.28971 13.5055 9.73869 12.8836 10.2379C12.2252 10.766 11.5988 11.3261 11.0197 11.9379C10.1509 12.8572 9.38276 13.8556 8.71825 14.9347C8.19396 15.7855 7.73977 16.6713 7.36484 17.5981C7.13927 18.1552 6.94571 18.7229 6.77349 19.2982C6.64394 19.7274 6.53115 20.1611 6.43818 20.5995C6.35283 21.0028 6.28577 21.4107 6.22633 21.8201C6.16232 22.2599 6.13336 22.7028 6.08154 23.1427C6.03125 23.5566 6.05411 23.9737 6.05411 24.3892C6.05411 24.8092 6.03582 25.2308 6.07697 25.6509C6.11203 26.007 6.13641 26.3662 6.18061 26.7208C6.21871 27.0359 6.27205 27.3494 6.32997 27.6614C6.39398 28.0069 6.46866 28.3524 6.54487 28.6963C6.58602 28.8835 6.63175 29.0692 6.69119 29.2503C6.72014 29.3371 6.70185 29.369 6.6226 29.3919C6.37112 29.4649 6.12117 29.5425 5.86969 29.6156C5.47799 29.7298 5.08477 29.8424 4.69155 29.9565C4.30443 30.0676 3.91579 30.1772 3.52866 30.2898C3.14611 30.4009 2.76356 30.5136 2.38101 30.6231C1.98779 30.7358 1.59457 30.8423 1.20287 30.961C1.08856 30.996 1.04589 30.9519 1.0215 30.8575C0.952918 30.5897 0.884334 30.3203 0.821845 30.0509C0.742592 29.7084 0.663338 29.3645 0.593229 29.019C0.538361 28.7481 0.495684 28.4741 0.457581 28.1987C0.395093 27.7603 0.331081 27.3205 0.286882 26.8806C0.257924 26.5991 0.236587 26.316 0.221346 26.0344C0.190864 25.4378 0.178673 24.8381 0.189341 24.2415C0.201534 23.5886 0.232017 22.9357 0.280789 22.2858C0.317367 21.7988 0.385949 21.3133 0.463679 20.8293C0.549029 20.2981 0.643525 19.7669 0.770026 19.2434C0.937678 18.5433 1.12362 17.8477 1.34614 17.1613C1.79727 15.7657 2.37339 14.4279 3.0699 13.1403C3.60029 12.1586 4.19927 11.2196 4.86226 10.3216C5.7249 9.14969 6.69881 8.07822 7.75349 7.07829C8.51554 6.35536 9.32942 5.6933 10.1814 5.0769C11.4296 4.17437 12.7587 3.41035 14.1547 2.76199C14.9717 2.3815 15.8115 2.05732 16.6649 1.77119C17.3051 1.55659 17.9574 1.377 18.6158 1.22175C19.0517 1.11978 19.4922 1.03303 19.9342 0.952366C20.396 0.868658 20.8593 0.800169 21.3241 0.739291C21.5985 0.702763 21.8774 0.67689 22.1548 0.655582C22.9443 0.596226 23.7353 0.56883 24.5263 0.57644C25.1801 0.582528 25.834 0.608401 26.4848 0.670802C27.0822 0.728637 27.6782 0.810823 28.2695 0.914317C28.8106 1.00716 29.3455 1.12739 29.8805 1.25524C31.0571 1.53528 32.2017 1.91273 33.3204 2.3678C34.3065 2.7696 35.2591 3.24293 36.1827 3.77257C37.0407 4.26569 37.8607 4.81817 38.6533 5.41021C39.778 6.25186 40.7992 7.20614 41.7655 8.22129C42.3675 8.85291 42.9177 9.52866 43.442 10.2272C44.0791 11.075 44.6552 11.9638 45.1703 12.8892C45.5514 13.5741 45.9004 14.2772 46.2113 14.9986C46.5649 15.8144 46.8758 16.6454 47.1334 17.4977C47.2767 17.971 47.4169 18.4444 47.5281 18.9253C47.6043 19.2525 47.6882 19.5797 47.7369 19.9146C47.7781 20.1931 47.8482 20.467 47.8955 20.7456C47.9229 20.9099 47.9488 21.0743 47.9686 21.2387C48.0265 21.7394 48.089 22.2401 48.1225 22.7454C48.1805 23.6206 48.2079 24.4957 48.1637 25.3724C48.1591 25.4485 48.1591 25.5246 48.1606 25.6007C48.1713 26.214 48.0768 26.8213 48.025 27.4301C47.9899 27.8456 47.9275 28.2611 47.8421 28.6705C47.7324 29.1971 47.6501 29.7298 47.4992 30.2472C47.423 30.5075 47.3635 30.7738 47.3026 31.0386C47.2782 31.1421 47.2111 31.1558 47.1303 31.1315C46.7768 31.0265 46.4262 30.9169 46.0726 30.8104C45.623 30.6749 45.1734 30.5425 44.7238 30.4086C44.3565 30.299 43.9907 30.1848 43.6234 30.0752C43.1783 29.9428 42.7333 29.8119 42.2882 29.678C42.1054 29.6232 41.924 29.5562 41.7396 29.5075C41.6451 29.4817 41.6237 29.4254 41.6481 29.3508C41.7624 29.0007 41.8341 28.64 41.9209 28.2824C41.9804 28.0388 42.0261 27.7908 42.0657 27.5427C42.1267 27.1652 42.1953 26.7863 42.2273 26.4058C42.2623 25.9781 42.3279 25.5504 42.3142 25.1182C42.3065 24.8868 42.3126 24.6525 42.3126 24.3268ZM9.65253 10.2288C10.3186 10.2683 10.9617 9.66868 10.9785 8.97619C10.9937 8.30348 10.4573 7.62163 9.66472 7.62316C8.99716 7.62468 8.43477 8.12084 8.36313 8.8042C8.28236 9.57432 8.98497 10.2577 9.65253 10.2288ZM13.635 7.25332C13.8332 7.52118 13.8012 7.75252 13.5542 7.94581C13.4003 8.06605 13.2281 8.10105 13.0391 8.07518C12.9781 8.06605 12.9111 8.05083 12.876 8.1178C12.8318 8.20303 12.7891 8.30348 12.8379 8.39327C12.8821 8.47546 12.9766 8.49829 13.0741 8.49524C13.2906 8.48763 13.4933 8.43437 13.6792 8.3187C14.2386 7.97016 14.2934 7.49988 13.9642 6.99002C13.728 6.62474 13.4841 6.26556 13.2509 5.90029C13.2067 5.8318 13.1717 5.75722 13.0833 5.78005C12.9934 5.80288 12.8806 5.82723 12.8684 5.9429C12.8577 6.03726 12.812 6.04031 12.7388 6.0464C12.4051 6.07379 12.1688 6.26099 12.0301 6.54865C11.8274 6.96719 12.0454 7.50749 12.4599 7.70991C12.8486 7.89711 13.475 7.68099 13.635 7.25332ZM41.3006 11.6153C41.354 11.6122 41.3799 11.6153 41.4043 11.6092C41.4622 11.594 41.5201 11.5757 41.578 11.5559C41.9408 11.4266 42.1313 11.0582 41.9789 10.693C41.8432 10.3703 41.6054 10.1192 41.3921 9.85132C41.3082 9.7463 41.2107 9.76761 41.1132 9.84523C40.7337 10.1481 40.3526 10.4495 39.9731 10.7523C39.7994 10.8908 39.6226 11.0293 39.4519 11.1709C39.3376 11.2652 39.4031 11.3505 39.4793 11.4266C39.5479 11.495 39.6028 11.5894 39.7262 11.4798C39.9076 11.3185 40.1057 11.177 40.2978 11.0263C40.3389 10.9928 40.377 10.9243 40.438 10.97C40.4959 11.0141 40.5584 11.0689 40.5523 11.1556C40.5477 11.2059 40.534 11.2561 40.5157 11.3033C40.4212 11.559 40.3359 11.8207 40.2216 12.0673C40.1423 12.2408 40.1987 12.3565 40.3145 12.4737C40.4304 12.5909 40.4837 12.5848 40.5416 12.4341C40.6468 12.1601 40.752 11.8862 40.8449 11.6077C40.8861 11.4874 40.9303 11.4661 41.0385 11.5346C41.1238 11.5879 41.2214 11.6259 41.3006 11.6153ZM42.7485 15.7505C42.9253 15.7474 43.0747 15.685 43.2271 15.5922C43.791 15.2513 43.7377 14.4857 43.2698 14.1646C43.2103 14.1235 43.1875 14.0946 43.2119 14.0185C43.2454 13.915 43.1783 13.8297 43.1128 13.7628C43.0549 13.7049 42.9817 13.7476 42.9162 13.781C42.3126 14.0885 41.7106 14.3974 41.104 14.6973C40.9745 14.7612 40.9409 14.8373 40.9973 14.9606C41.0537 15.0854 41.1482 15.1173 41.2869 15.0519C41.4287 14.9834 41.5674 14.9103 41.7045 14.8342C41.8493 14.7551 41.8706 14.7673 41.8813 14.9332C41.9179 15.4202 42.2761 15.752 42.7485 15.7505ZM30.199 2.66154C29.7159 2.67828 29.3745 2.90201 29.1306 3.2962C28.8411 3.76801 28.8898 4.3357 29.1383 4.70706C29.4675 5.20018 30.1152 5.43152 30.7309 5.15148C30.8437 5.09973 30.8895 4.98406 30.8361 4.87448C30.7736 4.74511 30.6806 4.70859 30.5618 4.76946C30.2097 4.94601 29.8165 4.87144 29.5559 4.57465C29.3745 4.36766 29.3562 4.12263 29.3882 3.86237C29.4294 3.51688 29.6946 3.19118 30.0268 3.10595C30.3271 3.02833 30.7081 3.10747 30.8712 3.4484C30.9154 3.53971 31.0647 3.53667 31.1821 3.45296C31.272 3.38904 31.3055 3.31598 31.2339 3.20945C30.9839 2.83504 30.6197 2.68893 30.199 2.66154ZM4.72204 20.4792C4.72051 20.461 4.72051 20.4107 4.71594 20.3605C4.67479 19.8217 4.12002 19.5128 3.64754 19.7746C3.49818 19.8567 3.41131 20.0074 3.32291 20.149C3.23451 20.2905 3.17964 20.4534 3.05619 20.5721C2.90073 20.7227 2.64315 20.6588 2.58829 20.4473C2.53647 20.2464 2.55476 20.0561 2.72698 19.9054C2.86415 19.7852 2.855 19.7 2.71631 19.5463C2.59591 19.4138 2.51056 19.5234 2.4374 19.5919C2.24079 19.7746 2.16458 20.0165 2.15849 20.2753C2.15391 20.4899 2.20269 20.709 2.35814 20.8643C2.74374 21.2478 3.24822 21.193 3.54085 20.6451C3.60791 20.5203 3.6826 20.4001 3.75271 20.2768C3.81367 20.1687 3.91883 20.1124 4.04838 20.1322C4.16574 20.1505 4.25109 20.2098 4.29224 20.3301C4.36692 20.5447 4.30291 20.7912 4.12154 20.945C3.99961 21.0484 3.98284 21.1748 4.08191 21.3011C4.15354 21.3939 4.22975 21.4228 4.33796 21.3346C4.60316 21.123 4.71746 20.8445 4.72204 20.4792ZM40.8358 13.0703C40.8205 13.501 41.1955 13.8769 41.5155 13.9317C41.6207 13.95 41.7091 13.9378 41.7426 13.816C41.7762 13.6958 41.7472 13.6075 41.6207 13.5619C41.5643 13.5421 41.5064 13.5193 41.4546 13.4903C41.2229 13.3625 41.1482 13.0946 41.2808 12.8648C41.3235 12.7918 41.3494 12.7644 41.4104 12.8648C41.5719 13.1327 41.7518 13.3884 41.9209 13.6517C41.9819 13.7476 42.0657 13.775 42.1541 13.7202C42.6708 13.3975 42.7409 12.8298 42.3416 12.4387C42.0139 12.1175 41.7015 12.0932 41.2884 12.3032C41.0126 12.4432 40.8083 12.7902 40.8358 13.0703ZM4.32272 19.4002C4.44465 19.391 4.58334 19.3575 4.71137 19.2997C5.11068 19.1201 5.28443 18.5905 5.09849 18.1415C5.01314 17.9345 4.90493 17.9132 4.75709 18.073C4.68089 18.1552 4.72509 18.2313 4.75557 18.3119C4.85311 18.5676 4.76166 18.834 4.54067 18.9344C4.4858 18.9603 4.42484 18.9968 4.37149 18.9451C4.32577 18.8994 4.36082 18.8401 4.37454 18.7883C4.45227 18.5052 4.52848 18.2221 4.60773 17.9391C4.63059 17.8554 4.60773 17.8021 4.53152 17.7656C4.27243 17.6423 3.87616 17.7047 3.67345 17.8949C3.40826 18.1445 3.36101 18.5052 3.45398 18.7898C3.59572 19.2099 3.93407 19.356 4.32272 19.4002ZM6.77806 11.7751C6.71709 12.1921 7.16823 12.5741 7.49744 12.6457C8.13147 12.7826 8.60394 12.1891 8.55212 11.6807C8.54145 11.5757 8.51706 11.4874 8.38294 11.4981C8.21072 11.5118 8.15433 11.5681 8.16957 11.7157C8.19548 11.9821 7.99734 12.2362 7.73672 12.2682C7.67423 12.2758 7.60413 12.2621 7.56755 12.2195C7.52183 12.1647 7.59041 12.1191 7.62089 12.078C7.78854 11.8497 7.96077 11.6229 8.13299 11.3976C8.2031 11.3048 8.22444 11.218 8.11775 11.1343C7.83427 10.9152 7.5142 10.8573 7.20633 11.0293C6.93352 11.177 6.76739 11.4311 6.77806 11.7751ZM14.0328 6.1849C14.0328 6.60952 14.2706 6.8363 14.5937 6.80434C14.8375 6.77998 15.0387 6.6704 15.1789 6.46646C15.217 6.41015 15.2399 6.37971 15.3207 6.4071C15.4289 6.44363 15.496 6.34775 15.5676 6.28839C15.6072 6.25643 15.595 6.2062 15.5706 6.16207C15.4213 5.88811 15.2795 5.60959 15.1225 5.34172C15.0067 5.14387 14.8497 4.96275 14.5967 4.98711C14.2553 5.01907 13.9642 5.16365 13.7859 5.4787C13.7371 5.56545 13.6899 5.65525 13.8088 5.7283C13.9337 5.8044 14.0191 5.78614 14.1075 5.67351C14.1532 5.61416 14.202 5.55176 14.2614 5.50762C14.362 5.43152 14.4718 5.36151 14.6105 5.39347C14.6562 5.40413 14.6973 5.43 14.711 5.47718C14.7278 5.53958 14.6714 5.55023 14.6348 5.57306C14.5571 5.62024 14.4718 5.65829 14.4001 5.71461C14.2157 5.85615 14.042 6.01139 14.0328 6.1849ZM20.5362 2.96441C20.2817 2.96593 20.0652 3.05877 19.8808 3.23228C19.8 3.30837 19.7574 3.38447 19.8564 3.47427C19.9433 3.55189 20.0256 3.6219 20.1414 3.50319C20.2634 3.37991 20.4127 3.31446 20.5941 3.33881C20.6855 3.35099 20.7633 3.3936 20.7709 3.47731C20.777 3.55645 20.6764 3.55798 20.6185 3.56863C20.4371 3.60516 20.2695 3.66908 20.1125 3.76192C19.8381 3.92325 19.7757 4.32962 19.9906 4.56248C20.2085 4.79838 20.5956 4.81056 20.905 4.58987C20.9599 4.5503 20.9919 4.51834 21.0727 4.564C21.2022 4.63705 21.4004 4.53356 21.3805 4.41637C21.3226 4.08914 21.2693 3.75888 21.1915 3.43622C21.1032 3.08312 20.8822 2.93549 20.5362 2.96441ZM37.6534 7.53945C37.2175 7.53793 36.7801 7.97625 36.771 8.42523C36.7603 8.88943 37.2267 9.37646 37.7007 9.35211C38.1625 9.32776 38.5694 9.00815 38.5801 8.4922C38.5908 7.95799 38.1945 7.57597 37.6534 7.53945ZM32.0386 4.16829C31.496 4.15307 31.1623 4.65684 31.1897 5.12865C31.2187 5.62481 31.6774 5.96573 32.127 5.94138C32.662 5.91246 33.0034 5.53654 32.982 4.96428C32.9668 4.5153 32.5111 4.14089 32.0386 4.16829ZM24.7214 4.38441C25.3219 4.36462 25.6252 3.91716 25.584 3.41491C25.5444 2.9294 25.1161 2.59 24.604 2.63262C24.1026 2.67371 23.7414 3.08769 23.7917 3.58537C23.842 4.07392 24.2261 4.4255 24.7214 4.38441ZM44.4845 16.7869C44.4769 16.2634 44.0349 15.8068 43.4801 15.8707C43.0732 15.9179 42.6754 16.344 42.7074 16.7291C42.7562 17.3196 43.1265 17.7108 43.6081 17.6681C44.1721 17.6179 44.4906 17.2405 44.4845 16.7869ZM25.9163 4.15307C25.9148 4.17285 25.9148 4.19416 25.9132 4.21395C25.9041 4.32809 25.93 4.41485 26.0641 4.43159C26.1906 4.44681 26.2851 4.42398 26.2973 4.27026C26.308 4.14394 26.3293 4.01913 26.3476 3.89433C26.375 3.71017 26.375 3.51841 26.4695 3.34947C26.5503 3.20336 26.7332 3.12726 26.8841 3.1714C27.0395 3.21706 27.0777 3.28402 27.0792 3.50014C27.0792 3.66756 27.0563 3.83345 27.0319 3.99783C27.0106 4.14241 26.9832 4.287 27.003 4.43463C27.0167 4.54117 27.0944 4.55639 27.1813 4.55487C27.2621 4.55334 27.3596 4.57009 27.3733 4.45746C27.4191 4.11197 27.4953 3.76496 27.4907 3.41948C27.4846 2.8183 26.9039 2.6798 26.5396 2.85178C26.4787 2.8807 26.4619 2.87918 26.4253 2.82134C26.3644 2.72698 26.2562 2.73459 26.1632 2.74372C26.0839 2.75286 26.0489 2.82591 26.0474 2.90201C26.0336 3.32359 25.9651 3.73757 25.9163 4.15307ZM34.7851 5.63851C34.7896 5.4026 34.494 5.11343 34.1587 5.10278C34.0565 5.09973 33.9864 5.07995 33.9194 4.98711C33.7822 4.80143 33.6481 4.82578 33.5444 5.03733C33.4957 5.13626 33.4469 5.23671 33.3966 5.33564C33.2549 5.61416 33.0994 5.88507 32.9668 6.16968C32.9013 6.31122 32.9653 6.35536 33.075 6.41015C33.1924 6.46798 33.2671 6.43906 33.3219 6.32948C33.3966 6.18033 33.4728 6.0327 33.5505 5.88507C33.6313 5.73287 33.7106 5.57915 33.8691 5.48936C33.9864 5.42239 34.1709 5.44522 34.2791 5.54415C34.3842 5.63851 34.3827 5.74809 34.3324 5.87441C34.2257 6.13924 34.0642 6.37362 33.9468 6.63083C33.8691 6.80281 33.8828 6.84695 34.0352 6.91848C34.1648 6.97936 34.2288 6.95045 34.3095 6.79825C34.4284 6.57452 34.5549 6.35536 34.6662 6.1301C34.7348 5.99617 34.782 5.85615 34.7851 5.63851ZM15.9821 4.95362C15.9806 4.74816 16.0629 4.6264 16.2382 4.57313C16.3921 4.52595 16.4653 4.56552 16.5918 4.7512C16.6207 4.79382 16.639 4.83795 16.6573 4.88666C16.7427 5.11343 16.8295 5.33868 16.9225 5.56241C16.9759 5.69178 17.0704 5.68721 17.1862 5.63699C17.3005 5.58676 17.3447 5.53045 17.2898 5.40413C17.1847 5.16365 17.0978 4.91557 16.9926 4.6751C16.9058 4.47572 16.8143 4.26569 16.5811 4.1972C16.3159 4.11806 16.0721 4.17437 15.8694 4.37375C15.7962 4.44529 15.7444 4.53508 15.6042 4.48029C15.5081 4.44224 15.3542 4.60357 15.3862 4.68576C15.5569 5.11191 15.7322 5.53654 15.909 5.95964C15.9654 6.0951 16.0675 6.09966 16.1849 6.0464C16.3053 5.9916 16.3098 5.90333 16.2641 5.79527C16.2077 5.65982 16.162 5.52132 16.101 5.38891C16.0385 5.24736 15.9852 5.10886 15.9821 4.95362ZM45.5986 20.9602C45.6306 20.7851 45.5498 20.636 45.4523 20.499C45.3517 20.3575 45.2115 20.2722 45.0225 20.2951C44.8167 20.3194 44.6704 20.4062 44.611 20.6177C44.582 20.7212 44.5607 20.8247 44.5607 20.9312C44.5607 21.0028 44.5515 21.0728 44.5256 21.1398C44.5043 21.1915 44.4891 21.2539 44.4235 21.26C44.3519 21.2661 44.3031 21.2219 44.265 21.1611C44.1827 21.0302 44.2025 20.9008 44.2711 20.773C44.358 20.6116 44.3229 20.4823 44.1705 20.4046C44.073 20.3544 43.977 20.4183 43.9038 20.5827C43.7849 20.8475 43.8154 21.1017 43.9434 21.3559C44.0745 21.6192 44.2589 21.7135 44.5637 21.6542C44.771 21.6146 44.9158 21.4168 44.9295 21.158C44.9356 21.0317 44.928 20.9039 44.9798 20.7836C44.9981 20.741 45.0103 20.6938 45.0682 20.6923C45.1201 20.6908 45.146 20.7319 45.1719 20.7699C45.2572 20.8978 45.2267 21.0165 45.1536 21.1382C45.0926 21.2387 45.1429 21.3635 45.2664 21.4396C45.3685 21.502 45.4294 21.4259 45.4828 21.3604C45.5742 21.2478 45.6184 21.1154 45.5986 20.9602ZM18.3598 4.95971C18.3613 5.13626 18.436 5.19562 18.6128 5.15604C18.7164 5.13321 18.82 5.10886 18.9237 5.08147C19.1492 5.02211 19.3733 4.96275 19.5973 4.89731C19.7055 4.86535 19.7726 4.7999 19.733 4.67054C19.6964 4.54878 19.6263 4.51073 19.5044 4.54878C19.3641 4.59292 19.2239 4.63858 19.0776 4.65684C19.0288 4.66293 18.974 4.69641 18.9359 4.64923C18.9023 4.60814 18.9389 4.56095 18.9572 4.52138C19.0898 4.20938 19.2224 3.8989 19.3611 3.58994C19.4068 3.48797 19.3916 3.39969 19.326 3.32207C19.2636 3.24902 19.1767 3.27032 19.1005 3.29924C19.0426 3.32207 18.9846 3.32968 18.9237 3.33881C18.6631 3.38143 18.4131 3.46361 18.1631 3.54732C18.0869 3.5732 18.0549 3.63103 18.0595 3.71322C18.0702 3.86237 18.1631 3.91716 18.3323 3.86846C18.4725 3.82737 18.6097 3.77105 18.7576 3.76192C18.8414 3.75583 18.8551 3.78475 18.82 3.85933C18.6966 4.12567 18.5747 4.39202 18.4573 4.65988C18.4161 4.75577 18.3598 4.84861 18.3598 4.95971ZM5.80111 13.2149C5.80416 13.3229 5.80263 13.4279 5.85445 13.5269C6.06782 13.9408 6.4519 14.1326 6.90913 14.0489C7.28102 13.9804 7.62699 13.4995 7.5706 13.1266C7.55231 13.0003 7.48525 12.9379 7.35265 12.9531C7.20786 12.9698 7.15604 13.0292 7.16823 13.1692C7.18957 13.4127 7.00667 13.6532 6.7872 13.673C6.5342 13.6958 6.19433 13.4432 6.18214 13.2194C6.16994 12.9957 6.27815 12.8466 6.47781 12.7522C6.6104 12.6898 6.64699 12.5589 6.57535 12.4219C6.5022 12.2804 6.39703 12.3428 6.30254 12.3915C5.96723 12.5665 5.8072 12.845 5.80111 13.2149ZM5.59535 15.6683C5.24024 15.6683 4.92779 15.6728 4.61535 15.6668C4.46141 15.6637 4.31053 15.7703 4.30291 15.9301C4.29529 16.099 4.43093 16.0564 4.53152 16.0686C4.99942 16.1249 5.4719 16.1036 5.9398 16.1386C6.05411 16.1462 6.08916 16.0549 6.13336 15.9742C6.18213 15.8874 6.20499 15.7992 6.13184 15.7216C5.79196 15.3608 5.45208 15.0017 5.10611 14.6455C5.01771 14.5542 4.93846 14.5755 4.87292 14.6851C4.79519 14.8129 4.81349 14.9286 4.92932 15.0382C5.14879 15.2437 5.36674 15.4506 5.59535 15.6683ZM21.9353 2.36019C21.7433 2.35867 21.6716 2.44085 21.7296 2.62501C21.7799 2.78482 21.7113 2.832 21.5772 2.84113C21.4247 2.85178 21.4293 2.95832 21.4415 3.06182C21.4537 3.1714 21.5299 3.20184 21.6305 3.17444C21.7265 3.14705 21.7661 3.18509 21.789 3.27946C21.8103 3.36773 21.8286 3.45448 21.8317 3.54732C21.8393 3.71931 21.8576 3.88977 21.8896 4.06023C21.9658 4.45289 22.3438 4.62031 22.6867 4.40876C22.7477 4.37223 22.7781 4.31896 22.7736 4.24286C22.7629 4.07545 22.7157 4.0374 22.5434 4.06631C22.3666 4.09523 22.2691 4.0587 22.2691 3.94151C22.2691 3.7467 22.2066 3.56406 22.202 3.37077C22.1975 3.12117 22.1944 3.11661 22.4444 3.09834C22.5114 3.09378 22.5815 3.09225 22.609 3.01616C22.6379 2.93397 22.6257 2.85331 22.5693 2.78634C22.5069 2.71176 22.423 2.73155 22.3422 2.74829C22.2142 2.77416 22.1441 2.74829 22.1289 2.59761C22.1213 2.48347 22.1075 2.33584 21.9353 2.36019ZM34.8079 7.21527C34.8018 7.31876 34.8384 7.39943 34.9146 7.47248C35.0106 7.56532 35.1128 7.64142 35.2438 7.68099C35.3703 7.72056 35.4526 7.68403 35.5151 7.54706C35.57 7.42682 35.4984 7.38725 35.4039 7.34768C35.2332 7.27462 35.2057 7.20461 35.2956 7.04024C35.3901 6.86826 35.5105 6.70997 35.605 6.53799C35.6797 6.40101 35.7635 6.40406 35.8733 6.48472C35.9022 6.50603 35.9327 6.52277 35.9617 6.54408C36.047 6.608 36.108 6.58061 36.1629 6.49842C36.2543 6.36297 36.2436 6.30209 36.1034 6.21533C35.8992 6.08749 35.8992 6.08749 36.0257 5.87594C36.0364 5.85919 36.0455 5.84093 36.0577 5.82419C36.1049 5.75266 36.0912 5.69482 36.0242 5.64003C35.8519 5.50153 35.791 5.50762 35.6645 5.70547C35.6035 5.79984 35.5502 5.87594 35.4267 5.79071C35.3383 5.7283 35.253 5.71004 35.1844 5.82875C35.1173 5.94442 35.1112 6.03726 35.2514 6.09814C35.3627 6.14685 35.3505 6.21229 35.2911 6.30056C35.1691 6.48016 35.0548 6.66584 34.9405 6.85152C34.8735 6.96262 34.8186 7.08133 34.8079 7.21527ZM45.6901 19.3058C45.6885 19.0821 45.6184 19.0288 45.3715 19.1095C45.2389 19.1536 45.2054 19.1201 45.1841 18.9999C45.1612 18.869 45.0652 18.8279 44.9433 18.8599C44.8168 18.8918 44.7878 18.9831 44.835 19.0958C44.8701 19.1795 44.8427 19.2175 44.7604 19.2373C44.6278 19.2693 44.4952 19.3043 44.3626 19.3393C44.1964 19.3834 44.0288 19.4199 43.8657 19.4747C43.6462 19.5493 43.5609 19.8765 43.6813 20.1444C43.7483 20.2935 43.852 20.3544 43.98 20.3042C44.1355 20.2433 44.0791 20.1277 44.041 20.0242C44.0013 19.9176 44.0257 19.8446 44.1385 19.8126C44.3382 19.7563 44.5363 19.6969 44.7375 19.6513C44.9539 19.6011 44.9539 19.6087 45.0042 19.8187C45.024 19.9009 45.0301 19.9937 45.1429 20.012C45.3182 20.0409 45.3959 19.9587 45.3624 19.7822C45.3151 19.5387 45.3151 19.5387 45.5605 19.4686C45.5651 19.4671 45.5712 19.4671 45.5758 19.4656C45.6718 19.4519 45.7007 19.391 45.6901 19.3058ZM38.3378 10.1466C38.4307 10.1131 38.4978 10.04 38.5633 9.97307C39.0556 9.47691 39.5433 8.97619 40.0326 8.47698C40.1469 8.35979 40.1499 8.27912 40.0371 8.1665C39.9274 8.05692 39.8756 8.05996 39.7476 8.18933C39.3681 8.57591 38.9886 8.96249 38.6091 9.35059C38.4612 9.50279 38.3119 9.65498 38.1671 9.81022C38.1259 9.85436 38.0832 9.90915 38.1274 9.97307C38.1808 10.0492 38.2417 10.1177 38.3378 10.1466ZM37.3334 7.1133C37.3288 7.04633 37.2907 6.99154 37.2328 6.95806C37.1368 6.90174 37.0347 6.85 36.9203 6.84695C36.8472 6.84543 36.8213 6.83782 36.8076 6.75259C36.7908 6.64453 36.6917 6.58822 36.5881 6.57148C36.4905 6.55626 36.4448 6.63996 36.4113 6.71302C36.3823 6.7739 36.3442 6.82412 36.3046 6.87739C36.0943 7.162 35.8855 7.44661 35.6782 7.73274C35.6203 7.8134 35.57 7.89407 35.6889 7.97777C35.8382 8.08279 35.8961 8.08888 35.9983 7.97473C36.0318 7.9382 36.0577 7.89254 36.0867 7.85145C36.2116 7.68099 36.3244 7.49988 36.4677 7.34311C36.6369 7.15743 36.806 7.13613 36.9996 7.28223C37.0545 7.32333 37.1063 7.37051 37.1764 7.33094C37.2587 7.2868 37.3151 7.21527 37.3334 7.1133ZM11.422 6.83934C11.3961 6.85304 11.3595 6.86978 11.326 6.88957C11.2269 6.95197 11.1721 7.04937 11.1233 7.14982C11.0882 7.22136 11.0562 7.26549 10.9572 7.26701C10.7926 7.27006 10.6935 7.44052 10.7788 7.5501C11.0654 7.9169 11.3595 8.27608 11.6445 8.64287C11.7665 8.79812 11.8427 8.64592 11.9219 8.6033C12.0012 8.56221 12.0149 8.47546 11.9509 8.39479C11.832 8.24412 11.7177 8.0904 11.5927 7.94429C11.3138 7.61555 11.3138 7.49835 11.6034 7.17874C11.6506 7.12699 11.6659 7.07525 11.6278 7.01437C11.582 6.93827 11.5455 6.84847 11.422 6.83934ZM5.31035 17.6362C5.44904 17.6392 5.48866 17.5951 5.52524 17.4459C5.55267 17.3394 5.51153 17.2892 5.41398 17.2542C5.18994 17.1735 4.96742 17.0928 4.74947 16.9985C4.44465 16.8646 4.39435 16.7519 4.49647 16.4399C4.52847 16.341 4.49799 16.2877 4.41417 16.2451C4.22213 16.1447 4.14135 16.1781 4.09258 16.3927C4.07429 16.4704 4.06362 16.5556 4.07582 16.6332C4.08801 16.7169 4.08344 16.7626 4.00418 16.8189C3.84263 16.9315 3.87463 17.1096 4.05448 17.1766C4.29529 17.2663 4.53762 17.3546 4.77995 17.4444C4.96437 17.5099 5.14879 17.5768 5.31035 17.6362ZM44.8518 18.764C45.0073 18.767 45.1261 18.6833 45.1018 18.5859C45.0743 18.4763 45.0621 18.3546 44.9676 18.2724C44.8899 18.2054 44.8549 18.1415 44.8853 18.0243C44.9295 17.8584 44.8046 17.7579 44.643 17.8036C44.5516 17.8295 44.4586 17.8538 44.3671 17.8812C44.0425 17.9756 43.7194 18.073 43.3948 18.1613C43.2469 18.2024 43.2332 18.2922 43.2713 18.4154C43.3125 18.5478 43.4054 18.5707 43.5228 18.5387C43.7514 18.4763 43.9785 18.4109 44.2056 18.3424C44.4388 18.2709 44.6262 18.3683 44.6933 18.6057C44.7192 18.6985 44.768 18.7594 44.8518 18.764ZM23.3604 3.31446C23.3604 3.17901 23.3634 3.04203 23.3588 2.90657C23.3527 2.72394 23.2948 2.67676 23.1089 2.69806C22.9809 2.71328 22.9397 2.78177 22.9671 2.9431C22.9748 2.98876 22.9717 3.0329 22.9732 3.07856C22.9869 3.45753 23.0037 3.8365 23.0251 4.21395C23.0312 4.31896 23.0875 4.3768 23.2034 4.37527C23.3725 4.37375 23.4167 4.3357 23.4213 4.16068C23.4274 3.87759 23.3969 3.59603 23.3604 3.31446ZM6.50982 14.9667C6.65308 14.9682 6.69118 14.8708 6.72776 14.7749C6.76282 14.6805 6.70185 14.6364 6.6287 14.5983C6.24919 14.3944 5.87121 14.1889 5.49171 13.9865C5.33777 13.9043 5.27376 13.9195 5.2067 14.052C5.13354 14.1965 5.15793 14.2605 5.31035 14.3426C5.59535 14.4964 5.87731 14.6562 6.16384 14.8084C6.27815 14.8692 6.39094 14.9408 6.50982 14.9667ZM17.5184 3.7604C17.3645 3.7604 17.2517 3.8502 17.2853 3.95369C17.4285 4.39506 17.5764 4.83643 17.7257 5.27628C17.7623 5.38586 17.8309 5.43 17.9483 5.37825C18.0595 5.32955 18.1403 5.27932 18.093 5.13017C17.962 4.71163 17.7836 4.30831 17.68 3.88063C17.6617 3.7954 17.6038 3.75431 17.5184 3.7604ZM17.5108 3.25663C17.5093 3.12878 17.4057 3.01159 17.2914 3.00855C17.1207 3.0055 17.0155 3.10139 17.0155 3.25967C17.0155 3.39969 17.1268 3.51688 17.2578 3.51688C17.4041 3.51841 17.5124 3.4073 17.5108 3.25663ZM4.72051 14.052C4.85768 14.0565 4.97961 13.9561 4.98266 13.8343C4.98723 13.6806 4.88359 13.5649 4.73728 13.5604C4.60163 13.5558 4.47666 13.6699 4.47209 13.8008C4.46904 13.9439 4.57115 14.0474 4.72051 14.052ZM23.1333 2.41954C23.2537 2.41802 23.3741 2.28561 23.3741 2.15472C23.3741 2.02992 23.2552 1.90816 23.1348 1.90968C22.9748 1.91121 22.8726 2.01013 22.8711 2.16081C22.8711 2.29322 22.9991 2.41954 23.1333 2.41954Z" fill="white" />
<path d="M24.2918 48.569C23.1716 48.5735 22.1641 48.5081 21.1628 48.3818C19.9191 48.2235 18.6937 47.9739 17.4897 47.6223C16.1881 47.2433 14.9277 46.7608 13.7068 46.1718C11.9511 45.3241 10.3264 44.2724 8.8236 43.0305C8.09507 42.4293 7.40618 41.787 6.75691 41.1021C5.22823 39.4903 3.9373 37.7081 2.90091 35.7417C2.28517 34.5758 1.7746 33.3659 1.34785 32.1209C1.28384 31.9337 1.23049 31.7449 1.168 31.5577C1.13752 31.4695 1.16343 31.4299 1.25183 31.404C1.64657 31.2914 2.03979 31.1727 2.43301 31.06C3.09905 30.8683 3.76661 30.678 4.43264 30.4863C5.21603 30.261 5.99943 30.0342 6.78129 29.8059C6.87426 29.7785 6.90932 29.8166 6.93523 29.8988C7.23547 30.8668 7.62565 31.7982 8.0905 32.6992C8.78702 34.0523 9.64357 35.2988 10.6571 36.4327C12.0578 37.9988 13.6779 39.2925 15.5266 40.3C16.5158 40.8388 17.5476 41.2832 18.6206 41.6272C19.5 41.9103 20.3962 42.1203 21.3091 42.2649C22.5162 42.4567 23.7294 42.5358 24.9487 42.481C25.7686 42.4445 26.5856 42.3532 27.3964 42.2086C28.3718 42.0336 29.3259 41.784 30.2587 41.4522C31.6913 40.9423 33.0402 40.262 34.3006 39.4097C35.1419 38.8404 35.9299 38.2058 36.6675 37.5057C38.5239 35.7432 39.9322 33.6733 40.9213 31.3173C41.0935 30.9078 41.252 30.4908 41.3801 30.0647C41.4197 29.9307 41.47 29.8866 41.627 29.9353C42.5414 30.2184 43.4605 30.4863 44.3765 30.7602C45.1477 30.9916 45.9173 31.2244 46.6885 31.4558C46.7952 31.4877 46.9019 31.5182 47.0101 31.5486C47.1641 31.5912 47.1793 31.6262 47.1305 31.7769C46.78 32.8621 46.3669 33.9214 45.8701 34.9487C45.2361 36.2607 44.4908 37.5041 43.6327 38.6806C42.8585 39.7445 42.0034 40.7399 41.0646 41.6607C39.4384 43.2557 37.6231 44.6012 35.6174 45.6863C34.4439 46.321 33.2246 46.8552 31.9641 47.2875C31.0527 47.5995 30.1245 47.8491 29.1811 48.05C28.0929 48.2813 26.994 48.4366 25.8845 48.5127C25.319 48.5461 24.7505 48.5918 24.2918 48.569ZM32.7369 42.2573C32.6987 42.2634 32.6424 42.271 32.589 42.2816C32.2095 42.3547 31.8879 42.5693 31.5343 42.7063C31.3956 42.7595 31.3956 42.8311 31.4505 42.9483C31.7294 43.5434 32.0038 44.1415 32.2781 44.7381C32.397 44.9969 32.3894 44.9893 32.6622 44.8812C32.8039 44.8249 32.8054 44.7564 32.749 44.6407C32.6454 44.4261 32.5494 44.2085 32.4488 43.9939C32.429 43.9528 32.3985 43.9147 32.432 43.8676C32.493 43.7808 32.6789 43.7504 32.775 43.8173C32.9578 43.9452 33.1545 44.0578 33.316 44.21C33.5401 44.4231 33.7519 44.4292 34.0034 44.2694C34.1085 44.2024 34.1177 44.1735 34.0156 44.108C33.7611 43.9421 33.5111 43.7701 33.2535 43.6088C33.1392 43.5373 33.1224 43.4871 33.2291 43.3851C33.4349 43.1857 33.4486 42.9407 33.3495 42.6834C33.2444 42.4095 33.0401 42.2771 32.7369 42.2573ZM10.9634 40.6653C11.1402 40.6683 11.2485 40.7323 11.317 40.8464C11.3856 40.9621 11.3445 41.0717 11.2683 41.1706C11.0991 41.3913 10.9269 41.6104 10.7562 41.8311C10.7226 41.8738 10.6617 41.9301 10.6952 41.9757C10.7668 42.0731 10.8659 42.1568 10.9787 42.1979C11.0656 42.2299 11.0976 42.1218 11.1433 42.0655C11.3064 41.8646 11.4542 41.6515 11.6295 41.4628C11.7834 41.2954 11.9572 41.2984 12.1157 41.4354C12.2589 41.5587 12.2666 41.6835 12.1263 41.8768C11.9953 42.0579 11.855 42.2299 11.7194 42.4064C11.5213 42.6621 11.5258 42.6865 11.8048 42.8554C11.8093 42.8585 11.8139 42.8615 11.8169 42.863C11.8672 42.898 11.9069 42.8935 11.9465 42.8417C12.1568 42.5632 12.387 42.2969 12.579 42.0062C12.8518 41.5937 12.5775 41.0595 12.0791 41.0443C11.8855 41.0382 11.7895 41.0123 11.8002 40.8053C11.8017 40.7703 11.7712 40.7292 11.7468 40.6973C11.599 40.504 11.4146 40.3716 11.1585 40.3731C11.122 40.3731 11.0503 40.3883 11.0778 40.3274C11.1479 40.1752 11.0122 40.1478 10.9467 40.0778C10.8537 39.9774 10.7806 39.985 10.6937 40.1006C10.4513 40.4248 10.1907 40.7368 9.94839 41.061C9.77007 41.3 9.72892 41.2391 10.0063 41.4583C10.0993 41.5313 10.1572 41.5313 10.2288 41.4339C10.3767 41.2345 10.5291 41.0382 10.6861 40.8464C10.7653 40.7505 10.8552 40.6577 10.9634 40.6653ZM23.4124 46.6239C23.6425 46.6376 23.644 46.636 23.5709 46.4291C23.3118 45.7 23.0466 44.974 22.7936 44.2435C22.7326 44.0669 22.5939 44.1293 22.4827 44.0989C22.3866 44.073 22.3333 44.1126 22.2891 44.1978C22.1839 44.3987 22.0696 44.5966 21.9599 44.796C21.6855 45.2921 21.4097 45.7868 21.1369 46.2829C21.0607 46.4214 21.079 46.4184 21.2344 46.4519C21.5194 46.5143 21.6718 46.3986 21.7465 46.1368C21.7526 46.1125 21.7739 46.0927 21.78 46.0699C21.8105 45.9679 21.8822 45.9435 21.9797 45.9527C22.2327 45.974 22.4842 45.9983 22.7372 46.0105C22.8713 46.0166 22.9551 46.0546 22.978 46.2023C22.9917 46.2906 23.0466 46.3712 23.0649 46.4595C23.0877 46.5721 23.1594 46.6056 23.2584 46.6147C23.3102 46.6178 23.3621 46.6208 23.4124 46.6239ZM29.6292 43.376C29.0897 43.376 28.7513 43.7184 28.7406 44.2587C28.733 44.6012 28.8123 44.9238 28.951 45.2297C29.0958 45.5493 29.3015 45.8157 29.6856 45.8629C30.0727 45.9116 30.5711 45.7046 30.6534 45.2084C30.7494 44.6301 30.5833 44.1172 30.2404 43.659C30.094 43.4612 29.8791 43.3683 29.6292 43.376ZM40.6836 38.6593C40.8893 38.6593 41.2475 38.326 41.2459 38.1281C41.2444 38.0064 41.1286 37.9699 41.0493 37.9181C40.9701 37.8664 40.9564 37.9607 40.9274 38.0094C40.81 38.2042 40.6973 38.2286 40.5189 38.0916C40.4184 38.014 40.3193 37.9364 40.2202 37.8572C39.9825 37.67 39.9794 37.667 40.1654 37.4265C40.237 37.3337 40.2583 37.2713 40.144 37.1952C40.0449 37.1297 39.9764 37.043 39.8651 37.1952C39.6792 37.4509 39.7386 37.4752 39.4338 37.2423C39.3942 37.2119 39.353 37.151 39.3058 37.1784C39.193 37.2423 39.1198 37.355 39.068 37.4661C39.0345 37.5376 39.1412 37.5757 39.193 37.6183C39.4124 37.7979 39.414 37.7964 39.228 38.011C39.2143 38.0262 39.2036 38.046 39.1884 38.0551C38.9887 38.1677 38.8942 38.3397 38.8912 38.5665C38.8912 38.6 38.8775 38.6608 38.8379 38.635C38.6672 38.5223 38.6367 38.7035 38.5513 38.7643C38.4431 38.8435 38.4538 38.9211 38.5544 39.0094C38.847 39.2666 39.1351 39.5299 39.4246 39.7917C39.7188 40.0595 39.6334 40.0291 39.891 39.7688C39.9581 39.7019 39.9505 39.6577 39.8803 39.5969C39.6898 39.431 39.5008 39.262 39.3195 39.084C39.1335 38.9013 39.1198 38.6958 39.2936 38.5041C39.4094 38.3762 39.513 38.2408 39.6197 38.1068C39.6776 38.0353 39.7264 38.0338 39.7965 38.0901C39.9703 38.2301 40.1455 38.3671 40.3239 38.5026C40.4321 38.5878 40.5449 38.6578 40.6836 38.6593ZM37.4143 41.717C37.4463 41.335 37.1309 40.889 36.6812 40.7992C36.3033 40.7247 35.9024 40.9758 35.7485 41.3806C35.7348 41.4172 35.7119 41.4796 35.6708 41.4446C35.5229 41.3152 35.4574 41.4735 35.3614 41.5207C35.2608 41.5724 35.2608 41.6348 35.3294 41.7261C35.7302 42.2603 36.1249 42.7991 36.5243 43.3333C36.73 43.6088 36.6721 43.5769 36.9495 43.3881C37.0348 43.3303 37.0516 43.2801 36.983 43.1948C36.8565 43.0366 36.7392 42.8722 36.6188 42.7093C36.5029 42.551 36.506 42.5389 36.6965 42.5221C37.0455 42.4886 37.4494 42.134 37.4143 41.717ZM20.3245 43.7625C20.2651 43.7656 20.1995 43.7671 20.134 43.7747C19.6646 43.828 19.375 44.2983 19.5518 44.7244C19.631 44.9147 19.7957 45.0151 19.9648 45.111C20.105 45.1917 20.259 45.2495 20.3779 45.3637C20.5623 45.5417 20.5135 45.767 20.2742 45.8507C20.0365 45.9329 19.8048 45.8553 19.6204 45.6224C19.5762 45.5661 19.535 45.5296 19.4725 45.5828C19.3796 45.665 19.2134 45.6665 19.1936 45.8279C19.1921 45.8431 19.2104 45.8644 19.2241 45.8796C19.2683 45.9283 19.3095 45.9816 19.3598 46.0212C19.6615 46.2555 20.0045 46.324 20.3779 46.2692C20.6461 46.2297 20.8915 46.0196 20.954 45.7716C21.0393 45.4337 20.9646 45.1917 20.7025 45.006C20.5958 44.9299 20.4754 44.8721 20.3626 44.8051C20.2834 44.7594 20.2026 44.7168 20.1294 44.6636C20.0441 44.6012 19.9801 44.5159 20.0029 44.4048C20.0288 44.2831 20.105 44.1978 20.2376 44.178C20.4099 44.1522 20.5943 44.1613 20.7071 44.2922C20.8488 44.4581 20.954 44.4063 21.079 44.2968C21.0942 44.2831 21.111 44.2709 21.1277 44.2617C21.2557 44.1917 21.2283 44.1217 21.1338 44.0426C20.9006 43.8462 20.6293 43.7686 20.3245 43.7625ZM24.6164 46.6619C24.6987 46.668 24.8084 46.6467 24.9182 46.6239C25.2748 46.5493 25.5111 46.2814 25.5309 45.942C25.5522 45.557 25.4059 45.3545 25.002 45.2176C24.8298 45.1597 24.6545 45.1095 24.4853 45.0425C24.3817 45.0014 24.3085 44.9192 24.3131 44.7975C24.3177 44.6788 24.3863 44.6027 24.4899 44.554C24.6576 44.4748 24.842 44.4596 24.9837 44.5677C25.1529 44.694 25.2382 44.6194 25.3358 44.4961C25.348 44.4809 25.3632 44.4657 25.3785 44.452C25.4791 44.3652 25.4699 44.2998 25.351 44.2359C25.0477 44.07 24.7322 44.0608 24.4076 44.1446C24.0799 44.2283 23.8361 44.5022 23.8269 44.7884C23.8147 45.1658 23.9519 45.35 24.3466 45.4885C24.5189 45.5478 24.6941 45.5981 24.8618 45.6665C24.9761 45.7122 25.0477 45.802 25.0447 45.9375C25.0416 46.0668 24.9685 46.146 24.8633 46.1962C24.6591 46.2951 24.4472 46.289 24.2765 46.1444C24.1394 46.0288 24.0525 46.0546 23.9519 46.1673C23.9351 46.1855 23.9153 46.2023 23.897 46.2205C23.7766 46.3408 23.7781 46.3743 23.9229 46.4747C24.1226 46.6147 24.3482 46.6574 24.6164 46.6619ZM8.96991 36.8268C8.94095 36.7781 8.91199 36.7249 8.87846 36.6762C8.64223 36.3352 8.3999 35.9974 8.17128 35.6519C8.09507 35.5362 8.03868 35.5164 7.92132 35.5986C7.38789 35.9745 6.84683 36.3398 6.30882 36.7127C6.00247 36.9243 6.03448 36.8482 6.23566 37.1632C6.29205 37.2515 6.34235 37.2667 6.43075 37.2013C6.62736 37.0582 6.83311 36.9273 7.0282 36.7842C7.12117 36.7157 7.17299 36.7325 7.23243 36.8238C7.35893 37.0186 7.49305 37.2089 7.62565 37.4006C7.77653 37.6198 7.77501 37.6152 8.00363 37.463C8.0966 37.4022 8.09965 37.3565 8.03868 37.2713C7.8817 37.0536 7.73843 36.8268 7.57992 36.6107C7.50829 36.5133 7.49915 36.4464 7.61498 36.3809C7.70338 36.3307 7.7872 36.2744 7.86493 36.2089C7.96095 36.1298 8.02192 36.1557 8.0844 36.25C8.23224 36.4737 8.3877 36.6929 8.53859 36.9136C8.66052 37.0902 8.66052 37.0917 8.83427 36.9669C8.88609 36.9319 8.95772 36.9121 8.96991 36.8268ZM16.8099 45.1871C16.8099 45.1871 16.8084 45.2236 16.8099 45.2586C16.8191 45.5311 16.5066 45.7442 16.2597 45.6346C16.0829 45.5554 16.086 45.557 15.9915 45.7366C15.9503 45.8157 15.9168 45.8933 16.0174 45.9435C16.374 46.1216 16.6651 46.1855 16.9837 45.8203C17.4089 45.3317 17.8341 44.8431 18.2594 44.3546C18.4301 44.1583 18.4255 44.172 18.1771 44.073C18.017 44.0091 17.9317 44.0517 17.8387 44.1765C17.6802 44.3865 17.508 44.5859 17.3388 44.7884C17.3144 44.8173 17.2961 44.8675 17.2489 44.8599C17.1864 44.8492 17.2016 44.7884 17.1986 44.7473C17.1772 44.4855 17.1437 44.2222 17.1498 43.9604C17.1528 43.7534 17.0568 43.6788 16.8785 43.6301C16.6773 43.5753 16.6712 43.5662 16.6865 43.7762C16.7246 44.2344 16.7672 44.6925 16.8099 45.1871ZM34.6679 43.7701C35.0946 43.7717 35.4696 43.5175 35.6113 43.1324C35.6296 43.0822 35.6601 43.0259 35.6052 42.9787C35.4894 42.8813 35.2684 42.9407 35.2105 43.0822C35.1145 43.3196 34.8615 43.4581 34.6222 43.4049C34.546 43.3881 34.4637 43.3546 34.4499 43.2755C34.4378 43.2055 34.5246 43.1918 34.5734 43.1629C34.8508 42.9955 35.1312 42.8341 35.4086 42.6667C35.4543 42.6393 35.5321 42.618 35.4863 42.5328C35.2501 42.0975 34.8112 41.8311 34.296 42.1325C33.9348 42.344 33.7397 42.7626 33.8373 43.1066C33.9577 43.5327 34.2549 43.7701 34.6679 43.7701ZM37.2116 40.405C37.204 40.8738 37.5805 41.2695 38.0407 41.2756C38.5574 41.2832 39.0406 40.8221 39.0482 40.3168C39.0558 39.8617 38.6732 39.4568 38.2297 39.4492C37.6902 39.4416 37.2193 39.883 37.2116 40.405ZM8.38161 37.7568C7.91828 37.7568 7.52353 38.1434 7.51896 38.6015C7.51286 39.1144 7.98534 39.5999 8.49134 39.6014C8.95315 39.6014 9.34637 39.2088 9.34484 38.7476C9.3418 38.2332 8.87999 37.7568 8.38161 37.7568ZM13.4173 42.0062C12.9478 41.9681 12.5546 42.4156 12.5531 42.8402C12.55 43.4186 13.1566 43.901 13.7251 43.7686C13.809 43.7488 13.8318 43.7093 13.8029 43.6271C13.7251 43.414 13.7129 43.4033 13.4874 43.4064C13.4569 43.4064 13.4264 43.4079 13.3959 43.4049C13.1673 43.3866 12.9524 43.172 12.9494 42.9605C12.9494 42.9102 12.9509 42.8509 12.9936 42.8204C13.0393 42.7869 13.0774 42.8402 13.114 42.8615C13.402 43.0289 13.6901 43.2009 13.9766 43.3714C14.033 43.4049 14.0924 43.4505 14.1458 43.3683C14.3134 43.1142 14.3866 42.8387 14.2784 42.548C14.1549 42.2177 13.7998 42.0077 13.4173 42.0062ZM26.6221 44.1278C26.6267 44.1583 26.6313 44.1887 26.6374 44.2176C26.677 44.4292 26.677 44.4276 26.8873 44.3911C27.1617 44.3439 27.4375 44.3044 27.7119 44.2511C27.8597 44.2222 27.8689 44.2846 27.8338 44.3957C27.8018 44.4961 27.7698 44.5981 27.7378 44.6986C27.5777 45.2267 27.4208 45.7548 27.2592 46.2799C27.2302 46.3727 27.2653 46.3925 27.343 46.3788C27.433 46.3636 27.5214 46.3362 27.6113 46.3286C27.7164 46.3195 27.7545 46.2632 27.782 46.1688C27.9313 45.6437 28.0929 45.1232 28.2377 44.5966C28.3032 44.3576 28.4267 44.1248 28.3352 43.8584C28.3063 43.7747 28.2804 43.7382 28.1904 43.7534C27.6966 43.8402 27.2028 43.9269 26.7075 44.0106C26.6374 44.0258 26.613 44.0608 26.6221 44.1278ZM40.2675 36.7964C40.2568 37.011 40.3452 37.1571 40.5189 37.256C40.7049 37.3611 40.8725 37.3124 41.025 37.1891C41.1469 37.0902 41.2597 36.9806 41.3785 36.8786C41.4334 36.8314 41.499 36.8162 41.5614 36.8558C41.6285 36.8984 41.6376 36.9669 41.6224 37.0445C41.5858 37.2241 41.4624 37.3276 41.2993 37.3732C41.1926 37.4037 41.1713 37.4554 41.188 37.5467C41.1972 37.597 41.2063 37.6457 41.217 37.6959C41.2338 37.7781 41.2719 37.8024 41.3587 37.772C41.6925 37.6487 41.8784 37.3915 41.9729 37.0688C42.0583 36.7721 41.9851 36.5849 41.7748 36.46C41.5691 36.3368 41.3968 36.3657 41.156 36.5666C41.0707 36.6381 40.9914 36.7157 40.9076 36.7888C40.8436 36.8436 40.7689 36.8908 40.6912 36.8238C40.6165 36.7599 40.6424 36.6792 40.679 36.6016C40.7125 36.5301 40.7613 36.454 40.8299 36.4387C41.0371 36.3916 41.0143 36.2531 40.9975 36.1009C40.9853 35.9928 40.9366 35.9761 40.8436 36.005C40.5388 36.1039 40.2705 36.4768 40.2675 36.7964ZM15.8147 44.9877C15.9168 44.968 15.9168 44.8812 15.9412 44.8218C16.2155 44.1765 16.4838 43.5297 16.7551 42.8828C16.877 42.5891 16.8739 42.5982 16.5813 42.478C16.4655 42.4308 16.438 42.4871 16.406 42.5647C16.1027 43.2862 15.801 44.0061 15.4961 44.7275C15.4794 44.7655 15.4565 44.8173 15.4946 44.8386C15.6013 44.8949 15.7126 44.9406 15.8147 44.9877ZM15.234 43C15.2675 42.93 15.2203 42.8965 15.17 42.8691C15.1121 42.8387 15.0465 42.8189 14.9932 42.7824C14.8941 42.7124 14.8514 42.7641 14.8103 42.8493C14.632 43.2177 14.4537 43.5845 14.2723 43.9513C14.1382 44.2222 14.1382 44.2161 14.4064 44.3485C14.5192 44.4033 14.571 44.3774 14.6167 44.2724C14.696 44.0974 14.7829 43.9269 14.8652 43.7534C15.045 43.3729 15.2401 43.309 15.612 43.5114C15.6577 43.5358 15.6973 43.5525 15.7278 43.4977C15.7796 43.4018 15.8772 43.3059 15.8452 43.1964C15.8132 43.0883 15.679 43.0761 15.5784 43.0502C15.4946 43.0289 15.4062 43.032 15.3239 43.0639C15.2553 43.0929 15.2127 43.0913 15.234 43ZM10.174 39.364C10.1496 39.2757 10.0703 39.2361 10.0215 39.1737C9.93619 39.0626 9.86304 39.0657 9.7655 39.1692C9.4942 39.4568 9.21682 39.7384 8.93638 40.0185C8.66661 40.2878 8.73063 40.23 8.94858 40.4507C9.02478 40.5283 9.07812 40.5207 9.14823 40.4461C9.30369 40.2802 9.46372 40.1159 9.62528 39.9561C9.8539 39.7278 10.0947 39.7308 10.305 39.9789C10.3965 40.0869 10.4544 40.0732 10.5306 39.9804C10.5535 39.953 10.5778 39.9271 10.6053 39.9043C10.6906 39.8297 10.68 39.7567 10.6038 39.6851C10.494 39.5816 10.369 39.5101 10.2105 39.5116C10.145 39.5116 10.0703 39.5132 10.148 39.4157C10.1602 39.4005 10.1648 39.3807 10.174 39.364Z" fill="white" />
<path d="M19.5043 26.5471C20.5163 26.5395 21.3348 26.7739 22.0191 27.3903C22.5205 27.8438 22.8208 28.41 22.9702 29.0644C23.1058 29.6671 23.1119 30.2698 22.9671 30.871C22.7126 31.9333 22.0816 32.6867 21.0787 33.1174C20.3578 33.4263 19.5988 33.5116 18.8291 33.3563C17.5199 33.0946 16.61 32.3518 16.2595 31.0445C15.9638 29.9426 16.072 28.8712 16.7381 27.9078C17.1846 27.2609 17.811 26.8607 18.5731 26.6674C18.9145 26.5806 19.2605 26.5334 19.5043 26.5471ZM17.3508 29.9609C17.3508 30.4829 17.4727 30.9684 17.7638 31.4006C18.2332 32.0962 18.9023 32.3884 19.7314 32.3442C20.5514 32.3016 21.161 31.9135 21.539 31.1952C21.8515 30.6001 21.9094 29.9609 21.7509 29.3064C21.379 27.7632 19.7558 27.2472 18.5441 27.8606C17.7013 28.2867 17.3706 29.0462 17.3508 29.9609Z" fill="white" />
<path d="M13.3561 26.5488C14.0648 26.5427 14.6546 26.6994 15.1728 27.0967C15.2856 27.1819 15.313 27.2397 15.1957 27.3539C14.9701 27.573 14.7628 27.8089 14.5494 28.0403C14.49 28.1057 14.4458 28.1133 14.3772 28.0448C13.9108 27.5852 13.3576 27.5167 12.7602 27.7146C12.4553 27.815 12.2785 28.0479 12.2465 28.369C12.216 28.6749 12.3669 28.8895 12.6184 29.0478C12.9019 29.2244 13.222 29.305 13.5329 29.41C13.888 29.5303 14.2431 29.6459 14.5647 29.8453C15.0082 30.1193 15.2703 30.515 15.3298 31.0263C15.4029 31.6549 15.281 32.2393 14.8329 32.7188C14.5144 33.0597 14.109 33.2545 13.6594 33.3488C12.9339 33.4995 12.2267 33.4417 11.55 33.1236C11.2955 33.0034 11.073 32.8375 10.8794 32.632C10.8108 32.559 10.8032 32.5057 10.884 32.4311C11.1111 32.2211 11.3351 32.008 11.5515 31.7873C11.6506 31.6854 11.7009 31.7006 11.7878 31.8025C12.2587 32.3474 12.9766 32.5057 13.606 32.2089C13.9139 32.0643 14.1059 31.8208 14.1136 31.4753C14.1196 31.139 13.9307 30.9076 13.6426 30.7509C13.2829 30.5561 12.8867 30.4617 12.5056 30.3263C12.2481 30.2349 11.9935 30.133 11.7619 29.9853C11.1812 29.617 10.9785 29.0676 11.0151 28.4101C11.0593 27.6141 11.5333 27.0099 12.3197 26.7344C12.6748 26.6096 13.0406 26.532 13.3561 26.5488Z" fill="white" />
<path d="M23.7414 30.1194C23.7384 29.124 23.9685 28.3341 24.5446 27.666C25.0552 27.0739 25.7106 26.7406 26.4757 26.6066C26.9497 26.5229 27.4237 26.5184 27.8977 26.6112C28.5058 26.7299 29.0057 27.0404 29.4218 27.4924C29.4843 27.5594 29.4812 27.6066 29.4019 27.6629C29.1672 27.8303 28.9325 27.9993 28.7054 28.1773C28.6109 28.2504 28.5545 28.2352 28.4768 28.156C27.9891 27.6644 27.3901 27.5183 26.7287 27.6568C25.9834 27.8136 25.4347 28.2458 25.1634 28.9612C24.7946 29.9337 24.915 30.856 25.5917 31.6657C25.9148 32.0523 26.3583 32.2517 26.8567 32.3278C27.5608 32.4343 28.1293 32.1923 28.5835 31.6581C28.6506 31.579 28.707 31.5729 28.7893 31.6338C29.0346 31.8134 29.2831 31.9884 29.533 32.1604C29.6275 32.2258 29.629 32.2806 29.5589 32.3689C29.1931 32.8285 28.7237 33.1421 28.1613 33.2897C27.1356 33.5591 26.148 33.4449 25.2335 32.8894C24.5309 32.4633 24.0889 31.8332 23.8694 31.0417C23.7765 30.7008 23.7323 30.3523 23.7414 30.1194Z" fill="white" />
<path d="M34.3247 26.6072C34.9435 26.5966 35.451 26.6803 35.9128 26.9618C36.8578 27.5371 36.9233 28.8628 36.0348 29.5264C35.9586 29.5842 35.8717 29.6284 35.7924 29.6832C35.762 29.7045 35.6995 29.7029 35.7056 29.7532C35.7101 29.7943 35.7604 29.808 35.797 29.8247C36.0927 29.9541 36.3472 30.1382 36.5728 30.3726C36.8913 30.7059 37.0209 31.1077 36.998 31.5506C36.9462 32.511 36.3609 33.1579 35.4084 33.3725C34.9527 33.476 34.4939 33.514 34.0336 33.476C33.2579 33.412 32.6086 33.1122 32.191 32.4151C32.0584 32.1945 31.9868 31.9555 31.9304 31.7089C31.9121 31.6298 31.938 31.5796 32.0218 31.5704C32.2931 31.54 32.5659 31.5096 32.8372 31.4806C32.9104 31.473 32.9424 31.5065 32.9591 31.5811C33.0216 31.8535 33.1115 32.1153 33.299 32.333C33.5078 32.5765 33.7867 32.7058 34.09 32.7439C34.5716 32.8033 35.038 32.7515 35.4541 32.4578C36.0165 32.0605 36.1094 31.2006 35.6522 30.6877C35.3398 30.3376 34.9572 30.1641 34.4954 30.1352C34.3141 30.1245 34.1327 30.0911 33.9498 30.1002C33.8553 30.1048 33.8096 30.0667 33.8142 29.9663C33.8202 29.8551 33.8218 29.7425 33.8142 29.6314C33.8065 29.5097 33.8599 29.4731 33.9757 29.4746C34.3323 29.4807 34.6829 29.4412 35.0136 29.2966C35.4129 29.1215 35.6583 28.7091 35.6339 28.2571C35.6126 27.872 35.3352 27.5265 34.9191 27.4047C34.4467 27.2662 33.9894 27.2951 33.5688 27.5858C33.2914 27.7776 33.1756 28.0683 33.0933 28.3727C33.0628 28.4823 33.014 28.5112 32.9134 28.496C32.6772 28.4625 32.4409 28.4336 32.2062 28.4016C32.1361 28.3925 32.0904 28.3651 32.1117 28.2829C32.2154 27.8933 32.3556 27.5219 32.6467 27.2267C32.9363 26.9344 33.2914 26.7685 33.6892 26.6696C33.9315 26.6087 34.1723 26.6148 34.3247 26.6072Z" fill="white" />
<path d="M17.6602 21.1023C17.3584 21.1875 17.2288 21.0247 17.113 20.772C16.9027 20.3124 16.6558 19.8695 16.4317 19.4159C16.3814 19.3154 16.3189 19.2728 16.2077 19.2744C15.4761 19.2774 14.7461 19.2774 14.0145 19.2744C13.9047 19.2744 13.8377 19.3139 13.7874 19.4129C13.5298 19.9288 13.2631 20.4402 13.0055 20.9577C12.9537 21.0627 12.8927 21.113 12.7723 21.1054C12.626 21.0962 12.4782 21.1038 12.3303 21.1038C12.152 21.1023 12.149 21.0977 12.2267 20.941C12.5117 20.3702 12.7982 19.7995 13.0833 19.2302C13.7249 17.9487 14.3681 16.6686 15.0097 15.3871C15.0189 15.3688 15.0234 15.3475 15.0356 15.3323C15.0646 15.3003 15.0646 15.2318 15.1195 15.2379C15.1698 15.2425 15.1789 15.3003 15.1987 15.3399C15.6407 16.2394 16.0827 17.1389 16.5262 18.0369C17.0063 19.008 17.4864 19.9791 17.968 20.9486C18.0412 21.0977 18.0397 21.1008 17.872 21.1023C17.8019 21.1023 17.7318 21.1023 17.6602 21.1023ZM15.1149 18.6168C15.3633 18.6168 15.6117 18.6168 15.8617 18.6153C15.9714 18.6153 16.0141 18.5636 15.9623 18.4601C15.7154 17.9669 15.4685 17.4738 15.2201 16.9807C15.1987 16.938 15.1835 16.8756 15.1179 16.8832C15.0631 16.8893 15.0341 16.9319 15.0113 16.9807C14.7674 17.4692 14.5205 17.9578 14.2766 18.4464C14.2096 18.5818 14.2294 18.6123 14.3864 18.6138C14.6272 18.6184 14.871 18.6168 15.1149 18.6168Z" fill="white" />
<path d="M30.6635 21.1014C30.2718 21.1014 30.2702 21.0999 30.4379 20.7651C31.3432 18.96 32.2501 17.1565 33.1554 15.3514C33.1767 15.3073 33.1828 15.2373 33.2423 15.2388C33.3002 15.2403 33.3047 15.3134 33.3246 15.356C33.9738 16.6603 34.6216 17.9662 35.2663 19.272C35.5391 19.826 35.8089 20.3815 36.0801 20.9355C36.1579 21.0953 36.1548 21.0984 35.978 21.0999C35.8607 21.1014 35.7433 21.0908 35.6275 21.1029C35.469 21.1197 35.3806 21.0573 35.3105 20.9142C35.062 20.4104 34.7968 19.9143 34.5454 19.412C34.492 19.3055 34.4234 19.2705 34.3076 19.2705C33.5867 19.2751 32.8658 19.2751 32.1449 19.2705C32.0123 19.269 31.9437 19.3222 31.8873 19.4349C31.6419 19.9295 31.3859 20.4181 31.1451 20.9142C31.075 21.0588 30.9866 21.1242 30.8281 21.1029C30.7747 21.0953 30.7183 21.1014 30.6635 21.1014ZM33.2346 18.616C33.4785 18.616 33.7223 18.6176 33.9662 18.6145C34.1308 18.613 34.1506 18.581 34.0805 18.438C34.0013 18.2797 33.9159 18.1244 33.8351 17.9662C33.6705 17.6405 33.509 17.3148 33.3444 16.9891C33.32 16.9404 33.2925 16.878 33.2331 16.8734C33.163 16.8673 33.1539 16.9449 33.1295 16.9891C32.881 17.47 32.6341 17.9525 32.3918 18.4365C32.3263 18.5658 32.3567 18.6115 32.5046 18.6145C32.7469 18.6176 32.9908 18.616 33.2346 18.616Z" fill="white" />
<path d="M23.5161 15.3266C24.2111 15.3023 24.8223 15.4666 25.3816 15.8152C25.656 15.9856 25.8891 16.2002 26.0873 16.4559C26.1284 16.5077 26.1422 16.5503 26.0797 16.5944C25.9516 16.6842 25.8236 16.7755 25.6971 16.8684C25.627 16.9201 25.5782 16.9003 25.5295 16.8395C25.1576 16.3859 24.6729 16.0998 24.1029 16.0085C23.0711 15.841 22.1673 16.0952 21.5089 16.9566C21.2437 17.3037 21.108 17.707 21.0943 18.1544C21.0775 18.6613 21.1751 19.1315 21.4677 19.5486C21.8183 20.0493 22.2923 20.3689 22.8928 20.5104C23.289 20.6048 23.6883 20.6155 24.0816 20.5515C24.5815 20.4694 25.0219 20.2456 25.3877 19.888C25.6194 19.6612 25.6194 19.6597 25.8724 19.8545C25.8998 19.8758 25.9288 19.8971 25.9593 19.9169C26.1604 20.0554 26.1574 20.0523 25.9958 20.2289C25.534 20.7357 24.9488 21.0264 24.2888 21.1497C23.8743 21.2258 23.4521 21.2486 23.0208 21.1801C22.5529 21.1055 22.1094 20.9868 21.7146 20.7327C21.0943 20.3339 20.6737 19.7829 20.4877 19.06C20.2378 18.0875 20.381 17.1941 21.0349 16.4133C21.4418 15.9278 21.957 15.6021 22.5757 15.4408C22.8973 15.354 23.2189 15.3068 23.5161 15.3266Z" fill="white" />
<path d="M27.2954 18.2739C27.2954 17.3926 27.2954 16.5114 27.2954 15.6287C27.2954 15.4308 27.303 15.4247 27.5012 15.4232C28.2007 15.4141 28.9033 15.4065 29.5999 15.4582C30.2171 15.5054 30.7567 15.752 30.9929 16.3714C31.2992 17.1735 31.0112 18.1004 30.0403 18.3682C29.7523 18.4474 29.4596 18.4915 29.1594 18.4869C28.8348 18.4824 28.5101 18.4885 28.187 18.5098C28.0102 18.5219 27.9874 18.5372 27.9874 18.7167C27.9858 19.4412 27.9874 20.1657 27.9874 20.8901C27.9874 21.0986 27.9874 21.1002 27.7786 21.1002C27.6871 21.1002 27.5957 21.1002 27.5042 21.1002C27.2985 21.1002 27.2969 21.1002 27.2969 20.8856C27.2969 20.3787 27.2969 19.8719 27.2969 19.3651C27.2954 19.0029 27.2954 18.6376 27.2954 18.2739ZM27.9858 16.9589C27.9858 17.2024 27.9904 17.4459 27.9843 17.6879C27.9797 17.834 28.0407 17.8873 28.1824 17.8812C28.6473 17.8614 29.1122 17.901 29.5785 17.831C30.0342 17.7625 30.3634 17.4489 30.3802 16.9908C30.3985 16.5038 30.0586 16.1918 29.6578 16.1157C29.1609 16.0213 28.6564 16.064 28.1565 16.0548C28.0316 16.0533 27.9843 16.1096 27.9858 16.2299C27.9889 16.4718 27.9858 16.7154 27.9858 16.9589Z" fill="white" />
<path d="M18.6129 18.2754C18.6129 17.3987 18.6129 16.5206 18.6129 15.644C18.6129 15.4233 18.6129 15.4218 18.8415 15.4218C18.9635 15.4218 19.0854 15.4248 19.2073 15.4218C19.2973 15.4203 19.3338 15.4583 19.3323 15.5496C19.3293 15.7673 19.3323 15.9849 19.3323 16.2041C19.3323 17.7655 19.3323 19.327 19.3323 20.8885C19.3323 21.1 19.3323 21.1 19.1266 21.1015C19.0092 21.1015 18.8918 21.0954 18.776 21.1031C18.6495 21.1122 18.6098 21.062 18.6114 20.9372C18.6159 20.2523 18.6129 19.569 18.6129 18.8841C18.6129 18.6817 18.6129 18.4793 18.6129 18.2754Z" fill="white" />
<path d="M9.70294 9.81305C9.25943 9.82218 8.75648 9.38236 8.78697 8.81928C8.80983 8.4099 9.20152 8.03705 9.59625 8.03553C10.1236 8.034 10.5717 8.4936 10.5549 9.01103C10.5427 9.38084 10.1739 9.84805 9.70294 9.81305Z" fill="white" />
<path d="M12.3881 6.85495C12.3576 6.56432 12.6304 6.40759 12.8621 6.39085C13.0739 6.37716 13.3559 6.66627 13.3528 6.87169C13.3483 7.16537 13.141 7.37535 12.859 7.37535C12.5847 7.37383 12.3866 7.15624 12.3881 6.85495Z" fill="white" />
<path d="M41.322 11.1849C41.2701 11.1864 41.2229 11.1758 41.1787 11.1453C41.0873 11.0829 41.0034 11.0145 40.9333 10.9247C40.7276 10.6614 40.6895 10.7085 41.0004 10.4757C41.2458 10.2915 41.2534 10.2946 41.4348 10.5396C41.5018 10.6309 41.5765 10.7192 41.5948 10.8425C41.6176 11.0068 41.485 11.1849 41.322 11.1849Z" fill="white" />
<path d="M42.2456 14.8582C42.2471 14.5828 42.4803 14.3529 42.7547 14.356C43.0442 14.359 43.2271 14.5508 43.2241 14.8506C43.221 15.1337 43.0061 15.3255 42.6907 15.3255C42.4331 15.324 42.2441 15.1276 42.2456 14.8582Z" fill="white" />
<path d="M42.1892 13.04C42.1861 13.0552 42.1877 13.1039 42.1709 13.1435C42.1389 13.2135 42.0825 13.2363 42.0322 13.1648C41.9255 13.0126 41.8203 12.8559 41.7243 12.6962C41.6755 12.6156 41.735 12.5897 41.8081 12.5852C42.0078 12.5699 42.1907 12.7723 42.1892 13.04Z" fill="white" />
<path d="M3.7943 18.5349C3.78516 18.3735 3.85069 18.2487 3.97567 18.1544C4.02292 18.1194 4.08236 18.1057 4.13113 18.1422C4.17837 18.1772 4.16313 18.235 4.14942 18.2837C4.11284 18.4192 4.07474 18.5562 4.03206 18.6901C4.0153 18.7434 4.00615 18.8286 3.93604 18.8225C3.87355 18.8164 3.82478 18.7525 3.80954 18.6855C3.79735 18.6368 3.79887 18.5851 3.7943 18.5349Z" fill="white" />
<path d="M7.5555 11.3184C7.59665 11.3169 7.63933 11.3199 7.66371 11.3564C7.68962 11.3945 7.65914 11.4249 7.63933 11.4508C7.52502 11.6044 7.40919 11.7565 7.29336 11.9087C7.27507 11.9315 7.25679 11.9619 7.22021 11.9498C7.18363 11.9376 7.16838 11.9056 7.15924 11.8691C7.08608 11.6181 7.29641 11.3275 7.5555 11.3184Z" fill="white" />
<path d="M14.9884 6.03549C15.0082 6.22291 14.8634 6.37224 14.6485 6.4271C14.5723 6.44691 14.5205 6.40424 14.4778 6.35396C14.4306 6.29758 14.4306 6.2351 14.4641 6.16958C14.551 6.00654 14.7003 5.91663 14.8649 5.86635C14.9823 5.82978 14.9991 5.93187 14.9884 6.03549Z" fill="white" />
<path d="M20.4919 4.37162C20.3913 4.37466 20.3044 4.33353 20.2739 4.2406C20.2465 4.15833 20.3059 4.09282 20.373 4.03645C20.4462 3.97399 20.5315 3.95113 20.6184 3.92523C20.7053 3.89933 20.815 3.84906 20.8653 3.94047C20.911 4.02426 20.8775 4.137 20.812 4.22232C20.7297 4.32896 20.6199 4.37009 20.4919 4.37162Z" fill="white" />
<path d="M37.6975 7.95978C37.981 7.96435 38.17 8.15609 38.1669 8.43915C38.1639 8.72221 37.9353 8.94135 37.6472 8.93831C37.382 8.93526 37.1869 8.7359 37.19 8.47567C37.1945 8.19566 37.4308 7.95522 37.6975 7.95978Z" fill="white" />
<path d="M32.5614 5.03129C32.5598 5.34035 32.3495 5.55198 32.0477 5.54741C31.8054 5.54437 31.5859 5.31599 31.5981 5.06631C31.6119 4.77095 31.8603 4.53649 32.0919 4.54867C32.3785 4.56694 32.5614 4.74202 32.5614 5.03129Z" fill="white" />
<path d="M24.2138 3.53465C24.2154 3.20587 24.4013 3.01104 24.7122 3.00952C24.979 3.00952 25.1619 3.22566 25.168 3.54682C25.1726 3.79036 24.9531 3.99128 24.7062 4.00954C24.4486 4.03085 24.1712 3.77057 24.2138 3.53465Z" fill="white" />
<path d="M43.0986 16.7839C43.1001 16.4901 43.315 16.2937 43.6351 16.2968C43.9155 16.2983 44.0877 16.4855 44.0908 16.7884C44.0938 17.0152 43.8347 17.2573 43.6031 17.2633C43.3302 17.2694 43.062 17.0442 43.0986 16.7839Z" fill="white" />
<path d="M32.9229 42.9953C32.9183 43.0897 32.8741 43.1673 32.7918 43.2313C32.6501 43.3409 32.4824 43.3987 32.3224 43.4748C32.2447 43.5129 32.2081 43.4672 32.1791 43.4094C32.1197 43.2861 32.0694 43.1597 32.0069 43.0395C31.9703 42.9664 31.9901 42.9268 32.0572 42.8964C32.2172 42.8218 32.3742 42.7396 32.5464 42.697C32.743 42.6483 32.9198 42.7883 32.9229 42.9953Z" fill="white" />
<path d="M22.4398 45.5994C22.359 45.5949 22.2783 45.5873 22.196 45.5873C22.074 45.5873 22.0573 45.5325 22.106 45.4335C22.2097 45.2249 22.3103 45.0164 22.4124 44.8063C22.4307 44.7697 22.4474 44.7241 22.4947 44.7302C22.5389 44.7363 22.5298 44.785 22.5404 44.8169C22.609 45.0392 22.6761 45.263 22.7477 45.4837C22.7797 45.5827 22.7706 45.6314 22.6517 45.6131C22.5831 45.6025 22.5115 45.6025 22.4398 45.5994C22.4398 45.5979 22.4398 45.5979 22.4398 45.5994Z" fill="white" />
<path d="M29.1733 44.311C29.1794 44.2288 29.1779 44.1497 29.2069 44.0705C29.3334 43.7433 29.687 43.6748 29.9019 43.9549C30.1564 44.2867 30.2631 44.6717 30.2204 45.0918C30.2006 45.2851 30.0909 45.4068 29.9034 45.451C29.7266 45.4921 29.597 45.4023 29.498 45.2729C29.2816 44.9898 29.2099 44.655 29.1733 44.311Z" fill="white" />
<path d="M35.9937 41.7305C35.9906 41.4795 36.233 41.2315 36.4844 41.2254C36.7283 41.2208 36.9721 41.4582 36.9767 41.7092C36.9828 41.9679 36.7344 42.2189 36.4753 42.2158C36.2147 42.2143 35.9952 41.9937 35.9937 41.7305Z" fill="white" />
<path d="M34.1968 42.7969C34.2074 42.6217 34.305 42.5028 34.4604 42.4221C34.5961 42.352 34.7302 42.3429 34.8613 42.4328C34.9497 42.4937 34.9649 42.5501 34.8582 42.611C34.6921 42.707 34.529 42.8091 34.3614 42.905C34.2516 42.969 34.1998 42.934 34.1968 42.7969Z" fill="white" />
<path d="M38.1152 40.8489C37.8516 40.8473 37.6382 40.6312 37.6382 40.3634C37.6382 40.1001 37.8668 39.8718 38.1305 39.8702C38.3941 39.8687 38.6227 40.1001 38.6212 40.3664C38.6197 40.6191 38.3774 40.8504 38.1152 40.8489Z" fill="white" />
<path d="M7.94436 38.6731C7.94741 38.4022 8.17298 38.1785 8.43817 38.1831C8.68356 38.1876 8.93808 38.4464 8.93351 38.6899C8.92894 38.9364 8.68965 39.1693 8.43817 39.1723C8.18365 39.1739 7.94132 38.9288 7.94436 38.6731Z" fill="white" />
<path d="M13.4412 42.3246C13.6835 42.3185 13.9365 42.541 13.9396 42.7391C13.9411 42.7971 13.9319 42.8534 13.8862 42.89C13.8313 42.9342 13.7917 42.8778 13.7521 42.855C13.5905 42.762 13.4351 42.6584 13.2705 42.57C13.1501 42.5044 13.1912 42.445 13.2705 42.3947C13.3299 42.3581 13.4 42.3414 13.4412 42.3246Z" fill="white" />
<path d="M36.2088 23.7665H12.2803V23.9191H36.2088V23.7665Z" fill="white" />
</svg>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-b41639a9 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image CID-image-b4fec0a0 IID-image-c5e246be">
<style>.IID-image-c5e246be{max-width:48px}.IID-image-c5e246be:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-image-c5e246be{max-width:32px}}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-42898473-1549402072-title" class="image__img" fill="none" height="49" id="svg-42898473-1549402072" role="img" viewBox="0 0 49 49" width="49">
<title id="svg-42898473-1549402072-title">General Data Protection Regulation logo</title>
<path clip-rule="evenodd" d="M48.8657 24.5752C48.8657 37.8299 38.1207 48.5749 24.866 48.5749C11.6113 48.5749 0.866211 37.8299 0.866211 24.5752C0.866211 11.3205 11.6113 0.575439 24.866 0.575439C38.1207 0.575439 48.8657 11.3205 48.8657 24.5752ZM25.602 5.5494L24.8233 3.39097L24.044 5.5494L21.7507 5.6235L23.5622 7.03128L22.9239 9.23519L24.8233 7.94749L26.7221 9.23519L26.0839 7.03128L27.8959 5.6235L25.602 5.5494ZM34.9005 8.02521L34.1213 5.86729L33.342 8.02521L31.0487 8.0993L32.8607 9.5076L32.2224 11.7115L34.1213 10.4233L36.0201 11.7115L35.3819 9.5076L37.1939 8.0993L34.9005 8.02521ZM40.7947 12.598L41.574 14.756L43.8673 14.8301L42.0558 16.2383L42.694 18.4423L40.7947 17.154L38.8958 18.4423L39.5341 16.2383L37.7221 14.8301L40.0154 14.756L40.7947 12.598ZM44.0839 23.9395L43.3046 21.7816L42.5253 23.9395L40.232 24.0141L42.044 25.4219L41.4058 27.6258L43.3046 26.3381L45.2034 27.6258L44.5652 25.4219L46.3772 24.0141L44.0839 23.9395ZM40.7947 30.9651L41.574 33.1235L43.8673 33.1976L42.0558 34.6054L42.694 36.8093L40.7947 35.5216L38.8958 36.8093L39.5341 34.6054L37.7221 33.1976L40.0154 33.1235L40.7947 30.9651ZM34.8428 39.7971L34.0635 37.6387L33.2843 39.7971L30.9909 39.8712L32.8029 41.279L32.1647 43.4834L34.0635 42.1952L35.9629 43.4834L35.3247 41.279L37.1361 39.8712L34.8428 39.7971ZM24.8802 40.2054L25.6595 42.3639L27.9528 42.438L26.1413 43.8462L26.7796 46.0502L24.8802 44.7619L22.9814 46.0502L23.6196 43.8462L21.8076 42.438L24.101 42.3639L24.8802 40.2054ZM16.5331 39.7971L15.7538 37.6387L14.9746 39.7971L12.6812 39.8712L14.4932 41.279L13.855 43.4834L15.7538 42.1952L17.6527 43.4834L17.0144 41.279L18.8264 39.8712L16.5331 39.7971ZM9.02307 30.9651L9.80233 33.1235L12.0957 33.1976L10.2837 34.6054L10.9219 36.8093L9.02307 35.5216L7.12422 36.8093L7.76245 34.6054L5.95047 33.1976L8.24381 33.1235L9.02307 30.9651ZM7.34976 24.0539L6.5705 21.8955L5.79124 24.0539L3.49791 24.128L5.30937 25.5358L4.67166 27.7402L6.5705 26.452L8.46935 27.7402L7.83112 25.5358L9.64309 24.128L7.34976 24.0539ZM8.96615 12.598L9.74541 14.756L12.0387 14.8301L10.2268 16.2383L10.865 18.4423L8.96615 17.154L7.0673 18.4423L7.70553 16.2383L5.89356 14.8301L8.18689 14.756L8.96615 12.598ZM16.5331 8.02521L15.7538 5.86729L14.9746 8.02521L12.6812 8.0993L14.4932 9.5076L13.855 11.7115L15.7538 10.4233L17.6527 11.7115L17.0144 9.5076L18.8264 8.0993L16.5331 8.02521ZM19.8787 25.6289H18.8219V24.914H20.7392V27.4919L20.6717 27.5149C20.1467 27.6973 19.5954 27.7923 19.0396 27.796C18.1878 27.796 17.5286 27.5706 17.0248 27.1066C16.5434 26.659 16.268 25.9528 16.268 25.1684C16.2736 23.5614 17.4489 22.4817 19.1863 22.4817C19.7938 22.4817 20.2772 22.6058 20.5271 22.7218L20.6053 22.7586L20.3856 23.474L20.2793 23.4285C20.0539 23.3319 19.7243 23.2211 19.1709 23.2211C17.9441 23.2211 17.1822 23.9513 17.1822 25.1383C17.1822 26.3253 17.9108 27.0632 19.0861 27.0632C19.4188 27.0632 19.7065 27.0244 19.8787 26.961V25.6289ZM23.093 22.4944C24.0695 22.4944 24.7814 22.7075 25.2688 23.1454C25.7747 23.594 26.0353 24.2241 26.0353 25.0172C26.0353 25.8536 25.764 26.546 25.2556 27.0366C24.7471 27.5271 23.927 27.7867 22.8846 27.7867C22.4736 27.7888 22.0629 27.7686 21.6541 27.7264L21.5631 27.7167V22.6124L21.65 22.5997C22.1279 22.5299 22.6101 22.4947 23.093 22.4944ZM22.439 27.0453C22.6307 27.0634 22.8233 27.0712 23.0159 27.0688L23.0138 27.0683C24.3756 27.0683 25.1258 26.3478 25.1278 25.0386C25.1319 24.4663 24.9699 24.0177 24.6465 23.7039C24.3041 23.3718 23.7916 23.2031 23.1237 23.2031C22.8944 23.2011 22.6654 23.2182 22.439 23.2542V27.0453ZM29.6165 22.9354C29.2783 22.6426 28.7647 22.4939 28.0902 22.4939C27.6533 22.4916 27.2168 22.5244 26.7851 22.592L26.6993 22.6058V27.7412H27.5751V25.754C27.7204 25.7723 27.8667 25.7803 28.0131 25.778C28.7213 25.778 29.312 25.5736 29.6758 25.1975C29.9615 24.9144 30.1061 24.5307 30.1061 24.0575C30.1061 23.5976 29.9323 23.199 29.6165 22.9354ZM28.0279 25.0601C27.8761 25.0625 27.7245 25.0517 27.5746 25.0279V23.2394C27.7503 23.2151 27.9276 23.2039 28.105 23.2062C28.5251 23.2062 29.2292 23.3212 29.2292 24.0897C29.2302 24.7146 28.8036 25.0601 28.0279 25.0601ZM33.9922 26.2446C34.1506 26.8966 34.2819 27.4102 34.3841 27.5962L34.4664 27.7449H33.5395L33.5103 27.6938C33.4286 27.5548 33.3243 27.1996 33.1526 26.4674C33.0075 25.8164 32.7689 25.59 32.2068 25.5696H31.68V27.7413H30.8046V22.6161L30.8864 22.6002C31.3185 22.5257 31.7565 22.4902 32.195 22.4939C32.9385 22.4939 33.424 22.6278 33.7684 22.9288C34.0535 23.171 34.2109 23.5353 34.2109 23.9538C34.2109 24.5348 33.8961 25.0039 33.3581 25.2502C33.6646 25.427 33.8777 25.7612 33.9922 26.2446ZM32.2625 24.8818C32.915 24.8818 33.3356 24.5466 33.3356 24.0279C33.3356 23.3442 32.7398 23.1965 32.24 23.1894C32.0519 23.1869 31.8639 23.2001 31.6779 23.2287V24.8818H32.2625Z" fill="white" fill-rule="evenodd" />
</svg>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-98d27590 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image IID-image-5f3eda37 CID-image-b4fec0a0">
<style>.IID-image-5f3eda37{max-width:48px}.IID-image-5f3eda37:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-image-5f3eda37{max-width:32px}}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--1937539781--2097416943-title" class="image__img" fill="none" height="44" id="svg--1937539781--2097416943" role="img" viewBox="0 0 52 44" width="52">
<title id="svg--1937539781--2097416943-title">Cyber Essentials Plus badge</title>
<g clip-path="url(#svg--1937539781--2097416943-clip0_3090_855)">
<path d="M14.8618 6.33261C14.9432 6.33119 15.0273 6.28981 15.1001 6.24844C15.2456 6.16712 15.277 6.02445 15.2713 5.86894C15.2656 5.722 15.1985 5.60929 15.0616 5.55793C14.9617 5.52084 14.8504 5.49658 14.7448 5.49373C14.4552 5.48517 14.1656 5.49088 13.876 5.49088C13.8403 5.49088 13.8047 5.49801 13.7676 5.50229C13.7676 5.78334 13.7676 6.05299 13.7676 6.33404C14.1428 6.33547 14.5023 6.34117 14.8618 6.33261Z" fill="white" />
<path d="M30.9349 11.8723C30.7423 12.3403 30.5697 12.7768 30.4014 13.2319C30.7495 13.2319 31.0762 13.2319 31.4328 13.2319C31.2659 12.7768 31.1061 12.3403 30.9349 11.8723Z" fill="white" />
<path d="M22.7274 5.49655C22.6846 5.4937 22.6418 5.49084 22.599 5.49084C22.2994 5.49084 22.0013 5.49084 21.7017 5.49084C21.656 5.49084 21.6089 5.49512 21.5562 5.49798C21.5562 5.84466 21.5562 6.17993 21.5562 6.53945C21.6189 6.53945 21.6703 6.53945 21.7216 6.53945C22.0212 6.53945 22.3208 6.52803 22.619 6.54373C22.9628 6.56085 23.144 6.4353 23.1797 6.09433C23.2182 5.73053 23.0399 5.51795 22.7274 5.49655Z" fill="white" />
<path d="M7.16808 19.6207C6.79857 19.6121 6.42764 19.6178 6.05813 19.6193C6.04957 19.6193 6.04101 19.6264 6.02246 19.6364C6.02246 20.0244 6.02246 20.4068 6.02246 20.7977C6.06098 20.8006 6.09237 20.8063 6.12375 20.8063C6.46045 20.8063 6.79714 20.8091 7.13384 20.8063C7.46054 20.8034 7.66884 20.6179 7.70593 20.2927C7.74017 20.0016 7.61462 19.6321 7.16808 19.6207Z" fill="white" />
<path d="M14.752 7.08874C14.4624 7.08303 14.1728 7.08589 13.8846 7.08731C13.8532 7.08731 13.8233 7.0973 13.7876 7.10301C13.7876 7.42829 13.7876 7.74501 13.7876 8.07885C13.8233 8.08313 13.8461 8.08741 13.8689 8.08741C14.1871 8.08741 14.5052 8.09026 14.8219 8.08598C14.9161 8.08456 15.0117 8.07172 15.1016 8.04461C15.2913 7.9904 15.3926 7.84916 15.4111 7.65941C15.4297 7.46966 15.3798 7.30274 15.2029 7.19431C15.0645 7.10871 14.909 7.09159 14.752 7.08874Z" fill="white" />
<path d="M43.3298 27.6185C42.421 28.1735 41.5351 28.7613 40.6933 29.4147C39.6219 30.2479 38.6375 31.1767 37.7116 32.1682C36.6145 33.3438 35.6087 34.595 34.6757 35.9046C33.8425 37.0745 33.0621 38.2772 32.3716 39.5369C32.353 39.5698 32.3331 39.604 32.306 39.6283C32.2389 39.6853 32.1505 39.6582 32.1262 39.574C32.1176 39.5427 32.1148 39.5084 32.1134 39.4756C32.1019 39.1389 32.0763 38.8008 32.0834 38.4641C32.092 38.0661 32.1205 37.6666 32.1533 37.27C32.2089 36.5823 32.3302 35.9061 32.4843 35.2341C32.8124 33.8017 33.3175 32.4321 33.9623 31.1139C34.6913 29.623 35.5802 28.232 36.596 26.9209C37.4848 25.7739 38.4364 24.6825 39.5206 23.7123C40.6534 22.6994 41.8903 21.842 43.2642 21.1871C43.3113 21.1643 43.3555 21.1372 43.3997 21.1115C43.4012 21.1115 43.4012 21.1101 43.4026 21.1101V5.13139C43.404 2.37792 41.1727 0.146606 38.4192 0.146606H5.53166C2.77819 0.146606 0.546875 2.37792 0.546875 5.13139V38.019C0.546875 40.7724 2.77819 43.0038 5.53166 43.0038H38.4192C41.1727 43.0038 43.404 40.7724 43.404 38.019V27.5815C43.4012 27.5843 43.3969 27.5857 43.394 27.5886C43.3726 27.5986 43.3498 27.6071 43.3298 27.6185ZM38.7431 13.3947C38.6161 13.2563 38.4435 13.1964 38.2751 13.1336C38.1068 13.0708 37.9313 13.0223 37.7644 12.9567C37.6189 12.8996 37.4734 12.8383 37.3364 12.7626C37.014 12.5872 36.8242 12.3204 36.7957 11.9466C36.7672 11.5757 36.877 11.2632 37.168 11.0235C37.3435 10.8794 37.5461 10.7896 37.7701 10.7482C38.1196 10.684 38.4606 10.7025 38.7887 10.8481C39.1369 11.0036 39.3708 11.2618 39.4864 11.6441C39.2638 11.7183 39.0498 11.7897 38.8358 11.861C38.813 11.831 38.7945 11.8153 38.7845 11.7954C38.666 11.5557 38.4578 11.4615 38.2052 11.4458C38.0426 11.4358 37.8871 11.4458 37.7387 11.5357C37.559 11.6456 37.5319 11.9837 37.7416 12.0864C37.8728 12.1506 38.0041 12.2177 38.141 12.2719C38.2994 12.3346 38.4635 12.386 38.6247 12.4431C38.8544 12.5244 39.0712 12.6314 39.2595 12.7883C39.5634 13.038 39.6733 13.3676 39.6433 13.7513C39.6034 14.2578 39.2595 14.6901 38.6546 14.8213C38.2067 14.9183 37.7658 14.9012 37.3535 14.6787C37.0182 14.4975 36.7843 14.2264 36.6502 13.8683C36.6402 13.8426 36.6359 13.8141 36.6259 13.7713C36.8627 13.6843 37.0853 13.603 37.3221 13.5159C37.3578 13.573 37.392 13.6286 37.4277 13.6828C37.5789 13.9225 37.7815 14.0923 38.0683 14.1394C38.2652 14.1708 38.4563 14.1522 38.6347 14.0552C38.8672 13.9282 38.9229 13.5915 38.7431 13.3947ZM33.5928 10.7639C33.8425 10.7639 34.085 10.7639 34.3461 10.7639C34.3575 10.9436 34.3504 11.122 34.3518 11.2989C34.3532 11.4801 34.3518 11.6598 34.3518 11.841C34.3518 12.0265 34.3518 12.2119 34.3518 12.3974C34.3518 12.5786 34.3518 12.7584 34.3518 12.9396C34.3518 13.1207 34.3518 13.3005 34.3518 13.4817C34.3518 13.6614 34.3518 13.8412 34.3518 14.0338C35.0009 14.0338 35.6344 14.0338 36.265 14.0338C36.2978 14.1465 36.3049 14.5788 36.2807 14.7643C36.1794 14.7914 33.7797 14.7985 33.5957 14.7728C33.57 14.6701 33.5643 10.9322 33.5928 10.7639ZM29.5154 13.446C29.6852 12.998 29.8578 12.5501 30.0276 12.1021C30.1973 11.6584 30.3657 11.2147 30.5369 10.7639C30.7951 10.7639 31.0362 10.7639 31.2945 10.7639C31.8023 12.095 32.3102 13.4289 32.8238 14.7771C32.5428 14.7771 32.2846 14.7771 32.0135 14.7771C31.9093 14.5075 31.8038 14.2335 31.6982 13.9582C31.1789 13.9582 30.6667 13.9582 30.146 13.9582C30.0461 14.2307 29.9463 14.5018 29.845 14.7785C29.571 14.7785 29.3014 14.7785 29.0104 14.7785C29.1744 14.3248 29.3485 13.8869 29.5154 13.446ZM27.4995 10.7653C27.7563 10.7653 28.0031 10.7653 28.2585 10.7653C28.2585 12.1021 28.2585 13.4332 28.2585 14.7757C28.0074 14.7757 27.7577 14.7757 27.4995 14.7757C27.4995 13.4432 27.4995 12.1121 27.4995 10.7653ZM17.0934 4.79184C17.1947 4.76474 19.6172 4.75475 19.834 4.78328C19.834 5.02296 19.834 5.25551 19.834 5.50518C19.6728 5.51374 19.513 5.50803 19.3532 5.50946C19.1863 5.51088 19.0208 5.50946 18.8539 5.50946C18.6927 5.50946 18.5315 5.50946 18.3688 5.50946C18.2076 5.50946 18.0478 5.50946 17.8766 5.50946C17.8766 5.78908 17.8766 6.0573 17.8766 6.34406C18.2561 6.34406 18.6328 6.34406 19.0194 6.34406C19.0194 6.59658 19.0194 6.83055 19.0194 7.08307C18.6399 7.08307 18.2633 7.08307 17.8766 7.08307C17.8766 7.41121 17.8766 7.72222 17.8766 8.05321C18.219 8.06605 18.5629 8.05749 18.9067 8.05891C19.2477 8.06034 19.5886 8.05891 19.951 8.05891C19.951 8.18731 19.9524 8.30288 19.9524 8.41986C19.9524 8.53828 19.9524 8.65669 19.9524 8.77225C19.8454 8.80364 17.3488 8.81648 17.1034 8.78794C17.0763 8.6895 17.0649 5.01583 17.0934 4.79184ZM17.3231 12.3346C17.5128 12.3361 17.7011 12.3346 17.8866 12.3346C17.9223 12.4445 17.9308 12.8525 17.9023 13.0694C17.5285 13.0851 17.1519 13.068 16.7581 13.0794C16.7481 13.4018 16.7553 13.7157 16.7538 14.0438C17.4572 14.0438 18.1448 14.0438 18.8254 14.0438C18.8653 14.1551 18.871 14.6273 18.8382 14.7785C17.8966 14.7785 16.9521 14.7785 16.0091 14.7785C15.9777 14.6787 15.9649 11.0535 15.9934 10.7824C16.0933 10.7539 18.5343 10.7453 18.7169 10.7753C18.7169 11.015 18.7169 11.2461 18.7169 11.4972C18.0635 11.4972 17.4172 11.4972 16.761 11.4972C16.761 11.7797 16.761 12.0436 16.761 12.3289C16.9479 12.3418 17.1362 12.3332 17.3231 12.3346ZM12.9675 4.82751C12.9675 4.81467 12.9746 4.8004 12.9817 4.77472C13.0231 4.77329 13.0559 4.76901 13.0887 4.76901C13.6637 4.76901 14.2386 4.76759 14.8136 4.77044C15.0475 4.77187 15.2758 4.80896 15.4927 4.90598C15.992 5.12996 16.1061 5.64927 16.0591 6.00308C16.0234 6.27986 15.8907 6.49243 15.6567 6.64366C15.6425 6.65365 15.6296 6.66649 15.6097 6.68218C15.6881 6.73354 15.7637 6.77206 15.8279 6.82485C16.1389 7.07879 16.2303 7.41691 16.1718 7.79783C16.0819 8.37992 15.7138 8.72374 15.1274 8.79508C15.0333 8.80649 14.9377 8.81648 14.8435 8.81648C14.2586 8.8179 13.6751 8.8179 13.0902 8.8179C13.0573 8.8179 13.0245 8.8179 12.9974 8.8179C12.9874 8.80792 12.9832 8.80506 12.9803 8.80078C12.9774 8.79793 12.9717 8.79365 12.9717 8.7908C12.9689 8.76797 12.9646 8.74372 12.9646 8.71946C12.966 7.42262 12.966 6.12435 12.9675 4.82751ZM8.69601 4.77044C8.91001 4.76902 9.12401 4.77472 9.33658 4.76759C9.41933 4.76473 9.46356 4.79755 9.50493 4.86603C9.78741 5.33398 10.0727 5.79907 10.3567 6.26559C10.3809 6.30554 10.408 6.34548 10.4437 6.40112C10.4793 6.34548 10.5107 6.30126 10.5378 6.25418C10.8189 5.79622 11.0999 5.33968 11.3753 4.87887C11.4267 4.79327 11.4837 4.76473 11.5793 4.76759C11.779 4.77472 11.9788 4.76902 12.1771 4.77044C12.2128 4.77044 12.2498 4.77329 12.3026 4.77615C12.2712 4.83322 12.2484 4.87887 12.2227 4.92167C11.7819 5.65355 11.3411 6.38543 10.8974 7.11589C10.8503 7.19293 10.8303 7.26854 10.8303 7.35699C10.8332 7.77929 10.8317 8.20301 10.8317 8.6253C10.8317 8.67666 10.8317 8.72802 10.8317 8.79222C10.5621 8.79222 10.3167 8.79222 10.0528 8.79222C10.0528 8.73658 10.0528 8.68522 10.0528 8.63529C10.0528 8.20729 10.0513 7.78071 10.0542 7.35271C10.0542 7.26426 10.0342 7.18865 9.98857 7.11161C9.55058 6.38971 9.11402 5.66496 8.67746 4.94164C8.64893 4.89456 8.62182 4.84606 8.58473 4.78043C8.63466 4.77615 8.66605 4.77044 8.69601 4.77044ZM4.99951 6.48815C5.02376 6.28128 5.06514 6.07442 5.12791 5.87611C5.27058 5.42386 5.53308 5.06291 5.96822 4.84606C6.50179 4.58069 7.38062 4.6506 7.85 5.18132C7.95414 5.29974 8.04545 5.42528 8.1068 5.59934C7.87425 5.70634 7.65169 5.80906 7.42199 5.9132C7.37919 5.85756 7.33497 5.80763 7.2993 5.75199C7.05391 5.35966 6.32917 5.31686 6.0367 5.8219C5.90116 6.0573 5.82698 6.30982 5.80986 6.57946C5.79274 6.84197 5.81414 7.10019 5.88405 7.35557C5.9297 7.51821 5.99961 7.66801 6.09805 7.80211C6.37482 8.17733 6.8927 8.21299 7.21655 7.8763C7.29787 7.79213 7.3635 7.69226 7.44625 7.58954C7.66881 7.67657 7.89707 7.76502 8.13818 7.85918C8.02405 8.13025 7.8714 8.35566 7.65597 8.53542C7.4063 8.74514 7.11241 8.83788 6.78998 8.855C6.38766 8.8764 6.0153 8.79365 5.68716 8.54969C5.49599 8.40702 5.35618 8.22298 5.2506 8.01183C5.00664 7.53105 4.93816 7.01745 4.99951 6.48815ZM5.01806 10.7824C5.11792 10.7553 7.54754 10.7453 7.75583 10.7724C7.75583 11.0064 7.75583 11.2404 7.75583 11.4972C7.59747 11.5043 7.43911 11.5 7.27933 11.5C7.11241 11.5015 6.94691 11.5 6.77999 11.5C6.61878 11.5 6.45757 11.5 6.29493 11.5C6.13514 11.5 5.97393 11.5 5.80415 11.5C5.80415 11.7797 5.80415 12.0436 5.80415 12.3289C6.17794 12.3432 6.55601 12.3275 6.93835 12.3375C6.93835 12.5872 6.93835 12.8211 6.93835 13.0737C6.55886 13.0737 6.18507 13.0737 5.80415 13.0737C5.80415 13.4018 5.80415 13.7128 5.80415 14.0424C6.14798 14.0495 6.48753 14.0452 6.8285 14.0452C7.16947 14.0466 7.51187 14.0452 7.84857 14.0452C7.88851 14.1536 7.89422 14.623 7.86141 14.7785C6.91838 14.7785 5.97535 14.7785 5.0309 14.7785C5.00094 14.6815 4.9881 11.025 5.01806 10.7824ZM8.13105 21.2856C7.85855 21.5252 7.52899 21.6208 7.17233 21.628C6.83991 21.6351 6.5075 21.6294 6.17509 21.6308C6.12801 21.6308 6.08235 21.6308 6.01958 21.6308C6.01958 22.1886 6.01958 22.7322 6.01958 23.2815C5.72426 23.2815 5.44606 23.2815 5.1593 23.2815C5.1593 21.7863 5.1593 20.2969 5.1593 18.8032C5.18926 18.7989 5.21636 18.7932 5.24347 18.7932C5.9083 18.7946 6.57313 18.796 7.23795 18.8017C7.48334 18.8032 7.71731 18.8645 7.93417 18.9829C8.3051 19.1869 8.5191 19.5037 8.5833 19.9188C8.66748 20.4495 8.54621 20.9203 8.13105 21.2856ZM8.46632 13.8783C8.4549 13.8483 8.4549 13.8155 8.44634 13.7713C8.67176 13.6871 8.89289 13.6058 9.12972 13.5188C9.16396 13.5701 9.19677 13.6201 9.22816 13.67C9.38081 13.914 9.5834 14.0894 9.87587 14.1394C10.0628 14.1722 10.2411 14.1394 10.4194 14.0738C10.6834 13.9767 10.7633 13.5145 10.4965 13.3404C10.3624 13.2534 10.214 13.1878 10.0642 13.1264C9.79597 13.018 9.5192 12.9296 9.25384 12.8169C9.027 12.7198 8.83582 12.5715 8.72026 12.3446C8.47773 11.8667 8.55192 11.1248 9.32089 10.8267C9.80881 10.6369 10.2996 10.6669 10.7618 10.9337C11.0101 11.0763 11.1741 11.2932 11.274 11.5614C11.2783 11.5742 11.2811 11.5885 11.2826 11.6028C11.284 11.6113 11.2811 11.6213 11.2769 11.6513C11.0728 11.7197 10.8603 11.7911 10.6748 11.8539C10.5578 11.7369 10.4765 11.617 10.3638 11.55C10.1369 11.4144 9.88585 11.4073 9.63761 11.4958C9.53775 11.5314 9.45785 11.6013 9.42218 11.7098C9.36797 11.8724 9.41648 12.0179 9.5834 12.1049C9.75603 12.1934 9.93721 12.2662 10.1198 12.3332C10.3781 12.4302 10.642 12.5073 10.8788 12.6528C11.1613 12.8268 11.3753 13.0508 11.4381 13.389C11.565 14.0738 11.1827 14.5916 10.6691 14.7628C10.1412 14.9383 9.62049 14.934 9.12686 14.6573C8.813 14.4789 8.59329 14.215 8.46632 13.8783ZM12.4753 23.2786C11.4737 23.2786 10.4722 23.2786 9.45642 23.2786C9.45642 21.7863 9.45642 20.3012 9.45642 18.816C9.55914 18.7875 10.1312 18.7818 10.3124 18.8089C10.3124 20.0158 10.3124 21.2256 10.3124 22.4512C11.0386 22.4512 11.7519 22.4512 12.4753 22.4512C12.4753 22.7336 12.4753 23.0018 12.4753 23.2786ZM12.0829 13.7713C12.3098 13.6871 12.538 13.603 12.772 13.5174C12.8191 13.5915 12.859 13.6557 12.9018 13.7171C13.1444 14.0795 13.5096 14.2236 13.9276 14.1223C14.1716 14.0638 14.3085 13.8911 14.3028 13.6529C14.3 13.5002 14.2215 13.3861 14.1002 13.3133C13.9704 13.2363 13.8306 13.175 13.6894 13.1236C13.3997 13.018 13.103 12.931 12.8291 12.7855C12.5223 12.6228 12.3041 12.3846 12.2598 12.0322C12.1899 11.4815 12.3897 11.072 12.9147 10.8481C13.4326 10.6269 13.9547 10.654 14.4426 10.9579C14.6923 11.1134 14.8535 11.3431 14.9391 11.6441C14.718 11.7183 14.504 11.7897 14.2886 11.861C14.2657 11.8296 14.25 11.8111 14.24 11.7911C14.1388 11.6028 13.9847 11.4915 13.7707 11.4587C13.618 11.4358 13.4682 11.4301 13.3198 11.4729C13.1444 11.5243 13.0431 11.6684 13.0474 11.8439C13.0488 11.9152 13.0688 11.978 13.1244 12.0208C13.2043 12.0793 13.2842 12.1435 13.3741 12.1806C13.6023 12.2733 13.8363 12.3546 14.0674 12.4374C14.2786 12.513 14.4754 12.6143 14.6595 12.7441C15.1902 13.115 15.2102 13.8626 14.902 14.3106C14.7066 14.5931 14.4341 14.75 14.1074 14.8199C13.6223 14.9255 13.1544 14.8898 12.7178 14.6287C12.4724 14.4846 12.1414 14.1166 12.0829 13.7713ZM16.7538 21.5124C16.7524 21.7064 16.7396 21.9033 16.6996 22.0916C16.5627 22.7322 16.1703 23.1374 15.5326 23.2957C15.1232 23.397 14.7123 23.3956 14.3071 23.2829C13.6451 23.1003 13.2699 22.6309 13.1672 21.9689C13.1458 21.8291 13.1372 21.685 13.1372 21.5438C13.1344 20.665 13.1358 19.7861 13.1358 18.9073C13.1358 18.8745 13.1387 18.8417 13.1415 18.8003C13.424 18.8003 13.7022 18.8003 14.0018 18.8003C14.0018 18.8517 14.0018 18.9016 14.0018 18.9515C14.0018 19.7833 13.9989 20.615 14.0032 21.4468C14.0046 21.6123 14.0161 21.7792 14.0474 21.9418C14.1074 22.2543 14.3057 22.4412 14.6181 22.5011C14.835 22.5425 15.0532 22.5453 15.2701 22.5011C15.631 22.4269 15.8322 22.2001 15.8736 21.822C15.8864 21.7036 15.8936 21.5852 15.8936 21.4668C15.895 20.635 15.895 19.8033 15.895 18.9715C15.895 18.9201 15.895 18.8674 15.895 18.796C16.1846 18.7917 16.4657 18.7932 16.7581 18.7946C16.7581 18.8545 16.7581 18.9016 16.7581 18.9487C16.7553 19.8018 16.7581 20.6564 16.7538 21.5124ZM20.3362 23.136C19.7698 23.447 18.8197 23.4912 18.1848 22.9676C17.918 22.7479 17.7354 22.4711 17.6198 22.1302C17.8923 22.0289 18.1434 21.9347 18.3988 21.8405C18.4587 21.9333 18.5058 22.0203 18.5657 22.0988C18.8468 22.4654 19.2134 22.6152 19.67 22.5096C19.8925 22.4583 20.0623 22.3413 20.1079 22.0973C20.1365 21.9418 20.1065 21.7977 19.9838 21.695C19.8868 21.6137 19.7784 21.5381 19.6628 21.4896C19.4588 21.4026 19.2434 21.3384 19.0351 21.2599C18.8753 21.2 18.7141 21.1415 18.56 21.0701C18.4573 21.0231 18.3588 20.9617 18.2661 20.8975C17.6113 20.4381 17.6384 19.4181 18.3374 18.9758C18.5629 18.8331 18.8097 18.7547 19.0736 18.729C19.4089 18.6947 19.7384 18.7233 20.0494 18.8659C20.4247 19.0386 20.7014 19.3624 20.8027 19.759C20.5545 19.8418 20.3034 19.9259 20.0466 20.0116C20.0266 19.9816 20.0066 19.9559 19.991 19.9288C19.8768 19.7319 19.7099 19.6121 19.4888 19.565C19.319 19.5279 19.1478 19.5293 18.9823 19.5793C18.8496 19.6192 18.7426 19.692 18.6941 19.8318C18.6399 19.9844 18.667 20.12 18.7983 20.2127C18.9053 20.2883 19.0237 20.354 19.1464 20.4025C19.4288 20.5137 19.7199 20.6036 20.0009 20.7163C20.1536 20.7777 20.3034 20.8561 20.4418 20.946C21.2322 21.4639 21.1537 22.688 20.3362 23.136ZM22.8785 14.7785C22.7145 14.7785 22.559 14.7785 22.4034 14.7785C22.3606 14.7785 22.3178 14.7742 22.275 14.78C22.2037 14.7885 22.1638 14.7557 22.1252 14.6986C21.8128 14.2335 21.4961 13.7713 21.1808 13.3076C20.9882 13.0252 20.7956 12.7412 20.6058 12.4573C20.5516 12.376 20.5031 12.2918 20.4346 12.1791C20.4346 13.0608 20.4346 13.9097 20.4346 14.7671C20.1793 14.7671 19.9353 14.7671 19.6899 14.7671C19.6614 14.6715 19.65 10.9536 19.6814 10.7382C19.767 10.7382 19.8554 10.7382 19.9439 10.7382C20.0537 10.7382 20.1636 10.7439 20.272 10.7368C20.3676 10.7296 20.4175 10.7781 20.466 10.8509C20.7956 11.3445 21.1294 11.8367 21.4618 12.3289C21.6216 12.5658 21.7828 12.7997 21.9412 13.038C21.9983 13.1236 22.0482 13.2149 22.1181 13.3305C22.1181 12.4531 22.1181 11.607 22.1181 10.7396C22.3792 10.7439 22.6274 10.7296 22.88 10.751C22.8785 12.0964 22.8785 13.4289 22.8785 14.7785ZM23.0882 8.65526C22.8814 8.24296 22.6731 7.8335 22.4734 7.41834C22.4263 7.32133 22.3706 7.28851 22.2665 7.29279C22.0953 7.30135 21.9241 7.29422 21.7543 7.29565C21.7087 7.29565 21.6616 7.29993 21.6031 7.30278C21.6031 7.79926 21.6031 8.28575 21.6031 8.78937C21.3206 8.78937 21.0624 8.78937 20.7927 8.78937C20.7927 7.44545 20.7927 6.10866 20.7927 4.75903C20.8412 4.75617 20.8869 4.75189 20.9326 4.75189C21.5018 4.75189 22.0725 4.74904 22.6417 4.75332C22.7929 4.75475 22.947 4.76473 23.094 4.79755C23.5719 4.9074 23.8815 5.19416 23.9813 5.68636C24.0684 6.11579 24.0042 6.50955 23.7131 6.84767C23.6304 6.94326 23.5234 7.01745 23.4235 7.09591C23.3764 7.13301 23.3179 7.15726 23.2523 7.19435C23.5091 7.72365 23.7616 8.24581 24.0241 8.78652C23.7231 8.78652 23.4463 8.78652 23.161 8.78652C23.1368 8.74657 23.1111 8.70234 23.0882 8.65526ZM25.5707 11.5086C25.5707 12.6071 25.5707 13.6871 25.5707 14.7771C25.3081 14.7771 25.0642 14.7771 24.8017 14.7771C24.8017 13.6943 24.8017 12.6128 24.8017 11.5186C24.4079 11.4943 24.0299 11.52 23.6432 11.5029C23.6432 11.2547 23.6432 11.015 23.6432 10.7682C24.6647 10.7682 25.6791 10.7682 26.702 10.7682C26.702 11.0107 26.702 11.2461 26.702 11.5029C26.5165 11.5157 26.3282 11.5072 26.1413 11.5086C25.9573 11.51 25.7732 11.5086 25.5707 11.5086ZM31.8665 38.086C31.8209 38.5825 31.8066 39.0818 31.8138 39.5797C31.8138 39.604 31.8223 39.6311 31.8123 39.6497C31.7909 39.6882 31.7667 39.7367 31.731 39.7524C31.7025 39.7652 31.644 39.7467 31.6183 39.7224C31.5484 39.6525 31.4871 39.5726 31.4243 39.4941C30.4584 38.3086 29.6224 37.036 28.8791 35.7006C27.7164 33.6106 26.7691 31.4278 26.0372 29.1522C26.0215 29.1023 26.0044 29.0524 25.9987 29.001C25.9915 28.9325 26.0357 28.8926 26.1256 28.894C26.1499 28.9125 26.1941 28.9382 26.2298 28.9725C26.5379 29.2635 26.8675 29.5274 27.2284 29.7514C27.8819 30.1566 28.5881 30.422 29.3513 30.529C30.2273 30.6517 31.0919 30.5946 31.9521 30.3934C32.7654 30.2022 33.54 29.9098 34.2705 29.5032C34.3233 29.4746 34.3703 29.4504 34.4303 29.4846C34.5287 29.5403 34.5373 29.5931 34.4631 29.7058C34.1221 30.2165 33.8182 30.7472 33.5529 31.3008C33.0378 32.3751 32.6612 33.4993 32.3844 34.6563C32.2161 35.3625 32.0848 36.0773 31.9921 36.7963C31.9379 37.2257 31.9065 37.6566 31.8665 38.086Z" fill="white" />
<path d="M51.319 24.109C51.2705 24.1261 51.222 24.1518 51.1721 24.1604C50.443 24.2802 49.7497 24.527 49.062 24.7838C47.8337 25.2432 46.6452 25.7939 45.4854 26.4045C44.8305 26.7498 44.1914 27.1236 43.5465 27.4859C43.4937 27.5159 43.4438 27.5544 43.3924 27.5886C43.371 27.5986 43.3482 27.6072 43.3282 27.6186C42.4194 28.1736 41.5335 28.7614 40.6917 29.4148C39.6203 30.248 38.6359 31.1767 37.71 32.1683C36.6129 33.3438 35.6071 34.595 34.6741 35.9047C33.8409 37.0746 33.0605 38.2773 32.37 39.537C32.3514 39.5698 32.3315 39.6041 32.3044 39.6283C32.2373 39.6854 32.1489 39.6583 32.1246 39.5741C32.116 39.5427 32.1132 39.5085 32.1118 39.4757C32.1003 39.139 32.0747 38.8008 32.0818 38.4641C32.0904 38.0661 32.1189 37.6666 32.1517 37.27C32.2073 36.5824 32.3286 35.9061 32.4827 35.2342C32.8108 33.8018 33.3159 32.4322 33.9607 31.1139C34.6898 29.6231 35.5786 28.2321 36.5944 26.921C37.4832 25.7739 38.4348 24.6825 39.519 23.7124C40.6518 22.6995 41.8887 21.842 43.2626 21.1872C43.3097 21.1644 43.3539 21.1372 43.3981 21.1116C43.692 20.9917 43.9845 20.8676 44.2812 20.752C44.9775 20.481 45.6922 20.2741 46.427 20.1443C46.7351 20.0901 47.0433 20.0416 47.3543 20.0073C47.6867 19.9717 48.0063 20.0458 48.3102 20.18C48.6568 20.334 48.9579 20.5566 49.2346 20.8134C49.7768 21.3213 50.2005 21.9205 50.5828 22.5525C50.8368 22.9719 51.0665 23.4028 51.2634 23.8522C51.2805 23.8907 51.299 23.9278 51.3176 23.9649C51.319 24.0134 51.319 24.0619 51.319 24.109Z" fill="white" opacity="0.6" />
</g>
<defs>
<clipPath id="svg--1937539781--2097416943-clip0_3090_855">
<rect fill="white" height="42.8571" transform="translate(0.546875 0.146606)" width="50.7723" />
</clipPath>
</defs>
</svg>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-a3c71f58 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image IID-image-a02a556f CID-image-b4fec0a0">
<style>.IID-image-a02a556f{max-width:76px}.IID-image-a02a556f:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-image-a02a556f{max-width:54px}}@media (max-width: 767px){.IID-image-a02a556f{max-width:48px}}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--795138607-1475339991-title" class="image__img" fill="none" height="39" id="svg--795138607-1475339991" role="img" viewBox="0 0 78 39" width="78">
<title id="svg--795138607-1475339991-title">Health Insurance Portability and Accountability Act compliant badge</title>
<g clip-path="url(#svg--795138607-1475339991-clip0_3090_5984)">
<path d="M60.1546 32.062C58.0702 32.062 55.9858 32.062 53.8994 32.062C53.6653 32.062 53.6653 32.062 53.6653 31.8206C53.6653 31.6835 53.673 31.5445 53.6634 31.4074C53.6538 31.2607 53.7113 31.2124 53.8553 31.2008C54.3773 31.1545 54.8937 31.0657 55.3965 30.9132C55.4426 30.8996 55.4867 30.8803 55.5289 30.8591C55.7746 30.7394 55.8245 30.6313 55.7362 30.3687C55.5539 29.8242 55.3121 29.3048 55.099 28.7719C54.8956 28.2622 54.6825 27.7544 54.4791 27.2447C54.4234 27.1038 54.3505 27.0323 54.1797 27.0323C52.6077 27.0401 51.0339 27.0381 49.4619 27.0343C49.3295 27.0343 49.2508 27.0748 49.2047 27.1984C48.888 28.0479 48.5445 28.8897 48.3065 29.7682C48.2585 29.9439 48.247 30.1235 48.2393 30.3011C48.2297 30.5154 48.3698 30.6525 48.5349 30.7626C48.8593 30.9827 49.2354 31.0541 49.6097 31.1198C49.8324 31.1584 50.055 31.2066 50.2815 31.2047C50.3832 31.2047 50.4139 31.2588 50.4139 31.3514C50.412 31.531 50.4062 31.7106 50.4158 31.8901C50.4235 32.0291 50.3679 32.062 50.2393 32.06C49.5368 32.0542 48.8343 32.0581 48.1299 32.0581C46.938 32.0581 45.748 32.0581 44.5561 32.0581C44.3258 32.0581 44.3258 32.0581 44.3258 31.8187C44.3258 31.6816 44.3335 31.5426 44.3239 31.4055C44.3143 31.2607 44.3661 31.2105 44.512 31.197C44.9515 31.1564 45.3833 31.0869 45.7768 30.863C46.4179 30.498 46.7845 29.9227 47.0512 29.2566C47.508 28.1213 47.9783 26.9918 48.4428 25.8604C49.0051 24.4915 49.5656 23.1206 50.1299 21.7517C50.5905 20.6319 51.055 19.512 51.5175 18.3922C51.6999 17.95 51.8861 17.5118 52.0588 17.0657C52.1125 16.9267 52.1874 16.8804 52.3371 16.8823C52.8975 16.892 53.458 16.8958 54.0165 16.8804C54.2008 16.8765 54.2775 16.946 54.339 17.1044C54.7401 18.1141 55.1489 19.1201 55.552 20.1299C56.1681 21.6648 56.7861 23.1978 57.3926 24.7347C58.0529 26.4126 58.7266 28.0846 59.4175 29.7489C59.7208 30.4787 60.2601 30.9267 61.0125 31.1062C61.3676 31.1912 61.69 31.0329 61.9952 30.8649C62.6343 30.5135 63.0009 29.9401 63.2696 29.2797C63.8781 27.7815 64.498 26.2871 65.1122 24.7907C65.8128 23.0839 66.5114 21.3771 67.212 19.6703C67.5728 18.7918 67.9355 17.9153 68.2964 17.0368C68.3424 16.9209 68.4115 16.8804 68.5382 16.8804C69.1044 16.8881 69.6706 16.892 70.2349 16.8785C70.4153 16.8746 70.4979 16.9364 70.5631 17.0966C70.9662 18.1122 71.3769 19.1239 71.7819 20.1376C72.3942 21.6667 73.0122 23.194 73.6168 24.727C74.2578 26.3546 74.9277 27.9707 75.5745 29.5945C75.9776 30.6081 76.7223 31.0985 77.7626 31.1912C77.9506 31.2086 78.0121 31.2742 77.9967 31.4557C77.9833 31.6044 77.991 31.755 77.9948 31.9056C77.9986 32.0118 77.9602 32.0639 77.8508 32.0581C77.8086 32.0562 77.7683 32.0581 77.7261 32.0581C75.2002 32.0581 72.6744 32.0581 70.1485 32.0581C69.8914 32.0581 69.8913 32.0581 69.8894 31.8052C69.8894 31.6739 69.899 31.5407 69.8875 31.4094C69.8722 31.2491 69.9451 31.2086 70.091 31.1951C70.6073 31.1487 71.1178 31.0618 71.613 30.9093C71.9796 30.7954 72.066 30.6641 71.9335 30.303C71.7205 29.7257 71.4806 29.16 71.2502 28.5905C71.0717 28.1483 70.8836 27.7081 70.7109 27.264C70.6476 27.1018 70.565 27.0285 70.3731 27.0285C68.8184 27.0381 67.2638 27.0362 65.7091 27.0304C65.5421 27.0304 65.4673 27.0903 65.4116 27.2409C65.0988 28.073 64.7667 28.8994 64.5306 29.7586C64.4827 29.9343 64.4711 30.1138 64.4615 30.2915C64.45 30.5058 64.5882 30.6448 64.7514 30.7568C65.0757 30.9788 65.4519 31.0502 65.8262 31.1159C66.0488 31.1545 66.2715 31.2028 66.498 31.2008C66.5959 31.2008 66.6362 31.2453 66.6362 31.3437C66.6323 31.5407 66.6323 31.7395 66.6362 31.9365C66.6381 32.0427 66.5863 32.0697 66.4922 32.0678C66.2485 32.0658 66.0047 32.0678 65.759 32.0678C63.8877 32.0678 62.0182 32.0678 60.1469 32.0678C60.1546 32.0697 60.1546 32.0658 60.1546 32.062ZM68.0373 20.6685C68.0066 20.7323 67.9912 20.7574 67.9816 20.7844C67.7609 21.3443 67.5402 21.9062 67.3194 22.4661C66.8818 23.5782 66.4442 24.6884 66.0066 25.8005C65.9222 26.0168 65.926 26.0206 66.1621 26.0206C67.3713 26.0206 68.5804 26.0206 69.7896 26.0206C70.2042 26.0206 70.1984 26.0225 70.0411 25.6287C69.4749 24.2134 68.9163 22.7982 68.3482 21.3849C68.2561 21.1551 68.1851 20.9138 68.0373 20.6685ZM51.8054 20.6628C51.7594 20.7689 51.7267 20.8327 51.7018 20.8983C51.4005 21.6648 51.101 22.4333 50.7997 23.1998C50.4581 24.0725 50.1126 24.9433 49.7709 25.8179C49.6922 26.0187 49.698 26.0206 49.9111 26.0206C51.1855 26.0206 52.4619 26.0206 53.7363 26.0206C53.9551 26.0206 53.9589 26.009 53.8764 25.7967C53.291 24.3254 52.7094 22.8542 52.1202 21.3849C52.0281 21.1551 51.9571 20.9138 51.8054 20.6628Z" fill="white" />
<path d="M4.10659 17.1023C5.36952 17.1023 6.63244 17.1062 7.89537 17.0984C8.07386 17.0965 8.14488 17.1448 8.12953 17.3301C8.11609 17.4846 8.12185 17.641 8.12761 17.7974C8.13336 17.921 8.08346 17.9577 7.96254 17.9712C7.51342 18.0252 7.06621 18.0947 6.63436 18.2318C6.24665 18.3535 6.0624 18.6412 6.01633 19.0292C5.99522 19.1953 5.9837 19.3633 5.9837 19.5313C5.98178 20.8442 5.98178 22.1552 5.98178 23.4682C5.98178 23.7307 5.98178 23.7307 6.23514 23.7307C8.18903 23.7307 10.1429 23.7307 12.0968 23.7307C12.3444 23.7307 12.3444 23.7307 12.3444 23.4817C12.3444 22.1938 12.3463 20.9041 12.3425 19.6162C12.3425 19.4077 12.3367 19.1953 12.2849 18.9926C12.1755 18.5697 11.8319 18.3979 11.4692 18.2608C11.1064 18.1237 10.7264 18.0484 10.3464 17.977C10.2485 17.9577 10.1967 17.9268 10.1986 17.8186C10.2024 17.6275 10.2024 17.4344 10.1986 17.2433C10.1967 17.1467 10.237 17.0965 10.3368 17.1023C10.379 17.1042 10.4193 17.1023 10.4615 17.1023C12.9759 17.1023 15.4883 17.1023 18.0026 17.1023C18.2406 17.1023 18.2406 17.1023 18.2406 17.3495C18.2406 17.5001 18.2348 17.6487 18.2425 17.7993C18.2483 17.919 18.2118 17.9596 18.0832 17.9712C17.6149 18.0156 17.1504 18.0832 16.7032 18.2357C16.3289 18.3651 16.1428 18.6431 16.0948 19.0235C16.0737 19.1953 16.0622 19.3691 16.0622 19.5428C16.0602 22.9102 16.0602 26.2775 16.0622 29.6467C16.0622 29.8572 16.0679 30.0676 16.1217 30.2704C16.2253 30.6643 16.5228 30.867 16.8836 30.9809C17.2713 31.1025 17.6686 31.174 18.0736 31.2029C18.1888 31.2107 18.2483 31.2454 18.2425 31.3728C18.2348 31.5524 18.2348 31.732 18.2425 31.9115C18.2483 32.0332 18.1965 32.0737 18.0851 32.0621C18.0564 32.0583 18.0256 32.0621 17.9949 32.0621C15.4806 32.0621 12.9682 32.0621 10.4538 32.0621C10.1986 32.0621 10.1986 32.0621 10.1986 31.8073C10.1986 31.6992 10.1986 31.591 10.1986 31.4829C10.1986 31.2126 10.1986 31.2203 10.475 31.1991C10.8991 31.1643 11.3329 31.1759 11.736 30.9963C12.1122 30.8284 12.2926 30.5368 12.3214 30.1294C12.3502 29.7278 12.3425 29.3281 12.3425 28.9265C12.3444 27.6329 12.3425 26.3373 12.3444 25.0437C12.3444 24.9008 12.329 24.8081 12.1448 24.8081C10.1544 24.8139 8.16599 24.812 6.17564 24.8081C6.02401 24.8081 5.97795 24.8661 5.97795 25.0109C5.97987 26.5864 5.97795 28.1619 5.9837 29.7394C5.9837 29.9112 5.99522 30.0869 6.0432 30.2549C6.19291 30.7704 6.60173 30.9539 7.07005 31.0523C7.37331 31.1161 7.67464 31.1894 7.98366 31.2087C8.08154 31.2145 8.12185 31.2647 8.12185 31.3574C8.12185 31.5485 8.12185 31.7416 8.12185 31.9328C8.12185 32.0216 8.08346 32.066 7.99325 32.0641C7.95103 32.0621 7.91072 32.0641 7.8685 32.0641C5.35416 32.0641 2.84174 32.0641 0.327409 32.0641C0.0817339 32.0641 0.0778954 32.0641 0.0817341 31.8247C0.0855728 31.6335 0.00687984 31.3999 0.112444 31.2628C0.216088 31.1276 0.459844 31.2184 0.638343 31.1856C0.970388 31.1238 1.31203 31.1199 1.63448 30.9925C1.98572 30.8535 2.17573 30.5928 2.22372 30.2279C2.25059 30.0271 2.26019 29.8224 2.26019 29.6197C2.2621 26.3006 2.2621 22.9797 2.26019 19.6606C2.26019 19.4328 2.25827 19.203 2.19877 18.9829C2.08744 18.562 1.74772 18.3882 1.37921 18.2569C1.00878 18.1237 0.622988 18.0465 0.237201 17.9808C0.104766 17.9577 0.070218 17.9075 0.0778954 17.7839C0.0874921 17.6101 0.0874921 17.4363 0.0778954 17.2626C0.0721373 17.1332 0.12204 17.0888 0.244878 17.1023C0.285184 17.1062 0.32741 17.1023 0.369635 17.1023C1.61529 17.1023 2.86094 17.1023 4.10659 17.1023Z" fill="white" />
<path d="M35.0808 17.1135C36.4992 17.1135 37.9156 17.0903 39.334 17.1212C40.4242 17.1463 41.5048 17.2873 42.5163 17.7449C43.3013 18.0982 43.9059 18.635 44.2303 19.4555C44.4529 20.0174 44.5009 20.6082 44.4644 21.2029C44.4068 22.149 44.1036 23.0005 43.4683 23.7207C42.9366 24.3212 42.2745 24.7189 41.5432 25.0124C40.5931 25.3927 39.597 25.5453 38.5817 25.6032C37.9387 25.6399 37.2957 25.6186 36.6527 25.6225C36.4915 25.6244 36.432 25.6727 36.432 25.8388C36.4378 27.1208 36.432 28.4029 36.4378 29.6849C36.4378 29.8683 36.455 30.0575 36.4973 30.2371C36.6009 30.6638 36.9195 30.8704 37.313 30.9785C37.6911 31.0828 38.0769 31.1639 38.4684 31.2006C38.5855 31.2122 38.62 31.2662 38.6162 31.3744C38.6104 31.5423 38.6085 31.7103 38.6181 31.8783C38.6258 32.0154 38.5855 32.0849 38.4396 32.0617C38.4223 32.0598 38.4032 32.0617 38.3859 32.0617C35.8485 32.0617 33.3112 32.0617 30.7738 32.0617C30.5377 32.0617 30.5377 32.0617 30.5377 31.83C30.5377 31.6871 30.5454 31.5423 30.5358 31.3995C30.5281 31.2643 30.5723 31.2102 30.7124 31.2006C31.0866 31.1755 31.4609 31.1427 31.8256 31.0558C32.3784 30.9245 32.6855 30.6329 32.697 30.046C32.7392 28.0515 32.7046 26.0569 32.7142 24.0624C32.7219 22.5892 32.7181 21.1141 32.7142 19.6409C32.7142 19.415 32.7085 19.1852 32.6547 18.9632C32.5569 18.55 32.2325 18.3782 31.8717 18.2527C31.4878 18.1194 31.0886 18.0519 30.6893 17.9824C30.555 17.9592 30.5262 17.9051 30.532 17.7835C30.5396 17.6213 30.5454 17.4591 30.53 17.2988C30.5166 17.1347 30.5819 17.1 30.7335 17.1C32.1807 17.1058 33.6278 17.1038 35.075 17.1038C35.0808 17.1058 35.0808 17.1096 35.0808 17.1135ZM36.4358 21.3439C36.4358 22.3672 36.4378 23.3924 36.4339 24.4158C36.4339 24.5837 36.4838 24.6533 36.6585 24.6436C37.2995 24.6069 37.9425 24.5953 38.5548 24.3656C39.2956 24.0875 39.858 23.6145 40.1171 22.8518C40.4645 21.8285 40.4242 20.7936 40.1306 19.7625C39.8638 18.8261 39.2189 18.3318 38.2861 18.1677C37.7544 18.075 37.2208 18.0828 36.6853 18.0731C36.4397 18.0692 36.4339 18.077 36.4339 18.3241C36.4358 19.332 36.4358 20.3379 36.4358 21.3439Z" fill="white" />
<path d="M19.7489 7.47788C20.676 7.46437 21.5704 7.76556 22.2921 8.51081C22.3132 8.53205 22.3343 8.55329 22.3554 8.57452C22.7508 9.007 22.7066 9.31012 22.2018 9.61131C21.9082 9.78701 21.5838 9.85651 21.246 9.86617C20.5205 9.88934 19.8372 9.75611 19.2345 9.31977C18.9716 9.12863 18.6012 9.15566 18.3555 9.36804C18.1136 9.57656 18.0983 9.8623 18.3286 10.0863C18.5992 10.3488 18.9524 10.4492 19.2998 10.5554C20.4821 10.9203 21.699 11.1038 22.9178 11.2814C23.887 11.4223 24.8352 11.6424 25.6989 12.1386C26.8601 12.8028 27.3514 13.8376 27.1077 15.1563C26.9791 15.8533 26.6355 16.4267 26.0578 16.8495C25.9081 16.9577 25.7737 16.975 25.5952 16.9094C25.2594 16.7897 24.91 16.7086 24.5684 16.6101C24.5262 16.5986 24.4552 16.6121 24.4475 16.5561C24.4398 16.4904 24.5108 16.4827 24.5569 16.4595C25.3112 16.0869 25.7008 15.4633 25.7354 14.6331C25.7661 13.8666 25.3227 13.2893 24.5818 13.0847C23.7661 12.8568 22.935 12.714 22.104 12.5634C20.8621 12.3394 19.6146 12.1444 18.4073 11.7718C17.8008 11.5845 17.2461 11.3103 16.8661 10.7659C16.3613 10.0399 16.4323 9.22131 17.0676 8.48185C17.4515 8.03585 17.9371 7.76362 18.4994 7.62075C18.8795 7.52422 19.2672 7.46823 19.7489 7.47788ZM20.9025 8.32933C20.77 8.31195 20.6318 8.3718 20.4898 8.41428C20.4284 8.43358 20.3478 8.47026 20.4495 8.54363C20.5992 8.65175 20.7508 8.75408 20.9044 8.85641C21.0099 8.92784 21.1289 8.93171 21.2479 8.90854C21.4495 8.86799 21.5205 8.67299 21.3861 8.51467C21.2671 8.36987 21.104 8.32546 20.9025 8.32933Z" fill="white" />
<path d="M16.5745 8.68664C16.5591 8.52832 16.6378 8.39896 16.7088 8.27152C17.0063 7.73669 17.4324 7.30999 17.8624 6.88521C18.2865 6.46429 18.7625 6.1013 19.2174 5.71514C19.2903 5.65336 19.3652 5.59351 19.4362 5.52979C19.4842 5.48731 19.5571 5.44676 19.4995 5.36953C19.4362 5.2865 19.369 5.34829 19.3153 5.39077C19.1406 5.52593 18.966 5.66108 18.799 5.80589C17.966 6.53187 17.1004 7.21538 16.1618 7.79848C15.8067 8.02052 15.4421 8.21553 15.0237 8.29856C14.7338 8.35648 14.4171 8.23677 14.2598 7.99156C14.1196 7.77338 14.1331 7.56099 14.302 7.3235C14.5477 6.97982 14.9008 6.7655 15.2425 6.5338C16.5188 5.67073 17.8739 4.94862 19.2539 4.26898C19.3383 4.22843 19.513 4.19946 19.442 4.06624C19.3709 3.93108 19.25 4.0701 19.1675 4.11065C17.6819 4.85208 16.2098 5.6244 14.7089 6.33686C13.968 6.68827 13.1638 6.78481 12.3673 6.46043C11.9508 6.29052 11.6725 5.97194 11.4882 5.56068C11.4364 5.4429 11.4825 5.40815 11.5842 5.39463C12.4421 5.28264 13.279 5.07605 14.1177 4.87138C15.6474 4.49681 17.1522 4.04693 18.5053 3.2051C18.8105 3.01395 19.1138 2.85949 19.4823 2.86335C20.0274 2.87108 20.3786 3.18773 20.4688 3.73221C20.5571 4.27477 20.4765 4.8096 20.4189 5.3425C20.3498 5.96422 20.4189 6.5589 20.6492 7.13814C20.7222 7.31964 20.703 7.34667 20.5034 7.31771C20.273 7.28488 20.0427 7.25013 19.8105 7.2482C19.6896 7.2482 19.6723 7.20186 19.7433 7.11112C19.7932 7.04354 19.845 6.97788 19.8949 6.91224C19.9276 6.86783 19.9659 6.81763 19.9103 6.76936C19.8546 6.72109 19.799 6.74426 19.7548 6.79446C19.655 6.90452 19.5514 7.01264 19.4573 7.12849C19.3805 7.22503 19.2865 7.25979 19.1656 7.2733C18.6646 7.3235 18.179 7.43356 17.728 7.66911C17.3134 7.88536 16.9756 8.19043 16.705 8.57273C16.6743 8.61714 16.6685 8.6963 16.5745 8.68664Z" fill="white" />
<path d="M30.7831 8.63041C30.5527 8.32149 30.3071 8.04925 29.9981 7.8388C29.4914 7.49512 28.9213 7.3368 28.3206 7.2808C28.1363 7.26343 27.9904 7.20744 27.8734 7.06456C27.8331 7.01436 27.7812 6.97189 27.7313 6.92748C27.6833 6.885 27.6238 6.85797 27.5701 6.90431C27.5068 6.9603 27.5605 7.0105 27.5931 7.0607C27.6219 7.10897 27.6987 7.14565 27.6661 7.2113C27.6354 7.27502 27.5586 7.24219 27.5029 7.24991C27.3666 7.26729 27.2304 7.27308 27.0941 7.29432C26.9905 7.30977 26.9425 7.27888 26.9674 7.17076C27.1114 6.55291 27.0442 5.9312 26.9981 5.3095C26.9578 4.77082 26.929 4.23214 27.1037 3.70697C27.334 3.00997 27.8638 2.70297 28.5893 2.81109C28.8887 2.8555 29.1363 2.96363 29.3724 3.15091C30.3493 3.92321 31.4855 4.3866 32.6429 4.79978C33.5431 5.12222 34.474 5.31722 35.4298 5.39445C35.4912 5.40025 35.5737 5.37708 35.6044 5.45431C35.6332 5.52768 35.5622 5.57401 35.5258 5.62421C34.902 6.4834 34.1246 6.69772 33.0959 6.49499C32.2034 6.31929 31.4049 5.90418 30.6391 5.41955C29.8541 4.92335 29.0557 4.44452 28.263 3.9599C28.2323 3.94059 28.1996 3.92514 28.1689 3.9097C28.1171 3.88267 28.0672 3.86529 28.0307 3.92901C27.9981 3.98886 28.0288 4.03713 28.0749 4.06802C28.1996 4.15104 28.3282 4.22634 28.453 4.30743C29.5816 5.04112 30.7677 5.68407 31.8694 6.4641C32.2782 6.75371 32.6755 7.0607 33.0114 7.43913C33.0632 7.49705 33.1131 7.55691 33.1554 7.62062C33.3819 7.95078 33.2648 8.27708 32.8809 8.40837C32.5316 8.52808 32.2072 8.41802 31.8924 8.29445C31.0633 7.96816 30.3666 7.43913 29.7332 6.82322C29.2092 6.31349 28.6584 5.84239 28.071 5.4099C28.0384 5.3848 28.002 5.36163 27.9655 5.34232C27.9213 5.31722 27.8849 5.3346 27.8561 5.36935C27.8215 5.4099 27.835 5.44852 27.8695 5.48134C27.9079 5.51802 27.952 5.55085 27.9924 5.58367C28.6584 6.13587 29.3301 6.68227 29.929 7.30977C30.2744 7.67468 30.5681 8.08207 30.7907 8.53773C30.7984 8.5609 30.8157 8.58021 30.7831 8.63041Z" fill="white" />
<path d="M24.3916 11.3003C24.5778 11.2694 24.7428 11.2366 24.9117 11.2173C26 11.088 27.0729 10.8737 28.1247 10.559C28.4164 10.4721 28.7062 10.3813 28.9596 10.2076C29.2187 10.03 29.3108 9.83883 29.2494 9.60908C29.1995 9.41795 28.95 9.23068 28.7043 9.20172C28.4932 9.17662 28.3166 9.24612 28.1362 9.36003C27.2802 9.90061 26.3666 10.0261 25.405 9.69403C25.2054 9.62453 25.0423 9.48938 24.9098 9.32335C24.7966 9.18241 24.7851 9.03568 24.8676 8.8735C24.9444 8.72098 25.0557 8.59742 25.1728 8.47965C25.7524 7.90046 26.4472 7.57417 27.2629 7.50081C28.0901 7.42744 28.8963 7.49695 29.641 7.89467C30.2782 8.23639 30.7273 8.75574 30.8751 9.48166C31.0248 10.2172 30.6006 10.9876 29.8617 11.4162C29.3646 11.7038 28.8195 11.8486 28.2706 11.9799C27.7331 12.1093 27.1881 12.2135 26.6487 12.3352C26.499 12.368 26.3819 12.3468 26.2553 12.2444C25.7639 11.8525 25.1958 11.6073 24.6027 11.422C24.5317 11.4007 24.453 11.3949 24.3916 11.3003ZM26.5163 8.33871C26.3896 8.34837 26.2188 8.3754 26.096 8.51634C25.9539 8.68044 26.0211 8.87543 26.2322 8.92177C26.4395 8.9681 26.6065 8.87543 26.7505 8.74608C26.8522 8.65534 27.0921 8.58584 27.0479 8.4951C26.9769 8.3503 26.7505 8.36574 26.5816 8.33871C26.5758 8.33871 26.57 8.33871 26.5163 8.33871Z" fill="white" />
<path d="M24.3552 21.2398C24.5261 21.1645 24.6489 21.1085 24.7717 21.0544C25.8658 20.5602 25.9445 19.0329 25.2554 18.4383C25.004 18.2201 24.7046 18.11 24.3898 18.0386C23.6931 17.8822 22.9925 17.7374 22.3303 17.4574C21.576 17.1408 20.9292 16.7025 20.5703 15.9205C20.0924 14.8799 20.3112 13.5438 21.1058 12.7329C21.1749 12.6634 21.2421 12.6325 21.3438 12.6518C21.8639 12.7502 22.386 12.841 22.9061 12.9356C22.9465 12.9433 23.0002 12.9375 23.0098 12.9877C23.0213 13.0495 22.9618 13.0592 22.9177 13.0765C22.4493 13.2696 22.0808 13.5747 21.8659 14.0477C21.4494 14.9648 21.9542 16.0924 22.9177 16.382C23.6585 16.604 24.4051 16.8048 25.1422 17.0385C25.8063 17.2489 26.3533 17.6273 26.6719 18.2741C26.9713 18.8804 26.9617 19.5137 26.7813 20.1489C26.6277 20.6934 26.3475 21.1568 25.8677 21.4792C25.6969 21.5951 25.5318 21.6472 25.3188 21.5603C25.0232 21.4406 24.7122 21.3576 24.3552 21.2398Z" fill="white" />
<path d="M24.3914 25.5613C24.6352 25.4358 24.8309 25.349 25.0017 25.2157C25.6063 24.7408 25.7541 23.785 25.3031 23.2213C25.0344 22.8853 24.6524 22.7502 24.259 22.6401C23.7254 22.4914 23.1784 22.4026 22.6506 22.2289C21.7581 21.9373 21.2149 21.3002 20.8829 20.4545C20.6084 19.7594 20.57 19.0585 20.8809 18.3596C21.0326 18.0198 21.2552 17.7379 21.545 17.5062C21.6429 17.4271 21.7293 17.4213 21.8387 17.4792C22.165 17.6529 22.5124 17.7804 22.8636 17.8924C22.9078 17.9059 22.9673 17.9001 22.973 17.9638C22.9788 18.0275 22.9154 18.0314 22.877 18.0526C22.3972 18.3249 22.0632 18.7091 21.9462 19.2613C21.7888 20.0027 22.1554 20.7402 22.8406 21.0549C23.2264 21.2326 23.6448 21.3117 24.0536 21.416C24.7119 21.584 25.3818 21.7307 25.9173 22.1864C26.5603 22.7328 26.8462 23.4394 26.7349 24.2793C26.6677 24.7871 26.3587 25.1733 25.996 25.5169C25.687 25.8104 25.3722 26.0035 24.9384 25.7448C24.7925 25.6598 24.6083 25.6328 24.3914 25.5613Z" fill="white" />
<path d="M24.1156 29.3718C24.3344 29.2926 24.511 29.2424 24.6761 29.1671C25.2135 28.9219 25.4457 28.4701 25.4572 27.9006C25.4687 27.3484 25.1329 27.024 24.6665 26.8136C24.1233 26.5684 23.5398 26.4718 22.9583 26.3792C21.4612 26.1417 20.8432 25.0122 20.8317 23.8422C20.824 23.1626 21.1004 22.5872 21.6167 22.1374C21.6762 22.0853 21.7376 22.0196 21.8201 22.0775C22.1829 22.3305 22.5955 22.4598 23.0274 22.5892C22.9679 22.6973 22.8623 22.7224 22.7836 22.7745C22.2865 23.1124 21.989 23.5623 22.0063 24.182C22.0255 24.8346 22.4574 25.3404 23.108 25.5181C23.6819 25.6745 24.2769 25.7459 24.8392 25.9486C25.0523 26.0258 25.2672 26.0934 25.4649 26.2054C25.9236 26.4641 26.1655 26.8773 26.2883 27.3715C26.4629 28.084 26.3804 28.7501 25.891 29.3293C25.8334 29.3969 25.7662 29.4567 25.6991 29.5166C25.4457 29.7502 25.1866 29.8834 24.8488 29.6459C24.7125 29.5494 24.5283 29.5262 24.3651 29.4683C24.2941 29.4413 24.227 29.4142 24.1156 29.3718Z" fill="white" />
<path d="M32.9503 6.68584C33.0482 6.66267 33.1422 6.69356 33.2382 6.70901C33.91 6.81521 34.5433 6.73412 35.1076 6.31896C35.123 6.3093 35.1422 6.30158 35.1518 6.28806C35.3859 5.9598 35.6911 6.05441 36.0001 6.13165C37.1191 6.41164 38.2323 6.71867 39.3589 6.96969C39.5451 7.01024 39.7293 7.05852 39.9155 7.09135C40.0287 7.11065 40.0479 7.14734 39.9808 7.24003C39.5873 7.77877 39.071 8.12634 38.4165 8.26151C37.6353 8.42178 36.8753 8.29434 36.1248 8.08C35.027 7.76525 34.0059 7.2632 32.9925 6.7457C32.9733 6.73605 32.9484 6.73025 32.9503 6.68584Z" fill="white" />
<path d="M14.1212 6.78834C13.5857 7.03739 13.0751 7.27679 12.5627 7.51426C12.1039 7.72663 11.6548 7.96409 11.1827 8.14557C10.3938 8.44674 9.57809 8.60119 8.7355 8.41006C8.07525 8.25947 7.65683 7.83474 7.45722 7.18798C7.41308 7.04705 7.45339 6.9814 7.60885 6.9621C8.86794 6.79799 10.0963 6.49296 11.3093 6.12421C11.4725 6.07401 11.5857 6.08366 11.7143 6.2246C12.0751 6.61845 12.5492 6.78448 13.0694 6.81923C13.3477 6.83854 13.6279 6.83467 13.9043 6.76131C13.9638 6.74587 14.029 6.72656 14.1212 6.78834Z" fill="white" />
<path d="M24.1405 32.6843C24.2307 32.582 24.3363 32.5762 24.4265 32.5337C24.9351 32.2981 25.1654 31.9004 25.1136 31.3366C25.0733 30.9099 24.77 30.6107 24.2518 30.4755C23.7106 30.3346 23.1578 30.2439 22.63 30.0508C21.9064 29.7863 21.3921 29.3171 21.1406 28.566C20.8738 27.7687 21.2116 26.8342 21.9333 26.4114C21.9813 26.3824 22.0331 26.3573 22.0849 26.3727C22.4189 26.4693 22.7509 26.5697 23.0849 26.6681C23.0849 26.6836 23.0849 26.699 23.0849 26.7145C22.9716 26.7724 22.8546 26.8245 22.7433 26.8882C22.4189 27.0736 22.1444 27.3072 22.0293 27.6798C21.8488 28.2649 22.1444 28.8808 22.7356 29.1858C23.154 29.4021 23.6146 29.4793 24.058 29.6106C24.4476 29.7264 24.8276 29.8538 25.1789 30.0662C26.1116 30.63 26.2172 32.3039 25.0503 32.9044C24.9908 32.9353 24.9351 32.9623 24.8641 32.9372C24.6319 32.8542 24.3958 32.7731 24.1405 32.6843Z" fill="white" />
<path d="M23.2251 7.43724C23.2251 6.29419 23.2251 5.14921 23.2251 4.00616C23.2251 3.7648 23.227 3.76287 23.4632 3.80728C23.6649 3.8459 23.8646 3.86328 24.0663 3.81501C24.1739 3.78991 24.2257 3.83045 24.2219 3.94244C24.22 3.98492 24.2219 4.02547 24.2219 4.06794C24.2219 6.31929 24.2219 8.57257 24.2219 10.8239C24.2219 11.0962 24.2142 11.073 23.9645 11.1502C23.7475 11.2159 23.5535 11.1464 23.3499 11.1271C23.2712 11.1193 23.2328 11.073 23.2309 10.9958C23.2289 10.9417 23.2289 10.8876 23.2289 10.8336C23.2251 9.70211 23.2251 8.57064 23.2251 7.43724Z" fill="white" />
<path d="M14.3443 6.91785C14.0353 7.30593 13.7992 7.69594 14.1619 8.16512C14.4997 8.60147 14.9585 8.51844 15.4633 8.38715C15.3251 8.54934 15.1965 8.61884 15.0679 8.69221C14.2617 9.15559 13.4307 9.57071 12.5938 9.96845C12.1159 10.1963 11.6054 10.3256 11.0699 10.2194C10.5881 10.1248 10.448 9.84487 10.6169 9.37377C10.7474 9.00885 11.0104 8.76365 11.3328 8.58216C12.3021 8.03576 13.2771 7.49707 14.2502 6.95646C14.2809 6.94101 14.3136 6.93136 14.3443 6.91785Z" fill="white" />
<path d="M25.2321 2.17582C25.2283 2.96168 24.5776 3.61045 23.7907 3.61431C22.9961 3.61624 22.3396 2.95589 22.3492 2.16231C22.3588 1.37066 23.0057 0.719965 23.7868 0.718034C24.5661 0.714172 25.236 1.38997 25.2321 2.17582Z" fill="white" />
<path d="M32.3228 8.62392C32.4609 8.62392 32.5915 8.62972 32.7201 8.62199C33.0636 8.60461 33.2959 8.41539 33.4417 8.11611C33.5012 7.99254 33.484 7.86124 33.4302 7.7338C33.3458 7.53879 33.2114 7.37853 33.0694 7.22406C33.0214 7.17193 32.9581 7.13331 32.935 7.05801C33.0118 7.0136 33.0617 7.07925 33.1135 7.10435C34.0003 7.52527 34.8985 7.9211 35.7181 8.47139C35.981 8.64709 36.2305 8.84018 36.4186 9.10277C36.7219 9.52755 36.5319 9.9813 36.0194 10.0566C35.3438 10.157 34.72 9.96393 34.1212 9.68781C33.5166 9.40784 32.9542 9.04292 32.3784 8.70888C32.3554 8.69923 32.3247 8.68571 32.3228 8.62392Z" fill="white" />
<path d="M25.6969 34.4155C25.7026 35.0449 25.4819 35.545 24.8793 35.821C24.8217 35.8481 24.7526 35.9137 24.7046 35.8577C24.6566 35.8017 24.7372 35.74 24.7679 35.6878C24.9176 35.4407 25.0462 35.182 25.0904 34.8962C25.196 34.2089 24.8178 33.7416 24.0885 33.6393C23.5684 33.5659 23.0597 33.4462 22.5876 33.2049C22.1442 32.979 21.7584 32.6894 21.5646 32.2009C21.3381 31.6256 21.5147 30.7355 21.9369 30.2991C22.0521 30.1794 22.1596 30.1389 22.3112 30.2316C22.4225 30.2992 22.5454 30.3474 22.6663 30.3976C22.7891 30.4478 22.8006 30.4961 22.6874 30.5791C22.4878 30.7278 22.3246 30.9093 22.2421 31.1487C22.0751 31.6314 22.2498 32.1179 22.6951 32.4345C22.9599 32.6237 23.267 32.6933 23.5703 32.7801C24.0213 32.9095 24.4839 33.006 24.908 33.2165C25.4032 33.4617 25.7122 33.8305 25.6969 34.4155Z" fill="white" />
<path d="M16.6591 7.89478C16.6937 8.00098 16.6207 8.04538 16.5881 8.10331C16.4346 8.39102 16.2887 8.67679 16.4288 9.02049C16.471 9.12476 16.3847 9.22517 16.3597 9.32944C16.2906 9.6268 16.2791 9.92223 16.3597 10.2157C16.3866 10.3123 16.3616 10.3702 16.2753 10.4223C15.7685 10.7294 15.2388 10.9842 14.6572 11.1136C14.448 11.1599 14.2292 11.1657 14.0162 11.1329C13.6649 11.0808 13.5248 10.766 13.6957 10.4204C13.8434 10.1211 14.0642 9.87782 14.2945 9.64418C14.8089 9.12283 15.3924 8.69417 16.0219 8.32151C16.2407 8.19406 16.4422 8.04152 16.6591 7.89478Z" fill="white" />
<path d="M30.7197 7.98523C31.0479 8.13584 31.3454 8.33087 31.641 8.52782C32.2935 8.96035 32.9192 9.42378 33.4202 10.0359C33.5987 10.2522 33.7676 10.4761 33.8597 10.7484C33.9288 10.9531 33.8578 11.0767 33.6524 11.1442C33.3127 11.2543 32.9787 11.1732 32.6467 11.1095C32.1074 11.0052 31.6295 10.7523 31.1708 10.4568C31.069 10.3912 31.0422 10.3313 31.0767 10.2077C31.1573 9.92775 31.1439 9.64005 31.0806 9.35427C31.069 9.29634 31.0249 9.23455 31.0729 9.18434C31.2034 9.04338 31.1247 8.90435 31.0806 8.76533C30.9942 8.49113 30.8426 8.24977 30.7197 7.98523Z" fill="white" />
<path d="M23.2251 35.9455C23.2251 35.2928 23.2251 34.6383 23.2251 33.9857C23.2251 33.7733 23.2769 33.7328 23.4844 33.7675C23.6611 33.7965 23.8358 33.839 24.0125 33.8544C24.172 33.8699 24.2219 33.9413 24.22 34.0977C24.2142 35.0747 24.2181 36.0517 24.2181 37.0286C24.2181 37.3105 24.2181 37.5924 24.2181 37.8743C24.2161 38.2431 24.0452 38.4343 23.7168 38.4323C23.3883 38.4304 23.2251 38.245 23.2231 37.8685C23.2231 37.2275 23.2251 36.5865 23.2251 35.9455Z" fill="white" />
<path d="M24.3975 8.6818C24.3975 8.55051 24.3975 8.41922 24.3975 8.286C24.3975 8.03114 24.3975 8.03114 24.6527 7.97322C25.1326 7.86509 25.5395 7.63727 25.8408 7.23568C26.1633 6.80899 26.2669 6.31086 26.3091 5.78956C26.3379 5.4401 26.2554 5.09837 26.2343 4.75277C26.1921 4.10018 26.2266 3.45725 26.5356 2.86452C26.7794 2.39535 27.1556 2.11733 27.7064 2.13084C28.0116 2.13857 28.2438 2.30075 28.4703 2.48224C28.4914 2.49961 28.5241 2.51892 28.503 2.55367C28.4857 2.58456 28.4511 2.57877 28.4223 2.57877C28.2496 2.5807 28.0769 2.56718 27.908 2.61159C27.2535 2.78343 26.9617 3.2719 26.8197 3.88394C26.7045 4.38014 26.7352 4.88212 26.7775 5.38604C26.8254 5.96526 26.8811 6.54255 26.7525 7.11984C26.716 7.28009 26.6565 7.37855 26.48 7.42489C25.8427 7.59093 25.3379 7.97515 24.8927 8.44431C24.6969 8.65283 24.5433 8.88645 24.5932 9.19923C24.6067 9.27839 24.5702 9.32666 24.4857 9.32666C24.3994 9.32666 24.3975 9.26488 24.3975 9.20309C24.3994 9.02933 24.3994 8.85556 24.3975 8.6818Z" fill="white" />
<path d="M19.1138 2.64174C19.8873 1.96402 20.7126 2.09725 21.1003 3.03756C21.3018 3.52606 21.2654 4.03773 21.2347 4.54554C21.2001 5.10741 21.1214 5.66735 21.2443 6.22922C21.4381 7.10582 21.9256 7.71982 22.8028 7.97276C22.9717 8.02103 23.0504 8.08668 23.0369 8.2759C23.0197 8.5327 23.0331 8.79143 23.0312 9.04823C23.0312 9.0965 23.0523 9.16987 22.9717 9.17373C22.9103 9.1776 22.8757 9.12739 22.8604 9.07333C22.607 8.21218 21.8988 7.84146 21.1732 7.49391C21.0754 7.44564 21.0043 7.39544 20.9583 7.2989C20.6761 6.69455 20.5648 6.0651 20.6416 5.3951C20.6915 4.9568 20.751 4.51465 20.7318 4.07056C20.7203 3.81762 20.6819 3.56854 20.584 3.33491C20.3997 2.89082 20.0485 2.67843 19.584 2.64367C19.4401 2.63209 19.2923 2.64174 19.1138 2.64174Z" fill="white" />
<path d="M24.2199 14.784C24.2199 15.2338 24.2142 15.6818 24.2238 16.1317C24.2276 16.3132 24.1508 16.3711 23.9837 16.3846C23.7571 16.402 23.5477 16.3402 23.3365 16.2765C23.2558 16.2514 23.2251 16.1993 23.2251 16.1162C23.227 15.1933 23.2251 14.2723 23.2251 13.3493C23.2251 13.2702 23.2462 13.2084 23.3269 13.1794C23.6054 13.0829 23.8781 13.1118 24.145 13.2161C24.2334 13.2509 24.218 13.33 24.2199 13.3995C24.2199 13.861 24.2199 14.3225 24.2199 14.784Z" fill="white" />
<path d="M23.225 19.5407C23.225 19.1391 23.2231 18.7375 23.225 18.3378C23.225 18.1331 23.3114 18.052 23.515 18.081C23.709 18.11 23.8991 18.1582 24.0912 18.2007C24.1776 18.22 24.2198 18.276 24.2198 18.3687C24.2198 19.2067 24.2198 20.0447 24.2198 20.8846C24.2198 20.9811 24.1737 21.0275 24.0816 21.0641C23.805 21.1723 23.5572 21.0603 23.3037 20.9811C23.2058 20.9502 23.2269 20.8556 23.2269 20.7803C23.2231 20.3671 23.225 19.9539 23.225 19.5407Z" fill="white" />
<path d="M23.2251 24.0608C23.2251 23.7132 23.2251 23.3676 23.2251 23.02C23.2251 22.796 23.3461 22.6802 23.5689 22.713C23.7437 22.74 23.9165 22.7941 24.0894 22.8327C24.1873 22.854 24.2219 22.9138 24.2219 23.0123C24.22 23.7422 24.22 24.472 24.2219 25.2C24.2219 25.3042 24.1815 25.3525 24.0798 25.3911C23.8166 25.4877 23.5766 25.395 23.3288 25.3371C23.2232 25.312 23.2251 25.2231 23.2251 25.1362C23.2251 24.779 23.2251 24.4199 23.2251 24.0608Z" fill="white" />
<path d="M24.2201 28.0008C24.2201 28.3 24.2162 28.5993 24.222 28.8986C24.2239 29.0338 24.1836 29.1014 24.0415 29.1323C23.8225 29.1786 23.6074 29.2037 23.3865 29.1825C23.277 29.1728 23.2252 29.1226 23.2271 29.0106C23.2271 28.358 23.2271 27.7053 23.2271 27.0527C23.2271 26.9561 23.2674 26.9059 23.3635 26.875C23.5805 26.8036 23.7918 26.7418 24.0222 26.821C24.1567 26.8654 24.2335 26.9233 24.2258 27.0855C24.2105 27.3906 24.2201 27.6957 24.2201 28.0008Z" fill="white" />
<path d="M23.2246 31.4483C23.2246 31.178 23.2285 30.9096 23.2227 30.6393C23.2208 30.5061 23.2669 30.4733 23.3956 30.51C23.6183 30.5718 23.8469 30.6181 24.0735 30.6683C24.1772 30.6915 24.2195 30.7513 24.2195 30.8594C24.2156 31.3151 24.2176 31.7707 24.2195 32.2264C24.2195 32.2882 24.2176 32.3596 24.158 32.3847C23.8872 32.4909 23.6164 32.6106 23.3187 32.4716C23.2323 32.4311 23.2227 32.3596 23.2246 32.2766C23.2246 31.9986 23.2246 31.7244 23.2246 31.4483Z" fill="white" />
<path d="M24.3978 10.3221C24.3978 10.1367 24.3978 9.95135 24.3978 9.766C24.3978 9.68877 24.3825 9.59416 24.4823 9.57292C24.5917 9.54975 24.7107 9.46286 24.8182 9.56906C24.9832 9.72931 25.1694 9.85288 25.3824 9.9359C25.4554 9.96486 25.5014 10.0324 25.5513 10.0923C25.7202 10.3008 25.9026 10.4958 26.1195 10.658C26.1502 10.6812 26.2058 10.6966 26.1982 10.7449C26.1886 10.8047 26.1252 10.8009 26.083 10.8067C25.7087 10.8685 25.3325 10.9264 24.9583 10.9843C24.8239 11.0055 24.6876 11.0229 24.5533 11.0442C24.4496 11.0615 24.3959 11.0249 24.3997 10.9109C24.4017 10.7159 24.3978 10.519 24.3978 10.3221Z" fill="white" />
<path d="M23.0331 10.2498C23.0331 10.466 23.0273 10.6804 23.035 10.8966C23.0389 11.0279 22.987 11.0646 22.8642 11.0453C22.417 10.9758 21.9698 10.9101 21.5226 10.8425C21.488 10.8367 21.4439 10.8406 21.4343 10.7981C21.4266 10.7595 21.4573 10.7325 21.4861 10.7112C21.7587 10.5085 21.9602 10.2421 22.1445 9.96018C22.2116 9.85785 22.3172 9.8173 22.4074 9.74972C22.5168 9.6667 22.6243 9.57982 22.703 9.4659C22.7625 9.38095 22.8316 9.37709 22.9199 9.40605C23.012 9.43501 23.0331 9.49873 23.0331 9.58368C23.0331 9.80765 23.0331 10.0278 23.0331 10.2498Z" fill="white" />
<path d="M22.5804 35.8254C22.2808 35.7211 22.0542 35.5416 21.8948 35.2829C21.4915 34.6246 21.6336 33.8851 22.2424 33.416C22.275 33.3909 22.3115 33.3465 22.3499 33.362C22.542 33.4372 22.7379 33.5106 22.9203 33.6071C22.9914 33.6438 22.928 33.6959 22.88 33.7249C22.5458 33.9257 22.3826 34.2384 22.2943 34.6072C22.204 34.9836 22.3039 35.3138 22.4959 35.6323C22.5285 35.6844 22.5862 35.7269 22.5804 35.8254Z" fill="white" />
<path d="M30.7507 11.9147C30.5281 11.8954 30.2632 11.8317 30.0003 11.7583C29.9619 11.7468 29.912 11.7313 29.9081 11.6869C29.9024 11.6348 29.958 11.627 29.9907 11.6058C30.3534 11.3876 30.6528 11.1037 30.8639 10.733C30.9311 10.6152 30.9772 10.6461 31.0424 10.7291C31.1442 10.8546 31.2363 10.9859 31.3035 11.1327C31.5184 11.5865 31.3035 11.9205 30.7507 11.9147Z" fill="white" />
<path d="M17.1468 11.9358C17.0296 11.9339 16.9106 11.9416 16.7972 11.8934C16.4362 11.7428 16.3171 11.2486 16.5649 10.9281C16.6052 10.876 16.6398 10.8528 16.6878 10.9185C16.9336 11.2563 17.2505 11.5131 17.6212 11.7023C17.721 11.7544 17.6903 11.8046 17.6154 11.8374C17.4656 11.9011 17.3139 11.9571 17.1468 11.9358Z" fill="white" />
<path d="M20.9739 10.7337C20.6935 10.7201 20.4381 10.4092 20.4688 10.1561C20.4784 10.0731 20.5284 10.0538 20.5917 10.0673C20.972 10.1426 21.3485 10.1059 21.7249 10.0441C21.8036 10.0306 21.8574 10.0576 21.794 10.1368C21.602 10.3802 21.4003 10.6178 21.0873 10.7124C21.0431 10.7279 20.9951 10.7298 20.9739 10.7337Z" fill="white" />
<path d="M27.1795 10.1593C27.168 10.559 26.828 10.7849 26.4785 10.6439C26.2327 10.5455 26.0502 10.3678 25.8735 10.1786C25.8505 10.1535 25.8178 10.1245 25.8409 10.0859C25.8639 10.0473 25.9043 10.0608 25.9388 10.0666C26.3018 10.1458 26.6629 10.0859 27.022 10.0435C27.1315 10.0338 27.2045 10.0454 27.1795 10.1593Z" fill="white" />
<path d="M28.6248 9.4162C28.7325 9.43359 28.8401 9.46644 28.9304 9.53987C29.0189 9.61329 29.0842 9.70797 29.0227 9.82197C28.9631 9.93211 28.8805 10.0364 28.7306 10.021C28.5076 9.99587 28.3058 9.90699 28.1117 9.79879C28.0751 9.77753 28.004 9.74275 28.0713 9.69638C28.2424 9.57851 28.3884 9.41234 28.6248 9.4162Z" fill="white" />
<path d="M18.6665 10.0312C18.5531 10.0177 18.4762 9.92883 18.4147 9.82256C18.359 9.72788 18.4051 9.64866 18.4666 9.5791C18.6204 9.3994 18.9067 9.36655 19.1124 9.5134C19.195 9.5733 19.3469 9.60615 19.3373 9.71629C19.3277 9.82256 19.1777 9.83994 19.0855 9.88825C18.9605 9.95588 18.826 10.0042 18.6665 10.0312Z" fill="white" />
<path d="M27.88 10.3954C27.7897 10.409 27.7532 10.3781 27.7167 10.3471C27.6167 10.264 27.5149 10.1809 27.4168 10.0939C27.3611 10.0437 27.3534 9.98184 27.4322 9.95478C27.611 9.88906 27.782 9.78083 27.9819 9.92772C28.0991 10.0147 28.2471 10.0591 28.3798 10.1229C28.4067 10.1345 28.447 10.1384 28.4413 10.1732C28.4374 10.1964 28.4105 10.2273 28.3855 10.235C28.2068 10.2949 28.0242 10.3491 27.88 10.3954Z" fill="white" />
<path d="M19.635 9.82556C19.7426 9.86228 19.8579 9.89127 19.9656 9.93958C20.0328 9.97051 20.0117 10.0227 19.9617 10.0652C19.8579 10.1541 19.7561 10.2469 19.6523 10.3338C19.6062 10.3744 19.5523 10.3937 19.487 10.3725C19.3409 10.3242 19.191 10.2855 19.0469 10.2333C19.0123 10.2217 18.9123 10.1889 19.0084 10.1309C19.1872 10.0246 19.3736 9.93572 19.5581 9.84102C19.5792 9.83136 19.6042 9.83136 19.635 9.82556Z" fill="white" />
<path d="M20.3019 10.5878C20.2673 10.5801 20.2616 10.5782 20.2558 10.5763C20.1329 10.5453 19.9331 10.5415 19.9139 10.4429C19.8889 10.3096 20.0752 10.2323 20.1713 10.1318C20.2328 10.0662 20.275 10.1048 20.2904 10.1821C20.3096 10.2864 20.323 10.3927 20.3653 10.4932C20.4018 10.5821 20.3422 10.5956 20.3019 10.5878Z" fill="white" />
</g>
<defs>
<clipPath id="svg--795138607-1475339991-clip0_3090_5984">
<rect fill="white" height="37.7143" transform="translate(0 0.718018)" width="78" />
</clipPath>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--center IID-background-aba1fae0 aem-GridColumn aem-GridColumn--default--12 CID-background-79490109">
<style>
	.IID-background-aba1fae0{color:#222;padding:96px 0}@media (max-width: 1229px){.IID-background-aba1fae0{padding:72px 0}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid IID-grid-7f16dc3a CID-grid-1659f761">
<style>
	
	.IID-grid-7f16dc3a{--halfHorizGap:0px;--halfVertGap:16px}
</style>
<div class="grid__parsys    l-flex--justify-content-space-between     ">
<div class="grid-item IID-grid-item-a74aa9de CID-grid-item-1e7a19ff">
<style>.IID-grid-item-a74aa9de{padding:0 148px 0 0}@media (min-width: 1488px){.IID-grid-item-a74aa9de{padding-right:148px}}@media (max-width: 1229px){.IID-grid-item-a74aa9de{padding:0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-aeaaaa09">
<style>
	
	.IID-custom-text-aeaaaa09{font-size:20px;font-weight:500;line-height:1.4;letter-spacing:-.08px;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-dl-context="item0" data-style="h5" data-content-wrapper="true">
<h5>Trusted Global Partner Network:</h5>
</div>
</div>
</div>
</div>
<div class="grid-item l-tab-flex__col--12 l-flex__col--flex-grow-1 IID-grid-item-e90f8084 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-e90f8084{min-width:846px}@media (max-width: 1229px){.IID-grid-item-e90f8084{min-width:100%}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-scroll-mob="true" class="grid CID-grid-1659f761 IID-grid-df550bde">
<style>
	@media (max-width: 767px){.IID-grid-df550bde{margin:0 -28px 0 0}.IID-grid-df550bde{overflow:scroll}}
	.IID-grid-df550bde{--halfHorizGap:8px;--halfVertGap:0px}
</style>
<div class="grid__parsys    l-flex--justify-content-space-between     ">
<div class="grid-item CID-grid-item-1e7a19ff IID-grid-item-c0c536ba">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image IID-image-73f0cd4d CID-image-b4fec0a0">
<style>.IID-image-73f0cd4d{max-width:90px}.IID-image-73f0cd4d:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--1046553333-649887242-title" class="image__img" id="svg--1046553333-649887242" role="img" version="1.1" viewBox="0 0 121.7 50" x="0" xml:space="preserve" y="0"><title id="svg--1046553333-649887242-title">AT&amp;T logo</title><style/><defs><path d="M0 0h121.7v50H0z" id="svg--1046553333-649887242-SVGID_1_324435645645656745" /></defs><clipPath id="svg--1046553333-649887242-SVGID_00000042696660455518032250000015812401129920516999_"><use overflow="visible" xlink:href="#svg--1046553333-649887242-SVGID_1_324435645645656745" /></clipPath><g clip-path="url(#svg--1046553333-649887242-SVGID_00000042696660455518032250000015812401129920516999_)"><defs><path d="M0 0h121.7v50H0z" id="svg--1046553333-649887242-SVGID_00000153678505853677790870000001045532536525503410_" /></defs><clipPath id="svg--1046553333-649887242-SVGID_00000114039812149707482620000008175980026659965599_"><use overflow="visible" xlink:href="#svg--1046553333-649887242-SVGID_00000153678505853677790870000001045532536525503410_" /></clipPath><g clip-path="url(#svg--1046553333-649887242-SVGID_00000114039812149707482620000008175980026659965599_)"><path d="M112.6 35h-.2c-.1 0-.1-.1-.2-.1-.1-.1-.1-.1-.1-.2V18.4h-5.7c-.1 0-.1-.1-.2-.1-.1-.1-.1-.1-.1-.2V15.7v-.2c0-.1.1-.1.1-.2.1-.1.1-.1.2-.1H121.4c.1 0 .1.1.2.1.1.1.1.1.1.2V18.1c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1h-5.7v16.3c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1H112.6zm-42-8l-2.9-8.2-2.8 8.2h5.7zm6.4 7.4v.2c0 .1 0 .2-.1.2 0 .1-.1.1-.2.2-.1 0-.1.1-.2.1H74c-.4 0-.6-.2-.7-.5l-1.5-4.2h-8.1l-1.5 4.2c-.1.4-.4.5-.7.5H59c-.1 0-.2 0-.2-.1-.1 0-.1-.1-.2-.2 0-.1-.1-.1-.1-.2v-.2l6.8-18.8c.1-.4.4-.5.7-.5h3.4c.4 0 .6.1.8.5L77 34.4zm19.4-2.1c1.6 0 2.7-.8 3.5-2.1l-4-4.3c-1.6.9-2.6 1.7-2.6 3.5.1 1.7 1.5 2.9 3.1 2.9zm1.1-14.6c-1.3 0-2.1.8-2.1 1.9 0 .9.4 1.6 1.5 2.7 1.8-1 2.5-1.6 2.5-2.7.1-1.1-.6-1.9-1.9-1.9zm11.1 16.6c.3.4.1.7-.3.7h-3.2c-.4 0-.6-.1-.9-.4l-1.9-2.1c-1.3 1.7-3.1 3-6 3-3.6 0-6.5-2.2-6.5-6 0-2.9 1.6-4.4 3.9-5.7-1.1-1.4-1.7-2.8-1.7-4 0-3.1 2.2-5.2 5.4-5.2 3.4 0 5.4 2 5.4 4.9 0 2.5-1.8 3.9-3.7 4.9l2.8 3 1.6-2.8c.2-.3.4-.5.8-.5h2.4c.4 0 .6.3.4.7l-2.8 4.8 4.3 4.7zm-24.9.7h.2c.1 0 .1-.1.2-.1.1-.1.1-.1.1-.2V18.4h5.7c.1 0 .1-.1.2-.1.1-.1.1-.1.1-.2V15.7v-.2c0-.1-.1-.1-.1-.2-.1-.1-.1-.1-.2-.1H74.9c-.1 0-.1.1-.2.1-.1.1-.1.1-.1.2V18.1c0 .1.1.1.1.2.1.1.1.1.2.1h5.7v16.3c0 .1.1.1.1.2.1.1.1.1.2.1H83.7z" /><path d="M9.7 44.7c4.6 3.6 10.3 5.4 16.1 5.2s11.4-2.4 15.7-6.2c.1 0 0-.1 0 0-2 1.3-7.6 4.2-16.5 4.2-7.7 0-12.5-1.7-15.3-3.2 0 0-.1 0 0 0zm17 1.3c6.2 0 12.9-1.7 17-5 1.1-.9 2.2-2.1 3.1-3.7.6-1 1.1-2 1.5-3.1 0-.1 0-.1-.1 0-3.8 5.5-14.7 9-25.9 9-8 0-16.5-2.5-19.9-7.4 0 0-.1 0 0 0C5.5 42.4 15 46 26.7 46zM20 35C7.2 35 1.1 29.1 0 25c0-.1-.1 0-.1 0 0 1.4.1 3.1.4 4.3.1.6.6 1.5 1.3 2.2 3.1 3.2 10.8 7.8 24.2 7.8 18.2 0 22.4-6.1 23.3-8.1.6-1.4.9-4 .9-6.2v-1.4c0-.1 0-.1-.1 0C49 28.5 33.5 35 20 35zM2.4 14.3C1.7 15.8.9 18.2.6 19.5c-.1.5-.1.8.1 1.2 1.5 3.3 9.3 8.5 27.4 8.5 11 0 19.6-2.7 21-7.7.3-.9.3-1.9-.1-3.2-.4-1.4-1.1-3.1-1.6-4.3 0 0-.1 0 0 0 .2 6.5-17.9 10.7-27 10.7-9.9 0-18.2-3.9-18.2-8.9 0-.5.1-1 .2-1.5.1-.1 0-.1 0 0zm39.1-8c.1.2.2.4.2.6 0 2.8-8.5 7.7-22 7.7-9.9 0-11.8-3.7-11.8-6 0-.8.3-1.7 1-2.6 0-.1 0-.1 0 0-1.4 1-2.5 2.3-3.6 3.6-.5.6-.8 1.2-.8 1.5 0 4.9 12.2 8.4 23.6 8.4 12.1 0 17.6-4 17.6-7.4 0-1.2-.5-2-1.7-3.4-.8-.9-1.6-1.7-2.5-2.4 0-.1 0 0 0 0zm-3.7-2.8C33.9 1.2 29.4 0 24.9 0s-9 1.3-12.9 3.6c-1.1.7-1.8 1.3-1.8 2 0 2.1 4.9 4.4 13.7 4.4 8.7 0 15.4-2.5 15.4-4.9 0-.6-.5-1-1.5-1.6z" fill="#00a8e0" /></g></g></svg>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-b9e6764c CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image CID-image-b4fec0a0 IID-image-7d8aeafb">
<style>.IID-image-7d8aeafb{max-width:112px}.IID-image-7d8aeafb:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--715612096--1235753675-title" class="image__img" id="svg--715612096--1235753675" role="img" version="1.1" viewBox="0 0 128 42.7" x="0" xml:space="preserve" y="0"><title id="svg--715612096--1235753675-title">Vodafone logo</title>
<style>
    .pth-cls-921-1{fill:#e93323}
  </style>
<path class="pth-cls-921-1" d="M37.6 7.5c-1.9-2.3-4.3-4.1-7-5.4-.1 0-.2-.1-.3 0-.2 0-.4.1-.6.2-2.1.7-3.8 2-4.9 3.8-.8 1.3-1.3 2.9-1.3 4.5 0 .2.1.3.3.4.8.3 1.7.5 2.5.8 1.8.7 3.3 1.8 4.5 3.3 1.8 2.3 2.3 4.9 2.1 7.8-.1 2.1-.9 4.1-2.1 5.7-2.9 3.8-6.8 5.2-11.5 4.4-3-.5-5.4-2.2-7.2-4.6-2.4-3.2-3-6.8-2.4-10.7.2-1.6.8-3.1 1.5-4.6 1.2-2.5 2.9-4.7 5.1-6.5 2-1.6 4.2-2.8 6.5-3.6 2.1-.7 4.2-1.1 6.3-1.1.4 0 .7 0 1.1.1l-.1-.1C28.3 1.1 26.5.6 24.5.3c-2.7-.4-5.4-.3-8.1.3-4.7 1.1-8.6 3.6-11.6 7.3C2.3 11 .7 14.5.2 18.5c-.4 2.8-.2 5.7.5 8.4.9 3.1 2.3 5.9 4.4 8.3 3.1 3.6 6.9 5.9 11.5 6.9 2.7.6 5.5.7 8.2.2 3.1-.5 6-1.7 8.5-3.5 2.9-2 5.2-4.6 6.8-7.7 1.2-2.4 2-4.9 2.3-7.6.3-2.4.1-4.8-.4-7.1-.6-3.2-2.2-6.3-4.4-8.9zM80.4 18.8V5.6h-2.5v3.8c-.2-.1-.4-.1-.6-.2-2.5-.5-4.6.7-5.3 3-.5 1.4-.4 2.8 0 4.1.4 1.1 1 2.1 2.1 2.6 1 .5 2.1.6 3.2.1.3-.1.5-.4.8-.6 0 .1.1.3.1.4 0 .2.1.3.3.3h1.8c.1 0 .1 0 .1-.3zm-2.5-4.9v2.2c0 .2-.1.3-.2.4-.8.9-2.4 1-3.2-.4-.6-1.2-.7-2.4-.1-3.6.5-1 1.5-1.5 2.7-1.2.7.2.7.2.7.9.1.5.1 1.1.1 1.7zM124.4 9.1c-2.2-.4-4.3.9-5 3-.4 1.2-.4 2.4-.2 3.6.4 1.6 1.2 2.8 2.9 3.4 1.2.4 2.3.3 3.5.1.6-.1 1.2-.3 1.8-.7.1-.1.2-.2.1-.3-.1-.2-.1-.4-.2-.6-.1-.4-.3-.8-.4-1.2-.1 0-.1.1-.1.1-1.1.7-2.3 1-3.6.6-.5-.1-.9-.4-1.2-.8-.3-.4-.4-.9-.4-1.4H127.7c.2 0 .3 0 .3-.3-.1-.7-.1-1.4-.2-2-.4-1.9-1.5-3.2-3.4-3.5zm-2.7 3.9c.1-.6.3-1.1.8-1.5.6-.4 1.2-.6 1.9-.2.7.4.9 1 1 1.7h-3.7zM117.4 11.6c-.3-1.2-.9-2-2.1-2.4-1.2-.3-2.4-.2-3.5.5-.2.1-.4.2-.6.4 0-.2-.1-.4-.1-.5 0-.2-.1-.2-.2-.2h-2.1v9.4c0 .2.1.3.3.3h2.2V12.3c0-.1 0-.3.1-.3.3-.2.6-.5 1-.7 1.1-.5 2.2-.1 2.5 1.1.1.3.1.7.1 1V19h2.5v-6c0-.4 0-1-.1-1.4zM97.9 15.6c.5 2.2 2.2 3.8 4.6 3.8 1.8 0 3.2-.8 4-2.4.7-1.3.8-2.7.5-4.1-.5-2.3-2.2-3.8-4.5-3.8-2 0-3.5.9-4.3 2.8-.5 1.1-.6 2.4-.3 3.7zm2.8-3.3c.4-.7.9-1.1 1.8-1.1.8 0 1.5.4 1.8 1.1.6 1.2.6 2.5 0 3.7-.4.8-1 1.2-1.9 1.1-.9 0-1.4-.5-1.8-1.3-.2-.5-.3-1.1-.3-1.7 0-.6.1-1.3.4-1.8zM87.4 18.5l.1-.1c0 .2.1.4.1.7h2.1c.2 0 .2-.1.2-.3v-6c0-.3 0-.6-.1-1-.2-1.4-1.1-2.4-2.3-2.7-1-.2-2-.2-3 .1-.6.2-1.3.4-1.8.8-.1 0-.2.2-.1.2.2.6.5 1.1.8 1.7l.2-.1c.7-.5 1.6-.8 2.5-.8.8.1 1.3.5 1.3 1.3 0 .2 0 .3-.2.3h-.5c-1.1.1-2.3.3-3.3.8-1.5.8-1.9 2.3-1.4 3.7.9 2.5 4 2.7 5.4 1.4zM85 15c.4-.3.9-.3 1.4-.4.3 0 .6-.1.9-.1.1 0 .2 0 .2.2v1.5c0 .2-.1.4-.3.5-.6.4-1.2.6-1.9.5-.6-.1-.9-.4-1-.8 0-.6.3-1.1.7-1.4zM92.6 19.1h2.3c.2 0 .3-.1.3-.3V11.4H97.1c.2 0 .3-.1.3-.3V9.3h-2.1v-.5c0-.8.5-1.3 1.4-1.3.4 0 .8.1 1.3.2l.3-1.8c0-.2 0-.2-.2-.3-.7-.3-1.5-.4-2.3-.3-1.4.1-2.3.7-2.7 2-.2.6-.2 1.2-.2 1.8 0 .2 0 .3-.2.3h-.9c-.2 0-.2 0-.2.2v1.6c0 .2.1.2.2.2h1.1l-.3 7.7zM58 9.4c-.6 1.5-1.2 3.1-1.8 4.6l-.7 1.7c-.1-.1-.1-.2-.1-.2-.7-1.8-1.5-3.7-2.2-5.5-.3-.7-.3-.7-1-.7h-2c.2.4.3.7.4 1l3.6 8.7c.1.1.1.2.3.2h1.8c.2 0 .3-.1.3-.2 1.2-3 2.4-6 3.7-9 .1-.2.1-.4.2-.6H58c.1-.1 0 0 0 0zM54.8 27.6c-.5.1-.9.2-1.4.4v-4H52v12.6c0 .1 0 .2.2.3.9.3 1.8.6 2.7.6 2.3 0 3.9-1 4.5-3.2.4-1.3.3-2.5 0-3.8-.7-2.1-2.5-3.2-4.6-2.9zm2.8 7.2c-.6 1.1-1.7 1.5-3 1.4-.3 0-.7-.2-1-.2-.2 0-.3-.1-.3-.4v-6c0-.2.1-.3.3-.4 1.6-.9 3.5-.4 4.2 1.5.6 1.4.6 2.8-.2 4.1zM100.1 30.3c-.2-1-.8-1.8-1.7-2.3-1.6-.9-4.5-.7-5.5 2-.6 1.4-.6 2.9-.2 4.4.4 1.4 1.3 2.5 2.7 2.9 1 .3 2 .3 3 0 .5-.1 1-.3 1.5-.7.1-.1.1-.2.1-.3-.1-.4-.2-.7-.3-1.1h-.1l-.1.1c-.7.6-1.6.9-2.5.9-1.4 0-2.4-.7-2.8-2.1-.1-.5-.2-.9-.2-1.4 0-.3 0-.3.3-.3h6c.2 0 .3 0 .2-.2-.2-.6-.3-1.3-.4-1.9zm-1.4.9H94c.2-1.6 1.2-2.5 2.5-2.4 1.5 0 2.2 1.4 2.2 2.4zM67.6 28V35.1c0 .1-.1.1-.1.2-.8.6-1.7 1-2.7.9-.8-.1-1.4-.6-1.6-1.4-.2-.3-.2-.6-.2-.9V27.8h-1.4v5.7c0 .5 0 .9.1 1.4.1 1 .5 1.8 1.5 2.2 1.2.5 2.5.5 3.7-.1.3-.1.6-.3.9-.5 0 .2.1.4.1.7h1.3v-9.4h-1.5v.2zM90.3 29.8c-.2-1-.8-1.8-1.9-2.1-1.1-.3-2.2-.2-3.3.3-.3.1-.5.3-.8.5 0-.2 0-.4-.1-.5 0-.1-.1-.2-.1-.2h-1.2v9.4h1.4v-6.7c0-.5.1-.8.6-1 .8-.4 1.5-.7 2.4-.6.6.1 1.1.4 1.4 1 .2.5.3 1 .3 1.6v5.8h1.4v-6c.1-.5 0-1-.1-1.5zM114.4 32.4c-.4-.2-.8-.5-1.3-.6-.6-.3-1.3-.5-1.8-1-.3-.3-.5-.6-.4-1.1.1-.5.4-.8.9-.9.5-.1 1-.1 1.5 0 .6.1 1 .5 1.5.9.2-.4.4-.7.6-1 0 0 0-.2-.1-.2l-.9-.6c-1.2-.5-2.4-.6-3.6 0-1.5.7-1.8 2.9-.5 4 .5.4 1.1.7 1.7.9.7.3 1.4.6 2 1.1.7.6.4 1.8-.4 2.1-.7.2-1.5.2-2.2 0-.5-.2-1-.5-1.5-.8-.1.3-.2.6-.4.9-.1.2 0 .3.1.4 1.1.8 2.4 1.1 3.7.8 1.4-.2 2.2-1 2.4-2.3 0-1-.3-2-1.3-2.6zM106.9 32.5c-.4-.3-.9-.5-1.4-.7-.6-.3-1.2-.5-1.8-.9-.5-.4-.6-.9-.3-1.5.1-.1.2-.3.3-.4.1-.1.3-.2.5-.2.7-.1 1.3-.1 2 .2.4.2.7.4 1 .6l.6-1.1c-.1-.1-.2-.2-.3-.2-.8-.6-1.8-.9-2.8-.9-.7 0-1.3.1-1.9.6-1.2.9-1.4 2.8-.2 3.8.4.4 1 .6 1.5.9.7.3 1.5.6 2.1 1.2.7.7.5 1.8-.5 2.1-.4.1-.9.2-1.3.2s-.9-.2-1.2-.4c-.4-.2-.7-.4-1.1-.7-.1.3-.2.6-.4.9-.2.4-.2.4.2.6 1.1.7 2.2.9 3.5.8 1.5-.2 2.4-1.1 2.6-2.4.1-1.1-.1-2-1.1-2.5zM76.2 32.5c-.5-.3-1.1-.6-1.7-.8-.6-.2-1.1-.5-1.6-.9-.1-.1-.2-.3-.3-.5-.1-.2-.1-.4 0-.5 0-.2.1-.3.2-.5s.3-.2.4-.3c.7-.3 1.4-.2 2.1.1.4.2.8.4 1.2.7.1-.3.3-.5.5-.8.1-.2.1-.3-.1-.4-.8-.7-1.8-.9-2.9-.9-.6 0-1.2.1-1.8.5-1.5.9-1.6 3.4 0 4.2.5.2.9.5 1.4.7.7.3 1.3.6 1.9 1.1.7.6.4 1.9-.5 2.1-.8.2-1.6.2-2.4-.2-.4-.2-.8-.5-1.3-.7-.2.4-.3.8-.5 1.2l.2.2c.9.7 2 1 3.2.9.7 0 1.4-.2 2-.6.8-.6 1-1.4 1-2.3.1-1.2-.3-1.9-1-2.3zM80.5 27.9c0-.1-.1-.1-.1-.1h-1.3v9.4h1.1c.2 0 .3 0 .3-.3v-9zM79.8 24.2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.5-1-1-1zM65.6 9c-2 0-3.5.9-4.3 2.8-.5 1.2-.6 2.5-.3 3.8.5 2.2 2.2 3.8 4.6 3.8 1.8 0 3.2-.8 4-2.4.7-1.3.8-2.7.5-4.1-.5-2.4-2.2-3.9-4.5-3.9zm1.7 7c-.4.8-1 1.2-1.9 1.1-.9 0-1.4-.5-1.8-1.3-.2-.5-.3-1.1-.3-1.7 0-.6.1-1.2.4-1.8.4-.7.9-1.1 1.8-1.1.8 0 1.5.4 1.8 1.1.7 1.2.6 2.5 0 3.7z" />
</svg>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-244594ad CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image CID-image-b4fec0a0 IID-image-b835f23a">
<style>.IID-image-b835f23a{max-width:37px}.IID-image-b835f23a:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg-1836166229--1916068165-title" class="image__img" id="svg-1836166229--1916068165" role="img" version="1.1" viewBox="0 0 50 50" x="0" xml:space="preserve" y="0"><title id="svg-1836166229--1916068165-title">BT TV logo</title><style>.st2343523423424234{fill:#7509b7}</style><defs><path d="M0 0h50v50H0z" id="svg-1836166229--1916068165-SVGID_1_32423424344354635" /></defs><clipPath id="svg-1836166229--1916068165-SVGID_00000052091668762334119680000003272478257771178120_"><use overflow="visible" xlink:href="#svg-1836166229--1916068165-SVGID_1_32423424344354635" /></clipPath><g clip-path="url(#svg-1836166229--1916068165-SVGID_00000052091668762334119680000003272478257771178120_)"><defs><path d="M0 0h50v50H0z" id="svg-1836166229--1916068165-SVGID_00000047052810190126686280000016485335307401996443_" /></defs><clipPath id="svg-1836166229--1916068165-SVGID_00000105397018437964942440000006150964341141051012_"><use overflow="visible" xlink:href="#svg-1836166229--1916068165-SVGID_00000047052810190126686280000016485335307401996443_" /></clipPath><g clip-path="url(#svg-1836166229--1916068165-SVGID_00000105397018437964942440000006150964341141051012_)"><path class="st2343523423424234" d="M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 3.1c12.1 0 21.9 9.8 21.9 21.9S37.1 47 25 47 3 37.1 3 25 12.9 3.1 25 3.1z" /><path class="st2343523423424234" d="M12.5 16.5v17h6.9c3.1 0 5.6-2 5.6-5.1 0-2.7-2.1-3.8-2.1-3.8s1.6-1.1 1.6-3.4c0-2.7-2.1-4.8-5.3-4.8l-6.7.1zm3.9 3.3h2c1.5 0 2.1.7 2.1 1.7s-.7 1.6-2 1.6h-2.1v-3.3zm0 6.7h2c1.5 0 2.1.7 2.1 1.7s-.7 1.6-2 1.6h-2.1v-3.3zM30.2 33.4v-13h-3.8v-3.9h11.9v3.9h-4v13.1l-4.1-.1z" /></g></g></svg>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-e67f193 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image CID-image-b4fec0a0 IID-image-770c3b14">
<style>.IID-image-770c3b14{max-width:66px}.IID-image-770c3b14:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--943710722-1265528432-title" class="image__img" id="svg--943710722-1265528432" role="img" version="1.1" viewBox="0 0 85.4 42" x="0" xml:space="preserve" y="0"><title id="svg--943710722-1265528432-title">T-mobile logo</title><style>.st232432454353546546{fill-rule:evenodd;clip-rule:evenodd;fill:#ec008c}</style><defs><path d="M0 0h85.4v42H0z" id="svg--943710722-1265528432-SVGID_1_3243242343424" /></defs><clipPath id="svg--943710722-1265528432-SVGID_00000061455218387060881380000003334912736557454993_"><use overflow="visible" xlink:href="#svg--943710722-1265528432-SVGID_1_3243242343424" /></clipPath><g clip-path="url(#svg--943710722-1265528432-SVGID_00000061455218387060881380000003334912736557454993_)"><defs><path d="M0 0h85.4v42H0z" id="svg--943710722-1265528432-SVGID_00000137093905659949040140000016905592737813939134_" /></defs><clipPath id="svg--943710722-1265528432-SVGID_00000086679678454397382720000011123966152873124508_"><use overflow="visible" xlink:href="#svg--943710722-1265528432-SVGID_00000137093905659949040140000016905592737813939134_" /></clipPath><g clip-path="url(#svg--943710722-1265528432-SVGID_00000086679678454397382720000011123966152873124508_)"><path class="st232432454353546546" d="M0 14.8l2.2.4c.1-3.4 1.2-6.6 3.1-9.4.2-.3.5-.5.8-.8.2-.3.5-.5.8-.7 2-1.5 4.5-2.3 7-2.3v22.2c0 2.3 0 9.2-.1 11-.1 1.9-.6 3-1.9 3.6-1.6.6-3.2.8-4.9.7v2.4h20.7v-2.4c-1.7.1-3.3-.1-4.9-.7-1.3-.7-1.8-1.9-2-3.6s-.1-8.7-.1-11V1.9c1.8 0 3.5.4 5.1 1.1 1.4.6 2.5 1.6 3.5 2.7 1.9 2.8 3 6 3.1 9.4l2.2-.4L34 .1c-.4-.1-15.9 0-16.7 0H.4L0 14.8z" /><path class="st232432454353546546" d="M0 27.8h8.5v-8.5H0v8.5zM25.9 27.8h8.5v-8.5h-8.5v8.5zM51.4 27.8h8.5v-8.5h-8.5v8.5zM76.9 27.8h8.5v-8.5h-8.5v8.5z" /></g></g></svg>
</div>
</div>
</div>
</div>
<div class="grid-item CID-grid-item-1e7a19ff IID-grid-item-80700ada">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image CID-image-b4fec0a0 IID-image-df37ad2d">
<style>.IID-image-df37ad2d{max-width:113px}.IID-image-df37ad2d:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg-1156766242-1837363602-title" class="image__img" id="svg-1156766242-1837363602" role="img" version="1.1" viewBox="0 0 128 24.4" x="0" xml:space="preserve" y="0"><title id="svg-1156766242-1837363602-title">Telus logo</title><style>.st2232423454354365667787{fill:#49166d}</style><defs><path d="M0 0h128v24.4H0z" id="svg-1156766242-1837363602-SVGID_1_3243243242342" /></defs><clipPath id="svg-1156766242-1837363602-SVGID_00000160869138395319762940000002401428409455357361_"><use overflow="visible" xlink:href="#svg-1156766242-1837363602-SVGID_1_3243243242342" /></clipPath><g clip-path="url(#svg-1156766242-1837363602-SVGID_00000160869138395319762940000002401428409455357361_)"><defs><path d="M0 0h128v24.4H0z" id="svg-1156766242-1837363602-SVGID_00000049196632371546569810000011247460481651852183_" /></defs><clipPath id="svg-1156766242-1837363602-SVGID_00000051346392683382566990000011387328765177576107_"><use overflow="visible" xlink:href="#svg-1156766242-1837363602-SVGID_00000049196632371546569810000011247460481651852183_" /></clipPath><g clip-path="url(#svg-1156766242-1837363602-SVGID_00000051346392683382566990000011387328765177576107_)"><path class="st2232423454354365667787" d="M76.2 6.8V4.1h-9.4v13.5h9.4v-2.7h-5.6v-3h4.6V9.3h-4.6V6.8h5.6zM92.7 15h-5.9V4.1H83v13.5h9.7V15zM123.7 9.3c-2.6-.6-3.5-.7-3.5-1.7s1.3-1.3 2-1.3c1.4 0 2.8.4 4 1l1-2.5c-1.6-.8-3.4-1.2-5.2-1.1-3.6 0-6 1.4-6.1 4.3-.1 2.6 2 3.5 3.9 3.9s3.7.7 3.8 1.8c0 1-.9 1.5-2.6 1.5-1.6-.1-3.2-.4-4.6-1.1l-.9 2.7c1.7.7 3.5 1.1 5.4 1.1 2.5 0 4.4-.4 5.8-1.7.4-.4.7-.8.9-1.3.2-.5.3-1.1.3-1.6.1-2.1-1.2-3.3-4.2-4zM61.3 6.8V4.1H49.5v2.7h4v10.9h3.8V6.8h4zM105.8 4.1v9.7c-.1.8-.9 1.3-2.2 1.3-.9 0-1.6-.3-1.9-.8-.2-.4-.3-.9-.2-1.4V4.1h-4v9.3c0 1.3.2 1.9.8 2.6 1 1.2 2.8 1.8 5.4 1.8h.1c3.5 0 5.2-1.4 5.8-2.6.3-.6.3-.9.3-2.1v-9h-4.1M51.3.4L29 4.9v1.6h.1C43.9 2.9 51.4.7 51.4.7h.1V.6l-.2-.2c.1 0 .1.1 0 0" /><path d="M33.2 0c-1.1.1-3.1 1.7-4.2 2.6-4.4 3.8-7.7 7.3-10 11-5.6 3-11.5 5.5-17.6 7.5h-.2L0 24.4l.7-.3c5.7-2.2 11.3-4.7 16.7-7.5-.3.8-.5 1.6-.5 2.5 0 .5.1 1.1.3 1.6.2.5.5.9.9 1.3s.8.6 1.3.8c1.5.6 3.7.6 6.1-.1 6.1-1.9 13.4-7.6 15-8.7h.1v-.2h-.1c-1.7 1-10 5.9-15.3 7.4-2.7.7-4.8.3-5.6-.8-.6-.4-.7-.9-.7-1.4 0-1.1.5-2.5 1.5-4 .9-.5 1.8-1 2.5-1.5 5.3-3 11.3-8.7 11.6-12.2v-.1c0-.3-.1-.6-.4-.8-.1-.1-.3-.2-.4-.3-.2-.1-.4-.1-.5-.1zm-.6 1.7c.3-.2.4-.1.3.2-.2.4-.9 2.8-6.5 7.4-1.5 1.2-3 2.2-4.6 3.1 3.4-4.8 8.5-9.2 10.8-10.7z" fill="#6c0" /><path class="st2232423454354365667787" d="M28.9 4.9L5.4 10l-.9 2.4 24.5-6 .7-.4V4.9h-.8z" /></g></g></svg>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-84284ba5 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image IID-image-33c64e42 CID-image-b4fec0a0">
<style>.IID-image-33c64e42{max-width:100px}.IID-image-33c64e42:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-1545738932--247106564-title" class="image__img" fill="none" height="31" id="svg-1545738932--247106564" role="img" viewBox="0 0 101 31" width="101">
<title id="svg-1545738932--247106564-title">Spectrum Business logo</title>
<g clip-path="url(#svg-1545738932--247106564-clip0_1798_252226)">
<g clip-path="url(#svg-1545738932--247106564-clip1_1798_252226)">
<path d="M94.2733 7.07629V17.1818C94.3893 17.1362 94.5061 17.1165 94.5903 17.0532C95.2666 16.5448 95.9351 16.0266 96.6086 15.515C98.0678 14.4065 99.5286 13.2996 101 12.1841C98.7603 10.4835 96.5257 8.78676 94.2729 7.07629H94.2733Z" fill="#009ADB" />
<path d="M93.3672 7.21111C93.3672 7.1191 93.3404 7.01922 93.2996 6.93625C93.1517 6.63505 92.924 6.40306 92.6712 6.18129C92.2277 5.79279 91.72 5.51637 91.1833 5.30128C90.3426 4.96391 89.4547 4.79168 88.5531 4.74882C87.7761 4.71186 86.9885 4.68394 86.2281 4.90296C85.8911 5.00008 85.5395 5.01896 85.2104 5.18528C84.8542 5.36498 84.5058 5.54743 84.1952 5.79515C84.0992 5.87144 84.0489 5.84627 83.9643 5.78532C83.7618 5.63905 83.5538 5.49828 83.3383 5.37245C83.1386 5.25567 82.9302 5.15029 82.7175 5.05946C82.559 4.99182 82.3891 4.94582 82.2204 4.90846C82.0934 4.88015 81.959 4.88684 81.8292 4.86718C81.4899 4.81606 81.1525 4.72405 80.812 4.71304C80.4073 4.70006 80.0012 4.76376 79.595 4.77713C78.9568 4.79797 78.3465 4.9466 77.7563 5.17427C76.7721 5.55333 75.9928 6.18129 75.5119 7.13404C75.1025 7.94563 74.9106 8.81148 74.9126 9.72373C74.9181 12.1809 74.9146 14.6385 74.9142 17.0957V17.2797H78.1452V17.0559C78.1452 14.7034 78.1432 12.3512 78.1472 9.99858C78.148 9.61717 78.12 9.22474 78.1983 8.85709C78.3347 8.21458 78.702 7.71245 79.3358 7.45962C79.7998 7.27441 80.2949 7.30587 80.7738 7.34912C81.3141 7.39788 81.7679 7.66133 82.0844 8.11628C82.3557 8.50595 82.4277 8.95972 82.4284 9.41938C82.4347 11.9686 82.4316 14.5174 82.4316 17.0666V17.2757H85.6233C85.6233 17.1892 85.6233 17.1173 85.6233 17.0457C85.6233 14.5622 85.6233 12.0787 85.6233 9.59515C85.6233 9.24991 85.6504 8.91057 85.766 8.57948C85.9964 7.92007 86.4597 7.50484 87.132 7.38923C87.541 7.31885 87.9759 7.33733 88.3915 7.38333C89.0765 7.45922 89.5951 7.81036 89.8177 8.48865C89.9109 8.77334 89.9683 9.08201 89.973 9.38045C89.9907 10.5137 89.9809 11.6477 89.9797 12.7813C89.9789 13.7707 89.9757 14.76 89.9738 15.7493L89.9463 15.9085C89.9522 15.9231 89.9592 15.9373 89.9659 15.9518C89.9722 15.9663 89.9781 15.9809 89.9801 15.9958C90.0689 16.6348 90.6092 17.2246 91.2592 17.2718C91.9544 17.3221 92.6563 17.2832 93.3699 17.2832V17.1385C93.3699 13.8292 93.3703 10.5204 93.3672 7.21111Z" fill="#003157" />
<path d="M11.4792 8.87283C11.1776 8.71279 10.8567 8.57595 10.53 8.47922C10.2126 8.38525 9.9256 8.20398 9.58075 8.18432C9.31573 8.16937 9.09592 7.97749 8.81674 7.95901C8.65553 7.94839 8.5006 7.77852 8.34371 7.78049C8.03818 7.78403 7.77552 7.63775 7.48415 7.60276C7.28636 7.57877 7.09526 7.50131 6.90102 7.45019C6.25812 7.28072 5.6046 7.13837 5.0136 6.81869C4.79183 6.69876 4.59877 6.52732 4.38486 6.39206C4.17842 6.26112 4.32037 5.92335 4.04434 5.83763C4.03018 5.83331 4.0349 5.77786 4.02586 5.74759C3.93896 5.46054 4.03608 5.19198 4.10922 4.92184C4.30936 4.17985 5.00653 3.77209 5.68167 3.68873C6.13779 3.6325 6.60336 3.64194 7.06499 3.64391C7.31428 3.64509 7.56751 3.6734 7.81248 3.72176C8.44241 3.84602 8.9811 4.13857 9.381 4.65249C9.6708 5.02565 9.82454 5.45071 9.81157 5.93554H12.9289C12.9101 5.76921 12.89 5.61743 12.8759 5.46487C12.8098 4.75473 12.6065 4.09138 12.2566 3.46499C11.7635 2.58263 11.0726 1.93344 10.1478 1.52135C9.19658 1.09786 8.18878 0.97872 7.16722 0.929962C6.88332 0.916592 6.59667 0.944904 6.31199 0.966923C5.89558 0.99956 5.4772 1.02473 5.06472 1.08725C4.28695 1.20521 3.54457 1.43327 2.8592 1.83553C2.42077 2.09269 2.04997 2.42967 1.73462 2.81423C1.07913 3.61363 0.848711 4.57346 0.807423 5.58322C0.79602 5.86358 0.847924 6.14748 0.880561 6.42863C0.952912 7.04597 1.14401 7.62399 1.46802 8.1564C1.81404 8.72537 2.2686 9.17403 2.87611 9.46264C3.88155 9.94079 4.94754 10.2223 6.03241 10.4394C6.86484 10.6061 7.68823 10.8035 8.48566 11.0972C8.70507 11.1782 8.91111 11.2942 9.13052 11.3756C9.84578 11.6406 10.2748 12.2411 10.2783 12.9941C10.2818 13.7172 9.93425 14.2209 9.29646 14.5237C8.76209 14.7773 8.1821 14.8642 7.59779 14.8713C7.20536 14.876 6.79367 14.9566 6.42602 14.7285C6.13819 14.828 5.88181 14.6967 5.62662 14.6047C5.11584 14.421 4.65421 14.1568 4.32863 13.7034C4.02664 13.2831 3.89806 12.7975 3.81549 12.3005H0.584473C0.59273 12.3417 0.603347 12.3732 0.604133 12.4047C0.619075 12.9614 0.724849 13.4978 0.905726 14.027C1.15345 14.7529 1.51678 15.4009 2.07081 15.9325C2.28157 16.135 2.50256 16.3375 2.75028 16.4885C3.13838 16.7245 3.54496 16.936 3.9598 17.1216C4.34475 17.2938 4.74976 17.4138 5.17836 17.4488C5.59988 17.483 6.01786 17.5675 6.43939 17.5923C6.87703 17.6178 7.31703 17.5962 7.75625 17.5994C7.85652 17.6002 7.95954 17.6371 8.05667 17.6245C8.21041 17.6041 8.35944 17.5479 8.51279 17.5211C8.8769 17.4582 9.25045 17.4326 9.60552 17.3379C9.99598 17.2337 10.3699 17.0689 10.7513 16.9305C11.3946 16.6973 11.9113 16.2837 12.356 15.778C13.1012 14.9306 13.437 13.9217 13.4558 12.8081C13.4621 12.4337 13.4971 12.0594 13.4342 11.6788C13.2274 10.4256 12.6069 9.47169 11.4792 8.87283Z" fill="#003157" />
<path d="M25.6531 9.62969C25.6464 9.5196 25.6618 9.40596 25.639 9.2994C25.6036 9.13228 25.5407 8.97107 25.4958 8.80592C25.2056 7.73009 24.7637 6.74235 23.8797 6.01058C23.4028 5.6158 22.879 5.29808 22.2892 5.10541C21.8877 4.97447 21.4922 4.816 21.0565 4.81325C20.8237 4.81168 20.6059 4.68506 20.3577 4.73382C20.1938 4.76607 20.0145 4.76135 19.8489 4.73382C19.6944 4.70787 19.5587 4.75781 19.4164 4.76764C18.9512 4.80028 18.4908 4.84274 18.0433 4.97879C17.4873 5.14787 16.7268 5.36886 16.1736 5.79825C15.6962 6.16865 15.2889 6.58821 14.9825 7.10803C14.9409 7.17842 14.8677 7.22953 14.8174 7.29559C14.78 7.34474 14.7454 7.40097 14.7281 7.45956C14.7014 7.55157 14.7018 7.65145 14.6719 7.74189C14.5811 8.01556 14.4832 8.28649 14.3845 8.55741C14.3459 8.66318 14.2791 8.76227 14.2594 8.8708C14.239 8.98286 14.2779 9.10554 14.2594 9.218C14.2366 9.35641 14.1812 9.48893 14.1328 9.6466V21.8672C14.1772 21.8912 14.1883 21.9022 14.1993 21.9022C14.7494 21.9065 15.3003 21.9278 15.8492 21.9042C16.0619 21.8951 16.2888 21.8165 16.4775 21.7123C17.0504 21.395 17.2828 20.8732 17.284 20.2346C17.286 19.0554 17.2872 17.8757 17.2883 16.6965C17.2852 16.6548 17.282 16.6131 17.2777 16.5581C17.3127 16.5856 17.3351 16.6033 17.3579 16.6206C17.7173 16.8137 18.0716 17.017 18.4373 17.197C18.9386 17.4436 19.488 17.5623 20.0337 17.5848C20.8253 17.6166 21.6365 17.698 22.3883 17.3233C22.6918 17.1719 23.0166 17.0504 23.2935 16.8597C23.9513 16.4063 24.4739 15.8149 24.8451 15.1071C25.0747 14.6687 25.2847 14.2134 25.4408 13.745C25.5615 13.3825 25.5941 12.9889 25.6496 12.6067C25.6905 12.3267 25.7227 12.0432 25.7274 11.7609C25.7361 11.2305 25.7719 10.6992 25.694 10.1696C25.6677 9.99145 25.6641 9.80979 25.6531 9.6293V9.62969ZM22.5487 11.1959C22.542 12.031 22.4598 12.8521 22.0662 13.6094C21.7249 14.2672 21.2055 14.7127 20.4651 14.837C19.0389 15.0765 17.9301 14.3286 17.5148 12.9846C17.2958 12.2752 17.2628 11.5509 17.2986 10.816C17.3308 10.1554 17.4425 9.51409 17.7142 8.90776C18.0559 8.14572 18.6351 7.631 19.464 7.54607C20.7596 7.41316 21.7937 7.80755 22.3041 9.37332C22.496 9.96196 22.5621 10.5754 22.5487 11.1959Z" fill="#003157" />
<path d="M37.7263 10.6831C37.7243 10.5821 37.7707 10.4782 37.7585 10.3803C37.7338 10.1763 37.6877 9.97454 37.6445 9.77283C37.5423 9.29704 37.4711 8.81103 37.326 8.34861C36.7838 6.61731 35.6564 5.46677 33.883 4.99492C33.2362 4.82269 32.5736 4.75702 31.9036 4.78022C31.6614 4.78848 31.4251 4.69136 31.1726 4.80853C31.0012 4.88796 30.7826 4.85769 30.5915 4.9029C30.0614 5.02873 29.5475 5.19545 29.076 5.48289C28.1477 6.04912 27.4796 6.83672 27.0683 7.83705C26.902 8.24127 26.7773 8.66279 26.6472 9.08077C26.5764 9.30844 26.5115 9.54201 26.484 9.77754C26.4561 10.0162 26.4694 10.2612 26.4793 10.503C26.5025 11.0665 26.4226 11.6323 26.515 12.1946C26.5221 12.2371 26.5044 12.2835 26.4993 12.3279C26.4954 12.3637 26.484 12.4014 26.4918 12.4349C26.5245 12.5725 26.5721 12.707 26.5984 12.8458C26.6464 13.1002 26.666 13.3613 26.7301 13.611C26.7718 13.7726 26.8815 13.9153 26.944 14.073C27.2618 14.8747 27.6656 15.6097 28.3156 16.2081C28.7756 16.6316 29.3045 16.9131 29.8597 17.1613C30.131 17.2824 30.4086 17.3905 30.7212 17.4035C30.9969 17.4149 31.2556 17.5387 31.5481 17.5269C32.2131 17.5002 32.8752 17.5085 33.5346 17.3701C34.1414 17.2427 34.7048 17.035 35.2384 16.7244C35.713 16.4484 36.1066 16.0799 36.4711 15.6804C37.0307 15.0674 37.3504 14.327 37.5706 13.5068C36.6697 13.5068 35.7854 13.5052 34.9011 13.5111C34.8558 13.5111 34.7976 13.5681 34.7682 13.6133C34.6588 13.7816 34.5829 13.9774 34.4512 14.1237C34.0997 14.5146 33.6967 14.8201 33.1198 14.7285C33.1017 14.7257 33.0691 14.7277 33.0652 14.7367C32.9893 14.9172 32.83 14.839 32.7093 14.8409C32.2461 14.8484 31.7896 14.8425 31.3327 14.7013C30.1644 14.3404 29.7649 12.8985 29.8003 11.9811H30.0303C32.5335 11.9811 35.0371 11.9791 37.5403 11.9854C37.7251 11.9858 37.7778 11.9347 37.7656 11.7554C37.7416 11.3984 37.7326 11.0405 37.7255 10.6827L37.7263 10.6831ZM29.7516 9.91202C29.7846 8.60263 30.5545 7.50793 31.8891 7.45091C32.578 7.42142 33.2342 7.50085 33.7387 8.03994C34.2275 8.56173 34.3891 9.20739 34.4265 9.91242H29.7516V9.91202Z" fill="#003157" />
<path d="M73.4305 15.1539C73.8496 14.3584 73.9951 13.4953 73.9987 12.6102C74.0085 10.1593 74.0022 7.70846 74.0022 5.25757V5.05467C73.3365 5.05467 72.6893 5.05467 72.042 5.05546C72.0181 5.05546 71.9941 5.07119 71.9697 5.07591C71.2698 5.21117 70.8384 5.93271 70.8345 6.59134C70.8239 8.49173 70.8325 10.3921 70.829 12.2925C70.8286 12.6047 70.829 12.9201 70.7893 13.2291C70.7012 13.9114 70.3705 14.4422 69.7421 14.7603C69.3159 14.9762 68.8539 14.986 68.3926 14.9612C67.2995 14.9019 66.5784 14.1599 66.5607 13.0864C66.5182 10.4723 66.5469 7.85709 66.5469 5.24263V5.0531H63.321C63.321 5.1054 63.321 5.13725 63.321 5.16949C63.321 7.62706 63.3277 10.0842 63.3155 12.5418C63.3131 13.0392 63.3686 13.5284 63.4948 13.9983C63.7351 14.8928 64.1255 15.7095 64.8569 16.3355C65.2422 16.6654 65.6563 16.9249 66.1297 17.0858C66.497 17.2104 66.8733 17.3122 67.2515 17.3984C67.5386 17.4636 67.8335 17.5132 68.1268 17.5242C68.456 17.5364 68.787 17.4825 69.1173 17.4841C69.5955 17.4864 70.0642 17.4471 70.5172 17.2847C70.9363 17.1345 71.3724 17.0189 71.7699 16.8251C72.5092 16.4645 73.0471 15.8798 73.4293 15.1543L73.4305 15.1539Z" fill="#003157" />
<path d="M48.6193 15.4657C49.0664 14.8904 49.3837 14.2471 49.5658 13.5087C48.6056 13.5087 47.6627 13.5122 46.7197 13.5047C46.5798 13.5035 46.5121 13.5476 46.463 13.6734C46.2609 14.1932 45.8936 14.5247 45.3549 14.6954C44.9133 14.8354 44.467 14.8593 44.0148 14.8416C43.3885 14.8173 42.8494 14.5865 42.4428 14.0973C41.8569 13.3923 41.6811 12.5355 41.6269 11.6598C41.5844 10.9701 41.5718 10.2714 41.737 9.58756C41.8789 9.0001 42.0873 8.44606 42.5324 8.01392C43.2013 7.36434 44.0223 7.36513 44.8524 7.52556C45.5397 7.65807 46.0131 8.08942 46.2624 8.74766H49.4758C49.1844 7.62976 48.6205 6.69706 47.748 5.95782C46.8436 5.19145 45.7678 4.86509 44.6098 4.78645C44.1898 4.75814 43.7612 4.77622 43.3432 4.82695C42.8847 4.88278 42.4239 4.96732 41.9815 5.09866C40.9631 5.40025 40.1346 5.99479 39.5472 6.88148C39.0222 7.6738 38.7584 8.57661 38.5956 9.50341C38.5177 9.94656 38.4906 10.4015 38.4768 10.8521C38.4639 11.2803 38.5008 11.7101 38.5111 12.1395C38.524 12.688 38.6735 13.211 38.8311 13.7277C39.0812 14.5475 39.4752 15.2919 40.0497 15.9399C40.365 16.2957 40.7469 16.5643 41.142 16.8046C41.8628 17.2426 42.6681 17.4648 43.5037 17.5092C44.0577 17.5387 44.6196 17.4915 45.1728 17.4329C45.5637 17.3916 45.9604 17.3114 46.3289 17.1781C46.7001 17.0436 47.0516 16.8415 47.3906 16.6343C47.8801 16.3347 48.2694 15.9155 48.6189 15.4661L48.6193 15.4657Z" fill="#003157" />
<path d="M53.4945 5.05438C53.4886 4.51961 53.4886 3.98484 53.4744 3.45047C53.4669 3.17365 53.4646 2.89093 53.4072 2.62236C53.2613 1.93818 52.8665 1.54339 52.1532 1.48087C51.7258 1.44352 51.2937 1.4561 50.8635 1.45335C50.7699 1.45256 50.6767 1.45649 50.5831 1.46121C50.4895 1.46593 50.3963 1.47183 50.3028 1.47576C50.3016 1.48913 50.3004 1.5025 50.2988 1.51587C50.3008 1.59451 50.3047 1.67276 50.3047 1.7514C50.3055 6.27844 50.3063 10.8051 50.3055 15.3321C50.3055 15.642 50.3452 15.9471 50.4695 16.2283C50.5843 16.4882 50.7184 16.7402 50.9708 16.9113C51.3314 17.1554 51.714 17.2726 52.1544 17.249C52.5893 17.2254 53.0265 17.2439 53.4799 17.2439V8.31174H55.3504V5.08623H53.5306L53.4941 5.05438H53.4945Z" fill="#003157" />
<path d="M62.4115 8.28023V4.99731C62.0832 5.01698 61.7674 5.04371 61.4513 5.05276C60.8796 5.06927 60.3161 5.13966 59.7624 5.28515C58.639 5.58045 57.6253 6.05781 56.855 6.97084C56.2338 7.70733 55.8681 8.56492 55.664 9.48779C55.5366 10.0638 55.5012 10.6568 55.5063 11.2537C55.5225 13.1737 55.5122 15.0938 55.5122 17.0138V17.2407H58.7283V17.0182C58.7283 14.9802 58.7232 12.9421 58.7334 10.9041C58.735 10.5742 58.7869 10.2412 58.8498 9.91599C58.9312 9.49722 59.1235 9.11659 59.4506 8.84174C59.9429 8.42808 60.5481 8.3054 61.1733 8.28338C61.5834 8.26883 61.9943 8.28063 62.4115 8.28063V8.28023Z" fill="#003157" />
<path d="M36.21 26.1953C35.9858 26.0498 35.7421 25.946 35.4668 25.8367C35.6033 25.745 35.7185 25.6747 35.8262 25.5948C36.9052 24.7974 36.8918 23.1447 35.7991 22.3666C35.2914 22.0052 34.7087 21.8633 34.1 21.8562C32.835 21.8408 31.5701 21.8522 30.3051 21.846C30.1691 21.8452 30.1506 21.8924 30.1506 22.0115C30.1537 24.6716 30.1541 27.3316 30.1494 29.9921C30.1494 30.1325 30.1946 30.1573 30.322 30.1569C31.5756 30.1525 32.8291 30.1541 34.0831 30.1545C34.47 30.1545 34.8522 30.1101 35.2277 30.0177C36.3158 29.7499 37.0625 29.0441 37.0758 27.9148C37.0845 27.1865 36.8344 26.6011 36.2096 26.1961L36.21 26.1953ZM31.6023 23.3142C31.6012 23.1903 31.6318 23.1459 31.7628 23.1495C32.1025 23.1585 32.443 23.1526 32.8555 23.1526C33.2692 23.1699 33.7579 23.1113 34.2408 23.2104C34.7614 23.3174 35.0681 23.617 35.133 24.081C35.1982 24.5461 34.9812 24.9492 34.5585 25.1536C34.2608 25.298 33.9412 25.3396 33.6175 25.3432C32.9998 25.3499 32.3817 25.3416 31.7639 25.3483C31.635 25.3495 31.6012 25.3105 31.6023 25.1847C31.6082 24.5615 31.6082 23.9378 31.6023 23.3146V23.3142ZM35.6013 27.7642C35.5856 28.1562 35.4082 28.4409 35.0669 28.6277C34.7441 28.8046 34.3902 28.8424 34.0324 28.849C33.6639 28.8561 33.2955 28.8506 32.9271 28.8506C32.5417 28.8506 32.156 28.8467 31.7706 28.853C31.6515 28.8549 31.6004 28.8317 31.6019 28.6965C31.609 28.0449 31.6067 27.393 31.6035 26.741C31.6031 26.6408 31.6165 26.5853 31.7396 26.5877C32.6007 26.6042 33.4622 26.561 34.323 26.6136C34.5903 26.6302 34.8491 26.6946 35.0858 26.8248C35.4554 27.0277 35.6186 27.3434 35.6017 27.7642H35.6013Z" fill="#003157" />
<path d="M67.9509 21.8468C67.5825 21.8535 67.2132 21.8578 66.8452 21.8452C66.6848 21.8397 66.6376 21.8771 66.6384 22.0462C66.6454 23.8101 66.6431 25.5737 66.6415 27.3376C66.6415 27.395 66.6612 27.4587 66.6136 27.524C66.1897 26.9778 65.7729 26.4407 65.3565 25.9036C64.3392 24.5906 63.322 23.2777 62.3075 21.9624C62.2415 21.8767 62.1731 21.8445 62.0653 21.8464C61.7083 21.8535 61.3505 21.8531 60.9934 21.8464C60.8829 21.8445 60.8511 21.8755 60.8511 21.9876C60.8542 24.6646 60.8542 27.3415 60.8511 30.0185C60.8511 30.1365 60.8924 30.1573 60.997 30.1558C61.3654 30.1502 61.7346 30.1447 62.1027 30.1577C62.2631 30.1632 62.2965 30.1117 62.2961 29.9607C62.291 28.1457 62.293 26.331 62.293 24.5159V24.3339C62.3056 24.3299 62.3178 24.326 62.3303 24.3217C62.3693 24.3689 62.4094 24.4153 62.4467 24.4636C63.8882 26.3227 65.3301 28.1818 66.7705 30.0417C66.82 30.1058 66.8617 30.1581 66.9592 30.1561C67.2938 30.1491 67.6285 30.1495 67.9631 30.1558C68.0704 30.1577 68.0956 30.12 68.0956 30.0189C68.0932 27.3419 68.0932 24.665 68.0956 21.988C68.0956 21.8751 68.0614 21.8441 67.9505 21.846L67.9509 21.8468Z" fill="#003157" />
<path d="M76.7241 28.833C75.2779 28.8381 73.8317 28.8326 72.3854 28.8409C72.2065 28.8421 72.1715 28.7882 72.1743 28.6227C72.1841 28.0332 72.1782 27.443 72.1782 26.8532C72.1782 26.7004 72.2537 26.6238 72.4047 26.6236C73.6524 26.6236 74.9 26.6204 76.1481 26.6271C76.3073 26.6279 76.3478 26.5815 76.3419 26.4282C76.3301 26.1167 76.329 25.8041 76.3423 25.4927C76.349 25.3374 76.2975 25.3063 76.152 25.3071C74.8875 25.3126 73.6225 25.3083 72.3579 25.3134C72.2191 25.3138 72.1731 25.2808 72.1751 25.1357C72.1829 24.5459 72.1849 23.956 72.1743 23.3666C72.1711 23.1999 72.2187 23.1618 72.3811 23.1625C73.8104 23.1692 75.2398 23.1637 76.6687 23.17C76.8287 23.1708 76.87 23.1236 76.8645 22.9703C76.8535 22.6588 76.8543 22.3462 76.8645 22.0348C76.8692 21.8921 76.839 21.8437 76.6817 21.8445C74.7479 21.8508 72.8137 21.8508 70.8798 21.8445C70.7198 21.8441 70.6974 21.8964 70.6978 22.0368C70.7025 23.358 70.7005 24.6795 70.7005 26.0007C70.7005 27.3164 70.7045 28.6321 70.6958 29.9478C70.6946 30.1275 70.7481 30.1625 70.9137 30.1574C71.3104 30.1452 71.7076 30.1534 72.1047 30.1534C73.6473 30.1534 75.1902 30.1507 76.7328 30.1574C76.894 30.1582 76.929 30.1098 76.9235 29.96C76.9125 29.6486 76.9097 29.336 76.9243 29.0245C76.9318 28.861 76.8736 28.8319 76.7245 28.8322L76.7241 28.833Z" fill="#003157" />
<path d="M45.9439 21.8473C45.564 21.852 45.1834 21.8594 44.804 21.8445C44.6309 21.8378 44.6038 21.8972 44.6046 22.0537C44.6105 23.5569 44.6077 25.0602 44.6085 26.563C44.6085 26.8072 44.5944 27.0506 44.5484 27.2901C44.3946 28.0867 43.9692 28.6439 43.1537 28.8488C42.9217 28.907 42.6842 28.9227 42.4455 28.9188C41.4758 28.9026 40.7967 28.3793 40.5455 27.4501C40.4727 27.1808 40.4421 26.9051 40.4421 26.6267C40.4409 25.0897 40.4397 23.5522 40.4444 22.0152C40.4448 21.8819 40.4094 21.8429 40.275 21.8461C39.8951 21.8551 39.5149 21.8547 39.1346 21.8461C39.0049 21.8433 38.9632 21.874 38.9644 22.0116C38.9715 22.8342 38.9679 23.6564 38.9679 24.479C38.9679 25.188 38.9695 25.8969 38.9671 26.6063C38.966 26.9759 38.9943 27.3428 39.0721 27.7037C39.3423 28.9526 40.0614 29.7988 41.313 30.1369C42.1451 30.3618 42.9865 30.3504 43.8142 30.1063C44.7462 29.8314 45.4024 29.2377 45.772 28.3348C45.9742 27.8414 46.0717 27.3215 46.0752 26.7931C46.0866 25.188 46.0784 23.5825 46.0819 21.9774C46.0819 21.8677 46.0438 21.8461 45.9447 21.8473H45.9439Z" fill="#003157" />
<path d="M52.9625 25.7946C52.4694 25.5579 51.9461 25.4167 51.4184 25.287C50.9843 25.18 50.5502 25.0707 50.1507 24.8615C49.9191 24.74 49.7244 24.5831 49.6529 24.3134C49.5215 23.816 49.7409 23.3787 50.2328 23.1727C50.6516 22.9973 51.0845 23.0087 51.5194 23.0917C52.0975 23.2022 52.6102 23.4613 53.0828 23.803C53.1768 23.871 53.2268 23.8883 53.303 23.7739C53.5036 23.4719 53.7183 23.1794 53.9326 22.8868C53.9904 22.8078 53.9955 22.7645 53.9082 22.6985C52.7431 21.8204 51.4424 21.5338 50.0272 21.8566C48.9183 22.1094 48.2133 22.9525 48.1492 24.0118C48.0867 25.0495 48.5047 25.7423 49.4527 26.1772C49.9596 26.41 50.4959 26.5472 51.0346 26.6797C51.4958 26.793 51.9594 26.9035 52.3692 27.1598C52.7065 27.371 52.8225 27.6824 52.762 28.0642C52.6857 28.5467 52.3424 28.7697 51.9162 28.8892C51.4526 29.019 50.9839 28.9812 50.5199 28.8778C49.8683 28.7323 49.3131 28.4008 48.809 27.9754C48.7327 27.9109 48.6844 27.8873 48.6069 27.9836C48.373 28.2754 48.1307 28.5605 47.8846 28.8424C47.813 28.9246 47.8295 28.9647 47.9058 29.0288C48.879 29.8498 50.002 30.2643 51.3307 30.276C51.8564 30.2658 52.4262 30.1864 52.9515 29.9151C53.8555 29.4491 54.266 28.6946 54.2483 27.6879C54.2322 26.7737 53.7592 26.1768 52.9617 25.7938L52.9625 25.7946Z" fill="#003157" />
<path d="M92.1521 25.8363C91.6338 25.5729 91.0774 25.4234 90.5159 25.285C90.0492 25.1702 89.5805 25.0558 89.1601 24.8084C88.875 24.6405 88.7111 24.3987 88.7284 24.0669C88.7276 23.6135 88.9655 23.2993 89.4224 23.1393C89.8144 23.002 90.2131 23.015 90.6134 23.0897C91.1926 23.1975 91.7058 23.4566 92.178 23.7983C92.2979 23.8852 92.3463 23.8659 92.4218 23.7523C92.6102 23.4696 92.8068 23.1916 93.0124 22.921C93.097 22.8098 93.0879 22.7527 92.9766 22.6698C92.1906 22.0827 91.3102 21.7744 90.3295 21.7355C89.6898 21.7099 89.0736 21.7906 88.5042 22.0961C87.6769 22.54 87.253 23.2388 87.2452 24.1773C87.2373 25.1199 87.675 25.7805 88.5349 26.1694C89.054 26.4041 89.5993 26.5476 90.1491 26.6825C90.5942 26.7918 91.0401 26.9015 91.44 27.1386C91.6747 27.2778 91.8399 27.4697 91.8686 27.7548C91.9197 28.2636 91.7011 28.6328 91.2206 28.8231C90.6933 29.0319 90.153 28.9954 89.6151 28.8762C88.9698 28.7331 88.4181 28.404 87.9207 27.9805C87.822 27.8967 87.7729 27.9073 87.6962 28.0025C87.4721 28.2805 87.2436 28.5554 87.0061 28.8216C86.9184 28.9203 86.9353 28.9674 87.0289 29.0453C87.9191 29.7881 88.9376 30.2041 90.0979 30.265C90.7982 30.302 91.4789 30.2234 92.108 29.8887C92.9424 29.4452 93.3388 28.7327 93.3569 27.8012C93.3746 26.8921 92.9558 26.2452 92.1525 25.8371L92.1521 25.8363Z" fill="#003157" />
<path d="M83.9319 25.8347C83.4192 25.5716 82.8671 25.4258 82.3123 25.2869C81.84 25.169 81.3658 25.0561 80.94 24.806C80.7312 24.6834 80.577 24.5147 80.5287 24.2705C80.4312 23.7813 80.6407 23.3811 81.0992 23.1801C81.4413 23.0303 81.8019 23.0118 82.1668 23.0539C82.8435 23.1318 83.4361 23.4157 83.9803 23.8104C84.0762 23.88 84.1226 23.8749 84.1895 23.7762C84.39 23.4809 84.5953 23.1884 84.8096 22.9029C84.8874 22.7995 84.8705 22.7535 84.7726 22.6796C83.9889 22.0882 83.1085 21.7775 82.1279 21.7351C81.4885 21.7075 80.8704 21.7838 80.3002 22.089C79.4139 22.5632 78.9967 23.313 79.0329 24.3161C79.0667 25.2516 79.5689 25.8461 80.4009 26.2063C80.9337 26.4371 81.494 26.5731 82.0543 26.7123C82.4503 26.8106 82.8427 26.9196 83.2009 27.1236C83.5002 27.2943 83.6716 27.5416 83.6622 27.8967C83.6634 28.3536 83.4038 28.6914 82.917 28.8557C82.4751 29.0052 82.0241 28.989 81.5727 28.9112C80.8539 28.7873 80.2452 28.4381 79.6962 27.9738C79.6168 27.9069 79.5708 27.8892 79.4953 27.9836C79.2649 28.271 79.0262 28.5522 78.784 28.8298C78.7105 28.9139 78.7152 28.9619 78.8005 29.0331C79.1241 29.3028 79.4674 29.5423 79.8461 29.7271C80.96 30.2701 82.1232 30.4455 83.3276 30.1124C84.6106 29.7578 85.2814 28.7224 85.1167 27.406C85.0231 26.6585 84.5807 26.167 83.9315 25.8339L83.9319 25.8347Z" fill="#003157" />
<path d="M58.0575 22.0556C58.0579 21.8791 58.0092 21.8386 57.8413 21.8448C57.4846 21.8582 57.1268 21.8563 56.7698 21.8456C56.6184 21.8409 56.57 21.8775 56.5708 22.0383C56.5779 23.3536 56.5747 24.6689 56.5747 25.9842C56.5747 27.3109 56.5779 28.6376 56.5708 29.9639C56.57 30.1239 56.6172 30.1636 56.7694 30.1569C57.0411 30.1451 57.3136 30.1577 57.5857 30.1518C57.7363 30.1487 57.9294 30.2191 58.0257 30.1192C58.1142 30.028 58.0516 29.838 58.052 29.6918C58.0536 27.1461 58.0509 24.6009 58.0575 22.0552V22.0556Z" fill="#003157" />
</g>
</g>
<defs>
<clipPath id="svg-1545738932--247106564-clip0_1798_252226">
<rect fill="white" height="29.3713" transform="translate(0.584473 0.926392)" width="100.416" />
</clipPath>
<clipPath id="svg-1545738932--247106564-clip1_1798_252226">
<rect fill="white" height="29.3713" transform="translate(0.584473 0.926392)" width="100.416" />
</clipPath>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="reference IID-reference-c93cde8b CID-reference-9dc82c10 aem-GridColumn aem-GridColumn--default--12">
<style>.IID-reference-c93cde8b{margin:0 0 96px}@media (max-width: 1229px){.IID-reference-c93cde8b{margin:0 0 72px}}</style>
<div class="rawhtml IID-rawhtml-39a8c090 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>
	/*Radial gradient for hero */
	.background[data-gradient="radial"]{
		background-image: radial-gradient(ellipse farthest-side at top left, #792900 0%, #120000 70%);
	}
	
	/* gradient for text */
	.custom-text[data-gradient="row"]{
		background-image:linear-gradient(0deg, rgba(255, 255, 255, 0) 40px, rgba(255, 255, 255, 0) 40px, rgba(255, 255, 255, 1) 0), linear-gradient(90deg, #FFEADE 0.63%, #FF9153 70%, #BD4603 135.17%);
		text-shadow: 0px 0px transparent;
	}
	@media (max-width: 1229px){
		.custom-text[data-gradient="row"]{
			background-image:linear-gradient(0deg, rgba(255, 255, 255, 0) 24px, rgba(255, 255, 255, 0) 24px, rgba(255, 255, 255, 1) 0), linear-gradient(90deg, #FFEADE 0.63%, #FF9153 70%, #BD4603 135.17%);
		}
	}
	/* border-radius for button */
	[data-focus="shape"] a{
		border-radius: 28px;
	}
</style>
</div>
</div>
<div class="background background--alignment--center IID-background-e7a8d16e CID-background-79490109">
<div class="background__wrapper ">
<div class="background__content">
<div data-gradient="radial" class="background background--alignment--center IID-background-301c1824 CID-background-79490109">
<style>
	.IID-background-301c1824{background-image:linear-gradient(130deg,#792900,#120000);border-radius:20px;overflow:hidden}@media (min-width: 1488px){.IID-background-301c1824{border-radius:20px}}@media (max-width: 1229px){.IID-background-301c1824{border-radius:14px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid IID-grid-4f1b337e CID-grid-1659f761">
<style>
	.IID-grid-4f1b337e{margin:0 103px 0 86px}@media (min-width: 1488px){.IID-grid-4f1b337e{margin-left:86px;margin-right:103px}}@media (max-width: 1229px){.IID-grid-4f1b337e{margin:0 28px}}@media (max-width: 767px){.IID-grid-4f1b337e{margin:0 12px}}
	.IID-grid-4f1b337e{--halfHorizGap:40px;--halfVertGap:0px}@media (max-width: 1229px){.IID-grid-4f1b337e{--halfHorizGap:16px;--halfVertGap:0px}}@media (max-width: 767px){.IID-grid-4f1b337e{--halfHorizGap:0px;--halfVertGap:12px}}
</style>
<div class="grid__parsys l-flex--align-items-center        ">
<div class="grid-item l-flex__col--6 l-mob-flex__col--12 IID-grid-item-2a5f431a CID-grid-item-1e7a19ff">
<style>.IID-grid-item-2a5f431a{padding:103px 0}@media (max-width: 1229px){.IID-grid-item-2a5f431a{padding:64px 0}}@media (max-width: 767px){.IID-grid-item-2a5f431a{padding:48px 0 0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-gradient="row" class="custom-text CID-custom-text-e0b1298e IID-custom-text-e23af4d">
<style>
	.IID-custom-text-e23af4d{max-width:394px;color:#fff;font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif;background-image:linear-gradient(90deg,#fff,#fff);margin:0 0 12px}.IID-custom-text-e23af4d:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-e23af4d{background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}@media (max-width: 1229px){.IID-custom-text-e23af4d{max-width:300px}}@media (max-width: 767px){.IID-custom-text-e23af4d{max-width:100%}}
	.IID-custom-text-e23af4d{font-size:40px;font-weight:500;line-height:1.25;letter-spacing:.16px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-e23af4d{font-size:24px;line-height:1.333;letter-spacing:-.08px}}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<h3>Gartner names RingCentral a Magic Quadrant Leader for the 9th year in a row</h3>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-a6a162b2">
<style>
	.IID-custom-text-a6a162b2{max-width:374px;color:#fff;margin:0 0 32px}.IID-custom-text-a6a162b2:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-custom-text-a6a162b2{max-width:292px}}@media (max-width: 767px){.IID-custom-text-a6a162b2{max-width:100%}}
	.IID-custom-text-a6a162b2{font-size:20px;font-weight:400;line-height:1.4;letter-spacing:-.08px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-a6a162b2{font-size:16px;line-height:1.5}}
</style>
<div class="custom-text__wrapper" data-style="subhead" data-content-wrapper="true">
<div>RingCentral is proud to be recognised as a 2023 Gartner Magic Quadrant Leader for UCaaS worldwide.</div>
</div>
</div>
<div class="cta-v2 IID-cta-v2-292a36f9 CID-cta-v2-e0fe0cb4" data-focus="shape">
<style>
	.IID-cta-v2-292a36f9{z-index:1;border-radius:28px}@media (min-width: 1488px){.IID-cta-v2-292a36f9{border-radius:28px}}
	.IID-cta-v2-292a36f9 .cta-v2__el{padding-top:18px;padding-bottom:18px;padding-left:28px;padding-right:28px;font-size:18px;font-weight:500;line-height:18px;color:#852800}.IID-cta-v2-292a36f9 .cta-v2__el:hover,.IID-cta-v2-292a36f9 .cta-v2__el:focus{color:#fff}.IID-cta-v2-292a36f9 .cta-v2__el:active{color:#fff}.IID-cta-v2-292a36f9 .cta-v2__el{border-radius:28px}.IID-cta-v2-292a36f9 .cta-v2__el:before{border-top-style:solid;border-left-style:solid;border-right-style:solid;border-bottom-style:solid;border-width:1px;border-color:rgba(153,46,1,.28)}.IID-cta-v2-292a36f9 .cta-v2__el:hover:before,.IID-cta-v2-292a36f9 .cta-v2__el:focus:before{border-color:#852800}.IID-cta-v2-292a36f9 .cta-v2__el:active:before{border-color:#681f00}.IID-cta-v2-292a36f9 .cta-v2__el:before{background-color:#fff}.IID-cta-v2-292a36f9 .cta-v2__el:hover:before,.IID-cta-v2-292a36f9 .cta-v2__el:focus:before{background-color:#852800}.IID-cta-v2-292a36f9 .cta-v2__el:active:before{background-color:#681f00}.IID-cta-v2-292a36f9.cta-v2--active .cta-v2__el{color:#fff}.IID-cta-v2-292a36f9.cta-v2--active .cta-v2__el:before{border-color:#681f00}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="heroBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/lp/gartner-magic-quadrant.html" tabindex="0" title="Get the report" target="_self" data-dl-element="button" data-dl-additional-info="Gartner names RingCentral">
<span class="cta-v2__content">
<span class="cta-v2__text">Get the report</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--6 l-mob-flex__col--12 IID-grid-item-75c3a3d3 CID-grid-item-1e7a19ff">
<style>@media (max-width: 1229px){.IID-grid-item-75c3a3d3{padding:32px 0}}@media (max-width: 767px){.IID-grid-item-75c3a3d3{padding:0 0 48px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image CID-image-b4fec0a0 IID-image-c93430d4">
<style>.IID-image-c93430d4{z-index:1}</style>
<div class="image__wrap image__wrap--full-width ">
<img data-webp-src="/content/dam/rc-www/en_us/images/content/lp/gartner-magic-quadrant/sand-redesign/gartner-noempty-png-rendition.webp" src="data:image/svg+xml,%3Csvg viewBox=%220 0 1350 1329%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt="A graph of the 2023 Gartner Magic Quadrant for Unified Communications as a Service leaders featuring providers such as RingCentral, Microsoft and Zoom" width="1350" data-lazy-src="/content/dam/rc-www/en_us/images/content/lp/gartner-magic-quadrant/sand-redesign/gartner-noempty.png" class="image__img" height="1329" />
</div>
</div>
</div>
</div>
</div>
</div>
<div class="image IID-image-94650823 CID-image-b4fec0a0">
<style>.IID-image-94650823{max-width:64%;position:absolute;top:0;right:0}.IID-image-94650823:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 767px){.IID-image-94650823{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="image__wrap  " aria-hidden="true">
<img src="data:image/svg+xml,%3Csvg viewBox=%220 0 1454 1156%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt width="1454" data-lazy-src="/content/dam/rc-www/en_us/images/content/lp/gartner-magic-quadrant/sand-redesign/orange-circle.png" class="image__img" height="1156" />
</div>
</div>
<div class="image CID-image-b4fec0a0 IID-image-6fdfcb61">
<style>.IID-image-6fdfcb61{max-width:600px;position:absolute;bottom:0;right:0}.IID-image-6fdfcb61:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (min-width: 1230px){.IID-image-6fdfcb61{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-image-6fdfcb61{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="image__wrap image__wrap--full-width " aria-hidden="true">
<img src="data:image/svg+xml,%3Csvg viewBox=%220 0 2511 2507%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt width="2511" data-lazy-src="/content/dam/rc-www/en_us/images/content/lp/gartner-magic-quadrant/sand-redesign/orange_circle.png" class="image__img" height="2507" />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-bkg-tablet="right" class="background background--alignment--center background--back-size--height-100 background--back-position-x--right background--back-size-tab--height-100 background--back-position-x-tab--right background__image__mobile--disabled aem-GridColumn aem-GridColumn--default--12 CID-background-79490109 IID-background-1023c3a0">
<style>
	.IID-background-1023c3a0{color:#222;background-color:#f6f5f1;margin:0;padding:48px 0;border-radius:0}@media (min-width: 1488px){.IID-background-1023c3a0{margin-left:40px;margin-right:40px}.IID-background-1023c3a0{border-radius:30px}}@media (max-width: 1229px){.IID-background-1023c3a0{padding:44px 0 48px}}@media (max-width: 767px){.IID-background-1023c3a0{padding:40px 0}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/healthcare-bkg.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/healthcare-bkg-jpg-rendition.webp"></div>
<div class="background__switching-images background__switching-images--desktop">
<div class="background__image background__image--back background__image--switching-active" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/healthcare-bkg.jpg" data-switcher-hash="mslide1" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/healthcare-bkg-jpg-rendition.webp"></div>
<div class="background__image background__image--back " data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/fin-serv-bkg.jpg" data-switcher-hash="mslide2" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/fin-serv-bkg-jpg-rendition.webp"></div>
<div class="background__image background__image--back " data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/education-bkg.jpg" data-switcher-hash="mslide3" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/education-bkg-jpg-rendition.webp"></div>
<div class="background__image background__image--back " data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/retail-bkg.jpg" data-switcher-hash="mslide4" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/retail-bkg-jpg-rendition.webp"></div>
<div class="background__image background__image--back " data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/gov-bkg.jpg" data-switcher-hash="mslide5" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/gov-bkg-jpg-rendition.webp"></div>
</div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid CID-grid-1659f761 IID-grid-697184fa">
<style>
	.IID-grid-697184fa{margin:0;padding:0 12px 0 0}@media (min-width: 1488px){.IID-grid-697184fa{margin-right:-64px;padding-right:54px}}@media (max-width: 1229px){.IID-grid-697184fa{padding:0}}
	.IID-grid-697184fa{--halfHorizGap:16px;--halfVertGap:0px}@media (max-width: 1229px){.IID-grid-697184fa{--halfHorizGap:0px;--halfVertGap:0px}}
</style>
<div class="grid__parsys l-flex--align-items-stretch   l-flex--justify-content-space-between     ">
<div data-slides-links-wrapper="1" class="grid-item l-flex__col--5 l-tab-flex__col--6 l-mob-flex__col--12 IID-grid-item-a5fe991e CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-d4aff2c9">
<style>
	.IID-custom-text-d4aff2c9{margin:0 0 32px}
	.IID-custom-text-d4aff2c9{font-size:20px;font-weight:500;line-height:1.4;letter-spacing:-.08px;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-dl-context="item0" data-style="h5" data-content-wrapper="true">
<h5>Solutions for every industry</h5>
</div>
</div>
<div class="custom-itl itl custom-itl--switch-slider-card custom-itl--markup-carousel-switcher--new custom-itl--active custom-itl--progress-bar custom-itl--chevron--hidden CID-custom-itl-6a582420 IID-custom-itl-cd0dc785">
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/content/custom-itl/clientlibs/switch-slider-card.min.dba18a0e2202fff7dc848656a5c647c9.css" type="text/css" />
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/components/content/custom-itl/clientlibs/switch-slider-card.min.7cdc2ded2a397062128c1654f18578c5.js","dependencies":[{"path":"/etc.clientlibs/rc-www/clientlibs/essential.min.f35326dc52e2f83caa7d3e0ce7ea4596.js","dependencies":null,"embed":[],"properties":{}}],"embed":null,"properties":{}}]',
            async: 'true'
        });
	</script>
<style>
	.IID-custom-itl-cd0dc785{z-index:1;margin:0 0 20px}@media (max-width: 1229px){.IID-custom-itl-cd0dc785{margin:0 0 12px}}
	.custom-itl.IID-custom-itl-cd0dc785 .custom-itl__title{color:#6f6f6f;font-size:30px;line-height:.96;font-weight:500}.custom-itl.IID-custom-itl-cd0dc785 .custom-itl__chevron{color:#6f6f6f}.custom-itl.IID-custom-itl-cd0dc785.custom-itl--active .custom-itl__title{color:#222}@media (max-width: 1229px){.custom-itl.IID-custom-itl-cd0dc785 .custom-itl__title{font-size:24px}}@media (max-width: 767px){.custom-itl.IID-custom-itl-cd0dc785 .custom-itl__title{font-size:20px}}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="submitBtBanner">
<button class="custom-itl__link custom-itl__link--type--link" title="Healthcare" aria-label="Healthcare" data-automation-id="Healthcare" data-dl-additional-info="Solutions for every indus" data-anchor="#mslide1">
<div class="custom-itl__header">
<div class="custom-itl__image-block">
</div>
<div class="custom-itl__text">
<div class="custom-itl__title">Healthcare</div>
</div>
<div class="custom-itl__chevron">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--353714479-591330276-title" class="float-nav__selected-svg" id="svg--353714479-591330276" role="img" viewBox="0 0 129 129">
<title id="svg--353714479-591330276-title">Expand field for more information</title>
<path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z" />
</svg>
</div>
</div>
<div class="custom-itl__content">
<div class="custom-itl__parsys">
<div class="custom-text appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-custom-text-e0b1298e IID-custom-text-f7aa5e19">
<style>
	.IID-custom-text-f7aa5e19{max-width:344px;color:#222;text-align:left;transition:opacity 300ms;opacity:0;margin:20px 0 16px}.IID-custom-text-f7aa5e19:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-f7aa5e19.appearance-transition--animated{opacity:1}@media (min-width: 1230px){.IID-custom-text-f7aa5e19{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-custom-text-f7aa5e19{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-custom-text-f7aa5e19{max-width:100%}}
	.IID-custom-text-f7aa5e19{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote" data-content-wrapper="true">
<div>Create rich, secure experiences for patients, staff and partners from one collaborative platform.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right IID-cta-v2-cef1730 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-cef1730{position:relative;margin:0 0 32px -12px}@media (min-width: 1488px){.IID-cta-v2-cef1730{margin-left:-12px}}@media (min-width: 1230px){.IID-cta-v2-cef1730{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-cta-v2-cef1730{visibility:hidden;position:absolute;top:-99999px}}
	.IID-cta-v2-cef1730 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-cef1730 .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-cef1730 .cta-v2__el{border-radius:16px}.IID-cta-v2-cef1730 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-cef1730 .cta-v2__el:hover:before,.IID-cta-v2-cef1730 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-cef1730 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="submitBtBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/industry-solutions/healthcare-communications-cloud-phone-systems.html" data-active-dl-name="Healthcare - Learn more" tabindex="0" title="Learn more" target="_self" data-dl-element="button" data-dl-name="Healthcare - Learn more" data-dl-additional-info="Solutions for every indus" data-automation-id="Healthcare - Learn more" data-cta-animated="cta-animated">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
<div class="background background__image__mobile--enabled background--back-position-x--center background--back-position-y--center background--back-size--cover background--alignment--fullwidth appearance-animation appearance-animation--zoom-in appearance-animation--method--repeat IID-background-776801c6 CID-background-79490109">
<style>
	.IID-background-776801c6.appearance-animation--animated{animation-name:zoom-in;animation-duration:600ms}.IID-background-776801c6{margin:0 0 96px;border-radius:20px;min-height:463px;overflow:hidden}@media (min-width: 1488px){.IID-background-776801c6{border-radius:20px}}@media (min-width: 1230px){.IID-background-776801c6{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-background-776801c6{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-background-776801c6{border-radius:16px}.IID-background-776801c6{min-height:380px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/healthcare-img.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/healthcare-img-jpg-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div data-castom-marks="1" class="grid IID-grid-da5ee071 CID-grid-1659f761">
<style>
	.IID-grid-da5ee071{z-index:1}
	
</style>
<div class="grid__parsys         ">
<div class="grid-item appearance-animation appearance-animation--fade-in-up appearance-animation--method--repeat CID-grid-item-1e7a19ff IID-grid-item-c7e2ba87">
<style>.IID-grid-item-c7e2ba87{z-index:1;position:absolute;bottom:-16px;left:-32px}.IID-grid-item-c7e2ba87.appearance-animation--animated{animation-name:fade-in-up;animation-duration:1200ms;animation-delay:200ms}@media (min-width: 1230px){.IID-grid-item-c7e2ba87{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-grid-item-c7e2ba87{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px){.IID-grid-item-c7e2ba87{bottom:-20px;left:-16px}}@media (max-width: 767px){.IID-grid-item-c7e2ba87{bottom:28px;left:-10px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-background-1e47e309 CID-background-79490109">
<style>
	.IID-background-1e47e309{background-color:#fff;padding:28px 48px 28px 28px;border-radius:20px}@media (min-width: 1488px){.IID-background-1e47e309{padding-left:28px;padding-right:48px}.IID-background-1e47e309{border-radius:20px}}
	.IID-background-1e47e309 > .background__layers > .background__layer--back .background__color{background-color:transparent}
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image image--hover-item1 CID-image-b4fec0a0 IID-image-5096d95e">
<style>.IID-image-5096d95e{max-width:128px;margin:0 0 24px}.IID-image-5096d95e:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--1537103289-1561856365-title" class="image__img" id="svg--1537103289-1561856365" role="img" viewBox="0 0 127.99 29.27">
<title id="svg--1537103289-1561856365-title">Chenmed logo</title>
<path d="M102.48,7.39c-.66,0-1.32,0-2,0a.66.66,0,0,0-.61.34c-.38.58-.74,1.16-1.11,1.75l-.6.95-.42.65-.39.59c-.2.32-.4.63-.61.94s-.24.33-.35.5-.26.45-.4.67a1.93,1.93,0,0,1-.22.28.27.27,0,0,1-.47-.05c-.16-.24-.32-.48-.47-.72s-.36-.59-.55-.88-.5-.75-.74-1.13l-.5-.81c-.14-.22-.29-.42-.44-.64l-.57-.9L91.35,7.8c-.12-.19-.24-.42-.49-.42-.73,0-1.47,0-2.2,0a.5.5,0,0,0-.42.43V21.89a.46.46,0,0,0,.43.44H90.4a.42.42,0,0,0,.47-.47v-9a.28.28,0,0,1,0-.19.35.35,0,0,1,.63,0l1.29,2c.4.6.82,1.19,1.22,1.79s.72,1.11,1.11,1.65.5.36.77,0,.42-.62.63-.93l.44-.67.67-1c.15-.23.29-.46.44-.68.31-.47.64-.94,1-1.4s.43-.63.65-.94a.2.2,0,0,1,.12-.08.38.38,0,0,1,.47.41v9a.36.36,0,0,0,.4.4h1.8a.39.39,0,0,0,.43-.43V7.84A.45.45,0,0,0,102.48,7.39Z" fill="#252224" transform="translate(-0.01 0.01)" />
<path d="M26,19.91l-1.35-.48-.33-.14c-.3-.13-.62-.24-.91-.38s-.73-.38-1.08-.59-.63-.36-.93-.57-.81-.62-1.22-.92a15.64,15.64,0,0,1-2-1.86c-.59-.62-1.15-1.26-1.71-1.91-.33-.38-.66-.76-1-1.15-.55-.67-1.08-1.35-1.63-2S12.64,8.49,12,7.8a23,23,0,0,0-3.3-3.17c-.53-.41-1.09-.78-1.65-1.16A9.52,9.52,0,0,0,6.22,3c-.36-.19-.72-.35-1.09-.52a5.46,5.46,0,0,0-.71-.31,5.39,5.39,0,0,0-1-.2,2.21,2.21,0,0,0-1.23.23A4.61,4.61,0,0,0,1.29,3c-.29.26-.54.56-.82.83a.49.49,0,0,0-.18.53c.05.18.21.21.33.25.32.12.67.19,1,.31a8.47,8.47,0,0,1,.87.38c.6.29,1.19.6,1.78.91a4.23,4.23,0,0,1,.42.25c.36.26.72.51,1.07.78s.9.69,1.32,1.07,1,.94,1.44,1.42,1.11,1.19,1.64,1.81,1.12,1.38,1.69,2.06,1,1.2,1.5,1.79,1.2,1.4,1.83,2.08a22.26,22.26,0,0,0,2.31,2.14A20.12,20.12,0,0,0,20,21.33c.4.23.83.4,1.25.59a2.74,2.74,0,0,0,1.44.25,2.68,2.68,0,0,0,1.34-.2,3.79,3.79,0,0,0,1.35-.84l.73-.73C26.34,20.19,26.31,20,26,19.91Z" fill="#31215e" transform="translate(-0.01 0.01)" />
<path d="M22.44,23.65l-.16-.07a5.94,5.94,0,0,1-.6-.18c-.61-.25-1.21-.49-1.81-.76a13.65,13.65,0,0,1-2.54-1.54,18.9,18.9,0,0,1-1.49-1.22c-.59-.54-1.16-1.09-1.7-1.68-.72-.79-1.41-1.62-2.11-2.45-.57-.67-1.11-1.37-1.68-2-.78-.93-1.57-1.87-2.37-2.78a21.64,21.64,0,0,0-3.27-3A3.25,3.25,0,0,0,3.3,7.28a1.84,1.84,0,0,0-1.6.39C1.24,8.07.83,8.54.39,9s-.28.51.06.74.89.55,1.3.86a19.23,19.23,0,0,1,1.57,1.26c.66.61,1.29,1.25,1.91,1.9s1,1.16,1.55,1.76S8,17,8.58,17.7s1.38,1.69,2.1,2.51c.59.67,1.21,1.31,1.84,1.94a16.66,16.66,0,0,0,2.42,2c.56.37,1.14.73,1.72,1.07a3.93,3.93,0,0,0,1,.41,10.14,10.14,0,0,0,1.22.19c.38,0,.68-.06,1-.11A4.46,4.46,0,0,0,21,25.3a5.39,5.39,0,0,0,1.48-1.16C22.74,23.93,22.72,23.77,22.44,23.65Z" fill="#00434a" transform="translate(-0.01 0.01)" />
<path d="M29.69,16.29a.52.52,0,0,0-.19-.11c-.25-.08-.51-.15-.76-.24-.52-.2-1-.39-1.55-.64-.66-.33-1.3-.68-1.93-1.07A15,15,0,0,1,23,12.48a24.22,24.22,0,0,1-1.76-1.75c-.86-1-1.67-1.93-2.49-2.91-.59-.71-1.15-1.44-1.74-2.14-.73-.87-1.47-1.74-2.23-2.58A22.51,22.51,0,0,0,12.05.63,2.55,2.55,0,0,0,10.25,0L9.82,0a1,1,0,0,0-.67.22c-.55.51-1.08,1-1.61,1.57a.24.24,0,0,0,0,.34.91.91,0,0,0,.23.21c.48.33,1,.64,1.43,1a15.17,15.17,0,0,1,1.44,1.19c.7.67,1.36,1.37,2,2.07.51.55,1,1.13,1.48,1.71s1,1.27,1.53,1.91,1,1.21,1.51,1.79S18.4,13.41,19,14.08a17.6,17.6,0,0,0,2.23,2c.51.38,1,.76,1.56,1.09s1.09.59,1.64.88a3.73,3.73,0,0,0,1.22.4,3.57,3.57,0,0,0,1.89-.19,6,6,0,0,0,2.13-1.74C29.8,16.46,29.78,16.37,29.69,16.29Z" fill="#722877" transform="translate(-0.01 0.01)" />
<path d="M127.56,6.77h-1.77a.39.39,0,0,0-.43.43v2.85c0,.63,0,1.26,0,1.88a.32.32,0,0,1-.17.27.45.45,0,0,1-.34,0c-.3-.21-.57-.49-.88-.68a5.19,5.19,0,0,0-1.13-.5,5.12,5.12,0,0,0-1.74-.15,1.13,1.13,0,0,0-.32.05c-.29.07-.59.14-.87.23a3.17,3.17,0,0,0-.76.3,10.37,10.37,0,0,0-1.07.81,3.94,3.94,0,0,0-1,1.29,7.2,7.2,0,0,0-.48,1.22,3.73,3.73,0,0,0-.21,1,10,10,0,0,0,.06,2.25,6,6,0,0,0,.37,1.32,8.55,8.55,0,0,0,.67,1.18,4.57,4.57,0,0,0,1.21,1.19,4.47,4.47,0,0,0,1.19.61,3.22,3.22,0,0,0,.67.2,5.81,5.81,0,0,0,1.44.08,5,5,0,0,0,1.44-.37,4.37,4.37,0,0,0,1.36-1,.34.34,0,0,1,.39-.09.31.31,0,0,1,.19.34,3.68,3.68,0,0,0,0,.47.38.38,0,0,0,.42.42h1.73a.44.44,0,0,0,.48-.47V7.24A.45.45,0,0,0,127.56,6.77Zm-2.16,9.94c0,.31,0,.63-.11.94a3.52,3.52,0,0,1-.75,1.54,3.13,3.13,0,0,1-1.32.92,3.26,3.26,0,0,1-1.61.13,2.74,2.74,0,0,1-1-.36,3.15,3.15,0,0,1-.88-.74,2.63,2.63,0,0,1-.51-.87c-.05-.18-.13-.36-.18-.55a2.92,2.92,0,0,1-.09-.5c0-.31,0-.62,0-.93a2.84,2.84,0,0,1,.21-1,3.21,3.21,0,0,1,.72-1.22,2.82,2.82,0,0,1,1.37-.8,3,3,0,0,1,1.48-.05,4,4,0,0,1,1,.37,2.53,2.53,0,0,1,.88.78,5.25,5.25,0,0,1,.57,1.07A3.06,3.06,0,0,1,125.4,16.71Z" fill="#252224" transform="translate(-0.01 0.01)" />
<path d="M18.68,27.21l-.11,0c-.64-.2-1.3-.37-1.93-.61A11.09,11.09,0,0,1,13.82,25c-.66-.51-1.32-1-1.94-1.6a34.43,34.43,0,0,1-3.35-3.69c-.67-.82-1.32-1.66-2-2.48C6,16.57,5.51,16,5,15.33a3,3,0,0,0-1.54-1.07,2.19,2.19,0,0,0-2.07.37A16.12,16.12,0,0,0,.15,15.87a.51.51,0,0,0-.13.24c-.06.19.08.3.19.42.49.5,1,1,1.47,1.52C2.53,19,3.35,20,4.2,20.92s1.92,2.18,2.91,3.23c.72.76,1.48,1.48,2.26,2.16a23.78,23.78,0,0,0,2,1.48,7.85,7.85,0,0,0,2.5,1.3,7.2,7.2,0,0,0,.78.16,6,6,0,0,0,.6,0,2.42,2.42,0,0,0,1-.11c.09,0,.19,0,.29-.05a4.93,4.93,0,0,0,1.63-.79c.25-.19.48-.39.71-.6S19,27.3,18.68,27.21Z" fill="#00776f" transform="translate(-0.01 0.01)" />
<path d="M49.14,18.47a.33.33,0,0,0-.47,0l-.56.45a9,9,0,0,1-.75.51,3.76,3.76,0,0,1-.67.32c-.32.11-.65.2-1,.28a4.21,4.21,0,0,1-.78.12A3.47,3.47,0,0,1,43.57,20c-.33-.12-.68-.18-1-.32a4.33,4.33,0,0,1-1.4-1,4.62,4.62,0,0,1-1-1.57c-.11-.3-.2-.61-.28-.91a5.08,5.08,0,0,1-.13-.78c0-.39,0-.78,0-1.17a4,4,0,0,1,.34-1.45,6,6,0,0,1,.65-1.22,4.58,4.58,0,0,1,1.62-1.41,4.94,4.94,0,0,1,1.52-.5,4.45,4.45,0,0,1,1.41,0,5.14,5.14,0,0,1,1.72.53,7,7,0,0,1,1.43,1,.42.42,0,0,0,.6,0c.41-.46.81-.92,1.21-1.39a.33.33,0,0,0,0-.5,6.67,6.67,0,0,0-1.36-1,13,13,0,0,0-1.31-.61,3.68,3.68,0,0,0-.71-.23c-.35-.07-.71-.1-1.07-.16a7.79,7.79,0,0,0-3.36.23,9.29,9.29,0,0,0-1.33.5c-.3.14-.57.36-.87.53a6.43,6.43,0,0,0-1.19,1A6.72,6.72,0,0,0,37.9,11a6.08,6.08,0,0,0-.49,1.07c-.12.37-.22.76-.32,1.14a16.17,16.17,0,0,0-.18,1.66c0,.29,0,.57.07.85a10.74,10.74,0,0,0,.15,1.12,6.65,6.65,0,0,0,.34,1,7.46,7.46,0,0,0,1,1.8,7.09,7.09,0,0,0,2.17,1.91c.43.23.88.42,1.32.62a2.57,2.57,0,0,0,.47.15l.95.16a5.77,5.77,0,0,0,1.76.08c.35,0,.71-.07,1.06-.13s.6-.17.9-.25a5.62,5.62,0,0,0,1.65-.76,8,8,0,0,0,1.54-1.25.34.34,0,0,0,0-.47C50,19.29,49.56,18.87,49.14,18.47Z" fill="#252224" transform="translate(-0.01 0.01)" />
<path d="M62,13.62a3.49,3.49,0,0,0-.35-.93,4.1,4.1,0,0,0-.55-.71,2.81,2.81,0,0,0-.88-.69,6.12,6.12,0,0,0-.94-.32,4.38,4.38,0,0,0-1.94-.06,3.38,3.38,0,0,0-1.3.5,10.78,10.78,0,0,0-.9.77.48.48,0,0,1-.32,0s-.08-.1-.08-.16c0-.43,0-.86,0-1.3V7.23c0-.34-.14-.47-.47-.47H52.58a1,1,0,0,0-.24,0c-.23,0-.26.09-.26.33V22a.29.29,0,0,0,.32.32h1.91a.37.37,0,0,0,.39-.38v-.21c0-1.68,0-3.36,0-5a4.56,4.56,0,0,1,.15-1.8,4.66,4.66,0,0,1,.26-.61,2.31,2.31,0,0,1,2.05-1.1,4.49,4.49,0,0,1,.79.13,1.85,1.85,0,0,1,1.36,1.22,4.11,4.11,0,0,1,.24,1.08c0,2.12,0,4.23,0,6.35a.34.34,0,0,0,.35.35h1.89c.27,0,.39-.13.39-.4,0-2.32,0-4.65,0-7A6.23,6.23,0,0,0,62,13.62Z" fill="#252224" transform="translate(-0.01 0.01)" />
<path d="M115,15.28c-.12-.36-.16-.76-.31-1.11a9.26,9.26,0,0,0-.7-1.27,4.38,4.38,0,0,0-1.66-1.48A5,5,0,0,0,111,11a6.48,6.48,0,0,0-1.39-.12,4.06,4.06,0,0,0-1.25.22,4.18,4.18,0,0,0-1,.38,7.3,7.3,0,0,0-1,.66,5.75,5.75,0,0,0-1.39,1.6,6.85,6.85,0,0,0-.4.87,1.57,1.57,0,0,0-.16.46c0,.32-.12.63-.16,1a6.72,6.72,0,0,0,.18,2.49,5.09,5.09,0,0,0,.7,1.58,4.72,4.72,0,0,0,1.36,1.42,7.46,7.46,0,0,0,1.27.7,5.75,5.75,0,0,0,1.25.33,6.26,6.26,0,0,0,2,0,6,6,0,0,0,1.32-.34,6.14,6.14,0,0,0,2-1.37.4.4,0,0,0,0-.57c-.31-.3-.62-.59-1-.87a.42.42,0,0,0-.59,0,5.36,5.36,0,0,1-1.29.8,2.84,2.84,0,0,1-1.11.24c-.23,0-.46,0-.69,0a2.82,2.82,0,0,1-1.91-.79,3.46,3.46,0,0,1-.89-1.48c-.11-.29.05-.5.37-.5h7.38a.46.46,0,0,0,.42-.34,3.85,3.85,0,0,0,0-.48A6.61,6.61,0,0,0,115,15.28Zm-3,.61h-4.79c-.24,0-.27-.08-.28-.32a2,2,0,0,1,.26-.87,2.89,2.89,0,0,1,.85-1.13,2,2,0,0,1,1.09-.51,5.12,5.12,0,0,1,.77-.07,2.48,2.48,0,0,1,2,1.14,4.73,4.73,0,0,1,.53,1.17A.43.43,0,0,1,112,15.89Z" fill="#252224" transform="translate(-0.01 0.01)" />
<path d="M74.24,14.4A9.31,9.31,0,0,0,73.5,13a4.63,4.63,0,0,0-1.44-1.38,4.79,4.79,0,0,0-1.4-.59A4.55,4.55,0,0,0,69,10.85a12.26,12.26,0,0,0-1.21.22,3.52,3.52,0,0,0-.51.19,5,5,0,0,0-1.52.92,5.93,5.93,0,0,0-1.06,1.18,5.27,5.27,0,0,0-.43.72,7.24,7.24,0,0,0-.3.86A4.49,4.49,0,0,0,63.74,16a6.57,6.57,0,0,0,.06,1.77,10.32,10.32,0,0,0,.36,1.35A4.28,4.28,0,0,0,65,20.52a9.54,9.54,0,0,0,1.09,1,8,8,0,0,0,1.15.64,2.27,2.27,0,0,0,.46.16c.29.07.59.1.89.17a5.88,5.88,0,0,0,3-.24,4.61,4.61,0,0,0,.86-.36,5.78,5.78,0,0,0,1.49-1.21.27.27,0,0,0,0-.33.76.76,0,0,0-.2-.24l-.85-.75a.47.47,0,0,0-.56-.06l-.56.42a3,3,0,0,1-1.89.66h-.26a3.87,3.87,0,0,1-.84-.05,4.92,4.92,0,0,1-1-.38A2.33,2.33,0,0,1,67,19.2a3.37,3.37,0,0,1-.52-1.1.34.34,0,0,1,.33-.47h7.36a.46.46,0,0,0,.5-.46,16,16,0,0,0-.11-1.7A4.83,4.83,0,0,0,74.24,14.4Zm-2.4,1.43a1.59,1.59,0,0,1-.37.06H66.65c-.23,0-.35-.13-.29-.35a3.89,3.89,0,0,1,1-1.85,2.43,2.43,0,0,1,1.08-.61,3.33,3.33,0,0,1,1.3-.06,2.5,2.5,0,0,1,1.08.46,3.19,3.19,0,0,1,.65.72A3.76,3.76,0,0,1,72,15.57.2.2,0,0,1,71.84,15.83Z" fill="#252224" transform="translate(-0.01 0.01)" />
<path d="M86.29,14.25a4.45,4.45,0,0,0-.3-1.18,3.41,3.41,0,0,0-.44-.76A2.88,2.88,0,0,0,85,11.7,4,4,0,0,0,83.45,11a4.93,4.93,0,0,0-2,0,3.64,3.64,0,0,0-1.6.72c-.19.16-.37.34-.55.51s-.34.12-.38,0a1.15,1.15,0,0,1-.11-.36,3,3,0,0,1,0-.42c0-.25-.07-.32-.32-.33-.62,0-1.25,0-1.87,0-.32,0-.41.11-.41.43v5.19h0v5.21c0,.31.13.44.43.44h1.84a.32.32,0,0,0,.33-.26,1,1,0,0,0,0-.17c0-2,0-3.93,0-5.9a3.08,3.08,0,0,1,.57-1.9,2.24,2.24,0,0,1,1.21-.78,2.48,2.48,0,0,1,2.1.28,2.1,2.1,0,0,1,.91,1.33,5.31,5.31,0,0,1,.12,1.2c0,1.3,0,2.59,0,3.89v1.87c0,.33.11.44.43.44h1.71c.35,0,.47-.11.46-.46C86.34,19.33,86.49,16.79,86.29,14.25Z" fill="#252224" transform="translate(-0.01 0.01)" />
<path d="M32.61,12.38a3.66,3.66,0,0,0-.46-.18,13,13,0,0,1-4.22-2.34,20.65,20.65,0,0,1-3.11-3.23c-1-1.28-1.94-2.59-2.92-3.88C21.31,2,20.7,1.2,20.1.43a.34.34,0,0,0-.55-.06,4.71,4.71,0,0,0-1,1.18,3.75,3.75,0,0,0,0,3.79,15.09,15.09,0,0,0,1.58,2.24,29.16,29.16,0,0,0,3.55,3.65,15.43,15.43,0,0,0,3.48,2.35,6,6,0,0,0,2.59.65A4,4,0,0,0,31.08,14a4.33,4.33,0,0,0,1.58-1.33C32.74,12.55,32.73,12.44,32.61,12.38Z" fill="#b63d96" transform="translate(-0.01 0.01)" />
</svg>
</div>
</div>
<div class="custom-text IID-custom-text-4577d2fe CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-4577d2fe{max-width:200px;color:#222;text-align:left}.IID-custom-text-4577d2fe:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-custom-text-4577d2fe{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p><b>42%</b> Increase in HCAHPS patient satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</button>
</div>
</div>
<div class="custom-itl itl custom-itl--switch-slider-card custom-itl--markup-carousel-switcher--new custom-itl--progress-bar IID-custom-itl-cfd48bef CID-custom-itl-6a582420">
<style>
	.IID-custom-itl-cfd48bef{z-index:1;margin:0 0 20px}@media (max-width: 1229px){.IID-custom-itl-cfd48bef{margin:0 0 12px}}
	.custom-itl.IID-custom-itl-cfd48bef .custom-itl__title{color:#6f6f6f;font-size:30px;line-height:.96;font-weight:500}.custom-itl.IID-custom-itl-cfd48bef .custom-itl__chevron{color:#6f6f6f}.custom-itl.IID-custom-itl-cfd48bef.custom-itl--active .custom-itl__title{color:#222}@media (max-width: 1229px){.custom-itl.IID-custom-itl-cfd48bef .custom-itl__title{font-size:24px}}@media (max-width: 767px){.custom-itl.IID-custom-itl-cfd48bef .custom-itl__title{font-size:20px}}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="submitBtBanner">
<button class="custom-itl__link custom-itl__link--type--link" title="Financial Services" aria-label="Financial Services" data-automation-id="Financial Services" data-dl-additional-info="Solutions for every indus" data-anchor="#mslide2">
<div class="custom-itl__header">
<div class="custom-itl__image-block">
</div>
<div class="custom-itl__text">
<div class="custom-itl__title">Financial Services</div>
</div>
<div class="custom-itl__chevron">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--353714479-591330276-title" role="img" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--353714479-591330276" />
</svg>
</div>
</div>
<div class="custom-itl__content">
<div class="custom-itl__parsys">
<div class="custom-text appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-custom-text-2f53e38d CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-2f53e38d{max-width:344px;color:#222;text-align:left;transition:opacity 300ms;opacity:0;margin:20px 0 16px}.IID-custom-text-2f53e38d:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-2f53e38d.appearance-transition--animated{opacity:1}@media (min-width: 1230px){.IID-custom-text-2f53e38d{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-custom-text-2f53e38d{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-custom-text-2f53e38d{max-width:100%}}
	.IID-custom-text-2f53e38d{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote" data-content-wrapper="true">
<div>Securely and efficiently connect members, clients, and policyholders from one collaborative cloud communications platform.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right IID-cta-v2-82cde306 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-82cde306{position:relative;margin:0 0 32px -12px}@media (min-width: 1488px){.IID-cta-v2-82cde306{margin-left:-12px}}@media (min-width: 1230px){.IID-cta-v2-82cde306{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-cta-v2-82cde306{visibility:hidden;position:absolute;top:-99999px}}
	.IID-cta-v2-82cde306 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-82cde306 .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-82cde306 .cta-v2__el{border-radius:16px}.IID-cta-v2-82cde306 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-82cde306 .cta-v2__el:hover:before,.IID-cta-v2-82cde306 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-82cde306 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="submitBtBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/industry-solutions/business-communications-for-financial-services.html" data-active-dl-name="Financial Services - Learn more" tabindex="0" title="Learn more" target="_self" data-dl-element="button" data-dl-name="Financial Services - Learn more" data-dl-additional-info="Solutions for every indus" data-automation-id="Financial Services - Learn more" data-cta-animated="cta-animated">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
<div class="background background__image__mobile--enabled background--back-position-x--center background--back-position-y--center background--back-size--cover background--alignment--fullwidth appearance-animation appearance-animation--zoom-in appearance-animation--method--repeat IID-background-bf22a830 CID-background-79490109">
<style>
	.IID-background-bf22a830.appearance-animation--animated{animation-name:zoom-in;animation-duration:600ms}.IID-background-bf22a830{margin:0 0 96px;border-radius:20px;min-height:463px;overflow:hidden}@media (min-width: 1488px){.IID-background-bf22a830{border-radius:20px}}@media (min-width: 1230px){.IID-background-bf22a830{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-background-bf22a830{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-background-bf22a830{border-radius:16px}.IID-background-bf22a830{min-height:380px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/fin-serv-img.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/fin-serv-img-jpg-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div data-castom-marks="1" class="grid CID-grid-1659f761 IID-grid-503dac47">
<style>
	.IID-grid-503dac47{z-index:1}
	
</style>
<div class="grid__parsys         ">
<div class="grid-item appearance-animation appearance-animation--fade-in-up appearance-animation--method--repeat IID-grid-item-a065571 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-a065571{z-index:1;position:absolute;bottom:-16px;left:-32px}.IID-grid-item-a065571.appearance-animation--animated{animation-name:fade-in-up;animation-duration:1200ms;animation-delay:200ms}@media (min-width: 1230px){.IID-grid-item-a065571{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-grid-item-a065571{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px){.IID-grid-item-a065571{bottom:-20px;left:-16px}}@media (max-width: 767px){.IID-grid-item-a065571{bottom:28px;left:-10px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-background-ba365773 CID-background-79490109">
<style>
	.IID-background-ba365773{background-color:#fff;padding:28px 48px 28px 28px;border-radius:20px}@media (min-width: 1488px){.IID-background-ba365773{padding-left:28px;padding-right:48px}.IID-background-ba365773{border-radius:20px}}
	.IID-background-ba365773 > .background__layers > .background__layer--back .background__color{background-color:transparent}
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image image--hover-item1 IID-image-c9a6134 CID-image-b4fec0a0">
<style>.IID-image-c9a6134{max-width:128px;margin:0 0 24px}.IID-image-c9a6134:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-428294190--2019170361-title" class="image__img" fill="none" height="41" id="svg-428294190--2019170361" role="img" viewBox="0 0 128 41" width="128">
<title id="svg-428294190--2019170361-title">Wyndham Capital logo</title>
<g clip-path="url(#svg-428294190--2019170361-clip0_2141_336892)">
<g clip-path="url(#svg-428294190--2019170361-clip1_2141_336892)">
<path d="M19.5681 -0.000100489C8.38436 0.227229 -0.329947 9.20452 0.0088186 20.4061C0.33867 31.251 9.16887 39.533 19.8623 39.4973C31.202 39.4438 39.7113 30.3685 39.64 19.626C39.5642 8.6206 30.4309 -0.214058 19.5681 -0.000100489ZM31.3491 19.9826C31.0861 21.0212 30.6894 21.1282 29.8826 20.4373C29.7667 20.3392 29.6419 20.259 29.4012 20.0896C29.37 20.4507 29.3299 20.6869 29.3299 20.9276C29.3254 22.7507 29.3477 24.5693 29.321 26.3924C29.2764 29.1338 27.85 30.5379 25.1354 30.5423C21.5918 30.5512 18.0436 30.5512 14.5 30.5423C11.6383 30.5379 10.3189 29.2764 10.2387 26.3924C10.1852 24.3866 10.2297 22.3763 10.2297 20.0718C9.79291 20.4239 9.62799 20.5666 9.44969 20.6914C8.94154 21.0524 8.64735 20.9098 8.44231 20.3258C7.86729 18.6766 8.29521 17.2903 9.60124 16.1314C9.99795 15.7793 10.2877 15.1329 10.3412 14.5936C10.4526 13.4703 10.3768 12.3247 10.3768 11.0276C11.2906 11.0276 12.1554 10.9964 13.0156 11.0544C13.1806 11.0677 13.4079 11.4065 13.4569 11.6294C13.5327 11.9637 13.4748 12.3292 13.4748 12.8997C13.8581 12.6635 14.1255 12.5342 14.3484 12.3604C15.445 11.5001 16.5192 10.6042 17.6291 9.7617C18.9218 8.77661 20.6156 8.73203 21.877 9.71267C24.6986 11.9013 27.4979 14.1166 30.2704 16.3632C31.4204 17.2948 31.6968 18.5785 31.3402 19.9826H31.3491Z" fill="#1E2B3B" />
<path d="M25.5499 16.937C23.9676 15.6444 22.3317 14.4141 20.7805 13.0903C20.0717 12.4841 19.5369 12.5019 18.8549 13.0769C17.3393 14.3517 15.7614 15.5508 14.2682 16.8479C13.9026 17.1644 13.5906 17.7528 13.5817 18.2252C13.5148 20.9532 13.5594 23.6812 13.5416 26.4091C13.5371 27.0866 13.7021 27.3898 14.4777 27.363C16.1982 27.3006 17.9188 27.3541 19.6438 27.3586C21.6853 27.3586 23.7269 27.3586 25.9645 27.3586C25.9645 24.0021 25.9734 20.8239 25.9467 17.6458C25.9467 17.4051 25.755 17.0975 25.5544 16.937H25.5499ZM23.7447 22.491C23.6199 22.9947 23.4639 23.4895 23.348 23.9976C23.0716 25.2101 22.6169 25.5176 21.4268 25.1789C21.2084 25.1165 20.9855 24.8312 20.9008 24.5994C20.5309 23.5965 20.2144 22.5802 19.7998 21.341C19.5948 21.7243 19.4432 21.9383 19.3586 22.1745C19.1223 22.8476 18.8415 23.5207 18.7167 24.2161C18.5295 25.2457 17.8475 25.219 17.0541 25.2413C16.2027 25.2636 16.225 24.6217 16.1046 24.1403C15.6232 22.2236 15.1864 20.298 14.705 18.252C15.2978 18.252 15.8193 18.1851 16.3141 18.2787C16.5637 18.3278 16.898 18.622 16.9605 18.8671C17.1922 19.7631 17.326 20.6858 17.6959 21.6397C17.9857 20.7838 18.3333 19.9414 18.5473 19.0677C18.7033 18.4214 19.051 18.252 19.6483 18.2386C20.259 18.2208 20.7047 18.301 20.9097 18.9919C21.1683 19.879 21.5204 20.7348 21.8324 21.6084C21.926 21.5951 22.0152 21.5817 22.1088 21.5728C22.2202 20.7883 22.3852 20.0082 22.4253 19.2193C22.4654 18.4793 22.7328 18.1539 23.4995 18.2609C23.8784 18.3144 24.2662 18.2698 24.7966 18.2698C24.4311 19.7452 24.0879 21.1181 23.7447 22.491Z" fill="#1E2B3B" />
<path d="M67.4679 7.47592C66.8483 7.43135 66.563 7.66313 66.407 8.26935C66.0727 9.58875 65.6671 10.8948 65.2837 12.2008C65.199 12.4861 65.0653 12.758 64.9227 13.119C64.8157 12.9363 64.7444 12.8605 64.7221 12.7758C64.2808 11.2023 63.8128 9.63333 63.425 8.04648C63.3135 7.59627 63.1441 7.48484 62.7296 7.48929C61.0536 7.50267 59.3776 7.48929 57.7016 7.49375C56.9305 7.49375 56.9438 7.52941 56.8235 8.31838C56.5739 9.95426 56.2886 11.5812 56.0122 13.2127C55.9677 13.2171 55.9231 13.2216 55.8785 13.226C55.8072 13.0522 55.7091 12.8873 55.6601 12.7045C55.3436 11.5411 55.0004 10.3777 54.7374 9.20095C54.3407 7.44026 54.3674 7.44472 52.5889 7.48929C52.1744 7.49821 51.9426 7.63193 51.8401 8.04202C51.4879 9.45949 51.118 10.8725 50.7435 12.2855C50.6499 12.6376 50.5207 12.9764 50.4092 13.3241C50.2443 13.1592 50.1997 13.0299 50.1774 12.9006C49.9234 11.3851 49.6827 9.86511 49.4197 8.34512C49.2726 7.49375 49.2592 7.49375 48.4034 7.48929C47.6545 7.48929 46.9101 7.48929 46.0989 7.48929C46.2638 8.09551 46.402 8.55908 46.5134 9.02711C47.1776 11.8487 47.8417 14.6747 48.4836 17.5007C48.5638 17.8484 48.7199 17.9375 49.0408 17.9286C49.6648 17.9108 50.2889 17.9063 50.9129 17.9286C51.2873 17.942 51.4746 17.8217 51.5682 17.4428C51.8222 16.422 52.1031 15.4102 52.3883 14.3983C52.6023 13.6406 52.8341 12.8917 53.0569 12.134C53.2664 12.3836 53.3734 12.6287 53.4447 12.8873C53.8727 14.4028 54.3006 15.9228 54.7107 17.4428C54.7998 17.7682 54.9335 17.942 55.3035 17.9242C55.9855 17.8974 56.6675 17.9331 57.3495 17.9019C57.4877 17.8974 57.7061 17.728 57.7373 17.5988C58.0537 16.3329 58.3301 15.058 58.6288 13.7877C59.0478 12.0136 59.4757 10.2395 59.8991 8.46548C59.9482 8.45656 59.9972 8.44319 60.0507 8.43427C60.2958 9.12072 60.541 9.80717 60.7817 10.4936C61.6019 12.8249 62.4265 15.1606 63.2422 17.4963C63.5453 18.3565 63.0149 19.2703 62.1279 19.4352C61.7891 19.4977 61.4459 19.5289 61.067 19.5779C61.067 20.2866 61.0447 20.9686 61.0848 21.6417C61.0937 21.7799 61.3211 21.9938 61.4726 22.0206C63.4161 22.3682 65.0519 21.9448 65.832 19.7829C66.9553 16.6716 68.0429 13.547 69.1483 10.4268C69.4782 9.49515 69.7991 8.56354 70.1513 7.5517C69.8571 7.52495 69.652 7.48929 69.447 7.48929C68.7828 7.48038 68.1187 7.51604 67.459 7.47147L67.4679 7.47592Z" fill="#1E2B3B" />
<path d="M127.964 10.578C127.942 9.69101 127.706 8.79061 126.993 8.13982C125.892 7.14135 123.913 7.02992 122.642 7.90803C122.286 8.15319 121.974 8.46967 121.608 8.77723C120.993 7.70745 120.075 7.34194 118.907 7.33748C117.761 7.33302 116.852 7.78768 115.987 8.61677C115.956 8.39835 115.92 8.29137 115.929 8.18439C115.974 7.60493 115.689 7.45337 115.154 7.48458C114.534 7.52469 113.906 7.51132 113.282 7.48458C112.84 7.46675 112.675 7.59601 112.68 8.07742C112.711 11.1575 112.707 14.2376 112.715 17.3177C112.715 17.5049 112.715 17.6921 112.715 17.8838H116.041C116.041 17.652 116.041 17.4648 116.041 17.2731C116.041 15.2673 116.023 13.257 116.059 11.2511C116.063 10.9436 116.223 10.5602 116.442 10.3463C116.937 9.86039 117.587 9.86485 118.194 10.11C118.72 10.3195 118.711 10.8366 118.711 11.3135C118.711 13.3417 118.711 15.3698 118.711 17.3935C118.711 17.6431 118.648 17.9239 119.054 17.9239C120.021 17.9195 120.993 17.9239 121.996 17.9239C122.009 17.7456 122.031 17.6119 122.031 17.4826C122.031 15.3965 122.027 13.3105 122.023 11.2244C122.023 10.5914 122.263 10.2393 122.874 10.0744C123.908 9.79353 124.746 10.0744 124.693 11.3492C124.684 11.581 124.693 11.8172 124.693 12.049C124.693 13.8231 124.688 15.5971 124.71 17.3712C124.71 17.5539 124.871 17.8883 124.969 17.8927C125.972 17.9328 126.975 17.915 127.987 17.915C127.987 15.4055 128.031 12.9895 127.964 10.5736V10.578Z" fill="#1E2B3B" />
<path d="M90.5397 4.09756C90.5397 3.8836 90.5709 3.66073 90.5308 3.45569C90.5085 3.33979 90.3614 3.1615 90.2723 3.1615C89.2694 3.13921 88.262 3.14812 87.1966 3.14812V8.14938C86.6261 7.88193 86.1224 7.53871 85.5741 7.40944C83.7377 6.98153 81.9814 7.95771 81.3039 9.73623C80.5595 11.693 80.5773 13.6722 81.2816 15.629C82.0171 17.6794 84.1032 18.6467 86.1001 17.88C86.5548 17.7061 86.9381 17.3362 87.3928 17.0331C87.5532 17.6244 87.9514 17.9201 88.5874 17.9201C89.0153 17.9201 89.4477 17.88 89.8711 17.929C90.4194 17.9914 90.5576 17.7953 90.5576 17.2559C90.5353 12.8698 90.5442 8.48369 90.5442 4.09756H90.5397ZM87.2056 14.0956C87.2279 14.9024 86.9738 15.2501 86.1804 15.4774C85.485 15.6735 84.7361 15.4462 84.4731 14.8266C83.8848 13.4627 83.8937 12.0496 84.4821 10.6901C84.7807 9.99922 85.5117 9.82538 86.4121 10.0839C86.9604 10.2399 87.2145 10.6589 87.21 11.4078C87.21 11.6396 87.2056 11.8758 87.2011 12.1076C87.2011 12.3394 87.2011 12.5756 87.2011 12.8074C87.2011 13.1283 87.1967 13.4493 87.2011 13.7702C87.2011 13.8772 87.2011 13.9842 87.2056 14.0912V14.0956Z" fill="#1E2B3B" />
<path d="M100.337 8.12202C99.41 7.17259 96.9718 6.95417 95.7014 8.13094C95.5989 8.229 95.4741 8.30478 95.2646 8.46524V3.1698H92.0017V17.8838H95.269C95.269 17.71 95.269 17.5763 95.269 17.4425C95.269 15.2985 95.2512 13.1545 95.2869 11.0149C95.2913 10.7252 95.5053 10.3062 95.7415 10.1769C97.0208 9.486 98.1485 10.1769 98.1574 11.6077C98.1574 11.8395 98.1574 12.0758 98.1574 12.3076C98.1574 14.0014 98.1485 15.6997 98.1708 17.3935C98.1708 17.5718 98.3402 17.8972 98.4427 17.9017C99.4323 17.9418 100.422 17.9239 101.407 17.9239C101.443 17.7902 101.483 17.7189 101.483 17.6431C101.487 15.401 101.536 13.1634 101.474 10.9213C101.443 9.88717 101.104 8.90653 100.333 8.11756L100.337 8.12202Z" fill="#1E2B3B" />
<path d="M78.977 8.15425C77.7334 6.95965 75.3487 7.03989 74.0694 8.29689C73.9758 8.38604 73.8822 8.47518 73.695 8.64902C73.6504 8.38604 73.5969 8.25231 73.6147 8.1275C73.6905 7.57478 73.4008 7.4678 72.9283 7.49009C72.4246 7.51683 71.9164 7.49009 71.4083 7.49009C70.7843 7.49009 70.4737 7.80805 70.4767 8.44398C70.4767 8.54205 70.4767 8.64011 70.4767 8.73817C70.4722 11.6043 70.4722 14.4704 70.45 17.3366C70.45 17.769 70.5391 17.974 71.0339 17.9428C71.7515 17.8982 72.4781 17.9027 73.1957 17.9428C73.6638 17.9651 73.7886 17.8224 73.7797 17.3544C73.7529 15.2862 73.744 13.2224 73.793 11.1541C73.8019 10.8243 74.0293 10.3696 74.3012 10.2047C75.4735 9.48702 76.6324 10.169 76.6547 11.533C76.6547 11.5731 76.6547 11.6088 76.6547 11.6489C76.6547 13.2268 76.6636 14.8048 76.6636 16.3871C76.6636 16.8864 76.6636 17.3856 76.6636 17.8938H79.9309C79.9577 17.8002 79.9844 17.7467 79.9844 17.6887C79.9844 15.4466 80.0201 13.2045 79.9666 10.9624C79.9398 9.9506 79.766 8.92093 78.9815 8.16316L78.977 8.15425Z" fill="#1E2B3B" />
<path d="M111.454 13.9889C111.44 12.879 111.44 11.7691 111.4 10.6592C111.338 8.88068 110.099 7.7886 108.499 7.46767C106.97 7.1601 105.436 7.24925 104.019 8.06051C103.274 8.48396 102.289 9.63844 102.53 10.6235H105.695C105.904 9.78554 106.323 9.45569 107.05 9.52701C107.776 9.59833 108.16 10.1689 108.151 11.1183C108.151 11.4482 108.035 11.5641 107.705 11.5641C107.063 11.5596 106.395 11.4838 105.784 11.6265C104.946 11.8181 104.037 12.0365 103.35 12.5135C101.812 13.5877 101.826 16.0037 103.243 17.2607C104.184 18.0898 105.294 18.2903 106.462 18.0586C107.103 17.9337 107.701 17.5905 108.245 17.3766C108.454 17.5549 108.668 17.8892 108.895 17.9025C109.863 17.965 110.834 17.9293 111.81 17.9293C111.677 17.2295 111.512 16.6099 111.454 15.9814C111.396 15.3261 111.449 14.6575 111.44 13.9978L111.454 13.9889ZM106.898 15.87C106.243 15.9814 105.793 15.7719 105.606 15.2771C105.396 14.7333 105.579 13.873 106.078 13.6858C106.653 13.4718 107.304 13.4406 107.924 13.3649C107.986 13.356 108.12 13.5655 108.146 13.6858C108.187 13.873 108.155 14.0691 108.155 14.3455C108.28 15.3707 107.705 15.7318 106.898 15.87Z" fill="#1E2B3B" />
<path d="M70.1644 27.0634C70.0886 27.1169 70.0039 27.1526 69.8523 27.2373C69.9326 26.3859 69.4244 26.3859 68.8539 26.4171C68.3279 26.4439 67.8019 26.4439 67.2759 26.4171C66.7945 26.3904 66.6162 26.5107 66.6207 27.0634C66.6474 31.5031 66.6385 35.9427 66.6207 40.3867C66.6207 40.8236 66.7722 40.9306 67.1511 40.9261C67.9312 40.9216 68.7112 40.9172 69.4868 40.9395C69.8835 40.9484 70.044 40.8147 70.0217 40.3957C69.9905 39.678 70.0039 38.9559 70.0039 38.2338C70.0039 37.5786 70.0039 36.9233 70.0039 36.1522C70.356 36.4018 70.5834 36.6247 70.8597 36.7495C72.6204 37.5474 74.6753 36.9055 75.598 35.1983C76.7435 33.0765 76.7525 30.8211 75.8788 28.6458C74.8848 26.172 72.3574 25.5435 70.1733 27.0679L70.1644 27.0634ZM72.8477 33.4822C72.5892 34.2488 71.9518 34.5921 71.145 34.445C70.3025 34.289 70.0083 33.9235 70.0039 33.0364C70.0039 32.5684 70.0039 32.1004 70.0039 31.6323H69.9994C69.9994 31.1063 69.9861 30.5804 69.9994 30.0544C70.0173 29.3813 70.2446 29.1228 70.9087 28.9712C72.0365 28.7172 72.6694 29.0782 72.9547 30.2059C73.2311 31.3025 73.2088 32.4035 72.8433 33.4822H72.8477Z" fill="#1E2B3B" />
<path d="M97.5019 32.6139C97.4752 31.5218 97.493 30.4298 97.4306 29.3421C97.3727 28.2946 96.8066 27.5101 95.9329 26.9708C94.3906 26.0258 92.7235 26.0837 91.0787 26.5741C90.4502 26.7613 89.8574 27.1803 89.3403 27.6037C88.7653 28.0718 88.5425 28.7671 88.5157 29.5561H91.7429C91.9658 28.8206 92.2243 28.5398 92.7369 28.4596C93.566 28.3348 94.1187 28.8117 94.19 29.7166C94.2524 30.4431 94.2168 30.4832 93.4991 30.4788C92.3669 30.4699 91.2704 30.5456 90.1783 30.9691C88.587 31.5887 88.0967 33.3226 88.333 34.4905C88.7297 36.4518 90.6776 37.3165 92.4739 36.9911C93.1336 36.8708 93.7577 36.5231 94.3728 36.2913C94.4931 36.4428 94.6358 36.7994 94.7962 36.8039C95.8348 36.8529 96.8734 36.8306 98.0012 36.8306C97.3236 35.4221 97.542 34.0002 97.5064 32.6094L97.5019 32.6139ZM94.1677 33.9066C94.1098 34.4415 93.5036 34.7936 92.7191 34.8292C92.1396 34.856 91.7384 34.593 91.6047 34.1071C91.4532 33.5589 91.7251 32.7298 92.2288 32.556C92.8127 32.3554 93.4501 32.2974 94.1811 32.1548C94.1811 32.8724 94.2212 33.394 94.1677 33.9066Z" fill="#1E2B3B" />
<path d="M65.3103 29.4353C65.2746 28.3432 64.6996 27.5142 63.7769 26.957C62.2124 26.0165 60.5319 26.0744 58.8693 26.587C57.6658 26.957 56.7386 27.7014 56.4177 29.0208C56.3196 29.4264 56.3954 29.6047 56.8411 29.5958C57.7549 29.578 58.6687 29.5913 59.6003 29.5913C59.8722 28.6374 60.4249 28.2764 61.1961 28.4903C61.9048 28.6865 62.2034 29.4353 61.9583 30.4873C61.5125 30.4873 61.049 30.4962 60.5854 30.4873C59.636 30.4694 58.7489 30.7012 57.8663 31.0534C55.9229 31.8379 55.7268 34.6015 56.8188 35.8674C58.058 37.3072 60.7414 37.4275 61.9137 36.3399C61.9984 36.2597 62.1366 36.2374 62.1633 36.224C62.3728 36.4692 62.5199 36.8124 62.6893 36.8213C63.7145 36.8703 64.7397 36.848 65.6758 36.848C65.5644 35.9655 65.3994 35.1275 65.3682 34.2895C65.3103 32.6759 65.3549 31.0578 65.3058 29.4398L65.3103 29.4353ZM62.0563 33.6431C62.0385 34.3118 61.6373 34.6728 60.7815 34.8065C60.1084 34.9091 59.6582 34.6773 59.4755 34.129C59.2927 33.5718 59.5691 32.7249 60.1129 32.5377C60.6968 32.3371 61.3342 32.297 62.0563 32.1677C62.0563 32.7962 62.0653 33.2197 62.0563 33.6431Z" fill="#1E2B3B" />
<path d="M53.2039 33.1794C53.0568 33.1839 52.8518 33.3845 52.7894 33.5405C52.5219 34.1957 52.0138 34.5345 51.2917 34.4676C50.5829 34.4052 50.0614 33.9729 50.0213 33.2552C49.9634 32.2122 49.9544 31.1558 50.0079 30.1127C50.048 29.3416 50.5428 28.9538 51.3229 28.9137C52.1208 28.8735 52.571 29.2079 52.7448 29.9834C52.8072 30.2732 52.8874 30.4916 53.2574 30.4871C54.0375 30.4738 54.8175 30.5005 55.5976 30.4738C55.7135 30.4738 55.9319 30.2509 55.9185 30.1528C55.8026 29.2391 55.5886 28.3788 54.9691 27.6299C53.663 26.052 50.8103 25.994 49.3304 26.6671C48.3943 27.0906 47.6722 27.728 47.2042 28.6596C46.3751 30.2999 46.4152 32.0116 46.8164 33.7322C47.0482 34.7262 47.6054 35.5597 48.4389 36.157C49.999 37.2714 51.724 37.2892 53.4624 36.7409C54.9245 36.2818 55.972 34.7039 55.9185 33.1661C54.9869 33.1661 54.0954 33.1482 53.2039 33.1839V33.1794Z" fill="#1E2B3B" />
<path d="M87.4594 34.4714C86.3628 34.4625 86.1266 34.2441 86.1177 33.1342C86.1043 31.7925 86.1221 30.4464 86.1088 29.1047C86.1088 28.7704 86.2157 28.6367 86.5411 28.6634C86.6971 28.6768 86.8532 28.6634 87.0092 28.6634C87.5797 28.6634 87.8635 28.3796 87.8605 27.812C87.8605 27.7719 87.8605 27.7363 87.8605 27.6961C87.8516 26.4837 87.8516 26.4659 86.6169 26.4347C86.1979 26.4213 86.0865 26.2698 86.1088 25.873C86.14 25.2223 86.1177 24.567 86.1177 23.8672C85.1058 23.8672 84.1564 23.8716 83.2025 23.8672C82.8459 23.8672 82.8593 24.0856 82.8593 24.3352C82.8637 25.0083 82.8593 25.6814 82.8593 26.2876C82.4225 26.6486 81.736 26.0781 81.5399 26.7155C81.4062 27.1612 81.4819 27.6828 81.5131 28.1686C81.58 29.1448 82.4225 28.3647 82.8682 28.8684C82.8682 30.2057 82.8548 31.6633 82.8771 33.1164C82.886 33.7761 82.9261 34.4402 83.0331 35.091C83.1535 35.8176 83.5636 36.4194 84.2455 36.7091C85.3733 37.1905 86.559 37.1905 87.7357 36.8562C87.865 36.8205 88.0344 36.6333 88.0388 36.5085C88.07 35.8533 88.0522 35.198 88.0522 34.5116C87.8026 34.4982 87.6332 34.4848 87.4638 34.4804L87.4594 34.4714Z" fill="#1E2B3B" />
<path d="M98.9863 22.1075V36.8171H102.196V22.1075H98.9863Z" fill="#1E2B3B" />
<path d="M80.5281 26.4483C79.7703 26.4082 79.0081 26.4483 78.2503 26.4171C77.7555 26.3993 77.6263 26.5954 77.6307 27.0679C77.653 30.1257 77.6486 33.188 77.653 36.2458C77.653 36.433 77.6708 36.6202 77.6798 36.8253H80.9649C80.9649 33.4421 80.9694 30.1302 80.9471 26.8183C80.9471 26.689 80.6796 26.4528 80.5281 26.4483Z" fill="#1E2B3B" />
<path d="M79.3068 22.0762C78.1523 22.0762 77.497 22.6601 77.5015 23.672C77.5059 24.6615 78.2058 25.2722 79.329 25.2677C80.3721 25.2677 81.1299 24.5947 81.1254 23.6809C81.1209 22.6869 80.4256 22.0717 79.3068 22.0762Z" fill="#1E2B3B" />
</g>
</g>
<defs>
<clipPath id="svg-428294190--2019170361-clip0_2141_336892">
<rect fill="white" height="40.9372" width="128" />
</clipPath>
<clipPath id="svg-428294190--2019170361-clip1_2141_336892">
<rect fill="white" height="40.9372" width="128" />
</clipPath>
</defs>
</svg>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-54efa254">
<style>
	.IID-custom-text-54efa254{max-width:200px;color:#222;text-align:left}.IID-custom-text-54efa254:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-custom-text-54efa254{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p><b>57%</b> Increase in employee satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</button>
</div>
</div>
<div class="custom-itl itl custom-itl--switch-slider-card custom-itl--markup-carousel-switcher--new custom-itl--progress-bar IID-custom-itl-c389f9c5 CID-custom-itl-6a582420">
<style>
	.IID-custom-itl-c389f9c5{z-index:1;margin:0 0 20px}@media (max-width: 1229px){.IID-custom-itl-c389f9c5{margin:0 0 12px}}
	.custom-itl.IID-custom-itl-c389f9c5 .custom-itl__title{color:#6f6f6f;font-size:30px;line-height:.96;font-weight:500}.custom-itl.IID-custom-itl-c389f9c5 .custom-itl__chevron{color:#6f6f6f}.custom-itl.IID-custom-itl-c389f9c5.custom-itl--active .custom-itl__title{color:#222}@media (max-width: 1229px){.custom-itl.IID-custom-itl-c389f9c5 .custom-itl__title{font-size:24px}}@media (max-width: 767px){.custom-itl.IID-custom-itl-c389f9c5 .custom-itl__title{font-size:20px}}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="submitBtBanner">
<button class="custom-itl__link custom-itl__link--type--link" title="Education" aria-label="Education" data-automation-id="Education" data-dl-additional-info="Solutions for every indus" data-anchor="#mslide3">
<div class="custom-itl__header">
<div class="custom-itl__image-block">
</div>
<div class="custom-itl__text">
<div class="custom-itl__title">Education</div>
</div>
<div class="custom-itl__chevron">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--353714479-591330276-title" role="img" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--353714479-591330276" />
</svg>
</div>
</div>
<div class="custom-itl__content">
<div class="custom-itl__parsys">
<div class="custom-text appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-custom-text-108c501e CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-108c501e{max-width:344px;color:#222;text-align:left;transition:opacity 300ms;opacity:0;margin:20px 0 16px}.IID-custom-text-108c501e:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-108c501e.appearance-transition--animated{opacity:1}@media (min-width: 1230px){.IID-custom-text-108c501e{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-custom-text-108c501e{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-custom-text-108c501e{max-width:100%}}
	.IID-custom-text-108c501e{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote" data-content-wrapper="true">
<div>Bring students, faculty, and campus communities together from anywhere, at any time.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right IID-cta-v2-dca30cf0 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-dca30cf0{position:relative;margin:0 0 32px -12px}@media (min-width: 1488px){.IID-cta-v2-dca30cf0{margin-left:-12px}}@media (min-width: 1230px){.IID-cta-v2-dca30cf0{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-cta-v2-dca30cf0{visibility:hidden;position:absolute;top:-99999px}}
	.IID-cta-v2-dca30cf0 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-dca30cf0 .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-dca30cf0 .cta-v2__el{border-radius:16px}.IID-cta-v2-dca30cf0 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-dca30cf0 .cta-v2__el:hover:before,.IID-cta-v2-dca30cf0 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-dca30cf0 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="submitBtBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/industry-solutions/education-cloud-phone-systems.html" data-active-dl-name="Education - Learn more" tabindex="0" title="Learn more" target="_self" data-dl-element="button" data-dl-name="Education - Learn more" data-dl-additional-info="Solutions for every indus" data-automation-id="Education - Learn more" data-cta-animated="cta-animated">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
<div class="background background__image__mobile--enabled background--back-position-x--center background--back-position-y--center background--back-size--cover background--alignment--fullwidth appearance-animation appearance-animation--zoom-in appearance-animation--method--repeat CID-background-79490109 IID-background-35017406">
<style>
	.IID-background-35017406.appearance-animation--animated{animation-name:zoom-in;animation-duration:600ms}.IID-background-35017406{margin:0 0 96px;border-radius:20px;min-height:463px;overflow:hidden}@media (min-width: 1488px){.IID-background-35017406{border-radius:20px}}@media (min-width: 1230px){.IID-background-35017406{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-background-35017406{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-background-35017406{border-radius:16px}.IID-background-35017406{min-height:380px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/education-img.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/education-img-jpg-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div data-castom-marks="1" class="grid CID-grid-1659f761 IID-grid-aa12d631">
<style>
	.IID-grid-aa12d631{z-index:1}
	
</style>
<div class="grid__parsys         ">
<div class="grid-item appearance-animation appearance-animation--fade-in-up appearance-animation--method--repeat IID-grid-item-ff60fcc7 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-ff60fcc7{z-index:1;position:absolute;bottom:-16px;left:-32px}.IID-grid-item-ff60fcc7.appearance-animation--animated{animation-name:fade-in-up;animation-duration:1200ms;animation-delay:200ms}@media (min-width: 1230px){.IID-grid-item-ff60fcc7{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-grid-item-ff60fcc7{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px){.IID-grid-item-ff60fcc7{bottom:-20px;left:-16px}}@media (max-width: 767px){.IID-grid-item-ff60fcc7{bottom:28px;left:-10px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-background-a121549 CID-background-79490109">
<style>
	.IID-background-a121549{background-color:#fff;padding:28px 48px 28px 28px;border-radius:20px}@media (min-width: 1488px){.IID-background-a121549{padding-left:28px;padding-right:48px}.IID-background-a121549{border-radius:20px}}
	.IID-background-a121549 > .background__layers > .background__layer--back .background__color{background-color:transparent}
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image IID-image-25e04f1e CID-image-b4fec0a0">
<style>.IID-image-25e04f1e{max-width:128px;margin:0 0 24px}.IID-image-25e04f1e:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-1474015582-186155206-title" class="image__img" id="svg-1474015582-186155206" role="img" viewBox="0 0 128.03 18.3">
<title id="svg-1474015582-186155206-title">Teacher college Columbia University logo</title>
<g>
<rect fill="none" height="18.28" width="128.01" x="0.01" y="0.02" />
<g>
<path d="M127.86,8.94a3.85,3.85,0,0,0-.48,0H.46c-.15,0-.31.14-.47.21a1.4,1.4,0,0,0,.46.16H127.56a.71.71,0,0,0,.29,0c.05,0,.1-.13.15-.2S127.91,8.94,127.86,8.94Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M83.74,5.88a4.51,4.51,0,0,0,2.22,0,2.9,2.9,0,0,0,2.22-2.76,2.86,2.86,0,0,0-2-2.92,4.17,4.17,0,0,0-2-.15A2.89,2.89,0,0,0,81.56,3,2.84,2.84,0,0,0,83.74,5.88Zm1.09-4.37A1.42,1.42,0,0,1,86.39,3a1.53,1.53,0,1,1-3.06.09A1.42,1.42,0,0,1,84.83,1.51Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M36.85,3.66h2.67V5.92h1.7V.13H39.5V2.22H36.82V.13H35.11V5.92h1.74Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M54.4,3.67a1,1,0,0,1,1.2.56c.26.49.47,1,.72,1.49,0,.08.13.21.2.21.57,0,1.14,0,1.79,0C57.78,5,57.61,4,56.8,3.38a4.1,4.1,0,0,0,.61-.56A1.69,1.69,0,0,0,56.31.21,33.51,33.51,0,0,0,52.68.08V5.92h1.73C54.4,5.16,54.4,4.42,54.4,3.67Zm0-2.48c.35,0,.69,0,1,.1a.59.59,0,0,1,.49.69.55.55,0,0,1-.53.61c-.31.05-.63,0-1,.07C54.41,2.14,54.41,1.69,54.41,1.19Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M116.49,5.92a5.94,5.94,0,0,0,2.9-.2c.58-.17.58-.18.58-.79V3a2.64,2.64,0,0,0,0-.28h-2.27V3.91h.74v.72c-.31,0-.61,0-.9,0a1.65,1.65,0,0,1-1.65-1.48,1.67,1.67,0,0,1,1.35-1.83,4.63,4.63,0,0,1,1.39,0,7.76,7.76,0,0,1,1.24.4c0-.36,0-.72,0-1.08a.33.33,0,0,0-.19-.26,6.17,6.17,0,0,0-2.89-.33,2.77,2.77,0,0,0-2.54,2A2.89,2.89,0,0,0,116.49,5.92Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M17.28,5.94c.34,0,.76.12,1,0s.32-.6.45-.92a.32.32,0,0,1,.35-.24h1.31c.32,0,.72-.1.94,0s.29.57.42.87c0,0,0,.1.05.12s.17.16.26.17H23.6a.32.32,0,0,0,0-.07Q22.38,3.1,21.14.31a.4.4,0,0,0-.29-.17c-.48,0-1,0-1.44,0a.35.35,0,0,0-.4.26c-.77,1.77-1.56,3.53-2.33,5.29a2.91,2.91,0,0,0-.1.28Zm2.84-4.35L21,3.74H19.25C19.54,3,19.81,2.34,20.12,1.59Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M13.87,4.77H11.26V3.5h2.42V2.35H11.26V1.24h2.53V.12H9.5V5.9h4.36C13.87,5.53,13.87,5.17,13.87,4.77Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M111.1,4.78h-.36c-.67,0-1.35,0-2,0-.09,0-.26-.08-.26-.13,0-.37,0-.74,0-1.15h2.45V2.34h-2.43V1.24H111V.11h-4.29V5.9h4.37Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M49.26,4.78h-2.6V3.5h2.41V2.35H46.65V1.27h2.52V.14H44.9V5.93h4.35C49.26,5.55,49.26,5.18,49.26,4.78Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M127.9,4.77h-2.59V3.51h2.4V2.36H125.3V1.26h2.53V.13h-4.26V5.92h4.34C127.9,5.55,127.9,5.17,127.9,4.77Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M27.3,5.42a4.63,4.63,0,0,0,4.29.13.3.3,0,0,0,.12-.22c0-.4,0-.81,0-1.27l-.49.26a3,3,0,0,1-2,.29,1.68,1.68,0,0,1-1.35-1.48A1.59,1.59,0,0,1,29,1.55a2.44,2.44,0,0,1,1.93,0c.26.11.51.24.79.38,0-.47,0-.9,0-1.33A.38.38,0,0,0,31.49.4a5.8,5.8,0,0,0-3-.29A2.85,2.85,0,0,0,26.2,2.23,3,3,0,0,0,27.3,5.42Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M74.86,5.74a4.74,4.74,0,0,0,3.64-.15.31.31,0,0,0,.18-.19c0-.43,0-.87,0-1.33-.21.11-.36.2-.53.27a3,3,0,0,1-2,.28,1.68,1.68,0,0,1-1.35-1.44,1.55,1.55,0,0,1,1-1.6A2.42,2.42,0,0,1,77,1.41a11.79,11.79,0,0,1,1.63.46c0-.38,0-.8,0-1.23a.27.27,0,0,0-.15-.22,6,6,0,0,0-2.7-.36,2.83,2.83,0,0,0-2.7,2.81A2.77,2.77,0,0,0,74.86,5.74Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M61.81,3.1a7.77,7.77,0,0,0,.9.48,4.38,4.38,0,0,1,.67.37.57.57,0,0,1,.19.45.61.61,0,0,1-.4.33,2,2,0,0,1-1.33-.21l-.73-.37c0,.44,0,.83,0,1.22a.35.35,0,0,0,.19.24,4.56,4.56,0,0,0,2.5.33,1.72,1.72,0,0,0,1.51-2.12,1.7,1.7,0,0,0-.92-1.06C63.94,2.5,63.48,2.27,63,2c-.2-.1-.35-.29-.24-.49a.63.63,0,0,1,.45-.32,5.14,5.14,0,0,1,1.17.22,3.89,3.89,0,0,1,.72.38c0-.4,0-.75,0-1.1A.47.47,0,0,0,64.9.38,3.69,3.69,0,0,0,62.39.09a1.59,1.59,0,0,0-1.28,1.24A1.56,1.56,0,0,0,61.81,3.1Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M1.68,1.51c.73,0,.73,0,.73.71V5.58c0,.12,0,.22,0,.35H4.16V1.51h2.1V.14h-6V1.51Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M95.85,4.53H93.18V.13h-1.7V5.94h4.37Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M103.48,4.54h-2.67V.12H99.1v5.8h4.38Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M37.64,12.63l.29-.1a7,7,0,0,0-1.2-.06s-.12.08-.15.13c-.52,1.08-1,2.17-1.55,3.26-.21.42-.43.83-.69,1.33-.76-1.62-1.47-3.16-2.19-4.71H30.91a.3.3,0,0,0,.18.13c.48.13.61.25.59.72-.06,1.37-.15,2.73-.24,4.09a.5.5,0,0,1-.47.52,1.34,1.34,0,0,0-.26.09s0,0,0,.06h1.79a.3.3,0,0,0-.21-.13c-.47-.12-.5-.14-.49-.63,0-.82,0-1.65,0-2.47,0-.43,0-.86.07-1.29H32c.71,1.53,1.41,3.06,2.13,4.63.78-1.56,1.53-3.08,2.28-4.6l.1,0c0,1.34,0,2.68,0,4,0,.1-.18.2-.29.28a1.4,1.4,0,0,1-.35.1s0,0,0,.06h2a.2.2,0,0,0-.12-.11c-.51-.15-.54-.15-.55-.69,0-1.37,0-2.73,0-4.1C37.15,12.87,37.33,12.7,37.64,12.63Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M101.57,15.35l.32-.18a1.45,1.45,0,0,0,.76-1.47,1.28,1.28,0,0,0-1.14-1.13,15.27,15.27,0,0,0-1.91-.09c-.32,0-.65,0-1,0a.37.37,0,0,1,0,.11c.58,0,.71.31.71.76,0,1.29,0,2.58,0,3.88,0,.57-.06.57-.6.73a1.53,1.53,0,0,0-.21.1h2.17a.21.21,0,0,0-.14-.11c-.49-.15-.53-.2-.55-.71s0-.79,0-1.19c0-.56.24-.72.77-.51a.67.67,0,0,1,.29.24c.17.22.3.46.47.69a12,12,0,0,0,1,1.26,1.72,1.72,0,0,0,1.67.38A5.37,5.37,0,0,1,101.57,15.35Zm-.77,0c-.84.06-.84.07-.84-.76V14h0c0-.35,0-.7,0-1.06,0-.21.09-.29.28-.31a1.48,1.48,0,0,1,1.42.47,1.53,1.53,0,0,1,.18,1.58A1.08,1.08,0,0,1,100.8,15.34Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M43.88,15.12l-.4-.14.24-.17a1.19,1.19,0,0,0-.37-2.26,10.73,10.73,0,0,0-2.83,0s0,0-.06.06.13.08.19.08a.49.49,0,0,1,.5.54c0,1.4,0,2.79,0,4.19a.5.5,0,0,1-.51.57,1.16,1.16,0,0,0-.27.11,1.06,1.06,0,0,0,.19.05c.74,0,1.47.05,2.2,0a4,4,0,0,0,1.37-.36,1.35,1.35,0,0,0,.69-1.44A1.33,1.33,0,0,0,43.88,15.12Zm-1.76-2.48c.74-.08,1.66.19,1.58,1.36a.94.94,0,0,1-.74.92c-.21.05-.42.06-.63.1-.49,0-.49,0-.49-.51s0-1,0-1.53A.29.29,0,0,1,42.12,12.64ZM44,17.26a1.41,1.41,0,0,1-1.9.55.92.92,0,0,1-.26-.58,6.74,6.74,0,0,1,0-.9h0c0-.29,0-.58,0-.87s.05-.29.25-.28a7,7,0,0,1,.92.06A1.42,1.42,0,0,1,44,17.26Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M10.69,12.35a3,3,0,0,0-3.08,2.92,2.86,2.86,0,0,0,3,3,2.91,2.91,0,0,0,3-2.93A2.78,2.78,0,0,0,10.69,12.35Zm2.05,4.14A1.92,1.92,0,0,1,11,18.05a2,2,0,0,1-2.1-1A3.67,3.67,0,0,1,8.54,14a1.94,1.94,0,0,1,1.84-1.44,2,2,0,0,1,2,1,4,4,0,0,1,.55,2C12.85,15.84,12.82,16.17,12.74,16.49Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M75.52,12.59c.54.13.58.13.6.69,0,1.17,0,2.35.06,3.52l-.06.07c-.11-.12-.22-.22-.32-.34-.61-.66-1.22-1.32-1.81-2s-1-1.12-1.45-1.71a.67.67,0,0,0-.71-.36,6.3,6.3,0,0,1-.87,0,.33.33,0,0,0,.15.12c.63.11.78.33.78,1,0,1.24,0,2.47,0,3.72,0,.51,0,.53-.54.67a.88.88,0,0,0-.21.1H73a.22.22,0,0,0-.14-.1c-.57-.14-.62-.13-.63-.73,0-1.19,0-2.39,0-3.59a1.62,1.62,0,0,1,.06-.19l4.26,4.76v-.31c0-1.47,0-3,0-4.42,0-.51.11-.9.7-1,0,0,0,0,0-.05H75.36A.22.22,0,0,0,75.52,12.59Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M26.66,12.53l.2.06c.51.12.58.13.6.67a29.15,29.15,0,0,1,0,3.1A1.61,1.61,0,0,1,25.74,18,1.55,1.55,0,0,1,24,16.42c-.1-1.11,0-2.24,0-3.36a.44.44,0,0,1,.44-.46,2.29,2.29,0,0,0,.28-.08.06.06,0,0,1,0,0H22.53c.73.34.73.34.73,1.18V14c0,.72,0,1.45,0,2.18a1.83,1.83,0,0,0,1.54,2,4.49,4.49,0,0,0,.73.06,2,2,0,0,0,2.2-2.07c.05-.94,0-1.88.06-2.82,0-.56.05-.59.57-.76a1.46,1.46,0,0,0,.21-.11H26.66S26.66,12.51,26.66,12.53Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M67,12.54a1.43,1.43,0,0,0,.28.07.49.49,0,0,1,.5.51c0,1.11.08,2.22,0,3.33A1.57,1.57,0,0,1,66.07,18a1.55,1.55,0,0,1-1.77-1.43c-.11-1.11-.06-2.24-.07-3.36a.51.51,0,0,1,.53-.58,1,1,0,0,0,.2-.08s0,0,0,0H62.85s0,.07,0,.08a.67.67,0,0,0,.15.06c.44.12.49.18.52.63,0,.13,0,.26,0,.38,0,1,0,1.94.07,2.91a1.69,1.69,0,0,0,1.43,1.62,3.27,3.27,0,0,0,.76.08A2,2,0,0,0,68,16.83a5.19,5.19,0,0,0,.14-1.11c0-.72,0-1.45,0-2.18,0-.47,0-.94.67-1,0,0,0,0,0-.08H67A.23.23,0,0,1,67,12.54Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M96.13,17.12A1.19,1.19,0,0,1,95,17.9c-.4,0-.81,0-1.21,0s-.55-.17-.57-.58c0-.59,0-1.17,0-1.76,0-.19.07-.28.26-.28h.86a.64.64,0,0,1,.72.57c0,.06.06.11.13.23V14.35a.33.33,0,0,0-.14.18c-.15.46-.21.5-.68.51h-.86c-.21,0-.29-.08-.28-.28,0-.6,0-1.2,0-1.79,0-.26.14-.35.35-.34.43,0,.85,0,1.28.06a.84.84,0,0,1,.75.61,1.51,1.51,0,0,0,.11.22l.09,0c0-.34-.07-.68-.1-1h-3.8a.34.34,0,0,0,.22.13.48.48,0,0,1,.42.49c0,1.38,0,2.76,0,4.13,0,.61-.06.61-.65.74l-.19.06a.13.13,0,0,1,0,.06l.08,0h4a.34.34,0,0,0,.18,0,1.89,1.89,0,0,0,.26-1.17A1.83,1.83,0,0,1,96.13,17.12Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M56.09,17.08l-1.5-4.35c0-.13-.1-.25-.14-.37-.44.15-.46.51-.58.84-.51,1.37-1.06,2.72-1.58,4.08-.14.37-.32.67-.77.7,0,0-.08,0-.17.1h1.74a.39.39,0,0,0-.2-.12c-.42-.1-.44-.13-.3-.56s.31-.88.45-1.33c.06-.21.17-.26.37-.26h1.31c.24,0,.34.08.4.31.11.39.25.77.37,1.15.17.53.17.53-.36.72,0,0,0,0-.13.09h2l.06-.09C56.39,18,56.25,17.55,56.09,17.08Zm-2.87-1.52.83-2.25h.09c.25.74.5,1.47.76,2.26Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M5.43,16.93a2.27,2.27,0,0,1-3.61.45A3,3,0,0,1,1,14.88a2.38,2.38,0,0,1,2.47-2.37,1.7,1.7,0,0,1,1.88,1.17.28.28,0,0,0,.07.09l.08,0c0-.37-.08-.74-.13-1.1a.24.24,0,0,0-.15-.13,5.85,5.85,0,0,0-2.82,0,2.87,2.87,0,0,0-2.16,2.7,2.76,2.76,0,0,0,2,2.83,4.69,4.69,0,0,0,2.52,0,1.15,1.15,0,0,0,.81-1.37A2,2,0,0,0,5.43,16.93Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M88.19,12.53a.51.51,0,0,0,.15.07c.52.1.44.16.29.57-.29.76-.6,1.51-.9,2.25-.22.53-.46,1-.71,1.63l-.15-.28c-.49-1.21-1-2.42-1.48-3.64-.16-.4-.15-.4.27-.53,0,0,.09-.06.17-.12H83.91a1.15,1.15,0,0,1,.84.77q1,2.41,1.94,4.83c0,.05.06.1.11.19l.14-.29q1-2.31,2-4.63c.18-.42.4-.78.92-.81,0,0,0,0,0-.07H88.21A.07.07,0,0,0,88.19,12.53Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M126.57,12.61c.52.08.42.21.25.54-.4.76-.82,1.52-1.28,2.36-.41-.81-.78-1.54-1.13-2.28-.23-.47-.22-.48.26-.65a1.17,1.17,0,0,0,.15-.1h-2l-.06.09c.78,0,.94.65,1.21,1.15.19.35.32.72.53,1.06a4,4,0,0,1,.51,2.67c0,.29-.14.48-.46.51a1.57,1.57,0,0,0-.31.08.13.13,0,0,1,0,.06h2.29c-.15-.1-.33-.08-.46-.15s-.34-.21-.35-.34a3.79,3.79,0,0,1,.46-2.86c.29-.4.51-.84.77-1.26s.48-.84,1-.94c0,0,0,0,0-.06h-1.58A.17.17,0,0,0,126.57,12.61Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M117.08,12.48a7.07,7.07,0,0,1-.86-.15c-.09.33-.2.72-.3,1.12l.06,0s.09-.05.1-.09a1.22,1.22,0,0,1,1.33-.73,3.23,3.23,0,0,0,.54,0c.28,0,.37.09.37.37,0,1.2,0,2.41,0,3.62,0,.27,0,.53,0,.8s-.15.53-.51.53a2.41,2.41,0,0,0-.37.07.13.13,0,0,1,0,.06h2.33a.35.35,0,0,1,0-.08c-.59,0-.87-.23-.87-.81,0-1.42,0-2.84,0-4.26,0-.2.08-.3.28-.29.39,0,.79,0,1.18.05a.67.67,0,0,1,.64.57,1.39,1.39,0,0,0,.1.26l.06,0c0-.41.08-.82.11-1.17a4.25,4.25,0,0,1-.76.15Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M108.26,15.13c-.37-.24-.75-.45-1.1-.71a1.07,1.07,0,0,1-.43-1.19.89.89,0,0,1,.78-.7,1.14,1.14,0,0,1,1.17.41,5.35,5.35,0,0,1,.34.6c.19-.72,0-1.1-.69-1.17a3.43,3.43,0,0,0-.64,0,1.49,1.49,0,0,0-1.46,1,1.56,1.56,0,0,0,.64,1.71c.33.24.69.43,1,.66a2.08,2.08,0,0,1,.51.47,1.26,1.26,0,0,1,0,1.38,1.14,1.14,0,0,1-1.26.4,1.66,1.66,0,0,1-1.08-1l-.15-.29-.09,0c0,.21.05.42.07.64a.66.66,0,0,0,.6.68,5.65,5.65,0,0,0,1.36.08,1.45,1.45,0,0,0,1.29-1.28A1.77,1.77,0,0,0,108.26,15.13Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M20.2,17.19a1.13,1.13,0,0,1-1,.72,7.33,7.33,0,0,1-1.05,0c-.49,0-.61-.17-.62-.67,0-.7,0-1.41,0-2.11s0-1.24,0-1.86c0-.45.08-.52.51-.63a1.11,1.11,0,0,0,.19-.09s0,0,0,0H16.06a.13.13,0,0,0,0,.06.83.83,0,0,0,.21.06.51.51,0,0,1,.54.57c0,.31,0,.62,0,.93,0,1,0,2,0,3,0,.71,0,.81-.68.9l-.13.08a1.17,1.17,0,0,0,.16,0h3.75a.33.33,0,0,0,.19-.06c.13-.36.24-.72.36-1.08l-.12,0A1.4,1.4,0,0,0,20.2,17.19Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M113.17,17.1c0-1.22,0-2.45,0-3.68,0-.65,0-.67.65-.85l.1,0a.09.09,0,0,1,0,0h-2.12s0,0,0,.06a1.09,1.09,0,0,0,.24.07.46.46,0,0,1,.47.5c0,.19,0,.38,0,.58,0,.92,0,1.83,0,2.76,0,.36,0,.72,0,1.08a.43.43,0,0,1-.39.43,2,2,0,0,0-.32.1s0,0,0,.05h2.15c-.06-.06-.08-.08-.11-.09C113.18,17.79,113.17,17.79,113.17,17.1Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M48.7,17.12c0-1.25,0-2.5,0-3.74,0-.59,0-.63.6-.79l.13-.05s0,0,0,0H47.3l-.06.08c.65,0,.8.35.79.86,0,1.24,0,2.47,0,3.71,0,.69-.06.78-.65.86l-.17.1h2.25L49.33,18C48.72,17.79,48.7,17.77,48.7,17.12Z" fill="#004a8c" transform="translate(0.01 0.02)" />
<path d="M81.69,12.57l.15-.1h-2.2a.54.54,0,0,1,0,.08.28.28,0,0,0,.12,0,.55.55,0,0,1,.56.63c0,1.41,0,2.81,0,4.22a.45.45,0,0,1-.45.51,1.34,1.34,0,0,0-.26.09s0,0,0,0h2.09c0-.06-.06-.09-.1-.1-.58-.17-.6-.18-.6-.79q0-1.89,0-3.78C81.06,12.78,81.07,12.78,81.69,12.57Z" fill="#004a8c" transform="translate(0.01 0.02)" />
</g>
</g>
</svg>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-25c1f8be">
<style>
	.IID-custom-text-25c1f8be{max-width:200px;color:#222;text-align:left}.IID-custom-text-25c1f8be:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-custom-text-25c1f8be{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p><b>76%</b> Increase in first contact resolution</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</button>
</div>
</div>
<div class="custom-itl itl custom-itl--switch-slider-card custom-itl--markup-carousel-switcher--new custom-itl--progress-bar CID-custom-itl-6a582420 IID-custom-itl-25567e81">
<style>
	.IID-custom-itl-25567e81{z-index:1;margin:0 0 20px}@media (max-width: 1229px){.IID-custom-itl-25567e81{margin:0 0 12px}}
	.custom-itl.IID-custom-itl-25567e81 .custom-itl__title{color:#6f6f6f;font-size:30px;line-height:.96;font-weight:500}.custom-itl.IID-custom-itl-25567e81 .custom-itl__chevron{color:#6f6f6f}.custom-itl.IID-custom-itl-25567e81.custom-itl--active .custom-itl__title{color:#222}@media (max-width: 1229px){.custom-itl.IID-custom-itl-25567e81 .custom-itl__title{font-size:24px}}@media (max-width: 767px){.custom-itl.IID-custom-itl-25567e81 .custom-itl__title{font-size:20px}}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="submitBtBanner">
<button class="custom-itl__link custom-itl__link--type--link" title="Retail" aria-label="Retail" data-automation-id="Retail" data-dl-additional-info="Solutions for every indus" data-anchor="#mslide4">
<div class="custom-itl__header">
<div class="custom-itl__image-block">
</div>
<div class="custom-itl__text">
<div class="custom-itl__title">Retail</div>
</div>
<div class="custom-itl__chevron">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--353714479-591330276-title" role="img" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--353714479-591330276" />
</svg>
</div>
</div>
<div class="custom-itl__content">
<div class="custom-itl__parsys">
<div class="custom-text appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-custom-text-998c54e2 CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-998c54e2{max-width:330px;color:#222;text-align:left;transition:opacity 300ms;opacity:0;margin:20px 0 16px}.IID-custom-text-998c54e2:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-998c54e2.appearance-transition--animated{opacity:1}@media (min-width: 1230px){.IID-custom-text-998c54e2{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-custom-text-998c54e2{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-custom-text-998c54e2{max-width:100%}}
	.IID-custom-text-998c54e2{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote" data-content-wrapper="true">
<div>Create consistent and engaging client experiences that help extend your expertise and grow your client base.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right IID-cta-v2-65a311b4 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-65a311b4{position:relative;margin:0 0 32px -12px}@media (min-width: 1488px){.IID-cta-v2-65a311b4{margin-left:-12px}}@media (min-width: 1230px){.IID-cta-v2-65a311b4{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-cta-v2-65a311b4{visibility:hidden;position:absolute;top:-99999px}}
	.IID-cta-v2-65a311b4 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-65a311b4 .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-65a311b4 .cta-v2__el{border-radius:16px}.IID-cta-v2-65a311b4 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-65a311b4 .cta-v2__el:hover:before,.IID-cta-v2-65a311b4 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-65a311b4 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="submitBtBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/industry-solutions/retail-business-cloud-phone-systems.html" data-active-dl-name="Retail - Learn more" tabindex="0" title="Learn more" target="_self" data-dl-element="button" data-dl-name="Retail - Learn more" data-dl-additional-info="Solutions for every indus" data-automation-id="Retail - Learn more" data-cta-animated="cta-animated">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
<div class="background background__image__mobile--enabled background--back-position-x--center background--back-position-y--center background--back-size--cover background--alignment--fullwidth appearance-animation appearance-animation--zoom-in appearance-animation--method--repeat CID-background-79490109 IID-background-edfa84c2">
<style>
	.IID-background-edfa84c2.appearance-animation--animated{animation-name:zoom-in;animation-duration:600ms}.IID-background-edfa84c2{margin:0 0 96px;border-radius:20px;min-height:463px;overflow:hidden}@media (min-width: 1488px){.IID-background-edfa84c2{border-radius:20px}}@media (min-width: 1230px){.IID-background-edfa84c2{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-background-edfa84c2{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-background-edfa84c2{border-radius:16px}.IID-background-edfa84c2{min-height:380px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/retail-img.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/retail-img-jpg-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div data-castom-marks="1" class="grid IID-grid-3312daf5 CID-grid-1659f761">
<style>
	.IID-grid-3312daf5{z-index:1}
	
</style>
<div class="grid__parsys         ">
<div class="grid-item appearance-animation appearance-animation--fade-in-up appearance-animation--method--repeat IID-grid-item-5d9a9883 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-5d9a9883{z-index:1;position:absolute;bottom:-16px;left:-32px}.IID-grid-item-5d9a9883.appearance-animation--animated{animation-name:fade-in-up;animation-duration:1200ms;animation-delay:200ms}@media (min-width: 1230px){.IID-grid-item-5d9a9883{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-grid-item-5d9a9883{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px){.IID-grid-item-5d9a9883{bottom:-20px;left:-16px}}@media (max-width: 767px){.IID-grid-item-5d9a9883{bottom:28px;left:-10px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-background-79490109 IID-background-de5aba05">
<style>
	.IID-background-de5aba05{background-color:#fff;padding:28px 48px 28px 28px;border-radius:20px}@media (min-width: 1488px){.IID-background-de5aba05{padding-left:28px;padding-right:48px}.IID-background-de5aba05{border-radius:20px}}
	.IID-background-de5aba05 > .background__layers > .background__layer--back .background__color{background-color:transparent}
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image CID-image-b4fec0a0 IID-image-7aa23be2">
<style>.IID-image-7aa23be2{max-width:128px;margin:0 0 24px}.IID-image-7aa23be2:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--283603577-1406762410-title" class="image__img" id="svg--283603577-1406762410" role="img" viewBox="0 0 128 27.37">
<title id="svg--283603577-1406762410-title">Waitrose &amp; Partners logo</title>
<rect fill="none" height="27.35" width="128" y="0.01" />
<rect fill="none" height="27.35" width="128" y="0.01" />
<path d="M128,14.19h-7.88c-.21,0-.32-.08-.3-.3s0-.26,0-.38V1c0-.73-.08-.68.69-.68h7c.22,0,.3.1.29.31s0,.51,0,.77c0,.8.1.72-.7.72h-4.54c-.85,0-.72-.1-.73.76v3c0,.42,0,.43.43.43H127c.63,0,.58,0,.57.59,0,.38.16.86-.07,1.11s-.77.09-1.16.09h-4c-.55,0-.54,0-.54.51,0,1.13,0,2.25,0,3.38,0,.42,0,.43.43.43h5l.7,0Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M29.42,27.33c0-.1-.12-.09-.2-.12a1.42,1.42,0,0,1-.49-2.51c.18-.15.37-.28.59-.45-.14-.2-.27-.38-.39-.57a1.24,1.24,0,0,1,.32-1.79,1.62,1.62,0,0,1,2.07.4,1.38,1.38,0,0,1-.06,1.45,3.47,3.47,0,0,1-.64.63.8.8,0,0,0,.13.22c.24.27.49.53.75.8a1.13,1.13,0,0,0,.3-.48c.23-.51.23-.51.89-.45a3,3,0,0,1-.45,1.16.47.47,0,0,0,.08.67c.27.27.52.55.79.84-.74.23-.85.2-1.56-.49a6.22,6.22,0,0,1-1.35.72A7,7,0,0,0,29.42,27.33Zm.45-.76a1.43,1.43,0,0,0,.83-.26c.28-.18.29-.25.09-.49s-.46-.5-.68-.75a.32.32,0,0,0-.54-.05,3.06,3.06,0,0,0-.32.3.74.74,0,0,0-.13.88A.73.73,0,0,0,29.87,26.57ZM29.51,23a1.27,1.27,0,0,0,.41.77.21.21,0,0,0,.23.05,1,1,0,0,0,.58-.85.61.61,0,0,0-.67-.54A.56.56,0,0,0,29.51,23Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M97.78,27.33c-.19-.18-.47-.16-.69-.27s-.54-.32-.46-.72a4.16,4.16,0,0,0,0-.54,4.06,4.06,0,0,0,.75.56,1.26,1.26,0,0,0,1.16.09.67.67,0,0,0,.29-1.05,2,2,0,0,0-.68-.57,8.42,8.42,0,0,1-1-.67,1.44,1.44,0,0,1,.93-2.58,2.46,2.46,0,0,1,1.07.14.53.53,0,0,1,.4.62,4.12,4.12,0,0,0,0,.5L99,22.5a1.46,1.46,0,0,0-1.17-.12.57.57,0,0,0-.3.95,1.77,1.77,0,0,0,.53.45c.3.17.59.34.87.52a1.83,1.83,0,0,1,.84,1.22A1.48,1.48,0,0,1,99,27.11c-.14.08-.35,0-.44.22Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M21.27.33c-.32.79-.63,1.56-.93,2.32q-2.25,5.55-4.48,11.1a2.09,2.09,0,0,1-.17.41.3.3,0,0,1-.52,0,2.67,2.67,0,0,1-.2-.46q-2-5-4-10a2.09,2.09,0,0,0-.3-.62c-.2.14-.22.36-.29.55L6.24,13.8c-.08.19-.06.5-.4.5s-.33-.29-.41-.49Q2.76,7.23.11.65c0-.1-.07-.2-.1-.3A9.31,9.31,0,0,1,1.83.25a.28.28,0,0,1,.24.17c.07.16.14.31.2.47L5.78,9.64c.24-.11.24-.35.32-.53C7.21,6.38,8.31,3.64,9.41.91A2.34,2.34,0,0,0,9.5.67a.49.49,0,0,1,.59-.42,5.79,5.79,0,0,0,1,0,.6.6,0,0,1,.71.46C12.38,2.16,13,3.59,13.55,5s1.17,2.87,1.76,4.31c0,.12.06.25.23.33l1.83-4.6c.57-1.44,1.15-2.88,1.71-4.32.13-.34.29-.53.69-.49S20.74.21,21.27.33Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M91.87,0a7.39,7.39,0,0,1,5.58,2.24,6.84,6.84,0,0,1,1.93,5.47,7,7,0,0,1-6.24,6.48,8.4,8.4,0,0,1-4.63-.54,6.71,6.71,0,0,1-4.15-5.95,6.85,6.85,0,0,1,1.83-5.39A7.17,7.17,0,0,1,91.48,0Zm0,12.41a5.26,5.26,0,0,0,3.78-9.11,5.48,5.48,0,0,0-4.87-1.28,5.22,5.22,0,0,0-3.62,7.77A5.13,5.13,0,0,0,91.84,12.44Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M74.89,7.62a10.3,10.3,0,0,1,2.55,3.13c.66,1,1.31,2.09,2.07,3.06a2.35,2.35,0,0,1,.23.38H77.57c-.27,0-.36-.18-.48-.35L75.24,11A15,15,0,0,0,74,9.38a7.92,7.92,0,0,0-.78-.75,2.92,2.92,0,0,0-2.13-.47c-.12,0-.19.08-.2.21s0,.34,0,.51v4.85c0,.46,0,.46-.45.47H69.17c-.26,0-.34-.11-.32-.34s0-.21,0-.32V.72c0-.43,0-.44.42-.44,1.26,0,2.52,0,3.78,0a4.43,4.43,0,0,1,2.46.78,3.51,3.51,0,0,1,1.54,3.24,3.48,3.48,0,0,1-1.75,3C75.17,7.39,75,7.42,74.89,7.62ZM71,4.08V6c0,.21.08.32.3.31a9.74,9.74,0,0,0,2.09-.11A2,2,0,0,0,75,4.1a2,2,0,0,0-1.64-2,8.64,8.64,0,0,0-2-.14c-.25,0-.34.11-.33.35C71,2.9,71,3.49,71,4.08Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M37.57,14.19c-.63,0-1.16,0-1.69,0a.52.52,0,0,1-.57-.38c-.44-1-.9-2-1.35-3a2.72,2.72,0,0,1-.16-.35c-.08-.31-.29-.36-.58-.36H28.1a.51.51,0,0,0-.57.37c-.41,1-.86,2-1.29,3-.36.83-.17.67-1,.68a6.37,6.37,0,0,1-1.3,0L25.25,11q2.14-5,4.3-10c.08-.18.17-.35.23-.53a.35.35,0,0,1,.37-.27c1.13-.09,1.13-.09,1.59,1q2.79,6.21,5.57,12.43Zm-4.87-6a35.89,35.89,0,0,0-2.15-4.67,35.72,35.72,0,0,0-1.9,4.71A25.44,25.44,0,0,0,32.7,8.15Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M105.46,10.61c.22.19.46.37.67.57a4.57,4.57,0,0,0,2.71,1.31,3,3,0,0,0,1.27-.11,1.72,1.72,0,0,0,1-2.7,4,4,0,0,0-1.19-1.14c-.61-.39-1.23-.76-1.85-1.14A9.74,9.74,0,0,1,106.31,6,3.51,3.51,0,0,1,107.81.3a5.49,5.49,0,0,1,4.62.47.61.61,0,0,1,.36.6c0,.59,0,1.18,0,1.82a.94.94,0,0,1-.5-.31,4.57,4.57,0,0,0-2.56-1,2.76,2.76,0,0,0-1.72.41,1.43,1.43,0,0,0-.54,1.94,2.44,2.44,0,0,0,.65.78,12.05,12.05,0,0,0,1.82,1.18,11.53,11.53,0,0,1,1.88,1.2,4.09,4.09,0,0,1,1.35,2,3.76,3.76,0,0,1-3.56,4.94,6.53,6.53,0,0,1-3.66-.94.84.84,0,0,1-.5-.86C105.49,11.87,105.46,11.22,105.46,10.61Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M58.07,8.15v5.54c0,.48,0,.48-.49.49H56.3c-.18,0-.28-.06-.27-.26V2.7C56,2,56.1,2,55.39,2H51.62c-.41,0-.43,0-.42-.43A3.84,3.84,0,0,1,51.27.3a6,6,0,0,1,1.27,0h9.72c.7,0,.66-.05.66.65,0,.3,0,.59,0,.89a.23.23,0,0,1-.24.24H58.51c-.41,0-.42,0-.43.43C58.07,4.37,58.07,6.26,58.07,8.15Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M45.27,7.25v6.69c0,.15-.05.25-.22.25h-1.6a.2.2,0,0,1-.23-.23V.84c0-.62,0-.58.6-.58H45c.22,0,.31.09.3.31s0,.3,0,.45Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M72.29,23.11v1.81c0,.66,0,1.31,0,2,0,.32-.19.32-.41.32s-.42,0-.42-.32c0-1.08,0-2.17,0-3.25V22.05c0-.16-.06-.37.16-.43a.61.61,0,0,1,.61.08c.14.13.26.28.39.42,1,1.13,2,2.27,3,3.4.07.08.13.18.25.2a1.06,1.06,0,0,0,.06-.61c0-1,0-2.08,0-3.12,0-.14,0-.32.14-.37a.93.93,0,0,1,.57,0,.17.17,0,0,1,.09.15,2.42,2.42,0,0,1,0,.38v4.52c0,.17.11.43-.15.49a.67.67,0,0,1-.72-.13l-.2-.24-2.77-3.16A2.13,2.13,0,0,0,72.29,23.11Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M58.08,24.57c.2.24.41.45.58.7.42.61.82,1.24,1.23,1.88a1.87,1.87,0,0,1-.77.07c-.21,0-.28-.18-.37-.32a15.67,15.67,0,0,0-1.09-1.57,1.29,1.29,0,0,0-.91-.54c-.24,0-.35.05-.34.31,0,.59,0,1.19,0,1.78,0,.3-.14.35-.39.34-.41,0-.45,0-.46-.34V22c0-.27.11-.38.38-.37h1.22a2,2,0,0,1,.8.19,1.49,1.49,0,0,1,.47,2.44C58.33,24.35,58.2,24.46,58.08,24.57Zm-1.65-1.39c0,.9.09,1,.89.82A.81.81,0,0,0,58,23c-.08-.5-.5-.73-1.25-.69-.31,0-.31,0-.31.72Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M93,27.13c-.13.12-.27.07-.39.09a.78.78,0,0,1-.87-.46,8.74,8.74,0,0,0-1.06-1.51,1.18,1.18,0,0,0-.87-.46c-.22,0-.32.05-.31.27v1.72c0,.39-.3.57-.67.42a.21.21,0,0,1-.13-.19V22.12c0-.5,0-.5.48-.5h1a1.92,1.92,0,0,1,.75.14,1.5,1.5,0,0,1,.55,2.53c-.1.1-.22.19-.36.31A19.14,19.14,0,0,1,93,27.13ZM90,22.34c-.54,0-.55,0-.56.49v.51c0,.74,0,.78.8.68h.13a.88.88,0,0,0,.69-.81.87.87,0,0,0-.68-.82A1.44,1.44,0,0,0,90,22.34Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M46.32,27.14a.52.52,0,0,1,0-.18c.72-1.68,1.44-3.35,2.15-5a.46.46,0,0,1,.52-.34c.26,0,.31.18.38.36l1.66,3.72c.22.48.43,1,.64,1.43-.13.18-.29.11-.43.13a.44.44,0,0,1-.53-.34c-.14-.36-.32-.69-.46-1.05a.41.41,0,0,0-.44-.28c-.58,0-1.15,0-1.73,0a.4.4,0,0,0-.43.29c-.1.28-.23.55-.35.82C47.06,27.29,47.05,27.3,46.32,27.14Zm1.89-2.39a5.44,5.44,0,0,0,1.56,0c-.27-.61-.53-1.18-.83-1.84A12.13,12.13,0,0,0,48.21,24.75Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M81.19,24.39V22c0-.41,0-.42.44-.42H84c.38,0,.43.08.42.45s-.1.3-.31.29c-.58,0-1.15,0-1.72,0-.29,0-.38.11-.35.37A4.06,4.06,0,0,0,82.11,24a5.44,5.44,0,0,0,1.14,0c.21,0,.43,0,.64,0,.46,0,.45,0,.46.45,0,.27-.13.32-.35.31-.51,0-1,0-1.54,0s-.42,0-.42.42,0,.64,0,.95.07.31.3.3c.58,0,1.15,0,1.72,0s.43.08.43.5c0,.19-.1.26-.27.25H81.6c-.39,0-.4,0-.4-.39C81.18,26,81.19,25.19,81.19,24.39Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M40,24.41v-2.3c0-.5,0-.5.49-.51s1,0,1.47,0a1.66,1.66,0,0,1,1.26.54,1.6,1.6,0,0,1-.72,2.54,3.61,3.61,0,0,1-1.08.11c-.62,0-.57,0-.57.6s0,1,0,1.53c0,.22-.09.29-.3.3-.5,0-.54,0-.54-.51C40,25.94,40,25.18,40,24.41Zm.85-1.23c0,1-.17.83.88.85h.25a.73.73,0,0,0,.7-.75.73.73,0,0,0-.57-.86,1.18,1.18,0,0,0-.37-.05C40.61,22.37,40.84,22.22,40.81,23.18Z" fill="#6f9131" transform="translate(0 0.01)" />
<path d="M65.52,24.84c0,.68,0,1.36,0,2,0,.3-.14.35-.39.34-.41,0-.45,0-.46-.34,0-1.21,0-2.42,0-3.63v-.32c0-.61,0-.58-.6-.58H63c-.25,0-.27-.15-.26-.34s0-.41.26-.41h4.1c.12,0,.28,0,.34.1a.77.77,0,0,1,0,.56c0,.11-.18.09-.29.09H65.91c-.38,0-.39,0-.4.38C65.51,23.44,65.52,24.14,65.52,24.84Z" fill="#6f9131" transform="translate(0 0.01)" />
</svg>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-e4a84282">
<style>
	.IID-custom-text-e4a84282{max-width:200px;color:#222;text-align:left}.IID-custom-text-e4a84282:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-custom-text-e4a84282{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p><b>53%</b> Increase in customer satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</button>
</div>
</div>
<div class="custom-itl itl custom-itl--switch-slider-card custom-itl--markup-carousel-switcher--new custom-itl--progress-bar IID-custom-itl-2d636b17 CID-custom-itl-6a582420">
<style>
	.IID-custom-itl-2d636b17{z-index:1}
	.custom-itl.IID-custom-itl-2d636b17 .custom-itl__title{color:#6f6f6f;font-size:30px;line-height:.96;font-weight:500}.custom-itl.IID-custom-itl-2d636b17 .custom-itl__chevron{color:#6f6f6f}.custom-itl.IID-custom-itl-2d636b17.custom-itl--active .custom-itl__title{color:#222}@media (max-width: 1229px){.custom-itl.IID-custom-itl-2d636b17 .custom-itl__title{font-size:24px}}@media (max-width: 767px){.custom-itl.IID-custom-itl-2d636b17 .custom-itl__title{font-size:20px}}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="submitBtBanner">
<button class="custom-itl__link custom-itl__link--type--link" title="Government" aria-label="Government" data-automation-id="Government" data-dl-additional-info="Solutions for every indus" data-anchor="#mslide5">
<div class="custom-itl__header">
<div class="custom-itl__image-block">
</div>
<div class="custom-itl__text">
<div class="custom-itl__title">Government</div>
</div>
<div class="custom-itl__chevron">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--353714479-591330276-title" role="img" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--353714479-591330276" />
</svg>
</div>
</div>
<div class="custom-itl__content">
<div class="custom-itl__parsys">
<div class="custom-text appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-custom-text-3063780c CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-3063780c{max-width:324px;color:#222;text-align:left;transition:opacity 300ms;opacity:0;margin:20px 0 16px}.IID-custom-text-3063780c:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-3063780c.appearance-transition--animated{opacity:1}@media (min-width: 1230px){.IID-custom-text-3063780c{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-custom-text-3063780c{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-custom-text-3063780c{max-width:100%}}
	.IID-custom-text-3063780c{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote" data-content-wrapper="true">
<div>Deliver connected, secure, and consistent communications that are accessible to everyone in your community.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right CID-cta-v2-e0fe0cb4 IID-cta-v2-fc7a34de">
<style>
	.IID-cta-v2-fc7a34de{position:relative;margin:0 0 32px -12px}@media (min-width: 1488px){.IID-cta-v2-fc7a34de{margin-left:-12px}}@media (min-width: 1230px){.IID-cta-v2-fc7a34de{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-cta-v2-fc7a34de{visibility:hidden;position:absolute;top:-99999px}}
	.IID-cta-v2-fc7a34de .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-fc7a34de .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-fc7a34de .cta-v2__el{border-radius:16px}.IID-cta-v2-fc7a34de .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-fc7a34de .cta-v2__el:hover:before,.IID-cta-v2-fc7a34de .cta-v2__el:focus:before{width:100%}.IID-cta-v2-fc7a34de .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="submitBtBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/industry-solutions/government-agencies.html" data-active-dl-name="Government - Learn more" tabindex="0" title="Learn more" target="_self" data-dl-element="button" data-dl-name="Government - Learn more" data-dl-additional-info="Solutions for every indus" data-automation-id="Government - Learn more" data-cta-animated="cta-animated">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
<div class="background background__image__mobile--enabled background--back-position-x--center background--back-position-y--center background--back-size--cover background--alignment--fullwidth appearance-animation appearance-animation--zoom-in appearance-animation--method--repeat IID-background-8d508f58 CID-background-79490109">
<style>
	.IID-background-8d508f58.appearance-animation--animated{animation-name:zoom-in;animation-duration:600ms}.IID-background-8d508f58{margin:0 0 96px;border-radius:20px;min-height:463px;overflow:hidden}@media (min-width: 1488px){.IID-background-8d508f58{border-radius:20px}}@media (min-width: 1230px){.IID-background-8d508f58{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-background-8d508f58{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-background-8d508f58{border-radius:16px}.IID-background-8d508f58{min-height:380px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/gov-img.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/gov-img-jpg-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div data-castom-marks="1" class="grid IID-grid-c9e9fe1f CID-grid-1659f761">
<style>
	.IID-grid-c9e9fe1f{z-index:1}
	
</style>
<div class="grid__parsys         ">
<div class="grid-item appearance-animation appearance-animation--fade-in-up appearance-animation--method--repeat IID-grid-item-a17cee99 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-a17cee99{z-index:1;position:absolute;bottom:-16px;left:-32px}.IID-grid-item-a17cee99.appearance-animation--animated{animation-name:fade-in-up;animation-duration:1200ms;animation-delay:200ms}@media (min-width: 1230px){.IID-grid-item-a17cee99{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-grid-item-a17cee99{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px){.IID-grid-item-a17cee99{bottom:-20px;left:-16px}}@media (max-width: 767px){.IID-grid-item-a17cee99{bottom:28px;left:-10px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-background-9737f69b CID-background-79490109">
<style>
	.IID-background-9737f69b{background-color:#fff;padding:28px 48px 28px 28px;border-radius:20px}@media (min-width: 1488px){.IID-background-9737f69b{padding-left:28px;padding-right:48px}.IID-background-9737f69b{border-radius:20px}}
	.IID-background-9737f69b > .background__layers > .background__layer--back .background__color{background-color:transparent}
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image image--hover-item1 IID-image-241aa30c CID-image-b4fec0a0">
<style>.IID-image-241aa30c{max-width:56px;margin:0 0 24px}.IID-image-241aa30c:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--1708029662-1220749649-title" class="image__img" id="svg--1708029662-1220749649" role="img" viewBox="0 0 68.03 56">
<title id="svg--1708029662-1220749649-title">East Texas Council of Goverments logo</title>
<rect fill="none" height="56" width="68" x="0.03" />
<path d="M57.68,40.81h5.88a1,1,0,0,0,.29-.07c.14.36.25.75.39,1.11H57.36C57.45,41.5,57.56,41.15,57.68,40.81Z" fill="#276a36" transform="translate(-0.01 0)" />
<path d="M63.88,55.66a4.67,4.67,0,0,0,3.19.11c.72-.23.9-1.11.93-1.55v-3.5c0-.82-.82-1.15-1.47-1.51-1.65-.87-1.4-.83-1.4-2.38v-.72c0-.25,0-.47.33-.47s.36.22.36.43v2h2.07V45.35a1.31,1.31,0,0,0-1.14-1.26,15,15,0,0,0-2.51,0A1.25,1.25,0,0,0,63,45.35v3.39A.81.81,0,0,0,63,49c.24.68.72.9,1.3,1.19,1.5.75,1.47.57,1.47,2.34v1.3c0,.22,0,.54-.33.54s-.32-.29-.32-.54v-2.2H63v2.74A1.4,1.4,0,0,0,63.88,55.66Z" fill="#272424" transform="translate(-0.01 0)" />
<path d="M47.33,55.92H45V46.47A1.08,1.08,0,0,0,45,46c-.07-.11-.16-.25-.32-.25a.32.32,0,0,0-.32.29,1.55,1.55,0,0,0,0,.43v9.45H42V46.58a1.85,1.85,0,0,0,0-.47c0-.22-.14-.4-.39-.33a.54.54,0,0,0-.32.37,2,2,0,0,0-.08.68V56H38.94V44.13h2.19a2.74,2.74,0,0,0,.07.5,2,2,0,0,1,2.83.06h0a4,4,0,0,1,.43-.29,1.66,1.66,0,0,1,2.33.18,1.68,1.68,0,0,1,.39.94,13.21,13.21,0,0,1,.15,1.77v8.62Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M23,38.07H20.78V27.94c0-.18-.15-.4-.36-.33a.54.54,0,0,0-.32.29.79.79,0,0,0,0,.43V38H17.84V25.88H20v.36a4.64,4.64,0,0,1,1-.43,1.42,1.42,0,0,1,1.86,1.41A10.44,10.44,0,0,1,23,28.69v8.87A2.17,2.17,0,0,0,23,38.07Z" fill="#252122" transform="translate(-0.01 0)" />
<path d="M35.86,55.88V46.33a.94.94,0,0,0,0-.47c-.08-.15-.16-.28-.33-.29s-.29.07-.35.29a1.27,1.27,0,0,0,0,.39v9.67H32.89V43.87H35v.36a4,4,0,0,1,1-.43c1.08-.21,1.76.36,1.9,1.55,0,.54.07,1.12.07,1.7v8.87C37.4,55.88,36.65,55.88,35.86,55.88Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M11.75,25.81H14v9.37a4.45,4.45,0,0,0,0,.73.52.52,0,0,0,.28.32c.22.07.36-.11.36-.32V25.77h2.19V37.92H14.72v-.36a6.57,6.57,0,0,1-1.11.44,1.42,1.42,0,0,1-1.69-1.09,1.46,1.46,0,0,1,0-.36A10,10,0,0,1,11.75,35Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M17.19,44.74v4.4c0,1.08-.43,1.51-1.54,1.62a8.26,8.26,0,0,1-1.86,0c-1.15-.11-1.5-.54-1.58-1.69v-8.3a3.53,3.53,0,0,1,0-.65c.18-1.11.39-1.37,1.47-1.47a8.27,8.27,0,0,1,2.33.07c.75.11,1.07.61,1.11,1.48s0,1.91,0,2.88a11.5,11.5,0,0,1,0,1.66Zm-2.15,0v-4c0-.25,0-.5-.32-.5s-.36.21-.36.5v7.9c0,.25.08.54.36.54s.32-.29.32-.54Z" fill="#252122" transform="translate(-0.01 0)" />
<path d="M56.68,55.84V46.36a1.62,1.62,0,0,0-.07-.58.47.47,0,0,0-.36-.21c-.11,0-.22.14-.25.25a2.44,2.44,0,0,0,0,.54v9a3.53,3.53,0,0,1,0,.46H53.88v-12h2a1.58,1.58,0,0,0,.14.36c.14-.07.28-.11.39-.18a1.41,1.41,0,0,1,2,.2,1.39,1.39,0,0,1,.31.7,5.62,5.62,0,0,1,.15,1v10Z" fill="#262324" transform="translate(-0.01 0)" />
<path d="M53.17,23.11V20.69c0-.25-.07-.43-.36-.43s-.36.21-.36.43v2H50.23a11.8,11.8,0,0,1,.18-3.14,1.16,1.16,0,0,1,.89-.79A6.77,6.77,0,0,1,54,18.68c.9.15,1.29.44,1.4,1.7V30.5H53.6a.29.29,0,0,1-.18-.07c-.29-.33-.54-.22-.83,0a1.4,1.4,0,0,1-2-.36,1.55,1.55,0,0,1-.12-.22,3.47,3.47,0,0,1-.26-1.23V25.74a1.73,1.73,0,0,1,.83-1.52C51.77,23.9,52.49,23.5,53.17,23.11Zm0,2c-.36.19-.68.33-.68.73v2.81c0,.25.1.43.39.39s.32-.21.32-.43c0-1.11,0-2.26,0-3.49Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M35.75,37.13v-4a3,3,0,0,1,.11-.79,1.13,1.13,0,0,1,1-1.05,14.57,14.57,0,0,1,2.47-.07c1,.11,1.36.65,1.4,1.69s0,1.91,0,2.89v5.48a1.27,1.27,0,0,1,0,.39c-.17,1-.46,1.37-1.64,1.48a8.91,8.91,0,0,1-2.19-.07c-.75-.11-1.11-.68-1.11-1.62C35.72,40,35.75,38.54,35.75,37.13Zm2.83.07V33.42a.91.91,0,0,0-.07-.43c-.07-.11-.21-.22-.32-.19a.65.65,0,0,0-.29.26.71.71,0,0,0,0,.29v7.57c0,.4.17.6.35.6s.32-.12.33-.6Z" fill="#252122" transform="translate(-0.01 0)" />
<path d="M11,32.23v4c0,1.33-.32,1.59-1.57,1.77a6.11,6.11,0,0,1-2.37-.11,1.18,1.18,0,0,1-.86-.9A6.78,6.78,0,0,1,6.1,35.8V28.05a2,2,0,0,1,.71-1.84,2,2,0,0,1,.9-.36,14.28,14.28,0,0,1,1.85,0A1.49,1.49,0,0,1,11,27.32ZM8.18,31.9v3.75a1.26,1.26,0,0,0,.07.51c.07.11.2.25.36.21s.2-.19.24-.29a3.11,3.11,0,0,0,0-.61V28.26c0-.14,0-.86-.36-.86s-.35.57-.35.68Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M28.8,45.06H25.94v3.65c0,.25,0,.46.36.46s.32-.21.32-.46V46.33h2.15v3.06a1.28,1.28,0,0,1-1.15,1.33,5.75,5.75,0,0,1-2.61,0,1.28,1.28,0,0,1-1.19-1.37c0-.27,0-.55,0-.82V40.77q0-.37,0-.75a1.29,1.29,0,0,1,1.28-1.3h0a13,13,0,0,1,2.33,0c.9.07,1.26.54,1.33,1.44v2C28.84,43.12,28.8,44.05,28.8,45.06Zm-2.18-1.69v-2.6c0-.25,0-.54-.36-.54s-.36.25-.36.51v2.59A5.79,5.79,0,0,0,26.62,43.37Z" fill="#252222" transform="translate(-0.01 0)" />
<path d="M22.86,24.76h-2.3V24.4a.2.2,0,0,0-.15,0,2,2,0,0,1-1.32.4,1.16,1.16,0,0,1-1.26-1,4.18,4.18,0,0,1-.14-.93V20a1.6,1.6,0,0,1,.79-1.48c.57-.36,1.18-.69,1.79-1a1.22,1.22,0,0,1,.36-.18V15c0-.25-.07-.43-.32-.47s-.36.19-.36.4v1.95H17.66a15.46,15.46,0,0,1,.14-2.56,1.62,1.62,0,0,1,1.47-1.41,7.65,7.65,0,0,1,2.19.07,1.74,1.74,0,0,1,1.4,1.81v10Zm-2.33-5.33c-.5.14-.68.29-.68.61v2.85c0,.25.14.4.35.36a.52.52,0,0,0,.33-.36Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M43.64,25H40.77v3.6c0,.22.07.47.39.47s.33-.29.33-.5V26.31h2.18c0,1.09-.07,2.17-.14,3.25a1.12,1.12,0,0,1-1,1.08,5.77,5.77,0,0,1-2.8,0c-.72-.18-1-.61-1.07-1.44a9.2,9.2,0,0,1,0-1.05V20.76c0-1.48.39-2,1.93-2.09a9.73,9.73,0,0,1,1.79.11A1.23,1.23,0,0,1,43.57,20c0,.36.07.75.07,1.11Zm-2.87-1.66h.72V20.69c0-.18,0-.4-.33-.4s-.35.22-.35.44c0,.83,0,1.69,0,2.63Z" fill="#252122" transform="translate(-0.01 0)" />
<path d="M11.32,42.76H9.2V40.92a.94.94,0,0,0,0-.47c-.07-.15-.18-.3-.36-.29a.43.43,0,0,0-.32.25.71.71,0,0,0,0,.29v7.93c0,.22,0,.47.29.54s.46-.07.46-.43V46A.89.89,0,0,0,9,45.92V44.45h2.51v6.24H10.6c-.11-.18-.25-.4-.39-.65A2.42,2.42,0,0,1,8,50.8a1.56,1.56,0,0,1-1.68-1.43,1.22,1.22,0,0,1,0-.27V40.23a2.83,2.83,0,0,1,.14-.76,1.09,1.09,0,0,1,.83-.82,7.41,7.41,0,0,1,3.11,0,1.2,1.2,0,0,1,1,1.26C11.35,40.88,11.32,41.78,11.32,42.76Z" fill="#252122" transform="translate(-0.01 0)" />
<path d="M28.84,30.79H26.62V27.9c0-.25-.07-.47-.4-.47s-.32.25-.32.47V36a.32.32,0,0,0,.26.37h.14a.49.49,0,0,0,.28-.36V32.8h2.19v3.11a4.2,4.2,0,0,1-.1.93,1.23,1.23,0,0,1-1,1,7.1,7.1,0,0,1-2.83,0,1.35,1.35,0,0,1-1.11-1.15,4.79,4.79,0,0,1-.11-1V28.12A6,6,0,0,1,23.75,27a1.21,1.21,0,0,1,1.18-1.16,11.46,11.46,0,0,1,2.19-.07c1.15.11,1.58.47,1.65,1.66A26.92,26.92,0,0,1,28.84,30.79Z" fill="#262324" transform="translate(-0.01 0)" />
<path d="M2.93,30.79V28.08a.91.91,0,0,0-.07-.43c-.07-.11-.21-.22-.32-.18a.39.39,0,0,0-.24.18,1.09,1.09,0,0,0,0,.36v8c0,.21.08.39.33.39S3,36.26,3,36V32.84H5.17v.33c0,1.11,0,2.27-.08,3.38C5,37.46,4.74,37.78,3.84,38a5.9,5.9,0,0,1-2.51,0C.44,37.78.15,37.46,0,36.19a16.68,16.68,0,0,1,0-2V27.9a4.59,4.59,0,0,1,.1-.9A1.78,1.78,0,0,1,1.5,26H3.65A1.5,1.5,0,0,1,5,27a8.1,8.1,0,0,1,.18,1.55v2.23Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M16.76,19.21H13.93v3.61c0,.21.08.39.36.39s.33-.18.33-.39V20.47H16.8c0,1.05-.07,2.13-.14,3.18a1.2,1.2,0,0,1-1,1.08,7.24,7.24,0,0,1-2.5.07,1.85,1.85,0,0,1-1.4-1.69V14.74A1.82,1.82,0,0,1,13.36,13a7.89,7.89,0,0,1,2,.11,1.74,1.74,0,0,1,1.33,1.55C16.8,16.11,16.76,17.66,16.76,19.21Zm-2.14-1.62V15a.36.36,0,0,0-.32-.4h0a.4.4,0,0,0-.36.33v2.7Z" fill="#252222" transform="translate(-0.01 0)" />
<path d="M47,22.89c.14-1.41.32-2.85.46-4.26h2.3c-.18,1-.4,1.95-.58,2.89s-.39,1.69-.5,2.52a7.39,7.39,0,0,0,.18,1.48c.29,1.62.54,3.21.82,4.83a.77.77,0,0,0,.08.4H47.65c-.22-1.66-.43-3.32-.61-4.94h-.18c-.14,1.66-.32,3.28-.46,4.94H44c.18-.9.36-1.8.5-2.7.25-1.23.54-2.46.68-3.72A4.52,4.52,0,0,0,45,22.78c-.25-1.37-.54-2.7-.83-4.11h2.3c.14,1.44.28,2.78.43,4.22Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M53,50.22h-2.9v3.32a1.08,1.08,0,0,0,.07.47c.07.1.19.26.36.25A.43.43,0,0,0,51,53.8V51.52H53v2.81a1.58,1.58,0,0,1-.86,1.26,3.07,3.07,0,0,1-2.26.29,1.92,1.92,0,0,1-1.68-1.19,1.68,1.68,0,0,1-.07-.5V45.68A1.6,1.6,0,0,1,49.66,44a19,19,0,0,1,2,.07,1.24,1.24,0,0,1,1.26,1.24v.1A42.92,42.92,0,0,1,53,50.22Zm-2.12-1.55v-2.6c0-.21,0-.43-.32-.43s-.36.22-.39.43a4,4,0,0,0,0,.69v1.91Z" fill="#262324" transform="translate(-0.01 0)" />
<path d="M28.55,16.87H26.44V15.25a.68.68,0,0,0,0-.4c-.07-.15-.12-.26-.35-.23a.39.39,0,0,0-.33.3v2a1,1,0,0,0,.58.83,8,8,0,0,0,1.21.68,1.75,1.75,0,0,1,1,1.7c0,1.11,0,2.2-.07,3.31s-.32,1.3-1.25,1.45a8.85,8.85,0,0,1-2.3,0c-1-.15-1.18-.47-1.32-1.59a20.27,20.27,0,0,1,0-2.7h2.15V22.6c0,.55.14.66.29.69a.29.29,0,0,0,.35-.21.09.09,0,0,0,0,0V20.19c0-.15-.21-.29-.36-.4A15.05,15.05,0,0,0,24.5,19a1.71,1.71,0,0,1-.93-1.63V14.92a1.94,1.94,0,0,1,1.88-2h.12A9.33,9.33,0,0,1,27.4,13a1.35,1.35,0,0,1,1.18,1.27,4.69,4.69,0,0,1,0,.75Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M56.21,26.31h2v2.06a1.85,1.85,0,0,0,0,.47.41.41,0,0,0,.32.21.56.56,0,0,0,.29-.21,1.79,1.79,0,0,0,.07-.51V26.57a1.16,1.16,0,0,0-.68-1.19c-.29-.15-.57-.33-.86-.47a1.89,1.89,0,0,1-1.29-1.84c0-1,0-2.09.07-3.14a1.23,1.23,0,0,1,1.24-1.22h0a16.89,16.89,0,0,1,2.25,0c.94.07,1.29.54,1.33,1.59v2.45H58.89V21.12a1.41,1.41,0,0,0-.07-.54.32.32,0,0,0-.3-.28.36.36,0,0,0-.31.28,14.34,14.34,0,0,0,0,2.27c0,.26.35.51.61.69.43.29.89.54,1.32.79a1.46,1.46,0,0,1,.79,1.34V29.2a1.51,1.51,0,0,1-1.44,1.59.74.74,0,0,1-.21,0,20.7,20.7,0,0,1-2.08-.11,1.51,1.51,0,0,1-1.11-1.37Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M19.2,50.8c-.5-4.08-1-8.12-1.47-12.19h1.9c.29,3,.57,5.91.86,8.87h.11c.32-3,.64-5.91,1-8.87h1.82c-.5,4-1,8.11-1.47,12.19Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M32.6,18.45h2V38h-2Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M41,16.18c.14.44.28.9.46,1.41H37.8V30.71H35.65V17.63H32.46c.14-.51.28-1,.43-1.45Z" fill="#242021" transform="translate(-0.01 0)" />
<path d="M29.52,38.68h2.19v.4c.07,0,.11,0,.14-.07A1.63,1.63,0,0,1,33,38.57a1.19,1.19,0,0,1,1.29,1,15.31,15.31,0,0,1,.18,1.66v1.66H32.42V41.24a2.44,2.44,0,0,0,0-.54.41.41,0,0,0-.29-.25.41.41,0,0,0-.32.21,1.1,1.1,0,0,0,0,.51v9.66H29.56C29.52,46.79,29.52,42.76,29.52,38.68Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M64.23,41.85c.15.36.22.76.4,1.16H62V55.84H59.89V43H57c.14-.43.29-.79.39-1.16C59.62,41.85,61.94,41.82,64.23,41.85Z" fill="#272424" transform="translate(-0.01 0)" />
<path d="M33.75,10.67c.11.32.18.61.32,1H31.63v13.2H29.45V11.6H27.16c.14-.36.24-.74.38-1C29.58,10.57,31.67,10.67,33.75,10.67Z" fill="#242021" transform="translate(-0.01 0)" />
<path d="M45.11,31.54V33H43.82v3h1.29v1.48H43.82v5.66H41.67V31.54Z" fill="#262223" transform="translate(-0.01 0)" />
<path d="M29.45,38V25.85H31.6V38Z" fill="#242021" transform="translate(-0.01 0)" />
<path d="M41,16.18H32.92c.15-.43.25-.83.4-1.26a1.78,1.78,0,0,0,.39.07h7C40.84,15.39,41,15.79,41,16.18Z" fill="#256835" transform="translate(-0.01 0)" />
<path d="M40.7,15h-7a1.07,1.07,0,0,1-.39-.07c.11-.4.25-.83.36-1.22h6.59Z" fill="#252222" transform="translate(-0.01 0)" />
<path d="M40.3,13.7H33.68c.14-.47.23-.83.37-1.3h5.86C40,12.83,40.16,13.26,40.3,13.7Z" fill="#266935" transform="translate(-0.01 0)" />
<path d="M33.75,10.67H27.51c.11-.4.22-.8.36-1.23h5.56C33.53,9.87,33.64,10.27,33.75,10.67Z" fill="#276a36" transform="translate(-0.01 0)" />
<path d="M57.68,40.81c.15-.4.29-.79.47-1.19h5.23c.14.36.35.83.5,1.19Z" fill="#262623" transform="translate(-0.01 0)" />
<path d="M33.43,9.48H27.87c.11-.44.25-.87.36-1.3H33C33.15,8.62,33.28,9.05,33.43,9.48Z" fill="#252222" transform="translate(-0.01 0)" />
<path d="M39.87,12.4H34c.11-.36.24-.83.38-1.19h5.09C39.62,11.6,39.77,12,39.87,12.4Z" fill="#252623" transform="translate(-0.01 0)" />
<path d="M63.38,39.62H58.15c.14-.4.25-.79.39-1.23H63C63.09,38.83,63.23,39.22,63.38,39.62Z" fill="#286a36" transform="translate(-0.01 0)" />
<path d="M33,8.18H28.23c.14-.48.3-1,.48-1.42a2,2,0,0,0,.34.12h3.62A12,12,0,0,0,33,8.18Z" fill="#286a36" transform="translate(-0.01 0)" />
<path d="M39.52,11.21H34.43l.32-1.16h4.41C39.27,10.45,39.41,10.81,39.52,11.21Z" fill="#266935" transform="translate(-0.01 0)" />
<path d="M39.16,10.05H34.75c.14-.43.29-.86.4-1.29h3.58A10.84,10.84,0,0,1,39.16,10.05Z" fill="#252222" transform="translate(-0.01 0)" />
<path d="M32.66,6.88h-4c.11-.37.18-.76.29-1.12h3.4A8.86,8.86,0,0,0,32.66,6.88Z" fill="#262623" transform="translate(-0.01 0)" />
<path d="M63,38.39H58.54l.43-1h3.58A9.47,9.47,0,0,0,63,38.39Z" fill="#272424" transform="translate(-0.01 0)" />
<path d="M38.76,8.76H35.18c.11-.4.22-.8.36-1.19h2.87A11,11,0,0,0,38.76,8.76Z" fill="#276835" transform="translate(-0.01 0)" />
<path d="M32.35,5.76H29c.1-.36.21-.75.32-1.11H32C32.14,5,32.24,5.4,32.35,5.76Z" fill="#286a37" transform="translate(-0.01 0)" />
<path d="M62.55,37.38H59c.1-.34.22-.67.35-1h2.86A9.19,9.19,0,0,1,62.55,37.38Z" fill="#286a37" transform="translate(-0.01 0)" />
<path d="M38.37,7.57H35.5c.15-.44.25-.87.4-1.3H38C38.12,6.7,38.26,7.13,38.37,7.57Z" fill="#272424" transform="translate(-0.01 0)" />
<path d="M32,4.65H29.27c.11-.44.25-.87.36-1.3h2C31.78,3.78,31.92,4.21,32,4.65Z" fill="#272424" transform="translate(-0.01 0)" />
<path d="M62.2,36.34H59.33c.14-.4.25-.83.39-1.23h2A6.82,6.82,0,0,0,62.2,36.34Z" fill="#282425" transform="translate(-0.01 0)" />
<path d="M31.63,3.35h-2c.11-.4.21-.8.36-1.19h1.32C31.42,2.55,31.53,3,31.63,3.35Z" fill="#2b6b37" transform="translate(-0.01 0)" />
<path d="M38,6.27H35.9l.32-1.16h1.4C37.76,5.51,37.87,5.87,38,6.27Z" fill="#286a37" transform="translate(-0.01 0)" />
<path d="M61.76,35.12h-2c.15-.36.22-.69.36-1h1.29C61.48,34.42,61.65,34.79,61.76,35.12Z" fill="#2b6b37" transform="translate(-0.01 0)" />
<path d="M37.62,5.11h-1.4c.14-.46.25-.9.39-1.37h.58C37.33,4.21,37.47,4.68,37.62,5.11Z" fill="#2a2c28" transform="translate(-0.01 0)" />
<path d="M31.31,2.16H30c.14-.43.28-.87.46-1.3H31A6.05,6.05,0,0,0,31.31,2.16Z" fill="#2c2929" transform="translate(-0.01 0)" />
<path d="M61.37,34.07H60c.15-.4.25-.8.4-1.19h.43A7.17,7.17,0,0,1,61.37,34.07Z" fill="#33312f" transform="translate(-0.01 0)" />
<path d="M31,.86h-.51c.11-.37.18-.6.25-.86A8.52,8.52,0,0,1,31,.86Z" fill="#477447" transform="translate(-0.01 0)" />
<path d="M37.19,3.74h-.57c.07-.28.18-.7.26-1C37,3,37,3.42,37.19,3.74Z" fill="#3e7243" transform="translate(-0.01 0)" />
<path d="M60.91,32.88h-.43a4.15,4.15,0,0,1,.2-.66C60.75,32.4,60.83,32.7,60.91,32.88Z" fill="#477447" transform="translate(-0.01 0)" />
<path d="M53.17,25.12v3.54c0,.21,0,.4-.32.43a.36.36,0,0,1-.4-.31v-2.9C52.49,25.45,52.81,25.34,53.17,25.12Z" fill="#fdfcfc" transform="translate(-0.01 0)" />
<path d="M40.77,23.36V20.69c0-.22,0-.43.36-.43s.32.21.32.39v2.67A3.82,3.82,0,0,1,40.77,23.36Z" fill="#e9e8e7" transform="translate(-0.01 0)" />
<path d="M50.87,48.67h-.71v-2.6a.38.38,0,0,1,.39-.43c.29,0,.32.22.32.43Z" fill="#f4f3f3" transform="translate(-0.01 0)" />
</svg>
</div>
</div>
<div class="custom-text IID-custom-text-e3bd222c CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-e3bd222c{max-width:200px;color:#222;text-align:left}.IID-custom-text-e3bd222c:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-custom-text-e3bd222c{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p><b>40%</b>&nbsp;reduction in costs</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</button>
</div>
</div>
<div class="carousel-v2 carousel-v2--default IID-carousel-v2-6b3c1749 CID-carousel-v2-79fd298e">
<style>
	.IID-carousel-v2-6b3c1749{margin:auto 0 0}@media (max-width: 1229px){.IID-carousel-v2-6b3c1749{margin:auto 0 0}}@media (max-width: 767px){.IID-carousel-v2-6b3c1749{visibility:hidden;position:absolute;top:-99999px}}
	.IID-carousel-v2-6b3c1749{color:null}.IID-carousel-v2-6b3c1749__extra-content-close{color:#c7c6c5}
</style>
<div class="carousel-v2__wrapper" data-ordered-slides="false" data-random="false" data-show-slide-by-hash="true" data-animation="fade" data-desktop-arrows="false" data-tablet-arrows="false" data-mobile-arrows="false" data-desktop-dots="false" data-tablet-dots="false" data-mobile-dots="false" data-desktop-close-btn="true" data-tablet-close-btn="true" data-mobile-close-btn="true" data-desktop-slides-per-view="1" data-tablet-slides-per-view="1" data-mobile-slides-per-view="1" data-desktop-slides-per-transition="1" data-tablet-slides-per-transition="1" data-mobile-slides-per-transition="1" data-desktop-speed="0" data-tablet-speed="0" data-mobile-speed="0" data-autoplay-delay="5000" data-autoplay-iteration-count="0" data-desktop-dots-color="#C7C6C5" data-desktop-dots-active-color="#0684BD" data-desktop-close-btn-color="#C7C6C5" data-extra-content-showing-delay="0" data-extra-content-showing-duration="3000" data-aria-label-previous-arrow="Previous" data-aria-label-next-arrow="Next">
<div class="carousel-v2__content">
<div class="carousel-v2__bg IID-carousel-v2-6b3c1749__bg">
<div class="carousel-v2__bg-inner"></div>
</div>
<div class="carousel-v2__container">
<div class="carousel-v2__body">
<div class="carousel-v2__inner">
<div class="carousel-v2__slides IID-carousel-v2-6b3c1749__slides">
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-5bf50fee">
<div class="carousel-slide__wrapper" data-id="mslide1" data-random="false" data-desktop-close-btn-color="#C7C6C5" data-delegate-hover="true">
<div class="custom-text appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-custom-text-e0b1298e IID-custom-text-4743dfc">
<style>
	.IID-custom-text-4743dfc{max-width:344px;transition:opacity 300ms;opacity:0;margin:0 0 16px}.IID-custom-text-4743dfc:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-4743dfc.appearance-transition--animated{opacity:1}@media (max-width: 767px){.IID-custom-text-4743dfc{max-width:100%}}
	.IID-custom-text-4743dfc{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote" data-content-wrapper="true">
<div>Create rich, secure experiences for patients, staff and partners from one collaborative platform.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right IID-cta-v2-1fa27daa CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-1fa27daa{position:relative;margin:0 0 0 -12px}@media (min-width: 1488px){.IID-cta-v2-1fa27daa{margin-left:-12px}}
	.IID-cta-v2-1fa27daa .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-1fa27daa .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-1fa27daa .cta-v2__el{border-radius:16px}.IID-cta-v2-1fa27daa .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-1fa27daa .cta-v2__el:hover:before,.IID-cta-v2-1fa27daa .cta-v2__el:focus:before{width:100%}.IID-cta-v2-1fa27daa .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="submitBtBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/industry-solutions/healthcare-communications-cloud-phone-systems.html" data-active-dl-name="Healthcare - Learn more" tabindex="0" title="Learn more" target="_self" data-dl-element="button" data-dl-name="Healthcare - Learn more" data-dl-additional-info="Solutions for every indus" data-automation-id="Healthcare - Learn more" data-cta-animated="cta-animated">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="carousel-slide appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-carousel-slide-fbb8715f IID-carousel-slide-9671d26">
<style>.IID-carousel-slide-9671d26{transition:opacity 300ms ease-in-out;opacity:0}.IID-carousel-slide-9671d26.appearance-transition--animated{opacity:1}</style>
<div class="carousel-slide__wrapper" data-id="mslide2" data-random="false" data-desktop-close-btn-color="#C7C6C5" data-delegate-hover="true">
<div class="custom-text appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-custom-text-e0b1298e IID-custom-text-f5ff1ba0">
<style>
	.IID-custom-text-f5ff1ba0{max-width:344px;transition:opacity 300ms;opacity:0;margin:0 0 16px}.IID-custom-text-f5ff1ba0:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-f5ff1ba0.appearance-transition--animated{opacity:1}@media (max-width: 767px){.IID-custom-text-f5ff1ba0{max-width:100%}}
	.IID-custom-text-f5ff1ba0{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote" data-content-wrapper="true">
<div>Securely and efficiently connect members, clients, and policyholders from one collaborative cloud communications platform.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right IID-cta-v2-300bb937 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-300bb937{position:relative;margin:0 0 0 -12px}@media (min-width: 1488px){.IID-cta-v2-300bb937{margin-left:-12px}}
	.IID-cta-v2-300bb937 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-300bb937 .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-300bb937 .cta-v2__el{border-radius:16px}.IID-cta-v2-300bb937 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-300bb937 .cta-v2__el:hover:before,.IID-cta-v2-300bb937 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-300bb937 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="submitBtBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/industry-solutions/business-communications-for-financial-services.html" data-active-dl-name="Financial Services - Learn more" tabindex="0" title="Learn more" target="_self" data-dl-element="button" data-dl-name="Financial Services - Learn more" data-dl-additional-info="Solutions for every indus" data-automation-id="Financial Services - Learn more" data-cta-animated="cta-animated">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="carousel-slide appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-carousel-slide-fbb8715f IID-carousel-slide-237c87f9">
<style>.IID-carousel-slide-237c87f9{transition:opacity 300ms ease-in-out;opacity:0}.IID-carousel-slide-237c87f9.appearance-transition--animated{opacity:1}</style>
<div class="carousel-slide__wrapper" data-id="mslide3" data-random="false" data-desktop-close-btn-color="#C7C6C5" data-delegate-hover="true">
<div class="custom-text appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-custom-text-e0b1298e IID-custom-text-aebb336d">
<style>
	.IID-custom-text-aebb336d{max-width:344px;transition:opacity 300ms;opacity:0;margin:0 0 16px}.IID-custom-text-aebb336d:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-aebb336d.appearance-transition--animated{opacity:1}@media (max-width: 767px){.IID-custom-text-aebb336d{max-width:100%}}
	.IID-custom-text-aebb336d{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote" data-content-wrapper="true">
<div>Bring students, faculty, and campus communities together from anywhere, at any time.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right CID-cta-v2-e0fe0cb4 IID-cta-v2-7a2d2284">
<style>
	.IID-cta-v2-7a2d2284{position:relative;margin:0 0 0 -12px}@media (min-width: 1488px){.IID-cta-v2-7a2d2284{margin-left:-12px}}
	.IID-cta-v2-7a2d2284 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-7a2d2284 .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-7a2d2284 .cta-v2__el{border-radius:16px}.IID-cta-v2-7a2d2284 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-7a2d2284 .cta-v2__el:hover:before,.IID-cta-v2-7a2d2284 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-7a2d2284 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="submitBtBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/industry-solutions/education-cloud-phone-systems.html" data-active-dl-name="Education - Learn more" tabindex="0" title="Learn more" target="_self" data-dl-element="button" data-dl-name="Education - Learn more" data-dl-additional-info="Solutions for every indus" data-automation-id="Education - Learn more" data-cta-animated="cta-animated">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="carousel-slide appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-carousel-slide-fbb8715f IID-carousel-slide-5f69ca48">
<style>.IID-carousel-slide-5f69ca48{transition:opacity 300ms ease-in-out;opacity:0}.IID-carousel-slide-5f69ca48.appearance-transition--animated{opacity:1}</style>
<div class="carousel-slide__wrapper" data-id="mslide4" data-random="false" data-desktop-close-btn-color="#C7C6C5" data-delegate-hover="true">
<div class="custom-text appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-custom-text-e0b1298e IID-custom-text-837ec83e">
<style>
	.IID-custom-text-837ec83e{max-width:330px;transition:opacity 300ms;opacity:0;margin:0 0 16px}.IID-custom-text-837ec83e:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-837ec83e.appearance-transition--animated{opacity:1}@media (max-width: 767px){.IID-custom-text-837ec83e{max-width:100%}}
	.IID-custom-text-837ec83e{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote" data-content-wrapper="true">
<div>Create consistent and engaging client experiences that help extend your expertise and grow your client base.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right IID-cta-v2-6687e6d5 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-6687e6d5{position:relative;margin:0 0 0 -12px}@media (min-width: 1488px){.IID-cta-v2-6687e6d5{margin-left:-12px}}
	.IID-cta-v2-6687e6d5 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-6687e6d5 .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-6687e6d5 .cta-v2__el{border-radius:16px}.IID-cta-v2-6687e6d5 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-6687e6d5 .cta-v2__el:hover:before,.IID-cta-v2-6687e6d5 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-6687e6d5 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="submitBtBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/industry-solutions/retail-business-cloud-phone-systems.html" data-active-dl-name="Retail - Learn more" tabindex="0" title="Learn more" target="_self" data-dl-element="button" data-dl-name="Retail - Learn more" data-dl-additional-info="Solutions for every indus" data-automation-id="Retail - Learn more" data-cta-animated="cta-animated">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="carousel-slide appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-carousel-slide-fbb8715f IID-carousel-slide-b7f50d">
<style>.IID-carousel-slide-b7f50d{transition:opacity 300ms ease-in-out;opacity:0}.IID-carousel-slide-b7f50d.appearance-transition--animated{opacity:1}</style>
<div class="carousel-slide__wrapper" data-id="mslide5" data-random="false" data-desktop-close-btn-color="#C7C6C5" data-delegate-hover="true">
<div class="custom-text appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-custom-text-79144fd9 CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-79144fd9{max-width:324px;transition:opacity 300ms;opacity:0;margin:0 0 16px}.IID-custom-text-79144fd9:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-custom-text-79144fd9.appearance-transition--animated{opacity:1}@media (max-width: 767px){.IID-custom-text-79144fd9{max-width:100%}}
	.IID-custom-text-79144fd9{font-size:14px;font-weight:400;line-height:1.428;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="footnote" data-content-wrapper="true">
<div>Deliver connected, secure, and consistent communications that are accessible to everyone in your community.</div>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right IID-cta-v2-8a28f0 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-8a28f0{position:relative;margin:0 0 0 -12px}@media (min-width: 1488px){.IID-cta-v2-8a28f0{margin-left:-12px}}
	.IID-cta-v2-8a28f0 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-8a28f0 .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-8a28f0 .cta-v2__el{border-radius:16px}.IID-cta-v2-8a28f0 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-8a28f0 .cta-v2__el:hover:before,.IID-cta-v2-8a28f0 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-8a28f0 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="submitBtBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/industry-solutions/government-agencies.html" data-active-dl-name="Government - Learn more" tabindex="0" title="Learn more" target="_self" data-dl-element="button" data-dl-name="Government - Learn more" data-dl-additional-info="Solutions for every indus" data-automation-id="Government - Learn more" data-hash-listener="true" data-cta-animated="cta-animated">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-v2__close">
<button class="carousel-v2__close-btn" aria-label="Close dialog">
<span aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.42 12.31" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--21285217" />
</svg>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--7 l-tab-flex__col--6 l-mob-flex__col--12 IID-grid-item-b6d3d1f6 CID-grid-item-1e7a19ff" data-custom-marked-list="central">
<style>.IID-grid-item-b6d3d1f6{margin:0}@media (min-width: 1488px){.IID-grid-item-b6d3d1f6{margin-right:-54px}}@media (max-width: 767px){.IID-grid-item-b6d3d1f6{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="carousel-v2 carousel-v2--default carousel-v2--slides-aligning--center IID-carousel-v2-265adec8 CID-carousel-v2-79fd298e">
<style>
	
	.IID-carousel-v2-265adec8{color:null}.IID-carousel-v2-265adec8__extra-content-close{color:#c7c6c5}
</style>
<div class="carousel-v2__wrapper" data-ordered-slides="false" data-random="false" data-show-slide-by-hash="true" data-animation="slide" data-desktop-arrows="false" data-tablet-arrows="false" data-mobile-arrows="false" data-desktop-dots="false" data-tablet-dots="false" data-mobile-dots="false" data-desktop-close-btn="true" data-tablet-close-btn="true" data-mobile-close-btn="true" data-desktop-loop="true" data-tablet-loop="true" data-mobile-loop="true" data-desktop-slides-per-view="1" data-tablet-slides-per-view="1" data-mobile-slides-per-view="1" data-desktop-slides-per-transition="1" data-tablet-slides-per-transition="1" data-mobile-slides-per-transition="1" data-desktop-speed="0" data-tablet-speed="0" data-mobile-speed="0" data-desktop-autoplay="true" data-tablet-autoplay="true" data-mobile-autoplay="true" data-autoplay-delay="10000" data-autoplay-iteration-count="0" data-desktop-dots-color="#C7C6C5" data-desktop-dots-active-color="#0684BD" data-desktop-close-btn-color="#C7C6C5" data-extra-content-showing-delay="0" data-extra-content-showing-duration="3000" data-aria-label-previous-arrow="Previous" data-aria-label-next-arrow="Next" data-sync-id="test-cour-2">
<div class="carousel-v2__content">
<div class="carousel-v2__bg IID-carousel-v2-265adec8__bg">
<div class="carousel-v2__bg-inner"></div>
</div>
<div class="carousel-v2__container">
<div class="carousel-v2__body">
<div class="carousel-v2__inner">
<div class="carousel-v2__slides IID-carousel-v2-265adec8__slides">
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-39ec498f">
<style>.IID-carousel-slide-39ec498f{position:relative;padding:0 0 0 90px}@media (min-width: 1488px){.IID-carousel-slide-39ec498f{padding-left:90px}}@media (max-width: 1229px){.IID-carousel-slide-39ec498f{padding:0 0 0 48px}}@media (max-width: 767px){.IID-carousel-slide-39ec498f{padding:0 0 56px}}</style>
<div class="carousel-slide__wrapper" data-id="mslide1" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth background--back-size--cover background--back-position-x--center background--back-position-y--center appearance-animation appearance-animation--zoom-in appearance-animation--method--repeat IID-background-ada508cc CID-background-79490109">
<style>
	.IID-background-ada508cc.appearance-animation--animated{animation-name:zoom-in;animation-duration:600ms}.IID-background-ada508cc{border-radius:20px;min-height:463px;overflow:hidden}@media (min-width: 1488px){.IID-background-ada508cc{border-radius:20px}}@media (max-width: 767px){.IID-background-ada508cc{border-radius:16px}.IID-background-ada508cc{min-height:380px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/healthcare-img.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/healthcare-img-jpg-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div data-castom-marks="1" class="grid CID-grid-1659f761 IID-grid-54d6dc6f">
<style>
	.IID-grid-54d6dc6f{z-index:1}
	
</style>
<div class="grid__parsys         ">
<div class="grid-item appearance-animation appearance-animation--fade-in-up appearance-animation--method--repeat IID-grid-item-bbbe7a49 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-bbbe7a49{z-index:1;position:absolute;bottom:-16px;left:-32px}.IID-grid-item-bbbe7a49.appearance-animation--animated{animation-name:fade-in-up;animation-duration:1200ms;animation-delay:200ms}@media (max-width: 1229px){.IID-grid-item-bbbe7a49{bottom:-20px;left:-16px}}@media (max-width: 767px){.IID-grid-item-bbbe7a49{bottom:-56px;left:-10px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-background-eb6ff64b CID-background-79490109">
<style>
	.IID-background-eb6ff64b{background-color:#fff;padding:28px 48px 28px 28px;border-radius:20px}@media (min-width: 1488px){.IID-background-eb6ff64b{padding-left:28px;padding-right:48px}.IID-background-eb6ff64b{border-radius:20px}}
	.IID-background-eb6ff64b > .background__layers > .background__layer--back .background__color{background-color:transparent}
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image image--hover-item1 IID-image-d593a15c CID-image-b4fec0a0">
<style>.IID-image-d593a15c{max-width:128px;margin:0 0 24px}.IID-image-d593a15c:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--1537103289-1561856365-title" class="image__img" role="img" viewBox="0 0 127.99 29.27" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1537103289-1561856365" />
</svg>
</div>
</div>
<div class="custom-text IID-custom-text-91f2247c CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-91f2247c{max-width:200px}.IID-custom-text-91f2247c:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-custom-text-91f2247c{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p><b>42%</b> Increase in HCAHPS patient satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-a4c7c025">
<style>.IID-carousel-slide-a4c7c025{position:relative;padding:0 0 0 90px}@media (min-width: 1488px){.IID-carousel-slide-a4c7c025{padding-left:90px}}@media (max-width: 1229px){.IID-carousel-slide-a4c7c025{padding:0 0 0 48px}}@media (max-width: 767px){.IID-carousel-slide-a4c7c025{padding:0 0 56px}}</style>
<div class="carousel-slide__wrapper" data-id="mslide2" data-random="false" data-delegate-hover="true">
<div class="background background--back-position-x--center background--back-position-y--center background--back-size--cover background--alignment--fullwidth appearance-animation appearance-animation--zoom-in appearance-animation--method--repeat IID-background-5fded0f6 CID-background-79490109">
<style>
	.IID-background-5fded0f6.appearance-animation--animated{animation-name:zoom-in;animation-duration:600ms}.IID-background-5fded0f6{border-radius:20px;min-height:463px;overflow:hidden}@media (min-width: 1488px){.IID-background-5fded0f6{border-radius:20px}}@media (max-width: 767px){.IID-background-5fded0f6{border-radius:16px}.IID-background-5fded0f6{min-height:380px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/fin-serv-img.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/fin-serv-img-jpg-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div data-castom-marks="1" class="grid IID-grid-6cfbf819 CID-grid-1659f761">
<style>
	.IID-grid-6cfbf819{z-index:1}
	
</style>
<div class="grid__parsys         ">
<div class="grid-item appearance-animation appearance-animation--fade-in-up appearance-animation--method--repeat IID-grid-item-3df2e7df CID-grid-item-1e7a19ff">
<style>.IID-grid-item-3df2e7df{z-index:1;position:absolute;bottom:-16px;left:-32px}.IID-grid-item-3df2e7df.appearance-animation--animated{animation-name:fade-in-up;animation-duration:1200ms;animation-delay:200ms}@media (max-width: 1229px){.IID-grid-item-3df2e7df{bottom:-20px;left:-16px}}@media (max-width: 767px){.IID-grid-item-3df2e7df{bottom:-56px;left:-10px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-background-79490109 IID-background-d6186a61">
<style>
	.IID-background-d6186a61{background-color:#fff;padding:28px 48px 28px 28px;border-radius:20px}@media (min-width: 1488px){.IID-background-d6186a61{padding-left:28px;padding-right:48px}.IID-background-d6186a61{border-radius:20px}}
	.IID-background-d6186a61 > .background__layers > .background__layer--back .background__color{background-color:transparent}
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image image--hover-item1 IID-image-64570106 CID-image-b4fec0a0">
<style>.IID-image-64570106{max-width:128px;margin:0 0 24px}.IID-image-64570106:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-428294190--2134200351-title" class="image__img" fill="none" height="41" id="svg-428294190--2134200351" role="img" viewBox="0 0 128 41" width="128">
<title id="svg-428294190--2134200351-title">Wyndham Capital. logo</title>
<g clip-path="url(#svg-428294190--2134200351-clip0_2141_336892)">
<g clip-path="url(#svg-428294190--2134200351-clip1_2141_336892)">
<path d="M19.5681 -0.000100489C8.38436 0.227229 -0.329947 9.20452 0.0088186 20.4061C0.33867 31.251 9.16887 39.533 19.8623 39.4973C31.202 39.4438 39.7113 30.3685 39.64 19.626C39.5642 8.6206 30.4309 -0.214058 19.5681 -0.000100489ZM31.3491 19.9826C31.0861 21.0212 30.6894 21.1282 29.8826 20.4373C29.7667 20.3392 29.6419 20.259 29.4012 20.0896C29.37 20.4507 29.3299 20.6869 29.3299 20.9276C29.3254 22.7507 29.3477 24.5693 29.321 26.3924C29.2764 29.1338 27.85 30.5379 25.1354 30.5423C21.5918 30.5512 18.0436 30.5512 14.5 30.5423C11.6383 30.5379 10.3189 29.2764 10.2387 26.3924C10.1852 24.3866 10.2297 22.3763 10.2297 20.0718C9.79291 20.4239 9.62799 20.5666 9.44969 20.6914C8.94154 21.0524 8.64735 20.9098 8.44231 20.3258C7.86729 18.6766 8.29521 17.2903 9.60124 16.1314C9.99795 15.7793 10.2877 15.1329 10.3412 14.5936C10.4526 13.4703 10.3768 12.3247 10.3768 11.0276C11.2906 11.0276 12.1554 10.9964 13.0156 11.0544C13.1806 11.0677 13.4079 11.4065 13.4569 11.6294C13.5327 11.9637 13.4748 12.3292 13.4748 12.8997C13.8581 12.6635 14.1255 12.5342 14.3484 12.3604C15.445 11.5001 16.5192 10.6042 17.6291 9.7617C18.9218 8.77661 20.6156 8.73203 21.877 9.71267C24.6986 11.9013 27.4979 14.1166 30.2704 16.3632C31.4204 17.2948 31.6968 18.5785 31.3402 19.9826H31.3491Z" fill="#1E2B3B" />
<path d="M25.5499 16.937C23.9676 15.6444 22.3317 14.4141 20.7805 13.0903C20.0717 12.4841 19.5369 12.5019 18.8549 13.0769C17.3393 14.3517 15.7614 15.5508 14.2682 16.8479C13.9026 17.1644 13.5906 17.7528 13.5817 18.2252C13.5148 20.9532 13.5594 23.6812 13.5416 26.4091C13.5371 27.0866 13.7021 27.3898 14.4777 27.363C16.1982 27.3006 17.9188 27.3541 19.6438 27.3586C21.6853 27.3586 23.7269 27.3586 25.9645 27.3586C25.9645 24.0021 25.9734 20.8239 25.9467 17.6458C25.9467 17.4051 25.755 17.0975 25.5544 16.937H25.5499ZM23.7447 22.491C23.6199 22.9947 23.4639 23.4895 23.348 23.9976C23.0716 25.2101 22.6169 25.5176 21.4268 25.1789C21.2084 25.1165 20.9855 24.8312 20.9008 24.5994C20.5309 23.5965 20.2144 22.5802 19.7998 21.341C19.5948 21.7243 19.4432 21.9383 19.3586 22.1745C19.1223 22.8476 18.8415 23.5207 18.7167 24.2161C18.5295 25.2457 17.8475 25.219 17.0541 25.2413C16.2027 25.2636 16.225 24.6217 16.1046 24.1403C15.6232 22.2236 15.1864 20.298 14.705 18.252C15.2978 18.252 15.8193 18.1851 16.3141 18.2787C16.5637 18.3278 16.898 18.622 16.9605 18.8671C17.1922 19.7631 17.326 20.6858 17.6959 21.6397C17.9857 20.7838 18.3333 19.9414 18.5473 19.0677C18.7033 18.4214 19.051 18.252 19.6483 18.2386C20.259 18.2208 20.7047 18.301 20.9097 18.9919C21.1683 19.879 21.5204 20.7348 21.8324 21.6084C21.926 21.5951 22.0152 21.5817 22.1088 21.5728C22.2202 20.7883 22.3852 20.0082 22.4253 19.2193C22.4654 18.4793 22.7328 18.1539 23.4995 18.2609C23.8784 18.3144 24.2662 18.2698 24.7966 18.2698C24.4311 19.7452 24.0879 21.1181 23.7447 22.491Z" fill="#1E2B3B" />
<path d="M67.4679 7.47592C66.8483 7.43135 66.563 7.66313 66.407 8.26935C66.0727 9.58875 65.6671 10.8948 65.2837 12.2008C65.199 12.4861 65.0653 12.758 64.9227 13.119C64.8157 12.9363 64.7444 12.8605 64.7221 12.7758C64.2808 11.2023 63.8128 9.63333 63.425 8.04648C63.3135 7.59627 63.1441 7.48484 62.7296 7.48929C61.0536 7.50267 59.3776 7.48929 57.7016 7.49375C56.9305 7.49375 56.9438 7.52941 56.8235 8.31838C56.5739 9.95426 56.2886 11.5812 56.0122 13.2127C55.9677 13.2171 55.9231 13.2216 55.8785 13.226C55.8072 13.0522 55.7091 12.8873 55.6601 12.7045C55.3436 11.5411 55.0004 10.3777 54.7374 9.20095C54.3407 7.44026 54.3674 7.44472 52.5889 7.48929C52.1744 7.49821 51.9426 7.63193 51.8401 8.04202C51.4879 9.45949 51.118 10.8725 50.7435 12.2855C50.6499 12.6376 50.5207 12.9764 50.4092 13.3241C50.2443 13.1592 50.1997 13.0299 50.1774 12.9006C49.9234 11.3851 49.6827 9.86511 49.4197 8.34512C49.2726 7.49375 49.2592 7.49375 48.4034 7.48929C47.6545 7.48929 46.9101 7.48929 46.0989 7.48929C46.2638 8.09551 46.402 8.55908 46.5134 9.02711C47.1776 11.8487 47.8417 14.6747 48.4836 17.5007C48.5638 17.8484 48.7199 17.9375 49.0408 17.9286C49.6648 17.9108 50.2889 17.9063 50.9129 17.9286C51.2873 17.942 51.4746 17.8217 51.5682 17.4428C51.8222 16.422 52.1031 15.4102 52.3883 14.3983C52.6023 13.6406 52.8341 12.8917 53.0569 12.134C53.2664 12.3836 53.3734 12.6287 53.4447 12.8873C53.8727 14.4028 54.3006 15.9228 54.7107 17.4428C54.7998 17.7682 54.9335 17.942 55.3035 17.9242C55.9855 17.8974 56.6675 17.9331 57.3495 17.9019C57.4877 17.8974 57.7061 17.728 57.7373 17.5988C58.0537 16.3329 58.3301 15.058 58.6288 13.7877C59.0478 12.0136 59.4757 10.2395 59.8991 8.46548C59.9482 8.45656 59.9972 8.44319 60.0507 8.43427C60.2958 9.12072 60.541 9.80717 60.7817 10.4936C61.6019 12.8249 62.4265 15.1606 63.2422 17.4963C63.5453 18.3565 63.0149 19.2703 62.1279 19.4352C61.7891 19.4977 61.4459 19.5289 61.067 19.5779C61.067 20.2866 61.0447 20.9686 61.0848 21.6417C61.0937 21.7799 61.3211 21.9938 61.4726 22.0206C63.4161 22.3682 65.0519 21.9448 65.832 19.7829C66.9553 16.6716 68.0429 13.547 69.1483 10.4268C69.4782 9.49515 69.7991 8.56354 70.1513 7.5517C69.8571 7.52495 69.652 7.48929 69.447 7.48929C68.7828 7.48038 68.1187 7.51604 67.459 7.47147L67.4679 7.47592Z" fill="#1E2B3B" />
<path d="M127.964 10.578C127.942 9.69101 127.706 8.79061 126.993 8.13982C125.892 7.14135 123.913 7.02992 122.642 7.90803C122.286 8.15319 121.974 8.46967 121.608 8.77723C120.993 7.70745 120.075 7.34194 118.907 7.33748C117.761 7.33302 116.852 7.78768 115.987 8.61677C115.956 8.39835 115.92 8.29137 115.929 8.18439C115.974 7.60493 115.689 7.45337 115.154 7.48458C114.534 7.52469 113.906 7.51132 113.282 7.48458C112.84 7.46675 112.675 7.59601 112.68 8.07742C112.711 11.1575 112.707 14.2376 112.715 17.3177C112.715 17.5049 112.715 17.6921 112.715 17.8838H116.041C116.041 17.652 116.041 17.4648 116.041 17.2731C116.041 15.2673 116.023 13.257 116.059 11.2511C116.063 10.9436 116.223 10.5602 116.442 10.3463C116.937 9.86039 117.587 9.86485 118.194 10.11C118.72 10.3195 118.711 10.8366 118.711 11.3135C118.711 13.3417 118.711 15.3698 118.711 17.3935C118.711 17.6431 118.648 17.9239 119.054 17.9239C120.021 17.9195 120.993 17.9239 121.996 17.9239C122.009 17.7456 122.031 17.6119 122.031 17.4826C122.031 15.3965 122.027 13.3105 122.023 11.2244C122.023 10.5914 122.263 10.2393 122.874 10.0744C123.908 9.79353 124.746 10.0744 124.693 11.3492C124.684 11.581 124.693 11.8172 124.693 12.049C124.693 13.8231 124.688 15.5971 124.71 17.3712C124.71 17.5539 124.871 17.8883 124.969 17.8927C125.972 17.9328 126.975 17.915 127.987 17.915C127.987 15.4055 128.031 12.9895 127.964 10.5736V10.578Z" fill="#1E2B3B" />
<path d="M90.5397 4.09756C90.5397 3.8836 90.5709 3.66073 90.5308 3.45569C90.5085 3.33979 90.3614 3.1615 90.2723 3.1615C89.2694 3.13921 88.262 3.14812 87.1966 3.14812V8.14938C86.6261 7.88193 86.1224 7.53871 85.5741 7.40944C83.7377 6.98153 81.9814 7.95771 81.3039 9.73623C80.5595 11.693 80.5773 13.6722 81.2816 15.629C82.0171 17.6794 84.1032 18.6467 86.1001 17.88C86.5548 17.7061 86.9381 17.3362 87.3928 17.0331C87.5532 17.6244 87.9514 17.9201 88.5874 17.9201C89.0153 17.9201 89.4477 17.88 89.8711 17.929C90.4194 17.9914 90.5576 17.7953 90.5576 17.2559C90.5353 12.8698 90.5442 8.48369 90.5442 4.09756H90.5397ZM87.2056 14.0956C87.2279 14.9024 86.9738 15.2501 86.1804 15.4774C85.485 15.6735 84.7361 15.4462 84.4731 14.8266C83.8848 13.4627 83.8937 12.0496 84.4821 10.6901C84.7807 9.99922 85.5117 9.82538 86.4121 10.0839C86.9604 10.2399 87.2145 10.6589 87.21 11.4078C87.21 11.6396 87.2056 11.8758 87.2011 12.1076C87.2011 12.3394 87.2011 12.5756 87.2011 12.8074C87.2011 13.1283 87.1967 13.4493 87.2011 13.7702C87.2011 13.8772 87.2011 13.9842 87.2056 14.0912V14.0956Z" fill="#1E2B3B" />
<path d="M100.337 8.12202C99.41 7.17259 96.9718 6.95417 95.7014 8.13094C95.5989 8.229 95.4741 8.30478 95.2646 8.46524V3.1698H92.0017V17.8838H95.269C95.269 17.71 95.269 17.5763 95.269 17.4425C95.269 15.2985 95.2512 13.1545 95.2869 11.0149C95.2913 10.7252 95.5053 10.3062 95.7415 10.1769C97.0208 9.486 98.1485 10.1769 98.1574 11.6077C98.1574 11.8395 98.1574 12.0758 98.1574 12.3076C98.1574 14.0014 98.1485 15.6997 98.1708 17.3935C98.1708 17.5718 98.3402 17.8972 98.4427 17.9017C99.4323 17.9418 100.422 17.9239 101.407 17.9239C101.443 17.7902 101.483 17.7189 101.483 17.6431C101.487 15.401 101.536 13.1634 101.474 10.9213C101.443 9.88717 101.104 8.90653 100.333 8.11756L100.337 8.12202Z" fill="#1E2B3B" />
<path d="M78.977 8.15425C77.7334 6.95965 75.3487 7.03989 74.0694 8.29689C73.9758 8.38604 73.8822 8.47518 73.695 8.64902C73.6504 8.38604 73.5969 8.25231 73.6147 8.1275C73.6905 7.57478 73.4008 7.4678 72.9283 7.49009C72.4246 7.51683 71.9164 7.49009 71.4083 7.49009C70.7843 7.49009 70.4737 7.80805 70.4767 8.44398C70.4767 8.54205 70.4767 8.64011 70.4767 8.73817C70.4722 11.6043 70.4722 14.4704 70.45 17.3366C70.45 17.769 70.5391 17.974 71.0339 17.9428C71.7515 17.8982 72.4781 17.9027 73.1957 17.9428C73.6638 17.9651 73.7886 17.8224 73.7797 17.3544C73.7529 15.2862 73.744 13.2224 73.793 11.1541C73.8019 10.8243 74.0293 10.3696 74.3012 10.2047C75.4735 9.48702 76.6324 10.169 76.6547 11.533C76.6547 11.5731 76.6547 11.6088 76.6547 11.6489C76.6547 13.2268 76.6636 14.8048 76.6636 16.3871C76.6636 16.8864 76.6636 17.3856 76.6636 17.8938H79.9309C79.9577 17.8002 79.9844 17.7467 79.9844 17.6887C79.9844 15.4466 80.0201 13.2045 79.9666 10.9624C79.9398 9.9506 79.766 8.92093 78.9815 8.16316L78.977 8.15425Z" fill="#1E2B3B" />
<path d="M111.454 13.9889C111.44 12.879 111.44 11.7691 111.4 10.6592C111.338 8.88068 110.099 7.7886 108.499 7.46767C106.97 7.1601 105.436 7.24925 104.019 8.06051C103.274 8.48396 102.289 9.63844 102.53 10.6235H105.695C105.904 9.78554 106.323 9.45569 107.05 9.52701C107.776 9.59833 108.16 10.1689 108.151 11.1183C108.151 11.4482 108.035 11.5641 107.705 11.5641C107.063 11.5596 106.395 11.4838 105.784 11.6265C104.946 11.8181 104.037 12.0365 103.35 12.5135C101.812 13.5877 101.826 16.0037 103.243 17.2607C104.184 18.0898 105.294 18.2903 106.462 18.0586C107.103 17.9337 107.701 17.5905 108.245 17.3766C108.454 17.5549 108.668 17.8892 108.895 17.9025C109.863 17.965 110.834 17.9293 111.81 17.9293C111.677 17.2295 111.512 16.6099 111.454 15.9814C111.396 15.3261 111.449 14.6575 111.44 13.9978L111.454 13.9889ZM106.898 15.87C106.243 15.9814 105.793 15.7719 105.606 15.2771C105.396 14.7333 105.579 13.873 106.078 13.6858C106.653 13.4718 107.304 13.4406 107.924 13.3649C107.986 13.356 108.12 13.5655 108.146 13.6858C108.187 13.873 108.155 14.0691 108.155 14.3455C108.28 15.3707 107.705 15.7318 106.898 15.87Z" fill="#1E2B3B" />
<path d="M70.1644 27.0634C70.0886 27.1169 70.0039 27.1526 69.8523 27.2373C69.9326 26.3859 69.4244 26.3859 68.8539 26.4171C68.3279 26.4439 67.8019 26.4439 67.2759 26.4171C66.7945 26.3904 66.6162 26.5107 66.6207 27.0634C66.6474 31.5031 66.6385 35.9427 66.6207 40.3867C66.6207 40.8236 66.7722 40.9306 67.1511 40.9261C67.9312 40.9216 68.7112 40.9172 69.4868 40.9395C69.8835 40.9484 70.044 40.8147 70.0217 40.3957C69.9905 39.678 70.0039 38.9559 70.0039 38.2338C70.0039 37.5786 70.0039 36.9233 70.0039 36.1522C70.356 36.4018 70.5834 36.6247 70.8597 36.7495C72.6204 37.5474 74.6753 36.9055 75.598 35.1983C76.7435 33.0765 76.7525 30.8211 75.8788 28.6458C74.8848 26.172 72.3574 25.5435 70.1733 27.0679L70.1644 27.0634ZM72.8477 33.4822C72.5892 34.2488 71.9518 34.5921 71.145 34.445C70.3025 34.289 70.0083 33.9235 70.0039 33.0364C70.0039 32.5684 70.0039 32.1004 70.0039 31.6323H69.9994C69.9994 31.1063 69.9861 30.5804 69.9994 30.0544C70.0173 29.3813 70.2446 29.1228 70.9087 28.9712C72.0365 28.7172 72.6694 29.0782 72.9547 30.2059C73.2311 31.3025 73.2088 32.4035 72.8433 33.4822H72.8477Z" fill="#1E2B3B" />
<path d="M97.5019 32.6139C97.4752 31.5218 97.493 30.4298 97.4306 29.3421C97.3727 28.2946 96.8066 27.5101 95.9329 26.9708C94.3906 26.0258 92.7235 26.0837 91.0787 26.5741C90.4502 26.7613 89.8574 27.1803 89.3403 27.6037C88.7653 28.0718 88.5425 28.7671 88.5157 29.5561H91.7429C91.9658 28.8206 92.2243 28.5398 92.7369 28.4596C93.566 28.3348 94.1187 28.8117 94.19 29.7166C94.2524 30.4431 94.2168 30.4832 93.4991 30.4788C92.3669 30.4699 91.2704 30.5456 90.1783 30.9691C88.587 31.5887 88.0967 33.3226 88.333 34.4905C88.7297 36.4518 90.6776 37.3165 92.4739 36.9911C93.1336 36.8708 93.7577 36.5231 94.3728 36.2913C94.4931 36.4428 94.6358 36.7994 94.7962 36.8039C95.8348 36.8529 96.8734 36.8306 98.0012 36.8306C97.3236 35.4221 97.542 34.0002 97.5064 32.6094L97.5019 32.6139ZM94.1677 33.9066C94.1098 34.4415 93.5036 34.7936 92.7191 34.8292C92.1396 34.856 91.7384 34.593 91.6047 34.1071C91.4532 33.5589 91.7251 32.7298 92.2288 32.556C92.8127 32.3554 93.4501 32.2974 94.1811 32.1548C94.1811 32.8724 94.2212 33.394 94.1677 33.9066Z" fill="#1E2B3B" />
<path d="M65.3103 29.4353C65.2746 28.3432 64.6996 27.5142 63.7769 26.957C62.2124 26.0165 60.5319 26.0744 58.8693 26.587C57.6658 26.957 56.7386 27.7014 56.4177 29.0208C56.3196 29.4264 56.3954 29.6047 56.8411 29.5958C57.7549 29.578 58.6687 29.5913 59.6003 29.5913C59.8722 28.6374 60.4249 28.2764 61.1961 28.4903C61.9048 28.6865 62.2034 29.4353 61.9583 30.4873C61.5125 30.4873 61.049 30.4962 60.5854 30.4873C59.636 30.4694 58.7489 30.7012 57.8663 31.0534C55.9229 31.8379 55.7268 34.6015 56.8188 35.8674C58.058 37.3072 60.7414 37.4275 61.9137 36.3399C61.9984 36.2597 62.1366 36.2374 62.1633 36.224C62.3728 36.4692 62.5199 36.8124 62.6893 36.8213C63.7145 36.8703 64.7397 36.848 65.6758 36.848C65.5644 35.9655 65.3994 35.1275 65.3682 34.2895C65.3103 32.6759 65.3549 31.0578 65.3058 29.4398L65.3103 29.4353ZM62.0563 33.6431C62.0385 34.3118 61.6373 34.6728 60.7815 34.8065C60.1084 34.9091 59.6582 34.6773 59.4755 34.129C59.2927 33.5718 59.5691 32.7249 60.1129 32.5377C60.6968 32.3371 61.3342 32.297 62.0563 32.1677C62.0563 32.7962 62.0653 33.2197 62.0563 33.6431Z" fill="#1E2B3B" />
<path d="M53.2039 33.1794C53.0568 33.1839 52.8518 33.3845 52.7894 33.5405C52.5219 34.1957 52.0138 34.5345 51.2917 34.4676C50.5829 34.4052 50.0614 33.9729 50.0213 33.2552C49.9634 32.2122 49.9544 31.1558 50.0079 30.1127C50.048 29.3416 50.5428 28.9538 51.3229 28.9137C52.1208 28.8735 52.571 29.2079 52.7448 29.9834C52.8072 30.2732 52.8874 30.4916 53.2574 30.4871C54.0375 30.4738 54.8175 30.5005 55.5976 30.4738C55.7135 30.4738 55.9319 30.2509 55.9185 30.1528C55.8026 29.2391 55.5886 28.3788 54.9691 27.6299C53.663 26.052 50.8103 25.994 49.3304 26.6671C48.3943 27.0906 47.6722 27.728 47.2042 28.6596C46.3751 30.2999 46.4152 32.0116 46.8164 33.7322C47.0482 34.7262 47.6054 35.5597 48.4389 36.157C49.999 37.2714 51.724 37.2892 53.4624 36.7409C54.9245 36.2818 55.972 34.7039 55.9185 33.1661C54.9869 33.1661 54.0954 33.1482 53.2039 33.1839V33.1794Z" fill="#1E2B3B" />
<path d="M87.4594 34.4714C86.3628 34.4625 86.1266 34.2441 86.1177 33.1342C86.1043 31.7925 86.1221 30.4464 86.1088 29.1047C86.1088 28.7704 86.2157 28.6367 86.5411 28.6634C86.6971 28.6768 86.8532 28.6634 87.0092 28.6634C87.5797 28.6634 87.8635 28.3796 87.8605 27.812C87.8605 27.7719 87.8605 27.7363 87.8605 27.6961C87.8516 26.4837 87.8516 26.4659 86.6169 26.4347C86.1979 26.4213 86.0865 26.2698 86.1088 25.873C86.14 25.2223 86.1177 24.567 86.1177 23.8672C85.1058 23.8672 84.1564 23.8716 83.2025 23.8672C82.8459 23.8672 82.8593 24.0856 82.8593 24.3352C82.8637 25.0083 82.8593 25.6814 82.8593 26.2876C82.4225 26.6486 81.736 26.0781 81.5399 26.7155C81.4062 27.1612 81.4819 27.6828 81.5131 28.1686C81.58 29.1448 82.4225 28.3647 82.8682 28.8684C82.8682 30.2057 82.8548 31.6633 82.8771 33.1164C82.886 33.7761 82.9261 34.4402 83.0331 35.091C83.1535 35.8176 83.5636 36.4194 84.2455 36.7091C85.3733 37.1905 86.559 37.1905 87.7357 36.8562C87.865 36.8205 88.0344 36.6333 88.0388 36.5085C88.07 35.8533 88.0522 35.198 88.0522 34.5116C87.8026 34.4982 87.6332 34.4848 87.4638 34.4804L87.4594 34.4714Z" fill="#1E2B3B" />
<path d="M98.9863 22.1075V36.8171H102.196V22.1075H98.9863Z" fill="#1E2B3B" />
<path d="M80.5281 26.4483C79.7703 26.4082 79.0081 26.4483 78.2503 26.4171C77.7555 26.3993 77.6263 26.5954 77.6307 27.0679C77.653 30.1257 77.6486 33.188 77.653 36.2458C77.653 36.433 77.6708 36.6202 77.6798 36.8253H80.9649C80.9649 33.4421 80.9694 30.1302 80.9471 26.8183C80.9471 26.689 80.6796 26.4528 80.5281 26.4483Z" fill="#1E2B3B" />
<path d="M79.3068 22.0762C78.1523 22.0762 77.497 22.6601 77.5015 23.672C77.5059 24.6615 78.2058 25.2722 79.329 25.2677C80.3721 25.2677 81.1299 24.5947 81.1254 23.6809C81.1209 22.6869 80.4256 22.0717 79.3068 22.0762Z" fill="#1E2B3B" />
</g>
</g>
<defs>
<clipPath id="svg-428294190--2134200351-clip0_2141_336892">
<rect fill="white" height="40.9372" width="128" />
</clipPath>
<clipPath id="svg-428294190--2134200351-clip1_2141_336892">
<rect fill="white" height="40.9372" width="128" />
</clipPath>
</defs>
</svg>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-53559ca6">
<style>
	.IID-custom-text-53559ca6{max-width:200px}.IID-custom-text-53559ca6:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-custom-text-53559ca6{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p><b>57%</b> Increase in employee satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-b220cbb3">
<style>.IID-carousel-slide-b220cbb3{position:relative;padding:0 0 0 90px}@media (min-width: 1488px){.IID-carousel-slide-b220cbb3{padding-left:90px}}@media (max-width: 1229px){.IID-carousel-slide-b220cbb3{padding:0 0 0 48px}}@media (max-width: 767px){.IID-carousel-slide-b220cbb3{padding:0 0 56px}}</style>
<div class="carousel-slide__wrapper" data-id="mslide3" data-random="false" data-delegate-hover="true">
<div class="background background--back-position-x--center background--back-position-y--center background--back-size--cover background--alignment--fullwidth appearance-animation appearance-animation--zoom-in appearance-animation--method--repeat IID-background-dd489328 CID-background-79490109">
<style>
	.IID-background-dd489328.appearance-animation--animated{animation-name:zoom-in;animation-duration:600ms}.IID-background-dd489328{border-radius:20px;min-height:463px;overflow:hidden}@media (min-width: 1488px){.IID-background-dd489328{border-radius:20px}}@media (max-width: 767px){.IID-background-dd489328{border-radius:16px}.IID-background-dd489328{min-height:380px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/education-img.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/education-img-jpg-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div data-castom-marks="1" class="grid CID-grid-1659f761 IID-grid-5f4623cb">
<style>
	.IID-grid-5f4623cb{z-index:1}
	
</style>
<div class="grid__parsys         ">
<div class="grid-item appearance-animation appearance-animation--fade-in-up appearance-animation--method--repeat IID-grid-item-1753566d CID-grid-item-1e7a19ff">
<style>.IID-grid-item-1753566d{z-index:1;position:absolute;bottom:-16px;left:-32px}.IID-grid-item-1753566d.appearance-animation--animated{animation-name:fade-in-up;animation-duration:1200ms;animation-delay:200ms}@media (max-width: 1229px){.IID-grid-item-1753566d{bottom:-20px;left:-16px}}@media (max-width: 767px){.IID-grid-item-1753566d{bottom:-56px;left:-10px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat CID-background-79490109 IID-background-61fb916f">
<style>
	.IID-background-61fb916f{background-color:#fff;padding:28px 48px 28px 28px;border-radius:20px}@media (min-width: 1488px){.IID-background-61fb916f{padding-left:28px;padding-right:48px}.IID-background-61fb916f{border-radius:20px}}
	.IID-background-61fb916f > .background__layers > .background__layer--back .background__color{background-color:transparent}
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image IID-image-a52c40b8 CID-image-b4fec0a0">
<style>.IID-image-a52c40b8{max-width:128px;margin:0 0 24px}.IID-image-a52c40b8:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg-1474015582-186155206-title" class="image__img" role="img" viewBox="0 0 128.03 18.3" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-1474015582-186155206" />
</svg>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-5114ced8">
<style>
	.IID-custom-text-5114ced8{max-width:200px}.IID-custom-text-5114ced8:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-custom-text-5114ced8{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p><b>76%</b> Increase in first contact resolution</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide IID-carousel-slide-bbf0621d CID-carousel-slide-fbb8715f">
<style>.IID-carousel-slide-bbf0621d{position:relative;padding:0 0 0 90px}@media (min-width: 1488px){.IID-carousel-slide-bbf0621d{padding-left:90px}}@media (max-width: 1229px){.IID-carousel-slide-bbf0621d{padding:0 0 0 48px}}@media (max-width: 767px){.IID-carousel-slide-bbf0621d{padding:0 0 56px}}</style>
<div class="carousel-slide__wrapper" data-id="mslide4" data-random="false" data-delegate-hover="true">
<div class="background background--back-position-x--center background--back-position-y--center background--back-size--cover background--alignment--fullwidth appearance-animation appearance-animation--zoom-in appearance-animation--method--repeat CID-background-79490109 IID-background-aa3f5dfe">
<style>
	.IID-background-aa3f5dfe.appearance-animation--animated{animation-name:zoom-in;animation-duration:600ms}.IID-background-aa3f5dfe{border-radius:20px;min-height:463px;overflow:hidden}@media (min-width: 1488px){.IID-background-aa3f5dfe{border-radius:20px}}@media (max-width: 767px){.IID-background-aa3f5dfe{border-radius:16px}.IID-background-aa3f5dfe{min-height:380px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/retail-img.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/retail-img-jpg-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div data-castom-marks="1" class="grid IID-grid-dcf5db21 CID-grid-1659f761">
<style>
	.IID-grid-dcf5db21{z-index:1}
	
</style>
<div class="grid__parsys         ">
<div class="grid-item appearance-animation appearance-animation--fade-in-up appearance-animation--method--repeat IID-grid-item-1f2a75d7 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-1f2a75d7{z-index:1;position:absolute;bottom:-16px;left:-32px}.IID-grid-item-1f2a75d7.appearance-animation--animated{animation-name:fade-in-up;animation-duration:1200ms;animation-delay:200ms}@media (max-width: 1229px){.IID-grid-item-1f2a75d7{bottom:-20px;left:-16px}}@media (max-width: 767px){.IID-grid-item-1f2a75d7{bottom:-56px;left:-10px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-background-8c756a59 CID-background-79490109">
<style>
	.IID-background-8c756a59{background-color:#fff;padding:28px 48px 28px 28px;border-radius:20px}@media (min-width: 1488px){.IID-background-8c756a59{padding-left:28px;padding-right:48px}.IID-background-8c756a59{border-radius:20px}}
	.IID-background-8c756a59 > .background__layers > .background__layer--back .background__color{background-color:transparent}
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image IID-image-9e2bb40e CID-image-b4fec0a0">
<style>.IID-image-9e2bb40e{max-width:128px;margin:0 0 24px}.IID-image-9e2bb40e:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--283603577-1406762410-title" class="image__img" role="img" viewBox="0 0 128 27.37" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--283603577-1406762410" />
</svg>
</div>
</div>
<div class="custom-text IID-custom-text-80c9e9ae CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-80c9e9ae{max-width:200px}.IID-custom-text-80c9e9ae:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-custom-text-80c9e9ae{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p><b>53%</b> Increase in customer satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-3f0c141a">
<style>.IID-carousel-slide-3f0c141a{position:relative;padding:0 0 0 90px}@media (min-width: 1488px){.IID-carousel-slide-3f0c141a{padding-left:90px}}@media (max-width: 1229px){.IID-carousel-slide-3f0c141a{padding:0 0 0 48px}}@media (max-width: 767px){.IID-carousel-slide-3f0c141a{padding:0 0 56px}}</style>
<div class="carousel-slide__wrapper" data-id="mslide5" data-random="false" data-delegate-hover="true">
<div class="background background--back-position-x--center background--back-position-y--center background--back-size--cover background--alignment--fullwidth appearance-animation appearance-animation--zoom-in appearance-animation--method--repeat IID-background-820845a1 CID-background-79490109">
<style>
	.IID-background-820845a1.appearance-animation--animated{animation-name:zoom-in;animation-duration:600ms}.IID-background-820845a1{border-radius:20px;min-height:463px;overflow:hidden}@media (min-width: 1488px){.IID-background-820845a1{border-radius:20px}}@media (max-width: 767px){.IID-background-820845a1{border-radius:16px}.IID-background-820845a1{min-height:380px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/gov-img.jpg" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/gov-img-jpg-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div data-castom-marks="1" class="grid IID-grid-c5a7d304 CID-grid-1659f761">
<style>
	.IID-grid-c5a7d304{z-index:1}
	
</style>
<div class="grid__parsys         ">
<div class="grid-item appearance-animation appearance-animation--fade-in-up appearance-animation--method--repeat IID-grid-item-9d20e054 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-9d20e054{z-index:1;position:absolute;bottom:-16px;left:-32px}.IID-grid-item-9d20e054.appearance-animation--animated{animation-name:fade-in-up;animation-duration:1200ms;animation-delay:200ms}@media (max-width: 1229px){.IID-grid-item-9d20e054{bottom:-20px;left:-16px}}@media (max-width: 767px){.IID-grid-item-9d20e054{bottom:-56px;left:-10px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="background background--alignment--fullwidth appearance-animation appearance-animation--custom appearance-transition appearance-transition--method--repeat IID-background-b1970f96 CID-background-79490109">
<style>
	.IID-background-b1970f96{background-color:#fff;padding:28px 48px 28px 28px;border-radius:20px}@media (min-width: 1488px){.IID-background-b1970f96{padding-left:28px;padding-right:48px}.IID-background-b1970f96{border-radius:20px}}
	.IID-background-b1970f96 > .background__layers > .background__layer--back .background__color{background-color:transparent}
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image image--hover-item1 IID-image-5b7739f1 CID-image-b4fec0a0">
<style>.IID-image-5b7739f1{max-width:56px;margin:0 0 24px}.IID-image-5b7739f1:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--1708029662-1220749649-title" class="image__img" role="img" viewBox="0 0 68.03 56" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1708029662-1220749649" />
</svg>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-5ec43951">
<style>
	.IID-custom-text-5ec43951{max-width:200px}.IID-custom-text-5ec43951:before{display:table-cell;content:'';width:9999px;max-width:100%}
	.IID-custom-text-5ec43951{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p><b>40%</b>&nbsp;reduction in costs</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-v2__close">
<button class="carousel-v2__close-btn" aria-label="Close dialog">
<span aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.42 12.31" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--21285217" />
</svg>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--center aem-GridColumn IID-background-c86c7005 aem-GridColumn--default--12 CID-background-79490109">
<style>
	.IID-background-c86c7005{color:#222;padding:112px 0 96px}@media (max-width: 1229px){.IID-background-c86c7005{padding:124px 0 96px}}@media (max-width: 767px){.IID-background-c86c7005{padding:70px 0 64px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid CID-grid-1659f761 IID-grid-17c9c1df">
<style>
	.IID-grid-17c9c1df{border-color:rgba(156,126,113,.3);border-width:1px;border-style:solid;border-radius:30px;overflow:hidden}@media (min-width: 1488px){.IID-grid-17c9c1df{border-radius:30px}}@media (max-width: 1229px){.IID-grid-17c9c1df{border-radius:20px}}@media (max-width: 767px){.IID-grid-17c9c1df{border-radius:14px}}
	@media (max-width: 767px){.IID-grid-17c9c1df{--halfHorizGap:0px;--halfVertGap:16px}}
</style>
<div class="grid__parsys l-flex--align-items-center      l-flex--flex-wrap-nowrap  l-mob-flex--flex-wrap-wrap">
<div class="grid-item l-mob-flex__col--12 IID-grid-item-7a2522d9 CID-grid-item-1e7a19ff">
<style>.IID-grid-item-7a2522d9{max-width:40%}.IID-grid-item-7a2522d9:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-grid-item-7a2522d9{overflow:hidden}@media (max-width: 767px){.IID-grid-item-7a2522d9{max-width:100%}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image CID-image-b4fec0a0 IID-image-fcabcb8e">
<style>.IID-image-fcabcb8e{max-width:481px;min-width:452px}.IID-image-fcabcb8e:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px) and (min-width: 768px){.IID-image-fcabcb8e{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-image-fcabcb8e{max-width:100%;min-width:100%}}</style>
<div class="image__wrap image__wrap--full-width ">
<img data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/mst-png-rendition.webp" src="data:image/svg+xml,%3Csvg viewBox=%220 0 962 552%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt="The RingCentral Desktop app contacts list and dial-pad on Microsoft Teams" width="962" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/mst.png" class="image__img" height="552" />
</div>
</div>
<div class="background background--alignment--center background--back-size--cover background--back-position-x--left-35 IID-background-9c539adb CID-background-79490109" data-position-left="twenty">
<style>
	.IID-background-9c539adb{min-height:279px}@media (min-width: 1230px){.IID-background-9c539adb{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-background-9c539adb{visibility:hidden;position:absolute;top:-99999px}}
	
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--image ">
<div class="background__image background__image--back background__image--desktop" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/mst.png" data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/mst-png-rendition.webp"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-mob-flex__col--12 IID-grid-item-93f8e56c CID-grid-item-1e7a19ff">
<style>.IID-grid-item-93f8e56c{padding:0 0 0 70px}@media (min-width: 1488px){.IID-grid-item-93f8e56c{padding-left:70px}}@media (max-width: 1229px){.IID-grid-item-93f8e56c{padding:0 0 0 45px}}@media (max-width: 767px){.IID-grid-item-93f8e56c{padding:0 16px 48px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text IID-custom-text-bf6977bb CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-bf6977bb{margin:0 0 8px}
	.IID-custom-text-bf6977bb{font-size:24px;font-weight:500;line-height:1.333;letter-spacing:-.08px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-bf6977bb{font-size:20px;line-height:1.4}}
</style>
<div class="custom-text__wrapper" data-style="h4" data-content-wrapper="true">
<h4>RingCentral answers the call for Microsoft Teams</h4>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-71e497c1">
<style>
	.IID-custom-text-71e497c1{margin:0 0 32px}
	.IID-custom-text-71e497c1{font-size:16px;font-weight:400;line-height:1.5;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="p" data-content-wrapper="true">
<p>Advanced, reliable telephony and a Microsoft-certified contact centre.</p>
</div>
</div>
<div class="cta-v2 cta-v2--icon-position--right CID-cta-v2-e0fe0cb4 IID-cta-v2-cf4a9690">
<style>
	.IID-cta-v2-cf4a9690{position:relative;margin:0 0 0 -12px}@media (min-width: 1488px){.IID-cta-v2-cf4a9690{margin-left:-12px}}
	.IID-cta-v2-cf4a9690 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-cf4a9690 .cta-v2__el .cta-v2__icon{width:16px;height:16px;color:#852800;rotate:180deg}.IID-cta-v2-cf4a9690 .cta-v2__el{border-radius:16px}.IID-cta-v2-cf4a9690 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-cf4a9690 .cta-v2__el:hover:before,.IID-cta-v2-cf4a9690 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-cf4a9690 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="noPostfix">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/microsoft-teams.html" tabindex="0" title="Learn more" target="_self" data-dl-element="button">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">Learn more</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--center IID-background-790a9608 aem-GridColumn aem-GridColumn--default--12 CID-background-79490109">
<style>
	.IID-background-790a9608{color:#222;padding:0 0 64px}@media (max-width: 1229px){.IID-background-790a9608{padding:0 0 56px}}@media (max-width: 767px){.IID-background-790a9608{padding:0 0 44px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid CID-grid-1659f761 IID-grid-9e7fb62">
<style>
	
	.IID-grid-9e7fb62{--halfHorizGap:8px;--halfVertGap:0px}@media (max-width: 767px){.IID-grid-9e7fb62{--halfHorizGap:0px;--halfVertGap:10px}}
</style>
<div class="grid__parsys l-flex--align-items-flex-end   l-flex--justify-content-space-between     ">
<div class="grid-item IID-grid-item-59c6bfb6 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-49d15531">
<style>
	.IID-custom-text-49d15531{max-width:350px;font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif}.IID-custom-text-49d15531:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-custom-text-49d15531{max-width:250px}}@media (max-width: 767px){.IID-custom-text-49d15531{max-width:100%}}
	.IID-custom-text-49d15531{font-size:48px;font-weight:500;line-height:1.167;letter-spacing:-.24px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-49d15531{font-size:32px;line-height:1.25;letter-spacing:.16px}}@media (max-width: 767px){.IID-custom-text-49d15531{letter-spacing:-.16px}}
</style>
<div class="custom-text__wrapper" data-style="h2" data-content-wrapper="true">
<h2>Enable existing workflows</h2>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-584b42e8 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="cta-v2 cta-v2--icon-position--right IID-cta-v2-81a72cc7 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-81a72cc7{margin:0 0 0 -12px}@media (min-width: 1488px){.IID-cta-v2-81a72cc7{margin-left:-12px}}
	.IID-cta-v2-81a72cc7 .cta-v2__el{padding-top:5px;padding-bottom:5px;padding-left:12px;padding-right:8px;font-size:18px;font-weight:500;line-height:22px;color:#852800;gap:16px}.IID-cta-v2-81a72cc7 .cta-v2__el .cta-v2__icon{width:16px;height:16px;rotate:180deg}.IID-cta-v2-81a72cc7 .cta-v2__el{border-radius:16px}.IID-cta-v2-81a72cc7 .cta-v2__el:before{left:auto;right:0;width:32px;transition:width 300ms}.IID-cta-v2-81a72cc7 .cta-v2__el:hover:before,.IID-cta-v2-81a72cc7 .cta-v2__el:focus:before{width:100%}.IID-cta-v2-81a72cc7 .cta-v2__el:before{background-color:#fae5d1}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="noPostfix">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/" tabindex="0" title="See all integrations" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__icon " aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--1926380478" />
</svg>
</span>
<span class="cta-v2__content">
<span class="cta-v2__text">See all integrations</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--fullwidth IID-background-af1cc75 aem-GridColumn aem-GridColumn--default--12 CID-background-79490109">
<style>
	.IID-background-af1cc75{margin:0 0 64px}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="carousel-v2 carousel-v2--phoenix carousel-v2--slides-aligning--top IID-carousel-v2-e0c034c7 CID-carousel-v2-79fd298e">
<style>
	.IID-carousel-v2-e0c034c7{margin:0 0 32px}
	.IID-carousel-v2-e0c034c7{color:null}.IID-carousel-v2-e0c034c7__extra-content-close{color:#c7c6c5}@media (max-width: 1229px){.IID-carousel-v2-e0c034c7__arrow--next{margin-left:25px}.IID-carousel-v2-e0c034c7__arrow--prev{margin-right:25px}}@media (max-width: 767px){.IID-carousel-v2-e0c034c7__arrow{background-color:#fff}}
</style>
<div class="carousel-v2__wrapper" data-ordered-slides="false" data-random="false" data-show-slide-by-hash="false" data-animation="slide" data-desktop-arrows="false" data-tablet-arrows="false" data-mobile-arrows="false" data-desktop-dots="false" data-tablet-dots="false" data-mobile-dots="false" data-desktop-close-btn="false" data-tablet-close-btn="false" data-mobile-close-btn="false" data-desktop-loop="true" data-tablet-loop="true" data-mobile-loop="true" data-desktop-slides-per-view="4" data-tablet-slides-per-view="3" data-mobile-slides-per-view="1" data-desktop-slides-per-transition="0" data-tablet-slides-per-transition="0" data-mobile-slides-per-transition="0" data-mobile-drag="true" data-desktop-speed="300" data-tablet-speed="300" data-mobile-speed="300" data-autoplay-delay="0" data-autoplay-iteration-count="0" data-desktop-scroll="true" data-tablet-scroll="true" data-mobile-scroll="true" data-desktop-arrows-color="#001138" data-desktop-dots-color="#CCCFD7" data-desktop-dots-active-color="#001138" data-desktop-close-btn-color="#C7C6C5" data-extra-content-showing-delay="0" data-extra-content-showing-duration="3000" data-desktop-space-between-slides="32" data-aria-label-previous-arrow="Previous" data-aria-label-next-arrow="Next">
<div class="carousel-v2__content">
<div class="carousel-v2__bg IID-carousel-v2-e0c034c7__bg">
<div class="carousel-v2__bg-inner"></div>
</div>
<div class="carousel-v2__container">
<div class="carousel-v2__body">
<div class="carousel-v2__inner">
<div class="carousel-v2__slides IID-carousel-v2-e0c034c7__slides" aria-label="Access more information by using the left and right arrow keys. Slide 1 of 6 currently selected.">
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-27e4a4b0">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-a0dc33cb">
<style>
	.IID-background-a0dc33cb{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-a0dc33cb{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image CID-image-b4fec0a0 IID-image-2dd81df8">
<style>.IID-image-2dd81df8{max-width:42px;margin:auto}.IID-image-2dd81df8:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--1729942880--859294801-title" class="image__img" height="60" id="svg--1729942880--859294801" role="img" viewBox="0 0 79 60" width="79">
<title id="svg--1729942880--859294801-title">Zendesk logo</title>
<defs>
<path d="M343.5 652.84V697H307zm0-15.84a18.24 18.24 0 1 1-36.5 0zm24.23 41.73A18.24 18.24 0 0 1 385.96 697h-36.45c0-10.1 8.15-18.27 18.22-18.27zm-18.22 2.43V637H386z" id="svg--1729942880--859294801-zanta" />
</defs>
<g>
<g transform="translate(-307 -637)">
<use fill="#0c363d" xlink:href="#svg--1729942880--859294801-zanta" />
</g>
</g>
</svg>
</div>
</div>
<div class="cta-v2 IID-cta-v2-b50a25ea CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-b50a25ea{position:absolute;bottom:20px;left:20px;border-radius:3px}@media (min-width: 1488px){.IID-cta-v2-b50a25ea{border-radius:3px}}
	.IID-cta-v2-b50a25ea .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-b50a25ea .cta-v2__el:hover,.IID-cta-v2-b50a25ea .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-b50a25ea .cta-v2__el:active{color:#222}.IID-cta-v2-b50a25ea .cta-v2__el{border-radius:3px}.IID-cta-v2-b50a25ea.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-b50a25ea .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-b50a25ea .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/zendesk-integration" tabindex="0" title="Zendesk" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">Zendesk</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-486ea44e">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-25b9a3ed">
<style>
	.IID-background-25b9a3ed{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-25b9a3ed{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image IID-image-f93b7242 CID-image-b4fec0a0">
<style>.IID-image-f93b7242{max-width:44px;margin:auto}.IID-image-f93b7242:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-1124113270-2010756541-title" class="image__img" fill="none" height="44" id="svg-1124113270-2010756541" role="img" viewBox="0 0 45 44" width="45">
<title id="svg-1124113270-2010756541-title">Microsoft logo</title>
<path d="M21.4085.168945H.87793V20.6995H21.4085V.168945z" fill="#F45220" />
<path d="M44.0635.168945H23.533V20.6995h20.5305V.168945z" fill="#81BE00" />
<path d="M21.4086 22.7063H.878052v20.5306H21.4086V22.7063z" fill="#01A8F0" />
<path d="M44.0635 22.7063H23.533v20.5306h20.5305V22.7063z" fill="#FFBC04" />
</svg>
</div>
</div>
<div class="cta-v2 IID-cta-v2-fb2d7f04 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-fb2d7f04{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-fb2d7f04 .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-fb2d7f04 .cta-v2__el:hover,.IID-cta-v2-fb2d7f04 .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-fb2d7f04 .cta-v2__el:active{color:#222}.IID-cta-v2-fb2d7f04 .cta-v2__el{border-radius:3px}.IID-cta-v2-fb2d7f04.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-fb2d7f04 .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-fb2d7f04 .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/p/microsoft-apps" tabindex="0" title="Microsoft" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">Microsoft</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide IID-carousel-slide-7cc625ec CID-carousel-slide-fbb8715f">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth IID-background-1f3dd20f CID-background-79490109">
<style>
	.IID-background-1f3dd20f{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-1f3dd20f{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image CID-image-b4fec0a0 IID-image-a0300418">
<style>.IID-image-a0300418{max-width:48px;margin:auto}.IID-image-a0300418:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-323309320-1188259756-title" class="image__img" id="svg-323309320-1188259756" role="img" version="1.1" viewBox="0 0 48 48" x="0" xml:space="preserve" y="0"><title id="svg-323309320-1188259756-title">Salesforce logo</title><style>.st0{fill:#00a1e0}.st1{fill:#fff}</style><path class="st0" d="M19.04 21.41a.926.926 0 00-.46.09c-.14.07-.26.18-.35.31-.12.21-.19.43-.22.67h2.03c-.01-.23-.07-.46-.18-.67a.894.894 0 00-.35-.32.855.855 0 00-.47-.08zM13.55 23.11c-.25-.04-.51-.06-.76-.07-.28-.02-.56.05-.8.2-.09.06-.15.14-.2.24-.04.1-.06.2-.06.31-.01.13.02.25.08.36.04.07.1.12.16.17.25.14.54.19.82.16.25-.02.5-.05.75-.1v-1.27zM30.25 21.43a.888.888 0 00-.45.09c-.14.07-.26.17-.34.3-.17.35-.26.74-.26 1.13 0 .39.09.78.26 1.13.08.13.2.24.34.31s.3.1.45.09c.16.01.31-.02.45-.09.14-.07.26-.18.35-.31.21-.33.32-.71.31-1.11.02-.39-.07-.78-.26-1.13a.89.89 0 00-.85-.41zM41.36 21.41a.868.868 0 00-.45.09c-.14.07-.26.18-.34.31-.12.21-.19.43-.22.67h2.03c-.01-.24-.07-.47-.19-.67a.894.894 0 00-.35-.32.89.89 0 00-.48-.08z" /><path class="st0" d="M37.78 11.6c-1.45 0-2.88.31-4.2.9a8.535 8.535 0 00-3.1-3.24c-1.31-.78-2.8-1.2-4.32-1.21-1.14 0-2.27.24-3.32.7a8.438 8.438 0 00-2.77 1.95c-.86-1.15-1.98-2.09-3.27-2.73S14.08 7 12.64 7a9.41 9.41 0 00-4.46 1.16c-1.37.75-2.53 1.82-3.38 3.13s-1.36 2.8-1.49 4.35c-.13 1.55.13 3.11.75 4.54A8.193 8.193 0 000 27.28c-.02 2.15.82 4.22 2.32 5.75a8.134 8.134 0 005.71 2.43c.56 0 1.11-.06 1.65-.17a8.583 8.583 0 003.07 4.08 8.63 8.63 0 009.75.24 8.6 8.6 0 003.26-3.92 7.6 7.6 0 005.62.41 7.537 7.537 0 004.34-3.59c.67.14 1.35.2 2.03.2 2.75-.08 5.35-1.23 7.26-3.2a10.55 10.55 0 000-14.7 10.552 10.552 0 00-7.26-3.2h.03zM10.37 23.85c0 .85-.61 1.38-1.59 1.38-.5.01-1-.11-1.44-.34L7 24.72v-.11l.19-.55c0-.09.1-.06.13 0l.16.1c.38.24.82.37 1.27.36.43 0 .69-.22.69-.54 0-.33-.41-.47-.88-.61h-.1c-.65-.18-1.35-.46-1.35-1.29a1.374 1.374 0 01.47-1c.14-.13.31-.22.5-.28.18-.06.38-.08.57-.05h.1c.5 0 .98.13 1.41.39.02.01.04.03.05.05.01.02.01.04 0 .07l-.21.54c0 .09-.13 0-.13 0-.39-.2-.81-.32-1.25-.32-.39 0-.63.2-.63.49h.02c0 .32.43.47.91.63H9c.65.2 1.34.49 1.34 1.28l.03-.03zm4.06 1.11l-.19.05c-.09 0-.43.09-.7.13-.28.05-.57.07-.85.07-.25 0-.49-.02-.73-.07-.21-.04-.4-.13-.57-.25-.16-.11-.29-.26-.37-.44-.09-.2-.14-.42-.13-.64 0-.23.05-.45.15-.65.1-.19.23-.35.41-.47.17-.13.37-.22.58-.27.22-.06.46-.09.69-.09h.44l.46.05v-.12c0-.38-.08-.55-.23-.67-.2-.14-.45-.2-.69-.18-.42 0-.83.1-1.21.28h-.03c-.01 0-.02 0-.03-.01-.01 0-.02-.01-.02-.02-.01-.01-.01-.02-.01-.03l-.32-.49c-.01-.02-.02-.04-.02-.06 0-.02.01-.04.02-.06.27-.15.56-.26.86-.31.24-.04.49-.07.74-.07.46-.03.92.11 1.29.4.16.16.28.36.36.57.08.21.1.44.08.67v2.58c.01.01.02.02.02.03.01.01.01.02.01.04 0 .01-.01.03-.01.04s-.02.02-.03.03l.03-.04zm1.9.08c0 .02-.01.04-.02.06s-.04.02-.06.02h-.75c-.02 0-.04-.01-.06-.03a.219.219 0 01-.03-.05v-6c0-.02.01-.04.02-.06.01-.02.04-.03.06-.03h.74c.01 0 .02 0 .03.01.01 0 .02.01.03.02s.01.02.02.03v6.03zm4.59-1.94c0 .07-.08.08-.08.08H18c-.02.34.1.68.32.94.26.23.61.35.95.32.39.01.78-.05 1.14-.2.01 0 .02-.01.03-.01.01 0 .02 0 .03.01.01 0 .02.01.03.02.01.01.01.02.02.03l.18.51v.14c-.44.2-.92.3-1.4.27-.35.01-.69-.05-1.02-.16-.27-.1-.51-.26-.7-.47a2.14 2.14 0 01-.41-.72c-.08-.29-.13-.59-.12-.89 0-.3.04-.61.12-.9.08-.26.21-.51.38-.73.18-.21.4-.37.65-.49.29-.13.6-.19.91-.18.28 0 .55.05.8.16.2.1.38.24.53.41.16.19.28.42.36.66.1.39.12.8.05 1.2h.07zm2.32 2.13c-.5.01-1-.11-1.44-.34l-.27-.16s-.05 0 0-.11l.19-.55c.01-.01.02-.02.03-.02.01 0 .02-.01.04-.01s.02 0 .04.01c.01 0 .02.01.03.02l.16.1c.37.22.8.33 1.23.32.43 0 .7-.22.7-.54 0-.33-.42-.47-.89-.61h-.1c-.65-.18-1.35-.46-1.35-1.29a1.374 1.374 0 01.97-1.28c.18-.06.38-.08.57-.05h.11c.5 0 .98.13 1.41.39.01.02.02.04.02.06 0 .02-.01.04-.02.06l-.2.55c0 .09-.12 0-.12 0-.39-.2-.82-.32-1.26-.32-.39 0-.63.2-.63.49 0 .32.43.47.91.63h.08c.65.2 1.34.49 1.34 1.28-.01.84-.62 1.37-1.55 1.37zm4.89-3.8c0 .02-.02.04-.03.06l-.06.03h-.92l-.63 3.58c-.05.32-.13.64-.24.94-.08.24-.2.45-.37.64a1.2 1.2 0 01-.51.35c-.22.08-.46.11-.69.11-.13.02-.27.02-.41 0l-.3-.11c-.02-.02-.02-.04-.02-.06 0-.02.01-.04.02-.06l.2-.57.02-.02c.01 0 .02-.01.03-.01.01 0 .02 0 .03.01.01 0 .02.01.02.02h.15c.07.01.15.01.22 0 .11 0 .22-.02.32-.05.1-.03.19-.1.25-.19.09-.12.15-.26.19-.41.08-.22.14-.45.17-.69l.63-3.52h-.62c-.07 0-.1 0-.09-.09l.1-.59c0-.02.02-.04.03-.06l.06-.03h.58v-.19c.05-.47.25-.92.56-1.28.16-.15.35-.26.55-.33.2-.07.42-.1.64-.09.12-.01.25-.01.38 0l.27.07c.01 0 .02.01.03.01l.02.02c0 .01.01.02.01.03v.03l-.21.6s0 .07-.12 0h-.36c-.1-.02-.2-.02-.3 0-.09.03-.17.09-.23.15-.09.08-.15.18-.19.29-.06.21-.11.42-.15.64h.89c.07 0 .1.03.09.09v.68zm4.06 2.4c-.07.27-.2.51-.37.73-.17.21-.39.37-.64.48-.3.12-.61.18-.93.17s-.63-.08-.92-.21c-.25-.11-.46-.27-.63-.48-.18-.21-.3-.46-.38-.73a3.35 3.35 0 010-1.78c.07-.26.2-.51.38-.72.17-.19.39-.35.63-.45.57-.23 1.2-.23 1.77 0 .25.12.46.28.64.49.17.21.29.46.37.72.08.29.12.59.12.89.01.3-.02.6-.09.89h.05zm3.23-2.34c0 .01 0 .02-.01.03-.01.01-.01.02-.02.03-.01.01-.02.01-.03.01h-.03c-.1-.01-.2-.01-.3 0-.13 0-.25.02-.38.05a.894.894 0 00-.59.62c-.07.24-.1.49-.09.74v2.09h-.8c-.02 0-.04-.01-.06-.02-.02-.01-.03-.04-.03-.06v-4.14c0-.02.01-.04.02-.06.02-.02.04-.02.06-.02h.72c.02 0 .04.01.06.02.02.02.02.04.02.06v.34c.13-.15.29-.27.47-.35.23-.1.48-.13.72-.11.16.01.31.04.47.08 0 0 .06 0 0 .1s-.2.46-.2.59zM39.07 25c-.37.15-.77.22-1.17.21a2.039 2.039 0 01-1.62-.62c-.38-.45-.57-1.03-.55-1.62 0-.3.05-.6.14-.89.08-.26.22-.51.4-.72.18-.21.41-.37.66-.49.29-.13.61-.19.92-.18.21-.01.41-.01.62 0 .19.03.37.08.55.14.02.01.04.02.05.04.01.02.01.04 0 .06l-.2.57c0 .01-.01.02-.01.03-.01.01-.01.02-.02.02-.01.01-.02.01-.03.01h-.03c-.28-.09-.57-.14-.86-.13a1.065 1.065 0 00-.92.41c-.23.33-.34.73-.31 1.14-.04.41.09.82.35 1.14.13.12.27.21.44.27.16.06.34.09.51.08.15.01.3.01.46 0 .13-.02.26-.06.38-.11.01 0 .02-.01.03-.01.01 0 .02 0 .03.01.01 0 .02.01.03.02.01.01.01.02.02.03l.2.57c-.04 0-.06.01-.07.02zm4.13-1.9c0 .02-.01.04-.03.05s-.03.02-.05.03h-2.79c-.01.34.1.68.32.94.26.23.61.34.95.32.39.02.78-.05 1.15-.2.01 0 .02-.01.03-.01.01 0 .02 0 .03.01.01 0 .02.01.02.02.01.01.01.02.01.03l.18.51v.14c-.44.2-.92.3-1.4.27-.35.01-.69-.05-1.02-.16-.27-.1-.51-.26-.7-.47a2.14 2.14 0 01-.41-.72c-.08-.29-.13-.59-.12-.89 0-.3.04-.61.12-.9.08-.27.2-.51.38-.73.18-.21.39-.37.64-.49.29-.13.61-.19.92-.18.28 0 .55.05.8.16.2.1.38.24.53.41.16.19.28.42.36.66.12.4.14.8.08 1.2z" /><path class="st1" d="M42.76 21.24c-.15-.17-.33-.31-.53-.41-.25-.11-.53-.16-.8-.16-.32-.01-.63.06-.92.18-.25.12-.46.28-.64.49-.17.22-.3.46-.38.73a3.424 3.424 0 000 1.79c.08.27.22.51.41.72.19.21.43.37.7.47.33.12.67.17 1.02.16.48.02.96-.07 1.4-.27 0 0 .06-.05 0-.14l-.18-.51c0-.01-.01-.02-.01-.03-.01-.01-.02-.02-.03-.02s-.02-.01-.03-.01c-.01 0-.02 0-.03.01-.36.15-.75.22-1.15.2-.35.02-.69-.1-.95-.32-.22-.26-.34-.6-.32-.94h2.79c.02 0 .04-.01.05-.03.01-.01.02-.03.03-.05.06-.4.03-.81-.08-1.21-.08-.24-.19-.46-.35-.65zm-2.41 1.24c.03-.24.11-.46.22-.67.1-.12.22-.21.35-.28.14-.06.28-.1.44-.1.15 0 .3.03.44.1.14.06.26.16.35.28.12.2.19.43.19.67h-1.99zM20.43 21.24c-.15-.17-.33-.31-.53-.41-.25-.11-.53-.16-.8-.16-.31-.01-.63.05-.91.18-.25.11-.47.28-.65.49-.17.22-.3.47-.38.73a3.424 3.424 0 000 1.79c.08.27.22.51.41.72.2.21.43.37.7.47.33.12.67.17 1.02.16.48.02.96-.07 1.4-.27 0 0 .06-.05 0-.14l-.18-.51c0-.01-.01-.02-.02-.03-.01-.01-.02-.02-.03-.02-.01 0-.02-.01-.03-.01-.01 0-.02 0-.03.01-.36.15-.75.22-1.14.2-.35.02-.69-.1-.95-.32-.23-.26-.35-.6-.32-.94h2.78s.08 0 .08-.08c.06-.4.03-.82-.08-1.21a2.12 2.12 0 00-.34-.65zm-2.42 1.24c.03-.24.11-.46.22-.67.09-.13.21-.24.35-.31.14-.07.3-.1.46-.09a.897.897 0 01.79.41c.11.21.18.43.18.67h-2zM31.77 21.33a1.92 1.92 0 00-.64-.49c-.57-.23-1.2-.23-1.77 0-.24.11-.46.28-.63.49-.17.21-.3.46-.38.72a3.35 3.35 0 000 1.78c.07.27.2.52.38.73.16.19.37.34.6.44.57.23 1.2.23 1.77 0 .25-.11.47-.27.64-.48.17-.22.29-.46.37-.73a3.35 3.35 0 000-1.78c-.08-.25-.19-.48-.34-.68zm-.72 2.74a.888.888 0 01-.8.4.868.868 0 01-.45-.09.848.848 0 01-.34-.31c-.17-.35-.26-.74-.26-1.13s.09-.78.26-1.13c.09-.13.2-.23.34-.3.14-.07.29-.1.45-.09.16-.01.31.02.45.09.14.07.26.17.35.3.22.34.33.75.31 1.16.01.39-.1.77-.31 1.1zM38.79 24.29c-.12.05-.25.09-.38.11-.15.01-.3.01-.46 0-.17.01-.35-.02-.51-.08-.16-.06-.31-.15-.44-.27-.24-.3-.37-.69-.35-1.07-.02-.39.09-.77.31-1.1.11-.14.25-.24.41-.32.16-.07.33-.1.51-.09.29-.01.59.04.86.13h.03c.01 0 .02-.01.03-.01.01-.01.02-.01.02-.02.01-.01.01-.02.01-.03l.2-.57c.01-.02 0-.04 0-.06-.01-.02-.03-.03-.05-.04a3.41 3.41 0 00-.55-.14 6.41 6.41 0 00-.62 0c-.32-.01-.63.06-.92.18-.25.11-.48.28-.66.49-.18.21-.31.46-.4.72-.09.29-.14.59-.14.89-.03.6.16 1.19.55 1.65a2.039 2.039 0 001.62.62c.4-.02.8-.11 1.17-.28.01-.01.01-.03.01-.05s0-.03-.01-.05l-.2-.57c-.01-.01-.02-.03-.03-.04h-.01zM14 21.05c-.37-.29-.83-.43-1.29-.4-.25 0-.5.03-.74.07-.3.06-.59.16-.86.31-.01.02-.02.04-.02.06 0 .02.01.04.02.06l.19.54c0 .01.01.02.01.03l.02.02c.01 0 .02.01.03.01h.03c.38-.19.79-.28 1.21-.28.24-.02.49.05.69.18.15.12.23.29.23.67v.12l-.44-.08h-.44c-.23 0-.47.03-.69.09-.21.06-.4.15-.58.27a1.331 1.331 0 00-.56 1.12c-.01.22.04.44.13.64.08.18.2.33.37.44.17.13.36.21.57.25.24.05.49.07.73.07.29 0 .57-.02.85-.07.27 0 .61-.11.7-.13l.19-.05c.02 0 .04-.02.05-.03.01-.02.02-.04.01-.06v-2.6c.02-.22 0-.45-.08-.67-.05-.22-.17-.41-.33-.58zm-1.2 3.44c-.28.03-.57-.03-.82-.16a.852.852 0 01-.16-.17.656.656 0 01-.08-.36c-.01-.11.01-.21.06-.31.04-.1.11-.18.2-.24.24-.16.52-.23.8-.2.26.01.51.03.76.07v1.28c-.25.04-.5.07-.76.09zM35.55 20.8a2.43 2.43 0 00-.47-.08c-.25-.02-.49.02-.72.11-.18.08-.34.2-.47.35v-.34c0-.02-.01-.04-.02-.06-.02-.02-.04-.02-.06-.02h-.72c-.02 0-.04.01-.06.02s-.02.04-.02.06V25c0 .02.01.04.03.06.02.01.04.02.06.02h.79v-2.11c-.01-.25.02-.5.09-.74.05-.15.13-.29.24-.41.1-.1.22-.17.35-.21.12-.03.25-.05.38-.05.1-.01.2-.01.3 0h.03c.01 0 .02-.01.03-.01.01-.01.02-.02.02-.03.01-.01.01-.02.01-.03 0-.13.18-.52.21-.59.05-.07.02-.1 0-.1zM9.03 22.55h-.09c-.49-.16-.91-.3-.91-.63h-.02c0-.28.24-.49.63-.49.44.01.86.12 1.25.32 0 0 .1.06.13 0l.2-.55c.01-.02.01-.04 0-.07a.12.12 0 00-.05-.05 2.9 2.9 0 00-1.41-.39h-.1c-.18-.02-.37-.01-.55.04-.18.05-.34.14-.49.25-.14.12-.26.26-.35.42-.09.16-.14.34-.16.52 0 .83.7 1.11 1.35 1.29h.1c.48.14.88.27.88.61 0 .31-.26.54-.69.54-.45.01-.89-.12-1.27-.36l-.16-.04s-.1-.05-.13 0l-.19.65v.11l.27.16c.44.24.94.36 1.44.34 1.02 0 1.59-.53 1.59-1.38.04-.8-.65-1.08-1.27-1.29zM24.78 23.85c0-.79-.69-1.07-1.34-1.28h-.08c-.49-.16-.91-.3-.91-.63 0-.28.24-.49.63-.49.44.01.87.12 1.26.32 0 0 .09.06.12 0l.2-.55c.01-.02.02-.04.02-.06 0-.02-.01-.04-.02-.06-.42-.28-.91-.45-1.42-.48h-.1c-.19-.03-.39-.01-.57.04-.19.05-.36.14-.51.27-.15.12-.27.28-.35.45-.09.17-.13.36-.14.55 0 .83.7 1.11 1.35 1.29h.1c.48.14.89.27.89.61 0 .31-.27.54-.7.54-.45.01-.89-.12-1.27-.36l-.16-.1c-.01-.01-.02-.02-.03-.02-.01 0-.02-.01-.04-.01-.01 0-.02 0-.04.01-.01 0-.02.01-.03.02l-.19.55v.11l.27.16c.44.24.94.36 1.44.34 1.01.16 1.62-.37 1.62-1.22zM15.45 18.91c-.02 0-.04.01-.06.03-.02.02-.02.04-.02.06v6c0 .02.01.04.03.05.01.01.03.02.06.03h.74c.02 0 .04-.01.06-.02.02-.02.02-.04.02-.06v-5.96-.03c0-.01-.01-.02-.02-.03-.01-.01-.02-.02-.03-.02-.01 0-.02-.01-.03-.01l-.75-.04z" /><path class="st1" d="M28.09 20.75h-.89c.04-.22.09-.43.15-.64.04-.11.11-.21.19-.29.07-.07.15-.12.23-.15.1-.02.2-.02.3 0h.48l.21-.6v-.03c0-.01 0-.02-.01-.03 0-.01-.01-.02-.02-.02-.01-.01-.02-.01-.03-.01l-.27-.06a2.41 2.41 0 00-.38 0c-.22-.01-.43.02-.64.09-.2.07-.39.19-.55.33-.31.36-.5.81-.56 1.28v.19h-.6c-.02 0-.04.01-.06.03-.02.01-.03.03-.03.06l-.1.59c0 .05 0 .09.09.09h.62L25.55 25c-.03.24-.09.47-.17.69-.04.14-.11.28-.19.41a.47.47 0 01-.25.19c-.1.03-.21.05-.32.05a.81.81 0 01-.22 0h-.15l-.02-.02c-.01 0-.02-.01-.03-.01-.01 0-.02 0-.03.01-.01 0-.02.01-.02.02l-.2.57c-.01.02-.02.04-.02.06 0 .02.01.04.02.06l.25.07c.13.02.27.02.41 0 .23 0 .47-.03.69-.11.2-.07.37-.2.51-.35.16-.19.29-.4.37-.64.11-.3.2-.62.24-.94l.63-3.58h.92c.02 0 .04-.01.06-.03.02-.01.03-.03.03-.06l.1-.59c.02-.03.01-.05-.07-.05z" /></svg>
</div>
</div>
<div class="cta-v2 CID-cta-v2-e0fe0cb4 IID-cta-v2-5bf5f3ee">
<style>
	.IID-cta-v2-5bf5f3ee{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-5bf5f3ee .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-5bf5f3ee .cta-v2__el:hover,.IID-cta-v2-5bf5f3ee .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-5bf5f3ee .cta-v2__el:active{color:#222}.IID-cta-v2-5bf5f3ee .cta-v2__el{border-radius:3px}.IID-cta-v2-5bf5f3ee.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-5bf5f3ee .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-5bf5f3ee .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/salesforce" tabindex="0" title="Salesforce" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">Salesforce</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-6849298a">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth IID-background-51cabe31 CID-background-79490109">
<style>
	.IID-background-51cabe31{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-51cabe31{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image IID-image-66775f36 CID-image-b4fec0a0">
<style>.IID-image-66775f36{max-width:48px;margin:auto}.IID-image-66775f36:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--1977147987-196503655-title" class="image__img" fill="none" height="44" id="svg--1977147987-196503655" role="img" viewBox="0 0 48 44" width="48">
<title id="svg--1977147987-196503655-title">Microsoft teams logo</title>
<path clip-rule="evenodd" d="M46.076 16.9693H38.0869C38.4486 17.5251 38.6611 18.1873 38.6611 18.8992V32.1786C38.6611 33.9329 38.3199 35.6075 37.7059 37.1443C38.5872 37.5138 39.5542 37.7185 40.569 37.7185C44.6731 37.7185 48 34.3815 48 30.2649V18.8992C48 17.8333 47.1386 16.9693 46.076 16.9693Z" fill="#424FC7" fill-rule="evenodd" />
<path clip-rule="evenodd" d="M35.1303 16.9693H25.5062V31.9611C25.5062 33.9137 23.9222 35.5025 21.9755 35.5025H14.0336C15.4644 40.3919 19.968 43.9634 25.3054 43.9634C31.7942 43.9634 37.0543 38.6872 37.0543 32.1786V18.8992C37.0543 17.8333 36.193 16.9693 35.1303 16.9693Z" fill="#424FC7" fill-rule="evenodd" />
<path clip-rule="evenodd" d="M25.5063 11.8484V14.1439C29.2398 14.037 32.2343 10.9699 32.2343 7.19899C32.2343 3.36059 29.1322 0.249023 25.3054 0.249023C21.4787 0.249023 18.3766 3.36059 18.3766 7.19899C18.3766 7.5761 18.4075 7.94596 18.4651 8.30696H21.9756C23.9223 8.30696 25.5063 9.89578 25.5063 11.8484Z" fill="#424FC7" fill-rule="evenodd" />
<path clip-rule="evenodd" d="M45.3891 9.31413C45.3891 11.9843 43.2311 14.1489 40.569 14.1489C37.9069 14.1489 35.7489 11.9843 35.7489 9.31413C35.7489 6.64393 37.9069 4.47937 40.569 4.47937C43.2311 4.47937 45.3891 6.64393 45.3891 9.31413Z" fill="#424FC7" fill-rule="evenodd" />
<path clip-rule="evenodd" d="M16.7197 17.775H13.0042V27.8474H10.795V17.775H7.07949V15.559H16.7197V17.775ZM21.9756 9.91858H1.92402C0.861389 9.91858 0 10.7826 0 11.8485V31.9611C0 33.0269 0.861389 33.8909 1.92402 33.8909H21.9756C23.0382 33.8909 23.8996 33.0269 23.8996 31.9611V11.8485C23.8996 10.7826 23.0382 9.91858 21.9756 9.91858Z" fill="#424FC7" fill-rule="evenodd" />
</svg>
</div>
</div>
<div class="cta-v2 CID-cta-v2-e0fe0cb4 IID-cta-v2-5e99fc90">
<style>
	.IID-cta-v2-5e99fc90{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-5e99fc90 .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-5e99fc90 .cta-v2__el:hover,.IID-cta-v2-5e99fc90 .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-5e99fc90 .cta-v2__el:active{color:#222}.IID-cta-v2-5e99fc90 .cta-v2__el{border-radius:3px}.IID-cta-v2-5e99fc90.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-5e99fc90 .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-5e99fc90 .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/microsoft-teams-dialer" tabindex="0" title="Microsoft Teams" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">Microsoft Teams</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-7055af28">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-ffc26853">
<style>
	.IID-background-ffc26853{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-ffc26853{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image IID-image-a938bc54 CID-image-b4fec0a0">
<style>.IID-image-a938bc54{max-width:44px;margin:auto}.IID-image-a938bc54:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg--2025444920-1612633801-title" class="image__img" id="svg--2025444920-1612633801" role="img" viewBox="0 0 46 42.52">
<title id="svg--2025444920-1612633801-title">Asana logo</title>
<defs>
<radialGradient cx="-1455.62" cy="1303.86" gradientTransform="matrix(30.48, 0, 0, -28.17, 44390.5, 36759.22)" gradientUnits="userSpaceOnUse" id="svg--2025444920-1612633801-asanaa" r="1">
<stop offset="0" stop-color="#ffb900" />
<stop offset="0.6" stop-color="#f95d8f" />
<stop offset="1" stop-color="#f95353" />
</radialGradient>
<radialGradient cx="-1455.62" cy="1303.86" gradientTransform="matrix(7, 29.66, 27.42, -6.47, -25513.83, 51639.99)" id="svg--2025444920-1612633801-asanab" r="1" xlink:href="#svg--2025444920-1612633801-asanaa" />
<radialGradient cx="-1455.62" cy="1303.86" gradientTransform="matrix(29.66, 7, 6.47, -27.42, 34765.92, 45973.17)" id="svg--2025444920-1612633801-asanac" r="1" xlink:href="#svg--2025444920-1612633801-asanaa" />
</defs>
<path d="M1,35.62v10H11A10,10,0,0,1,1,35.62Z" fill="none" transform="translate(-1 -3.11)" />
<path d="M14,13.11a10,10,0,1,0,10-10A10,10,0,0,0,14,13.11Z" fill="url(#svg--2025444920-1612633801-asanaa)" transform="translate(-1 -3.11)" />
<circle cx="37" cy="35.62" fill="url(#svg--2025444920-1612633801-asanab)" r="10" transform="translate(-7.17 60.34) rotate(-76.72)" />
<circle cx="11.01" cy="35.62" fill="url(#svg--2025444920-1612633801-asanac)" r="10" transform="translate(-8.89 0.38) rotate(-13.28)" />
</svg>
</div>
</div>
<div class="cta-v2 CID-cta-v2-e0fe0cb4 IID-cta-v2-74044332">
<style>
	.IID-cta-v2-74044332{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-74044332 .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-74044332 .cta-v2__el:hover,.IID-cta-v2-74044332 .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-74044332 .cta-v2__el:active{color:#222}.IID-cta-v2-74044332 .cta-v2__el{border-radius:3px}.IID-cta-v2-74044332.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-74044332 .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-74044332 .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/asana-add-in" tabindex="0" title="Asana" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">Asana</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-bc49b6c6">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-e986d075">
<style>
	.IID-background-e986d075{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-e986d075{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image IID-image-d7521b72 CID-image-b4fec0a0">
<style>.IID-image-d7521b72{max-width:48px;margin:auto}.IID-image-d7521b72:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-235670872--213120422-title" class="image__img" fill="none" height="30" id="svg-235670872--213120422" role="img" viewBox="0 0 42 30" width="42">
<title id="svg-235670872--213120422-title">Theta Lake logo</title>
<g clip-path="url(#svg-235670872--213120422-clip0_2518_121703)">
<g clip-path="url(#svg-235670872--213120422-clip1_2518_121703)">
<path d="M15.878 14.9999C15.8762 12.863 16.3471 10.7521 17.257 8.81862C18.1669 6.8851 19.4933 5.17682 21.1411 3.81621C18.5417 1.6579 15.2683 0.478569 11.8896 0.483168H8.90341L0.570801 14.9887L8.90341 29.5167H11.8896C15.268 29.5221 18.5415 28.3435 21.1411 26.1859C19.4933 24.8248 18.1669 23.1161 17.257 21.1822C16.3471 19.2484 15.8762 17.1372 15.878 14.9999Z" fill="#006F44" />
<path d="M33.381 0.483154H11.8896C15.7393 0.483752 19.4312 2.01345 22.1531 4.73581C24.875 7.45816 26.4041 11.1502 26.4041 14.9999C26.4041 18.8496 24.875 22.5416 22.1531 25.264C19.4312 27.9864 15.7393 29.5161 11.8896 29.5167H33.381L41.7136 14.9886L33.381 0.483154Z" fill="#00AD6E" />
</g>
</g>
<defs>
<clipPath id="svg-235670872--213120422-clip0_2518_121703">
<rect fill="white" height="29.0335" transform="translate(0.570801 0.483154)" width="41.1428" />
</clipPath>
<clipPath id="svg-235670872--213120422-clip1_2518_121703">
<rect fill="white" height="29.0335" transform="translate(0.570801 0.483154)" width="41.1428" />
</clipPath>
</defs>
</svg>
</div>
</div>
<div class="cta-v2 IID-cta-v2-916c7d4 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-916c7d4{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-916c7d4 .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-916c7d4 .cta-v2__el:hover,.IID-cta-v2-916c7d4 .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-916c7d4 .cta-v2__el:active{color:#222}.IID-cta-v2-916c7d4 .cta-v2__el{border-radius:3px}.IID-cta-v2-916c7d4.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-916c7d4 .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-916c7d4 .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/theta-lake" tabindex="0" title="Theta Lake" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">Theta Lake</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-v2__close">
<button class="carousel-v2__close-btn" aria-label="Close dialog">
<span aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.42 12.31" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--21285217" />
</svg>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-v2 carousel-v2--phoenix carousel-v2--slides-aligning--top CID-carousel-v2-79fd298e IID-carousel-v2-b4f8f52a">
<style>
	
	.IID-carousel-v2-b4f8f52a{color:null}.IID-carousel-v2-b4f8f52a__extra-content-close{color:#c7c6c5}@media (max-width: 1229px){.IID-carousel-v2-b4f8f52a__arrow--next{margin-left:25px}.IID-carousel-v2-b4f8f52a__arrow--prev{margin-right:25px}}@media (max-width: 767px){.IID-carousel-v2-b4f8f52a__arrow{background-color:#fff}}
</style>
<div class="carousel-v2__wrapper" data-ordered-slides="false" data-random="false" data-show-slide-by-hash="false" data-animation="slide" data-desktop-arrows="false" data-tablet-arrows="false" data-mobile-arrows="false" data-desktop-dots="false" data-tablet-dots="false" data-mobile-dots="false" data-desktop-close-btn="false" data-tablet-close-btn="false" data-mobile-close-btn="false" data-desktop-loop="true" data-tablet-loop="true" data-mobile-loop="true" data-desktop-slides-per-view="4" data-tablet-slides-per-view="3" data-mobile-slides-per-view="1" data-desktop-slides-per-transition="0" data-tablet-slides-per-transition="0" data-mobile-slides-per-transition="0" data-mobile-drag="true" data-desktop-speed="300" data-tablet-speed="300" data-mobile-speed="300" data-autoplay-delay="5000" data-autoplay-iteration-count="0" data-desktop-reverse="true" data-tablet-reverse="true" data-mobile-reverse="true" data-desktop-scroll="true" data-tablet-scroll="true" data-mobile-scroll="true" data-desktop-arrows-color="#001138" data-desktop-dots-color="#CCCFD7" data-desktop-dots-active-color="#001138" data-desktop-close-btn-color="#C7C6C5" data-extra-content-showing-delay="0" data-extra-content-showing-duration="3000" data-desktop-space-between-slides="32" data-aria-label-previous-arrow="Previous" data-aria-label-next-arrow="Next">
<div class="carousel-v2__content">
<div class="carousel-v2__bg IID-carousel-v2-b4f8f52a__bg">
<div class="carousel-v2__bg-inner"></div>
</div>
<div class="carousel-v2__container">
<div class="carousel-v2__body">
<div class="carousel-v2__inner">
<div class="carousel-v2__slides IID-carousel-v2-b4f8f52a__slides" aria-label="Access more information by using the left and right arrow keys. Slide 1 of 6 currently selected.">
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-b46e24ed">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth IID-background-5f45952e CID-background-79490109">
<style>
	.IID-background-5f45952e{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-5f45952e{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image IID-image-2df88b59 CID-image-b4fec0a0">
<style>.IID-image-2df88b59{max-width:48px;margin:auto}.IID-image-2df88b59:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg-2050854850-1240018501-title" class="image__img" id="svg-2050854850-1240018501" role="img" version="1.1" viewBox="0 0 48 48" x="0" xml:space="preserve" y="0"><title id="svg-2050854850-1240018501-title">Microsoft Dynamics logo</title>
<defs>
<path d="M9 0h29.8v48H9z" />
</defs>
<g>
<path d="M9.03 15.66c3.14 1.99 6.23 3.95 9.33 5.92-2.75 8.28-5.49 16.54-8.23 24.81.02.01.03.03.06.03 9.5-9.79 18.99-19.58 28.54-29.42.02.16.04.26.04.36 0 4.69 0 9.38.01 14.07 0 .27-.08.4-.32.53-9.67 5.3-19.36 10.59-29.05 15.87-.11.06-.22.1-.38.17V15.66z" fill="#00235a" />
<path d="M9.03 0c9.56 5.18 19.05 10.32 28.59 15.49-.94.69-1.83 1.33-2.71 1.97-2.22 1.61-4.44 3.22-6.65 4.84-.25.18-.44.22-.73.08-4.99-2.44-9.99-4.87-15-7.31-1.08-.52-2.16-1.06-3.24-1.57-.2-.09-.29-.2-.29-.44.01-4.28.01-8.54.01-12.82 0-.05.01-.11.02-.24z" fill="#00235a" />
</g>
</svg>
</div>
</div>
<div class="cta-v2 IID-cta-v2-873e54cd CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-873e54cd{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-873e54cd .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-873e54cd .cta-v2__el:hover,.IID-cta-v2-873e54cd .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-873e54cd .cta-v2__el:active{color:#222}.IID-cta-v2-873e54cd .cta-v2__el{border-radius:3px}.IID-cta-v2-873e54cd.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-873e54cd .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-873e54cd .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/microsoft-dynamics-365" tabindex="0" title="Microsoft Dynamics 365" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">Microsoft Dynamics 365</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-c7c6978b">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-afa8f250">
<style>
	.IID-background-afa8f250{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-afa8f250{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image IID-image-68291577 CID-image-b4fec0a0">
<style>.IID-image-68291577{max-width:45px;margin:auto}.IID-image-68291577:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--1257374634--564244997-title" class="image__img" id="svg--1257374634--564244997" role="img" viewBox="0 0 45.09 48">
<title id="svg--1257374634--564244997-title">Mailchimp logo</title>
<g>
<path d="M32.47,10.83c.12,0,.24-.21.12-.21a9.08,9.08,0,0,0-4.34-1.19.12.12,0,0,1-.12-.12A5.81,5.81,0,0,1,29,8.45a.12.12,0,0,0-.12-.12,10.91,10.91,0,0,0-5.23,1.84.12.12,0,0,1-.12-.12,9.63,9.63,0,0,1,.53-1.31c0-.11,0-.11-.12-.11a20.35,20.35,0,0,0-6,4.9c-.09.09,0,.09.14.12a18,18,0,0,1,6.43-2.82A17.06,17.06,0,0,1,32.47,10.83Z" fill="none" transform="translate(-1.01 0)" />
<path d="M25.81,4.34s-2-2.29-2.62-2.5C19.59.89,11.65,6.34,6.65,13.5c-2.08,2.86-5,8.06-3.6,10.68a8.36,8.36,0,0,0,1.64,1.64,6.11,6.11,0,0,1,3.93-2.5A30.75,30.75,0,0,1,18.73,9.25,53.75,53.75,0,0,1,25.81,4.34Z" fill="none" transform="translate(-1.01 0)" />
<path d="M10.13,24.92A3.12,3.12,0,0,0,9,25c-2.61.57-4,2.74-3.8,5.57.2,2.61,2.94,4.78,5.32,4.9.24.12.56,0,.77,0,2.74-.44,3.36-3.27,2.95-6.24C13.73,26.11,11.56,25,10.13,24.92Zm2.59,7.62c0,.21-.44.54-1,.54a1.63,1.63,0,0,1-1.31-1.52,2,2,0,0,1,.45-1.43,1.34,1.34,0,0,0-.54-1.64,1.38,1.38,0,0,0-1.1-.2,1.05,1.05,0,0,0-.86.53,1.62,1.62,0,0,0-.33.77v.12c-.12.33-.33.45-.44.45A.23.23,0,0,1,7.4,30a3.07,3.07,0,0,1,.77-2.38,2.11,2.11,0,0,1,2-.77,2.34,2.34,0,0,1,1.76,1.31,2.68,2.68,0,0,1-.21,2.62l-.12.2a1.51,1.51,0,0,0,0,1,.6.6,0,0,0,.54.33h.32a.2.2,0,0,1,.33,0C12.75,32.36,12.84,32.36,12.72,32.54Z" fill="none" transform="translate(-1.01 0)" />
<path d="M44.64,33.76c.09-1.1-.12-1.55-.45-1.76a1,1,0,0,0-.77-.11,12.27,12.27,0,0,0-.78-2.62A16.35,16.35,0,0,1,37.2,32a20.34,20.34,0,0,1-7.29.78c-1.6-.21-2.58-.66-3,.65a17.42,17.42,0,0,0,7.41.78.11.11,0,0,1,.11.11l-.11.12s-2.95,1.43-7.83,0a2.58,2.58,0,0,0,1.76,1.76,11.63,11.63,0,0,0,1.31.33c5.77,1,11.21-2.29,12.4-3.16.12-.09.24,0,.12.12l-.12.21c-1.43,2-5.44,4.13-10.68,4.13-2.17,0-4.46-.89-5.32-2.08-1.28-1.84-.09-4.67,2.08-4.34l1,.12A19,19,0,0,0,38.78,30c2.94-1.43,4.13-2.94,3.92-4.13a2,2,0,0,0-.53-1,6.83,6.83,0,0,0-2.83-1.31c-.44-.12-.77-.21-1.1-.33-.65-.21-.86-.42-1-1.52,0-.44-.12-2.17-.12-2.94-.12-1.31-.21-2.92-1.31-3.69a1.23,1.23,0,0,0-.86-.33.77.77,0,0,0-.54,0,3.12,3.12,0,0,0-1.42.78,5.25,5.25,0,0,1-3.69,1.19c-.63,0-1.52-.21-2.38-.21H26.4a4.78,4.78,0,0,0-4.67,4.25c-.53,3.6,2.06,5.44,2.83,6.54a.71.71,0,0,1,.21.45.8.8,0,0,1-.21.54,9,9,0,0,0-2.08,8.59A3.1,3.1,0,0,0,22.8,38c1.85,4.46,7.71,6.43,13.6,4.58a12.9,12.9,0,0,0,2.17-.86,11.43,11.43,0,0,0,3.36-2.5A10.5,10.5,0,0,0,44.64,33.76Zm-8.18-9.13c0,.53-.33.86-.66.86s-.65-.42-.65-.86.33-.86.65-.86S36.37,24.18,36.46,24.63Zm-1.61-5.56c.66-.09,1,.65,1.19,1.75a2.73,2.73,0,0,1,0,1.84h-1a2.62,2.62,0,0,1-.66-1.51C34.2,20.05,34.2,19.18,34.85,19.07Zm-2.29,6.09a.85.85,0,0,1,1.1-.2.87.87,0,0,1,.54,1,.85.85,0,0,1-1.1.2C32.65,25.94,32.32,25.49,32.56,25.16ZM29.85,25c-.08.11-.2,0-.53,0a3.21,3.21,0,0,0-2,.2,2.26,2.26,0,0,1-.45.12h-.12v-.12c0-.12.12-.23.33-.44a2.08,2.08,0,0,1,1.19-.54c.86-.09,1.51.24,1.54.57ZM25,23.65c-.12-.24.2-.57.53-.78a3.19,3.19,0,0,1,3.27-.44,2.49,2.49,0,0,1,1.19,1c.12.24.24.33.12.44s-.42,0-.86-.2a3.91,3.91,0,0,0-1.76-.42,14.58,14.58,0,0,0-2.29.54C25.15,23.77,25,23.77,25,23.65Z" fill="none" transform="translate(-1.01 0)" />
<path d="M35.06,22.66h1a2.73,2.73,0,0,0,0-1.84c-.21-1.1-.53-1.84-1.19-1.75s-.65,1-.45,2.08A2.62,2.62,0,0,0,35.06,22.66Z" transform="translate(-1.01 0)" />
<path d="M29.29,23.65c.44.2.77.32.86.2s0-.2-.12-.44a2.49,2.49,0,0,0-1.19-1,3.19,3.19,0,0,0-3.27.44c-.33.21-.65.54-.53.78s.11.12.2.12a14.58,14.58,0,0,1,2.29-.54A3.91,3.91,0,0,1,29.29,23.65Z" transform="translate(-1.01 0)" />
<path d="M28.31,24.18a2.08,2.08,0,0,0-1.19.54c-.21.21-.33.32-.33.44v.12h.12a2.26,2.26,0,0,0,.45-.12,3.21,3.21,0,0,1,2-.2c.33,0,.45.11.53,0v-.21C29.82,24.42,29.17,24.09,28.31,24.18Z" transform="translate(-1.01 0)" />
<path d="M33.1,26.14a.85.85,0,0,0,1.1-.2.87.87,0,0,0-.54-1,.85.85,0,0,0-1.1.2C32.32,25.49,32.65,25.94,33.1,26.14Z" transform="translate(-1.01 0)" />
<path d="M35.8,23.77c-.32,0-.65.32-.65.86s.21.86.65.86.66-.33.66-.86S36.13,23.77,35.8,23.77Z" transform="translate(-1.01 0)" />
<path d="M12.42,32.24H12.1a.6.6,0,0,1-.54-.33,1.51,1.51,0,0,1,0-1l.12-.2a2.68,2.68,0,0,0,.21-2.62,2.34,2.34,0,0,0-1.76-1.31,2.11,2.11,0,0,0-2,.77A3.07,3.07,0,0,0,7.4,30a.23.23,0,0,0,.21.21c.11,0,.32-.12.44-.45v-.12a1.62,1.62,0,0,1,.33-.77,1.05,1.05,0,0,1,.86-.53,1.38,1.38,0,0,1,1.1.2,1.34,1.34,0,0,1,.54,1.64,2,2,0,0,0-.45,1.43,1.63,1.63,0,0,0,1.31,1.52c.54,0,1-.33,1-.54s0-.18,0-.3A.2.2,0,0,0,12.42,32.24Z" transform="translate(-1.01 0)" />
<path d="M45.11,37.71a13.27,13.27,0,0,0,1-4.58v-.75c-.12-1.42-1-2-1.69-2a7.39,7.39,0,0,0-.33-1.19l-.45-1a3.5,3.5,0,0,0,.66-2.71,4.42,4.42,0,0,0-1-2,7.38,7.38,0,0,0-3.48-1.76L39,21.59s0-2.08-.11-2.94A8.65,8.65,0,0,0,38.39,16a6.58,6.58,0,0,0-1.84-3.27c2.17-2.29,3.59-4.91,3.59-7.08C40.14,1.55,35,.24,28.6,2.86l-1.3.53S24.92,1,24.8,1c-7-6.3-29.57,18.83-22.4,24.93l1.52,1.3a7.94,7.94,0,0,0-.45,3.6,8.23,8.23,0,0,0,2.38,4.58,7.27,7.27,0,0,0,4.79,2C13.33,43.62,19.3,47.45,26.34,48h3.39C36.75,47.48,42.56,43.8,45.11,37.71Zm-33.79-2.2c-.21,0-.53.12-.77,0-2.38-.12-5.12-2.29-5.32-4.9C5,27.78,6.42,25.61,9,25a3.12,3.12,0,0,1,1.1-.12c1.43.12,3.6,1.19,4.14,4.35C14.68,32.24,14.06,35.07,11.32,35.51ZM8.62,23.32a6.11,6.11,0,0,0-3.93,2.5,8.36,8.36,0,0,1-1.64-1.64c-1.42-2.62,1.52-7.82,3.6-10.68C11.65,6.34,19.59.89,23.19,1.84c.66.21,2.62,2.5,2.62,2.5a53.75,53.75,0,0,0-7.08,4.91A30.75,30.75,0,0,0,8.62,23.32ZM18,13.53a20.35,20.35,0,0,1,6-4.9c.12,0,.12,0,.12.11a9.63,9.63,0,0,0-.53,1.31.12.12,0,0,0,.12.12,10.91,10.91,0,0,1,5.23-1.84.12.12,0,0,1,.12.12,5.81,5.81,0,0,0-.86.86.12.12,0,0,0,.12.12,9.08,9.08,0,0,1,4.34,1.19c.12,0,0,.21-.12.21a17.06,17.06,0,0,0-7.94,0,18,18,0,0,0-6.43,2.82C18,13.62,17.87,13.62,18,13.53ZM38.57,41.7a12.9,12.9,0,0,1-2.17.86c-5.89,1.85-11.75-.12-13.6-4.58a3.1,3.1,0,0,1-.32-1.1,9,9,0,0,1,2.08-8.59.8.8,0,0,0,.21-.54.71.71,0,0,0-.21-.45c-.77-1.1-3.36-2.94-2.83-6.54a4.78,4.78,0,0,1,4.67-4.25h.54c.86,0,1.75.21,2.38.21A5.25,5.25,0,0,0,33,15.53a3.12,3.12,0,0,1,1.42-.78.77.77,0,0,1,.54,0,1.23,1.23,0,0,1,.86.33c1.1.77,1.19,2.38,1.31,3.69,0,.77.12,2.5.12,2.94.12,1.1.33,1.31,1,1.52.33.12.66.21,1.1.33a6.83,6.83,0,0,1,2.83,1.31,2,2,0,0,1,.53,1c.21,1.19-1,2.7-3.92,4.13A19,19,0,0,1,29,31.5l-1-.12c-2.17-.33-3.36,2.5-2.08,4.34.86,1.19,3.15,2.08,5.32,2.08,5.24,0,9.25-2.17,10.68-4.13l.12-.21c.12-.12,0-.21-.12-.12-1.19.87-6.63,4.14-12.4,3.16a11.63,11.63,0,0,1-1.31-.33,2.58,2.58,0,0,1-1.76-1.76c4.88,1.43,7.83,0,7.83,0l.11-.12a.11.11,0,0,0-.11-.11,17.42,17.42,0,0,1-7.41-.78c.45-1.31,1.43-.86,3-.65A20.34,20.34,0,0,0,37.2,32a16.35,16.35,0,0,0,5.44-2.7,12.27,12.27,0,0,1,.78,2.62,1,1,0,0,1,.77.11c.33.21.54.66.45,1.76a10.5,10.5,0,0,1-2.71,5.44A11.43,11.43,0,0,1,38.57,41.7Z" transform="translate(-1.01 0)" />
</g>
</svg>
</div>
</div>
<div class="cta-v2 IID-cta-v2-931f0e6f CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-931f0e6f{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-931f0e6f .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-931f0e6f .cta-v2__el:hover,.IID-cta-v2-931f0e6f .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-931f0e6f .cta-v2__el:active{color:#222}.IID-cta-v2-931f0e6f .cta-v2__el{border-radius:3px}.IID-cta-v2-931f0e6f.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-931f0e6f .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-931f0e6f .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/mailchimp" tabindex="0" title="Mailchimp" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">Mailchimp</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-fec98c29">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-7a760d72">
<style>
	.IID-background-7a760d72{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-7a760d72{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image CID-image-b4fec0a0 IID-image-8adae037">
<style>.IID-image-8adae037{max-width:48px;margin:auto}.IID-image-8adae037:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-1387545849-1837678186-title" class="image__img" id="svg-1387545849-1837678186" role="img" version="1.1" viewBox="0 0 48 48" x="0" xml:space="preserve" y="0"><title id="svg-1387545849-1837678186-title">ServiceNow logo</title><style>.st1{fill:#fff}</style><path d="M8 2h32c3.31 0 6 2.69 6 6v32c0 3.31-2.69 6-6 6H8c-3.31 0-6-2.69-6-6V8c0-3.31 2.69-6 6-6z" fill="#233f41" /><path class="st1" d="M5 19.22h2.49c.08 0 .1.02.1.1-.01.22 0 .44 0 .67.11-.06.2-.14.29-.21.28-.2.58-.35.89-.48.34-.14.69-.23 1.05-.27.34-.04.69-.04 1.04-.01.34.03.68.11 1 .22.48.17.93.41 1.33.73.16.13.33.26.47.42.47.49.8 1.06.98 1.71.08.3.14.61.18.92.05.4.06.79.06 1.19v4.9c0 .09-.02.11-.1.11h-2.51c-.08 0-.1-.02-.1-.1v-5.19c0-.1.02-.2.02-.3-.02-.57-.18-1.1-.56-1.54-.22-.26-.52-.4-.83-.5-.24-.08-.48-.11-.73-.1-.47.03-.93.14-1.35.36a3.163 3.163 0 00-.98.8c-.04.04-.06.09-.06.16v6.3c0 .09-.02.11-.11.11H4.99c.01-3.34.01-6.67.01-10zM34.92 23.56c-.15.4-.29.79-.43 1.17-.18.48-.36.97-.54 1.45-.14.38-.28.76-.42 1.13-.2.54-.41 1.09-.61 1.63-.03.09-.04.22-.1.26-.08.05-.2.01-.3.01h-1.61c-.06 0-.09-.01-.12-.08-.3-.77-.61-1.55-.92-2.32-.28-.7-.56-1.39-.84-2.08-.35-.88-.69-1.75-1.04-2.63-.34-.86-.69-1.71-1.03-2.57-.03-.08-.05-.16-.09-.24-.04-.08 0-.07.05-.07h2.51c.08 0 .1.03.13.09.21.56.43 1.11.64 1.66.18.48.36.95.54 1.43.19.5.38.99.57 1.49.13.33.25.66.38.99.17-.44.34-.89.5-1.33.2-.52.39-1.04.58-1.56.14-.39.29-.77.43-1.16.18-.49.37-.98.55-1.48.04-.11.09-.14.2-.14.66.01 1.33 0 1.99 0 .06 0 .1.01.13.08.21.57.41 1.13.62 1.7.24.66.49 1.31.73 1.97.22.6.45 1.21.67 1.81.01.04.03.07.04.12.07-.16.13-.32.19-.48.2-.52.4-1.05.6-1.57.2-.51.39-1.03.58-1.54.21-.55.43-1.1.64-1.66.05-.11.09-.23.12-.35.02-.05.05-.08.11-.08h2.52c.07 0 .09.01.06.08-.14.33-.26.67-.4 1-.21.52-.41 1.04-.61 1.56-.19.48-.38.95-.57 1.43-.21.52-.41 1.05-.61 1.57-.2.5-.4.99-.59 1.48-.2.51-.41 1.02-.61 1.53-.17.43-.34.85-.5 1.27-.02.04-.04.06-.09.06H37.1c-.06 0-.07-.02-.09-.07-.21-.57-.43-1.15-.64-1.72l-.66-1.74c-.19-.5-.37-1-.56-1.51-.07-.17-.14-.37-.23-.59zM42.76 28.53c-.1.14-.18.27-.26.39-.06.09-.22.09-.28 0-.07-.12-.15-.24-.23-.38 0 .21-.01.39 0 .57 0 .09-.02.11-.11.11-.17-.01-.17 0-.17-.17v-1.02c0-.06.01-.08.08-.09.12-.01.17.06.22.14.12.19.24.38.36.58.09-.16.18-.3.27-.45.04-.07.09-.15.13-.22.02-.04.04-.04.08-.04.15-.02.15-.02.15.12v1.05c0 .08-.02.1-.1.09-.14-.01-.14 0-.14-.15v-.53zM40.95 28.67v-.46c0-.05-.01-.07-.06-.06h-.12c-.14 0-.17-.05-.14-.19.01-.03.03-.03.05-.03h.85c.04 0 .05.01.05.05v.11c0 .05-.01.06-.06.06h-.23c-.06 0-.07.02-.07.07v.92c0 .06-.01.08-.08.08-.2 0-.2 0-.2-.2.01-.12.01-.23.01-.35z" /><path clip-rule="evenodd" d="M18.29 29.4c.01 0 .03.01.04.01.13 0 .26 0 .4.01.21-.01.38-.11.54-.23a3.99 3.99 0 012.87-.78c.71.07 1.36.33 1.94.75.19.14.38.25.61.27h.38l.01-.01.01-.01c.22-.03.4-.13.57-.27.15-.13.28-.27.41-.42.02-.03.05-.05.07-.08.28-.32.51-.67.71-1.04.2-.37.35-.75.46-1.15.14-.47.2-.96.22-1.45.01-.21-.01-.41-.03-.62 0-.04-.01-.08-.01-.12-.02-.3-.08-.59-.15-.87a5.794 5.794 0 00-1.52-2.66c-.17-.18-.36-.34-.56-.49-.31-.24-.63-.44-.98-.61a5.944 5.944 0 00-2.19-.59c-.37-.02-.73-.02-1.1.03-.33.05-.65.11-.97.2-.42.13-.82.3-1.2.51-.42.24-.8.52-1.15.85-.2.18-.37.39-.54.59-.39.49-.69 1.03-.91 1.62a5.875 5.875 0 00-.02 4.03c.14.39.32.76.54 1.11.16.26.34.5.54.73.16.18.33.36.53.51.16.08.32.13.48.18zm1.04-6.29c-.34.5-.5 1.06-.5 1.71-.01.09 0 .22.02.36 0 .01 0 .03.01.04.05.38.17.74.36 1.08.27.47.64.83 1.11 1.1.35.2.72.31 1.13.34.32.03.64.01.95-.05.65-.14 1.17-.49 1.59-1 .4-.49.6-1.06.63-1.68.01-.28-.01-.56-.06-.84-.11-.56-.36-1.05-.75-1.47-.16-.17-.35-.31-.56-.44-.46-.3-.97-.44-1.52-.45-.21 0-.42.02-.63.08-.74.18-1.35.58-1.78 1.22z" fill="#72b8a1" fill-rule="evenodd" /></svg>
</div>
</div>
<div class="cta-v2 IID-cta-v2-c6a69baf CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-c6a69baf{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-c6a69baf .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-c6a69baf .cta-v2__el:hover,.IID-cta-v2-c6a69baf .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-c6a69baf .cta-v2__el:active{color:#222}.IID-cta-v2-c6a69baf .cta-v2__el{border-radius:3px}.IID-cta-v2-c6a69baf.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-c6a69baf .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-c6a69baf .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/servicenow-notifications" tabindex="0" title="ServiceNow" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">ServiceNow</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-cfd502c7">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-110ee694">
<style>
	.IID-background-110ee694{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-110ee694{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image CID-image-b4fec0a0 IID-image-bc367055">
<style>.IID-image-bc367055{max-width:48px;margin:auto}.IID-image-bc367055:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--930629177-1665665821-title" class="image__img" id="svg--930629177-1665665821" role="img" viewBox="0 0 70.79 70.79">
<title id="svg--930629177-1665665821-title">Google Workspace logo</title>
<path d="M35.4 13.43a21.87 21.87 0 0 1 14.72 5.69l9.18-9.83a35.39 35.39 0 0 0-55.18 9.53l10.8 8.65A22 22 0 0 1 35.4 13.43z" fill="#ea4335" />
<path d="M13.43 35.4a21.87 21.87 0 0 1 1.5-7.93L4.12 18.82A35.41 35.41 0 0 0 4.16 52l10.74-8.8a21.88 21.88 0 0 1-1.47-7.8z" fill="#fbbc05" />
<path d="M47.61 53.64A21.93 21.93 0 0 1 14.9 43.25L4.16 52A35.38 35.38 0 0 0 58.4 62.29z" fill="#34a853" />
<path d="M70.79 35.4a35.28 35.28 0 0 0-.53-6H36.82v12.51h19.57a22 22 0 0 1-8.77 11.74l10.78 8.64A35.31 35.31 0 0 0 70.79 35.4z" fill="#4285f4" />
</svg>
</div>
</div>
<div class="cta-v2 IID-cta-v2-c0bd0f51 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-c0bd0f51{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-c0bd0f51 .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-c0bd0f51 .cta-v2__el:hover,.IID-cta-v2-c0bd0f51 .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-c0bd0f51 .cta-v2__el:active{color:#222}.IID-cta-v2-c0bd0f51 .cta-v2__el{border-radius:3px}.IID-cta-v2-c0bd0f51.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-c0bd0f51 .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-c0bd0f51 .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/google-workspace-addon" tabindex="0" title="Google Workspace" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">Google Workspace</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-7346fb65">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-42d57db6">
<style>
	.IID-background-42d57db6{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-42d57db6{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image IID-image-41070273 CID-image-b4fec0a0">
<style>.IID-image-41070273{max-width:44px;margin:auto}.IID-image-41070273:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--465374914-1706495792-title" class="image__img" fill="none" height="48" id="svg--465374914-1706495792" role="img" viewBox="0 0 48 48" width="48">
<title id="svg--465374914-1706495792-title">NetSuite logo</title>
<path d="M4.008 14.58h8.646v20.437h4.305v7.985H4.006V14.58h.002zM44.03 33.383h-8.646V12.946H31.08V4.96h12.952v28.423h-.002z" fill="#BACCDB" />
<path d="M2 3h27.326v23.342L18.819 12.874H2V3zm44 42H18.674V21.658l10.507 13.468H46" fill="#125580" />
</svg>
</div>
</div>
<div class="cta-v2 IID-cta-v2-d5fec0f3 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-d5fec0f3{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-d5fec0f3 .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-d5fec0f3 .cta-v2__el:hover,.IID-cta-v2-d5fec0f3 .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-d5fec0f3 .cta-v2__el:active{color:#222}.IID-cta-v2-d5fec0f3 .cta-v2__el{border-radius:3px}.IID-cta-v2-d5fec0f3.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-d5fec0f3 .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-d5fec0f3 .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/netsuite" tabindex="0" title="NetSuite" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">NetSuite</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-slide CID-carousel-slide-fbb8715f IID-carousel-slide-e37d7603">
<div class="carousel-slide__wrapper" data-random="false" data-delegate-hover="true">
<div class="background background--alignment--fullwidth IID-background-5d2bd2d8 CID-background-79490109">
<style>
	.IID-background-5d2bd2d8{border-color:#d3d3d3;border-width:1px;border-style:solid;border-radius:20px;min-height:220px;max-height:220px}@media (min-width: 1488px){.IID-background-5d2bd2d8{border-radius:20px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="image CID-image-b4fec0a0 IID-image-5d2a9691">
<style>.IID-image-5d2a9691{max-width:42px;margin:auto}.IID-image-5d2a9691:before{display:table-cell;content:'';width:9999px;max-width:100%}</style>
<div class="image__wrap  ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--402653165-81410494-title" class="image__img" fill="none" height="48" id="svg--402653165-81410494" role="img" viewBox="0 0 49 48" width="49">
<title id="svg--402653165-81410494-title">Zapier logo</title>
<path d="M30.1709 24.0091C30.1698 25.5696 29.8846 27.0636 29.3645 28.4427C27.9856 28.9631 26.4911 29.2491 24.9299 29.2501H24.9119C23.3516 29.2491 21.8574 28.964 20.4786 28.4437C19.9584 27.0651 19.6719 25.5705 19.6709 24.0096V23.9914C19.6719 22.4309 19.9578 20.9369 20.4771 19.558C21.8566 19.0378 23.3509 18.7516 24.9119 18.7505H24.9299C26.4911 18.7516 27.9856 19.0378 29.3644 19.558C29.8841 20.937 30.1697 22.431 30.1708 23.9915V24.0097V24.0094L30.1709 24.0091ZM45.629 20.5H33.3707L42.0384 11.8323C41.3579 10.8766 40.5989 9.97927 39.7692 9.14974L39.7687 9.1489C38.9399 8.32017 38.0434 7.5619 37.0887 6.88195L28.421 15.5497V3.29211C27.268 3.09838 26.1009 3.00067 24.9318 3L24.9096 3C23.7406 3.00062 22.5737 3.09826 21.4208 3.2919V15.5503L12.7531 6.88259C11.7979 7.56277 10.9011 8.32139 10.0719 9.15058L10.0688 9.15342C9.24074 9.98194 8.48314 10.878 7.8038 11.8322L16.4715 20.4999H4.2128C4.2128 20.4999 3.92132 22.8026 3.9209 23.9922V24.0075C3.92134 25.1778 4.01897 26.3462 4.2128 27.5004H16.4711L7.80338 36.1681C9.16646 38.0819 10.8393 39.7548 12.7531 41.1178L21.4208 32.4503V44.7081C22.5726 44.9015 23.7383 44.9991 24.9062 45H24.9362C26.1039 44.9991 27.2696 44.9014 28.4212 44.7081V32.4497L37.0889 41.1174C38.0438 40.4374 38.9404 39.6791 39.7694 38.8503L39.7715 38.8487C40.6002 38.0197 41.3584 37.1231 42.0384 36.1683L33.3707 27.5004H45.629C45.8224 26.3488 45.92 25.1832 45.9209 24.0154V23.9853C45.92 22.8176 45.8223 21.652 45.629 20.5003V20.5Z" fill="#FF4A00" />
</svg>
</div>
</div>
<div class="cta-v2 IID-cta-v2-3e4db095 CID-cta-v2-e0fe0cb4">
<style>
	.IID-cta-v2-3e4db095{position:absolute;bottom:20px;left:20px}
	.IID-cta-v2-3e4db095 .cta-v2__el{font-size:16px;font-weight:400;line-height:24px;color:#222}.IID-cta-v2-3e4db095 .cta-v2__el:hover,.IID-cta-v2-3e4db095 .cta-v2__el:focus{color:#222;text-decoration:underline}.IID-cta-v2-3e4db095 .cta-v2__el:active{color:#222}.IID-cta-v2-3e4db095 .cta-v2__el{border-radius:3px}.IID-cta-v2-3e4db095.cta-v2--active .cta-v2__el{color:#222}@media (max-width: 1229px){.IID-cta-v2-3e4db095 .cta-v2__el{border-radius:3px}}@media (max-width: 767px){.IID-cta-v2-3e4db095 .cta-v2__el{border-radius:3px}}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="cta">
<a class="cta-v2__el cta-v2__el--type--link" href="https://www.ringcentral.com/apps/zapier-notifications" tabindex="0" title="Zapier" target="_blank" rel="noopener noreferrer" data-dl-element="button">
<span class="cta-v2__content">
<span class="cta-v2__text">Zapier</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="carousel-v2__close">
<button class="carousel-v2__close-btn" aria-label="Close dialog">
<span aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.42 12.31" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--21285217" />
</svg>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--fullwidth aem-GridColumn aem-GridColumn--default--12 CID-background-79490109 IID-background-f0e8e64c">
<style>
	.IID-background-f0e8e64c{color:#222;position:relative;padding:64px 0 128px;overflow:visible}@media (max-width: 1229px){.IID-background-f0e8e64c{padding:32px 0 96px}}@media (max-width: 767px){.IID-background-f0e8e64c{padding:0 0 64px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid IID-grid-f19c05a6 CID-grid-1659f761" data-cstm-lft-padding="1">
<style>
	.IID-grid-f19c05a6{position:relative;margin:0 0 0 28px}@media (max-width: 1229px){.IID-grid-f19c05a6{margin:0}.IID-grid-f19c05a6{padding:0 0 0 30px}}@media (max-width: 767px){.IID-grid-f19c05a6{padding:0 28px}}
	.IID-grid-f19c05a6{--halfHorizGap:16px;--halfVertGap:0px}@media (max-width: 767px){.IID-grid-f19c05a6{--halfHorizGap:0px;--halfVertGap:16px}}
</style>
<div class="grid__parsys       l-flex--flex-wrap-nowrap  l-mob-flex--flex-wrap-wrap">
<div data-custom-padd-tab="1" class="grid-item l-flex__col--4 l-mob-flex__col--12 l-mob-flex__col--order-0 IID-grid-item-3a2805f2 CID-grid-item-1e7a19ff">
<style>@media (max-width: 767px){.IID-grid-item-3a2805f2{margin:0 0 70px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-castom-padding-tab="1" class="custom-text CID-custom-text-e0b1298e IID-custom-text-2e5c8d75">
<style>
	.IID-custom-text-2e5c8d75{max-width:366px;font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif}.IID-custom-text-2e5c8d75:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-custom-text-2e5c8d75{max-width:216px}}@media (max-width: 767px){.IID-custom-text-2e5c8d75{max-width:264px}.IID-custom-text-2e5c8d75{padding:0}}
	.IID-custom-text-2e5c8d75{font-size:48px;font-weight:500;line-height:1.167;letter-spacing:-.24px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-2e5c8d75{font-size:32px;line-height:1.25;letter-spacing:.16px}}@media (max-width: 767px){.IID-custom-text-2e5c8d75{letter-spacing:-.16px}}
</style>
<div class="custom-text__wrapper" data-dl-context="item0" data-style="h2" data-content-wrapper="true">
<h2>More from RingCentral</h2>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--8 l-mob-flex__col--12 l-mob-flex__col--order-1 IID-grid-item-774940e CID-grid-item-1e7a19ff">
<style>.IID-grid-item-774940e{position:static;padding:5px 0 0;overflow:hidden}@media (max-width: 767px){.IID-grid-item-774940e{margin:0 -5px}.IID-grid-item-774940e{padding:5px 5px 0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="carousel-v2 carousel-v2--freemium IID-carousel-v2-96b8d659 CID-carousel-v2-79fd298e" data-custom-arrow="custom">
<style>
	.IID-carousel-v2-96b8d659{position:static}
	.IID-carousel-v2-96b8d659{color:null}.IID-carousel-v2-96b8d659__arrow-icon{width:24px;height:24px}.IID-carousel-v2-96b8d659__extra-content-close{color:#c7c6c5}
</style>
<div class="carousel-v2__wrapper" data-ordered-slides="false" data-random="false" data-show-slide-by-hash="false" data-animation="slide" data-desktop-arrows="true" data-tablet-arrows="true" data-mobile-arrows="true" data-desktop-dots="false" data-tablet-dots="false" data-mobile-dots="false" data-desktop-close-btn="true" data-tablet-close-btn="true" data-mobile-close-btn="true" data-custom-slide-width="true" data-slide-width-desktop="43" data-slide-width-tablet="68" data-slide-width-mobile="100" data-desktop-slides-per-transition="1" data-tablet-slides-per-transition="1" data-mobile-slides-per-transition="1" data-tablet-drag="true" data-mobile-drag="true" data-desktop-speed="300" data-tablet-speed="300" data-mobile-speed="300" data-autoplay-delay="10000" data-autoplay-iteration-count="0" data-desktop-arrows-color="#222" data-desktop-arrows-hover-color="#fff" data-desktop-dots-color="#C7C6C5" data-desktop-dots-active-color="#0684BD" data-desktop-close-btn-color="#C7C6C5" data-extra-content-showing-delay="0" data-extra-content-showing-duration="3000" data-desktop-space-between-slides="64" data-tablet-space-between-slides="32" data-mobile-space-between-slides="0" data-aria-label-previous-arrow="Previous" data-aria-label-next-arrow="Next">
<div class="carousel-v2__content">
<div class="carousel-v2__bg IID-carousel-v2-96b8d659__bg">
<div class="carousel-v2__bg-inner"></div>
</div>
<div class="carousel-v2__container">
<div class="carousel-v2__body">
<div class="carousel-v2__inner">
<div class="carousel-v2__slides" aria-label="Access more information by using the left and right arrow keys. Slide 1 of 4 currently selected.">
<div class="background background--alignment--fullwidth IID-background-47c523f0 CID-background-79490109">
<style>
	.IID-background-47c523f0{border-color:#d3d3d3;border-width:1px;border-style:none solid solid;border-radius:20px}@media (max-width: 1229px){.IID-background-47c523f0{border-radius:14px}}@media (max-width: 767px){.IID-background-47c523f0{border-radius:10px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="link-card IID-link-card-18a3b0b1 CID-link-card-7153c5c8">
<style>
	.IID-link-card-18a3b0b1{border-radius:20px}@media (max-width: 1229px){.IID-link-card-18a3b0b1{border-radius:14px}}@media (max-width: 767px){.IID-link-card-18a3b0b1{border-radius:10px}}
</style>
<div class="link-card__wrapper link-card__wrapper--type--link" data-delegate-hover="true">
<div class="link-card__parsys" aria-hidden="true">
<div class="image IID-image-161c7cb6 CID-image-b4fec0a0">
<style>.IID-image-161c7cb6{border-radius:20px 20px 0 0}@media (max-width: 1229px){.IID-image-161c7cb6{border-radius:14px 14px 0 0}}@media (max-width: 767px){.IID-image-161c7cb6{border-radius:10px 10px 0 0}}</style>
<div class="image__wrap image__wrap--full-width ">
<img data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/img1-jpg-rendition.webp" src="data:image/svg+xml,%3Csvg viewBox=%220 0 784 520%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt="A man in a hard hat holding a mobile phone to his mouth" width="784" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/img1.jpg" class="image__img" height="520" />
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-da1b9456">
<style>
	.IID-custom-text-da1b9456{margin:0 0 8px;padding:28px 24px 0}@media (max-width: 1229px){.IID-custom-text-da1b9456{padding:28px 20px 0}}
	.IID-custom-text-da1b9456{font-size:12px;font-weight:500;line-height:1.667;text-transform:uppercase;letter-spacing:.16px;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-dl-context="item0" data-style="label-small" data-content-wrapper="true">
<div>Learn more</div>
</div>
</div>
<div class="custom-text IID-custom-text-642b19be CID-custom-text-e0b1298e" data-hover="underlined">
<style>
	.IID-custom-text-642b19be{padding:0 24px 32px}@media (max-width: 1229px){.IID-custom-text-642b19be{padding:0 20px 32px}}body.page .IID-custom-text-642b19be a{color:222;text-decoration:none}body.page .IID-custom-text-642b19be a:hover{color:#5a1b00;text-decoration:underline}@media (max-width: 1229px){body.page .IID-custom-text-642b19be a{color:222;text-decoration:none}body.page .IID-custom-text-642b19be a:hover{color:#5a1b00;text-decoration:underline}}@media (max-width: 767px){body.page .IID-custom-text-642b19be a{color:222;text-decoration:none}body.page .IID-custom-text-642b19be a:hover{color:#5a1b00;text-decoration:underline}}
	.IID-custom-text-642b19be{font-size:20px;font-weight:500;line-height:1.4;letter-spacing:-.08px;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="h5" data-content-wrapper="true">
<h5>Transform your frontline workforce with Push to Talk.</h5>
</div>
</div>
</div>
<a href="/gb/en/pushtotalk.html" target="_self" class="link-card__overlay link-card__overlay--type--link " data-dl-element="button" data-dl-name="Learn more Transform your frontline workforce with Push to Talk." data-automation-id="Learn more Transform your frontline workforce with Push to Talk." aria-label="Learn more Transform your frontline workforce with Push to Talk.">
</a>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--fullwidth IID-background-e9012583 CID-background-79490109">
<style>
	.IID-background-e9012583{border-color:#d3d3d3;border-width:1px;border-style:none solid solid;border-radius:20px}@media (max-width: 1229px){.IID-background-e9012583{border-radius:14px}}@media (max-width: 767px){.IID-background-e9012583{border-radius:10px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="link-card IID-link-card-88ea77e CID-link-card-7153c5c8">
<style>
	.IID-link-card-88ea77e{border-radius:20px}@media (max-width: 1229px){.IID-link-card-88ea77e{border-radius:14px}}@media (max-width: 767px){.IID-link-card-88ea77e{border-radius:10px}}
</style>
<div class="link-card__wrapper link-card__wrapper--type--link" data-delegate-hover="true">
<div class="link-card__parsys" aria-hidden="true">
<div class="image CID-image-b4fec0a0 IID-image-d0cbbb09">
<style>.IID-image-d0cbbb09{border-radius:20px 20px 0 0}@media (max-width: 1229px){.IID-image-d0cbbb09{border-radius:14px 14px 0 0}}@media (max-width: 767px){.IID-image-d0cbbb09{border-radius:10px 10px 0 0}}</style>
<div class="image__wrap image__wrap--full-width ">
<img data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/www-4183/Resources_TEI-jpg-rendition.webp" src="data:image/svg+xml,%3Csvg viewBox=%220 0 784 520%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt="The front page of a report entitled: The Total Economic Impact of RingCentral Contact Center and MVP" width="784" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/www-4183/Resources_TEI.jpg" class="image__img" height="520" />
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-7e898869">
<style>
	.IID-custom-text-7e898869{margin:0 0 8px;padding:28px 24px 0}@media (max-width: 1229px){.IID-custom-text-7e898869{padding:28px 20px 0}}
	.IID-custom-text-7e898869{font-size:12px;font-weight:500;line-height:1.667;text-transform:uppercase;letter-spacing:.16px;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="label-small" data-content-wrapper="true">
<div>Read the report</div>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-fac1b98b" data-hover="underlined">
<style>
	.IID-custom-text-fac1b98b{padding:0 24px 32px}@media (max-width: 1229px){.IID-custom-text-fac1b98b{padding:0 20px 32px}}body.page .IID-custom-text-fac1b98b a{color:222;text-decoration:none}body.page .IID-custom-text-fac1b98b a:hover{color:66fac;text-decoration:underline}
	.IID-custom-text-fac1b98b{font-size:20px;font-weight:500;line-height:1.4;letter-spacing:-.08px;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="h5" data-content-wrapper="true">
<h5>Forrester report: Why UCaaS+CCaaS are better together.</h5>
</div>
</div>
</div>
<a href="https://assets.ringcentral.com/us/whitepaper/rc-cc-mvp-forrester-tei.pdf" target="_blank" rel="noopener noreferrer" class="link-card__overlay link-card__overlay--type--link " data-dl-element="button" data-dl-name="Read the report Forrester report: Why UCaaS+CCaaS are better together." data-automation-id="Read the report Forrester report: Why UCaaS+CCaaS are better together." aria-label="Read the report Forrester report: Why UCaaS+CCaaS are better together.">
</a>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--fullwidth CID-background-79490109 IID-background-ffaeaeef">
<style>
	.IID-background-ffaeaeef{border-color:#d3d3d3;border-width:1px;border-style:none solid solid;border-radius:20px}@media (max-width: 1229px){.IID-background-ffaeaeef{border-radius:14px}}@media (max-width: 767px){.IID-background-ffaeaeef{border-radius:10px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="link-card CID-link-card-7153c5c8 IID-link-card-810fa392">
<style>
	.IID-link-card-810fa392{border-radius:20px}@media (max-width: 1229px){.IID-link-card-810fa392{border-radius:14px}}@media (max-width: 767px){.IID-link-card-810fa392{border-radius:10px}}
</style>
<div class="link-card__wrapper link-card__wrapper--type--link" data-delegate-hover="true">
<div class="link-card__parsys" aria-hidden="true">
<div class="image IID-image-2017ff75 CID-image-b4fec0a0">
<style>.IID-image-2017ff75{border-radius:20px 20px 0 0}@media (max-width: 1229px){.IID-image-2017ff75{border-radius:14px 14px 0 0}}@media (max-width: 767px){.IID-image-2017ff75{border-radius:10px 10px 0 0}}</style>
<div class="image__wrap image__wrap--full-width ">
<img data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/www-4183/Resources_WhatisRC-jpg-rendition.webp" src="data:image/svg+xml,%3Csvg viewBox=%220 0 784 520%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt="A woman in a RingCentral video call via her laptop" width="784" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/www-4183/Resources_WhatisRC.jpg" class="image__img" height="520" />
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-9db3cbd5">
<style>
	.IID-custom-text-9db3cbd5{margin:0 0 8px;padding:28px 24px 0}@media (max-width: 1229px){.IID-custom-text-9db3cbd5{padding:28px 20px 0}}
	.IID-custom-text-9db3cbd5{font-size:12px;font-weight:500;line-height:1.667;text-transform:uppercase;letter-spacing:.16px;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="label-small" data-content-wrapper="true">
<div>Read the blog</div>
</div>
</div>
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-d2d4b99f" data-hover="underlined">
<style>
	.IID-custom-text-d2d4b99f{padding:0 24px 32px}@media (max-width: 1229px){.IID-custom-text-d2d4b99f{padding:0 20px 32px}}body.page .IID-custom-text-d2d4b99f a{color:222;text-decoration:none}body.page .IID-custom-text-d2d4b99f a:hover{color:66fac;text-decoration:underline}
	.IID-custom-text-d2d4b99f{font-size:20px;font-weight:500;line-height:1.4;letter-spacing:-.08px;--rowGap:20px}
</style>
<div class="custom-text__wrapper" data-style="h5" data-content-wrapper="true">
<h5>What is RingCentral? Get to know our complete communications platform.</h5>
</div>
</div>
</div>
<a href="https://www.ringcentral.com/us/en/blog/what-is-ringcentral/" target="_blank" rel="noopener noreferrer" class="link-card__overlay link-card__overlay--type--link " data-dl-element="button" data-dl-name="Read the blog What is RingCentral? Get to know our complete communications platform." data-automation-id="Read the blog What is RingCentral? Get to know our complete communications platform." aria-label="Read the blog What is RingCentral? Get to know our complete communications platform.">
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<button class="carousel-v2__arrow carousel-v2__arrow--prev IID-carousel-v2-96b8d659__arrow--prev
		carousel-v2__arrow--default" aria-hidden="true" tabindex="-1">
<span class="carousel-v2__arrow-icon carousel-v2__arrow-icon--desktop IID-carousel-v2-96b8d659__arrow-icon" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" id="svg--204820601" role="img" viewBox="0 0 28 17">
<path clip-rule="evenodd" d="M1.088 9.02c-.336-.436-.314-1.053.072-1.44L8.285.457l.111-.097C8.821.04 9.44.083 9.84.483l.1.115c.335.436.314 1.053-.073 1.44l-5.75 5.749h22.787l.149.01c.535.067.947.493.947 1.009 0 .563-.49 1.019-1.096 1.019H4.931l5.165 5.165.1.114c.336.437.314 1.053-.072 1.44-.422.422-1.118.41-1.555-.027L1.188 9.135l-.1-.114z" fill-rule="evenodd" />
</svg>
</span>
</button>
<button class="carousel-v2__arrow carousel-v2__arrow--next IID-carousel-v2-96b8d659__arrow--next
		carousel-v2__arrow--default" aria-hidden="true" tabindex="-1">
<span class="carousel-v2__arrow-icon carousel-v2__arrow-icon--desktop IID-carousel-v2-96b8d659__arrow-icon" aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--204820601" />
</svg>
</span>
</button>
<div class="carousel-v2__close">
<button class="carousel-v2__close-btn" aria-label="Close dialog">
<span aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.42 12.31" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg--21285217" />
</svg>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-linear-gradient="bottom" class="background background--alignment--center IID-background-e5656624 aem-GridColumn aem-GridColumn--default--12 CID-background-79490109">
<style>
	.IID-background-e5656624{min-height:8px;max-height:8px}
	.IID-background-e5656624 > .background__layers > .background__layer--back .background__gradient{background-image:linear-gradient(270deg,rgba(255,188,128,.5) 0%,rgba(255,136,0,0) 100%),linear-gradient(270deg,#ff7a00 21.35%,#ff6200 49.79%)}
</style>
<div class="background__layers">
<div class="background__layer background__layer--back background__layer--type--linearGradient ">
<div class="background__gradient"></div>
</div>
</div>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
</div>
</div>
</div>
<div class="layers layers--alignment--stretch layers--tab-alignment--stretch layers--mob-alignment--top IID-layers-35ab7802 CID-layers-ef59a69d aem-GridColumn aem-GridColumn--default--12">
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/content/layers/clientlibs/common.min.3166c7d79114b477933003383f419f4a.css" type="text/css" />
<div class="layers__wrapper">
<div class="layers__item layers__item--default">
<div class="background background--alignment--center CID-background-79490109 IID-background-44c1aab0">
<style>
	.IID-background-44c1aab0{background-color:#992e01;padding:128px 0}@media (max-width: 1229px){.IID-background-44c1aab0{padding:108px 0}}@media (max-width: 767px){.IID-background-44c1aab0{padding:108px 0}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="custom-text IID-custom-text-9a9583f7 CID-custom-text-e0b1298e">
<style>
	.IID-custom-text-9a9583f7{color:#ffbc80;font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif;background-image:linear-gradient(135deg,#ffbc80,#ff7a00);z-index:1;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}
	.IID-custom-text-9a9583f7{font-size:100px;font-weight:500;line-height:1.2;letter-spacing:-.3px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-9a9583f7{font-size:60px;letter-spacing:-.24px}}@media (max-width: 767px){.IID-custom-text-9a9583f7{font-size:45px}}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>Elevate the conversation</div>
</div>
</div>
<div class="grid CID-grid-1659f761 IID-grid-bd9d540a">
<style>
	.IID-grid-bd9d540a{z-index:1}
	.IID-grid-bd9d540a{--halfHorizGap:16px;--halfVertGap:0px}@media (max-width: 1229px){.IID-grid-bd9d540a{--halfHorizGap:0px;--halfVertGap:16px}}
</style>
<div class="grid__parsys l-flex--align-items-center        ">
<div class="grid-item IID-grid-item-c28cc0e CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-765b2e1b">
<style>
	.IID-custom-text-765b2e1b{color:#ffbc80;font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif;background-image:linear-gradient(135deg,#ffbc80,#ff7a00);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}
	.IID-custom-text-765b2e1b{font-size:100px;font-weight:500;line-height:1.2;letter-spacing:-.3px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-765b2e1b{font-size:60px;letter-spacing:-.24px}}@media (max-width: 767px){.IID-custom-text-765b2e1b{font-size:45px}}
</style>
<div class="custom-text__wrapper" data-style="custom" data-content-wrapper="true">
<div>on RingCentral</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-tab-flex__col--12 IID-grid-item-1503e2ef CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="grid CID-grid-1659f761 IID-grid-6f6c782b">
<style>
	.IID-grid-6f6c782b{margin:16px 0 0}@media (max-width: 1229px){.IID-grid-6f6c782b{margin:0}}
	.IID-grid-6f6c782b{--halfHorizGap:9px;--halfVertGap:0px}@media (max-width: 767px){.IID-grid-6f6c782b{--halfHorizGap:9px;--halfVertGap:10px}}
</style>
<div class="grid__parsys    l-flex--justify-content-flex-start     ">
<div class="grid-item IID-grid-item-2cd44e0d CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="cta-v2 CID-cta-v2-e0fe0cb4 IID-cta-v2-1d911068">
<style>
	
	.IID-cta-v2-1d911068 .cta-v2__el{padding-top:17px;padding-bottom:20px;padding-left:41px;padding-right:41px;font-size:24px;font-weight:500;line-height:32px;color:#852800}.IID-cta-v2-1d911068 .cta-v2__el:hover,.IID-cta-v2-1d911068 .cta-v2__el:focus{color:#852800}.IID-cta-v2-1d911068 .cta-v2__el:active{color:#852800}.IID-cta-v2-1d911068 .cta-v2__el{border-radius:40px}.IID-cta-v2-1d911068 .cta-v2__el:before{background-color:#fae5d1}.IID-cta-v2-1d911068 .cta-v2__el:hover:before,.IID-cta-v2-1d911068 .cta-v2__el:focus:before{background-color:#fff}.IID-cta-v2-1d911068 .cta-v2__el:active:before{background-color:rgba(250,229,209,.8)}.IID-cta-v2-1d911068.cta-v2--active .cta-v2__el{color:#852800}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="heroBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/office/plansandpricing.html" tabindex="0" title="Try free" target="_self" data-dl-element="button" data-dl-additional-info="Elevate the conversation">
<span class="cta-v2__content">
<span class="cta-v2__text">Try free</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-ed44da67 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="cta-v2 IID-cta-v2-507b8246 CID-cta-v2-e0fe0cb4">
<style>
	
	.IID-cta-v2-507b8246 .cta-v2__el{padding-top:17px;padding-bottom:20px;padding-left:41px;padding-right:41px;font-size:24px;font-weight:500;line-height:32px;color:#fff}.IID-cta-v2-507b8246 .cta-v2__el:hover,.IID-cta-v2-507b8246 .cta-v2__el:focus{color:#852800}.IID-cta-v2-507b8246 .cta-v2__el:active{color:#852800}.IID-cta-v2-507b8246 .cta-v2__el{border-radius:40px}.IID-cta-v2-507b8246 .cta-v2__el:before{border-top-style:solid;border-left-style:solid;border-right-style:solid;border-bottom-style:solid;border-width:1px;border-color:#fae5d1}.IID-cta-v2-507b8246 .cta-v2__el:hover:before,.IID-cta-v2-507b8246 .cta-v2__el:focus:before{border-color:transparent}.IID-cta-v2-507b8246 .cta-v2__el:active:before{border-color:transparent}.IID-cta-v2-507b8246 .cta-v2__el:before{background-color:transparent}.IID-cta-v2-507b8246 .cta-v2__el:hover:before,.IID-cta-v2-507b8246 .cta-v2__el:focus:before{background-color:#fff}.IID-cta-v2-507b8246 .cta-v2__el:active:before{background-color:rgba(250,229,209,.8)}.IID-cta-v2-507b8246.cta-v2--active .cta-v2__el{color:#852800}.IID-cta-v2-507b8246.cta-v2--active .cta-v2__el:before{border-color:transparent}
	
</style>
<div class="cta-v2__wrapper" data-dl-custom-type="heroBanner">
<a class="cta-v2__el cta-v2__el--type--link" href="/gb/en/feedback/sales-contact.html" tabindex="0" title="Contact sales" target="_self" data-dl-element="button" data-dl-additional-info="Elevate the conversation">
<span class="cta-v2__content">
<span class="cta-v2__text">Contact sales</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="layers__item layers__item--relative">
<div class="grid CID-grid-1659f761 IID-grid-69f88cdb">
<div class="grid__parsys    l-flex--justify-content-space-between l-tab-flex--justify-content-flex-start  l-flex--flex-wrap-nowrap  ">
<div class="grid-item IID-grid-item-a5be2f5d CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image image--hover-item1 IID-image-d82358a CID-image-b4fec0a0">
<style>.IID-image-d82358a{max-width:673px}.IID-image-d82358a:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-image-d82358a{max-width:624px}}@media (max-width: 767px){.IID-image-d82358a{max-width:100%}.IID-image-d82358a{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="image__wrap  " aria-hidden="true">
<img data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/bkg-1-jpg-rendition.webp" src="data:image/svg+xml,%3Csvg viewBox=%220 0 1346 954%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt width="1346" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/bkg-1.jpg" class="image__img" height="954" />
</div>
</div>
<div class="image image--hover-item1 IID-image-37fe6b7 CID-image-b4fec0a0">
<style>.IID-image-37fe6b7{max-width:625px}.IID-image-37fe6b7:before{display:table-cell;content:'';width:9999px;max-width:100%}.IID-image-37fe6b7{max-height:410px}@media (min-width: 1230px){.IID-image-37fe6b7{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 1229px) and (min-width: 768px){.IID-image-37fe6b7{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="image__wrap image__wrap--full-width " aria-hidden="true">
<img data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/bkg-bottom-left-mob-png-rendition.webp" src="data:image/svg+xml,%3Csvg viewBox=%220 0 625 461%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt width="625" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/bkg-bottom-left-mob.png" class="image__img" height="461" />
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-3213ce8b CID-grid-item-1e7a19ff">
<style>@media (max-width: 1229px) and (min-width: 768px){.IID-grid-item-3213ce8b{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-grid-item-3213ce8b{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="image image--hover-item1 CID-image-b4fec0a0 IID-image-4961311c">
<style>.IID-image-4961311c{max-width:420px}.IID-image-4961311c:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-image-4961311c{max-width:305px}}</style>
<div class="image__wrap  " aria-hidden="true">
<img data-webp-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/bkg-2-jpg-rendition.webp" src="data:image/svg+xml,%3Csvg viewBox=%220 0 840 954%22 xmlns=%22http://www.w3.org/2000/svg%22%2F%3E
" alt width="840" data-lazy-src="/content/dam/rc-www/en_us/images/content/home-page/redesign_23/bkg-2.jpg" class="image__img" height="954" />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="rawhtml IID-rawhtml-e98adb13 aem-GridColumn aem-GridColumn--default--12 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"url": "https://www.ringcentral.co.uk/",
		"name": "RingCentral UK Ltd",
		"alternateName": "RingCentral",
		"vatID": "GB944316327",
		"duns": "211419711",
		"logo": "https://www.ringcentral.co.uk/content/dam/rc-www/en_us/images/svg/ringcentral_2.0_logo_POS.svg",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "85 Uxbridge Road, 4th Floor",
			"addressLocality": "Ealing London",
			"postalCode": "W5 5TH",
			"addressCountry": "GB"
		},
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "0800 098 8136",
			"contactType": "sales",
			"areaServed": ["GB"],
			"availableLanguage": ["English"]
		},
		"sameAs": [
			"https://twitter.com/RingCentralUK",
			"https://www.linkedin.com/company/ringcentral/",
			"https://www.youtube.com/channel/UCb-RwqXeY_wcPWpBIw6dvNQ"
		],
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "5",
			"reviewCount": "5"
		},
		"review": [{
			"@type": "Review",
			"url": "https://www.ringcentral.co.uk/whyringcentral/casestudies/5plus-architects.html",
			"name": "5plus architects - London, UK",
			"sameAs": [
				"https://www.linkedin.com/company/5plus-architects/",
				"https://twitter.com/5plusarch",
				"https://www.instagram.com/5plusarchitects/"
			],
			"datePublished": "2020-05-01",
			"description": "COVID-19 has forced us all into less-than-ideal collaborative conditions. But RingCentral is making it a lot easier to keep things moving forward.",
			"author": {
				"@type": "Organization",
				"name": "5plus Architects",
				"member": {
					"@type": "OrganizationRole",
					"member": {
						"@type": "Person",
						"name": "Sandra Stigwood"
					},
					"roleName": "Senior Network Infrastructure Manager"
				}
			},
			"reviewRating": {
				"@type": "Rating",
				"ratingValue": "5",
				"bestRating": "5",
				"worstRating": "1"
			}
		}, {
			"@type": "Review",
			"url": "https://www.ringcentral.co.uk/whyringcentral/casestudies/big-issue.html",
			"name": "The Big Issue - London UK",
			"sameAs": [
				"https://www.linkedin.com/company/the-big-issue/",
				"https://www.facebook.com/bigissueuk/",
				"https://twitter.com/BigIssue/"
			],
			"datePublished": "2020-09-05",
			"description": "We picked an odd time to implement new technology—as the entire country was locking down. But it was fortunate that we rolled out RingCentral when we did, because it’s helping us continue doing important work and was a vital tool for staff working from home during the lockdown.",
			"author": {
				"@type": "Organization",
				"name": "The Big Issue",
				"member": {
					"@type": "OrganizationRole",
					"member": {
						"@type": "Person",
						"name": "Clive Ellis"
					},
					"roleName": "Group Finance Director"
				}
			},
			"reviewRating": {
				"@type": "Rating",
				"ratingValue": "5",
				"bestRating": "5",
				"worstRating": "1"
			}
		}, {
			"@type": "Review",
			"url": "https://www.ringcentral.co.uk/whyringcentral/casestudies/national-housing-federation.html",
			"name": "National Housing Federation - London, UK",
			"sameAs": [
				"https://www.linkedin.com/company/national-housing-federation/",
				"https://www.facebook.com/nationalhousingfederation/",
				"https://twitter.com/natfednews"
			],
			"datePublished": "2019-12-19",
			"description": "Because RingCentral let us put all of our communications into a single platform, which our staff can use anywhere, all of our employees are now fully productive even when they’re on the road or working remotely.",
			"author": {
				"@type": "Organization",
				"name": "National Housing Federation",
				"member": {
					"@type": "OrganizationRole",
					"member": {
						"@type": "Person",
						"name": "Kalpesh Sonecha"
					},
					"roleName": "Head of ICT"
				}
			},
			"reviewRating": {
				"@type": "Rating",
				"ratingValue": "5",
				"bestRating": "5",
				"worstRating": "1"
			}
		}, {
			"@type": "Review",
			"url": "https://www.ringcentral.co.uk/whyringcentral/casestudies/macintyre-hudson.html",
			"name": "MHA MacIntyre Hudson - London, UK",
			"sameAs": [
				"https://www.linkedin.com/company/macintyre-hudson/",
				"https://twitter.com/MHUpdates/",
				"https://www.youtube.com/user/MacIntyreHudsonLLP"
			],
			"datePublished": "2020-05-06",
			"description": "Now our employees and partners can be fully productive anywhere, because RingCentral works on any internet device. We’re seeing this improve both company productivity and employee satisfaction levels.",
			"author": {
				"@type": "Organization",
				"name": "National Housing Federation",
				"member": {
					"@type": "OrganizationRole",
					"member": {
						"@type": "Person",
						"name": "Andrew Carter"
					},
					"roleName": "IT Business Manager"
				}
			},
			"reviewRating": {
				"@type": "Rating",
				"ratingValue": "5",
				"bestRating": "5",
				"worstRating": "1"
			}
		}, {
			"@type": "Review",
			"url": "https://www.ringcentral.co.uk/whyringcentral/casestudies/mobica.html",
			"sameAs": [
				"https://www.linkedin.com/company/mobica/",
				"https://www.facebook.com/MobicaLimited",
				"https://twitter.com/_Mobica"
			],
			"datePublished": "2019-08-20",
			"description": "RingCentral is leaps and bounds above the communications systems I’ve used in previous organisations. It is truly enabling our global, mobile workforce.",
			"author": {
				"@type": "Organization",
				"name": "Mobica",
				"member": {
					"@type": "OrganizationRole",
					"member": {
						"@type": "Person",
						"name": "Tony Healy"
					},
					"roleName": "Chief Information Officer"
				}
			},
			"reviewRating": {
				"@type": "Rating",
				"ratingValue": "5",
				"bestRating": "5",
				"worstRating": "1"
			}
		}, {
			"@type": "Review",
			"url": "https://www.ringcentral.co.uk/whyringcentral/casestudies/institute-marine-engineering.html",
			"sameAs": [
				"https://www.linkedin.com/company/103277/",
				"https://twitter.com/imarest",
				"https://www.facebook.com/TheIMarEST/"
			],
			"datePublished": "2020-07-15",
			"description": "Having the RingCentral app on our phones and computers at home really made the difference for us being able to communicate and collaborate throughout the lockdowns.",
			"author": {
				"@type": "Organization",
				"name": "Institute of Marine Engineering, Science and Technology (IMarEST)",
				"member": {
					"@type": "OrganizationRole",
					"member": {
						"@type": "Person",
						"name": "Ronnie van de Laak"
					},
					"roleName": "Head of Operations"
				}
			},
			"reviewRating": {
				"@type": "Rating",
				"ratingValue": "5",
				"bestRating": "5",
				"worstRating": "1"
			}
		}]
	}
</script>
</div>
</div>
</div>
</div>
</div>
</main>
<footer role="contentinfo" data-dl-cmp="Footer" aria-label="Footer navigation">
<div class="rawhtml IID-rawhtml-919006f7 CID-rawhtml-3925c5d8">
<div class="rawhtml__wrapper">
<style>

  .links-list.links-list--direction--horizontal .links-list__link[data-right-border="true"]{
    border-right: 1px solid #D3D3D3;
    padding-right: 8px;
  }

  @media only screen and (max-width:1229px){
    .links-list.links-list--direction--horizontal[data-parent-right-border="true"] .links-list__wrapper .links-list__item{
      padding-top: 6px;
      padding-bottom: 6px;
    }
  }
  </style>
</div>
</div>
<div class="rawhtml IID-rawhtml-d06a23bd CID-rawhtml-3925c5d8">
<link rel="stylesheet" href="/content/rc-www/gb/en/shared/footer/footer-orange/_jcr_content/root/rawhtml_copy/clientlib.min.d41d8cd98f00b204e9800998ecf8427e.d41d8cd98f00b204e9800998ecf8427e.css" type="text/css" />
<div class="rawhtml__wrapper">
</div>
</div>
<div class="background background--alignment--center CID-background-79490109 IID-background-6e39378a">
<style>
	.IID-background-6e39378a{background-image:linear-gradient(180deg,#992e00,#681f00);padding:0 0 64px}@media (max-width: 1229px){.IID-background-6e39378a{padding:0 0 56px}}@media (max-width: 767px){.IID-background-6e39378a{padding:0 0 48px}}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid IID-grid-95e79c3f CID-grid-1659f761">
<style>
	.IID-grid-95e79c3f{border-color:rgba(255,255,255,.2);border-width:1px;margin:0 0 64px;padding:64px 0 0;border-style:solid none none}@media (max-width: 1229px){.IID-grid-95e79c3f{margin:0 0 56px}.IID-grid-95e79c3f{padding:56px 0 0}}@media (max-width: 767px){.IID-grid-95e79c3f{border-width:0}.IID-grid-95e79c3f{margin:0 0 48px}.IID-grid-95e79c3f{padding:0}.IID-grid-95e79c3f{border-style:none}}
	
</style>
<div class="grid__parsys    l-flex--justify-content-space-between     ">
<div data-landscape="grid-item" class="grid-item l-tab-flex__col--4 l-mob-flex__col--12 IID-grid-item-4aeb5479 CID-grid-item-1e7a19ff">
<style>@media (max-width: 767px){.IID-grid-item-4aeb5479{border-color:rgba(214,214,213,.3);border-width:1px}.IID-grid-item-4aeb5479{padding:6px 0}.IID-grid-item-4aeb5479{border-style:solid none}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="accordion accordion--default accordion--expanding-disabled accordion--tab-expanding-disabled CID-accordion-67d7b20d IID-accordion-8678d85b">
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/content/accordion/clientlibs/common.min.0b5458677f3cb614ad428289e4a24073.css" type="text/css" />
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/components/content/accordion/clientlibs/common.min.93e06f083246d6e310066751b5d69e2a.js","dependencies":[{"path":"/etc.clientlibs/rc-www/clientlibs/essential.min.f35326dc52e2f83caa7d3e0ce7ea4596.js","dependencies":null,"embed":[],"properties":{}}],"embed":null,"properties":{}}]',
            async: 'true'
        });
	</script>
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/content/accordion/clientlibs/default.min.467f508a90323d35b9b4837ff71ad83b.css" type="text/css" />
<style>
	
	.IID-accordion-8678d85b{--titleColor:#fff;--titleFontSize:14px;--titleTextTransform:uppercase;--titleFontWeight:500;--titleColorOnHover:#fff;--arrowWidth:0;--arrowHeight:0;--arrowColorOnHover:#fff}.IID-accordion-8678d85b.accordion--active{--titleColor:#fff;--arrowColor:#fff;--borderBottomColor:#fff}@media (max-width: 767px){.IID-accordion-8678d85b{--arrowWidth:10px;--arrowHeight:7px}}
</style>
<div class="accordion__wrapper" data-dl-custom-type="none">
<button class="accordion__toggle">
<div class="accordion__title-btn">
<div class="accordion__title">
Products
</div>
<div class="accordion__arrow" aria-label="Down arrow. Expand for more content" aria-expanded="false" aria-hidden="true" data-aria-label-expand-text="Down arrow. Expand for more content" data-aria-label-collapse-text="Up arrow. Collapse to hide content">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="accordion__arrow-icon" role="img" viewBox="0 0 12.812 6.906" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-2063957340" />
</svg>
</div>
</div>
</button>
<div class="accordion__content" data-focusable-content="true">
<div class="accordion__parsys ">
<div class="links-list IID-links-list-72d7a87a CID-links-list-2da41a0d">
<style>
	@media (max-width: 767px){.IID-links-list-72d7a87a{padding:8px 0 0 20px}}
	.IID-links-list-72d7a87a{--rowGap:10px}.IID-links-list-72d7a87a .links-list__link{font-size:13px;color:rgba(255,255,255,.6)}.IID-links-list-72d7a87a .links-list__link:hover{color:#fff;text-decoration:underline}@media (max-width: 767px){.IID-links-list-72d7a87a{--rowGap:20px}}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="footerButtons">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/product-overview.html" data-automation-id="RingCentral MVP™" target="_self">
<span class="links-list__link-text">RingCentral MVP™</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/teams/overview.html" data-automation-id="Message" target="_self">
<span class="links-list__link-text">Message</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/video.html" data-automation-id="Video" target="_self">
<span class="links-list__link-text">Video</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/solutions/office/call.html" data-automation-id="Phone" target="_self">
<span class="links-list__link-text">Phone</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/fax/features/how-it-works.html" data-automation-id="Fax" target="_self">
<span class="links-list__link-text">Fax</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/webinar.html" data-automation-id="RingCentral Webinar™" target="_self">
<span class="links-list__link-text">RingCentral Webinar™</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/effortless-customer-engagement.html" data-automation-id="Customer experience" target="_self">
<span class="links-list__link-text">Customer experience</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/phone-system-features.html" data-automation-id="Features" target="_self">
<span class="links-list__link-text">Features</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/office/voip-phone.html" data-automation-id="Phones and headsets" target="_self">
<span class="links-list__link-text">Phones and headsets</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-landscape="grid-item" class="grid-item l-tab-flex__col--4 l-mob-flex__col--12 CID-grid-item-1e7a19ff IID-grid-item-9bccd821">
<style>@media (max-width: 767px){.IID-grid-item-9bccd821{border-color:rgba(214,214,213,.3);border-width:1px}.IID-grid-item-9bccd821{padding:6px 0}.IID-grid-item-9bccd821{border-style:none none solid}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="accordion accordion--default accordion--expanding-disabled accordion--tab-expanding-disabled CID-accordion-67d7b20d IID-accordion-9a2a19b3">
<style>
	
	.IID-accordion-9a2a19b3{--titleColor:#fff;--titleFontSize:14px;--titleTextTransform:uppercase;--titleFontWeight:500;--titleColorOnHover:#fff;--arrowWidth:0;--arrowHeight:0;--arrowColorOnHover:#fff}.IID-accordion-9a2a19b3.accordion--active{--titleColor:#fff;--arrowColor:#fff;--borderBottomColor:#fff}@media (max-width: 767px){.IID-accordion-9a2a19b3{--arrowWidth:10px;--arrowHeight:7px}}
</style>
<div class="accordion__wrapper" data-dl-custom-type="none">
<button class="accordion__toggle">
<div class="accordion__title-btn">
<div class="accordion__title">
Partners
</div>
<div class="accordion__arrow" aria-label="Down arrow. Expand for more content" aria-expanded="false" aria-hidden="true" data-aria-label-expand-text="Down arrow. Expand for more content" data-aria-label-collapse-text="Up arrow. Collapse to hide content">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="accordion__arrow-icon" role="img" viewBox="0 0 12.812 6.906" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-2063957340" />
</svg>
</div>
</div>
</button>
<div class="accordion__content" data-focusable-content="true">
<div class="accordion__parsys ">
<div class="links-list CID-links-list-2da41a0d IID-links-list-84001dc2">
<style>
	@media (max-width: 767px){.IID-links-list-84001dc2{padding:8px 0 0 20px}}
	.IID-links-list-84001dc2{--rowGap:10px}.IID-links-list-84001dc2 .links-list__link{font-size:13px;color:rgba(255,255,255,.6)}.IID-links-list-84001dc2 .links-list__link:hover{color:#fff;text-decoration:underline}@media (max-width: 767px){.IID-links-list-84001dc2{--rowGap:20px}}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="footerButtons">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/partner/service-providers.html" data-automation-id="Global service providers" target="_self">
<span class="links-list__link-text">Global service providers</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/partner/agent.html" data-automation-id="Channel partners" target="_self">
<span class="links-list__link-text">Channel partners</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/partner/isv.html" data-automation-id="ISV partners" target="_self">
<span class="links-list__link-text">ISV partners</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/partner/connectivity-partners.html" data-automation-id="Connectivity partners" target="_self">
<span class="links-list__link-text">Connectivity partners</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://affiliates.ringcentral.com/" data-automation-id="Affiliate partners" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Affiliate partners</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/partner/strategic-alliances.html" hreflang="en-us" data-automation-id="Strategic alliances" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Strategic alliances</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-landscape="grid-item" class="grid-item l-tab-flex__col--4 l-mob-flex__col--12 IID-grid-item-d3c3a41f CID-grid-item-1e7a19ff">
<style>@media (max-width: 767px){.IID-grid-item-d3c3a41f{border-color:rgba(214,214,213,.3);border-width:1px}.IID-grid-item-d3c3a41f{padding:6px 0}.IID-grid-item-d3c3a41f{border-style:none none solid}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="accordion accordion--default accordion--expanding-disabled accordion--tab-expanding-disabled CID-accordion-67d7b20d IID-accordion-44010975">
<style>
	
	.IID-accordion-44010975{--titleColor:#fff;--titleFontSize:14px;--titleTextTransform:uppercase;--titleFontWeight:500;--titleColorOnHover:#fff;--arrowWidth:0;--arrowHeight:0;--arrowColorOnHover:#fff}.IID-accordion-44010975.accordion--active{--titleColor:#fff;--arrowColor:#fff;--borderBottomColor:#fff}@media (max-width: 767px){.IID-accordion-44010975{--arrowWidth:10px;--arrowHeight:7px}}
</style>
<div class="accordion__wrapper" data-dl-custom-type="none">
<button class="accordion__toggle">
<div class="accordion__title-btn">
<div class="accordion__title">
OPEN ECOSYSTEM
</div>
<div class="accordion__arrow" aria-label="Down arrow. Expand for more content" aria-expanded="false" aria-hidden="true" data-aria-label-expand-text="Down arrow. Expand for more content" data-aria-label-collapse-text="Up arrow. Collapse to hide content">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="accordion__arrow-icon" role="img" viewBox="0 0 12.812 6.906" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-2063957340" />
</svg>
</div>
</div>
</button>
<div class="accordion__content" data-focusable-content="true">
<div class="accordion__parsys ">
<div class="links-list IID-links-list-bc9d4014 CID-links-list-2da41a0d">
<style>
	@media (max-width: 767px){.IID-links-list-bc9d4014{padding:8px 0 0 20px}}
	.IID-links-list-bc9d4014{--rowGap:10px}.IID-links-list-bc9d4014 .links-list__link{font-size:13px;color:rgba(255,255,255,.6)}.IID-links-list-bc9d4014 .links-list__link:hover{color:#fff;text-decoration:underline}@media (max-width: 767px){.IID-links-list-bc9d4014{--rowGap:20px}}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="footerButtons">
<li class="links-list__item">
<a class="links-list__link" href="https://developers.ringcentral.com/" data-automation-id="Developer platform" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Developer platform</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://developers.ringcentral.com/api-products" data-automation-id="APIs" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">APIs</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/platform.html" data-automation-id="Integrated apps" target="_self">
<span class="links-list__link-text">Integrated apps</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://www.ringcentral.com/apps/" data-automation-id="App gallery" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">App gallery</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://developers.ringcentral.com/support.html" data-automation-id="Developer support" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Developer support</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://developers.ringcentral.com/community.html" data-automation-id="Developer community" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Developer community</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://ringcentraldevs.influitive.com/users/sign_in" data-automation-id="Games and rewards" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Games and rewards</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-landscape="divider" class="grid-item l-tab-flex__col--12 CID-grid-item-1e7a19ff IID-grid-item-7b3516d9">
<style>.IID-grid-item-7b3516d9{border-color:rgba(214,214,213,.3);border-width:1px;margin:0 0 15px;padding:21px 0 0;border-style:none none solid}@media (min-width: 1230px){.IID-grid-item-7b3516d9{visibility:hidden;position:absolute;top:-99999px}}@media (max-width: 767px){.IID-grid-item-7b3516d9{visibility:hidden;position:absolute;top:-99999px}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
</div>
</div>
<div data-landscape="grid-item" class="grid-item l-tab-flex__col--4 l-mob-flex__col--12 IID-grid-item-f1958905 CID-grid-item-1e7a19ff">
<style>@media (max-width: 767px){.IID-grid-item-f1958905{border-color:rgba(214,214,213,.3);border-width:1px}.IID-grid-item-f1958905{padding:6px 0}.IID-grid-item-f1958905{border-style:none none solid}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="accordion accordion--default accordion--expanding-disabled accordion--tab-expanding-disabled CID-accordion-67d7b20d IID-accordion-eac4cd4f">
<style>
	
	.IID-accordion-eac4cd4f{--titleColor:#fff;--titleFontSize:14px;--titleTextTransform:uppercase;--titleFontWeight:500;--titleColorOnHover:#fff;--arrowWidth:0;--arrowHeight:0;--arrowColorOnHover:#fff}.IID-accordion-eac4cd4f.accordion--active{--titleColor:#fff;--arrowColor:#fff;--borderBottomColor:#fff}@media (max-width: 767px){.IID-accordion-eac4cd4f{--arrowWidth:10px;--arrowHeight:7px}}
</style>
<div class="accordion__wrapper" data-dl-custom-type="none">
<button class="accordion__toggle">
<div class="accordion__title-btn">
<div class="accordion__title">
Resources
</div>
<div class="accordion__arrow" aria-label="Down arrow. Expand for more content" aria-expanded="false" aria-hidden="true" data-aria-label-expand-text="Down arrow. Expand for more content" data-aria-label-collapse-text="Up arrow. Collapse to hide content">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="accordion__arrow-icon" role="img" viewBox="0 0 12.812 6.906" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-2063957340" />
</svg>
</div>
</div>
</button>
<div class="accordion__content" data-focusable-content="true">
<div class="accordion__parsys ">
<div class="links-list CID-links-list-2da41a0d IID-links-list-1b48566e">
<style>
	@media (max-width: 767px){.IID-links-list-1b48566e{padding:8px 0 0 20px}}
	.IID-links-list-1b48566e{--rowGap:10px}.IID-links-list-1b48566e .links-list__link{font-size:13px;color:rgba(255,255,255,.6)}.IID-links-list-1b48566e .links-list__link:hover{color:#fff;text-decoration:underline}@media (max-width: 767px){.IID-links-list-1b48566e{--rowGap:20px}}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="footerButtons">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/whats-new.html" data-automation-id="What&#39;s new" target="_self">
<span class="links-list__link-text">What&#39;s new</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/resources/learning-center.html" data-automation-id="Resource centre" target="_self">
<span class="links-list__link-text">Resource centre</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://www.ringcentral.com/gb/en/blog/" data-automation-id="Blog" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Blog</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/whyringcentral/casestudies.html" data-automation-id="Customer stories" target="_self">
<span class="links-list__link-text">Customer stories</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/newsroom.html" data-automation-id="Newsroom" target="_self">
<span class="links-list__link-text">Newsroom</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/view_demo.html" data-automation-id="Product demos" target="_self">
<span class="links-list__link-text">Product demos</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/releases/" data-automation-id="Product releases" target="_self">
<span class="links-list__link-text">Product releases</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/product-accessibility.html" data-automation-id="Product Accessibility" target="_self">
<span class="links-list__link-text">Product Accessibility</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/events.html" data-automation-id="Events" target="_self">
<span class="links-list__link-text">Events</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-landscape="grid-item" class="grid-item l-tab-flex__col--4 l-mob-flex__col--12 IID-grid-item-afa95bc9 CID-grid-item-1e7a19ff">
<style>@media (max-width: 767px){.IID-grid-item-afa95bc9{border-color:rgba(214,214,213,.3);border-width:1px}.IID-grid-item-afa95bc9{padding:6px 0}.IID-grid-item-afa95bc9{border-style:none none solid}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="accordion accordion--default accordion--expanding-disabled accordion--tab-expanding-disabled CID-accordion-67d7b20d IID-accordion-e0405b0b">
<style>
	
	.IID-accordion-e0405b0b{--titleColor:#fff;--titleFontSize:14px;--titleTextTransform:uppercase;--titleFontWeight:500;--titleColorOnHover:#fff;--arrowWidth:0;--arrowHeight:0;--arrowColorOnHover:#fff}.IID-accordion-e0405b0b.accordion--active{--titleColor:#fff;--arrowColor:#fff;--borderBottomColor:#fff}@media (max-width: 767px){.IID-accordion-e0405b0b{--arrowWidth:10px;--arrowHeight:7px}}
</style>
<div class="accordion__wrapper" data-dl-custom-type="none">
<button class="accordion__toggle">
<div class="accordion__title-btn">
<div class="accordion__title">
About Us
</div>
<div class="accordion__arrow" aria-label="Down arrow. Expand for more content" aria-expanded="false" aria-hidden="true" data-aria-label-expand-text="Down arrow. Expand for more content" data-aria-label-collapse-text="Up arrow. Collapse to hide content">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="accordion__arrow-icon" role="img" viewBox="0 0 12.812 6.906" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-2063957340" />
</svg>
</div>
</div>
</button>
<div class="accordion__content" data-focusable-content="true">
<div class="accordion__parsys ">
<div class="links-list CID-links-list-2da41a0d IID-links-list-3e493b2a">
<style>
	@media (max-width: 767px){.IID-links-list-3e493b2a{padding:8px 0 0 20px}}
	.IID-links-list-3e493b2a{--rowGap:10px}.IID-links-list-3e493b2a .links-list__link{font-size:13px;color:rgba(255,255,255,.6)}.IID-links-list-3e493b2a .links-list__link:hover{color:#fff;text-decoration:underline}@media (max-width: 767px){.IID-links-list-3e493b2a{--rowGap:20px}}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="footerButtons">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/company.html" data-automation-id="Our company" target="_self">
<span class="links-list__link-text">Our company</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/whyringcentral/leadership.html" data-automation-id="Leadership" target="_self">
<span class="links-list__link-text">Leadership</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/whyringcentral/awards.html" data-automation-id="Awards" target="_self">
<span class="links-list__link-text">Awards</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://ir.ringcentral.com/home/default.aspx" data-automation-id="Investor relations" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Investor relations</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/ventures.html" data-automation-id="Ventures" target="_self">
<span class="links-list__link-text">Ventures</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/trust-centre.html" data-automation-id="Trust Centre" target="_self">
<span class="links-list__link-text">Trust Centre</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/corporate-responsibility.html" data-automation-id="Corporate Responsibility" target="_self">
<span class="links-list__link-text">Corporate Responsibility</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/diversity-and-inclusion.html" data-automation-id="Diversity and inclusion" target="_self">
<span class="links-list__link-text">Diversity and inclusion</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-landscape="grid-item" class="grid-item l-tab-flex__col--4 l-mob-flex__col--12 IID-grid-item-faecf77b CID-grid-item-1e7a19ff">
<style>@media (max-width: 767px){.IID-grid-item-faecf77b{padding:6px 0}}</style>
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="accordion accordion--default accordion--expanding-disabled accordion--tab-expanding-disabled CID-accordion-67d7b20d IID-accordion-24b55999">
<style>
	
	.IID-accordion-24b55999{--titleColor:#fff;--titleFontSize:14px;--titleTextTransform:uppercase;--titleFontWeight:500;--titleColorOnHover:#fff;--arrowWidth:0;--arrowHeight:0;--arrowColorOnHover:#fff}.IID-accordion-24b55999.accordion--active{--titleColor:#fff;--arrowColor:#fff;--borderBottomColor:#fff}@media (max-width: 767px){.IID-accordion-24b55999{--arrowWidth:10px;--arrowHeight:7px}}
</style>
<div class="accordion__wrapper" data-dl-custom-type="none">
<button class="accordion__toggle">
<div class="accordion__title-btn">
<div class="accordion__title">
QUICK LINKS
</div>
<div class="accordion__arrow" aria-label="Down arrow. Expand for more content" aria-expanded="false" aria-hidden="true" data-aria-label-expand-text="Down arrow. Expand for more content" data-aria-label-collapse-text="Up arrow. Collapse to hide content">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="accordion__arrow-icon" role="img" viewBox="0 0 12.812 6.906" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-2063957340" />
</svg>
</div>
</div>
</button>
<div class="accordion__content" data-focusable-content="true">
<div class="accordion__parsys ">
<div class="links-list CID-links-list-2da41a0d IID-links-list-3372f138">
<style>
	@media (max-width: 767px){.IID-links-list-3372f138{padding:8px 0 0 20px}}
	.IID-links-list-3372f138{--rowGap:10px}.IID-links-list-3372f138 .links-list__link{font-size:13px;color:rgba(255,255,255,.6)}.IID-links-list-3372f138 .links-list__link:hover{color:#fff;text-decoration:underline}@media (max-width: 767px){.IID-links-list-3372f138{--rowGap:20px}}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="footerButtons">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/download.html" title="Download RingCentral App" aria-label="Download RingCentral App" data-automation-id="App Download" data-dl-name="App Download" target="_self">
<span class="links-list__link-text">App Download</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://video.ringcentral.com/join" data-automation-id="Join a meeting" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Join a meeting</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://app.ringcentral.com/" data-automation-id="RingCentral App Login" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">RingCentral App Login</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://service.ringcentral.co.uk/" data-automation-id="Admin Portal Login" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Admin Portal Login</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/company/careers/overview.html" hreflang="en-us" data-automation-id="Careers" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Careers</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="https://support.ringcentral.com/gb/en/" data-automation-id="Support" target="_blank" rel="noopener noreferrer">
<span class="links-list__link-text">Support</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/feedback/sales-contact.html" data-automation-id="Contact Sales" target="_self">
<span class="links-list__link-text">Contact Sales</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid IID-grid-2fb669e4 CID-grid-1659f761">
<style>
	.IID-grid-2fb669e4{margin:0 0 48px}@media (max-width: 1229px){.IID-grid-2fb669e4{margin:0 0 44px}}@media (max-width: 767px){.IID-grid-2fb669e4{margin:0 0 40px}}
	
</style>
<div class="grid__parsys    l-flex--justify-content-flex-end  l-mob-flex--justify-content-flex-start   ">
<div class="grid-item IID-grid-item-4af6e574 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="country-switcher-v2 CID-country-switcher-v2-a5e488f0 IID-country-switcher-v2-1398e296">
<link rel="stylesheet" href="/etc.clientlibs/rc-www/components/structure/country-switcher-v2/clientlibs/common.min.19224dfe6ff4ab4b680dbc12da91164c.css" type="text/css" />
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/components/structure/country-switcher-v2/clientlibs/common.min.bdfb095cd5361281f8d19913efe318c0.js","dependencies":[{"path":"/etc.clientlibs/rc-www/clientlibs/essential.min.f35326dc52e2f83caa7d3e0ce7ea4596.js","dependencies":null,"embed":[],"properties":{}},{"path":"/etc.clientlibs/rc-www/clientlibs/utility/dropdown.min.f96d40610a64e40628af8f96a0805c47.js","dependencies":[],"embed":null,"properties":{}}],"embed":null,"properties":{}}]',
            async: 'true'
        });
	</script>
<div class="country-switcher-v2__wrapper country-switcher-v2--orange" data-dl-custom-type="countrySelector">
<button class="country-switcher-v2__btn" aria-label="Switch country. Current country - United Kingdom" aria-expanded="false">
<div class="country-switcher-v2__btn-flagIcon">
<svg xmlns="http://www.w3.org/2000/svg" id="svg--1060565738" role="img" viewBox="0 0 25.05 16.73">
<path d="M0 0h25v16.73H0z" fill="#004990" />
<path d="M10 0v5.86H0v5h10v5.85h5v-5.83h10v-5H15V0z" fill="#fff" />
<path d="M0 0v1.94l22.15 14.79H25v-1.92L2.87 0z" fill="#fff" />
<path d="M22.17 0L0 14.81v1.92h2.9L25 1.94V0z" fill="#fff" />
<path d="M11.06 0v6.9H0v2.93h11.06v6.9H14v-6.9h11V6.9H14V0z" fill="#ef3e42" />
<path d="M25 16.68v-1.32l-6.73-4.48h-2zM23.07 0L15 5.36v.5h1.23L25 0zM8.72 10.87L0 16.68h1.91L10 11.33v-.46zM0 1.33l6.79 4.53h2L0 0z" fill="#ef3e42" />
</svg>
</div>
<div class="country-switcher-v2__btn-text">United Kingdom</div>
<div class="country-switcher-v2__btn-icon" aria-hidden="true">
<svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 12.812 6.906" xmlns="http://www.w3.org/2000/svg">
<use xlink:href="#svg-2063957340" />
</svg>
</div>
</button>
<div class="country-switcher-v2__dropdown" role="listbox">
<div class="country-switcher-v2__dropdown-content">
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral Australia - Virtual Office Phone System" href="/au/en/" target="_self" data-dl-name="Australia" data-automation-id="Australia" tabindex="-1" hreflang="en-au" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">Australia</span>
<span class="country-switcher-v2__link-code">En</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral Canada - Virtual Office Phone System" href="/ca/en/" target="_self" data-dl-name="Canada" data-automation-id="Canada" tabindex="-1" hreflang="en-ca" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">Canada</span>
<span class="country-switcher-v2__link-code">En</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral China - Virtual Office Phone System" href="/cn/zh/" target="_self" data-dl-name="China" data-automation-id="China" tabindex="-1" hreflang="zh-cn" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">China</span>
<span class="country-switcher-v2__link-code">Zh</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral France - Virtual Office Phone System" href="/fr/fr/" target="_self" data-dl-name="France" data-automation-id="France" tabindex="-1" hreflang="fr-fr" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">France</span>
<span class="country-switcher-v2__link-code">Fr</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral Germany - Virtual Office Phone System" href="/de/de/" target="_self" data-dl-name="Germany" data-automation-id="Germany" tabindex="-1" hreflang="de-de" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">Germany</span>
<span class="country-switcher-v2__link-code">De</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral Ireland - Virtual Office Phone System" href="/ie/en/" target="_self" data-dl-name="Ireland" data-automation-id="Ireland" tabindex="-1" hreflang="en-ie" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">Ireland</span>
<span class="country-switcher-v2__link-code">En</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral Italy - Virtual Office Phone System" href="/it/it/" target="_self" data-dl-name="Italy" data-automation-id="Italy" tabindex="-1" hreflang="it-it" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">Italy</span>
<span class="country-switcher-v2__link-code">It</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral MX - Virtual Office Phone System" href="/mx/es/" target="_self" data-dl-name="Mexico" data-automation-id="Mexico" tabindex="-1" hreflang="mx-es" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">Mexico</span>
<span class="country-switcher-v2__link-code">Es</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral Netherlands - Virtual Office Phone System" href="/nl/en/" target="_self" data-dl-name="Netherlands" data-automation-id="Netherlands" tabindex="-1" hreflang="en-nl" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">Netherlands</span>
<span class="country-switcher-v2__link-code">En</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral Portugal - Virtual Office Phone System" href="/pt/pt/" target="_self" data-dl-name="Portugal" data-automation-id="Portugal" tabindex="-1" hreflang="pt-pt" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">Portugal</span>
<span class="country-switcher-v2__link-code">Pt</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral Singapore - Virtual Office Phone System" href="/sg/en/" target="_self" data-dl-name="Singapore" data-automation-id="Singapore" tabindex="-1" hreflang="en-sg" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">Singapore</span>
<span class="country-switcher-v2__link-code">En</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral Spain - Virtual Office Phone System" href="/es/es/" target="_self" data-dl-name="Spain" data-automation-id="Spain" tabindex="-1" hreflang="es-es" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">Spain</span>
<span class="country-switcher-v2__link-code">Es</span>
</a>
</div>
<div class="country-switcher-v2__item country-switcher-v2__item--active" role="option">
<a title="RingCentral UK - Virtual Office Phone System" href="/gb/en/" target="_self" data-dl-name="United Kingdom" data-automation-id="United Kingdom" tabindex="-1" hreflang="en-gb" class="country-switcher-v2__link">
<div class="country-switcher-v2__link-check" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" id="svg--743591743" role="img" viewBox="0 0 14 10">
<path d="M5.109 7.64L12.264.485a.883.883 0 1 1 1.248 1.248L6.045 9.2a.883.883 0 0 1-.936.202.883.883 0 0 1-.936-.202L.624 5.652a.883.883 0 1 1 1.248-1.248L5.11 7.64z" />
</svg>
</div>
<span class="country-switcher-v2__link-text">United Kingdom</span>
<span class="country-switcher-v2__link-code">En</span>
</a>
</div>
<div class="country-switcher-v2__item " role="option">
<a title="RingCentral US - Virtual Office Phone System" href="/" target="_self" data-dl-name="United States" data-automation-id="United States" tabindex="-1" hreflang="en-us" class="country-switcher-v2__link">
<span class="country-switcher-v2__link-text">United States</span>
<span class="country-switcher-v2__link-code">En</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid IID-grid-9a2cbfa0 CID-grid-1659f761">
<style>
	.IID-grid-9a2cbfa0{border-color:rgba(255,255,255,.2);border-width:1px;padding:64px 0 0;border-style:solid none none}@media (max-width: 1229px){.IID-grid-9a2cbfa0{padding:56px 0 0}}@media (max-width: 767px){.IID-grid-9a2cbfa0{padding:48px 0 0}}
	.IID-grid-9a2cbfa0{--halfHorizGap:8px;--halfVertGap:0px}@media (max-width: 767px){.IID-grid-9a2cbfa0{--halfHorizGap:0px;--halfVertGap:14px}}
</style>
<div class="grid__parsys l-flex--align-items-center   l-flex--justify-content-space-between   l-flex--flex-wrap-nowrap  l-mob-flex--flex-wrap-wrap">
<div class="grid-item CID-grid-item-1e7a19ff IID-grid-item-26773f38">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-landscape="title" class="custom-text CID-custom-text-e0b1298e IID-custom-text-48a9526f">
<style>
	.IID-custom-text-48a9526f{color:#fff;font-family:"RingCentralDisplay",Helvetica,Arial,sans-serif}body.page .IID-custom-text-48a9526f a{color:#ff7a00;text-decoration:underline}body.page .IID-custom-text-48a9526f a:hover{color:#ff7a00;text-decoration:underline}
	.IID-custom-text-48a9526f{font-size:60px;font-weight:500;line-height:1.12;letter-spacing:-.27px;--rowGap:20px}@media (max-width: 1229px){.IID-custom-text-48a9526f{font-size:40px;line-height:1.2;letter-spacing:-.32px}}@media (max-width: 767px){.IID-custom-text-48a9526f{font-size:36px}}
</style>
<div class="custom-text__wrapper" data-dl-custom-type="footerButtons" data-style="custom" data-content-wrapper="true">
<div>How can we help? <a class="Select Class Name" href="/gb/en/feedback/sales-contact.html">Contact&nbsp;us</a></div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--flex-shrink-0 l-mob-flex__col--flex-shrink-1 IID-grid-item-387f695d CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="grid CID-grid-1659f761 IID-grid-245cdb7d">
<style>
	
	.IID-grid-245cdb7d{--halfHorizGap:10px;--halfVertGap:0px}@media (max-width: 767px){.IID-grid-245cdb7d{--halfHorizGap:6px;--halfVertGap:0px}}
</style>
<div class="grid__parsys      l-mob-flex--justify-content-space-between   ">
<div class="grid-item IID-grid-item-5710b8fb CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-itl itl custom-itl--logo CID-custom-itl-6a582420 IID-custom-itl-4b8c8a22">
<style>
	
	.custom-itl.IID-custom-itl-4b8c8a22 .custom-itl__icon{width:36px;height:36px;background-color:#fff;color:#fff;fill:#fff}.custom-itl.IID-custom-itl-4b8c8a22 .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-4b8c8a22 .custom-itl__icon img.custom-itl__img{width:auto}.custom-itl.IID-custom-itl-4b8c8a22 .custom-itl__additional-icon{width:20px;height:20px}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="footerButtons">
<a class="custom-itl__link custom-itl__link--type--link" title="Facebook" href="https://www.facebook.com/ringcentral?refsrc=http%3A%2F%2Fwww.ringcentral.com%2F&_rdr" target="_blank" aria-label="Facebook" data-automation-id="Facebook" rel=" noopener noreferrer">
<div class="custom-itl__icon custom-itl__icon--circle    ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--139484283-561774310-title" class="custom-itl__img" id="svg--139484283-561774310" role="img" viewBox="0 0 28 28">
<title id="svg--139484283-561774310-title">Facebook</title>
<g>
<circle cx="14" cy="14" fill="none" r="14" />
<path d="M17.27,11.62H15.14v-1.4a.57.57,0,0,1,.59-.65h1.51V7.26H15.16a2.63,2.63,0,0,0-2.83,2.83v1.54H11V14h1.33v6.75h2.81V14H17Z" fill="#681F00" fill-rule="evenodd" />
</g>
</svg>
</div>
</a>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-405c1439 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-itl itl custom-itl--logo CID-custom-itl-6a582420 IID-custom-itl-f81ad1e0">
<style>
	
	.custom-itl.IID-custom-itl-f81ad1e0 .custom-itl__icon{width:36px;height:36px;background-color:#681f00}.custom-itl.IID-custom-itl-f81ad1e0 .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-f81ad1e0 .custom-itl__icon img.custom-itl__img{width:auto}.custom-itl.IID-custom-itl-f81ad1e0 .custom-itl__additional-icon{width:20px;height:20px}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="footerButtons">
<a class="custom-itl__link custom-itl__link--type--link" title="Twitter" href="https://twitter.com/ringcentral" target="_blank" aria-label="Twitter" data-automation-id="Twitter" rel=" noopener noreferrer">
<div class="custom-itl__icon custom-itl__icon--circle  custom-itl__icon--full-size   ">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="svg-1392443350-748307027-title" class="custom-itl__img" id="svg-1392443350-748307027" role="img" style="enable-background:new 0 0 28 28;" version="1.1" viewBox="0 0 28 28" x="0px" xml:space="preserve" y="0px"><title id="svg-1392443350-748307027-title">Twitter</title>
<circle cx="14" cy="14" fill="white" r="14" />
<path d="M21.26,20.72l-5.33-7.75l4.85-5.64l0.71-0.83h-2.53l-0.15,0.17l-4,4.66l-3.17-4.61L11.49,6.5H6.2l0.54,0.78  l5.13,7.46l-5.1,5.93L6.06,21.5h2.53l0.15-0.17l4.25-4.95l3.37,4.9l0.15,0.22h4.34h0.95L21.26,20.72z M17.34,20.13l-3.69-5.28  l-0.54-0.77L8.79,7.91h1.86l3.48,4.98l0.54,0.77l4.53,6.47H17.34z" fill="#681F00" />
</svg>
</div>
</a>
</div>
</div>
</div>
</div>
<div class="grid-item CID-grid-item-1e7a19ff IID-grid-item-8a3e481f">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-itl itl custom-itl--logo CID-custom-itl-6a582420 IID-custom-itl-60a1846">
<style>
	
	.custom-itl.IID-custom-itl-60a1846 .custom-itl__icon{width:36px;height:36px;background-color:#fff}.custom-itl.IID-custom-itl-60a1846 .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-60a1846 .custom-itl__icon img.custom-itl__img{width:auto}.custom-itl.IID-custom-itl-60a1846 .custom-itl__additional-icon{width:20px;height:20px}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="footerButtons">
<a class="custom-itl__link custom-itl__link--type--link" title="LinkedIn" href="https://www.linkedin.com/company/ringcentral/" target="_blank" aria-label="LinkedIn" data-automation-id="LinkedIn" rel=" noopener noreferrer">
<div class="custom-itl__icon custom-itl__icon--circle    ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--467904579-1259335998-title" class="custom-itl__img" id="svg--467904579-1259335998" role="img" viewBox="0 0 28 28">
<title id="svg--467904579-1259335998-title">LinkedIn</title>
<g>
<circle cx="14" cy="14" fill="none" r="14" />
<path d="M9.14,7.43A1.63,1.63,0,0,0,7.43,9,1.63,1.63,0,0,0,9.14,10.5,1.63,1.63,0,0,0,10.85,9,1.63,1.63,0,0,0,9.14,7.43Zm8.67,4.09A3.09,3.09,0,0,0,15,13V11.79H12V20.5H15V15.77c0-1,.48-2,1.62-2s1.43,1,1.43,2V20.5h3.06V15.55c0-3.44-2.07-4-3.34-4ZM7.6,20.5h3.07V11.79H7.6Z" fill="#681F00" fill-rule="evenodd" />
</g>
</svg>
</div>
</a>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-f42715ac CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-itl itl custom-itl--logo IID-custom-itl-7d117c93 CID-custom-itl-6a582420">
<style>
	
	.custom-itl.IID-custom-itl-7d117c93 .custom-itl__icon{width:36px;height:36px;background-color:#fff}.custom-itl.IID-custom-itl-7d117c93 .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-7d117c93 .custom-itl__icon img.custom-itl__img{width:auto}.custom-itl.IID-custom-itl-7d117c93 .custom-itl__additional-icon{width:20px;height:20px}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="footerButtons">
<a class="custom-itl__link custom-itl__link--type--link" title="YouTube" href="https://www.youtube.com/user/ringcentral" target="_blank" aria-label="YouTube" data-automation-id="YouTube" rel=" noopener noreferrer">
<div class="custom-itl__icon custom-itl__icon--circle    ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-959188-671954723-title" class="custom-itl__img" id="svg-959188-671954723" role="img" viewBox="0 0 28 28">
<title id="svg-959188-671954723-title">YouTube</title>
<g>
<circle cx="14" cy="14" fill="none" r="14" />
<path d="M21.62,10a2,2,0,0,0-1.4-1.46A44.57,44.57,0,0,0,14,8.15a45.7,45.7,0,0,0-6.25.35A2.06,2.06,0,0,0,6.31,10,22.76,22.76,0,0,0,6,14a22.6,22.6,0,0,0,.33,4,2,2,0,0,0,1.4,1.46,45.85,45.85,0,0,0,6.25.35,47.16,47.16,0,0,0,6.26-.34A2,2,0,0,0,21.62,18,22.66,22.66,0,0,0,22,14a21,21,0,0,0-.33-4Zm-9.25,6.48v-5L16.53,14Z" fill="#681F00" />
</g>
</svg>
</div>
</a>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-b7d434b6 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-itl itl custom-itl--logo IID-custom-itl-39fcad1d CID-custom-itl-6a582420">
<style>
	
	.custom-itl.IID-custom-itl-39fcad1d .custom-itl__icon{width:36px;height:36px;background-color:#fff}.custom-itl.IID-custom-itl-39fcad1d .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-39fcad1d .custom-itl__icon img.custom-itl__img{width:auto}.custom-itl.IID-custom-itl-39fcad1d .custom-itl__additional-icon{width:20px;height:20px}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="footerButtons">
<a class="custom-itl__link custom-itl__link--type--link" title="Instagram" href="https://www.instagram.com/ringcentral" target="_blank" aria-label="Instagram" data-automation-id="Instagram" rel=" noopener noreferrer">
<div class="custom-itl__icon custom-itl__icon--circle    ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--1735843101-2032871314-title" class="custom-itl__img" id="svg--1735843101-2032871314" role="img" viewBox="0 0 28 28">
<title id="svg--1735843101-2032871314-title">Instagram</title>
<g>
<circle cx="14" cy="14" fill="none" r="14" />
<path d="M17.15,6.49a4.34,4.34,0,0,1,4.28,4.27v6.39a4.33,4.33,0,0,1-4.26,4.28H10.78a4.34,4.34,0,0,1-4.29-4.26V10.78a4.35,4.35,0,0,1,4.27-4.29Zm0,1.3H10.78a3,3,0,0,0-3,3v6.36a3,3,0,0,0,3,3h6.36a3,3,0,0,0,3-3V10.78A3,3,0,0,0,17.14,7.79ZM14,10a4,4,0,1,1-4,4A4,4,0,0,1,14,10Zm0,1.29A2.72,2.72,0,1,0,16.68,14,2.72,2.72,0,0,0,14,11.25Zm4-2.17a.91.91,0,1,1,0,1.81.91.91,0,0,1,0-1.81Z" fill="#681F00" fill-rule="evenodd" />
</g>
</svg>
</div>
</a>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-31e61c86 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-itl itl custom-itl--logo IID-custom-itl-8a7240ed CID-custom-itl-6a582420">
<style>
	
	.custom-itl.IID-custom-itl-8a7240ed .custom-itl__icon{width:36px;height:36px;background-color:#fff}.custom-itl.IID-custom-itl-8a7240ed .custom-itl__icon .custom-itl__img{max-height:100%}.custom-itl.IID-custom-itl-8a7240ed .custom-itl__icon img.custom-itl__img{width:auto}.custom-itl.IID-custom-itl-8a7240ed .custom-itl__additional-icon{width:20px;height:20px}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="footerButtons">
<a class="custom-itl__link custom-itl__link--type--link" title="TikTok" href="https://www.tiktok.com/@ringcentral" target="_blank" aria-label="TikTok" data-automation-id="TikTok" rel=" noopener noreferrer">
<div class="custom-itl__icon custom-itl__icon--circle    ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--296006513--1789876998-title" class="custom-itl__img" id="svg--296006513--1789876998" role="img" viewBox="-7 -5 30 30">
<title id="svg--296006513--1789876998-title">TikTok</title>
<path d="M15.45,4.41c-1.93-.41-3.36-2.03-3.55-3.99v-.41h-3.24V12.86c0,1.5-1.23,2.72-2.73,2.71-.85,0-1.65-.4-2.16-1.07h0s0,0,0,0c-.91-1.2-.68-2.91,.52-3.81,.71-.54,1.63-.7,2.47-.43v-3.29C3.51,6.51,.51,8.79,.06,12.04c-.25,1.82,.35,3.66,1.64,4.97,2.3,2.35,6.07,2.39,8.42,.1,1.15-1.12,1.79-2.65,1.79-4.26V6.29c1.31,.94,2.88,1.44,4.49,1.44v-3.22c-.32,0-.63-.03-.94-.1Z" fill="#681F00" />
</svg>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="background background--alignment--center IID-background-924ff763 CID-background-79490109">
<style>
	.IID-background-924ff763{color:#222;background-color:#f6f5f1;padding:16px 0}
	
</style>
<div class="background__wrapper " data-automation-resolution="desktop">
<div class="background__content">
<div class="grid IID-grid-d1b72c3d CID-grid-1659f761">
<style>
	
	.IID-grid-d1b72c3d{--halfHorizGap:160px;--halfVertGap:8px}@media (max-width: 1229px){.IID-grid-d1b72c3d{--halfHorizGap:10.5px;--halfVertGap:8px}}@media (max-width: 767px){.IID-grid-d1b72c3d{--halfHorizGap:10.5px;--halfVertGap:16px}}
</style>
<div class="grid__parsys l-flex--align-items-center   l-flex--justify-content-space-between     ">
<div class="grid-item l-flex__col--flex-grow-1 IID-grid-item-14deb46 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="grid IID-grid-8a8f63a0 CID-grid-1659f761">
<style>
	
	.IID-grid-8a8f63a0{--halfHorizGap:16px;--halfVertGap:0px}@media (max-width: 1229px){.IID-grid-8a8f63a0{--halfHorizGap:16px;--halfVertGap:9px}}@media (max-width: 767px){.IID-grid-8a8f63a0{--halfHorizGap:0px;--halfVertGap:9px}}
</style>
<div class="grid__parsys l-flex--align-items-center   l-flex--justify-content-space-between   l-flex--flex-wrap-nowrap l-tab-flex--flex-wrap-wrap ">
<div class="grid-item CID-grid-item-1e7a19ff IID-grid-item-3b311b38">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-itl itl custom-itl--logo IID-custom-itl-a2b1b71f CID-custom-itl-6a582420">
<style>
	.IID-custom-itl-a2b1b71f{max-width:137px}.IID-custom-itl-a2b1b71f:before{display:table-cell;content:'';width:9999px;max-width:100%}
	
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="footerButtons">
<a class="custom-itl__link custom-itl__link--type--link" href="/gb/en/" target="_self" data-dl-name="Logo">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" class="custom-itl__img" fill="none" height="146" id="svg-1330251413" role="img" viewBox="0 0 961 146" width="961">
<path clip-rule="evenodd" d="M174.671 17.6394C174.671 17.6396 174.672 17.6396 174.673 17.6396C175.436 19.1741 177.059 19.9746 178.653 19.8197C179.132 19.768 179.597 19.6279 180.04 19.4139C182.021 18.4069 182.821 16.0054 181.822 14.0208C181.549 13.3826 176.126 3.40055 160.614 0.637594C156.804 -0.0448463 153.373 -0.100179 150.374 0.217063C140.613 1.23519 135.501 6.18196 135.11 6.56191C133.542 8.11492 133.542 10.6639 135.11 12.2169C136.666 13.7884 139.208 13.8032 140.765 12.2317C140.765 12.2317 140.813 12.1616 141.222 11.8776C142.391 10.9517 145.726 8.74572 151.204 8.17395C153.469 7.94155 156.11 7.96737 159.183 8.51701C165.432 9.66425 169.287 12.0841 171.663 14.1462C172.832 15.1975 173.632 16.1345 174.119 16.7911C174.355 17.1121 174.518 17.374 174.595 17.5215C174.634 17.5806 174.651 17.6101 174.66 17.6248C174.667 17.6363 174.668 17.6388 174.671 17.6394ZM926.183 1.0289L905.828 118.379H939.743L960.106 1.0289H926.183ZM447.474 45.7813C447.43 46.1096 447.389 46.4674 447.389 46.8695H481.924C482.009 46.0469 482.075 45.287 482.075 44.5603V42.2437C482.075 29.3105 478.088 19.2805 470.142 12.1942C462.178 5.10048 450.122 1.56285 433.991 1.56285C426.285 1.56285 418.811 2.92404 411.559 5.63167C404.318 8.36512 397.774 12.2421 391.916 17.2811C386.054 22.3127 381.071 28.4215 376.961 35.6148C372.841 42.8302 370.033 50.8904 368.48 59.8174C368.071 62.1894 367.761 64.4728 367.558 66.6787C367.344 68.881 367.248 71.0205 367.248 73.0641C367.248 80.1726 368.348 86.5027 370.561 92.1097C372.76 97.7021 376.013 102.461 380.266 106.364C384.538 110.27 389.75 113.243 395.915 115.298C402.082 117.356 409.172 118.382 417.185 118.382C424.485 118.382 431.39 117.331 437.923 115.224C444.442 113.129 450.355 110.086 455.641 106.142C460.934 102.191 465.516 97.3774 469.364 91.7335C473.207 86.0784 476.162 79.6524 478.22 72.4555H443.239C441.597 77.8154 439.004 82.2826 435.463 85.8682C431.903 89.4611 427.207 91.2539 421.349 91.2539C417.86 91.2539 414.982 90.7781 412.721 89.7894C410.46 88.823 408.634 87.4802 407.25 85.7907C405.863 84.0901 404.882 82.1055 404.318 79.8553C403.757 77.6051 403.48 75.1373 403.48 72.4555C403.48 70.7069 403.565 68.881 403.783 66.9812C403.986 65.0962 404.296 63.1079 404.698 61.0421C406.546 50.2743 409.748 42.1773 414.263 36.7731C418.771 31.3763 424.271 28.6945 430.76 28.6945C436.101 28.6945 440.233 30.0741 443.161 32.8481C446.09 35.6148 447.562 39.5692 447.562 44.7152C447.562 45.1284 447.533 45.4862 447.474 45.7813ZM551.122 63.6157C551.225 63.0698 551.284 62.2656 551.284 61.1737C551.284 57.6877 550.082 54.7514 547.71 52.3721C545.312 49.9854 542.324 48.7939 538.735 48.7939C533.637 48.7939 529.513 50.1108 526.355 52.7778C523.197 55.4486 521.191 59.0489 520.32 63.6157H551.122ZM517.383 80.9054C517.28 81.4329 517.199 81.9826 517.147 82.5211C517.081 83.0597 517.066 83.6057 517.066 84.159C517.066 88.3016 518.42 91.5736 521.131 94.0156C523.857 96.4687 527.222 97.675 531.228 97.675C533.954 97.675 536.577 97.0516 539.059 95.8195C541.56 94.5616 543.619 92.7098 545.245 90.1903H577.693C575.299 95.5133 572.178 99.9584 568.323 103.555C564.453 107.13 560.204 110.04 555.523 112.287C550.845 114.493 545.932 116.082 540.775 117.005C535.595 117.919 530.542 118.384 525.536 118.384C519.449 118.384 513.85 117.621 508.751 116.094C503.639 114.577 499.238 112.298 495.553 109.251C491.849 106.222 488.975 102.5 486.913 98.0845C484.848 93.6763 483.804 88.6188 483.804 82.8494C483.804 81.4329 483.903 79.9832 484.058 78.5187C484.202 77.0579 484.405 75.5824 484.623 74.0441C485.818 67.098 488.157 60.7605 491.639 55.0612C495.11 49.3619 499.371 44.5221 504.421 40.5566C509.478 36.5837 515.126 33.5219 521.371 31.3381C527.631 29.1654 534.171 28.0846 541.011 28.0846C547.861 28.0846 553.918 29.0658 559.193 31.0172C564.453 32.9649 568.902 35.691 572.488 39.1696C576.059 42.6445 578.788 46.8904 580.625 51.8888C582.477 56.8725 583.399 62.3689 583.399 68.3485C583.399 72.0448 582.96 76.2206 582.097 80.9054H517.383ZM625.346 32.9698H594.392L579.714 118.382H613.622L621.115 74.8606C621.989 69.3199 623.616 64.9892 625.999 61.8979C628.393 58.8066 632.218 57.261 637.43 57.261C641.116 57.261 643.635 58.2349 644.993 60.1936C646.354 62.1451 647.036 64.5871 647.036 67.5271C647.036 69.3863 646.874 71.2713 646.553 73.2338L638.714 118.382H672.637L681.416 67.1951C682.069 63.4989 682.409 59.9797 682.409 56.6118C682.409 48.1347 680.177 41.6534 675.721 37.212C671.257 32.7632 664.256 30.5241 654.687 30.5241C648.172 30.5241 642.473 31.8632 637.582 34.5155C632.694 37.201 627.858 41.1222 623.066 46.342L625.346 32.9698ZM735.326 117.738C731.508 117.938 728.003 118.118 724.79 118.229C721.6 118.343 718.634 118.38 715.911 118.38C710.802 118.38 706.516 118.133 703.045 117.654C699.562 117.174 696.788 116.289 694.723 115.045C692.657 113.806 691.192 112.128 690.314 110.069C689.447 108.029 689.02 105.406 689.02 102.26C689.02 100.308 689.16 98.1025 689.429 95.6494C689.702 93.2074 690.093 90.5035 690.643 87.5745L696.847 51.9032H684.774L688.046 32.3264H700.588L705.324 5.75179H738.727L734.009 32.3264H750.303L747.034 51.9032H730.737L725.37 82.9929C725.148 83.9816 724.993 84.8558 724.875 85.66C724.761 86.4937 724.706 87.2204 724.706 87.877C724.706 89.9538 725.37 91.4257 726.664 92.311C727.985 93.1742 730.42 93.6021 734.009 93.6021H739.384L735.326 117.738ZM788.103 32.9698H757.286L742.626 118.382H776.531L781.585 88.8783C783.211 79.6672 786.066 73.1748 790.143 69.4822C794.223 65.797 799.726 63.9415 806.68 63.9415C807.879 63.9415 809.048 64.0596 810.199 64.2625C810.424 64.3073 810.649 64.3518 810.873 64.3962L811.294 64.4793C812.052 64.6289 812.801 64.7769 813.526 64.9265L819.572 31.0184C818.856 30.928 818.146 30.8147 817.486 30.7093L817.486 30.7091L817.367 30.6901C816.658 30.5831 815.924 30.5241 815.164 30.5241C802.22 30.5241 792.334 37.1014 785.506 50.2485H785.163L788.103 32.9698ZM849.266 99.1371C852.184 99.1371 854.777 98.617 857.005 97.5288C859.23 96.4442 861.104 94.9466 862.616 93.0284C864.155 91.1323 865.328 88.9079 866.206 86.3441C867.083 83.7988 867.674 81.0654 868.006 78.1253C864.97 79.4238 861.886 80.3718 858.798 80.9879C855.711 81.5781 852.815 82.231 850.159 82.9393C847.499 83.6439 845.194 84.6436 843.312 85.9531C841.398 87.2516 840.232 89.2473 839.801 91.9881V92.9546C839.801 94.8211 840.579 96.3078 842.165 97.4402C843.737 98.5912 846.112 99.1371 849.266 99.1371ZM864.94 118.566L864.741 106.821C859.215 111.365 853.745 114.446 848.352 116.017C842.988 117.581 837.093 118.378 830.671 118.378C827.093 118.378 823.658 117.976 820.408 117.175C817.151 116.36 814.322 115.084 811.935 113.328C809.534 111.594 807.63 109.466 806.217 106.883C804.819 104.349 804.104 101.265 804.104 97.6723C804.104 96.1562 804.255 94.4778 804.602 92.637C805.682 86.211 808.051 81.1942 811.684 77.5459C815.325 73.9123 819.571 71.1715 824.407 69.3271C829.217 67.4716 834.352 66.2026 839.723 65.4833C842.032 65.1822 844.272 64.8913 846.442 64.6095C849.325 64.2353 852.084 63.877 854.719 63.5319C859.333 62.9232 863.258 62.1338 866.449 61.0862C869.644 60.0459 871.488 58.183 871.909 55.4643C871.909 55.2504 871.949 55.0585 871.997 54.8962C872.045 54.7302 872.071 54.5495 872.071 54.3318C872.082 53.0186 871.687 51.9857 870.931 51.2332C870.171 50.4807 869.271 49.9015 868.234 49.5068C867.213 49.1305 866.11 48.8723 864.907 48.6953C863.716 48.5329 862.723 48.4518 861.971 48.4518C860.761 48.4518 859.499 48.5329 858.145 48.6953C856.788 48.8723 855.497 49.2523 854.305 49.8536C853.11 50.4512 852.007 51.2885 850.971 52.3731C849.941 53.4686 849.196 54.9294 848.765 56.7812H816.166C816.93 52.196 818.45 48.1604 820.737 44.6264C823.016 41.0962 826.259 38.0971 830.427 35.6625C834.622 33.2168 839.742 31.3391 845.828 30.0407C851.915 28.7164 859.215 28.0893 867.674 28.0893C875.395 28.0893 881.732 28.602 886.653 29.6423C891.607 30.6604 895.499 32.1618 898.314 34.1242C901.143 36.0646 903.105 38.4107 904.186 41.122C905.267 43.837 905.828 46.8877 905.828 50.263C905.828 52.314 905.684 54.4388 905.415 56.6005C905.138 58.7806 904.776 61.0566 904.352 63.4544L897.495 103.39C897.196 105.234 897.019 106.758 897.019 107.942C897.019 109.156 897.225 110.207 897.668 111.126C898.1 112.048 898.93 113.118 900.11 114.316L899.988 118.566H864.94ZM164.706 26.7555C164.697 26.7619 164.695 26.7594 164.678 26.727C164.655 26.684 164.603 26.5883 164.467 26.3903L164.46 26.3818C164.197 26.0531 163.786 25.537 163.139 24.9775C161.858 23.8561 159.719 22.5059 156.185 21.8456C154.444 21.5321 152.957 21.5173 151.718 21.6501C148.671 21.9711 146.863 23.1847 146.247 23.6569C146.074 23.7897 146.085 23.8081 146.085 23.8081C144.786 25.1029 142.669 25.114 141.356 23.8081C140.05 22.4986 140.05 20.3885 141.356 19.0753C141.68 18.747 144.919 15.652 151.017 15.0102C152.883 14.822 155.008 14.8663 157.358 15.2795V15.2758C166.979 16.9911 170.461 23.2253 170.682 23.7565C171.509 25.387 170.848 27.4085 169.192 28.2311C168.827 28.4229 168.432 28.5409 168.034 28.5778C166.698 28.718 165.341 28.0245 164.706 26.7555ZM153.155 42.3399C157.943 42.3546 161.831 39.0568 161.857 34.9437C161.886 30.8565 158.013 27.4848 153.225 27.459C148.422 27.4479 144.523 30.7532 144.516 34.8736C144.493 38.9609 148.359 42.3178 153.155 42.3399Z" fill="#FF7A00" fill-rule="evenodd" />
<path clip-rule="evenodd" d="M65.8562 51.2376H50.7097L54.6088 27.9314H72.5367C76.5539 27.9314 79.8296 28.7208 82.3159 30.2886C84.8243 31.8748 86.0601 34.3389 86.0601 37.7032C86.0601 38.8025 86.0158 39.6103 85.9015 40.1489C85.2559 44.2915 83.2381 47.1651 79.8628 48.7956C76.4986 50.415 71.8321 51.2376 65.8562 51.2376ZM39.1268 117.899L46.143 76.9897H57.8736C64.7128 76.9897 69.4124 77.8308 71.9688 79.5055C74.5215 81.2135 75.8089 84.1092 75.8089 88.2408C75.8089 90.7455 75.4769 93.7667 74.8203 97.367C74.171 100.949 73.6988 104.188 73.4332 107.047C73.1713 109.953 73.0238 112.3 73.0238 114.162C73.0238 115.564 73.1308 116.815 73.3595 117.899H112.314L112.793 114.321C110.846 114.321 109.868 113.011 109.868 110.415C109.868 108.884 110.078 106.766 110.525 104.048C110.953 101.336 111.55 97.9056 112.314 93.7667C113.077 89.3179 113.457 85.4188 113.457 82.0398C113.457 78.7862 113.077 76.1265 112.314 74.0644C111.55 71.9913 110.495 70.2538 109.141 68.841C107.777 67.4282 106.15 66.2625 104.239 65.3403C102.347 64.4144 100.196 63.518 97.8093 62.6363C104.973 60.803 110.599 57.2395 114.667 51.9755C118.751 46.6968 121.381 40.6913 122.576 33.9554C123.119 30.9158 123.403 28.2377 123.403 25.969C123.403 21.6198 122.558 17.8793 120.854 14.7217C119.179 11.5603 116.464 8.93752 112.716 6.82381C108.964 4.7064 104.128 3.13494 98.2077 2.0873C92.2907 1.06549 85.0237 0.552734 76.4581 0.552734H21.0366L0.659302 117.899H39.1268ZM137.751 48.5791L118.657 117.9H152.406L162.315 48.5791H137.751ZM177.394 32.4887H208.366L206.079 45.8609C210.859 40.6411 215.699 36.7235 220.583 34.0344C225.482 31.3858 231.189 30.043 237.707 30.043C247.257 30.043 254.274 32.2821 258.73 36.7309C263.19 41.1723 265.41 47.6536 265.41 56.1307C265.41 59.4986 265.082 63.0178 264.44 66.714L255.639 117.901H221.723L229.555 72.7527C229.879 70.7902 230.053 68.9052 230.053 67.046C230.053 64.106 229.355 61.664 228.002 59.7126C226.648 57.7538 224.117 56.7799 220.425 56.7799C215.216 56.7799 211.387 58.3255 209.015 61.4168C206.617 64.5118 204.983 68.8388 204.127 74.3795L196.624 117.901H162.727L177.394 32.4887ZM310.705 54.044C312.553 53.0554 314.726 52.5721 317.22 52.5721H317.559C321.897 52.5721 324.933 53.8559 326.667 56.427C328.404 58.9834 329.29 62.0562 329.29 65.6676C329.29 67.5231 329.113 69.327 328.803 71.0792C328.371 73.37 327.703 75.5833 326.84 77.7118C325.977 79.8402 324.856 81.7253 323.505 83.3668C322.144 84.9899 320.51 86.3179 318.614 87.2659C316.699 88.2619 314.567 88.7673 312.17 88.7673H311.365C307.544 88.664 304.814 87.3877 303.117 84.9087C301.45 82.452 300.609 79.5378 300.598 76.1403C300.598 75.5021 300.616 74.8418 300.686 74.1815C300.73 73.5434 300.808 72.8203 300.926 72.0457C301.346 69.327 301.985 66.7743 302.804 64.3581C303.608 61.9566 304.666 59.8835 305.972 58.1497C307.289 56.4012 308.861 55.0326 310.705 54.044ZM297.012 121.189V120.706H262.949V121.831C262.949 124.892 263.691 127.829 265.14 130.64C266.612 133.48 268.91 135.974 272.075 138.158C275.226 140.323 279.361 142.049 284.463 143.363C289.575 144.665 295.813 145.31 303.202 145.31C313.748 145.31 322.222 144.137 328.64 141.821C335.044 139.482 340.102 136.247 343.791 132.111C347.483 127.98 350.176 123.14 351.873 117.607C353.544 112.059 354.927 106.079 356.027 99.6864L367.923 30.8927H338.091L336.306 42.0589C333.908 37.9495 330.669 34.6443 326.589 32.1691C322.532 29.6901 317.887 28.4581 312.66 28.4581C305.589 28.4581 299.436 29.7307 294.164 32.276C288.893 34.8398 284.381 38.1413 280.637 42.2286C276.878 46.3048 273.883 50.9454 271.673 56.1614C269.445 61.3849 267.888 66.5936 267.025 71.8133C266.793 73.3331 266.612 74.7939 266.461 76.2067C266.299 77.6196 266.21 79.0435 266.21 80.4416C266.21 84.9088 266.867 89.0809 268.165 92.9948C269.467 96.9123 271.422 100.277 274.041 103.113C276.646 105.928 279.877 108.163 283.725 109.779C287.58 111.398 292.076 112.232 297.174 112.232C303.375 112.232 308.566 111.303 312.749 109.454C316.932 107.617 320.425 105.426 323.262 102.933L321.952 109.941C320.868 116.046 319.064 120.333 316.574 122.83C314.066 125.324 310.38 126.563 305.496 126.563C302.01 126.563 299.675 125.87 298.48 124.461C297.499 123.468 297.012 122.391 297.012 121.189Z" fill="#0684BC" fill-rule="evenodd" />
</svg>
</div>
</a>
</div>
</div>
</div>
</div>
<div class="grid-item l-tab-flex__col--12 IID-grid-item-b73e4a51 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-parent-right-border="true" class="links-list links-list--direction--horizontal IID-links-list-901141c9 CID-links-list-2da41a0d">
<style>
	
	.IID-links-list-901141c9{--columnGap:8px}.IID-links-list-901141c9 .links-list__link{font-weight:400;font-size:12px;color:#222}.IID-links-list-901141c9 .links-list__link:hover{color:#222;text-decoration:underline}
</style>
<ul class="links-list__wrapper " data-dl-custom-type="footerButtons">
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/legal.html" data-automation-id="Legal" target="_self" data-right-border="true">
<span class="links-list__link-text">Legal</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/legal/privacy-notice.html" data-automation-id="Privacy" target="_self" data-right-border="true">
<span class="links-list__link-text">Privacy</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/legal/cookie-notice.html" data-automation-id="Cookie Notice" target="_self" data-right-border="true">
<span class="links-list__link-text">Cookie Notice</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/sitemap.html" data-automation-id="Site Map" target="_self" data-right-border="true">
<span class="links-list__link-text">Site Map</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="/gb/en/whyringcentral/contactus.html" data-automation-id="Contact Us" target="_self" data-right-border="true">
<span class="links-list__link-text">Contact Us</span>
</a>
</li>
<li class="links-list__item">
<a class="links-list__link" href="#open-preference-center" data-automation-id="Cookie Preferences" target="_self">
<span class="links-list__link-text">Cookie Preferences</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="grid-item l-flex__col--flex-grow-1 IID-grid-item-cd0a003b CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="grid CID-grid-1659f761 IID-grid-1c32b115">
<style>
	
	.IID-grid-1c32b115{--halfHorizGap:8px;--halfVertGap:0px}@media (max-width: 767px){.IID-grid-1c32b115{--halfHorizGap:8px;--halfVertGap:8px}}
</style>
<div class="grid__parsys l-flex--align-items-center   l-flex--justify-content-space-between   l-flex--flex-wrap-nowrap  l-mob-flex--flex-wrap-wrap">
<div class="grid-item IID-grid-item-7b9dc663 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div class="custom-text CID-custom-text-e0b1298e IID-custom-text-d90bb970">
<style>
	.IID-custom-text-d90bb970{color:#222;text-align:right}@media (max-width: 767px){.IID-custom-text-d90bb970{text-align:left}}
	.IID-custom-text-d90bb970{font-size:12px;font-weight:400;line-height:1.667}
</style>
<div class="custom-text__wrapper" data-style="footnote-small" data-content-wrapper="true">
<div>© %currentYear% RingCentral, Inc. All rights reserved.</div>
</div>
</div>
</div>
</div>
<div class="grid-item IID-grid-item-ec669580 CID-grid-item-1e7a19ff">
<div class="grid-item__parsys" data-delegate-hover="true">
<div data-accessibility-icon="true" class="custom-itl itl custom-itl--logo CID-custom-itl-6a582420 IID-custom-itl-46c9c14d">
<style>
	.IID-custom-itl-46c9c14d{max-width:75px}.IID-custom-itl-46c9c14d:before{display:table-cell;content:'';width:9999px;max-width:100%}@media (max-width: 1229px){.IID-custom-itl-46c9c14d{margin:0 76px 0 0}}@media (max-width: 767px){.IID-custom-itl-46c9c14d{margin:0}}
	.custom-itl.IID-custom-itl-46c9c14d .custom-itl__icon{width:75px}
</style>
<div class="custom-itl__wrapper   custom-itl__wrapper--border-mobile" data-dl-custom-type="footerButtons">
<a class="custom-itl__link custom-itl__link--type--link" title="This icon serves as a link to download the eSSENTIAL Accessibility assistive technology app for individuals with physical disabilities. It is featured as part of our commitment to diversity and inclusion." href="https://www.essentialaccessibility.com/ringcentral" target="_blank" data-dl-name="eSSENTIAL Accessibility" aria-label="This icon serves as a link to download the eSSENTIAL Accessibility assistive technology app for individuals with physical disabilities. It is featured as part of our commitment to diversity and inclusion." data-automation-id="This icon serves as a link to download the eSSENTIAL Accessibility assistive technology app for individuals with physical disabilities. It is featured as part of our commitment to diversity and inclusion." rel=" noopener noreferrer">
<div class="custom-itl__icon     ">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg-580422219--1346975701-title" class="custom-itl__img" fill="none" height="28" id="svg-580422219--1346975701" role="img" width="75">
<title id="svg-580422219--1346975701-title">Accessibility icon</title>
<g clip-path="url(#svg-580422219--1346975701-a)">
<path d="M23.776 0H14.55c-7.732 0-14 6.268-14 14s6.268 14 14 14h9.225c7.732 0 14-6.268 14-14s-6.269-14-14-14ZM61 0h-9.224c-7.732 0-14 6.268-14 14s6.268 14 14 14H61c7.732 0 14-6.268 14-14S68.732 0 61 0Z" fill="#6C2001" />
<path d="M38.01 23.388a9.388 9.388 0 1 0 0-18.776 9.388 9.388 0 0 0 0 18.776ZM16.462 8.076a1.424 1.424 0 1 0-1.328-.874 1.43 1.43 0 0 0 1.328.874Zm3.76 9.454a.828.828 0 0 0-.561.609v.031a4.198 4.198 0 0 1-2.719 2.663 3.96 3.96 0 0 1-1.702.143 4.455 4.455 0 0 1-2.263-1.093l-.066-.042a2.926 2.926 0 0 1-.177-.184l-.157-.164-.049-.063a4.29 4.29 0 0 1-.762-1.458 4.5 4.5 0 0 1-.146-1.876 4.267 4.267 0 0 1 2.158-3.182l.024-.02a.85.85 0 0 0-.184-1.62.79.79 0 0 0-.477.077 5.995 5.995 0 0 0-3.202 4.525c-.13.91-.054 1.838.223 2.715a5.778 5.778 0 0 0 7.187 3.927 5.917 5.917 0 0 0 3.882-3.934.863.863 0 0 0-.146-.78.811.811 0 0 0-.864-.274Z" fill="#fff" />
<path d="M26.964 18.706a.647.647 0 0 0-.87-.233l-.95.533-2.406-3.63a.863.863 0 0 0-.734-.446h-4.525v-1.438h3.132a.905.905 0 0 0 0-1.8H17.48V9.824a1.016 1.016 0 0 0-2.033 0v5.918a1.044 1.044 0 0 0 1.138 1.016h5.25l2.286 3.446a.752.752 0 0 0 .466.32c.047.013.095.02.143.021h.021a.634.634 0 0 0 .25-.041h.088l1.636-.916a.626.626 0 0 0 .24-.88Zm36.57 3.729a.153.153 0 0 1-.153.153H50.787a.153.153 0 0 1-.153-.154v-4.598a.153.153 0 0 1 .153-.153H63.38a.15.15 0 0 1 .153.153v4.599Zm-8.184-2.562h1.243a.136.136 0 0 0 .132-.136v-1.243a.135.135 0 0 0-.132-.136H55.35a.136.136 0 0 0-.135.136v1.243a.136.136 0 0 0 .135.136Zm-2.36.445h-1.242a.132.132 0 0 0-.133.136v1.242a.132.132 0 0 0 .133.133h1.242a.13.13 0 0 0 .096-.038.134.134 0 0 0 .04-.095v-1.242a.133.133 0 0 0-.083-.127.131.131 0 0 0-.053-.009Zm0-.445h1.243a.136.136 0 0 0 .136-.136v-1.243a.136.136 0 0 0-.136-.136H52.99a.136.136 0 0 0-.136.136v1.243a.136.136 0 0 0 .136.136Zm4.71 0h1.243a.136.136 0 0 0 .135-.136v-1.243a.136.136 0 0 0-.135-.136H57.7a.135.135 0 0 0-.132.136v1.243a.136.136 0 0 0 .132.136Zm2.356 0H61.3a.136.136 0 0 0 .132-.136v-1.243a.136.136 0 0 0-.132-.136h-1.225a.132.132 0 0 0-.132.136v1.243a.132.132 0 0 0 .132.136h-.018Zm.018.445H58.83a.132.132 0 0 0-.132.136v1.242a.132.132 0 0 0 .132.133h1.243a.13.13 0 0 0 .096-.038.133.133 0 0 0 .04-.095v-1.242a.131.131 0 0 0-.084-.127.131.131 0 0 0-.052-.009Zm-4.71 0h-1.242a.132.132 0 0 0-.133.136v1.242a.128.128 0 0 0 .133.133h1.242a.13.13 0 0 0 .096-.038.133.133 0 0 0 .04-.095v-1.242a.131.131 0 0 0-.083-.127.131.131 0 0 0-.053-.009Zm7.066 0h-1.242a.132.132 0 0 0-.133.136v1.242a.132.132 0 0 0 .133.133h1.242a.136.136 0 0 0 .136-.133v-1.242a.136.136 0 0 0-.136-.136Zm-4.71 0h-1.242a.131.131 0 0 0-.126.083.133.133 0 0 0-.01.053v1.242a.132.132 0 0 0 .136.133h1.243a.136.136 0 0 0 .136-.133v-1.242a.136.136 0 0 0-.136-.136ZM50.959 16.9a.126.126 0 0 0 .114.136H63.13a.13.13 0 0 0 .115-.136V5.549a.126.126 0 0 0-.068-.122.125.125 0 0 0-.047-.014H51.055a.125.125 0 0 0-.115.136l.018 11.35Zm1.632-2.012V7.23a.107.107 0 0 1 .063-.102.108.108 0 0 1 .041-.01h8.884a.104.104 0 0 1 .1.112v7.658a.104.104 0 0 1-.06.102.105.105 0 0 1-.04.01h-8.901a.108.108 0 0 1-.104-.112h.017Zm19.016 12.96v-1.54h-.553v-.316h1.482v.317h-.553v1.538h-.376Zm1.17 0v-1.856h.563l.349 1.277.348-1.277h.564v1.855h-.349v-1.455l-.393 1.455h-.348l-.369-1.469v1.47h-.366ZM41.812 12.221l-7.47-3.888c0 1.6.181 2.631 1.278 3.202l3.752 1.953 2.44-1.267Zm.978.508-2.436 1.267-4.7 2.436c-1.068.582-1.312 1.842-1.312 3.224l6.785-3.53c1.5-.818 1.663-1.817 1.663-3.408v.01Z" fill="#fff" />
<path d="m41.814 12.222-7.47-3.888c0 1.601.181 2.632 1.278 3.202l3.752 1.953 2.44-1.267Zm.978.508-2.436 1.267-4.7 2.437c-1.068.581-1.312 1.841-1.312 3.223l6.784-3.53c1.5-.817 1.664-1.816 1.664-3.407v.01Z" fill="#6C2001" />
</g>
<defs>
<clipPath id="svg-580422219--1346975701-a">
<path d="M.551 0H75v28H.551z" fill="#fff" />
</clipPath>
</defs>
</svg>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>
</div>
<div class="video-popup CID-video-popup-71c89799 IID-video-popup-70f7262">
<div class="video-popup__wrap">
<div class="video-popup__overlay"></div>
<div class="video-popup__player">
<div class="video-popup__player-wrap" role="dialog" tabindex="-1">
<button class="video-popup__close">
<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svg--1236373748-65203672-title" fill="none" height="16" id="svg--1236373748-65203672" role="img" viewBox="0 0 16 16" width="16">
<title id="svg--1236373748-65203672-title">Close</title>
<path d="M1.05964 15.9C0.927149 16.0324 0.712338 16.0324 0.579846 15.9L0.10005 15.4202C-0.0324415 15.2877 -0.0324423 15.0729 0.10005 14.9404L7.04035 8.00006L0.0993684 1.05908C-0.0331234 0.926591 -0.0331226 0.71178 0.0993693 0.579288L0.579165 0.0994927C0.711657 -0.0329991 0.926468 -0.0329989 1.05896 0.0994929L7.99994 7.04047L14.941 0.099369C15.0735 -0.0331229 15.2883 -0.033123 15.4208 0.0993688L15.9006 0.579164C16.0331 0.711656 16.0331 0.926467 15.9006 1.05896L8.95953 8.00006L15.9 14.9405C16.0324 15.073 16.0324 15.2878 15.9 15.4203L15.4202 15.9001C15.2877 16.0326 15.0729 16.0326 14.9404 15.9001L7.99994 8.95965L1.05964 15.9Z" fill="white" />
</svg>
</button>
<div class="video-popup__video"></div>
<div class="video-popup__end" tabindex="0"></div>
</div>
</div>
</div>
</div>
<nav aria-label="Back to top navigation" class="back-to-top-nav">
<div class="back-to-top IID-back-to-top-73895431 CID-back-to-top-de427968">
<a class="back-to-top__arrow-link" aria-label="Back to top arrow" href="#back-to-top" data-dl-custom-type="none">
<svg xmlns="http://www.w3.org/2000/svg" id="svg--1537414641" role="img" viewBox="0 0 12 13">
<path d="M6.647.15a.497.497 0 0 0-.71 0L1.057 5.099a.515.515 0 0 0 0 .721.498.498 0 0 0 .711 0l4.02-4.078V12.49c0 .281.225.51.503.51a.507.507 0 0 0 .503-.51V1.742l4.02 4.078a.498.498 0 0 0 .71 0 .515.515 0 0 0 0-.721L6.648.149z" fill-rule="evenodd" />
</svg>
</a>
</div>
</nav>
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/clientlibs/utility/rc-tracking.min.dd4d3b10c510ce370340d364a4922286.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/tools/bundles/js-modern.min.f23fa693bdc9d4cb17e8893d8352365b.js","dependencies":[],"embed":null,"properties":{}},{"path":"/etc.clientlibs/rc-www/clientlibs/utility/brand-detect.min.d813fdb3ff9df6b5d85c652169fc9c55.js","dependencies":null,"embed":null,"properties":{}},{"path":"/etc.clientlibs/rc-www/clientlibs/utility/personalization.min.97b9544566e5f387c7a078ee325965e6.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/vendor/jquery/bundles/js-modern.min.a09e13ee94d51c524b7e2a728c7d4039.js","dependencies":null,"embed":null,"properties":{}},{"path":"/etc.clientlibs/commons/clientlibs/utility/event-bus/bundles/js-modern.min.ecbc38cdc93ffb2669731a70d4425589.js","dependencies":null,"embed":null,"properties":{}}],"embed":null,"properties":{"type":"text/plain","class":"optanon-category-C0002"}}],"embed":null,"properties":{"type":"text/plain","class":"third-party optanon-category-C0002"}}]',
            async: 'true'
        });
	</script>
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/clientlibs/utility/drift.min.f8efb7d409075eba60cb36db69cc82b0.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/tools/bundles/js-modern.min.f23fa693bdc9d4cb17e8893d8352365b.js","dependencies":[],"embed":null,"properties":{}},{"path":"/etc.clientlibs/commons/clientlibs/utility/onetrust-helper/bundles/js-modern.min.52cc62398038e455a7aa2cf1c1303d22.js","dependencies":[],"embed":null,"properties":{}},{"path":"/etc.clientlibs/rc-www/clientlibs/utility/rc-engage.min.50bcfefb2c62d39bd4923b69332a09f5.js","dependencies":[],"embed":null,"properties":{"type":"text/plain","class":"third-party"}},{"path":"/etc.clientlibs/commons/clientlibs/utility/event-bus/bundles/js-modern.min.ecbc38cdc93ffb2669731a70d4425589.js","dependencies":null,"embed":null,"properties":{}}],"embed":null,"properties":{"type":"text/plain","class":"third-party"}}]',
            async: 'true'
        });
	</script>
<script>
        window.JSLoader.add({
            libs: '[{"path":"/etc.clientlibs/rc-www/clientlibs/utility/firebase.min.7dc84e80fc769349b17bd847ef29c9cb.js","dependencies":[{"path":"/etc.clientlibs/commons/clientlibs/utility/tools/bundles/js-modern.min.f23fa693bdc9d4cb17e8893d8352365b.js","dependencies":[],"embed":null,"properties":{}},{"path":"/etc.clientlibs/commons/clientlibs/utility/event-bus/bundles/js-modern.min.ecbc38cdc93ffb2669731a70d4425589.js","dependencies":null,"embed":null,"properties":{}}],"embed":null,"properties":{"type":"text/plain","class":"third-party optanon-category-C0004"}}]',
            async: 'true'
        });
	</script>
</body>
</html>
