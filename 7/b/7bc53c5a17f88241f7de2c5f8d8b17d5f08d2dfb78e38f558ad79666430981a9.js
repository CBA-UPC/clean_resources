"use strict";(self.webpackChunkWPS_D23493),n=i.n(o),s=i(81301),r={name:"HideScrollBar",data:function(){return{width:"100%",isLeave:!1,canScroll:!1}},computed:{scrollbar:function(){return(0,s.default)()},style:function(){return{width:this.width}}},methods:{setWidth:function(){var e=this.$el.querySelector(".hs-scroll-box"),t=this.$el.querySelector(".hs-content"),i=e.getBoundingClientRect(),o=t.getBoundingClientRect();i.height<o.height?(this.width="calc(100% + ".concat(this.scrollbar,"px)"),this.canScroll=!0):(this.width="100%",this.canScroll=!1)},onEnter:function(){this.isLeave=!1,this.setWidth()},onOver:n()((function(){!this.isLeave&&this.setWidth()}),800),onLeave:function(){this.width="100%",this.isLeave=!0,this.canScroll=!1},onScroll:n()((function(e){var t=e&&e.target||{},i=t.offsetHeight,o=t.scrollHeight;i+t.scrollTop+30>=o&&this.$emit("scrollToBottom"),this.$emit("scroll")}),300)}},a=(0,i(51900).Z)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hs-box"},[i("div",{staticClass:"hs-hide-box",style:e.style,on:{mouseenter:e.onEnter,mouseover:e.onOver,mouseleave:e.onLeave}},[i("div",{staticClass:"hs-scroll-box",class:{"can-scroll":e.canScroll,"is-tablet":e.$ua.isTablet},on:{scroll:function(t){return e.onScroll(t)}}},[i("div",{staticClass:"hs-content"},[e._t("default")],2)])])])}),[],!1,null,null,null).exports},29694:function(e,t,i){i.r(t),i.d(t,{default:function(){return z}});var o=i(99113),n=i(4942),s=i(65830),r=i(57397),a=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"file-thumbnail-error-img-box"},[t("img",{staticClass:"file-thumbnail-error-img",attrs:{src:i(93751)}})])}],l=i(15861),c=i(87757),u=i.n(c),f=i(33958),h=i(47189),d=i(89602),p=i(81045),m={name:"Thumbnail",components:{FormatIcon:r.Z},props:{size:{type:String,default:"16px"},fileInfo:{type:Object,default:function(){return{}}},isImage:{type:Boolean,default:!1}},data:function(){return{loading:!0,hasError:!1,needStop:!1,fetchProcess:null,errorText:(0,p.GH)("docinfo_thumbnail_error_text"),errorSubtext:(0,p.GH)("docinfo_thumbnail_error_subtext")}},computed:{boxStyle:function(){return{width:this.circleSize,height:this.circleSize}},thumbnailCache:function(){return this.$store.state.file.thumbnailCache||{}},imgUrl:function(){var e=this.fileInfo||{},t=e.storeid||e.fileid||e.id||0;return this.thumbnailCache[t]&&this.thumbnailCache[t].url||""}},created:function(){},mounted:function(){this.init()},methods:{init:function(){this.getFileThumbnail()},getFileThumbnail:function(){var e=this;return(0,l.Z)(u().mark((function t(){var i,o,n,s,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,i=e.fileInfo||{},o=i.storeid||i.fileid||i.id,s={crop_params:(n={options:{need_recover:!0,fromPage:1,toPage:1,dpi:96,paperSize:0,combine2LongPic:!0,crop_params:[{width:476,height:348}],export_as_image_req:{with_title:!0}},format:"png"}).options.crop_params},!o){t.next=36;break}if(e.thumbnailCache[o]&&(e.loading=!1,e.hasError=!1),t.prev=8,r={url:"",reason:""},!e.isImage){t.next=16;break}return t.next=13,e.getImageThumbnail(o);case 13:r=t.sent,t.next=27;break;case 16:return e.fetchProcess=new f.pi,t.next=19,e.fetchProcess.executeQueryTask({fileId:o,taskParams:s,times:0,stopTimes:1});case 19:if(!(a=t.sent).url&&!["lightlinkForbid","lightlinkVerifying"].includes(a.reason)){t.next=24;break}r=a,t.next=27;break;case 24:return t.next=26,e.fetchProcess.execute({fileId:o,exportParams:n,taskParams:s});case 26:r=t.sent;case 27:e.hasError=!!r.reason,"timesRunOut"===r.reason&&(e.errorText=(0,p.GH)("docinfo_thumbnail_error_text2"),e.errorSubtext=(0,p.GH)("docinfo_thumbnail_error_subtext2")),e.loading=["lightlinkVerifying"].includes(r.reason),e.setThumbnailCache(o,r.url,r.reason),t.next=36;break;case 33:t.prev=33,t.t0=t.catch(8),e.hasError=!0;case 36:case"end":return t.stop()}}),t,null,[[8,33]])})))()},getImageThumbnail:function(e){return(0,l.Z)(u().mark((function t(){var i,o,n,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i="",o="",t.prev=2,t.next=5,(0,h.sXu)({params:{fileids:[e],max_edge:400}});case 5:n=t.sent,s=n.data,i=s.files_thumbnail_url&&s.files_thumbnail_url[e],t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),o=t.t0.response&&t.t0.response.data&&t.t0.response.data.result;case 13:return t.abrupt("return",{url:i,reason:o});case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))()},setThumbnailCache:function(e,t,i){if(e){var o={};if(i&&!["stop","timesRunOut","none"].includes(i))o[e]=null;else{if(!t)return;var n=(new Date).getTime();o[e]={expiresTime:n+18e4,url:t+"&random="+n}}this.$store.commit(d.UwI,Object.assign({},this.thumbnailCache,o))}}},beforeDestroy:function(){this.fetchProcess&&this.fetchProcess.stop(),this.fetchProcess=null}},v=i(51900),b=(0,v.Z)(m,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"file-thumbnail"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"file-thumbnail-wrapper"},[e.hasError?i("div",{staticClass:"file-thumbnail-error-page"},[e._m(0),i("div",{staticClass:"file-thumbnail-error-text"},[e._v(" "+e._s(e.errorText)+" ")]),i("div",{staticClass:"file-thumbnail-error-subtext"},[e._v(" "+e._s(e.errorSubtext)+" ")])]):i("div",{staticClass:"file-thumbnail-img-box",class:{"is-img":e.isImage}},[i("img",{staticClass:"file-thumbnail-img",attrs:{src:e.imgUrl}})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"file-thumbnail-loading"},[i("FormatIcon",{attrs:{fileType:e.fileInfo.ftype||e.fileInfo.type,fileName:e.fileInfo.fname||e.fileInfo.name,size:80}})],1)])}),a,!1,null,"6c289484",null).exports,g=i(10049),_=i(6720),w=i(6465),y={components:{LabelPopover:g.Z},props:{show:Boolean,info:{type:Object,default:function(){return{}}},selectedFileInfo:{type:Object,default:function(){return{}}}},mixins:[_.OP],data:function(){return{clickPosition:"right_info",overMaxHeight:!1,showPopover:!1,Plus:w.Z}},computed:{selectedId:function(){var e=this.$store.state.file;return e.selected&&e.selected[0]},fileLabels:function(){var e=this.$store.state.label;return(void 0===e?{}:e).currentLabels},favorIsMergeInLabel:function(){var e=this.$store.state.label;return(void 0===e?{}:e).favorIsMergeInLabel},isFavorFile:function(){var e=this.$store.state.favorite.list||[],t=this.selectedId;return!!e.find((function(e){var i=e.parentid;return"linkfolder"===e.type?i=e.linkgroupid:"team"===e.type&&(i=e.groupid),Number(t)===Number(i)}))},showFavor:function(){return this.favorIsMergeInLabel&&this.isFavorFile}},watch:{fileLabels:function(){var e=this;this.$nextTick((function(){e.checkShowAllBtn()}))}},mounted:function(){this.$store.commit(d.mID),this.$refs.labelPopover&&this.show&&this.$refs.labelPopover.getFileLabels()},methods:{checkShowAllBtn:function(){var e=this.$refs.labelList;e&&(e.scrollHeight>e.clientHeight?this.overMaxHeight=!0:this.overMaxHeight=!1)},setReference:function(e){this.$refs.popover.referenceElm=e.currentTarget||e.target},togglePopover:function(e){var t=this;return(0,l.Z)(u().mark((function i(){var o;return u().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t.clickPosition=e,i.prev=1,(o=t.$refs.popover).doToggle(),i.next=6,t.$nextTick();case 6:o.updatePopper(),i.next=11;break;case 9:i.prev=9,i.t0=i.catch(1);case 11:case"end":return i.stop()}}),i,null,[[1,9]])})))()},onPopoverShow:function(){var e=this;this.$nextTick((function(){try{e.$refs.popover.popperElm.children[0].focus()}catch(e){}}))},onKeyDown:function(e){"Escape"===e.key&&(this.showPopover=!1,this.$store.state.focus.prevFocusElement&&this.$store.state.focus.prevFocusElement.focus())}}},I=y,k=(0,v.Z)(I,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"label-in-docinfo",class:{"new-layout":!0}},[i("kd-popover",{ref:"popover",attrs:{trigger:"click",visibleArrow:!1,placement:"bottom",popperClass:"el-popover-label docinfo-popover-label",tabindex:0},on:{show:e.onPopoverShow},model:{value:e.showPopover,callback:function(t){e.showPopover=t},expression:"showPopover"}},[i("LabelPopover",{ref:"labelPopover",attrs:{position:"docInfo",docInfoClickPosition:e.clickPosition,showPopover:e.showPopover,selectedFile:e.selectedFileInfo},nativeOn:{keydown:function(t){return e.onKeyDown.apply(null,arguments)}}}),i("span",{attrs:{slot:"reference"},slot:"reference"})],1),i("div",{staticClass:"head",attrs:{tabindex:"0"}},[i("span",{staticClass:"head-title"},[e._v(e._s(e.$t("label_title")))]),i("kd-button",{directives:[{name:"show",rawName:"v-show",value:e.overMaxHeight,expression:"overMaxHeight"}],attrs:{highlight:"",type:"light",size:"small"},on:{click:function(t){return t.stopPropagation(),e.togglePopover("right_all")}},nativeOn:{touchstart:function(t){return e.setReference.apply(null,arguments)},mouseenter:function(t){return e.setReference.apply(null,arguments)}}},[e._v(e._s(e.$t("label_watch_all")))])],1),i("div",{ref:"labelList",staticClass:"label-list"},[[i("kd-tooltip",{attrs:{openDelay:400,content:e.$t("label_favor_title")}},[e.showFavor?i("kd-tag",{attrs:{color:"var(--kd-color-fill-base)"}},[e._v(e._s(e.$t("label_favor_title")))]):e._e()],1),e._l(e.fileLabels.slice(0,17),(function(t){return i("kd-tooltip",{key:t.tag_id,attrs:{openDelay:400,content:t.title}},[i("kd-tag",{attrs:{color:"var(--kd-color-fill-base)"}},[e._v(e._s(t.title))])],1)}))]],2),i("div",{staticClass:"add-label"},[i("kd-button",{attrs:{type:"secondary",prefixIcon:e.Plus},on:{click:function(t){return t.stopPropagation(),e.togglePopover("right_info")}},nativeOn:{touchstart:function(t){return e.setReference.apply(null,arguments)},mouseenter:function(t){return e.setReference.apply(null,arguments)}}},[e._v(e._s(e.$t("label_add")))])],1),i(e.kdocsExtComponents.TagDest,{tag:"component",attrs:{showEditBtn:!(!e.kdocsExtData||!e.kdocsExtData.showEditBtn)}})],1)}),[],!1,null,"9d45b65a",null),x=k.exports,C=i(69034),T=i(78684),$=i(20629),P=i(71129),S=i.n(P),F=i(30675),E=i(80554),O=i(16739),D=i(62006),L=i(19731);function H(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function A(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?H(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var Z={components:{KDocInfo:s.Z,LabelInDocInfo:x,FormatIcon:r.Z,Thumbnail:b},mixins:[T.Z],props:{needShow:{type:Boolean,required:!0},showHeader:{type:Boolean,default:!0},stickyAreaSelected:{type:Object,default:function(){return{}}}},data:function(){return{docInfoHideShare:!S().share}},watch:{"selectedFileInfo.id":function(e){e&&this.isLinkFolderAndCreator&&this.$store.dispatch(d.Dbl,{utmContent:"infopanel",group_id:this.selectedFileInfo.linkgroupid}),e&&this.showUpToTeam&&this.handleUpToTeamDot("show")}},computed:A(A(A({},(0,$.rn)({ui:function(e){return e.ui}})),(0,$.Se)(["isAppSidebarOpen","upToCompanyTeamPolicy"])),{},{selectedFileInfo:function(){var e=this.$store.state.file.selected[0];if(e){var t=["list"];return"Latest"===this.$route.name&&t.push("todolist"),t.push("team"),this.$store.getters.findFile(e,t)}if(this.stickyAreaSelected&&this.stickyAreaSelected.fileid)return this.stickyAreaSelected},iconInfo:function(){return this.selectedFileInfo||{ftype:"folder"}},fileType:function(){var e=this.iconInfo,t=e.ftype,i=e.newIconType,o=e.type;return"sharefolder"===t?"folder":t||i||("normal"===o?"linkfolder":o)},fileExt:function(){return(0,f.lm)(this.selectedFileInfo)},isImage:function(){return"img"===this.fileExt},infoThumbnailConfig:function(){return this.$store.state.switchCof.infoThumbnail},hasThumbnail:function(){var e=this,t=Object.keys(O.Nz).find((function(t){return~O.Nz[t].indexOf(e.fileExt)||""}));return(this.infoThumbnailConfig||this.powerConfig.get("isOem")&&this.powerConfig.get("list_docinfo_thumbnail_config"))&&!this.$ua.wpsDocumentEmbed&&(["s","w","p","f","o","ksheet"].includes(t)||this.isImage)},docInfoProps:function(){var e=this,t={groupid:0,fileid:0,fname:this.powerConfig.get("featurePersonalCloud")||this.powerConfig.get("isOem")?(0,p.GH)("views_file_my_cloud"):(0,p.GH)("views_file_my_enterprise"),ftype:"folder",showHeader:this.showHeader,updateTime:this.$store.state.file.docInfoUpdateTime,newLayout:!0,folderSharingOff:this.$store.state.switchCof.shieldSwitch.folderSharingOff,onClose:function(){e.dispatch("DriveContainerRoot","handleShowOverView",!1),e.close()},onShow:function(){e.sendDw("show")},onHide:function(){e.sendDw("hide")},onDataChange:function(){e.sendDw("change")}};t.fname=(0,p.GH)("views_file_info_detail");var i=this.selectedFileInfo,o="Enterprise"===this.$route.name,n=!["All","Mine","Group","Device","EntSpace","Enterprise","Team"].includes(this.$route.name);if(i){var s=i.fname,r=i.name,a=i.ftype,l=i.fileid,c=i.folderid,u=i.groupid,f=i.id,h=i.linkgroupid,m=i.isshare,v=i.file_perms_acl;v=v||{history:1};var b=(["Enterprise","EntSpace","Backup"].includes(this.$route.name)||["Tags","Label"].includes(this.$route.name)&&this.$store.state.user.is_company_account)&&["folder","sharefolder"].includes(a);Object.assign(t,{source:i,fileid:Number(c||l||f),fname:s||r,ftype:a,groupid:u,isReceivedFile:o?void 0:m,hideHistory:!v.history,user:this.$store.state.user,onShareAreaClick:function(){b?(0,E.Y)({command:"folder_link",params:i},e):(0,F.BN)({file:i},e)},onTeamClick:function(){"linkfolder"===a?e.$router.push({name:"Team",params:{tid:h}}):(0,F.BN)({file:i},e)},onHistoryAreaClick:function(){e.$store.commit(d.ZPE,"docInfo"),(0,E.Y)({command:"history",params:i,position:"docInfo"},e)},onHistoryPreview:function(t){(0,F.Eq)(t,{ua:e.$ua,route:e.$route,toastError:e._error,state:e.$store.state,message:e.$message,dialog:e.dialog,powerConfig:e.powerConfig})},onOpenFilePosition:function(){n&&(0,E.Y)({command:"catalog",params:i},e)},isAllowHover:n})}return t},showLabelInDocInfo:function(){return(!this.selectedFileInfo||"link"!==this.selectedFileInfo.ftype)&&(!this.powerConfig.get||this.powerConfig.get("LabelSwitch"))},isLinkFolderAndCreator:function(){return this.selectedFileInfo&&"linkfolder"===this.selectedFileInfo.ftype&&"creator"===this.selectedFileInfo.user_role},showUpToTeam:function(){var e;return!(!this.isLinkFolderAndCreator||null===(e=this.upToCompanyTeamPolicy)||void 0===e||!e.button_copy)}}),methods:{handleUpToTeamDot:function(e){var t,i;C.Z.onEvent("info_panelsharefileupdate",{action:e,account_id:this.$store.state.user.id,group_id:this.selectedFileInfo.groupid,source:(0,L.x_)(window),utm_source:(0,L.x_)(window),task_id:null===(t=this.upToCompanyTeamPolicy)||void 0===t?void 0:t.task_id,policy_id:null===(i=this.upToCompanyTeamPolicy)||void 0===i?void 0:i.policy_id,linkgroupid:this.selectedFileInfo.linkgroupid||0,fileid:this.selectedFileInfo.folderid||0})},upToTeamFn:function(){(0,E.Y)({command:D.AS.command,position:"infopanel"},this)},close:function(){this.$emit("close")},sendDw:function(e){var t=this.selectedFileInfo,i="Other";t&&(i=["file","sharefile"].includes(t.ftype)?"Files":"Folder");var o="All";"Latest"===this.$route.name?o="Latest":"Enterprise"===this.$route.name?o="Enterprise":"Group"===this.$route.name&&(o="Team"),C.Z.onEvent("info_panel",{action:e,type:i,from:o})}},mounted:function(){var e;null!==(e=this.selectedFileInfo)&&void 0!==e&&e.id&&this.isLinkFolderAndCreator&&this.$store.dispatch(d.Dbl,{utmContent:"infopanel",group_id:this.selectedFileInfo.linkgroupid})}},j=(0,v.Z)(Z,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"doc-info-wrapper"},[e.needShow?i("KDocInfo",e._b({attrs:{hideShare:e.docInfoHideShare}},"KDocInfo",e.docInfoProps,!1),[i("div",{attrs:{slot:"label"},slot:"label"},[e.showLabelInDocInfo?i("LabelInDocInfo",{attrs:{show:e.needShow,selectedFileInfo:e.selectedFileInfo}}):e._e(),e.showUpToTeam?i("div",{staticClass:"up-to-team-label"},[i("kd-button",{staticClass:"up-to-team-btn",attrs:{type:"primary"},on:{click:e.upToTeamFn}},[e._v(e._s(e.upToCompanyTeamPolicy.button_copy))])],1):e._e()],1),e.hasThumbnail?i("Thumbnail",{attrs:{slot:"thumbnail",fileInfo:e.selectedFileInfo,isImage:e.isImage},slot:"thumbnail"}):e._e(),e.selectedFileInfo?i("FormatIcon",{staticClass:"docinfo-icon",attrs:{slot:"fileicon",fileType:e.fileType,fileName:e.iconInfo.fname||e.iconInfo.name,size:16},slot:"fileicon"}):e._e()],1):e._e()],1)}),[],!1,null,"5b9f4bcf",null).exports,B=i(51058),N=i(63939),G=i(12927),R={name:"AsideDocInfo",data:function(){return{}},components:{HideSrcollBar:o.Z,DocInfo:j},computed:{stickyAreaSelected:function(){if("Latest"===this.$route.name){var e=this.$store.state.file.stickyAreaSelected;return e}return{}}},created:function(){},methods:{getI18nText:p.GH,close:function(){(0,G.U)(!1,{selectedFile:this.$store.getters.firstSelectedFile,state:this.$store.state}),this.$store.dispatch(d.DYc,{shown:!1}),N.xs.includes(this.$route.name)?(0,B.a)("autoShowGroupInfo_".concat(this.$store.state.user.id),!1):N.ai.includes(this.$route.name)&&(0,B.a)("autoShowTeamInfo_".concat(this.$store.state.user.id),!1)}}},z=(0,v.Z)(R,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"doc-info-wrapper"},[i("div",{staticClass:"doc-info-header"},[i("div",{staticClass:"title"},[e._v(e._s(e.getI18nText("doc_fileinfo_info2")))]),i("kd-button",{attrs:{icon:"",type:"light",size:"medium"},on:{click:e.close}},[i("CloseIcon")],1)],1),i("HideSrcollBar",{staticClass:"doc-info-content"},[i("DocInfo",{attrs:{needShow:!0,stickyAreaSelected:e.stickyAreaSelected,showHeader:!1},on:{close:e.close}})],1)],1)}),[],!1,null,"29274595",null).exports},93751:function(e,t,i){e.exports=i.p+"s1/static/images/8f823c66e9c907f44325.svg"}}]);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             .vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/2/41/24129fe1-8195-5d45-b3e3-9c8524c7c452/65baa8005d863.image.jpg?crop=1280%2C853%2C0%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/2/41/24129fe1-8195-5d45-b3e3-9c8524c7c452/65baa8005d863.image.jpg?crop=1280%2C853%2C0%2C0&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                    </div>
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/repeating-in-nfl-used-to-be-more-common-but-chiefs-aim-to-be-first-back/article_c1c0de97-b163-585e-a80d-954be9d0dcf9.html" class="tnt-asset-link" aria-label="Repeating in NFL used to be more common, but Chiefs aim to be first back-to-back champs in 19 years">
        

        Repeating in NFL used to be more common, but Chiefs aim to be first back-to-back champs in 19 years</a></h3></div>
    
        
        
            <div class="card-lead">
                <p class="tnt-summary">Repeat championships in the NFL used to be more common. </p>
            </div>
        
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-31T15:01:51-05:00" class="tnt-date asset-date text-muted ">
                    15 hrs ago</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-df605773-6fa0-586b-befe-8e77e1be96be" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/49ers-coach-kyle-shanahan-gets-another-shot-at-elusive-super-bowl-title/article_df605773-6fa0-586b-befe-8e77e1be96be.html" class="tnt-asset-link" aria-label="49ers coach Kyle Shanahan gets another shot at elusive Super Bowl title">
        

        49ers coach Kyle Shanahan gets another shot at elusive Super Bowl title</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-31T14:45:19-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">15 hrs ago</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-f617f39e-c37c-5128-b072-cb5048f6acd4" class="tnt-asset-type-article packStory3 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-image">
                        <div class="media-preview-f617f39e-c37c-5128-b072-cb5048f6acd4 media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/chiefs-chris-jones-gambled-on-himself-this-season-and-is-taking-his-wins-all-the/article_f617f39e-c37c-5128-b072-cb5048f6acd4.html" class="tnt-asset-link"  aria-label="Chiefs' Chris Jones gambled on himself this season and is taking his wins all the way to the bank">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Chiefs' Chris Jones gambled on himself this season and is taking his wins all the way to the bank"
                            class="img-responsive lazyload ap-photo full white"
                            width="1280"
                            height="853"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/ca/aca0bdbc-f6c8-5616-9b37-dc1e58da8c5c/65ba9ea02d6cb.image.jpg?crop=1280%2C853%2C0%2C0&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                    </div>
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/chiefs-chris-jones-gambled-on-himself-this-season-and-is-taking-his-wins-all-the/article_f617f39e-c37c-5128-b072-cb5048f6acd4.html" class="tnt-asset-link" aria-label="Chiefs' Chris Jones gambled on himself this season and is taking his wins all the way to the bank">
        

        Chiefs' Chris Jones gambled on himself this season and is taking his wins all the way to the bank</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-31T14:01:59-05:00" class="tnt-date asset-date text-muted ">
                    16 hrs ago</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article></div>
                </div>
                
                    <div class="cp-second cp-border-top" data-pack="buffer2" data-packcount="3">
                       
    <div class="bufferPack pack2 card-img-md">
          
    <article id="card-summary-1b772070-484b-5d8f-b777-3c5647339062" class="tnt-asset-type-article packStory1 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/seahawks-hire-ravens-defensive-coordinator-mike-macdonald-as-new-coach/article_1b772070-484b-5d8f-b777-3c5647339062.html" class="tnt-asset-link" aria-label="Seahawks hire Ravens defensive coordinator Mike Macdonald as new coach">
        

        Seahawks hire Ravens defensive coordinator Mike Macdonald as new coach</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-31T19:55:20-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">10 hrs ago</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-bdadf69b-5af5-5180-aeca-048706ae4b63" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/from-marching-bands-to-megastars-how-the-super-bowl-halftime-show-became-a-global-spectacle/article_bdadf69b-5af5-5180-aeca-048706ae4b63.html" class="tnt-asset-link" aria-label="From marching bands to megastars: How the Super Bowl halftime show became a global spectacle">
        

        From marching bands to megastars: How the Super Bowl halftime show became a global spectacle</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-31T13:05:20-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">17 hrs ago</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-07bb031d-6161-57d0-b48e-9a202b52b3ef" class="tnt-asset-type-article packStory3 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/an-alabama-draft-pick-has-never-scored-in-a-super-bowl-that-wont-change-this/article_07bb031d-6161-57d0-b48e-9a202b52b3ef.html" class="tnt-asset-link" aria-label="An Alabama draft pick has never scored in a Super Bowl. That won't change this year.">
        

        An Alabama draft pick has never scored in a Super Bowl. That won't change this year.</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-31T10:50:19-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">19 hrs ago</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article></div>
                    </div>
                
                
                    <div class="cp-third cp-border-top" data-pack="pack9" data-packcount="6">
                       
    <div class="storyPack pack9 card-img-md region-bg">
          
    <article id="card-summary-3a221233-ca66-555e-a845-47f2ded9910f" class="tnt-asset-type-article packStory1 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-image">
                        <div class="media-preview-3a221233-ca66-555e-a845-47f2ded9910f media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/panthers-coach-dave-canales-begins-to-fill-out-staff-hires-four-assistants/article_3a221233-ca66-555e-a845-47f2ded9910f.html" class="tnt-asset-link"  aria-label="Panthers coach Dave Canales begins to fill out staff, hires four assistants">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Panthers coach Dave Canales begins to fill out staff, hires four assistants"
                            class="img-responsive lazyload ap-photo full white"
                            width="1280"
                            height="853"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/d/94/d945e838-4914-5f98-8091-59d0be603ad3/65b91e2dd7a22.image.jpg?crop=1280%2C853%2C0%2C0&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                    </div>
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/panthers-coach-dave-canales-begins-to-fill-out-staff-hires-four-assistants/article_3a221233-ca66-555e-a845-47f2ded9910f.html" class="tnt-asset-link" aria-label="Panthers coach Dave Canales begins to fill out staff, hires four assistants">
        

        Panthers coach Dave Canales begins to fill out staff, hires four assistants</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-30T20:17:13-05:00" class="tnt-date asset-date text-muted ">
                    Jan 30, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-4467430f-b710-5f64-a97e-2d5a01d44c10" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/weeks-after-dismissal-in-atlanta-arthur-smith-nearing-a-deal-to-join-the-steelers-ap/article_4467430f-b710-5f64-a97e-2d5a01d44c10.html" class="tnt-asset-link" aria-label="Weeks after dismissal in Atlanta, Arthur Smith nearing a deal to join the Steelers, AP sources say">
        

        Weeks after dismissal in Atlanta, Arthur Smith nearing a deal to join the Steelers, AP sources say</a></h3></div>
    
        <div class="card-image">
            <div class="media-preview-4467430f-b710-5f64-a97e-2d5a01d44c10 media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/weeks-after-dismissal-in-atlanta-arthur-smith-nearing-a-deal-to-join-the-steelers-ap/article_4467430f-b710-5f64-a97e-2d5a01d44c10.html" class="tnt-asset-link"  aria-label="Weeks after dismissal in Atlanta, Arthur Smith nearing a deal to join the Steelers, AP sources say">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Weeks after dismissal in Atlanta, Arthur Smith nearing a deal to join the Steelers, AP sources say"
                            class="img-responsive lazyload ap-photo full white"
                            width="1280"
                            height="853"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/0/47/04752c51-f87d-59e3-a8f3-5184e78f092d/65b98febd1766.image.jpg?crop=1280%2C853%2C0%2C0&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
        </div>
    
        
        
            <div class="card-lead">
                <p class="tnt-summary">PITTSBURGH (AP) — The Pittsburgh Steelers are hoping Arthur Smith can turn around one of the NFL's most underachieving offenses. </p>
            </div>
        
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-30T19:07:43-05:00" class="tnt-date asset-date text-muted ">
                    Jan 30, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-f9acc9e8-eac9-58c1-b6ea-3f5f9912d1aa" class="tnt-asset-type-article packStory3 letterbox-style-white  tnt-section-news">
                <div class="card-container">
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/news">News</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/news/nfl-says-super-bowl-viewers-will-only-see-3-sports-betting-ads-during-broadcast-of/article_f9acc9e8-eac9-58c1-b6ea-3f5f9912d1aa.html" class="tnt-asset-link" aria-label="NFL says Super Bowl viewers will only see 3 sports betting ads during broadcast of the game">
        

        NFL says Super Bowl viewers will only see 3 sports betting ads during broadcast of the game</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-30T18:22:52-05:00" class="tnt-date asset-date text-muted ">
                    Jan 30, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-69b9b8b2-a31e-572c-b6cb-0c6fbf36a236" class="tnt-asset-type-article packStory4 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/george-kittle-aaron-jones-and-joe-cardona-are-finalists-for-the-nfls-salute-to-service/article_69b9b8b2-a31e-572c-b6cb-0c6fbf36a236.html" class="tnt-asset-link" aria-label="George Kittle, Aaron Jones and Joe Cardona are finalists for the NFL's Salute to Service Award">
        

        George Kittle, Aaron Jones and Joe Cardona are finalists for the NFL's Salute to Service Award</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-30T17:05:12-05:00" class="tnt-date asset-date text-muted ">
                    Jan 30, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-be3591ee-6ad5-536b-9fbd-a600f114184b" class="tnt-asset-type-article packStory5 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/nfl-playoffs-and-conference-championship-games-draw-highest-viewership-average-on-record/article_be3591ee-6ad5-536b-9fbd-a600f114184b.html" class="tnt-asset-link" aria-label="NFL playoffs and conference championship games draw highest viewership average on record">
        

        NFL playoffs and conference championship games draw highest viewership average on record</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-30T15:51:16-05:00" class="tnt-date asset-date text-muted ">
                    Jan 30, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-afbe989a-6e07-5b44-b1d2-289ebd6b20c1" class="tnt-asset-type-article packStory6 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/the-49ers-take-on-the-chiefs-in-a-rare-super-bowl-rematch/article_afbe989a-6e07-5b44-b1d2-289ebd6b20c1.html" class="tnt-asset-link" aria-label="The 49ers take on the Chiefs in a rare Super Bowl rematch">
        

        The 49ers take on the Chiefs in a rare Super Bowl rematch</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-30T19:10:38-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 30, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article></div>
                    </div>
                
                
            </div>
            
            <div class="cp-narrow cp-border" data-packCount="7">
                   
    <div class="bufferPack pack5 card-img-md">
          
    <article id="card-summary-adb44a1d-cf6f-5c95-9079-767f74fb3a01" class="tnt-asset-type-article packStory1 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/taking-it-easy-the-chiefs-are-back-in-the-super-bowl-because-of-a-simplified/article_adb44a1d-cf6f-5c95-9079-767f74fb3a01.html" class="tnt-asset-link" aria-label="Taking it easy: The Chiefs are back in the Super Bowl because of a simplified offensive approach">
        

        Taking it easy: The Chiefs are back in the Super Bowl because of a simplified offensive approach</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-30T15:29:19-05:00" class="tnt-date asset-date text-muted ">
                    Jan 30, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-ce02198b-6148-55ef-82bf-d4062faf0015" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/buffalo-bills-promote-bobby-babich-to-take-over-as-defensive-coordinator/article_ce02198b-6148-55ef-82bf-d4062faf0015.html" class="tnt-asset-link" aria-label="Buffalo Bills promote Bobby Babich to take over as defensive coordinator">
        

        Buffalo Bills promote Bobby Babich to take over as defensive coordinator</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-30T14:15:42-05:00" class="tnt-date asset-date text-muted ">
                    Jan 30, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-7af5a8a7-ec24-5b05-9a3c-0b707941f1ae" class="tnt-asset-type-article packStory3 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/joe-hortiz-agrees-to-terms-to-become-los-angeles-chargers-general-manager/article_7af5a8a7-ec24-5b05-9a3c-0b707941f1ae.html" class="tnt-asset-link" aria-label="Joe Hortiz agrees to terms to become Los Angeles Chargers general manager">
        

        Joe Hortiz agrees to terms to become Los Angeles Chargers general manager</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-30T17:55:20-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 30, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-3e5ab7aa-74db-5990-a550-aa989e980797" class="tnt-asset-type-article packStory4 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-image">
                            <div class="media-preview-3e5ab7aa-74db-5990-a550-aa989e980797 media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/panthers-coach-dave-canales-co-wrote-book-about-infidelity-binge-drinking-addiction-to-pornography/article_3e5ab7aa-74db-5990-a550-aa989e980797.html" class="tnt-asset-link"  aria-label="Panthers coach Dave Canales co-wrote book about infidelity, binge drinking, addiction to pornography">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Panthers coach Dave Canales co-wrote book about infidelity, binge drinking, addiction to pornography"
                            class="img-responsive lazyload ap-photo full white"
                            width="1280"
                            height="853"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/16/916e298d-3c12-5fb9-81ad-2b40c95a2070/65b91e2d08926.image.jpg?crop=1280%2C853%2C0%2C0&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                        </div>
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/panthers-coach-dave-canales-co-wrote-book-about-infidelity-binge-drinking-addiction-to-pornography/article_3e5ab7aa-74db-5990-a550-aa989e980797.html" class="tnt-asset-link" aria-label="Panthers coach Dave Canales co-wrote book about infidelity, binge drinking, addiction to pornography">
        

        Panthers coach Dave Canales co-wrote book about infidelity, binge drinking, addiction to pornography</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-30T14:15:19-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 30, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-51e7e862-c041-5a9f-bda6-1d708d01b598" class="tnt-asset-type-article packStory5 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust="analysis"> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
    <div class="card-label-tow">
        <div class="type">
            <span class="the-type">Analysis</span>
        </div>
        
    </div>
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/despite-all-the-heartbreaks-and-mistakes-the-future-looks-bright-for-the-lions-and-ravens/article_51e7e862-c041-5a9f-bda6-1d708d01b598.html" class="tnt-asset-link" aria-label="Despite all the heartbreaks and mistakes, the future looks bright for the Lions and Ravens">
        

        Despite all the heartbreaks and mistakes, the future looks bright for the Lions and Ravens</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-30T22:37:24-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 30, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-ab0c8dba-bebf-11ee-acfc-8f5f42e36d94" class="tnt-asset-type-article packStory6 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust="opinion"> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
    <div class="card-label-tow">
        <div class="type">
            <span class="the-type">Opinion</span>
        </div>
        
    </div>
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/taylor-swift-and-the-super-bowl-it-has-to-be-a-conspiracy/article_ab0c8dba-bebf-11ee-acfc-8f5f42e36d94.html" class="tnt-asset-link" aria-label="Taylor Swift and the Super Bowl? It has to be a conspiracy">
        

        Bruce Arthur: Taylor Swift and the Super Bowl? It has to be a conspiracy</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-30T19:24:49-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 30, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-48431236-73a9-5f7e-902b-d44f46b939ac" class="tnt-asset-type-article packStory7 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust="analysis"> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
    <div class="card-label-tow">
        <div class="type">
            <span class="the-type">Analysis</span>
        </div>
        
    </div>
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/the-49ers-are-showing-off-comeback-ability-on-their-drive-to-the-super-bowl/article_48431236-73a9-5f7e-902b-d44f46b939ac.html" class="tnt-asset-link" aria-label="The 49ers are showing off comeback ability on their drive to the Super Bowl">
        

        The 49ers are showing off comeback ability on their drive to the Super Bowl</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-29T20:25:15-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 29, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article></div>
            </div>
            
        </div> 
        
        </section>
        </div>
        </div></div><div class="row row-two"><div class="fixed-col-left col-md-4 main-sidebar grid-variant">
            
            <div ></div><div id="tncms-region-global-side-secondary" class="tncms-region "></div><div id="tncms-region-index-side-secondary" class="tncms-region "></div><div id="sticky-side-secondary-spacer">
                        <div id="sticky-side-secondary"><div id="tncms-region-global-side-secondary-sticky" class="tncms-region "></div><div id="tncms-region-index-side-secondary-sticky" class="tncms-region "></div></div>
                    </div>            
        </div><div class="fixed-col-right main-content col-md-8 has-sidebar">
            <div id="tncms-region-front-index-two-top" class="tncms-region "></div><div id="tncms-region-index-two-top" class="tncms-region "></div><div class="row equal-height swapRow"><div id="tncms-region-index-swap-two-a" class="tncms-region col-md-8 pull-right-lg"></div><div id="tncms-region-index-swap-two-b" class="tncms-region col-md-4 pull-left-lg"></div></div>
            <div class="row equal-height"><div id="tncms-region-index-two-a" class="tncms-region col-md-6"></div><div id="tncms-region-index-two-b" class="tncms-region col-md-6"></div></div>
            <div class="row equal-height"><div id="tncms-region-index-two-c" class="tncms-region col-md-5"></div><div id="tncms-region-index-two-d" class="tncms-region col-md-7"></div></div><div id="tncms-region-index-two-middle" class="tncms-region "></div>
            <div class="row equal-height"><div id="tncms-region-index-two-e" class="tncms-region col-md-7"></div><div id="tncms-region-index-two-f" class="tncms-region col-md-5"></div></div>
            <div class="row equal-height"><div id="tncms-region-index-two-g" class="tncms-region col-md-4"></div><div id="tncms-region-index-two-h" class="tncms-region col-md-8"></div></div>
            <div class="row equal-height"><div id="tncms-region-index-two-i" class="tncms-region col-md-8"></div><div id="tncms-region-index-two-j" class="tncms-region col-md-4"></div></div>
            <div class="row equal-height"><div id="tncms-region-index-two-k" class="tncms-region col-md-4"></div><div id="tncms-region-index-two-l" class="tncms-region col-md-4"></div><div id="tncms-region-index-two-m" class="tncms-region col-md-4"></div></div><div id="tncms-region-index-two-bottom" class="tncms-region "></div>
        </div></div><div id="tncms-region-index-full-two-bottom" class="tncms-region full-region"></div><div class="row equal-height"><div id="tncms-region-index-full-two-a" class="tncms-region col-md-4"></div><div id="tncms-region-index-full-two-b" class="tncms-region col-md-4"></div><div id="tncms-region-index-full-two-c" class="tncms-region col-md-4"></div></div>
    
    <div class="container-breakout "><div id="tncms-region-index-breakout-two" class="tncms-region "><div id="tncms-block-2826996" class="tncms-block adLabelWrapper"><div class="tnt-ads-container text-center  " >
        <div id="ad-2826996" class="tnt-ads dfp-ad margin-bottom-none" data-lazy="true" data-refresh="true" >
            <script>
                googletag.cmd.push(function() {
                        googletag.display('ad-2826996');
                        
                });
            </script>
        </div>
    </div></div></div><div id="tncms-region-front-index-breakout-two" class="tncms-region "></div></div>
    
<!-- /Section Two -->
<!-- Section Three --><div id="tncms-region-index-full-three-top" class="tncms-region full-region"><div id="tncms-block-2917353" class="tncms-block">
        <div class="tnt-has-block-bg">
        <section id="block-2917353" class="block emphasis-h2   " ><div class="clearfix">
    
    
    <div class="block-title title-2917353 ">
        <div class="block-title-inner">
            <h2>
                
                    <a href="/sports/football/cfl">
                
                CFL
                
                    </a>
                
            </h2>
        </div>
    </div></div>
        <div class="comboPack " data-pack1="pack1" data-pack2="pack2" data-pack3="buffer1" data-pack4="none">
            <div class="cp-wide">
                <div class="cp-top" data-pack="pack1" data-packcount="1">
                <div class="storyPack pack1 card-img-md region-bg">
        <article id="card-summary-2917353-bba681b3-ebd8-50e3-9f65-9ecd12e2b50c" class="packStory1 tnt-asset-type-article  letterbox-style-white  tnt-section-sports tnt-sub-section-football">
            <div class="card-container">
                <div class="card-image">
                    <div class="media-preview-bba681b3-ebd8-50e3-9f65-9ecd12e2b50c media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/cfl-announces-it-will-stage-its-canadian-draft-april-30/article_bba681b3-ebd8-50e3-9f65-9ecd12e2b50c.html" class="tnt-asset-link"  aria-label="CFL announces it will stage its Canadian draft April 30">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="CFL announces it will stage its Canadian draft April 30"
                            class="img-responsive lazyload full white"
                            width="1280"
                            height="853"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/7/f0/7f067fa1-4c31-5bce-8f9e-51282512496f/65ba8e385ed21.image.jpg?crop=1280%2C853%2C0%2C0&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                </div>
                <div class="card-body">
                    <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/cfl-announces-it-will-stage-its-canadian-draft-april-30/article_bba681b3-ebd8-50e3-9f65-9ecd12e2b50c.html" class="tnt-asset-link" aria-label="CFL announces it will stage its Canadian draft April 30">
        

        CFL announces it will stage its Canadian draft April 30</a></h3></div>
    
        
        
            <div class="card-lead">
                <p class="tnt-summary">TORONTO - The CFL will stage its annual draft April 30. </p>
            </div>
        
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-31T13:13:26-05:00" class="tnt-date asset-date text-muted ">
                    17 hrs ago</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                </div>
            </div>
        </article>
    </div>
                </div>
                
                    <div class="cp-second cp-border-top" data-pack="pack2" data-packcount="2">
                       
    <div class="storyPack pack2 card-img-md region-bg">
          
    <article id="card-summary-62736ff6-dfa9-5ed1-90d5-cd56ba5f6930" class="tnt-asset-type-article packStory1 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-image">
                            <div class="media-preview-62736ff6-dfa9-5ed1-90d5-cd56ba5f6930 media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/quarterback-streveler-returns-to-winnipeg-blue-bombers/article_62736ff6-dfa9-5ed1-90d5-cd56ba5f6930.html" class="tnt-asset-link"  aria-label="Quarterback Streveler returns to Winnipeg Blue Bombers">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Quarterback Streveler returns to Winnipeg Blue Bombers"
                            class="img-responsive lazyload full white"
                            width="1280"
                            height="853"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/c/12/c128c158-b3b0-52fe-9526-14e245ad7e38/65ba7dd05c64f.image.jpg?crop=1280%2C853%2C0%2C0&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                        </div>
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/quarterback-streveler-returns-to-winnipeg-blue-bombers/article_62736ff6-dfa9-5ed1-90d5-cd56ba5f6930.html" class="tnt-asset-link" aria-label="Quarterback Streveler returns to Winnipeg Blue Bombers">
        

        Quarterback Streveler returns to Winnipeg Blue Bombers</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-31T15:30:20-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">14 hrs ago</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-c443b280-66c5-5e54-8fe6-388f223e934b" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/future-of-mathieu-betts-major-focus-as-b-c-lions-lay-out-free-agency-plans/article_c443b280-66c5-5e54-8fe6-388f223e934b.html" class="tnt-asset-link" aria-label="Future of Mathieu Betts major focus as B.C. Lions lay out free agency plans">
        

        Future of Mathieu Betts major focus as B.C. Lions lay out free agency plans</a></h3></div>
    
        
        
            <div class="card-lead">
                <p class="tnt-summary">SURREY, B.C. - The B.C. Lions have signed several returning players, but as CFL free agency looms, there's one name that remains conspicuously&hellip;</p>
            </div>
        
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-30T17:02:04-05:00" class="tnt-date asset-date text-muted ">
                    Jan 30, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article></div>
                    </div>
                
                
                    <div class="cp-third cp-border-top" data-pack="buffer1" data-packcount="2">
                       
    <div class="bufferPack pack1 card-img-md">
          
    <article id="card-summary-cbb67a71-8334-560b-b7ab-1201f3157366" class="tnt-asset-type-article packStory1 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/cfl-free-agency-window-will-open-sunday/article_cbb67a71-8334-560b-b7ab-1201f3157366.html" class="tnt-asset-link" aria-label="CFL free agency window will open Sunday">
        

        CFL free agency window will open Sunday</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-30T15:12:53-05:00" class="tnt-date asset-date text-muted ">
                    Jan 30, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-5dba7553-3732-5789-a734-413bff2f8e6c" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-image">
                            <div class="media-preview-5dba7553-3732-5789-a734-413bff2f8e6c media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/roughriders-sign-veteran-defensive-lineman-lanier-to-one-year-extension/article_5dba7553-3732-5789-a734-413bff2f8e6c.html" class="tnt-asset-link"  aria-label="Roughriders sign veteran defensive lineman Lanier to one-year extension">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Roughriders sign veteran defensive lineman Lanier to one-year extension"
                            class="img-responsive lazyload full white"
                            width="1218"
                            height="812"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/32/932e4f8f-aa6d-505d-8609-e2a9c970fa3f/65b92c4fe1d8f.image.jpg?crop=1218%2C812%2C31%2C0&resize=1218%2C812&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                        </div>
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/roughriders-sign-veteran-defensive-lineman-lanier-to-one-year-extension/article_5dba7553-3732-5789-a734-413bff2f8e6c.html" class="tnt-asset-link" aria-label="Roughriders sign veteran defensive lineman Lanier to one-year extension">
        

        Roughriders sign veteran defensive lineman Lanier to one-year extension</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-30T16:20:20-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 30, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  </div>
                    </div>
                
                
            </div>
            
            <div class="cp-narrow cp-border" data-packCount="5">
                   
    <div class="bufferPack pack5 card-img-md">
          
    <article id="card-summary-e46dae9b-86d2-573b-be27-679c29cd98f2" class="tnt-asset-type-article packStory1 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/andre-bolduc-ryan-williams-join-calgary-stampeders-coaching-staff/article_e46dae9b-86d2-573b-be27-679c29cd98f2.html" class="tnt-asset-link" aria-label="Andre Bolduc, Ryan Williams join Calgary Stampeders coaching staff">
        

        Andre Bolduc, Ryan Williams join Calgary Stampeders coaching staff</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-29T14:35:21-05:00" class="tnt-date asset-date text-muted ">
                    Jan 29, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-e2741bcb-6c83-581f-b786-6f184ba8b921" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/source-saskatchewan-roughriders-re-sign-veteran-lanier-to-contract-extension/article_e2741bcb-6c83-581f-b786-6f184ba8b921.html" class="tnt-asset-link" aria-label="Source: Saskatchewan Roughriders re-sign veteran Lanier to contract extension">
        

        Source: Saskatchewan Roughriders re-sign veteran Lanier to contract extension</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-29T15:15:20-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 29, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-0f046c4a-8436-57f7-b084-59b156985ea6" class="tnt-asset-type-article packStory3 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/former-cfl-defensive-back-kelly-malveaux-a-two-time-east-all-star-dead-at-47/article_0f046c4a-8436-57f7-b084-59b156985ea6.html" class="tnt-asset-link" aria-label="Former CFL defensive back Kelly Malveaux, a two-time East all-star, dead at 47">
        

        Former CFL defensive back Kelly Malveaux, a two-time East all-star, dead at 47</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-26T14:10:19-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 26, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-b9e157e5-0623-5170-a323-d59f50d400be" class="tnt-asset-type-article packStory4 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-image">
                            <div class="media-preview-b9e157e5-0623-5170-a323-d59f50d400be media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/argonauts-sign-all-star-linebacker-wynton-mcmanis-to-extension/article_b9e157e5-0623-5170-a323-d59f50d400be.html" class="tnt-asset-link"  aria-label="Argonauts sign all-star linebacker Wynton McManis to extension">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Argonauts sign all-star linebacker Wynton McManis to extension"
                            class="img-responsive lazyload full white"
                            width="1280"
                            height="853"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/6/80/680f4e55-0858-57e9-8411-9cc4e744f8a6/65b3f58c20a77.image.jpg?crop=1280%2C853%2C0%2C0&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                        </div>
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/argonauts-sign-all-star-linebacker-wynton-mcmanis-to-extension/article_b9e157e5-0623-5170-a323-d59f50d400be.html" class="tnt-asset-link" aria-label="Argonauts sign all-star linebacker Wynton McManis to extension">
        

        Argonauts sign all-star linebacker Wynton McManis to extension</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-26T13:06:54-05:00" class="tnt-date asset-date text-muted ">
                    Jan 26, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-1a00099c-f312-59e8-b02c-008c05cb4358" class="tnt-asset-type-article packStory5 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/veteran-lineman-kristian-matte-signs-up-for-14th-cfl-season-with-montreal-alouettes/article_1a00099c-f312-59e8-b02c-008c05cb4358.html" class="tnt-asset-link" aria-label="Veteran lineman Kristian Matte signs up for 14th CFL season with Montreal Alouettes">
        

        Veteran lineman Kristian Matte signs up for 14th CFL season with Montreal Alouettes</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-25T16:47:25-05:00" class="tnt-date asset-date text-muted ">
                    Jan 25, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article></div>
            </div>
            
        </div> 
        
        </section>
        </div>
        </div></div><div class="row row-three">
        <div class="fixed-col-left main-content col-md-8 has-sidebar">
            <div id="tncms-region-front-index-three-top" class="tncms-region "></div><div id="tncms-region-index-three-top" class="tncms-region "></div><div class="row equal-height swapRow"><div id="tncms-region-index-swap-three-a" class="tncms-region col-md-8 pull-right-lg"></div><div id="tncms-region-index-swap-three-b" class="tncms-region col-md-4 pull-left-lg"></div></div>
            <div class="row equal-height"><div id="tncms-region-index-three-a" class="tncms-region col-md-6"></div><div id="tncms-region-index-three-b" class="tncms-region col-md-6"></div></div>
                <div class="row equal-height"><div id="tncms-region-index-three-c" class="tncms-region col-md-5"></div><div id="tncms-region-index-three-d" class="tncms-region col-md-7"></div></div>
                <div class="row equal-height"><div id="tncms-region-index-three-e" class="tncms-region col-md-7"></div><div id="tncms-region-index-three-f" class="tncms-region col-md-5"></div></div><div id="tncms-region-index-three-middle" class="tncms-region "></div>
                <div class="row equal-height"><div id="tncms-region-index-three-g" class="tncms-region col-md-4"></div><div id="tncms-region-index-three-h" class="tncms-region col-md-8"></div></div>
                <div class="row equal-height"><div id="tncms-region-index-three-i" class="tncms-region col-md-8"></div><div id="tncms-region-index-three-j" class="tncms-region col-md-4"></div></div>
                <div class="row equal-height"><div id="tncms-region-index-three-k" class="tncms-region col-md-4"></div><div id="tncms-region-index-three-l" class="tncms-region col-md-4"></div><div id="tncms-region-index-three-m" class="tncms-region col-md-4"></div></div><div id="tncms-region-index-three-bottom" class="tncms-region "></div>
        </div><div class="fixed-col-right col-md-4 main-sidebar">
            
                <div ></div><div id="tncms-region-global-side-tertiary" class="tncms-region "></div><div id="tncms-region-index-side-tertiary" class="tncms-region "></div><div id="sticky-side-tertiary-spacer">
                        <div id="sticky-side-tertiary"><div id="tncms-region-global-side-tertiary-sticky" class="tncms-region "></div><div id="tncms-region-index-side-tertiary-sticky" class="tncms-region "></div></div>
                    </div>               
            </div></div><div id="tncms-region-index-full-three-bottom" class="tncms-region full-region"></div><div class="row equal-height"><div id="tncms-region-index-full-three-a" class="tncms-region col-md-4"></div><div id="tncms-region-index-full-three-b" class="tncms-region col-md-4"></div><div id="tncms-region-index-full-three-c" class="tncms-region col-md-4"></div></div>
    
    <div class="row row-one">
        <div class="fixed-col-left main-content col-md-8 has-sidebar"><div id="tncms-region-index-3a" class="tncms-region "></div></div><div class="fixed-col-right col-md-4 main-sidebar"><div id="tncms-region-global-side-3a" class="tncms-region "></div><div id="tncms-region-index-side-3a" class="tncms-region "></div><div id="sticky-side-3a-spacer">
                    <div id="sticky-side-3a"><div id="tncms-region-index-side-3a-sticky" class="tncms-region "></div></div>
                </div></div></div> 
    <div class="row row-one">
        <div class="fixed-col-left main-content col-md-8 has-sidebar"><div id="tncms-region-index-3b" class="tncms-region "></div></div><div class="fixed-col-right col-md-4 main-sidebar"><div id="tncms-region-global-side-3b" class="tncms-region "></div><div id="tncms-region-index-side-3b" class="tncms-region "></div><div id="sticky-side-3b-spacer">
                    <div id="sticky-side-3b"><div id="tncms-region-index-side-3b-sticky" class="tncms-region "></div></div>
                </div></div></div> 
    <div class="row row-one">
        <div class="fixed-col-left main-content col-md-8 has-sidebar"><div id="tncms-region-index-3c" class="tncms-region "></div></div><div class="fixed-col-right col-md-4 main-sidebar"><div id="tncms-region-global-side-3c" class="tncms-region "></div><div id="tncms-region-index-side-3c" class="tncms-region "></div><div id="sticky-side-3c-spacer">
                    <div id="sticky-side-3c"><div id="tncms-region-index-side-3c-sticky" class="tncms-region "></div></div>
                </div></div></div> 
    <div class="row row-one">
        <div class="fixed-col-left main-content col-md-8 has-sidebar"><div id="tncms-region-index-3d" class="tncms-region "></div></div><div class="fixed-col-right col-md-4 main-sidebar"><div id="tncms-region-global-side-3d" class="tncms-region "></div><div id="tncms-region-index-side-3d" class="tncms-region "></div><div id="sticky-side-3d-spacer">
                    <div id="sticky-side-3d"><div id="tncms-region-index-side-3d-sticky" class="tncms-region "></div></div>
                </div></div></div> 
    
    <div class="container-breakout "><div id="tncms-region-index-breakout-three" class="tncms-region "><div id="tncms-block-2827011" class="tncms-block adLabelWrapper"><div class="tnt-ads-container text-center  " >
        <div id="ad-2827011" class="tnt-ads dfp-ad margin-bottom-none" data-lazy="true" data-refresh="true" >
            <script>
                googletag.cmd.push(function() {
                        googletag.display('ad-2827011');
                        
                });
            </script>
        </div>
    </div></div></div><div id="tncms-region-front-index-breakout-three" class="tncms-region "></div></div>
    
<!-- /Section Three -->
<!-- Section Four --><div id="tncms-region-index-full-four-top" class="tncms-region full-region"><div id="tncms-block-2870568" class="tncms-block">
        <div class="tnt-has-block-bg">
        <section id="block-2870568" class="block emphasis-h2   " ><div class="clearfix">
    
    
    <div class="block-title title-2870568 ">
        <div class="block-title-inner">
            <h2>
                
                    <a href="/sports/football/ncaa">
                
                NCAA Football
                
                    </a>
                
            </h2>
        </div>
    </div></div>
        <div class="comboPack reverse" data-pack1="pack4" data-pack2="buffer2" data-pack3="pack5" data-pack4="none">
            <div class="cp-wide">
                <div class="cp-top" data-pack="pack4" data-packcount="3">
                   
    <div class="storyPack pack4 card-img-md region-bg">
          
    <article id="card-summary-fe96dea1-0240-5d7f-82a1-c40077c5cb95" class="tnt-asset-type-article packStory1 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-image">
                        <div class="media-preview-fe96dea1-0240-5d7f-82a1-c40077c5cb95 media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/auburn-hires-longtime-defensive-coordinator-dj-durkin-to-run-defense/article_fe96dea1-0240-5d7f-82a1-c40077c5cb95.html" class="tnt-asset-link"  aria-label="Auburn hires longtime defensive coordinator DJ Durkin to run defense">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Auburn hires longtime defensive coordinator DJ Durkin to run defense"
                            class="img-responsive lazyload ap-photo full white"
                            width="1280"
                            height="853"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/00/500ea6cf-fba2-5b76-97e0-d2c66045ccda/65bad93911750.image.jpg?crop=1280%2C853%2C0%2C8&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                    </div>
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/auburn-hires-longtime-defensive-coordinator-dj-durkin-to-run-defense/article_fe96dea1-0240-5d7f-82a1-c40077c5cb95.html" class="tnt-asset-link" aria-label="Auburn hires longtime defensive coordinator DJ Durkin to run defense">
        

        Auburn hires longtime defensive coordinator DJ Durkin to run defense</a></h3></div>
    
        
        
            <div class="card-lead">
                <p class="tnt-summary">AUBURN, Ala. (AP) — Auburn coach Hugh Freeze has hired former Maryland head coach and Texas A&amp;M defensive coordinator DJ Durkin to run his&hellip;</p>
            </div>
        
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-31T18:32:19-05:00" class="tnt-date asset-date text-muted ">
                    11 hrs ago</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-62a53843-c199-57e9-b252-048a272d3d66" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/senior-bowl-and-nfl-draft-class-loaded-with-transfers-from-penix-to-nix-to-schrader/article_62a53843-c199-57e9-b252-048a272d3d66.html" class="tnt-asset-link" aria-label="Senior Bowl and NFL draft class loaded with transfers from Penix to Nix to Schrader">
        

        Senior Bowl and NFL draft class loaded with transfers from Penix to Nix to Schrader</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-31T18:26:27-05:00" class="tnt-date asset-date text-muted ">
                    11 hrs ago</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-73180d92-7017-533a-b348-3f2640089433" class="tnt-asset-type-article packStory3 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-image">
                        <div class="media-preview-73180d92-7017-533a-b348-3f2640089433 media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/hawkeyes-hire-packers-analyst-tim-lester-ex-western-michigan-coach-to-revive-offense/article_73180d92-7017-533a-b348-3f2640089433.html" class="tnt-asset-link"  aria-label="Hawkeyes hire Packers' analyst Tim Lester, ex-Western Michigan coach, to revive offense">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Hawkeyes hire Packers' analyst Tim Lester, ex-Western Michigan coach, to revive offense"
                            class="img-responsive lazyload ap-photo full white"
                            width="1280"
                            height="853"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/17/41782021-13b9-5ad8-a008-c20ba33d0022/65bab73be452f.image.jpg?crop=1280%2C853%2C0%2C0&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                    </div>
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/hawkeyes-hire-packers-analyst-tim-lester-ex-western-michigan-coach-to-revive-offense/article_73180d92-7017-533a-b348-3f2640089433.html" class="tnt-asset-link" aria-label="Hawkeyes hire Packers' analyst Tim Lester, ex-Western Michigan coach, to revive offense">
        

        Hawkeyes hire Packers' analyst Tim Lester, ex-Western Michigan coach, to revive offense</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-31T16:08:45-05:00" class="tnt-date asset-date text-muted ">
                    14 hrs ago</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article></div>
                </div>
                
                    <div class="cp-second cp-border-top" data-pack="buffer2" data-packcount="3">
                       
    <div class="bufferPack pack2 card-img-md">
          
    <article id="card-summary-f72ed961-f8dd-5a4c-906a-620332f518cc" class="tnt-asset-type-article packStory1 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/nil-opportunities-leave-smaller-pool-of-late-round-nfl-draft-prospects/article_f72ed961-f8dd-5a4c-906a-620332f518cc.html" class="tnt-asset-link" aria-label="NIL opportunities leave smaller pool of late-round NFL draft prospects">
        

        NIL opportunities leave smaller pool of late-round NFL draft prospects</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-30T17:43:29-05:00" class="tnt-date asset-date text-muted ">
                    Jan 30, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-1f422a9e-e4d6-581a-8aca-de1c13a39a72" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/tennessee-chancellor-rips-the-ncaa-as-a-failing-group-pursuing-untrue-allegations/article_1f422a9e-e4d6-581a-8aca-de1c13a39a72.html" class="tnt-asset-link" aria-label="Tennessee chancellor rips the NCAA as a 'failing' group pursuing untrue allegations">
        

        Tennessee chancellor rips the NCAA as a 'failing' group pursuing untrue allegations</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-30T20:05:20-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 30, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-0e4ad4c2-5798-57de-9e54-b030e7641fd2" class="tnt-asset-type-article packStory3 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/benedet-dealing-with-disappointment-of-ubcs-vanier-cup-loss-eyeing-pro-future/article_0e4ad4c2-5798-57de-9e54-b030e7641fd2.html" class="tnt-asset-link" aria-label="Benedet dealing with disappointment of UBC's Vanier Cup loss, eyeing pro future">
        

        Benedet dealing with disappointment of UBC's Vanier Cup loss, eyeing pro future</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-29T15:48:45-05:00" class="tnt-date asset-date text-muted ">
                    Jan 29, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article></div>
                    </div>
                
                
                    <div class="cp-third cp-border-top" data-pack="pack5" data-packcount="4">
                       
    <div class="storyPack pack5 card-img-md region-bg">
          
    <article id="card-summary-516c1f9c-8b4f-55e8-8c92-c1bce87928b0" class="tnt-asset-type-article packStory1 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-image">
                        <div class="media-preview-516c1f9c-8b4f-55e8-8c92-c1bce87928b0 media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/gambling-busts-at-iowa-state-were-the-result-of-improper-searches-athletes-attorneys-contend/article_516c1f9c-8b4f-55e8-8c92-c1bce87928b0.html" class="tnt-asset-link"  aria-label="Gambling busts at Iowa State were the result of improper searches, athletes' attorneys contend">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Gambling busts at Iowa State were the result of improper searches, athletes' attorneys contend"
                            class="img-responsive lazyload ap-photo full white"
                            width="1245"
                            height="830"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/9/42/94252b01-27ef-51b8-a2d0-07034c36ad54/65b80744a9724.image.jpg?crop=1245%2C830%2C17%2C0&resize=1245%2C830&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                    </div>
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/gambling-busts-at-iowa-state-were-the-result-of-improper-searches-athletes-attorneys-contend/article_516c1f9c-8b4f-55e8-8c92-c1bce87928b0.html" class="tnt-asset-link" aria-label="Gambling busts at Iowa State were the result of improper searches, athletes' attorneys contend">
        

        Gambling busts at Iowa State were the result of improper searches, athletes' attorneys contend</a></h3></div>
    
        
        
            <div class="card-lead">
                <p class="tnt-summary">Iowa State athletes caught in a gambling sting last year were criminally charged and lost NCAA eligibility as a result of improper searches in&hellip;</p>
            </div>
        
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-29T18:30:19-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 29, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-4dbe43f7-ad11-52ba-8ac0-426c0e595851" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/jim-harbaugh-pushed-for-michigan-to-hire-sherrone-moore-after-leaving-to-lead-chargers/article_4dbe43f7-ad11-52ba-8ac0-426c0e595851.html" class="tnt-asset-link" aria-label="Jim Harbaugh pushed for Michigan to hire Sherrone Moore after leaving to lead Chargers">
        

        Jim Harbaugh pushed for Michigan to hire Sherrone Moore after leaving to lead Chargers</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-27T20:35:19-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 27, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-bff5ad0a-13a5-5754-a6f0-4b81fc56624b" class="tnt-asset-type-article packStory3 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/michigan-promotes-offensive-coordinator-sherrone-moore-to-replace-jim-harbaugh-as-head-coach/article_bff5ad0a-13a5-5754-a6f0-4b81fc56624b.html" class="tnt-asset-link" aria-label="Michigan promotes offensive coordinator Sherrone Moore to replace Jim Harbaugh as head coach">
        

        Michigan promotes offensive coordinator Sherrone Moore to replace Jim Harbaugh as head coach</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-recent"> </span>
                    <time datetime="2024-01-26T20:30:19-05:00" class="tnt-date tnt-update-recent asset-date text-muted ">Jan 26, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article>
  <article id="card-summary-d3cab9df-1836-53b7-b032-ea99d7d4e8c4" class="tnt-asset-type-article packStory4 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                <div class="card-container">
                    
                    <div class="card-body">
                        <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/arizona-regents-approve-5-year-contract-for-new-arizona-football-coach-brent-brennan/article_d3cab9df-1836-53b7-b032-ea99d7d4e8c4.html" class="tnt-asset-link" aria-label="Arizona regents approve 5-year contract for new Arizona football coach Brent Brennan">
        

        Arizona regents approve 5-year contract for new Arizona football coach Brent Brennan</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-25T19:17:58-05:00" class="tnt-date asset-date text-muted ">
                    Jan 25, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                    </div>
                </div>
            </article></div>
                    </div>
                
                
            </div>
            
            <div class="cp-narrow cp-border" data-packCount="7">
                   
    <div class="bufferPack pack5 card-img-md">
          
    <article id="card-summary-39781334-1b6d-56de-b793-c8971bfadf64" class="tnt-asset-type-article packStory1 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/canadian-quarterback-kurtis-rourke-adjusting-to-new-life-at-indiana-university/article_39781334-1b6d-56de-b793-c8971bfadf64.html" class="tnt-asset-link" aria-label="Canadian quarterback Kurtis Rourke adjusting to new life at Indiana University">
        

        Canadian quarterback Kurtis Rourke adjusting to new life at Indiana University</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-25T15:58:49-05:00" class="tnt-date asset-date text-muted ">
                    Jan 25, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-2c571cb4-87ba-53b8-a636-5a91d1b1c6a1" class="tnt-asset-type-article packStory2 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/michigan-could-have-jim-harbaughs-replacement-already-on-campus-in-shining-star-sherrone-moore/article_2c571cb4-87ba-53b8-a636-5a91d1b1c6a1.html" class="tnt-asset-link" aria-label="Michigan could have Jim Harbaugh's replacement already on campus in 'shining star' Sherrone Moore">
        

        Michigan could have Jim Harbaugh's replacement already on campus in 'shining star' Sherrone Moore</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-24T21:59:29-05:00" class="tnt-date asset-date text-muted ">
                    Jan 24, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-b65d0569-bd9d-5ecd-9745-bea914e58904" class="tnt-asset-type-article packStory3 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/former-georgia-bulldog-mascot-uga-x-dies-with-2-national-championships-during-his-term/article_b65d0569-bd9d-5ecd-9745-bea914e58904.html" class="tnt-asset-link" aria-label="Former Georgia bulldog mascot Uga X dies with 2 national championships during his term">
        

        Former Georgia bulldog mascot Uga X dies with 2 national championships during his term</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-old"> </span>
                    <time datetime="2024-01-23T13:15:20-05:00" class="tnt-date tnt-update-old asset-date text-muted ">Jan 23, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-3d5ba92e-37cb-5198-9170-505d91d2c83e" class="tnt-asset-type-article packStory4 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-image">
                            <div class="media-preview-3d5ba92e-37cb-5198-9170-505d91d2c83e media-preview article-asset " data-aspect="3:2"><figure class="photo layout-horizontal letterbox-style-white">
            <div class="image">
                
                    <a href="/sports/football/canadian-isaiah-adams-theo-johnson-set-to-audition-at-senior-bowl/article_3d5ba92e-37cb-5198-9170-505d91d2c83e.html" class="tnt-asset-link"  aria-label="Canadian Isaiah Adams, Theo Johnson set to audition at Senior Bowl">
                
                
                
                
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg=="
                            alt="Canadian Isaiah Adams, Theo Johnson set to audition at Senior Bowl"
                            class="img-responsive lazyload full white"
                            width="1280"
                            height="853"
                            data-sizes="auto"
                            data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=150%2C100&order=crop%2Cresize 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=200%2C133&order=crop%2Cresize 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=225%2C150&order=crop%2Cresize 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=300%2C200&order=crop%2Cresize 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=400%2C267&order=crop%2Cresize 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=540%2C360&order=crop%2Cresize 540w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=640%2C427&order=crop%2Cresize 640w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=750%2C500&order=crop%2Cresize 750w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=990%2C660&order=crop%2Cresize 990w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=1035%2C690&order=crop%2Cresize 1035w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=1200%2C800&order=crop%2Cresize 1200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/3/e5/3e5912f2-0088-5cc6-86e9-2572c5d2dc78/65afe743adb5d.image.jpg?crop=1280%2C853%2C0%2C0&resize=1280%2C853&order=crop%2Cresize 1333w" />
                </a>
                
            </div>
            
        </figure></div>
                        </div>
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/canadian-isaiah-adams-theo-johnson-set-to-audition-at-senior-bowl/article_3d5ba92e-37cb-5198-9170-505d91d2c83e.html" class="tnt-asset-link" aria-label="Canadian Isaiah Adams, Theo Johnson set to audition at Senior Bowl">
        

        Canadian Isaiah Adams, Theo Johnson set to audition at Senior Bowl</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date"><span class="text-muted tnt-update-old"> </span>
                    <time datetime="2024-01-23T15:55:20-05:00" class="tnt-date tnt-update-old asset-date text-muted ">Jan 23, 2024</time>
                
            </li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-0bc65188-7088-52c9-8cbc-3f52f2c6cc7c" class="tnt-asset-type-article packStory5 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/san-jose-state-hires-ken-niumatalolo-as-new-football-coach/article_0bc65188-7088-52c9-8cbc-3f52f2c6cc7c.html" class="tnt-asset-link" aria-label="San Jose State hires Ken Niumatalolo as new football coach">
        

        San Jose State hires Ken Niumatalolo as new football coach</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-21T20:15:54-05:00" class="tnt-date asset-date text-muted ">
                    Jan 21, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-694a64ea-4c61-5cda-ac40-3b1138ea6e44" class="tnt-asset-type-article packStory6 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/fifita-mcmillan-returning-to-arizona-under-new-coach-brent-brennan/article_694a64ea-4c61-5cda-ac40-3b1138ea6e44.html" class="tnt-asset-link" aria-label="Fifita, McMillan returning to Arizona under new coach Brent Brennan">
        

        Fifita, McMillan returning to Arizona under new coach Brent Brennan</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-20T21:43:29-05:00" class="tnt-date asset-date text-muted ">
                    Jan 20, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article>
  <article id="card-summary-7391f0e7-222c-5538-b15a-f90e84d3a466" class="tnt-asset-type-article packStory7 letterbox-style-white  tnt-section-sports tnt-sub-section-football">
                    <div class="card-container">
                        
                        <div class="card-body">
                            <div class="card-labels">
            
        <div class="card-label-flags">
            <span class="tnt-flag label label-flag-section" data-trust=""> 
                    <a href="/sports/football">Football</a>
                
            </span>
        </div>
        
            
        </div>
    
        <div class="card-headline"><h3 class="tnt-headline ">
        
             <a href="/sports/football/alabama-five-star-qb-signee-julian-sayin-has-entered-the-transfer-portal/article_7391f0e7-222c-5538-b15a-f90e84d3a466.html" class="tnt-asset-link" aria-label="Alabama five-star QB signee Julian Sayin has entered the transfer portal">
        

        Alabama five-star QB signee Julian Sayin has entered the transfer portal</a></h3></div>
    <div class="card-meta">
            <ul class="list-inline "><li class="card-date">
                <time datetime="2024-01-19T13:42:49-05:00" class="tnt-date asset-date text-muted ">
                    Jan 19, 2024</time></li><li class="card-comment-count"></li></ul>
            
        </div>
    
                        </div>
                    </div>
                </article></div>
            </div>
            
        </div> 
        
        </section>
        </div>
        </div></div><div class="row row-four"><div class="fixed-col-left col-md-4 main-sidebar grid-variant">
            <div id="tncms-region-global-side-quaternary" class="tncms-region "></div><div id="tncms-region-index-side-quaternary" class="tncms-region "></div><div id="sticky-right-rail-spacer">
                        <div id="sticky-right-rail"><div id="tncms-region-global-side-sticky" class="tncms-region "></div><div id="tncms-region-index-side-sticky" class="tncms-region "></div></div>
                    </div>
        </div><div class="fixed-col-right main-content col-md-8 has-sidebar">
            <div id="tncms-region-front-index-four-top" class="tncms-region "></div><div id="tncms-region-index-four-top" class="tncms-region "></div><div class="row equal-height swapRow"><div id="tncms-region-index-swap-four-a" class="tncms-region col-md-8 pull-right-lg"></div><div id="tncms-region-index-swap-four-b" class="tncms-region col-md-4 pull-left-lg"></div></div>
           <div class="row equal-height"><div id="tncms-region-index-four-a" class="tncms-region col-md-6"></div><div id="tncms-region-index-four-b" class="tncms-region col-md-6"></div></div>
            <div class="row equal-height"><div id="tncms-region-index-four-c" class="tncms-region col-md-5"></div><div id="tncms-region-index-four-d" class="tncms-region col-md-7"></div></div>
            <div class="row equal-height"><div id="tncms-region-index-four-e" class="tncms-region col-md-7"></div><div id="tncms-region-index-four-f" class="tncms-region col-md-5"></div></div><div id="tncms-region-index-four-middle" class="tncms-region "></div>
            <div class="row equal-height"><div id="tncms-region-index-four-g" class="tncms-region col-md-4"></div><div id="tncms-region-index-four-h" class="tncms-region col-md-8"></div></div>
            <div class="row equal-height"><div id="tncms-region-index-four-i" class="tncms-region col-md-8"></div><div id="tncms-region-index-four-j" class="tncms-region col-md-4"></div></div>
            <div class="row equal-height"><div id="tncms-region-index-four-k" class="tncms-region col-md-4"></div><div id="tncms-region-index-four-l" class="tncms-region col-md-4"></div><div id="tncms-region-index-four-m" class="tncms-region col-md-4"></div></div><div id="tncms-region-index-four-bottom" class="tncms-region "></div>
        </div></div><div id="tncms-region-index-full-four-bottom" class="tncms-region full-region"></div><div class="row equal-height"><div id="tncms-region-index-full-four-a" class="tncms-region col-md-4"></div><div id="tncms-region-index-full-four-b" class="tncms-region col-md-4"></div><div id="tncms-region-index-full-four-c" class="tncms-region col-md-4"></div></div>
    
    <div class="row equal-height"><div id="tncms-region-front-4a" class="tncms-region col-md-4"></div><div id="tncms-region-front-4b" class="tncms-region col-md-4"></div><div id="tncms-region-front-4c" class="tncms-region col-md-4"></div></div>
    <div class="row equal-height"><div id="tncms-region-front-5a" class="tncms-region col-md-4"></div><div id="tncms-region-front-5b" class="tncms-region col-md-4"></div><div id="tncms-region-front-5c" class="tncms-region col-md-4"></div></div>
    <div class="row equal-height"><div id="tncms-region-front-6a" class="tncms-region col-md-4"></div><div id="tncms-region-front-6b" class="tncms-region col-md-4"></div><div id="tncms-region-front-6c" class="tncms-region col-md-4"></div></div>
    <div class="row equal-height"><div id="tncms-region-front-7a" class="tncms-region col-md-4"></div><div id="tncms-region-front-7b" class="tncms-region col-md-4"></div><div id="tncms-region-front-7c" class="tncms-region col-md-4"></div></div>
    
    <div class="container-breakout "><div id="tncms-region-index-breakout-four" class="tncms-region "></div><div id="tncms-region-front-index-breakout-four" class="tncms-region "></div></div>
    
<!-- /Section Four -->
<!-- Section Bottom -->
    <div class="row row-bottom equal-height"><div id="tncms-region-front-index-bottom-a" class="tncms-region col-md-4 left-col"></div><div id="tncms-region-front-index-bottom-b" class="tncms-region col-md-4 middle-col"></div><div id="tncms-region-front-index-bottom-c" class="tncms-region col-md-4 right-col"></div></div>
     <div class="row row-bottom equal-height"><div id="tncms-region-index-bottom-a" class="tncms-region col-md-4 left-col"></div><div id="tncms-region-index-bottom-b" class="tncms-region col-md-4 middle-col"></div><div id="tncms-region-index-bottom-c" class="tncms-region col-md-4 right-col"></div></div><!-- /Section Bottom --><div class="row">
                <div class="col-md-12"><div id="tncms-region-index-container-bottom" class="tncms-region "></div></div>
                <div class="col-md-12"><div id="tncms-region-front-index-container-bottom" class="tncms-region "></div></div>
            </div>
        <div class="row">
            <div class="col-md-12"><div id="tncms-region-global-container-bottom" class="tncms-region "></div></div>
        </div></section>
    <section id="main-bottom-container" class="container-fullscreen-region container-fluid">
        <div class="fullscreen-region"><div id="tncms-region-global-container-bottom-fullscreen" class="tncms-region "><div id="tncms-block-3287617" class="tncms-block">
    <div class="modal promo-designer-modal in centered " id="promo-designer-modal-custom-pop-3287617" tabindex="-1" role="dialog" aria-label="Promotional pop up" aria-hidden="true" >
        <div class="modal-dialog modal-md centered">
            <div class="modal-content">
                <div class="modal-body">
<section id="block-3287617" class="block emphasis-h3   " ><div class="promo-design card-rectangle">
    <div class="card-bg-color rectangle"><button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="tnt-stack" aria-hidden="true">
                    <i class="fas tnt-circle tnt-inverse tnt-stack-1x"></i>
                    <i class="fas tnt-times-circle tnt-stack-1x"></i>
                </span>
            </button><div class="card-panel panel image-flow-small"><div class="panel-body">
                <div class="promo-designer-wrapper">
                    
                       <div class="image small">
            <img 
                
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAAEElEQVR42mM8U88ABowYDABAxQPltt5zqAAAAABJRU5ErkJggg==" 
                data-srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/19bca104-b548-11ee-93b5-27d2bd1a5b58.jpg?resize=150%2C92 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/19bca104-b548-11ee-93b5-27d2bd1a5b58.jpg?resize=200%2C123 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/19bca104-b548-11ee-93b5-27d2bd1a5b58.jpg?resize=225%2C138 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/19bca104-b548-11ee-93b5-27d2bd1a5b58.jpg?resize=300%2C184 300w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/19bca104-b548-11ee-93b5-27d2bd1a5b58.jpg?resize=400%2C246 400w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/19bca104-b548-11ee-93b5-27d2bd1a5b58.jpg 540w" 
                data-sizes="auto" 
                class="small img-responsive lazyload tnt-prop-img"
                width="534"
                height="328"
                alt=""
                aria-hidden="true"></div>
                    
                        <div class="headline small light ">
                            SALE: Save $36 for your first 8 weeks!
                        </div>
                    
                    <div class="promo-design-button">
                            
                            
                            <a class="btn btn-danger btn-lg" href="https://www.thestar.com/subscribe">GET THIS OFFER</a>
                            
                        </div><p class="info-text light ">
                            Cancel anytime.
                        </p>
                </div>
            </div>
        </div>
    </div>
    
</div></section></div>
            </div>
        </div>
    </div></div></div></div>
    </section><!-- / main-body-container -->
    </div>
    <div id="site-footer-container" class="hidden-print">
         

        
            <footer id="site-footer" class="container well-main">
                
                <div id="tncms-region-footer-top-col-full" class="tncms-region "></div>
                <div class="row">
                    <div id="footer-col-one" class="col-sm-3"><div id="tncms-region-footer-col-one" class="tncms-region "><div id="tncms-block-2826984" class="tncms-block footer-logo"><div id="site-logo-2826984" class="site-logo-container text-left" ><div class="logo-middle">
            <a  href="/" aria-label="Home page"><img 
            
            src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/2faeee7c-8d44-11ed-8c18-eb5483a10695.png?resize=200%2C181" 
            srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/2faeee7c-8d44-11ed-8c18-eb5483a10695.png?resize=150%2C136 150w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/2faeee7c-8d44-11ed-8c18-eb5483a10695.png?resize=200%2C181 200w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/2faeee7c-8d44-11ed-8c18-eb5483a10695.png?resize=225%2C203 225w, https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/2faeee7c-8d44-11ed-8c18-eb5483a10695.png 300w"
            sizes="(min-width: 1200px) 285px, calc(25vw - 30px)"
            
            class=" img-responsive lazyload tnt-prop-img"
            width="300"
            height="271"
            alt="site-logo"
            ></a>
        </div></div></div><div id="tncms-block-2828136" class="tncms-block"><h3 id="footerColOneToggle">theStar.com <i class="visible-xs fas tnt-chevron-down"></i></h3></div></div><div id="tncms-region-nav-footer-col-one-nav" class="tncms-region-nav"><ul id="footer-col-one-nav_menu" class="topNav bullet-nav nav-list" ><li class=" "  data-cmspath="/sports/football/" data-liurl="/subscribe/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-subscribe-to-the-star"  href="/subscribe/"  tabindex="0">
                    <span class="nav-label ">Subscribe to the Star</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/users/admin/service/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-manage-star-subscription"  href="/users/admin/service/"  tabindex="0">
                    <span class="nav-label ">Manage Star Subscription</span>
                </a></li><li class="  gdpr-removal"  data-cmspath="/sports/football/" data-liurl="/site/forms/feedback_form/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-feedback"  href="/site/forms/feedback_form/"  tabindex="0">
                    <span class="nav-label ">Feedback</span>
                </a></li><li class="  gdpr-removal"  data-cmspath="/sports/football/" data-liurl="/site/forms/removal_request/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-removal-request"  href="/site/forms/removal_request/"  tabindex="0">
                    <span class="nav-label ">Removal Request</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/site/sitemap/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-site-map"  href="/site/sitemap/"  tabindex="0">
                    <span class="nav-label ">Site Map</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="/newsletters/?itm_source=newsletter-footer-link" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-newsletters"  href="/newsletters/?itm_source=newsletter-footer-link"  tabindex="0">
                    <span class="nav-label ">Newsletters</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/site/notifications/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-notifications"  href="/site/notifications/"  tabindex="0">
                    <span class="nav-label ">Notifications</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/opinion/corrections/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-corrections"  href="/opinion/corrections/"  tabindex="0">
                    <span class="nav-label ">Corrections</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/site/todays-news/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-today-s-news"  href="/site/todays-news/"  tabindex="0">
                    <span class="nav-label ">Today’s News</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/site/flyers/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-flyers"  href="/site/flyers/"  tabindex="0">
                    <span class="nav-label ">Flyers</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/contests/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-contests"  href="/contests/"  tabindex="0">
                    <span class="nav-label ">Contests</span>
                </a></li></ul><style>
            .affix-top #tncms-region-main-nav-right-region{display: none}
            .affix #tncms-region-main-nav-right-region{display: flex;column-gap:8px}
            @media (max-width: 991px){
            #main-navigation{height: 45px}
            }
            
        </style>
    </div><div id="tncms-region-footer-col-one-bottom" class="tncms-region "></div></div>
    <div id="footer-col-two" class="col-sm-3"><div id="tncms-region-footer-col-two" class="tncms-region "><div id="tncms-block-2828139" class="tncms-block"><h3 id="footerColTwoToggle">Toronto Star Newspapers Ltd. <i class="visible-xs fas tnt-chevron-down"></i></h3></div></div><div id="tncms-region-nav-footer-col-two-nav" class="tncms-region-nav"><ul id="footer-col-two-nav_menu" class="topNav bullet-nav nav-list" ><li class=" "  data-cmspath="/sports/football/" data-liurl="https://www.tsoffers.ca/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-subscribe-to-home-delivery"  href="https://www.tsoffers.ca/"  target="_blank" rel="noopener" tabindex="0">
                    <span class="nav-label ">Subscribe to Home Delivery</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="https://toriservices.newscyclecloud.com/cgi-bin/cmo_tor-c-cmdb-01.sh/custservice/web/login.html?SiteID=TS" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-manage-home-delivery-subscription"  href="https://toriservices.newscyclecloud.com/cgi-bin/cmo_tor-c-cmdb-01.sh/custservice/web/login.html?SiteID=TS"  target="_blank" rel="noopener" tabindex="0">
                    <span class="nav-label ">Manage Home Delivery Subscription</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/site/corporate-subscriptions/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-corporate-group-subscriptions"  href="/site/corporate-subscriptions/"  tabindex="0">
                    <span class="nav-label ">Corporate Group Subscriptions</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/site/about/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-about"  href="/site/about/"  tabindex="0">
                    <span class="nav-label ">About</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="/site/static-pages/statement-of-principles.html" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-torstar-journalistic-standards"  href="/site/static-pages/statement-of-principles.html"  tabindex="0">
                    <span class="nav-label ">Torstar Journalistic Standards</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="/site/atkinson/atkinson-principles.html" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-atkinson-principles"  href="/site/atkinson/atkinson-principles.html"  tabindex="0">
                    <span class="nav-label ">Atkinson Principles</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="/site/static-pages/glossary.html" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-glossary"  href="/site/static-pages/glossary.html"  tabindex="0">
                    <span class="nav-label ">Glossary</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/trust/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-trust-project"  href="/trust/"  tabindex="0">
                    <span class="nav-label ">Trust Project</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="/site/static-pages/contact-us.html" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-contact-us"  href="/site/static-pages/contact-us.html"  tabindex="0">
                    <span class="nav-label ">Contact Us</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="https://careers.smartrecruiters.com/Torstar/careers" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-careers"  href="https://careers.smartrecruiters.com/Torstar/careers"  target="_blank" rel="noopener" tabindex="0">
                    <span class="nav-label ">Careers</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="/site/static-pages/contact-webmaster.html" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-contact-webmaster"  href="/site/static-pages/contact-webmaster.html"  tabindex="0">
                    <span class="nav-label ">Contact Webmaster</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/site/faq/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-faq"  href="/site/faq/"  tabindex="0">
                    <span class="nav-label ">FAQ</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="https://thestarepaper.pressreader.com/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-star-epaper-edition"  href="https://thestarepaper.pressreader.com/"  target="_blank" rel="noopener" tabindex="0">
                    <span class="nav-label ">Star ePaper Edition</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="/site/static-pages/reprint-license.html" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-reprint-and-license"  href="/site/static-pages/reprint-license.html"  tabindex="0">
                    <span class="nav-label ">Reprint and License</span>
                </a></li></ul><style>
            .affix-top #tncms-region-main-nav-right-region{display: none}
            .affix #tncms-region-main-nav-right-region{display: flex;column-gap:8px}
            @media (max-width: 991px){
            #main-navigation{height: 45px}
            }
            
        </style>
    </div><div id="tncms-region-footer-col-two-bottom" class="tncms-region "></div></div>
    <div id="footer-col-three" class="col-sm-3"><div id="tncms-region-footer-col-three" class="tncms-region "><div id="tncms-block-2828142" class="tncms-block"><h3 id="footerColThreeToggle">Advertising <i class="visible-xs fas tnt-chevron-down"></i></h3></div></div><div id="tncms-region-nav-footer-col-three-nav" class="tncms-region-nav"><ul id="footer-col-three-nav_menu" class="topNav bullet-nav nav-list" ><li class=" "  data-cmspath="/sports/football" data-liurl="/site/static-pages/advertise-with-us.html" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-advertise-with-us"  href="/site/static-pages/advertise-with-us.html"  tabindex="0">
                    <span class="nav-label ">Advertise with Us</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="/site/static-pages/terms-and-conditions.html" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-advertising-terms"  href="/site/static-pages/terms-and-conditions.html"  tabindex="0">
                    <span class="nav-label ">Advertising Terms</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="/site/static-pages/advertising-standards.html" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-advertising-standards"  href="/site/static-pages/advertising-standards.html"  tabindex="0">
                    <span class="nav-label ">Advertising Standards</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/special-features/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-special-features"  href="/special-features/"  tabindex="0">
                    <span class="nav-label ">Special Features</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/site/ad-registry/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-election-ads-registry"  href="/site/ad-registry/"  tabindex="0">
                    <span class="nav-label ">Election Ads Registry</span>
                </a></li></ul><style>
            .affix-top #tncms-region-main-nav-right-region{display: none}
            .affix #tncms-region-main-nav-right-region{display: flex;column-gap:8px}
            @media (max-width: 991px){
            #main-navigation{height: 45px}
            }
            
        </style>
    </div><div id="tncms-region-footer-col-three-bottom" class="tncms-region "></div></div>
    <div id="footer-col-four" class="col-sm-3"><div id="tncms-region-footer-col-four" class="tncms-region "><div id="tncms-block-2828145" class="tncms-block"><h3 id="footerColFourToggle">Initiatives <i class="visible-xs fas tnt-chevron-down"></i></h3></div></div><div id="tncms-region-nav-footer-col-four-nav" class="tncms-region-nav"><ul id="footer-col-four-nav_menu" class="topNav bullet-nav nav-list" ><li class=" "  data-cmspath="/sports/football/" data-liurl="/initiatives/santa-claus-fund/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-santa-claus-fund"  href="/initiatives/santa-claus-fund/"  tabindex="0">
                    <span class="nav-label ">Santa Claus Fund</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="/initiatives/fresh-air-fund/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-fresh-air-fund"  href="/initiatives/fresh-air-fund/"  tabindex="0">
                    <span class="nav-label ">Fresh Air Fund</span>
                </a></li><li class=" "  data-cmspath="/sports/football" data-liurl="https://www.thestaradvisers.com/Portal/default.aspx" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-star-advisers"  href="https://www.thestaradvisers.com/Portal/default.aspx"  target="_blank" rel="noopener" tabindex="0">
                    <span class="nav-label ">Star Advisers</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="https://www.classroomconnection.ca/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-classroom-connection"  href="https://www.classroomconnection.ca/"  target="_blank" rel="noopener" tabindex="0">
                    <span class="nav-label ">Classroom Connection</span>
                </a></li><li class=" "  data-cmspath="/sports/football/" data-liurl="https://pagesofthepast.ca/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-toronto-star-archives"  href="https://pagesofthepast.ca/"  target="_blank" rel="noopener" tabindex="0">
                    <span class="nav-label ">Toronto Star Archives</span>
                </a></li></ul><style>
            .affix-top #tncms-region-main-nav-right-region{display: none}
            .affix #tncms-region-main-nav-right-region{display: flex;column-gap:8px}
            @media (max-width: 991px){
            #main-navigation{height: 45px}
            }
            
        </style>
    </div><div id="tncms-region-footer-col-four-bottom" class="tncms-region "></div></div>
                </div>
                <div id="tncms-region-footer-bottom-col-full" class="tncms-region "><div id="tncms-block-2826990" class="tncms-block footer-social padding-bottom"><div class="follow-links-2826990 follow-links default">
    
    <section id="block-2826990" class="block emphasis-h4   " ><ul class="list-inline">
        
            <li>
                <a href="https://www.facebook.com/torontostar" title="Facebook" target="_blank" rel="noopener" class="btn btn-xs btn-link fb" data-toggle="tooltip" data-placement="bottom">
                    <i class="fab tnt-facebook-f"></i>
                    <span class="sr-only">Facebook</span>
                </a>
            </li>
        
        
            <li>
                <a href="https://twitter.com/torontostar" title="Twitter" target="_blank" rel="noopener" class="btn btn-xs btn-link tw" data-toggle="tooltip" data-placement="bottom">
                    <i class="fab tnt-x-twitter"></i>
                    <span class="sr-only">Twitter</span>
                </a>
            </li>
        
        
        
            <li>
                <a href="https://www.youtube.com/TorontoStar" title="Youtube" target="_blank" rel="noopener" class="btn btn-xs btn-link yt" data-toggle="tooltip" data-placement="bottom">
                    <i class="fab tnt-youtube"></i>
                    <span class="sr-only">YouTube</span>
                </a>
            </li>
        
        
        
        
            <li>
                <a href="https://www.instagram.com/thetorontostar/" title="Instagram" target="_blank" rel="noopener" class="btn btn-xs btn-link is" data-toggle="tooltip" data-placement="bottom">
                    <i class="fab tnt-instagram"></i>
                    <span class="sr-only">Instagram</span>
                </a>
            </li>
        
        
        
        
        
        
        
        
        
        
        
        
    </ul>
    </section>
</div>
<script type="application/ld+json">
{ "@context" : "https://schema.org",
  "@type" : "Organization",
  "url" : "http://www.thestar.com",
  "sameAs" : ["https://www.facebook.com/torontostar","https://twitter.com/torontostar","https://www.youtube.com/TorontoStar","https://www.instagram.com/thetorontostar/"]
}
</script>
<div class="clearfix"></div></div><div id="tncms-block-2831502" class="tncms-block">
<div class="footer-right-icons">
    
        <div class="epaper-link"><a href="https://thestarepaper.pressreader.com/" class="epaper" arial-label="ePaper Link"><img src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/icons/todays-paper.png?_dc=1706121063" alt="ePaper Link" loading="lazy" width=112 height=40></a></div>
    
    
        <div class="apple-link"><a href="https://apps.apple.com/ca/app/thestar-com-iphone/id379481068" arial-label="Apple App Store Download"><img src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/icons/app-store.svg?_dc=1706121063" alt="Apple App Store Logo" loading="lazy" width=112 height=40></a></div>
    
    
        <div class="google-link"><a href="https://play.google.com/store/apps/details?id=com.thestar.www&referrer=utm_source%3Dweb-driver%26utm_medium%3Ddriver%26utm_content%3Dfooter" arial-label="Google Play Store Download"><img src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/icons/google-play.svg?_dc=1706121063" alt="Google Play Store Logo" loading="lazy" width=112 height=40></a></div>
    
    
</div></div></div><div id="browser-compatibility-modal" class=" browser-compatibility-wrapper browser-compatibility-modal">
        <div class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content text-center">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Browser Compatibility</h4>
                    </div>
                    <div class="modal-body">
                        <p class="lead">Your browser is out of date and potentially vulnerable to security risks.<br />We recommend switching to one of the following browsers:</p>
                        <div class="btn-group" role="group" aria-label="Outdated browser notice">
                            <a href="https://www.microsoft.com/en-us/edge" role="button" class="btn btn-default list-group-item"><i class="fab tnt-edge"></i>Microsoft Edge</a>
                            <a href="https://www.google.com/chrome/" role="button" class="btn btn-default list-group-item"><i class="fab tnt-chrome"></i>Google Chrome</a>
                            <a href="https://www.mozilla.org/en-US/firefox/" role="button" class="btn btn-default list-group-item"><i class="fab tnt-firefox"></i>Firefox</a>
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
    </div>
            </footer>
        

        <div id="site-copyright-container" class="container">
            <div id="tncms-region-footer-copyright" class="tncms-region "><div id="tncms-block-2827023" class="tncms-block"><div id="site-copyright" class="row copyright">
<div class="col-md-7">© Copyright Toronto Star Newspapers Ltd. 1996 - 2023<br>
The Toronto Star and thestar.com, each property of Toronto Star Newspapers Limited, 8 Spadina Avenue, 10th Floor, Toronto, ON M5V 0S8</div>
<div class="col-md-5"><a href="https://notices.torstar.com/main_terms_of_use_daily_and_community_brands_EN/" target="_blank" aria-label="Terms of Use">Terms of Use</a> | <a href="https://notices.torstar.com/privacy-policy/index.html" target="_blank" aria-label="Privacy Policy">Privacy Policy</a> | <a href="/site/static-pages/terms-and-conditions.html" target="_blank" aria-label="Advertising Terms">Advertising Terms</a> | <a href="/site/static-pages/accessibility.html" target="_blank" aria-label="Accessibility">Accessibility</a></div>
</div></div></div>
        </div>
    </div>
    
    
        </div><!-- / offcanvas close  -->
    

    
    
    <!-- / site-container close -->
    </div>
    
    
    <script>
        window.__tnt = window.__tnt || {};
        __tnt.compatibility = __tnt.compatibility || {};

        __tnt.compatibility.status = '';
        __tnt.compatibility.check = function() {
            if (typeof __tnt.advertisements == 'undefined') {
                __tnt.compatibility.status = 'FAIL: object 0 undefined';
                return false;
            }
            return true;
        };
        __tnt.compatibility.notification = function() {
            };
        (function() {
            function compatibilityCheck() {
                if (!__tnt.compatibility.check()) {
                    __tnt.trackEvent({
                        'category':'subscription',
                        'action':'adblock',
                        'label':'adblock detected',
                        'value':'1'
                    });
                    __tnt.compatibility.notification();
                }
            }

            if (document.readyState != 'loading') {
                compatibilityCheck();
            } else {
                document.addEventListener('DOMContentLoaded', compatibilityCheck);
            }
        })();
    </script>
    
    
    <script>
        jQuery(function() {
            if(typeof TNCMS.Tracking != 'undefined'){
                jQuery(TNCMS.Tracking.trackDeclarativeEvents);
            }});
    </script>

    <script>
        __tnt.trackEvent = function(obj) {
            if (typeof obj === 'object') {
                    if (obj.category && obj.action) {
                        __tnt.googleEvent(obj);
                    } else if (obj.network && obj.socialAction) {
                        __tnt.googleSocial(obj);
                    } else if (obj.url) {
                        __tnt.googlePageView(obj);
                    }
                    if (typeof TNCMS.Tracking != 'undefined' && obj.metric) {
                        TNCMS.Tracking.addEvent({
                            app: obj.app,
                            metric: obj.metric,
                            id: obj.uuid
                        });
                    }
            }
        };

        if (__tnt.trackEventLater.length > 0) {
            __tnt.trackEventLater.forEach(function(obj) {
                __tnt.trackEvent(obj);
            });
        }

        Array.from(document.querySelectorAll('body [data-track]')).forEach(function(el) {
            el.addEventListener(__tnt.client.clickEvent, function() {
                __tnt.trackEvent(JSON.parse(el.dataset.track));
            });
        });
        Array.from(document.querySelectorAll('body [data-tncms-track-event]')).forEach(function(el) {
            el.addEventListener(__tnt.client.clickEvent, function() {
                __tnt.trackEvent(JSON.parse(el.dataset.tncmsTrackEvent));
            });
        });
        
        Array.from(document.querySelectorAll('body [data-tncms-track-dmp]')).forEach(function(el) {
            el.addEventListener(__tnt.client.clickEvent, function() {
                var dmpData = el.dataset.tncmsTrackDmp;
                
            });
        });
    
    </script>
    
    
    <!-- Parsely Root object -->
    <div id="parsely-root" style="display: none">
        <span id="parsely-cfg" data-parsely-site="thestar.com"></span>
    </div>
            <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/common/subscription-landing.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
            <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/common/subscription-landing.css?_dc=1706121065"></noscript>
          
            
        
    <form id="user-login-form-generic" style="display:none" role="form" method="post" action="https://www.thestar.com/users/login/">
        <input type="hidden" name="x_org_url" value="https://www.thestar.com/sports/football/">
        <input type="hidden" name="referer_url" value="https://www.thestar.com/sports/football/">
        <input type="hidden" name="username" value="provider:Metroland Hub">
        <input type="hidden" name="site" value="thestar.com">
    </form>
    
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/scripts/edition-selector.js?_dc=1706121063"></script>
<script>/*<![CDATA[*/ 
        if(window.innerWidth<800){
        document.addEventListener('DOMContentLoaded', function() {
        function getAbsoluteHeight(el) {
          var styles = window.getComputedStyle(el);
          var margin = parseFloat(styles['marginTop']) +
          parseFloat(styles['marginBottom']);

          return Math.ceil(el.offsetHeight + margin);
         }
         
          try{
              var myStickyObject = document.querySelector('.stickyMobileAd');
              var bodyContainer = document.getElementById("main-body-container");
              var initialOffset = myStickyObject.offsetTop; // Initial offset position of ad div
              var isSticky = false;
              var hasExecuted = false; // Flag variable to track if the code has already executed
              var adContainerHeight = getAbsoluteHeight(myStickyObject);
              
              var adPlaceholder = document.createElement('div');
              adPlaceholder.style.height = adContainerHeight + 'px';
              adPlaceholder.style.width = '100%';
              
              
            
              function makeSticky() {
                myStickyObject.classList.add('sticky');
                isSticky = true;
                // bodyContainer.style.marginTop = adContainerHeight - 1 + "px";
                
                // myStickyObject.parentElement.appendChild(adPlaceholder);
                myStickyObject.parentElement.prepend(adPlaceholder);
            
                setTimeout(function() {
                  myStickyObject.classList.remove('sticky');
                  // bodyContainer.style.marginTop = "0px";
                  myStickyObject.parentElement.removeChild(adPlaceholder);
                  isSticky = false;
                }, 7000); // Revert back to normal after 7 seconds
              }
            
              function handleScroll() {
                if (!hasExecuted) {
                  var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
            
                  if (!isSticky && scrollPos >= initialOffset) {
                    makeSticky();
                  }
            
                  hasExecuted = true;
                  window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener
                }
              }
              window.addEventListener('scroll', handleScroll);
          }catch(err){}
        });
        }
         /*]]>*/</script>
<script>/*<![CDATA[*/ 
                __tnt.googleEvent = function(obj) {
                    dataLayer.push({
                        'event': 'tncms.event.trigger',
                             'tncms.event.trigger.category': obj.category,
                             'tncms.event.trigger.action': obj.action,
                             'tncms.event.trigger.label': obj.label, 
                             'tncms.event.trigger.value': obj.value
                    });
                }
                /* Virtual page view */
                __tnt.googlePageView = function(obj) {
                    var sURL = obj.url.replace(/^.*\/\/[^\/]+/, '');
                    dataLayer.push({
                        'event': 'tncms.event.virtual_pageview',
                            'tncms.event.virtual_pageview.url': sURL,
                            'tncms.event.virtual_pageview.title': obj.title,
                            'tncms.event.virtual_pageview.metric': obj.metric
                    });
                }
                /* Social event */
                __tnt.googleSocial = function(obj) {
                    dataLayer.push({
                        'event': 'tncms.event.social',
                            'tncms.event.social.network': obj.network,
                            'tncms.event.social.action': obj.socialAction,
                            'tncms.event.social.target': obj.url
                    });
                } /*]]>*/</script>
<script>/*<![CDATA[*/ 
        document.querySelector('.mobile-menu-close').addEventListener('click',function(e){
            e.preventDefault();
            e.stopPropagation();
            document.documentElement.classList.remove('drawer-open', 'active-left', 'active-right');
        })
         /*]]>*/</script>
<script>/*<![CDATA[*/ 
            (function(d) {
                const loginUserButton = d.querySelector("#userStateButton");
                const userLogoutForm = d.querySelector("#user-mobile-logout-form");
                const userLoginForm = d.querySelector("#user-mobile-login-form");
                const remoteSite = false;
                d.addEventListener('DOMContentLoaded',function(){
                    if (TNCMS.User.isLoggedIn())
                    {
                        loginUserButton.dataset.status='logout';
                        loginUserButton.innerHTML = "Log Out";
                    }
                })
                loginUserButton.addEventListener('click', function () {
                    if(loginUserButton.dataset.status=='login')
                    {
                        if (remoteSite)
                        {
                            userLoginForm.submit();
                        } else {
                            window.location.href="/users/login/?referer_url=https%3A%2F%2Fwww.thestar.com%2Fsports%2Ffootball%2F";
                        }
                    } else {
                        userLogoutForm.submit();
                    }
                });
            })(document);
             /*]]>*/</script>
<script>/*<![CDATA[*/ 
            (function(d) {
            
            var form = d.getElementById('site-search-3016600'),
                query_input = d.getElementById('site-search-3016600-term'),
                is_open = false;
            let searchCancel = d.getElementById("search-cancel-3016600");
            let searchDiv = d.getElementById("site-search-form-3016600");
            let controlsDiv = d.getElementById("user-controls-3016600");
            searchCancel.addEventListener('click', function () {
                query_input.value=""
            });
            
            /** Submit handler */
            form.onsubmit = function(){
                // Filter query
                var elem = document.querySelector("#site-search-3016600 input[name=q]"),
        sQueryFiltered = elem.value.replace(/\?/g, '');
    elem.value = sQueryFiltered;
        
                // No submit if empty input
                if( query_input.val() ){
                    return true;
                } else{
                    return false;
                }
            };
        })(document);
            
         /*]]>*/</script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/shared-content/art/tncms/templates/libraries/flex/components/ads/resources/scripts/tnt.ads.core.70d412172f30735865838caa3d6f42a0.js"></script>
<script>/*<![CDATA[*/ 
        (function(){
            let currentUserType = 'anonymous';
            if (__tnt.user.loggedIn && __tnt.user.services!='0' && __tnt.user.services !== undefined)
            {
                currentUserType = 'subscriber';
            } else if (__tnt.user.loggedIn)
            {
                currentUserType = 'registered';
            }
            
            try {
            const selectedPromo = document.querySelector("#user-promo-2841699.user-promo ."+currentUserType);
            selectedPromo.classList.remove("hidden");
            } catch(err){}
       })();
            
        /*]]>*/</script>
<script>/*<![CDATA[*/ 
    const userControlPanelMain2841699=document.querySelector("#user-control-panel-2841699");
    const userControlPanelButton2841699=document.querySelector("#userControlPanel-2841699");
    const userPanelIndicator2841699=userControlPanelButton2841699.querySelector(".userPanelIndicator");
    const userControlPanel2841699=userControlPanelMain2841699.querySelector(".user-controls-menu");
    const userNameContainer2841699=userControlPanelMain2841699.querySelector(".userName");
    const debugReg2841699 = false;
    const debugSub2841699 = false;
    
    
    const editionsControlButton2841699=userControlPanelMain2841699.querySelector("#editionsControlPanel-2841699");
    const editionsPanel2841699=userControlPanelMain2841699.querySelector("#editionsPanel-2841699");
    editionsControlButton2841699.addEventListener("click", function(evt){
        const target = editionsControlButton2841699;
        const editionsPanelIndicator2841699 = editionsControlButton2841699.querySelector(".editionsIndicator");
        if(target.dataset.status=='closed')
        {
            editionsPanelIndicator2841699.classList.remove("tnt-chevron-down");
            editionsPanelIndicator2841699.classList.add("tnt-chevron-up");
            editionsPanel2841699.classList.remove("closed");
            editionsPanel2841699.classList.add("open");
            target.dataset.status="open";
        } else {
            editionsPanelIndicator2841699.classList.remove("tnt-chevron-up");
            editionsPanelIndicator2841699.classList.add("tnt-chevron-down");
            editionsPanel2841699.classList.remove("open");
            editionsPanel2841699.classList.add("closed");
            target.dataset.status="closed";
        }
    })
    
    
    document.addEventListener("DOMContentLoaded", handleUserLogin2841699('domloaded'));
    /* add an event listener for tnt-user-status */
    document.addEventListener("tnt-user-status", handleUserLogin2841699('userstatus'));
    function handleUserLogout2841699()
    {
        //window.sessionStorage.removeItem('tncms-newsletter-email','');
        window.sessionStorage.removeItem('bd-viafoura-oidc'); // clear viafoura JWT token
        document.getElementById('user-local-logout-form-2841699').submit();
        return false;
    }
    function handleUserLogin2841699(caller)
    {
        //console.log("Called from "+caller);
        // Modify dropdown menu button if user is logged in
        if (TNCMS.User.isLoggedIn() || debugReg2841699 || debugSub2841699) {
           // check to see if we've already handled this, which might be the case if this is being fired from the user subscription wall
           if(userControlPanelButton2841699.dataset.user!="loggedin")
           {
               let userFirstName = "Guest";
               
               try{
                   userFirstName = TNCMS.User.getFirstName();
               } catch(err){
                   userFirstName = TNCMS.User.getScreenName();
                   if (userFirstName.includes('jid-'))
                   {
                       //we have a janrain user screenname, do nothing
                       userFirstName = "Reader";
                   } else {
                       //we can try splitting on hyphen and taking first segment
                       let userNameParts = userFirstName.split("-");
                       if(userNameParts.length > 2)
                       {
                           userFirstName = userNameParts[0];
                       }
                   }
               }
               if(debugReg2841699 || debugSub2841699)
               {
                   userFirstName = "Debug User";
               }
               userControlPanelButton2841699.classList.remove("loggedout");
               userControlPanelButton2841699.classList.add("loggedin");
               userControlPanelButton2841699.dataset.user="loggedin";
               
               userNameContainer2841699.innerHTML = userFirstName;
               const userIcon2841699 = userControlPanelButton2841699.querySelector('.userIconSpan');
               userIcon2841699.classList.remove('icon-guest');
               userIcon2841699.classList.add('icon-signed-in');
               userControlPanelButton2841699.addEventListener('click', function(evt){
                   const target = userControlPanelButton2841699;
                   const userPanelIndicatorToggle2841699=userControlPanelButton2841699.querySelector(".userPanelIndicator");
                   if(target.dataset.status=="open")
                   {
                       target.dataset.status="closed";
                       userControlPanel2841699.classList.remove("open");
                       userControlPanel2841699.classList.add("closed");
                       userPanelIndicatorToggle2841699.classList.remove("tnt-chevron-up");
                       userPanelIndicatorToggle2841699.classList.add("tnt-chevron-down");
                   } else {
                       target.dataset.status="open";
                       userControlPanel2841699.classList.remove("closed");
                       userControlPanel2841699.classList.add("open");
                       userPanelIndicatorToggle2841699.classList.remove("tnt-chevron-down");
                       userPanelIndicatorToggle2841699.classList.add("tnt-chevron-up");
                   }
                   
               });
           }
       } else {
           userControlPanelButton2841699.addEventListener('click', function(){
                
                window.location = 'https://www.thestar.com/users/login/?referer_url=https%3A%2F%2Fwww.thestar.com%2Fsports%2Ffootball%2F';
                
           });
       }
    }
 /*]]>*/</script>
<script>/*<![CDATA[*/ 
        (function(d) {
        
        var form = d.getElementById('site-search-header'),
            query_input = d.getElementById('site-search-2841699-term'),
            is_open = false;
        let searchToggle = d.getElementById("search-toggle-2841699");
        let searchCancel = d.getElementById("search-cancel-2841699");
        let searchDiv = d.getElementById("site-search-form-2841699");
        let controlsDiv = d.getElementById("user-controls-2841699");
        searchToggle.addEventListener('click', function () {
            controlsDiv.style.display="none";
            searchDiv.style.display="flex";
            query_input.focus();
            is_open = true;
        });
        searchCancel.addEventListener('click', function () {
            searchDiv.style.display="none";
            controlsDiv.style.display="flex";
            is_open = false;
        });
        
        /** Submit handler */
        form.onsubmit = function(){
            // Filter query
            var elem = document.querySelector("#site-search-2841699 input[name=q]"),
        sQueryFiltered = elem.value.replace(/\?/g, '');
    elem.value = sQueryFiltered;
    
            // No submit if empty input
            if( query_input.val() ){
                return true;
            } else{
                return false;
            }
        };
    })(document);
        
     /*]]>*/</script>
<script>/*<![CDATA[*/ 
        (function(){
            let currentUserType = 'anonymous';
            if (__tnt.user.loggedIn && __tnt.user.services!='0' && __tnt.user.services !== undefined)
            {
                currentUserType = 'subscriber';
            } else if (__tnt.user.loggedIn)
            {
                currentUserType = 'registered';
            }
            
            try {
            const selectedPromo = document.querySelector("#user-promo-2841705.user-promo ."+currentUserType);
            selectedPromo.classList.remove("hidden");
            } catch(err){}
       })();
            
        /*]]>*/</script>
<script>/*<![CDATA[*/ 
    const userControlPanelMain2841705=document.querySelector("#user-control-panel-2841705");
    const userControlPanelButton2841705=document.querySelector("#userControlPanel-2841705");
    const userPanelIndicator2841705=userControlPanelButton2841705.querySelector(".userPanelIndicator");
    const userControlPanel2841705=userControlPanelMain2841705.querySelector(".user-controls-menu");
    const userNameContainer2841705=userControlPanelMain2841705.querySelector(".userName");
    const debugReg2841705 = false;
    const debugSub2841705 = false;
    
    
    const editionsControlButton2841705=userControlPanelMain2841705.querySelector("#editionsControlPanel-2841705");
    const editionsPanel2841705=userControlPanelMain2841705.querySelector("#editionsPanel-2841705");
    editionsControlButton2841705.addEventListener("click", function(evt){
        const target = editionsControlButton2841705;
        const editionsPanelIndicator2841705 = editionsControlButton2841705.querySelector(".editionsIndicator");
        if(target.dataset.status=='closed')
        {
            editionsPanelIndicator2841705.classList.remove("tnt-chevron-down");
            editionsPanelIndicator2841705.classList.add("tnt-chevron-up");
            editionsPanel2841705.classList.remove("closed");
            editionsPanel2841705.classList.add("open");
            target.dataset.status="open";
        } else {
            editionsPanelIndicator2841705.classList.remove("tnt-chevron-up");
            editionsPanelIndicator2841705.classList.add("tnt-chevron-down");
            editionsPanel2841705.classList.remove("open");
            editionsPanel2841705.classList.add("closed");
            target.dataset.status="closed";
        }
    })
    
    
    document.addEventListener("DOMContentLoaded", handleUserLogin2841705('domloaded'));
    /* add an event listener for tnt-user-status */
    document.addEventListener("tnt-user-status", handleUserLogin2841705('userstatus'));
    function handleUserLogout2841705()
    {
        //window.sessionStorage.removeItem('tncms-newsletter-email','');
        window.sessionStorage.removeItem('bd-viafoura-oidc'); // clear viafoura JWT token
        document.getElementById('user-local-logout-form-2841705').submit();
        return false;
    }
    function handleUserLogin2841705(caller)
    {
        //console.log("Called from "+caller);
        // Modify dropdown menu button if user is logged in
        if (TNCMS.User.isLoggedIn() || debugReg2841705 || debugSub2841705) {
           // check to see if we've already handled this, which might be the case if this is being fired from the user subscription wall
           if(userControlPanelButton2841705.dataset.user!="loggedin")
           {
               let userFirstName = "Guest";
               
               try{
                   userFirstName = TNCMS.User.getFirstName();
               } catch(err){
                   userFirstName = TNCMS.User.getScreenName();
                   if (userFirstName.includes('jid-'))
                   {
                       //we have a janrain user screenname, do nothing
                       userFirstName = "Reader";
                   } else {
                       //we can try splitting on hyphen and taking first segment
                       let userNameParts = userFirstName.split("-");
                       if(userNameParts.length > 2)
                       {
                           userFirstName = userNameParts[0];
                       }
                   }
               }
               if(debugReg2841705 || debugSub2841705)
               {
                   userFirstName = "Debug User";
               }
               userControlPanelButton2841705.classList.remove("loggedout");
               userControlPanelButton2841705.classList.add("loggedin");
               userControlPanelButton2841705.dataset.user="loggedin";
               
               userNameContainer2841705.innerHTML = userFirstName;
               const userIcon2841705 = userControlPanelButton2841705.querySelector('.userIconSpan');
               userIcon2841705.classList.remove('icon-guest');
               userIcon2841705.classList.add('icon-signed-in');
               userControlPanelButton2841705.addEventListener('click', function(evt){
                   const target = userControlPanelButton2841705;
                   const userPanelIndicatorToggle2841705=userControlPanelButton2841705.querySelector(".userPanelIndicator");
                   if(target.dataset.status=="open")
                   {
                       target.dataset.status="closed";
                       userControlPanel2841705.classList.remove("open");
                       userControlPanel2841705.classList.add("closed");
                       userPanelIndicatorToggle2841705.classList.remove("tnt-chevron-up");
                       userPanelIndicatorToggle2841705.classList.add("tnt-chevron-down");
                   } else {
                       target.dataset.status="open";
                       userControlPanel2841705.classList.remove("closed");
                       userControlPanel2841705.classList.add("open");
                       userPanelIndicatorToggle2841705.classList.remove("tnt-chevron-down");
                       userPanelIndicatorToggle2841705.classList.add("tnt-chevron-up");
                   }
                   
               });
           }
       } else {
           userControlPanelButton2841705.addEventListener('click', function(){
                
                window.location = 'https://www.thestar.com/users/login/?referer_url=https%3A%2F%2Fwww.thestar.com%2Fsports%2Ffootball%2F';
                
           });
       }
    }
 /*]]>*/</script>
<script>/*<![CDATA[*/ 
(function(w, d) {
    let userServices = __tnt.user.services;
    let userStatus = __tnt.user.loggedIn;
    if(userServices == null){
        userServices = 0;
    }
    let allowedServicesTierString1 = "0,9927,12238,12241,12262,12727,12733,12736,12811,12814,12817,12820,12823,12826,12829,12832,12835,12838,12877,12880,12883,12886,12889,12892,12895,12898,12901,12904,12907,12910,12913,12916,12919,12922,12925,12928,12931,12934,12937,12940,12943,12946,12949,12952,12955,12958,12961,12964,12994,13036,13039,13042,13069,13429,13432,13435,13438,13441,13456,13465,13468,13471,13474,13477,13513,13666,13726,13927,13996,14203,14254,14374,14605";
    allowedServicesTier1 = allowedServicesTierString1.split(",");
    const allowedLinkTier1 = "https://www.thestar.com/tncms/auth/federated/?return=https://torontostar.pressreader.com/";
    
    
    const allowedServicesTier2 = Array();
    const allowedLinkTier2 = "https://torontostar.pressreader.com/";
    
    let newLink = "";
    /* For testing only */
    
    
    
    if (userStatus && userServices!="0")
    {
        let accessGranted = false;
        let userServicesList = userServices.split(",");
        userServicesList.forEach((uService) => {
            if(allowedServicesTier1.includes(uService))
            {
                
                accessGranted = true;
                newLink = allowedLinkTier1;
            }
            if(allowedServicesTier2.includes(uService))
            {
                
                accessGranted = true;
                newLink = allowedLinkTier2;
            }
        });
        /* only making this call if the user is at least logged in and has something other than 0 for services */
        if (accessGranted)
        {
            
            updateEditionLinks3118246(newLink);
        } else {
            /* we have someone logged in, but they don't have access, so we'll just update the link to the other one.*/
            
            
            updateEditionLinks3118246("/subscribe");
            
        }
    } else if (userStatus) {
        /* we have someone logged in, but they don't have access, so we'll just update the link to the other one.*/
        
        
        updateEditionLinks3118246("/subscribe");
        
    } else {
        
        
        updateEditionLinks3118246("https://torontostar.pressreader.com/");
        
    }
    
    
    function updateEditionLinks3118246(newLink)
    {
        
            let oSelectors = [];
            
                oSelectors.push(".tnt-section-i-class-fas-tnt-file-alt-i-today-s-paper");
            
                oSelectors.push(".epaper");
            
        
        for (let i=0;i<oSelectors.length;i++) {
            let eLinks = document.querySelectorAll(oSelectors[i]);
            Array.prototype.forEach.call(eLinks, function(el) {
                  
                el.href=newLink;
            });
        }
    }
})(window, document);
 /*]]>*/</script>
<script>/*<![CDATA[*/ 
        (function(){
            let currentUserType = 'anonymous';
            if (__tnt.user.loggedIn && __tnt.user.services!='0' && __tnt.user.services !== undefined)
            {
                currentUserType = 'subscriber';
            } else if (__tnt.user.loggedIn)
            {
                currentUserType = 'registered';
            }
            
            try {
            const selectedPromo = document.querySelector("#user-promo-2841702.user-promo ."+currentUserType);
            selectedPromo.classList.remove("hidden");
            } catch(err){}
       })();
            
        /*]]>*/</script>
<script>/*<![CDATA[*/ 
    const userControlPanelMain2841702=document.querySelector("#user-control-panel-2841702");
    const userControlPanelButton2841702=document.querySelector("#userControlPanel-2841702");
    const userPanelIndicator2841702=userControlPanelButton2841702.querySelector(".userPanelIndicator");
    const userControlPanel2841702=userControlPanelMain2841702.querySelector(".user-controls-menu");
    const userNameContainer2841702=userControlPanelMain2841702.querySelector(".userName");
    const debugReg2841702 = false;
    const debugSub2841702 = false;
    
    
    const editionsControlButton2841702=userControlPanelMain2841702.querySelector("#editionsControlPanel-2841702");
    const editionsPanel2841702=userControlPanelMain2841702.querySelector("#editionsPanel-2841702");
    editionsControlButton2841702.addEventListener("click", function(evt){
        const target = editionsControlButton2841702;
        const editionsPanelIndicator2841702 = editionsControlButton2841702.querySelector(".editionsIndicator");
        if(target.dataset.status=='closed')
        {
            editionsPanelIndicator2841702.classList.remove("tnt-chevron-down");
            editionsPanelIndicator2841702.classList.add("tnt-chevron-up");
            editionsPanel2841702.classList.remove("closed");
            editionsPanel2841702.classList.add("open");
            target.dataset.status="open";
        } else {
            editionsPanelIndicator2841702.classList.remove("tnt-chevron-up");
            editionsPanelIndicator2841702.classList.add("tnt-chevron-down");
            editionsPanel2841702.classList.remove("open");
            editionsPanel2841702.classList.add("closed");
            target.dataset.status="closed";
        }
    })
    
    
    document.addEventListener("DOMContentLoaded", handleUserLogin2841702('domloaded'));
    /* add an event listener for tnt-user-status */
    document.addEventListener("tnt-user-status", handleUserLogin2841702('userstatus'));
    function handleUserLogout2841702()
    {
        //window.sessionStorage.removeItem('tncms-newsletter-email','');
        window.sessionStorage.removeItem('bd-viafoura-oidc'); // clear viafoura JWT token
        document.getElementById('user-local-logout-form-2841702').submit();
        return false;
    }
    function handleUserLogin2841702(caller)
    {
        //console.log("Called from "+caller);
        // Modify dropdown menu button if user is logged in
        if (TNCMS.User.isLoggedIn() || debugReg2841702 || debugSub2841702) {
           // check to see if we've already handled this, which might be the case if this is being fired from the user subscription wall
           if(userControlPanelButton2841702.dataset.user!="loggedin")
           {
               let userFirstName = "Guest";
               
               try{
                   userFirstName = TNCMS.User.getFirstName();
               } catch(err){
                   userFirstName = TNCMS.User.getScreenName();
                   if (userFirstName.includes('jid-'))
                   {
                       //we have a janrain user screenname, do nothing
                       userFirstName = "Reader";
                   } else {
                       //we can try splitting on hyphen and taking first segment
                       let userNameParts = userFirstName.split("-");
                       if(userNameParts.length > 2)
                       {
                           userFirstName = userNameParts[0];
                       }
                   }
               }
               if(debugReg2841702 || debugSub2841702)
               {
                   userFirstName = "Debug User";
               }
               userControlPanelButton2841702.classList.remove("loggedout");
               userControlPanelButton2841702.classList.add("loggedin");
               userControlPanelButton2841702.dataset.user="loggedin";
               
               userNameContainer2841702.innerHTML = userFirstName;
               const userIcon2841702 = userControlPanelButton2841702.querySelector('.userIconSpan');
               userIcon2841702.classList.remove('icon-guest');
               userIcon2841702.classList.add('icon-signed-in');
               userControlPanelButton2841702.addEventListener('click', function(evt){
                   const target = userControlPanelButton2841702;
                   const userPanelIndicatorToggle2841702=userControlPanelButton2841702.querySelector(".userPanelIndicator");
                   if(target.dataset.status=="open")
                   {
                       target.dataset.status="closed";
                       userControlPanel2841702.classList.remove("open");
                       userControlPanel2841702.classList.add("closed");
                       userPanelIndicatorToggle2841702.classList.remove("tnt-chevron-up");
                       userPanelIndicatorToggle2841702.classList.add("tnt-chevron-down");
                   } else {
                       target.dataset.status="open";
                       userControlPanel2841702.classList.remove("closed");
                       userControlPanel2841702.classList.add("open");
                       userPanelIndicatorToggle2841702.classList.remove("tnt-chevron-down");
                       userPanelIndicatorToggle2841702.classList.add("tnt-chevron-up");
                   }
                   
               });
           }
       } else {
           userControlPanelButton2841702.addEventListener('click', function(){
                
                window.location = 'https://www.thestar.com/users/login/?referer_url=https%3A%2F%2Fwww.thestar.com%2Fsports%2Ffootball%2F';
                
           });
       }
    }
 /*]]>*/</script>
<script>/*<![CDATA[*/ 
                    function getAbsoluteHeight(el) {
                      var styles = window.getComputedStyle(el);
                      var margin = parseFloat(styles['marginTop']) +
                      parseFloat(styles['marginBottom']);

                      return Math.ceil(el.offsetHeight + margin);
                    }
                    var isMobile = __tnt.client.platform.android || __tnt.client.platform.iphone || __tnt.client.platform.ios;
                    
                        !function(t,i,n){var e,a,s,o,c,d={init:function(){a=i.getElementById("site-navbar-container"),isMobile?a.classList.add("affix-sticky"):(e=i.getElementById("main-body-container"),s=getAbsoluteHeight(a),o=!1,c=0,t.addEventListener("scroll",d.navPosition,!1),t.addEventListener("mousewheel",d.navPosition,!1))},navPosition:function(){o||(o=!0,setTimeout(function(){var n=a.getBoundingClientRect(),d=t.pageYOffset||i.documentElement.scrollTop,f=n.top+d;d>=f&&d>c?a.classList.contains("affix")||(c=f,a.classList.add("affix"),a.classList.remove("affix-top"),e.style.marginTop=s+"px"):a.classList.contains("affix-top")||(a.classList.remove("affix"),a.classList.add("affix-top"),e.style.marginTop="0px"),o=!1},25))}};"loading"==i.readyState?i.addEventListener("DOMContentLoaded",d.init,!1):d.init()}(window,document,__tnt);
                    document.addEventListener('DOMContentLoaded', function() {
                        var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                        
                        if (isIOS) {
                            Array.from(document.querySelectorAll('[data-toggle="offcanvas"]')).forEach(function(drawer) {
                                drawer.addEventListener("mouseover", function(e) {
                                    var drawerCls = drawer.dataset.target === 'left' ? 'active-left' : 'active-right';
                                    document.documentElement.classList.add('drawer-open', drawerCls);
                                })
                            })
                        }
                    }); /*]]>*/</script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/shared-content/art/tncms/templates/libraries/flex/components/plugins/resources/scripts/sticky-kit.cd42d35abf643b0a78798fe03bf6bc83.js"></script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/shared-content/art/tncms/templates/libraries/flex/components/template/resources/scripts/tnt.regions.b44801b45845a81b995eeaad12f4f276.js"></script>
<script>/*<![CDATA[*/ (function() {
                    window.addEventListener('load', function() {
                        __tnt.regions.stickySide.init(document.getElementById('sticky-side-primary'), document.getElementById('sticky-side-primary-spacer'), 'siderail', '.row');
                    });
                })(); /*]]>*/</script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/scripts/promo_popup.min.js?_dc=1706121063"></script>
<script>/*<![CDATA[*/ document.addEventListener("DOMContentLoaded", __tnt.deprecatedCheck, false); /*]]>*/</script>
<script>/*<![CDATA[*/ 
            jQuery(document).ready(function($){
                var iqLogin = Cookies.get('tnt-iq-login') || false;
                if (__tnt.user.loggedIn && iqLogin == false) {
                    if (__tnt.user.services) {
                        var userServices = __tnt.user.services.split(',');
                        for (i = 0; i < userServices.length; i++) { 
                            var serviceData = 'has_subservice: ' + userServices[i];
                            
                        }
                    }
                    Cookies.set('tnt-iq-login', 1);
                }
            });
         /*]]>*/</script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/scripts/save.asset.js?_dc=1706121063"></script>
<script src="https://cdn.viafoura.net/vf-v2.js"></script></body>
</html>