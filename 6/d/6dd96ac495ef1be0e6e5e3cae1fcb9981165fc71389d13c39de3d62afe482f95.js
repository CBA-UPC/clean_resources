(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1497:function(e,t,n){var s=n(1498),e=(s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals),n(11).default);e("3cea1594",s,!0,{})},1498:function(e,t,n){t=e.exports=n(10)(!1),t.i(n(943),""),t.push([e.i,"",""])},1499:�полнение":"Покращити наповнення","Заказать проверку недвижимости":"Замовити �e e.options._Ctor}},2087:function(e,t,n){"use strict";n.r(t);var s=n(9),a=n.n(s),s=n(640),r=n(664),i=n(121),o=n(40),s={name:"AgencyRank",components:{ProgressBar:funvgIconChecked:s.a,SvgIco2200,bonusRate:200,marks:{},total:0,minNecessary:1200,activeIndex:0}},metaInfН"}},computedaryProgress<=this.progress},progress:function(){return this.total/this.maxRank*100},minNecessaryProgress:function(){return this.minNecessary/this.maxRank*100},necessaryLeft:function(){return this.minNecessary-this.total},actions:function(){return{admin_phones_approved:{route:{name:"editprofile"},name:this.$t("Редактировать")},description_rate:{route:{name:"myagency"},name:this.$t("Редактировать")},logo_rate:{route:{name:"myagency"},name:this.$t("Редактировать")},users_rate:{route:{name:"agencyrealtorview",params:{id:this.$store.getters.agencyId,lang:this.$root.langCode,type:"agency"}},name:this.$t("Смотреть оценки")},inspections:{href:"/"+this.$root.langCode+"/inspected-promo/",name:this.$t("Заказать проверку недвижимости")},avg_realty_quality:{route:{name:"published",query:{sort:"q_d"}},name:this.$t("Улучшить наполнение")},missed_calls:{href:"/"+this.$root.langCode+"/calls.html",name:this.$t("Подробнее о «Звонках»")}}},getVerifiedSince:function(){var e=this.$store.getters.agency&&this.$store.getters.agency.verified_since?this.$store.getters.agency.verified_since:null;return Object(i.b)(e,this.$root.langId)}},methods:{toggleItem:function(e){this.$set(this.marks[e],"collapsed",!this.marks[e].collapsed)},fetchAgencyRank:function(){var t=this;return Object(o.s)(this.$store.gettendingCRMFromLetterRedirect:function(){try{var e,t=this.$route.query.userIdentification;t&&"1005"===t&&(e=a()({},this.$route.query),delete e.userIdentification,this.$router.replace({query:e}))}catch(e){console.log("sendingCRMFromLetterRedirect with  err",e)}}},mounted:function(){this.fetchAgencyRank(),this.sendingCRMFromLetterRedirect()}},r=n(4);r=Object(r.a)(s,function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("div",{staticClass:"with_loader head userRatePage agency"},[s("div",{directives:[{name:"show",rawName:"v-show",value:n.loader,expression:"loader"}],staticClass:"preloader photo-"}),n._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!n.loader,expression:"!loader"}],class:["userRate mb-20",{checkedStatus:n.minNecessaryProgress<=n.progress}]},[s("div",{staticClass:"flex f-space f-baseline bold size18 mb-20"},[s("span",{staticClass:"size24"},[n._v("Рейтинг агентства")]),n._v(" "),n.$root.isMobile?n._e():s("a",{staticClass:"unlink bold-500 size16 i-flex f-center",attrs:{href:"https://help.ria.com/"+n.$root.langCode+"/index.php?/Knowledgebase/Article/View/676/134#start_content",title:n.ti("Сортировка в каталоге «Агентства недвижимости»","Сортування в каталозі «Агентства нерухомості»"),target:"_blank"}},[n._v("\n                "+n._s(n.ti("Как работает Рейтинг агентства","Як працює Рейтинг агентства"))+"\n                "),s("svg",{staticClass:"ml-5",attrs:{width:"16",height:"16"}},[s("use",{attrs:{"xlink:href":"#svg_link_toright_arrow"}})])])]),n._v(" "),s("progressBar",{attrs:{progress:n.progress,checked:n.checkedStatus}}),n._v(" "),s("div",{staticClass:"mt-10 size14 rateProgressWrap"},[s("b",{staticClass:"size20"},[n._v(n._s(n._f("formattedNumber")(n.total)))]),n._v(" "+n._s(n.ti("из","із"))+" "+n._s(n._f("formattedNumber")(n.maxRank+n.bonusRate))+"\n\n            "),s("span",{staticClass:"checkedIconWrap",style:{left:n.minNecessaryProgress+"%"}},[s("svg",{staticClass:"checkedIcon",class:{active:n.minNecessaryProgress<=n.progress},attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1 2c3 0 7-2 7-2s4 2 7 2v3c0 6-3 9-7 11-4-2-7-5-7-11V2Z",fill:"#000"}}),s("path",{attrs:{d:"M4.75 7.25 7 9.5l4.75-4.75",stroke:"#fff","stroke-width":"2"}})])])]),n._v(" "),n.$store.getters.agency&&n.$store.getters.agency.has_documents&&n.$store.getters.agency.verified_since&&n.necessaryLeft<=0?s("div",{staticClass:"flex f-center mt-15 size14"},[s("span",{staticClass:"label-hot checked"},[s("svg",{staticClass:"mr-5",attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1 2c3 0 7-2 7-2s4 2 7 2v3c0 6-3 9-7 11-4-2-7-5-7-11V2Z",fill:"#000"}}),s("path",{attrs:{d:"M4.75 7.25 7 9.5l4.75-4.75",stroke:"#fff","stroke-width":"2"}})]),n._v(" "),s("span",[n._v("Перевірене агентство")])]),n._v(" "),s("span",{staticClass:"ml-5"},[n._v(n._s(n.ti("c","з"))+" "+n._s(n.getVerifiedSince))])]):n._e(),n._v(" "),[0<n.necessaryLeft?s("div",{staticClass:"mt-15 size16"},[n._v("\n                "+n._s(n.ti("Воспользуйтесь рекомендациями и наберите еще","Скористайтеся рекомендаціями та наберіть ще"))+" "+n._s(n.$tc("points",n.necessaryLeft))+", "+n._s(n.ti("чтобы ваша компания смогла получить статус","щоби ваша компанія змогла отримати статус"))+"\n                "),s("a",{staticClass:"unlink i-flex f-center bold-500",attrs:{href:"https://help.ria.com/index.php?/Knowledgebase/Article/View/676/134#start_content",target:"_blank"}},[n._v("\n                    «Перевіреного агентства»\n                    "),s("svg",{attrs:{width:"16",height:"16"}},[s("use",{attrs:{"xlink:href":"#svg_link_toright_arrow"}})])])]):[n.marks.documents.value?n._e():s("div",{staticClass:"mt-15 size16"},[s("div",{staticClass:"mb-10"},[n._v("\n                        "+n._s(n.ti("Ваша компания в шаге от статуса «Перевірене агентство». Отправьте копии документов компании, подтверждающих ведение ее деятельности, на email ","Ваша компанія за крок до статусу «Перевірене агентство». Надішліть копії документів компанії, які п�я її діяльності, на email "))+"\n                        "),s("a",{staticClass:"unlink i-flex f-center bold-500",attrs:{href:"mailto:info_dimria@dim.ria.com"}},[n._v("\n                            info_dimria@dim.ria.com\n                            "),s("svg",{staticClass:"ml-5",attrs:{width:"16",height:"16"}},[s("use",{attrs:{"xlink:href":"#svg_link_toright_arrow"}})])]),n._v(" "),s("br"),n._v(" "+n._s(n.ti("В теме письма обязательно укажите название агентства и ваш клиентский номер (ID на DIM.RIA)","В темі листа обов'язково вкажіть назву агентства та ваш клієнтський номер (ID на DIM.RIA)"))+".\n                    ")])])]]],2),n._v(" "),n._l(n.marks,function(e,t){return s("div",{key:t,class:["criterionRate",n.$root.isMobile?"mb-15":"mb-10",{activeCriterion:e.value!==e.max}]},[s("div",{class:["userRateFlex",e.value===e.max?"disabled":"pointer"],on:{click:function(e){return n.toggleItem(t)}}},[s("div",{staticClass:"flex"},[s("SvgIconArrowChecked",{class:["mr-10 mW-16",{unActive:e.value!==e.max}],attrs:{isOnlyBlackSign:!0}}),n._v(" "),s("span",{staticClass:"size18 bold-500"},[n._v(n._s(e["title_"+n.$root.langCode]))])],1),n._v(" "),s("div",{class:["flex f-end mW-105",n.$root.isMobile?"pt-4":"f-center"]},[s("b",{staticClass:"size16 nowrap"},[n._v(n._s(e.value||0)+" "+n._s(n.ti("из","із"))+" "+n._s(e.max||0))]),n._v("arrowSvg ml-5",{open:e.collapsed},{unVisible:e.value===e.max}],attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M3.5 6 8 10.5 12.5 6",stroke:"#000","stroke-width":"2"}})])])]),n._v(" "),s("div",{staticClass:"criterionRateDescription",class:{open:e.collapsed}},[s("div",{staticClass:"size16",domProps:{innerHTML:n._s(e["description_"+n.$root.langCode])}}),n._v(" "),n.actions[t]?s("div",{class:["flex f-space mt-10",n.$root.isMobile?"f-column":""]},[n.actions[t].route?s("router-link",{staticClass:"i-flex f-center f-text-c button-border w50d bold-500",attrs:{to:n.actions[t].route,target:"_blank"}},[n._v("\n                    "+n._s(n.actions[t].name)+"\n                ")]):n.actions[t].href?s("a",{class:["i-flex f-center f-text-c button-border w50d bold-500",n.$root.isMobile?"mt-151":"ml-101"],attrs:{href:n.actions[t].href,target:"_blank"}},[n._v("\n                    "+n._s(n.actions[t].name)+"\n                ")]):n._e()],1):n._e()])])})],2)},[],!1,function(e){n(1497)},null,null),s=n(1499);s&&s.__esModule&&(s=s.default),"function"==typeof s&&s(r),t.default=r.exports},633:function(e,t,n){"use strict";n=n(4),n=Object(n.a)({name:"SvgIconBase",props:{svgSprite:{default:!1},id:{default:""},className:{default:"i-block middle"},width:{default:16},height:{default:16},fill:{default:"none"},svgFill:{default:"none"},viewBox:{default:"0 0 16 16"},stroke:{default:""},strokeWidth:{default:""}}},function(){var e=this,t=e.$createElement,t=e._self._c||t;return e.svgSprite?t("symbol",{attrs:{id:e.id,viewBox:e.viewBox}},[e._t("default")],2):t("svg",{class:e.className,attrs:{width:e.width,height:e.height,fill:e.svgFill,xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox}},[e._t("default")],2)},[],!1,null,null,null);t.a=n.exports},640:function(e,t,n){"use snWrap .checkedIcon:not(.active){\n    opacity: .2;\n}\n.userRate .checkedIconWrap{\n    position: absolute;\n    margin-left: -13px;\n}\n.userRate .checkedIconWrap:after{\n    position: absolute;\n    top: -14px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: #C7E4FA;\n    border-radius: 20px;\n    content: ''\n}\n.userRateFlex{\n    display: flex;\n    justify-content: space-between;\n    padding: 15px 20px;\n}\n.userRateFlex .arrowSvg{\n    transition: transform .2s ease-in-out;\n}\n.userRateFlex .arrowSvg.open{\n    transform: rotate(-180deg);\n}\n.userRateFlex .grey{\n    width: 80px;\n    text-align: right;\n}\n.userRateFlex .ml-20{\n    display: block;\n    margin-left: 20px;\n}\n.userRateFlex .fl-l{\n    margin-top: 2px;\n}\n.userRateFlex .description {\n    margin-top: 15px;\n    flex: 2;\n    text-align: left;\n}\n@media (max-width: 480px) {\n    .userRatePage .refine-search + .refine-search{\n        margin-top: 10px\n    }\n    .m100{\n        width: 100%;\n        box-sizing: border-box;\n    }\n}\n",""])}}]);