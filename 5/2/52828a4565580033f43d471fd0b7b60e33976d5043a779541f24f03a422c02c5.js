(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1053:function(e,t,r){"use strict";var n=r(106),o={props:{value:{type:String,default:""},placeholder:{type:String,default:""}},computed:{descriptionformattedDescription(){return Object(n.d)(Object(n.b)(Object(n.c)(this.description," ")),160)}}},a=r(45),s=Object(a.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"userHtml userHtml-content"},[t("div",{staticClass:"overflow--wrap-break width--all-12 size--all-s size--fromW4-m overflow--clamp-s-2 overflow--fromW4-clamp-m-2"},[e._v(" "+e._s(e.formattedDescription)+" ")])])}),[],!1,null,null,null);t.a=s.exports},1336:function(e,t,r){"use strict";r.r(t);var n=r(941),o=r(977),a=r(1053),s=r(978),l=r(958),i={components:{ThreadDescription:r(913).a,ThreadReplyCount:l.a,ThreadPreviewTitle:o.a,ThreadPreviewDescription:a.a,ThreadPreviewAuthor:s.a},mixins:[n.b,n.d,n.a]},u=r(45),c=Object(u.a)(i,(function(){var e=this,t=e._self._c;return t(e.layoutType,{tag:"Component",attrs:{"thread-type":e.thread.type},scopedSlots:e._u([{key:"header",fn:proxy:!0},{key:"title",fn:function(){return[t("ThreadPreviewTitle",{attrs:{value:e.thread.title,layout:e.layout,placeholder:e.i18n.titlePlaceholder}})]},proxy:!0},{key:"body",fn:function(){return[t("ThreadDescription",{attrs:{value:e.thread.description||e.i18n.descriptionPlaceholder,modifier:"size--all-s size--fromW4-m overflow--clamp-s-2 overflow--fromW4-clamp-m-2","max-length":160}})]},proxy:!0},{key:"author",fn:function(){return[t("ThreadPreviewAuthor",{attrs:{user:e.thread.user||e.currentUser,"best-badge":e.features.showUserBestBadge}})]},proxy:!0}])})}),[],!1,null,null,null);t.default=c.exports},958:function(e,t,r){"use strict";var n=r(5),o=Object(n.defineComponent)({__name:"thread-reply-count",props:{count:{default:0}},setup:),a=r(45),s=Object(a.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("span",{staticClass:"lbox--v-4"},[t("BaseIcon",{attrs:{name:"comment",left:""}}),e._v(" "+e._s(e.count)+" "+e._s(e.$t("commentaire|commentaires",{count:e.count}))+" ")],1)}),[],!1,null,null,null);t.a=s.exports}}]);