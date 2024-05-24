(()=>{var e={292:function(e,t,i){"use strict";var o=this&&this.__awaiter||n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=i(73),r=n(i(204)),a=n(i(707));var c;!c||(c={}));t.default=class{constructor(e){this.mapOfCookies=e,this.privacySettings=new a.default(e),this.operations=[],this.consentModifiedHandler=this.migrateFromLocalStorage(),this.privacySettings.addConsentModifiedListener(this.consentModifiedHandler),this.privacySettings.didUserProvideConsent()&&(this.flushCookieQueue(),this.invalidateExistingCookie())}checkUserConsent(e){return o(this,void 0,void 0,(function*(){return this.privacySettings.didUserProvideConsent()?this.privacySettings.hasConsent(e):new Promise((t=>{this.privacySettings.addConsentModifiedListener((()=>t(this.privacySettings.hasConsent(e))),{once:!0})}))}))}checkGroupConsent(e){return o(this,void 0,void 0,(function*(){return this.privacySettings.didUserProvideConsent()?this.privacySettings.hasGroupConsent(e):new Promise((t=>{this.privacySettings.addConsentModifiedListener((,{once:!0})}))}))}et(e,t,i){const o={name:e,value:t,options:i};this.privacySettings.isCoreCookie(e)||this.privacySettings.hasConsent(e)?r.default.set(o):this.operations.push({intent:c.Set,cookie:o})}get(e){return r.default.get(e)}delete(e){this.privacySettings.isCoreCookie(e)||this.privacySettings.isLibReady()?r.default.delete(e):this.operations.push({intent:c.Delete,cookie:{name:e,value:""}})}emoveMarketingAdvertisementCookies(){var e;return o(this,void 0,void 0,(function*(){if(!this.privacySettings.didUserProvideConsent())return this.privacySettings.addConsentModifiedListener(this.removeMarketingAdvertisementCookies.bind(this),{once:!0});yield window.adobePrivacy.loadOneTrust();window.Optanon.GetDomainData().Groups.find(().Cookies.forEach((e=>{Object.keys(r.default.getAll()).forEach((t=>{t.startsWith(e.Name)&&r.default.delete(t,{domain:e.Host})}))}));const t=decodeURIComponent(null!==(e=r.default.get("OptanonConsent"))&&void 0!==e?e:"");if(-1!==(null==t?void 0:t.indexOf("C0004:1"))){const e=t.replace("C0004:1","C0004:0"),i=new Date((new Date).setFullYear((new Date).getFullYear()+1));r.default.set({name:"OptanonConsent",value:e,options:{expires:i}})}}))}invalidateExistingCookie(){Object.keys(this.mapOfCookies).forEach((e=>{const t=this.privacySettings.hasConsent(e),i=this.mapOfCookies[e]===s.CookieType.Core;t||i||r.default.delete(e)}))}migrateFromLocalStorage(){Object.keys(this.mapOfCookies).forEach((e=>{var t;let i;try{i=null===(t=null===window||void 0===window?void 0:window.localStorage)||void 0===t?void 0:t.getItem(e)}catch(e){}i&&r.default.set({name:e,value:i})}))}flushCookieQueue(){this.operations.length&&(this.operations.forEach((({intent:e,cookie:t})=>{switch(e){case c.Set:this.privacySettings.hasConsent(t.name)&&r.default.set(t);break;case c.Delete:r.default.delete(t.name)}})),this.operations=[])}}},204:function(e,t,i){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(i(602));t.default=class{static set({name:e,value:t,options:i}){return n.default.set(e,t,i)}tatic getAll(){return n.default.get()}static delete(e,t={}){n.default.remove(e,t)}}},707:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=i(73);t.default=class{ddConsentModifiedListener(e,t){window.addEventListener(o.Events.ConsentAll,e,t),window.addEventListener(o.Events.RejectAll,e,t),window.addEventListener(o.Events.ConsentCustom,e,t)}removeConsentModifiedListener(e,t){window.removeEventListener(o.Events.ConsentAll,e,t),window.removeEventListener(o.Events.RejectAll,e,t),window.removeEventListener(o.Events.ConsentCustom,e,t)}isCoreCookie(e){const t=this.mapOfCookies[e];return t&&t===o.CookieType.Core}idUserProvideConsent(){return window.adobePrivacy&&(window.adobePrivacy.hasUserProvidedConsent()||window.adobePrivacy.hasUserProvidedCustomConsent())}asGroupConsent(e){if(!window.adobePrivacy||!e)return!1;const t=window.adobePrivacy.activeCookieGroups();for(let i of t)if(i.toLowerCase()===e.toLowerCase())return!0;return!1}hasConsent},900:73:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Events=t.OptanonDataKey=t.CookieType=void 0,function(e){e.Core="C0001",e.Performance="C0002",e.Functionality="C0003",e.Advertising="C0004"}(t.CookieType||(t.CookieType={})),t.OptanonDataKey||(t.OptanonDataKey={})),t.Events||(t.Events={}))},602:,t={};()=>{"use strict";bject.create;Object.create;var t,o=i(900);!t||(t={}));const n={[t.CSRF_PROTECTION]:o.CookieType.Core,[t.IMS_ACCESS_TOKEN]:o.CookieType.Core,[t.IMS_LOGGED_OUT]:o.CookieType.Core,[t.BEIN]:o.CookieType.Core,[t.IMS_IMPERSONATOR_TOKEN]:o.CookieType.Core,[t.NINETY_NINE_U_PDF_CONTENT]:o.CookieType.Core,[t.LANGUAGE_SETTING]:o.CookieType.Core,[t.GKI]:o.CookieType.Core,[t.GK_SUID]:o.CookieType.Core,[t.LOGIN_ORIGINAL_REFERRER]:o.CookieType.Core,[t.ADOBE_CHECKOUT_RETURN_BACK]:o.CookieType.Core,[t.DIALOG_DISMISSED]:o.CookieType.Core,[t.BCP_SUSI_INIT_AT]:o.CookieType.Functionality,[t.DID_CLOSE_PROFILE_CHECKLIST]:o.CookieType.Functionality,[t.BCP_GENERATED]:o.CookieType.Functionality,[t.PUSH_TO_APP_PROMPT]:o.CookieType.Functionality,[t.DID_USER_OPEN_DOWNLOAD_APP_MODAL]:o.CookieType.Functionality,[t.SIGN_UP_PROMPT]:o.CookieType.Functionality,[t.JOBLIST_PROMPT]:o.CookieType.Functionality,[t.LOGGED_OUT_SEEN_APPRECIATION_NOTIF]:o.CookieType.Functionality,[t.EMOJIS_HISTORY]:o.CookieType.Functionality,[t.LIVE_SUBSCRIPTION_INTENT]:o.CookieType.Functionality,[t.LIVE_HERO_LIVESTREAM]:o.CookieType.Functionality,[t.LIVE_HERO_ADOBE_LIVE]:o.CookieType.Functionality,[t.LIVE_LANGUAGES]:o.CookieType.Functionality,[t.LIVE_BANNER_DISMISSED]:o.CookieType.Functionality,[t.LIVE_SUBSCRIBE_DISMISSED_POPUP]:o.CookieType.Functionality,[t.SUSI_USER_INTENT]:o.CookieType.Functionality,[t.SUSI_USER_CONTEXT]:o.CookieType.Functionality,[t.MESSAGES_NOTIF_COUNT]:o.CookieType.Functionality,[t.VOTE_BANNER]:o.CookieType.Functionality,[t.MAX_BANNER]:o.CookieType.Functionality,[t.SELECTED_GALLERIES]:o.CookieType.Functionality,[t.RECENT_ITEMS]:o.CookieType.Functionality};function s(e,...t){const i=[e[0]];return t.forEach(((t,o)=>i.push(t,e[o+1]||""))),i.join("")}function r({query:i,variables:s={},locale:r}){return e(this,void 0,void 0,(function*(){const e=new Headers({"Content-Type":"application/json"}),a=new URLSearchParams({client_id:"BehanceWebSusi1",locale:null!=r?r:""});try{if(document){const i=new o.ConsentCookies(n).get(t.IMS_ACCESS_TOKEN);e.append("Authorization",`Bearer ${i}`)}}catch(e){}const c=yield fetch(`/v3/graphql?${a}`,{method:"POST",headers:e,body:JSON.stringify({query:i,variables:s})}),{data:u,error:d}=yield c.json();if(d)throw new Error(d);return u}))}const a={getPushData:(e,t,i)=>r({query:s`
        query WebPushNotification($entityId: String!, $notificationType: NotificationType!) {
          webPushNotification(notificationType: $notificationType, entityId: $entityId) {
            title
            body
            thumbnailUrl
            entityUrl
            owner {
              images {
                size_100 {
                  url
                }
              }
            }
          }
        }
      `,variables:{entityId:e,notificationType:t},locale:i}),subscribeToDesktopNotifications:(e,t,i)=>r({query:s`
        mutation createWebPush($userId: Int, $notificationType: NotificationType!, $subscription: String!) {
          subscribeToWebPushNotifications(
            userId: $userId
            notificationType: $notificationType
            subscription: $subscription
          ) {
            subscriptions {
              name
              isEnabled
            }
            settings {
              isEnabled
              notifications {
                name
                isEnabled
              }
            }
          }
        }
      `,variables:{userId:e,notificationType:t,subscription:i}}),subscribeToAllDesktopNotifications:(e,t)=>r({query:s`
        mutation createWebPushAll($userId: Int, $subscription: String!) {
          LIVESTREAM: subscribeToWebPushNotifications(
            userId: $userId
            notificationType: LIVESTREAM
            subscription: $subscription
          ) {
            subscriptions {
              name
              isEnabled
            }
            settings {
              isEnabled
              notifications {
                name
                isEnabled
              }
            }
          }
          PROJECT: subscribeToWebPushNotifications(
            userId: $userId
            notificationType: PROJECT
            subscription: $subscription
          ) {
            subscriptions {
              name
              isEnabled
            }
            settings {
              isEnabled
              notifications {
                name
                isEnabled
              }
            }
          }
        }
      `,variables:{userId:e,subscription:t}}),unsubscribeFromWebPushNotifications:(e,t)=>r({query:s`
        mutation unsubscribeFromWebPushNotifications($userId: Int, $notificationType: NotificationType!) {
          unsubscribeFromWebPushNotifications(userId: $userId, notificationType: $notificationType) {
            subscriptions {
              name
              isEnabled
            }
            settings {
              isEnabled
              notifications {
                name
                isEnabled
              }
            }
          }
        }
      `,variables:{userId:e,notificationType:t}})},c=(e="",t="",i={})=>fetch("/v2/an/custom?client_id=BehanceWebSusi1",{method:"POST",body:JSON.stringify({event_width:0,event_height:0,event_uri:"/sw.js",event_ext_json:JSON.stringify(i),event_pagename:"/sw.js",event_message:t,event_feature_name:e})}),u=self;const d=function(t){return e(this,void 0,void 0,(function*(){const e=t.notification,{entityUrl:i}=e.data;e.close(),t.waitUntil(u.clients.openWindow(i))}))},l=function(t){var i;return e(this,void 0,void 0,(function*(){if(!Notification||"granted"!==Notification.permission)return;const{entity_id:e,notification_type:o,locale:n}=null===(i=t.data)||void 0===i?void 0:i.json(),s=a.getPushData(e.toString(),o,n).then((e=>{var t,i;if(c("web_push_notifications","User shown a push notification."),!e)return;const{body:o,entityUrl:n,owner:s,thumbnailUrl:r,title:a}=e.webPushNotification,d={body:o,icon:(null===(i=null===(t=null==s?void 0:s.images)||void 0===t?void 0:t.size_100)||void 0===i?void 0:i.url)||void 0,image:r,data:{entityUrl:n}};u.registration.showNotification(a,d)}));t.waitUntil(s)}))};self.addEventListener("push",l),self.addEventListener("notificationclick",d)})()})();
//# sourceMappingURL=service-worker.ed8e28402baa414fee08.js.map