(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1264:function(e,t,i){"use strict";i.r(t);var s=i(5),a=i(1101),n=i(93),r=i(509),l=i(819),o=i(870),c=i(809),u=i(507),d=i(17),h=i(155),p=i(87),k=i(589),m=i(564),f=i(888),b=i(843),g=i(962),L=i(844),v=i(1115),_={components:{BaseButton:u.a,ControlLoader:o.a,FormRow:r.o,ThreadDuplicates:l.a,ControlLinkErrors:c.a,CheckLinkDuplicates:f.a,CheckBlockedLinks:b.a,GetLinkSuggestion:g.a,GetLinkMerchantSuggestion:L.a,EventTrigger:v.a,FormInputLabeled:r.i,FormInputIcon:r.h,FormInputButton:r.g},mixins:[k.b],props:{},data:()=>Object.assign({},Object(p.d)({thread:{namespace:"threadForm",path:"thread",deep:!0}}),{submitLink:"",hasDuplicates:!1,hasErrors:!1}),computed:{canSubmitdealType:()=>d.a,duplicatesFilter:,validations:()=>({link:[Object(m.n)(!0)]}),watch:{"thread.link"(){this.resetLinkData()}},methods:Object.assign({},Object(n.b)("threadForm",["removeAllGalleryImages"]),{resetLink(){this.thread.link="",this.hasDuplicates=!1,this.hasErrors=!1,this.resetLinkData()},resetLinkData(){this.submitLink="",this.$v.clear("link"),this.removeAllGalleryImages()},async validateLink(){await this.$v.validate("link",this.thread.link)},async submit(){await this.validateLink(),!this.$v.error.link&&this.thread.link&&(this.submitLink=this.thread.link)},showFullForm(){Object(h.b)({type:"submit",target:this.$el}),this.$emit("show-full-form")},continueWithLinksubmitWithoutLinksetDuplicates(e){let{hasDuplicates:t}=e;this.hasDuplicates=t},setLinkErrors)},w=i(45),D=Object(w.a)(_,(function(){var e=this,t=e._self._c;return t("section",{directives:[{name:"track",rawName:"v-track:linkForm.view",value:{type:e.dealType},expression:"{ type: dealType }",arg:"linkForm",modifiers:{view:!0}}],staticClass:"flex flex--dir-col flex--grow-1 space--fromW2-h-4 space--h-3 space--t-3 space--b-2"},[t("div",{staticClass:"flex--grow-1 space--mb-3"},[t("h1",{staticClass:"size--all-xxxl size--fromW2-xxl text--b text--color-charcoalTint space--t-3"},[e._v(" "+e._s("Deel een aanbieding met miljoenen mensen")+" ")]),t("p",{staticClass:"size--all-l text--color-greyShade space--mt-3 space--fromW2-mt-1 space--mb-3"},[e._v(" "+e._s("Plak de link waar andere mensen de deal kunnen kopen of meer informatie kunnen vinden")+" ")]),t("form",{staticClass:"width--all-12",on:{submit:},[t("div",{staticClass:"flex boxAlign-ai--all-c"},[t("div",{staticClass:"flex--grow-1"},[t("ol",[t("FormRow",[t("FormInputLabeled",{attrs:{id:"link",inputmode:"url",name:"link",placeholder:"https://www.example.com/greatdeal..."},on:{change:e.validateLink},scopedSlots:e._u([{key:"prependIcon",fn:proxy:!0},{key:"appendButton",fn:function(){return[e.thread.link?t("FormInputButton",{on:{click:e.resetLink}}):e._e()]},proxy:!0}]),model:{value:e.thread.link,callback:expression:"thread.link"}})],1)],1)]),e.canSubmit?t("div",{staticClass:"hide--toW2 space--ml-2"},[t("BaseButton",{directives:[{name:"track",rawName:"v-track:submitWithLink.click",arg:"submitWithLink",modifiers:{click:!0}}],staticClass:"width--all-12",attrs:{variant:"primary",mode:"brand",type:"submit",disabled:!e.thread.link}},[e._v(" "+e._s("Ga verder")+" ")])],1):e._e()]),e.submitLink?t("CheckBlockedLinks",{attrs:{link:e.submitLink},on:{request:e.setLinkErrors},scopedSlots:e._u([{key:"default",fn:function({isLoading:i,hasErrors:s,errors:a}){return[s?t("ControlLinkErrors",{attrs:{"error-messages":a},on:{cancel:e.resetLink}}):t("CheckLinkDuplicates",{attrs:{link:e.submitLink,filter:e.duplicatesFilter},on:{request:e.setDuplicates},scopedSlots:e._u([{key:"default",fn:function({isLoading:a,hasDuplicates:n,duplicates:r,isSoftDuplicates:l}){return[t("div",[t("GetLinkSuggestion",{attrs:{link:e.submitLink,"keep-alive":!i}}),t("GetLinkMerchantSuggestion",{attrs:{link:e.submitLink,"keep-alive":!i}}),i||a?t("ControlLoader",[e._v(e._s("Controleren op dubbelposts"))]):n?t("ThreadDuplicates",{attrs:{type:e.dealType,threads:r,"is-soft-duplicates":l},on:{cancel:e.resetLink,continue:e.continueWithLink}}):e._e(),t("EventTrigger",{attrs:{"is-loading":i||a,"has-errors":s||n},on:{trigger:e.showFullForm}})],1)]}}],null,!0)})]}}],null,!1,1543224628)}):e._e(),t("ControlLinkErrors",{attrs:{"error-messages":e.$v.messages.link},on:{cancel:e.resetLink}}),e.canSubmit?t("div",{staticClass:"hide--fromW2 space--mt-3"},[t("BaseButton",{directives:[{name:"track",rawName:"v-track:submitWithLink.click",arg:"submitWithLink",modifiers:{click:!0}}],staticClass:"width--all-12 space--mb-3",attrs:{variant:"primary",mode:"brand",type:"submit",disabled:!e.thread.link}},[e._v(" "+e._s("Ga verder")+" ")])],1):e._e()],1)]),e.canSubmit?t("div",{staticClass:"hAlign--all-c"},[t("BaseButton",{directives:[{name:"track",rawName:"v-track:submitWithoutLink.click",arg:"submitWithoutLink",modifiers:{click:!0}}],attrs:{variant:"tertiary",mode:"default"},on:{click:e.submitWithoutLink}},[e._v(" "+e._s("Ik heb geen link")+" ")])],1):e._e()])}),[],!1,null,null,null),y=D.exports,S=Object(s.defineComponent)({__name:"deal-submission-wizard",setup:e=>({__sfc:!0,ThreadSubmissionWizardContent:a.a,DealSubmissionLinkForm:y,DEAL_TYPE:d.a})}),F=Object(w.a)(S,(function(){var e=this,t=e._self._c,i=e._self._setupProxy;return t(i.ThreadSubmissionWizardContent,{attrs:{"thread-type":i.DEAL_TYPE}},[t(i.DealSubmissionLinkForm,{staticClass:"flex--grow-1",on:{"show-full-form":})],1)}),[],!1,null,null,null);t.default=F.exports},888:function(e,t,i){"use strict";var s=i(5),a=i(544),n=i(616),r=i(715);const l=()=>{let e=null;const t=Object(s.ref)([]),i=Object(s.ref)(!1),{isLoading:l,setLoader:o}=Object(a.a)(),c=()=>{t.value=[],i.value=!1,l.value&&Object(r.a)(e)};return{duplicates:t,checkDuplicates:(s,a)=>{s&&(c(),((s,a)=>{e=Object(n.a)(s,a),e.request.then((e=>{e&&(t.value=e.threads,i.value=e.isSoftDuplicates)})).finally(o())})(s,a))},resetDuplicates:c,isLoading:l,isSoftDuplicates:i}};var o=Object(s.defineComponent)({__name:"check-link-duplicates",props:{link:null,filter:null},setup(e){const t=e,{duplicates:i,isLoading:a,isSoftDuplicates:n,checkDuplicates:r,resetDuplicates:o}=l(),c=Object(s.computed)(();return Object(s.watch)((,(,{immediate:!0}),Object(s.onBeforeUnmount)((),{__sfc:!0,props:t,duplicates:i,isLoading:a,isSoftDuplicates:n,checkDuplicates:r,resetDuplicates:o,hasDuplicates:c}}}),c=i(45),u=Object(c.a)(o,(function(){var e=this,t=e._self._c,i=e._self._setupProxy;return t("div",[e._t("default",null,{isLoading:i.isLoading,duplicates:i.duplicates,isSoftDuplicates:i.isSoftDuplicates,hasDuplicates:i.hasDuplicates,reset:i.resetDuplicates})],2)}),[],!1,null,null,null);t.a=u.exports},962:function(e,t,i){"use strict";var s=i(93),a=i(654),n=i(715),r=i(611);let l=null,o=null;var c={props:{link:{type:String,default:""},keepAlive:{type:Boolean,default:!1}},watch:{link:{handler:"linkChange",immediate:!0}},beforeDestroymethods:Object.assign({},Object(s.b)("threadForm",["getFormSuggestionsFromLink","getProductSpecificationFromLink","clearFormSuggestionsFromLink"]),{linkChange(e,t){e!==t&&(this.reset(),this.link&&(this.request(),this.requestProductSpecification()))},async request(){l=await this.getFormSuggestionsFromLink({url:this.link}),l&&l.request.then(r.a).catch((()=>{})).finally(Object(a.a)(this,"isLoading"))},async requestProductSpecification(){o=await this.getProductSpecificationFromLink({url:this.link}),o&&o.request.catch(()},cancelRequest(){this.isLoading&&(Object(n.a)(l),Object(n.a)(o))},reset),render(){return this.$scopedSlots.default?this.$scopedSlots.default({isLoading:this.isLoading}):null}},u=i(45),d=Object(u.a)(c,undefined,undefined,!1,null,null,null);t.a=d.exports}}]);