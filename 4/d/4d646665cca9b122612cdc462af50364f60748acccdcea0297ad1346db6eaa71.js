"use strict";(self.webpackChunkWPS_Drive=self.webpackChunkWPS_Drive||[]).push([[2660],{32555:function(t,e,n){var o=n(49200),c=n(56451),r=n(37311),i=n(2406),a=n.n(i),s=n(26743),u=n(423),l=n(16548),p=n(87389),d=n(8004),m=n(70364),h=n(95272),f=n(45821),g=n(19731);function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"CreateEnterprise_wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"k-create-company-loading"},[n("KLoading")],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[n("div",{staticClass:"CreateEnterprise_create_company_container"},[n("iframe",{attrs:{id:"CreateCorp",frameborder:"0",src:t.src}})])])])},staticRenderFns:[],name:"CreateEnterprise",componentName:"CreateEnterprise",components:{KLoading:h.Z},props:{createCorpUrl:{type:String,default:"".concat(u.Q7,"/sign-up/?utm_source=").concat((0,g.x_)(window),"&utm_medium=personal_team_create")},onlyCreate:{type:Boolean,default:!1},beforeSwitchAccount:{type:Function,default:function(){}},dwParams:{type:Object,default:function(){return{}}}},data:function(){return{companyMessageData:{companyid:0,ssid:"",userId:0},isLoading:!0,hasCompany:!1,closePage:""}},computed:{src:function(){return this.setQuery(this.createCorpUrl,{autoChange:!0,domain:(0,s.getDomain)(location.host)})}},created:mounted:function(){document.domain=(0,s.getDomain)(location.host),window.addEventListener("message",this.handleCreateMessage)},beforeDestroy:function(){this.hasCompany?this.eventReport("close_choose_company"):this.eventReport("close_create_company"),window.removeEventListener("message",this.handleCreateMessage)},methods:{init:function(){var t=this;this.onlyCreate?this.isLoading=!1:(0,d.E)("getMultiAccountApi").then(function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.hasCompany();case 2:t.hasCompany=e.sent,t.hasCompany?t.$emit("replace","MultiAccountSwitch",{createCorpUrl:t.createCorpUrl,dwParams:t.dwParams,beforeSwitchAccount:t.beforeSwitchAccount}):t.eventReport("show_create_company"),t.isLoading=!1;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},handleToast:function(t){window.wpsQuery?(0,p.dw)({method:"message",params:{msg:t,type:"Error"}}):l.T.error(t)},handleCreateMessage:function(t){var e=this;try{var n=t.origin,o=JSON.parse("string"==typeof t.data?t.data:"{}"),c=o.eventName;if(n===u.Q7||n===u.UX){if("onCreateCompanySuccess"===c){this.eventReport("success_create_company"),this.companyMessageData=o,window.removeEventListener("message",this.handleCreateMessage),this.isLoading=!0,localStorage.setItem("create_team_from_personal_account",!0);var r=setTimeout((,1e3)}"onCreateCompanyFailure"===c&&(this.handleToast((0,f.t)("logic.CreateEnterprise.createErrorTip")),window.removeEventListener("message",this.handleCreateMessage))}}catch(t){this.handleToast((0,f.t)("logic.CreateEnterprise.createErrorTip"))}},handleSwitchAccount:function(){var t=this;(0,d.E)("getMultiAccountApi").then((function(e){var n;e.switchAccount({cbUrl:"".concat(u.Kn,"/entgroups"),canJump:!0,userid:t.companyMessageData.userId||0,ssid:t.companyMessageData.ssid||"0",companyid:t.companyMessageData.companyid||0,onSuccess:(n=(0,r.Z)(a().mark((function e(){var n,o,c,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isLoading=!1,t.closeDialog(),n="".concat(u.Kn,"/entgroups"),!window.wpsQuery){e.next=22;break}return e.prev=4,e.next=7,(0,p.RE)({method:"common.util.support",params:{api:"sendCommand"}});case 7:if(o=e.sent,c=o.result,r=o.callstatus,!c||"ok"!==r){e.next=15;break}return e.next=13,(0,p.dw)({method:"sendCommand",params:{cmd:"plugin://pageStartPage?locateCloudCompany&activate&".concat(t.companyMessageData.companyid)}});case 13:e.next=16;break;case 15:window.open(n);case 16:e.next=20;break;case 18:e.prev=18,e.t0=e.catch(4);case 20:e.next=23;break;case 22:m.Z.kdesktop?window.postMessage(JSON.stringify({eventName:"web_open_url",url:n})):window.location.href=n;case 23:case"end":return e.stop()}}),e,null,[[4,18]])}))),function(){return n.apply(this,arguments)}),onFail:function(){t.handleToast((0,f.t)("logic.CreateEnterprise.switchErrorTip"))}})}))},parseQuery:function(t){var e={};if(!t)return e;var n=t.split("?").filter(();if(t.includes("://")&&1==n.length)return e;var o=n.pop();return o&&"/"!=o[0]?(o.split("&").forEach((function(t){if(t){var n=t.split("=");e[n[0]]=1==n.length?"":n[1]}})),e):e},setQuery:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];if(!n)return t;var r=t.split("?"),i=(0,c.Z)(r,2),a=i[0],s=i[1],u=void 0===s?"":s,l=[],p=this.parseQuery(u),d=Object.assign.apply(Object,[p].concat(n));for(var m in d){var h=d[m];void 0!==h&&l.push("".concat(m,"=").concat(h))}var f=l.join("&");return f&&(f="?"+f),a+f},eventReport:function(t){var e=w(w({},this.dwParams),{},{operate:t});this.report("personal_team_account",e)}}};v.install=function(t){t.component(v.name,v)},v.dw={CreateEnterprise:[{trigger:"mounted",listener:function(t){var e=this;t.report=function(t,n){e.track(t,n)}}}]},e.Z=v},29055:function(t,e,n){var o=n(49200),c=n(37311),r=n(2406),i=n.n(r),a=n(62414),s=n(45821),u=n(8004),l=n(87389),p=n(423),d=n(70364),m=n(16548),h=n(96133),f=n(26743),g=n(19731);r v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MultiAccountSwitch_wrapper"},[n("div",{staticClass:"MultiAccountSwitch_list_container"},[n("KScroll",[n("div",{staticClass:"MultiAccountSwitch_list"},[t.loggedInAccountList&&t.loggedInAccountList.length?n("div",{staticClass:"MultiAccountSwitch_logged_in_area MultiAccountSwitch_list_item"},[n("div",{staticClass:"MultiAccountSwitch_text"},[t._v(t._s(t.tip1))]),t._v(" "),n("div",{staticClass:"MultiAccountSwitch_logged_in_account_list"},t._l(t.loggedInAccountList,(function(e,o){return n("div",{key:o,staticClass:"MultiAccountSwitch_logged_in_account_item"},[n("div",{staticClass:"MultiAccountSwitch_logged_in_account_item_info"},[n("img",{staticClass:"MultiAccountSwitch_avatar",attrs:{src:e.avatar_url}}),t._v(" "),n("div",{staticClass:"MultiAccountSwitch_account"},[n("div",{staticClass:"MultiAccountSwitch_account_name"},[t._v(t._s(e.nickname))]),t._v(" "),n("div",{staticClass:"MultiAccountSwitch_account_company"},[t._v(t._s(e.company_name))])])]),t._v(" "),n("KButton",{staticClass:"MultiAccountSwitch_account_item_btn",attrs:{type:"primary",useNewLayout:""},on:{click:function(n){return t.handleSwitch(e)}}},[t._v(t._s(t.btnText1))])],1)})),0)]):t._e(),t._v(" "),t.notLoggedInAccountList&&t.notLoggedInAccountList.length?n("div",{staticClass:"MultiAccountSwitch_not_logged_in_area MultiAccountSwitch_list_item"},[n("div",{staticClass:"MultiAccountSwitch_text"},[t._v(t._s(t.tip2))]),t._v(" "),n("div",{staticClass:"MultiAccountSwitch_not_logged_in_account_list"},t._l(t.notLoggedInAccountList,(function(e){return n("div",{key:e.userid,staticClass:"MultiAccountSwitch_not_logged_in_account_item"},[n("div",{staticClass:"MultiAccountSwitch_not_logged_in_account_item_info"},[n("img",{staticClass:"MultiAccountSwitch_avatar",attrs:{src:e.avatar_url}}),t._v(" "),n("div",{staticClass:"MultiAccountSwitch_account"},[n("div",{staticClass:"MultiAccountSwitch_account_name"},[t._v(t._s(e.nickname))]),t._v(" "),n("div",{staticClass:"MultiAccountSwitch_account_company"},[t._v(t._s(e.company_name))])])]),t._v(" "),n("KButton",{staticClass:"MultiAccountSwitch_account_item_btn",attrs:{useNewLayout:""},on:{click:},[t._v(t._s(t.btnText2))])],1)})),0)]):t._e()])])],1),t._v(" "),n("div",{staticClass:"MultiAccountSwitch_create_corp"},[n("span",{staticClass:"MultiAccountSwitch_create_corp_text"},[t._v(t._s(t.text1))]),t._v(" "),n("span",{staticClass:"MultiAccountSwitch_create_corp_text_btn",on:{click:t.handleCreate}},[t._v(t._s(t.text2))])])])},staticRenderFns:[],name:"MultiAccountSwitch",componentName:"MultiAccountSwitch",components:{KButton:a.Z,KScroll:h.Z},props:{createCorpUrl:{type:String,default:"".concat(p.Q7,"/sign-up/?utm_source=").concat((0,g.x_)(window),"&utm_medium=personal_team_create")},beforeSwitchAccount:{type:Function,default:function(){}},dwParams:{type:Object,default:},data:function(){return{loggedInAccountList:[],allBindAccountList:[],tip1:(0,s.t)("logic.MultiAccountSwitch.tip1"),tip2:(0,s.t)("logic.MultiAccountSwitch.tip2"),btnText1:(0,s.t)("logic.MultiAccountSwitch.btnText1"),btnText2:(0,s.t)("logic.MultiAccountSwitch.btnText2"),text1:(0,s.t)("logic.MultiAccountSwitch.text1"),text2:(0,s.t)("logic.MultiAccountSwitch.text2")}},mounted:function(){document.domain=(0,f.getDomain)(location.host),this.getAccountList(),this.eventReport("show_choose_company")},computed:{notLoggedInAccountList:function(){var t=this;return this.allBindAccountList.filter(()}},methods:{getAccountList:function(){var t=this;(0,u.E)("getMultiAccountApi").then(function(){var e=(0,c.Z)(i().mark((function e(n){var o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={mode:"current_login",legacy:!0},e.next=3,n.getCompanyAccounts(o);case 3:t.loggedInAccountList=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,u.E)("getMultiAccountApi").then(function(){var e=(0,c.Z)(i().mark((function e(n){var o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={mode:"all_bind",legacy:!0},e.next=3,n.getCompanyAccounts(o);case 3:t.allBindAccountList=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},handleLogin:function(){var t=this;(0,u.E)("getMultiAccountApi").then(function(){var e=(0,c.Z)(i().mark((function e(n){var o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={cb:"".concat(p.Kn,"/entgroups"),from:"kdocs",autologin:"false"},e.next=3,n.goLoginAccountPage(o);case 3:t.$emit("close");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},handleSwitch:function(t){var e=this;return(0,c.Z)(i().mark((function n(){var o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return localStorage.setItem("create_team_from_personal_account",!0),n.next=3,e.beforeSwitchAccount();case 3:e.eventReport("success_choose_company"),o=setTimeout((,1e3);case 5:case"end":return n.stop()}}),n)})))()},handleSwitchAccount:function(t){var e=this;(0,u.E)("getMultiAccountApi").then(function(){var n=(0,c.Z)(i().mark((function n(o){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={cbUrl:"".concat(p.Kn,"/entgroups"),canJump:!0,userid:t.userid,from:"kdocs",companyid:t.company_id,onSuccess:function(){var n=(0,c.Z)(i().mark((function n(){var o,c,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.closeDialog(),o="".concat(p.Kn,"/entgroups"),!window.wpsQuery){n.next=21;break}return n.prev=3,n.next=6,(0,l.RE)({method:"common.util.support",params:{api:"sendCommand"}});case 6:if(c=n.sent,r=c.result,a=c.callstatus,!r||"ok"!==a){n.next=14;break}return n.next=12,(0,l.dw)({method:"sendCommand",params:{cmd:"plugin://pageStartPage?locateCloudCompany&activate&".concat(t.company_id)}});case 12:n.next=15;break;case 14:window.open(o);case 15:n.next=19;break;case 17:n.prev=17,n.t0=n.catch(3);case 19:n.next=22;break;case 21:d.Z.kdesktop?window.postMessage(JSON.stringify({eventName:"web_open_url",url:o})):window.location.href=o;case 22:case"end":return n.stop()}}),n,null,[[3,17]])})));return (),onFail:,n.next=3,o.switchAccount(r);case 3:e.$emit("close");case 4:case"end":return n.stop()}}),n)})));return ())},handleCreate:function(){this.$emit("replace","CreateEnterprise",{createCorpUrl:this.createCorpUrl,onlyCreate:!0})},handleToast:function(t){window.wpsQuery?(0,l.dw)({method:"message",params:{msg:t,type:"Error"}}):m.T.error(t)},closeDialog:eventReport:function(t){var e=w(w({},this.dwParams),{},{operate:t});this.report("personal_team_account",e)}}};v.install=function(t){t.component(v.name,v)},v.dw={MultiAccountSwitch:[{trigger:"mounted",listener:function(t){var e=this;t.report=}]},e.Z=v},96133:function(t,e,n){var o=n(37311),c=n(2406),r=n.n(c),i=n(23279),a=n.n(i),s=n(45821),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scroll",staticClass:"k-scroll",on:{scroll:t.scroll}},[t.loading&&t.showLoading&&!t.isBottom?n("p",{staticClass:"k-scroll-info"},[t._v(t._s(t.loadingText))]):t._e(),t._v(" "),t._t("default"),t._v(" "),t.loading&&t.showLoading&&t.isBottom?n("p",{staticClass:"k-scroll-info"},[t._v(t._s(t.loadingText))]):t._e()],2)},staticRenderFns:[],name:"KScroll",props:{onLoad:{type:Function,default:function(){}},canLoad:{type:Boolean,default:!0},distance:{type:Number,default:5},loadingText:{type:String,default:(0,s.t)("basic.scroll.loadingText")},direction:{type:String,default:"bottom",validator:,loading:{type:Boolean,default:!1},showLoading:{type:Boolean,default:!0},onScroll:{type:Function,default:,rememberLastPos:{type:Boolean,default:!1}},data:computed:{isBottom:,activated:methods:{scroll:a()((function(){if(this.$refs.scroll){var t=this.$refs.scroll,e=t.scrollTop,n=t.scrollHeight,o=t.clientHeight,c=this.lastScrollTop<e,r=this.isBottom?e>0&&n-e-o<this.distance:e<this.distance;this.lastScrollTop=e,r&&this.canLoad&&!this.loading&&(this.lastScrollPos=n,Promise.resolve(this.onLoad({isDown:c})).then(this.toLastPos)),this.onScroll()}}),50,{leading:!0,trailing:!0}),toLastPos:function(){var t=this;!this.isBottom&&this.$nextTick((function(){var e=t.$refs.scroll,n=e.clientHeight/e.scrollHeight*e.clientHeight;e.scrollTop=e.scrollHeight-n-t.lastScrollPos-t.distance}))},reset:toBottom:function(){var t=this;return(0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.$refs.scroll&&(t.$refs.scroll.scrollTop=t.$refs.scroll.scrollHeight);case 3:case"end":return e.stop()}}),e)})))()},toTop:toLastScrollTop:function(){var t=this;return(0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.$refs.scroll&&(t.$refs.scroll.scrollTop=t.lastScrollTop);case 3:case"end":return e.stop()}}),e)})))()}},install:;e.Z=u},19175:function(t,e,n){n.d(e,{E$:function(){return a},XR:function(){return s},tB:function(){return i},um:function(){return u}});var o=n(16699),c=n.n(o),r=n(45821),i=[/[!@#$^*<>?,]+/,(0,r.t)("combine.mainEmp.InvalidNickname")],a=c()({type:"wps",message:(0,r.t)("logic.QrCode.txt1"),title:"noy try invoke wps api",code:"ignoreApi"}),s=c()({type:"wps",message:"{title}, code: {code}, result: {msg}",title:(0,r.t)("logic.FileDownload.txt13"),code:null}),u=(c()({type:"docs",message:"{title}, code: {code}, result: {msg}",title:null,code:null}),c()({type:"client",message:(0,r.t)("logic.QrCode.txt3"),title:"wps invoke fail",code:null,url:null})),l=c()({type:"client",title:null,result:null,status:null,code:null,message:"{title} client error, code: {code}, result: {result}, status: {status}"});l({message:(0,r.t)("logic.FileDownload.txt0"),code:"loginRequired"}),l({message:(0,r.t)("logic.FileDownload.txt1"),code:"teamidRequired"}),l({message:(0,r.t)("logic.FileDownload.txt2"),code:"fetchFileDownloadUriFail"}),(0,r.t)("logic.FileDownload.txt3")},8004:function(t,e,n){n.d(e,{$:function(){return c},E:);var o=n(423),c={SHOW_SPACE_LIMIT:"showSpaceLimit",RENDER_UPGRADE_PRIVILEGE:"renderUpgradePrivilege",RENDER_MSG_SENT_POPUP:"renderMsgSentPopup",SHOW_PLUS_BUY:"showPlusBuy"},r=function(t,e,n){var o=Array.isArray(e)?e:[e];return i().then((function(){return window&&window.epPlatform&&window.epPlatform[t].apply(window.epPlatform,o)})).catch(()},i=function(){return new Promise((function(t,e){if(window.epPlatform)return t();var n=new XMLHttpRequest;if(n.open("GET","".concat(o.UX,"/fab/sris/epplatform_sri.json"),!1),n.send(null),n.status>=200&&n.status<400){var c=JSON.parse(n.responseText),r=document.createElement("script");r.src="".concat(o.UX,"/fab/sdk/v1/epplatform"),r.integrity=c.epplatform,r.crossOrigin="anonymous",r.onload=t,r.onerror=e,document.head.appendChild(r)}}))}}}]);