(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1309:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e(528),u=e(79);const i=t=>({baseLayout:Object(o.b)(t)}),a={routeData:i};var s=Object(r.defineComponent)(Object.assign({},a,{__name:"groups-hub",setup(t){const{baseLayout:n}=Object(u.c)();return{__sfc:!0,routeData:i,baseLayout:n,BaseLayout:o.a}}})),f=e(45),c=Object(f.a)(s,(function(){var t=this._self._c,n=this._self._setupProxy;return t(n.BaseLayout,{attrs:{twig:"","route-data":n.baseLayout}})}),[],!1,null,null,null);n.default=c.exports},307:function(t,n,e){var r=e(309),o=e(88),u=e(182),i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(u(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=a.test(t);return e||s.test(t)?f(t.slice(2),e?2:8):i.test(t)?NaN:+t}},308:function(t,n,e){var r=e(80);t.exports=function(){return r.Date.now()}},309:function(t,n,e){var r=e(310),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},310:function(t,n){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},586:function(t,n){t.exports=function(t){if(null==t)throw new TypeError("Cannot destructure "+t)},t.exports.__esModule=!0,t.exports.default=t.exports},86:function(t,n,e){var r=e(88),o=e(308),u=e(307),i=Math.max,a=Math.min;t.exports=function(t,n,e){var s,f,c,p,v,l,d=0,x=!1,b=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var e=s,r=f;return s=f=void 0,d=n,p=t.apply(r,e)}function h(t){var e=t-l;return void 0===l||e>=n||e<0||b&&t-d>=c}function w(){var t=o();if(h(t))return _(t);v=setTimeout(w,function(t){var e=n-(t-l);return b?a(e,c-(t-d)):e}(t))}function _(t){return v=void 0,y&&s?m(t):(s=f=void 0,p)}function g(){var t=o(),e=h(t);if(s=arguments,f=this,l=t,e){if(void 0===v)return function(t){return d=t,v=setTimeout(w,n),x?m(t):p}(l);if(b)return clearTimeout(v),v=setTimeout(w,n),m(l)}return void 0===v&&(v=setTimeout(w,n)),p}return n=u(n)||0,r(e)&&(x=!!e.leading,c=(b="maxWait"in e)?i(u(e.maxWait)||0,n):c,y="trailing"in e?!!e.trailing:y),g.cancel=function(){void 0!==v&&clearTimeout(v),d=0,s=l=f=v=void 0},g.flush=function(){return void 0===v?p:_(o())},g}}}]);,methods:Object.assign({},Object(u.b)("threadForm",["setMerchant","setCampaign","setReferralCode"]),{toggleModal(){this.showModal=!this.showModal},async onAddButtonClick(t){this.setSelectedMerchantId(t.original.id),this.checkCampaigns(t),this.hasCampaign&&(await this.setMerchant(t.original),this.$emit("continue"))},checkCampaigns(t){this.hasCampaign=t.original.hasCampaign},getSuggestions(t){return t?Object(d.b)(t):this.initialMerchantList},setSelectedMerchantId(t){this.selectedMerchantId=t}})},f=a(44),g=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"width--all-12"},[e("div",{staticClass:"width--max-pageNarrow space--mh-a"},[e("div",{staticClass:"formList-label text--color-charcoalTint text--b"},[e("span",{staticClass:"lbox--v-1"},[t._v(t._s("Sök handlare"))])]),e("AutoSuggest",t._g(t._b({staticClass:"space--mb-5 text--color-charcoalShade iGrid-item width--all-12 width--max-12 hAlign--all-l",attrs:{items:t.getSuggestions,"query-value":t.selectedMerchantName,"load-suggestions-on-focus":"","is-icon-right":"","no-filter":"",placeholder:"Sök ...","input-icon":"search",height:"400px","keep-query-in-search":!0},scopedSlots:t._u([{key:"suggestions",fn:function({suggestions:a,highlighted:s,highlight:i,select:r}){return[e("AutoSuggestListResult",{attrs:{suggestions:a,highlighted:s},on:{highlight:i,select:r},scopedSlots:t._u([{key:"default",fn:function({suggestion:a,isHighlighted:s}){return[e("div",{staticClass:"autoSuggest-suggestion autoSuggest-suggestion--hoverHighlight boxAlign-ai--all-c overflow--wrap-off space--v-3 space--h-3 flex boxSec-div width--all-12 clickable overflow--hidden",class:{selected:s},on:{mousedown:function(e){return t.onAddButtonClick(a)}}},[e("div",{staticClass:"img img--frame img--darken img--noBorder img--square-xs img--type-entity"},[e("MerchantAvatar",{staticClass:"img--type-entity",attrs:{merchant:a.original,size:"xs"}})],1),e("span",{staticClass:"size--all-s text--b overflow--ellipsis space--l-2 text--color-charcoalTint"},[t._v(t._s(a.original.name))]),a.original.hasCampaign?e("span",{staticClass:"space--l-2 size--all-s text--color-greyShade"},[t._v(" "+t._s("Tillagd av")+" "+t._s(a.original.usedByUsersCount)+" "+t._s("Användare"))]):e("span",{staticClass:"size--all-s space--l-2 text--color-greyShade"},[t._v(t._s("Inga kampanjer"))])])]}}],null,!0)})]}}])},"AutoSuggest",t.$attrs,!1),t.$listeners)),t.hasCampaign?[e("div",{staticClass:"text--color-charcoalTint formList-label text--b"},[e("span",{staticClass:"lbox--v-1"},[t._v(t._s("Hur det fungerar"))])]),e("div",{staticClass:"referralOverview bg--color-greyPanel aGrid bRad--a-m space--v-4 space--h-3 flex--fromW4 space--fromW4-b-5 space--fromW4-t-5 boxAlign-jc--all-sb"},[t.$breakpoint.lgAndUp?e("div",{staticClass:"referralOverview-dashedLine width--all-12 aGrid-item"},[e("img",{attrs:{src:"/assets/img/referral-submission/dashed-curve_c7922.svg",width:"385",height:"55",alt:""}})]):t._e(),e("div",{staticClass:"referralOverview-item boxAlign-ai--all-c flex flex--fromW4-dir-col"},[e("div",{staticClass:"referralOverview-item-imgWrapper space--toW4-mr-3 space--fromW4-mb-3 boxAlign-jc--all-sa boxAlign-ai--all-c bRad--round aGrid flex"},[e("img",{attrs:{src:"/assets/img/referral-submission/link_00645.png",width:"27",height:"27",alt:""}})]),e("div",[e("div",{staticClass:"referralOverview-item-title size--all-m text--b space--mb-2"},[t._v(" "+t._s("Dela ditt referral-erbjudande")+" ")]),e("div",{staticClass:"size--all-s text--color-greyShade"},[t._v(" "+t._s("Med massor av medlemmar i communityt")+" ")])])]),e("div",{staticClass:"referralOverview-item boxAlign-ai--all-c flex flex--fromW4-dir-col"},[e("div",{staticClass:"referralOverview-item-imgWrapper space--toW4-mr-3 space--fromW4-mb-3 boxAlign-jc--all-sa boxAlign-ai--all-c bRad--round aGrid flex"},[e("img",{attrs:{src:"/assets/img/referral-submission/scissors_72098.png",width:"27",height:"27",alt:""}})]),e("div",[e("div",{staticClass:"referralOverview-item-title size--all-m text--b space--mb-2"},[t._v(" "+t._s("Communitymedlemmar använder din kod")+" ")]),e("div",{staticClass:"size--all-s text--color-greyShade"},[t._v(" "+t._s("Kvalificerade shoppare får rabatten")+" ")])])]),e("div",{staticClass:"referralOverview-item boxAlign-ai--all-c flex flex--fromW4-dir-col"},[e("div",{staticClass:"referralOverview-item-imgWrapper space--toW4-mr-3 space--fromW4-mb-3 boxAlign-jc--all-sa boxAlign-ai--all-c bRad--round aGrid flex"},[e("img",{attrs:{src:"/assets/img/referral-submission/tada_4f047.png",width:"27",height:"27",alt:""}})]),e("div",[e("div",{staticClass:"referralOverview-item-title size--all-m text--b space--mb-2"},[t._v(" "+t._s("Du blir belönad")+" ")]),e("div",{staticClass:"size--all-s text--color-greyShade"},[t._v(" "+t._s("Få värvningsförmåner från handlaren")+" ")])])])])]:e("div",{staticClass:"flex boxAlign-jc--all-sa flex--dir-col boxAlign-ai--all-c"},[e("img",{staticClass:"space--mb-3",attrs:{src:"/assets/img/support-images/blank_9fec7.svg",width:"75",height:"80",alt:""}}),e("div",{staticClass:"space--mb-3"},[t._v(t._s("Tyvärr finns det inga aktiva kampanjer för den här säljaren."))]),e("BaseButton",{attrs:{variant:"primary",mode:"brand"},on:{click:t.toggleModal}},[t._v(" "+t._s("Förfråga om att lägga till en kampanj")+" ")]),t.showModal?e("BaseModal",{attrs:{active:t.showModal,width:t.modalWidth,layout:"absolute"},on:{"update:active":function(e){t.showModal=e}},scopedSlots:t._u([{key:"default",fn:function({close:a}){return[e("ModalHead",{staticClass:"text--color-greyShade",attrs:{icon:"pencil"}},[t._v(t._s("Nytt meddelande"))]),e("ModalBody",[e("RequestCampaignForm",{attrs:{"merchant-id":t.selectedMerchantId},on:{close:a}})],1)]}}],null,!1,1353620340)}):t._e()],1)],2)])}),[],!1,null,null,null).exports,v=a(810),b=Object(s.defineComponent)({__name:"merchant-step",setup:t=>({__sfc:!0,FormWizardStepBase:i.a,FormWizardStepTitle:r.a,MerchantStepForm:g,BaseBadge:v.a})}),x=Object(f.a)(b,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e(a.FormWizardStepBase,{scopedSlots:t._u([{key:"title",fn:function(){return[e(a.FormWizardStepTitle,[t._v(" "+t._s("Välj en handlare")+" ")])]},proxy:!0},{key:"form",fn:function(){return[e(a.MerchantStepForm,{on:{continue:function(e){return t.$emit("continue")}}})]},proxy:!0},{key:"footnotes",fn:function(){return[e("div",{staticClass:"flex flex--dir-col boxAlign-ai--all-c space--mt-4"},[e(a.BaseBadge,{staticClass:"text--normal text--color-charcoal bg--color-greyPanel space--mb-2"},[t._v(t._s("Beta"))]),e("div",{staticClass:"userHtml size--all-s",domProps:{innerHTML:t._s('Du kan dela dina tankar eller välja bort den här upplevelsen genom att nå ut till oss <a target="_blank" href="https://www.Pepper.com/contact"> här. </a>')}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=x.exports},520:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return u}));var s=a(10),i=a.n(s),r=a(11),l=a.n(r);let n=function(t){return t.CROP="cp",t.RESIZE="re",t.BLUR="bl",t.FIT="fi",t.FIT_BY_SIZE="fs",t.QUALITY="qt",t.FILE_TYPE="ft",t}({}),o=function(t){return t.ANIMATED_SOURCE="as",t}({});const c={[n.CROP]:"crop",[n.RESIZE]:"resize",[n.BLUR]:"blur",[n.FIT]:"fit",[n.FIT_BY_SIZE]:"fitBySize",[n.QUALITY]:"quality",[n.FILE_TYPE]:"fileType"};let d=function(){function t(e,a){if(i()(this,t),e){if("object"==typeof e){const{path:t,name:s}=e;if(!t||!s)throw Error("Invalid picsy image object");const i=e.animated?"".concat(o.ANIMATED_SOURCE,"/"):"",{name:r=s,ext:l="jpg"}=a||{},n=e.ext||l;this.path="".concat("https://static.pepperdeals.se","/").concat(t,"/").concat(s,"/").concat(i),this.file="".concat(r,".").concat(n)}else{if("string"!=typeof e)throw Error("Expected picsy image path, but received: ".concat(e));if("string"!=typeof a)throw Error("Expected picsy image file name, but received: ".concat(a));this.path=e,this.file=a}Object.freeze(this)}}return l()(t,[{key:"blur",value:function(t){return t>0&&t<=100?this.addOperation(n.BLUR,t):this}},{key:"quality",value:function(t){return t>=0&&t<=100?this.addOperation(n.QUALITY,t):this}},{key:"resize",value:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return this.dimOperation(n.RESIZE,...e)}},{key:"fit",value:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return this.dimOperation(n.FIT,...e)}},{key:"fitBySize",value:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return this.dimOperation(n.FIT_BY_SIZE,...e)}},{key:"crop",value:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return this.dimOperation(n.CROP,...e)}},{key:"fileType",value:function(e){if(!e||!this.file)return this;const a="".concat(this.file.substr(0,this.file.lastIndexOf(".")),".").concat(e);return new t(this.path,a)}},{key:"toString",value:function(){return this.path?this.path+this.file:""}},{key:"apply",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce(((t,e)=>{let[a,...s]=e;const i=c[a];return i?t[i](...s):t}),this)}},{key:"dimOperation",value:function(t,e,a){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=Math.round(e)||"",r=Math.round(a)||"";return i||r?this.addOperation(t,"".concat(i).concat(r?"x"+r:"").concat(s?"w":"")):this}},{key:"addOperation",value:function(e,a){return this.path?new t("".concat(this.path).concat(e,"/").concat(a,"/"),this.file):this}}]),t}();const u=t=>{const e=[n.CROP,n.RESIZE,n.FIT,n.FIT_BY_SIZE];for(const[a,s,i]of t)if(e.includes(a))return{width:s,height:i};return{width:0,height:0}}},537:function(t,e,a){"use strict";var s=a(5),i=a(521),r=a(549);const l={center:r.e,bottomSheet:r.b,bottomCenter:r.c,bottomRight:r.d,fullscreen:r.f,absolute:r.a},n=Object(s.defineComponent)({name:"BaseModal"});var o=Object(s.defineComponent)(Object.assign({},n,{props:{layout:{type:[String,Object],default:"center",validator:t=>"string"!=typeof t||t in l},backdrop:{type:Boolean,default:!0},mobileSheet:{type:Boolean,default:!0},contentRepos:{type:Boolean,default:!1},scrollRepos:{type:Boolean,default:!1}},setup(t,e){let{expose:a}=e;const r=t,n=Object(s.computed)((()=>{const t="string"==typeof r.layout?l[r.layout]:r.layout;return[Object.assign({},t,{backdrop:r.backdrop})]})),o=Object(s.ref)(),c=()=>o.value.close();return Object(s.onMounted)((()=>o.value.activate(n))),Object(s.watch)(n,(()=>o.value.updateLayouts(n))),a({close:c}),{__sfc:!0,layoutPresets:l,props:r,popoverLayouts:n,popover:o,close:c,BasePopover:i.a}}})),c=a(44),d=Object(c.a)(o,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e(a.BasePopover,t._g(t._b({ref:"popover",attrs:{"scroll-repos":t.scrollRepos,"content-repos":t.contentRepos,"mobile-sheet":t.mobileSheet&&"fullscreen"!==t.layout},scopedSlots:t._u([{key:"default",fn:function({}){return[t._t("default",null,{close:a.close})]}}],null,!0)},"BasePopover",t.$attrs,!1),t.$listeners))}),[],!1,null,null,null);e.a=d.exports},611:function(t,e,a){"use strict";var s=a(520);const i={xs:{"1x":[["re",22,22],["ft","jpg"],["qt",70]],"2x":[["re",44,44],["ft","jpg"],["qt",70]]},s:{"1x":[["re",38,38],["ft","jpg"],["qt",70]],"2x":[["re",76,76],["ft","jpg"],["qt",70]]},m:{"1x":[["re",54,54],["ft","jpg"],["qt",70]],"2x":[["re",108,108],["ft","jpg"],["qt",70]]},l:{"1x":[["re",70,70],["ft","jpg"],["qt",70]],"2x":[["re",140,140],["ft","jpg"],["qt",70]]},xl:{"1x":[["re",94,94],["ft","jpg"],["qt",70]],"2x":[["re",188,188],["ft","jpg"],["qt",70]]},default:"/assets/img/default-merchant_ce645.svg"};var r={props:{merchant:{type:Object,required:!0},size:{validator:t=>["xs","s","m","l","xl"].includes(t),default:"s"},altText:{type:String}},computed:{avatarSrc(){return this.merchant.avatar?new s.a(this.merchant.avatar).apply(i[this.size]["1x"]).toString():i.default},avatarSrc2x(){return this.merchant.avatar?new s.a(this.merchant.avatar).apply(i[this.size]["2x"]).toString():i.default},avatarAltText(){var t;return null!==(t=this.altText)&&void 0!==t?t:this.merchant.logoAlt}}},l=a(44),n=Object(l.a)(r,(function(){var t=this;return(0,t._self._c)("img",{class:`img--square-${t.size}`,attrs:{src:t.avatarSrc,srcset:`${t.avatarSrc2x} 2x`,alt:t.avatarAltText}})}),[],!1,null,null,null);e.a=n.exports},665:function(t,e,a){"use strict";var s=a(537),i=a(518),r=a(516),l=a(523),n=a(511),o=a(519);e.a={components:{BaseModal:s.a,ModalHead:i.a,ModalBody:r.a,ModalFooter:l.a,ModalClose:n.a,ModalAsync:o.a}}},728:function(t,e,a){"use strict";var s={props:{alignCenter:{type:Boolean,default:!1}},computed:{containerClasses(){return{"boxAlign-ai--all-c":this.alignCenter}},hasTitle(){return!!this.$scopedSlots.title},hasSubTitle(){return!!this.$scopedSlots["sub-title"]}}},i=a(44),r=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("Transition",t._g({attrs:{appear:"",name:"slide-in","leave-active-class":"hide","leave-to-class":"hide"}},t.$listeners),[e("section",{staticClass:"flex flex--grow-1 flex--shrink-0 boxAlign-jc--all-c width--all-12",class:t.containerClasses},[e("div",{staticClass:"flex flex--dir-col space--fromW2-h-4 space--h-3 space--fromW3-t-6 space--b-4 boxAlign-ai--all-c width--all-12"},[t.hasTitle?e("div",{staticClass:"space--mb-4 width--all-12 width--max-pageNarrow"},[t._t("title")],2):t._e(),t.hasSubTitle?e("div",{staticClass:"space--mb-4 width--all-12 width--max-pageNarrow"},[t._t("sub-title")],2):t._e(),t._t("form"),t._t("footnotes")],2)])])}),[],!1,null,null,null);e.a=r.exports},729:function(t,e,a){"use strict";var s=a(44),i=Object(s.a)({},(function(t,e){return t("h1",{staticClass:"size--all-xxxl text--color-charcoal text--b",class:e.data.staticClass},[e._t("default")],2)}),[],!0,null,null,null);e.a=i.exports}}]);