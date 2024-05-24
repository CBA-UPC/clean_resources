"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};define("gtmEvents",["app","siteObj","$console"],(function(e,t,n){var r={init:function t(){window.dataLayer=window.dataLayer||[],e.subscribe("tracking/record",(function(e,t,n,i){r._record(e,t,n,i)})),e.subscribe("ga4tracking/record",(function(e,t,n,r){var i={event:e,event_name:t,ecommerce:{currencyCode:n,items:r}};window.dataLayer.push(i)})),e.subscribe("ga4tracking/record/coupon",(function(e,t,n){var r={event:e,event_name:t,coupon_code:n};window.dataLayer.push(r)})),e.subscribe("ga4tracking/record/filter",(function(e,t,n){var r={event:e,event_name:t,filter:n};window.dataLayer.push(r)})),e.subscribe("tracking/recordEach",(function(e,t){r._record(e,t)})),e.subscribe("tracking/widget",(function(e){r._widgetTrack(e)})),e.subscribe("tracking/pyop",(function(e){r._pyopTrack(e)})),e.subscribe("tracking/ecommerce",(function(e,t,n,i,c){r._ecommerce(e,t,n,i,c)})),e.subscribe("tracking/fieldtiming",(function(e,t,n,i){r._fieldtiming(e,t,n,i)}))},_gtmEventTrack:function e(r){if(t.debugFlag&&n.debug("%cGTM Event","background: #222; color: #2196f3",r),"object"===(void 0===r?"undefined":_typeof(r)))return window.dataLayer.push(r),true;return false},_record:function e(n,r,i,c){if("Widget Track"===n&&t.config.useGa4EnhancedEcom){var a="clicked"===r.toLowerCase()?"select_promotion":"view_promotion";return this._gtmEventTrack({event:"elysiumEvent",eventData:{eventCategory:n,eventAction:r,eventLabel:i,eventLabelValue:c,eventPage:window.location.pathname}}),this._gtmEventTrack({event:"ecom_event",event_name:a,ecommerce:{items:[{promotion_name:i,promotion_id:c}]}})}return this._gtmEventTrack({event:"elysiumEvent",eventData:{eventCategory:n,eventAction:r,eventLabel:i,eventLabelValue:c,eventPage:window.location.pathname}})},_defaultTrack:function e(t,n,r){var i={};if(null!==t&&""!==t)return i[t]=void 0===r?null:r,i.type=n,this._gtmEventTrack(i);return false},_widgetTrack:function t(n){var r=n,i=e.element.getAttribute("href",r),c=e.element.getAttribute("data-block-type",r),a=e.element.getAttribute("data-block-name",r),o=e.element.closest(".trackwidget",r);return c=c?" "+c:o?o.getAttribute("data-block-type"):"",a||o&&(a=o.getAttribute("data-block-name")),null!==a&&""!==a?a.replace(/[^a-zA-Z0-9. ]/g,""):a="No widget description",this._gtmEventTrack({event:"elysiumEvent",eventData:{eventCategory:"Widget Track"+c,eventAction:i,eventLabel:a,eventPage:window.location.pathname}})},_pyopTrack:function t(n){var r,i=e.element.getAttribute("href",n).split("=")[1];return this._gtmEventTrack({event:"elysiumEvent",eventData:{eventCategory:"PYOP",eventAction:i,eventLabel:"click",eventPage:window.location.pathname}})},_ecommerce:function e(t,n,r,i,c){var a={event:t,ecommerce:{}};switch(n){case"remove":case"add":a.ecommerce[n]={},r&&(a.ecommerce[n][r]=i);break;default:break}return c&&(a.ecommerce.currencyCode=c),this._gtmEventTrack(a)},_fieldtiming:function e(t,n,r,i){var c={event:"formTimer",formtiming:{timingCategory:t,timingVariable:n,timingLabel:r,timingValue:i}};return this._gtmEventTrack(c)},getPrice:function r(i,c){try{var a;if("myprotein"===t.siteCode||"massint"===t.siteCode||"pmint"===t.siteCode){if("product"===i)return[a=t.productPrice.split(";")[1]||t.productPrice,t.currencyType];if("list"===i){try{a=e.select(".price-box .price").elements[0][0].innerText.split(/\n/)[1].slice(1,-1)}catch(e){n.error("Error getting price")}return a||(a=c.parentNode.parentNode.querySelectorAll(".price span")[0].innerText),[a,t.currencyType]}}else{if("product"===i)return[a=t.productPrice.split(";")[1]||t.productPrice,t.currencyType];if("list"===i)return[e.select(".price span:first-child").elements[0][0].innerText.slice(1,-1),t.currencyType]}}catch(e){n.error("Error finding price: "+e)}},buildArgs:function e(){for(var t=[],n=0;n<arguments.length;n++)if(Array.isArray(arguments[n]))for(var r=0;r<arguments[n].length;r++)t.push(arguments[n][r]);else t.push(arguments[n]);return t},getSku:function e(n,r){var i=r;if(r||(i=t.page||t.type),!arguments.length||"product"===i)return t.productID;return n.split("/")[n.split("/").length-1].split(".")[0]},bannerLink:function t(n){if(!n)return null;var r=n,i;while(!i)e.element.hasClass("carouselMain__imageContainer",n)?i=r.parentNode.href:e.element.hasClass("carousel-main",n)?i="Unable to find href":r=r.parentNode;return i}};return r.init(),r}));
//# sourceMappingURL=gtm-events-7545965c81.js.map
PriceFormatted:{min:u,max:d},listPriceFormatted:{min:p,max:f}}}let h=_(Y),g=O(Y),Z=L(Y),j=_(Y,!0),v=L(Y,!0),S=et(Y,{isBundleProduct:er});return{isRange:e,isSalesRange:!1,isListRange:!1,dohPrice:h,salesPrice:g,listPrice:Z,dohPriceFormatted:j,salesPriceFormatted:S,listPriceFormatted:v}},[Y]),en=(0,i.useMemo)(()=>c()(Y,"maxDiscount.isDiscountSame",!1),[Y]),eo=(0,i.useMemo)(()=>"range"===c()(Y,"type"),[Y]),es=(0,i.useMemo)(()=>{if(Y){let e=c()(Y,"maxDiscount.maxDiscount");if(!m()(e))return`${e}`;if(A){let r=c()(Y,"promotionDiscPercent");if(!m()(r))return T({id:"plp.promotion.discountPercent",defaultMessage:"With {discount}"},{discount:r})}if(eo){let t=c()(Y,"min.discountPercentage");if(!m()(t))return`${t}`}else{let a=c()(Y,"discountPercentage");if(!m()(a))return`${a}`;{let i=c()(Y,"markdownDiscPercent");if(!m()(i))return`${i}`}}}return null},[r,eo,Y]),el=(0,i.useMemo)(()=>{if(z&&A){let e=c()(Y,"markdownDiscPercent");if(!m()(e))return`${e}`}return null},[eo,Y]),ec=(0,i.useMemo)(()=>!m()(es)&&"0"!==es,[es]),eu=(0,i.useMemo)(()=>{let e=c()(r,"variantsOnSale",[]),t=c()(r,"enableSwatches",[]),a=c()(r,"pickedProps.promotionData.isOnSale",!1);return P(e,a,H,J,ec,d,t)},[r,H,J,d,ec]),em=(0,i.useMemo)(()=>!m()(c()(Y,"promotionalPrice")),[Y]),ed=z&&(ec||ei?.isSalesRange),ep=(0,i.useMemo)(()=>!w&&!!ec&&(!h||!d),[w,ec,h,d]),ef=(0,i.useMemo)(()=>(!Q||!R||!z||!!(!em&&ep&&(!er||er&&h&&N)&&!D)||!!(h&&ec&&!d&&!b)||"searchSuggestions"===u)&&ed,[W,ed,em,ep,er,h,N,ec,d,b]),ex=(0,i.useMemo)(()=>({as:"span",variant:"body-text-secondary",size:"md",...q.mainPrice({showRed:ef})}),[V,ef]),eP=(0,i.useMemo)(()=>({color:V.colors.main.gray,textDecoration:"line-through",ml:V.space.s,...ex}),[V,ex]),eh=(0,i.useMemo)(()=>"plpV2"==u?{fontFamily:V.fontFamily.primaryNormal,textDecoration:"line-through",color:"#6D6D6D",ml:V.space.xs}:{},[V,u]),eg=(0,i.useMemo)(()=>{let e=ea();return"plpV2"==u&&h&&(!(h&&ec&&!d&&!b&&!er)||m()(e))?{mb:"22px"}:{}},[u,h,ec,d,er]),eZ=(0,i.useMemo)(()=>({...ex,size:"sm",color:V.colors.neutral.dark}),[V,ex]),ej=(0,i.useMemo)(()=>({...ex,size:d?"sm":"xl"}),[ex,d]),ev=(0,i.useMemo)(()=>h?{...ex,color:V.colors.main.saleRed,size:"sm",ml:"s"}:{...ex,color:V.colors.main.gray},[ex,V,h]),eS=(0,i.useMemo)(()=>{let e=c()(ei,"dohPriceFormatted");return m()(e)?h?ec&&ef?{...ej,color:V.colors.main.saleRed}:ej:ex:{...eP,ml:A?V.space.xs:0,mr:A?0:V.space.xs,pt:V.space.xs}},[ex,eP,ej,V,ei,h,ec]),eM=(0,i.useMemo)(()=>ec?h?T({id:"plp.price.discount",defaultMessage:"({discount}% off)"},{discount:es}):d?eo?T({id:"plp.price.uptodiscount",defaultMessage:"(Up to {discount}%)"},{discount:es}):`(${es}%)`:!en&&(eo||ei.isSalesRange)?T({id:"plp.price.uptodiscount",defaultMessage:"(Up to {discount}%)"},{discount:es}):T({id:"plp.price.discount",defaultMessage:j.Z?"({discount}%)":"{discount}% off"},{discount:es}):null,[ec,en,eo,ei,d,h,es]),eb=c()(r,"promotionPrice[0].listPriceCaption",""),eD=(0,i.useMemo)(()=>ei?.listPriceFormatted!==ei?.salesPriceFormatted&&er&&N,[er,N]),eF=(0,i.useCallback)(()=>!eM||$&&"plpV2"===u?null:(0,a.jsx)(s.Z,{...ev,sx:{...q.prices,...X},"data-qa":c()(l,"dataQaDiscountPercent.m"),children:eM}),[eM,ev,l]),ey=()=>{if(!ei||ei.isRange)return null;let e=c()(ei,"salesPriceFormatted"),r=ec?c()(l,"datQaDiscountedPrice.m"):c()(l,"datQaProductPrice.m"),t=B&&em?{...q.prices,...em?{}:q.fullWidth}:q.prices;return(0,a.jsxs)(s.Z,{className:`salesPrice ${em&&"dohPrice"}`,sx:t,...eS,"data-qa":r,children:[!m()(e)&&e," ",B&&em&&!m()(el)&&`(${el}% off)`]})},ek=()=>(0,a.jsx)(s.Z,{...ex,ml:"s",color:V.colors.main.gray,"data-qa":c()(l,"dataQaDiscountPercent.m"),children:`${es}%`}),eT=()=>{if(!ei)return null;let{isSalesRange:e,salesPriceFormatted:r}=ei;return ei.isRange?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{sx:e||"plpV2"===u?q.prices:q.sameRangePrice,...ex,"data-qa":c()(l,"datQaLowerPrice.m"),children:!m()(r.min)&&r.min}),e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{sx:q.prices,...ex,children:"\xa0-\xa0"}),(0,a.jsx)(s.Z,{sx:q.prices,...ex,"data-qa":c()(l,"datQaHigherPrice.m"),children:!m()(r.max)&&r.max})]})]}):ey()};return(0,a.jsxs)(o.Z,{flexWrap:"wrap",justifyContent:h&&d&&C?"center":"start",flexDirection:"column","data-qa":c()(l,"headerSearchPriceWrap.m"),sx:{...K,...U?q.kssPriceWrapper:{}},children:[h&&ec&&!d&&!b&&!er&&(()=>{let e=ea();return m()(e)?null:(0,a.jsxs)(o.Z,{className:"comparablePriceWrapper","data-qa":c()(l,"comparableValueWrapper.m"),sx:q.comparablePriceWrapper,children:[(0,a.jsx)(s.Z,{"data-qa":c()(l,"comparableValueText.m"),...eZ,mr:"4px",sx:q.comparablePriceTheme?.(y),children:T({id:"plp.price.comparablevalue",defaultMessage:"Comparable Value"})}),(0,a.jsx)(s.Z,{"data-qa":c()(l,"comparableValuePrice.m"),...eZ,sx:q.comparablePriceTheme?.(y),children:e})]})})(),(0,a.jsxs)(a.Fragment,{children:[eD&&h&&(eb?(0,a.jsxs)(o.Z,{className:"comparablePriceWrapper","data-qa":c()(l,"comparableValueWrapper.m"),sx:q.comparablePriceWrapper,children:[(0,a.jsx)(s.Z,{"data-qa":c()(l,"comparableValueText.m"),...eZ,mr:"4px",sx:q.comparablePriceTheme(),children:eb}),(0,a.jsx)(s.Z,{"data-qa":c()(l,"comparableValuePrice.m"),...eZ,sx:q.comparablePriceTheme(),children:ei&&!m()(ei?.listPriceFormatted)&&ei?.listPriceFormatted})]}):null),(0,a.jsx)(o.Z,{className:"salePriceWrapper",sx:{...q.renderSalePriceWrapper,...eg},children:(0,a.jsxs)(a.Fragment,{children:[B||!em?eT():null,er&&!h&&(()=>{if(!N||!r?.custom?.c_bundlePrice||!ei||eb&&h)return null;let{isListRange:e,isRange:t,listPriceFormatted:i}=ei,n=t?i.min:i;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{...eP,sx:X,"data-qa":c()(l,"dataQaStrikePrice.m"),children:!m()(n)&&n}),e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{...eP,children:"\xa0-\xa0"}),(0,a.jsx)(s.Z,{...eP,"data-qa":c()(l,"dataQaStrikePrice.m"),children:!m()(i.max)&&i.max})]}),!w&&ec&&ek()]})})(),em?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{...ex,"data-qa":c()(l,"datQaDiscountedPrice.m"),sx:q.dohPromoPrice,children:!p()(ei.dohPriceFormatted)&&!m()(ei.dohPriceFormatted)&&ei.dohPriceFormatted}),A&&eT(),!w&&ec&&(0,a.jsx)(s.Z,{...ex,"data-qa":c()(l,"dataQaDiscountPercent.m"),sx:q.dohPromoPricePercentage,children:`(${es}% off)`})]}):(0,a.jsxs)(a.Fragment,{children:[eu&&!er&&!h&&(()=>{if(!ei)return null;let{isRange:e,isListRange:r,listPriceFormatted:t}=ei,i=e?t.min:t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{...eP,"data-qa":c()(l,"dataQaStrikePrice.m"),sx:r&&e?{}:{...q.prices,...X,...eh},children:!m()(i)&&i}),r&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{sx:q.removeStrikethroughTextProps,...eP,children:"\xa0-\xa0"}),(0,a.jsx)(s.Z,{...eP,mr:V.space.s,"data-qa":c()(l,"dataQaStrikePrice.m"),children:!m()(t.max)&&t.max})]})]})})(),ep&&(!er||er&&h&&N)&&(!D||ee)&&eF()]})]})})]})]})};var D=(0,h.Z)((0,i.memo)(b))},11263:function(e,r,t){t.d(r,{Z:function(){return P}});var a=t(85893),i=t(67294),n=t(66436),o=t(79863),s=t(27361),l=t.n(s),c=t(78718),u=t.n(c),m=t(61853),d=t(56021),p=t(8204),f=t(37082);let x=e=>{var r;let{isParentFocused:t,isParentHovered:s,activeProductId:c,colorName:x,onImageLoad:P,displayedThumbnails:h,lazyLoadImage:g,preloadImageSrc:Z,alt:j,...v}=e,[S,M]=(0,i.useState)(0),{isDesktop:b}=(0,f.Z)(),D=(0,i.useRef)(),{toggleSiteFeatures:{showAnimation:F=!1,tileImageAnimationDelay:y=0}}=(0,p.Z)({ToggleSiteFeatures:["showAnimation","tileImageAnimationDelay"]});(0,i.useEffect)(()=>{let e=()=>{D?.current&&clearTimeout(D.current)};if(s&&h?.length>1)return e(),D.current=setTimeout(()=>M(r=>r===h?.length-1?(e(),0):r+1),y),()=>{e()};t||(e(),M(0))},[S,s,h,y,t]),(0,i.useEffect)(()=>{t?M(e=>{let r=e+1;return r<=h?.length?r:e}):M(0)},[t]);let{src:k,alt:T=j}=(0,i.useMemo)(()=>{let e=s&&h?.length>1?1:0;return u()(l()(h,e),["src","alt"])},[h,s]),q=((r={maxHeight:"296px",aspectRatio:1.24,maxWidth:"100%",objectFit:"cover",sx:{height:"100%"}}).htmlWidth=237,r.htmlHeight=296,r),V=b?d.default:n.Z;return(0,a.jsx)(V,{variant:"productTile",placement:"bottom",fontSize:"xs",children:(0,a.jsx)(n.Z,{children:(s||t)&&F&&h?.length>1?(0,a.jsx)(o.Z,{style:{transform:`translate3d(${-(100*S)}%)`,transition:"0.2s transform ease"},src:h[S]?.src,lazy:g,...q,...v,title:x}):(0,a.jsx)(o.Z,{lazy:g,fetchpriority:Z===k?"high":"low",src:k,alt:T,title:x,onImageLoad:P,...q,...v,"data-qa":l()(m.A,"plp.productTitleImageLink.m")})})})};var P=(0,i.memo)(x)},64915:function(e,r,t){t.d(r,{Z:function(){return n}});var a=t(67294),i=t(8204);function n(){let{generalConfiguration:{siteIdentifier:e},priceSitePreferences:{priceRangeToggle:r,promotionalPriceToggle:t,markDownPriceStyle:n=!1},toggleSiteFeatures:{hideStrikeOffPrice:o},bundleConfigurations:{showBundleListPrice:s}}=(0,i.Z)({generalConfiguration:["siteIdentifier"],priceSitePreferences:["priceRangeToggle","promotionalPriceToggle","markDownPriceStyle"],ToggleSiteFeatures:["hideStrikeOffPrice"],bundleConfigurations:["showBundleListPrice"]}),l="ksna-surprise"===(e?.value||e);return(0,a.useMemo)(()=>({markdownPriceEnabled:n,showBundleListPrice:s,isHideStrikeOffPriceEnabled:o,showPromotionalPrice:t,isPriceRangeToggleEnabled:r,isKsSur:l}),[n,s,o,t,r,l])}}}]);