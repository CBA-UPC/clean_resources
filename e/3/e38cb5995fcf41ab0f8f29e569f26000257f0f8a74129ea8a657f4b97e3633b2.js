(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1094:function(e,t,a){},1181:function(e,t,a){"use strict";a(1094)},1182:function(e,t,a){var s=a(634)("toLowerCase");e.exports=s},1265:function(e,t,a){"use strict";a.r(t);var s=a(598),i=a(814),r=a(507),n={components:{BaseBadge:i.a,BaseButton:r.a,Badge:i.a,GuardedLink:s.a},props:{link:{type:Object,required:!0},icons:{type:Array,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},guards:{type:Object,required:!0},track:{type:Object,required:!0},isAdminOnly:{type:Boolean,default:!1},chip:{type:String,default:""}},computed:{guard(){const{source:e,type:t}=this.guards;return{login:{source:e,trackAction:this.track.action,thread_type_translation:t}}}}},o=(a(1181),a(45)),c=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("GuardedLink",{staticClass:"threadTypeSelection-card flex boxAlign-ai--all-c bg--hover-greyPanel border border--color-greyBackground bRad--a-l space--v-4 space--h-3",class:{"threadTypeSelection-card--new":e.chip},attrs:{to:e.link,guard:e.guard}},[t("div",{staticClass:"aGrid threadTypeSelection-card-icon flex--shrink-0 space--mr-3"},[e._l(e.icons,(function(a,s){return t("img",{key:s,staticClass:"imgFrame-img will-transform",class:a.class,attrs:{src:a.path,alt:e.title}})})),e.isAdminOnly?t("Badge",{staticClass:"threadTypeSelection-card-badge aGrid-item textBadge--white border border--color-greyBackground text--color-brandPrimary textBadge--primaryPale"},[e._v(" Admin ")]):e._e()],2),t("div",[t("div",{staticClass:"flex boxAlign-ai--all-c boxAlign-jc--all-sb space--b-1"},[t("h2",{staticClass:"text--b size--all-xl space--mr-2"},[e._v(e._s(e.title))]),e.chip?t("BaseBadge",{staticClass:"text--color-brandPrimary textBadge--primaryPale text--normal space--mr-a"},[e._v(e._s(e.chip))]):e._e(),e.$breakpoint.mdAndUp?t("BaseButton",{staticClass:"space--ml-2",attrs:{variant:"primary",mode:"brand",square:""}},[t("BaseIcon",{attrs:{name:"right"}})],1):e._e()],1),t("span",{staticClass:"size--all-s size--fromW3-m text--color-greyShade"},[e._v(" "+e._s(e.description)+" ")])])])}),[],!1,null,null,null).exports,d=a(93),l=a(51),p=a(1182),u=a.n(p),h=a(17),f=a(102),m={components:{ThreadTypeCard:c},computed:Object.assign({},Object(d.e)("features",{navigation:e=>{var t,a;return(null===(t=e.flags)||void 0===t||null===(a=t.navigation)||void 0===a?void 0:a.submissions)||{}}}),{threadTypeList(){var e,t,a,s,i;const r=[];return null!==(e=this.navigation)&&void 0!==e&&e.deal&&r.push(this.link(h.a,l.d,[{path:"/assets/img/thread-type-selection/deal-part1_dd7a2.svg"},{path:"/assets/img/thread-type-selection/deal-part2_f09e0.svg",class:"animation--upDownSmooth1 space--mt-1"}],{title:"Oferta",descr:"Comparte productos específicos en oferta, como una tele o unos tenis, con o sin cupón."},"")),null!==(t=this.navigation)&&void 0!==t&&t.voucher&&r.push(this.link(h.o,l.l,[{path:"/assets/img/thread-type-selection/voucher-part1_9fee5.svg"},{path:"/assets/img/thread-type-selection/voucher-part2_000d4.svg",class:"animation--scissorsP1"},{path:"/assets/img/thread-type-selection/voucher-part3_0ff10.svg",class:"animation--scissorsP2"}],{title:"Cupón",descr:"Comparte cupones que ofrezcan descuentos productos, tiendas o eventos."},"")),null!==(a=this.navigation)&&void 0!==a&&a.discussion&&r.push(this.link(h.e,l.f,[{path:"/assets/img/thread-type-selection/discussion-part1_9a31d.svg"},{path:"/assets/img/thread-type-selection/discussion-part2_a687b.svg",class:"animation--upDownSmooth1 space--mt-n2"},{path:"/assets/img/thread-type-selection/discussion-part3_65dd0.svg",class:"animation--upDownSmooth2 space--mt-n2"}],{title:"Discusión",descr:"Inicia una discusión para obtener sugerencias o consejos de la comunidad de expertos en ofertas."},"")),null!==(s=this.navigation)&&void 0!==s&&s.merchantGenericOffer&&r.push(this.link(h.g,l.j,[{path:"/assets/img/thread-type-selection/merchant-part1_ba93d.svg"},{path:"/assets/img/thread-type-selection/merchant-part2_ce486.svg",class:"animation--upDownSmooth1"}],{title:"Oferta Solo Tienda",descr:'Comparte una ofertas "merchant-only" con condiciones específicas o pequeños descuentos con amplia vigencia.'},"")),null!==(i=this.navigation)&&void 0!==i&&i.referralCampaign&&r.push(this.link(h.h,l.n,[{path:"/assets/img/thread-type-selection/megaphone-part1_34d47.svg"},{path:"/assets/img/thread-type-selection/megaphone-part2_2b237.svg",class:"animation--megaphoneP2"},{path:"/assets/img/thread-type-selection/megaphone-part3_31002.svg",class:"animation--megaphoneP3"},{path:"/assets/img/thread-type-selection/megaphone-part4_6dec4.svg",class:"animation--megaphoneP4"}],{title:"Oferta de referidos",descr:"Publica tu código o link de referido para que tanto tú como la comunidad pueda beneficiarse."},"","Nuevo")),r}}),methods:{link(e,t,a,s,i,r){const n=u()(e);return{to:Object(f.j)(h.m[e],{query:{thread_created_location:"thread_type_selection"}}),text:s,icons:a,track:{name:"add".concat(e),action:"goto_".concat(n,"_add_form")},guard:{source:"new_".concat(n),type:t},ceptClass:i,chip:r}}}},g=Object(o.a)(m,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"threadTypeSelection threadSubmission--wrapper bg--main"},[t("div",{staticClass:"flex flex--dir-col boxAlign-ai--all-c width--all-12 width--fromW4-6 space--v-4 space--h-3 space--fromW4-t-4 space--mh-a"},[t("h1",{staticClass:"size--all-xxl size--fromW4-xxxl text--b space--mt-0 space--fromW4-mt-2"},[e._v(" "+e._s("¿Qué quieres compartir?")+" ")]),t("TransitionGroup",{staticClass:"threadTypeSelection-container flex flex--dir-col boxAlign-ai--all-c space--mt-4",style:{"--total":e.threadTypeList.length},attrs:{tag:"div",name:"slide-in",appear:""}},e._l(e.threadTypeList,(function(e,a){return t("ThreadTypeCard",{directives:[{name:"track",rawName:"v-track:addThread.click.click-ga",value:{type:e.track.name},expression:"{ type: threadType.track.name }",arg:"addThread",modifiers:{click:!0,"click-ga":!0}}],key:e.guard.type,staticClass:"space--mb-2",class:e.ceptClass,style:{"--i":a+1},attrs:{link:e.to,icons:e.icons,title:e.text.title,description:e.text.descr,guards:e.guard,track:e.track,"is-admin-only":"new_merchantGenericOffer"===e.guard.source,chip:e.chip}})})),1)],1)])}),[],!1,null,null,null);t.default=g.exports},634:function(e,t,a){var s=a(712),i=a(662),r=a(713),n=a(311);e.exports=function(e){return function(t){t=n(t);var a=i(t)?r(t):void 0,o=a?a[0]:t.charAt(0),c=a?s(a,1).join(""):t.slice(1);return o[e]()+c}}},662:function(e,t){var a=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return a.test(e)}},712:function(e,t,a){var s=a(723);e.exports=function(e,t,a){var i=e.length;return a=void 0===a?i:a,!t&&a>=i?e:s(e,t,a)}},713:function(e,t,a){var s=a(873),i=a(662),r=a(874);e.exports=function(e){return i(e)?r(e):s(e)}},723:function(e,t){e.exports=function(e,t,a){var s=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(a=a>i?i:a)<0&&(a+=i),i=t>a?0:a-t>>>0,t>>>=0;for(var r=Array(i);++s<i;)r[s]=e[s+t];return r}},873:function(e,t){e.exports=function(e){return e.split("")}},874:function(e,t){var a="\\ud800-\\udfff",s="["+a+"]",i="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",n="[^"+a+"]",o="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",d="(?:"+i+"|"+r+")"+"?",l="[\\ufe0e\\ufe0f]?",p=l+d+("(?:\\u200d(?:"+[n,o,c].join("|")+")"+l+d+")*"),u="(?:"+[n+i+"?",i,o,c,s].join("|")+")",h=RegExp(r+"(?="+r+")|"+u+p,"g");e.exports=function(e){return e.match(h)||[]}}}]);||!n.options.horizontal)},L=function(e,t,o,r,i){var a={},s=(i||o)*(100*(1-e)),l=(r||o)*(100*(1-t));return a.x=n.options.round?Math.round(s):Math.round(100*s)/100,a.y=n.options.round?Math.round(l):Math.round(100*l)/100,a},E=function(){window.removeEventListener("resize",E),window.removeEventListener("orientationchange",E),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",E),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",E),c=u(O)},O=function(){z()&&!1===p?(S(),c=u(O)):(c=null,window.addEventListener("resize",E),window.addEventListener("orientationchange",E),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",E,!!d&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",E,!!d&&{passive:!0}))},S=function(){for(var e,t=0;t<n.elems.length;t++){var o=l[t].verticalScrollAxis.toLowerCase(),p=l[t].horizontalScrollAxis.toLowerCase(),u=-1!=o.indexOf("x")?r:0,c=-1!=o.indexOf("y")?r:0,d=-1!=p.indexOf("x")?a:0,f=(c+(-1!=p.indexOf("y")?a:0)-l[t].top+i)/(l[t].height+i),m=(u+d-l[t].left+s)/(l[t].width+s),w=(e=L(m,f,l[t].speed,l[t].verticalSpeed,l[t].horizontalSpeed)).y-l[t].baseY,x=e.x-l[t].baseX;null!==l[t].min&&(n.options.vertical&&!n.options.horizontal&&(w=w<=l[t].min?l[t].min:w),n.options.horizontal&&!n.options.vertical&&(x=x<=l[t].min?l[t].min:x)),null!=l[t].minY&&(w=w<=l[t].minY?l[t].minY:w),null!=l[t].minX&&(x=x<=l[t].minX?l[t].minX:x),null!==l[t].max&&(n.options.vertical&&!n.options.horizontal&&(w=w>=l[t].max?l[t].max:w),n.options.horizontal&&!n.options.vertical&&(x=x>=l[t].max?l[t].max:x)),null!=l[t].maxY&&(w=w>=l[t].maxY?l[t].maxY:w),null!=l[t].maxX&&(x=x>=l[t].maxX?l[t].maxX:x);var b=l[t].zindex,h="translate3d("+(n.options.horizontal?x:"0")+"px,"+(n.options.vertical?w:"0")+"px,"+b+"px) "+l[t].transform;n.elems[t].style[v]=h}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=l[e].style;p||(window.removeEventListener("resize",A),p=!0),m(c),c=null},A(),n.refresh=A,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e})?n.apply(t,r):n)||(e.exports=i)}).call(this,o(113))}}]);