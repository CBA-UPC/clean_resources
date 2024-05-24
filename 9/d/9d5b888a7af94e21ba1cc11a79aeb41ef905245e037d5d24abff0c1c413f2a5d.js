/*! For license information please see async-likesYou-feature-cfd9873b05ba4b2d251f.js.LICENSE.txt */
"use strict";(globalThis.webpackChunktinderweb=globalThis.webpackChunktinderweb||[]).push([[92356],{453960:(e,t,s)=>{s.d(t,{Rp:()=>c,mu:()=>i});var a=s(915759),r=s(458963);const n=2*a.s2,l=e=>({id:e,timestamp:Date.now()}),c=(e,t,s=50)=>{if(e){return[l(e)].concat(t).slice(0,s)}return t},i=e=>e.filter((e=>!(0,r.Z)(e.timestamp,n)))},785639:(e,t,s)=>{s.d(t,{Dz:()=>y,Kz:()=>C,P7:()=>h,TS:()=>U,bX:()=>p,jm:()=>L,lP:()=>T,o2:()=>f,u7:()=>_,xH:()=>E,xv:()=>g});var a=s(3556),r=s.n(a),n=s(865926),l=s.n(n),c=s(57250),i=s(610747),d=s(799327),u=s(940591);const o=(0,d.cF)("filters"),S=(0,c.createSelector)(o,(e=>e.filterOptions)),_=(0,c.createSelector)(S,(e=>e?.distance)),E=(0,c.createSelector)(S,(e=>e?.hasBio)),y=(0,c.createSelector)(S,(e=>e?.isVerified)),f=(0,c.createSelector)(S,(e=>e?.maxAge)),h=(0,c.createSelector)(S,(e=>e?.minAge)),p=(0,c.createSelector)(S,(e=>e?.minPhotos)),C=(0,c.createSelector)(S,(e=>l()(e?.passions,[e=>e?.name]))),T=(0,c.createSelector)(S,(e=>e?.passions?.map((e=>e.id))??i.ow)),L=(0,c.createSelector)(S,(e=>{const t=u.default.filterOptions;return t.distance!==e?.distance||t.minPhotos!==e?.minPhotos||t.maxAge!==e?.maxAge||t.minAge!==e?.minAge})),g=(0,c.createSelector)(S,(e=>!Object.keys(e).every((t=>{const s=e[t],a=u.default.filterOptions[t];return r()(s,a)})))),U=(0,c.createSelector)(o,(e=>e.isFiltersOpen))},96297:(e,t,s)=>{s.r(t),s.d(t,{fetchLikesYouCountSaga:()=>z,fetchLikesYouPreviewSaga:()=>P,fetchLikesYouRecsSaga:()=>b,fetchLikesYouTeasersSaga:()=>x,setNewLikesCountSaga:()=>N,showFirstLikeModalSaga:()=>D,showNewLikesModalSaga:()=>W});var a=s(13241),r=s(991931),n=s.n(r),l=s(897696),c=s(13124),i=s(50377),d=s(915759),u=s(586691),o=s(799327),S=s(259668),_=s(458963),E=s(46328),y=s(235430),f=s(517727),h=s(173969),p=s(785639),C=s(662310),T=s(661996),L=s(320649),g=s(568343),U=s(386494),R=s(268714),w=s(200711),Y=s(691220),I=s(815926),M=s(759396),O=s(405291),F=s(928610),A=s(371948),m=s(769756);const k=new A.yX({},{processResult:{count:"count",isRange:"isRange",teaserUrl:"teaserUrl",preBlur:"preBlur",recentlyActive:"recentlyActive"}}),H=new A.yX({results:m.oO},{processResult:{nextPageToken:"next_page_token",fastMatchIds:"results"}}),v=new A.yX({results:m.oO},{processResult:{fastMatchTeasersIds:"results",preBlur:"preBlur"}});var K=s(579342);function*P(){const e=(0,c.s8)()?.readLever(i.m),t=yield(0,a.Ys)(g.L6);yield(0,a.gz)((0,O._A)());try{const s=yield(0,a.RE)(yield(0,a.RE)(y.ds,f.NL,"getFastMatchTeaser"),t?{}:{type:F.LIKES_YOU_RECENTLY_ACTIVE_TEASER},e),r=yield(0,o.Ff)(s,k);yield(0,a.gz)((0,O.df)(r))}catch(e){(0,u.xL)(e),yield(0,a.gz)((0,O.PY)())}}const N=(0,S.bi)((function*(){const e=yield(0,a.Ys)(K.wA),t=yield(0,a.Ys)(K.wb),s=t>0||0===t&&e<5?e-t:0;yield(0,a.gz)((0,O.$e)(s))}),{name:"setNewLikesCountSaga"});function*z(){yield(0,a.gz)((0,O.ly)());try{const e=yield(0,a.RE)(yield(0,a.RE)(y.ds,f.NL,"getFastMatchCount")),t=yield(0,o.Ff)(e,k);yield(0,a.gz)((0,O.rh)(t))}catch(e){(0,u.xL)(e),yield(0,a.gz)((0,O.yM)())}}function*b(e){const t=n()(e,["payload","nextPage"],!1),s=(0,c.s8)()?.readLever(i.m),r=yield(0,a.Ys)(p.xv),l={};if(yield(0,a.Ys)(K.SL))return void(0,u.xL)("Already loading more fast match recs");let d;if(t){if(d=yield(0,a.Ys)(K.py),!d)return void(0,u.xL)("No next page token");l.page_token=d}if(r&&!d){const e=yield(0,a.Ys)(p.u7),t=yield(0,a.Ys)(p.xH),s=yield(0,a.Ys)(p.Dz),r=yield(0,a.Ys)(p.o2),n=yield(0,a.Ys)(p.P7),c=yield(0,a.Ys)(p.bX),i=yield(0,a.Ys)(p.Kz),d={max_distance_in_miles:e||void 0,age:n?{min:n,max:r}:void 0,min_photos:c||void 0,verified:s||void 0,has_bio:t||void 0,selected_interests:i?.length?i?.map((e=>(0,E.CE)(e,["name"]))):void 0};l.filter=d}const S=r?"getFilteredFastMatchRecs":"getFastMatchRecs";yield(0,a.gz)((0,O.h9)());try{const e=yield(0,a.RE)(yield(0,a.RE)(y.ds,f.NL,S),l,s),r=yield(0,o.Ff)(e,H,!1),n=yield(0,a.Ys)(K.CE),c=new Set(n||[]),i=r?.result?.fastMatchIds?.filter((e=>!c.has(e)));i&&(r.result.fastMatchIds=i),yield(0,a.gz)((0,O.lh)(r,!t))}catch(e){yield(0,a.gz)((0,O.$N)())}}function*x(){const e=(0,c.s8)()?.readLever(i.m);yield(0,a.gz)((0,O.Y)());try{const t=yield(0,a.RE)(yield(0,a.RE)(y.ds,f.NL,"getFastMatchTeasers"),e),s=yield(0,o.Ff)(t,v);yield(0,a.gz)((0,O.f_)(s))}catch(e){yield(0,a.gz)((0,O.JW)())}}const D=(0,S.bi)((function*(){const e=yield(0,a.Ys)(I.hs),t=yield(0,a.Ys)(U.XW),s=yield(0,a.Ys)(K.qf),r=(0,c.s8)().readLever(i.sJ),n=e>=Y.FIREBOARDING_SWIPE_COUNT,d="select"===(yield(0,a.Ys)(M.I3));if(!((0,l._k)("skipPostLogin")||d)&&n&&t&&0!==r&&s){const e=yield(0,a.Ys)(w.oR),t=yield(0,a.Ys)(g.L6),s=yield(0,a.Ys)(h.s0);!e&&s&&!t&&!0&&(yield(0,a.gz)((0,C.h)(T.Ub,{props:{newLikesCount:1,isFirstLike:!0}})),yield(0,a.gz)((0,L.y7)()),yield(0,a.gz)((0,R.g4)({upsellType:"newLikes",upsellTs:Date.now()})))}}),{name:"showFirstLikeModalSaga"}),W=(0,S.bi)((function*(){const e=yield(0,a.Ys)(K.O7);if(!(yield(0,a.Ys)(K.uE))&&e>0){const t=(0,c.s8)().readLever(i.sJ);let s=!0;if(0===t)s=!1;else if(1===t){const e=yield(0,a.Ys)(w.oR);s=0===e||(0,_.Z)(e,d.s2)}if(s){const t=Date.now();yield(0,a.gz)((0,O.hp)()),yield(0,a.gz)((0,C.h)(T.Ub,{props:{newLikesCount:e}})),yield(0,a.gz)((0,R.g4)({upsellType:"newLikes",upsellTs:t}))}}}),{name:"showNewLikesModalSaga"})},474409:(e,t,s)=>{s.r(t),s.d(t,{persistConfig:()=>y,reducer:()=>E});var a=s(343599),r=s(454936),n=s(610747),l=s(794128),c=s(453960),i=s(351843),d=s(557541),u=s(928610),o=s(747342);const S=(0,a.ZP)(((e,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_RECS_SUCCESS:{const s=t.payload?.result?.fastMatchIds||n.ow;return t.payload?.replaceResults?s:e.concat(s)}case u.FAST_MATCH_LIKE:case u.FAST_MATCH_DISLIKE:case u.FAST_MATCH_SUPERLIKE:return e.filter((e=>e!==t.payload?.recUser?._id));case(0,i.dh)(t.type):return o.default.fastMatches}}),o.default.fastMatches),_=(0,a.ZP)(((e,t)=>{switch(t.type){case u.FAST_MATCH_LIKE:case u.FAST_MATCH_DISLIKE:case u.FAST_MATCH_SUPERLIKE:{const s=t.payload?.recUser?._id;if(s){const t=(0,c.Rp)(s,e);if(t)return(0,c.mu)(t)}break}case(0,i.dh)(t.type):return o.default.fastMatchesSwiped}}),o.default.fastMatchesSwiped),E=(0,r.UY)({count:(e=o.default.count,t)=>{switch(t.type){case u.UPDATE_LIKES_YOU_COUNT:return e>0?e-1:e;case u.FETCH_LIKES_YOU_PREVIEW_SUCCESS:case u.FETCH_LIKES_YOU_COUNT_SUCCESS:return t.payload?.result?.count??e;case(0,i.dh)(t.type):return o.default.count;default:return e}},countLoading:(e=o.default.countLoading,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_COUNT_REQUEST:return!0;case u.FETCH_LIKES_YOU_COUNT_SUCCESS:case u.FETCH_LIKES_YOU_COUNT_ERROR:return!1;default:return e}},fastMatches:S,fastMatchesLoaded:(e=o.default.fastMatchesLoaded,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_RECS_SUCCESS:return!0;case(0,i.dh)(t.type):return o.default.fastMatchesLoaded;default:return e}},fastMatchesLoading:(e=o.default.fastMatchesLoading,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_RECS_REQUEST:return!0;case u.FETCH_LIKES_YOU_RECS_SUCCESS:case u.FETCH_LIKES_YOU_RECS_ERROR:return!1;case(0,i.dh)(t.type):return o.default.fastMatchesLoading;default:return e}},fastMatchesSwiped:_,fastMatchTeasers:(e=o.default.fastMatchTeasers,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_TEASERS_SUCCESS:return t.payload?.result?.fastMatchTeasersIds||n.ow;case(0,i.dh)(t.type):return o.default.fastMatchTeasers;default:return e}},fastMatchTeasersLoaded:(e=o.default.fastMatchTeasersLoaded,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_TEASERS_SUCCESS:return!0;case(0,i.dh)(t.type):return o.default.fastMatchTeasersLoaded;default:return e}},fastMatchTeasersLoading:(e=o.default.fastMatchTeasersLoading,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_TEASERS_REQUEST:return!0;case u.FETCH_LIKES_YOU_TEASERS_SUCCESS:case u.FETCH_LIKES_YOU_TEASERS_ERROR:return!1;case(0,i.dh)(t.type):return o.default.fastMatchTeasersLoading;default:return e}},goldHomeSeen:(e=o.default.goldHomeSeen,t)=>{switch(t.type){case u.SET_GOLD_HOME_SEEN:return!0;case(0,i.dh)(t.type):return o.default.goldHomeSeen;default:return e}},isRange:(e=o.default.isRange,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_PREVIEW_SUCCESS:case u.FETCH_LIKES_YOU_COUNT_SUCCESS:return t.payload?.result?.isRange??e;case(0,i.dh)(t.type):return o.default.isRange;default:return e}},lastFastMatch:(e=o.default.lastFastMatch,t)=>{switch(t.type){case u.FAST_MATCH_LIKE:case u.FAST_MATCH_SUPERLIKE:return t.payload?.recUser?._id;case(0,i.dh)(t.type):return o.default.lastFastMatch;default:return e}},lastTab:(e=o.default.lastTab,t)=>{switch(t.type){case u.SET_LAST_GOLD_HOME_TAB:return t.payload?.tabName||"";case(0,i.dh)(t.type):return o.default.lastTab;default:return e}},newLikesCount:(e=o.default.newLikesCount,t)=>{switch(t.type){case u.SET_NEW_LIKES_COUNT_SUCCESS:return t.payload?.newLikesCount??0;case(0,i.dh)(t.type):return o.default.newLikesCount;default:return e}},nextPageToken:(e=o.default.nextPageToken,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_RECS_SUCCESS:return t.payload?.result?.nextPageToken??null;case d.HI:case d.Gs:case u.FETCH_LIKES_YOU_RECS_ERROR:return null;default:return e}},prevSessionLikeCount:(e=o.default.prevSessionLikeCount,t)=>{switch(t.type){case u.SET_PREVIOUS_SESSION_LIKES_COUNT:return t.payload?.prevSessionLikeCount??0;case(0,i.dh)(t.type):return o.default.prevSessionLikeCount;default:return e}},recentlyActiveGoldTeaser:(e=o.default.recentlyActiveGoldTeaser,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_PREVIEW_SUCCESS:return{url:t.payload?.result?.recentlyActive?.imageUrl??e.url,name:t.payload?.result?.recentlyActive?.name??e.name};case(0,i.dh)(t.type):return o.default.recentlyActiveGoldTeaser;default:return e}},teaserUrl:(e=o.default.teaserUrl,t)=>{switch(t.type){case u.FETCH_LIKES_YOU_PREVIEW_SUCCESS:return t.payload?.result?.teaserUrl??e;case(0,i.dh)(t.type):return o.default.teaserUrl;default:return e}}}),y={transforms:[(0,l.n)(["fastMatchesSwiped","prevSessionLikeCount"])],version:1}}}]);