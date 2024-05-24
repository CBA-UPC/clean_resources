"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["loader.ThreadHeaderHandler","icons/IconCircleFill-js","icons/IconClockCircleFill-js","icons/IconFeedback-js","icons/IconFollowArrowLeft-js","icons/IconFollowArrows-js","icons/IconPin-js","icons/Ico,s=function(e,t){var i,r=(null===(i=t.entry.content)||void 0===i||null===(i=i.userThreadHeader)||void 0===i?void 0:i.userScreenName)||"";return c.ZP.selectByScreenName(e,r)};const d=(0,a.Z)().propsFromState((function(){return{user:s}}))((function(e){var t=e.user;return t?n.createElement(l.ZP,{avatarUri:t.profile_image_url_https,displayMode:"UserCompact",isBlueVerified:t.is_blue_verified,isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,userId:t.id_str,withLink:!0}):null}));const u=o.iH({component:d,shouldDisplayBorder:(0,r.Z)(!1),divider:{top:!1,bottom:!1}}).getHandler()},641310:(e,t,i)=>{i.d(t,{Z:()=>C});var r=i(709249),o=i(887371),n=i(545754),l=i(486906),a=i(202784),c=i(325686),s=i(645184),d=i.n(s),u=i(285042),m=i(882392),h=i(973186),y=d().f1a1b791,p=d().if2bf8b4,v=d().f3624b5c,b=d().b4b3b113,f=d().be222050,g=d().hcbbe447,C=function(e){(0,n.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,r.Z)(this,i),t.apply(this,arguments)}return(0,o.Z)(i,[{key:"render",value:function(){var e=this.props,t=e.color,i=e.nativeID,r=e.style;return a.createElement(c.Z,{style:[w.root,r]},a.createElement(u.default,{style:[w.icon,t&&w[t]]}),a.createElement(m.ZP,{color:t,nativeID:i,size:"subtext2"},this._getPromotedLabel()))}},{key:"_getPromotedLabel",value:function(){var e=this.props,t=e.contentAuthorId,i=e.label,r=e.promotedContent,o=r.adMetadataContainer,n=r.advertiser,l=r.advertiser_name,a=r.disclosure_type,c=t&&n&&t===n.id_str,s="string"==typeof a&&"political"===a.toLowerCase(),d="string"==typeof a&&"issue"===a.toLowerCase(),u=!(!o||"POLITICAL"!==o.disclaimerType)||s,m=!(!o||"ISSUE"!==o.disclaimerType)||d,h=(o||{}).removePromotedAttributionForPreroll;return i||(!l||c||h?u?v:m?f:p:u?b({fullName:l}):m?g({fullName:l}):y({fullName:l}))}}]),i}(a.Component);C.defaultProps={color:"gray700"};var w=h.Z.create((function(e){return{root:{alignItems:"center",flexDirection:"row"},icon:{color:e.colors.gray700,height:"1em",marginEnd:e.spaces.space4,flexShrink:0},gray700:{color:e.colors.gray700},white:{color:e.colors.white}}}))},894963:(e,t,i)=>{i.d(t,{Z:()=>M});var r=i(202784),o=i(645184),n=i.n(o),l=i(55269),a=i(81921),c=i(90649),s=i(240811),d=i(914481),u=i(517272),m=i(407307),h=i(106059),y=i(880166),p=i(440271),v=i(511258),b=i(45680),f=i(833131),g=i(575629),C=i(27895),w=i(156538),Z=i(307742),x=i(225163),E=i(721783),L=i(882392),S=i(537800),k=i(430318),I=i(973186),R=i(849376),T=n().ae408b76,B=n().j355f008,D=n().habf9678,P=n().db0798ed,z=n().dc716ec9,H=function(e){var t=e.text,i=(0,k.Z)().direction;return r.createElement(L.ZP,{dir:i,withHashflags:!0},t)},_=function(e,t){return t?T:function(e){var t=r.createElement(H,{text:e});return r.createElement(n().I18NFormatMessage,{$i18n:"fcd931ed"},t)}(e)},F=I.Z.create((function(e){return{small:{height:e.lineHeights.subtext3,width:e.lineHeights.subtext3},large:{height:e.lineHeights.subtext1,width:e.lineHeights.subtext1},xLarge:{height:e.lineHeights.headline1,width:e.lineHeights.headline1}}})),N=I.Z.create((function(e){return{circle:{color:e.colors.primary,width:"0.5em"},colorDeepGray:{color:e.colors.gray700},colorBlue:{color:e.colors.blue500},colorGreen:{color:e.colors.green500},colorOrange:{color:e.colors.orange500},colorPrimary:{color:e.colors.primary},colorRed:{color:e.colors.magenta500},grayscaleImage:{borderRadius:e.borderRadii.infinite,filter:"grayscale(100%)"},brandColor:{color:e.colors.brandColor}}}));const M=function(e){var t=e.contextType,i=e.iconColor,o=e.iconSize,n=e.link,L=e.retweetData,k=e.text,T=e.topicData,M=e.userAvatarUrls,U=L||{},Q=U.isSelfRetweet,V=U.name,W=U.screenName,j=function(e,t,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=F[t],L=[i?{color:I.Z.theme.colors[i]}:N.colorDeepGray,n],k=r.createElement(l.default,{style:L}),T=r.createElement(a.default,{style:L}),B=r.createElement(c.default,{style:L}),D=r.createElement(s.default,{style:L}),P=r.createElement(d.default,{style:L}),z=r.createElement(u.default,{style:N.circle}),H=r.createElement(m.default,{style:L}),_=r.createElement(h.default,{style:L}),M=r.createElement(y.default,{style:L}),U=r.createElement(p.default,{style:L}),Q=r.createElement(v.default,{style:L}),V=r.createElement(b.default,{style:L}),W=r.createElement(f.default,{style:L}),j=r.createElement(g.default,{style:L}),A=r.createElement(C.default,{style:L}),O=r.createElement(w.default,{style:L}),G=r.createElement(Z.default,{style:L}),K=r.createElement(x.default,{style:L}),Y=r.createElement(S.Z,{borderColor:"cellBackground",userAvatarSize:t,userAvatarUrls:o}),X=r.createElement(E.default,{style:L});switch(e){case R.Q.Pin:case R.Q.ReplyPin:return k;case R.Q.Retweet:return T;case R.Q.Like:return B;case R.Q.Follow:return D;case R.Q.Moment:return P;case R.Q.NewTweets:return z;case R.Q.Reply:case R.Q.Conversation:return H;case R.Q.Feedback:return _;case R.Q.Topic:return M;case R.Q.List:return U;case R.Q.Location:return Q;case R.Q.Community:return V;case R.Q.Spaces:return W;case R.Q.Sparkle:return j;case R.Q.SmartBlockExpiration:return A;case R.Q.SocialProof:case R.Q.FollowFollowed:return K;case R.Q.FollowMutual:return G;case R.Q.FollowFollowing:return O;case R.Q.Facepile:return Y;case R.Q.Bird:return X;case R.Q.TextOnly:default:return null}}(t,o,i,M);switch(t){case R.Q.Retweet:return{Icon:j,text:k||_(V,Q),link:W?"https://twitter.com/".concat(W):void 0};case R.Q.Pin:return{Icon:j,text:k||B};case R.Q.ReplyPin:return{Icon:j,text:D};case R.Q.Topic:return{Icon:j,accessibilityLabel:"Recommendation"===(null==T?void 0:T.functionalityType)||"RecWithEducation"===(null==T?void 0:T.functionalityType)?z({topicName:k}):P({topicName:k}),text:k?r.createElement(H,{text:k}):null,link:n};default:return{Icon:j,text:k?r.createElement(H,{text:k}):null,link:n}}}},309524:(e,t,i)=>{i.d(t,{Z:()=>w});var r=i(459740),o=i(709249),n=i(887371),l=i(545754),a=i(486906),c=(i(136728),i(202784)),s=i(325686),d=i(882392),u=i(137541),m=i(377089),h=i(973186),y=i(191062),p=i(868011),v=i(894963),b=i(849376),f=["avatarSize","bottomControl","iconStyle","nativeID","onLayout","rightControl","style","testID","textColor","textSize","topControl","weight","withBottomBorder","withLeftPadding","withTextCentered"],g=function(e){(0,l.Z)(i,e);var t=(0,a.Z)(i);function i(){return(0,o.Z)(this,i),t.apply(this,arguments)}return(0,n.Z)(i,[{key:"render",value:function(){var e=this,t=this.props,i=t.avatarSize,o=t.bottomControl,n=t.iconStyle,l=t.nativeID,a=t.onLayout,h=t.rightControl,y=t.style,p=t.testID,b=t.textColor,g=t.textSize,w=t.topControl,Z=t.weight,x=(t.withBottomBorder,t.withLeftPadding),E=(t.withTextCentered,(0,r.Z)(t,f)),L=(0,v.Z)(E),S=L.Icon,k=L.accessibilityLabel,I=L.link,R=L.text,T=c.createElement(d.ZP,{accessibilityLabel:k,color:b,nativeID:l,numberOfLines:2,size:g,testID:p,weight:Z},R),B=this._getStyles(),D=B.cellStyle,P=B.viewStyle;return R?c.createElement(m.ZP.UseProps,null,(function(t){return c.createElement(c.Fragment,null,w||null,c.createElement(s.Z,{onLayout:a,style:[y,P,t.socialContextRefreshEnabled()&&!x&&C.socialContextRefresh]},c.createElement(u.Z,{avatarCell:S||(x?null:void 0),avatarCellStyle:[n,C.socialContextIconColumn,!x&&C.unsetIconWidth,t.socialContextRefreshEnabled()&&!x&&C.socialContextRefreshIcon],avatarSize:i,cellStyle:D},c.createElement(s.Z,{style:C.cellWrapper},c.createElement(s.Z,{style:[C.socialContextTextColumn,t.socialContextRefreshEnabled()&&!x&&C.socialContextRefreshTextColumn]},I?e._renderLink(I,T):T),h||null)),o||null))})):null}},{key:"_renderLink",value:function(e,t){var i=this.props,r=i.contextType,o=i.nativeID,n=i.onClick,l=i.retweetData,a=i.textColor,s=i.topicData,u=(l||{}).screenName,m=c.createElement(d.ZP,{color:a,link:e,nativeID:o,onClick:n},t);return r===b.Q.Topic&&s?c.createElement(y.Z,{topicId:s.topicId},m):r===b.Q.Retweet&&u?c.createElement(p.Z,{screenName:u},m):m}},{key:"_getStyles",value:function(){var e=this.props,t=e.bottomControl,i=e.contextType,r=e.withBottomBorder,o=e.withTextCentered,n=i===b.Q.TextOnly,l=r?[C.bottomBorderMargin,!!t&&C.bottomBorder]:[],a=r&&!t?[C.bottomBorder]:[];return n&&a.push(C.topicContext),o&&a.push(C.socialContextTextCentered),{viewStyle:l,cellStyle:a}}}]),i}(c.PureComponent);g.defaultProps={iconSize:"small",textColor:"gray700",textSize:"subtext2",withBottomBorder:!1,withLeftPadding:!0,withTextCentered:!1};var C=h.Z.create((function(e){return{socialContextIconColumn:{alignItems:"flex-end",justifyContent:"center"},bottomBorderMargin:{marginBottom:e.componentDimensions.gutterVertical},cellWrapper:{flexDirection:"row"},bottomBorder:{paddingBottom:e.spaces.space4,borderBottomStyle:"solid",borderBottomWidth:e.borderWidths.small,borderBottomColor:e.colors.borderColor},topicContext:{paddingBottom:"calc(".concat(e.spaces.space4," + ").concat(e.spaces.space2,")")},socialContextTextColumn:{alignItems:"flex-start",flexShrink:1,justifyContent:"center"},unsetIconWidth:{flexBasis:"unset"},socialContextRefreshIcon:{marginEnd:e.spaces.space8},socialContextRefresh:{marginBottom:e.spaces.space8},socialContextRefreshTextColumn:{minHeight:e.spaces.space32},socialContextTextCentered:{justifyContent:"center"}}}));const w=g},849376:(e,t,i)=>{i.d(t,{Q:()=>r});i(202784);var r=Object.freeze({Bird:"Bird",Community:"Community",Conversation:"Conversation",Facepile:"Facepile",Feedback:"Feedback",Follow:"Follow",FollowFollowed:"FollowFollowed",FollowFollowing:"FollowFollowing",FollowMutual:"FollowMutual",Like:"Like",List:"List",Location:"Location",Megaphone:"Megaphone",Moment:"Moment",NewTweets:"NewTweets",NewUser:"NewUser",Pin:"Pin",Reply:"Reply",RelatedTweets:"RelatedTweets",ReplyPin:"ReplyPin",Retweet:"Retweet",SmartBlockExpiration:"SmartBlockExpiration",SocialProof:"SocialProof",Spaces:"Spaces",Sparkle:"Sparkle",TextOnly:"TextOnly",Topic:"Topic",Trending:"Trending"})},988403:(e,t,i)=>{i.d(t,{Z:()=>b});var r=i(807896),o=i(459740),n=i(196234),l=i(202784),a=i(325686),c=i(645184),s=i.n(c),d=i(833131),u=i(825301),m=i(971575),h=i(566970),y=i(973186),p=i(481142),v=["accessibilityLabel","presenceRingType","spaceId"];const b=function(e){var t=m.Z.useAnalytics(),i=l.useState(),a=(0,n.Z)(i,2),c=a[0],s=a[1],d=!!(c&&c>70),u=e.accessibilityLabel,y=e.presenceRingType,b=(e.spaceId,(0,o.Z)(e,v)),g=u||function(e,t){switch(e){case"audiospace":return w.activeAudioSpace({screenName:t});case"livevideo":return w.activeLiveVideo({screenName:t});default:return}}(y,e.screenName);l.useEffect((function(){switch(y){case"audiospace":t.scribe({action:"impression",element:"audiospace_ring"});break;case"livevideo":t.scribe({action:"impression",element:"livevideo_ring"})}}),[y]);var C=l.useCallback((function(e){return l.createElement(h.Z.Default,(0,r.Z)({},e,{type:y}))}),[y]);return l.createElement(p.default,(0,r.Z)({},b,{BorderComponent:C,accessibilityLabel:g,avatarRef:function(e){if(e){var t=e.getBoundingClientRect();t.width!==c&&s(t.width)}},borderWidth:d?"large":"medium",decoration:l.createElement(f,{isWide:d,type:y}),gapWidth:d?"space4":"space2",onClick:function(){switch(y){case"audiospace":t.scribe({action:"click",element:"audiospace_ring"});break;case"livevideo":t.scribe({action:"click",element:"livevideo_ring"})}},withLink:!0}))};function f(e){switch(e.type){case"audiospace":case"livevideo":return l.createElement(g,e);default:return null}}function g(e){return"livevideo"===e.type?l.createElement(u.ZP,{style:[C.liveVideoLabel,e.isWide?C.borderWide:C.borderNarrow],type:"live"}):l.createElement(a.Z,{style:[C.root,e.isWide?C.rootWide:C.rootNarrow]},l.createElement(h.Z.Default,{style:[C.spaceGradient,e.isWide?C.borderWide:C.borderNarrow]},l.createElement(d.default,{style:C.spaceIcon})))}var C=y.Z.create((function(e){var t=e.spacesPx.space16+e.spacesPx.space2,i="100%",r=e.spacesPx.space4,o=e.spacesPx.space2;return{root:{borderRadius:e.borderRadii.infinite,bottom:0,end:0,height:"30%",minHeight:t,minWidth:t,pointerEvents:"none",position:"absolute",width:"30%"},liveVideoLabel:{borderColor:e.colors.cellBackground,bottom:0,start:"50%",position:"absolute",transform:"translateX(-50%)"},rootWide:{end:-1*r,bottom:-1*r},rootNarrow:{end:-1*o,bottom:-1*o},borderWide:{borderWidth:r},borderNarrow:{borderWidth:o},spaceGradient:{justifyContent:"center",width:i,height:i,borderRadius:e.borderRadii.infinite,borderColor:e.colors.cellBackground},spaceIcon:{padding:e.spaces.space2,color:e.colors.white}}})),w={withoutUsernameFallback:s().b3688156,activeAudioSpace:s().c0eb8825,activeLiveVideo:s().d068dc6d}},819153:(e,t,i)=>{i.d(t,{ZP:()=>B});var r=i(807896),o=i(709249),n=i(887371),l=i(545754),a=i(486906),c=(i(200634),i(202784)),s=i(325686),d=i(35953),u=i(882392),m=i(137541),h=i(186454),y=i(525663),p=i(377089),v=i(77227),b=i(174062),f=i(641310),g=i(309524),C=i(894963),w=i(973186),Z=i(481142),x=i(988403),E=i(954813),L=i(695995);var S=Object.freeze({TWEET:"tweets",USER:"users"}),k=Object.freeze({UserCompact:"UserCompact",UserConcise:"UserConcise",UserDetailed:"UserDetailed",SubscribableUser:"SubscribableUser"}),I=d.Z.createLayoutCache(),R=function(e){(0,l.Z)(i,e);var t=(0,a.Z)(i);function i(){var e;(0,o.Z)(this,i);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n)))._renderUserName=function(){var t=e.props,i=t.affiliateBadgeInfo,r=t.badgeContext,o=t.disabledMessage,n=t.displayNameLabel,l=t.isBlocking,a=t.isBlueVerified,d=t.isDisabled,m=t.isFollowedBy,h=t.isProtected,y=t.isVerified,p=t.name,v=t.onScreenNameClick,b=t.promotedContent,f=t.promotedItemType,g=t.screenName,C=t.screenNameSuffix,w=t.translatorType,Z=t.verifiedType,x=t.withFollowsYou,E=t.withLink,k=c.createElement(L.Z,{affiliateBadgeInfo:i,badgeContext:r,displayNameLabel:n,isBlueVerified:a,isProtected:h,isVerified:y,name:p,onLinkClick:v,promotedContent:f===S.TWEET?b:void 0,screenName:g,screenNameSuffix:C,translatorType:w,verifiedType:Z,withFollowsYou:x&&m,withHoverCard:!l&&!d&&E,withLink:!d&&E,withScreenName:!o,withStackedLayout:!0});return o?c.createElement(s.Z,{style:T.disabledMessageContainer},k,c.createElement(u.ZP,{color:"gray700"},o)):k},e._renderSocialContext=function(){var t=e.props,i=t.avatarSize,r=t.socialContext;return r?c.createElement(p.ZP.UseProps,null,(function(e){return c.createElement(g.Z,{avatarSize:i,contextType:r.contextType,iconSize:"large",link:r.link,style:T.socialContext,text:r.text,weight:"bold",withLeftPadding:!0})})):null},e._renderUserTypeaheadSocialContext=function(){var t=e.props.socialContext,i=t&&(0,C.Z)({link:t.link,text:t.text,iconSize:"small",contextType:t.contextType})||{},r=i.Icon,o=i.text;return t?c.createElement(s.Z,{style:T.userTypeaheadSocialContext},c.createElement(s.Z,{style:T.userTypeaheadSocialContextIcon},r),c.createElement(u.ZP,{color:"gray700",numberOfLines:1,style:T.userTypeaheadSocialContextText},o)):null},e._renderHighlightedUserLabel=function(){var t=e.props.highlightedLabel;return t?c.createElement(v.Z,{label:t}):null},e._isEligibleForBio=function(){var t=e.props.displayMode;return-1!==[k.UserDetailed,k.UserConcise,k.SubscribableUser].indexOf(t)},e._handleKeyPress=function(t){t.defaultPrevented||"Enter"!==t.key||e._handleClick(t)},e._handleClick=y.Z.selectiveClickHandler((function(t){var i=e.props.onCellClick;t.preventDefault(),i&&i()})),e}return(0,n.Z)(i,[{key:"render",value:function(){var e=this.props,t=e.accessibilityChecked,i=e.accessibilityLabel,o=e.avatarDecoration,n=e.avatarShape,l=e.avatarSize,a=e.avatarUri,d=e.bottomControl,u=e.decoration,y=e.displayMode,p=e.isBlocking,v=e.isDisabled,g=e.onAvatarClick,C=e.onCellClick,w=e.onScreenNameClick,E=e.presenceIndicator,L=e.promotedContent,R=e.promotedItemType,B=e.screenName,D=e.style,P=e.testID,z=e.userId,H=e.withBottomSocialContext,_=e.withDarkerInteractiveBackground,F=e.withInteractiveStyling,N=e.withLink,M=e.withUsernameCenterAligned,U=N&&!p,Q=y===k.UserCompact||M,V=L&&R===S.USER&&"earned"!==(L.disclosure_type&&L.disclosure_type.toLowerCase())?c.createElement(f.Z,{contentAuthorId:z,promotedContent:L,style:T.promotedIndicator}):null,W={accessibilityHidden:!0,decoration:o,focusable:!1,imageLayoutCache:I,onClick:g,onHoverCardScreenNameClick:w,promotedContent:L,screenName:B,style:T.avatar,uri:a,withHoverCard:U,withLink:N,shape:n},j=c.createElement(h.Z.Consumer,null,(function(e){var t=e.avatarSize;return E?c.createElement(x.Z,(0,r.Z)({},W,E,{size:t})):c.createElement(Z.default,(0,r.Z)({size:t},W))})),A="boolean"==typeof t,O=void 0!==C,G=(A?"radio":O&&"button")||"listitem",K=this._renderUserName(),Y=this._renderHighlightedUserLabel(),X=this._renderBio(),$=Y||X||V||d,q=c.createElement(c.Fragment,null,Y,X,V,d?c.createElement(s.Z,{style:T.bottomControl},d):null);return c.createElement(b.Z,{accessibilityChecked:t,accessibilityLabel:i,accessibilityRole:G,disabled:!!v,focusable:A||O,onClick:this._handleClick,onKeyPress:this._handleKeyPress,pointerEvents:v?"none":void 0,style:[T.root,D],testID:P,withDarkerInteractiveBackground:_,withInteractiveStyling:null!=F?F:!!C},H?null:this._renderSocialContext(),c.createElement(m.Z,{avatarCell:j,avatarCellStyle:[T.avatarColumn,Q&&T.bodyColumnCentered],avatarSize:l,cellStyle:[T.bodyColumn,Q&&T.bodyColumnCentered]},c.createElement(s.Z,{style:T.body},K,u),Q?null:q,H?this._renderUserTypeaheadSocialContext():null),$&&Q?c.createElement(m.Z,{avatarCell:null,avatarCellStyle:T.avatarColumn,cellStyle:T.bodyColumn},q):null)}},{key:"_renderBio",value:function(){var e=this.props,t=e.description,i=e.displayMode,r=e.entities,o=e.userId,n=e.withheldDescription,l=e.withheldEntities;return r&&t&&this._isEligibleForBio()?c.createElement(E.Z,{description:t,entities:r,isConcise:i===k.UserConcise,style:T.bio,userId:o,withheldDescription:n,withheldEntities:l}):null}}]),i}(c.PureComponent);R.defaultProps={testID:"UserCell",withLink:!0};var T=w.Z.create((function(e){return{root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},avatarColumn:{justifyContent:"flex-start"},bodyColumn:{flexGrow:1},bodyColumnCentered:{justifyContent:"center"},avatar:{display:"block",width:"100%"},bio:{paddingTop:e.spaces.space4,whiteSpace:"normal"},socialContext:{marginBottom:e.spaces.space4},userTypeaheadSocialContext:{alignItems:"center",flexDirection:"row",textColor:e.colors.gray700},userTypeaheadSocialContextIcon:{flexShrink:0},userTypeaheadSocialContextText:{paddingStart:e.spaces.space2},body:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"},promotedIndicator:{margin:0,paddingTop:e.spaces.space4,paddingBottom:0,paddingHorizontal:0},bottomControl:{paddingTop:e.spaces.space4},disabledMessageContainer:{flexShrink:1}}}));const B=R},954813:(e,t,i)=>{i.d(t,{Z:()=>c});i(200634);var r=i(202784),o=i(882392),n=i(96847),l=i(775275),a=i(749868);const c=function(e){var t=e.description,i=e.entities,c=e.isConcise,s=e.style,d=e.testID,u=e.userId,m=e.withheldDescription,h=e.withheldEntities,y=(0,a.H)({description:t,entities:i,withheldDescription:m,withheldEntities:h}),p=y.description,v=y.entities,b=l.ZP.descriptionTextParts(p,v);return b.length?r.createElement(o.ZP,{dir:"auto",numberOfLines:c?2:void 0,style:s,testID:d},b.map((function(e,t){return r.createElement(n.ZP,{key:"user_".concat(u,"_textpart_").concat(t),linkify:!0,part:e})}))):null}},749868:(e,t,i)=>{i.d(t,{H:()=>r});i(200634);var r=function(e){var t=e.description,i=e.entities,r=e.withheldDescription,o=e.withheldEntities;return r?{description:r,entities:o}:{description:t,entities:i}}},517272:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("circle",{cx:"12",cy:"12",r:"10.3"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},27895:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM11 6v6.72l5.19 1.73.63-1.9L13 11.28V6h-2z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},106059:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},225163:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},307742:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},156538:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},511258:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},55269:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},285042:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},407307:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},81921:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},575629:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},880166:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var r=i(133028),o=i(202784),n=i(890601),l=i(783427),a=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)().direction;return(0,n.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[a.Z.root,e.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/loader.ThreadHeaderHandler.3c3afc8a.js.map			
		</a>

		<div class="right">
			<div class="nav-main">
				
						<ul><li class="nav-main__mainitem" data-priority="0"><a href="/onderwijs">Onderwijs</a><ul class="nav-main__submenu"><li><a href="/onderwijs/opleidingen">Opleidingen</a></li><li><a href="/onderwijs/voorlichting-en-ervaren">Voorlichting en ervaren</a></li><li><a href="/onderwijs/praktische-zaken">Praktische zaken</a></li><li><a href="/onderwijs/toelating-en-aanmelding">Toelating en aanmelding</a></li></ul></li><li class="nav-main__mainitem" data-priority="0"><a href="/onderzoek">Onderzoek</a><ul class="nav-main__submenu"><li><a href="/onderzoek/onderzoeknieuws">Onderzoeknieuws</a></li><li><a href="/onderzoek/faculteiten-en-instituten">Faculteiten en instituten</a></li><li><a href="/onderzoek/samenwerking">Samenwerking</a></li><li><a href="/onderzoek/prijzen-prijswinnaars">Prijzen & Prijswinnaars</a></li><li><a href="/onderzoek/onderzoeksfaciliteiten">Onderzoeksfaciliteiten</a></li><li><a href="/open-science">Open Science</a></li><li><a href="/onderzoek/onze-onderzoeksvisie/kwaliteitszorg">Onderzoeksvisitaties</a></li></ul></li><li class="nav-main__mainitem" data-priority="0"><a href="/innovatie-impact">Innovatie & Impact</a><ul class="nav-main__submenu"><li><a href="/innovatie-impact/samenwerken-met-tu-delft">Samenwerken met TU Delft</a></li><li><a href="/innovatie-impact/pioneering-tech">Pioneering Tech</a></li><li><a href="/innovatie-impact/innovation-projects">Innovation Projects</a></li><li><a href="/innovatie-impact/ondernemerschap">Ondernemerschap</a></li></ul></li><li class="nav-main__mainitem" data-priority="0"><a href="/actueel">Actueel</a><ul class="nav-main__submenu"><li><a href="/actueel/laatste-nieuws">Laatste Nieuws</a></li><li><a href="/actueel/agenda">Agenda</a></li><li><a href="/actueel/universiteitsbladen">Universiteitsbladen</a></li><li><a href="/ddream">D:DREAM</a></li><li><a href="/actueel/persvoorlichters">Persvoorlichters</a></li><li><a href="/actueel/press-kits">Press Kits</a></li><li><a href="/actueel/universiteit-van-nederland">Universiteit van Nederland</a></li><li><a href="/actueel/faces-of-science">Faces of Science</a></li><li><a href="/actueel/182nd-dies-natalis-tu-delft">182nd Dies Natalis TU Delft</a></li><li><a href="/actueel/portraits-of-science">Portraits of Science</a></li><li><a href="/stories-of-support">Stories of Support</a></li></ul></li><li class="nav-main__mainitem" data-priority="0"><a href="/over-tu-delft">Over TU Delft</a><ul class="nav-main__submenu"><li><a href="/over-tu-delft/werken-bij-tu-delft">Werken bij TU Delft</a></li><li><a href="/over-tu-delft/zoek-medewerkers">Zoek medewerkers</a></li><li><a href="/over-tu-delft/campus-life">Campus Life</a></li><li><a href="https://shop.tudelft.nl/" target="_blank">TU Delft Webshop</a></li><li><a href="/over-tu-delft/strategie">Strategie</a></li><li><a href="/over-tu-delft/feiten-en-cijfers">Feiten en Cijfers</a></li><li><a href="/over-tu-delft/organisatie">Organisatie</a></li><li><a href="/over-tu-delft/faculteiten">Faculteiten</a></li><li><a href="/over-tu-delft/alumni">Alumni</a></li><li><a href="/universiteitsfonds">Universiteitsfonds</a></li><li><a href="https://www.supporttudelft.nl/">Crowdfunding</a></li><li><a href="/over-tu-delft/bezoek-tu-delft">Bezoek TU Delft</a></li><li><a href="/over-tu-delft/contact-en-campus">Contact en Campus</a></li></ul></li></ul>
					
				


    
            
        

    
            
            
        



    <a href="/en/innovation-impact/pioneering-tech" title="Switch to the English language" class="btn--icon btn--languageSwitch" lang="en">
        <div class="icon-languageSwitch icon-languageSwitch--nl"></div>
    </a>



				<button data-target=".nav-search" class="button-reset btn--icon i-search js-modal">
					<span class="text-hide">Zoeken</span>
				</button>
			</div>
		</div>
	</div>
</nav>




<nav class="nav-overlay">
	<div class="container no-spacing">
		<ul class="list-reset nav-overlay__container"><li data-priority="0">						<div class="nav-overlay__mainitem row">
							<div class="sm-12"><a href="/onderwijs">Onderwijs</a>							<a href="#" data-altlabel="Menu sluiten" class="nav-overlay__toggle">
								Menu openen
							</a>								</div>
							</div><ul class="list-reset row nav-overlay__subitemcontainer"><li class="sm-12"><a href="/onderwijs/opleidingen" class="nav-overlay__subitem">Opleidingen</a></li><li class="sm-12"><a href="/onderwijs/voorlichting-en-ervaren" class="nav-overlay__subitem">Voorlichting en ervaren</a></li><li class="sm-12"><a href="/onderwijs/praktische-zaken" class="nav-overlay__subitem">Praktische zaken</a></li><li class="sm-12"><a href="/onderwijs/toelating-en-aanmelding" class="nav-overlay__subitem">Toelating en aanmelding</a></li></ul></li><li data-priority="0">						<div class="nav-overlay__mainitem row">
							<div class="sm-12"><a href="/onderzoek">Onderzoek</a>							<a href="#" data-altlabel="Menu sluiten" class="nav-overlay__toggle">
								Menu openen
							</a>								</div>
							</div><ul class="list-reset row nav-overlay__subitemcontainer"><li class="sm-12"><a href="/onderzoek/onderzoeknieuws" class="nav-overlay__subitem">Onderzoeknieuws</a></li><li class="sm-12"><a href="/onderzoek/faculteiten-en-instituten" class="nav-overlay__subitem">Faculteiten en instituten</a></li><li class="sm-12"><a href="/onderzoek/samenwerking" class="nav-overlay__subitem">Samenwerking</a></li><li class="sm-12"><a href="/onderzoek/prijzen-prijswinnaars" class="nav-overlay__subitem">Prijzen & Prijswinnaars</a></li><li class="sm-12"><a href="/onderzoek/onderzoeksfaciliteiten" class="nav-overlay__subitem">Onderzoeksfaciliteiten</a></li><li class="sm-12"><a href="/open-science" class="nav-overlay__subitem">Open Science</a></li><li class="sm-12"><a href="/onderzoek/onze-onderzoeksvisie/kwaliteitszorg" class="nav-overlay__subitem">Onderzoeksvisitaties</a></li></ul></li><li class="is-active" data-priority="0">						<div class="nav-overlay__mainitem row">
							<div class="sm-12"><a href="/innovatie-impact">Innovatie & Impact</a>					<a href="#" data-altlabel="Menu openen" class="nav-overlay__toggle">
						Menu sluiten
					</a>								</div>
							</div><ul class="list-reset row nav-overlay__subitemcontainer"><li class="sm-12"><a href="/innovatie-impact/samenwerken-met-tu-delft" class="nav-overlay__subitem">Samenwerken met TU Delft</a></li><li class="sm-12"><a href="/innovatie-impact/pioneering-tech" class="nav-overlay__subitem nav-overlay__subitem--active">Pioneering Tech</a></li><li class="sm-12"><a href="/innovatie-impact/innovation-projects" class="nav-overlay__subitem">Innovation Projects</a></li><li class="sm-12"><a href="/innovatie-impact/ondernemerschap" class="nav-overlay__subitem">Ondernemerschap</a></li></ul></li><li data-priority="0">						<div class="nav-overlay__mainitem row">
							<div class="sm-12"><a href="/actueel">Actueel</a>							<a href="#" data-altlabel="Menu sluiten" class="nav-overlay__toggle">
								Menu openen
							</a>								</div>
							</div><ul class="list-reset row nav-overlay__subitemcontainer"><li class="sm-12"><a href="/actueel/laatste-nieuws" class="nav-overlay__subitem">Laatste Nieuws</a></li><li class="sm-12"><a href="/actueel/agenda" class="nav-overlay__subitem">Agenda</a></li><li class="sm-12"><a href="/actueel/universiteitsbladen" class="nav-overlay__subitem">Universiteitsbladen</a></li><li class="sm-12"><a href="/ddream" class="nav-overlay__subitem">D:DREAM</a></li><li class="sm-12"><a href="/actueel/persvoorlichters" class="nav-overlay__subitem">Persvoorlichters</a></li><li class="sm-12"><a href="/actueel/press-kits" class="nav-overlay__subitem">Press Kits</a></li><li class="sm-12"><a href="/actueel/universiteit-van-nederland" class="nav-overlay__subitem">Universiteit van Nederland</a></li><li class="sm-12"><a href="/actueel/faces-of-science" class="nav-overlay__subitem">Faces of Science</a></li><li class="sm-12"><a href="/actueel/182nd-dies-natalis-tu-delft" class="nav-overlay__subitem">182nd Dies Natalis TU Delft</a></li><li class="sm-12"><a href="/actueel/portraits-of-science" class="nav-overlay__subitem">Portraits of Science</a></li><li class="sm-12"><a href="/stories-of-support" class="nav-overlay__subitem">Stories of Support</a></li></ul></li><li data-priority="0">						<div class="nav-overlay__mainitem row">
							<div class="sm-12"><a href="/over-tu-delft">Over TU Delft</a>							<a href="#" data-altlabel="Menu sluiten" class="nav-overlay__toggle">
								Menu openen
							</a>								</div>
							</div><ul class="list-reset row nav-overlay__subitemcontainer"><li class="sm-12"><a href="/over-tu-delft/werken-bij-tu-delft" class="nav-overlay__subitem">Werken bij TU Delft</a></li><li class="sm-12"><a href="/over-tu-delft/zoek-medewerkers" class="nav-overlay__subitem">Zoek medewerkers</a></li><li class="sm-12"><a href="/over-tu-delft/campus-life" class="nav-overlay__subitem">Campus Life</a></li><li class="sm-12"><a href="https://shop.tudelft.nl/" target="_blank" class="nav-overlay__subitem">TU Delft Webshop</a></li><li class="sm-12"><a href="/over-tu-delft/strategie" class="nav-overlay__subitem">Strategie</a></li><li class="sm-12"><a href="/over-tu-delft/feiten-en-cijfers" class="nav-overlay__subitem">Feiten en Cijfers</a></li><li class="sm-12"><a href="/over-tu-delft/organisatie" class="nav-overlay__subitem">Organisatie</a></li><li class="sm-12"><a href="/over-tu-delft/faculteiten" class="nav-overlay__subitem">Faculteiten</a></li><li class="sm-12"><a href="/over-tu-delft/alumni" class="nav-overlay__subitem">Alumni</a></li><li class="sm-12"><a href="/universiteitsfonds" class="nav-overlay__subitem">Universiteitsfonds</a></li><li class="sm-12"><a href="https://www.supporttudelft.nl/" class="nav-overlay__subitem">Crowdfunding</a></li><li class="sm-12"><a href="/over-tu-delft/bezoek-tu-delft" class="nav-overlay__subitem">Bezoek TU Delft</a></li><li class="sm-12"><a href="/over-tu-delft/contact-en-campus" class="nav-overlay__subitem">Contact en Campus</a></li></ul></li><li>

    
            
        

    
            
        

    
    

    

    <div  class="t3ce    frame-type-sitetud_socialmedialinks 
            
            
            
    ">
        
        
            



        
        
            

<h3 class="text-hide">Dit is het social media blok</h3>




        
        

    
    

	<ul class="list-inline">
		
			
					<li>
						<a href="https://www.facebook.com/tudelft" target="_blank" class="btn--icon i-facebook" rel="noreferrer">
							<span class="text-hide">
								
										facebook
									
							</span>
						</a>
					</li>
				
		
			
					<li>
						<a href="https://twitter.com/tudelft" target="_blank" class="btn--icon i-twitter" rel="noreferrer">
							<span class="text-hide">
								
										twitter
									
							</span>
						</a>
					</li>
				
		
			
					<li>
						<a href="https://www.instagram.com/tudelft/?hl=en" target="_blank" class="btn--icon i-instagram" rel="noreferrer">
							<span class="text-hide">
								
										instagram
									
							</span>
						</a>
					</li>
				
		
			
					<li>
						<a href="https://www.youtube.com/user/tudelft" target="_blank" class="btn--icon i-youtube" rel="noreferrer">
							<span class="text-hide">
								
										youtube
									
							</span>
						</a>
					</li>
				
		
			
					<li>
						<a href="https://www.linkedin.com/edu/delft-university-of-technology-15445" target="_blank" class="btn--icon i-linkedin" rel="noreferrer">
							<span class="text-hide">
								
										linkedin
									
							</span>
						</a>
					</li>
				
		
			
					<li>
						<a href="https://api.whatsapp.com/send?phone=3197010256278" target="_blank" class="btn--icon i-whatsapp hide-for-xxlarge" rel="noreferrer">
							<span class="text-hide">whatsapp</span>
						</a>
						<a href="https://wa.me/+3197010256278" title="Open Whatsapp conversation" target="_blank" class="btn--icon i-whatsapp show-for-xxlarge" rel="noreferrer">
							<span class="text-hide">whatsapp</span>
						</a>
					</li>
				
		
	</ul>





        
            



        
    </div>
    
        


    

    

    

</li></ul>
		<div class='language-switch'><a href="/en/innovation-impact/pioneering-tech" title="English" lang="en">English</a></div>

		<ul class="list-inline">
			<li>
				

<a href="/cookiebeleid" title="Cookie-instellingen" class="cookieButton btn--icon">
    <svg viewBox="14 13 36 44" class="cookieButton-icon">
        <circle cx="35.709" cy="22.973" fill="currentColor" r="2"/>
        <circle cx="41.875" cy="29.417" fill="currentColor" r="2"/>
        <circle cx="31.709" cy="31.417" fill="currentColor" r="2"/>
        <circle cx="24.001" cy="37.25" fill="currentColor" r="2"/>
        <circle cx="32" cy="42.292" fill="currentColor" r="2"/>
        <circle cx="38.875" cy="37.25" fill="currentColor" r="2"/>
        <path d="M32 50c-9.925 0-18-8.075-18-18 0-.505.034-1.001.074-1.494a1 1 0 0 1 1.269-.882c3.594 1.016 7.107-1.47 7.578-4.963a1 1 0 0 1 .858-.857 5.948 5.948 0 0 0 3.438-1.705 5.958 5.958 0 0 0 1.756-4.241c0-.78-.15-1.542-.447-2.266a1.002 1.002 0 0 1 .776-1.369A17.78 17.78 0 0 1 32 14c9.925 0 18 8.075 18 18s-8.075 18-18 18zM16.002 31.795A14.01 14.01 0 0 0 16 32c0 8.822 7.178 16 16 16s16-7.178 16-16-7.178-16-16-16c-.396 0-.801.019-1.233.058a7.91 7.91 0 0 1 .206 1.799 7.941 7.941 0 0 1-2.342 5.656 7.914 7.914 0 0 1-3.86 2.143c-.899 3.891-4.672 6.653-8.769 6.139z" fill="currentColor"/>
    </svg>
</a>


			</li>
			<li>
				

<a href="#" class="button-reset btn--icon btn-contrast js-contrastChanger" title="Contrast-instellingen">
    <span class="js-contrastChanger-label text-hide" data-highcontrasttext="Activeer hoog contrast" data-normalcontrasttext="Activeer normaal contrast">
        Activeer hoog contrast
    </span>
    <svg role="presentation" class="icon-contrast">
        <use xlink:href="/typo3conf/ext/tud_styling/Resources/Public/img/contrast-icon.svg#contrast-icon"></use>
    </svg>
</a>

			</li>
		</ul>

		<button class='menu menu--close button-reset js-toggle' data-target='.nav-overlay'>
			<span class='i-close'>
				<span class='text-hide'>
					Sluit menu
				</span>
			</span>
		</button>
	</div>
</nav>


<div class="modal">
	<div class="modal__content">
		
	<form action="/zoeken" method="get" class="nav-search">
		<input type="search" name="q" id="headerSearchForm-input" value="" class="autocomplete-inputField" autocomplete="off" aria-label="Zoeken">
		<button class="button-reset i-search">
			<span class="text-hide">Zoeken</span>
		</button>
	</form>

	</div>
	<button data-target="this.parent" class="menu menu--close button-reset js-modal-close">
		<span class="i-close">
			<span class="text-hide">Sluit zoek</span>
		</span>
	</button>
</div>








	<main id="main" class="mainWithOffset__full-width">
		<div class="container">
			<!--TYPO3SEARCH_begin-->
			

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1021230 class="t3ce    frame-type-gridelements_pi1 element-layout-fullScreenWidth-contentContainerWidth
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="grid-background--black
                    
                    ">
            
            
        
            <div class="row    grid grid--noPaddingBottom layout-1570700722">
                <div class="xs-12 sm-6 md-4">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1092838 class="t3ce    frame-type-image 
            
            
            
    ">
        
        
            



        
        
            






        
        
	
			<div class="image">
				
						
	

	
		
				<a href="/innovatie-impact/pioneering-tech">
					
	
			
	
			<picture>
				
				<img class=" " src="https://filelist.tudelft.nl/TUDelft/Technology_Transfer/Pioneering%20Tech/Pioneering%20Tech%20logo%20-%20web.png" width="680" height="128" alt="" />
			</picture>
		

		

				</a>
			
	

	

					
			</div>
		


        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
                <div class="xs-12 sm-6 md-8">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1109970 class="t3ce    frame-type-text 
            
            
            
    ">
        
        
            



        
        
            


        
    

    




        
        

    <p>TU Delft Pioneering Tech is hét online platform voor disruptors &amp; decision makers. Met nieuws, analyses en inzichten laten we zien wat nodig is om radicale innovatie te versnellen rondom sleuteltechnologieën en impact te maken voor een betere samenleving.</p>


        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
            </div>
        
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    



    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1005668 class="t3ce    frame-type-gridelements_pi1 
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="
                    
                    grid-background--boxed">
            
            
        <div class="row    grid  layout-0">
            <div class="sm-12">
                


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1005713 class="t3ce    frame-type-gridelements_pi1 
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="
                    
                    grid-background--boxed">
            
            
        
            <div class="row    grid grid--noPaddingBottom layout-0">
                <div class="xs-12 sm-6 md-8">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1109986 class="t3ce    frame-type-sitetud_card 
            
            
            
    ">
        
        
            



        
        
            






        
        
	
	
	
	
	

	<div class="grid-row ">
		<div class="sm-12">
			
					
	
			<a href="/innovatie-impact/pioneering-tech/articles/quantumzekerheid-de-qutech-belofte-ingelost" class="card
					 card--no_description
					 card--black card--colored
					 
					 card--background_gradient">

				<div class="card__contentWrapper">
					
	
			
					<picture class="card__img card__img--1109986" >
						
							<source media="(max-width: 40.063em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/9/7/csm_QuTech_5ebd09989a.webp" />
							<source media="(max-width: 63.938em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/9/7/csm_QuTech_00b65313c4.webp" />
							<source media="(min-width: 64em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/9/7/csm_QuTech_5ebd09989a.webp, https://filelist.tudelft.nl/_processed_/9/7/csm_QuTech_9ec73a605f.webp 1.5x" />
						
						
							<img style="object-position: 50% 50%;" src="https://filelist.tudelft.nl/_processed_/9/7/csm_QuTech_fbddba12ce.jpg" width="960" height="640" alt="" />
						
					</picture>
				
		


					<section class='card__content'>
						
							<div class="label">Future</div>
						
						<h3>Quantumzekerheid: de QuTech-belofte ingelost</h3>
					</section>
				</div>
			</a>
		

				
		</div>
	</div>

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
                <div class="xs-12 sm-6 md-4">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1109987 class="t3ce    frame-type-sitetud_card 
            
            
            
    ">
        
        
            



        
        
            






        
        
	
	
	
	
	

	<div class="grid-row ">
		<div class="sm-12">
			
					
	
			<a href="/innovatie-impact/pioneering-tech/articles/techniek-met-en-voor-vakmensen" class="card
					 card--no_description
					 card--black card--colored
					 
					 card--background_gradient">

				<div class="card__contentWrapper">
					
	
			
					<picture class="card__img card__img--1109987" >
						
							<source media="(max-width: 40.063em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/b/3/csm_HR_MKX05997_scaled_18f3385e5c.webp" />
							<source media="(max-width: 63.938em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/b/3/csm_HR_MKX05997_scaled_70ffaf427f.webp" />
							<source media="(min-width: 64em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/b/3/csm_HR_MKX05997_scaled_18f3385e5c.webp, https://filelist.tudelft.nl/_processed_/b/3/csm_HR_MKX05997_scaled_871aae2c48.webp 1.5x" />
						
						
							<img style="object-position: 50% 50%;" src="https://filelist.tudelft.nl/_processed_/b/3/csm_HR_MKX05997_scaled_53b5d51bf2.jpg" width="960" height="640" alt="" />
						
					</picture>
				
		


					<section class='card__content'>
						
							<div class="label">Together</div>
						
						<h3>Techniek met en voor vakmensen</h3>
					</section>
				</div>
			</a>
		

				
		</div>
	</div>

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
            </div>
        
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    


        
    


            
    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1079540 class="t3ce    frame-type-gridelements_pi1 
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="
                    
                    grid-background--boxed">
            
            
        
            <div class="row    grid grid--noPaddingBottom layout-0">
                <div class="sm-12 md-8">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1079541 class="t3ce    frame-type-gridelements_pi1 
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="
                    
                    grid-background--boxed">
            
            
        
            <div class="row    grid grid--noPaddingBottom layout-0">
                <div class="xs-12 sm-6">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110135 class="t3ce    frame-type-sitetud_card 
            
            
            
    ">
        
        
            



        
        
            






        
        
	
	
	
	
	

	<div class="grid-row ">
		<div class="sm-12">
			
					
	
			<a href="/innovatie-impact/pioneering-tech/articles/digitaal-innoveren-met-6g" class="card
					 card--no_description
					 card--black card--colored
					 
					 card--background_gradient">

				<div class="card__contentWrapper">
					
	
			
					<picture class="card__img card__img--1110135" >
						
							<source media="(max-width: 40.063em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/c/7/csm_GettyImages-1419830522_scaled_b1f4b58134.webp" />
							<source media="(max-width: 63.938em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/c/7/csm_GettyImages-1419830522_scaled_9f4ba65eda.webp" />
							<source media="(min-width: 64em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/c/7/csm_GettyImages-1419830522_scaled_b1f4b58134.webp, https://filelist.tudelft.nl/_processed_/c/7/csm_GettyImages-1419830522_scaled_a7f4ca8e5c.webp 1.5x" />
						
						
							<img style="object-position: 50% 50%;" src="https://filelist.tudelft.nl/_processed_/c/7/csm_GettyImages-1419830522_scaled_d2e8c67509.jpg" width="960" height="600" alt="" title="1419830522" />
						
					</picture>
				
		


					<section class='card__content'>
						
							<div class="label">Explainer</div>
						
						<h3>Digitaal innoveren met 6G</h3>
					</section>
				</div>
			</a>
		

				
		</div>
	</div>

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
                <div class="xs-12 sm-6">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110138 class="t3ce    frame-type-sitetud_card 
            
            
            
    ">
        
        
            



        
        
            






        
        
	
	
	
	
	

	<div class="grid-row ">
		<div class="sm-12">
			
					
	
			<a href="/innovatie-impact/pioneering-tech/articles/de-tesla-onder-de-doodskisten" class="card
					 card--no_description
					 card--black card--colored
					 
					 card--background_gradient">

				<div class="card__contentWrapper">
					
	
			
					<picture class="card__img card__img--1110138" >
						
							<source media="(max-width: 40.063em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/b/5/csm_Merel%20Tuk_%20BYS%20Dutch%20design_%20Studio%20Hendrikx_%20Delft_%202022%2042_websize_a7c9437d1c.webp" />
							<source media="(max-width: 63.938em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/b/5/csm_Merel%20Tuk_%20BYS%20Dutch%20design_%20Studio%20Hendrikx_%20Delft_%202022%2042_websize_48d220e7f7.webp" />
							<source media="(min-width: 64em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/b/5/csm_Merel%20Tuk_%20BYS%20Dutch%20design_%20Studio%20Hendrikx_%20Delft_%202022%2042_websize_a7c9437d1c.webp, https://filelist.tudelft.nl/_processed_/b/5/csm_Merel%20Tuk_%20BYS%20Dutch%20design_%20Studio%20Hendrikx_%20Delft_%202022%2042_websize_5f457a11a4.webp 1.5x" />
						
						
							<img style="object-position: 50% 50%;" src="https://filelist.tudelft.nl/_processed_/b/5/csm_Merel%20Tuk_%20BYS%20Dutch%20design_%20Studio%20Hendrikx_%20Delft_%202022%2042_websize_28423b4b60.jpg" width="960" height="640" alt="" />
						
					</picture>
				
		


					<section class='card__content'>
						
							<div class="label">8 insights</div>
						
						<h3>De Tesla onder de doodskisten</h3>
					</section>
				</div>
			</a>
		

				
		</div>
	</div>

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
            </div>
        
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
                <div class="sm-12 md-4">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110143 class="t3ce    frame-type-sitetud_card 
            
            
            
    ">
        
        
            



        
        
            






        
        
	
	
	
	
	

	<div class="grid-row grid-row--horizontalTiny">
		<div class="sm-12">
			
					
	
			<a href="/innovatie-impact/pioneering-tech/articles/roboat-vaart-de-toekomst-in" class="card
					 card--no_description
					 card--black card--colored
					 card--horizontalTiny
					 
					 card--background_gradient">

				<div class="card__contentWrapper">
					
	
			
					<picture class="card__img card__img--1110143" >
						
							<source media="(max-width: 40.063em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/1/7/csm_tud_ynse_deinema_MR_EWF_231101_Z6B5677_scaled_8c2f6e3273.webp" />
							<source media="(max-width: 63.938em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/1/7/csm_tud_ynse_deinema_MR_EWF_231101_Z6B5677_scaled_78b410fe2e.webp" />
							<source media="(min-width: 64em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/1/7/csm_tud_ynse_deinema_MR_EWF_231101_Z6B5677_scaled_8c2f6e3273.webp, https://filelist.tudelft.nl/_processed_/1/7/csm_tud_ynse_deinema_MR_EWF_231101_Z6B5677_scaled_20f8eaf760.webp 1.5x" />
						
						
							<img style="object-position: 50% 50%;" src="https://filelist.tudelft.nl/_processed_/1/7/csm_tud_ynse_deinema_MR_EWF_231101_Z6B5677_scaled_46bdbc2375.jpg" width="960" height="639" alt="" />
						
					</picture>
				
		


					<section class='card__content'>
						
						<h3>Roboat vaart de toekomst in</h3>
					</section>
				</div>
			</a>
		

				
		</div>
	</div>

        
            



        
    </div>
    
        


    

    

    


        
    


            
    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110140 class="t3ce    frame-type-sitetud_card 
            
            
            
    ">
        
        
            



        
        
            






        
        
	
	
	
	
	

	<div class="grid-row grid-row--horizontalTiny">
		<div class="sm-12">
			
					
	
			<a href="/innovatie-impact/pioneering-tech/articles/alleen-software-is-niet-genoeg-er-moet-een-stekker-aan-zitten" class="card
					 card--no_description
					 card--black card--colored
					 card--horizontalTiny
					 
					 card--background_gradient">

				<div class="card__contentWrapper">
					
	
			
					<picture class="card__img card__img--1110140" >
						
							<source media="(max-width: 40.063em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/c/8/csm_Ampelmann%20E1000%20Wind%20Europe_scaled_132b0925a2.webp" />
							<source media="(max-width: 63.938em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/c/8/csm_Ampelmann%20E1000%20Wind%20Europe_scaled_a2c73bb1ad.webp" />
							<source media="(min-width: 64em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/c/8/csm_Ampelmann%20E1000%20Wind%20Europe_scaled_132b0925a2.webp, https://filelist.tudelft.nl/_processed_/c/8/csm_Ampelmann%20E1000%20Wind%20Europe_scaled_3b270ba56d.webp 1.5x" />
						
						
							<img style="object-position: 50% 50%;" src="https://filelist.tudelft.nl/_processed_/c/8/csm_Ampelmann%20E1000%20Wind%20Europe_scaled_a9c9d48380.jpg" width="960" height="476" alt="" />
						
					</picture>
				
		


					<section class='card__content'>
						
						<h3>‘Alleen software is niet genoeg. Er moet een stekker aan zitten.’</h3>
					</section>
				</div>
			</a>
		

				
		</div>
	</div>

        
            



        
    </div>
    
        


    

    

    


        
    


            
    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110139 class="t3ce    frame-type-sitetud_card 
            
            
            
    ">
        
        
            



        
        
            






        
        
	
	
	
	
	

	<div class="grid-row grid-row--horizontalTiny">
		<div class="sm-12">
			
					
	
			<a href="/innovatie-impact/pioneering-tech/articles/nieuwe-lastechniek-maakt-vliegtuigen-duurzamer" class="card
					 card--no_description
					 card--black card--colored
					 card--horizontalTiny
					 
					 card--background_gradient">

				<div class="card__contentWrapper">
					
	
			
					<picture class="card__img card__img--1110139" >
						
							<source media="(max-width: 40.063em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/3/c/csm_tud_bram_jongbloed_MR_EWF_231030_Z6B5019_scaled_40ac6dba57.webp" />
							<source media="(max-width: 63.938em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/3/c/csm_tud_bram_jongbloed_MR_EWF_231030_Z6B5019_scaled_1a271b06c4.webp" />
							<source media="(min-width: 64em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/3/c/csm_tud_bram_jongbloed_MR_EWF_231030_Z6B5019_scaled_40ac6dba57.webp, https://filelist.tudelft.nl/_processed_/3/c/csm_tud_bram_jongbloed_MR_EWF_231030_Z6B5019_scaled_91f43854fe.webp 1.5x" />
						
						
							<img style="object-position: 50% 50%;" src="https://filelist.tudelft.nl/_processed_/3/c/csm_tud_bram_jongbloed_MR_EWF_231030_Z6B5019_scaled_80ce1a61a8.jpg" width="960" height="639" alt="" />
						
					</picture>
				
		


					<section class='card__content'>
						
						<h3>Nieuwe lastechniek maakt vliegtuigen duurzamer</h3>
					</section>
				</div>
			</a>
		

				
		</div>
	</div>

        
            



        
    </div>
    
        


    

    

    


        
    


            
    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110141 class="t3ce    frame-type-sitetud_card 
            
            
            
    ">
        
        
            



        
        
            






        
        
	
	
	
	
	

	<div class="grid-row grid-row--horizontalTiny">
		<div class="sm-12">
			
					
	
			<a href="/innovatie-impact/pioneering-tech/articles/een-futuristische-nieuwe-manier-van-vervoer-haalbaar-of-hype" class="card
					 card--no_description
					 card--black card--colored
					 card--horizontalTiny
					 
					 card--background_gradient">

				<div class="card__contentWrapper">
					
	
			
					<picture class="card__img card__img--1110141" >
						
							<source media="(max-width: 40.063em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/4/2/csm_1.1_Hardt_Hyperloop_Vehicle_4eb70bccdc.webp" />
							<source media="(max-width: 63.938em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/4/2/csm_1.1_Hardt_Hyperloop_Vehicle_8e12e325bf.webp" />
							<source media="(min-width: 64em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/4/2/csm_1.1_Hardt_Hyperloop_Vehicle_4eb70bccdc.webp, https://filelist.tudelft.nl/_processed_/4/2/csm_1.1_Hardt_Hyperloop_Vehicle_a29afa5e86.webp 1.5x" />
						
						
							<img style="object-position: 50% 50%;" src="https://filelist.tudelft.nl/_processed_/4/2/csm_1.1_Hardt_Hyperloop_Vehicle_cc036097dc.jpg" width="960" height="541" alt="" />
						
					</picture>
				
		


					<section class='card__content'>
						
						<h3>Een futuristische nieuwe manier van vervoer: haalbaar of hype?</h3>
					</section>
				</div>
			</a>
		

				
		</div>
	</div>

        
            



        
    </div>
    
        


    

    

    


        
    


            
    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110136 class="t3ce    frame-type-sitetud_card 
            
            
            
    ">
        
        
            



        
        
            






        
        
	
	
	
	
	

	<div class="grid-row grid-row--horizontalTiny">
		<div class="sm-12">
			
					
	
			<a href="/innovatie-impact/pioneering-tech/articles/een-eenvoudig-einde-aan-schreeuwen-van-pijn" class="card
					 card--no_description
					 card--black card--colored
					 card--horizontalTiny
					 
					 card--background_gradient">

				<div class="card__contentWrapper">
					
	
			
					<picture class="card__img card__img--1110136" >
						
							<source media="(max-width: 40.063em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/c/4/csm_Meanwhile-chloe_scaled_f83bd45425.webp" />
							<source media="(max-width: 63.938em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/c/4/csm_Meanwhile-chloe_scaled_344e0cef92.webp" />
							<source media="(min-width: 64em)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/c/4/csm_Meanwhile-chloe_scaled_f83bd45425.webp, https://filelist.tudelft.nl/_processed_/c/4/csm_Meanwhile-chloe_scaled_4c5cd3eef8.webp 1.5x" />
						
						
							<img style="object-position: 50% 50%;" src="https://filelist.tudelft.nl/_processed_/c/4/csm_Meanwhile-chloe_scaled_498c41aa3e.jpg" width="960" height="960" alt="" />
						
					</picture>
				
		


					<section class='card__content'>
						
						<h3>Een eenvoudig einde aan schreeuwen van pijn</h3>
					</section>
				</div>
			</a>
		

				
		</div>
	</div>

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
            </div>
        
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    


        
    


            
    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1005672 class="t3ce    frame-type-gridelements_pi1 
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="
                    
                    grid-background--boxed">
            
            
        
            <div class="row    grid  layout-0">
                <div class="xs-12 sm-6 lg-3">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1239639 class="t3ce    frame-type-sitetud_singlebutton 
            
            
            
    ">
        
        
            



        
        
            


        
    
        
            

    
            
        



            



        
    

    




        
        
	
			<a href="/innovatie-impact/pioneering-tech/contact" class="btn
					btn--single
					align-center
					
					btn--red
					btn--borderBox" style="width: 100%;">
				Neem contact met ons op
			</a>
		

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
                <div class="xs-12 sm-6 lg-3">
                    


        



    


                </div>
                <div class="xs-12 sm-6 lg-3">
                    


        



    


                </div>
                <div class="xs-12 sm-6 lg-3">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110148 class="t3ce    frame-type-sitetud_singlebutton 
            
            
            
    ">
        
        
            



        
        
            


        
    
        
            

    
            
        



            



        
    

    




        
        
	
			<a href="/innovatie-impact/pioneering-tech/magazine" class="btn
					btn--single
					align-center
					btn--ghost
					btn--black
					btn--borderBox" style="width: 100%;">
				Alle artikelen
			</a>
		

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
            </div>
        
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


            </div>
        </div>
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    



    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1005831 class="t3ce    frame-type-gridelements_pi1 element-layout-fullScreenWidth-contentContainerWidth
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="grid-background--black
                    grid-background--image
                    ">
            
                




        <picture>
            
                    
                        <source media="(max-width: 600px)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/d/0/csm_bg-pioneeringtech-web_6efaf06d29.webp" />
                        <source media="(max-width: 1024px)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/d/0/csm_bg-pioneeringtech-web_4dccc5d583.webp" />
                        <source media="(max-width: 1280px)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/d/0/csm_bg-pioneeringtech-web_2a98154994.webp" />
                        <source media="(min-width: 1280px)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/d/0/csm_bg-pioneeringtech-web_30b7dc2a06.webp" />
                    
                    
                        <img loading="lazy" aria-hidden="true" style="opacity: 0.8;" class="grid-image placeholder-image" src="https://filelist.tudelft.nl/_processed_/d/0/csm_bg-pioneeringtech-web_12316615df.jpg" width="1920" height="450" alt="" />
                    
                
        </picture>
    

            
            
        <div class="row    grid grid--noPaddingBottom layout-1570700722">
            <div class="sm-12">
                


        


    
        
                


        
            

    
            
        

    
            
        

    
        
        
    
    

    
        
        
    

    <div id=c1007544 class="t3ce    frame-type-gridelements_pi1 element-layout-narrowColumnContent frame-space-before-50
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="
                    
                    grid-background--boxed">
            
            
        <div class="row    grid grid--noPaddingBottom layout-1508765371">
            <div class="sm-12">
                


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1007565 class="t3ce    frame-type-gridelements_pi1 
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="
                    
                    grid-background--boxed">
            
            
        
            <div class="row    grid grid--noPaddingBottom layout-0">
                <div class="xs-12 sm-6 md-8">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110150 class="t3ce    frame-type-text 
            
            
            
    ">
        
        
            



        
        
            


        
    
        
            

    
            <h3 class=" ">
                Het nieuwste magazine
            </h3>
        



            



        
    

    




        
        

    <p>Wil je een fysiek of digitaal exemplaar van het Pioneering Tech magazine ontvangen? Vul het formulier in en we sturen hem je toe. Blader hieronder alvast door enkele pagina's.</p>


        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
                <div class="xs-12 sm-6 md-4">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    
        
    

    
        
        
    

    <div id=c1263909 class="t3ce    frame-type-header 
             frame-space-after-45
            
            
    ">
        
        
            



        
        
            


        
    
        
    

    




        
        
        
            



        
    </div>
    
        


    

    

    


        
    


            
    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110151 class="t3ce    frame-type-sitetud_singlebutton 
            
            
            
    ">
        
        
            



        
        
            


        
    
        
            

    
            
        



            



        
    

    




        
        
	
			<a href="/innovatie-impact/pioneering-tech/magazine#c1105208" class="btn
					btn--single
					align-center
					
					btn--red">
				Bestel je exemplaar
			</a>
		

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
            </div>
        
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    


        
    


            
    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1263906 class="t3ce    frame-type-html 
            
            
            
    ">
        
        
            



        
        
        
    
            <div style="position:relative;padding-top:max(60%,326px);height:0;width:100%"><iframe allow="clipboard-write" sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms" allowfullscreen="true" style="position:absolute;border:none;width:100%;height:100%;left:0;right:0;top:0;bottom:0;" src="https://e.issuu.com/embed.html?d=preview_pioneering_tech_2&u=tudelftcampus"></iframe></div>
        

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


            </div>
        </div>
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


            </div>
        </div>
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    



    
            
        

    
            
        

    
        
        
    
    
        
    

    
        
        
    

    <div id=c1005766 class="t3ce    frame-type-gridelements_pi1 element-layout-fullScreenWidth-contentContainerWidth frame-space-before-50
             frame-space-after-20
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="
                    
                    ">
            
            
        
            <div class="row    grid  layout-1570700722">
                <div class="sm-12 md-3">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
        
        
    
    

    
        
        
    

    <div id=c1005772 class="t3ce show-for-large    frame-type-image  frame-space-before-25
            
            
            
    ">
        
        
            



        
        
            






        
        
	
			<div class="image">
				
						
	

	
		
				
						
	
			
	
			<picture>
				
				<img class="image-widthReset  " src="https://filelist.tudelft.nl/_processed_/6/5/csm_Podcast%20artwork%20Pioneering%20Tech_7906e26e93.jpg" width="350" height="350" alt="" />
			</picture>
		

		

					
			
	

	

					
			</div>
		


        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
                <div class="sm-12 md-9">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
        
        
    
    

    
        
        
    

    <div id=c1110152 class="t3ce    frame-type-text  frame-space-before-20
            
            
            
    ">
        
        
            



        
        
            


        
    
        
            

    
            <h2 class=" ">
                Pioneering Tech Podcast
            </h2>
        



            



        
    

    




        
        

    <p>In de Pioneering Tech Podcast duikt een wetenschapsjournalist in elke aflevering in een concrete oplossing voor een maatschappelijk probleem die aan de TU Delft wordt ontwikkeld. Dit doet hij/zij samen met een gast; een beleidsmaker, politicus of belangenorganisatie die zich inzet voor het oplossen van die maatschappelijke uitdaging. Dit alles om die ene vraag te beantwoorden: hoe krijgen we deze nieuwe innovatieve applicatie uitgerold in Nederland en zetten we de volgende stap naar een betere toekomst.</p>
<p>De journalist en de gast nemen een kijkje in de innovatieketen van de TU Delft: van de eerste ontwikkeling in de wetenschap tot het moment dat ze het product daadwerkelijk in handen hebben bij een bedrijf. Met welke toepassing in gedachten is het ontwikkeld? Met welke sociale aspecten is rekening gehouden? Wat is er nodig om deze applicatie beschikbaar te maken voor de samenleving? En welke hindernissen moeten we nog overwinnen?</p>


        
            



        
    </div>
    
        


    

    

    


        
    


            
    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1005768 class="t3ce    frame-type-sitetud_singlebutton 
            
            
            
    ">
        
        
            



        
        
            


        
    
        
            

    
            
        



            



        
    

    




        
        
	
			<a href="/innovatie-impact/pioneering-tech/podcast" class="btn
					btn--single
					align-center
					btn--ghost
					btn--red">
				Luisteren
			</a>
		

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
            </div>
        
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    



    
            
        

    
            
        

    
        
        
    
    

    
        
        
    

    <div id=c1109042 class="t3ce    frame-type-gridelements_pi1 element-layout-fullScreenWidth-contentContainerWidth frame-space-before-50
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="grid-background--black
                    grid-background--image
                    ">
            
                




        <picture>
            
                    
                        <source media="(max-width: 600px)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/d/0/csm_bg-pioneeringtech-web_6efaf06d29.webp" />
                        <source media="(max-width: 1024px)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/d/0/csm_bg-pioneeringtech-web_4dccc5d583.webp" />
                        <source media="(max-width: 1280px)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/d/0/csm_bg-pioneeringtech-web_2a98154994.webp" />
                        <source media="(min-width: 1280px)" type="image/webp" srcset="https://filelist.tudelft.nl/_processed_/d/0/csm_bg-pioneeringtech-web_30b7dc2a06.webp" />
                    
                    
                        <img loading="lazy" aria-hidden="true" style="opacity: 0.8;" class="grid-image placeholder-image" src="https://filelist.tudelft.nl/_processed_/d/0/csm_bg-pioneeringtech-web_12316615df.jpg" width="1920" height="450" alt="" />
                    
                
        </picture>
    

            
            
        <div class="row    grid  layout-1570700722">
            <div class="sm-12">
                


        


    
        
                


        
            

    
            
        

    
            
        

    
        
        
    
    
        
    

    
        
        
    

    <div id=c1110154 class="t3ce    frame-type-text  frame-space-before-50
             frame-space-after-25
            
            
    ">
        
        
            



        
        
            


        
    
        
            

    
            <h2 class="ce-headline-center ">
                Nieuwsbrief
            </h2>
        



            



        
    

    




        
        

    <p class="align-center">Blijf op de hoogte en schrijf je in voor onze nieuwsbrief om updates te ontvangen.</p>


        
            



        
    </div>
    
        


    

    

    


        
    


            
    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1109715 class="t3ce    frame-type-gridelements_pi1 
            
            
            
    ">
        
        
            



        
        
            






        
        
        <div class="
                    
                    grid-background--boxed">
            
            
        
            <div class="row    grid  layout-0">
                <div class="xs-12 sm-6 lg-4">
                    


        



    


                </div>
                <div class="xs-12 sm-6 lg-4">
                    


        


    
        
                


        
            

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c1110155 class="t3ce    frame-type-sitetud_singlebutton 
            
            
            
    ">
        
        
            



        
        
            


        
    
        
            

    
            
        



            



        
    

    




        
        
	
			<a href="https://tudelftcampus.us19.list-manage.com/subscribe?u=47bd6b23657631d21797d9107&amp;id=3c6efe11fc" class="btn
					btn--single
					align-center
					
					btn--red
					btn--borderBox" style="width: 100%;">
				Abonneren
			</a>
		

        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


                </div>
                <div class="xs-12 sm-6 lg-4">
                    


        



    


                </div>
            </div>
        
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    


        
    


            
    


    


            </div>
        </div>
    
        </div>
    
        
            



        
    </div>
    
        


    

    

    


			<!--TYPO3SEARCH_end-->
		</div>
		
	</main>


<footer class="pageFooter">
	<a class="js-back_to_top" href="#" title="back_to_top">
		<div class="btn--icon i-arrow_down"></div>
	</a>
	<div class='container'>
		<div class='row'>
			<div class="md-6 lg-6 space">
				

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c82629 class="t3ce    frame-type-header 
            
            
            
    ">
        
        
            



        
        
            


        
    
        
            

    
            
                

    
            <h3 class=" ">
                Technische Universiteit Delft
            </h3>
        



            
        



            



        
    

    




        
        
        
            



        
    </div>
    
        


    

    

    



    
            
        

    
            
        

    
    

    

    <div  class="t3ce    frame-type-sitetud_socialmedialinks 
            
            
            
    ">
        
        
            



        
        
            

<h3 class="text-hide">Dit is het social media blok</h3>




        
        

    
    

	<ul class="list-inline">
		
			
					<li>
						<a href="https://www.facebook.com/tudelft" target="_blank" class="btn--icon i-facebook" rel="noreferrer">
							<span class="text-hide">
								
										facebook
									
							</span>
						</a>
					</li>
				
		
			
					<li>
						<a href="https://twitter.com/tudelft" target="_blank" class="btn--icon i-twitter" rel="noreferrer">
							<span class="text-hide">
								
										twitter
									
							</span>
						</a>
					</li>
				
		
			
					<li>
						<a href="https://www.instagram.com/tudelft/?hl=en" target="_blank" class="btn--icon i-instagram" rel="noreferrer">
							<span class="text-hide">
								
										instagram
									
							</span>
						</a>
					</li>
				
		
			
					<li>
						<a href="https://www.youtube.com/@tudelft" target="_blank" class="btn--icon i-youtube" rel="noreferrer">
							<span class="text-hide">
								
										youtube
									
							</span>
						</a>
					</li>
				
		
			
					<li>
						<a href="https://www.linkedin.com/school/tudelft/" target="_blank" class="btn--icon i-linkedin" rel="noreferrer">
							<span class="text-hide">
								
										linkedin
									
							</span>
						</a>
					</li>
				
		
	</ul>





        
            



        
    </div>
    
        


    

    

    


			</div>
			<div class="md-6 lg-6">
				<div class="row">
					<div class="sm-6">
						

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c34885 class="t3ce    frame-type-text 
            
            
            
    ">
        
        
            



        
        
            


        
    
        
    

    




        
        

    <p><strong>Innovation &amp; Impact Centre</strong><br> Van der Burghtoren (Gebouw 26C)<br> Van der Burghweg 1<br> 2628 CS Delft<br> <a href="mailto:innovation-impactcentre@tudelft.nl">innovation-impactcentre@tudelft.nl</a></p>
<p>Postbus 5<br> 2600 AA Delft</p>
<p><a href="https://www.tudelftcampus.nl/nl/bereikbaarheid/" target="_blank" rel="noreferrer">Routebeschrijving</a><br> <a href="https://map.tudelftcampus.nl/" target="_blank" rel="noreferrer">Plattegrond campus</a><br> <a href="https://map.tudelftcampus.nl/nl/poi/bouwcampus/" target="_blank" rel="noreferrer">Plattegrond gebouw</a></p>


        
            



        
    </div>
    
        


    

    

    


					</div>
					<div class="sm-6 right">
						

    
            
        

    
            
        

    
    

    
        
        
    

    <div id=c34887 class="t3ce    frame-type-text 
            
            
            
    ">
        
        
            



        
        
            


        
    
        
    

    




        
        

    <p>Het Innovation &amp; Impact Centre van de TU Delft ondersteunt bij het opzetten van samenwerkingen tussen bedrijfsleven, overheden en kennisinstellingen om gezamenlijk aan maatschappelijke vraagstukken te werken en kennis door te geven aan de maatschappij.</p>


        
            



        
    </div>
    
        


    

    

    


					</div>
				</div>
			</div>
		</div>
	</div>
</footer>









<nav class="nav-bottom">
	<div class="container no-spacing">
		<a class="logo left" href="/">
			<svg focusable="false" class="logo logo-tudelft--bottom" role="img">
				<use xlink:href="#logo"></use>
			</svg>
			<span class="text-hide">Home van TU Delft</span>
		</a>

		<div class="nav-main left">
			
				

<a href="/cookiebeleid" title="Cookie-instellingen" class="cookieButton btn--icon">
    <svg viewBox="14 13 36 44" class="cookieButton-icon">
        <circle cx="35.709" cy="22.973" fill="currentColor" r="2"/>
        <circle cx="41.875" cy="29.417" fill="currentColor" r="2"/>
        <circle cx="31.709" cy="31.417" fill="currentColor" r="2"/>
        <circle cx="24.001" cy="37.25" fill="currentColor" r="2"/>
        <circle cx="32" cy="42.292" fill="currentColor" r="2"/>
        <circle cx="38.875" cy="37.25" fill="currentColor" r="2"/>
        <path d="M32 50c-9.925 0-18-8.075-18-18 0-.505.034-1.001.074-1.494a1 1 0 0 1 1.269-.882c3.594 1.016 7.107-1.47 7.578-4.963a1 1 0 0 1 .858-.857 5.948 5.948 0 0 0 3.438-1.705 5.958 5.958 0 0 0 1.756-4.241c0-.78-.15-1.542-.447-2.266a1.002 1.002 0 0 1 .776-1.369A17.78 17.78 0 0 1 32 14c9.925 0 18 8.075 18 18s-8.075 18-18 18zM16.002 31.795A14.01 14.01 0 0 0 16 32c0 8.822 7.178 16 16 16s16-7.178 16-16-7.178-16-16-16c-.396 0-.801.019-1.233.058a7.91 7.91 0 0 1 .206 1.799 7.941 7.941 0 0 1-2.342 5.656 7.914 7.914 0 0 1-3.86 2.143c-.899 3.891-4.672 6.653-8.769 6.139z" fill="currentColor"/>
    </svg>
</a>


				

<a href="#" class="button-reset btn--icon btn-contrast js-contrastChanger" title="Contrast-instellingen">
    <span class="js-contrastChanger-label text-hide" data-highcontrasttext="Activeer hoog contrast" data-normalcontrasttext="Activeer normaal contrast">
        Activeer hoog contrast
    </span>
    <svg role="presentation" class="icon-contrast">
        <use xlink:href="/typo3conf/ext/tud_styling/Resources/Public/img/contrast-icon.svg#contrast-icon"></use>
    </svg>
</a>

			
			

<div id="__ba_panel" class="js-browse-aloud">
    
</div>

		</div>

		<div class="right">
			<div class="nav-main">
				<ul><li class="nav-main__mainitem" data-priority="0"><a href="/onderwijs">Onderwijs</a><ul class="nav-main__submenu"><li><a href="/onderwijs/opleidingen">Opleidingen</a></li><li><a href="/onderwijs/voorlichting-en-ervaren">Voorlichting en ervaren</a></li><li><a href="/onderwijs/praktische-zaken">Praktische zaken</a></li><li><a href="/onderwijs/toelating-en-aanmelding">Toelating en aanmelding</a></li></ul></li><li class="nav-main__mainitem" data-priority="0"><a href="/onderzoek">Onderzoek</a><ul class="nav-main__submenu"><li><a href="/onderzoek/onderzoeknieuws">Onderzoeknieuws</a></li><li><a href="/onderzoek/faculteiten-en-instituten">Faculteiten en instituten</a></li><li><a href="/onderzoek/samenwerking">Samenwerking</a></li><li><a href="/onderzoek/prijzen-prijswinnaars">Prijzen & Prijswinnaars</a></li><li><a href="/onderzoek/onderzoeksfaciliteiten">Onderzoeksfaciliteiten</a></li><li><a href="/open-science">Open Science</a></li><li><a href="/onderzoek/onze-onderzoeksvisie/kwaliteitszorg">Onderzoeksvisitaties</a></li></ul></li><li class="nav-main__mainitem" data-priority="0"><a href="/innovatie-impact">Innovatie & Impact</a><ul class="nav-main__submenu"><li><a href="/innovatie-impact/samenwerken-met-tu-delft">Samenwerken met TU Delft</a></li><li><a href="/innovatie-impact/pioneering-tech">Pioneering Tech</a></li><li><a href="/innovatie-impact/innovation-projects">Innovation Projects</a></li><li><a href="/innovatie-impact/ondernemerschap">Ondernemerschap</a></li></ul></li><li class="nav-main__mainitem" data-priority="0"><a href="/actueel">Actueel</a><ul class="nav-main__submenu"><li><a href="/actueel/laatste-nieuws">Laatste Nieuws</a></li><li><a href="/actueel/agenda">Agenda</a></li><li><a href="/actueel/universiteitsbladen">Universiteitsbladen</a></li><li><a href="/ddream">D:DREAM</a></li><li><a href="/actueel/persvoorlichters">Persvoorlichters</a></li><li><a href="/actueel/press-kits">Press Kits</a></li><li><a href="/actueel/universiteit-van-nederland">Universiteit van Nederland</a></li><li><a href="/actueel/faces-of-science">Faces of Science</a></li><li><a href="/actueel/182nd-dies-natalis-tu-delft">182nd Dies Natalis TU Delft</a></li><li><a href="/actueel/portraits-of-science">Portraits of Science</a></li><li><a href="/stories-of-support">Stories of Support</a></li></ul></li><li class="nav-main__mainitem" data-priority="0"><a href="/over-tu-delft">Over TU Delft</a><ul class="nav-main__submenu"><li><a href="/over-tu-delft/werken-bij-tu-delft">Werken bij TU Delft</a></li><li><a href="/over-tu-delft/zoek-medewerkers">Zoek medewerkers</a></li><li><a href="/over-tu-delft/campus-life">Campus Life</a></li><li><a href="https://shop.tudelft.nl/" target="_blank">TU Delft Webshop</a></li><li><a href="/over-tu-delft/strategie">Strategie</a></li><li><a href="/over-tu-delft/feiten-en-cijfers">Feiten en Cijfers</a></li><li><a href="/over-tu-delft/organisatie">Organisatie</a></li><li><a href="/over-tu-delft/faculteiten">Faculteiten</a></li><li><a href="/over-tu-delft/alumni">Alumni</a></li><li><a href="/universiteitsfonds">Universiteitsfonds</a></li><li><a href="https://www.supporttudelft.nl/">Crowdfunding</a></li><li><a href="/over-tu-delft/bezoek-tu-delft">Bezoek TU Delft</a></li><li><a href="/over-tu-delft/contact-en-campus">Contact en Campus</a></li></ul></li></ul>
				


    
            
        

    
            
            
        



    <a href="/en/innovation-impact/pioneering-tech" title="Switch to the English language" class="btn--icon btn--languageSwitch" lang="en">
        <div class="icon-languageSwitch icon-languageSwitch--nl"></div>
    </a>



				<button data-target=".nav-search" class="button-reset btn--icon i-search js-modal">
					<span class="text-hide">Zoeken</span>
				</button>
			</div>
		</div>
	</div>
</nav>




<script>
document.addEventListener('DOMContentLoaded', function() {
  function waitForElementToExist(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        subtree: true,
        childList: true,
      });
    });
  }

  // 👇️ using the function
  waitForElementToExist('#__ba_panel > .textDiv > .customText').then(element => {
  	var baPanelIconWrapper = document.querySelector('#__ba_panel > .textDiv > .customText');
	baPanelIconWrapper.innerHTML = '<svg role="presentation" style="width: 100%;height: 100%;"><use xlink:href="/typo3conf/ext/tud_styling/Resources/Public/img/browse-aloud.svg#browseAloud"></svg>';
  });
});
</script>
/* fix for TUD-1019 not showing icon correctly */  
  
/* <div id="__ba_panel" class="btn--icon" style="width:24px; height:24px;"></div>
<script type="text/javascript">var _baMode='https://filelist.tudelft.nl/Admin/Robin/browsealoud-headphone.png';</script>
<!-- <script type="text/javascript" src="https://www.browsealoud.com/plus/scripts/ba.js"></script> -->

<script type="text/javascript" src="https://www.browsealoud.com/plus/scripts/3.1.0/ba.js"
crossorigin="anonymous" integrity="sha256-VCrJcQdV3IbbIVjmUyF7DnCqBbWD1BcZ/1sda2KWeFc= sha384-k2OQFn+wNFrKjU9HiaHAcHlEvLbfsVfvOnpmKBGWVBrpmGaIleDNHnnCJO4z2Y2H sha512-gxDfysgvGhVPSHDTieJ/8AlcIEjFbF3MdUgZZL2M5GXXDdIXCcX0CpH7Dh6jsHLOLOjRzTFdXASWZtxO+eMgyQ=="></script>
  
<script>
window.addEventListener('DOMContentLoaded', function () {
 $( ".nav-main.left" ).append( $("#__ba_panel") );
});</script> */

<script src="/typo3conf/ext/site_tud/Resources/Public/JavaScript/dist.javascripts.d0775f1445.min.js" type="text/javascript"></script>

<style>
    .pageFooter {
    background-image: url(https://www.tudelft.nl/typo3conf/ext/tud_styling/Resources/Public/img/torch.svg); 
    background-repeat:no-repeat;
	background-position: 15% 75%;
    background-size: 250%;
    background-blend-mode: overlay;
  }
  
  .card--no_image {background-blend-mode: overlay;}
  .flameStyle1 {background-position: 80% 40% !important; background-size: 370% !important;}
  .flameStyle2 {background-position: 30% 35% !important; background-size: 450% !important;}
  .flameStyle3 {background-position: 50% 50% !important; background-size: 400% !important;}
  .flameStyle4 {background-position: 60% 70% !important; background-size: 500% !important;}
  .flameStyle5 {background-position: 30% 80% !important; background-size: 330% !important;}
</style>

<script>
var cards = document.querySelectorAll('.card--no_image');

var i;
for(var i = 0; i<cards.length; i++) {
    switch (i % 5) {
       case 0:  cards[i].className += " flameStyle1"; break;
       case 1:  cards[i].className += " flameStyle2"; break;
       case 2:  cards[i].className += " flameStyle3"; break;
       case 3:  cards[i].className += " flameStyle4"; break;
       case 4:  cards[i].className += " flameStyle5"; break;
    }   
}
  
  </script>     <script>
     window.addEventListener('DOMContentLoaded', function ()  {
     document.querySelectorAll(".logo-tudelft--top")?.forEach (x=> x.setAttribute("aria-label", "TU Delft homepage")); // add aria-label to top logo
     document.querySelectorAll(".logo-tudelft--bottom")?.forEach (x=> x.setAttribute("aria-label", "TU Delft homepage")); //add aria-label to bottom logo
//     document.getElementsByClassName("button-reset btn--icon i-search js-modal")[0].setAttribute("aria-label", "Search, Zoeken"); // add aria-label to search icon
//     document.getElementsByClassName("button-reset btn--icon i-search js-modal")[1].setAttribute("aria-label", "Search, Zoeken"); // add aria-label to search icon
 

document.querySelectorAll('[class*=video--popup]')?.forEach( x=> x.setAttribute("aria-label","Play video" + ", " + x.innerText)); // add 'play video' to every videoelement with additional video-title 
    

  document.querySelector(".cookieNotice")?.setAttribute("role", "dialog");   // add region to cookiestatement
  document.querySelector(".cookieNotice")?.setAttribute("aria-label", "Cookie statement"); // add aria-label to cookiestatement
  document.querySelector(".pageFooter")?.setAttribute("role", "region"); // add region to footer
  document.querySelector(".pageFooter")?.setAttribute("aria-label", "Footer"); // add aria-label to footer

// add tabindex=-1 to pagination (...)
  const dots = document.querySelectorAll('ul li a'); 
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].textContent === '...') {
     dots[i].setAttribute("tabindex", "-1");
    }
  }
                               
// add buttontitle to carousel aria-label                         
  document.querySelectorAll('.slick-dots button')?.forEach(button => {
   button.setAttribute('aria-label', button.innerText + ', ' + button.getAttribute('aria-label')); 
 });
                          
// set photogallery ARIA to hidden
 document.querySelectorAll('.photoGallerySlider .slick-dots')?.forEach(ul => {
   ul.setAttribute("aria-hidden","true");})

// set ARIA label for next & previous buttons
document.querySelectorAll(".slick-prev")?.forEach (x=> x.setAttribute("aria-label", "Vorige / Previous")); // add aria-label to top logo
document.querySelectorAll(".slick-next")?.forEach (x=> x.setAttribute("aria-label", "Volgende / Next")); // add aria-label to top logo
                               
// add 'reference' to element id                               
//document.querySelectorAll(".frame-type-shortcut [id]").forEach((element, index) => element.id += '-reference' + index);
                          
// header sliders WCAG
document.querySelectorAll('.carousel')?.forEach( x=> x.setAttribute("role","region"));	
document.querySelectorAll('.carousel')?.forEach( x=> x.setAttribute("aria-label","Header carousel"));	

document.querySelectorAll(".menu.js-toggle")?.forEach ( x=> x.setAttribute("aria-label", "Menu")); // Set ARIA label of patty menu                          
                          
// wis alle filters aria labels/role
                          
var list = document.querySelector(".lookup-usedFilters");
if (list && list.childElementCount !== 0) {
    // It has at least one element as a child
    list.setAttribute("role", "list");
} else if (list && list.childElementCount === 0) {
    list.setAttribute("role", "none");
}
  
// fix profilecard UL   
var profilecard = document.querySelectorAll(".profile__contactdata");
for (i = 0; i < profilecard.length; i++) {
if (profilecard[i] && profilecard[i].childElementCount !== 0) {
    // It has at least one element as a child
    profilecard[i].setAttribute("role", "list");
} else if (profilecard[i] && profilecard[i].childElementCount === 0) {
    profilecard[i].setAttribute("role", "none");
}}    

// fix aside UL   
var navaside = document.querySelectorAll(".nav-aside ul");
for (i = 0; i < navaside.length; i++) {
if (navaside[i] && navaside[i].childElementCount !== 0) {
    // It has at least one element as a child
    navaside[i].setAttribute("role", "list");
} else if (navaside[i] && navaside[i].childElementCount === 0) {
    navaside[i].setAttribute("role", "none");
}}
                               
// Set aria label for to top links
// Todo: remove childnode <span class="hide">To top</span>
document.querySelectorAll(".csc-linkToTop .uparrow").forEach(x => x.setAttribute("aria-label", "To top"));

// Set tabindex of photo gallery slider to -1
document.querySelectorAll(".photoGalleryNavSlider-item").forEach(x => x.setAttribute("tabindex", -1))
document.querySelectorAll(".slick-slide").forEach(x => x.setAttribute("tabindex", -1))
                 
// Remove empty header in carousel
document.querySelectorAll(".frame-type-sitetud_carousel h3:empty").forEach(x => x.remove())
document.querySelectorAll(".frame-type-sitetud_carousel .slick-dots").forEach(x => x.style.marginTop = "3rem")
  
// Empty H2 in Lookup results if screen reader header is not entered
document.querySelectorAll("h2.show-for-sr:empty").forEach(x => x.remove())

// Empty H2 in Lookup results if agenda__month header is not entered
document.querySelectorAll(".agenda .agenda__month:empty").forEach(x => x.remove())

document.querySelectorAll(".filters-column").forEach((el, index) => {
	let id = `formFieldId${index}`
	el.querySelector("select").setAttribute("aria-labelledby",id)
	el.querySelector("span").setAttribute("id",id)
})

}, false);

</script><script type="text/javascript">			if (window.require && window.$ && window.isLumesseApplyPage) {
				$.getScript('/typo3conf/ext/site_tud/Resources/Public/JavaScript/TalentLink.js')
			};</script>
</body>
</html>