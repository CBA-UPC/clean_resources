(self.webpackChunkWPS_Drive=self.webpackChunkWPS_Drive||[]).push([[1946,3708,3913],{63210:function(e,t,n){"use strict";var o=n(80589),i=n(39475),c=n(89777),s=n(23279),a=n.n(s),u=n(45821),r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"k-inputSearch",class:{"is-foucs":e.isInputFocus}},[n("div",{staticClass:"icon-box",on:{click:e.focus}},[e.loading?n("div",{staticClass:"icon-box-loading"},[n("svg",{staticClass:"icon-box-circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"icon-box-path",attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-miterlimit":"10"}})])]):[e.useNewLayout?n("Magnifier",{attrs:{size:"16px",fill:"var(--kd-color-icon-secondary)"}}):n("KIcon",{attrs:{type:e.iconType}})]],2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyWord,expression:"keyWord"}],ref:"search",attrs:{placeholder:e.tempText,maxlength:e.maxlength},domProps:{value:e.keyWord},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(n=t,!e.forbiddenEnter&&!e.isEmpty(e.keyWord)&&e.onInput(e.keyWord,n));var n},,focus:e.onFocusHandle,blur:e.onBlurHandle,input:}),e._v(" "),e.keyWord?n("div",{staticClass:"icon-box",class:{"icon-box-clear-text":e.clearText},on:{click:e.clear}},[e.clearText?n("span",[e._v(e._s(e.lang_clear))]):["close"===e.closeIcon?n("Close",{attrs:{fill:"currentColor",size:"14"}}):n("KIcon",{attrs:{type:e.closeIcon}})]],2):e._e(),e._v(" "),e._t("suffix")],2)},staticRenderFns:[],name:"KInputSearch",components:{KIcon:o.default,Magnifier:i.Z,Close:c.Z},props:{iconType:{type:String,default:"search"},clearText:{type:String,default:""},resetKeyword:{type:Boolean},placeholder:{type:String,default:,onClear:{type:Function,default:function(){}},onInput:{type:Function,default:function(){}},onFocus:{type:Function,default:function(){}},onBlur:{type:Function,default:function(){}},maxlength:{type:Number,default:100},wait:{type:Number,default:200},defaultValue:{type:String,default:""},closeIcon:{type:String,default:"close"},loading:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},keepFocus:{type:Boolean,default:!1},hidePlaceHolder:{type:Boolean,default:!0},forbiddenEnter:{type:Boolean,default:!1},useNewLayout:Boolean},data:function(){return{keyWord:this.defaultValue,lang_clear:(0,u.t)("basic.search.clear"),tempText:this.placeholder,isInputFocus:!1}},watch:{resetKeyword:keyWord:function(e,t){this.input&&this.input.cancel&&this.input.cancel(),this.isEmpty(e)||(this.$emit("change",this.keyWord),this.input()),t&&!e&&(this.$emit("change",""),this.onClear())}},mounted:function(){var e=this;this.input=a()((,this.wait),this.autofocus&&this.$refs.search.focus()},methods:{onFocusHandle:function(){this.onFocus(),this.tempText=this.hidePlaceHolder?"":this.tempText,this.isInputFocus=!0},onBlurHandle:function(){var e;(this.onBlur(),this.keyWord&&this.keepFocus)&&(null===(e=this.$refs.search)||void 0===e||e.focus());this.tempText=this.placeholder,this.isInputFocus=!1},clear:isEmpty:focus:input:function(){}},install:;t.Z=r},44908:46601:function(){},89214:function(){},2363:function(){},96419:function(){},56353:function(){},85568:function(){},69386:function(){},31616:]);