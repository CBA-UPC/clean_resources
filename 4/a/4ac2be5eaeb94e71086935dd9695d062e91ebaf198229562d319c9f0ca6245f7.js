(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{1275:function(e,r,a){"use strict";a.r(r);var t=a(943),i={props:{layout:{type:String,default:"list"}},computed:{containerClassList(){return{"flex--fromW2":"list"===this.layout,flex:"card"===this.layout}},labelClasses},s=a(45),l=Object(s.a)(i,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"width--all-12 boxAlign-ai--all-c flex--dir-row-reverse space--b-2",class:e.containerClassList},[r("div",{class:e.labelClasses},[e._t("label")],2),"list"===e.layout?r("div",{staticClass:"width--fromW2-6 space--fromW2-r-1 space--t-1 space--fromW2-t-0"},[e._t("button")],2):e._e()])}),[],!1,null,null,null).exports,o=a(1106),d=a(1107),n=a(1108),h=a(977),u=a(978),c=a(1115),p=a(1109),f=a(979),y=a(974),v=a(914),b={components:{ThreadPreviewMerchantLabel:a(1110).a,ThreadDescription:v.a,ThreadPreviewVoucherCode:l,ThreadPreviewVoucherCodeLabel:o.a,ThreadPreviewVoucherCodeButton:d.a,ThreadPreviewVoteControl:n.a,ThreadPreviewImage:h.a,ThreadPreviewTitle:u.a,ThreadPreviewPriceLabel:c.a,ThreadPreviewShippingLabel:p.a,ThreadPreviewAuthor:f.a,ThreadExclusiveBadge:y.a},mixins:[t.b,t.d,t.a,t.c,t.f]},w=Object(s.a)(b,(function(){var e=this,r=e._self._c;return r(e.layoutType,{tag:"Component",attrs:{"thread-type":e.thread.type},scopedSlots:e._u([{key:"header",fn:proxy:!0},{key:"image",fn:function(){return[r("ThreadPreviewImage",{attrs:{value:e.image,placeholder:"/assets/img/default-deal_d0fc9.svg",obfuscated:e.thread.nsfw,layout:e.layout,disabled:e.disabled,features:e.features}})]},proxy:!0},{key:"title",fn:function(){return[r("ThreadPreviewTitle",{attrs:{value:e.thread.title,layout:e.layout,placeholder:e.i18n.titlePlaceholder}},[e.thread.isExclusive?[r("ThreadExclusiveBadge",{staticClass:"space--mr-2",attrs:{expired:e.thread.isExpired}})]:e._e()],2)]},proxy:!0},{key:"labels",fn:function(){return[r("ThreadPreviewPriceLabel",{attrs:{thread:e.thread,layout:e.layout,disabled:e.disabled}}),e.features.shipping?r("ThreadPreviewShippingLabel",{attrs:{value:e.thread.shippingPrice,"is-free":e.thread.freeShipping}}):e._e(),e.hasMerchant?[e.thread.price>0||e.thread.percentage>0||e.thread.shippingPrice||e.thread.freeShipping?r("div",{staticClass:"thread-divider"}):e._e(),r("ThreadPreviewMerchantLabel",{attrs:{merchant:e.thread.merchant,disabled:e.disabled}})]:e._e()]},proxy:!0},{key:"body",fn:function(){return[e.hasVoucher?r("ThreadPreviewVoucherCode",{attrs:{layout:e.layout},scopedSlots:e._u([{key:"label",fn:function(){return[r("ThreadPreviewVoucherCodeLabel",{attrs:{value:e.thread.voucherCode,disabled:e.disabled}})]},proxy:!0},{key:"button",fn:function(){return[r("ThreadPreviewVoucherCodeButton",{attrs:{"thread-type":e.thread.type,disabled:e.disabled,responsive:""}})]},proxy:!0}],null,!1,2338081078)}):e._e(),e.showDescription?r("ThreadDescription",{attrs:{value:e.thread.description||e.i18n.descriptionPlaceholder,modifier:"size--all-s size--fromW4-m overflow--clamp-s-2 overflow--fromW4-clamp-m-2","max-length":160}}):e._e()]},proxy:!0},{key:"author",fn:function(){return[r("ThreadPreviewAuthor",{attrs:{user:e.thread.user||e.currentUser,"best-badge":e.features.showUserBestBadge}})]},proxy:!0},{key:"primary-action",fn:function(){return[e.voucherButtonIsPrimary?r("ThreadPreviewVoucherCodeButton",{attrs:{"thread-type":e.thread.type,disabled:e.disabled,responsive:""}}):e._e()]},proxy:!0}])})}),[],!1,null,null,null);r.default=w.exports}}]);