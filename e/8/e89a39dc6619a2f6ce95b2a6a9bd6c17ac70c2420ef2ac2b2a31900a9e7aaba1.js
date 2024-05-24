"use strict";(self.webpackChunk_twitteresponsive_web||[]).push([["shared~bundle.TwitterArticles~bundle.GifSearch"],{484026:(e,t,r)=>{r.d(t,{Rj:()=>S,WD:()=>A,ol:()=>Z});var a=r(256666),n=r(133028),o=r(968079),i=(r(477950),r(94908),r(118717)),u=r(459740),l=["category"];const c=function(e){var t=e.apiClient;e.featureSwitches;return{categories:function(e,r){return t.get("foundmedia/categories",e,r)},category:function(e,r){var a=e.category,n=(0,u.Z)(e,l);return t.get("foundmedia/categories/".concat(a),n,r)},search:function(e,r){return t.get("foundmedia/search",e,r)}}};var d=r(526853),s=(r(73439),r(753392)),h=r(823803),f="gifSearch",g="rweb/".concat(f),m=["fetchStatus"],p={},y={cursor:{},items:[],initialFetchStatus:h.ZP.NONE,nextFetchStatus:h.ZP.NONE};const v=function(e){var t=e.defaultQuery,r=e.getApiMethod,o=e.getParams,i=e.localNamespace,l=e.mergeNewItems,c=s.dg("".concat(g,"/").concat(i),"FETCH"),d=function(e,t,r){var o=r.fetchStatus,i=(0,u.Z)(r,m),l=e[t]||{},c=(l.cursor||{}).next?"nextFetchStatus":"initialFetchStatus";return(0,n.Z)((0,n.Z)({},e),{},(0,a.Z)({},t,(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},y),l),i),{},(0,a.Z)({},c,o))))},v=function(e){var t=e.cursor,a=e.query;return function(e,n,i){var u=i.api;return s._O(e,{request:r(u),params:o(t,a)})({actionTypes:c,meta:{query:a}})}},b=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return(e[f][i]||{})[r]||{}};return{actionTypes:c,fetchInitialIfNeeded:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).query,r=void 0===e?t:e;return function(e,t,a){a.api;var n=b(t(),r);return n.initialFetchStatus===h.ZP.LOADING||n.items?Promise.resolve():e(v({query:r}))}},fetchNextIfNeeded:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).query,r=void 0===e?t:e;return function(e,t,a){a.api;var n=b(t(),r),o=n.cursor,i=void 0===o?{}:o;return n.nextFetchStatus!==h.ZP.LOADING&&i.next?e(v({query:r,cursor:i.next})):Promise.resolve()}},reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;if(!t)return e;switch(t.type){case c.REQUEST:var r=t.meta.query;return d(e,r,{fetchStatus:h.ZP.LOADING});case c.FAILURE:var a=t.meta.query;return d(e,a,{fetchStatus:h.ZP.FAILED});case c.SUCCESS:var n=t.payload.cursor,o=t.meta.query,i=(e[o]||{}).items||[];return d(e,o,{cursor:n,fetchStatus:h.ZP.LOADED,items:l(i,t.payload)});default:return e}},selectInitialFetchStatus:function(e,t){return b(e,t).initialFetchStatus||h.ZP.NONE},selectItems:function(e,t){return b(e,t).items},selectNextFetchStatus:function(e,t){return b(e,t).nextFetchStatus||h.ZP.NONE},selectQueryState:b}};var b=function(e){return e.filter((function(e){var t=e.original_image,r=void 0===t?{}:t,a=r.height,n=r.width;return a>0&&n>0}))},S=v({defaultQuery:"categories",getApiMethod:function(e){return e.withEndpoint(c).categories},getParams:function(e){return e?{cursor:e}:{}},mergeNewItems:function(e,t){var r;return[].concat((0,o.Z)(e),(0,o.Z)((null==t||null===(r=t.data)||void 0===r?void 0:r.groups)||[]))},localNamespace:"categories"}),A=v({getApiMethod:function(e){return e.withEndpoint(c).category},getParams:function(e,t){return(0,n.Z)({category:t},e?{cursor:e}:{})},mergeNewItems:function(e,t){var r;return[].concat((0,o.Z)(e),(0,o.Z)(b((null==t||null===(r=t.data)||void 0===r?void 0:r.items)||[])))},localNamespace:"category"}),Z=v({getApiMethod:function(e){return e.withEndpoint(c).search},getParams:function(e,t){return(0,n.Z)({q:t},e?{cursor:e}:{})},mergeNewItems:function(e,t){var r;return[].concat((0,o.Z)(e),(0,o.Z)(b((null==t||null===(r=t.data)||void 0===r?void 0:r.items)||[])))},localNamespace:"search"}),_=(0,i.UY)({categories:S.reducer,category:A.reducer,search:Z.reducer});d.Z.register((0,a.Z)({},f,_))},137472:(e,t,r)=>{r.d(t,{ZP:()=>Z});var a=r(709249),n=r(887371),o=r(545754),i=r(486906),u=r(202784),l=r(325686),c=r(882392),d=r(154414),s=r(973186),h=r(645184),f=r.n(h),g=r(463154),m=r(923335),p=r(392160),y=r(924433);const v=(0,p.Z)().propsFromActions((function(){return{createLocalApiErrorHandler:(0,m.createLocalApiErrorHandlerWithContextFactory)("FOUND_MEDIA_AUTOPLAY_TOGGLE"),updateSettings:y.VP}}));var b=f().j7fc4f9c,S=function(e){(0,o.Z)(r,e);var t=(0,i.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o)))._handleSwitchChanged=function(t){var r=e.props,a=r.createLocalApiErrorHandler,n=r.onToggleChange;(0,r.updateSettings)({shouldAutoPlayGif:t}).catch(a({showToast:!0})),n(t)},e}return(0,n.Z)(r,[{key:"render",value:function(){var e,t,r=this.props,a=r.category,n=r.location,o=r.query,i=r.shouldAutoPlayGif,s=o||(null==n||null===(e=n.state)||void 0===e?void 0:e.query),h=a||(null==n||null===(t=n.state)||void 0===t||null===(t=t.category)||void 0===t?void 0:t.display_name);return(0,g.Z)()&&(s||h)?u.createElement(l.Z,{style:A.root},u.createElement(c.ZP,{color:"gray700"},b),u.createElement(d.Z,{accessibilityLabel:b,onValueChange:this._handleSwitchChanged,value:i})):null}}]),r}(u.Component),A=s.Z.create((function(e){return{root:{flexDirection:"row",justifyContent:"space-between",margin:e.spaces.space12}}}));const Z=v(S)},950148:(e,t,r)=>{r.d(t,{ZP:()=>Z});var a=r(196234),n=(r(136728),r(73439),r(202784)),o=r(694407),i=r(325686),u=r(411839),l=r(882392),c=r(973186),d=r(452650),s=r(872983),h=r(351153),f=r(24949),g=r(53223),m=r(392160),p=r(484026).Rj,y=function(e,t){return p.selectItems(e)},v=function(e){return p.selectInitialFetchStatus(e)};const b=(0,m.Z)().propsFromState((function(){return{categories:(0,f.P1)(y,(function(e){return e?(0,g.Z)(e.map((function(e){return e.display_name?e:void 0}))):void 0})),initialFetchStatus:v}})).propsFromActions((function(){return{fetchInitialIfNeeded:p.fetchInitialIfNeeded,fetchNextIfNeeded:p.fetchNextIfNeeded}}));var S=n.memo((function(e){var t=e.category,r=e.gifSearchKey,a=e.history,c=e.index,s=e.onClick,f=e.withLeftMargin,g=t.display_name,m=t.original_image.still_image_url,p=n.useCallback((function(){if(s)s(t);else{var e,n=null==a||null===(e=a.location.state)||void 0===e?void 0:e.dmConversationId;null==a||a.push({pathname:"".concat(d.GifSearchPaths.category,"/").concat(t.id),state:{category:t,gifSearchKey:r,dmConversationId:n}})}}),[a,t,r,s]);return n.createElement(u.Z,{onPress:p,style:[A.category,f&&A.leftMargin]},n.createElement(o.Z,{source:m,style:[A.categoryImage,{backgroundColor:(0,h.d)(c)}]}),n.createElement(i.Z,{style:A.categoryNameContainer},n.createElement(l.ZP,{color:"white",size:"headline1",weight:"bold"},g)))})),A=c.Z.create((function(e){return{row:{flexDirection:"row",marginTop:e.spaces.space4},firstRow:{marginTop:0},category:{height:"10rem",flexGrow:1},leftMargin:{marginStart:e.spaces.space4},categoryImage:{flexGrow:1},categoryNameContainer:{position:"absolute",bottom:0,width:"100%",padding:e.spaces.space8,backgroundImage:"linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))"}}}));const Z=b((function(e){var t=e.categories,r=e.fetchInitialIfNeeded,o=e.gifSearchKey,u=e.history,l=e.initialFetchStatus,c=e.onClickCategory,d=n.useCallback((function(){r()}),[r]),h=n.useCallback((function(){var e=[];if(t)for(var r=0;r<t.length;r+=2)e.push([t[r],t[r+1]]);return n.createElement(i.Z,null,n.Children.toArray(e.map((function(e,t){var r=(0,a.Z)(e,2),l=r[0],d=r[1];return n.createElement(i.Z,{style:[A.row,0===t&&A.firstRow]},n.createElement(S,{category:l,gifSearchKey:o,history:u,index:2*t,onClick:c,withLeftMargin:!1}),d?n.createElement(S,{category:d,gifSearchKey:o,history:u,index:2*t+1,onClick:c,withLeftMargin:!0}):null)}))))}),[t,o,u,c]);return n.useEffect((function(){d()}),[d]),n.createElement(s.Z,{fetchStatus:l,onRequestRetry:d,render:h})}))},397442:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(709249),n=r(887371),o=r(545754),i=r(486906),u=r(202784),l=r(212530),c=r(460673),d=r(484026),s=r(137472),h=r(369256),f=function(e){(0,o.Z)(r,e);var t=(0,i.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={shouldAutoPlayGifOverride:null},e._handleToggleChange=function(t){e.setState({shouldAutoPlayGifOverride:t})},e}return(0,n.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.category,r=e.gifSearchKey,a=e.history,n=e.location,o=e.onClickGif,i=e.shouldAutoPlayGif,c=this.state.shouldAutoPlayGifOverride,f=(0,l._f)(c,i);return u.createElement(u.Fragment,null,u.createElement(s.ZP,{category:t,location:n,onToggleChange:this._handleToggleChange,shouldAutoPlayGif:f}),!!t&&u.createElement(h.Z,{gifSearchKey:r,history:a,module:d.WD,onClickGif:o,query:t.id,shouldAutoPlayGif:f}))}}]),r}(u.Component);const g=(0,c.Z)(f,{element:"gallery"})},243398:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(709249),n=r(887371),o=r(545754),i=r(486906),u=r(202784),l=r(212530),c=r(460673),d=r(484026),s=r(137472),h=r(369256),f=function(e){(0,o.Z)(r,e);var t=(0,i.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={shouldAutoPlayGifOverride:null},e._handleToggleChange=function(t){e.setState({shouldAutoPlayGifOverride:t})},e}return(0,n.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.gifSearchKey,r=e.history,a=e.location,n=e.onClickGif,o=e.query,i=e.shouldAutoPlayGif,c=this.state.shouldAutoPlayGifOverride,f=(0,l._f)(c,i);return u.createElement(u.Fragment,null,u.createElement(s.ZP,{location:a,onToggleChange:this._handleToggleChange,query:o,shouldAutoPlayGif:f}),u.createElement(h.Z,{fromSearch:!0,gifSearchKey:t,history:r,module:d.ol,onClickGif:n,query:o,shouldAutoPlayGif:f}))}}]),r}(u.Component);const g=(0,c.Z)(f,{element:"gallery"})},369256:(e,t,r)=>{r.d(t,{Z:()=>re});var a=r(968079),n=r(196234),o=r(709249),i=r(887371),u=r(545754),l=r(486906),c=r(202784),d=r(928316),s=r(325686),h=r(108352),f=r(973186),g=r(645184),m=r.n(g),p=r(316742),y=r(16587),v=r(958955),b=r(872983),S=r(336873),A=r(348501),Z=r(212530),_=r(5255),w=r(351153),C=r(133028),M=(r(743108),r(136728),function(e,t){var r=e.reduce((function(e,t){var r=t.original_image;return e+r.width/r.height}),0);return Math.ceil(t/r)});function D(e,t,r){return e.reduce((function(e,a,n){return e[e.length-1].push((0,C.Z)((0,C.Z)({},a),{},{index:n})),e[e.length-1].length>0&&M(e[e.length-1],r)<t&&e.push([]),e}),[[]]).filter((function(e){return e.length>0}))}r(443430);var E=r(211469),I=r(392160),N=r(739581),P=r(454352),T=r(34556),x=r(820288),k=[],F=function(e,t){var r=t.module,a=t.query;return r.selectInitialFetchStatus(e,a)},R=function(e,t){var r=t.module,a=t.query;return r.selectItems(e,a)},G=function(e,t){var r=t.module,a=t.query;return r.selectNextFetchStatus(e,a)},q=function(e){var t,r=e.tweetComposer,a=null==r?void 0:r.activeParentKey,n=x.E_(e,a),o=null===(t=r[a].composerData[n])||void 0===t?void 0:t.mediaIds;return Array.isArray(o)?o:k};const O=(0,I.Z)().propsFromState((function(){return{initialFetchStatus:F,items:R,nextFetchStatus:G,oldMediaIds:q}})).adjustStateProps((function(e){var t=e.initialFetchStatus,r=e.items,n=e.nextFetchStatus,o=e.oldMediaIds;return{initialFetchStatus:t,items:Array.isArray(r)?(0,E.Z)(r,(function(e){return e.url?(0,C.Z)((0,C.Z)({},e),{},{thumbnail_images:(0,a.Z)(e.thumbnail_images).sort((function(e,t){return t.height*t.width-e.height*e.width}))}):void 0})):void 0,nextFetchStatus:n,oldMediaIds:o}})).propsFromActions((function(e){var t,r,a=e.history,n=e.module;return{addExternalMediaUpload:T.Q6,addMediaToDM:(r=null==a||null===(t=a.location)||void 0===t?void 0:t.state,function(e,t){var a=r&&r.dmConversationId;return(0,P.rA)(a,e,t)}),setMediaMetadata:T._B,fetchInitialIfNeeded:n.fetchInitialIfNeeded,fetchNextIfNeeded:n.fetchNextIfNeeded,scribeAction:N.n9,updateSingleComposerV2:x.zi}}));var L=r(694407),K=r(411839),z=r(335111),U=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.backgroundColor,r=e.height,a=e.onClick,n=e.width;return c.createElement(K.Z,{onPress:a,style:[Q.imageContainer,B(t,r,n).background]},this._renderPreview())}},{key:"_renderPreview",value:function(){var e=this.props,t=e.altText,r=e.animatedMediaUrl,a=e.height,n=e.shouldAutoPlayGif,o=e.stillMediaUrl,i={height:a,width:e.width,uri:n?r:o};return c.createElement(L.Z,{accessibilityLabel:t,source:i,testID:z.Z.gifSearchGifImage})}}]),r}(c.Component),B=function(e,t,r){return f.Z.create((function(a){return{background:{backgroundColor:e,height:t,width:r}}}))},Q=f.Z.create((function(e){return{imageContainer:{marginHorizontal:"1px",overflow:"hidden",flexShrink:1}}}));const W=U,H="gifSearchTimelineRoot";var V=m().a66b7760,j=m().a723aefa,Y=m().a6ecfa0a,X=function(e){return e.map((function(e){return e.id})).join("-")},J=(0,p.Z)(null),$=[],ee=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(e,i){var u;return(0,o.Z)(this,r),(u=t.call(this,e,i))._rootNode=null,u._render=function(){var e=u.props,t=e.items,r=e.query,a=u.state.width,n=t?u._brickLayout(t,150,a):$;return a>0?c.createElement(S.Z,{assumedItemHeight:150,cacheKey:"gifSearchCategory/".concat(r),footer:u._getRenderFooter(),identityFunction:X,items:n,noItemsRenderer:u._renderEmptyItem,onNearEnd:u._handleFetchNext,renderer:u._getRowRenderer()}):null},u._getMemoizedRowRenderer=(0,y.Z)((function(e,t,r){return function(a){var o=M(a,t),i=t-2*a.length-1,u=0;return c.createElement(s.Z,{style:[te.imageRow,{height:o}]},a.map((function(t,l){var d=(0,n.Z)(t.thumbnail_images,1)[0],s=o/d.height,h=l===a.length-1?i-u:Math.round(d.width*s),f=d.still_image_url,g=d.url;return u+=h,c.createElement(W,{altText:t.alt_text||V,animatedMediaUrl:g,backgroundColor:(0,w.d)(t.index),height:o,key:t.index,onClick:r(t),shouldAutoPlayGif:e,stillMediaUrl:f,width:h})})))}})),u._getRowRenderer=function(){var e=u.props.shouldAutoPlayGif,t=u.state.width;return u._getMemoizedRowRenderer(e,t,u._handleClickFactory)},u._handleClickFactory=function(e){return function(){var t=u.props,r=t.addExternalMediaUpload,o=t.addMediaToDM,i=t.fromSearch,l=t.gifSearchKey,c=t.history,d=t.onClickGif,s=t.scribeAction,h=t.setMediaMetadata,f=t.updateSingleComposerV2,g=e.alt_text,m=e.found_media_origin,p=e.provider,y=e.original_image.url,b=e.preview_image,S=b.height,A=b.url,w=b.width,C=(0,n.Z)(e.thumbnail_images,1)[0],M=e.url,D=r({mediaCategory:l===Z.AD.Composition||l===Z.AD.NoteComposition?_.xz.TweetGif:_.xz.DMGif,mediaType:"image/gif",previewMediaType:"video/mp4",previewUrl:A,sourceUrl:y,stillMediaUrl:C.still_image_url,width:w,height:S}),E=D.map((function(e){return e.id})),I={found_media_origin:m,provider:p,url:M};if(g&&h(E[0],{defaultAltText:g,gifMetadata:I}),l===Z.AD.Composition){var N=u.props.oldMediaIds,P=(0,a.Z)((0,v.Z)(N.concat(E)));f({updates:{mediaIds:u.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled")?P:E,gifMetadata:I}})}else l===Z.AD.DMComposition?o(E,I):l===Z.AD.NoteComposition&&(null==d||d(D));s({page:l,section:"gif_search",element:"category",action:i?"search":"select"}),null==c||c.go(-2)}},u._renderEmptyItem=function(){return c.createElement(h.Z,{header:j,message:Y})},u._getRenderMemoizedFooter=(0,y.Z)((function(e,t){return c.createElement(b.Z,{fetchStatus:e,onRequestRetry:t,render:J})})),u._getRenderFooter=function(){var e=u.props.nextFetchStatus;return u._getRenderMemoizedFooter(e,u._handleFetchNext)},u._handleFetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.props.query;(0,u.props.fetchInitialIfNeeded)({query:e})},u._handleFetchNext=function(){var e=u.props;(0,e.fetchNextIfNeeded)({query:e.query})},u._handleResize=function(){u._rootNode&&u._rootNode instanceof Element&&u.setState({width:u._rootNode.clientWidth})},u._brickLayout=(0,y.Z)(D),u._setRootNode=function(e){u._rootNode=d.findDOMNode(e)},u.state={width:0},u}return(0,i.Z)(r,[{key:"componentDidUpdate",value:function(e){e.query!==this.props.query&&this._handleFetch(this.props.query)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this._handleResize),this._handleFetch(),this._handleResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._handleResize)}},{key:"render",value:function(){var e=this.props.initialFetchStatus;return c.createElement("div",{"data-testid":H,ref:this._setRootNode},c.createElement(b.Z,{fetchStatus:e,onRequestRetry:this._handleFetch,ref:this._setRootNode,render:this._render}))}}]),r}(c.Component);ee.contextType=A.rC,ee.defaultProps={fromSearch:!1};var te=f.Z.create((function(e){return{emptyItem:{display:"inline-block",paddingHorizontal:e.spaces.space12,paddingVertical:e.spaces.space32},imageRow:{flexDirection:"row",marginBottom:2}}}));const re=O(ee)},452650:(e,t,r)=>{r.r(t),r.d(t,{GifSearchPaths:()=>R,GifSearchScreen:()=>G,default:()=>O});var a=r(709249),n=r(887371),o=r(545754),i=r(486906),u=(r(315735),r(73439),r(906886),r(344112),r(477950),r(136728),r(385940),r(202784)),l=r(325686),c=r(107267),d=r(322150),s=r(229496),h=r(973186),f=r(645184),g=r.n(f),m=r(954170),p=r(16587),y=r(235193),v=r(212530),b=r(845855),S=r(759824),A=r(269418),Z=r(385300),_=r(678204),w=r(463142),C=r(873606),M=r(392160),D=r(924433),E=r(871570),I=function(e,t){return(0,D.l4)(e).shouldAutoPlayGif};const N=(0,M.Z)().propsFromState((function(){return{shouldAutoPlayGif:I,isDataSaverEnabled:D.IX,autoplayOption:E.AP}})).adjustStateProps((function(e){var t=e.autoplayOption,r=e.isDataSaverEnabled;return{isDataSaverEnabled:r,shouldAutoPlayGif:(e.shouldAutoPlayGif||(0,C.Z)(t)&&!r)&&!w.Z.reducedMotionEnabled}}));var P=r(335111),T=g().a50ba822,x=g().a9ae1e78,k=(0,Z.p)((function(){return Promise.all([r.e("shared~loader.DMDrawer~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.Articles~bundle.Audi"),r.e("shared~loader.Typeahead~loader.DMDrawer~bundle.MultiAccount~bundle.ReaderMode~bundle.Articles~bundle.AudioSpa"),r.e("shared~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.Articles~bundle.AudioSpacePeek~bundl"),r.e("shared~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.AudioSpacePeek~bundle.Birdwatch~bund"),r.e("shared~loader.DMDrawer~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpaceba"),r.e("shared~loader.DashMenu~loader.SideNav~loader.AppModules~loader.DMDrawer~bundle.MultiAccount~bundle.ReaderMode"),r.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.BookmarkFolders~bundle.Communities~bundle.TwitterArticles~bund"),r.e("shared~bundle.AudioSpacePeek~bundle.Communities~bundle.TwitterArticles~bundle.ComposeMedia~ondemand.SettingsI"),r.e("shared~loader.directMessagesData~loader.Typeahead~loader.DMDrawer~ondemand.DirectMessagesCrypto~bundle.Commun"),r.e("shared~loader.directMessagesData~loader.Typeahead~loader.DMDrawer~bundle.Communities~bundle.TwitterArticles~b"),r.e("shared~loader.Typeahead~loader.DMDrawer~bundle.Communities~bundle.TwitterArticles~bundle.Compose~bundle.Deleg"),r.e("shared~loader.DMDrawer~bundle.TwitterArticles~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~b"),r.e("shared~bundle.TwitterArticles~bundle.GifSearch"),r.e("bundle.GifSearch")]).then(r.bind(r,741849))})),F=(0,Z.p)((function(){return Promise.all([r.e("shared~loader.DMDrawer~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.Articles~bundle.Audi"),r.e("shared~loader.Typeahead~loader.DMDrawer~bundle.MultiAccount~bundle.ReaderMode~bundle.Articles~bundle.AudioSpa"),r.e("shared~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.Articles~bundle.AudioSpacePeek~bundl"),r.e("shared~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.AudioSpacePeek~bundle.Birdwatch~bund"),r.e("shared~loader.DMDrawer~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpaceba"),r.e("shared~loader.DashMenu~loader.SideNav~loader.AppModules~loader.DMDrawer~bundle.MultiAccount~bundle.ReaderMode"),r.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.BookmarkFolders~bundle.Communities~bundle.TwitterArticles~bund"),r.e("shared~bundle.AudioSpacePeek~bundle.Communities~bundle.TwitterArticles~bundle.ComposeMedia~ondemand.SettingsI"),r.e("shared~loader.directMessagesData~loader.Typeahead~loader.DMDrawer~ondemand.DirectMessagesCrypto~bundle.Commun"),r.e("shared~loader.directMessagesData~loader.Typeahead~loader.DMDrawer~bundle.Communities~bundle.TwitterArticles~b"),r.e("shared~loader.Typeahead~loader.DMDrawer~bundle.Communities~bundle.TwitterArticles~bundle.Compose~bundle.Deleg"),r.e("shared~loader.DMDrawer~bundle.TwitterArticles~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~b"),r.e("shared~bundle.TwitterArticles~bundle.GifSearch"),r.e("bundle.GifSearch")]).then(r.bind(r,549690))})),R={category:"/i/foundmedia/category",search:"/i/foundmedia/search"},G=function(e){(0,o.Z)(r,e);var t=(0,i.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).state={searchDisabled:!0},n._gifSearchKey=n._getGifSearchKey(),n._getScribeNamespace=(0,p.Z)((function(e){return{page:e,section:"gif_search"}})),n._setTextInputRef=function(e){n._textInputRef=e},n._handleChange=function(e){var t=e.currentTarget.value;n._shouldRenderResultsOnChange?n._goToQueryDebounced(t):n.setState({searchDisabled:!t})},n._handleClear=function(){var e=n.props,t=e.history,r=e.isDataSaverEnabled,a=e.location,o=a.pathname.startsWith(R.category),i=a.pathname===R.search&&a.state&&a.state.query;!r&&(o||i)?t.goBack():r&&n.setState({searchDisabled:!0})},n._handleSubmit=function(){var e=n._textInputRef&&n._textInputRef.getValue();n._goToQuery(e)},n._handleSearch=function(e){var t=e.currentTarget.value;n._goToQuery(t)},n._goToQuery=function(e){var t=n.props,r=t.history,a=t.isDataSaverEnabled,o=t.location,i={};i.pathname=R.search;var u=o.state&&o.state.query,l=o.pathname===R.search&&!u,c=o.pathname.startsWith(R.category)||o.pathname===R.search&&u,d=!a&&c,s=o.state&&o.state.dmConversationId;e?(i.state={dmConversationId:s,query:e},l?r.push(i):r.replace(i)):d&&r.goBack()},n._goToQueryDebounced=(0,y.Z)((function(){var e;return(e=n)._goToQuery.apply(e,arguments)}),v.zH),n._shouldRenderResultsOnChange=!n.props.isDataSaverEnabled,n}return(0,n.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.history,r=e.location,a=e.shouldAutoPlayGif,n=this._gifSearchKey;if(!n)return u.createElement(S.Z,{to:"/"});var o={gifSearchKey:n,history:t,location:r,searchBox:this._renderSearchBox(),shouldAutoPlayGif:a};return u.createElement(b.nO,{namespace:this._getScribeNamespace(n)},u.createElement(c.rs,null,u.createElement(c.AW,{exact:!0,path:R.search},u.createElement(k,o)),u.createElement(c.AW,{exact:!0,path:"".concat(R.category,"/").concat(A.kM)},u.createElement(F,o)),u.createElement(c.AW,{component:_.Z})))}},{key:"_getGifSearchKey",value:function(){var e=this.props.location.state||{},t=e.gifSearchKey,r=e.gifSearchKeySource;return t||r&&(0,v.Qy)(r)&&r}},{key:"_getQueryOrCategory",value:function(){var e=this.props.location,t=e.state&&e.state.query,r=e.state&&e.state.category?e.state.category.display_name:"";return t||r}},{key:"_renderSearchBox",value:function(){var e=this.state.searchDisabled,t=this._getQueryOrCategory();return u.createElement(l.Z,{style:q.searchContainer},u.createElement(d.Z,{Icon:m.default,autoFocus:!0,defaultValue:t,key:t,onChange:this._handleChange,onClear:this._handleClear,onSubmitEditing:this._handleSearch,placeholder:T,ref:this._setTextInputRef,style:q.searchInput,testID:P.Z.gifSearchSearchInput,withClearButton:!0}),this._shouldRenderResultsOnChange?null:u.createElement(s.ZP,{disabled:e,onPress:this._handleSubmit,size:"small",style:q.searchButton,type:"brandFilled"},x))}}]),r}(u.Component),q=h.Z.create((function(e){return{searchContainer:{alignItems:"center",flex:1,flexDirection:"row",marginVertical:e.spaces.space8},searchInput:{height:"100%"},searchButton:{marginStart:e.spaces.space12}}}));const O=N(G)},335111:(e,t,r)=>{r.d(t,{Z:()=>a});const a={gifSearchSearchInput:"gifSearchSearchInput",gifSearchGifImage:"gifSearchGifImage"}},351153:(e,t,r)=>{r.d(t,{d:()=>l});var a=r(973186).Z.theme.colors,n=a.blue500,o=a.green500,i=a.magenta500,u=[n,o,a.orange500,a.purple500,i,a.yellow500],l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.floor(Math.random()*u.length+1);return u[e%u.length]}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/shared~bundle.TwitterArticles~bundle.GifSearch.2e4e960a.js.mapabout/people/w/ward_jason_m/_jcr_content/par/bio.crop.130x130.cm.jpeg/1600774842640.jpeg" loading="lazy" itemprop="contentUrl" width="130" height="130" alt="Jason M. Ward"/>
    </picture>
  </a>
  
</div>

    

</div>
		<h5 class="heading-5"><a href="/about/people/w/ward_jason_m.html">Jason M. Ward</a>
		<a href="https://twitter.com/jason_m_ward" class="t">@jason_m_ward</a>
		</h5>
		<dl>
			<dt>Commentary:</dt>
			<dd><a href="/pubs/commentary/2024/02/why-is-la-still-letting-single-family-homeowners-block.html">Why is L.A. Still Letting Single-Family Homeowners Block Solutions to the Housing Crisis?</a></dd>
		</dl>
	</li>

</ul>
</div>

					</div>
					<div class="eight columns vr-left">
						<h4 class="nolink heading-4">By Research Area</h4>
						<div class="row">
						<ul class="txt six columns"><li><a href="/about/people.html?topic=children-families-and-communities">Children, Families, and Communities</a></li><li><a href="/about/people.html?topic=cyber-and-data-sciences">Cyber and Data Sciences</a></li><li><a href="/about/people.html?topic=education-and-literacy">Education and Literacy</a></li><li><a href="/about/people.html?topic=energy-and-environment">Energy and Environment</a></li><li><a href="/about/people.html?topic=health-health-care-and-aging">Health, Health Care, and Aging</a></li><li><a href="/about/people.html?topic=homeland-security-and-public-safety">Homeland Security and Public Safety</a></li></ul><ul class="txt six columns"><li><a href="/about/people.html?topic=infrastructure-and-transportation">Infrastructure and Transportation</a></li><li><a href="/about/people.html?topic=international-affairs">International Affairs</a></li><li><a href="/about/people.html?topic=law-and-business">Law and Business</a></li><li><a href="/about/people.html?topic=national-security-and-terrorism">National Security and Terrorism</a></li><li><a href="/about/people.html?topic=science-and-technology">Science and Technology</a></li><li><a href="/about/people.html?topic=social-equity">Social Equity</a></li><li><a href="/about/people.html?topic=workers-and-the-workplace">Workers and the Workplace</a></li></ul>
						</div>
					</div>
					
				</div> 
			</li>
			<li class="c hasDropdown">
				<h3 class="heading-3"><a href="/capabilities.html" class="dd-toggle">Capabilities</a></h3>
				<div class="dropdown row">
					<div class="five columns">
						<div class="capabilities htmlBlock">
  						<p class="intro">Drawing upon decades of experience, RAND provides research services, systematic analysis, and innovative thinking to a global clientele that includes government agencies, foundations, and private-sector firms.</p>
						<div class="row">
							<div class="six columns">
								<ul class="txt">
									<li><a href="/capabilities.html">Capabilities Overview</a></li>
									<li><a href="/capabilities/solutions.html">RAND Solutions</a></li>
								</ul>
								<h4 class="heading-5">Who We Work For</h4>
								<ul class="txt">
									<li><a href="/capabilities/public.html">Public Sector</a></li>
									<li><a href="/capabilities/philanthropic.html">Philanthropic Sector</a></li>
									<li><a href="/capabilities/private.html">Private Sector</a></li>
								</ul>
							</div>
							<div class="six columns">
								<h4 class="heading-5">Work with Us</h4>
								<ul class="txt">
									<li><a href="/capabilities/business-contacts.html">Explore Business Contacts</a></li>
								</ul>
								<h4 class="heading-5">About RAND Research</h4>
								<ul class="txt">
									<li><a href="/capabilities/disciplinary-expertise.html">Disciplinary Expertise</a></li>
									<li><a href="/about/standards.html">Quality Standards</a></li>
<li><a href="/capabilities/methodological-innovation.html">Methodological Innovation</a></li>
								</ul>
							</div>
						</div>


    
</div>

					</div>
					
					<div class="seven columns vr-left" id="nav-case-studies">
							<h4 class="heading-4"><a href="/capabilities/solutions.html">Featured Solutions</a></h4>	 
							<div class="caseStudies teaserList parbase">

  <div>
  <ul class="teasers list">
<li  >
<div class="img-wrap"><a href="/capabilities/solutions/developing-strategies-for-summer-learning.html"><div class="teaser image"><div data-cmp-src="/content/rand/capabilities/solutions/developing-strategies-for-summer-learning/jcr:content/par/teaser.crop.375x280.cm.jpeg/1666310927960.jpeg" id="image-18daca70cd" data-cmp-hook-image="imageV3" class="cmp-image" itemscope itemtype="http://schema.org/ImageObject">
  
  
    <picture class="cmp-image__picture ">
      <source srcset="/content/rand/capabilities/solutions/developing-strategies-for-summer-learning/jcr:content/par/teaser.crop.375x280.cm.webp/1666310927960.webp 1x, /content/rand/capabilities/solutions/developing-strategies-for-summer-learning/jcr:content/par/teaser.crop.750x560.cm.webp/1666310927960.webp 2x" type="image/webp"/>

      <img src="/content/rand/capabilities/solutions/developing-strategies-for-summer-learning/_jcr_content/par/teaser.crop.375x280.cm.jpeg/1666310927960.jpeg" loading="lazy" itemprop="contentUrl" width="375" height="280" alt="girl studying outside"/>
    </picture>
  
  
</div>

    

</div></a></div><div class="text">
<h5 class="title"><a href="/capabilities/solutions/developing-strategies-for-summer-learning.html">Developing Strategies for Summer Learning</a></h3></div></li>

<li  >
<div class="img-wrap"><a href="/capabilities/solutions/improving-psychological-wellbeing-and-work-outcomes.html"><div class="teaser image"><div data-cmp-src="/content/rand/capabilities/solutions/improving-psychological-wellbeing-and-work-outcomes/jcr:content/par/teaser.crop.375x280.cm.jpeg/1626711171000.jpeg" id="image-edad20bb1c" data-cmp-hook-image="imageV3" class="cmp-image" itemscope itemtype="http://schema.org/ImageObject">
  
  
    <picture class="cmp-image__picture ">
      <source srcset="/content/rand/capabilities/solutions/improving-psychological-wellbeing-and-work-outcomes/jcr:content/par/teaser.crop.375x280.cm.webp/1626711171000.webp 1x, /content/rand/capabilities/solutions/improving-psychological-wellbeing-and-work-outcomes/jcr:content/par/teaser.crop.750x560.cm.webp/1626711171000.webp 2x" type="image/webp"/>

      <img src="/content/rand/capabilities/solutions/improving-psychological-wellbeing-and-work-outcomes/_jcr_content/par/teaser.crop.375x280.cm.jpeg/1626711171000.jpeg" loading="lazy" itemprop="contentUrl" width="375" height="280" alt="Depressed woman talking to her therapist"/>
    </picture>
  
  
</div>

    

</div></a></div><div class="text">
<h5 class="title"><a href="/capabilities/solutions/improving-psychological-wellbeing-and-work-outcomes.html">Improving Psychological Wellbeing and Work Outcomes in the UK</a></h3></div></li>

<li  >
<div class="img-wrap"><a href="/capabilities/solutions/planning-for-the-rising-costs-of-dementia.html"><div class="teaser image"><div data-cmp-src="/content/rand/capabilities/solutions/planning-for-the-rising-costs-of-dementia/jcr:content/par/teaser.crop.375x280.cm.jpeg/1652985554759.jpeg" id="image-b5a7fa2b95" data-cmp-hook-image="imageV3" class="cmp-image" itemscope itemtype="http://schema.org/ImageObject">
  
  
    <picture class="cmp-image__picture ">
      <source srcset="/content/rand/capabilities/solutions/planning-for-the-rising-costs-of-dementia/jcr:content/par/teaser.crop.375x280.cm.webp/1652985554759.webp 1x, /content/rand/capabilities/solutions/planning-for-the-rising-costs-of-dementia/jcr:content/par/teaser.crop.750x560.cm.webp/1652985554759.webp 2x" type="image/webp"/>

      <img src="/content/rand/capabilities/solutions/planning-for-the-rising-costs-of-dementia/_jcr_content/par/teaser.crop.375x280.cm.jpeg/1652985554759.jpeg" loading="lazy" itemprop="contentUrl" width="375" height="280" alt="A younger man helping an elderly man who is using a walker"/>
    </picture>
  
  
</div>

    

</div></a></div><div class="text">
<h5 class="title"><a href="/capabilities/solutions/planning-for-the-rising-costs-of-dementia.html">Planning for the Rising Costs of Dementia</a></h3></div></li>

<li  >
<div class="img-wrap"><a href="/capabilities/solutions/helping-coastal-communities-plan-for-climate-change.html"><div class="teaser image"><div data-cmp-src="/content/rand/capabilities/solutions/helping-coastal-communities-plan-for-climate-change/jcr:content/par/teaser.crop.375x280.cm.jpeg/1626713504461.jpeg" id="image-a90af28ea4" data-cmp-hook-image="imageV3" class="cmp-image" itemscope itemtype="http://schema.org/ImageObject">
  
  
    <picture class="cmp-image__picture ">
      <source srcset="/content/rand/capabilities/solutions/helping-coastal-communities-plan-for-climate-change/jcr:content/par/teaser.crop.375x280.cm.webp/1626713504461.webp 1x, /content/rand/capabilities/solutions/helping-coastal-communities-plan-for-climate-change/jcr:content/par/teaser.crop.750x560.cm.webp/1626713504461.webp 2x" type="image/webp"/>

      <img src="/content/rand/capabilities/solutions/helping-coastal-communities-plan-for-climate-change/_jcr_content/par/teaser.crop.375x280.cm.jpeg/1626713504461.jpeg" loading="lazy" itemprop="contentUrl" width="375" height="280" alt="Sunrise over Louisiana wetlands"/>
    </picture>
  
  
</div>

    

</div></a></div><div class="text">
<h5 class="title"><a href="/capabilities/solutions/helping-coastal-communities-plan-for-climate-change.html">Helping Coastal Communities Plan for Climate Change</a></h3></div></li>
</ul></div>
</div>

					</div>
				</div> 

			</li>
			<li class="g hasDropdown">
				<h3 class="heading-3"><a href="https://www.pardeerand.edu/" class="dd-toggle">Graduate <span>School</span></a></h3>
				<div class="dropdown row">
					<div class="four columns">
						<div class="prgsText htmlBlock">
  <p class="intro">The Pardee RAND Graduate School <span class="nowrap">(<a href="https://www.pardeerand.edu">PardeeRAND.edu</a>)</span> is home to the only Ph.D. and M.Phil. programs offered at an independent public policy research organization&mdash;the RAND Corporation.</p>
	<ul class="txt">
		<li><a href="https://www.pardeerand.edu/about.html">About Pardee RAND</a></li>
		<li><a href="https://www.pardeerand.edu/admissions.html">Admissions</a></li>
		<li><a href="https://www.pardeerand.edu/degree-program.html">Degree Programs</a></li>
		<li><a href="https://www.pardeerand.edu/students.html">Students</a></li>
		<li><a href="https://www.pardeerand.edu/faculty.html">Faculty</a></li>
	</ul>				


    
</div>

					</div>
					<div class="four columns vr-left">
						<div class="prgsVideo htmlBlock">
  	

	<h3 class="heading-4"><a href="https://www.pardeerand.edu/admissions/student-life.html">Featured Video: Campus Tour</a></h3>
		<div class="video">
			<a href="https://www.pardeerand.edu/admissions/student-life.html">
			<img src="https://i1.ytimg.com/vi/33gnOcJ0fIM/0.jpg" alt="Pardee RAND Graduate School sign" height="360" width="480" loading="lazy">
			<h4 class="heading-5">Student Life at Pardee RAND</h4>
			</a>
		</div>


    
</div>

					</div>
					<div class="four columns vr-left">
						<h4 class="nolink heading-4">Student Spotlight</h4>
						<div class="featuredStudents">



<ul class="spotlights" id="students-spotlight">

	<li>
		<div class="bio image"><div data-cmp-src="/content/rand/about/people/v/villegas_carlos/jcr:content/par/bio.crop.130x130.cm.jpeg/1603474506239.jpeg" id="image-50d95fa509" data-cmp-hook-image="imageV3" class="cmp-image" itemscope itemtype="http://schema.org/ImageObject">
  
  <a class="cmp-image__link" href="/about/people/v/villegas_carlos.html">
    <picture class="cmp-image__picture ">
      <source srcset="/content/rand/about/people/v/villegas_carlos/jcr:content/par/bio.crop.130x130.cm.webp/1603474506239.webp 1x, /content/rand/about/people/v/villegas_carlos/jcr:content/par/bio.crop.260x260.cm.webp/1603474506239.webp 2x" type="image/webp"/>

      <img src="/content/rand/about/people/v/villegas_carlos/_jcr_content/par/bio.crop.130x130.cm.jpeg/1603474506239.jpeg" loading="lazy" itemprop="contentUrl" width="130" height="130" alt="Carlos Villegas"/>
    </picture>
  </a>
  
</div>

    

</div>
		<h5 class="heading-5"><a href="/about/people/v/villegas_carlos.html">Carlos Villegas</a></h5>
		<p class="title">Assistant Policy Researcher, RAND; Ph.D. Student, Pardee RAND Graduate School</p>
	</li>

	<li>
		<div class="bio image"><div data-cmp-src="/content/rand/about/people/c/chang_joan/jcr:content/par/bio.crop.130x130.cm.jpeg/1675129972975.jpeg" id="image-53135d7dc2" data-cmp-hook-image="imageV3" class="cmp-image" itemscope itemtype="http://schema.org/ImageObject">
  
  <a class="cmp-image__link" href="/about/people/c/chang_joan.html">
    <picture class="cmp-image__picture ">
      <source srcset="/content/rand/about/people/c/chang_joan/jcr:content/par/bio.crop.130x130.cm.webp/1675129972975.webp 1x, /content/rand/about/people/c/chang_joan/jcr:content/par/bio.crop.260x260.cm.webp/1675129972975.webp 2x" type="image/webp"/>

      <img src="/content/rand/about/people/c/chang_joan/_jcr_content/par/bio.crop.130x130.cm.jpeg/1675129972975.jpeg" loading="lazy" itemprop="contentUrl" width="130" height="130" alt="Joan Chang"/>
    </picture>
  </a>
  
</div>

    

</div>
		<h5 class="heading-5"><a href="/about/people/c/chang_joan.html">Joan Chang</a></h5>
		<p class="title">Assistant Policy Researcher, RAND, and Ph.D. Candidate, Pardee RAND Graduate School</p>
	</li>

</ul>
</div>

					</div>
				</div> 
			</li>
			<li class="a show-for-small"><h3 class="heading-3"><a href="/about.html">About</a></h3></li>
		</ul>
		<div class="utilityNav htmlBlock">
  <ul class="utility not-compact">
  <li class="zh"><a href="/zh-hans.html" lang="zh">中文(简体)</a></li>
  <li class="ar"><a href="/ar.html" dir="rtl" lang="ar">العربية</a></li>
  <li class="cart"><a href="https://shop.rand.org/cart/"><span class="access">Cart</span></a></li>
</ul>


    
</div>

		<div class="alertBar">


</div>

	</nav></div>

	
	
	<a href="/search.html" class="search-toggle"><span class="label"><span class="access">Toggle</span> Search</span></a>
	<div id="search" class="search"><form method="get" action="/search.html" class="velocity-search" role="search" aria-label="Site-wide"><label for="search-box" class="access">Site-wide Search</label><input name="query" id="search-box" class="query" type="search" placeholder="search"><button class="submit search-submit" name="search-submit" type="submit" id="search-submit"><span class="access">Search</span></button></form></div>       
</div></header>

  <div class="column-wrap two-column">

<div id="content">
	
<nav id="breadcrumbs" class="breadcrumbs" aria-label="Breadcrumb"><ol>
<li><a href="/">RAND</a></li><li><a href="/capabilities.html">Capabilities</a></li><li class="access"><a href="/capabilities/philanthropic.html" aria-current="page">>Philanthropic Sector</a></li>
</ol></nav>
	
	<main id="page-content">
	<div class="page-heading">
		

<h1 id="RANDTitleHeadingId">Philanthropic Sector</h1>

		

	</div><div id="srch">
  <section class="sector philanthropic">


<p>Foundations and philanthropists the world over have served as the catalysts for some of our most intriguing and compelling work. Throughout the years, RAND has helped foundations and individuals develop a body of objective, data-driven research on the causes and issues that they're passionate about. </p>

<p>Foundations and individuals have also been instrumental in sponsoring research that answers essential questions that might otherwise go unanswered. Many policy debates hinge on 'common sense' assumptions taken as truths. Our research replaces suppositions and hunches with peer-reviewed data, which can fundamentally change the landscape of policy debates. Our research on behalf of philanthropists is held to the rigorous standards expected of RAND—and our reputation for quality, objectivity, and integrity means that our findings are taken seriously around the world. </p>

<p>Questions we've answered for foundations and individuals are as diverse as our clients themselves:</p>



            <a href="#teaser-list-philanthropic-sector" class="badge"><p>Helping foundations and the philanthropic community foster innovation and change</p></a>


                  	<div class="text">
                    <ul><li><span>What are the public and private benefits of cultural enrichment programs?</span></li>
	<li><span>How do the environment and pollution affect health care spending?</span> </li>
	<li><span>What key elements are necessary for a successful and peaceful Palestinian state?</span></li>
<li><span>How can we measure the efficacy of—and make improvements to—pilot programs 
 		and programs currently underway?</span></li>
        <li><span>In what ways do government policies affect entrepreneurship?</span></li></ul>
<p>RAND's broad range of expertise and long history of proven results are matched only by our hard-won reputation for quality, objectivity, and integrity. From research and analysis on broad areas where private interests intersect with public policy, to research in specific areas crucial to your business, to predicting trends and the impact of regulatory and policy changes, we can complement your firm's skills and infuse problem-solving capacity with new ideas. </p>
   	  </div>
</section>


    
<div id="teaser-list-philanthropic-sector" class="portfolio full-bg-gray full-bg-bottom"><h2 class="stripe" id="spanportfolio-of-workspan-"><span>Portfolio of Work</span></h2>


  <div>
  <ul class="teasers feature">
<li data-content-id="b53d88f3f49c66c4365cff40a11a68aa52de9894"  >
<div class="img-wrap"><a href="/capabilities/solutions/getting-to-know-military-caregivers.html"><div data-cmp-src="/content/rand/capabilities/solutions/getting-to-know-military-caregivers/jcr:content/par/teaser.crop.1036x550.cm.jpeg/1626711306103.jpeg" id="image-aef805f842" data-cmp-hook-image="imageV3" class="cmp-image" itemscope itemtype="http://schema.org/ImageObject">
  
  
    <picture class="cmp-image__picture ">
      <source srcset="/content/rand/capabilities/solutions/getting-to-know-military-caregivers/jcr:content/par/teaser.crop.1036x550.cm.webp/1626711306103.webp" type="image/webp"/>

      <img src="/content/rand/capabilities/solutions/getting-to-know-military-caregivers/_jcr_content/par/teaser.crop.1036x550.cm.jpeg/1626711306103.jpeg" loading="lazy" itemprop="contentUrl" width="1036" height="550" alt="A servicemember and his wife hold hands"/>
    </picture>
  
  
</div></a></div><a class="flag" href="/capabilities/solutions.capabilities.cost-analysis.html">Cost Analysis</a><div class="text">
<h3 class="title"><a href="/capabilities/solutions/getting-to-know-military-caregivers.html">Getting to Know Military Caregivers and Their Needs</a></h3><p class="desc">There are millions of military caregivers&mdash;wives, husbands, siblings, parents, and friends&mdash;caring for U.S. service members and veterans who are wounded, ill, or injured. These caregivers help their loved ones live better-quality lives, but their own needs may go unmet.</p></div></li>
</ul></div>


  <div>
  <ul class="teasers list">
<li data-content-id="3225306d561de4cbded8a80af5daa6591f35dc47"  >
<div class="img-wrap"><a href="/capabilities/solutions/developing-strategies-for-summer-learning.html"><div data-cmp-src="/content/rand/capabilities/solutions/developing-strategies-for-summer-learning/jcr:content/par/teaser.crop.375x280.cm.jpeg/1666310927960.jpeg" id="image-90264bfeda" data-cmp-hook-image="imageV3" class="cmp-image" itemscope itemtype="http://schema.org/ImageObject">
  
  
    <picture class="cmp-image__picture ">
      <source srcset="/content/rand/capabilities/solutions/developing-strategies-for-summer-learning/jcr:content/par/teaser.crop.375x280.cm.webp/1666310927960.webp 1x, /content/rand/capabilities/solutions/developing-strategies-for-summer-learning/jcr:content/par/teaser.crop.750x560.cm.webp/1666310927960.webp 2x" type="image/webp"/>

      <img src="/content/rand/capabilities/solutions/developing-strategies-for-summer-learning/_jcr_content/par/teaser.crop.375x280.cm.jpeg/1666310927960.jpeg" loading="lazy" itemprop="contentUrl" width="375" height="280" alt="girl studying outside"/>
    </picture>
  
  
</div></a></div><a class="flag" href="/capabilities/solutions.capabilities.policy-analysis.html">Policy Analysis</a><div class="text">
<h3 class="title"><a href="/capabilities/solutions/developing-strategies-for-summer-learning.html">Developing Strategies for Summer Learning</a></h3><p class="desc">RAND education experts conducted extensive literature reviews, examined summer program cost data, interviewed numerous providers of summer programs, and visited a diverse range of U.S. cities to interview summer learning leaders and observe summer learning directly.</p></div></li>
</ul></div>
</div>
</div>
	</main>
</div>


<div id="rightcolumn"><div class="cq-dd-paragraph">
<aside class="contacts">
<h2 id="business-contacts-">Business Contacts</h2>

  <dl>
		<dt><a href="/ard.html">RAND Army Research Division</a></dt>
		<dd>Contact: <a href="mailto:Jocelyn_Maciol@rand.org">Jocelyn Maciol</a></dd>
		<dd>Phone: (310) 393-0411, ext. 6645</dd>

		<dt><a href="/australia.html">RAND Australia</a></dt>
		<dd>Contact: <a href="mailto:adowse@rand.org">Andrew Dowse</a></dd>
		<dd>Phone: +61 2 6232 6972</dd>

		<dt><a href="/education-and-labor.html">RAND Education and Labor</a></dt>
		<dd>Contact: <a href="mailto:Darleen_Opfer@rand.org">V. Darleen Opfer</a></dd>
		<dd>Phone: (412) 683-2300, ext. 4926</dd>

		<dt><a href="/randeurope.html">RAND Europe</a></dt>
		<dd>Contact: <a href="mailto:Hans_Pung@rand.org">Hans Pung</a></dd>
		<dd>Phone: +44 (1223) 353 329, ext. 2600</dd>

		<dt><a href="/global-and-emerging-risks.html">RAND Global and Emerging Risks</a></dt>
		<dd>Contact: <a href="mailto:jmitre@rand.org">Jim Mitre</a></dd>
		<dd>Phone: (703) 413-1100, ext. 5967</dd>
	
		<dt><a href="/health-care.html">RAND Health Care</a></dt>
		<dd>Contact: <a href="mailto:Peter_Hussey@rand.org">Peter Hussey</a></dd>
		<dd>Phone: (617) 338-2059, ext. 8617</dd>
		
		<dt><a href="/hsrd.html">RAND Homeland Security Research Division</a></dt>
		<dd>Contact: <a href="mailto:Jack_Riley@rand.org">K. Jack Riley</a></dd>
		<dd>Phone: (412) 683-2300, ext. 4956</dd>

		<dt><a href="/nsrd.html">RAND National Security Research Division</a></dt>
		<dd>Contact: <a href="mailto:bpavel@rand.org">Barry Pavel</a></dd>
		<dd>Phone: (703) 413-1100, ext. 5884</dd>

		<dt><a href="/paf.html">RAND Project AIR FORCE</a></dt>
		<dd>Contact: <a href="mailto:James_Chow@rand.org">James S. Chow</a></dd>
		<dd>Phone: (310) 393-0411, ext. 6808</dd>
		
		<dt><a href="/well-being.html">RAND Social and Economic Well-Being</a></dt>
		<dd>Contact: <a href="mailto:Anita_Chandra@rand.org">Anita Chandra</a></dd>
		<dd>Phone: (703) 413-1100, ext. 5323</dd>

	</dl>

	<p><a href="/capabilities/business-contacts.html">View more business contacts &raquo;</a></p>


    

<div style="clear:both;"></div>
</aside>
</div>
<div class="cq-dd-paragraph">
<aside >
<h2 id="quality-and-objectivity-"><a href="/about/standards.html">Quality and Objectivity</a></h2>

  <p>RAND's standards for high-quality research and analysis articulate longstanding RAND concepts and values regarding the characteristics of high-quality studies. They help ensure that RAND accomplishes its mission of improving policy and decisionmaking through research and analysis.</p>


    
<a class="right" href="/about/standards.html">Standards for High-Quality Research and Analysis &raquo;</a>


<div style="clear:both;"></div>
</aside>
</div>








<aside aria-label="Explore RAND solutions">
<h2>Explore RAND Solutions</h2>
<h3>By Capability</h3>
<ul>
<li><a href="/capabilities/solutions.capability.benchmarking.html">Benchmarking</a></li><li><a href="/capabilities/solutions.capability.case-study-analysis.html">Case Study Analysis</a></li><li><a href="/capabilities/solutions.capability.cost-analysis.html">Cost Analysis</a></li><li><a href="/capabilities/solutions.capability.economic-analysis.html">Economic Analysis</a></li><li><a href="/capabilities/solutions.capability.modeling-simulation-optimization.html">Modeling, Simulation, and Optimization</a></li><li><a href="/capabilities/solutions.capability.performance-measurement-measurement-development.html">Performance Measurement and Measurement Development</a></li><li><a href="/capabilities/solutions.capability.policy-analysis.html">Policy Analysis</a></li><li><a href="/capabilities/solutions.capability.program-evaluation.html">Program Evaluation</a></li><li><a href="/capabilities/solutions.capability.risk-assessment-analysis.html">Risk Assessment and Analysis</a></li><li><a href="/capabilities/solutions.capability.strategic-planning.html">Strategic Planning</a></li><li><a href="/capabilities/solutions.capability.survey-research.html">Survey Research</a></li><li><a href="/capabilities/solutions.capability.technology-assessment-development.html">Technology Assessment and Development</a></li>
</ul>
</aside></div>
</div>
  
<footer id="footer" class="global-footer" lang="en" dir="ltr"><div class="footer-inner">
			
<div class="footer footerContent">
<div class="row">
	<div class="four columns about">
		<div class="footerAbout htmlBlock">
  <h2><a href="/about.html">About</a></h2>
	<p>RAND is a research organization that develops solutions to public policy challenges to help make communities throughout the world safer and more secure, healthier and more prosperous. RAND is nonprofit, nonpartisan, and committed to the public interest.</p>
	<ul class="css2col">
		<li><a href="/about/history.html">RAND History</a></li>
		<li><a href="/about/diversity-equity-inclusion.html">Diversity, Equity, and Inclusion</a></li>
		<li><a href="/about/organization/leadership.html">Leadership</a></li>
		<li><a href="/about/research-integrity.html">Research Integrity</a></li>
		<li><a href="/jobs.html">Career Opportunities</a></li>
	</ul>
	<div class="locations hide-for-small">
		<ul>
			<li class="sm"><span class="info hasPhoto"><a href="/about/locations/santa-monica.html">Santa Monica, CA</a></span></li>
			<li class="dc"><span class="info hasPhoto"><a href="/about/locations/washington.html">Washington, DC</a></span></li>
			<li class="pgh"><span class="info hasPhoto"><a href="/about/locations/pittsburgh.html">Pittsburgh, PA</a></span></li>
<li class="nola"><span class="info"><a href="/gulf-states.html">New Orleans, LA</a></span></li>
			<li class="mass"><span class="info"><a href="/about/locations/boston.html">Boston, MA</a></span></li>
			<li class="eu"><span class="info">Cambridge, UK</span></li>
			<li class="be"><span class="info">Brussels, BE</span></li>
			<li class="au"><span class="info"><a href="/australia/contact.html">Canberra, AU</a></span></li>
		</ul>
		<a href="/about/locations.html" class="map"><img src="/etc/rand/designs/common/images/world-map.svg" width="600" height="296" alt="World map of RAND office locations" loading="lazy"></a>
	</div>


    
</div>

	</div>
	<div class="eight columns">
		<div class="row">
			<div class="four columns connect">
				<div class="footerConnect htmlBlock">
  				<h2>Connect</h2>
				<div class="hide-for-small">
					<h3><a href="/about/contacts.html">Contact Us</a></h3>
				</div>
				<div class="show-for-small">
					<ul>
					<li><a href="/about/contacts.html">Contact Us</a></li>
					<li><a href="/about/locations.html">Locations</a></li>
					</ul>
				</div>
				<h3>I am interested in</h3>
				<ul>
				<li><a href="/jobs.html">Jobs at RAND</a></li>
				<li><a href="/news.html">Media Resources</a></li>
				<li><a href="/congress.html">Congressional Resources</a></li>
				<li><a href="/capabilities/business-contacts.html">Doing Business with RAND</a></li>
				<li><a href="https://campaign.rand.org/">Supporting RAND</a></li>
				<li><a href="/about/educational-opportunities.html">Educational Opportunities</a></li>
				<li><a href="/alumni.html">Alumni Association</a></li>
				</ul>


    
</div>

				<div class="follow-rand">
		<h3>Follow</h3>	
		<ul class="horizontal">
			<li><a class="facebook external" href="https://www.facebook.com/RANDCorporation"><span class="access">RAND on Facebook</span></a></li>
			<li><a class="twitter external" href="https://twitter.com/RANDCorporation/"><span class="access">RAND on Twitter</span></a></li>
			<li><a class="linkedin external" href="https://www.linkedin.com/company/rand-corporation"><span class="access">RAND on LinkedIn</span></a></li>
			<li><a class="youtube external" href="https://www.youtube.com/user/TheRANDCorporation"><span class="access">RAND on YouTube</span></a></li>
			<li><a class="instagram external" href="https://www.instagram.com/randcorporation/"><span class="access">RAND on Instagram</span></a></li>
		</ul>	
</div>
			</div>
			<div class="four columns stay-informed">
				<h2>Stay Informed</h2>
				<p>Subscribe to the Policy Currents newsletter for RAND insights on the issues that matter most.</p>
				<div class="footer-subscribe subscribeNoAccount">


<aside aria-label="Newsletter Subscription" class="newsletter-subscription-box ">
    <h2 class="subscribe-heading">Stay Informed</h2><span class="hide js-subscription-name">RAND Policy Currents</span><p class="desc">Get updates from RAND delivered straight to your inbox.</p><form class="subscribeForm" method="post" data-componentpath="" data-subscriptionpath="/content/rand/newsletters/rand-news-bulletin">
        <label for="email" class="access">Email</label><input type="email" name="email" id="email" class="email" required placeholder="Email address">
        <button class="btn signup-recaptcha" data-sitekey="6Lej1OkfAAAAACl4nbglyfLqKdV5PjWQHXCz_9Tc" data-size="invisible">Sign Up</button><div class="recaptcha-error error"></div>        
        </form></aside>
</div>

				<a href="/newsletters.html" class="arrow">View all email newsletters</a>
			</div>
			<div class="four columns resources">
				<div class="footerResources htmlBlock">
  				<h2>Resources</h2>
				<ul>
						<li><a href="/multimedia.html">Multimedia</a></li>
						<li><a href="/pubs.html">Latest Reports</a></li>
						<li><a href="/pubs/authors.html">Browse by Author</a></li>
						<li><a href="/pubs/classics.html">RAND Classics</a></li>
						<li><a href="/pubs/tools.html">Databases and Tools</a></li>
				</ul>		 
				<h3><a href="/site_info.html">Site Information</a></h3>
				<ul>
						<li><a href="/site_info/sitemap.html">Site Map</a></li>
						<li><a href="/site_info/privacy.html">PRIVACY POLICY</a></li>
						<li><a href="/site_info/terms-and-conditions.html">Support Policy</a></li>
						<li><a href="/about/feedback.html">Feedback</a></li>
						<li><a href="/help.html">Help</a></li>
				</ul>


    
</div>

			</div>
		</div>
	</div>
</div>

<div class="footerAddress htmlBlock">
  <div class="vcard">
    <img class="fn n org left" alt="RAND Corporation" src="/etc/rand/designs/common/images/logo-corp.svg" width="22" height="22">
	<span class="adr">
	<span class="street-address">1776 Main Street</span><br>
	<span class="locality">Santa Monica</span>, <span class="region">California</span> <span class="postal-code">90401-3208</span>
	</span>
</div>


    
</div>
</div>

		
	<div class="copyright">
		RAND&reg; is a registered trademark. © 1994-2024 RAND Corporation. This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
	</div>
	
		



	
	
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date);gtag("config","G-M182E1GBSR");RAND.analyticsExtendDataObject({"content":[],"page":{"id":"0838e2d1bfea19e2315345263896ffda3be0772c","isProduction":true,"language":"en","siteName":"rand","contentType":"content","contentCategory":"content"}});RAND.analyticsExtendDataObject("pageTimestamp", 1707165844);if(typeof(pageDataTracker) == 'object'){pageDataTracker.trackPageLoad();}
</script>
    
<script defer src="/etc/rand/support/js/core.min.ac229b848f33ac4b08ca0bad87c2e608.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M182E1GBSR"></script>

</div></footer>
</body>
</html>
        </dl>

                                </li>
                                
                                
                                

                            </ul>

                            

                         </li><!-- one unit -->



                        <li>

                            <h3>RAND Europe<a href="/randeurope.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Europe</span></a></h3>

                            <p class="desc">

                                Thirty years of not-for-profit research by the European subsidiary of RAND</p>

                            <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:Hans_Pung@rand.org">Hans Pung</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>+44 (1223) 353 329, ext. 2600</dd>

                                <dt>Fax:</dt>

                                <dd class="fax">+44 (1223) 358 845</dd>

                            </dl>

                            <div class="meta">

                                <div class="keywords">European Union, modelling, evaluation and impact, innovation, healthcare, defence</div>

                            </div>

                        </li><!-- one unit -->
                        
                        <li>

                            <h3>RAND Global and Emerging Risks<a href="/global-and-emerging-risks.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Global and Emerging Risks</span></a></h3>

                            <p class="desc">Develops novel methods and delivers rigorous research on catastrophic risks to humanity</p>

                            <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:jmitre@rand.org">Jim Mitre</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5967</dd>

                            </dl>

                            <div class="meta">

                                <div class="keywords">Australia, Canberra, health, community and economic development, education, defence, labour, naval shipbuilding</div>

                            </div>

                        </li><!-- one unit -->

                        <li>

                            <h3>RAND Health Care<a href="/health-care.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Health Care</span></a></h3>

                            <p class="desc">

                                The most trusted source of objective health care policy research

                            </p>

							<div class="nolink">General Inquiries</div>

                            <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:Peter_Hussey@rand.org">Peter Hussey</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(617) 338-2059, ext. 8617</dd>

                            </dl>

                            

                            <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:Paul_Koegel@rand.org">Paul Koegel</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6203</dd>

                            </dl>      

                            <div class="meta">

                                <div class="keywords">obesity, substance abuse, medicaid and medicare, affordable care act (ACA), quality of care, end-of-life care, health information technology (IT), health systems preparedness, health care policy, opioids, health care costs, health care access</div>

                            </div>

                            <ul>                            

                                <li class="noCollapse">

                                    <div class="nolink">Access and Delivery Program</div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Jeanne_Ringel@rand.org">Jeanne S. Ringel</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6626</dd>

                                    </dl>

                                </li>
                                
                                <li class="noCollapse">

                                    <div class="nolink">Drug Policy Research Center<a href="/well-being/justice-policy/centers/dprc.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Drug Policy Research Center</span></a></div>

	                            <div class="meta">

	                                <div class="keywords">marijuana, underage substance use, drug markets, smoking cessation, alcohol, prescription drug abuse, substance abuse prevention, substance abuse treatment, drug harm reduction, tobacco, opioids, fentanyl, heroin</div>

	                            </div>

                                    <dl class="contacts">

                                        <dt>Contact:</dt>

                                        <dd><a href="mailto:Beau_Kilmer@rand.org">Beau Kilmer</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6005</dd>

                                    </dl>

                                </li>                               

                            	<li class="noCollapse">

                                    <div class="nolink">Payment, Cost, and Coverage Program</div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Christine_Eibner@rand.org">Christine Eibner</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5913</dd>

                                    </dl>

                                </li>                        

                                <li class="noCollapse">

                                    <div class="nolink">Quality Measurement and Improvement Program</div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Carrie_Farmer@rand.org">Carrie M. Farmer</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(412) 683-2300, ext. 4408</dd>

                                    </dl>

                                </li>
                                
                                <li class="noCollapse">

                            		<div class="nolink">RAND Research Across Complementary and Integrative Health Institutions Center<a href="/health-care/centers/cih.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Research Across Complementary and Integrative Health Institutions Center</span></a></div>

                           		<dl class="contacts vcard">

                                	<dt>Contact:</dt>

                                	<dd><a href="mailto:Ian_Coulter@rand.org">Ian D. Coulter</a></dd>

                                	<dt>Phone:</dt>

                                	<dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7455</dd>

                           	 </dl>
                           	 
                           	 <dl class="contacts vcard">

                                	<dt>Contact:</dt>

                                	<dd><a href="mailto:Patricia_Herman@rand.org">Patricia M. Herman</a></dd>

                                	<dt>Phone:</dt>

                                	<dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7129</dd>

                           	 </dl>

                        	</li>
                                
                                 <li class="noCollapse">

                            		<div class="nolink">RAND Center of Excellence on Health System Performance<a href="/health-care/centers/health-system-performance.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Center of Excellence on Health System Performance</span></a></div>

                           		<dl class="contacts vcard">

                                	<dt>Contact:</dt>

                                	<dd><a href="mailto:Cheryl_Damberg@rand.org">Cheryl L. Damberg</a></dd>

                                	<dt>Phone:</dt>

                                	<dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6191</dd>

                           	 </dl>
                           	 
                           	 <dl class="contacts vcard">

                                	<dt>Contact:</dt>

                                	<dd><a href="mailto:Marjorie_Ridgely@rand.org">M. Susan Ridgely</a></dd>

                                	<dt>Phone:</dt>

                                	<dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6668</dd>

                           	 </dl>

                        	</li>
                        	
                        	 <li class="noCollapse">

                            		<div class="nolink">RAND-USC Schaeffer Opioid Policy Tools and Information Center (OPTIC)<a href="/health-care/centers/optic.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND-USC Schaeffer Opioid Policy Tools and Information Center</span></a></div>

                           		<dl class="contacts vcard">

                                	<dt>Contact:</dt>

                                	<dd><a href="mailto:Bradley_Stein@rand.org">Bradley D. Stein</a></dd>

                                	<dt>Phone:</dt>

                                	<dd class="tel"><span class="type">work</span>(412) 683-2300, ext. 4476</dd>

                           	 </dl>

                        	</li>
                        	
                        	 <li class="noCollapse">

                            		<div class="nolink">Southern California Evidence-based Practice Center<a href="/health-care/centers/epc.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Southern California Evidence-based Practice Center</span></a></div>

                           		<dl class="contacts vcard">

                                	<dt>Contact:</dt>

                                	<dd><a href="mailto:Aneesa_Motala@rand.org">Aneesa Motala</a></dd>

                                	<dt>Phone:</dt>

                                	<dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7617</dd>

                           	 </dl>

                        	</li>
                                

                            </ul>

                        </li><!-- one unit -->
                        
                        
                        <li>

                            <h3>RAND Homeland Security Research Division<a href="/hsrd.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Homeland Security Research Division</span></a></h3>

                            <p class="desc">Technical and operational research and analysis to aid the U.S. Department of Homeland Security</p>

							<div class="nolink">General Inquiries</div>

                            <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:Jack_Riley@rand.org">K. Jack Riley</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(412) 683-2300, ext. 4956</dd>

                            </dl>

                            <div class="meta">

                                <div class="keywords">U.S. Department of Homeland Security</div>

                            </div>

                            <ul>

                                <li class="noCollapse">
                                    <div class="nolink">Disaster Management and Resilience Program<a href="/hsrd/programs/disaster-management-and-resilience.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Disaster Management and Resilience Program</span></a></div>
                                    <dl class="contacts vcard">
                                        <dt>Contact:</dt>
                                        <dd class="fn email"><a href="mailto:Jessie_Arciniegas@rand.org">Jessie Riposo</a></dd>
                                        <dt>Phone:</dt>
                                        <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5162</dd>
                                    </dl>
                                </li>
                                
                                <li class="noCollapse">
                                    <div class="nolink">Infrastructure, Immigration, and Security Operations Program<a href="/hsrd/programs/infrastructure-immigration-and-security-operations.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Infrastructure, Immigration, and Security Operations Program</span></a></div>
                                    <dl class="contacts vcard">
                                        <dt>Contact:</dt>
                                        <dd class="fn email"><a href="mailto:Shelly_Culbertson@rand.org">Shelly Culbertson</a></dd>
                                        <dt>Phone:</dt>
                                        <dd class="tel"><span class="type">work</span> (412) 683-2300, ext. 4666</dd>
                                    </dl>
                                </li>
                                
                                <li class="noCollapse">
                                    <div class="nolink">Management, Technology, and Capabilities Program<a href="/hsrd/programs/management-technology-and-capabilities.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Management, Technology, and Capabilities Program</span></a></div>
                                    <dl class="contacts vcard">
                                        <dt>Contact:</dt>
                                        <dd class="fn email"><a href="mailto:Douglas_Ligor@rand.org">Douglas C. Ligor</a></dd>
                                        <dt>Phone:</dt>
                                        <dd class="tel"><span class="type">work</span>(617) 338-2059, ext. 8600</dd>
                                    </dl>
                                </li>

                            </ul>

                        </li><!-- one unit -->
                        
                        <li>

                            <h3>RAND National Security Research Division<a href="/nsrd.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND National Security Research Division</span></a></h3>

                            <p class="desc">

                                Conducts research and analysis for all national security sponsors other than the U.S. Air Force and the Army

                            </p>

							<div class="nolink">General Inquiries</div>

                            <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:bpavel@rand.org">Barry Pavel</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5884</dd>

                            </dl>

                            <ul>

                                <li class="noCollapse">

                                    <div class="nolink">Acquisition and Technology Policy Program<a href="/nsrd/atp.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Acquisition and Technology Policy Program</span></a></div>

	                            <div class="meta">

	                                <div class="keywords">ATP, national defense, Navy, Coast Guard, military technology, cyber, cyber-attach, cyber attack, cyber defense, cyber-defense, ballistic missile, Defense Advanced Research Projects Agency (DARPA), information warfare, force modernization and employment, counterterrorism, joint force cooperation, force cooperation, counterinsurgency, insurgency, Australian Navy, Australian Air Force</div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Caitlin_Lee@rand.org">Caitlin Lee</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5777</dd>

                                    </dl>

                                </li>                                

                                

                                <li class="noCollapse">

                                    <div class="nolink">International Security and Defense Policy Program<a href="/nsrd/isdp.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to International Security and Defense Policy Program</span></a></div>

	                            <div class="meta">

	                                <div class="keywords">ISDP, counterterrorism, counterinsurgency, failed states, stabilization efforts, diplomatic solutions, political environment, arms proliferation and control, Weapons of Mass Destructions (WMD), nuclear weapons, chemical weapons, tactics, Air Travel, Airport Security, Airline Security, Air Transportation</div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Heather_Williams@rand.org">Heather J. Williams</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7769</dd>

                                    </dl>

                                
									<blockquote>
                                    <div class="nolink">Center for Analysis of U.S. Grand Strategy<a href="/nsrd/isdp/grand-strategy.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Center for Analysis of U.S. Grand Strategy</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Miranda_Priebe@rand.org">Miranda Priebe</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5451</dd>

                                    </dl>
                                    </blockquote>
                                    

                                </li>
                               
                                                        
                                
                                
                                
                                <li class="noCollapse">

                                    <div class="nolink">Navy and Marine Forces Program<a href="/nsrd/nmf.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Navy and Marine Forces Program</span></a></div>

	                            <div class="meta">

	                                <div class="keywords"></div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Paul_DeLuca@rand.org">Paul DeLuca</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(412) 683-2300, ext. 4467</dd>

                                    </dl>

                                </li>  
                                
                                <li class="noCollapse">

                                    <div class="nolink">Personnel, Readiness, and Health Program<a href="/nsrd/prh.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Personnel, Readiness, and Health Program</span></a></div>

	                            <div class="meta">

	                                <div class="keywords">FRP, national defense, force management, force readiness, military health, invisible wounds, Traumatic Brain Injury (TBI), psychological health, treatment, medical / medicine, TRICARE, wounded warrior, active forces, active duty, reserve forces, Navy reserves, child care, veterans, veteran affairs, US Navy, U.S. Navy, joint operations, gender diversity, force deployment, Military Suicides</div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Molly_McIntosh@rand.org">Molly F. McIntosh</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5910</dd>

                                    </dl>

                                </li>                                            

                            </ul>

                        </li><!-- one unit -->

                        <li>

                            <h3>RAND Project AIR FORCE<a href="/paf.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Project AIR FORCE</span></a></h3>

                            <p class="desc">

                                Since its founding in 1946, PAF has remained the U.S. Air Force's only federally funded research and development center (FFRDC) concerned entirely with studies and analyses.

                            </p>

							<div class="nolink">General Inquiries</div>

                            <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:James_Chow@rand.org">James S. Chow</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6808</dd>

                            </dl>

                            <ul>

                                <li class="noCollapse">

                                    <div class="nolink">Force Modernization and Employment Program</div>

	                            <div class="meta">

	                                <div class="keywords">FMEP, defense, U.S. Air Force (USAF), US Air Force, risk assessment, force mobility, long range strike, cyber, cyber-attack, cyber attack, information warfare, intelligence, surveillance, and reconnaissance (ISR), combat air forces, command and control, nuclear proliferation</div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Sherrill_Lingel@rand.org">Sherrill Lingel</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6299</dd>

                                    </dl>

                                </li>

                                <li class="noCollapse">

                                    <div class="nolink">Resource Management Program</div>

	                            <div class="meta">

	                                <div class="keywords">RMP, DoD policies and practices, military logistics, force readiness, military privatization, privatized military, military contracting, national defense, U.S. Air Force (USAF), US Air Force, cost-estimating, military acquisition</div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Stephanie_Young@rand.org">Stephanie Young</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5673</dd>

                                    </dl>

                                </li>

                                <li class="noCollapse">

                                    <div class="nolink">Strategy and Doctrine Program</div>

	                            <div class="meta">

	                                <div class="keywords">SDR, defense strategy and planning, defense planning, regional analysis, security environment, space power, U.S. Air Force (USAF), US Air Force, joint operations, force development, strategic airlift, ballistic missile, missile defense</div>

	                            </div>

                                     <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:Raphael_Cohen@rand.org">Raphael S. Cohen</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5873</dd>

                            </dl>
                            
                                </li>
                                
                                <li class="noCollapse">

                                    <div class="nolink">Workforce, Development, and Health Program</div>

	                            <div class="meta">

	                                <div class="keywords">MPT, workforce size and composition, recruiting, military recruiting, pay, promote, promotion, military career field, retention, active duty, active forces, air national guard, reserves, reserve component, reserve forces, military contractor, airman, airmen, deployment</div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Nelson_Lim@rand.org">Nelson Lim</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7291</dd>

                                    </dl>

                                </li>

                            </ul>

                        </li><!-- one unit -->

                        

                        

                        <li>

                            <h3>RAND Social and Economic Well-Being<a href="/well-being.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Social and Economic Well-Being</span></a></h3>

                            <p class="desc">

                               Building safe, healthy, and thriving communities

                            </p>

							<div class="nolink">General Inquiries</div>

                            <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:Anita_Chandra@rand.org">Anita Chandra</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5323</dd>

                            </dl>

                            <div class="meta">

                                <div class="keywords">criminal and civil justice, public safety, environmental and natural resources policy, energy, transportation, communications</div>

                            </div>

                            <ul>
                            
                            <li class="noCollapse">

                                    <div class="nolink">Center to Advance Racial Equity Policy
<a href="/well-being/racial-equity-policy.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Center to Advance Racial Equity Policy</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:rrogers@rand.org">Rhianna C. Rogers</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6388</dd>

                                    </dl>

                                </li>
                                
                                <li class="noCollapse">

                                    <div class="nolink">Center for Disability Research<a href="/well-being/social-and-behavioral-policy/centers/cdr.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Center for Disability Research</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Kathleen_Mullen@rand.org">Kathleen J. Mullen</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6265</dd>

                                    </dl>

                                </li>


                                <li class="noCollapse">

                                    <div class="nolink">Center for Quality Policing<a href="/well-being/justice-policy/centers/quality-policing.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Center for Quality Policing</span></a></div>

	                            <div class="meta">

	                                <div class="keywords">

	                                	

	                                </div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>
                                        
                                        <dd class="fn email"><a href="mailto:cqp@rand.org">Richard H. Donohue</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(617) 338-2059, ext. 8618</dd>


                                    </dl>

                                </li>                                


                                 <li class="noCollapse">

                                    <div class="nolink">Center for the Study of Aging<a href="/well-being/social-and-behavioral-policy/centers/aging.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Center for the Study of Aging</span></a></div>
                                    
                                    <div class="meta">

	                                <div class="keywords">dementia, elderly, retirement, social security, health and retirement study HRS</div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Michael_Hurd@rand.org">Michael D. Hurd</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6945</dd>

                                        <dt>Fax:</dt>

                                        <dd class="fax">(310) 451-6923</dd>

                                    </dl>

                                </li>

                                

                                 <li class="noCollapse">

                                    <div class="nolink">Community Health and Environmental Policy Program<a href="/well-being/community-health-and-environmental-policy.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Community Health and Environmental Policy Program</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Benjamin_Preston@rand.org">Benjamin Lee Preston</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7481</dd>

                                    </dl>

                                </li>
                                

                                <li class="noCollapse">

                                    <div class="nolink">Drug Policy Research Center<a href="/well-being/justice-policy/centers/dprc.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Drug Policy Research Center</span></a></div>

	                            <div class="meta">

	                                <div class="keywords">marijuana, underage substance use, drug markets, smoking cessation, alcohol, prescription drug abuse, substance abuse prevention, substance abuse treatment, drug harm reduction, tobacco, opioids, fentanyl, heroin</div>

	                            </div>

                                    <dl class="contacts">

                                        <dt>Contact:</dt>

                                        <dd><a href="mailto:Beau_Kilmer@rand.org">Beau Kilmer</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6005</dd>

                                    </dl>

                                </li>

                                <li class="noCollapse">

                                    <div class="nolink">Institute for Civil Justice<a href="/well-being/justice-policy/centers/civil-justice.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Institute for Civil Justice</span></a></div>

	                            <div class="meta">

	                                <div class="keywords">corporate ethics and governance, catastrophic risk management and compensation, alternative dispute resolution, asbestos litigation, class actions and mass torts, juries and verdicts, product liability</div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:James_Anderson@rand.org">James M. Anderson</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(412) 683-2300, ext. 4677</dd>

                                    </dl>

                                </li> 

                                <li class="noCollapse">

                                    <div class="nolink">Justice Policy Program<a href="/well-being/justice-policy.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Justice Policy Program</span></a></div>

	                            <div class="meta">

	                                <div class="keywords">public safety, policing, criminal justice, law enforcement, corrections, crime, gangs, and violence prevention, drug policy, occupational safety</div>

	                            </div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:James_Anderson@rand.org">James M. Anderson</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(412) 683-2300, ext. 4677</dd>

                                    </dl>

                                </li> 
                                
                                <li class="noCollapse">

                                    <div class="nolink">Kenneth R. Feinberg Center for Catastrophic Risk Management and Compensation<a href="/well-being/justice-policy/centers/catastrophic-risk-management.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Kenneth R. Feinberg Center for Catastrophic Risk Management and Compensation</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Lloyd_Dixon@rand.org">Lloyd Dixon</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7480</dd>

                                    </dl>

                                </li>
                                
                                <li class="noCollapse">

                                    <div class="nolink">RAND Center on Housing and Homelessness<a href="/well-being/community-health-and-environmental-policy/centers/housing-and-homelessness.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Center on Housing and Homelessness</span></a></div>

	                            <div class="meta">

	                                <div class="keywords">

	                                	

	                                </div>

	                            </div>

                                    <dl class="contacts">

                                        <dt>Contact:</dt>

                                        <dd><a href="mailto:Sarah_Hunter@rand.org">Sarah B. Hunter</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7244</dd>

                                        <dt>Contact:</dt>

                                        <dd><a href="mailto:Jason_Ward@rand.org">Jason M. Ward</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7774</dd>

                                    </dl>

                                </li>

                                <li class="noCollapse">

                                    <div class="nolink">RAND Climate Resilience Center<a href="/well-being/community-health-and-environmental-policy/centers/climate-resilience.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Climate Resilience Center</span></a></div>

	                            <div class="meta">

	                                <div class="keywords">

	                                	

	                                </div>

	                            </div>

                                    <dl class="contacts">

                                        <dt>Contact:</dt>

                                        <dd><a href="mailto:Melissa_Finucane@rand.org">Melissa Finucane</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(412) 683-2300, ext. 4279</dd>

                                        <dt>Contact:</dt>

                                        <dd><a href="mailto:Abbie_Tingstad@rand.org">Abbie Tingstad</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(617) 338-2059, ext. 8678</dd>

                                    </dl>

                                </li>

                                 <li class="noCollapse">

                                    <div class="nolink">Social and Behavioral Policy Program<a href="/well-being/social-and-behavioral-policy.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Social and Behavioral Policy Program</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Regina_Shih@rand.org">Regina A. Shih</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5945</dd>

                                    </dl>

                                </li>                                                                                          
 
                            </ul>

                        </li><!-- one unit -->


                        <li>

                            <h3>RAND Research Disciplines<a href="/research/disciplines.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Research Disciplines</span></a></h3>

                            <ul>

                                <li class="noCollapse">

                                    <div class="nolink">RAND Economics Group<a href="/economics.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Economics Group</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd><a href="mailto:Jennie_Wenger@rand.org">Jennie W. Wenger</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6304</dd>

                                    </dl>

                                </li>

                                

                                <li class="noCollapse">

                                    <div class="nolink">RAND Sociology Group<a href="/sociology.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Sociology Group</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd><a href="mailto:Esther_Friedman@rand.org">Esther Friedman</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7320</dd>

                                    </dl>

                                </li>

                                <li class="noCollapse">

                                    <div class="nolink">RAND Statistics Group<a href="/statistics.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Statistics Group</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd><a href="mailto:Madhumita_Ghosh_Dastidar@rand.org">Bonnie Ghosh-Dastidar</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7418</dd>

                                    </dl>

                                </li>

                                <li class="noCollapse">

                                    <div class="nolink">RAND Survey Research Group<a href="/srg.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Survey Research Group</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd><a href="mailto:Kirsten_Becker@rand.org">Kirsten Becker</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6480</dd>

                                    </dl>

                                </li>

                            </ul>

                        </li><!-- one unit -->

                        <li>

                            <h3>Frederick S. Pardee RAND Graduate School<a href="https://www.prgs.edu/" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Frederick S. Pardee RAND Graduate School</span></a></h3>
                            
                            <p class="desc">

    									    Provides the next generation of policy leaders an unsurpassed education in policy analysis
    									</p>

                            							<div class="nolink">General Inquiries</div>

<dl class="contacts">

                                <dt>Contact:</dt>

                                <dd><a href="mailto:prgs@prgs.edu">prgs@prgs.edu</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7690</dd>

                                <dt>Fax:</dt>

                                <dd>(310) 451-6978</dd>

                            </dl>

                            <ul>

                                <li class="noCollapse">

								<div class="nolink">RAND Frederick S. Pardee Center for Longer Range Global Policy and the Future Human Condition<a href="/pardee.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Frederick S. Pardee Center for Longer Range Global Policy and the Future Human Condition</span></a></div>

								<dl class="contacts vcard">

									<dt>Contact:</dt>

									<dd class="fn email"><a href="mailto:Robert_Lempert@rand.org">Robert J. Lempert</a></dd>

									<dt>Phone:</dt>

									<dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7554</dd>

								</dl>

							</li>
							
							<li class="noCollapse">

								<div class="nolink">RAND Methods Centers<a href="https://www.prgs.edu/research/methods-centers.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to RAND Methods Centers</span></a></div>

								<dl class="contacts vcard">

									<dt>Contact:</dt>

									<dd class="fn email"><a href="mailto:Susan_Sohler_Everingham@rand.org">Susan M. Sohler Everingham</a></dd>

									<dt>Phone:</dt>

									<dd class="tel"><span class="type">work</span>(412) 683-2300, ext. 4957</dd>

								</dl>

							</li>


							</ul>

                        </li>

                        <li>

                            <h3>External Affairs</h3>
                            
                            <div class="nolink">General Inquiries</div>

                            <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:Jeremy_Rawitch@rand.org">Jeremy Rawitch</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 6795</dd>

                            </dl>
                            
                            <ul>

                            <li class="noCollapse">

                                    <div class="nolink">Congressional Relations<a href="/congress.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Congressional Relations</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Jayme_Fuglesten@rand.org">Jayme Fuglesten</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5363</dd>

                                    </dl>

                                </li>
                                
                                <li class="noCollapse">

                                    <div class="nolink">Media Relations<a href="/news.html" data-icon="&#xe036;" class="link-icon"><span class="access">Go to Media Relations</span></a></div>

                                    <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Jeffrey_Hiday@rand.org">Jeffrey Hiday</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5531</dd>

                                    </dl>

                                </li>
                                
                            </ul>



                        </li><!-- one unit -->

                        <li>

                            <h3>Finance</h3>

                            <dl class="contacts vcard">

                                <dt>Contact:</dt>

                                <dd class="fn email"><a href="mailto:Bradley_Beverage@rand.org">Bradley Beverage</a></dd>

                                <dt>Phone:</dt>

                                <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7252</dd>

                            </dl>

                            </li><!-- one unit -->

                            <li>

                              <h3>Information Services</h3>

                                  <dl class="contacts vcard">

                                        <dt>Contact:</dt>

                                        <dd class="fn email"><a href="mailto:Michael_Weitzenfeld@rand.org">Michael Weitzenfeld</a></dd>

                                        <dt>Phone:</dt>

                                        <dd class="tel"><span class="type">work</span>(310) 393-0411, ext. 7702</dd>

                                    </dl>

                                </li><!-- one unit -->
                                
                                
                                
                                
                                <li>

                              		<h3>RAND Offices</h3>
                              
                              			
                                   		 	
                                   		<div class="nolink">Washington</div>

                                  			<dl class="contacts vcard">

                                        		<dt>Contact:</dt>

                                        		<dd class="fn email"><a href="mailto:Yool_Kim@rand.org">Yool Kim</a></dd>

                                        		<dt>Phone:</dt>

                                        		<dd class="tel"><span class="type">work</span>(703) 413-1100, ext. 5253</dd>

                                   		 	</dl>
                                   		 	
                                   		<div class="nolink">Pittsburgh</div>

                                  			<dl class="contacts vcard">

                                        		<dt>Contact:</dt>

                                        		<dd class="fn email"><a href="mailto:Catherine_Augustine@rand.org">Catherine H. Augustine</a></dd>

                                        		<dt>Phone:</dt>

                                        		<dd class="tel"><span class="type">work</span>(412) 683-2300, ext. 4998</dd>

                                   		 	</dl>
                                   		 
                                   		<div class="nolink">Boston</div>

                                  			<dl class="contacts vcard">

                                        		<dt>Contact:</dt>

                                        		<dd class="fn email"><a href="mailto:Courtney_Gidengil@rand.org">Courtney A. Gidengil</a></dd>

                                        		<dt>Phone:</dt>

                                        		<dd class="tel"><span class="type">work</span>(617) 338-2059, ext. 8637</dd>

                                   		 	</dl>

 
                            </li><!-- one unit -->                                                                                                                        
                                

                    </ul>

                </div>


    



<div class="full-bg-gray full-bg-bottom"><h2 id="still-not-sure-whom-to-contact-">Still Not Sure Whom to Contact?</h2>

  <p>Fill out the form below and we'll get back to you as soon as possible.</p>


    
<div class="pad_rl">
<noscript>
<p class="error">Your web browser has JavaScript disabled.  The web form on this page requires JavaScript to be enabled for the submission of the form.
Please enable JavaScript and refresh this page to allow access to the form.</p>
</noscript>
<form id="mailform" name="mailform" data-captcha="/content/rand/capabilities/business-contacts/jcr:content/par/wrapperdiv/wrapperdiv/mailform.captcha.html" data-action="/content/rand/capabilities/business-contacts/jcr:content/par/wrapperdiv/wrapperdiv/mailform.form.html" class="mailform" hidden>
				<input type="text" class="Required" name="emailAdd" value="">
				<input type="hidden" name="referringPage" value="/capabilities/business-contacts">
				<div class="feedback">

<p><label for="email" class="required">Email address</label><br>
<input size="35" name="email" id="email" type="email" maxlength="50"  class="required" required></p>

<p><label for="message" class="required">Message</label><br>
<textarea name="message" id="message" rows="10" cols="60"  class="required" required></textarea></p>

<input type="hidden" name="mailfrom" id="mailfrom" value="websupport@rand.org">

<div><div class="g-recaptcha" data-callback="recaptchaCallback" data-error-callback="recaptchaError" data-sitekey="6Lej1OkfAAAAACl4nbglyfLqKdV5PjWQHXCz_9Tc" data-size="invisible"></div><div class="recaptcha-error error"></div></div>

<p style="margin-top: 10px; overflow: hidden;width:100%"><span class="btn"><input type="submit" value="Send"></span></p>
</div>
		</form>

<a class="arrow-blue" href="/site_info/privacy.html">Privacy <span class="last-word">Policy</span></a>

</div></div>
</div>
	</main>
</div>


<div id="rightcolumn">
<aside >
<h2 id="business-address-">Business Address</h2>

  <p><strong>All RAND programs may be reached at:</strong></p>
<p>RAND<br>
P.O. Box 2138<br>
1776 Main Street<br>
Santa Monica, CA 90407-2138<br> 
Phone: (310) 393-0411</p>


    

<div style="clear:both;"></div>
</aside>
<div class="cq-dd-paragraph">
<aside >
<h2 id="quality-and-objectivity-"><a href="/about/standards.html">Quality and Objectivity</a></h2>

  <p>RAND's standards for high-quality research and analysis articulate longstanding RAND concepts and values regarding the characteristics of high-quality studies. They help ensure that RAND accomplishes its mission of improving policy and decisionmaking through research and analysis.</p>


    
<a class="right" href="/about/standards.html">Standards for High-Quality Research and Analysis &raquo;</a>


<div style="clear:both;"></div>
</aside>
</div>








<aside aria-label="Explore RAND solutions">
<h2>Explore RAND Solutions</h2>
<h3>By Capability</h3>
<ul>
<li><a href="/capabilities/solutions.capability.benchmarking.html">Benchmarking</a></li><li><a href="/capabilities/solutions.capability.case-study-analysis.html">Case Study Analysis</a></li><li><a href="/capabilities/solutions.capability.cost-analysis.html">Cost Analysis</a></li><li><a href="/capabilities/solutions.capability.economic-analysis.html">Economic Analysis</a></li><li><a href="/capabilities/solutions.capability.modeling-simulation-optimization.html">Modeling, Simulation, and Optimization</a></li><li><a href="/capabilities/solutions.capability.performance-measurement-measurement-development.html">Performance Measurement and Measurement Development</a></li><li><a href="/capabilities/solutions.capability.policy-analysis.html">Policy Analysis</a></li><li><a href="/capabilities/solutions.capability.program-evaluation.html">Program Evaluation</a></li><li><a href="/capabilities/solutions.capability.risk-assessment-analysis.html">Risk Assessment and Analysis</a></li><li><a href="/capabilities/solutions.capability.strategic-planning.html">Strategic Planning</a></li><li><a href="/capabilities/solutions.capability.survey-research.html">Survey Research</a></li><li><a href="/capabilities/solutions.capability.technology-assessment-development.html">Technology Assessment and Development</a></li>
</ul>
</aside></div>
</div>
  
<footer id="footer" class="global-footer" lang="en" dir="ltr"><div class="footer-inner">
			
<div class="footer footerContent">
<div class="row">
	<div class="four columns about">
		<div class="footerAbout htmlBlock">
  <h2><a href="/about.html">About</a></h2>
	<p>RAND is a research organization that develops solutions to public policy challenges to help make communities throughout the world safer and more secure, healthier and more prosperous. RAND is nonprofit, nonpartisan, and committed to the public interest.</p>
	<ul class="css2col">
		<li><a href="/about/history.html">RAND History</a></li>
		<li><a href="/about/diversity-equity-inclusion.html">Diversity, Equity, and Inclusion</a></li>
		<li><a href="/about/organization/leadership.html">Leadership</a></li>
		<li><a href="/about/research-integrity.html">Research Integrity</a></li>
		<li><a href="/jobs.html">Career Opportunities</a></li>
	</ul>
	<div class="locations hide-for-small">
		<ul>
			<li class="sm"><span class="info hasPhoto"><a href="/about/locations/santa-monica.html">Santa Monica, CA</a></span></li>
			<li class="dc"><span class="info hasPhoto"><a href="/about/locations/washington.html">Washington, DC</a></span></li>
			<li class="pgh"><span class="info hasPhoto"><a href="/about/locations/pittsburgh.html">Pittsburgh, PA</a></span></li>
<li class="nola"><span class="info"><a href="/gulf-states.html">New Orleans, LA</a></span></li>
			<li class="mass"><span class="info"><a href="/about/locations/boston.html">Boston, MA</a></span></li>
			<li class="eu"><span class="info">Cambridge, UK</span></li>
			<li class="be"><span class="info">Brussels, BE</span></li>
			<li class="au"><span class="info"><a href="/australia/contact.html">Canberra, AU</a></span></li>
		</ul>
		<a href="/about/locations.html" class="map"><img src="/etc/rand/designs/common/images/world-map.svg" width="600" height="296" alt="World map of RAND office locations" loading="lazy"></a>
	</div>


    
</div>

	</div>
	<div class="eight columns">
		<div class="row">
			<div class="four columns connect">
				<div class="footerConnect htmlBlock">
  				<h2>Connect</h2>
				<div class="hide-for-small">
					<h3><a href="/about/contacts.html">Contact Us</a></h3>
				</div>
				<div class="show-for-small">
					<ul>
					<li><a href="/about/contacts.html">Contact Us</a></li>
					<li><a href="/about/locations.html">Locations</a></li>
					</ul>
				</div>
				<h3>I am interested in</h3>
				<ul>
				<li><a href="/jobs.html">Jobs at RAND</a></li>
				<li><a href="/news.html">Media Resources</a></li>
				<li><a href="/congress.html">Congressional Resources</a></li>
				<li><a href="/capabilities/business-contacts.html">Doing Business with RAND</a></li>
				<li><a href="https://campaign.rand.org/">Supporting RAND</a></li>
				<li><a href="/about/educational-opportunities.html">Educational Opportunities</a></li>
				<li><a href="/alumni.html">Alumni Association</a></li>
				</ul>


    
</div>

				<div class="follow-rand">
		<h3>Follow</h3>	
		<ul class="horizontal">
			<li><a class="facebook external" href="https://www.facebook.com/RANDCorporation"><span class="access">RAND on Facebook</span></a></li>
			<li><a class="twitter external" href="https://twitter.com/RANDCorporation/"><span class="access">RAND on Twitter</span></a></li>
			<li><a class="linkedin external" href="https://www.linkedin.com/company/rand-corporation"><span class="access">RAND on LinkedIn</span></a></li>
			<li><a class="youtube external" href="https://www.youtube.com/user/TheRANDCorporation"><span class="access">RAND on YouTube</span></a></li>
			<li><a class="instagram external" href="https://www.instagram.com/randcorporation/"><span class="access">RAND on Instagram</span></a></li>
		</ul>	
</div>
			</div>
			<div class="four columns stay-informed">
				<h2>Stay Informed</h2>
				<p>Subscribe to the Policy Currents newsletter for RAND insights on the issues that matter most.</p>
				<div class="footer-subscribe subscribeNoAccount">


<aside aria-label="Newsletter Subscription" class="newsletter-subscription-box ">
    <h2 class="subscribe-heading">Stay Informed</h2><span class="hide js-subscription-name">RAND Policy Currents</span><p class="desc">Get updates from RAND delivered straight to your inbox.</p><form class="subscribeForm" method="post" data-componentpath="" data-subscriptionpath="/content/rand/newsletters/rand-news-bulletin">
        <label for="email" class="access">Email</label><input type="email" name="email" id="email" class="email" required placeholder="Email address">
        <button class="btn signup-recaptcha" data-sitekey="6Lej1OkfAAAAACl4nbglyfLqKdV5PjWQHXCz_9Tc" data-size="invisible">Sign Up</button><div class="recaptcha-error error"></div>        
        </form></aside>
</div>

				<a href="/newsletters.html" class="arrow">View all email newsletters</a>
			</div>
			<div class="four columns resources">
				<div class="footerResources htmlBlock">
  				<h2>Resources</h2>
				<ul>
						<li><a href="/multimedia.html">Multimedia</a></li>
						<li><a href="/pubs.html">Latest Reports</a></li>
						<li><a href="/pubs/authors.html">Browse by Author</a></li>
						<li><a href="/pubs/classics.html">RAND Classics</a></li>
						<li><a href="/pubs/tools.html">Databases and Tools</a></li>
				</ul>		 
				<h3><a href="/site_info.html">Site Information</a></h3>
				<ul>
						<li><a href="/site_info/sitemap.html">Site Map</a></li>
						<li><a href="/site_info/privacy.html">PRIVACY POLICY</a></li>
						<li><a href="/site_info/terms-and-conditions.html">Support Policy</a></li>
						<li><a href="/about/feedback.html">Feedback</a></li>
						<li><a href="/help.html">Help</a></li>
				</ul>


    
</div>

			</div>
		</div>
	</div>
</div>

<div class="footerAddress htmlBlock">
  <div class="vcard">
    <img class="fn n org left" alt="RAND Corporation" src="/etc/rand/designs/common/images/logo-corp.svg" width="22" height="22">
	<span class="adr">
	<span class="street-address">1776 Main Street</span><br>
	<span class="locality">Santa Monica</span>, <span class="region">California</span> <span class="postal-code">90401-3208</span>
	</span>
</div>


    
</div>
</div>

		
	<div class="copyright">
		RAND&reg; is a registered trademark. © 1994-2024 RAND Corporation. This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
	</div>
	
		



	
	
<script>(function(a){a(document).ready(function(){RAND.coreReady(function(){a.getScript("/etc/rand/support/js/directory.js",function(){directoryFilter.setup("directory","directory-filter-box",!1,!0)})})})})(jQuery);(function(a){a("#mailform").submit(function(){""!=a("#email").val()?a("#mailfrom").val(a("#email").val()):a("#mailfrom").val("webmaster@rand.org")})})(jQuery);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date);gtag("config","G-M182E1GBSR");RAND.analyticsExtendDataObject({"content":[],"page":{"id":"22ba9025a0f27628b650104c34fce307e37d22f8","isProduction":true,"language":"en","siteName":"rand","contentType":"content","contentCategory":"content"}});RAND.analyticsExtendDataObject("pageTimestamp", 1707165243);if(typeof(pageDataTracker) == 'object'){pageDataTracker.trackPageLoad();}
</script>
    
<script defer src="/etc/rand/support/js/core.min.ac229b848f33ac4b08ca0bad87c2e608.js"></script>
<script defer src="/etc/rand/support/js/mailform.min.22b71878cc9d321565861fc90772dfe4.js"></script>
<script defer src="https://www.google.com/recaptcha/api.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M182E1GBSR"></script>

</div></footer>
</body>
</html>
