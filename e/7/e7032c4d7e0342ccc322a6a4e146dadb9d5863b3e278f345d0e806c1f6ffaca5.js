(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1341:function(e,a,t){"use strict";t.r(a);var s=t(5),l=t(568),r=t(549),u=t(841),i=t(814),n=t(840),c=Object(s.defineComponent)({__name:"step-essentials-summary",setup(e){const a=Object(l.j)(),t=Object(l.e)(),c=Object(l.k)(),o=Object(s.computed)((()=>Object(r.a)(parseFloat(a.value.price),{includeCurrency:!0}))),m=Object(s.computed)((()=>Object(r.a)(parseFloat(a.value.nextBestPrice),{includeCurrency:!0}))),d=Object(s.computed)((()=>a.value.freeShipping?"Darmowa dostawa":Object(r.a)(parseFloat(a.value.shippingPrice),{includeCurrency:!0}))),p=Object(s.computed)((()=>{var e,t;return a.value.isLocal?null:null===(e=a.value)||void 0===e||null===(t=e.dispatchedFrom)||void 0===t?void 0:t.name}));return{__sfc:!0,summaryFieldClass:"width--all-6 width--fromW3-4 space--mb-4",thread:a,features:t,locationLabel:c,price:o,nextBestPrice:m,shippingPrice:d,shippingFrom:p,SummaryField:u.a,SummarySection:i.a,SummaryBaseValue:n.a}}}),o=t(45),m=Object(o.a)(c,(function(){var e=this,a=e._self._c,t=e._self._setupProxy;return a(t.SummarySection,{on:{edit:function(a){return e.$emit("edit")}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s("Niezbędne informacje"))]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"space--mb-5"},[a("div",{staticClass:"text--b space--mb-2"},[e._v(e._s("Tytuł"))]),a("div",{staticClass:"overflow--wrap-break text--lh-1-5"},[e._v(e._s(t.thread.title))])]),a("div",{staticClass:"flex flex--wrap"},[t.features.price?a(t.SummaryField,{class:t.summaryFieldClass,attrs:{label:"Cena"}},[a(t.SummaryBaseValue,{attrs:{value:t.price}})],1):e._e(),t.features.nextBestPrice?a(t.SummaryField,{class:t.summaryFieldClass,attrs:{label:"Kolejna najlepsza cena"}},[a(t.SummaryBaseValue,{attrs:{value:t.nextBestPrice}})],1):e._e(),t.features.shippingPrice?a(t.SummaryField,{class:t.summaryFieldClass,attrs:{label:"Koszt dostawy"}},[a(t.SummaryBaseValue,{attrs:{value:t.shippingPrice}})],1):e._e()],1),a("div",{staticClass:"flex flex--wrap"},[t.features.dispatchedFrom?a(t.SummaryField,{class:t.summaryFieldClass,attrs:{label:"Wysyłka z:"}},[a(t.SummaryBaseValue,{attrs:{value:t.shippingFrom}})],1):e._e(),t.features.locations?a(t.SummaryField,{class:t.summaryFieldClass,attrs:{label:"Dostępność"}},[a(t.SummaryBaseValue,{attrs:{value:t.locationLabel}})],1):e._e()],1),t.features.voucherCode?a(t.SummaryField,{class:t.summaryFieldClass,attrs:{label:"Kod rabatowy"}},[a(t.SummaryBaseValue,{attrs:{value:t.thread.voucherCode}})],1):e._e()]},proxy:!0}])})}),[],!1,null,null,null);a.default=m.exports},814:function(e,a,t){"use strict";var s=t(5),l=t(511),r=Object(s.defineComponent)({__name:"summary-section",l.a})}),u=t(45),i=Object(u.a)(r,(function(){var e=this,a=e._self._c,t=e._self._setupProxy;return a("div",[a("div",{staticClass:"space--mb-4"},[a("h2",{staticClass:"text--b size--all-xxl"},[e._t("title")],2)]),a("div",[e._t("content")],2),a("div",{staticClass:"space--mt-4"},[a(t.BaseButton,{attrs:{mode:"default",size:"s",variant:"secondary"},on:{it")}}},[e._v(" "+e._s("Edytuj")+" ")])],1)])}),[],!1,null,null,null);a.a=i.exports},840:function(e,a,t){"use strict";var s=t(5),l=Object(s.defineComponent)({__name:"summary-base-value",props:{value:null},setup:e=>({__sfc:!0})}),r=t(45),u=Object(r.a)(l,(function(){var e=this,a=e._self._c;e._self._setupProxy;return a("div",{staticClass:"overflow--wrap-break text--lh-1-5",class:!e.value&&"text--color-greyTint"},[e._v(e._s(e.value||"-"))])}),[],!1,null,null,null);a.a=u.exports},841:function(e,a,t){"use strict";var s=t(5),l=Object(s.defineComponent)({__name:"summary-field",props:{label:null},:!0})}),r=t(45),u=Object(r.a)(l,(function(){var e=this,a=e._self._c;e._self._setupProxy;return a("div",[e.label?a("div",{staticClass:"text--b space--mb-2"},[e._v(e._s(e.label))]):[e._t("label")],e._t("default")],2)}),[],!1,null,null,null);a.a=u.exports}}]);