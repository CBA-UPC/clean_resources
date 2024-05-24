(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1068:function(t,e,s){"use strict";s.r(e);var i=s(129),r=s.n(i),a=s(1151),n=s(1010),o=s(62),l=s(260);const c="subscription";var u={components:{CardForm:a.default},mixins:[Object(n.a)({})],data:()=>({user:null,subscription:null,product:null,resubscribe:!1,showCardForm:!1,onError:null,i18nConstants:l.a}),computed:{formattedPricepricetitle(){const t=r()(this.user.displayName,{length:15});return this.subscribeSuccess?this.$t("subscribe_modal.success_title"):!this.showCardForm&&this.resubscribe?this.$t("subscribe_modal.resubscribe_title",[t]):this.$t("subscribe_modal.title",[t])}},async mounted(){const{user:t,subscription:e,product:s,resubscribe:i=!1,onError:r=null}=this.$attrs;this.user=t,this.subscription=e,this.product=s,this.resubscribe=i,this.onError=r||(t=>this.$showErrorMessage(null==t?void 0:t.localizedMessage))},methods:{async onCardSubmit(t){try{await this.addCard(t),this.showCardForm=!1,await this.$nextTick(),await this.confirmPayment(c,this.handlePaymentConfirmation,!0)}catch(e){throw e.message&&this.onError(e),e}},async subscribeWithDefaultCard(){try{await this.subscribe(this.user.userUid)}catch(t){this.onError(t)}},async handleResubscribe(t){if(t){const{page:{items:[t]}}=await this.$api.subscriptions.getList("active",this.user.username);this.onSubscribeSuccess(t)}else try{await this.doResubscribe(this.subscription.subscriptionUid)}catch(e){this.onError(e)}},async onSubscribe(){if(!this.fingerprintError)if(this.hasCard)if(this.resubscribe)await this.handlePaymentConfirmation(!1);else try{await this.confirmPayment(c,this.handlePaymentConfirmation,!1)}catch(t){this.$showErrorMessage(null==t?void 0:t.localizedMessage)}else this.showCardForm=!0},async handlePaymentConfirmation(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$modal.close(();const{resubscribe:e,subscribeSuccess:s,hasCard:i}=this;e&&!s?await this.handleResubscribe(t):!i||e||s||await this.subscribeWithDefaultCard()}}},b=u,d=s(0),p=Object(d.a)(b,(function(){var t=this,e=t._self._c;return t.user?e("sx-modal-card",{attrs:{title:t.title,"data-cy-id":"subscription-modal"}},[t.subscribeSuccess||t.showCardForm?t._e():e("div",[e("div",{staticClass:"flex flex-row mb-2"},[e("sx-icon",{staticClass:"text-green mr-1 mt-1",attrs:{name:"Checkmark",height:"17"}}),t._v(" "),e("span",[t._v(t._s(t.$t("subscribe_modal.benefits_list[0]")))])],1),t._v(" "),e("div",{staticClass:"flex flex-row mb-2"},[e("sx-icon",{staticClass:"text-green mr-1 mt-1",attrs:{name:"Checkmark",height:"17"}}),t._v(" "),e("span",[t._v(t._s(t.$t("subscribe_modal.benefits_list[1]")))])],1),t._v(" "),e("div",{staticClass:"flex flex-row mb-2"},[e("sx-icon",{staticClass:"text-green mr-1 mt-1",attrs:{name:"Checkmark",height:"17"}}),t._v(" "),e("span",[t._v(t._s(t.$t("subscribe_modal.benefits_list[2]")))])],1),t._v(" "),e("div",{staticClass:"flex flex-row mb-2"},[e("sx-icon",{staticClass:"text-green mr-1 mt-1",attrs:{name:"Checkmark",height:"17"}}),t._v(" "),e("span",[t._v(t._s(t.$t("subscribe_modal.benefits_list[3]",{billedAsName:t.i18nConstants.billedAsName})))])],1),t._v(" "),t.paymentError?e("div",{staticClass:"w-full p-2.5 text-sm text-center mx-2",class:{"text-white bg-error mt-3 mb-1":t.bankDeclinedError,"text-error":!t.bankDeclinedError}},[t._v("\n      "+t._s(t.paymentError.localizedMessage)+"\n    ")]):t._e()]),t._v(" "),t.subscribeSuccess?e("div",[e("div",{staticClass:"flex flex-row items-center mb-2"},[e("sx-icon",{staticClass:"text-green mr-1",attrs:{name:"Checkmark",height:"17"}}),t._v(" "),e("span",[t._v(t._s(t.resubscribe?t.$t("subscribe_modal.resubscribe_success_label"):t.$t("subscribe_modal.success_label")))])],1)]):t._e(),t._v(" "),t.fingerprintError?e("div",{staticClass:"w-full py-2 px-4 text-error text-sm text-center"},[t._v("\n    "+t._s(t.fingerprintError)+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"mt-5 items-center flex flex-col justify-center"},[t.showCardForm||!t.resubscribe||t.subscribeSuccess?t._e():e("sx-button",{attrs:{"data-cy-id":"resubscribe-button",color:"c-secondary",size:"R",block:"",disabled:t.paymentDataLoading,loading:t.paymentDataLoading},on:{click:t.onSubscribe}},[t._v("\n      "+t._s(t.$t("subscribe_modal.buttons[0]"))+"\n    ")]),t._v(" "),t.showCardForm||t.resubscribe||t.subscribeSuccess?t._e():e("sx-button",{attrs:{"data-cy-id":"subscribe-button",color:"c-secondary",size:"R",block:"",disabled:t.paymentDataLoading,loading:t.paymentDataLoading},on:{click:t.onSubscribe}},[t._v("\n      "+t._s(t.$t("subscribe_modal.buttons[1]",[t.formattedPrice]))+"\n    ")]),t._v(" "),t.subscribeSuccess?e("sx-button",{attrs:{"data-cy-id":"continue-button",color:"c-secondary",size:"R"},on:{click:},[t._v("\n      "+t._s(t.$t("subscribe_modal.buttons[2]"))+"\n    ")]):t._e()],1),t._v(" "),t.showCardForm?e("CardForm",{ref:"cardForm",attrs:{"on-submit":t.onCardSubmit,"submit-text":t.$t("subscribe_modal.ok_btn",[t.formattedPrice]),"will-charge":t.price,error:t.paymentError,"bank-error":t.bankDeclinedError}}):t._e()],1):t._e()}),[],!1,null,null,null);e.default=p.exports},1073:function(t,e,s){"use strict";s.r(e);var i=s(128),r=s(1783),a=s(260),n={components:{ModelSubscribe:r.default},props:{geoBlocked:{type:Boolean},isOwner:{type:Boolean},isFollowing:{type:Boolean},emailNotifications:{type:Boolean},fetchingModelInfo:{type:Boolean},publicProfile:{type:Boolean},isDisabled:{type:Boolean},blocked:{type:Boolean},blockingUser:{type:Boolean},blockedByUser:{type:Boolean},showSubscribe:{type:Boolean},followersCount:{type:Number,default:0},postsCount:{type:Number,default:0},viewsCount:{type:Number,default:0},user:{type:Object,default:()=>{}},activeComponentProps:{type:Object,default:,product:{type:Object,default:()=>null},subscription:{type:Object,default:()=>null}},data:()=>({supportEmail:a.a.supportEmail,mailSupportEmail:"mailto:".concat(a.a.supportEmail)}),computed:{showContent...Object(i.b)({isCreator:"auth/isCreator",username:"user/getUserName"}),affLink(){return{link:"".concat(this.$baseUrl,"/").concat(this.username),title:this.$t("creator.affiliate_link_title")}},isCustomPageisCreatorsPage(){var t;return"creators"===(null===(t=this.user)||void 0===t?void 0:t.username)},isSupportPage(){var t;return"support"===(null===(t=this.user)||void 0===t?void 0:t.username)},isPaywallEnabledsubscriptionActive},o=(s(1515),s(0)),l=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col h-full",class:t.fetchingModelInfo?"overflow-y-auto min-content-height":""},[e("sxc-model-header",{attrs:{user:t.user,"is-owner":t.isOwner,"followers-count":t.followersCount,"posts-count":t.postsCount,"views-count":t.viewsCount,"is-following":t.isFollowing,"email-notifications":t.emailNotifications,"custom-page":t.isCustomPage,"geo-blocked":t.geoBlocked,blocked:t.blocked,"blocking-user":t.blockingUser,"public-profile":t.publicProfile},on:{follow:function(e){return t.$emit("follow")},unfollow:function(e){return t.$emit("unfollow")},"open-chat":function(e){return t.$emit("open-chat")}},scopedSlots:t._u([t.isSupportPage?{key:"info",fn:function(){return[e("sxc-model-support-faq",{attrs:{support:""}}),t._v(" "),e("p",{staticClass:"text-sm text-secondary mx-3 mt-3 tracking-tight"},[e("span",[t._v(t._s(t.$t("creator.faq_label")))]),t._v(" "),e("span",[e("a",{staticClass:"font-semibold",attrs:{href:t.mailSupportEmail}},[t._v(t._s(t.supportEmail))])])])]},proxy:!0}:null],null,!0)},[t.isSupportPage?[e("p",{staticClass:"text-sm mt-2"},[e("span",{domProps:{innerHTML:t._s(t.$t("creator.support_label[0]"))}}),t._v(" "),e("span",[e("n-link",{staticClass:"font-semibold text-c-primary",attrs:{"data-cy-id":"model-affiliate-link",to:"/creators"}},[t._v(t._s(t.$t("creator.support_label[1]")))])],1),t._v(" "),e("span",[t._v("\n          "+t._s(t.$t("creator.support_label[2]"))+"\n        ")])])]:t.isCreatorsPage?[e("div",{staticClass:"text-base mt-1 mx-2"},[e("p",{staticClass:"leading-5"},[t._v("\n          "+t._s(t.$t("creator.creator_label"))+"\n        ")])])]:t._e()],2),t._v(" "),t.geoBlocked?e("div",{staticClass:"text-lg text-center p-5 bg-foreground text-secondary flex flex-col flex-1 items-center justify-center"},[t._v("\n    "+t._s(t.$t("creator.geo_blocked_label"))+"\n  ")]):t._e(),t._v(" "),t.fetchingModelInfo?t._e():[t.publicProfile||t.isOwner?[t.showSubscribe&&!t.isCustomPage&&t.publicProfile?[e("model-subscribe",{staticClass:"mt-5",attrs:{user:t.user,subscription:t.subscription,product:t.product},on:{subscribe:function(e){return t.$emit("subscribe",e)},resubscribe:function(e){return t.$emit("resubscribe",e)},unsubscribe:function(e){return t.$emit("unsubscribe")}}})]:t.isCreatorsPage?[t.isCreator?e("div",{staticClass:"pl-4 pr-3"},[e("ul",[e("sxc-affiliate-link",{attrs:{link:t.affLink.link,title:t.affLink.title}})],1)]):e("div",[e("div",{staticClass:"mx-3 mb-3"},[t.isCreator?t._e():e("sx-button",{attrs:{block:"",color:"c-secondary"},on:{click:function(e){return t.$emit("verify")}}},[e("sx-icon",{staticClass:"mr-1",staticStyle:{height:"18px"},attrs:{name:"diamond"}}),t._v(" "),e("span",{staticStyle:{"white-space":"nowrap"}},[t._v("\n                "+t._s(t.$t("creator.become_btn"))+"\n              ")])],1)],1)]),t._v(" "),e("sxc-model-support-faq",{staticClass:"mt-2",attrs:{creators:""}}),t._v(" "),e("p",{staticClass:"text-sm text-secondary mx-3 mt-3 tracking-tight"},[e("span",[t._v(t._s(t.$t("creator.faq_label")))]),t._v(" "),e("span",[e("a",{staticClass:"font-semibold",attrs:{href:t.mailSupportEmail}},[t._v(t._s(t.supportEmail))])])])]:t._e(),t._v(" "),t.blocked?e("div",{staticClass:"text-lg text-center p-5 bg-foreground text-secondary flex flex-col flex-1 items-center justify-center"},[t.isDisabled?[t._v("\n          "+t._s(t.$t("creator.banned_label"))+"\n        ")]:t.blockedByUser?[t._v("\n          "+t._s(t.$t("creator.blocked_label"))+"\n          "),e("sx-button",{staticClass:"text-c-primary",attrs:{size:"R",color:"c-primary",ghost:""},on:{click:function(e){return t.$emit("block",t.user)}}},[t._v("\n            "+t._s(t.$t("global.unblock"))+"\n          ")])]:[t._v("\n          "+t._s(t.$t("creator.creator_blocked_you_label",[t.user.username]))+"\n        ")]],2):t._e(),t._v(" "),t.isPaywallEnabled&&t.isOwner?e("div",{staticClass:"flex flex-row text-center p-2 text-secondary text-sm items-center justify-center mx-4 border border-foreground rounded-xs"},[e("sx-icon",{staticClass:"mr-2",attrs:{name:"lockFilled",height:"16"}}),t._v(" "),e("span",[t._v("\n          "+t._s(t.$t("edit_profile.paywall_enabled_label"))+"\n          "),e("NuxtLink",{staticClass:"font-bold",attrs:{to:"/account/me/edit"}},[t._v(t._s(t.$t("global.manage")))])],1)],1):t._e(),t._v(" "),t.showContent?e("section",{staticClass:"w-full mt-5"},[t._t("model-content")],2):t._e()]:t.blockingUser?[e("div",{staticClass:"text-lg text-center p-5 bg-foreground text-secondary flex flex-col flex-1 items-center justify-center"},[t._v("\n        "+t._s(t.$t("creator.creator_blocked_you_label",[t.user.username]))+"\n      ")])]:t._e()]],2)}),[],!1,null,"3d394f74",null);e.default=l.exports},1091:function(t,e,s){"use strict";s.r(e);s(1513);var i=s(0),r=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative overflow-y-auto static-background"},[e("section",{staticClass:"relative w-full mx-auto placeholder-item overflow-hidden",staticStyle:{height:"120px"}}),t._v(" "),t._m(0),t._v(" "),e("section",{staticClass:"w-full sx-media-min-content-height"},[e("div",{staticStyle:{height:"28px"}}),t._v(" "),e("div",{staticClass:"max-w-screen-lg mx-auto"},[e("div",{staticClass:"grid grid-cols-3 gap-0.5"},t._l(10,(function(t){return e("div",{key:t},[e("sxc-square-placeholder")],1)})),0)])])])}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"relative bg-primary",staticStyle:{"margin-bottom":"28px"}},[e("div",{staticClass:"mx-4"},[e("div",{staticClass:"flex flex-col items-stretch"},[e("div",{staticClass:"flex items-center -mt-2"},[e("div",{staticClass:"h-32 w-32 -mt-16 flex-none p-1 bg-primary rounded-full"},[e("div",{staticClass:"placeholder-item rounded-full w-full h-full"})]),t._v(" "),e("div",{staticClass:"flex mt-3 w-full flex-row-reverse overflow-hidden"},[e("div",{staticClass:"ml-2.5",staticStyle:{"flex-grow":"0.75"}},[e("div",{staticClass:"placeholder-item rounded-full",staticStyle:{height:"44px",display:"flex",width:"100%","padding-left":"1rem","padding-right":"1rem",margin:"0"}})]),t._v(" "),e("div",{staticClass:"ml-2.5 placeholder-item rounded-full",staticStyle:{height:"44px",width:"44px"}}),t._v(" "),e("div",{staticClass:"placeholder-item rounded-full",staticStyle:{height:"44px",width:"44px"}})])]),t._v(" "),e("div",{staticClass:"flex flex-wrap items-baseline mt-2 mb-1"},[e("div",{staticClass:"placeholder-container placeholder-item mr-3",staticStyle:{width:"170px",height:"33px"}}),t._v(" "),e("div",{staticClass:"flex placeholder-container placeholder-item",staticStyle:{width:"90px",height:"19px"}})]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"placeholder-container placeholder-item",staticStyle:{width:"80px",height:"18px","margin-top":"4px"}}),t._v(" "),e("div",{staticClass:"ml-2 placeholder-container placeholder-item",staticStyle:{width:"60px",height:"18px","margin-top":"4px"}})]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"placeholder-container placeholder-item",staticStyle:{width:"180px",height:"18px","margin-top":"6px"}}),t._v(" "),e("div",{staticClass:"ml-2 placeholder-container placeholder-item",staticStyle:{width:"160px",height:"18px","margin-top":"6px"}})]),t._v(" "),e("div",{staticClass:"mt-2 w-full placeholder-container placeholder-item",staticStyle:{height:"18px","margin-top":"16px"}})])]),t._v(" "),e("div",[e("div",{staticClass:"w-11/12 mx-auto max-w-screen-md rounded-full placeholder-item",staticStyle:{height:"44px","margin-top":"26px"}})])])}],!1,null,null,null);e.default=r.exports},1248:function(t,e,s){"use strict";s.r(e);var i=s(129),r=s.n(i),a={data:computed:{displayName(){return this.profile?r()(this.profile.displayName,{length:15}):null},expirationDate,methods:{open(t,e){this.loading=!1,this.profile=t,this.subscription=e,this.$refs.modal.open()},closesetLoading},n=s(0),o=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("sx-modal",{ref:"modal"},[e("sx-modal-card",{attrs:{title:t.$t("unsubscribe_modal.title",[t.displayName])}},[e("div",{staticClass:"text-xs text-center",domProps:{innerHTML:t._s(t.$t("unsubscribe_modal.description",[t.expirationDate]))}}),t._v(" "),e("div",{staticClass:"mt-5 items-center flex flex-col justify-center"},[e("sx-button",{attrs:{"data-cy-id":"Unsubscribe-button",color:"c-primary",size:"R",loading:t.loading},on:{click:},[t._v("\n        "+t._s(t.$t("unsubscribe_modal.ok_btn"))+"\n      ")])],1)])],1)}),[],!1,null,null,null);e.default=o.exports},1301:function(t,e,s){var i=s(1514);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(8).default)("44fc73c0",i,!0,{sourceMap:!1})},1302:1513:function(t,e,s){"use strict";s(1301)},1514:function(t,e,s){var i=s(7)((function(t){return t[1]}));i.push([t.i,"/*purgecss start ignore*/\n.displayname{\n  height:41px\n}\n.username{\n  height:22px\n}\n.follow-button-placeholder{\n  height:38px\n}\n.placeholder-item.rounded-full{\n  border-radius:9999px\n}\n.description-string{\n  height:24px\n}\n\n/*purgecss end ignore*/",""]),i.locals={},t.exports=i},1515:1516:1783:function(t,e,s){"use strict";s.r(e);var i=s(1248),r=s(1784),a={components:{UnsubscribeModal:i.default,SubscribeControls:r.default},props:{user:{type:Object,required:!0},product:{type:Object,default:()=>null},subscription:{type:Object,default:()=>null}},methods:{async unsubscribe(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?(this.$emit("unsubscribe"),this.$refs.unsubscribeModal.close()):this.$refs.unsubscribeModal.open(this.user.profile,this.subscription)}}},n=a,o=s(0),l=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("subscribe-controls",{staticClass:"w-11/12 mx-auto max-w-screen-md",attrs:{subscription:t.subscription,product:t.product},on:{subscribe:function(e){return t.$emit("subscribe",e)},resubscribe:unsubscribe:t.unsubscribe}}),t._v(" "),t.subscription?e("unsubscribe-modal",{ref:"unsubscribeModal",on:{"on-confirm":}):t._e()],1)}),[],!1,null,null,null);e.default=l.exports},1784:function(t,e,s){"use strict";s.r(e);var i=s(62),r={props:{subscription:{type:Object,default:()=>null},product:{type:Object,default:},computed:{price(){return Object(i.a)(this.product.price,{removeTrailingZeroes:!0})},subscribedunsubscribeActiveunsubscribeText(){return this.$t("subscribe_controls.subscribed_label")},resubscribeTextresubscribeHelperText(){const t=this.$formatDate(this.subscription.expirationDate);return this.$t("subscribe_controls.expires_label",[t])},subscribeText(){return this.$t("subscribe_controls.price_month_label",[this.price])}}},a=s(0),n=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.subscribed?[t.unsubscribeActive?e("sx-button",{attrs:{"data-cy-id":"unsubscribe-button",color:"neutral",block:"",size:"R"},on:{click:function(e){return t.$emit("unsubscribe")}}},[e("span",{staticClass:"font-medium text-md"},[t._v("\n        "+t._s(t.unsubscribeText)+"\n      ")])]):t.product?[e("sx-button",{attrs:{"data-cy-id":"resubscribe-button",block:"",size:"R",color:"c-secondary"},on:{click:function(e){return t.$emit("resubscribe")}}},[e("span",{staticClass:"font-medium text-md"},[t._v("\n          "+t._s(t.resubscribeText)+"\n        ")])]),t._v(" "),e("div",{staticClass:"text-center text-secondary text-base mt-2"},[t._v("\n        "+t._s(t.resubscribeHelperText)+"\n      ")])]:t._e()]:t.product?e("sx-button",{attrs:{"data-cy-id":"subscribe-button",block:"",size:"R",color:"c-secondary"},on:{click:},[e("span",{staticClass:"font-medium text-md"},[t._v("\n      "+t._s(t.subscribeText)+"\n    ")])]):t._e()],2)}),[],!1,null,null,null);e.default=n.exports}}]);