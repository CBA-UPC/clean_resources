"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["loader.SideNav","icons/IconCircleFill-js","icons/IconClockCircleFill-js","icons/IconFeedback-js","icons/IconFollowArrowLeft-js","icons/IconFollowArrows-js","icons/IconPin-js","icons/IconPromotedPill-js","icons/IconSparkle-js"],{604361:(e,t,i)=>{i.r(t),i.d(t,{default:()=>H});var n=i(202784),a=i(325686),r=i(854044),o=i(973186),l=i(257668),c=i(152577),s=i(709249),d=i(887371),u=i(545754),m=i(486906),h=i(645184),p=i.n(h),y=i(447636),v=i(229496),g=i(611731),f=i(882392),b=o.Z.create((function(e){return{button:{boxShadow:"0px 8px 28px rgba(0, 0, 0, 0.08)"}}}));const w=function(e){var t=e.disabled,i=e.icon,a=e.isExpanded,r=e.label,o=e.link,l=e.onPress,c=e.testID;return n.createElement(v.ZP,{accessibilityLabel:r,disabled:t,hoverLabel:{label:r},icon:a?void 0:i,link:o,onPress:l,size:"xLarge",style:b.button,testID:c,type:"brandFilled"},a?n.createElement(g.Z,{animateMount:!0,duration:"long",show:!0,type:"fade"},n.createElement(f.ZP,null,r)):null)};var C=i(460673),Z=p().ee69d769({verb:""}),x=function(e){(0,u.Z)(i,e);var t=(0,m.Z)(i);function i(){var e;(0,s.Z)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a)))._handlePress=function(t){e.props.analytics.scribe({component:"new_tweet_button",action:"click"})},e}return(0,d.Z)(i,[{key:"render",value:function(){var e=this.props,t=e.composeOptions,i=e.isExpanded,a=e.testID;return n.createElement(w,{icon:E,isExpanded:i,label:Z,link:{pathname:"/compose/tweet",state:t},onPress:this._handlePress,testID:a})}}]),i}(n.Component),E=n.createElement(y.default,null);const S=(0,C.Z)(x);var k=i(652008),L=i(876024),I=i(97673),R=i(39547);const T={tweet:"SideNav_NewTweet_Button"};function H(e){var t=e.SideNavButton,i=e.TabBar,o=e.TeamsSwitcher,s=e.history,d=e.isCollapsedSmall,u=e.isExpanded,m=e.isLoggedIn,h=e.isTwoColumn,p=e.location,y=e.logoButton,v=e.onTabRefresh,g=e.widthStyle,f=e.withTweetButton,b=void 0===f||f,w=[P.root,g,d?P.rootPaddingSmall:P.rootPaddingNormal],C=y||n.createElement(L.Z,{onClick:v,pullLeft:!1,size:"large"}),Z=(0,R.mw)(),x=Z.accountSwitcherRef,E=Z.buttonRef,H=Z.logoRef,B=Z.rank,_=(0,r.Zx)((function(e){var t=e.windowHeight;return k.Z.getHeightMode(t)}));return n.createElement(a.Z,{style:w},n.createElement(a.Z,{style:[P.topSection,!u&&P.alignItemsCenter]},n.createElement(a.Z,{ref:H,style:P.topControl},C),n.createElement(a.Z,{style:[P.appTabBar,!u&&P.alignItemsCenter]},n.createElement(I.h.Provider,{value:B},n.createElement(i,{history:s,layout:"vertical",location:p,onTabRefresh:v,wideMode:h,withExtendedItems:!0,withLabel:u}))),m&&(t||b)?function(){var t=e.SideNavButton,i=e.composeOptions,r=e.isExpanded;return n.createElement(a.Z,{ref:E,style:[P.button,!r&&P.alignItemsCenter,"tall"===_&&P.withTallHeight]},t?n.createElement(t,{isExpanded:r}):n.createElement(S,{composeOptions:i,isExpanded:r,testID:T.tweet}))}():null),m?n.createElement(a.Z,{ref:x,style:[P.footerContainer,!u&&P.alignItemsCenter]},n.createElement(c.ux,null,n.createElement(l.ZP,{isExpanded:u})),o?n.createElement(o,{isExpanded:u}):null):null)}var P=o.Z.create((function(e){return{root:{height:"100%",overflowY:"auto",justifyContent:"space-between"},rootPaddingNormal:{paddingHorizontal:e.spaces.space8},rootPaddingSmall:{paddingHorizontal:e.spaces.space4},topSection:{alignItems:"flex-start"},topControl:{paddingVertical:e.spaces.space2,maxWidth:"100%"},appTabBar:{marginBottom:e.spaces.space4,marginTop:e.spaces.space2,width:"100%"},button:{marginVertical:e.spaces.space4,width:"90%"},withTallHeight:{marginVertical:e.spaces.space16},alignItemsCenter:{alignItems:"center"},settingsButton:{marginBottom:e.spaces.space20,marginHorizontal:e.spaces.space4},footerContainer:{marginVertical:e.spaces.space12}}}))},611731:(e,t,i)=>{i.d(t,{Z:()=>f});var n=i(133028),a=i(709249),r=i(887371),o=i(545754),l=i(486906),c=i(202784),s=i(640342),d=i(325686),u=i(940080),m=Object.freeze({normal:100,long:250,longer:500}),h=Object.freeze({animate:"animate",static:"static",prep:"prep"}),p={height:"auto",opacity:1},y={height:0,opacity:0},v=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;(0,a.Z)(this,i);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={animateStage:h.static,animateProps:e.props.show&&!e.props.animateMount?p:y,renderChildren:e.props.children,componentHeight:0,props:(0,n.Z)((0,n.Z)({},e.props),{},{show:!e.props.animateMount&&e.props.show})},e._transitionStart=function(t){var i=t.componentHeight,n=e.state.props,a=n.show,r="fade"===n.type;a?e.setState({animateProps:{height:r?"auto":0,opacity:0},animateStage:h.animate,componentHeight:i},e._requestNewFrame((function(){e.setState({animateProps:{height:r?"auto":i,opacity:1}})}))):e.setState({animateProps:{height:r?"auto":i,opacity:1},animateStage:h.animate,componentHeight:i},e._requestNewFrame((function(){e.setState({animateProps:{height:r?"auto":0,opacity:0}})})))},e._handleTransitionEnd=function(t){var i=e.props,n=i.onAnimateComplete,a=i.show;t.target instanceof window.HTMLElement&&t.target===e._animationNode&&e.setState({animateProps:a?p:y,animateStage:h.static},(function(){return n&&n()}))},e._requestNewFrame=function(t){window.requestAnimationFrame((function(){window.requestAnimationFrame((function(){e._mounted&&t()}))}))},e._setAnimationNode=function(t){e._animationNode=t},e._setMeasurementNode=function(t){e._measurementNode=t},e._measureComponentHeight=function(){return e._measurementNode instanceof window.HTMLElement?e._measurementNode.getBoundingClientRect().height:null},e._measureAndAnimate=function(){var t=e._measureComponentHeight();t&&e._transitionStart({componentHeight:t})},e}return(0,r.Z)(i,[{key:"componentDidMount",value:function(){this._mounted=!0,this.props.animateMount&&this._measureAndAnimate()}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"componentDidUpdate",value:function(){this.state.animateStage===h.prep&&this._measureAndAnimate()}},{key:"render",value:function(){var e=this.state,t=e.animateProps,i=e.animateStage,n=e.props,a=n.duration,r=n.show,o=n.testId,l=n.type,s=e.renderChildren,p=i===h.static,y=i===h.animate,v="fade"===l;if(p&&!r)return null;var f=[!p&&{willChange:"opacity, height"},y&&g.transitionStyles,y&&{transitionDuration:"".concat(m[a],"ms")},y&&!v&&g.overflowHidden,!p&&t];return(0,u.Z)("div",{"data-testid":o,onTransitionEnd:this._handleTransitionEnd,ref:this._setAnimationNode,style:f,children:c.createElement(d.Z,{ref:this._setMeasurementNode},"function"==typeof s?s({isAnimating:y}):s)})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.show!==t.props.show?t.animateStage===h.static?{animateStage:h.prep,renderChildren:e.show?e.children:t.props.children,props:e}:{animateStage:h.animate,animateProps:e.show?(0,n.Z)((0,n.Z)({},p),{},{height:t.componentHeight}):y,props:e}:{props:e,renderChildren:e.children}}}]),i}(c.Component);v.defaultProps={duration:"normal",type:"slide"};var g=s.Z.create({transitionStyles:{transitionProperty:"opacity, height",transitionTimingFunction:"ease"},overflowHidden:{overflow:"hidden"}});const f=v},623791:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(202784),a=i(325686),r=i(973186);function o(e){var t=e.spacing;return n.createElement(a.Z,{accessibilityRole:"separator",style:[l.divider,{marginVertical:null!=t?r.Z.theme.spaces[t]:void 0}]})}var l=r.Z.create((function(e){return{divider:{backgroundColor:e.colors.borderColor,height:e.borderWidths.small}}}))},868472:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(709249),a=i(887371),r=i(545754),o=i(486906),l=i(202784),c=i(476984),s=i.n(c),d=i(107333),u=i(117779),m=i(913364),h="failed",p="loaded",y="loading",v="none",g=function(e){(0,r.Z)(i,e);var t=(0,o.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,a.Z)(i,[{key:"shouldComponentUpdate",value:function(e){var t=e.fetchStatus===p,i=this.props.fetchStatus!==e.fetchStatus;return!(!t&&!i)||!s()(e,this.props)}},{key:"render",value:function(){var e=this.props,t=e.accessibilityLabel,i=e.failureMessage,n=e.fetchStatus,a=e.icon,r=e.loadingMessage,o=e.onRequestRetry,c=e.render,s=e.renderFailure,d=e.retryMessage,p=e.retryable;switch(n){case h:return p?l.createElement(u.Z,{icon:a,onRequestRetry:o,retryMessage:d}):i?l.createElement(m.m,{failureMessage:i}):s();case y:return l.createElement(m.J,{accessibilityLabel:t,loadingMessage:r});case v:return null;default:return c()}}}]),i}(l.Component);g.defaultProps={renderFailure:d.Z,retryable:!0},g.propTypes={}},641310:(e,t,i)=>{i.d(t,{Z:()=>w});var n=i(709249),a=i(887371),r=i(545754),o=i(486906),l=i(202784),c=i(325686),s=i(645184),d=i.n(s),u=i(285042),m=i(882392),h=i(973186),p=d().f1a1b791,y=d().if2bf8b4,v=d().f3624b5c,g=d().b4b3b113,f=d().be222050,b=d().hcbbe447,w=function(e){(0,r.Z)(i,e);var t=(0,o.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,a.Z)(i,[{key:"render",value:function(){var e=this.props,t=e.color,i=e.nativeID,n=e.style;return l.createElement(c.Z,{style:[C.root,n]},l.createElement(u.default,{style:[C.icon,t&&C[t]]}),l.createElement(m.ZP,{color:t,nativeID:i,size:"subtext2"},this._getPromotedLabel()))}},{key:"_getPromotedLabel",value:function(){var e=this.props,t=e.contentAuthorId,i=e.label,n=e.promotedContent,a=n.adMetadataContainer,r=n.advertiser,o=n.advertiser_name,l=n.disclosure_type,c=t&&r&&t===r.id_str,s="string"==typeof l&&"political"===l.toLowerCase(),d="string"==typeof l&&"issue"===l.toLowerCase(),u=!(!a||"POLITICAL"!==a.disclaimerType)||s,m=!(!a||"ISSUE"!==a.disclaimerType)||d,h=(a||{}).removePromotedAttributionForPreroll;return i||(!o||c||h?u?v:m?f:y:u?g({fullName:o}):m?b({fullName:o}):p({fullName:o}))}}]),i}(l.Component);w.defaultProps={color:"gray700"};var C=h.Z.create((function(e){return{root:{alignItems:"center",flexDirection:"row"},icon:{color:e.colors.gray700,height:"1em",marginEnd:e.spaces.space4,flexShrink:0},gray700:{color:e.colors.gray700},white:{color:e.colors.white}}}))},2464:(e,t,i)=>{i.d(t,{ZP:()=>y,ie:()=>m,nt:()=>u});var n=i(841361),a=i(133028),r=i(196234),o=(i(344112),i(136728),i(34640)),l=i(249089),c=i(256500),s=Object.freeze({Cashtag:"cashtag",Hashtag:"hashtag",Mention:"mention",Url:"url",List:"twitterList"}),d=Object.freeze({CashtagClick:"cashtag_click",HashtagClick:"hashtag_click"});function u(e){return e.screenName?s.Mention:e.hashtag?s.Hashtag:e.cashtag?s.Cashtag:e.url?s.Url:null}function m(e,t){var i="https://twitter.com";switch(e){case s.Cashtag:var n=encodeURIComponent("".concat(t));return"".concat(i,"/search?q=").concat(n,"&src=").concat(d.CashtagClick);case s.Hashtag:var a=encodeURIComponent("".concat(t));return"".concat(i,"/search?q=").concat(a,"&src=").concat(d.HashtagClick);case s.Mention:return"".concat(i,"/").concat(t);case s.List:return"".concat(i,"/i/lists/").concat(t);case s.Url:return t.startsWith("http://")||t.startsWith("https://")?t:"//".concat(t)}}var h={cashtag:function(e,t){return{color:"link",dir:"ltr",link:m(s.Cashtag,"$".concat(t.text)),ref:t,text:"$".concat(t.text),type:s.Cashtag}},hashtag:function(e,t){return{color:"link",dir:c.Z.getTextDirection(t.text),link:m(s.Hashtag,"#".concat(t.text)),ref:t,text:"#".concat(t.text),type:s.Hashtag}},mention:function(e,t){return{color:"link",dir:"ltr",link:m(s.Mention,t.screenName),ref:t,text:"@".concat(t.screenName),type:s.Mention}},text:function(e,t){return{ref:{},text:l.Z.replaceCarriageReturns(e),type:"text",weight:"Strong"===t?"bold":void 0}},twitterList:function(e,t){return{color:"text",link:m(s.List,t.id),ref:t,text:e,type:s.List,weight:"bold"}},url:function(e,t){return{color:"link",link:m(s.Url,t.url),ref:t,text:e,type:s.Url}},user:function(e,t){return{ref:t,text:e,type:"user",weight:"bold"}}},p=function(e,t){return e.map((function(e){var i=(0,o.Z)(t,e.fromIndex,e.toIndex),n=(0,r.Z)(i,2),l=n[0],c=n[1];return(0,a.Z)((0,a.Z)({},e),{},{fromIndex:l,toIndex:c})}))};function y(e,t){var i=[];if(t.length){var a,r=p(t,e),o=0,l=(0,n.Z)(r);try{var c=function(){var t=a.value,n=t.format,r=t.fromIndex,l=t.ref,c=t.toIndex;c!==o&&r>o&&i.push(h.text(e.slice(o,r)));var s=e.slice(r,c);if(l){var d=Object.keys(l).find((function(e){return null!=l[e]}));if(d){var u=h[d];u?i.push(u(s,l[d])):i.push(h.text(s))}}else i.push(h.text(s,n));o=c};for(l.s();!(a=l.n()).done;)c()}catch(d){l.e(d)}finally{l.f()}var s=e.length;o<s&&i.push(h.text(e.slice(o)))}else i.push(h.text(e));return i}},894963:(e,t,i)=>{i.d(t,{Z:()=>F});var n=i(202784),a=i(645184),r=i.n(a),o=i(55269),l=i(81921),c=i(90649),s=i(240811),d=i(914481),u=i(517272),m=i(407307),h=i(106059),p=i(880166),y=i(440271),v=i(511258),g=i(45680),f=i(833131),b=i(575629),w=i(27895),C=i(156538),Z=i(307742),x=i(225163),E=i(721783),S=i(882392),k=i(537800),L=i(430318),I=i(973186),R=i(849376),T=r().ae408b76,H=r().j355f008,P=r().habf9678,B=r().db0798ed,_=r().dc716ec9,D=function(e){var t=e.text,i=(0,L.Z)().direction;return n.createElement(S.ZP,{dir:i,withHashflags:!0},t)},z=function(e,t){return t?T:function(e){var t=n.createElement(D,{text:e});return n.createElement(r().I18NFormatMessage,{$i18n:"fcd931ed"},t)}(e)},M=I.Z.create((function(e){return{small:{height:e.lineHeights.subtext3,width:e.lineHeights.subtext3},large:{height:e.lineHeights.subtext1,width:e.lineHeights.subtext1},xLarge:{height:e.lineHeights.headline1,width:e.lineHeights.headline1}}})),N=I.Z.create((function(e){return{circle:{color:e.colors.primary,width:"0.5em"},colorDeepGray:{color:e.colors.gray700},colorBlue:{color:e.colors.blue500},colorGreen:{color:e.colors.green500},colorOrange:{color:e.colors.orange500},colorPrimary:{color:e.colors.primary},colorRed:{color:e.colors.magenta500},grayscaleImage:{borderRadius:e.borderRadii.infinite,filter:"grayscale(100%)"},brandColor:{color:e.colors.brandColor}}}));const F=function(e){var t=e.contextType,i=e.iconColor,a=e.iconSize,r=e.link,S=e.retweetData,L=e.text,T=e.topicData,F=e.userAvatarUrls,U=S||{},Q=U.isSelfRetweet,V=U.name,A=U.screenName,W=function(e,t,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=M[t],S=[i?{color:I.Z.theme.colors[i]}:N.colorDeepGray,r],L=n.createElement(o.default,{style:S}),T=n.createElement(l.default,{style:S}),H=n.createElement(c.default,{style:S}),P=n.createElement(s.default,{style:S}),B=n.createElement(d.default,{style:S}),_=n.createElement(u.default,{style:N.circle}),D=n.createElement(m.default,{style:S}),z=n.createElement(h.default,{style:S}),F=n.createElement(p.default,{style:S}),U=n.createElement(y.default,{style:S}),Q=n.createElement(v.default,{style:S}),V=n.createElement(g.default,{style:S}),A=n.createElement(f.default,{style:S}),W=n.createElement(b.default,{style:S}),j=n.createElement(w.default,{style:S}),O=n.createElement(C.default,{style:S}),q=n.createElement(Z.default,{style:S}),G=n.createElement(x.default,{style:S}),K=n.createElement(k.Z,{borderColor:"cellBackground",userAvatarSize:t,userAvatarUrls:a}),Y=n.createElement(E.default,{style:S});switch(e){case R.Q.Pin:case R.Q.ReplyPin:return L;case R.Q.Retweet:return T;case R.Q.Like:return H;case R.Q.Follow:return P;case R.Q.Moment:return B;case R.Q.NewTweets:return _;case R.Q.Reply:case R.Q.Conversation:return D;case R.Q.Feedback:return z;case R.Q.Topic:return F;case R.Q.List:return U;case R.Q.Location:return Q;case R.Q.Community:return V;case R.Q.Spaces:return A;case R.Q.Sparkle:return W;case R.Q.SmartBlockExpiration:return j;case R.Q.SocialProof:case R.Q.FollowFollowed:return G;case R.Q.FollowMutual:return q;case R.Q.FollowFollowing:return O;case R.Q.Facepile:return K;case R.Q.Bird:return Y;case R.Q.TextOnly:default:return null}}(t,a,i,F);switch(t){case R.Q.Retweet:return{Icon:W,text:L||z(V,Q),link:A?"https://twitter.com/".concat(A):void 0};case R.Q.Pin:return{Icon:W,text:L||H};case R.Q.ReplyPin:return{Icon:W,text:P};case R.Q.Topic:return{Icon:W,accessibilityLabel:"Recommendation"===(null==T?void 0:T.functionalityType)||"RecWithEducation"===(null==T?void 0:T.functionalityType)?_({topicName:L}):B({topicName:L}),text:L?n.createElement(D,{text:L}):null,link:r};default:return{Icon:W,text:L?n.createElement(D,{text:L}):null,link:r}}}},309524:(e,t,i)=>{i.d(t,{Z:()=>C});var n=i(459740),a=i(709249),r=i(887371),o=i(545754),l=i(486906),c=(i(136728),i(202784)),s=i(325686),d=i(882392),u=i(137541),m=i(377089),h=i(973186),p=i(191062),y=i(868011),v=i(894963),g=i(849376),f=["avatarSize","bottomControl","iconStyle","nativeID","onLayout","rightControl","style","testID","textColor","textSize","topControl","weight","withBottomBorder","withLeftPadding","withTextCentered"],b=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,a.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"render",value:function(){var e=this,t=this.props,i=t.avatarSize,a=t.bottomControl,r=t.iconStyle,o=t.nativeID,l=t.onLayout,h=t.rightControl,p=t.style,y=t.testID,g=t.textColor,b=t.textSize,C=t.topControl,Z=t.weight,x=(t.withBottomBorder,t.withLeftPadding),E=(t.withTextCentered,(0,n.Z)(t,f)),S=(0,v.Z)(E),k=S.Icon,L=S.accessibilityLabel,I=S.link,R=S.text,T=c.createElement(d.ZP,{accessibilityLabel:L,color:g,nativeID:o,numberOfLines:2,size:b,testID:y,weight:Z},R),H=this._getStyles(),P=H.cellStyle,B=H.viewStyle;return R?c.createElement(m.ZP.UseProps,null,(function(t){return c.createElement(c.Fragment,null,C||null,c.createElement(s.Z,{onLayout:l,style:[p,B,t.socialContextRefreshEnabled()&&!x&&w.socialContextRefresh]},c.createElement(u.Z,{avatarCell:k||(x?null:void 0),avatarCellStyle:[r,w.socialContextIconColumn,!x&&w.unsetIconWidth,t.socialContextRefreshEnabled()&&!x&&w.socialContextRefreshIcon],avatarSize:i,cellStyle:P},c.createElement(s.Z,{style:w.cellWrapper},c.createElement(s.Z,{style:[w.socialContextTextColumn,t.socialContextRefreshEnabled()&&!x&&w.socialContextRefreshTextColumn]},I?e._renderLink(I,T):T),h||null)),a||null))})):null}},{key:"_renderLink",value:function(e,t){var i=this.props,n=i.contextType,a=i.nativeID,r=i.onClick,o=i.retweetData,l=i.textColor,s=i.topicData,u=(o||{}).screenName,m=c.createElement(d.ZP,{color:l,link:e,nativeID:a,onClick:r},t);return n===g.Q.Topic&&s?c.createElement(p.Z,{topicId:s.topicId},m):n===g.Q.Retweet&&u?c.createElement(y.Z,{screenName:u},m):m}},{key:"_getStyles",value:function(){var e=this.props,t=e.bottomControl,i=e.contextType,n=e.withBottomBorder,a=e.withTextCentered,r=i===g.Q.TextOnly,o=n?[w.bottomBorderMargin,!!t&&w.bottomBorder]:[],l=n&&!t?[w.bottomBorder]:[];return r&&l.push(w.topicContext),a&&l.push(w.socialContextTextCentered),{viewStyle:o,cellStyle:l}}}]),i}(c.PureComponent);b.defaultProps={iconSize:"small",textColor:"gray700",textSize:"subtext2",withBottomBorder:!1,withLeftPadding:!0,withTextCentered:!1};var w=h.Z.create((function(e){return{socialContextIconColumn:{alignItems:"flex-end",justifyContent:"center"},bottomBorderMargin:{marginBottom:e.componentDimensions.gutterVertical},cellWrapper:{flexDirection:"row"},bottomBorder:{paddingBottom:e.spaces.space4,borderBottomStyle:"solid",borderBottomWidth:e.borderWidths.small,borderBottomColor:e.colors.borderColor},topicContext:{paddingBottom:"calc(".concat(e.spaces.space4," + ").concat(e.spaces.space2,")")},socialContextTextColumn:{alignItems:"flex-start",flexShrink:1,justifyContent:"center"},unsetIconWidth:{flexBasis:"unset"},socialContextRefreshIcon:{marginEnd:e.spaces.space8},socialContextRefresh:{marginBottom:e.spaces.space8},socialContextRefreshTextColumn:{minHeight:e.spaces.space32},socialContextTextCentered:{justifyContent:"center"}}}));const C=b},849376:(e,t,i)=>{i.d(t,{Q:()=>n});i(202784);var n=Object.freeze({Bird:"Bird",Community:"Community",Conversation:"Conversation",Facepile:"Facepile",Feedback:"Feedback",Follow:"Follow",FollowFollowed:"FollowFollowed",FollowFollowing:"FollowFollowing",FollowMutual:"FollowMutual",Like:"Like",List:"List",Location:"Location",Megaphone:"Megaphone",Moment:"Moment",NewTweets:"NewTweets",NewUser:"NewUser",Pin:"Pin",Reply:"Reply",RelatedTweets:"RelatedTweets",ReplyPin:"ReplyPin",Retweet:"Retweet",SmartBlockExpiration:"SmartBlockExpiration",SocialProof:"SocialProof",Spaces:"Spaces",Sparkle:"Sparkle",TextOnly:"TextOnly",Topic:"Topic",Trending:"Trending"})},988403:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(807896),a=i(459740),r=i(196234),o=i(202784),l=i(325686),c=i(645184),s=i.n(c),d=i(833131),u=i(825301),m=i(971575),h=i(566970),p=i(973186),y=i(481142),v=["accessibilityLabel","presenceRingType","spaceId"];const g=function(e){var t=m.Z.useAnalytics(),i=o.useState(),l=(0,r.Z)(i,2),c=l[0],s=l[1],d=!!(c&&c>70),u=e.accessibilityLabel,p=e.presenceRingType,g=(e.spaceId,(0,a.Z)(e,v)),b=u||function(e,t){switch(e){case"audiospace":return C.activeAudioSpace({screenName:t});case"livevideo":return C.activeLiveVideo({screenName:t});default:return}}(p,e.screenName);o.useEffect((function(){switch(p){case"audiospace":t.scribe({action:"impression",element:"audiospace_ring"});break;case"livevideo":t.scribe({action:"impression",element:"livevideo_ring"})}}),[p]);var w=o.useCallback((function(e){return o.createElement(h.Z.Default,(0,n.Z)({},e,{type:p}))}),[p]);return o.createElement(y.default,(0,n.Z)({},g,{BorderComponent:w,accessibilityLabel:b,avatarRef:function(e){if(e){var t=e.getBoundingClientRect();t.width!==c&&s(t.width)}},borderWidth:d?"large":"medium",decoration:o.createElement(f,{isWide:d,type:p}),gapWidth:d?"space4":"space2",onClick:function(){switch(p){case"audiospace":t.scribe({action:"click",element:"audiospace_ring"});break;case"livevideo":t.scribe({action:"click",element:"livevideo_ring"})}},withLink:!0}))};function f(e){switch(e.type){case"audiospace":case"livevideo":return o.createElement(b,e);default:return null}}function b(e){return"livevideo"===e.type?o.createElement(u.ZP,{style:[w.liveVideoLabel,e.isWide?w.borderWide:w.borderNarrow],type:"live"}):o.createElement(l.Z,{style:[w.root,e.isWide?w.rootWide:w.rootNarrow]},o.createElement(h.Z.Default,{style:[w.spaceGradient,e.isWide?w.borderWide:w.borderNarrow]},o.createElement(d.default,{style:w.spaceIcon})))}var w=p.Z.create((function(e){var t=e.spacesPx.space16+e.spacesPx.space2,i="100%",n=e.spacesPx.space4,a=e.spacesPx.space2;return{root:{borderRadius:e.borderRadii.infinite,bottom:0,end:0,height:"30%",minHeight:t,minWidth:t,pointerEvents:"none",position:"absolute",width:"30%"},liveVideoLabel:{borderColor:e.colors.cellBackground,bottom:0,start:"50%",position:"absolute",transform:"translateX(-50%)"},rootWide:{end:-1*n,bottom:-1*n},rootNarrow:{end:-1*a,bottom:-1*a},borderWide:{borderWidth:n},borderNarrow:{borderWidth:a},spaceGradient:{justifyContent:"center",width:i,height:i,borderRadius:e.borderRadii.infinite,borderColor:e.colors.cellBackground},spaceIcon:{padding:e.spaces.space2,color:e.colors.white}}})),C={withoutUsernameFallback:s().b3688156,activeAudioSpace:s().c0eb8825,activeLiveVideo:s().d068dc6d}},819153:(e,t,i)=>{i.d(t,{ZP:()=>H});var n=i(807896),a=i(709249),r=i(887371),o=i(545754),l=i(486906),c=(i(200634),i(202784)),s=i(325686),d=i(35953),u=i(882392),m=i(137541),h=i(186454),p=i(525663),y=i(377089),v=i(77227),g=i(174062),f=i(641310),b=i(309524),w=i(894963),C=i(973186),Z=i(481142),x=i(988403),E=i(954813),S=i(695995);var k=Object.freeze({TWEET:"tweets",USER:"users"}),L=Object.freeze({UserCompact:"UserCompact",UserConcise:"UserConcise",UserDetailed:"UserDetailed",SubscribableUser:"SubscribableUser"}),I=d.Z.createLayoutCache(),R=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;(0,a.Z)(this,i);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r)))._renderUserName=function(){var t=e.props,i=t.affiliateBadgeInfo,n=t.badgeContext,a=t.disabledMessage,r=t.displayNameLabel,o=t.isBlocking,l=t.isBlueVerified,d=t.isDisabled,m=t.isFollowedBy,h=t.isProtected,p=t.isVerified,y=t.name,v=t.onScreenNameClick,g=t.promotedContent,f=t.promotedItemType,b=t.screenName,w=t.screenNameSuffix,C=t.translatorType,Z=t.verifiedType,x=t.withFollowsYou,E=t.withLink,L=c.createElement(S.Z,{affiliateBadgeInfo:i,badgeContext:n,displayNameLabel:r,isBlueVerified:l,isProtected:h,isVerified:p,name:y,onLinkClick:v,promotedContent:f===k.TWEET?g:void 0,screenName:b,screenNameSuffix:w,translatorType:C,verifiedType:Z,withFollowsYou:x&&m,withHoverCard:!o&&!d&&E,withLink:!d&&E,withScreenName:!a,withStackedLayout:!0});return a?c.createElement(s.Z,{style:T.disabledMessageContainer},L,c.createElement(u.ZP,{color:"gray700"},a)):L},e._renderSocialContext=function(){var t=e.props,i=t.avatarSize,n=t.socialContext;return n?c.createElement(y.ZP.UseProps,null,(function(e){return c.createElement(b.Z,{avatarSize:i,contextType:n.contextType,iconSize:"large",link:n.link,style:T.socialContext,text:n.text,weight:"bold",withLeftPadding:!0})})):null},e._renderUserTypeaheadSocialContext=function(){var t=e.props.socialContext,i=t&&(0,w.Z)({link:t.link,text:t.text,iconSize:"small",contextType:t.contextType})||{},n=i.Icon,a=i.text;return t?c.createElement(s.Z,{style:T.userTypeaheadSocialContext},c.createElement(s.Z,{style:T.userTypeaheadSocialContextIcon},n),c.createElement(u.ZP,{color:"gray700",numberOfLines:1,style:T.userTypeaheadSocialContextText},a)):null},e._renderHighlightedUserLabel=function(){var t=e.props.highlightedLabel;return t?c.createElement(v.Z,{label:t}):null},e._isEligibleForBio=function(){var t=e.props.displayMode;return-1!==[L.UserDetailed,L.UserConcise,L.SubscribableUser].indexOf(t)},e._handleKeyPress=function(t){t.defaultPrevented||"Enter"!==t.key||e._handleClick(t)},e._handleClick=p.Z.selectiveClickHandler((function(t){var i=e.props.onCellClick;t.preventDefault(),i&&i()})),e}return(0,r.Z)(i,[{key:"render",value:function(){var e=this.props,t=e.accessibilityChecked,i=e.accessibilityLabel,a=e.avatarDecoration,r=e.avatarShape,o=e.avatarSize,l=e.avatarUri,d=e.bottomControl,u=e.decoration,p=e.displayMode,y=e.isBlocking,v=e.isDisabled,b=e.onAvatarClick,w=e.onCellClick,C=e.onScreenNameClick,E=e.presenceIndicator,S=e.promotedContent,R=e.promotedItemType,H=e.screenName,P=e.style,B=e.testID,_=e.userId,D=e.withBottomSocialContext,z=e.withDarkerInteractiveBackground,M=e.withInteractiveStyling,N=e.withLink,F=e.withUsernameCenterAligned,U=N&&!y,Q=p===L.UserCompact||F,V=S&&R===k.USER&&"earned"!==(S.disclosure_type&&S.disclosure_type.toLowerCase())?c.createElement(f.Z,{contentAuthorId:_,promotedContent:S,style:T.promotedIndicator}):null,A={accessibilityHidden:!0,decoration:a,focusable:!1,imageLayoutCache:I,onClick:b,onHoverCardScreenNameClick:C,promotedContent:S,screenName:H,style:T.avatar,uri:l,withHoverCard:U,withLink:N,shape:r},W=c.createElement(h.Z.Consumer,null,(function(e){var t=e.avatarSize;return E?c.createElement(x.Z,(0,n.Z)({},A,E,{size:t})):c.createElement(Z.default,(0,n.Z)({size:t},A))})),j="boolean"==typeof t,O=void 0!==w,q=(j?"radio":O&&"button")||"listitem",G=this._renderUserName(),K=this._renderHighlightedUserLabel(),Y=this._renderBio(),$=K||Y||V||d,J=c.createElement(c.Fragment,null,K,Y,V,d?c.createElement(s.Z,{style:T.bottomControl},d):null);return c.createElement(g.Z,{accessibilityChecked:t,accessibilityLabel:i,accessibilityRole:q,disabled:!!v,focusable:j||O,onClick:this._handleClick,onKeyPress:this._handleKeyPress,pointerEvents:v?"none":void 0,style:[T.root,P],testID:B,withDarkerInteractiveBackground:z,withInteractiveStyling:null!=M?M:!!w},D?null:this._renderSocialContext(),c.createElement(m.Z,{avatarCell:W,avatarCellStyle:[T.avatarColumn,Q&&T.bodyColumnCentered],avatarSize:o,cellStyle:[T.bodyColumn,Q&&T.bodyColumnCentered]},c.createElement(s.Z,{style:T.body},G,u),Q?null:J,D?this._renderUserTypeaheadSocialContext():null),$&&Q?c.createElement(m.Z,{avatarCell:null,avatarCellStyle:T.avatarColumn,cellStyle:T.bodyColumn},J):null)}},{key:"_renderBio",value:function(){var e=this.props,t=e.description,i=e.displayMode,n=e.entities,a=e.userId,r=e.withheldDescription,o=e.withheldEntities;return n&&t&&this._isEligibleForBio()?c.createElement(E.Z,{description:t,entities:n,isConcise:i===L.UserConcise,style:T.bio,userId:a,withheldDescription:r,withheldEntities:o}):null}}]),i}(c.PureComponent);R.defaultProps={testID:"UserCell",withLink:!0};var T=C.Z.create((function(e){return{root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},avatarColumn:{justifyContent:"flex-start"},bodyColumn:{flexGrow:1},bodyColumnCentered:{justifyContent:"center"},avatar:{display:"block",width:"100%"},bio:{paddingTop:e.spaces.space4,whiteSpace:"normal"},socialContext:{marginBottom:e.spaces.space4},userTypeaheadSocialContext:{alignItems:"center",flexDirection:"row",textColor:e.colors.gray700},userTypeaheadSocialContextIcon:{flexShrink:0},userTypeaheadSocialContextText:{paddingStart:e.spaces.space2},body:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"},promotedIndicator:{margin:0,paddingTop:e.spaces.space4,paddingBottom:0,paddingHorizontal:0},bottomControl:{paddingTop:e.spaces.space4},disabledMessageContainer:{flexShrink:1}}}));const H=R},954813:(e,t,i)=>{i.d(t,{Z:()=>c});i(200634);var n=i(202784),a=i(882392),r=i(96847),o=i(775275),l=i(749868);const c=function(e){var t=e.description,i=e.entities,c=e.isConcise,s=e.style,d=e.testID,u=e.userId,m=e.withheldDescription,h=e.withheldEntities,p=(0,l.H)({description:t,entities:i,withheldDescription:m,withheldEntities:h}),y=p.description,v=p.entities,g=o.ZP.descriptionTextParts(y,v);return g.length?n.createElement(a.ZP,{dir:"auto",numberOfLines:c?2:void 0,style:s,testID:d},g.map((function(e,t){return n.createElement(r.ZP,{key:"user_".concat(u,"_textpart_").concat(t),linkify:!0,part:e})}))):null}},749868:(e,t,i)=>{i.d(t,{H:()=>n});i(200634);var n=function(e){var t=e.description,i=e.entities,n=e.withheldDescription,a=e.withheldEntities;return n?{description:n,entities:a}:{description:t,entities:i}}},31735:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},517272:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("circle",{cx:"12",cy:"12",r:"10.3"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},27895:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM11 6v6.72l5.19 1.73.63-1.9L13 11.28V6h-2z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},447636:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},106059:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},225163:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},307742:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},156538:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},511258:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},55269:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},285042:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},407307:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},81921:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},575629:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c},880166:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(133028),a=i(202784),r=i(890601),o=i(783427),l=i(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,r.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z"}))}),{writingDirection:t})};c.metadata={width:24,height:24};const s=c}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/loader.SideNav.15c22afa.js.map,27.7,27.7
		C522.7,251.7,510.3,264.1,495,264.1 M532,188.4c-5.1,0-9.2,4.1-9.2,9.2v1.7c-19.1-14.3-45.9-11.8-62,5.9c-16,17.6-16,44.6,0,62.2
		c16,17.6,42.9,20.2,62,5.9c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-75.7C541.2,192.5,537.1,188.4,532,188.4"/>
	<path class="st0" d="M652.1,190.1c-10.6,0-20.7,4.6-27.7,12.5c-11.6-13.2-31-16.4-46.2-7.6l-0.3,0.1c-1.1-3.9-4.7-6.8-8.9-6.8
		c-5.1,0-9.2,4.1-9.2,9.2v3.5v7.5v53.8v1.7v9.2c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-9.2v-1.7v-35.3
		c0-10.2,8.3-18.5,18.5-18.5c10.2,0,18.5,8.3,18.5,18.5v37v9.2c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-9.2v-37
		c0-10.2,8.3-18.5,18.5-18.5c10.2,0,18.5,8.3,18.5,18.5v37v9.2c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-9.2v-37
		C689.1,206.7,672.5,190.1,652.1,190.1"/>
	<path class="st0" d="M410.9,255.7c-5.4,5.4-12.6,8.4-20.2,8.4v0c-11.6,0-22-7-26.4-17.6c-4.4-10.7-2-23,6.2-31.1
		c8.2-8.2,20.5-10.6,31.1-6.2c10.7,4.4,17.6,14.8,17.6,26.4C419.3,243.1,416.3,250.3,410.9,255.7 M390.7,188.4
		c-19.1,0-36.2,11.5-43.5,29.1c-7.3,17.6-3.3,37.9,10.2,51.3c13.5,13.5,33.7,17.5,51.3,10.2c17.6-7.3,29.1-24.5,29.1-43.5
		c0-12.5-5-24.5-13.8-33.3C415.2,193.3,403.2,188.4,390.7,188.4"/>
	<path class="st0" d="M753.8,264.1c-15.3,0-27.7-12.4-27.7-27.7c0-15.3,12.4-27.7,27.7-27.7c15.3,0,27.7,12.4,27.7,27.7
		C781.5,251.7,769.1,264.1,753.8,264.1 M797.8,222.3c-6.1-19.2-23.9-32.2-44.1-32.2c-10,0-19.7,3.2-27.7,9.2v-1.7
		c0-5.1-4.1-9.2-9.2-9.2c-5.1,0-9.2,4.1-9.2,9.2v102.1c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-26.4
		c16.1,12.1,38.1,12.3,54.5,0.7C796.9,262.4,803.9,241.4,797.8,222.3"/>
	<path class="st0" d="M189.2,264.1c-11.6,0-22-7-26.4-17.6c-4.4-10.7-2-23,6.2-31.2c8.2-8.2,20.5-10.6,31.1-6.2
		c10.7,4.4,17.6,14.8,17.6,26.4C217.8,251.3,205,264.1,189.2,264.1 M227.1,162c-5.1,0-9.2,4.1-9.2,9.2V198
		c-19.4-14.8-46.9-12.4-63.3,5.6c-16.5,18-16.5,45.6,0,63.6c16.5,18,44,20.5,63.3,5.6v0.4c0,5.1,4.1,9.2,9.2,9.2
		c5.1,0,9.2-4.1,9.2-9.2v-36.1c0-0.6,0-1.1,0-1.7v-1.7v-62.6C236.3,166.1,232.2,162,227.1,162"/>
</g>
</svg>
					</a>
				</div>

				<button class="close" aria-label="Close menu">
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="16.5565" y1="16.9707" x2="1.00014" y2="1.41435" stroke-width="2" stroke-linecap="round"/>
						<line x1="1.00195" y1="16.9706" x2="16.5583" y2="1.4142" stroke-width="2" stroke-linecap="round"/>
					</svg>
				</button>
				
			</div>

			<nav class="menu-top-level-nav-container"><ul id="menu-top-level-nav" class="menu"><li id="menu-item-4179" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4179"><a href="https://videoamp.com/about/" data-text="About" class="menu-link">About</a></li>
<li id="menu-item-4183" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4183"><a href="https://videoamp.com/solutions/" data-text="Solutions" class="menu-link">Solutions</a><button><span class="sub-menu-icon"><span></span></span></button>
<div class="sub-menu-wrapper"><button class="sub-close" aria-label="Close menu"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="16.5565" y1="16.9707" x2="1.00014" y2="1.41435" stroke-width="2" stroke-linecap="round"/><line x1="1.00195" y1="16.9706" x2="16.5583" y2="1.4142" stroke-width="2" stroke-linecap="round"/></svg></button><ul class="sub-menu">
	<li id="menu-item-5431" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5431"><a href="https://videoamp.com/solutions/agencies/" data-text="Solution for Agencies" class="menu-link">Solution for Agencies</a></li>
	<li id="menu-item-5432" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5432"><a href="https://videoamp.com/solutions/brands/" data-text="Solution for Brands" class="menu-link">Solution for Brands</a></li>
	<li id="menu-item-5433" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5433"><a href="https://videoamp.com/solutions/publishers/" data-text="Solution for Publishers" class="menu-link">Solution for Publishers</a></li>
</ul></div>
</li>
<li id="menu-item-5412" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5412"><a href="https://videoamp.com/newsroom/" data-text="Newsroom" class="menu-link">Newsroom</a></li>
<li id="menu-item-5413" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5413"><a href="https://videoamp.com/resources/" data-text="Resources" class="menu-link">Resources</a><button><span class="sub-menu-icon"><span></span></span></button>
<div class="sub-menu-wrapper"><button class="sub-close" aria-label="Close menu"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="16.5565" y1="16.9707" x2="1.00014" y2="1.41435" stroke-width="2" stroke-linecap="round"/><line x1="1.00195" y1="16.9706" x2="16.5583" y2="1.4142" stroke-width="2" stroke-linecap="round"/></svg></button><ul class="sub-menu">
	<li id="menu-item-5414" class="menu-item menu-item-type-post_type_archive menu-item-object-case-studies menu-item-5414"><a href="https://videoamp.com/case-studies/" data-text="Case studies" class="menu-link">Case studies</a></li>
	<li id="menu-item-5415" class="menu-item menu-item-type-post_type_archive menu-item-object-video menu-item-5415"><a href="https://videoamp.com/video/" data-text="Thought Leadership" class="menu-link">Thought Leadership</a></li>
	<li id="menu-item-5417" class="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-5417"><a href="https://videoamp.com/blog/" data-text="Blog" class="menu-link">Blog</a></li>
	<li id="menu-item-5416" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5416"><a href="https://videoamp.com/library/" data-text="Whitepapers" class="menu-link">Whitepapers</a></li>
	<li id="menu-item-5594" class="menu-item menu-item-type-taxonomy menu-item-object-video-categories menu-item-5594"><a href="https://videoamp.com/videos/webinars/" data-text="Webinars" class="menu-link">Webinars</a></li>
</ul></div>
</li>
<li id="menu-item-5418" class="no-click menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5418"><a href="#" data-text="Careers" class="menu-link">Careers</a><button><span class="sub-menu-icon"><span></span></span></button>
<div class="sub-menu-wrapper"><button class="sub-close" aria-label="Close menu"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="16.5565" y1="16.9707" x2="1.00014" y2="1.41435" stroke-width="2" stroke-linecap="round"/><line x1="1.00195" y1="16.9706" x2="16.5583" y2="1.4142" stroke-width="2" stroke-linecap="round"/></svg></button><ul class="sub-menu">
	<li id="menu-item-5419" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5419"><a href="https://videoamp.com/careers/" data-text="Life at VideoAmp" class="menu-link">Life at VideoAmp</a></li>
	<li id="menu-item-5420" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5420"><a href="https://videoamp.com/how-we-hire/" data-text="How We Hire" class="menu-link">How We Hire</a></li>
	<li id="menu-item-5421" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5421"><a href="https://videoamp.com/job/" data-text="All jobs" class="menu-link">All jobs</a></li>
</ul></div>
</li>
</ul></nav>
		</div>

		<header id="header" class="contain" role="banner">
			
			<div class="header-container">

				<div class="layout">

					<div class="site-logo">
						<a href="https://videoamp.com/" class="logo plain" aria-label="Home">
							<svg class="logo" version="1.1" id="logo-videoamp-primary-white"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 800 309"
	 style="enable-background:new 0 0 800 309;" xml:space="preserve">
<g>
	<g id="pills">
		<path class="st0" d="M550.5,56.8c5.1,0,9.2,4.1,9.2,9.2v18.5c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2V66
			C541.2,60.9,545.4,56.8,550.5,56.8"/>
		<path class="st0" d="M587.5,84.9c5.1,0,9.2,4.1,9.2,9.2v37c0,5.1-4.1,9.2-9.2,9.2s-9.2-4.1-9.2-9.2v-37
			C578.2,89.1,582.4,84.9,587.5,84.9"/>
		<path class="st0" d="M624.4,24.2c5.1,0,9.2,4.1,9.2,9.2v74c0,5.1-4.1,9.2-9.2,9.2s-9.2-4.1-9.2-9.2v-74
			C615.2,28.3,619.3,24.2,624.4,24.2"/>
		<path class="st0" d="M661.4,0c5.1,0,9.2,4.1,9.2,9.2v37c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2v-37
			C652.1,4.1,656.3,0,661.4,0"/>
		<path class="st0" d="M698.4,29c5.1,0,9.2,4.1,9.2,9.2v18.5c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2V38.3
			C689.1,33.2,693.3,29,698.4,29"/>
	</g>
	<path class="st0" d="M325.1,190.1h-61c-5.1,0-9.2,4.1-9.2,9.2c0,5.1,4.1,9.2,9.2,9.2h61c5.1,0,9.2-4.1,9.2-9.2
		C334.3,194.2,330.2,190.1,325.1,190.1"/>
	<path class="st0" d="M325.1,264.1h-61c-5.1,0-9.2,4.1-9.2,9.2c0,5.1,4.1,9.2,9.2,9.2h61c5.1,0,9.2-4.1,9.2-9.2
		C334.3,268.2,330.2,264.1,325.1,264.1"/>
	<path class="st0" d="M114.4,188.4c-5.1,0-9.2,4.1-9.2,9.2v11v53.8v11c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-11v-53.8v-11
		C123.6,192.5,119.5,188.4,114.4,188.4"/>
	<path class="st0" d="M264.1,245.6h42.5c5.1,0,9.2-4.1,9.2-9.2c0-5.1-4.1-9.2-9.2-9.2h-42.5c-5.1,0-9.2,4.1-9.2,9.2
		C254.8,241.5,258.9,245.6,264.1,245.6"/>
	<path class="st0" d="M81.2,189c-4.4-1.7-9.3,0.4-11.1,4.8l-22,54.7l-4.8,12.1l-16.3-40.7l-10.3-26.1c-1.8-4.4-6.8-6.6-11.2-4.8
		c-4.4,1.8-6.6,6.8-4.8,11.2l3,7.4l6,15l13.6,34.1l6.9,17.2c2.3,5,7.2,8.4,12.7,8.7h0.9c5.5-0.3,10.4-3.6,12.7-8.6l27.8-69.1
		l1.8-4.7c0.9-2.1,0.8-4.5-0.1-6.6C85,191.5,83.3,189.9,81.2,189"/>
	<path class="st0" d="M495,264.1c-15.3,0-27.7-12.4-27.7-27.7c0-15.3,12.4-27.7,27.7-27.7c15.3,0,27.7,12.4,27.7,27.7
		C522.7,251.7,510.3,264.1,495,264.1 M532,188.4c-5.1,0-9.2,4.1-9.2,9.2v1.7c-19.1-14.3-45.9-11.8-62,5.9c-16,17.6-16,44.6,0,62.2
		c16,17.6,42.9,20.2,62,5.9c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-75.7C541.2,192.5,537.1,188.4,532,188.4"/>
	<path class="st0" d="M652.1,190.1c-10.6,0-20.7,4.6-27.7,12.5c-11.6-13.2-31-16.4-46.2-7.6l-0.3,0.1c-1.1-3.9-4.7-6.8-8.9-6.8
		c-5.1,0-9.2,4.1-9.2,9.2v3.5v7.5v53.8v1.7v9.2c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-9.2v-1.7v-35.3
		c0-10.2,8.3-18.5,18.5-18.5c10.2,0,18.5,8.3,18.5,18.5v37v9.2c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-9.2v-37
		c0-10.2,8.3-18.5,18.5-18.5c10.2,0,18.5,8.3,18.5,18.5v37v9.2c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-9.2v-37
		C689.1,206.7,672.5,190.1,652.1,190.1"/>
	<path class="st0" d="M410.9,255.7c-5.4,5.4-12.6,8.4-20.2,8.4v0c-11.6,0-22-7-26.4-17.6c-4.4-10.7-2-23,6.2-31.1
		c8.2-8.2,20.5-10.6,31.1-6.2c10.7,4.4,17.6,14.8,17.6,26.4C419.3,243.1,416.3,250.3,410.9,255.7 M390.7,188.4
		c-19.1,0-36.2,11.5-43.5,29.1c-7.3,17.6-3.3,37.9,10.2,51.3c13.5,13.5,33.7,17.5,51.3,10.2c17.6-7.3,29.1-24.5,29.1-43.5
		c0-12.5-5-24.5-13.8-33.3C415.2,193.3,403.2,188.4,390.7,188.4"/>
	<path class="st0" d="M753.8,264.1c-15.3,0-27.7-12.4-27.7-27.7c0-15.3,12.4-27.7,27.7-27.7c15.3,0,27.7,12.4,27.7,27.7
		C781.5,251.7,769.1,264.1,753.8,264.1 M797.8,222.3c-6.1-19.2-23.9-32.2-44.1-32.2c-10,0-19.7,3.2-27.7,9.2v-1.7
		c0-5.1-4.1-9.2-9.2-9.2c-5.1,0-9.2,4.1-9.2,9.2v102.1c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2v-26.4
		c16.1,12.1,38.1,12.3,54.5,0.7C796.9,262.4,803.9,241.4,797.8,222.3"/>
	<path class="st0" d="M189.2,264.1c-11.6,0-22-7-26.4-17.6c-4.4-10.7-2-23,6.2-31.2c8.2-8.2,20.5-10.6,31.1-6.2
		c10.7,4.4,17.6,14.8,17.6,26.4C217.8,251.3,205,264.1,189.2,264.1 M227.1,162c-5.1,0-9.2,4.1-9.2,9.2V198
		c-19.4-14.8-46.9-12.4-63.3,5.6c-16.5,18-16.5,45.6,0,63.6c16.5,18,44,20.5,63.3,5.6v0.4c0,5.1,4.1,9.2,9.2,9.2
		c5.1,0,9.2-4.1,9.2-9.2v-36.1c0-0.6,0-1.1,0-1.7v-1.7v-62.6C236.3,166.1,232.2,162,227.1,162"/>
</g>
</svg>
						</a>
					</div>

					<div class="site-top-level">
						<nav class="menu-top-level-nav-container"><ul id="menu-top-level-nav-1" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4179"><a href="https://videoamp.com/about/" data-text="About" class="menu-link"><span>About</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4183"><a href="https://videoamp.com/solutions/" data-text="Solutions" class="menu-link"><span>Solutions</span></a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5431"><a href="https://videoamp.com/solutions/agencies/" data-text="Solution for Agencies" class="menu-link"><span>Solution for Agencies</span></a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5432"><a href="https://videoamp.com/solutions/brands/" data-text="Solution for Brands" class="menu-link"><span>Solution for Brands</span></a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5433"><a href="https://videoamp.com/solutions/publishers/" data-text="Solution for Publishers" class="menu-link"><span>Solution for Publishers</span></a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5412"><a href="https://videoamp.com/newsroom/" data-text="Newsroom" class="menu-link"><span>Newsroom</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5413"><a href="https://videoamp.com/resources/" data-text="Resources" class="menu-link"><span>Resources</span></a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type_archive menu-item-object-case-studies menu-item-5414"><a href="https://videoamp.com/case-studies/" data-text="Case studies" class="menu-link"><span>Case studies</span></a></li>
	<li class="menu-item menu-item-type-post_type_archive menu-item-object-video menu-item-5415"><a href="https://videoamp.com/video/" data-text="Thought Leadership" class="menu-link"><span>Thought Leadership</span></a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-5417"><a href="https://videoamp.com/blog/" data-text="Blog" class="menu-link"><span>Blog</span></a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5416"><a href="https://videoamp.com/library/" data-text="Whitepapers" class="menu-link"><span>Whitepapers</span></a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-video-categories menu-item-5594"><a href="https://videoamp.com/videos/webinars/" data-text="Webinars" class="menu-link"><span>Webinars</span></a></li>
</ul>
</li>
<li class="no-click menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5418"><a href="#" data-text="Careers" class="menu-link"><span>Careers</span></a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5419"><a href="https://videoamp.com/careers/" data-text="Life at VideoAmp" class="menu-link"><span>Life at VideoAmp</span></a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5420"><a href="https://videoamp.com/how-we-hire/" data-text="How We Hire" class="menu-link"><span>How We Hire</span></a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5421"><a href="https://videoamp.com/job/" data-text="All jobs" class="menu-link"><span>All jobs</span></a></li>
</ul>
</li>
</ul></nav>						
					</div>

					<div class="site-hamburger">

						<button aria-label="Open Menu">
							<span></span>
							<span></span>
						</button>

					</div>
					
																<div class="site-cta">
							<a class="btn" href="https://videoamp.com/contact/" target="" ><span>Let&#039;s talk</span></a>
						</div>
					
				</div>

			</div>

		</header>
				
		<div id="smooth-wrapper">
			<div id="smooth-content">

				<div class="transition-wrap" data-barba="container" data-barba-namespace="press">

  <main class="post-content post-5365 press type-press status-publish hentry news-types-media-coverage" role="main">

        
      <article>
        
        <div class="row center-md">
          <div class="col-xs-12 col-md-10">
            <div class="post-top">
              <div class="back-btn">
                <a class="back-cta" href="https://videoamp.com/newsroom">Back to all news</a>              </div>
              <div class="post-share sub-text-lg">
                <div class="date">Oct 23 2023</div>
                <div class="share-block">
  <ul>
    <li class="social-link fb">
      <a class="alpha-tag" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvideoamp.com%2Fpress%2Fwhat-happens-when-you-combine-cuebiq-data-with-videoamp%2F" rel="noopener" target="_blank">FB</a>
    </li>
    <li class="social-link tw">
      <a class="alpha-tag" href="https://twitter.com/intent/tweet?text=What+Happens+When+You+Combine+Cuebiq+Data+With+VideoAmp%3F&amp;url=https%3A%2F%2Fvideoamp.com%2Fpress%2Fwhat-happens-when-you-combine-cuebiq-data-with-videoamp%2F&amp;via=video_amp" rel="noopener" target="_blank">TW</a>
    </li>
    <li class="social-link li">
      <a class="alpha-tag" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fvideoamp.com%2Fpress%2Fwhat-happens-when-you-combine-cuebiq-data-with-videoamp%2F&amp;summary=What+Happens+When+You+Combine+Cuebiq+Data+With+VideoAmp%3F&amp;source=https%3A%2F%2Fvideoamp.com" rel="noopener" target="_blank">LI</a>
    </li>
  </ul>
</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row center-sm">
          <div class="col-xs-12 col-sm-10 col-md-8">
            <span class="eyebrow"><span>Media Coverage</span></span>
            <h1>What Happens When You Combine Cuebiq Data With VideoAmp?</h1>
          </div>
        </div>
        
        <div class="row center-sm">
  <div class="col-xs-12 col-sm-10 col-md-8">
    <div class="post-copy">
      
<p><em>Excerpts from article originally published by&nbsp;<a href="https://www.mediapost.com/publications/article/390423/">MediaPost&#8217;s</a></em> <a href="https://www.mediapost.com/publications/author/1629/joe-mandese/"><em>Joe Mandese</em></a><em> on Oct 23, 2023</em>. <em>EssilorLuxottica&#8217;s Caroline Proto took the stage at MediaPost&#8217;s TV &amp; Video Insider Summit to discuss the work her and the company have done using VideoAmp data and solutions paired with Cubeiq&#8217;s data.</em></p>



<p><em>Joe Mandese writes: </em><br />I&#8217;m the first to admit that I&#8217;ve been one of the biggest critics of the accelerated shift to alternative TV currencies, but that&#8217;s because I was mainly looking at the downsides: the erosion of a common denominator, a lack of industry standards, marketplace obfuscation and confusion, and much more vendor grading of their own homework. Today I saw a wonderful upside that I&#8217;d like to share with you.<br /><br />It took place during MediaPost&#8217;s&nbsp;<a href="https://www.mediapost.com/tvvideoinsidersummit/">TV &amp; Video Insider Summit</a>&nbsp;here and it was presented by Caroline Proto, director of global media at eyeglasses marketing giant Luxottica, who gave us a behind-the-scenes look at how putting two different sources of data together can create something much bigger than a four.<br /><br />The sources were location-data platform Cuebiq and TV and CTV audience measurement platform VideoAmp, which Proto&#8217;s team began working with two years ago to develop a real-time system for tracking and analyzing the &#8220;cost-per-store-visit&#8221; yield buys on various TV networks and CTV platforms delivered.<br /><br />&#8220;We got them in a room and we said, ‘We need you guys to play nice in the sandbox,&#8221; Proto told the summit attendees, adding: &#8220;We need to find a solution for you to take your foot traffic data from Cuebiq and ingest it into the VideoAmp dashboard and layer it with your TV data,’ so we could start seeing what was the actual effect on our TV investments into our actual foot traffic in stores.&#8221;<br /><br />While she didn&#8217;t divulge specific results, Proto said the data helped inform plans and buys based on the ability of specific networks to yield foot traffic, as well as what the optimum frequency of spots should be before they plateaued.<br /><br />She said Luxottica&#8217;s team is still working with Cuebiq and VideoAmp to test and refine the data, but that a test with an unnamed but &#8220;very efficient cost-per-store-visit&#8221; network shows some very promising results.<br /><br />&#8220;We did see our foot traffic increase,&#8221; she said, adding &#8220;It was a rather large number&#8221; increase from 2022 to 2023 &#8212; and that moving forward, Luxottica plans to allocate its TV/CTV advertising investments using the data in future buys during 2024 and upcoming upfronts.</p>

          <div class="press-source">
            <p>Source: <a href="https://www.mediapost.com/publications/article/390423/" target="_blank">MediaPost</a></p>
          </div>

          </div>
  </div>
</div>

<section class="related-press">

    
  <div class="row center-sm">
    <div class="col-xs-12 col-sm-10 col-md-8">
      <h2>Related news</h2>
    </div>
  </div>
  
  <div class="row center-sm">

    <div class="col-xs-3 col-sm-2 col-md-1">
      <div class="lp-post-date">
        <p class="sub-text-sm">Oct 16 2023</p>
      </div>
    </div>

    <div class="col-xs-9 col-sm-8 col-md-7 col-lg-6">
      <div class="lp-post-title">
        <a class="plain" href="https://videoamp.com/press/the-weather-channel-strikes-upfront-deals-entirely-on-videoamp-currency/"><h3 class="h5">The Weather Channel Strikes Upfront Deals Entirely on VideoAmp Currency</h3></a>
      </div>
    </div>
    
    <div class="col-lg-1"></div>

  </div>
  
</section>        
      </article>

    
  </main>

          <footer id="footer" role="contentinfo">
            
            
<div class="pre-footer">
  
  <div class="video-bg">
    
    
      
        <video loading="lazy" id="landingVid1" muted loop playsinline>
          <source src="https://videoamp.com/wp-content/uploads/2022/08/ENG_FOOTER.mp4" type="video/mp4" />
        </video>

      
      
  </div>
  
  <div class="contain">
    
    <div class="content">
      
      <div class="main">
        
        <div class="section-title">
          <h2 class="sub-text-lg">Explore </h2>
        </div>
        
        <div class="landings">
            
                      
                          
              <a data-vid="landingVid1" href="https://videoamp.com/technology/" class="plain" >
                <div class="thumb">
                  <img loading="lazy" src="https://videoamp.com/wp-content/uploads/2022/08/eng-footer.png" alt="">
                </div>
                <h3 class="display-sm">Our Technology</h3>
              </a>
              
                        
                  
        </div>
      
      </div>
    
    </div>
  
  </div>

</div>          
            <div class="contain">
              <div class="layout">
  
  <div class="fax col-md-2">
    
    <div class="footer-egg">
      
      <div class="pendant">
        
        <svg viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="162" height="162" rx="81" fill="#F7F7F7"/>
  <g clip-path="url(#clip0_1863_16105)">
    <path d="M81.4535 14.748L83.0943 14.8765L83.996 20.3782L85.8908 15.1247L87.3119 15.2446L88.2564 20.7377L90.0999 15.4786L91.6979 15.6127L89.0241 22.8037L87.2149 22.6496L86.3445 17.6501L84.6895 22.4356L82.8803 22.2815L81.4535 14.748Z" fill="#231F20"/>
    <path d="M93.9009 16.168L98.7292 17.3094L98.4153 18.6363L95.128 17.8601L94.7456 19.4724L97.4165 20.1031L97.1169 21.3672L94.446 20.7366L94.0522 22.4002L97.4536 23.2049L97.1397 24.5318L92.1973 23.3619L93.8981 16.168H93.9009Z" fill="#231F20"/>
    <path d="M102.861 22.4967C103.772 20.4165 105.635 19.606 107.684 20.5021C109.291 21.204 109.981 22.705 109.513 24.2517L108.044 23.6096C108.198 22.7792 107.872 22.0487 107.071 21.6977C105.966 21.2155 104.913 21.8375 104.342 23.1445C103.775 24.44 104.023 25.6442 105.116 26.1208C105.938 26.4803 106.697 26.2235 107.199 25.5444L108.66 26.1836C107.852 27.5818 106.243 28.0755 104.588 27.3535C102.576 26.4746 101.951 24.577 102.861 22.4967Z" fill="#231F20"/>
    <path d="M111.608 31.0341C109.753 29.8955 109.325 27.7496 110.449 25.9147C111.577 24.0799 113.682 23.4892 115.537 24.6278C117.392 25.7663 117.82 27.9122 116.696 29.7471C115.569 31.5819 113.463 32.1726 111.608 31.0341ZM112.31 29.8898C113.363 30.5347 114.581 30.081 115.312 28.8939C116.042 27.7068 115.891 26.4141 114.838 25.7663C113.777 25.1157 112.555 25.5694 111.828 26.7565C111.1 27.9436 111.248 29.2363 112.31 29.8898Z" fill="#231F20"/>
    <path d="M120.742 28.0938L122.326 29.4435L120.363 34.9024L125.394 32.0602L126.943 33.3814L122.149 39.0059L120.999 38.0271L124.212 34.2604L119.538 36.7801L118.559 35.944L120.308 30.9302L117.095 34.697L115.945 33.7182L120.739 28.0938H120.742Z" fill="#231F20"/>
    <path d="M128.858 35.4199L132.153 39.1296L131.135 40.0342L128.892 37.5087L127.653 38.6102L129.477 40.662L128.507 41.5237L126.683 39.472L125.405 40.6077L127.725 43.2216L126.706 44.1262L123.333 40.3281L128.86 35.4199H128.858Z" fill="#231F20"/>
    <path d="M135.786 44.0185L138.383 48.1476L137.23 48.8724L135.475 46.0845L134.011 47.0062L135.45 49.2948L134.351 49.9853L132.913 47.6968L130.376 49.2919L129.531 47.9507L135.786 44.0156V44.0185Z" fill="#231F20"/>
    <path d="M139.484 50.125L140.783 52.8388C141.485 54.3055 141.085 55.7009 139.733 56.3487C138.876 56.7596 137.975 56.6397 137.31 56.1033L135.367 58.6487L134.61 57.0678L136.311 54.8734L135.738 53.672L133.497 54.7421L132.815 53.3125L139.484 50.125ZM138.976 52.1225L136.927 53.1013L137.487 54.2741C137.809 54.9504 138.414 55.1873 139.033 54.8933C139.661 54.5937 139.858 53.9716 139.533 53.2953L138.973 52.1225H138.976Z" fill="#231F20"/>
    <path d="M136.822 63.0505C136.154 60.9817 137.225 59.0726 139.273 58.4106C141.322 57.7486 143.306 58.6731 143.976 60.742C144.644 62.8108 143.574 64.7199 141.525 65.3819C139.476 66.0439 137.493 65.1194 136.822 63.0505ZM138.098 62.6396C138.477 63.8153 139.699 64.2633 141.026 63.8353C142.352 63.4072 143.08 62.3286 142.701 61.1529C142.318 59.9687 141.097 59.5178 139.77 59.9458C138.443 60.3739 137.715 61.4525 138.098 62.6368V62.6396Z" fill="#231F20"/>
    <path d="M145.674 66.7646L145.996 68.8192L140.951 71.6813L146.621 72.8028L146.935 74.8174L139.633 75.9617L139.399 74.4693L144.293 73.7045L139.102 72.5716L138.902 71.2989L143.499 68.6337L138.605 69.3984L138.371 67.906L145.674 66.7617V66.7646Z" fill="#231F20"/>
    <path d="M147.169 80.8657L146.935 86.7212L145.574 86.667L145.659 84.524L139.635 84.2843L139.698 82.7005L145.722 82.9402L145.808 80.8086L147.169 80.8628V80.8657Z" fill="#231F20"/>
    <path d="M146.71 89.0018L146.45 90.5628L143.522 90.0776L143.043 92.974L145.971 93.4591L145.711 95.0201L138.42 93.8101L138.68 92.2492L141.69 92.7486L142.17 89.8522L139.159 89.3528L139.419 87.7891L146.71 88.999V89.0018Z" fill="#231F20"/>
    <path d="M145.069 97.6297L143.662 102.387L142.355 102.001L143.314 98.7626L141.724 98.2917L140.945 100.923L139.701 100.555L140.48 97.9236L138.839 97.4385L137.849 100.789L136.542 100.403L137.983 95.5352L145.069 97.6325V97.6297Z" fill="#231F20"/>
    <path d="M141.419 108.153L140.706 109.569L138.057 108.233L136.736 110.853L139.384 112.188L138.671 113.604L132.073 110.277L132.787 108.861L135.512 110.237L136.833 107.617L134.108 106.242L134.821 104.826L141.419 108.153Z" fill="#231F20"/>
    <path d="M137.276 115.901L134.516 120.025L133.384 119.265L135.264 116.458L133.886 115.536L132.359 117.816L131.281 117.094L132.807 114.814L131.386 113.864L129.443 116.769L128.31 116.01L131.135 111.789L137.276 115.901Z" fill="#231F20"/>
    <path d="M127.815 116.752L131.642 123.629L130.401 125.067L123.056 122.265L124.166 120.978L125.761 121.603L127.596 119.477L126.745 117.99L127.815 116.752ZM128.286 120.633L127.011 122.111L129.779 123.204L128.289 120.633H128.286Z" fill="#231F20"/>
    <path d="M127.105 128.581L124.865 130.59C123.655 131.674 122.203 131.685 121.204 130.567C120.57 129.859 120.431 128.963 120.759 128.173L117.771 127.023L119.078 125.853L121.661 126.869L122.651 125.981L120.996 124.132L122.174 123.076L127.105 128.581ZM125.045 128.655L123.53 126.966L122.562 127.833C122.003 128.332 121.946 128.98 122.405 129.491C122.87 130.01 123.521 130.025 124.078 129.522L125.045 128.655Z" fill="#231F20"/>
    <path d="M121.532 133.438L116.75 136.823L115.962 135.713L117.711 134.474L114.227 129.555L115.52 128.639L119.004 133.558L120.745 132.326L121.532 133.438Z" fill="#231F20"/>
    <path d="M83.8732 147.401L82.2267 147.358L81.0425 141.911L79.4188 147.256L77.9948 147.207L76.7678 141.768L75.1955 147.116L73.5917 147.062L75.8946 139.742L77.7095 139.802L78.8338 144.753L80.2406 139.885L82.0555 139.945L83.8704 147.401H83.8732Z" fill="#231F20"/>
    <path d="M71.3807 146.627L66.4982 145.74L66.7408 144.399L70.0652 145.004L70.362 143.372L67.6596 142.881L67.8908 141.602L70.5931 142.093L70.8985 140.409L67.4599 139.785L67.7024 138.443L72.6991 139.354L71.375 146.627H71.3807Z" fill="#231F20"/>
    <path d="M62.1063 140.775C61.3073 142.901 59.4896 143.806 57.395 143.021C55.7542 142.405 54.9838 140.941 55.3718 139.372L56.8728 139.937C56.7615 140.775 57.124 141.486 57.9458 141.794C59.073 142.217 60.0945 141.54 60.5939 140.208C61.0904 138.884 60.7822 137.696 59.6665 137.277C58.8275 136.96 58.0828 137.257 57.6148 137.962L56.1223 137.403C56.8557 135.964 58.4366 135.385 60.1288 136.019C62.1834 136.792 62.9053 138.652 62.1092 140.778L62.1063 140.775Z" fill="#231F20"/>
    <path d="M52.918 132.704C54.8299 133.743 55.3693 135.866 54.3391 137.758C53.309 139.65 51.2344 140.349 49.3254 139.307C47.4163 138.268 46.8741 136.145 47.9043 134.253C48.9344 132.362 51.009 131.662 52.918 132.704ZM52.276 133.882C51.1916 133.292 49.996 133.808 49.3311 135.032C48.6662 136.257 48.8802 137.541 49.9646 138.131C51.0604 138.728 52.2531 138.211 52.918 136.987C53.5829 135.763 53.3689 134.479 52.2731 133.885L52.276 133.882Z" fill="#231F20"/>
    <path d="M43.9574 136.12L42.308 134.855L43.983 129.302L39.1063 132.401L37.4883 131.163L41.9827 125.299L43.1812 126.218L40.1678 130.147L44.705 127.388L45.7266 128.172L44.2399 133.272L47.2533 129.342L48.4518 130.261L43.9574 136.125V136.12Z" fill="#231F20"/>
    <path d="M35.4653 129.215L31.9839 125.68L32.9541 124.724L35.3254 127.132L36.5068 125.968L34.5807 124.01L35.5052 123.1L37.4314 125.058L38.6499 123.859L36.1986 121.368L37.1689 120.412L40.7301 124.03L35.4624 129.215H35.4653Z" fill="#231F20"/>
    <path d="M28.1029 120.987L25.2949 116.997L26.4078 116.212L28.3055 118.906L29.7208 117.91L28.1656 115.699L29.2272 114.951L30.7824 117.163L33.2336 115.436L34.1439 116.732L28.1 120.987H28.1029Z" fill="#231F20"/>
    <path d="M24.0967 115.085L22.6585 112.442C21.8823 111.013 22.2048 109.6 23.5231 108.884C24.3564 108.43 25.2638 108.502 25.9544 109.004L27.7607 106.361L28.5996 107.899L27.0159 110.179L27.6522 111.349L29.8324 110.162L30.5886 111.555L24.0967 115.088V115.085ZM24.499 113.062L26.4937 111.977L25.8716 110.836C25.5121 110.177 24.8957 109.971 24.2936 110.299C23.6801 110.633 23.5203 111.261 23.877 111.92L24.499 113.062Z" fill="#231F20"/>
    <path d="M26.0797 102.044C26.8559 104.076 25.8885 106.039 23.8768 106.807C21.865 107.575 19.8332 106.759 19.0599 104.727C18.2837 102.695 19.2511 100.732 21.2629 99.9642C23.2747 99.1966 25.3036 100.013 26.0797 102.044ZM24.827 102.524C24.3876 101.371 23.1434 100.986 21.8422 101.482C20.5409 101.979 19.8703 103.095 20.3098 104.247C20.7549 105.412 21.9962 105.794 23.3003 105.298C24.6044 104.801 25.2722 103.685 24.827 102.521V102.524Z" fill="#231F20"/>
    <path d="M17.045 98.7954L16.617 96.7608L21.5052 93.6361L15.7837 92.8114L15.3643 90.8168L22.5981 89.293L22.9091 90.7711L18.0638 91.7927L23.3058 92.6516L23.5712 93.9129L19.1224 96.815L23.9678 95.7934L24.2789 97.2716L17.045 98.7954Z" fill="#231F20"/>
    <path d="M14.8339 84.8255L14.7397 78.9642L16.1009 78.9414L16.1352 81.0845L22.1648 80.9874L22.1905 82.5712L16.1608 82.6682L16.1951 84.7998L14.8339 84.8226V84.8255Z" fill="#231F20"/>
    <path d="M14.8594 76.6468L15.0363 75.0716L17.9841 75.4055L18.3122 72.4891L15.3645 72.1553L15.5414 70.5801L22.8865 71.4105L22.7096 72.9857L19.6762 72.6432L19.3481 75.5596L22.3814 75.902L22.2045 77.4772L14.8594 76.6468Z" fill="#231F20"/>
    <path d="M16.0522 67.9348L17.2108 63.1094L18.5349 63.4261L17.7473 66.7106L19.3596 67.0987L20.0016 64.4277L21.2658 64.7302L20.6237 67.4012L22.2873 67.8007L23.1035 64.402L24.4275 64.7188L23.2433 69.6584L16.0551 67.9319L16.0522 67.9348Z" fill="#231F20"/>
    <path d="M19.1454 57.2366L19.7846 55.7869L22.4984 56.9826L23.6826 54.2974L20.9688 53.1017L21.608 51.6521L28.371 54.6341L27.7318 56.0837L24.9382 54.8538L23.7539 57.539L26.5476 58.7689L25.9084 60.2186L19.1454 57.2366Z" fill="#231F20"/>
    <path d="M22.8751 49.2858L25.4177 45.0254L26.5876 45.7245L24.8555 48.6266L26.2795 49.477L27.6863 47.1199L28.802 47.7848L27.3952 50.1419L28.8648 51.0179L30.6569 48.016L31.8268 48.7151L29.2244 53.0754L22.878 49.2858H22.8751Z" fill="#231F20"/>
    <path d="M32.2837 47.9394L28.1089 41.2705L29.276 39.7695L36.7553 42.1894L35.7108 43.5306L34.0872 42.9884L32.3636 45.2056L33.2881 46.6467L32.2837 47.9394ZM31.6131 44.0899L32.8116 42.5489L29.9923 41.6015L31.6131 44.0927V44.0899Z" fill="#231F20"/>
    <path d="M32.3779 36.0959L34.5124 33.9757C35.6653 32.8285 37.1149 32.7458 38.1707 33.8073C38.8413 34.4807 39.0239 35.3711 38.7386 36.1758L41.7805 37.1717L40.5363 38.4073L37.9053 37.5255L36.9608 38.4643L38.71 40.225L37.5857 41.3408L32.3779 36.0987V36.0959ZM34.4325 35.9161L36.0334 37.5255L36.9551 36.6095C37.4859 36.0816 37.5115 35.431 37.0264 34.9459C36.5356 34.4522 35.885 34.4722 35.3542 35.0001L34.4325 35.9161Z" fill="#231F20"/>
    <path d="M37.6942 30.9498L42.2942 27.3201L43.1388 28.3902L41.4552 29.7171L45.1906 34.4512L43.9464 35.4328L40.2111 30.6987L38.536 32.0199L37.6913 30.9498H37.6942Z" fill="#231F20"/>
  </g>
  <defs>
    <clipPath id="clip0_1863_16105">
      <rect width="132.429" height="132.652" fill="white" transform="translate(14.7397 14.748)"/>
    </clipPath>
  </defs>
</svg>

      </div>
      
      <div class="text">
        <span>📠</span>
      </div>
      
    </div>
    
  </div>
  
  <div class="main col-xs-12 col-md-8">
    
    <div class="footer-newsletter">

      
      <div id="newsletter" class="newsletter-form-wrap form__block">

        
                
        <img class="gform_ajax_spinner" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Loading" />

        <div class="gfid sr-only" data-id="4" data-title="false" data-descr="true" data-ajax="true"></div>

      </div>

      
</div>    
    <div class="row">
      
      <div class="col-xs-12 col-sm-1 last-sm">
        
        <div class="footer-social">

  
    
      <a href="https://www.instagram.com/videoamp/" target="_blank">IG</a>

      <a href="https://www.facebook.com/VideoAmpOfficial/" target="_blank">FB</a>

      <a href="https://twitter.com/video_amp" target="_blank">TW</a>

      <a href="https://www.linkedin.com/company/videoamp/" target="_blank">LI</a>

    
  
</div>        
      </div>
        
      <div class="col-xs-6">
        
        
  
    
    
      <ul class="footer-nav">

        
                                <li>
              <a class="footer-nav-link-About" href="https://videoamp.com/about/" >
               About              </a>
            </li>
          
        
                                <li>
              <a class="footer-nav-link-Data" href="https://videoamp.com/data/" >
               Data              </a>
            </li>
          
        
                                <li>
              <a class="footer-nav-link-Careers" href="https://videoamp.com/careers/" >
               Careers              </a>
            </li>
          
        
                                <li>
              <a class="footer-nav-link-Platform" href="https://videoamp.com/platform/" >
               Platform              </a>
            </li>
          
        
                                <li>
              <a class="footer-nav-link-Contact us" href="https://videoamp.com/contact/" >
               Contact us              </a>
            </li>
          
        
                                <li>
              <a class="footer-nav-link-Solutions" href="https://videoamp.com/solutions/" >
               Solutions              </a>
            </li>
          
        
      </ul>

    
  
        
      </div>
      
      <div class="col-xs-6 col-sm-3">
        
        
    
    
    
      <ul class="footer-nav with-sub">
        
        <li>
          <a class="top-link" href="https://videoamp.com/resources/"  >
            Resources          </a>
        </li>

        
                    
            <li>
              <a href="https://videoamp.com/case-studies/"  >
                Case studies              </a>
            </li>

          
        
                    
            <li>
              <a href="https://videoamp.com/blog/"  >
                Blog              </a>
            </li>

          
        
                    
            <li>
              <a href="https://videoamp.com/newsroom/"  >
                Newsroom              </a>
            </li>

          
        
                    
            <li>
              <a href="https://videoamp.com/library/"  >
                Library              </a>
            </li>

          
        
      </ul>

    
  
        
      </div>
      
      <div class="col-xs-12 col-sm-2">
        
        <a class="client_login plain" href="https://platform.videoamp.com/">Log In</a>
        
      </div>
    
    </div>
    
  </div>

</div><div class="footer-legal">
  
  <div class="row between-sm">
    
    <div class="col-xs-12 col-sm-8 last-sm col-md-9">
      
      
      <ul>

        
          
          
              <li>
                <a href="https://videoamp.com/privacy-policy/" >
                  Privacy policy                </a>
              </li>

          
        
          
          
              <li>
                <a href="https://videoamp.com/us-privacy-notice/" >
                  US Privacy Notice                </a>
              </li>

          
        
          
          
              <li>
                <a href="https://videoamp.com/your-privacy-choices/" >
                  Your Privacy Choices  <span class="pcy-icn"></span>                </a>
              </li>

          
        
          
          
              <li>
                <a href="https://videoamp.com/opt-out/" >
                  Do not sell my personal information                </a>
              </li>

          
        
          
          
              <li>
                <a href="https://app.salesforceiq.com/r?target=645e7777c175071b7f14f265&t=AFwhZf2cexj7USvADm_NjlumdCoZIm4LJVFw4wsPQwmGH8tIVf7bZEVlOTt3rO_jU17jDu5Ze5HmE0-qCwYjvPexc0pDA-yepAEClW0yDrBDMhcFeWeoAUIg6VfeDc9VfUptTU_XggOs&url=https%3A%2F%2Fsecure.ethicspoint.com%2Fdomain%2Fmedia%2Fen%2Fgui%2F86647%2Findex.html" target="_blank">
                  Complaint and Investigation Policy                </a>
              </li>

          
        
      </ul>

            
    </div>
    
    <div class="col-xs-12 col-sm-3">
      
      <div class="footer-legal-copy">

        <p class="p-legal">&copy; VideoAmp, Inc. All rights reserved.</p>

      </div>
      
    </div>
    
  </div>

</div>            </div>

          </footer>

        </div> <!-- End transition wrap -->

      </div> <!-- End smooth-wrapper -->
      
    </div> <!-- End smooth-wrapper -->
    
    <div class="footer-facts">
  
  <div class="fact"><span>Slightly over half of our company is made up of new Vampers joining a year ago!</span></div><div class="fact fact-sm"><span>Nearly a quarter of Vampers are actively serving a charity.</span></div><div class="fact fact-sm"><span>58% of Vampers are busy practicing a sport.</span></div><div class="fact fact-sm"><span>More than a quarter of Vampers play at least one instrument.</span></div><div class="fact"><span>A brave 5% of Vampers are running their own small zoo with 5+ pets at home!</span></div><div class="fact fact-sm"><span>60% of Vamper parents are raising 2-5 future Vampers!</span></div><div class="fact"><span>We are busy collecting passport stamps! Almost 10% of Vampers have traveled to 24+ countries.</span></div><div class="fact fact-sm"><span>Top 3 sports played by Vampers: Soccer, Baseball and Tennis.</span></div><div class="fact"><span>34% of Vampers participate in our Wellness programs up to 3 times a week.</span></div><div class="fact"><span>Nearly half of Vampers participate in our Wellness programs at least once a week.</span></div><div class="fact fact-sm"><span>23% of Vampers play 2 instruments.</span></div><div class="fact fact-sm"><span>8% of Vampers are one-person band and can play 4 or more instruments!</span></div><div class="fact"><span>Pickle Ball is the sport most Vampers chose when asked what VideoAmp’s official sport should be.</span></div><div class="fact"><span>We have some especially talented Vampers in the areas of: 19th century chemical photography, champion knitter, knife forging and lithography.</span></div><div class="fact"><span>Over 90% of Vampers said that their coworkers were the best thing about working at VideoAmp.</span></div><div class="fact"><span>Swimming with sharks is the most popular activity amongst our thrill-seeking Vampers.</span></div><div class="fact"><span>The most popular items growing in our Vamper’s gardens right now are: artichoke, mint, peppers, squash, radish, garlic, tomatoes, dill and basil.</span></div><div class="fact fact-sm"><span>We like to travel: half of Vampers have traveled to 9-12 countries.</span></div><div class="fact fact-sm"><span>We are pet lovers: nearly 60% of Vampers own at least one pet.</span></div><div class="fact"><span>7% of Vampers enjoy the VideoAmp wellness program offerings 5 or more times a week!</span></div><div class="fact"><span>Swimming amongst legends: 2 nationally ranked swim champions work at VideoAmp. </span></div><div class="fact"><span>33% of Vampers are AdTech pros having worked in the space for over 8 years.</span></div><div class="fact"><span>VideoAmp hiking enthusiasts have summited: Mount Whitney, Half Dome and the Teton Range.</span></div>  
  <div class="fact constant">
    <span>Responses based on 160 Vampers who took this Fun Facts survey.</span>
  </div>

</div>    
    <script type="text/javascript" src="https://videoamp.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2" id="wp-polyfill-inert-js"></script>
<script type="text/javascript" src="https://videoamp.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0" id="regenerator-runtime-js"></script>
<script type="text/javascript" src="https://videoamp.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0" id="wp-polyfill-js"></script>
<script type="text/javascript" src="https://videoamp.com/wp-includes/js/dist/dom-ready.min.js?ver=392bdd43726760d1f3ca" id="wp-dom-ready-js"></script>
<script type="text/javascript" src="https://videoamp.com/wp-includes/js/dist/hooks.min.js?ver=c6aec9a8d4e5a5d543a1" id="wp-hooks-js"></script>
<script type="text/javascript" src="https://videoamp.com/wp-includes/js/dist/i18n.min.js?ver=7701b0c3857f914212ef" id="wp-i18n-js"></script>
<script type="text/javascript" id="wp-i18n-js-after">
/* <![CDATA[ */
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
/* ]]> */
</script>
<script type="text/javascript" src="https://videoamp.com/wp-includes/js/dist/a11y.min.js?ver=7032343a947cfccf5608" id="wp-a11y-js"></script>
<script type="text/javascript" defer='defer' src="https://videoamp.com/wp-content/plugins/gravityforms/js/placeholders.jquery.min.js?ver=2.7.17" id="gform_placeholder-js"></script>
<script type="text/javascript" defer='defer' src="https://videoamp.com/wp-content/plugins/gravityforms/assets/js/dist/vendor-theme.min.js?ver=4ef53fe41c14a48b294541d9fc37387e" id="gform_gravityforms_theme_vendors-js"></script>
<script type="text/javascript" id="gform_gravityforms_theme-js-extra">
/* <![CDATA[ */
var gform_theme_config = {"common":{"form":{"honeypot":{"version_hash":"cd394e5778665a87e2e81787ff72f8bd"}}},"hmr_dev":"","public_path":"https:\/\/videoamp.com\/wp-content\/plugins\/gravityforms\/assets\/js\/dist\/"};
/* ]]> */
</script>
<script type="text/javascript" defer='defer' src="https://videoamp.com/wp-content/plugins/gravityforms/assets/js/dist/scripts-theme.min.js?ver=f4d12a887a23a8c5755fd2b956bc8fcf" id="gform_gravityforms_theme-js"></script>
<script type="text/javascript" id="va2022-scripts-js-extra">
/* <![CDATA[ */
var ajax = {"nonce":"17d873931a","url":"https:\/\/videoamp.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type="text/javascript" src="https://videoamp.com/wp-content/themes/va2022/assets/dist/js/scripts.js?ver=1704604361" id="va2022-scripts-js"></script>

    <!-- Google Tag Manager -->
    <!--<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T85HMKT');</script>-->
    <!-- End Google Tag Manager -->

  </body>

</html>
