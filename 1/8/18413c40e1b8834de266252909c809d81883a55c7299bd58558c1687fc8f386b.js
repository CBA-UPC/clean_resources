(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1263:function(e,t,s){"use strict";s.r(t);var i=s(5),a=s(1098),r=s(817),o=s(509),n=s(868),l=s(589),c=s(564),u=s(87),d=s(155),h=s(17),m=s(807),p=s(826),k=s(841),v=s(842),b=s(1112),f={components:{BaseButton:s(507).a,FormRow:o.o,ThreadDuplicates:r.a,FormMessageList:o.m,ControlLoader:n.a,FormInputLabeled:o.i,FormInputIcon:o.h,ControlLinkErrors:m.a,CheckVoucherCodeDuplicates:p.a,CheckBlockedLinks:k.a,GetLinkMerchantSuggestion:v.a,EventTrigger:b.a},mixins:[l.b],data:()=>Object.assign({},Object(u.d)({thread:{namespace:"threadForm",path:"thread",deep:!0}}),{submitLink:"",submitCode:"",hasErrors:!1,hasDuplicates:!1}),computed:{canSubmit(){return!this.hasDuplicates&&!this.hasErrors},voucherType:()=>h.o,inlineLinkErrorsMessages(){return this.$v?this.$v.messages.link.filter((e=>!e.title)):[]},duplicatesFilter:()=>({type:{ne:h.g}})},validations:()=>({link:[Object(c.n)(!0)],voucherCode:[Object(c.o)("voucherCode")]}),watch:{"thread.link"(){this.resetData()},"thread.voucherCode"(){this.resetData()}},methods:{resetLink(){this.thread.link="",this.thread.voucherCode="",this.resetData(),this.validateLink()},resetCode(){this.thread.voucherCode="",this.resetData()},resetData(){this.hasErrors=!1,this.hasDuplicates=!1,this.submitLink="",this.submitCode="",this.$v.clear("link")},async validateLink(){await this.$v.validate("link",this.thread.link)},async submit(){const{link:e,voucherCode:t}=this.thread;this.resetData(),await this.validateLink(),!this.$v.error.link&&e&&(this.submitLink=e,this.submitCode=t)},showFullForm(){this.$emit("show-full-form")},submitVoucher(){Object(d.b)({type:"submit",target:this.$el}),this.showFullForm()},submitWithoutLink(){this.thread.link="",this.thread.voucherCode="",this.thread.merchant={},this.showFullForm()},continueWithCode(){this.showFullForm()},setLinkErrors(e){let{hasErrors:t}=e;this.hasErrors=t},setDuplicates(e){let{hasDuplicates:t}=e;this.hasDuplicates=t}}},C=s(44),g=Object(C.a)(f,(function(){var e=this,t=e._self._c;return t("section",{directives:[{name:"track",rawName:"v-track:linkForm.view",value:{type:e.voucherType},expression:"{ type: voucherType }",arg:"linkForm",modifiers:{view:!0}}],staticClass:"flex flex--dir-col flex--grow-1 space--fromW2-h-4 space--h-3 space--t-3 space--b-2"},[t("div",{staticClass:"flex--grow-1 space--mb-3"},[t("h1",{staticClass:"size--all-xxxl size--fromW2-xxl text--b text--color-charcoalTint space--t-3"},[e._v(" "+e._s("Comparte un cupón con la comunidad")+" ")]),t("p",{staticClass:"size--all-l text--color-greyShade space--mt-3 space--fromW2-mt-1 space--mb-3"},[e._v(" "+e._s("Introduce el código y el enlace donde otras personas pueden canjear tu cupón")+" ")]),t("form",{staticClass:"width--all-12",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"flex boxAlign-ai--all-c"},[t("div",{staticClass:"flex--grow-1"},[t("ol",{staticClass:"flex flex--dir-col flex--fromW2-dir-row"},[t("FormRow",{staticClass:"space--fromW2-r-2 flex--grow-1 width--fromW2-10",attrs:{error:e.$v.error.link}},[t("FormInputLabeled",{attrs:{id:"link",name:"link",placeholder:"https://www.sitio.com/supercodigo",inputmode:"url"},on:{input:e.resetData,change:e.validateLink},scopedSlots:e._u([{key:"prependIcon",fn:function(){return[t("FormInputIcon",{attrs:{name:"link"}})]},proxy:!0}]),model:{value:e.thread.link,callback:function(t){e.$set(e.thread,"link","string"==typeof t?t.trim():t)},expression:"thread.link"}}),t("FormMessageList",{staticClass:"hide--fromW2",attrs:{messages:e.$v.messages.link}})],1),t("FormRow",{attrs:{error:e.$v.error.voucherCode}},[t("FormInputLabeled",{staticClass:"space--t-2 space--fromW2-t-0",attrs:{id:"voucherCode",name:"voucherCode",placeholder:"Código promocional"},on:{input:e.resetData},scopedSlots:e._u([{key:"prependIcon",fn:function(){return[t("FormInputIcon",{attrs:{name:"scissors"}})]},proxy:!0}]),model:{value:e.thread.voucherCode,callback:function(t){e.$set(e.thread,"voucherCode",t)},expression:"thread.voucherCode"}}),t("FormMessageList",{attrs:{messages:e.$v.messages.voucherCode}})],1)],1)]),e.canSubmit?t("div",{staticClass:"space--l-2 hide--toW2"},[t("BaseButton",{staticClass:"width--all-12",attrs:{type:"submit",variant:"primary",mode:"brand",disabled:!e.thread.link}},[e._v(" "+e._s("¡Empecemos!")+" ")])],1):e._e()]),e.submitLink?t("CheckBlockedLinks",{attrs:{link:e.submitLink},on:{request:e.setLinkErrors},scopedSlots:e._u([{key:"default",fn:function({isLoading:s,hasErrors:i,errors:a}){return[i?t("ControlLinkErrors",{attrs:{"error-messages":a},on:{cancel:e.resetLink}}):t("CheckVoucherCodeDuplicates",{attrs:{link:e.submitLink,code:e.submitCode,"thread-id":e.thread.threadId,filter:e.duplicatesFilter},on:{request:e.setDuplicates},scopedSlots:e._u([{key:"default",fn:function({isLoading:a,hasDuplicates:r,duplicates:o}){return[t("div",[t("GetLinkMerchantSuggestion",{attrs:{link:e.submitLink,"keep-alive":!s}}),s||a?t("ControlLoader",[e._v(" "+e._s("Buscando posibles duplicados")+" ")]):r?t("ThreadDuplicates",{attrs:{type:e.voucherType,threads:o},on:{cancel:e.resetCode,continue:e.continueWithCode}}):e._e(),t("EventTrigger",{attrs:{"is-loading":s||a,"has-errors":i||r},on:{trigger:e.submitVoucher}})],1)]}}],null,!0)})]}}],null,!1,2568462224)}):e._e(),t("FormMessageList",{staticClass:"hide--toW2",attrs:{messages:e.$v.messages.link}}),e.canSubmit?t("div",{staticClass:"hide--fromW2 space--mt-3"},[t("BaseButton",{directives:[{name:"track",rawName:"v-track:submitWithLink.click",arg:"submitWithLink",modifiers:{click:!0}}],staticClass:"width--all-12 space--mb-3",attrs:{variant:"primary",mode:"brand",type:"submit",disabled:!e.thread.link}},[e._v(" "+e._s("¡Empecemos!")+" ")])],1):e._e()],1)]),e.canSubmit?t("div",{staticClass:"hAlign--all-c"},[t("BaseButton",{directives:[{name:"track",rawName:"v-track:submitWithoutLink.click",arg:"submitWithoutLink",modifiers:{click:!0}}],attrs:{variant:"tertiary",mode:"default"},on:{click:e.submitWithoutLink}},[e._v(" "+e._s("No tengo ningún link")+" ")])],1):e._e()])}),[],!1,null,null,null),L=g.exports,_=Object(i.defineComponent)({__name:"voucher-submission-wizard",setup:e=>({__sfc:!0,ThreadSubmissionWizardContent:a.a,VoucherSubmissionLinkForm:L,VOUCHER_TYPE:h.o})}),w=Object(C.a)(_,(function(){var e=this,t=e._self._c,s=e._self._setupProxy;return t(s.ThreadSubmissionWizardContent,{attrs:{"thread-type":s.VOUCHER_TYPE}},[t(s.VoucherSubmissionLinkForm,{staticClass:"flex--grow-1",on:{"show-full-form":function(t){return e.$emit("show-full-form")}}})],1)}),[],!1,null,null,null);t.default=w.exports},826:function(e,t,s){"use strict";var i=s(5),a=s(544),r=s(616),o=s(715);const n=()=>{let e=null;const t=Object(i.ref)([]),{isLoading:s,setLoader:n}=Object(a.a)(),l=()=>{t.value=[],s.value&&Object(o.a)(e)};return{duplicates:t,checkDuplicates:(s,i,a)=>{i&&(l(),(s=>{let{link:i,code:a,filter:o}=s;e=Object(r.b)(i,a,o),e.request.then((e=>{e&&(t.value=e)})).finally(n())})({link:s,code:i,filter:a}))},resetDuplicates:l,isLoading:s}};var l=Object(i.defineComponent)({__name:"check-voucher-code-duplicates",props:{link:null,code:null,filter:null},setup(e){const t=e,{duplicates:s,isLoading:a,checkDuplicates:r,resetDuplicates:o}=n(),l=Object(i.computed)((()=>!!s.value.length));return Object(i.watch)((()=>t.code),(()=>{t.code?r(t.link,t.code,t.filter):o()}),{immediate:!0}),Object(i.onBeforeUnmount)((()=>{o()})),{__sfc:!0,props:t,duplicates:s,isLoading:a,checkDuplicates:r,resetDuplicates:o,hasDuplicates:l}}}),c=s(44),u=Object(c.a)(l,(function(){var e=this,t=e._self._c,s=e._self._setupProxy;return t("div",[e._t("default",null,{isLoading:s.isLoading,duplicates:s.duplicates,hasDuplicates:s.hasDuplicates,reset:s.resetDuplicates})],2)}),[],!1,null,null,null);t.a=u.exports}}]);s.container.remove(this),this.$elem.removeClass(v),this.$elem.data(b,null),this.$elem=null,this.elem=null,this.destroyed=!0}},{key:"setActive",value:function(e){if(!this.destroyed&&this.active!==e){const t=this.options,n=t[e?"onEvent":"offEvent"];t.onClass&&this.$elem.toggleClass(t.onClass,e),t.offClass&&this.$elem.toggleClass(t.offClass,!e),n&&l.a.findTargets(this.$elem,t.target).triggerAll(n,t.eventParams),e&&t.oneOff&&this.destroy(),this.active=e}}},{key:"scrollUpdate",value:function(){y.conditions[this.options.condition](this,this.container.elemRect())}}]),e}();function k(){if(!p.a.badScrollPerformance()){const e=c()(".".concat(v));e.toArray().forEach((e=>new w(c()(e)))),e.removeClass(v),setTimeout((()=>{g.forEach((e=>{e.scrollUpdate()}))}),0)}}w.defaults={$container:l.a.$win,target:"$self",condition:"inView",args:{},eventParams:{}},l.a.$win.on("debouncedDomChanged",k),t.a={initAll:k,ScrollTrigger:w,DIRECTIVE_NAME:m}},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return C}));var a=n(5),o=n(4),r=n(64),s=n(207),i=n.n(s),c=n(21),l=n(0),u=n.n(l),d=n(2),f=n(181),p=n(65);const h=(()=>{let e=0,t=null;function n(){e>0||(t=setTimeout((()=>{window.prerenderReady=!0}),1e3))}return{add(){e+=1,clearTimeout(t)},remove(){e-=1,n()},checkReady:n}})();document.addEventListener("DOMContentLoaded",h.checkReady);var m=n(28),v=n(87);const b="vue2",g=r.a.get(),y=(()=>{let e={};const t=new p.a;return{add:n=>{Object.keys(n).forEach((a=>{a in e||(e[a]=n[a],t.fire(a))}))},get:function(n){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8e4;return n in e?(o=e[n],"function"!=typeof o||o.extend?Promise.resolve(o):o().then((e=>e.default))).then((e=>Object(m.c)().then((()=>e)))):new Promise(((e,o)=>{setTimeout(o,a),t.one(n,(()=>e(y.get(n))))}));var o},reset:()=>e={}}})(),w=e=>e.data("vue-instance"),k=e=>{if(w(e))return;const{id:t,name:n,attrs:r,props:s,domProps:l,mapState:f,class:p,useStoreProps:m,vModel:k}=d.a.params(b,e),x=t||n;m&&!(x in o.a.state.component.state)&&o.a.dispatch("component/update",{id:x,props:s});const C=e=>f?Object.entries(f).reduce(((e,t)=>{let[n,a]=t;const o=i()(g,a);return void 0!==o&&(e[n]=o),e}),e||{}):e,O=y.get(n);O.catch((()=>{throw Error("Missing embed: ".concat(n))})),O.finally(h.remove);const j=O.then((t=>new a.default({el:e[0],name:"Wrapper:".concat(n),mixins:[m?{data:()=>({storeProps:Object.keys(s).reduce(((e,t)=>{const n="string"==typeof s[t]&&s[t]?s[t]:t;return Object.defineProperty(e,t,{get:()=>Object(v.c)(o.a.state.component.state[x].props)(n),set(e){o.a.commit("component/MERGE_FIELD",{path:"state.".concat(x,".props.").concat(n),value:e})},configurable:!0,enumerable:!0}),e}),{})})}:{}],store:o.a,router:c.l,async mounted(){u()(this.$el).trigger("domChanged")},render(e){const n=this;return e(t,{props:m?n.storeProps:C(s),attrs:r,domProps:l,class:p,on:m&&k?{update(e){n.storeProps[k]=e}}:{}})}})));e.data("vue-instance",j)},x=async e=>{if(e.data("vue-initialised"))return;const{lazy:t}=d.a.params(b,e);t?((e=>{d.a.updateParams(f.a.DIRECTIVE_NAME,e,{oneOff:!0,onEvent:"vueCreate"}),new f.a.ScrollTrigger(e).scrollUpdate()})(e),await Object(m.b)(),k(e)):k(e),h.add(),e.data("vue-initialised",!0)},C=()=>{u()(".js-vue2").toArray().map((e=>u()(e))).forEach(x)};document.addEventListener("DOMContentLoaded",C),d.a.add(b,"init",x),d.a.add(b,"vueCreate",k),d.a.add(b,"destroy",(async e=>{const t=await w(e);t&&t.$destroy()}))},307:function(e,t,n){var a=n(309),o=n(88),r=n(182),s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=i.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):s.test(e)?NaN:+e}},308:function(e,t,n){var a=n(80);e.exports=function(){return a.Date.now()}},309:function(e,t,n){var a=n(310),o=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(o,""):e}},310:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},577:function(e,t,n){"use strict";n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"a",(function(){return b})),n.d(t,"h",(function(){return g})),n.d(t,"b",(function(){return y}));var a,o=n(134),r=n.n(o),s=n(8),i=n.n(s),c=n(20),l=n(6),u=n(1);const d={getSuggestions:"/search/users",getProfile:(e,t)=>Object(c.b)(a||(a=r()(["/profile/","/","?"])),e,t),profileRedirect:"/profile/prg",postSocialTerms:e=>"user/social/provider/".concat(e,"/terms")},f=(e,t,n)=>i.a.post(d.postSocialTerms(e),{username:n,termsConditionsAndPrivacy:t?"on":"off"}),p=e=>Object(l.a)({req:u.kd,params:{id:e}}).then((e=>{let{user:t}=e;return(null==t?void 0:t.lastAddress)||null})),h=()=>Object(l.a)({req:u.oc}).then((e=>e.infractions)),m=(e,t)=>Object(l.a)({req:u.nc,params:{typeId:e,placeholder:t}}).then((e=>e.infraction)),v=e=>Object(l.a)({req:u.jd,params:{id:e}}).then((e=>e.user.infractions.points.active)),b=e=>Object(l.a)({req:u.mc,params:{infraction:e}}),g=()=>Object(l.a)({req:u.Oc}).then((e=>e.resentEmailConfirmationToCurrentUser.result)),y=(e,t)=>Object(l.a)({req:u.fc,params:{userId:e,follow:t}}).then((e=>{let{followUser:t}=e;return t.follow}))},586:function(e,t){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure "+e)},e.exports.__esModule=!0,e.exports.default=e.exports},86:function(e,t,n){var a=n(88),o=n(308),r=n(307),s=Math.max,i=Math.min;e.exports=function(e,t,n){var c,l,u,d,f,p,h=0,m=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=c,a=l;return c=l=void 0,h=t,d=e.apply(a,n)}function y(e){var n=e-p;return void 0===p||n>=t||n<0||v&&e-h>=u}function w(){var e=o();if(y(e))return k(e);f=setTimeout(w,function(e){var n=t-(e-p);return v?i(n,u-(e-h)):n}(e))}function k(e){return f=void 0,b&&c?g(e):(c=l=void 0,d)}function x(){var e=o(),n=y(e);if(c=arguments,l=this,p=e,n){if(void 0===f)return function(e){return h=e,f=setTimeout(w,t),m?g(e):d}(p);if(v)return clearTimeout(f),f=setTimeout(w,t),g(p)}return void 0===f&&(f=setTimeout(w,t)),d}return t=r(t)||0,a(n)&&(m=!!n.leading,u=(v="maxWait"in n)?s(r(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),x.cancel=function(){void 0!==f&&clearTimeout(f),h=0,c=p=l=f=void 0},x.flush=function(){return void 0===f?d:k(o())},x}},885:function(e,t,n){"use strict";(function(e){var a=n(577),o=n(509),r=n(507);const s=(e,t)=>'<a class="link" href="'.concat(e,'" rel="nofollow" target="_blank">').concat(t,"</a>");t.a={components:{BaseButton:r.a,FormList:o.l,FormRow:o.o,FormLabel:o.k,FormContent:o.c,FormInput:o.e,FormCheckbox:o.b},props:{provider:{type:String,required:!0},accepted:{type:Boolean,required:!0}},data(){return{name:"",isAccepted:this.accepted}},computed:{withName(){return"apple"===this.provider},canSubmit(){return this.isAccepted&&(!this.withName||this.name)},text(){return{title:this.withName?"Nombre de usuario y privacidad":"Privacidad",subtitle:this.withName?"Por favor introduce un nombre de usuario y confirma que has leído la Política de privacidad y el Código de conducta.":"Por favor confirma que has leído las reglas y la Política de Privacidad."}},acceptLabel:()=>e("He leído y acepto el :terms y la :privacy",{replaces:{terms:s("/conducta","Código de conducta"),privacy:s("/privacidad","Política de Privacidad")}})},methods:{send(){Object(a.g)(this.provider,this.isAccepted,this.name)}}}}).call(this,n(70).translation)},89:function(e,t,n){"use strict";function a(e){const t=Object.prototype.toString;let n=e.length;const r=new Array(n);for(;n;)switch(n-=1,t.call(e[n])){case"[object Object]":r[n]=o({},e[n]);break;case"[object Array]":r[n]=a(e[n]);break;default:r[n]=e[n]}return r}function o(e,t){const n=Object.prototype.toString;let r;for(r in t)if(t.hasOwnProperty(r))switch(n.call(t[r])){case"[object Object]":e[r]=o("[object Object]"===n.call(e[r])?e[r]:{},t[r]);break;case"[object Array]":e[r]=a(t[r]);break;default:e[r]=t[r]}return e}t.a={boundMethod:function(e,t){return e[""+t]||(e[""+t]=e[t].bind(e))},deepCloneArray:a,deepMerge:o,uniqueArray:function(e){return e.filter(((t,n)=>e.indexOf(t)===n))}}}}]);