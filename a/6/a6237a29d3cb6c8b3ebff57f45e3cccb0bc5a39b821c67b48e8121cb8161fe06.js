/*! For license information please see async-myLikes-feature-469cc36cae0f36f8fa37.js.LICENSE.txt */
"use strict";(globalThis.webpackChunktinderweb=globalThis.webpackChunktinderweb||[]).push([[39172],{566039:(e,S,E)=>{E.d(S,{H9:()=>r,OM:()=>C,fd:()=>a,s8:()=>l,ud:()=>d});var t=E(490982),_=E.n(t),n=E(799327),s=E(355899);const a=(0,n.PH)(s.FETCH_LIKES_SENT_RECS,(e=>({nextPage:e}))),r=(0,n.PH)(s.FETCH_LIKES_SENT_RECS_REQUEST),l=(0,n.PH)(s.FETCH_LIKES_SENT_RECS_SUCCESS,((e,S=!0)=>({replaceResults:S,...e}))),d=(0,n.PH)(s.FETCH_LIKES_SENT_RECS_ERROR),C=(_()(a,5e3),(0,n.PH)(s.LIKES_SENT_DISLIKE,(e=>e)))},355899:(e,S,E)=>{E.r(S),E.d(S,{FETCH_LIKES_SENT_RECS:()=>t,FETCH_LIKES_SENT_RECS_ERROR:()=>s,FETCH_LIKES_SENT_RECS_REQUEST:()=>_,FETCH_LIKES_SENT_RECS_SUCCESS:()=>n,LIKES_SENT_DISLIKE:()=>a});const t="FETCH_LIKES_SENT_RECS",_="FETCH_LIKES_SENT_RECS_REQUEST",n="FETCH_LIKES_SENT_RECS_SUCCESS",s="FETCH_LIKES_SENT_RECS_ERROR",a="LIKES_SENT_DISLIKE"},775707:(e,S,E)=>{E.r(S),E.d(S,{fetchLikesSentRecsSaga:()=>R});var t=E(13241),_=E(13124),n=E(50377),s=E(586691),a=E(799327),r=E(259668),l=E(235430),d=E(517727),C=E(566039),T=E(371948),c=E(769756);const i=new T.yX({results:c.oO},{processResult:{nextPageToken:"page_token",likesSentIds:"results"}});var o=E(479272);const R=(0,r.bi)((function*(e){const{nextPage:S}=e.payload,E=yield(0,t.Ys)(o.yC),r=(0,_.s8)()?.readLever(n.m),T={};if(E)return void(0,s.xL)("Already loading more likes sent recs");if(S){const e=yield(0,t.Ys)(o.Ln);if(!e)return void(0,s.xL)("No next page token");T.page_token=e}yield(0,t.gz)((0,C.H9)());const c=yield(0,t.RE)(yield(0,t.RE)(l.ds,d.NL,"getLikesSentRecs"),T,r),R=yield(0,a.Ff)(c,i,!1);yield(0,t.gz)((0,C.s8)(R,!S))}),{name:"fetchLikesSentRecsSaga",*errorHandler(e){yield(0,t.gz)((0,C.ud)())}})},379199:(e,S,E)=>{E.r(S),E.d(S,{reducer:()=>l});var t=E(343599),_=E(454936),n=E(351843),s=E(355899),a=E(790406);const r=(0,t.ZP)(((e,S)=>{switch(S.type){case s.FETCH_LIKES_SENT_RECS_SUCCESS:{const E=S.payload?.result?.likesSentIds;if(!E?.length)return;return S.payload?.replaceResults?E:e.concat(E)}case(0,n.dh)(S.type):return a.default.likesSent}}),a.default.likesSent),l=(0,_.UY)({likesSent:r,likesSentLoaded:(e=a.default.likesSentLoaded,S)=>{switch(S.type){case s.FETCH_LIKES_SENT_RECS_SUCCESS:return!0;case(0,n.dh)(S.type):return a.default.likesSentLoaded;default:return e}},likesSentLoading:(e=a.default.likesSentLoading,S)=>{switch(S.type){case s.FETCH_LIKES_SENT_RECS_REQUEST:return!0;case s.FETCH_LIKES_SENT_RECS_SUCCESS:case s.FETCH_LIKES_SENT_RECS_ERROR:return!1;case(0,n.dh)(S.type):return a.default.likesSentLoading;default:return e}},nextPageToken:(e=a.default.nextPageToken,S)=>{switch(S.type){case s.FETCH_LIKES_SENT_RECS_SUCCESS:return S.payload?.result?.nextPageToken??null;case s.FETCH_LIKES_SENT_RECS_ERROR:return null;default:return e}}})},479272:(e,S,E)=>{E.d(S,{Ln:()=>T,hA:()=>d,xu:()=>l,yC:()=>C});var t=E(57250),_=E(799327),n=E(769756),s=E(787165);const a=(0,_.cF)("myLikes"),r=(0,t.createSelector)(a,(e=>e.likesSent)),l=(0,_.DM)(r,s.J$,n.oO,_.sJ),d=(0,t.createSelector)(a,(e=>e.likesSentLoaded)),C=(0,t.createSelector)(a,(e=>e.likesSentLoading)),T=(0,t.createSelector)(a,(e=>e.nextPageToken))}}]);