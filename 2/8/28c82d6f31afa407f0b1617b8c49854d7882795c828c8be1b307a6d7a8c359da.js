/*
 *  custombox - Modal dialog effects with transitions CSS3
 *  version: 4.0.3
 *  http://dixso.github.io/custombox/
 *  (c) 2017 Julio de la Calle - @dixso9
 *
 *  Under MIT License - http://opensource.org/licenses/MIT
 */
"use strict"; _extends=Object.assign||_createClass=),Custombox;!function(e){var t="custombox",n=t+"-open",o=t+"-close",i=t+"-lock",s="animateFrom",r=["top","right","bottom","left"],l=["slide","blur","flip","rotate","letmein","makeway","slip","corner","slidetogether","push","contentscale"],c=["blur","makeway","slip","push","contentscale"],a=["letmein","makeway","slip","corner","slidetogether","door","push","contentscale"],h=["corner","slidetogether","scale","door","push","contentscale"],d=["fall","sidefall","flip","sign","slit","letmein","makeway","slip"],u=function(){eturn _createClass(e,null,[{key:"check",value:,{key:"isIE",value:function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!isNaN(parseInt(e.substring(t+5,e.indexOf(".",t)),10));if(e.indexOf("Trident/")>0){var n=e.indexOf("rv:");return!isNaN(parseInt(e.substring(n+3,e.indexOf(".",n)),10))}var o=e.indexOf("Edge/");return o>0&&!isNaN(parseInt(e.substring(o+5,e.indexOf(".",o)),10))}}]),e}(),m=function(){function e(){_classCallCheck(this,e),this.position=document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0,document.documentElement.classList.add(t+"-perspective")}return _createClass(e,[{key:"remove",value:function(){document.documentElement.classList.remove(t+"-perspective"),window.scrollTo(0,this.position)}}]),e}(),p=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return Object.keys(n).forEach(,n}return _inherits(t,e),t}(function e(){_classCallCheck(this,e),this.overlay={color:"#000",opacity:.48,close:!0,speedIn:300,speedOut:300,onOpen:null,onComplete:null,onClose:null,active:!0},this.content={id:null,target:null,container:null,clone:!1,animateFrom:"top",animateTo:"top",positionX:"center",positionY:"center",width:null,effect:"fadein",speedIn:300,speedOut:300,delay:150,fullscreen:!1,onOpen:null,onComplete:null,onClose:null,close:!0},this.loader={active:!0,color:"#FFF",background:"#999",speed:1e3}}),f=function(){function e(n){_classCallCheck(this,e),this.options=n,this.element=document.createElement("div"),this.element.classList.add(t+"-loader"),this.element.style.borderColor=this.options.loader.background,this.element.style.borderTopColor=this.options.loader.color,this.element.style.animationDuration=this.options.loader.speed+"ms",document.body.appendChild(this.element)}return _createClass(e,[{key:"show",value:,{key:"destroy",value:]),e}(),v=function(){function e(n){if(_classCallCheck(this,e),this.options=n,"loading"===document.readyState)throw new Error("You need to instantiate Custombox when the document is fully loaded");var o=document.querySelector(this.options.content.container);if(o)this.element=o;else if(document.querySelector("."+t+"-container"))document.querySelector("."+t+"-container")&&(this.element=document.querySelector("."+t+"-container"));else{for(this.element=document.createElement("div");document.body.firstChild;)this.element.appendChild(document.body.firstChild);document.body.appendChild(this.element)}this.element.classList.add(t+"-container"),this.element.classList.add(t+"-"+this.options.content.effect),this.element.style.animationDuration=this.options.content.speedIn+"ms",u.check(l,this.options.content.effect)&&this.setAnimation()}return _createClass(e,[{key:"bind",value:function(e){var t=this;return e===o&&(u.check(l,this.options.content.effect)&&this.setAnimation("animateTo"),this.element.classList.remove(n)),this.element.classList.add(e),new Promise(function(e){return t.listener().then(function(){return e()})})}},{key:"remove",value:function(){this.element.classList.remove(o),this.element.classList.remove(t+"-"+this.options.content.effect),this.element.style.removeProperty("animation-duration");var e=document.querySelectorAll("."+t+"-content"),n=document.querySelector(this.options.content.container);if(!e.length)if(n)for(var i=this.element.className.split(" "),s=0,r=i.length;s<r;s++)i[s].startsWith(t+"-")&&this.element.classList.remove(i[s]);else{for(var l=document.querySelector("."+t+"-container");l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.parentNode.removeChild(l)}}},{key:"listener",value:function(){var e=this;return new Promise(function(t){u.isIE()?setTimeout(t,e.options.content.speedIn):e.element.addEventListener("animationend",function(){return t()},!0)})}},{key:"setAnimation",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=0,o=r.length;n<o;n++)this.element.classList.contains(t+"-"+r[n])&&this.element.classList.remove(t+"-"+r[n]);this.element.classList.add(t+"-"+this.options.content[e])}}]),e}(),y=function(){function e(n){_classCallCheck(this,e),this.options=n,this.element=document.createElement("div"),this.element.style.backgroundColor=this.options.overlay.color,this.element.classList.add(t+"-overlay"),this.setAnimation()}return _createClass(e,[{key:"bind",value:function(e){var i=this;switch(e){case o:u.check(a,this.options.content.effect)&&this.toggleAnimation("animateTo"),this.element.classList.add(o),this.element.classList.remove(n);break;default:document.body.appendChild(this.element),this.element.classList.add(t+"-"+this.options.content.effect),this.element.classList.add(n)}return new Promise(function(e){return i.listener().then(function(){return e()})})}},{key:"remove",value:function(){try{this.element.parentNode.removeChild(this.element),this.style.parentNode.removeChild(this.style)}catch(e){}}},{key:"createSheet",value:function(){return this.style=document.createElement("style"),this.style.setAttribute("id",t+"-overlay-"+Date.now()),document.head.appendChild(this.style),this.style.sheet}},{key:"listener",value:function(){var e=this;return new Promise(function(t){u.isIE()?setTimeout(t,e.options.overlay.speedIn):e.element.addEventListener("animationend",function(){return t()},!0)})}},{key:"setAnimation",value:function(){var e=this.createSheet();if(u.check(a,this.options.content.effect)?(this.element.style.opacity=this.options.overlay.opacity.toString(),this.element.style.animationDuration=this.options.overlay.speedIn+"ms",this.toggleAnimation()):(e.insertRule("."+t+"-overlay { animation: CloseFade "+this.options.overlay.speedOut+"ms; }",0),e.insertRule("."+n+"."+t+"-overlay { animation: OpenFade "+this.options.overlay.speedIn+"ms; opacity: "+this.options.overlay.opacity+" }",0),e.insertRule("@keyframes OpenFade { from {opacity: 0} to {opacity: "+this.options.overlay.opacity+"} }",0),e.insertRule("@keyframes CloseFade { from {opacity: "+this.options.overlay.opacity+"} to {opacity: 0} }",0)),u.check(h,this.options.content.effect)){var o=this.options.overlay.speedIn;u.check(h,this.options.content.effect)&&(o=this.options.content.speedIn),this.element.style.animationDuration=o+"ms"}}},{key:"toggleAnimation",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=0,o=r.length;n<o;n++)this.element.classList.contains(t+"-"+r[n])&&this.element.classList.remove(t+"-"+r[n]);this.element.classList.add(t+"-"+this.options.content[e])}}]),e}(),b=function(){function e(n){_classCallCheck(this,e),this.options=n,this.element=document.createElement("div"),this.element.style.animationDuration=this.options.content.speedIn+"ms",this.options.content.id&&this.element.setAttribute("id",t+"-"+this.options.content.id),u.check(h,this.options.content.effect)||(this.element.style.animationDelay=this.options.content.delay+"ms"),this.element.classList.add(t+"-content"),this.options.content.fullscreen?this.element.classList.add(t+"-fullscreen"):(this.element.classList.add(t+"-x-"+this.options.content.positionX),this.element.classList.add(t+"-y-"+this.options.content.positionY)),u.check(l,this.options.content.effect)&&this.setAnimation()}return _createClass(e,[{key:"fetch",value:function(){var e=this;return new Promise(function(n,o){var i=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,s=e.options.content.target.match(i);if(s&&11==s[2].length){var r=document.createElement("div"),l=document.createElement("iframe");if(l.setAttribute("src","https://www.youtube.com/embed/"+s[2]),l.setAttribute("frameborder","0"),l.setAttribute("allowfullscreen",""),l.setAttribute("width","100%"),l.setAttribute("height","100%"),r.appendChild(l),!e.options.content.fullscreen){var c=window.innerWidth>560?560:window.innerWidth,a=window.innerHeight>315?315:window.innerHeight,h=parseInt(e.options.content.width,10);e.options.content.width&&window.innerWidth>h&&(a=Math.round(a*h/c),c=h),l.setAttribute("width",c+"px"),l.setAttribute("height",a+"px")}e.element.appendChild(r),n()}else if("#"!==e.options.content.target.charAt(0)&&"."!==e.options.content.target.charAt(0)){var d=new XMLHttpRequest;d.open("GET",e.options.content.target),d.onload=function(){if(200===d.status){e.element.insertAdjacentHTML("beforeend",d.response);var t=e.element.firstChild;try{t.style.display="block"}catch(e){o(new Error("The ajax response need a wrapper element"))}e.options.content.width&&(t.style.flexBasis=e.options.content.width),n()}else o(new Error(d.statusText))},d.onerror=d.send()}else{var u=document.querySelector(e.options.content.target);u?(e.options.content.clone?(u=u.cloneNode(!0)).removeAttribute("id"):(e.reference=document.createElement("div"),e.reference.classList.add(t+"-reference"),e.reference.setAttribute("style",u.getAttribute("style")),u.parentNode.insertBefore(e.reference,u.nextSibling)),u.style.display="block",e.options.content.width&&(u.style.flexBasis=e.options.content.width),e.element.appendChild(u),n()):o(new Error("The element doesn't exist"))}})}},{key:"bind",value:function(e){var i=this;switch(e){case o:this.element.style.animationDelay="0ms",this.element.style.animationDuration=this.options.content.speedOut+"ms",this.element.classList.remove(n),this.element.classList.add(o),this.setAnimation("animateTo");break;default:document.body.appendChild(this.element),this.element.classList.add(t+"-"+this.options.content.effect),this.element.classList.add(n)}return new Promise(}},{key:"remove",value:function(){var e=new RegExp("^[#|.]");!this.options.content.clone&&e.test(this.options.content.target)&&(this.element.childNodes[0].setAttribute("style",this.reference.getAttribute("style")),this.reference.parentNode.insertBefore(this.element.childNodes[0],this.reference.nextSibling),this.reference.parentNode.removeChild(this.reference));try{this.element.parentNode.removeChild(this.element)}catch(e){}}},{key:"listener",value:function(){var e=this;return new Promise(function(t){u.isIE()?setTimeout(t,e.options.content.speedIn):e.element.addEventListener("animationend",!0)})}},{key:"setAnimation",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=0,o=r.length;n<o;n++)this.element.classList.contains(t+"-"+r[n])&&this.element.classList.remove(t+"-"+r[n]);this.element.classList.add(t+"-"+this.options.content[e])}}]),e}(),w=function(){function s(t){_classCallCheck(this,s),this.action=this.options=new p(t)}return _createClass(s,[{key:"open",value:function(){var e=this;this.build(),this.options.loader.active&&this.loader.show(),this.content.fetch().then(function(){u.check(d,e.options.content.effect)&&(e.scroll=new m),e.options.overlay.active?(e.dispatchEvent("overlay.onOpen"),e.overlay.bind(n).then(function(){e.dispatchEvent("overlay.onComplete"),e.options.loader.active&&e.loader.destroy()})):e.options.loader.active&&e.loader.destroy(),e.container&&e.container.bind(n),document.body.classList.add(i),e.content.bind(n).then(,e.dispatchEvent("content.onOpen"),e.listeners()}).catch(function(t){throw e.options.loader.active&&e.loader.destroy(),t})}},{key:"build",value:function(){this.options.loader.active&&(this.loader=new f(this.options)),u.check(c,this.options.content.effect)&&(this.container=new v(this.options)),this.options.overlay.active&&(this.overlay=new y(this.options)),this.content=new b(this.options)}},{key:"_close",value:function(){var e=this,t=[this.content.bind(o).then(function(){return e.content.remove()})];this.options.overlay.active&&t.push(this.overlay.bind(o).then(function(){e.scroll&&e.scroll.remove(),e.overlay.remove(),e.dispatchEvent("overlay.onClose")})),this.container&&t.push(this.container.bind(o).then(),Promise.all(t).then(function(){e.options.content.close&&document.removeEventListener("keydown",e.action,!0),e.dispatchEvent("content.onClose"),document.body.classList.remove(i)})}},{key:"dispatchEvent",value:function(e){var n=e.replace(".on",":").toLowerCase(),o=new CustomEvent(t+":"+n),i=Object.create(this.options);document.dispatchEvent(o);try{e.split(".").reduce(i).call()}catch(e){}}},{key:"listeners",value:function(){var e=this,n=window.getComputedStyle(this.content.element).getPropertyValue("animation-fill-mode");document.addEventListener("fullscreenchange",function(){window.getComputedStyle(e.content.element).getPropertyValue("animation-fill-mode")===n?e.content.element.style.animationFillMode="backwards":e.content.element.style.animationFillMode=n},!0),this.options.content.close&&document.addEventListener("keydown",this.action,!0),this.options.overlay.close&&this.content.element.addEventListener("click",!0),this.content.element.addEventListener(t+":close",!0)}}],[{key:"close",value:function(e){var n=new CustomEvent(t+":close"),o=document.querySelectorAll("."+t+"-content");e&&(o=document.querySelectorAll("#"+t+"-"+e));try{o[o.length-1].dispatchEvent(n)}catch(e){throw new Error("Custombox is not instantiated")}}},{key:"closeAll",value:function(){for(var e=new CustomEvent(t+":close"),n=document.querySelectorAll("."+t+"-content"),o=n.length,i=0;i<o;i++)n[i].dispatchEvent(e)}}]),s}();e.modal=w}(Custombox||(Custombox={}));