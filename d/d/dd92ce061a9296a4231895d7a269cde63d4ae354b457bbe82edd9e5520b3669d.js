(this.webpackJsonp=this.webpackJsonp||[]).push([[126],{Pyc4:function(e,t,o){"use strict";o.r(t);var i=o("FkSe"),n=(o("UezY"),o("z6RN"),o("hG7+"),o("1cpz")),r=o("30su"),a=o("MV2A"),s=o("Bo17"),l=o("fSQg"),d=o("XiQx"),c=o("/lV4"),p=o("3twG"),u=o("ygVz"),k=(o("3UXl"),o("iyoE"),o("WHSv")),h=o.n(k);const f={btnText:Object(c.a)("Create a new fork"),title:Object(c.a)("Fork project?"),message:Object(c.a)("You can’t edit files directly in this project."),existingForksMessage:Object(c.a)("To submit your changes in a merge request, switch to one of these forks or create a new fork."),newForkMessage:Object(c.a)("To submit your changes in a merge request, create a new fork.")};var g={name:"ConfirmForkModal",components:{GlModal:n.a,GlLoadingIcon:i.a,GlLink:a.a},inject:{projectPath:{default:""}},model:{prop:"visible",event:"change"},props:{visible:{type:Boolean,required:!1,default:!1},modalId:{type:String,required:!0},forkPath:{type:String,required:!0}},dat),apollo:{forks:{query:h.a,variabl},upda}}},computed:{isLoading(){return this.$apollo.queries.forks.loading},hasWritableFor},btnActions(){return{cancel:{text:Object(c.a)("Cancel")},primary:{text:this.$options.i18n.btnText,attributes:{href:this.forkPath,variant:"confirm"}}}}},i18n:f},m=o("tBpV"),b=Object(m.a)(g,(function(){var e=this,t=e._self._c;return t("gl-modal",{attrs:{visible:e.visible,"modal-id":e.modalId,title:e.$options.i18n.title,"action-primary":e.btnActions.primary,"action-cancel":e.btnActions.cancel},on:{chang}}},[t("p",[e._v(e._s(e.$options.i18n.message))]),e._v(" "),e.isLoading?t("gl-loading-icon"):e.hasWritableForks?[t("p",[e._v(e._s(e.$options.i18n.existingForksMessage))]),e._v(" "),e._l(e.forks}))]:t("p",[e._v(e._s(e.$options.i18n.newForkMessage))])],2)}),[],!1,null,null,null).exports,w=o("d08M");const v={modal:{title:Object(c.a)("Enable Gitpod?"),content:Object(c.g)("Gitpod|To use Gitpod you must first enable the feature in the integrations section of your %{linkStart}user preferences%{linkEnd}."),actionCancelText:Object(c.a)("Cancel"),actionPrimaryText:Object(c.a)("Enable Gitpod")},webIdeText:Object(c.g)("WebIDE|Quickly and easily edit multiple files in your project."),webIdeTooltip:Object(c.g)("WebIDE|Quickly and easily edit multiple files in your project. Press . to open"),toggleText:Object(c.a)("Edit")};var y={name:"CEWebIdeLink",components:{GlModal:n.a,GlSprintf:r.a,GlLink:a.a,GlDisclosureDropdown:s.a,GlDisclosureDropdownGroup:l.a,GlDisclosureDropdownItem:d.b,ConfirmForkModal:b},i18n:v,mixins:[u.b.mixin()],props:{isFork:{type:Boolean,required:!1,default:!1},needsToFork:{type:Boolean,required:!1,default:!1},gitpodEnabled:{type:Boolean,required:!1,default:!1},isBlob:{type:Boolean,required:!1,default:!1},showEditButton:{type:Boolean,required:!1,default:!0},showWebIdeButton:{type:Boolean,required:!1,default:!0},showGitpodButton:{type:Boolean,required:!1,default:!1},showPipelineEditorButton:{type:Boolean,required:!1,default:!1},userPreferencesGitpodPath:{type:String,required:!1,default:""},userProfileEnableGitpodPath:{type:String,required:!1,default:""},editUrl:{type:String,required:!1,default:""},pipelineEditorUrl:{type:String,required:!1,default:""},webIdeUrl:{type:String,required:!1,default:""},webIdeText:{type:String,required:!1,default:""},gitpodUrl:{type:String,required:!1,default:""},gitpodText:{type:String,required:!1,default:""},disableForkModal:{type:Boolean,required:!1,default:!1},forkPath:{type:String,required:!1,default:""},forkModalId:{type:String,required:!1,default:""},webIdePromoPopoverImg:{type:String,required:!1,default:""},cssClasses:{type:String,required:!1,default:"gl-sm-ml-3"}},dat),computed:{actio},hasActions(){return this.actions.length>0},editActi},webIdeActionShortcutKe],webIdeActionTe},webIdeAction(){var e=this;if(!this.showWebIdeButton)return null;const t=this.needsToFork?{handl}}:{handl}};return{key:"webide",text:this.webIdeActionText,secondaryText:this.$options.i18n.webIdeText,shortcut:this.webIdeActionShortcutKey,tracking:{action:"click_consolidated_edit",label:"web_ide"},...t}},gitpodActionTe},computedShowGitpodButt},pipelineEditorActi},gitpodActi},enableGitpodModalPro},mountForkMod}},methods:{showMod},executeActi}}},_=Object(m.a)(y,(function(){var e=this,t=e._self._c;return t("div",{class:e.cssClasses},[e.hasActions?t("gl-disclosure-dropdown",{attrs:{variant:e.isBlob?"confirm":"default",category:e.isBlob?"primary":"secondary","toggle-text":e.$options.i18n.toggleText,"data-testid":"action-dropdown","fluid-width":"",block:""},on:{shown:function(t){return e.$emit("shown")},hidde}}},[e._t("before-actions"),e._v(" "),t("gl-disclosure-dropdown-group",{staticClass:"edit-dropdown-group-width"},e._l(e.actions,(function(o){return t("gl-disclosure-dropdown-item",{key:o.key,attrs:{item:o,"data-testid":o.key+"-menu-item"},on:{actio}},scopedSlots:e._u([{key:"list-item",fn:function(){return[t("div",{staticClass:"gl-display-flex gl-flex-direction-column"},[t("span",{staticClass:"gl-display-flex gl-justify-content-space-between gl-align-items-center gl-mb-2"},[t("span",{staticClass:"gl-font-weight-bold",attrs:{"data-testid":"action-primary-text"}},[e._v(e._s(o.text))]),e._v(" "),o.shortcut?t("kbd",{staticClass:"flat"},[e._v(e._s(o.shortcut))]):e._e()]),e._v(" "),t("span",{staticClass:"gl-font-sm gl-text-secondary",attrs:{"data-testid":"action-secondary-text"}},[e._v("\n              "+e._s(o.secondaryText)+"\n            ")])])]},proxy:!0}],null,!0)})})),1),e._v(" "),e._t("after-actions")],2):e._e(),e._v(" "),e.computedShowGitpodButton&&!e.gitpodEnabled?t("gl-modal",e._b({model:{value:e.showEnableGitpodModal,callback:function(t){e.showEnableGitpodModal=t},expression:"showEnableGitpodModal"}},"gl-modal",e.enableGitpodModalProps,!1),[t("gl-sprintf",{attrs:{message:e.$options.i18n.modal.content},scopedSlots:e._u([{key:"link",f}}],null,!1,2377202603)})],1):e._e(),e._v(" "),e.mountForkModal?t("confirm-fork-modal",{attrs:{"modal-id":e.forkModalId,"fork-path":e.forkPath},model:{value:e.showForkModal,callbac},expression:"showForkModal"}}):e._e()],1)}),[],!1,null,null,null).exports,j=o("sHIo"),x=o("dsWN"),W=o("4lAS"),S=o("8Igx"),P=o("qLpH"),F=o("FxFN"),E=o("4wgn"),G=o("Rg8B"),D=o.n(G),I=o("dkxe"),M=o("vP45"),O=o("Fsq/"),q=o("MZIA"),A=o("XRec"),T={components:{GlDisclosureDropdownItem:d.b,WorkspaceStateIndicator:q.a,WorkspaceActions:A.a,TimeAgoTooltip:O.a},mixins:[u.b.mixin()],props:{workspace:{type:Object,required:!0}},computed:{dropdownIt}},methods:{trackOpenWorkspa}}},B=Object(m.a)(T,(function(){var e=this,t=e._self._c;return t("gl-disclosure-dropdown-item",{staticClass:"gl-my-0",attrs:{item:e.dropdownItem},on:{action:e.trackOpenWorkspace},scopedSlots:e._u([{key:"list-item",fn:function(){return[t("div",{staticClass:"gl-display-flex gl-justify-content-space-between gl-align-items-center"},[t("span",{staticClass:"gl-display-inline-flex gl-flex-direction-column gl-align-items-flex-start"},[t("workspace-state-indicator",{staticClass:"gl-mb-2",attrs:{"workspace-state":e.workspace.actualState}}),e._v(" "),t("span",{staticClass:"gl-pl-1 gl-word-break-word gl-w-90p"},[e._v(e._s(e.workspace.name))]),e._v(" "),t("time-ago-tooltip",{staticClass:"gl-font-sm-600 gl-pl-1 gl-text-secondary gl-mt-2",attrs:{time:e.workspace.createdAt}})],1),e._v(" "),t("workspace-actions",{attrs:{"actual-state":e.workspace.actualState,"desired-state":e.workspace.desiredState,compact:""},on:{clic}}})],1)]},proxy:!0}])})}),[],!1,null,null,null).exports;const C={workspacesGroupLabel:Object(c.g)("Workspaces|Your workspaces"),newWorkspaceButton:Object(c.g)("Workspaces|New workspace"),noWorkspacesMessage:Object(c.g)("Workspaces|A workspace is a virtual sandbox environment for your code in GitLab."),loadingWorkspacesFailedMessage:Object(c.g)("Workspaces|Could not load workspaces"),noWorkspacesSupportMessage:Object(c.a)("To set up this feature, contact your administrator.")},$=Object(P.a)("user/workspace/index.md");var L={components:{GlAlert:x.a,GlButton:W.a,GlDisclosureDropdownGroup:l.a,GlLoadingIcon:i.a,WorkspaceDropdownItem:B,UpdateWorkspaceMutation:M.a},props:{projectId:{type:Number,required:!0},projectFullPath:{type:String,required:!0},newWorkspacePath:{type:String,required:!0},supportsWorkspaces:{type:Boolean,required:!0},borderPosition:{type:String,required:!0}},apollo:{workspaces:{query:D.a,pollInterval:I.j,variables(){return{first:I.h,after:null,before:null,includeActualStates:[I.l.creationRequested,I.l.starting,I.l.running,I.l.stopping,I.l.stopped,I.l.terminating,I.l.failed,I.l.error,I.l.unknown],projectIds:[Object(F.b)(E.v,this.projectId)]}},sk},update(e){var t;return this.loadingWorkspacesFailed=!1,(null===(t=e.currentUser.workspaces)||void 0===t?void 0:t.nodes)||[]},error(e){this.loadingWorkspacesFailed=!0,Object(S.a)(e)}}},dat),computed:{hasWorkspac},isLoadi},newWorkspacePathWithProjectId(){return`${this.newWorkspacePath}?project=${encodeURIComponent(this.projectFullPath)}`}},methods:{displayUpdateFailedAle},hideUpdateFailedAle}},i18n:C,workspacesHelpPath:$},N=Object(m.a)(L,(function(){var e=this,t=e._self._c;return t("update-workspace-mutation",{on:{updateSucceed:e.hideUpdateFailedAlert,updateFailed:e.displayUpdateFailedAlert},scopedSlots:e._u([{key:"default",fn:function({update:o}){return[t("gl-disclosure-dropdown-group",{staticClass:"edit-dropdown-group-width gl-pt-2 gl-pb-4",attrs:{bordered:"","border-position":e.borderPosition,"data-testid":"workspaces-dropdown-group"},scopedSlots:e._u([{key:"group-label",fn:function(){return[t("span",{staticClass:"gl-display-flex gl-font-base gl-line-height-1"},[e._v(e._s(e.$options.i18n.workspacesGroupLabel))])]},proxy:!0}],null,!0)},[e._v(" "),e.isLoading?t("gl-loading-icon"):[e.loadingWorkspacesFailed?t("gl-alert",{attrs:{variant:"danger","show-icon":!1,dismissible:!1}},[e._v("\n          "+e._s(e.$options.i18n.loadingWorkspacesFailedMessage)+"\n        ")]):e.hasWorkspaces?[e.updateWorkspaceErrorMessage?t("gl-alert",{attrs:{"data-testid":"update-workspace-error-alert",variant:"danger","show-icon":!1,dismissible:!1}},[e._v("\n            "+e._s(e.updateWorkspaceErrorMessage)+"\n          ")]):e._e(),e._v(" "),e._l(e.workspaces,(function(e){return t("workspace-dropdown-item",{key:e.id,attrs:{workspace:e},on:{updateWorkspac}}})}))]:t("div",{staticClass:"gl-px-4 gl-font-base gl-text-left",attrs:{"data-testid":"no-workspaces-message"}},[t("p",{staticClass:"gl-mb-0 gl-font-sm gl-text-secondary"},[e._v("\n            "+e._s(e.$options.i18n.noWorkspacesMessage)+"\n          ")]),e._v(" "),e.supportsWorkspaces?e._e():t("p",{staticClass:"gl-mb-0 gl-mt-2 gl-font-sm gl-text-secondary"},[e._v("\n            "+e._s(e.$options.i18n.noWorkspacesSupportMessage)+"\n          ")])]),e._v(" "),e.supportsWorkspaces?t("div",{staticClass:"gl-px-4 gl-py-3 gl-display-flex gl-justify-content-start"},[e.supportsWorkspaces?t("gl-button",{attrs:{href:e.newWorkspacePathWithProjectId,"data-testid":"new-workspace-button",block:""}},[e._v(e._s(e.$options.i18n.newWorkspaceButton))]):e._e()],1):e._e()]],2)]}}])})}),[],!1,null,null,null).exports,U=o("JKtV"),V={components:{GlLoadingIcon:i.a,WorkspacesDropdownGroup:N,GetProjectDetailsQuery:U.a,CeWebIdeLink:_},mixins:[Object(j.a)()],inject:{newWorkspacePath:{default:""}},props:{..._.props,projectPath:{type:String,required:!1,default:""},projectId:{type:Number,required:!1,default:0}},dat),computed:{isWorkspacesDropdownGroupAvailable(){return this.glFeatures.remoteDevelopment},shouldRenderWorkspacesDropdownGroup(){return this.isWorkspacesDropdownGroupAvailable&&this.isDropdownVisible},shouldRenderWorkspacesDropdownGroupBeforeActio},shouldRenderWorkspacesDropdownGroupAfterActio}},methods:{onDropdownShown(){this.isDropdownVisible=!0},onDropdownHidden(){this.isDropdownVisible=!1},onProjectDetailsResult({hasDevFile:e,clusterAgents:t}){this.projectDetailsLoaded=!0,this.supportsWorkspaces=e&&t.length>0},onProjectDetailsErr}}},R=Object(m.a)(V,(function(){var e=this,t=e._self._c;return t("ce-web-ide-link",e._b({on:{edit:function(t){return e.$emit("edit",t)},shown:e.onDropdownShown,hidden:e.onDropdownHidden},scopedSlots:e._u([e.shouldRenderWorkspacesDropdownGroup?{key:"after-actions",fn:function(){return[t("get-project-details-query",{attrs:{"project-full-path":e.projectPath},on:{result:e.onProjectDetailsResult,error:e.onProjectDetailsError}}),e._v(" "),e.projectDetailsLoaded?t("workspaces-dropdown-group",{attrs:{"new-workspace-path":e.newWorkspacePath,"project-id":e.projectId,"project-full-path":e.projectPath,"supports-workspaces":e.supportsWorkspaces,"border-position":"top"}}):t("div",{staticClass:"gl-my-3"},[t("gl-loading-icon")],1)]},proxy:!0}:null],null,!0)},"ce-web-ide-link",e.$props,!1))}),[],!1,null,null,null);t.default=R.exports},WHS}}]);
//# sourceMappingURL=126.d392227c.chunk.js.map