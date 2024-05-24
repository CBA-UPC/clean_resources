(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{118:function(e,t,n){"use strict";t.__esModule=!0;var i,o=n(204),r=(i=o)&&i.__esModule?i:{default:i};t.default=r.default},120:function(e,t,n){"use strict";
/** @license React v0.15.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var i=void 0,o=void 0,r=void 0,a=void 0,s=void 0;if(t.unstable_now=void 0,t.unstable_forceFrameRate=void 0,"undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,c=null,u=function(){if(null!==l)try{var e=t.unstable_now();l(!0,e),l=null}catch(e){throw setTimeout(u,0),e}};t.unstable_now=function(){return Date.now()},i=function(e){null!==l?setTimeout(i,0,e):(l=e,setTimeout(u,0))},o=function(e,t){c=setTimeout(e,t)},r=function(){clearTimeout(c)},a=function(){return!1},s=t.unstable_forceFrameRate=function(){}}else{var d=window.performance,p=window.Date,f=window.setTimeout,h=window.clearTimeout,m=window.requestAnimationFrame,g=window.cancelAnimationFrame;"undefined"!=typeof console&&("function"!=typeof m&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")),t.unstable_now="object"==typeof d&&"function"==typeof d.now?function(){return d.now()}:function(){return p.now()};var v=!1,w=null,b=-1,y=-1,x=33.33,k=-1,S=-1,E=0,_=!1;a=function(){return t.unstable_now()>=E},s=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):0<e?(x=Math.floor(1e3/e),_=!0):(x=33.33,_=!1)};var C=function(){if(null!==w){var e=t.unstable_now(),n=0<E-e;try{w(n,e)||(w=null)}catch(e){throw I.postMessage(null),e}}},O=new MessageChannel,I=O.port2;O.port1.onmessage=C;var T=function(e){if(null===w)S=k=-1,v=!1;else{v=!0,m(function(e){h(b),T(e)});var n=function(){E=t.unstable_now()+x/2,C(),b=f(n,3*x)};if(b=f(n,3*x),-1!==k&&.1<e-k){var i=e-k;!_&&-1!==S&&i<x&&S<x&&(8.33>(x=i<S?S:i)&&(x=8.33)),S=i}k=e,E=e+x,I.postMessage(null)}};i=function(e){w=e,v||(v=!0,m(function(e){T(e)}))},o=function(e,n){y=f(function(){e(t.unstable_now())},n)},r=function(){h(y),y=-1}}var M=null,z=null,P=null,L=3,j=!1,R=!1,U=!1;function A(e,t){var n=e.next;if(n===e)M=null;else{e===M&&(M=n);var i=e.previous;i.next=n,n.previous=i}e.next=e.previous=null,n=e.callback,i=L;var o=P;L=e.priorityLevel,P=e;try{var r=e.expirationTime<=t;switch(L){case 1:var a=n(r);break;case 2:case 3:case 4:a=n(r);break;case 5:a=n(r)}}catch(e){throw e}finally{L=i,P=o}if("function"==typeof a)if(t=e.expirationTime,e.callback=a,null===M)M=e.next=e.previous=e;else{a=null,r=M;do{if(t<=r.expirationTime){a=r;break}r=r.next}while(r!==M);null===a?a=M:a===M&&(M=e),(t=a.previous).next=a.previous=e,e.next=a,e.previous=t}}function H(e){if(null!==z&&z.startTime<=e)do{var t=z,n=t.next;if(t===n)z=null;else{z=n;var i=t.previous;i.next=n,n.previous=i}t.next=t.previous=null,B(t,t.expirationTime)}while(null!==z&&z.startTime<=e)}function D(e){U=!1,H(e),R||(null!==M?(R=!0,i(W)):null!==z&&o(D,z.startTime-e))}function W(e,n){R=!1,U&&(U=!1,r()),H(n),j=!0;try{if(e){if(null!==M)do{A(M,n),H(n=t.unstable_now())}while(null!==M&&!a())}else for(;null!==M&&M.expirationTime<=n;)A(M,n),H(n=t.unstable_now());return null!==M||(null!==z&&o(D,z.startTime-n),!1)}finally{j=!1}}function N(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}function B(e,t){if(null===M)M=e.next=e.previous=e;else{var n=null,i=M;do{if(t<i.expirationTime){n=i;break}i=i.next}while(i!==M);null===n?n=M:n===M&&(M=e),(t=n.previous).next=n.previous=e,e.next=n,e.previous=t}}var F=s;t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=L;L=e;try{return t()}finally{L=n}},t.unstable_next=function(e){switch(L){case 1:case 2:case 3:var t=3;break;default:t=L}var n=L;L=t;try{return e()}finally{L=n}},t.unstable_scheduleCallback=function(e,n,a){var s=t.unstable_now();if("object"==typeof a&&null!==a){var l=a.delay;l="number"==typeof l&&0<l?s+l:s,a="number"==typeof a.timeout?a.timeout:N(e)}else a=N(e),l=s;if(e={callback:n,priorityLevel:e,startTime:l,expirationTime:a=l+a,next:null,previous:null},l>s){if(a=l,null===z)z=e.next=e.previous=e;else{n=null;var c=z;do{if(a<c.startTime){n=c;break}c=c.next}while(c!==z);null===n?n=z:n===z&&(z=e),(a=n.previous).next=n.previous=e,e.next=n,e.previous=a}null===M&&z===e&&(U?r():U=!0,o(D,l-s))}else B(e,a),R||j||(R=!0,i(W));return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(e===t)e===M?M=null:e===z&&(z=null);else{e===M?M=t:e===z&&(z=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var t=L;return function(){var n=L;L=t;try{return e.apply(this,arguments)}finally{L=n}}},t.unstable_getCurrentPriorityLevel=function(){return L},t.unstable_shouldYield=function(){var e=t.unstable_now();return H(e),null!==P&&null!==M&&M.startTime<=e&&M.expirationTime<P.expirationTime||a()},t.unstable_requestPaint=F,t.unstable_continueExecution=function(){R||j||(R=!0,i(W))},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return M}},125:function(e,t){e.exports={isFunction:function(e){return"function"==typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,i=e.length;n<i&&!1!==t(e[n],n);n++);}}},1335:function(e,t,n){__NEXT_REGISTER_PAGE("/benefits",function(){return e.exports=n(1573),{page:e.exports.default}})},141:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var i=n(1),o=i.b.ul.withConfig({componentId:"sc-10apq64-0"})(["margin:10px 0 0;padding:0;text-align:center;line-height:8px;list-style:none;& > li{display:inline-block;margin:0 6px;}"]),r=i.b.div.withConfig({componentId:"sc-10apq64-1"})(["width:6px;height:6px;border-width:2px;border-style:solid;border-color:transparent;border-radius:50%;background-color:#202224;opacity:0.2;cursor:pointer;.slick-active &{border-color:#00c1f2;background-color:transparent;opacity:1;cursor:initial;}@media only screen and (min-width:601px){width:10px;height:10px;}"])},1573:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(69),a=n(1),s=n(27),l=n(118),c=n.n(l),u=n(4),d=a.b.div.withConfig({componentId:"w5auun-0"})(["display:flex;background-color:#eef9fe;border-radius:2px;padding:12px;"]),p=Object(a.b)(d).withConfig({componentId:"w5auun-1"})(["@media only screen and (min-width:601px){cursor:pointer;padding:10px 15px;background-color:transparent;","}"],function(e){return e.expanded&&Object(a.a)(["padding-top:15px;padding-bottom:15px;border-radius:7px;background-color:",";"],u.a.SECONDARY)}),f=a.b.div.withConfig({componentId:"sc-1bjeetf-0"})(["flex-basis:34px;flex-shrink:0;@media only screen and (min-width:601px){flex-basis:44px;}"]),h=Object(a.b)("img").withConfig({componentId:"sc-1bjeetf-1"})(["display:block;width:100%;margin:0 auto;@media only screen and (min-width:601px){max-width:32px;","}"],function(e){return e.darkActive&&Object(a.a)(["display:none;"])}),m=Object(a.b)("img").withConfig({componentId:"sc-1bjeetf-2"})(["display:none !important;width:100%;margin:0 auto;@media only screen and (min-width:601px){max-width:44px;","}"],function(e){return e.darkActive&&Object(a.a)(["display:block !important;"])}),g=function(e){return o.a.createElement(f,null,o.a.createElement(h,{alt:e.alt,src:e.lightBgIconUrl,darkActive:e.darkActive}),o.a.createElement(m,{alt:e.alt,src:e.darkBgIconUrl,darkActive:e.darkActive}))},v=a.b.div.withConfig({componentId:"ukiu3l-0"})(["margin-left:10px;@media only screen and (min-width:601px){margin-left:20px;}"]),w=Object(a.b)("div").withConfig({componentId:"ukiu3l-1"})(["font-size:12px;font-weight:700;color:#27306a;@media only screen and (min-width:601px){font-size:16px;font-weight:400;line-height:32px;color:#4a4a4a;","}"],function(e){return e.expanded&&Object(a.a)(["font-weight:600;color:#fff;"])}),b=Object(a.b)("div").withConfig({componentId:"ukiu3l-2"})(["margin-top:10px;font-size:12px;font-weight:300;color:#27306a;line-height:17px;max-height:51px;height:51px;overflow:hidden;@media only screen and (min-width:601px){font-size:13px;font-weight:400;color:#fff;line-height:18px;max-height:0;overflow:hidden;margin-top:0;","}"],function(e){return e.expanded&&Object(a.a)(["height:36px;max-height:36px;margin-top:6px;"])}),y=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{alt:"".concat(e.title," icon"),lightBgIconUrl:e.iconUrl,darkBgIconUrl:e.darkBackgroundIconUrl,darkActive:e.expanded}),o.a.createElement(v,null,o.a.createElement(w,{expanded:e.expanded},e.title),o.a.createElement(b,{expanded:e.expanded},e.description)))},x=function(e){return o.a.createElement(p,{onMouseEnter:e.onHover,expanded:e.expanded},o.a.createElement(y,e))},k=function(e){return o.a.createElement(d,null,o.a.createElement(y,e))},S=n(141);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var _=a.b.div.withConfig({componentId:"sc-14kvufl-0"})([""]),C=a.b.div.withConfig({componentId:"sc-14kvufl-1"})(["margin-bottom:10px;background-image:url('https://static.paytmmoney.com/images/benefits/bottom-shadow.png');background-position:bottom left;background-size:contain;background-repeat:no-repeat;"]),O=a.b.div.withConfig({componentId:"sc-14kvufl-2"})(["width:calc(100% - 20px);margin:0 auto;max-width:200px;"]),I=a.b.img.withConfig({componentId:"sc-14kvufl-3"})(["max-width:100%;"]),T=function(e){return o.a.createElement(_,null,o.a.createElement(C,null,o.a.createElement(O,null,o.a.createElement(I,{alt:"".concat(e.title," image"),src:e.appPreviewImageUrl}))),o.a.createElement(k,e))},M=function(e){var t={dots:!0,arrows:!1,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,appendDots:function(e){return o.a.createElement(S.b,null,e)},customPaging:function(){return o.a.createElement(S.a,null)}};return o.a.createElement(c.a,t,e.featureList.map(function(e,t){return o.a.createElement(T,E({key:t},e))}))},z=a.b.div.withConfig({componentId:"p369k5-0"})(["display:block;@media only screen and (min-width:601px){display:none;}"]),P=a.b.div.withConfig({componentId:"p369k5-1"})(["background-color:",";padding:20px 0;margin-bottom:20px;"],function(e){return e.grayBg?"#f9f9f9":"transparent"}),L=a.b.h3.withConfig({componentId:"p369k5-2"})(["padding-bottom:20px;text-align:center;font-size:16px;font-weight:600;color:",";margin:0;"],u.a.SECONDARY),j=function(e){return o.a.createElement(z,null,o.a.createElement(P,{grayBg:e.imageOnRight},o.a.createElement(s.a,null,o.a.createElement(L,null,e.title),o.a.createElement(M,{featureList:e.featureList}))))};function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var U=a.b.div.withConfig({componentId:"sc-13fazyn-0"})(["max-width:588px;margin:25px auto 0;"]),A=function(e){return o.a.createElement(U,null,e.items.map(function(t,n){return o.a.createElement(x,R({key:n},t,{expanded:n===e.highlightedIndex,onHover:e.onHighlightedItemChange.bind(null,n)}))}))};function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F=a.b.div.withConfig({componentId:"sc-1n6bwv3-0"})(["display:none;@media only screen and (min-width:601px){display:block;}"]),q=a.b.div.withConfig({componentId:"sc-1n6bwv3-1"})(["background-image:",";background-repeat:no-repeat;background-position-y:bottom;background-position-x:",";padding-top:80px;background-size:",";padding-bottom:35px;"],function(e){return"url('".concat(e.bgImgUrl,"')")},function(e){return e.imgRight?"right":"left"},function(e){return e.increaseBackgroundSize?"39%":"28%"}),Y=a.b.div.withConfig({componentId:"sc-1n6bwv3-2"})(["display:flex;justify-content:space-between;align-items:center;"]),X=a.b.div.withConfig({componentId:"sc-1n6bwv3-3"})(["flex:0 0 35%;max-width:330px;order:",";"],function(e){return e.imgRight?1:0}),G=a.b.img.withConfig({componentId:"sc-1n6bwv3-4"})(["max-width:100%;height:auto;"]),V=a.b.div.withConfig({componentId:"sc-1n6bwv3-5"})(["flex-basis:60%;"]),K=a.b.h3.withConfig({componentId:"sc-1n6bwv3-6"})(["text-align:left;font-size:28px;font-weight:600;width:100%;color:",";max-width:588px;margin:auto;"],u.a.SECONDARY),$=function(e){function t(e){var n,i,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(n=!(o=W(t).call(this,e))||"object"!==H(o)&&"function"!=typeof o?B(i):o).state={selectedIndex:0},n.handleSelectionChange=n.handleSelectionChange.bind(B(B(n))),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,i["Component"]),n=t,(r=[{key:"handleSelectionChange",value:function(e){this.setState({selectedIndex:e})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.featureList,i=e.imageOnRight,r=e.backgroundImageUrl,a=e.increaseBackgroundSize,l=this.state.selectedIndex,c=n[l].appPreviewImageUrl;return o.a.createElement(F,null,o.a.createElement(q,{bgImgUrl:r,imgRight:i,increaseBackgroundSize:a},o.a.createElement(s.a,null,o.a.createElement(Y,null,o.a.createElement(X,{imgRight:i},o.a.createElement(G,{alt:"".concat(t," image"),src:c})),o.a.createElement(V,null,o.a.createElement(K,null,t),o.a.createElement(A,{items:n,highlightedIndex:l,onHighlightedItemChange:this.handleSelectionChange}))))))}}])&&D(n.prototype,r),a&&D(n,a),t}();function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var Z=function(e){var t=e.title,n=e.featureList,i=e.backgroundImageUrl,r={title:t,featureList:n,imageOnRight:e.imageOnRight,increaseBackgroundSize:e.increaseBackgroundSize};return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,r),o.a.createElement($,J({},r,{backgroundImageUrl:i})))},Q="https://static.paytmmoney.com/images/benefits",ee={group1:{title:"Simple Discovery of Mutual Funds",backgroundImageUrl:"".concat(Q,"/wave-bg-1.png"),featureList:[{title:"Top Rated Schemes",description:"Find mutual fund schemes rated by leading research agencies like Morningstar, CRISIL and Value Research",iconUrl:"".concat(Q,"/top-rated_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/top-rated_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/top-rated_image.png")},{title:"Funds with Highest Returns",description:"View funds by highest returns in their respective categories",iconUrl:"".concat(Q,"/highest-returns_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/highest-returns_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/highest-returns_image.png")},{title:"India's Trusted Fund Managers",description:"Know your fund managers and also track performance of schemes managed by them",iconUrl:"".concat(Q,"/fund-managers_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/fund-managers_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/fund-managers_image.png")},{title:"Minimum Investment Amount",description:"Find mutual fund schemes that start with as little as ₹100",iconUrl:"".concat(Q,"/min-invest-amt_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/min-invest-amt_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/min-invest-amt_image.png")},{title:"Smart & Powerful Search",description:"Filter schemes by name, category, fund manager & rating",iconUrl:"".concat(Q,"/smart-search_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/smart-search_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/smart-search_image.png")},{title:"Leading Mutual Fund Companies",description:"Choose schemes from 38 leading mutual fund houses covering 96% of industry AUM",iconUrl:"".concat(Q,"/leading-amcs_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/leading-amcs_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/leading-amcs_image.png")},{title:"Instant Redemption Funds",description:"Invest in liquid funds for better returns & withdraw 90% of investment (max ₹50,000) daily",iconUrl:"".concat(Q,"/ir-funds_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/ir-funds_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/ir-funds_image.png")},{title:"Investment Ideas",description:"T​op funds across popular categories,​ grouped by fund return​s​ and investment period,​ for your ease of selection",iconUrl:"".concat(Q,"/invest-ideas_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/invest-ideas_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/invest-ideas_image.png")}]},group2:{title:"Detailed Tracking of all your Investments",backgroundImageUrl:"".concat(Q,"/wave-bg-2.png"),featureList:[{title:"View Updated Portfolio",description:"See the latest updates in your portfolio everyday",iconUrl:"".concat(Q,"/updated-portfolio_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/updated-portfolio_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/updated-portfolio_image.png")},{title:"Simplified Investment Insights",description:"Receive the most comprehensive portfolio insights by AMCs, sectors, company holdings and asset type",iconUrl:"".concat(Q,"/invest-insights_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/invest-insights_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/invest-insights_image.png")},{title:"Request Statements Anytime",description:"Get statements, such as Portfolio Holdings, Transaction Summary, Realised Gains & Tax Saving Statement",iconUrl:"".concat(Q,"/statements_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/statements_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/statements_image.png")},{title:"Easy SIP Management",description:"Get timely reminders about SIP investments. Never miss an investment.",iconUrl:"".concat(Q,"/sip-manage_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/sip-manage_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/sip-manage_image.png")},{title:"Step by Step Tracking of Transactions",description:"View detailed tracking & status of every investment and withdrawal",iconUrl:"".concat(Q,"/investment-tracking_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/investment-tracking_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/investment-tracking_image.png")},{title:"Goal-Based Tracking",description:"Set financial goals, invest towards them & track progress every day",iconUrl:"".concat(Q,"/goal-tracking_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/goal-tracking_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/goal-tracking_image.png")}]},group3:{title:"Detailed Mutual Fund Information",backgroundImageUrl:"".concat(Q,"/wave-bg-3.png"),featureList:[{title:"Latest NAV of all Schemes",description:"View updated NAV daily of all schemes",iconUrl:"".concat(Q,"/latest-nav_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/latest-nav_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/latest-nav_image.png")},{title:"Historical Scheme Performance",description:"Refer historical data of all schemes",iconUrl:"".concat(Q,"/historical-data_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/historical-data_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/historical-data_image.png")},{title:"Category Performance",description:"Compare a fund’s performance with other funds in the same category",iconUrl:"".concat(Q,"/category-perf_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/category-perf_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/category-perf_image.png")},{title:"Riskometer for all Schemes",description:"Know the nature of risk of schemes before you take your investment decision",iconUrl:"".concat(Q,"/fund-riskometer_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/fund-riskometer_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/fund-riskometer_image.png")},{title:"Mutual Fund Holdings",description:"Know the sectors & companies where the scheme’s fund manager invests money in",iconUrl:"".concat(Q,"/mf-holdings_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/mf-holdings_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/mf-holdings_image.png")},{title:"Suggested days for SIP",description:"Make the best outcome for your investments with our suggested SIP dates for optimized returns",iconUrl:"".concat(Q,"/sip-days_icon.svg"),darkBackgroundIconUrl:"".concat(Q,"/sip-days_icon-white-large.svg"),appPreviewImageUrl:"".concat(Q,"/sip-days_image.png")}]}},te=a.b.div.withConfig({componentId:"pm0ne9-0"})(["background-color:#fff;"]),ne=function(){return o.a.createElement(te,null,o.a.createElement(Z,{title:ee.group1.title,featureList:ee.group1.featureList,backgroundImageUrl:ee.group1.backgroundImageUrl}),o.a.createElement(Z,{title:ee.group2.title,featureList:ee.group2.featureList,backgroundImageUrl:ee.group2.backgroundImageUrl,imageOnRight:!0}),o.a.createElement(Z,{title:ee.group3.title,featureList:ee.group3.featureList,backgroundImageUrl:ee.group3.backgroundImageUrl,increaseBackgroundSize:!0}))},ie=n(582),oe=n(411),re=a.b.div.withConfig({componentId:"ea9eqz-0"})(["background-color:#fafafa;padding:40px 0;@media only screen and (min-width:601px){padding:80px 0 25px;}"]),ae=a.b.h3.withConfig({componentId:"ea9eqz-1"})(["text-align:center;font-size:16px;font-weight:600;color:",";margin:0 0 30px 0;@media only screen and (min-width:601px){margin-bottom:70px;font-size:30px;color:#27306a;}"],u.a.SECONDARY),se=function(e){return o.a.createElement(re,null,o.a.createElement(s.a,null,o.a.createElement(ae,null,"That's not all, there are many more incredible benefits"),o.a.createElement(oe.c,{showModal:e.showModal})))},le=[{iconPath:"https://static.paytmmoney.com/images/benefits/2-fa-auth.svg",title:"Paytm Login with 2-Factor Authentication",description:"Login to your Paytm Money investment account is secured with 2-factor authentication with Paytm credentials"},{iconPath:"https://static.paytmmoney.com/images/benefits/fund-house-reaction.svg",title:"Fully Transparent Tracking",description:"Your money moves directly from your bank account to mutual fund companies and back"},{iconPath:"https://static.paytmmoney.com/images/benefits/pin-entering-hand.svg",title:"Fingerprint & Pin-protected App",description:"Add additional security with fingerprint and pin-based locks on your Apple and Android smartphones"},{iconPath:"https://static.paytmmoney.com/images/benefits/keyhole-shield.svg",title:"Data Privacy & Protection",description:"Bank-level security protects your sensitive personal details from unauthorized access & use of your information"}],ce=a.b.div.withConfig({componentId:"vtxdi1-0"})(["max-width:45px;margin:0 auto;img{display:inline-block;max-width:100%;height:auto;}@media only screen and (min-width:601px){max-width:none;flex:0 0 12%;}"]),ue=a.b.div.withConfig({componentId:"vtxdi1-1"})(["h4{margin:0;margin-top:10px;font-size:1.4em;font-weight:400;line-height:30px;color:#2b2b2b;}div{font-size:1.1em;font-weight:300;line-height:18px;}@media only screen and (min-width:601px){margin-left:8%;h4{margin-top:0;font-size:1.8em;}div{margin-top:5px;font-size:1.6em;line-height:22px;}}"]),de=a.b.div.withConfig({componentId:"vtxdi1-2"})(["box-sizing:border-box;margin-top:40px;text-align:center;color:#4a4a4a;@media only screen and (min-width:601px){flex:0 0 50%;display:inline-flex;text-align:left;max-width:500px;&:nth-child(odd){padding-right:12px;}&:nth-child(even){padding-left:12px;}}"]),pe=function(e){return o.a.createElement(de,null,o.a.createElement(ce,null,o.a.createElement("img",{alt:"".concat(e.title," icon"),src:e.iconPath})),o.a.createElement(ue,null,o.a.createElement("h4",null,e.title),o.a.createElement("div",null,e.description)))},fe=a.b.div.withConfig({componentId:"sc-68jzva-0"})(["background-color:#fff;padding:40px 0;@media only screen and (min-width:601px){padding:75px 0;}"]),he=a.b.h3.withConfig({componentId:"sc-68jzva-1"})(["text-align:center;color:",";font-size:1.6em;font-weight:600;margin:0;@media only screen and (min-width:601px){font-size:3em;margin-bottom:50px;}"],u.a.SECONDARY),me=a.b.div.withConfig({componentId:"sc-68jzva-2"})(["display:flex;flex-direction:column;@media only screen and (min-width:601px){flex-direction:row;flex-wrap:wrap;justify-content:space-between;}"]),ge=function(){return o.a.createElement(fe,null,o.a.createElement(s.a,null,o.a.createElement(he,null,"Investments through our platform is Safe & Secure"),o.a.createElement(me,null,le.map(function(e,t){return o.a.createElement(pe,{key:t,iconPath:e.iconPath,title:e.title,description:e.description})}))))},ve=[{iconPath:"https://static.paytmmoney.com/images/benefits/net-banking.svg",title:"Net Banking",description:"All major banks supported "},{iconPath:"https://static.paytmmoney.com/images/benefits/auto-pay-physical.svg",title:"Auto-Pay with Physical Mandates",description:"190+ Banks supported"},{iconPath:"https://static.paytmmoney.com/images/benefits/upi.svg",title:"Pay through UPI",description:"Live Now!"}],we=a.b.div.withConfig({componentId:"sc-1aoc2au-0"})(["display:flex;margin:auto;flex-direction:column;justify-content:center;align-items:center;text-align:center;"]),be=a.b.div.withConfig({componentId:"sc-1aoc2au-1"})(["color:#27306a;font-size:30px;margin-bottom:10px;font-weight:600;@media (max-width:600px){font-size:20px;}"]),ye=a.b.div.withConfig({componentId:"sc-1aoc2au-2"})(["color:",";font-size:20px;font-weight:lighter;@media (max-width:600px){font-size:12px;}"],u.a.BATTLESHIP_GREY),xe=function(e){var t=e.className,n=e.heading,i=e.subHeading;return o.a.createElement(we,{className:t},o.a.createElement(be,{className:"heading"},n),o.a.createElement(ye,{className:"subheading"},i))},ke=a.b.div.withConfig({componentId:"edlmwj-0"})(["display:flex;flex-direction:column;box-sizing:border-box;text-align:center;color:#4a4a4a;padding:10px 32px;@media (max-width:1100px){padding:10px 25px;}@media (max-width:900px){padding:10px 15px;}@media (max-width:750px){padding:10px 12px;}@media (max-width:600px){flex-direction:row;text-align:left;align-items:center;padding:10px 0px;}"]),Se=a.b.div.withConfig({componentId:"edlmwj-1"})(["img{@media (max-width:900px){width:45px;}@media (max-width:800px){width:38px;}@media (max-width:650px){width:35px;}@media (max-width:600px){width:45px;margin-right:16px;}}"]),Ee=a.b.div.withConfig({componentId:"edlmwj-2"})(["h4{font-size:20px;font-weight:400;margin-top:10px;margin-bottom:5px;white-space:nowrap;@media (max-width:1100px){font-size:16px;}@media (max-width:900px){font-size:14px;}@media (max-width:750px){font-size:12px;}@media (max-width:650px){font-size:11px;}@media (max-width:600px){margin:0px;font-size:14px;}}div{white-space:nowrap;font-size:16px;font-weight:300;@media (max-width:1100px){font-size:13px;}@media (max-width:900px){font-size:11px;}@media (max-width:750px){font-size:10px;}@media (max-width:650px){font-size:10px;}@media (max-width:600px){font-size:11px;}}"]),_e=function(e){return o.a.createElement(ke,null,o.a.createElement(Se,null,o.a.createElement("img",{alt:"".concat(e.title," icon"),src:e.iconPath})),o.a.createElement(Ee,null,o.a.createElement("h4",null,e.title),o.a.createElement("div",null,e.description)))},Ce=a.b.div.withConfig({componentId:"wfpbfo-0"})(["background-color:#f9f9f9;padding:75px 0;@media only screen and (max-width:600px){padding:40px 0;}"]),Oe=a.b.div.withConfig({componentId:"wfpbfo-1"})(["margin-top:80px;display:flex;justify-content:center;@media (max-width:600px){flex-direction:column;max-width:350px;margin:auto;margin-top:40px;}"]),Ie=Object(a.b)(xe).withConfig({componentId:"wfpbfo-2"})(["margin-top:10px;width:85%;@media (max-width:1000px){.heading{font-size:25px;}.subheading{font-size:18px;}}@media (max-width:750px){.heading{font-size:20px;}.subheading{font-size:14px;}}@media (max-width:600px){.heading{font-size:16px;}.subheading{font-size:12px;}}"]),Te=function(){return o.a.createElement(Ce,null,o.a.createElement(s.a,null,o.a.createElement(Ie,{heading:"Convenient Payment Options for Investing",subHeading:"Experience seamless investments with Automated 1-tap payments"}),o.a.createElement(Oe,null,ve.map(function(e,t){return o.a.createElement(_e,{key:t,iconPath:e.iconPath,title:e.title,description:e.description})}))))},Me=n(96),ze=n(301);function Pe(e){return(Pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Le(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ue(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var He=a.b.div.withConfig({componentId:"sc-1rhkk99-0"})(["display:block;width:100%;font-size:10px;margin-top:-65px;@media only screen and (min-width:601px){font-size:8px;margin-top:-80px;}@media only screen and (min-width:1001px){font-size:10px;}"]),De=function(e){function t(e){var n,i,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,o=je(t).call(this,e),n=!o||"object"!==Pe(o)&&"function"!=typeof o?Ue(i):o,Ae(Ue(Ue(n)),"showModal",function(e){n.setState({show:!0,videoUrl:e})}),Ae(Ue(Ue(n)),"hideModal",function(){n.setState({show:!1})}),n.state={show:!1,videoUrl:""},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(t,i["Component"]),n=t,(r=[{key:"render",value:function(){return o.a.createElement(He,null,o.a.createElement(Me.a,{id:"benefitsVideo",show:this.state.show,handleClose:this.hideModal},o.a.createElement(ze.a,{src:this.state.show?this.state.videoUrl:""})),o.a.createElement(ie.a,{title:"Benefits of Investing in Mutual Funds",subtitle:"Investing in mutual funds was never this easy"}),o.a.createElement(ne,null),o.a.createElement(se,{showModal:this.showModal}),o.a.createElement(ge,null),o.a.createElement(Te,null))}}])&&Le(n.prototype,r),a&&Le(n,a),t}();t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(De,null))}},204:function(e,t,n){"use strict";t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=c(n(0)),r=n(205),a=c(n(212)),s=c(n(214)),l=n(65);function c(e){return e&&e.__esModule?e:{default:e}}var u=(0,l.canUseDOM)()&&n(215),d=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return i.innerSliderRefHandler=function(e){return i.innerSlider=e},i.slickPrev=function(){return i.innerSlider.slickPrev()},i.slickNext=function(){return i.innerSlider.slickNext()},i.slickGoTo=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i.innerSlider.slickGoTo(e,t)},i.slickPause=function(){return i.innerSlider.pause("paused")},i.slickPlay=function(){return i.innerSlider.autoPlay("play")},i.state={breakpoint:null},i._responsiveMediaHandlers=[],i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.media=function(e,t){u.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})},t.prototype.componentWillMount=function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map(function(e){return e.breakpoint});t.sort(function(e,t){return e-t}),t.forEach(function(n,i){var o=void 0;o=0===i?(0,a.default)({minWidth:0,maxWidth:n}):(0,a.default)({minWidth:t[i-1]+1,maxWidth:n}),(0,l.canUseDOM)()&&e.media(o,function(){e.setState({breakpoint:n})})});var n=(0,a.default)({minWidth:t.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(n,function(){e.setState({breakpoint:null})})}},t.prototype.componentWillUnmount=function(){this._responsiveMediaHandlers.forEach(function(e){u.unregister(e.query,e.handler)})},t.prototype.render=function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter(function(e){return e.breakpoint===n.state.breakpoint}))[0].settings?"unslick":i({},s.default,this.props,t[0].settings):i({},s.default,this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var a=o.default.Children.toArray(this.props.children);a=a.filter(function(e){return"string"==typeof e?!!e.trim():!!e}),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var l=[],c=null,u=0;u<a.length;u+=e.rows*e.slidesPerRow){for(var d=[],p=u;p<u+e.rows*e.slidesPerRow;p+=e.slidesPerRow){for(var f=[],h=p;h<p+e.slidesPerRow&&(e.variableWidth&&a[h].props.style&&(c=a[h].props.style.width),!(h>=a.length));h+=1)f.push(o.default.cloneElement(a[h],{key:100*u+10*p+h,tabIndex:-1,style:{width:100/e.slidesPerRow+"%",display:"inline-block"}}));d.push(o.default.createElement("div",{key:10*u+p},f))}e.variableWidth?l.push(o.default.createElement("div",{key:u,style:{width:c}},d)):l.push(o.default.createElement("div",{key:u},d))}if("unslick"===e){var m="regular slider "+(this.props.className||"");return o.default.createElement("div",{className:m},l)}return l.length<=e.slidesToShow&&(e.unslick=!0),o.default.createElement(r.InnerSlider,i({ref:this.innerSliderRefHandler},e),l)},t}(o.default.Component);t.default=d},205:function(e,t,n){"use strict";t.__esModule=!0,t.InnerSlider=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=m(n(0)),a=m(n(37)),s=m(n(206)),l=m(n(207)),c=m(n(53)),u=n(65),d=n(208),p=n(209),f=n(210),h=m(n(211));function m(e){return e&&e.__esModule?e:{default:e}}t.InnerSlider=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var m=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return m.listRefHandler=function(e){return m.list=e},m.trackRefHandler=function(e){return m.track=e},m.adaptHeight=function(){if(m.props.adaptiveHeight&&m.list){var e=m.list.querySelector('[data-index="'+m.state.currentSlide+'"]');m.list.style.height=(0,u.getHeight)(e)+"px"}},m.componentWillMount=function(){if(m.ssrInit(),m.props.onInit&&m.props.onInit(),m.props.lazyLoad){var e=(0,u.getOnDemandLazySlides)(o({},m.props,m.state));e.length>0&&(m.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),m.props.onLazyLoad&&m.props.onLazyLoad(e))}},m.componentDidMount=function(){var e=o({listRef:m.list,trackRef:m.track},m.props);m.updateState(e,!0,function(){m.adaptHeight(),m.props.autoplay&&m.autoPlay("update")}),"progressive"===m.props.lazyLoad&&(m.lazyLoadTimer=setInterval(m.progressiveLazyLoad,1e3)),m.ro=new h.default(function(){m.state.animating?(m.onWindowResized(!1),m.callbackTimers.push(setTimeout(function(){return m.onWindowResized()},m.props.speed))):m.onWindowResized()}),m.ro.observe(m.list),Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(e){e.onfocus=m.props.pauseOnFocus?m.onSlideFocus:null,e.onblur=m.props.pauseOnFocus?m.onSlideBlur:null}),window&&(window.addEventListener?window.addEventListener("resize",m.onWindowResized):window.attachEvent("onresize",m.onWindowResized))},m.componentWillUnmount=function(){m.animationEndCallback&&clearTimeout(m.animationEndCallback),m.lazyLoadTimer&&clearInterval(m.lazyLoadTimer),m.callbackTimers.length&&(m.callbackTimers.forEach(function(e){return clearTimeout(e)}),m.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",m.onWindowResized):window.detachEvent("onresize",m.onWindowResized),m.autoplayTimer&&clearInterval(m.autoplayTimer)},m.componentWillReceiveProps=function(e){var t=o({listRef:m.list,trackRef:m.track},e,m.state),n=!1,a=Object.keys(m.props),s=Array.isArray(a),l=0;for(a=s?a:a[Symbol.iterator]();;){var c;if(s){if(l>=a.length)break;c=a[l++]}else{if((l=a.next()).done)break;c=l.value}var u=c;if(!e.hasOwnProperty(u)){n=!0;break}if("object"!==i(e[u])&&"function"!=typeof e[u]&&e[u]!==m.props[u]){n=!0;break}}m.updateState(t,n,function(){m.state.currentSlide>=r.default.Children.count(e.children)&&m.changeSlide({message:"index",index:r.default.Children.count(e.children)-e.slidesToShow,currentSlide:m.state.currentSlide}),e.autoplay?m.autoPlay("update"):m.pause("paused")})},m.componentDidUpdate=function(){if(m.checkImagesLoad(),m.props.onReInit&&m.props.onReInit(),m.props.lazyLoad){var e=(0,u.getOnDemandLazySlides)(o({},m.props,m.state));e.length>0&&(m.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),m.props.onLazyLoad&&m.props.onLazyLoad(e))}m.adaptHeight()},m.onWindowResized=function(e){m.debouncedResize&&m.debouncedResize.cancel(),m.debouncedResize=(0,l.default)(function(){return m.resizeWindow(e)},50),m.debouncedResize()},m.resizeWindow=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(a.default.findDOMNode(m.track)){var t=o({listRef:m.list,trackRef:m.track},m.props,m.state);m.updateState(t,e,function(){m.props.autoplay?m.autoPlay("update"):m.pause("paused")}),m.setState({animating:!1}),clearTimeout(m.animationEndCallback),delete m.animationEndCallback}},m.updateState=function(e,t,n){var i=(0,u.initializedState)(e);e=o({},e,i,{slideIndex:i.currentSlide});var a=(0,u.getTrackLeft)(e);e=o({},e,{left:a});var s=(0,u.getTrackCSS)(e);(t||r.default.Children.count(m.props.children)!==r.default.Children.count(e.children))&&(i.trackStyle=s),m.setState(i,n)},m.ssrInit=function(){if(m.props.variableWidth){var e=0,t=0,n=[],i=(0,u.getPreClones)(o({},m.props,m.state,{slideCount:m.props.children.length})),a=(0,u.getPostClones)(o({},m.props,m.state,{slideCount:m.props.children.length}));m.props.children.forEach(function(t){n.push(t.props.style.width),e+=t.props.style.width});for(var s=0;s<i;s++)t+=n[n.length-1-s],e+=n[n.length-1-s];for(var l=0;l<a;l++)e+=n[l];for(var c=0;c<m.state.currentSlide;c++)t+=n[c];var d={width:e+"px",left:-t+"px"};if(m.props.centerMode){var p=n[m.state.currentSlide]+"px";d.left="calc("+d.left+" + (100% - "+p+") / 2 ) "}m.setState({trackStyle:d})}else{var f=r.default.Children.count(m.props.children),h=o({},m.props,m.state,{slideCount:f}),g=(0,u.getPreClones)(h)+(0,u.getPostClones)(h)+f,v=100/m.props.slidesToShow*g,w=100/g,b=-w*((0,u.getPreClones)(h)+m.state.currentSlide)*v/100;m.props.centerMode&&(b+=(100-w*v/100)/2);var y={width:v+"%",left:b+"%"};m.setState({slideWidth:w+"%",trackStyle:y})}},m.checkImagesLoad=function(){var e=document.querySelectorAll(".slick-slide img"),t=e.length,n=0;Array.prototype.forEach.call(e,function(e){var i=function(){return++n&&n>=t&&m.onWindowResized()};if(e.onclick){var o=e.onclick;e.onclick=function(){o(),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(m.props.lazyLoad?e.onload=function(){m.adaptHeight(),m.callbackTimers.push(setTimeout(m.onWindowResized,m.props.speed))}:(e.onload=i,e.onerror=function(){i(),m.props.onLazyLoadError&&m.props.onLazyLoadError()}))})},m.progressiveLazyLoad=function(){for(var e=[],t=o({},m.props,m.state),n=m.state.currentSlide;n<m.state.slideCount+(0,u.getPostClones)(t);n++)if(m.state.lazyLoadedList.indexOf(n)<0){e.push(n);break}for(var i=m.state.currentSlide-1;i>=-(0,u.getPreClones)(t);i--)if(m.state.lazyLoadedList.indexOf(i)<0){e.push(i);break}e.length>0?(m.setState(function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}}),m.props.onLazyLoad&&m.props.onLazyLoad(e)):m.lazyLoadTimer&&(clearInterval(m.lazyLoadTimer),delete m.lazyLoadTimer)},m.slideHandler=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=m.props,i=n.asNavFor,r=n.currentSlide,a=n.beforeChange,s=n.onLazyLoad,l=n.speed,c=n.afterChange,d=(0,u.slideHandler)(o({index:e},m.props,m.state,{trackRef:m.track,useCSS:m.props.useCSS&&!t})),p=d.state,f=d.nextState;if(p){a&&a(r,p.currentSlide);var h=p.lazyLoadedList.filter(function(e){return m.state.lazyLoadedList.indexOf(e)<0});s&&h.length>0&&s(h),m.setState(p,function(){i&&i.innerSlider.state.currentSlide!==r&&i.innerSlider.slideHandler(e),f&&(m.animationEndCallback=setTimeout(function(){var e=f.animating,t=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(f,["animating"]);m.setState(t,function(){m.callbackTimers.push(setTimeout(function(){return m.setState({animating:e})},10)),c&&c(p.currentSlide),delete m.animationEndCallback})},l))})}},m.changeSlide=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=o({},m.props,m.state),i=(0,u.changeSlide)(n,e);(0===i||i)&&(!0===t?m.slideHandler(i,t):m.slideHandler(i))},m.clickHandler=function(e){!1===m.clickable&&(e.stopPropagation(),e.preventDefault()),m.clickable=!0},m.keyHandler=function(e){var t=(0,u.keyHandler)(e,m.props.accessibility,m.props.rtl);""!==t&&m.changeSlide({message:t})},m.selectHandler=function(e){m.changeSlide(e)},m.disableBodyScroll=function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}},m.enableBodyScroll=function(){window.ontouchmove=null},m.swipeStart=function(e){m.props.verticalSwiping&&m.disableBodyScroll();var t=(0,u.swipeStart)(e,m.props.swipe,m.props.draggable);""!==t&&m.setState(t)},m.swipeMove=function(e){var t=(0,u.swipeMove)(e,o({},m.props,m.state,{trackRef:m.track,listRef:m.list,slideIndex:m.state.currentSlide}));t&&(t.swiping&&(m.clickable=!1),m.setState(t))},m.swipeEnd=function(e){var t=(0,u.swipeEnd)(e,o({},m.props,m.state,{trackRef:m.track,listRef:m.list,slideIndex:m.state.currentSlide}));if(t){var n=t.triggerSlideHandler;delete t.triggerSlideHandler,m.setState(t),void 0!==n&&(m.slideHandler(n),m.props.verticalSwiping&&m.enableBodyScroll())}},m.slickPrev=function(){m.callbackTimers.push(setTimeout(function(){return m.changeSlide({message:"previous"})},0))},m.slickNext=function(){m.callbackTimers.push(setTimeout(function(){return m.changeSlide({message:"next"})},0))},m.slickGoTo=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";m.callbackTimers.push(setTimeout(function(){return m.changeSlide({message:"index",index:e,currentSlide:m.state.currentSlide},t)},0))},m.play=function(){var e;if(m.props.rtl)e=m.state.currentSlide-m.props.slidesToScroll;else{if(!(0,u.canGoNext)(o({},m.props,m.state)))return!1;e=m.state.currentSlide+m.props.slidesToScroll}m.slideHandler(e)},m.autoPlay=function(e){m.autoplayTimer&&clearInterval(m.autoplayTimer);var t=m.state.autoplaying;if("update"===e){if("hovered"===t||"focused"===t||"paused"===t)return}else if("leave"===e){if("paused"===t||"focused"===t)return}else if("blur"===e&&("paused"===t||"hovered"===t))return;m.autoplayTimer=setInterval(m.play,m.props.autoplaySpeed+50),m.setState({autoplaying:"playing"})},m.pause=function(e){m.autoplayTimer&&(clearInterval(m.autoplayTimer),m.autoplayTimer=null);var t=m.state.autoplaying;"paused"===e?m.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==t&&"playing"!==t||m.setState({autoplaying:"focused"}):"playing"===t&&m.setState({autoplaying:"hovered"})},m.onDotsOver=function(){return m.props.autoplay&&m.pause("hovered")},m.onDotsLeave=function(){return m.props.autoplay&&"hovered"===m.state.autoplaying&&m.autoPlay("leave")},m.onTrackOver=function(){return m.props.autoplay&&m.pause("hovered")},m.onTrackLeave=function(){return m.props.autoplay&&"hovered"===m.state.autoplaying&&m.autoPlay("leave")},m.onSlideFocus=function(){return m.props.autoplay&&m.pause("focused")},m.onSlideBlur=function(){return m.props.autoplay&&"focused"===m.state.autoplaying&&m.autoPlay("blur")},m.render=function(){var e,t,n,i=(0,c.default)("slick-slider",m.props.className,{"slick-vertical":m.props.vertical,"slick-initialized":!0}),a=o({},m.props,m.state),s=(0,u.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding"]),l=m.props.pauseOnHover;if(s=o({},s,{onMouseEnter:l?m.onTrackOver:null,onMouseLeave:l?m.onTrackLeave:null,onMouseOver:l?m.onTrackOver:null,focusOnSelect:m.props.focusOnSelect?m.selectHandler:null}),!0===m.props.dots&&m.state.slideCount>=m.props.slidesToShow){var h=(0,u.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=m.props.pauseOnDotsHover;h=o({},h,{clickHandler:m.changeSlide,onMouseEnter:g?m.onDotsLeave:null,onMouseOver:g?m.onDotsOver:null,onMouseLeave:g?m.onDotsLeave:null}),e=r.default.createElement(p.Dots,h)}var v=(0,u.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=m.changeSlide,m.props.arrows&&(t=r.default.createElement(f.PrevArrow,v),n=r.default.createElement(f.NextArrow,v));var w=null;m.props.vertical&&(w={height:m.state.listHeight});var b=null;!1===m.props.vertical?!0===m.props.centerMode&&(b={padding:"0px "+m.props.centerPadding}):!0===m.props.centerMode&&(b={padding:m.props.centerPadding+" 0px"});var y=o({},w,b),x=m.props.touchMove,k={className:"slick-list",style:y,onClick:m.clickHandler,onMouseDown:x?m.swipeStart:null,onMouseMove:m.state.dragging&&x?m.swipeMove:null,onMouseUp:x?m.swipeEnd:null,onMouseLeave:m.state.dragging&&x?m.swipeEnd:null,onTouchStart:x?m.swipeStart:null,onTouchMove:m.state.dragging&&x?m.swipeMove:null,onTouchEnd:x?m.swipeEnd:null,onTouchCancel:m.state.dragging&&x?m.swipeEnd:null,onKeyDown:m.props.accessibility?m.keyHandler:null},S={className:i,dir:"ltr"};return m.props.unslick&&(k={className:"slick-list"},S={className:i}),r.default.createElement("div",S,m.props.unslick?"":t,r.default.createElement("div",o({ref:m.listRefHandler},k),r.default.createElement(d.Track,o({ref:m.trackRefHandler},s),m.props.children)),m.props.unslick?"":n,m.props.unslick?"":e)},m.list=null,m.track=null,m.state=o({},s.default,{currentSlide:m.props.initialSlide,slideCount:r.default.Children.count(m.props.children)}),m.callbackTimers=[],m.clickable=!0,m.debouncedResize=null,m}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.Component)},206:function(e,t,n){"use strict";t.__esModule=!0;t.default={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0}},207:function(e,t,n){(function(t){var n="Expected a function",i=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),f=Object.prototype.toString,h=Math.max,m=Math.min,g=function(){return p.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return i;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?i:+e}e.exports=function(e,t,i){var o,r,a,s,l,c,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=o,i=r;return o=r=void 0,u=t,s=e.apply(i,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=a}function x(){var e=g();if(y(e))return k(e);l=setTimeout(x,function(e){var n=t-(e-c);return p?m(n,a-(e-u)):n}(e))}function k(e){return l=void 0,f&&o?b(e):(o=r=void 0,s)}function S(){var e=g(),n=y(e);if(o=arguments,r=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(x,t),d?b(e):s}(c);if(p)return l=setTimeout(x,t),b(c)}return void 0===l&&(l=setTimeout(x,t)),s}return t=w(t)||0,v(i)&&(d=!!i.leading,a=(p="maxWait"in i)?h(w(i.maxWait)||0,t):a,f="trailing"in i?!!i.trailing:f),S.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=c=r=l=void 0},S.flush=function(){return void 0===l?s:k(g())},S}}).call(this,n(71))},208:function(e,t,n){"use strict";t.__esModule=!0,t.Track=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=s(n(0)),r=s(n(53)),a=n(65);function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t,n,i,o,r;return i=(r=e.rtl?e.slideCount-1-e.index:e.index)<0||r>=e.slideCount,e.centerMode?(o=Math.floor(e.slidesToShow/2),n=(r-e.currentSlide)%e.slideCount==0,r>e.currentSlide-o-1&&r<=e.currentSlide+o&&(t=!0)):t=e.currentSlide<=r&&r<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":i,"slick-current":r===e.currentSlide}},c=function(e,t){return e.key||t},u=function(e){var t,n=[],s=[],u=[],d=o.default.Children.count(e.children),p=(0,a.lazyStartIndex)(e),f=(0,a.lazyEndIndex)(e);return o.default.Children.forEach(e.children,function(h,m){var g=void 0,v={message:"children",index:m,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};g=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(m)>=0?h:o.default.createElement("div",null);var w=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase,t.WebkitTransition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase),t}(i({},e,{index:m})),b=g.props.className||"",y=l(i({},e,{index:m}));if(n.push(o.default.cloneElement(g,{key:"original"+c(g,m),"data-index":m,className:(0,r.default)(y,b),tabIndex:"-1","aria-hidden":!y["slick-active"],style:i({outline:"none"},g.props.style||{},w),onClick:function(t){g.props&&g.props.onClick&&g.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(v)}})),e.infinite&&!1===e.fade){var x=d-m;x<=(0,a.getPreClones)(e)&&d!==e.slidesToShow&&((t=-x)>=p&&(g=h),y=l(i({},e,{index:t})),s.push(o.default.cloneElement(g,{key:"precloned"+c(g,t),"data-index":t,tabIndex:"-1",className:(0,r.default)(y,b),"aria-hidden":!y["slick-active"],style:i({},g.props.style||{},w),onClick:function(t){g.props&&g.props.onClick&&g.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(v)}}))),d!==e.slidesToShow&&((t=d+m)<f&&(g=h),y=l(i({},e,{index:t})),u.push(o.default.cloneElement(g,{key:"postcloned"+c(g,t),"data-index":t,tabIndex:"-1",className:(0,r.default)(y,b),"aria-hidden":!y["slick-active"],style:i({},g.props.style||{},w),onClick:function(t){g.props&&g.props.onClick&&g.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(v)}})))}}),e.rtl?s.concat(n,u).reverse():s.concat(n,u)};t.Track=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=u(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return o.default.createElement("div",i({className:"slick-track",style:this.props.trackStyle},n),e)},t}(o.default.PureComponent)},209:function(e,t,n){"use strict";t.__esModule=!0,t.Dots=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=a(n(0)),r=a(n(53));function a(e){return e&&e.__esModule?e:{default:e}}t.Dots=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.clickHandler=function(e,t){t.preventDefault(),this.props.clickHandler(e)},t.prototype.render=function(){var e,t=this,n=(e={slideCount:this.props.slideCount,slidesToScroll:this.props.slidesToScroll,slidesToShow:this.props.slidesToShow,infinite:this.props.infinite}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,a=this.props,s={onMouseEnter:a.onMouseEnter,onMouseOver:a.onMouseOver,onMouseLeave:a.onMouseLeave},l=Array.apply(null,Array(n+1).join("0").split("")).map(function(e,n){var i=n*t.props.slidesToScroll,a=n*t.props.slidesToScroll+(t.props.slidesToScroll-1),s=(0,r.default)({"slick-active":t.props.currentSlide>=i&&t.props.currentSlide<=a}),l={message:"dots",index:n,slidesToScroll:t.props.slidesToScroll,currentSlide:t.props.currentSlide},c=t.clickHandler.bind(t,l);return o.default.createElement("li",{key:n,className:s},o.default.cloneElement(t.props.customPaging(n),{onClick:c}))});return o.default.cloneElement(this.props.appendDots(l),i({className:this.props.dotsClass},s))},t}(o.default.PureComponent)},210:function(e,t,n){"use strict";t.__esModule=!0,t.NextArrow=t.PrevArrow=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=s(n(0)),r=s(n(53)),a=n(65);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.PrevArrow=function(e){function t(){return l(this,t),c(this,e.apply(this,arguments))}return u(t,e),t.prototype.clickHandler=function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)},t.prototype.render=function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,r.default)(e),style:{display:"block"},onClick:t},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?o.default.cloneElement(this.props.prevArrow,i({},n,a)):o.default.createElement("button",i({key:"0",type:"button"},n)," ","Previous")},t}(o.default.PureComponent),t.NextArrow=function(e){function t(){return l(this,t),c(this,e.apply(this,arguments))}return u(t,e),t.prototype.clickHandler=function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)},t.prototype.render=function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,a.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,r.default)(e),style:{display:"block"},onClick:t},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?o.default.cloneElement(this.props.nextArrow,i({},n,s)):o.default.createElement("button",i({key:"1",type:"button"},n)," ","Next")},t}(o.default.PureComponent)},211:function(e,t,n){"use strict";n.r(t),function(e){var n=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,i){return e[0]===t&&(n=i,!0)}),n}return function(){function t(){this.__entries__=[]}var n={size:{configurable:!0}};return n.size.get=function(){return this.__entries__.length},t.prototype.get=function(t){var n=e(this.__entries__,t),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(t,n){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,i=e(n,t);~i&&n.splice(i,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,i=this.__entries__;n<i.length;n+=1){var o=i[n];e.call(t,o[1],o[0])}},Object.defineProperties(t.prototype,n),t}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),r="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},a=2,s=["top","right","bottom","left","width","height","size","weight"],l="undefined"!=typeof MutationObserver,c=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,i=!1,o=0;function s(){n&&(n=!1,e()),i&&c()}function l(){r(s)}function c(){var e=Date.now();if(n){if(e-o<a)return;i=!0}else n=!0,i=!1,setTimeout(l,t);o=e}return c}(this.refresh.bind(this),20)};c.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},c.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},c.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},c.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},c.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),l?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},c.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},c.prototype.onTransitionEnd_=function(e){var t=e.propertyName;void 0===t&&(t=""),s.some(function(e){return!!~t.indexOf(e)})&&this.refresh()},c.getInstance=function(){return this.instance_||(this.instance_=new c),this.instance_},c.instance_=null;var u=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n+=1){var o=i[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},p=w(0,0,0,0);function f(e){return parseFloat(e)||0}function h(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return t.reduce(function(t,n){return t+f(e["border-"+n+"-width"])},0)}function m(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var i=d(e).getComputedStyle(e),o=function(e){for(var t={},n=0,i=["top","right","bottom","left"];n<i.length;n+=1){var o=i[n],r=e["padding-"+o];t[o]=f(r)}return t}(i),r=o.left+o.right,a=o.top+o.bottom,s=f(i.width),l=f(i.height);if("border-box"===i.boxSizing&&(Math.round(s+r)!==t&&(s-=h(i,"left","right")+r),Math.round(l+a)!==n&&(l-=h(i,"top","bottom")+a)),!function(e){return e===d(e).document.documentElement}(e)){var c=Math.round(s+r)-t,u=Math.round(l+a)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(u)&&(l-=u)}return w(o.left,o.top,s,l)}var g="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"==typeof e.getBBox};function v(e){return i?g(e)?function(e){var t=e.getBBox();return w(0,0,t.width,t.height)}(e):m(e):p}function w(e,t,n,i){return{x:e,y:t,width:n,height:i}}var b=function(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=e};b.prototype.isActive=function(){var e=v(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},b.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e};var y=function(e,t){var n,i,o,r,a,s,l,c=(i=(n=t).x,o=n.y,r=n.width,a=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(s.prototype),u(l,{x:i,y:o,width:r,height:a,top:o,right:i+r,bottom:a+o,left:i}),l);u(this,{target:e,contentRect:c})},x=function(e,t,i){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=i};x.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new b(e)),this.controller_.addObserver(this),this.controller_.refresh())}},x.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},x.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},x.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},x.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new y(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},x.prototype.clearActive=function(){this.activeObservations_.splice(0)},x.prototype.hasActive=function(){return this.activeObservations_.length>0};var k="undefined"!=typeof WeakMap?new WeakMap:new n,S=function(e){if(!(this instanceof S))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=c.getInstance(),n=new x(e,t,this);k.set(this,n)};["observe","unobserve","disconnect"].forEach(function(e){S.prototype[e]=function(){return(t=k.get(this))[e].apply(t,arguments);var t}});var E=void 0!==o.ResizeObserver?o.ResizeObserver:S;t.default=E}.call(this,n(71))},212:function(e,t,n){var i=n(213),o=function(e){var t="",n=Object.keys(e);return n.forEach(function(o,r){var a=e[o];(function(e){return/[height|width]$/.test(e)})(o=i(o))&&"number"==typeof a&&(a+="px"),t+=!0===a?o:!1===a?"not "+o:"("+o+": "+a+")",r<n.length-1&&(t+=" and ")}),t};e.exports=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,i){t+=o(n),i<e.length-1&&(t+=", ")}),t):o(e)}},213:function(e,t){e.exports=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}},214:function(e,t,n){"use strict";t.__esModule=!0;var i,o=n(0),r=(i=o)&&i.__esModule?i:{default:i};var a={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return r.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return r.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0};t.default=a},215:function(e,t,n){var i=n(216);e.exports=new i},216:function(e,t,n){var i=n(217),o=n(125),r=o.each,a=o.isFunction,s=o.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(e,t,n){var o=this.queries,l=n&&this.browserIsIncapable;return o[e]||(o[e]=new i(e,l)),a(t)&&(t={match:t}),s(t)||(t=[t]),r(t,function(t){a(t)&&(t={match:t}),o[e].addHandler(t)}),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=l},217:function(e,t,n){var i=n(218),o=n(125).each;function r(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}r.prototype={constuctor:r,addHandler:function(e){var t=new i(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;o(t,function(n,i){if(n.equals(e))return n.destroy(),!t.splice(i,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){o(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";o(this.handlers,function(t){t[e]()})}},e.exports=r},218:function(e,t){function n(e){this.options=e,!e.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=n},239:function(e,t,n){"use strict";e.exports=n(120)},301:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(1),a=r.b.iframe.withConfig({componentId:"h24btj-0"})(["border:4px solid white;width:560px;height:315px;@media (max-width:600px){width:80%;height:250px;}",""],function(e){return e.width&&e.height&&Object(r.a)(["width:","% !important;height:","rem !important;"],e.width,e.height)});t.a=function(e){var t=e.src,n=e.height,i=e.width;return o.a.createElement(a,{height:n,width:i,src:t,sandbox:"allow-same-origin allow-scripts allow-presentation",frameBorder:"1",allowFullScreen:!0})}},411:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(1),a=n(118),s=n.n(a),l=n(141),c=n(4),u=r.b.div.withConfig({componentId:"d6z810-0"})(["display:flex;box-sizing:border-box;margin-bottom:40px;@media only screen and (min-width:601px){flex-direction:column;align-items:center;text-align:center;flex-basis:33.33%;max-width:300px;}"]),d=r.b.div.withConfig({componentId:"d6z810-1"})(["flex:0 0 20%;max-width:60px;@media only screen and (min-width:601px){flex:0 auto;max-width:110px;margin-bottom:12px;}"]),p=r.b.img.withConfig({componentId:"d6z810-2"})(["display:block;max-width:100%;"]),f=r.b.div.withConfig({componentId:"d6z810-3"})(["margin-left:5px;color:#4a4a4a;@media only screen and (min-width:601px){margin-left:0;}"]),h=r.b.div.withConfig({componentId:"d6z810-4"})(["font-size:14px;line-height:20px;color:#2b2b2b;@media only screen and (min-width:601px){font-size:18px;line-height:30px;}"]),m=r.b.div.withConfig({componentId:"d6z810-5"})(["font-size:11px;font-weight:300;line-height:18px;@media only screen and (min-width:601px){margin-top:5px;font-size:16px;line-height:22px;letter-spacing:0.4px;}"]),g=r.b.a.withConfig({componentId:"d6z810-6"})(["line-height:18px;font-size:14px;text-decoration:none;color:",";&:hover{color:#273068;cursor:pointer;}@media (max-width:600px){font-size:11px;}"],c.a.PRIMARY),v=function(e){var t=null;return e.videoUrl&&(t=o.a.createElement(g,{onClick:e.showModal.bind(null,e.videoUrl)},"Watch This Video")),o.a.createElement(u,null,o.a.createElement(d,null,o.a.createElement(p,{alt:"".concat(e.title," icon"),src:e.iconUrl})),o.a.createElement(f,null,o.a.createElement(h,null,e.title),o.a.createElement(m,null,e.description),t))};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var b=r.b.div.withConfig({componentId:"sc-1ro0z4a-0"})(["@media only screen and (min-width:601px){display:flex;flex-wrap:wrap;justify-content:space-evenly;}"]),y=function(e){return o.a.createElement(b,null,e.slideData.map(function(t,n){return o.a.createElement(v,w({showModal:e.showModal,key:n},t))}))},x=r.b.div.withConfig({componentId:"sc-1v0zy5b-0"})(["@media only screen and (min-width:601px){& ","{margin-top:40px;}}"],l.b),k={dots:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,appendDots:function(e){return o.a.createElement(l.b,null,e)},customPaging:function(){return o.a.createElement(l.a,null)}},S=function(e){return o.a.createElement(x,null,o.a.createElement(s.a,k,e.carouselData.map(function(t,n){return o.a.createElement(y,{showModal:e.showModal,key:n,slideData:t})})))},E="https://static.paytmmoney.com/images/benefits";function _(e,t){for(var n=[],i=0;i<e.length;i+=t)n.push(e.slice(i,i+t));return n}var C=[{iconUrl:"".concat(E,"/zero-rupee-charges_large.svg"),title:"No Charges on Investments",description:"Your investments are absolutely FREE of cost - in line with our investor-first approach"},{iconUrl:"".concat(E,"/zero-percent-comm_large.svg"),title:"No Hidden Commissions",description:"We charge no commissions from you or from mutual fund houses. You get your returns in full"},{iconUrl:"".concat(E,"/zero-rupee-fee_large.svg"),title:"No Transaction Fees",description:"Pay no fee on buying & selling of mutual funds"},{iconUrl:"".concat(E,"/contact-card-verified_large.svg"),title:"Free & Digital KYC on Mobile",description:"No need to courier documents or wait for someone to collect them. Just do it yourself! It's simple, fast and fully digital"},{iconUrl:"".concat(E,"/mobile-invest_large.svg"),title:"Fully Mobile Investing",description:"Take charge of your investments from your smartphone"},{iconUrl:"".concat(E,"/notes-deck-striked-through_large.svg"),title:"No Account Opening Charges",description:"We do not charge any account opening fee for your investment account"},{iconUrl:"".concat(E,"/calendar-bell_large.svg"),title:"Upcoming SIP Reminders",description:"Never miss an SIP investment. Receive timely alerts before your SIP is due & stay organized with your investments."},{iconUrl:"".concat(E,"/rupee-reload_large.svg"),title:"Auto-Pay Investments",description:"Set up a one-time auto pay Digital Mandate and automate all your investments"},{iconUrl:"".concat(E,"/returns-bar-chart-growth_large.svg"),title:"Higher Returns with Direct Plans",description:"With direct plans on Paytm Money, get upto 1% higher returns than on regular plans offered elsewhere"},{iconUrl:"".concat(E,"/digital-clock-rupee_large.svg"),title:"Real Time Status Updates",description:"Be notified about your money at every stage of the investment & withdrawal process"},{iconUrl:"".concat(E,"/houses-chain-linked_large.svg"),title:"Invest from 5 Bank Accounts",description:"Enjoy the flexibility of investing from up to 5 bank accounts & an enhanced SIP limit per day"}],O=_(C,4),I=_(C,6);n.d(t,"b",function(){return T}),n.d(t,"a",function(){return M});var T=r.b.div.withConfig({componentId:"sc-1l4v6b8-0"})(["display:none;@media only screen and (min-width:601px){display:block;}"]),M=r.b.div.withConfig({componentId:"sc-1l4v6b8-1"})(["display:block;@media only screen and (min-width:601px){display:none;}"]);t.c=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(M,null,o.a.createElement(S,{showModal:e.showModal,carouselData:O})),o.a.createElement(T,null,o.a.createElement(S,{showModal:e.showModal,carouselData:I})))}},53:function(e,t,n){var i;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var a=o.apply(null,i);a&&e.push(a)}else if("object"===r)for(var s in i)n.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()},582:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(1),a=n(27),s=n(4),l=r.b.div.withConfig({componentId:"sc-165bhea-0"})(["text-align:center;position:relative;overflow-x:hidden;"]),c=r.b.div.withConfig({componentId:"sc-165bhea-1"})(["position:absolute;top:50%;text-align:center;width:100%;@media (max-width:600px){bottom:auto;top:120px;}@media (max-width:330px){top:100px;}"]),u=r.b.div.withConfig({componentId:"sc-165bhea-2"})(["height:420px;position:relative;background-repeat:repeat,no-repeat;background-position:50% 50%;background:radial-gradient( circle farthest-corner at 0 0,rgba(255,255,255,1) 0,rgba(255,255,255,0.91) 9%,rgba(226,237,243,0) 24%,rgba(226,237,243,0) 100% ),linear-gradient( 120deg,rgba(226,237,243,1) 0,rgba(255,255,255,1) 100%,rgba(255,255,255,1) 100% );@media (max-width:600px){height:230px;}"]),d=r.b.div.withConfig({componentId:"sc-165bhea-3"})(["position:relative;height:inherit;width:1440px;margin:0 auto;"]),p=r.b.img.withConfig({componentId:"sc-165bhea-4"})(["top:186px;position:absolute;left:1160px;@media (max-width:600px){width:27px;left:314px;top:98.7px;}"]),f=r.b.img.withConfig({componentId:"sc-165bhea-5"})(["bottom:137px;position:absolute;left:1335px;@media (max-width:600px){width:8px;left:342px;bottom:80px;}"]),h=r.b.img.withConfig({componentId:"sc-165bhea-6"})(["bottom:58px;position:absolute;left:1039px;@media (max-width:600px){width:10px;left:270px;bottom:38px;}"]),m=r.b.img.withConfig({componentId:"sc-165bhea-7"})(["top:163px;position:absolute;left:954px;@media (max-width:600px){width:6px;left:246px;top:111px;}"]),g=r.b.img.withConfig({componentId:"sc-165bhea-8"})(["top:175px;position:absolute;left:645px;@media (max-width:600px){width:5px;left:160px;top:110px;}"]),v=r.b.img.withConfig({componentId:"sc-165bhea-9"})(["left:386px;position:absolute;bottom:49px;@media (max-width:600px){width:12px;left:86px;bottom:36px;}"]),w=r.b.img.withConfig({componentId:"sc-165bhea-10"})(["left:197px;position:absolute;top:172px;opacity:0.7;@media (max-width:600px){width:7.6px;left:46.9px;top:108.5px;}"]),b=r.b.img.withConfig({componentId:"sc-165bhea-11"})(["left:79px;position:absolute;bottom:78px;@media (max-width:600px){width:10px;left:10px;bottom:64px;}"]),y=r.b.h1.withConfig({componentId:"sc-165bhea-12"})(["font-weight:400;margin:0;font-size:4.5em;color:#27306a;font-weight:600;padding-bottom:16px;@media (max-width:1000px){font-size:4em;}@media (max-width:800px){font-size:3.2em;}@media (max-width:600px){font-size:1.8em;padding-bottom:10px;}"]),x=r.b.h2.withConfig({componentId:"sc-165bhea-13"})(["margin:0;font-weight:400;font-size:2em;color:",";padding-top:15px 20px;@media (max-width:1000px){font-size:1.8em;}@media (max-width:800px){font-size:1.6em;}@media (max-width:600px){font-size:1.4em;}"],s.a.BATTLESHIP_GREY),k=r.b.span.withConfig({componentId:"sc-165bhea-14"})(["white-space:nowrap;"]);t.a=function(e){var t=e.title,n=e.subtitle,i=e.wrappedSubtitle;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,null,o.a.createElement(u,null,o.a.createElement(d,null,o.a.createElement(p,{"aria-hidden":"true",alt:"bg-image",src:"/static/images/common/group-29.svg"}),o.a.createElement(f,{"aria-hidden":"true",alt:"bg-image",src:"/static/images/common/rectangle-25.svg"}),o.a.createElement(h,{"aria-hidden":"true",alt:"bg-image",src:"/static/images/common/group-36-copy-2.svg"}),o.a.createElement(m,{"aria-hidden":"true",alt:"bg-image",src:"/static/images/common/oval-9.svg"}),o.a.createElement(g,{"aria-hidden":"true",alt:"bg-image",src:"/static/images/common/rectangle-21.svg"}),o.a.createElement(v,{"aria-hidden":"true",alt:"bg-image",src:"/static/images/common/group-37.svg"}),o.a.createElement(w,{"aria-hidden":"true",alt:"bg-image",src:"/static/images/common/rectangle-20.svg"}),o.a.createElement(b,{"aria-hidden":"true",alt:"bg-image",src:"/static/images/common/group-36.svg"}))),o.a.createElement(c,null,o.a.createElement(a.a,null,o.a.createElement(y,null,t),o.a.createElement(x,null,n,i&&o.a.createElement(k,null,i))))))}},65:function(e,t,n){"use strict";t.__esModule=!0,t.canUseDOM=t.slidesOnLeft=t.slidesOnRight=t.siblingDirection=t.getTotalSlides=t.getPostClones=t.getPreClones=t.getTrackLeft=t.getTrackAnimateCSS=t.getTrackCSS=t.checkSpecKeys=t.getSlideCount=t.checkNavigable=t.getNavigableIndexes=t.swipeEnd=t.swipeMove=t.swipeStart=t.keyHandler=t.changeSlide=t.slideHandler=t.initializedState=t.extractObject=t.canGoNext=t.getSwipeDirection=t.getHeight=t.getWidth=t.lazySlidesOnRight=t.lazySlidesOnLeft=t.lazyEndIndex=t.lazyStartIndex=t.getRequiredLazySlides=t.getOnDemandLazySlides=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=a(n(0)),r=a(n(37));function a(e){return e&&e.__esModule?e:{default:e}}var s=t.getOnDemandLazySlides=function(e){for(var t=[],n=l(e),i=c(e),o=n;o<i;o++)e.lazyLoadedList.indexOf(o)<0&&t.push(o);return t},l=(t.getRequiredLazySlides=function(e){for(var t=[],n=l(e),i=c(e),o=n;o<i;o++)t.push(o);return t},t.lazyStartIndex=function(e){return e.currentSlide-u(e)}),c=t.lazyEndIndex=function(e){return e.currentSlide+d(e)},u=t.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},d=t.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},p=t.getWidth=function(e){return e&&e.offsetWidth||0},f=t.getHeight=function(e){return e&&e.offsetHeight||0},h=t.getSwipeDirection=function(e){var t,n,i,o,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,i=Math.atan2(n,t),(o=Math.round(180*i/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":!0===r?o>=35&&o<=135?"up":"down":"vertical"},m=t.canGoNext=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1?t=!1:(e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1)),t},g=(t.extractObject=function(e,t){var n={};return t.forEach(function(t){return n[t]=e[t]}),n},t.initializedState=function(e){var t=o.default.Children.count(e.children),n=Math.ceil(p(r.default.findDOMNode(e.listRef))),i=Math.ceil(p(r.default.findDOMNode(e.trackRef))),a=void 0;if(e.vertical)a=n;else{var l=e.centerMode&&2*parseInt(e.centerPadding);"string"==typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(l*=n/100),a=Math.ceil((n-l)/e.slidesToShow)}var c=r.default.findDOMNode(e.listRef)&&f(r.default.findDOMNode(e.listRef).querySelector('[data-index="0"]')),u=c*e.slidesToShow,d=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(d=t-1-e.initialSlide);var h=e.lazyLoadedList||[],m=s({currentSlide:d,lazyLoadedList:h},e);h.concat(m);var g={slideCount:t,slideWidth:a,listWidth:n,trackWidth:i,currentSlide:d,slideHeight:c,listHeight:u,lazyLoadedList:h};return null===e.autoplaying&&e.autoplay&&(g.autoplaying="playing"),g},t.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,o=e.fade,r=e.infinite,a=e.index,l=e.slideCount,c=e.lazyLoadedList,u=e.lazyLoad,d=e.currentSlide,p=e.centerMode,f=e.slidesToScroll,h=e.slidesToShow,g=e.useCSS;if(t&&n)return{};var v=a,w=void 0,b=void 0,S=void 0,E={},_={};if(o){if(!r&&(a<0||a>=l))return{};a<0?v=a+l:a>=l&&(v=a-l),u&&c.indexOf(v)<0&&c.push(v),E={animating:!0,currentSlide:v,lazyLoadedList:c},_={animating:!1}}else w=v,v<0?(w=v+l,r?l%f!=0&&(w=l-l%f):w=0):!m(e)&&v>d?v=w=d:p&&v>=l?(v=r?l:l-1,w=r?0:l-1):v>=l&&(w=v-l,r?l%f!=0&&(w=0):w=l-h),b=k(i({},e,{slideIndex:v})),S=k(i({},e,{slideIndex:w})),r||(b===S&&(v=w),b=S),u&&c.concat(s(i({},e,{currentSlide:v}))),g?(E={animating:!0,currentSlide:w,trackStyle:x(i({},e,{left:b})),lazyLoadedList:c},_={animating:!1,currentSlide:w,trackStyle:y(i({},e,{left:S})),swipeLeft:null}):E={currentSlide:w,trackStyle:y(i({},e,{left:S})),lazyLoadedList:c};return{state:E,nextState:_}},t.changeSlide=function(e,t){var n,o,r,a,s=e.slidesToScroll,l=e.slidesToShow,c=e.slideCount,u=e.currentSlide,d=e.lazyLoad,p=e.infinite;if(n=c%s!=0?0:(c-u)%s,"previous"===t.message)a=u-(r=0===n?s:l-n),d&&!p&&(a=-1===(o=u-r)?c-1:o);else if("next"===t.message)a=u+(r=0===n?s:n),d&&!p&&(a=(u+s)%c+n);else if("dots"===t.message){if((a=t.index*t.slidesToScroll)===t.currentSlide)return null}else if("children"===t.message){if((a=t.index)===t.currentSlide)return null;if(p){var f=C(i({},e,{targetSlide:a}));a>t.currentSlide&&"left"===f?a-=c:a<t.currentSlide&&"right"===f&&(a+=c)}}else if("index"===t.message&&(a=Number(t.index))===t.currentSlide)return null;return a},t.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""},t.swipeStart=function(e,t,n){return"IMG"===e.target.tagName&&e.preventDefault(),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},t.swipeMove=function(e,t){var n=t.scrolling,o=t.animating,r=t.vertical,a=t.swipeToSlide,s=t.verticalSwiping,l=t.rtl,c=t.currentSlide,u=t.edgeFriction,d=t.edgeDragged,p=t.onEdge,f=t.swiped,g=t.swiping,v=t.slideCount,w=t.slidesToScroll,b=t.infinite,x=t.touchObject,S=t.swipeEvent,E=t.listHeight,_=t.listWidth;if(!n){if(o)return e.preventDefault();r&&a&&s&&e.preventDefault();var C=void 0,O={},I=k(t);x.curX=e.touches?e.touches[0].pageX:e.clientX,x.curY=e.touches?e.touches[0].pageY:e.clientY,x.swipeLength=Math.round(Math.sqrt(Math.pow(x.curX-x.startX,2)));var T=Math.round(Math.sqrt(Math.pow(x.curY-x.startY,2)));if(!s&&!g&&T>10)return{scrolling:!0};s&&(x.swipeLength=T);var M=(l?-1:1)*(x.curX>x.startX?1:-1);s&&(M=x.curY>x.startY?1:-1);var z=Math.ceil(v/w),P=h(t.touchObject,s),L=x.swipeLength;return b||(0===c&&"right"===P||c+1>=z&&"left"===P||!m(t)&&"left"===P)&&(L=x.swipeLength*u,!1===d&&p&&(p(P),O.edgeDragged=!0)),!f&&S&&(S(P),O.swiped=!0),C=r?I+L*(E/_)*M:l?I-L*M:I+L*M,s&&(C=I+L*M),O=i({},O,{touchObject:x,swipeLeft:C,trackStyle:y(i({},t,{left:C}))}),Math.abs(x.curX-x.startX)<.8*Math.abs(x.curY-x.startY)?O:(x.swipeLength>10&&(O.swiping=!0,e.preventDefault()),O)}},t.swipeEnd=function(e,t){var n=t.dragging,o=t.swipe,r=t.touchObject,a=t.listWidth,s=t.touchThreshold,l=t.verticalSwiping,c=t.listHeight,u=t.currentSlide,d=t.swipeToSlide,p=t.scrolling,f=t.onSwipe;if(!n)return o&&e.preventDefault(),{};var m=l?c/s:a/s,g=h(r,l),b={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p)return b;if(!r.swipeLength)return b;if(r.swipeLength>m){e.preventDefault(),f&&f(g);var y=void 0,S=void 0;switch(g){case"left":case"up":S=u+w(t),y=d?v(t,S):S,b.currentDirection=0;break;case"right":case"down":S=u-w(t),y=d?v(t,S):S,b.currentDirection=1;break;default:y=u}b.triggerSlideHandler=y}else{var E=k(t);b.trackStyle=x(i({},t,{left:E}))}return b},t.getNavigableIndexes=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,i=e.infinite?-1*e.slidesToShow:0,o=[];n<t;)o.push(n),n=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return o}),v=t.checkNavigable=function(e,t){var n=g(e),i=0;if(t>n[n.length-1])t=n[n.length-1];else for(var o in n){if(t<n[o]){t=i;break}i=n[o]}return t},w=t.getSlideCount=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n=void 0,i=r.default.findDOMNode(e.listRef).querySelectorAll(".slick-slide");if(Array.from(i).every(function(i){if(e.vertical){if(i.offsetTop+f(i)/2>-1*e.swipeLeft)return n=i,!1}else if(i.offsetLeft-t+p(i)/2>-1*e.swipeLeft)return n=i,!1;return!0}),!n)return 0;var o=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-o)||1}return e.slidesToScroll},b=t.checkSpecKeys=function(e,t){return t.reduce(function(t,n){return t&&e.hasOwnProperty(n)},!0)?null:console.error("Keys Missing:",e)},y=t.getTrackCSS=function(e){b(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var t=void 0,n=void 0,o=e.slideCount+2*e.slidesToShow;e.vertical?n=o*e.slideHeight:t=_(e)*e.slideWidth;var r={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";r=i({},r,{WebkitTransform:a,transform:s,msTransform:l})}else e.vertical?r.top=e.left:r.left=e.left;return e.fade&&(r={opacity:1}),t&&(r.width=t),n&&(r.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?r.marginTop=e.left+"px":r.marginLeft=e.left+"px"),r},x=t.getTrackAnimateCSS=function(e){b(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=y(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},k=t.getTrackLeft=function(e){if(e.unslick)return 0;b(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,i=e.slideIndex,o=e.trackRef,a=e.infinite,s=e.centerMode,l=e.slideCount,c=e.slidesToShow,u=e.slidesToScroll,d=e.slideWidth,p=e.listWidth,f=e.variableWidth,h=e.slideHeight,m=e.fade,g=e.vertical;if(m||1===e.slideCount)return 0;var v=0;if(a?(v=-S(e),l%u!=0&&i+u>l&&(v=-(i>l?c-(i-l):l%u)),s&&(v+=parseInt(c/2))):(l%u!=0&&i+u>l&&(v=c-l%u),s&&(v=parseInt(c/2))),t=g?i*h*-1+v*h:i*d*-1+v*d,!0===f){var w,y=r.default.findDOMNode(o);if(w=i+S(e),t=(n=y&&y.childNodes[w])?-1*n.offsetLeft:0,!0===s){w=a?i+S(e):i,n=y&&y.children[w],t=0;for(var x=0;x<w;x++)t-=y&&y.children[x]&&y.children[x].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(p-n.offsetWidth)/2}}return t},S=t.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},E=t.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},_=t.getTotalSlides=function(e){return 1===e.slideCount?1:S(e)+e.slideCount+E(e)},C=t.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+O(e)?"left":"right":e.targetSlide<e.currentSlide-I(e)?"right":"left"},O=t.slidesOnRight=function(e){var t=e.slidesToShow,n=e.centerMode,i=e.rtl,o=e.centerPadding;if(n){var r=(t-1)/2+1;return parseInt(o)>0&&(r+=1),i&&t%2==0&&(r+=1),r}return i?0:t-1},I=t.slidesOnLeft=function(e){var t=e.slidesToShow,n=e.centerMode,i=e.rtl,o=e.centerPadding;if(n){var r=(t-1)/2+1;return parseInt(o)>0&&(r+=1),i||t%2!=0||(r+=1),r}return i?t-1:0};t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},96:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(1);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=r.b.div.withConfig({componentId:"sc-1tp71gf-0"})(["display:",";justify-content:center;align-items:center;position:fixed;width:100%;height:100%;height:100vh;z-index:1020;top:0px;left:0px;background-color:rgba(0,0,0,0.8);"],function(e){return e.show?"flex":"none"}),f=r.b.div.withConfig({componentId:"sc-1tp71gf-1"})(["display:flex;justify-content:center;@media (max-width:600px){width:100%;max-height:85vh;}"]),h=r.b.img.withConfig({componentId:"sc-1tp71gf-2"})(["width:25px;height:25px;margin:4px;margin:-5px 0px 0px 8px;background-color:white;border-radius:50%;&:hover{cursor:pointer;}"]),m=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=l(t).call(this,e),n=!r||"object"!==a(r)&&"function"!=typeof r?u(o):r,d(u(u(n)),"modalWrapperRef",Object(i.createRef)()),d(u(u(n)),"escFunction",function(e){27===e.keyCode&&n.props.handleClose()}),d(u(u(n)),"onClickListener",function(e){e.target===n.modalWrapperRef.current&&n.props.handleClose()}),n}var r,m,g;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,i["Component"]),r=t,(m=[{key:"shouldComponentUpdate",value:function(e){return this.props.show!==e.show&&(e.show?document.body.style.overflow="hidden":document.body.style.overflow="initial",!0)}},{key:"componentDidMount",value:function(){!this.props.disableBackdropClick&&this.props.show&&(document.addEventListener("keydown",this.escFunction,!1),window.addEventListener("click",this.onClickListener,!1))}},{key:"componentDidUpdate",value:function(){this.props.disableBackdropClick||(this.props.show?(document.addEventListener("keydown",this.escFunction,!1),window.addEventListener("click",this.onClickListener,!1)):(document.removeEventListener("keydown",this.escFunction,!1),window.removeEventListener("click",this.onClickListener)))}},{key:"render",value:function(){return o.a.createElement(p,{className:this.props.className,show:this.props.show,ref:this.modalWrapperRef},o.a.createElement(f,{className:"modal_content"},this.props.children,this.props.showCloseBtn?o.a.createElement(h,{alt:"close",src:n(361),onClick:this.props.handleClose}):null))}}])&&s(r.prototype,m),g&&s(r,g),t}();m.defaultProps={showCloseBtn:!0},t.a=m}},[[1335,1,0,2]]]);y will have access to the data/documents pertaining to the Issue at the office of the Registrar only as provided herein. The Registrar undertakes not to disclose or cause to be disclosed any such information to any other person without the prior written consent of the Company, as the case may be.</li>
<li>The Registrar will handle the Assignment from its office at Mumbai, which has been declared to SEBI and approved by it for carrying on its activities. This office address shall be printed in all relevant stationery pertaining to the Issue.</li>
<li>The Issue stationery including certificates, letters of Allotment and, Allotment/Allocation Advice shall be kept ready and handed over to the Registrar by the Company within three days from the date on which Registrar specifies the quantum of Issue stationary required to be printed and the Company shall be responsible for any delay on this account. The Company will arrange to obtain prior approval for the Issue stationery from the Stock Exchange.</li>
<li>The Company shall make available in advance to the Registrar requisite funds for postage, mailing charges for dispatching of Allotment Letters/Allotment/Allocation Advice, etc., within two Working Days from the date of closure of the Issue. On closure of the issue period, the Registrar will submit an estimate of the work done and the funds required for postage. The Registrar should maintain a proper account of the amount spent by it on behalf of the Company. The Registrar agrees to return the excess funds to the Company in case the amount on actuals is less than the estimated account.</li>
<li>The Registrar will extend all necessary assistance to the public representative deputed by SEBI and the Designated Stock Exchange. The Registrar shall also assist in releasing of the bank guarantee submitted with the Stock Exchanges. In the case of over subscription, allotment will be done in the presence of a Stock Exchange representative and the Registrar will extend all facilities to complete the allotment process smoothly and speedily. The Company shall also extend necessary help to the Registrar in such matters.</li>
<li>The Registrar shall act as a nodal agency for redressing complaints of investors, including providing guidance to investors regarding approaching the concerned Designated Intermediary. The Registrar shall extend all necessary support to the Company, the LM, the SCSBs, the Registered Broker and the Syndicate as may be required for the smooth and speedy functioning of the ASBA process.</li>
<li>The Company agree and acknowledge that the Registrar may request physical Application Forms directly from the Syndicate, SCSBs and the Registered Brokers in the event of exceptional circumstances such as discrepancy or invalidity in relation to PAN, DP ID or Client ID and investor complaints/grievances.</li>
<li>The Registrar shall liaise with the Company to ensure that the Equity Shares Issued as part of Offer for Sale are transferred to a share escrow account a day prior to the Issue Opening Date. This will be done along with the LM.</li>
<li>The Registrar will finalise various post- Issue monitoring reports such as the three-day report or final Issue monitoring report, along with the relevant documents/certificates, in consultation with the post- Issue merchant banker, to be submitted to SEBI within the stipulated time.</li>
<li>The Registrar will provide all relevant statements/reports to ensure commencement of trading within the timelines mentioned in the Offer Documents, in consultation with the Company and the LM.</li>
<li>The Company agrees that formats of all reports, statements, share certificates and other documents shall be in conformity with the standard designs approved by the Stock Exchange designated by the Company and the SEBI, as applicable.</li>
<li>Subject to applicable law, all fees and expenses relating to the Issue shall be borne by the Company. The fees and charges payable to the Registrar for handling the Assignment shall be as specified in <strong>Schedule II</strong> hereto, after deducting all taxes, duties and levies as per applicable law, provided that if the Registrar is unable to perform the Assignment as set out in this Agreement, the Registrar shall refund all sums that may have been paid to it by the Company, directly, as the case may be, except for any out-of-pocket expenses.</li>
<li>The Company agrees to take a special contingency insurance policy to cover risk arising out of fraud, forgery, errors of commission/omission etc.</li>
<li>If performance by any Party of any obligation under or pursuant to this Agreement is prevented, restricted or interfered with by reason of complete collapse or dislocation of business in the financial market of the country due to war, insurrection or any other serious, sustained, political or industrial disturbance or in any other event beyond the reasonable control of the Party seeking to rely on it caused by force majeure, then the Party so affected (the "<strong>Affected Party</strong>") shall on giving notice to the other Parties be excused from such performance to the extent of such prevention, restriction or interference, provided that it shall use its best endeavors to resume performance of its obligations hereunder as soon as the cause of such prevention, restriction or interference is removed and to mitigate the consequences of such prevention, restriction or interference. On receipt of notice from the Affected Party, the other Party shall be similarly excused from performance of its respective obligations hereunder during such period as performance of the Affected Party's obligations is suspended. The Company may terminate this Agreement on receipt of such a notice from the Registrar.</li>
<li>This Agreement shall be valid until the expiry of one year from the date of closing of the Issue, provided that the Company with respect to itself, may terminate this Agreement, with or without providing any reason, with prior written notice of 10 days, to the other Parties. Further, the Company shall be entitled to forthwith terminate this Agreement vis-à-vis the Registrar, subject to written notice, if (i) the Registrar's Certificate of Registration is suspended/withheld/cancelled or SEBI or any other regulatory authority or any court or tribunal debars or suspends or stops the Registrar from carrying on its activities, (ii) the Registrar is in any way prohibited or restrained, either by an order or direction of the SEBI, any other regulatory authority or any court or tribunal or in any other manner, from carrying on registrar and share transfer agent activities. For avoidance of doubt, if the Company, in consultation with the LM, decide not to proceed with the Issue, this Agreement shall stand terminated immediately on written notice to the Registrar.</li>
<li>The Registrar shall immediately inform the Company and the LM in writing, if, due to any unavoidable/regulatory reasons, its Certificate is cancelled, suspended or withheld by SEBI, or if it is prohibited or restricted in performing the Assignment by SEBI or any court or regulatory authority, and with progress with regard to any legal action initiated against it/or any of its group entities by any regulator from time to time. In any such event, if it is unable to continue to act as a Registrar to the Issue or perform the Assignment, it shall immediately inform the Company and the LM and take steps, in consultation with and as per the directions of the Company and the LM, to enable smooth transition of data held by the Registrar in relation to the Issue, at no cost to the Company to another registrar as may be appointed by the Company in consultation with the LM.</li>
<li>On the expiry or termination of this Agreement, all data and documents in the possession or custody of the Registrar shall be handed over to the Company as may be applicable, and/or the newly appointed registrar to the Issue. In this relation, the Registrar shall, within three working days of being instructed by the Company, transfer all data and documents in its possession in respect of the Issue and the Equity Shares and extend all necessary cooperation, to such other registrar/depository as instructed by the Company, towards taking over duties and responsibilities as the Registrar to the Issue.</li>
<li>The Registrar shall redress investor complaints within seven days of receipt, during the currency of this Agreement, and shall continue to do so during the period it is required to maintain records under the SEBI RTA Regulations. The Company shall extend necessary cooperation to the Registrar for its complying with the SEBI RTA Regulations. The Registrar shall provide a status report of investor complaints and grievances on a fortnightly basis to the Company and the LM.</li>
<li>In an event of default of any of the duties, obligations and responsibilities of the Registrar herein or any error or failure in such services rendered by the Registrar, the Registrar, at its own cost, take all measures to immediately rectify such defaults, errors or failure within two days of receipt of written notice by the Company. The Company shall be entitled to forthwith terminate the Agreement, if the Registrar is unable to rectify such defaults within two days of receipt of written notice by the Company, of such default, error or breach.</li>
<li>The Registrar shall be directly responsible to, and hereby indemnifies and shall keep indemnified, the Company and the LM and their respective directors, officers, employees, agents, affiliates, representatives and advisors from and against all suits, claims, actions, losses and demands which may be made or commenced against any such indemnified parties, by SEBI and/or the Stock Exchanges and/or any other statutory or regulatory authority or a court of law or any investor or holder of Equity Shares or other third party as a consequence of any act, omission, error, failure or deficiency on the part of the Registrar or any of its directors, officers, employees, agents, affiliates or representatives in performing the Assignment and services hereunder, provided that the Registrar shall not be liable for any indirect or consequential loss caused due to error or omission committed by it in good faith, where the Registrar has not acted negligently or committed an act of willful misconduct.</li>
<li><p>The Registrar warrants and other parties agree to the following understanding with regard to the execution of instructions carried out by the Registrar:</p>
<p>That they authorise Registrar to act from time to time on instructions given in any manner (including but not limited to verbal and electronic instructions) in circumstances where Registrar reasonably believe those instructions have emanated from them, Lead Manager or any person with authority to act on their behalf.</p>
<p>That the parties understand and acknowledge that the electronic transmission of information via the internet or otherwise, has inherent risks (particularly the risk of access by unauthorised parties). Unless otherwise agreed, despite the inherent risks Registrar is authorised by other parties to this agreement to communicate electronically with themselves / Lead Managers and all third parties on all matters related to the Engagement. Accordingly, the company and Lead Manager agrees that Registrar shall have no liability to them for any Loss arising directly from the use of electronic communications, except where caused by its own negligence.</p>
<p>Registrar will not be liable if any Loss is due to the provision of false, misleading or incomplete information or documentation or due to the acts or omissions of any person(s) other than Registrar.</p>
<p>Registrar will exercise all reasonable and proper skill and attention necessarily required to discharge its duty of care to the Company for rendering the Services. However, Registrar's work is not designed to investigate nor interrogate for fraud and/or dishonesty (actual or possible) and accordingly the same shall not be deemed to be a part of Registrar's scope of work.</p>
<p>Registrar's staff that may be deployed on this assignment from time to time have a specific agreement with Registrar which prevents them from employment opportunities with any of its clients, without Registrar's specific prior consent. In the event that the Company contemplates offering an employment opportunity to any of Registrar's existing staff, the same must not be with respect of a staff with whom you have had dealings in connection with the Engagement during the 12 (twelve) months immediately prior to their approach without Registrar's specific prior written consent.</p></li>
<li>The Company will bear expenses for legal advice or action which may have to be taken by it for no lapse on the part of the Registrar but for any eventuality which may arise in connection with the Issue.</li>
<li>The Registrar may have to provide certain information regarding the investors to certain statutory and regulatory authorities including, without limitation, income tax authorities. The Parties acknowledge that providing such information strictly for such purpose shall not be in violation of this Agreement.</li>
<li><p>Any notice, communication or documents may be given by personal delivery, registered or speed post, or by facsimile. The notice, communication or document shall be deemed to have been served on the Party to whom it is given if given by personal delivery when so delivered at the address of such Party, if given by registered or speed post on expiration of three working days after the notice shall have been delivered to the post office for onward dispatch and if given by facsimile, on transmission thereof, provided however that any notice by fax shall be confirmed in writing. All notices to the Parties shall be addressed as under:</p>
<p><strong>To the Issuer</strong></p>
<p>Name : --------</p>
<p>Designation : --------</p>
<p>Address : -------</p>
<p>Tel No. : --------</p>
<p><strong>To the Registrar</strong></p>
<p>Name : ---------</p>
<p>Designation : ---------</p>
<p>Address : --------</p>
<p>Tel No : ---------</p>
<p>Fax No : ---------</p>
<p> </p>
<p>Any change in the above shall be intimated by the Party concerned to the other Parties and such change shall be effective five working days thereafter or such later date as may be specified by the Party whose address/contact details are changed.</p>
</li>
<li>Non-compliance with any of the covenants contained herein by any Party may be reported to the SEBI within seven days by any other Party and shall also be reported to the LM immediately.</li>
<li>If any dispute, difference or claim arises between the Parties in connection with this Agreement or the validity, interpretation, implementation or alleged breach of the terms of this Agreement or anything done or omitted to be done pursuant to this Agreement, the Parties shall attempt in the first instance to resolve such dispute through negotiation. If the dispute is not resolved through negotiation within 15 days after commencement of discussions, then any Party may refer the dispute for resolution to an arbitration tribunal consisting of three arbitrators (one to be appointed by the Registrar, one by the Company and one jointly by the appointed arbitrators). All proceedings in any such Arbitration shall be conducted under The Arbitration and Conciliation Act, 1996, and shall be conducted in English. The Arbitration shall take place in Mumbai, India.</li>
<li>Subject to Clause 39 above, any disputes arising in connection with this Agreement shall be subject to courts having jurisdiction in Mumbai, India. This Agreement shall be governed by and construed exclusively in accordance with the laws of India, without reference to conflict of laws rules.</li>
<li>The Registrar shall not be entitled to assign any of its rights, duties or obligations hereunder without the prior written consent of the other Parties.</li>
<li>This Agreement constitutes the entire understanding among the Parties and supersedes all prior discussions and agreements, oral or written, between any of the Parties relating to the Assignment.</li>
<li>No amendment or modification of this Agreement shall be valid or binding on the Parties unless made in writing and signed on behalf of each of the Parties by its authorized officer or representative.</li>
<li>The failure or delay of any party to enforce at any time any provision of this Agreement shall not constitute a waiver of such Party's right thereafter to enforce any provision of this Agreement.</li>
<li>The Registrar shall continue to be responsible for the Assignment until the termination of this Agreement, provided that Clauses 5, 6, 7, 8, 9, 10, 11, 12, 23, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 44 and this Clause 45 shall survive termination of this Agreement. For avoidance of doubt, it is clarified that if the Agreement is prematurely terminated, the Registrar shall be entitled to only such expenses as are actually incurred until the date of such termination.</li>
<li>This Agreement may be executed in any number of counterparts, each of which shall be deemed to be an original, but such counterparts shall, together, constitute only one instrument.</li>
</ol>
<p>IN WITNESS THEREOF the parties have set their hands hereunto on the day and year hereinabove written.</p>
<p><strong><em>This signature page forms an integral part of the Registrar Agreement entered into by and among -------------</em></strong></p>
<p>__________________________</p>
<p>(Authorized Signatory)</p>
<p>Name: ----------</p>
<p>Designation: ------------------</p>
<p>has signed for and on behalf of ----------------</p>
<p> </p>
<p><strong>Witnessed By:</strong></p>
<p> </p>
<p>__________________________</p>
<p>(Authorized Signatory)</p>
<p>Name: -------------------</p>
<p>Designation: -------</p>
<p>has signed for and on behalf of -------------</p>
<div itemscope itemtype="https://schema.org/Table">
<h3 itemprop="about">Witnessed By:</h3>
<div class="table-responsive">
<table class="table table-bordered table-striped table-hover w-auto">
<thead>
<tr>
<th>
<p>Sr. No</p>
</th>
<th>
<p>Name </p>
</th>
<th>
<p>Complete Address</p>
</th>
<th>
<p>Signature</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.</td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>2.</td>
<td> </td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>
</div>
</div>
<p> </p>
<p style="text-align:center;"><strong><u>SCHEDULE I</u></strong></p>
<div itemscope itemtype="https://schema.org/Table">
<h3 itemprop="about">Allocation of activities pertaining to the Assignment between the Company and the Registrar</h3>
<div class="table-responsive">
<table class="table table-bordered table-striped table-hover w-auto">
<thead>
<tr>
<th>
<p>#</p>
</th>
<th>
<p>Activity</p>
</th>
<th>
<p>Party Responsible</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>I.</strong></p>
</td>
<td>
<p><strong>PRE-ISSUE WORK</strong></p>
</td>
<td> </td>
</tr>
<tr>
<td>
<p>1.</p>
</td>
<td>
<p>Design of Application Form, bank schedule, pre-printed stationery, in conformity with applicable law</p>
</td>
<td>
<p>LM/Registrar</p>
</td>
</tr>
<tr>
<td>
<p>2.</p>
</td>
<td>
<p>Preparing and issuing detailed instructions on the procedure to be followed by the Designated Intermediaries and bid as per information provided on the websites of the stock exchanges</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>3.</p>
</td>
<td>
<p>Placing of orders for and procuring pre-printed stationery</p>
</td>
<td>
<p>Company</p>
</td>
</tr>
<tr>
<td>
<p><strong>II.</strong></p>
</td>
<td>
<p><strong>ISSUE WORK</strong></p>
</td>
<td> </td>
</tr>
<tr>
<td>
<p>4.</p>
</td>
<td>
<p>Obtaining the electronic bid data from the Stock Exchange</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>5.</p>
</td>
<td>
<p>a. Collection of final certificate and schedule pages from nodal branches of SCSBs</p>
<p>b. Collection of Application Forms from the Designated Intermediaries</p>
<p>c. Processing all Application Forms in respect of the Issue</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>6.</p>
</td>
<td>
<p>On closure of the Issue, collecting Bid files from the Stock Exchanges and validating the DP ID, Client ID and PAN with the Depositories' database and providing a file through the LM to the concerned syndicate member of the error Bids, which will be considered as invalid</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>7.</p>
</td>
<td>
<p>Informing the Stock Exchanges/SEBI and providing necessary certificates to Lead manager on closure of the Issue</p>
</td>
<td>
<p>Company/Registrar</p>
</td>
</tr>
<tr>
<td>
<p>8.</p>
</td>
<td>
<p>Preparing Underwriter statement in the event of under subscription and seeking extension from Stock Exchange for processing</p>
</td>
<td>
<p>Registrar/</p>
<p>Company</p>
</td>
</tr>
<tr>
<td>
<p>9</p>
</td>
<td>
<p>Sending the electronic bid file with certain fields like application number and amount or any other additional fields as may be required by the SCSBs to all the SCSBs to facilitate validation of Application Forms for Bids entered in the Stock Exchanges</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>10.</p>
</td>
<td>
<p>Reconciliation of number of forms, Equity Shares applied for and money blocked with final certificate received from the SCSBs</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>11.</p>
</td>
<td>
<p>Reconciliation of compiled data received from Stock Exchange(s) in respect of Application Forms</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>12.</p>
</td>
<td>
<p>Matching the reconciled data with the Depositories; database for correctness of DP ID, Client ID and PAN quoted in the Bid downloaded from the Stock Exchanges</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>13.</p>
</td>
<td>
<p>Reject all forma in the electronic file which do not get validated for the DP ID/Client ID and/or PAN with the Depositories' database</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>14</p>
</td>
<td>
<p>Reconciliation on a regular basis of the data in the Bid registered on the online IPO system of stock exchanges with SCSB data</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>15.</p>
</td>
<td>
<p>Matching with data/reconciliation with Bank Schedules and the final certificate</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>16.</p>
</td>
<td>
<p>Collection of requests, if any for withdrawal of the Application Form and acting thereon received before finalization of the Basis of Allotment</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>17.</p>
</td>
<td>
<p>Uploading of beneficiary account details to depositories</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>18.</p>
</td>
<td>
<p>Matching with depository details</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>19.</p>
</td>
<td>
<p>Identify and reject Bids with technical faults and multiple Bids with reference to applicable law and procedure; prepare the list of technical rejection cases including rejected Bids based on mismatch between electronic Bid details and Depositories' database</p>
</td>
<td>
<p>Registrar / BRLM/ Company/</p>
</td>
</tr>
<tr>
<td>
<p>20.</p>
</td>
<td>
<p>Preparation of statement for deciding Basis of Allotment by the Company in consultation with the Designated Stock Exchange</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>21.</p>
</td>
<td>
<p>Keeping a proper record of applications and monies blocked from the investorsand paid to the Company/SCSBs/Bankers to the Issue</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>22.</p>
</td>
<td>
<p>Finalising Basis of Allotment after approval of the Designated Stock Exchange</p>
</td>
<td>
<p>Company/ Registrar</p>
</td>
</tr>
<tr>
<td>
<p>23.</p>
</td>
<td>
<p>Preparation of fund transfer schedule based on the approved Basis of Allotment</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>24.</p>
</td>
<td>
<p>Assisting the company in Instructing the Depositary to carry on the lock-in for pre-Issue capital</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>25.</p>
</td>
<td>
<p>Preparation of list of Allotted entitled to be allocated Equity Shares</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>26.</p>
</td>
<td>
<p>Preparing a statement of Bids rejected, separately for QIBs, NonInstitutional investors and Retail Individual investors, along with reasons for rejection of the Bids</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>27.</p>
</td>
<td>
<p>Allotment of Equity Shares on the basis of formula devised by Stock Exchange</p>
</td>
<td>
<p>Company/Registrar</p>
</td>
</tr>
<tr>
<td>
<p>28.</p>
</td>
<td>
<p>Once Basis of Allotment is approved by Designated Stock Exchange, the Registrar shall provide the following details to the Controlling Branches (CB) of each SCSB, along with instructions to unblock the relevant bank accounts and transfer the requisite money to the Company's account with in the timelines specified in the ASBA process:</p>
<ol>
<li>Number of shares to be allotted against each valid ASBA application</li>
<li>Amount to be transferred from relevant bank account to the Company's Public Issue Account, for each valid ASBA</li>
<li>The date by which the funds referred in sub-para (ii) above, shall be transferred to the Company's account.</li>
<li>Details of rejected ASBAs, if any, along with the reasons for rejections and details of withdrawn/unsuccessful ASBAs, if any, to enable SCSBs to unblock the respective bank accounts.</li>
</ol>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>29.</p>
</td>
<td>
<p>Assisting in obtaining certificate from auditors/practicing company secretary that the Allotment has been made as per the approved Basis of Allotment</p>
</td>
<td>
<p>Company/Registrar</p>
</td>
</tr>
<tr>
<td>
<p>30.</p>
</td>
<td>
<p>Preparation of reverse list, list of Allottees and non-Allottees as per the Basis of Allotment approved by the Designated Stock Exchange for applicable categories</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>31.</p>
</td>
<td>
<p>Preparation of allotment register-<em>cum</em>-return statement, index register</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>32.</p>
</td>
<td>
<p>Credit to respective demat accounts in the time specified in the Prospectus and as prescribed by SEBI</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>33.</p>
</td>
<td>
<p>Preparation of list of Registered Brokers, SCSBs, SEBI registered RTAs and DPs authorized to accept and bid as per information provided on the websites of the Stock Exchanges, to which brokerage is to be paid including brokerage for bids through the E-IPO mechanism</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>34.</p>
</td>
<td>
<p>Printing of distribution schedule for submission to the Stock Exchanges where listing is being done.</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>35.</p>
</td>
<td>
<p>Overprinting of Allotment Advice</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>36.</p>
</td>
<td>
<p>Mailing of documents by registered post wherever required</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>37.</p>
</td>
<td>
<p>Binding of application forms, application schedule and computer outputs</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>38.</p>
</td>
<td>
<p>Payment of consolidated stamp duty or procuring and affixing stamps of appropriate value</p>
</td>
<td>
<p>Company</p>
</td>
</tr>
<tr>
<td>
<p>39.</p>
</td>
<td>
<p>Dispatch of CANs and Allotment Advice within the timeframe specified in Offer Documents and applicable law</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>40.</p>
</td>
<td>
<p>To ensure that Equity Shares are Allotted only to permitted categories of investors</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>41.</p>
</td>
<td>
<p>To ensure that Equity Shares are Allotted to persons and entities in accordance with the provisions of the DP and the Prospectus</p>
</td>
<td>
<p>Registrar/Company</p>
</td>
</tr>
<tr>
<td>
<p>42.</p>
</td>
<td>
<p>To ensure settlement of all investor complaints</p>
</td>
<td>
<p>Registrar/Company</p>
</td>
</tr>
<tr>
<td>
<p>43.</p>
</td>
<td>
<p>Publishing the Allotment advertisement before commencement of trading, prominently displaying the date of commencement of trading, in all newspapers where the Issue opening/closing advertisements have appeared earlier</p>
</td>
<td>
<p>Registrar/Company</p>
</td>
</tr>
<tr>
<td>
<p>44.</p>
</td>
<td>
<p>Providing all relevant reports for listing, trading of Equity Shares, within the timelines mentioned in the Offer Documents, in consultation with the Company and the LM</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>45.</p>
</td>
<td>
<p>Providing information for Form FC-GPR/FC-TRS, other forms for filing with Reserve Bank of India/relevant authorities in relation to allotment of shares/receipt of funds from NRIs, FIIs, non-residents etc.</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>46.</p>
</td>
<td>
<p>Finalizing various post- Issue monitoring reports, along with relevant documents/certificates to be submitted to SEBI within the stipulated time in consultation with the Company/LM</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
<tr>
<td>
<p>47.</p>
</td>
<td>
<p>Establishing proper grievance redressal mechanism during the Issue period and after the closure of the Issue, as per the Offer Documents</p>
</td>
<td>
<p>Registrar/Company</p>
</td>
</tr>
<tr>
<td>
<p>48.</p>
</td>
<td>
<p>Calculation of commission payable to the Registered Brokers, SCSBs, SEBI registered RTAs and DPs authorized to accept Bids as per information provided on the websites of the Stock Exchanges and providing details of such commission to the Company and the LM</p>
</td>
<td>
<p>Registrar</p>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p> </p><p> </p><p> </p>
<p style="text-align:center;"><strong><u>SCHEDULE II</u></strong></p>
<div itemscope itemtype="https://schema.org/Table">
<h3 itemprop="about">Fees Payable to the Registrar</h3>
<p>The following is our fee structure for all the activities in a Fix Price Issue proposal:</p>
<div class="table-responsive">
<table class="table table-bordered table-striped table-hover w-auto">
<thead>
<tr>
<th>
<p>Sr. No</p>
</th>
<th>
<p>Particulars</p>
</th>
<th>
<p>Unit</p>
</th>
<th>
<p>Rates</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td>
<p>Processing Fees</p>
</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td>
<p>Validating application data with depositories</p>
</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>
<p>3</p>
</td>
<td>
<p>Hosting allotment / non allotment data on our website</p>
</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>
<p>4</p>
</td>
<td>
<p>Basis of Allotment</p>
</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>
<p>5</p>
</td>
<td>
<p>Listing related reports</p>
</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>
<p>6</p>
</td>
<td>
<p>Written Communication, by email, fax, etc. for a period of 3 Months from the closure of issue.</p>
</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>
<p>7</p>
</td>
<td>
<p>Follow up for application forms collections from banks, reporting collections, handling and servicing of pre and post-issue investors queries in person, or phone.</p>
</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>
<p>8</p>
</td>
<td>
<p>Email Intimation for unblocking/allotment</p>
</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>
<p>9</p>
</td>
<td>
<p>SMS intimation as per latest SEBI circular dated April 20, 2022</p>
</td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>
</div>
</div>
<p>The charges towards adequate Insurance cover, Audit, and charges payable to the Depositories for Credit of Shares in the respective account of Investors, will be made directly by the company to the Insurance Company / Depositories. The Insurance policy would cover risk arising out of fraud, forgery, errors of commission / omission, etc.</p>
<p><strong>Reimbursement of other expenses</strong></p>
<p>The cost of easy read computer stationery, labor charges and other material inputs, postage, envelopes, binding, sealing, conveyance and travel expenses, telephone / telex / fax / telegram expenses, courier charges, (including Speed Post charges), taxes and levies, miscellaneous correspondence with investors, etc., will have to be reimbursed by the Company on actual basis. Supporting Bills / vouchers will be forwarded to the Company wherever possible, and in the event of specific bills not being available, billing will be done on an approximate basis. </p>
<p><strong>Pre-printed stationery</strong></p>
<p>All pre-printed stationery, such as allotment advices, CAN-cum-Refund orders, envelopes and other related items will be supplied to us by the company so as to reach us at least 5 days in advance of the date of mailing.</p>
<p> </p>
<div class="card mt-3" style="max-width:300px;"> <div class="card-header text-white bg-dark"><h2 class="mt-0">SME IPO Enquiry</h2></div> <div class="card-body text-center pb-0" style="background-color:#ffffec;"> <p><b>SME Company Owners</b><br>We could help you get listed on the stock market.</p><a href="javascript:void(0);" class="btn btn-danger btn-sm mb-2" onClick="return popup_win('https://alpha.chittorgarh.com/leads_sme_ipo_lm.asp?ref='+encodeURIComponent(window.location.href))" title="SME IPO Enquiry Form">Contact us Today</a><p>Check our <a href="/book-modules/sme-ipo-guide-for-companies/3/" title="SME IPO Guide (for SME companies)">SME IPO Guide</a> <img src="/images/new.gif" title="New" alt="New"></p> </div></div>
<div class="row">
<div class="col-12">
<div class="float-start"><a href="https://www.chittorgarh.com/book-chapter/underwriting-agreement-for-sme-ipo/16/" title="Underwriting Agreement" class="btn btn-outline-dark">Previous Annexure</a></div>
</div>
</div>
</div>
</div>
<div class="row" itemscope itemtype="https://schema.org/FAQPage">
</div>
<div class="row" id="chapterlink">
<div class="col-12">
<div class="float-start"><a href="https://www.chittorgarh.com/book-chapter/underwriting-agreement-for-sme-ipo/16/" title="Underwriting Agreement" class="btn btn-outline-dark">Previous Annexure</a></div>
</div>
</div>
<span id="feedback"></span>
<hr>
<div class="row" id="AjaxFeedback" style="display:none;">
<div class="col-md-12">
<div style="text-align: center;"><img src="https://www.chittorgarh.com/images/loading.gif" height="50" width="50" alt="Loading..."></div>
</div>
</div>
<div id="StaticFeedback">
<div class="row mb-2">
<div class="col-md-12">
<h2> Comments</h2>
<button type="button" class="btn float-end btn-primary btn-xs" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?t=73&a=17&b=0')" title="Post New Message">Post New Message</button>
</div>
</div>
<div class="row">
<div class="col-12">
<p>Add a public comment...</p>
</div>
</div>
<div class="row text-center mb-3">
<div class="col-12">
<button type="button" class="btn btn-xs float-end btn-primary" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?t=73&a=17&b=0')" title="Post New Message">Post New Message</button>
</div>
</div>
</div>
</div>
<div class="col-12 col-md-12 col-lg-12 col-xl-2 mt-5 text-center ps-0" id="right">
<div class="row mx-1 mt-2">
<div class="col-12">
<img src="/images/special_offers.png" alt="special_offers" style="width: 182px;height:59px;"><br>By Popular <b>Stock Brokers</b>
</div>
</div>
<div class="row my-2 mx-1 border" style="background-color:#f0f8ff;">
<div class="col-12 py-2">
<img src="/images/ipo/zerodha_logo_small.gif" width="25" height="25" alt="Zerodha Review">&nbsp;&nbsp;
<a href="/stockbroker/zerodha/18/" title="Zerodha" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent">Zerodha</a>
<p><b>Free Eq Delivery & MF</b><br>
Flat &#8377;20 Per Trade in F&O</p>
<p><a href="https://tinyurl.com/broker-zerodha-homepage" target="_blank" title="Open an Account with Zerodha" class="btn btn-success btn-sm">Open Instant Account</a></p>
</div>
</div>
<div class="row my-2 mx-1 border" style="background-color:#ffffff;">
<div class="col-12 py-2">
<img src="/images/ipo/angel-broking-logo-small.png" width="35" height="39" alt="Angel Broking Review">&nbsp;&nbsp;
<a href="/stockbroker/angel-broking/14/" title="Angel Review" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent" class="text-decoration-none"><span style="color: #2e51ff;">Angel</span><span style="color: #8F4200;">One</span></a>
</div>
<p><b>Free Equity Delivery</b>
<br>Flat &#8377;20 Per Trade in F&O
<p><a href="https://tinyurl.com/broker-angel-one" target="_blank" title="Enquire to Angel Broking" class="btn btn-success btn-sm">Open FREE Demat Account</a></p>
</div>
<div class="row my-2 mx-1 border" style="background-color:#ffcc66;">
<div class="col-12 py-2"><a href="/stockbroker/motilal-oswal/5/" title="Motilal Oswal Review" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent">Motilal Oswal</a></div>
<p><b>30 days brokerage free trading</b>
<br>Free - Personal Trading Advisor</p>
<p><a href="https://tinyurl.com/broker-motilaloswal" target="_blank" title="Motilal Oswal Open Account for FREE!" class="btn btn-success btn-sm">Open Account</a></p>
</div>
<div class="row my-2 mx-1 border" style="background-color:#fff0f0;">
<div class="col-12 py-2"><img src="/images/ipo/kotak_securities_logo-small.jpg" width="25" height="25" alt="Kotak Securities Review">&nbsp;&nbsp;<a href="/stockbroker/kotak-securities/12/" title="Kotak Securities Review" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent">Kotak Securities</a><br>&nbsp;&nbsp;&nbsp;&nbsp;<small>(Trade Free Plan)</small></div>
<p><mark>FREE Intraday Trading (Eq, F&O)</mark><br>Flat &#8377;20 Per Trade in F&O</p>
<p><a href="https://tinyurl.com/broker-kotak" target="_blank" title="Open FREE Demat Account with Kotak Securities" class="btn btn-success btn-sm">Open Online Demat Account</a></p>
</div>
<div class="row my-2 mx-1 border" style="background-color:#f0f8ff;">
<div class="col-12 py-2">
<img src="/images/ipo/upstox-small-logo.png" width="25" height="25" alt="Upstox Review">&nbsp;&nbsp;
<a href="/stockbroker/upstox/33/" title="Upstox" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent">Upstox</a>
</div>
<p>
<b>FREE Account Opening</b><br>
Flat &#8377;20 Per Trade
</p>
<p><a href="https://tinyurl.com/broker-upstox" target="_blank" title="Enquire to Upstox" class="btn btn-primary btn-sm">Enquire Now</a></p>
</div>

<div class="row my-2 mx-1 border" style="background-color:#ffffcc;">
<div class="col-12 py-2"><img src="/images/ipo/prostocks-logo-small.png" width="50" height="50" alt="ProStocks Review">&nbsp;&nbsp;<a href="/stockbroker/prostocks/38/" title="ProStocks Review" style="color:#0C5539; font-size: 23px; line-height: 20px; font-weight:bold;" target="_parent">ProStocks</a></div>
<p><b>Unlimited @ &#8377;899/month</b>
<br>Rs 0 Demat AMC</p>
<p><a href="https://tinyurl.com/broker-prostocks" target="_blank" title="Open a FREE Online Trading Account with ProStocks Online" class="btn btn-success btn-sm">Open <b>FREE</b> Account</a></p>
</div>

<div class="row my-2 mx-1 border" style="background-color:#f0f8ff;">
<div class="col-12 py-2">
<img src="/images/ipo/fyers-logo-small.png" width="25" height="25" alt="Fyers Review">&nbsp;&nbsp;
<a href="/stockbroker/fyers_securities/32/" title="Fyers" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent">Fyers</a>
</div>
<p><b>Free Eq Delivery Trades</b>
<br>Flat &#8377;20 Per Trade in F&O</p>
<p><a href="https://tinyurl.com/broker-fyers" target="_blank" title="Open an account with Fyers" class="btn btn-success btn-sm">Open Instant Account</a></p>
</div>
<div class="row my-2 mx-1 border" style="background-color:#ffffff;">
<div class="col-12 py-2">
<img src="/images/ipo/paytrm-money-logo-small-25x25.jpg" width="25" height="25" alt="Paytm Money Review">&nbsp;&nbsp;<a href="/stockbroker/paytm-money/175/" title="Paytm Review" style="font-size: 20px; line-height: 20px; font-weight:bold;">Paytm Money</a>
</div>
<div class="col-12 pb-2">
<img src="/images/paytm_money_qr_code.png" width="75" height="75" alt="Paytm Money QR Code">
</div>
<p class="mb-1">Pay &#8377;0 brokerage for first 10 days</p>
<p class="mb-1">Flat &#8377;20 Per Trade</p>
<p><a href="https://tinyurl.com/broker-paytm" target="_blank" title="Paytm Money Online Account Opening" class="btn btn-info btn-sm">Open Instant Account Now!</a></p>
</div>

<div class="sticky-xl-top mt-5 text-center" style="top: 65px !important;z-index: 0;">
<div style="height: 50px;"></div>


<a href="https://tinyurl.com/broker-zerodha-homepage" target="_blank" title="Zerodha Instant Account Opening"><img class="img-fluid" src="/images/broker_campagn/zerodha/zerodha-250x300.png" alt="Open an Instant Account with Zerodha" width="250" height="300"></a>
</div>
</div>
<div id="footer" class="footer col-md-12 col-12 mt-5">
<div class="row ch-main ch-light-grey">
<div class="col-12">
<table class="table table-borderless w-100" style="height: 250px;">
<tr>
<td class="mb-2 align-middle text-center">

<div id="div-gpt-ad-1651808387027-0" style="margin: auto; height: 250px;">
<script>
												googletag.cmd.push(function() { 
													googletag.display('div-gpt-ad-1651808387027-0'); 
													googletag.pubads().refresh([gptAdSlots[3]]);
												});
											</script>
</div>
</td>
</tr>
</table>
</div>
</div>
<div class="row g-3 font-12 text-center">
<div class="col-md-3 col-12">
<a class="ch-button ch-grey d-block rounded-2 text-decoration-none my-1" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/contactus.asp'); return false;" style="white-space:nowrap;" title="Contact Us">CONTACT US</a>
</div>
<div class="col-md-3 col-12">
<a class="ch-button ch-grey d-block rounded-2 text-decoration-none" href="/sitemap" title="Sitemap">SITEMAP</a>
</div>
<div class="col-md-3 col-12">
<a class="ch-button ch-grey d-block rounded-2 text-decoration-none" href="/article/advertise-with-us/258/" title="Guest Book">ADVERTISE WITH US</a>
</div>
<div class="col-md-3 col-12">
<a class="ch-button ch-grey d-block rounded-2 text-decoration-none" href="/article/about-chittorgarh-com/259/" title="About Chittorgarh.com" target="_top">ABOUT US</a>
</div>
</div>
<div class="row text-center font-12 g-3 mt-3">
<div class="col-md-3 col-sm-6 col-12 mt-2">
<div class="h5"><a href="/report/top_10_discount_brokers_in_india_by_clients_at_nse/3/" title="Top 10 Discount Brokers in India"><b>Best Discount Broker in India</b></a></div>
<a href="/stockbroker/zerodha/18/" title="Zerodha Review"><mark>Zerodha</mark> <small>(&#8377;20 per Trade)</small></a><br>
<a href="/stockbroker/upstox/33/" title="Upstox Review">Upstox <small>(&#8377;20 per Trade)</small></a><br>
<a href="/stockbroker/angel-broking/14/" title="Angel Broking Review">Angel One <small>(&#8377;20 per Trade)</small></a><br>
<a href="/stockbroker/edelweiss_broking/34/" title="Nuvama Wealth Review"><mark>Nuvama Wealth</mark> <small>(&#8377;10 per Trade)</small></a><br>
<a href="/stockbroker/5paisa/4/" title="5Paisa Review">5Paisa <small>(&#8377;20 per Trade)</small></a><br>

<a href="/stockbroker/prostocks/38/" title="ProStocks Review">ProStocks <small><mark>(&#8377;899 Unlimited)</mark></small></a><br>
</div>
<div class="col-md-3 col-sm-6 col-12 mt-2">
<div class="h5"><a href="/report/top_10_full_service_brokers_by_clients_at_nse/5/" title="Top 10 Full-Service Brokers in India"><b>Best Full-Service Brokers in India</b></a></div>
<a href="/stockbroker/angel-broking/14/" title="Angel Broking Review"><mark>Angel One</mark></a><br>
<a href="/stockbroker/kotak-securities/12/" title="Kotak Securities Review">Kotak Securities</a><br>
<a href="/stockbroker/edelweiss_broking/34/" title="Nuvama Wealth Review"><mark>Nuvama Wealth</mark></a><br>
<a href="/stockbroker/icicidirect/1/" title="ICICI Direct Review">ICICI Direct</a><br>
<a href="/stockbroker/motilal-oswal/5/" title="Motilal Oswal Review">Motilal Oswal</a><br>
</div>
<div class="col-md-3 col-sm-6 col-12 mt-2">
<div class="h5"><a href="/report/unlimited-trading-plan-zero-brokerage-account/55/" title="Unlimited Trading Plan (Zero Brokerage Unlimited Trading)"><b>Unlimited Monthly Trading Plans</b></a></div>
<a href="/stockbroker/prostocks/38/" title="Prostocks Review"><mark>Prostocks</mark> <small>(&#8377;899 Unlimited)</small></a><br>
<a href="/stockbroker/sasonline/25/" title="SAS Online Review">SAS Online <small>(&#8377;999 Unlimited)</small></a><br>
<a href="/stockbroker/tradeplus/170/" title="Tradeplus Review">Tradeplus</a><br>
</div>
<div class="col-md-3 col-sm-6 col-12 mt-2">
<div class="h5"><b>Compare Share Broker in India</b></div>
<a href="/comparebroker/zerodha-vs-upstox/18/33/" title="Zerodha Vs Upstox"><mark>Zerodha Vs Upstox</mark></a><br>
<a href="/comparebroker/zerodha-vs-edelweiss_broking/18/34/" title="Nuvama Broking Vs Zerodha">Nuvama Vs Zerodha</a><br>

<a href="/comparebroker/icicidirect-vs-hdfc-securities/1/6/" title="ICICIDirect Vs HDFC Securities">ICICI Direct Vs HDFC Sec</a><br>
<a href="/comparebroker/5paisa-vs-zerodha/4/18/" title="5Paisa Vs Zerodha">Zerodha Vs 5Paisa</a><br>
<a href="/comparebroker/zerodha-vs-prostocks/18/38/" title="Zerodha Vs ProStocks">Zerodha Vs ProStocks</a><br>
</div>
</div>
<hr class="my-3">
<div class="row text-center">
<div class="col-lg-12 h5"><b>Download Mobile App</b></div>
</div>
<div class="row justify-content-md-center">
<div class="col-lg-2 col-md-6 col-sm-12 text-center"><a href="https://bit.ly/3tYCoxP" target="_blank"><img src="/images/google-play.png" title="Download Chittorgarh.com Mobile App" alt="Download Chittorgarh.com Mobile App" style="margin-top:5px;;height: 55px;width: 165px;"></a></div>
<div class="col-lg-2 col-md-6 col-sm-12 text-center"><a href="https://apple.co/3ymbN11" target="_blank"><img src="/images/app-store.png" title="Download Chittorgarh.com iOS Mobile App" alt="Download Chittorgarh.com iOS Mobile App" style="margin-top:5px;;height: 55px;width: 165px;"></a></div>
</div>

<div class="text-center font-12 ch-opacity mt-3">
<a href="/article/disclaimer-and-privacy-statement/238/">Disclaimer and Privacy Statement</a>.<br><br>
&copy; 2023 Chittorgarh Infotech Pvt Ltd. All Rights Reserved.<br>
</div>
<br>
</div>
</div>
</div>

<script src="/asset/js/common.js?v=14" defer></script>

<script>
		var g_leftnav = "Common";

		$(document).ready(function(){
			$('#right').css('display','none');
			$('#main').removeClass('col-xl-10').addClass('col-xl-12');
			$('#divShowList').hide();
			if($("#glossaryDiv").length == 0 && $("#faqs").length == 0) {
				$('#chapterlink').hide();
			}
		})

		function funToggleSideList(type) {
			if(type=="show")
			{
				$('#divSideList').show();
				$('#divShowList').hide();
			}else{
				$('#divSideList').hide();
				$('#divShowList').show();
			}
		}
	</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"854b01b05eb92189","version":"2024.2.0","token":"8d4061b05f4b4776849e94df693928a6"}' crossorigin="anonymous"></script>
</body>
</html>