"use strict";(self.webpackChunk_madgex_jobseekers_public_assets=self.webpackChunk_madgex_jobseekers_public_assets||[]).push([[727],{73:(e,t,i)=>{i.r(t),i.d(t,{default:);i(7950),i(5940),i(7368),i(8233),i(1235),i(5735),i(6886);var n=i(2823);const o=["aria-label","title"],s={"aria-hidden":"true",focusable:"false",class:"mds-icon mds-icon--close mds-icon--sm"},a=["href"];var l=(0,n._)({name:"ComboboxClear",inject:["iconPath","clearInput"]},[["render",function(e,t,i,l,d,r){return(0,n.o)(),(0,n.c)("button",{class:"mds-combobox__clear mds-button mds-button--plain",type:"button",onClick:t[0]||(t[0]=t=>e.$emit("clear",t)),onKeydown:t[1]||(t[1]=(0,n.w)((t=>e.$emit("clear",t)),["enter"])),"aria-label":r.clearInput,title:r.clearInput},[((0,n.o)(),(0,n.c)("svg",s,[(0,n.a)("use",{href:"".concat(r.iconPath,"#icon-close")},null,8,a)]))],40,o)}]]);const d={name:"ListBox",props:{hidden:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!0},comboboxid:{type:String,required:!0}},inject:["iconPath","loadingText"]},r=["aria-labelledby","hidden"],c={key:0,class:"mds-combobox-loading"},u={"aria-hidden":"true",focusable:"true",class:"mds-icon mds-icon--spinner mds-icon--after"},h=["href"],p={class:"mds-visually-hidden"};var b=(0,n._)(d,[["render",function(e,t,i,o,s,a){return(0,n.o)(),(0,n.c)("ul",{class:"mds-combobox__listbox",role:"listbox","aria-labelledby":"".concat(i.comboboxid,"-label"),hidden:i.hidden},[i.isLoading?((0,n.o)(),(0,n.c)("li",c,[((0,n.o)(),(0,n.c)("svg",u,[(0,n.a)("use",{href:"".concat(a.iconPath,"#icon-spinner")},null,8,h)])),(0,n.a)("span",p,(0,n.t)(a.loadingText),1)])):(0,n.b)("",!0),(0,n.r)(e.$slots,"default")],8,r)}]]);const m={name:"ListBoxOption",props:{option:{type:Object,required:!0},focused:{type:Boolean,default:!1},searchValue:{type:String,default:""}},watch:{searchValue:focused(e){e&&this.$refs.listItem.scrollIntoView(!1)}},methods:{highlightOption(){return this.option.label.replace(new RegExp(this.searchValue,"gi"),()}}},v=["aria-selected","innerHTML"];const x={name:"Combobox",components:{ComboboxClear:l,ListBox:b,ListBoxOption:(0,n._)(m,[["render",function(e,t,i,o,s,a){return(0,n.o)(),(0,n.c)("li",{ref:"listItem",class:(0,n.n)(["mds-combobox__option",{"mds-combobox__option--focused":i.focused}]),role:"option","aria-selected":i.focused.toString(),onMousedown:t[0]||(t[0]=,innerHTML:a.highlightOption()},null,42,v)}]])},emits:["search","select-option","clear-all"],props:{comboboxid:{type:String,required:!0},placeholder:{type:String,default:""},name:{type:[String,Boolean],default:!1},value:{type:String,default:""},options:{type:Array,default:,filterOptions:{type:Boolean,default:!0},iconpath:{type:String,default:"/assets/icons.svg"},dataAriaInvalid:{type:String,default:""},i18n:{type:String,default:""}},data(){return{expanded:!1,selected:null,chosen:null,searchValue:this.$props.value,resultCountMessage:null}},providemounted(){var e,t,i,n;const o=null==(t=null==(e=this.$el.parentElement)?void 0:e.parentElement)?void 0:t.querySelector(".mds-form-element__fallback input"),s=null==(n=null==(i=this.$el.parentElement)?void 0:i.parentElement)?void 0:n.querySelector(".mds-form-element__fallback select");o&&o.remove(),s&&s.removeAttribute("id")},computed:{inputValueselectedOption:{get(){return this.selected},set,chosenOption:{getset(e){this.chosen=e,this.selectedOption=e,this.$emit("select-option",this.chosen)}},visibleOptions(){return this.filterOptions?this.options.filter(():this.options},listBoxId(){return"".concat(this.comboboxid,"-listbox")},optionId(){return"".concat(this.comboboxid,"-option")},describedByisLoadingselectedOptionId(){const e=this.visibleOptions.indexOf(this.selectedOption);if(e>-1)return"".concat(this.optionId,"-").concat(e)},listBoxHiddenlastOptionIndexariaExpanded(){return this.expanded?"true":"false"},ariaInvalidi18nText(){return this.i18n?JSON.parse(this.i18n):{loadingText:"Loading",describedByText:"When autocomplete results are available, use up and down arrows to review and enter to select.",resultsMessage:"{count} result available",resultsMessage_plural:"{count} results available",clearInput:"clear input"}}},methods:{makeActive(){this.expanded=!0},makeInactivehandleInput(e){this.chosenOption=null,this.searchValue=e.target?e.target.value:"",this.handleChange(),this.$emit("search",this.searchValue),this.visibleOptions.length>0&&this.updateCount()},handleChange(){0===this.searchValue.length&&this.clearField(),this.searchValue.length>1?(this.makeActive(),this.updateCount()):this.makeInactive()},handleFocushandleClearclearFieldclickOption(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selectedOption;this.chosenOption=e,this.makeInactive()},handleKeyDownEnterchooseOptionhiddenGuard(e){this.listBoxHidden||e.call(this)},onInputBluronKeyDown(){if(this.selectedOption){const e=this.visibleOptions.findIndex((e=>e.value===this.selectedOption.value)),t=e===this.lastOptionIndex?e:e+1;this.selectedOption=this.visibleOptions[t]}else[this.selectedOption]=this.visibleOptions},onKeyUp(){if(this.selectedOption){const e=this.visibleOptions.findIndex((),t=0===e?e:e-1;this.selectedOption=this.visibleOptions[t]}else this.selectedOption=this.visibleOptions[this.lastOptionIndex]},onKeyHome(){[this.selectedOption]=this.visibleOptions},onKeyEndupdateCount(){this.clearCount(),setTimeout((()=>{const e=1===this.visibleOptions.length?this.i18nText.resultsMessage:this.i18nText.resultsMessage_plural;this.resultCountMessage=e.replace("{count}",this.visibleOptions.length)}),1400)},clearCount},f=["value","id","name","placeholder","aria-owns","aria-expanded","aria-activedescendant","aria-invalid","aria-describedby"],g={"aria-live":"polite",role:"status",class:"mds-visually-hidden"},O=["id"];var y=(0,n._)(x,[["render",function(e,t,i,o,s,a){const l=(0,n.d)("ComboboxClear"),d=(0,n.d)("ListBoxOption"),r=(0,n.d)("ListBox");return(0,n.o)(),(0,n.c)("div",{class:(0,n.n)(["mds-combobox",{"mds-combobox--active":!a.listBoxHidden}]),onKeydown:[t[4]||(t[4]=(0,n.w)((e=>a.hiddenGuard(a.onKeyDown)),["down"])),t[5]||(t[5]=(0,n.w)((e=>a.hiddenGuard(a.onKeyUp)),["up"])),t[6]||(t[6]=(0,n.w)((e=>a.hiddenGuard(a.onKeyHome)),["home"])),t[7]||(t[7]=(0,n.w)((,["end"])),t[8]||(t[8]=(0,n.w)((function(){return a.makeInactive&&a.makeInactive(...arguments)}),["esc"])),t[9]||(t[9]=(0,n.w)((function(){return a.handleKeyDownEnter&&a.handleKeyDownEnter(...arguments)}),["enter"]))]},[(0,n.a)("input",{onInput:t[0]||(t[0]=function(){return a.handleInput&&a.handleInput(...arguments)}),value:a.inputValue,class:"mds-form-control",autocomplete:"off",type:"text",role:"combobox",ref:"comboInput",id:i.comboboxid,name:i.name,placeholder:i.placeholder,"aria-owns":a.listBoxId,"aria-expanded":a.ariaExpanded,"aria-autocomplete":"list","aria-activedescendant":a.selectedOptionId,"aria-invalid":a.ariaInvalid,"aria-describedby":a.describedBy,onChange:t[1]||(t[1]=function(){return a.handleChange&&a.handleChange(...arguments)}),onBlur:t[2]||(t[2]=function(){return a.onInputBlur&&a.onInputBlur(...arguments)}),onFocus:t[3]||(t[3]=},null,40,f),s.searchValue.length>0?((0,n.o)(),(0,n.e)(l,{key:0,onClear:a.handleClear},null,8,["onClear"])):(0,n.b)("",!0),(0,n.f)(r,{id:a.listBoxId,hidden:a.listBoxHidden,isLoading:a.isLoading,comboboxid:i.comboboxid},{default:(0,n.g)((()=>[((0,n.o)(!0),(0,n.c)(n.F,null,(0,n.h)(a.visibleOptions,((e,t)=>{var i;return(0,n.o)(),(0,n.e)(d,{key:t,option:e,id:"".concat(a.optionId,"-").concat(t),focused:(null==(i=a.selectedOption)?void 0:i.value)===(null==e?void 0:e.value),onMousedown:searchValue:s.searchValue},null,8,["option","id","focused","onMousedown","searchValue"])})),128))])),_:1},8,["id","hidden","isLoading","comboboxid"]),(0,n.a)("div",g,(0,n.t)(s.resultCountMessage),1),(0,n.a)("span",{id:a.describedBy,style:{display:"none"}},(0,n.t)(a.i18nText.describedByText),9,O)],34)}]]);const I=(0,n.i)(y,{shadowRoot:!1})}}]);