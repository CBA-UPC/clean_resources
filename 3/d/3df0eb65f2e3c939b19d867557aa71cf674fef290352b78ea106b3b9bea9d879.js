(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1369:function(e,t,a){"use strict";a.r(t);var n=a(44),p=Object(n.a)({},(function(e,t){return e("div",{staticClass:"page-footer page-center page-space--v-l space--fromW3-b-0"},[t._t("default")],2)}),[],!0,null,null,null);t.default=p.exports}}]);)=>t.suggestion.value)),o=Object(a.computed)((()=>({name:"threads.index.group",params:{slug:s.value.threadGroupUrlName}})));return{__sfc:!0,props:t,group:s,route:o,SearchResultsMediaLink:l.a,SITE_SEARCH_HISTORY_LABELS:r.b,SITE_SEARCH_RESULT_LABELS:i.a}}}),n=s(44),c=Object(n.a)(o,(function(){var e=this,t=e._self._c,s=e._self._setupProxy;return t(s.SearchResultsMediaLink,{directives:[{name:"track",rawName:"v-track:groupLink.click",value:{id:s.group.threadGroupId},expression:"{ id: group.threadGroupId }",arg:"groupLink",modifiers:{click:!0}}],attrs:{to:s.route,selected:e.isHighlighted,title:s.group.threadGroupName,label:s.SITE_SEARCH_HISTORY_LABELS.GROUP},scopedSlots:e._u([{key:"media-left",fn:function(){return[t("BaseIcon",{staticClass:"space--mv-1 space--mh-1",attrs:{name:"search",width:"14",height:"14",color:"greyShade"}})]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"flex--grow-1 overflow--hidden overflow--ellipsis"},[t("span",{staticClass:"space--mr-1"},[t("span",{staticClass:"size--all-s text--b text--color-charcoalTint"},[e._v(e._s(s.group.threadGroupName))])]),t("span",{staticClass:"size--all-xs text--color-greyShade"},[e._v(e._s(s.SITE_SEARCH_RESULT_LABELS.GROUP))])])]},proxy:!0},{key:"media-right",fn:function(){return[t("span",{staticClass:"img--square-s space--ml-2 hAlign--all-c flex boxAlign-center"},[t("BaseIcon",{staticClass:"text--color-greyShade",attrs:{name:"vector",size:"s"}})],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=c.exports},814:function(e,t,s){"use strict";var a=s(5),l=s(546),r=Object(a.defineComponent)({__name:"site-search-results-media-link",props:{selected:{type:Boolean},to:null,title:null,label:null,type:null,payload:null},setup(e){const t=e,s=Object(a.computed)((()=>{const{to:e,label:s,title:a,payload:l,type:r}=t;return{route:e,label:s,title:a,payload:l,type:r}}));return{__sfc:!0,props:t,historyItem:s,SearchHistoryTrigger:l.a}}}),i=s(44),o=Object(i.a)(r,(function(){var e=this,t=e._self._c,s=e._self._setupProxy;return t(s.SearchHistoryTrigger,{attrs:{item:s.historyItem}},[t("RouterLink",{staticClass:"flex size--all-m boxAlign-ai--all-c autoSuggest-suggestion autoSuggest-suggestion--hoverHighlight space--v-2 space--h-3 clickable",class:{"autoSuggest-suggestion--selected":e.selected},attrs:{to:e.to}},[t("div",{staticClass:"flex--shrink-0 space--r-2 flex boxAlign-ai--all-c"},[e._t("media-left")],2),e._t("content"),t("div",{staticClass:"flex--shrink-0 flex boxAlign-ai--all-c"},[e._t("media-right")],2)],2)],1)}),[],!1,null,null,null);t.a=o.exports}}]);