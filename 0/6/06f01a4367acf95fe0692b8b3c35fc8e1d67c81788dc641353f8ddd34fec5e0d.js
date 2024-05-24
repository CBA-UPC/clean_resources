/*! For license information please see async-notifications-feature-11b16cd18743497a30a4.js.LICENSE.txt */
"use strict";(globalThis.webpackChunktinderweb=globalThis.webpackChunktinderweb||[]).push([[36142],{341641:(e,i,t)=>{t.r(i),t.d(i,{_notificationsCheckSaga:()=>D,_notificationsSubscribeSaga:()=>k,_notificationsUnsubscribeSaga:()=>A,_updateNotificationsPreferencesSaga:()=>T,enableAllNotifications:()=>N,notificationsCheckSaga:()=>_,notificationsSubscribeSaga:()=>C,notificationsUnsubscribeSaga:()=>w,requestNotificationsPermissionSaga:()=>R,resetNotificationsSaga:()=>U,showNotificationSaga:()=>L,updateNotificationsPreferencesSaga:()=>O});var s=t(13241),o=t(832379),n=t(586691),a=t(892569),c=t(259668),r=t(235430),l=t(517727),d=t(60073),p=t(570430),u=t(690017),b=t(463608),f=t(20115),m=t(911654),S=t(791969),y=t(335852),g=t(731917);const h=(0,a.Z)(),E="web/",I={category:o.lc,action:o.VZ,label:"NotificationLogic"},N=()=>(0,d.$J)({match:!0,message:!0,messageLike:!0,superLike:!0});function*D(){(0,n.iD)("permission check");(yield(0,s.Ys)(p.KU))?(yield(0,s.RE)(R),(0,g.hX)()&&((0,n.iD)("subscribe to push notifications"),yield(0,s.RE)(C),yield(0,s.gz)((0,m.Lb)())),(0,n.iD)("checks complete!")):(0,n.iD)("no notifications enabled")}const _=(0,c.bi)(D,{name:"notificationsCheckSaga"});function*T(){yield(0,s.RE)(_);(yield(0,s.Ys)(p.KU))||((0,n.iD)("no notifications enabled, unsubscribing..."),yield(0,s.RE)(w),yield(0,s.gz)((0,m.Pt)()))}const O=(0,c.bi)(T,{name:"updateNotificationsPreferencesSaga"}),R=(0,c.bi)((function*(){if((0,g.hX)())(0,n.iD)("permission already granted");else{if((0,g.BO)()){(0,n.iD)("request notification permission");try{const e=yield(0,s.RE)(g.ZK);(0,n.iD)(`permission ${e}`),h.execute(o.zi,{...I,message:"NotificationPermission - Allowed"}),yield(0,s.gz)((0,b.L)(f.UG,{action:e===g.qZ?"enable":"disable",promptSource:"soft_prompt",promptType:"system"}))}catch(e){return(0,n.iD)("PERMISSION DENIED!!"),h.execute(o.zi,{...I,message:"NotificationPermission - Denied"}),void(yield(0,s.gz)((0,b.L)(f.UG,{action:"disable",promptSource:"soft_prompt",promptType:"system"})))}}(0,n.iD)("unsupported or permission denied")}}),{name:"requestNotificationsPermissionSaga"});function*k(){let e=yield(0,s.RE)(g.U2);if(void 0===e)return;e.endpoint||((0,n.iD)("subscribe to push"),e=yield(0,s.RE)(g.id));const i=(0,g.F8)(e.endpoint);if(!i)return;(0,n.iD)(`push ID: ${i}`);const{keys:t}=e.toJSON(),o=(0,u.er)(yield(0,s.Ys)(p.c3));(0,n.iD)("registering device for push...");const a=yield(0,s.RE)(r.ds,l.Mh,"registerDevice");yield(0,s.RE)(a,i,{device_param:E+i,push_settings:o,subscription_keys:t}),(0,n.iD)("subscribed to push!"),yield(0,s.gz)((0,m.Zs)(i))}const C=(0,c.bi)(k,{name:"notificationsSubscribeSaga"});function*A(){const e=yield(0,s.RE)(g.U2);if(e&&("function"==typeof e.unsubscribe&&((0,n.iD)("unsubscribe"),yield(0,s.nn)(e,e.unsubscribe,[])),e.endpoint)){(0,n.iD)("unsubscribing device from push...");const i=(0,g.F8)(e.endpoint);if(!i)return;(0,n.iD)(`push ID: ${i}`);const t=yield(0,s.RE)(r.ds,l.Mh,"unregisterDevice");yield(0,s.RE)(t,E+i),(0,n.iD)("unsubscribed from push!")}yield(0,s.gz)((0,m.LN)())}const w=(0,c.bi)(A,{name:"notificationsUnsubscribeSaga"}),U=(0,c.bi)((function*(){const e=yield(0,s.RE)(r.ds,l.i_,"resetNotifications");yield(0,s.RE)(e,!0)}),{name:"resetNotificationSaga"});function*L(e){(0,n.iD)("show notification");const{category:i,theme:t,context:o,icon:a,title:c,body:r,options:l,role:d}=e.payload,u=yield(0,s.Ys)(p.c3),b=yield(0,s.Ys)(S.YU);let f;(!i||b&&u[i])&&(b!==y.k.browser||(0,g.hX)())&&(f=i&&u[i]?b:y.k.inApp,yield(0,s.gz)((0,m.wN)({title:c,body:r,theme:t,target:f,icon:a,context:o,options:l,timestamp:Date.now(),role:d})))}},876707:(e,i,t)=>{t.r(i),t.d(i,{persistConfig:()=>l,reducer:()=>r});var s=t(343599),o=t(794128),n=t(351843),a=t(6250),c=t(451407);const r=(0,s.ZP)(((e,i)=>{switch(i.type){case a.TINDER_SUBSCRIBE_SUCCESS:e.pushId=i.payload.pushId;break;case a.TINDER_UNSUBSCRIBE_SUCCESS:e.pushId="";break;case a.UPDATE_NOTIFICATIONS_TYPE:e.notificationType=i.payload.type;break;case a.ADD_NOTIFICATION:e.items.push(i.payload);break;case a.REMOVE_NOTIFICATION:e.items=e.items.filter(();break;case a.REPLY_REMINDER_SHOWN:e.replyReminderShown=!0;break;case a.SHOW_ADD_TO_HOMESCREEN_IOS_TOOLTIP:e.showTooltip=!0;break;case a.HIDE_ADD_TO_HOMESCREEN_IOS_TOOLTIP:e.showTooltip=!1;break;case(0,n.dh)(i.type):return c.default}}),c.default),l={transforms:[(0,o.V)(["notificationType","items","replyReminderShown"])]}},791969:(e,i,t)=>{t.d(i,{V4:()=>n,YU:()=>a,rb:()=>r,w$:()=>c});var s=t(57250);const o=(0,t(799327).cF)("notifications"),n=(0,s.createSelector)(o,(e=>e.items)),a=((0,s.createSelector)(o,(e=>e.pushId)),(0,s.createSelector)(o,(e=>e.notificationType))),c=(0,s.createSelector)(o,(e=>e.showTooltip)),r=(0,s.createSelector)(o,(e=>e.replyReminderShown))},570430:(e,i,t)=>{t.d(i,{KU:()=>d,NS:()=>r,c3:()=>l,tU:()=>a,v0:()=>n});var s=t(57250);const o=(0,t(799327).cF)("settings"),n=(0,s.createSelector)(o,(e=>e.emailNotifications)),a=(0,s.createSelector)(((e,i)=>i),n,((e,i)=>i[e])),c=(0,s.createSelector)(o,(e=>e.messageControls)),r=(0,s.createSelector)((,c,(),l=(0,s.createSelector)(o,(),d=(0,s.createSelector)(l,(e=>Object.entries(e).some(()))},690017:(e,i,t)=>{t.d(i,{DQ:()=>d,Qz:()=>r,er:);var s=t(371948),o=t(944066),n=t(6250);const a=(0,s.lu)({messages:"messages",newMatches:"matches",promotions:"promotions"}),c=(0,s.lu)({match:"match",message:"message",messageLike:"messageLike",superLike:"superLike"});function r(e){return(0,o.iF)(a(e))}onst d=e=>({[n.NOTIFICATION_CATEGORY_MATCH]:e,[n.NOTIFICATION_CATEGORY_MESSAGE]:e,[n.NOTIFICATION_CATEGORY_LIKED_MESSAGE]:e,[n.NOTIFICATION_CATEGORY_SUPER_LIKED]:e})}}]);