;
(self.AMP=self.AMP||[]).push({m:1,v:"2401191523000",n:"amp-iframe",ev:"0.1",l:!0,f:function(t,n){(()=>{ s;ar{isArray:o}=Array;function u(t,n){const e=[];let i=0;for(let s=0;s<t.length;s++){const r=t[s];n(r,s,t)?e.push(r):(i<s&&(t[i]=r),i++)}return i<t.length&&(t.length=i),e}ar a,l,{hasOwnProperty:h,toString:f}=Object.prototype;unction m(t,n,e,i,s,r,o,u,c,a,l){return t}ction b(t){const n=g.apply(null,arguments);setTimeout((()=>{throw v(n),n}))}function w(t,...n){try{return t.apply(null,n)}catch(t){b(t)}}nction _(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}nction M(t,n,e,i){const s=o(r=t)?r:[r];var r;for(const t of s){const s=n.getAttribute(t);null!==s?e.setAttribute(t,s):i&&e.removeAttribute(t)}}var O=["Webkit","webkit","Moz","moz","ms","O","o"],T={"getPropertyPriority":()=>"","getPropertyValue":;r j=/vertical/,x=new WeakMap,R=new WeakMap,k=new WeakMap;unction C(t){const n=new Set;for(let e=t.length-1;e>=0;e--){const i=t[e],{target:s}=i;if(n.has(s))continue;n.add(s);const r=R.get(s);if(r){k.set(s,i);for(let t=0;t<r.length;t++){const{callback:n,type:e}=r[t];V(e,n,i)}}}}ar L=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;elf.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var G=self.__AMP_LOG;MP__EXPERIMENT_TOGGLES",nt=t=>J(t,"timer"),et=it=ar rt="unlisten";function ot(t,n,e){const i=function(t,n){let{listeningFors:e}=t;return!e&&n&&(e=t.listeningFors=Object.create(null)),e||null}(t,e);if(!i)return i;let s=i[n];return!s&&e&&(s=i[n]=[]),s||null}function ut(t,n){for(let e=n;e&&e!=e.parent;e=e.parent)if(e==t)return!0;return!1}function ct(t){const n={"sentinel":rt};for(let e=t.length-1;e>=0;e--){const i=t[e];if(!i.frame.contentWindow){t.splice(e,1);const{events:s}=i;for(const t in s)s[t].splice(0,1/0).forEach(()}}}function at(t,n,e,i,s,r){W(t.src),W(!t.parentNode),W(e);const o=t.ownerDocument.defaultView;!o);const u=o,t,i),c=(a=t.src,Q||(Q=self.document.createElement("a")),Q,a)).origin;var a;let l,h=u[n]||(u[n]=[]),f=return h.push(f),l=function(){if(f){const t=h.indexOf(f);t>-1&&h.splice(t,1),f=null,h=null,e=null}}}ar ht=[[300,250],[320,50],[300,50],[320,100]],ft=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1];ate.now();var mt={"AMP-FX-FLYING-CARPET":!0,"AMP-LIGHTBOX":!0,"AMP-STICKY-AD":!0,"AMP-LIGHTBOX-GALLERY":!0};ar gt=((),vt="amp-iframe",bt=["allowfullscreen","allowpaymentrequest","allowtransparency","allow","frameborder","referrerpolicy","scrolling","tabindex","title"],wt=0,yt=class extends t.BaseElement{constructor(t){super(t),this.vg=null,this.bg=!1,this.wg=!1,this.yg=!1,this.Pg=!1,this.tb=null,this._g=!1,this.Ag=null,this.Ig="",this.Mg=null,this.iframeSrc=null,this.v_=null,this.Og=null,this.Tg=!1,this.ob=new class{pdatePlaying(t){t!==this.sb&&(this.sb=t,t?(this.ub=!1,this.el,this.cb)):function(t,n){!function(t,n,e){const i=R.get(t);if(i&&(u(i,(),0==i.length)){R.delete(t),k.delete(t);const n=t.ownerDocument.defaultView;n&&z(n).unobserve(t)}}(t,0,n)}(this.el,this.cb))}(this.element)}isLayoutSupportede(t,n,e=""){const{element:i}=this,s=it(i),r=s.parse(t),{hostname:o,origin:u,protocol:a}=r;$(s.isSecure(t)||"data:"==a,"Invalid <amp-iframe> src. Must start with https://. Found %s",i);const l=s.parse(n);return $(!this.Eg(e,"allow-same-origin")||u!=l.origin&&"data:"!=a,"Origin of <amp-iframe> must not be equal to container %s if allow-same-origin is set. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",i),$(!(c(o,`.${gt.thirdPartyFrameHost}`)||c(o,".ampproject.org")),"amp-iframe does not allow embedding of frames from ampproject.*: %s",t),t}Sgg(t,n){return new RegExp(`\\s${n}\\s`,"i").test(" "+t+" ")}jg(t){if(!t)return;const{hash:n,protocol:e}=it(this.element).parse(t);return"data:"==e||n&&"#"!=n?t:function(t){const n=t.indexOf("#");return-1==n?t:t.substring(0,n)}(t)+"#amp=1"}xg(t,n){if(t)return $(!(" "+n+" ").match(/\s+allow-same-origin\s+/i),"allow-same-origin is not allowed with the srcdoc attribute %s.",this.element),"data:text/html;charset=utf-8;base64,"+(i=t,e="undefined"!=typeof TextEncoder?(new TextEncoder).encode(i):function(t){const n=new Uint8Array(t.length);for(let e=0;e<t.length;e++){const i=t.charCodeAt(e);m(i<=255),n[e]=i}return n}(unescape(encodeURIComponent(i))),btoa(e)));var e,i}preconnectCallbackuildCallbacknLayoutMeasure(){const{element:t}=this;this.wg=function(t){const{height:n,width:e}=t.getLayoutSize();for(let t=0;t<ht.length;t++){const i=ht[t][0],s=ht[t][1];if(!(s>n)&&!(i>e)&&n-s<=20&&e-i<=20)return!0}return!1}(t),this.yg=this.kg(),this.Pg=this.wg&&!t,this.win)}kg(){return function(t){const{height:n,width:e}=t.getLayoutSize();return!(e>10||n>10||t))}(this.element)}layoutCallback(){if($(!this.Pg,"amp-iframe is not used for displaying fixed ad. Please use amp-sticky-ad and amp-ad instead."),this.bg||this.Sg(),this._g&&$(this.getOverflowElement(),"Overflow element must be defined for resizable frames: %s",this.element),!this.iframeSrc)return r();if(this.yg&&!this.getAmpDoc().registerSingleton(1))return console.error("Only 1 analytics/tracking iframe allowed per page. Please use amp-analytics instead or file a GitHub issue for your use case: https://github.com/ampproject/amphtml/issues/new/choose"),r();const t=this.element.ownerDocument.createElement("iframe");this.tb=t,t.classList.add("i-amphtml-fill-content"),t.name="amp_iframe"+wt++,this.bg&&E(t,"zIndex",-1),M(bt,this.element,t);let n=t.getAttribute("allow")||"";return n=n.replace("autoplay","autoplay-disabled"),t.setAttribute("allow",n),this.element,t,this.Ig),t.src=this.iframeSrc,this.yg||(this.Ag=new class{constructor(t,n){this.zg=t,this.Cg=null,this.Vg=new class{end(t,n){u(this.Ng,(),this.tb,this.Ng,t,n,this.Lg)}(n,"send-intersections",!1,(),this.Cg=new IntersectionObserver((t=>{this.Vg.send("intersection",{"changes":t.map(dt)})}),{threshold:ft})}this,t)),t.onload=()=>{t.readyState="complete",this.Fg(),this.yg&&(this.iframeSrc=null,nt(this.win).promise(5e3).then((()=>{I(t),this.element.setAttribute("amp-removed",""),this.tb=null})))},at(t,"embed-size",(,void 0,void 0,!0),this.Mg=function(t,n,e,i){let s=t,r=e,o=const u=);return s.addEventListener(n,o,!!u&&i),()=>{null==s||s.removeEventListener(n,o,!!u&&i),r=null,s=null,o=null}}(this.win,"message",(,void 0),this.bg&&at(t,"embed-ready",this.Fg.bind(this)),at(t,"send-consent-data",(),this.v_.appendChild(t),this.loadPromise(t).then((()=>{this.v_!=this.element&&nt(this.win).delay((()=>{this.mutateElement(()}),1e3),this.ob.updatePlaying(!0)}))}$g(t){if(!this.tb||t.source!==this.tb.contentWindow)return;const n=st(t);if("string"!=typeof n||!n.startsWith("pym"))return;const e=n.split(/xPYMx/);"height"===e[2]?this.Wg(parseInt(e[3],10),void 0):"width"===e[2]&&this.Wg(void 0,parseInt(e[3],10))}lb(t,n){var e,s;(e=this.element,s=this.getConsentPolicy(),et(e).then((t=>{const n={"consentMetadata":t&&t.getConsentMetadataInfo,"consentString":t&&t.getConsentStringInfo,"consentPolicyState":t&&t.whenPolicyResolved,"consentPolicySharedData":t&&t.getMergedSharedData};return t?Promise.all(Object.keys(n).map((e=>n[e].call(t,s||"default").then(()))).then((t=>Object.assign.apply({},t))):n}))).then((e=>{this.hb(t,n,i({"sentinel":"amp","type":"consent-data"},e))}))}nlayoutCallbacketLayoutPriority(){return this.wg?2:this.yg?1:super.getLayoutPriority()}mutatedAttributesCallback(){this.vg&&this.getVsync().mutate((()=>{this.tb&&(E(this.tb,"zIndex",0),this.togglePlaceholder(!1))}))}hrowIfCannotNavigateg(t,n){if(!this._g)return void(this.Tg||(this.user().error(vt,"Ignoring embed-size request because this iframe is not resizable",this.element),this.Tg=!0));if(t<100)return void this.user().error(vt,"Ignoring embed-size request because the resize height is less than 100px. If you are using amp-iframe to display ads, consider using amp-ad instead.",this.element);let e,i;t=parseInt(t,10),isNaN(t)||(e=Math.max(t+(this.element.offsetHeight-this.tb.offsetHeight),t)),n=parseInt(n,10),isNaN(n)||(i=Math.max(n+(this.element.offsetWidth-this.tb.offsetWidth),n)),void 0!==e||void 0!==i?this.attemptChangeSize(e,i).then((()=>{void 0!==e&&this.element.setAttribute("height",e),void 0!==i&&this.element.setAttribute("width",i),this.element.overflowCallback(!1,e,i)}),(()=>{})):this.user().error(vt,"Ignoring embed-size request because no width or height value is provided",this.element)}Rg(){if(!function(t,n){const e=t);return!!e["iframe-messaging"]}(this.win))return;const{element:t}=this,n=t.getAttribute("src");if(n&&(this.Og=it(t).parse(n).origin),this.registerAction("postMessage",(t=>{this.Og?this.tb.contentWindow.postMessage(t.args,this.Og):D().error(vt,'"postMessage" action is only allowed with "src"attribute with an origin.')})),!this.Og)return;let e=0;const s=t=>{if(t.source!==this.tb.contentWindow)return;if(t.origin!==this.Og)return void D().error(vt,'"message" received from unexpected origin: '+t.origin+". Only allowed from: "+this.Og);if(!this.qg())return e++,D().error(vt,'"message" event may only be triggered from a user gesture.'),void(e>=10&&(D().error(vt,'Too many non-gesture-triggered "message" events; detaching event listener.'),this.win.removeEventListener("message",s)));const n=st(t);let i;try{i=y(JSON.stringify(n))}catch(t){return void D().error(vt,'Data from "message" event must be JSON.')}const r=function(t,n,e,i){const s={detail:e};return Object.assign(s,void 0),new t.CustomEvent("amp-iframe:message",s)}(this.win,0,{"data":i});(t=>B(this.element,"action"))().trigger(this.element,"message",r,3)};this.win.addEventListener("message",s)}qg(){if(this.getAmpDoc().getRootNode().activeElement!==this.tb)return!1;const t=this.win.document.createElement("audio");return n=t,(e=new Promise(()).catch((),!t.paused;var n,e};t.registerElement(vt,yt)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-iframe-0.1.mjs.map