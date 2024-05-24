function quotescollection_timer(instance, current, show_author, show_source, filter_tags, char_limit, auto_refresh, random_refresh)
{
	var time_interval = auto_refresh * 1000;
	if( (QCAjax.auto_refresh_max == 0) || (QCAjax.auto_refresh_count < QCAjax.auto_refresh_max) ) {
		setTimeout("quotescollection_refresh("+instance+", "+current+", "+show_author+", "+show_source+", '"+filter_tags+"', "+char_limit+", "+auto_refresh+", "+random_refresh+")", time_interval);
		QCAjax.auto_refresh_count += 1;
	}
}



function quotescollection_refresh(instance, current, show_author, show_source, filter_tags, char_limit, auto_refresh, random_refresh)
{
	jQuery("#quotescollection_nextquote-"+instance).html(QCAjax.loading);
	jQuery.ajax({
		type: "POST",
		url: QCAjax.ajaxurl,
		data: "action=quotescollection&_ajax_nonce="+QCAjax.nonce+"&refresh="+instance+"&current="+current+"&show_author="+show_author+"&show_source="+sar_limit="+char_limit+"&tags="+filter_tags+"&auto_refresh="+auto_refresh+"&random_refresh="+random_refresh,
		success: function(response) {
			if(response == '-1') {
				if(auto_refresh == 0)
					jQuery("#quotescollection_nextquote-"+instance).html('<a class=\"quotescollection_refresh\" style=\"cursor:pointer\" onclick=\"quotescollection_refresh(\''+instance+'\', \''+current+'\', \''+show_author+'\', \''+show_source+'\', \''+filter_tags+'\', \''+char_limit+'\', \'0\', \''+random_refresh+'\');\">'+QCAjax.nextquote+'</a>');
				else
					quotescollection_timer(instance, current, show_author, show_source, filter_tags, char_limit, auto_refresh, random_refresh);
			}
			else {
				jQuery("#quotescollection_randomquote-"+instance).hide();
				jQuery("#quotescollection_randomquote-"+instance).html( response );
				jQuery("#quotescollection_randomquote-"+instance).fadeIn("slow");	
			}
		},
		error: function(xhr, textStatus, errorThrown) {
			console.log(textStatus+' '+xhr.status+': '+errorThrown);
			if(auto_refresh == 0)
				jQuery("#quotescollection_nextquote-"+instance).html('<a class=\"quotescollection_refresh\" style=\"cursor:pointer\" onclick=\"quotescollection_refresh(\''+instance+'\', \''+current+'\', \''+show_author+'\', \''+show_source+'\', \''+filter_tags+'\', \''+char_limit+'\', \'0\', \''+random_refresh+'\');\">'+QCAjax.nextquote+'</a>');
		}	
	});
}

n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},171:(e,t,n)=>{var r=n(217),s=n(327);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var a=0;a<16;++a)t[i+a]=o[a];return t||s(o)}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};n.r(e),n.d(e,{CLSThresholds:()=>Gn,FCPThresholds:()=>Bn,FIDThresholds:()=>Jn,INPThresholds:()=>rr,LCPThresholds:()=>ur,TTFBThresholds:()=>pr,getCLS:()=>Hn,getFCP:()=>Wn,getFID:()=>Qn,getINP:()=>lr,getLCP:()=>hr,getTTFB:()=>gr,onCLS:()=>Hn,onFCP:()=>Wn,onFID:()=>Qn,onINP:()=>lr,onLCP:()=>hr,onTTFB:()=>gr});const t=["metroplexSocketBase","metroplexHTTPBase"],r=["authorization","from","proxy-authorization","content-md5","cookie","x-forwarded-for","x-real-ip","x-device-id","x-request-id","x-auth-token","x-user-id","x-forwarded-for","x-uidh","set-cookie","forwarded"],s=/[0-9]+/g,i=/\b[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)*[a-z0-9-]*[a-z]\w*\b/gi,o=[/\b4\d{12}(?:\d{3})?\b/g,/\b(?:5[1-5]\d{2}|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}\b/g,/\b3[47]\d{13}\b/g,/\b3(?:0[0-5]|[68]\d)\d{11}\b/g,/\b6(?:011|5\d{2})\d{12}\b/g,/\b(?:2131|1800|35\d{3})\d{11}\b/g,i,/\b(?!000|666)[0-8]\d{2}[-.● ]?(?!00)\d{2}[-.● ]?(?!0000)\d{4}\b/g,/\b(\d{3}[-.● ]?\d{3}[-.● ]?\d{3})\b/g,/\+(?:\d●?){6,14}\d\b/g,/(\b|\+)?(1[-.● ]?)?\(?(\d{3})\)?[-.● ]?(\d{3})[-.● ]?(\d{4})\b/g],a=/^www\d{0,2}$/,c=/(getElementById\(')([^']*)('\)\.value = )('[^']*')/g,l=["Image","EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],u="sf",d="su",h="suse";function p(){return window.NOIBUJS_CONFIG?window.NOIBUJS_CONFIG:{}}const g=["i.noibu","i.staging.noibu","input.staging.noibu","input.b.noibu","input.noibu","vf.staging.noibu","vf.noibu"],m=["error","warn","log"],f=["pagehide","pageshow","focus","blur","popstate","online","offline","messageerror","languagechange","hashchange","beforeprint","afterprint","load","resize"],v=["visibilitychange","resume","freeze","readystatechange","cut","copy","paste"],y=new Set(["background-position-x","background-position-y","background-size","background-attachment","background-origin","background-clip","background-color","border-image-source","border-image-slice","border-image-width","border-image-outset","border-image-repeat","border-top-style","border-right-style","border-bottom-style","border-left-style","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top-width","border-right-width","border-bottom-width","border-left-width","flex-wrap","list-style-image","list-style-position","max-width","outline-color","outline-style","outline-width","max-height","height","color","border-collapse","text-indent","width","position","line-height","white-space","display","top","pointer-events","right","overflow-x","overflow-y","text-align","padding-top","padding-bottom","padding-right","padding-left","transform","text-decoration-line","font-variant-ligatures","font-variant-caps","font-variant-alternates","font-variant-numeric","font-variant-east-asian","font-variant-position","background-image"].map(e=>"--quantum-metric-"+e));function I(){const e=p();return!!e.njs_version&&"beta"===e.njs_version}function b(){try{return"1.4.2"}catch(e){return""}}function C(){const e=p();return e.scriptID?I()&&b()?b()+"-beta":e.scriptID:"default"}function S(){const e=p();return e.att_sel?e.att_sel:{}}function w(){try{const e=I()?"wss://input.b.noibu.com":"wss://input.noibu.com";return e.endsWith("/")?e.slice(0,-1):e}catch(e){return"ws://localhost:3000"}}function A(){try{const e=I()?"https://input.b.noibu.com":"https://input.noibu.com";return e.endsWith("/")?e.slice(0,-1):e}catch(e){return"http://localhost:3000"}}function E(){return A()+"/pv"}const k=[e=>/AppMeasurement Debug/i.test(e)],R=new Set(["button","radio","checkbox","reset","submit"]),T=[e=>"button"===e,(e,t)=>"input"===e&&R.has(t.type),e=>"a"===e,e=>"select"===e,e=>"option"===e];var _,M=n(171),N=n.n(M);function O(e){return e.nodeType===e.ELEMENT_NODE}function D(e){var t=null==e?void 0:e.host;return Boolean((null==t?void 0:t.shadowRoot)===e)}function L(e){return"[object ShadowRoot]"===Object.prototype.toString.call(e)}function x(e){try{var t=e.rules||e.cssRules;return t?((n=Array.from(t).map(P).join("")).includes(" background-clip: text;")&&!n.includes(" -webkit-background-clip: text;")&&(n=n.replace(" background-clip: text;"," -webkit-background-clip: text; background-clip: text;")),n):null}catch(e){return null}var n}function P(e){var t;if(function(e){return"styleSheet"in e}(e))try{t=x(e.styleSheet)||function(e){var t=e.cssText;if(t.split('"').length<3)return t;var n=["@import","url(".concat(JSON.stringify(e.href),")")];return""===e.layerName?n.push("layer"):e.layerName&&n.push("layer(".concat(e.layerName,")")),e.supportsText&&n.push("supports(".concat(e.supportsText,")")),e.media.length&&n.push(e.media.mediaText),n.join(" ")+";"}(e)}catch(e){}return function(e){if(e.includes(":")){return e.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm,"$1\\$2")}return e}(t||e.cssText)}!function(e){e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment"}(_||(_={}));var F=function(){function e(){this.idNodeMap=new Map,this.nodeMetaMap=new WeakMap}return e.prototype.getId=function(e){var t;if(!e)return-1;var n=null===(t=this.getMeta(e))||void 0===t?void 0:t.id;return null!=n?n:-1},e.prototype.getNode=function(e){return this.idNodeMap.get(e)||null},e.prototype.getIds=function(){return Array.from(this.idNodeMap.keys())},e.prototype.getMeta=function(e){return this.nodeMetaMap.get(e)||null},e.prototype.removeNodeFromMap=function(e){var t=this,n=this.getId(e);this.idNodeMap.delete(n),e.childNodes&&e.childNodes.forEach((function(e){return t.removeNodeFromMap(e)}))},e.prototype.has=function(e){return this.idNodeMap.has(e)},e.prototype.hasNode=function(e){return this.nodeMetaMap.has(e)},e.prototype.add=function(e,t){var n=t.id;this.idNodeMap.set(n,e),this.nodeMetaMap.set(e,t)},e.prototype.replace=function(e,t){var n=this.getNode(e);if(n){var r=this.nodeMetaMap.get(n);r&&this.nodeMetaMap.set(t,r)}this.idNodeMap.set(e,t)},e.prototype.reset=function(){this.idNodeMap=new Map,this.nodeMetaMap=new WeakMap},e}();function U(e){var t=e.element,n=e.maskInputOptions,r=e.tagName,s=e.type,i=e.value,o=e.maskInputFn,a=i||"",c=s&&V(s);return(n[r.toLowerCase()]||c&&n[c])&&(a=o?o(a,t):"*".repeat(a.length)),a}function V(e){return e.toLowerCase()}function B(e){var t=e.type;return e.hasAttribute("data-rr-is-password")?"password":t?V(t):null}var W,G,H=1,q=new RegExp("[^a-z0-9-_:]");function j(){return H++}var Z=/url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,z=/^(?:[a-z+]+:)?\/\//i,K=/^www\..*/i,$=/^(data:)([^,]*),(.*)/i;function J(e,t){return(e||"").replace(Z,(function(e,n,r,s,i,o){var a,c=r||i||o,l=n||s||"";if(!c)return e;if(z.test(c)||K.test(c))return"url(".concat(l).concat(c).concat(l,")");if($.test(c))return"url(".concat(l).concat(c).concat(l,")");if("/"===c[0])return"url(".concat(l).concat((a=t,(a.indexOf("//")>-1?a.split("/").slice(0,3).join("/"):a.split("/")[0]).split("?")[0]+c)).concat(l,")");var u=t.split("/"),d=c.split("/");u.pop();for(var h=0,p=d;h<p.length;h++){var g=p[h];"."!==g&&(".."===g?u.pop():u.push(g))}return"url(".concat(l).concat(u.join("/")).concat(l,")")}))}var Q=/^[^ \t\n\r\u000c]+/,Y=/^[, \t\n\r\u000c]+/;function X(e,t){if(!t||""===t.trim())return t;var n=e.createElement("a");return n.href=t,n.href}function ee(){var e=document.createElement("a");return e.href="",e.href}function te(e,t,n,r){return r?"src"===n||"href"===n&&("use"!==t||"#"!==r[0])||"xlink:href"===n&&"#"!==r[0]?X(e,r):"background"!==n||"table"!==t&&"td"!==t&&"th"!==t?"srcset"===n?function(e,t){if(""===t.trim())return t;var n=0;function r(e){var r,s=e.exec(t.substring(n));return s?(r=s[0],n+=r.length,r):""}for(var s=[];r(Y),!(n>=t.length);){var i=r(Q);if(","===i.slice(-1))i=X(e,i.substring(0,i.length-1)),s.push(i);else{var o="";i=X(e,i);for(var a=!1;;){var c=t.charAt(n);if(""===c){s.push((i+o).trim());break}if(a)")"===c&&(a=!1);else{if(","===c){n+=1,s.push((i+o).trim());break}"("===c&&(a=!0)}o+=c,n+=1}}}return s.join(", ")}(e,r):"style"===n?J(r,ee()):"object"===t&&"data"===n?X(e,r):r:X(e,r):r}function ne(e,t,n){return("video"===e||"audio"===e)&&"autoplay"===t}function re(e,t,n){if(!e)return!1;if(e.nodeType!==e.ELEMENT_NODE)return!!n&&re(e.parentNode,t,n);for(var r=e.classList.length;r--;){var s=e.classList[r];if(t.test(s))return!0}return!!n&&re(e.parentNode,t,n)}function se(e,t,n){try{var r=e.nodeType===e.ELEMENT_NODE?e:e.parentElement;if(null===r)return!1;if("string"==typeof t){if(r.classList.contains(t))return!0;if(r.closest(".".concat(t)))return!0}else if(re(r,t,!0))return!0;if(n){if(r.matches(n))return!0;if(r.closest(n))return!0}}catch(e){}return!1}function ie(e,t){var n=t.doc,r=t.mirror,s=t.blockClass,i=t.blockSelector,o=t.maskTextClass,a=t.maskTextSelector,c=t.inlineStylesheet,l=t.maskInputOptions,u=void 0===l?{}:l,d=t.maskTextFn,h=t.maskInputFn,p=t.dataURLOptions,g=void 0===p?{}:p,m=t.inlineImages,f=t.recordCanvas,v=t.keepIframeSrcFn,y=t.newlyAddedElement,I=void 0!==y&&y,b=t.maskCurrentNode,C=function(e,t){if(!t.hasNode(e))return;var n=t.getId(e);return 1===n?void 0:n}(n,r);switch(e.nodeType){case e.DOCUMENT_NODE:return"CSS1Compat"!==e.compatMode?{type:_.Document,childNodes:[],compatMode:e.compatMode}:{type:_.Document,childNodes:[]};case e.DOCUMENT_TYPE_NODE:return{type:_.DocumentType,name:e.name,publicId:e.publicId,systemId:e.systemId,rootId:C};case e.ELEMENT_NODE:return function(e,t){for(var n=t.doc,r=t.blockClass,s=t.blockSelector,i=t.inlineStylesheet,o=t.maskInputOptions,a=void 0===o?{}:o,c=t.maskInputFn,l=t.dataURLOptions,u=void 0===l?{}:l,d=t.inlineImages,h=t.recordCanvas,p=t.keepIframeSrcFn,g=t.newlyAddedElement,m=void 0!==g&&g,f=t.rootId,v=function(e,t,n){try{if("string"==typeof t){if(e.classList.contains(t))return!0}else for(var r=e.classList.length;r--;){var s=e.classList[r];if(t.test(s))return!0}if(n)return e.matches(n)}catch(e){}return!1}(e,r,s),y=function(e){if(e instanceof HTMLFormElement)return"form";var t=V(e.tagName);return q.test(t)?"div":t}(e),I={},b=e.attributes.length,C=0;C<b;C++){var S=e.attributes[C];ne(y,S.name,S.value)||(I[S.name]=te(n,y,V(S.name),S.value))}if("link"===y&&i){var w=Array.from(n.styleSheets).find((function(t){return t.href===e.href})),A=null;w&&(A=x(w)),A&&(delete I.rel,delete I.href,I._cssText=J(A,w.href))}if("style"===y&&e.sheet&&!(e.innerText||e.textContent||"").trim().length){(A=x(e.sheet))&&(I._cssText=J(A,ee()))}if("input"===y||"textarea"===y||"select"===y){var E=e.value,k=e.checked;if("radio"!==I.type&&"checkbox"!==I.type&&"submit"!==I.type&&"button"!==I.type&&E){var R=B(e);I.value=U({element:e,type:R,tagName:y,value:E,maskInputOptions:a,maskInputFn:c})}else k&&(I.checked=k)}"option"===y&&(e.selected&&!a.select?I.selected=!0:delete I.selected);if("canvas"===y&&h)if("2d"===e.__context)(function(e){var t=e.getContext("2d");if(!t)return!0;for(var n=0;n<e.width;n+=50)for(var r=0;r<e.height;r+=50){var s=t.getImageData,i="__rrweb_original__"in s?s.__rrweb_original__:s;if(new Uint32Array(i.call(t,n,r,Math.min(50,e.width-n),Math.min(50,e.height-r)).data.buffer).some((function(e){return 0!==e})))return!1}return!0})(e)||(I.rr_dataURL=e.toDataURL(u.type,u.quality));else if(!("__context"in e)){var T=e.toDataURL(u.type,u.quality),M=document.createElement("canvas");M.width=e.width,M.height=e.height;var N=M.toDataURL(u.type,u.quality);T!==N&&(I.rr_dataURL=T)}if("img"===y&&d){W||(W=n.createElement("canvas"),G=W.getContext("2d"));var O=e,D=O.crossOrigin;O.crossOrigin="anonymous";var L=function(){O.removeEventListener("load",L);try{W.width=O.naturalWidth,W.height=O.naturalHeight,G.drawImage(O,0,0),I.rr_dataURL=W.toDataURL(u.type,u.quality)}catch(e){}D?I.crossOrigin=D:O.removeAttribute("crossorigin")};O.complete&&0!==O.naturalWidth?L():O.addEventListener("load",L)}"audio"!==y&&"video"!==y||(I.rr_mediaState=e.paused?"paused":"played",I.rr_mediaCurrentTime=e.currentTime);m||(e.scrollLeft&&(I.rr_scrollLeft=e.scrollLeft),e.scrollTop&&(I.rr_scrollTop=e.scrollTop));if(v){var P=e.getBoundingClientRect(),F=P.width,H=P.height;I={class:I.class,rr_width:"".concat(F,"px"),rr_height:"".concat(H,"px")}}"iframe"!==y||p(I.src)||(e.contentDocument||(I.rr_src=I.src),delete I.src);return{type:_.Element,tagName:y,attributes:I,childNodes:[],isSVG:(j=e,Boolean("svg"===j.tagName||j.ownerSVGElement)||void 0),needBlock:v,rootId:f};var j}(e,{doc:n,blockClass:s,blockSelector:i,inlineStylesheet:c,maskInputOptions:u,maskInputFn:h,dataURLOptions:g,inlineImages:m,recordCanvas:f,keepIframeSrcFn:v,newlyAddedElement:I,rootId:C});case e.TEXT_NODE:return function(e,t){var n,r=t.maskTextClass,s=t.maskTextSelector,i=t.maskTextFn,o=t.rootId,a=t.maskCurrentNode,c=e.parentNode&&e.parentNode.tagName,l=e.textContent,u="STYLE"===c||void 0,d="SCRIPT"===c||void 0;if(u&&l){try{e.nextSibling||e.previousSibling||(null===(n=e.parentNode.sheet)||void 0===n?void 0:n.cssRules)&&(l=x(e.parentNode.sheet))}catch(e){}l=J(l,ee())}d&&(l="SCRIPT_PLACEHOLDER");if(!u&&!d&&l){(void 0===a?se(e,r,s):a)&&(l=i?i(l):l.replace(/[\S]/g,"*"))}return{type:_.Text,textContent:l||"",isStyle:u,rootId:o}}(e,{maskTextClass:o,maskTextSelector:a,maskTextFn:d,rootId:C,maskCurrentNode:b});case e.CDATA_SECTION_NODE:return{type:_.CDATA,textContent:"",rootId:C};case e.COMMENT_NODE:return{type:_.Comment,textContent:e.textContent||"",rootId:C};default:return!1}}function oe(e){return null==e?"":e.toLowerCase()}function ae(e,t){var n=t.doc,r=t.mirror,s=t.blockClass,i=t.blockSelector,o=t.maskTextClass,a=t.maskTextSelector,c=t.skipChild,l=void 0!==c&&c,u=t.inlineStylesheet,d=void 0===u||u,h=t.maskInputOptions,p=void 0===h?{}:h,g=t.maskTextFn,m=t.maskInputFn,f=t.slimDOMOptions,v=t.dataURLOptions,y=void 0===v?{}:v,I=t.inlineImages,b=void 0!==I&&I,C=t.recordCanvas,S=void 0!==C&&C,w=t.onSerialize,A=t.onIframeLoad,E=t.iframeLoadTimeout,k=void 0===E?5e3:E,R=t.onStylesheetLoad,T=t.stylesheetLoadTimeout,M=void 0===T?5e3:T,N=t.keepIframeSrcFn,x=void 0===N?function(){return!1}:N,P=t.newlyAddedElement,F=void 0!==P&&P,U=t.maskedElements,V=void 0===U?[]:U,B=t.preserveWhiteSpace,W=void 0===B||B,G=t.maskCurrentNode;!1===G&&(G=V.includes(e));var H,q=ie(e,{doc:n,mirror:r,blockClass:s,blockSelector:i,maskTextClass:o,maskTextSelector:a,inlineStylesheet:d,maskInputOptions:p,maskTextFn:g,maskInputFn:m,dataURLOptions:y,inlineImages:b,recordCanvas:S,keepIframeSrcFn:x,newlyAddedElement:F,maskCurrentNode:G});if(!q)return null;H=r.hasNode(e)?r.getId(e):!function(e,t){if(t.comment&&e.type===_.Comment)return!0;if(e.type===_.Element){if(t.script&&("script"===e.tagName||"link"===e.tagName&&("preload"===e.attributes.rel||"modulepreload"===e.attributes.rel)&&"script"===e.attributes.as||"link"===e.tagName&&"prefetch"===e.attributes.rel&&"string"==typeof e.attributes.href&&e.attributes.href.endsWith(".js")))return!0;if(t.headFavicon&&("link"===e.tagName&&"shortcut icon"===e.attributes.rel||"meta"===e.tagName&&(oe(e.attributes.name).match(/^msapplication-tile(image|color)$/)||"application-name"===oe(e.attributes.name)||"icon"===oe(e.attributes.rel)||"apple-touch-icon"===oe(e.attributes.rel)||"shortcut icon"===oe(e.attributes.rel))))return!0;if("meta"===e.tagName){if(t.headMetaDescKeywords&&oe(e.attributes.name).match(/^description|keywords$/))return!0;if(t.headMetaSocial&&(oe(e.attributes.property).match(/^(og|twitter|fb):/)||oe(e.attributes.name).match(/^(og|twitter):/)||"pinterest"===oe(e.attributes.name)))return!0;if(t.headMetaRobots&&("robots"===oe(e.attributes.name)||"googlebot"===oe(e.attributes.name)||"bingbot"===oe(e.attributes.name)))return!0;if(t.headMetaHttpEquiv&&void 0!==e.attributes["http-equiv"])return!0;if(t.headMetaAuthorship&&("author"===oe(e.attributes.name)||"generator"===oe(e.attributes.name)||"framework"===oe(e.attributes.name)||"publisher"===oe(e.attributes.name)||"progid"===oe(e.attributes.name)||oe(e.attributes.property).match(/^article:/)||oe(e.attributes.property).match(/^product:/)))return!0;if(t.headMetaVerification&&("google-site-verification"===oe(e.attributes.name)||"yandex-verification"===oe(e.attributes.name)||"csrf-token"===oe(e.attributes.name)||"p:domain_verify"===oe(e.attributes.name)||"verify-v1"===oe(e.attributes.name)||"verification"===oe(e.attributes.name)||"shopify-checkout-api-token"===oe(e.attributes.name)))return!0}}return!1}(q,f)&&(W||q.type!==_.Text||q.isStyle||q.textContent.replace(/^\s+|\s+$/gm,"").length)?j():-2;var Z=Object.assign(q,{id:H});if(r.add(e,Z),-2===H)return null;w&&w(e);var z=!l;if(Z.type===_.Element){z=z&&!Z.needBlock,delete Z.needBlock;var K=e.shadowRoot;K&&L(K)&&(Z.isShadowHost=!0)}if((Z.type===_.Document||Z.type===_.Element)&&z){f.headWhitespace&&Z.type===_.Element&&"head"===Z.tagName&&(W=!1);for(var $={doc:n,mirror:r,blockClass:s,blockSelector:i,maskTextClass:o,maskTextSelector:a,skipChild:l,inlineStylesheet:d,maskInputOptions:p,maskTextFn:g,maskInputFn:m,slimDOMOptions:f,dataURLOptions:y,inlineImages:b,recordCanvas:S,preserveWhiteSpace:W,onSerialize:w,onIframeLoad:A,iframeLoadTimeout:k,onStylesheetLoad:R,stylesheetLoadTimeout:M,keepIframeSrcFn:x,maskCurrentNode:G,maskedElements:V},J=0,Q=Array.from(e.childNodes);J<Q.length;J++){(ee=ae(Q[J],$))&&Z.childNodes.push(ee)}if(O(e)&&e.shadowRoot)for(var Y=0,X=Array.from(e.shadowRoot.childNodes);Y<X.length;Y++){var ee;(ee=ae(X[Y],$))&&(L(e.shadowRoot)&&(ee.isShadow=!0),Z.childNodes.push(ee))}}return e.parentNode&&D(e.parentNode)&&L(e.parentNode)&&(Z.isShadow=!0),Z.type===_.Element&&"iframe"===Z.tagName&&function(e,t,n){var r=e.contentWindow;if(r){var s,i=!1;try{s=r.document.readyState}catch(e){return}if("complete"===s){if("about:blank"!==r.location.href||"about:blank"===e.src||""===e.src)return setTimeout(t,0),e.addEventListener("load",t);e.addEventListener("load",t)}else{var o=setTimeout((function(){i||(t(),i=!0)}),n);e.addEventListener("load",(function(){clearTimeout(o),i=!0,t()}))}}}(e,(function(){var t=e.contentDocument;if(t&&A){var n=ae(t,{doc:t,mirror:r,blockClass:s,blockSelector:i,maskTextClass:o,maskTextSelector:a,skipChild:!1,inlineStylesheet:d,maskInputOptions:p,maskTextFn:g,maskInputFn:m,slimDOMOptions:f,dataURLOptions:y,inlineImages:b,recordCanvas:S,preserveWhiteSpace:W,onSerialize:w,onIframeLoad:A,iframeLoadTimeout:k,onStylesheetLoad:R,stylesheetLoadTimeout:M,keepIframeSrcFn:x,maskCurrentNode:G,maskedElements:V});n&&A(e,n)}}),k),Z.type===_.Element&&"link"===Z.tagName&&"stylesheet"===Z.attributes.rel&&function(e,t,n){var r,s=!1;try{r=e.sheet}catch(e){return}if(!r){var i=setTimeout((function(){s||(t(),s=!0)}),n);e.addEventListener("load",(function(){clearTimeout(i),s=!0,t()}))}}(e,(function(){if(R){var t=ae(e,{doc:n,mirror:r,blockClass:s,blockSelector:i,maskTextClass:o,maskTextSelector:a,skipChild:!1,inlineStylesheet:d,maskInputOptions:p,maskTextFn:g,maskInputFn:m,slimDOMOptions:f,dataURLOptions:y,inlineImages:b,recordCanvas:S,preserveWhiteSpace:W,onSerialize:w,onIframeLoad:A,iframeLoadTimeout:k,onStylesheetLoad:R,stylesheetLoadTimeout:M,keepIframeSrcFn:x,maskCurrentNode:G,maskedElements:V});t&&R(e,t)}}),M),Z}var ce=/([^\\]):hover/;new RegExp(ce.source,"g");function le(e,t,n=document){const r={capture:!0,passive:!0};return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}let ue={map:{},getId:()=>-1,getNode:()=>null,removeNodeFromMap(){},has:()=>!1,reset(){}};function de(e,t,n={}){let r=null,s=0;return function(...i){const o=Date.now();s||!1!==n.leading||(s=o);const a=t-(o-s),c=this;a<=0||a>t?(r&&(clearTimeout(r),r=null),s=o,e.apply(c,i)):r||!1===n.trailing||(r=setTimeout(()=>{s=!1===n.leading?0:Date.now(),r=null,e.apply(c,i)},a))}}function he(e,t,n,r,s=window){const i=s.Object.getOwnPropertyDescriptor(e,t);return s.Object.defineProperty(e,t,r?n:{set(e){setTimeout(()=>{n.set.call(this,e)},0),i&&i.set&&i.set.call(this,e)}}),()=>he(e,t,i||{},!0)}function pe(e,t,n){try{if(!(t in e))return()=>{};const r=e[t],s=n(r);return"function"==typeof s&&(s.prototype=s.prototype||{},Object.defineProperties(s,{__rrweb_original__:{enumerable:!1,value:r}})),e[t]=s,()=>{e[t]=r}}catch(e){return()=>{}}}"undefined"!=typeof window&&window.Proxy&&window.Reflect&&(ue=new Proxy(ue,{get:(e,t,n)=>Reflect.get(e,t,n)}));let ge=Date.now;function me(e){var t,n,r,s,i,o;const a=e.document;return{left:a.scrollingElement?a.scrollingElement.scrollLeft:void 0!==e.pageXOffset?e.pageXOffset:(null==a?void 0:a.documentElement.scrollLeft)||(null===(n=null===(t=null==a?void 0:a.body)||void 0===t?void 0:t.parentElement)||void 0===n?void 0:n.scrollLeft)||(null===(r=null==a?void 0:a.body)||void 0===r?void 0:r.scrollLeft)||0,top:a.scrollingElement?a.scrollingElement.scrollTop:void 0!==e.pageYOffset?e.pageYOffset:(null==a?void 0:a.documentElement.scrollTop)||(null===(i=null===(s=null==a?void 0:a.body)||void 0===s?void 0:s.parentElement)||void 0===i?void 0:i.scrollTop)||(null===(o=null==a?void 0:a.body)||void 0===o?void 0:o.scrollTop)||0}}function fe(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight}function ve(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth}function ye(e,t,n,r){if(!e)return!1;const s=e.nodeType===e.ELEMENT_NODE?e:e.parentElement;if(!s)return!1;try{if("string"==typeof t){if(s.classList.contains(t))return!0;if(r&&null!==s.closest("."+t))return!0}else if(re(s,t,r))return!0}catch(e){}if(n){if(s.matches(n))return!0;if(r&&null!==s.closest(n))return!0}return!1}function Ie(e,t){return-2===t.getId(e)}function be(e){return Boolean(e.changedTouches)}function Ce(e,t){return Boolean("IFRAME"===e.nodeName&&t.getMeta(e))}function Se(e,t){return Boolean("LINK"===e.nodeName&&e.nodeType===e.ELEMENT_NODE&&e.getAttribute&&"stylesheet"===e.getAttribute("rel")&&t.getMeta(e))}function we(e){return Boolean(null==e?void 0:e.shadowRoot)}/[1-9][0-9]{12}/.test(Date.now().toString())||(ge=()=>(new Date).getTime());class Ae{constructor(){this.id=1,this.styleIDMap=new WeakMap,this.idStyleMap=new Map}getId(e){var t;return null!==(t=this.styleIDMap.get(e))&&void 0!==t?t:-1}has(e){return this.styleIDMap.has(e)}add(e,t){if(this.has(e))return this.getId(e);let n;return n=void 0===t?this.id++:t,this.styleIDMap.set(e,n),this.idStyleMap.set(n,e),n}getStyle(e){return this.idStyleMap.get(e)||null}reset(){this.styleIDMap=new WeakMap,this.idStyleMap=new Map,this.id=1}generateId(){return this.id++}}function Ee(e){var t,n;let r=null;return(null===(n=null===(t=e.getRootNode)||void 0===t?void 0:t.call(e))||void 0===n?void 0:n.nodeType)===Node.DOCUMENT_FRAGMENT_NODE&&e.getRootNode().host&&(r=e.getRootNode().host),r}function ke(e){const t=e.ownerDocument;if(!t)return!1;const n=function(e){let t,n=e;for(;t=Ee(n);)n=t;return n}(e);return t.contains(n)}function Re(e){const t=e.ownerDocument;return!!t&&(t.contains(e)||ke(e))}var Te=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(Te||{}),_e=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e))(_e||{}),Me=(e=>(e[e.MouseUp=0]="MouseUp",e[e.MouseDown=1]="MouseDown",e[e.Click=2]="Click",e[e.ContextMenu=3]="ContextMenu",e[e.DblClick=4]="DblClick",e[e.Focus=5]="Focus",e[e.Blur=6]="Blur",e[e.TouchStart=7]="TouchStart",e[e.TouchMove_Departed=8]="TouchMove_Departed",e[e.TouchEnd=9]="TouchEnd",e[e.TouchCancel=10]="TouchCancel",e))(Me||{}),Ne=(e=>(e[e.Mouse=0]="Mouse",e[e.Pen=1]="Pen",e[e.Touch=2]="Touch",e))(Ne||{}),Oe=(e=>(e[e["2D"]=0]="2D",e[e.WebGL=1]="WebGL",e[e.WebGL2=2]="WebGL2",e))(Oe||{});function De(e){return"__ln"in e}class Le{constructor(){this.length=0,this.head=null,this.tail=null}get(e){if(e>=this.length)throw new Error("Position outside of list range");let t=this.head;for(let n=0;n<e;n++)t=(null==t?void 0:t.next)||null;return t}addNode(e){const t={value:e,previous:null,next:null};if(e.__ln=t,e.previousSibling&&De(e.previousSibling)){const n=e.previousSibling.__ln.next;t.next=n,t.previous=e.previousSibling.__ln,e.previousSibling.__ln.next=t,n&&(n.previous=t)}else if(e.nextSibling&&De(e.nextSibling)&&e.nextSibling.__ln.previous){const n=e.nextSibling.__ln.previous;t.previous=n,t.next=e.nextSibling.__ln,e.nextSibling.__ln.previous=t,n&&(n.next=t)}else this.head&&(this.head.previous=t),t.next=this.head,this.head=t;null===t.next&&(this.tail=t),this.length++}removeNode(e){const t=e.__ln;this.head&&(t.previous?(t.previous.next=t.next,t.next?t.next.previous=t.previous:this.tail=t.previous):(this.head=t.next,this.head?this.head.previous=null:this.tail=null),e.__ln&&delete e.__ln,this.length--)}}const xe=(e,t)=>`${e}@${t}`;class Pe{constructor(){this.frozen=!1,this.locked=!1,this.texts=[],this.attributes=[],this.removes=[],this.mapRemoves=[],this.movedMap={},this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.processMutations=e=>{e.forEach(this.processMutation),this.emit()},this.emit=()=>{if(this.frozen||this.locked)return;const e=[],t=new Set,n=new Le,r=e=>{let t=e,n=-2;for(;-2===n;)t=t&&t.nextSibling,n=t&&this.mirror.getId(t);return n},s=s=>{if(!s.parentNode||!Re(s))return;const i=D(s.parentNode)?this.mirror.getId(Ee(s)):this.mirror.getId(s.parentNode),o=r(s);if(-1===i||-1===o)return n.addNode(s);const a=ae(s,{doc:this.doc,mirror:this.mirror,blockClass:this.blockClass,blockSelector:this.blockSelector,maskTextClass:this.maskTextClass,maskTextSelector:this.maskTextSelector,skipChild:!0,newlyAddedElement:!0,inlineStylesheet:this.inlineStylesheet,maskInputOptions:this.maskInputOptions,maskTextFn:this.maskTextFn,maskInputFn:this.maskInputFn,slimDOMOptions:this.slimDOMOptions,dataURLOptions:this.dataURLOptions,recordCanvas:this.recordCanvas,inlineImages:this.inlineImages,onSerialize:e=>{Ce(e,this.mirror)&&this.iframeManager.addIframe(e),Se(e,this.mirror)&&this.stylesheetManager.trackLinkElement(e),we(s)&&this.shadowDomManager.addShadowRoot(s.shadowRoot,this.doc)},onIframeLoad:(e,t)=>{this.iframeManager.attachIframe(e,t),this.shadowDomManager.observeAttachShadow(e)},onStylesheetLoad:(e,t)=>{this.stylesheetManager.attachLinkElement(e,t)}});a&&(e.push({parentId:i,nextId:o,node:a}),t.add(a.id))};for(;this.mapRemoves.length;)this.mirror.removeNodeFromMap(this.mapRemoves.shift());for(const e of this.movedSet)Ue(this.removes,e,this.mirror)&&!this.movedSet.has(e.parentNode)||s(e);for(const e of this.addedSet)Ve(this.droppedSet,e)||Ue(this.removes,e,this.mirror)?Ve(this.movedSet,e)?s(e):this.droppedSet.add(e):s(e);let i=null;for(;n.length;){let e=null;if(i){const t=this.mirror.getId(i.value.parentNode),n=r(i.value);-1!==t&&-1!==n&&(e=i)}if(!e){let t=n.tail;for(;t;){const n=t;if(t=t.previous,n){const t=this.mirror.getId(n.value.parentNode);if(-1===r(n.value))continue;if(-1!==t){e=n;break}{const t=n.value;if(t.parentNode&&t.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE){const r=t.parentNode.host;if(-1!==this.mirror.getId(r)){e=n;break}}}}}}if(!e){for(;n.head;)n.removeNode(n.head.value);break}i=e.previous,n.removeNode(e.value),s(e.value)}const o={texts:this.texts.map(e=>({id:this.mirror.getId(e.node),value:e.value})).filter(e=>!t.has(e.id)).filter(e=>this.mirror.has(e.id)),attributes:this.attributes.map(e=>{const{attributes:t}=e;if("string"==typeof t.style){const n=JSON.stringify(e.styleDiff),r=JSON.stringify(e._unchangedStyles);n.length<t.style.length&&(n+r).split("var(").length===t.style.split("var(").length&&(t.style=e.styleDiff)}return{id:this.mirror.getId(e.node),attributes:t}}).filter(e=>!t.has(e.id)).filter(e=>this.mirror.has(e.id)),removes:this.removes,adds:e};(o.texts.length||o.attributes.length||o.removes.length||o.adds.length)&&(this.texts=[],this.attributes=[],this.removes=[],this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.movedMap={},this.mutationCb(o))},this.processMutation=e=>{if(Ie(e.target,this.mirror))return;let t;try{t=document.implementation.createHTMLDocument()}catch(e){t=this.doc}switch(e.type){case"characterData":{const t=e.target.textContent;ye(e.target,this.blockClass,this.blockSelector,!1)||t===e.oldValue||this.texts.push({value:se(e.target,this.maskTextClass,this.maskTextSelector)&&t?this.maskTextFn?this.maskTextFn(t):t.replace(/[\S]/g,"*"):t,node:e.target});break}case"attributes":{const n=e.target;let r=e.attributeName,s=e.target.getAttribute(r);if("value"===r){const e=B(n);s=U({element:n,maskInputOptions:this.maskInputOptions,tagName:n.tagName,type:e,value:s,maskInputFn:this.maskInputFn})}if(ye(e.target,this.blockClass,this.blockSelector,!1)||s===e.oldValue)return;let i=this.attributes.find(t=>t.node===e.target);if("IFRAME"===n.tagName&&"src"===r&&!this.keepIframeSrcFn(s)){if(n.contentDocument)return;try{e.attributeName="rr_src"}catch(e){return}}if(i||(i={node:e.target,attributes:{},styleDiff:{},_unchangedStyles:{}},this.attributes.push(i)),"type"===r&&"INPUT"===n.tagName&&"password"===(e.oldValue||"").toLowerCase()&&n.setAttribute("data-rr-is-password","true"),!ne(n.tagName,r)&&(i.attributes[r]=te(this.doc,V(n.tagName),V(r),s),"style"===r)){const r=t.createElement("span");e.oldValue&&r.setAttribute("style",e.oldValue);for(const e of Array.from(n.style)){const t=n.style.getPropertyValue(e),s=n.style.getPropertyPriority(e);t!==r.style.getPropertyValue(e)||s!==r.style.getPropertyPriority(e)?i.styleDiff[e]=""===s?t:[t,s]:i._unchangedStyles[e]=[t,s]}for(const e of Array.from(r.style))""===n.style.getPropertyValue(e)&&(i.styleDiff[e]=!1)}break}case"childList":if(ye(e.target,this.blockClass,this.blockSelector,!0))return;e.addedNodes.forEach(t=>this.genAdds(t,e.target)),e.removedNodes.forEach(t=>{const n=this.mirror.getId(t),r=D(e.target)?this.mirror.getId(e.target.host):this.mirror.getId(e.target);ye(e.target,this.blockClass,this.blockSelector,!1)||Ie(t,this.mirror)||!function(e,t){return-1!==t.getId(e)}(t,this.mirror)||(this.addedSet.has(t)?(Fe(this.addedSet,t),this.droppedSet.add(t)):this.addedSet.has(e.target)&&-1===n||function e(t,n){if(D(t))return!1;const r=n.getId(t);return!n.has(r)||(!t.parentNode||t.parentNode.nodeType!==t.DOCUMENT_NODE)&&(!t.parentNode||e(t.parentNode,n))}(e.target,this.mirror)||(this.movedSet.has(t)&&this.movedMap[xe(n,r)]?Fe(this.movedSet,t):this.removes.push({parentId:r,id:n,isShadow:!(!D(e.target)||!L(e.target))||void 0})),this.mapRemoves.push(t))})}},this.genAdds=(e,t)=>{if(!this.processedNodeManager.inOtherBuffer(e,this)&&!this.addedSet.has(e)&&!this.movedSet.has(e)){if(this.mirror.hasNode(e)){if(Ie(e,this.mirror))return;this.movedSet.add(e);let n=null;t&&this.mirror.hasNode(t)&&(n=this.mirror.getId(t)),n&&-1!==n&&(this.movedMap[xe(this.mirror.getId(e),n)]=!0)}else this.addedSet.add(e),this.droppedSet.delete(e);ye(e,this.blockClass,this.blockSelector,!1)||(e.childNodes.forEach(e=>this.genAdds(e)),we(e)&&e.shadowRoot.childNodes.forEach(t=>{this.processedNodeManager.add(t,this),this.genAdds(t,e)}))}}}init(e){["mutationCb","blockClass","blockSelector","maskTextClass","maskTextSelector","inlineStylesheet","maskInputOptions","maskTextFn","maskInputFn","keepIframeSrcFn","recordCanvas","inlineImages","slimDOMOptions","dataURLOptions","doc","mirror","iframeManager","stylesheetManager","shadowDomManager","canvasManager","processedNodeManager"].forEach(t=>{this[t]=e[t]})}freeze(){this.frozen=!0,this.canvasManager.freeze()}unfreeze(){this.frozen=!1,this.canvasManager.unfreeze(),this.emit()}isFrozen(){return this.frozen}lock(){this.locked=!0,this.canvasManager.lock()}unlock(){this.locked=!1,this.canvasManager.unlock(),this.emit()}reset(){this.shadowDomManager.reset(),this.canvasManager.reset()}}function Fe(e,t){e.delete(t),t.childNodes.forEach(t=>Fe(e,t))}function Ue(e,t,n){return 0!==e.length&&function e(t,n,r){const{parentNode:s}=n;if(!s)return!1;const i=r.getId(s);if(t.some(e=>e.id===i))return!0;return e(t,s,r)}(e,t,n)}function Ve(e,t){return 0!==e.size&&function e(t,n){const{parentNode:r}=n;if(!r)return!1;if(t.has(r))return!0;return e(t,r)}(e,t)}let Be;function We(e){Be=e}function Ge(){Be=void 0}const He=e=>{if(!Be)return e;return(...t)=>{try{return e(...t)}catch(e){if(Be&&!0===Be(e))return;throw e}}},qe=[];function je(e){try{if("composedPath"in e){const t=e.composedPath();if(t.length)return t[0]}else if("path"in e&&e.path.length)return e.path[0]}catch(e){}return e&&e.target}function Ze(e,t){var n,r;const s=new Pe;qe.push(s),s.init(e);let i=window.MutationObserver||window.__rrMutationObserver;const o=null===(r=null===(n=null===window||void 0===window?void 0:window.Zone)||void 0===n?void 0:n.__symbol__)||void 0===r?void 0:r.call(n,"MutationObserver");o&&window[o]&&(i=window[o]);const a=new i(He(s.processMutations.bind(s)));return a.observe(t,{attributes:!0,attributeOldValue:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0}),a}function ze({mouseInteractionCb:e,doc:t,mirror:n,blockClass:r,blockSelector:s,sampling:i}){if(!1===i.mouseInteraction)return()=>{};const o=!0===i.mouseInteraction||void 0===i.mouseInteraction?{}:i.mouseInteraction,a=[];let c=null;return Object.keys(Me).filter(e=>Number.isNaN(Number(e))&&!e.endsWith("_Departed")&&!1!==o[e]).forEach(i=>{let o=V(i);const l=(t=>i=>{const o=je(i);if(ye(o,r,s,!0))return;let a=null,l=t;if("pointerType"in i){switch(i.pointerType){case"mouse":a=Ne.Mouse;break;case"touch":a=Ne.Touch;break;case"pen":a=Ne.Pen}a===Ne.Touch?Me[t]===Me.MouseDown?l="TouchStart":Me[t]===Me.MouseUp&&(l="TouchEnd"):Ne.Pen}else be(i)&&(a=Ne.Touch);null!==a?(c=a,(l.startsWith("Touch")&&a===Ne.Touch||l.startsWith("Mouse")&&a===Ne.Mouse)&&(a=null)):Me[t]===Me.Click&&(a=c,c=null);const u=be(i)?i.changedTouches[0]:i;if(!u)return;const d=n.getId(o),{clientX:h,clientY:p}=u;He(e)(Object.assign({type:Me[l],id:d,x:h,y:p},null!==a&&{pointerType:a}))})(i);if(window.PointerEvent)switch(Me[i]){case Me.MouseDown:case Me.MouseUp:o=o.replace("mouse","pointer");break;case Me.TouchStart:case Me.TouchEnd:return}a.push(le(o,l,t))}),He(()=>{a.forEach(e=>e())})}function Ke({scrollCb:e,doc:t,mirror:n,blockClass:r,blockSelector:s,sampling:i}){return le("scroll",He(de(He(i=>{const o=je(i);if(!o||ye(o,r,s,!0))return;const a=n.getId(o);if(o===t&&t.defaultView){const n=me(t.defaultView);e({id:a,x:n.left,y:n.top})}else e({id:a,x:o.scrollLeft,y:o.scrollTop})}),i.scroll||100)),t)}function $e(e,t){const n=Object.assign({},e);return t||delete n.userTriggered,n}const Je=["INPUT","TEXTAREA","SELECT"],Qe=new WeakMap;function Ye(e){return function(e,t){if(nt("CSSGroupingRule")&&e.parentRule instanceof CSSGroupingRule||nt("CSSMediaRule")&&e.parentRule instanceof CSSMediaRule||nt("CSSSupportsRule")&&e.parentRule instanceof CSSSupportsRule||nt("CSSConditionRule")&&e.parentRule instanceof CSSConditionRule){const n=Array.from(e.parentRule.cssRules).indexOf(e);t.unshift(n)}else if(e.parentStyleSheet){const n=Array.from(e.parentStyleSheet.cssRules).indexOf(e);t.unshift(n)}return t}(e,[])}function Xe(e,t,n){let r,s;return e?(e.ownerNode?r=t.getId(e.ownerNode):s=n.getId(e),{styleId:s,id:r}):{}}function et({mirror:e,stylesheetManager:t},n){var r,s,i;let o=null;o="#document"===n.nodeName?e.getId(n):e.getId(n.host);const a="#document"===n.nodeName?null===(r=n.defaultView)||void 0===r?void 0:r.Document:null===(i=null===(s=n.ownerDocument)||void 0===s?void 0:s.defaultView)||void 0===i?void 0:i.ShadowRoot,c=Object.getOwnPropertyDescriptor(null==a?void 0:a.prototype,"adoptedStyleSheets");return null!==o&&-1!==o&&a&&c?(Object.defineProperty(n,"adoptedStyleSheets",{configurable:c.configurable,enumerable:c.enumerable,get(){var e;return null===(e=c.get)||void 0===e?void 0:e.call(this)},set(e){var n;const r=null===(n=c.set)||void 0===n?void 0:n.call(this,e);if(null!==o&&-1!==o)try{t.adoptStyleSheets(e,o)}catch(e){}return r}}),He(()=>{Object.defineProperty(n,"adoptedStyleSheets",{configurable:c.configurable,enumerable:c.enumerable,get:c.get,set:c.set})})):()=>{}}function tt(e,t={}){const n=e.doc.defaultView;if(!n)return()=>{};!function(e,t){const{mutationCb:n,mousemoveCb:r,mouseInteractionCb:s,scrollCb:i,viewportResizeCb:o,inputCb:a,mediaInteractionCb:c,styleSheetRuleCb:l,styleDeclarationCb:u,canvasMutationCb:d,fontCb:h,selectionCb:p}=e;e.mutationCb=(...e)=>{t.mutation&&t.mutation(...e),n(...e)},e.mousemoveCb=(...e)=>{t.mousemove&&t.mousemove(...e),r(...e)},e.mouseInteractionCb=(...e)=>{t.mouseInteraction&&t.mouseInteraction(...e),s(...e)},e.scrollCb=(...e)=>{t.scroll&&t.scroll(...e),i(...e)},e.viewportResizeCb=(...e)=>{t.viewportResize&&t.viewportResize(...e),o(...e)},e.inputCb=(...e)=>{t.input&&t.input(...e),a(...e)},e.mediaInteractionCb=(...e)=>{t.mediaInteaction&&t.mediaInteaction(...e),c(...e)},e.styleSheetRuleCb=(...e)=>{t.styleSheetRule&&t.styleSheetRule(...e),l(...e)},e.styleDeclarationCb=(...e)=>{t.styleDeclaration&&t.styleDeclaration(...e),u(...e)},e.canvasMutationCb=(...e)=>{t.canvasMutation&&t.canvasMutation(...e),d(...e)},e.fontCb=(...e)=>{t.font&&t.font(...e),h(...e)},e.selectionCb=(...e)=>{t.selection&&t.selection(...e),p(...e)}}(e,t);const r=Ze(e,e.doc),s=function({mousemoveCb:e,sampling:t,doc:n,mirror:r}){if(!1===t.mousemove)return()=>{};const s="number"==typeof t.mousemove?t.mousemove:50,i="number"==typeof t.mousemoveCallback?t.mousemoveCallback:500;let o,a=[];const c=de(He(t=>{const n=Date.now()-o;e(a.map(e=>(e.timeOffset-=n,e)),t),a=[],o=null}),i),l=He(de(He(e=>{const t=je(e),{clientX:n,clientY:s}=be(e)?e.changedTouches[0]:e;o||(o=ge()),a.push({x:n,y:s,id:r.getId(t),timeOffset:ge()-o}),c("undefined"!=typeof DragEvent&&e instanceof DragEvent?_e.Drag:e instanceof MouseEvent?_e.MouseMove:_e.TouchMove)}),s,{trailing:!1})),u=[le("mousemove",l,n),le("touchmove",l,n),le("drag",l,n)];return He(()=>{u.forEach(e=>e())})}(e),i=ze(e),o=Ke(e),a=function({viewportResizeCb:e},{win:t}){let n=-1,r=-1;return le("resize",He(de(He(()=>{const t=fe(),s=ve();n===t&&r===s||(e({width:Number(s),height:Number(t)}),n=t,r=s)}),200)),t)}(e,{win:n}),c=function({inputCb:e,doc:t,mirror:n,blockClass:r,blockSelector:s,ignoreClass:i,ignoreSelector:o,maskInputOptions:a,maskInputFn:c,sampling:l,userTriggeredOnInput:u}){function d(e){let n=je(e);const l=e.isTrusted,d=n&&n.tagName;if(n&&"OPTION"===d&&(n=n.parentElement),!n||!d||Je.indexOf(d)<0||ye(n,r,s,!0))return;if(n.classList.contains(i)||o&&n.matches(o))return;let p=n.value,g=!1;const m=B(n)||"";"radio"===m||"checkbox"===m?g=n.checked:(a[d.toLowerCase()]||a[m])&&(p=U({element:n,maskInputOptions:a,tagName:d,type:m,value:p,maskInputFn:c})),h(n,He($e)({text:p,isChecked:g,userTriggered:l},u));const f=n.name;"radio"===m&&f&&g&&t.querySelectorAll(`input[type="radio"][name="${f}"]`).forEach(e=>{e!==n&&h(e,He($e)({text:e.value,isChecked:!g,userTriggered:!1},u))})}function h(t,r){const s=Qe.get(t);if(!s||s.text!==r.text||s.isChecked!==r.isChecked){Qe.set(t,r);const s=n.getId(t);He(e)(Object.assign(Object.assign({},r),{id:s}))}}const p=("last"===l.input?["change"]:["input","change"]).map(e=>le(e,He(d),t)),g=t.defaultView;if(!g)return()=>{p.forEach(e=>e())};const m=g.Object.getOwnPropertyDescriptor(g.HTMLInputElement.prototype,"value"),f=[[g.HTMLInputElement.prototype,"value"],[g.HTMLInputElement.prototype,"checked"],[g.HTMLSelectElement.prototype,"value"],[g.HTMLTextAreaElement.prototype,"value"],[g.HTMLSelectElement.prototype,"selectedIndex"],[g.HTMLOptionElement.prototype,"selected"]];return m&&m.set&&p.push(...f.map(e=>he(e[0],e[1],{set(){He(d)({target:this,isTrusted:!1})}},!1,g))),He(()=>{p.forEach(e=>e())})}(e),l=function({mediaInteractionCb:e,blockClass:t,blockSelector:n,mirror:r,sampling:s,doc:i}){const o=He(i=>de(He(s=>{const o=je(s);if(!o||ye(o,t,n,!0))return;const{currentTime:a,volume:c,muted:l,playbackRate:u}=o;e({type:i,id:r.getId(o),currentTime:a,volume:c,muted:l,playbackRate:u})}),s.media||500)),a=[le("play",o(0),i),le("pause",o(1),i),le("seeked",o(2),i),le("volumechange",o(3),i),le("ratechange",o(4),i)];return He(()=>{a.forEach(e=>e())})}(e),u=function({styleSheetRuleCb:e,mirror:t,stylesheetManager:n},{win:r}){if(!r.CSSStyleSheet||!r.CSSStyleSheet.prototype)return()=>{};const s=r.CSSStyleSheet.prototype.insertRule;r.CSSStyleSheet.prototype.insertRule=new Proxy(s,{apply:He((r,s,i)=>{const[o,a]=i,{id:c,styleId:l}=Xe(s,t,n.styleMirror);return(c&&-1!==c||l&&-1!==l)&&e({id:c,styleId:l,adds:[{rule:o,index:a}]}),r.apply(s,i)})});const i=r.CSSStyleSheet.prototype.deleteRule;let o,a;r.CSSStyleSheet.prototype.deleteRule=new Proxy(i,{apply:He((r,s,i)=>{const[o]=i,{id:a,styleId:c}=Xe(s,t,n.styleMirror);return(a&&-1!==a||c&&-1!==c)&&e({id:a,styleId:c,removes:[{index:o}]}),r.apply(s,i)})}),r.CSSStyleSheet.prototype.replace&&(o=r.CSSStyleSheet.prototype.replace,r.CSSStyleSheet.prototype.replace=new Proxy(o,{apply:He((r,s,i)=>{const[o]=i,{id:a,styleId:c}=Xe(s,t,n.styleMirror);return(a&&-1!==a||c&&-1!==c)&&e({id:a,styleId:c,replace:o}),r.apply(s,i)})})),r.CSSStyleSheet.prototype.replaceSync&&(a=r.CSSStyleSheet.prototype.replaceSync,r.CSSStyleSheet.prototype.replaceSync=new Proxy(a,{apply:He((r,s,i)=>{const[o]=i,{id:a,styleId:c}=Xe(s,t,n.styleMirror);return(a&&-1!==a||c&&-1!==c)&&e({id:a,styleId:c,replaceSync:o}),r.apply(s,i)})}));const c={};rt("CSSGroupingRule")?c.CSSGroupingRule=r.CSSGroupingRule:(rt("CSSMediaRule")&&(c.CSSMediaRule=r.CSSMediaRule),rt("CSSConditionRule")&&(c.CSSConditionRule=r.CSSConditionRule),rt("CSSSupportsRule")&&(c.CSSSupportsRule=r.CSSSupportsRule));const l={};return Object.entries(c).forEach(([r,s])=>{l[r]={insertRule:s.prototype.insertRule,deleteRule:s.prototype.deleteRule},s.prototype.insertRule=new Proxy(l[r].insertRule,{apply:He((r,s,i)=>{const[o,a]=i,{id:c,styleId:l}=Xe(s.parentStyleSheet,t,n.styleMirror);return(c&&-1!==c||l&&-1!==l)&&e({id:c,styleId:l,adds:[{rule:o,index:[...Ye(s),a||0]}]}),r.apply(s,i)})}),s.prototype.deleteRule=new Proxy(l[r].deleteRule,{apply:He((r,s,i)=>{const[o]=i,{id:a,styleId:c}=Xe(s.parentStyleSheet,t,n.styleMirror);return(a&&-1!==a||c&&-1!==c)&&e({id:a,styleId:c,removes:[{index:[...Ye(s),o]}]}),r.apply(s,i)})})}),He(()=>{r.CSSStyleSheet.prototype.insertRule=s,r.CSSStyleSheet.prototype.deleteRule=i,o&&(r.CSSStyleSheet.prototype.replace=o),a&&(r.CSSStyleSheet.prototype.replaceSync=a),Object.entries(c).forEach(([e,t])=>{t.prototype.insertRule=l[e].insertRule,t.prototype.deleteRule=l[e].deleteRule})})}(e,{win:n}),d=et(e,e.doc),h=function({styleDeclarationCb:e,mirror:t,ignoreCSSAttributes:n,stylesheetManager:r},{win:s}){const i=s.CSSStyleDeclaration.prototype.setProperty;s.CSSStyleDeclaration.prototype.setProperty=new Proxy(i,{apply:He((s,o,a)=>{var c;const[l,u,d]=a;if(n.has(l))return i.apply(o,[l,u,d]);const{id:h,styleId:p}=Xe(null===(c=o.parentRule)||void 0===c?void 0:c.parentStyleSheet,t,r.styleMirror);return(h&&-1!==h||p&&-1!==p)&&e({id:h,styleId:p,set:{property:l,value:u,priority:d},index:Ye(o.parentRule)}),s.apply(o,a)})});const o=s.CSSStyleDeclaration.prototype.removeProperty;return s.CSSStyleDeclaration.prototype.removeProperty=new Proxy(o,{apply:He((s,i,a)=>{var c;const[l]=a;if(n.has(l))return o.apply(i,[l]);const{id:u,styleId:d}=Xe(null===(c=i.parentRule)||void 0===c?void 0:c.parentStyleSheet,t,r.styleMirror);return(u&&-1!==u||d&&-1!==d)&&e({id:u,styleId:d,remove:{property:l},index:Ye(i.parentRule)}),s.apply(i,a)})}),He(()=>{s.CSSStyleDeclaration.prototype.setProperty=i,s.CSSStyleDeclaration.prototype.removeProperty=o})}(e,{win:n}),p=e.collectFonts?function({fontCb:e,doc:t}){const n=t.defaultView;if(!n)return()=>{};const r=[],s=new WeakMap,i=n.FontFace;n.FontFace=function(e,t,n){const r=new i(e,t,n);return s.set(r,{family:e,buffer:"string"!=typeof t,descriptors:n,fontSource:"string"==typeof t?t:JSON.stringify(Array.from(new Uint8Array(t)))}),r};const o=pe(t.fonts,"add",(function(t){return function(n){return setTimeout(He(()=>{const t=s.get(n);t&&(e(t),s.delete(n))}),0),t.apply(this,[n])}}));return r.push(()=>{n.FontFace=i}),r.push(o),He(()=>{r.forEach(e=>e())})}(e):()=>{},g=function(e){const{doc:t,mirror:n,blockClass:r,blockSelector:s,selectionCb:i}=e;let o=!0;const a=He(()=>{const e=t.getSelection();if(!e||o&&(null==e?void 0:e.isCollapsed))return;o=e.isCollapsed||!1;const a=[],c=e.rangeCount||0;for(let t=0;t<c;t++){const i=e.getRangeAt(t),{startContainer:o,startOffset:c,endContainer:l,endOffset:u}=i;ye(o,r,s,!0)||ye(l,r,s,!0)||a.push({start:n.getId(o),startOffset:c,end:n.getId(l),endOffset:u})}i({ranges:a})});return a(),le("selectionchange",a)}(e),m=[];for(const t of e.plugins)m.push(t.observer(t.callback,n,t.options));return He(()=>{qe.forEach(e=>e.reset()),r.disconnect(),s(),i(),o(),a(),c(),l(),u(),d(),h(),p(),g(),m.forEach(e=>e())})}function nt(e){return void 0!==window[e]}function rt(e){return Boolean(void 0!==window[e]&&window[e].prototype&&"insertRule"in window[e].prototype&&"deleteRule"in window[e].prototype)}class st{constructor(e){this.generateIdFn=e,this.iframeIdToRemoteIdMap=new WeakMap,this.iframeRemoteIdToIdMap=new WeakMap}getId(e,t,n,r){const s=n||this.getIdToRemoteIdMap(e),i=r||this.getRemoteIdToIdMap(e);let o=s.get(t);return o||(o=this.generateIdFn(),s.set(t,o),i.set(o,t)),o}getIds(e,t){const n=this.getIdToRemoteIdMap(e),r=this.getRemoteIdToIdMap(e);return t.map(t=>this.getId(e,t,n,r))}getRemoteId(e,t,n){const r=n||this.getRemoteIdToIdMap(e);if("number"!=typeof t)return t;const s=r.get(t);return s||-1}getRemoteIds(e,t){const n=this.getRemoteIdToIdMap(e);return t.map(t=>this.getRemoteId(e,t,n))}reset(e){if(!e)return this.iframeIdToRemoteIdMap=new WeakMap,void(this.iframeRemoteIdToIdMap=new WeakMap);this.iframeIdToRemoteIdMap.delete(e),this.iframeRemoteIdToIdMap.delete(e)}getIdToRemoteIdMap(e){let t=this.iframeIdToRemoteIdMap.get(e);return t||(t=new Map,this.iframeIdToRemoteIdMap.set(e,t)),t}getRemoteIdToIdMap(e){let t=this.iframeRemoteIdToIdMap.get(e);return t||(t=new Map,this.iframeRemoteIdToIdMap.set(e,t)),t}}class it{constructor(e){this.iframes=new WeakMap,this.crossOriginIframeMap=new WeakMap,this.crossOriginIframeMirror=new st(j),this.crossOriginIframeRootIdMap=new WeakMap,this.mutationCb=e.mutationCb,this.wrappedEmit=e.wrappedEmit,this.stylesheetManager=e.stylesheetManager,this.recordCrossOriginIframes=e.recordCrossOriginIframes,this.crossOriginIframeStyleMirror=new st(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),this.mirror=e.mirror,this.recordCrossOriginIframes&&window.addEventListener("message",this.handleMessage.bind(this))}addIframe(e){this.iframes.set(e,!0),e.contentWindow&&this.crossOriginIframeMap.set(e.contentWindow,e)}addLoadListener(e){this.loadListener=e}attachIframe(e,t){var n;this.mutationCb({adds:[{parentId:this.mirror.getId(e),nextId:null,node:t}],removes:[],texts:[],attributes:[],isAttachIframe:!0}),null===(n=this.loadListener)||void 0===n||n.call(this,e),e.contentDocument&&e.contentDocument.adoptedStyleSheets&&e.contentDocument.adoptedStyleSheets.length>0&&this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets,this.mirror.getId(e.contentDocument))}handleMessage(e){const t=e;if("rrweb"!==t.data.type||t.origin!==t.data.origin)return;if(!e.source)return;const n=this.crossOriginIframeMap.get(e.source);if(!n)return;const r=this.transformCrossOriginEvent(n,t.data.event);r&&this.wrappedEmit(r,t.data.isCheckout)}transformCrossOriginEvent(e,t){var n;switch(t.type){case Te.FullSnapshot:{this.crossOriginIframeMirror.reset(e),this.crossOriginIframeStyleMirror.reset(e),this.replaceIdOnNode(t.data.node,e);const n=t.data.node.id;return this.crossOriginIframeRootIdMap.set(e,n),this.patchRootIdOnNode(t.data.node,n),{timestamp:t.timestamp,type:Te.IncrementalSnapshot,data:{source:_e.Mutation,adds:[{parentId:this.mirror.getId(e),nextId:null,node:t.data.node}],removes:[],texts:[],attributes:[],isAttachIframe:!0}}}case Te.Meta:case Te.Load:case Te.DomContentLoaded:return!1;case Te.Plugin:return t;case Te.Custom:return this.replaceIds(t.data.payload,e,["id","parentId","previousId","nextId"]),t;case Te.IncrementalSnapshot:switch(t.data.source){case _e.Mutation:return t.data.adds.forEach(t=>{this.replaceIds(t,e,["parentId","nextId","previousId"]),this.replaceIdOnNode(t.node,e);const n=this.crossOriginIframeRootIdMap.get(e);n&&this.patchRootIdOnNode(t.node,n)}),t.data.removes.forEach(t=>{this.replaceIds(t,e,["parentId","id"])}),t.data.attributes.forEach(t=>{this.replaceIds(t,e,["id"])}),t.data.texts.forEach(t=>{this.replaceIds(t,e,["id"])}),t;case _e.Drag:case _e.TouchMove:case _e.MouseMove:return t.data.positions.forEach(t=>{this.replaceIds(t,e,["id"])}),t;case _e.ViewportResize:return!1;case _e.MediaInteraction:case _e.MouseInteraction:case _e.Scroll:case _e.CanvasMutation:case _e.Input:return this.replaceIds(t.data,e,["id"]),t;case _e.StyleSheetRule:case _e.StyleDeclaration:return this.replaceIds(t.data,e,["id"]),this.replaceStyleIds(t.data,e,["styleId"]),t;case _e.Font:return t;case _e.Selection:return t.data.ranges.forEach(t=>{this.replaceIds(t,e,["start","end"])}),t;case _e.AdoptedStyleSheet:return this.replaceIds(t.data,e,["id"]),this.replaceStyleIds(t.data,e,["styleIds"]),null===(n=t.data.styles)||void 0===n||n.forEach(t=>{this.replaceStyleIds(t,e,["styleId"])}),t}}}replace(e,t,n,r){for(const s of r)(Array.isArray(t[s])||"number"==typeof t[s])&&(Array.isArray(t[s])?t[s]=e.getIds(n,t[s]):t[s]=e.getId(n,t[s]));return t}replaceIds(e,t,n){return this.replace(this.crossOriginIframeMirror,e,t,n)}replaceStyleIds(e,t,n){return this.replace(this.crossOriginIframeStyleMirror,e,t,n)}replaceIdOnNode(e,t){this.replaceIds(e,t,["id","rootId"]),"childNodes"in e&&e.childNodes.forEach(e=>{this.replaceIdOnNode(e,t)})}patchRootIdOnNode(e,t){e.type===_.Document||e.rootId||(e.rootId=t),"childNodes"in e&&e.childNodes.forEach(e=>{this.patchRootIdOnNode(e,t)})}}class ot{constructor(e){this.shadowDoms=new WeakSet,this.restoreHandlers=[],this.mutationCb=e.mutationCb,this.scrollCb=e.scrollCb,this.bypassOptions=e.bypassOptions,this.mirror=e.mirror,this.init()}init(){this.reset(),this.active=!0,this.patchAttachShadow(Element,document)}addShadowRoot(e,t){if(!this.active)return;if(!L(e))return;if(this.shadowDoms.has(e))return;this.shadowDoms.add(e);const n=Ze(Object.assign(Object.assign({},this.bypassOptions),{doc:t,mutationCb:this.mutationCb,mirror:this.mirror,shadowDomManager:this}),e);this.restoreHandlers.push(()=>n.disconnect()),this.restoreHandlers.push(Ke(Object.assign(Object.assign({},this.bypassOptions),{scrollCb:this.scrollCb,doc:e,mirror:this.mirror}))),setTimeout(()=>{e.adoptedStyleSheets&&e.adoptedStyleSheets.length>0&&this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets,this.mirror.getId(e.host)),this.restoreHandlers.push(et({mirror:this.mirror,stylesheetManager:this.bypassOptions.stylesheetManager},e))},0)}observeAttachShadow(e){e.contentWindow&&e.contentDocument&&this.patchAttachShadow(e.contentWindow.Element,e.contentDocument)}patchAttachShadow(e,t){const n=this;pe(e.prototype,"attachShadow",(function(e){return function(r){const s=e.call(this,r);return this.shadowRoot&&Re(this)&&n.addShadowRoot(this.shadowRoot,t),s}}))}reset(){this.active=!1,this.restoreHandlers.forEach(e=>{try{e()}catch(e){}}),this.restoreHandlers=[],this.shadowDoms=new WeakSet}}function at(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}for(var ct="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lt="undefined"==typeof Uint8Array?[]:new Uint8Array(256),ut=0;ut<ct.length;ut++)lt[ct.charCodeAt(ut)]=ut;const dt=new Map;const ht=(e,t,n)=>{if(!e||!mt(e,t)&&"object"!=typeof e)return;const r=function(e,t){let n=dt.get(e);return n||(n=new Map,dt.set(e,n)),n.has(t)||n.set(t,[]),n.get(t)}(n,e.constructor.name);let s=r.indexOf(e);return-1===s&&(s=r.length,r.push(e)),s};function pt(e,t,n){if(e instanceof Array)return e.map(e=>pt(e,t,n));if(null===e)return e;if(e instanceof Float32Array||e instanceof Float64Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Uint8Array||e instanceof Uint16Array||e instanceof Int16Array||e instanceof Int8Array||e instanceof Uint8ClampedArray){return{rr_type:e.constructor.name,args:[Object.values(e)]}}if(e instanceof ArrayBuffer){return{rr_type:e.constructor.name,base64:function(e){var t,n=new Uint8Array(e),r=n.length,s="";for(t=0;t<r;t+=3)s+=ct[n[t]>>2],s+=ct[(3&n[t])<<4|n[t+1]>>4],s+=ct[(15&n[t+1])<<2|n[t+2]>>6],s+=ct[63&n[t+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s}(e)}}if(e instanceof DataView){return{rr_type:e.constructor.name,args:[pt(e.buffer,t,n),e.byteOffset,e.byteLength]}}if(e instanceof HTMLImageElement){const t=e.constructor.name,{src:n}=e;return{rr_type:t,src:n}}if(e instanceof HTMLCanvasElement){return{rr_type:"HTMLImageElement",src:e.toDataURL()}}if(e instanceof ImageData){return{rr_type:e.constructor.name,args:[pt(e.data,t,n),e.width,e.height]}}if(mt(e,t)||"object"==typeof e){return{rr_type:e.constructor.name,index:ht(e,t,n)}}return e}const gt=(e,t,n)=>[...e].map(e=>pt(e,t,n)),mt=(e,t)=>{const n=["WebGLActiveInfo","WebGLBuffer","WebGLFramebuffer","WebGLProgram","WebGLRenderbuffer","WebGLShader","WebGLShaderPrecisionFormat","WebGLTexture","WebGLUniformLocation","WebGLVertexArrayObject","WebGLVertexArrayObjectOES"].filter(e=>"function"==typeof t[e]);return Boolean(n.find(n=>e instanceof t[n]))};function ft(e,t,n,r){const s=[];try{const i=pe(e.HTMLCanvasElement.prototype,"getContext",(function(e){return function(s,...i){if(!ye(this,t,n,!0)){const e=function(e){return"experimental-webgl"===e?"webgl":e}(s);if("__context"in this||(this.__context=e),r&&["webgl","webgl2"].includes(e))if(i[0]&&"object"==typeof i[0]){const e=i[0];e.preserveDrawingBuffer||(e.preserveDrawingBuffer=!0)}else i.splice(0,1,{preserveDrawingBuffer:!0})}return e.apply(this,[s,...i])}}));s.push(i)}catch(e){}return()=>{s.forEach(e=>e())}}function vt(e,t,n,r,s,i,o){const a=[],c=Object.getOwnPropertyNames(e);for(const i of c)if(!["isContextLost","canvas","drawingBufferWidth","drawingBufferHeight"].includes(i))try{if("function"!=typeof e[i])continue;const c=pe(e,i,(function(e){return function(...a){const c=e.apply(this,a);if(ht(c,o,this),"tagName"in this.canvas&&!ye(this.canvas,r,s,!0)){const e=gt([...a],o,this),r={type:t,property:i,args:e};n(this.canvas,r)}return c}}));a.push(c)}catch(r){const s=he(e,i,{set(e){n(this.canvas,{type:t,property:i,args:[e],setter:!0})}});a.push(s)}return a}function yt(e,t,n){var r=void 0===t?null:t,s=function(e,t){var n=atob(e);if(t){for(var r=new Uint8Array(n.length),s=0,i=n.length;s<i;++s)r[s]=n.charCodeAt(s);return String.fromCharCode.apply(null,new Uint16Array(r.buffer))}return n}(e,void 0!==n&&n),i=s.indexOf("\n",10)+1,o=s.substring(i)+(r?"//# sourceMappingURL="+r:""),a=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(a)}var It,bt,Ct,St,wt=(It="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=",bt=null,Ct=!1,function(e){return St=St||yt(It,bt,Ct),new Worker(St,e)});class At{reset(){this.pendingCanvasMutations.clear(),this.resetObservers&&this.resetObservers()}freeze(){this.frozen=!0}unfreeze(){this.frozen=!1}lock(){this.locked=!0}unlock(){this.locked=!1}constructor(e){this.pendingCanvasMutations=new Map,this.rafStamps={latestId:0,invokeId:null},this.frozen=!1,this.locked=!1,this.processMutation=(e,t)=>{!(this.rafStamps.invokeId&&this.rafStamps.latestId!==this.rafStamps.invokeId)&&this.rafStamps.invokeId||(this.rafStamps.invokeId=this.rafStamps.latestId),this.pendingCanvasMutations.has(e)||this.pendingCanvasMutations.set(e,[]),this.pendingCanvasMutations.get(e).push(t)};const{sampling:t="all",win:n,blockClass:r,blockSelector:s,recordCanvas:i,dataURLOptions:o}=e;this.mutationCb=e.mutationCb,this.mirror=e.mirror,i&&"all"===t&&this.initCanvasMutationObserver(n,r,s),i&&"number"==typeof t&&this.initCanvasFPSObserver(t,n,r,s,{dataURLOptions:o})}initCanvasFPSObserver(e,t,n,r,s){const i=ft(t,n,r,!0),o=new Map,a=new wt;a.onmessage=e=>{const{id:t}=e.data;if(o.set(t,!1),!("base64"in e.data))return;const{base64:n,type:r,width:s,height:i}=e.data;this.mutationCb({id:t,type:Oe["2D"],commands:[{property:"clearRect",args:[0,0,s,i]},{property:"drawImage",args:[{rr_type:"ImageBitmap",args:[{rr_type:"Blob",data:[{rr_type:"ArrayBuffer",base64:n}],type:r}]},0,0]}]})};const c=1e3/e;let l,u=0;const d=e=>{u&&e-u<c||(u=e,(()=>{const e=[];return t.document.querySelectorAll("canvas").forEach(t=>{ye(t,n,r,!0)||e.push(t)}),e})().forEach(e=>at(this,void 0,void 0,(function*(){var t;const n=this.mirror.getId(e);if(o.get(n))return;if(o.set(n,!0),["webgl","webgl2"].includes(e.__context)){const n=e.getContext(e.__context);!1===(null===(t=null==n?void 0:n.getContextAttributes())||void 0===t?void 0:t.preserveDrawingBuffer)&&n.clear(n.COLOR_BUFFER_BIT)}const r=yield createImageBitmap(e);a.postMessage({id:n,bitmap:r,width:e.width,height:e.height,dataURLOptions:s.dataURLOptions},[r])})))),l=requestAnimationFrame(d)};l=requestAnimationFrame(d),this.resetObservers=()=>{i(),cancelAnimationFrame(l)}}initCanvasMutationObserver(e,t,n){this.startRAFTimestamping(),this.startPendingCanvasMutationFlusher();const r=ft(e,t,n,!1),s=function(e,t,n,r){const s=[],i=Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);for(const o of i)try{if("function"!=typeof t.CanvasRenderingContext2D.prototype[o])continue;const i=pe(t.CanvasRenderingContext2D.prototype,o,(function(s){return function(...i){return ye(this.canvas,n,r,!0)||setTimeout(()=>{const n=gt([...i],t,this);e(this.canvas,{type:Oe["2D"],property:o,args:n})},0),s.apply(this,i)}}));s.push(i)}catch(n){const r=he(t.CanvasRenderingContext2D.prototype,o,{set(t){e(this.canvas,{type:Oe["2D"],property:o,args:[t],setter:!0})}});s.push(r)}return()=>{s.forEach(e=>e())}}(this.processMutation.bind(this),e,t,n),i=function(e,t,n,r,s){const i=[];return i.push(...vt(t.WebGLRenderingContext.prototype,Oe.WebGL,e,n,r,0,t)),void 0!==t.WebGL2RenderingContext&&i.push(...vt(t.WebGL2RenderingContext.prototype,Oe.WebGL2,e,n,r,0,t)),()=>{i.forEach(e=>e())}}(this.processMutation.bind(this),e,t,n,this.mirror);this.resetObservers=()=>{r(),s(),i()}}startPendingCanvasMutationFlusher(){requestAnimationFrame(()=>this.flushPendingCanvasMutations())}startRAFTimestamping(){const e=t=>{this.rafStamps.latestId=t,requestAnimationFrame(e)};requestAnimationFrame(e)}flushPendingCanvasMutations(){this.pendingCanvasMutations.forEach((e,t)=>{const n=this.mirror.getId(t);this.flushPendingCanvasMutationFor(t,n)}),requestAnimationFrame(()=>this.flushPendingCanvasMutations())}flushPendingCanvasMutationFor(e,t){if(this.frozen||this.locked)return;const n=this.pendingCanvasMutations.get(e);if(!n||-1===t)return;const r=n.map(e=>function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}(e,["type"])),{type:s}=n[0];this.mutationCb({id:t,type:s,commands:r}),this.pendingCanvasMutations.delete(e)}}class Et{constructor(e){this.trackedLinkElements=new WeakSet,this.styleMirror=new Ae,this.mutationCb=e.mutationCb,this.adoptedStyleSheetCb=e.adoptedStyleSheetCb}attachLinkElement(e,t){"_cssText"in t.attributes&&this.mutationCb({adds:[],removes:[],texts:[],attributes:[{id:t.id,attributes:t.attributes}]}),this.trackLinkElement(e)}trackLinkElement(e){this.trackedLinkElements.has(e)||(this.trackedLinkElements.add(e),this.trackStylesheetInLinkElement(e))}adoptStyleSheets(e,t){if(0===e.length)return;const n={id:t,styleIds:[]},r=[];for(const t of e){let e;if(this.styleMirror.has(t))e=this.styleMirror.getId(t);else{e=this.styleMirror.add(t);const n=Array.from(t.rules||CSSRule);r.push({styleId:e,rules:n.map((e,t)=>({rule:P(e),index:t}))})}n.styleIds.push(e)}r.length>0&&(n.styles=r),this.adoptedStyleSheetCb(n)}reset(){this.styleMirror.reset(),this.trackedLinkElements=new WeakSet}trackStylesheetInLinkElement(e){}}class kt{constructor(){this.nodeMap=new WeakMap,this.loop=!0,this.periodicallyClear()}periodicallyClear(){requestAnimationFrame(()=>{this.clear(),this.loop&&this.periodicallyClear()})}inOtherBuffer(e,t){const n=this.nodeMap.get(e);return n&&Array.from(n).some(e=>e!==t)}add(e,t){this.nodeMap.set(e,(this.nodeMap.get(e)||new Set).add(t))}clear(){this.nodeMap=new WeakMap}destroy(){this.loop=!1}}function Rt(e){return Object.assign(Object.assign({},e),{timestamp:ge()})}let Tt,_t,Mt,Nt=!1;const Ot=new F;function Dt(e={}){const{emit:t,checkoutEveryNms:n,checkoutEveryNth:r,blockClass:s="rr-block",blockSelector:i=null,ignoreClass:o="rr-ignore",ignoreSelector:a=null,maskTextClass:c="rr-mask",maskTextSelector:l=null,inlineStylesheet:u=!0,maskAllInputs:d,maskInputOptions:h,slimDOMOptions:p,maskInputFn:g,maskTextFn:m,hooks:f,packFn:v,sampling:y={},dataURLOptions:I={},mousemoveWait:b,recordCanvas:C=!1,recordCrossOriginIframes:S=!1,recordAfter:w=("DOMContentLoaded"===e.recordAfter?e.recordAfter:"load"),userTriggeredOnInput:A=!1,collectFonts:E=!1,inlineImages:k=!1,plugins:R,keepIframeSrcFn:T=(()=>!1),ignoreCSSAttributes:_=new Set([]),errorHandler:M}=e;We(M);const N=!S||window.parent===window;let O=!1;if(!N)try{window.parent.document&&(O=!1)}catch(e){O=!0}if(N&&!t)throw new Error("emit function is required");void 0!==b&&void 0===y.mousemove&&(y.mousemove=b),Ot.reset();const D=!0===d?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:void 0!==h?h:{password:!0},L=!0===p||"all"===p?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaVerification:!0,headMetaAuthorship:"all"===p,headMetaDescKeywords:"all"===p}:p||{};let x;!function(e=window){"NodeList"in e&&!e.NodeList.prototype.forEach&&(e.NodeList.prototype.forEach=Array.prototype.forEach),"DOMTokenList"in e&&!e.DOMTokenList.prototype.forEach&&(e.DOMTokenList.prototype.forEach=Array.prototype.forEach),Node.prototype.contains||(Node.prototype.contains=(...e)=>{let t=e[0];if(!(0 in e))throw new TypeError("1 argument is required");do{if(this===t)return!0}while(t=t&&t.parentNode);return!1})}();let P=0;const U=e=>{for(const t of R||[])t.eventProcessor&&(e=t.eventProcessor(e));return v&&!O&&(e=v(e)),e};Tt=(e,s)=>{var i;if(!(null===(i=qe[0])||void 0===i?void 0:i.isFrozen())||e.type===Te.FullSnapshot||e.type===Te.IncrementalSnapshot&&e.data.source===_e.Mutation||qe.forEach(e=>e.unfreeze()),N)null==t||t(U(e),s);else if(O){const t={type:"rrweb",event:U(e),origin:window.location.origin,isCheckout:s};window.parent.postMessage(t,"*")}if(e.type===Te.FullSnapshot)x=e,P=0;else if(e.type===Te.IncrementalSnapshot){if(e.data.source===_e.Mutation&&e.data.isAttachIframe)return;P++;const t=r&&P>=r,s=n&&e.timestamp-x.timestamp>n;(t||s)&&_t(!0)}};const V=e=>{Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.Mutation},e)}))},B=e=>Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.Scroll},e)})),W=e=>Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.CanvasMutation},e)})),G=new Et({mutationCb:V,adoptedStyleSheetCb:e=>Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.AdoptedStyleSheet},e)}))}),H=new it({mirror:Ot,mutationCb:V,stylesheetManager:G,recordCrossOriginIframes:S,wrappedEmit:Tt});for(const e of R||[])e.getMirror&&e.getMirror({nodeMirror:Ot,crossOriginIframeMirror:H.crossOriginIframeMirror,crossOriginIframeStyleMirror:H.crossOriginIframeStyleMirror});const q=new kt;Mt=new At({recordCanvas:C,mutationCb:W,win:window,blockClass:s,blockSelector:i,mirror:Ot,sampling:y.canvas,dataURLOptions:I});const j=new ot({mutationCb:V,scrollCb:B,bypassOptions:{blockClass:s,blockSelector:i,maskTextClass:c,maskTextSelector:l,inlineStylesheet:u,maskInputOptions:D,dataURLOptions:I,maskTextFn:m,maskInputFn:g,recordCanvas:C,inlineImages:k,sampling:y,slimDOMOptions:L,iframeManager:H,stylesheetManager:G,canvasManager:Mt,keepIframeSrcFn:T,processedNodeManager:q},mirror:Ot});_t=(e=!1)=>{Tt(Rt({type:Te.Meta,data:{href:window.location.href,width:ve(),height:fe()}}),e),G.reset(),j.init(),qe.forEach(e=>e.lock());const t=function(e,t){var n,r,s=t||{},i=s.mirror,o=void 0===i?new F:i,a=s.blockClass,c=void 0===a?"rr-block":a,l=s.blockSelector,u=void 0===l?null:l,d=s.maskTextClass,h=void 0===d?"rr-mask":d,p=s.maskTextSelector,g=void 0===p?null:p,m=s.inlineStylesheet,f=void 0===m||m,v=s.inlineImages,y=void 0!==v&&v,I=s.recordCanvas,b=void 0!==I&&I,C=s.maskAllInputs,S=void 0!==C&&C,w=s.maskTextFn,A=s.maskInputFn,E=s.slimDOM,k=void 0!==E&&E,R=s.dataURLOptions,T=s.preserveWhiteSpace,_=s.onSerialize,M=s.onIframeLoad,N=s.iframeLoadTimeout,O=s.onStylesheetLoad,D=s.stylesheetLoadTimeout,L=s.keepIframeSrcFn,x=void 0===L?function(){return!1}:L,P=!0===S?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:!1===S?{password:!0}:S,U=!0===k||"all"===k?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaDescKeywords:"all"===k,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaAuthorship:!0,headMetaVerification:!0}:!1===k?{}:k;if("string"==typeof h){var V=e.querySelectorAll("."+h);if(n=!1,r=Array.from(V),g){var B=e.querySelectorAll(g);r=r.concat(Array.from(B))}}return ae(e,{doc:e,mirror:o,blockClass:c,blockSelector:u,maskTextClass:h,maskTextSelector:g,skipChild:!1,inlineStylesheet:f,maskInputOptions:P,maskTextFn:w,maskInputFn:A,slimDOMOptions:U,dataURLOptions:R,inlineImages:y,recordCanvas:b,preserveWhiteSpace:T,onSerialize:_,onIframeLoad:M,iframeLoadTimeout:N,onStylesheetLoad:O,stylesheetLoadTimeout:D,keepIframeSrcFn:x,newlyAddedElement:!1,maskCurrentNode:n,maskedElements:r})}(document,{mirror:Ot,blockClass:s,blockSelector:i,maskTextClass:c,maskTextSelector:l,inlineStylesheet:u,maskAllInputs:D,maskTextFn:m,maskInputFn:g,slimDOM:L,dataURLOptions:I,recordCanvas:C,inlineImages:k,onSerialize:e=>{Ce(e,Ot)&&H.addIframe(e),Se(e,Ot)&&G.trackLinkElement(e),we(e)&&j.addShadowRoot(e.shadowRoot,document)},onIframeLoad:(e,t)=>{H.attachIframe(e,t),j.observeAttachShadow(e)},onStylesheetLoad:(e,t)=>{G.attachLinkElement(e,t)},keepIframeSrcFn:T});t&&(Tt(Rt({type:Te.FullSnapshot,data:{node:t,initialOffset:me(window)}}),e),qe.forEach(e=>e.unlock()),document.adoptedStyleSheets&&document.adoptedStyleSheets.length>0&&G.adoptStyleSheets(document.adoptedStyleSheets,Ot.getId(document)))};try{const e=[],t=e=>{var t;return He(tt)({mutationCb:V,mousemoveCb:(e,t)=>Tt(Rt({type:Te.IncrementalSnapshot,data:{source:t,positions:e}})),mouseInteractionCb:e=>Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.MouseInteraction},e)})),scrollCb:B,viewportResizeCb:e=>Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.ViewportResize},e)})),inputCb:e=>Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.Input},e)})),mediaInteractionCb:e=>Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.MediaInteraction},e)})),styleSheetRuleCb:e=>Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.StyleSheetRule},e)})),styleDeclarationCb:e=>Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.StyleDeclaration},e)})),canvasMutationCb:W,fontCb:e=>Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.Font},e)})),selectionCb:e=>{Tt(Rt({type:Te.IncrementalSnapshot,data:Object.assign({source:_e.Selection},e)}))},blockClass:s,ignoreClass:o,ignoreSelector:a,maskTextClass:c,maskTextSelector:l,maskInputOptions:D,inlineStylesheet:u,sampling:y,recordCanvas:C,inlineImages:k,userTriggeredOnInput:A,collectFonts:E,doc:e,maskInputFn:g,maskTextFn:m,keepIframeSrcFn:T,blockSelector:i,slimDOMOptions:L,dataURLOptions:I,mirror:Ot,iframeManager:H,stylesheetManager:G,shadowDomManager:j,processedNodeManager:q,canvasManager:Mt,ignoreCSSAttributes:_,plugins:(null===(t=null==R?void 0:R.filter(e=>e.observer))||void 0===t?void 0:t.map(e=>({observer:e.observer,options:e.options,callback:t=>Tt(Rt({type:Te.Plugin,data:{plugin:e.name,payload:t}}))})))||[]},f)};H.addLoadListener(n=>{try{e.push(t(n.contentDocument))}catch(e){}});const n=()=>{_t(),e.push(t(document)),Nt=!0};return"interactive"===document.readyState||"complete"===document.readyState?n():(e.push(le("DOMContentLoaded",()=>{Tt(Rt({type:Te.DomContentLoaded,data:{}})),"DOMContentLoaded"===w&&n()})),e.push(le("load",()=>{Tt(Rt({type:Te.Load,data:{}})),"load"===w&&n()},window))),()=>{e.forEach(e=>e()),q.destroy(),Nt=!1,Ge()}}catch(e){}}Dt.addCustomEvent=(e,t)=>{if(!Nt)throw new Error("please add custom event after start recording");Tt(Rt({type:Te.Custom,data:{tag:e,payload:t}}))},Dt.freezePage=()=>{qe.forEach(e=>e.freeze())},Dt.takeFullSnapshot=e=>{if(!Nt)throw new Error("please take full snapshot after start recording");_t(e)},Dt.mirror=Ot;const{addCustomEvent:Lt}=Dt,{freezePage:xt}=Dt;var Pt=Uint8Array,Ft=Uint16Array,Ut=Uint32Array,Vt=new Pt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Bt=new Pt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Wt=new Pt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Gt=function(e,t){for(var n=new Ft(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];var s=new Ut(n[30]);for(r=1;r<30;++r)for(var i=n[r];i<n[r+1];++i)s[i]=i-n[r]<<5|r;return[n,s]},Ht=Gt(Vt,2),qt=Ht[0],jt=Ht[1];qt[28]=258,jt[258]=28;for(var Zt=Gt(Bt,0),zt=(Zt[0],Zt[1]),Kt=new Ft(32768),$t=0;$t<32768;++$t){var Jt=(43690&$t)>>>1|(21845&$t)<<1;Jt=(61680&(Jt=(52428&Jt)>>>2|(13107&Jt)<<2))>>>4|(3855&Jt)<<4,Kt[$t]=((65280&Jt)>>>8|(255&Jt)<<8)>>>1}var Qt=function(e,t,n){for(var r=e.length,s=0,i=new Ft(t);s<r;++s)++i[e[s]-1];var o,a=new Ft(t);for(s=0;s<t;++s)a[s]=a[s-1]+i[s-1]<<1;if(n){o=new Ft(1<<t);var c=15-t;for(s=0;s<r;++s)if(e[s])for(var l=s<<4|e[s],u=t-e[s],d=a[e[s]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)o[Kt[d]>>>c]=l}else for(o=new Ft(r),s=0;s<r;++s)o[s]=Kt[a[e[s]-1]++]>>>15-e[s];return o},Yt=new Pt(288);for($t=0;$t<144;++$t)Yt[$t]=8;for($t=144;$t<256;++$t)Yt[$t]=9;for($t=256;$t<280;++$t)Yt[$t]=7;for($t=280;$t<288;++$t)Yt[$t]=8;var Xt=new Pt(32);for($t=0;$t<32;++$t)Xt[$t]=5;var en=Qt(Yt,9,0),tn=Qt(Xt,5,0),nn=function(e){return(e/8>>0)+(7&e&&1)},rn=function(e,t,n){(null==t||t<0)&&(t=0),(null==n||n>e.length)&&(n=e.length);var r=new(e instanceof Ft?Ft:e instanceof Ut?Ut:Pt)(n-t);return r.set(e.subarray(t,n)),r},sn=function(e,t,n){n<<=7&t;var r=t/8>>0;e[r]|=n,e[r+1]|=n>>>8},on=function(e,t,n){n<<=7&t;var r=t/8>>0;e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},an=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var s=n.length,i=n.slice();if(!s)return[new Pt(0),0];if(1==s){var o=new Pt(n[0].s+1);return o[n[0].s]=1,[o,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001});var a=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:a.f+c.f,l:a,r:c};u!=s-1;)a=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:a.f+c.f,l:a,r:c};var h=i[0].s;for(r=1;r<s;++r)i[r].s>h&&(h=i[r].s);var p=new Ft(h+1),g=cn(n[u-1],p,0);if(g>t){r=0;var m=0,f=g-t,v=1<<f;for(i.sort((function(e,t){return p[t.s]-p[e.s]||e.f-t.f}));r<s;++r){var y=i[r].s;if(!(p[y]>t))break;m+=v-(1<<g-p[y]),p[y]=t}for(m>>>=f;m>0;){var I=i[r].s;p[I]<t?m-=1<<t-p[I]++-1:++r}for(;r>=0&&m;--r){var b=i[r].s;p[b]==t&&(--p[b],++m)}g=t}return[new Pt(p),g]},cn=function(e,t,n){return-1==e.s?Math.max(cn(e.l,t,n+1),cn(e.r,t,n+1)):t[e.s]=n},ln=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Ft(++t),r=0,s=e[0],i=1,o=function(e){n[r++]=e},a=1;a<=t;++a)if(e[a]==s&&a!=t)++i;else{if(!s&&i>2){for(;i>138;i-=138)o(32754);i>2&&(o(i>10?i-11<<5|28690:i-3<<5|12305),i=0)}else if(i>3){for(o(s),--i;i>6;i-=6)o(8304);i>2&&(o(i-3<<5|8208),i=0)}for(;i--;)o(s);i=1,s=e[a]}return[n.subarray(0,r),t]},un=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},dn=function(e,t,n){var r=n.length,s=nn(t+2);e[s]=255&r,e[s+1]=r>>>8,e[s+2]=255^e[s],e[s+3]=255^e[s+1];for(var i=0;i<r;++i)e[s+i+4]=n[i];return 8*(s+4+r)},hn=function(e,t,n,r,s,i,o,a,c,l,u){sn(t,u++,n),++s[256];for(var d=an(s,15),h=d[0],p=d[1],g=an(i,15),m=g[0],f=g[1],v=ln(h),y=v[0],I=v[1],b=ln(m),C=b[0],S=b[1],w=new Ft(19),A=0;A<y.length;++A)w[31&y[A]]++;for(A=0;A<C.length;++A)w[31&C[A]]++;for(var E=an(w,7),k=E[0],R=E[1],T=19;T>4&&!k[Wt[T-1]];--T);var _,M,N,O,D=l+5<<3,L=un(s,Yt)+un(i,Xt)+o,x=un(s,h)+un(i,m)+o+14+3*T+un(w,k)+(2*w[16]+3*w[17]+7*w[18]);if(D<=L&&D<=x)return dn(t,u,e.subarray(c,c+l));if(sn(t,u,1+(x<L)),u+=2,x<L){_=Qt(h,p,0),M=h,N=Qt(m,f,0),O=m;var P=Qt(k,R,0);sn(t,u,I-257),sn(t,u+5,S-1),sn(t,u+10,T-4),u+=14;for(A=0;A<T;++A)sn(t,u+3*A,k[Wt[A]]);u+=3*T;for(var F=[y,C],U=0;U<2;++U){var V=F[U];for(A=0;A<V.length;++A){var B=31&V[A];sn(t,u,P[B]),u+=k[B],B>15&&(sn(t,u,V[A]>>>5&127),u+=V[A]>>>12)}}}else _=en,M=Yt,N=tn,O=Xt;for(A=0;A<a;++A)if(r[A]>255){B=r[A]>>>18&31;on(t,u,_[B+257]),u+=M[B+257],B>7&&(sn(t,u,r[A]>>>23&31),u+=Vt[B]);var W=31&r[A];on(t,u,N[W]),u+=O[W],W>3&&(on(t,u,r[A]>>>5&8191),u+=Bt[W])}else on(t,u,_[r[A]]),u+=M[r[A]];return on(t,u,_[256]),u+M[256]},pn=new Ut([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),gn=new Pt(0),mn=function(e,t,n,r,s){return function(e,t,n,r,s,i){var o=e.length,a=new Pt(r+o+5*(1+Math.floor(o/7e3))+s),c=a.subarray(r,a.length-s),l=0;if(!t||o<8)for(var u=0;u<=o;u+=65535){var d=u+65535;d<o?l=dn(c,l,e.subarray(u,d)):(c[u]=i,l=dn(c,l,e.subarray(u,o)))}else{for(var h=pn[t-1],p=h>>>13,g=8191&h,m=(1<<n)-1,f=new Ft(32768),v=new Ft(m+1),y=Math.ceil(n/3),I=2*y,b=function(t){return(e[t]^e[t+1]<<y^e[t+2]<<I)&m},C=new Ut(25e3),S=new Ft(288),w=new Ft(32),A=0,E=0,k=(u=0,0),R=0,T=0;u<o;++u){var _=b(u),M=32767&u,N=v[_];if(f[M]=N,v[_]=M,R<=u){var O=o-u;if((A>7e3||k>24576)&&O>423){l=hn(e,c,0,C,S,w,E,k,T,u-T,l),k=A=E=0,T=u;for(var D=0;D<286;++D)S[D]=0;for(D=0;D<30;++D)w[D]=0}var L=2,x=0,P=g,F=M-N&32767;if(O>2&&_==b(u-F))for(var U=Math.min(p,O)-1,V=Math.min(32767,u),B=Math.min(258,O);F<=V&&--P&&M!=N;){if(e[u+L]==e[u+L-F]){for(var W=0;W<B&&e[u+W]==e[u+W-F];++W);if(W>L){if(L=W,x=F,W>U)break;var G=Math.min(F,W-2),H=0;for(D=0;D<G;++D){var q=u-F+D+32768&32767,j=q-f[q]+32768&32767;j>H&&(H=j,N=q)}}}F+=(M=N)-(N=f[M])+32768&32767}if(x){C[k++]=268435456|jt[L]<<18|zt[x];var Z=31&jt[L],z=31&zt[x];E+=Vt[Z]+Bt[z],++S[257+Z],++w[z],R=u+L,++A}else C[k++]=e[u],++S[e[u]]}}l=hn(e,c,i,C,S,w,E,k,T,u-T,l),i||(l=dn(c,l,gn))}return rn(a,0,r+nn(l)+s)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,r,!s)};function fn(e,t){void 0===t&&(t={});var n=function(){var e=1,t=0;return{p:function(n){for(var r=e,s=t,i=n.length,o=0;o!=i;){for(var a=Math.min(o+5552,i);o<a;++o)s+=r+=n[o];r%=65521,s%=65521}e=r,t=s},d:function(){return(e>>>8<<16|(255&t)<<8|t>>>8)+2*((255&e)<<23)}}}();n.p(e);var r=mn(e,t,2,4);return function(e,t){var n=t.level,r=0==n?0:n<6?1:9==n?3:2;e[0]=120,e[1]=r<<6|(r?32-2*r:1)}(r,t),function(e,t,n){for(;n;++t)e[t]=n,n>>>=8}(r,r.length-4,n.d()),r}const vn=(e,t)=>{const n=Object.assign(Object.assign({},e),{v:"v1"});return function(e,t){var n="";if(!t&&"undefined"!=typeof TextDecoder)return(new TextDecoder).decode(e);for(var r=0;r<e.length;){var s=e[r++];s<128||t?n+=String.fromCharCode(s):s<224?n+=String.fromCharCode((31&s)<<6|63&e[r++]):s<240?n+=String.fromCharCode((15&s)<<12|(63&e[r++])<<6|63&e[r++]):(s=((15&s)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536,n+=String.fromCharCode(55296|s>>10,56320|1023&s))}return n}(fn(function(e,t){var n=e.length;if(!t&&"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);for(var r=new Pt(e.length+(e.length>>>1)),s=0,i=function(e){r[s++]=e},o=0;o<n;++o){if(s+5>r.length){var a=new Pt(s+8+(n-o<<1));a.set(r),r=a}var c=e.charCodeAt(o);c<128||t?i(c):c<2048?(i(192|c>>>6),i(128|63&c)):c>55295&&c<57344?(i(240|(c=65536+(1047552&c)|1023&e.charCodeAt(++o))>>>18),i(128|c>>>12&63),i(128|c>>>6&63),i(128|63&c)):(i(224|c>>>12),i(128|c>>>6&63),i(128|63&c))}return rn(r,0,s)}(JSON.stringify(n)),t),!0)};var yn,In,bn,Cn,Sn,wn=-1,An=function(e){addEventListener("pageshow",(function(t){t.persisted&&(wn=t.timeStamp,e(t))}),!0)},En=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},kn=function(){var e=En();return e&&e.activationStart||0},Rn=function(e,t){var n=En(),r="navigate";return wn>=0?r="back-forward-cache":n&&(r=document.prerendering||kn()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},Tn=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},_n=function(e,t,n,r){var s,i;return function(o){t.value>=0&&(o||r)&&((i=t.value-(s||0))||void 0===s)&&(s=t.value,t.delta=i,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},Mn=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},Nn=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},On=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},Dn=-1,Ln=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},xn=function(e){"hidden"===document.visibilityState&&Dn>-1&&(Dn="visibilitychange"===e.type?e.timeStamp:0,Fn())},Pn=function(){addEventListener("visibilitychange",xn,!0),addEventListener("prerenderingchange",xn,!0)},Fn=function(){removeEventListener("visibilitychange",xn,!0),removeEventListener("prerenderingchange",xn,!0)},Un=function(){return Dn<0&&(Dn=Ln(),Pn(),An((function(){setTimeout((function(){Dn=Ln(),Pn()}),0)}))),{get firstHiddenTime(){return Dn}}},Vn=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},Bn=[1800,3e3],Wn=function(e,t){t=t||{},Vn((function(){var n,r=Un(),s=Rn("FCP"),i=Tn("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(i.disconnect(),e.startTime<r.firstHiddenTime&&(s.value=Math.max(e.startTime-kn(),0),s.entries.push(e),n(!0)))}))}));i&&(n=_n(e,s,Bn,t.reportAllChanges),An((function(r){s=Rn("FCP"),n=_n(e,s,Bn,t.reportAllChanges),Mn((function(){s.value=performance.now()-r.timeStamp,n(!0)}))})))}))},Gn=[.1,.25],Hn=function(e,t){t=t||{},Wn(On((function(){var n,r=Rn("CLS",0),s=0,i=[],o=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=i[0],n=i[i.length-1];s&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(s+=e.value,i.push(e)):(s=e.value,i=[e])}})),s>r.value&&(r.value=s,r.entries=i,n())},a=Tn("layout-shift",o);a&&(n=_n(e,r,Gn,t.reportAllChanges),Nn((function(){o(a.takeRecords()),n(!0)})),An((function(){s=0,r=Rn("CLS",0),n=_n(e,r,Gn,t.reportAllChanges),Mn((function(){return n()}))})),setTimeout(n,0))})))},qn={passive:!0,capture:!0},jn=new Date,Zn=function(e,t){yn||(yn=t,In=e,bn=new Date,$n(removeEventListener),zn())},zn=function(){if(In>=0&&In<bn-jn){var e={entryType:"first-input",name:yn.type,target:yn.target,cancelable:yn.cancelable,startTime:yn.timeStamp,processingStart:yn.timeStamp+In};Cn.forEach((function(t){t(e)})),Cn=[]}},Kn=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){Zn(e,t),s()},r=function(){s()},s=function(){removeEventListener("pointerup",n,qn),removeEventListener("pointercancel",r,qn)};addEventListener("pointerup",n,qn),addEventListener("pointercancel",r,qn)}(t,e):Zn(t,e)}},$n=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,Kn,qn)}))},Jn=[100,300],Qn=function(e,t){t=t||{},Vn((function(){var n,r=Un(),s=Rn("FID"),i=function(e){e.startTime<r.firstHiddenTime&&(s.value=e.processingStart-e.startTime,s.entries.push(e),n(!0))},o=function(e){e.forEach(i)},a=Tn("first-input",o);n=_n(e,s,Jn,t.reportAllChanges),a&&Nn(On((function(){o(a.takeRecords()),a.disconnect()}))),a&&An((function(){var r;s=Rn("FID"),n=_n(e,s,Jn,t.reportAllChanges),Cn=[],In=-1,yn=null,$n(addEventListener),r=i,Cn.push(r),zn()}))}))},Yn=0,Xn=1/0,er=0,tr=function(e){e.forEach((function(e){e.interactionId&&(Xn=Math.min(Xn,e.interactionId),er=Math.max(er,e.interactionId),Yn=er?(er-Xn)/7+1:0)}))},nr=function(){return Sn?Yn:performance.interactionCount||0},rr=[200,500],sr=0,ir=function(){return nr()-sr},or=[],ar={},cr=function(e){var t=or[or.length-1],n=ar[e.interactionId];if(n||or.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};ar[r.id]=r,or.push(r)}or.sort((function(e,t){return t.latency-e.latency})),or.splice(10).forEach((function(e){delete ar[e.id]}))}},lr=function(e,t){t=t||{},Vn((function(){"interactionCount"in performance||Sn||(Sn=Tn("event",tr,{type:"event",buffered:!0,durationThreshold:0}));var n,r=Rn("INP"),s=function(e){e.forEach((function(e){e.interactionId&&cr(e),"first-input"===e.entryType&&!or.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&cr(e)}));var t,s=(t=Math.min(or.length-1,Math.floor(ir()/50)),or[t]);s&&s.latency!==r.value&&(r.value=s.latency,r.entries=s.entries,n())},i=Tn("event",s,{durationThreshold:t.durationThreshold||40});n=_n(e,r,rr,t.reportAllChanges),i&&(i.observe({type:"first-input",buffered:!0}),Nn((function(){s(i.takeRecords()),r.value<0&&ir()>0&&(r.value=0,r.entries=[]),n(!0)})),An((function(){or=[],sr=nr(),r=Rn("INP"),n=_n(e,r,rr,t.reportAllChanges)})))}))},ur=[2500,4e3],dr={},hr=function(e,t){t=t||{},Vn((function(){var n,r=Un(),s=Rn("LCP"),i=function(e){var t=e[e.length-1];t&&t.startTime<r.firstHiddenTime&&(s.value=Math.max(t.startTime-kn(),0),s.entries=[t],n())},o=Tn("largest-contentful-paint",i);if(o){n=_n(e,s,ur,t.reportAllChanges);var a=On((function(){dr[s.id]||(i(o.takeRecords()),o.disconnect(),dr[s.id]=!0,n(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,a,!0)})),Nn(a),An((function(r){s=Rn("LCP"),n=_n(e,s,ur,t.reportAllChanges),Mn((function(){s.value=performance.now()-r.timeStamp,dr[s.id]=!0,n(!0)}))}))}}))},pr=[800,1800],gr=function(e,t){t=t||{};var n=Rn("TTFB"),r=_n(e,n,pr,t.reportAllChanges);!function e(t){document.prerendering?Vn((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)}((function(){var s=En();if(s){var i=s.responseStart;if(i<=0||i>performance.now())return;n.value=Math.max(i-kn(),0),n.entries=[s],r(!0),An((function(){n=Rn("TTFB",0),(r=_n(e,n,pr,t.reportAllChanges))(!0)}))}}))};const mr=(e,t,n)=>{if(!(t in e))return;const r=e[t];if(r&&r.__noibu_wrapped__)return;const s=Object.getOwnPropertyDescriptor(e,t);if(s&&!1===s.writable)return;const i=n(r);if("function"==typeof i)try{i.prototype=i.prototype||{},Object.defineProperties(i,{__noibu__:{enumerable:!1,value:!0},__noibu_original__:{enumerable:!1,value:r},__noibu_wrapped__:{enumerable:!1,value:i}})}catch(e){}e[t]=i},fr=(e,t)=>{if(!e||!e.hasOwnProperty||!Object.prototype.hasOwnProperty.call(e,t))return!1;const n=Object.getOwnPropertyDescriptor(e,t);if(!n.writable){if(!n.configurable)return!1;Object.defineProperty(e,t,{writable:!0})}return!0};const vr=e=>{if(!function(e){if(!e)return!1;try{return"function"==typeof e[Symbol.iterator]}catch(e){return!1}}(e))return{};const t={};try{for(const[n,r]of e)t[n]=r}catch(e){}return t},yr=(e,t)=>{const n=-1!==e.indexOf("safari-extension"),r=-1!==e.indexOf("safari-web-extension");return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:"<unknown>",n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]};function Ir(e,t,n,r){const s={file:e,mname:t};return void 0!==n&&(s.line=n),void 0!==r&&(s.column=r),s}const br=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Cr=/\((\S*)(?::(\d+))(?::(\d+))\)/,Sr=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,wr=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Ar=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,Er=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,kr=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;function Rr(e,t=!1){const n=e.split("\n");return n.length>50?[]:n.reduce((function(e,n,r){if(n.length>1024)return e;const s=(e=>{const t=Er.exec(e);return t?Ir(t[2],t[3]||"<unknown>",+t[1]):void 0})(n)||(e=>{const t=kr.exec(e);return t?Ir(t[5],t[3]||t[4]||"<unknown>",+t[1],+t[2]):void 0})(n)||(e=>{const t=br.exec(e);if(t){if(t[2]&&0===t[2].indexOf("eval")){const e=Cr.exec(t[2]);e&&(t[2]=e[1],t[3]=e[2],t[4]=e[3])}const[e,n]=yr(t[1]||"<unknown>",t[2]);return Ir(n,e,t[3]?+t[3]:void 0,t[4]?+t[4]:void 0)}})(n)||(e=>{const t=Ar.exec(e);return t?Ir(t[2],t[1]||"<unknown>",+t[3],t[4]?+t[4]:void 0):void 0})(n)||(e=>{const t=Sr.exec(e);if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){const e=wr.exec(t[3]);e&&(t[1]=t[1]||"eval",t[3]=e[1],t[4]=e[2],t[5]="")}let e=t[3],n=t[1]||"<unknown>";return[n,e]=yr(n,e),Ir(e,n,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}})(n);return s&&(t?e.push(Object.assign(Object.assign({},s),{_frameLocationIndexInOrigString:r})):e.push(s)),e}),[])}let Tr,_r,Mr,Nr=null,Or=null,Dr=!1;function Lr(){xr(),Or&&(window.clearTimeout(Or),Or=null),Dr&&(Dr=!1,document.removeEventListener("readystatechange",Vr))}function xr(){Nr&&(window.clearTimeout(Nr),Nr=null)}function Pr(e){const t=new Error(e);Mr(t)}function Fr(){Lr(),Pr("Loading timeout")}function Ur(){Lr(),_r(!0)}function Vr(){switch(document.readyState){case"complete":Lr(),_r(!0);break;case"interactive":xr(),Or=window.setTimeout(Ur,3e3);break;case"loading":Nr=window.setTimeout(Fr,2e4);break;default:Lr(),Pr("Invalid readyState: "+document.readyState)}}function Br(){return!Tr&&window.NOIBUJS_DOCUMENT_READY_PROMISE instanceof Promise&&(Tr=window.NOIBUJS_DOCUMENT_READY_PROMISE),Tr||(Tr=new Promise((e,t)=>{_r=e,Mr=t,"complete"!==document.readyState&&(Dr=!0,document.addEventListener("readystatechange",Vr)),Vr()}),window.NOIBUJS_DOCUMENT_READY_PROMISE=Tr,Tr)}function Wr(e,t=1024){return e?e.length<t?e:e.substring(0,t):e}function Gr(e,t=1){try{return Rr(e).length>t}catch(e){return!1}}function Hr(e){if(!e)return"";return function(e){if(Gr(e)){const t=Rr(e,!0),n=e.split("\n"),r=Object.fromEntries(t.map(e=>[e._frameLocationIndexInOrigString,!0]));return n.filter((e,t)=>!r[t]).join("\n")}return e}(Wr(e)).replace(c,"$1$2$3'*'").replace(i,"******")}function qr(e,t){const n=new URL(e);Object.assign(n,t);let r=n.toString();return t.protocol&&t.protocol!==n.protocol&&(r=`${t.protocol}:${r.slice(n.protocol.length)}`),r}function jr(){let e=window.location.href;return!window.location.href.startsWith("http")&&window.parent&&window.parent.location&&window.parent.location.href.startsWith("http")&&(e=window.parent.location.href),Wr(e)}function Zr(e){let t=[{line:"_",mname:"_",file:"_"}];return"object"==typeof e&&e?(e.stack?t=Rr(e.stack).map(e=>{const t={line:"_",mname:"_",file:"_"};return e.line&&Number.isInteger(e.line)&&(t.line=String(e.line)),e.mname&&"<unknown>"!==e.mname&&(t.mname=String(e.mname)),e.file&&"<unknown>"!==e.file&&(t.file=String(e.file)),e.column&&Number.isInteger(e.column)&&(t.column=e.column),t}):(e.fileName&&"string"==typeof e.fileName&&(t[0].file=e.fileName),e.lineNumber&&(t[0].line=String(e.lineNumber)),e.columnNumber&&Number.isInteger(e.columnNumber)&&(t[0].column=e.columnNumber)),t.length>=50&&(t=t.slice(0,50)),{frames:(n=t,n?n.filter(e=>!e.mname.toLowerCase().includes("nbuwrapper")):""),msg:Hr(e.message)}):{frames:t,msg:""};var n}function zr(e){let t="";try{e&&e.stack&&(t=`(stack: ${e.stack})`)}catch(e){}return t}function Kr(e){const t=[];return JSON.stringify(e,(function(e,n){if("object"!=typeof n||null===n)return n;for(;t.length>0&&t[t.length-1]!==this;)t.pop();return t.includes(n)?{}:(t.push(n),n)}))}function $r(e){if(Array.prototype.toJSON){const t=Array.prototype.toJSON;delete Array.prototype.toJSON;const n=Kr(e);return Array.prototype.toJSON=t,n}return Kr(e)}function Jr(e){return e?"object"==typeof e?$r(e):String(e):""}function Qr(e,t,n,r,s,i){if(i){const e=Jr(n),s=new Blob([e]).size;return!window.fetch||s>59e3?Promise.resolve():fetch(t,{method:"POST",headers:r,body:Jr(n),keepalive:!0})}return new Promise((i,o)=>{const a=new XMLHttpRequest;a.open(e,t),a.timeout=s,Object.keys(r).forEach(e=>{a.setRequestHeader(e,r[e])}),a.onload=()=>{a.status>=200&&a.status<300?i(a.response):o(new Error("Custom Request failed: "+a.statusText))},a.onerror=()=>{o(new Error("Custom Request failed: "+a.statusText))},n?a.send($r(n)):a.send()})}function Yr(){const e=p();return e.sel&&Array.isArray(e.sel)}function Xr(){const e=p();return function(){const e=p();return e.http_re&&Array.isArray(e.http_re)}()?e.http_re:[]}function es(){const e=p(),t=[".noibu-blocked",".creditCard"];return Yr()&&t.push(...e.sel),""+t.join(",")}function ts(e=""){if("function"==typeof URL.canParse)return URL.canParse(e);try{return new URL(e),!0}catch(e){return!1}}function ns(){const e="1"===window.navigator.doNotTrack,t=function(e){let t=e;return t||(t=navigator.userAgent),t=t.toLowerCase(),new RegExp("(bot|crawl(er)?|sp(i|y)der|search|worm|fetch|nutch|headless|baidu|teoma|yandex|woorankreview|pingdom|synthetic|dataprovider|qaautomation|morningscore|wappalyzer|foregenix|StatusCake|SpeedCurve|Outlook-iOS|bitdiscovery|testing|webflow|bingpreview|(r|R)igor|facebookexternalhit/\\d+\\.\\d+)","i").test(t)}(null);return e||t}function rs(e,t=!1){let n=jr();return t&&!ts(e)?n=qr(n,{pathname:e}):e&&""!==e.trim()&&"undefined"!==e&&(n=e),Wr(n)}function ss(e,t){try{return"function"==typeof t&&e instanceof t}catch(e){return!1}}function is(e){return"string"==typeof e||e instanceof String}function os(e,t,n){Br().then(()=>{try{const r=document.createElement("script");r.setAttribute("src",e),r.setAttribute("async","true"),"function"==typeof n&&(r.onerror=n),"function"==typeof t&&(r.onload=t),document.body.appendChild(r)}catch(e){n(e)}})}const as={"input.noibu.com":!0,"input.staging.noibu.com":!0,"vf.noibu.com":!0,"vf.staging.noibu.com":!0,"cdn.noibu.com":!0};class cs{constructor(e){this._provider=e}static isAvailable(e){let t=!0,n=null;try{const t=e();if(!t||!t.setItem||!t.removeItem)return{result:!1,error:"provider is nullish"};t.setItem("n_key",0),t.removeItem("n_key")}catch(e){t=!1,n=e}return{result:t,error:n}}load(e){return this._provider.getItem(e)}save(e,t){this._provider.setItem(e,t)}remove(e){this._provider.removeItem(e)}calculateUsedSize(){let e=0;for(let t=0;t<this._provider.length;t++){const n=this._provider.key(t);if(n){e+=n.length;const t=this._provider.getItem(n);t&&(e+=t.length)}}return e}}class ls extends cs{constructor(){super(window.localStorage)}static isAvailable(){return cs.isAvailable(()=>window.localStorage)}}class us extends cs{constructor(){super(window.sessionStorage)}static isAvailable(){return cs.isAvailable(()=>window.sessionStorage)}}class ds{constructor(){const e=ls.isAvailable(),t=us.isAvailable();this._isLocalStorageAvailable=e.result,this._isSessionStorageAvailable=t.result,this._localStorageError=e.error,this._sessionStorageError=t.error,this._provider=null,this._type="unavailable",this._isLocalStorageAvailable?(this._provider=new ls,this._type="LocalStorage"):this._isSessionStorageAvailable&&(this._provider=new us,this._type="SessionStorage")}static getInstance(){return this._instance||(this._instance=new ds),this._instance}isAvailable(){return null!=this._provider}load(e){return this.isAvailable()?this._provider.load(e):null}save(e,t){this.isAvailable()&&this._provider.save(e,t)}remove(e){this.isAvailable()&&this._provider.remove(e)}calculateUsedSize(){return this.isAvailable()?this._provider.calculateUsedSize():0}getDiagnoseInfo(){return{storageProvider:this._type,localStorageAvailable:this._isLocalStorageAvailable,localStorageError:this._localStorageError,sessionStorageAvailable:this._isSessionStorageAvailable,sessionStorageError:this._sessionStorageError,storageUsedSize:this.calculateUsedSize()}}}function hs(e,t,n,r){if(!e||!t||!n)return;const s=e=>{try{n(e)}catch(e){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("addEventListener callback error: "+e.message,!1,"error")}};try{e.addEventListener(t,s,r)}catch(n){if(n instanceof TypeError&&(()=>{if(!Reflect)return!1;try{Reflect.get(e,"addEventListener")(t,s,r)}catch(e){return!1}return!0})())return;const i=zr(n);ms.getInstance().postNoibuErrorAndOptionallyDisableClient(`Error in addSafeEventListener: ${n}${i}`,!1,"error")}}class ps{constructor(){this.expectedVideoLength=0,this.expectedVfSeq=0,this.expectedPvPart=0,this.httpSequenceNumber=0,this.httpPayloadCount=0,this.httpDroppedPayloadByLengthCount=0,this.httpDroppedPayloadByTypeCount=0,this.httpOverLimitCount=0,this.videoClicks=0,this.pvClicks=0,this.didCutPv=!1,this.didCutVideo=!1,this.didStartVideo=!1,this.httpCount=0,this.errCount=0,this.customAttributeTotalCount=0,this.customAttributeFailCount=0,this.customAttributeKeyCount=0,this.otherMetrics={},this._setupListeners()}static getInstance(){return this.instance||(this.instance=new ps),this.instance}addVideoFragData(e,t){this.expectedVfSeq=e,this.expectedVideoLength=t}setPvPart(e){this.expectedPvPart=e}addVideoClick(){this.videoClicks+=1}addPvClick(){this.pvClicks+=1}addError(){this.errCount+=1}addHttpEvent(){this.httpCount+=1}addHttpData(){this.httpSequenceNumber+=1}addHttpDataOverLimit(){this.httpOverLimitCount+=1}addHttpDataDropByType(){this.httpDroppedPayloadByTypeCount+=1}addHttpDataDropByLength(){this.httpDroppedPayloadByLengthCount+=1}addHttpDataPayloadCount(){this.httpPayloadCount+=1}addCustomAttributeTotalCount(){this.customAttributeTotalCount+=1}addCustomAttributeFailCount(){this.customAttributeFailCount+=1}setCustomAttributeKeyCount(e){this.customAttributeKeyCount=e}addOtherMetricsCount(e,t=1){this.otherMetrics[e]||(this.otherMetrics[e]=0,ms.getInstance().postNoibuErrorAndOptionallyDisableClient({message:"other_metrics has been written",count:t,otherMetricsName:e},!1,"error")),this.otherMetrics[e]+=t}setDidCutVideo(){this.didCutVideo=!0}setDidStartVideo(){this.didStartVideo=!0}setDidCutPv(){this.didCutPv=!0}_setupListeners(){hs(window,"pagehide",()=>{this._postMetricsIfActive("pagehide")})}_postMetricsIfActive(e){ms.getInstance().isClientDisabled||ms.getInstance().isInactive()||this.postMetrics(e)}postMetrics(e){const t={br_id:ms.getInstance().browserId,pv_id:ms.getInstance().pageVisitId,cv:2,v:1,exp_vid_len:this.expectedVideoLength,exp_vf_seq:this.expectedVfSeq,exp_pc_seq:this.expectedPvPart,exp_http_seq:this.httpSequenceNumber,http_payloads:this.httpPayloadCount,http_drop_oversize:this.httpDroppedPayloadByLengthCount,http_drop_type:this.httpDroppedPayloadByTypeCount,http_over_limit:this.httpOverLimitCount,vid_clicks:this.videoClicks,pv_clicks:this.pvClicks,did_cut_pv:this.didCutPv,did_cut_vid:this.didCutVideo,did_start_vid:this.didStartVideo,exp_http:this.httpCount,exp_err:this.errCount,on_url:jr(),cust_attr_total:this.customAttributeTotalCount,cust_attr_fail:this.customAttributeFailCount,cust_attr_key:this.customAttributeKeyCount};Object.keys(this.otherMetrics).length&&(t.omm=this.otherMetrics),window.dispatchEvent(new CustomEvent("noibuPostMetrics",{detail:e})),window.fetch&&window.fetch(A()+"/metrics",{method:"POST",headers:{"content-type":"application/json"},body:$r(t),keepalive:!0})}}function gs(...e){for(let t=0;t<e.length;t++)if(e[t]&&"string"==typeof e[t]){const n=e[t].toLowerCase();if(n.includes("securityerror"))return{metricsName:h,shouldBlock:!0};if(n.includes("provider is nullish"))return{metricsName:d,shouldBlock:!0};if(n.includes("quota")&&n.includes("exceeded")||n.includes("storage maximum size reached"))return{metricsName:u,shouldBlock:!1}}return null}class ms{constructor(e){this.pageVisitId=N()(),this.isClientDisabled=null,this.browserId=null,this.pageVisitSeq=null,this.lastActiveTime=new Date,this.collectErrorPostCounter=0,this.maxSocketInactiveTime=2100,this.noibuErrorURL=e,this._setupStorageVars()}static configureInstance(e){this.instance||(this.noibuErrorURL=e,this.instance=new ms(e),this.instance.noibuErrorURL=e)}static getInstance(){if(!this.instance)throw new Error("ClientConfig was not configured");return this.instance}lockClient(e,t){const n=new Date;n.setMinutes(n.getMinutes()+e);const r=this._getClientState();r.DisabledStatus=!0,r.ClientUnlockTime=n,this._storeBrowserData(r),this.postNoibuErrorAndOptionallyDisableClient(t,!0,"warn")}lockClientUntilNextPage(e){this.postNoibuErrorAndOptionallyDisableClient(e,!0,"warn")}updateLastActiveTime(e){this.lastActiveTime=e;const t=this._getLsObject();t.LastActive=e,this._storeBrowserData(t)}getPageVisitSeq(){if(this._pageVisitSeqNeedsReset()){this.pageVisitSeq=0;const e=this._getLsObject();e.CurrentPageVisitCount=this.pageVisitSeq+1,e.LastActive=new Date,this._storeBrowserData(e)}return this.pageVisitSeq}_getLsObject(){const e=ds.getInstance().load("n_browser_data");if(!e)return this._generateAndStoreData();let t={};try{t=JSON.parse(e)}catch(e){return this._generateAndStoreData()}return null==t.BrowserId||null==t.DisabledStatus||null==t.CurrentPageVisitCount||null==t.LastActive?this._generateAndStoreData():t}_pageVisitSeqNeedsReset(){const e=this._getClientState(),t=new Date;return t.setMinutes(t.getMinutes()-45),new Date(e.LastActive)<t}reportErrorMetricsAndDisableClient(e,t=1){const{metricsName:n,shouldBlock:r}=e;ps.getInstance().addOtherMetricsCount(n,t),ps.getInstance().postMetrics(n),this.isClientDisabled=this.isClientDisabled||r}_setupStorageVars(){const e=ds.getInstance();if(!e.isAvailable()){const t=e.getDiagnoseInfo(),n=gs(t.sessionStorageError,t.localStorageError);return n?this.reportErrorMetricsAndDisableClient(n):this.postNoibuErrorAndOptionallyDisableClient({details:"Storage is unavailable, disabling client.",diagnosis:t},!0,"error")}const t=this._getClientState();if(this._pageVisitSeqNeedsReset()&&(t.CurrentPageVisitCount=0),this.browserId=t.BrowserId,this.pageVisitSeq=t.CurrentPageVisitCount,this.isClientDisabled=t.DisabledStatus,this.isClientDisabled)return;if(t.CurrentPageVisitCount+=1,t.LastActive=new Date,"prod".includes("video")&&(t.pvId=this.pageVisitId),t.CurrentPageVisitCount>=300){const e=new Date;e.setMinutes(e.getMinutes()+45),t.ClientUnlockTime=e,t.DisabledStatus=!0,this.postNoibuErrorAndOptionallyDisableClient("Hit max page visits, disabling client for 45mins",!0,"error")}null===this._storeBrowserData(t).BrowserId&&(this.postNoibuErrorAndOptionallyDisableClient("Null browser in storage, disabling client",!0,"error"),this.browserId=null)}_getClientState(){const e=this._getLsObject();return e.ClientUnlockTime&&new Date(e.ClientUnlockTime)<=new Date&&(e.ClientUnlockTime=null,e.DisabledStatus=!1,this._storeBrowserData(e)),e}_generateAndStoreData(){return this._storeBrowserData(this._generateNewBrowserData())}_generateNewBrowserData(){const e={DisabledStatus:!1,BrowserId:N()(),CurrentPageVisitCount:0,ClientUnlockTime:null,LastActive:new Date};return"prod".includes("video")&&(e.pvId=this.pageVisitId),e}_storeBrowserData(e){const t=ds.getInstance();try{return t.save("n_browser_data",$r(e)),e}catch(e){const n=gs(e.toString());return n?this.reportErrorMetricsAndDisableClient(n):(this.postNoibuErrorAndOptionallyDisableClient({details:`Error writing browser data to storage, disabling client. ${e}${zr(e)}`,diagnosis:t.getDiagnoseInfo()},!0,"error"),{DisabledStatus:!0,BrowserId:null,CurrentPageVisitCount:0})}}postNoibuErrorAndOptionallyDisableClient(e,t,n,r=!1){if(this.isClientDisabled)return;if(t&&(this.isClientDisabled=!0),"warn"===n)return;const s={browserId:this.browserId||"",pageVisitId:this.pageVisitId,scriptId:C(),ua:window.navigator.userAgent,error:e};if(this.collectErrorPostCounter>=50){const e=new Date;e.setMinutes(e.getMinutes()+10);const t=this._getClientState();t.DisabledStatus=!0,t.ClientUnlockTime=e,this._storeBrowserData(t),this.isClientDisabled=!0,s.error="Shutting collect off, we reached the maximum limit of collect errors sent."}const i={url:jr(),err_msg:s,sev:n},o={"content-type":"application/json"};r?fetch(this.noibuErrorURL,{method:"POST",headers:o,body:$r(i),keepalive:!0}):Qr("POST",this.noibuErrorURL,i,o,2e3,!1).catch(()=>{}),"error"===n&&(this.collectErrorPostCounter+=1)}isInactive(){const e=new Date;return e.setSeconds(e.getSeconds()-this.maxSocketInactiveTime),this.lastActiveTime<e}}var fs=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))};class vs{constructor(){this.latestPageVisitFrag=null,this.writeTimeout=null,this.flushedStorage=!1;ds.getInstance().isAvailable()&&this._postPreviousPageVisit()}static getInstance(){return this.instance||(this.instance=new vs),this.instance}checkAndStoreRetryQueue(e,t){const{type:n,payload:r}=e[e.length-1];if("p"!==n||!r.pvp)return;(r.pvp.events?r.pvp.events:[]).filter(e=>"userstep"===e.type||"err"===e.type||"loc"===e.type).length>0&&this.writePageVisitsFromRetryQueue(e,t)}writePageVisitsFromRetryQueue(e,t){const n=e.filter(({type:e})=>"p"===e).map(({payload:e})=>e.pvp);this._writePageVisitFrags(n,t)}_writePageVisitFrags(e,t){const n={pageVisitFrags:e,pageVisitInfo:t,timestamp:new Date},r=ds.getInstance(),s=$r(n);try{r.save("n_stored_page_visit",s)}catch(t){r.remove("n_stored_page_visit");const n=gs(t.toString());if(n)return void ms.getInstance().reportErrorMetricsAndDisableClient(n,e.length);ms.getInstance().postNoibuErrorAndOptionallyDisableClient({details:`Error writing pv to storage: ${t.toString()}${zr(t)}`,diagnosis:r.getDiagnoseInfo()},!1,"error")}}_getPostData(){const e=ds.getInstance(),t=e.load("n_stored_page_visit");if(!t)return null;let n={};try{n=JSON.parse(t)}catch(n){return e.remove("n_stored_page_visit"),ms.getInstance().postNoibuErrorAndOptionallyDisableClient(`Error parsing page visit string '${t}': ${n}`,!1,"error"),null}if(n.timestamp){const e=new Date;if(e.setSeconds(e.getSeconds()-2100),+e>=Date.parse(n.timestamp))return null}const r={pvi:n.pageVisitInfo,pvp:[],pvvf:[]};return r.pvi.last=!0,r.pvp.push(...n.pageVisitFrags),r}_postPreviousPageVisit(){return fs(this,void 0,void 0,(function*(){const e=this._getPostData();if(e){const t={"content-type":"application/json"};yield Qr("POST",E(),e,t,2e3,!0).catch(e=>{ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Page visit post request rejected due to: "+e,!1,"error")})}this._updateStorageFlushed()}))}_updateStorageFlushed(){this.flushedStorage=!0;ds.getInstance().remove("n_stored_page_visit")}}function ys(){return!("now"in Date)||("number"!=typeof Date.now()||(!("toISOString"in new Date)||"string"!=typeof(new Date).toISOString()))}function Is(e){if("number"!=typeof e&&ys()){if(Date.prototype.hasOwnProperty("valueOf")&&"function"==typeof e.valueOf&&"number"==typeof e.valueOf())return e.valueOf();ms.getInstance().postNoibuErrorAndOptionallyDisableClient("The date object has been overwritten and can't be processed properly.\nClient has been disabled.",!0,"error",!0)}return e}function bs(){return window.performance&&window.performance.now?window.performance.now():Is(Date.now())}function Cs(e,t=[],n=1.5,r=2){return new Proxy(t,{get:(t,s)=>"push"===s?(...s)=>{t.push(...s),t.length>=n*e&&t.splice(0,e/r)}:t[s]})}class Ss{constructor(e){this.retryMessageQueue=Cs(500);const t=w();this.forceClosed=!1,this.socket=null,this.socketInstanceId=null,this.previousMessageType="",this.currentConnectionAttempts=0,this.connectionCount=0,this.sessionStartTime=bs(),this.connectionPromise=null,this.pageVisitInfoSent=!1,this.connectionURL=t+"/pv_part",this.postURL=E(),this.messageSequenceNum=0,this.latestReceivedSeqNumber=-1,this.isRetryLoopDisabled=!1,this.metroplexTypeLock={},this.initialURL=jr(),this.initialReferingURL=window.document.referrer?Wr(window.document.referrer):"",this.sessionTimestamp=new Date,this.latestReceivedSeqNumStoredTime=new Date,this.instanceId=N()(),this.scriptInstanceId=e,this.sessionLength=0,this.socketCloseCodes=[],this.socketOpens=[],this.ackedOnce=!1,this.metroRetryFrequencyMS=3e4}static getInstance(e){return this.instance||(this.instance=new Ss(e),this.instance.start()),this.instance}start(){this.connectSocket(),this._setupOffloadEvents()}_addSeqNumToPayload(e,t){switch(e){case"p":this._setSeqNumInPayloadAndIncrementSeqNum("pvp",t);break;case"v":this._setSeqNumInPayloadAndIncrementSeqNum("pvvf",t);break;case"h":this._setSeqNumInPayloadAndIncrementSeqNum("pvh",t);break;case"m":this._setSeqNumInPayloadAndIncrementSeqNum("pvm",t)}}_setSeqNumInPayloadAndIncrementSeqNum(e,t){t[e].seq_num=this.messageSequenceNum,this.messageSequenceNum+=1}sendMessage(e,t){if(e in this.metroplexTypeLock||ms.getInstance().isClientDisabled)return!1;const n=t;if("wr"!==e&&(this._addSeqNumToPayload(e,n),this.retryMessageQueue.push({payload:n,type:e}),vs.getInstance().checkAndStoreRetryQueue(this.retryMessageQueue,this.getPageInformation())),this.isConnected()&&this.pageVisitInfoSent&&this._sendSocketMessage(n),this.previousMessageType=e,"p"===e&&t.pvp){const e=t.pvp.events?t.pvp.events:[];this._updateLatestPvTimestamp(e)}return!0}_updateLatestPvTimestamp(e){e.filter(e=>"userstep"===e.type).length>0&&ms.getInstance().updateLastActiveTime(new Date)}isConnected(){return null!==this.socket&&1===this.socket.readyState}isConnecting(){return null!==this.socket&&0===this.socket.readyState}close(){this.forceClosed=!0,(this.isConnected()||this.isConnecting())&&this.socket.close(1e3)}handleConnect(e,t){(t||!this.isConnected()&&!this.isConnecting())&&(this.currentConnectionAttempts+=1,this.socket=new WebSocket(this.connectionURL),this.socketInstanceId=N()(),this.socket.onerror=()=>{},this.socket.onclose=t=>{this.pageVisitInfoSent=!1,this.forceClosed||(this.socketCloseCodes.push(`${ys()?"":(new Date).toISOString()}:${t.code}`),this.isConnecting()||(clearInterval(this.retryMetroplexInterval),this.currentConnectionAttempts>=function(){try{return 20}catch(e){return 2}}()?ms.getInstance().lockClientUntilNextPage("Too many reconnection attempts, locking until next page"):this.connectionCount>=100?ms.getInstance().lockClientUntilNextPage("Too many connections, locking until next page"):setTimeout(()=>{this.handleConnect(e,!1)},Math.pow(this.currentConnectionAttempts,2)*function(){try{return METROPLEX_CONSECUTIVE_CONNECTION_DELAY}catch(e){return 1e3}}())))},this.socket.onmessage=t=>{this._onSocketMessage(t,e)},this.socket.onopen=()=>{this.socketOpens.push(""+(ys()?"":(new Date).toISOString())),this._onSocketOpen()})}connectSocket(){return this.isConnected()||this.isConnecting()||(this.connectionPromise=new Promise(e=>{this.handleConnect(e,!1),hs(window,"visibilitychange",()=>{if(ms.getInstance().isClientDisabled)return;const t="visible"===document.visibilityState;t&&(this.forceClosed=!1,(this.isConnected()||this.isConnecting())&&(this.socket.onclose=()=>{},this.socket.close(1e3)),this.handleConnect(e,t))})})),this.connectionPromise}addEndTimeToPayload(e,t){const n=Math.ceil(bs()-this.sessionStartTime);t&&(this.sessionLength=n);const r=new Date(this.sessionTimestamp.getTime()+n).toISOString();e.end_at=r}_onSocketOpen(){this.isConnected()&&!ms.getInstance().isClientDisabled&&(this._sendSocketMessage(this.getPageInformation()),this.pageVisitInfoSent=!0,this.currentConnectionAttempts=0,this.previousMessageType="",this._sendUnconfirmedMessages(!1),this.setupRetryMechanism(),this.connectionCount+=1)}_onSocketMessage(e,t){switch(e.data){case"vid_block":this.metroplexTypeLock.v=!0,ps.getInstance().setDidCutVideo();break;case"pv_block":this.metroplexTypeLock.p=!0,ps.getInstance().setDidCutPv();break;case"full_block":ms.getInstance().lockClient(1440,"Metroplex blocked script"),this.close();break;case"close_conn":this.close();break;case"ok":break;default:if(e.data.includes("seq_num")){const n=e.data.split("seq_num:");if(n.length<2){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Invalid message received from metroplex while clearing retry queue "+e.data,!1,"error");break}const r=parseInt(n[1],10);if(-1===r)break;r<=this.latestReceivedSeqNumber?this.isRetryLoopDisabled=!0:(this.isRetryLoopDisabled=!1,this.latestReceivedSeqNumber=r,this._clearRetryQueue(r)),!this.ackedOnce&&t&&(this.ackedOnce=!0,t())}if(this._tryProcessHelpCodeResponse(e.data))break}}_messagePayloadHasLargerSeqNum(e,t,n){return e.payload[t]&&e.payload[t].seq_num&&e.payload[t].seq_num>n}_clearRetryQueue(e){this.latestReceivedSeqNumStoredTime=new Date;const t=this.retryMessageQueue.filter(t=>this._messagePayloadHasLargerSeqNum(t,"pvp",e)||this._messagePayloadHasLargerSeqNum(t,"pvvf",e));this.retryMessageQueue=Cs(500,t)}_sendUnconfirmedMessages(e){if(!this.isConnected()||ms.getInstance().isClientDisabled)return;if(e){const e=new Date;if(e.setMilliseconds(e.getMilliseconds()-this.metroRetryFrequencyMS),e<this.latestReceivedSeqNumStoredTime)return;if(this.isRetryLoopDisabled)return}const t=this.retryMessageQueue.filter(e=>!(e.type in this.metroplexTypeLock));this.retryMessageQueue=Cs(500,t);for(let e=0;e<this.retryMessageQueue.length;e+=1){const{type:t,payload:n}=this.retryMessageQueue[e];if(!this._sendSocketMessage(n))break;this.previousMessageType=t}}setupRetryMechanism(){this.retryMetroplexInterval=setInterval(()=>{this._sendUnconfirmedMessages(!0)},3e4)}_setupOffloadEvents(){hs(window,"pagehide",()=>{this._handleUnload()})}_handleUnload(){this.close(),ms.getInstance().isClientDisabled||ms.getInstance().isInactive()||this.postFullPageVisit()}postFullPageVisit(e=59e3){if(0===this.retryMessageQueue.length)return;const t=[],n={v:0,p:0};let r=0,s={pvi:this.getPageInformation(),pvp:[],pvvf:[],pvh:[],vpnum:this.connectionCount};if(s.pvi.last=!0,this.retryMessageQueue.forEach(i=>{let{type:o,payload:a}=i;const c=new Blob([$r(a)]).size;if(c>e)n[o]+=1;else{if(r+=c,r>=e){this.postMessage(s);let e="Vid: "+s.pvvf.length;e+=" PV: "+s.pvp.length,e+=` HTTP: ${s.pvh.length},`,t.push(e),s={pvi:this.getPageInformation(),pvp:[],pvvf:[],pvh:[],vpnum:s.vpnum},s.pvi.last=!0,r=c}switch(o){case"v":s.pvvf.push(a.pvvf);break;case"p":s.pvp.push(a.pvp);break;case"h":s.pvh.push(a.pvh)}}}),this.postMessage(s),this.retryMessageQueue.length>500){let e="Vid: "+s.pvvf.length;e+=" PV: "+s.pvp.length,e+=` HTTP: ${s.pvh.length},`,t.push(e);let r="POST Full PV complete";r+=", POSTs count: "+t.length,r+=", POSTs info: "+$r(t),r+=", Retry message queue size: "+this.retryMessageQueue.length,n.v>0&&(r+=", Video parts dropped: "+n.v),n.p>0&&(r+=", Page visit parts dropped: "+n.p),n.h>0&&(r+=", HTTP data parts dropped: "+n.h),r+=", Sequence Info: Latest "+this.messageSequenceNum,r+=` Ack'd ${this.latestReceivedSeqNumStoredTime} ${this.latestReceivedSeqNumber}`;const i=ms.getInstance().isClientDisabled;ms.getInstance().isClientDisabled=!1,ms.getInstance().postNoibuErrorAndOptionallyDisableClient(r,i,"error")}}postMessage(e){const t=e;t.vpnum+=1,window.fetch&&fetch(this.postURL,{method:"POST",headers:{"content-type":"application/json"},body:$r(t),keepalive:!0})}_sendSocketMessage(e){return!this.closeIfInactive()&&(this.socket.send($r(e)),!0)}closeIfInactive(){const e=ms.getInstance().isInactive();return e&&!ms.getInstance().isClientDisabled&&(ms.getInstance().lockClientUntilNextPage("Session is inactive, locking until next page"),this.close(),ps.getInstance().postMetrics("inactive"),this.postFullPageVisit()),e}getPageInformation(){const e={br_id:ms.getInstance().browserId,pv_id:ms.getInstance().pageVisitId,v:5,seq:ms.getInstance().getPageVisitSeq(),on_url:this.initialURL,ref_url:this.initialReferingURL,start_at:this.sessionTimestamp.toISOString(),conc:this.connectionCount,cv:2,last:!1,script_id:C(),script_inst_id:this.scriptInstanceId,mp_sock_inst_id:this.instanceId,sock_inst_id:this.socketInstanceId},t=function(){const e=window.navigator.userLanguage||window.navigator.language;return""!==e&&e?e.toLowerCase():null}();return t&&(e.lang=t),e}_tryProcessHelpCodeResponse(e){if("string"!=typeof e||!e.startsWith("hc:"))return!1;const t=e.substring("hc:".length),n=/^\d{6}$/.test(t),r=new CustomEvent("noibuHelpCode",{detail:{success:n,data:t}});return window.dispatchEvent(r),!0}}class ws{constructor(){this.partCounter=0,this.pvMap={},this.partCounter=0,this.pvEventLength=0,this.visibilityChangedCounter=0,this.totalPvEventLength=0,this.inDebounceHandle=0,this.isInAcceleratedPvPostMode=!1}static configureInstance(){this.instance||(this.instance=new ws)}static getInstance(){if(!this.instance)throw new Error("Pagevisit was never configured");return this.instance}addPageVisitEvents(e,t){e.forEach(e=>{this._addPageVisitEvent(e,t)}),this._sendPageVisitMessage()}addPageVisitEvent(e,t){const n=this._addPageVisitEvent(e,t);return this._sendPageVisitMessage(),n}_addPageVisitEvent(e,t){if(!("occurredAt"in e)||!("event"in e))throw new Error("missing attributes in the eventObj");const n={type:t,occ_at:e.occurredAt,[t]:e.event};this.pvEventLength>=200&&this._sendPageVisitMessage();const r=N()();return this.pvMap[r]=n,this.pvEventLength+=1,this.totalPvEventLength+=1,r}static makePageVisitFrag(e,t){const n={};return n.events=e,n.pc=t,Ss.getInstance().addEndTimeToPayload(n,!0),n}_sendPageVisitMessage(){const e=Object.keys(this.pvMap).map(e=>this.pvMap[e]);if(0===e.length)return;if(this.partCounter>=1e4)return void ms.getInstance().lockClientUntilNextPage(`NoibuJS will stop processing parts because we reached max parts: 10000. Variables: \n      total Pv Event Length: ${this.totalPvEventLength}\n      visibility Changed Counter: ${this.visibilityChangedCounter}\n      `);const t=ws.makePageVisitFrag(e,this.partCounter);ps.getInstance().setPvPart(this.partCounter);const n={pvp:t};Ss.getInstance().sendMessage("p",n),this.pvMap={},this.pvEventLength=0,this.partCounter+=1}}class As{constructor(){this.eventsToDebounce={},this.registerInputType("loc",0),this.registerInputType("page",500),this.registerInputType("err",500),this.registerInputType("http",500),this.registerInputType("network",500),this.registerInputType("kbd",500,"userstep"),this.registerInputType("ecommerce",500),this._setupUnloadHandler()}static getInstance(){return this.instance||(this.instance=new As),this.instance}registerInputType(e,t,n=e){e in this.eventsToDebounce||(this.eventsToDebounce[e]={timeout:null,events:[],debouncePeriod:t,eventName:n})}addEvent(e,t){t in this.eventsToDebounce?(this.eventsToDebounce[t].events.push({event:e,occurredAt:new Date(Is(Date.now())).toISOString()}),this._debouncePvEvents(t)):ms.getInstance().postNoibuErrorAndOptionallyDisableClient(new Error(`Type: ${t} is not in eventsToDebounce`),!1,"error")}_debouncePvEvents(e){clearTimeout(this.eventsToDebounce[e].timeout),this.eventsToDebounce[e].timeout=setTimeout(()=>{this.eventsToDebounce[e].timeout=null,ws.getInstance().addPageVisitEvents(this.eventsToDebounce[e].events,this.eventsToDebounce[e].eventName),this.eventsToDebounce[e].events=[]},this.eventsToDebounce[e].debouncePeriod)}_setupUnloadHandler(){hs(window,"pagehide",()=>{Object.values(this.eventsToDebounce).forEach(e=>{ws.getInstance().addPageVisitEvents(e.events,e.eventName)})})}}const Es=["jpeg","jpg","png","gif","svg","bmp","tiff","webp","avif","heif"];function ks(e){return!(function(e){if(!e)return!1;if((e=e.toLowerCase()).startsWith("blob:")||e.startsWith("file:"))return!1;e.startsWith("//")&&(e=window.location.protocol+e);try{const t=new URL(e).pathname,n=t.lastIndexOf(".");if(-1!==n){const e=t.substring(n+1);return Es.includes(e)}}catch(e){}return!1}(e.src)&&e.width>1&&e.height>1)}function Rs(e){let t=null,n=null;try{const r=function(e){if(!(e instanceof Element))return null;function t(t){let n=0;for(let r=t.previousElementSibling;r;r=r.previousElementSibling)r.tagName===e.tagName&&(n+=1);return n}const n=[];for(;e&&e.nodeType===Node.ELEMENT_NODE;){let r=e.tagName.toLowerCase();const s=t(e);s>0&&(r+=`:nth-of-type(${s+1})`),n.unshift(r),e=e.parentNode}return n.length?n.join(" > "):null}(e);if(!r)return null;if(!r.startsWith("html"))return null;r&&document.querySelector(r)===e?t=r:n=`selector test fail '${r}'`}catch(e){n=`failed to generate selector (${e})`}return n&&ms.getInstance().postNoibuErrorAndOptionallyDisableClient(n,!1,"error"),t}function Ts(e){return{url:rs(e.filename),type:"js",j_err:Zr(e.error)}}function _s(e){if(ks(e))return null;setTimeout(()=>function(e){const t=Rs(e);if(t){const n={selector:t,src:e.src},r=new CustomEvent("noibuImageError",{detail:n});dispatchEvent(r)}}(e));const{tagName:t,id:n,src:r,alt:s,title:i,width:o,height:a}=e,c=JSON.stringify({alt:s,title:i,width:o,height:a});return{url:jr(),type:"res",res_err:{tag_name:t,id:n||null,src:r,detail:c}}}function Ms(e,t,n){let r=t;t.error&&t.error.originalError&&(r=t.error.originalError);let s=null;switch(e){case"XMLHttpRequest":s=function(e,t){const n={url:rs(e.responseURL,!0),type:"http",h_code:e.status};return(t||0===t)&&(n.seq=t),n}(r,n);break;case"ErrorEvent":s=Ts(r);break;case"Response":s=function(e,t){const n={url:rs(e.url,!0),type:"http",h_code:e.status};return(t||0===t)&&(n.seq=t),n}(r,n);break;case"GQLError":e="Response",s=function(e,t){const n={url:jr(),type:"gql",gql_err:e};return(t||0===t)&&(n.seq=t),n}(r,n);break;case"ImageError":e="ErrorEvent",s=_s(r);break;case"WrappedException":case"FetchException":s=Ts(r);break;case"ErrorLogEvent":s=function(e){return{url:jr(),type:"js",j_err:Zr(e)}}(r);break;case"UnhandledRejectionError":case"CustomError":s=Ts(r);break;default:try{s=Ts(r),r instanceof Event&&(!function(e,t,n){let r=null;if(n.detail)try{r=$r(n.detail)}catch(e){r="non-serializable"}let s=`Fire error event of type ${e}.`;null!=r&&(s+=` Detail: ${r}.`),t.j_err.msg=Wr(s)}(e,s,r),e="ErrorEvent")}catch(e){return null}}return s&&(s.err_src=e),s}function Ns(e,t,n){if("Event"===e){if(!(r=t)||"error"!==r.type||!ss(r.target,HTMLImageElement))return;e="ImageError",t=t.target}var r;const s=Ms(e,t,n);if(!s||!s.url)return;const i=s.url;if(ts(i)){const e=new URL(i);if(e.hostname in as||!e.protocol.startsWith("http"))return}if(function(e){const t=JSON.stringify(e);return k.some(e=>e(t))}(s))return;(function(e){if("js"===e.type){if(e.j_err){const t=e.j_err.frames;if(t&&t.length>0){const n=t[0].file.toLowerCase(),r=t[0].mname.toLowerCase();if(n.includes("noibu")&&!r.includes("nbuwrapper"))return ms.getInstance().postNoibuErrorAndOptionallyDisableClient(e,!1,"error"),!0}}if(e.msg){const t=e.msg.toLowerCase();if(t.includes("input.noibu")||t.includes("input.b.noibu"))return ms.getInstance().postNoibuErrorAndOptionallyDisableClient(e,!1,"error"),!0}}else if("http"===e.type&&e.url){const t=e.url;if("string"==typeof t)for(let n=0;n<g.length;n+=1){const r=g[n];if(t.includes(r))return ms.getInstance().postNoibuErrorAndOptionallyDisableClient(e,!1,"error"),!0}}return!1})(s)||(ps.getInstance().addError(),As.getInstance().addEvent(s,"err"))}let Os=0;function Ds(e){if("function"!=typeof e)return e;if(e===Function.prototype)return e;try{if(e.__noibu__)return e;if(e.__noibu_wrapped__)return e.__noibu_wrapped__}catch(t){return e}const nbuWrapper=function(...t){try{const n=Array.prototype.slice.call(t).map(e=>Ds(e));return e.handleEvent?e.handleEvent.apply(this,n):e.apply(this,n)}catch(e){throw Ns("WrappedException",{error:e}),Os+=1,setTimeout(()=>{Os-=1}),e}};try{for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(nbuWrapper[t]=e[t])}catch(e){}nbuWrapper.prototype=e.prototype||{},Object.defineProperty(e,"__noibu_wrapped__",{enumerable:!1,value:nbuWrapper}),Object.defineProperties(nbuWrapper,{__noibu__:{enumerable:!1,value:!0},__noibu_original__:{enumerable:!1,value:e}});try{Object.getOwnPropertyDescriptor(nbuWrapper,"name").configurable&&Object.defineProperty(nbuWrapper,"name",{get:()=>e.name})}catch(t){return e}return nbuWrapper}function Ls(e){const t=[];e.forEach(e=>{e&&(Array.isArray(e)?t.push(...e):t.push(e))});const{errorLikeObjs:n,rest:r}=t.reduce((e,t)=>(!function(e){if(!e)return!1;const t=e;return"string"==typeof t.stack&&"string"==typeof t.message&&!(!t.stack||!t.message)}(t)?e.rest.push(t):e.errorLikeObjs.push(t),e),{errorLikeObjs:[],rest:[]});n.concat(function(e){const t=e.filter(e=>"string"==typeof e&&!!e);if(!t.length)return[];if(2===t.length)switch(!0){case Gr(t[0]):return[{stack:t[0],message:t[1]}];case Gr(t[1]):return[{stack:t[1],message:t[0]}];default:return[]}const n=[],r=[];return t.forEach(e=>{if(Gr(e)){n.push(e);const t=e.split("\n");Gr(t[0],0)?r.push("_"):r.push(t[0])}}),n.map((e,t)=>({stack:e,message:r[t]}))}(r)).forEach(e=>Ns("ErrorLogEvent",e))}function xs(e){e&&m.forEach(t=>{e[t]&&mr(e,t,(function(t){return function nbuWrapper(){t.call(e,...arguments),Ls(Array.from(arguments))}}))})}function Ps(){l.forEach(e=>{const t=window[e],n=t&&t.prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(mr(n,"addEventListener",(function(e){return function nbuWrapper(t,n,r){if(!n)return e.call(this,t,n,r);let s;if(n.handleEvent){const e=Ds(n.handleEvent.bind(n));s=n,s.handleEvent=e}else s=Ds(n);return e.call(this,t,s,r)}})),mr(n,"removeEventListener",(function(e){return function nbuWrapper(t,n,r){let s=n;try{s=s&&(s.__noibu_wrapped__||s)}catch(e){}return e.call(this,t,s,r)}})))}),xs(window.console),function(e){let t=0,n=e;const r=()=>{if(t+=1,window.console!==n){n=window.console;const t={};Object.keys(e).forEach(e=>{window.console[e]||(window.console[e]=()=>{t[e]||(t[e]=!0,Ns("GlobalReassignError",{error:new Error(`The console object was overridden and the ${e} method does not exist. Backfilling it with an empty function to avoid errors.`)}))})}),xs(window.console)}t<3&&setTimeout(r,500)};setTimeout(r,500)}(window.console)}function Fs(e){e&&e.constructor&&e.constructor.name&&"undefined"!==e.constructor.name&&!(Os>0)&&Ns(e.constructor.name,e)}function Us(e){if(!e.reason)return;if(!e.reason.message||!e.reason.stack)return;const t=new Error;t.message=e.reason.message,t.stack=e.reason.stack;Ns("UnhandledRejectionError",{error:t})}function Vs(e){return"number"!=typeof e||(e>=400||e<=0)}class Bs{constructor(e,t,n=null){const r=e;(!r.resp_time||r.resp_time<0)&&(r.resp_time=0),r.mtd=e.mtd.toUpperCase(),r.url=Wr(Jr(r.url)),this.httpEvent=r,this.httpData=t,this.gqlError=n}saveHTTPEvent(){if(!this.httpEvent||!this.httpEvent.url||""===this.httpEvent.url.trim())return;ps.getInstance().addHttpEvent();const e=this.httpEvent.code,t=!!this.gqlError;if(this.httpData){const n=ps.getInstance().httpSequenceNumber;if(Bs.isSendAllowed(e,n,t)){this.httpData.seq=n,this.httpEvent.seq=n,ps.getInstance().addHttpData();const e={};e.pvh=this.httpData,Ss.getInstance().sendMessage("h",e)}else ps.getInstance().addHttpDataOverLimit()}Vs(e)?ws.getInstance().addPageVisitEvent({event:this.httpEvent,occurredAt:new Date(Is(Date.now())).toISOString()},"http"):As.getInstance().addEvent(this.httpEvent,"http")}static isSendAllowed(e,t,n){const r=Vs(e)||n;return!(r||!(t<100))||!!(r&&t<120)}}class Ws{constructor(){this.contentTypeReadableRegex=new RegExp("text|json|xml|html|graphql|x-www-form-urlencoded|form-data","i");const e=jr();if(this.initialURLPartsReversed=[],e&&e.length>0)try{const t=new URL(e).hostname;this.initialURLPartsReversed=t.split("."),a.test(this.initialURLPartsReversed[0])&&this.initialURLPartsReversed.shift(),this.initialURLPartsReversed.reverse()}catch(e){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Unable to determine hostname for initial URL: "+e,!1,"warn")}this.httpDataCollectionEnabled=!!p().http_data_collection;const t=Xr();this.httpDataAllowedAbsoluteRegex=Ws.buildAllowedRegex(t,!0),this.httpDataAllowedRelativeRegex=Ws.buildAllowedRegex(t,!1),this.fuzzyFieldsToRedact=["password","address","credit","postal","token","phone","mobile"],this.exactFieldsToRedact=["firstname","lastname","street","fullname","creditcard","postcode","zipcode","city","town","county","cc"]}static getInstance(){return this.instance||(this.instance=new Ws),this.instance}static buildAllowedRegex(e,t){if(!e)return null;const n=e.filter(e=>{const n=Ws.isAbsoluteURL(e);return t?n:!n});if(n.length>0){const e=n.map(e=>e.trim().toLowerCase());return new RegExp(e.join("|"))}return null}static headersMapFromIterable(e){const t=new Map;for(const n of e)"string"!=typeof n[0]&&(n[0]=String(n[0])),"string"!=typeof n[1]&&(n[1]=String(n[1])),t.set(n[0].toLowerCase(),n[1]);return t}static headersMapFromString(e){const t=new Map;if(!e||"string"!=typeof e)return t;return e.split("\r\n").filter(Boolean).forEach((function(e){const n=e.split(": ");2===n.length&&n[0].length>0&&n[1].length>0&&t.set(n[0].toLowerCase(),n[1])})),t}static responseStringFromXHRResponseType(e){if(null==e)return null;if(e.response&&null===e.response)return"null";if(""===e.responseType||"text"===e.responseType)return e.responseText;if("document"===e.responseType&&e.response&&e.response.documentElement&&e.response.documentElement.innerHTML)return e.response.documentElement.innerHTML;if("json"===e.responseType)try{return JSON.stringify(e.response)}catch(e){return ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Unable to stringify JSON response: "+e,!1,"warn"),null}return null}isURLSameDomain(e){if("string"!=typeof e||!this.initialURLPartsReversed||this.initialURLPartsReversed.length<1)return!1;let t;try{t=new URL(e).hostname}catch(e){return ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Unable to determine hostname for request URL: "+e,!1,"warn"),!1}const n=t.split(".");return!(n.length<1)&&(a.test(n[0])&&n.shift(),!(n.length<this.initialURLPartsReversed.length)&&(n.reverse(),this.initialURLPartsReversed.every((e,t)=>e===n[t])))}bundleHTTPData(e,t,n,r,s,i){if(!this.isValidRequest(e,i))return null;let o="";this.shouldCollectPayloadForURL(e)&&(o=this.dropPayloadIfNecessaryFromHeaders(t)||this.stringFromRequestBody(n));const a=t||new Map,c=o||"",l=r||new Map,u=s||"";if(0===a.size&&0===c.length&&0===l.size&&0===u.length)return null;const d=this.restrictPayload(o,e),h=this.restrictPayload(s,e);return{rqh:vr(this.removePIIHeaders(t)),rqp:d,rsh:vr(this.removePIIHeaders(r)),rsp:h}}isValidRequest(e,t){return!!this.httpDataCollectionEnabled&&!(!t||"string"!=typeof t)}shouldContinueForURL(e){return!!this.httpDataCollectionEnabled&&(!(!e||"string"!=typeof e||!this.initialURLPartsReversed)&&!(Ws.isAbsoluteURL(e)&&!this.isURLSameDomain(e)&&!this.shouldCollectPayloadForURL(e)))}static isAbsoluteURL(e){return!(!e||"string"!=typeof e)&&(e.indexOf("://")>0||0===e.indexOf("//"))}shouldCollectPayloadForURL(e){return!(!e||"string"!=typeof e)&&(!(!this.httpDataAllowedAbsoluteRegex||!this.httpDataAllowedAbsoluteRegex.test(e.toLowerCase()))||!(!this.httpDataAllowedRelativeRegex||Ws.isAbsoluteURL(e)&&!this.isURLSameDomain(e)||!this.httpDataAllowedRelativeRegex.test(e.toLowerCase())))}restrictPayload(e,t){return e&&this.shouldCollectPayloadForURL(t)?"null"===e||e.startsWith("Dropped due to length.")||e.startsWith("Dropped due to unsupported type.")?e:e.length>5e4?(ps.getInstance().addHttpDataDropByLength(),"Dropped due to length. Payload length: "+e.length):(ps.getInstance().addHttpDataPayloadCount(),this.removePIIBody(e)):"null"}contentLengthAcceptable(e){const t=this.contentLength(e);return t<0||(!(t>5e4)||(ps.getInstance().addHttpDataDropByLength(),!1))}contentTypeAcceptable(e){if(!e||!e.get)return!0;const t=e.get("content-type");return!(t&&!this.contentTypeReadableRegex.test(t.toLowerCase()))||(ps.getInstance().addHttpDataDropByType(),!1)}dropPayloadIfNecessaryFromHeaders(e){let t="";return Ws.getInstance().contentTypeAcceptable(e)?Ws.getInstance().contentLengthAcceptable(e)||(t="Dropped due to length. Payload length: "+Ws.getInstance().contentLength(e)):(t="Dropped due to unsupported type.",e&&e.get&&(t+=" Payload type: "+e.get("content-type"))),t}contentLength(e){if(!e||!e.get)return 0;let t=0;const n=e.get("content-length");if(!n)return-1;try{if(t=parseInt(n,10),Number.isNaN(t))return-1}catch(e){return-1}return t}stringFromRequestBody(e){if(null==e)return null;try{(e instanceof FormData||e instanceof URLSearchParams)&&(e=Array.from(e.entries()).reduce((e,[t,n])=>(e[t]="string"==typeof n?n:"non-string value.",e),{}))}catch(e){}try{const t=e.toString();if(!t.includes("[object"))return t}catch(e){}try{return e.documentElement.innerHTML}catch(e){}try{return JSON.stringify(e)}catch(e){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Unable to stringify request body: "+e,!1,"warn")}return null}removePIIHeaders(e){if(!(e instanceof Map))return null;if(e.size<1)return e;const t=new Map(e);return t.forEach((e,t,n)=>{r.includes(t.toLowerCase())?n.set(t,"******"):n.set(t,this.removePIIBody(e))}),t}removePIIBody(e){if("string"!=typeof e)return null;if(e.length<1)return e;let t=this.tryPaseObjectAndRemovePII(e);return o.forEach(e=>{t=t.replace(e,"******")}),t}tryPaseObjectAndRemovePII(e){const t=e[0];if(!("{"===t||"["===t))return e;let n=!1;try{const t=JSON.parse(e);return((e,t,n={depth:5})=>{const r=(e,s)=>{if(!(s>n.depth))for(const n in e)try{const i=t(e,n,e[n]);void 0!==i&&(e[n]=i),null!==e[n]&&"object"==typeof e[n]&&r(e[n],s+1)}catch(e){}};r(e,1)})(t,(e,t)=>{const r=t.toLowerCase();return this.exactFieldsToRedact.some(e=>r===e)||this.fuzzyFieldsToRedact.some(e=>r.includes(e))?(n=!0,"******"):void 0}),n?JSON.stringify(t):e}catch(t){return e}}}class Gs{static async fromFetch(e,t,n,r){try{if(!(ss(r,Response)&&r.ok&&!r.bodyUsed))return null;const s=this._getContentTypeFromFetchArguments(t,n);if(this._shouldHandleRequest(e,s)){const t=await r.json();return this._validate(t,e,[])}}catch(e){this._isRequestAborted(t,n)||this._postError(e)}return null}static async fromXhr(e,t){try{if(!(ss(t,XMLHttpRequest)&&t.status>=200&&t.status<=299))return null;let n=null;if(t.noibuRequestHeaders&&(n=t.noibuRequestHeaders.get("content-type")),this._shouldHandleRequest(e,n)){let n=null;if("blob"===t.responseType){if(t.response.text){const e=await t.response.text();n=this._parseJsonSafely(e)}}else if("json"===t.responseType)n=t.response;else{const e=t.responseText;n=this._parseJsonSafely(e)}if(n)return this._validate(n,e,[])}}catch(e){this._postError(e)}return null}static _parseJsonSafely(e){try{return JSON.parse(e)}catch(e){return null}}static _getContentTypeFromFetchArguments(e,t){let n=null;ss(t,Request)?n=t.headers:e&&e.headers&&(n=new Headers(e.headers));let r=null;return n&&(r=n.get("content-type")),r}static _isRequestAborted(e,t){return ss(t,Request)?t.signal&&t.signal.aborted:!(!e||!ss(e.signal,AbortSignal))&&e.signal.aborted}static _shouldHandleRequest(e,t){is(t)&&(t=t.toLowerCase());let n=!1;return e&&(ss(e,URL)&&(e=e.toString()),is(e)&&(n=e.toLowerCase().includes("graphql"))),"application/json"===t&&n||"application/graphql"===t}static _validate(e,t,n){let r=null;if(e&&Array.isArray(e.errors)){r=e.errors;for(const e of r){const r=Object.keys(e);for(const t of r)switch(t){case"message":this._validateMessage(e);break;case"locations":this._validateLocations(e,n);break;case"path":this._validatePath(e,n);break;case"extensions":this._validateExtensions(e);break;default:delete e[t],n.push("unexpected error."+t)}e.src=t}n.length>0&&this._postValidationIssues(n)}return r}static _validateMessage(e){e.message=Wr(e.message,1e3)}static _validateExtensions(e){const t=JSON.stringify(e.extensions);e.extensions=Wr(t,1e3)}static _validateLocations(e,t){const n=e.locations;if(Array.isArray(n))for(const e of n){const n=Object.keys(e);for(const r of n)switch(r){case"line":case"column":if(!Number.isSafeInteger(e[r])){const n=e[r];e[r]=0,t.push(`unexpected ${r} value '${n}'`)}break;default:delete e[r],t.push("unexpected error.location."+r)}}else delete e.locations,t.push("unexpected error.locations")}static _validatePath(e,t){const n=e.path;Array.isArray(n)?e.path=e.path.map(e=>e.toString()):(delete e.path,t.push("unexpected error.path"))}static _postError(e){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("GQL parse error: "+e,!1,"error")}static _postValidationIssues(e){const t=e.join(",");ms.getInstance().postNoibuErrorAndOptionallyDisableClient("GQL error validation warning: "+t,!1,"error")}}var Hs=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))};function qs(e,t,n,r,s=null){const i={mtd:t,code:e.status,url:n,r_time:r};let o=null;if(Ws.getInstance().shouldContinueForURL(n)){const r=Ws.headersMapFromString(e.getAllResponseHeaders()),a=Ws.getInstance().contentLength(r);a>0&&(i.resp_len=a);let c="";if(Ws.getInstance().shouldCollectPayloadForURL(n)){c=Ws.getInstance().dropPayloadIfNecessaryFromHeaders(r)||Ws.responseStringFromXHRResponseType(e)}o=Ws.getInstance().bundleHTTPData(n,e.noibuRequestHeaders,s,r,c,t)}return[i,o]}function js(e,t,n,r,s,i,o){return Hs(this,void 0,void 0,(function*(){const a={mtd:n,code:t.status,url:r,r_time:i};let c=null;if(Ws.getInstance().shouldContinueForURL(r)){if(t&&t.headers){const e=Ws.getInstance().contentLength(t.headers);e>0&&(a.resp_len=e)}let i="";Ws.getInstance().shouldCollectPayloadForURL(r)&&t&&t instanceof Response&&(i=Ws.getInstance().dropPayloadIfNecessaryFromHeaders(t.headers),i||(i=t.bodyUsed?"Response data unavailable due to an improperly wrapped fetch call":yield t.clone().text()));const l=[Promise.resolve(i),...o?[o]:[]];yield Promise.all(l).then(i=>function(e,t,n,r,s,i){let o,a=new Map,c=new Map;return r[1]&&([,o]=r,e.headers&&(a=Ws.headersMapFromIterable(e.headers.entries()))),null==o&&n&&n.body&&(o=n.body),a.size<1&&n&&n.headers&&(a=n.headers instanceof Headers?Ws.headersMapFromIterable(n.headers.entries()):Ws.headersMapFromIterable(Object.entries(n.headers))),t&&t.headers&&(c=Ws.headersMapFromIterable(t.headers.entries())),Ws.getInstance().bundleHTTPData(s,a,o,c,r[0],i)}(e,t,s,i,r,n)).then(e=>{c=e})}return[a,c]}))}function Zs(){const e=window;fr(e,"fetch")&&mr(e,"fetch",(function(e){return function nbuWrapper(t,n){let r,s,i,o;try{t?(t.method?(r=t.method,s=t.url):(r=n&&n.method?n.method:"GET",s=t.toString()?t.toString():""),Ws.getInstance().shouldCollectPayloadForURL(s)&&t instanceof Request&&(i=t.clone(),o=i.text())):(r="GET",s="")}catch(e){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Error in fetch() wrapper: "+e,!1,"error")}const a=e.call(this,t,n),c=new Date;return a.then(e=>Hs(this,void 0,void 0,(function*(){try{let t=e,a=e;e.bodyUsed||(t=e.clone(),a=e.clone());const l=yield Gs.fromFetch(s,n,i,t),u=new Date,d=Math.abs(+u-+c),[h,p]=yield js(i,a,r,s,n,d,o),g=new Bs(h,p,l);g.saveHTTPEvent();const m=g.httpData&&g.httpData.seq;Vs(e.status)&&Ns("Response",e,m),l&&l.forEach(e=>Ns("GQLError",e,m))}catch(e){if("AbortError"===e.name)return;const t=zr(e);ms.getInstance().postNoibuErrorAndOptionallyDisableClient(`Error in custom fetch() callback: ${e}${t}`,!1,"error")}}))).catch(e=>{!function(e,t){if(!e)return;if(!e.message||!e.stack)return;const n=t||"",r=new Error;r.stack=e.stack;const s=""===n.trim()?"":" on url "+n;r.message=`${e.message}${s}`,Ns("FetchException",{error:r})}(e,s)}),a}}))}function zs(){const e=window.XMLHttpRequest,t=e&&e.prototype,n=fr(t,"open"),r=fr(t,"send"),s=fr(t,"setRequestHeader");n&&function(e,t){mr(e,"open",(function(e){return function nbuWrapper(n,r,s=!0,i=null,o=null){try{try{this.noibuHttpMethod=n,this.noibuHttpUrl=r}catch(e){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Unable to set custom properties on XHR object: "+e,!1,"warn")}if(t){const e=new Date;hs(this,"loadend",()=>Hs(this,void 0,void 0,(function*(){const t=new Date,s=Math.abs(+t-+e),i=yield Gs.fromXhr(r,this),[o,a]=qs(this,n,r,s);let c=new Bs(o,a,i);c.saveHTTPEvent();const l=c.httpData&&c.httpData.seq;Vs(this.status)&&Ns("XMLHttpRequest",this,l),i&&i.forEach(e=>Ns("GQLError",e,l)),c=null})))}}catch(e){const t=zr(e);ms.getInstance().postNoibuErrorAndOptionallyDisableClient(`Error in XHR.open() wrapper: ${e}${t}`,!1,"error")}return e.call(this,n,r,s,i,o)}}))}(t,!r),r&&function(e){mr(e,"send",(function(e){return function nbuWrapper(t){try{let e;e=this.noibuHttpMethod?this.noibuHttpMethod:t?"POST":"GET";const n=new Date;hs(this,"loadend",()=>Hs(this,void 0,void 0,(function*(){const r=new Date,s=Math.abs(+r-+n),i=this.noibuHttpUrl||this.responseURL,o=yield Gs.fromXhr(i,this),[a,c]=qs(this,e,i,s,t);let l=new Bs(a,c,o);l.saveHTTPEvent();const u=l.httpData&&l.httpData.seq;Vs(this.status)&&Ns("XMLHttpRequest",this,u),o&&o.forEach(e=>Ns("GQLError",e,u)),l=null})))}catch(e){const t=zr(e);ms.getInstance().postNoibuErrorAndOptionallyDisableClient(`Error in XHR.send() wrapper: ${e}${t}`,!1,"error")}return e.call(this,t)}}))}(t),s&&function(e){mr(e,"setRequestHeader",(function(e){return function nbuWrapper(t,n){try{this.noibuRequestHeaders&&this.noibuRequestHeaders instanceof Map||(this.noibuRequestHeaders=new Map);const e="string"==typeof n?n:String(n);this.noibuRequestHeaders.set(t.toLowerCase(),e)}catch(e){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Error in XHR.setRequestHeader() wrapper: "+e,!1,"error")}return e.call(this,t,n)}}))}(t)}function Ks(e){const t=Object.assign({},e);return t.class=Jr(t.class),t}const $s=["\\b(view|add|my)\\b.*\\b(cart|bag|basket|bucket|box)\\b","\\b(buy now)\\b","^backorder$","\\b(acquista ora)\\b","\\b(buy this)\\b","\\b(ajouter|mon)\\b.*\\b(panier)\\b","\\b(aggiungi)\\b.*\\b(cart|borsa|carrello)\\b","^ajouter à la shopping bag$","^aggiungi$","^aggiungi alla shopping bag$","\\b(warenkorb)\\b","(^kaufen$)","^купить$","\\b(agregar)\\b.*\\b(carrito)\\b","\\b(adicionar)\\b.*\\b(carrinho)\\b","^carrinho$","^añadir al carrito de compras$","(^añadir al carrito$)","(add another)","(in winkelmand)","(sepete ekle)","(Lagg I Varukorgen)","(ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ)","(Lägg i varukorgen)","(Köp)","(カートに追加)","^添加至购物袋$","^购买$","^購入する$","(أضف الى السلة)"],Js=["(paypal)","(checkout|payment|check out)","(l.?achat|règlement|paiement|la commande)","(passer).*(commande)","valider mon panier","(acheter maintenant)","^caisse$","(gå vidare till kassan)","(cassa|acquisto)","^vai alla cassa$","^procedi all.?acquisto$","^procedi al checkout$","^siguiente$","(kasse)","^zur kasse gehen$","^bezahlen$","^weiter zum checkout$","(comprar ahora)","^comprar$","(prosseguir com a compra)","^pasar por la caja$","^afrekenen$","^compre$","(continue to pay)","(naar de kassa)","Перейти к оформлению заказа","^купить сейчас$","^bestellen$","(Alışverişi Tamamla)","^Till kassan$","(チェックアウトに進む)","^去结算$","^付款。$","^お支払い$","(تاكيد الطلب)"],Qs=["(checkout|continue) (with paypal)","^continue to paypal$","^weiter zu paypal$","^continue to afterpay$","^braintree_paypal$","^pay and place order$","^mit paypal bezahlen$","^continue to payment securely$","(continua su paypal)","(apple pay|applepay)","(amazon pay|amazonpay|continue with amazon)","(sezzlepay)","(place order)","(place your order)","(order confirmation)","(complete purchase)","submit.*order","(pay now)","(^pay it now$)","(make payment)","(^make payment$)","(complete order)","^complete your order$","(fazer pedido)","^encomendar$","((realizar) (pedido|pago))","^finalizar compra$","^pagar$","^jetzt kaufen$","^bestellung aufgeben$","^bestellung prüfen$","^auftragsbestätigung$","^bestelling plaatsen$","^passer la commande$","(je confirme et je paye)","(accéder au paiement)","^passer au paiement$","(Valider et continuer)","^valider la commande$","(^passez la commande$)","^invia ordine$","(effettua ordine)","^effettua l.?ordine$","(conferma acquisto)","^conferma l.?acquisto$","^confirmation de commande$","^confirma l.?ordine$","^conferma l.?ordine$","^conferma ordine$","(SİPARİŞİ TAMAMLA)","^Разместить заказ$","(Slutför köp)","(注文する)","(إنشاء الطلب)","(注文を確定)","^お支払いへ進む$","^确认下单$"];class Ys{constructor(){this.textCapturedWhiteListRegex=new RegExp($s.concat(Js).concat(Qs).join("|"),"i"),this.htmlIDWhiteListRegex=new RegExp("method|finance|sagepay|cart|bag|coupon|affirm|karna|sezzle|button","i")}static getInstance(){return this.instance||(this.instance=new Ys),this.instance}monitorClicks(){hs(window,"click",this._onClickHandle.bind(this),!0)}_onClickHandle(e){const t=function(){const e=p(),t=["noibu-blocked"];return Yr()&&e.sel.forEach(e=>{e.startsWith(".")&&e.length>0&&t.push(e.substring(1))}),t}();if(e.srcElement){const n=e.srcElement;let r="";r="IMG"===n.tagName?n.alt?n.alt:"":this._getTextualContentFromEl(n,!0,t);let o=this._trimText(r),a="";if(n.className){const e=typeof n.className;"string"===e?a=n.className:"object"===e&&"baseVal"in n.className&&(a=n.className.baseVal)}let c="";n.tagName&&(c=n.tagName.toLowerCase());let l=n.id?n.id:"";"string"!=typeof l&&(l=""),this.textCapturedWhiteListRegex.test(o)||this.htmlIDWhiteListRegex.test(l)||("input"===c?T.some(e=>e(c,n))||(o="*"):"textarea"===c&&(o="*")),o=function(e){return e.replace(i,"******").replace(s,"*")}(o);const u={src:n.src?n.src:"",txt:o,tag:c,hid:l,type:"click",class:a};ps.getInstance().addPvClick(),ws.getInstance().addPageVisitEvents([{event:Ks(u),occurredAt:new Date(Is(Date.now())).toISOString()}],"userstep")}}_parseTextFromParentElement(e,t){let n=e;const r=[];let s=0;for(;n&&!(s>=5)&&n.parentNode;)n=n.parentNode,r.push(n),s+=1;for(let e=0;e<r.length;e+=1){const n=r[e];if(n&&"BUTTON"===n.tagName)return this._getTextualContentFromEl(n,!1,t)}return""}_getTextualContentFromEl(e,t,n){let r=this._parseInnerContent(e,"",100,{value:0,limit:100},n);if(t){const t=e.tagName?e.tagName.toLowerCase():"";if(""===r)r=this._parseTextFromParentElement(e,n);else if("select"===t){const t=r;r=this._parseTextFromParentElement(e,n),r=r.replace(t,"")}}return r}_trimText(e){let t=e.trim().replace(/\s+/g," ");if(t.length>100){const e=t.lastIndexOf(" ",97);t=e>0?t.substring(0,e)+"...":"..."}return t}_parseInnerContent(e,t,n,r,s){if(t.length>=n)return t;if(r.value>=r.limit)return t;if(r.value+=1,e.classList)for(const n of e.classList)if(s.includes(n))return t+(t?" ":"")+"*";if(e.nodeType===Node.TEXT_NODE&&(t=this._parseAndAppendText(t,[e.textContent])).length>=n)return t;let i=!0;if(e.nodeType===Node.ELEMENT_NODE){if(jr().includes("hannaandersson")){const t=t=>t(e.tagName.toLowerCase(),e);if(!T.some(t))return"*"}if(0===e.childNodes.length&&(t=this._parseAndAppendText(t,[e.value,e.title])).length>=n)return t;if(1===e.childNodes.length&&e.childNodes[0].nodeType===Node.TEXT_NODE&&(i=!1,(t=this._parseAndAppendText(t,[e.textContent,e.value,e.title])).length>=n))return t}if(i)for(const i of e.childNodes)t=this._parseInnerContent(i,t,n,r,s);return t}_parseAndAppendText(e,t){const n=[];for(const e of t)(Number.isFinite(e)||"string"==typeof e)&&n.push(e);for(let t of n)if(t=(""+t).trim().replace(/\s+/g," "),t.length>0)return e+(e?" ":"")+t;return e}}class Xs{monitor(){hs(window,"input",this._handle)}_handle(e){const{target:t}=e;if("INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName)return;const n=t.placeholder||t.name||t.id;n&&As.getInstance().addEvent(Ks({src:"",txt:n,tag:t.tagName.toLowerCase(),hid:t.id,type:"kbd",class:t.className}),"kbd")}}let ei=jr();class ti{static getInstance(){return this.instance||(this.instance=new ti),this.instance}monitor(){f.forEach(e=>{hs(window,e,this._onPageEventHandle.bind(this),!0)}),v.forEach(e=>{hs(document,e,this._onPageEventHandle.bind(this),!0)})}_onPageEventHandle(e){if(!e||!e.type)return;const t={type:e.type};switch(e.type){case"visibilitychange":t.data="state: "+this.getDocumentState();break;case"readystatechange":t.data="state: "+document.readyState;break;case"pagehide":case"pageshow":case"load":e.persisted&&(t.data="persisted: "+e.persisted);break;case"storage":e.key&&(t.data="key: "+e.key);break;case"message":case"messageerror":e.data&&e.origin&&(t.data=`origin: ${e.origin} size: ${this.getSizeInBytes(e.data)}`);break;case"hashchange":e.newURL&&(t.data="newURL: "+e.newURL)}As.getInstance().addEvent(t,"page")}getDocumentState(){return"hidden"===document.visibilityState?"hidden":document.hasFocus()?"active":"passive"}getSizeInBytes(e){let t=e;return"string"!=typeof e&&(t=JSON.stringify(e)),2*t.length}}class ni{constructor(){this.startedMonitoring=!1,this.metricQueue={},this.onLCP=null,this.onFID=null,this.onCLS=null,this.onFCP=null,this.onINP=null,this.onTTFB=null}static getInstance(){return this.instance||(this.instance=new ni),this.instance}sendMetric(e){if(!e||!e.name)return;if(e.name in this.metricQueue)return;const{name:t,value:n,rating:r}=e;this.metricQueue[e.name]={name:t,value:n.toString(),rating:r},ws.getInstance().addPageVisitEvent({event:this.metricQueue[e.name],occurredAt:new Date(Is(Date.now())).toISOString()},"wv")}monitor(){try{if(!this._isAvailable())return;if(this.startedMonitoring)return;this.startedMonitoring=!0,this.onLCP(this.sendMetric.bind(this)),this.onFID(this.sendMetric.bind(this)),this.onCLS(this.sendMetric.bind(this)),this.onFCP(this.sendMetric.bind(this)),this.onINP(this.sendMetric.bind(this)),this.onTTFB(this.sendMetric.bind(this))}catch(e){this.startedMonitoring=!1,ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Error in WebVitalMonitor: "+e,!1,"error")}}download(){this._isAvailable()&&(hs(window,"noibuWebVitalsLoaded",e=>{this.setWebVitals(e.detail),this.monitor()}),os("https://cdn.noibu.com/collect-webvitals.js",null,e=>{ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Error loading webvitals script. "+e,!1,"error")}))}setWebVitals(e){this.onLCP=e.onLCP,this.onFID=e.onFID,this.onCLS=e.onCLS,this.onFCP=e.onFCP,this.onINP=e.onINP,this.onTTFB=e.onTTFB}_isAvailable(){return"object"==typeof window.performance}}class ri{static configure(e){return this.allowUntrustedEvents=e,this.initialRequest=!1,this.instance||(this.instance=new ri),this.instance}static getInstance(){if(!this.instance)throw new Error("HelpCode was not configured");return this.instance}constructor(){this.requestContext=null,hs(window,"hashchange",e=>this._handleHashChange(e)),hs(window,"noibuHelpCode",e=>this._receiveHelpCode(e))}requestHelpCode(e=!0){if(null!=this.requestContext)return this.requestContext.promise;const t={alertUser:e,resolve:null,reject:null,promise:null};t.promise=new Promise((e,n)=>{t.resolve=e,t.reject=n}),this.requestContext=t;return!1===this._sendRequest()?(this.requestContext=null,Promise.reject(new Error("noibu connection is unavailable"))):this.requestContext.promise}checkInitialRequest(){jr().toLowerCase().includes("#helpcode")&&!1===ri.initialRequest&&(ri.initialRequest=!0,this._sendRequest())}_handleHashChange(e){if(!e.isTrusted&&!ri.allowUntrustedEvents)return;!e.oldURL.toLowerCase().includes("#helpcode")&&e.newURL.toLowerCase().includes("#helpcode")&&(window.history.back(),this._sendRequest())}_receiveHelpCode(e){if(null==this.requestContext)return void this._presentHelpCode(e);const t=this.requestContext;this.requestContext=null,!0===t.alertUser&&this._presentHelpCode(e);const{success:n,data:r}=e.detail;n?t.resolve(r):t.reject(new Error(r))}_presentHelpCode(e){const{success:t,data:n}=e.detail;if(t)window.prompt("",n);else{const e="Noibu help code is not available due to "+n;window.alert(e),ms.getInstance().postNoibuErrorAndOptionallyDisableClient(e,!1,"error")}}_sendRequest(){return Ss.getInstance().sendMessage("wr",{wr:"hc"})}}class si{constructor(){this.customIDs={},this.customErrorsCount=0,this.TOO_MANY_IDS_ADDED_MSG="TOO_MANY_IDS_ADDED",this.ID_NAME_ALREADY_ADDED_MSG="ID_NAME_ALREADY_ADDED",this.NAME_TOO_LONG_MSG="NAME_TOO_LONG",this.VALUE_TOO_LONG_MSG="VALUE_TOO_LONG",this.INVALID_NAME_TYPE_MSG="INVALID_NAME_TYPE",this.INVALID_VALUE_TYPE_MSG="INVALID_VALUE_TYPE",this.NAME_HAS_NO_LENGTH_MSG="NAME_HAS_NO_LENGTH",this.VALUE_HAS_NO_LENGTH_MSG="VALUE_HAS_NO_LENGTH",this.SUCCESS_MSG="SUCCESS",this.ERROR_HAS_NO_MSG_MSG="ERROR_HAS_NO_MSG",this.ERROR_HAS_NO_STACK_MSG="ERROR_HAS_NO_STACK",this.NULL_CUSTOM_ERR_MSG="NULL_CUSTOM_ERROR",this.ERROR_ALREADY_RECEIVED_MSG="ERROR_ALREADY_RECEIVED",this.INVALID_ERROR_SOURCE_MSG="INVALID_ERROR_SOURCE_MSG",this.TOO_MANY_ERRORS_RECEIVED_PER_PAGEVISIT_MSG="TOO_MANY_ERRORS_RECEIVED_PER_PAGEVISIT"}static getInstance(){return this.instance||(this.instance=new si),this.instance}exposeFunctions(){const e=this._getSDKWindowObject();window.NOIBUJS=e}_getSDKWindowObject(){return{requestHelpCode:this._requestHelpCode.bind(this),addCustomAttribute:this._addCustomAttribute.bind(this),addError:this._addCustomError.bind(this),addJsSdkError:this._addErrorFromJSSdk.bind(this)}}_validateCustomError(e){return e?e.message?e.stack?this.SUCCESS_MSG:this.ERROR_HAS_NO_STACK_MSG:this.ERROR_HAS_NO_MSG_MSG:this.NULL_CUSTOM_ERR_MSG}_validateAndSetCustomError(e){if(this.customErrorsCount>=500)return this.TOO_MANY_ERRORS_RECEIVED_PER_PAGEVISIT_MSG;const t=this._validateCustomError(e);return t!==this.SUCCESS_MSG?t:(this.customErrorsCount+=1,this.SUCCESS_MSG)}_addErrorFromJSSdk(e,t){const n=this._validateAndSetCustomError(e);return n!==this.SUCCESS_MSG?n:"ReactError"!==t&&"VueError"!==t?this.INVALID_ERROR_SOURCE_MSG:(Ns(t,{error:e}),n)}_addCustomError(e){const t=this._validateAndSetCustomError(e);return t!==this.SUCCESS_MSG||Ns("CustomError",{error:e}),t}_addCustomAttribute(e,t){if(ps.getInstance().addCustomAttributeTotalCount(),Object.keys(this.customIDs).length>=10)return ps.getInstance().addCustomAttributeFailCount(),this.TOO_MANY_IDS_ADDED_MSG;const n=this._validateCustomIDInput(e,t);if(n!==this.SUCCESS_MSG)return ps.getInstance().addCustomAttributeFailCount(),n;if(e in this.customIDs)return ps.getInstance().addCustomAttributeFailCount(),this.ID_NAME_ALREADY_ADDED_MSG;this.customIDs[e]=t,Ss.getInstance().sendMessage("m",{pvm:{id_name:e,id_val:t}});const r=Object.keys(this.customIDs).length;return ps.getInstance().setCustomAttributeKeyCount(r),this.SUCCESS_MSG}_validateCustomIDInput(e,t){return"string"!=typeof e?this.INVALID_NAME_TYPE_MSG:"string"!=typeof t?this.INVALID_VALUE_TYPE_MSG:t.length>500?this.VALUE_TOO_LONG_MSG:e.length>50?this.NAME_TOO_LONG_MSG:0===t.length?this.VALUE_HAS_NO_LENGTH_MSG:0===e.length?this.NAME_HAS_NO_LENGTH_MSG:this.SUCCESS_MSG}_requestHelpCode(e=!0){return ri.getInstance().requestHelpCode(e)}}class ii{static getInstance(){return this.instance||(this.instance=new ii),this.instance}_safeQueryAll(e,t){const n=e.querySelectorAll(t);return n?Array.from(n):[]}_processMatchingElements(e,t){e.forEach(e=>{if(!e)return;const n=e.textContent;n&&si.getInstance()._addCustomAttribute(t,n)})}_findAndAddMatchingElementsInNodes(e){Object.keys(S()).forEach(t=>{const n=S()[t];n&&e.forEach(e=>{if(e.nodeType===Node.TEXT_NODE&&e.parentNode&&(e=e.parentNode),e.nodeType!==Node.ELEMENT_NODE)return;let r=[];e.matches(n)&&r.push(e);const s=this._safeQueryAll(e,n);r=r.concat(s),this._processMatchingElements(r,t)})})}_setupMutationObserver(){const e=new MutationObserver(e=>{e.forEach(e=>{if("childList"===e.type&&e.addedNodes.length>0&&this._findAndAddMatchingElementsInNodes(e.addedNodes),"attributes"===e.type){const t=e.target;t.nodeType===Node.ELEMENT_NODE&&this._findAndAddMatchingElementsInNodes([t])}})});e.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),this.observer=e}_findAndAddMatchingElements(){Object.keys(S()).forEach(e=>{const t=S()[e];if(!t)return;const n=this._safeQueryAll(document,t);this._processMatchingElements(n,e)})}monitor(){var e;0!==Object.keys(S()).length&&(this._findAndAddMatchingElements(),"undefined"!=typeof MutationObserver&&(null===(e=document.documentElement)||void 0===e?void 0:e.nodeType)===Node.ELEMENT_NODE?this._setupMutationObserver():this.interval=setInterval(()=>{this._findAndAddMatchingElements()},5e3))}_disconnectObserver(){this.observer&&this.observer.disconnect&&"function"==typeof this.observer.disconnect&&this.observer.disconnect(),this.interval&&clearInterval(this.interval)}}let oi=!1;var ai,ci=n(296),li=n.n(ci);class ui{constructor(){this.previousScroll={x:0,y:0}}static getInstance(){return ui.instance||(ui.instance=new ui),ui.instance}monitor(){hs(document,"scroll",li()(this.handler.bind(this),1e3,{leading:!0,trailing:!0}),{passive:!0,capture:!0})}handler(e){const{target:t}=e;if(!t)return;const n=ui.getWindowScroll(document.defaultView),r={x:n.left,y:n.top},s={type:"scroll",data:`scroll: ${this.previousScroll.x}:${this.previousScroll.y} -> ${r.x}:${r.y}`};this.previousScroll=r,As.getInstance().addEvent(s,"page")}static getWindowScroll(e){var t,n,r,s,i,o,a,c,l;const u=e.document;return{left:(null===(t=u.scrollingElement)||void 0===t?void 0:t.scrollLeft)||e.pageXOffset||(null===(n=null==u?void 0:u.documentElement)||void 0===n?void 0:n.scrollLeft)||(null===(s=null===(r=null==u?void 0:u.body)||void 0===r?void 0:r.parentElement)||void 0===s?void 0:s.scrollLeft)||(null===(i=null==u?void 0:u.body)||void 0===i?void 0:i.scrollLeft)||0,top:(null===(o=u.scrollingElement)||void 0===o?void 0:o.scrollTop)||e.pageYOffset||(null==u?void 0:u.documentElement.scrollTop)||(null===(c=null===(a=null==u?void 0:u.body)||void 0===a?void 0:a.parentElement)||void 0===c?void 0:c.scrollTop)||(null===(l=null==u?void 0:u.body)||void 0===l?void 0:l.scrollTop)||0}}}class di{constructor(e){this.unmaskedInputSelectors=null,this.unmaskedInputCache=new Set,this.maskedInputCache=new Set,this.unmaskedInputSelectors=e}maskInputSafely(e,t){try{return this.maskInput(e,t)}catch(e){return"*"}}maskInput(e,t){if(null==this.unmaskedInputSelectors)return di.mask(e);if(this.maskedInputCache.has(t))return di.mask(e);if(this.unmaskedInputCache.has(t))return e;for(const n of this.unmaskedInputSelectors){const r=document.querySelectorAll(n);for(const n of r){if(n===t)return this.unmaskedInputCache.add(t),e}}return this.maskedInputCache.add(t),di.mask(e)}static mask(e){return"*".repeat(e.length)}}!function(e){e[e.Init=0]="Init",e[e.Fail=1]="Fail",e[e.Ready=2]="Ready"}(ai||(ai={}));var hi=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))};class pi{constructor(e,t){this.status=ai.Init,this.recordSnapshotId=0,this.scriptUrl=e,this.errorCallback=t,this.stats={start:0,fetch:0,read:0,create:0,ping:0,pong:0,init:0,error:0,send:0,receive:0,queue:0,first:0,max:0,avg:0}}ready(){return this.statusPromise}start(){this.statusPromise=new Promise((e,t)=>{const n=performance.now();this.statusResolver={timestamp:n,resolve:e,reject:t},this.init()})}processRecordSnapshot(e){if(this.status!==ai.Ready){const e=new Error("Worker is not initialized.");return Promise.reject(e)}return new Promise((t,n)=>{const r=this.getNextRecordSnapshotId(),s={timestamp:performance.now(),resolve:t,reject:n};this.recordSnapshotResolvers.set(r,s),this.sendRecordSnapshotMessage(r,e)})}reportError(e,t){const n=!!this.recordSnapshotResolvers;this.stats.queue=n?this.recordSnapshotResolvers.size:0;const r={error:`${e} ${t} ${zr(t)}`,status:this.status,stats:this.stats},s=JSON.stringify(r);this.errorCallback(s)}init(){return hi(this,void 0,void 0,(function*(){try{this.worker=yield pi.createWorker(this.scriptUrl,this.stats),this.worker.addEventListener("error",e=>{this.stats.error+=1,this.handleInitError(e.error)}),this.worker.addEventListener("message",e=>{this.receiveMessage(e.data)}),this.worker.addEventListener("messageerror",e=>{this.reportError("Message error.",e.data)}),this.setupInitTimeout(),this.sendPingMessage()}catch(e){this.handleInitError(e)}}))}static createWorker(e,t){return hi(this,void 0,void 0,(function*(){t.start=performance.now();const n=yield fetch(e);if(t.fetch=performance.now(),!n.ok)throw new Error(`Failed to fetch worker script. Code: ${n.status}. Status: ${n.statusText}.`);const r=yield n.text();t.read=performance.now();const s=new Blob([r],{type:"application/javascript"}),i=URL.createObjectURL(s),o=new Worker(i);return t.create=performance.now(),o}))}handleReady(){this.status===ai.Init&&(this.recordSnapshotResolvers=new Map,this.stats.init=performance.now()-this.statusResolver.timestamp,this.status=ai.Ready,this.statusResolver.resolve(this.status),this.setupRecordSnapshotCleanup())}handleInitError(e){if(this.status===ai.Init){this.status=ai.Fail,this.statusResolver.resolve(this.status);pi.isInitErrorAcknowledged(e)||this.reportError("Init error.",e)}}static isInitErrorAcknowledged(e){if(!e)return!0;const t=(""+e).trim();return 0===t.length||pi.knownInitErrors.some(e=>t.includes(e))}setupInitTimeout(){window.setTimeout(()=>{const e=new Error("Init timeout.");this.handleInitError(e)},5e3)}sendMessage(e){this.status===ai.Ready&&(this.stats.send+=1,this.worker.postMessage(e))}sendPingMessage(){this.stats.ping=performance.now(),this.worker.postMessage({type:"ping"})}sendRecordSnapshotMessage(e,t){const n={type:"record-snapshot-request",payload:{id:e,snapshot:t}};this.sendMessage(n)}receiveMessage(e){switch(e.type){case"pong":this.stats.pong=this.stats.pong||performance.now(),this.handleReady();break;case"record-snapshot-response":this.receiveRecordSnapshotResponse(e.payload);break;case"messageerror":this.reportError("Received message error.",null)}}receiveRecordSnapshotResponse(e){const{id:t}=e,n=this.recordSnapshotResolvers.get(t);n&&(pi.updateReceiveStats(n,this.stats),this.recordSnapshotResolvers.delete(t),e.error?(this.reportError("Service error.",e.error),n.reject(e.error)):n.resolve(e))}static updateReceiveStats(e,t){const n=performance.now()-e.timestamp,r=t.receive+1;let{avg:s}=t;s-=s/r,s+=n/r,t.receive=r,t.avg=s,0===t.first&&(t.first=n),n>t.max&&(t.max=n)}setupRecordSnapshotCleanup(){window.setInterval(()=>this.cleanupRecordSnapshot(),12e4)}cleanupRecordSnapshot(){let e=0;const t=[...this.recordSnapshotResolvers.entries()];for(const[n,r]of t){if(performance.now()-r.timestamp>12e4){this.recordSnapshotResolvers.delete(n);const t=new Error("Resolver expired.");r.reject(t),e+=1}}if(e){const t=new Error(`Collected ${e} expired resolvers.`);this.reportError("Cleanup.",t)}}getNextRecordSnapshotId(){return this.recordSnapshotId+=1,this.recordSnapshotId}}pi.knownInitErrors=["SecurityError: The operation is insecure","TypeError: Load failed","TypeError: Failed to fetch","SecurityError: Failed to construct","QuotaExceededError: Failed to construct","TypeError: NetworkError when attempting to fetch resource","AbortError: The operation was aborted"];var gi=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))};const mi=3,fi=5,vi=0,yi=2,Ii=2,bi=4;class Ci{constructor(e){this.imageErrorEventBuffer=[],this.isRecordingAllowedHandled=!1,this.isRecordingLoadedHandled=!1,this.eventBuffer=[],this.vfCounter=0,this.didSetupRecorder=!1,this.recordStopper=null,this.firstRecordedTimestamp=null,this.lastRecordedTimestamp=null,this.invalidVideoLength=!1,this.lastFragPostTimestamp=Date.now(),this.pauseTimeout=null,this.freezingEvents=!1,this.cssURLs=new Map,this.pageStateHistory=[],this.lastRRWebEvent=null;const t=function(){const e=p().unmask;return Array.isArray(e)?e:null}();this.inputMaskManager=new di(t),this.setupUnloadHandler(),this.setupPostMetricsHandler(),this.setupImageErrorHandler(),e&&(this.workerAgent=new pi("https://cdn.noibu.com/collect-worker.js",Ci.postWorkerError),this.workerAgent.start())}static configureInstance(e=!0){this.instance||(this.instance=new Ci(e),hs(window,"click",()=>{this.instance.handleFragPost()}))}static getInstance(){if(!this.instance)throw new Error("SessionRecorder was not configured");return this.instance}static postWorkerError(e){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Worker error: "+e,!1,"error")}addCSSURLs(e){this.cssURLs.get(e)||this.cssURLs.set(e,{seq_sent:Ss.getInstance().messageSequenceNum,received:!1})}searchObjectForCSSUrls(e){Object.keys(e).forEach(t=>{const n=e[t];if(null!==n)if("href"===t&&"string"==typeof n&&n.length>0&&(n.includes(".css")||Object.prototype.hasOwnProperty.call(e,"type")&&"text/css"===e.type)){const e=n.replace(/['"]/g,"");this.addCSSURLs(e)}else"object"==typeof n&&null!==n&&this.searchObjectForCSSUrls(n)})}checkForCSSURLs(e){3!==e.type&&2!==e.type||this.searchObjectForCSSUrls(e)}getCSSURLsNotReceived(){const{latestReceivedSeqNumber:e}=Ss.getInstance(),t=[];return this.cssURLs.forEach((n,r)=>{if(!n.received&&n.seq_sent<e){const e=n;e.received=!0,this.cssURLs.set(r,e)}else n.received||t.push(r)}),t}setupUnloadHandler(){["pagehide","visibilitychange"].forEach(e=>hs(window,e,()=>{this.pageStateHistory.push(`${ys()?"":(new Date).toISOString()}: ${e}`),"pagehide"===e&&this.handleFragPost()}))}setupPostMetricsHandler(){hs(window,"noibuPostMetrics",e=>{const t=e.detail,n=null===this.lastRecordedTimestamp||null===this.firstRecordedTimestamp?0:this.lastRecordedTimestamp-this.firstRecordedTimestamp,r=Ss.getInstance().sessionLength?Ss.getInstance().sessionLength:0;if(Ss.getInstance().retryMessageQueue.length>100){const e=this.buildDebugMessage(t,n,r),s=ms.getInstance().isClientDisabled;ms.getInstance().isClientDisabled=!1,ms.getInstance().postNoibuErrorAndOptionallyDisableClient(e,s,"warn")}})}setupImageErrorHandler(){hs(window,"noibuImageError",e=>{this.imageErrorEventBuffer.push(e.detail),this.flushImageErrorBuffer()})}flushImageErrorBuffer(){if(!!this.firstRecordedTimestamp&&this.rrwebAddCustomEvent)for(;this.imageErrorEventBuffer.length>0;){const e=this.imageErrorEventBuffer.shift();this.rrwebAddCustomEvent("noibuImageError",e)}}recordUserSession(e={}){if(Ss.getInstance().closeIfInactive()||ps.getInstance().didCutVideo)return;if(this.didSetupRecorder)return;const t=Object.assign({emit:e=>{this.handleNewRRwebEvent(e,2e3)},inlineStylesheet:!1,maskAllInputs:!0,maskInputFn:this.inputMaskManager.maskInputSafely.bind(this.inputMaskManager),maskTextSelector:es(),ignoreCSSAttributes:y},e);ps.getInstance().setDidStartVideo(),this.recordStopper=this.rrwebRecord(t),this.didSetupRecorder=!0}handleNewRRwebEvent(e,t){return gi(this,void 0,void 0,(function*(){if(Ss.getInstance().closeIfInactive()||ps.getInstance().didCutVideo){if(this.recordStopper)try{this.recordStopper()}catch(e){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Error during handleNewRRwebEvent in recordStopper: "+e,!0,"error")}return}if(e.type===fi&&"unfreeze"===e.data.tag)return;if(e.type===mi&&e.data.source===vi||(this.pauseTimeout&&(clearTimeout(this.pauseTimeout),this.freezingEvents=!1),this.pauseTimeout=setTimeout((function(){Ci.getInstance().freezingEvents=!0,Ci.getInstance().rrwebRecord.freezePage()}),t)),e.timestamp=Is(e.timestamp),this.firstRecordedTimestamp||(this.firstRecordedTimestamp=e.timestamp),(!this.lastRecordedTimestamp||e.timestamp>this.lastRecordedTimestamp)&&(this.lastRecordedTimestamp=e.timestamp),this.firstRecordedTimestamp&&e.timestamp<this.firstRecordedTimestamp)return void ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Detected time rewind. Client has been disabled.",!0,"error",!0);const n=yield this.packAndParseCss(e);this.eventBuffer.push(n),this.lastRRWebEvent=e,e.type===mi&&(e.data.source!==yi||e.data.type!==Ii&&e.data.type!==bi||ps.getInstance().addVideoClick());const r=Date.now()-this.lastFragPostTimestamp;(this.eventBuffer.length>=10||r>500)&&this.handleFragPost(),this.flushImageErrorBuffer()}))}packAndParseCss(e){return gi(this,void 0,void 0,(function*(){let t=null;if(this.workerAgent){if((yield this.workerAgent.ready())===ai.Ready){const n=Object.assign(Object.assign({},e),{v:"v1"});try{const e=yield this.workerAgent.processRecordSnapshot(n);t=e.compressedData,e.cssUrls.forEach(e=>this.addCSSURLs(e))}catch(e){t=null}}}return null==t&&(t=this.rrwebPack(e,{level:1}),this.checkForCSSURLs(e)),t}))}buildDebugMessage(e,t,n){let r="Posting metrics, logging due to large retry message queue";return r+=", URL: "+jr(),r+=", Session Length: "+n,r+=", Video Length: "+t,r+=", Length Delta: "+(t-n),r+=", Session Start: "+new Date(Ss.getInstance().sessionTimestamp),null!==this.firstRecordedTimestamp&&(r+=", Video Start: "+new Date(this.firstRecordedTimestamp),r+=", Start Delta: "+(this.firstRecordedTimestamp-Ss.getInstance().sessionTimestamp.valueOf())),r+=", Last active time: "+ms.getInstance().lastActiveTime,r+=", Visibility: "+document.visibilityState,this.pageStateHistory.length>0&&(r+=", Page States: "+this.pageStateHistory),r+=`, Socket: Connected ${Ss.getInstance().isConnected()} Count ${Ss.getInstance().connectionCount} Buffer: ${Ss.getInstance().socket&&Ss.getInstance().socket.bufferedAmount}`,Ss.getInstance().socketCloseCodes.length>0&&(r+=" Closure Codes: "+Ss.getInstance().socketCloseCodes),Ss.getInstance().socketOpens.length>0&&(r+=" Opens: "+Ss.getInstance().socketOpens),null!==this.lastRRWebEvent&&(r+=`, Last rrweb event: Type ${this.lastRRWebEvent.type} Data Source ${this.lastRRWebEvent.data&&void 0!==this.lastRRWebEvent.data.source?this.lastRRWebEvent.data.source:-1} Data Type ${this.lastRRWebEvent.data&&void 0!==this.lastRRWebEvent.data.type?this.lastRRWebEvent.data.type:-1} Time: ${new Date(this.lastRRWebEvent.timestamp)}`),Ss.getInstance().retryMessageQueue.length>0&&(r+=", Retry queue length: "+Ss.getInstance().retryMessageQueue.length),r+=`, Sequence Info: Latest ${this.lastFragPostTimestamp} ${Ss.getInstance().messageSequenceNum} Ack'd ${Ss.getInstance().latestReceivedSeqNumStoredTime} ${Ss.getInstance().latestReceivedSeqNumber}`,e&&(r+=", Event: "+e),r}handleFragPost(){if(!Ss.getInstance().closeIfInactive()&&this.didSetupRecorder&&0!==this.eventBuffer.length){try{let e=0;this.firstRecordedTimestamp&&this.lastRecordedTimestamp&&!this.invalidVideoLength&&(e=this.lastRecordedTimestamp-this.firstRecordedTimestamp),!this.invalidVideoLength&&(e<0||e>=Number.MAX_SAFE_INTEGER)&&(ms.getInstance().postNoibuErrorAndOptionallyDisableClient(`video lengthMS is invalid: ${e}, start time: ${this.firstRecordedTimestamp}, end time: `+this.lastRecordedTimestamp,!1,"error"),this.invalidVideoLength=!0,e=0),this.vfCounter+=1;const t={};t.vid=$r(this.eventBuffer),t.seq=this.vfCounter,t.len=e,t.css_urls=this.getCSSURLsNotReceived(),Ss.getInstance().addEndTimeToPayload(t,!1),ps.getInstance().addVideoFragData(this.vfCounter,e);const n={};n.pvvf=t,Ss.getInstance().sendMessage("v",n),this.lastFragPostTimestamp=Date.now()}catch(e){if(ms.getInstance().postNoibuErrorAndOptionallyDisableClient("video frag socket closed with err: "+e.message,!1,"error"),this.recordStopper)try{this.recordStopper()}catch(e){ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Error during handleFragPost in recordStopper: "+e,!1,"error")}}this.eventBuffer=[]}}unfreeze(){this.freezingEvents&&this.rrwebAddCustomEvent("unfreeze",{})}downloadIfAllowed(){if(!this.isRecordingAllowed())return this.listenRecordingAllowedEvent(),void this.listenRecordingLoadedEvent();this.download()}download(){this.listenRecordingLoadedEvent(),os("https://cdn.noibu.com/collect-recording.js",null,e=>{ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Error loading session recording script. "+e,!0,"error")})}isRecordingAllowed(){try{const{src:e}=document.currentScript;if(new URL(e).searchParams.has("hold"))return!1}catch(e){}return!0}listenRecordingAllowedEvent(){this.isRecordingAllowedHandled||(this.isRecordingAllowedHandled=!0,hs(window,"noibuRecordingAllowed",()=>{this.download()}))}listenRecordingLoadedEvent(){this.isRecordingLoadedHandled||(this.isRecordingLoadedHandled=!0,hs(window,"noibuRecordingLoaded",e=>{this.handleRRWebLoaded(e.detail)}))}handleRRWebLoaded(e){if(e){if(Ci.getInstance().setRRWeb(e)){const e=Ss.getInstance();Promise.all([Br(),e.connectionPromise]).then(()=>{Ci.getInstance().recordUserSession()})}}else ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Error loading rrweb script",!0,"error")}setRRWeb(e){return e&&e.record&&e.pack&&e.addCustomEvent?(this.rrwebRecord=e.record,this.rrwebPack=e.pack,this.rrwebAddCustomEvent=e.addCustomEvent,!0):(ms.getInstance().postNoibuErrorAndOptionallyDisableClient("RRweb functions not all present",!0,"error"),!1)}}class Si{constructor(e,t){this.timeout=e,this.onSampleAvailable=t}static isSupported(){return!0}start(){this.interval||(this.interval=window.setInterval(()=>this.takeSample(),this.timeout))}stop(){window.clearInterval(this.interval),this.interval=0}}class wi extends Si{takeSample(){const e=document.getElementsByTagName("*").length;this.onSampleAvailable(e)}}class Ai extends Si{start(){super.start(),this.reset(),this.process()}takeSample(){const e=Date.now()-this.time,t=Math.round(this.count/e*1e3);this.reset(),this.onSampleAvailable(t)}reset(){this.count=0,this.time=Date.now()}process(){const e=this;!function t(){e.count+=1,requestAnimationFrame(t)}()}}class Ei extends Si{static isSupported(){return!(!performance||!performance.memory)}takeSample(){const{usedJSHeapSize:e}=performance.memory,t=Math.round(e/1e3/1e3);this.onSampleAvailable(t)}}class ki{constructor(e){this.flushBufferInterval=0,this.pageVisit=e,this.lastValueCache={},this.buffer={},this.samplers=[],this.registerSampler("elm",wi),this.registerSampler("fps",Ai),this.registerSampler("mem",Ei),hs(window,"pagehide",()=>this.flush())}static getInstance(){if(!this.instance){const e=ws.getInstance();this.instance=new ki(e)}return this.instance}registerSampler(e,t){if(!t.isSupported())return;const n=new t(2e3,t=>this.receive(e,t));this.samplers.push(n),this.lastValueCache[e]=-1,this.buffer[e]={values:[]}}start(){this.samplers.forEach(e=>{e.start()}),this.flushBufferInterval||(this.flushBufferInterval=window.setInterval(()=>this.flush(),2e4))}stop(){this.samplers.forEach(e=>{e.stop()}),window.clearInterval(this.flushBufferInterval),this.flushBufferInterval=0,this.flush()}receive(e,t){if(!Number.isInteger(t))return;if(this.lastValueCache[e]===t)return;this.lastValueCache[e]=t;const n=[Date.now(),t];this.buffer[e].values.push(n)}flush(){const e={},t=Object.keys(this.buffer);for(const n of t){const{values:t}=this.buffer[n];t.length&&(e[n]={values:t},this.buffer[n].values=[])}if(Object.keys(e).length){const t={event:e,occurredAt:new Date(Is(Date.now())).toISOString()};this.pageVisit.addPageVisitEvent(t,"sample")}}}!function(n){if(ns())return;if(function(e){for(let n=0;n<t.length;n+=1){if(!e[t[n]])return!0}return!1}(n))return;if(!jr().startsWith("http"))return;if(function(){const e=void 0!==window.noibuJSLoaded;return window.noibuJSLoaded=!0,e}())return;const r=n.metroplexHTTPBase+"/collect_error";ms.configureInstance(r);try{const t=N()();if(ms.getInstance().isClientDisabled)return;const n=function(){const e=[];return"function"==typeof window.Map&&window.Map.prototype.set||e.push("window.Map"),e}();if(n.length)return void ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Error during init, some browser APIs are not available: "+n,!1,"error");ri.configure(!1);const r=Ss.getInstance(t);Ci.configureInstance(),ws.configureInstance(),vs.getInstance();const s=new Xs,i=Ys.getInstance(),o=ti.getInstance(),a=ni.getInstance(),c=ii.getInstance(),l=ui.getInstance();Ws.getInstance(),hs(window,"error",Fs,!0),hs(window,"unhandledrejection",Us,!0),Ps(),zs(),Zs(),i.monitorClicks(),setInterval((function(){if(ei!==jr()){ei=jr();const e={url:jr()};As.getInstance().addEvent(e,"loc")}}),1e3),l.monitor(),s.monitor(),o.monitor(),c.monitor(),function(e=!1){if(!oi||e){if(oi=!0,!window.navigator||!window.navigator.connection||!window.navigator.connection.downlink)return;const{connection:{downlink:e,rtt:t,effectiveType:n,saveData:r}}=window.navigator;As.getInstance().addEvent({downlink:e,effective_type:n,rtt:t,save_data:r},"network")}}();ki.getInstance().start();const u=Ci.getInstance();Promise.all([Br(),r.connectionPromise]).then(()=>{u.setRRWeb({record:Dt,addCustomEvent:Lt,pack:vn}),u.recordUserSession(),a.setWebVitals(e),a.monitor(),ri.getInstance().checkInitialRequest()}).catch(e=>{ms.getInstance().postNoibuErrorAndOptionallyDisableClient("Error during recordUserSession: "+e,!1,"error")}),si.getInstance().exposeFunctions()}catch(e){const t=zr(e);ms.getInstance().postNoibuErrorAndOptionallyDisableClient(`Error during globalInit: ${e}${t}`,!0,"error")}}({metroplexSocketBase:w(),metroplexHTTPBase:A()})})()})();ttom-zero aem-GridColumn aem-GridColumn--default--8"><div id="responsivecontainer-a13ceb715d" class=" wl-columncontainer__inner-wrapper  " data-offset="0">
	
	
	<div class="wl-column--container wl-row wl-rc__columns-2">
		
			<div class="wl-GridColumn wl-Grid-6--columns">
				<div class="responsivecontainer container responsivegrid wl-rc__padding--bottom-zero"><div id="responsivecontainer-bb80d553af" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="responsivecontainer container responsivegrid wl-rc__padding--top-bottom-zero"><div id="responsivecontainer-881213100e" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="card teaser wl-card__img-position--left wl-card__img-height--xxs"><div id="teaser-82db163ad9" data-enable-background="false" class="cmp-teaser 
       " data-cmp-data-layer="{&#34;teaser-82db163ad9&#34;:{&#34;@type&#34;:&#34;wiley/components/core/teaser/v1/teaser&#34;,&#34;repo:modifyDate&#34;:&#34;2023-08-16T16:35:28Z&#34;,&#34;dc:description&#34;:&#34;&lt;h3>Mike Long&lt;/h3>\r\n&#34;,&#34;xdm:linkURL&#34;:&#34;/#&#34;}}">
    
    
    <div class="cmp-teaser__image">
        <picture>
            <source srcset="/content/dam/wiley-dotcom/en/b2c/education/alta/images/mikelongvideoscreenshot.jpg" media="(min-width: 1px) and (max-width: 640px)"/>
			<source srcset="/content/dam/wiley-dotcom/en/b2c/education/alta/images/mikelongvideoscreenshot.jpg" media="(min-width: 641px) and (max-width: 1080px)"/>
            <img src="/content/dam/wiley-dotcom/en/b2c/education/alta/images/mikelongvideoscreenshot.jpg"/>
        </picture>
    </div>
	

    
    <div class="cmp-teaser__content">
        <div class="wl-teaser__content--inner-wrapper">
            
    

			
    

            
    

            
    <div class="cmp-teaser__description"><h3>Mike Long</h3></div>

            
    <div class="cmp-teaser__action-container">
		
	
		
		
			<a aria-label="Watch Now" class="cmp-teaser__action-link wl-btn__secondary wl-btn__icon--video  " data-gated-content="false" data-target="#mikelong" data-mobile-cta="Continue Reading" href="#" target="_self" id="teaser-82db163ad9-cta-d9b1b25ce5-link" data-cmp-data-layer="{&#34;teaser-82db163ad9-cta-d9b1b25ce5-link&#34;:{&#34;@type&#34;:&#34;wiley/components/content/card/cta&#34;,&#34;dc:title&#34;:&#34;Watch Now&#34;,&#34;xdm:linkURL&#34;:&#34;/#&#34;}}" data-cmp-clickable>
				
				<span>Watch Now</span>
				<span class="wl-icon__span"></span>
			</a>
		
	

    </div>

        </div>
    </div>
    
    
	
</div>

    

</div>

		
        
    </div>

</div>
</div>

		
			
				<div class="responsivecontainer container responsivegrid wl-rc__padding--top-bottom-zero"><div id="responsivecontainer-eb5b67c5cf" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="modal wl-modal__center"><div id="mikelong">
  <button data-dismiss id="close-button" class="close-button"><span class="times-sign">&times;</span></button>
  <div class="modal-inner-body"><div class="responsivecontainer container responsivegrid wl-rc__padding--bottom-zero"><div id="responsivecontainer-85959c3e90" class=" wl-columncontainer__inner-wrapper  " data-offset="0">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="video">
	
	
	<video data-enable-transcript="true" data-video-id="6262563280001" data-account="4931690914001" data-player="default" data-embed="default" data-application-id class="video-js" playsinline controls>
	</video>



	


	<div class="modal wl-modal__form" id="transcriptModal">
		<div>
			<button data-dismiss="" id="close-button" class="close-button"><span class="times-sign">×</span></button>
			<div class="modal-inner-body">
				<div class="text">
					<div class="cmp-text">
						<p class="cmp-text__paragraph"></p>
					</div>
				</div>
			</div>
		</div>
	</div>

<script src="//players.brightcove.net/4931690914001/default_default/index.min.js"></script>

    


</div>

		
        
    </div>

</div>
</div>
</div>
</div></div>

		
        
    </div>

</div>
</div>

		
        
    </div>

</div>
</div>

			</div>
		
			<div class="wl-GridColumn wl-Grid-6--columns">
				<div class="responsivecontainer container responsivegrid wl-rc__padding--bottom-zero"><div id="responsivecontainer-280d620ae4" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="responsivecontainer container responsivegrid wl-rc__padding--bottom-zero"><div id="responsivecontainer-ae0aae8e40" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="card teaser wl-card__img-position--left wl-card__img-height--xxs"><div id="teaser-eba8d436dd" data-enable-background="false" class="cmp-teaser 
       " data-cmp-data-layer="{&#34;teaser-eba8d436dd&#34;:{&#34;@type&#34;:&#34;wiley/components/core/teaser/v1/teaser&#34;,&#34;repo:modifyDate&#34;:&#34;2023-08-16T16:35:28Z&#34;,&#34;dc:description&#34;:&#34;&lt;h3>Shawn Shields&lt;/h3>\r\n&#34;,&#34;xdm:linkURL&#34;:&#34;/#&#34;}}">
    
    
    <div class="cmp-teaser__image">
        <picture>
            <source srcset="/content/dam/wiley-dotcom/en/b2c/education/alta/images/altashawnshields.jpg" media="(min-width: 1px) and (max-width: 640px)"/>
			<source srcset="/content/dam/wiley-dotcom/en/b2c/education/alta/images/altashawnshields.jpg" media="(min-width: 641px) and (max-width: 1080px)"/>
            <img src="/content/dam/wiley-dotcom/en/b2c/education/alta/images/altashawnshields.jpg"/>
        </picture>
    </div>
	

    
    <div class="cmp-teaser__content">
        <div class="wl-teaser__content--inner-wrapper">
            
    

			
    

            
    

            
    <div class="cmp-teaser__description"><h3>Shawn Shields</h3></div>

            
    <div class="cmp-teaser__action-container">
		
	
		
		
			<a aria-label="Watch Now" class="cmp-teaser__action-link wl-btn__secondary wl-btn__icon--video  " data-gated-content="false" data-target="#shawnshields" data-mobile-cta="Continue Reading" href="#" target="_self" id="teaser-eba8d436dd-cta-1edaf1e95c-link" data-cmp-data-layer="{&#34;teaser-eba8d436dd-cta-1edaf1e95c-link&#34;:{&#34;@type&#34;:&#34;wiley/components/content/card/cta&#34;,&#34;dc:title&#34;:&#34;Watch Now&#34;,&#34;xdm:linkURL&#34;:&#34;/#&#34;}}" data-cmp-clickable>
				
				<span>Watch Now</span>
				<span class="wl-icon__span"></span>
			</a>
		
	

    </div>

        </div>
    </div>
    
    
	
</div>

    

</div>

		
        
    </div>

</div>
</div>

		
			
				<div class="responsivecontainer container responsivegrid wl-rc__padding--top-bottom-zero"><div id="responsivecontainer-ef52db8bd9" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="modal wl-modal__center"><div id="shawnshields">
  <button data-dismiss id="close-button" class="close-button"><span class="times-sign">&times;</span></button>
  <div class="modal-inner-body"><div class="responsivecontainer container responsivegrid wl-rc__padding--bottom-zero"><div id="responsivecontainer-c1137e2e7a" class=" wl-columncontainer__inner-wrapper  " data-offset="0">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="video">
	
	
	<video data-enable-transcript="true" data-video-id="6262562869001" data-account="4931690914001" data-player="default" data-embed="default" data-application-id class="video-js" playsinline controls>
	</video>



	


	<div class="modal wl-modal__form" id="transcriptModal">
		<div>
			<button data-dismiss="" id="close-button" class="close-button"><span class="times-sign">×</span></button>
			<div class="modal-inner-body">
				<div class="text">
					<div class="cmp-text">
						<p class="cmp-text__paragraph"></p>
					</div>
				</div>
			</div>
		</div>
	</div>

<script src="//players.brightcove.net/4931690914001/default_default/index.min.js"></script>

    


</div>

		
        
    </div>

</div>
</div>
</div>
</div></div>

		
        
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
<div class="responsivecontainer container responsivegrid wl-rc__padding--top-zero aem-GridColumn aem-GridColumn--default--8"><div id="responsivecontainer-50ae34343e" class=" wl-columncontainer__inner-wrapper  " data-offset="125">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="text wl-text__align--center">
  <div id="text-79df9fb091" class="cmp-text">
 <h2>Check out the latest news from Wiley Alta community</h2>

</div>

    

</div>

		
			
				<div class="contentfragmentlist wl-cfl__columns--three wl-cfl__img-position--center wl-cfl__bgc--gray-dark wl-cfl__tile-border--all-gray">
     
	
	
    <section id="contentfragmentlist-25834cf2b1" class="cmp-contentfragmentlist " data-fragments-count="3">
		
            
                
                
    <article class="cmp-contentfragment cmp-contentfragment--knerd-study " data-cmp-contentfragment-model="wiley/models/person-cfm" data-cmp-data-layer="{&#34;contentfragmentlist-25834cf2b1-item-677d8301&#34;:{&#34;@type&#34;:&#34;wiley/models/person-cfm&#34;,&#34;fragmentTitle&#34;:&#34;Knerd Study&#34;,&#34;elements&#34;:{&#34;picture&#34;:&#34;/content/dam/wiley-dotcom/en/b2c/education/alta/images/alta_thisisengineering-knerdstudy_404x240.png&#34;,&#34;dc:title&#34;:&#34;Join the Wiley Instructor Community&#34;,&#34;xdm:linkURL&#34;:&#34;https://wiley.influitive.com/users/sign_in&#34;,&#34;description&#34;:null}}}" data-cmp-clickable>
        <h3 class="cmp-contentfragment__title">Knerd Study</h3>
        

        
        
            
    <dl class="cmp-contentfragment__elements">
        
    <div class="cmp-contentfragment__element cmp-contentfragment__element--picture" data-cmp-contentfragment-element-type="string">
        <dt class="cmp-contentfragment__element-title">Picture</dt>
        <dd class="cmp-contentfragment__element-value">
			
            
            
            
                <img src="/content/dam/wiley-dotcom/en/b2c/education/alta/images/alta_thisisengineering-knerdstudy_404x240.png" alt="Picture" tabindex="0"/>
            
            
            
            
            
            
        </dd>
    </div>

    
        
    <div class="cmp-contentfragment__element cmp-contentfragment__element--title" data-cmp-contentfragment-element-type="string">
        <dt class="cmp-contentfragment__element-title">Title</dt>
        <dd class="cmp-contentfragment__element-value">
			
            
            
            
            
            
            
            
            
				<p>This invitation only community brings instructors together in a fun, virtual environment to share insights and best practices, give product feedback, and celebrate success in the classroom.</p> 
<p><a href="https://wiley.influitive.com/users/sign_in" data-cmp-data-layer="{&#34;contentfragmentlist-25834cf2b1-item0-d0900c76--join-the-wiley-instructor-community&#34;:{&#34;&#64;type&#34;:&#34;wiley/components/content/contentfragmentlist&#34;,&#34;repo:modifyDate&#34;:&#34;2023-08-16T16:35:28Z&#34;,&#34;dc:title&#34;:&#34;join-the-wiley-instructor-community&#34;,&#34;xdm:linkURL&#34;:&#34;https://wiley.influitive.com/users/sign_in&#34;}}" data-cmp-clickable="data-cmp-clickable">Join the Wiley Instructor Community</a></p>
            
        </dd>
    </div>

    
        
    <div class="cmp-contentfragment__element cmp-contentfragment__element--description" data-cmp-contentfragment-element-type="string">
        <dt class="cmp-contentfragment__element-title">Description</dt>
        
    </div>

    </dl>

        
    </article>

            
		
            
                
                
    <article class="cmp-contentfragment cmp-contentfragment--knerd-story " data-cmp-contentfragment-model="wiley/models/person-cfm" data-cmp-data-layer="{&#34;contentfragmentlist-25834cf2b1-item-1a14ec4b&#34;:{&#34;@type&#34;:&#34;wiley/models/person-cfm&#34;,&#34;fragmentTitle&#34;:&#34;Knerd Story&#34;,&#34;elements&#34;:{&#34;picture&#34;:&#34;/content/dam/wiley-dotcom/en/b2c/education/alta/images/alta_knerd_stories.jpg&#34;,&#34;dc:title&#34;:&#34;Read the Article&#34;,&#34;xdm:linkURL&#34;:&#34;/content/wiley-dotcom/language-masters/en-us/consumer/education/alta/resources/Knerd-Story-Wheeler-Conover.html&#34;,&#34;description&#34;:null}}}" data-cmp-clickable>
        <h3 class="cmp-contentfragment__title">Knerd Story</h3>
        

        
        
            
    <dl class="cmp-contentfragment__elements">
        
    <div class="cmp-contentfragment__element cmp-contentfragment__element--picture" data-cmp-contentfragment-element-type="string">
        <dt class="cmp-contentfragment__element-title">Picture</dt>
        <dd class="cmp-contentfragment__element-value">
			
            
            
            
                <img src="/content/dam/wiley-dotcom/en/b2c/education/alta/images/alta_knerd_stories.jpg" alt="Picture" tabindex="0"/>
            
            
            
            
            
            
        </dd>
    </div>

    
        
    <div class="cmp-contentfragment__element cmp-contentfragment__element--title" data-cmp-contentfragment-element-type="string">
        <dt class="cmp-contentfragment__element-title">Title</dt>
        <dd class="cmp-contentfragment__element-value">
			
            
            
            
            
            
            
            
            
				<p>Interested in hearing from peers? See how Alta has impacted the classroom as some of our instructors share their experiences in our Knerd stories.</p> 
<p>Knerd Story – Wheeler Conover, SE Kentucky Community College</p> 
<p>“I have students who say that it’s different than what they’ve done before. And they appreciate the fact that they can learn the material instead of being punished for not learning it. It encourages you to be wrong. It doesn’t penalize you for the wrong answer.”</p> 
<p><a href="/en-es/education/alta/resources/Knerd-Story-Wheeler-Conover" target="_blank" title="Knerd Story" data-cmp-data-layer="{&#34;contentfragmentlist-25834cf2b1-item0-1389636c--read-the-article&#34;:{&#34;&#64;type&#34;:&#34;wiley/components/content/contentfragmentlist&#34;,&#34;repo:modifyDate&#34;:&#34;2023-08-16T16:35:28Z&#34;,&#34;dc:title&#34;:&#34;read-the-article&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/education/alta/resources/Knerd-Story-Wheeler-Conover&#34;}}" data-cmp-clickable="data-cmp-clickable" rel="noopener noreferrer">Read the Article</a></p>
            
        </dd>
    </div>

    
        
    <div class="cmp-contentfragment__element cmp-contentfragment__element--description" data-cmp-contentfragment-element-type="string">
        <dt class="cmp-contentfragment__element-title">Description</dt>
        
    </div>

    </dl>

        
    </article>

            
		
            
                
                
    <article class="cmp-contentfragment cmp-contentfragment--eight-ways " data-cmp-contentfragment-model="wiley/models/person-cfm" data-cmp-data-layer="{&#34;contentfragmentlist-25834cf2b1-item-b9a6f72c&#34;:{&#34;@type&#34;:&#34;wiley/models/person-cfm&#34;,&#34;fragmentTitle&#34;:&#34;Eight Ways&#34;,&#34;elements&#34;:{&#34;picture&#34;:&#34;/content/dam/wiley-dotcom/en/b2c/education/alta/images/alta_8ways_knerdstory-blogsize.jpg&#34;,&#34;dc:title&#34;:&#34;Read the Article&#34;,&#34;xdm:linkURL&#34;:&#34;/content/wiley-dotcom/language-masters/en-us/consumer/education/alta/resources/blog-8-ways-to-set-up-your-students-for-a-successful-year-with.html&#34;,&#34;description&#34;:null}}}" data-cmp-clickable>
        <h3 class="cmp-contentfragment__title">Eight Ways</h3>
        

        
        
            
    <dl class="cmp-contentfragment__elements">
        
    <div class="cmp-contentfragment__element cmp-contentfragment__element--picture" data-cmp-contentfragment-element-type="string">
        <dt class="cmp-contentfragment__element-title">Picture</dt>
        <dd class="cmp-contentfragment__element-value">
			
            
            
            
                <img src="/content/dam/wiley-dotcom/en/b2c/education/alta/images/alta_8ways_knerdstory-blogsize.jpg" alt="Picture" tabindex="0"/>
            
            
            
            
            
            
        </dd>
    </div>

    
        
    <div class="cmp-contentfragment__element cmp-contentfragment__element--title" data-cmp-contentfragment-element-type="string">
        <dt class="cmp-contentfragment__element-title">Title</dt>
        <dd class="cmp-contentfragment__element-value">
			
            
            
            
            
            
            
            
            
				<p>8 ways to set up your students for a successful year with Knewton Alta</p> 
<p>&#34;Make sure you’re ready for whatever this semester throws your way. Learn how to use Knewton Alta to overcome common challenges and empower you to do what you do best – teach!&#34;</p> 
<p><a href="/en-es/education/alta/resources/blog-8-ways-to-set-up-your-students-for-a-successful-year-with" target="_blank" title="Knerd Story" data-cmp-data-layer="{&#34;contentfragmentlist-25834cf2b1-item0-ef04dc9d--read-the-article&#34;:{&#34;&#64;type&#34;:&#34;wiley/components/content/contentfragmentlist&#34;,&#34;repo:modifyDate&#34;:&#34;2023-08-16T16:35:28Z&#34;,&#34;dc:title&#34;:&#34;read-the-article&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/education/alta/resources/blog-8-ways-to-set-up-your-students-for-a-successful-year-with&#34;}}" data-cmp-clickable="data-cmp-clickable" rel="noopener noreferrer">Read the Article</a></p>
            
        </dd>
    </div>

    
        
    <div class="cmp-contentfragment__element cmp-contentfragment__element--description" data-cmp-contentfragment-element-type="string">
        <dt class="cmp-contentfragment__element-title">Description</dt>
        
    </div>

    </dl>

        
    </article>

            
		
		
    </section>
    
    



    

</div>

		
        
    </div>

</div>
</div>

    
</div>

    </div>

    
</div>
<div class="experiencefragment aem-GridColumn aem-GridColumn--default--12">

	
    <div id="experiencefragment-d1482ef5b6" class="cmp-experiencefragment cmp-experiencefragment--new-alta-footer" data-uuid="7f72c67d-072e-461f-8da6-89171dc1aff6">


    
    <div id="container-17787142a1" class="cmp-container">
        


<div class="aem-Grid aem-Grid--8 aem-Grid--default--8 ">
    
    <div class="footer wl-footer__global aem-GridColumn aem-GridColumn--default--8"><div data-cmp-data-layer="{&#34;footer-12d1c596ee&#34;:{&#34;@type&#34;:&#34;wiley/components/content/footer&#34;,&#34;repo:modifyDate&#34;:&#34;1969-12-31T23:59:59Z&#34;}}" class="wl-footerNav" id="footer-12d1c596ee">
      <div id="responsivecontainer-12d1c596ee" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="responsivecontainer container responsivegrid wl-rc__padding--bottom-zero wl-rc__padding--left-right-zero"><div id="responsivecontainer-b84c173cfd" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="responsivecontainer container responsivegrid wl-rc__padding--top-zero"><div id="responsivecontainer-40a4196fad" class=" wl-columncontainer__inner-wrapper  " data-offset="0">
	
	
	<div class="wl-column--container wl-row wl-rc__columns-4">
		
			<div class="wl-GridColumn wl-Grid-3--columns">
				<div class="responsivecontainer container responsivegrid"><div id="responsivecontainer-11880c81fe" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="list"><list id="footer-" data-cmp-data-layer="{&#34;footer-&#34;:{&#34;@type&#34;:&#34;wiley/components/core/list/v1/list&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:34Z&#34;}}">
	
	
	<ul>
		<li class="cmp-list__item wl-footer_bold-linkItem" data-cmp-data-layer="{&#34;responsivecontainer-11880c81fe-footer--item-4c1286dfa4&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:34Z&#34;,&#34;dc:title&#34;:&#34;FOR INDIVIDUALS&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">FOR INDIVIDUALS</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item wl-footer_bold-linkItem" data-cmp-data-layer="{&#34;responsivecontainer-11880c81fe-footer--item-3f05b6873a&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:34Z&#34;,&#34;dc:title&#34;:&#34;FOR INSTITUTIONS &amp; BUSINESSES&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/business&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/business" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">FOR INSTITUTIONS &amp; BUSINESSES</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item wl-footer_bold-linkItem" data-cmp-data-layer="{&#34;responsivecontainer-11880c81fe-footer--item-170d180814&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:34Z&#34;,&#34;dc:title&#34;:&#34;WILEY NETWORK&#34;,&#34;xdm:linkURL&#34;:&#34;https://www.wiley.com/network&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="https://www.wiley.com/network" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">WILEY NETWORK</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item wl-footer_bold-linkItem" data-cmp-data-layer="{&#34;responsivecontainer-11880c81fe-footer--item-824f47f09e&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:34Z&#34;,&#34;dc:title&#34;:&#34;NEWSROOM&#34;,&#34;xdm:linkURL&#34;:&#34;https://newsroom.wiley.com/&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="https://newsroom.wiley.com/" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">NEWSROOM</span>
            </span>
        </a>
    </article>
</li>
	</ul>
</list>

    

</div>

		
        
    </div>

</div>
</div>

			</div>
		
			<div class="wl-GridColumn wl-Grid-3--columns">
				<div class="responsivecontainer container responsivegrid"><div id="responsivecontainer-b5691de3b7" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="list"><list id="footer-" data-cmp-data-layer="{&#34;footer-&#34;:{&#34;@type&#34;:&#34;wiley/components/core/list/v1/list&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;}}">
	
	
	<ul>
		<li class="cmp-list__item wl-footer_bold-linkItem" data-cmp-data-layer="{&#34;responsivecontainer-b5691de3b7-footer--item-f8b67b8cc9&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;ABOUT WILEY&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/about.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/about" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">ABOUT WILEY</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-b5691de3b7-footer--item-5c23dd6035&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Corporate Responsibility&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/corporate-responsibility.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/corporate-responsibility" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Corporate Responsibility</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-b5691de3b7-footer--item-0128cab5e4&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Corporate Governance&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/corporate-governance.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/corporate-governance" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Corporate Governance</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-b5691de3b7-footer--item-92f1be717c&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Leadership Team&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/leadership-team.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/leadership-team" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Leadership Team</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-b5691de3b7-footer--item-2c1d5b0891&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Investors&#34;,&#34;xdm:linkURL&#34;:&#34;https://investors.wiley.com/&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="https://investors.wiley.com/" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Investors</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-b5691de3b7-footer--item-544c2c84fc&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Careers&#34;,&#34;xdm:linkURL&#34;:&#34;https://careers.wiley.com/&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="https://careers.wiley.com/" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Careers</span>
            </span>
        </a>
    </article>
</li>
	</ul>
</list>

    

</div>

		
        
    </div>

</div>
</div>

			</div>
		
			<div class="wl-GridColumn wl-Grid-3--columns">
				<div class="responsivecontainer container responsivegrid"><div id="responsivecontainer-d404662ee2" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="list"><list id="footer-" data-cmp-data-layer="{&#34;footer-&#34;:{&#34;@type&#34;:&#34;wiley/components/core/list/v1/list&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;}}">
	
	
	<ul>
		<li class="cmp-list__item wl-footer_bold-linkItem" data-cmp-data-layer="{&#34;responsivecontainer-d404662ee2-footer--item-20143f7823&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;ABOUT ALTA&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/education/alta.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/education/alta" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">ABOUT ALTA</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-d404662ee2-footer--item-c00685ecd1&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Alta Support&#34;,&#34;xdm:linkURL&#34;:&#34;https://support.knewton.com/s/&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="https://support.knewton.com/s/" target="_blank">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Alta Support</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-d404662ee2-footer--item-8bee8c1716&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Accessibility&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/education/alta/accessibility.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/education/alta/accessibility" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Accessibility</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-d404662ee2-footer--item-b4412936f8&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Terms of Service&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/education/alta/terms-of-service.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/education/alta/terms-of-service" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Terms of Service</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-d404662ee2-footer--item-5ca12b82e4&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Terms of Service Order Form&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/education/alta/terms-of-service-order-form.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/education/alta/terms-of-service-order-form" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Terms of Service Order Form</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-d404662ee2-footer--item-f257cf6693&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Terms of Service Enterprise&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/education/alta/terms-of-service-enterprise.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/education/alta/terms-of-service-enterprise" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Terms of Service Enterprise</span>
            </span>
        </a>
    </article>
</li>
	</ul>
</list>

    

</div>

		
        
    </div>

</div>
</div>

			</div>
		
			<div class="wl-GridColumn wl-Grid-3--columns">
				<div class="responsivecontainer container responsivegrid"><div id="responsivecontainer-a8973184e5" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="list"><list id="footer-" data-cmp-data-layer="{&#34;footer-&#34;:{&#34;@type&#34;:&#34;wiley/components/core/list/v1/list&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;}}">
	
	
	<ul>
		<li class="cmp-list__item wl-footer_bold-linkItem" data-cmp-data-layer="{&#34;responsivecontainer-a8973184e5-footer--item-9706b16df9&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;MY ACCOUNT&#34;,&#34;xdm:linkURL&#34;:&#34;https://customer.wileyeurope.com/CGI-BIN/lansaweb?procfun+shopcart+shcfn11+funcparms+parmurl(l0500):https%3A%2F%2Fwww.wiley.com+source(A0100):HYBRIS_EU&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="https://customer.wileyeurope.com/CGI-BIN/lansaweb?procfun+shopcart+shcfn11+funcparms+parmurl(l0500):https%3A%2F%2Fwww.wiley.com+source(A0100):HYBRIS_EU" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">MY ACCOUNT</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-a8973184e5-footer--item-311c314d6b&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Help&#34;,&#34;xdm:linkURL&#34;:&#34;https://support.wiley.com/&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="https://support.wiley.com/" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Help</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-a8973184e5-footer--item-7dae8dae55&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Contact Us&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/contact.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/contact" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Contact Us</span>
            </span>
        </a>
    </article>
</li>
	</ul>
</list>

    

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

		
			
				<div class="responsivecontainer container responsivegrid wl-rc__padding--top-bottom-zero"><div id="responsivecontainer-a50133e4d5" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="separator wl-separator__horizontal--40">
<div id="separator-002f4db9e4" class="cmp-separator">
    <hr class="cmp-separator__horizontal-rule"/>
</div></div>

		
        
    </div>

</div>
</div>

		
			
				<div class="responsivecontainer container responsivegrid wl-rc__padding--top-bottom-zero"><div id="responsivecontainer-bc3c051a25" class=" wl-columncontainer__inner-wrapper  " data-offset="0">
	
	
	<div class="wl-column--container wl-row wl-rc__columns-2--33-67">
		
			<div class="wl-GridColumn wl-Grid-6--columns">
				<div class="responsivecontainer container responsivegrid"><div id="responsivecontainer-8acdc450a5" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="text">
  <div id="footer-" class="cmp-text">
 <p><a href="https://www.wiley.com/copyright" data-cmp-data-layer="{&#34;footer--item0-022facd9--copyright-2000-2023&#34;:{&#34;&#64;type&#34;:&#34;wiley/components/content/text&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;copyright-2000-2023&#34;,&#34;xdm:linkURL&#34;:&#34;https://www.wiley.com/copyright&#34;}}" data-cmp-clickable="data-cmp-clickable">Copyright &#64; 2000-2023</a> by <a href="/en-es" data-cmp-data-layer="{&#34;footer--item1-b26e9f37--john-wiley-sons-inc-&#34;:{&#34;&#64;type&#34;:&#34;wiley/components/content/text&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;john-wiley-sons-inc-&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es&#34;}}" data-cmp-clickable="data-cmp-clickable">John Wiley &amp; Sons, Inc.,</a> or related companies. All rights reserved, including rights for text and data mining and training of artificial technologies or similar technologies.</p>

</div>

    

</div>

		
        
    </div>

</div>
</div>

			</div>
		
			<div class="wl-GridColumn wl-Grid-6--columns">
				<div class="responsivecontainer container responsivegrid"><div id="responsivecontainer-36e5414918" class=" wl-columncontainer__inner-wrapper  ">
	
	
	
    
    <div class="cmp-container">
		
        
			
				<div class="list wl-list__items--horizontal wl-list__separator--vertical"><list id="footer-" data-cmp-data-layer="{&#34;footer-&#34;:{&#34;@type&#34;:&#34;wiley/components/core/list/v1/list&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;}}">
	
	
	<ul>
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-36e5414918-footer--item-1b2314b15d&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Language/Location&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/business/choose-region.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/business/choose-region" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Language/Location</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-36e5414918-footer--item-ec6c5f234f&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Site Map&#34;,&#34;xdm:linkURL&#34;:&#34;/sitemap&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="https://www.wiley.com/sitemap" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Site Map</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-36e5414918-footer--item-60f82c410b&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Rights &amp; Permissions&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/permissions.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/permissions" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Rights &amp; Permissions</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-36e5414918-footer--item-7f2804b1dc&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Privacy Policy&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/privacy.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/privacy" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Privacy Policy</span>
            </span>
        </a>
    </article>
</li>
	
		<li class="cmp-list__item" data-cmp-data-layer="{&#34;responsivecontainer-36e5414918-footer--item-cefe4e1723&#34;:{&#34;@type&#34;:&#34;wiley/components/content/list/item&#34;,&#34;repo:modifyDate&#34;:&#34;2023-12-29T16:05:35Z&#34;,&#34;dc:title&#34;:&#34;Terms of Use&#34;,&#34;xdm:linkURL&#34;:&#34;/en-es/terms-of-use.html&#34;}}" data-cmp-clickable>
    <article>
        <a class="cmp-list__item-link " href="/en-es/terms-of-use" target="_self">
            <span class="cmp-list__item-text">
                <span class="cmp-list__item-title">Terms of Use</span>
            </span>
        </a>
    </article>
</li>
	</ul>
</list>

    

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

    
</div>

    </div>

    
</div>


    
    
    
<script src="/etc.clientlibs/clientlibs/granite/jquery.lc-7842899024219bcbdb5e72c946870b79-lc.min.js"></script>
<script src="/etc.clientlibs/core/wcm/components/commons/site/clientlibs/container.lc-0a6aff292f5cc42142779cde92054524-lc.min.js"></script>
<script src="/etc.clientlibs/wiley/clientlibs/clientlib-consumer.lc-cedea5590113e78fdd53771adfae0205-lc.min.js"></script>



    



    

    

    



    
    



    
    

    


<script>(function(){var js = "window['__CF$cv$params']={r:'8469a96e9e451940',t:'MTcwNTQ0Mjc0Ny41MjcwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script></body>
</html>