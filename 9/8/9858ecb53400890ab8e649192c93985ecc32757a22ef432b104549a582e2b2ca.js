(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1349:function(e,r,t){"use strict";t.r(r);var a=t(730),o=t(731),i=t(1123),n=t(1116),u=t(568),l={__name:"step-image-gallery",setup:e=>({__sfc:!0,thread:Object(u.j)(),FormWizardStepBase:a.a,FormWizardStepTitle:o.a,FormWizardStepSubtitle:i.a,FormWizardImageGalleryForm:n.a})},s=t(45),d=Object(s.a)(l,(function(){var e=this,r=e._self._c,t=e._self._setupProxy;return r(t.FormWizardStepBase,{scopedSlots:e._u([{key:"title",fn:function(){return[r(t.FormWizardStepTitle,[e._v(" "+e._s("Make your deal stand out with images")+" ")])]},proxy:!0},{key:"sub-title",fn:function(){return[r(t.FormWizardStepSubtitle,[e._v(" "+e._s("Upload up to 8 images to publish your deal. You can drag and drop to reorder them and pick the cover image.")+" ")])]},proxy:!0},{key:"form",fn:function(){return[r(t.FormWizardImageGalleryForm,{attrs:{thread:t.thread}})]},proxy:!0}])})}),[],!1,null,null,null);r.default=d.exports}}]);,p=n(44),m=Object(p.a)(d,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return e.disableNextButton&&n.isFirstStep?e._e():t("div",{directives:[{name:"track",rawName:"v-track:submissionNavigation",value:n.navigationTrackingInfo,expression:"navigationTrackingInfo",arg:"submissionNavigation"}],staticClass:"width--all-12 zIndex--above aGrid--sticky aGrid-item--b-0 bg--color-white flex space--v-4 space--h-4 border--t border--color-greyTint",class:!e.disableNextButton&&n.isFirstStep?"boxAlign-jc--all-fe":"boxAlign-jc--all-sb"},[n.isFirstStep?e._e():t("span",[t(n.BaseButton,{directives:[{name:"track",rawName:"v-track:navPrev.click",arg:"navPrev",modifiers:{click:!0}}],attrs:{variant:"secondary",mode:"default",disabled:n.isDisabled},on:{click:function(t){return e.$emit("prev",t)}}},[e._t("prev-label",(function(){return[e._v(e._s("Zurück"))]}))],2)],1),t("div",{staticClass:"flex boxAlign-as--all-c"},[!e.disableNextButton&&n.isLastStep?t("span",[t(n.BaseButton,{directives:[{name:"track",rawName:"v-track:reviewInfo.click",arg:"reviewInfo",modifiers:{click:!0}}],staticClass:"space--mr-2",attrs:{variant:"secondary",mode:"default",disabled:n.isDisabled},on:{click:function(t){return e.$emit("review")}}},[e._t("review-label",(function(){return[e._v(e._s("Infos überprüfen"))]}))],2)],1):e._e(),!e.disableNextButton||n.isLastStep?t("span",[t(n.BaseButton,{directives:[{name:"track",rawName:"v-track:navNext.click",arg:"navNext",modifiers:{click:!0}}],class:n.nextButton.class,attrs:{variant:"primary",mode:"brand",disabled:n.isDisabled},on:{click:function(t){return e.$emit("next",t)}}},[e._t("next-label",(function(){return[e._v(e._s(n.nextButton.label))]})),t("BaseIcon",{class:n.nextButton.iconClass,attrs:{name:n.nextButton.iconName}})],2)],1):e._e()])])}),[],!1,null,null,null).exports,h=n(971),g=n(589),f=n(1020);var b=n(944),v=n(564),O=n(908),j=n(945),y=n(1);var w=n(1121),S=Object(r.defineComponent)({__name:"form-wizard-deal-referral-code",setup(e){const t=Object(r.ref)(!0),c=Object(r.ref)(null),l=Object(r.ref)(!1),u=Object(r.computed)((()=>a.a.state.threadForm.thread)),d=e=>a.a.dispatch("threadForm/setAllSetType",e),p=Object(g.a)({}),S=function(){const e=[Object(f.a)({name:"merchant",icon:"merchant",headline:"Händler",component:()=>n.e(117).then(n.bind(null,1283))}),Object(f.a)({name:"campaign",icon:"tag",headline:"Angebot",component:()=>n.e(53).then(n.bind(null,1284))}),Object(f.a)({name:"details",icon:"verified",headline:"Letzte Details",component:()=>n.e(73).then(n.bind(null,1285))})];return Object(r.ref)(e)}(),{currentStep:k,currentStepIndex:x,goToNextStep:I,goToPrevStep:F,selectStepByIndex:D}=Object(w.a)(S.value),_=Object(r.computed)((()=>0===x.value)),C=Object(r.computed)((()=>S.value.length===x.value+1));function B(e){x.value<e||S.value.slice(e).forEach((e=>{e.visitedCount=0}))}function A(){l.value=!l.value}async function N(){const{campaign:e,code:n,link:r}=u.value,{validateStep:a}=function(e,t){const n={[j.a.LINK]:[Object(v.n)(!1),Object(v.j)()],[j.a.CODE]:[Object(v.j)()]};return t===y.Z.CodeOnly&&delete n[j.a.LINK],t===y.Z.LinkOnly&&delete n[j.a.CODE],Object.assign({},Object(O.a)(e,n))}(p,e.referralCodeType);t.value=!0;if(await a())try{await Object(b.d)({threadId:e.id,code:n,link:r}),d(h.b.SUBMIT_REFERRAL)}finally{t.value=!1}else t.value=!1}function E(){document.documentElement.scrollIntoView({block:"start"})}return Object(r.watch)(x,E,{immediate:!0}),{__sfc:!0,isDisabled:t,stepComponent:c,isMobileMenuVisible:l,thread:u,setAllSetType:d,$v:p,steps:S,currentStep:k,currentStepIndex:x,goToNextStep:I,goToPrevStep:F,selectStepByIndex:D,isFirstStep:_,isLastStep:C,selectStep:function(e){B(e),D(e),p.value.clear(),l.value&&A()},disableTabsFromIndex:B,continueSubmission:function(){t.value=!1,I()},toggleMobileNav:A,nextStep:async function(e){C.value?N():I(e.currentTarget)},prevStep:function(e){k.value.visitedCount=0,F(e.currentTarget)},submitWizard:N,scrollTop:E,ThreadSubmissionLoader:s.a,FormWizardPagination:o.a,FormWizardNavigation:i.a,FormWizardNavigationButtons:m}}}),k=Object(p.a)(S,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("form",{staticClass:"flex width--all-12 height--all-full threadSubmission--wrapper aGrid",on:{submit:function(e){e.preventDefault()}}},[t(n.FormWizardNavigation,{attrs:{steps:n.steps,"current-step-index":n.currentStepIndex,trap:n.isDisabled,"is-mobile-menu-visible":n.isMobileMenuVisible},on:{"select-item":n.selectStep,"hide-nav":n.toggleMobileNav},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("Empfehlung einstellen")+" ")]},proxy:!0}])}),t("div",{staticClass:"flex flex--grow-1 flex--dir-col"},[t("div",{staticClass:"flex flex--grow-1 flex--dir-col aGrid"},[t(n.ThreadSubmissionLoader,{attrs:{"has-bar":!1}}),e.$breakpoint.smAndDown?t(n.FormWizardPagination,{staticClass:"flex--grow-0 space--v-2 space--h-2 space--mv-3 space--mh-3 bRad--a-xl clickable",attrs:{steps:n.steps,"current-step-index":n.currentStepIndex},on:{click:n.toggleMobileNav}}):e._e(),t("div",{staticClass:"flex flex--grow-1"},[t(n.currentStep.component,{ref:"stepComponent",tag:"Component",attrs:{thread:n.thread},on:{continue:n.continueSubmission}})],1),t(n.FormWizardNavigationButtons,{attrs:{"disable-next-button":!(n.thread.merchant&&n.isFirstStep),steps:n.steps,"current-step-index":n.currentStepIndex,"has-errors":n.isDisabled},on:{prev:n.prevStep,next:n.nextStep}})],1)])],1)}),[],!1,null,null,null);t.default=k.exports},567:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return b})),n.d(t,"h",(function(){return O})),n.d(t,"j",(function(){return D})),n.d(t,"m",(function(){return x})),n.d(t,"e",(function(){return I})),n.d(t,"g",(function(){return F})),n.d(t,"f",(function(){return k})),n.d(t,"l",(function(){return v})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return S})),n.d(t,"a",(function(){return y})),n.d(t,"i",(function(){return _})),n.d(t,"k",(function(){return C}));var r=n(32),a=n.n(r),s=n(5),o=n(87),i=n(4),c=n(104),l=n(616),u=n(6),d=n(611),p=n(513),m=n(1),h=n(21),g=n(653);const f=["wysiwyg"];function b(){const e=D(),t=Object(p.b)(),n=Object(s.ref)(!!e.value.threadId||function(e){return e.type===m.Ab.Deal&&Boolean(e.link||e.title||e.price||e.scheduledReleaseDate.date||e.endDate.date)}(e.value));return Object(h.j)(["thread_created_location"]),{isFullForm:n,showFullForm:function(){n.value=!0,t.replace({query:Object.assign({},t.currentRoute.query),hash:"#thread-details"})}}}const v=()=>{const e=D(),t=Object(s.ref)(null);Object(s.onUnmounted)((()=>{O().value.destroy()}));const{submitForm:n,validationMessages:r}=j({form:t,route:Object(p.a)()});return{form:t,thread:e,formOptions:k(),submitForm:n,validationMessages:r}},O=()=>Object(s.computed)((()=>c.b.create("threadSubmit"))),j=e=>{let{form:t,route:n}=e;const r=Object(s.ref)([]);return{submitForm:async function(){const e=O();if(e.value.isLoading())return;let a=null;try{var o;await Object(d.a)(),e.value.reset(),e.value.add(new Promise((e=>{a=e}))),t&&t.value.updateShortcodes();const c=k(),p=(e=>{const t={threadCreatedLocation:{name:"thread_created_location",data:e.query.thread_created_location}};return Object(s.ref)(t)})(n),m=D();m.value.isLocal&&(m.value.dispatchedFrom=null);const h="thread-desc-".concat(null!==(o=m.value.threadId)&&void 0!==o?o:"new"),f=Object(u.b)({req:l.e,params:{threadData:m.value,mentions:c.wysiwyg.plugins.mentions,morph:"threads.switch"===n.name,token:i.a.state.threadForm.token,ocular:p.value.threadCreatedLocation.data?p.value:null}}),b=await e.value.add(f.request),{thread:v,validation:O,responseMessages:j=[]}=y(b);if(r.value=O,!v)return a(),{responseMessages:j};Object(g.a)(h),window.onbeforeunload=()=>null,window.onunload=()=>null,window.location.href=null==v?void 0:v.url}catch(t){var c;console.error(t),null===(c=a)||void 0===c||c();const{validation:n,responseMessages:s}=y(t);return r.value=n,e.value.reset(),{responseMessages:s}}},validationMessages:r}};function y(e){if(e.errors&&e.errors.length)return{thread:null,validation:[],responseMessages:[]};const{messages:t}=e,{thread:n,validation:r}=e.persistThread||{};if(r&&r.length)return{thread:null,validation:r,responseMessages:[]};return(null!=t?t:[]).some((e=>"error"===e.type))?{thread:null,validation:[],responseMessages:t}:{thread:n,validation:[],responseMessages:t}}const w=async(e,t)=>{var n;const{submitForm:r,validationMessages:a}=j({route:e}),{responseMessages:s}=null!==(n=await r())&&void 0!==n?n:{};i.a.dispatch("pageMsgs/set",s),Object(l.d)(t,a.value)},S=()=>{const e=new URLSearchParams(window.location.search).get("imageurl");e&&i.a.dispatch("threadForm/addGalleryImages",[{remoteUrl:e}])},k=()=>{const e=Object(o.d)({countries:{namespace:"threadForm",path:"countries"},groups:{namespace:"threadForm",path:"groups"},locations:{namespace:"threadForm",path:"locations"},events:{namespace:"threadForm",path:"events"}});return e.wysiwyg={plugins:x()},e},x=()=>{const e=Object(o.d)({mentions:{namespace:"threadForm",path:"mentions"},shortcodes:{namespace:"threadForm",path:"thread.shortcodes"}});return e.link={href:"",content:""},e.emoji=!0,e},I=()=>{const e=k(),t=D();return Object(s.computed)((()=>{var n;const r=i.a.state.threadForm.features||{},{wysiwyg:s={}}=r,o=a()(r,f),c=s.html&&(!t.value.threadId||(null===(n=t.value.user)||void 0===n?void 0:n.userId)===i.a.getters["auth/me"].userId);return Object.assign({},o,{wysiwyg:Object.assign({},s,{html:c}),dispatchedFrom:o.dispatchedFrom&&e.countries.length,locations:o.locations&&!!e.locations.id,events:o.events&&e.events.length,groups:o.groups&&e.groups.length})}))},F=e=>{const t=k();return Object(s.computed)((()=>({groups:t.groups,max:e})))},D=()=>{const{thread:e}=Object(o.d)({thread:{namespace:"threadForm",path:"thread",deep:!0}});return Object(s.ref)(e)},_=e=>{const t=D(),n=Object(s.watch)(t,(r=>{r&&(window.onbeforeunload=()=>"Es gibt noch nicht gespeicherte Änderungen!",((e,t)=>{const n=t?"MultiStep":"SinglePage",r=["THREAD_SUBMISSION"],a=[m.Ab.Deal].includes(e.value.type)?"".concat(n).concat(e.value.type,"Abandoned"):null;window.onunload=()=>{a&&r.includes(m.q[a])&&e.value.link&&!e.value.threadId&&(localStorage.setItem("formAbandoned",m.q[a]),localStorage.setItem("formAbandonedTimer",String(Date.now())))}})(t,e),n())}),{deep:!0})},C=()=>{const t=D(),n=Object(s.computed)((()=>t.value.locations.checked));return Object(s.computed)((()=>{if(!t.value.isLocal)return null;if(n.value)return"Ort";if(!t.value.locations||!t.value.locations.items)return null;const r=t.value.locations.items.filter((e=>e.checked)),a=t.value.locations.items.reduce(((e,t)=>(t.items&&!t.checked&&e.push(...t.items.filter((e=>e.checked))),e)),[]);return[r.length?e("{1} :count Region| {2}:count Regionen|[3,*] :count Regionen",{count:r.length}):"",a.length?e("{1} :count Standort|{2} :count Standorte|[3,*] :count Standorte",{count:a.length}):""].filter((e=>e)).join(" / ")}))}}).call(this,n(70).translation)},611:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(4),a=n(1),s=n(682),o=n(60),i=n(17),c=n(324);const l=e=>e.groups.some((e=>e.source===o.b)),u=n.n(c)()((async e=>await Object(a.Nb)({filter:e})),(e=>{var t,n;return"".concat(e.terms.join("_"),"_").concat(null!==(t=null===(n=e.price)||void 0===n?void 0:n.eq)&&void 0!==t?t:"")})),d=async()=>{if(!r.a.getters["threadForm/canAutoAssignGroups"])return;const e=r.a.state.threadForm.thread;if(![i.f,i.g].includes(e.type))try{var t;const n=r.a.state.threadForm.groups,a=null!==(t=r.a.state.threadForm.fetchedFromUrl.title)&&void 0!==t?t:"",c={threadId:{eq:e.threadId},threadUrl:{eq:e.link},threadTypeName:{eq:e.type},terms:[e.title,a]};null!==e.price&&void 0!==e.price&&""!==e.price&&(c.price={eq:e.price});const{data:{groups:d}}=await u(c),p=e.type===i.e;if(d.length<1)return r.a.commit("threadForm/UPDATE_FIELD",{path:"thread.groups",value:e.groups.filter((e=>!e.assignedBySystem))}),void r.a.commit("threadForm/UPDATE_FIELD",{path:"groups",value:n.filter((e=>Object(s.g)(e,p)!==o.a||!e.assignedBySystem)).map((e=>Object.assign({},e,{matchesAutoAssignment:!1})))});if(l(e)&&!p||l(e)&&(e=>e.groups.some((e=>e.source===o.c)))(e))return;const m=d.map((e=>Object.assign({},e,{assignedBySystem:!0}))),h=m.reduce(((e,t)=>(e.primary||Object(s.g)(t,p)!==o.b||(e.groups.push(t),e.primary=!0),e.secondary||Object(s.g)(t,p)!==o.c||(e.groups.push(t),e.secondary=!0),Object(s.g)(t)===o.a&&e.groups.push(t),e)),{primary:!1,secondary:!1,groups:[]}),g=[...n.filter((e=>!m.some((t=>t.threadGroupId===e.threadGroupId)))).map((e=>Object.assign({},e,{matchesAutoAssignment:!1}))),...m.filter((e=>Object(s.g)(e,p)!==o.a)).map((e=>Object.assign({},e,{matchesAutoAssignment:!0})))],f=[...e.groups.filter((e=>!e.assignedBySystem)),...h.groups];r.a.commit("threadForm/UPDATE_FIELD",{path:"groups",value:g}),r.a.commit("threadForm/UPDATE_FIELD",{path:"thread.groups",value:f})}catch(e){}},p=e=>{const{cpcLink:t,claimCodeCampaignId:n,isExclusive:a,nsfw:s,scheduledReleaseDate:o,events:c,disclaimers:l,uploadImage:u}=r.a.state.threadForm.features,d=t||n||a||s||o||c||l;return e.type===i.e?d||u:d}},616:function(e,t,n){"use strict";n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return O})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return S}));var r=n(32),a=n.n(r),s=n(1),o=n(642),i=n(753);var c=n(107),l=n(6),u=n(120),d=n(724),p=n(17);const m=["merchant","morphsTo","user","shippingPrice","freeShipping","events","groups","images","imageSuggestions","mainImage","galleryImages","disclaimers","titleSlug","threadTypeId","preparedHtmlDescription"],h=["isSelected","source","matchesAutoAssignment"],g=["checked"],f=(e,t)=>{let{mentions:n,morph:r}=t;const{merchant:{merchantId:s,merchantName:l}={},shippingPrice:u,freeShipping:d,events:f,groups:b,galleryImages:v,disclaimers:O}=e,j=a()(e,m);switch(j.mentions=n,r&&(j.morph=j.type),s&&(j.merchant={merchantId:s,merchantName:l}),j.groups=b.map((e=>a()(e,h))),j.events=f.map((e=>a()(e,g))),j.locations.id||delete j.locations,j.startDate.timestamp||(j.startDate=null),j.endDate.timestamp||(j.endDate=null),j.scheduledReleaseDate.timestamp||(j.scheduledReleaseDate=null),Object(o.a)(d)&&Object(o.a)(u)||(j.shipping={isFree:!!d,price:u||0}),[p.o,p.a,p.g].includes(j.type)?((j.type===p.a&&!j.price&&!Object(i.b)(j.price)||[p.o,p.g].includes(j.type)&&Object(i.a)(j.price))&&(j.price=""),j.percentage||(j.percentage=0)):(delete j.price,delete j.percentage,delete j.isLocal),j.discountType){case p.c:delete j.price;break;case p.d:delete j.percentage;break;case p.b:delete j.price,delete j.percentage}return j.type===p.a?j.nextBestPrice||(j.nextBestPrice=0):j.nextBestPrice||delete j.nextBestPrice,j.disclaimers=O.map((e=>{let{threadDisclaimerId:t}=e;return{threadDisclaimerId:t}})),Object.assign({},j,"locations"in j&&{locations:(y=j.locations,"1"===y.id&&y.checked&&delete y.items,y)},{galleryImages:{bucket:"threads",slots:v.map((e=>{const t={remoteUrl:e.remoteUrl||"",slotData:null};return e.remoteUrl||(t.slotData=Object(c.d)(e)?Object.assign({},e.slots[0]):Object.assign({},e)),t}))}});var y},b=function(){let{threadData:e,mentions:t="",morph:n=!1,token:r=null,ocular:a=null,descriptionEditOnly:o=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.Ac)({payload:{thread:f(e,{mentions:t,morph:n}),token:r,ocular:a,descriptionEditOnly:o}})},v=e=>{const t=[];return Object.entries(e).forEach((e=>{let[n,r]=e;if(Array.isArray(r)&&r.length){const e=r[0].translations[0];t.push({title:e.title,text:e.body,type:n})}})),t},O=async function(e){const t=await Object(d.f)(e);return{request:t.request.then(v),cancel:t.cancel}},j=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=Object(l.d)(Object(d.a)(e,t),11e3);return{request:n.request.then((e=>{var t;let{duplicates:n}=e;return null!=n&&null!==(t=n.threads)&&void 0!==t&&t.length?n:null})),cancel:n.cancel}},y=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=Object(l.d)(Object(d.b)(e,t,n),5e3);return{request:r.request.then((e=>{let{duplicates:t}=e;return null!=t&&t.length?t:[]})),cancel:r.cancel}},w=()=>Object(u.c)(),S=(e,t)=>{t.map((t=>{let n=t.path;return"threadLocationSelected"===n&&(n="locations"),e.setMessages(n,t.translations.map((e=>({text:e.body}))))}))}},653:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(14);t.b={created(){this.markForRestore=this.markForRestore.bind(this),this.undoRestore=this.undoRestore.bind(this),this.clearRestore=this.clearRestore.bind(this),this.restoreStorage=new r.a("redactor-restore")},data:()=>({restoredContent:"",initialContent:"",restoreId:""}),watch:{restoredContent(e){this.$emit("canRestore",Boolean(e))}},methods:{restoreConfig(){return{markForRestore:this.markForRestore}},markForRestore(e){let{restoreId:t,restoredContent:n,initialContent:r}=e;this.restoreId=t,this.restoredContent=n||"",this.initialContent=r||""},undoRestore(){this.$editor.code.set(this.initialContent,!0),this.clearRestore()},clearRestore(){this.restoreStorage.del(this.restoreId),this.restoredContent=""}}};const a=e=>{new r.a("redactor-restore").del(e)}},682:function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return h}));var r=n(60),a=n(17),s=n(564);const o=function(e){return!!(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?e.isDefault&&e.isDiscussion:e.isDefault&&!e.isDiscussion)},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.source?e.source:o(e,t)?"primary":e.isDefault&&t?"secondary":e.isDefault?"tertiary":"other"},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((e=>Object.assign({},e,{source:i(e,t)})))},l=e=>!!e.isSelected,u=e=>!(!e.assignedBySystem||!e.matchesAutoAssignment),d=(e,t)=>{const n=[...t],r=n.findIndex((t=>t.threadGroupId===e.threadGroupId));return r>-1&&n.splice(r,1),l(e)&&n.push(e),n},p=(e,t,n)=>{const a=((e,t)=>{const n=e.find((e=>e.threadGroupId===t.id));return n?(n.isSelected=t.isSelected,n.source=n.source||r.a,n):null})(t,n);return a?d(a,e):null},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n={threadGroups:[],systemAssignedGroups:[]},r=e===a.e,i=r?"discussionThreadGroups":"threadGroups",c=e=>o(e,r);return r&&(n.discussionThreadGroups=[]),n[i].push(Object(s.j)({translation:"Bitte wähle eine passende Kategorie"}),Object(s.g)(1,{},c)),t&&n[i].push(Object(s.d)(t,{},c)),n};function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"groups";const n=Object.assign({},e);return Object.keys(n).forEach((e=>{n[e]={fieldName:t,rules:n[e]}})),n}},724:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return u}));var r=n(1),a=n(6);const s=async e=>{const t=[r.h,r.g,r.Hb,r.f,r.e],n={url:e,field:"link",value:e},s=await Object(a.c)({queries:t});return await s(n)},o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(a.b)({req:r.bc,params:{url:e,filter:t},options:n})},i=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Object(a.b)({req:r.cc,params:{url:e,voucherCode:t,filter:n},options:s})},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a.b)({req:r.Yc,params:e,options:t})},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a.b)({req:r.Xc,params:e,options:t})},u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a.b)({req:r.uc,params:{url:e},options:t})}},753:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(548);const a=e=>("string"==typeof e?""!==e.trim():null!=e)&&0===Number(Object(r.b)(e)),s=e=>!Number(Object(r.b)(e))},945:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n(1);const a={[r.Z.CodeOnly]:"Empfehlungscode",[r.Z.LinkOnly]:"Empfehlungslink",[r.Z.CodeAndLink]:"Empfehlungslink und -code"},s={[r.Z.CodeOnly]:"Was ist der Empfehlungscode?",[r.Z.LinkOnly]:"Was ist der Empfehlungslink?",[r.Z.CodeAndLink]:"Was ist der Empfehlungscode und -link?"},o={CODE:"code",LINK:"link"}}}]);