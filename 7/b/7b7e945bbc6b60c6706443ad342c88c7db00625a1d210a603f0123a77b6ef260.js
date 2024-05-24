var xi=Object.defineProperty,Mi=Object.defineProperties,ji=Object.getOwnPropertyDescriptors,Qt=Object.getOwnPropertySymbols,Hi=Object.prototype.hasOwnProperty,$i=Object.prototype.propertyIsEnumerable,Yt=(v,p,y)=>p in v?xi(v,p,{enumerable:!0,configurable:!0,writable:!0,value:y}):v[p]=y,h=(v,p)=>{for(var y in p||(p={}))Hi.call(p,y)&&Yt(v,y,p[y]);if(Qt)for(var y of Qt(p))$i.call(p,y)&&Yt(v,y,p[y]);return v},be=(v,p)=>Mi(v,ji(p));!function(v,p){"object"==typeof exports&&"undefined"!=typeof module?module.exports=p(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],p):(v="undefined"!=typeof globalThis?globalThis:v||self).bootstrap=p(v.Popper)}(this,function(v){"use strict";const y=function p(s){if(s&&s.__esModule)return s;const e=Object.create(null);if(s)for(const t in s)if("default"!==t){const i=Object.getOwnPropertyDescriptor(s,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>s[t]})}return e.default=s,Object.freeze(e)}(v),ve="transitionend",Me=s=>{let e=s.getAttribute("data-bs-target");if(!e||"#"===e){let t=s.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&"#"!==t?t.trim():null}return e},ye=s=>{const e=Me(s);return e&&document.querySelector(e)?e:null},O=s=>{const e=Me(s);return e?document.querySelector(e):null},je=s=>{s.dispatchEvent(new Event(ve))},x=s=>!(!s||"object"!=typeof s)&&(void 0!==s.jquery&&(s=s[0]),void 0!==s.nodeType),N=s=>x(s)?s.jquery?s[0]:s:"string"==typeof s&&s.length>0?document.querySelector(s):null,L=(s,e,t)=>{Object.keys(t).forEach(i=>{const n=t[i],o=e[i],a=o&&x(o)?"element":null==(c=o)?`${c}`:{}.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase();var c;if(!new RegExp(n).test(a))throw new TypeError(`${s.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${n}".`)})},Q=s=>!(!x(s)||0===s.getClientRects().length)&&"visible"===getComputedStyle(s).getPropertyValue("visibility"),M=s=>!s||s.nodeType!==Node.ELEMENT_NODE||!!s.classList.contains("disabled")||(void 0!==s.disabled?s.disabled:s.hasAttribute("disabled")&&"false"!==s.getAttribute("disabled")),He=s=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof s.getRootNode){const e=s.getRootNode();return e instanceof ShadowRoot?e:null}return s instanceof ShadowRoot?s:s.parentNode?He(s.parentNode):null},ce=()=>{},$e=()=>{const{jQuery:s}=window;return s&&!document.body.hasAttribute("data-bs-no-jquery")?s:null},Ee=[],E=()=>"rtl"===document.documentElement.dir,T=s=>{var e;e=()=>{const t=$e();if(t){const i=s.NAME,n=t.fn[i];t.fn[i]=s.jQueryInterface,t.fn[i].Constructor=s,t.fn[i].noConflict=()=>(t.fn[i]=n,s.jQueryInterface)}},"loading"===document.readyState?(Ee.length||document.addEventListener("DOMContentLoaded",()=>{Ee.forEach(t=>t())}),Ee.push(e)):e()},j=s=>{"function"==typeof s&&s()},Be=(s,e,t=!0)=>{if(!t)return void j(s);const i=(a=>{if(!a)return 0;let{transitionDuration:c,transitionDelay:d}=window.getComputedStyle(a);const f=Number.parseFloat(c),g=Number.parseFloat(d);return f||g?(c=c.split(",")[0],d=d.split(",")[0],1e3*(Number.parseFloat(c)+Number.parseFloat(d))):0})(e)+5;let n=!1;const o=({target:a})=>{a===e&&(n=!0,e.removeEventListener(ve,o),j(s))};e.addEventListener(ve,o),setTimeout(()=>{n||je(e)},i)},ze=(s,e,t,i)=>{let n=s.indexOf(e);if(-1===n)return s[!t&&i?s.length-1:0];const o=s.length;return n+=t?1:-1,i&&(n=(n+o)%o),s[Math.max(0,Math.min(n,o-1))]},Gt=/[^.]*(?=\..*)\.|.*/,Zt=/\..*/,Jt=/::\d+$/,we={};let Re=1;const ei={mouseenter:"mouseover",mouseleave:"mouseout"},ti=/^(mouseenter|mouseleave)/i,Fe=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function We(s,e){return e&&`${e}::${Re++}`||s.uidEvent||Re++}function qe(s){const e=We(s);return s.uidEvent=e,we[e]=we[e]||{},we[e]}function Ue(s,e,t=null){const i=Object.keys(s);for(let n=0,o=i.length;n<o;n++){const a=s[i[n]];if(a.originalHandler===e&&a.delegationSelector===t)return a}return null}function Ke(s,e,t){const i="string"==typeof e,n=i?t:e;let o=Xe(s);return Fe.has(o)||(o=s),[i,n,o]}function Ve(s,e,t,i,n){if("string"!=typeof e||!s)return;if(t||(t=i,i=null),ti.test(e)){const _=C=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return C.call(this,A)};i?i=_(i):t=_(t)}const[o,a,c]=Ke(e,t,i),d=qe(s),f=d[c]||(d[c]={}),g=Ue(f,a,o?t:null);if(g)return void(g.oneOff=g.oneOff&&n);const u=We(a,e.replace(Gt,"")),b=o?(_=s,C=t,A=i,function P(q){const le=_.querySelectorAll(C);for(let{target:U}=q;U&&U!==this;U=U.parentNode)for(let Xt=le.length;Xt--;)if(le[Xt]===U)return q.delegateTarget=U,P.oneOff&&r.off(_,q.type,C,A),A.apply(U,[q]);return null}):function(_,C){return function A(P){return P.delegateTarget=_,A.oneOff&&r.off(_,P.type,C),C.apply(_,[P])}}(s,t);var _,C,A;b.delegationSelector=o?t:null,b.originalHandler=a,b.oneOff=n,b.uidEvent=u,f[u]=b,s.addEventListener(c,b,o)}function Ae(s,e,t,i,n){const o=Ue(e[t],i,n);o&&(s.removeEventListener(t,o,Boolean(n)),delete e[t][o.uidEvent])}function Xe(s){return s=s.replace(Zt,""),ei[s]||s}const r={on(s,e,t,i){Ve(s,e,t,i,!1)},one(s,e,t,i){Ve(s,e,t,i,!0)},off(s,e,t,i){if("string"!=typeof e||!s)return;const[n,o,a]=Ke(e,t,i),c=a!==e,d=qe(s),f=e.startsWith(".");if(void 0!==o)return d&&d[a]?void Ae(s,d,a,o,n?t:null):void 0;f&&Object.keys(d).forEach(u=>{!function(b,_,C,A){const P=_[C]||{};Object.keys(P).forEach(q=>{if(q.includes(A)){const le=P[q];Ae(b,_,C,le.originalHandler,le.delegationSelector)}})}(s,d,u,e.slice(1))});const g=d[a]||{};Object.keys(g).forEach(u=>{const b=u.replace(Jt,"");if(!c||e.includes(b)){const _=g[u];Ae(s,d,a,_.originalHandler,_.delegationSelector)}})},trigger(s,e,t){if("string"!=typeof e||!s)return null;const i=$e(),n=Xe(e),o=e!==n,a=Fe.has(n);let c,d=!0,f=!0,g=!1,u=null;return o&&i&&(c=i.Event(e,t),i(s).trigger(c),d=!c.isPropagationStopped(),f=!c.isImmediatePropagationStopped(),g=c.isDefaultPrevented()),a?(u=document.createEvent("HTMLEvents"),u.initEvent(n,d,!0)):u=new CustomEvent(e,{bubbles:d,cancelable:!0}),void 0!==t&&Object.keys(t).forEach(b=>{Object.defineProperty(u,b,{get:()=>t[b]})}),g&&u.preventDefault(),f&&s.dispatchEvent(u),u.defaultPrevented&&void 0!==c&&c.preventDefault(),u}},D=new Map,Y={set(s,e,t){D.has(s)||D.set(s,new Map);const i=D.get(s);i.has(e)||0===i.size?i.set(e,t):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(s,e)=>D.has(s)&&D.get(s).get(e)||null,remove(s,e){if(!D.has(s))return;const t=D.get(s);t.delete(e),0===t.size&&D.delete(s)}};class k{constructor(e){(e=N(e))&&(this._element=e,Y.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Y.remove(this._element,this.constructor.DATA_KEY),r.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,i=!0){Be(e,t,i)}static getInstance(e){return Y.get(N(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const he=(s,e="hide")=>{const i=s.NAME;r.on(document,`click.dismiss${s.EVENT_KEY}`,`[data-bs-dismiss="${i}"]`,function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),M(this))return;const o=O(this)||this.closest(`.${i}`);s.getOrCreateInstance(o)[e]()})};class G extends k{static get NAME(){return"alert"}close(){if(r.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const e=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),r.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=G.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}})}}he(G,"close"),T(G);const Qe='[data-bs-toggle="button"]';class Z extends k{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each(function(){const t=Z.getOrCreateInstance(this);"toggle"===e&&t[e]()})}}function Ye(s){return"true"===s||"false"!==s&&(s===Number(s).toString()?Number(s):""===s||"null"===s?null:s)}function Te(s){return s.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}r.on(document,"click.bs.button.data-api",Qe,s=>{s.preventDefault();const e=s.target.closest(Qe);Z.getOrCreateInstance(e).toggle()}),T(Z);const m={setDataAttribute(s,e,t){s.setAttribute(`data-bs-${Te(e)}`,t)},removeDataAttribute(s,e){s.removeAttribute(`data-bs-${Te(e)}`)},getDataAttributes(s){if(!s)return{};const e={};return Object.keys(s.dataset).filter(t=>t.startsWith("bs")).forEach(t=>{let i=t.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=Ye(s.dataset[t])}),e},getDataAttribute:(s,e)=>Ye(s.getAttribute(`data-bs-${Te(e)}`)),offset(s){const e=s.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:s=>({top:s.offsetTop,left:s.offsetLeft})},l={find:(s,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,s)),findOne:(s,e=document.documentElement)=>Element.prototype.querySelector.call(e,s),children:(s,e)=>[].concat(...s.children).filter(t=>t.matches(e)),parents(s,e){const t=[];let i=s.parentNode;for(;i&&i.nodeType===Node.ELEMENT_NODE&&3!==i.nodeType;)i.matches(e)&&t.push(i),i=i.parentNode;return t},prev(s,e){let t=s.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(s,e){let t=s.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(s){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(", ");return this.find(e,s).filter(t=>!M(t)&&Q(t))}},Ge="carousel",Ze={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},ii={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},H="next",$="prev",B="left",J="right",si={ArrowLeft:J,ArrowRight:B},Je="slid.bs.carousel",z="active",de=".active.carousel-item";class S extends k{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=l.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Ze}static get NAME(){return Ge}next(){this._slide(H)}nextWhenVisible(){!document.hidden&&Q(this._element)&&this.next()}prev(){this._slide($)}pause(e){e||(this._isPaused=!0),l.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(je(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=l.findOne(de,this._element);const t=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0)){if(!this._isSliding)return t===e?(this.pause(),void this.cycle()):void this._slide(e>t?H:$,this._items[e]);r.one(this._element,Je,()=>this.to(e))}}_getConfig(e){return e=h(h(h({},Ze),m.getDataAttributes(this._element)),"object"==typeof e?e:{}),L(Ge,e,ii),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=40)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?J:B)}_addEventListeners(){this._config.keyboard&&r.on(this._element,"keydown.bs.carousel",e=>this._keydown(e)),"hover"===this._config.pause&&(r.on(this._element,"mouseenter.bs.carousel",e=>this.pause(e)),r.on(this._element,"mouseleave.bs.carousel",e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=o=>this._pointerEvent&&("pen"===o.pointerType||"touch"===o.pointerType),t=o=>{e(o)?this.touchStartX=o.clientX:this._pointerEvent||(this.touchStartX=o.touches[0].clientX)},i=o=>{this.touchDeltaX=o.touches&&o.touches.length>1?0:o.touches[0].clientX-this.touchStartX},n=o=>{e(o)&&(this.touchDeltaX=o.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(a=>this.cycle(a),500+this._config.interval))};l.find(".carousel-item img",this._element).forEach(o=>{r.on(o,"dragstart.bs.carousel",a=>a.preventDefault())}),this._pointerEvent?(r.on(this._element,"pointerdown.bs.carousel",o=>t(o)),r.on(this._element,"pointerup.bs.carousel",o=>n(o)),this._element.classList.add("pointer-event")):(r.on(this._element,"touchstart.bs.carousel",o=>t(o)),r.on(this._element,"touchmove.bs.carousel",o=>i(o)),r.on(this._element,"touchend.bs.carousel",o=>n(o)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=si[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?l.find(".carousel-item",e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){return ze(this._items,t,e===H,this._config.wrap)}_triggerSlideEvent(e,t){const i=this._getItemIndex(e),n=this._getItemIndex(l.findOne(de,this._element));return r.trigger(this._element,"slide.bs.carousel",{relatedTarget:e,direction:t,from:n,to:i})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=l.findOne(".active",this._indicatorsElement);t.classList.remove(z),t.removeAttribute("aria-current");const i=l.find("[data-bs-target]",this._indicatorsElement);for(let n=0;n<i.length;n++)if(Number.parseInt(i[n].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){i[n].classList.add(z),i[n].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||l.findOne(de,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const i=this._directionToOrder(e),n=l.findOne(de,this._element),o=this._getItemIndex(n),a=t||this._getItemByOrder(i,n),c=this._getItemIndex(a),d=Boolean(this._interval),f=i===H,g=f?"carousel-item-start":"carousel-item-end",u=f?"carousel-item-next":"carousel-item-prev",b=this._orderToDirection(i);if(a&&a.classList.contains(z))return void(this._isSliding=!1);if(this._isSliding||this._triggerSlideEvent(a,b).defaultPrevented||!n||!a)return;this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(a),this._activeElement=a;const _=()=>{r.trigger(this._element,Je,{relatedTarget:a,direction:b,from:o,to:c})};this._element.classList.contains("slide")?(a.classList.add(u),n.classList.add(g),a.classList.add(g),this._queueCallback(()=>{a.classList.remove(g,u),a.classList.add(z),n.classList.remove(z,u,g),this._isSliding=!1,setTimeout(_,0)},n,!0)):(n.classList.remove(z),a.classList.add(z),this._isSliding=!1,_()),d&&this.cycle()}_directionToOrder(e){return[J,B].includes(e)?E()?e===B?$:H:e===B?H:$:e}_orderToDirection(e){return[H,$].includes(e)?E()?e===$?B:J:e===$?J:B:e}static carouselInterface(e,t){const i=S.getOrCreateInstance(e,t);let{_config:n}=i;"object"==typeof t&&(n=h(h({},n),t));const o="string"==typeof t?t:n.slide;if("number"==typeof t)i.to(t);else if("string"==typeof o){if(void 0===i[o])throw new TypeError(`No method named "${o}"`);i[o]()}else n.interval&&n.ride&&(i.pause(),i.cycle())}static jQueryInterface(e){return this.each(function(){S.carouselInterface(this,e)})}static dataApiClickHandler(e){const t=O(this);if(!t||!t.classList.contains("carousel"))return;const i=h(h({},m.getDataAttributes(t)),m.getDataAttributes(this)),n=this.getAttribute("data-bs-slide-to");n&&(i.interval=!1),S.carouselInterface(t,i),n&&S.getInstance(t).to(n),e.preventDefault()}}r.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",S.dataApiClickHandler),r.on(window,"load.bs.carousel.data-api",()=>{const s=l.find('[data-bs-ride="carousel"]');for(let e=0,t=s.length;e<t;e++)S.carouselInterface(s[e],S.getInstance(s[e]))}),T(S);const et="collapse",tt={toggle:!0,parent:null},ni={toggle:"boolean",parent:"(null|element)"},Ce="show",ue="collapse",ge="collapsing",it="collapsed",st=":scope .collapse .collapse",ke='[data-bs-toggle="collapse"]';class R extends k{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const i=l.find(ke);for(let n=0,o=i.length;n<o;n++){const a=i[n],c=ye(a),d=l.find(c).filter(f=>f===this._element);null!==c&&d.length&&(this._selector=c,this._triggerArray.push(a))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return tt}static get NAME(){return et}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const a=l.find(st,this._config.parent);t=l.find(".collapse.show, .collapse.collapsing",this._config.parent).filter(c=>!a.includes(c))}const i=l.findOne(this._selector);if(t.length){const a=t.find(c=>i!==c);if(e=a?R.getInstance(a):null,e&&e._isTransitioning)return}if(r.trigger(this._element,"show.bs.collapse").defaultPrevented)return;t.forEach(a=>{i!==a&&R.getOrCreateInstance(a,{toggle:!1}).hide(),e||Y.set(a,"bs.collapse",null)});const n=this._getDimension();this._element.classList.remove(ue),this._element.classList.add(ge),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ge),this._element.classList.add(ue,Ce),this._element.style[n]="",r.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[n]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||r.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,this._element.classList.add(ge),this._element.classList.remove(ue,Ce);const t=this._triggerArray.length;for(let i=0;i<t;i++){const n=this._triggerArray[i],o=O(n);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([n],!1)}this._isTransitioning=!0,this._element.style[e]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ge),this._element.classList.add(ue),r.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}_isShown(e=this._element){return e.classList.contains(Ce)}_getConfig(e){return(e=h(h(h({},tt),m.getDataAttributes(this._element)),e)).toggle=Boolean(e.toggle),e.parent=N(e.parent),L(et,e,ni),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=l.find(st,this._config.parent);l.find(ke,this._config.parent).filter(t=>!e.includes(t)).forEach(t=>{const i=O(t);i&&this._addAriaAndCollapsedClass([t],this._isShown(i))})}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach(i=>{t?i.classList.remove(it):i.classList.add(it),i.setAttribute("aria-expanded",t)})}static jQueryInterface(e){return this.each(function(){const t={};"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const i=R.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}})}}r.on(document,"click.bs.collapse.data-api",ke,function(s){("A"===s.target.tagName||s.delegateTarget&&"A"===s.delegateTarget.tagName)&&s.preventDefault();const e=ye(this);l.find(e).forEach(t=>{R.getOrCreateInstance(t,{toggle:!1}).toggle()})}),T(R);const Le="dropdown",Se="Escape",ot="ArrowUp",Oe="ArrowDown",oi=new RegExp("ArrowUp|ArrowDown|Escape"),rt="click.bs.dropdown.data-api",at="keydown.bs.dropdown.data-api",V="show",ee='[data-bs-toggle="dropdown"]',Ne=".dropdown-menu",ri=E()?"top-end":"top-start",ai=E()?"top-start":"top-end",li=E()?"bottom-end":"bottom-start",ci=E()?"bottom-start":"bottom-end",hi=E()?"left-start":"right-start",di=E()?"right-start":"left-start",ui={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},gi={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class w extends k{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return ui}static get DefaultType(){return gi}static get NAME(){return Le}toggle(){return this._isShown()?this.hide():this.show()}show(){if(M(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(r.trigger(this._element,"show.bs.dropdown",e).defaultPrevented)return;const t=w.getParentFromElement(this._element);this._inNavbar?m.setDataAttribute(this._menu,"popper","none"):this._createPopper(t),"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(i=>r.on(i,"mouseover",ce)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(V),this._element.classList.add(V),r.trigger(this._element,"shown.bs.dropdown",e)}hide(){!M(this._element)&&this._isShown(this._menu)&&this._completeHide({relatedTarget:this._element})}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){r.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>r.off(t,"mouseover",ce)),this._popper&&this._popper.destroy(),this._menu.classList.remove(V),this._element.classList.remove(V),this._element.setAttribute("aria-expanded","false"),m.removeDataAttribute(this._menu,"popper"),r.trigger(this._element,"hidden.bs.dropdown",e))}_getConfig(e){if(e=h(h(h({},this.constructor.Default),m.getDataAttributes(this._element)),e),L(Le,e,this.constructor.DefaultType),"object"==typeof e.reference&&!x(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${Le.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if(void 0===y)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:x(this._config.reference)?t=N(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const i=this._getPopperConfig(),n=i.modifiers.find(o=>"applyStyles"===o.name&&!1===o.enabled);this._popper=y.createPopper(t,this._menu,i),n&&m.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(V)}_getMenuElement(){return l.next(this._element,Ne)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains("dropend"))return hi;if(e.classList.contains("dropstart"))return di;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?ai:ri:t?ci:li}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),h(h({},e),"function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig)}_selectMenuItem({key:e,target:t}){const i=l.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(Q);i.length&&ze(i,t,e===Oe,!i.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=w.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const t=l.find(ee);for(let i=0,n=t.length;i<n;i++){const o=w.getInstance(t[i]);if(!o||!1===o._config.autoClose||!o._isShown())continue;const a={relatedTarget:o._element};if(e){const c=e.composedPath(),d=c.includes(o._menu);if(c.includes(o._element)||"inside"===o._config.autoClose&&!d||"outside"===o._config.autoClose&&d||o._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(a.clickEvent=e)}o._completeHide(a)}}static getParentFromElement(e){return O(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?"Space"===e.key||e.key!==Se&&(e.key!==Oe&&e.key!==ot||e.target.closest(Ne)):!oi.test(e.key))return;const t=this.classList.contains(V);if(!t&&e.key===Se||(e.preventDefault(),e.stopPropagation(),M(this)))return;const i=this.matches(ee)?this:l.prev(this,ee)[0],n=w.getOrCreateInstance(i);if(e.key!==Se)return e.key===ot||e.key===Oe?(t||n.show(),void n._selectMenuItem(e)):void(t&&"Space"!==e.key||w.clearMenus());n.hide()}}r.on(document,at,ee,w.dataApiKeydownHandler),r.on(document,at,Ne,w.dataApiKeydownHandler),r.on(document,rt,w.clearMenus),r.on(document,"keyup.bs.dropdown.data-api",w.clearMenus),r.on(document,rt,ee,function(s){s.preventDefault(),w.getOrCreateInstance(this).toggle()}),T(w);const lt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ct=".sticky-top";class De{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(lt,"paddingRight",t=>t+e),this._setElementAttributes(ct,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,i){const n=this.getWidth();this._applyManipulationCallback(e,o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+n)return;this._saveInitialAttribute(o,t);const a=window.getComputedStyle(o)[t];o.style[t]=`${i(Number.parseFloat(a))}px`})}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(lt,"paddingRight"),this._resetElementAttributes(ct,"marginRight")}_saveInitialAttribute(e,t){const i=e.style[t];i&&m.setDataAttribute(e,t,i)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,i=>{const n=m.getDataAttribute(i,t);void 0===n?i.style.removeProperty(t):(m.removeDataAttribute(i,t),i.style[t]=n)})}_applyManipulationCallback(e,t){x(e)?t(e):l.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const fi={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},pi={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},dt="mousedown.bs.backdrop";class ut{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&this._getElement(),this._getElement().classList.add("show"),this._emulateAnimation(()=>{j(e)})):j(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(()=>{this.dispose(),j(e)})):j(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_getConfig(e){return(e=h(h({},fi),"object"==typeof e?e:{})).rootElement=N(e.rootElement),L("backdrop",e,pi),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),r.on(this._getElement(),dt,()=>{j(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(r.off(this._element,dt),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){Be(e,this._getElement(),this._config.isAnimated)}}const _i={trapElement:null,autofocus:!0},mi={trapElement:"element",autofocus:"boolean"},gt=".bs.focustrap",ft="backward";class pt{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),r.off(document,gt),r.on(document,"focusin.bs.focustrap",i=>this._handleFocusin(i)),r.on(document,"keydown.tab.bs.focustrap",i=>this._handleKeydown(i)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,r.off(document,gt))}_handleFocusin(e){const{target:t}=e,{trapElement:i}=this._config;if(t===document||t===i||i.contains(t))return;const n=l.focusableChildren(i);0===n.length?i.focus():this._lastTabNavDirection===ft?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?ft:"forward")}_getConfig(e){return e=h(h({},_i),"object"==typeof e?e:{}),L("focustrap",e,mi),e}}const bt={backdrop:!0,keyboard:!0,focus:!0},bi={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},vt="hidden.bs.modal",yt="show.bs.modal",Et="resize.bs.modal",wt="click.dismiss.bs.modal",At="keydown.dismiss.bs.modal",Tt="mousedown.dismiss.bs.modal",Ct="modal-open",Ie="modal-static";class F extends k{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=l.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new De}static get Default(){return bt}static get NAME(){return"modal"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||r.trigger(this._element,yt,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(Ct),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),r.on(this._dialog,Tt,()=>{r.one(this._element,"mouseup.dismiss.bs.modal",t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning||r.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove("show"),r.off(this._element,wt),r.off(this._dialog,Tt),this._queueCallback(()=>this._hideModal(),this._element,e)}dispose(){[window,this._dialog].forEach(e=>r.off(e,".bs.modal")),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ut({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new pt({trapElement:this._element})}_getConfig(e){return e=h(h(h({},bt),m.getDataAttributes(this._element)),"object"==typeof e?e:{}),L("modal",e,bi),e}_showElement(e){const t=this._isAnimated(),i=l.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),this._element.classList.add("show"),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,r.trigger(this._element,"shown.bs.modal",{relatedTarget:e})},this._dialog,t)}_setEscapeEvent(){this._isShown?r.on(this._element,At,e=>{this._config.keyboard&&"Escape"===e.key?(e.preventDefault(),this.hide()):this._config.keyboard||"Escape"!==e.key||this._triggerBackdropTransition()}):r.off(this._element,At)}_setResizeEvent(){this._isShown?r.on(window,Et,()=>this._adjustDialog()):r.off(window,Et)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ct),this._resetAdjustments(),this._scrollBar.reset(),r.trigger(this._element,vt)})}_showBackdrop(e){r.on(this._element,wt,t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(r.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:e,scrollHeight:t,style:i}=this._element,n=t>document.documentElement.clientHeight;!n&&"hidden"===i.overflowY||e.contains(Ie)||(n||(i.overflowY="hidden"),e.add(Ie),this._queueCallback(()=>{e.remove(Ie),n||this._queueCallback(()=>{i.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),i=t>0;(!i&&e&&!E()||i&&!e&&E())&&(this._element.style.paddingLeft=`${t}px`),(i&&!e&&!E()||!i&&e&&E())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const i=F.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e](t)}})}}r.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(s){const e=O(this);["A","AREA"].includes(this.tagName)&&s.preventDefault(),r.one(e,yt,i=>{i.defaultPrevented||r.one(e,vt,()=>{Q(this)&&this.focus()})});const t=l.findOne(".modal.show");t&&F.getInstance(t).hide(),F.getOrCreateInstance(e).toggle(this)}),he(F),T(F);const Lt="offcanvas",St={backdrop:!0,keyboard:!0,scroll:!1},vi={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Nt=".offcanvas.show",Dt="hidden.bs.offcanvas";class I extends k{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return Lt}static get Default(){return St}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||r.trigger(this._element,"show.bs.offcanvas",{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new De).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),this._queueCallback(()=>{this._config.scroll||this._focustrap.activate(),r.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:e})},this._element,!0))}hide(){this._isShown&&(r.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide(),this._queueCallback(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new De).reset(),r.trigger(this._element,Dt)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e=h(h(h({},St),m.getDataAttributes(this._element)),"object"==typeof e?e:{}),L(Lt,e,vi),e}_initializeBackDrop(){return new ut({className:"offcanvas-backdrop",isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new pt({trapElement:this._element})}_addEventListeners(){r.on(this._element,"keydown.dismiss.bs.offcanvas",e=>{this._config.keyboard&&"Escape"===e.key&&this.hide()})}static jQueryInterface(e){return this.each(function(){const t=I.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}})}}r.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',function(s){const e=O(this);if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),M(this))return;r.one(e,Dt,()=>{Q(this)&&this.focus()});const t=l.findOne(Nt);t&&t!==e&&I.getInstance(t).hide(),I.getOrCreateInstance(e).toggle(this)}),r.on(window,"load.bs.offcanvas.data-api",()=>l.find(Nt).forEach(s=>I.getOrCreateInstance(s).show())),he(I),T(I);const yi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ei=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,wi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Ai=(s,e)=>{const t=s.nodeName.toLowerCase();if(e.includes(t))return!yi.has(t)||Boolean(Ei.test(s.nodeValue)||wi.test(s.nodeValue));const i=e.filter(n=>n instanceof RegExp);for(let n=0,o=i.length;n<o;n++)if(i[n].test(t))return!0;return!1};function It(s,e,t){if(!s.length)return s;if(t&&"function"==typeof t)return t(s);const i=(new window.DOMParser).parseFromString(s,"text/html"),n=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=n.length;o<a;o++){const c=n[o],d=c.nodeName.toLowerCase();if(!Object.keys(e).includes(d)){c.remove();continue}const f=[].concat(...c.attributes),g=[].concat(e["*"]||[],e[d]||[]);f.forEach(u=>{Ai(u,g)||c.removeAttribute(u.nodeName)})}return i.body.innerHTML}const Pt="tooltip",Ti=new Set(["sanitize","allowList","sanitizeFn"]),Ci={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},ki={AUTO:"auto",TOP:"top",RIGHT:E()?"left":"right",BOTTOM:"bottom",LEFT:E()?"right":"left"},Li={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Si={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},fe="fade",te="show",ie="show",xt=".tooltip-inner",jt="hide.bs.modal",pe="hover";class W extends k{constructor(e,t){if(void 0===y)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return Li}static get NAME(){return Pt}static get Event(){return Si}static get DefaultType(){return Ci}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(te))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),r.off(this._element.closest(".modal"),jt,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=r.trigger(this._element,this.constructor.Event.SHOW),t=He(this._element),i=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!i)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(xt).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const n=this.getTipElement(),o=(u=>{do{u+=Math.floor(1e6*Math.random())}while(document.getElementById(u));return u})(this.constructor.NAME);n.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this._config.animation&&n.classList.add(fe);const a="function"==typeof this._config.placement?this._config.placement.call(this,n,this._element):this._config.placement,c=this._getAttachment(a);this._addAttachmentClass(c);const{container:d}=this._config;Y.set(n,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(d.append(n),r.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=y.createPopper(this._element,n,this._getPopperConfig(c)),n.classList.add(te);const f=this._resolvePossibleFunction(this._config.customClass);f&&n.classList.add(...f.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(u=>{r.on(u,"mouseover",ce)});const g=this.tip.classList.contains(fe);this._queueCallback(()=>{const u=this._hoverState;this._hoverState=null,r.trigger(this._element,this.constructor.Event.SHOWN),"out"===u&&this._leave(null,this)},this.tip,g)}hide(){if(!this._popper)return;const e=this.getTipElement();if(r.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;e.classList.remove(te),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(i=>r.off(i,"mouseover",ce)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const t=this.tip.classList.contains(fe);this._queueCallback(()=>{this._isWithActiveTrigger()||(this._hoverState!==ie&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),r.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},this.tip,t),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(fe,te),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),xt)}_sanitizeAndSetContent(e,t,i){const n=l.findOne(i,e);t||!n?this.setElementContent(n,t):n.remove()}setElementContent(e,t){if(null!==e)return x(t)?(t=N(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=It(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"==typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:i=>this._handlePopperPlacementChange(i)}],onFirstUpdate:i=>{i.options.placement!==i.placement&&this._handlePopperPlacementChange(i)}};return h(h({},t),"function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig)}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return ki[e.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(e=>{if("click"===e)r.on(this._element,this.constructor.Event.CLICK,this._config.selector,t=>this.toggle(t));else if("manual"!==e){const i=e===pe?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;r.on(this._element,e===pe?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,this._config.selector,n=>this._enter(n)),r.on(this._element,i,this._config.selector,n=>this._leave(n))}}),this._hideModalHandler=()=>{this._element&&this.hide()},r.on(this._element.closest(".modal"),jt,this._hideModalHandler),this._config.selector?this._config=be(h({},this._config),{trigger:"manual",selector:""}):this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?"focus":pe]=!0),t.getTipElement().classList.contains(te)||t._hoverState===ie?t._hoverState=ie:(clearTimeout(t._timeout),t._hoverState=ie,t._config.delay&&t._config.delay.show?t._timeout=setTimeout(()=>{t._hoverState===ie&&t.show()},t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?"focus":pe]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState="out",t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(()=>{"out"===t._hoverState&&t.hide()},t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=m.getDataAttributes(this._element);return Object.keys(t).forEach(i=>{Ti.has(i)&&delete t[i]}),(e=h(h(h({},this.constructor.Default),t),"object"==typeof e&&e?e:{})).container=!1===e.container?document.body:N(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),L(Pt,e,this.constructor.DefaultType),e.sanitize&&(e.template=It(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),i=e.getAttribute("class").match(t);null!==i&&i.length>0&&i.map(n=>n.trim()).forEach(n=>e.classList.remove(n))}_getBasicClassPrefix(){return"bs-tooltip"}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each(function(){const t=W.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}T(W);const Oi=be(h({},W.Default),{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ni=be(h({},W.DefaultType),{content:"(string|element|function)"}),Di={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class _e extends W{static get Default(){return Oi}static get NAME(){return"popover"}static get Event(){return Di}static get DefaultType(){return Ni}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),".popover-header"),this._sanitizeAndSetContent(e,this._getContent(),".popover-body")}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return"bs-popover"}static jQueryInterface(e){return this.each(function(){const t=_e.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}T(_e);const $t="scrollspy",Bt={offset:10,method:"auto",target:""},Ii={offset:"number",method:"string",target:"(string|element)"},X="active",xe=".nav-link, .list-group-item, .dropdown-item",zt="position";class se extends k{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,r.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return Bt}static get NAME(){return $t}refresh(){const t="auto"===this._config.method?this._scrollElement===this._scrollElement.window?"offset":zt:this._config.method,i=t===zt?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),l.find(xe,this._config.target).map(n=>{const o=ye(n),a=o?l.findOne(o):null;if(a){const c=a.getBoundingClientRect();if(c.width||c.height)return[m[t](a).top+i,o]}return null}).filter(n=>n).sort((n,o)=>n[0]-o[0]).forEach(n=>{this._offsets.push(n[0]),this._targets.push(n[1])})}dispose(){r.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(e){return(e=h(h(h({},Bt),m.getDataAttributes(this._element)),"object"==typeof e&&e?e:{})).target=N(e.target)||document.documentElement,L($t,e,Ii),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),i=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=i){const n=this._targets[this._targets.length-1];this._activeTarget!==n&&this._activate(n)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let n=this._offsets.length;n--;)this._activeTarget!==this._targets[n]&&e>=this._offsets[n]&&(void 0===this._offsets[n+1]||e<this._offsets[n+1])&&this._activate(this._targets[n])}}_activate(e){this._activeTarget=e,this._clear();const t=xe.split(",").map(n=>`${n}[data-bs-target="${e}"],${n}[href="${e}"]`),i=l.findOne(t.join(","),this._config.target);i.classList.add(X),i.classList.contains("dropdown-item")?l.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add(X):l.parents(i,".nav, .list-group").forEach(n=>{l.prev(n,".nav-link, .list-group-item").forEach(o=>o.classList.add(X)),l.prev(n,".nav-item").forEach(o=>{l.children(o,".nav-link").forEach(a=>a.classList.add(X))})}),r.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:e})}_clear(){l.find(xe,this._config.target).filter(e=>e.classList.contains(X)).forEach(e=>e.classList.remove(X))}static jQueryInterface(e){return this.each(function(){const t=se.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}r.on(window,"load.bs.scrollspy.data-api",()=>{l.find('[data-bs-spy="scroll"]').forEach(s=>new se(s))}),T(se);const ne="active",Wt=".active",qt=":scope > li > .active";class oe extends k{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ne))return;let e;const t=O(this._element),i=this._element.closest(".nav, .list-group");i&&(e=l.find("UL"===i.nodeName||"OL"===i.nodeName?qt:Wt,i),e=e[e.length-1]);const n=e?r.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(r.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==n&&n.defaultPrevented)return;this._activate(this._element,i);const o=()=>{r.trigger(e,"hidden.bs.tab",{relatedTarget:this._element}),r.trigger(this._element,"shown.bs.tab",{relatedTarget:e})};t?this._activate(t,t.parentNode,o):o()}_activate(e,t,i){const n=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?l.children(t,Wt):l.find(qt,t))[0],o=i&&n&&n.classList.contains("fade"),a=()=>this._transitionComplete(e,n,i);n&&o?(n.classList.remove("show"),this._queueCallback(a,e,!0)):a()}_transitionComplete(e,t,i){if(t){t.classList.remove(ne);const o=l.findOne(":scope > .dropdown-menu .active",t.parentNode);o&&o.classList.remove(ne),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(ne),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),e.classList.contains("fade")&&e.classList.add("show");let n=e.parentNode;if(n&&"LI"===n.nodeName&&(n=n.parentNode),n&&n.classList.contains("dropdown-menu")){const o=e.closest(".dropdown");o&&l.find(".dropdown-toggle",o).forEach(a=>a.classList.add(ne)),e.setAttribute("aria-expanded",!0)}i&&i()}static jQueryInterface(e){return this.each(function(){const t=oe.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}})}}r.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',function(s){["A","AREA"].includes(this.tagName)&&s.preventDefault(),M(this)||oe.getOrCreateInstance(this).show()}),T(oe);const re="show",me="showing",Pi={animation:"boolean",autohide:"boolean",delay:"number"},Vt={animation:!0,autohide:!0,delay:5e3};class ae extends k{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Pi}static get Default(){return Vt}static get NAME(){return"toast"}show(){r.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove("hide"),this._element.classList.add(re),this._element.classList.add(me),this._queueCallback(()=>{this._element.classList.remove(me),r.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this._element.classList.contains(re)&&(r.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(me),this._queueCallback(()=>{this._element.classList.add("hide"),this._element.classList.remove(me),this._element.classList.remove(re),r.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this._element.classList.contains(re)&&this._element.classList.remove(re),super.dispose()}_getConfig(e){return e=h(h(h({},Vt),m.getDataAttributes(this._element)),"object"==typeof e&&e?e:{}),L("toast",e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();const i=e.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){r.on(this._element,"mouseover.bs.toast",e=>this._onInteraction(e,!0)),r.on(this._element,"mouseout.bs.toast",e=>this._onInteraction(e,!1)),r.on(this._element,"focusin.bs.toast",e=>this._onInteraction(e,!0)),r.on(this._element,"focusout.bs.toast",e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=ae.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}})}}return he(ae),T(ae),{Alert:G,Button:Z,Carousel:S,Collapse:R,Dropdown:w,Modal:F,Offcanvas:I,Popover:_e,ScrollSpy:se,Tab:oe,Toast:ae,Tooltip:W}});					  
							<time datetime="2024-01-31 14:08:04">January 31, 2024  at 2:08 p.m.</time>

					
				
			</div><!-- .entry-meta -->

		
		
		
	</header>

				<div class="excerpt">
			With a softer body and larger accessories, Mattel designed an updated Barbie doll with preschoolers...		</div>

	
		</div><!-- .article-info -->

		

		
	</article>





	<article class=" tag-search-view archive-view has-image post-7487878 post type-post status-publish format-standard has-post-thumbnail hentry category-new-york-jets category-nfl category-sports" data-id="7487878" data-timestamp="1706708757">

		
<figure>
			<a href="https://www.nydailynews.com/2024/01/31/jets-rex-hogan-assistant-general-manager-part-ways-nfl-draft-joe-douglas/" title="Jets and assistant general manager Rex Hogan mutually agree to part ways: source" class=""></a>
	
	<a href="https://www.nydailynews.com/2024/01/31/jets-rex-hogan-assistant-general-manager-part-ways-nfl-draft-joe-douglas/" title="Jets and assistant general manager Rex Hogan mutually agree to part ways: source">
		<div class="image-wrapper"><img alt="Nearly a month after their season ended, the Jets are making a change in the front office. The team and assistant general manager Rex Hogan have mutually agreed to part ways, according to sources." title="Nearly a month after their season ended, the Jets are making a change in the front office. The team and assistant general manager Rex Hogan have mutually agreed to part ways, according to sources." subtitle="" class="lazyload  size-feature_small" data-sizes="auto" data-src="https://www.nydailynews.com/wp-content/uploads/2024/01/AP23115650675613.jpg?w=132" data-srcset="https://www.nydailynews.com/wp-content/uploads/2024/01/AP23115650675613.jpg?w=132 140w" ></div>	</a>
</figure>

<div class="article-info">
				<h3 class="subscriber-only-tag">SUBSCRIBER ONLY</h3>
				<header>

		
		
		
	<h2 class="entry-title">

			<a class="article-title" href="https://www.nydailynews.com/2024/01/31/jets-rex-hogan-assistant-general-manager-part-ways-nfl-draft-joe-douglas/" title="Jets and assistant general manager Rex Hogan mutually agree to part ways: source">
	
				<span class="dfm-title premium">
			Jets and assistant general manager Rex Hogan mutually agree to part ways: source		</span>

			</a>
	
	</h2>
<!--		-->
		
		
		
			<div class="entry-meta">

									<div class="byline">By <a href="https://www.nydailynews.com/author/antwan-staley/">Antwan Staley</a></div>
				
				
					
                    
					  
							<time datetime="2024-01-31 13:47:02">January 31, 2024  at 1:47 p.m.</time>

					
				
			</div><!-- .entry-meta -->

		
		
		
	</header>

				<div class="excerpt">
			Nearly a month after their season ended, the Jets are making a change in the...		</div>

	
		</div><!-- .article-info -->

		

		
	</article>





	<article class=" tag-search-view archive-view has-image post-7486777 post type-post status-publish format-standard has-post-thumbnail hentry category-latest-headlines category-snyde" data-id="7486777" data-timestamp="1706707789">

		
<figure>
			<a href="https://www.nydailynews.com/2024/01/31/ted-danson-teases-cheers-reunion/" title="&#8216;Cheers&#8217; cast could reunite again after Emmys skit, says Ted Danson" class=""></a>
	
	<a href="https://www.nydailynews.com/2024/01/31/ted-danson-teases-cheers-reunion/" title="&#8216;Cheers&#8217; cast could reunite again after Emmys skit, says Ted Danson">
		<div class="image-wrapper"><img alt="Another project might be in the cards for the &quot;Cheers&quot; cast, following their reunion on the Emmys stage earlier this month." title="Another project might be in the cards for the &quot;Cheers&quot; cast, following their reunion on the Emmys stage earlier this month." subtitle="" class="lazyload  size-feature_small" data-sizes="auto" data-src="https://www.nydailynews.com/wp-content/uploads/2024/01/GettyImages-1974243189.jpg?w=132" data-srcset="https://www.nydailynews.com/wp-content/uploads/2024/01/GettyImages-1974243189.jpg?w=132 140w" ></div>	</a>
</figure>

<div class="article-info">
		<header>

		
		
		
	<h2 class="entry-title">

			<a class="article-title" href="https://www.nydailynews.com/2024/01/31/ted-danson-teases-cheers-reunion/" title="&#8216;Cheers&#8217; cast could reunite again after Emmys skit, says Ted Danson">
	
				<span class="dfm-title metered">
			&#8216;Cheers&#8217; cast open to another reunion after the Emmys		</span>

			</a>
	
	</h2>
<!--		-->
		
		
		
			<div class="entry-meta">

									<div class="byline">By <a href="https://www.nydailynews.com/author/jami-ganz/">Jami Ganz</a></div>
				
				
					
                    
					  
							<time datetime="2024-01-31 13:29:49">January 31, 2024  at 1:29 p.m.</time>

					
				
			</div><!-- .entry-meta -->

		
		
		
	</header>

				<div class="excerpt">
			Another project might be in the cards for the "Cheers" cast, following their reunion on...		</div>

	
		</div><!-- .article-info -->

		

		
	</article>





	<article class=" tag-search-view archive-view has-image post-7487227 post type-post status-publish format-standard has-post-thumbnail hentry category-crime-public-safety category-latest-headlines category-local-news category-news tag-nyc-crime location-city location-county location-manhattan location-new-york location-new-york-city location-new-york-county location-sub-county-region" data-id="7487227" data-timestamp="1706707424">

		
<figure>
			<a href="https://www.nydailynews.com/2024/01/31/nypd-brass-blasts-manhattan-migrant-cop-attackers-as-cowards/" title="NYPD brass blasts Manhattan migrant cop attackers as cowards" class=""></a>
	
	<a href="https://www.nydailynews.com/2024/01/31/nypd-brass-blasts-manhattan-migrant-cop-attackers-as-cowards/" title="NYPD brass blasts Manhattan migrant cop attackers as cowards">
		<div class="image-wrapper"><img alt="Four of the five young men taken into custody for the Saturday night brawl outside a migrant shelter on W. 42nd St. were released without bail." title="Four of the five young men taken into custody for the Saturday night brawl outside a migrant shelter on W. 42nd St. were released without bail." subtitle="" class="lazyload  size-feature_small" data-sizes="auto" data-src="https://www.nydailynews.com/wp-content/uploads/2024/01/Screenshot-14312.jpg?w=140" data-srcset="https://www.nydailynews.com/wp-content/uploads/2024/01/Screenshot-14312.jpg?w=140 140w" ></div>	</a>
</figure>

<div class="article-info">
		<header>

		
		
		
	<h2 class="entry-title">

			<a class="article-title" href="https://www.nydailynews.com/2024/01/31/nypd-brass-blasts-manhattan-migrant-cop-attackers-as-cowards/" title="NYPD brass blasts Manhattan migrant cop attackers as cowards">
	
				<span class="dfm-title metered">
			NYPD brass blasts Manhattan migrant cop attackers as cowards		</span>

			</a>
	
	</h2>
<!--		-->
		
		
		
			<div class="entry-meta">

									<div class="byline">By <a href="https://www.nydailynews.com/author/josephine-stratman/">Josephine Stratman</a></div>
				
				
					
                    
					  
							<time datetime="2024-01-31 13:53:34">January 31, 2024  at 1:53 p.m.</time>

					
				
			</div><!-- .entry-meta -->

		
		
		
	</header>

				<div class="excerpt">
			Four of the five young men taken into custody for the Saturday night brawl outside...		</div>

	
		</div><!-- .article-info -->

		

		
	</article>





	<article class=" tag-search-view archive-view has-image post-7487081 post type-post status-publish format-standard has-post-thumbnail hentry category-crime-public-safety category-national-news category-news" data-id="7487081" data-timestamp="1706707318">

		
<figure>
			<a href="https://www.nydailynews.com/2024/01/31/nj-shoprite-grocery-cart-one-legged-man-sttacked/" title="One-legged man attacked at N.J. ShopRite over grocery cart dispute" class=""></a>
	
	<a href="https://www.nydailynews.com/2024/01/31/nj-shoprite-grocery-cart-one-legged-man-sttacked/" title="One-legged man attacked at N.J. ShopRite over grocery cart dispute">
		<div class="image-wrapper"><img alt="Police in New Jersey arrested a man accused of assaulting a one-legged victim outside a Bayonne, N.J. ShopRite grocery store after the victim&#039;s cart allegedly hit his car." title="Police in New Jersey arrested a man accused of assaulting a one-legged victim outside a Bayonne, N.J. ShopRite grocery store after the victim&#039;s cart allegedly hit his car." subtitle="" class="lazyload  size-feature_small" data-sizes="auto" data-src="https://www.nydailynews.com/wp-content/uploads/2024/01/shutterstock_766836292.jpg?w=132" data-srcset="https://www.nydailynews.com/wp-content/uploads/2024/01/shutterstock_766836292.jpg?w=132 140w" ></div>	</a>
</figure>

<div class="article-info">
		<header>

		
		
		
	<h2 class="entry-title">

			<a class="article-title" href="https://www.nydailynews.com/2024/01/31/nj-shoprite-grocery-cart-one-legged-man-sttacked/" title="One-legged man attacked at N.J. ShopRite over grocery cart dispute">
	
				<span class="dfm-title metered">
			One-legged man attacked at N.J. ShopRite over grocery cart dispute		</span>

			</a>
	
	</h2>
<!--		-->
		
		
		
			<div class="entry-meta">

									<div class="byline">By <a href="https://www.nydailynews.com/author/brian-niemietz/">Brian Niemietz</a></div>
				
				
					
                    
					  
							<time datetime="2024-01-31 13:21:58">January 31, 2024  at 1:21 p.m.</time>

					
				
			</div><!-- .entry-meta -->

		
		
		
	</header>

				<div class="excerpt">
			Police in New Jersey arrested a man accused of assaulting a one-legged victim outside a...		</div>

	
		</div><!-- .article-info -->

		

		
	</article>





	<article class=" tag-search-view archive-view has-image post-7487582 post type-post status-publish format-standard has-post-thumbnail hentry category-mlb category-new-york-yankees category-sports" data-id="7487582" data-timestamp="1706706807">

		
<figure>
			<a href="https://www.nydailynews.com/2024/01/31/wandy-peralta-padres-yankees-relief-pitcher-report/" title="Wandy Peralta joining Padres after three seasons with Yankees: report" class=""></a>
	
	<a href="https://www.nydailynews.com/2024/01/31/wandy-peralta-padres-yankees-relief-pitcher-report/" title="Wandy Peralta joining Padres after three seasons with Yankees: report">
		<div class="image-wrapper"><img alt="The Padres have picked up another pitcher from the Yankees’ 2023 roster. The team has agreed to a deal with left-handed reliever Wandy Peralta, according to a report." title="The Padres have picked up another pitcher from the Yankees’ 2023 roster. The team has agreed to a deal with left-handed reliever Wandy Peralta, according to a report." subtitle="" class="lazyload  size-feature_small" data-sizes="auto" data-src="https://www.nydailynews.com/wp-content/uploads/2024/01/AP23250498412896.jpg?w=132" data-srcset="https://www.nydailynews.com/wp-content/uploads/2024/01/AP23250498412896.jpg?w=132 140w" ></div>	</a>
</figure>

<div class="article-info">
				<h3 class="subscriber-only-tag">SUBSCRIBER ONLY</h3>
				<header>

		
		
		
	<h2 class="entry-title">

			<a class="article-title" href="https://www.nydailynews.com/2024/01/31/wandy-peralta-padres-yankees-relief-pitcher-report/" title="Wandy Peralta joining Padres after three seasons with Yankees: report">
	
				<span class="dfm-title premium">
			Wandy Peralta joining Padres after three seasons with Yankees: report		</span>

			</a>
	
	</h2>
<!--		-->
		
		
		
			<div class="entry-meta">

									<div class="byline">By <a href="https://www.nydailynews.com/author/gary-phillips/">Gary Phillips</a></div>
				
				
					
                    
					  
							<time datetime="2024-01-31 13:14:15">January 31, 2024  at 1:14 p.m.</time>

					
				
			</div><!-- .entry-meta -->

		
		
		
	</header>

				<div class="excerpt">
			The Padres have picked up another pitcher from the Yankees’ 2023 roster. The team has...		</div>

	
		</div><!-- .article-info -->

		

		
	</article>





	<article class=" tag-search-view archive-view has-image post-7487291 post type-post status-publish format-standard has-post-thumbnail hentry category-latest-headlines category-snyde" data-id="7487291" data-timestamp="1706706274">

		
<figure>
			<a href="https://www.nydailynews.com/2024/01/31/taylor-swift-travis-kelce-nfl-popular/" title="NFL popularity with woman peaks due to Swift-Kelce romance: study" class=""></a>
	
	<a href="https://www.nydailynews.com/2024/01/31/taylor-swift-travis-kelce-nfl-popular/" title="NFL popularity with woman peaks due to Swift-Kelce romance: study">
		<div class="image-wrapper"><img alt="The NFL&#039;s popularity among young women is at an all-time high due to the Taylor Swift-Travis Kelce romance, according to market researchers." title="The NFL&#039;s popularity among young women is at an all-time high due to the Taylor Swift-Travis Kelce romance, according to market researchers." subtitle="" class="lazyload  size-feature_small" data-sizes="auto" data-src="https://www.nydailynews.com/wp-content/uploads/2024/01/GettyImages-1970250659.jpg?w=132" data-srcset="https://www.nydailynews.com/wp-content/uploads/2024/01/GettyImages-1970250659.jpg?w=132 140w" ></div>	</a>
</figure>

<div class="article-info">
		<header>

		
		
		
	<h2 class="entry-title">

			<a class="article-title" href="https://www.nydailynews.com/2024/01/31/taylor-swift-travis-kelce-nfl-popular/" title="NFL popularity with woman peaks due to Swift-Kelce romance: study">
	
				<span class="dfm-title metered">
			NFL popularity with woman peaks due to Swift-Kelce romance: study		</span>

			</a>
	
	</h2>
<!--		-->
		
		
		
			<div class="entry-meta">

									<div class="byline">By <a href="https://www.nydailynews.com/author/joseph-wilkinson/">Joseph Wilkinson</a></div>
				
				
					
                    
					  
							<time datetime="2024-01-31 13:04:34">January 31, 2024  at 1:04 p.m.</time>

					
				
			</div><!-- .entry-meta -->

		
		
		
	</header>

				<div class="excerpt">
			The NFL's popularity among young women is at an all-time high due to the Taylor...		</div>

	
		</div><!-- .article-info -->

		

		
	</article>



			
		</div>

		<aside class="sidebar-ad-container">

			
							<div class="dfp-ad dfp-cube1_rrail_atf" id="div-gpt-ad-cube1_rrail_atf" style="visibility:hidden">
					<div class="htlad-cube1_rrail_atf" data-unit='nydailynews.com/contests/cube1_rrail_atf' data-targeting=''></div>
				</div>
							<div class="dfp-ad dfp-cube2_rrail_mid" id="div-gpt-ad-cube2_rrail_mid" style="visibility:hidden">
					<div class="htlad-cube2_rrail_mid" data-unit='nydailynews.com/contests/cube2_rrail_mid' data-targeting=''></div>
				</div>
							<div class="dfp-ad dfp-cube3_rrail_lower" id="div-gpt-ad-cube3_rrail_lower" style="visibility:hidden">
					<div class="htlad-cube3_rrail_lower" data-unit='nydailynews.com/contests/cube3_rrail_lower' data-targeting=''></div>
				</div>
			
		</aside>

		<div class="dfm-page-bottom-flex-container"></div>
						<div class="dfp-ad dfp-bottom_leaderboard" id="div-gpt-ad-bottom_leaderboard" style="visibility:hidden">
					<div class="htlad-bottom_leaderboard" data-unit='nydailynews.com/contests/bottom_leaderboard' data-targeting=''></div>
				</div>
	</div>

</section>

	</main><!-- #main -->

	<div id="taboola-below-section-front-thumbnails"></div><script type="text/javascript">
			window._taboola = window._taboola || [];
			_taboola.push({
				mode: 'thumbnails-a',
				container: 'taboola-below-section-front-thumbnails',
				placement: 'Below Section Front Thumbnails',
				target_type: 'mix'
			});
		</script>
</div><!-- #primary -->


			
			</div><!-- #content -->

						<footer class="site-footer">

				<div class="main-footer-wrapper">

						<div class="footer-logo">

							<div class="custom-logo logo"><a href="https://www.nydailynews.com" aria-label="New York Daily News"><img src="https://www.nydailynews.com/wp-content/uploads/2023/08/New_York_Daily_News_nydredblack-1.svg" alt="New York Daily News"></a></div>
						</div>

					<ul id="footer-menu" class="footer-menus"><li id="menu-item-206" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-206"><a href="https://www.tribpub.com/">Tribune Publishing</a><span class="expander"><a href="#" class="icon-plus" aria-label="Click here to expand the menu"></a></span>

<ul class="footer-menu">
	<li id="menu-item-207" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-207"><a href="https://www.chicagotribune.com/">Chicago Tribune</a></li>
	<li id="menu-item-208" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-208"><a href="https://www.baltimoresun.com/">Baltimore Sun</a></li>
	<li id="menu-item-209" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-209"><a href="https://www.mcall.com/">The Morning Call</a></li>
	<li id="menu-item-210" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-210"><a href="https://www.dailypress.com/">The Daily Press</a></li>
	<li id="menu-item-211" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-211"><a href="https://www.pilotonline.com/">The Virginian Pilot</a></li>
	<li id="menu-item-212" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-212"><a href="https://www.orlandosentinel.com/">Orlando Sentinel</a></li>
	<li id="menu-item-213" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-213"><a href="https://www.sun-sentinel.com/">Sun-Sentinel</a></li>
	<li id="menu-item-214" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-214"><a href="https://www.courant.com/">Hartford Courant</a></li>
	<li id="menu-item-215" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-215"><a href="https://www.capitalgazette.com/">Capital Gazette</a></li>
	<li id="menu-item-216" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-216"><a href="https://www.studio1847.io/">Studio 1847</a></li>
</ul>
</li>
<li id="menu-item-217" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-217"><a href="https://www.tribpub.com/#who-we-are">Company Info</a><span class="expander"><a href="#" class="icon-plus" aria-label="Click here to expand the menu"></a></span>

<ul class="footer-menu">
	<li id="menu-item-219" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-219"><a href="https://www.nydailynews.com/about-us/">About Us</a></li>
	<li id="menu-item-220" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-220"><a href="https://careers.tribpub.com/">Careers</a></li>
	<li id="menu-item-222" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-222"><a href="https://www.nydailynews.com/help-center/">Help Center</a></li>
	<li id="menu-item-224" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-224"><a href="https://www.nydailynews.com/manage-web-notifications/">Manage Web Notifications</a></li>
	<li id="menu-item-225" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-225"><a href="http://placeanad.nydailynews.com/">Place an ad</a></li>
	<li id="menu-item-227" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-227"><a href="https://www.nydailynews.com/media-kit/">Media Kit</a></li>
	<li id="menu-item-228" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-228"><a href="https://www.tribpub.com/privacy-policy/">Privacy Policy</a></li>
	<li id="menu-item-230" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-230"><a href="https://www.nydailynews.com/sitemap/">Site Map</a></li>
</ul>
</li>
<li id="menu-item-231" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-231"><a href="https://myaccount.nydailynews.com/850/home">Subscriber Services</a><span class="expander"><a href="#" class="icon-plus" aria-label="Click here to expand the menu"></a></span>

<ul class="footer-menu">
	<li id="menu-item-232" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-232"><a href="https://nydailynews.newspapers.com/">Archives</a></li>
</ul>
</li>
<div class="mng-follow"><li class="footer-follow"></li>
							<a href="https://mktops.nydailynews.com/subscriptions/land-flash-sale-lightning-bolt-23/indexD.html?market=ny&#038;source=index&#038;g2i_source=SB&#038;g2i_medium=sub-nav&#038;g2i_campaign=FD22" class="subscribe-button" type="subscribe">
					<span>Subscribe Now</span>				</a>

				</div></ul>
				</div>

				<div class="dfm-site-info">

								<div class="colophon">

					<div class="footer-flex-menu-wrap"><ul id="footer-bottom-menu" class="menu"><li id="menu-item-233" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-233"><a href="https://www.tribpub.com/subscriber-terms-and-conditions/">Subscriber Terms and Conditions</a></li>
<li id="menu-item-234" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-234"><a href="https://www.tribpub.com/cookie-policy/">Cookie Policy</a></li>
<li id="menu-item-7096214" class="cookie-policy-click menu-item menu-item-type-custom menu-item-object-custom menu-item-7096214"><a href="#">Cookie Preferences</a></li>
<li id="menu-item-235" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-235"><a href="https://www.tribpub.com/privacy-policy/#California_Notice_at_Collection">California Notice at Collection</a></li>
<li id="menu-item-236" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-236"><a href="https://www.tribpub.com/privacy-policy/#Notice_of_Financial_Incentive">CA Notice of Financial Incentive</a></li>
<li id="menu-item-237" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-237"><a href="https://my.datasubject.com/16A1AnRt2Fn8i1unj/23233">Do Not Sell/Share My Personal Information</a></li>
</ul>	<div class="footer-copyright-notice">
		<p>Copyright &copy; 2024 New York Daily News</p>
	</div>	</div>
			</div>
			
				</div>

			</footer><!-- .site-footer -->
			
			</div><!-- #page -->

			<script>
		(function(w) {
			if ( null !== document.cookie.match(/^(.*;)?\s*auth0_sub\s*=\s*[^;]+(.*)?$/) ) {
				w.PARSELY = {
	                autotrack: false,
	                onReady: function() {
	                    PARSELY.updateDefaults({
	                        data: {
	                            plan: "subscriber"
	                        }
	                    });
	                    PARSELY.beacon.trackPageView();
	                }
            	};
			}
		})(window);
        </script><div id="mobile-adhesion" class="closed"><button class="close-mobile-adhesion" onclick="closeMobileAdhesionAd()" onkeydown="keyboardHandler(event)">Close</button>
			<script>
				function closeMobileAdhesionAd() {
				    document.getElementById("mobile-adhesion").classList.add("closed");
				}

				function keyboardHandler(e) {
				    var keycode = ( e.keyCode ? e.keyCode : e.which );
				    if (keycode == "13") {
						closeMobileAdhesionAd();
					}
				}
			</script>
							<div class="dfp-ad dfp-mobile_adhesion" id="div-gpt-ad-mobile_adhesion" style="visibility:hidden">
					<div class="htlad-mobile_adhesion" data-unit='nydailynews.com/contests/mobile_adhesion' data-targeting=''></div>
				</div></div><script type='text/javascript'>
/* <![CDATA[ */
if ( 'undefined' !== typeof _snaq ) {
_snaq.push(['setAuthor', '']);
_snaq.push(['setArticlePublishTime','']);
_snaq.push(['setSection', 'Other']);
}
/* ]]> */
</script>
<script type="text/javascript">
			  		window._taboola = window._taboola || [];
			  		_taboola.push({flush: true});
					</script><style id='global-styles-inline-css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}body { margin: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}a:where(:not(.wp-element-button)){text-decoration: underline;}.wp-element-button, .wp-block-button__link{background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;line-height: inherit;padding: calc(0.667em + 2px) calc(1.333em + 2px);text-decoration: none;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
</style>
<script type="text/javascript" src="https://www.nydailynews.com/_static/??-eJyVjcEOwjAMQ3+ILkxDQxwQ3zLaMKVq0ypJQfw9ncRlNzjafrbhVZ0vbMgGNbWVWEHJ0O2ECd0bI6gtRh7i3h4y8RD1AH2L2KcWUDcmkBo8kUORLaolvR+UUmdQ7JeS4IqdXayIk8ZG+d+vL37L1/F8nOfTNE6X+AFXvVqo" ></script><script src="https://www.nydailynews.com/wp-includes/js/dist/vendor/react.min.js?ver=18.2.0" id="react-js"></script>
<script type="text/javascript" src="https://www.nydailynews.com/wp-includes/js/dist/hooks.min.js?m=1706643140g" ></script><script src="https://www.nydailynews.com/wp-includes/js/dist/i18n.min.js?ver=7701b0c3857f914212ef" id="wp-i18n-js"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script type="text/javascript" src="https://www.nydailynews.com/wp-includes/js/dist/url.min.js?m=1706643140g" ></script><script src="https://www.nydailynews.com/wp-includes/js/dist/api-fetch.min.js?ver=0fa4dabf8bf2c7adf21a" id="wp-api-fetch-js"></script>
<script id="wp-api-fetch-js-after">
wp.apiFetch.use( wp.apiFetch.createRootURLMiddleware( "https://www.nydailynews.com/wp-json/" ) );
wp.apiFetch.nonceMiddleware = wp.apiFetch.createNonceMiddleware( "5813b749fc" );
wp.apiFetch.use( wp.apiFetch.nonceMiddleware );
wp.apiFetch.use( wp.apiFetch.mediaUploadMiddleware );
wp.apiFetch.nonceEndpoint = "https://www.nydailynews.com/wp-admin/admin-ajax.php?action=rest-nonce";
</script>
<script src="https://www.nydailynews.com/wp-includes/js/dist/vendor/react-dom.min.js?ver=18.2.0" id="react-dom-js"></script>
<script type="text/javascript" src="https://www.nydailynews.com/wp-includes/js/dist/dom-ready.min.js?m=1706643140g" ></script><script src="https://www.nydailynews.com/wp-includes/js/dist/a11y.min.js?ver=7032343a947cfccf5608" id="wp-a11y-js"></script>
<script type="text/javascript" src="https://www.nydailynews.com/_static/??-eJx9zEEKgCAQRuELZVMktYrOIvpDyoxZY3T9Vu3C9ft49BQTs+c7QCkphaiVAsoF7ypCLzH3STv6ZYc0O9S7ArNX4bZjCHJtmqhGd8d8PAbn7b7hJuu4DPNsp9EO6QVdSEnj" ></script><script src="https://www.nydailynews.com/wp-includes/js/dist/keycodes.min.js?ver=3460bd0fac9859d6886c" id="wp-keycodes-js"></script>
<script type="text/javascript" src="https://www.nydailynews.com/_static/??/wp-includes/js/dist/priority-queue.min.js,/wp-includes/js/dist/compose.min.js?m=1706643140j" ></script><script src="https://www.nydailynews.com/wp-includes/js/dist/vendor/moment.min.js?ver=2.29.4" id="moment-js"></script>
<script id="moment-js-after">
moment.updateLocale( 'en_US', {"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"week":{"dow":1},"longDateFormat":{"LT":"g:i a","LTS":null,"L":null,"LL":"F j, Y","LLL":"F j, Y g:i a","LLLL":null}} );
</script>
<script src="https://www.nydailynews.com/wp-includes/js/dist/date.min.js?ver=936c461ad5dce9c2c8ea" id="wp-date-js"></script>
<script id="wp-date-js-after">
wp.date.setSettings( {"l10n":{"locale":"en_US","months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"meridiem":{"am":"am","pm":"pm","AM":"AM","PM":"PM"},"relative":{"future":"%s from now","past":"%s ago","s":"a second","ss":"%d seconds","m":"a minute","mm":"%d minutes","h":"an hour","hh":"%d hours","d":"a day","dd":"%d days","M":"a month","MM":"%d months","y":"a year","yy":"%d years"},"startOfWeek":1},"formats":{"time":"g:i a","date":"F j, Y","datetime":"F j, Y g:i a","datetimeAbbreviated":"M j, Y g:i a"},"timezone":{"offset":-5,"string":"America\/New_York","abbr":"EST"}} );
</script>
<script type="text/javascript" src="https://www.nydailynews.com/_static/??-eJyFyjEOgCAMAMAPidVocDK+hUgTSwAJLejzdXA0evPBkRTF1ReLDI7BEgtsErzCKCSE3AaKreMG3mbKFO5V/1s1gsok+o4ZbTlV3otQxGcuYe6nTutx6MfOXfk0QG8=" ></script><script src="https://www.nydailynews.com/wp-includes/js/dist/data.min.js?ver=dc5f255634f3da29c8d5" id="wp-data-js"></script>
<script id="wp-data-js-after">
( function() {
	var userId = 0;
	var storageKey = "WP_DATA_USER_" + userId;
	wp.data
		.use( wp.data.plugins.persistence, { storageKey: storageKey } );
} )();
</script>
<script src="https://www.nydailynews.com/wp-includes/js/dist/rich-text.min.js?ver=6222504ebedf0627981b" id="wp-rich-text-js"></script>
<script type="text/javascript" src="https://www.nydailynews.com/wp-includes/js/dist/warning.min.js?m=1706643140g" ></script><script src="https://www.nydailynews.com/wp-includes/js/dist/components.min.js?ver=387d6480ace3103ccd8b" id="wp-components-js"></script>
<script type="text/javascript" src="https://www.nydailynews.com/_static/??-eJyVzUEKg0AMQNELOaZFZuim9CzipBrJJIOJFT29dOGum24/PD5sNQwqjuJQeR1JDIqMYXKG3gzdIJP51ULRbG0haWdr4Ietk7rKm5jhg5J1gUqDrwt+03+Q+2M3OvD6vcrznh7pFmOK3XwCkDtFEw==" ></script><script id="wp-parsely-loader-js-before">
window.wpParselySiteId = 'nydailynews.com';
</script>
<script src="https://www.nydailynews.com/wp-content/mu-plugins/wp-parsely-3.13/build/loader.js?ver=f5c2d06f6755fda3f6d4" id="wp-parsely-loader-js"></script>
<script data-parsely-site="nydailynews.com" src="https://cdn.parsely.com/keys/nydailynews.com/p.js?ver=3.13.2" id="parsely-cfg"></script>
<script src="https://www.nydailynews.com/wp-content/themes/wp-mason/static/js/ads.js?ver=1.0" id="can-run-ads-js"></script>
<script type="text/javascript" src="https://www.nydailynews.com/_static/??-eJydzkEKwjAQQNELmU4txa7Es8QkbVMzM6EzqXh7C7pQELFuPzz4cM3GMWkgBR0DBgErElRA1Gp0MAk4RmSq3FjoUmGkapId/OAyp1sfU5ItCIOVMge/xPNsSb/QtaAVpheceGATcTBWdf5EcypDJAHfo7HeIHt542t7HG3H0tASfeA/ZGZdr5/whMd9Vx+6pq3bbroD1W6aIw==" ></script><script defer src="https://stats.wp.com/e-202405.js" id="jetpack-stats-js"></script>
<script id="jetpack-stats-js-after">
_stq = window._stq || [];
_stq.push([ "view", JSON.parse("{\"v\":\"ext\",\"blog\":\"208786248\",\"post\":\"0\",\"tz\":\"-5\",\"srv\":\"www.nydailynews.com\",\"hp\":\"vip\",\"j\":\"1:13.0\"}") ]);
_stq.push([ "clickTrackerInit", "208786248", "0" ]);
</script>
<script async src="https://cdn.p-n.io/pushly-sdk.min.js?domain_key=P84EtrLeBzpvF7hAQl6MIZdxALcHHTiI6M12&amp;ver=6.4.3" id="pushly-sdk-js"></script>

			</body>
            </html>
			