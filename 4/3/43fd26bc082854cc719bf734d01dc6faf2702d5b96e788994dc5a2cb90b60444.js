(()=this}function t(i,o){if(!{}.hasOwnProperty.call(e,i))return this;let a=e[i].indexOf(o);return a!==-1&&e[i].splice(a,1),this}function s(i,o){if(!{}.hasOwnProperty.call(e,i))return this;o=o||{};let a=e[i];for(let c=0,r=a.length;c<r;c++)a[c].call(this,o);return this}return this.addEventListener=n,this.removeEventListener=t,this.dispatchEvent=s,this.getRegisteredEvents=()=>e,this}function F(e,n){if(!e)return!1;let t=e.getAttribute(R);return t?(t=t.split(" "),t.indexOf(n)>-1):!1}function dt(e,n){if(F(e,n))return n;if(n.indexOf(" ")!==-1){let s=R+" values cannot contain spaces!";throw new Error(s)}let t=e.getAttribute(R);return t!==null&&(n=t+" "+n),e.setAttribute(R,n),n}var ut=ct+"atomic_init";function It(e,n){if(!e||!e.classList){let t=e+' is not valid. Check that element is a DOM node with class "'+n+'"';throw new Error(t)}return e}function Nt(e,n){let t=e.classList.contains(n)?e:e.querySelector("."+n);if(!t){let s=n+" not found on or in passed DOM node.";throw new Error(s)}return t}function H(e,n){return It(e,n),Nt(e,n)}function V(e){return F(e,ut)?!1:(dt(e,ut),!0)}function ft(e,n,t,s={}){let o=(t||document).querySelectorAll(e),a=[],c,r;for(let d=0,l=o.length;d<l;d++)r=o[d],F(r,ut)===!1&&(c=new n(r),c.init(s),a.push(c));return a}function vt(e,n){n=n||document;let t=[];try{t=n.querySelectorAll(e)}catch(s){let i=`${e} not found in DOM! ${s}`;throw new Error(i)}return t.length===0&&e.indexOf(z)===-1&&(t=gt(e,n)),t}function ht(e,n,t,s){let i=[];e instanceof NodeList?i=e:e instanceof Node?i=[e]:typeof e=="string"&&(i=vt(e,s));for(let o=0,a=i.length;o<a;o++)i[o].addEventListener(n,t,!1);return i}function nt(e,n){let t;if(F(e,n))return t=e,t;if(e){let s="["+R+"="+n+"]";t=e.querySelector(s)}if(!t){let s=n+" behavior not found on passed DOM node!";throw new Error(s)}return t}function gt(e,n){return e=R+"*="+z+e,e="["+e+"]",vt(e,n)}var Rt=Object.prototype.toString;var kt=Array.isArray||function(n){return Rt.call(n)==="[object Array]"};var tt=z+"flyout-menu",Pt="["+R+"="+tt;function q(e,n=!0){let t=nt(e,tt),s=E(e),i=nt(e,tt+"_content"),o=0,a=0,c=1,r=2,d=3,l,p,_,w=f.bind(this),x=u.bind(this),L,g=!0,b=!1;function E(m){let y=[],k=m.querySelectorAll(`${Pt}_trigger]`),Q,j,at;for(let lt=k.length>>>0;lt--;){for(at=!1,Q=k[lt],j=Q.parentElement;j!==m;)j.getAttribute(R)&&j.getAttribute(R).split(" ").indexOf(tt)!==-1?(at=!0,j=m):j=j.parentElement;at||y.unshift(k[lt])}return y}function D(m=!1){return o=m?d:a,s.forEach(y=>{O("expanded",y,m),y.addEventListener("click",h.bind(this)),y.addEventListener("touchstart",N,{passive:!0}),y.addEventListener("mouseover",C.bind(this)),y.addEventListener("mouseout",v.bind(this))}),i.setAttribute("data-open",m?"true":"false"),n&&!m&&i.setAttribute("hidden",""),P(),this}function O(m,y,k){let Q=String(k);return y.setAttribute("aria-"+m,Q),Q}function N(){b=!0}function C(m){g||(b||this.dispatchEvent("triggerover",{target:this,trigger:m.target,type:"triggerover"}),b=!1)}function v(m){g||this.dispatchEvent("triggerout",{target:this,trigger:m.target,type:"triggerout"})}function h(m){if(!g)switch(this.dispatchEvent("triggerclick",{target:this,trigger:m.target,type:"triggerclick"}),m.preventDefault(),o){case a:case c:this.expand();break;case r:case d:this.collapse();break}}function A(){if(l==null||l.halt(),o===r||o===d)return this;if(o=r,n&&i.removeAttribute("hidden"),this.dispatchEvent("expandbegin",{target:this,type:"expandbegin"}),!p||!_)return x(),this;let m=l==null?void 0:l.isAnimated();return m&&l.addEventListener(T.END_EVENT,x),p(),m||x(),this}function B(){if(l==null||l.halt(),o===c||o===a)return this;for(let y=0,k=s.length;y<k;y++)O("expanded",s[y],!1);if(i.setAttribute("data-open","false"),o=c,this.dispatchEvent("collapsebegin",{target:this,type:"collapsebegin"}),!_||!p)return w(),this;let m=l==null?void 0:l.isAnimated();return m&&l.addEventListener(T.END_EVENT,w),_(),m||w(),this}function u(){o=d,i.setAttribute("data-open","true"),l&&l.removeEventListener(T.END_EVENT,x),this.dispatchEvent("expandend",{target:this,type:"expandend"});for(let m=0,y=s.length;m<y;m++)O("expanded",s[m],!0)}function f(){o=a,n&&i.setAttribute("hidden",""),l&&l.removeEventListener(T.END_EVENT,w),this.dispatchEvent("collapseend",{target:this,type:"collapseend"})}function S(m,y,k){l=m,y&&y!==_&&(_=y),k&&k!==p&&(p=k)}function X(){l&&l.remove();let m;l=m,p=m,_=m}function $(){return{container:t,content:i,trigger:s}}function P(){return g&&(g=!1),!g}function W(){return g||(g=!0),g}function Bt(m){return L=m,this}let rt=new M;return this.addEventListener=rt.addEventListener,this.removeEventListener=rt.removeEventListener,this.dispatchEvent=rt.dispatchEvent,this.init=D,this.expand=A,this.collapse=B,this.setTransition=S,this.clearTransition=X,this.getData=()=>L,this.getTransition=()=>l,this.getDom=$,this.isAnimating=()=>o===r||o===c,this.isExpanded=()=>o===d,this.resume=P,this.setData=Bt,this.suspend=W,q.BASE_CLASS=tt,this}var it={CSS_PROPERTY:"opacity",BASE_CLASS:"u-alpha-transition",ALPHA_100:"u-alpha-100",ALPHA_0:"u-alpha-0"};function _t(e){let n=new M,t=new T(e,it,this);function s(a){return t.init(a),this}function i(){return t.applyClass(it.ALPHA_100),this}function o(){return t.applyClass(it.ALPHA_0),this}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.remove=t.remove,this.setElement=t.setElement,this.fadeIn=i,this.fadeOut=o,this.init=s,this}_t.CLASSES=it;function T(e,n,t){let s=n,i=e;if(!t)throw new Error("Child transition argument must be defined!");let o=t,a,c,r,d=!1,l=!1,p=!1;if(typeof s.CSS_PROPERTY=="undefined"||typeof s.BASE_CLASS=="undefined")throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function _(){c&&d?(i.addEventListener(c,r),o.dispatchEvent(T.BEGIN_EVENT,{target:o,type:T.BEGIN_EVENT}),i.classList.add(T.ANIMATING_CLASS),l=!0):(o.dispatchEvent(T.BEGIN_EVENT,{target:o,type:T.BEGIN_EVENT}),r())}function w(){i.removeEventListener(c,r)}function x(h){return h&&h.propertyName!==s.CSS_PROPERTY?!1:(w(),i.classList.remove(T.ANIMATING_CLASS),o.dispatchEvent(T.END_EVENT,{target:o,type:T.END_EVENT}),l=!1,!0)}function L(){let h;for(h in s)({}).hasOwnProperty.call(s,h)&&s[h]!==s.BASE_CLASS&&i.classList.contains(s[h])&&i.classList.remove(s[h])}function g(){l&&(i.style.webkitTransitionDuration="0",i.style.mozTransitionDuration="0",i.style.oTransitionDuration="0",i.style.transitionDuration="0",i.removeEventListener(c,r),r(),i.style.webkitTransitionDuration="",i.style.mozTransitionDuration="",i.style.oTransitionDuration="",i.style.transitionDuration="")}function b(){g(),L(),i.classList.remove(s.BASE_CLASS)}function E(){i.classList.remove(T.NO_ANIMATION_CLASS),d=!0}function D(){i.classList.add(T.NO_ANIMATION_CLASS),d=!1}function O(h){if(!h){let f="Element does not have TransitionEnd event. It may be null!";throw new Error(f)}let A,B={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},u;for(u in B)if({}.hasOwnProperty.call(B,u)&&typeof h.style[u]!="undefined"){A=B[u];break}return A}function N(h){b(),E(),i=h,i.classList.add(s.BASE_CLASS),c=O(i)}function C(h){if(d=!i.classList.contains(T.NO_ANIMATION_CLASS),r=x.bind(this),N(i),!h)throw new Error("Transition needs to be passed an initial CSS class on initialization!");return i.classList.add(h),this}function v(h){return p||(L(),p=!0),i.classList.contains(h)?!1:(w(),i.classList.remove(a),a=h,_(),i.classList.add(a),!0)}return this.animateOff=D,this.animateOn=E,this.applyClass=v,this.halt=g,this.init=C,this.isAnimated=()=>d,this.remove=b,this.setElement=N,this}T.BEGIN_EVENT="transitionbegin";T.END_EVENT="transitionend";T.NO_ANIMATION_CLASS="u-no-animation";T.ANIMATING_CLASS="u-is-animating";var et={CSS_PROPERTY:"max-height",BASE_CLASS:"u-max-height-transition",MH_DEFAULT:"u-max-height-default",MH_SUMMARY:"u-max-height-summary",MH_ZERO:"u-max-height-zero"};function Lt(e){let n=new M,t=new T(e,et,this),s=0;function i(){let _=e.scrollHeight+"px";e.style.maxHeight=_}function o(){window.removeEventListener("load",o),i()}function a(p){return t.init(p),window.addEventListener("load",o),window.addEventListener("resize",()=>{i()}),this}function c(){return i(),t.applyClass(et.MH_DEFAULT),(!s||e.scrollHeight>s)&&(s=e.scrollHeight),this}function r(){return t.applyClass(et.MH_SUMMARY),s=e.scrollHeight,this}function d(){return t.applyClass(et.MH_ZERO),s=e.scrollHeight,this}function l(){return e.style.maxHeight="",t.remove()}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.setElement=t.setElement,this.refresh=i,this.remove=l,this.init=a,this.maxHeightDefault=c,this.maxHeightSummary=r,this.maxHeightZero=d,this}Lt.CLASSES=et;var G={CSS_PROPERTY:"transform",BASE_CLASS:"u-move-transition",MOVE_TO_ORIGIN:"u-move-to-origin",MOVE_LEFT:"u-move-left",MOVE_LEFT_2X:"u-move-left-2x",MOVE_LEFT_3X:"u-move-left-3x",MOVE_RIGHT:"u-move-right",MOVE_UP:"u-move-up"};function I(e){let n=new M,t=new T(e,G,this);function s(r){return t.init(r),this}function i(){return t.applyClass(G.MOVE_TO_ORIGIN),this}function o(r){r=r||1;let d=[G.MOVE_LEFT,G.MOVE_LEFT_2X,G.MOVE_LEFT_3X];return t.applyClass(d[r-1]),this}function a(){return t.applyClass(G.MOVE_RIGHT),this}function c(){return t.applyClass(G.MOVE_UP),this}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.setElement=t.setElement,this.remove=t.remove,this.init=s,this.moveLeft=()=>o(1),this.moveLeft2=()=>o(2),this.moveLeft3=()=>o(3),this.moveRight=a,this.moveToOrigin=i,this.moveUp=c,this}I.CLASSES=G;function Tt(){ht("return-to-top","click",e=>{e.preventDefault(),Ft()})}function Ft(){let t=window.scrollY,s=Math.PI/(300/10),i=t/2,o=0,a;if(!("requestAnimationFrame"in window)){window.scrollTo(0,0),St();return}window.requestAnimationFrame(c);function c(){window.scrollY===0?St():window.setTimeout(()=>{o+=1;let r=i*Math.cos(o*s);a=i-r,window.scrollTo(0,t-a),window.requestAnimationFrame(c)},10)}}function St(){document.documentElement.tabIndex=0,document.documentElement.focus()}var bt="o-footer";function Y(e){let n=H(e,bt);function t(){return V(n)?(Tt(),this):this}return this.init=t,this}Y.BASE_CLASS=bt;Y.init=e=>ft(`.${Y.BASE_CLASS}`,Y,e);var mt={bpXS:{min:0,max:600},bpSM:{min:601,max:900},bpMED:{min:901,max:1020},bpLG:{min:1021,max:1200},bpXL:{min:1201}};function st(){let e=getComputedStyle(document.body).fontSize;return e=e===""?-1:e,parseFloat(e)}function Ht(e,n){let t=e.min,s=e.max;st()>0&&st()!==16&&(t=t/16*st(),s=s/16*st());let o=t||0,a=s||Number.POSITIVE_INFINITY;return o<=n&&n<=a}function Vt(e){let n={};e=e||window.innerWidth;let t;for(t in mt)n[t]=Ht(mt[t],e);return n}var pt="mobile",Ut="tablet",U="desktop";function K(e){let n=!1,t=Vt();return(e===pt&&t.bpXS||e===Ut&&t.bpSM||e===U&&(t.bpMED||t.bpLG||t.bpXL))&&(n=!0),n}function ot(e){function n(){return e.addEventListener("focusout",t.bind(this)),this}function t(i){return i.relatedTarget===null||e.contains(i.relatedTarget)?!1:(this.dispatchEvent("tabpressed"),!0)}let s=new M;return this.addEventListener=s.addEventListener,this.removeEventListener=s.removeEventListener,this.dispatchEvent=s.dispatchEvent,this.init=n,this}var J="m-global-search";function At(e){let n=H(e,J),t=n.querySelector(`.${J}_content`),s=n.querySelector(`.${J}_trigger`),i=s.querySelector(`.${J}_trigger-open-label`).innerText.trim(),o=new q(n,!1),a,c,r=new ot(n);function d(){if(!V(n))return this;let E=new I(t).init(I.CLASSES.MOVE_RIGHT);o.setTransition(E,E.moveRight,E.moveToOrigin),o.init(),t.classList.remove("u-hidden");let D=`.${J}_content-form .input-contains-label`,O=`.${J} .o-form__input-w-btn_btn-container button`;a=t.querySelector(D).querySelector("input"),c=t.querySelector(O);let C=w.bind(this),v=L.bind(this);return o.addEventListener("expandbegin",C),o.addEventListener("expandend",()=>{a.select()}),o.addEventListener("collapsebegin",x),o.addEventListener("collapseend",v),r.init(),r.addEventListener("tabpressed",()=>{o.isExpanded()&&g()}),t.classList.add("u-invisible"),this}function l(E){let D=E.target,O=K(U);(O&&!p(D)||!O&&!_(D))&&g()}function p(E){return E===a||E===c}function _(E){return n.contains(E)}function w(){this.dispatchEvent("expandbegin",{target:this}),t.classList.remove("u-invisible"),document.body.addEventListener("mousedown",l)}function x(){a.blur(),s.setAttribute("aria-label",i),document.body.removeEventListener("mousedown",l)}function L(){this.dispatchEvent("collapseend",{target:this}),t.classList.add("u-invisible")}function g(){return o.collapse(),this}let b=new M;return this.addEventListener=b.addEventListener,this.removeEventListener=b.removeEventListener,this.dispatchEvent=b.dispatchEvent,this.init=d,this.collapse=g,this}function Z(e,n){let t=[e],s,i;for(;t.length>0;)s=t.shift(),i=s.children,i.length>0&&(t=t.concat(i)),n.call(this,s)}function Ot(e,n){let t=document.body,s,i=_.bind(this),o=w.bind(this),a=x.bind(this),c=n,r=null,d=!0;function l(){let v=c.getAllAtLevel(1);return v.length>0&&(s=v[0].data.getDom().container.parentNode),this}function p(v){if(d)return;let A={triggerclick:i,expandbegin:o,collapseend:a}[v.type];A&&A(v)}function _(v){let h=v.target;g(h)}function w(){r.getDom().content.classList.remove("u-invisible")}function x(v){v.target.getDom().content.classList.add("u-invisible")}function L(v){s.contains(v.target)||g(null)}function g(v){var h,A,B,u;v===null||r===v?(r&&((h=r.getTransition())==null||h.animateOn(),v===null&&r.collapse(),r=null),t.removeEventListener("click",L)):r===null?(r=v,(A=r.getTransition())==null||A.animateOn(),t.addEventListener("click",L)):((B=r.getTransition())==null||B.animateOff(),r.collapse(),r=v,(u=r.getTransition())==null||u.animateOff())}function b(){return g(null),this}function E(){return d&&(Z(c.getRoot(),O),d=!1),!d}function D(){return d||(g(null),Z(c.getRoot(),N),d=!0),d}function O(v){let h=v.level,A=v.data;if(h===1){let B=`.${e}_content-2-wrapper`,f=A.getDom().content.querySelector(B),S=A.getTransition();S?S.setElement(f):S=new I(f).init(I.CLASSES.MOVE_UP),A.getDom().content.classList.add("u-invisible"),S.animateOff(),S.moveUp(),A.setTransition(S,S.moveUp,S.moveToOrigin)}else h===2&&A.suspend()}function N(v){let h=v.level,A=v.data;h===1?(A.clearTransition(),A.getDom().content.classList.remove("u-invisible"),A.isExpanded()&&A.collapse()):h===2&&A.resume()}let C=new M;return this.addEventListener=C.addEventListener,this.removeEventListener=C.removeEventListener,this.dispatchEvent=C.dispatchEvent,this.collapse=b,this.handleEvent=p,this.init=l,this.resume=E,this.suspend=D,this}function xt(e){let n=document.body,t=g.bind(this),s=b.bind(this),i=E.bind(this),o=D.bind(this),a=O.bind(this),c=e,r,d,l=null,p,_=!0;function w(){return r=c.getRoot().data,d=r.getDom().content,l=r,p=d.querySelectorAll("a.o-mega-menu_content-1-link,.m-global-eyebrow a"),this}function x(u){let f=u.target;l.getDom().trigger[0]!==f&&(r.getDom().container.contains(f)||r.getDom().trigger[0].click())}function L(u){if(_)return;let S={triggerclick:t,expandbegin:s,expandend:i,collapsebegin:o,collapseend:a}[u.type];S&&S(u)}function g(u){var X;let f=u.target,S=r.getTransition();if(l&&((X=l.getTransition())==null||X.halt()),document.body.scrollTop=document.documentElement.scrollTop=0,f===r){if(r.isExpanded()){N();let $=l.getData().level+1,P="moveLeft";P+=$===1?"":$,r.setTransition(S,S[P])}else r.getTransition().animateOn(),C();l=r}else u.trigger.classList.contains("o-mega-menu_content-2-alt-trigger")?(C(),l=r):(N(),f.setTransition(S,S.moveToOrigin,S.moveLeft),r.getDom().content.classList.remove("u-hidden-overflow"),l=f)}function b(u){let f=u.target,S=f.getDom();f===r&&(this.dispatchEvent("rootexpandbegin",{target:this}),n.addEventListener("click",x)),S.content.classList.add("u-is-animating")}function E(u){let f=u.target,S=f.getDom();f.getData().level>=1&&S.trigger[1].focus(),S.content.classList.remove("u-is-animating")}function D(u){let f=u.target,S=f.getDom();f===r&&n.removeEventListener("click",x),S.content.classList.add("u-is-animating")}function O(u){let f=u.target,S=f.getDom(),X=f.getData().level;f===r&&(Z(c.getRoot(),$=>{let P=$.data;if(P.isExpanded()&&$.level>0){let W=r.getTransition();W.animateOff(),P.setTransition(W,W.moveLeft),P.collapse()}}),this.dispatchEvent("rootcollapseend",{target:this})),X>=1&&(S.trigger[0].focus(),r.getDom().content.classList.add("u-hidden-overflow")),S.content.classList.remove("u-is-animating")}function N(){for(let u=0,f=p.length;u<f;u++)p[u].setAttribute("tabindex","-1"),p[u].setAttribute("aria-hidden","true")}function C(){for(let u=0,f=p.length;u<f;u++)p[u].removeAttribute("tabindex"),p[u].removeAttribute("aria-hidden")}function v(){return r.isExpanded()&&r.getDom().trigger[0].click(),this}function h(){if(_){d.classList.add("u-hidden-overflow");let u=new I(d).init(I.CLASSES.MOVE_LEFT);u.animateOff(),r.setTransition(u,u.moveLeft,u.moveToOrigin),l=r,N(),_=!1}return!_}function A(){return _||(Z(c.getRoot(),u=>{let f=u.data;f.isExpanded()&&(f.getTransition().animateOff(),f.collapse()),f.clearTransition()}),d.classList.remove("u-invisible"),d.classList.remove("u-hidden-overflow"),C(),n.removeEventListener("click",x),_=!0),_}let B=new M;return this.addEventListener=B.addEventListener,this.removeEventListener=B.removeEventListener,this.dispatchEvent=B.dispatchEvent,this.collapse=v,this.handleEvent=L,this.init=w,this.resume=h,this.suspend=A,this}function wt(){let e=null,n={};function t(a){return e=new yt(this,a),n[0]=[e],this}function s(a,c){let r=new yt(this,a,c),d=r.level;return n[d]?n[d].push(r):n[d]=[r],c.children.push(r),r}function i(){return e}function o(a){let c=n[a];return c||(c=[]),c}return this.add=s,this.init=t,this.getRoot=i,this.getAllAtLevel=o,this}function yt(e,n,t,s){return this.tree=e,this.data=n,this.parent=t,this.children=s||[],this.level=t?t.level+1:0,this}var Et="o-mega-menu";function Dt(e){let n=H(e,Et),t,s,i,o,a=new ot(n);function c(){if(!V(n))return this;let L=n,g=L.querySelector(`.${Et}_content`);t=new wt;let b=K(U),E=new q(L,!1).init();if(!b){let O=new I(g).init(I.CLASSES.MOVE_LEFT);E.setTransition(O,O.moveLeft,O.moveToOrigin)}let D=t.init(E).getRoot();return E.setData(D),r(L,D,d),i=new Ot(Et,t).init(),o=new xt(t).init(),l(E),o.addEventListener("rootexpandbegin",()=>this.dispatchEvent("rootexpandbegin",{target:this})),o.addEventListener("rootcollapseend",()=>this.dispatchEvent("rootcollapseend",{target:this})),window.addEventListener("resize",_),"onorientationchange"in window&&window.addEventListener("orientationchange",_),_(),a.init(),a.addEventListener("tabpressed",()=>w()),n.classList.remove("u-hidden"),this}function r(L,g,b){let E=L.children;if(!E)return;let D;for(let O=0,N=E.length;O<N;O++){let C=g;D=E[O],C=b.call(this,D,C),r(D,C,b)}}function d(L,g){let b=g;if(F(L,q.BASE_CLASS)){let E=new q(L,!1).init();l(E),b=b.tree.add(E,b),E.setData(b)}return b}function l(L){L.addEventListener("triggerclick",p),L.addEventListener("expandbegin",p),L.addEventListener("expandend",p),L.addEventListener("collapsebegin",p),L.addEventListener("collapseend",p)}function p(L){(s===U?i:o).handleEvent(L)}function _(){K(U)?(o.suspend(),i.resume(),s=U):(i.suspend(),o.resume(),s=pt)}function w(){return K(U)?i.collapse():o.collapse(),this}let x=new M;return this.addEventListener=x.addEventListener,this.removeEventListener=x.removeEventListener,this.dispatchEvent=x.dispatchEvent,this.init=c,this.collapse=w,this}var Mt="o-header";function Ct(e){let n=H(e,Mt),t,s,i,o=!1,a=!1;function c(x){return V(n)?(i=x,t=new At(n),n.classList.contains(`${Mt}__mega-menu`)&&(s=new Dt(n),s.addEventListener("rootexpandbegin",r),s.addEventListener("rootcollapseend",d),t.addEventListener("expandbegin",l),t.addEventListener("collapseend",p),s.init()),t.init(),this):this}function r(){o=!0,a=!1,t.collapse(),_()}function d(){o=!1,w()}function l(){o=!1,a=!0,s.collapse(),_()}function p(){a=!1,w()}function _(){(o||a)&&i.classList.remove("u-hidden")}function w(){!o&&!a&&i.classList.add("u-hidden")}return this.init=c,this}var qt=new Ct(document.body);qt.init(document.body.querySelector(".a-overlay"));Y.init(document.body);})();
//# sourceMappingURL=common.js.map
y separating which companies see what parts of our data, and in what contexts, we can gain control over data about ourselves (improving privacy) and harden cloud infrastructure against hacks (improving security). Officials at the CFPB have described the new rules as an attempt to accelerate a shift toward &#8220;open banking,&#8221; and after an initial comment period on the new rules closed late last year, Rohit Chopra, the CFPB&#8217;s director, <a href="https://www.consumerfinance.gov/about-us/newsroom/prepared-remarks-of-cfpb-director-rohit-chopra-on-the-proposed-personal-financial-data-rights-rule/">has said</a> he would like to see the rule finalized by this fall.</p>
<p>Right now, uncountably many data brokers keep tabs on your buying habits. When you purchase something with a credit card, that transaction is shared with unknown third parties. When you get a car loan or a house mortgage, that information, along with your Social Security number and other sensitive data, is also shared with unknown third parties. You have no choice in the matter. The companies will freely tell you this in their disclaimers about personal information sharing: that you cannot opt-out of data sharing with &#8220;affiliate&#8221; companies. Since most of us can&#8217;t reasonably avoid getting a loan or using a credit card, we&#8217;re forced to share our data. Worse still, you don&#8217;t have a right to even see your data or vet it for accuracy, let alone limit its spread.</p>
<p>The CFPB&#8217;s simple and practical rules would fix this. The rules would ensure people can obtain their own financial data at no cost, control who it&#8217;s shared with and choose who they do business with in the financial industry. This would change the economics of consumer finance and the illicit data economy that exists today.</p>
<p>The best way for financial services firms to meet the CFPB&#8217;s rules would be to apply the decoupling principle broadly. Data is a <a href="https://www.schneier.com/blog/archives/2016/03/data_is_a_toxic.html">toxic asset</a>, and in the long run they&#8217;ll find that it&#8217;s better to not be sitting on a mountain of poorly secured financial data. Deleting the data is better for their users and reduces the chance they&#8217;ll incur expenses from a ransomware attack or breach settlement. As it stands, the collection and sale of consumer data is too lucrative for companies to say no to participating in <a href="https://cyberscoop.com/radio/data-broker-economy/">the data broker economy</a>, and the CFPB&#8217;s rules may help eliminate the incentive for companies to buy and sell these toxic assets. Moreover, in a free market for financial services, users will have the option to choose more responsible companies that also may be less expensive, thanks to savings from improved security.</p>
<p>Credit agencies and data brokers currently make money both from lenders requesting reports and from consumers requesting their data and seeking services that protect against data misuse. The CFPB&#8217;s new rules&#8212;and the technical changes necessary to comply with them&#8212;would eliminate many of those income streams. These companies have many roles, some of which we want and some we don&#8217;t, but as consumers we don&#8217;t have any choice in whether we participate in the buying and selling of our data. Giving people rights to their financial information would reduce the job of credit agencies to their core function: assessing risk of borrowers.</p>
<p>A free and properly regulated market for financial services also means choice and competition, something the industry is sorely in need of. Equifax, Transunion and Experian make up a longstanding oligopoly for credit reporting. Despite being responsible for one of the <a href="https://cyberscoop.com/equifax-breach-settlement-700-million/">biggest data breaches of all time</a> in 2017, the credit bureau Equifax is still around&#8212;illustrating that the oligopolistic nature of this market means that companies face few consequences for misbehavior.</p>
<p>On the banking side, the steady consolidation of the banking sector has resulted in a small number of very large banks holding most deposits and thus most financial data. Behind the scenes, a variety of financial data clearinghouses&#8212;companies most of us have never heard of&#8212;<a href="https://techpolicy.sanford.duke.edu/blogroll/data-brokers-and-data-breaches/">get breached all the time</a>, losing our personal data to scammers, identity thieves and foreign governments.</p>
<p>The CFPB&#8217;s new rules would require institutions that deal with financial data to provide simple but essential functions to consumers that stand to deliver security benefits. This would include the use of application programming interfaces (APIs) for software, eliminating the barrier to interoperability presented by today&#8217;s baroque, non-standard and non-programmatic interfaces to access data. Each such interface would allow for interoperability and potential competition. The CFPB notes that some companies have tried to claim that their current systems provide security by being difficult to use. As security experts, we disagree: Such aging financial systems are notoriously insecure and simply rely upon security through obscurity.</p>
<p>Furthermore, greater standardization and openness in financial data with mechanisms for consumer privacy and control means fewer gatekeepers. The CFPB notes that a small number of data aggregators have emerged by virtue of the complexity and opaqueness of today&#8217;s systems. These aggregators provide little economic value to the country as a whole; they extract value from us all while hindering competition and dynamism. The few new entrants in this space have realized how valuable it is for them to present standard APIs for these systems while managing the ugly plumbing behind the scenes.</p>
<p>In addition, by eliminating the opacity of the current financial data ecosystem, the CFPB is able to add a new requirement of data traceability and certification: Companies can only use consumers&#8217; data when absolutely necessary for providing a service the consumer wants. This would be another big win for consumer financial data privacy.</p>
<p>It might seem surprising that a set of rules designed to improve competition also improves security and privacy, but it shouldn&#8217;t. When companies can make business decisions without worrying about losing customers, security and privacy always suffer. Centralization of data also means centralization of control and economic power and a decline of competition.</p>
<p>If this rule is implemented it will represent an important, overdue step to improve competition, privacy and security. But there&#8217;s more that can and needs to be done. In time, we hope to see more regulatory frameworks that give consumers greater control of their data and increased adoption of the technology and architecture of decoupling to secure all of our personal data, wherever it may be.</p>
<p>This essay was written with Barath Raghavan, and was originally published in <a href="https://cyberscoop.com/cfpbs-data-rules-security-privacy-competition/">Cyberscoop</a>.</p>

		
		
		<p class="posted">
			<a href="https://www.schneier.com/blog/archives/2024/01/cfpbs-proposed-data-rules.html" rel="bookmark">Posted on January 31, 2024 at 7:04 AM</a>			•
			<a href="https://www.schneier.com/blog/archives/2024/01/cfpbs-proposed-data-rules.html#comments">View Comments</a>		</p>

		<aside><div class="schneier-share share" data-uri="https://www.schneier.com/blog/archives/2024/01/cfpbs-proposed-data-rules.html" data-title="CFPB’s Proposed Data Rules" data-order="facebook twitter tumblr" data-social-share-privacy="true" /></aside>
	</div>

</article>


<article id="post-68265" class="post-68265 post type-post status-publish format-standard hentry category-uncategorized tag-android tag-banking tag-biometrics tag-malware tag-pins">

	<div class="article">

		<h3 class="entry"><a href="https://www.schneier.com/blog/archives/2024/01/pin-stealing-android-malware.html"" rel="bookmark">PIN-Stealing Android Malware</a></h3>
		<p>This is an old piece of malware&#8212;the Chameleon Android banking Trojan&#8212;that now disables biometric authentication in order to <a href="https://www.bleepingcomputer.com/news/security/android-malware-chameleon-disables-fingerprint-unlock-to-steal-pins/">steal the PIN</a>:</p>
<blockquote><p>The second notable new feature is the ability to interrupt biometric operations on the device, like fingerprint and face unlock, by using the Accessibility service to force a fallback to PIN or password authentication.</p>
<p>The malware captures any PINs and passwords the victim enters to unlock their device and can later use them to unlock the device at will to perform malicious activities hidden from view.</p></blockquote>

		
		
		<p class="posted">
			<a href="https://www.schneier.com/blog/archives/2024/01/pin-stealing-android-malware.html" rel="bookmark">Posted on January 9, 2024 at 7:03 AM</a>			•
			<a href="https://www.schneier.com/blog/archives/2024/01/pin-stealing-android-malware.html#comments">View Comments</a>		</p>

		<aside><div class="schneier-share share" data-uri="https://www.schneier.com/blog/archives/2024/01/pin-stealing-android-malware.html" data-title="PIN-Stealing Android Malware" data-order="facebook twitter tumblr" data-social-share-privacy="true" /></aside>
	</div>

</article>


<article id="post-68036" class="post-68036 post type-post status-publish format-standard hentry category-uncategorized tag-banking tag-computer-security tag-cybersecurity tag-ransomware tag-regulation">

	<div class="article">

		<h3 class="entry"><a href="https://www.schneier.com/blog/archives/2023/11/new-york-increases-cybersecurity-rules-for-financial-companies.html"" rel="bookmark">New York Increases Cybersecurity Rules for Financial Companies</a></h3>
		<p>Another example of a large and influential state <a href="https://www.wsj.com/articles/new-york-adds-stiffer-requirements-to-cybersecurity-rules-68d49fd1?mod=djemCybersecruityPro&amp;tpl=cy">doing things</a> the federal government won&#8217;t:</p>
<blockquote><p>Boards of directors, or other senior committees, are charged with overseeing cybersecurity risk management, and must retain an appropriate level of expertise to understand cyber issues, the rules say. Directors must sign off on cybersecurity programs, and ensure that any security program has &#8220;sufficient resources&#8221; to function.</p>
<p>In a new addition, companies now face significant requirements related to ransom payments. Regulated firms must now report any payment made to hackers within 24 hours of that payment.</p></blockquote>

		
		
		<p class="posted">
			<a href="https://www.schneier.com/blog/archives/2023/11/new-york-increases-cybersecurity-rules-for-financial-companies.html" rel="bookmark">Posted on November 3, 2023 at 7:01 AM</a>			•
			<a href="https://www.schneier.com/blog/archives/2023/11/new-york-increases-cybersecurity-rules-for-financial-companies.html#comments">View Comments</a>		</p>

		<aside><div class="schneier-share share" data-uri="https://www.schneier.com/blog/archives/2023/11/new-york-increases-cybersecurity-rules-for-financial-companies.html" data-title="New York Increases Cybersecurity Rules for Financial Companies" data-order="facebook twitter tumblr" data-social-share-privacy="true" /></aside>
	</div>

</article>


<article id="post-66991" class="post-66991 post type-post status-publish format-standard hentry category-uncategorized tag-artificial-intelligence tag-authentication tag-banking tag-biometrics tag-deep-fake tag-fraud tag-identification tag-spoofing tag-voice-recognition">

	<div class="article">

		<h3 class="entry"><a href="https://www.schneier.com/blog/archives/2023/03/fooling-a-voice-authentication-system-with-an-ai-generated-voice.html"" rel="bookmark">Fooling a Voice Authentication System with an AI-Generated Voice</a></h3>
		<p>A reporter used an AI synthesis of his own voice to <a href="https://www.vice.com/en/article/dy7axa/how-i-broke-into-a-bank-account-with-an-ai-generated-voice">fool the voice authentication system</a> for Lloyd&#8217;s Bank.</p>

		
		
		<p class="posted">
			<a href="https://www.schneier.com/blog/archives/2023/03/fooling-a-voice-authentication-system-with-an-ai-generated-voice.html" rel="bookmark">Posted on March 1, 2023 at 7:06 AM</a>			•
			<a href="https://www.schneier.com/blog/archives/2023/03/fooling-a-voice-authentication-system-with-an-ai-generated-voice.html#comments">View Comments</a>		</p>

		<aside><div class="schneier-share share" data-uri="https://www.schneier.com/blog/archives/2023/03/fooling-a-voice-authentication-system-with-an-ai-generated-voice.html" data-title="Fooling a Voice Authentication System with an AI-Generated Voice" data-order="facebook twitter tumblr" data-social-share-privacy="true" /></aside>
	</div>

</article>


<article id="post-65889" class="post-65889 post type-post status-publish format-standard hentry category-uncategorized tag-banking tag-credit-cards tag-fraud tag-smartphones tag-two-factor-authentication">

	<div class="article">

		<h3 class="entry"><a href="https://www.schneier.com/blog/archives/2022/09/credit-card-fraud-that-bypasses-2fa.html"" rel="bookmark">Credit Card Fraud That Bypasses 2FA</a></h3>
		<p>Someone in the UK is stealing <a href="https://www.bbc.com/news/uk-england-london-62809151">smartphones and credit cards</a> from people who have stored them in gym lockers, and is using the two items in combination to commit fraud:</p>
<blockquote><p>Phones, of course, can be made inaccessible with the use of passwords and face or fingerprint unlocking. And bank cards can be stopped.</p>
<p>But the thief has a method which circumnavigates those basic safety protocols.</p>
<p>Once they have the phone and the card, they register the card on the relevant bank&#8217;s app on their own phone or computer. Since it is the first time that card will have been used on the new device, a one-off security passcode is demanded.</p>
<p>That verification passcode is sent by the bank to the stolen phone. The code flashes up on the locked screen of the stolen phone, leaving the thief to tap it into their own device. Once accepted, they have control of the bank account. They can transfer money or buy goods, or change access to the account.</p></blockquote>

		
		
		<p class="posted">
			<a href="https://www.schneier.com/blog/archives/2022/09/credit-card-fraud-that-bypasses-2fa.html" rel="bookmark">Posted on September 20, 2022 at 6:29 AM</a>			•
			<a href="https://www.schneier.com/blog/archives/2022/09/credit-card-fraud-that-bypasses-2fa.html#comments">View Comments</a>		</p>

		<aside><div class="schneier-share share" data-uri="https://www.schneier.com/blog/archives/2022/09/credit-card-fraud-that-bypasses-2fa.html" data-title="Credit Card Fraud That Bypasses 2FA" data-order="facebook twitter tumblr" data-social-share-privacy="true" /></aside>
	</div>

</article>


<article id="post-65198" class="post-65198 post type-post status-publish format-standard hentry category-uncategorized tag-banking tag-fraud tag-scams">

	<div class="article">

		<h3 class="entry"><a href="https://www.schneier.com/blog/archives/2022/03/fraud-on-zelle.html"" rel="bookmark">Fraud on Zelle</a></h3>
		<p>Zelle is rife with <a href="https://www.nytimes.com/2022/03/06/business/payments-fraud-zelle-banks.html">fraud</a>:</p>
<blockquote><p>Zelle’s immediacy has also made it a favorite of fraudsters. Other types of bank transfers or transactions involving payment cards typically take at least a day to clear. But once crooks scare or trick victims into handing over money via Zelle, they can siphon away thousands of dollars in seconds. There’s no way for customers&#8212;and in many cases, the banks themselves&#8212;to retrieve the money.</p>
<p>[&#8230;]</p>
<p>It’s not clear who is legally liable for such losses. Banks say that returning money to defrauded customers is not their responsibility, since the federal law covering electronic transfers&#8212;known in the industry as Regulation E ­&#8212;requires them to cover only &#8220;unauthorized&#8221; transactions, and the fairly common scam that Mr. Faunce fell prey to tricks people into making the transfers themselves. Victims say because they were duped into sending the money, the transaction is unauthorized. Regulatory guidance has so far been murky.</p>
<p>When swindled customers, already upset to find themselves on the hook, search for other means of redress, many are enraged to find out that Zelle is owned and operated by banks.</p>
<p>[&#8230;]</p>
<p>The Zelle network is operated by Early Warning Services, a company created and owned by seven banks: Bank of America, Capital One, JPMorgan Chase, PNC, Truist, U.S. Bank and Wells Fargo. Early Warning, based in Scottsdale, Ariz., manages the system’s technical infrastructure. But the 1,425 banks and credit unions that use Zelle can customize the app and add their own security settings.</p></blockquote>

		
		
		<p class="posted">
			<a href="https://www.schneier.com/blog/archives/2022/03/fraud-on-zelle.html" rel="bookmark">Posted on March 9, 2022 at 6:00 AM</a>			•
			<a href="https://www.schneier.com/blog/archives/2022/03/fraud-on-zelle.html#comments">View Comments</a>		</p>

		<aside><div class="schneier-share share" data-uri="https://www.schneier.com/blog/archives/2022/03/fraud-on-zelle.html" data-title="Fraud on Zelle" data-order="facebook twitter tumblr" data-social-share-privacy="true" /></aside>
	</div>

</article>


<article id="post-63266" class="post-63266 post type-post status-publish format-standard hentry category-uncategorized tag-backdoors tag-banking tag-credentials tag-cryptography tag-malware tag-reports">

	<div class="article">

		<h3 class="entry"><a href="https://www.schneier.com/blog/archives/2021/05/bizarro-banking-trojan.html"" rel="bookmark">Bizarro Banking Trojan</a></h3>
		<p>Bizarro is a <a href="https://gizmodo.com/bizarro-a-new-banking-trojan-is-sweeping-through-euro-1846927565">new banking trojan</a> that is stealing financial information and crypto wallets.</p>
<blockquote><p>&#8230;the program can be delivered in a couple of ways­&#8212;either via malicious links contained within spam emails, or through a trojanized app. Using these sneaky methods, trojan operators will implant the malware onto a target device, where it will install a sophisticated backdoor that &#8220;contains more than 100 commands and allows the attackers to steal online banking account credentials,&#8221; the researchers write.</p>
<p>The backdoor has numerous commands built in to allow manipulation of a targeted individual, including keystroke loggers that allow for harvesting of personal login information. In some instances, the malware can allow criminals to commandeer a victim’s crypto wallet, too.</p></blockquote>
<p>Research <a href="https://securelist.com/bizarro-banking-trojan-expands-its-attacks-to-europe/102258/">report</a>.</p>

		
		
		<p class="posted">
			<a href="https://www.schneier.com/blog/archives/2021/05/bizarro-banking-trojan.html" rel="bookmark">Posted on May 20, 2021 at 9:13 AM</a>			•
			<a href="https://www.schneier.com/blog/archives/2021/05/bizarro-banking-trojan.html#comments">View Comments</a>		</p>

		<aside><div class="schneier-share share" data-uri="https://www.schneier.com/blog/archives/2021/05/bizarro-banking-trojan.html" data-title="Bizarro Banking Trojan" data-order="facebook twitter tumblr" data-social-share-privacy="true" /></aside>
	</div>

</article>


<article id="post-62097" class="post-62097 post type-post status-publish format-standard hentry category-uncategorized tag-banking tag-phones tag-psychology-of-security tag-scams tag-social-engineering tag-video">

	<div class="article">

		<h3 class="entry"><a href="https://www.schneier.com/blog/archives/2021/03/details-of-a-computer-banking-scam.html"" rel="bookmark">Details of a Computer Banking Scam</a></h3>
		<p>This is a <a href="https://www.youtube.com/watch?v=VrKW58MS12g">longish video</a> that describes a profitable computer banking scam that&#8217;s run out of call centers in places like India. There&#8217;s a lot of fluff about glitterbombs and the like, but the details are interesting. The scammers convince the victims to give them remote access to their computers, and then that they&#8217;ve mistyped a dollar amount and have received a large refund that they didn&#8217;t deserve. Then they convince the victims to send cash to a drop site, where a money mule retrieves it and forwards it to the scammers.</p>
<p>I found it interesting for several reasons. One, it illustrates the complex business nature of the scam: there are a lot of people doing specialized jobs in order for it to work. Two, it clearly shows the psychological manipulation involved, and how it preys on the unsophisticated and vulnerable. And three, it&#8217;s an evolving tactic that gets around banks increasingly flagging blocking suspicious electronic transfers.</p>

		
		
		<p class="posted">
			<a href="https://www.schneier.com/blog/archives/2021/03/details-of-a-computer-banking-scam.html" rel="bookmark">Posted on March 22, 2021 at 6:15 AM</a>			•
			<a href="https://www.schneier.com/blog/archives/2021/03/details-of-a-computer-banking-scam.html#comments">View Comments</a>		</p>

		<aside><div class="schneier-share share" data-uri="https://www.schneier.com/blog/archives/2021/03/details-of-a-computer-banking-scam.html" data-title="Details of a Computer Banking Scam" data-order="facebook twitter tumblr" data-social-share-privacy="true" /></aside>
	</div>

</article>


<article id="post-60517" class="post-60517 post type-post status-publish format-standard hentry category-uncategorized tag-banking tag-fraud">

	<div class="article">

		<h3 class="entry"><a href="https://www.schneier.com/blog/archives/2020/11/check-washing.html"" rel="bookmark">Check Washing</a></h3>
		<p>I can&#8217;t believe that <a href="https://www.theguardian.com/commentisfree/2020/nov/25/check-washing-schemes-small-businesses">check washing</a> is still a thing:</p>
<blockquote><p>&#8220;Check washing&#8221; is a practice where thieves break into mailboxes (or otherwise steal mail), find envelopes with checks, then use special solvents to remove the information on that check (except for the signature) and then change the payee and the amount to a bank account under their control so that it could be deposited at out-state-banks and oftentimes by a mobile phone.</p></blockquote>
<p>The article suggests a solution: stop using paper checks.</p>

		
		
		<p class="posted">
			<a href="https://www.schneier.com/blog/archives/2020/11/check-washing.html" rel="bookmark">Posted on November 30, 2020 at 9:22 AM</a>			•
			<a href="https://www.schneier.com/blog/archives/2020/11/check-washing.html#comments">View Comments</a>		</p>

		<aside><div class="schneier-share share" data-uri="https://www.schneier.com/blog/archives/2020/11/check-washing.html" data-title="Check Washing" data-order="facebook twitter tumblr" data-social-share-privacy="true" /></aside>
	</div>

</article>


<article id="post-12593" class="post-12593 post type-post status-publish format-standard hentry category-uncategorized tag-atms tag-banking tag-cybercrime tag-cybersecurity tag-hacking tag-malware tag-north-korea">

	<div class="article">

		<h3 class="entry"><a href="https://www.schneier.com/blog/archives/2020/09/north_korea_atm.html"" rel="bookmark">North Korea ATM Hack</a></h3>
		<p>The US Cybersecurity and Infrastructure Security Agency (CISA) published a long and technical <a href="https://us-cert.cisa.gov/ncas/alerts/aa20-239a">alert</a> describing a North Korea hacking scheme against ATMs in a bunch of countries worldwide:</p>
<blockquote><p>This joint advisory is the result of analytic efforts among the Cybersecurity and Infrastructure Security Agency (CISA), the Department of the Treasury (Treasury), the Federal Bureau of Investigation (FBI) and U.S. Cyber Command (USCYBERCOM). Working with U.S. government partners, CISA, Treasury, FBI, and USCYBERCOM identified malware and indicators of compromise (IOCs) used by the North Korean government in an automated teller machine (ATM) cash-out scheme­&#8212;referred to by the U.S. Government as &#8220;FASTCash 2.0: North Korea&#8217;s BeagleBoyz Robbing Banks.&#8221;</p></blockquote>
<p>The level of detail is impressive, as seems to be common in CISA&#8217;s <a href="https://us-cert.cisa.gov/ncas/alerts">alerts</a> and <a href="https://us-cert.cisa.gov/ncas/analysis-reports">analysis reports</a>.</p>

		
		
		<p class="posted">
			<a href="https://www.schneier.com/blog/archives/2020/09/north_korea_atm.html" rel="bookmark">Posted on September 1, 2020 at 6:17 AM</a>			•
			<a href="https://www.schneier.com/blog/archives/2020/09/north_korea_atm.html#comments">View Comments</a>		</p>

		<aside><div class="schneier-share share" data-uri="https://www.schneier.com/blog/archives/2020/09/north_korea_atm.html" data-title="North Korea ATM Hack" data-order="facebook twitter tumblr" data-social-share-privacy="true" /></aside>
	</div>

</article>


		<div class="content-nav">

			<span aria-current="page" class="page-numbers current">1</span>
<a class="page-numbers" href="https://www.schneier.com/tag/banking/page/2/">2</a>
<a class="page-numbers" href="https://www.schneier.com/tag/banking/page/3/">3</a>
<span class="page-numbers dots">&hellip;</span>
<a class="page-numbers" href="https://www.schneier.com/tag/banking/page/18/">18</a>
<a class="next page-numbers" href="https://www.schneier.com/tag/banking/page/2/">Next→</a>		</div>
		
<p id="powered">Sidebar photo of Bruce Schneier by Joe MacInnis.</p><p id="footer-credits">
<a href="https://wordpress.com/wp/?partner_domain=www.schneier.com&#038;utm_source=Automattic&#038;utm_medium=colophon&#038;utm_campaign=Concierge%20Referral&#038;utm_term=www.schneier.com" class="imprint" target="_blank" rel="nofollow">Powered by WordPress</a> <a href="https://pressable.com/?utm_source=Automattic&#038;utm_medium=rpc&#038;utm_campaign=Concierge%20Referral&#038;utm_term=concierge" class="imprint" target="_blank" rel="nofollow">Hosted by Pressable</a></p>
		</div>

		
<aside>
	<div class="sidebar" id="sidebar-two">
		<section><div class="sidesection widget widget_schneier_about" id="schneier_about-2"><h3>About Bruce Schneier</h3><img src="https://149400697.v2.pressablecdn.com/wp-content/uploads/2019/10/Bruce-Schneier.jpg" /><p><p class="small">I am a <a href="https://public-interest-tech.com/">public-interest technologist</a>, working at the intersection of security, technology, and people. I've been writing about security issues on my <a href="/">blog</a> since 2004, and in my monthly <a href="/crypto-gram/">newsletter</a> since 1998. I'm a fellow and lecturer at Harvard's <a href="https://www.hks.harvard.edu/faculty/bruce-schneier">Kennedy School</a>, a board member of <a href="https://www.eff.org/">EFF</a>, and the Chief of Security Architecture at <a href="https://inrupt.com/">Inrupt, Inc.</a> This personal website expresses the opinions of none of those organizations.</p>
</p></div></section><section><div class="sidesection widget widget_schneier_featured_essays" id="schneier_featured_essays-2"><h3>Featured Essays</h3>
	<ul>
		<li><a href="https://www.schneier.com/essays/archives/2016/04/the_value_of_encrypt.html">The Value of Encryption</a></li><li><a href="https://www.schneier.com/essays/archives/2016/03/data_is_a_toxic_asse.html">Data Is a Toxic Asset, So Why Not Throw It Out?</a></li><li><a href="https://www.schneier.com/essays/archives/2014/01/how_the_nsa_threaten.html">How the NSA Threatens National Security</a></li><li><a href="https://www.schneier.com/essays/archives/2009/01/terrorists_may_use_g.html">Terrorists May Use Google Earth, But Fear Is No Reason to Ban It</a></li><li><a href="https://www.schneier.com/essays/archives/2007/01/in_praise_of_securit.html">In Praise of Security Theater</a></li><li><a href="https://www.schneier.com/essays/archives/2006/08/refuse_to_be_terrori.html">Refuse to be Terrorized</a></li><li><a href="https://www.schneier.com/essays/archives/2006/05/the_eternal_value_of.html">The Eternal Value of Privacy</a></li><li><a href="https://www.schneier.com/essays/archives/2005/09/terrorists_dont_do_m.html">Terrorists Don&#039;t Do Movie Plots</a></li>	</ul>

	<p><a href="https://www.schneier.com/essays/">More Essays</a></p></div></section><section><div class="sidesection widget widget_schneier_archives" id="schneier_archives-2"><h3>Blog Archives</h3>
<ul>

	<li><a href="https://www.schneier.com/blog/calendar.html/">Archive by Month</a></li><li><a href="https://www.schneier.com/blog/newcomments.html/">100 Latest Comments</a></li></ul>

<h4>Blog Tags</h4><ul class="top-tags"><li><a href="https://www.schneier.com/tag/3d-printers/">3d printers</a></li><li><a href="https://www.schneier.com/tag/9-11/">9/11</a></li><li><a href="https://www.schneier.com/tag/a-hackers-mind/">A Hacker&#039;s Mind</a></li><li><a href="https://www.schneier.com/tag/aaron-swartz/">Aaron Swartz</a></li><li><a href="https://www.schneier.com/tag/academic/">academic</a></li><li><a href="https://www.schneier.com/tag/academic-papers/">academic papers</a></li><li><a href="https://www.schneier.com/tag/accountability/">accountability</a></li><li><a href="https://www.schneier.com/tag/aclu/">ACLU</a></li><li><a href="https://www.schneier.com/tag/activism/">activism</a></li><li><a href="https://www.schneier.com/tag/adobe/">Adobe</a></li><li><a href="https://www.schneier.com/tag/advanced-persistent-threats/">advanced persistent threats</a></li><li><a href="https://www.schneier.com/tag/adware/">adware</a></li><li><a href="https://www.schneier.com/tag/aes/">AES</a></li><li><a href="https://www.schneier.com/tag/afghanistan/">Afghanistan</a></li><li><a href="https://www.schneier.com/tag/air-marshals/">air marshals</a></li><li><a href="https://www.schneier.com/tag/air-travel/">air travel</a></li><li><a href="https://www.schneier.com/tag/airgaps/">airgaps</a></li><li><a href="https://www.schneier.com/tag/al-qaeda/">al Qaeda</a></li><li><a href="https://www.schneier.com/tag/alarms/">alarms</a></li><li><a href="https://www.schneier.com/tag/algorithms/">algorithms</a></li><li><a href="https://www.schneier.com/tag/alibis/">alibis</a></li><li><a href="https://www.schneier.com/tag/amazon/">Amazon</a></li><li><a href="https://www.schneier.com/tag/android/">Android</a></li><li><a href="https://www.schneier.com/tag/anonymity/">anonymity</a></li><li><a href="https://www.schneier.com/tag/anonymous/">Anonymous</a></li><li><a href="https://www.schneier.com/tag/antivirus/">antivirus</a></li><li><a href="https://www.schneier.com/tag/apache/">Apache</a></li><li><a href="https://www.schneier.com/tag/apple/">Apple</a></li><li><a href="https://www.schneier.com/tag/applied-cryptography/">Applied Cryptography</a></li><li><a href="https://www.schneier.com/tag/artificial-intelligence/">artificial intelligence</a></li></ul><p><a href="https://www.schneier.com/blog/tags.html/">More Tags</a></p></div></section><section><div class="sidesection widget widget_schneier_latest_book" id="schneier_latest_book-3"><h3>Latest Book</h3><a href="https://www.schneier.com/books/a-hackers-mind/"><img class="sidepic" alt="A Hacker&#039;s Mind" src="https://149400697.v2.pressablecdn.com/wp-content/uploads/2022/10/book-mind-200w.jpg" /></a><p><a href="https://www.schneier.com/books/">More Books</a></p></div></section><section><div class="sidesection widget widget_schneier_promotion" id="schneier_promotion-2">
<a href="https://www.eff.org/issues/bloggers/legal/join">
	<img src="https://149400697.v2.pressablecdn.com/wp-content/themes/schneier/assets/images/join-eff@2x.png" id="effbutton" alt="Support Bloggers' Rights!" title="Support Bloggers' Rights!" /></a>

<a href="https://npo.networkforgood.org/Donate/Donate.aspx?npoSubscriptionId=8252">
	<img src="https://149400697.v2.pressablecdn.com/wp-content/themes/schneier/assets/images/support-epic@2x.png" alt="Defend Privacy--Support Epic" title="Defend Privacy--Support Epic" /></a>
</div></section>	</div>
</aside>

		<footer>
			<nav>
				<div class="nav" id="footer-nav">
					<div class="menu-main-menu-container"><ul id="menu-main-menu-1" class="menu"><li class="menu1 menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-50175 current-menu-item"><a href="https://www.schneier.com">Blog</a></li>
<li class="menu2 menu-item menu-item-type-post_type menu-item-object-page menu-item-50916"><a href="https://www.schneier.com/crypto-gram/">Newsletter</a></li>
<li class="menu3 menu-item menu-item-type-post_type menu-item-object-page menu-item-50166"><a href="https://www.schneier.com/books/">Books</a></li>
<li class="menu4 menu-item menu-item-type-custom menu-item-object-custom menu-item-50169"><a href="https://www.schneier.com/essays/">Essays</a></li>
<li class="menu5 menu-item menu-item-type-custom menu-item-object-custom menu-item-50170"><a href="https://www.schneier.com/news/">News</a></li>
<li class="menu6 menu-item menu-item-type-custom menu-item-object-custom menu-item-50171"><a href="https://www.schneier.com/talks/">Talks</a></li>
<li class="menu7 menu-item menu-item-type-post_type menu-item-object-page menu-item-50167"><a href="https://www.schneier.com/academic/">Academic</a></li>
<li class="menu8 menu-item menu-item-type-post_type menu-item-object-page menu-item-50174"><a href="https://www.schneier.com/blog/about/">About Me</a></li>
</ul></div>				</div>
			</nav>
		</footer>

		</div><!--#main-->
	</div><!--#wrapper-->

		<script type='text/javascript'>
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
	</script>
	<link rel='stylesheet' id='wc-blocks-style-css' href='https://c0.wp.com/p/woocommerce/8.5.2/assets/client/blocks/wc-blocks.css' type='text/css' media='all' />
<script type="text/javascript" src="https://c0.wp.com/p/woocommerce/8.5.2/assets/js/sourcebuster/sourcebuster.min.js" id="sourcebuster-js-js"></script>
<script type="text/javascript" id="wc-order-attribution-js-extra">
/* <![CDATA[ */
var wc_order_attribution = {"params":{"lifetime":1.0e-5,"session":30,"ajaxurl":"https:\/\/www.schneier.com\/wp-admin\/admin-ajax.php","prefix":"wc_order_attribution_","allowTracking":"yes"}};
/* ]]> */
</script>
<script type="text/javascript" src="https://c0.wp.com/p/woocommerce/8.5.2/assets/js/frontend/order-attribution.min.js" id="wc-order-attribution-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/vendor/react.min.js" id="react-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/deprecated.min.js" id="wp-deprecated-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/dom.min.js" id="wp-dom-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/vendor/react-dom.min.js" id="react-dom-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/escape-html.min.js" id="wp-escape-html-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/element.min.js" id="wp-element-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/is-shallow-equal.min.js" id="wp-is-shallow-equal-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/i18n.min.js" id="wp-i18n-js"></script>
<script type="text/javascript" id="wp-i18n-js-after">
/* <![CDATA[ */
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
/* ]]> */
</script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/keycodes.min.js" id="wp-keycodes-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/priority-queue.min.js" id="wp-priority-queue-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/compose.min.js" id="wp-compose-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/private-apis.min.js" id="wp-private-apis-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/redux-routine.min.js" id="wp-redux-routine-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/data.min.js" id="wp-data-js"></script>
<script type="text/javascript" id="wp-data-js-after">
/* <![CDATA[ */
( function() {
	var userId = 0;
	var storageKey = "WP_DATA_USER_" + userId;
	wp.data
		.use( wp.data.plugins.persistence, { storageKey: storageKey } );
} )();
/* ]]> */
</script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/vendor/lodash.min.js" id="lodash-js"></script>
<script type="text/javascript" id="lodash-js-after">
/* <![CDATA[ */
window.lodash = _.noConflict();
/* ]]> */
</script>
<script type="text/javascript" src="https://c0.wp.com/p/woocommerce/8.5.2/assets/client/blocks/wc-blocks-registry.js" id="wc-blocks-registry-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/url.min.js" id="wp-url-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/api-fetch.min.js" id="wp-api-fetch-js"></script>
<script type="text/javascript" id="wp-api-fetch-js-after">
/* <![CDATA[ */
wp.apiFetch.use( wp.apiFetch.createRootURLMiddleware( "https://www.schneier.com/wp-json/" ) );
wp.apiFetch.nonceMiddleware = wp.apiFetch.createNonceMiddleware( "1a8f21c5f6" );
wp.apiFetch.use( wp.apiFetch.nonceMiddleware );
wp.apiFetch.use( wp.apiFetch.mediaUploadMiddleware );
wp.apiFetch.nonceEndpoint = "https://www.schneier.com/wp-admin/admin-ajax.php?action=rest-nonce";
/* ]]> */
</script>
<script type="text/javascript" id="wc-settings-js-before">
/* <![CDATA[ */
var wcSettings = wcSettings || JSON.parse( decodeURIComponent( '%7B%22shippingCostRequiresAddress%22%3Afalse%2C%22adminUrl%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%5C%2Fwp-admin%5C%2F%22%2C%22countries%22%3A%7B%22AF%22%3A%22Afghanistan%22%2C%22AX%22%3A%22%5Cu00c5land%20Islands%22%2C%22AL%22%3A%22Albania%22%2C%22DZ%22%3A%22Algeria%22%2C%22AS%22%3A%22American%20Samoa%22%2C%22AD%22%3A%22Andorra%22%2C%22AO%22%3A%22Angola%22%2C%22AI%22%3A%22Anguilla%22%2C%22AQ%22%3A%22Antarctica%22%2C%22AG%22%3A%22Antigua%20and%20Barbuda%22%2C%22AR%22%3A%22Argentina%22%2C%22AM%22%3A%22Armenia%22%2C%22AW%22%3A%22Aruba%22%2C%22AU%22%3A%22Australia%22%2C%22AT%22%3A%22Austria%22%2C%22AZ%22%3A%22Azerbaijan%22%2C%22BS%22%3A%22Bahamas%22%2C%22BH%22%3A%22Bahrain%22%2C%22BD%22%3A%22Bangladesh%22%2C%22BB%22%3A%22Barbados%22%2C%22BY%22%3A%22Belarus%22%2C%22PW%22%3A%22Belau%22%2C%22BE%22%3A%22Belgium%22%2C%22BZ%22%3A%22Belize%22%2C%22BJ%22%3A%22Benin%22%2C%22BM%22%3A%22Bermuda%22%2C%22BT%22%3A%22Bhutan%22%2C%22BO%22%3A%22Bolivia%22%2C%22BQ%22%3A%22Bonaire%2C%20Saint%20Eustatius%20and%20Saba%22%2C%22BA%22%3A%22Bosnia%20and%20Herzegovina%22%2C%22BW%22%3A%22Botswana%22%2C%22BV%22%3A%22Bouvet%20Island%22%2C%22BR%22%3A%22Brazil%22%2C%22IO%22%3A%22British%20Indian%20Ocean%20Territory%22%2C%22BN%22%3A%22Brunei%22%2C%22BG%22%3A%22Bulgaria%22%2C%22BF%22%3A%22Burkina%20Faso%22%2C%22BI%22%3A%22Burundi%22%2C%22KH%22%3A%22Cambodia%22%2C%22CM%22%3A%22Cameroon%22%2C%22CA%22%3A%22Canada%22%2C%22CV%22%3A%22Cape%20Verde%22%2C%22KY%22%3A%22Cayman%20Islands%22%2C%22CF%22%3A%22Central%20African%20Republic%22%2C%22TD%22%3A%22Chad%22%2C%22CL%22%3A%22Chile%22%2C%22CN%22%3A%22China%22%2C%22CX%22%3A%22Christmas%20Island%22%2C%22CC%22%3A%22Cocos%20%28Keeling%29%20Islands%22%2C%22CO%22%3A%22Colombia%22%2C%22KM%22%3A%22Comoros%22%2C%22CG%22%3A%22Congo%20%28Brazzaville%29%22%2C%22CD%22%3A%22Congo%20%28Kinshasa%29%22%2C%22CK%22%3A%22Cook%20Islands%22%2C%22CR%22%3A%22Costa%20Rica%22%2C%22HR%22%3A%22Croatia%22%2C%22CU%22%3A%22Cuba%22%2C%22CW%22%3A%22Cura%26ccedil%3Bao%22%2C%22CY%22%3A%22Cyprus%22%2C%22CZ%22%3A%22Czech%20Republic%22%2C%22DK%22%3A%22Denmark%22%2C%22DJ%22%3A%22Djibouti%22%2C%22DM%22%3A%22Dominica%22%2C%22DO%22%3A%22Dominican%20Republic%22%2C%22EC%22%3A%22Ecuador%22%2C%22EG%22%3A%22Egypt%22%2C%22SV%22%3A%22El%20Salvador%22%2C%22GQ%22%3A%22Equatorial%20Guinea%22%2C%22ER%22%3A%22Eritrea%22%2C%22EE%22%3A%22Estonia%22%2C%22SZ%22%3A%22Eswatini%22%2C%22ET%22%3A%22Ethiopia%22%2C%22FK%22%3A%22Falkland%20Islands%22%2C%22FO%22%3A%22Faroe%20Islands%22%2C%22FJ%22%3A%22Fiji%22%2C%22FI%22%3A%22Finland%22%2C%22FR%22%3A%22France%22%2C%22GF%22%3A%22French%20Guiana%22%2C%22PF%22%3A%22French%20Polynesia%22%2C%22TF%22%3A%22French%20Southern%20Territories%22%2C%22GA%22%3A%22Gabon%22%2C%22GM%22%3A%22Gambia%22%2C%22GE%22%3A%22Georgia%22%2C%22DE%22%3A%22Germany%22%2C%22GH%22%3A%22Ghana%22%2C%22GI%22%3A%22Gibraltar%22%2C%22GR%22%3A%22Greece%22%2C%22GL%22%3A%22Greenland%22%2C%22GD%22%3A%22Grenada%22%2C%22GP%22%3A%22Guadeloupe%22%2C%22GU%22%3A%22Guam%22%2C%22GT%22%3A%22Guatemala%22%2C%22GG%22%3A%22Guernsey%22%2C%22GN%22%3A%22Guinea%22%2C%22GW%22%3A%22Guinea-Bissau%22%2C%22GY%22%3A%22Guyana%22%2C%22HT%22%3A%22Haiti%22%2C%22HM%22%3A%22Heard%20Island%20and%20McDonald%20Islands%22%2C%22HN%22%3A%22Honduras%22%2C%22HK%22%3A%22Hong%20Kong%22%2C%22HU%22%3A%22Hungary%22%2C%22IS%22%3A%22Iceland%22%2C%22IN%22%3A%22India%22%2C%22ID%22%3A%22Indonesia%22%2C%22IR%22%3A%22Iran%22%2C%22IQ%22%3A%22Iraq%22%2C%22IE%22%3A%22Ireland%22%2C%22IM%22%3A%22Isle%20of%20Man%22%2C%22IL%22%3A%22Israel%22%2C%22IT%22%3A%22Italy%22%2C%22CI%22%3A%22Ivory%20Coast%22%2C%22JM%22%3A%22Jamaica%22%2C%22JP%22%3A%22Japan%22%2C%22JE%22%3A%22Jersey%22%2C%22JO%22%3A%22Jordan%22%2C%22KZ%22%3A%22Kazakhstan%22%2C%22KE%22%3A%22Kenya%22%2C%22KI%22%3A%22Kiribati%22%2C%22KW%22%3A%22Kuwait%22%2C%22KG%22%3A%22Kyrgyzstan%22%2C%22LA%22%3A%22Laos%22%2C%22LV%22%3A%22Latvia%22%2C%22LB%22%3A%22Lebanon%22%2C%22LS%22%3A%22Lesotho%22%2C%22LR%22%3A%22Liberia%22%2C%22LY%22%3A%22Libya%22%2C%22LI%22%3A%22Liechtenstein%22%2C%22LT%22%3A%22Lithuania%22%2C%22LU%22%3A%22Luxembourg%22%2C%22MO%22%3A%22Macao%22%2C%22MG%22%3A%22Madagascar%22%2C%22MW%22%3A%22Malawi%22%2C%22MY%22%3A%22Malaysia%22%2C%22MV%22%3A%22Maldives%22%2C%22ML%22%3A%22Mali%22%2C%22MT%22%3A%22Malta%22%2C%22MH%22%3A%22Marshall%20Islands%22%2C%22MQ%22%3A%22Martinique%22%2C%22MR%22%3A%22Mauritania%22%2C%22MU%22%3A%22Mauritius%22%2C%22YT%22%3A%22Mayotte%22%2C%22MX%22%3A%22Mexico%22%2C%22FM%22%3A%22Micronesia%22%2C%22MD%22%3A%22Moldova%22%2C%22MC%22%3A%22Monaco%22%2C%22MN%22%3A%22Mongolia%22%2C%22ME%22%3A%22Montenegro%22%2C%22MS%22%3A%22Montserrat%22%2C%22MA%22%3A%22Morocco%22%2C%22MZ%22%3A%22Mozambique%22%2C%22MM%22%3A%22Myanmar%22%2C%22NA%22%3A%22Namibia%22%2C%22NR%22%3A%22Nauru%22%2C%22NP%22%3A%22Nepal%22%2C%22NL%22%3A%22Netherlands%22%2C%22NC%22%3A%22New%20Caledonia%22%2C%22NZ%22%3A%22New%20Zealand%22%2C%22NI%22%3A%22Nicaragua%22%2C%22NE%22%3A%22Niger%22%2C%22NG%22%3A%22Nigeria%22%2C%22NU%22%3A%22Niue%22%2C%22NF%22%3A%22Norfolk%20Island%22%2C%22KP%22%3A%22North%20Korea%22%2C%22MK%22%3A%22North%20Macedonia%22%2C%22MP%22%3A%22Northern%20Mariana%20Islands%22%2C%22NO%22%3A%22Norway%22%2C%22OM%22%3A%22Oman%22%2C%22PK%22%3A%22Pakistan%22%2C%22PS%22%3A%22Palestinian%20Territory%22%2C%22PA%22%3A%22Panama%22%2C%22PG%22%3A%22Papua%20New%20Guinea%22%2C%22PY%22%3A%22Paraguay%22%2C%22PE%22%3A%22Peru%22%2C%22PH%22%3A%22Philippines%22%2C%22PN%22%3A%22Pitcairn%22%2C%22PL%22%3A%22Poland%22%2C%22PT%22%3A%22Portugal%22%2C%22PR%22%3A%22Puerto%20Rico%22%2C%22QA%22%3A%22Qatar%22%2C%22RE%22%3A%22Reunion%22%2C%22RO%22%3A%22Romania%22%2C%22RU%22%3A%22Russia%22%2C%22RW%22%3A%22Rwanda%22%2C%22ST%22%3A%22S%26atilde%3Bo%20Tom%26eacute%3B%20and%20Pr%26iacute%3Bncipe%22%2C%22BL%22%3A%22Saint%20Barth%26eacute%3Blemy%22%2C%22SH%22%3A%22Saint%20Helena%22%2C%22KN%22%3A%22Saint%20Kitts%20and%20Nevis%22%2C%22LC%22%3A%22Saint%20Lucia%22%2C%22SX%22%3A%22Saint%20Martin%20%28Dutch%20part%29%22%2C%22MF%22%3A%22Saint%20Martin%20%28French%20part%29%22%2C%22PM%22%3A%22Saint%20Pierre%20and%20Miquelon%22%2C%22VC%22%3A%22Saint%20Vincent%20and%20the%20Grenadines%22%2C%22WS%22%3A%22Samoa%22%2C%22SM%22%3A%22San%20Marino%22%2C%22SA%22%3A%22Saudi%20Arabia%22%2C%22SN%22%3A%22Senegal%22%2C%22RS%22%3A%22Serbia%22%2C%22SC%22%3A%22Seychelles%22%2C%22SL%22%3A%22Sierra%20Leone%22%2C%22SG%22%3A%22Singapore%22%2C%22SK%22%3A%22Slovakia%22%2C%22SI%22%3A%22Slovenia%22%2C%22SB%22%3A%22Solomon%20Islands%22%2C%22SO%22%3A%22Somalia%22%2C%22ZA%22%3A%22South%20Africa%22%2C%22GS%22%3A%22South%20Georgia%5C%2FSandwich%20Islands%22%2C%22KR%22%3A%22South%20Korea%22%2C%22SS%22%3A%22South%20Sudan%22%2C%22ES%22%3A%22Spain%22%2C%22LK%22%3A%22Sri%20Lanka%22%2C%22SD%22%3A%22Sudan%22%2C%22SR%22%3A%22Suriname%22%2C%22SJ%22%3A%22Svalbard%20and%20Jan%20Mayen%22%2C%22SE%22%3A%22Sweden%22%2C%22CH%22%3A%22Switzerland%22%2C%22SY%22%3A%22Syria%22%2C%22TW%22%3A%22Taiwan%22%2C%22TJ%22%3A%22Tajikistan%22%2C%22TZ%22%3A%22Tanzania%22%2C%22TH%22%3A%22Thailand%22%2C%22TL%22%3A%22Timor-Leste%22%2C%22TG%22%3A%22Togo%22%2C%22TK%22%3A%22Tokelau%22%2C%22TO%22%3A%22Tonga%22%2C%22TT%22%3A%22Trinidad%20and%20Tobago%22%2C%22TN%22%3A%22Tunisia%22%2C%22TR%22%3A%22Turkey%22%2C%22TM%22%3A%22Turkmenistan%22%2C%22TC%22%3A%22Turks%20and%20Caicos%20Islands%22%2C%22TV%22%3A%22Tuvalu%22%2C%22UG%22%3A%22Uganda%22%2C%22UA%22%3A%22Ukraine%22%2C%22AE%22%3A%22United%20Arab%20Emirates%22%2C%22GB%22%3A%22United%20Kingdom%20%28UK%29%22%2C%22US%22%3A%22United%20States%20%28US%29%22%2C%22UM%22%3A%22United%20States%20%28US%29%20Minor%20Outlying%20Islands%22%2C%22UY%22%3A%22Uruguay%22%2C%22UZ%22%3A%22Uzbekistan%22%2C%22VU%22%3A%22Vanuatu%22%2C%22VA%22%3A%22Vatican%22%2C%22VE%22%3A%22Venezuela%22%2C%22VN%22%3A%22Vietnam%22%2C%22VG%22%3A%22Virgin%20Islands%20%28British%29%22%2C%22VI%22%3A%22Virgin%20Islands%20%28US%29%22%2C%22WF%22%3A%22Wallis%20and%20Futuna%22%2C%22EH%22%3A%22Western%20Sahara%22%2C%22YE%22%3A%22Yemen%22%2C%22ZM%22%3A%22Zambia%22%2C%22ZW%22%3A%22Zimbabwe%22%7D%2C%22currency%22%3A%7B%22code%22%3A%22USD%22%2C%22precision%22%3A2%2C%22symbol%22%3A%22%24%22%2C%22symbolPosition%22%3A%22left%22%2C%22decimalSeparator%22%3A%22.%22%2C%22thousandSeparator%22%3A%22%2C%22%2C%22priceFormat%22%3A%22%251%24s%252%24s%22%7D%2C%22currentUserId%22%3A0%2C%22currentUserIsAdmin%22%3Afalse%2C%22dateFormat%22%3A%22F%20j%2C%20Y%22%2C%22homeUrl%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%5C%2F%22%2C%22locale%22%3A%7B%22siteLocale%22%3A%22en_US%22%2C%22userLocale%22%3A%22en_US%22%2C%22weekdaysShort%22%3A%5B%22Sun%22%2C%22Mon%22%2C%22Tue%22%2C%22Wed%22%2C%22Thu%22%2C%22Fri%22%2C%22Sat%22%5D%7D%2C%22dashboardUrl%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%5C%2Fmy-account%5C%2F%22%2C%22orderStatuses%22%3A%7B%22pending%22%3A%22Pending%20payment%22%2C%22processing%22%3A%22Processing%22%2C%22on-hold%22%3A%22On%20hold%22%2C%22completed%22%3A%22Completed%22%2C%22cancelled%22%3A%22Cancelled%22%2C%22refunded%22%3A%22Refunded%22%2C%22failed%22%3A%22Failed%22%2C%22checkout-draft%22%3A%22Draft%22%7D%2C%22placeholderImgSrc%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%5C%2Fwp-content%5C%2Fuploads%5C%2Fwoocommerce-placeholder-300x300.png%22%2C%22productsSettings%22%3A%7B%22cartRedirectAfterAdd%22%3Afalse%7D%2C%22siteTitle%22%3A%22Schneier%20on%20Security%22%2C%22storePages%22%3A%7B%22myaccount%22%3A%7B%22id%22%3A59323%2C%22title%22%3A%22My%20Account%22%2C%22permalink%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%5C%2Fmy-account%5C%2F%22%7D%2C%22shop%22%3A%7B%22id%22%3A0%2C%22title%22%3A%22%22%2C%22permalink%22%3Afalse%7D%2C%22cart%22%3A%7B%22id%22%3A59319%2C%22title%22%3A%22Cart%22%2C%22permalink%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%5C%2Fcart%5C%2F%22%7D%2C%22checkout%22%3A%7B%22id%22%3A59321%2C%22title%22%3A%22Checkout%22%2C%22permalink%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%5C%2Fcheckout%5C%2F%22%7D%2C%22privacy%22%3A%7B%22id%22%3A0%2C%22title%22%3A%22%22%2C%22permalink%22%3Afalse%7D%2C%22terms%22%3A%7B%22id%22%3A0%2C%22title%22%3A%22%22%2C%22permalink%22%3Afalse%7D%7D%2C%22wcAssetUrl%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%5C%2Fwp-content%5C%2Fplugins%5C%2Fwoocommerce%5C%2Fassets%5C%2F%22%2C%22wcVersion%22%3A%228.5.2%22%2C%22wpLoginUrl%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%5C%2Fwp-login.php%22%2C%22wpVersion%22%3A%226.4.3%22%2C%22collectableMethodIds%22%3A%5B%5D%2C%22admin%22%3A%7B%22wccomHelper%22%3A%7B%22isConnected%22%3Atrue%2C%22connectURL%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%5C%2Fwp-admin%5C%2Fadmin.php%3Fpage%3Dwc-addons%26section%3Dhelper%26wc-helper-disconnect%3D1%26wc-helper-nonce%3D28539184f1%22%2C%22userEmail%22%3A%22concierge%40wordpress.com%22%2C%22userAvatar%22%3A%22https%3A%5C%2F%5C%2Fsecure.gravatar.com%5C%2Favatar%5C%2F5afce4882c405779085a1b8db2d73cf8%3Fs%3D48%26d%3Dmm%26r%3Dg%22%2C%22storeCountry%22%3A%22US%22%2C%22inAppPurchaseURLParams%22%3A%7B%22wccom-site%22%3A%22https%3A%5C%2F%5C%2Fwww.schneier.com%22%2C%22wccom-back%22%3A%22%252Ftag%252Fbanking%252F%22%2C%22wccom-woo-version%22%3A%228.5.2%22%2C%22wccom-connect-nonce%22%3A%2237d982cad0%22%7D%7D%2C%22_feature_nonce%22%3A%22eba257aeec%22%2C%22alertCount%22%3A%220%22%2C%22visibleTaskListIds%22%3A%5B%22extended%22%5D%7D%7D' ) );
/* ]]> */
</script>
<script type="text/javascript" src="https://c0.wp.com/p/woocommerce/8.5.2/assets/client/blocks/wc-settings.js" id="wc-settings-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/data-controls.min.js" id="wp-data-controls-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/html-entities.min.js" id="wp-html-entities-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/notices.min.js" id="wp-notices-js"></script>
<script type="text/javascript" id="wc-blocks-middleware-js-before">
/* <![CDATA[ */
			var wcBlocksMiddlewareConfig = {
				storeApiNonce: '7784d3df17',
				wcStoreApiNonceTimestamp: '1706789303'
			};
			
/* ]]> */
</script>
<script type="text/javascript" src="https://c0.wp.com/p/woocommerce/8.5.2/assets/client/blocks/wc-blocks-middleware.js" id="wc-blocks-middleware-js"></script>
<script type="text/javascript" src="https://c0.wp.com/p/woocommerce/8.5.2/assets/client/blocks/wc-blocks-data.js" id="wc-blocks-data-store-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/dom-ready.min.js" id="wp-dom-ready-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/a11y.min.js" id="wp-a11y-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/primitives.min.js" id="wp-primitives-js"></script>
<script type="text/javascript" src="https://c0.wp.com/c/6.4.3/wp-includes/js/dist/warning.min.js" id="wp-warning-js"></script>
<script type="text/javascript" src="https://c0.wp.com/p/woocommerce/8.5.2/assets/client/blocks/blocks-components.js" id="wc-blocks-components-js"></script>
<script type="text/javascript" src="https://c0.wp.com/p/woocommerce/8.5.2/assets/client/blocks/blocks-checkout.js" id="wc-blocks-checkout-js"></script>
<script type="text/javascript" src="https://c0.wp.com/p/woocommerce/8.5.2/assets/js/frontend/order-attribution-blocks.min.js" id="wc-order-attribution-blocks-js"></script>
<script type="text/javascript" src="https://149400697.v2.pressablecdn.com/wp-content/themes/schneier/assets/js/main.js?ver=1.0.0" id="schneier-main-js"></script>
<script type="text/javascript" src="https://c0.wp.com/p/woocommerce/8.5.2/assets/js/jquery-cookie/jquery.cookie.min.js" id="jquery-cookie-js" defer="defer" data-wp-strategy="defer"></script>
<script type="text/javascript" src="https://149400697.v2.pressablecdn.com/wp-content/themes/schneier/assets/vendor/socialshareprivacy/js/socialshareprivacy.js?ver=1.0.1" id="social-share-privacy-js"></script>
<script type="text/javascript" id="social-share-privacy-icons-js-extra">
/* <![CDATA[ */
var schneierSocial = {"path":"https:\/\/www.schneier.com\/wp-content\/themes\/schneier\/assets\/vendor\/socialshareprivacy\/"};
/* ]]> */
</script>
<script type="text/javascript" src="https://149400697.v2.pressablecdn.com/wp-content/themes/schneier/assets/vendor/socialshareprivacy/js/icons.js?ver=1.0.0" id="social-share-privacy-icons-js"></script>
<script defer type="text/javascript" src="https://stats.wp.com/e-202405.js" id="jetpack-stats-js"></script>
<script type="text/javascript" id="jetpack-stats-js-after">
/* <![CDATA[ */
_stq = window._stq || [];
_stq.push([ "view", JSON.parse("{\"v\":\"ext\",\"blog\":\"182601345\",\"post\":\"0\",\"tz\":\"-5\",\"srv\":\"www.schneier.com\",\"hp\":\"atomic\",\"ac\":\"3\",\"amp\":\"0\",\"j\":\"1:13.1-a.9\"}") ]);
_stq.push([ "clickTrackerInit", "182601345", "0" ]);
/* ]]> */
</script>

</body>

</html>
<!--
	generated in 0.562 seconds
	74320 bytes batcached for 300 seconds
-->
