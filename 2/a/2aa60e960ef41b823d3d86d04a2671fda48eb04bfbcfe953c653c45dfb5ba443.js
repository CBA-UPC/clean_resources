;
(self.AMP=self.AMP||[]).push({m:1,v:"2312191621000",n:"amp-carousel",ev:"0.2",l:!1,f:function(t,i){(()=>{var i,{isArray:s}=Array,{hasOwnProperty:e,toString:n}=Object.prototype;function r(t,i,s,e,n,r,o,h,l,a,c){return t}var o,h,l={bubbles:!0,cancelable:!0};function a(t){return function(t,i){if(r(1===i.length),r(Array.isArray(i)||(s=i,e.call(s,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){const s=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:);t.innerHTML=s.createHTML("ignored")}else t.innerHTML=i[0];var s;const n=t.firstElementChild;return r(n),r(!n.nextElementSibling),t.removeChild(n),n}(o,t)}var c=["Webkit","webkit","Moz","moz","ms","O","o"],u={"getPropertyPriority":()=>"","getPropertyValue":;function d(t){const i=t.replace(/[A-Z]/g,();return c.some(()?`-${i}`:i}unction _(t,i){const{style:s}=t;for(const t in i)s.setProperty(d(p(s,t)),String(i[t]),"important")}function m(t,i,s,e,n){const r=p(t.style,i,n);if(!r)return;const o=e?s+e:s;t.style.setProperty(d(r),o)}f.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var g=self.__AMP_LOG;nction z(t,i,s,e){let n=t,r=s,o=const h=),l=!(null==e||!e.capture);return n.addEventListener(i,o,h?e:l),()=>{null==n||n.removeEventListener(i,o,h?e:l),r=null,n=null,o=null}}function L(t,i,s,e){const n={detail:s};return Object.assign(n,e),new t.CustomEvent(i,n)}nction j(t,i,s,e){let n=s;const r=z(t,i,(t=>{try{n(t)}finally{n=null,r()}}),e);return r}r H="amp-carousel:indexchange",W="amp-carousel:scrollstart",F="amp-carousel:scrollpositionchange",D="start";function q(t,i){const{bottom:s,height:e,left:n,right:r,top:o,width:h}=i.getBoundingClientRect();return{start:0==t?n:o,end:0==t?r:s,length:0==t?h:e}}function Q(t,i){const{end:s,start:e}=q(t,i);return(e+s)/2}function X(t,i){const{start:s}=q(t,i);return s}unction G(t,i,s){m(i,0==t?"width":"height",`${s}px`)}function J(t,i,s){const{end:e,start:n}=q(t,i);return n<=s&&s<e}function K(t,i,s,e){const n=Z(t,i,e),r=Z(t,i,s),{length:o}=q(t,e);return(n-r)/o}ar tt="i-amphtml-carousel-spacer";r et="__AMP_CAROUSEL_NEAR_VIEWPORT",nt="__AMP_CAROUSEL_IN_VIEWPORT",rt=100,ot=.01,ht=['<div class=i-amphtml-carousel-content><div class=i-amphtml-carousel-scroll></div><div class=i-amphtml-carousel-arrows><div tabindex=0 class="amp-carousel-button amp-carousel-button-prev"></div><div tabindex=0 class="amp-carousel-button amp-carousel-button-next"></div></div></div>'],lt="carousel",at="slides",ct=class extends t.BaseElement{static prerenderAllowed(){return!0}pG(){this.registerAction("goToSlide",(t=>{const{args:i,trust:s}=t,e=Number(i.index||0);var n,r,o;n=!isNaN(e),r=i.index,o=this.element,(g.user||(g.user=b()),void g.user.win?g.userForEmbed||(g.userForEmbed=b()):g.user).assert(n,"Unexpected slide index for goToSlide action: %s. %s",r,o,undefined,undefined,undefined,undefined,undefined,undefined,undefined),this.eQ.goToSlide(e,{actionSource:this.o0(s)})}),1),this.registerAction("toggleAutoplay",(t=>{const{args:i}=t,s=i?i.toggleOn:void 0;this.t1(s)}),1),this.tc.addToAllowlist("AMP-CAROUSEL","goToSlide",["email"])}constructor(t){var i,s;super(t),this.bX=(s=this.win,v(s,"platform")).isIos(),this.eQ=null,this.iQ=null,this.rQ=[],this.FL=null,this.gC="carousel",this.Jj=!1,this.Kf=null,this.Wf=null,this.aQ=!1,this.tc=null,this.hQ=null,this.i1=!1,this.s1=(i=t,M(i,"viewer")).isEmbedded()}isLayoutSupporteduildCallback(){this.tc=(t=>function(t,i){const s=T(E(t));return S(s,i)?V(s,i):null}(t,"action"))(this.element);const{element:t,win:i}=this,s=function(t){return function(t,i){const s=[];for(let i=t.firstElementChild;i;i=i.nextElementSibling)!(function(t){let i;var s;return"string"==typeof t?i=t:1==(null==(s=t)?void 0:s.nodeType)&&(i=t.tagName),!!i&&i.toLowerCase().startsWith("i-")}(e=i)||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&s.push(i);var e;return s}(t)}(this.element);t.appendChild(this.e0()),this.iQ=this.element.querySelector(".i-amphtml-carousel-scroll"),this.Wf=this.element.querySelector(".amp-carousel-button-prev"),this.Kf=this.element.querySelector(".amp-carousel-button-next"),this.eQ=new class{constructor(t){const{element:i,initialIndex:s,runMutate:e,scrollContainer:n,win:r}=t;this.i=r,this._Q=e,this.yf=i,this.iQ=n,this.AQ=new class{constructor(t){const{advanceable:i,element:s,scrollContainer:e,win:n}=t;this.i=n,this.iQ=e,this.fQ=i,this.bQ=0,this.AQ=!1,this.PQ=1,this.gQ=1e3,this.vQ=!1,this.wQ=!1,this.IQ=null,this.MQ=Number.POSITIVE_INFINITY,this.Ni=s.getAmpDoc(),this.xQ(this.gQ),this.iQ.addEventListener("scroll",(()=>this.EQ()),!0),O(this.iQ,"touchstart",(()=>this.TQ()),{capture:!0,passive:!0}),O(s,H,(t=>{this.RQ(t)}))}stop(){this.wQ=!0}dateAutoAdvance(t){this.AQ=t,this.VQ()}updateAutoAdvanceCount(t){this.PQ=t,this.VQ()}updateAutoAdvanceIntervalpdateMaxAdvances(t){this.MQ=t}xQ(t){const i=P(this.i,(()=>{i==this.IQ&&this.SQ()}),t);this.IQ=i}TQ(){this.pause(),j(window,"touchend",(()=>{this.resume()}),{capture:!0,passive:!0})}yQQ{win:r,element:i,scrollContainer:n,advanceable:this}),this.kQ=new class{constructor(t){const{element:i,runMutate:s,scrollContainer:e,stoppable:n,win:r}=t;this.i=r,this.iQ=e,this._Q=s,this.rQ=[],this.CQ=1,this.LQ=!1,this.zQ=!1,this.Oe=0,i.addEventListener("focus",(,!0),i.addEventListener(H,(t=>{this.NQ(t)}))}updateMixedLength(t){this.LQ=t}updateUi(){this.zQ||(this.zQ=!0,this._Q(())}updateSlides(t){this.rQ=t,this.updateUi()}updateVisibleCount(t){this.CQ=t,this.updateUi()}$QQ(){this.$Q()?(this.iQ.removeAttribute("aria-live"),this.iQ.setAttribute("role","list"),this.rQ.forEach(()):(this.iQ.setAttribute("aria-live","polite"),this.iQ.removeAttribute("role"),this.rQ.forEach(())}BQ(){this.rQ.forEach(((t,i)=>{const s=!this.$Q()&&i!==this.Oe;t.setAttribute("aria-hidden",s)}))}NQ(t){const i=B(t).index;this.Oe=i,this._Q((()=>{this.BQ()}))}}({win:r,element:i,scrollContainer:n,runMutate:e,stoppable:this.AQ}),this.jQ=P(r,(()=>this.UQ()),200),this.HQ=1,this.WQ=Number.POSITIVE_INFINITY,this.LQ=!1,this.rQ=[],this.QQ=!0,this.zQ=!1,this.DQ=[],this.ZQ=[],this.FQ=[],this.qQ=[],this.KQ=!1,this.XQ=!1,this.GQ=0,this.JQ=null,this.YQ=NaN,this.LZ=!1,this.NZ=!1,this.$Z=void 0,this.jZ=D,this.UZ=0,this.HZ=!0,this.WZ=!0,this.FL=s||0,this.ud=!1,this.QZ=!0,this.ZZ=1,this.CQ=1,this.iQ.addEventListener("scroll",(()=>this.EQ()),!0),this.iQ.addEventListener("scrollend",(()=>this.FZ()),!0),O(this.iQ,"touchstart",(()=>this.TQ()),{capture:!0,passive:!0}),O(this.iQ,"wheel",(()=>this.qZ()),{capture:!0,passive:!0})}revdvance(t,i={}){const{FL:s,JQ:e,rQ:n}=this,{actionSource:r,allowWrap:o=!1}=i,h=null!==e?e:s,l=h+t,a=n.length-1,c=0===h,u=h===a,d=l<0,p=l>a,_=t>0&&this.KZ(h)&&this.KZ(l);let m;m=this.isLooping()?U(l,a+1):o?_?0:d&&c||p&&!u?a:d&&!c||p&&u?0:l:_?h:$(l,0,a),this.goToSlide(m,{actionSource:r})}tCurrentIndex(){return this.FL}sLoopingoToSlide(t,i={}){const{actionSource:s,smoothScroll:e=!0}=i;t<0||t>this.rQ.length-1||isNaN(t)||t!==this.FL&&(this.LZ||this.XZ()||(this.XQ=!1,this.JQ=t,this.$Z=s,this.GZ(this.rQ[t],{smoothScroll:e})))}updateAdvanceCount(t){this.HQ=t}updateAlignmentpdateAutoAdvance(t){this.AQ.updateAutoAdvance(t)}updateAutoAdvanceCount(t){this.AQ.updateAutoAdvanceCount(t)}pdateAutoAdvanceLoops(t){this.WQ=t,this.updateUi()}updateForwards(t){this.HZ=t,this.updateUi()}updateHideScrollbar(t){this.WZ=t,this.updateUi()}pdateLoop(t){this.ud=t,this.updateUi()}pdateSlides(t){const{length:i}=t;i?(this.rQ=t,this.FL=this.isLooping()?U(this.FL,i):$(this.FL,0,i-1)||0,this.kQ.updateSlides(t),this.updateUi()):this.yf.tagName.toUpperCase()}updateSnap(t){this.QZ=t,this.updateUi()}updateSnapBydateUi(){this.zQ||this.KQ||(this.zQ=!0,this._Q((()=>{this.zQ=!1,this.iQ.setAttribute("mixed-length",this.LQ),this.iQ.setAttribute("user-scrollable",this.QQ),this.iQ.setAttribute("hide-scrollbar",this.WZ),this.iQ.setAttribute("horizontal",0===this.UZ),this.iQ.setAttribute("loop",this.isLooping()),this.iQ.setAttribute("snap",this.QZ),_(this.iQ,{"--visible-count":this.CQ}),this.rQ.length&&(this.AQ.updateMaxAdvances(this.WQ*this.rQ.length-1),this.JZ(),this.YZ(),this.VK(),this.UQ(!0))})))}updateVisibleCountKKotifyScrollStart(){this.yf.dispatchEvent(L(this.i,W,null))}$KQ(){this.LZ=!0,this.$Z=3,this.JQ=null,this.XQ=!1,j(window,"touchend",(,{capture:!0,passive:!0})}QK(t,i,s){const e=i*s*(this.HZ?1:-1);!function(t,i,s){const e=0==t?s:0,n=0==t?0:s;m(i,"transform",`translate(${e}px, ${n}px)`),_(i,{"--content-transform":`translate(${e}px, ${n}px)`})}(this.UZ,t,e),t._revolutions=i}WK(t){this.rQ.forEach(()}QK(){return this.rQ.map((t=>q(this.UZ,t).length))}isAtEnd(){return!this.isLooping()&&this.ZK()}KKK(t){const i=[];for(let s=0;s<t;s++){const t=document.createElement("div");t.className=tt,i.push(t)}return i}JZ(){const{UZ:t,rQ:i}=this,s=this.QK(),e=st(s),n=this.isLooping()?i.length:0;this.DQ.forEach((t=>{this.iQ.removeChild(t)})),this.DQ=this.qK(n),this.DQ.forEach(((e,n)=>{G(t,e,s[n]),this.iQ.insertBefore(e,i[0])})),this.ZQ.forEach((t=>{this.iQ.removeChild(t)})),this.ZQ=this.qK(n),this.ZQ.forEach(((i,n)=>{G(t,i,s[n]),this.HK(i,-1,e),this.iQ.appendChild(i)})),this.FQ.forEach((),this.FQ=this.qK(n),this.FQ.forEach(((i,n)=>{G(t,i,s[n]),this.HK(i,-1,e),this.iQ.appendChild(i)})),this.qQ=this.DQ.concat(this.ZQ,this.FQ)}YZ(){const t=this.rQ.length,i=this.jZ===D,s=1===U(this.CQ,2),e=i||s?"0%":"50%";!function(t,i){const{length:s}=t;for(let e=0;e<s;e++)i(t[e],e)}(this.iQ.children,((i,s)=>{const n=U(s,t),r=0===U(n,this.ZZ);!i.classList.contains(tt)&&this.isLooping()||i,{"scroll-snap-align":r?this.jZ:"none","scroll-snap-coordinate":r?e:"none"})}))}VK(){const{FQ:t,DQ:i,FL:s,rQ:e}=this,n=Math.max(0,e.length-s-1),r=Math.max(0,s-1);i.forEach(((t,r)=>{const o=function(t,i,s){const{length:e}=s;return t===i?e:U(t-i,e)}(s,r,i)>e.length-1;t.hidden=o||r<e.length-n})),t.forEach(((i,n)=>{const o=function(t,i,s){const{length:e}=s;return t===i?e:U(i-t,e)}(s,n,t)>e.length-1;i.hidden=o||n>r}))}UK(){const{jZ:t,qQ:i,UZ:s,FL:e,iQ:n,rQ:r}=this,o=st(this.QK()),h=!!i.length,l=h?i:r,a=s,t,n,l,h?e+r.length:e);if(void 0===a)return;const c=l[a],u=a%r.length,d=K(s,t,n,c);this.BK(u,d),u!==e&&this._Q(()}UQ(t=!1){const{$Z:i}=this;if(this.LZ)return;if(this.$Z=void 0,this.NZ=!1,this._Q((()=>{this.$K()})),this.YQ===this.FL&&null===this.JQ&&!t)return;null!==this.JQ&&(this.FL=this.JQ,this.JQ=null,this.GQ=0);const s=st(this.QK());this._Q((()=>{this.NK(this.FL,i),this.BK(this.FL,this.GQ),this.WK(s),this.VK(),this.KK(s),this.XK()}))}XK(){const{jZ:t,UZ:i,GQ:s,FL:e,iQ:n,rQ:r}=this,o=r[e],h=K(i,t,n,o)-s,{length:l}=q(i,o),a=h*l;a&&(this.XQ=!0,it(n,())}GZ(t,i){const{smoothScroll:s}=i;(s?it)(this.iQ,(()=>{!function(t,i,s,e,n=0){const r=i==D,{length:o}=q(t,e);Y(t,s,(r?X(t,e):Q(t,e))-(r?X(t,s):Q(t,s))-n*o)}(this.UZ,this.jZ,this.iQ,t)}))}GK(t,i,s){const{FL:e,YQ:n,rQ:r}=this,o=r[e]._revolutions||0,h=s?1:-1;for(let l=1;l<=i;l++){const i=U(e+l*h,r.length);if(i===n&&e!==n)break;const a=r[i],c=i>e!==s?o+h:o;this.HK(a,c,t)}}KK(t){if(!this.isLooping())return;const{jZ:i,rQ:s,CQ:e}=this,n=i===D?e-1:0,r=(s.length-1-n)/2,o=(s.length-1+n)/2;this.GK(t,Math.round(r),!1),this.GK(t,Math.round(o),!0)}KZ(t){const{jZ:i,rQ:s,CQ:e}=this,n=i===D?e:e/2;return t>=s.length-n}}({win:i,element:t,scrollContainer:this.iQ,initialIndex:Number(this.element.getAttribute("slide")||"0"),runMutate:t=>this.mutateElement(t)}),this.e1(s),this.pG(),this.element.addEventListener(H,(),this.element.addEventListener(W,(()=>{this.T0()})),this.element.addEventListener(F,(),this.setupButtonInteraction(this.Kf,(()=>this.interactionNext())),this.setupButtonInteraction(this.Wf,(),this.n1();const e=k(t);return this.hQ=new class{constructor(t){const{ampElement:i,intersectionElement:s,intersectionThreshold:e=ot,nearbyMarginInPercent:n=rt,viewportIntersectionThreshold:r=e,viewportIntersectionCallback:o=(()=>{})}=t;this.a0=i,this.AL=k(i.element),this.h0=s,this.l0=e,this.c0=n,this.u0=r,this.d0=o,this.p0=!1,this.m0=[],this._0=null,this.A0=null,this.xm=null,this.f0=!1}0(){if(this._0&&this.A0&&this.xm)return;const{win:t}=this.a0;this._0=new t.IntersectionObserver((t=>this.g0(t)),{root:this.h0,rootMargin:`${this.c0}%`,threshold:this.l0}),this.A0=new t.IntersectionObserver((t=>this.v0(t)),{root:this.h0,rootMargin:`${this.c0+10}%`,threshold:this.l0}),this.xm=new t.IntersectionObserver((,{root:this.h0,rootMargin:"0%",threshold:this.u0})}g0(t){t.filter(().forEach((t=>{const{target:i}=t;i[et]=0})),this.p0||this.I0()}v0(t){t.filter(().forEach((),this.p0||this.M0()}w0(t){t.forEach((t=>{const{isIntersecting:i,target:s}=t;s[nt]=i?0:1})),this.p0||this.x0()}0(){for(let t=0;t<this.m0.length;t++){const i=this.m0[t];0==i[et]&&(this.b0(i,!0),i[et]=null)}}M000pdateChildrensUnlaidOut({ampElement:this,intersectionElement:this.iQ,nearbyMarginInPercent:this.bX?200:100,viewportIntersectionCallback:(t,i)=>{i?e.scheduleResume(this.element,t):e.schedulePause(this.element,t)}}),this.hQ.setQueueChanges(this.bX),this.hQ.updateChildren(this.rQ),this.eQ.updateSlides(this.rQ),this.eQ.goToSlide(Number(this.element.getAttribute("slide")||"0")),this.element.hasAttribute("controls")?this.i1=!0:(t=>v(this.win,"input"))().onMouseDetected((t=>{t&&(this.i1=!0,this.i0())}),!0),this.mutateElement(()}setupButtonInteraction(t,i){t.addEventListener("click",i),t.addEventListener("keydown",(t=>{t.defaultPrevented||"Enter"!=t.key&&" "!=t.key||(t.preventDefault(),i())}))}ayoutCallback(){return this.element.closest("[i-amphtml-scale-animation]")||(this.hQ.wasLaidOut(),this.eQ.updateUi()),i||(i=Promise.resolve(void 0))}auseCallback(){this.eQ.pauseLayout()}utatedAttributesCallbackteractionNext(){this.gC!=lt?this.eQ.next(0):this.o1(!0)}interactionPrev1(t){const i=I(this.iQ),{direction:s}=A(this.win,i),e=t?1:-1,n="rtl"==s?-1:1;i.scrollLeft+=i.offsetWidth*e*n}e0(){return function(t){const i=t.ownerDocument||t;return o&&o.ownerDocument===i||(o=i.createElement("div")),a}(this.element)(ht)}o01(t){const i=this.element.getAttribute("dir")||A(this.win,this.element).direction,s=this.element.hasAttribute("loop"),e=this.element.getAttribute("autoplay"),n=this.element.getAttribute("delay"),r=this.element.getAttribute("type"),o=null!=e,h=e?Number(e):Number.POSITIVE_INFINITY,l=Math.max(Number(n)||5e3,1e3);this.eQ.updateForwards("rtl"!=i),this.eQ.updateLoop(s||o),this.eQ.updateAutoAdvanceLoops(h),this.eQ.updateAutoAdvanceInterval(l),this.mutateElement((),this.t1(o),this.h1(r,t),this.i0()}l111(){return this.element.getAttribute("data-next-button-aria-label")||"Next item in carousel"}u1(){return this.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel"}11101(t,i){const s=t==at;this.gC=s?at:lt,this.eQ.updateAlignment(s?"center":"start"),this.eQ.updateHideScrollbar(s),this.eQ.updateMixedLength(!s),this.eQ.updateSnap(s);const e=s?"button":"presentation";this.Wf.setAttribute("role",e),this.Kf.setAttribute("role",e),this.rQ=i.map((t=>{if(t.classList.add("amp-carousel-slide"),s){const i=document.createElement("div");return i.classList.add("i-amphtml-carousel-slotted","i-amphtml-carousel-wrapper"),i.appendChild(t),i}return t})),this.rQ.forEach((t=>{this.iQ.appendChild(t),s?t.classList.add("i-amphtml-carousel-slide-item"):t.classList.add("amp-scrollable-carousel-slide")}))}f1(t,i){const s=this.FL;if(this.FL=t,null==s)return;const e={"index":t},n="slideChange",o=this.y0(i)?3:1,h={"index":t,"actionTrust":o},a=L(this.win,`slidescroll.${n}`,e);this.tc.trigger(this.element,n,a,o),function(t,i,s,e){const n=s||{};r(t.ownerDocument);const{bubbles:o,cancelable:h}=l,a=new MessageEvent("slideChange",{data:n,bubbles:o,cancelable:h});t.dispatchEvent(a)}(this.element,0,h),this.P1(s,t)}g11(){this.s1&&O(this.iQ,"touchmove",()}t1t.registerElement("amp-carousel",ct,'.i-amphtml-carousel-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-carousel-scroll{display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;outline:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch!important;--visible-count:1}.i-amphtml-carousel-scroll[hide-scrollbar=true]{scrollbar-width:none}.i-amphtml-carousel-scroll[hide-scrollbar=true]::-webkit-scrollbar{display:none;box-sizing:content-box!important}.i-amphtml-carousel-scroll[horizontal=true]{-ms-flex-direction:row;flex-direction:row;scroll-snap-type-x:mandatory;scroll-snap-type:x mandatory;padding-bottom:20px!important;overflow-y:hidden}.i-amphtml-carousel-scroll[horizontal=false]{-ms-flex-direction:column;flex-direction:column;scroll-snap-type-y:mandatory;scroll-snap-type:y mandatory;padding-right:20px!important;overflow-x:hidden}.i-amphtml-carousel-scroll[snap=false]{scroll-snap-type:none}.i-amphtml-carousel-scroll[user-scrollable=false]{overflow:hidden}.i-amphtml-carousel-spacer{visibility:hidden;z-index:-1}.i-amphtml-carousel-slotted,.i-amphtml-carousel-spacer{box-sizing:border-box!important;margin:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;width:100%;height:100%;scroll-snap-stop:always}.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-spacer{width:calc(100%/var(--visible-count))!important;min-width:auto!important;max-width:none!important}.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-spacer{height:calc(100%/var(--visible-count))!important;min-height:auto!important;max-height:none!important}.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-width:100%!important}.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-height:100%!important}.i-amphtml-carousel-scroll>.i-amphtml-carousel-slotted{will-change:transform}amp-carousel .i-amphtml-carousel-scroll[horizontal=true]{padding-bottom:0!important}amp-carousel:not([type=slides]) .i-amphtml-carousel-scroll{display:block!important;white-space:nowrap!important}amp-carousel:not([type=slides]) .i-amphtml-carousel-content{position:static}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px;margin-inline-start:8px;margin-inline-end:0}.amp-scrollable-carousel-slide.i-amphtml-layout-responsive{width:100%}.amp-scrollable-carousel-slide:first-child{margin-left:0px;margin-inline-start:0;margin-inline-end:0}.i-amphtml-carousel-arrows{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;pointer-events:none}.amp-carousel-button[dir=rtl]{transform:scaleX(-1)}.amp-carousel-button{position:relative;box-sizing:border-box;height:34px;width:34px;margin:16px;border-style:none;border-radius:2px;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;z-index:10;pointer-events:all}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-carousel-button.amp-disabled{animation:none;pointer-events:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}.amp-carousel-button-prev{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>\');background-size:18px 18px}.amp-carousel-button-next{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>\');background-size:18px 18px}.i-amphtml-carousel-slide-item{position:relative!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-carousel-slide-item>*{width:100%;height:100%;overflow:hidden!important}.amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}\n/*# sourceURL=/extensions/amp-carousel/0.2/amp-carousel.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-carousel-0.2.mjs.map