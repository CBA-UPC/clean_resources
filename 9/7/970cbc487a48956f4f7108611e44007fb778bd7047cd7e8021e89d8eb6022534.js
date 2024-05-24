(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["src_app_containers_UserCell_index_js-src_app_modules_createShallowEqualSelector_index_js-src_-d6ca0b"],{963892:e=>{e.exports={queryId:"jYvwa61cv3NwNP24iUru6g",operationName:"DismissRitoSuggestedAction",operationType:"mutation",metadata:{featureSwitches:[],fieldToggles:[]}}},172752:e=>{e.exports={queryId:"6hQz0x_gegAG8PxXBPhFMw",operationName:"RitoFlaggedAccountsTimeline",operationType:"query",metadata:{featureSwitches:["responsive_web_graphql_exclude_directive_enabled","verified_phone_label_enabled","creator_subscriptions_tweet_preview_api_enabled","responsive_web_graphql_timeline_navigation_enabled","responsive_web_graphql_skip_user_profile_image_extensions_enabled","c9s_tweet_anatomy_moderator_badge_enabled","tweetypie_unmention_optimization_enabled","responsive_web_edit_tweet_api_enabled","graphql_is_translatable_rweb_tweet_is_translatable_enabled","view_counts_everywhere_api_enabled","longform_notetweets_consumption_enabled","responsive_web_twitter_article_tweet_consumption_enabled","tweet_awards_web_tipping_enabled","freedom_of_speech_not_reach_fetch_enabled","standardized_nudges_misinfo","tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled","rweb_video_timestamps_enabled","longform_notetweets_rich_text_read_enabled","longform_notetweets_inline_media_enabled","responsive_web_media_download_video_enabled","responsive_web_enhance_cards_enabled"],fieldToggles:["withAuxiliaryUserLabels","withArticleRichContentState"]}}},751507:(e,t,n)=>{"use strict";n.d(t,{$6:()=>a,eY:()=>s,zt:()=>i});var o=n(202784),r=o.createContext(!1);function i(e){return o.createElement(r.Provider,e)}var a=r.Consumer;function s(){return o.useContext(r)}},990610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(807896),r=n(202784),i=n(751507);const a=function(e){return function(t){return r.createElement(i.$6,null,(function(n){return r.createElement(e,(0,o.Z)({},t,{isInSidebar:n}))}))}}},995003:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var o=n(709249),r=n(887371),i=n(545754),a=n(486906),s=n(202784),c=n(229496),l=n(645184),u=n.n(l),d=n(604358),p=n(967844),m=n(775905),f=n(263853),v=n(923335),h=n(392160),_=n(43510),b=n(157659),g=function(e,t){return!(!t.allowPromptForPush||!_.selectShouldPromptBrowserPush(e))};const w=(0,h.Z)().propsFromState((function(){return{shouldPromptPush:g}})).propsFromActions((function(){return{createLocalApiErrorHandler:(0,v.createLocalApiErrorHandlerWithContextFactory)("DEVICE_FOLLOW_BUTTON_CONTAINER"),updateDeviceFollowing:b.ZP.updateDeviceFollowing}})).withAnalytics({element:"mobile_notifications"});var y=u().bdba3e1a,k=u().c4da7d28,C=u().j87c21f4,U=u().iebc30ca,Z=u().dc740eb2;const E=w(function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e))._renderButton=function(){var e=r.props,t=e.isFollowing,n=e.style;return t?s.createElement(c.ZP,{accessibilityLabel:k,hoverLabel:{label:U},icon:s.createElement(d.default,null),onPress:r._handleUnfollow,style:n,type:"primaryOutlined"}):s.createElement(c.ZP,{accessibilityLabel:y,hoverLabel:{label:C},icon:s.createElement(p.default,null),onPress:r._handleFollow,style:n,type:"primaryOutlined"})},r._handleFollow=function(){var e=r.props,t=e.isDeviceFollowWithoutUserFollow;e.shouldPromptPush&&r.setState({showingPushPrompt:!0}),r._updateDeviceFollowing(!0).then((function(e){t&&r._scribeAction("device_follow_without_follow"),r._scribeAction("on")}))},r._handleUnfollow=function(){var e=r.props.isDeviceFollowWithoutUserFollow;r._updateDeviceFollowing(!1).then((function(t){e&&r._scribeAction("device_unfollow_without_follow"),r._scribeAction("off")}))},r.state={showingPushPrompt:!1},r}return(0,r.Z)(n,[{key:"render",value:function(){return s.createElement("div",null,this.state.showingPushPrompt?s.createElement(m.Z,{fullScreen:!0,message:Z}):null,this._renderButton())}},{key:"_updateDeviceFollowing",value:function(e){var t=this.props,n=t.createLocalApiErrorHandler;return(0,t.updateDeviceFollowing)(t.userId,{device:e}).catch(n(f.Z))}},{key:"_scribeAction",value:function(e){this.props.analytics.scribeAction(e)}}]),n}(s.PureComponent))},814429:(e,t,n)=>{"use strict";n.d(t,{KV:()=>Le,ZP:()=>ze,F0:()=>De});var o=n(709249),r=n(887371),i=n(545754),a=n(486906),s=(n(136728),n(606710),n(200634),n(202784)),c=n(576648),l=n(645184),u=n.n(l),d=n(133028),p=n(459740),m=(n(73439),n(821515),n(919179)),f=n(444487),v=n(983882),h=n(801206),_=n(213045),b=n(850813),g=n(646072),w=u().b3036480,y=u().b3036480,k=u().e68b09b4,C=u().h27b7407,U=function(e){var t=e.removeFollowerAction,n=e.user,o=Z(n);return{Icon:g.default,text:w,onClick:function(){return t(o)}}},Z=function(e){return{confirmButtonType:"destructiveFilled",headline:y,label:k,text:C({screenName:e.screen_name})}},E=n(807896),I=n(196234),S=n(484292),A=function(e){return function(t){var n=s.useState(null),o=(0,I.Z)(n,2),r=o[0],i=o[1];if(r){var a=r.confirmationSheetProps,c=r.reject,l=r.resolve;return s.createElement(S.Z,(0,E.Z)({},a,{onCancel:function(){c(),i(null)},onConfirm:function(){l(),i(null)}}))}return s.createElement(e,(0,E.Z)({},t,{confirm:function(e){return new Promise((function(t,n){i({resolve:t,reject:n,confirmationSheetProps:e})}))}}))}};const R="block",T="mute",L="removeFollower",D="report",P="share";var x=["label"],F=u().j7bb1a43,N=u().hef5960c;const M=A((function(e){var t=e.onBlock,n=e.onClose,o=e.onMute,r=e.onRemoveFollower,i=e.onReportUser,a=e.onShare,c=e.onUnblock,l=e.onUnmute,u=e.user,g=[],w=function(t,n){var o=e.confirm,r=e.onClose;if(t){var i=t.label,a=(0,p.Z)(t,x);o((0,d.Z)({confirmButtonLabel:i},a)).then(n,h.Z).finally(r)}else n()};!!window.navigator.share&&!u.protected&&!u.blocking&&!u.blocked_by&&g.push({Icon:m.Z,onClick:function(){n(),a()},testID:P,text:N}),!u.blocking&&g.push((0,d.Z)((0,d.Z)({},(0,b.N1)(u,(function(){n(),o()}),(function(){n(),l()}))),{},{testID:T})),u.followed_by&&g.push((0,d.Z)((0,d.Z)({},U({removeFollowerAction:function(e){w(e,r)},user:u})),{},{testID:L})),g.push((0,_.op)({blockAction:function(e){return w(e,t)},source:_.SC.FOLLOWERS_LIST,testID:R,unblockAction:function(e){return w(e,c)},user:u})),g.push({Icon:v.default,onClick:function(){n(),i()},testID:D,text:F({screenName:u.screen_name})});var y=g.map((function(e){var t=e.Icon,n=e.onClick,o=e.testID;return{text:e.text,onClick:n,Icon:t,testID:o}}));return s.createElement(f.Z,{items:y,onCloseRequested:n})}));var B=n(275733),O=["label"],H=u().j7bb1a43,z=u().f2f4d0e8,q=u().e1f2f8bd,V=u().e68b09b4;const j=A((function(e){var t=e.onBlock,n=e.onClose,o=e.onRemoveFlaggedAccount,r=e.onReportUser,i=e.onUnblock,a=e.user,c=[],l=function(t,n){var o=e.confirm,r=e.onClose;if(t){var i=t.label,a=(0,p.Z)(t,O);o((0,d.Z)({confirmButtonLabel:i},a)).then(n,h.Z).finally(r)}else n()};c.push((0,_.op)({blockAction:function(e){return l(e,t)},source:_.SC.FOLLOWERS_LIST,testID:R,unblockAction:function(e){return l(e,i)},user:a}));var u={confirmButtonType:"primary",headline:q({screenName:a.screen_name}),label:V,text:(0,_.fX)({screenName:a.screen_name})};c.push({Icon:B.default,onClick:function(){l(u,o)},testID:"removeFlaggedAccount",text:z}),c.push({Icon:v.default,onClick:function(){n(),r()},testID:D,text:H({screenName:a.screen_name})});var m=c.map((function(e){var t=e.Icon,n=e.onClick,o=e.testID;return{text:e.text,onClick:n,Icon:t,testID:o}}));return s.createElement(f.Z,{items:m,onCloseRequested:n})}));n(901951);var W=n(256510),G=n(446493),K=n(216866),Q=n(299666),$=n(261837),X=n(850941),Y=n(713418),J=n(852413);const ee="autoblock",te="block",ne="mute",oe="reportIllegalContentProfile";var re=["label"],ie=u().hef5960c,ae=u().ibd0b842,se=u().b9c26480,ce=u().e922ce0c,le=u().ge54bb8c,ue=u().h5ef9bc8,de=u().j7bb1a43,pe=u().jcba15d2;const me=A((function(e){var t,n,o,r=void 0!==window.navigator.share,i=e.isFixed,a=e.onClose,l=e.user,u=function(){var e=U({user:l,removeFollowerAction:F}),t=e.Icon,n=e.onClick,o=e.testID;return{Icon:t,text:e.text,onClick:n,testID:o}},g=function(){var e={user:l,source:_.SC.PROFILE,testID:te,blockAction:P,unblockAction:x},t=(0,_.op)(e),n=t.Icon,o=t.onClick,r=t.testID;return{Icon:n,text:t.text,onClick:o,testID:r}},w=function(){return{Icon:B.default,text:pe,testID:ee,onClick:function(){return x((0,W.c4)(l.screen_name))}}},y=function(){return{Icon:G.default,text:ue,onClick:R,link:"/".concat(l.screen_name,"/lists")}},k=function(){return{Icon:K.default,text:se,link:"/".concat(l.screen_name,"/topics")}},C=function(){var e=(0,b.N1)(l,L,D),t=e.Icon,n=e.onClick;return{Icon:t,text:e.text,onClick:n,testID:ne}},Z=function(t){var n=(0,Y.AL)({testID:oe,screenName:l.screen_name,reportUrl:t}),o=n.Icon,r=n.link,i=n.testID;return{Icon:o,text:n.text,link:r,testID:i,onClick:function(){e.onClose(),e.onReportUserIllegalContent()}}},E=function(){return{Icon:v.default,text:de({screenName:l.screen_name}),onClick:function(){e.onClose(),e.onReportUser()}}},I=function(){return{Icon:l.want_retweets?Q.default:$.default,text:l.want_retweets?le:ce,onClick:function(){l.want_retweets?M():N()}}},S=function(){return{Icon:m.Z,text:ie,onClick:function(){e.onClose(),e.onShare()}}},A=function(){return{Icon:X.default,text:ae,onClick:function(){e.onClose(),e.onCopyLink()}}},R=function(){e.onClose(),e.onViewLists()},T=function(){e.onClose(),e.onAddToRemoveFromList()},L=function(){e.onMuteUser(),e.onClose()},D=function(){e.onUnmuteUser(),e.onClose()},P=function(t){O(t,e.onBlockUser)},x=function(t){O(t,e.onUnblockUser)},F=function(t){O(t,e.onRemoveFollower)},N=function(){e.onEnableRetweets(),e.onClose()},M=function(){e.onDisableRetweets(),e.onClose()},O=function(t,n){var o=e.confirm,r=e.onClose;if(t){var i=t.label,a=(0,p.Z)(t,re);o((0,d.Z)({confirmButtonLabel:i},a)).then(n,h.Z).finally(r)}else n()};return s.createElement(f.Z,{isFixed:i,items:(t=e.dsaIllegalContentreportUrl,n=e.perspective,o=[],l.blocked_by||(!l.following&&l.id_str!==n&&l.protected||(!l.blocking&&o.unshift((0,J.k)(l,T)),o.push(y()),o.unshift(k())),l.protected||l.blocking||(r&&o.push(S()),c.Z.isAvailable()&&o.push(A()))),l.id_str!==n&&(l.following&&o.unshift(I()),!l.blocking&&o.push(C()),l.followed_by&&o.push(u()),o.push(g()),l.smart_blocking&&o.push(w()),o.push(E()),t&&o.push(Z(t))),o),onCloseRequested:a})}));var fe=n(695024),ve=n(819565),he={defaultToast:{text:u().a30b63da},showToast:!0},_e=n(517772),be=n(263853),ge=n(36840),we=n(676275),ye=n(926278),ke=n(76687),Ce=n(348501),Ue=n(923335),Ze=n(392160),Ee=n(670083),Ie=n(467935),Se=n(799629),Ae=n(446756),Re=n(157659);const Te=(0,Ze.Z)().propsFromState((function(){return{perspective:Ie.o1,sessionToken:Ie.Jv}})).propsFromActions((function(){return{addToast:Se.fz,block:Re.ZP.block,createLocalApiErrorHandler:(0,Ue.createLocalApiErrorHandlerWithContextFactory)("USER_ACTION_SHEET_CONTAINER"),disableRetweets:Re.ZP.disableRetweets,dismissRitoSuggestedAction:Ae.ru,enableRetweets:Re.ZP.enableRetweets,mute:Ee.r,removeFollower:Re.ZP.removeFollower,unblock:Re.ZP.unblock,unmute:Re.ZP.unmute}})).withAnalytics();var Le=u().a9fd20be,De=u().e133be4e,Pe=u().dca669ad,xe=u().f88553c8,Fe=u().ce6da5d7,Ne=u().c6ea308b,Me=u().a1fef729,Be=u().c32a3d03,Oe=u().badf3f35,He=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,o.Z)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i)))._renderFollowerActionMenu=function(){var t=e.props,n=t.onClose,o=t.user;return s.createElement(M,{onBlock:e._handleBlockUser,onClose:n,onMute:e._handleMuteUser,onRemoveFollower:e._handleRemoveFollower,onReportUser:e._handleReportUser,onShare:e._handleShare,onUnblock:e._handleUnblockUser,onUnmute:e._handleUnmuteUser,user:o})},e._renderRitoFlaggedAccountsActionMenu=function(){var t=e.props,n=t.onClose,o=t.user;return s.createElement(j,{onBlock:e._handleBlockUser,onClose:n,onRemoveFlaggedAccount:e._handleRemoveFlaggedAccount,onReportUser:e._handleReportUser,onUnblock:e._handleUnblockUser,user:o})},e._handleAddToRemoveFromList=function(){e._scribeAction("add_to_list")},e._handleReportUserIllegalContent=function(){e._scribeAction("report","eu_illegal_content_profile")},e._handleReportUser=function(){var t=e.props,n=t.analytics,o=t.history,r=t.promotedContent,i=t.user,a=ge.C2.User,s=e.context.featureSwitches;if(e._scribeAction("report"),(0,ge.Yw)(s,a)){var c=(0,ge.j_)({clientReferer:window.location.pathname,isMedia:!1,isPromoted:void 0!==r,reportType:a,reportedUser:i.id_str,scribeNamespace:n.contextualScribeNamespace});o.push({pathname:"/i/safety/report_story_start",state:{input:{requested_variant:JSON.stringify(c)}}})}else o.push({pathname:"/i/report/user/".concat(i.id_str),state:{clientReferer:window.location.pathname,promotedContent:r,scribeNamespace:n.contextualScribeNamespace}})},e._handleBlockUser=function(){var t=e.props,n=t.addToast,o=t.block,r=t.createLocalApiErrorHandler,i=t.promotedContent;o(t.user.id_str,{promotedContent:i}).then((function(){n({action:{label:De,onAction:e._handleUnblockUser},text:Le})}),r(ve.d)),e._scribeAction("block")},e._handleUnblockUser=function(){var t=e.props,n=t.createLocalApiErrorHandler,o=t.promotedContent;(0,t.unblock)(t.user.id_str,{promotedContent:o}).catch(n(_e.D)),e._scribeAction("unblock")},e._handleMuteUser=function(){var t=e.props,n=t.addToast,o=t.createLocalApiErrorHandler,r=t.mute,i=t.promotedContent,a=t.user;r(a.id_str,{promotedContent:i}).then((function(){n({action:{label:fe.d,onAction:e._handleUnmuteUser},text:(0,b.FK)(a.screen_name)})}),o({showToast:!0})),e._scribeAction("mute_user")},e._handleUnmuteUser=function(){var t=e.props,n=t.addToast,o=t.createLocalApiErrorHandler,r=t.promotedContent,i=t.unmute,a=t.user;i(a.id_str,{promotedContent:r}).then((function(){n({text:(0,b.X6)(a.screen_name)})}),o({showToast:!0})),e._scribeAction("unmute_user")},e._handleViewLists=function(){e._scribeAction("view_lists")},e._handleDisableRetweets=function(){var t=e.props,n=t.addToast,o=t.createLocalApiErrorHandler,r=t.disableRetweets,i=t.user,a=i.name;r(i.id_str).then((function(){n({text:Pe({name:a})})}),o(be.Z)),e._scribeAction("disable_retweets")},e._handleEnableRetweets=function(){var t=e.props,n=t.addToast,o=t.createLocalApiErrorHandler,r=t.enableRetweets,i=t.user,a=i.name;r(i.id_str).then((function(){n({text:Fe({name:a})})}),o(be.Z)),e._scribeAction("enable_retweets")},e._handleShare=function(){var t=e.props,n=t.sessionToken,o=t.user,r=(0,ye.w)("https://x.com/".concat(o.screen_name),n),i={title:Ne({fullName:o.name,screenName:o.screen_name}),text:Me({fullName:o.name,bio:o.description}),url:r};window.navigator.share&&window.navigator.share(i).then((function(){e._scribeAction("share")})).catch((function(){e._scribeAction("share_error")}))},e._handleCopyLink=function(){var t=e.props,n=t.sessionToken,o=t.user;c.Z.setString((0,ye.w)("https://x.com/".concat(o.screen_name),n)),e.props.addToast({text:xe}),e._scribeAction("copy_link")},e._handleRemoveFollower=function(){var t=e.props,n=t.addToast,o=t.createLocalApiErrorHandler,r=t.removeFollower,i=t.user;r(i.id_str).then((function(){n({text:Be({screenName:i.screen_name})})}),o(he)),e._scribeAction("remove_follower")},e._handleRemoveFlaggedAccount=function(){var t=e.props,n=t.addToast,o=t.createLocalApiErrorHandler,r=t.dismissRitoSuggestedAction,i=t.user;r(i.id_str).then((function(){n({text:Oe({screenName:i.screen_name})})})).catch(o(_e.D)),e._scribeAction("unblock")},e}return(0,r.Z)(n,[{key:"_renderUserActionMenu",value:function(){var e=this.props,t=e.isFixed,n=e.onClose,o=e.perspective,r=e.user,i=this.context.featureSwitches,a=i.isTrue("dsa_profile_report_flow_enabled")?i.getStringValue("dsa_report_illegal_content_url"):void 0;return s.createElement(me,{dsaIllegalContentreportUrl:a,isFixed:t,onAddToRemoveFromList:this._handleAddToRemoveFromList,onBlockUser:this._handleBlockUser,onClose:n,onCopyLink:this._handleCopyLink,onDisableRetweets:this._handleDisableRetweets,onEnableRetweets:this._handleEnableRetweets,onMuteUser:this._handleMuteUser,onRemoveFollower:this._handleRemoveFollower,onReportUser:this._handleReportUser,onReportUserIllegalContent:this._handleReportUserIllegalContent,onShare:this._handleShare,onUnblockUser:this._handleUnblockUser,onUnmuteUser:this._handleUnmuteUser,onViewLists:this._handleViewLists,perspective:o,user:r})}},{key:"render",value:function(){switch(this.props.view){case"rito_flagged_accounts":return this._renderRitoFlaggedAccountsActionMenu();case"profile":return this._renderUserActionMenu();default:return this._renderFollowerActionMenu()}}},{key:"_scribeAction",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user_action",n=this.props,o=n.analytics,r=n.user,i={items:[we.Z.getUserItem(r)]};return o.scribe({component:t,action:e,data:i})}}]),n}(s.Component);He.contextType=Ce.rC;const ze=(0,ke.ZP)(Te(He))},142569:(e,t,n)=>{"use strict";n.d(t,{Z9:()=>G,ZP:()=>K,TJ:()=>O,Gr:()=>V,ET:()=>H,C_:()=>q,dk:()=>z});var o=n(459740),r=n(133028),i=n(709249),a=n(887371),s=n(545754),c=n(486906),l=n(807896),u=(n(200634),n(136728),n(202784)),d=n(244173),p=n(377089),m=n(819153),f=n(973186),v=n(32307),h=n(990610),_=n(991584),b=n(123301),g=n(845855),w=n(615579),y=n(676275),k=n(760397),C=n(234590),U=n(348501),Z=n(995003),E=n(702847),I=n(814429),S=n(325686),A=function(e){var t=e.children,n=e.promotedContent,o=e.user;return u.createElement(S.Z,{style:R.decorationWrapper},t,u.createElement(d.Z,{renderActionMenu:function(e){return u.createElement(I.ZP,{onClose:e,promotedContent:n,user:o,view:"follower"})},style:R.actionMenu}))},R=f.Z.create((function(e){return{decorationWrapper:{flexDirection:"row"},actionMenu:{marginStart:e.spaces.space12}}})),T=n(923335),L=n(392160),D=n(215934),P=n(157659),x=function(e,t){return P.ZP.select(e,t.userId)},F=function(e,t){return t.promotedContent};const N=(0,L.Z)().propsFromState((function(){return{promotedContent:F,user:x}})).adjustStateProps((function(e){var t=e.promotedContent,n=e.user;return{promotedContent:t||(n?n.promoted_content:void 0),user:n}})).propsFromActions((function(){return{createLocalApiErrorHandler:(0,T.createLocalApiErrorHandlerWithContextFactory)("USER_CELL_CONTAINER"),log:D.cM}})).withAnalytics();var M=["analytics","avatarDecoration","bottomControl","cellClickable","createLocalApiErrorHandler","decoration","followRequestReceived","hideBlocked","highlightedLabel","isAutoblocking","isBlockedBy","isBlocking","isDeviceFollowing","isFollowing","isInSidebar","log","onClick","onFollowClick","promotedItemId","referringPage","saveAsRecentSearch","shouldScribeImpression","shouldScribeProfileClick","shouldStoreTypeaheadItem","socialContext","user"],B=function(e){var t=e.user;return t&&t.profile_image_url_https?u.createElement(j,(0,l.Z)({},e,{avatarUri:t.profile_image_url_https,description:t.description,entities:t.entities,followRequestReceived:t.follow_request_received,highlightedLabel:t.highlightedLabel,isAutoblocking:t.smart_blocking,isBlockedBy:t.blocked_by,isBlocking:t.blocking,isBlueVerified:t.is_blue_verified,isDeviceFollowing:t.notifications,isFollowedBy:t.followed_by,isFollowing:t.following,isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,translatorType:t.translator_type,user:t,verifiedType:t.verified_type,withheldDescription:t.withheld_description,withheldEntities:t.withheld_entities})):null};B.defaultProps={cellClickable:!0,decoration:null,displayMode:C.Z.UserCompact,followRequestReceived:!1,hideBlocked:!1,promotedItemType:b.bj.USER,shouldScribeProfileClick:!0,shouldScribeImpression:!1,withFollowsYou:!1};var O=function(e){var t=e.isDeviceFollowing,n=e.userId;return u.createElement(Z.Z,{isFollowing:t,style:W.followButton,userId:n})},H=function(e){var t=e.onFollowClick,n=e.promotedContent,o=e.userId;return e.viewerUserId!==o?u.createElement(E.C,{onFollowClick:t,promotedContent:n,size:"small",style:W.followButton,userId:o}):null},z=function(e){var t=e.referringPage,n=e.userId;return e.viewerUserId!==n?u.createElement(E.C,{buttonType:"primaryFilled",isSuperFollowSubscriptionEnabled:!0,referringPage:t,relationshipMode:"subscribe",size:"small",style:W.followButton,userId:n}):null},q=function(e){return u.createElement(A,{promotedContent:e.promotedContent,user:e.user},H(e))},V=function(e){return u.createElement(d.Z,{renderActionMenu:function(t){return u.createElement(I.ZP,{onClose:t,promotedContent:e.promotedContent,user:e.user,view:"rito_flagged_accounts"})}})},j=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a)))._handleAvatarClick=function(){var t=e.props.shouldScribeProfileClick;e._handleSaveAsRecentSearch(),t&&e._scribeAction({element:"avatar",action:"profile_click"}),e._handleAsyncPromotedEvent(b.dx.PROFILE_IMAGE_CLICK)},e._handleCellClick=function(){var t=e.props,n=t.onClick,o=t.screenName,i=t.user,a=t.userId,s=e.context.history,c=e._getPromotedTweetState();e._handleSaveAsRecentSearch(),e._handleScreenNameClick(),n?n({user:i,state:c}):s.push({pathname:"/".concat(o),state:(0,r.Z)({userId:a},c||{})})},e._handleScreenNameClick=function(){var t=e.props.shouldScribeProfileClick;e._handleSaveAsRecentSearch(),t&&e._scribeAction({action:"profile_click"}),e._handleAsyncPromotedEvent(b.dx.SCREEN_NAME_CLICK)},e._handleSaveAsRecentSearch=function(){var t=e.props,n=t.saveAsRecentSearch,o=t.shouldStoreTypeaheadItem,r=t.userId;n&&o&&o(w.Z.ItemType.USER)&&n({user:{id:r,type:k.g2.User}})},e._scribeAction=function(t){var n,o,i=e.props,a=i.analytics,s=i.promotedContent,c=i.user,l=i.userId,u=null===(n=a.contextualScribeData)||void 0===n||null===(n=n.items)||void 0===n?void 0:n.find((function(e){return e.item_type===w.Z.ItemType.USER&&e.id===l})),d=null===(o=a.contextualScribeData)||void 0===o?void 0:o.search_details,p={items:[(0,r.Z)((0,r.Z)({},u),y.Z.getUserItem(c,s))],profile_id:l,search_details:d};a.scribe((0,r.Z)((0,r.Z)({},t),{},{data:p}))},e}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this._shouldRender()&&this._handleImpression()}},{key:"shouldComponentUpdate",value:function(e){return!(0,v.Z)(this.props,e)}},{key:"render",value:function(){var e=this,t=this.props,n=(t.analytics,t.avatarDecoration),r=(t.bottomControl,t.cellClickable),i=(t.createLocalApiErrorHandler,t.decoration,t.followRequestReceived,t.hideBlocked,t.highlightedLabel,t.isAutoblocking,t.isBlockedBy,t.isBlocking,t.isDeviceFollowing,t.isFollowing,t.isInSidebar),a=(t.log,t.onClick,t.onFollowClick,t.promotedItemId,t.referringPage,t.saveAsRecentSearch,t.shouldScribeImpression,t.shouldScribeProfileClick,t.shouldStoreTypeaheadItem,t.socialContext),s=t.user,c=(0,o.Z)(t,M);return this._shouldRender()?u.createElement(p.ZP.Provider,{value:{socialContextRefreshEnabled:function(){return e.context.featureSwitches.isTrue("social_context_and_topic_context_refresh_alignment_enabled")}}},u.createElement(m.ZP,(0,l.Z)({},c,{affiliateBadgeInfo:s.highlightedLabel,avatarDecoration:n,bottomControl:this._renderBottomControl(),decoration:this._renderDecoration(),highlightedLabel:s.highlightedLabel,isBlocking:s.blocking,onAvatarClick:this._handleAvatarClick,onCellClick:r?this._handleCellClick:void 0,onScreenNameClick:this._handleScreenNameClick,socialContext:a?{contextType:a.contextType,text:a.text,link:a.landingUrl?(0,_.s9)(a.landingUrl):void 0}:void 0,withDarkerInteractiveBackground:i}))):null}},{key:"_renderBottomControl",value:function(){return this._renderControl(this.props.bottomControl||null)}},{key:"_renderDecoration",value:function(){var e=this.props,t=e.decoration,n=e.onFollowClick;return this._renderControl(t,n)}},{key:"_renderControl",value:function(e,t){var n=this.context.viewerUserId,o=this.props,r=o.displayMode,i=o.followRequestReceived,a=o.isAutoblocking,s=o.isBlocking,c=o.isDeviceFollowing,l=o.isFollowing,u=o.promotedContent,d=o.referringPage,p=o.screenName,m=o.user,f=o.userId;return"function"==typeof e?e({displayMode:r,followRequestReceived:i,isAutoblocking:a,isBlocking:s,isDeviceFollowing:!!c,isFollowing:!!l,viewerUserId:n,promotedContent:u,screenName:p,user:m,userId:f,onFollowClick:t,referringPage:d}):e}},{key:"_shouldRender",value:function(){var e=this.props,t=e.hideBlocked,n=e.isBlockedBy,o=e.isBlocking,r=e.screenName;return e.userId&&r&&!(t&&(n||o))}},{key:"_getHighlightedLabel",value:function(){return this.props.user.highlightedLabel}},{key:"_getPromotedTweetState",value:function(){var e=this.props,t=e.promotedContent,n=e.promotedItemType;return t&&n===b.bj.TWEET?{promotedTweetState:t}:null}},{key:"_handleAsyncPromotedEvent",value:function(e){var t=this.props,n=t.createLocalApiErrorHandler,o=t.log,r=t.promotedContent,i=t.promotedItemId,a=t.promotedItemType,s=t.userId;r&&o({disclosureType:r.disclosure_type,itemId:i||s,itemType:a,params:{event:e,impression_id:r.impression_id}}).catch(n())}},{key:"_handleImpression",value:function(){var e=this.props,t=e.createLocalApiErrorHandler,n=e.log,o=e.promotedContent,r=e.promotedItemType,i=e.shouldScribeImpression,a=e.userId;if(o&&r===b.bj.USER){var s=o.disclosure_type,c=o.impression_id;n({disclosureType:s,itemId:a,itemType:b.bj.USER,params:{event:b.dx.IMPRESSION,impression_id:c}}).catch(t())}else i&&this._scribeAction({action:"impression"})}}]),n}(u.Component);j.contextType=U.rC,j.defaultProps=B.defaultProps;var W=f.Z.create((function(e){return{followButton:{marginStart:e.spaces.space12}}})),G=(0,h.Z)(N(B));const K=function(e){return u.createElement(g.nO,{namespace:{element:"user"}},u.createElement(G,e))}},775905:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});n(315735),n(73439),n(906886),n(202784);const o=(0,n(656499).Z)({loader:function(){return Promise.all([n.e("shared~loader.AudioDock~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.AudioSpaceStart~bundle.AudioSpaceAnaly"),n.e("shared~loader.AudioDock~loader.DashMenu~loader.SideNav~loader.Typeahead~loader.AppModules~loader.DMDrawer~bun"),n.e("shared~loader.AudioDock~loader.DashMenu~loader.SideNav~loader.Typeahead~loader.DMDrawer~bundle.Account~bundle"),n.e("shared~loader.AudioDock~loader.Typeahead~loader.AppModules~loader.DMDrawer~bundle.ReaderMode~bundle.AudioSpac"),n.e("shared~bundle.DirectMessages~loader.PushNotificationsPrompt~loader.MessageHandler~loader.promptHandler~bundle"),n.e("shared~loader.PushNotificationsPrompt~loader.MessageHandler"),n.e("loader.PushNotificationsPrompt")]).then(n.bind(n,162607))}})},213045:(e,t,n)=>{"use strict";n.d(t,{$f:()=>Z,KV:()=>h,LI:()=>R,Nn:()=>m,SC:()=>U,Vt:()=>g,X_:()=>y,Xs:()=>f,c4:()=>L,ed:()=>T,fX:()=>v,op:()=>E});var o=n(202784),r=n(484292),i=n(645184),a=n.n(i),s=n(973952),c=n(97463),l=n(801206),u=n(766961),d=a().cfd2f35e,p=a().f9e45cfb,m=a().fcd4d489,f=a().a6450e84,v=a().g353ad73,h=a().a9fd20be,_=a().j546fb79,b=a().c9623eeb,g=a().e133be4e,w=a().he43bca4,y=a().ae3e9c81,k=a().e68b09b4,C=a().dacb5cc6,U=Object.freeze({TWEET_CARET:"tweet_caret",PROFILE:"user_profile",LIST_DETAIL:"list_detail",RICH_FEEDBACK:"rich_feedback",TWEET:"tweet",FOLLOWERS_LIST:"followers_list"}),Z=function(e){return{confirmButtonType:"destructiveFilled",headline:p({screenName:e}),label:f,text:v({screenName:e})}},E=function(e){var t,n=e.blockAction,o=e.blockSubtext,r=e.source,i=e.testID,a=e.unblockAction,s=e.unblockSubtext,c=e.user,d=l.Z,p=R(c);switch(r){case U.PROFILE:case U.LIST_DETAIL:case U.FOLLOWERS_LIST:d=function(){c.smart_blocking||!c.blocking?n(p):a(p)};break;case U.TWEET:case U.TWEET_CARET:case U.RICH_FEEDBACK:t=u.uq.block,d=function(){c.smart_blocking||!c.blocking?n(p):a(p)}}return{confirmation:p,onClick:d,testID:i,shortcutKey:t,Icon:I(c.blocking,c.smart_blocking),text:A(c),subText:S({user:c,blockSubtext:o,unblockSubtext:s})}},I=function(e,t){return t||!e?s.default:c.default},S=function(e){var t=e.blockSubtext,n=e.unblockSubtext,o=e.user;return!o.smart_blocking&&o.blocking||!t?o.blocking?n:void 0:t(o.screen_name)},A=function(e){return e.smart_blocking||!e.blocking?m({screenName:e.screen_name}):b({screenName:e.screen_name})},R=function(e){return e.smart_blocking||!e.blocking?Z(e.screen_name):(t=e.screen_name,{confirmButtonType:"primary",headline:_({screenName:t}),label:g,text:w});var t},T=function(e){var t=e.confirmation,n=e.handleConfirm,i=e.onClose,a=t.confirmButtonType,s=t.headline,c=t.label,l=t.text;return o.createElement(r.Z,{cancelButtonLabel:d,confirmButtonLabel:c,confirmButtonType:a,headline:s,onCancel:i,onConfirm:n,text:l})},L=function(e){return{confirmButtonType:"primary",headline:y({screenName:e}),label:k,text:C}}},695024:(e,t,n)=>{"use strict";n.d(t,{d:()=>r});var o=n(645184),r=n.n(o)().gf5e9ea6},713418:(e,t,n)=>{"use strict";n.d(t,{AL:()=>d,MS:()=>u,yh:()=>c});n(315735),n(906886),n(214121),n(460523),n(543673),n(240753),n(128399);var o=n(645184),r=n.n(o),i=n(983882),a=n(128224),s=n(134615),c=r().e9eef4c6,l=r().e28ba0bb,u=function(e){return new URL((0,a.Z)(e)?e:"https://help.twitter.com/forms/dsa/report")};function d(e){var t=e.reportUrl,n=e.screenName,o=e.testID,r=u(t),a=s.ZP.get().origin;return r.searchParams.set("content_id","".concat(a,"/").concat(n)),r.searchParams.set("content_type","profile"),r.searchParams.set("content_author","@".concat(n)),{Icon:i.default,link:r.href,text:l({screenName:n}),testID:o}}},852413:(e,t,n)=>{"use strict";n.d(t,{k:()=>a});var o=n(645184),r=n.n(o),i=n(826378),a=function(e,t){var n=e.id_str,o=e.screen_name,a=(0,r().d78131b9)({screenName:o});return{Icon:i.default,text:a,link:{pathname:"/i/lists/add_member",state:{userId:n}},onClick:t}}},850813:(e,t,n)=>{"use strict";n.d(t,{Aq:()=>d,FK:()=>b,GS:()=>s,N1:()=>m,PY:()=>p,X6:()=>g,cm:()=>c});n(202784);var o=n(645184),r=n.n(o),i=n(642203),a=n(449511),s=r().hb568af4,c=r().bb1cbeb6,l=(r().h2f62206,r().e67b2d65),u=r().f05597b3,d=function(e){return l({screenName:e})},p=function(e){return u({screenName:e})},m=function(e,t,n){var o=e.muting,r=e.screen_name;return{text:o?p(r):d(r),onClick:o?n:t,Icon:o?i.default:a.default}},f=r().h59f52ee,v=r().eea0cbee,h=r().i29533b3,_=r().h129c3c3,b=function(e){return e?function(e){return h({screenName:e})}(e):f},g=function(e){return e?function(e){return _({screenName:e})}(e):v}},819565:(e,t,n)=>{"use strict";n.d(t,{d:()=>r});var o=n(645184),r={defaultToast:{text:n.n(o)().b6878b0a},showToast:!0}},517772:(e,t,n)=>{"use strict";n.d(t,{D:()=>r});var o=n(645184),r={defaultToast:{text:n.n(o)().ca96fe6e},showToast:!0}},263853:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(256666),r=n(663140),i=n(90437);const a=(0,o.Z)({},r.ZP.FollowError,{customAction:i.w1})},58343:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(476984),r=n.n(o),i=n(24949);const a=(0,i.wN)(i.PW,r())},766961:(e,t,n)=>{"use strict";n.d(t,{OX:()=>p,Od:()=>u,PN:()=>m,uq:()=>l,wR:()=>v});var o=n(968079),r=(n(477950),n(94908),n(200634),n(315735),n(906886),n(606710),n(909933)),i=n(645184),a=n.n(i),s=n(16587),c=n(206149),l=Object.freeze({openKeyboardShortcuts:"?",swipeLeft:"left",swipeRight:"right",nextItem:"j",previousItem:"k",refresh:".",nightMode:"z",bookmark:"b",block:"x",mute:"u",newTweet:"n",newMessage:"m",toggleDMDrawer:"i",goHome:"g h",goExplore:"g e",goNotifications:"g n",goMentions:"g r",goProfile:"g p",goLikes:"g l",goLists:"g i",goMessages:"g m",goToDrafts:"g f",goToScheduled:"g t",goSettings:"g s",goToUser:"g u",goBookmarks:"g b",goTopArticles:"g a",goDisplay:"g d",search:"/",audio:{dock:"a d",play:"a space",mute:"a m"},video:{play1:"k",play2:"space",mute:"m"},columns:{createNewColumn:"c n",duplicateColumn:"c d",focusOnReorderButton:"c r",lastColumn:"c 0",nextColumn:"]",nthColumn:"c 1..9",prevColumn:"[",removeColumn:"c backspace",toggleColumnOptions:"c o",undoRemoveColumn:"c u"},decks:{createNewDeck:"d n",editActiveDeck:"d e",lastPinnedDeck:"d 0",manageAllDecks:"d m",nthPinnedDeck:"d 1..9"},labs:{openCommandCenter:">"}}),u=(0,s.Z)((function(e){var t=e?[{description:a().b7fa0cfe,keys:l.goTopArticles,universal:!1}]:[];return[].concat((0,o.Z)([]),[{description:a().d5696fcc,keys:l.openKeyboardShortcuts,universal:!0},{description:a().a83d4280,keys:l.nextItem,universal:!0},{description:a().g0048656,keys:l.previousItem,universal:!0},{description:a().a690c4d0,keys:"Space",universal:!0},{description:a().e893811a,keys:l.refresh,universal:!1},{description:a().ha8209bc,keys:l.goHome,universal:!1},{description:a().fcf3e54c,keys:l.goExplore,universal:!0},{description:a().eb75875e,keys:l.goNotifications,universal:!1},{description:a().cdb53d7a,keys:l.goMentions,universal:!1},{description:a().fa98627a,keys:l.goProfile,universal:!1},{description:a().d4ebc798,keys:l.goToDrafts,universal:!1},{description:a().fd6a3f30,keys:l.goToScheduled,universal:!1},{description:a().d7b8ebaa,keys:l.goLikes,universal:!1},{description:a().b0041756,keys:l.goLists,universal:!1},{description:a().d4986f86,keys:l.goMessages,universal:!1},{description:a().bb081ea2,keys:l.goSettings,universal:!0},{description:a().i3145aa0,keys:l.goBookmarks,universal:!1}],t,[{description:a().eee2ed92,keys:l.goToUser,universal:!0},{description:a().ee5ccf3e,keys:l.goDisplay,universal:!1}])})),d=c.ZP.isMac()?"⌘":"CTRL",p=function(){return[{description:a().ab3d53f8,keys:l.newTweet,universal:!1},{description:a().de94bda6,keys:"".concat(d," Enter"),universal:!1},{description:a().e736990a,keys:l.newMessage,universal:!1},{description:a().a9ae1e78,keys:l.search,universal:!0},{description:a().fe731016,keys:r.Z.shortcuts.like,universal:!1},{description:a().d17df548,keys:r.Z.shortcuts.reply,universal:!1},{description:a().g062295e,keys:r.Z.shortcuts.retweet,universal:!1},{description:a().h01621a4,keys:r.Z.shortcuts.share,universal:!0},{description:a().gb303814,keys:l.bookmark,universal:!1},{description:a().c03b1126,keys:l.mute,universal:!1},{description:a().ebd2abb2,keys:l.block,universal:!1},{description:a().hc6c5510,keys:"Enter",universal:!0},{description:a().eebdef38,keys:r.Z.shortcuts.openMediaModal,universal:!0},{description:a().b488758c,keys:l.toggleDMDrawer,universal:!1}]},m=function(){return[{description:a().c82314e0,keys:l.video.play1,universal:!0},{description:a().c82314e0,keys:l.video.play2,universal:!0},{description:a().b881560e,keys:l.video.mute,universal:!0},{description:a().a94f7302,keys:l.audio.dock,universal:!1},{description:a().a7e604c6,keys:l.audio.play,universal:!1},{description:a().f978c4fc,keys:l.audio.mute,universal:!1}]},f=(0,s.Z)((function(e){var t=u(e),n=p(),r=m(),i={};return[].concat((0,o.Z)(n),(0,o.Z)(r),(0,o.Z)(t),(0,o.Z)([])).forEach((function(e){var t=e.description,n=e.keys;return i[n]=t})),JSON.stringify(i)})),v=function(e,t){if(t)return{dataSet:{"at-shortcutkeys":f(e)}}}},234590:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=Object.freeze({User:"User",ProfileCard:"ProfileCard",UserCompact:"UserCompact",UserConcise:"UserConcise",UserDetailed:"UserDetailed",PendingFollowUser:"PendingFollowUser",SubscribableUser:"SubscribableUser"})},215934:(e,t,n)=>{"use strict";n.d(t,{cM:()=>b,dS:()=>_,iY:()=>g});var o=n(256666),r=n(133028),i=(n(73439),n(958955)),a=n(573842),s=n(123301),c=n(526853),l=n(753392),u={},d=Object.freeze({REQUEST:"rweb/promotedContent/LOG_REQUEST",SUCCESS:"rweb/promotedContent/LOG_SUCCESS",FAILURE:"rweb/promotedContent/LOG_FAILURE"}),p="rweb/promotedContent/LOG_UNIQUE_EVENT",m=(0,i.Z)([s.dx.IMPRESSION,s.dx.DWELL]),f=(0,i.Z)([s.AJ.TREND_VIEW,s.AJ.SPOTLIGHT_IMPRESSION]),v=function(e){return{payload:{eventKey:e},type:p}};var h=function(e,t){return!!e.promotedContent[t]},_=function(e){return function(t,n,o){var r=o.api,i=e.event,s=e.impression_id,c=e.promoted_trend_id,u="trend-".concat(c,"-").concat(i);if(f.has(i)&&h(n(),u))return Promise.resolve();var p={promoted_trend_id:c,event:i,impression_id:s};return(0,l._O)(t,{params:p,request:r.withEndpoint(a.Z).log})({actionTypes:d,context:"APP_PROMOTED_CONTENT_LOG",meta:p},(function(e,t){if(!t&&f.has(i))return[v(u)]}))}},b=function(e){var t=e.disclosureType,n=e.itemId,o=e.itemType,i=e.params;return function(e,s,c){var u=c.api,p=i.event,f=i.impression_id,_="".concat(o,"-").concat(null!=n?n:"undefined","-").concat(null!=f?f:"undefined","-").concat(null!=p?p:"undefined");if(m.has(p)&&h(s(),_))return Promise.resolve();var b=t&&"earned"===t.toLowerCase()?"1":null,g=(0,r.Z)((0,r.Z)({},i),{},{earned:b,epoch_ms:Date.now()});return(0,l._O)(e,{params:g,request:u.withEndpoint(a.Z).log})({actionTypes:d,context:"APP_PROMOTED_CONTENT_LOG",meta:g},(function(e,t){if(!t&&m.has(p))return[v(_)]}))}},g=function(e){return function(t,n,o){var r=o.api;return(0,l._O)(t,{params:e,request:r.withEndpoint(a.Z).log})({actionTypes:d,context:"APP_PROMOTED_CONTENT_LOG",meta:e})}};c.Z.register({promotedContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;if(!t)return e;if(t.type===p){if(!t.payload)return e;var n=t.payload.eventKey;return(0,r.Z)((0,r.Z)({},e),{},(0,o.Z)({},n,!0))}return e}})},670083:(e,t,n)=>{"use strict";n.d(t,{r:()=>l});n(743108),n(136728);var o=n(990867),r=n(467935),i=n(407419),a=n(565621),s=n(469748),c=n(157659),l=function(e,t){return function(n,l,u){u.api,u.featureSwitches;return n(c.ZP.mute(e,t)).then((function(){var t=l(),c=(0,o.Z)(i.Z.selectAll(t)).reduce((function(n,o){if(null!=o)if(o.user===e)n[o.id_str]=!0;else if(o.retweeted_status){var r=i.Z.select(t,o.retweeted_status);(null==r?void 0:r.user)===e&&(n[o.id_str]=!0)}return n}),{}),u=(0,r._h)(l()),d=u?[(0,a.ZP)({useLatest:!1,userId:u}).removeTweets(c),(0,a.ZP)({useLatest:!0,userId:u}).removeTweets(c)]:[],p=(0,s.k9)();if(p.selectInitialFetchStatus(t)&&!p.selectCanRefresh(t)){var m=(0,s.f8)(e,t,p);m&&d.push(m)}return n(d)}))}}},469748:(e,t,n)=>{"use strict";n.d(t,{du:()=>u,f8:()=>d,k9:()=>l});n(888233);var o=n(297534),r=n(78772),i=n(452612),a=n(301231),s=n(157659),c=n(962104),l=function(){return(0,c.Z)({timelineId:"mutedAccountsGraphQL",network:{getEndpoint:function(e){return e.withEndpoint(o.ZP).fetchMutedAccounts},getEndpointParams:function(e){var t=e.count,n=e.cursor;return{count:t,cursor:"string"==typeof n?n:void 0}}},context:"FETCH_MUTED_ACCOUNTS",perfKey:"mutedAccountsGraphql",formatResponse:r.Z})},u=function(e){return function(t,n){var o=n();t(e.selectEntries(o).filter((function(e){var t=e.type===i.ZP.User?e.content.id:"",n=s.ZP.select(o,t);return n&&!n.muting})).map((function(t){return e.removeEntry(t.entryId)})))}},d=function(e,t,n){if(!n.selectEntries(t).find((function(t){return t.type===i.ZP.User&&t.content.id===e}))){var o=(0,a.OD)(e),r=(0,a.$0)({entryId:o,id:e,sortIndex:Date.now().toString()});return n.injectEntry(r)}}},446756:(e,t,n)=>{"use strict";n.d(t,{EC:()=>w,ru:()=>y});n(344112),n(136728);var o=n(17360),r=n(963892),i=n.n(r),a=(0,o.kj)((function(e){return!("Done"===(null==e?void 0:e.user_dismiss_rito_suggested_action))}),"GQL DismissRitoSuggestedAction: Failed to remove flagged account");const s=function(e){var t=e.apiClient;e.featureSwitches;return{dismissRitoSuggestedAction:function(e){var n=e.userId;return t.graphQL(i(),{userId:n},a)}}};var c=n(133028),l=n(983175),u=n(172752),d=n.n(u),p=n(482249),m=(0,o.kj)((function(e){var t;return!(null==e||null===(t=e.viewer_v2)||void 0===t||null===(t=t.rito_flagged_accounts_timeline)||void 0===t?void 0:t.timeline)}),"GQL RitoFlaggedAccounts: Failed to query for Rito Flagged Accounts timeline");const f=function(e){var t=e.apiClient,n=e.featureSwitches;return{fetchRitoFlaggedAccounts:function(e){var o=e.cursor;return t.graphQL(d(),(0,c.Z)((0,c.Z)({cursor:o},(0,l.d)(n)),{},{withSafetyModeUserFields:n.isTrue("rito_safety_mode_blocked_profile_enabled")}),m).then((function(e){var t;return(null==e||null===(t=e.viewer_v2)||void 0===t||null===(t=t.rito_flagged_accounts_timeline)||void 0===t?void 0:t.timeline)||p.cY}))}}};var v=n(78772),h=n(452612),_=n(753392),b=n(157659),g=n(962104),w=function(e){return(0,g.Z)({timelineId:"ritoFlaggedAccounts-".concat(e),network:{getEndpoint:function(e){return e.withEndpoint(f).fetchRitoFlaggedAccounts},getEndpointParams:function(e){var t=e.count,n=e.cursor;return{count:t,cursor:"string"==typeof n?n:void 0}}},context:"FETCH_RITO_FLAGGED_ACCOUNTS_TIMELINE",perfKey:"ritoFlaggedAccounts",formatResponse:v.Z})},y=function(e){return function(t,n,o){var r=o.api,i=n(),a=b.ZP.selectLoggedInUser(i),c=w((null==a?void 0:a.id_str)||"");return _.Vg(t,{params:{userId:e},request:r.withEndpoint(s).dismissRitoSuggestedAction})("RITO_DISMISS_SUGGESTED_ACTION").then((function(n){if(c.selectInitialFetchStatus(i)&&!c.selectCanRefresh(i)){var o=k({module:c,state:i,userId:e});return o&&t(o)}}))}},k=function(e){var t=e.module,n=e.state,o=e.userId;return function(e){var r=[],i=t.selectEntries(n),a="ritoflaggedaccountsmodule-".concat(o),s=i.find((function(e){return e.type===h.ZP.TimelineModule&&e.entryId===a})),c=!i.some((function(e){return e.entryId.startsWith("ritoflaggedaccountsmodule")&&e.entryId!==a}));s&&(r.push(t.removeEntry(a)),c&&r.push(t.deleteTimeline())),e(r)}}},582337:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ConversationFollowNudgeScreen:()=>Z,default:()=>I});var o=n(202784),r=n(325686),i=n(229496),a=n(973186),s=n(645184),c=n.n(s),l=n(872983),u=n(300292),d=n(296688),p=n(234590),m=(n(477950),n(74069),n(923335)),f=n(392160),v=n(119953),h=n(407419),_=n(157659),b=function(e,t){return t.match.params.screenName},g=function(e,t){return t.match.params.statusId},w=function(e,t){return function(e,t){return e.location&&e.location.state&&e.location.state[t]}(t,"promotedContent")},y=function(e,t){var n=function(e,t){return h.Z.selectHydrated(e,t.match.params.statusId)}(e,t),o=n?n.conversation_id_str:null,r=o?(0,v.Ln)(e,o):[];return r?_.ZP.selectMany(e,r):[]};const k=(0,f.Z)().propsFromState((function(){return{conversationFollowNudgeUsers:y,promotedContent:w,screenName:b,statusId:g}})).propsFromActions((function(){return{createLocalApiErrorHandler:(0,m.createLocalApiErrorHandlerWithContextFactory)("CONVERSATION_FOLLOW_NUDGE_SCREEN"),follow:_.ZP.follow}})).withAnalytics({page:"conversation follow nudge"});var C=c().cfe877ca,U=c().j231d352;function Z(e){var t=e.history,n=e.screenName,a=e.statusId,s=o.createElement(i.ZP,{onClick:function(){var t=e.conversationFollowNudgeUsers,n=e.follow,o=e.promotedContent;t.map((function(e){return n(e.id_str,{promotedContent:o})}))},type:"primaryText"},U);return o.createElement(u.Z,{backButtonType:"close",backLocation:"/".concat(n,"/status/").concat(a),containerStyle:E.root,history:t,rightControl:s,title:C},o.createElement(r.Z,{style:E.root},o.createElement(l.Z,{render:function(){var t=e.conversationFollowNudgeUsers.map((function(e){return e.id_str}));return o.createElement(d.Z,{displayMode:p.Z.UserCompact,userIds:t})}})))}var E=a.Z.create((function(e){return{root:{margin:e.spaces.space8}}}));const I=k(o.memo(Z))},826378:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(133028),r=n(202784),i=n(890601),a=n(783427),s=n(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.Z)().direction;return(0,i.Z)("svg",(0,o.Z)((0,o.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[s.Z.root,e.style],viewBox:"0 0 24 24",children:r.createElement("g",null,r.createElement("path",{d:"M5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5H12v2H5.5C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5V13h-2V4.5c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2zm10 7v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const l=c},646072:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(133028),r=n(202784),i=n(890601),a=n(783427),s=n(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.Z)().direction;return(0,i.Z)("svg",(0,o.Z)((0,o.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[s.Z.root,e.style],viewBox:"0 0 24 24",children:r.createElement("g",null,r.createElement("path",{d:"M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm12.586 3l-2.043-2.04 1.414-1.42L20 7.59l2.043-2.05 1.414 1.42L21.414 9l2.043 2.04-1.414 1.42L20 10.41l-2.043 2.05-1.414-1.42L18.586 9zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const l=c},97463:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(133028),r=n(202784),i=n(890601),a=n(783427),s=n(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.Z)().direction;return(0,i.Z)("svg",(0,o.Z)((0,o.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[s.Z.root,e.style],viewBox:"0 0 24 24",children:r.createElement("g",null,r.createElement("path",{d:"M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08l2.8-2.79 1.41 1.42-2.79 2.79c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08l-2.79 2.79-1.41-1.42 2.79-2.79C15.68 4.4 13.92 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const l=c},604358:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(133028),r=n(202784),i=n(890601),a=n(783427),s=n(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.Z)().direction;return(0,i.Z)("svg",(0,o.Z)((0,o.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[s.Z.root,e.style],viewBox:"0 0 24 24",children:r.createElement("g",null,r.createElement("path",{d:"M12 2C7.93 2 4.51 5.02 4 9.05L2.87 18H7.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4h4.24l-.64-5h-2.02l.38 3H5.13l.85-6.7C6.36 6.27 8.94 4 12 4V2zm0 18c-1.31 0-2.42-.83-2.83-2h5.66c-.41 1.17-1.52 2-2.83 2zm.3-12.29l1.41-1.42 1.76 1.76 4.29-4.72 1.48 1.34-5.7 6.28-3.24-3.24z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const l=c},299666:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(133028),r=n(202784),i=n(890601),a=n(783427),s=n(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.Z)().direction;return(0,i.Z)("svg",(0,o.Z)((0,o.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[s.Z.root,e.style],viewBox:"0 0 24 24",children:r.createElement("g",null,r.createElement("path",{d:"M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const l=c},261837:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(133028),r=n(202784),i=n(890601),a=n(783427),s=n(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.Z)().direction;return(0,i.Z)("svg",(0,o.Z)((0,o.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[s.Z.root,e.style],viewBox:"0 0 24 24",children:r.createElement("g",null,r.createElement("path",{d:"M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const l=c},642203:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(133028),r=n(202784),i=n(890601),a=n(783427),s=n(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.Z)().direction;return(0,i.Z)("svg",(0,o.Z)((0,o.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[s.Z.root,e.style],viewBox:"0 0 24 24",children:r.createElement("g",null,r.createElement("path",{d:"M18 1.2v21.6L8.71 17H5.5C4.12 17 3 15.88 3 14.5v-5C3 8.12 4.12 7 5.5 7h3.21L18 1.2zM8 9H5.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H8V9zm2 6.45l6 3.75V4.8l-6 3.75v6.9z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const l=c},128224:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});n(477950),n(74069),n(317368),n(524471),n(888233);var o=n(57740);const r=/(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i;const i=/(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i;const a=/(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i;const s=(0,o.Z)(/(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i,{validateUrlSubDomainSegment:a,validateUrlDomainSegment:r,validateUrlDomainTld:i});const c=/(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i;const l=(0,o.Z)(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i,{validateUrlDecOctet:c});const u=/(?:\[[a-f0-9:\.]+\])/i;const d=(0,o.Z)("(?:#{validateUrlIpv4}|#{validateUrlIpv6})",{validateUrlIpv4:l,validateUrlIpv6:u},"i");const p=(0,o.Z)("(?:#{validateUrlIp}|#{validateUrlDomain})",{validateUrlIp:d,validateUrlDomain:s},"i");const m=/[0-9]{1,5}/;const f=/(?:%[0-9a-f]{2})/i;const v=/[!$&'()*+,;=]/i;const h=/[a-z\u0400-\u04FF0-9\-._~]/i;const _=(0,o.Z)("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*",{validateUrlUnreserved:h,validateUrlPctEncoded:f,validateUrlSubDelims:v},"i");const b=(0,o.Z)("(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?",{validateUrlUserinfo:_,validateUrlHost:p,validateUrlPort:m},"i");const g=(0,o.Z)("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])",{validateUrlUnreserved:h,validateUrlPctEncoded:f,validateUrlSubDelims:v},"i");const w=(0,o.Z)(/(#{validateUrlPchar}|\/|\?)*/i,{validateUrlPchar:g});const y=(0,o.Z)(/(\/#{validateUrlPchar}*)*/i,{validateUrlPchar:g});const k=(0,o.Z)(/(#{validateUrlPchar}|\/|\?)*/i,{validateUrlPchar:g});const C=/(?:[a-z][a-z0-9+\-.]*)/i;const U=(0,o.Z)("^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$","i");const Z=/(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;const E=/(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;const I=/(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;const S=(0,o.Z)(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i,{validateUrlUnicodeSubDomainSegment:I,validateUrlUnicodeDomainSegment:Z,validateUrlUnicodeDomainTld:E});const A=(0,o.Z)("(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})",{validateUrlIp:d,validateUrlUnicodeDomain:S},"i");const R=(0,o.Z)("(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?",{validateUrlUserinfo:_,validateUrlUnicodeHost:A,validateUrlPort:m},"i");function T(e,t,n){return n?!e||e.match(t)&&RegExp["$&"]===e:"string"==typeof e&&e.match(t)&&RegExp["$&"]===e}function L(e,t,n){if(null==t&&(t=!0),null==n&&(n=!0),!e)return!1;var o=e.match(U);if(!o||o[0]!==e)return!1;var r=o[1],i=o[2],a=o[3],s=o[4],c=o[5];return!!((!n||T(r,C)&&r.match(/^https?$/i))&&T(a,y)&&T(s,k,!0)&&T(c,w,!0))&&(t&&T(i,R)||!t&&T(i,b))}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/src_app_containers_UserCell_index_js-src_app_modules_createShallowEqualSelector_index_js-src_-d6ca0b.8c767ada.js.map.4 5.7 2.8zM15 29h-2V16h2v13zm0-15h-2v-2h2v2zm0-4s2.7-8 5.7-8c.5 0 1 .2 1.5.7C25.9 6.4 15 10 15 10zm8 19h-6V16h6v13zm3-15h-9v-2h9v2z" fill="#CCC" fill-rule="nonzero" /></symbol><symbol viewBox="0 0 24 24" id="puma-arrow-top" xmlns="http://www.w3.org/2000/svg"><path d="M11.42 6.47a.75.75 0 011.06 0l4.243 4.242a.75.75 0 01-1.06 1.061l-2.914-2.912L12.75 17a.75.75 0 01-.64.742l-.11.008a.75.75 0 01-.75-.75V8.761l-3.013 3.012a.75.75 0 01-.983.067l-.077-.067a.75.75 0 010-1.06z" fill="#181818" fill-rule="nonzero" /></symbol><symbol viewBox="0 0 48 37" id="puma-logo" xmlns="http://www.w3.org/2000/svg"><path d="M47.689.517c-.834-1.066-2.291-.213-2.933.16-4.569 2.692-5.243 7.432-6.834 10.154-1.253 2.178-3.304 3.779-5.159 3.903-1.373.098-2.861-.167-4.338-.81-3.613-1.562-5.56-3.583-6.034-3.94-.973-.739-8.459-8.03-14.559-8.327 0 0-.744-1.5-.93-1.526C6.457.08 6 1.033 5.669 1.133c-.3.105-.825-1.024-1.13-.975C4.233.2 3.936 1.33 3.34 1.913c-.439.425-.973.398-1.275.926-.104.192-.068.53-.186.84-.253.641-1.102.708-1.11 1.394 0 .762.714.907 1.338 1.438.496.425.53.725 1.109.924.515.176 1.264-.374 1.928-.177.553.163 1.085.279 1.204.846.108.513 0 1.316-.682 1.226-.222-.03-1.194-.348-2.395-.22-1.45.154-3.105.618-3.267 2.22-.083.895 1.028 1.942 2.11 1.733.742-.143.392-1.013.797-1.433.535-.541 3.545 1.888 6.344 1.888 1.186 0 2.063-.3 2.935-1.21.078-.057.185-.203.31-.218.113.015.324.128.39.175 2.262 1.793 3.967 5.399 12.26 5.441 1.164.014 2.498.558 3.591 1.553.96.866 1.528 2.251 2.075 3.65.836 2.106 2.322 4.139 4.584 6.407.119.135 1.98 1.561 2.119 1.666.025.021.168.334.106.51-.039 1.38-.245 5.34 2.731 5.506.731.04.549-.463.549-.82-.01-.683-.129-1.371.226-2.08.507-.957-1.051-1.418-1.017-3.513.037-1.567-1.291-1.302-1.969-2.498-.381-.687-.736-1.065-.699-1.894.145-4.76-1.034-7.896-1.61-8.654-.455-.587-.847-.806-.414-1.078 2.481-1.632 3.05-3.15 3.05-3.15 1.32-3.081 2.512-5.89 4.15-7.138.332-.241 1.177-.88 1.703-1.12 1.527-.725 2.346-1.156 2.777-1.576.711-.675 1.27-2.107.588-2.96h-.001z" /></symbol><symbol viewBox="0 0 64 32" id="puma-logo-with-text" xmlns="http://www.w3.org/2000/svg"><path d="M34.455.43c-.205.041-.41.778-.819 1.188-.287.287-.656.287-.86.615-.082.123-.041.369-.123.574-.164.451-.738.492-.738.942 0 .492.492.615.901.983.328.287.369.492.738.615.328.123.819-.246 1.27-.123.369.123.738.205.819.574s0 .901-.451.819c-.164 0-.819-.246-1.598-.164-.983.123-2.09.41-2.172 1.516-.041.615.697 1.311 1.393 1.188.492-.082.246-.697.533-.983.369-.369 2.376 1.27 4.261 1.27.778 0 1.393-.205 1.967-.819.041-.041.123-.164.205-.164s.205.082.246.123c1.516 1.229 2.663 3.647 8.195 3.688.778 0 1.68.369 2.417 1.024.656.615 1.024 1.557 1.393 2.499.574 1.434 1.557 2.827 3.073 4.343.082.082 1.311 1.065 1.434 1.106 0 0 .123.246.082.369-.041.942-.164 3.606 1.844 3.729.492.041.369-.328.369-.574 0-.451-.082-.942.164-1.393.328-.656-.697-.942-.697-2.376.041-1.065-.86-.901-1.311-1.68-.246-.451-.492-.738-.492-1.311.082-3.237-.697-5.367-1.065-5.859-.287-.41-.574-.533-.287-.738 1.68-1.106 2.049-2.131 2.049-2.131.901-2.09 1.68-4.015 2.786-4.835.205-.164.778-.615 1.147-.778 1.024-.492 1.557-.778 1.844-1.065.451-.451.86-1.434.41-2.008-.574-.738-1.516-.164-1.967.123-3.073 1.844-3.524 5.04-4.589 6.883-.86 1.475-2.213 2.581-3.442 2.663-.942.082-1.926-.123-2.909-.574-2.417-1.065-3.729-2.417-4.056-2.663-.656-.492-5.654-5.449-9.752-5.654 0 0-.492-1.024-.615-1.024-.287-.041-.615.615-.819.697-.246.123-.574-.656-.778-.615zM16.55 29.931a.718.718 0 01-.697-.697V16.491h-4.22v14.054c0 .697.574 1.27 1.229 1.27h7.293c.697 0 1.229-.574 1.229-1.27V16.491h-4.138v12.743a.718.718 0 01-.697.697zM30.563 16.492h-6.351c-.738 0-1.352.615-1.352 1.352v13.931h4.179V19.032c0-.41.328-.697.697-.697.41 0 .697.287.697.697v12.784h4.179V18.991c0-.369.328-.697.697-.697s.697.328.697.697v12.784h4.179V17.844c0-.778-.615-1.352-1.352-1.352h-6.269zM8.847 27.923h-4.22v3.851H.448V16.491h8.44c.738 0 1.352.615 1.352 1.393v8.686c0 .778-.615 1.352-1.393 1.352zm-2.786-8.891c0-.41-.328-.738-.697-.738h-.697v7.744h.697c.369 0 .697-.287.697-.738v-6.269zM54.491 29.972c0 1.024-.819 1.885-1.844 1.885s-1.885-.819-1.885-1.885c0-1.024.819-1.885 1.844-1.885s1.885.819 1.885 1.885zm-1.885-1.598c-.86 0-1.557.738-1.557 1.598 0 .901.697 1.598 1.557 1.598s1.557-.738 1.557-1.598-.697-1.598-1.557-1.598z" /><path d="M53.507 31.078h-.492l-.656-.86v.86h-.41v-2.172h.41c.574 0 .901.205.901.656a.616.616 0 01-.451.615h-.041l.738.901zm-1.065-1.229c.287 0 .451-.123.451-.328s-.164-.287-.451-.287h-.082v.574l.082.041zM45.272 31.775v-3.851h-1.434v3.851h-4.179V17.844c0-.778.615-1.352 1.352-1.352h7.047c.738 0 1.352.615 1.352 1.352v13.931h-4.138zm0-5.737v-7.006c0-.369-.328-.697-.697-.697s-.697.328-.697.697v7.047l1.393-.041z" /></symbol><symbol viewBox="0 0 24 24" id="qrcode-solid" xmlns="http://www.w3.org/2000/svg"><path d="M.167 10.554H10.22V.5H.167v10.054zm3.35-6.703H6.87v3.351H3.518v-3.35zM13.572.5v10.054h10.054V.5H13.571zm6.703 6.702h-3.351v-3.35h3.35v3.35zM.167 23.958H10.22V13.905H.167v10.053zm3.35-6.702H6.87v3.351H3.518v-3.351zm18.432-3.351h1.676v6.702h-5.027v-1.675h-1.675v5.026H13.57V13.905h5.027v1.675h3.351v-1.675zm0 8.378h1.676v1.675h-1.676v-1.675zm-3.35 0h1.675v1.675h-1.676v-1.675z" fill="currentColor" /></symbol><symbol fill="currentColor" class="ddbi ddbi-question-circle" viewBox="0 0 16 16" id="question-circle" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" /><path d="M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" /></symbol><symbol viewBox="0 0 24 24" id="red-heart" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.612 5.415A4.692 4.692 0 0016.262 4a4.692 4.692 0 00-3.35 1.415l-.912.93-.913-.93a4.675 4.675 0 00-6.7 0c-1.85 1.885-1.85 4.942 0 6.827l.913.93L12 20l6.7-6.828.912-.93A4.874 4.874 0 0021 8.828c0-1.28-.5-2.508-1.388-3.413z" /></symbol><symbol viewBox="0 0 24 24" id="red-heart-filled" xmlns="http://www.w3.org/2000/svg"><path fill="red" fill-rule="evenodd" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.612 5.415A4.692 4.692 0 0016.262 4a4.692 4.692 0 00-3.35 1.415l-.912.93-.913-.93a4.675 4.675 0 00-6.7 0c-1.85 1.885-1.85 4.942 0 6.827l.913.93L12 20l6.7-6.828.912-.93A4.874 4.874 0 0021 8.828c0-1.28-.5-2.508-1.388-3.413z" /></symbol><symbol viewBox="0 0 24 24" id="return" xmlns="http://www.w3.org/2000/svg"><path d="M4.207 11.801c.297-.331.76-.331 1.09-.066l1.253 1.127V12c0-3.881 3.133-7 6.96-7 3.823.001 6.99 3.12 6.99 7 0 3.881-3.133 7-6.96 7a.749.749 0 01-.759-.763c0-.432.33-.763.76-.763 3.001 0 5.441-2.454 5.441-5.473 0-3.02-2.44-5.473-5.442-5.473-3 0-5.442 2.454-5.442 5.473v.863l1.254-1.128c.33-.298.79-.265 1.088.066.297.332.264.796-.065 1.095l-2.573 2.288a.727.727 0 01-.495.2.803.803 0 01-.528-.2l-2.54-2.288c-.296-.299-.33-.797-.032-1.096z" fill="#666" fill-rule="nonzero" /></symbol><symbol viewBox="0 0 17 16" id="ruler" xmlns="http://www.w3.org/2000/svg"><path d="M5.318 15.425a1 1 0 01-1.414 0l-2.829-2.829a1 1 0 010-1.414L11.682.575a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L5.318 15.425zm7.071-14.143L1.782 11.89l2.829 2.829.707-.708-.354-.353a.5.5 0 11.708-.707l.353.353.707-.707-1.06-1.06a.5.5 0 11.707-.708l1.06 1.061.707-.707-.353-.354a.5.5 0 11.707-.707l.354.354.707-.707L8.5 8.708A.5.5 0 119.207 8l1.06 1.06.708-.706L10.62 8a.5.5 0 11.707-.707l.354.353.707-.707-1.06-1.06a.5.5 0 11.707-.707l1.06 1.06.707-.707-.353-.353a.5.5 0 11.707-.708l.353.354.708-.707-2.829-2.829z" fill="#181818" fill-rule="evenodd" /></symbol><symbol viewBox="0 0 33 32" id="search" xmlns="http://www.w3.org/2000/svg"><path d="M23.219 4.719c-5.137-5.137-13.397-5.137-18.534 0s-5.137 13.397 0 18.534c5.137 5.137 13.397 5.137 18.534 0s5.137-13.397 0-18.534zm-2.115 16.418c-3.928 3.928-10.375 3.928-14.303 0s-3.928-10.375 0-14.303c3.928-3.928 10.375-3.928 14.303 0s3.928 10.375 0 14.303z" /><path d="M22.011 21.036c.705-.705 1.209-1.108 2.518.201l6.044 5.943c1.309 1.309 1.914 2.921 1.209 3.626s-2.317.101-3.626-1.209l-6.044-5.943c-1.309-1.309-.806-1.914-.101-2.619z" /></symbol><symbol viewBox="0 0 32 29" id="slider-handle" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M0 0h15.951l15.951 15.061-15.95 13.854H0z" /><path d="M14.5 9.036v10.958M9.5 9.036v10.958" stroke="#FFF" stroke-linecap="square" /></g></symbol><symbol viewBox="0 0 32 32" id="social-fb" xmlns="http://www.w3.org/2000/svg"><path d="M17.7 28.25v-11.4h3.825l.575-4.45h-4.4V9.575c0-1.275.35-2.175 2.2-2.175h2.35V3.425c-.4-.05-1.8-.175-3.425-.175-3.4 0-5.725 2.075-5.725 5.875V12.4H9.25v4.45h3.85v11.4h4.6z" /></symbol><symbol viewBox="0 0 32 32" id="social-instagram" xmlns="http://www.w3.org/2000/svg"><path d="M21.377 29.115H10.623c-4.118 0-7.475-3.331-7.475-7.423V10.308c0-4.092 3.357-7.423 7.475-7.423h10.754c4.118 0 7.475 3.331 7.475 7.423v11.384c0 4.092-3.357 7.423-7.475 7.423zm0-1.967c1.469 0 2.833-.577 3.882-1.6 1.049-1.049 1.626-2.413 1.626-3.856V10.308c0-1.443-.577-2.833-1.626-3.856s-2.413-1.6-3.882-1.6H10.623c-1.469 0-2.833.577-3.882 1.6-1.049 1.049-1.626 2.413-1.626 3.856v11.384c0 1.443.577 2.833 1.626 3.856a5.413 5.413 0 003.882 1.6h10.754z" /><path d="M23.108 15.895c0 3.882-3.174 7.03-7.082 7.03s-7.082-3.148-7.082-7.029 3.174-7.029 7.082-7.029 7.082 3.148 7.082 7.029zM16 11.305c-2.57 0-4.643 2.072-4.643 4.616s2.072 4.616 4.643 4.616 4.643-2.072 4.643-4.616c0-2.57-2.072-4.616-4.643-4.616zM24.918 8.761c0 .918-.761 1.652-1.679 1.652s-1.679-.734-1.679-1.652.761-1.652 1.679-1.652 1.679.734 1.679 1.652z" /></symbol><symbol viewBox="0 0 32 32" id="social-pinterest" xmlns="http://www.w3.org/2000/svg"><path d="M13.696 21.376c-.8 4.32-1.792 8.448-4.736 10.624-.896-6.528 1.344-11.424 2.368-16.64-1.76-3.04.224-9.12 3.936-7.616 4.576 1.856-3.968 11.232 1.76 12.416 6.048 1.248 8.48-10.56 4.768-14.4-5.376-5.536-15.648-.128-14.4 7.808.32 1.952 2.272 2.528.8 5.216-3.456-.768-4.48-3.52-4.32-7.2C4.096 5.568 9.184 1.344 14.304.768c6.464-.768 12.544 2.4 13.408 8.608.96 7.008-2.912 14.56-9.856 14.016-1.888-.16-2.688-1.088-4.16-2.016z" /></symbol><symbol viewBox="0 0 39 32" id="social-twitter" xmlns="http://www.w3.org/2000/svg"><path d="M13.538 29.89c12.87 0 19.903-10.69 19.903-19.938 0-.316 0-.598-.035-.914a13.643 13.643 0 003.481-3.622c-1.266.563-2.602.949-4.009 1.09 1.442-.879 2.567-2.251 3.094-3.868-1.336.809-2.848 1.371-4.431 1.688a6.929 6.929 0 00-5.099-2.215 6.994 6.994 0 00-6.998 6.998c0 .563.07 1.09.176 1.582-5.802-.281-10.971-3.095-14.418-7.314-.633 1.055-.949 2.251-.949 3.552a6.997 6.997 0 003.13 5.837 6.88 6.88 0 01-3.165-.879v.105c0 3.411 2.426 6.224 5.626 6.892a6.372 6.372 0 01-1.829.246 5.25 5.25 0 01-1.301-.141 7.047 7.047 0 006.541 4.888 14.108 14.108 0 01-8.686 2.989c-.563 0-1.125-.035-1.653-.105 2.989 1.969 6.681 3.13 10.62 3.13z" /></symbol><symbol viewBox="0 0 46 32" id="social-youtube" xmlns="http://www.w3.org/2000/svg"><path d="M33.727.5H12.392C.721.5.721 3.828.721 11.988v7.978c0 7.796 1.641 11.534 11.671 11.534h21.335c9.026 0 11.671-2.188 11.671-11.488v-8.024C45.398 3.417 44.942.5 33.727.5zM18.5 22.063V9.526l12.035 6.246L18.5 22.063z" /></symbol><symbol viewBox="0 0 23 32" id="store-locator" xmlns="http://www.w3.org/2000/svg"><path d="M22.628 11.787C22.628 5.508 17.62.5 11.5.5S.372 5.587.372 11.787c0 1.51.238 2.862.715 4.213 0 0 .159.397.556 1.113.238.397.477.795.715 1.113.795 1.351 1.987 3.18 3.259 5.167 2.623 4.133 5.882 8.108 5.882 8.108s3.577-4.61 6.359-8.903c1.113-1.749 2.146-3.338 2.862-4.531.159-.238.318-.556.477-.874.477-.795.715-1.272.715-1.272.477-1.192.715-2.623.715-4.133zm-2.225 3.736s-.159.397-.556 1.113c-.159.238-.318.477-.397.715-.636 1.033-1.431 2.385-2.464 3.895-2.385 3.736-5.485 7.631-5.485 7.631s-2.782-3.497-5.008-6.915a193.496 193.496 0 01-2.782-4.531c-.238-.318-.397-.636-.636-.954-.397-.636-.477-.954-.477-.954a10.697 10.697 0 01-.636-3.656c0-5.405 4.292-9.777 9.538-9.777s9.538 4.372 9.538 9.777c0 1.272-.159 2.544-.636 3.656z" /><path d="M11.659 6.62c-2.703 0-4.928 2.226-4.928 5.008s2.226 5.008 4.928 5.008 4.928-2.226 4.928-5.008-2.226-5.008-4.928-5.008zm0 8.744c-1.987 0-3.656-1.669-3.656-3.736s1.669-3.736 3.656-3.736 3.656 1.669 3.656 3.736-1.669 3.736-3.656 3.736z" /></symbol><symbol viewBox="0 0 32 32" id="support" xmlns="http://www.w3.org/2000/svg"><path d="M16 .5C7.475.5.5 7.475.5 16S7.475 31.5 16 31.5 31.5 24.525 31.5 16 24.525.5 16 .5zm0 29.45C8.328 29.95 2.05 23.673 2.05 16S8.327 2.05 16 2.05 29.95 8.327 29.95 16 23.673 29.95 16 29.95z" /><path d="M14.062 19.023c0 .387.155.542.542.542h2.092c.387 0 .542-.155.542-.542v-.852c0-.775.31-1.008 1.008-1.317l1.317-.62c.93-.387 2.17-1.395 2.17-3.642v-1.085c0-1.938-1.395-3.797-5.425-3.797s-5.348 1.86-5.348 3.797v1.395c0 .387.155.62.62.62h1.938c.387 0 .542-.155.542-.62v-.93c0-1.162.775-1.783 2.325-1.783 1.473 0 2.325.62 2.325 1.783v.697c0 .853-.542 1.24-.852 1.395l-2.17 1.085c-.697.387-1.473.775-1.473 2.092v1.782h-.155zm3.178 2.325c0-.387-.155-.62-.542-.62h-2.015c-.387 0-.542.155-.542.62v1.86c0 .387.155.62.542.62h2.015c.387 0 .542-.155.542-.62v-1.86z" /></symbol><symbol fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24" id="trash-can" xmlns="http://www.w3.org/2000/svg"><path d="M19 24H5a2 2 0 01-2-2V5H2V3h6V1.5C8 .673 8.673 0 9.5 0h5c.825 0 1.5.671 1.5 1.5V3h6v2h-1v17a2 2 0 01-2 2zm0-19H5v16.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V5zm-9 4a1 1 0 00-2 0v9a1 1 0 002 0V9zm6 0a1 1 0 00-2 0v9a1 1 0 002 0V9zm-2-7h-4v1h4V2z" /></symbol><symbol viewBox="0 0 40 40" id="twitter" xmlns="http://www.w3.org/2000/svg"><path d="M31.953 12.382a9.8 9.8 0 01-2.825.794 5.063 5.063 0 002.163-2.792 10.01 10.01 0 01-3.127 1.214A4.844 4.844 0 0024.574 10c-2.718 0-4.92 2.259-4.92 5.041 0 .4.045.785.127 1.153-4.09-.198-7.715-2.212-10.141-5.256a5.04 5.04 0 00-.666 2.538 5.08 5.08 0 002.188 4.2 4.812 4.812 0 01-2.228-.632v.062c0 2.445 1.693 4.485 3.946 4.95a4.88 4.88 0 01-2.212.086c.63 2.003 2.445 3.463 4.604 3.504A9.714 9.714 0 018 27.736 13.745 13.745 0 0015.557 30c9.053 0 13.998-7.685 13.998-14.34 0-.214 0-.43-.015-.645.961-.707 1.8-1.6 2.46-2.613l-.047-.02z" /></symbol><symbol fill="none" viewBox="0 0 24 25" id="unmute" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.5a1 1 0 00-1.625-.78L6.65 7.5H3a1 1 0 00-1 1v8a1 1 0 001 1h3.65l4.725 3.78A1 1 0 0013 20.5v-16zM7.625 9.28L11 6.58v11.84l-3.375-2.7A1 1 0 007 15.5H4v-6h3a1 1 0 00.625-.22zm12.326-.074a8.606 8.606 0 00-1.865-2.792L19.5 5a10.606 10.606 0 010 15l-1.414-1.414a8.606 8.606 0 001.865-9.38zm-4.256 1.763a4.001 4.001 0 00-.867-1.297l1.415-1.415a6 6 0 010 8.486l-1.415-1.414a4.003 4.003 0 00.867-4.36z" fill="#191919" /></symbol><symbol viewBox="0 0 32 32" id="video-pause" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" opacity=".15" d="M31.75 16c0 8.698-7.052 15.75-15.75 15.75S.25 24.698.25 16 7.301.25 16 .25 31.75 7.301 31.75 16z" /><path fill="#fff" d="M12.749 10.75h1.81v10.5h-1.81v-10.5zM17.441 10.75h1.81v10.5h-1.81v-10.5z" /><path fill="#fff" d="M16 2.06c7.699 0 13.94 6.241 13.94 13.94S23.699 29.94 16 29.94 2.06 23.699 2.06 16C2.068 8.305 8.304 2.069 15.999 2.06zm0-1.81C7.302.25.25 7.301.25 16S7.301 31.75 16 31.75c8.698 0 15.75-7.052 15.75-15.75S24.698.25 16 .25z" /></symbol><symbol viewBox="0 0 32 32" id="video-play" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" opacity=".15" d="M31.5 16c0 8.56-6.94 15.5-15.5 15.5S.5 24.56.5 16C.5 7.44 7.44.5 16 .5S31.5 7.44 31.5 16z" /><path fill="#fff" d="M19.574 16l-5.345 5.167V10.834l5.345 5.167z" /><path fill="#fff" d="M16 2.282c7.576 0 13.718 6.142 13.718 13.718S23.576 29.718 16 29.718 2.282 23.576 2.282 16C2.29 8.427 8.427 2.29 16 2.282zM16 .5C7.44.5.5 7.44.5 16S7.44 31.5 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5z" /></symbol><symbol viewBox="0 0 40 40" id="youtube" xmlns="http://www.w3.org/2000/svg"><path d="M31.49 14.589a3.007 3.007 0 00-2.088-2.088C27.532 12 20.006 12 20.006 12s-7.507-.01-9.396.501a3.007 3.007 0 00-2.088 2.088A31.247 31.247 0 008 20.394c-.006 1.94.17 3.876.522 5.783a3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088c.346-1.908.513-3.844.5-5.783a31.247 31.247 0 00-.5-5.805zm-13.886 9.396v-7.193l6.264 3.602-6.264 3.591z" /></symbol></svg>
</div>
<div style="display: none;" class="js-form-messages">
<div class="js-errors-data" data-errors="{&quot;language&quot;:&quot;es&quot;,&quot;messages&quot;:{&quot;Please shorten this text to %l characters or less (you are currently using %l characters).&quot;:&quot;Reduzca este texto a %l caracteres o menos (actualmente est&aacute; usando %l caracteres).&quot;,&quot;Please lengthen this text to %l characters or more (you are currently using %l characters).&quot;:&quot;Introduce un valor correcto.&quot;,&quot;ValueMissing&quot;:&quot;Cumplimenta este campo.&quot;,&quot;CheckboxMissing&quot;:&quot;Marque esta casilla si desea continuar.&quot;,&quot;RadioMissing&quot;:&quot;Seleccione una de estas opciones.&quot;,&quot;FileMissing&quot;:&quot;Seleccione un archivo.&quot;,&quot;SelectMissing&quot;:&quot;Selecciona un art&iacute;culo de la lista.&quot;,&quot;InvalidEmail&quot;:&quot;Introduzca una direcci&oacute;n de correo.&quot;,&quot;InvalidURL&quot;:&quot;Introduzca una URL.&quot;,&quot;PatternMismatch&quot;:&quot;Los formatos deben coincidir.&quot;,&quot;PatternMismatchWithTitle&quot;:&quot;Aj&uacute;stese al formato solicitado: %l.&quot;,&quot;NumberRangeOverflow&quot;:&quot;Seleccione un valor que no sea mayor de %l.&quot;,&quot;DateRangeOverflow&quot;:&quot;Seleccione un valor que no sea posterior a %l.&quot;,&quot;TimeRangeOverflow&quot;:&quot;Seleccione un valor que no sea posterior a %l.&quot;,&quot;NumberRangeUnderflow&quot;:&quot;Seleccione un valor que no sea menor de %l.&quot;,&quot;DateRangeUnderflow&quot;:&quot;Seleccione un valor que no sea anterior a %l.&quot;,&quot;TimeRangeUnderflow&quot;:&quot;Seleccione un valor que no sea anterior a %l.&quot;,&quot;StepMismatch&quot;:&quot;Seleccione un valor v&aacute;lido. Los dos valores v&aacute;lidos m&aacute;s cercanos son %l y %l.&quot;,&quot;StepMismatchOneValue&quot;:&quot;Seleccione un valor v&aacute;lido. El valor v&aacute;lido m&aacute;s cercano es %l.&quot;,&quot;BadInputNumber&quot;:&quot;Introduzca un n&uacute;mero.&quot;}}"></div>
</div>
<div id="page" class="page" data-action="Search-Show" data-querystring="cgid=collections-motorsport-porsche-legacy">
<header id="siteHeader" class="p-header  p-header--promo js-cmp" data-cmp="sticky-header" data-cmp-config-ghost="false" data-cmp-config-compressed="false">
<div class="p-header-spacer">
<div class="p-header-content js-header-content-components">
<div class="header-top-section-components">
<div class="p-promo-bar">
<div class="p-promo-bar-inner js-cmp" data-cmp="header-promo-bar">
<div class="p-promo-bar-item p-promo-bar-item--active js-cmp" data-cmp="header-promo-bar-item">
<div>
<span class="p-promo-bar-item-label">
<b>ENVÍOS GRATUITOS</b> PARA PEDIDOS SUPERIORES A 60 €. 60 DÍAS DE DEVOLUCIONES GRATUITAS.
</span>
</div>
</div>
</div>
</div>
</div>
<div class="p-header-bar js-header-bar-components">
<div class="p-header-bar-inner">
<div class="p-header-bar-left">
<div class="p-header-logo">
<a href="/es/es/home" class="p-header-logo-link" title="Puma Home">
<span class="sr-only">
Puma Home
</span>
<span class="p-header-logo-inner">
<svg class="p-header-logo-icon">
<use xlink:href="#puma-logo"></use>
</svg>
</span>
</a>
</div>
<div class="p-header-nav">
<nav class="p-nav" role="navigation">
<ul class="p-nav-list" role="menu">
<li class="p-nav-item js-nav-item" role="presentation">
<a href="/es/es/mujer" role="menuitem" class="p-nav-item-link js-top-level" data-category-id="womens">
<span class="p-nav-item-link-inner">
Mujer
</span>
</a>
<div class="p-nav-item-subnav js-cmp" role="presentation" data-cmp="header-navigation-sub-nav" data-cmp-config-type="standard">
<ul class="p-nav-subnav   p-nav-subnav-item-inner-underlined" role="menu" aria-hidden="true">
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--general ">
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ofertas" role="menuitem" class="p-nav-subnav-link p-nav-subnav-link--highlight js-top-level" data-category-id="womens-sale">
<span class>
Ofertas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/novedades" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-new-arrivals">
<span class>
Novedades
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/colecciones/lifestyle/colecciones/suede-xl" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-lifestyle-collections-suede-xl">
<span class>
Suede XL
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/guia-de-regalos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="gift-guide">
<span class>
San Valentín
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/tendencias-actuales" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-trending-now">
<span class>
Tendencias actuales
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/colecciones/lifestyle/colecciones/terrace" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-lifestyle-collections-terrace">
<span class>
Terrace
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/basicos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-puma-essentials">
<span class>
Básicos
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/classics" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-puma-classics">
<span class>
Classics
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/nitro" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-performance-nitro">
<span class>
NITRO™
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/deportes-de-motor/speedcat" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-motorsport-speedcat">
<span class>
Speedcat
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/mujer/calzado" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="womens-shoes">
<span class>
Calzado
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/zapatillas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-sneakers">
<span class>
Zapatillas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/terrace" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-terrace">
<span class>
Terrace
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/running" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-running">
<span class>
Running
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/training" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-training-&amp;-gym">
<span class>
Training
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/golf" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-golf">
<span class>
Golf
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/zapatillas-de-casa" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-slippers">
<span class>
Zapatillas de casa
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/deportes-de-motor" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-motorsport">
<span class>
Deportes de motor
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/botas-de-futbol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-football-boots">
<span class>
Botas de fútbol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/padel" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-padel">
<span class>
Padel
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/basketball" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-basketball">
<span class>
Basketball
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/calzado/calzado-de-invierno" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-shoes-winter-shoes">
<span class>
Calzado de Invierno
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/mujer/ropa" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="womens-clothing">
<span class>
Ropa
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/camisetas-y-tops" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-t-shirts-&amp;-tops">
<span class>
Camisetas y tops
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/sudaderas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-sweatshirts-&amp;-hoodies">
<span class>
Sudaderas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/chaquetas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-jackets">
<span class>
Chaquetas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/chaquetas-de-invierno" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-winter-jackets">
<span class>
Chaquetas de Invierno
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/camisetas-deportivas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-jerseys">
<span class>
Camisetas Deportivas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/sujetadores-deportivos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-sports-bras">
<span class>
Sujetadores deportivos
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/leggings" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-leggings">
<span class>
Leggings
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/pantalones-deportivos-y-chandal" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-pants">
<span class>
Pantalones deportivos & Chándal
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/conjuntos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-all-matching-sets">
<span class>
Conjuntos
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/vestidos-y-faldas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-dresses-&amp;-skirts">
<span class>
Vestidos y faldas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/shorts" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-shorts">
<span class>
Shorts
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/chandales" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-tracksuits">
<span class>
Chándales
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/ropa-interior" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-underwear">
<span class>
Ropa Interior
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/calcetines" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-socks">
<span class>
Calcetines
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/ropa/premama" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-clothing-maternity">
<span class>
Premamá
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/mujer/accesorios" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="womens-accessories">
<span class>
Accesorios
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/accesorios/mochilas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-accessories-backpacks">
<span class>
Mochilas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/accesorios/bolsas-y-bolsos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-accessories-bags">
<span class>
Bolsas y bolsos
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/accesorios/gorros-y-gorras" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-accessories-hats-&amp;-headwear">
<span class>
Gorros y gorras
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/accesorios/guantes" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-accessories-gloves">
<span class>
Guantes
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/accesorios/gafas-de-sol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-accessories-sunglasses">
<span class>
Gafas de Sol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/accesorios/carteras" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-accessories-wallets">
<span class>
Carteras
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/accesorios/balones" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-accessories-balls">
<span class>
Balones
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/accesorios/gorros-de-invierno" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-accessories-winter-hats">
<span class>
Gorros de invierno
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/mujer/deportes" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="womens-sport">
<span class>
Deportes
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/deportes/running" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-sport-running">
<span class>
Running
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/deportes/training" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-sport-training-&amp;-gym">
<span class>
Training
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/deportes/yoga" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-sport-yoga">
<span class>
Yoga
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/deportes/futbol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-sport-football">
<span class>
Fútbol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/deportes/golf" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-sport-golf">
<span class>
Golf
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/deportes/deportes-de-motor" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-sport-motorsport">
<span class>
Deportes de motor
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/deportes/baloncesto" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-sport-basketball">
<span class>
Baloncesto
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/deportes/balonmano" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-sport-handball">
<span class>
Balonmano
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/deportes/senderismo" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-sport-hiking">
<span class>
Senderismo
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/mujer/deportes/padel" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="womens-sport-padel">
<span class>
Pádel
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
</ul>
</div>
</li>
<li class="p-nav-item js-nav-item" role="presentation">
<a href="/es/es/hombre" role="menuitem" class="p-nav-item-link js-top-level" data-category-id="mens">
<span class="p-nav-item-link-inner">
Hombre
</span>
</a>
<div class="p-nav-item-subnav js-cmp" role="presentation" data-cmp="header-navigation-sub-nav" data-cmp-config-type="standard">
<ul class="p-nav-subnav   p-nav-subnav-item-inner-underlined" role="menu" aria-hidden="true">
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--general ">
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ofertas" role="menuitem" class="p-nav-subnav-link p-nav-subnav-link--highlight js-top-level" data-category-id="mens-sale">
<span class>
Ofertas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/novedades" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-new-arrivals">
<span class>
Novedades
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/colecciones/lifestyle/colecciones/suede-xl" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-lifestyle-collections-suede-xl">
<span class>
Suede XL
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/guia-de-regalos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="gift-guide">
<span class>
San Valentín
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/tendencias-actuales" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-trending-now">
<span class>
Tendencias actuales
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/colecciones/lifestyle/colecciones/terrace" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-lifestyle-collections-terrace">
<span class>
Terrace
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/basicos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-puma-essentials">
<span class>
Básicos
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/classics" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-puma-classics">
<span class>
Classics
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/valencia-cf" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-valencia-cf">
<span class>
Valencia CF
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/nitro" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-performance-nitro">
<span class>
NITRO™
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/laliga" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-laliga">
<span class>
LaLiga
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/deportes-de-motor/speedcat" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-motorsport-speedcat">
<span class>
Speedcat
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/hombre/calzado" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="mens-shoes">
<span class>
Calzado
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/zapatillas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-sneakers">
<span class>
Zapatillas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/terrace" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-terrace">
<span class>
Terrace
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/running" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-running">
<span class>
Running
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/futbol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-football">
<span class>
Fútbol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/training" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-training-&amp;-gym">
<span class>
Training
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/baloncesto" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-basketball">
<span class>
Baloncesto
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/deportes-de-motor" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-motorsport">
<span class>
Deportes de motor
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/golf" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-golf">
<span class>
Golf
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/zapatillas-de-casa" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-slippers">
<span class>
Zapatillas de casa
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/balonmano" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-handball">
<span class>
Balonmano
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/calzado-para-deportes-de-interior" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-indoor-shoes">
<span class>
Calzado para deportes de interior
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/botas-de-seguridad" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-safety-boots">
<span class>
Botas de seguridad
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/padel" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-padel">
<span class>
Padel
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/calzado/calzado-de-invierno" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-shoes-winter-shoes">
<span class>
Calzado de invierno
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/hombre/ropa" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="mens-clothing">
<span class>
Ropa
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/camisetas-y-tops" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-t-shirts-&amp;-tops">
<span class>
Camisetas y tops
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/polos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-polos">
<span class>
Polos
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/camisetas-deportivas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-jerseys">
<span class>
Camisetas deportivas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/sudaderas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-sweatshirts-&amp;-hoodies">
<span class>
Sudaderas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/chaquetas-de-invierno" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-winter-jackets">
<span class>
Chaquetas de invierno
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/chaquetas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-jackets">
<span class>
Chaquetas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/shorts" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-shorts">
<span class>
Shorts
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/pantalones-deportivos-y-chandal" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-pants">
<span class>
Pantalones deportivos & Chándal
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/chandales" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-tracksuits">
<span class>
Chándales
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/conjuntos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-all-matching-sets">
<span class>
Conjuntos
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/ropa-interior" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-underwear">
<span class>
Ropa interior
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/ropa/calcetines" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-clothing-socks">
<span class>
Calcetines
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/hombre/accesorios" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="mens-accessories">
<span class>
Accesorios
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/accesorios/bolsas-y-bolsos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-accessories-bags">
<span class>
Bolsas y bolsos
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/accesorios/mochilas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-accessories-backpacks">
<span class>
Mochilas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/accesorios/gorros-y-gorras" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-accessories-hats-&amp;-headwear">
<span class>
Gorros y gorras
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/accesorios/gafas-de-sol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-accessories-sunglasses">
<span class>
Gafas de sol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/accesorios/cinturones" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-accessories-belts">
<span class>
Cinturones
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/accesorios/balones" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-accessories-balls">
<span class>
Balones
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/accesorios/guantes" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-accessories-gloves">
<span class>
Guantes
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/accesorios/gorros-de-invierno" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-accessories-winter-hats">
<span class>
Gorros de invierno
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/hombre/deportes" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="mens-sport">
<span class>
Deportes
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/running" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sport-running">
<span class>
Running
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/futbol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sport-football">
<span class>
Fútbol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/baloncesto" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sport-basketball">
<span class>
Baloncesto
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/training" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sport-training-&amp;-gym">
<span class>
Training
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/golf" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sport-golf">
<span class>
Golf
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/deportes-de-motor" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sport-motorsport">
<span class>
Deportes de motor
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/handball" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sport-handball">
<span class>
Handball
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/e-sport" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sports-esport">
<span class>
E-sport
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/yoga" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sport-yoga">
<span class>
Yoga
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/senderismo" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sport-hiking">
<span class>
Senderismo
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/hombre/deportes/padel" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="mens-sport-padel">
<span class>
Pádel
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
</ul>
</div>
</li>
<li class="p-nav-item js-nav-item" role="presentation">
<a href="/es/es/nino" role="menuitem" class="p-nav-item-link js-top-level" data-category-id="kids">
<span class="p-nav-item-link-inner">
Niño
</span>
</a>
<div class="p-nav-item-subnav js-cmp" role="presentation" data-cmp="header-navigation-sub-nav" data-cmp-config-type="standard">
<ul class="p-nav-subnav   p-nav-subnav-item-inner-underlined" role="menu" aria-hidden="true">
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--general ">
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/ofertas" role="menuitem" class="p-nav-subnav-link p-nav-subnav-link--highlight js-top-level" data-category-id="kids-sale">
<span class>
Ofertas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/novedades" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-new-arrivals">
<span class>
Novedades
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/basicos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-essentials">
<span class>
Básicos
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/conjuntos-infantiles" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-infant-sets">
<span class>
Conjuntos infantiles
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/ropa-para-estar-en-casa" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-loungewear">
<span class>
Ropa para estar en casa
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/nino/nino" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="kids-boys">
<span class>
Niño
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nino/calzado" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-boys-shoes">
<span class>
Calzado
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nino/ropa" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-boys-clothing">
<span class>
Ropa
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nino/accesorios" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-boys-accessories">
<span class>
Accesorios
</span>
</a>
</li>
</ul>
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-nav-subnav-item-group-title">Comprar por Edad</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nino/entre-0-y-4-anos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-boys-age-0-4-years">
<span class>
Entre 0 y 4 Años
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nino/entre-4-y-8-anos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-boys-age-4-8-years">
<span class>
Entre 4 y 8 Años
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nino/entre-8-y-16-anos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-boys-age-8-16-years">
<span class>
Entre 8 y 16 Años
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/nino/nina" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="kids-girls">
<span class>
Niña
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nina/calzado" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-girls-shoes">
<span class>
Calzado
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nina/ropa" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-girls-clothing">
<span class>
Ropa
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nina/accesorios" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-girls-accessories">
<span class>
Accesorios
</span>
</a>
</li>
</ul>
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-nav-subnav-item-group-title">Comprar por Edad</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nina/entre-0-y-4-anos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-girls-age-0-4-years">
<span class>
Entre 0 y 4 Años
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nina/entre-4-y-8-anos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-girls-age-4-8-years">
<span class>
Entre 4 y 8 Años
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/nina/entre-8-y-16-anos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-girls-age-8-16-years">
<span class>
Entre 8 y 16 Años
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/nino/productos" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="kids-shop-by-product">
<span class>
Productos
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/calzado" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-shoes">
<span class>
Calzado
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/chaquetas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-jackets">
<span class>
Chaquetas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/sudaderas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-sweatshirts-&amp;-hoodies">
<span class>
Sudaderas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/camisas-y-camisetas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-t-shirts-&amp;-tops">
<span class>
Camisas y camisetas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/pantalones-deportivos-y-chandal" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-pants-&amp;-joggers">
<span class>
Pantalones deportivos y Chándal
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/chandales" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-tracksuits">
<span class>
Chándales
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/sets-y-conjuntos" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-sets-&amp;-outfits">
<span class>
Sets y Conjuntos
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/ropa-interior" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-underwear">
<span class>
Ropa interior
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/calcetines" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-socks">
<span class>
Calcetines
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/vestidos-y-faldas" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-dresses-&amp;-skirts">
<span class>
Vestidos y faldas
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/shorts" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-shorts">
<span class>
Shorts
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/productos/accesorios" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-product-accessories">
<span class>
Accesorios
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/nino/colecciones" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="kids-collections">
<span class>
Colecciones
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/colecciones/coleccion-rs" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-collections-rs-collection">
<span class>
Colección RS
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/colecciones/puma-rider-pack" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-collections-puma-rider-pack">
<span class>
PUMA Rider Pack
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/colecciones/puma-x-l.o.l-surprise" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-collections-lol-surprise">
<span class>
PUMA x L.O.L SURPRISE
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/colecciones/puma-x-miraculous" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-collections-miraculous">
<span class>
PUMA x MIRACULOUS
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/colecciones/puma-x-spongebob" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-collections-spongebob">
<span class>
PUMA x SPONGEBOB
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/nino/deportes" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="kids-shop-by-sports">
<span class>
Deportes
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/deportes/futbol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-sports-football">
<span class>
Fútbol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/deportes/deportes-de-motor" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-sports-motorsport">
<span class>
Deportes de motor
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/deportes/running-y-training" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-sports-running-and-training">
<span class>
Running y training
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/nino/deportes/otros-deportes" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="kids-shop-by-sports-other-sports">
<span class>
Otros deportes
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
</ul>
</div>
</li>
<li class="p-nav-item js-nav-item" role="presentation">
<a href="/es/es/fenty-x-puma" role="menuitem" class="p-nav-item-link js-top-level" data-category-id="fenty-x-puma">
<span class="p-nav-item-link-inner">
FENTY x PUMA
</span>
</a>
</li>
<li class="p-nav-item js-nav-item" role="presentation">
<a href="/es/es/colecciones" role="menuitem" class="p-nav-item-link js-top-level" data-category-id="collections">
<span class="p-nav-item-link-inner">
Colecciones
</span>
</a>
<div class="p-nav-item-subnav js-cmp" role="presentation" data-cmp="header-navigation-sub-nav" data-cmp-config-type="null">
<ul class="p-nav-subnav   p-nav-subnav-item-inner-underlined" role="menu" aria-hidden="true">
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/colecciones/select" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="collections-select">
<span class>
SELECT
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/colecciones/select/colaboraciones" role="menuitem" class="p-nav-subnav-link p-nav-subnav-link--bold js-top-level" data-category-id="select-collaborations">
<span class>
Colaboraciones
</span>
</a>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colaboraciones/puma-x-dapper-dan" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-select-collaborations-dapper-dan">
<span class>
PUMA x DAPPER DAN
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colaboraciones/puma-x-liberty" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="select-liberty">
<span class>
PUMA x Liberty
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colaboraciones/puma-x-perks-and-mini" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="select-perks-and-mini">
<span class>
PUMA x Perks And Mini
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colaboraciones/puma-x-pleasures" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-select-collaborations-pleasures">
<span class>
PUMA x PLEASURES
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colaboraciones/puma-x-rhuigi" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-select-collaborations-rhuigi">
<span class>
PUMA x RHUIGI
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colaboraciones/puma-x-bmw" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-BMW">
<span class>
PUMA x BMW
</span>
</a>
</li>
<li class=" p-nav-subnav-link-last-child">
<a href="/es/es/colecciones/select/colaboraciones/puma-x-butter-goods" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="select-buttergoods">
<span class>
PUMA x Butter Goods
</span>
</a>
</li>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/colecciones/select/colecciones" role="menuitem" class="p-nav-subnav-link p-nav-subnav-link--bold js-top-level" data-category-id="select-collections">
<span class>
Colecciones
</span>
</a>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colecciones/puma-180" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-select-collections-puma-180">
<span class>
PUMA 180
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colecciones/clyde" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-select-collections-clyde">
<span class>
Clyde
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colecciones/velophasis" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="select-collections-velophasis">
<span class>
Velophasis
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colecciones/mmq" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="select-mmq-earthbreak">
<span class>
MMQ
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/select/colecciones/yona-sunp%C5%8D" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-select-collections-sunpo">
<span class>
YONA SUNPŌ
</span>
</a>
</li>
<li class=" p-nav-subnav-link-last-child">
<a href="/es/es/colecciones/select/colecciones/the-neverworn" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="select-the-neverworn">
<span class>
The NeverWorn
</span>
</a>
</li>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/colecciones/lifestyle" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="collections-lifestyle">
<span class>
Lifestyle
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/colecciones/lifestyle/colaboraciones" role="menuitem" class="p-nav-subnav-link p-nav-subnav-link--bold js-top-level" data-category-id="collections-lifestyle-collaborations">
<span class>
Colaboraciones
</span>
</a>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colaboraciones/puma-x-8enjamin" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-collaborations-8enjamin">
<span class>
PUMA x 8ENJAMIN
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colaboraciones/puma-x-ragged-priest" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collectons-lifestyle-collaborations-ragged-priest">
<span class>
PUMA x RAGGED PRIEST
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colaboraciones/puma-x-ripndip" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-collaborations-ripndip">
<span class>
PUMA x RIPNDIP
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colaboraciones/puma-x-smurfs" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-collaborations-smurfs">
<span class>
PUMA x SMURFS
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colaboraciones/puma-x-spongebob" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-collaborations-spongebob">
<span class>
PUMA x SPONGEBOB
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colaboraciones/puma-x-staple" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-collaborations-staple">
<span class>
PUMA x STAPLE
</span>
</a>
</li>
<li class=" p-nav-subnav-link-last-child">
<a href="/es/es/colecciones/lifestyle/colaboraciones/puma-con-swarovski-crystals" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-collaborations-swarovski">
<span class>
PUMA CON SWAROVSKI CRYSTALS
</span>
</a>
</li>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/colecciones/lifestyle/colecciones" role="menuitem" class="p-nav-subnav-link p-nav-subnav-link--bold js-top-level" data-category-id="collections-lifestyle-collections">
<span class>
Colecciones
</span>
</a>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colecciones/palermo" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-collections-palermo">
<span class>
Palermo
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colecciones/ca-pro" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-ca-pro">
<span class>
CA Pro
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colecciones/cali" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="cali-collection">
<span class>
Cali
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colecciones/mayze" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-mayze">
<span class>
Mayze
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colecciones/slipstream" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-slipstream">
<span class>
Slipstream
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/estilo-de-vida/rider" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="rider-collection">
<span class>
PUMA Rider Pack
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colecciones/coleccion-rs" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-rs-collection">
<span class>
Colección RS
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colecciones/suede" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-suede-classic">
<span class>
Suede
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colecciones/terrace" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-collections-terrace">
<span class>
Terrace
</span>
</a>
</li>
<li class="p-nav-subnav-tier4">
<a href="/es/es/colecciones/lifestyle/colecciones/nitro" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-extent-nitro">
<span class>
NITRO™
</span>
</a>
</li>
<li class=" p-nav-subnav-link-last-child">
<a href="/es/es/colecciones/lifestyle/colecciones/puma-75-years" role="menuitem" class="p-nav-subnav-tier js-top-level" data-category-id="collections-lifestyle-puma-75-years">
<span class>
PUMA 75 Years
</span>
</a>
</li>
</li>
</ul>
</div>
</div>
</li>
</ul>
</div>
</li>
<li class="p-nav-item js-nav-item" role="presentation">
<a href="/es/es/deportes" role="menuitem" class="p-nav-item-link js-top-level" data-category-id="sports">
<span class="p-nav-item-link-inner">
Deportes
</span>
</a>
<div class="p-nav-item-subnav js-cmp" role="presentation" data-cmp="header-navigation-sub-nav" data-cmp-config-type="null">
<ul class="p-nav-subnav   p-nav-subnav-item-inner-underlined" role="menu" aria-hidden="true">
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/deportes/fitness-y-training" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="sports-fitness-and-training">
<span class>
Fitness y training
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/fitness-y-training/calzado-para-el-gimnasio" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="sports-fitness-and-training-gym-shoes">
<span class>
Calzado para el gimnasio
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/fitness-y-training/ropa-para-el-gimnasio" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="sports-fitness-and-training-gym-styles">
<span class>
Ropa para el gimnasio
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/fitness-y-training/accesorios-de-gimnasio" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="sports-fitness-and-training-accessories">
<span class>
Accesorios de gimnasio
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/fitness-y-training/puma-x-pamela-reif" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="sports-fitness-and-training-pamela-reif-redirect">
<span class>
PUMA x PAMELA REIF
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/fitness-y-training/puma-x-lemlem" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="sports-fitness-and-training-puma-x-lemlem">
<span class>
PUMA x lemlem
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/fitness-y-training/yoga" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-performance-yoga">
<span class>
Yoga
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/fitness-y-training/cloudspun" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="sports-fitness-and-training-cloudspun">
<span class>
Cloudspun
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/fitness-y-training/ropa-de-fitness-moldeadora" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="sports-fitness-and-training-eversculpt">
<span class>
Ropa de fitness moldeadora
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/fitness-y-training/coleccion-modest-activewear" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="sports-modest-activewear">
<span class>
Colección Modest Activewear
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/deportes/running" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="collections-performance-running">
<span class>
Running
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/zapatillas-de-running" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-performance-running-shoes">
<span class>
Zapatillas de running
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/ropa-de-running" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-performance-running-apparel">
<span class>
Ropa de running
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/accesorios-de-running" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-performance-running-accessories">
<span class>
Accesorios de running
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/nitro" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-performance-nitro">
<span class>
NITRO™
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/seasons" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-running-seasons">
<span class>
SEASONS
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/running-diaro" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-running-everyday-running-shoes">
<span class>
Running Diaro
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/running-de-competicion" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-running-raceday-running-shoes">
<span class>
Running de competición
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/trail-running" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-running-trail">
<span class>
Trail running
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/zapatillas-de-atletismo" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="speed-running">
<span class>
Zapatillas de atletismo
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/running/puma-x-ciele" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-running-ciele">
<span class>
PUMA x CIELE
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/deportes/futbol" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="collections-performance-football">
<span class>
Fútbol
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/botas-de-futbol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-performance-football-boots">
<span class>
Botas de fútbol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/ropa-de-futbol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-apparel">
<span class>
Ropa de fútbol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/accesorios-de-futbol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-accessories">
<span class>
Accesorios de fútbol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/camisetas-de-futbol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-jerseys">
<span class>
Camisetas de fútbol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/phenomenal-pack" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-phenomenal-pack">
<span class>
Phenomenal Pack
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/caf-copa-africa-de-naciones" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-afcon">
<span class>
CAF Copa Africa de Naciones
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/selecciones-nacionales" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-national-teams">
<span class>
Selecciones Nacionales
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/equipos-de-futbol" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-clubs">
<span class>
Equipos de fútbol
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/manchester-city" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="manchester-city-collection">
<span class>
Manchester City
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/ac-milan" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="ac-milan">
<span class>
AC Milan
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/bvb" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="bvb">
<span class>
BVB
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/olympique-de-marseille" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-olympique-de-marseille">
<span class>
Olympique de Marseille
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/futbol/neymar-jr" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-football-neymar">
<span class>
Neymar Jr
</span>
</a>
</li>
</ul>
</div>
</div>
</li>
<li class="p-nav-subnav-item" role="presentation">
<div class="p-nav-subnav-item-inner p-nav-subnav-item-inner--categories ">
<a href="/es/es/deportes/deportes-de-motor" role="menuitem" class="p-nav-subnav-item-title js-top-level" data-category-id="collections-motorsport">
<span class>
Deportes de motor
</span>
</a>
<div class="p-nav-subnav-item-groups">
<ul class="p-nav-subnav-item-group" role="menu" aria-hidden="true">
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/deportes-de-motor/calzado-para-deportes-de-motor" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-motorsport-shoes">
<span class>
Calzado para deportes de motor
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/deportes-de-motor/ropa-para-deportes-de-motor" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-motorsport-apparel">
<span class>
Ropa para deportes de motor
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/deportes-de-motor/accesorios-para-deportes-de-motor" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="collections-motorsport-accessories">
<span class>
Accesorios para deportes de motor
</span>
</a>
</li>
<li class="p-sub-nav-tier2">
<a href="/es/es/deportes/deportes-de-motor/formula-1" role="menuitem" class="p-nav-subnav-link js-top-level" data-category-id="sports-motorsport-formula-1">
<span class>
Formula 1
</span>
</a>
</li>