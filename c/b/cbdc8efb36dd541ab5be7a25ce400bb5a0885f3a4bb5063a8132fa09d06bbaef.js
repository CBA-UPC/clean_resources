(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8537,1156],{30554:function(t,e,n){"use strict";var r=n(27378),o=n(1319),i=n(47086),u=n(24246);e.Z=function(t){var e=(0,r.useContext)(o.Z),n=(0,r.useState)(!1),l=n[0],a=n[1],d=e.consent.region!==o.y.UNKNOWN;return(0,r.useEffect)((function(){var t;return d?(0,i.Oe)()?a(!0):(t=document.addEventListener("tms.ready",t)):a(!0),),[d]),(0,u.jsx)(r.Fragment,{children:l?t.children:null})}},60092:function(t,e,n){"use strict";n.r(e),n.d(e,{APP_EMBED_TWITTER_STATUS_REGEX:function(){return c}});var r=n(27378),o=n(97339),i=n(44387),u=n(15140),l=n(1319),a=n(30554),d=n(24246),c=/https:\/\/(?:twitter|x)\.com\/.*?\/status\/([0-9]+).*/g;e.default=function(t){var e=t.tweetId,n=(0,r.useContext)(l.Z),c=n.theme,w=n.consent.region===l.y.CCPA;return(0,d.jsx)(a.Z,{children:(0,d.jsx)(o.TwitterTweetEmbed,{tweetId:e,options:{theme:c===u.Wi.DARK?"dark":"light"},placeholder:w?null:(0,d.jsx)("div",{className:"ds-flex ds-w-full ds-p-4 ds-items-center ds-justify-center",children:(0,d.jsx)(i.ZP,{})})},c===u.Wi.DARK?1:2)})}},97339:function(t,e,n){"use strict";n.r(e),n.d(e,{TwitterDMButton:function(){return p},TwitterFollowButton:function(){return c},TwitterHashtagButton:function(){return s},TwitterMentionButton:function(){return m},TwitterMomentShare:function(){return g},TwitterOnAirButton:function(){return b},TwitterShareButton:function(){return a},TwitterTimelineEmbed:function(){return u},TwitterTweetEmbed:function(){return v},TwitterVideoEmbed:);var r=n(27378),o="https://platform.twitter.com/widgets.js",i="createTimeline",u=function(t){var e=r.useRef(null),u=r.useState(!0),l=u[0],a=u[1];return r.useEffect((function(){var r=!0;return n(18801)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[i])return void console.error("Method createTimeline is not present anymore in twttr.widget api");var n=function(){var n,r,o=Object.assign({},t.options);return null!==t&&void 0!==t&&t.autoHeight&&(o.height=null===(n=e.current)||void 0===n||null===(r=n.parentNode)||void 0===r?void 0:r.offsetHeight),o=Object.assign({},o,{theme:null===t||void 0===t?void 0:t.theme,linkColor:null===t||void 0===t?void 0:t.linkColor,borderColor:null===t||void 0===t?void 0:t.borderColor,lang:null===t||void 0===t?void 0:t.lang,tweetLimit:null===t||void 0===t?void 0:t.tweetLimit,ariaPolite:null===t||void 0===t?void 0:t.ariaPolite})}();n=n),window.twttr.widgets[i]({sourceType:t.sourceType,screenName:t.screenName,userId:t.userId,ownerScreenName:t.ownerScreenName,slug:t.slug,id:t.id||t.widgetId,url:t.url},null===e||void 0===e?void 0:e.current,n).then((function(e){a(!1),t.onLoad&&t.onLoad(e)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,l&&r.createElement(r.Fragment,null,t.placeholder),r.createElement("div",{ref:e}))},l="createShareButton",a=function(t){var e=r.useRef(null),i=r.useState(!0),u=i[0],a=i[1];return r.useEffect((function(){var r=!0;return n(18801)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[l])return void console.error("Method "+l+" is not present anymore in twttr.widget api");window.twttr.widgets[l](t.url,null===e||void 0===e?void 0:e.current,t.options).then((function(e){a(!1),t.onLoad&&t.onLoad(e)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,t.placeholder),r.createElement("div",{ref:e}))},d="createFollowButton",c=function(t){var e=r.useRef(null),i=r.useState(!0),u=i[0],l=i[1];return r.useEffect((function(){var r=!0;return n(18801)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[d])return void console.error("Method "+d+" is not present anymore in twttr.widget api");window.twttr.widgets[d](t.screenName,null===e||void 0===e?void 0:e.current,t.options).then((function(e){l(!1),t.onLoad&&t.onLoad(e)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,t.placeholder),r.createElement("div",{ref:e}))},w="createHashtagButton",s=function(t){var e=r.useRef(null),i=r.useState(!0),u=i[0],l=i[1];return r.useEffect((function(){var r=!0;return n(18801)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[w])return void console.error("Method "+w+" is not present anymore in twttr.widget api");window.twttr.widgets[w](t.tag,null===e||void 0===e?void 0:e.current,t.options).then((function(e){l(!1),t.onLoad&&t.onLoad(e)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,t.placeholder),r.createElement("div",{ref:e}))},f="createMentionButton",m=function(t){var e=r.useRef(null),i=r.useState(!0),u=i[0],l=i[1];return r.useEffect((function(){var r=!0;return n(18801)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[f])return void console.error("Method "+f+" is not present anymore in twttr.widget api");window.twttr.widgets[f](t.screenName,null===e||void 0===e?void 0:e.current,t.options).then((function(e){l(!1),t.onLoad&&t.onLoad(e)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,t.placeholder),r.createElement("div",{ref:e}))},v=function(t){var e=r.useRef(null),i=r.useState(!0),u=i[0],l=i[1];return r.useEffect((function(){var r=!0;return n(18801)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets.createTweet)return void console.error("Method createTweet is not present anymore in twttr.widget api");window.twttr.widgets.createTweet(t.tweetId,null===e||void 0===e?void 0:e.current,t.options).then((function(e){l(!1),t.onLoad&&t.onLoad(e)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,t.placeholder),r.createElement("div",{ref:e}))},g=h="createDMButton",p=function(t){var e=r.useRef(null),i=r.useState(!0),u=i[0],l=i[1];return r.useEffect((function(){var r=!0;return n(18801)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[h])return void console.error("Method createDMButton is not present anymore in twttr.widget api");window.twttr.widgets[h](t.id,null===e||void 0===e?void 0:e.current,t.options).then(()}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,t.placeholder),r.createElement("div",{ref:e}))},E=function(t){var e=r.useRef(null),i=r.useState(!0),u=i[0],l=i[1];return r.useEffect((function(){var r=!0;return n(18801)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets.createVideo)return void console.error("Method createVideo is not present anymore in twttr.widget api");window.twttr.widgets.createVideo(t.id,null===e||void 0===e?void 0:e.current).then((function(e){l(!1),t.onLoad&&t.onLoad(e)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,t.placeholder),r.createElement("div",{ref:e}))},F="createPeriscopeOnAirButton",b=,18801:]);