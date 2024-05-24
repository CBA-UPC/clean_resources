(function(_ds){var window=this;var Via=function(a){const b=a.wy,c=a.ed,d=a.Vu;a=a.Bw;let e;e='<ul class="devsite-nav-list"><li class="devsite-nav-item devsite-nav-heading devsite-toc-toggle"><span class="devsite-nav-title" role="heading" aria-level="2"><span class="devsite-nav-text">On this page</span></span>';c&&(e=e+'<button type="button" title="'+_ds.zH("Expand/collapse contents"),e+='" class="devsite-nav-show-all button-transparent material-icons"></button>');e+="</li>";const f=b.length;for(let h=0;h<f;h++){var g=b[h];e+='<li class="devsite-nav-item"'+
(c&&g.index<a?" visible":"")+'><a href="#'+_ds.Y(g.id)+'" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="'+(c?"Embedded nav":"Right nav")+'" data-value="'+_ds.Y(h)+'" track-type="navigation" track-name="'+(c?"embeddedNav":"rightNav")+'" track-metadata-position="'+_ds.Y(h)+'" track-metadata-link-destination="#'+_ds.Y(g.id)+'"><span class="devsite-nav-text" tooltip>'+_ds.X(g.text)+"</span></a>";if(g.children.length){e+='<ul class="devsite-nav-list">';
g=g.children;const k=g.length;for(let l=0;l<k;l++){const m=g[l];e+='<li class="devsite-nav-item"'+(c&&m.index<a?" visible":"")+'><a href="#'+_ds.Y(m.id)+'" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="'+(c?"Embedded nav":"Right nav")+'" data-value="'+_ds.Y(h)+"."+_ds.Y(l)+'" track-type="navigation" track-name="'+(c?"embeddedNav":"rightNav")+'" track-metadata-position="'+_ds.Y(h)+"."+_ds.Y(l)+'" track-metadata-link-destination="#'+
_ds.Y(m.id)+'"><span class="devsite-nav-text" tooltip>'+_ds.X(m.text)+"</span></a></li>"}e+="</ul>"}e+="</li>"}d&&(e=c?e+'<li class="devsite-nav-item devsite-apix-link"><a href="#try-it" class="devsite-nav-title"><span class="devsite-nav-text" tooltip>Try it</span></a></li>':e+'<button type="button" class="devsite-show-apix button-primary">Try it!</button>');c&&(e=e+'<li class="devsite-toc-toggle"><button type="button" class="button-flat devsite-nav-more-items material-icons" track-type="navigation" track-name="embeddedNavExpand" title="'+
_ds.zH("Expand/collapse contents"),e+='"></button></li>');return(0,_ds.U)(e+"</ul>")};var s7=function(a){if(!a.hasAttribute("disabled")){var b=document.querySelector("devsite-content .devsite-article-body");b?(a.ed?a.classList.add("devsite-toc-embedded"):a.classList.add("devsite-toc"),Wia(a,b),a.qa=!0):a.Db()}},Yia=async function(a){await Xia(a);if(a.g){var b=`#${a.g.id}`,c=encodeURI(b);b=a.ma.get(b)||a.ma.get(c);a.o!==b&&(a.o&&a.o.classList.remove("devsite-nav-active"),b&&(b.classList.add("devsite-nav-active"),a.v&&("scrollIntoViewIfNeeded"in b?b.scrollIntoViewIfNeeded():b.scrollIntoView()),
a.o=b))}},Zia=function(a){a.ed||a.eventHandler.listen(document.body,"devsite-content-updated devsite-element-hidden devsite-element-visible devsite-page-loaded devsite-sticky-resize devsite-sticky-scroll".split(" "),()=>{a.va.Qa()});a.eventHandler.listen(document.body,"devsite-content-updated",()=>{s7(a)})},$ia=async function(a){if("IntersectionObserver"in _ds.Vj()){a.Zb&&a.Zb.disconnect();var b=document.querySelector("devsite-header");let c=152;b&&(await customElements.whenDefined("devsite-header"),
(b=b.oa())&&(c=b));a.Zb=new IntersectionObserver(d=>{for(const e of d)e.isIntersecting?a.ea.add(e.target):a.ea.delete(e.target);a.va.Qa()},{rootMargin:`${c}px 0px 0px 0px`,threshold:[0,1]})}a.ra.g()},Xia=async function(a){let b=0;var c=document.querySelector("devsite-header");c&&(await customElements.whenDefined("devsite-header"),b=c.v());c=a.h.findIndex(e=>a.ea.has(e)&&e.getBoundingClientRect().top>=b);const d=a.h[c];if(d){const e=await aja();d.getBoundingClientRect().top-b>e&&0<c?a.g=a.h[c-1]:a.g=
d}else a.g&&a.g.getBoundingClientRect().top>window.innerHeight&&(c=a.h.indexOf(a.g),0<c&&(a.g=a.h[c-1]))},Wia=function(a,b){const c=[];let d=!1,e="";switch(a.getAttribute("depth")){case "1":e="h2:not(.hide-from-toc):not(#contents):not(#table-of-contents)";break;default:e="h2:not(.hide-from-toc):not(#contents):not(#table-of-contents), h3:not(.hide-from-toc):not(#contents):not(#table-of-contents)"}a.h=[...b.querySelectorAll(e)].filter(f=>f.id&&f.dataset.text).filter(f=>bja(f));for(const [f,g]of a.h.entries())b=
g,b={id:b.id,level:b.tagName.toLowerCase(),text:b.dataset.text,children:[],index:f},"h2"===b.level?(c.push(b),d=!0):d?c[c.length-1].children.push(b):c.push(b);_ds.ub(a.oa,c,a.ua.bind(a))&&a.qa||(c.length?(cja(a,c),a.show(),a.ed||dja(a)):a.Db(),a.oa=c)},bja=function(a){return _ds.Il.find(b=>!!_ds.tk(a,null,b,6))||_ds.tk(a,"devsite-selector",null,6)||_ds.tk(a,null,"devsite-dialog",3)?!1:!0},cja=function(a,b){const c=_ds.Q(Via,{wy:b,ed:a.ed,Vu:!!document.body.querySelector("devsite-apix, .devsite-apix"),
Bw:8>b.length?8:5});a.v&&(b=c.querySelector("button.devsite-show-apix"))&&a.eventHandler.listen(b,"click",()=>{a.dispatchEvent(new CustomEvent("devsite-concierge-open-panel",{bubbles:!0,composed:!0,detail:{hx:"devsite-concierge-api-explorer-panel"}}))});b=c.querySelectorAll("a.devsite-nav-title");for(const d of b){b=d;const e=b.hash,f=encodeURI(b.hash);a.ma.set(e,b);a.ma.set(f,b)}_ds.ak(a);a.ed&&_ds.D(a,"hidden","",c);a.appendChild(c);if(a.ed){if(8<a.getElementsByClassName("devsite-nav-item").length){for(const d of a.querySelectorAll(".devsite-nav-show-all, .devsite-nav-more-items"))a.eventHandler.listen(d,
"click",()=>{a.hasAttribute("expanded")?a.removeAttribute("expanded"):_ds.D(a,"expanded","")});_ds.D(a,"expandable","")}else a.removeAttribute("expandable");setTimeout(()=>{c.removeAttribute("hidden")},0)}},dja=async function(a){await a.ra.promise;if(a.Zb){a.Zb.disconnect();a.ea.clear();a.o&&a.o.classList.remove("devsite-nav-active");a.o=null;for(const b of a.h)a.Zb.observe(b)}},aja=async function(){let a=0,b=0;const c=document.querySelector("devsite-header");c&&(await customElements.whenDefined("devsite-header"),
a=c.v(),b=c.oa());return Math.max(b-a,Math.floor((window.innerHeight-a)/5))},t7=class extends _ds.E{static get observedAttributes(){return["max-height","offset"]}constructor(){super();this.eventHandler=new _ds.G;this.ra=new _ds.Te;this.ea=new Set;this.ma=new Map;this.xa=new _ds.Fm(()=>void s7(this),16);this.va=new _ds.Fm(()=>void Yia(this),33);this.g=this.o=null;this.h=[];this.qa=!1;this.Zb=null;this.v=this.ed=!1;this.oa=[];_ds.$i(this,(0,_ds.u)`disabled`,(0,_ds.u)`has-sidebar`,(0,_ds.u)`hidden`,
(0,_ds.u)`expandable`,(0,_ds.u)`expanded`,(0,_ds.u)`visible`)}connectedCallback(){this.ed=this.hasAttribute("devsite-toc-embedded");this.v=document.body.hasAttribute("concierge");s7(this);Zia(this)}disconnectedCallback(){this.Db();this.qa=!1;_ds.I(this.eventHandler)}nk(a){a=a&&"false"===a.toLowerCase();this.oa=[];_ds.ak(this);a?(_ds.D(this,"disabled",""),this.Db()):(this.removeAttribute("disabled"),this.xa.Qa())}Db(){_ds.ak(this);this.dispatchEvent(new CustomEvent("devsite-element-hidden",{bubbles:!0}));
this.removeAttribute("visible");_ds.D(this,"hidden","");if(!this.ed&&!this.v){const a=document.querySelector(".devsite-main-content");a&&a.removeAttribute("has-sidebar")}}show(){this.dispatchEvent(new CustomEvent("devsite-element-visible",{bubbles:!0}));this.removeAttribute("hidden");_ds.D(this,"visible","");if(!this.ed){if(!this.v){const a=document.querySelector(".devsite-main-content");a&&_ds.D(this,"has-sidebar","",a)}$ia(this)}}ua(a,b){let c=!0;if(a.children.length||b.children.length)c=_ds.ub(a.children,
b.children,this.ua.bind(this));return c&&a.id===b.id&&a.text===b.text}};t7.prototype.renderUpdatedContent=t7.prototype.nk;t7.prototype.disconnectedCallback=t7.prototype.disconnectedCallback;t7.prototype.connectedCallback=t7.prototype.connectedCallback;try{customElements.define("devsite-toc",t7)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteToc",a)};})(_ds_www);
<path d="M2.92871 2.92902L17.0708 17.0712" stroke="currentColor" stroke-width="1.5"></path>
<path d="M17.0723 2.92896L2.93013 17.0711" stroke="currentColor" stroke-width="1.5"></path>
</svg>
</button>
</div>
<div class="wrapper large">
<div class="column">
<div class="logo">
<a href="/">
<svg width="140" height="39" viewbox="0 0 140 39" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="logo-title">
<title id="logo-title">Cision</title>
<path d="M26.5703 15.8099L32.0503 15.1855V0.330078H26.5703V15.8099Z" fill="white"></path>
<path d="M26.5703 38.3533H32.0503V23.4896L26.5703 22.8652V38.3533Z" fill="white"></path>
<path d="M26.5703 22.8656L32.0503 23.4899V15.1836L26.5703 15.8079V22.8656Z" fill="#E26540"></path>
<path d="M57.9661 2.73248C57.1592 1.91384 56.1942 1.25645 55.065 0.756167C53.9378 0.257953 52.6921 0.0078125 51.3319 0.0078125C49.7555 0.0078125 48.3767 0.284828 47.1954 0.834724C46.0142 1.38669 45.0367 2.1247 44.2673 3.05085C43.4957 3.97699 42.9155 5.08091 42.5203 6.36262C42.1252 7.64434 41.9297 8.9984 41.9297 10.4207C41.9297 11.7437 42.0586 12.9386 42.3061 14.0157L47.7902 13.3914C47.6363 13.0627 47.5344 12.6885 47.4908 12.2647C47.4367 11.75 47.4097 11.1174 47.4097 10.369C47.4097 9.72815 47.4637 9.11417 47.5719 8.52706C47.68 7.93996 47.8672 7.42314 48.1355 6.97867C48.4037 6.53421 48.7802 6.1683 49.2647 5.88302C49.7493 5.59773 50.367 5.45509 51.1177 5.45509C52.5153 5.45509 53.5094 5.90989 54.1 6.81743C54.6906 7.72496 54.9859 8.80201 54.9859 10.0486V11.2765H60.4659V8.60562C60.4659 7.53684 60.2517 6.497 59.8212 5.48196C59.3907 4.46693 58.7731 3.55113 57.9682 2.73248H57.9661Z" fill="white"></path>
<path d="M54.8784 29.9157C54.8056 30.6289 54.6371 31.2243 54.3689 31.706C54.1006 32.1876 53.7054 32.5597 53.1876 32.8264C52.6677 33.0931 51.9419 33.2275 51.0122 33.2275C49.6147 33.2275 48.6206 32.8264 48.03 32.0264C47.4393 31.2263 47.144 30.3271 47.144 29.3306V27.621H41.6641V29.6511C41.6641 30.9328 41.9053 32.1277 42.3899 33.2295C42.8744 34.3335 43.5275 35.2865 44.351 36.0865C45.1746 36.8886 46.1583 37.5212 47.3062 37.9822C48.4522 38.4453 49.6875 38.6768 51.0143 38.6768C52.7696 38.6768 54.2566 38.3915 55.4732 37.823C56.6898 37.2545 57.6672 36.4793 58.4014 35.4994C59.1355 34.5195 59.6637 33.3453 59.9861 31.9747C60.3084 30.6041 60.4707 29.1177 60.4707 27.5156C60.4707 27.2448 60.4665 26.9864 60.4603 26.7279L54.9574 26.1016C54.9782 26.5398 54.9907 27.0256 54.9907 27.5693C54.9907 28.4231 54.9553 29.2066 54.8825 29.9198L54.8784 29.9157Z" fill="white"></path>
<path d="M43.1444 16.3758C43.9513 17.9593 45.536 19.2328 47.8985 20.194L51.8208 21.7962C52.5009 22.0815 53.0478 22.3481 53.4596 22.5962C53.8714 22.8464 54.1937 23.1668 54.4267 23.5575C54.6596 23.9503 54.8114 24.465 54.8842 25.1059C54.9175 25.3974 54.9403 25.7302 54.9591 26.094L60.4619 26.7204C60.439 25.6496 60.3725 24.6718 60.2581 23.7973C60.1146 22.712 59.8359 21.7507 59.4262 20.9134C59.0145 20.0783 58.4321 19.3465 57.6793 18.7242C56.9264 18.102 55.9407 17.5583 54.7241 17.0952L50.5335 15.4393C49.816 15.154 49.2524 14.8708 48.8406 14.5855C48.4289 14.3002 48.1148 13.9715 47.9006 13.5974C47.8632 13.5312 47.8299 13.4609 47.7966 13.3906L42.3125 14.0149C42.5121 14.8791 42.7867 15.6688 43.1444 16.3758Z" fill="#E26540"></path>
<path d="M70.0859 38.355H75.5659V28.4445L72.6647 28.1137L70.0859 27.8223V38.355Z" fill="white"></path>
<path d="M70.0859 10.8567L75.5659 10.2323V0.330078H70.0859V10.8567Z" fill="white"></path>
<path d="M70.0861 27.819V27.8211L72.6649 28.1126L75.566 28.4434V10.2307L70.0861 10.855V27.819Z" fill="#E26540"></path>
<path d="M92.5192 6.3895C93.2533 5.76725 94.1206 5.45509 95.125 5.45509C96.1295 5.45509 96.9968 5.76725 97.7309 6.3895C98.1052 6.70786 98.3818 7.11511 98.5669 7.61333L104.078 6.98694C103.945 6.36883 103.756 5.78585 103.508 5.24216C102.972 4.06795 102.263 3.09839 101.387 2.33143C100.509 1.56654 99.5236 0.987702 98.4317 0.594919C97.3378 0.204204 96.2377 0.0078125 95.1271 0.0078125C94.0166 0.0078125 92.9143 0.204204 91.8225 0.594919C90.7286 0.987702 89.7449 1.56447 88.8673 2.33143C87.9896 3.09839 87.2826 4.06795 86.746 5.24216C86.2385 6.35229 85.9744 7.62366 85.9453 9.05009L91.4835 8.41957C91.6166 7.54304 91.9618 6.86497 92.5213 6.3895H92.5192Z" fill="white"></path>
<path d="M98.5633 31.0618C98.3803 31.562 98.1016 31.9734 97.7252 32.2918C96.991 32.914 96.1217 33.2262 95.1193 33.2262C94.1169 33.2262 93.2476 32.9161 92.5135 32.2918C91.9519 31.8163 91.6067 31.1362 91.4757 30.2555L85.9375 29.625C85.9645 31.0886 86.2287 32.3703 86.7382 33.466C87.2747 34.6237 87.9818 35.585 88.8595 36.3499C89.7371 37.1168 90.7208 37.6936 91.8147 38.0843C92.9065 38.475 94.0088 38.6714 95.1193 38.6714C96.2299 38.6714 97.33 38.475 98.4239 38.0843C99.5158 37.6936 100.502 37.1147 101.379 36.3499C102.257 35.585 102.964 34.6237 103.5 33.466C103.754 32.9202 103.945 32.3269 104.079 31.6902L98.5612 31.0618H98.5633Z" fill="white"></path>
<path d="M98.5625 7.61271C98.7393 8.09232 98.8287 8.65462 98.8287 9.29961V29.3791C98.8287 30.022 98.7393 30.5822 98.5646 31.0598L104.082 31.6882C104.232 30.975 104.309 30.206 104.309 29.3791V9.29961C104.309 8.47684 104.228 7.70574 104.074 6.98633L98.5625 7.61271Z" fill="#E26540"></path>
<path d="M91.4097 29.3821V9.30058C91.4097 8.98636 91.4325 8.69487 91.4741 8.41992L85.9359 9.05044C85.9359 9.13313 85.9297 9.21582 85.9297 9.30058V29.38C85.9297 29.4627 85.9338 29.5413 85.9338 29.624L91.472 30.2545C91.4305 29.9816 91.4097 29.6922 91.4097 29.38V29.3821Z" fill="#E26540"></path>
<path d="M128.269 38.3542H133.426V35.0301L126.773 34.2734L128.269 38.3542Z" fill="white"></path>
<path d="M114.297 38.3526H119.777V33.4759L114.297 32.8516V38.3526Z" fill="white"></path>
<path d="M127.945 4.27031L133.425 3.64599V0.330078H127.945V4.27031Z" fill="white"></path>
<path d="M119.563 0.330078H114.297V5.8249L121.26 5.03107L119.563 0.330078Z" fill="white"></path>
<path d="M127.944 23.2403H127.836L121.26 5.02961L114.297 5.82344V32.8531L119.777 33.4774V15.4962H119.885L126.771 34.2733L133.424 35.0299V3.64453L127.944 4.26885V23.2403Z" fill="#E26540"></path>
<path d="M17.721 12.4988L17.7293 8.8128C17.7293 7.63859 17.5047 6.51606 17.0576 5.44728C16.6084 4.37849 15.9907 3.44408 15.2046 2.64405C14.4164 1.84194 13.493 1.20109 12.4386 0.72148C11.3821 0.239804 10.2445 0 9.02791 0C7.98807 0 6.93159 0.142642 5.85847 0.425859C4.78328 0.711143 3.81622 1.20109 2.95731 1.89569C2.0984 2.5903 1.38923 3.5061 0.836033 4.64517C0.276598 5.78631 0 7.22927 0 8.97405V29.7026C0 31.4474 0.276598 32.8904 0.831874 34.0295C1.38715 35.1685 2.09424 36.0864 2.95315 36.7789C3.81206 37.4735 4.77912 37.9635 5.85431 38.2467C6.92951 38.532 7.98391 38.6746 9.02375 38.6746C10.2404 38.6746 11.378 38.4348 12.4344 37.9531C13.4909 37.4715 14.4122 36.8306 15.2004 36.0306C15.9886 35.2285 16.6063 34.2941 17.0534 33.2274C17.5005 32.1586 17.7252 31.0381 17.7252 29.8618V26.0973L12.187 25.4875V27.1558C12.187 28.2742 12.2036 30.821 11.563 31.8257C11.405 32.0738 11.222 32.2929 11.0119 32.4852C10.6917 32.7374 10.3444 32.9235 9.96377 33.0392C9.66014 33.1323 9.37314 33.1881 9.09862 33.2129C9.01751 33.2191 8.93433 33.2232 8.84698 33.2253C8.8345 33.2253 8.81994 33.2253 8.80747 33.2253C7.55342 33.2253 6.68619 32.8511 6.20162 32.1028C5.71913 31.3544 5.47581 30.4303 5.47581 29.3264V9.34823C5.47581 8.2443 5.71705 7.31816 6.20162 6.57188C6.68619 5.82352 7.55342 5.44934 8.80747 5.44934C8.81994 5.44934 8.83242 5.44934 8.84698 5.44934C8.93433 5.44934 9.01751 5.45555 9.09862 5.46175C9.37106 5.48655 9.66014 5.54237 9.96377 5.6354C10.3444 5.75117 10.6917 5.93722 11.0119 6.18943C11.2241 6.38169 11.405 6.60082 11.563 6.84889C12.2036 7.85359 12.187 10.4005 12.187 11.5189V13.1872L17.7189 12.4988H17.721Z" fill="white"></path>
<path d="M139.847 1.49396C139.747 1.26242 139.61 1.05983 139.437 0.888243C139.265 0.716659 139.061 0.580219 138.828 0.480989C138.595 0.38176 138.346 0.330078 138.082 0.330078C137.817 0.330078 137.568 0.379693 137.335 0.480989C137.102 0.580219 136.898 0.716659 136.726 0.888243C136.553 1.05983 136.416 1.26242 136.316 1.49396C136.214 1.72549 136.164 1.97356 136.164 2.23611C136.164 2.49865 136.214 2.74673 136.316 2.97826C136.418 3.2098 136.553 3.41239 136.726 3.58397C136.898 3.75556 137.102 3.892 137.335 3.99123C137.568 4.09046 137.817 4.14214 138.082 4.14214C138.346 4.14214 138.595 4.09252 138.828 3.99123C139.061 3.88993 139.265 3.75556 139.437 3.58397C139.61 3.41239 139.747 3.2098 139.847 2.97826C139.949 2.74673 139.999 2.49865 139.999 2.23611C139.999 1.97356 139.949 1.72549 139.847 1.49396ZM139.496 2.84182C139.415 3.03201 139.304 3.19532 139.167 3.3359C139.03 3.47647 138.868 3.58811 138.68 3.6708C138.493 3.75349 138.294 3.79484 138.082 3.79484C137.869 3.79484 137.67 3.75349 137.483 3.6708C137.295 3.58811 137.133 3.47647 136.996 3.3359C136.859 3.19532 136.748 3.03201 136.667 2.84182C136.586 2.65163 136.545 2.4511 136.545 2.23611C136.545 2.02111 136.586 1.82059 136.667 1.6304C136.748 1.44021 136.859 1.27689 136.996 1.13632C137.133 0.995741 137.295 0.884108 137.483 0.801417C137.67 0.718726 137.869 0.677381 138.082 0.677381C138.294 0.677381 138.493 0.718726 138.68 0.801417C138.868 0.884108 139.03 0.995741 139.167 1.13632C139.304 1.27689 139.415 1.44227 139.496 1.6304C139.577 1.82059 139.618 2.02111 139.618 2.23611C139.618 2.4511 139.577 2.65163 139.496 2.84182Z" fill="white"></path>
<path d="M138.62 2.31587C138.688 2.28899 138.749 2.25178 138.803 2.20217C138.855 2.15255 138.896 2.09053 138.927 2.01818C138.957 1.94582 138.973 1.85486 138.973 1.74943C138.973 1.33184 138.717 1.12305 138.206 1.12305H137.359V3.3433H137.709V2.37995H137.979L138.62 3.3433H139.044L138.403 2.36962C138.48 2.35928 138.555 2.34067 138.624 2.3138L138.62 2.31587ZM137.707 2.06573V1.43934H138.214C138.335 1.43934 138.432 1.46415 138.507 1.50963C138.582 1.55718 138.622 1.6316 138.622 1.73289C138.622 1.8528 138.578 1.93755 138.493 1.98717C138.405 2.03885 138.277 2.06366 138.104 2.06366H137.707V2.06573Z" fill="white"></path>
</svg>
</a>
</div>
<nav class="nav">
<div class="nav__item">
<button class="nav__item-link js-link show-arrow js-megamenu-trigger" id="nav-item-0" aria-controls="nav-item-0" data-index="0" target="_self">Solutions</button>
<div class="megamenu js-megamenu" data-index="0" id="0" aria-labelledby="nav-item-0">
<button type="button" class="close-button js-close">
<svg role="img" aria-labelledby="svg-Nav-title-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title id="svg-Nav-title-0">Close</title>
<path d="M2.92871 2.92902L17.0708 17.0712" stroke="currentColor" stroke-width="1.5">
</path>
<path d="M17.0723 2.92896L2.93013 17.0711" stroke="currentColor" stroke-width="1.5">
</path>
</svg>
</button>
<div class="megamenu__wrapper">
<div class="items-wrapper">
<div class="items vlist" role="tablist">
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item active" role="tab" aria-selected="true" aria-controls="menutab-0-panel" data-index="0" id="menutab-0">PR Distribution &amp; Placement</button>
<div class="item__context" id="menutab-0-panel">
<div class="sub-items vlist">
<div class="sub-item-wrapper">
<a href="/pr-distribution-and-placement/" class="sub-item vlist-item js-megamenu-sub-item active" data-index="0-0" target="_self">PR Distribution &amp; Placement</a>
<div class="details-panel sub-details js-megamenu-details-panel active" data-index="0-0" id="megamenu-0-0" aria-labelledby="megamenu-0-0">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/pr-distribution-and-placement/" class="panel-title">PR Distribution &amp; Placement</a>
<div class="text-medium">
PR Newswire shares your story to the industry’s largest, most-sourced news distribution network. It amplifies your story by ensuring publication, multiplying social shares, and driving higher engagement.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/pr-distribution-and-placement/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/2023-state-of-the-media-report/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-pr-detail-banner.jpg" alt="Megamenu PR Banner" />
</a>
<figcaption>
2023 State of the Media Report
</figcaption>
</figure>
</div>
</div>
</div>
<div class="sub-item-wrapper">
<a href="/pr-distribution-and-placement/prnewswire/" class="sub-item vlist-item js-megamenu-sub-item " data-index="0-1" target="_self">Distribution By PR Newswire</a>
<div class="details-panel sub-details js-megamenu-details-panel " data-index="0-1" id="megamenu-0-1" aria-labelledby="megamenu-0-1">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/pr-distribution-and-placement/prnewswire/" class="panel-title">Distribution By PR Newswire</a>
<div class="text-medium">
Only PR Newswire can get your news to 200,000+ newsrooms and direct feeds— 180,000+ journalist and influencer inboxes and 9,000+ web sites and digital media outlets. Trusted media pros count on us.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/pr-distribution-and-placement/prnewswire/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/press-release-innovations-new-era/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-pr-detail-banner-2.png" alt="Megamenu PR Banner" />
</a>
<figcaption>
Rethinking the Press Release: Innovations for a New Era of Earned Media
</figcaption>
</figure>
</div>
</div>
</div>
<div class="sub-item-wrapper">
<a href="/pr-distribution-and-placement/guaranteed-paid-placement/" class="sub-item vlist-item js-megamenu-sub-item " data-index="0-2" target="_self">Guaranteed Paid Placement</a>
<div class="details-panel sub-details js-megamenu-details-panel " data-index="0-2" id="megamenu-0-2" aria-labelledby="megamenu-0-2">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/pr-distribution-and-placement/guaranteed-paid-placement/" class="panel-title">Guaranteed Paid Placement</a>
<div class="text-medium">
Cision’s Guaranteed Paid Placement converts the content of your press release into a digital media asset that can be simultaneously placed on major media outlets. Reach your audience on their favorite sites.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/pr-distribution-and-placement/guaranteed-paid-placement/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/press-release-innovations-new-era/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-pr-detail-banner-2.png" alt="Megamenu PR Banner" />
</a>
<figcaption>
Rethinking the Press Release: Innovations for a New Era of Earned Media
</figcaption>
</figure>
</div>
</div>
</div>
<div class="sub-item-wrapper">
<a href="/agencies/" class="sub-item vlist-item js-megamenu-sub-item " data-index="0-3" target="_self">PR Newswire for Agency Partners</a>
<div class="details-panel sub-details js-megamenu-details-panel " data-index="0-3" id="megamenu-0-3" aria-labelledby="megamenu-0-3">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/agencies/" class="panel-title">PR Newswire for Agency Partners</a>
<div class="text-medium">
PR Newswire press release distribution service is a trusted and secure way for agencies to send client stories to a global audience of journalists and influencers.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/agencies/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/2023-state-of-the-media-report/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-pr-detail-banner.jpg" alt="2023 State of the Media Report" />
</a>
<figcaption>
2023 State of the Media Report
</figcaption>
</figure>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-1-panel" data-index="1" id="menutab-1">Content Production &amp; Multimedia</button>
<div class="item__context" id="menutab-1-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/content-production-and-multimedia/" class="panel-title">Content Production &amp; Multimedia</a>
<div class="text-medium">
Our content services bring your messaging to life and deliver it to audiences across multiple platforms. We offer full-service solutions, from video production to events to digital and social solutions.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/content-production-and-multimedia/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/the-benefits-of-sponsored-placement/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-cpmm-detail-banner.jpg" alt="Megamenu Content Production &amp; Multimedia Banner" />
</a>
<figcaption>
5 Benefits of Sharing Your Story Through Guaranteed Paid Placement
</figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-2-panel" data-index="2" id="menutab-2">Media Relationship Management</button>
<div class="item__context" id="menutab-2-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/media-relationship-management/" class="panel-title">Media Relationship Management</a>
<div class="text-medium">
Cision combines the industry's largest media database with robust relationship management. You get carefully researched, fully vetted and pitchable journalists, outlets, and influencers at your fingertips.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/media-relationship-management/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/2023-state-of-the-media-report/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mrm-detail-banner.jpg" alt="Megamenu Media Relationship Management Banner" />
</a>
<figcaption>
2023 State of the Media Report
</figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-3-panel" data-index="3" id="menutab-3">Media Monitoring</button>
<div class="item__context" id="menutab-3-panel">
<div class="sub-items vlist">
<div class="sub-item-wrapper">
<a href="/media-monitoring/" class="sub-item vlist-item js-megamenu-sub-item active" data-index="3-0" target="_self">Media Monitoring</a>
<div class="details-panel sub-details js-megamenu-details-panel active" data-index="3-0" id="megamenu-3-0" aria-labelledby="megamenu-3-0">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/media-monitoring/" class="panel-title">Media Monitoring</a>
<div class="text-medium">
Cision Media Monitoring enables you to identify trends, understand the impact of your strategies, and make informed decisions about the actions to take for your messages to resonate.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/media-monitoring/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/monitoring-and-measuring-impact-of-pr/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mm-detail-banner.jpg" alt="Megamenu Media Monitoring Banner" />
</a>
<figcaption>
A Step-by-Step Guide to Monitoring and Measuring the Impact of PR
</figcaption>
</figure>
</div>
</div>
</div>
<div class="sub-item-wrapper">
<a href="/media-monitoring/social/" class="sub-item vlist-item js-megamenu-sub-item " data-index="3-1" target="_self">Social Monitoring</a>
<div class="details-panel sub-details js-megamenu-details-panel " data-index="3-1" id="megamenu-3-1" aria-labelledby="megamenu-3-1">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/media-monitoring/social/" class="panel-title">Social Monitoring</a>
<div class="text-medium">
Cision Social Listening gives you social media analytics that cut through the noise, with the AI and reporting tools you need to fully understand your online presence.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/media-monitoring/social/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/monitoring-and-measuring-impact-of-pr/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mm-detail-banner.jpg" alt="Megamenu Media Monitoring Banner" />
</a>
<figcaption>
A Step-by-Step Guide to Monitoring and Measuring the Impact of PR
</figcaption>
</figure>
</div>
</div>
</div>
<div class="sub-item-wrapper">
<a href="/media-monitoring/broadcast/" class="sub-item vlist-item js-megamenu-sub-item " data-index="3-2" target="_self">Broadcast Monitoring</a>
<div class="details-panel sub-details js-megamenu-details-panel " data-index="3-2" id="megamenu-3-2" aria-labelledby="megamenu-3-2">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/media-monitoring/broadcast/" class="panel-title">Broadcast Monitoring</a>
<div class="text-medium">
Cision offers 24/7 monitoring of 2,700+ domestic and international TV and radio stations and 35,000+ podcasts. Gain insights into your coverage as it plays out over the airwaves.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/media-monitoring/broadcast/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/monitoring-and-measuring-impact-of-pr/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mm-detail-banner.jpg" alt="Megamenu Media Monitoring Banner" />
</a>
<figcaption>
A Step-by-Step Guide to Monitoring and Measuring the Impact of PR
</figcaption>
</figure>
</div>
</div>
</div>
<div class="sub-item-wrapper">
<a href="/media-monitoring/print/" class="sub-item vlist-item js-megamenu-sub-item " data-index="3-3" target="_self">Print Monitoring</a>
<div class="details-panel sub-details js-megamenu-details-panel " data-index="3-3" id="megamenu-3-3" aria-labelledby="megamenu-3-3">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/media-monitoring/print/" class="panel-title">Print Monitoring</a>
<div class="text-medium">
Cision offers the industry’s most comprehensive global monitoring of print media and paywalled content. You'll be able to stay on top of critical mentions and trending topics in influential publications.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/media-monitoring/print/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/monitoring-and-measuring-impact-of-pr/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mm-detail-banner.jpg" alt="Megamenu Media Monitoring Banner" />
</a>
<figcaption>
A Step-by-Step Guide to Monitoring and Measuring the Impact of PR
</figcaption>
</figure>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-4-panel" data-index="4" id="menutab-4">Media Analytics &amp; Measurement</button>
<div class="item__context" id="menutab-4-panel">
<div class="sub-items vlist">
<div class="sub-item-wrapper">
<a href="/media-analytics-and-measurement/" class="sub-item vlist-item js-megamenu-sub-item active" data-index="4-0" target="_self">Media Analytics &amp; Measurement</a>
<div class="details-panel sub-details js-megamenu-details-panel active" data-index="4-0" id="megamenu-4-0" aria-labelledby="megamenu-4-0">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/media-analytics-and-measurement/" class="panel-title">Media Analytics &amp; Measurement</a>
<div class="text-medium">
Cision gives you unprecedented power to see, understand, and manage your brand story, brand reputation and communication campaigns using a single, trusted source of reliable metrics and KPIs.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/media-analytics-and-measurement/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/articles/the-best-advice-from-the-global-comms-webinar/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-cpmm-detail-banner.jpg" alt="Megamenu Media Analytics &amp; Measurement Banner" />
</a>
<figcaption>
The Best Advice from Keeping the Seat You’ve Earned
</figcaption>
</figure>
</div>
</div>
</div>
<div class="sub-item-wrapper">
<a href="/media-analytics-and-measurement/brand-measurement-and-analytics/" class="sub-item vlist-item js-megamenu-sub-item " data-index="4-1" target="_self">Brand Measurement &amp; Analytics</a>
<div class="details-panel sub-details js-megamenu-details-panel " data-index="4-1" id="megamenu-4-1" aria-labelledby="megamenu-4-1">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/media-analytics-and-measurement/brand-measurement-and-analytics/" class="panel-title">Brand Measurement &amp; Analytics</a>
<div class="text-medium">
Cision provides advanced brand measurement and PR analytics that give you insight into your earned media performance. You’ll know who is reading your coverage and which actions were taken on your website.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/media-analytics-and-measurement/brand-measurement-and-analytics/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/articles/the-best-advice-from-the-global-comms-webinar/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-cpmm-detail-banner.jpg" alt="Megamenu Brand Measurement &amp; Analytics Banner" />
</a>
<figcaption>
The Best Advice from Keeping the Seat You’ve Earned
</figcaption>
</figure>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-5-panel" data-index="5" id="menutab-5">Media Insights Services</button>
<div class="item__context" id="menutab-5-panel">
<div class="sub-items vlist">
<div class="sub-item-wrapper">
<a href="/media-insights-services/" class="sub-item vlist-item js-megamenu-sub-item active" data-index="5-0" target="_self">Media Insights Services</a>
<div class="details-panel sub-details js-megamenu-details-panel active" data-index="5-0" id="megamenu-5-0" aria-labelledby="megamenu-5-0">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/media-insights-services/" class="panel-title">Media Insights Services</a>
<div class="text-medium">
Top brands trust Cision’s Insights team for custom media analysis, communications intelligence, comprehensive reporting, and executive briefings that enable data-driven decision-making at global scale.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/media-insights-services/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/articles/what-is-influencer-marketing/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mis-detail-banner-2.jpg" alt="Megamenu Media Insights Services Banner" />
</a>
<figcaption>
What Is Influencer Marketing? Definitions and Benefits
</figcaption>
</figure>
</div>
</div>
</div>
<div class="sub-item-wrapper">
<a href="/media-insights-services/executive-briefings/" class="sub-item vlist-item js-megamenu-sub-item " data-index="5-1" target="_self">Curation &amp; Briefings</a>
<div class="details-panel sub-details js-megamenu-details-panel " data-index="5-1" id="megamenu-5-1" aria-labelledby="megamenu-5-1">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/media-insights-services/executive-briefings/" class="panel-title">Curation &amp; Briefings</a>
<div class="text-medium">
Executive and senior leadership at top global brands in virtually every industry rely on Cision daily news briefings—up to the minute industry news that helps them make smarter, faster business decisions.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/media-insights-services/executive-briefings/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/articles/what-is-influencer-marketing/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mis-detail-banner-2.jpg" alt="Megamenu Curation &amp; Briefings Banner" />
</a>
<figcaption>
What Is Influencer Marketing? Definitions and Benefits
</figcaption>
</figure>
</div>
</div>
</div>
<div class="sub-item-wrapper">
<a href="/media-insights-services/analysis-reporting/" class="sub-item vlist-item js-megamenu-sub-item " data-index="5-2" target="_self">Analysis Reporting &amp; Consulting</a>
<div class="details-panel sub-details js-megamenu-details-panel " data-index="5-2" id="megamenu-5-2" aria-labelledby="megamenu-5-2">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/media-insights-services/analysis-reporting/" class="panel-title">Analysis Reporting &amp; Consulting</a>
<div class="text-medium">
Cision’s Insights team combines AI-powered media measurement and analytics technologies with global media monitoring and social listening to unlock comms opportunities and enhance brand reputation.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/media-insights-services/analysis-reporting/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/articles/what-is-influencer-marketing/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mis-detail-banner-2.jpg" alt="Megamenu Curation &amp; Briefings Banner" />
</a>
<figcaption>
What Is Influencer Marketing? Definitions and Benefits
</figcaption>
</figure>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-6-panel" data-index="6" id="menutab-6">Investor Relations Tools</button>
<div class="item__context" id="menutab-6-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/investor-relations-tools/" class="panel-title">Investor Relations Tools</a>
<div class="text-medium">
Cision offers an integrated set of tools and services to help streamline your IR workflows, minimize non-compliance risk, maximize the efficacy of your communications, and cultivate investor confidence.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/investor-relations-tools/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/webinars-and-events/fewer-journalists-bigger-goals-social-distance-oh-my/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-irt-detail-banner.jpg" alt="Megamenu Investor Relations Tools Banner" />
</a>
<figcaption>
Fewer Journalists, Bigger Goals and Social Distance…OH MY!
</figcaption>
</figure>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="nav__item">
<button class="nav__item-link js-link show-arrow js-megamenu-trigger" id="nav-item-1" aria-controls="nav-item-1" data-index="1" target="_self">Use Cases</button>
<div class="megamenu js-megamenu" data-index="1" id="1" aria-labelledby="nav-item-1">
<button type="button" class="close-button js-close">
<svg role="img" aria-labelledby="svg-Nav-title-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<title id="svg-Nav-title-1">Close</title>
<path d="M2.92871 2.92902L17.0708 17.0712" stroke="currentColor" stroke-width="1.5">
</path>
<path d="M17.0723 2.92896L2.93013 17.0711" stroke="currentColor" stroke-width="1.5">
</path>
</svg>
</button>
<div class="megamenu__wrapper">
<div class="items-wrapper">
<div class="items vlist" role="tablist">
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item active" role="tab" aria-selected="true" aria-controls="menutab-0-panel" data-index="0" id="menutab-0">PR &amp; Corporate Communications</button>
<div class="item__context" id="menutab-0-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/use-cases/pr-and-corporate-communications/" class="panel-title">PR &amp; Corporate Communications</a>
<div class="text-medium">
Distribute and amplify news with the unmatched reach of PR Newswire. Engage with the world’s largest media database. Monitor and analyze results and deliver proven impact to the business.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/use-cases/pr-and-corporate-communications/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/2023-state-of-the-media-report/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-prcc-detail-banner.jpg" alt="Megamenu PR Banner" />
</a>
<figcaption>
2023 State of the Media Report
</figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-1-panel" data-index="1" id="menutab-1">Brand Reputation &amp; Crisis Communications</button>
<div class="item__context" id="menutab-1-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/use-cases/brand-reputation-and-crisis-communications/" class="panel-title">Brand Reputation &amp; Crisis Communications</a>
<div class="text-medium">
Cision is the only provider with a full suite of tools to help you understand and protect your brand reputation and grow brand equity. Ensure high impact coverage and respond quickly during a crisis.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/use-cases/brand-reputation-and-crisis-communications/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/tip-sheets/crisis-communications-toolkit/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-cct-detail-banner.jpg" alt="Megamenu Brand Reputation &amp; Crisis Communications Banner" />
</a>
<figcaption>
Crisis Communications Toolkit
</figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-2-panel" data-index="2" id="menutab-2">Campaign &amp; Event Reporting</button>
<div class="item__context" id="menutab-2-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/use-cases/campaign-and-event-reporting/" class="panel-title">Campaign &amp; Event Reporting</a>
<div class="text-medium">
Cision tracks and measures your KPIs, aggregating data to accurately report campaign and event performance so you can demonstrate the impact and value of your multi-channel comms activities.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/use-cases/campaign-and-event-reporting/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/webinars-and-events/st-baldricks-foundation-partners-with-cision/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mis-detail-banner.jpg" alt="Megamenu Media Insights Services Banner" />
</a>
<figcaption>
St. Baldrick&#39;s Foundation Manages 100s of Events and Outreach
</figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-3-panel" data-index="3" id="menutab-3">Social Media Listening</button>
<div class="item__context" id="menutab-3-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/use-cases/social-media-listening/" class="panel-title">Social Media Listening</a>
<div class="text-medium">
Cision Social Listening offers 24/7 monitoring with real-time, AI-driven analysis of the world's largest database of online conversations so you can build stronger campaigns and make smarter decisions.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/use-cases/social-media-listening/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/monitoring-and-measuring-impact-of-pr/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mm-detail-banner.jpg" alt="Megamenu Media Monitoring Banner" />
</a>
<figcaption>
A Step-by-Step Guide to Monitoring and Measuring the Impact of PR
</figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-4-panel" data-index="4" id="menutab-4">Investor &amp; Analyst Relations</button>
<div class="item__context" id="menutab-4-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/use-cases/investor-and-analyst-relations/" class="panel-title">Investor &amp; Analyst Relations</a>
<div class="text-medium">
Cision’s integrated suite includes the leading global newswire distribution, 24/7 support from IR experts, compliant single-click SEC filing, customizable IR and ESG microsites, and teleconferencing.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/use-cases/investor-and-analyst-relations/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/webinars-and-events/fewer-journalists-bigger-goals-social-distance-oh-my/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-irt-detail-banner.jpg" alt="Megamenu Investor Relations Tools Banner" />
</a>
<figcaption>
Fewer Journalists, Bigger Goals and Social Distance…OH MY!
</figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-5-panel" data-index="5" id="menutab-5">Regulatory Compliance</button>
<div class="item__context" id="menutab-5-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/use-cases/regulatory-compliance/" class="panel-title">Regulatory Compliance</a>
<div class="text-medium">
Cision offers a comprehensive solution for financial regulatory compliance, including single-click EDGAR filing, targeted distribution of your financial news, and investor and ESG microsite solutions.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/use-cases/regulatory-compliance/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/webinars-and-events/fewer-journalists-bigger-goals-social-distance-oh-my/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-irt-detail-banner.jpg" alt="Megamenu Investor Relations Tools Banner" />
</a>
<figcaption>
Fewer Journalists, Bigger Goals and Social Distance…OH MY!
</figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-6-panel" data-index="6" id="menutab-6">Digital Online Newsroom, IR and ESG Website</button>
<div class="item__context" id="menutab-6-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/use-cases/microsite-creation-and-hosting/" class="panel-title">Digital Online Newsroom, IR and ESG Website</a>
<div class="text-medium">
Cision has the communications expertise and technical capability to design, build and host your newsroom, IR and ESG microsite. And with PR Newswire, you can automatically post to your website.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/use-cases/microsite-creation-and-hosting/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="/resources/guides-and-reports/the-benefits-of-sponsored-placement/">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-cpmm-detail-banner.jpg" alt="Megamenu Content Production &amp; Multimedia Banner" />
</a>
<figcaption>
5 Benefits of Sharing Your Story Through Guaranteed Paid Placement
</figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="item-wrapper">
<button class="item vlist-item js-megamenu-item " role="tab" aria-selected="false" aria-controls="menutab-7-panel" data-index="7" id="menutab-7">Digital Content Amplification</button>
<div class="item__context" id="menutab-7-subpanel">
<div class="details-panel item-details active">
<div class="scroll-sec">
<div class="panel-content-wrapper">
<a href="/use-cases/digital-content-amplification/" class="panel-title">Digital Content Amplification</a>
<div class="text-medium">
Cision is the standard for organizations who want to reach and persuade a broader audience with every piece of content, and to measure and prove the financial impact of their content creation efforts.
</div>
<div class="panel-actions">
<a href="/speak-to-an-expert/" class="btn variant-1">Speak to an Expert
<svg width="9" height="auto" viewbox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
<a href="/use-cases/digital-content-amplification/" class="btn variant-3">Learn More</a>
</div>
</div>
<figure class="panel-image">
<a href="What%20Is%20Influencer%20Marketing?%20Definitions%20and%20Benefits">
<img src="/content/dam/cision-revamp/cision-optimized/global-assets/megamenu-banners/megamenu-mis-detail-banner-2.jpg" alt="Megamenu Media Monitoring Banner" />
</a>
<figcaption>
What Is Influencer Marketing? Definitions and Benefits
</figcaption>
</figure>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="nav__item">
<a href="/resources/" class="nav__item-link js-link" target="_self">Resources</a>
</div>
<div class="nav__item">
<button class="nav__item-link js-link show-arrow" id="nav-item-3" data-index="3" aria-controls="3" target="_self">About Us</button>
<div class="dropdown left" id="3" aria-labelledby="nav-item-3">
<ul>
<li>
<a href="/about/" target="_self">About Cision</a>
</li>
<li>
<a href="/about/press-releases/" target="_self">Cision Press Releases</a>
</li>
<li>
<a href="/about/earned-media/" target="_self">Cision’s Earned Media</a>
</li>
<li>
<a href="/about/media-kit/" target="_self">Media Kit</a>
</li>
<li>
<a href="/about/global-leadership-team/" target="_self">Global Leadership</a>
</li>
<li>
<a href="/about/cision-values/" target="_self">Cision Values</a>
</li>
<li>
<a href="/about/diversity-inclusion/" target="_self">Diversity &amp; Inclusion</a>
</li>
<li>
<a href="/about/esg/" target="_self">ESG</a>
</li>
</ul>
</div>
</div>
<div class="nav__item">
<a href="/careers/" class="nav__item-link js-link" target="_self">Careers</a>
</div>
<div class="nav__item">
<a href="/contact-us/" class="nav__item-link js-link" target="_self">Contact &amp; Support</a>
</div>
<div class="nav__item">
<a href="/login/" class="nav__item-link js-link show-arrow" id="nav-item-6" data-index="6" target="_self">Customer Login</a>
<button class="toggle-button" aria-controls="6" tabindex="-1"></button>
<div class="dropdown left" id="6" aria-labelledby="nav-item-6">
<ul>
<li>
<a href="https://app.cision.com/?&_ga=2.17234041.1336999838.1679515367-1679404079.1659556974#/login" target="_blank">Cision Communications Cloud</a>
</li>
<li>
<a href="https://app.cision.one/%20" target="_blank">CisionOne</a>
</li>
<li>
<a href="https://auth.trendkite.com/login?response_type=code&client_id=7r4gfkb61mnt65872001obb0bs&redirect_uri=https%3A%2F%2Fapp2.cision.com%2Foauth%2Fcallback%2Ftrendkite&scope=openid+email+aws.cognito.signin.user.admin&state=ZmdvcfwSVhwCiodYmqod_EVea5IYP-A0c6_RnU-SzK0" target="_blank">Cision Next Gen</a>
</li>
<li>
<a href="https://us.vocuspr.com/Login.aspx" target="_blank">Cision PR Edition</a>
</li>
<li>
<a href="https://app1.vocusgr.com/Login.aspx?LanguageID=1033&RedirectLink=" target="_blank">Government Relations</a>
</li>
<li>
<a href="https://portal.prnewswire.com/Login.aspx" target="_blank">PR Newswire</a>
</li>
<li>
<a href="https://app.prweb.com/welcome" target="_blank">PRWeb</a>
</li>
<li>
<a href="https://mygorkana.com/" target="_blank">Gorkana Analysis</a>
</li>
</ul>
</div>
</div>
</nav>
</div>
<div id="header-right" class="column">
<div class="cta">
<a class="text__white js-link" href="/request-pricing/" target="_self">
<span class="cta__text" id="navbarDropdown" target="_self"> Request Pricing </span>
</a>
<a href="/speak-to-an-expert/" class="btn variant-1 js-link" target="_self">Get Started
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path></svg>
</a>
</div>
<div class="lang-selector">
<button href="#" type="button" data-toggle="modal" data-target="#globalModal" class="lang-selector__btn js-link" aria-label="lang-selector" aria-haspopup="true" aria-expanded="false">
<svg role="img" aria-labelledby="svg-global-title" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<title id="svg-global-title">Global Sites</title>
<path d="M11.9982 0C5.38308 0 0 5.38388 0 12C0 13.4436 0.257872 14.8263 0.727056 16.1122C0.730637 16.1194 0.734219 16.1301 0.7378 16.1373C2.42471 20.7224 6.83719 24 11.9982 24C17.1592 24 21.5717 20.7224 23.2622 16.1373C23.2658 16.1301 23.2694 16.1194 23.2729 16.1122C23.7421 14.8299 24 13.4436 24 12C23.9964 5.38388 18.6133 0 11.9982 0ZM8.54201 1.6406C7.25623 2.97313 6.2534 5.04358 5.70542 7.54746H2.02716C3.26996 4.77493 5.63379 2.61134 8.54201 1.6406ZM1.07447 12C1.07447 10.8215 1.26429 9.68597 1.6117 8.61851H5.49769C5.32577 9.68597 5.23265 10.8179 5.23265 12C5.23265 13.1785 5.32577 14.314 5.49769 15.3851H1.6117C1.26429 14.3176 1.07447 13.1821 1.07447 12ZM2.03074 16.4597H5.70542C6.2534 18.96 7.25623 21.0304 8.54201 22.363C5.63737 21.3887 3.27354 19.2287 2.03074 16.4597ZM11.461 22.8716C9.42307 22.4848 7.66095 19.9272 6.82644 16.4561H11.461V22.8716ZM11.461 15.3851H6.60439C6.41456 14.314 6.3107 13.1749 6.3107 12C6.3107 10.8251 6.41457 9.68955 6.60081 8.61851H11.461V15.3851ZM11.461 7.54388H6.82644C7.66095 4.06925 9.42307 1.51164 11.461 1.12478V7.54388ZM12.5354 1.12836C14.5733 1.51522 16.3355 4.07284 17.17 7.54746H12.5354V1.12836ZM12.5354 8.61851H17.3956C17.5854 9.68955 17.6857 10.8251 17.6857 12C17.6857 13.1749 17.5819 14.314 17.392 15.3851H12.5354V8.61851ZM12.5354 22.8716V16.4597H17.17C16.3355 19.9307 14.5733 22.4848 12.5354 22.8716ZM15.4544 22.3594C16.7402 21.0269 17.743 18.96 18.291 16.4561H21.9657C20.7229 19.2287 18.3591 21.3887 15.4544 22.3594ZM22.922 12C22.922 13.1821 22.7321 14.3176 22.3847 15.3851H18.4951C18.6671 14.314 18.7602 13.1821 18.7602 12C18.7602 10.8215 18.6671 9.68955 18.4951 8.61851H22.3847C22.7321 9.68597 22.922 10.8215 22.922 12ZM18.2946 7.54388C17.7466 5.04 16.7438 2.96955 15.458 1.63701C18.3626 2.61134 20.7265 4.77134 21.9728 7.54388H18.2946Z" fill="currentColor"></path>
</svg>
</button>

<div class="dropdown right">
<ul>
<li class="item"><a href="https://www.cision.asia/" target="_self">APAC (Eng)</a></li>
<li class="item"><a href="https://www.cision.ca/" target="_self">Canada (Eng)</a></li>
<li class="item"><a href="https://www.cision.ca/fr/" target="_self">Canada (Fr)</a></li>
<li class="item"><a href="https://www.cision.dk/" target="_self">Denmark</a></li>
<li class="item"><a href="https://www.cision.fi/" target="_self">Finland</a></li>
<li class="item"><a href="https://www.cision.fr/" target="_self">France</a></li>
<li class="item"><a href="https://www.cision.de/" target="_self">Germany</a></li>
<li class="item"><a href="https://www.cision.it/" target="_self">Italy</a></li>
<li class="item"><a href="https://www.cision.no/" target="_self">Norway</a></li>
<li class="item"><a href="https://www.cision.pt/" target="_self">Portugal</a></li>
<li class="item"><a href="https://www.cision.es/" target="_self">Spain</a></li>
<li class="item"><a href="https://www.cision.se/" target="_self">Sweden</a></li>
<li class="item"><a href="https://www.cision.nl/" target="_self">The Netherlands</a></li>
<li class="item"><a href="https://www.cision.co.uk/" target="_self">United Kingdom</a></li>
</ul>
</div>

</div>
<div class="mobile-menu-toggle">
<button type="button" class="js-toggle-mobile-menu first-focusable-element">
<span class="icon is-closed" aria-hidden="true">
<svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1L21 1" stroke="currentColor" stroke-width="1.5" />
<path d="M0 6L21 6" stroke="currentColor" stroke-width="1.5" />
<path d="M0 11L21 11" stroke="currentColor" stroke-width="1.5" />
</svg>
</span>
<span class="sr-only">Open menu</span>
</button>
</div>
<div id="mobile-menu" aria-label="menu" role="dialog" aria-modal="true">
<button type="button" class="hamburger-closebtn first-focusable-element" aria-label="Close">
<span class="icon is-open" aria-hidden="true">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.92871 2.92902L17.0708 17.0712" stroke="currentColor" stroke-width="1.5" />
<path d="M17.0723 2.92896L2.93013 17.0711" stroke="currentColor" stroke-width="1.5" />
</svg>
</span>
<span class="sr-only">Close menu</span>
</button>
<div class="content-wrapper">
<div class="items-wrapper">
<div class="items js-mobile-menu-items">
<a href="javascript:;" class="item js-mobile-menu-item" data-index="0" role="button" aria-expanded="false" aria-controls="mobileMenu-0-panel"> 
Solutions
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="javascript:;" class="item js-mobile-menu-item" data-index="1" role="button" aria-expanded="false" aria-controls="mobileMenu-1-panel"> 
Use Cases
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/resources/" class="item" data-index="2">
Resources
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="javascript:;" class="item js-mobile-menu-item" data-index="3" role="button" aria-expanded="false" aria-controls="mobileMenu-3-panel"> 
About Us
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/careers/" class="item" data-index="4">
Careers
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/contact-us/" class="item" data-index="5">
Contact &amp; Support
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="javascript:;" class="item js-mobile-menu-item" data-index="6" role="button" aria-expanded="false" aria-controls="mobileMenu-6-panel"> 
Customer Login
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
</div>
<div class="sub-menus">
<div class="sub-menu js-mobile-sub-menu" data-index="0" id="mobileMenu-0-panel">
<header class="sub-menu__header">
<button class="back-button js-mobile-sub-menu-close">
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
Back
</button>
<div class="sub-menu__title">Solutions</div>
</header>
<div class="sub-menu__items accordion js-accordion">
<div class="aci js-aci" data-index="0">
<header class="aci__header">
<button class="item-link js-aci-toggle">PR Distribution &amp; Placement</button>
</header>
<div class="aci__content js-aci-content">
<div class="aci__content-wrapper js-aci-content-wrapper">
<a href="/pr-distribution-and-placement/">PR Distribution &amp; Placement</a>
<a href="/pr-distribution-and-placement/prnewswire/">Distribution By PR Newswire</a>
<a href="/pr-distribution-and-placement/guaranteed-paid-placement/">Guaranteed Paid Placement</a>
</div>
</div>
</div>
<div class="aci js-aci" data-index="3">
<header class="aci__header">
<button class="item-link js-aci-toggle">Media Monitoring</button>
</header>
<div class="aci__content js-aci-content">
<div class="aci__content-wrapper js-aci-content-wrapper">
<a href="/media-monitoring/">Media Monitoring</a>
<a href="/media-monitoring/social/">Social Monitoring</a>
<a href="/media-monitoring/broadcast/">Broadcast Monitoring</a>
<a href="/media-monitoring/print/">Print Monitoring</a>
</div>
</div>
</div>
<div class="aci js-aci" data-index="4">
<header class="aci__header">
<button class="item-link js-aci-toggle">Media Analytics &amp; Measurement</button>
</header>
<div class="aci__content js-aci-content">
<div class="aci__content-wrapper js-aci-content-wrapper">
<a href="/media-analytics-and-measurement/">Media Analytics &amp; Measurement</a>
<a href="/media-analytics-and-measurement/media-analytics-and-measurement/">Brand Measurement &amp; Analytics</a>
</div>
</div>
</div>
<div class="aci js-aci" data-index="5">
<header class="aci__header">
<button class="item-link js-aci-toggle">Media Insights Services</button>
</header>
<div class="aci__content js-aci-content">
<div class="aci__content-wrapper js-aci-content-wrapper">
<a href="/media-insights-services/">Media Insights Services</a>
<a href="/media-insights-services/executive-briefings/">Curation &amp; Briefings</a>
<a href="/media-insights-services/analysis-reporting/">Analysis Reporting &amp; Consulting</a>
</div>
</div>
</div>
</div>
<div class="sub-menu__items simple">
<a href="/content-production-and-multimedia/" class="item-link">
Content Production &amp; Multimedia
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/media-relationship-management/" class="item-link">
Media Relationship Management
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/investor-relations-tools/" class="item-link">
Investor Relations Tools
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
</div>
</div>
<div class="sub-menu js-mobile-sub-menu" data-index="1" id="mobileMenu-1-panel">
<header class="sub-menu__header">
<button class="back-button js-mobile-sub-menu-close">
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
Back
</button>
<div class="sub-menu__title">Use Cases</div>
</header>
<div class="sub-menu__items accordion js-accordion">
</div>
<div class="sub-menu__items simple">
<a href="/use-cases/pr-and-corporate-communications/" class="item-link">
PR &amp; Corporate Communications
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/use-cases/brand-reputation-and-crisis-communications/" class="item-link">
Brand Reputation &amp; Crisis Communications
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/use-cases/campaign-and-event-reporting/" class="item-link">
Campaign &amp; Event Reporting
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/use-cases/social-media-listening/" class="item-link">
Social Media Listening
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/use-cases/investor-and-analyst-relations/" class="item-link">
Investor &amp; Analyst Relations
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/use-cases/regulatory-compliance/" class="item-link">
Regulatory Compliance
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/use-cases/microsite-creation-and-hosting/" class="item-link">
Digital Online Newsroom, IR and ESG Website
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/use-cases/digital-content-amplification/" class="item-link">
Digital Content Amplification
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
</div>
</div>
<div class="sub-menu js-mobile-sub-menu" data-index="2" id="mobileMenu-2-panel">
<header class="sub-menu__header">
<button class="back-button js-mobile-sub-menu-close">
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
Back
</button>
<div class="sub-menu__title">Resources</div>
</header>
</div>
<div class="sub-menu js-mobile-sub-menu" data-index="3" id="mobileMenu-3-panel">
<header class="sub-menu__header">
<button class="back-button js-mobile-sub-menu-close">
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
Back
</button>
<div class="sub-menu__title">About Us</div>
</header>
<div class="sub-menu__items accordion js-accordion">
</div>
<div class="sub-menu__items simple">
<a href="/about/" class="item-link">
About Cision
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/about/press-releases/" class="item-link">
Cision Press Releases
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/about/earned-media/" class="item-link">
Cision Earned Media
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/about/media-kit/" class="item-link">
Media Kit
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/about/global-leadership-team/" class="item-link">
Global Leadership
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/about/cision-values/" class="item-link">
Cision Values
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="/about/diversity-inclusion/" class="item-link">
Diversity &amp; Inclusion
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
</div>
</div>
<div class="sub-menu js-mobile-sub-menu" data-index="4" id="mobileMenu-4-panel">
<header class="sub-menu__header">
<button class="back-button js-mobile-sub-menu-close">
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
Back
</button>
<div class="sub-menu__title">Careers</div>
</header>
</div>
<div class="sub-menu js-mobile-sub-menu" data-index="5" id="mobileMenu-5-panel">
<header class="sub-menu__header">
<button class="back-button js-mobile-sub-menu-close">
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
Back
</button>
<div class="sub-menu__title">Contact &amp; Support</div>
</header>
</div>
<div class="sub-menu js-mobile-sub-menu" data-index="6" id="mobileMenu-6-panel">
<header class="sub-menu__header">
<button class="back-button js-mobile-sub-menu-close">
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
Back
</button>
<div class="sub-menu__title">Customer Login</div>
</header>
<div class="sub-menu__items accordion js-accordion">
</div>
<div class="sub-menu__items simple">
<a href="https://app.cision.com/?&_ga=2.17234041.1336999838.1679515367-1679404079.1659556974#/login" class="item-link">
Cision Communications Cloud
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="https://auth.trendkite.com/login?response_type=code&client_id=7r4gfkb61mnt65872001obb0bs&redirect_uri=https%3A%2F%2Fapp2.cision.com%2Foauth%2Fcallback%2Ftrendkite&scope=openid+email+aws.cognito.signin.user.admin&state=ZmdvcfwSVhwCiodYmqod_EVea5IYP-A0c6_RnU-SzK0" class="item-link">
Cision Next Gen
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="https://us.vocuspr.com/Login.aspx" class="item-link">
Cision PR Edition
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="https://app1.vocusgr.com/Login.aspx?LanguageID=1033&RedirectLink=" class="item-link">
Government Relations
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="https://portal.prnewswire.com/Login.aspx" class="item-link">
PR Newswire
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="https://app.prweb.com/welcome" class="item-link">
PRWeb
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
<a href="https://apps.metrica.net/login/" class="item-link">
Gorkana Analysis
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
</div>
</div>
</div>
</div>
<div class="cta">
<a href="/request-pricing/">
<span class="cta__text text__white">Request Pricing</span>
</a>
<a href="/speak-to-an-expert/" class="btn variant-1 last-focusable-element">
Speak to an Expert
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor" />
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor" />
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</header></div>
</div>
</div>
<input type="hidden" value="G-P5P2FG45YV" id="GA_ID" />
<main id="page" class="base-page" tabindex="-1">
<div class="root responsivegrid">
<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
<div class="banner aem-GridColumn aem-GridColumn--default--12">
<section class="section--top-hero">
<header class="section-header text-center">
<div class="wrapper">
<div class="flex">
<div class="content">
<h1 class="title">
Win Over Customers with Valued Access to Content from Dow Jones and Factiva
</h1>
</div>
</div>
</div>
</header>
</section></div>
<div class="columnselector aem-GridColumn aem-GridColumn--default--12">
<div class="wrapper">
<div class="main-area">
<div class="col">
<div class="customrte">
<div class="rich-text">
<div class="center"><p>Dow Jones has chosen Cision as the long-term exclusive provider and licensed reseller of Dow Jones content to PR and Corporate Communications (PRCC) professionals.</p>
<p>Dow Jones and Factiva publications offer PRCC professionals access to the most complete and respected collection of news, trends, and conversations available worldwide, with full-text content from more than 8,000 sources, including:</p>
<ul>
<li>The Wall Street Journal</li>
<li>Barron's</li>
<li>MarketWatch</li>
<li>Investor's Business Daily</li>
<li>The Globe and Mail</li>
<li>Dow Jones Newswires<br/>
 </li>
</ul>
<h2>Your Opportunity: Give Your Customers Access to Highly Coveted Publications</h2>
<p>These premium, paywalled news sources are not available publicly or via search engines, making it difficult for PRCC teams to get complete insights of industry trends and brand mentions.</p>
<p>By becoming a content distributor through Cision, you can integrate Dow Jones’ authoritative journalism and Factiva’s publication collection into your content network, effectively empower clients with the competitive intel they need to inform smarter, more strategic communication.</p>
<h2>Why Partner with Cision to Access Dow Jones Content</h2>
<p>When you partner with Cision, you get full-text, “behind the paywall” content from Dow Jones’ print and online sources – seamlessly integrated in your PRCC solutions for the best user experience.</p>
<p>This means your customers will have access to exclusive, real-time, “as-it-happens” content that enables them to proactively manage brand reputation, monitor business-critical topics, and advance global communication strategies.</p>
<p>They can also be confident they’re getting access to content feeds and data that are fully GDPR- and copyright-compliant.</p>
<p>The bottom line: When you give your clients access to the trusted, authoritative content they need to track news, trends and conversations that can impact brand reputation and inform key decision-making, you make yourself indispensable to them. It’s a win-win.</p>
<p>Learn more about becoming a Dow Jones and Factiva content distributor.  </p>
<p>Fill out the form below.</p>
</div>
</div>
<style>
ul {margin-left: 2rem;}

.title{max-width: 1080px;}

.center {
  margin: auto;
  max-width: 800px;
  padding: 1rem;
}
.center p, ul {margin-bottom: 1.75rem;}

.form { margin: auto;
  max-width: 800px;
  padding: 1rem;
}

</style>
</div>
<div class="eloqua">
<script src="/etc.clientlibs/cision-revamp/clientlibs/clientlib-common.min.js"></script>
<script src="/etc.clientlibs/cision-revamp/clientlibs/clientlibs.eloqua.min.js"></script>
<script src="https://www.google.com/recaptcha/api.js?render=6LcND_QUAAAAAP1F-ViHZtRv64_xwiGtTa9A4q8f" async defer></script>
<div style="display:none" id="configFlag">us</div>
<div class="form-area">
<div class="form-wrapper">
<form id="eloquaForm" name="USCisionFormContentPartners" class="form js-form" method="post">
<input type="hidden" name="elqFormName" value="USCisionFormContentPartners" id="elqFormName" />
<input type="hidden" name="elqResourceCategory" id="elqResourceCategory" />
<input type="hidden" name="gACampaign1" value="Cision Content Partners" id="gACampaign1" />
<input type="hidden" name="elqSiteID" value="1632284857" />
<input type="hidden" name="actionURL" value="https://s1632284857.t.eloqua.com/e/f2" id="actionURL" />
<input type="hidden" name="gAContent1" value id="gAContent1" />
<input type="hidden" name="gAMedium1" value id="gAMedium1" />
<input type="hidden" name="gASource1" value id="gASource1" />
<input type="hidden" name="gATerm1" value id="gATerm1" />
<input type="hidden" name="originalGACampaign1" value id="originalGACampaign1" />
<input type="hidden" name="originalGAContent1" value id="originalGAContent1" />
<input type="hidden" name="originalGAMedium1" value id="originalGAMedium1" />
<input type="hidden" name="originalGASource1" value id="originalGASource1" />
<input type="hidden" name="originalGATerm1" value id="originalGATerm1" />
<input type="hidden" name="sFDCLastCampaignID" id="sFDCLastCampaignID" value />
<input type="hidden" name="CLID" value id="CLID" />
<input type="hidden" name="clientID" value id="clientID" />
<input type="hidden" id="url" name="url" value />
<input type="hidden" id="site_refer" name="site_refer" value />
<input type="hidden" id="gclid" name="GCLID__c" value />
<input type="hidden" id="campaign_id" name="campaign_id" value />
<input type="hidden" name="retURL" value="/cision-content-partners/thank-you/" />
<input type="hidden" name="leadSourceMostRecent1" value />
<input type="hidden" name="campaignId" id="campaignId" />
<input type="hidden" id="externalurlset" />
<input type="hidden" name="recaptchaToken" id="recaptchaToken" value />
<div class="form-fields">
<div class="form-field half-width">
<label for="firstName">
<input type="text" class="field-input" name="firstName" id="firstName" required="required" autocomplete="firstName" />
<span class="field-label">First Name:</span>
</label>
</div>
<div class="form-field half-width">
<label for="lastName">
<input type="text" class="field-input" name="lastName" id="lastName" required="required" autocomplete="lastName" />
<span class="field-label">Last Name:</span>
</label>
</div>
<div class="form-field half-width">
<label for="emailAddress">
<input type="email" class="field-input" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$" name="emailAddress" id="emailAddress" required="required" autocomplete="emailAddress" />
<span class="field-label">Email Id:</span>
</label>
</div>
<div id="emailcheck" style="display:none">
<p style="color:red;">Please enter a valid Email</p>
</div>
<div class="form-field half-width">
<div class="label-phone">
<label for="busPhone">Phone :</label>
<input class="field-input" aria-haspopup="listbox" aria-labelledby="busPhone" type="tel" minlength="7" pattern="^((\+)|([1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$" name="busPhone" id="busPhone" required="required" autocomplete="busPhone" />
</div>
</div>
<div class="form-field half-width">
<label for="jobtitle">
<select class="field-input" id="jobtitle" name="jobtitle" aria-label="jobtitle" autocomplete="jobtitle" required="required">
<option value selected="selected">Job Title:*</option>
</select>
<span class="field-label">Job Title:</span>
</label>
</div>
<div class="form-field half-width">
<label for="country">
<select class="field-input" aria-haspopup="listbox" aria-label="country" id="country" name="country" autocomplete="country" required="required">
<option value selected="selected">Country:*</option>
</select>
<span class="field-label">Country:</span>
</label>
</div>
<div class="form-field half-width" style="display:none !important">
<label for="poi">
<input type="hidden" name="poidefaultval" value="none" id="poidefaultval" autocomplete="poidefaultval" />
<input type="hidden" name="poidefaultvalOption" id="poidefaultvalOption" autocomplete="poidefaultvalOption" />
<select class="field-input" id="poi" name="poi" aria-label="poi">
<option value>Main Product of Interest:*</option>
</select>
<span class="field-label">Main Product of Interest:</span>
</label>
</div>
<div class="form-field half-width">
<label for="company">
<input type="text" class="field-input" name="company" id="company" required="required" autocomplete="company" />
<span class="field-label">Company:</span>
</label>
</div>
<div class="form-field half-width">
<label for="state">
<select class="field-input" id="state" name="state" autocomplete="state" required>
<option value selected="selected">State:</option>
<option value="Not Applicable">Not Applicable</option>
</select>
<span class="field-label">State:</span>
</label>
</div>
</div>
<div>
<div class="xf-content-height">
<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
<div class="gdprText aem-GridColumn aem-GridColumn--default--12">
<div class="form-field d-none">
<div class="field-options">
<div class="field-option">
<input type="checkbox" value id="gDPROptIn1" name="gDPROptIn1" class="gdprchk" required="required" />
<label for="gDPROptIn1">
<span class="field-option-check">
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 1.79504L4.25076 9.27236L0.273438 5.29503L1.3341 4.23437L4.25076 7.15104L10.6674 0.734375L11.7281 1.79504Z" fill="currentColor"></path>
</svg>
</span>
<span class="field-option-text text text-small "><span class="required">*</span><p>By clicking here, you agree that Cision may use your information to contact you with marketing communications (newsletters, webinar invitations, event invitations, product information and educational resources). You can <a href="https://comms.cision.com/preference-center">unsubscribe here.</a></p>
<p>By submitting your information to Cision, you are verifying that you have read and agree to our <a href="https://gdpr.cision.com/dataprivacynotice_customersprospects">Privacy Notice.</a></p>
<p> </p>
</span>
</label>
</div>
</div>
</div>
<div class="form-field d-none">
<div class="field-options">
<div class="field-option">
<input type="checkbox" id="optin" value="1" name="optin" class="chk" />
<label for="optin">
<span class="field-option-check">
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7281 1.79504L4.25076 9.27236L0.273438 5.29503L1.3341 4.23437L4.25076 7.15104L10.6674 0.734375L11.7281 1.79504Z" fill="currentColor"></path>
</svg>
</span>
<span class="field-option-text text text-small"><p>By clicking here, you agree that Cision may use your information to contact you with marketing communications (newsletters, webinar invitations, event invitations, product information and educational resources). You can <a href="https://comms.cision.com/preference-center">unsubscribe here.</a></p>
<p>By submitting your information to Cision, you are verifying that you have read and agree to our <a href="https://gdpr.cision.com/dataprivacynotice_customersprospects">Privacy Notice.</a></p>
</span>
</label>
</div>
</div>
</div>
<div class="form-field ">
<div class="term-condition disclaimer" value="1" id="divTC">
<p>By submitting your information, you agree that Cision may use your information to contact you with marketing communications (newsletters, webinar invitations, event invitations, product information and educational resources). For more information, please see our <a href="https://gdpr.cision.com/dataprivacynotice_customersprospects">Privacy Notice.</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="form-field" id="recaptchaerror" style="display:none">
<p style="color:red;">Recaptcha validation fails Please try again</p>
</div>
<div class="form-footer">
<button type="submit" class="btn variant-1 ">
REGISTER NOW
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</button>
</div>
<script>
   // Show or hide marketo fields based on `data-zi-input-enriched` property
   window._ziInputObserver = new MutationObserver(mutationRecords => {
       mutationRecords.filter(mutation=>((mutation.target.nodeName=='INPUT' || mutation.target.nodeName=='SELECT') &&   mutation.target.dataset.ziInputEnriched=='false')).map(mutation=>mutation.target.parentElement.parentElement.style.display="block");
   }
   );
   window._ziInputObserver.observe($('#eloquaForm')[0], {
       attributes: true,
       subtree: true,
       attributeFilter: ['data-zi-input-enriched']
   })
</script>
</form>
</div>
</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script></div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</main>
<div class="xf-content-height">
<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
<div class="footer aem-GridColumn aem-GridColumn--default--12">
<footer id="main-footer">
<div class="wrapper large">
<div class="top">
<div class="logo">
<a href="/">
<svg width="140" height="39" role="img" aria-labelledby="footer-logo-title" viewbox="0 0 140 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<title id="footer-logo-title">Cision</title>
<path d="M26.5703 15.8099L32.0503 15.1855V0.330078H26.5703V15.8099Z" fill="white"></path>
<path d="M26.5703 38.3533H32.0503V23.4896L26.5703 22.8652V38.3533Z" fill="white"></path>
<path d="M26.5703 22.8656L32.0503 23.4899V15.1836L26.5703 15.8079V22.8656Z" fill="#E26540"></path>
<path d="M57.9661 2.73248C57.1592 1.91384 56.1942 1.25645 55.065 0.756167C53.9378 0.257953 52.6921 0.0078125 51.3319 0.0078125C49.7555 0.0078125 48.3767 0.284828 47.1954 0.834724C46.0142 1.38669 45.0367 2.1247 44.2673 3.05085C43.4957 3.97699 42.9155 5.08091 42.5203 6.36262C42.1252 7.64434 41.9297 8.9984 41.9297 10.4207C41.9297 11.7437 42.0586 12.9386 42.3061 14.0157L47.7902 13.3914C47.6363 13.0627 47.5344 12.6885 47.4908 12.2647C47.4367 11.75 47.4097 11.1174 47.4097 10.369C47.4097 9.72815 47.4637 9.11417 47.5719 8.52706C47.68 7.93996 47.8672 7.42314 48.1355 6.97867C48.4037 6.53421 48.7802 6.1683 49.2647 5.88302C49.7493 5.59773 50.367 5.45509 51.1177 5.45509C52.5153 5.45509 53.5094 5.90989 54.1 6.81743C54.6906 7.72496 54.9859 8.80201 54.9859 10.0486V11.2765H60.4659V8.60562C60.4659 7.53684 60.2517 6.497 59.8212 5.48196C59.3907 4.46693 58.7731 3.55113 57.9682 2.73248H57.9661Z" fill="white"></path>
<path d="M54.8784 29.9157C54.8056 30.6289 54.6371 31.2243 54.3689 31.706C54.1006 32.1876 53.7054 32.5597 53.1876 32.8264C52.6677 33.0931 51.9419 33.2275 51.0122 33.2275C49.6147 33.2275 48.6206 32.8264 48.03 32.0264C47.4393 31.2263 47.144 30.3271 47.144 29.3306V27.621H41.6641V29.6511C41.6641 30.9328 41.9053 32.1277 42.3899 33.2295C42.8744 34.3335 43.5275 35.2865 44.351 36.0865C45.1746 36.8886 46.1583 37.5212 47.3062 37.9822C48.4522 38.4453 49.6875 38.6768 51.0143 38.6768C52.7696 38.6768 54.2566 38.3915 55.4732 37.823C56.6898 37.2545 57.6672 36.4793 58.4014 35.4994C59.1355 34.5195 59.6637 33.3453 59.9861 31.9747C60.3084 30.6041 60.4707 29.1177 60.4707 27.5156C60.4707 27.2448 60.4665 26.9864 60.4603 26.7279L54.9574 26.1016C54.9782 26.5398 54.9907 27.0256 54.9907 27.5693C54.9907 28.4231 54.9553 29.2066 54.8825 29.9198L54.8784 29.9157Z" fill="white"></path>
<path d="M43.1444 16.3758C43.9513 17.9593 45.536 19.2328 47.8985 20.194L51.8208 21.7962C52.5009 22.0815 53.0478 22.3481 53.4596 22.5962C53.8714 22.8464 54.1937 23.1668 54.4267 23.5575C54.6596 23.9503 54.8114 24.465 54.8842 25.1059C54.9175 25.3974 54.9403 25.7302 54.9591 26.094L60.4619 26.7204C60.439 25.6496 60.3725 24.6718 60.2581 23.7973C60.1146 22.712 59.8359 21.7507 59.4262 20.9134C59.0145 20.0783 58.4321 19.3465 57.6793 18.7242C56.9264 18.102 55.9407 17.5583 54.7241 17.0952L50.5335 15.4393C49.816 15.154 49.2524 14.8708 48.8406 14.5855C48.4289 14.3002 48.1148 13.9715 47.9006 13.5974C47.8632 13.5312 47.8299 13.4609 47.7966 13.3906L42.3125 14.0149C42.5121 14.8791 42.7867 15.6688 43.1444 16.3758Z" fill="#E26540"></path>
<path d="M70.0859 38.355H75.5659V28.4445L72.6647 28.1137L70.0859 27.8223V38.355Z" fill="white"></path>
<path d="M70.0859 10.8567L75.5659 10.2323V0.330078H70.0859V10.8567Z" fill="white"></path>
<path d="M70.0861 27.819V27.8211L72.6649 28.1126L75.566 28.4434V10.2307L70.0861 10.855V27.819Z" fill="#E26540"></path>
<path d="M92.5192 6.3895C93.2533 5.76725 94.1206 5.45509 95.125 5.45509C96.1295 5.45509 96.9968 5.76725 97.7309 6.3895C98.1052 6.70786 98.3818 7.11511 98.5669 7.61333L104.078 6.98694C103.945 6.36883 103.756 5.78585 103.508 5.24216C102.972 4.06795 102.263 3.09839 101.387 2.33143C100.509 1.56654 99.5236 0.987702 98.4317 0.594919C97.3378 0.204204 96.2377 0.0078125 95.1271 0.0078125C94.0166 0.0078125 92.9143 0.204204 91.8225 0.594919C90.7286 0.987702 89.7449 1.56447 88.8673 2.33143C87.9896 3.09839 87.2826 4.06795 86.746 5.24216C86.2385 6.35229 85.9744 7.62366 85.9453 9.05009L91.4835 8.41957C91.6166 7.54304 91.9618 6.86497 92.5213 6.3895H92.5192Z" fill="white"></path>
<path d="M98.5633 31.0618C98.3803 31.562 98.1016 31.9734 97.7252 32.2918C96.991 32.914 96.1217 33.2262 95.1193 33.2262C94.1169 33.2262 93.2476 32.9161 92.5135 32.2918C91.9519 31.8163 91.6067 31.1362 91.4757 30.2555L85.9375 29.625C85.9645 31.0886 86.2287 32.3703 86.7382 33.466C87.2747 34.6237 87.9818 35.585 88.8595 36.3499C89.7371 37.1168 90.7208 37.6936 91.8147 38.0843C92.9065 38.475 94.0088 38.6714 95.1193 38.6714C96.2299 38.6714 97.33 38.475 98.4239 38.0843C99.5158 37.6936 100.502 37.1147 101.379 36.3499C102.257 35.585 102.964 34.6237 103.5 33.466C103.754 32.9202 103.945 32.3269 104.079 31.6902L98.5612 31.0618H98.5633Z" fill="white"></path>
<path d="M98.5625 7.61271C98.7393 8.09232 98.8287 8.65462 98.8287 9.29961V29.3791C98.8287 30.022 98.7393 30.5822 98.5646 31.0598L104.082 31.6882C104.232 30.975 104.309 30.206 104.309 29.3791V9.29961C104.309 8.47684 104.228 7.70574 104.074 6.98633L98.5625 7.61271Z" fill="#E26540"></path>
<path d="M91.4097 29.3821V9.30058C91.4097 8.98636 91.4325 8.69487 91.4741 8.41992L85.9359 9.05044C85.9359 9.13313 85.9297 9.21582 85.9297 9.30058V29.38C85.9297 29.4627 85.9338 29.5413 85.9338 29.624L91.472 30.2545C91.4305 29.9816 91.4097 29.6922 91.4097 29.38V29.3821Z" fill="#E26540"></path>
<path d="M128.269 38.3542H133.426V35.0301L126.773 34.2734L128.269 38.3542Z" fill="white"></path>
<path d="M114.297 38.3526H119.777V33.4759L114.297 32.8516V38.3526Z" fill="white"></path>
<path d="M127.945 4.27031L133.425 3.64599V0.330078H127.945V4.27031Z" fill="white"></path>
<path d="M119.563 0.330078H114.297V5.8249L121.26 5.03107L119.563 0.330078Z" fill="white"></path>
<path d="M127.944 23.2403H127.836L121.26 5.02961L114.297 5.82344V32.8531L119.777 33.4774V15.4962H119.885L126.771 34.2733L133.424 35.0299V3.64453L127.944 4.26885V23.2403Z" fill="#E26540"></path>
<path d="M17.721 12.4988L17.7293 8.8128C17.7293 7.63859 17.5047 6.51606 17.0576 5.44728C16.6084 4.37849 15.9907 3.44408 15.2046 2.64405C14.4164 1.84194 13.493 1.20109 12.4386 0.72148C11.3821 0.239804 10.2445 0 9.02791 0C7.98807 0 6.93159 0.142642 5.85847 0.425859C4.78328 0.711143 3.81622 1.20109 2.95731 1.89569C2.0984 2.5903 1.38923 3.5061 0.836033 4.64517C0.276598 5.78631 0 7.22927 0 8.97405V29.7026C0 31.4474 0.276598 32.8904 0.831874 34.0295C1.38715 35.1685 2.09424 36.0864 2.95315 36.7789C3.81206 37.4735 4.77912 37.9635 5.85431 38.2467C6.92951 38.532 7.98391 38.6746 9.02375 38.6746C10.2404 38.6746 11.378 38.4348 12.4344 37.9531C13.4909 37.4715 14.4122 36.8306 15.2004 36.0306C15.9886 35.2285 16.6063 34.2941 17.0534 33.2274C17.5005 32.1586 17.7252 31.0381 17.7252 29.8618V26.0973L12.187 25.4875V27.1558C12.187 28.2742 12.2036 30.821 11.563 31.8257C11.405 32.0738 11.222 32.2929 11.0119 32.4852C10.6917 32.7374 10.3444 32.9235 9.96377 33.0392C9.66014 33.1323 9.37314 33.1881 9.09862 33.2129C9.01751 33.2191 8.93433 33.2232 8.84698 33.2253C8.8345 33.2253 8.81994 33.2253 8.80747 33.2253C7.55342 33.2253 6.68619 32.8511 6.20162 32.1028C5.71913 31.3544 5.47581 30.4303 5.47581 29.3264V9.34823C5.47581 8.2443 5.71705 7.31816 6.20162 6.57188C6.68619 5.82352 7.55342 5.44934 8.80747 5.44934C8.81994 5.44934 8.83242 5.44934 8.84698 5.44934C8.93433 5.44934 9.01751 5.45555 9.09862 5.46175C9.37106 5.48655 9.66014 5.54237 9.96377 5.6354C10.3444 5.75117 10.6917 5.93722 11.0119 6.18943C11.2241 6.38169 11.405 6.60082 11.563 6.84889C12.2036 7.85359 12.187 10.4005 12.187 11.5189V13.1872L17.7189 12.4988H17.721Z" fill="white"></path>
<path d="M139.847 1.49396C139.747 1.26242 139.61 1.05983 139.437 0.888243C139.265 0.716659 139.061 0.580219 138.828 0.480989C138.595 0.38176 138.346 0.330078 138.082 0.330078C137.817 0.330078 137.568 0.379693 137.335 0.480989C137.102 0.580219 136.898 0.716659 136.726 0.888243C136.553 1.05983 136.416 1.26242 136.316 1.49396C136.214 1.72549 136.164 1.97356 136.164 2.23611C136.164 2.49865 136.214 2.74673 136.316 2.97826C136.418 3.2098 136.553 3.41239 136.726 3.58397C136.898 3.75556 137.102 3.892 137.335 3.99123C137.568 4.09046 137.817 4.14214 138.082 4.14214C138.346 4.14214 138.595 4.09252 138.828 3.99123C139.061 3.88993 139.265 3.75556 139.437 3.58397C139.61 3.41239 139.747 3.2098 139.847 2.97826C139.949 2.74673 139.999 2.49865 139.999 2.23611C139.999 1.97356 139.949 1.72549 139.847 1.49396ZM139.496 2.84182C139.415 3.03201 139.304 3.19532 139.167 3.3359C139.03 3.47647 138.868 3.58811 138.68 3.6708C138.493 3.75349 138.294 3.79484 138.082 3.79484C137.869 3.79484 137.67 3.75349 137.483 3.6708C137.295 3.58811 137.133 3.47647 136.996 3.3359C136.859 3.19532 136.748 3.03201 136.667 2.84182C136.586 2.65163 136.545 2.4511 136.545 2.23611C136.545 2.02111 136.586 1.82059 136.667 1.6304C136.748 1.44021 136.859 1.27689 136.996 1.13632C137.133 0.995741 137.295 0.884108 137.483 0.801417C137.67 0.718726 137.869 0.677381 138.082 0.677381C138.294 0.677381 138.493 0.718726 138.68 0.801417C138.868 0.884108 139.03 0.995741 139.167 1.13632C139.304 1.27689 139.415 1.44227 139.496 1.6304C139.577 1.82059 139.618 2.02111 139.618 2.23611C139.618 2.4511 139.577 2.65163 139.496 2.84182Z" fill="white"></path>
<path d="M138.62 2.31587C138.688 2.28899 138.749 2.25178 138.803 2.20217C138.855 2.15255 138.896 2.09053 138.927 2.01818C138.957 1.94582 138.973 1.85486 138.973 1.74943C138.973 1.33184 138.717 1.12305 138.206 1.12305H137.359V3.3433H137.709V2.37995H137.979L138.62 3.3433H139.044L138.403 2.36962C138.48 2.35928 138.555 2.34067 138.624 2.3138L138.62 2.31587ZM137.707 2.06573V1.43934H138.214C138.335 1.43934 138.432 1.46415 138.507 1.50963C138.582 1.55718 138.622 1.6316 138.622 1.73289C138.622 1.8528 138.578 1.93755 138.493 1.98717C138.405 2.03885 138.277 2.06366 138.104 2.06366H137.707V2.06573Z" fill="white"></path>
</svg>
</a>
</div>
<hr class="mobile" />
<div class="cta">
<a class="text__white" href="/request-pricing/" target="_self">
<span class="cta__text" target="_self"> Request Pricing </span>
</a>
<a href="/speak-to-an-expert/" class="btn variant-1" target="_self">
Get Started
<svg width="9" height="auto" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99136 1.09085H2.19674V0.5H8.00673V6.31H7.41589V1.50191L1.41779 7.5L1 7.08221L6.99136 1.09085Z" fill="currentColor"></path>
<path d="M6.99136 1.09085L7.16814 1.26762L7.59491 0.840847H6.99136V1.09085ZM2.19674 1.09085H1.94674V1.34085H2.19674V1.09085ZM2.19674 0.5V0.25H1.94674V0.5H2.19674ZM8.00673 0.5H8.25673V0.25H8.00673V0.5ZM8.00673 6.31V6.56H8.25673V6.31H8.00673ZM7.41589 6.31H7.16589V6.56H7.41589V6.31ZM7.41589 1.50191H7.66589V0.898353L7.23911 1.32513L7.41589 1.50191ZM1.41779 7.5L1.24102 7.67678L1.41779 7.85355L1.59457 7.67678L1.41779 7.5ZM1 7.08221L0.823223 6.90543L0.646447 7.08221L0.823223 7.25898L1 7.08221ZM6.99136 0.840847H2.19674V1.34085H6.99136V0.840847ZM2.44674 1.09085V0.5H1.94674V1.09085H2.44674ZM2.19674 0.75H8.00673V0.25H2.19674V0.75ZM7.75673 0.5V6.31H8.25673V0.5H7.75673ZM8.00673 6.06H7.41589V6.56H8.00673V6.06ZM7.66589 6.31V1.50191H7.16589V6.31H7.66589ZM7.23911 1.32513L1.24102 7.32322L1.59457 7.67678L7.59266 1.67868L7.23911 1.32513ZM1.59457 7.32322L1.17678 6.90543L0.823223 7.25898L1.24102 7.67678L1.59457 7.32322ZM1.17678 7.25898L7.16814 1.26762L6.81458 0.91407L0.823223 6.90543L1.17678 7.25898Z" fill="currentColor"></path>
</svg>
</a>
</div>
</div>
<hr/>
<div class="bottom">
<div class="privacy">
<h3>Privacy Concerns:</h3>
<a href="mailto:privacy@cision.com">privacy@cision.com</a>
</div>
<nav class="nav">
<a href="/legal/accessibility/">Accessibility Statement </a>
<a href="/cision-content-partners/">Cision Content Partners </a>
<a href="/contact-us/opt-out/">Cision ID Opt Out</a>
<a href="/legal/cookie-settings/">Cookie Settings</a>
<a href="/legal/">Legal</a>
<a href="https://www.cision.com/legal/privacy-policy/">Privacy Policy</a>
</nav>
<hr class="mobile" />
<div class="socials">
<a href="https://www.linkedin.com/company/cision" title="linkedin" target="_blank">
<svg width="20" height="19" role="img" aria-labelledby="footer-Linkedin-icon" viewbox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<title id="footer-Linkedin-icon">Linkedin</title>
<path d="M4.03772 2.03956C4.03772 3.16621 3.13775 4.07911 2.02697 4.07911C0.916189 4.07911 0.0162157 3.16621 0.0162157 2.03956C0.0162157 0.913722 0.916189 0 2.02697 0C3.13775 0 4.03772 0.913722 4.03772 2.03956ZM4.05393 5.71076H0V18.7639H4.05393V5.71076ZM10.5256 5.71076H6.49765V18.7639H10.5264V11.9118C10.5264 8.10194 15.4147 7.79029 15.4147 11.9118V18.7639H19.4589V10.4988C19.4589 4.07014 12.225 4.30428 10.5256 7.46886V5.71076Z" fill="currentColor"></path></svg>
</a>
<a href="https://twitter.com/cision" title="twitter" target="_blank">
<svg height="22" role="img" aria-labelledby="footer-Twitter-icon" viewbox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<title id="footer-Twitter-icon">Twitter</title>
<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="currentColor" /></svg>
</a>
<a href="https://www.instagram.com/cisionglobal" title="instagram" target="_blank">
<svg width="19" height="19" role="img" aria-labelledby="footer-Instagram-icon" viewbox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<title id="footer-Instagram-icon">Instagram</title>
<path d="M9.5026 12.6615C11.2515 12.6615 12.6693 11.2437 12.6693 9.49479C12.6693 7.74589 11.2515 6.32812 9.5026 6.32812C7.7537 6.32812 6.33594 7.74589 6.33594 9.49479C6.33594 11.2437 7.7537 12.6615 9.5026 12.6615Z" fill="currentColor"></path>
<path d="M13.4575 0H5.54087C2.48583 0 0 2.48663 0 5.54246V13.4591C0 16.5142 2.48663 19 5.54246 19H13.4591C16.5142 19 19 16.5134 19 13.4575V5.54087C19 2.48583 16.5134 0 13.4575 0ZM9.5 14.25C6.88038 14.25 4.75 12.1196 4.75 9.5C4.75 6.88038 6.88038 4.75 9.5 4.75C12.1196 4.75 14.25 6.88038 14.25 9.5C14.25 12.1196 12.1196 14.25 9.5 14.25ZM15.0417 4.75C14.6047 4.75 14.25 4.39533 14.25 3.95833C14.25 3.52133 14.6047 3.16667 15.0417 3.16667C15.4787 3.16667 15.8333 3.52133 15.8333 3.95833C15.8333 4.39533 15.4787 4.75 15.0417 4.75Z" fill="currentColor"></path></svg>
</a>
<a href="https://www.facebook.com/CisionGlobal" title="facebook" target="_blank">
<svg width="9" height="19" role="img" aria-labelledby="footer-Facebook-icon" viewbox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<title id="footer-Facebook-icon">Facebook</title>
<path d="M8.40388 9.36389H5.80662V18.7639H1.87154V9.36389H0V6.06035H1.87154V3.92258C1.87154 2.39384 2.60661 0 5.84164 0L8.7565 0.0120474V3.2187H6.64158C6.29467 3.2187 5.80688 3.38993 5.80688 4.11918V6.06342H8.74768L8.40388 9.36389Z" fill="currentColor"></path></svg>
</a>
</div>
</div>
<div class="copyright">
Copyright © 2024 Cision US Inc.
</div>
</div>
<div class="background">
<img src=" /content/dam/cision-revamp/footer-bg.png" alt="Footer Background" />
</div>
</footer>
</div>
</div>
</div>
<script src="/etc.clientlibs/cision-revamp/clientlibs/clientlib-revamp.min.js"></script>
<script src="/etc.clientlibs/cision-revamp/clientlibs/clientlib-custom.min.js"></script>
<script>(function(){var js = "window['__CF$cv$params']={r:'84f77e7b7b40193e',t:'MTcwNjkyOTk2NS4zNTkwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script></body>
</html>
