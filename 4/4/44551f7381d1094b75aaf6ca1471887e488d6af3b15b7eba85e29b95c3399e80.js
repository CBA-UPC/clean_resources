"use strict";(self.webpackChunkWPS_Drive=self.webpackChunkWPS_Drive||[]).push([[8448],{18066:function(e,t,r){var n=r(37311),o=r(2406),i=r.n(o),s=r(62414),a=r(47189),c=r(45821),u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-create-customize-group"},[r("el-form",{ref:"createCustomizeGroup",attrs:{model:e.createCustomizeGroup,rules:e.rules,prop:"name"},nativeOn:{submit:},[r("el-form-item",{attrs:{prop:"name"}},[r("el-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{placeholder:e.isRename?e.selectedGroup.tag_name:e.lang_txt0,autofocus:!0,maxlength:"31"},model:{value:e.createCustomizeGroup.name,callback:expression:"createCustomizeGroup.name"}})],1)],1),e._v(" "),r("footer",[r("KButton",{on:{click:e.handleClose}},[e._v(e._s(e.lang_txt1))]),e._v(" "),r("KButton",{attrs:{type:"primary",disabled:e.loading},on:{click:function(t){return e.submit("createCustomizeGroup")}}},[e._v(e._s(e.lang_txt2))])],1)],1)},staticRenderFns:[],name:"KCreateCustomizeGroup",directives:{focus:function(e){var t=e.getAttribute("focused");setTimeout((function(){t||(e.getElementsByClassName("el-input__inner")[0].select(),e.setAttribute("focused","1"))}),50)}},components:{KButton:s.Z},props:{currentTeam:{type:Object,default:function(){return{}},required:!0},customizeGroups:{type:Array,default:function(){return[]}},selectedGroup:{type:Object,default:function(){return{}}},onCreated:{type:Function,default:function(){return function(){}}},onCancel:{type:Function,default:function(){return function(){}}}},data:function(){var e=this;return{lang_txt0:(0,c.t)("logic.CustomizeGroup.txt0"),lang_txt1:(0,c.t)("logic.CustomizeGroup.txt1"),lang_txt2:(0,c.t)("logic.CustomizeGroup.txt2"),loading:!1,createCustomizeGroup:{name:""},rules:{name:[{pattern:/^[^/\\:*?"<>|%&]+$/,message:(0,c.t)("logic.CustomizeGroup.txt20"),trigger:"change"},{validator:function(t,r,n){""===r.trim()?n(new Error((0,c.t)("logic.CustomizeGroup.txt5"))):e.customizeGroups.some(()?n(new Error((0,c.t)("logic.CustomizeGroup.txt3"))):n()},trigger:"change"},{max:30,message:(0,c.t)("logic.CustomizeGroup.txt4"),trigger:"change"}]}}},computed:{isRename:,watch:{selectedGroup:{immediate:!0,handler:},methods:{submit:function(e){var t=this,r=this.currentTeam.corpid,o=this.currentTeam.id,s=this;this.$refs[e].validate(function(){var u=(0,n.Z)(i().mark((function n(u){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u){n.next=2;break}return n.abrupt("return");case 2:if(!t.selectedGroup.tag_id){n.next=22;break}if(n.prev=3,!t.loading){n.next=6;break}return n.abrupt("return");case 6:return t.loading=!0,n.next=9,(0,a.BKR)(r,o,t.selectedGroup.tag_id,{name:s[e].name});case 9:t.$message.success((0,c.t)("logic.CustomizeGroup.txt21")),t.handleClose(),t.onCreated(),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(3),console.log("createCustomizeGroup",n.t0),n.t0.response.data&&n.t0.response.data.msg&&"Exceed the maximum number of tags"===n.t0.response.data.msg?t.$message.error((0,c.t)("logic.CustomizeGroup.txt22")):t.$message.error((0,c.t)("logic.CustomizeGroup.txt23"));case 18:return n.prev=18,t.loading=!1,n.finish(18);case 21:return n.abrupt("return");case 22:if(n.prev=22,!t.loading){n.next=25;break}return n.abrupt("return");case 25:return t.loading=!0,n.next=28,(0,a.ycd)(r,o,{name:s[e].name});case 28:t.$message.success((0,c.t)("logic.CustomizeGroup.txt24")),t.handleClose(),t.onCreated(),n.next=37;break;case 33:n.prev=33,n.t1=n.catch(22),console.log("createCustomizeGroup",n.t1),n.t1.response.data&&n.t1.response.data.msg&&"Exceed the maximum number of tags"===n.t1.response.data.msg?t.$message.error((0,c.t)("logic.CustomizeGroup.txt25")):t.$message.error((0,c.t)("logic.CustomizeGroup.txt26"));case 37:return n.prev=37,t.loading=!1,n.finish(37);case 40:case"end":return n.stop()}}),n,null,[[3,14,18,21],[22,33,37,40]])})));return ())},handleClose:function(){this.$emit("close"),this.onCancel()}},install:function(e){e.component(u.name,u)}};t.Z=u},93323:function(e,t,r){r.d(t,{Z:);var n=r(31240),o=r(37311),i=r(49200),s=r(2406),a=r.n(s),c=r(47189),u=r(45821),l=r(99238),p=r(96133),m=r(95272),d=r(17578),f=r(7018),g=r(19731),v=r.p+"s1/static/images/8244f2769952eca40e28.gif",h=new f.PlugCtr("kso");r x={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-customize-group"},[r("div",{staticClass:"left-content"},[e.ecisGetAddGroupBtnVisible()?r("div",{staticClass:"add-group",on:{click:e.openCreateDialog}},[r("i",{staticClass:"el-icon-plus add-icon"}),e._v("\n      "+e._s(e.lang_txt0)+"\n      "),r("el-popover",{attrs:{placement:"top-start",content:e.lang_txt28,popperClass:"k-customize-group-guide-popover",trigger:"hover",effect:"dark"}},[r("div",{staticClass:"group-auth-popover-containter"},[r("div",{staticClass:"group-auth-popover-containter-title",staticStyle:{"white-space":"nowrap"}},[e._v(e._s(e.txt1))]),e._v(" "),r("img",{staticClass:"group-auth-popover-containter-img",attrs:{src:e.customGroupCreateGuide}})]),e._v(" "),r("KIcon",{staticStyle:{"margin-left":"4px",height:"16px",width:"16px"},attrs:{slot:"reference",type:"question"},slot:"reference"})],1)],1):e._e(),e._v(" "),e.customizeGroups.length<=0||e.loadingTags?r("div",{staticClass:"notfound"},[e.loadingTags?r("KLoading"):r("div",[e._v(e._s(e.lang_txt5))])],1):r("KScroll",{ref:"scroll",staticClass:"item-list",attrs:{onLoad:e.queryCustomizeGroup,canLoad:e.canLoadTags,loading:e.loadingTags,onScroll:e.onScroll}},e._l(e.customizeGroups,(function(t,n){return r("KMemberItem",{key:t.tag_id,attrs:{avatar:e.defaultIcon,name:t.tag_name,hover:!0,selected:e.selectedGroup.tag_id===t.tag_id,onItemClick:},[r("div",{attrs:{slot:"member-suffix"},on:{click:function(e){e.stopPropagation()}},slot:"member-suffix"},[e.ecisGetPluginDropdownVisible(t)?r("el-dropdown",{ref:"dropdownMenu",refInFor:!0,attrs:{trigger:"click"},on:{command:},[r("div",{staticClass:"btn-more btn-more-dropdown-wrap"},[r("i",{staticClass:"el-icon-more"})]),e._v(" "),r("el-dropdown-menu",{staticClass:"k-customize-group-dropdown-menu",attrs:{slot:"dropdown"},slot:"dropdown"},[e.ecisGetPluginDropdownItemVisible({key:"rename"})?r("el-dropdown-item",{attrs:{command:"rename"}},[r("div",{staticClass:"el-dropdown-menu__item-block"},[r("span",{staticClass:"menu-text"},[e._v(e._s(e.lang_txt1))])])]):e._e(),e._v(" "),e.ecisGetPluginDropdownItemVisible({key:"delete"})?r("el-dropdown-item",{attrs:{command:"delete"}},[r("div",{staticClass:"el-dropdown-menu__item-block"},[r("span",{staticClass:"menu-text del"},[e._v(e._s(e.lang_txt2))])])]):e._e(),e._v(" "),r(e.ecisPluginExtRender(),{tag:"component",attrs:{groupInfo:t}})],1)],1):e._e()],1)])})),1)],1),e._v(" "),r("div",{staticClass:"right-content"},[r("div",{staticClass:"title"},[e._v(e._s(e.lang_txt3))]),e._v(" "),e.ecisGetAddMembersBtnVisible()&&e.customizeGroups.length>0?r("div",{staticClass:"add-member",on:{click:e.openMemberSelector}},[r("div",{staticClass:"icon-box icon-box-add"},[r("KIcon",{attrs:{type:"add"}})],1),e._v("\n      "+e._s(e.lang_txt4)+"\n    ")]):e._e(),e._v(" "),e.selectedGroupMembers.length<=0||e.loadingMembers?r("div",{staticClass:"notfound"},[e.loadingMembers?r("KLoading"):r("div",[e._v(e._s(e.lang_txt6))])],1):r("KScroll",{ref:"scroll",staticClass:"item-list",attrs:{onLoad:e.queryCustomizeGroupMembers,canLoad:e.canLoadMembers,loading:e.loadingMembers}},e._l(e.selectedGroupMembers,(function(t,n){return r("KMemberItem",{key:n,attrs:{avatar:t.avatar,name:t.user_name,hover:!0,showClose:e.ecisGetPluginCloseShow()&&e.hoverIndex===n,onClose:,nativeOn:{mouseenter:mouseleave:})})),1)],1)])},staticRenderFns:[],name:"KCustomizeGroup",components:{KMemberItem:l.Z,KScroll:p.Z,KLoading:m.Z},props:{user:{type:Object,default:function(){return{}},required:!0},currentTeam:{type:Object,default:required:!0},isOpenAdminDocPerms:{type:Boolean,default:!0},onClosed:{type:Function,default:function(){return function(){}}}},data:function(){for(var e={},t=0,r=9;t<=10;t++,r++)e["lang_txt"+t]=(0,u.t)("logic.CustomizeGroup.txt"+r);return b(b({customGroupCreateGuide:v,defaultIcon:d,hoverIndex:-1},e),{},{loading:!1,customizeGroups:[],selectedGroup:{tag_id:null},selectedGroupMembers:[],paginationByTag:{limit:20,offset:0},pagination:{limit:20,offset:0},loadingTags:!0,canLoadTags:!0,loadingMembers:!0,canLoadMembers:!0,txt1:(0,u.t)("logic.Privilege.sample")})},computed:{cId:function(){return this.currentTeam.corpid},groupId:,created:function(){var e=this;return(0,o.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.queryCustomizeGroup();case 2:return t.next=4,e.queryCustomizeGroupMembers("click",0);case 4:case"end":return t.stop()}}),t)})))()},methods:{ecisGetAddMembersBtnVisible:function(){return h.get("DocsPermissionModal.addMemberButton.visible",!0)},ecisGetAddGroupBtnVisible:function(){return h.get("DocsPermissionModal.addGroupButton.visible",!0)},ecisGetPluginDropdownVisible:ecisGetPluginDropdownItemVisible:function(e){return h.ask("DocsPermissionModal.moreMenu.filter",[e],[e]).length>0},ecisPluginExtRender:ecisGetPluginCloseShow:onClose:queryCustomizeGroup:function(){var e=this;return(0,o.Z)(a().mark((function t(){var r,o,i,s,u,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,!e.customizeGroups.length&&(e.loadingTags=!0),t.next=4,(0,c.kV5)(e.cId,e.groupId,e.paginationByTag);case 4:r=t.sent,o=r.tags,i=void 0===o?[]:o,s=r.total,0===(u=void 0===s?0:s)?(e.canLoadTags=!1,e.customizeGroups=[]):(i.length&&e.customizeGroups.length<u?(l=e.customizeGroups).push.apply(l,(0,n.Z)(i)):e.canLoadTags=!1,e.paginationByTag.offset=e.customizeGroups.length),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),e._error(t.t0);case 15:return t.prev=15,e.loadingTags=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})))()},queryCustomizeGroupMembers:function(){var e=arguments,t=this;return(0,o.Z)(a().mark((function r(){var o,i,s,u,l,p,m,d,f;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.length>0&&void 0!==e[0]?e[0]:"scroll",i=e.length>1?e[1]:void 0,t.customizeGroups.length){r.next=4;break}return r.abrupt("return");case 4:return"click"===o&&null!==i&&(t.selectedGroup=t.customizeGroups[i],t.pagination.offset=0,t.selectedGroupMembers=[]),r.prev=5,!t.selectedGroupMembers.length&&(t.loadingMembers=!0),s=t.selectedGroup.tag_id,r.next=10,(0,c.r9n)(t.cId,t.groupId,s,t.pagination);case 10:u=r.sent,l=u.users,p=void 0===l?[]:l,m=u.total,0===(d=void 0===m?0:m)?(t.canLoadMembers=!1,t.selectedGroupMembers=[]):(p.length&&t.selectedGroupMembers.length<d?(f=t.selectedGroupMembers).push.apply(f,(0,n.Z)(p)):t.canLoadMembers=!1,t.pagination.offset=t.selectedGroupMembers.length),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(5),t._error(r.t0);case 21:return r.prev=21,t.loadingMembers=!1,r.finish(21);case 24:case"end":return r.stop()}}),r,null,[[5,18,21,24]])})))()},popPrivilegeDialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={headerTitle:(0,u.t)("logic.Privilege.title"),companyId:this.currentTeam.corpid,privilegePolicyKey:"safety_setting",activityPolicyKey:"pay_activity",width:"680px",privilegeName:"team_user_group_authorize",utmSource:(0,g.x_)(window),utmMedium:"user_group_auth",utmBuySource:"open",position:"team_user_group_authorize",isGroupPrivilege:!0,groupId:this.currentTeam.id,groupType:this.currentTeam.type,groupRole:this.currentTeam.user_role,privilegeDesc:(0,u.t)("logic.Privilege.groupAuth.txt1")},r={companyId:this.currentTeam.corpid},n=this.$__SHIELD_CONFIG__.UpgradePrivilegePolicyDialog?t:r,o=this.$__SHIELD_CONFIG__.UpgradePrivilegePolicyDialog?"DialogUpgradePrivilege":"KPrivateAlert";this.$emit("change",o,Object.assign(n,e))},openCreateDialog:function(){var e=this;return(0,o.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.OxC)("team_user_group_authorize",e.currentTeam.corpid,e.currentTeam.id);case 3:if(r=t.sent,r.status){t.next=8;break}return e.popPrivilegeDialog(),t.abrupt("return");case 8:e.$emit("change","KCreateCustomizeGroup",{title:e.lang_txt7,currentTeam:e.currentTeam,customizeGroups:e.customizeGroups,onCreated:function(){var t=(0,o.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.canLoadTags=!0,e.paginationByTag.offset=0,e.customizeGroups=[],t.next=5,e.queryCustomizeGroup();case 5:if(1!==e.customizeGroups.length){t.next=9;break}return e.canLoadMembers=!0,t.next=9,e.queryCustomizeGroupMembers("click",0);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e._error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},openMemberSelector:function(){var e=this;return(0,o.Z)(a().mark((function t(){var r,n,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.OxC)("team_user_group_authorize",e.currentTeam.corpid,e.currentTeam.id);case 3:if(r=t.sent,r.status){t.next=8;break}return e.popPrivilegeDialog(),t.abrupt("return");case 8:n=[],e.selectedGroupMembers.length&&e.selectedGroupMembers.forEach((),o={selectorProps:{sources:[{type:"teamMember",gid:e.currentTeam.id,role:e.isOpenAdminDocPerms?["member","read_member"]:["admin","member","read_member"]}],_from:"kdocs",_function:"changeTeamShareFilePermission",showInfoCard:!0,disableItems:n,onCancel:onConfirm:function(t){if(t.items.length>50)e.$message.error((0,u.t)("logic.CustomizeGroup.validateErr"));else{var r=t.items.reduce((function(e,t){return e.push(t.userid),e}),[]);e.addMemberToGroup({user_ids:r}),e.$emit("close")}}}},e.$emit("change","UikitMemberSelector",b(b({},o),{},{currentTeam:e.currentTeam})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),e._error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},renameGroup:function(e){var t=this,r=this.customizeGroups[e];this.$emit("change","KCreateCustomizeGroup",{title:this.lang_txt8,currentTeam:this.currentTeam,customizeGroups:this.customizeGroups,selectedGroup:r,onCreated:function(){t.canLoadTags=!0,t.paginationByTag.offset=0,t.customizeGroups=[],t.queryCustomizeGroup()}})},deleteGroup:function(e){var t,r=this,n=this.customizeGroups[e];this.$emit("change","KDeleteCustomizeGroup",{currentTeam:this.currentTeam,selectedGroup:n,onSuccess:(t=(0,o.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.canLoadTags=!0,r.paginationByTag.offset=0,r.pagination.offset=0,r.customizeGroups=[],r.selectedGroupMembers=[],e.next=7,r.queryCustomizeGroup();case 7:if(0!==r.customizeGroups.length){e.next=12;break}r.selectedGroup=[],r.selectedGroupMembers=[],e.next=15;break;case 12:return r.canLoadMembers=!0,e.next=15,r.queryCustomizeGroupMembers("click",0);case 15:case"end":return e.stop()}}),e)}))),})},addMemberToGroup:function(e){var t=this;return(0,o.Z)(a().mark((function r(){var n,o,i,s;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=t.selectedGroup.tag_id,r.next=4,(0,c.dyZ)(t.cId,t.groupId,n,{user_ids:e.user_ids});case 4:return o=r.sent,i=o.fail_users,(void 0===i?[]:i).length?t.$message.error(t.lang_txt10):t.$message.success(t.lang_txt9),s=t.customizeGroups.findIndex((),r.next=11,t.queryCustomizeGroupMembers("click",s);case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),t._error(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()},deleteCurMember:function(e,t){var r=this;return(0,o.Z)(a().mark((function n(){var o,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.kyR)(r.cId,r.groupId,e.tag_id,{user_ids:[e.user_id]});case 3:o=n.sent,i=o.fail_users,(void 0===i?[]:i).length||r.selectedGroupMembers.splice(t,1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r._error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},handleDropdownClick:onScroll:function(){var e=this.$refs.dropdownMenu;e&&e.map(()},onItemClick:,install:function(e){e.component(x.name,x)}},C=x},42587:function(e,t,r){var n=r(37311),o=r(2406),i=r.n(o),s=r(62414),a=r(47189),c=r(16548),u=r(45821),l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-delete-customize-group"},[r("div",{staticClass:"title"},[r("p",[e._v(e._s(e.lang_txt0)),r("span",{staticClass:"bold"},[e._v(" "+e._s(e.selectedGroup.tag_name))])]),e._v(" "),r("p",[e._v(e._s(e.lang_txt1))])]),e._v(" "),r("footer",[r("k-button",{on:{click:},[e._v(e._s(e.lang_txt2))]),e._v(" "),r("k-button",{attrs:{type:"danger",disabled:e.loading},on:{click:e.onConfirm}},[e._v(e._s(e.lang_txt3))])],1)])},staticRenderFns:[],name:"KDeleteCustomizeGroup",components:{KButton:s.Z},props:{currentTeam:{type:Object,default:function(){return{}},required:!0},selectedGroup:{type:Object,default:function(){return{}},required:!0},onSuccess:{type:Function,default:},data:function(){return{lang_txt0:(0,u.t)("logic.CustomizeGroup.txt6"),lang_txt1:(0,u.t)("logic.CustomizeGroup.txt7"),lang_txt2:(0,u.t)("logic.CustomizeGroup.txt1"),lang_txt3:(0,u.t)("logic.CustomizeGroup.txt8"),lang_txt4:(0,u.t)("logic.CustomizeGroup.txt27"),lang_txt5:(0,u.t)("logic.CustomizeGroup.txt28"),loading:!1}},computed:{},methods:{onConfirm:function(){var e=this;return(0,n.Z)(i().mark((function t(){var r,n,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.currentTeam.corpid,n=e.currentTeam.id,o=e.selectedGroup.tag_id,t.prev=3,!e.loading){t.next=6;break}return t.abrupt("return");case 6:return e.loading=!0,t.next=9,(0,a.yeN)(r,n,o);case 9:c.Z.success(e.lang_txt4),e.$emit("close"),e.onSuccess(),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),console.log("deleteCustomizeGroup",t.t0),c.Z.error(e.lang_txt5);case 18:return t.prev=18,e.loading=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[3,14,18,21]])})))()}},install:function(e){e.component(l.name,l)}};t.Z=l},67498:function(e,t,r){var n=r(31240),o=r(37311),i=r(2406),s=r.n(i),a=r(95272),c=r(96133),u=r(99238),l=r(62414),p=r(47189),m=r(45821),d=r(17578),f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-reset-permission-info-tip"},[r("div",{staticClass:"tip"},[e._v("\n    "+e._s("rootPerms"===e.permsType?e.lang_txt37:e.lang_txt38)+"\n  ")]),e._v(" "),r("div",{staticClass:"context"},[e.renderMemberList.length<=0?r("div",{staticClass:"notfound"},[e.searching?r("KLoading"):r("div",[e._v(e._s(e.lang_txt39))])],1):r("KScroll",{ref:"scroll",attrs:{onLoad:e.fetchItems,canLoad:e.canLoad,loading:e.searching}},e._l(e.renderMemberList,(function(t,n){return r("KMemberItem",{key:n,attrs:{uid:e.user.id,userid:t.id,name:e.dealListName(t),avatar:e.dealAvatar(t),hName:t.highlight&&(t.highlight.name&&t.highlight.name[0]||t.highlight.user_name&&t.highlight.user_name[0]),showInfoByAvatar:!1,hideActions:!0,hover:!1}},[r("div",{staticClass:"k-reset-permission-dropdown",attrs:{slot:"member-suffix"},slot:"member-suffix"},[["creator","owner","admin"].includes(t.role)?r("el-popover",{attrs:{popperClass:"k-customize-permission-popper",placement:"left",trigger:"hover",content:e.lang_txt3}},[r("span",{staticClass:"title",attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(e.lang_manageable))])]):r("el-popover",{ref:"popoverTip",refInFor:!0,attrs:{popperClass:"k-customize-permission-popper",placement:"left",trigger:"hover",content:t.permsSubText,disabled:!t.subject_type}},[r("span",{staticClass:"title",attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(t.compound_name))])])],1)])})),1)],1),e._v(" "),r("div",{staticClass:"footer"},[r("k-button",{on:{click:e.close}},[e._v(e._s(e.lang_txt41))]),e._v(" "),r("k-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v(e._s(e.lang_txt40))])],1)])},staticRenderFns:[],name:"KEntResetDefaultPermInfo",components:{KLoading:a.Z,KScroll:c.Z,KButton:l.Z,KMemberItem:u.Z},props:{user:{type:Object,required:!0},currentTeam:{type:Object,required:!0},selectedFile:{type:Object,default:,rolesInfoMapping:{type:Array,required:!0},compoundPerms:{type:Array,required:!0},onClose:{type:Function,default:function(){return Promise.resolve(!0)}},onConfirm:{type:Function,default:function(){return Promise.resolve(!0)}}},data:function(){return{renderMemberList:[],allRawMembersList:[],allTransMembersList:[],searching:!0,canLoad:!0,pagination:{count:20,offset:0},lang_txt3:(0,m.t)("logic.DialogEnterFilePerSetting.txt3"),lang_txt28:(0,m.t)("logic.DialogEnterFilePerSetting.txt28"),lang_txt29:(0,m.t)("logic.DialogEnterFilePerSetting.txt29"),lang_manageable:(0,m.t)("logic.DialogEnterFilePerSetting.manageable"),lang_txt37:(0,m.t)("logic.DialogEnterFilePerSetting.txt37"),lang_txt38:(0,m.t)("logic.DialogEnterFilePerSetting.txt38"),lang_txt39:(0,m.t)("logic.DialogEnterFilePerSetting.txt39"),lang_txt40:(0,m.t)("logic.DialogEnterFilePerSetting.txt40"),lang_txt41:(0,m.t)("logic.DialogEnterFilePerSetting.txt41")}},computed:{permsType:function(){return Object.keys(this.selectedFile).length?"filePerms":"rootPerms"},teamAvatar:function(){var e=this.currentTeam;return e.member_count&&e.recent_members.reduce((,[])}},created:function(){var e=this;return(0,o.Z)(s().mark(())()},methods:{fetchItems:getFileDefaultPermission:function(){var e=arguments,t=this;return(0,o.Z)(s().mark((function r(){var o,i,a,c,u,l,m,d,f,g,v,h;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.length>0&&void 0!==e[0]?e[0]:"",r.prev=1,!t.allRawMembersList.length&&(t.searching=!0),a=window.location.pathname.split("/".concat(t.currentTeam.id,"/")).length>1,c=t.currentTeam.id,u="filePerms"===t.permsType?t.selectedFile.id:0,l=0===u?-1:a?window.location.pathname.split("/".concat(t.currentTeam.id,"/"))[1]:0,r.next=9,(0,p.W6u)(c,u,{next:o,parent_id:l});case 9:if(m=r.sent,d=m.perms,f=void 0===d?[]:d,g=m.next_query,v=void 0===g?"":g,!o&&(t.allRawMembersList=[]),(i=t.allRawMembersList).push.apply(i,(0,n.Z)(f)),!v){r.next=21;break}return r.next=19,t.getFileDefaultPermission(v);case 19:r.next=25;break;case 21:h=t.getPermMemberList((0,n.Z)(t.allRawMembersList)),t.renderMemberList=t.transData(h),t.allTransMembersList=(0,n.Z)(t.transData(h)),t.searching=!1;case 25:r.next=31;break;case 27:r.prev=27,r.t0=r.catch(1),t.searching=!1,t._error(r.t0);case 31:case"end":return r.stop()}}),r,null,[[1,27]])})))()},getPermMemberList:function(e){var t=this;return e.forEach((function(e){if("user"===e.subject_type){var r=t.rolesInfoMapping.filter((function(t){return t.id===e.user_role_id}))[0];e.role=r.role_name}if(e.compound_name){var n=t.compoundPerms.find(().subText;e.permsSubText=n}})),e},transData:function(e){var t=[],r={subject_avatar:"avatar",subject_name:"name"};return e.forEach((function(e){var n=Object.keys(e).reduce((,{});t.push(n)})),t},close:function(){var e=this;return(0,o.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onClose();case 2:e.$emit("close");case 3:case"end":return t.stop()}}),t)})))()},confirm:function(){var e=this;return(0,o.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onConfirm();case 2:e.$emit("close");case 3:case"end":return t.stop()}}),t)})))()},dealListName:function(e){return["creator","owner"].includes(e.role)?"".concat(e.name,"（").concat(this.lang_txt28,"）"):"admin"===e.role?"".concat(e.name,"（").concat(this.lang_txt29,"）"):"role"===e.subject_type?"".concat(this.currentTeam.name):e.name},dealAvatar:function(e){return e.avatar?e.avatar:"role"===e.subject_type?this.teamAvatar:["userGroup","dept"].includes(e.subject_type)?d:void 0}},install:function(e){e.component(f.name,f)}};t.Z=f},2086:function(e,t,r){var n=r(31240),o=r(37311),i=r(2406),s=r.n(i),a=r(62414),c=r(80589),u=r(96133),l=r(45821),p=r(47189),m=r(50792),d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-modify-permission-info-tip"},[r("div",{staticClass:"tip"},[e._v(e._s(e.langTip))]),e._v(" "),e.isTimeout?e._e():[r("div",{staticClass:"context"},[r("KScroll",{ref:"scroll",attrs:{onLoad:e.getSubFiles,canLoad:e.canLoad,loading:e.loading}},[e._l(e.files,(function(t){return r("div",{key:t.file_id,staticClass:"file-item"},[r("div",{staticClass:"file-icon"},[r("KIcon",{attrs:{slot:"holder",type:e.getExtension(t.file_name)},slot:"holder"})],1),e._v(" "),r("div",{staticClass:"file-name"},[e._v(e._s(t.file_name))])])})),e._v(" "),e._l(e.folders,(function(t){return r("div",{key:t.file_id,staticClass:"file-item"},[r("div",{staticClass:"file-icon"},[r("KIcon",{attrs:{slot:"holder",type:"folder"},slot:"holder"})],1),e._v(" "),r("div",{staticClass:"file-name"},[e._v(e._s(t.file_name))])])}))],2)],1)],e._v(" "),r("div",{staticClass:"footer"},[r("k-button",{on:{click:e.cancel}},[e._v(e._s(e.t("logic.ModifyPermissionInfoTip.no")))]),e._v(" "),r("k-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v(e._s(e.t("logic.ModifyPermissionInfoTip.yes")))])],1)],2)},staticRenderFns:[],name:"KModifyPermissionInfoTip",components:{KButton:a.Z,KIcon:c.default,KScroll:u.Z},props:{isTimeout:{type:Boolean,default:!1},handleType:{type:String,require:!0},groupId:Number,fileId:Number,files:{type:Array,default:function(){return[]}},folders:{type:Array,default:function(){return[]}},pageNext:{type:String,default:""},compoundName:{type:String,default:""},currentUsers:{type:Array,turn[]}},onClose:{type:Function,ion(){}},onCancel:{type:Function,default:function(){return Promise.resolve(!0)}},onConfirm:{type:Function,ve(!0)}eNext}},computed:{langTip:function(){var e;if(this.isTimeout)e=(0,l.t)("logic.ModifyPermissionInfoTip.timeoutBase");else{var t=this.files.length+this.folders.length;t=this.next?"".concat(t,"+"):t,e=(0,l.t)("logic.ModifyPermissionInfoTip.base",{num:t})}if("cancel"===this.handleType)return e+(0,l.t)("logic.ModifyPermissionInfoTip.cancel");var r={add:(0,l.t)("logic.ModifyPermissionInfoTip.add"),modify:(0,l.t)("logic.ModifyPermissionInfoTip.modify")};return this.currentUsers.length>1?e+(0,l.t)("logic.ModifyPermissionInfoTip.mutilate",{action:r[this.handleType],name:this.currentUsers[0].name,count:this.currentUsers.length,perm:this.compoundName}):1===this.currentUsers.length?e+(0,l.t)("logic.ModifyPermissionInfoTip.single",{action:r[this.handleType],name:this.currentUsers[0].name,perm:this.compoundName}):e+(0,l.t)("logic.ModifyPermissionInfoTip.none",{action:r[this.handleType],perm:this.compoundName})}},methods:{t:l.t,getSubFiles:function(){var e=this;return(0,o.Z)(s().mark((function t(){var r,o,i,a,c,u,l,m,d;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.next){t.next=6;break}return e.canLoad=!1,t.abrupt("return");case 6:e.loading=!0;case 7:return t.next=9,(0,p.kpH)(e.groupId,e.fileId,{next:e.next});case 9:r=t.sent,Object.keys(r).length?(a=r.files,c=void 0===a?[]:a,u=r.folders,l=void 0===u?[]:u,m=r.next_query,d=void 0===m?"":m,c.length&&(o=e.files).push.apply(o,(0,n.Z)(c)),l.length&&(i=e.folders).push.apply(i,(0,n.Z)(l)),e.next=d):e.canLoad=!1,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),e._error(t.t0);case 16:return t.prev=16,e.loading=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})))()},cancel:function(){this.$emit("close"),this.onCancel()},firm()},getExRT)(e)}},ame,d)}};t.Z=d}}]);