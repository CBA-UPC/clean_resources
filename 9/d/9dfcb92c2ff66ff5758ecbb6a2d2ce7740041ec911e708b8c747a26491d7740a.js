(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1345:function(e,t,a){"use strict";a.r(t);var o=a(5),s=a(567),n=a(17),l=a(507),r=a(816),i=a(843),c=a(835),u=a(869),d=Object(o.defineComponent)({__name:"form-wizard-description-summary",setup(e){const t=Object(o.ref)(!1),a=Object(o.ref)(!1),d=Object(s.j)(),f=d.value.type===n.o,m=f?"¿Por qué vale la pena compartir este cupón?":"¿Por qué vale la pena compartir esta oferta?",p=Object(o.computed)((()=>t.value?{text:"Ver menos",icon:"up"}:{text:"Ver más",icon:"down"})),v=Object(o.compuws-9"));return{__sfc:!0,isExpanded:t,isOverflow:a,thread:d,isVoucherType:f,summaryFieldDescriptionLabel:m,toggleButtonLabel:p,wrapperClass:v,toggleDescrialue},BaseButton:l.a,SummarySection:r.a,SummaryField:i.a,OverflowObserver:c.a,UserHtml:u.a}}}),f=a(45),m=Object(f.a)(d,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(a.SummarySection,{on:{edit:function(t){return e.$emit("edit")}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s("Descripción"))]},proxy:!0},{key:"content",fn:function(){return[t(a.OverflowObserver,{staticClass:"overflow--hidden",class:a.wrapperClass,attrs:{overflow:a.isOverflow},on:{"update:ovelow=e}}},[t("div",[t(a.SummaryField,{staticClass:"width--all-12",attrs:{label:a.summaryFieldDescriptionLabel}},[t(a.UserHtml,{attrs:{"xhr-name":"thread-description"}},[t("div",{domProps:{innerHTML:e._s(a.thread.preparedHtmlDescription)}})])],1)],1)]),a.isOverflow||a.isExpanded?t(a.BaseButton,{staticClass:"space--mt-4",attrs:{variant:"text",mode:"primary"},on:{click:a.toggleDescription}},[e._v(" "+e._s(a.toggleButtonLabel.text)+" "),t("BaseIcon",{staticClass:"space--ml-2",attrs:{name:a.toggleButtonLabel.icon}})],1):e._e()]},proxy:!0}])})}),[],!1,null,null,null);t.default=m.exports},538:function(e,t,a){"use strict";var o=a(5),s=a(522),n=a(550);const l={center:n.e,bottomSheet:n.b,bottomCenter:n.c,bottomRight:n.d,fullscreen:n.f,absolute:n.a},r=Object(o.defineComponent)({name:"BaseModal"});var i=Object(o.defineComponent)(Object.assign({},r,{props:{layout:{type:[String,Object],default:"center",validator:e=>"string"!=typeof e||e in l},backdrop:{type:Boolean,default:!0},mobileSheet:{type:Boolean,default:!0},contentRepos:{type:Boolean,default:!1},scrollRepos:{type:Boolean,default:!1}},setup(e,t){let{expose:a}=t;const n=e,r=Object(o.computed)((()=>{const e="string"==typeof n.layout?l[n.layout]:n.layout;return[Object.assign({},e,{backdrop:n.backdrop})]})),i=Object(o.relose();return Object(o.onMounted)((()=>i.value.activate(r))),Object(o.watuts(r))),a({close:c}),{__sfc:!0,layoutPresets:l,props:n,popoverLayouts:r,popover:i,close:c,BasePopover:s.a}}})),c=a(45),u=Object(c.a)(i,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(a.BasePopover,e._g(e._b({ref:"popover",attrs:{"scroll-repos":e.scrollRepos,"content-repos":e.contentRepos,"mobile-sheet":e.mobileSheet&&"fullscreen"!==e.layout},scopedSlots:e._u([{key:"default",fn:function({}){return[e._t("default",null,{close:a.close})]}}],null,!0)},"BasePopover",e.$attrs,!1),e.$listeners))}),[],!1,null,null,null);t.a=u.exports},574:function(e,t,a){"use strict";var o=a(538);a.d(t,"a",(function(){return o.a}));var s=a(519);a.d(t,"e",(function(){return s.a}));var n=a(517);a.d(t,"b",(function(){return n.a}));var l=a(524);a.d(t,"d",(function(){return l.a}));var r=a(512);a.d(n r.a}));a(520)},816:function(e,t,a){"use strict";var o=a(5),s=a(510),n=Object(o.defineComponent)({__name:"summary-section":s.a})}),l=a(45),r=Object(l.a)(n,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",[t("div",{staticClass:"space--mb-4"},[t("h2",{staticClass:"text--b size--all-xxl"},[e._t("title")],2)]),t("div",[e._t("content")],2),t("div",{staticClass:"space--mt-4"},[t(a.BaseButton,{attrs:{mode:"default",size:"s",variant:"secondary"},on:dit")}}},[e._v(" "+e._s("Editar")+" ")])],1)])}),[],!1,null,null,null);t.a=r.exports},835:function(e,t,a){"use strict";var ow:!1}),mounted(){this.update("init"),window.addEventListener("resize",this.handleResize),this.$once("hook:beforeDessize)}))},updated(){this.update("update")},methods:{handlize")},update(e){const t=this.overflow;this.overflow=this.$el.scrollHeight>this.$el.clientHeight+1,t!==this.overflow&&(this.$emit("update:overflow",this.overflow),this.$emit("overflow-change",{eventType:e,isOverflow:this.overflow}))}}low})}},s=a(45),n=Object(s.a)(o,undefined,undefined,!1,null,null,null);t.a=n.exports},843:function(e,t,a){"use strict";var o=a(5),s=Object(o.defineComponent)({__name:"summary-field",props:{label:null}c:!0})}),n=a(45),l=Object(n.a)(s,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e.label?t("div",{staticClass:"text--b space--mb-2"},[e._v(e._s(e.label))]):[e._t("label")],e._t("default")],2)}),[],!1,null,null,null);t.a=l.exports},869:function(e,t,a){"use strict";var o=a(5),s=a(522),n=a(34),l=a(8),r=a.n(l);const i={default:{url:"/image/preview/{{id}}?filter={{key}}",format:"full_screen"},animatedGif:{url:"/image/preview/{{id}}?filter={{key}}&animated_gif=1",format:"age")}async function u(e,t,a){const{format:o,url:at(t)}(y:a})}(s,e,l),c=await async function(e){return(await r.a.get(e)).data.data.image}(i);return null==c?void 0:c[l]}var d=a(574),f=Object(o.defineComponent)({__name:"full-image-modal",props:{imageUrl:null}:d.c})}),m=a(45),p=Object(m.a)(f,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(a.BaseModal,e._g(e._b({attrs:{layout:"fullscreen","layer-class":"","content-class":"space--h-3 space--v-3"}},"BaseModal",e.$attrs,!1),e.$listeners),[t("div",{staticClass:"space--h-3 space--v-3 overflow--scrollY height--all-full"},[t("div",{staticClass:"flex height--min-100 boxAlign-jc--all-c boxAlign-ai--all-c"},[t("div",{staticClass:"aGrid"},[t(a.ModalClose,{staticClass:"aGrid-close zIndex--above space--mt-2 space--mr-2"}),t("img",{staticClass:"width--max-12 bRad--a",attrs:{src:e.imageUrl,alt:""}})],1)])])])}),[],!1,null,null,null).exports;function v(e){const t=Object(o.ref)("");return{fullImageUrl:t,showFullImage:async function(a){t.value=await async function(e,t){return await u(c(e),t,i.default)}(a,e)}}}var b=Object(o.defineComponent)({__name:"user-html",props:{xhrName:null,emoticonPreview:{type:Boolean,default:!0}},setup(e){const t=e,{fullImageUrl:a,showFullImage:n}=v(t.xhrName),{emoticon:l,emoticonPopover:r,showEmoticon:d}=function(){const e=Object(o.ref)(""),t=Object(o.ref)(null);return{emoticon:e,emoticonPopover:t,showEmoticon:function(a){var o;e.value=a.outerHTML,null===(o=t.value)||void 0===o||o.activate(["n","s"],{target:a})}}}();return{__sfc:!0,props:t,fullImageUrl:a,showFullImage:n,emoticon:l,emoticonPopover:r,showEmoticon:d,handler:function(e){const a=e.target;if(a.classList.contains("emoji")&&t.emoticonPreview)d(a);else{if(!a.hasAttribute("data-image")||a.closest("a"))return a.classList.contains("userHtml-videoDummy-img")?(e.stopPropagation(),void function(e){const t=e.getAttribute("data-video")||e.getAttribute("data-embed-obj"),{src:a,embed_url:o}=JSON.parse(t),s=a||o;if(!s)return;const n=document.createElement("template"),l='<div class="userHtml-video"><div class="userHtml-video-inner"><iframe class="userHtml-video-iframe" src="'.concat(s,'?autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>');n.innerHTML=l,e.replaceWith(n.content)}(a.closest(".userHtml-videoDummy"))):void 0;Boolean(a.closest("[data-animated-gif]"))?async function(e,t){const a="userHtml-animatedGif--active",o=e.closest("[data-animated-gif]"),s=e.getAttribute("src"),n=await u(c(e),t,i.animatedGif);n&&(o.classList.add(a),e.setAttribute("src",n),o.addEventListener("click",(t=>{t.stopPropagation(),o.classList.remove(a),e.setAttribute("src",s)}),{once:!0}))}(a,t.xhrName):n(a)}},BasePopover:s.a,FullImageModal:p}}}),h=Object(m.a)(b,(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",{staticClass:"userHtml userHtml-content overflow--wrap-break",on:{click:a.handler}},[e._t("default"),t(a.BasePopover,{ref:"emoticonPopover",scopedSlots:e._u([{key:"default",fn:function({}){return[t("div",{staticClass:"emoji--size-l space--h-1 space--v-1",domProps:{innerHTML:e._s(a.emoticon)}})]}}])}),a.fullImageUrl?t(a.FullImageModal,{attrs:{"image-url":a.fullImageUrl},on:rl=""}}}):e._e()],2)}),[],!1,null,null,null);t.a=h.exports}}]);