(this.webpackJsonp=this.webpackJsonp||[]).push([[1007,41],{"++NP":"0Ypr":297:Y93l:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r("ewH8"),i=r("NmEs"),o=r("4lAS"),s=r("XiQx"),a=r("fSQg"),c=r("Bo17"),l=r("s1D3"),u=r("LLbv"),d=r("/lV4"),p=r("AxUD"),h={components:{GlButton:o.a,GlDisclosureDropdownItem:s.b,GlDisclosureDropdownGroup:a.a,GlDisclosureDropdown:c.a,GlIcon:l.a},directives:{GlTooltip:u.a},inject:["isGroup","id","leavePath","leaveConfirmMessage","withdrawPath","withdrawConfirmMessage","requestAccessPath"],computed:{namespaceTypehasPathleaveTitle(){return this.isGroup?this.$options.i18n.groupLeaveTitle:this.$options.i18n.projectLeaveTitle},copyTitle(){return this.isGroup?this.$options.i18n.groupCopyTitle:this.$options.i18n.projectCopyTitle},copiedToClipboardleaveItemwithdrawItemrequestAccessItemcopyIdItem,i18n:{actionsLabel:Object(d.a)("Actions"),groupCopiedToClipboard:Object(d.g)("GroupPage|Group ID copied to clipboard."),projectCopiedToClipboard:Object(d.g)("ProjectPage|Project ID copied to clipboard."),groupLeaveTitle:Object(d.a)("Leave group"),projectLeaveTitle:Object(d.a)("Leave project"),withdrawAccessTitle:Object(d.a)("Withdraw Access Request"),requestAccessTitle:Object(d.a)("Request Access"),groupCopyTitle:Object(d.g)("GroupPage|Copy group ID: %{id}"),projectCopyTitle:Object(d.g)("ProjectPage|Copy project ID: %{id}")}},f=r("tBpV"),m=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("gl-disclosure-dropdown",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip.hover",value:t.$options.i18n.actionsLabel,expression:"$options.i18n.actionsLabel",modifiers:{hover:!0}}],staticClass:"gl-relative gl-w-full gl-sm-w-auto",attrs:{category:"tertiary",icon:"ellipsis_v","no-caret":"","toggle-text":t.$options.i18n.actionsLabel,"text-sr-only":"","data-testid":"groups-projects-more-actions-dropdown"},scopedSlots:t._u([{key:"toggle",fn:proxy:!0}])},[t._v(" "),t.id?e("gl-disclosure-dropdown-item",{attrs:{item:t.copyIdItem,"data-clipboard-text":t.id}}):t._e(),t._v(" "),t.hasPath?e("gl-disclosure-dropdown-group",{attrs:{bordered:""}},[t.leavePath?e("gl-disclosure-dropdown-item",{ref:"leaveItem",attrs:{item:t.leaveItem}}):t.withdrawPath?e("gl-disclosure-dropdown-item",{attrs:{item:t.withdrawItem}}):t.requestAccessPath?e("gl-disclosure-dropdown-item",{attrs:{item:t.requestAccessItem}}):t._e()],1):t._e()],1)}),[],!1,null,null,null).exports;,YbE4:function(t,e,r){"use strict";r("3UXl"),r("iyoE");var n=r("ewH8"),i=r("NmEs"),o=r("dsWN"),s=r("Mp8J"),a={name:"DismissibleAlert",components:{GlAlert:o.a},directives:{SafeHtml:s.a},props:{html:{type:String,required:!1,default:""}},data:methods:{dismiss},c=r("tBpV"),l=Object(c.a)(a,(function(){var t=this._self._c;return this.isDismissed?this._e():t("gl-alert",this._g(this._b({on:{dismiss:this.dismiss}},"gl-alert",this.$attrs,!1),this.$listeners),[t("div",{directives:[{name:"safe-html",rawName:"v-safe-html",value:this.html,expression:"html"}]})])}),[],!1,null,null,null).exports;const u=function(t){const e=Number(t);return!t||Number.isNaN(e)?30:e},d=function(t){const e={html:t.innerHTML},r={...t.dataset,dismissible:Object(i.J)(t.dataset.dismissible)},{dismissCookieName:o,dismissCookieExpire:s}=t.dataset;return new n.default({el:t,render:t=>t(l,{props:e,attrs:r,on:{alertDismissed(){o&&Object(i.R)(o,!0,{expires:u(s)})}}})})};e.a=function(){return[...document.querySelectorAll(".js-vue-alert")].map(d)}},"kea+":function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var n=r("ewH8"),i=r("Lzak"),o=r("/lV4"),s=r("ygVz"),a=r("A7K0"),c=r("4lAS"),l={name:"TierBadgePopover",components:{GlPopover:a.a,GlButton:c.a},mixins:[s.b.mixin({label:"tier_badge"})],inject:["primaryCtaLink","secondaryCtaLink","isProject"],props:{popoverId:{type:String,required:!0},tier:{type:String,required:!0}},computed:{copyText(){const{groupCopyStart:t,projectCopyStart:e,copyEnd:r}=this.$options.i18n,n=this.isProject?e:t;return Object(o.h)(n,{tier:this.tier,copyEnd:r})}},methods:{trackPrimaryCta(){this.track("click_start_trial_button")},trackSecondaryCta(){this.track("click_compare_plans_button")}},i18n:{title:Object(o.g)("TierBadgePopover|Enhance team productivity"),groupCopyStart:Object(o.g)("TierBadgePopover|This group and all its related projects use the %{tier} GitLab tier. %{copyEnd}"),projectCopyStart:Object(o.g)("TierBadgePopover|This project uses the %{tier} GitLab tier. %{copyEnd}"),copyEnd:Object(o.g)("TierBadgePopover|Want to enhance team productivity and access advanced features like Merge Approvals, Push rules, Epics, Code Review Analytics, and Container Scanning? Try all GitLab has to offer for free for 30 days. No credit card required."),primaryCtaText:Object(o.g)("TierBadgePopover|Start a free trial"),secondaryCtaText:Object(o.g)("TierBadgePopover|Explore paid plans")}},u=r("tBpV"),d=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("gl-popover",{attrs:{title:t.$options.i18n.title,target:t.popoverId,placement:"bottom"}},[e("div",{staticClass:"gl-mb-3"},[t._v("\n    "+t._s(t.copyText)+"\n  ")]),t._v(" "),e("gl-button",{staticClass:"gl-my-2 gl-w-full",attrs:{href:t.primaryCtaLink,variant:"confirm","data-testid":"tier-badge-popover-primary-cta"},on:{click:t.trackPrimaryCta}},[t._v(t._s(t.$options.i18n.primaryCtaText))]),t._v(" "),e("gl-button",{staticClass:"gl-my-2 gl-w-full",attrs:{href:t.secondaryCtaLink,variant:"confirm",category:"secondary","data-testid":"tier-badge-popover-secondary-cta"},on:{click:t.trackSecondaryCta}},[t._v(t._s(t.$options.i18n.secondaryCtaText))])],1)}),[],!1,null,null,null).exports,p={components:{GlBadge:i.a,TierBadgePopover:d},mixins:[s.b.mixin({label:"tier_badge"})],props:{tier:{type:String,required:!1,default:Object(o.g)("TierBadge|Free")}},mounted(){this.trackRender()},methods:{trackRender(){this.track("render_badge")},trackHover(){this.track("render_flyout")}},popoverTriggerId:"tier-badge-trigger-id"},h=Object(u.a)(p,(function(){var t=this._self._c;return t("span",{staticClass:"gl-display-flex gl-align-items-center gl-ml-2",on:{mouseover:this.trackHover}},[t("gl-badge",{attrs:{id:this.$options.popoverTriggerId,"data-testid":"tier-badge",variant:"tier",size:"md"}},[this._v("\n    "+this._s(this.tier)+"\n  ")]),this._v(" "),t("tier-badge-popover",{attrs:{"popover-id":this.$options.popoverTriggerId,triggers:"hover focus manual",tier:this.tier}})],1)}),[],!1,null,null,null).exports,f=r("NmEs");function m(){const t=document.querySelector(".js-tier-badge-trigger");if(!t)return!1;const{primaryCtaLink:e,secondaryCtaLink:r,isProject:i}=t.dataset;return new n.default({el:t,name:"TierBadgeTriggerRoot",components:{TierBadge:h},provide:{primaryCtaLink:e,secondaryCtaLink:r,isProject:Object(f.J)(i)},render:t=>t(h)})}},onSc:},puZj:function(t,e,r){"use strict";r.d(e,"a"}));var n=r("7F3p");const i=function(t,e){n.a(e,{tags:{component:t}})}},tnyU:function(t,e){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"setStarStatus"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"projectId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ProjectID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"starred"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"starProject"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"projectId"},value:{kind:"Variable",name:{kind:"Name",value:"projectId"}}},{kind:"ObjectField",name:{kind:"Name",value:"starred"},value:{kind:"Variable",name:{kind:"Name",value:"starred"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:154}};r.loc.source={body:"mutation setStarStatus($projectId: ProjectID!, $starred: Boolean!) {\n  starProject(input: { projectId: $projectId, starred: $starred }) {\n    count\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var n={}r.definitions.forEach})),t.exports=r,t.exports.setStarStatu}(r,"setStarStatus")},yWh},zAUc:function(t,e,r){"use strict";r.r(e);var n=r("Erny"),i=r("CX32"),o=r("ewH8"),s=r("dsWN"),a=r("30su"),c=r("MV2A"),l=r("qLpH"),u={components:{GlAlert:s.a,GlSprintf:a.a,GlLink:c.a},inject:["message"],docsLink:Object(l.a)("user/infrastructure/clusters/migrate_to_gitlab_agent.md"),deprecationEpic:"https://gitlab.com/groups/gitlab-org/configure/-/epics/8"},d=r("tBpV"),p=Object(d.a)(u,(function(){var t=this,e=t._self._c;return e("gl-alert",{staticClass:"gl-mt-5",attrs:{dismissible:!1,variant:"warning"}},[e("gl-sprintf",{attrs:{message:t.message},scopedSlots:t._u([{key:"link",fn:function({content:r}){return[e("gl-link",{attrs:{href:t.$options.docsLink}},[t._v(t._s(r))])]}},{key:"deprecationLink",f}}])})],1)}),[],!1,null,null,null).exports,h=r("0Ypr"),f=r("bjR0"),m=(r("ZzK0"),r("z6RN"),r("BzOf"),r("yWhq")),b=r("GiFX"),g=r("5v28"),v=r("NmEs"),j=(r("TPye"),r("4lAS")),y=r("1fc5"),O=r("s1D3"),w=r("LLbv"),k=r("/lV4"),T=r("puZj"),S=r("FxFN"),C=r("4wgn"),P=r("tnyU"),_=r.n(P),$={name:"StarCount",components:{GlButton:j.a,GlButtonGroup:y.a,GlIcon:O.a},directives:{GlTooltip:w.a},inject:{projectId:{default:null},signInPath:{default:""},starCount:{default:0},starred:{default:!1},starrersPath:{default:""}},da},computed:{starIc},starText(){return this.isStarred?Object(k.g)("ProjectOverview|Unstar"):Object(k.g)("ProjectOverview|Star")},starHref(){return Object(v.D)()?null:this.signInPath},tooltip(){return Object(v.D)()?this.starText:Object(k.g)("ProjectOverview|You must sign in to star a project")}},methods:{showToastMessage(){const t={text:Object(k.g)("ProjectOverview|Star toggle failed. Try again later."),variant:"danger"};this.$toast.show(t.text,{variant:t.variant})},async setStarStatus(){if(Object(v.D)())try{var t;const{data:e}=await this.$apollo.mutate({mutation:_.a,variables:{projectId:Object(S.b)(C.u,this.projectId),starred:!this.isStarred}});(null===(t=e.errors)||void 0===t?void 0:t.length)>0?(Object(T.a)(this.$options.name,new Error(e.errors.join(", "))),this.showToastMessage()):(this.count=e.starProject.count,this.isStarred=!this.isStarred)}catch(t){Object(T.a)(this.$options.name,t),this.showToastMessage()}}},modalId:"custom-notifications-modal"},x=Object(d.a)($,(function(){var t=this,e=t._self._c;return e("gl-button-group",{attrs:{vertical:!1}},[e("gl-button",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],staticClass:"star-btn",attrs:{size:"medium","data-testid":"star-button",title:t.tooltip,href:t.starHref},on:{clic}}},[e("gl-icon",{attrs:{name:t.starIcon,size:16}}),t._v("\n    "+t._s(t.starText)+"\n  ")],1),t._v(" "),e("gl-button",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],staticClass:"star-count",attrs:{"data-testid":"star-count",size:"medium",href:t.starrersPath,title:t.s__("ProjectOverview|Starrers")}},[t._v("\n    "+t._s(t.count)+"\n  ")])],1)}),[],!1,null,null,null).exports;o.default.use(m.a),o.default.use(b.b);const B=new b.b({defaultClient:Object(g.b)()});var D=r("++NP"),A=r("ygVz"),I=r("0SQv");const E=A.b.mixin({label:"terraform_banner"});var N={name:"TerraformNotification",i18n:{title:Object(k.g)("TerraformBanner|Using Terraform? Try the GitLab Managed Terraform State"),description:Object(k.g)("TerraformBanner|The GitLab managed Terraform state backend can store your Terraform state easily and securely, and spares you from setting up additional remote resources. Its features include: versioning, encryption of the state file both in transit and at rest, locking, and remote Terraform plan/apply execution."),buttonText:Object(k.g)("TerraformBanner|Learn more about GitLab's Backend State")},components:{GlBanner:D.a,UserCalloutDismisser:I.a},mixins:[E],inject:["terraformImagePath"],computed:{docsUr)},methods:{handleClo},buttonCli}}},L=Object(d.a)(N,(function(){var t=this,e=t._self._c;return e("user-callout-dismisser",{ref:"calloutDismisser",attrs:{"feature-name":"terraform_notification_dismissed"},scopedSlots:t._u([{key:"default",fn:function({shouldShowCallout:r}){return[r?e("div",{staticClass:"gl-py-5"},[e("gl-banner",{attrs:{title:t.$options.i18n.title,"button-text":t.$options.i18n.buttonText,"button-link":t.docsUrl,"svg-path":t.terraformImagePath,variant:"promotion"},on:{primary:t.buttonClick,close:t.handleClose}},[e("p",[t._v(t._s(t.$options.i18n.description))])])],1):t._e()]}}])})}),[],!1,null,null,null).exports;o.default.use(b.b);const G=new b.b({defaultClient:Object(g.b)()});var F=r("htAy"),q=r("XqDB"),M=r("CSd6");var U={components:{GlButton:j.a,UploadBlobModal:M.a},directives:{GlModal:q.a},inject:{targetBranch:{default:""},originalBranch:{default:""},canPushCode:{default:!1},path:{default:""},projectPath:{default:""}},uploadBlobModalId:"details-modal-upload-blob"},H=Object(d.a)(U,(function(){var t=this,e=t._self._c;return e("span",[e("gl-button",{directives:[{name:"gl-modal",rawName:"v-gl-modal",value:t.$options.uploadBlobModalId,expression:"$options.uploadBlobModalId"}],staticClass:"stat-link gl-px-0!",attrs:{variant:"link",icon:"upload","button-text-classes":"gl-ml-2","data-testid":"upload-file-button"}},[t._v(t._s(t.__("Upload File")))]),t._v(" "),e("upload-blob-modal",{attrs:{"modal-id":t.$options.uploadBlobModalId,"commit-message":t.__("Upload New File"),"target-branch":t.targetBranch,"original-branch":t.originalBranch,"can-push-code":t.canPushCode,path:t.path}})],1)}),[],!1,null,null,null).exports;var R=r("bGfL"),V={components:{GlButtonGroup:y.a,GlButton:j.a},directives:{GlTooltip:w.a},inject:{forksCount:{default:0},projectFullPath:{default:""},projectForksUrl:{default:""},userForkUrl:{default:""},newForkUrl:{default:""},canReadCode:{default:!1},canCreateFork:{default:!1},canForkProject:{default:!1}},computed:{forkButtonUrl(){return this.userForkUrl||this.newForkUrl},userHasForkAcce},userCanFo},forkButtonEnabl},forkButtonTooltip(){return this.canForkProject?this.canCreateFork?this.userHasForkAccess?Object(k.g)("ProjectOverview|Go to your fork"):Object(k.g)("ProjectOverview|Create new fork"):Object(k.g)("ProjectOverview|You have reached your project limit"):Object(k.g)("ProjectOverview|You don't have permission to fork this project")}}},z=Object(d.a)(V,(function(){var t=this,e=t._self._c;return e("gl-button-group",{attrs:{vertical:!1}},[e("gl-button",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],attrs:{"data-testid":"fork-button",disabled:!t.forkButtonEnabled,href:t.forkButtonUrl,icon:"fork",title:t.forkButtonTooltip}},[t._v(t._s(t.s__("ProjectOverview|Fork")))]),t._v(" "),e("gl-button",{attrs:{"data-testid":"forks-count",disabled:!t.canReadCode,href:t.projectForksUrl}},[t._v(t._s(t.forksCount))])],1)}),[],!1,null,null,null).exports;var J=function(){const t=document.getElementById("js-forks-button");if(!t)return!1;const{forksCount:e,projectFullPath:r,projectForksUrl:n,userForkUrl:i,newForkUrl:s,canReadCode:a,canCreateFork:c,canForkProject:l}=t.dataset;return new o.default({el:t,provide:{forksCount:e,projectFullPath:r,projectForksUrl:n,userForkUrl:i,newForkUrl:s,canReadCode:Object(v.J)(a),canCreateFork:Object(v.J)(c),canForkProject:Object(v.J)(l)},render:t=>t(z)})},W=r("b4aW"),X=r("Y93l");document.getElementById("js-tree-list")&&Promise.all([r.e(63),r.e(1093),r.e(114),r.e(134),r.e(310)]).then(r.bind(null,"Jw/Q")).then((function({default:t}){t()})).catch((function(){})),document.querySelector(".blob-viewer")&&Promise.resolve().then(r.bind(null,"MA/v")).then((function({BlobViewer:t}){new t})).catch((function(){})),document.querySelector(".project-show-activity")&&r.e(351).then(r.bind(null,"XSeh")).then((function({default:t}){new t})).catch((function(){})),Object(f.a)(),function(){const t=document.querySelectorAll(".js-vue-star-count");0!==t.length&&t.forEach((function(t){const{projectId:e,starCount:r,starred:n,starrersPath:i,signInPath:s}=t.dataset;return new o.default({el:t,provide:{starred:Object(v.J)(n),starCount:r,projectId:e,starrersPath:i,signInPath:s},render:t=>t(x),apolloProvider:B})}))}(),Object(n.a)(i.a),function(){const t=document.querySelector(".js-upload-file-trigger");if(!t)return!1;const{targetBranch:e,originalBranch:r,canPushCode:n,path:i,projectPath:s}=t.dataset;new o.default({el:t,router:Object(F.a)(s,r),provide:{targetBranch:e,originalBranch:r,canPushCode:Object(v.J)(n),path:i,projectPath:s},rende)})}(),function(){const t=document.querySelector(".js-clusters-deprecation-alert");if(!t)return!1;const{message:e}=t.dataset;new o.default({el:t,name:"ClustersDeprecationAlertRoot",provide:{message:e},render:function(t){return t(p)}})}(),function(){const t=document.querySelector(".js-terraform-notification");if(!t)return!1;const{terraformImagePath:e}=t.dataset;new o.default({el:t,apolloProvider:G,provide:{terraformImagePath:e},rende}})}(),Object(R.a)(),Object(W.a)(),document.querySelector(".js-autodevops-banner")&&r.e(1075).then(r.bind(null,"eRnp")).then((function({default:t}){new t({setCalloutPerProject:!1,className:"js-autodevops-banner"})})).catch})),J(),Object(X.a)(),Object(h.a)("project");var Y=r("YbE4"),Q=r("kea+");Object(Y.a)(),Object(Q.a)()}},[[297,1,0,2,4,15,32,110,124,146,200,303]]]);
//# sourceMappingURL=pages.projects.show.bd6965ef.chunk.js.map