(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{AWLv:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("J4zp")),r=n("q1tI");t.default=function(e){var t=e.root,n=void 0===t?null:t,a=e.rootMargin,o=e.threshold,l=void 0===o?0:o,s=(0,r.useState)({}),d=(0,i.default)(s,2),u=d[0],f=d[1],c=(0,r.useState)(null),m=(0,i.default)(c,2),p=m[0],h=m[1],g="undefined"!=typeof window?(0,r.useRef)(new IntersectionObserver((,{root:n,rootMargin:a,threshold:l})):null;return(0,r.useEffect)((function(){var e=null==g?void 0:g.current;return null==e||e.disconnect(),p&&(null==e||e.observe(p)),),[p,g]),[h,u]}},HMjI:function(e,t,n){"use strict";var a=n("TqRt"),i=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("lSNA")),o=a(n("q1tI")),l=n("Jqp9"),s=(a(n("17x9")),a(n("bNs8"))),d=a(n("TTpX")),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n("6qvD")),f=n("f/4F"),c=a(n("lraK")),m=a(n("XMNT")),p=n("SJcc");function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}r y=function(e){var t=e.data,n=e.className,a=e.contentAlignment,i=e.Headshot,r=e.section,f=e.wordCount,h=e.showReadingTime,g=e.readingTimeRef;if(!t)return null;var y,T=t.headshots,w=void 0===T?null:T,C=t.bylines,b=void 0===C?null:C,S=t.role,O=void 0===S?null:S,D=t.timestamp,j=void 0===D?{}:D,x=(0,u.getHeadshotCount)(w),E=O),P=j),L=P.time,M=P.lastMajorModification,z=P.updatedText,N=P.showUpdatedTimestamp,_=P.canShowTime,I=P.hideTimestamp,k="t-magazine"===r||"magazine"===r,H=j&&(y=j,!(0===Object.entries(y).length&&y.constructor===Object))||j&&(null==j?void 0:j.type);return o.default.createElement("div",{className:(0,l.cx)(p.totalBylineContainerClass,n)},o.default.createElement(p.ComposedBylineContainer,{headshotCount:x,contentAlignment:a},w&&o.default.createElement(u.default,{inComposedByline:!0,Headshot:i,headshots:w}),o.default.createElement(p.TextContainer,{headshotCount:x},b&&o.default.createElement(s.default,{bylines:b}),E&&o.default.createElement(d.default,null,E))),H&&!I&&o.default.createElement("div",{ref:g,"data-testid":"reading-time-module",className:p.readTimeContainerClass},o.default.createElement(p.SectionContainer,null,H&&o.default.createElement(p.SectionContainerItem,null,"function"==typeof j.type?j:o.default.createElement(m.default,{updatedText:z,canShowTime:_,lastMajorModification:M,className:p.timestampMarginsClass,showUpdatedTimestamp:N},L)),h&&!k&&o.default.createElement(c.default,{wordCount:f,className:p.readTimeClass}))))};y.displayName="ComposedByline",y.defaultProps={contentAlignment:"default",className:void 0,data:null,Headshot:f.StyledHeadshot,section:void 0,wordCount:null,showReadingTime:!1,readingTimeRef:void 0};var T=y;t.default=T},"L+PM":SJcc:TTpX:XMNT:;var u):null};t.default=s}}]);
//# sourceMappingURL=vendors~carddeck-5cc2325c01e9d0e3a3fc.js.map