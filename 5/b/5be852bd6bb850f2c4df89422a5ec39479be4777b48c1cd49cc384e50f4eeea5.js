(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1099:1186:1187:1270:function(t,e,a){"use strict";a.r(e);var s=a(599),i=a(819),r=a(508),n={components:{BaseBadge:i.a,BaseButton:r.a,Badge:i.a,GuardedLink:s.a},props:{link:{type:Object,required:!0},icons:{type:Array,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},guards:{type:Object,required:!0},track:{type:Object,required:!0},isAdminOnly:{type:Boolean,default:!1},chip:{type:String,default:""}},computed:{guard(){const{source:t,type:e}=this.guards;return{login:{source:t,trackAction:this.track.action,thread_type_translation:e}}}}},o=(a(1186),a(45)),c=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("GuardedLink",{staticClass:"threadTypeSelection-card flex boxAlign-ai--all-c bg--hover-greyPanel border border--color-greyBackground bRad--a-l space--v-4 space--h-3",class:{"threadTypeSelection-card--new":t.chip},attrs:{to:t.link,guard:t.guard}},[e("div",{staticClass:"aGrid threadTypeSelection-card-icon flex--shrink-0 space--mr-3"},[t._l(t.icons,(function(a,s){return e("img",{key:s,staticClass:"imgFrame-img will-transform",class:a.class,attrs:{src:a.path,alt:t.title}})})),t.isAdminOnly?e("Badge",{staticClass:"threadTypeSelection-card-badge aGrid-item textBadge--white border border--color-greyBackground text--color-brandPrimary textBadge--primaryPale"},[t._v(" Admin ")]):t._e()],2),e("div",[e("div",{staticClass:"flex boxAlign-ai--all-c boxAlign-jc--all-sb space--b-1"},[e("h2",{staticClass:"text--b size--all-xl space--mr-2"},[t._v(t._s(t.title))]),t.chip?e("BaseBadge",{staticClass:"text--color-brandPrimary textBadge--primaryPale text--normal space--mr-a"},[t._v(t._s(t.chip))]):t._e(),t.$breakpoint.mdAndUp?e("BaseButton",{staticClass:"space--ml-2",attrs:{variant:"primary",mode:"brand",square:""}},[e("BaseIcon",{attrs:{name:"right"}})],1):t._e()],1),e("span",{staticClass:"size--all-s size--fromW3-m text--color-greyShade"},[t._v(" "+t._s(t.description)+" ")])])])}),[],!1,null,null,null).exports,l=a(91),d=a(51),p=a(1187),u=a.n(p),h=a(17),f=a(100),m={components:{ThreadTypeCard:c},computed:Object.assign({},Object(l.e)("features",{navigation:t=>{var e,a;return(null===(e=t.flags)||void 0===e||null===(a=e.navigation)||void 0===a?void 0:a.submissions)||{}}}),{threadTypeList(){var t,e,a,s,i;const r=[];return null!==(t=this.navigation)&&void 0!==t&&t.deal&&r.push(this.link(h.a,d.d,[{path:"/assets/img/thread-type-selection/deal-part1_d04c2.svg"},{path:"/assets/img/thread-type-selection/deal-part2_b4261.svg",class:"animation--upDownSmooth1 space--mt-1"}],{title:"Deal",descr:"Post specific products on sale, like a TV or a pair of trainers, with or without a coupon."},"")),null!==(e=this.navigation)&&void 0!==e&&e.voucher&&r.push(this.link(h.o,d.l,[{path:"/assets/img/thread-type-selection/voucher-part1_710e7.svg"},{path:"/assets/img/thread-type-selection/voucher-part2_6ac93.svg",class:"animation--scissorsP1"},{path:"/assets/img/thread-type-selection/voucher-part3_1bb21.svg",class:"animation--scissorsP2"}],{title:"Voucher",descr:"Post coupons and vouchers that give discounts on product lines, stores, or events."},"")),null!==(a=this.navigation)&&void 0!==a&&a.discussion&&r.push(this.link(h.e,d.f,[{path:"/assets/img/thread-type-selection/discussion-part1_decdd.svg"},{path:"/assets/img/thread-type-selection/discussion-part2_df4c2.svg",class:"animation--upDownSmooth1 space--mt-n2"},{path:"/assets/img/thread-type-selection/discussion-part3_2f938.svg",class:"animation--upDownSmooth2 space--mt-n2"}],{title:"Discussion",descr:"Start a discussion to get tips or advice from a community of thousands of deals experts."},"")),null!==(s=this.navigation)&&void 0!==s&&s.merchantGenericOffer&&r.push(this.link(h.g,d.j,[{path:"/assets/img/thread-type-selection/merchant-part1_abc65.svg"},{path:"/assets/img/thread-type-selection/merchant-part2_80ba3.svg",class:"animation--upDownSmooth1"}],{title:"Merchant-only offer",descr:"Post merchant-only offers with specific conditions or low and long-term discounts."},"")),null!==(i=this.navigation)&&void 0!==i&&i.referralCampaign&&r.push(this.link(h.h,d.n,[{path:"/assets/img/thread-type-selection/megaphone-part1_34d47.svg"},{path:"/assets/img/thread-type-selection/megaphone-part2_2b237.svg",class:"animation--megaphoneP2"},{path:"/assets/img/thread-type-selection/megaphone-part3_31002.svg",class:"animation--megaphoneP3"},{path:"/assets/img/thread-type-selection/megaphone-part4_6dec4.svg",class:"animation--megaphoneP4"}],{title:"Referral offer",descr:"Post your referral code or link so that both you and the community can benefit."},"","New")),r}}),methods:{link(t,e,a,s,i,r){const n=u()(t);return{to:Object(f.j)(h.m[t],{query:{thread_created_location:"thread_type_selection"}}),text:s,icons:a,track:{name:"add".concat(t),action:"goto_".concat(n,"_add_form")},guard:{source:"new_".concat(n),type:e},ceptClass:i,chip:r}}}},g=Object(o.a)(m,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"threadTypeSelection threadSubmission--wrapper bg--main"},[e("div",{staticClass:"flex flex--dir-col boxAlign-ai--all-c width--all-12 width--fromW4-6 space--v-4 space--h-3 space--fromW4-t-4 space--mh-a"},[e("h1",{staticClass:"size--all-xxl size--fromW4-xxxl text--b space--mt-0 space--fromW4-mt-2"},[t._v(" "+t._s("What do you want to post?")+" ")]),e("TransitionGroup",{staticClass:"threadTypeSelection-container flex flex--dir-col boxAlign-ai--all-c space--mt-4",style:{"--total":t.threadTypeList.length},attrs:{tag:"div",name:"slide-in",appear:""}},t._l(t.threadTypeList,(function(t,a){return e("ThreadTypeCard",{directives:[{name:"track",rawName:"v-track:addThread.click.click-ga",value:{type:t.track.name},expression:"{ type: threadType.track.name }",arg:"addThread",modifiers:{click:!0,"click-ga":!0}}],key:t.guard.type,staticClass:"space--mb-2",class:t.ceptClass,style:{"--i":a+1},attrs:{link:t.to,icons:t.icons,title:t.text.title,description:t.text.descr,guards:t.guard,track:t.track,"is-admin-only":"new_merchantGenericOffer"===t.guard.source,chip:t.chip}})})),1)],1)])}),[],!1,null,null,null);e.default=g.exports},635:663:713:714:724:879:880:]);