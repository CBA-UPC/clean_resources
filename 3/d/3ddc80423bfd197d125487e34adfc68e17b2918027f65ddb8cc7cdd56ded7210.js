!);var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@b474a6ad4354f4ba5fde672fa4e9c2c267684761"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[9966],{53852:(e,t,s)=>{s.d(t,{Z:()=>a});var i=(0,s(36343).q)("posts-photo",{altIcon:"posts-photo-alt"});i.defaultProps={size:{width:24,height:24},useAltIcon:!1};let a=i},931:(e,t,s)=>{s.d(t,{Z:()=>Z});var i=s(50209),a=s.n(i),o=s(5754),n=s.n(o),r=s(95004),l=s(55351),d=s(90127),h=s(43452),c=s(5700),p=s(59215),u=s(44561),g=s(83875),m=s(39277),f=s(54138),v=s.n(f),x=s(81022),b=s(66052),T=s(48430),j=s(53852),C=s(75815),w=s(60951),y=s(40565),P=s(63583),k=s(70834),S=s(2629),I={height:35,width:40},N={[c.hQ.Text]:(0,S.jsx)(w.Z,{colors:{primary:P.colorTextPostIcon},size:I}),[c.hQ.Photo]:(0,S.jsx)(j.Z,{colors:{primary:P.colorPhotoPost},size:I}),[c.hQ.Quote]:(0,S.jsx)(C.Z,{colors:{primary:P.colorQuotePost},size:I}),[c.hQ.Link]:(0,S.jsx)(T.Z,{colors:{primary:P.colorLinkPost},size:I}),[c.hQ.Chat]:(0,S.jsx)(b.Z,{colors:{primary:P.colorChatPost},size:I}),[c.hQ.Audio]:(0,S.jsx)(x.Z,{colors:{primary:P.colorAudioPost},size:I}),[c.hQ.Video]:(0,S.jsx)(y.Z,{colors:{primary:P.colorVideoPost},size:I})};let B=function(e){var t=e.postType,s=e.label,i=e.onClick,a=(0,k.I)("new-post-type-button");return(0,S.jsxs)("button",v()(v()({onClick:className:"FOqaP","aria-label":s},a),{},{children:[(0,S.jsx)("span",{className:"ADK9v",children:N[t]}),s]}))};class F extends r.Component{constructor(){super(...arguments),a()(this,"state",{}),a()(this,"onPostTypeButtonClick",(e,t)=>{(this.props.onPostCreation||this.createDefaultPost.bind(this))(t)})}tchBlog(){var e=this.props,t=e.selectedBlogName;return(0,e.appContext.getUserInfo)().then(e=>{var s=t?e.blogs.find(e=>e.name===t):(0,u.Z)(e.blogs);this.setState({blog:s})})}createDefaultPost(e){var t=this.props,s=t.navigate,i=t.saveButtonState,a=t.selectedBlogName;(0,t.appContext.logEvent)({eventName:(0,g.Y)(e),page:"toolbar"}),s((0,d.TL)({postType:e},{[h.xq.PostSaveButtonState]:i,[h.xq.BlogName]:a}))}render(){var e=this.props.appContext._t;return(0,S.jsx)(l.Z,{children:(0,S.jsx)("div",{className:n()("wttFd",this.props.className),children:(0,S.jsxs)("ul",{children:[(0,S.jsx)("li",{children:(0,S.jsx)(B,{postType:c.hQ.Text,onClick:this.onPostTypeButtonClick,label:e("Text")})}),(0,S.jsx)("li",{children:(0,S.jsx)(B,{postType:c.hQ.Photo,onClick:this.onPostTypeButtonClick,label:e("Photo")})}),(0,S.jsx)("li",{children:(0,S.jsx)(B,{postType:c.hQ.Quote,onClick:this.onPostTypeButtonClick,label:e("Quote")})}),(0,S.jsx)("li",{children:(0,S.jsx)(B,{postType:c.hQ.Link,onClick:this.onPostTypeButtonClick,label:e("Link")})}),(0,S.jsx)("li",{children:(0,S.jsx)(B,{postType:c.hQ.Chat,onClick:this.onPostTypeButtonClick,label:e("Chat")})}),(0,S.jsx)("li",{children:(0,S.jsx)(B,{postType:c.hQ.Audio,onClick:this.onPostTypeButtonClick,label:e("Audio")})}),(0,S.jsx)("li",{children:(0,S.jsx)(B,{postType:c.hQ.Video,onClick:this.onPostTypeButtonClick,label:e("Video")})})]})})})}}var R=(0,p.X9)(F,{appContext:!0});let Z=(0,m.Z)(R)},868:(e,t,s)=>{s.d(t,{Z:()=>B,z:()=>k});var i=s(54138),a=s.n(i),o=s(17276),n=s.n(o),r=s(44027),l=s.n(r),d=s(33970),h=s.n(d),c=s(50209),p=s.n(c),u=s(95004),g=s(29583),m=s(23670),f=s(67023),v=s(43523),x=s(63665),b=s(22979),T=s(78667),j=s(49116),C=s(32156),w=s(91264),y=s(64986),P=s(2629),k=e=>{var t=e.timelineName,s=j.K.getItem(t);return s&&JSON.parse(s)};class S extends u.Component{constructor(){var e;super(...arguments),e=this,p()(this,"setHasRestoredTimelineDuringThisSession",e=>{var t=e.timelineName,s=e.restored;return j.K.setItem(t,JSON.stringify(s))}),p()(this,"state",{isShowingRestoredState:!1,latestPostDate:null}),p()(this,"postRefs",[]),p()(this,"objects",[]),p()(this,"nextLinkMap",[]),p()(this,"restoreTimeline",e=>{var t=this.props,s=t.canonicalPath,i=t.didShowRestoredState,a=t.updateUrlFromObjects;window.history.replaceState("","",s);var o=this.getStoredTimeline();if(o){null==a||a(o.objects);var n,r=null===(n=o.objects)||void 0===n?void 0:n.find(b.xT),l=null==r?void 0:r.date,d=e&&i;this.setState({isShowingRestoredState:!0,latestPostDate:!d&&l?l:null},()=>{d&&(null==i||i()),j.E.removeItem(this.getTimelineStorageKey()),this.setHasRestoredTimelineDuringThisSession({timelineName:this.getTimelineStorageKey(),restored:!0})})}}),p()(this,"onUpdatePageLinkClick",()=>{this.props.appContext.logEvent({eventName:v.J.RestoreTimelineIndicatorRefreshTap}),this.hideLatestPostDate()}),p()(this,"hideLatestPostDate",,p()(this,"storeElements",()=>{if(this.nextLinkMap.length&&this.previousPaginatorRequestType!==x.vO.Initial){var e=this.getVisibleElementIndex(),t=this.getNextLinkAndEndingIndex(e),s=h()(t,2),i=s[0],a=s[1];this.setStoredTimeline({nextLink:i,objects:this.objects.slice(e,a)})}}),p()(this,"getVisibleElementIndex",()=>{var e,t=l()(this.postRefs.entries());try{for(t.s();!(e=t.n()).done;){var s=h()(e.value,2),i=s[0],a=s[1];if(null!=a&&a.ref){var o=a.ref.getBoundingClientRect(),n=o.top,r=o.height;if(n+r>g.j0)return i}}}catch(e){t.e(e)}finally{t.f()}return 0}),p()(this,"getNextLinkAndEndingIndex",e=>{var t,s=l()(this.nextLinkMap);try{for(s.s();!(t=s.n()).done;){var i=t.value;if(e>=i.start&&e<=i.end)return[i.nextLink,i.end]}}catch(e){s.e(e)}finally{s.f()}return[this.nextLinkMap[0].nextLink,this.nextLinkMap[0].end]}),p()(this,"onPagination",e=>{var t,s,i=e.objects,a=e.nextLink,o=e.requestType,n=e.response,r=this.props,l=r.onPagination,d=r.appContext.endlessScrollingDisabled;null==l||l({objects:i,nextLink:a,requestType:o,response:n});var h=this.props.getObjectsFromResponse(n);this.objects=i,this.nextLinkMap.push({nextLink:a,start:i.length-h.length-1,end:i.length}),this.previousPaginatorRequestType=o,o===x.vO.Refresh&&(null===(t=(s=this.props).didFinishShowingRestoredState)||void 0===t||t.call(s)),o===x.vO.Pagination&&d&&this.hideLatestPostDate()}),p()(this,"setRefreshCallback",t=>{var s=this.props,i=s.setRefreshCallback,a=s.didFinishShowingRestoredState;null==i||i(function(){return n()().async(function(s){for(;;)switch(s.prev=s.next){case 0:t(),e.hideLatestPostDate(),null==a||a();case 3:case"end":return s.stop()}},null,null,null,Promise)})}),p()(this,"getStoredTimeline",()=>{var e=j.E.getItem(this.getTimelineStorageKey());return e&&JSON.parse(e)}),p()(this,"setStoredTimeline",e=>{var t=e.objects,s=e.nextLink;try{j.E.setItem(this.getTimelineStorageKey(),JSON.stringify({objects:t,nextLink:s}))}catch(e){j.E.removeItem(this.getTimelineStorageKey())}}),p()(this,"getTimelineStorageKey",()=>`${this.props.canonicalPath}-${C.Ye}`)}componentDidMount(){var e=this.props,t=e.shouldRestoreIfPossible,s=e.letTimelineBeRestorable;history.scrollRestoration="manual",document.addEventListener("visibilitychange",this.storeElements),t()?this.restoreTimeline(!0):s&&this.getStoredTimeline()&&s(}ender(){var e=this.state,t=e.isShowingRestoredState,s=e.latestPostDate,i=this.props.appContext,o=i._getLocaleDateString,n=i._c,r=i.bestStuffFirstDisabled,l=s&&o(s,f.C.DateAndTime,!0),d=r&&l?n('Input is a translated date string, e.g., "July 20, 2020, 4:56 PM"',"%1$s - See new posts",[l]):n("Text that refreshes dashboard when clicked","See new posts");return(0,P.jsxs)(P.Fragment,{children:[s&&(0,P.jsx)(m.Z,{to:"/dashboard",className:y.Z.restoreTimelineText,onClick:this.onUpdatePageLinkClick,children:d}),(0,u.createElement)(w.ZP,a()(a()({},this.props),{},{key:`${t}`,getInitialPage:t?this.getStoredTimeline:this.props.getInitialPage,onPagination:this.onPagination,setRefreshCallback:this.setRefreshCallback,forwardedPostRefs:this.postRefs}))]})}}p()(S,"defaultProps",w.ZP.defaultProps);var I=(0,T.HJ)(S);class N extends u.Component{render(){return(0,P.jsx)(I,a()({},this.props))}}p()(N,"defaultProps",S.defaultProps);let B=N},25161:(e,t,s)=>{s.d(t,{KB:()=>u,EG:()=>h,ev:()=>c});var i=s(17276),a=s.n(i),o=s(33590),n=s(54138),r=s.n(n);s(1308);var l=(e,t)=>e("/v2/tabs",{method:"GET",queryParams:r()({},t)}),d=s(78667),h=["dashboard-tabs"];function c(){var e=(0,d.bp)().apiFetch;return(0,o.a)({queryKey:h,queryFn:staleTime:6e4})}function p(e,t){var s;return a()().async(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,a()().awrap(l(e,t));case 2:return s=i.sent.response.tabs,i.abrupt("return",s);case 5:case"end":return i.stop()}},null,null,null,Promise)}function u(e,t,s){return a()().async(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",t.fetchQuery({queryKey:h,queryFn:));case 1:case"end":return i.stop()}},null,null,null,Promise)}},15618:(e,t,s)=>{s.r(t),s.d(t,{default:()=>eJ});var i=s(54138),a=s.n(i),o=s(50209),n=s.n(o),r=s(5754),l=s.n(r),d=s(95004),h=s(36485),c=s(52980),p=s(2474),u=s(78667),g=s(63583),m=s.n(g),f=s(94576);let v={wrapper:"qn4rB",shown:"kp7A0",hidden:"Jj5Z2",newPostIndicator:"bjtTv",text:"bUnoB"};var x=s(2629);class b extends d.Component{constructor(){super(...arguments),n()(this,"state",{isShown:!1}),n()(this,"show",()=>{var e=this.props,t=e.eventNameShow,s=e.appContext.logEvent;(0,f.Rr)("scroll",this.hide),s({eventName:t}),this.setState({isShown:!0})}),n()(this,"hide",e=>{var t=e.distanceFromTop,s=this.props,i=s.eventNameHide,a=s.appContext.logEvent;this.state.isShown&&t>300&&(a({eventName:i}),this.setState({isShown:!1}),(0,f.oQ)("scroll",this.hide))}),n()(this,"onClick",()=>{var e=this.props,t=e.onClick,s=e.eventNameTap,i=e.appContext.logEvent;t(),i({eventName:s})})}render(){var e=this.state.isShown;return(0,x.jsx)("div",{className:l()(v.wrapper,e?v.shown:v.hidden),"aria-hidden":!e,children:(0,x.jsxs)("button",{className:v.newPostIndicator,onClick:this.onClick,tabIndex:e?void 0:-1,"aria-label":this.props.label,children:[(0,x.jsx)("div",{style:{transform:`rotate(${this.props.rotateIcon}deg)`},children:(0,x.jsx)(p.Mq,{colors:{primary:g.paletteNavy},size:{width:12,height:12}})}),(0,x.jsx)("span",{className:v.text,children:this.props.displayText})]})})}componentWillUnmount(){(0,f.oQ)("scroll",this.hide)}}n()(b,"defaultProps",{rotateIcon:0});let T=(0,u.tM)(b);var j=s(94765),C=s(29860),w=s(931),y=s(48352),P=s(30337),k=s(33970),S=s.n(k),I=s(44009),N=s(98384),B=s(77);let F={tagsFilter:"TXjht",header:"JP3VN",searchIcon:"nkDKC",closeIcon:"ajdBh",footer:"vO52p",cancelButtonWrapper:"Oymh2",clearButton:"bDmZL",applyButton:"xy1OR",tagPill:"e4xmD",selectedTagPill:"w7RFu",tagsContainer:"hSZfZ",actionLink:"BEcMi",filterByTagButton:"oXcDI",disabled:"aCGox",newDimensions:"R1h1i"},R=e=>{var t=e.clickedTags,s=e.setClickedTags,i=e.displayedTags;return(0,x.jsx)("div",{className:F.tagsContainer,children:i.map(e=>{var i=t.includes(e);return(0,x.jsx)(I.Z,{onClick:()=>{i?s(t.filter():s([...t,e])},children:(0,x.jsxs)("div",{className:l()(F.tagPill,{[F.selectedTagPill]:i}),children:["#",e]})},e)})})};var Z=s(55673),_=s(54382),O=s(90127);let D=e=>{var t=e.searchKeyword,s=e.toggleManageTagsModal;return(0,x.jsxs)("div",{className:F.tagsContainer,children:[(0,x.jsx)("p",{children:(0,x.jsx)(_.ZP,{comment:"Text indicating that a tag search provided no results",params:{searchKeyword:t},components:{strong:(0,x.jsx)("strong",{})},children:"No results in your tags for [strong][searchKeyword][/strong]"})}),(0,x.jsxs)(Z.rU,{to:(0,O.W8)(t),className:F.actionLink,children:[(0,x.jsx)(_.ZP,{comment:"Link to search a term on tumblr",children:"Search all on Tumblr"})," ",(0,x.jsx)(p.fj,{colors:{primary:m().colorPrimaryLink},size:{width:12,height:12}})]}),(0,x.jsxs)(I.Z,{className:F.actionLink,onClick:s,children:[(0,x.jsx)(_.ZP,{comment:"Link to open the tags manager modal",children:"Manage all your tags"})," ",(0,x.jsx)(p.fj,{colors:{primary:m().colorPrimaryLink},size:{width:12,height:12}})]})]})},A=e=>{var t=e.followedTags,s=e.clickedTags,i=e.toggleTagsFilter,a=e.setFilteredTags,o=e.setClickedTags,n=(0,B.iv)().setHighlightedTags,},l=s.length?` (${s.length})`:"",d=!!s.length;return(0,x.jsxs)("div",{className:F.footer,children:[(0,x.jsx)("div",{className:F.cancelButtonWrapper,children:(0,x.jsx)(I.Z,{onClic},children:(0,x.jsx)(_.ZP,{comment:"Button to cancel a tags filter selection",children:"Cancel"})})}),(0,x.jsx)(I.Z,{onClic),wrapperClassName:F.clearButton,disabled:!d,children:(0,x.jsx)(_.ZP,{comment:"Remove all selected tags from the filter",params:{count:l},children:"Clear[count]"})}),(0,x.jsx)(I.Z,{onClick:()=>{a(s),s.length?n(s):n(t),i()},wrapperClassName:F.applyButton,children:(0,x.jsx)(_.ZP,{comment:"Button to apply the selected tags to a filter",children:"Apply"})})]})};var L=s(98478),M=s(19486);let E=e=>{var t=e.searchKeyword,s=e.setSearchKeyword,i=(0,u.bp)()._c;return(0,x.jsxs)("div",{className:F.header,children:[(0,x.jsx)("div",{className:F.searchIcon,children:(0,x.jsx)(M.Z,{size:{width:18,height:18}})}),(0,x.jsx)("input",{value:t,onChang),placeholder:i("Place holder text on a input in which the user will type a tag to search","Search your tags")}),!!t.length&&(0,x.jsx)(I.Z,{onClic),className:F.closeIcon,"aria-label":i("Label for a button that will allow a user to dismiss a tag search","Dismiss tag search"),children:(0,x.jsx)(L.Z,{size:{width:12,height:12}})})]})};var H=s(52858);let z=(e,t)=>{var s=(0,Z.lr)(),i=S()(s,2),a=i[0],o=i[1],n=(0,d.useState)(!1),r=S()(n,2),l=r[0],h=r[1];return(0,d.useEffect)(()=>{"manage-tags"===a.get("action")&&h(!0)},[a]),{tagsManagerModal:l&&(0,x.jsx)(H.Z,{onClose:s=>{h(!1),s&&(e(),t()),"manage-tags"===a.get("action")&&(a.delete("action"),o(a))}}),toggleManageTagsModa)}};var Q=s(20943);let J=(e,t)=>{var s=(0,u.bp)().apiFetch,i=(0,B.iv)().setHighlightedTags,a=(0,d.useState)([]),o=S()(a,2),n=o[0],r=o[1],l=()=>{var e=[];r([]),t();var a=t=>{t.response.elements.forEac));var o,n=null===(o=t.response.links)||void 0===o||null===(o=o.next)||void 0===o?void 0:o.href;n?s(n).then(a):(r([...e]),i([...e]))};(0,Q.Y4)(s).fetch().then(a)};return(0,d.useEffect)(l,[]),{displayedTags:""===e?n:n.filte)),followedTags:n,loadTags:l}};var V=s(50213);let U=e=>{var t=e.filteredTags,s=e.setFilteredTags,i=(0,u.bp)(),a=i._c,o=i.features.redpopDesktopVerticalNav,n=(0,d.useState)([]),r=S()(n,2),h=r[0],c=r[1],p=(0,d.useState)(""),g=S()(p,2),m=g[0],f=g[1],v=(0,d.useState)(!1),b=S()(v,2),T=b[0],j=b[1],C=(0,B.iv)().setAdditionalHeaderOffset,},y=()=>{w(),j(!T),T&&C(0)},P=J(}),k=P.followedTags,Z=P.displayedTags,_=z(P.loadTags,y),O=_.tagsManagerModal,L=_.toggleManageTagsModal,M=t.length?1===t.length?a("Indicates that the filter tag is active with only one tag","Filtering by 1 tag"):a("Indicates how many tags are selected on the tags filter","Filtering by %1$s tags",[t.length.toString()]):a("Button to open the tags filter","Filter by tag"),H=!!k.length,Q=H?y:void 0,U=l()(F.filterByTagButton,{[F.disabled]:!H,[F.newDimensions]:o});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(I.Z,{onClick:Q,wrapperClassName:U,children:[M,"  ",(0,x.jsx)(N.$S,{size:{width:12,height:12}})]}),O,T&&(0,x.jsx)(V.Z,{onGlassCli(),children:(0,x.jsxs)("div",{className:F.tagsFilter,children:[(0,x.jsx)(E,{searchKeyword:m,setSearchKeyword:f}),Z.length?(0,x.jsx)(R,{clickedTags:h,displayedTags:Z,setClickedTags:c}):(0,x.jsx)(D,{searchKeyword:m,toggleManageTagsModal:L}),(0,x.jsx)(A,{followedTags:k,clickedTags:h,toggleTagsFilter:y,setFilteredTags:s,setClickedTags:c})]})})]})};var G=s(43107),q=s(868),K=s(79153),$=s(33608),W=s(30646),Y=s(73465);let X={button:"aNmak",count:"mOOFe",isHidden:"T0YTo"},ee=e=>{var t=e.backgroundColor,s=e.blogId,i=e.count,a=e.icon,o=e.productGroup,n=(0,u.bp)(),r=n._c,h=n._cn,c=(0,d.useState)(!1),p=S()(c,2),g=p[0],m=p[1],f=(0,Y.tD)(a,r("[Badge Management] Badge Icon alt text","Badge icon"),X.icon);return(0,x.jsxs)(x.Fragment,{children:[g&&(0,x.jsx)(W.Nz,{onClose:()=>m(!1),productGroup:o,blogId:s}),(0,x.jsxs)(I.Z,{className:l()(X.button,{[X.isHidden]:g}),onCli0),label:h("Label for unopened TumblrMart Badges","You have an unlocked badge!","You have unlocked badges!",i),style:{background:t},children:[f,i>1&&(0,x.jsx)("span",{className:X.count,style:{background:t},children:i})]})]})};var et=s(78994);function es(){return(0,x.jsxs)("svg",{width:"98",height:"111",fill:"none",role:"img",viewBox:"0 0 98 111",children:[(0,x.jsxs)("g",{filter:"url(#filter0_d_147_6175)",children:[(0,x.jsx)("path",{fill:"#F15CC3",d:"M23 40h52v12a2 2 0 0 1-2 2H25a2 2 0 0 1-2-2V40Z"}),(0,x.jsx)("path",{fill:"#F15CC3",d:"M25 54h48v28a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2V54Z"}),(0,x.jsx)("path",{fill:"#7C5CFF",d:"M25 54h48v5H25z"}),(0,x.jsx)("path",{fill:"#7C5CFF",d:"M30.793 32.177A4 4 0 0 1 33.627 31h30.746a4 4 0 0 1 2.834 1.177L75 40H23l7.793-7.823Z"}),(0,x.jsx)("path",{fill:"#E8D73A",d:"M44 54h10v30H44z"}),(0,x.jsx)("path",{fill:"#D7C736",d:"M44 40h10v14H44z"}),(0,x.jsx)("path",{fill:"#E8D73A",fillOpacity:".7",d:"M46.333 31.051h5.385l1.795 8.526h-8.974l1.794-8.526Z"}),(0,x.jsx)("path",{fill:"#7C5CFF",fillOpacity:".6",d:"M44 54h10v5H44z"}),(0,x.jsx)("path",{fill:"#E8D73A",d:"M31.797 28.602c-2.517 3.146-1.502 7.935 0 9.794 1.674 2.073 15.584.786 17.37 0 .058-4.575-.396-10.346-.743-12.747-.93-6.434-2.43-6.934-4.904-6.555-7.148 1.716-7.601 6.291-6.934 8.364-2.23-1.6-4.122.096-4.79 1.144Z"}),(0,x.jsx)("path",{fill:"#7C5CFF",fillOpacity:".6",d:"M36.586 27.53c.286 1.773 3.455 4.837 5.004 6.148-3.03-1.087-5.933-2.693-7.005-3.36-2.116-1.144-2.026-2.335-1.716-2.788 1.487-1.316 3.098-.548 3.717 0Z"}),(0,x.jsx)("path",{fill:"#7C5CFF",fillOpacity:".6",d:"M44.092 21.24c-.057 4.746 3.38 10.843 5.047 13.274-.143-2.145-.286-4.743-.429-6.434-.592-7.006-2.21-8.795-3.045-8.914-1.315-.514-1.596 1.168-1.573 2.073Z"}),(0,x.jsx)("path",{fill:"#E8D73A",d:"M66.42 28.602c2.517 3.146 1.502 7.935 0 9.794-1.674 2.073-15.584.786-17.37 0-.058-4.575.396-10.346.743-12.747.929-6.434 2.43-6.934 4.904-6.555 7.148 1.716 7.601 6.291 6.934 8.364 2.23-1.6 4.122.096 4.79 1.144Z"}),(0,x.jsx)("path",{fill:"#7C5CFF",fillOpacity:".6",d:"M61.63 27.53c-.285 1.773-3.454 4.837-5.003 6.148 3.03-1.087 5.933-2.693 7.005-3.36 2.116-1.144 2.026-2.335 1.716-2.788-1.487-1.316-3.098-.548-3.717 0Z"}),(0,x.jsx)("path",{fill:"#7C5CFF",fillOpacity:".6",d:"M54.125 21.24c.057 4.746-3.38 10.843-5.047 13.274.143-2.145.286-4.743.429-6.434.592-7.006 2.211-8.795 3.045-8.914 1.315-.514 1.596 1.168 1.573 2.073Z"}),(0,x.jsx)("g",{filter:"url(#filter1_d_147_6175)",children:(0,x.jsx)("path",{fill:"#E8D73A",d:"M55.145 52.534c-.696-7.511-5.1-12.519-7.65-14.084 1.448-1.507 5.18-3.86 8.519-1.217 3.338 2.643 5.448 10.027 6.085 13.388l-4.173-1.739-2.782 3.652Z"})}),(0,x.jsx)("g",{filter:"url(#filter2_d_147_617)",children:(0,x.jsx)("path",{fill:"#E8D73A",d:"M43.356 53.313c.564-7.522 4.881-12.605 7.404-14.214-1.475-1.481-5.248-3.769-8.54-1.068-3.291 2.7-5.272 10.12-5.85 13.492l4.141-1.812 2.845 3.602Z"})})]}),(0,x.jsxs)("defs",{children:[(0,x.jsxs)("filter",{id:"filter0_d_147_6175",width:"98",height:"111",x:"0",y:"0",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[(0,x.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,x.jsx)("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),(0,x.jsx)("feOffset",{dy:"4"}),(0,x.jsx)("feGaussianBlur",{stdDeviation:"11.5"}),(0,x.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,x.jsx)("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"}),(0,x.jsx)("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_147_6175"}),(0,x.jsx)("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow_147_6175",result:"shape"})]}),(0,x.jsxs)("filter",{id:"filter1_d_147_6175",width:"17.605",height:"20.494",x:"44.494",y:"36.039",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[(0,x.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,x.jsx)("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),(0,x.jsx)("feOffset",{dx:"-3",dy:"4"}),(0,x.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,x.jsx)("feColorMatrix",{values:"0 0 0 0 0.486275 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 0.4 0"}),(0,x.jsx)("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_147_6175"}),(0,x.jsx)("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow_147_6175",result:"shape"})]}),(0,x.jsxs)("filter",{id:"filter2_d_147_617",width:"18.39",height:"18.535",x:"32.369",y:"36.778",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[(0,x.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,x.jsx)("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),(0,x.jsx)("feOffset",{dx:"-4",dy:"2"}),(0,x.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,x.jsx)("feColorMatrix",{values:"0 0 0 0 0.486275 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 0.4 0"}),(0,x.jsx)("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_147_6175"}),(0,x.jsx)("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow_147_6175",result:"shape"})]})]})]})}var ei=s(47211);let ea={button:"pSHgK",badge:"GcSv9"},eo=e=>{var t=e.count,s=e.deeplink,i=(0,u.bp)()._cn,a=(0,et.s0)();return(0,x.jsxs)(I.Z,{className:ea.button,onClick:()=>{s?(0,Y.XW)(s,a):a((0,O.B9)({page:ei.f.Gifts}))},label:i("Label for unopened TumblrMart gifts","You have an unopened gift!","You have unopened gifts!",t),children:[(0,x.jsx)(es,{}),t>1&&(0,x.jsx)("span",{className:ea.badge,children:t})]})};var en=()=>{var e=(0,$.Th)(),t=e.isPending,s=e.data;if("undefined"==typeof window||t||!(null!=s&&s.length))return null;var i=s.filter(e=>"gift"===e.type);if(i.length){var a,o=i[0].deeplink;return(0,K.createPortal)((0,x.jsx)(eo,{count:i.length,deeplink:o}),null===(a=document)||void 0===a?void 0:a.body)}var n=s.filtpe);if(n.length){var r,l=n[0],d=l.imageUrl,h=l.productGroup,c=l.tumblelogUuid,p=l.backgroundColor;return(0,K.createPortal)((0,x.jsx)(ee,{backgroundColor:p,count:n.length,icon:d,productGroup:h,blogId:c}),null===(r=document)||void 0===r?void 0:r.body)}return null},er=s(43597);let el=s.p+"src/assets/images/tour-guide/welcome-aea23306.svg";var ed=s(43906);let eh=()=>{var e=(0,ed.g)().welcomeMessageShown;return(0,d.useEffect)(()=>e,[]),(0,x.jsxs)("div",{className:"B5krg",children:[(0,x.jsx)("img",{src:el,alt:""}),(0,x.jsx)("h1",{children:(0,x.jsx)(_.ZP,{children:"Welcome to your corner of the internet"})}),(0,x.jsx)("p",{children:(0,x.jsx)(_.ZP,{children:"Think of your dashboard as your own little world—one that you get to shape with blogs, tags, and other stuff you like."})})]})};var ec=s(25161),ep=s(61822),eu=s(32468),eg=s(50899),em=s(43523),ef=s(92183),ev=s(63665),ex=s(71417),eb=s(22979),eT=s(85795),ej=s(60023),eC=s(1308),ew=s(18599),ey=s(59215),eP=s(93099),ek=s(45051),eS=s(26963),eI=s(88655);let eN={postColumn:"O4V_R",badge:"k1Smf",static:"vAPcV"};var eB=s(44238),eF=s(84458),eR=s(61512),eZ=s(46244);let e_=s.p+"src/assets/icons/blaze-announcement-760a2f8d.svg";var eO=s(6233),eD=s(11007),eA=s(24946),eL=s(49116);let eM={icon:"S0XvJ",title:"ZcxPx",text:"kFu2G",infoText:"xB7E8",buttons:"pZsgR",actionButtonClose:"uCImh",actionButtonChange:"j7m58"},eE=()=>{var e,t=(0,et.s0)(),s=(0,u.bp)(),i=s._c,a=s._t,o=s.apiFetch,n=s.logEvent,r=s._getLanguage,l=s.features.showBlazeSettingsBanner,h=r().localization,c=(0,eA.sU)(h),p=null===(e=(0,eD.g)().data)||void 0===e?void 0:e.name,g="true"===eL.E.getItem("blazeSettingsBannerShown"),m=void 0!==p&&!g&&!0===l,f=(0,d.useState)(!0),v=S()(f,2),b=v[0],T=v[1];(0,d.useEffect)(()=>{b&&m&&n({eventName:em.J.BlazeOtherPeopleAnnouncementShown})},[b,m,n]);var j=(0,eZ.D)({mutatiT"}),onError:()=>{n({eventName:em.J.BlazeOtherPeopleAnnouncementAcknowledgeCallFailed})},retry:2});if(!b||!m)return null;var C=()=>{eL.E.setItem("blazeSettingsBannerShown","true"),T(!1)},w=()=>{void 0!==p&&t((0,O.BR)({blogName:p})+"#blaze")},y=()=>{n({eventName:em.J.BlazeOtherPeopleAnnouncementClose}),C(),j.mutate()};return(0,x.jsxs)(eO.Z,{title:" ",compact:!0,onClose:y,theme:eO.L.Rounded,modalWrapperClass:"blazeAnnouncement",children:[(0,x.jsx)("div",{className:eM.icon,children:(0,x.jsx)(()=>(0,x.jsx)("img",{className:eM.blazed,src:e_,alt:i("Alternate text for a blaze other people posts icon","Blaze other people posts icon")}),{})}),(0,x.jsx)("header",{className:eM.title,children:i("[Blaze other people posts announcement] Label title for the blaze announcement pop up","Things are heating up!")}),(0,x.jsx)("header",{className:eM.title,children:i("[Blaze other people posts announcement] Label title for the blaze announcement pop up","Now your posts can be Blazed by others!")}),(0,x.jsx)("main",{className:eM.text,children:i("[Blaze other people posts announcement] Label text for the blaze announcement pop up","We love seeing all the amazing things you’ve Blazed so much, that we’ve decided to let you Blaze posts from any blog. This feature can be disabled from the blog settings page.")}),(0,x.jsxs)("footer",{className:eM.buttons,children:[(0,x.jsx)(I.Z,{label:a("Awesome news"),wrapperClassName:eM.actionButtonClose,onClick:y,children:a("Awesome news")}),(0,x.jsx)(I.Z,{label:a("I want to change it"),wrapperClassName:eM.actionButtonChange,onClick:()=>{n({eventName:em.J.BlazeOtherPeopleAnnouncementTakeMeToSettings}),C(),j.mutate(),w()},children:a("I want to change it")})]}),(0,x.jsxs)("footer",{className:eM.infoText,children:[(0,x.jsx)("a",{href:"https://www.tumblr.com/support",target:"_blank",onClick:()=>{n({eventName:em.J.BlazeOtherPeopleAnnouncementHelpClicked})},children:a("Help")}),"  •  ",(0,x.jsx)("a",{href:`https://help.tumblr.com/hc/${c}/articles/5298854249367`,target:"_blanClicked})},children:a("FAQs")})]})]})};var eH="hubs",ez=e=>{var t=e.getTabId,s=e.defaultTabId,i=e.tabs,a=e.tabsHeaderRef,o=e.additionalHeaderOffset,n=e.getTimelineChangeLinkProps,r=e.setFilteredTags,l=e.filteredTags,d=t(),h=(void 0===i?[]e.isHidden).map(e=>e.id),c=t()===eH;return(0,x.jsxs)(eF.T,{ref:a,additionalOffset:o,children:[(0,x.jsx)(G.Z,{timelineOptions:h,submenuOptions:void 0,viewsShown:[],onViewClick:ek.Z,currentView:eb.mt.List,activeOption:d,defaultActiveOption:s,getLinkProps:n,isConfigurableTabsHeader:!0,isScrollingHeader:!0}),c&&(0,x.jsx)(U,{setFilteredTags:r,filteredTags:l})]})};class eQ extends ex.lb{constructor(e){var t;super(e),n()(this,"apiHelper",(0,eT.ZP)(this.props.appContext.apiFetch)),n()(this,"state",{filteredTags:[],highlightedTags:[],defaultTabId:(null===(t=this.props.tabs)||void 0===t?void 0:t[0].id)||eI.Zi,additionalHeaderOffset:0}),n()(this,"preventTabbedDashboardAppearOnNtScroll()}),n()(this,"getTabId",()=>{var e,t,s=null===(e=this.props.params)||void 0===e?void 0:e.tabId;return s&&null!==(t=this.props.tabs)&&void 0!==t&&t.find(e=>e.id===s)?s:this.state.defaultTabId}),n()(this,"isCurrentTabFollowing",()=>this.getTabId()===eI.Zi),n()(this,"isServingOnRoot",()=>{var e;return(null===(e=this.props.location)||void 0===e?void 0:e.pathname)==="/"}),n()(this,"getTimelineChangeLinkProps",e=>{var t,s=this.props.pollerContext.unseenPosts,i=this.props.appContext.features.redpopUnreadNotificationsOnTab,a=e===eI.Zi&&i&&s>0,o=(0,x.jsxs)(x.Fragment,{children:[null===(t=this.props.tabs)||void 0===t||null===(t=t.find(t=>t.id===e))||void 0===t?void 0:t.title,a&&(0,x.jsx)(eB.Z,{className:l()(eN.badge,eN.static),count:s})]});return{to:(0,eP.Z)(O.o_.dashboardByTabId,{tabId:e}),children:o}}),n()(this,"getTabIndexById",e=>{var t;return null===(t=this.props.tabs)||void 0===t?void 0:t.findIndex(t=>t.id===e)}),n()(this,"getTabLoggingIdById",e=>{var t,s=null===(t=this.props.tabs)||void 0===t?voi=>t.id===e);return null==s?void 0:s.loggingId}),n()(this,"getDashboardContextValue",()=>{var e,t,s=this.getTabId(),i=null===(e=this.props.tabs)||void 0===e?voap(e=>e.id),a=this.getTabIndexById(s),o={tabId:s,tabPosition:a,preventTabbedDashboardAppearOnNextScroll:this.preventTabbedDashboardAppearOnNextScroll,highlightedTags:this.state.highlightedTags,setHighlightedTags:this.setHighlightedTags,setAdditionalHeaderOffset:this.setAdditionalHeaderOffset,tabs:i};for(var n in o)if(o[n]!==(null===(t=this.prevDashboardContext)||void 0===t?void 0:t[n]))return this.prevDashboardContext=o,o;return this.prevDashboardContext||o}),n()(this,"getBody",()=>{var e=this.props.appContext,t=e._t,s=e._c,i=e.features,a=this.props.tourGuideContext.shouldShowWelcomeMessage,o=(0,h.S)(`/dashboard/${this.getTabId()}`,this.getFilteredTagsQueryParams()),n=(0,x.jsx)(ez,{getTabId:this.getTabId,defaultTabId:this.state.defaultTabId,tabs:this.props.tabs,tabsHeaderRef:this.tabsHeaderRef,additionalHeaderOffset:this.state.additionalHeaderOffset,getTimelineChangeLinkProps:this.getTimelineChangeLinkProps,setFilteredTags:this.setFilteredTags,filteredTags:this.state.filteredTags});return(0,x.jsxs)("main",{className:eN.postColumn,children:[(0,x.jsx)(eE,{}),this.isCurrentTabFollowing()&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(T,{onClick:this.refreshDashboard,ref:this.setNewPostIndicatorRef,displayText:t("New posts"),label:t("Refresh timeline to see new posts"),eventNameShow:em.J.NewPostIndicatorShow,eventNameHide:em.J.NewPostIndicatorHide,eventNameTap:em.J.NewPostIndicatorTap,rotateIcon:90}),(0,x.jsx)(T,{onClick:this.onTimelineIndicatorClick,ref:this.setRestoreTimelineIndicatorRef,displayText:s("Text for button that restores timeline to what it was when you last left the site.","Now, where were we?"),label:t("Restore timeline to what it was when you last viewed it"),eventNameShow:em.J.RestoreTimelineIndicatorShow,eventNameHide:em.J.RestoreTimelineIndicatorHide,eventNameTap:em.J.RestoreTimelineIndicatorTap,rotateIcon:-90})]}),i.redpopDesktopVerticalNav&&(0,x.jsx)(B.E9.Provider,{value:this.getDashboardContextValue(),children:n}),(0,x.jsx)(w.Z,{}),a()&&(0,x.jsx)(eh,{}),this.props.tabs&&(0,x.jsxs)(B.E9.Provider,{value:this.getDashboardContextValue(),children:[!i.redpopDesktopVerticalNav&&n,(0,x.jsx)(j.Z,{timelineName:o,getEndpointApiRequestFromQueryParams:this.getEndpointApiRequestFromQueryParams,children:(0,x.jsx)(q.Z,{shouldRestoreIfPossible:this.shouldRestoreState,canonicalPath:`/dashboard/${this.getTabId()}`,endpointApiRequest:void 0,getObjectsFromResponse:this.getObjectsFromResponse,getInitialPage:this.getInitialPage,id:`timeline/${this.props.location.pathname}-${this.props.location.search}`,setRefreshCallback:this.setRefreshCallback,didShowRestoredState:this.setNewPostIndicatorVisible,didFinishShowingRestoredState:this.setNewPostIndicatorHidden,onPagination:this.onPagination,letTimelineBeRestorable:this.letTimelineBeRestorable})})]}),(0,x.jsx)(en,{})]})}),n()(this,"getFilteredTagsQueryParams",()=>{var e={};return this.getTabId()===eH&&this.state.filteredTags.forEach((t,s)=>{e[`tags[${s}]`]=t}),e}),n()(this,"getEndpointApiRequestFromQueryParams",e=>{var t,s=this.props.appContext.apiFetch,i=this.getTabId(),o=null===(t=this.props.tabs)||void 0===t||null===>i===e.id))||void 0===t?void 0:t.timelineUri;return!o||this.isCurrentTabFollowing()?this.apiHelper.getDashboard(e):new ej.x(s,o,{queryParams:a()(a()(a()(a()({},(0,eC.xr)()),e),this.getFilteredTagsQueryParams()),{},{reblog_info:!0})})}),n()(this,"onPagination",e=>{var t=e.requestType;return[ev.vO.Initial,ev.vO.Refresh].includes(t)&&this.props.pollerContext.rerequestPoll()}),n()(this,"getInitialPage",()=>{var e,t,s=null===(e=this.props.appContext.getBootstrap(eI.Rn))||void 0===e?void 0:e.dashboardTimeline;if(s){var i=s.response,a=i.timeline,o=a.elements,n=a.links,r=i.adsUserSync;return{objects:o,nextLink:null==n?void 0:n.next,pixels:null!==(t=null==r?void 0:r.pixels.map(e=>{var t=e.url.replace("URLENCODED_REDPOP_HOST",eg.Cw);return{id:e.id,url:t}}))&&void 0!==t?t:[]}}}),n()(this,"getObjectsFroe.elements),n()(this,"setFilteredTags",e=>{this.setState({filteredTags:e})}),n()(this,"setRefreshCallback",e=>this.refreshCallback=e),n()(this,"setAdditionalHeaffset:e})}),n()(this,"refreshall(this)}),n()(this,"setNewPostIndicatorVisible",()=>{var e;return null===(e=this.newPostIndicator)||void 0===e?void 0:e.show()}),n()(this,"setNewPostIndicatorHidden",()=>{var e;return null===(e=this.newPostIndicator)||void 0===e?void 0:e.hide({distanceFromTop:301})}),n()(this,"setRestoreTimelineIndicat:e.show()}),n()(this,"setRestoreTimelineIndicatorHidden",()=>{var e;return null===(e=this.restoreTimelineIndicator)||void 0===e?void 0:e.hide({distanceFromTop:301})}),n()(this,"letTimelineBeRVisible()}),n()(this,"onTimelineIndicatorClick",()=>{var e;null===(e=this.restoreCallback)||void 0===e||e.call(this),this.setRestoreTimelineIndicatorHidden()}),n()(this,"shouldRestoreState",()=>{var e,t=(0,eS.b)(null===(e=this.props.location)||void 0===e?void 0:e.search),s=t.restore,i=t.installed;if(s||i)return!0;if(!(0,ew.EK)(this.props.appContext.getBrowserInfo()))return!1;var a="standalone"in window.navigator&&window.navigator.standalone,o=!(0,q.z)({timelineName:"/dashboard"});return!!a&&!!o}),n()(this,"setNewPostIndicatorRef",e=>this.newPostIndicator=e),n()(this,"setRestoreTimelineIndndicator=e),n()(this,"setHighlidTags:e})}),this.tabsHeaderRef=d.createRef()}render(){var e,t,s=this.props.appContext.features,i=this.getInitialPage();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(y.Z,{page:null!==(e=this.props.params)&&void 0!==e&&e.tabId?`${eI.HJ.analyticsPageName}Tab`:eI.HJ.analyticsPageName,eventDetails:{tab:this.getTabLoggingIdById(this.getTabId()||eR.AO.Following)}}),(0,x.jsx)(ep.M.Provider,{value:this.refreshDashboard,children:(0,x.jsxs)(c.Z,{activePage:eu.vS.home,children:[this.isServingOnRoot()&&(0,x.jsx)(C.Z,{canonicalUrl:`${eg.Cw}${O.o_.dashboard}`}),(0,x.jsx)(er.Z,{sidebar:(0,x.jsx)(P.Z,{showRecommendedBlogs:!0,showRadar:!0,showAd:s.redpopMrec,supplyProviderId:ef.E.RIGHT_RAIL}),children:this.getBody()}),null==i||null===(t=i.pixels)||void 0===t?void 0:t.map(e=>(0,x.jsx)("img",{src:e.url,style:{height:1,width:1},"aria-hidden":!0,alt:""},e.id))]})})]})}}let eJ=(0,ey.Bg)(function(e){var t=(0,ec.ev)().data;return(0,x.jsx)(eQ,a()(a()({},e),{},{tabs:t}))},{appContext:!0,pollerContext:!0,tourGuideContext:!0})},27452:(e,t,s)=>{s.d(t,{f:()=>i});var i={postType:void 0,postRole:"any",postSort:s(5700).H_.CreatedDesc}},61512:(e,t,s)=>{s.d(t,{AO:()=>n,gd:()=>r});var i=s(54138),a=s.n(i);s(27452);var o=s(5700),n={Posts:"Posts",Likes:"Likes",Following:"Following"};function r(e){var t=e.postSort,s=e.postRole,i=e.postType;return a()(a()({peeprSelectedPostType:i},"any"!==s&&{peeprPostRole:s}),t===o.H_.PopularityDesc&&{peeprSearchMode:"top"})}},83875:(e,t,s)=t,{Y:()=>o});var i=s(43523),a=s(5700),o=e=>{switch(e){case a.hQ.Text:return i.J.PFComposePostText;case a.hQ.Audio:return i.J.PFComposePostAudio;case a.hQ.Photo:return i.J.PFComposePostPhoto;case a.hQ.Quote:return i.J.PFComposePostQuote;case a.hQ.Link:return i.J.PFComposePostLink;case a.hQ.Chat:return i.J.PFComposePostChat;case a.hQ.Video:return i.J.PFComposePostVideo}}}}]);