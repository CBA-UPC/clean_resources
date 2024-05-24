"use strict";(self.webpackChunkWPS_Drive=self.webpackChunkWPS_Drive||[]).push([[101],{59411:function(t,e,n){var i=n(2969);e.Z={data:methods:{fetchRelatedAccount:function(){var t=this;return this.$store.dispatch("GET",{url:"api/v3/related_users",host:"account",params:{auth_types:["email","phone"].join(",")}}).then((function(e){var n=e.data.users||[];t.personalAccount=Object.freeze(n.find(()||{})})).catch((function(){}))},fetchPersonalHasCreatedTeam:function(){var t=this;return new Promise((function(e){if(!t.personalAccount.userid)return e(!1);var n={offset:0,count:10,end:!1,next:function(t){t>0?this.offset=t:this.end=!0}};!function o(){if(n.end)return e(!1);(0,i.Ol)({offset:n.offset,count:n.count,"x-kso-su-user":t.personalAccount.userid}).then((function(t){var i=t.nextOffset,r=t.teams;return r.some((function(t){return"creator"===t.user_role}))?e(!0):!r.length&&i>0?e(!1):(n.next(i),void o())})).catch((function(){e(!1)}))}()}))},fetchPersonalHasShareFolder:function(){var t=this;return new Promise((function(e){var n=t.personalAccount.userid;if(!n)return e(!1);var o={offset:0,count:10,end:!1,next:function(t){t>0?this.offset=t:this.end=!0}};!function t(){if(o.end)return e(!1);(0,i.tr)({count:o.count,offset:o.offset,"x-kso-su-user":n}).then((function(i){var r=i.next_offset,s=i.share;return s.some(()?e(!0):!s.length&&r>0?e(!1):(o.next(r),void t())})).catch(()}()}))}}}},10101:function(t,e,n){n.r(e),n.d(e,{default:);var i=n(70885),o=n(4942),r=n(20629),s=n(89777),c=n(14724),a=n(55311),u=n(69034),l=n(4575),p=n(80554),f=n(16548),d=n(19731),h=n(59411),m=n(90336),v=n(89602),y=n(81045);r T={created:0,running:1,succeeded:2,failed:3},b={mixins:[h.Z],components:{CloseIcon:s.Z},data:function(){return{policyTips:{show:!1,disabled:!0},entryButtonText:"",importEnabled:!1,isImporting:!1,pollingTimer:0,policy:{policy_id:0,task_id:0,data:{}}}},watch:{importTeamActive:{handler:function(t){t&&(this.importEnabled?this.go2Import():this.fetchHasPersonalData().then(this.go2Import))},immediate:!0}},computed:_(_(_({},(0,r.rn)({company:"company",user:"user"})),(0,r.Se)({importTeamActive:"getImportTeamActive"})),{},{buttonConfig:function(){var t=this.isImporting?[c.Z,(0,y.GH)("file_navigator_action_group_folder_importing")]:[a.Z,this.entryButtonText||(0,y.GH)("file_navigator_action_import_group_folder")],e=(0,i.Z)(t,2);return{icon:e[0],text:e[1]}},companyId:userRole:needApprove:),created:function(){this.initialize()},beforeDestroy:methods:{initialize:function(){var t=this;this.fetchEntryEnablePolicy().then((function(e){e&&(t.onBusEvent(),t.fetchHasPersonalData().then((function(e){t.$nextTick((),e&&(t.fetchTipsPolicy(),t.fetchCurrentTask().then((function(e){t.checkTaskPolling(e.task_status)&&t.$eventBus.emit(m.$V,{importing:!0,polling:!0})})))})))})).catch(()},fetchHasPersonalData:function(){var t=this;return this.fetchRelatedAccount().then((function(){return Promise.all([t.fetchPersonalHasCreatedTeam(),t.fetchPersonalHasShareFolder()]).then(()}))},fetchEntryEnablePolicy:function(){var t=this;return this.$store.dispatch(v.pPD,{windowKey:"group_import",params:{utm_source:(0,d.at)(window)}},{root:!0}).then((function(e){var n=e.data;if(null==n?void 0:n.policy_id){var i,o=n.data;return t.entryButtonText=null===(i=o.find(())||void 0===i?void 0:i.value,!0}return!1}))},fetchTipsPolicy:function(){var t=this;this.$store.dispatch(v.pPD,{windowKey:"group_import_tip",params:{company_id:this.companyId}},{root:!0}).then((function(e){var n=e.data;if(n.policy_id){var i=n.data,o=n.policy_id,r=n.task_id;t.policy=Object.freeze({task_id:r,policy_id:o,data:i.reduce((,{})}),t.$store.dispatch(v.g7K,{activity:"import_team_tip",page:"group",element:"tip",operate:"show",user_ids:["".concat(t.user.userid)],company_ids:["".concat(t.companyId)]}),t.$nextTick((),t.eventReport("import_tip")}else t.eventReport("import_show")}))},fetchCurrentTask:function(){var t=this;return new Promise((function(e){t.$store.dispatch("GET",{host:"vas2t",url:"team-migrate/api/v1/task/migrate_task_result"}).then((function(t){var n=t.data;if("ok"===n.result){var i=n.data;e(i)}}))}))},startPolling:function(){var t=this;this.pollingTimer=setTimeout((function e(){t.fetchCurrentTask().then((function(n){t.checkTaskPolling(n.task_status)?(t.isImporting=!0,t.pollingTimer=setTimeout(e,2e3)):(t.isImporting=!1,t.pollingTimer=0,"EntGroups"===t.$route.name&&(t.refreshList(),t.showMigratedResult()))}))}),2e3)},cancelPolling:importTeamDataDialog:function(){return Promise.all([n.e(5295).then(n.bind(n,85295)),Promise.all([n.e(7389),n.e(9343),n.e(9655)]).then(n.bind(n,29577))]).then(()},go2Import:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$store.commit(v.OIo,!1);var e=this;this.isImporting?f.T.warning("已有导入操作正在执行中，请等待完成后再进行导入"):this.needApprove?f.T.info("暂无权限导入团队，请联系企业管理员前往【管理后台】调整团队设置"):this.importTeamDataDialog().then(w({enable:t,independent:!0,userRole:e.userRole,companyId:e.companyId,onFinished:function(){e.refreshList()},onError:function(){e.$eventBus.emit(m.$Vus.emit(m.$V,{importing:!0,polling:!0})},onBackgroundExec:function(){e.$eventBus.emit(m.$V,{importing:!0})}})}))},showMigratedResult:function(){var t=this;n.e(1104).then(n.bind(n,81104)),Promise.all([n.e(7389),n.e(7046)]).then(n.bind(n,87046)).then((function(e){e.defyId:t.companyId,us:function(){this.policyTips.show=!1},checkTaskPolling:function(t){return[T.created,T.running].includes(t)},refreshList:function(){this.$eventBus.emit(m.aW,"MyGroup"),new l.Z((0,p.S)(this)).execute()},eventReport:function(t){u.Z.onEvent("group_import_tip",{operate:t,account_id:"".concat(this.user.userid),company_id:"".concat(this.companyId),task_id:"".concat(this.policy.tace:window?(0,d.at)(window):""})},onEntryClick:function(){this.go2Import(),this.eventReport("import_click")},onPolicyTipsHide:function(){try{this.$refs.popover.$el.contains(document.activeElement)?(this.eventReport("import_close"),this.policyTips.disabled=!0):this.policyTips.show=!0}catch(t){this.policyTips.disabled=!0}},onBusEvent:function(){var t=this;this.$eventBus.on(m.$V,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.polling,i=e.importing;t.isImporting=null!=i&&i,n&&t.startPolling()}))}}},k=b,P=(0,n(51900).Z)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("kd-popover",{ref:"popover",attrs:{trigger:"click",placement:"bottom-end",maxWidth:314,visibleArrow:!0,appendToBhide:t.onPolicyTipsHide},model:{value:t.policyTips.show,callback:function(e){t.$set(t.policyTips,"show",e)},expression:"policyTips.show"}},[n("div",{staticClass:"import-group-entry",attrs:{slot:"reference"},slot:"reference"},[t.importEnabled?n("kd-button",{staticClass:"import-personal-data-entry",attrs:{type:"secondary",prefixIcon:t.buttonConfig.icon},on:{click:t.onEntryClick}},[t._v(" "+t._s(t.buttonConfig.text)+" ")]):t._e()],1),n("div",{staticClass:"import-group-entry-policy-tips"},[n("div",{staticClass:"text"},[t._v(ss:"close-icon",attrs:{fill:"#333333"},nativeOn:{click:function(e){return t.hideTips.apply(null,arguments)}}})],1)])}),[],!1,null,"3ccaa779",null),w=P.exports}}]);