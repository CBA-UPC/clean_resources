(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1347:function(e,t,a){"use strict";a.r(t);var s=a(5),l=a(548),n=a(567),u=a(842),i=a(815),c=a(841),r=a(17),o=Object(s.defineComponent)({__name:"step-essentials-summary",setup(e){const t=Object(n.j)(),a=Object(n.e)(),o=Object(n.k)(),_=Object(s.computed)((()=>t.value.discountType===r.b?"Livraison gratuite":"Réduction")),p=Object(s.computed)((()=>t.value.discountType===r.b?"Oui":t.value.price?Object(l.a)(parseFloat(t.value.price),{includeCurrency:!0}):t.value.percentage?"".concat(t.value.percentage,"%"):null));return{__sfc:!0,thread:t,features:a,locationLabel:o,discountFieldLabel:_,discountFieldValue:p,SummaryField:u.a,SummarySection:i.a,SummaryBaseValue:c.a}}}),_=a(45),p=Object(_.a)(o,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(a.SummarySection,{on:{edit:function(t){return e.$emit("edit")}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s("Essentiel"))]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"space--mb-4"},[t("div",{staticClass:"text--b space--mb-2"},[e._v(e._s("Titre"))]),t("div",{staticClass:"overflow--wrap-break text--lh-1-5"},[e._v(e._s(a.thread.title))])]),a.features.discount?t(a.SummaryField,{staticClass:"space--mb-4",attrs:{label:a.discountFieldLabel}},[t(a.SummaryBaseValue,{attrs:{value:a.discountFieldValue}})],1):e._e(),a.features.locations?t(a.SummaryField,{staticClass:"space--mb-4",attrs:{label:"Disponibilité"}},[t(a.SummaryBaseValue,{attrs:{value:a.locationLabel}})],1):e._e()]},proxy:!0}])})}),[],!1,null,null,null);t.default=p.exports},815:function(e,t,a){"use strict";var s=a(5),l=a(510),n=Object(s.defineComponent)({__name:"summary-section",setu)}),u=a(45),i=Object(u.a)(n,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",[t("div",{staticClass:"space--mb-4"},[t("h2",{staticClass:"text--b size--all-xxl"},[e._t("title")],2)]),t("div",[e._t("content")],2),t("div",{staticClass:"space--mt-4"},[t(a.BaseButton,{attrs:{mode:"default",size:"s",variant:"secondary"},on:{clic}}},[e._v(" "+e._s("Modifier")+" ")])],1)])}),[],!1,null,null,null);t.a=i.exports},841:function(e,t,a){"use strict";var s=a(5),l=Object(s.defineComponent)({__name:"summary-base-value",props:{value:null},setup:e=>({__sfc:!0})}),n=a(45),u=Object(n.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"overflow--wrap-break text--lh-1-5",class:!e.value&&"text--color-greyTint"},[e._v(e._s(e.value||"-"))])}),[],!1,null,null,null);t.a=u.exports},842:function(e,t,a){"use strict";var s=a(5),l=Object(s.defineComponent)({__name:"summary-field",props:{label:null},setu)}),n=a(45),u=Object(n.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e.label?t("div",{staticClass:"text--b space--mb-2"},[e._v(e._s(e.label))]):[e._t("label")],e._t("default")],2)}),[],!1,null,null,null);t.a=u.exports}}]);