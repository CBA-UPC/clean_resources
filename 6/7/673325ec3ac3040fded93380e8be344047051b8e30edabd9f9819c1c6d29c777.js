(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{73057:function(e,t,n){"use strict";n.d(t,{_:function(){return a}});var l=n(21477),o=n(12891),i=n(13048),r=n(36767),s=n(13661),u=n(44047);function a(e){var t=e.pageName,n=e.message,a=e.children,d=(0,i.$G)().t,c=(0,r.aC)().signIn,v=(0,r.aF)(),f=v.isFetching,m=v.user,h=v.isSuccess;return s.isSSR||f?(0,u.tZ)("div",{className:"w-full h-full flex flex-col flex-grow items-center justify-center",children:(0,u.tZ)(o.T,{size:80})}):h&&m?(0,u.tZ)(u.HY,{children:a}):(0,u.BX)("div",{className:"w-full h-full flex flex-col flex-grow items-center justify-center",children:[(0,u.tZ)("p",{className:"mt-8 type-headline-l text-center",children:n||(0,u.tZ)(i.cC,{i18nKey:"user-login-prompt",values:{pageName:t}})}),(0,u.tZ)("button",{type:"button",className:"btn bg-primary text-button-text text-button-m my-8",onClick:"data-testid":l.Sb,children:d("Sign In")})]})}},41393:function(e,t,n){"use strict";n.d(t,{D:function(){return u},t:function(){return s}});var l=n(41176),o=n(13048),i=n(52983),r=n(44047),s=(0,i.createContext)({});function u(e){var t=e.children,n=e.style,u=(0,o.$G)().t,a=(0,i.useState)(null),d=a[0],c=a[1],v=(0,i.useState)(!1),f=v[0],m=v[1],h=(0,i.useMemo)((,[c,m]);return(0,r.BX)(s.Provider,{value:h,children:[t,(0,r.tZ)(l.e,{isOpen:f,labelClose:u("Close"),requestClose:style:n,children:d})]})}s.displayName="ModalContext"},67405:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return J},default:function(){return K}});var l=n(93313),o=n(62873),i=n(12891),r=n(13048),s=n(65639),u=n.n(s),a=n(52983),d=n(73057),c=n(99798),v=n(91751),f=n(42584),m=n.n(f),h=n(90276),p=n(4722),g=n(38306),b=n(14517),y=n(72193),x=n(41393),w=n(36767),Z=n(46370),k=n(13661),C=n(18264),N=n(93004),I=n(44047);ar S={name:"1ml7lgf",styles:"color:var(--color-button-text-override, var(--color-white))"},j={name:"clsbmq",styles:"color:var(--color-button-text-override, var(--color-black))"},P={name:"26bywx",styles:"overflow-wrap:anywhere"};unction _(e,t){if(e&&t){var n=E(e),l=sessionStorage.getItem(n);if(l){var o=l.split(",");o.push(t),o=(0,v.Z)(new Set(o)),sessionStorage.setItem(n,o.join(","))}else sessionStorage.setItem(n,t)}}function B(e,t){if(e&&t){var n=E(e);return(sessionStorage.getItem(n)||"").split(",").includes(t)}return!1}function X(e){var t,n,l=e.offer,o=e.success,i=(0,a.useContext)(x.t).setIsOpen,s=(0,r.$G)().t;return(0,I.BX)("div",{className:"flex flex-col items-center py-12 px-8",children:[(0,I.tZ)("h1",{className:"type-headline-l",children:s(o?"thank-you":"something-went-wrong")}),(0,I.tZ)("p",{className:"type-body-m mt-2.5 text-center",children:o?(0,I.tZ)(h.H,{document:null===l||void 0===l||null===(t=l.ctaDescription)||void 0===t?void 0:t.json}):s("transaction-not-complete")}),o&&(0,I.tZ)("div",{className:"mt-8 max-w-sm",children:(0,I.tZ)(p.t,{alt:"offer",src:(null===l||void 0===l||null===(n=l.image)||void 0===n?void 0:n.url)||""})}),(0,I.tZ)("button",{type:"button",className:"btn bg-primary text-button-text text-button-m mt-8 w-full lg:w-48",onClick:children:s("Close")})]})}function F(e){var t=e.isPromotion,n=(0,w.XR)(),l=(0,r.$G)().t;return n&&n.promotion&&n.promotion.reason===y.Fh.JustForYou&&t?(0,I.BX)("div",{className:"flex text-xs mb-4 text-white",children:[(0,I.tZ)(g.T,{className:"mr-1 w-4 h-4"}),(0,I.tZ)("p",{className:"uppercase font-bold",children:l("just-for-you")})]}):null}function T(e){var t=e.data,n=e.claimOffer,o=e.isClaiming,i=e.isClaimed,s=(0,w.aF)().user,u={},t),a=u.skuId,d=(0,r.$G)().t,c=(0,w.XR)(),v=(0,I.tZ)("button",{type:"button",disabled:i||B(null===s||void 0===s?void 0:s.userId,null===t||void 0===t?void 0:t.skuId),css:S,className:(0,b.Z)("btn text-button-text text-button-m bg-primary w-full lg:w-max",o&&"loading"),onClick:n,children:i||B(null===s||void 0===s?void 0:s.userId,null===t||void 0===t?void 0:t.skuId)?d("offer-claimed"):d("claim-now")});return c&&c.promotion&&(null===c||void 0===c?void 0:c.promotion).reason===y.Fh.JustForYou&&a?(0,I.tZ)(C.i,{css:j,children:(0,I.tZ)(N.d,{showBuyPriceLabel:!0})}):v}function D(e){var t,n,l,o,i=e.data,r=e.isPromotion,s=(0,w.aF)().user,u=(0,w.aC)().getValidAccessToken,d=(0,a.useState)(!(null===i||void 0===i||!i.isClaimed)),v=d[0],f=d[1],h=(0,a.useState)(!1),g=h[0],b=h[1],y=(0,a.useContext)(x.t),C=y.setContent,N=y.setIsOpen,O=null===i||void 0===i?void 0:i.offerTile,S=(0,a.useCallback)((0,c.Z)(m().mark((function e(){var t,n,l,o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,u();case 3:return n=e.sent,e.next=6,(0,Z.AC)(n,(null===s||void 0===s?void 0:s.userId)||"",(null===i||void 0===i?void 0:i.skuId)||"");case 6:l=e.sent,o={skuId:null===i||void 0===i?void 0:i.skuId,elementPlacement:null===O||void 0===O||null===(t=O.header)||void 0===t?void 0:t.text,userId:null===s||void 0===s?void 0:s.userId,text:l.ok?"Thank you":"Something went wrong"},(0,k.sendCtaEvent)(k.CtaEvent.clickButton,o),C&&N&&(l.ok?(_(null===s||void 0===s?void 0:s.userId,null===i||void 0===i?void 0:i.skuId),f(!0),(0,k.sendCtaEvent)(k.CtaEvent.claimSuccess,o)):(0,k.sendCtaEvent)(k.CtaEvent.claimError,o),C((0,I.tZ)(X,{offer:O,success:l.ok})),N(!0)),b(!1);case 11:case"end":return e.stop()}}),e)}))),[C,N,O,null===i||void 0===i?void 0:i.skuId,null===s||void 0===s?void 0:s.userId,u]);return(0,I.BX)("div",{className:"lg:flex lg:p-9 lg:gap-x-8 p-7 bg-neutral-100 rounded-lg",children:[(0,I.tZ)("div",{className:"flex justify-center lg:basis-64 lg:grow-0 lg:shrink-0",children:(0,I.tZ)(p.t,{alt:"offer",src:(null===O||void 0===O||null===(t=O.image)||void 0===t?void 0:t.url)||""})}),(0,I.BX)("div",{css:P,children:[(0,I.tZ)("h1",{className:"type-headline-m pb-4 mt-7 lg:mt-0",children:null===O||void 0===O||null===(n=O.header)||void 0===n?void 0:n.text}),(0,I.tZ)(F,{isPromotion:r}),(0,I.tZ)("div",{className:"mb-4 border-b border-neutral-999-20"}),(null===O||void 0===O||null===(l=O.legalText)||void 0===l?void 0:l.text)&&(0,I.tZ)("p",{className:"mb-4 type-body-m",children:null===O||void 0===O||null===(o=O.legalText)||void 0===o?void 0:o.text}),r&&(0,I.tZ)(T,{data:i,isClaiming:g,isClaimed:v,claimOffer:S})]})]})}var G=n(47388),H=n(68817),$=n(89021),Y={borderWidth:"0px",borderBottomWidth:"1px",borderColor:"rgba(var(--color-neutral-999-rgb), 0.2)"},M={content:{width:"42rem",height:"max-content",position:"relative"},overlay:{display:"flex",justifyContent:"center",alignItems:"center"}};function R(e){var t,n,l,o=e.data;return(0,I.BX)("div",{className:"mt-8",children:[(0,I.tZ)(r.cC,{i18nKey:null===o||void 0===o||null===(t=o.headline)||void 0===t?void 0:t.key,children:(0,I.tZ)("div",{children:null===o||void 0===o||null===(n=o.headline)||void 0===n?void 0:n.fallback})}),(0,I.tZ)("ul",{className:"list-disc list-inside ms-2.5",children:null===o||void 0===o||null===(l=o.linkItems)||void 0===l?void 0:l.map((function(e){return(0,I.tZ)("li",{className:"type-body-s",children:(0,I.tZ)(r.cC,{i18nKey:null===e||void 0===e?void 0:e.key,children:(0,I.tZ)("a",{className:"underline",href:null===e||void 0===e?void 0:e.url,target:"_blank",rel:"noreferrer noopener",children:null===e||void 0===e?void 0:e.fallback})})},null===e||void 0===e?void 0:e.key)}))})]})}var J=!0;function K(e){var t,n,s,c,v=e.noOfferContent,f=(0,r.$G)().t,m=(0,w.aF)(),h=(0,$.F)(),p=h.offers,g=h.isFetching,b=(0,a.useState)(m.isFetching||g),y=b[0],Z=b[1],C=!!(null!==p&&void 0!==p&&p.promotions&&null!==p&&void 0!==p&&null!==(t=p.promotions)&&void 0!==t&&t.length||null!==p&&void 0!==p&&p.coupons&&null!==p&&void 0!==p&&null!==(n=p.coupons)&&void 0!==n&&n.length);function N(e){var t,n;e.skuId&&(t=(0,l.Z)({},e.skuId,null===(n=p.skus)||void 0===n?void 0:n.filter(()));return t}return(0,a.useEffect)((function(){var e=function(e){if(e.data&&"string"===typeof e.data)try{var t,n=JSON.parse(e.data);if("change-status"===n.command)"done"===(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.value)&&Z(!0)}catch(l){}};return window.addEventListener("message",e),),[]),(0,a.useEffect)((,[g]),(0,a.useEffect)((function(){y||(0,k.sendVirtualPageView)(C?"offers":"offers/no-offers","My Offers")}),[y,C]),(0,I.BX)(x.D,{style:M,children:[(0,I.tZ)(u(),{children:(0,I.tZ)("title",{children:f("my-offers")})}),(0,I.tZ)("section",{className:"layout-content py-16 flex flex-col flex-grow w-full max-w-layout mx-auto",children:(0,I.BX)(d._,{pageName:f("my-offers"),children:[(0,I.tZ)(o.H,{className:"type-headline-l 3xl:type-headline-xl pb-4 w-full mb-4 3xl:mb-8",css:Y,children:f("my-offers")}),y?(0,I.tZ)(i.T,{}):(0,I.BX)(I.HY,{children:[!C&&(0,I.BX)(I.HY,{children:[(0,I.tZ)("span",{children:f("no-available-offers")}),(0,I.tZ)(R,{data:v})]}),(0,I.BX)("div",{className:"grid gap-4 grid-flow-row auto-rows-[minmax(160px,auto)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2",children:[null===p||void 0===p||null===(s=p.promotions)||void 0===s?void 0:s.map((function(e){var t;return(0,I.tZ)(H.jW,{value:N(e),children:(0,I.tZ)(H.z_,{value:e.skuId,children:(0,I.tZ)(G.R,{children:(0,I.tZ)(D,{data:e,isPromotion:!0})})})},null===(t=e.sys)||void 0===t?void 0:t.id)})),null===p||void 0===p||null===(c=p.coupons)||void 0===c?void 0:c.map((function(e){var t;return(0,I.tZ)(D,{data:e},null===(t=e.sys)||void 0===t?void 0:t.id)}))]})]})]})})]})}},38306:function(e,t,n){"use strict";n.d(t,{T:);n(52983);var l=n(81473),o=function(e){return(0,l.jsx)("svg",e,(0,l.jsx)("path",{style:{fill:"currentColor"},d:"m22.41 12.58-9-9C13.05 3.22 12.55 3 12 3H5c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42ZM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8Z"}))};o.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},88838:,function(e){e.O(0,[774,888,179],();var t=e.O();_N_E=t}]);