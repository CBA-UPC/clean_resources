"use strict";(self.mvWrapperJsonp=self.mvWrapperJsonp||[]).push([[675],{5182:(e,t,i)=>{i.d(t,{Dn:()=>s});var s=(e=>(e["3gpp"]="video/3gpp",e["3gpp2"]="video/3gpp2",e.flash="application/x-shockwave-flash",e.flv="video/x-flv",e.javascript="application/javascript",e.m4v="video/x-m4v",e.mp4="video/mp4",e.mpeg="video/mpeg",e.ogg="video/ogg",e.quicktime="video/quicktime",e.webm="video/webm",e.wmv="video/x-ms-wmv",e))(s||{})},7666:(e,t,i)=>{i.d(t,{F:()=>n});var s=i(3528);const r=new s.Yd(s.in.debug);function n(e,t,i){let s=e.parentElement,n=!1;for(;s;){for(const o in t){const a=t[o];if(i){const t=getComputedStyle(s)[o];t!==a&&(r.debug(`MEDIAVINE OVERRIDE ANCESTOR REPORT:\n                \nModifying ancestor element from '${o}: ${t}' to '${o}: ${a}'\n                \nBase Element`,e,"\nAncestor Modified: ",s),n=!0)}s.style.setProperty(o,a,"important")}s=s.parentElement}i&&!n&&r.debug("MEDIAVINE OVERRIDE ANCESTOR REPORT: No ancestors of base element")}},3190:(e,t,i)=>{i.d(t,{O:()=>s});class s{4548:(e,t,i)=>{i.d(t,{b:()=>d});var s=i(6469),r=i(6039),n=Object.getPrototypeOf,o=Reflect.get,a=(e,t,i)=>o(n(e),i,t),l=(e,t,i)=>new Promise(((s,r)=>{var n=e=>{try{a(i.next(e))}catch(e){r(e)}},o=e=>{try{a(i.throw(e))}catch(e){r(e)}},a=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,o);a((i=i.apply(e,t)).next())}));function d(e,t){return class t extends e{validate(){return super.validate()}adunits(){return l(this,null,(function*(){var e;const i=[];if(null==(e=this.ibvConfig)?void 0:e.meetsIBVCriteria()){const e=this.getIBVAdunit();e&&i.push(e)}return i.push(...yield a(t.prototype,this,"adunits").call(this)),i}))}getIBVAdunit(){var e;let t,i;r.A.isMobileOrTablet?(t=`${this.slotName}_ibv_mobile`,i=`${this.id}_ibv_mobile`):(t=`${this.slotName}_ibv_desktop`,i=`${this.id}_ibv_desktop`);const n=this.model.bidRequests[t];if(!n)return;const o=(0,s.X)(n,"Error copying outstream bid requests");return o?(o.forEach((),{code:i,bids:o,mediaTypes:{banner:{sizes:(null==(e=this.ibvConfig)?void 0:e.ibvSizes())||[]}}}):void 0}}}},9383:(e,t,i)=>{i.d(t,{H:()=>a});var s=i(6469),r=i(5595),n=Object.getPrototypeOf,o=Reflect.get;const a=(e,t)=>class t extends e{dunits(){return e=this,a=null,l=function*(){const e=yield(a=t.prototype,l=this,d="adunits",o(n(a),d,l)).call(this);var a,l,d;if(!this.model.mv_native_enabled&&!(0,r.DY)("test","nativeTestAd")&&!(0,r.DY)("test","nativeTestVideoAd"))return e;const[{buildRequestFromTemplate:c},{getTemplate:u}]=yield Promise.all([i.e(9300).then(i.bind(i,9300)),i.e(6409).then(i.bind(i,6409))]),h=u(this),p=(0,s.X)(this.model.bidRequests.native);p.map(();const m=c(h);return[...e,{code:this.id,bids:p,mediaTypes:{native:m}}]},new Promise(((t,i)=>{var s=e=>{try{n(l.next(e))}catch(e){i(e)}},r=e=>{try{n(l.throw(e))}catch(e){i(e)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,r);n((l=l.apply(e,a)).next())}));var e,a,l}}},2415:(e,t,i)=>{i.d(t,{q:()=>p});var s=i(6039),r=i(2946),n=i(5182),o=i(5595),a=i(1507),l=Object.getPrototypeOf,d=Reflect.get,c=u=const h="debug"===(0,o.Ph)("loglevel",window.location.search)?"https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js":"https://imasdk.googleapis.com/js/sdkloader/ima3.js";function p(e,t){return class t extends e{leanup(){var e;super.cleanup(),(null==(e=null==this?void 0:this.outstreamRenderer)?void 0:e.container)&&(this.outstreamRenderer.container.remove(),this.outstreamRenderer.cleanup())}adunits(){return u(this,null,(function*(){const e=[];if(this.meetsOutstreamCriteria()){const t=yield this.getOutstreamAdunit();t&&e.push(t)}return e.push(...yield c(t.prototype,this,"adunits").call(this)),e}))}getOutstreamAdunit(){return u(this,null,(function*(){let e;const{default:t}=yield Promise.all([i.e(8110),i.e(1664),i.e(5048)]).then(i.bind(i,1664));e=s.A.isMobileOrTablet?`${this.id}_outstream_mobile`:`${this.id}_outstream_desktop`;const n=new t(this.getVideoOptions(e),window.$adManagementConfig.web.model,void 0,{},{}).getAdUnits(),o=r.Rw.new(this.model);return n.bids=n.bids.filter((t=>(o.bidder!==t.bidder||!o.isPrebid()||!o.isOutstream())&&(t.isOutstream=!0,t.outstreamAdUnitCode=e,!0))),n.renderer={url:h,render:yield this.getRenderer()},n}))}getVideoOptions(e){var t;const[i,r]=(0,a.f)(this,null==(t=this.target)?void 0:t.parentElement);return{prebid:!0,autoplay:!0,placement:this.outstreamPlacement,plcmt:this.outstreamPlcmt,mimes:[n.Dn.javascript,n.Dn.mp4,n.Dn.webm],contentHeight:r,contentWidth:i,adunitId:e,mobile:s.A.isMobileOrTablet,isOutstream:!0}}getRenderer(){return u(this,null,(function*(){const{OutstreamRenderer:e}=yield Promise.all([i.e(6381),i.e(8110),i.e(8982),i.e(706)]).then(i.bind(i,5629));return(t=>u(this,null,(function*(){this.outstreamRenderer=this.outstreamRenderer||e.new(this),yield this.outstreamRenderer.loadAd(t)}))).bind(this)}))}}}},1507:(e,t,i)=>{i.d(t,{f:()=>n});var s=i(2037);const r=9/16;function n(e,t){const i=e.maxOutstreamWidth,n=Math.min(i,t&&(0,s.Z)(t)||i),o=Math.round(n*r);return[Math.round(n),Math.round(o)]}},8970:(e,t,i)=>{i.d(t,{LB:()=>h});var s=i(2321),r=i(6039),n=i(2200),o=i(7666),a=i(9225),l=i(5595),d=i(7879),c=i(5571);const u="mv-inview-sticky",h=(e,t)=>class extends e{constructor(...e){super(...e),this.inViewIsEnabled&&this.setupSlotAndModel()}setupSlotAndModel(){this.onRail=!0,this.restrictRefreshSize=!1,this.adBoxConfig&&(this.adBoxConfig.heightPxToContain=440),this.rail.setupWrapElementListener(),s.Z.on(s.Z.events.slotWrapperRenderEnded,(e=>{e===this&&(p(`\n  [class*='${c.Ux}'].${u} {\n    display: block;\n  }\n\n  [class*='${c.z}'].${u} {\n    position: sticky;\n    position: -webkit-sticky;\n  }\n`),(0,o.F)(this.rail.sticky,{overflow:"visible"},(0,l.DY)("test","mobileInview")))}))}get inViewIsEnabled(){return e=this.model,(0,d.XH)(e)&&(r.A.isMobileOrTablet&&e.mobile_inview||r.A.isDesktop&&e.desktop_inview)||this.forceInView;var e}applyInViewLayout(){this.rail.slide.classList.add(u),this.rail.sticky.classList.add(u);const e=this.rail.spaceNeededForAdReport();this.rail.slide.style.paddingBottom=`${e}px`}removeInViewLayout(){this.rail.slide.classList.remove(u),this.rail.sticky.classList.remove(u),this.rail.slide.style.paddingBottom=""}};const p=(0,a.r)((e=>(0,n.hm)(e)))},8391:(e,t,i)=>{i.d(t,{iP:);i(2321);var s=i(2379),r=i(6039),n=i(2200),o=(i(7666),i(9225)),a=i(5595),l=i(5662),d=i(953),c=i(7879),u=i(5571);const h="mv-interscroller-outer",p="mv-interscroller-inner",m=14,v={threshold:0,rootMargin:"200px 0px 200px 0px"},b=(0,a.DY)("forceInterscroll","true"),f=(0,a.DY)("forceTallOnly","true");let g=(0,a.Ph)("parallaxShift")||"";g&&"object"==typeof g&&(g=g[0]);const y=[[300,600],[320,480],[300,400]],w=(e,t)=>class extends e{constructor(...e){super(...e),this.isInWindow=!1,this.adReportSpace=0,this._gSlotSizeFilter=y,this.updatePosition=this.setupObserver=(0,o.r)((e=>{(0,l.c)().onChange((t=>{t.forEach((({target:t,intersectionRatio:i})=>{const s=t.getAttribute("data-slotid")||"",r=d.Z.getSlotById(s);if(!r||e!==r)return;const n=e.rail.slide;n&&i>0?(e.isInWindow=!0,n.style.display=""):n&&(e.isInWindow=!1,n.style.display="none")}))}),v)})),this.observeRail=()=>{this.setupObserver(this),(0,l.c)().observe(this.rail.frame,v)},this.interscrollerIsEnabled&&this.interscrollerSetup()}interscrollerSetup(){S(`\n\t.${h},\n\t.${h}[class*='${u.U}'] {\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\tinset: 0px;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    ${R()};\n\t}\n\n\t.${p},\n\t.mv-ad-box .adunitwrapper.${p}{\n\t\tposition: absolute;\n\t\ttop: 0;\n\t}\n`),this.setupObserver(this),this.adBoxConfig&&(this.adBoxConfig.heightPxToContain=329),this.rail.setupWrapElementListener()}validate(){return super.validate()&&!!this.interscrollerConfig}get sizes(){const e=super.sizes.slice();if(!this.interscrollerIsEnabled)return e;if(!this.interscrollerEnalbedForSlot)return this.refreshSizeRestricted=!0,e;const t=y;return f?t:(e.splice(1,0,...t),e)}pplyInterscrollerLayout(){this.adReportSpace=this.rail.spaceNeededForAdReport();const e=this.labelBuffer||0;var t,i;this.observeRail(),t=this.rail.frame,i=this.wrapper,t.classList.add(h),i.classList.add(p),this.rail.frame.style.top=`${e}px`,this.rail.frame.style.height=`calc(100% - ${this.adReportSpace+e}px)`,window.addEventListener("scroll",this.updatePosition,{passive:!0,capture:!1}),this.updatePosition()}removeInterscrollerLayout(){var e,t;e=this.rail.frame,t=this.wrapper,e.classList.remove(h),t.classList.remove(p),window.removeEventListener("scroll",this.updatePosition),this.wrapper.style.transform="",this.rail.frame.style.top="",this.rail.frame.style.height=""}updateParallax(){const{DIST_unavailableTopOfScreen:e,DIST_functionalAvailableViewport:t}=this.getScreenPositionValues(),i=(s=this).height?s.height-s.rail.frame.getBoundingClientRect().height:0;var s;const r=function(e,t){var i;return t-((null==(i=e.adBoxConfig)?void 0:i.heightPxToContain)||401)}(this,t),n=function(e,t,i){const s=e.rail.frame.getBoundingClientRect().top,r=i-s+t,n=r/i;return n<=0?0:n>=1?1:n}(this,e,r);x(this,n*i*-1)}updateCentering(){const{DIST_unavailableTopOfScreen:e,DIST_functionalAvailableViewport:t}=this.getScreenPositionValues();x(this,(t-(this.height||0))/2+e)}getScreenPositionValues(){const e=function(e){const t=r.A.isMobileOrTablet&&e.model.mobile_header_offset||0,i=document.querySelector("body.grow-me-scroll-carousel-active");return t+(i?60:0)}(this),t=function(){if(!document.querySelector("body.adhesion"))return 0;return r.A.isDesktop?90:50}();return{DIST_unavailableTopOfScreen:e,DIST_functionalAvailableViewport:s.G.height-e-t+this.adReportSpace}}get interscrollerEnalbedForSlot(){var e;return this.interscrollerIsEnabled&&!!(null==(e=this.interscrollerConfig)?void 0:e.isSlotValid())}get interscrollerLayoutApplies(){return Boolean(this.height&&this.interscrollerEnalbedForSlot&&this.height>=401)}get interscrollerIsEnabled(){return function(e){if(b)return!0;return(0,c.XH)(e)&&(r.A.isMobileOrTablet&&e.interscroller_mobile||r.A.isDesktop&&e.interscroller_desktop)}(this.model)}};function x(e,t){const[i,s]=R().split(":");e.wrapper.style.setProperty("top",`${t}px`),e.rail.frame.style.setProperty(i,"none"),e.rail.frame.offsetWidth,e.rail.frame.style.setProperty(i,s)}function R(){return"Safari"===r.A.browser&&r.A.isIOS&&parseInt(r.A.osversion.split(".")[0],10)<=m?"clip: rect(0px, auto, auto, 0px)":"clip-path: inset(0px 0px)"}const S=(0,o.r)(()}}]);