"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2170],{6720:function(t,e){e.Z={Shift4:"shift4",Verotel:"verotel"}},6066:function(t,e,s){var i=s(5121),a=s(4487),r=s(6720);e.Z={data(){return{subscription:null,packages:[],providers:{},attemptId:null,selectedMethodId:null,paymentMethodsVisible:!1,loading:!1,paying:!1,data:null,invoker:null}},computed:{isVerotelActive(){return this.selectedMethod?.provider===r.Z.Verotel},availablePaymentOptions(){return this.paymentOptions.filter((t=>t.available))},paymentOptions(){return[{id:"shift4-cc",name:this.__("payments.card"),icons:["visa-color","mastercard-color","maestro-color","american-express-color"],available:!0,disabled:this.providers.shift4?.limit,provider:r.Z.Shift4,parameters:{}},{id:"verotel-cc",name:this.__("payments.card"),icons:["visa-color","mastercard-color"],provider:r.Z.Verotel,available:this.providers.shift4?.limit,disabled:!1,parameters:{paymentMethod:"CC"}},{id:"verotel-dd",name:this.__("payments.direct"),icons:["maestro-color","sofort"],provider:r.Z.Verotel,available:this.directDebitAvailable,disabled:!1,parameters:{paymentMethod:"DDEU"}}]},selectedMethod(){return this.paymentOptions.filter((t=>t.id===this.selectedMethodId))[0]},morePaymentOptionsAvailable(){return this.availablePaymentOptions.length>1},directDebitAvailable(){return["DE","AT","CH","BE","IT","NL","ES","FR"].includes(this.$shared.user.country)},size(){return this.paying?"small":this.paymentMethodsVisible?"medium":"xlarge"}},created(){this.selectedMethodId=this.availablePaymentOptions[0].id},methods:{async initialize(t){let{modal:e,invoker:s,creatorId:a=null,parentId:r=null}=t;this.data=null,this.paying=!1;const o=await i.Z.get(route("payments.data",{creator:a,modal:e,invoker:s,parent_id:r}));this.invoker=s,this.packages=o.data.packages,this.entranceFee=o.data.entranceFee,this.subscription=o.data.subscription,this.providers=o.data.providers,this.attemptId=o.data.attemptId,this.providers.shift4.limit&&(this.selectedMethodId="verotel-cc")},checkout(){this.isVerotelActive?this.close():this.paying=!0},switchToVerotel(){this.paying=!1,this.paymentMethodsVisible=!0,this.providers.shift4.limit=!0,this.selectedMethodId="verotel-cc"},shift4DailyLimitReached(){window.$toast.add({title:this.__("payments.declines_limit_reached"),message:this.__("payments.try_different_provider"),type:"warning"}),this.switchToVerotel()},shift4NotAvailable(){this.unknownError("Shift4 not available"),this.switchToVerotel()},unknownError(t){window.$toast.add({title:this.__("payments.script_error"),message:this.__("payments.please_try_again"),type:"error"}),t&&a.Tb(t)}}}},157:function(t,e,s){s.d(e,{Z:function(){return r}});var i=s(6720),a={name:"SelectPaymentMethod",props:{availablePaymentOptions:{type:Array,required:!0},selectedMethodId:{type:String,required:!0},loading:{type:Boolean,default:!1},vatAmount:{type:String,default:null},url:{type:String,default:null}},methods:{isVerotel(t){return t.provider===i.Z.Verotel},selectPaymentMethod(t){this.$emit("select-payment-method",t)},pay(){this.$emit("pay")},close(){this.$emit("close")},back(){this.$emit("back")}}},r=(0,s(1900).Z)(a,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"px-6 py-4 md:!pb-10",attrs:{modal:""},scopedSlots:t._u([{key:"header",fn:function(){return[e("v-text",{staticClass:"mb-5 w-full",attrs:{tag:"h2"}},[t._v("\n      "+t._s(t.__("layout.select_payment_method"))+"\n    ")])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"mt-4 w-full"},[e("v-separator",{staticClass:"!mb-4 md:hidden"}),t._v(" "),e("div",{staticClass:"center mb-2 gap-3 font-semibold"},[e("div",{staticClass:"rounded-full bg-gray-light-tertiary p-2 dark:bg-gray-tertiary"},[e("v-icon",{staticClass:"h-4 w-4 text-gray-light-caption dark:text-gray-caption",attrs:{name:"lock"}})],1),t._v(" "),e("v-text",{staticClass:"capitalize"},[t._v(t._s(t.__("layout.discreet_secure")))])],1),t._v(" "),e("v-text",{staticClass:"text-center text-xs font-semibold md:text-sm",attrs:{color:"caption",tag:"p"}},[t._v("\n        "+t._s(t.__("layout.credit_card_disclaimer"))+"\n      ")]),t._v(" "),e("div",{staticClass:"my-4 flex w-full flex-row justify-center gap-3 md:gap-5"},[e("v-icon",{attrs:{name:"maestro-color"}}),t._v(" "),e("v-icon",{attrs:{name:"mastercard-color"}}),t._v(" "),e("v-icon",{attrs:{name:"visa-color"}}),t._v(" "),e("v-icon",{attrs:{name:"sofort"}}),t._v(" "),e("v-icon",{attrs:{name:"americanexpress-color"}})],1),t._v(" "),e("v-text",{staticClass:"text-center text-xs font-semibold md:text-sm",attrs:{color:"caption",tag:"p"}},[t._v("\n        "+t._s(t.__("terms.short_location"))+"\n      ")])],1)]},proxy:!0}])},[e("button",{staticClass:"absolute right-2 top-2 z-100 p-3 md:right-5 md:top-5",attrs:{"aria-label":"Close",type:"button"},on:{click:t.close}},[e("v-icon",{staticClass:"h-5 w-5 cursor-pointer text-gray-light-icons transition-transform duration-300 ease-in-out hover:-rotate-45 dark:text-white",attrs:{name:"x"}})],1),t._v(" "),t._v(" "),e("div",{staticClass:"w-full md:my-5"},[e("div",{staticClass:"flex w-full flex-col"},[e("ul",{staticClass:"w-full"},t._l(t.availablePaymentOptions,(function(s){return e("v-radio-card",{key:s.id,staticClass:"flex-wrap",attrs:{selected:t.selectedMethodId===s.id,disabled:s.disabled},nativeOn:{click:function(e){s.disabled||t.selectPaymentMethod(s)}}},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"flex w-full flex-row flex-wrap items-center gap-x-4 gap-y-2 xl:flex-nowrap"},[e("span",{staticClass:"w-fit whitespace-nowrap text-lg font-semibold"},[t._v(t._s(s.name))]),t._v(" "),t.isVerotel(s)?e("v-text",{staticClass:"ml-auto w-24 text-right text-xs lg:ml-0 lg:text-left",attrs:{color:"caption"}},[t._v("\n                "+t._s(t.__("payments.by_verotel"))+"\n              ")]):e("v-text",{staticClass:"ml-auto w-24 text-right text-xs font-semibold lg:ml-0 lg:text-left",attrs:{color:"caption"}},[t._v("\n                "+t._s(t.__("payments.by_shift4"))+"\n              ")]),t._v(" "),e("div",{staticClass:"inline-flex gap-3 lg:ml-auto"},t._l(s.icons,(function(t){return e("v-icon",{key:t,staticClass:"h-4",attrs:{name:t}})})),1)],1)])])})),1),t._v(" "),e("div",{staticClass:"mt-4 flex gap-4"},[e("v-button",{staticClass:"w-full",attrs:{id:"payment-method-back-btn",size:"large",variant:"secondary"},on:{click:t.back}},[e("v-text",[t._v(t._s(t.__("layout.payment_method_back")))])],1),t._v(" "),t.url?e("v-button",{staticClass:"w-full",attrs:{id:"checkout",type:"button",variant:"success",size:"large",target:"_blank",href:t.url},on:{click:t.pay}},[e("v-text",[t._v(t._s(t.__("layout.continue")))])],1):e("v-button",{staticClass:"w-full",attrs:{id:"checkout",type:"button",variant:"success",size:"large","is-loading":t.loading,disabled:t.loading},on:{click:t.pay}},[e("v-text",[t._v(t._s(t.__("layout.continue")))])],1)],1),t._v(" "),e("p",{staticClass:"mt-2 text-center"},[e("v-text",{staticClass:"text-sm lg:text-base",attrs:{tag:"span"}},[t._v(t._s(t.__("layout.i_agree_with_checkout")))]),t._v(" "),e("a",{staticClass:"inline-block text-sm lg:text-base",attrs:{href:t.route("terms"),target:"_blank"}},[t._v("\n          "+t._s(t.__("layout.terms_conditions"))+"\n        ")])],1),t._v(" "),t.vatAmount?e("v-text",{staticClass:"mt-2 text-center text-xs",attrs:{color:"caption",tag:"p"},domProps:{innerHTML:t._s(t.__("modal.add_tokens.vat_amount",{amount:t.vatAmount}))}}):t._e()],1)])])}),[],!1,null,null,null).exports},6390:function(t,e,s){s.d(e,{Z:function(){return l}});var i=s(5121),a=s(958),r=s(6720),o={name:"Shift4PaymentForm",components:{TransitionExpand:a.$N},props:{providers:{type:Object,required:!0},title:{type:String,required:!0},package:{type:Number,default:null},packageBonus:{type:Number,default:null},amount:{type:Number,required:!0},currency:{type:String,required:!0},cost:{type:String,required:!0},creator:{type:Object,default:null},topCreators:{type:Array,default:()=>[]},parentId:{type:Number,default:null},invoker:{type:String,default:null}},data(){return{loading:!1,cooldown:!1,cardTimeout:null,errorTimeout:null,cooldownTimeout:null,cards:null,selectedCardId:null,error:null,shift4:null,email:null,form:{number:null,expiration:null,cvc:null}}},computed:{buysTokens(){return null!==this.package}},watch:{error(){clearTimeout(this.cooldownTimeout),clearTimeout(this.errorTimeout),this.error&&(this.errorTimeout=setTimeout((()=>{this.error=null}),1e4),this.cooldown=!0,this.cooldownTimeout=setTimeout((()=>{this.cooldown=!1}),3e3))}},created(){i.Z.get(route("shift4.cards",{parent_id:this.parentId,invoker:this.invoker||"unknown",model_id:this.creator?.id})).then((t=>{let{data:e}=t;this.cards=e.cards,this.cards.length&&(this.selectedCardId=this.cards[0].id),this.$nextTick((()=>{this.shift4=window.Shift4(this.providers.shift4.key),this.form=this.shift4.createComponentGroup().automount(this.$refs.shift4Form),this.selectedCardId||(this.cardTimeout=setTimeout((()=>{this.selectedCardId="new"}),500))}))}))},mounted(){"Shift4"in window?posthog.capture("shift4_payment_form.open"):this.$emit("not-available")},beforeDestroy(){clearTimeout(this.cardTimeout),clearTimeout(this.cooldownTimeout),clearTimeout(this.errorTimeout)},methods:{submit(){return this.error=null,this.loading=!0,posthog.capture("shift4_payment_form.pay"),this.$shared.user.hasEmail||this.email?this.selectedCardId&&"new"!==this.selectedCardId?(posthog.capture("shift4_payment_form.using-existing-card"),void this.verifyThreeDSecure(this.selectedCardId)):void this.shift4.createToken(this.form).then((t=>{const e=this.cards.find((e=>e.fingerprint===t.fingerprint));if(e)return posthog.capture("shift4_payment_form.using-existing-card"),void this.chargeCard(e.id);posthog.capture("shift4_payment_form.using-new-card"),this.verifyThreeDSecure(t.id)})).catch((t=>{this.error=t.message,this.loading=!1,posthog.capture("shift4_payment_form.form-error",{error:t.message})})):(this.error=this.__("auth.email_required"),this.loading=!1,void posthog.capture("shift4_payment_form.email-required"))},verifyThreeDSecure(t){posthog.capture("shift4_payment_form.verify-3ds"),this.shift4.verifyThreeDSecure({amount:this.amount,currency:this.currency,card:t}).then((t=>{t.threeDSecureInfo.enrolled&&"failed"===t.threeDSecureInfo.liabilityShift&&posthog.capture("shift4_payment_form.3ds-not-verified"),this.chargeCard(t.id)})).catch((t=>{this.error=t.message,this.loading=!1,posthog.capture("shift4_payment_form.3d-secure-error",{error:t.message})}))},chargeCard(t){let e=null;const s={card_id:t,provider:r.Z.Shift4,payment_attempt_id:this.parentId};this.email&&(s.email=this.email),this.package?(s.package=this.package,this.packageBonus&&(s.bonus_package_id=this.packageBonus),this.creator&&(s.converted_model_id=this.creator.id),e=this.route("orders.create",s)):(s.model=this.creator.id,e=this.route("subscriptions.create",s)),i.Z.get(e).then((()=>{const t={amount:this.amount,currency:this.currency,cost:this.cost,creator_id:this.creator?.id,creator_nickname:this.creator?.nickname};this.$emit("paid",t),posthog.capture("shift4_payment_form.paid",t)})).catch((e=>403===e.response.status?(this.$emit("daily-limit-reached"),void posthog.capture("shift4_payment_form.daily-limit-reached")):401===e.response.status?(this.verifyThreeDSecure(t),void posthog.capture("shift4_payment_form.requires-3ds")):(this.loading=!1,this.error=e.response.data.message,void posthog.capture("shift4_payment_form.payment-error",{error:e.response.data.message}))))},selectCard(t){this.selectedCardId=t.id,"new"!==t.id?posthog.capture("shift4_payment_form.select-card"):posthog.capture("shift4_payment_form.add-new-card")},icon(t){const e=t.brand.toLowerCase().replace(" ","-");return["visa","mastercard","maestro","american-express","discover","diners-club","jcb"].includes(e)?`${e}-color`:"credit-card"},back(){this.$emit("back")},avatar(t){return this.processImage({url:t})}}},n=(0,s(1900).Z)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full bg-gray-light-primary shadow dark:bg-gray-primary sm:h-auto sm:rounded-lg"},[e("div",{staticClass:"relative flex h-[calc(100*var(--vh,1%))] flex-col justify-between sm:h-full"},[e("div",{staticClass:"absolute left-0 top-0 z-10 flex h-20 w-full flex-col gap-2 bg-gray-light-primary px-4 dark:bg-gray-primary sm:px-6"},[e("div",{staticClass:"flex w-full flex-1 items-center gap-3 pt-2"},[e("button",{attrs:{title:t.__("dashboard.back")},on:{click:t.back}},[e("v-icon",{staticClass:"h-8 w-8 text-gray-light-icons hover:text-black dark:hover:text-white",attrs:{name:"arrow-back"}})],1),t._v(" "),e("v-text",{attrs:{tag:"h2",styling:"h4"}},[t._v(t._s(t.title))]),t._v(" "),e("button",{staticClass:"ml-auto",attrs:{"aria-label":"Close",title:"Close",type:"button"},on:{click:function(e){return t.$emit("close")}}},[e("v-icon",{staticClass:"h-5 w-5 text-gray-light-icons hover:text-black dark:hover:text-white",attrs:{name:"x"}})],1)],1),t._v(" "),e("v-separator")],1),t._v(" "),e("div",{staticClass:"relative my-20 flex max-h-[calc(100*var(--vh,1%)-10rem)] w-full flex-col gap-6 overflow-y-auto px-4 pb-4 pt-6 sm:max-h-[calc(85vh-10rem)] sm:px-6"},[t.buysTokens?[e("ul",{staticClass:"grid grid-cols-2 gap-2.5 text-sm sm:text-base"},t._l(4,(function(s){return e("li",{key:s,staticClass:"flex items-center gap-2 font-semibold text-white"},[e("span",{staticClass:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-500"},[e("v-icon",{staticClass:"h-3 w-3",attrs:{name:"check"}})],1),t._v(" "),e("v-text",{staticClass:"whitespace-nowrap"},[t._v("\n              "+t._s(t.__(`payments.buy_tokens_list.feature_${s}`))+"\n            ")])],1)})),0),t._v(" "),e("div",{staticClass:"relative flex items-center justify-center"},t._l(t.topCreators,(function(s){return e("img",{key:s.id,staticClass:"-mr-2 h-16 w-16 shrink-0 overflow-hidden rounded-full object-cover ring-1 ring-white/30",attrs:{src:t.avatar(s.avatar_circle),alt:s.nickname,draggable:"false"}})})),0)]:e("div",{staticClass:"flex items-center gap-5"},[e("img",{staticClass:"h-36 w-36 shrink-0 overflow-hidden rounded-full object-cover ring-1 ring-white/30",attrs:{src:t.avatar(t.creator.avatar_circle),alt:t.creator.nickname,draggable:"false"}}),t._v(" "),e("ul",{staticClass:"flex flex-col gap-2.5 text-sm sm:text-base"},t._l(4,(function(s){return e("li",{key:s,staticClass:"flex items-center gap-2 font-semibold text-white"},[e("span",{staticClass:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-500"},[e("v-icon",{staticClass:"h-3 w-3",attrs:{name:"check"}})],1),t._v(" "),e("v-text",{staticClass:"whitespace-nowrap"},[t._v("\n              "+t._s(t.__(`payments.buy_subscription_list.feature_${s}`))+"\n            ")])],1)})),0)]),t._v(" "),t.$shared.user.hasEmail?t._e():e("div",{staticClass:"relative"},[e("label",{staticClass:"absolute left-4 top-1 text-sm font-medium tracking-wider text-stone-600",attrs:{for:"email"}},[t._v("\n          "+t._s(t.__("auth.email"))+"\n        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"h-16 w-full rounded-lg border border-stone-300 bg-white px-4 pb-1 pt-7 placeholder:text-stone-500",attrs:{name:"email",type:"email",placeholder:t.__("auth.email"),required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),t.cards?.length?e("ul",{staticClass:"flex w-full flex-col gap-4"},[t._l(t.cards,(function(s){return e("li",{key:s.id,staticClass:"flex w-full cursor-pointer flex-nowrap items-center gap-4 rounded-lg border border-stone-300 bg-white p-4 ring-primary-400/70 hover:ring",class:[s.id===t.selectedCardId?"ring":""],on:{click:function(e){return t.selectCard(s)}}},[e("v-icon",{staticClass:"h-6",attrs:{name:t.icon(s)}}),t._v(" "),e("span",[t._v("\n            "+t._s(s.number)+"\n          ")]),t._v(" "),e("span",{staticClass:"ml-auto whitespace-nowrap text-stone-400"},[t._v(" ("+t._s(s.expiration)+") ")])],1)})),t._v(" "),e("li",{staticClass:"flex w-full cursor-pointer flex-nowrap items-center gap-4 rounded-lg border border-stone-300 bg-white p-4 ring-primary-400/70 hover:ring",class:["new"===t.selectedCardId?"ring":""],on:{click:function(e){return t.selectCard({id:"new"})}}},[e("v-icon",{staticClass:"h-6 text-stone-400",attrs:{name:"credit-card"}}),t._v(" "),e("span",[t._v("\n            "+t._s(t.__("layout.add_new_card"))+"\n          ")])],1)],2):null===t.cards||null===t.selectedCardId?e("div",{staticClass:"flex h-[126px] w-full items-center justify-center"},[e("v-loading-dots")],1):t._e(),t._v(" "),e("form",{directives:[{name:"show",rawName:"v-show",value:null!==t.cards&&null!==t.selectedCardId&&(!t.cards.length||"new"===t.selectedCardId),expression:"cards !== null && selectedCardId !== null && (!cards.length || selectedCardId === 'new')"}],ref:"shift4Form",staticClass:"flex w-full flex-col gap-4",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"relative h-16 w-full rounded-lg border border-stone-300 bg-white px-4 pb-1 pt-7"},[e("label",{staticClass:"absolute left-4 top-1 text-sm font-medium tracking-wider text-stone-600"},[t._v("\n            "+t._s(t.__("layout.card_number"))+"\n          ")]),t._v(" "),e("div",{attrs:{"data-shift4":"number"}})]),t._v(" "),e("div",{staticClass:"flex w-full gap-4"},[e("div",{staticClass:"relative h-16 w-2/3 rounded-lg border border-stone-300 bg-white px-4 pb-1 pt-7"},[e("label",{staticClass:"absolute left-4 top-1 text-sm font-medium tracking-wider text-stone-600"},[t._v("\n              "+t._s(t.__("layout.expiration"))+"\n            ")]),t._v(" "),e("div",{attrs:{"data-shift4":"expiry"}})]),t._v(" "),e("div",{staticClass:"relative h-16 w-1/3 rounded-lg border border-stone-300 bg-white px-4 pb-1 pt-7"},[e("label",{staticClass:"absolute left-4 top-1 text-sm font-medium tracking-wider text-stone-600"},[t._v("\n              "+t._s(t.__("layout.cvc"))+"\n            ")]),t._v(" "),e("div",{attrs:{"data-shift4":"cvc"}})])])]),t._v(" "),e("transition-expand",{attrs:{axis:"y"}},[t.error?e("div",{staticClass:"rounded-lg bg-red-100 p-4 text-red-500"},[t._v("\n          "+t._s(t.error)+"\n        ")]):t._e()]),t._v(" "),e("v-separator"),t._v(" "),e("div",{staticClass:"-my-2 flex w-full flex-col"},[e("v-text",{staticClass:"mb-2 text-center text-sm",attrs:{color:"caption"}},[e("span",[t._v(t._s(t.__("layout.i_agree_with_checkout")))]),t._v(" "),e("a",{staticClass:"inline-block",attrs:{href:t.route("terms"),target:"_blank"}},[t._v("\n            "+t._s(t.__("layout.terms_conditions"))+"\n          ")])])],1),t._v(" "),e("v-text",{staticClass:"-mb-4 text-center text-sm uppercase tracking-wider",domProps:{innerHTML:t._s(t.__("payments.statement"))}}),t._v(" "),t._m(0)],2),t._v(" "),e("div",{staticClass:"absolute bottom-0 left-0 z-10 flex h-20 w-full items-center bg-gray-light-secondary px-4 dark:bg-gray-secondary sm:px-6"},[e("v-button",{staticClass:"w-full",attrs:{size:"large",disabled:t.loading||t.cooldown||null===t.cards},on:{click:t.submit}},[t.loading?e("v-icon",{attrs:{loading:"",name:"spinner"}}):t._e(),t._v(" "),e("span",[t._v(t._s(t.__("layout.pay",{amount:t.cost})))])],1)],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"flex w-full shrink-0 items-center justify-center gap-8 py-5"},[t("img",{staticClass:"h-10 dark:brightness-200",attrs:{draggable:"false",src:"/img/payment/privacy-in-bank-statement.png",alt:"Privacy in bank statement"}}),this._v(" "),t("img",{staticClass:"h-10 dark:brightness-200",attrs:{draggable:"false",src:"/img/payment/256bit-encryption.png",alt:"256bit encryption"}})])}],!1,null,null,null),l=n.exports},2170:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var i=s(5121),a=s(4487),r=s(6066),o={name:"SubscriptionFeatures",props:{picturesCount:{type:Number,required:!0},videosCount:{type:Number,required:!0},featuresVisible:{type:Boolean,required:!0},invoker:{type:String,required:!1,default:""}},emits:["show-features"],computed:{contentLibrarySubtitle(){return this.videosCount>0&&this.picturesCount>0?"modal.buy_subscription.features.content_library.subtitle":this.picturesCount>0?"modal.buy_subscription.features.content_library.subtitle_pictures":"modal.buy_subscription.features.content_library.subtitle_videos"},rawFeatures(){return[{title:this.__("modal.buy_subscription.features.unlimited_messages.title"),subtitle:this.__("modal.buy_subscription.features.unlimited_messages.subtitle"),invoker:["chat-send"]},{title:this.__("modal.buy_subscription.features.content_library.title"),subtitle:this.__(this.contentLibrarySubtitle,{picturesCount:this.picturesCount,videosCount:this.videosCount}),invoker:["content-library"]},{title:this.__("modal.buy_subscription.features.share_content.title"),subtitle:this.__("modal.buy_subscription.features.share_content.subtitle"),invoker:["chat-actions.photo","chat-actions.video","chat-actions.files"]},{title:this.__("modal.buy_subscription.features.custom_content.title"),subtitle:this.__("modal.buy_subscription.features.custom_content.subtitle")}]},headLineFeature(){return this.rawFeatures.find((t=>t.invoker?.includes(this.invoker)))},features(){return this.headLineFeature?this.rawFeatures.filter((t=>!t.invoker?.includes(this.invoker))):this.rawFeatures}},created(){this.headLineFeature||this.$emit("show-features")}},n=s(1900),l=(0,n.Z)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative mb-5 flex w-full flex-col gap-4 md:mb-8 lg:mb-12"},[t.headLineFeature?e("div",{staticClass:"flex w-full items-center gap-3"},[e("span",{staticClass:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary-300 to-primary-400"},[e("v-icon",{staticClass:"h-6 w-6 text-white dark:text-black",attrs:{name:"check"}})],1),t._v(" "),e("div",[e("v-text",{staticClass:"text-2xl font-medium"},[t._v("\n        "+t._s(t.headLineFeature.title)+"\n      ")]),t._v(" "),e("v-text",{staticClass:"text-sm font-medium",attrs:{color:"caption"}},[t._v("\n        "+t._s(t.headLineFeature.subtitle)+"\n      ")])],1)]):t._e(),t._v(" "),t.featuresVisible?t._e():e("v-button",{staticClass:"w-full",attrs:{size:"large"},on:{click:function(e){return t.$emit("show-features")}}},[t._v("\n    "+t._s(t.__("modal.buy_subscription.discover_all_benefits"))+"\n  ")]),t._v(" "),e("div",{staticClass:"flex w-full flex-col gap-2 overflow-hidden duration-1000",class:t.featuresVisible?"mt-0":"mt-[100vh] hidden"},[t.headLineFeature?e("div",{staticClass:"flex w-full items-center"},[e("v-text",{staticClass:"font-semibold sm:text-lg"},[t._v(t._s(t.__("modal.buy_subscription.on_top_of_that")))])],1):t._e(),t._v(" "),t._l(t.features,(function(s,i){return e("div",{key:i,staticClass:"flex w-full items-center gap-3"},[e("span",{staticClass:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary-300 to-primary-400"},[e("v-icon",{staticClass:"h-4 w-4 text-white dark:text-black",attrs:{name:"check"}})],1),t._v(" "),e("div",[e("v-text",{staticClass:"text-base font-medium"},[t._v("\n          "+t._s(s.title)+"\n        ")]),t._v(" "),e("v-text",{staticClass:"text-xs font-medium sm:text-sm lg:mb-1",attrs:{color:"caption"}},[t._v("\n          "+t._s(s.subtitle)+"\n        ")])],1)])}))],2)],1)}),[],!1,null,null,null).exports,c=s(6390),d=s(157),u=s(629),m=s(7347),h=s(6720);function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function _(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){v(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function v(t,e,s){var i;return(e="symbol"==typeof(i=function(t,e){if("object"!=typeof t||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?i:String(i))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var f={name:"BuySubscriptionModal",components:{SelectPaymentMethod:d.Z,Shift4PaymentForm:c.Z,SubscriptionFeatures:l},mixins:[r.Z],data(){return{creator:null,picturesCount:0,videosCount:0,featuresVisible:window.innerWidth>768,invoker:null}},computed:_(_({},(0,u.Se)("modal",["activeModal","modalOptions"])),{},{visible(){return this.activeModal===m.Z.BUY_SUBSCRIPTION},buttonText(){return`${this.__("modal.buy_subscription.subscribe_for")} ${this.subscription.price}/${this.__("modal.buy_subscription.month")}`},avatar(){return this.processImage({url:this.creator.avatar_thumbnail})},url(){return this.isVerotelActive?this.route("subscriptions.create",_({provider:this.selectedMethod.provider,model:this.creator.id},this.selectedMethod.parameters)):null},size(){return this.paying?"small":this.paymentMethodsVisible?"medium":"large"}}),watch:{visible(){this.visible&&this.open(this.modalOptions)}},methods:_(_({},(0,u.nv)("modal",["openModal","closeModal"])),{},{async open(t){await this.initialize({creatorId:t.creator?.id,invoker:t.invoker||"unknown",modal:"buy-subscription"});const e=await i.Z.get(route("subscriptions.content-count",{model:t.creator.id}));this.picturesCount=e.data.pictures_count,this.videosCount=e.data.videos_count,this.paymentMethodsVisible=!1,this.paying=!1,this.creator=t.creator,t?.invoker&&(this.invoker=t.invoker),posthog.capture("buy-subscription-modal.open",{invoker:t?.invoker,creator_id:this.creator?.id,creator_nickname:this.creator?.nickname})},showPaymentMethods(){this.paymentMethodsVisible=!0,posthog.capture("buy-subscription-modal.payment-methods")},selectPaymentMethod(t){this.selectedMethodId=t.id,posthog.capture("buy-subscription-modal.select-payment-method",{method:this.selectedMethodId})},pay(){const{creator:t}=this;posthog.capture("buy-subscription-modal.pay",{creator_id:t?.id,creator_nickname:t?.nickname}),this.checkout()},paid(t){window.gtag("event","subscription_purchase",_({provider:h.Z.Shift4},t));const{creator:e}=this;this.close(),this.$inertia.reload({preserveScroll:!0,preserveState:!1,onSuccess:()=>{this.openModal({name:m.Z.SUBSCRIPTION_BOUGHT,options:{invoker:"subscription-payment-modal",creator:e}})},onError:t=>{a.Tb(t),window.location.reload()}})},close(){this.closeModal({name:m.Z.BUY_SUBSCRIPTION}),this.creator=null,this.invoker=null,this.featuresVisible=window.innerWidth>768},back(){this.paying=!1,this.selectedPackageId=null,this.paymentMethodsVisible=!1}})},b=(0,n.Z)(f,(function(){var t=this,e=t._self._c;return t.visible&&t.creator?e("v-modal",{attrs:{id:"buy-subscription-modal",value:!0,size:t.size,"close-on-back":""},on:{close:t.close}},[t.paying?e("Shift4PaymentForm",{key:"pay",attrs:{providers:t.providers,title:t.__("payments.purchase_subscription",{nickname:t.creator.nickname}),amount:t.subscription.amount,currency:t.subscription.currency,cost:t.subscription.cost,creator:t.creator,"parent-id":t.attemptId,invoker:"buy-subscription"},on:{paid:t.paid,back:t.back,close:t.close,"not-available":t.shift4NotAvailable,"daily-limit-reached":t.shift4DailyLimitReached}}):t.paymentMethodsVisible?e("SelectPaymentMethod",{key:"method",attrs:{"selected-method-id":t.selectedMethodId,"available-payment-options":t.availablePaymentOptions,loading:t.loading,"vat-amount":t.subscription.vat,url:t.url},on:{pay:t.pay,close:t.close,"select-payment-method":t.selectPaymentMethod}}):e("div",{staticClass:"relative flex max-h-screen min-h-full w-full flex-col items-center bg-white dark:bg-gray-primary md:flex-row md:items-stretch md:justify-center"},[e("button",{staticClass:"absolute right-2 top-2 z-1000 p-3 md:right-5 md:top-5",attrs:{"aria-label":"Close",type:"button"},on:{click:t.close}},[e("v-icon",{staticClass:"h-5 w-5 cursor-pointer text-gray-light-icons transition-transform duration-300 ease-in-out hover:-rotate-45 dark:text-white",attrs:{name:"x"}})],1),t._v(" "),e("v-text",{staticClass:"my-4 block w-full shrink-0 px-6 font-semibold capitalize md:hidden",attrs:{tag:"h3"}},[t._v("\n      "+t._s(t.__("modal.buy_subscription.ready_for_more"))+"\n      "),e("br"),t._v("\n      "+t._s(t.__("modal.buy_subscription.subscribe_and_support"))+"\n    ")]),t._v(" "),e("div",{staticClass:"relative w-full shrink-0 overflow-hidden px-6 duration-1000 sm:h-96 md:block md:h-auto md:max-h-[35rem] md:w-5/12 md:flex-1 md:py-6",class:t.featuresVisible?"h-[20vh]":"h-[48vh]"},[t.featuresVisible?t._e():e("div",{staticClass:"absolute left-0 top-0 z-1000 flex w-fit items-center gap-3 p-6 pl-12 md:pt-12"},[e("v-avatar",{staticClass:"!block h-12 w-12 shrink-0",attrs:{url:t.creator.avatar_circle,gender:t.creator.gender,href:t.creator.link,country:t.creator.country,"full-rounded":""}}),t._v(" "),e("v-text",{staticClass:"flex flex-col items-start justify-center gap-1 !text-white drop-shadow",attrs:{href:t.creator.link}},[e("span",{staticClass:"min-w-0 truncate font-bold"},[t._v(t._s(t.creator.nickname))])])],1),t._v(" "),e("img",{staticClass:"h-full w-full rounded-3xl border-2 border-primary-400 object-cover object-top",attrs:{src:t.avatar,alt:t.creator.nickname}})]),t._v(" "),e("div",{staticClass:"relative flex w-full flex-1 flex-col justify-end bg-white px-6 py-4 dark:bg-gray-primary sm:justify-center md:mt-0 md:h-full md:w-7/12 md:flex-none md:rounded-none md:py-8"},[e("div",{staticClass:"mx-auto flex w-full flex-1 flex-col gap-6 md:h-full md:max-w-lg md:gap-10"},[e("v-text",{staticClass:"hidden w-full capitalize md:block",attrs:{tag:"h2"}},[t._v("\n          "+t._s(t.__("modal.buy_subscription.ready_for_more"))+"\n          "),e("br"),t._v("\n          "+t._s(t.__("modal.buy_subscription.subscribe_and_support"))+"\n        ")]),t._v(" "),e("div",{staticClass:"flex w-full flex-1 flex-col"},[e("subscription-features",{attrs:{"pictures-count":t.picturesCount,"videos-count":t.videosCount,"button-text":t.buttonText,"features-visible":t.featuresVisible,invoker:t.invoker},on:{"show-features":function(e){t.featuresVisible=!0}}}),t._v(" "),t.featuresVisible?[e("v-button",{staticClass:"w-full",attrs:{type:"button",size:"large",variant:"success","is-loading":t.loading},domProps:{innerHTML:t._s(t.buttonText)},on:{click:function(e){t.morePaymentOptionsAvailable?t.showPaymentMethods():t.pay()}}}),t._v(" "),e("v-text",{staticClass:"mt-2 text-center text-sm font-medium",attrs:{color:"caption",tag:"p"}},[t._v("\n              "+t._s(t.__("modal.buy_subscription.renews_monthly"))+"\n              "),e("a",{attrs:{href:t.route("settings.subscriptions.index"),target:"_blank"}},[t._v("\n                "+t._s(t.__("modal.buy_subscription.cancel_anytime"))+"\n              ")])]),t._v(" "),t.subscription?.vat?e("v-text",{staticClass:"mt-2 text-center text-xs",attrs:{color:"caption",tag:"p"},domProps:{innerHTML:t._s(t.__("modal.buy_subscription.vat_amount",{amount:t.subscription.vat}))}}):t._e()]:t._e()],2)],1)])],1)],1):t._e()}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=2170.js.map?id=8d878838cc9dbc3a