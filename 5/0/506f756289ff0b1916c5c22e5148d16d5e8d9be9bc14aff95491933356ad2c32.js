(this.webpackJsonp=this.webpackJsonp||[]).push([[200],{"+kWK":"20aQ":FIKT:IZAz:Knu6:"Q4Z+":QJd2:WyuF:function(e,t,i){"use strict";i.r(t),i.d(t,"default",();i("lFMf"),i("gOHk"),i("c9hT"),i("byxs");var n=i("4lAS"),a=i("ewH8"),r=i("yi8e"),o=i("NmEs"),s=i("3twG"),l=i("/lV4"),d=i("m4yQ"),c=i("Knu6"),u=i("Iixh"),m=i("lOtA"),p=i("c0EM"),f=i("tBpV"),h=Object(f.a)({},(,[],!1,null,null,null).exports,v=(i("RFHG"),i("z6RN"),i("xuo1"),i("UezY"),i("hG7+"),i("Bo17")),g=i("XqDB"),k=i("o5TZ"),b=i.n(k),y=i("GuZl"),S=i("jEr0"),_=i("h6C7"),N=i.n(_),w=i("FIKT"),j=i.n(w),P=i("CSd6"),C=i("dsWN"),T=i("1cpz"),F=i("F6ad"),O=i("l5WF"),x=i("PrLL"),E=i("47in"),D=i("j00k"),I=i("jlnU"),q=i("2ibD"),A=i("uQq6");const B=Object(l.a)("Create New Directory"),L=Object(l.a)("Create directory"),$=Object(l.a)("Directory name"),G=Object(l.a)("Error creating new directory. Please try again.");var U={components:{GlAlert:C.a,GlModal:T.a,GlForm:F.a,GlFormGroup:O.a,GlFormInput:x.a,GlFormTextarea:E.a,GlToggle:D.a},i18n:{DIR_LABEL:$,COMMIT_LABEL:A.b,TARGET_BRANCH_LABEL:A.t,TOGGLE_CREATE_MR_LABEL:A.v,NEW_BRANCH_IN_FORK:A.m,PRIMARY_OPTIONS_TEXT:L,ERROR_MESSAGE:G},props:{modalTitle:{type:String,default:B,required:!1},modalId:{type:String,required:!0},primaryBtnText:{type:String,default:L,required:!1},commitMessage:{type:String,required:!0},targetBranch:{type:String,required:!0},originalBranch:{type:String,required:!0},path:{type:String,required:!0},canPushCode:{type:Boolean,required:!0}},datacomputed:{primaryOptionscancelOptionsshowCreateNewMrToggleformCompleted,methods:{submitForm},R=Object(f.a)(U,(,[],!1,null,null,null).exports;var V={components:{GlDisclosureDropdown:v.a,UploadBlobModal:P.a,NewDirectoryModal:R},apollo:{projectShortPath:{query:j.a},projectPath:{query:N.a},userPermissions:{query:b.a,variablesupdate:error(e){throw e}}},directives:{GlModal:g.a},mixins:[S.a],props:{currentPath:{type:String,required:!1,default:""},refType:{type:String,required:!1,default:null},canCollaborate:{type:Boolean,required:!1,default:!1},canEditTree:{type:Boolean,required:!1,default:!1},canPushCode:{type:Boolean,required:!1,default:!1},selectedBranch:{type:String,required:!1,default:""},originalBranch:{type:String,required:!1,default:""},newBranchPath:{type:String,required:!1,default:null},newTagPath:{type:String,required:!1,default:null},newBlobPath:{type:String,required:!1,default:null},forkNewBlobPath:{type:String,required:!1,default:null},forkNewDirectoryPath:{type:String,required:!1,default:null},forkUploadBlobPath:{type:String,required:!1,default:null},uploadPath:{type:String,required:!1,default:""},newDirPath:{type:String,required:!1,default:""}},uploadBlobModalId:"modal-upload-blob",newDirectoryModalId:"modal-new-directory",data:computed:{pathLinkscanCreateMrFromForkhasPushCodePermissionshowUploadModal(){return this.canEditTree&&!this.$apollo.queries.userPermissions.loading},showNewDirectoryModaldropdownDirectoryItemsdropdownRepositoryItemsdropdownItemsisBlobPathrenderAddToTreeDropdownnewDirectoryPath,methods:{isLast},M=Object(f.a)(V,(,[],!1,null,null,null).exports,z=(i("3UXl"),i("iyoE"),{components:{GlButton:n.a},props:{currentPath:{type:String,required:!1,default:null},links:{type:Array,required:!0}},computed:{normalizedLinks}),K=Object(f.a)(z,(,[],!1,null,null,null).exports,H=i("gpiL"),W=i("1fc5"),Q=i("FkSe"),Z=i("LLbv"),X=i("Mp8J"),Y=i("Q4Z+"),J=i.n(Y),ee=i("iM2x"),te=i("rK/1"),ie=i("Lzak"),ne=i("A7K0"),ae=i("MV2A"),re=i("qLpH");const oe=Object(l.a)("Subject Key Identifier:"),se="VERIFIED",le="UNVERIFIED",de="UNVERIFIED_KEY",ce="UNKNOWN_KEY",ue="OTHER_USER",me="SAME_USER_DIFFERENT_EMAIL",pe="MULTIPLE_SIGNATURES",fe="REVOKED_KEY",he="VERIFIED_SYSTEM",ve="GpgSignature",ge="X509Signature",ke="SshSignature",be={variant:"muted",label:Object(l.a)("Unverified"),title:Object(l.a)("Unverified signature"),description:Object(l.a)("This commit was signed with an unverified signature.")},ye={variant:"success",label:Object(l.a)("Verified"),title:Object(l.a)("Verified commit")},Se={[se]:{...ye,description:Object(l.a)("This commit was signed with a verified signature and the committer email was verified to belong to the same user.")},[he]:{...ye,description:Object(l.a)("This commit was created in the GitLab UI, and signed with a GitLab-verified signature.")},[le]:{...be},[de]:{...be},[ce]:{...be},[ue]:{variant:"muted",label:Object(l.a)("Unverified"),title:Object(l.a)("Different user's signature"),description:Object(l.a)("This commit was signed with an unverified signature.")},[me]:{variant:"muted",label:Object(l.a)("Unverified"),title:Object(l.a)("GPG key mismatch"),description:Object(l.a)("This commit was signed with a verified signature, but the committer email is not associated with the GPG Key.")},[pe]:{variant:"muted",label:Object(l.a)("Unverified"),title:Object(l.a)("Multiple signatures"),description:Object(l.a)("This commit was signed with multiple signatures.")},[fe]:{variant:"muted",label:Object(l.a)("Unverified"),title:Object(l.g)("CommitSignature|Unverified signature"),description:Object(l.g)("CommitSignature|This commit was signed with a key that was revoked.")}},_e={[ve]:{keyLabel:Object(l.a)("GPG Key ID:"),keyNamespace:"gpgKeyPrimaryKeyid",helpLink:{label:Object(l.a)("Learn about signing commits"),path:"user/project/repository/signed_commits/index.md"}},[ge]:{keyLabel:"",helpLink:{label:Object(l.a)("Learn more about X.509 signed commits"),path:"/user/project/repository/signed_commits/x509.md"},subjectTitle:Object(l.a)("Certificate Subject"),issuerTitle:Object(l.a)("Certificate Issuer"),keyIdentifierTitle:Object(l.a)("Subject Key Identifier:")},[ke]:{keyLabel:Object(l.a)("SSH key fingerprint:"),keyNamespace:"keyFingerprintSha256",helpLink:{label:Object(l.a)("Learn about signing commits with SSH keys."),path:"/user/project/repository/signed_commits/ssh.md"}}};var Ne={props:{subject:{type:String,required:!0},title:{type:String,required:!0},subjectKeyIdentifier:{type:String,required:!0}},computed:{subjectValuessubjectKeyIdentifierToDisplay,i18n:{keyIdentifierTitle:oe}},we=Object(f.a)(Ne,(,[],!1,null,null,null).exports,je={components:{GlBadge:ie.a,GlPopover:ne.a,GlLink:ae.a,X509CertificateDetails:we},props:{signature:{type:Object,required:!0}},computed:{statusConfig(){var e,t;return null===(e=this.$options.statusConfig)||void 0===e?void 0:e[null===(t=this.signature)||void 0===t?void 0:t.verificationStatus]},typeConfig,methods:{helpPagePath:re.a,getSubjectKeyIdentifierToDisplay:,typeConfig:_e,statusConfig:Se},Pe=Object(f.a)(je,(,[],!1,null,null,null).exports,Ce=i("JYQl"),Te={components:{CommitInfo:i("b/FR").a,ClipboardButton:te.a,SignatureBadge:Pe,CiIcon:ee.a,GlButtonGroup:W.a,GlButton:n.a,GlLoadingIcon:Q.a},directives:{GlTooltip:Z.a,SafeHtml:X.a},mixins:[S.a],apollo:{projectPath:{query:N.a},commit:{query:J.a,variablesupdate:function(e){var t,i;const n=null===(t=e.project)||void 0===t||null===(t=t.repository)||void 0===t||null===(t=t.paginatedTree)||void 0===t||null===(t=t.nodes[0])||void 0===t?void 0:t.lastCommit,a=null==n||null===(i=n.pipelines)||void 0===i?void 0:i.edges;return{...n,pipeline:(null==a?void 0:a.length)&&a[0].node}},error},props:{currentPath:{type:String,required:!1,default:""},refType:{type:String,required:!1,default:null}},data:computed:{statusTitle(){var e;return Object(l.h)(Object(l.g)("PipelineStatusTooltip|Pipeline: %{ciStatus}"),{ciStatus:null===(e=this.commit)||void 0===e||null===(e=e.pipeline)||void 0===e||null===(e=e.detailedStatus)||void 0===e?void 0:e.text})},isLoadingshowCommitId(){var e;return null===(e=this.commit)||void 0===e||null===(e=e.sha)||void 0===e?void 0:e.substr(0,8)}},watch:{currentPath,mounted(){Ce.a.$on(A.g,this.refetchLastCommit)},beforeDestroymethods:{refetchLastCommit},Fe=Object(f.a)(Te,(,[],!1,null,null,null).exports,Oe=i("U5ZW"),xe=i("Erny"),Ee=i("fXLe"),De=i("erMc"),Ie=i("t8rf"),qe=i("20aQ"),Ae=i.n(qe),Be={i18n:{findFile:Object(l.a)("Find file"),blame:Object(l.a)("Blame"),history:Object(l.a)("History"),permalink:Object(l.a)("Permalink"),errorMessage:Object(l.a)("An error occurred while loading the blob controls.")},buttonClassList:"gl-sm-w-auto gl-w-full gl-sm-mt-0 gl-mt-3",components:{GlButton:n.a},mixins:[S.a],apollo:{project:{query:Ae.a,variablesskiperror},props:{projectPath:{type:String,required:!0},refType:{type:String,required:!1,default:null}},data:computed:{filePathshowBlobControlsblobInfo(){var e;return(null===(e=this.project)||void 0===e||null===(e=e.repository)||void 0===e||null===(e=e.blobs)||void 0===e?void 0:e.nodes[0])||{}},showBlameButton,watch:{showBlobControlsblobInfo,methods:{initShortcutsinitLinksUpdate},Le=Object(f.a)(Be,(function(){var e=this,t=e._self._c;return e.showBlobControls?t("div",{staticClass:"gl-display-flex gl-gap-3 gl-align-items-baseline"},[t("gl-button",{class:e.$options.buttonClassList,attrs:{"data-testid":"find",href:e.blobInfo.findFilePath}},[e._v("\n    "+e._s(e.$options.i18n.findFile)+"\n  ")]),e._v(" "),e.showBlameButton?t("gl-button",{staticClass:"js-blob-blame-link",class:e.$options.buttonClassList,attrs:{"data-testid":"blame",href:e.blobInfo.blamePath}},[e._v("\n    "+e._s(e.$options.i18n.blame)+"\n  ")]):e._e(),e._v(" "),t("gl-button",{class:e.$options.buttonClassList,attrs:{"data-testid":"history",href:e.blobInfo.historyPath}},[e._v("\n    "+e._s(e.$options.i18n.history)+"\n  ")]),e._v(" "),t("gl-button",{staticClass:"js-data-file-blob-permalink-url",class:e.$options.buttonClassList,attrs:{"data-testid":"permalink",href:e.blobInfo.permalinkPath}},[e._v("\n    "+e._s(e.$options.i18n.permalink)+"\n  ")])],1):e._e()}),[],!1,null,null,null).exports,$e=i("QJd2"),Ge=i("k6Do"),Ue=i.n(Ge),Re=i("f/vg"),Ve=i.n(Re),Me=i("htAy"),ze=i("jHQk"),Ke=i("2o4f");function He(){const e=document.getElementById("js-tree-list"),{dataset:t}=e,{projectPath:i,projectShortPath:r,ref:c,escapedRef:f,fullName:v,resourceId:g,userId:k,explainCodeAvailable:b}=t,y=Object(Me.a)(i,f);$e.a.clients.defaultClient.cache.writeQuery({query:Ue.a,data:{commits:[]}}),$e.a.clients.defaultClient.cache.writeQuery({query:N.a,data:{projectPath:i}}),$e.a.clients.defaultClient.cache.writeQuery({query:j.a,data:{projectShortPath:r}}),$e.a.clients.defaultClient.cache.writeQuery({query:Ve.a,data:{ref:c,escapedRef:f}});new a.default({el:document.getElementById("js-last-commit"),router:y,apolloProvider:$e.a,render),new a.default({el:document.getElementById("js-blob-controls"),router:y,apolloProvider:$e.a,render),),),y.afterEach(();const S=document.getElementById("js-repo-breadcrumb");if(S){const{canCollaborate:e,canEditTree:t,canPushCode:i,selectedBranch:n,newBranchPath:r,newTagPath:s,newBlobPath:l,forkNewBlobPath:d,forkNewDirectoryPath:u,forkUploadBlobPath:m,uploadPath:p,newDirPath:f}=S.dataset;y.afterEach((),new a.default({el:S,router:y,apolloProvider:$e.a,render)}const _=document.getElementById("js-tree-history-link"),{historyLink:w}=_.dataset;new a.default({el:_,router:y,render),Object(d.default)({el:document.getElementById("js-tree-web-ide-link"),router:y});const P=document.querySelector(".js-directory-downloads");return P&&new a.default({el:P,router:y,render),new a.default({el:e,store:Object(u.a)(),router:y,apolloProvider:$e.a,provide:{resourceId:g,userId:k,explainCodeAvailable:Object(o.G)(b),highlightWorker:gon.features.highlightJsWorker?new p.a:null},render:),{router:y,data:t,apolloProvider:$e.a,projectPath:i}}a.default.use(r.b),a.default.use(c.a,{components:["SimpleViewer","BlobContent"]})},ZHzM:"b/FR":function(e,t,i){"use strict";var n=i("4lAS"),a=i("MV2A"),r=i("LLbv"),o=i("/lV4"),s=i("Mp8J"),l=i("IZAz"),d=i("Fsq/"),c=i("ZHzM"),u=i("+kWK"),m=i("jEr0"),p={components:{UserAvatarLink:c.a,TimeagoTooltip:d.a,GlButton:n.a,GlLink:a.a,UserAvatarImage:u.a},directives:{GlTooltip:r.a,SafeHtml:s.a},mixins:[m.a],props:{commit:{type:Object,required:!0},prevBlameLink:{type:String,required:!1,default:null}},data:computed:{commitDescription(){var e;return null===(e=this.commit)||void 0===e||null===(e=e.descriptionHtml)||void 0===e?void 0:e.replace(/^&#x000A;/,"")},avatarLinkAltText,methods:{toggleShowDescription,defaultAvatarUrl:l.a,safeHtmlConfig:{ADD_TAGS:["gl-emoji"]},i18n:{toggleCommitDescription:Object(o.a)("Toggle commit description"),authored:Object(o.a)("authored")}},f=i("tBpV"),h=Object(f.a)(p,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"well-segment commit gl-min-h-8 gl-p-2 gl-w-full gl-display-flex"},[e.commit.author?t("user-avatar-link",{staticClass:"gl-my-2 gl-mr-4",attrs:{"link-href":e.commit.author.webPath,"img-src":e.commit.author.avatarUrl,"img-alt":e.avatarLinkAltText,"img-size":32}}):t("user-avatar-image",{staticClass:"gl-my-2 gl-mr-4",attrs:{"img-src":e.commit.authorGravatar||e.$options.defaultAvatarUrl,size:32}}),e._v(" "),t("div",{staticClass:"commit-detail flex-list gl-display-flex gl-flex-grow-1 gl-min-w-0"},[t("div",{staticClass:"commit-content gl-w-full gl-display-inline-flex gl-flex-wrap gl-align-items-baseline",attrs:{"data-testid":"commit-content"}},[t("div",{staticClass:"gl-flex-basis-full gl-display-inline-flex gl-align-items-center gl-column-gap-3"},[t("gl-link",{directives:[{name:"safe-html",rawName:"v-safe-html:[$options.safeHtmlConfig]",value:e.commit.titleHtml,expression:"commit.titleHtml",arg:e.$options.safeHtmlConfig}],staticClass:"commit-row-message item-title gl-line-clamp-1 gl-word-break-all!",class:{"gl-font-style-italic":!e.commit.message},attrs:{href:e.commit.webPath}}),e._v(" "),e.commit.descriptionHtml?t("gl-button",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],staticClass:"text-expander gl-ml-0!",class:{open:e.showDescription},attrs:{title:e.$options.i18n.toggleCommitDescription,"aria-label":e.$options.i18n.toggleCommitDescription,selected:e.showDescription,icon:"ellipsis_h"},on:{click:e.toggleShowDescription}}):e._e()],1),e._v(" "),t("div",{staticClass:"committer gl-flex-basis-full"},[e.commit.author?t("gl-link",{staticClass:"commit-author-link js-user-link",attrs:{href:e.commit.author.webPath}},[e._v("\n          "+e._s(e.commit.author.name))]):[e._v("\n          "+e._s(e.commit.authorName)+"\n        ")],e._v("\n        "+e._s(e.$options.i18n.authored)+"\n        "),t("timeago-tooltip",{attrs:{time:e.commit.authoredDate,"tooltip-placement":"bottom"}})],2),e._v(" "),e.commitDescription?t("pre",{directives:[{name:"safe-html",rawName:"v-safe-html:[$options.safeHtmlConfig]",value:e.commitDescription,expression:"commitDescription",arg:e.$options.safeHtmlConfig}],staticClass:"commit-row-description gl-mb-3 gl-white-space-pre-line",class:{"gl-display-block!":e.showDescription}}):e._e()]),e._v(" "),t("div",{staticClass:"gl-flex-grow-1"}),e._v(" "),e._t("default")],2),e._v(" "),e.prevBlameLink?t("div",{directives:[{name:"safe-html",rawName:"v-safe-html:[$options.safeHtmlConfig]",value:e.prevBlameLink,expression:"prevBlameLink",arg:e.$options.safeHtmlConfig}]}):e._e()],1)}),[],!1,null,null,null);t.a=h.exports},"h/C0":k6Do:mFhR:o5TZ:]);
//# sourceMappingURL=treeList.25853969.chunk.js.map