(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{521:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",();var s=r(10),a=r.n(s),i=r(11),n=r.n(i);let l={}),o={});const c={[l.CROP]:"crop",[l.RESIZE]:"resize",[l.BLUR]:"blur",[l.FIT]:"fit",[l.FIT_BY_SIZE]:"fitBySize",[l.QUALITY]:"quality",[l.FILE_TYPE]:"fileType"};let u=function(){function t(e,r){if(a()(this,t),e){if("object"==typeof e){const{path:t,name:s}=e;if(!t||!s)throw Error("Invalid picsy image object");const a=e.animated?"".concat(o.ANIMATED_SOURCE,"/"):"",{name:i=s,ext:n="jpg"}=r||{},l=e.ext||n;this.path="".concat("https://static-pepper.dealabs.com","/").concat(t,"/").concat(s,"/").concat(a),this.file="".concat(i,".").concat(l)}else{if("string"!=typeof e)throw Error("Expected picsy image path, but received: ".concat(e));if("string"!=typeof r)throw Error("Expected picsy image file name, but received: ".concat(r));this.path=e,this.file=r}Object.freeze(this)}}return n()(t,[{key:"blur",value:function(t){return t>0&&t<=100?this.addOperation(l.BLUR,t):this}},{key:"quality",value:function(t){return t>=0&&t<=100?this.addOperation(l.QUALITY,t):this}},{key:"resize",value:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return this.dimOperation(l.RESIZE,...e)}},{key:"fit",value:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return this.dimOperation(l.FIT,...e)}},{key:"fitBySize",value:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return this.dimOperation(l.FIT_BY_SIZE,...e)}},{key:"crop",value:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return this.dimOperation(l.CROP,...e)}},{key:"fileType",value:function(e){if(!e||!this.file)return this;const r="".concat(this.file.substr(0,this.file.lastIndexOf(".")),".").concat(e);return new t(this.path,r)}},{key:"toString",value:,{key:"apply",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce(((t,e)=>{let[r,...s]=e;const a=c[r];return a?t[a](...s):t}),this)}},{key:"dimOperation",value:function(t,e,r){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=Math.round(e)||"",i=Math.round(r)||"";return a||i?this.addOperation(t,"".concat(a).concat(i?"x"+i:"").concat(s?"w":"")):this}},{key:"addOperation",value:function(e,r){return this.path?new t("".concat(this.path).concat(e,"/").concat(r,"/"),this.file):this}}]),t}();const f=t=>{const e=[l.CROP,l.RESIZE,l.FIT,l.FIT_BY_SIZE];for(const[r,s,a]of t)if(e.includes(r))return{width:s,height:a};return{width:0,height:0}}},563:function(t,e,r){"use strict";var s=r(521);const a={xs:{"1x":[["fi",30,30],["ft","jpg"],["qt",80]],"2x":[["fi",96,96],["ft","jpg"],["qt",45]]},s:{"1x":[["fi",60,60],["ft","jpg"],["qt",45]],"2x":[["fi",96,96],["ft","jpg"],["qt",45]]},m:{"1x":[["fi",60,60],["ft","jpg"],["qt",45]],"2x":[["fi",96,96],["ft","jpg"],["qt",45]]},l:{"1x":[["fi",60,60],["ft","jpg"],["qt",45]],"2x":[["fi",96,96],["ft","jpg"],["qt",45]]},xl:{"1x":[["fi",96,96],["ft","jpg"],["qt",45]],"2x":[["fi",192,192],["ft","jpg"],["qt",45]]},default:"/assets/img/profile-placeholder_09382.png"};var i={props:{user:{type:Object,required:!0},size:{validator:default:"s"}},computed:{avatarSrc(){return this.user.avatar?new s.a(this.user.avatar).apply(a[this.size]["1x"]).toString():a.default},avatarSrc2x(){return this.user.avatar?new s.a(this.user.avatar).apply(a[this.size]["2x"]).toString():a.default}}},n=r(45),l=Object(n.a)(i,(function(){var t=this;return(0,t._self._c)("img",{class:`img--type-entity img--square-${t.size}`,attrs:{src:t.avatarSrc,srcset:`${t.avatarSrc2x} 2x`,alt:t.user.username}})}),[],!1,null,null,null);e.a=l.exports},710:function(t,e,r){"use strict";r.r(e);var s=r(5),a=r(817),i=r(563),n=r(529),l=r(535),o=r(534),c=Object(s.defineComponent)({__name:"site-search-results-item-user",props:{suggestion:null,isHighlighted:{type:Boolean}},setup(t){const e=t,r=Object(s.computed)(();return{__sfc:!0,props:e,user:r,SearchResultsMediaLink:a.a,UserAvatar:i.a,UserPersona:n.a,SITE_SEARCH_RESULT_LABELS:l.a,SITE_SEARCH_HISTORY_LABELS:o.b,SITE_SEARCH_HISTORY_ITEM_TYPES:o.a}}}),u=r(45),f=Object(u.a)(c,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e(r.SearchResultsMediaLink,{directives:[{name:"track",rawName:"v-track:userLink.click",value:{id:r.user.userId},expression:"{ id: user.userId }",arg:"userLink",modifiers:{click:!0}}],attrs:{to:{name:"user.profile.overview",params:{username:r.user.username}},selected:t.isHighlighted,title:r.user.username,label:r.SITE_SEARCH_HISTORY_LABELS.USER,type:r.SITE_SEARCH_HISTORY_ITEM_TYPES.USER,payload:{user:r.user}},scopedSlots:t._u([{key:"media-left",fn:function(){return[e("BaseIcon",{staticClass:"space--mv-1 space--mh-1",attrs:{name:"search",width:"14",height:"14",color:"greyShade"}})]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"flex--grow-1 flex boxAlign-ai--all-bl overflow--hidden"},[e("span",{staticClass:"space--mr-1 text--b size--all-s text--color-charcoalTint"},[t._v(t._s(r.user.username))]),e(r.UserPersona,{staticClass:"space--mr-1 boxAlign-as--all-c",attrs:{user:r.user}}),e("span",{staticClass:"size--all-xs text--color-greyShade"},[t._v(t._s(r.SITE_SEARCH_RESULT_LABELS.USER))])],1)]},proxy:!0},{key:"media-right",fn:function(){return[e("div",{staticClass:"space--ml-2 img img--frame img--darken img--noBorder img--square-s img--type-entity"},[e(r.UserAvatar,{attrs:{user:r.user}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=f.exports},817:function(t,e,r){"use strict";var s=r(5),a=r(546),i=Object(s.defineComponent)({__name:"site-search-results-media-link",props:{selected:{type:Boolean},to:null,title:null,label:null,type:null,payload:null},setup(t){const e=t,r=Object(s.computed)((()=>{const{to:t,label:r,title:s,payload:a,type:i}=e;return{route:t,label:r,title:s,payload:a,type:i}}));return{__sfc:!0,props:e,historyItem:r,SearchHistoryTrigger:a.a}}}),n=r(45),l=Object(n.a)(i,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e(r.SearchHistoryTrigger,{attrs:{item:r.historyItem}},[e("RouterLink",{staticClass:"flex size--all-m boxAlign-ai--all-c autoSuggest-suggestion autoSuggest-suggestion--hoverHighlight space--v-2 space--h-3 clickable",class:{"autoSuggest-suggestion--selected":t.selected},attrs:{to:t.to}},[e("div",{staticClass:"flex--shrink-0 space--r-2 flex boxAlign-ai--all-c"},[t._t("media-left")],2),t._t("content"),e("div",{staticClass:"flex--shrink-0 flex boxAlign-ai--all-c"},[t._t("media-right")],2)],2)],1)}),[],!1,null,null,null);e.a=l.exports}}]);