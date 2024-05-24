"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1228],{12609:(o,t,e)=>{e.d(t,{K:()=>S});var s=e(50959),n=e(82187),a=e.n(n),r=e(43286),i=e(69736),l=e(11527);function c(o){let{children:t,...e}=o;return(0,l.jsx)(r.D,{as:"div",...e,buttonSize:e.buttonSize||r.D.sm,"data-testid":"podcast-sponsor-cta-button-base",children:(0,l.jsx)(i.x,{variant:"bodySmallBold",children:t})})}var d=e(23294);const p={podcastSponsorCallToActionButton:"WI4OWZsbabgCus7t7tbe"};function S(o){let{children:t,"data-testid":e,className:n,...r}=o;const i=(0,s.useMemo)((()=>(0,l.jsx)(d.x,{..."to"in r?{to:r.to}:void 0,children:(0,l.jsx)(c,{children:t,...r})})),[t,r]);return(0,l.jsx)("div",{className:a()(p.podcastSponsorCallToActionButton,n),"data-testid":e,children:i})}},23294:(o,t,e)=>{e.d(t,{x:()=>r});var s=e(50959),n=e(11527);const a=(0,s.lazy)((()=>Promise.resolve().then(e.bind(e,60046))));function r(o){return"to"in o?(0,n.jsx)(a,{...o}):(0,n.jsx)("div",{...o})}},21228:(o,t,e)=>{e.r(t),e.d(t,{MAX_SPONSORS_TO_DISPLAY_IN_PREVIEW_IF_SOME_ARE_HIDDEN:()=>A,ShowSponsorsPreviewWithData:()=>I,default:()=>C});e(46758),e(27082),e(86277);var s=e(50959),n=e(69736),a=e(96247),r=e(24071),i=e(82187),l=e.n(i),c=e(85648);const d={showSponsorAdvertiserName:"uMyxpLDoyTt8opzZ0Xmx"};var p=e(11527);function S(o){return(0,p.jsx)("span",{...o,className:l()(d.showSponsorAdvertiserName,o.className)})}const h={podcastSponsorWrapper:"wt_FLmr6yURrIEKAA1wq",podcastSponsor:"J7w1VFgufp6CwJfmBDqK",podcastSponsorExternalLink:"wDt8lZZDmfLSLf7gk_3t",podcastSponsorImage:"KfZtrIdxxMAXCPOXYmqa",podcastSponsorCaption:"jjySUpFnQoCfwrR2OL39",podcastSponsorAdvertiser:"rgcyNV3UEw3xd9_eQIVQ",podcastSponsorButtonMessage:"IJekfqpvW_dR0nJ0ErSQ",podcastSponsorCtaButtonWrapper:"LRT3GXRFbcLP1ls6zNW3",podcastSponsorCtaCardButton:"nPvT8P4sxeJDkRfrwO9V",container:"RxXawUmIzkwqVa0_ZiW3",isActive:"ZvoHFdRRo4chlAW1RsOs",title:"tr_1lx1gxyfA_z9IfGDC",main:"aAky0So7RUnwZ7RXG9l1",titleContainer:"MIDLeGE8OhRry3u0Varg",duration:"MrqiFBAyFydsw7VGXw7E",trailerContainer:"a_axzMhl0y_bp1Q4Jdp4",image:"S89qLyeJv1Bixu02smaz",imageContainer:"ZWYzMN1PQdwTk51bFHzK",playButton:"QynaKkVPIYRR227Q8h47",entityImageLarge:"b60TzAfy2fgI8kebahjA",entityImageSmall:"vTnjFyiWK393qyqmS0T7",showSponsorsPreview:"AJ7wtAniAY9zInlir0Fs",showSponsorsMeta:"YY79N31sxgwGlWiVgcWP",showSponsorsPreviewSingle:"FWr_c93thPLuvdjQVM5O",showSponsorsMetaSingle:"egcFmDmn9BO1r3yccCwq",showSponsorLogo:"E4xmwEEWQwLRazD9tysL",additionalSponsorsCount:"jLyG04llcQpQAZZM428Y"};function u(o){let{thereIsOnlyASingleShowSponsor:t,firstShowSponsor:e,showSponsorsDataThatActuallyGetDisplayedInPreview:s}=o;return(0,p.jsxs)(n.x,{className:l()(h.showSponsorsMeta,{[h.showSponsorsMetaSingle]:t}),children:[c.ag.get("podcast-ads.recent_ads_from"),(0,p.jsx)(S,{children:t?e.metadata.advertiser:s.length>2?c.ag.get("podcast-ads.recent_ads_more_than_two",...s.map((o=>o.metadata.advertiser))):c.ag.get("podcast-ads.recent_ads_just_two",...s.map((o=>o.metadata.advertiser)))}),"."]})}var w=e(36275),m=e(13707),v=e(23294);const g=6,f=38,x=`${f}px`;var _=e(12609),y=e(19934);const A=g-1;function I(o){const t={...o,fireTrackingEvent:o.fireTrackingEvent??m.I},{showSponsorsData:e,showId:i}=t,c=(0,y.D)(i),d=(0,s.useMemo)((()=>e.length>g?e.length-A:0),[e]),S=(0,s.useMemo)((()=>e.slice(0,d?A:g)),[e,d]),I=1===S.length,C=S[0],E=(0,r.s4)(),k=(0,m.G)(t.fireTrackingEvent);(0,s.useEffect)((function(){I&&S.forEach((o=>{let{trackingEvents:t}=o;return null==t?void 0:t.viewed.forEach(k)}))}),[I,S,k]);const P=(0,s.useCallback)((async o=>E.send((0,a.createPodcastAdCtaCardEvent)({uri:t.uri,reason:"Show page",lineitem_id:S.map((o=>o.metadata.lineitemId)),...o}))),[t.uri,S,E]);(0,s.useEffect)((function(){P()}),[t.showSponsorsData,P]);const j=function(o){let{thereIsOnlyASingleShowSponsor:t,props:e,allShowSponsorsPathname:n,sendPodcastAdCtaCardEventForShowSponsorsPreview:a,firstShowSponsor:r,fireTrackingEvent:i=m.I}=o;const c=(0,m.G)(i);return(0,s.useMemo)((()=>{const o=l()(h.showSponsorsPreview,{[h.showSponsorsPreviewSingle]:t}),s={"--max-sponsors-to-display-in-preview":g,"--logo-size":x};return t?function(t){return(0,p.jsx)(v.x,{className:o,style:s,to:r.clickthrough,...t,onClick:function(o){var e,s;null===(e=t.onClick)||void 0===e||e.call(t,o),null===(s=r.trackingEvents)||void 0===s||null===(s=s.clicked)||void 0===s||s.forEach(c),a({ui_navigate:[r.clickthrough],navigate_to_external_uri:[!0]})}})}:function(t){return(0,p.jsx)(w.rU,{className:o,style:s,to:{pathname:n},state:e,...t,onClick:function(o){var e;null===(e=t.onClick)||void 0===e||e.call(t,o),a({cta_card_see_all:!0})}})}}),[t,e,n,a,r,c])}({thereIsOnlyASingleShowSponsor:I,props:t,allShowSponsorsPathname:c,sendPodcastAdCtaCardEventForShowSponsorsPreview:P,firstShowSponsor:C});return(0,p.jsxs)(j,{children:[null==S?void 0:S.map(((o,t)=>(0,p.jsx)("img",{src:o.metadata.logoImage,alt:o.metadata.advertiser,width:f,height:f,className:h.showSponsorLogo},`logo image ${o.metadata.creativeId||o.metadata.creative_id||o.metadata.advertiser} - ${t}`))),d?(0,p.jsxs)(n.x,{className:h.additionalSponsorsCount,children:["+",d]}):null,(0,p.jsx)(u,{thereIsOnlyASingleShowSponsor:I,firstShowSponsor:C,showSponsorsDataThatActuallyGetDisplayedInPreview:S,numberOfHiddenSponsors:d}),I?(0,p.jsx)(_.K,{children:C.metadata.buttonMessage}):null]})}const C=I}}]);
//# sourceMappingURL=1228.d12675b9.js.map