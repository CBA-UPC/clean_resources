;
(self.AMP=self.AMP||[]).push({m:1,v:"2312191621000",n:"amp-carousel",ev:"0.1",l:!0,f:function(t,i){(()=>{{isArray:e}=Array;ar{hasOwnProperty:r,toString:l}=Object.prototype;nction u(t,i,s,n,e,o,r,l,h,a,u){return t}nction d(t){return function(t,i){const s=[];for(let i=t.firstElementChild;i;i=i.nextElementSibling)!(function(t){let i;var s;return o(t)?i=t:1==(null==(s=t)?void 0:s.nodeType)&&(i=t.tagName),!!i&&i.toLowerCase().startsWith("i-")}(n=i)||n.nodeType===Node.ELEMENT_NODE&&(n.hasAttribute("placeholder")||n.hasAttribute("fallback")||n.hasAttribute("overflow")))&&s.push(i);var n;return s}(t)}var f={bubbles:!0,cancelable:!0};unction v(t){return t.hasAttribute("i-amphtml-ssr")}var _,b="amp-carousel-button-prev",A="amp-carousel-button-next",P="i-amphtml-carousel-has-controls",g="amp-carousel-slide",x="i-amphtml-slide-item",w="i-amphtml-slides-container",E="i-amphtml-slidescroll-no-snap",y="i-amphtml-slide-item-show",M="i-amphtml-scrollable-carousel-container";function T(){for(let t=0;t<arguments.length;t++)if(!arguments[t])throw new Error("Invalid server render")}function I(t,{className:i,enabled:s,title:n}){const e=C(t)?"presentation":"button",o=t.ownerDocument.createElement("div");return o.setAttribute("tabindex","0"),o.classList.add("amp-carousel-button",i),o.setAttribute("role",e),o.setAttribute("title",n),R(o,s),t.appendChild(o),o}function R(t,i){t.classList.toggle("amp-disabled",!i),t.setAttribute("aria-disabled",String(!i)),t.setAttribute("tabindex",String(i?0:-1))}function k(t){const i=d(t).length,s=C(t)?function(t){if(v(t))return function(t){const i=t.querySelector(`.${p(M)}`),s=Array.from(t.querySelectorAll(`.${p(g)}`));return T(i,s),{container:i,cells:s}}(t);const i=t.ownerDocument,s=d(t),n=i.createElement("div");return n.classList.add(M),n.setAttribute("tabindex","-1"),t.appendChild(n),s.forEach((t=>{t.classList.add(g,"amp-scrollable-carousel-slide"),n.appendChild(t)})),{cells:s,container:n}}(t):function(t){var i;if(v(t))return function(t){const i=t.querySelector(`.${p(w)}`),s=Array.from(t.querySelectorAll(`.${p(x)}`)),n=Array.from(t.querySelectorAll(`.${p(g)}`));return T(i,s,n),{slides:n,slidesContainer:i,slideWrappers:s}}(t);const s=t.ownerDocument,n=d(t);t.classList.add("i-amphtml-slidescroll");const e=s.createElement("div");e.setAttribute("tabindex","-1"),e.classList.add(w,E),e.setAttribute("aria-live","polite"),t.appendChild(e);const o=[];return n.forEach((t=>{t.classList.add(g);const i=s.createElement("div");i.classList.add(x),i.appendChild(t),e.appendChild(i),o.push(i)})),null===(i=o[0])||void 0===i||i.classList.add(y),{slidesContainer:e,slides:n,slideWrappers:o}}(t);return n(n({},function(t,i){if(v(t))return function(t){const i=t.querySelector(`.${p(b)}`),s=t.querySelector(`.${p(A)}`);return T(i,s),{prevButton:i,nextButton:s}}(t);(function(t,i){const s=i.documentElement;return["⚡4email","amp4email"].some)))}(0,t.ownerDocument)||t.hasAttribute("controls"))&&t.classList.add(P);const s=t.hasAttribute("loop"),n=i>1?2:s?0:1;return{prevButton:I(t,{className:b,title:V(t,{index:String(s?i:0),total:String(i)}),enabled:t.hasAttribute("loop")}),nextButton:I(t,{className:A,title:S(t,{index:String(n),total:String(i)}),enabled:i>1})}}(t,i)),s)}function S(t,i){const s=t.getAttribute("data-next-button-aria-label")||"Next item in carousel",{index:n,total:e}=i;return O(t,{prefix:s,index:n,total:e})}function V(t,i){const s=t.getAttribute("data-prev-button-aria-label")||"Previous item in carousel",{index:n,total:e}=i;return O(t,{prefix:s,index:n,total:e})}function O(t,{index:i,prefix:s,total:n}){return C(t)?s:`${s} ${(t.getAttribute("data-button-count-format")||"(%s of %s)").replace("%s",i).replace("%s",n)}var },N="ArrowLeft",z="ArrowRight",L="fixed",$="fixed-height";function F(t,i,s={}){const{needsRootBounds:n,rootMargin:e,threshold:o}=s,r=function(t){return t.parent&&t.parent!=t}(i)&&(n||e)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:r,rootMargin:e})}var W,H=new WeakMap,U=new WeakMap;function X(t,i,s){const n=c(t);if(s){const e=F((t=>{i(t[t.length-1])}),n,s);return e.observe(t}}let e=H.get(n);e||H.set(n,e=F(Y,n));let o=U.get(t);return o||(o=[],U.set(t,o)),o.push(i),e.observe(t),()=>{!function(t,i){const s=U.get(t);if(!s)return;if}(s,i))return;if(s.length)return;const n=c(t),e=H.get(n);null==e||e.unobserve(t),U.delete(t)}(t,i)}}function Y(t){const i=new Set;for(let s=t.length-1;s>=0;s--){const n=t[s],{target:e}=n;if(i.has(e))continue;i.add(e);const o=U.get(e);if(o)for(let t=0;t<o.length;t++)(0,o[t])(n)unction Z(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=G.apply(null,arguments);setTimeout((()=>{throw J(i),i}))}(t)}}var q=["Webkit","webkit","Moz","moz","ms","O","o"],K={"getPropertyPriority":()=>"","getPropertyValue"}function tt(t,i,s,n,e){const o=Q(t.style,i,e);if(!o)return;const r=n?s+n:s;t.style.setPropert}(o),r}function st(t,i){return s=>t+(i-t)*s}var nt=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var ot=self.__AMP_LOnction(t,i){const s=mt(ft(t));return At(s,i)?vt(s,i):null}(t,"action"),gt=t=>function(t,i,s,n){const e=dt(t,i);if(e)return e;const o=ft(t);return o.whenExtensionsKnown().then})).then((s=>s?function(t,i){return function(t,i){const s=_t(t,i);if(s)return s;const n=bt(t);return n[i]=function(){const t=new B,{promise:i,reject:s,resolve:n}=t;return i.catch})),{obj:null,promise:i,resolve:n,reject:s,context:null,ctor:null}}(),n[i].promise}(mt(t),i)}(t,i):null))}(t,"amp-analytics-instrumentation","amp-analytics"),xt=t=>pt(t,"owners"),wt=t=>ct(t,"platform"),Et=t=>vt(t,"timer"),y);function Mt(t,i,s,n){return e=>Tt.solveYValueFromXValue(e,0,0,t,i,s,n,1,1)}var Tt=class t{static solveYValueFromXVal}static hr(i,s,n,e,o){const r=1e-6;let l=(i-s)/(o-s);if(l<=0)return 0;if(l>=1)return 1;let h=0,a=1,u=0;for(let c=0;c<8;c++){u=t.ur(l,s,n,e,o);const c=(t.ur(l+r,s,n,e,o)-u)/r;if(Math.abs(u-i)<r)return l;if(Math.abs(c)<r)break;u<i?h=l:a=l,l-=(u-i)/c}for(let c=0;Math.abs(u-i)>r&&c<8;c++)u<i?(h=l,l=(l+a)/2):(a=l,l=(l+h)/2),u=t.ur(l,s,n,e,o);return l}static ur(i,s,n,e,o){if(0==i)return s;if(1==i)return o;let r=t.lr(s,n,i),l=t.lr(n,e,i);const h=t.lr(e,o,i);return r=t.lr(r,l,i),l=t.lr(l,h,i),t.lr(r,l,i)}static rr(i,s,n,e,o){if(0==i)return s;if(1==i)return o;let r=t.lr(s,n,i),l=t.lr(n,e,i);const h=t.lr(e,o,i);return r=t.lr(r,l,i),l=t.lr(l,h,i),t.lr(r,l,i}},It={LINEAt,EASE:t=>Tt.solveYValueFromXValue(t,0,0,.25,.1,.25,1,1,1),EASE_IN:t=>Tt.solveYValueFromXValue(t,0,0,.42,0,1,1,1,1),EASE_OUT:t=>Tt.solveYValueFromXValue(t,0,0,0,0,.58,1,1,1),EASE_IN_OUT:t=>Tt.solveYValueFromXValue(t,0,0,.42,0,.58,1,1,1)},Rt={"linear":It.LINEAR,"ease":It.EASE,"ease-in":It.EASE_IN,"ease-out":It.EASE_OUT,"ease-in-out":It.EASE_IN_OUT}var St,Vt="Animation",O},Ct=class t{static anima}constructor(t,i){this.cr=t,this.ar=i||yt(self),this.dr=null,this.pr=[]}setCur}a},jt=class{constructor(t,i,s,n,e){this.ar=t,this.cr=i,this.pr=[];for(let t=0;t<s.length;t++){const i=s[t];this.pr.push({delay:i.delay,func:i.func,duration:i.duration,curve:i.curve||n,started:!1,completed:!1})}this.mr=e,this.zn=Date.now(),this.be=!0,this.Ai={};const o=new B;this._r=o.promise,this.te=o.resolve,this.Ar=o.reject,this.gr=this.ar.createAnimTask(this.cr,{mutate:this.Pr.bind(this)}),this.ar.canAnimate(this.cr)?this.gr(this.Ai):this.vr(!1,0)}th}thenAlwa}ha}vr(t,i){if(this.be){if(this.be=!1,0!=i){this.pr.length>1&&this.pr.sort)));try{if(i>0)for(let t=0;t<this.pr.length;t++)this.pr[t].func(1,!0);else for(let t=this.pr.length-1;t>=0;t--)this.pr[t].func(0,!1)}catch(i){at().error(Vt,"completion failed: "+i,i),t=!1}}t?this.te():this.Ar()}}Pr(t){if(!this.be)return;const i=Date.now(),s=Math.min((i-this.zn)/this.mr,1);for(let t=0;t<this.pr.length;t++){const i=this.pr[t];!i.started&&s>=i.delay&&(i.started=!0)}for(let t=0;t<this.pr.length;t++){const i=this.pr[t];i.started&&!i.completed&&this.Er(i,s)}1==s?this.vr(!0,0):this.ar.canAnimate(this.cr)?this.gr(this.Ai):this.vr(!1,0)}Er(t,i){let s,n;if(t.duration>0){if(s=Math.min((i-t.delay)/t.duration,1),n=s,t.curve&&1!=n)try{n=t.curve(s)}catch(t){return at().error(Vt,"step curve failed: "+t,t),void this.vr(!1,0)}}else s=1,n=1;1==s&&(t.completed=!0);try{t.func(n,t.completed)}catch(t){return at().error(Vt,"step mutate failed: "+t,t),void this.vr(!1,0)}}};function Bt(t,i,s,n){return function(t,i,s,n){let e=t,o=s,};const }(),h=!(null==n||!n.capture);return e.addEventListener(i,r,l?n:h),()=>{null==e||e.removeEventListener(i,r,l?n:h),o=null,e=null,r=null}}(t,i,s,n)}var Nt=class{constructor({element:t,go:i,nextButton:s,prevButton:n}){this.yf=t,this.t5=i,this.i=c(t),this.Wf=n,this.Kf=s,this.i1=!1,this.i5()}i5(){var t;this.setupButtonInteraction(this.Wf,(()=>this.handlePrev())),this.setupButtonInteraction(this.Kf))),this.yf.hasAttribute("controls")?this.i1=!0:(t=this.i,ct(t,"input")).onMouseDetected((t=>{t&&(this.i1=!0,m(this.yf,"i-amphtml-carousel-hide-buttons",!this.i1),this.yf.classList.add(P))}),!0)}setupButtonInteraction(t,i){t.addEventListener("click",i),t.addEventListener("keydown",(t=>{t.defaultPrevented||"Enter"!=t.key&&" "!=t.key||(t.preventDefault(),i())}))}setControlsState({next:t,prev:i}){R(this.Wf,i),R(this.Kf,t)}hintControls(){this.i1||yt(this.i).mutate((()=>{const t="i-amphtml-carousel-button-start-hint";this.yf.classList.add(t),Et(this.i).delay((()=>{var i;(i=this.yf,pt(i,"mutator")).measureMutateElement(this.yf,null,(()=>{this.yf.classList.remove(t),m(this.yf,"i-amphtml-carousel-hide-buttons",!this.i1)}))}),4e3)})}handlePrev(){!this.Wf.classList.contains("amp-disabled")&&this.t5(-1,!0,!1)}handleNext(){!this.Kf.classList.contains("amp-disabled")&&this.t5(1,!0,!1)}},zt=class extends t.BaseElement{constructor(t){super(t),this.lZ=0,this.s5=0,this.n5=null,this.Tb=null,this.cZ=null,this.Yj=null,this.od=null}isLayoutSupported(t){retur}(t)}isRelayoutNeeded(){return!0}e5(){this.o5(),this.Tb.addEventListener("scroll",this.Mf.bind(this)),this.Tb.addEventListener("keydown",this.S$.bind(this)),this.n5.forEach((t=>{xt(this.element).setOwner(t,this.element)})),this.registerAction("goToSlide",(t=>{const{args:i}=t;if(i){const t=parseInt(i.index,10);this.goToSlide(t)}}),1),Pt(this.element).addToAllowlist("amp-carousel","goToSlide",["email"])}buildCallback(){const{cells:t,container:i,nextButton:s,prevButton:n}=k(this.element);this.Tb=i,this.n5=t,this.od=new Nt({element:this.element,prevButton:n,nextButton:s,go:this.go.bind(this)}),this.e5()}layoutCallback(){return this.Yj=X(this.element,(({isIntersecting:t})=>this.viewportCallback(t))),this.r5(this.lZ),this.l5(this.lZ,1),this.od.setControlsState({prev:this.h5(),next:this.a5()}),j()}unlayoutCallback(){var t;return null===(t=this.Yj)||void 0===t||t.call(this),this.Yj=null,!0}viewportCallback(t){this.u5(this.lZ,this.lZ),t&&this.od.hintControls()}go(t,i){const s=this.c5(this.lZ,t),n=this.lZ;if(s!=n)if(i){const t=st(n,s),i=200,e="ease-in-out";Ct.animate(this.element,(i=>{this.Tb.scrollLeft=t(i)}),i,e).thenAlways((()=>{this.p5(s)}))}else this.p5(s),this.Tb.scrollLeft=s}goToSlide(t){const i=this.n5.length;if(!isFinite(t)||t<0||t>=i)return this.user().error("amp-scrollable-carousel","Invalid [slide] value: %s",t),j();const s=this.lZ;let n=s;this.measureMutateElement((()=>{n=this.d5(t)}),(()=>{if(n==s)return;const t=st(s,n);Ct.animate(this.element,(i=>{this.Tb.scrollLeft=t(i)}),200,"ease-in-out").thenAlways}))}))}d5(t){const i=this.element.offsetWidth;return this.n5[t].offsetLeft-(i-this.n5[t].offsetWidth)/2}Mf(){const t=this.Tb.scrollLeft;this.lZ=t,null===this.cZ&&this.DZ(t)}S$(t){const{key:i}=t;i!=N&&i!=z||t.stopPropagation()}DZ(t){this.cZ=Et(this.win).delay((()=>{Math.abs(t-this.lZ)<30?(this.cZ=null,this.p5(this.lZ)):this.DZ(this.lZ)}),100)}p5(t){this.u5(t,this.s5),this.r5(t),this.l5(t,Math.sign(t-this.s5)),this.s5=t,this.lZ=t,this.od.setControlsState({prev:this.h5(),next:this.a5()})}c5(t,i){const s=this.element.offsetWidth,n=this.Tb.scrollWidth,e=t+i*s;return e<0?0:n>=s&&e>n-s?n-s:e}f5(t,i){const s=this.element.offsetWidth;for(let n=0;n<this.n5.length;n++){const e=this.n5[n];e.offsetLeft+e.offsetWidth>=t&&e.offsetLeft<=t+s&&i(e)}}r5(t){this.f5(t,(t=>{xt(this.element).scheduleLayout(this.element,t)}))}l5(t,i){const s=this.c5(t,i);s!=t&&this.f5(s,(t=>{xt(this.element).schedulePreload(this.element,t)}))}u5(t,i){const s=[];this.f5(t})),i!=t&&this.f5(i,(t=>{s.includes(t)||xt(this.element).schedulePause(this.element,t)})}a5(){const t=this.element.offsetWidth,i=this.Tb.scrollWidth,s=Math.max(i-t,0);return this.lZ!=s}interactionNext(){this.od.handleNext()}interactionPrev(){this.od.handlePrev(}o5(){Bt(this.element,"touchmove",(t=>t.stopPropagation()),{passive:!0})}},Lt=/vertical/,$t=new WeakMap,Ft=new WeakMap,Wt=new WeakMa}function Ut(t){const i=new Set;for(let s=t.length-1;s>=0;s--){const n=t[s],{target:e}=n;if(i.has(e))continue;i.add(e);const o=Ft.get(e);if(o){Wt.set(e,n);for(let t=0;t<o.length;t++){const{callback:i,type:s}=o[t];Xt(s,i,n)}}}}function Xt(t,i,s){if(0==t){const{contentRect:t}=s,{height:n,width:e}=t;Z(i,{width:e,height:n})}else if(1==t){const{borderBoxSize:t}=s;let n;if(t)n=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=s,i=c(t),e=Lt.tes}(i,t).writingMode),{offsetHeight:o,offsetWidth:r}=t;let l,h;e?(h=r,l=o):(l=r,h=o),n={inlineSize:l,blockSize:h}}Z(i,n)}}var Yt="__AMP__EXPERIMENT_TOGGLES",Dt="AMP-CAROUSEL",Gt=class extends t.BaseElement{constructor(t){super(t),this.ar=null,this.m5=!1,this.rQ=[],this.v5=0,this._5=null,this.b5=[],this.A5=!1,this.P5=null,this.g5=!1,this.x5=null,this.w5=!1,this.E5=!1,this.tq=!1,this.y5=5e3,this.M5=null,this.T5=0,this.I5=!1,this.R5=!1,this.k5=0,this.S5=null,this.V5=0,this.O5=0,this.C5=0,this.j5=[];const i=wt(this.win);this.bX=i.isIos(),this.av=i.isSafari(),this.tc=null,this.B5=!!wt(this.win).getIosVersionString().startsWith("10.3")||!this.bX&&!function(t,i){const s=function(t){var i,s,o,r,l;if(t[Yt])return t[Yt];t[Yt]=h();const a=t[Yt];u(a);const c=n(n({},null!==(i=t.AMP_CONFIG)&&void 0!==i?i:{}),null!==(s=t.AMP_EXP)&&void 0!==s?s:(p=(null===(o=t.__AMP_EXP)||void 0===o?void 0:o.textContent)||"{}",JSON.parse(p)));var p;for(const t in c){const i=c[t];"number"==typeof i&&i>=0&&i<=1&&(a[t]=Math.random()<i)}const d=null===(r=t.AMP_CONFIG)||void 0===r?void 0:r["allow-doc-opt-in"];if(e(d)&&d.length){const i=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(i){var f;const t=(null===(f=i.getAttribute("content"))||void 0===f?void 0:f.split(","))||[];for(const i of t)d.includes(i)&&(a[i]=!0)}}Object.assign(a,function(t){var i;let s="";try{var n;"localStorage"in t&&(s=null!==(n=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==n?n:"")}catch(t){}const e=(null===(i=s)||void 0===i?void 0:i.split(/\s*,\s*/g))||[],o=h();for(const t of e)t&&("-"==t[0]?o[t.substr(1)]=!1:o[t]=!0);return o}(t));const m=null===(l=t.AMP_CONFIG)||void 0===l?void 0:l["allow-url-opt-in"];if(e(m)&&m.length){const }(t.location.originalHash||t.location.hash);for(const t of m){const s=i[`e-${t}`];"1"==s&&(a[t]=!0),"0"==s&&(a[t]=!1)}}return a}(t);return!!s["amp-carousel-chrome-scroll-snap"]}(this.win),this.N5=!1,this.py=this.py.bind(this),this.Yj=null,this.od=null}isLayoutSupported(t){return function(t){return t==L||t==$||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t}e5(){const t=this.element.getAttribute("autoplay");var i;t&&(this.M5=parseInt(t,10),i=a(this.M5),lt().assert(i,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),this.R5&&0!=this.M5&&this.z5(),this.registerAction("toggleAutoplay",(t=>{const{args:i}=t;i&&void 0!==i.toggleOn?this.t1(i.toggleOn):this.t1(!this.tq)}),1)}L5(){if(this.ar=this.getVsync(),this.tc=Pt(this.element),this.tc.addToAllowlist(Dt,"goToSlide",["email"]),this.m5=null}(this.element),this.B5&&(this.m5=!1),this._5.classList.toggle(E,this.B5),this.m5){const t=this.win.document.createElement("div");t.classList.add("i-amphtml-carousel-start-marker"),this._5.appendChild(t);const i=this.win.document.createElement("div");i.classList.add("i-amphtml-carousel-end-marker"),this._5.appendChild(i)}this.rQ.forEach(((t,i)=>{const s=t.getAttribute("data-slide-id")||i.toString();this.j5.push(s),xt(this.element).setOwner(t,this.element)})),this.o5(),this._5.addEventListener("scroll",this.Mf.bind(this)),this._5.addEventListener("keydown",this.S$.bind(this)),Bt(this._5,"touchmove",this.F5.bind(this),{passive:!0}),Bt(this._5,"touchend",this.W5.bind(this),{passive:!0}),this.registerAction("goToSlide",(t=>{const{args:i}=t;i&&this.goToSlide(i.index,3)}),1)}attachedCallback(){(function(t,i,s){const n=t.ownerDocument.defaultView;if(!n)return;let e=Ft.get(t);if(e||(e=[],Ft.set(t,e),Ht(n).observe(t)),!e.somee))){e.push({type:0,callback:s});const i=Wt.get(t);i&&setTimeout)))}})(this.element,0,this.py)}detachedCallback(){(function(t,i,s){const n=Ft.get(t);if(n&&(function(t,i){const n=[];let e=0;for(let i=0;i<t.length;i++){const r=t[i];(o=r).callback===s&&0===o.type?n.push(r):(e<i&&(t[e]=r),e++)}var o;e<t.length&&(t.length=e)}(n),0==n.length)){Ft.delete(t),Wt.delete(t);const i=t.ownerDocument.defaultView;i&&Ht(i).unobserve(t)}})(this.element,0,this.py}mutatedAttributesCallback(t){const i=t.slide;void 0!==i&&this.goToSlide(i,3}viewportCallback(t){var i;t?(this.Jj(),null===(i=this.od)||void 0===i||i.hintControls()):this.H5()}interactionNext(){this.od.handleNext(go(t,i,s){const n=s?1:3;this.moveSlide(t,i,n),s?this.Jj():this.H5()}U5(t){this.P5&&Et(this.win).cancel(this.P5),this.P5=Et(this.win).delay((()=>{if(this.P5=null,this.A5||this.g5)return;const t=this._5.scrollLeft;this.m5?this.X5(t,1):this.Y5(t,void 0,3)}),t)}W5(){const t=this.B5?45:100;this.g5=!1,this.U5(t}buildCallback(){const{nextButton:t,prevButton:i,slideWrappers:s,slides:n,slidesContainer:e}=k(this.element);this.rQ=n,this._5=e,this.b5=s,this.v5=this.rQ.length,this.w5=this.element.hasAttribute("loop"),this.tq=this.element.hasAttribute("autoplay"),this.I5=this.w5&&this.isLoopingEligible(),this.R5=this.tq&&this.isLoopingEligible(),this.od=new Nt({element:this.element,go:this.go.bind(this),nextButton:t,prevButton:i}),this.od.updateButtonTitles(this.getPrevButtonTitle(),this.getNextButtonTitle()),this.e5(),this.L5()}layoutCallback(){if(this.Yj=X(this.element))),this.element.closest("[i-amphtml-scale-animation]"))return j();if(this.N5||(this.O5=this._5.clientWidth),null===this.S5)this.D5(this.V5);else{const t=lt().assertNumber(this.S5,"E#19457 this.slideIndex_"),i=this.G5(t);xt(this.element).scheduleLayout(this.element,this.rQ[t]),this._5.scrollLeft=i,this.C5=i}return j()}unlayoutCallback(){var t;return null===(t=this.Yj)||void 0===t||t.call(this),this.Yj=null,this.S5=null,!0}}}moveSlide(t,i,s){if(null!==this.S5){const n=this.a5(),e=this.h5();if(1==t&&n||-1==t&&e){let n=this.S5+t;if(-1==n?n=this.v5-1:n>=this.v5&&(n=0),i){const i=1!=t||e?this.O5:0;this.Y5(i,t,s)}else this.J5(n,s)}}}Mf(t){const i=this._5.scrollLeft;this.bX||this.av||this.Z5(i);const s=this.m5?200:this.bX?45:100;this.U5(s),this.C5=i}S$(t){const{key:i}=t;i!=N&&i!=z||t.stopPropagation()}Z5(t){const i=this._5.scrollWidth;-1==this.k5&&t>=this.C5||1==this.k5&&t<=this.C5?this.Y5(t).then})):t<0?this.k5=-1:t+this.O5>i?this.k5=1:this.k5=0}Y5(t,i,s){this.A5=!0;let n=this.q5(t)-this.S5;const e=this.h5();let o=e?this.O5:0;return 0!=n||1!=i&&-1!=i||(n=i),1==n||-1!=n&&n==-1*(this.v5-1)?o=e?2*this.O5:this.O5:-1!=n&&n!=this.v5-1||(o=0),this.K5(t,o).then}))}q5(t){if(!t&&!this.O5)return 0;const i=Math.round(t/this.O5);let s=0;const n=this.h5(),e=this.a5();n&&e?s=i-1:e?s=i:n&&(s=i-1);let o=this.S5+s;return o=this.I5?o<0?this.v5-1:o>=this.v5?0:o:o<0?0:o>=this.v5?this.v5-1:o,o}getPrevButtonTitle(){const t=this.l1(this.S5),i=(null==t?0:t)+1;return V(this.element,{index:String(i),total:String(this.v5)})}getNextButtonTitle(){const t=this.a1(this.S5),i=(null==t?this.v5-1:t)+1;return S(this.element,{index:String(i),total:String(this.v5)})}X5(t,i){if(!a(t)||null===this.S5)return;this.A5=!0;const s=this.q5(t);this.ar.mutate((()=>{this.J5(s,i),this.ar.mutate}))}))}goToSlide(t,i){const s=parseInt(t,10);!isFinite(s)||s<0||s>=this.v5?this.user().error(Dt,"Invalid [slide] value: ",t):null!==this.S5?this.J5(s,i):this.V5=s}l1(t){return t-1>=0?t-1:this.I5?this.v5-1:null}a1(t){return t+1<this.v5?t+1:this.I5?0:null}D5(t){var i,s;const{v5:n}=this;if(t<0||t>=n||this.S5==t)return!1;const e=this.l1(t),o=this.a1(t),r=[];return null!=e&&r.push(e),r.push(t),null!=o&&o!==e&&r.push(o),void 0===this.rQ[t]?(at().error(Dt,"Attempting to access a non-existant slide %s / %s",t,n),!1):(r.forEach(((i,s)=>{this.I5&&tt(this.b5[i],"order",s+1),this.b5[i].classList.add(y);const n=xt(this.element);i==t?(n.scheduleLayout(this.element,this.rQ[i]),n.scheduleResume(this.element,this.rQ[i]),this.rQ[i].setAttribute("aria-hidden","false")):(n.schedulePreload(this.element,this.rQ[i]),this.rQ[i].setAttribute("aria-hidden","true"))})),this._5.scrollLeft=this.G5(t),this.P1(t),this.S5=t,this.M5&&this.S5===this.v5-1&&(this.T5++,this.T5==this.M5&&this.Q5()),this.p8(r),null===(i=this.od)||void 0===i||i.setControlsState({prev:this.h5(),next:this.a5()}),null===(s=this.od)||void 0===s||s.updateButtonTitles(this.getPrevButtonTitle(),this.getNextButtonTitle()),!0)}J5(t,i=1){if(this.D5(t)){const s="slideChange",n=function(t,i,s,n){const e={detail:s};return Object.assign(e,void 0),new t.CustomEvent(i,e)}(this.win,`slidescroll.${s}`,{"index":t});this.tc.trigger(this.element,s,n,i),function(t,i,s,n){const e=s||{};u(t.ownerDocument);const{bubbles:o,cancelable:r}=f,l=new MessageEvent(i,{data:e,bubbles:o,cancelable:r});t.dispatchEvent(l)}(this.element,s,{index:t,actionTrust:i})}}G5(t){let i=this.O5;return(!this.I5&&0==t||this.rQ.length<=1)&&(i=0),i}p8(t){const{v5:i}=this;for(let s=0;s<i;s++)this.b5[s].classList.contains(y)&&(t.includes(s)||(this.I5&&tt(this.b5[s],"order",""),this.b5[s].classList.remove(y),this.rQ[s].removeAttribute("aria-hidden")),this.S5!=s&&xt(this.element).schedulePause(this.element,this.rQ[s]))}K5(t,i){if(t==i)return j();const s=st(t,i),n=Mt(.8,0,.6,1),e=this._5;return Ct.animate(e,(t=>{this._5.scrollLeft=s(t)}),80,n).thenAlways()}o5(){Bt(this.element,"touchmove")),{passive:!0})}P1(t){let i=t-this.S5;if(0==i)return;1!==Math.abs(i)&&(i=i<0?1:-1,null===this.S5&&(i=1));const s={"fromSlide":null===this.S5?"null":this.j5[this.S5],"toSlide":this.j5[t]};this.tW("amp-carousel-change",s),1==i?this.tW("amp-carousel-next",s):this.tW("amp-carousel-prev",s)}tW(t,i){!function(t,i,s={},n=!0){gt(t).then((e=>{e&&e.triggerEventForTarget(t,i,s,n)}))}(this.element,t,i)}z5(){const t=Number(this.element.getAttribute("delay"));t>0&&(this.y5=Math.max(1e3,t)),this.w5||(this.element.setAttribute("loop",""),this.E5=!0,this.w5=!0,this.I5=!0)}Jj(){this.R5&&0!=this.M5&&(this.H5(),this.x5=Et(this.win).delay(this.go.bind(this,1,!0,!0),this.y5))}t1(t){if(t==this.R5)return;const i=this.R5;this.tq=t,this.R5=this.tq&&this.isLoopingEligible(),!i&&this.R5&&this.z5(),this.R5?this.Jj():this.H5()}H5(){null!==this.x5&&(Et(this.win).cancel(this.x5),this.x5=null)}Q5(){this.H5(),this.E5&&(this.element.removeAttribute("loop"),this.E5=!1,this.w5=!1,this.I5=!1),this.tq=!1,this.R5=this.tq&&this.isLoopingEligible()}},Jt=class extends t.BaseElement{upgradeCallback(){return C(this.element)?new zt(this.element):new Gt(this.element)}};t.registerElement("amp-carousel",Jt,'.amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-mode-mouse .amp-carousel-button,amp-carousel.i-amphtml-carousel-has-controls .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>\');background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>\');background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:none}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{animation:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-next,amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-prev{opacity:0;pointer-events:none;visibility:visible!important}.i-amphtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;scroll-snap-type:x mandatory!important;scrollbar-width:none;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-carousel-0.1.mjs.map