"use strict";(self.webpackChunkWPS_Drive=self.webpackChunkWPS_Drive||[]).push([[2333],{22333:function(t,e,i){i.r(e);var o=i(49200),r=i(37311),n=i(2406),a=i.n(n),s=i(47189),p=i(37698),c=i(89777),l=i(24650),d=i.n(l),u=i(87936);function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}var m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Transition",{attrs:{name:"operate"}},[t.isShowOperate?i("div",{staticClass:"k-jxm-operate-bubble",style:t.styleWpsAIBubble},[i("div",{staticClass:"k-jxm-operate-border-box"},[i("div",{staticClass:"k-jxm-operate-border-bg"},[i("div",{staticClass:"k-jxm-operate-arrow",style:t.styleWPSAIArrow})]),t._v(" "),i("div",{staticClass:"k-jxm-operate-content"},[t.operateData.icon?i("div",{staticClass:"k-jxm-operate-content-icon"},[i("img",{attrs:{width:"20",src:t.operateData.icon}})]):t._e(),t._v(" "),i("div",{staticClass:"k-jxm-operate-content-text"},[t.operateData.title?i("span",[t._v(t._s(t.operateData.title))]):t._e(),t._v(" "),t.operateData.buttonName?i("span",{staticClass:"k-jxm-operate-content-text-blue",on:{click:t.openOperateGuide}},[t._v(t._s(t.operateData.buttonName))]):t._e()]),t._v(" "),i("div",{staticClass:"k-jxm-operate-content-close",on:{click:function(e){return t.handleClose()}}},[i("Close",{attrs:{size:16,fill:"#757575"}})],1)])])]):t._e()])},staticRenderFns:[],name:"KJinxiaomengOperatePos",components:{Close:c.Z},props:{operateData:{type:Object,default:function(){}},jxmStatus:{type:String,default:""},from:{type:String,default:""},dwEvent:{type:Function,default:function(){}}},data:function(){return{isShowOperate:!1,styleWPSAIArrow:{},styleWpsAIBubble:{},type:"tips"}},watch:{isShowOperate:function(t){t||window.top.removeEventListener("resize",this.initOperateStyle)}},mounted:function(){if(this.operateData.title||this.operateData.buttonName){var t;this.isShowOperate=!0,this.initOperateStyle(),window.top.addEventListener("resize",this.initOperateStyle);var e=null===(t=JSON.parse(this.operateData.data))||void 0===t?void 0:t.autoDisappearSeconds;e&&(this.$emit("autoHideOperate",e),this.sendDwEvent({action:"auto_close"}))}else this.type="custom",this.openOperateGuide();this.sendDwEvent({action:"show"})},methods:{initOperateStyle:function(){var t=document.getElementsByClassName("k-jxm-helper-icons-other");if(t&&t.length>0){var e=t[0].getBoundingClientRect(),i=document.documentElement.offsetWidth-e.right;"weboffice"===this.from?"cancle"===this.jxmStatus?(this.styleWpsAIBubble={right:i-8+"px",top:e.top-62+"px"},this.styleWPSAIArrow={transform:"rotate(45deg)",right:"10px","margin-top":"43px","border-right":"3px solid #0867EE","border-bottom":"3px solid #0867EE"}):"fixed"==this.jxmStatus&&(e.width<=31?this.styleWpsAIBubble={right:i+e.width+20+"px",top:e.top-13+"px"}:this.styleWpsAIBubble={right:i+e.width+10+"px",top:e.top-5+"px"},this.styleWPSAIArrow={transform:"rotate(-45deg)",right:"-5px","margin-top":"19px","border-right":"3px solid #1684f3","border-bottom":"3px solid #1380f2"}):"kdocs"===this.from&&(e.width<=31?this.styleWpsAIBubble={right:i+e.width+20+"px",top:e.top-13+"px"}:this.styleWpsAIBubble={right:i+e.width+10+"px",top:e.top-5+"px"},this.styleWPSAIArrow={transform:"rotate(-45deg)",right:"-6px","margin-top":"17px","border-right":"3px solid #1684f3","border-bottom":"3px solid #1380f2"})}},openOperateGuide:function(){var t=this.operateData.openData?"openUrl":"post",e="post"===t?this.operateData.id:this.operateData.openData;this.$emit("openOperate",t,e),"tips"===this.type&&this.sendDwEvent({action:"click_link"})},handleClose:function(){this.$emit("close"),this.sendDwEvent({action:"click_close"})},sendDwEvent:function(t){this.$emit("JxmEvent","jinxiaomeng_guide",function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){(0,o.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({type:this.type},t))}}};function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}var v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-popover",{ref:"jxmOperatePic",attrs:{placement:"top-end",appendToBody:!1,reference:t.reference,value:t.isShowPic,trigger:"manual",visibleArrow:!1,popperClass:"k-jxm-operate "+(t.isPicText?"k-jxm-operate-pic":"k-jxm-operate-big")}},[t.isPicText?i("div",{staticClass:"k-jxm-operate-pic-text"},[i("div",{staticClass:"k-jxm-pic-text-title"},[t.operateData.icon?i("img",{staticClass:"k-jxm-pic-text-title-icon",attrs:{src:t.operateData.icon,width:"16"}}):t._e(),t._v(" "),i("div",{staticClass:"k-jxm-pic-text-title-text"},[t._v(t._s(t.operateData.title))]),t._v(" "),i("div",{staticClass:"k-jxm-pic-text-title-close",on:{click:function(e){return t.handleClose()}}},[i("Close",{attrs:{size:16,fill:"#757575"}})],1)]),t._v(" "),i("div",{staticClass:"k-jxm-pic-text-body"},[t.operateData.description?i("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:t.operateData.description,expression:"operateData.description"}],staticClass:"k-jxm-pic-text-body-content"}):t._e(),t._v(" "),t.operateConfig.ImageUrl?i("img",{staticClass:"k-jxm-pic-text-body-image",attrs:{src:t.operateConfig.ImageUrl}}):t._e()]),t._v(" "),i("div",{staticClass:"k-jxm-pic-text-footer"},[t.operateConfig.SecondaryBtnName?i("div",{staticClass:"k-jxm-pic-text-footer-btn",on:{click:function(e){return t.openOperate("second")}}},[t.operateConfig.SecondaryBtnUrl?i("img",{staticClass:"k-jxm-pic-text-footer-img",attrs:{src:t.operateConfig.SecondaryBtnUrl,width:"16px"}}):t._e(),t._v(" "),i("div",{staticClass:"k-jxm-pic-text-footer-text"},[t._v(t._s(t.operateConfig.SecondaryBtnName))])]):t._e(),t._v(" "),t.operateData.buttonName?i("div",{staticClass:"k-jxm-pic-text-footer-btn k-jxm-main-btn",on:{click:function(e){return t.openOperate("main")}}},[t.operateConfig.MainBtnUrl?i("img",{staticClass:"k-jxm-pic-text-footer-img",attrs:{src:t.operateConfig.MainBtnUrl,width:"16px"}}):t._e(),t._v(" "),i("div",{staticClass:"k-jxm-pic-text-footer-text"},[t._v(t._s(t.operateData.buttonName))])]):t._e()])]):t._e(),t._v(" "),t.isBigText?i("div",{staticClass:"k-jxm-operate-big-text"},[i("div",{staticClass:"k-jxm-big-text-title"},[i("div",{staticClass:"k-jxm-big-text-title-text"},[t.operateData.icon?i("img",{attrs:{src:t.operateData.icon,width:"16"}}):t._e(),t._v(" "),i("span",{staticClass:"k-jxm-big-text-title-heavy"},[t._v(t._s(t.operateData.title))])]),t._v(" "),i("div",{staticClass:"k-jxm-big-text-title-close",on:{click:},[i("Close",{attrs:{size:16,fill:"currentColor"}})],1)]),t._v(" "),i("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:t.operateData.description,expression:"operateData.description"}],staticClass:"k-jxm-big-text-body"}),t._v(" "),i("div",{staticClass:"k-jxm-big-text-footer"},[t.operateConfig.SecondaryBtnName?i("div",{staticClass:"k-jxm-big-text-btn",on:{click:function(e){return t.openOperate("second")}}},[t.operateConfig.SecondaryBtnUrl?i("img",{attrs:{src:t.operateConfig.SecondaryBtnUrl}}):t._e(),t._v(" "),i("div",{staticClass:"k-jxm-big-text-btn-text"},[t._v(t._s(t.operateConfig.SecondaryBtnName))])]):t._e(),t._v(" "),t.operateData.buttonName?i("div",{staticClass:"k-jxm-big-text-btn k-jxm-big-text-btn-main",on:{click:},[t.operateConfig.MainBtnUrl?i("img",{attrs:{src:t.operateConfig.MainBtnUrl}}):t._e(),t._v(" "),i("div",{staticClass:"k-jxm-big-text-btn-text"},[t._v(t._s(t.operateData.buttonName))])]):t._e()])]):t._e()])},staticRenderFns:[],components:{ElPopover:d(),Close:c.Z},directives:{"dompurify-html":u.Z},data:computed:{operateConfig:,props:{operateData:{type:Object,default:function(){}},reference:{type:HTMLElement}},mounted:function(){var t,e=this;this.isShowPic=!0,this.isPicText=1===this.operateData.styles,this.isBigText=3===this.operateData.styles,this.sendDwEvent({action:"show"}),this.$nextTick((function(){var t;null===(t=e.$refs)||void 0===t||null===(t=t.jxmOperatePic)||void 0===t||t.updatePopper()}));var i=null===(t=JSON.parse(this.operateData.data))||void 0===t?void 0:t.autoDisappearSeconds;i&&(this.$emit("autoHideOperate",i),this.sendDwEvent({action:"auto_close"}))},methods:{handleClose:openOperate:function(t){var e,i;"main"===t?i="openUrl"===(e=this.operateData.openData?"openUrl":"post")?this.operateData.openData:this.operateData.id:"second"===t&&this.operateConfig.SecondaryBtnLinkData&&(e=1===this.operateConfig.SecondaryBtnLinkType?"openUrl":"post",i=this.operateConfig.SecondaryBtnLinkData),this.$emit("openOperate",e,i),this.sendDwEvent({action:"main"===t?"click_button_main":"click_button_secondary"})},sendDwEvent:function(t){this.$emit("JxmEvent","jinxiaomeng_guide",function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){(0,o.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({type:this.isPicText?"pic":"text"},t))}}};function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}var g={w:"wps",s:"et",k:"ksheet",p:"wpp",f:"pdf",o:"ap"},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isShowBubble?i("KJXMOperateBubble",{ref:"jxmBubble",attrs:{jxmStatus:t.jxmStatus,from:t.from,operateData:t.operateData},on:{autoHideOperate:t.onAutoHideOperate,openOperate:t.openOperateGuide,close:t.handleClose,JxmEvent:t.onJxmEvent}}):t._e(),t._v(" "),t.isShowPic?i("KJXMOperatePic",{ref:"jxmPic",attrs:{reference:t.reference,operateData:t.operateData},on:{autoHideOperate:t.onAutoHideOperate,close:t.handleClose,openOperate:t.openOperateGuide,JxmEvent:t.onJxmEvent}}):t._e()],1)},staticRenderFns:[],name:"KJinxiaomengOperate",components:{KJXMOperateBubble:m,KJXMOperatePic:v},props:{operateData:{type:Object,default:function(){}},filterCardIds:{type:String,default:""},jxmStatus:{type:String,default:""},from:{type:String,default:""},ua:{type:Object,default:function(){}},fid:{type:String},onOpenUrl:{type:Function},dwEvent:{type:Function,default:,reference:{type:HTMLElement},isLogin:{type:Boolean,default:!0}},data:computed:{fileExt:function(){return"undefined"!=typeof window&&window.fileInfo&&window.fileInfo.ext.replace(".","")||""}},mounted:function(){var t=this.operateData.styles;0===t||12===t?this.isShowBubble=!0:1!==t&&3!==t||(this.isShowPic=!0)},methods:{openOperateGuide:function(t,e){"openUrl"===t?this.openUrl(e):"post"===t&&(0,p.oi)(e,{msgData:this.operateData}),this.handleClose()},openUrl:function(t){var e=window.top||window,i=/^https?:\/\//.test(t)?t:"".concat(e.origin).concat(t);this.ua.wxpcmini?e&&e.wx.miniProgram.navigateTo({url:"/pages/pcweb/pcweb?from=JxmAI&url=".concat(encodeURIComponent(i))}):this.ua.wxminiprogram||this.ua.qqminiprogram?e&&e.wx.miniProgram.navigateTo({url:"/pages/thirdParty/transfer/transfer?from=JxmAI&url=".concat(encodeURIComponent(i))}):this.ua.wexin?e&&(e.location.href=i):this.onOpenUrl(i)},onAutoHideOperate:function(t){var e=this;"0"!==t&&0!==t&&setTimeout((,1e3*t)},handleClose:function(){var t;this.showCounts=(null===(t=JSON.parse(this.operateData.data))||void 0===t?void 0:t.showCounts)||1,1===this.showCounts||"1"===this.showCounts?this.setFilterCardIds():this.setCardShowTimes(),this.$refs.jxmBubble?this.$refs.jxmBubble.isShowOperate=!1:this.$refs.jxmPic&&(this.$refs.jxmPic.isShowPic=!1)},setFilterCardIds:function(){var t=""!==this.filterCardIds?this.filterCardIds+","+this.operateData.id:this.operateData.id;localStorage.setItem("jxm-operate-filter-ids",t),(0,s.Ezg)({key:"jxmOperateFilterIds",value:t})},setCardShowTimes:function(){var t=this;return(0,r.Z)(a().mark((function e(){var i,o,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=JSON.parse(localStorage.getItem("jxm-operate-show-times")||"{}"),e.t0=JSON,e.next=4,(0,s.W56)("jxmOperateShowTimes");case 4:if(e.t1=e.sent,e.t1){e.next=7;break}e.t1="{}";case 7:e.t2=e.t1,o=e.t0.parse.call(e.t0,e.t2),(r=t.extendFilterIds(o,i))[t.operateData.id]?(r[t.operateData.id]+=1,r[t.operateData.id]>=t.showCounts&&t.setFilterCardIds()):r[t.operateData.id]=1,localStorage.setItem("jxm-operate-show-times",JSON.stringify(r)),(0,s.Ezg)({key:"jxmOperateShowTimes",value:JSON.stringify(r)});case 13:case"end":return e.stop()}}),e)})))()},extendFilterIds:function(t,e){for(var i in e)t[i]?t[i]=Math.max(t[i],e[i]):t[i]=e[i];return t},onJxmEvent:function(t,e){try{if("jinxiaomeng_guide"===t){var i=window&&window.officeType&&g[window.officeType];e={card_id:this.operateData.name,fileid:"kdocs"===this.from?"homepage":this.fid,source:"kdocs"===this.from?"homepage":i},e)}this.dwEvent(t,e)}catch(t){}}},install:;e.default=b},37698:function(t,e,i){i.d(e,{E9:function(){return m},VY:function(){return u},Xf:function(){return d},nv:function(){return f},oi:);var o,r=i(49200),n=i(26743),a=i(19963),s=i(20144);nction l(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];s.default.prototype.$isServer||(i?o?(window.postMessage(JSON.stringify(c({eventName:t},e)),"*"),window.top&&window.top.postMessage(JSON.stringify(c({eventName:t},e)),"*")):window.top&&window.top.postMessage(JSON.stringify(c({eventName:t},e)),"*"):window.postMessage(JSON.stringify(c({eventName:t},e)),"*"))}var d=function(t,e){if(s.default.prototype.$isServer)return{isMobile:!1,isDesktop:!1};if(void 0===o){var i,r,a=(0,n.getUA)(window.navigator.userAgent);i=void 0!==t?t:a.isMobile,r=void 0!==e?e:a.isDesktop,o={isMobile:!!i,isDesktop:!!r}}return o},u=function(t){var e=t.isMobile,i=t.isDesktop;o={isMobile:!!e,isDesktop:!!i}};function f(){var t=(0,n.getUA)(window.navigator.userAgent);return t.wxminiprogram||t.qqminiprogram}var m=function(t,e,i,o,r,p){if(!s.default.prototype.$isServer){var c=window.top||window,u=d(),m=f(),h=(0,n.getUA)(window.navigator.userAgent).mdocs,v=window.wx&&window.wx.miniProgram;t&&(m?i?v&&v.redirectTo({url:t}):v&&v.navigateTo({url:t}):h?o?(0,a.ZB)({url:t,id:r,fname:p,title:e,isFile:o}):(0,a.WY)({url:t,title:e,needTitleBar:!0}):u.isKDesktop?l("web_open_url",{url:t},!0,!0):i?c.location.href=t:c.open(t))}}}}]);