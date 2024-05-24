"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["bundle.ImmersiveMediaViewer"],{1778:(e,t,n)=>{n.d(t,{Z:()=>i});n(200634);var r=n(202784),o=n(272175);const i=function(e){var t=e.canonical,n=e.description,i=void 0===n?"":n,a=e.image,l=e.imageAlt,d=e.imageH,s=e.imageType,c=e.imageW,u=e.title,p=e.ttl,m=e.type;return r.createElement(o.ql,null,m?r.createElement("meta",{content:m,property:"og:type"}):null,t?r.createElement("meta",{content:t,property:"og:url"}):null,u?r.createElement("meta",{content:u,property:"og:title"}):null,r.createElement("meta",{content:i,property:"og:description"}),a?r.createElement("meta",{content:a,property:"og:image"}):null,s?r.createElement("meta",{content:s,property:"og:image:type"}):null,c?r.createElement("meta",{content:c,property:"og:image:width"}):null,d?r.createElement("meta",{content:d,property:"og:image:height"}):null,l?r.createElement("meta",{content:l,property:"og:image:alt"}):null,p?r.createElement("meta",{content:p,property:"og:ttl"}):null)}},792684:(e,t,n)=>{n.d(t,{f:()=>a});var r=n(709249),o=n(887371),i=(n(202784),function(){function e(t,n,o,i,a){(0,r.Z)(this,e),this.id=t,this._renderer=o,this.canBeAnchor=i,this.data=n,this.sortIndex=a}return(0,o.Z)(e,[{key:"render",value:function(e){return(0,this._renderer)(this.data,e)}}]),e}()),a=function(e,t,n,r){return new i(e,t,n,r,arguments.length>4&&void 0!==arguments[4]?arguments[4]:"-1")}},644682:(e,t,n)=>{n.d(t,{Z:()=>r});const r=Object.freeze({MOVEMENT:"movement",LIST_UPDATE:"list_update",INITIAL_POSITION:"initial_position"})},76270:(e,t,n)=>{n.d(t,{H:()=>i,V:()=>a});n(315735),n(906886),n(571372);var r=n(202784),o=n(801206),i=r.createContext({blockedOrMutedEntryIds:new Set,forwardPivotInfo:void 0,hasClosedCaptioning:!0,isMuted:!1,setTweetContentHidden:o.Z,isTweetContentHidden:!1,setHasClosedCaptioning:o.Z,onMuteToggle:o.Z,onTweetUpdate:o.Z,setBlockedOrMutedEntry:o.Z});function a(){var e=r.useContext(i);if(void 0===e)throw new Error("useImmersiveMediaViewerContext was used outside of its provider ImmersiveMediaViewerContext");return e}},367445:(e,t,n)=>{n.r(t),n.d(t,{ImmersiveMediaViewerScreen:()=>Ae,default:()=>Re});var r=n(196234),o=(n(315735),n(906886),n(136728),n(477950),n(385940),n(888233),n(460523),n(543673),n(240753),n(128399),n(94908),n(74069),n(202784)),i=n(878052),a=n(325686),l=n(973186),d=n(645184),s=n.n(d),c=n(958955),u=n(765526),p=n(1778),m=n(806454),h=n(807896),f=n(76270),v=n(968079),w=n(256666),y=n(709249),b=n(887371),I=n(545754),g=n(486906),_=n(16587),S=n(539466),Z=n(503614),E=n(801206),T=n(107333),M=n(472599),P=n(766961),k=n(620616),A=n(275297),D=n(792684),R=n(644682),C=n(476984),x=n.n(C),H=n(746039),U=n(32307),V=n(206149),F=n(308329),N=n(460673),L=n(219162),O=n(580753),B=function(e){(0,I.Z)(n,e);var t=(0,g.Z)(n);function n(){var e;(0,y.Z)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o)))._contentsFocusable=!1,e._setRef=function(t){var n=e.props,r=n.item,o=n.setAPI;o&&(t?(e._element=t,o(r.id,(0,O.Z)(e))):(o(r.id,void 0),e._element=void 0))},e._setIsItemFocusable=function(t){e._contentsFocusable=t},e}return(0,b.Z)(n,[{key:"shouldComponentUpdate",value:function(e){var t=this.props.item;return!(0,U.Z)(e.item,t)}},{key:"componentWillUnmount",value:function(){this.props.setAPI&&this.props.setAPI(this.props.item.id,void 0)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.item,r=t.setAPI;e.item.id!==n.id&&r&&(r(e.item.id,void 0),r(n.id,this))}},{key:"getElement",value:function(){return this._element}},{key:"isFocusable",value:function(){return this._contentsFocusable}},{key:"render",value:function(){var e=this.props.item;return o.createElement("div",{"data-testid":"cellInnerDiv-".concat(e.id),ref:this._setRef},e.render(this._setIsItemFocusable))}}]),n}(o.Component),K=l.Z.supports("height: 100dvh"),z=function(e){(0,I.Z)(n,e);var t=(0,g.Z)(n);function n(e){var r;return(0,y.Z)(this,n),(r=t.call(this,e))._scrollRef=o.createRef(),r._isSafari=V.ZP.isSafari()||V.ZP.isIOS(),r._lastItemIndexRef=o.createRef(),r._getCurrentItemIndexMemoized=(0,_.Z)((function(e,t){return e.findIndex((function(e){return e.id===t}))})),r._getCurrentItemIndex=function(){var e=r.props.list;if(!r.state.visibleItemId)return 0;var t=r._getCurrentItemIndexMemoized(e,r.state.visibleItemId);return-1===t?r._lastItemIndexRef.current||0:(r._lastItemIndexRef.current=t,t)},r._handleWindowResize=function(){r.setState({windowInnerHeight:window.innerHeight})},r._calculateNearestSnapStopPosition=function(e,t){var n=Math.floor(e/t);return e%t>=t/2?n+1:n},r._handleScroll=function(e){var t=Math.round(e.nativeEvent.contentOffset.y),n=window.innerHeight||1,o=r._calculateNearestSnapStopPosition(t,n);r._updateScrollEnd(o)},r._updateScrollEnd=(0,S.Z)((function(e){var t=r.props,n=t.analytics,o=t.onPositionUpdate,i=t.onScrollEnd,a=t.viewport,l=r._getCurrentItemIndex(),d=e;l!==d&&(n.scribe({action:"scroll",data:{event_value:window.innerHeight}}),d>l&&n.scribe({component:"feed",action:"next"}),d<l&&n.scribe({component:"feed",action:"previous"}),d===r.props.list.length-2&&n.scribe({action:"load",element:"bottom"}),o(d,a.getRect()),i(),r.setState((function(e){var t=e.visibleItemId;return{visibleItemId:r.props.list[d]?r.props.list[d].id:t}})))}),100),r.adjustFocusBy=function(e){r.setState((function(t){var n,o,i,a,l=t.windowInnerHeight,d=r._getCurrentItemIndex(),s=(o=d+e,i=0,a=r.props.list.length-1,Math.min(Math.max(o,i),a));return null===(n=r._scrollRef.current)||void 0===n||n.scrollTo({y:l*s,animated:!0}),{visibleItemId:r.props.list[s].id}}))},r.scrollToIndex=function(e){r.setState((function(t){var n,o=t.windowInnerHeight,i=Math.min(r.props.list.length-1,e);return null===(n=r._scrollRef.current)||void 0===n||n.scrollTo({y:o*i,animated:!1}),{visibleItemId:r.props.list[i].id}}))},r.scrollToNewest=function(){r.setState((function(){var e;return null===(e=r._scrollRef.current)||void 0===e||e.scrollTo({y:0,animated:!1}),{visibleItemId:r.props.list.length?r.props.list[0].id:void 0}}))},r.isAtNewest=function(){return!!r.props.list.length&&r.state.visibleItemId===r.props.list[0].id},r._lastItemIndexRef.current=0,r.state={visibleItemId:e.list.length?e.list[0].id:void 0,windowInnerHeight:window.innerHeight},window.addEventListener("resize",r._handleWindowResize),r}return(0,b.Z)(n,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._handleWindowResize)}},{key:"render",value:function(){var e=K?"100dvh":"".concat(this.state.windowInnerHeight,"px"),t=this._getCurrentItemIndex();return o.createElement(L.Z.Provider,{value:{isGlobal:!1,isSticky:!1,adjustFocusBy:this.adjustFocusBy,currentIndex:t,totalItems:this.props.list.length}},o.createElement(a.Z,{style:{height:e,maxHeight:e}},o.createElement(H.Z,{onScroll:this._handleScroll,ref:this._scrollRef,scrollEventThrottle:16,showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,style:j.scrollView,testID:"vss-scroll-view"},this.props.list.map((function(n,r){var i=Math.abs(t-r)<=1;return o.createElement(a.Z,{key:n.id,style:{height:e,maxHeight:e,width:"100%"}},o.createElement(a.Z,{style:j.scrollSnapItem},o.createElement(a.Z,{style:j.scrollSnapItemInner},i&&o.createElement(B,{item:n,key:n.id}))))})))))}},{key:"shouldComponentUpdate",value:function(e,t){return!x()(this.props,e)||!(0,U.Z)(this.state,t)}},{key:"componentDidMount",value:function(){var e=new URLSearchParams(window.location.search).get("currentTweet");e&&this._scrollToCurrentTweet(e)}},{key:"componentDidUpdate",value:function(e){var t=new URLSearchParams(window.location.search).get("currentTweet");this.props.list.length!==e.list.length&&t&&this._scrollToCurrentTweet(t)}},{key:"_scrollToCurrentTweet",value:function(e){var t=this.props.list.findIndex((function(t){return t.id==="tweet-".concat(e)}));t>=0&&this.scrollToIndex(t)}}]),n}(o.Component),j=l.Z.create((function(){return{scrollView:{overflowY:"auto",scrollSnapType:"y mandatory",height:"100%"},scrollSnapItem:{width:"100%",scrollSnapAlign:"start",scrollSnapStop:"always"},scrollSnapItemInner:{height:window.innerHeight,width:"100%"}}}));const W=(0,F.Z)((0,N.Z)(z));var q={triggerCause:R.Z.MOVEMENT},G=function(e){(0,I.Z)(n,e);var t=(0,g.Z)(n);function n(e,r){var i,a;(0,y.Z)(this,n),(a=t.call(this,e,r))._renderer=o.createRef(),a._keyboardShortcutHandlers=(i={},(0,w.Z)(i,P.uq.refresh,a._handleKeyboardRefresh),(0,w.Z)(i,P.uq.nextItem,a._handleKeyboardFocusNext),(0,w.Z)(i,P.uq.previousItem,a._handleKeyboardFocusPrevious),i),a._getList=(0,_.Z)((function(e,t,n,r){return e.filter((function(e){return!a.props.blockedOrMutedEntryIds.has(n(e))})).map((function(e,o){return(0,D.f)(n(e),e,t,!1,r&&r(e))}))})),a._render=function(){var e=a.props.withKeyboardShortcuts;return o.createElement(A.Z,{enabled:e,handlers:a._keyboardShortcutHandlers},o.createElement(W,{list:a.state.list,onPositionUpdate:a._handlePositionUpdate,onScrollEnd:a._handleScrollEnd,ref:a._renderer}))},a._handleScrollEnd=function(){a.props.onScrollEnd&&a.props.onScrollEnd()},a._handlePositionUpdate=function(e,t){var n=a.props.onItemsRendered,r=a.state.list;0===e&&a.props.onAtStart(q),e===r.length-1&&a.props.onAtEnd(q),1===e&&a.props.onNearStart(q),e===r.length-2&&a.props.onNearEnd(q),r[e]?n&&n({positions:[{id:r[e].id,rectangle:t}],viewport:t}):(0,M.ZP)("VerticalSnapScroller could not update position to ".concat(e,", itemList was ").concat(r.length," elements."),{level:"warning"})},a._handleKeyboardRefresh=(0,S.Z)((function(){a.props.onKeyboardRefresh&&a.props.onKeyboardRefresh()}),1e3),a._handleKeyboardFocusNext=function(){a.adjustFocusBy(1)},a._handleKeyboardFocusPrevious=function(){a.adjustFocusBy(-1)},a.isAtNewest=function(){return!a._renderer.current||a._renderer.current.isAtNewest()};var l=a.props,d=l.identityFunction,s=l.items,c=l.renderer,u=l.sortIndexFunction;return a.state={_items:s,list:a._getList(s,c,d,u)},a}return(0,b.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.noItemsRenderer;return t.length?this._render():n()}},{key:"componentDidMount",value:function(){(0,this.props.onPositionRestored)()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.cacheKey,r=t.onPositionRestored;if(n!==e.cacheKey&&r(),e.items!==this.props.items){var o=this.props,i=o.identityFunction,a=o.renderer,l=o.sortIndexFunction,d=(0,Z.Z)([].concat((0,v.Z)(this.state._items),(0,v.Z)(this.props.items)),(function(e){return i(e)}));this.setState({_items:d,list:this._getList(d,a,i,l)})}}},{key:"adjustFocusBy",value:function(e){this._renderer.current&&this._renderer.current.adjustFocusBy(e)}},{key:"scrollToNewest",value:function(e){this._renderer.current&&this._renderer.current.scrollToNewest(e)}}]),n}(o.PureComponent);G.contextType=k.y3,G.defaultProps={onPositionRestored:E.Z,onAtEnd:E.Z,onAtStart:E.Z,onNearEnd:E.Z,onNearStart:E.Z,onScrollEnd:E.Z,noItemsRenderer:T.Z,withKeyboardShortcuts:!1};const X=o.forwardRef((function(e,t){return o.createElement(a.Z,null,o.createElement(f.H.Consumer,null,(function(n){var r=n.blockedOrMutedEntryIds;return o.createElement(G,(0,h.Z)({ref:t},e,{blockedOrMutedEntryIds:r}))})))}));var Y=n(963705),$=n(231372),J=n(199241),Q=n(581686),ee=n(33988),te=n(301231),ne=n(193490),re=n(78772),oe=n(962104);const ie=function(e,t){return(0,oe.Z)({timelineId:"immersiveMedia-".concat(e),network:{getEndpoint:function(e){return e.withEndpoint(ne.ZP).fetchImmersiveMedia},getEndpointParams:function(){return{pinned_tweet_id:e,page_name:t}}},context:"FETCH_IMMERSIVE_MEDIA",perfKey:"immersiveMedia",formatResponse:re.Z})};const ae=function(e){return(0,oe.Z)({timelineId:"immersiveProfile-".concat(e),network:{getEndpoint:function(e){return e.withEndpoint(ne.ZP).fetchImmersiveProfile},getEndpointParams:function(){return{pinned_tweet_id:e}}},context:"FETCH_IMMERSIVE_PROFILE",perfKey:"immersiveProfile",formatResponse:re.Z})};var le=n(604641),de=n(392160),se=n(739581),ce=n(407419),ue=function(e,t){var n=new URLSearchParams(t.location.search).get("currentTweetUser");return new URLSearchParams(t.location.search).get("currentTweet")&&n},pe=function(e,t){var n=fe(e,t),r=ue(0,t);return!n&&r?we(e,t):he(e,t)},me=function(e,t){var n=ue(0,t);return!fe(e,t)&&n?ve(e,t):function(e,t){return t.match.params.screenName||""}(0,t)},he=function(e,t){return t.match.params.statusId||""},fe=function(e,t){return!(!e.urt["immersiveMedia-".concat(he(e,t))]&&!e.urt["immersiveProfile-".concat(he(e,t))])},ve=function(e,t){return new URLSearchParams(t.location.search).get("currentTweetUser")||""},we=function(e,t){return new URLSearchParams(t.location.search).get("currentTweet")||""},ye=function(e,t){if("profile"===new URLSearchParams(t.location.search).get("mode"))return"profile"},be=function(e,t){return function(e,t){return e.location&&e.location.state&&e.location.state[t]}(t,"forwardPivotInfo")};const Ie=(0,de.Z)().propsFromState((function(){return{mode:ye,pinnedTweetId:pe,pinnedTweetUser:me,pinnedTweet:ce.Z.createHydratedTweetSelector(pe),forwardPivotInfo:be}})).propsFromActions((function(){return{googleAnalyticsPageView:se.XB}})).withAnalytics({page:"gallery",section:"immersive"});var ge=n(133028),_e=n(637985),Se=n(539928),Ze=(n(73439),n(495034));var Ee=n(512372),Te=n(452612);var Me,Pe=s().h59700fa,ke=(0,ge.Z)((0,ge.Z)({},(0,Ee.G)({})),{},(0,w.Z)({},Te.ZP.Tweet,Se.ov({selectDisplayType:function(e){return e.content.displayType},handlers:(0,w.Z)({},_e.Z.Tweet,(Me={},{loader:function(){return Promise.all([n.e("shared~loader.AudioDock~loader.DMDrawer~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.AudioSpaceStart~bundle"),n.e("shared~loader.AudioDock~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.AudioSpaceStart~bundle.AudioSpaceAnaly"),n.e("shared~loader.AudioDock~loader.DashMenu~loader.SideNav~loader.Typeahead~loader.DMDrawer~bundle.Account~bundle"),n.e("shared~loader.AudioDock~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpaceDetail~bundle.Audi"),n.e("shared~loader.AudioDock~loader.Typeahead~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpaceD"),n.e("shared~loader.AudioDock~loader.DashMenu~loader.SideNav~loader.Typeahead~loader.DMDrawer~bundle.MultiAccount~b"),n.e("shared~loader.DashMenu~loader.DMDrawer~bundle.AccountAnalytics~bundle.ReaderMode~bundle.Articles~bundle.Audio"),n.e("shared~loader.AudioDock~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.AudioS"),n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~~bundle.Commu"),n.e("shared~loader.Typeahead~loader.DMDrawer~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.LiveE"),n.e("shared~loader.AudioDock~loader.DMDrawer~bundle.ReaderMode~bundle.AudioSpaceDetail~bundle.AudioSpacePeek~bundl"),n.e("shared~loader.DashMenu~loader.SideNav~loader.AppModules~loader.DMDrawer~bundle.MultiAccount~bundle.ReaderMode"),n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bundle.Displa"),n.e("shared~bundle.TwitterArticles~bundle.ComposeMedia~bundle.TV~loaders.video.VideoPlayerDefaultUI~loaders.video."),n.e("shared~bundle.LiveEvent~bundle.TwitterArticles~bundle.ComposeMedia~ondemand.SettingsRevamp~bundle.Grok~bundle"),n.e("shared~bundle.TwitterArticles~bundle.ComposeMedia~bundle.TV~ondemand.InlinePlayer~loaders.video.PlayerBase~lo"),n.e("shared~bundle.TwitterArticles~bundle.ComposeMedia~bundle.TV~loaders.video.PlayerBase~loader.MediaPreviewVideo"),n.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),n.e("shared~bundle.TV~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler"),n.e("shared~bundle.Birdwatch~loader.inlineTombstoneHandler~loader.tweetHandler~loader.immersiveTweetHandler"),n.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI~loader.immersiveTweetHandler"),n.e("shared~bundle.TV~loader.immersiveTweetHandler"),n.e("loader.immersiveTweetHandler")]).then(n.bind(n,411759))},loaderOptions:Me,loaderKey:"immersiveTweetLoader",strategy:Ze.Z.OnDemand}))}))),Ae=function(e){var t=e.analytics,n=e.forwardPivotInfo,d=e.history,s=e.location,h=e.mode,v=e.pinnedTweet,w=e.pinnedTweetId,y=e.pinnedTweetUser,b=(0,J.hC)("immersive_viewer_enable_profile_viewer"),I=o.useState(!1),g=(0,r.Z)(I,1)[0],_=o.useState(null),S=(0,r.Z)(_,2),Z=S[0],E=S[1],T=o.useState(!1),M=(0,r.Z)(T,2),P=M[0],k=M[1],A=o.useState(!1),D=(0,r.Z)(A,2),R=D[0],C=D[1],x=o.useState(!1),H=(0,r.Z)(x,2),U=H[0],V=H[1],F=o.useState(!0),N=(0,r.Z)(F,2),L=N[0],O=N[1],B=o.useState(new Set),K=(0,r.Z)(B,2),z=K[0],j=K[1],W=i.Z.get("screen").width;(0,u.q)((function(){if(t.scribe({action:"impression"}),!(W>=l.Z.theme.breakpoints.large))return k(W>=l.Z.theme.breakpoints.large),d.replace("".concat((0,Q.PK)("/".concat(y,"/status/").concat(w)),"?").concat(new URLSearchParams(s.search).toString())),function(){t.scribe({action:"navigate"})};d.push("/".concat(y,"/status/").concat(w))}));var q=o.useCallback((function(e){if(v){var t=new URLSearchParams(s.search),n=Array.from(t.keys()).length?"&".concat(t.toString()):"";d.replace("".concat(v.permalink,"/mediaViewer?currentTweet=").concat(e.id_str,"&currentTweetUser=").concat(e.user.screen_name).concat(n)),E(e)}}),[d,v,s.search]),G=o.useCallback((function(e){C(e)}),[C]),ee=o.useCallback((function(e){V(e)}),[V]),ne=o.useCallback((function(e){O(e)}),[O]),re=o.useMemo((function(){return b&&"profile"===h?ae(w):ie(w,y)}),[h,w,y,b]),oe=o.useMemo((function(){var e,t;if(!v)return null;var n,r,i=function(e){var t,n=((null===(t=e.entities)||void 0===t?void 0:t.media)||[]).find((function(e){return"photo"===e.type}));if(n&&"photo"===n.type)return n}(v);return o.createElement(p.Z,{canonical:(n=v.user.screen_name,r=v.id_str,"https://twitter.com/".concat(n,"/status/").concat(r,"/mediaViewer")),description:v.text,image:null==i?void 0:i.media_url_https,imageH:null==i||null===(e=i.original_info)||void 0===e?void 0:e.height,imageType:((null==i?void 0:i.media_url_https.match(/([^.]*)$/))||[""])[0],imageW:null==i||null===(t=i.original_info)||void 0===t?void 0:t.width,title:v.user.screen_name,type:"article"})}),[v]);return o.createElement(Y.Z,null,oe,o.createElement(m.Z.Configure,{headerless:!0},o.createElement(a.Z,{style:De.container,testID:"modalContainer"},o.createElement(a.Z,{style:[De.neighbor,P&&De.desktopNeighbor]},o.createElement(a.Z,{style:P&&De.desktopTimelineContainer},o.createElement(f.H.Provider,{testID:"contextProvider",value:{forwardPivotInfo:n,onTweetUpdate:q,hasClosedCaptioning:L,isMuted:R,setHasClosedCaptioning:ne,onMuteToggle:G,setBlockedOrMutedEntry:function(e,t){var n=(0,c.Z)(Array.from(z));t?n.add(e):n.delete(e),j(n)},blockedOrMutedEntryIds:z,setTweetContentHidden:ee,isTweetContentHidden:U}},w&&o.createElement($.Z,{entryConfiguration:ke,module:re,previewEntries:v?[te.Se({id:w,sortIndex:"stable_sort_index"})]:void 0,scroller:X,title:Pe}))),o.createElement(a.Z,{style:P&&De.desktopMediaDrawer,testID:P?"immersive-viewer-desktop-conversation-drawer":void 0},Z&&function(e,t){return!!e||t}(P,g)?o.createElement(le.Z,{location:s,rootTweet:Z,screenName:y,tweet:Z,tweetId:Z.id_str}):null)))))},De=l.Z.create((function(e){return{container:{flexDirection:"row",overflowX:"hidden",overflowY:"hidden",height:"100%",width:"100%",position:"relative"},neighbor:{flexGrow:1,flexShrink:1},desktopNeighbor:{display:"flex",flexDirection:"row"},desktopTimelineContainer:{flex:2},desktopMediaDrawer:{flex:1}}}));const Re=Ie((0,ee.Z)(Ae))}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/bundle.ImmersiveMediaViewer.2fd1218a.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 validation-rule="'numeric'"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
    <div class="cc-fields-layout__field"></div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gocardlessdropin/checkout/component.shtml">
<div class="gocardless-dropin new-card-form">
  <div class="row">
    <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
      <div class="add-credit-card-wrapper">
        <h4>
          <t>Mandates</t>
        </h4>
        <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
           ng-show="cc.stored.length > 0">
          +
          <t>Add a new mandate</t>
        </a>
      </div>
      <table class="payment-method-card" ng-show="cc.stored.length > 0">
        <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
            ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
          <td class="payment-method-card-cell">
            <input type="radio" name="stored_method" value="{{method.id}}"
                   ng-model="$parent.cc.selectedUpiId"/>
          </td>
          <td class="payment-method-card-cell payment-method-card-cell-no-indents">

          </td>
          <td class="payment-method-card-cell">
            <div>{{method.description | tc:"checkout.platform"}} *{{method.ending_in}}</div>
            <span class="gocardless-dropin-charge-currency">{{input.chargeCurrency}}</span>
          </td>
          <td class="payment-method-card-cell payment-method-card-cell-default-payment">
            <div class="payment-method-card-default-payment"
                 ng-show="method.id === cc.defaultPaymentMethodId">
              <t>Default</t>
            </div>
            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                    ng-click="setAsDefaultPaymentMethod(method)"
                    type="button"
                    class="set-as-default-button"
            >
              <t>Set as default</t>
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div mobile class="cc_stored_cards" ng-show="cc.initiated">
      <table class="payment-method-card" ng-show="cc.stored.length > 0">
        <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
            ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
          <td class="payment-method-card-cell">
            <input type="radio" name="stored_method" value="{{method.id}}"
                   ng-model="$parent.cc.selectedUpiId"
                   ng-click="$parent.cc.payWithNew = false"/>
          </td>
          <td class="payment-method-card-cell">
            <div>*{{method.ending_in}}</div>
          </td>
          <td class="payment-method-card-cell payment-method-card-cell-default-payment">
            <div class="payment-method-card-default-payment"
                 ng-show="method.id === cc.defaultPaymentMethodId">
              <t>Default</t>
            </div>
            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                    ng-click="setAsDefaultPaymentMethod(method)"
                    type="button"
                    class="set-as-default-button"
            >
              <t>Set as default</t>
            </button>
          </td>
        </tr>
        <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
          <td class="payment-method-card-cell">
            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
          </td>
          <td class="payment-method-card-cell" colspan="2">
            <t>Add a new mandate</t>
          </td>
        </tr>
      </table>
    </div>

    <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
      <div desktop class="go-back-to-cards-wrapper">
        <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
           ng-show="cc.stored.length > 0 && !failPaymentComplete">
          <t>Return to saved mandates</t>
        </a>
        <h4 ng-if="!failPaymentComplete">
          <t>Add a new mandate</t>
        </h4>
        <h4 ng-if="failPaymentComplete">
          <t>Mandate</t>
        </h4>
      </div>
      <form class="new-card-form" name="ccForm" role="form">
        <div ng-if="failPaymentComplete" class="gocardless-dropin-mandate-wrapper">
          <div class="gocardless-dropin-mandate-left-column">
            <div class="gocardless-dropin-mandate-description">{{cc.upi.description}}</div>
            <span class="gocardless-dropin-charge-currency">{{input.chargeCurrency}}</span>
          </div>
          <div class="gocardless-dropin-mandate-right-column">
            <span class="gocardless-dropin-cancel-mandate" ng-click="cancelMandate()">Cancel</span>
          </div>
        </div>

        <div ng-if="!failPaymentComplete">
          <button class="gocardless-dropin-pay" ng-click="create()" ng-disabled="!isLoaded">
            <t>Pay with {{schemeName}}</t>
          </button>
        </div>

        <div class="payment-system-condition">
          <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
            <input type="checkbox" name="needToApplyDefaultPaymentMethod"
                   ng-model="credit_card.needToApplyDefaultPaymentMethod"
                   id="default-payment-method-gocardless-dropin"/>
            <label for="default-payment-method-gocardless-dropin">
              <t>Apply this payment method to all active subscriptions</t>
            </label>
          </div>
        </div>
      </form>
    </div>
    <div consents-list></div>
    <div class="footer-modal">
      <div ng-show="!cc.payWithNew || failPaymentComplete">
        <div class="complete-purchase-button" complete-purchase-button
             title="{{'Complete Purchase' | t}}"></div>
      </div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/applepayss/checkout/component.shtml">
<div class="applepay-ss-wrapper new-card-form">
   <div consents-list></div>
    <div class="row">
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div>
                <a ng-click="openApplePayWindow()" class="button big applepay-ss-complete-purchase"
                   href="javascript:void(0)" ng-class="{'disabled': isApplePaySsEnabled !== true}">&nbsp;</a>
            </div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/applepayss/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
        <credit-card-postal-code ng-model="credit_card.postal_code.value"
                                 on-change="credit_card.postal_code.onChangeCallback"
                                 ng-disabled="credit_card.postal_code.disabled"
                                 ng-required="credit_card.postal_code.required"
                                 ng-readonly="credit_card.postal_code.readonly"
                                 maxlength="credit_card.postal_code.maxlength"
                                 valid="credit_card.postal_code.valid"
                                 name="'postal_code'">
        </credit-card-postal-code>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/datatranspaypal/checkout/component.shtml">
<div class="datatranspaypal-wrapper new-card-form">
  <div class="row">

    <div ng-show="isStoredPaymentsScreenShown()" class="paypal-checkout-payment-form">
      <div class="add-credit-card-wrapper">
        <h4>
          <t context="checkout.platform">Your PayPal accounts</t>
        </h4>
        <a href="javascript:void(0)" class="add-credit-card" ng-click="gotoNewPaymentScreen()"
           ng-show="stored.length > 0">
          +
          <t>Add a new account</t>
        </a>
      </div>
      <table ng-if="stored.length" class="paypal-table">
        <tr class="paypal-table-row" ng-repeat="upi in stored">
          <td class="paypal-table-cell--radio">
            <input type="radio"
                   id="radio-{{upi.id}}"
                   name="stored_method"
                   ng-model="data.selectedUpi"
                   ng-value="upi"
                   ng-change="onUpiChange(upi)"
                   radio-track-by="id"
                   class="paypal-radio"/>
          </td>
          <td class="paypal-table-cell-logo">
            <div class="datatrans-paypal-short-logo"></div>
          </td>
          <td class="paypal-table-cell-email">
            <label for="radio-{{upi.id}}">
              {{upi.email}}
            </label>
          </td>
          <td class="payment-method-card-cell payment-method-card-cell--default-payment">
            <div class="payment-method-card-default-payment"
                 ng-show="upi.id === data.defaultPaymentMethodId">
              <t>Default</t>
            </div>
            <button ng-hide="upi.id === data.defaultPaymentMethodId"
                    ng-click="setAsDefault(upi)"
                    type="button"
                    class="set-as-default-button"
            >
              <t>Set as default</t>
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div ng-show="isNewPaymentScreenShown()" class="paypal-checkout-payment-form">
      <div class="go-back-to-cards-wrapper">
        <h4>
          <t>Add a new PayPal account</t>
        </h4>
        <a href="javascript:void(0)" class="go-back-to-cards" ng-click="gotoStoredPaymentsScreen()"
           ng-show="isReturnToStoredPaymentsShown()">
          <t>Return to saved accounts</t>
        </a>
      </div>

      <div ng-if="!data.newUpi" class="datatrans-paypal-account-wrapper">
        <div class="hint">
          <t>Please, log in first.</t>
        </div>
        <div id="paypal-pay-button"
             class="pm-login-button paypal-login-button"
             ng-click="startWithNewAccount()"
             data-e2e="paypal-login-button">
        </div>
      </div>

      <table ng-if="data.newUpi" class="paypal-table">
        <tr class="paypal-table-row">
          <td class="paypal-table-cell--radio">
            <input type="radio"
                   id="paypal-new-payment-method"
                   name="stored_method"
                   ng-model="data.selectedUpi"
                   ng-value="data.newUpi"
                   radio-track-by="id"
                   class="paypal-radio"/>
          </td>
          <td class="paypal-table-cell-logo">
            <div class="datatrans-paypal-short-logo"></div>
          </td>
          <td class="paypal-table-cell-email">
            <label for="paypal-new-payment-method">
              {{data.newUpi.email}}
            </label>
          </td>
          <td class="paypal-table-cell-cancel">
            <div class="paypal-logged-in">
              <div ng-click="cancelNewAccount()" class="paypal-cancel-button">
                <t>Cancel</t>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="manage-payment-method-wrapper" ng-show="state.payWithNew">
      <div ng-if="!isSubscription() && isPaymentTerm()">
        <div class="custom-checkbox">
          <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault"
                 id="remember-my-account-datatrans-paypal"/>
          <label for="remember-my-account-datatrans-paypal">
            <t>Remember my account for future payments</t>
          </label>
        </div>
      </div>
      <div ng-if="isSubscription()">
        <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
      </div>
      <div class="custom-checkbox" ng-if="data.store_in_vault">
        <input type="checkbox" name="defaultPaymentMethodId" ng-model="data.defaultPaymentMethodId"
               id="default-payment-method-datatrans-paypal"/>
        <label for="default-payment-method-datatrans-paypal">
          <t>Apply this payment method to all active subscriptions</t>
        </label>
      </div>
    </div>

    <div consents-list></div>
    <div class="footer-modal" ng-show="canContinue()">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
               id="auto_renew"/>
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
           data-e2e="paypal-complete-purchase-button" goto-confirmation-button
           title="{{'Complete Purchase' | t}}"></div>
      <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
           data-e2e="paypal-complete-purchase-button" complete-purchase-button
           title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>


</script>

<script type="text/ng-template" id="/frontend/providers/components/payuperucc/checkout/component.shtml">
<div class="payu-latam-peru-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-latam-peru-cc"/>
                                <label for="rermber-my-card1-payu-latam-peru-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-latam-peru-cc"/>
                        <label for="default-payment-method-payu-latam-peru-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuperucc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__field cc-fields-layout__card-holder">
    <credit-card-holder ng-model="credit_card.holder.value"
                        on-change="credit_card.holder.onChangeCallback"
                        ng-disabled="credit_card.holder.disabled"
                        icon="'client'"
                        ng-required="credit_card.holder.required"
                        ng-readonly="credit_card.holder.readonly"
                        maxlength="credit_card.holder.maxlength"
                        valid="credit_card.holder.valid"
                        name="'holder'">
    </credit-card-holder>
  </div>
  <div class="cc-fields-layout__flex-row cc-fields-layout__flex-row--card-number">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
      <credit-card-number ng-model="credit_card.num.value"
                          on-change="credit_card.num.onChangeCallback"
                          ng-disabled="credit_card.num.disabled"
                          ng-required="credit_card.num.required"
                          ng-readonly="credit_card.num.readonly"
                          valid="credit_card.num.valid"
                          name="'num'">
      </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__field--no-margin-bottom cc-fields-layout__field--group">
      <div class="cc-fields-layout__flex-row">
        <div class="cc-fields-layout__field cc-fields-layout__expire">
          <cc-expire-component ng-model="credit_card.expire.value"
                               on-change="credit_card.expire.onChangeCallback"
                               ng-disabled="credit_card.expire.disabled"
                               ng-required="credit_card.expire.required"
                               ng-readonly="credit_card.expire.readonly"
                               maxlength="credit_card.expire.maxlength"
                               valid="credit_card.expire.valid"
                               name="'expire'">
          </cc-expire-component>
        </div>
        <div class="cc-fields-layout__field cc-fields-layout__cvv">
          <credit-card-cvv ng-model="credit_card.cvv.value"
                           on-change="credit_card.cvv.onChangeCallback"
                           ng-disabled="credit_card.cvv.disabled"
                           ng-required="credit_card.cvv.required"
                           ng-readonly="credit_card.cvv.readonly"
                           maxlength="credit_card.cvv.maxlength"
                           valid="credit_card.cvv.valid"
                           name="'cvv'">
          </credit-card-cvv>
        </div>
      </div>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                                 on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                                 ng-disabled="credit_card.identificationType.disabled"
                                                 ng-required="credit_card.identificationType.required"
                                                 ng-readonly="credit_card.identificationType.readonly"
                                                 placeholder="'Identification type' | t"
                                                 valid="credit_card.identificationType.valid"
                                                 is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                                 identification-types="credit_card.identificationType.items"
                                                 title="credit_card.identificationType.title"
                                                 data-e2e="cc_identificationType"
                                                 name="'identificationType'">
      </credit-card-identification-type-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input i18n-placeholder="{{'Identification number' | t}}"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input i18n-placeholder="{{'First name' | t}}"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input i18n-placeholder="{{'Last name' | t}}"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-change="credit_card.country.onChangeCallback"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Select a country or region' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__card-holder">
    <cc-text-input i18n-placeholder="{{'Enter your phone number' | t}}"
                               ng-model="credit_card.phone.value"
                               on-change="credit_card.phone.onChangeCallback"
                               ng-disabled="credit_card.phone.disabled"
                               ng-required="credit_card.phone.required"
                               ng-readonly="credit_card.phone.readonly"
                               maxlength="credit_card.phone.maxlength"
                               valid="credit_card.phone.valid"
                               validation-rule="'numeric'"
                               name="'phone'"
                               data-e2e="cc_phone">
    </cc-text-input>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payubrazilbb/checkout/component.shtml">
<div class="payu-brazil-bb-wrapper new-card-form">
    <div class="row">
        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
          <div desktop class="go-back-to-cards-wrapper">
              <h4>
                  <t>Payment details</t>
              </h4>
          </div>
          <form class="new-card-form" name="ccForm" role="form">
              <dynamic-base-inputs-component name="providerName"
                                           credit-card="credit_card"></dynamic-base-inputs-component>
          </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payubrazilbb/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                                 on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                                 ng-disabled="credit_card.identificationType.disabled"
                                                 ng-required="credit_card.identificationType.required"
                                                 ng-readonly="credit_card.identificationType.readonly"
                                                 placeholder="'Identification type' | t"
                                                 valid="credit_card.identificationType.valid"
                                                 is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                                 identification-types="credit_card.identificationType.items"
                                                 title="credit_card.identificationType.title"
                                                 data-e2e="cc_identificationType"
                                                 icon="'identification-type'"
                                                 name="'identificationType'">
      </credit-card-identification-type-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input placeholder="'Identification number' | t"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     icon="'national-id'"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input placeholder="'First name' | t"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input placeholder="'Last name' | t"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>

  <div class="cc-fields-layout__field cc-fields-layout__address">
    <cc-text-input placeholder="'Address' | t"
                   ng-model="credit_card.address.value"
                   on-change="credit_card.address.onChangeCallback"
                   ng-disabled="credit_card.address.disabled"
                   ng-required="credit_card.address.required"
                   ng-readonly="credit_card.address.readonly"
                   maxlength="credit_card.address.maxlength"
                   icon="'map'"
                   valid="credit_card.address.valid"
                   name="'address'"
                   data-e2e="cc_address">
    </cc-text-input>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country billing-country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Country' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__state billing-country">
      <credit-card-state-component ng-model="credit_card.state.value"
                                   ng-disabled="credit_card.state.disabled"
                                   ng-required="credit_card.state.required"
                                   ng-readonly="credit_card.state.readonly"
                                   on-state-select="credit_card.state.onStateSelect"
                                   valid="credit_card.state.valid"
                                   placeholder="'State' | t"
                                   is-dropdown-shown="credit_card.state.isDropdownShown"
                                   states="credit_card.state.items"
                                   title="credit_card.state.title"
                                   icon="'map'"
                                   name="'state'"
                                   data-e2e="cc_state">
      </credit-card-state-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__city billing-country">
      <credit-card-city-component ng-model="credit_card.city.value"
                                  ng-disabled="credit_card.city.disabled"
                                  ng-required="credit_card.city.required"
                                  ng-readonly="credit_card.city.readonly"
                                  on-city-select="credit_card.city.onCitySelect"
                                  valid="credit_card.city.valid"
                                  placeholder="'City' | t"
                                  is-dropdown-shown="credit_card.city.isDropdownShown"
                                  cities="credit_card.city.items"
                                  title="credit_card.city.title"
                                  icon="'map'"
                                  name="'city'"
                                  data-e2e="cc_city">
      </credit-card-city-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code placeholder="'ZIP/Postal code' | t"
                               ng-model="credit_card.zip.value"
                               on-change="credit_card.zip.onChangeCallback"
                               ng-disabled="credit_card.zip.disabled"
                               ng-required="credit_card.zip.required"
                               ng-readonly="credit_card.zip.readonly"
                               maxlength="credit_card.zip.maxlength"
                               valid="credit_card.zip.valid"
                               name="'zip'">
      </credit-card-postal-code>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t"
                                 ng-model="credit_card.phone.value"
                                 on-change="credit_card.phone.onChangeCallback"
                                 ng-disabled="credit_card.phone.disabled"
                                 ng-required="credit_card.phone.required"
                                 ng-readonly="credit_card.phone.readonly"
                                 maxlength="credit_card.phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
    <div class="cc-fields-layout__field"></div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/onet/checkout/component.shtml">
<div class="onet-payway-wrapper new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!iPayEnabled && !cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t> {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="!iPayEnabled && cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="!iPayEnabled && cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" class="payu-agreement" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card-onet1"/>
                                <label for="rermber-my-card-onet1">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" class="payu-agreement" ng-model="credit_card.store_in_vault"
                                   id="rermber-my-card-onet2" disabled/>
                            <label for="rermber-my-card-onet2">
                                <t>Remember my card for future payments</t>
                            </label>
                        </div>
                    </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-onet" />
                        <label for="default-payment-method-onet"><t>Apply this payment method to all active subscriptions</t></label>
                    </div>
                </div>
            </form>
        </div>

        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/onet/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            class-name="'payu-card-number'"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'">
        </cc-expire-component>
        <input type="hidden" class="payu-card-expm" value="{{credit_card.expire.month}}">
        <input type="hidden" class="payu-card-expy" value="{{credit_card.expire.year}}">
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         class-name="'payu-card-cvv'"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/inbas/checkout/component.shtml">
<div class="inbas-wrapper new-card-form">
  <div class="row">
    <div class="cc_stored_cards" ng-show="data.stored.length > 0">
      <table class="payment-method-card">
        <tr class="payment-method-card-row" ng-repeat="method in data.stored"
            ng-class="{'selected' : $parent.data.selectedUpiId == method.id}">
          <td class="inbas-table-cell">
            <label class="inbas-table-cell-label">
              <t context="checkout.platform">{{method.description}}</t>
            </label>
          </td>
          <td class="inbas-table-cell inbas-text-right">
            <div class="payment-method-card-default-payment"
                 ng-show="method.id === data.defaultPaymentMethodId">
              <t>Default</t>
            </div>
            <button ng-hide="method.id === data.defaultPaymentMethodId"
                    ng-click="setAsDefault(method)"
                    type="button"
                    class="set-as-default-button">
              <t>Set as default</t>
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div class="cc_new_card" ng-show="data.stored.length <= 0">
      <div class="row inbas-invoice-for">
        <div class="inbas-warning-icon">

        </div>
        <div class="inbas-invoice-for-text">
          <t context="checkout.platform">Your Invoice will be sent to your account email after <b>Complete purchase</b>.</t>
        </div>
      </div>
      <div class="payment-system-condition">
        <span ng-if="!isSubscription()">
          <div class="custom-checkbox">
            <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault" id="remember-my-email-inbas"/>
            <label for="remember-my-email-inbas">
                <t>Remember my email for future invoices</t>
            </label>
          </div>
        </span>
        <span ng-if="isSubscription()">
          <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
        </span>
        <div class="custom-checkbox" ng-if="data.store_in_vault">
          <input type="checkbox" name="defaultPaymentMethodId" ng-model="data.defaultPaymentMethodId" id="default-payment-method-inbas"/>
          <label for="default-payment-method-inbas">
            <t>Apply this payment method to all active subscriptions</t>
          </label>
        </div>
      </div>
    </div>

    <div consents-list></div>
    <div class="footer-modal">
      <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
           title="{{'Complete Purchase' | t}}"></div>
      <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
           title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/applepayway/checkout/component.shtml">
<div consents-list></div>
<div ng-if="isPasswordlessApplePayUsed">
    <button type="button"
            class="apple-pay-button"
            ng-click="openPasswordLessApplePay()"
            ng-class="{'apple-pay-button--disabled': !isApplePayPwEnabled}"
    >
        <t>Buy with</t>
        <svg class="apple-pay-button__logo" width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.258 2.579c-.594.675-1.544 1.208-2.494 1.132-.119-.914.346-1.884.89-2.484C8.248.533 9.287.038 10.13 0c.099.951-.287 1.884-.871 2.579zm.86 1.313c-1.375-.077-2.553.751-3.206.751-.663 0-1.663-.713-2.751-.694A4.09 4.09 0 00.707 5.966C-.778 8.42.32 12.056 1.756 14.053c.703.99 1.544 2.075 2.652 2.036 1.05-.038 1.465-.656 2.732-.656 1.277 0 1.643.656 2.751.637 1.148-.019 1.87-.99 2.573-1.979.802-1.122 1.129-2.217 1.148-2.274-.02-.019-2.216-.828-2.236-3.263-.02-2.036 1.732-3.007 1.81-3.064-.989-1.408-2.533-1.56-3.067-1.598zm7.948-2.76v14.834h2.395v-5.072h3.316c3.028 0 5.156-1.998 5.156-4.89 0-2.893-2.088-4.872-5.077-4.872h-5.79zm2.395 1.941h2.761c2.079 0 3.266 1.066 3.266 2.94 0 1.875-1.187 2.95-3.276 2.95h-2.75v-5.89zM33.307 16.08c1.505 0 2.9-.733 3.534-1.893h.05v1.779h2.216V8.582c0-2.14-1.781-3.52-4.523-3.52-2.543 0-4.424 1.399-4.493 3.32h2.157c.179-.913 1.06-1.512 2.267-1.512 1.465 0 2.286.656 2.286 1.865v.818l-2.989.171c-2.78.162-4.285 1.256-4.285 3.159 0 1.922 1.554 3.197 3.78 3.197zm.644-1.76c-1.277 0-2.089-.59-2.089-1.494 0-.933.782-1.475 2.277-1.56l2.662-.162v.837c0 1.39-1.227 2.379-2.85 2.379zM42.066 20c2.336 0 3.434-.856 4.395-3.454l4.206-11.341h-2.435l-2.82 8.763h-.05l-2.82-8.763h-2.505l4.058 10.799-.218.656c-.366 1.113-.96 1.542-2.019 1.542-.188 0-.554-.02-.702-.038v1.779c.138.038.732.057.91.057z" fill="#fff"/>
        </svg>
    </button>
</div>
<div ng-if="!isPasswordlessApplePayUsed" class="applepay-ss-wrapper new-card-form">
    <div class="row">
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div>
                <a ng-click="openApplePayWindow()" class="button big applepay-ss-complete-purchase"
                   href="javascript:void(0)" ng-class="{'disabled': isApplePayPwEnabled !== true}">&nbsp;</a>
            </div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/sony/checkout/component.shtml">
<div class="sony-wrapper new-card-form">
  <div class="row">
    <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
      <div class="add-credit-card-wrapper">
        <h4>
          <t>Your credit and debit cards</t>
        </h4>
        <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
           ng-show="cc.stored.length > 0">
          +
          <t>Add a card</t>
        </a>
      </div>
      <table class="payment-method-card" ng-show="cc.stored.length > 0">
        <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
            ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
          <td class="payment-method-card-cell">
            <input type="radio" name="stored_method" value="{{method.id}}"
                   ng-model="$parent.cc.selectedUpiId"/>
          </td>
          <td class="payment-method-card-cell">
            <div class="credit-card-{{method.identifier}}"></div>
          </td>
          <td class="payment-method-card-cell">
            <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
          </td>
          <td class="payment-method-card-cell payment-method-card-cell-expiration">
            <t>Expires in</t>
            {{method.expire_month}}/{{method.expire_year}}
          </td>
          <td class="payment-method-card-cell payment-method-card-cell-default-payment">
            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                    ng-click="setAsDefaultPaymentMethod(method)"
                    type="button"
                    class="set-as-default-button"
            >
              <t>Set as default</t>
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div mobile class="cc_stored_cards" ng-show="cc.initiated">
      <table class="payment-method-card" ng-show="cc.stored.length > 0">
        <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
            ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
          <td class="payment-method-card-cell">
            <input type="radio" name="stored_method" value="{{method.id}}"
                   ng-model="$parent.cc.selectedUpiId"
                   ng-click="$parent.cc.payWithNew = false"/>
          </td>
          <td class="payment-method-card-cell">
            <div class="credit-card-{{method.identifier}}"></div>
          </td>
          <td class="payment-method-card-cell">
            <div>*{{method.ending_in}}</div>
          </td>
          <td class="payment-method-card-cell payment-method-card-cell-default-payment">
            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                    ng-click="setAsDefaultPaymentMethod(method)"
                    type="button"
                    class="set-as-default-button"
            >
              <t>Set as default</t>
            </button>
          </td>
        </tr>
        <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
          <td class="payment-method-card-cell">
            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
          </td>
          <td class="payment-method-card-cell" colspan="2">
            <t>Add a new card</t>
          </td>
        </tr>
      </table>
    </div>

    <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
      <div desktop class="go-back-to-cards-wrapper">
        <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
           ng-show="cc.stored.length > 0">
          <t>Return to saved cards</t>
        </a>
        <h4>
          <t>Add a new credit or debit card</t>
        </h4>
      </div>
      <form class="new-card-form" name="ccForm" role="form">
        <dynamic-base-inputs-component name="providerName" credit-card="credit_card"></dynamic-base-inputs-component>
        <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="remember-my-card-sony"/>
                                <label for="remember-my-card-sony">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
          <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
          <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-sony" />
            <label for="default-payment-method-sony"><t>Apply this payment method to all active subscriptions</t></label>
          </div>
        </div>
      </form>
    </div>
    <div consents-list></div>
    <div class="footer-modal">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
               id="auto_renew"/>
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
           title="{{'Complete Purchase' | t}}"></div>
      <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
           title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/sony/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__field cc-fields-layout__card-number">
    <credit-card-number ng-model="credit_card.num.value"
                        on-change="credit_card.num.onChangeCallback"
                        ng-disabled="credit_card.num.disabled"
                        ng-required="credit_card.num.required"
                        ng-readonly="credit_card.num.readonly"
                        valid="credit_card.num.valid"
                        credit-card-auto-space
                        name="'num'">
    </credit-card-number>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__expire">
    <cc-expire-component ng-model="credit_card.expire.value"
                         on-change="credit_card.expire.onChangeCallback"
                         ng-disabled="credit_card.expire.disabled"
                         ng-required="credit_card.expire.required"
                         ng-readonly="credit_card.expire.readonly"
                         maxlength="credit_card.expire.maxlength"
                         valid="credit_card.expire.valid"
                         name="'expire'">
    </cc-expire-component>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__cvv">
    <credit-card-cvv ng-model="credit_card.cvv.value"
                     on-change="credit_card.cvv.onChangeCallback"
                     ng-disabled="credit_card.cvv.disabled"
                     ng-required="credit_card.cvv.required"
                     ng-readonly="credit_card.cvv.readonly"
                     maxlength="credit_card.cvv.maxlength"
                     valid="credit_card.cvv.valid"
                     name="'cvv'">
    </credit-card-cvv>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindiacc/checkout/component.shtml">
<div class="payu-india-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-india-cc"/>
                                <label for="rermber-my-card1-payu-india-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-india-cc"/>
                        <label for="default-payment-method-payu-india-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindiacc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <credit-card-holder ng-model="credit_card.holder.value"
                            on-change="credit_card.holder.onChangeCallback"
                            ng-disabled="credit_card.holder.disabled"
                            ng-required="credit_card.holder.required"
                            ng-readonly="credit_card.holder.readonly"
                            maxlength="credit_card.holder.maxlength"
                            valid="credit_card.holder.valid"
                            name="'holder'">
        </credit-card-holder>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/datatransapplepay/checkout/component.shtml">
<div class="datatransapplepay-wrapper new-card-form">
    <div class="row">
        <div class="applepay-checkout-payment-form" ng-class="{'applepay-checkout-payment-form--custom-indent': isIndentRequired}">
            <div ng-show="!state.addingNewCard">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your Apple Pay cards</t>
                    </h4>
                    <a href="javascript:void(0)"
                       class="add-credit-card"
                       data-e2e="gotoNewCardScreen"
                       ng-click="gotoNewCardScreen()"
                       ng-show="stored.length > 0 && !data.newUpi">
                        +
                        <t>Add a card</t>
                    </a>
                </div>
                <table class="applepay-table">
                    <tr ng-if="stored.length" class="applepay-table-row" ng-repeat="upi in stored">
                        <td class="applepay-table-cell applepay-table-cell--radio">
                            <input type="radio"
                                   id="radio-{{upi.id}}"
                                   name="stored_method"
                                   ng-model="$parent.data.selectedUpi"
                                   ng-value="upi"
                                   radio-track-by="id"
                                   class="applepay-radio"/>
                        </td>
                        <td class="applepay-table-cell applepay-table-cell--logo">
                            <div class="applepay-short-logo"></div>
                        </td>
                        <td class="applepay-table-cell" >
                            <label for="radio-{{upi.id}}">
                                <t context="checkout.platform">{{upi.display_name}}</t>
                            </label>
                        </td>
                        <td class="applepay-table-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{upi.expire_month}}/{{upi.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell--default-payment">
                            <div class="payment-method-card-default-payment"
                                 ng-show="upi.id === data.defaultPaymentMethodId">
                                <t>Default</t>
                            </div>
                            <button ng-hide="upi.id === data.defaultPaymentMethodId"
                                    ng-click="setAsDefault(upi)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="applepay-add-new-account" ng-show="state.addingNewCard">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" ng-show="canGoToStored()"
                       data-e2e="gotoStoredCardsScreen"
                       class="go-back-to-cards"
                       ng-click="gotoStoredCardsScreen()">
                        <t>Return to saved cards</t>
                    </a>
                    <h4>
                        <t>Add a new Apple Pay card</t>
                    </h4>
                </div>
                <div ng-if="!data.newUpi" class="datatrans-applepay-new-card-wrapper">
                    <table class="applepay-table">
                        <tr class="applepay-table-row">
                            <td class="applepay-table-cell" >
                                <div class="hint">
                                    <div class="appleplay-hint-container">
                                        <t>Add Apple Pay as a payment account to pay for your purchases and take the protection of Datatrans with you</t>
                                    </div>
                                </div>
                            </td>
                            <td class="applepay-table-cell">
                                <div class="applepay-new-card-button-container">
                                    <button id="applepay-pay-button"
                                            class="pm-login-button applepay-new-card-button"
                                            ng-class="{'datatrans-apple-pay-loader': !isDatatransApplePayEnabled}"
                                            ng-disabled="!isDatatransApplePayEnabled"
                                            data-e2e="applepay-new-card-button"
                                            ng-click="onApplePayButtonClicked()">
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <table ng-if="data.newUpi" class="applepay-table">
                    <tr class="applepay-table-row">
                        <td class="applepay-table-cell applepay-table-cell--radio">
                            <input type="radio"
                                   id="radio-datatrans-applepay-new"
                                   name="new_method"
                                   ng-model="data.selectedUpi"
                                   ng-value="data.newUpi"
                                   class="applepay-radio"/>
                        </td>
                        <td class="applepay-table-cell applepay-table-cell--logo">
                            <div class="applepay-short-logo"></div>
                        </td>
                        <td class="applepay-table-cell" >
                            <label for="radio-{{upi.id}}">
                                <t context="checkout.platform">{{data.newUpi.display_name}}</t>
                            </label>
                        </td>
                        <td class="applepay-table-cell">
                            <div class="applepay-new-card">
                                <div ng-click="cancelNewCard()" class="applepay-cancel-button">
                                    <t>Cancel</t>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <div class="hint" ng-if="data.newUpi">
                    <div class="appleplay-hint-container">
                        <t>Your payment verified. Click on the button below to proceed.</t>
                    </div>
                </div>
            </div>
        </div>

        <div class="manage-payment-method-wrapper" ng-show="state.addingNewCard">
            <div class="payment-system-condition">
                <div ng-if="!isSubscription() && isPaymentTerm()">
                    <div class="custom-checkbox">
                        <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault"
                               id="datatrans-applepay-remember-my-card"/>
                        <label for="datatrans-applepay-remember-my-card">
                            <t>Remember my card for future payments</t>
                        </label>
                    </div>
                </div>
                <div ng-if="isSubscription()">
                    <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
                </div>
                <div class="custom-checkbox" ng-if="data.store_in_vault">
                    <input type="checkbox" name="defaultPaymentMethodId" ng-model="data.shouldMakeDefaultPaymentMethod"
                           id="datatrans-apple-pay-default-payment-method"/>
                    <label for="datatrans-apple-pay-default-payment-method">
                        <t>Apply this payment method to all active subscriptions</t>
                    </label>
                </div>
            </div>
        </div>

        <div consents-list></div>
        <div class="footer-modal" ng-show="canContinue()">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                 data-e2e="applepay-complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                 data-e2e="applepay-complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/datatranstwint/checkout/component.shtml">
<div class="datatranstwint-wrapper new-card-form">
  <div class="row">
    <div class="twint-checkout-payment-form" ng-class="{'twint-checkout-payment-form--custom-indent': isIndentRequired}">
      <div ng-show="isStoredPaymentsScreenShown()">
        <div class="twint-title">
          <a href="javascript:void(0)" class="add-credit-card" ng-click="gotoNewPaymentScreen()"
             ng-show="stored.length > 0">
            +
            <t>Add a new authorization</t>
          </a>
          <h4>
            <t>Your active authorizations</t>
          </h4>
        </div>
        <div ng-if="stored.length">
          <table class="twint-table">
            <tr class="twint-table-row" ng-repeat="upi in stored"
                ng-class="{'selected' : $parent.data.selectedUpi.id === upi.id, 'twint-table-row--no-border': data.newUpi}">
              <td class="twint-table-cell twint-table-cell--radio">
                <input type="radio"
                       id="radio-{{upi.id}}"
                       name="stored_method"
                       ng-model="$parent.data.selectedUpi"
                       ng-change="onUpiChange(upi)"
                       ng-value="upi"
                       radio-track-by="id"
                       class="twint-radio" />
              </td>
              <td class="twint-table-cell">
                <label for="radio-{{upi.id}}" class="twint-table-cell-label">
                  <t context="checkout.platform">Authorization on {{upi.create_date | date: 'short'}}</t>
                </label>
              </td>
              <td class="payment-method-card-cell payment-method-card-cell--default-payment">
                <div class="payment-method-card-default-payment"
                     ng-show="upi.id === data.defaultPaymentMethodId">
                  <t>Default</t>
                </div>
                <button ng-hide="upi.id === data.defaultPaymentMethodId"
                        ng-click="setAsDefault(upi)"
                        type="button"
                        class="set-as-default-button"
                >
                  <t>Set as default</t>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div ng-show="isNewPaymentScreenShown()">
        <div class="twint-title">
          <a href="javascript:void(0)" class="go-back-to-cards" ng-click="gotoStoredPaymentsScreen()"
             ng-show="isReturnToStoredPaymentsShown()">
            <t>Return to saved authorizations</t>
          </a>
          <h4>
            <t>Your active authorizations</t>
          </h4>
        </div>

        <div ng-if="!data.newUpi">
          <div class="hint">
            <t>Please continue to find QR code to scan to provide authorization.</t>
          </div>
          <button class="pm-login-button twint-login-button" ng-click="startWithNewAccount()"
                  data-e2e="twint-login-button">
            <t context="checkout.platform">Payment authorization</t>
          </button>
        </div>

        <div ng-if="data.newUpi">
          <table class="twint-table">
            <tr class="twint-table-row">
              <td class="twint-table-cell twint-table-cell--radio">
                <input type="radio"
                       id="twint-new-payment-method"
                       class="twint-radio"
                       name="new_upi"
                       ng-model="data.selectedUpi"
                       ng-value="data.newUpi"
                />
              </td>
              <td class="twint-table-cell">
                <label for="twint-new-payment-method" class="twint-table-cell-label">
                  <t context="checkout.platform">Authorization on {{data.newUpi.create_date | date: 'short'}}</t>
                </label>
              </td>
              <td class="twint-table-cell">
                <div class="twint-logged-in">
                  <div ng-click="cancelNewAccount()" class="twint-cancel-button">
                    <t>Cancel</t>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="manage-payment-method-wrapper" ng-show="isNewPaymentScreenShown()">
        <div ng-if="!isSubscription()">
            <div class="custom-checkbox">
                <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault"
                       id="remember-my-card-twint"/>
                <label for="remember-my-card-twint">
                    <t>Remember my card for future payments</t>
                </label>
            </div>
        </div>
        <div ng-if="isSubscription()">
          <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
        </div>
        <div class="custom-checkbox" ng-if="data.store_in_vault">
          <input type="checkbox" name="isDefaultPaymentMethodApplied" ng-model="data.isDefaultPaymentMethodApplied" id="default-payment-method-twint" />
          <label for="default-payment-method-twint"><t>Apply this payment method to all active subscriptions</t></label>
        </div>
    </div>

    <div consents-list></div>
    <div class="footer-modal" ng-show="stored.length > 0">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
               id="auto_renew"/>
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
           data-e2e="twint-complete-purchase-button" goto-confirmation-button
           title="{{'Complete Purchase' | t}}"></div>
      <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
           data-e2e="twint-complete-purchase-button" complete-purchase-button
           title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindianb/checkout/component.shtml">
<div class="payu-india-netbanking-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your bank accounts</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a bank account</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}} - <t>transaction max amount</t> {{method.txMaxAmount}}</div>
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new bank account</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved bank accounts</t>
                </a>
                <h4>
                    <t>Payment details</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <div class="controls">
                    <div class="cc-field-outer-wrap netbanking-field">
                        <div class="cc-field-outer-wrap__field cc-field">
                            <label class="cc-field__icon cc-field__icon--bank"></label>
                            <select id="payu-nb-code"
                                    class="cc-fields-layout__select-field"
                                    ng-model="cc.bankCode"
                                    ng-options="o.name for o in bankCodes track by o.code"
                                    required>
                                <option value="" disabled selected style="display: none;">{{'Bank' | t}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="cc-field-outer-wrap netbanking-field">
                        <div class="cc-field-outer-wrap__field cc-field">
                            <label class="cc-field__icon cc-field__icon--identification-type"></label>
                            <select id="payu-nb-type"
                                    ng-model="cc.accType"
                                    class="cc-fields-layout__select-field"
                                    required>
                                <option value="" disabled selected>{{'Account type' | t}}</option>
                                <option value="SAVINGS">{{'Savings' | t}}</option>
                                <option value="CURRENT">{{'Current' | t}}</option>
                        </select>
                        </div>
                    </div>
                    <div class="cc-field-outer-wrap netbanking-field">
                        <div class="cc-field-outer-wrap__field cc-field">
                            <label class="cc-field__icon cc-field__icon--client"></label>
                            <input id="payu-nb-acc-name" type="text"
                                   class="custom-input-style cc-field__input flat fs-block"
                                   ng-model="cc.accName"
                                   placeholder="Account name"/>
                        </div>
                    </div>
                    <div class="cc-field-outer-wrap netbanking-field">
                        <div class="cc-field-outer-wrap__field cc-field">
                            <label class="cc-field__icon cc-field__icon--national-id"></label>
                            <input id="payu-nb-acc-number" type="text"
                                   class="custom-input-style cc-field__input flat fs-block"
                                   ng-model="cc.accNumber"
                                   placeholder="Account number"/>
                        </div>
                    </div>
                    <div class="cc-field-outer-wrap netbanking-field">
                      <div class="cc-fields-layout__field cc-field cc-fields-layout__phone-number">
                        <label class="cc-field__icon cc-field__icon--phone-number"></label>
                        <input id="payu-nb-phone-number" type="text"
                               class="netbanking-phone-number-input cc-field__input flat fs-block"
                               ng-model="cc.phone"
                               placeholder="Phone number"/>
                      </div>
                    </div>
                </div>
                <div class="payment-system-condition">
                    <span ng-if="!isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                   id="rermber-my-card1-payu-india-nb"/>
                            <label for="rermber-my-card1-payu-india-nb">
                                <t>Remember my bank account for future payments</t>
                            </label>
                        </div>
                    </span>
                    <span ng-if="isSubscription()">
                        <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                    </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-india-nb"/>
                        <label for="default-payment-method-payu-india-nb">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/stripeelements/checkout/component.shtml">
<!-- https://stripe.com/docs/elements/appearance-api -->
<div id="stripe-elements-appearance" class="stripe-elements-appearance">
  {
    "theme": "stripe",
    "variables": {
      "fontFamily": "'Helvetica Neue', Arial, sans-serif",
      "borderRadius": "2px",
      "fontSizeBase": "0.9rem"
    }
  }
</div>
<!-- https://stripe.com/docs/js/elements_object/create_payment_element#payment_element_create-options -->
<div id="stripe-elements-create-options" class="stripe-elements-create-options">
</div>
<div class="stripe-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your payment methods</t>
                </h4>
                <a href="javascript:void(0)"
                   class="add-credit-card"
                   ng-click="addNewPaymentMethod()"
                   ng-show="cc.stored.length > 0 && !cc.payWithNew">
                    +
                    <t>Add a payment method</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="{{method.payment_class}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.description}}</div>
                    </td>
                    <td class="payment-method-card-cell payment-method-card-cell-expiration">
                        <div ng-show="method.expire_month && method.expire_year">
                          <t arg0 ="{{method.expire_month}}" arg1="{{method.expire_year}}">Expires in {0}/{1}</t>
                        </div>
                    </td>
                    <td class="payment-method-card-cell payment-method-card-cell-default-payment"
                        ng-show="defaultPaymentMethodEnabled">
                      <div class="payment-method-card-default-payment"
                           ng-show="method.id === cc.defaultPaymentMethodId">
                        <t>Default</t>
                      </div>
                      <button ng-hide="method.id === cc.defaultPaymentMethodId"
                              ng-click="setAsDefaultPaymentMethod(method)"
                              type="button"
                              class="set-as-default-button"
                      >
                        <t>Set as default</t>
                      </button>
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}" ng-model="$parent.cc.selectedUpiId" ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                      <div class="{{method.payment_class}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.description}}</div>
                    </td>
                    <td class="payment-method-card-cell payment-method-card-cell-default-payment"
                        ng-show="defaultPaymentMethodEnabled">
                      <div class="payment-method-card-default-payment"
                           ng-show="method.id === cc.defaultPaymentMethodId">
                        <t>Default</t>
                      </div>
                      <button ng-hide="method.id === cc.defaultPaymentMethodId"
                              ng-click="setAsDefaultPaymentMethod(method)"
                              type="button"
                              class="set-as-default-button"
                      >
                        <t>Set as default</t>
                      </button>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a payment method</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="returnBackNewPaymentMethod()"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved payment methods</t>
                </a>
                <h4>
                    <t>Add a payment method</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card">

                </dynamic-base-inputs-component>
                <div class="payment-system-condition">
                    <span ng-if="!isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" class="stripe-agreement"
                                   ng-model="credit_card.store_in_vault"
                                   id="remember-my-stripe-card"/>
                            <label for="remember-my-stripe-card">
                                <t>Remember my payment method for future payments</t>
                            </label>
                        </div>
                    </span>
                    <span ng-if="isSubscription()">
                        <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                    </span>
                    <div class="custom-checkbox" ng-if="defaultPaymentMethodEnabled && credit_card.store_in_vault">
                        <input type="checkbox" name="needToApplyDefaultPaymentMethod"
                               ng-model="credit_card.needToApplyDefaultPaymentMethod"
                               id="default-payment-method-stripe"/>
                        <label for="default-payment-method-stripe">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/stripeelements/common/baseTemplate.shtml">
<div class="cc-fields-layout" ng-init="callbackOnFormInit()">
  <div id="stripe-payment-elements">
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payucolombiapse/checkout/component.shtml">
<div class="payu-colombia-pse-wrapper new-card-form">
    <div class="row">
        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <h4>
                    <t>Payment details</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                             credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition"/>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payucolombiapse/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__bank">
      <credit-card-dropdown-component ng-model="credit_card.bank.value"
                                      on-element-select="credit_card.bank.onElementSelect"
                                      ng-disabled="credit_card.bank.disabled"
                                      ng-required="credit_card.bank.required"
                                      ng-readonly="credit_card.bank.readonly"
                                      placeholder="'Bank' | t"
                                      valid="credit_card.bank.valid"
                                      items="credit_card.bank.items"
                                      title="credit_card.bank.title"
                                      data-e2e="cc_bank"
                                      icon="'bank'"
                                      name="'bank'">
      </credit-card-dropdown-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__user-type">
      <credit-card-dropdown-component ng-model="credit_card.userType.value"
                                      on-element-select="credit_card.userType.onElementSelect"
                                      ng-disabled="credit_card.userType.disabled"
                                      ng-required="credit_card.userType.required"
                                      ng-readonly="credit_card.userType.readonly"
                                      placeholder="'User type' | t"
                                      valid="credit_card.userType.valid"
                                      items="credit_card.userType.items"
                                      title="credit_card.userType.title"
                                      data-e2e="cc_userType"
                                      icon="'client'"
                                      name="'userType'">
      </credit-card-dropdown-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                                 on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                                 ng-disabled="credit_card.identificationType.disabled"
                                                 ng-required="credit_card.identificationType.required"
                                                 ng-readonly="credit_card.identificationType.readonly"
                                                 placeholder="'Identification type' | t"
                                                 valid="credit_card.identificationType.valid"
                                                 is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                                 identification-types="credit_card.identificationType.items"
                                                 title="credit_card.identificationType.title"
                                                 data-e2e="cc_identificationType"
                                                 icon="'identification-type'"
                                                 name="'identificationType'">
      </credit-card-identification-type-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input placeholder="'Identification number' | t"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     icon="'national-id'"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input placeholder="'First name' | t"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input placeholder="'Last name' | t"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>

  <div class="cc-fields-layout__field cc-fields-layout__address">
    <cc-text-input placeholder="'Address' | t"
                   ng-model="credit_card.address.value"
                   on-change="credit_card.address.onChangeCallback"
                   ng-disabled="credit_card.address.disabled"
                   ng-required="credit_card.address.required"
                   ng-readonly="credit_card.address.readonly"
                   maxlength="credit_card.address.maxlength"
                   icon="'map'"
                   valid="credit_card.address.valid"
                   name="'address'"
                   data-e2e="cc_address">
    </cc-text-input>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-change="credit_card.country.onChangeCallback"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Country' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__state">
      <credit-card-state-component ng-model="credit_card.state.value"
                                   ng-disabled="credit_card.state.disabled"
                                   ng-required="credit_card.state.required"
                                   ng-readonly="credit_card.state.readonly"
                                   on-change="credit_card.state.onChangeCallback"
                                   on-state-select="credit_card.state.onStateSelect"
                                   valid="credit_card.state.valid"
                                   placeholder="'State' | t"
                                   is-dropdown-shown="credit_card.state.isDropdownShown"
                                   states="credit_card.state.items"
                                   title="credit_card.state.title"
                                   icon="'map'"
                                   name="'state'"
                                   data-e2e="cc_state">
      </credit-card-state-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__city">
      <credit-card-city-component ng-model="credit_card.city.value"
                                  ng-disabled="credit_card.city.disabled"
                                  ng-required="credit_card.city.required"
                                  ng-readonly="credit_card.city.readonly"
                                  on-change="credit_card.city.onChangeCallback"
                                  on-city-select="credit_card.city.onCitySelect"
                                  valid="credit_card.city.valid"
                                  placeholder="'City' | t"
                                  is-dropdown-shown="credit_card.city.isDropdownShown"
                                  cities="credit_card.city.items"
                                  title="credit_card.city.title"
                                  icon="'map'"
                                  name="'city'"
                                  data-e2e="cc_city">
      </credit-card-city-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code placeholder="'ZIP/Postal code' | t"
                               ng-model="credit_card.zip.value"
                               on-change="credit_card.zip.onChangeCallback"
                               ng-disabled="credit_card.zip.disabled"
                               ng-required="credit_card.zip.required"
                               ng-readonly="credit_card.zip.readonly"
                               maxlength="credit_card.zip.maxlength"
                               valid="credit_card.zip.valid"
                               name="'zip'">
      </credit-card-postal-code>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t"
                                 ng-model="credit_card.phone.value"
                                 on-change="credit_card.phone.onChangeCallback"
                                 ng-disabled="credit_card.phone.disabled"
                                 ng-required="credit_card.phone.required"
                                 ng-readonly="credit_card.phone.readonly"
                                 maxlength="credit_card.phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
    <div class="cc-fields-layout__field"></div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindiaccv2/checkout/component.shtml">
<div class="payu-india-cc-v2-wrapper new-card-form">
    <div class="row">
        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                    <span ng-if="!isSubscription()">
                      <div class="custom-checkbox">
                          <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                 id="rermber-my-card-india-cc-v2"/>
                          <label for="rermber-my-card-india-cc-v2">
                              <t>Remember my card for future payments</t>
                          </label>
                      </div>
                    </span>
                    <span ng-if="isSubscription()">
                        <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                    </span>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payuindiaccv2/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-holder">
        <credit-card-holder ng-model="credit_card.holder.value"
                            on-change="credit_card.holder.onChangeCallback"
                            ng-disabled="credit_card.holder.disabled"
                            ng-required="credit_card.holder.required"
                            ng-readonly="credit_card.holder.readonly"
                            maxlength="credit_card.holder.maxlength"
                            valid="credit_card.holder.valid"
                            name="'holder'">
        </credit-card-holder>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
    <div class="cc-fields-layout__custom-field">
        <div class="cc-fields-layout__field cc-fields-layout__phone-number">
            <cc-phone-number-component placeholder="'Phone number' | t"
                                       ng-model="credit_card.phone.value"
                                       on-change="credit_card.phone.onChangeCallback"
                                       ng-disabled="credit_card.phone.disabled"
                                       ng-required="credit_card.phone.required"
                                       ng-readonly="credit_card.phone.readonly"
                                       maxlength="credit_card.phone.maxlength"
                                       valid="credit_card.phone.valid"
                                       validation-rule="'numeric'"
                                       name="'phone'">
            </cc-phone-number-component>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gocardlessdd/checkout/component.shtml">
<div class="gocardlessdd new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your direct debit accounts</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a direct debit account</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell payment-method-card-cell-no-indents">

                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.nickname | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                        <div class="payment-method-card-default-payment"
                             ng-show="method.id === cc.defaultPaymentMethodId">
                            <t>Default</t>
                        </div>
                        <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                ng-click="setAsDefaultPaymentMethod(method)"
                                type="button"
                                class="set-as-default-button"
                        >
                            <t>Set as default</t>
                        </button>
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell payment-method-card-cell-default-payment">
                        <div class="payment-method-card-default-payment"
                             ng-show="method.id === cc.defaultPaymentMethodId">
                            <t>Default</t>
                        </div>
                        <button ng-hide="method.id === cc.defaultPaymentMethodId"
                                ng-click="setAsDefaultPaymentMethod(method)"
                                type="button"
                                class="set-as-default-button"
                        >
                            <t>Set as default</t>
                        </button>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new direct debit account</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to direct debit accounts</t>
                </a>
                <h4>
                    <t>Add a new direct debit account</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <button ng-click="create()" class="gocardless-pay"><t>Pay with GOCARDLESS</t></button>

                <div class="payment-system-condition">
                    <span ng-if="!isSubscription()">
                        <div class="custom-checkbox">
                            <input type="checkbox" name="store_in_vault" class="stripe-agreement"
                                   ng-model="credit_card.store_in_vault"
                                   id="remember-my-stripe-card"/>
                            <label for="remember-my-stripe-card">
                                <t>Remember my direct debit account for future payments</t>
                            </label>
                        </div>
                    </span>
                    <span ng-if="isSubscription()">
                        <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                    </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="needToApplyDefaultPaymentMethod"
                               ng-model="credit_card.needToApplyDefaultPaymentMethod"
                               id="default-payment-method-stripe"/>
                        <label for="default-payment-method-stripe">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gocardlessdd/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
        <credit-card-number ng-model="credit_card.num.value"
                            on-change="credit_card.num.onChangeCallback"
                            ng-disabled="credit_card.num.disabled"
                            ng-required="credit_card.num.required"
                            ng-readonly="credit_card.num.readonly"
                            maxlength="credit_card.num.maxlength"
                            valid="credit_card.num.valid"
                            name="'num'">
        </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
        <cc-expire-component ng-model="credit_card.expire.value"
                             on-change="credit_card.expire.onChangeCallback"
                             ng-disabled="credit_card.expire.disabled"
                             ng-required="credit_card.expire.required"
                             ng-readonly="credit_card.expire.readonly"
                             maxlength="credit_card.expire.maxlength"
                             valid="credit_card.expire.valid"
                             name="'expire'"
                             on-change="onChangeCallback">
        </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
        <credit-card-cvv ng-model="credit_card.cvv.value"
                         on-change="credit_card.cvv.onChangeCallback"
                         ng-disabled="credit_card.cvv.disabled"
                         ng-required="credit_card.cvv.required"
                         ng-readonly="credit_card.cvv.readonly"
                         maxlength="credit_card.cvv.maxlength"
                         valid="credit_card.cvv.valid"
                         name="'cvv'">
        </credit-card-cvv>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
        <credit-card-postal-code ng-model="credit_card.postal_code.value"
                                 on-change="credit_card.postal_code.onChangeCallback"
                                 ng-disabled="credit_card.postal_code.disabled"
                                 ng-required="credit_card.postal_code.required"
                                 ng-readonly="credit_card.postal_code.readonly"
                                 maxlength="credit_card.postal_code.maxlength"
                                 valid="credit_card.postal_code.valid"
                                 name="'postal_code'">
        </credit-card-postal-code>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/datatransgooglepay/checkout/component.shtml">
<div class="datatransgooglepay-wrapper new-card-form">
    <div class="row">
        <div class="googlepay-checkout-payment-form" ng-class="{'googlepay-checkout-payment-form--custom-indent': isIndentRequired}">
            <div ng-show="isStoredPaymentsScreenShown()">
                <div class="add-credit-card-wrapper">
                    <h4>
                        <t>Your Google Pay cards</t>
                    </h4>
                    <a href="javascript:void(0)" class="add-credit-card" ng-click="gotoNewPaymentScreen()"
                       ng-show="stored.length > 0">
                        +
                        <t>Add a new card</t>
                    </a>
                </div>
                <table ng-if="stored.length > 0" class="googlepay-table">
                    <tr class="googlepay-table-row" ng-repeat="upi in stored">
                        <td class="googlepay-table-cell googlepay-table-cell--radio">
                            <input type="radio"
                                   id="radio-{{upi.id}}"
                                   name="stored_method"
                                   ng-model="data.selectedUpi"
                                   ng-change="onUpiChange(upi)"
                                   ng-value="upi"
                                   class="googlepay-radio"/>
                        </td>
                        <td class="googlepay-table-cell googlepay-table-cell--short-logo">
                            <div class="datatrans-gpay-short-logo"></div>
                        </td>
                        <td class="googlepay-table-cell">
                            <label for="radio-{{upi.id}}">
                                <t context="checkout.platform">{{upi.display_name}}</t>
                            </label>
                        </td>
                        <td class="googlepay-table-cell payment-method-card-cell-expiration">
                            <t>Expires in</t>
                            {{upi.expire_month}}/{{upi.expire_year}}
                        </td>
                        <td class="payment-method-card-cell payment-method-card-cell--default-payment">
                            <div class="payment-method-card-default-payment"
                                 ng-show="upi.id === data.defaultPaymentMethodId">
                                <t>Default</t>
                            </div>
                            <button ng-hide="upi.id === data.defaultPaymentMethodId"
                                    ng-click="setAsDefault(upi)"
                                    type="button"
                                    class="set-as-default-button"
                            >
                                <t>Set as default</t>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <div ng-show="isNewPaymentScreenShown()" class="googlepay-add-new-account">
                <div desktop class="go-back-to-cards-wrapper">
                    <a href="javascript:void(0)" class="go-back-to-cards" ng-click="gotoStoredPaymentsScreen()"
                       ng-show="isReturnToStoredPaymentsShown()">
                        <t>Return to saved cards</t>
                    </a>
                    <h4>
                        <t>Add a new Google Pay card</t>
                    </h4>
                </div>
                <div ng-if="!data.newUpi" class="datatrans-gpay-account-wrapper">
                    <div class="hint">
                        <div class="googleplay-hint-container">
                            <t>Add Google Pay as a payment account to pay for your purchases and take the protection of Datatrans with you</t>
                        </div>
                    </div>

                    <div id="googlepay-pay-button"
                         class="pm-login-button googlepay-login-button-wrapper"
                         data-e2e="googlepay-login-button">
                    </div>
                </div>
                <table ng-if="data.newUpi" class="googlepay-table">
                    <tr class="googlepay-table-row">
                        <td class="googlepay-table-cell googlepay-table-cell--radio">
                            <input type="radio"
                                   id="gpay-new-payment-method"
                                   class="googlepay-radio"
                                   name="stored_method"
                                   ng-model="data.selectedUpi"
                                   ng-value="data.newUpi"
                            />
                        </td>
                        <td class="googlepay-table-cell googlepay-table-cell--short-logo">
                            <div class="datatrans-gpay-short-logo"></div>
                        </td>
                        <td class="googlepay-table-cell">
                            <label for="gpay-new-payment-method">
                                <t context="checkout.platform">{{data.newUpi.display_name}}</t>
                            </label>
                        </td>
                        <td class="googlepay-table-cell">
                            <div class="googlepay-logged-in">
                                <div ng-click="cancelAndInitNewAccount()" class="googlepay-cancel-button">
                                    <t>Cancel</t>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="manage-payment-method-wrapper" ng-show="state.payWithNew">
            <div ng-if="!isSubscription() && isPaymentTerm()">
                <div class="custom-checkbox">
                    <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault"
                           id="remember-my-card-datatrans-gpay"/>
                    <label for="remember-my-card-datatrans-gpay">
                        <t>Remember my card for future payments</t>
                    </label>
                </div>
            </div>
            <div ng-if="isSubscription()">
                <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
            </div>
            <div class="custom-checkbox" ng-if="data.store_in_vault">
                <input type="checkbox" name="defaultPaymentMethodId" ng-model="data.defaultPaymentMethodId" id="default-payment-method-cybersource" />
                <label for="default-payment-method-cybersource"><t>Apply this payment method to all active subscriptions</t></label>
            </div>
        </div>

        <div consents-list></div>
        <div class="footer-modal" ng-show="canContinue()">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
                 data-e2e="googlepay-complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
                 data-e2e="googlepay-complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/zlick/checkout/component.shtml">
<div class="zlick-wrapper new-card-form">
  <div class="row">
    <div class="zlick-checkout-payment-form" ng-class="{'zlick-checkout-payment-form--custom-indent': isIndentRequired}">
      <div ng-if="isStoredPaymentsScreenShown()">
        <div class="zlick-title">
          <a href="javascript:void(0)" class="add-credit-card" ng-click="gotoNewPaymentScreen()" data-e2e="zlick-add-phone-number">
            +
            <t>Add a new phone number</t>
          </a>
          <h4>
            <t>Your phone numbers</t>
          </h4>
        </div>

        <table class="zlick-table">
          <tr class="zlick-table-row" ng-repeat="upi in stored" data-e2e="{{'pm-' + upi.id}}">
            <td class="zlick-table-cell zlick-table-cell--radio">
              <input type="radio"
                     id="radio-{{upi.id}}"
                     name="stored_method"
                     ng-model="$parent.data.selectedUpi"
                     ng-change="onUpiChange(upi)"
                     ng-value="upi"
                     radio-track-by="id"
                     class="zlick-radio" />
            </td>
            <td class="zlick-table-cell">
              <label for="radio-{{upi.id}}" class="zlick-table-cell-label">
                <t context="checkout.platform">Phone number: {{upi.phone}}</t>
              </label>
            </td>
            <td class="payment-method-card-cell payment-method-card-cell--default-payment">
              <div class="payment-method-card-default-payment"
                   ng-show="upi.id === state.defaultPaymentMethodId">
                <t>Default</t>
              </div>
              <button ng-hide="upi.id === state.defaultPaymentMethodId"
                      ng-click="setAsDefault(upi)"
                      type="button"
                      class="set-as-default-button"
              >
                <t>Set as default</t>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div ng-if="isNewPaymentScreenShown()">
        <div class="zlick-title">
          <a href="javascript:void(0)" class="go-back-to-cards" ng-click="gotoStoredPaymentsScreen()"
             ng-show="isReturnToStoredPaymentsShown()">
            <t>Return to saved phone numbers</t>
          </a>
          <h4>
            <t>Your phone number</t>
          </h4>
        </div>

        <dynamic-base-inputs-component name="providerName"
                                       data="data"></dynamic-base-inputs-component>
      </div>
    </div>

    <div class="manage-payment-method-wrapper" ng-show="isNewPaymentScreenShown()">
        <div ng-if="!isSubscription()">
            <div class="custom-checkbox">
                <input type="checkbox" name="store_in_vault" ng-model="state.store_in_vault"
                       id="remember-my-card-zlick"/>
                <label for="remember-my-card-zlick">
                    <t>Remember my account for future payments</t>
                </label>
            </div>
        </div>
        <div ng-if="isSubscription()">
          <input type="hidden" name="store_in_vault" ng-model="state.store_in_vault"/>
        </div>
        <div class="custom-checkbox" ng-if="state.store_in_vault">
          <input type="checkbox" name="isDefaultPaymentMethodApplied" ng-model="data.isDefaultPaymentMethodApplied" id="default-payment-method-zlick" data-e2e="apply-as-default-checkbox"/>
          <label for="default-payment-method-zlick" data-e2e="apply-as-default-label"><t>Apply this payment method to all active subscriptions</t></label>
        </div>
    </div>

    <div consents-list></div>
    <div class="footer-modal" ng-show="canContinue">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
               id="auto_renew"/>
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button"
           data-e2e="zlick-complete-purchase-button" goto-confirmation-button
           title="{{'Complete Purchase' | t}}"></div>
      <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button"
           data-e2e="zlick-complete-purchase-button" complete-purchase-button
           title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/zlick/common/baseTemplate.shtml">
<div ng-if="!state.newUpi" class="zlick-new-upi-wrapper">
  <div ng-if="state.step == 'identify'" class="zlick-identify-the-user">
    <t>Identifying the user's phone number by cookie. Please, wait</t>
  </div>
  <div ng-if="state.step != 'identify'" class="zlick-not-verified-user-message">
    <t>The user not found, please do verification by filling the phone number and confirming the pin code</t>
  </div>
  <div class="cc-fields-layout" ng-if="state.step == 'phone'">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component
        id="zlick-phone-number-wrapper"
        pn-autofocus="true"
        ng-model="fields.phone_number.value"
        on-change="fields.phone_number.onChangeCallback"
        ng-disabled="fields.phone_number.disabled"
        ng-required="fields.phone_number.required"
        ng-readonly="fields.phone_number.readonly"
        on-enter="fields.phone_number.onEnterCallback"
        maxlength="fields.phone_number.maxlength"
        valid="fields.phone_number.valid"
        name="'phone_number'">
      </cc-phone-number-component>
    </div>
    <button class="pm-login-button zlick-sms-auth-button"
            ng-click="sendSms()"
            data-e2e="zlick-send-sms-button">
      <t>Send SMS</t>
    </button>
  </div>
  <div class="cc-fields-layout" ng-if="state.step == 'pin'">
    <div class="zlick-table-wrapper">
      <div class="zlick-table-left-column">
        <div class="zlick-text-static">{{fields.phone_number.value}}</div>
      </div>
      <div class="zlick-table-right-column">
        <span class="zlick-right-aligned" ng-click="editPhoneNumber()"><t>Edit</t></span>
      </div>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__pin-code">
      <cc-text-input id="zlick-pin-number-wrapper"
                     pn-autofocus="true"
                     i18n-placeholder="{{'Enter your PIN' | t}}"
                     ng-model="fields.pin_code.value"
                     ng-readonly="fields.pin_code.readonly"
                     ng-required="fields.pin_code.required"
                     ng-disabled="fields.pin_code.disabled"
                     on-change="fields.pin_code.onChangeCallback"
                     on-enter="fields.pin_code.onEnterCallback"
                     icon="'pin-number'"
                     name="sms_code"
                     valid="fields.pin_code.valid"
                     data-e2e="cc_pin_code">
      </cc-text-input>
    </div>
    <button class="pm-login-button zlick-sms-auth-button" ng-click="verifyPinCode()"
            data-e2e="zlick-verify-pin-button">
      <t>Verify PIN</t>
    </button>
  </div>
</div>

<div ng-if="state.newUpi" class="zlick-new-upi-wrapper">
  <div class="zlick-table-wrapper zlick-table-wrapper--new-upi">
    <div class="zlick-table-left-column">
      <div class="zlick-text-static">{{fields.phone_number.value}}</div>
    </div>
    <div ng-if="!readonly" class="zlick-table-right-column">
      <div class="zlick-right-aligned" ng-click="cancelNewAccount()"><t>Cancel</t></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payuchilecc/checkout/component.shtml">
<div class="payu-latam-chile-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-latam-chile-cc"/>
                                <label for="rermber-my-card1-payu-latam-chile-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-latam-chile-cc"/>
                        <label for="default-payment-method-payu-latam-chile-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuchilecc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__flex-row cc-fields-layout__flex-row--card-number">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
      <credit-card-number ng-model="credit_card.num.value"
                          on-change="credit_card.num.onChangeCallback"
                          ng-disabled="credit_card.num.disabled"
                          ng-required="credit_card.num.required"
                          ng-readonly="credit_card.num.readonly"
                          valid="credit_card.num.valid"
                          credit-card-auto-space
                          name="'num'">
      </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__field--no-margin-bottom cc-fields-layout__field--group">
      <div class="cc-fields-layout__flex-row">
        <div class="cc-fields-layout__field cc-fields-layout__expire">
          <cc-expire-component ng-model="credit_card.expire.value"
                               on-change="credit_card.expire.onChangeCallback"
                               ng-disabled="credit_card.expire.disabled"
                               ng-required="credit_card.expire.required"
                               ng-readonly="credit_card.expire.readonly"
                               maxlength="credit_card.expire.maxlength"
                               valid="credit_card.expire.valid"
                               name="'expire'">
          </cc-expire-component>
        </div>
        <div class="cc-fields-layout__field cc-fields-layout__cvv">
          <credit-card-cvv ng-model="credit_card.cvv.value"
                           on-change="credit_card.cvv.onChangeCallback"
                           ng-disabled="credit_card.cvv.disabled"
                           ng-required="credit_card.cvv.required"
                           ng-readonly="credit_card.cvv.readonly"
                           maxlength="credit_card.cvv.maxlength"
                           valid="credit_card.cvv.valid"
                           name="'cvv'">
          </credit-card-cvv>
        </div>
      </div>
    </div>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__card-holder">
    <credit-card-holder ng-model="credit_card.holder.value"
                        on-change="credit_card.holder.onChangeCallback"
                        ng-disabled="credit_card.holder.disabled"
                        icon="'client'"
                        ng-required="credit_card.holder.required"
                        ng-readonly="credit_card.holder.readonly"
                        maxlength="credit_card.holder.maxlength"
                        valid="credit_card.holder.valid"
                        name="'holder'">
    </credit-card-holder>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                  on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                  ng-disabled="credit_card.identificationType.disabled"
                                  ng-required="credit_card.identificationType.required"
                                  ng-readonly="credit_card.identificationType.readonly"
                                  placeholder="'Identification type' | t"
                                  valid="credit_card.identificationType.valid"
                                  is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                  identification-types="credit_card.identificationType.items"
                                  title="credit_card.identificationType.title"
                                  data-e2e="cc_identificationType"
                                  icon="'identification-type'"
                                  name="'identificationType'">
      </credit-card-identification-type-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input placeholder="'Identification number' | t"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     icon="'national-id'"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input placeholder="'First name' | t"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input placeholder="'Last name' | t"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>

  <div class="cc-fields-layout__field cc-fields-layout__address">
    <cc-text-input placeholder="'Address' | t"
                   ng-model="credit_card.address.value"
                   on-change="credit_card.address.onChangeCallback"
                   ng-disabled="credit_card.address.disabled"
                   ng-required="credit_card.address.required"
                   ng-readonly="credit_card.address.readonly"
                   maxlength="credit_card.address.maxlength"
                   icon="'map'"
                   valid="credit_card.address.valid"
                   name="'address'"
                   data-e2e="cc_address">
    </cc-text-input>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-change="credit_card.country.onChangeCallback"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Country' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__state">
      <credit-card-state-component ng-model="credit_card.state.value"
                                   ng-disabled="credit_card.state.disabled"
                                   ng-required="credit_card.state.required"
                                   ng-readonly="credit_card.state.readonly"
                                   on-change="credit_card.state.onChangeCallback"
                                   on-state-select="credit_card.state.onStateSelect"
                                   valid="credit_card.state.valid"
                                   placeholder="'State' | t"
                                   is-dropdown-shown="credit_card.state.isDropdownShown"
                                   states="credit_card.state.items"
                                   title="credit_card.state.title"
                                   icon="'map'"
                                   name="'state'"
                                   data-e2e="cc_state">
      </credit-card-state-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__city">
      <credit-card-city-component ng-model="credit_card.city.value"
                                  ng-disabled="credit_card.city.disabled"
                                  ng-required="credit_card.city.required"
                                  ng-readonly="credit_card.city.readonly"
                                  on-change="credit_card.city.onChangeCallback"
                                  on-city-select="credit_card.city.onCitySelect"
                                  valid="credit_card.city.valid"
                                  placeholder="'City' | t"
                                  is-dropdown-shown="credit_card.city.isDropdownShown"
                                  cities="credit_card.city.items"
                                  title="credit_card.city.title"
                                  icon="'map'"
                                  name="'city'"
                                  data-e2e="cc_city">
      </credit-card-city-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code placeholder="'ZIP/Postal code' | t"
                               ng-model="credit_card.zip.value"
                               on-change="credit_card.zip.onChangeCallback"
                               ng-disabled="credit_card.zip.disabled"
                               ng-required="credit_card.zip.required"
                               ng-readonly="credit_card.zip.readonly"
                               maxlength="credit_card.zip.maxlength"
                               valid="credit_card.zip.valid"
                               name="'zip'">
      </credit-card-postal-code>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t"
                                 ng-model="credit_card.phone.value"
                                 on-change="credit_card.phone.onChangeCallback"
                                 ng-disabled="credit_card.phone.disabled"
                                 ng-required="credit_card.phone.required"
                                 ng-readonly="credit_card.phone.readonly"
                                 maxlength="credit_card.phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 validation-rule="'numeric'"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
    <div class="cc-fields-layout__field"></div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gmoau/checkout/component.shtml">
<div class="gmo-au-wrapper new-card-form">
  <div class="row">
    <div class="gmo-au-checkout-payment-form" ng-class="{'gmo-au-checkout-payment-form--custom-indent': isIndentRequired}">
      <div ng-show="isStoredPaymentsScreenShown()">
        <div class="gmo-au-checkout-payment-form__title">
          <a href="javascript:void(0)" class="add-credit-card" ng-click="gotoNewPaymentScreen()"
             ng-show="stored.length > 0" data-e2e="gmo-au-add-credit-card">
            +
            <t>Add a new authorization</t>
          </a>
          <h4>
            <t>Your active authorizations</t>
          </h4>
        </div>
        <table class="gmo-au-table" ng-if="stored.length">
          <tr class="gmo-au-table__row" ng-repeat="upi in stored" data-e2e="{{'pm-'+upi.id}}">
            <td class="gmo-au-table__cell gmo-au-table__cell--radio">
              <input
                class="gmo-au-radio"
                type="radio"
                id="radio-{{upi.id}}"
                name="stored_method"
                ng-model="$parent.data.selectedUpi"
                ng-change="onUpiChange(upi)"
                ng-value="upi"
                radio-track-by="id">
            </td>
            <td class="gmo-au-table__cell">
              <label for="radio-{{upi.id}}" class="gmo-au-table__cell-label">
                <t context="checkout.platform">Authorization on {{upi.create_date | date: 'short'}}</t>
              </label>
            </td>
            <td class="payment-method-card-cell payment-method-card-cell--default-payment">
              <div class="payment-method-card-default-payment"
                   ng-show="upi.id === data.defaultPaymentMethodId">
                <t>Default</t>
              </div>
              <button ng-hide="upi.id === data.defaultPaymentMethodId"
                      ng-click="setAsDefault(upi)"
                      type="button"
                      class="set-as-default-button"
              >
                <t>Set as default</t>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div ng-show="isNewPaymentScreenShown()">
        <div class="gmo-au-checkout-payment-form__title">
          <a href="javascript:void(0)" class="go-back-to-cards" ng-click="gotoStoredPaymentsScreen()"
             ng-show="isReturnToStoredPaymentsShown()">
            <t>Return to saved authorizations</t>
          </a>
          <h4>
            <t>Your active authorizations</t>
          </h4>
        </div>

        <div ng-if="!data.newUpi">
          <button
            class="pm-login-button gmo-au-login-button"
            ng-click="startWithNewAccount()"
            data-e2e="gmo-au-login-button">
            <t context="checkout.platform">Payment authorization</t>
          </button>
        </div>

        <div ng-if="data.newUpi">
          <table class="gmo-au-table">
            <tr class="gmo-au-table__row">
              <td class="gmo-au-table__cell gmo-au-table__cell--radio">
                <input type="radio"
                       id="gmo-au-new-payment-method"
                       class="gmo-au-radio"
                       name="new_upi"
                       ng-model="data.selectedUpi"
                       ng-value="data.newUpi"
                />
              </td>
              <td class="gmo-au-table__cell">
                <label for="gmo-au-new-payment-method" class="gmo-au-table__cell-label">
                  <t context="checkout.platform">Authorization on {{data.newUpi.create_date | date: 'short'}}</t>
                </label>
              </td>
              <td class="gmo-au-table__cell gmo-au-table__cell--action">
                <button
                  class="gmo-au-cancel-button"
                  type="button"
                  ng-click="cancelNewAccount()">
                  <t>Cancel</t>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="manage-payment-method-wrapper" ng-show="isNewPaymentScreenShown()">
      <div ng-if="!isSubscription()">
        <div class="custom-checkbox">
          <input
            type="checkbox"
            name="store_in_vault"
            ng-model="data.store_in_vault"
            id="remember-my-card-gmo-au">
          <label for="remember-my-card-gmo-au">
            <t>Remember my card for future payments</t>
          </label>
        </div>
      </div>
      <div ng-if="isSubscription()">
        <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault">
      </div>
      <div class="custom-checkbox" ng-if="data.store_in_vault">
        <input type="checkbox" name="isDefaultPaymentMethodApplied" ng-model="data.isDefaultPaymentMethodApplied"
               id="default-payment-method-gmo-au" data-e2e="apply-as-default-checkbox"/>
        <label for="default-payment-method-gmo-au" data-e2e="apply-as-default-label">
          <t>Apply this payment method to all active subscriptions</t>
        </label>
      </div>
    </div>

    <div consents-list></div>

    <div class="footer-modal" ng-show="stored.length > 0">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input
          class="auto-renew-purchase-checkbox"
          type="checkbox"
          ng-model="input.autoRenew"
          id="auto_renew">
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div
        class="complete-purchase-button"
        ng-show="isConfirmStepEnabled()"
        goto-confirmation-button
        title="{{'Complete Purchase' | t}}"></div>
      <div
        class="complete-purchase-button"
        ng-show="!isConfirmStepEnabled()"
        complete-purchase-button
        title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/vipps/checkout/component.shtml">
<div class="vipps-wrapper new-card-form">
    <div class="row">
        <div consents-list></div>
        <div class="footer-modal">
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Continue with Vipps' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Continue with Vipps' | t}}"></div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/vipps/common/baseTemplate.shtml">
<div class="cc-fields-layout">

</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/wirecard/checkout/component.shtml">
<div class="wirecard-wrapper new-card-form">
    <div class="row">
        <!--TODO - find a way to isolate this component and logic outside, in checkout, or at least make components-->
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <div id="seamless-form-target" style="height: 400px;"></div>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-wirecard"/>
                                <label for="rermber-my-card1-wirecard">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-wirecard" />
                        <label for="default-payment-method-wirecard"><t>Apply this payment method to all active subscriptions</t></label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/gmosoftbank/checkout/component.shtml">
<div class="gmo-softbank-wrapper new-card-form">
  <div class="row">
    <div class="gmo-softbank-checkout-payment-form" ng-class="{'gmo-softbank-checkout-payment-form--custom-indent': isIndentRequired}">
      <div ng-show="isStoredPaymentsScreenShown()">
        <div class="gmo-softbank-checkout-payment-form__title">
          <a href="javascript:void(0)" class="add-credit-card" ng-click="gotoNewPaymentScreen()"
             ng-show="stored.length > 0" data-e2e="gmo-softbank-add-credit-card">
            +
            <t>Add a new authorization</t>
          </a>
          <h4>
            <t>Your active authorizations</t>
          </h4>
        </div>
        <table class="gmo-softbank-table" ng-if="stored.length">
          <tr class="gmo-softbank-table__row" ng-repeat="upi in stored" data-e2e="{{'pm-'+upi.id}}">
            <td class="gmo-softbank-table__cell gmo-softbank-table__cell--radio">
              <input
                class="gmo-softbank-radio"
                type="radio"
                id="radio-{{upi.id}}"
                name="stored_method"
                ng-model="$parent.data.selectedUpi"
                ng-change="onUpiChange(upi)"
                ng-value="upi"
                radio-track-by="id">
            </td>
            <td class="gmo-softbank-table__cell">
              <label for="radio-{{upi.id}}" class="gmo-softbank-table__cell-label">
                <t context="checkout.platform">Authorization on {{upi.create_date | date: 'short'}}</t>
              </label>
            </td>
            <td class="payment-method-card-cell payment-method-card-cell--default-payment">
              <div class="payment-method-card-default-payment"
                   ng-show="upi.id === data.defaultPaymentMethodId">
                <t>Default</t>
              </div>
              <button ng-hide="upi.id === data.defaultPaymentMethodId"
                      ng-click="setAsDefault(upi)"
                      type="button"
                      class="set-as-default-button"
              >
                <t>Set as default</t>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div ng-show="isNewPaymentScreenShown()">
        <div class="gmo-softbank-checkout-payment-form__title">
          <a href="javascript:void(0)" class="go-back-to-cards" ng-click="gotoStoredPaymentsScreen()"
             ng-show="isReturnToStoredPaymentsShown()">
            <t>Return to saved authorizations</t>
          </a>
          <h4>
            <t>Your active authorizations</t>
          </h4>
        </div>

        <div ng-if="!data.newUpi">
          <button
            class="pm-login-button gmo-softbank-login-button"
            ng-click="startWithNewAccount()"
            data-e2e="gmo-softbank-login-button">
            <t context="checkout.platform">Payment authorization</t>
          </button>
        </div>

        <div ng-if="data.newUpi">
          <table class="gmo-softbank-table">
            <tr class="gmo-softbank-table__row">
              <td class="gmo-softbank-table__cell gmo-softbank-table__cell--radio">
                <input type="radio"
                       id="gmo-softbank-new-payment-method"
                       class="gmo-softbank-radio"
                       name="new_upi"
                       ng-model="data.selectedUpi"
                       ng-value="data.newUpi"
                />
              </td>
              <td class="gmo-softbank-table__cell">
                <label for="gmo-softbank-new-payment-method" class="gmo-softbank-table__cell-label">
                  <t context="checkout.platform">Authorization on {{data.newUpi.create_date | date: 'short'}}</t>
                </label>
              </td>
              <td class="gmo-softbank-table__cell gmo-softbank-table__cell--action">
                <button
                  class="gmo-softbank-cancel-button"
                  type="button"
                  ng-click="cancelNewAccount()">
                  <t>Cancel</t>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="manage-payment-method-wrapper" ng-show="isNewPaymentScreenShown()">
      <div ng-if="!isSubscription()">
        <div class="custom-checkbox">
          <input
            type="checkbox"
            name="store_in_vault"
            ng-model="data.store_in_vault"
            id="remember-my-card-gmo-softbank">
          <label for="remember-my-card-gmo-softbank">
            <t>Remember my card for future payments</t>
          </label>
        </div>
      </div>
      <div ng-if="isSubscription()">
        <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault">
      </div>
      <div class="custom-checkbox" ng-if="data.store_in_vault">
        <input type="checkbox" name="isDefaultPaymentMethodApplied" ng-model="data.isDefaultPaymentMethodApplied"
               id="default-payment-method-gmo-softbank" data-e2e="apply-as-default-checkbox"/>
        <label for="default-payment-method-gmo-softbank" data-e2e="apply-as-default-label">
          <t>Apply this payment method to all active subscriptions</t>
        </label>
      </div>
    </div>

    <div consents-list></div>

    <div class="footer-modal" ng-show="stored.length > 0">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input
          class="auto-renew-purchase-checkbox"
          type="checkbox"
          ng-model="input.autoRenew"
          id="auto_renew">
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div
        class="complete-purchase-button"
        ng-show="isConfirmStepEnabled()"
        goto-confirmation-button
        title="{{'Complete Purchase' | t}}"></div>
      <div
        class="complete-purchase-button"
        ng-show="!isConfirmStepEnabled()"
        complete-purchase-button
        title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/payuargentinacc/checkout/component.shtml">
<div class="payu-latam-argentina-cc-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">
                <dynamic-base-inputs-component name="providerName"
                                               credit-card="credit_card"></dynamic-base-inputs-component>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="rermber-my-card1-payu-latam-argentina-cc"/>
                                <label for="rermber-my-card1-payu-latam-argentina-cc">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-payu-latam-argentina-cc"/>
                        <label for="default-payment-method-payu-latam-argentina-cc">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"></div>
            <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
                 title="{{'Complete Purchase' | t}}"></div>
        </div>
    </div>
</div>
</script>

<script type="text/ng-template" id="/frontend/providers/components/payuargentinacc/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__flex-row cc-fields-layout__flex-row--card-number">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
      <credit-card-number ng-model="credit_card.num.value"
                          on-change="credit_card.num.onChangeCallback"
                          ng-disabled="credit_card.num.disabled"
                          ng-required="credit_card.num.required"
                          ng-readonly="credit_card.num.readonly"
                          maxlength="credit_card.num.maxlength"
                          valid="credit_card.num.valid"
                          name="'num'">
      </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__field--no-margin-bottom cc-fields-layout__field--group">
      <div class="cc-fields-layout__flex-row">
        <div class="cc-fields-layout__field cc-fields-layout__expire">
          <cc-expire-component ng-model="credit_card.expire.value"
                               on-change="credit_card.expire.onChangeCallback"
                               ng-disabled="credit_card.expire.disabled"
                               ng-required="credit_card.expire.required"
                               ng-readonly="credit_card.expire.readonly"
                               maxlength="credit_card.expire.maxlength"
                               valid="credit_card.expire.valid"
                               name="'expire'">
          </cc-expire-component>
        </div>
        <div class="cc-fields-layout__field cc-fields-layout__cvv">
          <credit-card-cvv ng-model="credit_card.cvv.value"
                           on-change="credit_card.cvv.onChangeCallback"
                           ng-disabled="credit_card.cvv.disabled"
                           ng-required="credit_card.cvv.required"
                           ng-readonly="credit_card.cvv.readonly"
                           maxlength="credit_card.cvv.maxlength"
                           valid="credit_card.cvv.valid"
                           name="'cvv'">
          </credit-card-cvv>
        </div>
      </div>
    </div>
  </div>
  <div class="cc-fields-layout__field cc-fields-layout__card-holder">
    <credit-card-holder ng-model="credit_card.holder.value"
                        on-change="credit_card.holder.onChangeCallback"
                        ng-disabled="credit_card.holder.disabled"
                        icon="'client'"
                        ng-required="credit_card.holder.required"
                        ng-readonly="credit_card.holder.readonly"
                        maxlength="credit_card.holder.maxlength"
                        valid="credit_card.holder.valid"
                        name="'holder'">
    </credit-card-holder>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__identification-type">
      <credit-card-identification-type-component ng-model="credit_card.identificationType.value"
                                                 on-identification-type-select="credit_card.identificationType.onIdentificationTypeSelect"
                                                 ng-disabled="credit_card.identificationType.disabled"
                                                 ng-required="credit_card.identificationType.required"
                                                 ng-readonly="credit_card.identificationType.readonly"
                                                 placeholder="'Identification type' | t"
                                                 valid="credit_card.identificationType.valid"
                                                 is-dropdown-shown="credit_card.identificationType.isDropdownShown"
                                                 identification-types="credit_card.identificationType.items"
                                                 title="credit_card.identificationType.title"
                                                 data-e2e="cc_identificationType"
                                                 icon="'identification-type'"
                                                 name="'identificationType'">
      </credit-card-identification-type-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__identification-number">
      <cc-text-input placeholder="'Identification number' | t"
                     ng-model="credit_card.identificationNumber.value"
                     ng-readonly="credit_card.identificationNumber.readonly"
                     ng-required="credit_card.identificationNumber.required"
                     ng-disabled="credit_card.identificationNumber.disabled"
                     icon="'national-id'"
                     class="cc-field-wrap fs-block"
                     class-name="className"
                     validation-rule="credit_card.identificationNumber.validationRule"
                     on-change="credit_card.identificationNumber.onChangeCallback"
                     name="'identificationNumber'"
                     data-e2e="cc_identificationNumber"
                     valid="credit_card.identificationNumber.valid">
      </cc-text-input>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__first-name">
      <cc-text-input placeholder="'First name' | t"
                     ng-model="credit_card.firstName.value"
                     on-change="credit_card.firstName.onChangeCallback"
                     ng-disabled="credit_card.firstName.disabled"
                     icon="'client'"
                     ng-required="credit_card.firstName.required"
                     ng-readonly="credit_card.firstName.readonly"
                     maxlength="credit_card.firstName.maxlength"
                     valid="credit_card.firstName.valid"
                     name="'firstName'"
                     data-e2e="cc_first_name">
      </cc-text-input>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__last-name">
      <cc-text-input placeholder="'Last name' | t"
                     ng-model="credit_card.lastName.value"
                     on-change="credit_card.lastName.onChangeCallback"
                     ng-disabled="credit_card.lastName.disabled"
                     icon="'client'"
                     ng-required="credit_card.lastName.required"
                     ng-readonly="credit_card.lastName.readonly"
                     maxlength="credit_card.lastName.maxlength"
                     valid="credit_card.lastName.valid"
                     name="'lastName'"
                     data-e2e="cc_last_name">
      </cc-text-input>
    </div>
  </div>

  <div class="cc-fields-layout__field cc-fields-layout__address">
    <cc-text-input placeholder="'Address' | t"
                   ng-model="credit_card.address.value"
                   on-change="credit_card.address.onChangeCallback"
                   ng-disabled="credit_card.address.disabled"
                   ng-required="credit_card.address.required"
                   ng-readonly="credit_card.address.readonly"
                   maxlength="credit_card.address.maxlength"
                   icon="'map'"
                   valid="credit_card.address.valid"
                   name="'address'"
                   data-e2e="cc_address">
    </cc-text-input>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__country">
      <credit-card-country-component ng-model="credit_card.country.value"
                                     ng-disabled="credit_card.country.disabled"
                                     ng-required="credit_card.country.required"
                                     ng-readonly="credit_card.country.readonly"
                                     on-change="credit_card.country.onChangeCallback"
                                     on-country-select="credit_card.country.onCountrySelect"
                                     valid="credit_card.country.valid"
                                     placeholder="'Country' | t"
                                     countries="credit_card.country.items"
                                     title="credit_card.country.title"
                                     icon="'globe'"
                                     name="'country'"
                                     data-e2e="cc_county">
      </credit-card-country-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__state">
      <credit-card-state-component ng-model="credit_card.state.value"
                                   ng-disabled="credit_card.state.disabled"
                                   ng-required="credit_card.state.required"
                                   ng-readonly="credit_card.state.readonly"
                                   on-change="credit_card.state.onChangeCallback"
                                   on-state-select="credit_card.state.onStateSelect"
                                   valid="credit_card.state.valid"
                                   placeholder="'Province' | t"
                                   is-dropdown-shown="credit_card.state.isDropdownShown"
                                   states="credit_card.state.items"
                                   title="credit_card.state.title"
                                   icon="'map'"
                                   name="'state'"
                                   data-e2e="cc_state">
      </credit-card-state-component>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__city">
      <credit-card-city-component ng-model="credit_card.city.value"
                                  ng-disabled="credit_card.city.disabled"
                                  ng-required="credit_card.city.required"
                                  ng-readonly="credit_card.city.readonly"
                                  on-change="credit_card.city.onChangeCallback"
                                  on-city-select="credit_card.city.onCitySelect"
                                  valid="credit_card.city.valid"
                                  placeholder="'City' | t"
                                  is-dropdown-shown="credit_card.city.isDropdownShown"
                                  cities="credit_card.city.items"
                                  title="credit_card.city.title"
                                  icon="'map'"
                                  name="'city'"
                                  data-e2e="cc_city">
      </credit-card-city-component>
    </div>

    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code placeholder="'ZIP/Postal code' | t"
                               ng-model="credit_card.zip.value"
                               on-change="credit_card.zip.onChangeCallback"
                               ng-disabled="credit_card.zip.disabled"
                               ng-required="credit_card.zip.required"
                               ng-readonly="credit_card.zip.readonly"
                               maxlength="credit_card.zip.maxlength"
                               valid="credit_card.zip.valid"
                               name="'zip'">
      </credit-card-postal-code>
    </div>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
      <cc-phone-number-component placeholder="'Phone number' | t"
                                 ng-model="credit_card.phone.value"
                                 on-change="credit_card.phone.onChangeCallback"
                                 ng-disabled="credit_card.phone.disabled"
                                 ng-required="credit_card.phone.required"
                                 ng-readonly="credit_card.phone.readonly"
                                 maxlength="credit_card.phone.maxlength"
                                 valid="credit_card.phone.valid"
                                 validation-rule="'numeric'"
                                 name="'phone'">
      </cc-phone-number-component>
    </div>
    <div class="cc-fields-layout__field"></div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/chase/checkout/component.shtml">
<div class="chase-wrapper new-card-form">
  <div class="row">
    <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
      <div class="add-credit-card-wrapper">
        <h4>
          <t>Your credit and debit cards</t>
        </h4>
        <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
           ng-show="cc.stored.length > 0">
          +
          <t>Add a card</t>
        </a>
      </div>
      <table class="payment-method-card" ng-if="cc.stored.length">
        <tr class="payment-method-card-row" ng-repeat="method in cc.stored" data-e2e="{{'pm-'+ method.id}}"
            ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
          <td class="payment-method-card-cell">
            <input type="radio" name="stored_method" value="{{method.id}}"
                   ng-model="$parent.cc.selectedUpiId"/>
          </td>
          <td class="payment-method-card-cell">
            <div class="credit-card-{{method.identifier}}"></div>
          </td>
          <td class="payment-method-card-cell">
            <div>{{method.type}} *{{method.ending_in}}</div>
          </td>
          <td class="payment-method-card-cell payment-method-card-cell-expiration">
            <t>Expires in</t>
            {{method.expire_month}}/{{method.expire_year}}
          </td>
          <td class="payment-method-card-cell payment-method-card-cell-default-payment">
            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                    ng-click="setAsDefaultPaymentMethod(method)"
                    type="button"
                    class="set-as-default-button"
            >
              <t>Set as default</t>
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div mobile class="cc_stored_cards" ng-show="cc.initiated">
      <table class="payment-method-card" ng-if="cc.stored.length">
        <tr class="payment-method-card-row" ng-repeat="method in cc.stored" data-e2e="{{'pm-'+ method.id}}"
            ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
          <td class="payment-method-card-cell">
            <input type="radio" name="stored_method" value="{{method.id}}"
                   ng-model="$parent.cc.selectedUpiId"
                   ng-click="$parent.cc.payWithNew = false"/>
          </td>
          <td class="payment-method-card-cell">
            <div class="credit-card-{{method.identifier}}"></div>
          </td>
          <td class="payment-method-card-cell">
            <div>*{{method.ending_in}}</div>
          </td>
          <td class="payment-method-card-cell payment-method-card-cell-default-payment">
            <div class="payment-method-card-default-payment" ng-show="method.id === cc.defaultPaymentMethodId"><t>Default</t></div>
            <button ng-hide="method.id === cc.defaultPaymentMethodId"
                    ng-click="setAsDefaultPaymentMethod(method)"
                    type="button"
                    class="set-as-default-button"
            >
              <t>Set as default</t>
            </button>
          </td>
        </tr>
        <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
          <td class="payment-method-card-cell">
            <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
          </td>
          <td class="payment-method-card-cell" colspan="2">
            <t>Add a new card</t>
          </td>
        </tr>
      </table>
    </div>

    <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
      <div desktop class="go-back-to-cards-wrapper">
        <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
           ng-show="cc.stored.length > 0">
          <t>Return to saved cards</t>
        </a>
        <h4>
          <t>Add a new credit or debit card</t>
        </h4>
      </div>
      <form class="new-card-form" name="ccForm" role="form">
        <dynamic-base-inputs-component name="providerName" credit-card="credit_card"></dynamic-base-inputs-component>
        <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="remember-my-card-chase"/>
                                <label for="remember-my-card-chase">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
          <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
          <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
            <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId" id="default-payment-method-chase"
                   data-e2e="apply-as-default-checkbox"/>
            <label for="default-payment-method-chase" data-e2e="apply-as-default-label"><t>Apply this payment method to all active subscriptions</t></label>
          </div>
        </div>
      </form>
    </div>
    <div consents-list></div>
    <div class="footer-modal">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
               id="auto_renew"/>
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
           title="{{'Complete Purchase' | t}}"></div>
      <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
           title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/chase/common/baseTemplate.shtml">
<div class="cc-fields-layout">
  <div class="cc-fields-layout__field cc-fields-layout__card-holder">
    <credit-card-holder ng-model="credit_card.holder.value"
                        on-change="credit_card.holder.onChangeCallback"
                        ng-disabled="credit_card.holder.disabled"
                        ng-required="credit_card.holder.required"
                        ng-readonly="credit_card.holder.readonly"
                        maxlength="credit_card.holder.maxlength"
                        valid="credit_card.holder.valid"
                        name="'holder'">
    </credit-card-holder>
  </div>
  <div class="cc-fields-layout__flex-row">
    <div class="cc-fields-layout__field cc-fields-layout__card-number">
      <credit-card-number ng-model="credit_card.num.value"
                          on-change="credit_card.num.onChangeCallback"
                          ng-disabled="credit_card.num.disabled"
                          ng-required="credit_card.num.required"
                          ng-readonly="credit_card.num.readonly"
                          maxlength="credit_card.num.maxlength"
                          valid="credit_card.num.valid"
                          credit-card-auto-space
                          name="'num'">
      </credit-card-number>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__expire">
      <cc-expire-component ng-model="credit_card.expire.value"
                           on-change="credit_card.expire.onChangeCallback"
                           ng-disabled="credit_card.expire.disabled"
                           ng-required="credit_card.expire.required"
                           ng-readonly="credit_card.expire.readonly"
                           maxlength="credit_card.expire.maxlength"
                           valid="credit_card.expire.valid"
                           name="'expire'"
                           on-change="onChangeCallback">
      </cc-expire-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__cvv">
      <credit-card-cvv ng-model="credit_card.cvv.value"
                       on-change="credit_card.cvv.onChangeCallback"
                       ng-disabled="credit_card.cvv.disabled"
                       ng-required="credit_card.cvv.required"
                       ng-readonly="credit_card.cvv.readonly"
                       maxlength="credit_card.cvv.maxlength"
                       valid="credit_card.cvv.valid"
                       name="'cvv'">
      </credit-card-cvv>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__postal-code">
      <credit-card-postal-code i18n-placeholder="{{'ZIP/Postal code' | t}}"
                               ng-model="credit_card.postal_code.value"
                               on-change="credit_card.postal_code.onChangeCallback"
                               ng-disabled="credit_card.postal_code.disabled"
                               ng-required="credit_card.postal_code.required"
                               ng-readonly="credit_card.postal_code.readonly"
                               maxlength="credit_card.postal_code.maxlength"
                               valid="credit_card.postal_code.valid"
                               name="'postal_code'">
      </credit-card-postal-code>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/inbaf/checkout/component.shtml">
<div class="inbaf-wrapper new-card-form">
  <div class="row">
    <div class="cc_stored_cards" ng-show="data.stored.length > 0">
      <table class="payment-method-card">
        <tr class="payment-method-card-row" ng-repeat="method in data.stored"
            ng-class="{'selected' : $parent.data.selectedUpiId == method.id}">
          <td class="inbaf-table-cell">
            <label class="inbaf-table-cell-label">
              <t context="checkout.platform">{{method.description}}</t>
            </label>
          </td>
          <td class="inbaf-table-cell inbaf-text-right">
            <div class="payment-method-card-default-payment"
                 ng-show="method.id === data.defaultPaymentMethodId">
              <t>Default</t>
            </div>
            <button ng-hide="method.id === data.defaultPaymentMethodId"
                    ng-click="setAsDefault(method)"
                    type="button"
                    class="set-as-default-button">
              <t>Set as default</t>
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div class="cc_new_card" ng-show="data.stored.length <= 0">
      <div class="row inbaf-invoice-for">
        <div class="inbaf-warning-icon">

        </div>
        <div class="inbaf-invoice-for-text">
          <t context="checkout.platform">Your Invoice will be sent to your account email after <b>Complete purchase</b>.</t>
        </div>
      </div>
      <div class="payment-system-condition">
        <span ng-if="!isSubscription()">
          <div class="custom-checkbox">
            <input type="checkbox" name="store_in_vault" ng-model="data.store_in_vault" id="remember-my-email-inbaf"/>
            <label for="remember-my-email-inbaf">
                <t>Remember my email for future invoices</t>
            </label>
          </div>
        </span>
        <span ng-if="isSubscription()">
          <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault"/>
        </span>
        <div class="custom-checkbox" ng-if="data.store_in_vault">
          <input type="checkbox" name="defaultPaymentMethodId" ng-model="data.defaultPaymentMethodId" id="default-payment-method-inbaf"/>
          <label for="default-payment-method-inbaf">
            <t>Apply this payment method to all active subscriptions</t>
          </label>
        </div>
      </div>
    </div>

    <div consents-list></div>
    <div class="footer-modal">
      <div ng-show="isConfirmStepEnabled()" class="complete-purchase-button" goto-confirmation-button
           title="{{'Complete Purchase' | t}}"></div>
      <div ng-show="!isConfirmStepEnabled()" class="complete-purchase-button" complete-purchase-button
           title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/gmodocomo/checkout/component.shtml">
<div class="gmo-docomo-wrapper new-card-form">
  <div class="row">
    <div class="gmo-docomo-checkout-payment-form" ng-class="{'gmo-docomo-checkout-payment-form--custom-indent': isIndentRequired}">
      <div ng-show="isStoredPaymentsScreenShown()">
        <div class="gmo-docomo-checkout-payment-form__title">
          <a href="javascript:void(0)" class="add-credit-card" ng-click="gotoNewPaymentScreen()"
             ng-show="stored.length > 0" data-e2e="gmo-docomo-add-credit-card">
            +
            <t>Add a new authorization</t>
          </a>
          <h4>
            <t>Your active authorizations</t>
          </h4>
        </div>
        <table class="gmo-docomo-table" ng-if="stored.length">
          <tr class="gmo-docomo-table__row" ng-repeat="upi in stored" data-e2e="{{'pm-'+upi.id}}">
            <td class="gmo-docomo-table__cell gmo-docomo-table__cell--radio">
              <input
                class="gmo-docomo-radio"
                type="radio"
                id="radio-{{upi.id}}"
                name="stored_method"
                ng-model="$parent.data.selectedUpi"
                ng-change="onUpiChange(upi)"
                ng-value="upi"
                radio-track-by="id">
            </td>
            <td class="gmo-docomo-table__cell">
              <label for="radio-{{upi.id}}" class="gmo-docomo-table__cell-label">
                <t context="checkout.platform">Authorization on {{upi.create_date | date: 'short'}}</t>
              </label>
            </td>
            <td class="payment-method-card-cell payment-method-card-cell--default-payment">
              <div class="payment-method-card-default-payment"
                   ng-show="upi.id === data.defaultPaymentMethodId">
                <t>Default</t>
              </div>
              <button ng-hide="upi.id === data.defaultPaymentMethodId"
                      ng-click="setAsDefault(upi)"
                      type="button"
                      class="set-as-default-button"
              >
                <t>Set as default</t>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div ng-show="isNewPaymentScreenShown()">
        <div class="gmo-docomo-checkout-payment-form__title">
          <a href="javascript:void(0)" class="go-back-to-cards" ng-click="gotoStoredPaymentsScreen()"
             ng-show="isReturnToStoredPaymentsShown()">
            <t>Return to saved authorizations</t>
          </a>
          <h4>
            <t>Your active authorizations</t>
          </h4>
        </div>

        <div ng-if="!data.newUpi">
          <button
            class="pm-login-button gmo-docomo-login-button"
            ng-click="startWithNewAccount()"
            data-e2e="gmo-docomo-login-button">
            <t context="checkout.platform">Payment authorization</t>
          </button>
        </div>

        <div ng-if="data.newUpi">
          <table class="gmo-docomo-table">
            <tr class="gmo-docomo-table__row">
              <td class="gmo-docomo-table__cell gmo-docomo-table__cell--radio">
                <input type="radio"
                       id="gmo-docomo-new-payment-method"
                       class="gmo-docomo-radio"
                       name="new_upi"
                       ng-model="data.selectedUpi"
                       ng-value="data.newUpi"
                />
              </td>
              <td class="gmo-docomo-table__cell">
                <label for="gmo-docomo-new-payment-method" class="gmo-docomo-table__cell-label">
                  <t context="checkout.platform">Authorization on {{data.newUpi.create_date | date: 'short'}}</t>
                </label>
              </td>
              <td class="gmo-docomo-table__cell gmo-docomo-table__cell--action">
                <button
                  class="gmo-docomo-cancel-button"
                  type="button"
                  ng-click="cancelNewAccount()">
                  <t>Cancel</t>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="manage-payment-method-wrapper" ng-show="isNewPaymentScreenShown()">
      <div ng-if="!isSubscription()">
        <div class="custom-checkbox">
          <input
            type="checkbox"
            name="store_in_vault"
            ng-model="data.store_in_vault"
            id="remember-my-card-gmo-docomo">
          <label for="remember-my-card-gmo-docomo">
            <t>Remember my card for future payments</t>
          </label>
        </div>
      </div>
      <div ng-if="isSubscription()">
        <input type="hidden" name="store_in_vault" ng-model="data.store_in_vault">
      </div>
      <div class="custom-checkbox" ng-if="data.store_in_vault">
        <input type="checkbox" name="isDefaultPaymentMethodApplied" ng-model="data.isDefaultPaymentMethodApplied"
               id="default-payment-method-gmo-docomo" data-e2e="apply-as-default-checkbox"/>
        <label for="default-payment-method-gmo-docomo" data-e2e="apply-as-default-label">
          <t>Apply this payment method to all active subscriptions</t>
        </label>
      </div>
    </div>

    <div consents-list></div>

    <div class="footer-modal" ng-show="stored.length > 0">
      <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
        <input
          class="auto-renew-purchase-checkbox"
          type="checkbox"
          ng-model="input.autoRenew"
          id="auto_renew">
        <label class="auto-renew-purchase-label" for="auto_renew">
          <t>Automatically renew my subscription when the time comes.</t>
        </label>
      </div>
      <div
        class="complete-purchase-button"
        ng-show="isConfirmStepEnabled()"
        goto-confirmation-button
        title="{{'Complete Purchase' | t}}"></div>
      <div
        class="complete-purchase-button"
        ng-show="!isConfirmStepEnabled()"
        complete-purchase-button
        title="{{'Complete Purchase' | t}}"></div>
    </div>
  </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/bancard/checkout/component.shtml">
<div class="bancard-wrapper new-card-form">
    <div class="row">
        <div desktop class="cc_stored_cards" ng-show="!cc.payWithNew && cc.initiated">
            <div class="add-credit-card-wrapper">
                <h4>
                    <t>Your credit and debit cards</t>
                </h4>
                <a href="javascript:void(0)" class="add-credit-card" ng-click="cc.payWithNew = true"
                   ng-show="cc.stored.length > 0">
                    +
                    <t>Add a card</t>
                </a>
            </div>
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>{{method.type | tc:"checkout.platform"}} *{{method.ending_in}}</div>
                    </td>
                    <td class="payment-method-card-cell">
                        <t>Expires in</t>
                        {{method.expire_month}}/{{method.expire_year}}
                    </td>
                </tr>
            </table>
        </div>

        <div mobile class="cc_stored_cards" ng-show="cc.initiated">
            <table class="payment-method-card" ng-show="cc.stored.length > 0">
                <tr class="payment-method-card-row" ng-repeat="method in cc.stored"
                    ng-class="{'selected' : $parent.cc.selectedUpiId == method.id && $parent.cc.payWithNew != true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" value="{{method.id}}"
                               ng-model="$parent.cc.selectedUpiId"
                               ng-click="$parent.cc.payWithNew = false"/>
                    </td>
                    <td class="payment-method-card-cell">
                        <div class="credit-card-{{method.identifier}}"></div>
                    </td>
                    <td class="payment-method-card-cell">
                        <div>*{{method.ending_in}}</div>
                    </td>
                </tr>
                <tr class="payment-method-card-row" ng-class="{'selected' : $parent.cc.payWithNew == true}">
                    <td class="payment-method-card-cell">
                        <input type="radio" name="stored_method" ng-model="$parent.cc.payWithNew" ng-value="true"/>
                    </td>
                    <td class="payment-method-card-cell" colspan="2">
                        <t>Add a new card</t>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cc_new_card" ng-show="cc.payWithNew && cc.initiated">
            <div desktop class="go-back-to-cards-wrapper">
                <a href="javascript:void(0)" class="go-back-to-cards" ng-click="cc.payWithNew = false"
                   ng-show="cc.stored.length > 0">
                    <t>Return to saved cards</t>
                </a>
                <h4>
                    <t>Add a new credit or debit card</t>
                </h4>
            </div>
            <form class="new-card-form" name="ccForm" role="form">

                <div class="bancard-new-card-form">
                    <div ng-if="!cc.newCardInitiated">
                        <dynamic-base-inputs-component name="providerName"
                                                       credit-card="credit_card">
                        </dynamic-base-inputs-component>
                        <button
                                ng-click="createNewCard()"
                                class="bancard-new-card-create-button"
                                data-e2e="bancard_new_card_button"
                        ><t>Add card</t></button>
                    </div>
                    <div ng-show="cc.newCardRegistering" id="bancard-new-card-container" style="height: 350px;"></div>
                    <div ng-if="cc.registeredCard">
                        <t>Your card: </t>
                        {{cc.registeredCard.number}}
                    </div>
                </div>
                <div class="payment-system-condition">
                        <span ng-if="!isSubscription()">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="store_in_vault" ng-model="credit_card.store_in_vault"
                                       id="remember-my-card1-bancard"/>
                                <label for="remember-my-card1-bancard">
                                    <t>Remember my card for future payments</t>
                                </label>
                            </div>
                        </span>
                    <span ng-if="isSubscription()">
                            <input type="hidden" name="store_in_vault" ng-model="credit_card.store_in_vault"/>
                        </span>
                    <div class="custom-checkbox" ng-if="credit_card.store_in_vault">
                        <input type="checkbox" name="defaultPaymentMethodId" ng-model="cc.defaultPaymentMethodId"
                               id="default-payment-method-bancard"/>
                        <label for="default-payment-method-bancard">
                            <t>Apply this payment method to all active subscriptions</t>
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div consents-list></div>
      	<p>
          You are subscribing to On3. Free trial is for new subscribers only. After your trial ends, you will be charged full price of $99.99 for annual and $9.99 for monthly. For more details on our payment terms and how to cancel, click here.
  		</p>
		<p>
          Any subscription purchased on a promotion and canceled prior to 60 days of the renewal date shall be converted to a full-price subscription and will terminate when the "paid for" non-promotional period has ended. For example, if a user purchases an annual subscription to an On3 product under the promotional subscription offering of $10 for 1-year (the "Discounted Subscription" price). This user's subscription shall automatically renew at full price on the first-anniversary date at the full annual subscription price of $99.99. If this user cancels anytime 60 days before the first-anniversary date, this subscription will expire after 1 month and 6 days. Therefore, any Discounted Subscription canceled after 1 month and 6 days or 60 days before the first-anniversary date, the user's subscription shall terminate immediately. If the subscription is canceled before 1 month and 6 days, the subscription shall expire 1 month and 7 days from the initial purchase date.
  		</p>
        <div class="footer-modal">
            <div class="auto-renew-purchase" ng-show="isSelectedTermAutoRenewChoiceAvailable()">
                <input class="auto-renew-purchase-checkbox" type="checkbox" ng-model="input.autoRenew"
                       id="auto_renew"/>
                <label class="auto-renew-purchase-label" for="auto_renew">
                    <t>Automatically renew my subscription when the time comes.</t>
                </label>
            </div>
            <div ng-show="isConfirmStepEnabled()"
                 class="complete-purchase-button"
                 goto-confirmation-button
                 title="{{'Complete Purchase' | t}}"
                 is-disabled="isCompleteButtonDisabled()"
            >
            </div>
            <div ng-show="!isConfirmStepEnabled()"
                 class="complete-purchase-button"
                 complete-purchase-button
                 title="{{'Complete Purchase' | t}}"
                 is-disabled="isCompleteButtonDisabled()"
            >
            </div>
        </div>
    </div>
</div>

</script>

<script type="text/ng-template" id="/frontend/providers/components/bancard/common/baseTemplate.shtml">
<div class="cc-fields-layout">
    <div class="cc-fields-layout__field cc-fields-layout__email">
        <cc-email-component ng-model="credit_card.email.value"
                            on-change="credit_card.email.onChangeCallback"
                            ng-disabled="credit_card.email.disabled"
                            ng-required="credit_card.email.required"
                            ng-readonly="credit_card.email.readonly"
                            maxlength="credit_card.email.maxlength"
                            valid="credit_card.email.valid"
                            name="'email'">
        </cc-email-component>
    </div>
    <div class="cc-fields-layout__field cc-fields-layout__phone-number">
        <cc-phone-number-component ng-model="credit_card.phone_number.value"
                             on-change="credit_card.phone_number.onChangeCallback"
                             ng-disabled="credit_card.phone_number.disabled"
                             ng-required="credit_card.phone_number.required"
                             ng-readonly="credit_card.phone_number.readonly"
                             maxlength="credit_card.phone_number.maxlength"
                             valid="credit_card.phone_number.valid"
                             name="'phone_number'"
                             on-change="onChangeCallback">
        </cc-phone-number-component>
    </div>
</div>

</script>
<!-- consent-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/consents-list.html">

    <div class="consents">
        <div ng-repeat="item in consents | orderBy:'sortOrder' track by $index" class="consent">
            <div class="custom-checkbox">
                <input ng-model="item.checked" type="checkbox" id="consent-item-{{item.fieldId}}">
                <label ng-bind-html="item.displayText | tc:'consent.text'" for="consent-item-{{item.fieldId}}"></label>
            </div>
        </div>
    </div>

</script>

<!-- consent-box -->
<script type="text/ng-template" id="/widget/checkout/component/partials/consent-box.html">

    <div ng-if="consent" class="consents">
        <div class="custom-checkbox">
            <input ng-model="consent.checked" type="checkbox" id="consent-item-{{consent.fieldId}}">
            <label ng-bind-html="consent.displayText | tc:'consent.text'" for="consent-item-{{consent.fieldId}}"></label>
        </div>
    </div>

</script>

<!-- gift-email-params-form-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/gift-form-component.html">

    <div class="gift-header">
        <h1>
            <t>Give the gift of</t>
            {{selectedTerm.resource.name | tc:'resource.name'}}
        </h1>
    </div>

    <div class="gift-form">
        <form name="giftForm">
            <div gift-input-time class="gift-row"></div>
            <div gift-input-email class="gift-row"></div>
            <div gift-input-name class="gift-row"></div>
            <div gift-input-message class="gift-row"></div>
        </form>
    </div>

    <div class="gift-footer">
        <div class="access-buttons">
            <a class="linkButton fixed gray" ng-click="cancel()" title="{{ 'Cancel' | t }}"   style="background-color: {{ custom.siteLinkColor }}"><t>Cancel</t></a>
            <a class="linkButton fixed" ng-click="save()" data-e2e="next-button" title="{{ 'Next' | t }}"  style="background-color: {{ custom.siteLinkColor }}"><t>Next</t></a>
        </div>
    </div>

</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-time.html">
    <label>
        <t>Send</t>
    </label>
    <div class="gift-input sides">
        <span class="left-side">
            <label class="radio-label">
                <input name="send" id="send-now" type="radio" ng-model="form.sendType" value="now"/>
                <span class="text-wrap"><t>Now</t></span>
            </label>
        </span>
        <span class="right-side">
            <label class="radio-label">
                <input name="send" id="send-later" type="radio" ng-model="form.sendType" value="later"/>
                <span class="text-wrap"><t>Later:</t></span>
            </label>
            <div tp-datepicker options="optionsDatepicker" from-date="form.sendTime" to-date="form.sendTime" disable="inputDisabled()">
                <i class="icon-calendar"></i>
                <input type="date" class="gift-send-date" ng-model="form.sendTime" ng-disabled="inputDisabled()" date-format="{{dateFormat}}" placeholder="{{datePlaceholder}}"/>
            </div>
        </span>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-name.html">
    <label for="recipientName">
        <t>Recipient name</t>
    </label>
    <div class="gift-input">
        <input id="recipientName" class="regular-border" data-e2e="recipient-name" ng-model="form.recipientName" type="text" required/>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-email.html">
    <label for="recipientEmail">
        <t>Recipient email</t>
    </label>
    <div class="gift-input">
        <input id="recipientEmail" class="regular-border" data-e2e="recipient-email" ng-model="form.recipientEmail" type="text" required/>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/gift-input-message.html">
    <label for="message">
        <t>Add a personal message</t>
    </label>
    <div class="gift-input">
        <textarea id="message" ng-model="form.message" data-e2e="gift-message" rows="4"></textarea>
    </div>
</script>
<!-- redemption-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/redemption-component.html">
    <div account-header-component></div>

    <div class="redemption-header">
        <h1>
            <t>Redeem your gift</t>
        </h1>
    </div>

    <div redemption-code-and-info></div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/redemption-code.html">
    <div class="redemption-form">
        <form>
            <div>
                <p class="redeem-code-description">
                    <t>Enter the code of your gift</t>
                </p>
                <div redeem-code-input></div>
            </div>
        </form>
    </div>
    <div class="redemption-footer">
        <div class="access-button">
            <a class="linkButton fixed grey" ng-click="cancel()"  style="background-color: {{ custom.siteLinkColor }}"><t>Cancel</t></a>
            <a class="linkButton fixed" ng-click="applyCode()"  style="background-color: {{ custom.siteLinkColor }}"><t>Next</t></a>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/redemption-info.html">
    <div class="redemption-form">
        <div>
            <p>
                <t>You are about to receive <b>{{voucherResource()}}</b> by code "{{redeemCode()}}"</t>
            </p>
            <div class="redemption-info">
                <table>
                    <tr>
                        <th><t>Starting</t></th>
                        <th><t>Duration</t></th>
                        <th><t>Expires</t></th>
                        <th><t>Billing</t></th>
                    </tr>
                    <tr>
                        <td>
                            {{voucherStarting()}}
                        </td>
                        <td>{{voucherDuration()}}</td>
                        <td>{{voucherExpires()}}</td>
                        <td><b><t>Free</t></b></td>
                    </tr>
                </table>
            </div>
            <p ng-if="voucherRedemptionStartDate() !== null && voucherRedemptionEndDate() === null">
                <t arg0="{{voucherRedemptionStartDate()}}">Redemption is allowed after <b>{0}</b></t>
            </p>
            <p ng-if="voucherRedemptionStartDate() !== null && voucherRedemptionEndDate() !== null">
                <t arg0="{{voucherRedemptionStartDate()}}" arg1="{{voucherRedemptionEndDate()}}">Redemption is allowed from <b>{0}</b> to <b>{1}</b></t>
            </p>
            <p ng-if="voucherRedemptionStartDate() === null && voucherRedemptionEndDate() !== null">
                <t arg0="{{voucherRedemptionEndDate()}}">Redemption is allowed before <b>{0}</b></t>
            </p>
        </div>
    </div>

    <div ng-if="isSingleStepEnabled()" auth-component></div>

    <div class="redemption-footer">
        <div class="access-button">
            <a class="button big fixed gray" ng-click="cancel()"><t>Cancel</t></a>
            <a ng-if="voucherRedemptionAllowed() === true && addressCollectEnabled() === true"
               class="button big fixed" ng-click="toCollectAddress()"><t>Next</t></a>
            <a ng-if="voucherRedemptionAllowed() === true && addressCollectEnabled() !== true"
               class="button big fixed" ng-click="redeem()"><t>Redeem</t></a>
            <a ng-if="voucherRedemptionAllowed() !== true" class="button big fixed disabled"><t>Redeem</t></a>
        </div>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/redeem-code-input.html">
    <div class="redeem-code-input-wrapper">
        <input type="text"
               id="redeem-code-input"
               ng-model="form.redeemCode"
               on-enter="applyCode()"
               placeholder="{{'Enter gift code' | t}}"
               ng-class="{'invalid': redeemCodeIsInvalid()}"
        />
    </div>
</script>
<!-- term-selector-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/term-selector-component.html">
    <div desktop>
        <table class="account-terms">
            <tbody>
              <tr ng-repeat="term in terms">
                  <td class="title">
                      <h2>{{term.name | tc:'term.name'}}</h2>
                      {{term.description | tc:'term.descr'}}
                  </td>
                  <td class="detail">
                      <span ng-if="isDynamicTerm(term) && !isFreeDynamic(term)">
                          <span class="price">{{term.firstRealPrice}}</span>
                          <span style="margin: 0 -4px">/</span>
                          <span class="period">{{term.firstPeriod}}</span>
                      </span>
                      <span ng-if="isFreeDynamic(term)">
                          <span class="price"><t>Free</t></span>
                      </span>
                      <span ng-if="isPayableTerm(term) && !isDynamicTerm(term)">
                          <span class="price">
                              <span ng-if="term.hasFreeTrial"><t>Free</t></span>
                              <span ng-if="!term.hasFreeTrial">{{term.firstRealPrice}}</span>
                          </span>
                          <span><t>for</t></span>
                          <span class="period">{{term.firstPeriod}}</span>
                      </span>
                  </td>
                  <td class="choose">
                      <a href="javascript:void(0)" class="button big plan" ng-click="selectTerm(term)"><t>Choose</t></a>
                  </td>
              </tr>
            </tbody>
        </table>
    </div>
    <div mobile>
        <table class="account-terms">
            <tbody>
              <tr ng-repeat="term in terms">
                  <td class="title">
                      <h2>{{term.name|tc:'term.name'}}</h2>

                      <span class="detail" ng-show="isPayableTerm(term)">
                          <span ng-if="isDynamicTerm(term) && !isFreeDynamic(term)">
                              <span class="price">{{term.firstRealPrice}}</span>
                              <span style="margin: 0 -4px">/</span>
                              <span class="period">{{term.firstPeriod}}</span>
                          </span>
                          <span ng-if="isFreeDynamic(term)">
                              <span class="price"><t>Free</t></span>
                          </span>
                          <span ng-if="!isDynamicTerm(term)">
                              <span class="price">
                                  <span ng-if="term.hasFreeTrial"><t>Free</t></span>
                                  <span ng-if="!term.hasFreeTrial">{{term.firstRealPrice}}</span>
                              </span>
                              <span><t>for</t></span>
                              <span class="period">{{term.firstPeriod}}</span>
                          </span>
                      </span>
                  </td>
                  <td class="choose">
                      <a href="javascript:void(0)" class="button big plan" ng-click="selectTerm(term)"><t>Choose</t></a>
                  </td>
              </tr>
            </tbody>
        </table>
    </div>
</script>
<script type="text/ng-template" id="/widget/checkout/component/partials/auth-component.html"
        xmlns="http://www.w3.org/1999/html">
    <auth-custom-login>
        <auth-state name="login">
            <h1>
                <t>Login</t>
            </h1>
            <form>
                <input class="auth-email" type="text" placeholder="{{ 'Email'|t }}" ng-model="input.email"/>
                <input class="auth-password" type="password" placeholder="{{'Password'|t}}" ng-model="input.password"/>
            </form>
            <a class="auth-login button" ng-click="doLogin()">
                <t>Login</t>
            </a>
            <a class="auth-goto-register" ng-click="gotoRegister()">
                <t>Register</t>
            </a>
            <a class="auth-goto-forgot-password" ng-click="gotoForgotPassword()">
                <t>Forgot password?</t>
            </a>
        </auth-state>
        <auth-state name="register">
            <h1>
                <t>Register</t>
            </h1>
            <form>
                <input class="auth-email" type="text" placeholder="{{ 'Email'|t }}" ng-model="input.email"/>
                <input class="auth-password" type="password" placeholder="{{'Password'|t}}" ng-model="input.password"/>
            </form>
            <a class="auth-register button" ng-click="doRegister()">
                <t>Register</t>
            </a>
            <a class="auth-goto-login" ng-click="gotoLogin()">
                <t>Login</t>
            </a>
        </auth-state>
        <auth-state name="forgotPassword">
            <h1>
                <t>Forgot password</t>
            </h1>
            <form>
                <input class="auth-email" type="text" placeholder="{{ 'Email'|t }}" ng-model="input.email"/>
            </form>
            <a class="auth-forgot-password button" ng-click="doForgotPassword()">
                <t>Send</t>
            </a>
            <a class="auth-goto-login" ng-click="gotoLogin()">
                <t>Login</t>
            </a>
        </auth-state>
        <auth-state name="forgotPasswordHasSent">
            <h1>
                <t>Reset password instructions has been sent to</t>
                <span class="auth-email">{{ input.email }}</span>
            </h1>
            <a class="auth-goto-login" ng-click="gotoLogin()"><t>Login</t></a>
        </auth-state>
    </auth-custom-login>
</script>
<!-- promo-code-component -->
<script type="text/ng-template" id="/widget/checkout/component/partials/promo-code-component.html">
    <div ng-if="isPromoCodeAvailable() " animate-locked-promo-code>
        <div class="promo-code-component"
             ng-class="{'promo-code-unlocked': isSelectedTermLocked()}"
             ng-if="!isPromoCodeValid()">
            <div class="promo-code-eclipse">
                <div class="promo-code-lock"></div>
            </div>
            <div class="promo-code-description">
                <p class="promo-code-description-enter">
                    <t>Enter promo code to purchase</t>
                    <br/>
                    {{selectedTerm.resource.name | tc:'resource.name'}}
                </p>

                <p class="promo-code-description-error">
                    <t>Sorry, your promo code was not valid!</t>
                    <br/>
                    <span class="resource-name">
                        <t>Try another code to purchase</t> {{selectedTerm.resource.name | tc:'resource.name'}}
                    </span>
                </p>
            </div>
            <h4>
                <t>Promo code</t>
            </h4>
            <table ng-if="!isSelectedTermLocked()" class="promo-code-input-wrapper table-form-inline">
                <tr>
                    <td>
                        <div class="field-wrapper">
                            <label for="promo-code-input" class="icon percent"></label>
                            <div class="input">
                                <input
                                    id="promo-code-input"
                                    data-e2e="promoCodeInput"
                                    class="flat promo-code-input"
                                    type="text"
                                    autocomplete="off"
                                    ng-model="input.promoCode"
                                    name="promocode"
                                    on-enter="apply()"
                                    placeholder="{{'Enter promo code' | t}}"
                                    error-message="field-error"/>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            <table ng-if="isSelectedTermLocked()" class="promo-code-input-wrapper table-form-inline">
                <tr>
                    <td>
                        <div class="field-wrapper">
                            <label for="promo-code-input-locked" class="icon percent"></label>
                            <div class="input">
                                <input
                                  id="promo-code-input-locked"
                                  class="flat promo-code-input"
                                  data-e2e="promoCodeInput"
                                  type="text"
                                  autocomplete="off"
                                  ng-model="input.promoCode"
                                  name="promocode"
                                  on-enter="apply()"
                                  placeholder="{{'Enter promo code' | t}}"
                                  ng-click="inputClick()" />
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            <a class="button promo-code-apply" ng-click="apply()">
                <t>Apply</t>
            </a>
        </div>
        <div class="promo-code-component verified" ng-if="isPromoCodeValid()">
            <div class="promo-code-applied">
                <div class="promo-code-verified"></div>
                <t>{{input.promoCode }} is applied</t>
            </div>
            <div class="promo-code-revert" data-e2e="promoCodeRevert" ng-click="revert()"></div>
        </div>
    </div>
</script>

<!-- promo code another term dialog -->
<script type="text/ng-template" id="/widget/checkout/component/partials/promo-code-another-term-dialog.html">
    <div class="modal-header"></div>
    <div class="modal-content">
        <p>
            <t>Your {{verifiedPromoCode.discount}} off promo code
            is valid only for

            <b>{{otherTerm.resource.name}} - {{otherTerm.displayLine}}</b>.</t>
            <t>Switch to Another Resource? You can always come back.</t>
        </p>
    </div>
    <div class="action-panel">
        <a href="javascript:void(0)" class="button show-another-promocode" ng-click="selectTerm()"><t>Show me</t></a>
        <a href="javascript:void(0)" class="button gray" ng-click="close()"><t>Cancel</t></a>
    </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/upgrade-authentication-component.html">
  <div account-header-component></div>

  <div class="upgrade-container"
       ng-if="isConfirmationAvailable() === true">
    <div class="upgrade-container__subscription-changes">
      <span class="upgrade-title subscription-title">
        <t>Confirm the subscription upgrade</t>
      </span>
      <ul class="subscription-changes-list">
        <li class="list-item list-item--bullet"
            data-e2e="terms"
        >
          <span class="item-text">
            <t arg0="{{upgradeInformation.termFromName}}" arg1="{{upgradeInformation.termToName}}">You are about to upgrade from <b>{0}</b> to <b>{1}</b></t>
          </span>
        </li>
        <li class="list-item list-item--bullet"
            data-e2e="billing-plan"
        >
          <span class="item-text">
            <t arg0="{{upgradeInformation.billingPlan}}" arg1="{{upgradeInformation.billingDate | date:'mediumDate'}}">Your subscription for <b>{0}</b> will begin <b>{1}</b></t>
          </span>
        </li>
        <li class="list-item list-item--bullet"
            ng-if="upgradeInformation.address"
            data-e2e="address"
        >
          <span class="item-text">
              <t>The delivery address for the new subscription is:</t>
              <div>{{upgradeInformation.address.firstName}} {{upgradeInformation.address.lastName}} {{upgradeInformation.address.companyName}} {{upgradeInformation.address.phone}}</div>
              <div>{{upgradeInformation.address.line1}} {{upgradeInformation.address.line2}}</div>
              <div>{{upgradeInformation.address.countryName}} {{upgradeInformation.address.regionName}} {{upgradeInformation.address.postal}}</div>
          </span>
        </li>
      </ul>
    </div>
    <div class="upgrade-container__additional-information">
      <span class="upgrade-title additional-information-title">
        <t>Additional upgrade information</t>
      </span>
      <ul class="subscription-changes-list">
        <li class="list-item"
            data-e2e="payment-method"
        >
          <span class="item-text">
            <t>Payment method: </t>
            <span ng-show="upgradeInformation.creditCard">
              <t arg0="{{upgradeInformation.paymentType}}" arg1="{{upgradeInformation.accountNumber.slice(-4)}}"><b>{0} *{1}</b></t>
            </span>
            <span ng-hide="upgradeInformation.creditCard">
              <t arg0="{{upgradeInformation.paymentMethodName}}"><b>{0}</b></t>
            </span>
            <span ng-if="upgradeInformation.expireMonth && upgradeInformation.expireYear">
              <t arg0="{{upgradeInformation.expireMonth}}" arg1="{{upgradeInformation.expireYear}}"> expires in <b>{0}/{1}</b></t>
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>

  <div class="upgrade-container"
       ng-if="isConfirmationAvailable() === false">
    <div class="upgrade-container__subscription-changes">
      <span class="upgrade-title subscription-title">
        <t>Confirm the subscription upgrade</t>
      </span>
    </div>
    <ul class="subscription-changes-list">
      <li class="list-item" data-e2e="upgrade-unavailable-text">
        <span class="item-text">
          <t>This upgrade is unavailable. Please close this window to choose a new option.</t>
        </span>
      </li>
    </ul>
  </div>

  <div class="upgrade-complete-footer">
    <div class="access-buttons"
         ng-if="isConfirmationAvailable() === true">
      <a class="button big fixed--middle gray"
         ng-click="cancel()"
         data-e2e="cancel"
         title="{{ 'Cancel' | t }}"
      >
        <t>Cancel</t>
      </a>
      <a class="button big fixed--middle confirmation-button"
         ng-click="authenticate()"
         data-e2e="authenticate"
         title="{{ 'Authenticate' | t }}"
      >
        <t>Authenticate</t>
      </a>
    </div>

    <div class="access-buttons"
         ng-if="isConfirmationAvailable() === false">
      <a class="button big fixed--middle confirmation-button"
         ng-click="cancel()"
         data-e2e="close"
         title="{{ 'Close' | t }}"
      >
        <t>Close</t>
      </a>
    </div>
  </div>
</script>

<script type="text/ng-template" id="/widget/checkout/component/partials/upgrade-authentication-receipt-component.html">
  <div class="upgrade-purchase-receipt">
    <h1 class="you-already-have-access">
      <t>Thank you!</t>
    </h1>

    <div data-e2e="details">
      <t arg0="{{upgradeInformation.termFromName}}" arg1="{{upgradeInformation.termToName}}">You just confirmed the upgrade from {0} to {1}.</t>
    </div>
  </div>
</script>


<!-- Start main controller -->
<div id="checkout-container" style="">
    <div checkout width="740" height="100" ng-cloak>
        <div id="default-error-screen" ng-show="terminalError">
            <div class="error-screen">
    <div class="account-popup-header">
        <div class="account-popup-language-toggle" ng-if="!noLanguage">
            <language-selector></language-selector>
        </div>
        <boilerplate-close-button></boilerplate-close-button>
        <div class="account-group" ng-if="isUserValid()">
            <div class="button pict"></div>
            <div class="account-data">
                <div ng-if="user.displayName" class="account-name">{{user.displayName}}</div>
                <div ng-if="user.email" class="account-mail">{{user.email}}</div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="error-notification-icon"></div>
        <div class="content">
            <h1 ng-show="terminalErrorHeading">{{terminalErrorHeading}}</h1>
            <h1 ng-show="!terminalErrorHeading"><t>An error has occurred</t></h1>

            <p class="ng-hide" ng-show="terminalError">
                {{terminalError}}
            </p>
        </div>
    </div>
</div>

        </div>

        <div ng-show="!terminalError">

            <div view="state1">
    <div account-header-component></div>

    <div class="row account-head">
        <div class="business-logo" ng-show="app.image1">
            <img class="logo-img" ng-src="{{app.image1}}">
        </div>
        <div class="account-head-contentcol" ng-class="!app.image1 ? 'no-logo' : ''">
            <div class="account-head-content">
                <h2>
                    <t>Checkout with {{app.name}}</t>
                </h2>

                <p>
                    <t>Choose from any one of our options below.</t>
                </p>
            </div>
            <div class="clr"></div>
        </div>
    </div>

    <div>
        <div term-selector-component></div>
    </div>
</div>

<div view="state2" ng-class="{ 'mobile-user-agent': isMobileUserAgent() }">
  <div account-header-component></div>
	<div class="productBlock">
      <h1 class="heading">Unlock the best of {{custom.organizationDisplayName}}</h1>
      <h3 class="componentHeader">Membership</h3>
      <p class="actualPrice" ng-show="getBillingPlanToDisplay(selectedTerm.billingPlanTable)[1]">{{getBillingPlanToDisplay(selectedTerm.billingPlanTable)[1].price}}/{{getBillingPlanToDisplay(selectedTerm.billingPlanTable)[1].period}}</p>
      <p class="promoPrice" ng-show="getBillingPlanToDisplay(selectedTerm.billingPlanTable)[0]" style="color:{{custom.siteColor}};">{{getBillingPlanToDisplay(selectedTerm.billingPlanTable)[0].price}} for {{getBillingPlanToDisplay(selectedTerm.billingPlanTable)[0].billingPeriod}}</p>
      <p class="continuePrice" ng-show="getBillingPlanToDisplay(selectedTerm.billingPlanTable)[1]">Then {{getBillingPlanToDisplay(selectedTerm.billingPlanTable)[1].price}}/{{getBillingPlanToDisplay(selectedTerm.billingPlanTable)[1].period}} thereafter. Cancel anytime.</p>   
  </div>
 
    <div auth-component></div>
    <div payment-form-component></div>
	<div promo-code-component></div>
</div>

<!-- Receipt Screen -->
<div view="alreadyHasAccess">
    <div already-has-access-component></div>
</div>

<div view="auth">
    <div account-header-component></div>
    <div auth-component></div>
</div>

<div view="lockedPromoCode">
    <div account-header-component></div>
    <div promo-code-component></div>
</div>

<div view="externalVerification">
    <div account-header-component></div>
    <div external-verification-component></div>
</div>

<div view="printAddress">
    <div account-header-component></div>
    <div print-address-component></div>
</div>

<div view="confirmation">
    <div confirmation-component></div>
</div>

<div view="giftParams">
    <div account-header-component></div>
    <div gift-form-component></div>
</div>

<div view="redemption">
    <div redemption-component></div>
</div>

<div view="user-non-confirmed">
    <div account-header-component></div>
    <div email-confirmation-required></div>
</div>

<div view="bankSecure">
    <div bank-secure-component></div>
</div>

<div view="sharedSubscription">
    <div shared-subscription-component></div>
</div>

<div view="redeemSharedSubscription">
    <div redeem-shared-subscription-component></div>
</div>

<div view="continueThreeDSPurchase">
    <div continue-three-d-s-purchase-component></div>
</div>

<div view="upgradeSubscription">
    <div complete-upgrade-component></div>
</div>

<div view="upgradeSharedSubscription">
  <div upgrade-shared-subscription-component></div>
</div>

<div view="subscriptionReactivation">
  <div reactivate-subscription-component></div>
</div>

<div view="upgradeAuthentication">
  <div upgrade-authentication-component></div>
</div>


            <div view="offer">
                <div ng-repeat="term in terms" ng-if="custom.resource == term.resource.rid">
  <button class="joinLink" ng-click="startCheckout(term.termId)">
    Join for $1
  </button>
</div>
            </div>

           <div view="receipt">
                
           </div>

            <div class='clearfix'></div>
        </div>

    </div>
</div>

<style type="text/css" tp-style="checkout-custom-style">
    a.button,
.promo-code-component .promo-code-applied {
  background-color: #70DB6A !important;
  transition: background-color 0.5s ease;
}

a.button.promo-code-apply {
  background-color: #eee !important;
  color: #646a78;
  font-weight: normal;
  transition: background-color 0.5s ease;
}

a.button:active,
a.button:hover,
a.button.promo-code-apply:active,
a.button.promo-code-apply:hover {
  background-color: #70DB6A !important;
  color: #fff;
  opacity: 0.9;
}

.add-credit-card, .go-back-to-cards,
.set-as-default-button {
    color: #646a78;
}

.add-credit-card:hover, .go-back-to-cards:hover,
.set-as-default-button:hover {
    color: #646a78;
    opacity: 0.9;
}

.set-as-default-button {
    border: 1px solid #646a78;
}

.set-as-default-button:hover {
    border: 1px solid #9398a5;
    opacity: 0.9;
}

.tp-modal .tp-close.tp-active {
    top: 15px !important;
    right: 15px !important;
}

.tp-backdrop.tp-active {
    opacity: .5;
}

a,
a:visited,
.receipt .content a {
  color: #646a78;
}

.input.focused,
.input:focus,
input[type="text"]:focus,
input[type="number"]:focus,
input[type="date"]:focus,
input[type="password"]:focus,
input[type="tel"]:focus,
input.light-blue:focus,
.field-wrapper:active,
.table-form-inline .field-wrapper:focus-within,
.cc-field:active,
.tp-dropdown__select:focus {
  /*border-color: rgba(15, 15, 21, 0.3);*/
  border-color: rgba(15, 15, 21, 0.5);
}

.button-register {
    text-align: center;
}

.button-register:before {
    content: "Continue";
}

.button-register t {
    text-indent: -9999px;
    position: absolute;
}

.meta {
  color: #757575;
  font-size: 0.7em;
}

.linkButton {
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    line-height: 30px;
    user-select: none;
    font-weight: 400;
    color: #fff;
    border: 0 none;
    border-radius: 4px;
    box-sizing: border-box;
    border-collapse: separate;
    background-color: #428bca;
    margin-right: 10px;
    padding: 0 15px;
    transition: opacity .25s ease 0s,background .25s ease 0s;
}

.linkButton.fixed {
	width: 160px;
}

.linkButton.grey {
	color: #99a3b5;
}

/* custom styles for checkout */

#checkout-container{
	border-radius: 12px;
  	overflow: hidden;
  }
@media screen and (min-width: 600px) {
#checkout-container{
	border-radius: 6px;
  }
}

.account-popup-header {
	display: flex;
  	align-items: center;
 	justify-content: space-between;
  	background-color: #fff;
}

.account-popup-header .siteLogo {
  max-height: 24px;
  margin-left: 24px;
}

.heading {
  color: #1D252C;
  font-size: 32px;
  font-weight: 600;
  line-height: 37px; 
  letter-spacing: 0.25px;
  margin-bottom: 24px;
}

.productBlock {
  width: auto;
  margin: 0;
  padding: 0 30px 30px;
  background-color: #fff;
}

.paymentHeader {
	padding: 0 30px;
}

.componentHeader {
  color: #202733;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; 
  letter-spacing: 0.15px;
  text-transform: capitalize;
  border-bottom: 2px solid #DCE1E4;
}

.actualPrice {
  color: #6F747B;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.65px;
  text-decoration: line-through;
}

.promoPrice {
  color: #fe3b1f;
  font-size: 24px;
  font-weight: 600;
  line-height: 21px; 
  letter-spacing: 0.65px;
}

.continuePrice {
  color: #6F747B;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.15px;
}

.footer-modal {
  background-color: #fff;
  padding: 10px 30px;
}
a.complete-purchase {
  border-radius: 3px;
  background: #29F085;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.25);
  float: none;
  color: #1D252C;
  display: block;
  margin-bottom: 48px;
}
.complete-purchase-button {
	float: none;
}

/* Receipt Page */

.receiptPurchaseBlock {
	margin-bottom: 48px;
}

.receiptPurchaseBlock .regularText {
  margin-bottom: 20px;
}

.receipt .content .receiptPurchaseBlock a {
	font-weight: normal;
}

.receipt .content {
  text-align: left;
  padding: 20px;
  width: 100%;
  margin: 0;
}

.receiptHeading {
  color: #1D252C;
  font-size: 32px;
  font-weight: 600;
  line-height: 37px; 
  letter-spacing: 0.25px;
  text-transform: capitalize;
  margin-bottom: 20px;
}

.regularText {
  color: #1D252C;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.65px;
}

appStoreBlock {
  display: flex;
}

@media screen and (min-width: 600px) {
    .appGrid {
       display: grid;
      column-gap: 50px;
      row-gap: 20px;
       grid-template-areas:
      'heading heading'
      'text image'
      'logos image';
    }
  .appDownloadHeading {
    grid-area: heading;
  }
  .appStoreBlock {
    grid-area: logos;
  }
  .appText {
    grid-area: text;
  }
  .appImage {
    grid-area: image;
    width: 235px;
    height: 147px;
  }
  .appStoreBlock {
    flex-direction: column;
  }
}

.payment-method-logo.stripe_elements {
	background-image: url(https://buy.tinypass.com/widget/dist/checkout/css/img/creditcard.svg);
    background-size: 110px auto;
    width: 100%;
}

.stripe-applepay-complete-purchase-button {
	width: 100%;
  float: none;
  margin-bottom: 50px;
}
</style>

<style  type="text/css" tp-style="offer-custom-style">
    .joinLink {
  display: block;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #1d252c;
  font-size: 12px;
  line-height: 28px;
  background-color: #70ed69;
  border-radius: 2px;
  box-shadow: -1px 1px 0 rgb(0 0 0 / 12%);
  white-space: nowrap;
  text-decoration: none;
  border: none;
  cursor: pointer;
  outline: inherit;
}

@media (min-width: 1400px) {
  .joinLink {
    font-size: 14px;
  }
}
</style>

<style  type="text/css" tp-style="state1-custom-style">
    
</style>

<style  type="text/css" tp-style="receipt-custom-style">
    
</style>

<style  type="text/css" tp-style="alreadyHasAccess-custom-style">
    
</style>






</body>



</html>
