;
(self.AMP=self.AMP||[]).push({m:0,v:"2312191621000",n:"amp-script",ev:"0.1",l:!0,f:function(t,n){!function(){r r;ar o=ction(t,n,e,r,i){var o=i.executorsAllowed.includes(8);return{execute:function(t,r,i){return o&&i&&(t=n.getNode(t[r+1]))&&(i=t.transferControlToOffscreen(),e.messageToWorker({12:9,13:[t._index_],38:i},[i])),r+2}}},v=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],b=g=function(){function t(t,n){var e=this;this.nodes=this.count=this.stringContext=this.baseElement=void 0,this.createNodes=function(t,n){for(var r=(t=new Uint16Array(t)).length,i=0;i<r;i+=5){var o=void 0;if(3===t[i+1])o=document.createTextNode(e.stringContext.get(t[i+3]));else if(8===t[i+1])o=document.createComment(e.stringContext.get(t[i+3]));else if(11===t[i+1])o=document.createDocumentFragment();else if(o=e.stringContext.get(t[i+2]),o=0!==t[i+4]?document.createElementNS(e.stringContext.get(t[i+4]),o):document.createElement(o),n&&!n.sanitize(o))continue;e.storeNode(o,t[i])}},this.getNode=function(t){return(t=e.nodes.get(t))&&"BODY"===t.nodeName?e.baseElement:t},this.storeNodes=function(t){e.storeNode(t,++e.count),b(t.childNodes,(function(t){return e.storeNodes(t)}))},this.count=2,this.stringContext=t,this.nodes=new Map([[1,n],[2,n]]),this.baseElement=n,n._index_=2,b(n.childNodes,(function(t){return e.storeNodes(t)}))}return t.prototype.storeNode=function(t,n){t._index_=n,this.nodes.set(n,t)},t}(),y=new Map,w=function(t,n){n&&"value"in n&&null===n.oninput&&(n.oninput=},x=function(t,n){n&&"value"in n&&!y.get(n)&&(new MutationObserver(().observe(n,{attributes:!0}),y.set(n,!0))},k=function(t,n){return t.messageToWorker({12:4,40:{7:n._index_,21:n.value}})},O=function(t){return Object.values(t).map((function(t){return[t.identifier,t.screenX,t.screenY,t.clientX,t.clientY,t.pageX,t.pageY,t.target._index_]}))},S=function(t,n,e,r,i){var o=[],a=i.executorsAllowed.includes(4),u=[window.innerWidth,window.innerHeight],s=function(t,n){return function(r){n&&r.preventDefault();var i=r.currentTarget;if(i&&"value"in i)k(e,r.currentTarget);else if("resize"===r.type){var o=window,a=o.innerWidth,s=o.innerHeight;if(u[0]===a&&u[1]===s)return;u=[window.innerWidth,window.innerHeight],e.messageToWorker({12:5,40:u})}e.messageToWorker({12:1,39:{7:t,25:r.bubbles,26:r.cancelable,27:r.cancelBubble,28:[r.currentTarget._index_||0],29:r.defaultPrevented,30:r.eventPhase,31:r.isTrusted,32:r.returnValue,13:[r.target._index_||0],33:r.timeStamp,12:r.type,35:"keyCode"in r?r.keyCode:void 0,60:"pageX"in r?r.pageX:void 0,61:"pageY"in r?r.pageY:void 0,65:"offsetX"in r?r.offsetX:void 0,66:"offsetY"in r?r.offsetY:void 0,62:"touches"in r?O(r.touches):void 0,63:"changedTouches"in r?O(r.changedTouches):void 0}})}};return{execute:function(r,i,u){var c=r[i+2],f=i+4+2*c;if(c=i+4+6*r[i+3]+2*c,a&&u&&(u=n.getNode(r[i+1])))for(var l=i+4;l<c;){var h=l<=f;i=u;var p=h,m=r,d=l,v=t.get(m[d]),b=m[d+1];if(i!==n.baseElement){var g=null!==i.oninput,y="change"===v;p?(y&&(g=!0,i.onchange=null),i.addEventListener(v,o[b]=s(i._index_,!!m[d+5]))):(y&&(g=!1),i.removeEventListener(v,o[b])),i&&"value"in i&&(g||w(e,i),x(e,i))}else p?addEventListener(v,o[b]=s(1,!!m[d+5])):removeEventListener(v,o[b]);l+=h?2:6}return c}}},j=function(t,n,e,r,i){var o=i.executorsAllowed.includes(5);return{execute:function(t,r,i){return o&&i&&(t=n.getNode(t[r+1]))&&(i=t.getBoundingClientRect(),e.messageToWorker({12:6,13:[t._index_],38:[i.top,i.right,i.bottom,i.left,i.width,i.height]})),r+2}}},A=function(t,n,e,r,i){var o=n.getNode,a=i.executorsAllowed.includes(2);return{execute:function(t,n,r){var i=t[n+4],u=t[n+5];if(a&&r){var s=o(t[n+1]);s&&(0<u&&t.slice(n+6+i,n+6+i+u).forEach((),0<i&&t.slice(n+6,n+6+i).forEach((function(r){var i=t[n+2];(r=o(r))&&(s.insertBefore(r,i&&o(i)||null),w(e,r),x(e,r))})))}return n+6+i+u}}},E=function(t,n,e,r,i){var o=i.executorsAllowed.includes(0);return{execute:function(e,r,a){if(o&&a){a=n.getNode(e[r+1]);var u=t.get(e[r+2]);e=0!==(e=e[r+4])?t.get(e-1):null,a&&null!=u&&(i.sanitizer?i.sanitizer.setAttribute(a,u,e):null==e?a.removeAttribute(u):a.setAttribute(u,e))}return r+5}}},R=function(t,n,e,r,i){var o=i.executorsAllowed.includes(1);return{execute:function(e,r,i){return o&&i&&(i=n.getNode(e[r+1]),e=e[r+2],i&&e&&(i.textContent=t.get(e))),r+3}}},T=function(t,n,e,r,i){var o=i.executorsAllowed.includes(3);return{execute:function(e,r,a){if(o&&a){a=n.getNode(e[r+1]);var u=t.get(e[r+2]),s=e[r+4];e=1===e[r+3]?1===s:0!==s?t.get(s):null,a&&u&&null!=e&&(i.sanitizer?i.sanitizer.setProperty(a,u,String(e)):a[u]=e)}return r+5}}},_=function(t,n,e,r,o){var a,u=o.executorsAllowed.includes(6),s=0;return{execute:function(t,n,e){if(u&&e&&o.longTask)if(6===t[n]){if(s++,!a){var r=new Promise(();i().then(()}}else 7===t[n]&&(s--,a&&0>=s&&(a(),a=null,s=0));return n+2},get active},M=new Float32Array(1),z=new Uint16Array(M.buffer);function D(t,n,e,r,i,o){for(var a=[],u=0;u<e;u++)switch(t[n++]){case 1:a.push(t[n++]);break;case 2:z[0]=t[n++],z[1]=t[n++],a.push(M[0]);break;case 3:a.push(r.get(t[n++]));break;case 4:var s=t[n++];n=D(t,n,s,r,i,o),a.push(n.args),n=n.offset;break;case 5:if(!o)throw Error("objectContext not provided.");a.push(o.get(t[n++]));break;case 6:s=i.getNode(t[n++]),a.push(s.getContext("2d"));break;case 7:a.push(i.getNode(t[n++]));break;default:throw Error("Cannot deserialize argument.")}return{args:a,offset:n}}var C=function(t,n,e,r,i){var o=i.executorsAllowed.includes(9);return{execute:function(e,i,a){var u,s=t.get(e[i+1]),c=e[i+2],f=D(e,i+3,1,t,n,r),l=f.offset;i=f.args[0];var h=D(e,l,c,t,n,r),p=h.offset,d=h.args;return o&&a&&(L(i,s)?i[s]=d[0]:(u=i)[s].apply(u,m(d))),p}}};function L(t,n){if(!t)throw Error("Property ".concat(n," does not exist on ").concat(t,"."));var e=Object.getOwnPropertyDescriptor(t,n);return void 0!==e?"set"in e:L(Object.getPrototypeOf(t),n)}var I=function(t,n,e,r,i){var o=i.executorsAllowed.includes(10);if(!r)throw Error("objectContext is not defined.");return{execute:function(e,i,a){var u,s=t.get(e[i+1]),c=e[i+2],f=e[i+3],l=D(e,i+4,1,t,n,r),h=l.offset;i=l.args[0];var p=D(e,h,f,t,n,r),d=p.offset,v=p.args;return o&&a&&"new"!==s&&r.store(c,(u=i)[s].apply(u,m(v))),d}}},N=function(t,n,e,r,i){var o=i.executorsAllowed.includes(11);return{execute:function(t,r,i){return o&&i&&(i=n.getNode(t[r+1]))&&self.createImageBitmap(i).then((function(n){e.messageToWorker({12:10,73:t[r+2],38:n},[n])})),r+3}}},F=function(t,n,e,r,i){var o=i.executorsAllowed.includes(12);return{execute:function(n,r,a){if(o&&a){a=n[r+1];var u=n[r+2],s=n[r+3],c=n[r+4];if(n=0<s?t.get(s-1):"",s=0<c?t.get(c-1):null,1===a)l=u,h=n,i.sanitizer&&2===l&&i.sanitizer.getStorage(l,h).then((function(t){e.messageToWorker({12:11,74:h,75:l,21:t})}));else if(2===a)if(a=u,u=n,n=s,i.sanitizer)i.sanitizer.setStorage(a,u,n);else{var f;if(0===a?f=window.localStorage:1===a&&(f=window.sessionStorage),f)if(null==u){if(null!=n)throw Error("Unexpected storage operation.");f.clear()}else null==n?f.removeItem(u):f.setItem(u,n)}}var l,h;return r+5}}},U=0,P={},B=function(t,n,e,r,i){var o=i.executorsAllowed.includes(13);return{execute:function(n,e){if(o){var r=n[e+1],i=n[e+2];n=n[e+3],n=t.hasIndex(n)?JSON.parse(t.get(n)):void 0,1===r?P[i].resolve(n):P[i].reject(n),delete P[i]}return e+4}}},W=function(t,n,e,r,i){var o=i.executorsAllowed.includes(14);return{execute:function(t,e,r){return o&&r&&(t=n.getNode(t[e+1]))&&t.scrollIntoView(),e+2}}},q=function(){function t(t,n,e,r,i){var o=this;this.nodeContext=this.stringContext=void 0,this.mutationQueue=[],this.pendingMutations=!1,this.executors=this.sanitizer=this.mutationPumpFunction=void 0,this.syncFlush=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=[];return o.mutationQueue.forEach((function(e){for(var r=e.length,i=0;i<r;){var a,u=e[i];if(!(a=t)){t:switch(u){case 4:case 5:case 6:case 7:case 12:case 8:case 13:a=!1;break t;default:a=!0}a=!a}a||n.push(u),i=o.executors[u].execute(e,i,a)}})),o.mutationQueue=[],o.pendingMutations=!1,n},this.stringContext=t,this.nodeContext=n,this.sanitizer=r.sanitizer,this.mutationPumpFunction=r.mutationPump,n=_.apply(null,t=[t,n,e,i,r]),this.executors={2:A.apply(null,t),0:E.apply(null,t),1:R.apply(null,t),3:T.apply(null,t),4:S.apply(null,t),5:j.apply(null,t),6:n,7:n,8:d.apply(null,t),9:C.apply(null,t),10:I.apply(null,t),11:N.apply(null,t),12:F.apply(null,t),13:B.apply(null,t),14:W.apply(null,t)}}return t.prototype.mutate=function(t,n,e,r){this.stringContext.storeValues(e),this.nodeContext.createNodes(n,this.sanitizer),this.mutationQueue=this.mutationQueue.concat(r),this.pendingMutations||(this.pendingMutations=!0,this.mutationPumpFunction(this.syncFlush,t))},t}(),J=function(){ar n=t.prototype;return n.get=n.hasIndex=n.store=n.storeValues=t}(),G=[8,3];function Y(t,n,e,r){var i=[].slice.call(t.childNodes).filter(e);return i={7:t._index_,11:0,0:t.nodeType,1:n(t.localName||t.nodeName),4:i.map((),2:[].map.call(t.attributes||[],(function(t){return[n(t.namespaceURI||"null"),n(t.name),n(t.value)]}))},null!=t.namespaceURI&&(i[6]=n(t.namespaceURI)),G.includes(t.nodeType)&&null!==t.textContent&&(i[5]=n(t.textContent)),w(r,t),x(r,t),i}ar H=function(){function t(t,n){var e=this;this.readyPromiseResolve=this.iframe=this.readyPromise=this.onmessageerror=this.onmessage=this.onerror=this.url=void 0,this.url=t,this.iframe=window.document.createElement("iframe"),this.iframe.setAttribute("sandbox","allow-scripts"),this.iframe.setAttribute("style","display:none"),this.iframe.setAttribute("src",n),this.url=t,this.readyPromise=new Promise((),this.setupInit(),this.proxyFromWorker(),window.document.body.appendChild(this.iframe)}var n=t.prototype;return n.setupInit=function(){var t=this;window.addEventListener("message",(function n(e){e.source==t.iframe.contentWindow&&fetch(t.url.toString()).then((function(t){return t.text()})).then((function(r){var i=e.data;"iframe-ready"==i.type?t.iframe.contentWindow.postMessage({type:"init-worker",code:r},"*"):"worker-ready"===i.type&&(t.readyPromiseResolve(),window.removeEventListener("message",n))}))}))},n.proxyFromWorker=function(){var t=this;window.addEventListener("message",(function(n){if(n.source==t.iframe.contentWindow){var e=n.data,r=e.type,i=e.message;"onmessage"==r&&t.onmessage?t.onmessage($({},n,{data:i})):"onerror"===r&&t.onerror?t.onerror(i):"onmessageerror"===r&&t.onmessageerror&&t.onmessageerror($({},n,{data:i}))}}))},n.postMessage=function(t,n){var e=this,r={type:"postMessage",message:t};this.readyPromise.then(()},n.terminate=function(){this.iframe.contentWindow.postMessage({type:"terminate"},"*"),this.iframe.remove()},t}(),X=function(){function t(t,n,e,r,i){this[55]=void 0,this.nodeContext=n,this.config=i;var o=function(t,n,e){n=n.hydrateFilter||var r=[],i=new Map;return{skeleton:Y(t,(function(t){if(i.has(t))return i.get(t);var n=r.length;return i.set(t,n),r.push(t),n}),n,e),strings:r}}(t,i,this),a=o.skeleton,u=o.strings;n=[];var s=[],c=V("localStorage"),f=V("sessionStorage");for(var l in t.style)n.push(l);for(var h in t)h.startsWith("on")&&s.push(h);e="'use strict';(function(){".concat(e,"self['window']=self;var workerDOM=WorkerThread.workerDOM;WorkerThread.hydrate(workerDOM.document,").concat(JSON.stringify(u),",").concat(JSON.stringify(a),",").concat(JSON.stringify(n),",").concat(JSON.stringify(s),",[").concat(window.innerWidth,",").concat(window.innerHeight,"],").concat(JSON.stringify(c),",").concat(JSON.stringify(f),");workerDOM.document[59](this);Object.assign(self,workerDOM);}).call(self);").concat(r,"//# sourceURL=").concat(encodeURI(i.authorURL)),this[55]=i.sandbox?new H(URL.createObjectURL(new Blob([e])),i.sandbox.iframeUrl):new Worker(URL.createObjectURL(new Blob([e]))),i.onCreateWorker&&i.onCreateWorker(t,u,a,n)}var n=t.prototype;return n.ready=n.messageToWorker=function(t,n){this.config.onSendMessage&&this.config.onSendMessage(t),this.worker.postMessage(t,n||[])},p(t,[{key:"worker",get:]),t}();function V(t,n){try{return n?{storage:n.getStorage("localStorage"==t?0:1),errorMsg:null}:{storage:window[t],errorMsg:null}}catch(t){return{errorMsg:t.message,storage:null}}}var K=function(){ar n=t.prototype;return n.store=n.get=function(t){var n=this.objects.get(t);if(n)return n;throw Error("Object with id ("+t+") does not exist.")},t}(),Z=function(){ar n=t.prototype;return n.callFunction=function(t){if(!this.config.executorsAllowed.includes(13))throw Error("[worker-dom]: Error calling ".concat(t,". You must enable the FUNCTION_CALL executor within the config."));for(var n=function(){var t,n,e=new Promise(();U>=Number.MAX_VALUE&&(U=0);var r=U++;return P[r]={promise:e,resolve:t,reject:n},{promise:e,index:r}}(),e=n.promise,r=n.index,i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return t={12:12,77:t,78:JSON.stringify(o),7:r},this.workerContext_.messageToWorker(t),e},n.terminate=p(t,[{key:"onerror",set:]),t}(),Q=[3,2],tt=function(t){return null===t.parentNode||(t=(t.parentNode.localName||t.parentNode.nodeName).toLowerCase(),!/amp-/.test(t)||"amp-script"===t)};rray.isArray;var et=Object.prototype;ction at(t,n,e,r,i,o,a,u,s,c,f){return t}t.hasOwnProperty,et.toString;var mt=Object.entries,dt=Object.setPrototypeOf,vt=Object.isFrozen,bt=Object.getPrototypeOf,gt=Object.getOwnPropertyDescriptor,yt=Object.freeze,wt=Object.seal,xt=Object.create,kt="undefined"!=typeof Reflect&&Reflect,Ot=kt.apply,St=kt.construct;Otn,e)}),yt||(yt=function(t){return t}),wt||(wt=function(t){return t}),St(n))});var jt,At=Nt(Array.prototype.forEach),Et=Nt(Array.prototype.pop),Rt=Nt(Array.prototype.push),Tt=Nt(String.prototype.toLowerCase),_t=Nt(String.prototype.toString),Mt=Nt(String.prototype.match),zt=Nt(String.prototype.replace),Dt=Nt(String.prototype.indexOf),Ct=Nt(String.prototype.trim),Lt=Nt(RegExp.prototype.test),It=(jt=Typetn t}function Ut(t){for(var n,r=xt(nud.")}(mt(t));!(n=i()).done;){var o=l(n.value,2),a=o[0],u=o[1];r[a]=u}retull}}var Bt=yt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Wt=yt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),qt=yt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Jt=yt(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Gt=yt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Yt=yt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),$t=yt(["#text"]),Ht=yt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Xt=yt(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Vt=yt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Kt=yt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Zt=wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Qt=wt(/<%[\w\W]*|[\w\W]*%>/gm),tn=wt(/\${[\w\W]*}/gm),nn=wt(/^data-[\-\w.\u00B7-\uFFFF]/),en=wt(/^aria-[\-\w]+$/),rn=wt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),on=wt(/^(?:\w+script|data):/i),an=wt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),un=wt(/^html$/i),sn=Object.freeze({__proto__:null,MUSTACHE_EXPR:Zt,ERB_EXPR:Qt,TMPLIT_EXPR:tn,DATA_ATTR:nn,ARIA_ATTR:en,IS_ALLOWED_URI:rn,IS_SCRIPT_OR_DATA:on,ATTR_WHITESPACE:an,DOCTYPE_NAME:unndoull}}}(0,t)}var pn=/(?:^[#?]?|&)([^=&]+)(?:=([^&ash)}va_MODE}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var wn=self.__)}var En=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,| ")},t}();function Tn(t,n){return st(t.width!=n.width,"Duplicate width: %s",t.width),t.width--n.dpr-)}},t}(),zn=function(){return self.AMP.config. Jbin"xhr")},Hn=function(){return self.AMP.config.urls}(),Xn=new Set(["c","v","a","all:Gn)}function Zn(t){return Hn.cdnProxyRegex.test(Vn(t).}(t,n)}var te=function(){return self.AMP.config.urls}();function ne(t,n,e){return ee(n)?function(t,n,e,r){var i;An(!("__amp_source_origin"in dn(Kn(i=e).search)),"Source origin is not allowed in %s",i);var o=Zn(r),a=Kn(function(t){if(!Zn(t=Vn(t)))return t.href;var n=t.pathname.split("/"),e=n[1];An(Xn.has(e),"Unknown path prefix in url %s",t.href);var r=n[2],i="s"==r?"https://"+decodeURIComponent(n[3]):"http://"+decodeURIComponent(r);return An(i.indexOf(".")>0,"Expected a . in origin %s",i),n.splice(1,"s"==r?3:2),i+n.jo"+r:""}(t.search)+(t.hash||"")}(r));if("href"==n&&!e.startsWith("#"))return Qn(e,a);if("src"==n)return"amp-img"==t?re(e,a,o):Qn(e,a);if("srcset"==n){var  Rn(e)}(e)}catch(t){return kn().error("URL-REWRITE","Failed to parse srcset: ",t),e}return u.strt,a,o)}))}return e}(t,n,e,self.loca||"")}var ie="data-amp-bind-",oe="i-amphtml-key",ae={"AMP-IMG":["src","srcset","layout","width","height"]},ue={"applet":!0,"audio":!0,"base":!0,"embed":!0,"frame":!0,"frameset":!0,"iframe":!0,"img":!0,"link":!0,"meta":!0,"object":!0,"style":!0,"video":!0},se={"amp-accordion":!0,"amp-anim":!0,"amp-bind-macro":!0,"amp-carousel":!0,"amp-fit-text":!0,"amp-img":!0,"amp-layout":!0,"amp-selector":!0,"amp-sidebar":!0,"amp-timeago":!0},ce=["a","amp-img","article","aside","b","blockquote","br","caption","code","col","colgroup","dd","del","details","div","dl","dt","em","figcaption","figure","footer","h1","h2","h3","header","hr","i","ins","li","main","mark","nav","ol","p","pre","q","s","section","small","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul"],fe=["a","article","aside","b","blockquote","br","caption","code","col","colgroup","dd","del","details","div","dl","dt","em","figcaption","figure","footer","h1","h2","h3","header","hr","i","ins","li","main","mark","nav","ol","p","pre","q","s","section","small","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul"],le=["amp-fx","fallback","heights","layout","min-font-size","max-font-size","on","option","placeholder","submitting","submit-success","submit-error","validation-for","verify-error","visible-when-invalid","href","style","text","subscriptions-action","subscriptions-actions","subscriptions-decorate","subscriptions-dialog","subscriptions-display","subscriptions-section","subscriptions-service","subscriptions-google-rtc","amp-nested-submenu","amp-nested-submenu-open","amp-nested-submenu-close","itemprop"],he={"a":["rel","target"],"div":["template"],"form":["action-xhr","verify-xhr","custom-validation-reporting","target"],"input":["mask-output"],"template":["type"],"textarea":["autoexpand"]},pe=["_top","_blank"],me=/^(?:\w+script|data|blob):/i,de=/^(?:blob):/i,ve=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,be=Object.freeze({"input":{"type":/(?:image|button)/i}}),ge=Object.freeze({"input":{"type":/(?:button|file|image|password)/i}}),ye=Object.freeze(["form","formaction","formmethod","formtarget","formnovalidate","formenctype"]),we=Object.freeze({"input":ye,"textarea":ye,"select":ye}),xe=Object.freeze({"amp-anim":["controls"],"form":["name"]}),ke=/!important|position\s*:\s*fixed|position\s*:\s*sturn!0}var Se="purifier",je={"script":{"attribute":"type","values":["application/json","application/ld+json"]}},Ae={USE_PROFILES:{html:!0,svg:!0,svgFilters:}))},t}(),Re={NONE:0,CLASSIC:1,ALTERNAe.NONE}var _e=["change","click","dblclick","input","keypress","submit","keydown"],Me=function(){function t(t){var n=this;this.Fe=t,this.t4=this.n4.bind(this),this.e4=0,this.r4=!1,_e.forEach((function(t){n.Fe.addEventListener(t,n.t4,!0)}))}var n=t.prototype;return n.dispose=function(){var t=this;_e.ft4,!0)}))},n.hasBees.e4>0},n.isActive=function(){return this.e4>0&&Date.now()-this.e4<=5e3||this.r4},n.getLastActivationTime=function(){return this.e4},n.expandLongTask=function(t){var n=this;if(this.isActive()){jn(!this.r4),this.r4=!.now()};t.then(e,e)}},n.isInLongTask=function(){return this.rnow())},t}(),ze=self.__AMP_ERRORS||[];self.__AMP_ERRORS=zeg.urls}(),Ce="amp-script",Le=15e4,Ie=3e5,Ne=functa(t,n)}(i,t);var n,e,r=(n=his,t)});function i(t){var n;return(n=r.call(this,t))._o=Dn(n.win,"vsync"),n.i4=null,n.o4=null,n.a4=null,n.u4="amp-script[unknown].js",n.NJ=!1,n.s4=!1,n.Pe=new o,n.c4=!1,n.f4=!1,n.l4=!1,n}var c=i.prototype;return c.isLayoutSu|ct(t)},c.buildCallback=function(){var t,n,e,r=this;return this.l4=this.element.hasAttribute("sandboxed"),this.f4=this.l4||this.element.hasAttribute("nodom"),this.c4=this.element.hasAttribute("data-ampdevmode")||this.element.ownerDocument.documentElement.hasAttribute("data-ampdevmode"),this.c4&&kn().warn(Ce,"JavaScript size and script hash requirements are disabled in development mode.",this.element),this.f4&&(this.element.hasAttribute("width")||this.element.hasAttribute("height")||this.element.hasAttribute("layout"))&&kn().warn(Ce,"Cannot set width, height, or layout of a nodom <amp-script>",this.element),(t=this.element,n=Ce,e=Ce,qn(t,n,e,undefinedt,0,e)}))ice(t)}))},c.onLayoutMeasure=function(){if(!this.NJ&&!this.s4){var t=this.getLayoutSize(),n=t.height;t.width*n!=0||this.f4||(this.s4=!0,kn().warn(Ce,"Skipped initializing amp-script due to zero width or height.",this.element))}},c.sets.a4=t},c.getUserActhis.o4},c.callFunction=function(t,n){var e=arguments,r=this;return this.Pe.promise.then((function(){return r.i4?r.i4.callFunction.apply(r.i4,e):Promise.reject(new Error("Attempted to call a function on an amp-script which failed initialization."))}))},c.layoutCallback=function(){var t,n,e=this;if(this.NJ=!0,this.element.sizerElement){(n=t=this.win.document.createElement("div")).classList.add("i-amphtml-fill-content"),n.classList.add("i-amphtml-replaced-content");for(var r=function(t){return function(t,n){for(var e=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,a=void 0,"string"==typeof(o=i=r)?a=o:it(o)&&(a=o.tagName),!(a&&a.toLowerCase().startsWith("i-")||i.nodeType===Node.ELEMENT_NODE&&(ut(i),i.hasAttribute("placeholder")||i.hasAttribute("fallback")||i.hasAttribute("overflow")))&&e.push(r);var i,o,a;return e}(t)}(this.element),i=0;i<r.length;i++)t.appendChild(r[i]);this.element.appendChild(t)}this.o4=new Me(this.element),this.u4=this.element.hasAttribute("src")?'amp-script[src="'.concat(this.element.getAttribute("src"),'"].js'):'amp-script[script="'.concat(this.element.getAttribute("script"),'"].js');var o=this.h4(this.u4);if(!o)return kn().error(Ce,'"src" or "script" attribute is required.'),Promise.reject(new Error("CANCELLED"));var a,u=Promise.all([this.m4(),o]).then((function(t){var n=t[0],r=t[1];return!e.c4&&e.a4.sizeLimitExceeded(r.length,e.l4)?(kn().error(Ce,"Maximum total script size exceeded (%s). %s is disabled. See https://amp.dev/documentation/components/amp-script/#size-of-javascript-code.",e.l4?Ie:Le,e.u4),e.element.classList.add("i-amphtml-broken"),[]):[n,r]})),s=(this.element.getAttribute("sandbox")||"").split(" ").map((function(t){return t.trim()}));a="".concat(De.thirdParty,"/").concat("2312191621000","/amp-script-proxy-iframe.html");var c,f,h,p={authorURL:this.u4,mutationPump:this.d4.bind(this),lask(t)},sanitizer:new Pe(this,s),onCreateWorker:function(t){Sn().info(Ce,"Create worker:",t)},onSendMessage:function(t){Sn().info(Ce,"To worker:",t)},onReceiver:",t)},sandbox:this.l4&&{iframeUrl:a}};return(c=t||this.element,f=u,h=p,h.hydrateFilter=tt,function(t,n,e){var r=n.dataset.shadowDom;if("open"===r||"closed"===r){r=n.attachShadow({mode:r});var i=n.cloneNode(!0);r.appendChild(i),n=i}var o,a=new J,u=new K,s=new g(a,n),c=(o=e,Object.assign({},{mutationPump:requestAnimationFrame.bind(null),executorsAllowed:v},o));return t.then((function(t){var r=l(t,2),i=r[0],o=r[1];if(i&&o&&e.authorURL){var f=new X(n,s,i,o,c),h=new q(a,s,f,c,u);return f.worker.onmessage=function(t){var n=t.data;Q.includes(n[12])&&(h.mutate(n[54],n[37],n[41],new Uint16Array(n[36])),e.onReceiveMessage)&&e.onReceiveMessage(t)},f.ready(Z(f,c)}))}return null}))}(f,c,h)).then((function(t){e.i4=t,e.Pe.resolve(),e.i4&&(e.i4.onerror=function(t){t.preventDefault(),kn().error(Ce,"".concat(t.message,"\n    at (").concat(t.filename,":").concat(t.lineno,")"))})}))},c.m4=function(){var t,n,e,r,i,o,a,u=(t=this.win.location,n=this.f4?"amp-script-worker-nodom":"amp-script-worker",e="0.1",i=function(t,n){if(n){var e="".concat(t.protocol,"//").concat(t.host);return"about:"!=t.protocol&&"blob:"!=t.protocol&&"data:"!=t.protocol||(e=""),"".concat(e,"/dist")}return zn.cdn}(t,!1),o=(r=self,r.__AMP_MODE?r.__AMP_MODE:r.__Ady:!1}}(r)).rtvVersion,a=e?"-"+e:"","".concat(i,"/rtv/").concat(o,"/v0/").concat(n).concat(a).concat(".js"));return $n(this.win).fetchText(u,{ampCors:!1}text()}))},c.h4=function(t){var n=this.element.getAttribute("src");if(n)return this.v4(n,t);var e=this.element.getAttribute("script");if(e){var r=this.getAmpDoc().getElementById(e);An(r,"[%s] %s could not find element with #%s.",Ce,t,e),An("amp-script"===r.getAttribute("target"),'[%s] script#%s must have target="amp-script".',Ce,e);var i=r.textContent;return this.c4||this.l4?Promise.resolve(i):this.a4.checkSha384(i,t).then((function(){return i}))}return null},c.v4=function(t,n){var e=this;return $n(this.win).fetchText(t,{ampCors:!1}).then((function(t){if(t.url&&e.b4(t.url)){var r=t.headers.get("Content-Type");if(!r||!r.startsWith("application/javascript")&&!r.startsWith("text/javascript"))throw kn().createError(Ce,'Same-origin "src" requires "Content-Type: text/javascript" or "Content-Type: application/javascript". '+"Fetched source for ".concat(n,' has "Content-Type: ').concat(r,'". ')+"See https://amp.dev/documentation/components/amp-script/#security-features.");return t.text()}return e.c4||e.l4?t.text():t.text().then((function(t){return e.a4.checkSha384(t,nturn t}))}))}))},c.b4=function(t){var n=Cn(this.element,"url");return n.getSourceOrigin(this.getAmpDoc().getUrl())===n.parse(t).origin},c.isMutationAllowedByFiout())},c.isMutationAllowedByUsertive()},c.d4=function(t,n){var e=this;1==n&&this._o.ated")}));var r=this.isMutationAllowedByFixedSize()||this.isMutationAllowedByUserGesture();this._o.mutate((function(){var i=t(r),o=rt();i.forEach((function(t){o[t]=o[t]+1||1})),Object.keys(o).forEach((function(t){var n=o[t];kn().error(Ce,e.g4(t,n))})),i.length>0&&2===n&&(e.i4.terminate(),e.element.classList.remove("i-amphtml-hydrated"),e.element.classList.add("i-amphtml-broken"),kn().error(Ce,"%s was terminated due to illegal mutation.",e.u4))}))},c.g4=function(t,n){var e;switch(t){case"0":case"3":e="DOM element attributes or styles";break;case"1":e="textContent or the like";break;case"2":e="DOM element children, innerHTML, or the like";break;default:e="the DOM"}return"Blocked ".concat(n," attempts to modify ").concat(e,".")+" For variable-sized <amp-script> containers, a user action has to happen first."},i}(t.BaseElement),Fe=function(){function t(t){this.Ki=t,this.y4=0,this.w4=0,this.eE=[];var n=t.getMetaByName("amp-script-src");n&&(this.eE=n.split(/\s+/).filter(Boolean)),this.tJ=Dn(t.win,"crypto")}var n=t.prototype;return n.checkSha384=function(t,n){var e,r=this,i=(e=t,"undefined"!=typeof TextEncoder?(new TextEncoder).enturn n}(unescape(encodeURIComponent(e))));return this.tJ.sha384Base64(i).then((function(t){if(!t||!r.eE.includes("sha384-"+t))throw kn().createError(Ce,"Script hash not found or incorrect for ".concat(n,'. You must include <meta name="amp-script-src" content="sha384-').concat(t,'">. ')+'During development, you can disable this check by adding the "data-ampdevmode" attribute to '.concat(n,", or the root html node")+"See https://amp.dev/documentation/components/amp-script/#script-hash.")}))},n.sizeLimitExceeded=function(t,n){return n?this.w4+=t:this.y4+=t,n?this.w4>Ie:this.y4>Le},n.fetch=function(t,n){var e=t.slice("amp-script:".length).split(".");An(2===e.length&&e[0].length>0&&e[1].length>0,"[".concat(Ce,']: "amp-script" URIs must be of the format "scriptId.functionIdentifier".'));var r=e[0],i=e[1],o=this.Ki.getElementById(r);An(o&&"AMP-SCRIPT"===o.tagName,"[".concat(Ce,"]: could not find <amp-script> with script set to ").concat(r));var a=Array.prototype.slice.call(arguments,1);return o.getImpl(at(a))}))},t}(),Ue=["form","button","fieldset","input","object","output","select","textarea"],Pe=function(){function t(t,n){var e,r,i,o=this;this.t=t.win,this.tp=t.element,r="purifier-inplace",i=function(){return new Ee(t.win.document,{"IN_PLACE":!(t,e))}(e=In(e=this.t),e,r,i),this.dE=Dn(this.t,"purifier-inplace"),this.x4=this.dE.getAllowedTags(),ture()},Size()},this.x4["amp-img"]=!0,this.x4["amp-layout"]=!0,this.x4["amp-pixel"]=!1,this.j4=n.includes("allow-forms"),Ue.f]=o.j4}))}var n=t.prototype;return n.sanitize=function(t){var n=t.nodeName.toLowerCase(),e=this.x4[n];return e||this.A4(n)||kn().warn(Ce,"Sanitized node:",t),e},n.setAttribute=function(t,n,e){var r=t.nodeName.toLowerCase();if(this.x4[r]){var i=n.toLowerCase();if(this.dE.validateAttributeChange(t,i,e)){if(null==e)t.removeAttribute(i);else{var o=ne(r,i,e);t.setAttribute(i,o)}return"a"===r&&t.hasAttribute("href")&&!t.hasAttribute("target")&&t.setAttribute("target","_top"),!0}}return this.A4(r)||kn().warn(Ce,'Sanitized [%s]="%s":',n,e,t),!1},n.A4=function(t){return!(this.j4||!Ue.includes(t)||(kn().warn(Ce,'Form elements (%s) cannot be mutated unless your <amp-script> includes the attribute sandbox="allow-forms".',t),0))},n.setProperty=function(t,n,e){var r=n.toLowerCase();return!!this.dE.validateAttributeChange(t,r,e)&&(t[n]=e,!0)},n.getStorage=function(t,n){if(2===t)return Yn(this.tp).then((function(t){if(t)return t.getStateValue(n||".")}));for(var e=this.E4(t),r={},i=0;i<e.length;i++){var o=e.key(i);o&&!o.startsWith("amp-")&&(r[o]=e.getItem(o))}return r},n.setStorage=function(t,n,e){var r=this;if(2===t)return Yn(this.tp).then((function(t){if(t){var n=function(t,n){tryrse(t)}(t)}catch(t){return null==n||n(),null}}(e,(function(){Sn().error(Ce,"Invalid AMP.setState() argument: %s",e)}));if(n){var i=r.O4(),o=r.S4()?[r.tp]:void 0;i||o||kn().warn(Ce,"AMP.setState only updated page state and did not reevaluate bindings due to lack of recent user interaction."),t.setState(n,{skipEval:!i&&!o,skipAmpState:!1,constrain:o})}}}));var o=this.E4(t);return null===n?null===e&&kn().error(Ce,"Storage.clear() is not supported in amp-script."):n.startsWith("amp-")?kn().error(Ce,'Invalid "amp-" prefix for storage key: %s',n):null===e?o.removeItem(n):o.setItem(n,e),i()},n.E4=function(t){return 0===t?this.t.localStorage:1===t?this.t.sessionStorage:null},t}();t.registerServiceForDoc(Ce,Fe),t.registerElement(Ce,Ne,"amp-script{opacity:0.7}amp-script.i-amphtml-hydrated{opacity:1}\n/*# sourceURL=/extensions/amp-script/0.1/amp-script.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
/*! Bundled license information:

dompurify/dist/purify.es.js:
  (*! @license DOMPurify 3.0.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.2/LICENSE *)
*/}});
//# sourceMappingURL=amp-script-0.1.js.map