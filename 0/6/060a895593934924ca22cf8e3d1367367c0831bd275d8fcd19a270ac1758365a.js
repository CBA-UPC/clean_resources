(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1112:1195:function(t,e,n){"use strict";n.r(e);n(12);var r=n(2),l=n(317),c=n(310),o=n(334),f=n(333),h=n(335),d={components:{Title:f.a,Post:l.a,Pagination:h.a,ContentList:o.a},mounted:asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,o,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.store,l={pl:"6734764137196256",en:"6734764749413056"},e.next=4,r.dispatch("articlesN2cr/getArticle",l[n.i18n.locale]);case 4:c=[{pl:"posiedzenia-inwestor",en:"general meetings",alias:"posiedzenia"}],"pl"===n.i18n.locale&&c.push({pl:"uchwaly-inwestor",alias:"uchwaly"}),o=0,f=c;case 7:if(!(o<f.length)){e.next=14;break}return h=f[o],e.next=11,r.dispatch("articlesN2cr/getCollection",{tag:h[n.i18n.locale],alias:h.alias});case 11:o++,e.next=7;break;case 14:return e.next=16,r.dispatch("dynamicConfig/updateConfig",{page:{info:{pl:{title:"Walne zgromadzenie",subtitle:"Posiedzenia, uchwały oraz zasady funkcjonowania"},en:{title:"General meeting",subtitle:"of Shareholders"}},imgUrl:"https://holding.wpcdn.pl/backgrounds/4.jpg"}});case 16:case"end":return e.stop()}}),e)})))()},head:function(){return Object(c.a)(this.$route.path,this.$t("seo.title"),this.$t("seo.desc"))},nuxtI18n:{paths:{en:"/investor/general-meeting-of-shareholders"}}},m=n(4),v=n(1112),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col-lg-12"},[t.$store.state.articlesN2cr.collections.posiedzenia?[n("Title",[t._v(t._s(t.$t("meetings")))]),t._v(" "),n("pagination",{attrs:{list:t.$store.state.articlesN2cr.collections.posiedzenia,pageSize:3},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.slotProps;return[n("content-list",{attrs:{articles:e.articles,linkUrlName:"inwestor-walne-zgromadzenie-id"}})]}}],null,!1,1110285372)})]:t._e(),t._v(" "),t.$store.state.articlesN2cr.collections.uchwaly?[n("Title",[t._v("Uchwały")]),t._v(" "),n("pagination",{attrs:{list:t.$store.state.articlesN2cr.collections.uchwaly,pageSize:3},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.slotProps;return[n("content-list",{attrs:{articles:e.articles,linkUrlName:"inwestor-walne-zgromadzenie-id"}})]}}],null,!1,1110285372)})]:t._e(),t._v(" "),n("Title",[t._v("Zasady działania")]),t._v(" "),n("post",{attrs:{size:12,"format-classes":"first-arrow second-disc third-disc"}})],2)])}),[],!1,null,null,null);"function"==typeof v.default&&Object(v.default)(component);e.default=component.exports},310:function(t,e,n){"use strict";e.a=function(path,title,t){return{title:title,link:[{rel:"canonical",href:"https://holding.wp.pl"+path}],meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t}]}}},312:function(t,e,n){},3}},3port      　\u2028\u2029\ufeff"},316:function(t,e,n){"use strict";n(312)},317:function(t,e,n){"use ste.state.articlesN2cr.article.htmlContent}},props:{size:{type:Number,default:function(){retu{type:String,default:function(){return""}}}},l=(n(316),n(4)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content center",class:"col-lg-"+this.size},[e("article",{staticClass:"single-post",attrs:{id:"blog"}},[e("div",{staticClass:"post-content",class:this.formatClasses,domProps:{innerHTML:this._s(this.htmlContent)}})])])}),[],!1,null,"7c134cbe",null);e.a=component.exports},322:fu3:function(t,e,n){},324:function(t,e,n){},330:function(t,e,n){"use strict";n(322)},331,332:function(t,e,n){"use strict";n(324)},333:function(t,e,n){"use strict";var r={props:["isCenter"]},l=(n(330),n(4)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading-text heading-line",class:{"text-center":this.isCenter}},[e("h4",[this._t("default")],2)])}),[],!1,null,"4139c20a",null);e.a=component.exports},334:function(t,e,n){"use strict";var r=n(41),l=n(103),c={components:{Linker:r.a},props:["arction(){return{getDateFromTimestamp:l.a}}},o=(n(331),n(4)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.articles&&t.articles.length>0?n("div",{staticClass:"list-group"},t._l(t.articles,(function(e,r){return n("linker",{key:r,staticClass:"list-group-item list-group-item-action flex-column align-items-start",class:{active:e.active,"with-button":e.button},attrs:{link:{url:t.linkUrlName?{name:t.linkUrlName,params:{id:e.article.slug+"-"+e.article.id}}:null}}},[n("div",{staticClass:"d-flex w-100 justify-content-between"},[e.button&&e.button.link&&e.button.link.calendarTitle?n("h5",{staticClass:"mb-1"},[t._v(t._s(e.button.link.calendarTitle))]):n("h5",{staticClass:"mb-1"},[t._v(t._s(t.getDateFromTimestamp(e.article.publishedFrom)))]),t._v(" "),n("small",[t._v(t._s(e.small))])]),t._v(" "),n("p",{staticClass:"mb-1 ellipsis",domProps:{innerHTML:t._s(e.button&&e.button.link&&e.button.link.calendarName?e.button.link.calendarName:e.article.name)}}),t._v(" "),t.linkUrlName?n("small",[t._v("Zobacz więcej >")]):t._e(),t._v(" "),e.button?n("linker",{staticClass:"btn btn-sm btn-light",class:{"btn-slide":t.$device.isDesktop},attrs:{link:e.button.link,"data-width":t.buttonWidth}},[n("i",{class:e.button.icon}),t._v(" "),n("span",[t._v(t._s(e.button.text))])]):t._e()],1)})),1):t._e()])}),[],!1,null,"183d8eae",null);e.a=component.exports},335:function(t,e,n){"use strict";n(22),n(313);var r={props:{list:Array,pageSize:{type:Number,default:6}},data:function(){return{activePage:1,listLength:this.list.length,pagesCount:Math.ceil(this.listLength/this.pageSize),chunkedList:this.chunkArray(thieturn this.chunkedList[this.activePage-1]}},methods:{changePage:function(t){if("prev"===t){if(this.activePage<2)return!1;this.activePage-=1}else if("next"===t){if(this.activePage>this.chunkedList.length-1)return!1;this.activePage+=1}else this.activePage=t},chunkArray:function(t,e){var n=0,r=t.length,l=[];for(n=0;n<r;n+=e)l.push(t.slice(n,n+e));return l}}},l=(n(332),n(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list&&t.list.length?n("div",[t._t("default",null,{slotProps:{articles:t.articles}}),t._v(" "),t.chunkedList.length>1?n("ul",{staticClass:"pagination pagination-flat"},[n("li",{staticClass:"page-item",class:{disabled:t.activePage<2},on:{click:function(e){return t.changePage("prev")}}},[t._m(0)]),t._v(" "),t._l(t.chunkedList.length,(function(i){return n("li",{key:i,staticClass:"page-item"{click:function(e){return t.changePage(i)}}},[n("span",{staticClass:"page-link"},[t._v(t._s(i))])])})),t._v(" "),n("li",{staticClass:"page-item",class:{disabled:t.ack:function(e){return t.changePage("next")}}},[t._m(1)])],2):t._e()],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"page-link"},[("i",{staticClass:"fa fa-angle-right"})])}],!1,null,"ing principles"}}'),delete t.options._Ctor}}}]);