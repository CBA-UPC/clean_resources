(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1095:1184:1252:function(a,e,t){"use strict";t.r(e);var s=t(632),i={props:["src"]},r=(t(1184),t(45)),l={components:{MobileNotificationPreview:Object(r.a)(i,(function(){var a=this,e=a._self._c;return e("div",{staticClass:"notificationPreview flex bRad--a-l bg--color-white space--v-2 space--h-2"},[e("div",{staticClass:"aGrid"},[e("img",{staticClass:"notificationPreview-image space--mr-3",attrs:{src:a.src,alt:"",width:"44",height:"44"}}),e("div",{staticClass:"notificationPreview-icon bRad--round bg--color-red aGrid-item aGrid-item--t-0 aGrid-item--r-0 space--mr-2 flex boxAlign-ai--all-c boxAlign-jc--all-c"},[e("BaseIcon",{staticClass:"text--color-white",attrs:{name:"bell",width:"12"}})],1)]),e("div",{staticClass:"size--all-s text--color-greyShade flex--inline boxAlign-ai--all-c hAlign--all-l"},[e("div",[a._t("default")],2)])])}),[],!1,null,"23e7fdf2",null).exports},props:{isThreadExpired:{type:Boolean,required:!0}},computed:{translationReplaces:posterImage(){return this.isThreadExpired?"/assets/img/apps/download-message/app-preview-mocked.png":"/assets/img/apps/download-message/app-preview.png"}}},o=Object(r.a)(l,(function(){var a=this,e=a._self._c;return e("div",{staticClass:"space--t-3 bg--poster-gradient overflow--hidden"},[e("div",{staticClass:"vAlign--all-m flex--inline",class:{"width--all-12 boxAlign-jc--all-c":a.isThreadExpired}},[a.isThreadExpired?[e("div",{staticClass:"space--mh-a space--mt-2 aGrid"},[e("img",{staticClass:"space--mh-5 space--h-5",attrs:{src:a.posterImage,alt:"",width:"172",height:"210"}}),e("div",{staticClass:"aGrid-item aGrid-item--t-0 space--mt-5 width--all-12"},[e("div",{staticClass:"flex boxAlign-jc--all-fe space--b-3"},[e("MobileNotificationPreview",{staticClass:"animation--appearFromLeftSoft boxShadow--light",attrs:{src:"/assets/img/apps/download-message/notification-1.png"}},[e("div",{domProps:{innerHTML:a._s(a.$t(":boldTagStart 4 cupones :boldTagEnd coinciden con\n tu alerta :boldTagStart comida a domicilio :boldTagEnd",a.translationReplaces))}})])],1),e("div",{staticClass:"space--b-3"},[e("MobileNotificationPreview",{staticClass:"boxShadow--light animation--appearFromRightSoft",attrs:{src:"/assets/img/apps/download-message/notification-2.png"}},[e("div",{domProps:{innerHTML:a._s(a.$t(":boldTagStart 8 ofertas :boldTagEnd coinciden con tu alerta :boldTagStart Nike :boldTagEnd",a.translationReplaces))}})])],1)])])]:[e("div",{staticClass:"space--mh-a space--mt-2 aGrid"},[e("img",{staticClass:"space--h-5",attrs:{src:a.posterImage,alt:"",width:"214",height:"210"}}),a._m(0)])]],2)])}),[function(){var a=this._self._c;return a("div",{staticClass:"aGrid-item aGrid-item--t-0 width--all-12"},[a("img",{staticClass:"aGrid-item aGrid-item--t-0 aGrid-item--r-0 appDownloadMessage-stars space--mr-n2",attrs:{src:"/assets/img/apps/download-message/stars.png",alt:"",width:"61",height:"64"}}),a("img",{staticClass:"aGrid-item aGrid-item--t-0 aGrid-item--l-0 appDownloadMessage-exclaim",attrs:{src:"/assets/img/apps/download-message/exclaim.png",alt:"",width:"54",height:"54"}})])}],!1,null,null,null).exports,n=t(93),c=t(17),d={components:{BaseButton:t(507).a,AppDownloadPoster:o,StarRating:s.a},computed:Object.assign({},Object(n.e)("appDownloadMessage",["isThreadExpired","threadTypeId","source"]),Object(n.e)("settings",{appDownloadMessageSettings:"appDownloadMessage"}),{appLinkthreadType(){return Object(c.r)(this.threadTypeId)?c.a:c.o},message(){switch(String(this.threadTypeId)){case c.m.Deal:return this.isThreadExpired?{title:"¡Qué no se te vuelva a escapar otra oferta!",body:"Recibe notificaciones en nuestra app"}:{title:"Descarga nuestra app",body:"Selección del día, alertas de ofertas, modo oscuro ¡y más!"};case c.m.Voucher:return this.isThreadExpired?{title:"¡Qué no se te vuelva a escapar otro cupón!",body:"Recibe notificaciones en nuestra app"}:{title:"Descarga nuestra app",body:"Selección del día, alertas de ofertas, modo oscuro ¡y más!"};default:return{}}}}),methodsmit("hide")}}},p=Object(r.a)(d,(function(){var a=this,e=a._self._c;return e("div",{directives:[{name:"track",rawName:"v-track:appDownloadMessage.view",value:{threadType:a.threadType,expired:a.isThreadExpired,source:a.source},expression:"{ threadType, expired: isThreadExpired, source }",arg:"appDownloadMessage",modifiers:{view:!0}}],staticClass:"flex"},[e("div",{staticClass:"width--all-12 hAlign--all-c"},[e("AppDownloadPoster",{attrs:{"is-thread-expired":a.isThreadExpired}}),e("div",{staticClass:"flex flex--dir-col space--v-4 space--h-3"},[e("h3",{staticClass:"text--b text--color-charcoal space--t-2 size--all-xxxl hAlign--all-c"},[a._v(a._s(a.message.title))]),a.appDownloadMessageSettings.appRating?e("StarRating",{staticClass:"space--mh-a space--mt-1",attrs:{rating:Number(a.appDownloadMessageSettings.appRating),big:""}}):a._e(),e("h4",{staticClass:"text--color-charcoalTint size--all-xl hAlign--all-c space--mt-3"},[a._v(a._s(a.message.body))]),e("BaseButton",{directives:[{name:"track",rawName:"v-track:appDownload.click",arg:"appDownload",modifiers:{click:!0}}],staticClass:"space--mt-4",attrs:{variant:"primary",mode:"brand",href:a.appLink,target:"_blank"},on:{click:a.hideMessage}},[a._v(" "+a._s("Descargar la app")+" ")]),e("BaseButton",{directives:[{name:"track",rawName:"v-track:cancelAppDownload.click",arg:"cancelAppDownload",modifiers:{click:!0}}],staticClass:"space--mt-2",attrs:{variant:"secondary",mode:"default"},on:{click:a.hideMessage}},[a._v(" "+a._s("No, gracias")+" ")])],1)],1)])}),[],!1,null,null,null);e.default=p.exports},565:function(a,e,t){"use strict";(function(a){var s=t(570),i=t.n(s);const r=["star-empty","star-half","star"],l=["s","m","l"];e.a={props:{rating:{type:Number,required:!0},max:{type:Number,default:5},color:{type:String,default:"yellow"},offStarColor:{type:String},offStarType:{type:String,default:"star",validator:a=>-1!==r.indexOf(a)},sizl.indexOf(a),default:"m"},width:{type:String,default:""},height:{type:String,default:""},iconClass:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{classArray(){return[this.iconClass,"aGrid-item--t-0",{"seal--pointer-on":!this.disabled,clickable:!this.disahis.rating)},label(){return a("1 Estrellas|:count Estrellas",{count:this.level/2})},icons(){return Array.from({length:this.max},((a,e)=>{const t=i()(this.level-2*e,0,2),s=0===t,l=.offStarType)),o=s&&this.offStarColor?this.offStarColor:this.color;return{name:r[s&&this.offStarColor?l:t],color:o}}))}}}}).call(this,t(70).translation)},632:function(a,e,t){"use strict";var s=t(565).a,i=t(45),r=Object(i.a)(s,(function(){var a=this,e=a._self._c;return e("span",a._g({staticClass:"flex",attrs:{"aria-label":a.label}},a.$listeners),a._l(a.icons,(function(t,s){return e("BaseIcon",{key:s,class:a.classArray,attrs:{name:t.name,color:t.color,small:"s"===a.size,large:"l"===a.size,width:a.width,height:a.height},nativeOnhovered",s)}}})})),1)}),[],!1,null,null,null);e.a=r.exports}}]);