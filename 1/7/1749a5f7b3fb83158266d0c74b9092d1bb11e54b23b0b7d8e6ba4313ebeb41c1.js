(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/6mT":"0U19":"1En8":"1NCF":"1b1Y":"28lu":"2oxf":"33qW":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=r(a("o8KN")),o=r(a("BtWR")),l=r(a("lxVW")),u=r(a("pqFG")),s=a("tmYY"),d=function(e){var t=e.heading1,a=e.body,r=e.caption,d=e.credit,c=e.index,f=e.textColor;return i.default.createElement("div",{className:(0,s.composedTextStyles)(f)},t&&i.default.createElement(n.default,{text:t,index:c}),a&&i.default.createElement(u.default,null,a),(r||d)&&i.default.createElement("figcaption",null,r&&i.default.createElement(l.default,{caption:r}),d&&i.default.createElement(o.default,{credit:d})))};d.displayName="ComposedText";var c=d;t.default=c},"3vxf":"4EhS":"5F5n":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.creditStyles=void 0;var i=a("Jqp9"),n=a("3sMT"),o=r(a("wXC7")),l=(0,i.css)("text-align:left;",n.font.franklin[10]," line-height:0.625rem;font-weight:500;margin-top:1.25rem;",o.default.breakpoint.medium,"{max-width:200px;color:#727272;margin-top:12px;}");t.creditStyles=l},"5W65":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=a("/KYJ"),o=r(a("+/Tm")),l=r(a("wXC7")),u=r(a("o8KN")),s=r(a("NwIc")),d=r(a("hgRh")),c=a("tmYY"),f=function(e){var t=e.headline,a=e.authors,r=e.photographer,f=e.dateline,p=e.textColor,v=(0,c.leadingCardTextStyles)(p);return i.default.createElement("div",{className:v},i.default.createElement("section",null,i.default.createElement(c.TLogoStyledLink,{href:"https://www.nytimes.com/"},i.default.createElement(o.default,{fill:l.default.color.black})),t&&i.default.createElement(u.default,{className:c.headlineClass,text:t})),i.default.createElement("div",null,i.default.createElement("div",{className:"authors"},r&&i.default.createElement(s.default,{photographer:r}),((null==a?void 0:a.author1)||(null==a?void 0:a.author2))&&i.default.createElement(s.default,{authors:{author1:a.author1,author2:a.author2}})),f&&i.default.createElement(d.default,{className:c.datelineClass,text:f}),i.default.createElement(n.CaretDownIcon,{className:c.chevronIconClass,size:24})))};f.displayName="LeadingCardText";var p=f;t.default=p},"6NbA":"6r9f":"7CYq":"7LcW":"8D1Z":"90Ku":"99oj":"9C5f":"9J88":"9g1B":"9nF7":"9zrQ":AJdr:AOoL:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.veHeaderClass=void 0;var i=a("Jqp9"),n=r(a("wXC7")),o=a("3sMT"),l=";font-size:1.375rem;line-height:1.625rem;font-weight:400;text-align:center;margin-bottom:",u="{font-size:1.625rem;line-height:1.875rem;text-align:left;}";t.veHeaderClass=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,i.css)(o.font.cheltenham[24],l,0===e?"0":"1.25rem",";",n.default.breakpoint.medium,u)}},"B+BG":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ctaContainerClass=void 0;var r=(0,a("Jqp9").css)("display:flex;height:2.75rem;padding-bottom:0.75rem;");t.ctaContainerClass=r;var i=r;t.default=i},B1Gm:BSJO:BSgH:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.videoShimClass=t.tapToUnmuteOverlayClass=t.tapToUnmuteIconClass=t.slideWrapperClass=t.slideContainerClass=t.newsLabelClass=t.newsCreditClass=t.narrativeCreditClass=t.mediaClass=t.linkClass=t.labelClass=t.fluidAdWrapperClass=t.figcaptionTextContainerClass=t.figcaptionGradientClass=t.figcaptionContainerClass=t.figcaptionClass=t.figCaptionTopClass=t.figCaptionBottomClass=t.defaultCreditClass=t.closedCaptionsContainerClass=t.closedCaptionsClass=t.adWrapperClass=t.adSlugClass=t.adSlideSlugClass=t.adCardWrapperClass=void 0;var i=a("Jqp9"),n=a("3sMT"),o=r(a("wXC7"));t.slideContainerClass=function(e){return(0,i.css)("width:100%;height:100%;position:relative;flex:0 0 100%;scroll-snap-align:start;background:",e?"none":"black",";& > figure{width:100%;height:100%;display:flex;align-items:center;margin:0;padding:0;position:relative;& > video{cursor:pointer;}}")};var l=(0,i.css)("margin:0;padding:0;width:100%;height:100%;transform:scale(1.01);");t.mediaClass=l;t.newsLabelClass=function(e){return(0,i.css)("padding:1.25rem 1.25rem 0 1.25rem;z-index:10;top:0;left:0;right:0;letter-spacing:0.01em;position:absolute;text-align:left;font-family:'nyt-franklin',Arial,Helvetica,sans-serif;font-size:0.938rem;line-height:1.1875rem;color:",e?o.default.color.gray10:n.dark.colors.content.primary.hex,";text-shadow:",e?"none":"0px 0px 10px rgba(0, 0, 0, 0.25), 1px 1px 1px rgba(0, 0, 0, 0.35), -1px -1px 1px rgba(0, 0, 0, 0.35)",";")};t.figcaptionClass=function(e){return(0,i.css)("z-index:10;left:0;right:0;letter-spacing:0.01em;position:absolute;text-align:left;font-family:'nyt-franklin',Arial,Helvetica,sans-serif;font-size:0.938rem;line-height:1.1875rem;color:",e?o.default.color.gray10:n.dark.colors.content.primary.hex,";text-shadow:",e?"none":"0px 0px 10px rgba(0, 0, 0, 0.25), 1px 1px 1px rgba(0, 0, 0, 0.35), -1px -1px 1px rgba(0, 0, 0, 0.35)",";")};t.figcaptionContainerClass=function(e){return(0,i.css)("padding-bottom:40px;background:none;text-shadow:",e?"none":"0px 0px 4px rgba(0, 0, 0, 0.25)",";")};t.figcaptionGradientClass=function(e){return(0,i.css)("background:",e?"linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.35) 40px)":"linear-gradient(to top, transparent, rgba(0, 0, 0, 0.35) 40px)",";")};var u=(0,i.css)("bottom:0;@media (min-width:740px){font-size:0.875rem;line-height:1.063rem;padding-left:1.25rem;padding-right:1.25rem;}");t.figCaptionBottomClass=u;var s=(0,i.css)("top:0;padding-top:1.25rem;padding-bottom:0px;@media (min-width:740px){font-size:0.875rem;line-height:1.063rem;padding:1.25rem 1.25rem 0 1.25rem;}");t.figCaptionTopClass=s;var d=(0,i.css)("@media (max-width:740px){padding-left:1.25rem;padding-right:1.25rem;}");t.figcaptionTextContainerClass=d;var c=(0,i.css)("font-weight:700;margin-right:",n.spaceScale.get(1),";");t.labelClass=c;t.defaultCreditClass=var f=(0,i.css)("left:1.875rem;bottom:1.4rem;@media (min-width:740px){left:1.875rem;}");t.narrativeCreditClass=f;var p=(0,i.css)("padding-left:1.25rem;");t.newsCreditClass=p;var v=(0,i.css)("height:25%;width:20%;position:absolute;bottom:0;right:0;z-index:100;animation:fade-in 500ms ease-out forwards;background-color:transparent;border:none;cursor:pointer;");t.tapToUnmuteOverlayClass=v;var h=(0,i.css)("pointer-events:none;border-radius:50%;position:absolute;bottom:16px;right:16px;& > svg{display:block;width:32px;height:32px;}");t.tapToUnmuteIconClass=h;var m=(0,i.css)("font-size:1rem;color:",n.dark.colors.content.primary.hex,";background-color:",n.dark.colors.background.primary.hex,";padding:5px;line-height:calc(1rem + 10px);font-family:'nyt-franklin',Arial,Helvetica,sans-serif;visibility:hidden;@media (max-width:600px){font-size:0.8125rem;line-height:calc(0.8125rem + 10px);}");t.closedCaptionsClass=m;var g=(0,i.css)("position:absolute;z-index:11;bottom:35px;margin:0 auto;left:0;right:0;text-align:center;");t.closedCaptionsContainerClass=g;var E=(0,i.css)("width:100%;height:100%;overflow:hidden;");t.slideWrapperClass=E;var y=(0,i.css)("height:100%;width:100%;");t.linkClass=y;var b=(0,i.css)("display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#f8f8f8;width:100%;");t.adCardWrapperClass=b;var O=(0,i.css)("&:before{content:'advertisement';color:#5a5a5a;font-size:12px;font-weight:500;font-family:'nyt-franklin',Arial,Helvetica,sans-serif;letter-spacing:0.96px;text-transform:uppercase;padding:8px 12px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}");t.adSlideSlugClass=O;var _=(0,i.css)("max-width:100%;min-height:0;overflow:hidden;");t.adWrapperClass=_;var C=(0,i.css)("width:100%;");t.fluidAdWrapperClass=C;var P=(0,i.css)("color:#5a5a5a;font-size:12px;font-weight:500;font-family:'nyt-franklin',Arial,Helvetica,sans-serif;letter-spacing:0.96px;text-transform:uppercase;text-align:center;padding:16px 0 9px 0;");t.adSlugClass=P;var T=(0,i.css)("width:100%;height:100%;background-color:transparent;position:absolute;");t.videoShimClass=T},BtWR:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=a("5F5n"),o=function(e){var t=e.credit;return i.default.createElement("p",{className:n.creditStyles},t)};o.displayName="Credit";var l=o;t.default=l},C9LV:CwX3:DSaz:EWRt:F12x:FoBN:Fyf8:Hcwh:Hz1C:Ixsf:J6EV:JnN5:K1WC:function(e,t,a){"use strict";var r=a("TqRt"),i=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=h;var n=r(a("lSNA")),o=r(a("J4zp")),l=a("UIP5"),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=n?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a("q1tI")),s=a("Jqp9"),d=r(a("AWLv")),c=a("ZKeF");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var p=(0,s.css)(".nytd-player-container{z-index:0 !important;}.react-vhs-player{height:100% !important;padding-bottom:0 !important;}"),v=(0,s.css)("video{object-fit:cover;}");function h(e){var t,a,r,i,f=e.renditions,h=e.promotionalMedia,m=(0,u.useState)(null),g=(0,o.default)(m,2),E=g[0],y=g[1],b=(0,c.useReduceMotion)(),O=null==f?void 0:f.filter((),_=null==h||null===(t=h.crops)||void 0===t||null===(a=t[0])||void 0===a||null===(r=a.renditions)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.url,C=(0,d.default)({rootMargin:"0px",threshold:.51}),P=(0,o.default)(C,2),T=P[0],A=P[1];return(0,u.useEffect)((function(){var e,t;b||(A&&A.intersectionRatio>.51?null==E||null===(e=E.play)||void 0===e||e.call(E):null==E||null===(t=E.pause)||void 0===t||t.call(E))}),[A,b,E]),u.default.createElement("div",{ref:T,style:{display:"grid"}},u.default.createElement(l.VideoPlayer,{muteToggle:!0,posterUrl:_,className:(0,s.cx)(p,(0,n.default)({},v,!0)),muted:!0,loop:!0,clickVideoToTogglePlay:!0,allowMultiplePlayers:!0,pauseOtherPlayers:!0,captionsDefaultOn:!0,disableAudioDeeplinkInApps:!0,ads:!1,cover:!1,controls:!1,preload:"auto",sources:O,width:"100%",onReady:function(e){e.video.addEventListener("click",(),y(e)}}))}h.displayName="Video"},KGm5:KnCL:L4JN:"LI/L":LTuW:Lfkt:MrGO:"N++B":NTYq:NhAA:NwIc:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=a("Jqp9"),o=a("g1PO"),l=function(e){var t=e.authors,a=e.className,r=e.photographer,l=(0,n.cx)(o.bylineClass,a),u="";if(null!=r&&r.name&&(u+="Visuals by ".concat(r.name)),t){var s=t.author1,d=t.author2;s&&(s.name||s.id)&&(u+="Text by ".concat(s.name)),d&&(d.name||d.id)&&(u+=" and ".concat(d.name))}return i.default.createElement("div",{className:l},u)};l.displayName="Byline";var u=l;t.default=u},O7OX:OAPC:function(e,t,a){"use strict";function r(e){var t=e.hasCredit,a=e.hasCta,r="0rem";if(!e.hasCaptions)return r;t&&(r="1.065rem");var i="0rem";return a&&(i="2.75rem"),"calc(".concat(r," + ").concat(i,")")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getGradientCaptionsBottomSpacing=r;var i=r;t.default=i},Ow7Z:P2kp:PudI:Pytw:"Q/sK":Q1ct:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=r(a("7LcW")),o=r(a("VcPa")),l=r(a("ikOR")),u=r(a("9zrQ")),s=function(e){var t;switch(null==e||null===(t=e.asset)||void 0===t?void 0:t.__typename){case"Carousel":return i.default.createElement(u.default,null,i.default.createElement(n.default,e));case"CardStory":return i.default.createElement(u.default,null,i.default.createElement(o.default,e));case"VisualEssay":return i.default.createElement(u.default,null,i.default.createElement(l.default,e));default:return null}};t.default=s},Q29E:QvqZ:RNmK:RdR9:SiRs:function(e,t,a){"use strict";var r=a("TqRt"),i=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("cDf5")),o=r(a("lSNA")),l=r(a("J4zp")),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var a=C(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=n?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a("q1tI")),s=a("Jqp9"),d=r(a("XlcC")),c=a("uaZr"),f=a("FoBN"),p=a("90Ku"),v=r(a("zHsp")),h=r(a("vMgY")),m=a("BSgH"),g=a("Lfkt"),E=a("JnN5"),y=r(a("wUso")),b=r(a("ZuWl")),O=r(a("tVub")),_=r(a("8D1Z"));function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(C=function(e){return e?a:t})(e)}function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){(0,o.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=new b.default("carousel:card");ar S=function(e){var t,a,r,i,d,b,C,P,S,w,N,R,x;A.log("`props`",e);var M=(0,c.useElementOnScreen)({root:null,threshold:.75}),L=(0,l.default)(M,2),k=L[0],j=L[1];A.log("`ref`",k);var D=e.data,V=e.idx,U=e.activeIdx,B=e.trackingData,q=e.desktopAspectRatio,Y=e.mobileAspectRatio,W=e.tone,G=void 0===W?"News":W,F=e.isCarouselMuted,H=e.setCarouselMuted,z=e.moduleUri,J=e.cardLength,K=e.slug;A.log("`activeIdx`",U);var X=(0,c.useElementHasBeenIntersected)({threshold:1}),Z=(0,l.default)(X,2),Q=Z[0],$=Z[1],ee=(0,c.useIsMobile)().isMobile;A.log("`isMobile`",ee);var te=(0,u.useState)(!1),ae=(0,l.default)(te,2),re=ae[0],ie=ae[1];A.log("`hasTrackedFirstSlideImpression`",re);var ne=(0,u.useState)([]),oe=(0,l.default)(ne,2),le=oe[0],ue=oe[1],se="Video"===(null==D||null===(t=D.media)||void 0===t?void 0:t.__typename);if(A.log("`isVideo`",se),(0,u.useEffect)((,[se,ee,null===(a=D.media)||void 0===a?void 0:a.renditions,Y,q,ue]),(0,u.useEffect)((,[null==D||null===(r=D.media)||void 0===r?void 0:r.uri,$,re,V,se,j,le,B]),(0,O.default)(D))return u.default.createElement("li",{className:(0,s.cx)((0,m.slideContainerClass)((0,O.default)(D)),p.listClass),ref:k},u.default.createElement(_.default,{adSlotId:D.adSlotId}));var de=(null==D||null===(i=D.media)||void 0===i?void 0:i.credit)||(null==D||null===(d=D.media)||void 0===d||null===(b=d.bylines)||void 0===b||null===(C=b[0])||void 0===C?void 0:C.renderedRepresentation)||(null==D||null===(P=D.media)||void 0===P||null===(S=P.promotionalMedia)||void 0===S?void 0:S.credit);A.log("`credit`",de),A.log("`tone`",G);var ce=D.sentence,fe=D.caption,pe="Bottom"===(null==D?void 0:D.captionPosition),ve="Top"===(null==D?void 0:D.captionPosition),he="Gradient"===(null==D?void 0:D.gradient),me="Black"===(null==D?void 0:D.textColor),ge=null!=D&&D.caption?I(null==D?void 0:D.caption):null==D?void 0:D.quote,Ee=null!=D&&D.sentence?I(D.sentence):null==D?void 0:D.attribution,ye=u.default.createElement(u.default.Fragment,null,"Image"===(null==D||null===(w=D.media)||void 0===w?void 0:w.__typename)&&u.default.createElement(v.default,{data:D,idx:V,desktopAspectRatio:q,mobileAspectRatio:Y,moduleUri:z,cardLength:J,slug:K}),se&&u.default.createElement(h.default,{data:D,desktopAspectRatio:q,mobileAspectRatio:Y,isCarouselMuted:F,setCarouselMuted:H,isMobile:ee,sortedSources:le,moduleUri:z,idx:V,cardLength:J,slug:K}),(null==G?void 0:G.toLowerCase())===E.CAROUSEL_TONE_OPTIONS.NEWS.toLowerCase()&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:(0,m.newsLabelClass)(me)},fe&&pe&&u.default.createElement("span",{className:m.labelClass},I(fe))),u.default.createElement("figcaption",{className:(0,s.cx)((0,m.figcaptionClass)(me),(N={},(0,o.default)(N,(0,m.figcaptionContainerClass)(me),!!ce),(0,o.default)(N,(0,m.figcaptionGradientClass)(pe),he),N),pe?m.figCaptionBottomClass:m.figCaptionTopClass)},u.default.createElement("div",{className:m.figcaptionTextContainerClass},fe&&ve&&u.default.createElement("span",{className:m.labelClass},I(fe)),ce&&I(ce)))),(null==G?void 0:G.toLowerCase())===E.CAROUSEL_TONE_OPTIONS.NARRATIVE.toLowerCase()&&u.default.createElement(y.default,{quote:ge,attribution:Ee,credit:de,captionPosition:null==D?void 0:D.captionPosition,hasGradient:he,blackText:me}));A.log("`data.link`",D.link),(null!==(R=D.link)&&void 0!==R&&R.url||D.link)&&(ye=u.default.createElement("a",{className:m.linkClass,href:"object"===(0,n.default)(D.link)?D.link.url:D.link},ye));var be=(0,s.cx)((x={},(0,o.default)(x,(0,m.defaultCreditClass)(me),!0),(0,o.default)(x,m.narrativeCreditClass,(null==G?void 0:G.toLowerCase())===E.CAROUSEL_TONE_OPTIONS.NARRATIVE.toLowerCase()),(0,o.default)(x,m.newsCreditClass,(null==G?void 0:G.toLowerCase())===E.CAROUSEL_TONE_OPTIONS.NEWS.toLowerCase()),x));return u.default.createElement("li",{className:(0,s.cx)((0,m.slideContainerClass)((0,O.default)(D)),p.listClass),ref:k},u.default.createElement("figure",{ref:Q},ye),u.default.createElement("span",{className:be},de))};S.displayName="Card";var w=S;t.default=w},Sibh:UI6C:VEQp:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.bodyStylesClass=void 0;var i=a("Jqp9"),n=a("3sMT"),o=r(a("wXC7")),l=(0,i.css)(n.font.imperial[18],";text-align:left;line-height:1.5625rem;font-weight:400;height:auto;white-space:pre-wrap;",o.default.breakpoint.medium,"{font-size:1.375rem;line-height:2rem;max-width:800px;}");t.bodyStylesClass=l},VHgf:Vb85:VcPa:YIsI:Yh3e:Z7cI:ZKeF:ZiDm:ZuWl:aatZ:afOb:bjCN:bkTY:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.textOverlayClass=t.textOnlySlideClass=t.leadTextHolderClass=t.imageLayerClass=t.imageClass=t.desktopCaptionsCreditClass=t.cardWrapperClass=t.TopGradient=t.BottomGradient=void 0;var i=a("Jqp9"),n=a("3sMT"),o=r(a("wXC7")),l=(0,i.css)("background-color:white;vertical-align:middle;position:relative;height:100vh;scroll-snap-align:start;display:grid;width:100%;",o.default.breakpoint.medium,"{&.twoColCls{grid-template-columns:1fr 1fr;}&.leadCardColCls{grid-template-columns:1fr auto 1fr;}&.oneColCls{grid-template-columns:1fr;}}");t.cardWrapperClass=l;var u=(0,i.css)("z-index:2;pointer-events:none;",o.default.breakpoint.medium,"{position:relative;}");t.leadTextHolderClass=u;var s=(0,i.css)("height:100%;display:flex;background-color:white;align-items:center;padding:1.25rem;color:",n.light.colors.content.primary.hex,";outline:1px solid #dfdfdf;overflow:hidden;pointer-events:none;",o.default.breakpoint.medium,"{position:relative;max-width:800px;outline:none;font-size:1.375rem;}");t.textOnlySlideClass=s;var d=(0,i.css)("display:grid;position:absolute;z-index:2;width:100%;height:100%;pointer-events:none;",o.default.breakpoint.medium,"{position:relative;max-width:390px;}");t.textOverlayClass=d;var c=(0,i.css)("display:none;padding:1.25rem;",o.default.breakpoint.medium,"{display:flex;min-width:200px;justify-content:end;flex-direction:column;&.float{position:absolute;z-index:2;bottom:0;}}");t.desktopCaptionsCreditClass=c;var f=(0,i.styled)("div",{target:"em21ift0"})("background:linear-gradient(180deg,rgba(18,18,18,0.55) 0%,rgba(18,18,18,0) 100%);position:absolute;top:0;height:",(function(e){return e.height||"90px"}),";width:",(function(e){return e.width||"200px"}),";z-index:1;left:0;pointer-events:none;");t.TopGradient=f;var p=(0,i.styled)("div",{target:"em21ift1"})("background:linear-gradient(0deg,rgba(18,18,18,0.55) 0%,rgba(18,18,18,0) 100%);position:absolute;bottom:0;height:",(function(e){return e.height||"90px"}),";width:",(function(e){return e.width||"200px"}),";z-index:1;left:0;pointer-events:none;");t.BottomGradient=p;var v=";position:relative;width:fit-content;grid-column:";t.imageLayerClass=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(0,i.css)(o.default.breakpoint.medium,"{justify-self:",e,v,t,";}")};var h=(0,i.css)("height:100vh;");t.imageClass=h},"c+Qg":c2Vx:cO8z:dVYb:dbIl:edZF:f9NO:"g//v":g1PO:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.bylineClass=void 0;var i=a("Jqp9"),n=a("3sMT"),o=r(a("wXC7")),l=(0,i.css)(n.font.franklin[10]," font-size:.875rem;text-align:center;line-height:1.125rem;font-weight:700;",o.default.breakpoint.medium,"{font-size:1rem;line-height:1.375rem;text-align:left;}");t.bylineClass=l},gaWu:gfiS:hWNS:hfVv:hgRh:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=a("Jqp9"),o=a("uv3+"),l=function(e){var t=e.className,a=e.text,r=(0,n.cx)(o.datelineClass,t);return i.default.createElement("div",{className:(0,n.cx)("dateline",r)},a)};l.displayName="Dateline";var u=l;t.default=u},hm1F:htVy:hzXZ:"i3+9":iQuc:ikOR:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var i=r(a("lSNA")),n=r(a("q1tI")),o=r(a("XlcC")),l=a("J6EV"),u=r(a("tovF")),s=a("GbT0");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,i.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e){var t=function(e){var t;return{cards:null===(t=e.cards)||void 0===t?void 0:t.map((function(e){var t,a,r=JSON.parse(e.data),n=null===(t=e.text)||void 0===t?void 0:t.reduce((function(e,t){var a=t.content.map(o.default);return c(c({},e),{},(0,i.default)({},t.key,"body"===t.key?a:a[0]))}),{}),l=null===(a=e.assets)||void 0===a?void 0:a[0],u=null==l?void 0:l.crops;return c(c(c(c({},l),r),n),{},{crops:u})}))}}(e.asset).cards,a=s.VERTICAL_ASPECT_RATIO_2_BY_3_CARD;return n.default.createElement("article",{style:{scrollSnapType:"y mandatory",overflowY:"scroll",height:"100vh"}},t.map((function(e,t){var r=e.altText,i=e.author1,o=e.author2,s=e.backgroundMedia,d=e.body,c=e.caption,f=e.credit,p=e.dateline,v=e.heading1,h=e.headline,m=e.crops,g=e.photographer,E=e.textColor,y=e.renditions,b=e.promotionalMedia,O=e.__typename,_=function(e){var t,a=e.crops,r=e.aspectRatio;return a&&(null===(t=(0,l.sortRenditions)(a.flatMap((function(e){return e.renditions})),(0,l.parseRatio)(r),1080))||void 0===t?void 0:t[0])||{}}({crops:m,aspectRatio:a});return n.default.createElement(u.default,{type:O,altText:r,author1:i,author2:o,body:d,caption:c,credit:f,dateline:p,heading1:v,headline:h,index:t,photographer:g,textColor:E,uri:s,url:_.url,renditions:y,promotionalMedia:b})})))}f.displayName="VisualEssay"},j0zm:jzXz:kDmm:knK2:l8iw:ltLu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.footerClass=t.default=void 0;var r=(0,a("Jqp9").css)("bottom:0;left:0;position:absolute;width:100%;");t.footerClass=r;var i=r;t.default=i},lxVW:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=a("yyaF"),o=function(e){var t=e.caption;return i.default.createElement("p",{className:n.captionClass},t)};o.displayName="Caption";var l=o;t.default=l},m38h:mMWr:mWRJ:"nKz+":niyZ:o8KN:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=a("Jqp9"),o=a("AOoL"),l=function(e){var t=e.className,a=e.text,r=e.index,l=(0,n.cx)((0,o.veHeaderClass)(r),t);return i.default.createElement("h1",{className:l},a)};l.displayName="Header";var u=l;t.default=u},"ow/O":p3lM:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.FullWidthContainer=void 0;var i=r(a("q1tI")),n=a("Jqp9"),o=r(a("wXC7")),l=(0,n.css)("display:grid;gap:0;height:100%;width:100%;position:absolute;top:0;left:0;",o.default.breakpoint.medium,"{width:auto;}"),u=function(e){var t=e.children,a=e.style,r=e.className,o=(0,n.cx)(l,r);return i.default.createElement("div",{style:a,className:o},t)};t.FullWidthContainer=u,u.displayName="FullWidthContainer";var s=u;t.default=s},p4Bm:p4UL:pAoA:pN2f:pqFG:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=a("Jqp9"),o=a("VEQp"),l=function(e){var t=e.children,a=e.className;return i.default.createElement("div",{className:(0,n.cx)(a,o.bodyStylesClass)},t)};l.displayName="Body";var u=l;t.default=u},puoX:sPD7:sY3V:sbUJ:se5F:"sr+4":t8ND:t8ts:tVub:tmYY:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.leadingCardTextStyles=t.headlineClass=t.datelineClass=t.composedTextStyles=t.chevronIconClass=t.TLogoStyledLink=void 0;var i=a("Jqp9"),n=a("3sMT"),o=r(a("wXC7"));t.leadingCardTextStyles=function(e){return(0,i.css)("text-align:center;display:flex;flex-direction:column;justify-content:space-between;color:",e,";padding:1.25rem;.authors,.dateline{margin-bottom:1.25rem;}",o.default.breakpoint.medium,"{grid-column:1;color:",n.light.colors.content.primary.hex,";text-align:left;.authors{margin-bottom:1.875rem;}}")};t.composedTextStyles=function(e){return(0,i.css)("display:flex;justify-content:end;flex-direction:column;color:","black"===e?n.light.colors.content.primary.hex:n.dark.colors.content.primary.hex,";padding:1.25rem;",o.default.breakpoint.medium,"{color:",n.light.colors.content.primary.hex,";padding:1.875rem;justify-content:center;figcaption{display:none;}}")};var l=(0,i.css)("margin:auto;color:",n.dark.colors.content.primary,";",o.default.breakpoint.medium,"{display:none;}");t.chevronIconClass=l;var u=(0,i.styled)("a",{target:"e1tpfe8h0"})("display:none;",o.default.breakpoint.medium,"{display:flex;width:23px;height:30px;margin-bottom:1.875rem;}");t.TLogoStyledLink=u;var s=(0,i.css)(o.default.breakpoint.medium,"{text-align:left;font-size:36px;line-height:42px;}");t.headlineClass=s;var d=(0,i.css)(o.default.breakpoint.medium,"{text-align:left;}");t.datelineClass=d},tovF:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=r(a("5W65")),o=r(a("33qW")),l=r(a("pqFG")),u=a("y+Tm"),s=r(a("lxVW")),d=r(a("BtWR")),c=r(a("K1WC")),f=a("p3lM"),p=a("bkTY");function v(e){var t=e.index,a=e.url,r=e.author1,v=e.author2,h=e.photographer,m=e.dateline,g=e.body,E=e.heading1,y=e.headline,b=e.caption,O=e.credit,_=e.textColor,C=e.altText,P=e.renditions,T=e.promotionalMedia,A=e.type,I=g&&!E&&!b&&!O&&!a,S=!g&&!E&&!b&&!O&&a,w=!(!O&&!b||!E||!a),N=0!==t&&(g||E)?"end":"start";S&&(N="center");var R=(g||E)&&0!==t||S?1:2,x=[p.cardWrapperClass];0===t?x.push("leadCardColCls"):I||S?x.push("oneColCls"):x.push("twoColCls");var M=[p.desktopCaptionsCreditClass];w&&M.push("float");return i.default.createElement("article",{className:x.join(" ")},0===t&&i.default.createElement(f.FullWidthContainer,{className:p.leadTextHolderClass},i.default.createElement(n.default,{authors:{author1:r,author2:v},dateline:m,headline:y,photographer:h,textColor:_})),a&&i.default.createElement(i.default.Fragment,null,(b||O)&&i.default.createElement("figcaption",{className:M.join(" ")},b&&i.default.createElement(s.default,{caption:b}),O&&i.default.createElement(d.default,{credit:O})),i.default.createElement(f.FullWidthContainer,{className:(0,p.imageLayerClass)(N,R)},"video"===(null==A?void 0:A.toLowerCase())?i.default.createElement(c.default,{renditions:P,promotionalMedia:T}):i.default.createElement(u.Img,{src:a,className:p.imageClass,alt:C})),0!==t&&i.default.createElement(f.FullWidthContainer,{className:p.textOverlayClass},i.default.createElement(o.default,{heading1:E,body:g,caption:b,credit:O,index:t,textColor:a?_:"black"}))),I&&i.default.createElement(f.FullWidthContainer,{className:(0,p.imageLayerClass)("center")},i.default.createElement(l.default,{className:p.textOnlySlideClass},g)),a&&i.default.createElement(f.FullWidthContainer,null,0===t&&i.default.createElement(p.TopGradient,{height:"250px",width:"100%"}),i.default.createElement(p.BottomGradient,{height:"250px",width:"100%"})))}v.displayName="VisualEssayCard";var h=v;t.default=h},uCou:uV2a:uaZr:ubNJ:umtk:"uv3+":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.datelineClass=void 0;var i=a("Jqp9"),n=r(a("wXC7")),o=a("3sMT"),l=(0,i.css)("font-family:nyt-franklin;text-align:center;font-size:12px;line-height:14px;",n.default.breakpoint.medium,"{",o.font.franklin[10]," color:",o.light.colors.content.secondary.hex,";font-size:0.875rem;font-weight:500;line-height:1.125rem;}");t.datelineClass=l},vMgY:vVfR:w5WJ:wUso:wqUs:"y+Tm":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Img=void 0;var i=r(a("q1tI")),n=(0,a("Jqp9").styled)("img",{target:"e1a1jaus0"})("height:auto;display:block;object-fit:cover;object-position:",(,";"),o=function(e){var t=e.alt,a=e.className,r=e.src,o=e.width,l=e.height,u=e.objectPosition,s=e.style;return i.default.createElement(n,{draggable:!1,alt:t,src:r,width:o,height:l,style:s,objectPosition:u,className:a})};t.Img=o,o.displayName="Img";var l=o;t.default=l},y3IK:yyaF:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.captionClass=void 0;var i=a("Jqp9"),n=a("3sMT"),o=r(a("wXC7")),l=(0,i.css)(n.font.imperial[14],";text-align:left;line-height:1.125rem;font-weight:500;margin-top:1.25rem;max-width:250px;",o.default.breakpoint.medium,"{max-width:200px;color:#5a5a5a;}");t.captionClass=l},zBXA:zHsp:]);
//# sourceMappingURL=vendors~CardDeck~carddeck-2db510d76ea5a867e2be.js.map