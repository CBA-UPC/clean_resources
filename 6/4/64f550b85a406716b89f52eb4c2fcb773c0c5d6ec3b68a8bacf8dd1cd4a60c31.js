(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[29],{411:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"LivePage",(function(){return w}));var n=r(2),o=r.n(n),a=r(3),i=r.n(a),c=r(37),s=r(13),u=r.n(s),l=r(862),p=r(863),f=r(67),d=r(28),m=r(261),b=r(8),h=r(745),y=r(967),g=r(0);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t){return!(!t.is_featured&&"video"!==t.content_type&&"video_article"!==t.content_type&&"youtube_video"!==t.content_type)&&"largeTS"}class w extends i.a.PureComponent{omponentDidMount(){this.props.onMount(),this.props.trackEvent({article_type:"live_blog",league:this.props.page.league,referrer_source:this.props.page.utm_source||e.document.referrer,screen:"Live Blog",stream_id:this.props.page.tag_id,stream_name:this.props.page.id,tags_string:this.props.page.tags,tag_manager_event:"content_viewed",team:this.props.page.team})}ender(){const e=u()({page:!0,livePage:!0}),t=this.props.streams&&1===this.props.streams.length;return Object(g.jsxs)("article",{className:e,children:[Object(g.jsx)(y.a,v({},this.props.section.liveData)),Object(g.jsx)("div",{className:"teamStreamList",children:Object(g.jsx)(h.a,{addScript:this.props.addScript,addStyle:this.props.addStyle,childTag:"li",className:"selected",featured:j,header:!1,imgsize:"largeTS",info:this.props.teamStream.info,liveData:this.props.section.liveData,loading:this.props.teamStreamLoading,loadScript:this.props.loadScript,onArticleClick:this.onTeamStreamArticleClick,onStreamSelect:this.onStreamSelect,os:this.props.os,page:this.props.page,oneTrustPreferences:this.props.oneTrustPreferences,scrollPlay:this.props.scrollPlay,showtaginfo:!t,stopUpdatingLivestream:this.props.stopUpdatingLivestream,streamItems:this.props.teamStream.tracks,trackEvent:this.props.trackEvent,updateLivestream:this.props.updateLivestream,visitorCountry:this.props.visitorCountry},"teamStreamList")})]})}}t.default=Object(c.b)((function(e){const t=b.s(e),r=b.t(e);return{currentPage:m.h(e),isEditorial:m.f(e),oneTrustPreferences:r.oneTrustPreferences,os:t.os,page:e.page,scrollPlay:t.scrollPlay,section:m.k(e),sectionTags:m.j(e),singleStream:m.l(e),streams:m.n(e),teamStream:m.p(e),teamStreamLimit:t.teamStreamLimit,teamStreamLoading:t.teamStreamLoading,teamStreamSelected:m.e(e),tickets:m.q(e),trendingLimit:t.trendingLimit,visitorCountry:r.country}}),(function(e){return{addScript:t=>e(d.a(t)),addStyle:t=>e(d.b(t)),loadScript:t=>e(d.d(t)),onArticleClick:t=>e(f.a(t)),onCarouselNext:t=>e(p.a(t)),onMount:()=>e(l.b()),onStreamSelect:function(){return e(p.b(...arguments))},stopUpdatingLivestream:trackEvent:t=>e(f.f(t)),updateLivestream:t=>e(l.c(t)),updateVideosInViewport:}))(w)}.call(this,r(16))},737:function(e,t){e.exports=function(e){return e}},738:739:757:758:function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}},759:760:761:762:763:764:769:770:771:775:function(e,t,r){"use strict";(function(e){var n=r(3),o=r.n(n),a=r(13),i=r.n(a),c=r(18),s=r(804),u=r.n(s),l=r(21),p=r(1),f=r(0);class d extends o.a.PureComponent{shareFacebook(){const t={u:this.props.url,display:"popup",ref:"plugin",src:"share_button"};e.open(`https://www.facebook.com/sharer/sharer.php?${Object(c.buildQueryString)(t)}`,null,"width=550,height=420")}_shareX(){const t={url:this.props.url,via:"BleacherReport"};e.open(`https://twitter.com/intent/tweet?${Object(c.buildQueryString)(t)}`,null,"width=550,height=420`")}render(){if(this.props.hide||!this.props.url)return!1;const e=i()({atom:!0,share:!0});return(Object(f.jsx)("div",{className:e,children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{className:"shareFacebook",title:"Share this article on Facebook",children:Object(f.jsx)(l.SVG,{type:"icon",target:"facebook",onClick:this.shareFacebook})}),Object(f.jsx)("li",{className:"shareX",title:"Share this article on X",children:Object(f.jsx)("img",{className:"atom svg x-icon",src:`${p.B.images()}/atoms/svg/icons/x-icon.svg`,alt:"X.com Logo",onClick:this.shareX})}),Object(f.jsx)("li",{className:"shareLink",title:"Copy this link to your clipboard",children:Object(f.jsx)(u.a,{text:this.props.url,children:Object(f.jsx)(l.SVG,{type:"icon",target:"link",onClick:this.copyLink})})})]})}))}}d.defaultProps={trackEvent:,t.a=d}).call(this,r(16))},776:778:779:804:853:854:},85},862:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return P})),r.d(t,"a",(function(){return E})),r.d(t,"c",(function(){return D}));var n=r(2),o=r.n(n),a=r(26),i=r.n(a),c=r(10),s=(r(22),r(7)),u=(r(94),r(28),r(66)),l=r(120),p=r(62),f=r(74),d=r(20),m=r(4),b=r(51),h=(r(52),r(59));r(1);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const O={facebook:"facebook",twitter:"twitter",send2phone:"send2phone"},v=/:\/\/[^/]*facebook\.com\//,j=/:\/\/[^/]*twitter\.com\//,w=/:\/\/[^/]*t\.co\//;function S(){const t=e.document.referrer;return j.test(t)||w.test(t)?O.twitter:v.test(t)?O.facebook:""}function _(e){const t=(new Date).getTime(),r=m.a.get(function(e){switch(e){case"facebook":return"facebook_liked_accounts";case"twitter":return"twitter_followed_accounts";case"send2phone":return"send2phone_kill";default:return s.a.warn(`determineSnoozeStorageKey saw unrecognized campaign: ${e}`),null}}(O[e]));if(!r)return null;const n=Object.keys(r).reduce((function(e,n){return r[n].expires>t&&e.push(n),e}),[]);return n.length?n.join(","):null}const x=Object(c.a)("FETCH_AND_STORE_PARAMS",()=>({facebook:_(O.facebook),referrer:S(),teamstream:_(O.send2phone),twitter:_(O.twitter)}));const P=()=>(e,t)=>{const{page:r,ui:n}=t(),o=n.show_android_ts_promo?"androidTsPromo":"",a=[e(x())];return function(e){return"section"===e.type&&!h.c.all.includes(e.id)}(r)&&a.push(e(Object(u.e)(o))),Promise.all(a)};Object(c.a)("LOAD_PLAYLIST_METADATA",async e=>{const t=await p.a.getPlaylistMetadata(e);if(!t.permalink)throw i.a.notFound("That doesn't seem to exist.");const r=await l.a.liveblogUrl(t.permalink);return g(g({},t),{},{url:r})});b.a.brLogo("height60");Object(c.a)("LOAD_SECTION_DATA"),Object(c.a)("SET_LIVE_IMAGE");const C=Object(c.a)("UPDATE_LIVESTREAM",async e=>g(g({},await d.a.section(e,[])),{},{sectionSlug:e}));let k;const E=Object(c.a)("CLEAR_LIVESTREAM_REFRESH",async()=>(k&&(e.clearTimeout(k),k=null),!0));let T=!1;const D=t=>async r=>!T&&(T=!0,r(E()).then(()=>r(C(t))).then(()=>{var n;T=!1,r((n=t,async t=>(k||(k=e.setTimeou),3e4)),k)))}).catch(e=>{throw T=!1,s.a.error("error updating livestream",e),r(E()),e}));Object(c.a)("LOAD_TEAM_GAMES",async e=>{const t=await f.a.fetchGamesByTeam(e);return{schedule:null!=t&&t.schedule_groupings?t:{},team:e}})}).call(this,r(16))},863:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a"}));var n=r(2),o=r.n(n),a=r(10),i=r(20),c=r(261const `,p=Object(a.a)("FETCH_STREAM_DATA",async(e,t,r)=>{let n=e,o=e;return Array.isArray(e)&&e.length>1&&(n=e.map(l),o="all"),u(u({},await i.a.stream(n,t)),{},{section:o,streamName:r})}),f=Object(a.a)("INCREMENT_LIMITS",async e=>e),d=Object(a.a)("RESET_LIMITSe),m=Object(a.a)("UPDATE_SELECTED_STREAM)),b=(e,t,r,n)=>o=>o(((e,t,r,n)=>{const o=n?f:d;return(a,i)=>{let s=[];return a(o(r)).then(()=>{const r=i(),o=c.m(r);if("all"===e)return s=c.i(r),a(p(s,o.tsLimit,t));if(n){s=e,"front-page"!==e&&"uk"!==e||(s=c.i(r));const n=c.k(r).trending;return Promise.all([a(p(s,o.tsLimit,t)),a(p(n,o.trendingLimit,t))])}return a(p(e,o.tsLimit,t))})}})(e,t,r,n)).the}),h=Object(a.a)("SHIFT_PLAYLIST"),y=async()=>(e,t)=>{const r=c.k(t());return e(h(r.evergreen))}},967:function(e,t,r){"use strict";r(3);var n=r(13),o=r.n(n),a=r(21),i=r(22),c=r(747),s=r(263),u=r(0);const l=Object(s.a)(),p=Object(s.b)();var f,d=function(e){const t=o()({atom:!0,liveLocation:!0});return(Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)("span",{className:"datetime",children:(r=e.startDate,n=l,!!r&&Object(i.format)(c.a.fromISO(r,{zone:n}),`h:mma [${p}] MMM D, YYYY`))}),Object(u.jsx)("span",{className:"location",children:e.location})]}));var r,n},m=r(740);const b=/([\w-]+\.png)$/;function h(e){let{logo:t,name:r}=e;if(!t||!r)return!1;const n=t.match(b);return{logo_filename:n&&n[1],name:r}}var y=function(e){if(!e.homeTeam||!e.awayTeam)return!1;const t=o()({molecule:!0,teamVsTeam:!0});return(Object(u.jsxs)("h2",{className:t,children:[Object(u.jsx)(m.a,{homeOrAway:"away",info:h(e.awayTeam)}),f||(f=Object(u.jsx)("span",{className:"versus",children:Object(u.jsx)("abbr",{title:"versus",children:"vs"})})),Object(u.jsx)(m.a,{homeOrAway:"home",info:h(e.homeTeam)})]}))},g=r(775);t.a=function(e){if(!e.about)return!1;const t=o()({molecule:!0,liveHeader:!0});return(Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)(g.a,{url:e.url}),Object(u.jsx)("h1",{children:e.headline}),Object(u.jsx)(y,{homeTeam:e.about.home_team,awayTeam:e.about.away_team}),Object(u.jsx)(d,{startDate:e.about.start_date,location:e.about.location}),Object(u.jsx)(a.AuthorInfo,{info:e.authorInfo}),Object(u.jsx)("p",{className:"description",children:e.description})]}))}}}]);
//# sourceMappingURL=https://static-assets.bleacherreport.net/js/livePage-8860ea54.js.map