<!DOCTYPE html>
<html>
  <head>
    <script nonce="PCAftFwqLtvy10CIXQ2J1TKYkA+LDo"
            src="https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/js/analytics_library.js">
    </script>
  </head>
  <body>
    <script nonce="PCAftFwqLtvy10CIXQ2J1TKYkA+LDo">
      window['dataLayer'] = window['dataLayer'] || [];
      if (window.AnalyticsLibrary) {
        const analyticsLibrary = new AnalyticsLibrary();
        analyticsLibrary.notifyIframeReady(true);
      }
    </script>
  </body>
</html>lter-match-count"> (<mark>'+
a+"</mark>)</span>")};var FZ="onpointerover"in window?"pointerover":"mouseover",GZ=function(a){const b=0<a.querySelectorAll(".devsite-nav-item").length,c=document.querySelector("#devsite-hamburger-menu");c&&(b?c.removeAttribute("visually-hidden"):_ds.D(a,"visually-hidden","",c))},OZ=function(a){a.eventHandler.listen(a,"click",b=>void HZ(a,b));a.eventHandler.listen(a,"keypress",b=>{13===b.keyCode&&HZ(a,b)});a.eventHandler.listen(a,[FZ,"focusin"],b=>void IZ(a,b));a.eventHandler.listen(document.body,"devsite-sitemask-hidden",
()=>{a.h&&(JZ(a,"_book")?a.removeAttribute("top-level-nav"):_ds.D(a,"top-level-nav",""))});a.eventHandler.listen(document.body,"devsite-page-loaded",()=>void a.ua.Qa());a.eventHandler.listen(a,"devsite-content-updated",()=>{a.ua.Qa()});a.eventHandler.listen(a,"scroll",()=>{_ds.D(a,"user-scrolled","")});a.eventHandler.listen(a.Rb,"click",()=>{KZ(a)});a.g&&(a.eventHandler.listen(a.g,"keyup",()=>void a.va.Qa()),a.eventHandler.listen(a.g,"focus",()=>void LZ(a,"focus")));a.ma&&a.eventHandler.listen(a.ma,
["click","keydown"],b=>{if("click"===b.type||13===b.keyCode||27===b.keyCode){a.g&&(a.g.value="",a.g.focus());let c;null==(c=a.ma)||c.classList.add("hidden");MZ(a);NZ(a);LZ(a,b.type)}})},QZ=function(a,b=a,c=!0){b=Array.from(b.querySelectorAll(".devsite-nav-title"));a.ea=new Set(b);if(!_ds.F().hash&&c)PZ(a,a.ea);else{c=new _ds.dL;for(const d of a.ea)_ds.cL(c,d)}},RZ=async function(a){const b=await _ds.v();for(const c of a.ea)b.unregisterIntersectionForElement(c)},HZ=function(a,b){if(!b.defaultPrevented){var c=
b.target;"devsite-close-nav"===c.getAttribute("id")&&(b.preventDefault(),b.stopPropagation(),a.scrollTop=0,a.hasAttribute("top-level-nav")?a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})):_ds.D(a,"top-level-nav",""));if(c.hasAttribute("menu")){var d=c.getAttribute("menu");d&&JZ(a,d)&&(b.preventDefault(),b.stopPropagation(),a.scrollTop=0,a.removeAttribute("top-level-nav"))}var e=c.closest(".devsite-expandable-nav");if(e&&(d=c.closest(".devsite-nav-title, .devsite-nav-toggle"))){let f=
b.target,g,h;if(!(null==(g=f)?0:null==(h=g.closest(".devsite-nav-title"))?0:h.hasAttribute("href"))){for(b="click"===b.type||"touchend"===b.type;f&&f!==e;){if(f.classList.contains("devsite-nav-title-no-path")&&b){f.blur();break}f=f.parentNode}e.querySelector(".devsite-nav-section")&&(b=e.classList.toggle("expanded"),(e=e.querySelector(".devsite-nav-title"))&&_ds.D(a,"aria-expanded",`${b}`,e))}if(d.matches(".devsite-nav-toggle"))return}c.closest(".devsite-nav-title-no-path")||(a.h&&(d=a.h.querySelector("[menu=_book]"))&&
d.contains(c)&&a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})),(c=c.closest("a.devsite-nav-title"))&&!c.classList.contains("devsite-nav-has-children")&&a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})))}},IZ=function(a,b){b.defaultPrevented||(b=_ds.sk(b.target,c=>c instanceof HTMLAnchorElement&&c.hasAttribute("href")||c===a,!0),b!==a&&_ds.me(b,_ds.ie(_ds.nl(b.href).href)))},KZ=async function(a){var b=document.documentElement.scrollHeight-document.documentElement.clientHeight;
const c=b?document.documentElement.scrollTop/b:0;_ds.Im(a.eventHandler,a,_ds.ph,()=>{a.removeAttribute("animatable");a.background.removeAttribute("animatable");a.o.removeAttribute("animatable")});_ds.D(a,"animatable","");b=_ds.qe(a.j`animatable`);b(a.background,"animatable","");b(a.o,"animatable","");a.hasAttribute("collapsed")?(_ds.D(a,"aria-expanded","true",a.Rb),_ds.D(a,"aria-label","\u30b5\u30a4\u30c9 \u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3057\u306a\u3044",a.Rb),_ds.D(a,
"data-title","\u30b5\u30a4\u30c9 \u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3057\u306a\u3044",a.Rb),a.removeAttribute("collapsed"),SZ(a,"Expanded book nav")):(a.Rb.removeAttribute("aria-expanded"),_ds.D(a,"aria-label","\u30b5\u30a4\u30c9 \u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a",a.Rb),_ds.D(a,"data-title","\u30b5\u30a4\u30c9 \u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a",a.Rb),_ds.D(a,"collapsed",""),SZ(a,"Collapsed book nav"));await _ds.ul();
b=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.documentElement.scrollTop=Math.round(c*b)},LZ=function(a,b){a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",action:b,label:"focus"===b?"devsite-book-nav-filter input":"devsite-book-nav-filter filter-clear-button"},bubbles:!0}))},TZ=function(a){a.oa=Array.from(a.querySelectorAll(".devsite-mobile-nav-bottom .devsite-nav-list[menu=_book] .devsite-nav-item:not(.devsite-nav-heading)"))},
VZ=function(a){const b=_ds.F().searchParams.get("nf");a.g&&b&&(a.g.value=b,UZ(a))},UZ=function(a){if(a.oa.length){MZ(a);NZ(a);var b,c,d=null==(b=a.g)?void 0:null==(c=b.value)?void 0:c.trim().toLowerCase();if(d){var e;null==(e=a.ma)||e.classList.remove("hidden");for(const g of a.oa){c=g.querySelectorAll(".devsite-nav-text");b=g.classList.contains("devsite-nav-expandable");var f=e=!1;a=0;let h,k;if(d&&b&&(null==(h=g.querySelector(".devsite-nav-text"))?0:null==(k=h.textContent)?0:k.toLowerCase().includes(d)))f=
e=!0;else for(const l of c){let m;d&&(null==(m=l.textContent)?0:m.toLowerCase().includes(d))&&(e=!0,++a)}if(!0===e){g.classList.remove("hidden");if(f){c=Array.from(g.querySelectorAll(".devsite-nav-item"));for(const l of c){l.classList.remove("hidden");let m;d&&(null==(m=l.textContent)?0:m.toLowerCase().includes(d))&&++a}}c=void 0;(f=g.querySelector(".devsite-nav-text"))&&(e=null==(c=f.textContent)?void 0:c.replace(new RegExp(`(${d})`,"ig"),"<mark>$1</mark>"))&&_ds.oe(f,_ds.He(e))}b&&0<a&&(b=g.querySelector(".devsite-nav-text"))&&
(a=_ds.Q(EZ,{Rw:a}),b.appendChild(a))}}else null==(f=a.ma)||f.classList.add("hidden")}},MZ=function(a){for(const b of a.oa){let c;b.classList.toggle("hidden",!(null==(c=a.g)||!c.value))}},NZ=function(a){if(a.querySelector("mark")){var b=[...a.querySelectorAll(".devsite-nav-text > .devsite-nav-filter-match-count")];for(const c of b)c.remove();a=[...a.querySelectorAll(".devsite-nav-text > mark")];for(const c of a){a=c.parentElement;let d;b=null==(d=a)?void 0:d.textContent;a&&b&&_ds.oe(a,_ds.He(b))}}},
PZ=async function(a,b){if(a.v){var c=await _ds.v(),d=new _ds.dL,e=f=>{f=f.target;_ds.cL(d,f);a.ea.delete(f);c.unregisterIntersectionForElement(f)};for(const f of b)try{c.registerIntersectionForElement(f,e)}catch(g){e({target:f})}}},JZ=function(a,b){let c=!1;if(a.h)for(const d of a.h.querySelectorAll("[menu]"))d.getAttribute("menu")===b?(d.removeAttribute("hidden"),c=!0):_ds.D(a,"hidden","",d);return c},WZ=function(a,b=a){b||(b=a);for(const c of b.querySelectorAll(".devsite-nav-active"))c.classList.remove("devsite-nav-active");
a=_ds.Cl(_ds.F().pathname);a=`[href="${_ds.nl(a).href}"], [href="${a}"],
        [alt-paths~="${a}"]`;for(const c of b.querySelectorAll(a))c.classList.add("devsite-nav-active")},XZ=function(a,b=a){b||(b=a);if(a=b.querySelector(".devsite-mobile-nav-bottom"))for(a=a.querySelector(".devsite-nav-active");a&&a.parentElement&&a.parentElement!==b;)a.matches(".devsite-expandable-nav:not(.expanded)")&&a.classList.add("expanded"),a=a.parentElement},ZZ=async function(a){a.v&&(a.removeAttribute("user-scrolled"),await _ds.ul(),await YZ(a),await a.xa,await _ds.v(),await _ds.ul(),await YZ(a))},
YZ=async function(a){if(a.v&&a.h){await _ds.v();var b=a.h.querySelector(".devsite-nav-active");b&&(a.hasAttribute("user-scrolled")||await $Z(a,b))}},$Z=async function(a,b){if(a.v){var c=a.hasAttribute("user-scrolled");a.scrollTop=_ds.Wm(b,a,!0).y;await _ds.ul();c&&_ds.D(a,"user-scrolled","")}},SZ=function(a,b){a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",action:"click",label:b},bubbles:!0}))},a_=class extends _ds.E{static get observedAttributes(){return["collapsed",
"fixed","hidden"]}constructor(){super();this.v=!1;this.ma=this.g=this.qa=this.h=null;this.oa=[];this.eventHandler=new _ds.G;this.ra=()=>{};this.ea=new Set;_ds.$i(this,this.j`animatable`,this.j`aria-expanded`,this.j`aria-label`,this.j`collapsed`,this.j`data-title`,this.j`fixed`,this.j`has-book-nav`,this.j`hidden`,this.j`top-level-nav`,this.j`user-scrolled`,this.j`visually-hidden`);this.background=document.createElement("div");this.background.classList.add("devsite-book-nav-bg");this.Rb=_ds.Q(CZ);this.o=
_ds.Q(DZ);this.xa=new Promise(a=>{this.ra=a});this.ua=new _ds.Fm(()=>{this.v&&GZ(this)},20);this.va=new _ds.Fm(()=>{UZ(this)},20)}async connectedCallback(){this.v=!0;_ds.bk(this.background,this);this.hasAttribute("hidden")&&(_ds.D(this,"hidden","",this.Rb),_ds.D(this,"hidden","",this.o));let a;null==(a=this.parentElement)||a.insertBefore(this.Rb,this.nextSibling);_ds.D(this,"aria-label","\u30b5\u30a4\u30c9 \u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3057\u306a\u3044",this.Rb);_ds.D(this,
"data-title","\u30b5\u30a4\u30c9 \u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3057\u306a\u3044",this.Rb);_ds.D(this,"aria-expanded","true",this.Rb);let b;null==(b=this.parentElement)||b.insertBefore(this.o,this.nextSibling);if(this.qa=this.querySelector(".devsite-book-nav-filter"))this.g=this.qa.querySelector("input[type=text]"),this.ma=this.qa.querySelector(".filter-clear-button"),TZ(this),VZ(this);GZ(this);OZ(this);await this.init();QZ(this)}disconnectedCallback(){this.v=!1;_ds.I(this.eventHandler);
RZ(this);this.ea.clear();var a=document.querySelector("#devsite-hamburger-menu");a&&_ds.D(this,"visually-hidden","",a);a=[this.background,this.Rb,this.o];for(const b of a)b&&_ds.dk(b);this.removeAttribute("animatable");this.background.removeAttribute("animatable");this.o.removeAttribute("animatable");this.o.style.removeProperty("--devsite-js-book-nav-scrollbar-width")}attributeChangedCallback(a){"hidden"===a&&this.dispatchEvent(new CustomEvent(this.hasAttribute("hidden")?"devsite-element-hidden":
"devsite-element-visible",{bubbles:!0}));if("hidden"===a||"collapsed"===a){var b=document.querySelector(".devsite-main-content");b&&(this.hasAttribute("collapsed")||this.hasAttribute("hidden")?b.removeAttribute("has-book-nav"):_ds.D(this,"has-book-nav","",b))}if("fixed"===a||"hidden"===a||"collapsed"===a){b=this.hasAttribute(a);const c=[this.background,this.Rb,this.o];for(const d of c)d&&(b?_ds.D(this,a,"",d):d.removeAttribute(a))}"fixed"===a&&this.ra()}async init(a=!0){if(this.v){this.o.style.setProperty("--devsite-js-book-nav-scrollbar-width",
`${this.offsetWidth-this.clientWidth}px`);this.h=this.querySelector(".devsite-mobile-nav-bottom");_ds.D(this,"top-level-nav","");this.h&&this.h.querySelector("[menu=_book]")&&this.removeAttribute("top-level-nav");0===this.children.length&&_ds.D(this,"hidden","");if(this.background)for(const b of["hidden","fixed","animatable"])this.hasAttribute(b)&&_ds.D(this,b,"",this.background);!this.hasAttribute("hidden")&&a?(WZ(this),XZ(this),await ZZ(this)):(await _ds.ul(),await YZ(this))}}async Sb(a){a?(a=a.querySelector("nav")||
null,WZ(this,a),XZ(this,a),a&&(await RZ(this),this.ea.clear(),QZ(this,a,!1)),_ds.bj(this,this.querySelector("nav"),a)):_ds.ak(this);TZ(this);if(this.g){this.g.value="";let b;null==(b=this.ma)||b.classList.add("hidden");VZ(this)}await _ds.ul();await this.init(!1)}};a_.prototype.updateContent=a_.prototype.Sb;a_.prototype.attributeChangedCallback=a_.prototype.attributeChangedCallback;a_.prototype.disconnectedCallback=a_.prototype.disconnectedCallback;a_.prototype.connectedCallback=a_.prototype.connectedCallback;try{customElements.define("devsite-book-nav",a_)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteBookNav",a)};})(_ds_www);