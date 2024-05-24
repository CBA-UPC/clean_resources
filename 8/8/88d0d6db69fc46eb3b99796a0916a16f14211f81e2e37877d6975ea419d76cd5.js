"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["bundle.HomeTimeline","icons/IconDraggable-js","icons/IconSchedule-js"],{612969:(e,t,n)=>{n.d(t,{Z:()=>a});n(202784);var r=n(325686);const a=(0,n(820941).Z)(r.Z)},820941:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(709249),a=n(887371),o=n(545754),i=n(486906),l=n(202784),d=n(411916),c=n.n(d),s=n(373463),u=n.n(s);function m(e){var t=function(t){(0,o.Z)(d,t);var n=(0,i.Z)(d);function d(e,t){var a;return(0,r.Z)(this,d),(a=n.call(this,e,t)).state={shouldRender:!1},a._mounted=!0,a}return(0,a.Z)(d,[{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"componentDidMount",value:function(){var e=this;c()((function(){e._mounted&&e.setState({shouldRender:!0})}))}},{key:"render",value:function(){return this.state.shouldRender?l.createElement(e,this.props):null}}]),d}(l.Component);return u()(t,e)}},634119:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(255873),a=n(78772),o=n(962104);const i=function(e){var t=e.listId,n=e.useRanked,i=void 0!==n&&n;return(0,o.Z)({timelineId:l({listId:t,useRanked:i}),network:{getEndpoint:function(e){return e.withEndpoint(r.ZP).fetchTweetsGraphQL},getEndpointParams:function(e){var n=e.count,r=e.cursor;return{listId:t,count:n,cursor:"string"==typeof r?r:void 0,useRanked:i}}},formatResponse:a.Z,context:"FETCH_LIST_TIMELINE_GRAPHQL",perfKey:"listTweetsGraphQL"})};function l(e){var t=e.listId,n=e.useRanked,r=void 0!==n&&n?"ranked":"latest";return"listTweets-GraphQL-".concat(t,"-").concat(r)}},379434:(e,t,n)=>{n.r(t),n.d(t,{HomeTimeline:()=>qe,default:()=>Ke});var r=n(202784),a=n(123162),o=n(241441),i=n(229496),l=n(160925),d=n(973186),c=n(645184),s=n.n(c),u=n(351212),m=n(721783),b=n(206149),p=n(133252),h=n(612969),f=n(509082),v=n(25539),y=n(348501),E=n(254296),w=n(459740),C=(n(136728),n(325686)),g=n(849379),T=n(44208),M=n(923335),D=n(392160),Z=n(219786),S=n(467935);const A=(0,D.Z)().propsFromState((function(){return{pinnedTimelines:Z.GE,selectedTimeline:Z.br,isSubscriber:S.pG}})).propsFromActions((function(){return{createLocalApiErrorHandlerFetchPins:(0,M.createLocalApiErrorHandlerWithContextFactory)("HOME_TIMELINE_FETCH_PINS"),fetchPinnedTimelinesIfNeeded:Z.Mq,updateSettings:Z.VP}})).withAnalytics();var k=["name"],_=s().d1e0a75f({noun:""}),R=s().dafd69e9({noun:""}),P=s().d80a1c37({noun:""});var I=d.Z.create((function(e){return{compactTabContainer:{display:"flex",flexDirection:"row"},compactTabStrip:{flexBasis:1,flexGrow:1,paddingEnd:e.spaces.space4},compactRightControlContainer:{borderBottomColor:e.colors.borderColor,borderBottomStyle:"solid",borderBottomWidth:e.borderWidths.small,justifyContent:"center",paddingHorizontal:e.spaces.space8}}}));const x=A((function(e){var t=e.analytics,n=e.createLocalApiErrorHandlerFetchPins,a=e.fetchPinnedTimelinesIfNeeded,o=e.isSubscriber,i=e.onRefresh,l=e.pinnedTimelines,d=e.rightControl,c=e.selectedTimeline,s=e.updateSettings,u=r.useRef(0);r.useEffect((function(){u.current=Date.now()}),[c]),r.useEffect((function(){a().catch(n())}),[n,a]);var m=r.useCallback((function(e){var n=e.id&&c.id?c.type===e.type&&c.id===e.id:e.type===c.type;return{isActive:function(){return n},label:e.name,key:"".concat(e.type).concat(e.id?"-".concat(e.id):""),onClick:function(){if(n)i();else{var r=Date.now()-u.current,a=(e.name,(0,w.Z)(e,k));s({selectedTimeline:a}),t.scribe({section:T.yu[c.type],element:T.yu[e.type],action:"switch",data:{duration_ms:r}})}},retainScrollPosition:!1,to:"/home"}}),[t,i,c,s]),b=r.useMemo((function(){var e=[m({name:_,type:T.Jz.HOME}),m({name:R,type:T.Jz.HOME_LATEST})];return o&&e.push(m({name:P,type:T.Jz.CREATOR_SUBSCRIPTIONS})),l.forEach((function(t){return e.push(m(t))})),e}),[m,o,l]);return b.length<2?null:d?r.createElement(C.Z,{style:I.compactTabContainer},r.createElement(g.Z,{links:b,style:I.compactTabStrip}),r.createElement(C.Z,{style:I.compactRightControlContainer},d)):r.createElement(g.Z,{links:b})}));var L=n(963705),B=(n(315735),n(906886),n(614983)),z=n.n(B),H=n(236094),N=n(452612),F=n(878149),O=n(76687),U=n(129022),V=n(231372),J=n(813403),G=n(512372);const j=(0,D.Z)().propsFromState((function(){return{selectedTimeline:Z.br,viewerUserId:S._h}}));var W=n(807896),Q=n(108352),q=n(460673),$={header:s().a1ab9c80,message:s().b32c4fb0},K={buttonLink:"/i/connect_people",buttonText:s().bf17deda,header:s().defba9a4,message:s().c3fbf1da},X={header:s().a2515900,message:s().je23cdb2};function Y(e){var t=e.timelineType,n=(0,q.z)(),a=r.useCallback((function(){n.scribe({action:"click",component:"empty_message",element:"primary_cta"})}),[n]),o=r.useCallback((function(){n.scribe({action:"impression",component:"empty_message"})}),[n]),i=r.useMemo((function(){return t===T.Jz.COMMUNITY?$:t===T.Jz.LIST?X:K}),[t]);return r.createElement(Q.Z,(0,W.Z)({onButtonPress:a,onImpression:o},i))}var ee=n(340809),te=n(231574),ne=n(565621),re=n(634119),ae=n(401276);var oe=s().f089620c;const ie=(0,O.ZP)(j((function(e){var t=e.history,n=e.location,a=e.selectedTimeline,o=e.recordTTFT,i=void 0===o?H.jN:o,l=e.timelineRef,d=e.viewerUserId,c=r.useContext(y.rC).featureSwitches,s=r.useRef(!0);z()(d,"viewerUserId must be defined");var u=a.type===T.Jz.HOME&&c.isTrue("rweb_home_nav_single_direction_scroll_enabled"),m=r.useCallback((function(e){var t=e.entries;if(e.fetchStatus===F.Z.FAILED&&(s.current=!1),s.current&&t.length){var n,r,a=t.some((function(e){return e.type===N.ZP.Tweet}));if(s.current=!1,a)null===(n=performance)||void 0===n||null===(r=n.mark)||void 0===r||r.call(n,"home-entries-rendered"),i()}}),[i]),p=r.useMemo((function(){return function(e){var t=e.history,n=(e.location,e.selectedTimeline),r=e.viewerUserId,a=(0,ee.HD)(t)?t.location.query.id:void 0,o=(0,ee.HD)(t)?t.location.query.mode:void 0,i=o||n.type,l=a||n.id,d=o?o===T.Jz.HOME_LATEST:n.type===T.Jz.HOME_LATEST;return i===T.Jz.COMMUNITY&&l?(0,te.Qx)(String(l),{displayLocation:"Home"}):i===T.Jz.LIST&&l?(0,re.Z)({listId:String(l)}):i===T.Jz.CREATOR_SUBSCRIPTIONS?(0,ae.Z)({userId:r}):(0,ne.ZP)({useLatest:d,userId:r})}({history:t,location:n,selectedTimeline:a,viewerUserId:d})}),[t,n,a,d]),h=r.useCallback((function(){return r.createElement(Y,{timelineType:a.type})}),[a]),f=r.useMemo((function(){return(0,G.G)({hideReplyContextMode:c.isTrue("rweb_tweets_reply_context_hidden")?J.j.TIMELINE:void 0,isCompact:b.ZP.isMobileOS()&&c.isTrue("rweb_home_compact_timeline_enabled"),withUserPresence:c.isTrue("responsive_web_audio_space_ring_home_timeline")})}),[c]);return r.createElement(V.Z,{entryConfiguration:f,isSingleDirection:u,module:p,onEntriesRendered:m,prerollDisplayLocation:U.Nw.TIMELINE_HOME,renderEmptyState:h,timelineRef:l,title:oe,withNewTweetsPill:!0})})));var le=n(648964),de=n(858438),ce=(n(73439),n(656499)),se=n(93983),ue=n(186454),me=n(126741),be=n(137541),pe=n(882392),he=n(481142),fe=n(974581),ve=n(716489),ye=n(391883),Ee=n(591737),we=n(707038),Ce=n(673707),ge=n(524784),Te=n(157659);const Me=(0,D.Z)().propsFromState((function(){return{viewerUser:Te.ZP.selectViewerUser}})).adjustStateProps((function(e){var t=e.viewerUser;return{userAvatarURI:t&&t.profile_image_url_https,userName:t&&t.name}}));var De=s().ee69d769({verb:""}),Ze=s().f8e5bf52,Se=r.createElement(fe.default,null),Ae=r.createElement(ve.default,null),ke=r.createElement(ye.default,null),_e=r.createElement(Ee.default,null),Re=r.createElement(we.default,null),Pe=r.createElement(Ce.default,null),Ie=d.Z.create((function(e){return{root:{backgroundColor:e.colors.cellBackground,paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.spaces.space8},avatarColumn:{paddingTop:"".concat(48-he.default.getSizeSimple(he.default.defaultSize),"px")},avatar:{width:"100%"},body:{flexDirection:"column",flexGrow:1},fakeInput:{paddingTop:e.spaces.space16,paddingBottom:e.spaces.space8,paddingHorizontal:e.spaces.space2},toolbar:{alignItems:"center",flexDirection:"row",justifyContent:"space-between",marginEnd:e.spaces.space2,marginTop:e.spaces.space20},toolbarSection:{alignItems:"center",flexDirection:"row"},toolbarSectionWithIconContainer:{alignItems:"center",flexDirection:"row",marginStart:e.spacesPx.space2},toolBarButton:{marginHorizontal:0},firstToolBarButton:{marginHorizontal:0,marginStart:"-".concat(e.spaces.space8)},tweetButton:{marginStart:e.spaces.space12}}}));const xe=Me((function(e){var t=e.userAvatarURI,n=r.useMemo((function(){return r.createElement(ue.Z.Consumer,null,(function(e){var n=e.avatarSize;return r.createElement(me.Z,{size:n,style:Ie.avatar,uri:t})}))}),[t]),a=!(0,ge.vS)();return r.createElement(be.Z,{avatarCell:n,avatarCellStyle:Ie.avatarColumn,cellStyle:Ie.body,style:Ie.root},r.createElement(pe.ZP,{color:"gray700",numberOfLines:1,size:"headline1",style:Ie.fakeInput},Ze),r.createElement(C.Z,{style:Ie.toolbar},r.createElement(C.Z,{style:Ie.toolbarSectionWithIconContainer},r.createElement(i.ZP,{disabled:!0,icon:Se,size:"medium",style:Ie.firstToolBarButton,type:"brandText"}),r.createElement(i.ZP,{disabled:!0,icon:Ae,size:"medium",style:Ie.toolBarButton,type:"brandText"}),a?r.createElement(i.ZP,{disabled:!0,icon:ke,size:"medium",style:Ie.toolBarButton,type:"brandText"}):null,r.createElement(i.ZP,{disabled:!0,icon:_e,size:"medium",style:Ie.toolBarButton,type:"brandText"}),a?r.createElement(i.ZP,{disabled:!0,icon:Re,size:"medium",style:Ie.toolBarButton,type:"brandText"}):null,r.createElement(i.ZP,{disabled:!0,icon:Pe,size:"medium",style:Ie.toolBarButton,type:"brandText"})),r.createElement(C.Z,{style:Ie.toolbarSection},r.createElement(i.ZP,{disabled:!0,style:Ie.tweetButton,type:"brandFilled"},De))))})),Le=(0,ce.Z)({loader:function(){return(se.H1.preload()||Promise.resolve()).then((function(){return Promise.all([n.e("shared~loader.AudioDock~loader.DMDrawer~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.AudioSpaceAnalytics~bu"),n.e("shared~loader.AudioDock~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.AudioSpaceAnalytics~bundle.AudioSpaceR"),n.e("shared~loader.DMDrawer~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.Articles~bundle.Audi"),n.e("shared~loader.AudioDock~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpaceDetail~bundle.Audi"),n.e("shared~loader.AudioDock~loader.DashMenu~loader.SideNav~loader.Typeahead~loader.DMDrawer~bundle.MultiAccount~b"),n.e("shared~loader.AudioDock~loader.Typeahead~loader.AppModules~loader.DMDrawer~bundle.ReaderMode~bundle.AudioSpac"),n.e("shared~loader.DashMenu~loader.DMDrawer~bundle.AccountAnalytics~bundle.ReaderMode~bundle.Articles~bundle.Audio"),n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~~bundle.Commu"),n.e("shared~loader.Typeahead~loader.DMDrawer~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.LiveE"),n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Birdwatch~bundle.Communities~bundle.TwitterArticles~bundle.Co"),n.e("shared~loader.AudioDock~loader.DMDrawer~bundle.ReaderMode~bundle.AudioSpaceDetail~bundle.AudioSpacePeek~bundl"),n.e("shared~loader.DashMenu~loader.SideNav~loader.AppModules~loader.DMDrawer~bundle.MultiAccount~bundle.ReaderMode"),n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.TwitterArticles~bundle"),n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bundle.Displa"),n.e("shared~loader.DMDrawer~bundle.AccountAnalytics~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.BookmarkFolders~"),n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Communities~bundle.TwitterArticles~bundle.Compose~ondemand.Com"),n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.BookmarkFolders~bundle.Communities~bundle.TwitterArticles~bund"),n.e("shared~loader.directMessagesData~loader.Typeahead~loader.DMDrawer~ondemand.DirectMessagesCrypto~bundle.Commun"),n.e("shared~loader.directMessagesData~loader.Typeahead~loader.DMDrawer~bundle.Communities~bundle.TwitterArticles~b"),n.e("shared~loader.Typeahead~loader.DMDrawer~bundle.Communities~bundle.TwitterArticles~bundle.Compose~bundle.Deleg"),n.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~bundle.JobSearch~bundle."),n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~bundle"),n.e("shared~loader.Typeahead~loader.DMDrawer~bundle.Communities~bundle.TwitterArticles~bundle.Compose~bundle.Setti"),n.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~loader.Tim"),n.e("shared~loader.DMDrawer~~bundle.TwitterArticles~bundle.Compose~bundle.ComposeMedia~bundle.AccountVerification~"),n.e("shared~loader.DMDrawer~bundle.TwitterArticles~bundle.Compose~bundle.ComposeMedia~bundle.AccountVerification~b"),n.e("shared~bundle.TwitterArticles~bundle.Compose~ondemand.ComposeScheduling~bundle.SettingsInternals~ondemand.Set"),n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Communities~bundle.Compose~bundle.DirectMessages~bundle.DMRich"),n.e("shared~loader.DMDrawer~bundle.TwitterArticles~bundle.Compose~bundle.AccountVerification~bundle.SettingsProfil"),n.e("shared~loader.DMDrawer~bundle.TwitterArticles~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~b"),n.e("shared~bundle.TwitterArticles~bundle.Compose~bundle.SettingsExtendedProfile~bundle.DMRichTextCompose~ondemand"),n.e("shared~bundle.Birdwatch~bundle.BookmarkFolders~bundle.Communities~bundle.TwitterArticles~bundle.Compose~bundl"),n.e("shared~bundle.AudioSpacePeek~bundle.Communities~bundle.TwitterArticles~bundle.Compose~loader.CommunityHandler"),n.e("shared~loader.DMDrawer~bundle.Articles~bundle.Compose~bundle.DirectMessages~bundle.UserProfile~bundle.RichTex"),n.e("shared~bundle.Compose~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~bundle.SuperFollowsSubscrib"),n.e("shared~bundle.Compose~ondemand.SettingsRevamp~loader.NotificationHandler~loader.TweetCurationActionMenu~bundl"),n.e("shared~loader.DMDrawer~bundle.Compose~bundle.DMRichTextCompose~bundle.DirectMessages~bundle.RichTextCompose"),n.e("shared~bundle.AudioSpacePeek~bundle.Communities~bundle.Compose~loader.CommunityHandler~bundle.RichTextCompose"),n.e("shared~bundle.Communities~bundle.Compose~bundle.Delegate~bundle.GraduatedAccess~bundle.RichTextCompose"),n.e("shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose"),n.e("shared~bundle.Compose~bundle.Ocf~bundle.RichTextCompose"),n.e("shared~bundle.Compose~loader.TweetCurationActionMenu~bundle.RichTextCompose"),n.e("shared~bundle.Compose~ondemand.ComposeScheduling~bundle.RichTextCompose"),n.e("shared~bundle.Compose~bundle.RichTextCompose"),n.e("bundle.RichTextCompose")]).then(n.bind(n,745181))}))},renderPlaceholder:function(){return r.createElement(xe,null)}});var Be=n(199241),ze=n(977559);const He=function(){return Ne()?n.e("ondemand.framerateTracking").then(n.bind(n,257317)).then((function(e){return e.default})):Promise.resolve(void 0)};var Ne=function(){return window.performance&&"function"==typeof window.performance.now},Fe=n(845855);const Oe=(0,D.Z)().propsFromState((function(){return{selectedTimeline:Z.br}})).withAnalytics({page:"home"});var Ue=s().ha8209bc,Ve=s().f75be4aa,Je={label:Ve},Ge=s().f8e5bf52,je=r.createElement(le.c,null),We=r.createElement(p.Z,null),Qe=r.createElement(u.default,null);function qe(e){e.analytics;var t,n,d=e.history,c=e.location,s=e.selectedTimeline,u=(0,y.QZ)(),p=u.featureSwitches,w=u.isRestrictedSession,C=r.useRef(null===(t=performance)||void 0===t||null===(n=t.mark)||void 0===n?void 0:n.call(t,"home-page-init-start")),g=r.useRef(null),M=r.useRef(!1),D=r.useRef(1/0),Z=r.useRef(null),S=(0,Be.hC)("rweb_home_compact_inline_composer_enabled");r.useEffect((function(){var e,t;(M.current=!0,C.current)&&(null===(e=performance)||void 0===e||null===(t=e.measure)||void 0===t||t.call(e,"home-page-init","home-page-init-start"));return function(){M.current=!1}}),[]),r.useEffect((function(){function e(){D.current=Date.now()}function t(){var e,t=Date.now()-D.current;p.isTrue("rweb_home_nav_single_direction_scroll_enabled")||t>1e3*p.getNumberValue("rweb_home_refetch_on_refocus_min_delay_seconds",30)&&(null===(e=Z.current)||void 0===e||e.fetchTop({onlyIfStale:!0}))}return window.addEventListener("blur",e),window.addEventListener("focus",t),function(){window.removeEventListener("blur",e),window.removeEventListener("focus",t)}}),[p]),r.useEffect((function(){if(p.isTrue("responsive_web_framerate_tracking_home_enabled")){var e=b.ZP.isDesktopOS()?"":"_mobile",t="home".concat(e);He().then((function(e){M.current&&e&&(g.current=e({reportNamespace:t}))}))}return function(){var e;null===(e=g.current)||void 0===e||e.stop()}}),[p]);var A=r.useMemo((function(){return r.createElement(E.Z,{history:d})}),[d]),k=r.useCallback((function(){var e;null===(e=Z.current)||void 0===e||e.refreshOrGoTop()}),[]),_=r.useCallback((function(e){Z.current=e}),[]),R=r.useCallback((function(){return r.createElement(r.Fragment,null,(0,ze.ZP)()&&!w?r.createElement(r.Fragment,null,S?r.createElement(de.Z,{link:"/compose/tweet",promptLabel:Ge}):r.createElement(Le,{history:d,location:c}),r.createElement(a.Z,{isSlim:!0})):null,r.createElement(f.Z,{component:o.Z,fab:A},r.createElement(h.Z,null,r.createElement(ie,{timelineRef:_}))))}),[A,w,_,c,d,S]),P=r.useMemo((function(){return{page:"home",section:T.yu[s.type]}}),[s]),I=!(0,ze.ZP)(),B=r.useMemo((function(){return I?r.createElement(m.default,{style:$e.iconTwitter}):void 0}),[I]),z=I?null:Ue,H=r.useMemo((function(){return r.createElement(i.ZP,{accessibilityLabel:Ve,hoverLabel:Je,icon:Qe,link:"/home/pinned/edit",type:"primaryText"})}),[]),N=(0,l.$u)()&&p.isTrue("home_timeline_compact_app_bar"),F=r.useMemo((function(){return r.createElement(x,{onRefresh:k,rightControl:N&&H})}),[k,H,N]);return r.createElement(Fe.nO,{namespace:P},r.createElement(L.Z,{locationKey:P.page},r.createElement(v.Z,{centeredLogo:B,disjointHeader:je,documentTitle:Ue,history:d,onTabRefresh:k,primaryContent:R,rightControl:H,secondaryBar:F,sidebarContent:We,title:z,withAppBar:!N})))}var $e=d.Z.create((function(e){return{iconTwitter:{flexGrow:1,height:"1.75rem",color:e.colors.brandColor}}}));const Ke=Oe(qe)},495178:(e,t,n)=>{n.r(t),n.d(t,{PinnedTimelinesEdit:()=>q,default:()=>$});var r=n(196234),a=n(202784),o=n(325686),i=n(177953),l=n(107267),d=n(229496),c=n(882392),s=n(108352),u=n(973186),m=n(645184),b=n.n(m),p=n(872983),h=n(300292),f=n(923335),v=n(841831),y=n(219786),E=n(157659),w=n(807896),C=n(50692),g=n(174062),T=n(515834),M=n(789504),D=n(829249),Z=n(99072),S=n(19854),A=n(871570),k=a.createElement(T.default,null),_=b().h5245afa,R=b().fa884026,P=b().j681933e,I=b().ab8089ea,x={label:I},L=(0,C.JV)((function(){return a.createElement(d.ZP,{accessibilityLabel:I,hoverLabel:x,icon:k,style:O.button,type:"primaryText"})}));function B(e){switch(e.type){case"List":return a.createElement(H,e);case"Community":return a.createElement(N,e);default:return e.type,null}}function z(e){var t=e.isPrivate,n=e.link,r=e.media,i=e.name,l=e.typeLabel;return a.createElement(g.Z,{link:n,style:O.container},a.createElement(F,{media:r}),a.createElement(o.Z,{style:O.mainText},a.createElement(c.ZP,{color:"gray700",numberOfLines:1,size:"subtext2"},l),a.createElement(c.ZP,{numberOfLines:1,weight:"bold"},i," ",t?a.createElement(M.default,{accessibilityLabel:P}):null)),a.createElement(o.Z,{style:O.endControl},a.createElement(L,null)))}function H(e){var t,n=e.id,r=e.name,o=(0,i.v9)((function(e){return S.Z.select(e,n)}));if(!o)return null;var l="private"===o.mode,d="/i/lists/".concat(n),c=null!==(t=o.customBanner)&&void 0!==t?t:o.defaultBanner;return a.createElement(z,{isPrivate:l,link:d,media:c,name:r,typeLabel:R})}function N(e){var t=e.id,n=e.name,r=(0,i.v9)((function(e){var n;return null===(n=Z.ZP.select(e,t))||void 0===n?void 0:n.media}));if(!r)return null;var o="/i/communities/".concat(t);return a.createElement(z,{isPrivate:!1,link:o,media:r,name:n,typeLabel:_})}var F=function(e){var t=e.media,n=(0,i.v9)(A.IX);return a.createElement(o.Z,{style:O.thumbnailImage},a.createElement(D.Z,{cropCandidates:t.crop,dataSaverMode:n,icon:"lists",image:t.image,type:"fixed"}))},O=u.Z.create((function(e){return{button:{height:e.spaces.space36,marginEnd:e.spaces.space8,width:e.spaces.space36},container:{flexDirection:"row",backgroundColor:e.colors.cellBackground,borderBottomColor:e.colors.borderColor,borderBottomWidth:e.borderWidths.small,paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical,cursor:"grab"},endControl:{justifyContent:"center"},mainText:{flex:1},thumbnailImage:{alignItems:"flex-start",height:"100%",marginEnd:e.spaces.space16}}})),U=(0,C.W8)((function(e){return a.createElement(B,e)}));const V=(0,C.JN)((function(e){var t=e.items;return a.createElement(o.Z,null,t.map((function(e,t){var n=e.id,r=e.type,o="".concat(r,"-").concat(n);return a.createElement(U,(0,w.Z)({key:o},e,{index:t}))})))}));var J=b().b772cd66,G=b().ad5a564a,j=b().f75be4aa,W=3,Q=(0,f.createLocalApiErrorHandlerWithContextFactory)("EDIT_PINNED_TIMEPINES_ORDER_CONTEXT");function q(){var e=(0,i.I0)(),t=(0,l.k6)(),n=(0,i.v9)(y.UD),u=(0,i.v9)(y.GE),m=(0,i.v9)(E.ZP.selectViewerUser),f=a.useState((function(){return u})),w=(0,r.Z)(f,2),C=w[0],g=w[1],T=a.useCallback((function(){return e((0,y.Mq)())}),[e]);a.useEffect((function(){T()}),[T]),a.useEffect((function(){g(u)}),[u]);var M=a.useMemo((function(){return!(u.length===C.length&&u.every((function(e,t){return e.type===C[t].type&&e.id===C[t].id})))}),[u,C]),D=a.useCallback((function(){M&&e((0,y.$5)(C)).catch(e(Q())),t.goBack({backLocation:"/home"})}),[e,t,C,M]),Z=a.useMemo((function(){return a.createElement(d.ZP,{onClick:D,size:"small",type:"primaryFilled"},J)}),[D]),S=a.useCallback((function(e){var t=e.newIndex,n=e.oldIndex,r=(0,v.Z)(C,n,t);g(r)}),[C]),A=a.useCallback((function(e){var t=null==m?void 0:m.screen_name,n=t?"/".concat(t,"/").concat(e):void 0;return a.createElement(c.ZP,{link:n})}),[m]),k=a.useMemo((function(){return{communitiesLink:A("communities"),listsLink:A("lists")}}),[A]),_=a.useMemo((function(){return a.createElement(b().I18NFormatMessage,{$i18n:"f552e827"},a.cloneElement(k.listsLink,null,b().hc99f1de),a.cloneElement(k.communitiesLink,null,b().e7897aa3))}),[k]),R=a.useMemo((function(){return a.createElement(b().I18NFormatMessage,{$i18n:"db483b15"},a.cloneElement(k.listsLink,null,b().d893c962),a.cloneElement(k.communitiesLink,null,b().g96d197b))}),[k]),P=a.useCallback((function(){return 0===C.length?a.createElement(s.Z,{header:G,message:_}):a.createElement(a.Fragment,null,a.createElement(V,{items:C,onSortEnd:S,useDragHandle:!0}),C.length<=W?a.createElement(o.Z,{style:K.pinMoreMessage},a.createElement(c.ZP,{color:"gray700",size:"body"},R)):null)}),[_,S,R,C]);return a.createElement(h.Z,{backLocation:"/home",history:t,rightControl:Z,title:j},a.createElement(p.Z,{fetchStatus:n,onRequestRetry:T,render:P}))}const $=q;var K=u.Z.create((function(e){return{pinMoreMessage:{padding:e.spaces.space16}}}))},515834:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(133028),a=n(202784),o=n(890601),i=n(783427),l=n(473569),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,i.Z)().direction;return(0,o.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z"}))}),{writingDirection:t})};d.metadata={width:24,height:24};const c=d},673707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(133028),a=n(202784),o=n(890601),i=n(783427),l=n(473569),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,i.Z)().direction;return(0,o.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"}))}),{writingDirection:t})};d.metadata={width:24,height:24};const c=d},707038:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(133028),a=n(202784),o=n(890601),i=n(783427),l=n(473569),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,i.Z)().direction;return(0,o.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"}))}),{writingDirection:t})};d.metadata={width:24,height:24};const c=d}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/bundle.HomeTimeline.a44eb36a.js.maption: 0s; transition-property: all; transition-timing-function: ease; unicode-bidi: normal; user-select: auto; vector-effect: none; vertical-align: baseline; visibility: visible; white-space: normal; widows: 2; width: auto; will-change: auto; word-break: normal; word-spacing: 0; writing-mode: horizontal-tb; x: 0; y: 0; z-index: auto; zoom: 1;}")};
_.Oj=function(a){var b="";a=void 0===a?"zz":a;switch(_.Nd(a)?a.toString():a){case "ar":case "iw":case "fa":case "ur":case "ps":case "sd":b+="direction: rtl;";break;default:b+="direction: ltr;"}return(0,_.V)(b)};_.Pj=function(a,b,c){return(0,_.V)(_.X(a)+" {"+(b?"display: none;":"")+"background-color: black; height: 100%; left: 0; opacity: "+_.X(null!=c?c:"0.3")+"; position: fixed; top: 0; width: 100%; z-index: -1;}")};
_.Qj=function(a,b,c){b="div."+_.X(void 0===b?"fc-message-root":b)+" {";var d=!_.Fi(c,3);b+=(a?"":"position: "+_.X(d?"fixed":"relative")+"; z-index: 2147483644;")+(!a&&_.Fi(c,1)?"align-items: center; float: top; height: 100%; left: 0; overflow-x: auto; top: 0;":"")+(d?"align-items: center; display: flex; justify-content: center; width: 100%;":"")+"}";return(0,_.V)(b)};_.Rj=function(a){return(0,_.V)("div."+_.X(void 0===a?"fc-message-root":a)+" {display: flex; height: 100%; justify-content: center; width: 100%;}")};
_.Sj=function(a,b,c){c=_.Fi(c,1)?"align-items: center; display: flex; height: 100%; justify-content: center; width: 100%;"+(b?"":"left: 0; position: fixed; top: 0;"):_.Fi(c,2)?"bottom: 0; left: 0; right: 0;"+(b?"position: absolute;":"position: fixed;"):"";return(0,_.V)(_.X(a)+" {"+(b?"":"z-index: 2147483644;")+c+"}")};
_.Uj=function(a,b,c,d,e,f){var g=_.X(a)+" {align-items: center;",h,k,l=null!=(k=_.Tj.get(null!=(h=null==d?void 0:_.I(d,5))?h:2))?k:"";g+=_.Fi(c,2)?"border-radius: "+_.X(l)+" "+_.X(l)+" 0 0; width: 100%;":"border-radius: "+_.X(l)+"; max-width: 600px; width: 90%;";d?(g+="background: "+_.X(null==d?void 0:_.P(d,2))+";",c=f?"40px":"32px",g+=b?"padding: "+_.X(c)+" 0 24px 0;":"padding: "+_.X(c)+" 24px 24px 24px;"):g=e?g+(_.Fj(e)+_.Gj(e)):g+"background: WHITE;";var n;c="box-sizing: border-box; display: flex; flex-direction: column; float: top; justify-content: center; max-height: 90%; min-width: 200px; position: relative;}@media screen and (max-width: 479px) {"+
_.X(a)+" {font-size: 14px; line-height: 20px;}}@media screen and (min-width: 480px) {"+_.X(a)+" {font-size: 16px; line-height: 24px;}}"+_.X(a)+" > *:not(:last-child) {margin-bottom: 24px;}";e=(0,_.V)(_.X(a)+" .fc-dialog-content {align-items: center; box-sizing: border-box; display: flex; flex-direction: column; overflow: auto; width: 100%;"+(b?"box-shadow: 0 25px 0 -24px "+_.X("#dadce0")+"; overflow-x: hidden; overflow-y: scroll; overflow-y: overlay; padding: 0 24px 0 24px;":"")+"}"+_.X(a)+" .fc-dialog-content > *:not(:last-child) {margin-bottom: 16px;}"+
_.X(a)+" .fc-dialog-content > * {flex-shrink: 0;}");c+=e;d=null!=(n=null==d?void 0:_.P(d,4))?n:null;a=(0,_.V)(_.X(a)+" .fc-dialog-footer {align-items: center; box-sizing: border-box; display: flex; flex-direction: column; font-size: inherit; min-height: auto; justify-content: center;"+(b?"padding: 0 24px;":"")+"width: 100%;"+(d?"font-family: "+_.X(d)+";":"")+"}"+_.X(a)+" .fc-dialog-footer .fc-footer-text {color: "+_.X("#5f6368")+"; display: inline-block; font-size: 12px;}"+_.X(a)+" .fc-dialog-footer > div:not(:last-child) {margin-bottom: 16px;}");
return(0,_.V)(g+(c+a))};
_.Vj=function(a,b,c,d,e){b=void 0===b?"fc-message-root":b;var f;c?f=_.Ej(_.P(c,3),_.D(c,_.Sh,6),void 0,void 0,void 0,void 0,void 0,!0):d?f=_.Ej(void 0,d):f="color: "+_.X("#6b6e76")+"; font-family: Poppins, sans-serif; font-size: 1em; font-weight: 400; line-height: 24px; text-align: center;";return(0,_.V)("."+_.X(b)+" .fc-header {display: flex; flex-direction: column; justify-content: center; width: 100%;}."+_.X(b)+" .fc-header-text {line-height: 1.5em;"+f+"}."+_.X(b)+" .fc-header-image-container {"+_.Hj(e)+
(e?"":"margin: 0 auto; -ms-flex-align: center")+"}."+_.X(b)+" .fc-header-image {max-height: 60px; min-height: 40px; object-fit: contain;}"+(a?"."+_.X(b)+" .fc-header-placeholder-image {border: 1px solid "+_.X("#dadce0")+"; border-radius: 4px; padding: 8px;}":""))};
_.Wj=function(a,b,c){a=void 0===a?"fc-message-root":a;var d;b?d=_.Ej(_.P(b,3),_.D(b,_.Sh,7),void 0,void 0,void 0,void 0,void 0,!0):c?d=_.Ej(void 0,c):d="color: "+_.X("#202124")+"; font-family: Poppins, sans-serif; font-size: 1.25em; font-weight: 500; line-height: 1.8em; text-align: center;";return(0,_.V)("."+_.X(a)+" .fc-dialog-headline {align-items: center; display: flex; flex-direction: column; justify-content: center; width: 100%;}."+_.X(a)+" .fc-dialog-headline > *:not(:last-child) {margin-bottom: 8px;}."+
_.X(a)+" .fc-dialog-headline-text {"+d+"width: 100%;}")};
_.Xj=function(a,b,c){a=void 0===a?"fc-message-root":a;var d;b?d="max-width: 400px;"+_.Ej(_.P(b,4),_.ii(b),void 0,void 0,void 0,void 0,void 0,!0):c?d=_.Ej(void 0,c):d="color: "+_.X("#6b6e76")+"; font-family: Roboto, sans-serif; font-size: 1em; text-align: center;";return(0,_.V)("."+_.X(a)+" .fc-dialog-body {display: flex; justify-content: center; width: 100%;}."+_.X(a)+" .fc-dialog-body-text {line-height: 1.5em; margin: 0; padding: 0; width: 100%;"+d+"}")};
_.Yj=function(a){a=void 0===a?"fc-message-root":a;return(0,_.V)("."+_.X(a)+" .fc-buttons-section {align-items: center; display: flex; flex-direction: column; justify-content: center; max-width: 416px; width: 100%;}."+_.X(a)+" .fc-buttons-section > *:not(:last-child) {margin-bottom: 16px;}@supports (flex-wrap: wrap) and (gap: 16px) {."+_.X(a)+" .fc-buttons-section {flex-direction: unset; flex-wrap: wrap; -ms-flex-wrap: wrap; gap: 16px;}."+_.X(a)+" .fc-buttons-section > *:not(:last-child) {margin-bottom: 0;}}")};
_.ik=function(a,b,c,d){a=void 0===a?"fc-message-root":a;if(b){var e,f,g;var h="border-radius: "+_.X(null!=(f=Zj.get(null==b?void 0:_.I(b,5)))?f:"")+"; color: "+_.X(null!=(g=null==(e=_.gi(_.D(b,_.fi,11)))?void 0:_.R(e,3))?g:"")+"; padding: 8px 12px; min-height: 40px; justify-self: center; max-width: 400px; min-width: 200px;"}else if(c)h=_.Gj(c)+_.Fj(c,void 0,!0)+"overflow: hidden;";else{var k;h="border-radius: "+_.X(null!=(k=Zj.get(2))?k:"")+"; padding: 8px 12px; max-width: 352px;"}if(b){var l;c="background-color: "+
_.X(null==b?void 0:_.P(b,1))+"; border-radius: "+_.X(null!=(l=Zj.get(null==b?void 0:_.I(b,5)))?l:"")+";"}else if(c)c=_.Fj(c,void 0,void 0,!0,!0);else{var n;c="background-color: BLUE_900; border-radius: "+_.X(null!=(n=Zj.get(2))?n:"")+";"}var r;b?r=_.Ej(_.P(b,3),_.gi(_.D(b,_.fi,11)),void 0,void 0,void 0,void 0,void 0,!0):d?r=_.Ej(void 0,d):r="color: white; font-family: Poppins, sans-serif; font-size: 14px; font-weight: 500; text-align: center;";var w,y,z,G,M,T,la;return(0,_.V)("."+_.X(a)+" .fc-button {"+
h+"box-sizing: border-box; align-items: center; display: inline-flex; justify-content: center; position: relative; width: 100%; z-index: 1;}."+_.X(a)+" .fc-button:not(:only-child) {"+(b?"flex-grow: 1;":"")+"}@supports (flex-wrap: wrap) and (gap: 16px) {@media screen and (min-width: 480px) {"+(b?"."+_.X(a)+" .fc-button {width: fit-content;}":"")+"}}."+_.X(a)+" .fc-button .fc-button-background {"+c+"height: 100%; left: 0; position: absolute; top: 0; transition: all 150ms ease-in; width: 100%; z-index: -1; -webkit-transition: all 150ms ease-in; -moz-transition: all 150ms ease-in; -o-transition: all 150ms ease-in; -ms-transition: all 150ms ease-in;}."+
_.X(a)+" .fc-button.fc-secondary-button .fc-button-background {"+(b?"background-color: "+_.X(_.Fi(null==(w=_.D(b,_.fi,12))?void 0:_.I(w,1),1)?null!=(M=_.R(b,10))?M:"#174ea6":null!=(T=_.R(b,2))?T:"#fff")+"; border: "+_.X(_.Fi(null==(y=_.D(b,_.fi,12))?void 0:_.I(y,1),2)?"1px solid "+_.R(b,10):"none")+";":"")+"}."+_.X(a)+" .fc-button:hover:enabled .fc-button-background {filter: brightness(84%); transition: all 150ms ease-in; -webkit-transition: all 150ms ease-in; -moz-transition: all 150ms ease-in; -o-transition: all 150ms ease-in; -ms-transition: all 150ms ease-in;}."+
_.X(a)+" .fc-button:focus:enabled .fc-button-background, ."+_.X(a)+" .fc-button:active:enabled .fc-button-background {filter: brightness(61%); transition: all 150ms ease-in; -webkit-transition: all 150ms ease-in; -moz-transition: all 150ms ease-in; -o-transition: all 150ms ease-in; -ms-transition: all 150ms ease-in;}."+_.X(a)+" .fc-button-text {line-height: 1.25em; margin: 0; width: 100%;"+r+"}."+_.X(a)+" .fc-secondary-button > .fc-button-text {"+(b?"color: "+_.X(null!=(la=null==(z=_.D(b,_.fi,12))?
void 0:null==(G=_.gi(z))?void 0:_.R(G,3))?la:"")+";":"")+"}."+_.X(a)+" .fc-button:disabled .fc-button-text {color: "+_.X("#9aa0a6")+"; cursor: default;}."+_.X(a)+" .fc-button:disabled .fc-button-background {background-color: "+_.X("#dadce0")+"; cursor: default;}")};Mj=_.pj("div","h1","h2","a","p","button","i","input","label","span","ul","li","hr","img","br","footer");_.Tj=(new Map).set(1,"0").set(2,"8px").set(3,"16px");Zj=(new Map).set(1,"0").set(2,"4px").set(3,"18px");_.jk=function(){this.g=_.he()};_.kk=function(a,b,c){return _.uh(b,c,{},a.g)};_.lk=function(a,b){a=a(b||{},{});return new _.Mh(a.toString(),_.Lh)};
}catch(e){_._DumpException(e)}
try{
var pk;_.ok=function(a,b){if(!_.Od(a)||!_.Od(b)||a.length!=b.length)return!1;for(var c=a.length,d=0;d<c;d++)if(a[d]!==b[d])return!1;return!0};pk="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");_.qk=function(a){this.h="";this.g=_.he(a)};_.rk=function(a){a.h=a.g.g.body.style.overflow;a.g.g.body.style.overflow="hidden"};_.sk=function(a){a.g.g.body.style.overflow=a.h};var tk,uk;tk=_.Md(["https://fonts.googleapis.com/css?family=Archivo:400,500|Arimo:400,500|Bitter:400,500|EB+Garamond:400,500|Lato|Libre+Baskervill|Libre+Franklin:400,500|Lora:400,500|Google+Sans:regular,medium:400,500|Material+Icons|Google+Symbols|Merriweather|Montserrat:400,500|Mukta:400,500|Muli:400,500|Nunito:400,500|Open+Sans:400,500,600|Open+Sans+Condensed:400,600|Oswald:500|Playfair+Display:400,500|Poppins:400,500|Raleway:400,500|Roboto:400,500|Roboto+Condensed:400,500|Roboto+Slab:400,500|Slabo+27px|Source+Sans+Pro|Ubuntu:400,500|Volkhov&display=swap"]);
uk=_.Jd(tk);_.vk=function(a){this.h=a;this.g=null;this.i=_.he(a)};_.wk=function(a,b){b=void 0===b?null:b;if(!a.g){var c=null!==b?b:uk;a.g=_.ie(a.i.g,"LINK");a:{b=a.g;if(c instanceof _.Vd)b.href=_.Yd(c).toString();else{if(-1===pk.indexOf("stylesheet"))throw Error("J`stylesheet");c=_.nk(c);if(void 0===c)break a;b.href=c}b.rel="stylesheet"}a.h.document.head.insertBefore(a.g,a.h.document.head.firstChild)}};
}catch(e){_._DumpException(e)}
try{
var Op,Pp,Qp,Rp,Sp,Tp;Op=function(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a};
Pp=function(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!a.hasAttribute("tabindex")||Op(a)):a.hasAttribute("tabindex")&&Op(a))&&_.sc){var c;"function"!==typeof a.getBoundingClientRect||_.sc&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
Qp=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};Rp=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};Sp=function(a,b){return a.classList?a.classList.contains(b):_.Gd(a.classList?a.classList:Qp(a).match(/\S+/g)||[],b)};Tp=function(a,b){a.classList?a.classList.remove(b):Sp(a,b)&&Rp(a,Array.prototype.filter.call(a.classList?a.classList:Qp(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))};
_.Up=function(a,b,c){c?a.classList?a.classList.add(b):Sp(a,b)||(c=Qp(a),Rp(a,c+(0<c.length?" "+b:b))):Tp(a,b)};var Xp;_.Vp=function(a){this.h=this.i=this.g=null;this.document=a.document};_.Yp=function(a,b){_.Wp(a);var c=Xp(a,b),d=Xp(a,b,!0);c&&d&&(a.g=function(){var e=a.document.activeElement;if(e)if(_.je(b,e))a.i=e;else if(e===a.document.activeElement)switch(a.i){case c:d.focus();a.i=d;break;default:c.focus(),a.i=c}},a.document.addEventListener("focus",a.g,!0),a.document.addEventListener("focusin",a.g))};
_.Wp=function(a){a.g&&(document.removeEventListener("focus",a.g,!0),document.removeEventListener("focusin",a.g),a.g=null)};_.Zp=function(a,b,c,d){c=void 0===c?!0:c;if(d=Xp(a,b,void 0===d?!1:d))d.focus(),c&&_.Yp(a,b)};Xp=function(a,b,c){c=void 0===c?!1:c;if(Pp(b)&&!c)return b;var d=c?[].slice.call(b.children,0).reverse():b.children;d=_.q(d);for(var e=d.next();!e.done;e=d.next())if(e=Xp(a,e.value,c))return e;return Pp(b)&&c?b:null};
}catch(e){_._DumpException(e)}
try{
_.Cs=function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};
}catch(e){_._DumpException(e)}
try{
var Ds=function(a,b){var c=b.createRange();c.selectNode(b.body);a=_.yh(a);return c.createContextualFragment(_.de(a))},Es=function(a){a=a.nodeName;return"string"===typeof a?a:"FORM"},Fs=function(a){a=a.nodeType;return 1===a||"number"!==typeof a},Gs=function(a,b,c){a.setAttribute(b,c)},Hs=function(a){if(!a)return null;a=_.Dd(_.Gc(a,2));return null===a||void 0===a?null:_.yh(a)},Is=function(a){if(!a)return null;a=_.Dd(_.Gc(a,7));return null===a||void 0===a?null:new _.Mh(a,_.Lh)},Js=function(a,b){if(1===
a.nodeType){var c=a.tagName;if("SCRIPT"===c||"STYLE"===c)throw Error("t");}a.innerHTML=_.de(b)},Ls=function(a){return _.E(a,Ks,3).filter(function(b){return!_.Q(a,18)||_.Q(b,9)}).map(function(b){return _.H(b,1)})},Ms=function(a){return _.E(a,Ks,3).filter(function(b){return _.Q(b,5)}).map(function(b){return _.H(b,1)})},Os=function(a){return Ns(a).filter(function(b){return!_.Q(a,18)||_.Q(b,20)}).map(function(b){return _.H(b,1)})},Ps=function(a){return Ns(a).filter(function(b){return _.Q(b,4)}).map(function(b){return _.H(b,
1)})},Rs=function(a){return _.E(a,Qs,2).map(function(b){return _.H(b,1)})},Ss=["data:","http:","https:","mailto:","ftp:"],Ts=function(a){0===a.g.length&&a.g.push("")},Us=function(a,b){if(3===b.nodeType)return 1;if(!Fs(b))return 2;b=Es(b);if(null===b)return Ts(a),2;var c=a.h;if("FORM"!==b&&(c.h.has(b)||c.g.has(b)))return 1;Ts(a);return 2},Vs=function(a,b,c){var d=Es(b);c=c.createElement(d);b=b.attributes;for(var e=_.q(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.h;var k=
h.g.get(d);h=(null==k?0:k.has(f))?k.get(f):h.i.has(f)?{X:1}:(h=h.l.get(f))?h:{X:0};a:{if(k=h.conditions){k=_.q(k);for(var l=k.next();!l.done;l=k.next()){var n=_.q(l.value);l=n.next().value;n=n.next().value;var r=void 0;if((l=null==(r=b.getNamedItem(l))?void 0:r.value)&&!n.has(l)){k=!1;break a}}}k=!0}if(k)switch(h.X){case 1:Gs(c,f,g);break;case 2:h=_.mk(g);h=void 0!==h&&-1!==Ss.indexOf(h.toLowerCase())?g:"about:invalid#zClosurez";h!==g&&Ts(a);Gs(c,f,h);break;case 3:Gs(c,f,g.toLowerCase());break;case 4:Gs(c,
f,g);break;case 0:Ts(a)}else Ts(a)}return c},Ws=function(a,b,c){b=Ds(b,c);b=document.createTreeWalker(b,5,function(h){return Us(a,h)},!1);for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;null!==d;){var g=void 0;if(3===d.nodeType)g=document.createTextNode(d.data);else if(Fs(d))g=Vs(a,d,c);else throw Error("t");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e},Xs=function(a){var b=_.oe,c=document.implementation.createHTMLDocument(""),
d=c.body;d.appendChild(Ws(b,a,c));a=(new XMLSerializer).serializeToString(d);a=a.slice(a.indexOf(">")+1,a.lastIndexOf("</"));return _.yh(a)},Ys=function(a){this.j=_.v(a)};_.A(Ys,_.J);var Zs=[3,4],$s=function(a){this.j=_.v(a)};_.A($s,_.J);var at=function(a){var b=new $s;return _.L(b,1,a)},bt=function(a){this.j=_.v(a)};_.A(bt,_.J);var ct=function(a){this.j=_.v(a)};_.A(ct,_.J);var dt=function(a){this.j=_.v(a)};_.A(dt,_.J);var et=function(a){this.j=_.v(a)};_.A(et,_.J);var ft=function(a){this.j=_.v(a)};
_.A(ft,_.J);var gt=function(a){this.j=_.v(a)};_.A(gt,_.J);var ht=function(a){a=_.Kc(a,1);return null==a?void 0:a},jt=function(a){this.j=_.v(a)};_.A(jt,_.J);var kt=function(a){this.j=_.v(a)};_.A(kt,_.J);var lt=function(a){this.j=_.v(a)};_.A(lt,_.J);lt.B=[11];var mt=function(a){this.j=_.v(a)};_.A(mt,_.J);var Qs=function(a){this.j=_.v(a)};_.A(Qs,_.J);var nt=function(a){this.j=_.v(a)};_.A(nt,_.J);var ot=function(a){this.j=_.v(a)};_.A(ot,_.J);var pt=function(a){this.j=_.v(a)};_.A(pt,_.J);pt.B=[5];
var qt=function(a){this.j=_.v(a)};_.A(qt,_.J);var rt=function(a){this.j=_.v(a)};_.A(rt,_.J);rt.B=[5];var st=function(a){this.j=_.v(a)};_.A(st,_.J);var tt=function(a){this.j=_.v(a)};_.A(tt,_.J);tt.B=[9,6,7,8,14,17];var Ks=function(a){this.j=_.v(a)};_.A(Ks,_.J);Ks.B=[6];var ut=function(a){this.j=_.v(a)};_.A(ut,_.J);ut.B=[5];var vt=function(a){this.j=_.v(a)};_.A(vt,_.J);vt.B=[5];var wt=function(a){this.j=_.v(a)};_.A(wt,_.J);wt.B=[16,1,2,3,11,12,4,5,6,17,7];
var Ns=function(a){return _.E(a,tt,1)},xt=function(a){this.j=_.v(a)};_.A(xt,_.J);var yt=function(a){this.j=_.v(a)};_.A(yt,_.J);yt.B=[13];var zt=function(a){return _.D(a,xt,10)},At=function(a){return _.D(a,_.Uh,11)},Bt=function(a){this.j=_.v(a)};_.A(Bt,_.J);
var Ct=function(a){return _.xd(a,Bt,3,_.di)},Dt=/([a-zA-Z][a-zA-Z0-9:\-]*)[\t\n\r\u0020]*=[\t\n\r\u0020]*("[^"]*"|'[^']*')/g,Et=function(a,b){a.h=function(c){"Escape"!==c.key&&"Esc"!==c.key||b()};a.document.addEventListener("keydown",a.h)},Ft=function(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:return"#"!=c.charAt(0)||(c=Number("0"+c.slice(1)),isNaN(c))?b:String.fromCharCode(c)}})},Gt=/&([^;\s<&]+);?/g,
Ht=function(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=_.t.document.createElement("div");return a.replace(Gt,function(d,e){var f=b[d];if(f)return f;"#"==e.charAt(0)&&(e=Number("0"+e.slice(1)),isNaN(e)||(f=String.fromCharCode(e)));f||(f=_.yh(d+" "),_.th(c,f),f=c.firstChild.nodeValue.slice(0,-1));return b[d]=f})},It=function(a){this.j=_.v(a)};_.A(It,_.J);
var Jt=function(a){if(null==a)throw Error("I");return a},Kt=function(a){var b=a.length;return 0<b?a[b-1].h:!1},Lt=/^\/?(address|blockquote|dd|div|dl|dt|h[1-6]|hr|li|ol|p|pre|table|tr|ul)$/,Mt=function(a,b){this.g=a;this.h=b},Nt=function(a){if(null==a)return"";if(a instanceof _.ce)a=_.de(a).toString();else if(null!=a&&a.ia===_.ri)a=a.toString();else return a;for(var b="",c=0,d="",e=[],f=/<(?:!--.*?--|(?:!|(\/?[a-z][\w:-]*))((?:[^>'"]|"[^"]*"|'[^']*')*))>|$/gi,g;g=f.exec(a);){var h=g[1],k=g[2],l=g.index;
h=h?h.toLowerCase():null;if(d)d===h&&(d="");else if(c=a.substring(c,l),c=_.Ca(c,"&")?"document"in _.t?Ht(c):Ft(c):c,Kt(e)||(c=c.replace(/[ \t\r\n]+/g," "),/[^ \t\r\n]$/.test(b)||(c=c.replace(/^ /,""))),b+=c,h&&(/^(script|style|textarea|title)$/.test(h)?d="/"+h:/^br$/.test(h)?b+="\n":Lt.test(h)?/[^\n]$/.test(b)&&(b+="\n"):/^(td|th)$/.test(h)&&(b+="\t"),!_.Ii.test("<"+h+">")))if("/"===h.charAt(0))for(h=h.substring(1);0<e.length&&e.pop().g!==h;);else if(/^pre$/.test(h))e.push(new Mt(h,!0));else{a:{if(""!==
k)for(;c=Dt.exec(k);)if(/^style$/i.test(c[1])){k=c[2];Dt.lastIndex=0;if(""!==k){if("'"===k.charAt(0)||'"'===k.charAt(0))k=k.substr(1,k.length-2);b:{var n;for(c=/[\t\n\r ]*([^:;\t\n\r ]*)[\t\n\r ]*:[\t\n\r ]*([^:;\t\n\r ]*)[\t\n\r ]*(?:;|$)/g;n=c.exec(k);)if(/^white-space$/i.test(n[1])){n=n[2];if(/^(pre|pre-wrap|break-spaces)$/i.test(n)){k=!0;break b}if(/^(normal|nowrap)$/i.test(n)){k=!1;break b}}k=null}break a}break}k=null}null==k&&(k=Kt(e));e.push(new Mt(h,k))}if(!g[0])break;c=l+g[0].length}return b.replace(/\u00A0/g,
" ")};var Ot=function(a){return a instanceof jt?(a=(a=Hs(a))?_.de(a).toString():"",(0,_.S)(a)):null==a?a:null};var Qt=function(a){return Pt(a.D,a.T,a.Vb,a.jd)},Pt=function(a,b,c,d){var e="",f=_.ci(_.oi(a)),g=_.D(Ct(_.oi(a)),wt,2);e+='<div class="fc-consent-root"><div class="fc-dialog-overlay"></div><div class="fc-dialog-container">';var h;f=null==(h=f?_.E(f,_.Wh,2).filter(function(k){return _.vd(k,lt,4,_.Xh)}):null)?void 0:_.xd(h[0],lt,4,_.Xh);h=0<_.ai(_.mi(a)).filter(function(k){return 1==k.F()}).length;e+=Rt(g,a,b,h,f);a=3==_.H(_.ns(g,qt,8),1)&&4==_.H(_.ns(g,qt,8),3);e+=St(g,b,h,f,a)+Tt(g,b,h,a,f)+(b&&c&&
d?Ut(c,d,f):"")+"</div>"+Vt(_.P(f,27))+"</div>";return(0,_.S)(e)},Rt=function(a,b,c,d,e){d='<div class="fc-dialog fc-choice-dialog" role="dialog" aria-label="'+_.W(Wt(a,e))+'" tabindex="0">'+(d?'<div class="fc-choice-dialog-header">'+_.wj(_.P(e,27))+"</div>":"")+'<div class="fc-dialog-content"><div class="fc-dialog-scrollable-content"><div class="fc-header fc-dialog-restricted-content">';var f=_.D(Ct(_.oi(b)),yt,1),g=_.P(e,1);d+=(null!=At(f)&&_.Fi(_.Jh(At(f),4),2)?c?'<h2 class="fc-ump-sdk-app-icon-placeholder-container fc-header-image-container"><img class="fc-ump-sdk-app-icon-placeholder-image" alt="'+
_.W(g)+'" src="https://fonts.gstatic.com/s/i/googlematerialicons/image/v7/grey600-24dp/1x/gm_image_grey600_24dp.png"/></h2>':'<h2 class="fc-iris-logo fc-header-image-container" style="display: none;"><img alt="'+_.W(g)+'" class="fc-iris-logo-image"/></h2><h2 class="fc-iris-title" style="display: none;">'+_.U(g)+"</h2>":"")+(null!=At(f)&&_.Fi(_.Jh(At(f),4),3)?c?null!=_.R(At(f),1)?"<h2>"+_.zj(At(f),-1!=g.indexOf("%%SITE_NAME%%")?null:g,!0)+"</h2>":'<h2 class="fc-site-macro-placeholder-container fc-header-image-container"><img class="fc-site-macro-placeholder-image" alt="'+
_.W(g)+'" src="https://fonts.gstatic.com/s/i/googlematerialicons/image/v7/grey600-24dp/1x/gm_image_grey600_24dp.png"/></h2>':"<h2>"+_.zj(At(f),-1!=g.indexOf("%%SITE_NAME%%")?null:g,!0)+"</h2>":"")+(null==At(f)?'<h2 class="fc-dialog-title">'+_.U(g)+"</h2>":"")+'<h1 class="fc-dialog-headline">'+_.U(_.P(e,2))+'</h1></div><div class="fc-stacks fc-dialog-restricted-content"><ul>';a=_.E(a,nt,7);f=a.length;for(g=0;g<f;g++){var h=a[g];d+='<li><div class="fc-stack-icon" translate="no"><i class="material-icons">'+
_.U(_.R(h,2))+'</i></div><span class="fc-stack-name">'+_.U(_.R(h,1))+"</span></li>"}a=_.P(e,10);d=d+'</ul></div><button class="fc-faq-header fc-dialog-restricted-content" role="button" aria-label="'+(_.W(a)+'" tabindex="0"><div class="fc-faq-icon" translate="no"><i class="material-icons faq-section-closed">expand_more</i><i class="material-icons faq-section-open">remove</i></div><span class="fc-faq-label">'+_.U(a)+'</span></button><div class="fc-faq-contents"><ul class="fc-dialog-restricted-content">');
a=_.E(e,kt,11);f=a.length;for(g=0;g<f;g++)h=a[g],d+='<li><a class="fc-faq-item" role="button" aria-label="'+_.W(_.P(h,1))+'" tabindex="0"'+(c?"":' href="#"')+' data-faq-item-index="'+_.W(g)+'"><div class="fc-faq-item-dot"></div><span class="fc-faq-item-title">'+_.U(_.P(h,1))+"</span></a></li>";var k;d+='</ul></div><div class="fc-footer fc-dialog-restricted-content"><p>'+_.U(null!=(k=Ot(_.D(e,jt,12)))?k:"")+"</p><p>"+_.U(_.P(e,13))+"</p></div></div></div>";b=new Map(_.ai(_.mi(b)).map(function(l){return{key:l.F(),
value:l}}).map(function(l){return[l.key,l.value]}));c=b.get(8);k=b.get(7);d+='<div class="fc-footer-buttons-container"><div class="fc-footer-buttons-divider"></div><div class="fc-footer-buttons">';a=b.get(6);b=(new Map).set(6,"fc-cta-consent").set(8,"fc-cta-do-not-consent").set(7,"fc-cta-manage-options");f=Xt(a.F(),e);d+='<button class="fc-button '+_.W(b.get(a.F()))+' fc-primary-button" role="button" aria-label="'+_.W(f)+'" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">'+
_.U(f)+"</p></button>";a=c?c:k;f=Xt(a.F(),e);d+='<button class="fc-button '+_.W(b.get(a.F()))+' fc-secondary-button" role="button" aria-label="'+_.W(f)+'" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">'+_.U(f)+"</p></button></div>";if(c=c?k:null)e=Xt(c.F(),e),d+='<button class="fc-button '+_.W(b.get(c.F()))+'" role="button" aria-label="'+_.W(e)+'" tabindex="0"><p class="fc-manage-options-third-button-label">'+_.U(e)+"</p></button>";return(0,_.S)(d+"</div></div>")},
Xt=function(a,b){return Jt((new Map).set(6,_.P(b,7)).set(8,_.P(b,9)).set(7,_.P(b,8)).get(a))},St=function(a,b,c,d,e){c='<div class="fc-dialog fc-data-preferences-dialog" role="dialog" aria-label="'+_.W(_.P(d,3)+", "+_.P(d,4)+". "+_.P(d,20)+", "+_.P(d,25)+", "+_.P(d,26)+" ")+'" tabindex="0"><div class="fc-dialog-header"><button class="fc-dialog-header-back-button fc-data-preferences-back" role="button" aria-label="'+_.W(_.P(d,24))+'" tabindex="0"><i class="material-icons" translate="no">arrow_back</i></button><p>'+
_.U(_.P(d,16))+"</p>"+(c?_.wj(_.P(d,27)):"")+'</div><div class="fc-dialog-content"><div class="fc-dialog-scrollable-content"><div class="fc-header fc-dialog-restricted-content"><h1>'+_.U(_.P(d,3))+'</h1></div><div class="fc-body fc-dialog-restricted-content"><p>'+_.U(_.P(d,4))+'</p></div><div class="fc-preferences-container">';for(var f='<div class="fc-preference-divider"><p>'+_.U(_.P(d,33))+"</p>"+Yt(_.P(d,36),_.P(d,37))+"</div>",g=_.Fi(_.Jh(a,15),3),h=_.Q(a,18),k=_.P(d,17),l=_.E(a,Ks,3),n=l.length,
r=0;r<n;r++){var w=l[r];f+=Zt(_.R(w,2),(0,_.Hi)('<p class="fc-purpose-feature-description'+(e?" fc-truncated-3-line":"")+'">'+_.U(_.R(w,3))+'</p><a class="fc-purpose-feature-more-info" role="button" aria-label="'+_.W(k+", "+_.R(w,2))+'" tabindex="0" data-purpose-id="'+_.W(ht(w))+'" data-name="'+_.W(_.R(w,2))+'" data-legal-description="'+_.W(_.R(w,4))+'"'+(b?"":' href="#"')+">"+_.U(k)+"</a>"),h?_.Q(w,9):!0,h?_.Q(w,5):_.Q(w,5)&&!g,d,void 0,void 0,_.Jh(a,15),e?_.R(w,7):null,e?_.R(w,8):null,"purpose",
ht(w))}l=_.E(a,vt,4);n=l.length;for(r=0;r<n;r++)w=l[r],f+=Zt(_.R(w,2),(0,_.Hi)('<p class="fc-purpose-feature-description'+(e?" fc-truncated-3-line":"")+'">'+_.U(_.R(w,3))+'</p><a class="fc-purpose-feature-more-info" role="button" aria-label="'+_.W(k+", "+_.R(w,2))+'" tabindex="0" data-special-purpose-id="'+_.W(ht(w))+'" data-name="'+_.W(_.R(w,2))+'" data-legal-description="'+_.W(_.R(w,4))+'"'+(b?"":' href="#"')+">"+_.U(k)+"</a>"),h?!1:!0,!1,d,_.R(w,2),_.P(d,18));l=_.E(a,pt,5);n=l.length;for(r=0;r<
n;r++)w=l[r],f+=Zt(_.R(w,2),(0,_.Hi)('<p class="fc-purpose-feature-description'+(e?" fc-truncated-3-line":"")+'">'+_.U(_.R(w,3))+'</p><a class="fc-purpose-feature-more-info" role="button" aria-label="'+_.W(k+", "+_.R(w,2))+'" tabindex="0" data-feature-id="'+_.W(ht(w))+'" data-name="'+_.W(_.R(w,2))+'" data-legal-description="'+_.W(_.R(w,4))+'"'+(b?"":' href="#"')+">"+_.U(k)+"</a>"),h?!1:!0,!1,d,_.R(w,2),_.P(d,19));l=_.E(a,ut,6);n=l.length;for(r=0;r<n;r++)w=l[r],f+=Zt(_.R(w,2),(0,_.Hi)('<p class="fc-purpose-feature-description'+
(e?" fc-truncated-3-line":"")+'">'+_.U(_.R(w,3))+'</p><a class="fc-purpose-feature-more-info" role="button" aria-label="'+_.W(k+", "+_.R(w,2))+'" tabindex="0" data-special-feature-id="'+_.W(ht(w))+'" data-name="'+_.W(_.R(w,2))+'" data-legal-description="'+_.W(_.R(w,4))+'"'+(b?"":' href="#"')+">"+_.U(k)+"</a>"),!0,!1,d,void 0,void 0,void 0,void 0,void 0,"special-feature",ht(w));if(0<_.E(a,Ks,11).length)for(f+='<div class="fc-noneditable-body fc-dialog-restricted-content fc-lower-preference-divider"><p role="heading" tabindex=0>'+
_.U(_.P(d,35))+'</p></div><div class="fc-preference-divider"><p>'+_.U(_.P(d,34))+"</p></div>",l=_.E(a,Ks,11),n=l.length,r=0;r<n;r++)w=l[r],f+=Zt(_.R(w,2),(0,_.Hi)('<p class="fc-purpose-feature-description'+(e?" fc-truncated-3-line":"")+'">'+_.U(_.R(w,3))+'</p><a class="fc-purpose-feature-more-info" role="button" aria-label="'+_.W(k+", "+_.R(w,2))+'" tabindex="0" data-purpose-id="'+_.W(ht(w))+'" data-name="'+_.W(_.R(w,2))+'" data-legal-description="'+_.W(_.R(w,4))+'"'+(b?"":' href="#"')+">"+_.U(k)+
"</a>"),h?!_.Q(w,5)||g:!_.Q(w,5),_.Q(w,5)&&!g,d,void 0,void 0,_.Jh(a,15),void 0,void 0,"publisher-purpose",ht(w));a=(0,_.S)(f);a=c+a+'</div><div class="fc-navigation fc-dialog-restricted-content"><button class="fc-navigation-button fc-manage-vendors" role="button" aria-label="'+_.W(_.P(d,20))+'" tabindex="0"><p class="fc-navigation-button-label">'+_.U(_.P(d,20))+'</p></button></div></div></div><div class="fc-footer-buttons-container"><div class="fc-footer-buttons-divider"></div><div class="fc-footer-buttons"><button class="fc-button fc-data-preferences-accept-all fc-secondary-button" role="button" aria-label="'+
_.W(_.P(d,25))+'" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">'+_.U(_.P(d,25))+"</p></button>";d=_.P(d,26);a+='<button class="fc-button fc-confirm-choices fc-primary-button" role="button" aria-label="'+_.W(d)+'" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">'+_.U(d)+"</p></button></div></div></div>";return(0,_.S)(a)},Tt=function(a,b,c,d,e){a='<div class="fc-dialog fc-vendor-preferences-dialog" role="dialog" aria-label="'+_.W(_.P(e,
5)+", "+_.P(e,6)+". "+_.P(e,25)+", "+_.P(e,26)+" ")+'" tabindex="0"><div class="fc-dialog-header"><button class="fc-dialog-header-back-button fc-vendor-preferences-back" role="button" aria-label="'+_.W(_.P(e,24))+'" tabindex="0"><i class="material-icons" translate="no">arrow_back</i></button><p>'+_.U(_.P(e,21))+"</p>"+(c?_.wj(_.P(e,27)):"")+'</div><div class="fc-dialog-content"><div class="fc-dialog-scrollable-content"><div class="fc-header fc-dialog-restricted-content"><h1>'+_.U(_.P(e,5))+'</h1></div><div class="fc-body fc-dialog-restricted-content"><p>'+
_.U(_.P(e,6))+'</p></div><div class="fc-preferences-container">'+$t(a,b,d,e)+'</div></div></div><div class="fc-footer-buttons-container"><div class="fc-footer-buttons-divider"></div><div class="fc-footer-buttons">';b=_.P(e,25);a+='<button class="fc-button fc-vendor-preferences-accept-all fc-secondary-button" role="button" aria-label="'+_.W(b)+'" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">'+_.U(b)+"</p></button>";e=_.P(e,26);a+='<button class="fc-button fc-confirm-choices fc-primary-button" role="button" aria-label="'+
_.W(e)+'" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">'+_.U(e)+"</p></button></div></div></div>";return(0,_.S)(a)},Vt=function(a){return(0,_.S)('<div class="fc-help-dialog-container" role="dialog" tabindex="0"><div class="fc-help-dialog-overlay"></div><div class="fc-help-dialog"><h1></h1><div class="fc-help-dialog-contents"></div><div class="fc-help-dialog-button-container"><button class="fc-help-dialog-close-button" role="button" aria-label="'+_.W(a)+'" tabindex="0"><p class="fc-help-dialog-close-button-label">'+
_.U(a)+"</p></button></div></div></div>")},$t=function(a,b,c,d){for(var e='<div class="fc-preference-divider"><p>'+_.U(_.P(d,33))+"</p>"+Yt(_.P(d,36),_.P(d,37))+"</div>",f=_.Fi(_.Jh(a,15),3),g=_.Q(a,18),h=_.P(d,23),k=Ns(a),l=k.length,n={},r=0;r<l;n={L:void 0},r++){n.L=k[r];var w='<div class="fc-iab-vendor-storage-info-container"><p>'+(null==_.Rd(n.L,15)||_.Hh(n.L,15)?_.U(_.P(d,38))+": "+_.U(_.P(n.L,12))+".":_.U(_.P(d,41))+".")+"</p>";if(c&&0<_.Y(n.L,17).length){w+='<div class="fc-vendor-data-categories"><p class="fc-truncated-single-line">'+
_.U(_.P(d,61))+": "+_.U(_.E(a,ot,17).filter(function(z){return function(G){var M=_.Y(z.L,17);G=ht(G);return 0<=_.oj(M,G)}}(n)).map(function(z){return _.R(z,2)}).join(", "))+"</p>";var y=_.P(d,62);w+='<a class="fc-vendor-data-categories-see-more" role="button" aria-label="'+_.W(y)+'" tabindex="0" data-vendor-id="'+_.W(ht(n.L))+'"'+(b?"":' href="#"')+">"+_.U(y)+"</a></div>"}w+="<p>"+(_.Hh(n.L,16)?_.U(_.P(d,40))+". ":"")+(_.Hh(n.L,13)?_.U(_.P(d,39))+".":"")+'</p></div><div class="fc-preference-container-divider"></div>';
y=_.P(d,22);w+='<a class="fc-vendor-purposes-features-list" role="button" aria-label="'+_.W(""+_.R(n.L,2)+", "+y)+'" tabindex="0" data-vendor-id="'+_.W(ht(n.L))+'"'+(b?"":' href="#"')+">"+_.U(y)+"</a>";0<_.E(n.L,rt,14).length&&(w+=" | ",y=_.P(d,42),w+='<a class="fc-vendor-device-storage-disclosures" role="button" aria-label="'+_.W(y)+'" tabindex="0" data-vendor-id="'+_.W(ht(n.L))+'"'+(b?"":' href="#"')+">"+_.U(y)+"</a>");w+=' | <a class="fc-vendor-policy-link" role="link" aria-label="'+_.W(""+_.R(n.L,
2)+", "+h)+'" tabindex="0" data-policy-link="'+_.W(_.R(n.L,3))+'"'+(b?"":' href="#"')+">"+_.U(h)+'<i class="material-icons fc-launch-icon" data-policy-link="'+_.W(_.R(n.L,3))+'" translate="no">launch</i></a>';e+=Zt(_.R(n.L,2),(0,_.Hi)(w),g?_.Q(n.L,20):!_.Q(n.L,10),g?_.Q(n.L,4)&&!_.Q(n.L,10):_.Q(n.L,4)&&!_.Q(n.L,10)&&!f,d,void 0,void 0,_.Jh(a,15),void 0,void 0,"gvl-vendor",ht(n.L),!1)}if(0<_.E(a,Qs,2).length)for(e+='<div class="fc-preference-divider fc-lower-preference-divider"><p>'+_.U(_.P(d,54))+
"</p>"+Yt(_.P(d,55),_.P(d,56))+"</div>",a=_.E(a,Qs,2),c=a.length,f=0;f<c;f++)g=a[f],e+=Zt(_.R(g,2),(0,_.Hi)('<a class="fc-vendor-policy-link" role="link" aria-label="'+_.W(""+_.R(g,2)+", "+h)+'" tabindex="0" data-policy-link="'+_.W(_.R(g,3))+'"'+(b?"":' href="#"')+">"+_.U(h)+'<i class="material-icons fc-launch-icon" data-policy-link="'+_.W(_.R(g,3))+'" translate="no">launch</i></a>'),!0,!1,d,void 0,void 0,void 0,void 0,void 0,"atp-vendor",ht(g),!1);return(0,_.S)(e)},Zt=function(a,b,c,d,e,f,g,h,k,
l,n,r,w){var y=void 0===y?!1:y;b='<div class="fc-preference-container"><div class="fc-preference-title"><h2>'+_.U(a)+"</h2>"+((y?c||d||null==f||null==g:null==f||null==g)?"":Yt(f,g))+'</div><div class="fc-preference-description">'+b+"</div>";if(y?c:c&&null==f&&null==g)c=_.P(e,28),b=b+'<label class="fc-preference-slider-container fc-consent-preference-container"><span class="fc-preference-slider-label">'+(_.U(null!=k?k:c)+'</span><span class="fc-preference-slider"><input type="checkbox" role="button" aria-label="'+
_.W(""+(null!=k?k:c)+", "+a)+'" aria-pressed="'+_.W(w?"true":"false")+'" tabindex="0" class="fc-preference-consent'+(n?" "+_.W(n):"")+'" data-id="'+_.W(r)+'"'+(w?" checked":"")+'/><span class="fc-slider-el"></span></span></label>');if(d){b+='<label class="fc-preference-slider-container fc-legitimate-interest-preference-container" for="fc-preference-slider-'+_.W(n)+"-"+_.W(r)+'"><span class="fc-preference-slider-label">';d=_.P(e,29);var z;k=b;e=_.U(null!=l?l:d)+Yt(_.P(e,30),_.P(e,31))+'</span><span class="fc-preference-slider"><input type="checkbox" role="button" aria-label="';
l=null!=(z=null!=l?l:d)?z:"";b=k+(e+_.W(l+", "+a)+'" aria-pressed="true" tabindex="0" class="fc-preference-legitimate-interest'+(n?" "+_.W(n):"")+'" data-id="'+_.W(r)+'" id="fc-preference-slider-'+_.W(n)+"-"+_.W(r)+'"'+(_.Fi(h,2)?"":" checked")+'/><span class="fc-slider-el"></span></span></label>')}return(0,_.S)(b+"</div>")},Yt=function(a,b){return(0,_.S)('<button class="fc-help-tip" data-title="'+_.W(a)+'" data-full-info="'+_.W(b)+'" role="tooltip" aria-label="'+_.W(b)+'" tabindex="0"><i class="material-icons" data-title="'+
_.W(a)+'" data-full-info="'+_.W(b)+'" translate="no">help_outline</i></button>')},au=function(a){var b=a.Hc;a="<p>"+_.U(a.yb)+"</p><ul>";for(var c=b.length,d=0;d<c;d++)a+="<li>"+_.U(b[d])+"</li>";return(0,_.S)(a+"</ul>")},bu=function(a){var b=a.zb;a="<p>"+_.U(a.yb)+"</p>";if(0<b.length){a+="<ul>";for(var c=b.length,d=0;d<c;d++)a+="<li>"+_.U(b[d])+"</li>";a+="</ul>"}return(0,_.S)(a)},cu=function(a){var b=a.tc,c=a.zb;a="<p>"+_.U(a.description)+"</p>";if(0<c.length){a+="<p><b>"+_.U(b)+'</b>:</p><div class="fc-illustrations"><ul>';
b=c.length;for(var d=0;d<b;d++)a+="<li>"+_.U(c[d])+"</li>";a+="</ul></div>"}return(0,_.S)(a)},du=function(a){a=a.lc;var b="";if(0<a.length){b+="<ul>";for(var c=a.length,d=0;d<c;d++){var e=a[d],f=void 0,g=void 0;b+="<li><b>"+_.U(null!=(f=_.R(e,2))?f:"")+"</b>: "+_.U(null!=(g=_.R(e,3))?g:"")+"</li>"}b+="</ul>"}return(0,_.S)(b)},eu=function(a){var b=a.jc,c=a.yc,d=a.mc,e=a.ya,f=a.Gc,g=a.xc,h=a.W;a='<div class="fc-vendor-purpose-feature-details"><div>';if(0<b.length){a+='<p class="fc-vendor-purpose-feature-section-title">'+
_.U(_.P(h,28))+":</p><ul>";for(var k=b.length,l=0;l<k;l++)a+="<li>"+_.U(b[l])+"</li>";a+="</ul>"}a+="</div><div>";if(0<c.length){a+='<p class="fc-vendor-purpose-feature-section-title">'+_.U(_.P(h,29))+":</p><ul>";b=c.length;for(k=0;k<b;k++)a+="<li>"+_.U(c[k])+"</li>";a+="</ul>"}e&&g&&(c=_.P(h,60),a=a+'<p><a class="fc-vendor-legitimate-interest-claim-link" role="link" aria-label="'+(_.W(f+", "+c)+'" tabindex="0" data-legitimate-interest-claim-link="'+_.W(g)+'" href="#">'+_.U(c)+'<i class="material-icons fc-launch-icon" data-legitimate-interest-claim-link="'+
_.W(g)+'" translate="no">launch</i></a></p>'));a+="</div><div>";if(0<d.length){a+='<p class="fc-vendor-purpose-feature-section-title">'+_.U(_.P(h,32))+":</p><ul>";f=d.length;for(g=0;g<f;g++)a+="<li>"+_.U(d[g])+"</li>";a+="</ul>"}return(0,_.S)(a+"</div></div>")},gu=function(a){return fu(a.sb,a.vb,a.W)},fu=function(a,b,c){for(var d="",e=(new Map).set(1,_.P(c,45)).set(2,_.P(c,46)).set(3,_.P(c,47)),f=(new Map).set(Jt(!0),_.P(c,52)).set(Jt(!1),_.P(c,53)),g=a.length,h=0;h<g;h++){var k=a[h];d+='<div class="fc-device-storage-disclosures"><p><b>'+
_.U(_.P(c,43))+"</b>: "+_.U(_.R(k,1))+"</p><p><b>"+_.U(_.P(c,44))+"</b>: "+_.U(e.get(_.Jh(k,2)))+"</p>"+(_.Fi(_.Jh(k,2),1)?"<p><b>"+_.U(_.P(c,48))+"</b>: "+_.U(_.R(k,3))+"</p>":"")+(_.Fi(_.Jh(k,2),1)||_.Fi(_.Jh(k,2),2)?"<p><b>"+_.U(_.P(c,49))+"</b>: "+_.U(_.R(k,4))+"</p>":"")+"<p><b>"+_.U(_.P(c,50))+"</b>: ";for(var l=_.Y(k,5),n=l.length,r={},w=0;w<n;r={Wb:void 0},w++)r.Wb=l[w],d+=_.U(b.filter(function(y){return function(z){return _.Fi(h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <a href="#" class="gallery-widget__header-title-link"></a></h3>
    <a href="javascript:void(0);" class="gallery-widget__header-minhafolha is-hidden" title="Minha Folha">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="20" height="24" class="icon icon-save">
        <title>ic_save</title>
        <g id="Page-1" stroke="none" stroke-width="1">
          <g id="Ícones" transform="translate(-915.000000, -648.000000)">
            <path d="M932.142857,648 L917.857143,648 C916.285714,648 915.014286,649.2 915.014286,650.666667 L915,672 L925,668 L935,672 L935,650.666667 C935,649.2 933.714286,648 932.142857,648 L932.142857,648 Z M932.142857,668 L925,665.093333 L917.857143,668 L917.857143,650.666667 L932.142857,650.666667 L932.142857,668 L932.142857,668 Z" id="ic_save"></path>
          </g>
        </g>
      </svg>
    </a>
    <a href="javascript:void(0);" data-action="open" class="gallery-widget__header-fullscreen" title="Fullscreen">
      <svg xmlns="//www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-full-screen"><path d="M10.31 0H16v5.692h-2.255V2.256H10.31V0zm3.435 13.745V10.31H16V16h-5.69v-2.255h3.435zM0 5.69V0h5.692v2.255H2.256V5.69H0zm2.255 4.62v3.435H5.69V16H0v-5.69h2.255z"/></svg>
    </a>
    <a href="javascript:void(0);" data-action="close" class="gallery-widget__header-close is-hidden" title="Fechar">
      <svg xmlns="//www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-close"><path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/></svg>
    </a>
  </div>

  <!-- Content -->
  <div class="gallery-widget__content">
    <div class="gallery-widget-carousel is-hidden">
  <div class="gallery-widget-carousel__container">
    <ol class="list-unstyled gallery-widget-carousel__list"></ol>

    <a href="javascript:void(0);" class="gallery-widget-carousel__btn gallery-widget-carousel__btn-prev gallery-widget--is-hidden">
      <span>
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon--chevron-left" aria-hidden="true">
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
      </span>
    </a>
    <a href="javascript:void(0);" class="gallery-widget-carousel__btn gallery-widget-carousel__btn-next gallery-widget--is-hidden">
      <span>
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon--chevron-right" aria-hidden="true">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
        </svg>
      </span>
    </a>
  </div>

  <div class="gallery-widget-carousel__info is-hidden">
    <div class="gallery-widget-carousel__info-container">
      <p class="gallery-widget-carousel__info-description">
        <span class="gallery-widget-carousel__info-text"></span>
        <span class="gallery-widget-carousel__info-author"></span>

        <button class="gallery-widget-carousel__info-more c-button c-button--unstyled is-hidden" aria-expanded="false" aria-label="Expandir">
          Mais
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon--chevron-down " aria-hidden="true">
 <path d="M 6.2499999,9.800625 7.60125,8.449375 12,12.838542 16.39875,8.449375 17.75,9.800625 l -5.75,5.75 -5.75,-5.75 z"/>
</svg>
        </button>
      </p>
      <a href="#" class="gallery-widget-carousel__info-share" title="Compartilhe">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon-share">
          <title>ic_share</title>
          <g id="Page-1" stroke="none" stroke-width="1">
            <g id="Ícones" transform="translate(-914.000000, -808.000000)">
              <g id="ic_share" transform="translate(914.000000, 808.000000)">
                <path d="M15.7108434,17.8915663 L7.12048193,12.8915663 C7.18072289,12.6144578 7.22891566,12.3373494 7.22891566,12.0481928 C7.22891566,11.7590361 7.18072289,11.4819277 7.12048193,11.2048193 L15.6144578,6.25301205 C16.2650602,6.85542169 17.1204819,7.22891566 18.0722892,7.22891566 C20.0722892,7.22891566 21.686747,5.61445783 21.686747,3.61445783 C21.686747,1.61445783 20.0722892,0 18.0722892,0 C16.0722892,0 14.4578313,1.61445783 14.4578313,3.61445783 C14.4578313,3.90361446 14.5060241,4.18072289 14.5662651,4.45783133 L6.07228916,9.40963855 C5.42168675,8.80722892 4.56626506,8.43373494 3.61445783,8.43373494 C1.61445783,8.43373494 0,10.0481928 0,12.0481928 C0,14.0481928 1.61445783,15.6626506 3.61445783,15.6626506 C4.56626506,15.6626506 5.42168675,15.2891566 6.07228916,14.686747 L14.6506024,19.6987952 C14.5903614,19.9518072 14.5542169,20.2168675 14.5542169,20.4819277 C14.5542169,22.4216867 16.1325301,24 18.0722892,24 C20.0120482,24 21.5903614,22.4216867 21.5903614,20.4819277 C21.5903614,18.5421687 20.0120482,16.9638554 18.0722892,16.9638554 C17.1566265,16.9638554 16.3373494,17.3253012 15.7108434,17.8915663 Z" id="Fill-95"></path>
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
    <div class="gallery-widget-carousel__info-read-more-container">
      <a href="#" class="gallery-widget-carousel__info-read-more is-hidden">Leia Mais</a>
    </div>
  </div>

  <div class="gallery-widget-advertising gallery-widget--is-hidden">
  <div class="gallery-widget-advertising__container">
    <div class="gallery-widget-advertising__container-cell">
      <a href="javascript:void(0);" class="gallery-widget-advertising__container-close gallery--is-hidden" title="Fechar">
         <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-close"><title>Ícone fechar</title><path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/></svg>
       </a>
      <iframe class="gallery-widget-advertising__content" frameborder="0"></iframe>
    </div>
    <div class="gallery-widget-advertising__overlay is-hidden"></div>
  </div>
</div>
</div>
  </div>

  <div class="gallery-widget-others gallery-widget--is-hidden">
  <a href="javascript:;" class="gallery-widget-others__go-back">
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon--chevron-left" aria-hidden="true">
      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg> Voltar
  </a>

  <a href="javascript:void(0);" class="gallery-widget-others__close is-hidden" title="Fechar">
    <svg xmlns="//www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" class="icon icon-close">
      <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
    </svg>
  </a>

  <button class="gallery-widget-others__btn">
    Ver novamente
  </button>
</div>
  <div class="gallery-widget-mosaic gallery-widget--is-hidden">
  <div class="gallery-widget-mosaic__top">
    <a href="javascript:;" class="gallery-widget-mosaic__go-back">
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon--chevron-left" aria-hidden="true">
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg> Voltar
    </a>

    <h4 class="gallery-widget-mosaic__title"></h4>
    <p class="gallery-widget-mosaic__description"></p>
  </div>

  <div class="gallery-widget-mosaic__list">
    <div class="gallery-widget-mosaic__container">
      <ol class="gallery-widget-mosaic__thumbnails"></ol>
    </div>
  </div>

  <nav class="gallery-widget-mosaic__nav is-invisible">
    <a href="javascript:void(0);" class="gallery-widget-mosaic__btn gallery-widget-mosaic__btn-prev">
      <span>
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon--chevron-left" aria-hidden="true">
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
      </span>
    </a>
    <a href="javascript:void(0);" class="gallery-widget-mosaic__btn gallery-widget-mosaic__btn-next">
      <span>
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon--chevron-right" aria-hidden="true">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
        </svg>
      </span>
    </a>
  </nav>
</div>
  <div class="gallery-widget-share-container">
  <div class="gallery-widget-share is-hidden">
    <a href="" class="gallery-widget-share__go-back is-hidden">
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon--chevron-left" aria-hidden="true">
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg> Voltar
    </a>
    <a href="javascript:void(0);" data-action="close" class="gallery-widget-share__go-close u-hidden-md" title="Fechar">
      <svg xmlns="//www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-close"><path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"></path></svg>
    </a>
    <h4 class="gallery-widget-share__title is-hidden">Compartilhe</h4>
    <ul class="list-unstyled gallery-widget-share__list">
      <li>
        <a class="gallery-widget-share-facebook" href="" target="_blank" rel="external" title="Compartilhe via facebook">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-facebook"><title>Ícone Facebook</title><path d="M9.5 3H12V0H9.5C7.57 0 6 1.57 6 3.5V5H4v3h2v8h3V8h2.5l.5-3H9V3.5c0-.27.23-.5.5-.5z"/></svg>
        </a>
        <span class="is-hidden">Facebook</span>
      </li>
      <li class="is-hidden">
        <a class="gallery-widget-share-whatsapp" href="" target="_blank" rel="external" title="Compartilhe via whatsapp">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-whatsapp"><title>Ícone Whatsapp</title><path d="M8.132-.007c-4.268 0-7.73 3.49-7.73 7.794 0 1.472.406 2.85 1.11 4.024L.117 15.994l4.28-1.382c1.107.618 2.38.97 3.735.97 4.27 0 7.73-3.49 7.73-7.793 0-4.305-3.46-7.794-7.73-7.794zm0 14.346c-1.32 0-2.55-.4-3.575-1.085l-2.497.807.812-2.434a6.554 6.554 0 0 1-1.238-3.842c0-3.613 2.915-6.552 6.498-6.552s6.498 2.94 6.498 6.552c0 3.613-2.915 6.553-6.498 6.553z"/><path d="M6.365 4.525c-.125-.304-.22-.314-.414-.324a4.407 4.407 0 0 0-.216-.005c-.25 0-.508.074-.663.235-.19.195-.662.653-.662 1.593S5.088 7.87 5.18 8c.096.126 1.325 2.084 3.238 2.883 1.493.623 1.936.568 2.276.493.496-.11 1.118-.478 1.276-.924.158-.446.158-.828.11-.908-.047-.08-.173-.127-.363-.223-.19-.094-1.12-.556-1.294-.62-.174-.064-.335-.044-.468.142-.184.257-.362.522-.51.678-.114.124-.3.14-.46.072-.208-.09-.8-.297-1.522-.948A5.747 5.747 0 0 1 6.41 7.32c-.112-.19-.01-.304.074-.408.097-.12.187-.204.282-.315.094-.112.147-.17.21-.3.063-.126.02-.258-.026-.353-.048-.096-.427-1.036-.585-1.42z"/></svg>
        </a>
        <span class="is-hidden">Whatsapp</span>
      </li>
      <li>
        <a class="gallery-widget-share-twitter" href="" target="_blank" rel="external" title="Compartilhe via twitter">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-twitter"><title>Ícone Twitter</title><path d="M16 3.202a.275.275 0 0 0-.273-.273c-.085 0-.674.246-.828.29.204-.24.673-.966.673-1.273a.275.275 0 0 0-.273-.273.283.283 0 0 0-.136.042c-.58.316-1.135.564-1.784.7a3.498 3.498 0 0 0-2.406-.973 3.455 3.455 0 0 0-3.448 3.45c0 .136.01.28.035.418A8.736 8.736 0 0 1 2.5 3.11c-.34-.307-.63-.64-.938-.982a.268.268 0 0 0-.23-.102c-.095 0-.17.068-.214.136-.307.453-.47 1.187-.47 1.733 0 .794.274 1.57.786 2.186-.163-.052-.41-.214-.555-.214-.18 0-.334.128-.334.307 0 1.195.657 2.305 1.664 2.928-.077-.007-.145-.033-.222-.033a.272.272 0 0 0-.264.265c0 .034.008.06.017.094a3.44 3.44 0 0 0 2.493 2.296 6.07 6.07 0 0 1-3.2.905c-.256 0-.512-.042-.76-.042a.275.275 0 0 0-.273.273c0 .094.05.17.128.23.222.163.495.3.742.427a9.265 9.265 0 0 0 4.267 1.042c3.72 0 6.904-1.998 8.44-5.396.554-1.22.878-2.56.853-3.9v-.282c.58-.436 1.143-1 1.527-1.623A.295.295 0 0 0 16 3.202z"/></svg>
        </a>
        <span class="is-hidden">Twitter</span>
      </li>
      <li class="is-hidden">
        <a class="gallery-widget-share-messenger" href="" target="_blank" title="Messenger">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 18 18" width="16" height="16" class="icon icon-messenger"><title>Ícone de messenger</title><path d="M8.742.742c-4.418 0-8 3.27-8 7.304 0 2.299 1.163 4.35 2.981 5.688v2.785l2.724-1.474a8.71 8.71 0 0 0 2.295.306c4.418 0 8-3.27 8-7.305 0-4.034-3.582-7.304-8-7.304zm.795 9.836L7.5 8.436l-3.975 2.142 4.372-4.577 2.087 2.143L13.91 6l-4.373 4.577z"/></svg>
        </a>
        <span class="is-hidden">Messenger</span>
      </li>
      <li>
        <a class="gallery-widget-share-linkedin" href="" target="_blank" rel="external" title="Compartilhe via linkedin">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-linkedin"><title>Ícone Linkedin</title><path d="M.522 3.422c.335.335.802.503 1.36.503h.02c.597 0 1.063-.168 1.417-.503.354-.355.522-.765.522-1.287 0-.504-.187-.932-.523-1.268C2.982.53 2.516.363 1.94.363 1.36.363.894.53.54.867.187 1.203 0 1.63 0 2.135c0 .522.168.932.522 1.287zM.205 15.637h3.432V5.343H.205v10.294zm8.746 0V9.892c0-.354.04-.634.113-.84.15-.353.373-.65.672-.894.28-.242.652-.354 1.1-.354.596 0 1.025.205 1.305.615.28.41.43.988.43 1.715v5.502H16V9.743c0-1.53-.354-2.685-1.08-3.468-.73-.784-1.68-1.175-2.873-1.175-.43 0-.84.056-1.194.168a2.47 2.47 0 0 0-.913.447 4.1 4.1 0 0 0-.578.542c-.15.167-.3.353-.43.577h.02v-1.49H5.52l.018.502v3.077c0 1.715 0 3.954-.018 6.714h3.43z"/></svg>
        </a>
        <span class="is-hidden">Linkedin</span>
      </li>
      <li>
        <a class="gallery-widget-share-email" href="" target="_blank" rel="external" title="Compartilhe via email">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-envelope"><title>Ícone de envelope</title><path d="M14.4 1.6H1.6C.72 1.6.008 2.32.008 3.2L0 12.8c0 .88.72 1.6 1.6 1.6h12.8c.88 0 1.6-.72 1.6-1.6V3.2c0-.88-.72-1.6-1.6-1.6zm0 3.2L8 8.8l-6.4-4V3.2l6.4 4 6.4-4v1.6z"/></svg>
        </a>
        <span class="is-hidden">E-mail</span>
      </li>
      <li>
        <a class="gallery-widget-share-clipboard" href="" title="Copiar link">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-link"><title>Ícone de link</title><desc>Cadeado representando um link</desc><path d="M1.52 8A2.482 2.482 0 0 1 4 5.52h3.2V4H4a4 4 0 0 0-4 4 4 4 0 0 0 4 4h3.2v-1.52H4A2.482 2.482 0 0 1 1.52 8zm3.28.8h6.4V7.2H4.8v1.6zM12 4H8.8v1.52H12A2.482 2.482 0 0 1 14.48 8 2.482 2.482 0 0 1 12 10.48H8.8V12H12a4 4 0 0 0 4-4 4 4 0 0 0-4-4z"/></svg>
        </a>
        <span class="is-hidden">Copiar link</span>
        <input type="text" class="gallery-widget-share-clipboard-input is-hidden"/>
        <button type="button" class="gallery-widget-share-clipboard-close is-hidden">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon-close"><title>Ícone fechar</title><path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/></svg>
        </button>
      </li>
    </ul>
  </div>
</div>

  <div class="gallery-widget__loading">
    <img src="//f.i.uol.com.br/hunting/furniture/1/common/icons/spin.gif" alt="Loading" class="gallery-widget__loading-spin">
  </div>
</div>
</div>
<!--/gallery-->
</div>

<p>Lanthimos, <a href="https://www1.folha.uol.com.br/ilustrada/2019/01/emma-stone-e-rachel-weisz-defendem-suas-personagens-no-filme-a-favorita.shtml" rel="" target="">que também dirigiu Stone em "A Favorita", que venceu o Oscar em 2019</a>, disse que a premissa do novo filme "permite que um ser humano, em particular uma mulher, conheça o mundo em seus próprios termos e comece de novo, a partir do zero, sem estruturas sociais".</p>

<p>"Pobres Criaturas", baseado no livro homônimo escrito por Alasdair Gray, também é estrelado por Mark Ruffalo.</p>

<p>O filme vem acumulando troféus desde <a href="https://www1.folha.uol.com.br/ilustrada/2023/09/pobres-criaturas-filme-com-emma-stone-vence-o-leao-de-ouro-em-veneza.shtml" rel="" target="">que ganhou o prêmio principal</a> no Festival de <a href="https://www1.folha.uol.com.br/folha-topicos/cinema/">Cinema</a> de Veneza, em setembro. Ele está programado para estrear nos cinemas brasileiros no dia 1º de fevereiro.</p>

<p><a href="https://www1.folha.uol.com.br/ilustrada/2024/01/globo-de-ouro-foi-grande-vencedor-da-premiacao-ao-driblar-o-seu-passado.shtml" rel="" target="">Stone ganhou o prêmio de melhor atriz em comédia ou musical</a> no <a href="https://www1.folha.uol.com.br/folha-topicos/globo-de-ouro/">Globo de Ouro</a>, realizado no início de janeiro.</p>

<p>No mesmo evento, "Pobres Criaturas" também ganhou como melhor filme de comédia ou musical.</p>

                  </div>

                  
                                    <div class="js-continue-reading-hidden">
                                      </div>
                  
                   

                  
                  
                  <div class="c-news__stars u-no-print js-continue-reading-hidden">
                    <svg viewBox="0 0 51 12" xmlns="https://www.w3.org/2000/svg" class="stars" aria-hidden="true">
  <g fill="none" fill-rule="evenodd">
    <path fill="#E51717" d="M8.77 7.59l1.411 4.379-3.717-2.711-3.718 2.71 1.429-4.377L.457 4.898h4.597L6.464.522l1.428 4.376h4.597z"/>
    <path fill="#2BACE2" d="M27.71 7.59l1.411 4.379-3.717-2.711-3.718 2.71 1.429-4.377-3.718-2.693h4.597l1.41-4.376 1.428 4.376h4.597z"/>
    <path fill="#000" d="M46.65 7.59l1.411 4.379-3.717-2.711-3.718 2.71 1.429-4.377-3.718-2.693h4.597l1.41-4.376 1.428 4.376h4.597z"/>
  </g>
</svg>
                  </div>

                  
                  <div class="c-tools-share c-tools-share--bordered-md c-tools-share--margin-bottom toolbar">
                    <ul aria-label="Opções de compartilhamento" class="c-tools-share__list c-tools-share__list-first rs_preserve">
  <li class="c-tools-share__item" data-share-button="gift">
    <div data-modal-drop data-qty-collumn="3.4" class="c-modal-drop">
      <button aria-label="Ver todas opções de compartilhamento" data-trigger class="gift-item" title="Assinantes...">
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
    <g fill="none" fill-rule="evenodd">
        <g>
            <g>
                <g fill="#F5F5F5" transform="translate(-705 -104) translate(705 104)">
                    <circle cx="15.5" cy="15.5" r="15.5"/>
                </g>
                <path fill="#0078A4" fill-rule="nonzero" d="M11 23L16.617 23 16.617 22.358 15.034 22.055 15.034 16.455 16.753 16.455 17.145 18.31 17.809 18.31 17.809 13.78 17.145 13.78 16.753 15.51 15.034 15.51 15.034 9.945 17.23 9.945 18.336 13.12 19 13.12 19 9 11.017 9 11.017 9.66 12.26 9.91 12.26 22.055 11 22.358z" transform="translate(-705 -104) translate(705 104)"/>
            </g>
        </g>
    </g>
</svg>
      </button>

      <div aria-hidden="true" data-content class="c-modal-drop__content c-modal-drop__content--no-padding c-modal-drop--gift">
        <div class="c-modal-drop__controls u-hidden-md">
          <span class="c-modal-drop__title">compartilhamento Especial</span>
          <button aria-label="Fechar seção de opções" data-close class="c-modal-drop__close">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close  icon--tiny " aria-hidden="true">
  <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
</svg>
          </button>
        </div>

        <div class="rs_skip"
        data-subscribe-advertising
        data-subscriber="[data-subscriber]"
        data-visitor="[data-visitor]">
          <div data-subscriber class="is-hidden c-tools-share--larger c-tools-share--gift">
            <p class="c-tools-share__info u-hidden-md">Assinantes podem liberar 5 acessos por dia para conteúdos da Folha</p>

            <ul
              class="c-tools-share__list c-tools-share__list-gift"
              data-sharebar-utm-campaign-prefix="comp"
              data-sharebar-buttons="giftemail giftwhatsapp giftmessenger"
              data-sharebar-channel="ilustrada"
              data-triggered-byclick=".c-modal-drop [data-trigger]"
              data-sharebar-url="https://www1.folha.uol.com.br/ilustrada/2024/01/cenas-explicitas-de-sexo-em-pobres-criaturas-sao-honestas-defende-emma-stone.shtml"
              data-sharebar-uolpd-id="content"
              data-sharebar-text="Cenas explícitas de sexo em &#039;Pobres Criaturas&#039; são &#039;honestas&#039;, defende Emma Stone"
              data-subscriber-gift>
            </ul>
            <p class="c-tools-share__info u-visible-md">Assinantes podem liberar 5 acessos por dia para conteúdos da Folha</p>
          </div>
          <div data-visitor class="is-hidden c-tools-share--larger c-tools-share--gift">
            <p class="c-tools-share__info">Assinantes podem liberar 5 acessos por dia para conteúdos da Folha</p>
            <div class="c-tools-share--box">
              <a class="c-tools-share__link" href="//assinaturas.folha.com.br">ASSINE</a>
              <span class="c-tools-share__info">ou</span>
              <a class="c-tools-share__link" href="https://paywall.folha.uol.com.br/folha/login?return_url=https://www1.folha.uol.com.br/ilustrada/2024/01/cenas-explicitas-de-sexo-em-pobres-criaturas-sao-honestas-defende-emma-stone.shtml">FAÇA LOGIN</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</ul>

<ul aria-label="Opções de compartilhamento" class="c-tools-share__list c-tools-share__list-second rs_preserve"
  data-sharebar-utm-campaign-prefix="comp"
  data-sharebar-counter
  data-sharebar-buttons="whatsapp facebook twitter"
  data-sharebar-channel="ilustrada"
  data-sharebar-limit="4"
  data-sharebar-url="https://www1.folha.uol.com.br/ilustrada/2024/01/cenas-explicitas-de-sexo-em-pobres-criaturas-sao-honestas-defende-emma-stone.shtml"
  data-sharebar-uolpd-id="content"
  data-sharebar-text="Cenas explícitas de sexo em &#039;Pobres Criaturas&#039; são &#039;honestas&#039;, defende Emma Stone">

  <script type="application/json" data-sharebar-json>
  {
    "url": "https://www1.folha.uol.com.br/ilustrada/2024/01/cenas-explicitas-de-sexo-em-pobres-criaturas-sao-honestas-defende-emma-stone.shtml",
    "title": "Cenas explícitas de sexo em &#039;Pobres Criaturas&#039; são &#039;honestas&#039;, defende Emma Stone",
    "share_title": "Cenas explícitas de sexo em &#039;Pobres Criaturas&#039; são &#039;honestas&#039;, defende Emma Stone",
    "subtitle": "Atriz diz que sua personagem no filme, vencedor do Globo de Ouro e cotado ao Oscar, não tem vergonha do próprio corpo",
    "cover_date": "2024-01-17 22:37:00",
    "kickers": [{"name":"BBC News Brasil","link_url":"https:\/\/www1.folha.uol.com.br\/bbc\/","type":"default"}]
  }
</script>

  <!-- Read Later -->
  <li class="c-tools-share__item" data-share-button="read-later">
    <div data-modal-drop data-qty-collumn="4.3" class="c-modal-drop">
      <button title="Salvar" data-trigger class="c-tools-share__button c-tools-share__button--read-later is-loading" disabled>
        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" version="1.1" class="icon icon--read-later  icon-- " aria-hidden="true">
  <path d="m 7.9505377,12.526649 -5.597811,2.425714 0,-13.5280486 c 0,-0.55978107 0.3732341,-0.93295916 0.9330152,-0.93295916 l 9.3295921,0 c 0.559781,0 0.933015,0.37317809 0.933015,0.93295916 l 0,13.5280486 -5.5978113,-2.425714 z" class="icon--fill" fill="none" />
  <path d="m 12.398666,1.7857927 0,11.5437043 -3.7295021,-1.598359 -0.7103372,-0.266393 -0.7103371,0.266393 -3.7295029,1.598359 0,-11.5437043 8.8796793,0 m 0,-1.77594912 -8.8796793,0 c -0.9768631,0 -1.7760423,0.79917916 -1.7760423,1.77594912 l 0,14.2076353 6.2158823,-2.663931 6.2158823,2.663931 0,-14.2076353 c 0,-0.97676996 -0.799179,-1.77594912 -1.776043,-1.77594912 l 0,0 z"/>
</svg>
        <span class="u-visually-hidden">Salvar para ler depois</span>
      </button>

      <div data-content class="c-modal-drop__content">
        <div class="c-modal-drop__controls u-hidden-md">
          <span class="c-modal-drop__controls__title">Salvar artigos</span>
          <button data-close class="c-modal-drop__close">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close  icon--tiny " aria-hidden="true">
  <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
</svg>
          </button>
        </div>

        <div class="c-modal-drop__text c-modal-drop__text--secondary c-modal-drop__text--small text-center">
          <p>Recurso exclusivo para assinantes</p>
          <p>
            <a class="u-text-uppercase" data-read-later-link="subscribe" href="https://secure.folha.com.br/folha?gid=FOL">assine</a>
            <span>ou</span>
            <a class="u-text-uppercase" data-read-later-link="login" href="//paywall.folha.uol.com.br/folha/login?return_url=https://www1.folha.uol.com.br/ilustrada/2024/01/cenas-explicitas-de-sexo-em-pobres-criaturas-sao-honestas-defende-emma-stone.shtml">faça login</a>
          </p>
        </div>
      </div>
    </div>
  </li>
  <!-- /Read Later -->

  <li class="c-tools-share__item">
    <a aria-label="Ir para a seção de comentários" href="#comentarios" class="c-tools-share__button c-tools-share__button--comment" title="Comentários">
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon--comments" aria-hidden="true">
  <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z" />
</svg>
      <span aria-label="Total de comentarios" class="c-tools-share__counter js-total-comments"></span>
    </a>
  </li>

  <li class="c-tools-share__item">
    <div data-modal-drop data-qty-collumn="3.4" class="c-modal-drop">
      <button aria-label="Ver todas opções de compartilhamento" data-trigger class="c-tools-share__button c-tools-share__button--neutral">
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 17 5" height="24" width="24" class="icon icon--more-options" aria-hidden="true">
  <path d="M2.5 0.5c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zm12 0c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zm-6 0c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2z"/>
</svg>
      </button>

      <div aria-hidden="true" data-content class="c-modal-drop__content c-modal-drop__content--no-padding">
        <div class="c-modal-drop__controls u-hidden-md">
          <button aria-label="Fechar seção de opções" data-close class="c-modal-drop__close">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close  icon--tiny " aria-hidden="true">
  <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
</svg>
          </button>
        </div>
        <div class="c-tools-share--larger">
          <ul class="c-tools-share__list"
            data-sharebar-utm-campaign-prefix="comp"
            data-sharebar-buttons="whatsapp facebook twitter messenger linkedIn rss email"
            data-sharebar-channel="ilustrada"
            data-triggered-byclick=".c-modal-drop [data-trigger]"
            data-sharebar-url="https://www1.folha.uol.com.br/ilustrada/2024/01/cenas-explicitas-de-sexo-em-pobres-criaturas-sao-honestas-defende-emma-stone.shtml"
            data-sharebar-uolpd-id="content"
            data-sharebar-text="Cenas explícitas de sexo em &#039;Pobres Criaturas&#039; são &#039;honestas&#039;, defende Emma Stone">

                        <li class="c-tools-share__item">
              <button aria-label="Copiar link" data-copy-link data-href="https://folha.com/pwa5z3fb" class="c-tools-share__button c-tools-share__button--copy-link" title="URL curta">
                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon--link  icon-- " aria-hidden="true">
  <path d="m 1.5200002,7.9999998 c 0,-1.368 1.112,-2.4799996 2.4799999,-2.4799996 l 3.1999996,0 0,-1.5199999 -3.1999996,0 C 1.7920001,4.0000003 1.5e-7,5.7920002 1.5e-7,7.9999998 1.5e-7,10.208 1.7920001,12 4.0000001,12 l 3.1999996,0 0,-1.519999 -3.1999996,0 c -1.368,0 -2.48,-1.1120012 -2.48,-2.4800012 l 0,0 z m 3.2799999,0.800001 6.3999999,0 0,-1.6000011 -6.4,0 0,1.6000011 0,0 z M 12,4.0000003 l -3.2000001,0 0,1.5199999 3.2000001,0 c 1.368,0 2.48,1.1119996 2.48,2.4799996 0,1.368 -1.112,2.4800012 -2.48,2.4800012 l -3.2000001,0 0,1.519999 L 12,12 c 2.208,0 4,-1.792 4,-4.0000002 0,-2.2079997 -1.792,-3.9999995 -4,-3.9999995 l 0,0 z"/>
</svg>
              </button>
              <span class="c-tools-share__button-name" aria-hidden="true">Copiar link</span>
            </li>
                      </ul>
        </div>
      </div>
    </div>
  </li>
</ul>
                  </div>

                  
                                      <div class="c-topics u-no-print js-continue-reading-hidden rs_skip">
  <h3 class="c-topics__title">Tópicos<span class="u-visually-hidden"> relacionados</span></h3>
  <p class="c-topics__subtitle">Leia tudo sobre o tema e siga:</p>
  <ul class="c-topics__list">
        <li class="c-topics__item">
      <a href="https://www1.folha.uol.com.br/folha-topicos/arte/">arte</a>
    </li>
        <li class="c-topics__item">
      <a href="https://www1.folha.uol.com.br/folha-topicos/cinema/">cinema</a>
    </li>
        <li class="c-topics__item">
      <a href="https://www1.folha.uol.com.br/folha-topicos/hollywood/">Hollywood</a>
    </li>
      </ul>
</div>

                                    

                  <!--sbs-ads-->

<div
  class="rs_skip"
  data-subscribe-advertising
  data-subscriber="[data-subscriber]"
  data-visitor="[data-visitor]">
  <div data-subscriber class="c-subscribe-ads c-subscribe-ads--azul is-hidden">
    <h3 class="c-subscribe-ads__title">sua assinatura pode valer ainda mais</h3>

    <p class="c-subscribe-ads__description">Você já conhece as vantagens de ser assinante da Folha?
Além de ter acesso a reportagens e colunas, você conta com newsletters exclusivas (<a href="https://login.folha.com.br/newsletter">conheça aqui</a>).
Também pode baixar nosso aplicativo gratuito na <a href="https://apps.apple.com/br/app/folha-de-s-paulo/id943058711?utm_source=materia&utm_medium=textofinal&utm_campaign=appletextocurto">Apple Store</a> ou na <a href="https://play.google.com/store/apps/details?id=br.com.folha.app&hl=pt_BR&utm_source=materia&utm_medium=textofinal&utm_campaign=androidtextocurto">Google Play</a> para receber alertas das principais notícias do dia.
A sua assinatura nos ajuda a fazer um jornalismo independente e de qualidade. Obrigado!</p>
  </div>
  <div data-visitor class="c-subscribe-ads c-subscribe-ads--azul is-hidden">
    <h3 class="c-subscribe-ads__title">sua assinatura vale muito</h3>

    <p class="c-subscribe-ads__description">Mais de 180 reportagens e análises publicadas a cada dia. Um time com mais de 200 colunistas e blogueiros. Um jornalismo profissional que fiscaliza o poder público, veicula notícias proveitosas e inspiradoras, faz contraponto à intolerância das redes sociais e traça uma linha clara entre verdade e mentira. Quanto custa ajudar a produzir esse conteúdo?</p>

    <a href="https://assinaturas.folha.com.br/420733" class="c-button c-button--primary">ASSINE POR R$ 1,90 NO 1º MÊS</a>
  </div>
</div>


<!--!-->

                  
                  
  <ul class="c-button-list u-no-print js-continue-reading-hidden rs_skip">
          <li class="c-button-list__item">
    <a href="//www1.folha.uol.com.br/enviesuanoticia/"
       onclick="UOLPD.Audience.countClick({category:'botoes-fim-materia',action:'clique',label:'envienoticia'})"
       class="c-button c-button--full-md">
       Envie sua notícia
    </a>
  </li>          <li class="c-button-list__item">
    <a href="//tools.folha.com.br/feedback?url=https://www1.folha.uol.com.br/ilustrada/2024/01/cenas-explicitas-de-sexo-em-pobres-criaturas-sao-honestas-defende-emma-stone.shtml"
       onclick="UOLPD.Audience.countClick({category:'botoes-fim-materia',action:'clique',label:'erramos'})"
       title="Comunicar erro - Site externo"
       target="_blank"
       class="c-button c-button--neutral c-button--full-md">
       Erramos?
    </a>
  </li>
      </ul>
                    

                  
                                      <div class="u-only-print rs_skip" aria-hidden="true">
                      <h4 class="c-heading">Endereço da página</h4>

                      <ul class="u-list-unstyled">
                        <li>https://www1.folha.uol.com.br/ilustrada/2024/01/cenas-explicitas-de-sexo-em-pobres-criaturas-sao-honestas-defende-emma-stone.shtml</li>
                      </ul>
                    </div>
                                    

                  
                                      <section id="comentarios" class="comments-article rs_skip u-visually-hidden u-no-print js-continue-reading-hidden" data-version="2" data-site="Folha de S.Paulo" data-section="ilustrada" data-service="folha" data-title="Cenas expl&iacute;citas de sexo em &#039;Pobres Criaturas&#039; s&atilde;o &#039;honestas&#039;, defende Emma Stone" data-url="https://www1.folha.uol.com.br/ilustrada/2024/01/cenas-explicitas-de-sexo-em-pobres-criaturas-sao-honestas-defende-emma-stone.shtml" data-type="news" data-id="1788370292615384">
  <header>
    <h2>Comentários</h2>

    <p class="terms hide">
      <small>Os comentários não representam a opinião do jornal; a responsabilidade é do autor da mensagem.</small>
    </p>

    <div class="user-info hide">
      <a>
        <i class="sprite support"></i><strong></strong>
      </a>
    </div>

  </header>

  <footer>
    <div class="terms-conditions">
      <a href="//comentarios1.folha.uol.com.br/termos">Termos e condições</a>
    </div>

    <a class="more c-button c-button--full-md hide">Todos os comentários</a>
    <a class="comment-action c-button c-button--primary c-button--full-md hide">Comente</a>

    
<div class="rs_skip">
  <div class="comments-tooltip comments-tooltip--blue">
    <div class="comments-tooltip--left c-tooltip is-top">
      <strong class="c-tooltip__head">Comentar é exclusividade para assinantes.</strong><br>
      <a href="https://assinaturas.folha.com.br/420734" data-remove-user="subscriber" class="c-tooltip__content">Assine a Folha por R$ 1,90 no 1º mês</a>
      <span class="c-tooltip__triangle js-tooltip-triangle"></span>
    </div>
  </div>
</div>


<!--//-->

  </footer>
</section>

<script type="text/template" class="rs_preserve rs_skip" id="tmpl-comment">
  <article>
    <header style="position: relative;">
      <div class="u-clearfix">
        <h3></h3>

        <span class="time"></span>
      </div>

      <div class="share">
        <a href="javascript:void();">
          <i class="sprite icon-plus"></i> Compartilhar
        </a>

        <span class="arrow"></span>

        <ul>
          <li><a class="share-facebook"><i class="section-sprite facebook"></i> Facebook</a></li>
          <li><a class="share-twitter"><i class="section-sprite twitter"></i> Twitter</a></li>
        </ul>
      </div>
    </header>

    <div class="comment-body">
      <i class="section-sprite comment-large"></i>
    </div>

    <footer>
      <a class="btn reply"><i class="section-sprite reply"></i> Responda</a>

      <div class="rating" style="position: static;">
        <a class="vote good">
          <i class="section-sprite comment-like"></i>
        </a>

        <div class="confirm-rating good hide">
          <img class="loading" src="//f.i.uol.com.br/folha/furniture/5.4/images/loading-alternate.gif">
        </div>

        <a class="vote bad">
          <i class="section-sprite comment-like"></i>
        </a>

        <div class="confirm-rating bad hide">
          <img class="loading" src="//f.i.uol.com.br/folha/furniture/5.4/images/loading-alternate.gif">
        </div>
      </div>

      <a class="to-report">
        <i class="section-sprite warning"></i> Denuncie
      </a>

      <div class="result"><p></p></div>
    </footer>
  </article>
</script>

<script type="text/template" class="rs_preserve rs_skip" id="tmpl-comment_dialog">
  <h4>Avaliar comentário como</h4>

  <div class="action">
    <a class="btn confirm">Confirmar</a>

    <div class="result"></div>

    <div class="evaluators hide">
      <h4>Também avaliaram</h4>
      <ul class="unstyled"></ul>
    </div>
  </div>
</script>
                                    
                </div>

                <div class="u-hidden-md">
                  <div
  data-newsletter-simple
  data-subscript="3"
  data-message=".js-message"
  data-button=".js-button"
  data-email=".js-email"
  class="c-newsletter rs_skip rs_preserve"
  >
    <h4 class="c-section-title c-section-title--brand c-section-title--small-spaced">notícias da folha no seu email </h4>
      <div class="c-form__default js-newsletter-form">
    
    <div class="c-newsletter__wrapper">
      <input type="email" class="c-newsletter__text js-email" name="email" placeholder="Digite seu e-mail"/>
      <button type="button" class="c-newsletter__button js-button"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" class="icon icon--arrow-rigth">
    <path fill="#333" fill-rule="evenodd" d="M21 9L.01 0 0 7l15 2-15 2 .01 7z"/>
</svg>
</button>
    </div>
    
    <p class="c-form__info-message c-newsletter__obs js-message is-hidden" aria-busy="false" aria-hidden="true">Carregando...</p>
  </div>
</div>


<!--!-->                </div>
                
                <!-- Script Embed Taboola Below -->
<div class="c-taboola rs_skip rs_preserve" id="taboola-below-article-thumbnails"></div>
<!-- /Script Embed Taboola Below -->                 <!-- Script Embed Taboola Below Dark -->
<div class="c-taboola--dark rs_skip rs_preserve" id="taboola-below-article-thumbnails-dark"></div>
<!-- /Script Embed Taboola Below Dark -->                
              </div>
            </div>
          </div>

          
          <aside class="col-fixed col-fixed--md-300 u-no-print rs_skip">
                          <div class="u-visible-md">
                <div
  data-newsletter-simple
  data-subscript="3"
  data-message=".js-message"
  data-button=".js-button"
  data-email=".js-email"
  class="c-newsletter rs_skip rs_preserve"
  >
    <h4 class="c-section-title c-section-title--brand c-section-title--small-spaced">notícias da folha no seu email </h4>
      <div class="c-form__default js-newsletter-form">
    
    <div class="c-newsletter__wrapper">
      <input type="email" class="c-newsletter__text js-email" name="email" placeholder="Digite seu e-mail"/>
      <button type="button" class="c-newsletter__button js-button"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" class="icon icon--arrow-rigth">
    <path fill="#333" fill-rule="evenodd" d="M21 9L.01 0 0 7l15 2-15 2 .01 7z"/>
</svg>
</button>
    </div>
    
    <p class="c-form__info-message c-newsletter__obs js-message is-hidden" aria-busy="false" aria-hidden="true">Carregando...</p>
  </div>
</div>


<!--!-->              </div>

              
              
              
              <div class="u-global-margin-bottom-component">
                <h4 class="c-section-title c-section-title--brand">Relacionadas</h4>
<ul class="c-newslist c-newslist--no-gap">
    <li>
    <div class="c-headline c-headline--horizontal-small">
      <a
        href="https://www.bbc.com/portuguese/articles/c13y6l1n8dko"
        class="c-headline__url"
        rel="nofollow"       >
        
        <h2 class="c-headline__title">
                    Emmy: confira lista completa dos vencedores do melhor da TV nos EUA
        </h2>
      </a>
    </div>
  </li>
    <li>
    <div class="c-headline c-headline--horizontal-small">
      <a
        href="https://www.bbc.com/portuguese/articles/c972v1lp7leo"
        class="c-headline__url"
        rel="nofollow"       >
        
        <h2 class="c-headline__title">
                    O episódio de &#039;Jornada nas Estrelas&#039; que previu nos anos 1990 crise que EUA enfrenta hoje
        </h2>
      </a>
    </div>
  </li>
    <li>
    <div class="c-headline c-headline--horizontal-small">
      <a
        href="https://www.bbc.com/portuguese/articles/czqv7wjnz85o"
        class="c-headline__url"
        rel="nofollow"       >
        
        <h2 class="c-headline__title">
                    A dura crítica de Jodie Foster à geração Z: trabalhar com eles pode ser &#039;muito irritante&#039;
        </h2>
      </a>
    </div>
  </li>
  </ul>

                
                                  
                  <!-- Script Embed Taboola Right Rail -->
<div class="c-taboola rs_skip rs_preserve" id="taboola-right-rail-thumbnails"></div>
<!-- /Script Embed Taboola Right Rail -->                  <!-- Script Embed Taboola Right Rail Dark -->
<div class="c-taboola--dark rs_skip rs_preserve" id="taboola-right-rail-thumbnails-dark"></div>
<!-- /Script Embed Taboola Right Rail Dark -->                  
                  
<div class="c-estudio-folha-headline c-estudio-folha-headline--newstext">
  <div id="banner-native-related" class="c-advertising__banner-area c-advertising__banner-area--no-margin">
  </div>
</div>

                              </div>

              
<div class="c-advertising c-advertising--300x250" >
  <div id="banner-300x250-area" class="c-advertising__banner-area"></div>
</div>


                              <div class="c-wildcard-box u-global-margin-bottom-component">
    <h3 class="c-section-title c-section-title--brand">Veja também</h3>
  <ul class="c-newslist c-newslist--no-gap">
        <li>
      <div class="c-headline c-headline--small">
                <div class="c-headline__media-wrapper c-image-aspect-ratio c-image-aspect-ratio--5x2">
           <a href="https://www1.folha.uol.com.br/folha-topicos/luxo/">             <img class="c-headline__image c-image-aspect-ratio__image c-lazyload"
              data-src="https://f.i.uol.com.br/fotografia/2023/12/18/17029435956580db6bcff33_1702943595_5x2_sm.jpg"
              alt="(FILES) This photo taken on June 21, 2007, shows an employee holding a 129,000 USD crocodile Hermes Birkin Bag during a private opening for the new Hermes store on Wall Street in New York. At the end of May 2013, French auction house &#039;ArtCurial&#039; claimed "
            />

            <noscript>
              <img class="c-headline__image c-image-aspect-ratio__image"
                src="https://f.i.uol.com.br/fotografia/2023/12/18/17029435956580db6bcff33_1702943595_5x2_sm.jpg"
                alt="(FILES) This photo taken on June 21, 2007, shows an employee holding a 129,000 USD crocodile Hermes Birkin Bag during a private opening for the new Hermes store on Wall Street in New York. At the end of May 2013, French auction house &#039;ArtCurial&#039; claimed "
              />
            </noscript>
           </a>         </div>
                <div class="c-headline__wrapper">
          <div class="c-headline__head">
                        <h3 class="c-headline__kicker c-kicker">
                              luxo
                          </h3>
                        <div data-modal-drop data-qty-collumn="3.4" class="c-modal-drop">
<button data-trigger type="button" name="button" class="c-headline__action">
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--share ">
    <path d="m 12.818311,11.294921 c 1.280064,0 2.333667,1.054406 2.333667,2.333668 0,1.279261 -1.054406,2.371411 -2.333667,2.371411 -1.279262,0 -2.333668,-1.09215 -2.333668,-2.371411 0,-0.187915 0,-0.377435 0.03774,-0.526802 L 4.8407964,9.789199 A 2.4252158,2.4252158 0 0 1 0.772537,8.020076 2.4252158,2.4252158 0 0 1 4.8383872,6.250954 L 10.48384,2.9761092 A 2.8974102,2.8974102 0 0 1 10.40915,2.4091547 C 10.40915,1.0921502 11.5013,0 12.818304,0 c 1.317008,0 2.409159,1.0921502 2.409159,2.4091547 0,1.3170047 -1.092151,2.4091553 -2.409155,2.4091553 -0.640032,0 -1.204577,-0.263401 -1.656695,-0.677776 L 5.5161598,7.453925 c 0.036941,0.187914 0.074684,0.377434 0.074684,0.564545 0,0.187111 -0.037744,0.377434 -0.075486,0.562137 l 5.7217422,3.31339 c 0.417587,-0.377434 0.979724,-0.602289 1.582012,-0.602289 z"></path>
  </svg>
  
  <span class="u-visually-hidden">Compartilhar luxo: Leia as últimas notícias sobre o mundo do luxo, suas marcas, atores e conflitos</span>
</button>

<div aria-hidden="true" data-content class="c-modal-drop__content c-modal-drop__content--no-padding">
  <div class="c-modal-drop__controls u-hidden-md">
    <button data-close="" class="c-modal-drop__close">
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close  icon--tiny ">
        <title>Ícone fechar</title>
        <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"></path>
      </svg>
    </button>
  </div>

  <div class="c-tools-share--larger">
    <ul class="c-tools-share__list"
      data-sharebar-buttons="facebook whatsapp twitter messenger linkedIn email"
      data-triggered-byclick=".c-modal-drop [data-trigger]"
      data-sharebar-url="https://www1.folha.uol.com.br/folha-topicos/luxo/"
      data-sharebar-utm-campaign-prefix="comp" 
      data-sharebar-uolpd-id="internal"
      data-sharebar-text="luxo: Leia as últimas notícias sobre o mundo do luxo, suas marcas, atores e conflitos">
    </ul>
  </div>
</div>
</div>
          </div>
          <div class="c-headline__content">
             <a href="https://www1.folha.uol.com.br/folha-topicos/luxo/" class="c-headline__url">                             <h2 class="c-headline__title">
                                Leia as últimas notícias sobre o mundo do luxo, suas marcas, atores e conflitos
              </h2>
                           </a>           </div>
        </div>
      </div>
    </li>
            <li>
      <div class="c-headline c-headline--small">
        <div class="c-headline__wrapper">
          <div class="c-headline__head">
                        <h3 class="c-headline__kicker c-kicker">
                              quadrinhos
                          </h3>
                        <div data-modal-drop data-qty-collumn="3.4" class="c-modal-drop">
<button data-trigger type="button" name="button" class="c-headline__action">
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--share ">
    <path d="m 12.818311,11.294921 c 1.280064,0 2.333667,1.054406 2.333667,2.333668 0,1.279261 -1.054406,2.371411 -2.333667,2.371411 -1.279262,0 -2.333668,-1.09215 -2.333668,-2.371411 0,-0.187915 0,-0.377435 0.03774,-0.526802 L 4.8407964,9.789199 A 2.4252158,2.4252158 0 0 1 0.772537,8.020076 2.4252158,2.4252158 0 0 1 4.8383872,6.250954 L 10.48384,2.9761092 A 2.8974102,2.8974102 0 0 1 10.40915,2.4091547 C 10.40915,1.0921502 11.5013,0 12.818304,0 c 1.317008,0 2.409159,1.0921502 2.409159,2.4091547 0,1.3170047 -1.092151,2.4091553 -2.409155,2.4091553 -0.640032,0 -1.204577,-0.263401 -1.656695,-0.677776 L 5.5161598,7.453925 c 0.036941,0.187914 0.074684,0.377434 0.074684,0.564545 0,0.187111 -0.037744,0.377434 -0.075486,0.562137 l 5.7217422,3.31339 c 0.417587,-0.377434 0.979724,-0.602289 1.582012,-0.602289 z"></path>
  </svg>
  
  <span class="u-visually-hidden">Compartilhar quadrinhos: Veja os últimos lançamentos em HQs e graphic novels e saiba mais sobre seus autores</span>
</button>

<div aria-hidden="true" data-content class="c-modal-drop__content c-modal-drop__content--no-padding">
  <div class="c-modal-drop__controls u-hidden-md">
    <button data-close="" class="c-modal-drop__close">
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close  icon--tiny ">
        <title>Ícone fechar</title>
        <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"></path>
      </svg>
    </button>
  </div>

  <div class="c-tools-share--larger">
    <ul class="c-tools-share__list"
      data-sharebar-buttons="facebook whatsapp twitter messenger linkedIn email"
      data-triggered-byclick=".c-modal-drop [data-trigger]"
      data-sharebar-url="https://www1.folha.uol.com.br/folha-topicos/quadrinhos/"
      data-sharebar-utm-campaign-prefix="comp" 
      data-sharebar-uolpd-id="internal"
      data-sharebar-text="quadrinhos: Veja os últimos lançamentos em HQs e graphic novels e saiba mais sobre seus autores">
    </ul>
  </div>
</div>
</div>
          </div>
          <div class="c-headline__content">
             <a href="https://www1.folha.uol.com.br/folha-topicos/quadrinhos/" class="c-headline__url">                             <h2 class="c-headline__title">
                                Veja os últimos lançamentos em HQs e graphic novels e saiba mais sobre seus autores
              </h2>
                           </a>           </div>
        </div>
      </div>
    </li>
      </ul>
  </div>

<!--//-->
              
              <div>
                
<div class="c-advertising c-advertising--300x250"  data-sticky="" >
  <div id="banner-300x250-2-area" class="c-advertising__banner-area"></div>
</div>

              </div>

              
			<div class="c-estudio-folha">
				<!-- Header -->
				<div class="c-estudio-folha__header">
					<div class="c-estudio-folha__logo">
						<a href="//estudio.folha.uol.com.br/institucional/">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="206px" height="34px" viewBox="0 0 206 34" enable-background="new 0 0 206 34" xml:space="preserve">  <image id="image0" width="206" height="34" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAAiCAMAAAAgRxYPAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
							AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAolBMVEUAAAAAAAAAAAAAAAAA
							AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADiEBviEBviEBviEBviEBviEBviEBvi
							EBviEBviEBviEBviEBs1q+E1q+E1q+E1q+E1q+E1q+E1q+E1q+E1q+E1q+EDBAUDBAUDBAUDBAUD
							BAUDBAUDBAUDBAUDBAUDBAUDBAUAAADiEBs1q+EDBAX////6qz2FAAAAMXRSTlMAEEBQgL8wYJ/v
							II+vcM/fUDCfj0CA79+vvyBwIBBwYM+vQO8w32BAr48wgO/fcJ9Qcp8ipwAAAAFiS0dENd622WsA
							AAAHdElNRQflBBUBFju0Sxc4AAAEy0lEQVRYw+2YC3PcNBCALdl6+kUL15bCQfqEJAetkvz/34a0
							eq10FvG1MB2Y7EwmtqzT7qdd7a7ddU/yJP8rIbSSb23Q1wk1lXxrg0rph4HUY4zx5nwipAIMZuXf
							xuGXBoJWRp4NGuN+OU56+zcseWXKOJrOQ/9PRx67NBCYWc4HAcdG1fAYjog6xOIVKulczVmU0iia
							IjVyS2PWevnvniFNK0NybgpnI76djSLnk0AdN2Z+DKdT8J84Ly197x4oG6darjBl8bqE/8E6au0D
							1V6FpdxtHdjPv0eaGjsahRrMaENt65T43eOt0EE4Ev67gdVti/MR7A8tgwPuwLIhXcHmFndOfjgc
							Xrw8HJ59GQ7dPPM5GB7D6d3/2d0K8IO7kvtx4JdltB/urBy+zDsN2Y/TraYjEEAQs8SEy504Ezwo
							M87zu7tXWdM5jp6HYaDeGXQ2i8142lbD7BdKSZ4pdMRJwx0d/PgGTnRJ2OIlOGonjk/5ojD35Y+v
							XrRxdMgrqwhr+fWwl4IziIwP/UD0kfDn2kiSlARbOWibYoTFR9NeHO4XnrC9r22g/fS6hcPtBshZ
							jNak0aYYthhlM57YwCF2Z5dhmGwhKnCkS7+DW0DxCmcGbSuycISd24sTt7dryRnOYhYdtx4iKGCc
							48jgdXBSxrGndQK3zCYm9YQzgTaDLBzCo304tujBk74w+edjE4fnuSs4tYmjc5mZEA7JXUPvHJxx
							rJOV00Zx/F+GYzUYFKlBfvkV4bAhiS/t8dEAAE2cOZdnjXBwnZVGIZxoIsVl3uPwfTjUJpA1RCeS
							qzcIxxS6eJ03mjjYryzjLCZ3ETxY7ZXY/VobOHQTB/qV8qCN/rChWv723b2Vd++jITI3oBoGlNiF
							g2sNwilK0OoNSWdHXoRT7LOTxR6EHg84OV7d318dkyEbmU1Nc8L/G5y8RRmHF2lnqnDERcGWPett
							JFBwVd0YvLE42ZC67pDBd30zeQwn96IZhxY4/vhlHJ1xZozT7cLpzWpDiFWNwfHD2/cfmt4B04fY
							6l4cbDWOLHCQrTsSdY0zovDLB+J49H9tHOejWRmlvxaHVcHmRdVllBU4QjRwbElkkO3rxuBM4YZw
							KBJtnBW93WQcUqQC5edUOKxuckaMQ5yiLRwdQsy3Vuit6+NvTRwxJGvGqu7gUKDumE9olVai5hs4
							c/BI8hTFOKKFI0IVE3Vj8Pt1E4dlI8syyvPx60GTyAP2pS7hCFRGp1DvKhydb3UsihlnauHIYBop
							GoOb29vTH7e3N9s4cz5l/hEPe9Kl5oWsXpNK4YebnNAbhW3st3B8uPR+y8JVwtGmhZOiGzpyFRf7
							8/TwcPrY8I57AZEuQmxChFQQ499phql0DZqsk+DTDV0MxrFnjrlhMpQHBOHA+xuLF7LDOHMLR6dT
							KcrG4Prh4VMOrkJ82+9F9XErl2XxoAq+lMn8JmBzjbVIFC8IrhD7BASniCYVS4pj7rZkovBi5CZp
							uSAj2OBfmNSUXr5YP9oZTLrWd/RzVxli/fTp+tTEsfATbF4oox1J3/q8lommHO2/xNhlR/hsGIcJ
							TFQTjV4tlkdT/Gpd/aWUjenDUvpi5T2Sq3DyXnfzues+33T7hVB+wey9ov/736ufZL/8BbSOHErv
							uiGKAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTIxVDAxOjIyOjU5KzAzOjAwxkpapgAAACV0
							RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yMVQwMToyMjo1OSswMzowMLcX4hoAAAAZdEVYdFNvZnR3
							YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC"></image>
							</svg>
						</a>
					</div>
				</div>

				<!-- Main -->
				<div class="c-estudio-folha__main">
					<div class="c-estudio-folha__rotate">
						<div class="c-rotate-generic" data-rotate-generic data-rotate-generic-autoplay="5000"
							data-rotate-generic-effect="slider" data-rotate-generic-elDots=".js-estudio-folha__control-dots"
							data-rotate-generic-prev=".js-estudio-folha__control-prev"
							data-rotate-generic-next=".js-estudio-folha__control-next"
							data-rotate-generic-btnPause=".js-estudio-folha__control-pause"
							data-rotate-generic-labelPause="parar|retomar">

							<div class="c-rotate-generic__stage-outer">

										<button
											class="c-estudio-folha__control c-estudio-folha__control--prev js-estudio-folha__control-prev">
											<svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
												class="icon icon--chevron-left  icon--estudio-folha-control ">
												<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
											</svg>
										</button>
										<button
											class="c-estudio-folha__control c-estudio-folha__control--next js-estudio-folha__control-next">
											<svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
												class="icon icon--chevron-right  icon--estudio-folha-control ">
												<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
											</svg>
										</button>

								<div class="c-rotate-generic__stage js-rotate-generic__stage">

										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/previdencia-e-futuro/2024/01/previdencia-privada-e-aliada-em-todas-as-fases-da-vida.shtml?utm_source=previdencia-privada&utm_campaign=todas-as-fases-da-vida" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/240151.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/240151.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/previdencia-e-futuro/2024/01/previdencia-privada-e-aliada-em-todas-as-fases-da-vida.shtml?utm_source=previdencia-privada&utm_campaign=todas-as-fases-da-vida" class="c-estudio-folha__link">

														<p><b>Previdência Privada é aliada em todas as fases da vida</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/220495.png" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/220495.png" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/heineken/2024/01/sabor-de-heineken-so-heineken.shtml?utm_source=heineken&utm_campaign=sabor-da-cerveja" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/240109.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/240109.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/heineken/2024/01/sabor-de-heineken-so-heineken.shtml?utm_source=heineken&utm_campaign=sabor-da-cerveja" class="c-estudio-folha__link">

														<p><b>Sabor de Heineken, só Heineken; cervejaria revela segredos de seu sabor único</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/221042.jpeg" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/221042.jpeg" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/previdencia-e-futuro/2024/01/previdencia-privada-precisa-alinhar-objetivos-com-o-perfil-do-investidor.shtml?utm_source=bradesco-previdencia&utm_campaign=perfil-do-investidor" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/240091.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/240091.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/previdencia-e-futuro/2024/01/previdencia-privada-precisa-alinhar-objetivos-com-o-perfil-do-investidor.shtml?utm_source=bradesco-previdencia&utm_campaign=perfil-do-investidor" class="c-estudio-folha__link">

														<p><b>Previdência Privada precisa alinhar objetivos com o perfil do investidor</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/220495.png" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/220495.png" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/colgate/2023/12/colgate-une-saude-moradia-e-protecao-ambiental-de-olho-no-futuro.shtml?utm_source=colgate&utm_campaign=une-saude-moradia" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/233541.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/233541.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/colgate/2023/12/colgate-une-saude-moradia-e-protecao-ambiental-de-olho-no-futuro.shtml?utm_source=colgate&utm_campaign=une-saude-moradia" class="c-estudio-folha__link">

														<p><b>Colgate une saúde, moradia e sustentabilidade de olho no futuro</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/223229.jpeg" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/223229.jpeg" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/minasgerais/2023/12/turismo-em-minas-gerais-e-o-que-mais-cresce-no-brasil.shtml?utm_source=minas-gerais&utm_campaign=mais-cresce-no-brasil" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/233566.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/233566.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/minasgerais/2023/12/turismo-em-minas-gerais-e-o-que-mais-cresce-no-brasil.shtml?utm_source=minas-gerais&utm_campaign=mais-cresce-no-brasil" class="c-estudio-folha__link">

														<p><b>Turismo em Minas Gerais é o que mais cresce no Brasil</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/2133529.jpeg" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/2133529.jpeg" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/hospital-sirio-libanes/2023/12/centro-de-cardiologia-do-sirio-libanes-chega-aos-15-anos-com-padrao-internacional.shtml?utm_source=sirio-libanes&utm_campaign=centro-de-cardiologia" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/233561.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/233561.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/hospital-sirio-libanes/2023/12/centro-de-cardiologia-do-sirio-libanes-chega-aos-15-anos-com-padrao-internacional.shtml?utm_source=sirio-libanes&utm_campaign=centro-de-cardiologia" class="c-estudio-folha__link">

														<p><b>Centro de Cardiologia do Sírio-Libanês chega aos 15 anos com padrão internacional</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/213196.jpeg" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/213196.jpeg" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/nestle-grego/2023/12/maradelicia-e-deligostoso-iogurte-nestle-grego-de-a-iogurteria-nestle-conquista-os-brasileiros.shtml?utm_source=nestle&utm_campaign=iogurte-nestle-grego" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/2335412.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/2335412.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/nestle-grego/2023/12/maradelicia-e-deligostoso-iogurte-nestle-grego-de-a-iogurteria-nestle-conquista-os-brasileiros.shtml?utm_source=nestle&utm_campaign=iogurte-nestle-grego" class="c-estudio-folha__link">

														<p><b>"Maradelícia" e "deligostoso", iogurte Nestlé Grego conquista os brasileiros</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/2335411.jpeg" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/2335411.jpeg" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/unimed/2023/12/unimed-investe-para-ampliar-rede-de-servicos.shtml?utm_source=unimed&utm_campaign=ampliar-rede" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/2335119.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/2335119.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/unimed/2023/12/unimed-investe-para-ampliar-rede-de-servicos.shtml?utm_source=unimed&utm_campaign=ampliar-rede" class="c-estudio-folha__link">

														<p><b>Unimed investe para ampliar rede de serviços</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/223453.jpeg" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/223453.jpeg" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/cielo/2023/12/seguranca-e-prevencao-contra-fraudes-ajudam-varejo-na-hora-das-vendas.shtml?utm_source=cielo&utm_campaign=seguranca-e-prevencao" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/233521.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/233521.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/cielo/2023/12/seguranca-e-prevencao-contra-fraudes-ajudam-varejo-na-hora-das-vendas.shtml?utm_source=cielo&utm_campaign=seguranca-e-prevencao" class="c-estudio-folha__link">

														<p><b>Segurança e prevenção contra fraudes ajudam varejo na hora das vendas</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/223462.png" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/223462.png" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/sabesp/2023/12/aos-50-anos-sabesp-foca-inovacao-e-sustentabilidade.shtml?utm_source=sabesp&utm_campaign=aos-50-anos" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/233515.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/233515.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/sabesp/2023/12/aos-50-anos-sabesp-foca-inovacao-e-sustentabilidade.shtml?utm_source=sabesp&utm_campaign=aos-50-anos" class="c-estudio-folha__link">

														<p><b>Aos 50 anos, Sabesp foca inovação e sustentabilidade</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/233514.png" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/233514.png" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/novonordisk-obesidade/2023/12/os-perigos-da-desinformacao-em-saude.shtml?utm_source=Novo+Nordisk&utm_campaign=fake-news" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/233488.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/233488.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/novonordisk-obesidade/2023/12/os-perigos-da-desinformacao-em-saude.shtml?utm_source=Novo+Nordisk&utm_campaign=fake-news" class="c-estudio-folha__link">

														<p><b>Os perigos da desinformação em saúde</b></p>

														<img data-src="http://f.i.uol.com.br/estudiofolha/images/2129519.png" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="http://f.i.uol.com.br/estudiofolha/images/2129519.png" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>
										<div class="c-rotate-generic__item js-rotate-generic__item">
											<div class="c-estudio-folha__content">
												<div class="c-estudio-folha__image-main">
															<a href="https://estudio.folha.uol.com.br/abramge/2023/12/os-desafios-e-oportunidades-para-a-saude-suplementar.shtml?utm_source=Abramge&utm_campaign=saude-suplementar" class="c-estudio-folha__link">

															<img data-src="https://f.i.uol.com.br/estudiofolha/images/233443.jpeg" alt="" class="c-lazyload">

															<noscript>
																<img src="https://f.i.uol.com.br/estudiofolha/images/233443.jpeg" alt="">
															</noscript>
													</a>
												</div>

														<a href="https://estudio.folha.uol.com.br/abramge/2023/12/os-desafios-e-oportunidades-para-a-saude-suplementar.shtml?utm_source=Abramge&utm_campaign=saude-suplementar" class="c-estudio-folha__link">

														<p><b>Os desafios e oportunidades para a saúde suplementar</b></p>

														<img data-src="https://f.i.uol.com.br/estudiofolha/images/233444.jpeg" class="c-estudio-folha__sponsored-logo c-lazyload"
															alt="">

														<noscript>
															<img src="https://f.i.uol.com.br/estudiofolha/images/233444.jpeg" class="c-estudio-folha__sponsored-logo"
																alt="">
														</noscript>
												</a>
											</div>
										</div>

								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Footer -->
						<div class="c-estudio-folha__footer">
							<div class="c-estudio-folha__dots js-estudio-folha__control-dots"></div>
							<div class="c-estudio-folha__pause"><button class="js-estudio-folha__control-pause">parar</button></div>
						</div>
			</div>



	<!--// -->

              
<div class="c-advertising c-advertising--300x600"  data-sticky="" >
  <div id="banner-300x600-area" class="c-advertising__banner-area"></div>
</div>

                      </aside>
          
        </div>
      </div>
    </div>
    
  </article>

        
  
      <div class="block t-soft u-no-print">
      <div class="container">
        <div class="c-most-read">
          <div class="c-most-read__head">
            <h2 class="c-most-read__title c-section-title">Mais lidas <span class="c-most-read__section c-section-title__thin"> em  Ilustrada</span></h2>
            <a href="//www1.folha.uol.com.br/maispopulares/"
               class="c-button c-most-read__see-more"
               title="Ver todas matérias mais lidas">
              Ver todas
            </a>
          </div>

          <ol class="c-most-read__list">
                 <li><a href="https://www1.folha.uol.com.br/ilustrada/2024/01/cenas-explicitas-de-sexo-em-pobres-criaturas-sao-honestas-defende-emma-stone.shtml">
                    <strong>BBC News Brasil</strong>
                    Cenas explícitas de sexo em &apos;Pobres Criaturas&apos; são &apos;honestas&apos;, defende Emma Stone
     </a></li>
     <li><a href="https://www1.folha.uol.com.br/ilustrada/2024/01/dani-calabresa-quer-enterrar-caso-marcius-melhem-sofri-mais-do-que-deveria.shtml">
                    <strong>Artes Cênicas</strong>
                    Dani Calabresa quer enterrar caso Marcius Melhem: &apos;Sofri mais do que deveria&apos;
     </a></li>
     <li><a href="https://www1.folha.uol.com.br/ilustrada/2024/01/governo-lula-libera-rouanet-para-107-mil-projetos-com-captacao-de-r-2-bi-veja-lista.shtml">
                    <strong>Ilustrada</strong>
                    Governo Lula libera Rouanet para 10,7 mil projetos, com captação de R$ 2 bi; veja lista
     </a></li>
     <li><a href="https://www1.folha.uol.com.br/ilustrada/2024/01/por-que-turma-da-monica-jovem-que-aposta-no-terror-irritou-fas-com-novo-elenco.shtml">
                    <strong>Filmes</strong>
                    Por que &apos;Turma da Mônica Jovem&apos;, que aposta no terror, irritou fãs com novo elenco
     </a></li>
     <li><a href="https://www1.folha.uol.com.br/ilustrada/2024/01/zorro-ganha-nova-serie-no-prime-video-que-e-uma-superproducao-mexicana.shtml">
                    <strong>Multitela</strong>
                    Zorro ganha nova série no Prime Video que é uma superprodução mexicana
     </a></li>
          </ol>
        </div>
      </div>
    </div>
    

  
      <div class="block u-no-print">
      <div class="container">
        <div class="flex flex--gutter flex--col flex--md-row">
          <div class="flex-cell">
            <h4 class="c-section-title c-section-title--brand">
              <a href="https://www1.folha.uol.com.br/ultimas-noticias/">
                últimas notícias
              </a>
            </h4>
            <div class="c-headline c-headline--newslist">
    
          <div class="c-headline__media-wrapper">
        <div class="c-image-aspect-ratio c-image-aspect-ratio--3x2">
          <a href="https://www1.folha.uol.com.br/poder/2024/01/medida-do-governo-lula-cria-novo-atrito-com-bancada-evangelica.shtml" class="c-image-aspect-ratio__link">
            <img class="c-headline__image c-lazyload c-image-aspect-ratio__image"
            data-src="https://f.i.uol.com.br/fotografia/2024/01/17/170551840465a82544e79d7_1705518404_3x2_sm.jpg"
            alt="Medida do governo Lula cria novo atrito com bancada evangélica">

            <noscript>
              <img class="c-headline__image"
              src="https://f.i.uol.com.br/fotografia/2024/01/17/170551840465a82544e79d7_1705518404_3x2_sm.jpg"
              alt="Medida do governo Lula cria novo atrito com bancada evangélica">
            </noscript>
          </a>
        </div>
      </div>
        

    <div class="c-headline__wrapper">
      <div class="c-headline__head">

        <h3 class="c-headline__kicker c-kicker">
                        <a href="https://www1.folha.uol.com.br/poder/governo-lula/">
                          Governo Lula
                        </a>
                      </h3>
                
        
        <div data-modal-drop data-qty-collumn="3.4" class="c-modal-drop rs_skip rs_preserve">
          <button data-trigger type="button" name="button" class="c-headline__action">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--share " aria-hidden="true">
  <path d="m 12.818311,11.294921 c 1.280064,0 2.333667,1.054406 2.333667,2.333668 0,1.279261 -1.054406,2.371411 -2.333667,2.371411 -1.279262,0 -2.333668,-1.09215 -2.333668,-2.371411 0,-0.187915 0,-0.377435 0.03774,-0.526802 L 4.8407964,9.789199 A 2.4252158,2.4252158 0 0 1 0.772537,8.020076 2.4252158,2.4252158 0 0 1 4.8383872,6.250954 L 10.48384,2.9761092 A 2.8974102,2.8974102 0 0 1 10.40915,2.4091547 C 10.40915,1.0921502 11.5013,0 12.818304,0 c 1.317008,0 2.409159,1.0921502 2.409159,2.4091547 0,1.3170047 -1.092151,2.4091553 -2.409155,2.4091553 -0.640032,0 -1.204577,-0.263401 -1.656695,-0.677776 L 5.5161598,7.453925 c 0.036941,0.187914 0.074684,0.377434 0.074684,0.564545 0,0.187111 -0.037744,0.377434 -0.075486,0.562137 l 5.7217422,3.31339 c 0.417587,-0.377434 0.979724,-0.602289 1.582012,-0.602289 z"/>
</svg>
 <span class="u-visually-hidden">Compartilhar</span>
          </button>
          <div aria-hidden="true" data-content class="c-modal-drop__content c-modal-drop__content--no-padding">
            <div class="c-modal-drop__controls u-hidden-md">
              <button data-close class="c-modal-drop__close">
                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close  icon--tiny " aria-hidden="true">
  <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
</svg>
              </button>
            </div>
            <div class="c-tools-share--larger">
              <ul class="c-tools-share__list"
                data-sharebar-utm-campaign-prefix="comp"
                data-sharebar-buttons="facebook whatsapp twitter messenger linkedIn email"
                data-triggered-byclick=".c-modal-drop [data-trigger]"
                data-sharebar-url="https://www1.folha.uol.com.br/poder/2024/01/medida-do-governo-lula-cria-novo-atrito-com-bancada-evangelica.shtml"
                data-sharebar-uolpd-id="internal"
                data-sharebar-text="Medida do governo Lula cria novo atrito com bancada evangélica">
              </ul>
            </div>
          </div>
        </div>
        

        
        <div class="c-tools-share c-tools-share--margin-left rs_skip rs_preserve">
          <ul class="c-tools-share__list" data-sharebar-url="https://www1.folha.uol.com.br/poder/2024/01/medida-do-governo-lula-cria-novo-atrito-com-bancada-evangelica.shtml" data-sharebar-uolpd-id="internal">
            <script type="application/json" data-sharebar-json>
  {
    "url": "https://www1.folha.uol.com.br/poder/2024/01/medida-do-governo-lula-cria-novo-atrito-com-bancada-evangelica.shtml",
    "title": "Medida do governo Lula cria novo atrito com bancada evangélica",
    "share_title": "",
    "subtitle": "Receita suspendeu isenção a pastores editada por Bolsonaro antes da eleição de 2022; Órgão diz que cumpriu proposta do Ministério Público perante o TCU",
    "cover_date": "2024-01-17 23:02:00",
    "kickers": [{"name":"Governo Lula","link_url":"https:\/\/www1.folha.uol.com.br\/poder\/governo-lula\/","type":"default"}]
  }
</script>

            <li class="c-tools-share__item" data-share-button="read-later">
              <div data-modal-drop data-qty-collumn="4.3" class="c-modal-drop">
                <button title="Salvar" data-trigger class="c-tools-share__button c-tools-share__button--read-later-light u-no-padding is-loading" disabled>
                  <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" version="1.1" class="icon icon--fill icon--read-later " aria-hidden="true">
                    <path d="m 7.9505377,12.526649 -5.597811,2.425714 0,-13.5280486 c 0,-0.55978107 0.3732341,-0.93295916 0.9330152,-0.93295916 l 9.3295921,0 c 0.559781,0 0.933015,0.37317809 0.933015,0.93295916 l 0,13.5280486 -5.5978113,-2.425714 z" class="icon--fill" fill="none" />
                    <path d="m 12.398666,1.7857927 0,11.5437043 -3.7295021,-1.598359 -0.7103372,-0.266393 -0.7103371,0.266393 -3.7295029,1.598359 0,-11.5437043 8.8796793,0 m 0,-1.77594912 -8.8796793,0 c -0.9768631,0 -1.7760423,0.79917916 -1.7760423,1.77594912 l 0,14.2076353 6.2158823,-2.663931 6.2158823,2.663931 0,-14.2076353 c 0,-0.97676996 -0.799179,-1.77594912 -1.776043,-1.77594912 l 0,0 z"/>
                  </svg>
                  <span class="u-visually-hidden">Salvar para ler depois</span>
                </button>

                <div data-content class="c-modal-drop__content">
                  <div class="c-modal-drop__controls u-hidden-md">
                    <span class="c-modal-drop__controls__title">Salvar artigos</span>
                    <button data-close class="c-modal-drop__close">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close ">
                        <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
                      </svg>
                    </button>
                  </div>

                  <div class="c-modal-drop__text c-modal-drop__text--secondary c-modal-drop__text--small text-center">
                    <p>Recurso exclusivo para assinantes</p>
                    <p>
                      <a class="u-text-uppercase" data-read-later-link="subscribe" href="https://secure.folha.com.br/folha?gid=FOL">assine</a>
                      <span>ou</span>
                      <a class="u-text-uppercase" data-read-later-link="login" data-sign-in href="https://paywall.folha.uol.com.br/folha/login?return_url=">faça login</a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
      </div>

      
      <div class="c-headline__content">
        <a href="https://www1.folha.uol.com.br/poder/2024/01/medida-do-governo-lula-cria-novo-atrito-com-bancada-evangelica.shtml">
          <h2 class="c-headline__title">Medida do governo Lula cria novo atrito com bancada evangélica</h2>

          <p class="c-headline__standfirst">
            Receita suspendeu isenção a pastores editada por Bolsonaro antes da eleição de 2022; Órgão diz que cumpriu proposta do Ministério Público perante o TCU
          </p>

          <time class="c-headline__dateline" itemprop="datePublished" datetime="2024-01-17 23:02:00">
            17.jan.2024 às 23h02          </time>
        </a>
      </div>
      

    </div>
  </div>
  
  <div class="c-headline c-headline--newslist">
    
          <div class="c-headline__media-wrapper">
        <div class="c-image-aspect-ratio c-image-aspect-ratio--3x2">
          <a href="https://www1.folha.uol.com.br/tv/2024/01/tati-bernardi-debate-pobreza-e-desigualdade-com-michael-franca.shtml" class="c-image-aspect-ratio__link">
            <img class="c-headline__image c-lazyload c-image-aspect-ratio__image"
            data-src="https://f.i.uol.com.br/fotografia/2024/01/16/170543332965a6d8f1bbdd4_1705433329_3x2_sm.jpg"
            alt="Movimento negro vai começar a guiar mais políticas públicas, diz Michael França">

            <noscript>
              <img class="c-headline__image"
              src="https://f.i.uol.com.br/fotografia/2024/01/16/170543332965a6d8f1bbdd4_1705433329_3x2_sm.jpg"
              alt="Movimento negro vai começar a guiar mais políticas públicas, diz Michael França">
            </noscript>
          </a>
        </div>
      </div>
        

    <div class="c-headline__wrapper">
      <div class="c-headline__head">

        <h3 class="c-headline__kicker c-kicker">
                        <a href="https://www1.folha.uol.com.br/folha-topicos/perspectivas-2024/">
                          Perspectivas 2024
                        </a>
                      </h3>
                
        
        <div data-modal-drop data-qty-collumn="3.4" class="c-modal-drop rs_skip rs_preserve">
          <button data-trigger type="button" name="button" class="c-headline__action">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--share " aria-hidden="true">
  <path d="m 12.818311,11.294921 c 1.280064,0 2.333667,1.054406 2.333667,2.333668 0,1.279261 -1.054406,2.371411 -2.333667,2.371411 -1.279262,0 -2.333668,-1.09215 -2.333668,-2.371411 0,-0.187915 0,-0.377435 0.03774,-0.526802 L 4.8407964,9.789199 A 2.4252158,2.4252158 0 0 1 0.772537,8.020076 2.4252158,2.4252158 0 0 1 4.8383872,6.250954 L 10.48384,2.9761092 A 2.8974102,2.8974102 0 0 1 10.40915,2.4091547 C 10.40915,1.0921502 11.5013,0 12.818304,0 c 1.317008,0 2.409159,1.0921502 2.409159,2.4091547 0,1.3170047 -1.092151,2.4091553 -2.409155,2.4091553 -0.640032,0 -1.204577,-0.263401 -1.656695,-0.677776 L 5.5161598,7.453925 c 0.036941,0.187914 0.074684,0.377434 0.074684,0.564545 0,0.187111 -0.037744,0.377434 -0.075486,0.562137 l 5.7217422,3.31339 c 0.417587,-0.377434 0.979724,-0.602289 1.582012,-0.602289 z"/>
</svg>
 <span class="u-visually-hidden">Compartilhar</span>
          </button>
          <div aria-hidden="true" data-content class="c-modal-drop__content c-modal-drop__content--no-padding">
            <div class="c-modal-drop__controls u-hidden-md">
              <button data-close class="c-modal-drop__close">
                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close  icon--tiny " aria-hidden="true">
  <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
</svg>
              </button>
            </div>
            <div class="c-tools-share--larger">
              <ul class="c-tools-share__list"
                data-sharebar-utm-campaign-prefix="comp"
                data-sharebar-buttons="facebook whatsapp twitter messenger linkedIn email"
                data-triggered-byclick=".c-modal-drop [data-trigger]"
                data-sharebar-url="https://www1.folha.uol.com.br/tv/2024/01/tati-bernardi-debate-pobreza-e-desigualdade-com-michael-franca.shtml"
                data-sharebar-uolpd-id="internal"
                data-sharebar-text="Movimento negro vai começar a guiar mais políticas públicas, diz Michael França">
              </ul>
            </div>
          </div>
        </div>
        

        
        <div class="c-tools-share c-tools-share--margin-left rs_skip rs_preserve">
          <ul class="c-tools-share__list" data-sharebar-url="https://www1.folha.uol.com.br/tv/2024/01/tati-bernardi-debate-pobreza-e-desigualdade-com-michael-franca.shtml" data-sharebar-uolpd-id="internal">
            <script type="application/json" data-sharebar-json>
  {
    "url": "https://www1.folha.uol.com.br/tv/2024/01/tati-bernardi-debate-pobreza-e-desigualdade-com-michael-franca.shtml",
    "title": "Movimento negro vai começar a guiar mais políticas públicas, diz Michael França",
    "share_title": "",
    "subtitle": "Colunista conversa com Tati Bernardi na série Perspectivas 2024, exclusiva para assinantes",
    "cover_date": "2024-01-17 09:00:00",
    "kickers": [{"name":"Perspectivas 2024","link_url":"https:\/\/www1.folha.uol.com.br\/folha-topicos\/perspectivas-2024\/","type":"default"}]
  }
</script>

            <li class="c-tools-share__item" data-share-button="read-later">
              <div data-modal-drop data-qty-collumn="4.3" class="c-modal-drop">
                <button title="Salvar" data-trigger class="c-tools-share__button c-tools-share__button--read-later-light u-no-padding is-loading" disabled>
                  <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" version="1.1" class="icon icon--fill icon--read-later " aria-hidden="true">
                    <path d="m 7.9505377,12.526649 -5.597811,2.425714 0,-13.5280486 c 0,-0.55978107 0.3732341,-0.93295916 0.9330152,-0.93295916 l 9.3295921,0 c 0.559781,0 0.933015,0.37317809 0.933015,0.93295916 l 0,13.5280486 -5.5978113,-2.425714 z" class="icon--fill" fill="none" />
                    <path d="m 12.398666,1.7857927 0,11.5437043 -3.7295021,-1.598359 -0.7103372,-0.266393 -0.7103371,0.266393 -3.7295029,1.598359 0,-11.5437043 8.8796793,0 m 0,-1.77594912 -8.8796793,0 c -0.9768631,0 -1.7760423,0.79917916 -1.7760423,1.77594912 l 0,14.2076353 6.2158823,-2.663931 6.2158823,2.663931 0,-14.2076353 c 0,-0.97676996 -0.799179,-1.77594912 -1.776043,-1.77594912 l 0,0 z"/>
                  </svg>
                  <span class="u-visually-hidden">Salvar para ler depois</span>
                </button>

                <div data-content class="c-modal-drop__content">
                  <div class="c-modal-drop__controls u-hidden-md">
                    <span class="c-modal-drop__controls__title">Salvar artigos</span>
                    <button data-close class="c-modal-drop__close">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close ">
                        <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
                      </svg>
                    </button>
                  </div>

                  <div class="c-modal-drop__text c-modal-drop__text--secondary c-modal-drop__text--small text-center">
                    <p>Recurso exclusivo para assinantes</p>
                    <p>
                      <a class="u-text-uppercase" data-read-later-link="subscribe" href="https://secure.folha.com.br/folha?gid=FOL">assine</a>
                      <span>ou</span>
                      <a class="u-text-uppercase" data-read-later-link="login" data-sign-in href="https://paywall.folha.uol.com.br/folha/login?return_url=">faça login</a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
      </div>

      
      <div class="c-headline__content">
        <a href="https://www1.folha.uol.com.br/tv/2024/01/tati-bernardi-debate-pobreza-e-desigualdade-com-michael-franca.shtml">
          <h2 class="c-headline__title">Movimento negro vai começar a guiar mais políticas públicas, diz Michael França</h2>

          <p class="c-headline__standfirst">
            Colunista conversa com Tati Bernardi na série Perspectivas 2024, exclusiva para assinantes
          </p>

          <time class="c-headline__dateline" itemprop="datePublished" datetime="2024-01-17 09:00:00">
            17.jan.2024 às 9h00          </time>
        </a>
      </div>
      

    </div>
  </div>
  
  <div class="c-headline c-headline--newslist">
    
          <div class="c-headline__media-wrapper">
        <div class="c-image-aspect-ratio c-image-aspect-ratio--3x2">
          <a href="https://www1.folha.uol.com.br/poder/2024/01/criadora-do-chatgpt-traca-plano-contra-deepfake-nas-eleicoes-em-meio-a-falta-de-regulacao.shtml" class="c-image-aspect-ratio__link">
            <img class="c-headline__image c-lazyload c-image-aspect-ratio__image"
            data-src="https://f.i.uol.com.br/fotografia/2024/01/17/170553812365a8724b3e88a_1705538123_3x2_sm.jpg"
            alt="Criadora do ChatGPT traça plano contra deepfake nas eleições em meio a falta de regulação">

            <noscript>
              <img class="c-headline__image"
              src="https://f.i.uol.com.br/fotografia/2024/01/17/170553812365a8724b3e88a_1705538123_3x2_sm.jpg"
              alt="Criadora do ChatGPT traça plano contra deepfake nas eleições em meio a falta de regulação">
            </noscript>
          </a>
        </div>
      </div>
        

    <div class="c-headline__wrapper">
      <div class="c-headline__head">

        <h3 class="c-headline__kicker c-kicker">
                        <a href="https://www1.folha.uol.com.br/sobretudo/morar/2019/tecnologia/">
                          Tecnologia
                        </a>
                      </h3>
                
        
        <div data-modal-drop data-qty-collumn="3.4" class="c-modal-drop rs_skip rs_preserve">
          <button data-trigger type="button" name="button" class="c-headline__action">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--share " aria-hidden="true">
  <path d="m 12.818311,11.294921 c 1.280064,0 2.333667,1.054406 2.333667,2.333668 0,1.279261 -1.054406,2.371411 -2.333667,2.371411 -1.279262,0 -2.333668,-1.09215 -2.333668,-2.371411 0,-0.187915 0,-0.377435 0.03774,-0.526802 L 4.8407964,9.789199 A 2.4252158,2.4252158 0 0 1 0.772537,8.020076 2.4252158,2.4252158 0 0 1 4.8383872,6.250954 L 10.48384,2.9761092 A 2.8974102,2.8974102 0 0 1 10.40915,2.4091547 C 10.40915,1.0921502 11.5013,0 12.818304,0 c 1.317008,0 2.409159,1.0921502 2.409159,2.4091547 0,1.3170047 -1.092151,2.4091553 -2.409155,2.4091553 -0.640032,0 -1.204577,-0.263401 -1.656695,-0.677776 L 5.5161598,7.453925 c 0.036941,0.187914 0.074684,0.377434 0.074684,0.564545 0,0.187111 -0.037744,0.377434 -0.075486,0.562137 l 5.7217422,3.31339 c 0.417587,-0.377434 0.979724,-0.602289 1.582012,-0.602289 z"/>
</svg>
 <span class="u-visually-hidden">Compartilhar</span>
          </button>
          <div aria-hidden="true" data-content class="c-modal-drop__content c-modal-drop__content--no-padding">
            <div class="c-modal-drop__controls u-hidden-md">
              <button data-close class="c-modal-drop__close">
                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close  icon--tiny " aria-hidden="true">
  <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
</svg>
              </button>
            </div>
            <div class="c-tools-share--larger">
              <ul class="c-tools-share__list"
                data-sharebar-utm-campaign-prefix="comp"
                data-sharebar-buttons="facebook whatsapp twitter messenger linkedIn email"
                data-triggered-byclick=".c-modal-drop [data-trigger]"
                data-sharebar-url="https://www1.folha.uol.com.br/poder/2024/01/criadora-do-chatgpt-traca-plano-contra-deepfake-nas-eleicoes-em-meio-a-falta-de-regulacao.shtml"
                data-sharebar-uolpd-id="internal"
                data-sharebar-text="Criadora do ChatGPT traça plano contra deepfake nas eleições em meio a falta de regulação">
              </ul>
            </div>
          </div>
        </div>
        

        
        <div class="c-tools-share c-tools-share--margin-left rs_skip rs_preserve">
          <ul class="c-tools-share__list" data-sharebar-url="https://www1.folha.uol.com.br/poder/2024/01/criadora-do-chatgpt-traca-plano-contra-deepfake-nas-eleicoes-em-meio-a-falta-de-regulacao.shtml" data-sharebar-uolpd-id="internal">
            <script type="application/json" data-sharebar-json>
  {
    "url": "https://www1.folha.uol.com.br/poder/2024/01/criadora-do-chatgpt-traca-plano-contra-deepfake-nas-eleicoes-em-meio-a-falta-de-regulacao.shtml",
    "title": "Criadora do ChatGPT traça plano contra deepfake nas eleições em meio a falta de regulação",
    "share_title": "",
    "subtitle": "Concorrentes ainda não se pronunciaram, e redes sociais se movem para aumentar transparência sobre uso da tecnologia em pleitos de mais de 50 países",
    "cover_date": "2024-01-18 04:03:00",
    "kickers": [{"name":"Tecnologia","link_url":"https:\/\/www1.folha.uol.com.br\/sobretudo\/morar\/2019\/tecnologia\/","type":"default"}]
  }
</script>

            <li class="c-tools-share__item" data-share-button="read-later">
              <div data-modal-drop data-qty-collumn="4.3" class="c-modal-drop">
                <button title="Salvar" data-trigger class="c-tools-share__button c-tools-share__button--read-later-light u-no-padding is-loading" disabled>
                  <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" version="1.1" class="icon icon--fill icon--read-later " aria-hidden="true">
                    <path d="m 7.9505377,12.526649 -5.597811,2.425714 0,-13.5280486 c 0,-0.55978107 0.3732341,-0.93295916 0.9330152,-0.93295916 l 9.3295921,0 c 0.559781,0 0.933015,0.37317809 0.933015,0.93295916 l 0,13.5280486 -5.5978113,-2.425714 z" class="icon--fill" fill="none" />
                    <path d="m 12.398666,1.7857927 0,11.5437043 -3.7295021,-1.598359 -0.7103372,-0.266393 -0.7103371,0.266393 -3.7295029,1.598359 0,-11.5437043 8.8796793,0 m 0,-1.77594912 -8.8796793,0 c -0.9768631,0 -1.7760423,0.79917916 -1.7760423,1.77594912 l 0,14.2076353 6.2158823,-2.663931 6.2158823,2.663931 0,-14.2076353 c 0,-0.97676996 -0.799179,-1.77594912 -1.776043,-1.77594912 l 0,0 z"/>
                  </svg>
                  <span class="u-visually-hidden">Salvar para ler depois</span>
                </button>

                <div data-content class="c-modal-drop__content">
                  <div class="c-modal-drop__controls u-hidden-md">
                    <span class="c-modal-drop__controls__title">Salvar artigos</span>
                    <button data-close class="c-modal-drop__close">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close ">
                        <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
                      </svg>
                    </button>
                  </div>

                  <div class="c-modal-drop__text c-modal-drop__text--secondary c-modal-drop__text--small text-center">
                    <p>Recurso exclusivo para assinantes</p>
                    <p>
                      <a class="u-text-uppercase" data-read-later-link="subscribe" href="https://secure.folha.com.br/folha?gid=FOL">assine</a>
                      <span>ou</span>
                      <a class="u-text-uppercase" data-read-later-link="login" data-sign-in href="https://paywall.folha.uol.com.br/folha/login?return_url=">faça login</a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
      </div>

      
      <div class="c-headline__content">
        <a href="https://www1.folha.uol.com.br/poder/2024/01/criadora-do-chatgpt-traca-plano-contra-deepfake-nas-eleicoes-em-meio-a-falta-de-regulacao.shtml">
          <h2 class="c-headline__title">Criadora do ChatGPT traça plano contra deepfake nas eleições em meio a falta de regulação</h2>

          <p class="c-headline__standfirst">
            Concorrentes ainda não se pronunciaram, e redes sociais se movem para aumentar transparência sobre uso da tecnologia em pleitos de mais de 50 países
          </p>

          <time class="c-headline__dateline" itemprop="datePublished" datetime="2024-01-18 04:03:00">
            18.jan.2024 às 4h03          </time>
        </a>
      </div>
      

    </div>
  </div>
          </div>

          <div class="col-fixed col-fixed--md-300">
            
<div class="c-advertising c-advertising--300x600">
  <div id="banner-300x600-2-area" class="c-advertising__banner-area"></div>
</div>

          </div>
        </div>
      </div>
    </div>
    

  
      <div class="block">
      <div class="container">
        
<div class="c-advertising">
  <div id="banner-970x250-area-2" class="c-advertising__banner-area"></div>
</div>
 
      </div>
    </div>
    

        </main>

      <div class="u-only-print" aria-hidden="true">
        <p>Copyright Folha de S.Paulo. Todos os direitos reservados. É proibida a reprodução do conteúdo desta página em qualquer meio de comunicação, eletrônico ou impresso, sem autorização escrita da Folhapress.</p>
      </div>

              <!-- MODAL READ LATER MINHA FOLHA -->
<div data-modal-error-minhafolha-text>
  <div class="c-modal c-modal--error" data-modal-box>
    <button id="modal-500" class="c-button c-button--primary is-hidden" data-trigger>
      Modal 500
    </button>

    <div class="c-modal__content" data-content>
      <div class="c-modal__head">
        <button class="c-modal__close" data-close>
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close " aria-hidden="true">
  <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
</svg>
        </button>
      </div>

      <div class="c-modal__body c-modal__body--align-center">
        <p data-minhafolha-error-text></p>
        <button class="c-button c-button--primary" data-close>OK</button>
      </div>
    </div>

    <div class="c-modal__overlay" data-overlay></div>
    <div class="c-modal__scrollbar" data-scrollbar></div>
  </div>
</div>
<!--//MODAL READ LATER MINHA FOLHA -->

<footer id="rodape" class="l-footer u-no-print">
  <div class="block">
    <div class="container">
      <div class="l-footer__head">
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 190 20" version="1.1" class="logo-folha logo-small" aria-hidden="true">
  <g>
    <g transform="translate(183.000000, 0.000000)">
      <polygon class="brand-stars-red" points="4.26167491 3.62184038 4.98484067 5.86503408 3.07913972 4.47605581 1.17343877 5.86503408 1.90570095 3.62184038 0 2.24236717 2.35638744 2.24236717 3.07913972 1.77635684e-15 3.8114019 2.24236717 6.16778933 2.24236717"></polygon>
      <polygon class="brand-stars-blue" points="4.26167491 10.2195905 4.98484067 12.4627842 3.07913972 11.0738059 1.17343877 12.4627842 1.90570095 10.2195905 -7.10542736e-15 8.84011725 2.35638744 8.84011725 3.07913972 6.59775008 3.8114019 8.84011725 6.16778933 8.84011725"></polygon>
      <polygon class="brand-stars-dark" points="4.26167491 17.4558325 4.98484067 19.6990262 3.07913972 18.3100479 1.17343877 19.6990262 1.90570095 17.4558325 0 16.0763593 2.35638744 16.0763593 3.07913972 13.8339921 3.8114019 16.0763593 6.16778933 16.0763593"></polygon>
    </g>

    <g>
      <path d="M102.802445,0 C104.083325,0 105.221884,0.0949034745 106.336724,0.332162161 L106.336724,5.36204631 L105.411644,5.36204631 L104.510285,1.6608108 C103.869845,1.49472972 103.490325,1.44727799 102.802445,1.44727799 C101.236926,1.44727799 100.359286,2.30140926 100.359286,3.44025095 C100.359286,7.47364862 107.143204,7.09403472 107.143204,13.0966795 C107.143204,16.4183011 104.723764,19.1942277 100.904846,19.1942277 C99.2681663,19.1942277 97.9635668,18.9806949 96.9673271,18.6248069 L96.9673271,13.5711969 L97.9635668,13.5711969 L98.7700465,17.1775289 C99.5765262,17.6283204 100.501606,17.7469497 101.450406,17.7469497 C102.897325,17.7469497 103.869845,16.7030115 103.869845,15.4929922 C103.869845,11.1037065 96.8961672,11.0562548 96.9436071,5.50440152 C96.9436071,2.15905405 99.4342063,0 102.802445,0 L102.802445,0 Z M0.023719992,1.16256756 L0.023719992,0.284710424 L11.1721162,0.284710424 L11.1721162,5.76538608 L10.2470365,5.76538608 L8.70523705,1.54218146 L5.64535809,1.54218146 L5.64535809,8.94465247 L8.04107727,8.94465247 L8.58663709,6.64324322 L9.51171678,6.64324322 L9.51171678,12.6696138 L8.58663709,12.6696138 L8.04107727,10.2021235 L5.64535809,10.2021235 L5.64535809,17.6520463 L7.85131734,18.055386 L7.85131734,18.9095173 L2.84217094e-14,18.9095173 L2.84217094e-14,18.055386 L1.7552794,17.6520463 L1.7552794,1.49472972 L0.023719992,1.16256756 Z M118.69484,11.2935135 L117.2242,11.2935135 L117.2242,17.6520463 L119.33528,18.055386 L119.33528,18.9095173 L111.602562,18.9095173 L111.602562,18.055386 L113.334122,17.6520463 L113.334122,1.49472972 L111.626282,1.16256756 L111.626282,0.284710424 L118.90832,0.284710424 C121.968199,0.284710424 124.031838,1.47100386 124.031838,5.81283781 C124.031838,9.13445942 122.347719,11.2935135 118.69484,11.2935135 L118.69484,11.2935135 Z M117.2242,10.0597683 L117.91208,10.0597683 C119.16924,10.0597683 119.904559,9.20563703 119.904559,5.76538608 C119.904559,2.34886099 119.38272,1.54218146 117.95952,1.54218146 L117.2242,1.54218146 L117.2242,10.0597683 Z M158.757906,10.6291891 C158.757906,4.60281851 161.414545,2.25395752 165.209744,2.25395752 C169.550503,2.25395752 171.376942,4.93498067 171.376942,10.7952702 C171.376942,16.7504633 168.696583,19.1942277 164.948824,19.1942277 C160.584346,19.1942277 158.757906,16.5132046 158.757906,10.6291891 L158.757906,10.6291891 Z M12.2157959,10.652915 C12.2157959,4.65027025 14.848715,2.30140926 18.6439137,2.30140926 C23.0083922,2.30140926 24.7636716,4.95870654 24.7636716,10.8189961 C24.7636716,16.7741891 22.1307525,19.1942277 18.3355538,19.1942277 C13.9947953,19.1942277 12.2157959,16.5369304 12.2157959,10.652915 L12.2157959,10.652915 Z M54.6271415,18.9095173 L50.4287029,18.9095173 L50.4287029,18.1740154 L51.6384225,17.8418532 L55.6233811,2.53866794 L57.6870204,2.53866794 L62.2886989,17.8418532 L63.5221385,18.1740154 L63.5221385,18.9095173 L57.1651806,18.9095173 L57.1651806,18.1740154 L58.6358201,17.8418532 L57.3549406,13.9270849 L53.8918217,13.9270849 L52.990462,17.8418532 L54.6271415,18.1740154 L54.6271415,18.9095173 Z M127.091717,18.9095173 L122.703518,18.9095173 L122.703518,18.1740154 L124.055558,17.8418532 L128.040517,2.53866794 L130.151596,2.53866794 L134.753274,17.8418532 L136.129034,18.1740154 L136.129034,18.9095173 L129.653476,18.9095173 L129.653476,18.1740154 L131.100396,17.8418532 L129.795796,13.9270849 L126.285237,13.9270849 L125.407597,17.8418532 L127.091717,18.1740154 L127.091717,18.9095173 Z M35.295348,18.9095173 L25.7599113,18.9095173 L25.7599113,18.1740154 L27.1831108,17.8418532 L27.1831108,3.60633203 L25.8310712,3.34534748 L25.8310712,2.58611968 L32.1168691,2.58611968 L32.1168691,3.34534748 L30.6462296,3.60633203 L30.6462296,17.7944015 L33.2079887,17.7944015 L34.5600283,13.9745366 L35.295348,13.9745366 L35.295348,18.9095173 Z M36.2678677,3.34534748 L36.2678677,2.58611968 L42.2453057,2.58611968 L42.2453057,3.34534748 L41.0593061,3.60633203 L41.0593061,10.2733011 L44.6647449,10.2733011 L44.6647449,3.60633203 L43.5499052,3.34534748 L43.5499052,2.58611968 L49.3850233,2.58611968 L49.3850233,3.34534748 L48.1515837,3.60633203 L48.1515837,17.8418532 L49.5036232,18.1740154 L49.5036232,18.9095173 L43.5499052,18.9095173 L43.5499052,18.1740154 L44.6647449,17.8418532 L44.6647449,11.3884169 L41.0593061,11.3884169 L41.0593061,17.8418532 L42.2453057,18.1740154 L42.2453057,18.9095173 L36.2678677,18.9095173 L36.2678677,18.1740154 L37.6199072,17.8418532 L37.6199072,3.65378377 L36.2678677,3.34534748 Z M80.1261328,11.008803 C80.1261328,16.7504633 77.4457737,18.9095173 74.1961348,18.9095173 L67.839177,18.9095173 L67.839177,18.1740154 L69.1200566,17.8418532 L69.1200566,3.60633203 L67.839177,3.34534748 L67.839177,2.58611968 L73.864055,2.58611968 C77.9201736,2.58611968 80.1261328,4.53164091 80.1261328,11.008803 L80.1261328,11.008803 Z M86.1272908,17.7944015 L89.2346097,17.7944015 L90.5392093,14.1643436 L91.369409,14.1643436 L91.369409,18.9095173 L81.1223725,18.9095173 L81.1223725,18.1740154 L82.640452,17.8418532 L82.640452,3.60633203 L81.1460925,3.34534748 L81.1460925,2.58611968 L90.8475692,2.58611968 L90.8475692,7.30756754 L90.0410895,7.30756754 L88.7127699,3.65378377 L86.1272908,3.65378377 L86.1272908,10.1783976 L88.1672101,10.1783976 L88.7127699,8.16169881 L89.4480897,8.16169881 L89.4480897,13.4762934 L88.7127699,13.4762934 L88.1672101,11.2935135 L86.1272908,11.2935135 L86.1272908,17.7944015 Z M135.464874,3.34534748 L135.464874,2.58611968 L141.726952,2.58611968 L141.726952,3.34534748 L140.280032,3.60633203 L140.280032,15.1371042 C140.280032,17.2724324 140.801872,18.2689188 142.343672,18.2689188 C144.454751,18.2689188 145.118911,17.0114478 145.118911,14.6625868 L145.118911,3.60633203 L143.719431,3.34534748 L143.719431,2.58611968 L147.49091,2.58611968 L147.49091,3.34534748 L146.21003,3.60633203 L146.21003,14.8998455 C146.21003,18.0791119 144.644511,19.4314864 141.442312,19.4077605 C137.765713,19.3840347 136.793194,17.9604826 136.793194,14.1643436 L136.793194,3.60633203 L135.464874,3.34534748 Z M157.880266,18.9095173 L148.48715,18.9095173 L148.48715,18.1740154 L149.910349,17.8418532 L149.910349,3.60633203 L148.58203,3.34534748 L148.58203,2.58611968 L154.844108,2.58611968 L154.844108,3.34534748 L153.397188,3.60633203 L153.397188,17.7944015 L155.745467,17.7944015 L157.097507,13.9745366 L157.880266,13.9745366 L157.880266,18.9095173 Z M167.652903,10.842722 C167.652903,4.22320462 166.514344,3.20299226 165.186024,3.20299226 C163.857704,3.20299226 162.505665,4.0808494 162.505665,10.6054633 C162.505665,17.2012548 163.644225,18.2689188 164.996264,18.2689188 C166.324584,18.2689188 167.652903,17.3198841 167.652903,10.842722 L167.652903,10.842722 Z M21.0870729,10.8664478 C21.0870729,4.24693048 19.9247932,3.250444 18.5727537,3.250444 C17.1969942,3.250444 15.8686746,4.10457527 15.8686746,10.6291891 C15.8686746,17.2249806 17.0546742,18.2689188 18.4067138,18.2689188 C19.7350333,18.2689188 21.0870729,17.3673358 21.0870729,10.8664478 L21.0870729,10.8664478 Z M72.7729353,17.7944015 L73.792895,17.7944015 C75.7142143,17.7944015 76.615574,16.7504633 76.615574,10.7952702 C76.615574,4.72144786 75.5718944,3.65378377 73.721735,3.65378377 L72.7729353,3.65378377 L72.7729353,17.7944015 Z M55.4573412,7.59227796 L54.1527416,12.8119691 L57.0465807,12.8119691 L55.4573412,7.59227796 Z M127.898197,7.59227796 L126.617317,12.8119691 L129.463716,12.8119691 L127.898197,7.59227796 Z M108.874763,15.6590733 C109.752403,15.6590733 110.487723,16.442027 110.487723,17.4147876 C110.487723,18.4112741 109.704963,19.1942277 108.827323,19.1942277 C107.997123,19.1942277 107.214364,18.4112741 107.214364,17.4147876 C107.214364,16.442027 108.044563,15.6590733 108.874763,15.6590733 L108.874763,15.6590733 Z"></path>
    </g>
  </g>
</svg>
        <span class="u-sr-only">Folha de S.Paulo</span>
          <a href="//assinaturas.folha.com.br" class="l-footer__link l-footer__link--attention" title="Assine a Folha" rel="external">Assine</a>
        <a href="#top" class="l-footer__link l-footer__link--back-to-top"><span>Topo</span> <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="icon icon--chevron-up" aria-hidden="true">
  <path d="M 17.75,14.199375 16.39875,15.550625 12,11.161458 7.60125,15.550625 6.25,14.199375 l 5.75,-5.75 5.75,5.75 z"/>
</svg>
</a>
      </div>

      <div class="l-footer__content">
        <div class="row "><div class="col col--xs-1-1 col--sm-1-1 u-visible-md col--md-3-4"><div class="row "><div class="col col--xs-1-1 col--sm-1-1 col--md-1-4"><div class="row "><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><nav class="l-footer__section">
    <h4 class="c-heading c-heading--tiny">
        folha de s.paulo
      </h4>
      <ul class="l-footer__nav">
        <li>
            <a href="https://www1.folha.uol.com.br/institucional/">
            Sobre a Folha            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/politica-de-privacidade/">
            Política de Privacidade            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/institucional/expediente.shtml">
            Expediente            </a>
          </li>
        <li>
            <a href="https://acervo.folha.com.br/index.do">
            Acervo Folha            </a>
          </li>
        <li>
            <a href="https://temas.folha.uol.com.br/projeto-editorial-da-folha/projeto-editorial-2017/">
            Projeto Editorial            </a>
          </li>
        <li>
            <a href="https://seminariosfolha.folha.com.br/">
            Seminários Folha            </a>
          </li>
        <li>
            <a href="https://clube.folha.com.br/">
            Clube Folha            </a>
          </li>
        <li>
            <a href="https://clubefolhagourmet.folha.com.br/">
            Clube Folha Gourmet            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/seriesfolha/">
            Séries Folha            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/colecoes/">
            Coleções Folha            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/folha/trabalhe/vagas.html">
            Trabalhe na Folha            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/treinamento/">
            Treinamento            </a>
          </li>
      </ul>
  </nav>
</div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><nav class="l-footer__section">
    <h4 class="c-heading c-heading--tiny">
        Fale com a Folha
      </h4>
      <ul class="l-footer__nav">
        <li>
            <a href="http://www.publicidade.folha.com.br/">
            Anuncie (Publicidade Folha)            </a>
          </li>
        <li>
            <a href="https://atendimento.folha.com.br/">
            Atendimento ao Assinante            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/erramos/">
            Erramos            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/falecomafolha/">
            Fale com a Folha            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/ombudsman/">
            Ombudsman            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/paineldoleitor/">
            Painel do Leitor            </a>
          </li>
      </ul>
  </nav>
</div></div></div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-4"><div class="row "><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><nav class="l-footer__section">
    <h4 class="c-heading c-heading--tiny">
        editorias
      </h4>
      <ul class="l-footer__nav">
        <li>
            <a href="https://www1.folha.uol.com.br/poder/">
            Política            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/mercado/">
            Economia            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/cotidiano/">
            Cotidiano            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/mundo/">
            Mundo            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/esporte/">
            Esporte            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/ilustrada/">
            Ilustrada            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/ilustrissima/">
            Ilustríssima            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/comida/">
            Comida            </a>
          </li>
        <li>
            <a href="https://f5.folha.uol.com.br/">
            F5            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/podcasts/">
            Podcasts            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/folhinha/">
            Folhinha            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/equilibrioesaude/">
            Saúde            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/ciencia/">
            Ciência            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/ambiente/">
            Ambiente            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/equilibrio/">
            Equilíbrio            </a>
          </li>
        <li>
            <a href="https://fotografia.folha.uol.com.br/">
            Fotografia            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/tv/">
            TV Folha            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/educacao/">
            Educação            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/turismo/">
            Turismo            </a>
          </li>
        <li>
            <a href="https://guia.folha.uol.com.br/">
            Guia Folha            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/mpme/">
            Empreendedorismo            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/banco-de-dados/">
            Banco de Dados            </a>
          </li>
      </ul>
  </nav>
</div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"></div></div></div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-4"><div class="row "><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><nav class="l-footer__section">
    <h4 class="c-heading c-heading--tiny">
        opinião
      </h4>
      <ul class="l-footer__nav">
        <li>
            <a href="https://www1.folha.uol.com.br/opiniao/">
            Opinião            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/colunaseblogs/">
            Colunas e Blogs            </a>
          </li>
        <li>
            <a href="https://cartum.folha.uol.com.br/quadrinhos/">
            Quadrinhos            </a>
          </li>
        <li>
            <a href="https://cartum.folha.uol.com.br/">
            Charges            </a>
          </li>
        <li>
            <a href="https://cartum.folha.uol.com.br/cartunistas/">
            Cartunistas            </a>
          </li>
      </ul>
  </nav>
</div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><nav class="l-footer__section">
    <h4 class="c-heading c-heading--tiny">
        mais seções
      </h4>
      <ul class="l-footer__nav">
        <li>
            <a href="https://folha.com/brasiliahoje">
            Brasília Hoje            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/dias-melhores/">
            Dias Melhores            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/folha-social-mais/">
            Folha Social+            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/seminariosfolha/">
            Seminários Folha            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/especial/2021/">
            Especiais            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/folha-100-anos/">
            Folha, 100            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/internacional/es/">
            Folha en Español            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/internacional/en/">
            Folha In English            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/mercado/folhainvest/">
            Folhainvest            </a>
          </li>
        <li>
            <a href="https://folhaleaks.folha.com.br/">
            Folhaleaks            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/mapas/">
            Folha Mapas            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/folha-topicos/">
            Folha Tópicos            </a>
          </li>
        <li>
            <a href="http://transparencia.folha.uol.com.br">
            Folha Transparência            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/ultimas-noticias/">
            Últimas notícias            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/fsp/">
            Versão Impressa            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/mapa-do-site/">
            Mapa do site            </a>
          </li>
      </ul>
  </nav>
</div></div></div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-4"><div class="row "><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><nav class="l-footer__section">
    <h4 class="c-heading c-heading--tiny">
        serviços
      </h4>
      <ul class="l-footer__nav">
        <li>
            <a href="https://www1.folha.uol.com.br/cotidiano/aeroportos/">
            Aeroportos            </a>
          </li>
        <li>
            <a href="https://classificados1.folha.uol.com.br/">
            Classificados            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/especial/2018/folha-informacoes/">
            Folha Informações            </a>
          </li>
        <li>
            <a href="https://f5.folha.uol.com.br/horoscopo/">
            Horóscopo            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/loterias/">
            Loterias            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/cotidiano/mortes/">
            Mortes            </a>
          </li>
        <li>
            <a href="https://tempo.folha.uol.com.br/">
            Tempo            </a>
          </li>
      </ul>
  </nav>
</div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><nav class="l-footer__section">
    <h4 class="c-heading c-heading--tiny">
        outros canais
      </h4>
      <ul class="l-footer__nav">
        <li>
            <a href="https://datafolha.folha.uol.com.br/">
            Datafolha            </a>
          </li>
        <li>
            <a href="https://estudio.folha.uol.com.br/institucional/">
            Estúdio Folha            </a>
          </li>
        <li>
            <a href="https://publicidadelegal.folha.uol.com.br/">
            Publicidade Legal            </a>
          </li>
        <li>
            <a href="https://folhapress.folha.com.br/">
            Folhapress            </a>
          </li>
        <li>
            <a href="https://eventos.folha.uol.com.br/">
            Folha Eventos            </a>
          </li>
        <li>
            <a href="https://top-of-mind.folha.uol.com.br/2022/">
            Top of Mind            </a>
          </li>
      </ul>
  </nav>
</div></div></div></div><div class="row "><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><ul class="l-footer__nav l-footer__nav--horizontal">
          <li>
        
        Empresa Folha da Manhã S.A. - Grupo Folha - Copyright Folha de S.Paulo (1921 - 2023) 
              </li>
          <li>
        
        CNPJ: 60.579.703/0001-48
              </li>
      </ul>
</div></div></div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-4"><div class="row "><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><nav class="l-footer__section">
    <h4 class="c-heading c-heading--tiny">
        CANAIS DA FOLHA
      </h4>
      <ul class="l-footer__nav">
        <li>
            <a href="https://www1.folha.uol.com.br/falecomafolha/">
            Fale com a Redação            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/mapa-do-site/">
            Mapa do site            </a>
          </li>
        <li>
            <a href="https://atendimento.folha.com.br/">
            Atendimento ao Assinante            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/ombudsman/">
            Ombudsman            </a>
          </li>
        <li>
            <a href="https://www1.folha.uol.com.br/politica-de-privacidade/">
            Política de Privacidade            </a>
          </li>
      </ul>
  </nav>
</div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><div data-newsletter="" class="c-newsletter">
  <h4 class="c-heading c-heading--tiny">newsletter</h4>
  <form class="c-newsletter__form c-form__default">
    <div class="c-newsletter__wrapper">
      <input type="email" class="c-newsletter__text js-validator" name="email" placeholder="Digite seu e-mail" aria-label="E-mail">
      <button class="c-newsletter__button js-button"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" class="icon icon--arrow-rigth">
        <path fill="#333" fill-rule="evenodd" d="M21 9L.01 0 0 7l15 2-15 2 .01 7z"></path>
        </svg>
      </button>
    </div>
    <span class="c-form__error-message c-newsletter__error-message"></span>
  </form>
</div>
</div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><ul class="c-follow-social-media">
<li>
  <a href="https://www.facebook.com/folhadesp/" target="_blank">
    <span class="u-visually-hidden">Link externo, abre perfil da Folha de S.Paulo no Facebook</span>
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--facebook" aria-hidden="true">
    <path d="M 9.5000001,2.9999998 H 12 V -1.95e-7 H 9.5000001 C 7.57,-1.95e-7 6,1.5699998 6,3.4999998 v 1.5 H 4 v 3 H 6 V 16 H 9.0000001 V 7.9999998 H 11.5 l 0.5,-3 H 9.0000001 v -1.5 c 0,-0.271 0.229,-0.5 0.5,-0.5 z"/>
  </svg>
              
  </a>
</li>
<li>
  <a href="https://twitter.com/folha" target="_blank">
    <span class="u-visually-hidden">Link externo, abre página da Folha de S.Paulo no Twitter</span>
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--twitter" aria-hidden="true">
    <path d="m 15.999997,3.2018549 c 0,-0.1451388 -0.119467,-0.2732046 -0.273067,-0.2732046 -0.08533,0 -0.674133,0.247589 -0.827733,0.2902776 0.2048,-0.2390525 0.674133,-0.9647527 0.674133,-1.2721095 0,-0.1451387 -0.119466,-0.2732046 -0.273067,-0.2732046 -0.04266,0 -0.09387,0.01711 -0.136533,0.042714 -0.580266,0.3158928 -1.134933,0.5634818 -1.783466,0.7000904 -0.64,-0.6147385 -1.5104,-0.9733204 -2.406399,-0.9733204 -1.8943999,0 -3.4474671,1.5453141 -3.4474671,3.4492104 0,0.136602 0.00853,0.281747 0.034133,0.418349 C 5.6831985,5.1484392 3.8997324,4.3629782 2.5002659,3.1079412 2.1589325,2.8005845 1.8687992,2.4676183 1.5615991,2.1261094 1.4933329,2.0492686 1.4335995,2.0236592 1.3311993,2.0236592 c -0.093866,0 -0.1706664,0.068298 -0.2133332,0.1366023 -0.30720005,0.4524956 -0.46933275,1.1867322 -0.46933275,1.7331415 0,0.7940042 0.2730663,1.5709292 0.78506615,2.1856432 -0.1621331,-0.05121 -0.4096003,-0.213443 -0.55466665,-0.213443 -0.1791994,0 -0.3327998,0.128066 -0.3327998,0.307357 0,1.195268 0.65706655,2.305169 1.66399955,2.928419 -0.0768,-0.0086 -0.1450664,-0.03416 -0.2218665,-0.03416 -0.145067,0 -0.2645333,0.128066 -0.2645333,0.264668 0,0.03416 0.00853,0.05976 0.017067,0.09391 0.3754662,1.1525798 1.314133,2.0234248 2.4917329,2.2966298 -0.9642667,0.597634 -2.0735999,0.904991 -3.1999998,0.904991 -0.25599995,0 -0.51199955,-0.04271 -0.75946615,-0.04271 -0.1535997,0 -0.2730666,0.128066 -0.2730666,0.273205 0,0.09391 0.0512,0.170754 0.1280003,0.230516 0.2218665,0.162218 0.4949331,0.29882 0.7423993,0.42688 1.31413295,0.683017 2.78186635,1.041593 4.26666575,1.041593 3.7205324,0 6.9034655,-1.99781 8.4394655,-5.3957938 0.554666,-1.220886 0.878933,-2.5613 0.853333,-3.901713 l 0,-0.281741 C 15.010131,4.5422372 15.57333,3.978749 15.95733,3.355499 15.98293,3.312785 16,3.261585 16,3.2018237 l 0,0 z"/>
  </svg>
            
  </a>
</li>
<li>
  <a href="https://www.linkedin.com/company/folha-de-s-paulo" target="_blank">
    <span class="u-visually-hidden">Link externo, abre página da Folha de S.Paulo no Linkedin</span>
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--linkedin" aria-hidden="true">
    <path d="M 0.5217573,3.4217496 C 0.8574099,3.7574022 1.3243328,3.925225 1.883477,3.925225 l 0.019112,0 c 0.5965319,0 1.062624,-0.1678228 1.416555,-0.5034754 C 3.6739051,3.0669849 3.8417314,2.656557 3.8417314,2.1348025 3.8417314,1.6313201 3.6547964,1.2026132 3.319144,0.86696056 2.9834872,0.531308 2.517395,0.3634851 1.9391422,0.3634851 1.3608886,0.3634851 0.8947967,0.531308 0.5408658,0.86696056 0.1861045,1.2026132 -1e-7,1.6313201 -1e-7,2.1348025 c 0,0.5217545 0.1678263,0.9321824 0.5217572,1.2869471 l 0,0 z m -0.3165439,12.2147654 3.4313014,0 0,-10.2939042 -3.4313014,0 0,10.2939042 z m 8.7460799,0 0,-5.7443117 c 0,-0.3539317 0.037384,-0.633921 0.1121617,-0.839135 C 9.2121719,8.6991367 9.4364945,8.4008753 9.7347601,8.1582701 10.013917,7.9156719 10.386957,7.8035124 10.834771,7.8035124 c 0.596531,0 1.025236,0.2052139 1.305224,0.6156349 0.279987,0.410428 0.428705,0.9886857 0.428705,1.7156547 l 0,5.501713 3.4313,0 0,-5.8930294 C 16,8.2139334 15.64607,7.0582579 14.919099,6.2747932 14.191298,5.4913284 13.240005,5.1000126 12.046942,5.1000126 c -0.428705,0 -0.839131,0.055677 -1.193893,0.1678228 -0.353931,0.093054 -0.652197,0.2425982 -0.9130756,0.446986 C 9.6973732,5.9017564 9.5104375,6.0878582 9.3617206,6.2565141 9.2121719,6.4235108 9.063455,6.6104458 8.9321847,6.8339388 l 0.019112,0 0,-1.491328 -3.4313016,0 0.018279,0.5034754 0,3.0765435 c 0,1.7156473 0,3.9538893 -0.018279,6.7138853 l 3.4313016,0 0,0 z"/>
  </svg>
          
  </a>
</li>
<li>
  <a href="https://www.instagram.com/folhadespaulo/" target="_blank">
    <span class="u-visually-hidden">Link externo, abre página da Folha de S.Paulo no Instagram</span>
    <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon icon--instagram" aria-hidden="true">
    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
  </svg>
      
  </a>
</li>
<li>
  <a href="https://www.tiktok.com/@folha" target="_blank">
    <span class="u-visually-hidden">Link externo, abre página da Folha de S.Paulo no TikTok</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="icon--tiktok " aria-hidden="true">
    <path d="M18.1695 7.74831C17.3706 7.57743 16.6473 7.15587 16.1048 6.54507C15.5624 5.93427 15.2292 5.16618 15.1539 4.35275V4H12.3982V14.9362C12.3965 15.4203 12.2432 15.8918 11.9597 16.2843C11.6762 16.6768 11.2769 16.9706 10.8178 17.1244C10.3588 17.2783 9.86303 17.2844 9.40029 17.142C8.93755 16.9996 8.53107 16.7157 8.23797 16.3304C7.94031 15.9386 7.7752 15.4621 7.76656 14.9702C7.75793 14.4782 7.90623 13.9963 8.18995 13.5943C8.47367 13.1923 8.87807 12.8911 9.3445 12.7344C9.81094 12.5777 10.3152 12.5737 10.784 12.7229V9.92322C9.73846 9.77868 8.67384 9.96457 7.73911 10.4549C6.80438 10.9452 6.04629 11.7154 5.57086 12.6578C5.09543 13.6002 4.92646 14.6676 5.08757 15.7108C5.24868 16.7539 5.73181 17.7207 6.4694 18.4757C7.1728 19.1954 8.0747 19.6892 9.05999 19.894C10.0453 20.0988 11.0692 20.0054 12.0012 19.6257C12.9331 19.2459 13.7308 18.5971 14.2923 17.7619C14.8539 16.9268 15.1538 15.9433 15.1539 14.937V9.3489C16.2675 10.1451 17.6028 10.572 18.9718 10.5695V7.8315C18.7022 7.83183 18.4333 7.80395 18.1695 7.74831Z" fill="black"/>
  </svg>
        
  </a>
</li>
<li>
  <a href="https://www1.folha.uol.com.br/feed/" target="_blank">
    <span class="u-visually-hidden">Link externo, abre página RSS da Folha de S.Paulo</span>
    <svg xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 0 16 16" width="24" class="icon icon--rss"  aria-hidden="true">
    <g transform="translate(-4, -4)">
        <circle cx="6.18" cy="17.82" r="2.18"/>
        <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
    </g>
  </svg>
    
  </a>
</li>
</ul>
</div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"></div></div><div class="row "><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><div class="c-the-trust-project">
  <h4 class="c-the-trust-project__text">A Folha integra o</h4>
  <a href="https://www1.folha.uol.com.br/credibilidade/folha-no-projeto-credibilidade.shtml">
    <svg xmlns="http://www.w3.org/2000/svg" width="146" height="25" viewBox="0 0 146 25">
  <g>
    <g>
      <path d="M21 0H4C1.8 0 0 1.8 0 4v17c0 2.2 1.8 4 4 4h17c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm2.5 21c0 1.375-1.125 2.5-2.5 2.5H4A2.507 2.507 0 0 1 1.5 21V4c0-1.375 1.125-2.5 2.5-2.5h17c1.375 0 2.5 1.125 2.5 2.5v17z"/>
      <g>
        <path d="M40.6 8.925h-3.175V17.5H35.2V8.925h-3.125V7.1H40.6zM47.75 10.35c.45.475.675 1.25.675 2.3v4.85h-2.15v-4.85c0-.475-.1-.8-.3-.975-.2-.2-.5-.275-.9-.275-.575 0-1 .2-1.25.625v5.5h-2.15V7.1h2.15v3.5c.25-.325.55-.55.9-.725a2.47 2.47 0 0 1 1.125-.25c.825 0 1.45.25 1.9.725zM56.475 14.35h-4.9c.075.475.275.875.6 1.15.325.275.725.425 1.225.425.375 0 .725-.075 1.025-.2.325-.15.575-.35.8-.625l1.025 1.2c-.275.4-.675.725-1.2.975-.525.275-1.125.4-1.825.4-.8 0-1.475-.175-2.05-.5a3.503 3.503 0 0 1-1.35-1.35c-.3-.575-.475-1.2-.475-1.9v-.275c0-.775.15-1.45.425-2.075.3-.6.7-1.075 1.25-1.425.55-.35 1.2-.5 1.95-.5.725 0 1.35.15 1.875.475.525.3.9.75 1.175 1.325s.4 1.25.4 2v.9h.05zm-2.1-1.625c0-.425-.125-.75-.35-1-.225-.25-.55-.375-1-.375-.4 0-.725.125-.95.4-.225.275-.375.65-.45 1.125h2.75v-.15zM68.375 8.925H65.2V17.5h-2.225V8.925H59.85V7.1H68.375zM73.45 9.65c.125.025.225.025.3.05l-.025 2.075c-.275-.05-.525-.05-.775-.05-.775 0-1.275.25-1.5.775v5H69.3V9.775h2.025l.075.925c.2-.35.425-.625.725-.8.3-.175.625-.275 1-.275.075 0 .2.025.325.025zM81.6 9.775V17.5h-2.025l-.05-.8c-.25.3-.55.55-.9.7-.35.175-.75.25-1.2.25-.8 0-1.425-.225-1.9-.7-.45-.475-.675-1.2-.675-2.175v-5H77V14.8c0 .375.1.65.275.85.2.175.45.275.775.275.65 0 1.125-.225 1.375-.7v-5.45H81.6zM82.875 12.05c0-.45.125-.85.375-1.2.25-.375.6-.65 1.075-.875.475-.225 1.025-.325 1.65-.325.65 0 1.25.1 1.725.325.5.2.875.5 1.15.875.275.375.4.8.4 1.3H87.1c0-.3-.1-.55-.275-.725-.175-.175-.475-.25-.85-.25-.325 0-.575.075-.75.225-.2.15-.275.35-.275.575 0 .225.1.4.325.55.2.15.575.25 1.075.35.6.125 1.125.275 1.55.45.425.175.75.45 1 .75.25.325.375.725.375 1.225 0 .45-.125.85-.4 1.225-.275.35-.65.65-1.15.85-.5.2-1.075.3-1.725.3-.7 0-1.3-.125-1.8-.375s-.9-.575-1.15-.975c-.275-.4-.4-.825-.4-1.25h2.025c.025.375.15.65.4.825.25.175.575.275.975.275.375 0 .65-.075.85-.2.2-.15.3-.325.3-.575 0-.15-.05-.275-.125-.375-.1-.1-.25-.2-.475-.3-.225-.1-.55-.175-.95-.275-1.875-.425-2.775-1.225-2.775-2.4zM94.675 15.825v1.625c-.375.125-.8.2-1.275.2-1.525 0-2.275-.775-2.275-2.325v-4h-1.1V9.75h1.1V7.825h2.15V9.75h1.3v1.575h-1.3v3.725c0 .3.05.525.175.625.125.1.325.175.6.175.25.025.45.025.625-.025z"/>
        <g>
          <path d="M105.825 7.55c.6.3 1.05.7 1.375 1.225.325.525.475 1.125.475 1.8s-.15 1.25-.475 1.75c-.325.5-.775.875-1.375 1.15-.6.275-1.3.4-2.1.4h-1.85V17.5h-2.25V7.1h4.1c.8 0 1.5.15 2.1.45zM105 11.675c.275-.275.425-.625.425-1.075 0-.3-.05-.575-.175-.825-.125-.25-.3-.45-.55-.6-.25-.15-.575-.225-.95-.225h-1.85v3.15h1.85c.55-.025.975-.175 1.25-.425zM112.775 9.65c.125.025.225.025.3.05l-.025 2.075c-.275-.05-.525-.05-.775-.05-.775 0-1.275.25-1.5.775v5h-2.15V9.775h2.025l.075.925c.2-.35.425-.625.725-.8.3-.175.625-.275 1-.275.075 0 .2 0 .325.025zM114 11.525c.3-.6.7-1.075 1.25-1.4.55-.35 1.2-.5 1.975-.5.775 0 1.425.175 2 .5.55.35.975.8 1.275 1.4.3.6.425 1.275.425 2.025v.15c0 .75-.15 1.425-.425 2.025-.3.6-.7 1.05-1.25 1.4-.55.35-1.2.5-1.975.5-.775 0-1.425-.175-2-.5a3.45 3.45 0 0 1-1.275-1.4c-.3-.6-.425-1.275-.425-2.025v-.15c0-.75.15-1.425.425-2.025zm2.1 3.775c.25.4.625.6 1.175.6.525 0 .9-.2 1.15-.6.25-.4.375-.925.375-1.6v-.15c0-.65-.125-1.2-.375-1.6-.25-.4-.625-.6-1.175-.6-.525 0-.9.2-1.15.6-.25.4-.375.95-.375 1.6v.15c0 .675.125 1.225.375 1.6zM124.325 17.35c0 .875-.25 1.575-.725 2.05-.475.475-1.15.725-2 .725-.375 0-.75-.05-1.05-.125v-1.7c.225.05.45.075.65.075.65 0 .95-.325.95-1v-7.6h2.175v7.575zm-.275-10.275c.225.2.325.475.325.8 0 .325-.1.6-.325.8-.225.2-.5.3-.875.3-.35 0-.65-.1-.875-.3-.225-.2-.325-.475-.325-.8 0-.325.1-.6.325-.8.225-.2.525-.3.875-.3.375 0 .675.1.875.3zM132.55 14.325h-4.9c.075.475.275.875.6 1.15.325.275.725.425 1.225.425.375 0 .725-.075 1.025-.2.325-.15.575-.35.8-.625l1.025 1.2c-.275.4-.675.725-1.2.975-.525.275-1.125.4-1.825.4-.8 0-1.475-.175-2.05-.5a3.503 3.503 0 0 1-1.35-1.35c-.3-.575-.475-1.2-.475-1.9v-.275c0-.775.15-1.45.425-2.075.3-.6.7-1.075 1.25-1.425.55-.35 1.2-.5 1.95-.5.725 0 1.35.15 1.875.475.525.3.9.75 1.175 1.325s.4 1.25.4 2v.9h.05zm-2.125-1.6c0-.425-.125-.75-.35-1-.225-.25-.55-.375-1-.375-.4 0-.725.125-.95.4-.225.275-.375.65-.45 1.125h2.75v-.15zM140.25 14.8c0 .55-.15 1.05-.425 1.475a3.048 3.048 0 0 1-1.15 1.025c-.5.25-1.025.375-1.625.375-.775 0-1.425-.175-1.975-.5-.55-.35-.95-.8-1.2-1.4-.275-.6-.4-1.25-.4-2.025v-.175c0-.75.125-1.425.4-2.025a3.28 3.28 0 0 1 1.2-1.4c.525-.35 1.2-.5 1.95-.5.625 0 1.2.125 1.675.375.5.25.875.6 1.15 1.05.275.45.4 1 .4 1.625h-2.025c0-.375-.125-.7-.325-.95-.225-.25-.525-.375-.925-.375-.525 0-.875.2-1.075.6-.2.4-.3.925-.3 1.6v.175c0 .675.1 1.225.3 1.6.2.375.55.575 1.1.575.375 0 .675-.1.9-.3.225-.2.35-.475.35-.825h2zM145.7 15.825v1.625c-.375.125-.8.2-1.275.2-1.525 0-2.275-.775-2.275-2.325v-4h-1.1V9.75h1.1V7.825h2.15V9.75h1.3v1.575h-1.3v3.725c0 .3.05.525.175.625.125.1.325.175.6.175.25.025.45 0 .625-.025z"/>
        </g>
      </g>
    </g>
    <path d="M14.975 19.2H10.05a.17.17 0 0 1-.175-.175v-8.4c0-.125-.1-.225-.225-.225h-4.4a.17.17 0 0 1-.175-.175V5.9c0-.1.075-.175.175-.175h14.5c.1 0 .175.075.175.175v4.35a.17.17 0 0 1-.175.175h-4.425a.17.17 0 0 0-.175.175v8.425a.17.17 0 0 1-.175.175z"/>
  </g>
</svg>
  </a>
</div>
</div><div class="col col--xs-1-1 col--sm-1-1 col--md-1-1"><div class="c-headline c-headline-thumb">
    <div class="c-headline__wrapper">
        <a href="" class="c-headline-thumb__url">
          </a>
          <p class="c-headline__standfirst">O <a href="https://www.folha.uol.com.br/">jornal</a> Folha de S.Paulo &eacute; publicado pela Empresa Folha da Manh&atilde; S.A. CNPJ: 60.579.703/0001-48</p>
      </div>

  </div>
</div></div></div></div>
<!--//-->
      </div>

      <p class="l-footer__copyright">
        <small>Copyright Folha de S.Paulo. Todos os direitos reservados. É proibida a reprodução do conteúdo desta página em qualquer meio de comunicação, eletrônico ou impresso, sem autorização escrita da <a href="mailto:pesquisa@folhapress.com.br">Folhapress</a>.</small>
      </p>
    </div>
  </div>
</footer>
<script id="c-subscriber-alert" type="x-tmpl-mustache">
  <div class="{{CONFIG.class.main}}">
    <div class="{{CONFIG.class.alert}}">
      <button class="{{CONFIG.class.buttom}}" {{CONFIG.attr}}="fecha-alerta"><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close " aria-hidden="true">
  <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
</svg>
</button>
      <div class="{{CONFIG.class.info}}">
        {{#alerts}}
        <h2 class="{{CONFIG.class.title}}">Olá, Assinante</h2>
        <p class="{{CONFIG.class.text}}">{{{text}}}</p>
        <a href="{{link}}" class="{{CONFIG.class.link}}" {{CONFIG.attr}}="{{text}}">
          Atualizar Dados
        </a>
        <p class="{{CONFIG.class.phone_number}}">ou ligue (11) 3224-3090.</p>
        {{/alerts}}
      </div>
    </div>
  </div>
</script>
      
              <div class="c-modal" data-modal-newsletter>
  <div class="c-modal__content" data-content>
    <div class="c-modal__head">
      NEWSLETTER
      <button class="c-modal__close" data-close>
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="icon icon--close  icon--tiny " aria-hidden="true">
  <path d="M16 1.61L14.39 0 8 6.39 1.61 0 0 1.61 6.39 8 0 14.39 1.61 16 8 9.61 14.39 16 16 14.39 9.61 8z"/>
</svg>
      </button>
    </div>
    <div class="c-modal__body c-newsletter__modal">
      <span class="c-form__error-message c-newsletter__error-message c-newsletter__error-no-selected is-hidden" data-newsletter-none-selected id="validation-error">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="icon icon--alert "><title>Ícone alerta</title>
          <path d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm.8
          12H7.2v-1.6h1.6zm0-3.2H7.2V4h1.6z"></path>
        </svg>
        Por favor, selecione uma das opções abaixo.
      </span>
      <form id="form_newsletter" role="form" class="c-form js-newsletter-form" action="#" method="POST" data-newsletter-form>
      <fieldset>
        <legend>Quais newsletters você gostaria de assinar?</legend>
                                                                                                <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-brasliahoje"
                      value="brasliahoje"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-brasliahoje">
                      Brasília hoje
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-maratonar"
                      value="maratonar"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-maratonar">
                      Maratonar
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-planetaemtranse"
                      value="planetaemtranse"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-planetaemtranse">
                      Planeta em transe
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-todas"
                      value="todas"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-todas">
                      Todas
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-folhajus"
                      value="folhajus"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-folhajus">
                      FolhaJus
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-intelignciaemocionalmododeusar"
                      value="intelignciaemocionalmododeusar"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-intelignciaemocionalmododeusar">
                      Inteligência emocional, modo de usar
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-cuidese"
                      value="cuidese"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-cuidese">
                      Cuide-se
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-desvendandoia"
                      value="desvendandoia"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-desvendandoia">
                      Desvendando IA
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-painel"
                      value="painel"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-painel">
                      Painel
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-notciasdodia"
                      value="notciasdodia"
                      name="check-box"
                      checked>
                    <label class="c-newsletter__label" for="modal-notciasdodia">
                      Notícias do dia
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-painelsa"
                      value="painelsa"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-painelsa">
                      Painel S.A.
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-tudoaler"
                      value="tudoaler"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-tudoaler">
                      Tudo a ler
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-mnicabergamo"
                      value="mnicabergamo"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-mnicabergamo">
                      Mônica Bergamo
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-folhacarreiras"
                      value="folhacarreiras"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-folhacarreiras">
                      Folha Carreiras
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-chinaterradomeio"
                      value="chinaterradomeio"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-chinaterradomeio">
                      China, terra do meio
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-menu"
                      value="menu"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-menu">
                      Menu
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-folhaminas"
                      value="folhaminas"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-folhaminas">
                      Folha Minas
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-folhamercado"
                      value="folhamercado"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-folhamercado">
                      Folha Mercado
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-combo"
                      value="combo"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-combo">
                      Combo
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-colunaseblogs"
                      value="colunaseblogs"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-colunaseblogs">
                      Colunas e Blogs
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-dicasdoeditor"
                      value="dicasdoeditor"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-dicasdoeditor">
                      Dicas do Editor
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-paracurtirsp"
                      value="paracurtirsp"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-paracurtirsp">
                      Para curtir SP
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-lfora"
                      value="lfora"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-lfora">
                      Lá fora
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-folhanasala"
                      value="folhanasala"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-folhanasala">
                      Folha na Sala
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-folhamed"
                      value="folhamed"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-folhamed">
                      Folhamed
                      *                    </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-newsfrombrazil"
                      value="newsfrombrazil"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-newsfrombrazil">
                      News from Brazil
                                          </label>
                  </div>
                                                                                  <div class="c-form__checkbox">
                    <input type="checkbox"
                      id="modal-noticiasdebrasil"
                      value="noticiasdebrasil"
                      name="check-box"
                      >
                    <label class="c-newsletter__label" for="modal-noticiasdebrasil">
                      Noticias de Brasil
                                          </label>
                  </div>
                                                                    <div class="c-form__obs">
          <span>*exclusivo para assinantes</span>
        </div>
      </fieldset>
      <fieldset class="c-newsletter__fieldset">
        <legend>Você também gostaria de:</legend>
        <div class="c-form__checkbox">
          <input type="checkbox" id="modal-newsinformacoes" value="newsinformacoes" name="check-box" checked>
          <label class="c-newsletter__label" for="modal-newsinformacoes">Receber informações sobre produtos e serviços da Folha de S. Paulo</label>
        </div>
        <div class="c-form__checkbox">
          <input type="checkbox" id="modal-newsofertas" value="newsofertas" name="check-box">
          <label class="c-newsletter__label" for="modal-newsofertas">Receber ofertas de parceiros da Folha de S. Paulo</label>
        </div>
      </fieldset>
      <div class="c-newsletter__box-button">
        <a data-close class="c-button">Cancelar</a>
        <button class="c-button c-button--primary" name="origin_id" data-send>Confirmar</button>
      </div>
      </form>
      <div class="c-newsletter__feedback is-hidden" data-newsletter-feedback="success">
        <p>Cadastro realizado com sucesso!</p>
        <div class="c-newsletter__box-button">
          <a data-close class="c-button c-button--primary">Ok</a>
        </div>
      </div>
      <div class="c-newsletter__feedback is-hidden" data-newsletter-feedback="error">
        <p>Por favor, tente mais tarde!</p>
        <div class="c-newsletter__box-button">
          <a data-close class="c-button c-button--primary">Ok</a>
        </div>
      </div>
    </div>
  </div>
  <div class="c-modal__overlay" data-overlay></div>
</div>
      
        <script src="https://static.folha.uol.com.br/storybook/js/main-c4fec762d5.js"></script>
<script async src="https://static.folha.uol.com.br/storybook/js/news-49c387b52e.js"></script>

      
      
            <!--!-->

<script 
data-paywall
data-paywall-wall-register="no"
data-paywall-wall-env="folha"
data-paywall-product="portal"
src="//paywall.folha.uol.com.br/wall.js"></script>
  
        <div id="banner-1x1-area"></div>

                <script>
//chartbeat
var _sf_async_config = prevent_sf_async_config || window._sf_async_config;
//UOLTM - ads
//
document.querySelectorAll(".c-advertising__banner-area").forEach(function(ad){window.uolads.push({id:ad.id})});
window.uolads.push({id:"banner-1x1-area"});
//

//IVC
(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalIvcNamespace=p.GlobalIvcNamespace||[];
p.GlobalIvcNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//gadasource.storage.googleapis.com/ivc.js","ivc"));
window.ivc('newTracker','cf','ivccf.ivcbrasil.org.br',{idWeb:'125'});
window.ivc('trackPageView');

// chartbeat track (beta 0.2)
if (document.referrer && /(assinaturas\.folha\.com\.br\/\d+\/sucesso|login\.folha\.com\.br\/assinatura\/conclusao)/.test(document.referrer)) {
  (function tryCbTrack(delay,times){
  if (typeof chartbeat === 'function') {chartbeat('trackPaywallComplete')}
  else if (times > 0) {setTimeout(function(){tryCbTrack(delay,--times)}, delay)}
  }(20,200));
}

// cookieUOL
if (/CAUBR01/.test(document.cookie)) {
document.cookie="CAUBR01=;expires=Fri Aug 27 2021 12:00:00 GMT;domain=.uol.com.br;path=/;SameSite=None;Secure";
}
</script>
        
<script src="//static.folha.uol.com.br/plugins/stats/1.0/stats.js"></script>

<!-- Trackingcode BBC -->
<script>
  !function(s,e,n,c,r){if(r=s._ns_bbcws=s._ns_bbcws||r,s[r]||(s[r+"_d"]=s[r+"_d"]||[],s[r]=function(){s[r+"_d"].push(arguments)},s[r].sources=[]),c&&0>s[r].sources.indexOf(c)){var t=e.createElement(n);t.async=1,t.src=c;var a=e.getElementsByTagName(n)[0];a.parentNode.insertBefore(t,a),s[r].sources.push(c)}}
  (window,document,"script","https://news.files.bbci.co.uk/ws/partner-analytics/js/pageTracker.min.js","s_bbcws");

  s_bbcws('partner', 'folha.uol.com.br');
  s_bbcws('producer','brasil');
  s_bbcws('language', 'pt-br');
  s_bbcws('track', 'pageView');
</script>
<!-- /Trackingcode BBC -->
  
        <style>
* {
  font-family: unset;
}
</style>
<!--//-->                  <!--/push-->
                          
          <!-- Script Footer Taboola -->
<script type="text/javascript">
  window._taboola = window._taboola || [];

  function taboolaPush(tDark) {
    _taboola.push({
      mode: `thumbs-feed-01-a${tDark}`,
      container: `taboola-below-article-thumbnails${tDark}`,
      placement: `Below Article Thumbnails${!tDark ? '' : ' Dark'}`,
      target_type: 'mix'
    });
    _taboola.push({
      mode: `right-rail-thumbnails-a${tDark}`,
      container: `taboola-right-rail-thumbnails${tDark}`,
      placement: `Right Rail Thumbnails${!tDark ? '' : ' Dark'}`,
      target_type: 'mix'
    });
  }

  let continuePush = true;
  document.querySelectorAll('[name="contrast-theme"]').forEach(input => {
    if (input.checked) {
      taboolaPush(input.dataset.setContrastTheme === 't-dark' ? '-dark' : '');
    }

    input.addEventListener('click', event => {
      if (continuePush) {
        taboolaPush(event.target.dataset.setContrastTheme === 't-dark' ? '-dark' : '');
        continuePush = false;
      }
    });
  });

   _taboola.push({flush: true});
</script>
<!-- /Script Footer Taboola -->
          
        
      
          </div>
  </body>
</html>
