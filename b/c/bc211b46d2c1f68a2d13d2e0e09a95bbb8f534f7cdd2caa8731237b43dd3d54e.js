(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1140:function(t,e,n){"use strict";n(635)},1141:1204:function(t,e,n){"use strict";n.r(e);n(12);var r=n(2),o=n(317),c=n(310),l={components:{Post:o.a},mounted:function(){var t=this;this.$store.dispatch("configuratorN2cr/setTitleFromConfig",!1),setTimeout((function(){if(t.$route.query.rodo&&window&&window.WP&&window.WP.gdpr)switch(t.$route.query.rodo){case"plansza":window.WP.gdpr.showConsentForm();break;case"zaawansowane":window.WP.gdpr.showConsentForm(!0,"settings");break;case"zaufaniIAB":window.WP.gdpr.showConsentForm(!0,"partners");break;case"zgodyIAB":window.WP.gdpr.showConsentForm(!0,"settings:scrollToIABCheckbox")}}),200)},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,n=t.store,"6946323733691232",e.next=4,n.dispatch("articlesN2cr/getArticle","6946323733691232");case 4:return e.next=6,n.dispatch("dynamicConfig/updateConfig",{page:{info:{pl:{title:"Termenii și condițiile de utilizare a portalului Wirtualna Polska"},en:{title:"Termenii și condițiile de utilizare a portalului Wirtualna Polska"}},imgUrl:"https://holding.wpcdn.pl/backgrounds/21.jpg"}});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return Object(c.a)(this.$route.path,this.$t("seo.title"),this.$t("seo.desc"))},computed:{media:function(){return this.$store.state.articles.art.media},content:function(){return this.$store.state.articles.art.content}},methods:{showR()}}},d=(n(1140),n(4)),f=n(1141),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col-lg-12 post-item"},[n("div",{staticClass:"confidential-description content center col-lg-10"},[n("article",{staticClass:"single-post",attrs:{id:"blog"}},[n("post",{attrs:{size:10,"format-classes":"first-disc second-number third-number"}}),t._v(" "),n("br"),t._v(" "),n("hr"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"post-item"},[n("div",{staticClass:"post-item-wrap"},[n("div",{staticClass:"post-item-description"},[n("div",{staticClass:"post-content text-center"},[n("h3",{staticClass:"lead"},[t._v("Moje dane i zgody")]),t._v(" "),n("a",{staticClass:"btn btn-lg",on:{click:t.showRodo}},[t._v("zarządzaj zgodami")])])])])])],1)]),t._v(" "),t._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{id:"scrollTop"}},[e("i",{staticClass:"icon-chevron-up"}),e("i",{staticClass:"icon-chevron-up"})])}],!1,null,"5334ee80",null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports},310:function(t,e,n){"use strict";e.a=function(path,title,t){return{title:title,link:[{rel:"canonical",href:"https://holding.wp.pl"+path}],meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t}]}}},312:function(t,e,n){}C)}}expo���"},316:function(t,e,n){"use strict";n(312)},317:function(t,e,n){"use ore.state.articlesN2cr.article.htmlContent}},props:{size:{type:Number,default:function(){res:{type:String,default:function(){return""}}}},o=(n(316),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content center",class:"col-lg-"+this.size},[e("article",{staticClass:"single-post",attrs:{id:"blog"}},[e("div",{staticClass:"post-content",class:this.formatClasses,domProps:{innerHTML:this._s(this.htmlContent)}})])])}),[],!1,null,lui }}'),delete t.options._Ctor}},635:function(t,e,n){}}]);