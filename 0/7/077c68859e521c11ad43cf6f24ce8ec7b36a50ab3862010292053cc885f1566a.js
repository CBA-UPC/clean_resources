(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{518:function(e,t,s){"use strict";s.d(t,"b",();const a={model:{event:"update"},props:{name:{type:String,default:""},value:{type:[String,Number,Object],default:null},placeholder:{type:String,default:""},options:{type:Array,default:()=>[]},mode:{type:String,default:""},valueKey:{type:String,default:"value"},textKey:{type:String,default:"text"},retainValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{selectedValue:{getset,selectedOption(){return this.options.find((e=>e[this.valueKey]===this.value))}}},r={mixins:[a],props:{value:{type:Array,default:()=>[]},separator:{type:String,default:","},open:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},datacomputed:{filteredOptions(){return this.options.filter((e=>e[this.textKey].toLowerCase().includes(this.filterValue.toLowerCase())))}},methods:{toggleLayerexpandLayersetFilterValue};t.a=a},911:function(e,t,s){"use strict";s.r(t);var a=s(509),r=s(554),i=s(0),l=s.n(i),o=s(5);const n=!/Trident|Edge/.test(navigator.userAgent)&&(!/AppleWebKit/.test(navigator.userAgent)||/Chrome/.test(navigator.userAgent));function d(e,t){let{value:s}=t;n&&o.default.nextTick((()=>{e.style.height="auto";const t=Math.min(s,e.scrollHeight+e.offsetHeight-e.clientHeight)+"px";requestAnimationFrame((()=>{e.style.height=t,t!==e.dataset.lastHeight&&(e.dataset.lastHeight=t,l()(e).trigger("domChanged"))}))}))}o.default.directive("auto-height",{bind:d,update:d});var u={components:{BaseButton:s(507).a,FormList:a.l,FormRow:a.o,FormLabel:a.k,FormContent:a.c,FormTextarea:a.s,CustomSelect:r.a,FormMessageList:a.m},props:{loading:{type:Boolean,default:!1},messageTypes:{type:Array,required:!0},errorMessages:{type:Array,default:},data:computed:{submitLabelmessageType,watch:{selectedMessageTypeID:"applyMacro"},methods:{submit(){var e,t;this.$emit("submit",{reason:(null===(e=this.messageType)||void 0===e?void 0:e.type_name)||null,message:this.message||null,messageTypeId:(null===(t=this.messageType)||void 0===t?void 0:t.id)||null})},cancel(){this.$emit("close"),l()(this.$el).trigger("layer-destroy")},applyMacro},p=s(45),m=Object(p.a)(u,(function(){var e=this,t=e._self._c;return t("FormList",{staticClass:"pmDeleteForm"},[e.messageTypes?t("FormRow",[t("FormLabel",[e._v(e._s("Razón"))]),t("FormContent",[t("CustomSelect",{staticClass:"width--all-12",attrs:{options:e.messageTypes,placeholder:"Seleccionar razón","text-key":"type_name","value-key":"id",name:"message_type_id"},model:{value:e.selectedMessageTypeID,callback:function(t){e.selectedMessageTypeID=t},expression:"selectedMessageTypeID"}}),t("input",{attrs:{type:"hidden",name:"reason"},domProps:{value:e.messageType&&e.messageType.type_name}})],1)],1):e._e(),t("FormRow",[t("FormLabel",[e._v(e._s("MP para el usuario"))]),t("FormContent",[t("FormTextarea",{directives:[{name:"auto-height",rawName:"v-auto-height",value:400,expression:"400"}],staticClass:"input--noResize width--all-12",attrs:{rows:"10",name:"message"},model:{value:e.message,callbac},expression:"message"}}),t("div",{attrs:{"data-message-slot":"delete_thread"}}),e.errorMessages.length?t("FormMessageList",{attrs:{messages:e.errorMessages}}):e._e()],1)],1),t("FormRow",[t("FormContent",{staticClass:"hAlign--all-r"},[t("BaseButton",{staticClass:"space--mr-3",attrs:{variant:"tertiary",mode:"default"},on:{click:e.cancel}},[e._v(" "+e._s("Cancelar")+" ")]),t("BaseButton",{attrs:{type:"submit",variant:"primary",mode:"brand",loading:e.loading},on:{click:e.submit}},[e._v(" "+e._s(e.submitLabel)+" ")])],1)],1)],1)}),[],!1,null,null,null);t.default=m.exports}}]);