(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1012:function(e,t,r){"use strict";(function(e){var s=r(5),a=r(1200);t.a=Object(s.defineComponent)({__name:"expiry-banners",props:{banners:{type:Object,required:!0}},setup(t){const r=t,n=Object(s.computed)((()=>{const{alert:t,comments:s,group:a,highlights:n}=r.banners,i=t.suggestedKeyword?e("Creëer DealAlert voor :keyword",{replaces:{keyword:t.suggestedKeyword}}):"Creëer DealAlert",c=(t.suggestedKeyword,"Creëer een DealAlert en ontvang notificaties voor soortgelijke deals");return[a?Object.assign({type:"group",icon:"folder",title:e("Meer van :group",{replaces:{group:a.group}}),description:e("Vind meer deals in :group",{replaces:{group:a.group}})},a):Object.assign({type:"comments",icon:"comments-alternate",title:e(":count reacties",{replaces:{count:s.count}})},s),Object.assign({type:"highlights",icon:"group-default",title:"Bekijk alle deals",description:"Ontdek meer deals op onze homepage"},n),Object.assign({needsLogin:!0,type:"alert",icon:"bell",title:i,description:c},t)]}));return{__sfc:!0,props:r,cards:n,ExpiryBannerItem:a.a}}})}).call(this,r(70).translation)},1200:function(e,t,r){"use strict";var s=r(5),a=r(103),n=r(507),i=r(150),c=Object(s.defineComponent)({__name:"expiry-banner-item",props:{card:{type:Object,required:!0}},setup(e){const t=e,{isLoggedIn:r}=Object(i.a)(),c=Object(s.computed)((()=>t.card.needsLogin&&!r.value));return{__sfc:!0,props:t,isLoggedIn:r,isButton:c,onClick:function(){c.value&&Object(a.b)({login:{source:"keyword_alarm",keyword:t.card.suggestedKeyword},intents:null}).catcll))},BaseButton:n.a}}}),o=r(45),l=Object(o.a)(c,(function(){var e=this,t=e._self._c,r=e._self._setupProxy;return t(r.BaseButton,{staticClass:"flex",attrs:{href:!r.isButton&&e.card.url},on:{click:r.onClick}},[t("div",{staticClass:"img--square-m img--type-entity text--color-white bg--color-brandPrimary flex--inline boxAlign-jc--all-c boxAlign-ai--all-c flex--shrink-0"},[t("BaseIcon",{attrs:{name:e.card.icon}})],1),t("div",{staticClass:"space--l-2"},[t("h4",{staticClass:"text--b text--color-brandPrimary space--t-1 space--b-2"},[e._v(e._s(e.card.title))]),t("p",{staticClass:"size--all-s text--color-charcoalTint"},[e._v(e._s(e.card.description))])])])}),[],!1,null,null,null);t.a=l.exports},1362:function(e,t,r){"use strict";r.r(t);var s=r(1012).a,a=r(45),n=Object(a.a)(s,(function(){var e=this,t=e._self._c,r=e._self._setupProxy;return t("div",{staticClass:"threadItem-content threadItem-content--space"},[t("div",{directives:[{name:"track",rawName:"v-track:expiredBanner.view",arg:"expiredBanner",modifiers:{view:!0}}],staticClass:"border border--color-borderGrey bRad--a space--v-4"},[t("h3",{staticClass:"size--all-l space--h-4"},[e._v(e._s("Deze aanbieding is verlopen. Hier zijn wat interessante opties voor je:"))]),t("div",{staticClass:"flex--fromW3"},e._l(r.cards,(function(e,s){return t(r.ExpiryBannerItem,{directives:[{name:"track",rawName:"v-track:[`${card.type}ExpiredCard`].click",value:{pos:s},expression:"{ pos: index }",arg:`${e.type}ExpiredCard`,modifiers:{click:!0}}],key:s,staticClass:"flex--1 space--h-4 space--t-4",attrs:{card:e}})})),1)])])}),[],!1,null,null,null);t.default=n.exports}}]);