(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1342:function(e,t,a){"use strict";a.r(t);var s=a(5),l=a(567),r=a(548),i=a(842),u=a(815),n=a(841),c=Object(s.defineComponent)({__name:"step-essentials-summary",setup(e){const t=Object(l.j)(),a=Object(l.e)(),c=Object(l.k)(),o=Object(s.computed)((()=>Object(r.a)(parseFloat(t.value.price),{includeCurrency:!0}))),m=Object(s.computed)((()=>Object(r.a)(parseFloat(t.value.nextBestPrice),{includeCurrency:!0}))),p=Object(s.computed)((()=>t.value.freeShipping?"Livraison gratuite":Object(r.a)(parseFloat(t.value.shippingPrice),{includeCurrency:!0}))),d=Object(s.computed)((()=>{var e,a;return t.value.isLocal?null:null===(e=t.value)||void 0===e||null===(a=e.dispatchedFrom)||void 0===a?void 0:a.name}));return{__sfc:!0,summaryFieldClass:"width--all-6 width--fromW3-4 space--mb-4",thread:t,features:a,locationLabel:c,price:o,nextBestPrice:m,shippingPrice:p,shippingFrom:d,SummaryField:i.a,SummarySection:u.a,SummaryBaseValue:n.a}}}),o=a(45),m=Object(o.a)(c,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(a.SummarySection,{on:{edit:function(t){return e.$emit("edit")}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s("Essentiel"))]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"space--mb-5"},[t("div",{staticClass:"text--b space--mb-2"},[e._v(e._s("Titre"))]),t("div",{staticClass:"overflow--wrap-break text--lh-1-5"},[e._v(e._s(a.thread.title))])]),t("div",{staticClass:"flex flex--wrap"},[a.features.price?t(a.SummaryField,{class:a.summaryFieldClass,attrs:{label:"Prix"}},[t(a.SummaryBaseValue,{attrs:{value:a.price}})],1):e._e(),a.features.nextBestPrice?t(a.SummaryField,{class:a.summaryFieldClass,attrs:{label:"Prix généralement constaté"}},[t(a.SummaryBaseValue,{attrs:{value:a.nextBestPrice}})],1):e._e(),a.features.shippingPrice?t(a.SummaryField,{class:a.summaryFieldClass,attrs:{label:"Frais de port"}},[t(a.SummaryBaseValue,{attrs:{value:a.shippingPrice}})],1):e._e()],1),t("div",{staticClass:"flex flex--wrap"},[a.features.dispatchedFrom?t(a.SummaryField,{class:a.summaryFieldClass,attrs:{label:"Pays d'expédition"}},[t(a.SummaryBaseValue,{attrs:{value:a.shippingFrom}})],1):e._e(),a.features.locations?t(a.SummaryField,{class:a.summaryFieldClass,attrs:{label:"Disponibilité"}},[t(a.SummaryBaseValue,{attrs:{value:a.locationLabel}})],1):e._e()],1),a.features.voucherCode?t(a.SummaryField,{class:a.summaryFieldClass,attrs:{label:"Code promo"}},[t(a.SummaryBaseValue,{attrs:{value:a.thread.voucherCode}})],1):e._e()]},proxy:!0}])})}),[],!1,null,null,null);t.default=m.exports},815:function(e,t,a){"use strict";var s=a(5),l=a(510),r=Object(s.defineComponent)({__name:"summary-section",s.a})}),i=a(45),u=Object(i.a)(r,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",[t("div",{staticClass:"space--mb-4"},[t("h2",{staticClass:"text--b size--all-xxl"},[e._t("title")],2)]),t("div",[e._t("content")],2),t("div",{staticClass:"space--mt-4"},[t(a.BaseButton,{attrs:{mode:"default",size:"s",variant:"secondary"},on:{ct")}}},[e._v(" "+e._s("Modifier")+" ")])],1)])}),[],!1,null,null,null);t.a=u.exports},841:function(e,t,a){"use strict";var s=a(5),l=Object(s.defineComponent)({__name:"summary-base-value",props:{value:null},setup:e=>({__sfc:!0})}),r=a(45),i=Object(r.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"overflow--wrap-break text--lh-1-5",class:!e.value&&"text--color-greyTint"},[e._v(e._s(e.value||"-"))])}),[],!1,null,null,null);t.a=i.exports},842:function(e,t,a){"use strict";var s=a(5),l=Object(s.defineComponent)({__name:"summary-field",props:{label:null},s!0})}),r=a(45),i=Object(r.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e.label?t("div",{staticClass:"text--b space--mb-2"},[e._v(e._s(e.label))]):[e._t("label")],e._t("default")],2)}),[],!1,null,null,null);t.a=i.exports}}]);