(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{2072:function(t,e,a){"use strict";a.r(e);var i=a(8),s=a.n(i),i={name:"editpassword",metaInfo:тановление пароля"}},data:function(){return{isLogined:!0,data:{},url:"https://login.ria.com/edit-password/2/"+this.$root.langId+"/1",iframeHeight:465}},computed:{routeLang:function(){return this.url="https://login.ria.com/edit-password/2/"+this.$root.langId+"/1",this.url}},watch:{routeLang:function(){this.showChangePassBlock()}},methods:{receiveMessage:function(t){if(t.origin.match(/ria\.com/)){if(t.preventDefault(),t.stopPropagation(),"object"===s()(t.data))this.data=t.data;else if("string"==typeof t.data)try{this.data=JSON.parse(t.data),this.data.height&&Number(this.data.height)&&(this.iframeHeight=Number(this.data.height))}catch(t){console.log("error",t)}}else console.log("Error Br("messagnction(){this.ener("message",this.receiveMessage)}},a=a(4),a=Object(a.a)(i,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"m-padding"},[e("iframe",{attrs:{width:"100%",height:t.iframeHeight,frameBorder:"0",src:t.url,scrolling:"no"}})])},[],!1,null,null,null);e.default=a.exports}}]);