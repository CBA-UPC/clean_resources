(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135],{90132:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),i=(n(67294),n(94184)),o=n.n(i),a=n(64933),c={sm:{prop:"thumbnail_url_16_9",resize:"440:*",retina:!0},md:{prop:"thumbnail_url_16_9",resize:"613:*",retina:!0},lg:{prop:"thumbnail_url_16_9",resize:"711:*",retina:!0}};n(97518);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=function(e){var t=e.className,n=u(e,["className"]);return(0,r.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},n,{className:o()("feature-card",t),srcSetsConfig:c,variant:"dark"}))}},50662:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(85893),i=(n(67294),n(94184)),o=n.n(i),a=n(64933),c=n(36488);n(70227);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=function(e){var t=e.className,n=u(e,["className"]);return(0,r.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},n,{srcSetsConfig:c.Z,className:o()(["feed-card",t])}))};n(29151);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var m=function(e){var t=e.className,n=e.items,i=e.rightSide;return(0,r.jsxs)("div",{className:o()(["feed",t]),children:[(0,r.jsx)("div",{className:"feed__list",children:(0,r.jsx)("ul",{children:n.map((function(e,t){if(e.id){var n=e;return(0,r.jsx)("li",{className:"feed__list__item feed__list__item--card",children:(0,r.jsx)(s,d({},n))},"feed_".concat(n.id))}return(0,r.jsx)("li",{className:"feed__list__item feed__list__item--other",children:e},"item_".concat(t))}))})}),i&&(0,r.jsx)("div",{className:"feed__right",children:i})]})}},60726:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),i=n(67294),o=n(94184),a=n.n(o),c=(n(57273),function(e){var t=e.children,n=e.className;return(0,r.jsx)("div",{className:a()(["loading-fallback",n]),children:t})});n(70641);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(e){var t=e.text,n=e.className,o=e.fallback,u=e.fallbackText,s=(0,i.useMemo)((function(){return l(t.split("")).concat([""],l(t.split("")),[""])}),[t]);return o?(0,r.jsx)(c,{children:u||t}):(0,r.jsxs)("div",{className:a()(["keep-reading-lockup",n]),children:[(0,r.jsx)("div",{className:"keep-reading-lockup__letters",children:s.map((function(e,t){return(0,r.jsx)("span",{className:"keep-reading-lockup__letters__char keep-reading-lockup__letters__char__".concat(t+1),style:{transform:"rotate(".concat(360/s.length*(t+1),"deg)")},children:e||(0,r.jsx)(r.Fragment,{children:"\xa0"})},t)}))}),(0,r.jsx)("svg",{className:"keep-reading-lockup__arrow",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14.8872 31.9354L-8.37638e-07 16.7883L1.52256 15.3243L13.9286 28.3316L13.9286 0.909232L16.0714 0.909232L16.0714 28.3316L28.4774 15.3243L30 16.7883L15.1128 31.9354L14.8872 31.9354Z",fill:"black"})})]})}},57379:function(e,t,n){"use strict";var r=n(85893),i=n(67294),o=n(50662);n(5271);.Z=function(e){var t=e.sharethrough,n=e.latest,c=e.features,l=e.ads,u=e.rightElements,s=(0,i.useMemo)((function(){for(var e=[],i=c?a(c):[],s=l?a(l):[],f=d=function(){var t=s.shift();null===t||void 0===t||t.forEach(()},m=function(){e.push((0,r.jsx)("div",{className:"latest-feed__separator"}))},p=!1,b=0;4*b<n.length;b++){var h=((null===u||void 0===u?void 0:u.length)||0)>0?u[b]:void 0,v=n.slice(4*b,4*(b+1));0===b&&t&&v.unshift(t),e.push((0,r.jsx)(o.Z,{items:v,rightSide:h,className:p?"feed--first":void 0},"feed_".concat(b))),p=!1,b%2===0?i.length>0?f():s.length>0?d():m():s.length>0?d():i.length>0?f():m()}return e}),[n,c,l]);return(0,r.jsx)("div",{className:"latest-feed",children:s})}},22700:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),i=n(67294),o=n(94184),a=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){return(0,r.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({viewBox:"0 0 16 12"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6 8l8-8 2 2-8 8-2 2-6-6 2-2 4 4z"})}))},u=(n(27219),function(e){var t=e.className,n=e.title,o=e.disclaimer,c=e.buttonText,u=e.variant,s=void 0===u?"dark":u,f=e.placeholder,d=e.defaultEmail,m=e.isSuccess,p=e.onSubmit,b=e.onFocus,h=e.bemRoot,v=void 0===h?"newsletter-signup":h,_=(0,i.useState)(d),y=_[0],g=_[1],j=function(e){e.preventDefault(),e.stopPropagation(),p&&p(y||"")};return(0,r.jsx)("div",{className:a()([v,t,s&&"".concat(v,"--").concat(s),m&&"".concat(v,"--success")]),children:(0,r.jsxs)("div",{className:"".concat(v,"__content"),children:[(0,r.jsx)("h3",{className:"".concat(v,"__title"),children:n}),(0,r.jsxs)("form",{className:"".concat(v,"__form"),onSubmit:j,children:[(0,r.jsx)("input",{type:"email",name:"email",id:"email",className:"".concat(v,"__input"),value:y,placeholder:f||"Your email",disabled:m,readOnly:m,onChange:onFocus:b}),(0,r.jsx)("label",{className:"user-newsletter__form__label",htmlFor:"email",children:"Your Email:"})," ",!m&&(0,r.jsx)("button",{className:"".concat(v,"__submit"),type:"submit",onClick:j,children:c}),m&&(0,r.jsx)("div",{className:"".concat(v,"__check"),children:(0,r.jsx)(l,{width:16,height:16})})]}),(0,r.jsx)("div",{className:"".concat(v,"__disclaimer"),children:o})]})})})},51156:function(e,t,n){"use strict";var r=n(85893),i=(n(67294),n(94184)),o=n.n(i),a=n(88812),c=n(97595),l=n(4021);n(87245);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}.Z=function(e){var t=e.className,n=void 0===t?"":t,i=(e.children,e.srcSetsConfig),f=e.thumbnail_url_1_1,d=e.thumbnail_url_10_4,m=e.thumbnail_url_16_9,p=s(e,["className","children","srcSetsConfig","thumbnail_url_1_1","thumbnail_url_10_4","thumbnail_url_16_9"]),b={thumbnail_url_1_1:f||"",thumbnail_url_10_4:d||"",thumbnail_url_16_9:m||""};return(0,r.jsx)(a.Z,{},p,{className:o()("placeholder-image",(0,l.Z)(b,i),n),srcSets:(0,c.ZP)(b,i),originalSrcSet:i}))}},92534:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),i=(n(67294),n(94184)),o=n.n(i),a=n(64933),c={sm:{prop:"thumbnail_url_1_1",resize:"214:*",retina:!0},md:{prop:"thumbnail_url_16_9",resize:"320:*",retina:!0},lg:{prop:"thumbnail_url_16_9",resize:"442:*",retina:!0}};n(48849);r s=function(e){var t=e.className,n=e.items,i=void 0===n?[]:n,l=e.variant,s=void 0===l?"light":l,f=e.srcSetsConfig,d=void 0===f?c:f;return!Array.isArray(i)||i.length<1?null:(0,r.jsx)("ul",{className:o()("three-up",t),children:i.map((function(e,t){return(0,r.jsx)("li",{className:"three-up__item",children:(0,r.jsx)(a.Z,u({},e,{className:"three-up__vice-card",srcSetsConfig:d,variant:s}))},"".concat(e.id,"_").concat(t))}))})}},18463:function(e,t,n){"use strict";n.d(t,{n:);var r=n(85893),i=n(67294),o=n(97762),a=n(94184),c=n.n(a);n(8021);=ar b="__AdLib.elementManager",h=("".concat(b,".registerSlot"),"".concat(b,".removeSlot"),function(e){!s,e);var t,n,i,a=p(s);function s(){var e;return l(this,s),(e=a.apply(this,arguments)).isAdFree=e.props.isAdFree,e}return t=s,(n=[{key:"componentDidMount",value:function(){var e,t=this.props.id,n=window.__AdLib,r=null===n||void 0===n||null===(e=n.elementManager)||void 0===e?void 0:e.registerSlot;t&&"function"===typeof r&&r(t)}},{key:"componentWillUnmount",value:function(){var e,t=this.props.id,n=window.__AdLib,r=null===n||void 0===n||null===(e=n.elementManager)||void 0===e?void 0:e.removeSlot;t&&"function"===typeof r&&r(t)}},{key:"renderContent",value:function(){var e,t,n,i=this.props,o=i.adUnitPath,a=i.changeCorrelator,l=i.className,u=i.disclaimer,s=i.id,f=i.shouldShowDisclaimer,d=i.slotId,m=i.targeting,p=i.viewportWidthRange,b=i.variant;return(0,r.jsxs)("div",{className:c()("vice-ad__container",(e={},t="vice-ad__container--".concat(b),n=b,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e),l),children:[u&&f?(0,r.jsx)("div",{className:"vice-ad__disclaimer",children:u}):null,(0,r.jsx)("div",{id:s,className:c()("vice-ad__ad","htlad-".concat(d)),"data-ad-unit-path":o,"data-unit":o,"data-change-correlator":a,"data-slot-id":d,"data-targeting":JSON.stringify(m),"data-viewport-width-range":JSON.stringify(p)})]})}},{key:"render",value:function(){return this.isAdFree?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("span",{className:"vice-ad",dangerouslySetInnerHTML:{__html:o.renderToString(this.renderContent())},suppressHydrationWarning:!0})}}])&&u(t.prototype,n),i&&u(t,i),s}(i.Component));h.defaultProps={changeCorrelator:!1,className:"",disclaimer:"Advertisement",shouldShowDisclaimer:!1,variant:""},t.Z=h},97518:function(){},29151:function(){},70227:function(){},70641:function(){},5271:function(){},57273:function(){},27219:function(){},87245:function(){},48849:function(){},8021:]);
//# sourceMappingURL=135-bb6ef751af82c790.js.map