!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=Error().stack;l&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[l]="82eb4b0b-45ab-4fe7-9179-cb211e732301",e._sentryDebugIdIdentifier="sentry-dbid-82eb4b0b-45ab-4fe7-9179-cb211e732301")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@b474a6ad4354f4ba5fde672fa4e9c2c267684761"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[6189],{40548:(e,l,a)=>{a.r(l),a.d(l,{default:()=>d});var s=a(95004),t=a(93853),S=a(71581),r=a(18599),i=a(78667);let o={hotkeyGuide:"bsmhp",row:"eHj45",plus:"WU1l3",key:"tFqqu"};var b=a(2629);let d=()=>{var e=(0,i.bp)(),l=e._c,a=e._t,d=e.endlessScrollingDisabled,n=e.getBrowserInfo,V=e.features,k=(0,r.HP)(n()),c={[t.SV.Right]:"→",[t.SV.Left]:"←",[t.SV.Up]:"↑",[t.SV.Down]:"↓",[t.SV.Escape]:"esc",[t.SV.Enter]:"enter",[t.SV.Tab]:"tab",[t.SV.Backspace]:"backspace",[t.SV.Delete]:"delete",[t.SV.Dot]:".",[t.SV.QuestionMark]:"?",[t.TE.Alt]:"alt",[t.TE.Ctrl]:"ctrl",[t.TE.Shift]:"shift",[t.TE.Meta]:k?"⌘":"ctrl",[t.SV.a]:"A",[t.SV.d]:"D",[t.SV.c]:"C",[t.SV.e]:"E",[t.SV.j]:"J",[t.SV.k]:"K",[t.SV.l]:"L",[t.SV.m]:"M",[t.SV.o]:"O",[t.SV.p]:"P",[t.SV.q]:"Q",[t.SV.r]:"R",[t.SV.w]:"W",[t.SV.Slash]:"/",[t.SV.Space]:"space",[t.SV.One]:"1",[t.SV.Two]:"2",[t.SV.Three]:"3",[t.SV.Four]:"4",[t.SV.Five]:"5",[t.SV.Six]:"6",[t.SV.Seven]:"7",[t.SV.Eight]:"8",[t.SV.Nine]:"9",[t.SV.Zero]:"0",[t.SV.NumpadSubtract]:"-",[t.SV.Comma]:","},p=[{title:a("Dashboard"),items:[{label:a("New post"),keys:[t.SV.c]},{label:a("Move forward"),keys:[t.SV.Tab]},{label:a("Move backward"),keys:[t.TE.Shift,t.SV.Tab]},{label:a("Scroll down"),keys:[t.SV.j]},{label:a("Scroll up"),keys:[t.SV.k]},...d?[{label:a("Next page"),keys:[t.SV.Right]},{label:a("Previous page"),keys:[t.SV.Left]}]:[],{label:a("Back to the top"),keys:[t.SV.Dot]},{label:a("Like a post"),keys:[t.SV.l]},{label:a("Reblog a post"),keys:[t.TE.Shift,t.SV.r]},{label:a("Click to reblog a post"),keys:[t.SV.e,"Click"]},{label:a("Queue a post"),keys:[t.TE.Shift,t.SV.q]},{label:a("Click to queue a post"),keys:[t.SV.w,"Click"]},{label:a("Answer an ask"),keys:[t.SV.a]},{label:a("Delete a post"),keys:[t.SV.d]},{label:a("Search Tumblr"),keys:["?"]},{label:a("Change palette"),keys:[t.TE.Shift,t.SV.p]}]},{title:a("Lightbox"),items:[{label:a("Next image"),keys:[t.SV.Right]},{label:a("Previous image"),keys:[t.SV.Left]},{label:a("Close"),keys:[t.SV.Escape]}]},{title:a("Composing"),items:[{label:a("Add media"),keys:["/"]},{label:a("Bold"),keys:[t.TE.Meta,"B"]},{label:a("Italic"),keys:[t.TE.Meta,"I"]},{label:a("Inline Link"),keys:[t.TE.Meta,"K"]},{label:a("Text Color"),keys:[t.TE.Meta,"O"]},{label:a("Strikethrough"),keys:[t.TE.Meta,t.TE.Shift,"6"]},{label:a("Small text"),keys:[t.TE.Meta,","]}]}];V[S.T.VideoHubs]&&p.push({title:l('Title for the "Takes" (VideoHubs) section of the Hotkeys guide',"Takes"),items:[{label:a("Scroll down"),keys:[t.SV.Down]},{label:a("Scroll up"),keys:[t.SV.Up]},{label:a("Pause/Unpause a video"),keys:[t.SV.Space]},{label:a("Mute/Unmute a video"),keys:[t.SV.m]}]});var u=e=>c[e]||e;return(0,b.jsxs)("div",{className:o.hotkeyGuide,children:[(0,b.jsx)("h1",{children:a("Keyboard shortcuts")}),p.map(e=>{var l=e.title,a=e.items;return(0,b.jsxs)(s.Fragment,{children:[(0,b.jsx)("h2",{children:l}),(0,b.jsx)("dl",{children:a.map(e=>{var l=e.label,a=e.keys;return(0,b.jsxs)("div",{className:o.row,children:[(0,b.jsx)("dt",{children:l}),(0,b.jsx)("dd",{children:a.map((e,t)=>(0,b.jsxs)(s.Fragment,{children:[(0,b.jsx)("kbd",{className:o.key,children:u(e)}),t!==a.length-1&&(0,b.jsx)("span",{className:o.plus,children:"+"})]},`${l}-${e}`))})]},l)})})]},l)})]})}}}]);t=l(54589),o=l.n(t),n=l(50209),i=l.n(n),c=l(95004),d=l(18997),h=l(31571),g=l(86148),p=l(2629),u=["isFollowed"];class m extends c.PureComponent{constructor(){super(...arguments),i()(this,"state",{followed:!!this.props.isFollowed}),i()(this,"onFollow",(e,s)=>{var l,a;this.setState({followed:s}),null===(l=(a=this.props).onClickFollow)||void 0===l||l.call(a,e)})}render(){var e=this.state.followed,s=this.props,l=(s.isFollowed,o()(s,u)),a=this.props,t=a.blogName,n=a.blogUrl,i=!e&&(0,p.jsx)(h.Z,{className:g.Z.blogRowFollowButton,following:e,blogName:t,blogUrl:n,onFollow:this.onFollow});return(0,p.jsx)("div",{className:"bIcAM",children:(0,p.jsx)(d.Z,r()(r()({},l),{},{isMobile:!1,floatingButton:i,theme:"light",openBlogCard:"none"}))})}}let v=m},25139:(e,s,l)=>{l.r(s),l.d(s,{default:()=>Z});var a=l(54138),r=l.n(a),t=l(50209),o=l.n(t),n=l(5754),i=l.n(n),c=l(95004),d=l(55673),h=l(17287),g=l(29846),p=l(54382),u=l(90127),m=l(78667),v=l(29742),x=l(72010),b=l(43523),w=l(86334),y=l(90612),N=l(2629);class j extends c.Component{constructor(){super(...arguments),o()(this,"query",this.props.query),o()(this,"state",{recentSearches:[]})}loadRecentSearches(){var e=(0,w.X5)();this.setState({recentSearches:e})}componentDidMount(){this.loadRecentSearches()}shouldComponentUpdate(e){return this.props.tags!==e.tags&&(this.query=e.query),!0}render(){var e=this.props,s=e.followedTags,l=e.tags,a=e.blogs,r=e.isFullscreen,t=e.closeContainingPopover,o=e.appContext.logEvent,n=e.logSearchEvent,c=this.state.recentSearches,m=this.query,j=e=>{o({eventName:b.J.SearchSuggestionRecentSearchTap,eventDetails:{result:e,result_type:"search_query"}}),t()},f=e=>{o({eventName:b.J.SearchSuggestionRecentSearchClearTap,eventDetails:{result:e,result_type:"search_query"}}),(0,w.DL)(e),this.loadRecentSearches()},T=(e,s,l)=>{o({eventName:b.J.SearchSuggestionFollowedTagTap,eventDetails:{result:e,result_type:"tag",position:l}}),s&&o({eventName:b.J.SearchSuggestionTrendingTagTap,eventDetails:{result:e,result_type:"tag",position:l}}),t()},Z=(e,s,l)=>{n(b.J.SearchTypeaheadTagResultTap,{result:e,result_type:"tag",search_query:m,position:l}),s&&n(b.J.SearchSuggestionTrendingTagTap,{result:e,result_type:"tag",search_query:m,position:l}),t()},R=(e,s)=>{n(b.J.SearchTypeaheadBlogResultTap,{result:e,result_type:"blog",search_query:m,position:s}),t()},C=e=>{n(b.J.SearchTypeaheadGoToBlogTap,{search_query:e}),t()},S=(e,s)=>{n(b.J.SearchTypeaheadBlogFollowTap,{result:e,result_type:"blog",search_query:m,position:s})},k=!!s.length&&(0,N.jsxs)("div",{className:y.Z.searchResult,children:[(0,N.jsx)("h3",{className:y.Z.resultTitle,children:(0,N.jsx)(p.ZP,{children:"Tags you follow"})}),s.map((e,s)=>(0,N.jsx)(d.rU,{className:y.Z.typeaheadRow,to:(0,u.fO)(e.name,{src:"followed_tag"}),onClick:()=>T(e.name,!!e.trending,s),children:(0,N.jsx)(x.Z,{name:e.name,thumbnail:e.thumbUrl})},e.name))]}),B=""===m&&!!(null!=c&&c.length)&&(0,N.jsxs)("div",{className:y.Z.searchResult,children:[(0,N.jsx)("h3",{className:y.Z.resultTitle,children:(0,N.jsx)(p.ZP,{comment:"Label pointing to recent searches",children:"Recent"})}),c.map(e=>(0,N.jsx)(d.rU,{className:y.Z.typeaheadRow,to:(0,u.W8)(e,"search",{src:"recent_search"}),onClick:()=>j(e),children:(0,N.jsx)(x.Z,{recent:e,onRemove:()=>f(e)})},e))]}),_=m.trim(),q="#"===_[0]?_.slice(1):_,F=(""!==_||!!l.length)&&(0,N.jsxs)("div",{className:y.Z.searchResult,children:[(0,N.jsx)(d.rU,{className:y.Z.typeaheadRow,to:(0,u.fO)(q,{src:"typed_query"}),onClick:()=>{n(b.J.SearchTypeaheadGoToHubTap,{search_query:m}),t()},children:(0,N.jsx)(x.Z,{children:(0,N.jsx)(p.ZP,{components:{action:(0,N.jsx)("span",{className:y.Z.goToAction}),query:(0,N.jsx)("span",{className:y.Z.goToTag,children:`#${q}`})},children:"[action]Go to [/action][query/]"})})},q),l.map((e,s)=>(0,N.jsx)(d.rU,{className:y.Z.typeaheadRow,to:(0,u.W8)(e.tag,"search",{src:"suggested_tag"}),onClick:()=>Z(e.tag,!!e.trending,s),children:(0,N.jsx)(x.Z,{query:m,name:e.tag})},e.tag))]}),P=(0,v.Z)(_),D=(P||!!a.length)&&(0,N.jsxs)("div",{className:y.Z.searchResult,children:[(0,N.jsx)("h3",{className:y.Z.resultTitle,children:(0,N.jsx)(p.ZP,{children:"Tumblrs"})}),P&&(0,N.jsx)(h.Z,{className:y.Z.typeaheadRow,blogName:_,showBlogCard:!1,onClick:()=>C(_),children:(0,N.jsx)(x.Z,{children:(0,N.jsx)(p.ZP,{components:{blogName:(0,N.jsx)("span",{className:y.Z.goToBlog,children:_})},children:"Go to @[blogName/]"})},"@blog")}),a.map((e,s)=>(0,N.jsx)(x.Z,{query:m,onClick:()=>R(e.name,s),onClickFollow:()=>S(e.name,s),blog:e},e.name))]}),U=(F||D)&&(0,N.jsxs)(N.Fragment,{children:[F,D]}),J=r&&(0,N.jsx)(g.Z,{overflow:"hidden"});return(0,N.jsxs)("div",{className:i()(y.Z.typeaheadDropdown,{[y.Z.fullscreen]:r}),children:[J,B,U,a.length?"":k]})}}o()(j,"defaultProps",{followedTags:[],tags:[],blogs:[],isFullscreen:!1,query:""});var f=(0,m.HJ)(j);class T extends c.Component{render(){return(0,N.jsx)(f,r()({},this.props))}}o()(T,"defaultProps",j.defaultProps);let Z=T},72010:(e,s,l)=>{l.d(s,{Z:()=>y});var a=l(50209),r=l.n(a),t=l(95004),o=l(56610),n=l(19486),i=l(38149),c=l(2541),d=l(63583),h=l.n(d),g=l(44009),p=l(98478);let u={typeaheadRow:"a8XCP",highlightQuery:"ySrcn",searchIcon:"BR9Jy",dismissRecentSearch:"CrOVJ",img:"FiOas",imgEmpty:"Ok4ZN",tagText:"sCYjs",blogName:"OrRZL"};var m=l(2629),v=e=>!!e.name,x=e=>!!e.blog,b=e=>!!e.recent;class w extends t.Component{constructor(){super(...arguments),r()(this,"renderAvatar",e=>e?(0,m.jsx)("div",{className:u.img,children:(0,m.jsx)(i.wZ,{imageResponse:[{url:e,width:36,height:36}],isSquare:!0})}):(0,m.jsx)("div",{className:u.imgEmpty})),r()(this,"renderHighlightedText",e=>{if(!this.props.query||!e)return e;var s=this.props.query.trim(),l=RegExp(`(${(0,c.h)(s)})`,"gi");return e.split(l).reduce((e,l,a)=>{if(!l)return e;var r=l.toLowerCase()===s.toLowerCase()?(0,m.jsx)("span",{className:u.highlightQuery,children:l},a):l;return e.push(r),e},[])})}render(){return v(this.props)?this.renderTag(this.props):x(this.props)?this.renderBlog(this.props):b(this.props)?this.renderRecent(this.props):this.renderContent(this.props)}renderTag(e){var s=e.name,l=e.thumbnail,a=e.query;return(0,m.jsxs)("div",{className:u.typeaheadRow,children:[a?(0,m.jsx)("div",{className:u.searchIcon,children:(0,m.jsx)(n.Z,{colors:{primary:h().paletteBlack}})}):this.renderAvatar(l),(0,m.jsx)("span",{className:u.tagText,children:this.renderHighlightedText(s)})]})}renderRecent(e){var s=e.recent,l=e.onRemove;return(0,m.jsxs)("div",{className:u.typeaheadRow,children:[(0,m.jsx)("div",{className:u.searchIcon,children:(0,m.jsx)(n.Z,{colors:{primary:h().paletteBlack}})}),(0,m.jsx)("span",{className:u.tagText,children:s}),(0,m.jsx)("div",{className:u.dismissRecentSearch,children:(0,m.jsx)(g.Z,{onClick:e=>{e.stopPropagation(),e.preventDefault(),l()},children:(0,m.jsx)(p.Z,{size:{width:12,height:12},colors:{primary:h().paletteBlack}})})})]})}renderBlog(e){var s=e.blog,l=s.name,a=s.title,r=s.avatar,t=s.followed,n=s.url,i=s.liveNow,c=e.onClick,d=e.onClickFollow;return(0,m.jsx)(o.Z,{blogUrl:n,blogName:l,avatar:r,blogTitle:(0,m.jsx)("span",{className:u.blogTitle,children:this.renderHighlightedText(a)}),isFollowed:t,liveNow:i,onClick:c,onClickFollow:d,children:(0,m.jsx)("span",{className:u.blogName,children:this.renderHighlightedText(l)})})}renderContent(e){return(0,m.jsx)("div",{className:u.typeaheadRow,children:e.children})}}r()(w,"defaultProps",{query:void 0,blog:void 0,name:void 0,recent:void 0});let y=w},2541:(e,s,l)=>{l.d(s,{h:()=>t});var a=/[\\^$.*+?()[\]{}|]/g,r=RegExp(a.source);function t(e){return e&&r.test(e)?e.replace(a,"\\$&"):e}},29742:(e,s,l)=>{l.d(s,{Z:()=>a});let a=e=>/^[\w]([\w_-]*[\w])?$/g.test(e)}}]);