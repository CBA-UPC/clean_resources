!);var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@b474a6ad4354f4ba5fde672fa4e9c2c267684761"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[9583],{29583:(e,t,s)=>{s.d(t,{ZA:()=>V,ZP:()=>Q,j0:);var i=s(44027),o=s.n(i),n=s(50209),l=s.n(n),a=s(46200),r=s(235),d=s(90127),c=s(61093),h=s(95004),u=s(78994),p=s(32468),b=s(5700),m=s(22979),g=s(85795),f=s(81095),v=s(43166),T=s(59215),y=s(66591),x=s(59651),F=s(55015),P=s(96467),S=s.n(P),C=s(93853),j=s(2629),V={}),k={canFastQueue:!1,canFastReblog:!1,canFastQuote:!1},E=-(S().desktopHeaderHeightPx+S().marginBetweenPosts);class O extends h.Component{constructor(e){super(e),l()(this,"apiHelper",(0,g.ZP)(this.props.appContext.apiFetch)),l()(this,"blogs",[]),l()(this,"getBlogs",,l()(this,"setDefaultFastBlog",e=>{this.blogs.sort((t,s)=>s.name===e.name?1:t.name===e.name?-1:0)}),l()(this,"renderScrollPositionDependentHotkeys",()=>(0,j.jsx)(C.ZP,{hotkey:[{key:C.SV.j,command:this.scrollToNextElement},{key:C.SV.k,command:this.scrollToPreviousElement},{key:C.SV.l,command:this.likeVisibleTimelineObject},{key:C.SV.r,command:this.reblogVisibleTimelineObject,modifiers:{[C.TE.Shift]:!0}},{key:C.SV.a,command:this.answerVisibleTimelineObject},{key:C.SV.d,command:this.deleteVisibleTimelineObject},{key:C.SV.q,command:this.queueVisibleTimelineObject,modifiers:{[C.TE.Shift]:!0}}]})),l()(this,"enableFastReblog",()=>!this.state.canFastReblog&&this.setState({canFastReblog:!0})),l()(this,"disableFastReblog",()=>this.state.canFastReblog&&this.setState({canFastReblog:!1})),l()(this,"enableFastQueue",()=>!this.state.canFastQueue&&this.setState({canFastQueue:!0})),l()(this,"disableFastQueue",()=>this.state.canFastQueue&&this.setState({canFastQueue:!1})),l()(this,"enableFastQuote",()=>!this.state.canFastQuote&&this.setState({canFastQuote:!0})),l()(this,"disableFastQuote",()=>this.state.canFastQuote&&this.setState({canFastQuote:!1})),l()(this,"isValidElement",e=>!!(null!=e&&e.ref)),l()(this,"scrollToNextElement",()=>{this.scrollToElement(V.Next)}),l()(this,"scrollToPreviousElement",,l()(this,"getHeaderHeight",()=>{var e=this.props,t=e.appContext.features.redpopDesktopVerticalNav,s=e.modalOrPeeprShowingContext.isModalShowing,i=e.deviceContext.isMobile,o=e.bluespaceContext,n=i?S().mobileHeaderHeight-1:t?(0,p.eh)(o)?S().desktopHeaderEffectiveHeightPx:-1:S().desktopHeaderHeightPx;return s?0:n}),l()(this,"scrollToElement",e=>{var t=this.props,s=t.scrollContainerContext,i=t.getPostRefs,o=t.dashboardContext.preventTabbedDashboardAppearOnNextScroll,n=t.deviceContext.isMobile,l=t.getScrollerMethods,a=null==l?void 0:l(),r=this.getHeaderHeight();if(e===V.Previous&&(null==o||o()),a)return a.scrollToElement(e,r);var d=s||document.documentElement,c=[...i()];e===V.Previous&&c.reverse();for(var h=Math.ceil(d.scrollTop),u=0-(n?S().mobileMarginBetweenPosts:S().postDistanceFromHeader)-r,p=0;p<c.length;p++){var b=c[p];if(this.isValidElement(b)){var m=b.ref,g=(0,x.R)(m.offsetParent)?m.offsetParent.offsetTop:0,f=m.offsetTop+g,v=h-f;if(e===V.Next?v<u:v>u){m.focus({preventScroll:!0}),d.scrollTo({left:0,top:f+u});return}}}if(e===V.Next){var T=s?s.scrollHeight:document.body.scrollHeight;d.scrollTo({left:0,top:T})}}),l()(this,"scrollToTop",()=>{var e,t,s=null===(e=(t=this.props).getScrollerMethods)||void 0===e?void 0:e.call(t);if(null!=s&&s.scrollToTop)return s.scrollToTop();(this.props.scrollContainerContext||document.documentElement).scrollTo({behavior:"smooth",left:0,top:0})}),l()(this,"likeVisibleTimelineObject",()=>{var e=this.getVisibleTimelineObject().props.timelineObject,t=e.liked,s=e.id,i=e.reblogKey,o=e.blogName,n=e.placementId,l=e.earnedId;return this.props.like({id:s,liked:t,reblogKey:i,blogName:o,placementId:n,earnedId:l}).catch(e=>{var t=this.props.toastContext.toggleToast;e instanceof y.Z&&t(e.message,"error")})}),l()(this,"reblogVisibleTimelineObject",()=>this.postVisibleTimelineObject(b.hA.Published,this.props.appContext._t("Reblogged!"))),l()(this,"queueVisibleTimelineObject",()=>this.postVisibleTimelineObject(b.hA.Queue,this.props.appContext._t("Queued!"))),l()(this,"postVisibleTimelineObject",(e,t)=>{var s=this.getVisibleTimelineObject().props.timelineObject.placementId,i=this.props,o=i.appContext,n=o.getUserInfo,l=o._c,a=o.logEvent,r=i.toastContext.toggleToast,d=this.getVisibleTimelineObject().props.timelineObject;if((0,m.xT)(d))return n().then(i=>{var o=i.name,n=d.blog,l=d.id,c=d.reblogKey,h=d.earnedId;return this.apiHelper.postAPost({selectedBlogName:o,placementId:s,logEvent:a,reblogType:f.k.Fast,post:{reblogKey:c,earnedId:h,content:[],state:e,parentTumblelogUuid:n.name,parentPostId:l,id:void 0}}).fetch().then(()=>(this.setState({fastRebloggedPosts:this.state.fastRebloggedPosts.concat([d.id])}),r(t)))}).catch(()=>r(l("Failed to do action","Failed")))}),l()(this,"answerVisibleTimelineObject",()=>{var e=this.props,t=e.modalRouteContext,s=e.timelineContext,i=this.getVisibleTimelineObject().props,o=i.timelineObject,n=i.presentationStyle;if((0,m.xT)(o)&&o.canEdit&&n instanceof F.Z&&n.usesInboxAttribution){var l=o.id;this.unregisterModalCloseListener=t.addOnCloseModalRouteHandler(e=>{var t,i=e.isModalSuccess;null===(t=this.unregisterModalCloseListener)||void 0===t||t.call(this),i&&s.onRemoveTimelineObject({id:l})}),this.setState({currentlyEditingPost:o})}}),l()(this,"deleteVisibleTimelineObject",()=>{var e=this.getVisibleTimelineObject().props.timelineObject;(0,m.xT)(e)&&e.canDelete&&this.setState({currentlyDeletingPost:e})}),l()(this,"getVisibleTimelineObject",()=>{var e,t,s=this.props,i=s.scrollContainerContext,n=s.getScrollerMethods,l=null==n?void 0:n(),a=this.props.getPostRefs(),r=Math.ceil((i||document.documentElement).scrollTop),d=null==l||null===(e=l.getVisibleElement)||void 0===e?void 0:e.call(l),c=o()(a);try{for(c.s();!(t=c.n()).done;){var h=t.value;if(this.isValidElement(h)){var u,p=h.ref;if(p===d)return h;var b=i?p.offsetTop+((null===(u=p.offsetParent)||void 0===u?void 0:u.offsetTop)||0):p.offsetTop,m=r-b,g=p.clientHeight;if(m<g+E)return h}}}catch(e){c.e(e)}finally{c.f()}}),l()(this,"unsetCanFastAction",,this.state={canFastQueue:!1,canFastQuote:!1,canFastReblog:!1,currentlyDeletingPost:void 0,currentlyEditingPost:void 0,fastRebloggedPosts:[],getBlogs:this.getBlogs,setDefaultFastBlog:this.setDefaultFastBlog}}componentDidMount(){return window.addEventListener("blur",this.unsetCanFastAction),this.props.appContext.getUserInfo().then(e=>{var t=e.blogs;this.blogs=[...void 0===t?[]:t]})}ender(){var e=this.props,t=e.disabled,s=e.disableScrollPositionDependentHotKeys,i=e.children,o=this.state,n=o.canFastReblog,l=o.canFastQueue,c=o.canFastQuote;return(0,j.jsxs)(j.Fragment,{children:[!t&&(0,j.jsxs)(j.Fragment,{children:[!s&&this.renderScrollPositionDependentHotkeys(),n&&(0,j.jsx)(C.ZP,{hotkey:{key:C.SV.e,command:this.disableFastReblog,firesOnKeyUp:!0}}),l&&(0,j.jsx)(C.ZP,{hotkey:{key:C.SV.w,command:this.disableFastQueue,firesOnKeyUp:!0}}),c&&(0,j.jsx)(C.ZP,{hotkey:{key:C.SV.q,command:this.disableFastQuote,modifiers:{[C.TE.Ctrl]:!0},firesOnKeyUp:!0}}),(0,j.jsx)(C.ZP,{hotkey:[{key:C.SV.Dot,command:this.scrollToTop},{key:C.SV.e,command:this.enableFastReblog},{key:C.SV.w,command:this.enableFastQueue},{key:C.SV.q,command:this.enableFastQuote,modifiers:{[C.TE.Ctrl]:!0}}]})]}),(0,j.jsxs)(r.e2.Provider,{value:this.state,children:[i,this.state.currentlyDeletingPost&&(0,j.jsx)(v.Mj.Provider,{value:{post:this.state.currentlyDeletingPost,presentationStyle:F.Z.desktop},children:(0,j.jsx)(a.A,{isOpen:!0,toggleIsOpen:)}),this.state.currentlyEditingPost&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(u.Fg,{to:(0,d.s3)({blogName:this.state.currentlyEditingPost.blogName,postId:this.state.currentlyEditingPost.id.toString()})}),this.setState({currentlyEditingPost:void 0})]})]})]})}}let Q=(0,c.P)((0,T.X9)(O,{appContext:!0,bluespaceContext:!0,dashboardContext:!0,deviceContext:!0,modalOrPeeprShowingContext:!0,modalRouteContext:!0,scrollContainerContext:!0,timelineContext:!0,toastContext:!0}))}}]);