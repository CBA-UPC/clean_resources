(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1011:function(t,e,r){"use strict";r(411)},1012:1098:function(t,e,r){"use strict";r.r(e);var o=r(252),n=r(2),l=r(290),d=(r(604),{data:()=>({errors:{},sendStatus:null,sendStatuses:{waiting:"Trwa upload...",success:"Upload zakończony sukcesem",error:"Wystąpił błąd podczas uploadu",errorDuplicated:"Plik o takiej nazwie już istnieje"},fileTip:"Nie wybrano pliku"}),mounted(){this.validator=new l.a(this.$el,{upload:{file:{count:{max:1},size:{max:11e7}}}})},methods:{send(){var t=this;return Object(n.a)((function*(){if(!(yield t.$axios.get("https://holding.wpcdn.pl/uploader/".concat(t.fileTip)).then(e=>(200===e.status&&(t.sendStatus=t.sendStatuses.errorDuplicated),200===e.status)).t=>!1))){t.sendStatus=t.sendStatuses.waiting;var e=new FormData;e.append("file",t.$refs.inputFile.files[0]),t.$axios.post("/upload",e,{headers:{"Content-Type":"multipart/form-data"},maxContentLength:1/0,maxBodyLength:1/0}).then(e=>{200===e.status?(t.sendStatus=t.sendStatuses.success,t.fileTip=e.data.fileName):t.sendStatus=t.sendStatuses.error}).rror})}}))()},onFileChange(t){switch(this.sendStatus=null,t.target.files.length){case 0:this.fileTip="Nie wybrano pliku";break;case 1:this.fileTip=t.target.files[0].name;break;default:this.fileTip="Liczba plików: "+t.target.files.length}},validate(t){this.errors=this.validator.validate(),this.validator.oate()}),this.validator.isValid()||(t.preventDefault(),t.stopPropagation(),window.jQuery&&this.$el.offsetTop&&$("html, body").animate({scrollTop:$(this.$el).offset().top-100},400))}}}),c=(r(1011),r(3)),m={components:{FormUpload:Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{id:"form-upload",enctype:"multipart/form-data"}},[r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-lg-12 mt-3"},[r("h3",[t._v("Upload plików na holding.wpcdn.pl")]),t._v(" "),r("small",{staticClass:"form-text text-muted mb-3"},[t._v("Możesz dodać 1 plik, do 100 MB.")]),t._v(" "),r("div",{staticClass:"upload-wrapper"},[r("label",{staticClass:"upload-label btn btn-sm mb-0",attrs:{for:"file"}},[t._v("Wybierz plik")]),t._v(" "),r("input",{ref:"inputFile",staticClass:"upload-input",attrs:{name:"upload",id:"file",type:"file",size:"150"},on:{change:t.onFileChange}}),t._v(" "),r("div",{staticClass:"uploadTip"},[t._v(t._s(t.fileTip))])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.upload,expression:"errors.upload"}],staticClass:"error"},t._l(t.error_s(e))])})),0)])]),t._v(" "),r("div",{staticClass:"submit btn btn-sm",on:guments)}}},[r("div",{on:{click:t.send}},[t._v("wyślij")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.sendStatus,expression:"sendStatus"}],staticClass:"status",class:{success:t.sendStatus===t.sendStatuses.success,failure:t.sendStatus===t.sendStatuses.error}},[t._v(t._s(t.sendStatus))]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.sendStatus===t.sendStatuses.success,expression:"sendStatus === sendStatuses.success"}]},[r("br"),t._v("Plik dostępny pod adresem: \n    "),r("a",{attrs:{href:"https://holding.wpcdn.pl/uploader/"+t.fileTip,target:"_blank"}},[t._v("\n      "+t._s("https://holding.wpcdn.pl/uploader/"+t.fileTip)+"\n    ")])])])}),[],!1,null,"7c9a5a80",null).exports},middleware:["auth"],asyncData(t){var{route:e,store:r}=t;return r.dispatch("dynamicConfig/updateConfig",{page:{info:{pl:{title:"Dragon Disk Online"}},imgUrl:"https://holding.wpcdn.pl/backgrounds/21.jpg"}})},head(){return Object(o.a)(this.$route.path,"Upload","Dragon Disk Online")}},h=(r(1012),Object(c.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"content col-lg-8 center"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("FormUpload")],1)])])])}),[],!1,null,null,null));e.default=h.exports},252:function(t,e,r){"use strict";e.a=(path,title,t)=>({title:title,link:[{rel:"canonical",href:"https://holding.wp.pl"+path}],meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t}]})},290:function(t,e,r){"use strict(){return o}));r(67),r(7),r(6);class o{constructor(t,e){this.form=void 0,this.options=void 0,this.formData=void 0,this.errors={},this.observing=!1,this.validated=!1,this.ERRORS={required:{text:"To pole jest wymagane",other:"Proszę wybrać jedną z dostępnych opcji"},email:"Niepoprawny adres email",length:{min:"Zbyt mała ilość znaków. Minimum:",max:"Przekroczona maksymalna ilość znaków:"},files:{count:"Zbyt duża ilość załączników. Maksymalna ilość to",name:"Zbyt długa nazwa pliku",size:"Zbyt duży rozmiar pliku. Maksymalny rozmiar to",type:"Niedozwolony typ pliku"}},this.commonMimetypes=["application/pdf","image/jpeg","image/jpg","image/gif","image/png","video/mp4","video/mpeg","video/mkv","video/mov","audio/mp3","application/msword","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.wordprocessingml.template","application/vnd.ms-word.document.macroEnabled.12","application/vnd.ms-word.template.macroEnabled.12","application/vnd.ms-excel","application/vnd.ms-excel","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.spreadsheetml.template","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel.template.macroEnabled.12","application/vnd.ms-excel.addin.macroEnabled.12","application/vnd.ms-excel.sheet.binary.macroEnabled.12","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.presentationml.template","application/vnd.openxmlformats-officedocument.presentationml.slideshow","application/vnd.ms-powerpoint.addin.macroEnabled.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.template.macroEnabled.12","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],this.form=t,this.options=e,this.defender()}observe(t){this.validated&&!this.observing&&(this.form.addEventListener("change",e=>{var r=e.target.name;return"file"===e.target.type?(this.formData.delete(r),Ach(t=>{this.formData.append(r,t)})):"checkbox"===e.target.type?this.formData.set(r,e.target.checked):this.formData.set(r,e.target.value),this.runValidationsForName(r),t&&t(this.errors)}),this.observing=!0)}defender(){this.observer=new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&"value"===e.attributeName&&("OPTION"!==e.target.nodeName&&"radio"!==e.target.type||(this.observer.disconnect(),e.target.setAttribute(e.attributeName,e.oldValue),t()))})});var t=()=>{this.observer.observe(this.form,{attributes:!0,childList:!0,subtrroy(){this.observer.disconnect()}validate(){return this.validated=!0,this.formData=new FormData(this.form),Object.entries(this.options).forEach(t=>{var[e,r]=t;this.runValidatject.entries(this.errors).length}runValidationsForName(t){this.resetErrors(t),Object.entries(this.options[t]).forEach(e=>{var[r,o]=e;this[r]&&this[r](tresetErrors(t){this.errors[t]=[]}getErrors(){return this.errors}setError(t,e){-1===this.errors[t].itFormData(){return this.formData}removeEmptyErrorKey(t){this.errors[t].length||delete this.errors[t]}required(t){var e=this.formData.get(t);if(null===e){var input=this.form.querySelectorAll('[name="'.concat(t,'"'));1===input.length&&"checkbox"===input[0].type?this.setError(t,this.ERRORS.required.text):this.setError(t,this.ERRORS.required.other)}else("false"===e||"string"==typeof e&&0===e.length)&&this.setError(t,this.ERRORS.required.text)}email(t){var e=this.formData.get(t),r=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);e&&e.length&&!r.test(String(e))&&this.setError(t,this.ERRORS.email)}length(t,e){var r=e.min||0,o=e.max||12e3,n=this.formData.get(t);n&&(n.length>o?this.setError(t,"".concat(this.ERRORS.length.max," ").concat(o)):n.length<r&&this.setError(t,"".concat(this.ERRORS.length.min," ").concat(r)))}file(t,e){var r=[],o=e.count.max||20,n=e.size.max||5e7,l=e.types||this.commonMimetypes;for(var p of this.formData)p[0]===t&&r.push(p[1]);r.length&&r[0].size>0&&(r.length>o&&this.setError(t,"".concat(this.ERRORS.files.count," ").concat(o)),Array.from(r).forEach(e=>{e.size>n&&this.setError(t,"".concat(this.ERRORS.files.size," ").concat(o/1e6," mb")),e.name.length>100&&this.setError(t,this.ERRORS.files.name),-1===l.indexOf(e.type)&&this.setError(t,s.type)}))}}},320:functionon(t,e,r){},412:function(t,e,r){}}]);