(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6677,1156,5829],{45938:function(d,u){var e,f,t;f=[u,d],void 0===(t="function"===typeof(e=?e.apply(u,f):e)||(d.exports=t)},59288:78771:41266:97339:function(d,u,e){"use strict";e.r(u),e.d(u,{TwitterDMButton:function(){return v},TwitterFollowButton:function(){return a},TwitterHashtagButton:function(){return s},TwitterMentionButton:function(){return w},TwitterMomentShare:function(){return g},TwitterOnAirButton:function(){return y},TwitterShareButton:function(){return o},TwitterTimelineEmbed:function(){return n},TwitterTweetEmbed:function(){return m},TwitterVideoEmbed:function(){return h}});var f=e(27378),t="https://platform.twitter.com/widgets.js",c="createTimeline",n=function(d){var u=f.useRef(null),n=f.useState(!0),r=n[0],o=n[1];return f.useEffect((function(){var f=!0;return e(18801)(t,"twitter-embed",(function(){if(window.twttr){if(f){if(!window.twttr.widgets[c])return void console.error("Method createTimeline is not present anymore in twttr.widget api");var e=function(){var e,f,t=Object.assign({},d.options);return null!==d&&void 0!==d&&d.autoHeight&&(t.height=null===(e=u.current)||void 0===e||null===(f=e.parentNode)||void 0===f?void 0:f.offsetHeight),t=Object.assign({},t,{theme:null===d||void 0===d?void 0:d.theme,linkColor:null===d||void 0===d?void 0:d.linkColor,borderColor:null===d||void 0===d?void 0:d.borderColor,lang:null===d||void 0===d?void 0:d.lang,tweetLimit:null===d||void 0===d?void 0:d.tweetLimit,ariaPolite:null===d||void 0===d?void 0:d.ariaPolite})}();e=e),window.twttr.widgets[c]({sourceType:d.sourceType,screenName:d.screenName,userId:d.userId,ownerScreenName:d.ownerScreenName,slug:d.slug,id:d.id||d.widgetId,url:d.url},null===u||void 0===u?void 0:u.current,e).then((function(u){o(!1),d.onLoad&&d.onLoad(u)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){f=!1}}),[]),f.createElement(f.Fragment,null,r&&f.createElement(f.Fragment,null,d.placeholder),f.createElement("div",{ref:u}))},r="createShareButton",o=function(d){var u=f.useRef(null),c=f.useState(!0),n=c[0],o=c[1];return f.useEffect((function(){var f=!0;return e(18801)(t,"twitter-embed",(function(){if(window.twttr){if(f){if(!window.twttr.widgets[r])return void console.error("Method "+r+" is not present anymore in twttr.widget api");window.twttr.widgets[r](d.url,null===u||void 0===u?void 0:u.current,d.options).then((function(u){o(!1),d.onLoad&&d.onLoad(u)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){f=!1}}),[]),f.createElement(f.Fragment,null,n&&f.createElement(f.Fragment,null,d.placeholder),f.createElement("div",{ref:u}))},i="createFollowButton",a=function(d){var u=f.useRef(null),c=f.useState(!0),n=c[0],r=c[1];return f.useEffect((function(){var f=!0;return e(18801)(t,"twitter-embed",(function(){if(window.twttr){if(f){if(!window.twttr.widgets[i])return void console.error("Method "+i+" is not present anymore in twttr.widget api");window.twttr.widgets[i](d.screenName,null===u||void 0===u?void 0:u.current,d.options).then((function(u){r(!1),d.onLoad&&d.onLoad(u)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){f=!1}}),[]),f.createElement(f.Fragment,null,n&&f.createElement(f.Fragment,null,d.placeholder),f.createElement("div",{ref:u}))},l="createHashtagButton",s=function(d){var u=f.useRef(null),c=f.useState(!0),n=c[0],r=c[1];return f.useEffect((function(){var f=!0;return e(18801)(t,"twitter-embed",(function(){if(window.twttr){if(f){if(!window.twttr.widgets[l])return void console.error("Method "+l+" is not present anymore in twttr.widget api");window.twttr.widgets[l](d.tag,null===u||void 0===u?void 0:u.current,d.options).then((function(u){r(!1),d.onLoad&&d.onLoad(u)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){f=!1}}),[]),f.createElement(f.Fragment,null,n&&f.createElement(f.Fragment,null,d.placeholder),f.createElement("div",{ref:u}))},b="createMentionButton",w=function(d){var u=f.useRef(null),c=f.useState(!0),n=c[0],r=c[1];return f.useEffect((function(){var f=!0;return e(18801)(t,"twitter-embed",(function(){if(window.twttr){if(f){if(!window.twttr.widgets[b])return void console.error("Method "+b+" is not present anymore in twttr.widget api");window.twttr.widgets[b](d.screenName,null===u||void 0===u?void 0:u.current,d.options).then((function(u){r(!1),d.onLoad&&d.onLoad(u)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){f=!1}}),[]),f.createElement(f.Fragment,null,n&&f.createElement(f.Fragment,null,d.placeholder),f.createElement("div",{ref:u}))},m=function(d){var u=f.useRef(null),c=f.useState(!0),n=c[0],r=c[1];return f.useEffect((function(){var f=!0;return e(18801)(t,"twitter-embed",(function(){if(window.twttr){if(f){if(!window.twttr.widgets.createTweet)return void console.error("Method createTweet is not present anymore in twttr.widget api");window.twttr.widgets.createTweet(d.tweetId,null===u||void 0===u?void 0:u.current,d.options).then((function(u){r(!1),d.onLoad&&d.onLoad(u)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){f=!1}}),[]),f.createElement(f.Fragment,null,n&&f.createElement(f.Fragment,null,d.placeholder),f.createElement("div",{ref:u}))},g=p="createDMButton",v=function(d){var u=f.useRef(null),c=f.useState(!0),n=c[0],r=c[1];return f.useEffect((function(){var f=!0;return e(18801)(t,"twitter-embed",(function(){if(window.twttr){if(f){if(!window.twttr.widgets[p])return void console.error("Method createDMButton is not present anymore in twttr.widget api");window.twttr.widgets[p](d.id,null===u||void 0===u?void 0:u.current,d.options).then(()}}else console.error("Failure to load window.twttr, aborting load")})),function(){f=!1}}),[]),f.createElement(f.Fragment,null,n&&f.createElement(f.Fragment,null,d.placeholder),f.createElement("div",{ref:u}))},h=function(d){var u=f.useRef(null),c=f.useState(!0),n=c[0],r=c[1];return f.useEffect((function(){var f=!0;return e(18801)(t,"twitter-embed",(function(){if(window.twttr){if(f){if(!window.twttr.widgets.createVideo)return void console.error("Method createVideo is not present anymore in twttr.widget api");window.twttr.widgets.createVideo(d.id,null===u||void 0===u?void 0:u.current).then((function(u){r(!1),d.onLoad&&d.onLoad(u)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){f=!1}}),[]),f.createElement(f.Fragment,null,n&&f.createElement(f.Fragment,null,d.placeholder),f.createElement("div",{ref:u}))},E="createPeriscopeOnAirButton",y=,18801:5388:function(d){xports=,4188:function(d,u,e){"use strict";e.d(u,{Z:function(){return t}});var f=e(27378);function t(d,u,e){var t=this,c=(0,f.useRef)(null),n=(0,f.useRef)(0),r=(0,f.useRef)(null),o=(0,f.useRef)([]),i=(0,f.useRef)(),a=(0,f.useRef)(),l=(0,f.useRef)(d),s=(0,f.useRef)(!0);l.current=d;var b=!u&&0!==u&&"undefined"!==typeof window;if("function"!==typeof d)throw new TypeError("Expected a function");u=+u||0;var w=!!(e=e||{}).leading,m=!("trailing"in e)||!!e.trailing,g="maxWait"in e,p=g?Math.max(+e.maxWait||0,u):null;return(0,f.useEffect)((,[]),(0,f.useMemo)((,[w,g,u,p,m,b])}},28789:]);