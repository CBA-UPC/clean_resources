(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1101:function(t,s,e){},1194:function(t,s,e){"use strict";e(1101)},1355:function(t,s,e){"use strict";e.r(s);var a={components:{BaseButton:e(508).a}},i=(e(1194),e(45)),n=Object(i.a)(a,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"threadItem-content"},[s("div",{staticClass:"space--h-3 space--v-3 space--mb-4 bg--em bRad--a hAlign--all-c"},[t._m(0),s("div",{staticClass:"text--b size--all-l"},[t._v(t._s("Questions? Opinions? Suggestions?"))]),s("BaseButton",{staticClass:"space--mt-3",attrs:{variant:"primary",mode:"brand"},on:{click:function(s){return t.$emit("cta")}}},[s("BaseIcon",{attrs:{name:"pencil",left:""}}),t._v(" "+t._s("Be the first to comment")+" ")],1),t._t("activationModal")],2)])}),[function(){var t=this._self._c;return t("div",{staticClass:"commentTeaser aGrid space--mh-a space--mb-3"},[t("div",{staticClass:"commentTeaser-icon commentTeaser-icon--ask aGrid-item"}),t("div",{staticClass:"commentTeaser-icon commentTeaser-icon--like aGrid-item"}),t("div",{staticClass:"commentTeaser-icon commentTeaser-icon--check aGrid-item"})])}],!1,null,null,null);s.default=n.exports}}]);,":").concat(s);a("input",{timestamp:Object(l.k)(new Date(r).getTime())})}else a("input",{timestamp:-1})}});return{__sfc:!0,props:o,emit:a,INVALID_TIMESTAMP:-1,savedDate:i,isValidTimestamp:n,getSelectedTime:u,selectedDate:c,selectedTime:d,handleEmptyValue:e=>{e.target.value||(i.value=null,a("input",{timestamp:e.target.validity.badInput?-1:null}))},FormList:r.l,FormInputLabeled:r.i,FormLabel:r.k,FormContent:r.c,FormRow:r.o}}}),i=a(44),n=Object(i.a)(o,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(a.FormList,{staticClass:"space--mb-0 space--mh-0",attrs:{wide:""}},[t(a.FormRow,{attrs:{error:e.hasError&&!a.selectedDate}},[t(a.FormContent,{staticClass:"space--b-0"},[t(a.FormInputLabeled,{ref:"date",attrs:{id:e.name,"input-type":"date",autocomplete:"off",name:e.name,placeholder:e.placeholder,"input-class":" input",min:e.min,max:e.max},on:{blur:a.handleEmptyValue,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.handleEmptyValue.apply(null,arguments)}},model:{value:a.selectedDate,callback:function(e){a.selectedDate=e},expression:"selectedDate"}})],1)],1),a.selectedDate?t(a.FormRow,{staticClass:"space--mt-3",attrs:{error:e.hasError}},[t(a.FormLabel,[e._v(" "+e._s("Ora")+" ")]),t(a.FormContent,{staticClass:"space--b-0"},[t(a.FormInputLabeled,{attrs:{id:`${e.name}-time`,"input-type":"time",autocomplete:"off",name:`${e.name}-time`,"input-class":"width--all-12 "},model:{value:a.selectedTime,callback:function(e){a.selectedTime=e},expression:"selectedTime"}})],1)],1):e._e()],1)}),[],!1,null,null,null),u=n.exports,c=Object(s.defineComponent)({__name:"form-row-date-native",props:{value:null,fieldName:null,placeholder:null,initialHours:null,initialMinutes:null,min:null,max:null},emits:["input"],setup(e,t){let{emit:a}=t;const l=e,o=Object(s.inject)("$v"),i=Object(s.computed)({get:()=>l.value,set(e){a("input",e)}});return{__sfc:!0,emit:a,$v:o,props:l,localValue:i,FormRow:r.o,FormLabel:r.k,FormContent:r.c,FormMessageList:r.m,ControlDateSelectorNative:u}}}),d=Object(i.a)(c,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(a.FormRow,{directives:[{name:"track",rawName:"v-track:formField",value:{name:e.fieldName},expression:"{ name: fieldName }",arg:"formField"}]},[t(a.FormLabel,{staticClass:"flex boxAlign-ai--all-c boxAlign-jc--all-sb"},[e._t("label")],2),t(a.FormContent,[t(a.ControlDateSelectorNative,{directives:[{name:"track",rawName:"v-track:submissionFieldSelected.focus",arg:"submissionFieldSelected",modifiers:{focus:!0}}],attrs:{name:e.fieldName,"initial-hours":e.initialHours,"initial-minutes":e.initialMinutes,placeholder:e.placeholder,min:e.min,max:e.max,"has-error":a.$v.error[e.fieldName]},model:{value:a.localValue,callback:function(e){a.localValue=e},expression:"localValue"}}),a.$v.messages[e.fieldName]&&a.$v.messages[e.fieldName].length?t(a.FormMessageList,{attrs:{messages:a.$v.messages[e.fieldName]}}):e._e()],1)],1)}),[],!1,null,null,null);t.a=d.exports},1279:function(e,t,a){"use strict";a.r(t);var s=a(730),r=a(731),l=a(5),o=a(101),i=a(109),n=a(510),u=a(1035),c=a(861),d=a(568),m=a(17),p=a(612),f={__name:"step-final-details-form",setup(e){const t=Object(d.j)(),s=Object(d.e)(),{groups:r}=Object(d.f)(),f=t.value.type===m.o,h=Object(l.computed)((()=>Object(p.b)(t.value))),g={secondaryLabel:"",secondaryLimitLabel:"",primaryLabel:f?"Qual è la categoria più adatta al tuo codice sconto?":"Qual è la categoria più adatta alla tua offerta?",primaryLimitLabel:f?"Il tuo codice sconto è stato assegnato alla seguente categoria. Non è la più adatta? Fai clic sulla categoria per cambiarla.":"La tua offerta è stata assegnata alla seguente categoria. Non è la più adatta? Fai clic sulla categoria per cambiarla."},y=Object(l.inject)("$v");const v=Object(o.a)(new Date,"yyyy-MM-dd"),b=Object(o.a)(Object(i.g)().getTime(),"yyyy-MM-dd");return{__sfc:!0,FormWizardAdminSection:()=>Promise.all([a.e(9),a.e(81)]).then(a.bind(null,1227)),thread:t,features:s,groups:r,isVoucherType:f,showAdminSection:h,groupsI18n:g,$v:y,validateStartDate:function(){y.validate("startDate",t.value.startDate),y.validate("endDate",t.value.endDate)},validateEndDate:function(){y.validate("endDate",t.value.endDate)},dateMin:v,dateMax:b,FormList:n.l,FormRow:n.o,FormSeparator:n.p,FormContent:n.c,FormRowDateNative:u.a,FormRowGroups:c.a}}},h=a(44),g=Object(h.a)(f,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(a.FormList,{staticClass:"space--mh-0 width--all-12 width--max-pageNarrow"},[a.features.startDate?t(a.FormRowDateNative,{staticClass:"width--all-12 width--fromW3-6 flex--inline flex--dir-col space--fromW3-r-2",attrs:{"field-name":"startDate","two-columns-layout":"",placeholder:"Adesso",min:a.dateMin,max:a.dateMax,"initial-hours":"00","initial-minutes":"01"},on:{input:a.validateStartDate},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(" "+e._s("Giorno d'inizio")+" ")]},proxy:!0}],null,!1,2247874133),model:{value:a.thread.startDate,callback:function(t){e.$set(a.thread,"startDate",t)},expression:"thread.startDate"}}):e._e(),t(a.FormRow,{staticClass:"hide--fromW3 space--mt-2 space--mb-3"},[t(a.FormSeparator)],1),a.features.endDate?t(a.FormRowDateNative,{staticClass:"width--all-12 width--fromW3-6 flex--inline flex--dir-col space--fromW3-l-2",attrs:{"field-name":"endDate","two-columns-layout":"",placeholder:"Nessuna",min:a.dateMin,max:a.dateMax,"initial-hours":"23","initial-minutes":"59"},on:{input:a.validateEndDate},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(" "+e._s("Giorno in scadenza")+" ")]},proxy:!0}],null,!1,2897030918),model:{value:a.thread.endDate,callback:function(t){e.$set(a.thread,"endDate",t)},expression:"thread.endDate"}}):e._e(),a.features.groups?t(a.FormRowGroups,{attrs:{thread:a.thread,groups:a.groups,i18n:a.groupsI18n,required:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s("Categorie"))]},proxy:!0}],null,!1,4293764531),model:{value:a.thread.groups,callback:function(t){e.$set(a.thread,"groups",t)},expression:"thread.groups"}}):e._e(),a.showAdminSection?t(a.FormRow,{},[t(a.FormContent,[t(a.FormWizardAdminSection)],1)],1):e._e()],1)}),[],!1,null,null,null).exports,y={__name:"step-final-details",setup:e=>({__sfc:!0,FormWizardStepBase:s.a,FormWizardStepTitle:r.a,StepFinalDetailsForm:g})},v=Object(h.a)(y,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(a.FormWizardStepBase,{scopedSlots:e._u([{key:"title",fn:function(){return[t(a.FormWizardStepTitle,[e._v(" "+e._s("Dettagli Finali")+" ")])]},proxy:!0},{key:"form",fn:function(){return[t(a.StepFinalDetailsForm)]},proxy:!0}])})}),[],!1,null,null,null);t.default=v.exports},730:function(e,t,a){"use strict";var s={props:{alignCenter:{type:Boolean,default:!1}},computed:{containerClasses(){return{"boxAlign-ai--all-c":this.alignCenter}},hasTitle(){return!!this.$scopedSlots.title},hasSubTitle(){return!!this.$scopedSlots["sub-title"]}}},r=a(44),l=Object(r.a)(s,(function(){var e=this,t=e._self._c;return t("Transition",e._g({attrs:{appear:"",name:"slide-in","leave-active-class":"hide","leave-to-class":"hide"}},e.$listeners),[t("section",{staticClass:"flex flex--grow-1 flex--shrink-0 boxAlign-jc--all-c width--all-12",class:e.containerClasses},[t("div",{staticClass:"flex flex--dir-col space--fromW2-h-4 space--h-3 space--fromW3-t-6 space--b-4 boxAlign-ai--all-c width--all-12"},[e.hasTitle?t("div",{staticClass:"space--mb-4 width--all-12 width--max-pageNarrow"},[e._t("title")],2):e._e(),e.hasSubTitle?t("div",{staticClass:"space--mb-4 width--all-12 width--max-pageNarrow"},[e._t("sub-title")],2):e._e(),e._t("form"),e._t("footnotes")],2)])])}),[],!1,null,null,null);t.a=l.exports},731:function(e,t,a){"use strict";var s=a(44),r=Object(s.a)({},(function(e,t){return e("h1",{staticClass:"size--all-xxxl text--color-charcoal text--b",class:t.data.staticClass},[t._t("default")],2)}),[],!0,null,null,null);t.a=r.exports},747:function(e,t,a){var s=a(249),r=a(324);e.exports=function(e,t){return e&&e.length?r(e,s(t,2)):[]}},861:function(e,t,a){"use strict";var s=a(94),r=a(510),l=a(17),o=a(747),i=a.n(o);var n={components:{FormRow:r.o,FormLabel:r.k,FormContent:r.c,FormMessageList:r.m,GroupSelectorControl:()=>a.e(212).then(a.bind(null,1195))},inject:["$v"],props:{value:{type:Array,default:""},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:""},thread:{type:Object,required:!0},maxGroups:{type:Number,default:1},groups:{type:Array,default:()=>[]},primaryGroupsName:{type:String,default:"threadGroups"},secondaryGroupsName:{type:String,default:""},i18n:{type:Object,default:()=>({primaryLabel:"",primaryLimitLabel:"",secondaryLabel:"",secondaryLimitLabel:""})},required:{type:Boolean,default:!1},fieldName:{type:String,default:"groups"}},computed:Object.assign({},Object(s.e)("threadForm",{isGroupSearchFeature:e=>{var t;return null===(t=e.features)||void 0===t?void 0:t.groupSearch}}),{localValue:{get(){return this.value},set(e){this.$emit("input",e)}},selectedGroupsIds(){return this.localValue.map((e=>e.threadGroupId)).join(",")},assignedBySystemCategoryIds(){const e=this.$store.state.threadForm.groups.filter((e=>e.assignedBySystem&&e.matchesAutoAssignment)),t=this.$store.state.threadForm.thread.groups.filter((e=>e.assignedBySystem));return i()(e.concat(t),"threadGroupId").map((e=>e.threadGroupId)).sort().join(",")},scopeGroupThreadType(){return this.thread.type===l.e},errors(){var e;return(null===(e=this.$v)||void 0===e?void 0:e.error)||{}},errorsMessages(){var e;return(null===(e=this.$v)||void 0===e?void 0:e.messages)||{}}}),watch:{value(e){e.length&&this.validateGroups(e)}},methods:Object.assign({},Object(s.d)("threadForm",["UPDATE_FIELD"]),{validateGroups(e){this.$v.clear("systemAssignedGroups"),this.secondaryGroupsName&&this.$v.clear(this.secondaryGroupsName),this.$v.validate(this.primaryGroupsName,e)},updateUnselectedGroups(e){this.UPDATE_FIELD({path:"unselectedGroups",value:e})}})},u=a(44),c=Object(u.a)(n,(function(){var e=this,t=e._self._c;return t("FormRow",{directives:[{name:"track",rawName:"v-track:formField",value:{name:e.fieldName},expression:"{ name: fieldName }",arg:"formField"}],attrs:{error:e.errors.threadGroups||e.errors.discussionThreadGroups||e.errors.systemAssignedGroups}},[t("FormLabel",{attrs:{required:e.required}},[e._t("label")],2),t("input",{attrs:{type:"hidden",name:e.primaryGroupsName},domProps:{value:e.selectedGroupsIds}}),e.assignedBySystemCategoryIds?t("div",{directives:[{name:"track",rawName:"v-track:submissionFieldAutoFilled.view",value:{categoryIds:e.assignedBySystemCategoryIds},expression:"{\n\t\t\tcategoryIds: assignedBySystemCategoryIds,\n\t\t}",arg:"submissionFieldAutoFilled",modifiers:{view:!0}}],key:e.assignedBySystemCategoryIds}):e._e(),t("FormContent",[t("GroupSelectorControl",{attrs:{groups:e.groups,"search-enabled":e.isGroupSearchFeature,limit:e.maxGroups,i18n:e.i18n,"thread-type":e.thread.type,"scope-group-thread-type":e.scopeGroupThreadType},on:{"update-unselected-groups":e.updateUnselectedGroups},scopedSlots:e._u([{key:"primary-messages",fn:function(){return[e.errorsMessages[e.primaryGroupsName]&&e.errorsMessages[e.primaryGroupsName].length?t("FormMessageList",{attrs:{messages:e.errorsMessages[e.primaryGroupsName]}}):e._e()]},proxy:!0},{key:"secondary-messages",fn:function(){return[e.errorsMessages[e.secondaryGroupsName]&&e.errorsMessages[e.secondaryGroupsName].length?t("FormMessageList",{attrs:{messages:e.errorsMessages[e.secondaryGroupsName]}}):e._e()]},proxy:!0},{key:"other-messages",fn:function(){return[e.errorsMessages.systemAssignedGroups&&e.errorsMessages.systemAssignedGroups.length?t("FormMessageList",{attrs:{messages:e.errorsMessages.systemAssignedGroups}}):e._e()]},proxy:!0}]),model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})],1)],1)}),[],!1,null,null,null);t.a=c.exports}}]);