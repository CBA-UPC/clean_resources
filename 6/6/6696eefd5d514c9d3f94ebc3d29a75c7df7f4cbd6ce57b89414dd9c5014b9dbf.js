window.adroll_exp_list = []; __adroll.set_consent(null, false, true, "ES", "US", {"arconsent":null,"euconsent":null,"purposes":null,"eucookie":null,"banner":"adroll","ipgeo":{"country_code":"ES","region_name":"Barcelona"},"max_vendor_id":4202,"networks":["a","g","f","aol","r","b","x","l","d","k","kx","freespee","bcd","o","c","u","n","index","pubmatic","taboola","outbrain","narrative","i","m","w","st","cy","sib","triplelift","linkedin","pixalate","oath","onevideo"],"isipv6":false});s.sidebar="string"==typeof t?document.querySelector(t):t,void 0===this.sidebar)throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this._resizeListeners=[],this.dimensions={translateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach((t=>{this[t]=this[t].bind(this)})),this.initialize()}initialize(){if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),null===this.sidebarInner&&(this.sidebarInner=!1)),!this.sidebarInner){let t=document.createElement("div");for(t.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(t);this.sidebar.firstChild!=t;)t.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector){let t=document.querySelectorAll(this.options.containerSelector);if(t=Array.prototype.slice.call(t),t.forEach(((t,e)=>{t.contains(this.sidebar)&&(this.container=t)})),!t.length)throw new Error("The container does not contains on the sidebar.")}"function"!=typeof this.options.topSpacing&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),"function"!=typeof this.options.bottomSpacing&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}bindEvents(){window.addEventListener("resize",this,{passive:!0,capture:!1}),window.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+t,this),this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(new ResizeSensor(this.sidebarInner,this.handleEvent),new ResizeSensor(this.container,this.handleEvent))}handleEvent(t){this.updateSticky(t)}calcDimensions(){if(!this._breakpoint){var t=this.dimensions;t.containerTop=i.offsetRelative(this.container).top,t.containerHeight=this.container.clientHeight,t.containerBottom=t.containerTop+t.containerHeight,t.sidebarHeight=this.sidebarInner.offsetHeight,t.sidebarWidth=this.sidebar.offsetWidth,t.viewportHeight=window.innerHeight,this._calcDimensionsWithScroll()}}_calcDimensionsWithScroll(){var t=this.dimensions;t.sidebarLeft=i.offsetRelative(this.sidebar).left,t.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,t.viewportBottom=t.viewportTop+t.viewportHeight,t.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,t.topSpacing=this.options.topSpacing,t.bottomSpacing=this.options.bottomSpacing,"function"==typeof t.topSpacing&&(t.topSpacing=parseInt(t.topSpacing(this.sidebar))||0),"function"==typeof t.bottomSpacing&&(t.bottomSpacing=parseInt(t.bottomSpacing(this.sidebar))||0),"VIEWPORT-TOP"===this.affixedType?t.topSpacing<t.lastTopSpacing&&(t.translateY+=t.lastTopSpacing-t.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&t.bottomSpacing<t.lastBottomSpacing&&(t.translateY+=t.lastBottomSpacing-t.bottomSpacing,this._reStyle=!0),t.lastTopSpacing=t.topSpacing,t.lastBottomSpacing=t.bottomSpacing}isSidebarFitsViewport(){return this.dimensions.sidebarHeight<this.dimensions.viewportHeight}observeScrollDir(){var t=this.dimensions;if(t.lastViewportTop!==t.viewportTop){var e="down"===this.direction?Math.min:Math.max;t.viewportTop===e(t.viewportTop,t.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down")}}getAffixType(){var t=this.dimensions,e=!1;this._calcDimensionsWithScroll();var i=t.sidebarHeight+t.containerTop,s=t.viewportTop+t.topSpacing,n=t.viewportBottom-t.bottomSpacing;return"up"===this.direction?s<=t.containerTop?(t.translateY=0,e="STATIC"):s<=t.translateY+t.containerTop?(t.translateY=s-t.containerTop,e="VIEWPORT-TOP"):!this.isSidebarFitsViewport()&&t.containerTop<=s&&(e="VIEWPORT-UNBOTTOM"):this.isSidebarFitsViewport()?t.sidebarHeight+s>=t.containerBottom?(t.translateY=t.containerBottom-i,e="CONTAINER-BOTTOM"):s>=t.containerTop&&(t.translateY=s-t.containerTop,e="VIEWPORT-TOP"):t.containerBottom<=n?(t.translateY=t.containerBottom-i,e="CONTAINER-BOTTOM"):i+t.translateY<=n?(t.translateY=n-i,e="VIEWPORT-BOTTOM"):t.containerTop+t.translateY<=s&&(e="VIEWPORT-UNBOTTOM"),t.translateY=Math.max(0,t.translateY),t.translateY=Math.min(t.containerHeight,t.translateY),t.lastViewportTop=t.viewportTop,e}_getStyle(t){if(void 0!==t){var e={inner:{},outer:{}},s=this.dimensions;switch(t){case"VIEWPORT-TOP":e.inner={position:"fixed",top:s.topSpacing,left:s.sidebarLeft-s.viewportLeft,width:s.sidebarWidth};break;case"VIEWPORT-BOTTOM":e.inner={position:"fixed",top:"auto",left:s.sidebarLeft,bottom:s.bottomSpacing,width:s.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":let t=this._getTranslate(0,s.translateY+"px");e.inner=t?{transform:t}:{position:"absolute",top:s.translateY,width:s.sidebarWidth}}switch(t){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":e.outer={height:s.sidebarHeight,position:"relative"}}return e.outer=i.extend({height:"",position:""},e.outer),e.inner=i.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:this._getTranslate()},e.inner),e}}stickyPosition(e){if(!this._breakpoint){e=this._reStyle||e||!1,this.options.topSpacing,this.options.bottomSpacing;var s=this.getAffixType(),n=this._getStyle(s);if((this.affixedType!=s||e)&&s){let e="affix."+s.toLowerCase().replace("viewport-","")+t;i.eventTrigger(this.sidebar,e),"STATIC"===s?i.removeClass(this.sidebar,this.options.stickyClass):i.addClass(this.sidebar,this.options.stickyClass);for(let t in n.outer)n.outer[t],this.sidebar.style[t]=n.outer[t];for(let t in n.inner){let e="number"==typeof n.inner[t]?"px":"";this.sidebarInner.style[t]=n.inner[t]+e}let o="affixed."+s.toLowerCase().replace("viewport-","")+t;i.eventTrigger(this.sidebar,o)}else this._initialized&&(this.sidebarInner.style.left=n.inner.left);this.affixedType=s}}_widthBreakpoint(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),i.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}updateSticky(t={}){this._running||(this._running=!0,(t=>{requestAnimationFrame((()=>{"scroll"===t?(this._calcDimensionsWithScroll(),this.observeScrollDir(),this.stickyPosition()):(this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(!0)),this._running=!1}))})(t.type))}_setSupportFeatures(){var t=this.support;t.transform=i.supportTransform(),t.transform3d=i.supportTransform(!0)}_getTranslate(t=0,e=0,i=0){return this.support.transform3d?"translate3d("+t+", "+e+", "+i+")":!!this.support.translate&&"translate("+t+", "+e+")"}destroy(){window.removeEventListener("resize",this,{caption:!1}),window.removeEventListener("scroll",this,{caption:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+t,this);var e={inner:{position:"",top:"",left:"",bottom:"",width:"",transform:""},outer:{height:"",position:""}};for(let t in e.outer)this.sidebar.style[t]=e.outer[t];for(let t in e.inner)this.sidebarInner.style[t]=e.inner[t];this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}static supportTransform(t){var e=!1,i=t?"perspective":"transform",s=i.charAt(0).toUpperCase()+i.slice(1),n=document.createElement("support").style;return(i+" "+["Webkit","Moz","O","ms"].join(s+" ")+s).split(" ").forEach((function(t,i){if(void 0!==n[t])return e=t,!1})),e}static eventTrigger(t,e,i){try{var s=new CustomEvent(e,{detail:i})}catch(t){(s=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i)}t.dispatchEvent(s)}static extend(t,e){var i={};for(let s in t)void 0!==e[s]?i[s]=e[s]:i[s]=t[s];return i}static offsetRelative(t){var e={left:0,top:0};do{let i=t.offsetTop,s=t.offsetLeft;isNaN(i)||(e.top+=i),isNaN(s)||(e.left+=s),t="BODY"===t.tagName?t.parentElement:t.offsetParent}while(t);return e}static addClass(t,e){i.hasClass(t,e)||(t.classList?t.classList.add(e):t.className+=" "+e)}static removeClass(t,e){i.hasClass(t,e)&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static hasClass(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}}return i})(),o=n;window.StickySidebar=n;const r={init:function(){console.log("Sticky Sidebar loaded using jQuery ",s.fn.jquery),s(".acsBanner").outerHeight(!0),s(".acsHeader").outerHeight(!0),s(".acsBreadcrumb").outerHeight(!0);var t=s(".footer").outerHeight(!0)+s(".more-from-series").outerHeight(!0);window.onload=function(){new o("#sidebar",{containerSelector:"#main-wrapper",innerWrapperSelector:".sidebar__inner",topSpacing:40,bottomSpacing:t})}}}}}]);
//# sourceMappingURL=static/resources/js/cq5-articlestickysidebar.4362b0da101cc54c2cfb.js.map