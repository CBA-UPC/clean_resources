;
(self.AMP=self.AMP||[]).push({m:1,v:"2401191523000",n:"amp-auto-lightbox",ev:"0.1",l:!0,f:function(t,n){(()=>{var n="load-end";ar{isArray:e}=Array,{hasOwnProperty:o,toString:i}=Object.prototype;function u(t,n,r,e,o,i,u,l,a,c,s){return t}r c,s,f,d={bubbles:!0,cancelable:!0},h=self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var p=self.__AMP_LOG;function O(t,n,r,e){let o=r;const i=function(t,n,r,e){let o=t,i=r,u=const l=),a=!(null==e||!e.capture);return o.addEventListener(n,u,l?e:a),()=>{null==o||o.removeEventListener(n,u,l?e:a),i=null,o=null,u=null}}(t,n,(t=>{try{o(t)}finally{o=null,i()}}),e);return i}nochunking=1/.test(self.location.hash),c||(c=Promise.resolve(void 0));var I="i-amphtml-auto-lightbox-visited",S={"Article":!0,"NewsArticle":!0,"BlogPosting":!0,"LiveBlogPosting":!0,"DiscussionForumPosting":!0},D=["[placeholder]","[data-amp-auto-lightbox-disable]","amp-selector [option]","[subscriptions-action]"].join(","),T=["a[href]","amp-script","amp-story","button","amp-lightbox","amp-carousel"].join(","),B=E=class t{static meetsAll(n,r,e,o){return t.meetsSizingCriteria(n,r,e,o)&&t.meetsTreeShapeCriteria(n,r)}static meetsTreeShapeCriteria(t,n){return!("IMG"===t.tagName&&a(t,"amp-img")||a(t,`${T},${D}`)||(t=>function(t,n){const r=y(w(t));return x(r,n)?P(r,n):null}(t,"action"))(n||t).hasResolvableAction(t,"tap"))}static meetsSizingCriteria(t,n,r,e){const{naturalHeight:o,naturalWidth:i}=function(t){const{naturalHeight:n,naturalWidth:r}=t,e=r/n,o=function(t){let n=-1;const r=t.getAttribute("srcset");if(r){let t;for(;t=W.exec(r);){const r=parseInt(t[1],10);r>n&&(n=r)}}return n}(t);return o>r?{naturalWidth:o,naturalHeight:o/e}:{naturalWidth:r,naturalHeight:n}}(t.querySelector("img")||t),u=b(n,"viewport"),{height:l,width:a}=u.getSize();return function(t,n,r,e,o,i){const u=t*n;return r*e/u>=1.2||r>o||e>i||u/(o*i)>=.25}(r,e,i,o,a,l)}},W=/\s+([0-9]+)w(,|[\S\s]*$)/g;function $(t){return M(t).mutateElement(t,()}var G=class t{static getOgType(t){const n=t.getRootNode().querySelector('meta[property="og:type"]');if(n)return n.getAttribute("content")}static hasValidOgTypetatic getAllLdJsonTypes(t){return r(t.getRootNode().querySelectorAll('script[type="application/ld+json"]')).map((t=>{const{textContent:n}=t;return(n)||{})["@type"]})).filter(Boolean)},H=0;function L(t,e){if(!function(t){return!function(t){const n=`[lightbox]:not([${I}])`,r=n=>!!t.getRootNode().querySelector(n);return r('script[custom-element="amp-lightbox-gallery"]')&&r(n)}(t)&&(G.hasValidOgType(t)||G.hasValidLdJsonType(t))}(t))return;const o=e||t.win.document;return function(t,r){return r.map((r=>{return(e=r,"IMG"===e.tagName?function(t){let n,r;if(t))return Promise.resolve(t);const e=C(t);return e&&t.__AMP_MEDIA_LOAD_FAILURE_SRC===t.currentSrc?Promise.reject(t):new Promise(((o,i)=>{if(n=e?O(t,"loadedmetadata",o,{capture:!0}):O(t,"load",o),!t.tagName)return;let u=t;if(e&&!t.hasAttribute("src")&&(u=function(t,n){for(let r=t.lastElementChild;r;r=r.previousElementSibling)if(n(r))return r;return null}(t,(),!u))return i(new Error("Media has no source."));r=O(u,"error",i)})).then((()=>(r&&r(),t)),(()=>{n&&n(),function(t){C(t)&&(t.__AMP_MEDIA_LOAD_FAILURE_SRC=t.currentSrc||!0);let n=t;throw n&&n.src&&(n=n.src),(p.user||(p.user=g()),void p.user.win?p.userForEmbed||(p.userForEmbed=g()):p.user).createError("Failed to load:",n)}(t)}))}(e):function(t){if(u(t)),t.createdCallback)return Promise.resolve(t);if(!t.__AMP_UPG_PRM){const n=new h;t.__AMP_UPG_PRM=n.promise,t.__AMP_UPG_RES=n.resolve}const n=t.__AMP_UPG_PRM;return u(n),n}(e).then(()).then((()=>function(t){var n;let r=null===(n=s)||void 0===n?void 0:n.get(t);if(!r){const n=function(t){s||(s=new WeakMap,f=new WeakMap),u(f);let n=f.get(t);return n||(n=function(t,n,r={}){const{needsRootBounds:e,rootMargin:o,threshold:i}=r,u=function(t){return t.parent&&t.parent!=t}(n)&&(e||o)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:i,root:u,rootMargin:o})}((t=>{const r=new Set;for(let o=t.length-1;o>=0;o--){var e;const{target:i}=t[o];r.has(i)||(r.add(i),u(n),n.unobserve(i),u(s),null===(e=s.get(i))||void 0===e||e.resolve(t[o]),s.delete(i))}}),t,{needsRootBounds:!1}),f.set(t,n)),n}(l(t));u(s),n.observe(t),r=new h,s.set(t,r)}return r.promise}(r).then((({boundingClientRect:e})=>{if("IMG"!==r.tagName&&!r.signals().get(n))return;const{height:o,width:i}=e;return E.meetsAll(r,t,i,o)?function(t,n){return M(t).mutateElement(n,(()=>{n.setAttribute("lightbox","i-amphtml-auto-lightbox-"+H++)})).then((()=>{return(r=t.win,v(r,"extensions")).installExtensionForDoc(t,"amp-lightbox-gallery"),function(t,n,r,e){u(t.ownerDocument);const{bubbles:o,cancelable:i}=d,l=new MessageEvent("amp-auto-lightbox:newly-set",{data:{},bubbles:o,cancelable:i});t.dispatchEvent(l)}(n),n;var r}))}(t,r):void 0}))),B);var e}))}(t,class{static getCandidates(t){const n=["amp-img","img"].map(().join(","),e=r(t.querySelectorAll(n));return e.forEach($),e}}.getCandidates(o))}var{ampdoc:R}=t;R.whenReady().then((()=>{R.getRootNode().addEventListener("amp:dom-update",(),L(R)}))})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-auto-lightbox-0.1.mjs.map