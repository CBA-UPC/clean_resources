/*! For license information please see vendors~toast-container-rc.dd67aa6f6b10eb997c20.chunk.v7.js.LICENSE.txt */
(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[671],{"5DIn":"9Yx+":CU8J:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("NrNW"),a=n("B5kz"),o=n("CaQ9"),i=n("XcEc");function c(){var e=Object(r.a)().data,t=Object(o.a)().data;return Object(a.c)(["FeatureGates"],(,{staleTime:1/0,cacheTime:1/0,enabled:e&&t})}},CaQ9:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("NrNW"),a=n("B5kz");function o(){var e=Object(r.a)().data;return Object(a.c)(["Identity"],(,{cacheTime:1/0,staleTime:1/0,enabled:!!e})}},Etsp:GdGX:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var r=n("h8qh"),a=n("QjXU"),o=n("S6Pj"),i=n("mXGw"),c=n.n(i),u=n("Wws9"),s=n("5DIn"),l=n("p/uK"),f=n("sLnE"),d=n("DU/N"),m={animationIterationCount:1,animationDuration:"0.5s"},b=Object(l.a)({toastContainer:Object(a.__assign)(Object(a.__assign)(Object(a.__assign)(Object(a.__assign)({},f.a.borderRadius(d.a.borderRadiusMedium)),{boxShadow:d.a.shadow8}),f.a.padding("8px","8px","8px","12px")),{backgroundColor:d.a.colorNeutralBackgroundInverted,color:d.a.colorNeutralForegroundInverted,"@media screen and (min-width: 320px), (max-width: 1366px)":{minWidth:"260px"},"@media screen and (min-width: 1367px)":{minWidth:"320px"}}),toastContainerSlideUpIn:Object(a.__assign)(Object(a.__assign)({},m),{animationName:{from:{transform:"translate3D(0,100%,0)",opacity:"0"},to:{opacity:"1",transform:"translate3D(0,0,0)"}},animationTimingFunction:"ease-out"}),toastContainerSlideDownOut:Object(a.__assign)(Object(a.__assign)({},m),{animationName:{from:{transform:"translate3D(0,0,0)",opacity:"1"},to:{transform:"translate3D(0,-100%,0)",opacity:"0"}},animationTimingFunction:"ease-in"}),toastWrapper:Object(a.__assign)(Object(a.__assign)({bottom:"32px",left:"50%",position:"fixed",transform:"translateX(-50%)"},f.a.overflow("clip")),{overflowClipMargin:"8px",":focus-visible":{outlineColor:d.a.colorNeutralForegroundInverted,outlineStyle:"solid",outlineWidth:"1px",outlineOffset:"-3px"}}),toastWrapperAnimating:Object(a.__assign)(Object(a.__assign)({},f.a.borderRadius(0)),{boxShadow:"none"}),toastWrapperStill:Object(a.__assign)(Object(a.__assign)({},f.a.borderRadius(d.a.borderRadiusMedium)),{boxShadow:d.a.shadow8})}),p=function(e){var t=e.ariaBusy,n=e.ariaLabel,r=e.ariaLive,l=e.autoDismiss,f=e.callToAction,d=e.children,m=e.onDismiss,p=Object(i.useRef)(null),v=b(),g=Object(a.__read)(Object(i.useState)(!!d),2),S=g[0],h=g[1],y=Object(i.useRef)(Object(o.a)(document.activeElement)?document.activeElement:null),O=Object(a.__read)(Object(i.useState)("".concat(v.toastContainer," ").concat(v.toastContainerSlideUpIn)),2),j=O[0],E=O[1],w=Object(a.__read)(Object(i.useState)("".concat(v.toastWrapper," ").concat(v.toastWrapperAnimating)),2),_=w[0],x=w[1],k=Object(i.useCallback)((function(){S&&(h(!1),E("".concat(v.toastContainer," ").concat(v.toastContainerSlideDownOut)))}),[S,h,E,v.toastContainer,v.toastContainerSlideDownOut]),C=Object(i.useCallback)((function(){x("".concat(v.toastWrapper," ").concat(v.toastWrapperAnimating))}),[x,v.toastWrapper,v.toastWrapperAnimating]),T=Object(i.useCallback)((function(){S||(m(),y.current&&y.current!==document.activeElement&&y.current.focus()),x("".concat(v.toastWrapper," ").concat(v.toastWrapperStill))}),[m,S,x,v.toastWrapper,v.toastWrapperStill]);return Object(i.useEffect)((function(){var e;return d&&l&&(e=setTimeout((,7e3)),),[l,d,k]),function(e,t){var n=function(e){var t=Object(a.__read)(Object(i.useState)(null),2),n=t[0],r=t[1];return Object(i.useEffect)((function(){var t=function(){Object(o.a)(document.activeElement)&&e.current&&!e.current.contains(document.activeElement)&&r(document.activeElement)};return document.addEventListener("focusin",t),),[e,r]),n}(e);Object(i.useEffect)((function(){var r=e.current,a=function(e){r&&e.ctrlKey&&e.key===s.a.F6&&r.focus(),e.key===s.a.Escape&&Object(u.a)(r,n),e.key===s.a.One&&e.altKey&&t&&t()};return document.addEventListener("keydown",a),function(){document.removeEventListener("keydown",a),Object(u.a)(r,n)}}),[t,e,n])}(p,f),d?c.a.createElement("div",{"aria-busy":t,"aria-label":n,"aria-live":r,"aria-keyshortcuts":"Control+F6",className:_,onAnimationStart:C,onAnimationEnd:T,ref:role:"region",tabIndex:0},c.a.createElement("div",{className:j},d)):null},v=n("XjXu"),g=n("vwws"),S=n("D0N4"),h=n("x3xY"),y=n("1Pr3"),O=n("c+Fk"),j=n("OeRt"),E=n("pUzp"),w=n("Etsp"),_={color:d.a.colorNeutralForegroundInverted,outlineColor:d.a.colorTransparentStroke,":active":{color:d.a.colorNeutralForegroundInvertedLinkPressed},":hover":{color:d.a.colorNeutralForegroundInverted,textDecorationLine:"underline"},":hover:active":{color:d.a.colorNeutralForegroundInvertedLinkPressed},":focus":{color:d.a.colorNeutralForegroundInverted,outlineColor:d.a.colorNeutralForegroundInverted},":focus-visible":{color:d.a.colorNeutralForegroundInverted,outlineColor:d.a.colorNeutralForegroundInverted,outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"0px"}},x=Object(l.a)({toastElementDiv:{display:"flex",flexDirection:"row",alignItems:"center"},icon:{position:"relative",display:"flex"},labelDiv:Object(a.__assign)({width:"100%",marginLeft:"4px"},f.a.padding("0px","4px")),toastLabel:{color:d.a.colorNeutralForegroundInverted,fontFamily:d.a.fontFamilyBase,lineHeight:d.a.lineHeightBase300,fontSize:d.a.fontSizeBase300},toastButton:Object(a.__assign)(Object(a.__assign)(Object(a.__assign)(Object(a.__assign)({position:"relative",display:"flex",minWidth:"none",marginLeft:"12px"},f.a.padding("0px","8px")),f.a.borderRadius(d.a.borderRadiusSmall)),{backgroundColor:d.a.colorTransparentBackground,lineHeight:d.a.lineHeightBase200,fontSize:d.a.fontSizeBase200,fontFamily:d.a.fontFamilyBase}),_),toastLink:Object(a.__assign)(Object(a.__assign)({},_),{marginLeft:"2px"})}),k=function(e){var t,n,r=e.animate,a=e.ariaLabel,u=e.button,s=e.buttonAriaLabel,l=e.label,f=e.link,d=e.type,m=x(),b=Object(S.a)().dir,p=Object(i.useRef)(Object(o.a)(document.activeElement)?document.activeElement:null),_=Object(i.useCallback)((function(e){e&&p.current&&(e.focus(),p.current=null)}),[]);if(!l)return null;if(d==w.a.InProgress){var k={circle:{border:"1.5px solid rgba(248, 210, 42, 0.1)",borderTopColor:"#F8D22A"}};"boolean"!=typeof r||r||(k.circle.animation="none"),t=c.a.createElement(v.a,{size:g.a.small,styles:k,className:m.icon})}else t=c.a.createElement("span",{className:m.icon},d==w.a.Success?c.a.createElement(j.h,{primaryFill:"#92C353"}):c.a.createElement(E.j,{primaryFill:"#D74553"}));return u&&(n=c.a.createElement(h.a,{"aria-label":s,onClick:u.onClick,appearance:"transparent",className:m.toastButton,ref:_,size:"small"},u.label)),c.a.createElement("div",{dir:b,className:m.toastElementDiv},t,c.a.createElement("div",{className:m.labelDiv},c.a.createElement(y.a,{"aria-label":a,className:m.toastLabel},l),f?c.a.createElement(O.a,{className:m.toastLink,href:f.url,"aria-label":f.ariaLabel,target:"_blank"},f.label):null),n)},C=n("lYt+"),T=n("T68q"),N=n("lOFt"),I=n("a3FV"),A=n("lUkk"),D=function(){var e=),t=Object(T.a)(),n=Object(r.a)().data;!function(e){if(e&&e.actionInfo){var t=e.actionInfo.onClick;e.actionInfo.onClick=function(){t(),Object(N.a)(I.a.ToastClick,"toastActionLink","Toast"),Object(A.a)({eventName:I.a.ToastClick,id:"toastActionLink",result:"Create",target:"Toast",area:"Toast"})}}}(e);var a=Object(i.useCallback)((function(){t.clearNotification()}),[t]);if(!e||!n)return null;var o=e.type,u=e.message,s=e.actionInfo,l=e.linkInfo;return c.a.createElement(p,{ariaBusy:o===w.a.InProgress,ariaLabel:"".concat(n.documentActionsToastResources.toastNotificationText," ").concat(u||""),ariaLive:o===w.a.Error?"assertive":"polite",callToAction:null==s?void 0:s.onClick,onDismiss:a,autoDismiss:o===w.a.Success||o===w.a.Error&&!(null==s?void 0:s.onClick)},c.a.createElement(k,{ariaLabel:n.documentActionsToastResources.toastMessageAriaLabel,buttonAriaLabel:n.documentActionsToastResources.toastButtonAriaLabel,type:o,label:u,link:l?{url:l.url,label:l.label}:void 0,button:s}))}},NrNW:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("B5kz"),a=n("zPZ9");function o(){return Object(r.c)(["OfficeComponentContext"],(function(){return a.a}),{cacheTime:1/0,staleTime:1/0})}},S6Pj:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return!!e&&e.focus instanceof Function&&e!==document.body}},T68q:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("lYt+"),a=o=,UVG0:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"loadStyles",(function(){return l})),n.d(t,"configureLoadStyles",(function(){return f})),n.d(t,"configureRunMode",(function(){return d})),n.d(t,"flush",(function(){return m})),n.d(t,"loadTheme",(function(){return p})),n.d(t,"clearStyles",(function(){return v})),n.d(t,"detokenize",(function(){return S})),n.d(t,"splitStyles",(function(){return y}));var r=a="undefined"==typeof window?e:window,o=a&&a.CSPSettings&&a.CSPSettings.nonce,i=function(){var e=a.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};return e.runState||(e=r(r({},e),{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),e.registeredThemableStyles||(e=r(r({},e),{registeredThemableStyles:[]})),a.__themeState__=e,e}(),c=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,u=unction l(e,t){void 0===t&&(t=!1),s((function(){var n=Array.isArray(e)?e:y(e),r=i.runState,a=r.flushTimer;t||1===r.mode?(r.buffer.push(n),a||(i.runState.flushTimer=function(){return setTimeout((,0)}())):b(n)}))}nction m(){s(()}unction p(e){i.theme=e,function(){if(i.theme){for(var e=[],t=0,n=i.registeredThemableStyles;t<n.length;t++)e.push(n[t].themableStyle);e.length>0&&(v(1),b([].concat.apply([],e)))}}()}function v(e){void 0===e&&(e=3),3!==e&&2!==e||(g(i.registeredStyles),i.registeredStyles=[]),3!==e&&1!==e||(g(i.registeredThemableStyles),i.registeredThemableStyles=[])}unction S(e){return e&&(e=h(y(e)).styleString),e}call(this,n("pCvA"))},Wws9:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){e&&e.contains(document.activeElement)&&(t?t.focus():e.blur())}},elnK:function(e,t,n){"use strict";var r=n("niq1"),a=n("mXGw"),o=n("sYGy").useSyncExternalStoreWithSelector;ar c=function(e){var t="function"==typeof e?r.createStore(e):e,n=return Object.assign(n,t),n},u=function(e){return e?c(e):c};t.create=u,t.default=function(e){return u(e)},t.useStore=i,Object.keys(r).forEach((),e.exports=t&&t.default||{},Object.assign(e.exports,t)},huqQ:function(e,t,n){"use strict";e.exports=n("y8H0")},lOFt:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("8/lW"),a=n("a3FV"),o=n("rTyw"),i=n("4CZh");function c(e,t,n,c,u,s,l,f){if(void 0===s&&(s={}),void 0===l&&(l=[]),void 0===f&&(f=r.a.Security),l=l||[],n&&t&&"Unknown"!==t&&l.push("".concat(e,".").concat(n,".").concat(t)),t&&(s.ElementId=t),c){var d=Object(o.a)(c);s.Referral=d,l.push("Referral.".concat(d)),s.ReferralPlatform=u?{defaultValue:u,securityThreshold:r.a.Enhanced,fallbackValue:"Web"}:"Web"}n&&(s.Area=n),Object(i.b)(e,a.a.GenericClick,f,s,l,!0)}},"lYt+":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("QjXU"),a=n("elnK"),o=n.n(a),i=n("sYiP"),c=o()((function(e){return{actionCreators:{clearNotification:createErrorNotification:function(t,n){e({toast:Object(i.a)(t,n)})},createLoadingNotification:function(t,n){e({toast:Object(i.b)(t,n)})},createSuccessNotification:function(t,n){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){return Object(r.__generator)(this,(function(r){return e({toast:Object(i.c)(t,n)}),[2]}))}))}},setToast:toast:void 0}}))},niq1:function(e,t,n){"use strict";var r=function(e){var t,n=new Set,r=a=function(){return t},o={setState:r,getState:a,subscribe:destroy:;return t=e(r,a,o),o},a=t.createStore=a,t.default=e.exports=t&&t.default||{},Object.assign(e.exports,t)},sYGy:sYiP:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",();var r=n("Etsp"),a=function(e,t){return{message:e,actionInfo:t,type:r.a.Error}},o=i=,y8H0:]);
//# sourceMappingURL=vendors~toast-container-rc.dd67aa6f6b10eb997c20.chunk.v7.js.map