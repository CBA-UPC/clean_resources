(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1032:1118:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(256),c=n(252),l={components:{Post:r.a},mountedasyncData:t=>Object(o.a)((function*(){var{app:e,store:n}=t;yield n.dispatch("articlesN2cr/getArticle",{pl:"6734760785844928",en:"6734761322195648"}[e.i18n.locale]),yield n.dispatch("dynamicConfig/updateConfig",{page:{info:{pl:{title:"Biegły rewident"},en:{title:"Auditor"}},imgUrl:"https://holding.wpcdn.pl/backgrounds/25.jpg"}})}))(),head(){return Object(c.a)(this.$route.path,this.$t("seo.title"),this.$t("seo.desc"))},nuxtI18n:{paths:{en:"/investor/auditor"}}},d=n(3),h=n(1032),component=Object(d.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("post",{attrs:{size:10,"format-classes":"first-arrow second-arrow third-arrow"}})}),[],!1,null,null,null);"function"==typeof h.default&&Object(h.default)(component);e.default=component.exports},252:function(t,e,n){"use strict";e.a=(path,title,t)=>({title:title,link:[{rel:"canonical",href:"https://holding.wp.pl"+path}],meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t}]})},254,255,256:function(t,e,n){"use strict";var o={computed:{htmlConten},props:{size:{type:Number,default:()=>8},formatClasses:{type:String,default}}},r=(n(255),n(3)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content center",class:"col-lg-"+this.size},[e("article",{staticClass:"single-post",attrs:{id:"blog"}},[e("div",{staticClass:"post-content",class:this.formatClasses,domProps:{innerHTML:this._s(this.htmlContent)}})])])}),[],!1,null,"7c134cbe",null);e.a=component.exports},332}}}]);