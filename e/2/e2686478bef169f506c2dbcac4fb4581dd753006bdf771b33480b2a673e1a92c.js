"use strict";(self.webpackChunkWPS_Drive=self.webpackChunkWPS_Drive||[]).push([[8377],{44384:function(e,t){var n={render:staticRenderFns:[,name:"KFlash",install:;t.Z=n},28377:function(e,t,n){n.r(t);var s=n(37311),i=n(49200),r=n(39859),o=n(25429),c=n(2406),a=n.n(c),l=n(20144),u=n(45821),p=n(80589),h=n(24650),f=n.n(h),v=n(44384),d=n(26743),m=n(87936),b=l.default.extend(v.Z);function w(e){var t=document.querySelector(e);return t||new Promise((function(t,n){var s=new MutationObserver((function(n,s){n.some((function(){var n=document.querySelector(e);return!!n&&(s.disconnect(),t(n),!0)}))}));s.observe(document.body,{childList:!0,subtree:!0}),setTimeout((,1e4)}))}var k="k-step-guide-popover-reference",x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-popover",{key:e.currentStep,ref:"popover",attrs:{trigger:"manual",popperOptions:{boundariesElement:"viewport",removeOnDestroy:!0},reference:e.reference,placement:e.placement,popperClass:"k-step-guide-popover "+e.style,width:e.width,offset:e.offset},model:{value:e.tipsVisable,callback:expression:"tipsVisable"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.showCloseIcon,expression:"showCloseIcon"}],staticClass:"k-step-guide-popover-close",on:{click:e.close}},[n("k-icon",{attrs:{type:"close"}})],1),e._v(" "),n("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.content,expression:"content"}],staticClass:"k-step-guide-popover-content"}),e._v(" "),e.image?n("img",{staticClass:"k-step-guide-popover-img",attrs:{src:e.image}}):e._e(),e._v(" "),e.showFooter?n("div",{staticClass:"k-step-guide-popover-footer"},[e.steps.length>1?[n("span",{staticClass:"k-step-guide-popover-step"},[e._v(e._s(e.currentStep+1)+"/"+e._s(e.steps.length))]),e._v(" "),n("div",{staticClass:"k-step-guide-popover-button-list"},[e.showNextBtn?n("span",{staticClass:"k-step-guide-popover-button-text",on:{click:e.next}},[e._v(e._s(e.nextBtnText))]):n("span",{staticClass:"k-step-guide-popover-button-text",on:{click:e.doneClick}},[e._v(e._s(e.endBtnText))])])]:e.showEndBtn?n("div",{staticClass:"k-step-guide-popover-button-list"},[n("span",{staticClass:"k-step-guide-popover-button-text",on:{click:e.doneClick}},[e._v(e._s(e.endBtnText))])]):e._e()],2):e._e()])},staticRenderFns:[],name:"KStepGuidePopover",components:{KIcon:p.default,ElPopover:f()},data:function(){return{visible:!1,reference:null,steps:[],currentStep:0,content:"",image:"",nextBtnText:this.lang("next"),endBtnText:this.lang("end"),showEndBtn:!1,showFooter:!0,placement:"bottom-start",style:"blue",width:280,isHoverShowTips:!1,tipsTimeout:5e3,tipsVisable:!1,flashVisable:!1,showCloseIcon:!0,showFlash:!0,offset:0,flashPosition:{top:0,left:0,right:0,bottom:0},afterOpen:function(){},afterClose:function(){},afterNext:function(){},afterDone:function(){},afterMouseenter:function(){},afterMouseleave:function(){},afterClickOutside:function(){}}},computed:{showNextBtn:notScrollIntoView:function(){var e=window.top||window,t=(0,d.getUA)(e.navigator.userAgent);return t&&t.isIE||t.isQQ}},watch:{visible:function(e){e?(this.tipsVisable=!0,this.flashVisable=!0,document.addEventListener("click",this.clickOutside,!0)):(this.tipsVisable=!1,this.flashVisable=!1,document.removeEventListener("click",this.clickOutside,!0))},flashVisable:,directives:{"dompurify-html":m.Z},mounted:methods:{lang:open:function(){var e=this;return(0,s.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.steps[e.currentStep]){t.next=3;break}return t.abrupt("return");case 3:if(!n.beforeOpen){t.next=6;break}return t.next=6,n.beforeOpen();case 6:return t.next=8,e.waitReferenceExist();case 8:return Object.keys(n).forEach((function(t){"reference"!==t||"string"!=typeof n[t]?e[t]=n[t]:e[t]=document.querySelector(n[t])})),e.scrollIntoView(),e.visible=!0,t.next=13,e.afterOpen({currentStep:e.currentStep});case 13:e.handleTipsTimeout();case 14:case"end":return t.stop()}}),t)})))()},handleTipsTimeout:function(){var e=this;this.isHoverShowTips&&setTimeout((,this.tipsTimeout)},waitReferenceExist:function(){var e=this;return(0,s.Z)(a().mark((function t(){var n,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.steps[e.currentStep],"string"!=typeof(s=n.reference)){t.next=5;break}return t.next=5,w(s);case 5:case"end":return t.stop()}}),t)})))()},next:doneClick:function(){var e=this;return(0,s.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.afterDone({currentStep:e.currentStep});case 2:return t.next=4,e.close();case 4:case"end":return t.stop()}}),t)})))()},close:function(){var e=this;return(0,s.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.visible=!1,t.next=3,e.afterClose({currentStep:e.currentStep});case 3:case"end":return t.stop()}}),t)})))()},clickOutside:function(e){this.$refs.popover.popperElm.contains(e.target)||(this.afterClickOutside(e,this.currentStep),this.visible=!1)},scrollIntoView:function(){!this.notScrollIntoView&&this.reference&&this.reference.scrollIntoView&&this.reference.scrollIntoView({behavior:"instant",block:"center"})},handletipsMouseenter:function(){this.tipsVisable=!0,this.afterMouseenter({currentStep:this.currentStep})},handletipsMouseleave:function(){this.tipsVisable=!1,this.afterMouseleave({currentStep:this.currentStep})},setFlash:function(){if(this.reference&&this.showFlash){var e=new b,t=this.flashPosition,n=t.top,s=void 0===n?0:n,i=t.left,r=void 0===i?0:i,o=t.right,c=void 0===o?0:o,a=t.bottom,l=void 0===a?0:a;e.$mount(),e.$el.style.top="".concat(s,"px"),e.$el.style.left="".concat(r,"px"),e.$el.style.right="".concat(c,"px"),e.$el.style.bottom="".concat(l,"px"),this.reference.classList.add(k),this.reference.appendChild(e.$el),this.flashInstance=e,this.isHoverShowTips&&(e.$el.addEventListener("mouseenter",this.handletipsMouseenter,!1),e.$el.addEventListener("mouseleave",this.handletipsMouseleave,!1))}},removeFlash:function(){this.flashInstance&&this.reference&&(this.isHoverShowTips&&(this.flashInstance.$el.removeEventListener("mouseenter",this.handletipsMouseenter),this.flashInstance.$el.removeEventListener("mouseleave",this.handletipsMouseleave)),this.reference.classList.remove(k),this.reference.removeChild(this.flashInstance.$el),this.flashInstance=null)}}};r S="k-step-guide-popover-reference",O=l.default.extend(x),C=l.default.extend(v.Z),_=new Map,I=function(){eturn(0,o.Z)(e,[{key:"show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this,n="".concat(this.name,"_").concat(e),i=new O({data:y({steps:this.steps,currentStep:e},this.options),methods:{next:function(){return(0,s.Z)(a().mark((function n(){var s;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.visible=!1,s=e+1,n.next=4,i.afterNext({currentStep:e});case 4:t.show(s);case 5:case"end":return n.stop()}}),n)})))()}}});i.$mount(),i.$watch("visible",(),_.set(n,i)}},{key:"showFlash",value:function(){var e=new C,t=this.options,n=t.top,s=void 0===n?0:n,i=t.left,r=void 0===i?0:i,o=t.right,c=void 0===o?0:o,a=t.bottom,l=void 0===a?0:a,u=t.reference,p=void 0===u?null:u,h=this;e.$mount(),e.$el.style.top="".concat(s,"px"),e.$el.style.left="".concat(r,"px"),e.$el.style.right="".concat(c,"px"),e.$el.style.bottom="".concat(l,"px"),p.classList.add(S),p.appendChild(e.$el),p.scrollIntoView&&p.scrollIntoView({behavior:"instant",block:"center"}),this.flashInstance=e,document.addEventListener("click",(function e(){h.flashInstance&&(p.classList.remove(S),p.removeChild(h.flashInstance.$el),h.flashInstance=null,document.removeEventListener("click",e,!0))}),!0)}}],[{key:"closeAll",value:]),e}();t.default=I}}]);