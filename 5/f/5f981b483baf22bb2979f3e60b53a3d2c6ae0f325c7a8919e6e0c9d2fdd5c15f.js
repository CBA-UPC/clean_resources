(self.webpackChunkWPS_Drive=self.webpackChunkWPS_Drive||[]).push([[8487],{93059:function(e,t,o){e.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=104)}({0:104:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"dialog-fade"},on:{"after-enter":e.afterEnter,"after-leave":e.afterLeave}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"kdv-dialog__wrapper",on:{click:function(t){return t.target!==t.currentTarget?null:e.handleWrapperClick(t)}}},[o("div",{key:e.key,ref:"dialog",class:["kdv-dialog","kdv-dialog",{"is-fullscreen":e.fullscreen,"kdv-dialog--center":e.center},e.customClass],style:e.style,attrs:{role:"dialog","aria-modal":"true","aria-label":e.title||"dialog"}},[o("div",{staticClass:"kdv-dialog__header"},[e._t("title",[o("span",{staticClass:"kdv-dialog__title"},[e._v(e._s(e.title))])]),e.showClose?o("button",{staticClass:"kdv-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:e.handleClose}},[o("Close",{staticClass:"kdv-dialog__close"})],1):e._e()],2),e.rendered?o("div",{staticClass:"kdv-dialog__body"},[e._t("default")],2):e._e(),e.$slots.footer?o("div",{staticClass:"kdv-dialog__footer"},[e._t("footer")],2):e._e()])])])};n._withStripped=!0;var i=o(17),r=o.n(i),s=o(13),a=o.n(s),l=o(4),c=o.n(l),p=o(22),u=o.n(p),f=o(20),d=o.n(f),h={name:"KdDialog",mixins:[r.a,c.a,a.a],components:{Close:u.a},props:{title:{type:String,default:""},modal:{type:Boolean,default:!0},modalAppendToBody:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},width:String,fullscreen:Boolean,customClass:{type:String,default:""},top:{type:String,default:"15vh"},beforeClose:Function,center:{type:Boolean,default:!1},destroyOnClose:Boolean},data:function(){return{closed:!1,key:0}},watch:{visible:function(e){var t=this;e?(this.closed=!1,this.$emit("open"),this.$el.addEventListener("scroll",this.updatePopper),this.$nextTick((function(){t.$refs.dialog.scrollTop=0})),this.appendToBody&&d.a.getPopperContainer().appendChild(this.$el)):(this.$el.removeEventListener("scroll",this.updatePopper),this.closed||this.$emit("close"),this.destroyOnClose&&this.$nextTick((function(){t.key++})))}},computed:{style:function(){var e={};return this.fullscreen||(e.marginTop=this.top,this.width&&(e.width=this.width)),e}},methods:{getMigratingConfig:function(){return{props:{size:"size is removed."}}},handleWrapperClick:function(){this.closeOnClickModal&&this.handleClose()},handleClose:function(){"function"==typeof this.beforeClose?this.beforeClose(this.hide):this.hide()},hide:function(e){!1!==e&&(this.$emit("update:visible",!1),this.$emit("close"),this.closed=!0)},updatePopper:afterEnter:function(){this.$emit("opened")},afterLeave:function(){this.$emit("closed")}},mounted:function(){this.visible&&(this.rendered=!0,this.open(),this.appendToBody&&d.a.getPopperContainer().appendChild(this.$el))},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},m=o(0),b=Object(m.a)(h,n,[],!1,null,null,null).exports;b.install=function(e){e.component(b.name,b)};t.default=b},13:function(e,t){e.exports=o(86321)},17:function(e,t){e.exports=o(21805)},20:function(e,t){e.exports=o(84808)},22:function(e,t){e.exports=o(53607)},4:function(e,t){e.exports=o(61011)}})},61011:function(e,t){"use strict";.__esModule=!0,t.default={methods:{dispatch:broadcast:}},86321:20225:function(e,t,o){e.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=165)}({165:function(e,t,o){"use strict";o.r(t);var n=o(5),i=o.n(n),r=o(21),s=o.n(r),a=o(2),l=o(3),c=o(7),p=o.n(c),u={name:"KdTooltip",mixins:[i.a],props:{openDelay:{type:Number,default:400},closeDelay:{type:Number,default:100},disabled:Boolean,manual:Boolean,effect:{type:String,default:"dark"},arrowOffset:{type:Number,default:0},popperClass:String,content:String,visibleArrow:{default:!0},transition:{type:String,default:"kdv-fade-in-linear"},popperOptions:{default:,enterable:{type:Boolean,default:!0},hideAfter:{type:Number,default:0},tabindex:{type:Number,default:0},maxWidth:{type:Number,default:320},trigger:{type:String,default:"hover"}},data:beforeCreate:render:function(e){var t=this;this.popperVM&&(this.popperVM.node=e("transition",{attrs:{name:this.transition},on:{afterLeave:this.doDestroy}},[e("div",{on:{mouseleave:mouseenter:,ref:"popper",attrs:{role:"tooltip",id:this.tooltipId,"aria-hidden":this.disabled||!this.showPopper?"true":"false"},directives:[{name:"show",value:!this.disabled&&this.showPopper}],style:{"max-width":this.maxWidth+"px"},class:["kdv-tooltip__popper","is-"+this.effect,this.popperClass]},[this.$slots.content||this.content])]));var o=this.getFirstElement();if(!o)return null;var n=o.data=o.data||{};return n.staticClass=this.addTooltipClass(n.staticClass),o},mounted:function(){var e=this;this.referenceElm=this.$el,1===this.$el.nodeType&&(this.$el.setAttribute("aria-describedby",this.tooltipId),this.$el.setAttribute("tabindex",this.tabindex),"hover"===this.trigger?Object(a.on)(this.referenceElm,"mouseenter",this.show):"click"===this.trigger&&Object(a.on)(this.referenceElm,"click",this.show),Object(a.on)(this.referenceElm,"mouseleave",this.hide),Object(a.on)(this.referenceElm,"focus",(),Object(a.on)(this.referenceElm,"blur",this.handleBlur),Object(a.on)(this.referenceElm,"click",this.removeFocusing)),this.value&&this.popperVM&&this.popperVM.$nextTick(()},watch:{focusing:content:,methods:{show:function(){this.setExpectedState(!0),this.handleShowPopper()},hide:handleFocus:function(){this.focusing=!0,this.show()},handleBlur:removeFocusing:addTooltipClass:handleShowPopper:function(){var e=this;this.expectedState&&!this.manual&&(clearTimeout(this.timeout),"hover"===this.trigger?this.timeout=setTimeout((function(){e.showPopper=!0}),this.openDelay):this.showPopper=!0,this.hideAfter>0&&(this.timeoutPending=setTimeout((,this.hideAfter)))},handleClosePopper:function(){var e=this;if(!(this.enterable&&this.expectedState||this.manual)){if(clearTimeout(this.timeout),this.timeoutPending&&clearTimeout(this.timeoutPending),"hover"===this.trigger)var t=setTimeout((,this.closeDelay);else this.showPopper=!1;this.disabled&&this.doDestroy()}},setExpectedState:getFirstElement:,beforeDestroy:destroyed:install:function(e){e.component(u.name,u)}};t.default=u},2:function(e,t){e.exports=o(75062)},21:function(e,t){e.exports=o(42823)},3:function(e,t){e.exports=o(2900)},5:function(e,t){e.exports=o(13127)},7:function(e,t){e.exports=o(20144)}})},11246:13127:function(e,t,o){"use strict";t.__esModule=!0;var n=s(o(20144)),i=o(21805),r=s(o(84808));ar a=n.default.prototype.$isServer?function(){}:o(11246),l=t.default={props:{transformOrigin:{type:[Boolean,String],default:!0},placement:{type:String,default:"bottom"},boundariesPadding:{type:Number,default:5},reference:{},popper:{},offset:{default:0},value:Boolean,visibleArrow:Boolean,arrowOffset:{type:Number,default:35},appendToBody:{type:Boolean,default:!0},popperOptions:{type:Object,default:function(){return{gpuAcceleration:!1}}}},data:function(){return{showPopper:!1,currentPlacement:""}},watch:{value:{immediate:!0,handler:,showPopper:,methods:{createPopper:function(){var e=this;if(!this.$isServer&&(this.currentPlacement=this.currentPlacement||this.placement,/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement))){var t=this.popperOptions,o=this.popperElm=this.popperElm||this.popper||this.$refs.popper,n=this.referenceElm=this.referenceElm||this.reference||this.$refs.reference;!n&&this.$slots.reference&&this.$slots.reference[0]&&(n=this.referenceElm=this.$slots.reference[0].elm),o&&n&&(this.visibleArrow&&this.appendArrow(o),this.appendToBody&&r.default.getPopperContainer().appendChild(this.popperElm),this.popperJS&&this.popperJS.destroy&&this.popperJS.destroy(),t.placement=this.currentPlacement,t.offset=this.offset,t.arrowOffset=this.arrowOffset,this.popperJS=new a(n,o,t),this.popperJS.onCreate((),"function"==typeof t.onUpdate&&this.popperJS.onUpdate(t.onUpdate),this.popperJS._popper.style.zIndex=i.PopupManager.nextZIndex(),this.popperElm.addEventListener("click",l))}},updatePopper:doDestroy:destroyPopper:function(){this.popperJS&&this.resetTransformOrigin()},resetTransformOrigin:appendArrow:,beforeDestroy:function(){this.doDestroy(!0),this.popperElm&&this.popperElm.parentNode===r.default.getPopperContainer()&&(this.popperElm.removeEventListener("click",l),r.default.getPopperContainer().removeChild(this.popperElm))},deactivated:},18487:function(e,t,o){"use strict";var n=o(16253),i=o(30720),r=o(37311),s=o(2406),a=o.n(s),l=o(20144),c=o(68630),p=o.n(c),u=o(82492),f=o.n(u),d=o(49200),h=o(10928),m=o.n(h),b=o(27361),v=o.n(b),g=o(57557),y=o.n(g),_=o(66177),C=o.n(_),k=o(93059),w=o.n(k),x=o(95272),O=o(78718),$=o.n(O),P=o(80589),E=o(77105),T=o(26426),S=o.n(T),N=o(45821),j=o(7562),M=o(7018),B=["size","width","showClose","closeOnPressEscape","closeOnClickModal","callback","terminal","modalAppendToBody","newDesign"],A=["title","footer","icon","subIcon","backtoPrevIcon"];r D={};function W(e){var t="KDialogWrapper".concat(e);try{delete D[t]}catch(e){}e||(D={})}var R=!l.default.prototype.$isServer&&window.__WPSENV__,F={large:"600px",small:"450px"},Z={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.dialogVisible?o("div",{class:e.wrapperClass,on:{dragover:e.onDragover,dragenter:e.onDragenter,keydown:},["div"===e.tag?o("div",{class:[e.cloudClassName,e.pcOfficeClassName,e.className]},[e.loading?[o("loading")]:[o("keep-alive",[o(e.component,{tag:"component",on:{change:e.push,replace:e.replace,close:e.onClose}})],1)]],2):e.useNewLayout?o("kd-dialog",{ref:"dialog",staticClass:"k-dialog-box",class:[e.cloudClassName,e.pcOfficeClassName,e.className,e.useNewLayout?"new-design":"",e.extraClass,e.headless?"is-headless":""],attrs:{visible:e.visible,width:e.Width,lockScroll:e.lockScroll,beforeClose:e.handleClose,showClose:e._showClose,modal:e.showModal&&!e.internalModal,closeOnPressEscape:e.closeOnPressEscape,closeOnClickModal:e.closeOnClickModal,modalAppendToBody:e._modalAppendToBody},on:{"update:visible":function(t){e.visible=t},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleOk(t)}}},[e.loading?[o("loading")]:[o("keep-alive",[o(e.component,{ref:"childrenComponent",tag:"component",on:{change:e.push,replace:e.replace,close:e.onClose}})],1)],e._v(" "),o("span",{staticClass:"kdv-dialog__title",class:{"with-icon":e.current.data&&e.current.data.icon,"with-right-gap":e._showClose},attrs:{slot:"title"},slot:"title"},[e.current.data&&e.current.data.icon?[o("KIcon",{attrs:{type:e.current.data.icon}}),e._v(" "),o("span",[e._v(e._s(e.current.data.title))])]:o("span",[e._v(e._s(e.pageTitle))])],2)],2):o("el-dialog",{ref:"dialog",staticClass:"k-dialog-box",class:[e.cloudClassName,e.pcOfficeClassName,e.className,e.useNewLayout||e.newDesign?"new-design":"",e.extraClass,e.headless?"is-headless":""],attrs:{visible:e.visible,width:e.Width,lockScroll:e.lockScroll,beforeClose:e.handleClose,showClose:e._showClose,modal:e.showModal,zIndex:e._zIndex,closeOnPressEscape:e.closeOnPressEscape,closeOnClickModal:e.closeOnClickModal,modalAppendToBody:e._modalAppendToBody},on:{"update:visible":function(t){e.visible=t},keyup:},[e.loading?[o("loading")]:[o("keep-alive",[o(e.component,{ref:"childrenComponent",tag:"component",on:{change:e.push,replace:e.replace,close:e.onClose}})],1)]],2),e._v(" "),e.useNewLayout&&e.internalModal?o("div",{staticClass:"kdv-modal kso-overlay",class:{"is-hidden":!e.visible},style:"z-index:"+e.modalZInex+";"}):e._e()],1):e._e()},staticRenderFns:[],name:"KDialog",components:(0,d.Z)((0,d.Z)((0,d.Z)((0,d.Z)({},C().name,C()),w().name,w()),"loading",x.Z),"KIcon",(),data:function(){return{tag:"dialog",loading:!1,visible:!0,delayVisible:!0,pages:{},state:[],callback:function(){},hasClickCloseBtn:!1,className:"",headless:!1,pcOfficeClassName:"",cloudClassName:"",extraClass:"",internalModal:!1,useAnimation:!1,dialogWrapperClass:void 0,mfClassName:""}},computed:{dialogVisible:modalZInex:wrapperClass:function(){return void 0!==this.dialogWrapperClass?this.dialogWrapperClass:R?""!==this.mfClassName?["kso-microApp__container",this.mfClassName]:"kso-microApp__container":""!==this.mfClassName?this.mfClassName:""},page:function(){var e=this.current.name,t=this.pages;return e&&t[e]||{}},pageTitle:function(){return this.page.title?"function"==typeof this.page.title?this.page.title()||this.current.data.title:this.current.data.title?this.current.data.title:this.page.title:""},terminal:function(){return this.state.length<=1||this.page.terminal||v()(this.current,"data.terminal")},pageAttrs:function(){return y()(this.page,["body"])||{}},current:function(){var e=m()(this.state)||{},t=e.name,o=t&&this.pages[t]||{};return f()({},y()(o,["body"])||{},e)},key:function(){return this.current.name},Width:function(){var e=this.current,t=e.width,o=e.size;return t||o&&F[o]||v()(this.current,"data.width")||"450px"},lockScroll:function(){var e;return void 0!==(null===(e=this.current)||void 0===e?void 0:e.lockScroll)?this.current.lockScroll:!window.WPSOpenApi},_showClose:function(){return!1!==this.current.showClose},showModal:closeOnPressEscape:function(){var e=this.current.closeOnPressEscape;return!1!==e},closeOnClickModal:function(){var e=this.current.closeOnClickModal;return!1!==e},_modalAppendToBody:autoFocus:function(){var e=this.current.autoFocus;return!1!==e},curComponent:function(){var e=this.current||{},t=e.name,o=e.data;if(t){var n=y()(o,B);return function(e,t,o){var n=o||{},i=n.componentKey,r=i?"KDialogWrapper".concat(e,"_").concat(i):"KDialogWrapper".concat(e),s=y()(n,A),a=Object.keys(s);return D[r]||(D[r]={name:"KDialogWrapper".concat(e),components:(0,d.Z)({KIcon:P.default,AbbrText:E.Z},S().name,S()),data:function(){var e=n.title,t=n.icon,o=n.subIcon,i=n.backtoPrevIcon,r=n.footer,a=n.slotTitle;return{title:"function"==typeof e?"":e,icon:"function"==typeof t?"":t,subIcon:o,backtoPrevIcon:i,footer:r,props:s,processing:!1,slotTitle:a}},computed:{_props:function(){var e=this.props.bodyProps||{};return L(L({},this.props),e)},component:function(){var o=this;return{name:"KDialogWrapper".concat(e,"Body"),render:function(i){return i(t,{ref:"mainifest",props:o._props,on:{processing:close:function(e,t){return o.$emit("close",e,t)},propsChange:function(t){var i=f()({},n,t);o.update(i),o.$emit("replace",e,i)},change:replace:})}}}},methods:{onClose:function(){this.$refs.body.$refs.mainifest.onClose&&this.$refs.body.$refs.mainifest.onClose()},customDialogClose:function(){for(var e,t,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];null===(e=this.$refs)||void 0===e||null===(e=e.body)||void 0===e||null===(e=e.$refs)||void 0===e||null===(e=e.mainifest)||void 0===e||null===(t=e.customDialogClose)||void 0===t||t.call.apply(t,[e].concat(n,[this]))},customEmitClose:function(){for(var e,t,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];null===(e=this.$refs)||void 0===e||null===(e=e.body)||void 0===e||null===(e=e.$refs)||void 0===e||null===(e=e.mainifest)||void 0===e||null===(t=e.customEmitClose)||void 0===t||t.call.apply(t,[e].concat(n,[this]))},update:function(e){var t=e.title,o=e.icon,n=e.subIcon,i=e.footer,r=e.backtoPrevIcon;if("function"==typeof t){var s=this.$refs.body.$refs.mainifest;this.title=t(s)}else"string"==typeof t&&(this.title=t);if("function"==typeof o){var l=this.$refs.body.$refs.mainifest;this.icon=o(l)}else"string"==typeof o&&(this.icon=o);n&&(this.subIcon=n),r&&(this.backtoPrevIcon=r),i&&(this.footer=i),this.props=$()(f()({},this.props,e),a)},onProcessing:,render:function(e){var t=this,o=this.footer,i=null,r=this.props.slotTitle,s=this.props.hideHeader||n.useNewLayout?void 0:e("header",{class:"k-dialog-title"},[this.icon&&e("k-icon",{props:{type:this.icon}}),this.subIcon&&e("k-icon",{class:"k-dialog-sub-icon",props:{type:this.subIcon}}),this.backtoPrevIcon&&e("div",{class:"k-dialog-back-to-prev-icon",on:{click:function(){return t.$emit("close")}}},[e("k-icon",{class:"k-dialog-back-to-prev-icon",props:{type:this.backtoPrevIcon}})]),e("div",{class:"k-dialog-title-text"},[r?r(this):e("abbr-text",{props:{cut:50,text:this.title}})])]),a=e("div",{class:"k-dialog-body"},[e("component",{ref:"body",is:this.component})]);if(o||void 0===o){var l=e("el-button",{on:{click:},o&&o.okText||(0,N.t)("combine.dialog.cancel")),c=e("el-button",{props:{type:"primary",loading:this.processing},on:{click:function(){t.$refs.body.$refs.mainifest.$emit("close","ok")}}},o&&o.cancelText||(0,N.t)("combine.dialog.confirm"));o&&null===o.cancelText&&(l=null),o&&null===o.okText&&(c=null),(l||c)&&(i=e("footer",{class:"k-dialog-footer"},[l,c]))}return e("div",{attrs:{tabindex:0},class:"k-dialog-wrapper",on:{keyup:function(e){13===e.keyCode&&t.$refs.body.$refs.mainifest.$emit("ok")}}},[s,a,i])}}),D[r]}(t,this.page.body,f()({},this.pageAttrs,n,{useNewLayout:this.useNewLayout}))}},component:function(){return this.page.body&&this.visible||this.useNewLayout?this.curComponent:null},_zIndex:,watch:{visible:function(e,t){var o=this,n=this.useAnimation&&this.useNewLayout;!t||e||n?n&&!e&&setTimeout((function(){o.delayVisible=!1,o.$nextTick(()}),300):W()},component:function(e,t){var o=(e||{}).name,n=(t||{}).name;o&&n&&o!==n&&(this.updateClassName(),this.headless=void 0!==this.page.headless&&this.page.headless)}},methods:{onKeydown:function(){},updateClassName:replace:push:setState:function(e,t){var o=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"push",i=Array.from(this.state);if("replace"===n&&i.splice(i.length-1),t)if(this.callback=t.callback||function(){},this.pages[e]&&this.pages[e].async&&"function"==typeof this.pages[e].body){var r=this.pages[e].body(),s=r.component?r:{component:r};s.component.then((function(){setTimeout((function(){o.state=[].concat(i,[{name:e,data:t}])}),0)})).catch((function(){}))}else this.state=[].concat(i,[{name:e,data:t}])},handleClose:function(e){var t,o,n,i;if(null!==(t=this.current)&&void 0!==t&&t.customClose)null===(o=this.$refs.childrenComponent)||void 0===o||null===(n=o.customDialogClose)||void 0===n||n.call(o,e,this),(null===(i=this.current)||void 0===i?void 0:i.destroyPageBeforeClose)&&this.$refs.childrenComponent.$destroy();else if(this.terminal)e();else{var r,s=this.state.slice(-1)[0].name;this.$refs.childrenComponent.onClose&&this.$refs.childrenComponent.onClose(),(null===(r=this.current)||void 0===r?void 0:r.destroyPageBeforeClose)&&this.$refs.childrenComponent.$destroy(),this.state.pop(),W(s)}this.hasClickCloseBtn=!0},onClose:function(e,t){var o=this;return(0,r.Z)(a().mark((function n(){var i,r,s,l,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(i=o.current)||void 0===i||!i.useCustomEmitClose){n.next=4;break}null===(r=o.$refs.childrenComponent)||void 0===r||null===(s=r.customEmitClose)||void 0===s||s.call(r,{closeAll:close:function(){var e;(null===(e=o.current)||void 0===e?void 0:e.destroyPageBeforeClose)&&o.$refs.childrenComponent.$destroy(),W(o.state.pop().name)},deleteComponent:W},e,t,o),n.next=17;break;case 4:if(!o.terminal){n.next=11;break}if("ok"!==e){n.next=8;break}return n.next=8,o.callback(t);case 8:o.visible=!1,n.next=17;break;case 11:if("ok"!==e){n.next=14;break}return n.next=14,o.callback(t);case 14:(null===(l=o.current)||void 0===l?void 0:l.destroyPageBeforeClose)&&o.$refs.childrenComponent.$destroy(),c=o.state.pop(),W(c.name);case 17:case"end":return n.stop()}}),n)})))()},onDragover:onDragenter:,mounted:function(){var e=this;this.autoFocus&&this.$nextTick(()}},V=new M.PlugCtr("kso"),z=["title","icon","subIcon","backtoPrevIcon","footer","terminal","closeOnClickModal","internalModal","useAnimation","dialogWrapperClass"],K=["body","beforeVisiable"],q=l.default.extend(Z),J=[];t.Z=function(e){var t,o,s=e.entry,c=e.pages,u={},d=[];c.forEach((function(e){var o=e.body,n=e.async,i=void 0!==n&&n,l=e.name;if("function"==typeof o&&i&&l)u[l]=e;else if("function"==typeof o)d.push((0,r.Z)(a().mark((function o(){var n,i;return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.body();case 2:return n=o.sent,i=f()({},e,{body:n}),u[n.name]=i,e.body===s.body&&(t=n.name),o.abrupt("return",i);case 7:case"end":return o.stop()}}),o)}))));else if(s&&s.name){var c=o.name;u[c]=e,t=t||s.name===c&&c}else{var p=o.name;u[p]=e}var h=Object.assign({},e),m={};Object.keys(e).forEach((function(t){"title"===t&&(m[t]={enumerable:!0,configurable:!0,set:function(o){e[t]=o},get:function(){if("[object Function]"===Object.prototype.toString.call(h[t])){var e=h[t];return function(){var t=e.call.apply(e,arguments),o=t&&t.title||"";return V.ask("translate",{key:o,text:o})||o}}return V.ask("translate",{key:h[t],text:h[t]})||h[t]}})})),Object.defineProperties(e,m)}));var h=function(e){if(!l.default.prototype.$isServer&&!o){e.title,e.icon,e.subIcon,e.backtoPrevIcon,e.footer,e.terminal,e.closeOnClickModal;var t=e.internalModal,n=void 0!==t&&t,r=e.useAnimation,s=void 0!==r&&r,a=e.dialogWrapperClass,c=void 0===a?void 0:a,p=(0,i.Z)(e,z);(o=new q({data:f()(p,{loading:!1,visible:!1,pages:{},state:[],internalModal:n,useAnimation:s,dialogWrapperClass:c})})).$mount(),J.push(o);var u=null;if(!l.default.prototype.$isServer&&window.__WPSENV__)if(e.container&&e.container!==document.body)u=e.container;else{var d="kma-popper__container";(u=document.getElementById(d))||((u=document.createElement("div")).className="kso-microApp__container",u.id=d,u.role="global",document.body.appendChild(u))}else u=e.container||document.body;u.appendChild(o.$el)}};return h.show=(0,r.Z)(a().mark((function e(){var l,c,m,b,v,g,y,_,C=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=Array.from(C),b=function(){},v=g=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,s,l,c,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u[t]||{},n.body,r=n.beforeVisiable,s=(0,i.Z)(n,K),l=f()(s,m,{callback:b}),r=r||e.next=5,r(m);case 5:if(!1!==(c=e.sent)){e.next=8;break}return e.abrupt("return",c);case 8:p()(c)&&(l=f()(l,c)),h(l),l.isReplace?o.replace(t,l):o.push(t,l),o.pages=u,o.loading=!1,d=o.$watch("dialogVisible",(function(e){var t,n;e||(d(),J=J.filter((),v(),null===(t=o)||void 0===t||null===(n=t.$destroy)||void 0===n||n.call(t),o=void 0)}));case 14:case"end":return e.stop()}}),e)})));return (),l.length>3?(c=l[0],m=l[1]||{},b="function"==typeof l[2]&&l[2]||b,v="function"==typeof l[3]&&l[3]||v):3===l.length?"string"==typeof l[0]?(c=l[0],"object"===(0,n.Z)(l[1])?(m=l[1],b="function"==typeof l[2]&&l[2]||b):"function"==typeof l[1]?(m={},b=l[1],v="function"==typeof l[2]&&l[2]||v):m={}):"object"===(0,n.Z)(l[0])?(m=l[0],c=t,m=p()(l[0])&&l[0]||{},b="function"==typeof l[1]&&l[1]||b,v="function"==typeof l[2]&&l[2]||v):(c=t,m={}):2===l.length?"string"==typeof l[0]?(c=l[0],m="object"===(0,n.Z)(l[1])&&l[1]||{},b="function"==typeof l[1]&&l[1]||b):"object"===(0,n.Z)(l[0])?(c=t,m=l[0],b="function"==typeof l[1]&&l[1]||b):"function"==typeof l[0]&&"function"==typeof l[1]?(c=t,b=l[1],v=l[1],m={}):(c=t,b="function"==typeof l[0]&&l[0]||{},m={}):1===l.length?"string"==typeof l[0]?(c=l[0],m={}):"function"==typeof l[0]?(c=t,m={},b=l[0]):(c=t,m=p()(l[0])&&l[0]||{}):(c=s&&s.name,m={}),"function"!=typeof s||c){e.next=10;break}return e.next=8,s(m);case 8:if("string"==typeof(y=e.sent))c=y;else if(p()(y)){try{c=y.name,delete y.name}catch(e){}f()(m,y)}case 10:if(!c){e.next=17;break}return e.next=13,g(c);case 13:_=e.sent,o&&(o.visible=!1!==_),e.next=18;break;case 17:d.length&&(h(f()(m,{loading:!0})),Promise.all(d).then((),o.visible=!0);case 18:return o&&m.isPC&&(o.pcOfficeClassName="k-pcOffice-dialog"),o&&m.isCloud&&(o.cloudClassName="k-web-cloud-dialog"),o&&m.isMf&&(o.mfClassName=m.isMf),e.abrupt("return",o);case 22:case"end":return e.stop()}}),e)}))),h.close=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Promise.all(J.map((function(t){return new Promise((function(n){if(e){for(var i=t.$el;i&&i!==document.body;)i=i.parentElement;if(i)t.visible=!1,t.$nextTick((function(){return n()}));else{try{t.$destroy()}catch(e){}t===o&&(o=null),t=null,n()}}else t.visible=!1,t.$nextTick(()}))}))).then(()},h.pop=h.hide=h.addPage=function(e){var o=e.body;if("function"==typeof o)d.push((0,r.Z)(a().mark((function o(){var n,i;return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.body();case 2:return n=o.sent,i=f()({},e,{body:n}),u[n.name]=i,e.body===s.body&&(t=n.name),o.abrupt("return",i);case 7:case"end":return o.stop()}}),o)}))));else if(s&&s.name){var n=o.name;u[n]=e,t=t||s.name===n&&n}else{var i=o.name;u[i]=e}},h.setExtraClass=h.getInstance=function(){return o},h}},77105:function(e,t,o){"use strict";var n=o(20225),i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"abbre",attrs:{title:e.hasTips?"":e.text}},[e.isRTL?[o("span",{staticClass:"abbre-front"},[e._v(e._s(e.text))])]:e.hasTips?o("kd-tooltip",{staticClass:"abbre-tooltip",attrs:{popperClass:e.tipsClass,openDelay:400,content:e.text}},[o("span",[o("span",{class:e.$ua.isiPad?"ipad-abbre-front":"abbre-front"},[e._v(e._s(e.front))]),e._v(" "),o("span",{class:["abbre-behind",e.isLastSpace?"abbre-behind-pad":""]},[e._v(e._s(e.behind))])])]):[o("span",{staticClass:"abbre-front"},[e._v(e._s(e.front))]),e._v(" "),o("span",{staticClass:"abbre-behind"},[e._v(e._s(e.behind))])]],2)},staticRenderFns:[],name:"VueAbbr",components:{KdTooltip:o.n(n)()},props:{text:{type:String,required:!0},cut:{type:Number,default:50},hasTips:{type:Boolean,default:!1},tipsClass:{type:String,default:""}},data:computed:{front:function(){return this.text.substring(0,Math.floor(this.cut/100*this.text.length))},behind:function(){var e=this.text.substring(Math.floor(this.cut/100*this.text.length),this.text.length);return this.replaceS(e.split("").reverse())}},mounted:function(){var e=this;this.$nextTick((function(){e.isRTL="rtl"===document.documentElement.getAttribute("dir")}))},methods:{replaceS:function(e){for(var t in e){var o=e[t],n="<>《》（）(){}[]【】「」『』〔〕﹛﹜«»［］‹›〈〉〖〗＜＞﹝﹞｛｝".indexOf(o);if(-1!==n)switch(n){case 0:e[t]=">";break;case 1:e[t]="<";break;case 2:e[t]="》";break;case 3:e[t]="《";break;case 4:e[t]="）";break;case 5:e[t]="（";break;case 6:e[t]=")";break;case 7:e[t]="(";break;case 8:e[t]="}";break;case 9:e[t]="{";break;case 10:e[t]="]";break;case 11:e[t]="[";break;case 12:e[t]="】";break;case 13:e[t]="【";break;case 14:e[t]="」";break;case 15:e[t]="「";break;case 16:e[t]="』";break;case 17:e[t]="『";break;case 18:e[t]="〕";break;case 19:e[t]="〔";break;case 20:e[t]="﹜";break;case 21:e[t]="﹛";break;case 22:e[t]="»";break;case 23:e[t]="«";break;case 24:e[t]="］";break;case 25:e[t]="［";break;case 26:e[t]="›";break;case 27:e[t]="‹";break;case 28:e[t]="〉";break;case 29:e[t]="〈";break;case 30:e[t]="〗";break;case 31:e[t]="〖";break;case 32:e[t]="＞";break;case 33:e[t]="＜";break;case 34:e[t]="﹞";break;case 35:e[t]="﹝";break;case 3le="packages/dialog/src/component.vue";var d=f.exports;d.install=function(e){e.component(d.name,d)};t.default=d}})}}]);