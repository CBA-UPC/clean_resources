(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1911:�ромо-рахунку","При списании уровней произошла ошибка":"При нарахуванні рівнів виникла помилка","При начислении уров�ибка":"При нарахуванні рівнів сталася помилка","Недостаточно средств для начисления уровней ТОП":"На промо-раухнку недостатньо рівнів для нарахування","Сотрудник":"Працівник","Остаток":"Залишок","Снять":"Зняти","Начислить":"Нарахувати","Количество":"Кількість","Пригласить":"Запросити","уровней":"рівнів","Не указано количество уровней":"Не вказано кількість рівнів","Не указан ID пользователя":"Не вказаний ID користувача","Wrong type":"Неправильный тип операции"}}'),delete e.options._Ctor}},2105:function(e,t,s){"use strict";s.r(t);var i=s(40),a=s(639),n={name:"levels",props:["employees"],data:function(){return{spinner:!1,levels:{},employeesMutable:[],isAdvNameShowUserId:!1}},watch:{employeesMrocess:function(e){var s=this,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"add",t=(this.spinner=!0,"/ajax/"+("add"===i?"addpromotions":"takeawaypromotions")),a=new FormData;a.append("id",e),a.append("levels",this.levels[e]),this.$http.post(t,a,{headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"}}).then(function(e){var t;s.spinner=!1,e.data&&"ok"===e.data.status&&(s.$root.$toastr("success",s.$i18n.t("addLevelsSuccess")),s.getLevels(),s.$store.dispatch("getUserBalance")),"error"===e.data.status&&(t="add"===i?"начислении":"списании",t=s.$i18n.t("При "+t+" уровней произошла ошибка"),e=s.$i18n.t(e.data.msg),s.$root.$toastr("error",t+": "+e))}).catch(function(e){s.spinner=!1,console.log("err",e)})},getLevels:function(){var a=this;this.spinner=!0,Object(i.j)().then(function(e){var i;a.spinner=!1,e.data&&e.data.levels&&(i=e.data.levels,a.employeesMutable.forEach(function(e,t){var e=Number(e.user_id),s=i[e]||0;a.$set(a.employeesMutable[t],"levels",s),a.levels[e]=1}))}).catch(function(e){a.spinner=!1,console.log("err",e)})}},created:function(){this.employeesMutable=this.employees,this.isAdvNameShowUserId=this.$store&&this.$store.getters.userId&&Object(a.b)(+this.$store.getters.userId)}},l=s(4),l=Object(l.a)(n,function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{staticClass:"head"},[i("div",{directives:[{name:"show",rawName:"v-show",value:s.spinner,expression:"spinner"}],staticClass:"preloader photo-"}),s._v(" "),i("table",{staticClass:"t-manage-pub"},[i("tbody",[0<s.employees.length?i("tr",{staticClass:"mhide"},[i("th",{staticClass:"text-l size12"},[s._v(s._s(s.$t("Сотрудник")))]),s._v(" "),i("th",{staticClass:"text-l size12"},[s._v(s._s(s.$t("Остаток"))+" "),i("br"),s._v(" "+s._s(s.$t("уровней"))+" ТОП")]),s._v(" "),i("th",{staticClass:"text-l size12"},[s._v(s._s(s.$t("Количество"))+" "),i("br"),s._v(" "+s._s(s.$t("уровней"))+" ТОП")])]):i("tr",[i("td",{staticStyle:{padding:"0"},attrs:{colspan:"5"}},[i("div",{staticClass:"info middle"},[i("i",{staticClass:"alert-info"}),s._v(" "),i("div",{staticClass:"message"},[i("div",{staticClass:"span4 i-block middle mr-5 mb-0"},[i("div",{staticClass:"mb-5 mt-5�ригласили ни одного сотрудника"))+"\n                            ")])]),s._v(" "),i("div", mb-0 ml-15"},[i("router-link",{staticClass:"button _blue large",attrs:{to:{name:"myagents"}}},[s._v("\n                                "+                   ")])],1)])])])]),s._v(" "),s._l(s.employeesMutable,function(t,e){return i("tr",[i("td",[i("div",[s._v(s._s(s.isAdvNameShowUserId&&t.advertising_name||t.name))]),s._v(" "),i("div",{staticClass:"grey size13"},[s._v(s._s(t.email))])]),s._v(" "),i("td",s:"dhide size13"},[s._v(s._s(s.$t("Остаток"))+" "),i("br")]),s._v(" "+s._s(t.levels))]),s._v(" "),i("td",[i("div",{staticClass:"dhide size13"},[s._v(s._s(s.$t("Количество"))+" "+s._s(s.$t("уровней")))]),s._v(" "),i("div",{staticClass:"table"},[i("div",{staticClass:"t-cell middle"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.levels[t.user_id],expression:"levels[employee.user_id]"}],staticClass:"number",attrs:{type:"number",min:"1",max:"999"},domProps:{value:s.levels[t.user_id]},on:{input:function(e){e.target.composing||s.$set(s.levels,t.user_id,e.target.value)}}})]),s._v(" "),i("div",{staticClass:"t-cell middle"},[i("span",{staticClass:"link-dotted size13 blue ml-10",on:{click:function(e){return s.process(t.user_id)}}},[s._v(s._s(s.$t("Начислить")))]),s._v(" "),i("span",{staticClass:"link-dotted size13 blue ml-10",class:{"v-hidden":!t.levels},on:{click:function(e){return s.process(t.user_id,"off")}}},[s._v(s._s(s.$t("Снять")))])])])])])})],2)])])},[],!1,null,null,null),n=s(1911);n&&n.__esModule&&(n=n.default),"function"==typeof n&&n(l),t.default=l.exports},639:function(e,t,s){"use strict";s.d(t,"c",function(){return n}),s.d(t,"b",function(){return l}),s.d(t,"a",function(){return d}),s(12);var i=[1366179,634101,3354800,4223593,4050480,2098764,4801606,1265482,2281265,4352246,3458533,2471525,4566101,1936563,2881289,3077770,1536360,7238132,8462787,8668787,7761237,8550053,7761243,4123977,10039232,10537585,10214485,4178175,7766982,9922614,9761141,10548392,2496142,9758679],a=[7198206,2202802,12326925,12326699,12400971,12401293].concat([]).concat([1366179]);function n(e){return-1<i.indexOf(Number(e))}function l(e){return-1<a.indexOf(Number(e))}var o=!1,r=!1;function d(e){var t,s;return window&&!o?(t=new Image,s=function(){r=2===t.height,o=!0,e&&e(r)},t.onload=s,t.onerror=s,t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"):e&&e(r),{isWebpChecked:o,isWebpSupported:r}}}}]);