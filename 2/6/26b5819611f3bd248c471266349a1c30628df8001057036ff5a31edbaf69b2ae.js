"use strict";(self.webpackChunkWPS_Drive=self.webpackChunkWPS_Drive||[]).push([[8211],{59411:function(e,t,n){var o=n(2969);t.Z={data:methods:{fetchRelatedAccount:function(){var e=this;return this.$store.dispatch("GET",{url:"api/v3/related_users",host:"account",params:{auth_types:["email","phone"].join(",")}}).then((function(t){var n=t.data.users||[];e.personalAccount=Object.freeze(n.find(()||{})})).catch((function(){}))},fetchPersonalHasCreatedTeam:function(){var e=this;return new Promise((function(t){if(!e.personalAccount.userid)return t(!1);var n={offset:0,count:10,end:!1,next:function(e){e>0?this.offset=e:this.end=!0}};!function i(){if(n.end)return t(!1);(0,o.Ol)({offset:n.offset,count:n.count,"x-kso-su-user":e.personalAccount.userid}).then((function(e){var o=e.nextOffset,r=e.teams;return r.some(()?t(!0):!r.length&&o>0?t(!1):(n.next(o),void i())})).catch((function(){t(!1)}))}()}))},fetchPersonalHasShareFolder:function(){var e=this;return new Promise((function(t){var n=e.personalAccount.userid;if(!n)return t(!1);var i={offset:0,count:10,end:!1,next:function(e){e>0?this.offset=e:this.end=!0}};!function e(){if(i.end)return t(!1);(0,o.tr)({count:i.count,offset:i.offset,"x-kso-su-user":n}).then((function(o){var r=o.next_offset,c=o.share;return c.some(()?t(!0):!c.length&&r>0?t(!1):(i.next(r),void e())})).catch(()}()}))}}}},8211:function(e,t,n){n.r(t),n.d(t,{default:);var o=n(4942),i=n(20629),r=n(51633),c=n(89602);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a={data:computed:u(u({},(0,i.rn)({user:"user",company:"company"})),{},{companyid:function(){var e,t,n;return(null===(e=this.$store.state)||void 0===e||null===(t=e.company)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.id)||this.$route.params.cid}}),methods:{showMotivationGuide:function(){var e=this;this.$store.dispatch(c.RLY,{topic:"wps.plus.guide.group",user_id:String(this.user.userid),company_id:String(this.companyid),operate:"show",element:"video"}),(0,r.v)("$$DialogCustomVideo",{title:this.title,text:this.text,videoUrl:this.video,videoPageUrl:this.pic,autoplay:"auto"===this.playType,helpText:this.subBtnText||"",helplink:this.subBtnPushUrl||"",confimText:this.buttontext||"",onConfirm:function(){"url"===e.type&&window.open(e.url||"plus.wps.cn")}},(function(){}),(function(){e.closeMotivationGuide()}))},closeMotivationGuide:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"视频弹窗组件",call:"closeMotivationGuide"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"视频弹窗组件")}},l=n(51900),d=(0,l.Z)(a,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"caea1510",null).exports,p=n(90336),f=n(85956),w=n("",themeListener:null}},computed:{companyid:function(){var e,t,n;return(null===(e=this.$store.state)||void 0===e||null===(t=e.company)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.id)||this.$route.params.cid}},methods:{showCreateTeam:function(){var e=this;this.isShowGuide=!0,window.addEventListener("message",this.messageHandler),this.$ua.wpsDocumentEmbed&&this.$nextTick((function(){e.addThemeListener()}))},closeGuide:function(){this.isShowGuide=!1,this.$router.push({name:"Enterprise",params:{tid:this.groupID,cid:this.companyid}}),window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"创建团队引导组件",call:"closeGuide"})},messageHandler:function(e){var t,n,o=this,i=null===(t=this.$refs)||void 0===t||null===(n=t.iframe)||void 0===n?void 0:n.contentWindow,r=e.source;if(!i||r!==i)return!1;var c=JSON.parse((null==e?void 0:e.data)||"{}"),s=c.eventName,u=c.tempId,a=void 0===u?"":u,l=new Map([["toTeamPage",function(){o.groupID=a,o.closeGuide(),o.$store.state.ui.useNewLayout&&o.$eventBus.emit(p.aW,"MyGroup"),o.$ua.wpsDocumentEmbed&&(0,f.Q7)()}],["default",function(){}]]);return(l.get(s)||l.get("default"))(),s},addThemeListener:function(){var e,t;this.themeListener=(0,w.g8)(null===(e=this.$refs)||void 0===e||null===(t=e.iframe)||void 0===t?void r&&this.themeListener.removeListener()}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"创建团队引导组件")}},m=h,g=(0,l.Z)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShowGuide?n("div",{staticClass:"creat-team-guide"},[n("iframe",{ref:"iframe",staticClass:"creat-team-guide-container container",attrs:{frameborder:"0",src:e.companyGuideURL}})return{title:"",describe:"",pictures:[],buttonText:""}},computed:{pics:function(){try{return JSON.parse(this.pictures)}catch(e){return[]}}},methods:{showSwiperDialog:function(){var e=this;(0,r.v)("$$DialogSwiper",{head:this.title,describe:this.describe,pictures:this.pics,buttonText:this.buttonText},(function(){}),(function(){e.closeSwiperDialog()}))},closeSwiperDialog:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"轮播图组件",call:"closeSwiperDialog"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"轮播图组件")}},y=(0,l.Z)(v,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"59a1f15a",null).exports,b=n(36992);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defincriptor(n,t))}))}return e}var V={data:function(){return{steps:null,utm:{}}},methods:{showIntentionContinueGuide:function(){var e=this;this.$store.dispatch("tips/showDrivertipsGuide",{name:"team-file-teamtop",options:{showButtons:!0},steps:JSON.parse(this.steps)||[],closeCallBack:function(){e.closeIntentionContinueGuide()},dwData:O(O({},(0,b.We)(this.utm||{})),{},{company_id:this.$route.params.cid})},{root:!0})},closeIntentionContinueGuide:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"动机承接引导组件",call:"closeIntentionContinueGuide"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"动机承接引导组件")}},K=(0,l.Z)(V,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"86dd515c",null).exports,P=n(15861),j=n(87757),D=n.n(j),$=n(21628),I={methods:{showAccountUSerCompanyEntrialGuide:function(){var e=this;return(0,P.Z)(D().mark((function t(){var n,o,i,r,c,s,u,a,l,d;return D().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$store.getters&&e.$store.getters.multiAccount||{},o=n.isCompanyAccount,i=e.$ua||{},r=i.kdesktop,c=i.woa,s=i.mWOA,u=i.WPS,a=i.isTabletClient,l=i.wpsDocumentEmbed,!a){t.next=8;break}return t.next=5,(0,$.isMulitKdocsClient)();case 5:t.t0=t.sent,t.next=9;break;case 8:t.t0=!0;case 9:d=t.t0,l?(0,f.OF)(e.closeAccountUSerCompanyEntrialGuide,e.finishAccountUSerCompanyEntrialGuide,e):!o||c||s||u||!d?o||c||s||u||!d||e.$store.dispatch("tips/showAccountUserCompanyEntrialGuide",r):e.$store.dispatch("tips/showMultiAccountGuide",{closeCallback:e.closeAccountUSerCompanyEntrialGuide,finishCallback:e.finishAccountUSerCompanyEntrialGuide,kdesktop:r});case 11:case"end":return t.stop()}}),t)})))()},closeAccountUSerCompanyEntrialGuide:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"账号引导组件",call:"closeAccountUSerCompanyEntrialGuide"})},finishAccountUSerCompanyEntrialGuide:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"账号引导组件",call:"finishAccountUSerCompanyEntrialGuide"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"账号引导组件")}},E=(0,l.Z)(I,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"2d5f4238",null).exports;function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPrrn{title:"",text:"",img:"",imgUrl:"",buttonText:"",buttonCopy:"",eventType:"",buttonUrl:"",missionId:"",activityId:"",activity:"",popupTag:""}},computed:k(k({},(0,i.rn)({user:"user",company:"company"})),{},{companyid:function(){var e,t,n;return(null===(e=this.$store.state)||void 0===e||null===(t=e.company)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.id)||this.$route.params.cid}}),methods:{showSendPackageDialog:function(){var e=this;(0,r.v)("$$DialogActivityDialogContent",{companyId:String(this.companyid),user:this.user,userRole:this.company.current.userRole,source:"docsWeb",head:this.title,img:this.img,text:this.text,buttonText:this.buttonText,imgUrl:this.imgUrl,buttonCopy:this.buttonCopy,activity:this.activity,popupTag:this.popupTag,activityId:this.activityId,missionId:this.missionId,eventType:this.eventType,buttonUrl:this.buttonUrl,handleSuccess:this.handleSuccess,policyId:window.KVS.policyId,taskId:window.KVS.taskId},(function(){}),(function(){e.closeSendPackageDialog()}))},handleSuccess:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"活动弹窗组件",call:"handleSuccess"})},closeSendPackageDialog:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"活动弹窗组件",call:"closeSendPackageDialog"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"活动弹窗组件")}},T=(0,l.Z)(x,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports;function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Objecy(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={data:function(){return{imgText:"",img:"",imgUrl:"",buttonText:"",eventType:"",buttonUrl:"",activity:"",popupTag:""}},computed:C(C({},(0,i.rn)({user:"user",company:"company"})),{},{companyid:function(){var e,t,n;return(null===(e=this.$store.state)||void 0===e||null===(t=e.company)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.id)||this.$route.params.cid}}),methods:{showPackgeSuccessDialog:function(){var e=this;(0,r.v)("$$DialogGetPackageSuccess",{companyId:String(this.companyid),user:this.user,userRole:this.company.current.userRole,source:"docsWeb",img:this.img,imgText:this.imgText,buttonText:this.buttonText,imgUrl:this.imgUrl,activity:this.activity,popupTag:this.popupTag,eventType:this.eventType,buttonUrl:this.buttonUrl,policyId:window.KVS.policyId,taskId:window.KVS.taskId},(function(){}),(function(){e.closePackgeSuccessDialog()}))},closePackgeSuccessDialog:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"领取活动成功弹窗组件",call:"closePackgeSuccessDialog"})}},beforeMount:function(){window.KVS&&w��组件")}},M=(0,],!1,null,null,null).exports,U={props:{},data:function(){return{templateId:"",activity:"",page:"",element:"",operate:""}},computed:{groupId:function(){var e;return null===(e=this.$route.paramsl===(t=e.company)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.id)||this.$route.params.cid},userid:function(){var e,t;return null===(e=this.$store.state)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.id}},methods:{showCreateTeam:function(){var e=this;return(0,P.Z)(D().mark((function t(){var n,o,i;return D().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=e.groupId){t.next=8;break}return t.next=5,e.$store.dispatch("GET",{host:"plus",url:"/app/job/v1/syncuser/companies/".concat(e.companyid,"/deptgroups/index")});case 5:o=t.sent,i=o.data,n=i.group_id;case 8:if(e.templateId){t.next=11;break}return e.closeGuide(),t.abrupt("return");case 11:return t.next=13,e.$store.dispatch("POST",{url:"/app/groupext/v1/group/templates/".concat(e.templateId,"/apply"),host:"plus",data:{group_id:n,entrance:"aftercreate",scene:"motivation_guide",source:"docsWeb"}},{root:!0});case 13:return t.next=15,e.$store.dispatch(c.g7K,{activity:e.activity,page:e.page,element:e.element,operate:e.operate,company_ids:[e.companyid],user_ids:[e.userid]},{root:!0});case 15:e.$store.dispatch(c.V9B,{},{root:!0}),e.closeGuide(),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(0),e.closeGuide(),console.error(t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,19]])})))()},closeGuide:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"创建演示文档引导组件",call:"closeGuide"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"创建演示文档引导组件")}},Z=(0,l.Z)(U,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"27a2db45",null).exports,A=n(4575),R=n(80554);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W={computed:B(B({},(0,i.rn)({user:"user",company:"company"})),{},{companyId:function(){var e,t;return null===(e=this.company)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.id},userRole:function(){var e,t;return null===(e=this.company)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.userRole}}),methods:{showImportDataGuide:function(){var e=this;n.e(8536).then(n.bind(n,88536)),Promise.all([n.e(7389),n.e(9343),n.e(5280)]).then(n.bind(n,73269)).then((function(t){t.default.show({userRole:e.userRole,userId:e.user.userid,companyId:e.companyId,onCancel:function(){entBus.emit(p.$V,{importing:!1})},onFinished:function(){e.$eventBus.emit(p.aW,"MyGroup"),new A.Z((0,R.S)(e)).execute()},onUpgrading:function(){e.$eventBus.emit(p.$V,{importing:!0,polling:!0})},onBackgroundExec:function(){e.$eventBus.emit(p.$V,{importing:!0})},addPolicyTag:function(){e.$store.dispatch(c.g7K,{activity:"import_team_guid",page:"group",element:"guid",operate:"show",user_ids:["".concat(e.user.userid)],company_ids:["".concat(e.companyId)]})}})}))},closeImportDataGuide:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"导入数据引导组件",call:"closeImportDataGuide"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"导入数据引导组件")}},H=(0,l.Z)(W,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports,F={mixins:[n(59411).Z],methods:{checkEnable:function(){var e=this;this.fetchRelatedAccount().then((function(){Promise.all([e.fetchPersonalHasCreatedTeam(),e.fetchPersonalHasShareFolder()]).then((function(t){t.some(Boolean)?e.enabled():e.disabled()}))}))},enabled:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"导入数据展示判断组件",call:"enabled"})},disabled:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"导入数据展示判断组件",call:"disabled"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"导入数据展示判断组件")}},J=(0,l.Z)(F,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptoany"})),{},{groupId:function(){return Number(this.$route.params.tid)||0},companyId:function(){var e,t;return(null===(e=this.company)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.id)||Number(this.$route.params.cid)||0},userRole:function(){var e,t;return null===(e=this.company)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.userRole}}),methods:{showResultDialog:function(){var e=this;(0,r.v)("$$DialogMigrateTaskResult",{taskType:e.taskType,groupId:e.groupId,userId:e.user.userid,companyId:e.companyId,userRole:e.userRole},(function(){}),(function(){e.closeResultDialog()}))},closeResultDialog:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"迁移导入完成展示组件",call:"closeResultDialog"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNodefunction(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports,X={computed:{groupId:function(){return Number(this.$route.params.tid)||0}},methods:{checkEnable:function(){var e=this;this.groupId?this.$store.dispatch(c.pPD,{windowKey:"personal_upgrade_complete",params:{group_id:this.groupId}}).then((function(t){t.data.policy_id?e.enabled():e.disabled()})).catch((function(){e.disabled()})):this.disabled()},enabled:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"共享文件夹升级完成命中校验",call:"enabled"})},disabled:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"共享文件夹升级完成命中校验",call:"disabled"})}},beforeMount:funndow.KVS.collectVNode(this,"共享文件夹升级完成命中校验")}},ee=(0,l.Z)(X,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var ne={data:function(){return{scene:"",type:"",source:""}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,i.rn)({user:"user",company:"company",team:"team"})),methods:{showInviteDialog:function(){var e=this,t=this.$route.params.tid;(0,r.v)("$$DialogInviteTask",{companyId:this.company.current.id,companyName:this.company.current.name,userId:this.user.id,groupId:t,type:this.type,source:this.source,roleId:this.company.current.userRole,groupName:t?this.team.current.name:"",scene:this.scene},(function(){}),(function(){e.closeInviteDialog()}))},closeInviteDialog:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"成员邀请组件",call:"closeInviteDialog"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"成员邀请组件")}},oe=ne,ie=(0,l.Z)(oe,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"4407a108",null).exports,re=n(91326),ce={methods:{checkEnable:function(){localStorage.getItem("create_team_from_personal_account")?(localStorage.removeItem("create_team_from_personal_account"),new re.Z((0,R.S)(this),{params:{dwEntrance:"personal_team_create"}}).execute({createTeamSimply:!0,closeCallback:this.enabled})):this.disabled()},enabled:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"检查是否从个人转企业创建团队组件",call:"enabled"})},disabled:function(){window.KVS&&window.KVS.trigger&rts;functionif(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((}))),n.push.apply(n,o)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t]ors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le={data:function(){return{source:""}},computed:ae(ae({},(0,i.ryId:this.company.current.id,accountId:this.user.id,source:this.source},(function(){}),(function(){e.closeInviteDialog()}))},closeInviteDialog:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"event",id:"通知未活跃成员弹窗",call:"closeInviteDialog"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"通知�ct.getOwnPropertySymbols){var o=Object.getOt&&(o=o.fk:J,TaskMigratedResult:q,ShareFolderUpgradedCheck:ee,CheckCreateTeamFromPersonalAccount:se,NotifyUnusedMembers:(0,l.Z)(le,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"ff5130e0",null).exports},data:function(){return{}},computed:function(e){for(var t=1;t<aents[t]:{};t%2?de(Object(n),!0).forEach((f,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,i.Se)(["isMemberWithinGroupEnt"])),watch:{"$route.name":{handler:function(e){var t=this;if(!this.$isServer){var n=new Map([["EntGroups",function(){return setTimeout(t.initEntGroups,500)}],["Enterprise",function(){t.isMemberWithinGroupEnt||setTimeout(t.initEnterprise,500)}],["EntHelper",function(){return setTimeout(t.initEntHelper,500)}]]).get(e);n&&n()}},immediate:!0}},mounted:function(){},methods:{initEntGroups:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"location",id:"/entgroups",call:"onLoad"})},initEnterprise:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"location",id:"/ent/${company_id}/${group_id}",call:"onLoad"})},initEntHelper:function(){window.KVS&&window.KVS.trigger&&window.KVS.trigger({type:"location",id:"/ent/${company_id}/helper",call:"onLoad"})}},beforeMount:function(){window.KVS&&window.KVS.collectVNode&&window.KVS.collectVNode(this,"视频引导模块")}},fe=pe,we=(0,l.Z)(fe,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"common-guide"},[t("div",{staticClass:"common-guide-container"},[t("VideoDialog"),t("CreateTeam"),t("IntentionContinueGuide"),t("AccountUSerCompanyEntrialGuide"),t("SwiperDialog"),t("SendPackageDialg"),t("GetPackgeSuccess"),t("ApplyGuideTemplate"),t("ImportDataGuide"),t("ImportDataEnableCheck"),t("TaskMigratedResult"),t("ShareFolderUpgradedCheck"),t("InviteMemberDialog"),t("CheckCreateTeamFromPersonalAccount"),t("NotifyUnusedMembers")],1)])}),[],!1,null,"565e49a3",null).exports}}]);
