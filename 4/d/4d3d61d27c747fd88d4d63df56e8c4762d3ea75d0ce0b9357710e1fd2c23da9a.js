var rrwebRecord=function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e,t=function n(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function o(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}unction i(e){var t=e.maskInputOptions,n=e.tagName,r=e.type,o=e.value,a=e.maskInputFn,i=o||"";return(t[n.toLowerCase()]||t[r])&&(i=a?a(i):"*".repeat(i.length)),i}!function(e){e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment"}(e||(e={}));var s="__rrweb_original__";var u,l,c=1,d=new RegExp("[^a-z0-9-_:]");r m=/url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,h=/^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,v=/^(data:)([^,]*),(.*)/i;ar g,b,S,C,k,w,I=/^[^ \t\n\r\u000c]+/,x=/^[, \t\n\r\u000c]+/;ction O(e,t,n){if(!e)return!1;if(e.nodeType===e.ELEMENT_NODE){if("string"==typeof t){if(e.classList.contains(t))return!0}else for(var r=0;r<e.classList.length;r++){var o=e.classList[r];if(t.test(o))return!0}return!(!n||!e.matches(n))||O(e.parentNode,t,n)}return e.nodeType,e.TEXT_NODE,O(e.parentNode,t,n)}function R(t,n){var r,o,a,c,f=n.doc,m=n.blockClass,h=n.blockSelector,v=n.maskTextClass,g=n.maskTextSelector,b=n.inlineStylesheet,S=n.maskInputOptions,C=void 0===S?{}:S,k=n.maskTextFn,w=n.maskInputFn,I=n.dataURLOptions,x=void 0===I?{}:I,M=n.inlineImages,R=n.recordCanvas,N=n.keepIframeSrcFn;if(f.__sn){var _=f.__sn.id;o=1===_?void 0:_}switch(t.nodeType){case t.DOCUMENT_NODE:return"CSS1Compat"!==t.compatMode?{type:e.Document,childNodes:[],compatMode:t.compatMode,rootId:o}:{type:e.Document,childNodes:[],rootId:o};case t.DOCUMENT_TYPE_NODE:return{type:e.DocumentType,name:t.name,publicId:t.publicId,systemId:t.systemId,rootId:o};case t.ELEMENT_NODE:for(var L=t,m,h),D=t),F={},A=0,P=Array.from(t.attributes);A<P.length;A++){var z=P[A],W=z.name,U=z.value;F[W]=E(f,D,W,U)}if("link"===D&&b){var j=Array.from(f.styleSheets).find((function(e){return e.href===t.href})),G=null;j&&(G=p(j)),G&&(delete F.rel,delete F.href,F._cssText=y(G,j.href))}if("style"===D&&t.sheet&&!(t.innerText||t.textContent||"").trim().length)(G=p(t.sheet))&&(F._cssText=y(G,T()));if("input"===D||"textarea"===D||"select"===D){U=t.value;"radio"!==F.type&&"checkbox"!==F.type&&"submit"!==F.type&&"button"!==F.type&&U?F.value=i({type:F.type,tagName:D,value:U,maskInputOptions:C,maskInputFn:w}):t.checked&&(F.checked=t.checked)}if("option"===D&&(t.selected&&!C.select?F.selected=!0:delete F.selected),"canvas"===D&&R)if("2d"===t.__context)((t)||(F.rr_dataURL=t.toDataURL(x.type,x.quality));else if(!("__context"in t)){var V=t.toDataURL(x.type,x.quality),H=document.createElement("canvas");H.width=t.width,H.height=t.height,V!==H.toDataURL(x.type,x.quality)&&(F.rr_dataURL=V)}if("img"===D&&M){u||(u=f.createElement("canvas"),l=u.getContext("2d"));var q=t,B=q.crossOrigin;q.crossOrigin="anonymous";var X=function(){try{u.width=q.naturalWidth,u.height=q.naturalHeight,l.drawImage(q,0,0),F.rr_dataURL=u.toDataURL(x.type,x.quality)}catch(e){console.warn("Cannot inline img src="+q.currentSrc+"! Error: "+e)}B?F.crossOrigin=B:delete F.crossOrigin};q.complete&&0!==q.naturalWidth?X():q.onload=X}if("audio"!==D&&"video"!==D||(F.rr_mediaState=t.paused?"paused":"played",F.rr_mediaCurrentTime=t.currentTime),t.scrollLeft&&(F.rr_scrollLeft=t.scrollLeft),t.scrollTop&&(F.rr_scrollTop=t.scrollTop),L){var Y=t.getBoundingClientRect(),K=Y.width,J=Y.height;F={class:F.class,rr_width:K+"px",rr_height:J+"px"}}return"iframe"!==D||N(F.src)||(t.contentDocument||(F.rr_src=F.src),delete F.src),{type:e.Element,tagName:D,attributes:F,childNodes:[],isSVG:(c=t,Boolean("svg"===c.tagName||c.ownerSVGElement)||void 0),needBlock:L,rootId:o};case t.TEXT_NODE:var Z=t.parentNode&&t.parentNode.tagName,$=t.textContent,Q="STYLE"===Z||void 0,ee="SCRIPT"===Z||void 0;if(Q&&$){try{t.nextSibling||t.previousSibling||(null===(r=t.parentNode.sheet)||void 0===r?void 0:r.cssRules)&&($=(a=t.parentNode.sheet).cssRules?Array.from(a.cssRules).map(().join(""):"")}catch(e){console.warn("Cannot get CSS styles from text's parentNode. Error: "+e,t)}$=y($,T())}return ee&&($="SCRIPT_PLACEHOLDER"),!Q&&!ee&&O(t,v,g)&&$&&($=k?k($):$.replace(/[\S]/g,"*")),{type:e.Text,textContent:$||"",isStyle:Q,rootId:o};case t.CDATA_SECTION_NODE:return{type:e.CDATA,textContent:"",rootId:o};case t.COMMENT_NODE:return{type:e.Comment,textContent:t.textContent||"",rootId:o};default:return!1}}unction _(t,n){var r,o=n.doc,i=n.map,s=n.blockClass,u=n.blockSelector,l=n.maskTextClass,d=n.maskTextSelector,p=n.skipChild,f=void 0!==p&&p,m=n.inlineStylesheet,h=void 0===m||m,v=n.maskInputOptions,y=void 0===v?{}:v,g=n.maskTextFn,b=n.maskInputFn,S=n.slimDOMOptions,C=n.dataURLOptions,k=void 0===C?{}:C,w=n.inlineImages,I=void 0!==w&&w,x=n.recordCanvas,M=void 0!==x&&x,T=n.onSerialize,E=n.onIframeLoad,O=n.iframeLoadTimeout,L=void 0===O?5e3:O,D=n.keepIframeSrcFn,F=void 0===D?function(){return!1}:D,A=n.preserveWhiteSpace,P=void 0===A||A,z=R(t,{doc:o,blockClass:s,blockSelector:u,maskTextClass:l,maskTextSelector:d,inlineStylesheet:h,maskInputOptions:y,maskTextFn:g,maskInputFn:b,dataURLOptions:k,inlineImages:I,recordCanvas:M,keepIframeSrcFn:F});if(!z)return console.warn(t,"not serialized"),null;r="__sn"in t?t.__sn.id:!z,S)&&(P||z.type!==e.Text||z.isStyle||z.textContent.replace(/^\s+|\s+$/gm,"").length)?c++:-2;var W=Object.assign(z,{id:r});if(t.__sn=W,-2===r)return null;i[r]=t,T&&T(t);var U=!f;if(W.type===e.Element&&(U=U&&!W.needBlock,delete W.needBlock,t.shadowRoot&&(W.isShadowHost=!0)),(W.type===e.Document||W.type===e.Element)&&U){S.headWhitespace&&z.type===e.Element&&"head"===z.tagName&&(P=!1);for(var j={doc:o,map:i,blockClass:s,blockSelector:u,maskTextClass:l,maskTextSelector:d,skipChild:f,inlineStylesheet:h,maskInputOptions:y,maskTextFn:g,maskInputFn:b,slimDOMOptions:S,dataURLOptions:k,inlineImages:I,recordCanvas:M,preserveWhiteSpace:P,onSerialize:T,onIframeLoad:E,iframeLoadTimeout:L,keepIframeSrcFn:F},G=0,V=Array.from(t.childNodes);G<V.length;G++){(B=_(V[G],j))&&W.childNodes.push(B)}if(function(e){return e.nodeType===e.ELEMENT_NODE}(t)&&t.shadowRoot)for(var H=0,q=Array.from(t.shadowRoot.childNodes);H<q.length;H++){var B;(B=_(q[H],j))&&(B.isShadow=!0,W.childNodes.push(B))}}return t.parentNode&&a(t.parentNode)&&(W.isShadow=!0),W.type===e.Element&&"iframe"===W.tagName&&t,(function(){var e=t.contentDocument;if(e&&E){var n=_(e,{doc:e,map:i,blockClass:s,blockSelector:u,maskTextClass:l,maskTextSelector:d,skipChild:!1,inlineStylesheet:h,maskInputOptions:y,maskTextFn:g,maskInputFn:b,slimDOMOptions:S,dataURLOptions:k,inlineImages:I,recordCanvas:M,preserveWhiteSpace:P,onSerialize:T,onIframeLoad:E,iframeLoadTimeout:L,keepIframeSrcFn:F});n&&E(t,n)}}),L),W}function(e){e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin"}(g||(g={})),function(e){e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration"}(b||(b={})),function(e){e[e.MouseUp=0]="MouseUp",e[e.MouseDown=1]="MouseDown",e[e.Click=2]="Click",e[e.ContextMenu=3]="ContextMenu",e[e.DblClick=4]="DblClick",e[e.Focus=5]="Focus",e[e.Blur=6]="Blur",e[e.TouchStart=7]="TouchStart",e[e.TouchMove_Departed=8]="TouchMove_Departed",e[e.TouchEnd=9]="TouchEnd",e[e.TouchCancel=10]="TouchCancel"}(S||(S={})),function(e){e[e["2D"]=0]="2D",e[e.WebGL=1]="WebGL",e[e.WebGL2=2]="WebGL2"}(C||(C={})),function(e){e[e.Play=0]="Play",e[e.Pause=1]="Pause",e[e.Seeked=2]="Seeked",e[e.VolumeChange=3]="VolumeChange"}(k||(k={})),function(e){e.Start="start",e.Pause="pause",e.Resume="resume",e.Resize="resize",e.Finish="finish",e.FullsnapshotRebuilded="fullsnapshot-rebuilded",e.LoadStylesheetStart="load-stylesheet-start",e.LoadStylesheetEnd="load-stylesheet-end",e.SkipStart="skip-start",e.SkipEnd="skip-end",e.MouseInteraction="mouse-interaction",e.EventCast="event-cast",e.CustomEvent="custom-event",e.Flush="flush",e.StateChange="state-change",e.PlayBack="play-back"}(w||(w={}));var D="Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",F={map:{},getId:function(){return console.error(D),-1},getNode:function(){return console.error(D),null},removeNodeFromMap:function(){console.error(D)},has:function(){return console.error(D),!1},reset:function(){console.error(D)}};ction W(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight}n X(e){return"__ln"in e}"undefined"!=typeof window&&window.Proxy&&window.Reflect&&(F=new Proxy(F,{get:function(e,t,n){return"map"===t&&console.error(D),Reflect.get(e,t,n)}}));var Y=),K=ar Z=function(){function e(){var e=this;this.frozen=!1,this.locked=!1,this.texts=[],this.attributes=[],this.removes=[],this.mapRemoves=[],this.movedMap={},this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.processMutations=this.emit=function(){var t,r,o,i;if(!e.frozen&&!e.locked){for(var s=[],u=new Y,l=c=function(t){for(var n,r,o,i,c,d=t.getRootNode?null===(n=t.getRootNode())||void 0===n?void 0:n.host:null,p=d;null===(o=null===(r=null==p?void 0:p.getRootNode)||void 0===r?void 0:r.call(p))||void 0===o?void 0:o.host;)p=(null===(c=null===(i=null==p?void 0:p.getRootNode)||void 0===i?void 0:i.call(p))||void 0===c?void 0:c.host)||null;var f=!(e.doc.contains(t)||null!==p&&e.doc.contains(p));if(t.parentNode&&!f){var m=a(t.parentNode)?e.mirror.getId(d):e.mirror.getId(t.parentNode),h=l(t);if(-1===m||-1===h)return u.addNode(t);var v=_(t,{doc:e.doc,map:e.mirror.map,blockClass:e.blockClass,blockSelector:e.blockSelector,maskTextClass:e.maskTextClass,maskTextSelector:e.maskTextSelector,skipChild:!0,inlineStylesheet:e.inlineStylesheet,maskInputOptions:e.maskInputOptions,maskTextFn:e.maskTextFn,maskInputFn:e.maskInputFn,slimDOMOptions:e.slimDOMOptions,recordCanvas:e.recordCanvas,inlineImages:e.inlineImages,onSerialize:onIframeLoad:);v&&s.push({parentId:m,nextId:h,node:v})}};e.mapRemoves.length;)e.mirror.removeNodeFromMap(e.mapRemoves.shift());try{for(var d=n(e.movedSet),p=d.next();!p.done;p=d.next()){var f=p.value;Q(e.removes,f,e.mirror)&&!e.movedSet.has(f.parentNode)||c(f)}}catch(e){t={error:e}}finally{try{p&&!p.done&&(r=d.return)&&r.call(d)}finally{if(t)throw t.error}}try{for(var m=n(e.addedSet),h=m.next();!h.done;h=m.next()){f=h.value;ee(e.droppedSet,f)||Q(e.removes,f,e.mirror)?ee(e.movedSet,f)?c(f):e.droppedSet.add(f):c(f)}}catch(e){o={error:e}}finally{try{h&&!h.done&&(i=m.return)&&i.call(m)}finally{if(o)throw o.error}}for(var v=null;u.length;){var y=null;if(v){var g=e.mirror.getId(v.value.parentNode),b=l(v.value);-1!==g&&-1!==b&&(y=v)}if(!y)for(var S=u.length-1;S>=0;S--){var C=u.get(S);if(C){g=e.mirror.getId(C.value.parentNode),b=l(C.value);if(-1!==g&&-1!==b){y=C;break}}}if(!y){for(;u.head;)u.removeNode(u.head.value);break}v=y.previous,u.removeNode(y.value),c(y.value)}var k={texts:e.texts.map((function(t){return{id:e.mirror.getId(t.node),value:t.value}})).filter((function(t){return e.mirror.has(t.id)})),attributes:e.attributes.map(().filter((),removes:e.removes,adds:s};(k.texts.length||k.attributes.length||k.removes.length||k.adds.length)&&(e.texts=[],e.attributes=[],e.removes=[],e.addedSet=new Set,e.movedSet=new Set,e.droppedSet=new Set,e.movedMap={},e.mutationCb(k))}},this.processMutation=function(t){var r,o,s,u;if(!G(t.target))switch(t.type){case"characterData":var l=t.target.textContent;j(t.target,e.blockClass)||l===t.oldValue||e.texts.push({value:O(t.target,e.maskTextClass,e.maskTextSelector)&&l?e.maskTextFn?e.maskTextFn(l):l.replace(/[\S]/g,"*"):l,node:t.target});break;case"attributes":var c=t.target;l=t.target.getAttribute(t.attributeName);if("value"===t.attributeName&&(l=i({maskInputOptions:e.maskInputOptions,tagName:t.target.tagName,type:t.target.getAttribute("type"),value:l,maskInputFn:e.maskInputFn})),j(t.target,e.blockClass)||l===t.oldValue)return;var d=e.attributes.find(();if(d||(d={node:t.target,attributes:{}},e.attributes.push(d)),"style"===t.attributeName){var p=e.doc.createElement("span");t.oldValue&&p.setAttribute("style",t.oldValue),void 0!==d.attributes.style&&null!==d.attributes.style||(d.attributes.style={});var f=d.attributes.style;try{for(var m=n(Array.from(c.style)),h=m.next();!h.done;h=m.next()){var v=h.value,y=c.style.getPropertyValue(v),g=c.style.getPropertyPriority(v);y===p.style.getPropertyValue(v)&&g===p.style.getPropertyPriority(v)||(f[v]=""===g?y:[y,g])}}catch(e){r={error:e}}finally{try{h&&!h.done&&(o=m.return)&&o.call(m)}finally{if(r)throw r.error}}try{for(var b=n(Array.from(p.style)),S=b.next();!S.done;S=b.next()){v=S.value;""===c.style.getPropertyValue(v)&&(f[v]=!1)}}catch(e){s={error:e}}finally{try{S&&!S.done&&(u=b.return)&&u.call(b)}finally{if(s)throw s.error}}}else d.attributes[t.attributeName]=E(e.doc,t.target.tagName,t.attributeName,l);break;case"childList":t.addedNodes.forEach((),t.removedNodes.forEach(()}},this.genAdds=return e.prototype.init=function(e){var t=this;["mutationCb","blockClass","blockSelector","maskTextClass","maskTextSelector","inlineStylesheet","maskInputOptions","maskTextFn","maskInputFn","recordCanvas","inlineImages","slimDOMOptions","doc","mirror","iframeManager","shadowDomManager","canvasManager"].forEach(()},e.prototype.freeze=function(){this.frozen=!0,this.canvasManager.freeze()},e.prototype.unfreeze=function(){this.frozen=!1,this.canvasManager.unfreeze(),this.emit()},e.prototype.isFrozen=e.prototype.lock=e.prototype.unlock=e.prototype.reset=e}(); te=[],ne="undefined"!=typeof CSSGroupingRule,re="undefined"!=typeof CSSMediaRule,oe="undefined"!=typeof CSSSupportsRule,ae="undefined"!=typeof CSSConditionRule;e=["INPUT","TEXTAREA","SELECT"],pe=new WeakMap;unction me(e,a){var s,u;void 0===a&&(a={});var l=e.doc.defaultView;if(!l)return function(){};!e,a);var c=se(e,e.doc),d=e),p=ue(e),f=le(e),m=e),h=function(e){var n=e.inputCb,a=e.doc,s=e.mirror,u=e.blockClass,l=e.ignoreClass,c=e.maskInputOptions,d=e.maskInputFn,p=e.sampling,f=e.userTriggeredOnInput;function m(e){var t=ie(e),n=e.isTrusted;if(t&&"OPTION"===t.tagName&&(t=t.parentElement),t&&t.tagName&&!(de.indexOf(t.tagName)<0)&&!j(t,u)){var r=t.type;if(!t.classList.contains(l)){var o=t.value,s=!1;"radio"===r||"checkbox"===r?s=t.checked:(c[t.tagName.toLowerCase()]||c[r])&&(o=i({maskInputOptions:c,tagName:t.tagName,type:r,value:o,maskInputFn:d})),h(t,ce({text:o,isChecked:s,userTriggered:n},f));var p=t.name;"radio"===r&&p&&s&&a.querySelectorAll('input[type="radio"][name="'.concat(p,'"]')).forEach(()}}}ar v=("last"===p.input?["change"]:["input","change"]).map((function(e){return L(e,m,a)})),y=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"),g=[[HTMLInputElement.prototype,"value"],[HTMLInputElement.prototype,"checked"],[HTMLSelectElement.prototype,"value"],[HTMLTextAreaElement.prototype,"value"],[HTMLSelectElement.prototype,"selectedIndex"],[HTMLOptionElement.prototype,"selected"]];return y&&y.set&&v.push.apply(v,o([],r(g.map(()),!1)),function(){v.forEach((function(e){return e()}))}}(e),v=e),y=function(e,t){var n=e.styleSheetRuleCb,a=e.mirror,i=t.win,s=i.CSSStyleSheet.prototype.insertRule;i.CSSStyleSheet.prototype.insertRule=var u=i.CSSStyleSheet.prototype.deleteRule;i.CSSStyleSheet.prototype.deleteRule=var l={};ne?l.CSSGroupingRule=i.CSSGroupingRule:(re&&(l.CSSMediaRule=i.CSSMediaRule),ae&&(l.CSSConditionRule=i.CSSConditionRule),oe&&(l.CSSSupportsRule=i.CSSSupportsRule));var c={};return Object.entries(l).forEach((),(e,{win:l}),g=e,{win:l}),S=e.collectFonts?e):function(){},C=[];try{for(var k=n(e.plugins),w=k.next();!w.done;w=k.next()){var I=w.value;C.push(I.observer(I.callback,l,I.options))}}catch(e){s={error:e}}finally{try{w&&!w.done&&(u=k.return)&&u.call(k)}finally{if(s)throw s.error}}return function(){te.forEach((function(e){return e.reset()})),c.disconnect(),d(),p(),f(),m(),h(),v(),y(),g(),S(),C.forEach((function(e){return e()}))}}var he=),ve=);for(var ye="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ge="undefined"==typeof Uint8Array?[]:new Uint8Array(256),be=0;be<ye.length;be++)ge[ye.charCodeAt(be)]=be;var Se=new Map;var Ce=function ke(e,t,n){return e instanceof Array?e.map((function(e){return ke(e,t,n)})):null===e?e:e instanceof Float32Array||e instanceof Float64Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Uint8Array||e instanceof Uint16Array||e instanceof Int16Array||e instanceof Int8Array||e instanceof Uint8ClampedArray?{rr_type:e.constructor.name,args:[Object.values(e)]}:e instanceof ArrayBuffer?{rr_type:e.constructor.name,base64:e)}:e instanceof DataView?{rr_type:e.constructor.name,args:[ke(e.buffer,t,n),e.byteOffset,e.byteLength]}:e instanceof HTMLImageElement?{rr_type:e.constructor.name,src:e.src}:e instanceof ImageData?{rr_type:e.constructor.name,args:[ke(e.data,t,n),e.width,e.height]}:Ie(e,t)||"object"==typeof e?{rr_type:e.constructor.name,index:Ce(e,t,n)}:e}var we=Ie=ar Me,Te,Ee=function(){eturn e.prototype.reset=e.prototype.freeze=function(){this.frozen=!0},e.prototype.unfreeze=function(){this.frozen=!1},e.prototype.lock=function(){this.locked=!0},e.prototype.unlock=e.prototype.initCanvasMutationObserver=function(e,t){this.startRAFTimestamping(),this.startPendingCanvasMutationFlusher();var a=function(e,t){var n=[];try{var a=z(e.HTMLCanvasElement.prototype,"getContext",();n.push(a)}catch(e){console.error("failed to patch HTMLCanvasElement.prototype.getContext")}return function(){n.forEach((function(e){return e()}))}}(e,t),i=this.processMutation.bind(this),e,t,this.mirror),s=this.processMutation.bind(this),e,t,this.mirror);this.resetObservers=,e.prototype.startPendingCanvasMutationFlusher=e.prototype.startRAFTimestamping=e.prototype.flushPendingCanvasMutations=e.prototype.flushPendingCanvasMutationFor=function(e,t){if(!this.frozen&&!this.locked){var n=this.pendingCanvasMutations.get(e);if(n&&-1!==t){var r=n.map((function(e){return e.type,e,["type"])})),o=n[0].type;this.mutationCb({id:t,type:o,commands:r}),this.pendingCanvasMutations.delete(e)}}},e}();ar Re={map:{},getId:getNode:removeNodeFromMap:has:reset:;function Ne(e){void 0===e&&(e={});var o=e.emit,a=e.checkoutEveryNms,i=e.checkoutEveryNth,s=e.blockClass,u=void 0===s?"rr-block":s,l=e.blockSelector,c=void 0===l?null:l,d=e.ignoreClass,p=void 0===d?"rr-ignore":d,f=e.maskTextClass,m=void 0===f?"rr-mask":f,h=e.maskTextSelector,v=void 0===h?null:h,y=e.inlineStylesheet,S=void 0===y||y,C=e.maskAllInputs,k=e.maskInputOptions,w=e.slimDOMOptions,I=e.maskInputFn,x=e.maskTextFn,M=e.hooks,T=e.packFn,E=e.sampling,O=void 0===E?{}:E,R=e.mousemoveWait,N=e.recordCanvas,D=void 0!==N&&N,F=e.userTriggeredOnInput,A=void 0!==F&&F,P=e.collectFonts,z=void 0!==P&&P,j=e.inlineImages,G=void 0!==j&&j,V=e.plugins,H=e.keepIframeSrcFn,X=void 0===H?function(){return!1}:H;if(!o)throw new Error("emit function is required");void 0!==R&&void 0===O.mousemove&&(O.mousemove=R);var Y,K,J=!0===C?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:void 0!==k?k:{password:!0},Z=!0===w||"all"===w?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaVerification:!0,headMetaAuthorship:"all"===w,headMetaDescKeywords:"all"===w}:w||{};void 0===Y&&(Y=window),"NodeList"in Y&&!Y.NodeList.prototype.forEach&&(Y.NodeList.prototype.forEach=Array.prototype.forEach),"DOMTokenList"in Y&&!Y.DOMTokenList.prototype.forEach&&(Y.DOMTokenList.prototype.forEach=Array.prototype.forEach),Node.prototype.contains||(Node.prototype.contains=;var $=0;Me=var Q=ee=function(e){return Me(Oe({type:g.IncrementalSnapshot,data:t({source:b.Scroll},e)}))},ne=function(e){return Me(Oe({type:g.IncrementalSnapshot,data:t({source:b.CanvasMutation},e)}))},re=new he({mutationCb:Q}),oe=new Ee({recordCanvas:D,mutationCb:ne,win:window,blockClass:u,mirror:Re}),ae=new ve({mutationCb:Q,scrollCb:ee,bypassOptions:{blockClass:u,blockSelector:c,maskTextClass:m,maskTextSelector:v,inlineStylesheet:S,maskInputOptions:J,maskTextFn:x,maskInputFn:I,recordCanvas:D,inlineImages:G,sampling:O,slimDOMOptions:Z,iframeManager:re,canvasManager:oe},mirror:Re});Te=function(e){var t,n,o,a;void 0===e&&(e=!1),Me(Oe({type:g.Meta,data:{href:window.location.href,width:U(),height:W()}}),e),te.forEach((function(e){return e.lock()}));var i=r(function(e,t){var n=t||{},r=n.blockClass,o=void 0===r?"rr-block":r,a=n.blockSelector,i=void 0===a?null:a,s=n.maskTextClass,u=void 0===s?"rr-mask":s,l=n.maskTextSelector,c=void 0===l?null:l,d=n.inlineStylesheet,p=void 0===d||d,f=n.inlineImages,m=void 0!==f&&f,h=n.recordCanvas,v=void 0!==h&&h,y=n.maskAllInputs,g=void 0!==y&&y,b=n.maskTextFn,S=n.maskInputFn,C=n.slimDOM,k=void 0!==C&&C,w=n.dataURLOptions,I=n.preserveWhiteSpace,x=n.onSerialize,M=n.onIframeLoad,T=n.iframeLoadTimeout,E=n.keepIframeSrcFn,O={};return[_(e,{doc:e,map:O,blockClass:o,blockSelector:i,maskTextClass:u,maskTextSelector:c,skipChild:!1,inlineStylesheet:p,maskInputOptions:!0===g?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:!1===g?{password:!0}:g,maskTextFn:b,maskInputFn:S,slimDOMOptions:!0===k||"all"===k?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaDescKeywords:"all"===k,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaAuthorship:!0,headMetaVerification:!0}:!1===k?{}:k,dataURLOptions:w,inlineImages:m,recordCanvas:v,preserveWhiteSpace:I,onSerialize:x,onIframeLoad:M,iframeLoadTimeout:T,keepIframeSrcFn:void 0===E?E}),O]}(document,{blockClass:u,blockSelector:c,maskTextClass:m,maskTextSelector:v,inlineStylesheet:S,maskAllInputs:J,maskTextFn:x,slimDOM:Z,recordCanvas:D,inlineImages:G,onSerialize:onIframeLoad:keepIframeSrcFn:X}),2),s=i[0],l=i[1];if(!s)return console.warn("Failed to snapshot the document");Re.map=l,Me(Oe({type:g.FullSnapshot,data:{node:s,initialOffset:{left:void 0!==window.pageXOffset?window.pageXOffset:(null===document||void 0===document?void 0:document.documentElement.scrollLeft)||(null===(n=null===(t=null===document||void 0===document?void 0:document.body)||void 0===t?void 0:t.parentElement)||void 0===n?void 0:n.scrollLeft)||(null===document||void 0===document?void 0:document.body.scrollLeft)||0,top:void 0!==window.pageYOffset?window.pageYOffset:(null===document||void 0===document?void 0:document.documentElement.scrollTop)||(null===(a=null===(o=null===document||void 0===document?void 0:document.body)||void 0===o?void 0:o.parentElement)||void 0===a?void 0:a.scrollTop)||(null===document||void 0===document?void 0:document.body.scrollTop)||0}}})),te.forEach((function(e){return e.unlock()}))};try{var ie=[];ie.push(L("DOMContentLoaded",());var se=function(e){var n;return me({mutationCb:Q,mousemoveCb:mouseInteractionCb:function(e){return Me(Oe({type:g.IncrementalSnapshot,data:t({source:b.MouseInteraction},e)}))},scrollCb:ee,viewportResizeCb:function(e){return Me(Oe({type:g.IncrementalSnapshot,data:t({source:b.ViewportResize},e)}))},inputCb:function(e){return Me(Oe({type:g.IncrementalSnapshot,data:t({source:b.Input},e)}))},mediaInteractionCb:function(e){return Me(Oe({type:g.IncrementalSnapshot,data:t({source:b.MediaInteraction},e)}))},styleSheetRuleCb:function(e){return Me(Oe({type:g.IncrementalSnapshot,data:t({source:b.StyleSheetRule},e)}))},styleDeclarationCb:function(e){return Me(Oe({type:g.IncrementalSnapshot,data:t({source:b.StyleDeclaration},e)}))},canvasMutationCb:ne,fontCb:blockClass:u,ignoreClass:p,maskTextClass:m,maskTextSelector:v,maskInputOptions:J,inlineStylesheet:S,sampling:O,recordCanvas:D,inlineImages:G,userTriggeredOnInput:A,collectFonts:z,doc:e,maskInputFn:I,maskTextFn:x,blockSelector:c,slimDOMOptions:Z,mirror:Re,iframeManager:re,shadowDomManager:ae,canvasManager:oe,plugins:(null===(n=null==V?void 0:V.filter(())||void 0===n?void 0:n.map(())||[]},M)};re.addLoadListener(();var ue=return"interactive"===document.readyState||"complete"===document.readyState?ue():ie.push(L("load",(,window)),function(){ie.forEach((function(e){return e()}))}}catch(e){console.warn(e)}}return Ne.addCustomEvent=Ne.freezePage=Ne.takeFullSnapshot=Ne.mirror=Re,Ne}();
window.rrweb = {record: rrwebRecord}
//# sourceMappingURL=recorder.js.map
var rrwebConsoleRecord=function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ o,i,a,c,u,l,s;!o||(o={})),i||(i={})),a||(a={})),c||(c={})),u||(u={})),l||(l={})),s||(s={}));var f="Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",p={map:{},getId:getNode:removeNodeFromMap:function(){console.error(f)},has:reset:;"undefined"!=typeof window&&window.Proxy&&window.Reflect&&(p=new Proxy(p,{get:));var h=function(){eturn e.prototype.toString=function(){var e=this.lineNumber||"",r=this.columnNumber||"";return this.functionName?this.functionName+" ("+this.fileName+":"+e+":"+r+")":this.fileName+":"+e+":"+r},e}(),d=/(^|@)\S+:\d+/,m=/^\s*at .*(\S+:\d+|\(native\))/m,v=/^(eval@)?(\[native code])?$/,g={parse:function(e){if(!e)return[];if(void 0!==e.stacktrace||void 0!==e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(m))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var r=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,""));if(!r)throw new Error("Cannot parse given url: ".concat(e));return[r[1],r[2]||void 0,r[3]||void 0]},parseV8OrIE:parseFFOrSafari:parseOpera:parseOpera9:parseOpera10:parseOpera11:function(e){return e.stack.split("\n").filter((,this).map((function(e){var r=e.split("@"),t=this.extractLocation(r.pop()),n=(r.shift()||"").replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;return new h({functionName:n,fileName:t[0],lineNumber:t[1],columnNumber:t[2]})}),this)}};nction w(e,t){var n,o;if(0===t)return!0;var i=Object.keys(e);try{for(var a=r(i),c=a.next();!c.done;c=a.next()){var u=c.value;if(b(e[u])&&w(e[u],t-1))return!0}}catch(e){n={error:e}}finally{try{c&&!c.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}return!1}function N(e,r){var t={numOfKeysLimit:50,depthOfLimit:4};Object.assign(t,r);var n=[],o=[];return JSON.stringify(e,(function(e,r){if(n.length>0){var i=n.indexOf(this);~i?n.splice(i+1):n.push(this),~i?o.splice(i,1/0,e):o.push(e),~n.indexOf(r)&&(r=n[0]===r?"[Circular ~]":"[Circular ~."+o.slice(0,n.indexOf(r)).join(".")+"]")}else n.push(r);if(null==r)return r;if(r))return r);if(r instanceof Event){var a={};for(var c in r){var u=r[c];Array.isArray(u)?a[c]=y(u.length?u[0]:null):a[c]=u}return a}return r instanceof Node?r instanceof HTMLElement?r?r.outerHTML:"":r.nodeName:r instanceof Error?r.stack?r.stack+"\nEnd of stack for Error object":r.name+": "+r.message:r}))}var S={level:["assert","clear","count","countReset","debug","dir","dirxml","error","group","groupCollapsed","groupEnd","info","log","table","time","timeEnd","timeLog","trace","warn"],lengthThreshold:1e3,logger:"console"};function O(e,o,i){var a,c,u,l=i.logger;if(!l)return function(){};u="string"==typeof l?o[l]:l;var s=0,f=[];if(i.level.includes("error")&&window){var p=window.addEventListener("error",p),f.push(()}try{for(var h=r(i.level),d=h.next();!d.done;d=h.next()){var m=d.value;f.push(v(u,m))}}catch(e){a={error:e}}finally{try{d&&!d.done&&(c=h.return)&&c.call(h)}finally{if(a)throw a.error}}return function v(r,o){var a=this;return r[o]?function(e,r,t){try{if(!(r in e))return function(){};var n=e[r],o=t(n);return"function"==typeof o&&(o.prototype=o.prototype||{},Object.defineProperties(o,{__rrweb_original__:{enumerable:!1,value:n}})),e[r]=o,catch(e){return function(){}}}(r,o,(function(r){return function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];r.apply(a,c);try{var l=g.parse(new Error).map(().splice(1),f=c.map(();++s<i.lengthThreshold?e({level:o,trace:l,payload:f}):s===i.lengthThreshold&&e({level:"warn",trace:[],payload:[N("The number of log records reached the threshold.")]})}catch(e){r.apply(void 0,n(["rrweb logger error:",e],t(c),!1))}}})):}var L="rrweb/console@1";return e.PLUGIN_NAME=L,e.getRecordConsolePlugin=function(e){return{name:L,observer:O,options:e?Object.assign({},S,e):S}},Object.defineProperty(e,"__esModule",{value:!0}),e}({});
//# sourceMappingURL=console-record.min.js.map