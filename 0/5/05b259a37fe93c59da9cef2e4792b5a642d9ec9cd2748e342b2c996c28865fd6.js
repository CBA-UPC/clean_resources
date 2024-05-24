/**/
cXJsonpCB15({"httpStatus":200,"response":{}})push([[1919],{94943:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){{const l=o(92235).normalizeLocalePath,u=o(69205).detectDomainLocale,a=t||l(e,n).detectedLocale,c=u(r,void 0,a);if(c){const t=`http${c.http?"":"s"}://`,o=a===c.defaultLocale?"":`/${a}`;return`${t}${c.domain}${o}${e}`}return!1}};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},94793:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(23903).Z,r=o(15154).Z,l=n(o(70804)),u=o(32172),a=o(37787),c=o(60950),s=o(40177),f=o(22104),i=o(94943),d=o(99094);const p={};function y(e,t,o,n){if(!e)return;if(!u.isLocalURL(t))return;Promise.resolve(e.prefetch(t,o,n)).catch((e=>{0}));const r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;p[t+"%"+o+(r?"%"+r:"")]=!0}var h=l.default.forwardRef((function(e,t){let o;const{href:n,as:h,children:v,prefetch:m,passHref:b,replace:g,shallow:_,scroll:C,locale:L,onClick:x,onMouseEnter:M,onTouchStart:j,legacyBehavior:P=!0!==Boolean(!1)}=e,R=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=v,!P||"string"!==typeof o&&"number"!==typeof o||(o=l.default.createElement("a",null,o));const E=!1!==m;let O=l.default.useContext(c.RouterContext);const k=l.default.useContext(s.AppRouterContext);k&&(O=k);const{href:w,as:T}=l.default.useMemo((()=>{const[e,t]=u.resolveHref(O,n,!0);return{href:e,as:h?u.resolveHref(O,h):t||e}}),[O,n,h]),S=l.default.useRef(w),$=l.default.useRef(T);let I;P&&(I=l.default.Children.only(o));const D=P?I&&"object"===typeof I&&I.ref:t,[U,z,B]=f.useIntersection({rootMargin:"200px"}),N=l.default.useCallback((e=>{$.current===T&&S.current===w||(B(),$.current=T,S.current=w),U(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[T,D,w,B,U]);l.default.useEffect((()=>{const e=z&&E&&u.isLocalURL(w),t="undefined"!==typeof L?L:O&&O.locale,o=p[w+"%"+T+(t?"%"+t:"")];e&&!o&&y(O,w,T,{locale:t})}),[T,w,z,L,E,O]);const A={ref:N,onClick:e=>{P||"function"!==typeof x||x(e),P&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,a,c,s,f,i){const{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(o)))return;e.preventDefault();const p=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:s,scroll:c}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!i})};f?l.default.startTransition(p):p()}(e,O,w,T,g,_,C,L,Boolean(k),E)},onMouseEnter:e=>{P||"function"!==typeof M||M(e),P&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),!E&&k||u.isLocalURL(w)&&y(O,w,T,{priority:!0})},onTouchStart:e=>{P||"function"!==typeof j||j(e),P&&I.props&&"function"===typeof I.props.onTouchStart&&I.props.onTouchStart(e),!E&&k||u.isLocalURL(w)&&y(O,w,T,{priority:!0})}};if(!P||b||"a"===I.type&&!("href"in I.props)){const e="undefined"!==typeof L?L:O&&O.locale,t=O&&O.isLocaleDomain&&i.getDomainLocale(T,e,O.locales,O.domainLocales);A.href=t||d.addBasePath(a.addLocale(T,e,O&&O.defaultLocale))}return P?l.default.cloneElement(I,A):l.default.createElement("a",Object.assign({},R,A),o)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92235:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0;t.normalizeLocalePath=(e,t)=>o(49574).normalizeLocalePath(e,t),("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},22104:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:c}=e;const s=c||!l,[f,i]=n.useState(!1),[d,p]=n.useState(null);n.useEffect((()=>{if(l){if(s||f)return;if(d&&d.tagName){const e=function(e,t,o){const{id:n,observer:r,elements:l}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},o=a.find((e=>e.root===t.root&&e.margin===t.margin));let n;if(o&&(n=u.get(o),n))return n;const r=new Map,l=new IntersectionObserver((e=>{e.forEach((e=>{const t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return n={id:t,observer:l,elements:r},a.push(t),u.set(t,n),n}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(n);const e=a.findIndex((e=>e.root===n.root&&e.margin===n.margin));e>-1&&a.splice(e,1)}}}(d,(e=>e&&i(e)),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!f){const e=r.requestIdleCallback((()=>i(!0)));return()=>r.cancelIdleCallback(e)}}),[d,s,o,t,f]);const y=n.useCallback((()=>{i(!1)}),[]);return[p,f,y]};var n=o(70804),r=o(80564);const l="function"===typeof IntersectionObserver,u=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},40177:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(23903).Z)(o(70804));const r=n.default.createContext(null);t.AppRouterContext=r;const l=n.default.createContext(null);t.LayoutRouterContext=l;const u=n.default.createContext(null);t.GlobalLayoutRouterContext=u;const a=n.default.createContext(null);t.TemplateContext=a},39097:function(e,t,o){e.exports=o(94793)},5632:function(e,t,o){e.exports=o(25564)},68764:function(e,t){var o,n,r;n=[],void 0===(r="function"===typeof(o=function(){var e=function(){},t={},o={},n={};function r(e,t){e=e.push?e:[e];var r,l,u,a=[],c=e.length,s=c;for(r=function(e,o){o.length&&a.push(e),--s||t(a)};c--;)l=e[c],(u=o[l])?r(l,u):(n[l]=n[l]||[]).push(r)}function l(e,t){if(e){var r=n[e];if(o[e]=t,r)for(;r.length;)r[0](e,t),r.splice(0,1)}}function u(t,o){t.call&&(t={success:t}),o.length?(t.error||e)(o):(t.success||e)(t)}function a(t,o,n,r){var l,u,c,s=document,f=n.async,i=(n.numRetries||0)+1,d=n.before||e,p=t.replace(/[\?|#].*$/,""),y=t.replace(/^(css|img|module|nomodule)!/,"");if(r=r||0,/(^css!|\.css$)/.test(p))(c=s.createElement("link")).rel="stylesheet",c.href=y,(l="hideFocus"in c)&&c.relList&&(l=0,c.rel="preload",c.as="style");else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p))(c=s.createElement("img")).src=y;else if((c=s.createElement("script")).src=y,c.async=void 0===f||f,u="noModule"in c,/^module!/.test(p)){if(!u)return o(t,"l");c.type="module"}else if(/^nomodule!/.test(p)&&u)return o(t,"l");c.onload=c.onerror=c.onbeforeload=function(e){var u=e.type[0];if(l)try{c.sheet.cssText.length||(u="e")}catch(s){18!=s.code&&(u="e")}if("e"==u){if((r+=1)<i)return a(t,o,n,r)}else if("preload"==c.rel&&"style"==c.as)return c.rel="stylesheet";o(t,u,e.defaultPrevented)},!1!==d(t,c)&&s.head.appendChild(c)}function c(e,t,o){var n,r,l=(e=e.push?e:[e]).length,u=l,c=[];for(n=function(e,o,n){if("e"==o&&c.push(e),"b"==o){if(!n)return;c.push(e)}--l||t(c)},r=0;r<u;r++)a(e[r],n,o)}function s(e,o,n){var r,a;if(o&&o.trim&&(r=o),a=(r?n:o)||{},r){if(r in t)throw"LoadJS";t[r]=!0}function s(t,o){c(e,(function(e){u(a,e),t&&u({success:t,error:o},e),l(r,e)}),a)}if(a.returnPromise)return new Promise(s);s()}return s.ready=function(e,t){return r(e,(function(e){u(t,e)})),s},s.done=function(e){l(e,[])},s.reset=function(){t={},o={},n={}},s.isDefined=function(e){return e in t},s})?o.apply(t,n):o)||(e.exports=r)}}]);
//# sourceMappingURL=1919-697bb8e8ea0d5526.js.mapdle widget, just make sure that the product is active in your online shop.';console.warn(errorMessage);if(typeof errorCallback==='function'){errorCallback();}}else{data=cart.removeUnusedProductProperties(data);data=cart.modifyProductStructure(data);local.save(data.handle,data);}});},addToCart:function(rootUrl,id,quantity,properties){var url=rootUrl+'cart/add.js?bundler-cart-call';return $.ajax({url:url,data:{id:id,quantity:quantity,properties:properties},type:'POST',dataType:'json'});},addMultipleItemsToCart:function(rootUrl,items){var url=rootUrl+'cart/add.js?bundler-cart-call';var totalQuantityCount={};for(var i=0;i<items.length;i++){var key=JSON.stringify(items[i]);if(typeof totalQuantityCount[key]==='undefined'){totalQuantityCount[key]=JSON.parse(JSON.stringify(items[i]));totalQuantityCount[key]['quantity']=totalQuantityCount[key]['quantity']*1;}else{totalQuantityCount[key]['quantity']+=items[i]['quantity']*1;}}
var items=[];for(var key in totalQuantityCount){if(totalQuantityCount.hasOwnProperty(key)){items.push(totalQuantityCount[key]);}}
return $.ajax({url:url,data:{items:items},type:'POST',dataType:'json'});},updateCart:function(){this.get().done(function(data){try{var itemCount=data.item_count;$('[data-cart-item-count]').html(itemCount);$('.header__cart-count').html(itemCount);$('.site-header__cart-count span[data-cart-count]').html(itemCount);if($('#CartCount [data-cart-count]').length>0){$('#CartCount [data-cart-count]').html(itemCount);}else if($('#CartCount').length>0){$('#CartCount').html($('#CartCount').html().replace(/(\d+)/,data.item_count));}
if($('#CartCount.hide').length>0){$('#CartCount.hide').removeClass('hide');}
if($('#site-cart-handle .count-holder .count').length>0){$('#site-cart-handle .count-holder .count').html($('#site-cart-handle .count-holder .count').html().replace(/(\d+)/,data.item_count));}
if($('#minicart .count.cart-target').length>0){$('#minicart .count.cart-target').html($('#minicart .count.cart-target').html().replace(/(\d+)/,data.item_count));}
if($('#sidebar #meta .count').length>0){$('#sidebar #meta .count').html($('#sidebar #meta .count').html().replace(/(\d+)/,data.item_count));}
if($('.site-header__cart .site-header__cart-indicator').length>0){$('.site-header__cart .site-header__cart-indicator').html($('.site-header__cart .site-header__cart-indicator').html().replace(/(\d+)/,data.item_count));if(data.item_count>0){$('.site-header__cart .site-header__cart-indicator').removeClass('hide');}}
if($('.cart-count').length>0){$('.cart-count').html($('.cart-count').html().replace(/(\d+)/,data.item_count));}
if($('.cartCount[data-cart-count]').length>0){$('.cartCount[data-cart-count]').html($('.cartCount[data-cart-count]').html().replace(/(\d+)/,data.item_count));}
if($('[data-js-cart-count-desktop]').length>0){$('[data-js-cart-count-desktop]').html(data.item_count);$('[data-js-cart-count-desktop]').attr('data-js-cart-count-desktop',data.item_count);}
if($('.cart-item-count-header').length>0){var $itemCountHeader=$('.cart-item-count-header').first();if($itemCountHeader.hasClass('cart-item-count-header--total')===true){if($itemCountHeader.find('.money').length){$itemCountHeader=$itemCountHeader.find('.money').first();$itemCountHeader.html(bndlr.formatPrice(data.items_subtotal_price));}}else{$itemCountHeader.html($itemCountHeader.html().replace(/(\d+)/,data.item_count));}}
if(typeof refreshCart=='function'){refreshCart(data);}
if(typeof slate!=='undefined'&&typeof slate.cart!=='undefined'&&typeof slate.cart.updateCart=='function'){slate.cart.updateCart();}
if(typeof ajaxCart!=='undefined'&&typeof ajaxCart.load==='function'){ajaxCart.load();}
if($('.mega-nav-count.nav-main-cart-amount.count-items').length>0){$('.mega-nav-count.nav-main-cart-amount.count-items').html($('.mega-nav-count.nav-main-cart-amount.count-items').html().replace(/(\d+)/,data.item_count));$('.mega-nav-count.nav-main-cart-amount.count-items.hidden').removeClass('hidden');}
if($('#cart-icon-bubble').length>0){var cntSelector='#cart-icon-bubble .cart-count-bubble span[aria-hidden="true"]';if($(cntSelector).length>0){$(cntSelector).html($(cntSelector).html().replace(/(\d+)/,data.item_count));}else{$('#cart-icon-bubble').append('<div class="cart-count-bubble"><span aria-hidden="true">'+data.item_count+'</span></div>');}}
if(typeof Shopify!=='undefined'&&typeof Shopify.updateQuickCart!=='undefined'){Shopify.updateQuickCart(data);}
if(typeof bcActionList!=='undefined'&&typeof bcActionList.atcBuildMiniCartSlideTemplate==='function'){bcActionList.atcBuildMiniCartSlideTemplate(data);if(typeof openMiniCart==='function'){openMiniCart();}}
if($('.custom-cart-eye-txt').length>0){$('.custom-cart-eye-txt').html($('.custom-cart-eye-txt').html().replace(/(\d+)/,data.item_count));}
if($('.cart_count').length>0){$('.cart_count').each(function(k,e){$(e).html($(e).html().replace(/(\d+)/,data.item_count));});}
if($('.cart-count-bubble [data-cart-count]').length>0){$('.cart-count-bubble [data-cart-count]').html($('.cart-count-bubble [data-cart-count]').html().replace(/(\d+)/,data.item_count));}
if($('.cart-count-bubble span.visually-hidden').length>0){$('.cart-count-bubble span.visually-hidden').html($('.cart-count-bubble span.visually-hidden').html().replace(/(\d+)/,data.item_count));}
if(typeof Shopify!=='undefined'&&typeof Shopify.updateCartInfo!=='undefined'&&$('.top-cart-holder .cart-target form .cart-info .cart-content').length>0){Shopify.updateCartInfo(data,'.top-cart-holder .cart-target form .cart-info .cart-content');}
var event=new CustomEvent("wetheme-toggle-right-drawer",{detail:{type:'cart',forceOpen:undefined,params:{cart:data},},});document.documentElement.dispatchEvent(event);if(typeof window.vndHlp!=='undefined'&&typeof window.vndHlp.refreshCart==='function'){window.vndHlp.refreshCart(data);}
try{if(typeof window.renderCart==='function'){window.renderCart(data);if(data.items.length>0){var $cart=$('.mini-cart.is-empty');$cart.removeClass('is-empty');}}}catch(e){}
try{if(typeof window.SATCB!=='undefined'&&typeof window.SATCB.Helpers!=='undefined'&&typeof window.SATCB.Helpers.openCartSlider==='function'){window.SATCB.Helpers.openCartSlider();}}catch(e){}
try{document.dispatchEvent(new CustomEvent('theme:cart:change',{detail:{cart:data},bubbles:true}))}catch(e){}
if(typeof window.cartStore!=='undefined'&&typeof window.cartStore.setState==='function'){window.cartStore.setState({justAdded:{},popupActive:true,item_count:data.item_count,items:data.items,cart:data});}
if(typeof window.Shopify!=='undefined'&&typeof window.Shopify.onCartUpdate==='function'){if(Shopify.onCartUpdate.toString().indexOf('There are now')===-1){window.Shopify.onCartUpdate(data,true);}}
if(typeof theme!=='undefined'&&typeof theme.Cart!=='undefined'&&typeof theme.Cart.setCurrentData==='function'){theme.Cart.setCurrentData(data);}
if(typeof window.halo!=='undefined'&&typeof window.halo.updateSidebarCart==='function'){window.halo.updateSidebarCart(data);var $sideBarCartIcon=$('[data-cart-sidebar]');if($sideBarCartIcon.length>0){$sideBarCartIcon[0].click();}}
if(typeof window.Shopify!=='undefined'&&typeof window.Shopify.theme!=='undefined'&&typeof window.Shopify.theme.ajaxCart!=='undefined'&&typeof window.Shopify.theme.ajaxCart.updateView==='function'){Shopify.theme.ajaxCart.updateView({cart_url:'/cart'},data);}
if(typeof window.theme!=='undefined'&&typeof window.theme.cart!=='undefined'&&typeof window.theme.cart.updateAllHtml==='function'){try{window.theme.cart.updateAllHtml();window.theme.cart.updateTotals(data);document.querySelector('.header--cart-toggle').click();}catch(e){}}
if(typeof monster_setCartItems==='function'){try{monster_setCartItems(data.items);}catch(e){console.error(e);}}
try{if(typeof window.refreshCartContents!=='undefined'){window.refreshCartContents(data);}}catch(e){}
window.dispatchEvent(new Event('update_cart'));if(typeof clientSpecifics['update_cart']!=='undefined'){clientSpecifics['update_cart'].trigger(data);}}catch(e){bundlerConsole.log(e);}});if(typeof window.SLIDECART_UPDATE!=='undefined'){try{window.SLIDECART_UPDATE();}catch(e){bundlerConsole.log(e);}}
if(typeof window.SLIDECART_OPEN!=='undefined'){setTimeout(function(){try{window.SLIDECART_OPEN();}catch(e){bundlerConsole.log(e);}},500);}
if(typeof Shopify!=='undefined'&&typeof Shopify.theme!=='undefined'&&typeof Shopify.theme.jsAjaxCart!=='undefined'&&typeof Shopify.theme.jsAjaxCart.updateView==='function'){Shopify.theme.jsAjaxCart.updateView();}
if(typeof CartJS!=='undefined'&&typeof CartJS.getCart==='function'){try{CartJS.getCart();}catch(e){bundlerConsole.log(e);}}
if($('.sp-cart .sp-dropdown-toggle').length&&typeof Shopify!=='undefined'&&typeof Shopify.getCart==='function'){Shopify.getCart();}
if($('form.cart-drawer').length>0){$('.cart-drawer input').first().trigger('blur');setTimeout(function(){$('.cart-drawer input').first().trigger('input');},350);}
try{document.dispatchEvent(new CustomEvent('cart:refresh'));}catch(e){}
try{document.documentElement.dispatchEvent(new CustomEvent('cart:refresh',{bubbles:true}));}catch(e){}
if(typeof window.HsCartDrawer!=='undefined'&&typeof window.HsCartDrawer.updateSlideCart==='function'){debounce('hscartdrawer',function(){try{HsCartDrawer.updateSlideCart();}catch(e){bundlerConsole.log(e);}},100);}
if(typeof window.HS_SLIDE_CART_OPEN!=='undefined'&&typeof window.HS_SLIDE_CART_OPEN==='function'){debounce('hscartdraweropen',function(){try{window.HS_SLIDE_CART_OPEN()}catch(e){bundlerConsole.log(e);}},100);}
if(typeof theme!=='undefined'&&typeof theme.Cart!=='undefined'&&typeof theme.Cart.updateCart==='function'){theme.Cart.updateCart();}
if(typeof window.cart!=='undefined'&&typeof window.cart.getCart==='function'){window.cart.getCart();}
if(typeof window.updateMiniCartContents==='function'){try{window.updateMiniCartContents();}catch(e){}}
if(typeof window.loadEgCartDrawer==='function'){try{window.loadEgCartDrawer();}catch(e){}}
try{document.dispatchEvent(new CustomEvent('cart:build'));}catch(e){}
try{document.dispatchEvent(new CustomEvent('obsidian:upsell:refresh'));document.dispatchEvent(new CustomEvent('obsidian:upsell:open'));}catch(e){}
var siteCart=document.getElementById('site-cart');if(siteCart!==null){try{siteCart.show();}catch(e){}}
if(typeof window.theme!=='undefined'&&typeof window.theme.updateCartSummaries==='function'){try{window.theme.updateCartSummaries();}catch(e){}}
if(typeof window.CD_REFRESHCART!=='undefined'){try{window.CD_REFRESHCART();}catch(e){bundlerConsole.log(e);}}
if(typeof window.CD_OPENCART!=='undefined'){setTimeout(function(){try{window.CD_OPENCART();}catch(e){bundlerConsole.log(e);}},500);}
if(typeof window.buildCart==='function'){try{window.buildCart();}catch(e){bundlerConsole.log(e);}}
if(typeof window.PXUTheme!=='undefined'&&typeof window.PXUTheme.jsAjaxCart!=='undefined'&&typeof window.PXUTheme.jsAjaxCart.updateView==='function'){try{window.PXUTheme.jsAjaxCart.updateView();}catch(e){}}
if(typeof window.theme!=='undefined'&&typeof window.theme.addedToCartHandler==='function'){try{window.theme.addedToCartHandler({});}catch(e){}}
try{var event=new Event('tcustomizer-event-cart-change');document.dispatchEvent(event);}catch(e){}
try{var cartEl1=document.querySelector('cart-notification')||document.querySelector('cart-drawer');if(cartEl1!==null&&typeof cartEl1.renderContents==='function'){var promise=fetch(nav.getRootUrl(true)+'cart?sections=cart-drawer,cart-icon-bubble',{method:'GET',cache:'no-cache',credentials:'same-origin',headers:{'Content-Type':'application/json'}}).then(function(data){var cartDrawer=document.querySelector('cart-drawer.drawer.is-empty');if(cartDrawer!==null){cartDrawer.classList.remove('is-empty');}
try{return data.clone().json().then(function(p){try{var newData={sections:p};cartEl1.renderContents(newData);}catch(e){console.error(e);}});}catch(e){console.error(e);}});}}catch(e){console.error(e);}
try{var cartEl=document.querySelector('mini-cart')||document.querySelector('cart-drawer');if(cartEl!==null&&typeof cartEl.renderContents==='function'){var sections=cartEl.getSectionsToRender().map((section)=>section.id);var promise=fetch(nav.getRootUrl(true)+'cart?sections='+sections.toString(),{method:'GET',cache:'no-cache',credentials:'same-origin',headers:{'Content-Type':'application/json'}}).then(function(data){try{return data.clone().json().then(function(p){try{var newData={sections:p};cartEl.renderContents(newData);}catch(e){console.error(e);}});}catch(e){console.error(e);}});}}catch(e){console.error(e);}
bndlr.hideDynamicCheckoutButtons();}};var nav={getRootUrl:function(withLocale){if(typeof withLocale==='undefined'){withLocale=false;}
var locale='';if(withLocale){locale=this.getUrlLocale();}
if(this.isShopPage()===false){return 'https://wsj-magazine.myshopify.com/';}else{var url=window.location.origin?window.location.origin+'/':window.location.protocol+'//'+window.location.host+'/';if(locale.length>0){url+=locale+'/';}
return url;}},isShopPage:function(){if(typeof Shopify!=='undefined'&&Shopify.shop==='wsj-magazine.myshopify.com'){return true;}
return false;},getInvoiceEndpoint:function(withExtraInfo,additionalGetParams){if(typeof withExtraInfo==='undefined'){withExtraInfo=false;}
if(typeof additionalGetParams==='undefined'){additionalGetParams='';}
var ssad=false;if(typeof window.SealSubs!=='undefined'&&typeof window.SealSubs.discounts_apply_on_initial_order==='boolean'){ssad=SealSubs.discounts_apply_on_initial_order;}
var extraParam='';if(withExtraInfo){extraParam='&extra=true';}
var customerId='';if(typeof window.meta!=='undefined'&&typeof window.meta.page!=='undefined'&&typeof window.meta.page.customerId!=='undefined'){customerId=window.meta.page.customerId;}
if(customerId!==''){extraParam+='&customer_id='+encodeURIComponent(customerId);}
return this.getAppUrl()+'cdo.php?v31&shop=wsj-magazine.myshopify.com&ssad='+ssad.toString()+extraParam+additionalGetParams;},getAppUrl:function(){return 'https://bundler.nice-team.net/app/api/';},isCartPage:function(){if(/\/cart\/?/.test(window.location.href)){return true;}
return false;},isProductPage:function(){if(/\/products\/([^\?\/\n]+)/.test(window.location.href)){return true;}
return false;},getProductHandle:function(){var href=window.location.href;href=href.replace('/products/products/','/products/');if(/\/products\/([^\?#\/\n]+)/i.test(href)){var found=href.match(/\/products\/([^\?#\/\n]+)/i);if(typeof found[1]!=='undefined'){return found[1];}}
return false;},getVariantId:function(){var qp=this.getQueryParams(window.location.search);if(typeof qp['variant']!=='undefined'){return qp['variant'];}
return '';},getQueryParams:function(qs){qs=qs.split('+').join(' ');var params={},tokens,re=/[?&]?([^=]+)=([^&]*)/g;while(tokens=re.exec(qs)){params[decodeURIComponent(tokens[1])]=decodeURIComponent(tokens[2]);}
return params;},getQuickCheckoutUrl:function(name,id){return 'https://wsj-magazine.myshopify.com/a/bundles/checkout/'+utils.encodeName(name)+'-'+utils.encodeId(id);},getLandingPageUrl:function(name,id){var url='a/bundles/'+utils.encodeName(name)+'-'+utils.encodeId(id);var rootUrl=this.getRootUrl(true);return rootUrl+url;},getLocale:function(){if(typeof Shopify!=='undefined'&&typeof Shopify.locale==='string'){return Shopify.locale}
return '';},getUrlLocale:function(){var baseUrl=this.getRootUrl();var locale=this.getLocale();if(typeof window.Shopify!=='undefined'&&typeof Shopify.routes!=='undefined'&&typeof Shopify.routes.root==='string'){locale=Shopify.routes.root.replace(/\//g,'');}
if(locale!==''){if(window.location.href.indexOf(baseUrl+locale+'/')===0){return locale;}}
return '';}};var utils={getRandomString:function(){var result='';var characters='abcdefghijklmnopqrstuvwxyz0123456789';var charactersLength=characters.length;var a=[];for(var i=0;i<15;i++){a.push(characters.charAt(Math.floor(Math.random()*charactersLength)));}
return a.join('');},encodeId:function(num){var chrs='0123456789abcdefghijklmnopqrstuvwxyz';var result='';var l=chrs.length;while(num){result=chrs.charAt(num%l)+result;num=parseInt(num/l);}
return result;},deCompress:function(code){var chrs='0123456789abcdefghijklmnopqrstuvwxyz';var result=0;var cl=code.length;for(var i=0;i<cl;i++){result=(result*chrs.length+chrs.indexOf(code.charAt(i)));}
return result;},encodeName:function(name){name=name.toLowerCase();name=name.replace(/\s/g,'-');name=name.replace(/[/$\\?%#]/g,'');return name;},formatMoney:function(cents,format,fallbackCurrency,directionFor50){if(typeof directionFor50==='undefined'){var directionFor50='up';}
try{if(typeof cents=='string'){cents=cents.replace('.','');}
var value='';var placeholderRegex=/\{\{\s*(\w+)\s*\}\}/;var formatString=format;function defaultOption(opt,def){return(typeof opt=='undefined'?def:opt);}
function formatWithDelimiters(number,precision,thousands,decimal,directionFor50){precision=defaultOption(precision,2);thousands=defaultOption(thousands,',');decimal=defaultOption(decimal,'.');directionFor50=defaultOption(directionFor50,'up');if(isNaN(number)||number==null){return 0;}
var originalNumber=number;number=(number/100.0).toFixed(precision);if(directionFor50==='down'){if(((originalNumber/100)-number)===-0.5){number-=1;number=number.toString();}}
var parts=number.split('.'),dollars=parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1'+thousands),cents=parts[1]?(decimal+parts[1]):'';return dollars+cents;}
switch(formatString.match(placeholderRegex)[1]){case 'amount':value=formatWithDelimiters(cents,2);break;case 'amount_no_decimals':value=formatWithDelimiters(cents,0,',','.',directionFor50);break;case 'amount_with_comma_separator':value=formatWithDelimiters(cents,2,'.',',');break;case 'amount_no_decimals_with_comma_separator':value=formatWithDelimiters(cents,0,'.',',',directionFor50);break;case 'amount_no_decimals_with_space_separator':value=formatWithDelimiters(cents,0,' ',',',directionFor50);break;case 'amount_with_apostrophe_separator':value=formatWithDelimiters(cents,2,"'",'.');break;}
return formatString.replace(placeholderRegex,value);}catch(e){bundlerConsole.log(e.message);price=cents/100;return price.toLocaleString(undefined,{style:'currency',currency:fallbackCurrency});}},convertMoney:function(value,rate,currency,useRounding){if(value<=0){return 0;}
if(typeof useRounding==='undefined'){useRounding=true;}
value*=rate;var roundUp=['USD','CAD','AUD','NZD','SGD','HKD','GBP'];var roundTo100=['JPY','KRW'];var roundTo95=['EUR'];if(useRounding){if(roundUp.indexOf(currency)!==-1){value=Math.ceil(value);}else if(roundTo100.indexOf(currency)!==-1){value=Math.ceil(value/100)*100}else if(roundTo95.indexOf(currency)!==-1){value=Math.ceil(value)-0.05;}}else{var lessThanDecimals=value-Math.floor(value*100)/100;if(lessThanDecimals>0.005){value=Math.floor(value*100)/100;}else{value=Math.ceil(value*100)/100;}}
return value;},getListOfValues:function(object,key){var list='';for(var k in object){if(object.hasOwnProperty(k)){if(typeof object[k][key]!=='undefined'){list+=object[k][key]+',';}}}
list=list.replace(/,+$/,'');return list;},getCurrencySymbol:function(currency){var symbol='';try{symbol=(0).toLocaleString(undefined,{style:'currency',currency:currency,minimumFractionDigits:0,maximumFractionDigits:0}).replace(/\d/g,'').trim();}catch(e){}
if(symbol!==''){return symbol;}
return currency;}};function ProductsLib(){this._library={};};ProductsLib.prototype.get=function(key){if(typeof key==='undefined'){return JSON.parse(JSON.stringify(this._library));}else if(typeof this._library[key]!=='undefined'){return JSON.parse(JSON.stringify(this._library[key]));}else{return{};}};ProductsLib.prototype.isEmpty=function(key){if(typeof key==='undefined'){return true;}else if(typeof this._library[key]!=='undefined'){return(Object.keys(this._library[key]).length==0);}else{return true;}};ProductsLib.prototype.set=function(key,products){this._library[key]=JSON.parse(JSON.stringify(products));};var Library={Products:new ProductsLib(),RequiredProducts:new ProductsLib(),DiscountedProducts:new ProductsLib(),MixAndMatchBundles:new ProductsLib(),SectionedBundlesProducts:new ProductsLib(),SectionedBundlesProductsSelected:new ProductsLib()};function ProductsTools(){};ProductsTools.prototype.setLibraries=function(Library,bundleId){var discountedProducts=Library.DiscountedProducts.get();if(discountedProducts.hasOwnProperty(bundleId)){var products={};for(var productId in discountedProducts[bundleId]){if(discountedProducts[bundleId].hasOwnProperty(productId)){products[productId]=Library.Products.get(productId);}}
Library.DiscountedProducts.set(bundleId,products);}
var requiredProducts=Library.RequiredProducts.get();if(requiredProducts.hasOwnProperty(bundleId)){var products={};for(var productId in requiredProducts[bundleId]){if(requiredProducts[bundleId].hasOwnProperty(productId)){products[productId]=Library.Products.get(productId);}}
Library.RequiredProducts.set(bundleId,products);}
var sectionedBundlesProducts=Library.SectionedBundlesProducts.get();if(sectionedBundlesProducts.hasOwnProperty(bundleId)){var sections=[];for(var sectionId in sectionedBundlesProducts[bundleId]){if(sectionedBundlesProducts[bundleId].hasOwnProperty(sectionId)){var section=sectionedBundlesProducts[bundleId][sectionId];var sectionProducts={};for(var productId in section){if(section.hasOwnProperty(productId)){sectionProducts[productId]=Library.Products.get(productId);}}
sections.push(sectionProducts);}}
Library.SectionedBundlesProducts.set(bundleId,sections);}};ProductsTools.prototype.setRequiredVariantLinePrices=function(Library,bundle){var requiredProducts=Library.RequiredProducts.get(bundle.id);for(var key in requiredProducts){if(requiredProducts.hasOwnProperty(key)){var productId=requiredProducts[key].product_id;if(typeof bundle.required_products[productId]!=='undefined'){var quantity=bundle.required_products[productId].quantity;for(var i=0;i<requiredProducts[key].variants.length;i++){var price=Tools.Price.getPrice(requiredProducts[key].variants[i].price)*quantity;var compareAtLinePrice=Tools.Price.priceOrZero(requiredProducts[key].variants[i].compare_at_price)*quantity;requiredProducts[key].variants[i].linePrice=price;requiredProducts[key].variants[i].compareAtLinePrice=compareAtLinePrice;requiredProducts[key].variants[i].discountedPriceQuantity=quantity;}}}}
Library.RequiredProducts.set(bundle.id,requiredProducts);}
function PriceTools(){};PriceTools.prototype.getPrice=function(price){if(typeof price.indexOf==='function'&&price.indexOf('.')!==-1){price=price*100;}
return price;};PriceTools.prototype.priceOrZero=function(price){if(typeof price==='undefined'||price===''||price===null){return 0;}
return this.getPrice(price);};var Tools={Products:new ProductsTools(),Price:new PriceTools()};var ProductRetrievalRequests={};var ProductRetrievalStatus={};var BndlrAnalytics={init:function(){},track:function(what,productId,variantId,quantity){if(what==='addtocart'){if(typeof fbq==='function'){try{var eventId='id_'+Date.now();fbq('track','AddToCart',{content_ids:[productId],content_type:'product',contents:[{id:productId,quantity:parseInt(quantity,10)}]},{eventID:eventId});}catch(e){console.log(e);}}}
if(what==='initiateCheckout'){}}};BndlrAnalytics.init();var dbBundles=[{"id":347585,"name":"Discount","title":"Buy in bulk and get a discount!","description":"The more you buy, the more you save!","button_text":"Add to cart","discount_warning":"Discounts will be applied at checkout.","discount_type":"percentage","percentage_value":"10","fixed_amount_value":"","fixed_price_value":"","priority":100,"status":"enabled","product_level":"product","total_price_text":"Total: {original_price} {discounted_price}","minimum_requirements":"volume_discounts","minimum_requirements_num":1,"minimum_requirements_n_max_products":null,"show_bundle":"true","bundle_image":"","list_product_names":"true","mix_and_match_display":"false","free_shipping":"false","is_volume_bundle":"true","product_target_type":"specific_products","volume_bundle_combine_quantites":"false","limit_for_customer_tags":[],"use_date_condition":"false","date_from":null,"date_to":null,"tags_additional_options":"","is_standalone_product_bundle":"false","volume_bundle_cart_value_use_all_products":"false","products":{"7797751972038":{"id":"7797751972038","title":"3M to Pay Billions To Settle Chemicals Lawsuits | The Wall Street Journal -- Fri., June 23, 2023","quantity":1,"discount_amount":0,"image":"","sequence":1,"required":0,"status":"active","variants":{"42721027555526":{"id":"42721027555526","title":"","quantity":1,"discount_amount":0,"sequence":1,"required":0,"was_deleted":0}},"handle":"copy-of-beijing-sets-plan-to-revive-flagging-economy-the-wall-street-journal-fri-june-16-2023"},"7807119753414":{"id":"7807119753414","title":"A Soft Landing In Sight For U.S. Economy | The Wall Street Journal -- Sat.\/Sun., July 29\/30, 2023","quantity":1,"discount_amount":0,"image":"","sequence":2,"required":0,"status":"active","variants":{"42755554672838":{"id":"42755554672838","title":"","quantity":1,"discount_amount":0,"sequence":2,"required":0,"was_deleted":0}},"handle":"copy-of-the-wall-street-journal-sat-sun-july-29-30-2023"},"7807120081094":{"id":"7807120081094","title":"AI Roundtable - Cutting Through The Hype | Barron's, August 21, 2023","quantity":1,"discount_amount":0,"image":"","sequence":3,"required":0,"status":"active","variants":{"42755555459270":{"id":"42755555459270","title":"","quantity":1,"discount_amount":0,"sequence":3,"required":0,"was_deleted":0}},"handle":"barrons-august-21-2023"},"7778670117062":{"id":"7778670117062","title":"Air Guardsman Arrested Over Leaked Papers | The Wall Street Journal -- Fri., April 14, 2023","quantity":1,"discount_amount":0,"image":"","sequence":4,"required":0,"status":"active","variants":{"42655959843014":{"id":"42655959843014","title":"","quantity":1,"discount_amount":0,"sequence":4,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-april-14-2023"},"7797357248710":{"id":"7797357248710","title":"Alibaba Shuffles Top Posts In Major Shake-Up | The Wall Street Journal -- Wed., June 21, 2023","quantity":1,"discount_amount":0,"image":"","sequence":5,"required":0,"status":"active","variants":{"42717542482118":{"id":"42717542482118","title":"","quantity":1,"discount_amount":0,"sequence":5,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-june-21-2023"},"7774049534150":{"id":"7774049534150","title":"Alibaba To Split Six Ways And Look Into IPOs | The Wall Street Journal -- Wed., March 29, 2023","quantity":1,"discount_amount":0,"image":"","sequence":6,"required":0,"status":"active","variants":{"42640723673286":{"id":"42640723673286","title":"","quantity":1,"discount_amount":0,"sequence":6,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-march-29-2023"},"7812529619142":{"id":"7812529619142","title":"Aramco\u2019s Profit Falls 38% On Lower Oil Prices | The Wall Street Journal -- Tue., August  08, 2023","quantity":1,"discount_amount":0,"image":"","sequence":8,"required":0,"status":"active","variants":{"42768518643910":{"id":"42768518643910","title":"","quantity":1,"discount_amount":0,"sequence":8,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-august-08-2023"},"7771089993926":{"id":"7771089993926","title":"Attacks Add to Mideast Tests For U.S. | The Wall Street Journal -- Sat.\/Sun., March 25\/26, 2023","quantity":1,"discount_amount":0,"image":"","sequence":9,"required":0,"status":"active","variants":{"42630526664902":{"id":"42630526664902","title":"","quantity":1,"discount_amount":0,"sequence":9,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-march-25-26-2023"},"7777701920966":{"id":"7777701920966","title":"Back At The Ranch | Mansion Global, Spring 2023","quantity":1,"discount_amount":0,"image":"","sequence":10,"required":0,"status":"active","variants":{"42652684910790":{"id":"42652684910790","title":"","quantity":1,"discount_amount":0,"sequence":10,"required":0,"was_deleted":0}},"handle":"mansion-global-spring-2023"},"7805034954950":{"id":"7805034954950","title":"Bankers Pressured By Slump In Deals, Trading | The Wall Street Journal -- Wed., July 19, 2023","quantity":1,"discount_amount":0,"image":"","sequence":11,"required":0,"status":"active","variants":{"42749067755718":{"id":"42749067755718","title":"","quantity":1,"discount_amount":0,"sequence":11,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-july-19-2023"},"7771089109190":{"id":"7771089109190","title":"Banking Shares Propel Market Rally | The Wall Street Journal -- Wed., March 22, 2023","quantity":1,"discount_amount":0,"image":"","sequence":12,"required":0,"status":"active","variants":{"42630525550790":{"id":"42630525550790","title":"","quantity":1,"discount_amount":0,"sequence":12,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-march-22-2023"},"7778669789382":{"id":"7778669789382","title":"Banking Volatility Hinders Growth, IMF Says | The Wall Street Journal -- Wed., April 12, 2023","quantity":1,"discount_amount":0,"image":"","sequence":13,"required":0,"status":"active","variants":{"42655958466758":{"id":"42655958466758","title":"","quantity":1,"discount_amount":0,"sequence":13,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-april-12-2023"},"7795876364486":{"id":"7795876364486","title":"Beijing Sets Plan To Revive Flagging Economy | The Wall Street Journal -- Fri., June 16, 2023","quantity":1,"discount_amount":0,"image":"","sequence":14,"required":0,"status":"active","variants":{"42713213731014":{"id":"42713213731014","title":"","quantity":1,"discount_amount":0,"sequence":14,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-june-16-2023"},"7792928096454":{"id":"7792928096454","title":"Biden, McCarthy Move Fast To Sell Debt Deal | The Wall Street Journal -- Tue., May 30, 2023","quantity":1,"discount_amount":0,"image":"","sequence":15,"required":0,"status":"active","variants":{"42704436035782":{"id":"42704436035782","title":"","quantity":1,"discount_amount":0,"sequence":15,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-may-30-2023"},"7803561312454":{"id":"7803561312454","title":"Big Bank Earnings Inspire Economic Optimism | The Wall Street Journal -- Sat.\/Sun., July 15\/16, 2023","quantity":1,"discount_amount":0,"image":"","sequence":16,"required":0,"status":"active","variants":{"42743688855750":{"id":"42743688855750","title":"","quantity":1,"discount_amount":0,"sequence":16,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-july-15-16-2023"},"7782369296582":{"id":"7782369296582","title":"Big Banks Eye First Republic As It Teeters | The Wall Street Journal -- Sat.\/Sun., April 29\/30, 2023","quantity":1,"discount_amount":0,"image":"","sequence":17,"required":0,"status":"active","variants":{"42670308425926":{"id":"42670308425926","title":"","quantity":1,"discount_amount":0,"sequence":17,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-april-29-30-2023"},"7778670280902":{"id":"7778670280902","title":"Big Banks Post Blowout Quarter | The Wall Street Journal -- Sat.\/Sun., April 15\/16, 2023","quantity":1,"discount_amount":0,"image":"","sequence":18,"required":0,"status":"active","variants":{"42655961120966":{"id":"42655961120966","title":"","quantity":1,"discount_amount":0,"sequence":18,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-april-15-16-2023"},"7815425851590":{"id":"7815425851590","title":"Binance Faces Legal Risks Over Russia | The Wall Street Journal -- Wed., August 23, 2023","quantity":1,"discount_amount":0,"image":"","sequence":19,"required":0,"status":"active","variants":{"42776708448454":{"id":"42776708448454","title":"","quantity":1,"discount_amount":0,"sequence":19,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-august-23-2023"},"7776640237766":{"id":"7776640237766","title":"Blinken Prods Russia to Free WSJ Reporter | The Wall Street Journal -- Mon., April 03, 2023","quantity":1,"discount_amount":0,"image":"","sequence":20,"required":0,"status":"active","variants":{"42649828819142":{"id":"42649828819142","title":"","quantity":1,"discount_amount":0,"sequence":20,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-april-03-2023"},"7786306207942":{"id":"7786306207942","title":"Border Surge Eases After Rule Expires | The Wall Street Journal -- Sat.\/Sun., May 13\/14, 2023","quantity":1,"discount_amount":0,"image":"","sequence":21,"required":0,"status":"active","variants":{"42681194971334":{"id":"42681194971334","title":"","quantity":1,"discount_amount":0,"sequence":21,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-may-13-14-2023"},"7784439906502":{"id":"7784439906502","title":"Building Boom Sours Hope for Rate Cut | The Wall Street Journal -- Mon., May 01, 2023","quantity":1,"discount_amount":0,"image":"","sequence":22,"required":0,"status":"active","variants":{"42675518374086":{"id":"42675518374086","title":"","quantity":1,"discount_amount":0,"sequence":22,"required":0,"was_deleted":0}},"handle":"copy-of-executive-atop-nbc-exits-over-improper-conduct-the-wall-street-journal-mon-april-24-2023"},"7803561246918":{"id":"7803561246918","title":"ChatGPT Is Target Of Probe By FTC | The Wall Street Journal -- Fri., July 14, 2023","quantity":1,"discount_amount":0,"image":"","sequence":23,"required":0,"status":"active","variants":{"42743688757446":{"id":"42743688757446","title":"","quantity":1,"discount_amount":0,"sequence":23,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-july-14-2023"},"7819952226502":{"id":"7819952226502","title":"China OrdersIts Officials Not to Use iPhones | The Wall Street Journal -- Thu., September 07, 2023","quantity":1,"discount_amount":0,"image":"","sequence":24,"required":0,"status":"active","variants":{"42789629591750":{"id":"42789629591750","title":"","quantity":1,"discount_amount":0,"sequence":24,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-september-07-2023"},"7797357117638":{"id":"7797357117638","title":"China Seeks Site In Cuba For Joint Training | The Wall Street Journal -- Tue., June 20, 2023","quantity":1,"discount_amount":0,"image":"","sequence":25,"required":0,"status":"active","variants":{"42717542252742":{"id":"42717542252742","title":"","quantity":1,"discount_amount":0,"sequence":25,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-june-20-2023"},"7812530045126":{"id":"7812530045126","title":"China\u2019s Deflation Deepens Global Risks | The Wall Street Journal -- Thu., August 10, 2023","quantity":1,"discount_amount":0,"image":"","sequence":26,"required":0,"status":"active","variants":{"42768519168198":{"id":"42768519168198","title":"","quantity":1,"discount_amount":0,"sequence":26,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-august-10-2023"},"7805034856646":{"id":"7805034856646","title":"China\u2019s Economy Barely Grew in Quarter | The Wall Street Journal -- Mon., July 17, 2023","quantity":1,"discount_amount":0,"image":"","sequence":27,"required":0,"status":"active","variants":{"42749067395270":{"id":"42749067395270","title":"","quantity":1,"discount_amount":0,"sequence":27,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-july-17-2023"},"7808942604486":{"id":"7808942604486","title":"China\u2019s Recovery Shows Signs of Stalling | The Wall Street Journal -- Tue., August  01, 2023","quantity":1,"discount_amount":0,"image":"","sequence":28,"required":0,"status":"active","variants":{"42760145240262":{"id":"42760145240262","title":"","quantity":1,"discount_amount":0,"sequence":28,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-august-01-2023"},"7822397833414":{"id":"7822397833414","title":"Corporate Earnings Estimates Edge Up | The Wall Street Journal -- Mon., September 11, 2023","quantity":1,"discount_amount":0,"image":"","sequence":29,"required":0,"status":"active","variants":{"42795406033094":{"id":"42795406033094","title":"","quantity":1,"discount_amount":0,"sequence":29,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-september-11-2023"},"7800706465990":{"id":"7800706465990","title":"Court Guts College Affirmative Action | The Wall Street Journal -- Fri., June 30, 2023","quantity":1,"discount_amount":0,"image":"","sequence":30,"required":0,"status":"active","variants":{"42730184442054":{"id":"42730184442054","title":"","quantity":1,"discount_amount":0,"sequence":30,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-june-30-2023"},"7800706760902":{"id":"7800706760902","title":"Court Rejects Student Loan Relief Program | The Wall Street Journal -- Sat.\/Sun., July 01\/02, 2023","quantity":1,"discount_amount":0,"image":"","sequence":31,"required":0,"status":"active","variants":{"42730184835270":{"id":"42730184835270","title":"","quantity":1,"discount_amount":0,"sequence":31,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-july-01-02-2023"},"7789951975622":{"id":"7789951975622","title":"Deal Is Eyed to Lift Debt Cap, Curb Spending | The Wall Street Journal -- Fri., May 26, 2023","quantity":1,"discount_amount":0,"image":"","sequence":32,"required":0,"status":"active","variants":{"42697252470982":{"id":"42697252470982","title":"","quantity":1,"discount_amount":0,"sequence":32,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-may-26-2023"},"7792928948422":{"id":"7792928948422","title":"Deal On Debt Heads to Biden\u2019s Desk | The Wall Street Journal -- Fri., June 02, 2023","quantity":1,"discount_amount":0,"image":"","sequence":33,"required":0,"status":"active","variants":{"42704437543110":{"id":"42704437543110","title":"","quantity":1,"discount_amount":0,"sequence":33,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-june-02-2023"},"7788332581062":{"id":"7788332581062","title":"Debt Ceiling Talks Bog Down | The Wall Street Journal -- Sat.\/Sun., May 20\/21, 2023","quantity":1,"discount_amount":0,"image":"","sequence":34,"required":0,"status":"active","variants":{"42690466873542":{"id":"42690466873542","title":"","quantity":1,"discount_amount":0,"sequence":34,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-may-20-21-2023"},"7789951779014":{"id":"7789951779014","title":"Default Threat Drags Markets Deeper in Red | The Wall Street Journal -- Thu., May 25, 2023","quantity":1,"discount_amount":0,"image":"","sequence":35,"required":0,"status":"active","variants":{"42697252143302":{"id":"42697252143302","title":"","quantity":1,"discount_amount":0,"sequence":35,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-may-25-2023"},"7771088519366":{"id":"7771088519366","title":"Dimon Pursues More Aid For First Republic | The Wall Street Journal -- Tue., March 21, 2023","quantity":1,"discount_amount":0,"image":"","sequence":36,"required":0,"status":"active","variants":{"42630524928198":{"id":"42630524928198","title":"","quantity":1,"discount_amount":0,"sequence":36,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-march-21-2023"},"7816711962822":{"id":"7816711962822","title":"Carlos Alcaraz | WSJ. Magazine, September Men's Style 2023","quantity":1,"discount_amount":0,"image":"","sequence":37,"required":0,"status":"active","variants":{"42781060104390":{"id":"42781060104390","title":"","quantity":1,"discount_amount":0,"sequence":37,"required":0,"was_deleted":0}},"handle":"carlos-alcaraz-wsj-magazine-september-mens-style-2023"},"7778669658310":{"id":"7778669658310","title":"DOJ Files Appeal To Keep Abortion Pill Legal | The Wall Street Journal -- Tue., April 11, 2023","quantity":1,"discount_amount":0,"image":"","sequence":38,"required":0,"status":"active","variants":{"42655957450950":{"id":"42655957450950","title":"","quantity":1,"discount_amount":0,"sequence":38,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-april-11-2023"},"7805035970758":{"id":"7805035970758","title":"Dow Logs Longest Winning Streak Since 2017 | The Wall Street Journal -- Sat.\/Sun., July 22\/23, 2023","quantity":1,"discount_amount":0,"image":"","sequence":39,"required":0,"status":"active","variants":{"42749073653958":{"id":"42749073653958","title":"","quantity":1,"discount_amount":0,"sequence":39,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-july-22-23-2023"},"7778669494470":{"id":"7778669494470","title":"Earnings Season Presents Next Test Of Stocks | The Wall Street Journal -- Mon., April 10, 2023","quantity":1,"discount_amount":0,"image":"","sequence":40,"required":0,"status":"active","variants":{"42655957090502":{"id":"42655957090502","title":"","quantity":1,"discount_amount":0,"sequence":40,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-april-10-2023"},"7803560624326":{"id":"7803560624326","title":"Earnings Season To Test Rally in Stocks | The Wall Street Journal -- Mon., July 10, 2023","quantity":1,"discount_amount":0,"image":"","sequence":41,"required":0,"status":"active","variants":{"42743687905478":{"id":"42743687905478","title":"","quantity":1,"discount_amount":0,"sequence":41,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-july-10-2023"},"7782368903366":{"id":"7782368903366","title":"Economy Cools Amid Recession Fears | The Wall Street Journal -- Fri., April 28, 2023","quantity":1,"discount_amount":0,"image":"","sequence":42,"required":0,"status":"active","variants":{"42670307999942":{"id":"42670307999942","title":"","quantity":1,"discount_amount":0,"sequence":42,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-april-28-2023"},"7819953832134":{"id":"7819953832134","title":"Employers\u2019 Health-Plan Costs to Swell | The Wall Street Journal -- Fri., September 08, 2023","quantity":1,"discount_amount":0,"image":"","sequence":43,"required":0,"status":"active","variants":{"42789631459526":{"id":"42789631459526","title":"","quantity":1,"discount_amount":0,"sequence":43,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-september-08-2023"},"7788331761862":{"id":"7788331761862","title":"ESPN Pursues Streaming Flagship Channel | The Wall Street Journal -- Fri., May 19, 2023","quantity":1,"discount_amount":0,"image":"","sequence":44,"required":0,"status":"active","variants":{"42690461958342":{"id":"42690461958342","title":"","quantity":1,"discount_amount":0,"sequence":44,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-may-19-2023"},"7774049697990":{"id":"7774049697990","title":"Ex-CEO Gets Encore at UBS After Merger | The Wall Street Journal -- Thu., March 30, 2023","quantity":1,"discount_amount":0,"image":"","sequence":45,"required":0,"status":"active","variants":{"42640723837126":{"id":"42640723837126","title":"","quantity":1,"discount_amount":0,"sequence":45,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-march-30-2023"},"7782367985862":{"id":"7782367985862","title":"Executive Atop NBC Exits Over Improper Conduct | The Wall Street Journal -- Mon., April 24, 2023","quantity":1,"discount_amount":0,"image":"","sequence":46,"required":0,"status":"active","variants":{"42670304231622":{"id":"42670304231622","title":"","quantity":1,"discount_amount":0,"sequence":46,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-april-24-2023"},"7776641122502":{"id":"7776641122502","title":"Exxon Ends Drilling Mission In Brazil | The Wall Street Journal -- Thu., April 06, 2023","quantity":1,"discount_amount":0,"image":"","sequence":47,"required":0,"status":"active","variants":{"42649830949062":{"id":"42649830949062","title":"","quantity":1,"discount_amount":0,"sequence":47,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-april-06-2023"},"7789950501062":{"id":"7789950501062","title":"Fears of Default Upend Bond Markets | The Wall Street Journal -- Wed., May 24, 2023","quantity":1,"discount_amount":0,"image":"","sequence":48,"required":0,"status":"active","variants":{"42697244082374":{"id":"42697244082374","title":"","quantity":1,"discount_amount":0,"sequence":48,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-may-24-2023"},"7771089666246":{"id":"7771089666246","title":"Fed Boosts Rates Amid Bank Turmoil | The Wall Street Journal -- Thu., March 23, 2023","quantity":1,"discount_amount":0,"image":"","sequence":49,"required":0,"status":"active","variants":{"42630526304454":{"id":"42630526304454","title":"","quantity":1,"discount_amount":0,"sequence":49,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-march-23-2023"},"7784440791238":{"id":"7784440791238","title":"Fed Boosts Rates to a 16-Year High | The Wall Street Journal -- Thu., May 04, 2023","quantity":1,"discount_amount":0,"image":"","sequence":50,"required":0,"status":"active","variants":{"42675521880262":{"id":"42675521880262","title":"","quantity":1,"discount_amount":0,"sequence":50,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-may-04-2023"},"7807119524038":{"id":"7807119524038","title":"Fed Lifts Rates to Highest Level in 22 Years | The Wall Street Journal -- Thu., July 27, 2023","quantity":1,"discount_amount":0,"image":"","sequence":51,"required":0,"status":"active","variants":{"42755553067206":{"id":"42755553067206","title":"","quantity":1,"discount_amount":0,"sequence":51,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-july-27-2023"},"7795876298950":{"id":"7795876298950","title":"Fed Pauses Rate Hikes but Signals More | The Wall Street Journal -- Thu., June 15, 2023","quantity":1,"discount_amount":0,"image":"","sequence":52,"required":0,"status":"active","variants":{"42713213599942":{"id":"42713213599942","title":"","quantity":1,"discount_amount":0,"sequence":52,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-june-15-2023"},"7782368182470":{"id":"7782368182470","title":"First Republic Deposits Sank By $100 Billion | The Wall Street Journal -- Tue., April 25, 2023","quantity":1,"discount_amount":0,"image":"","sequence":53,"required":0,"status":"active","variants":{"42670304624838":{"id":"42670304624838","title":"","quantity":1,"discount_amount":0,"sequence":53,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-april-25-2023"},"7784440103110":{"id":"7784440103110","title":"First Republic Seized, Sold To JPMorgan | The Wall Street Journal -- Tue., May 02, 2023","quantity":1,"discount_amount":0,"image":"","sequence":54,"required":0,"status":"active","variants":{"42675519062214":{"id":"42675519062214","title":"","quantity":1,"discount_amount":0,"sequence":54,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-may-02-2023"},"7805034889414":{"id":"7805034889414","title":"Ford Cuts F-150 EV Price as Market Cools Off | The Wall Street Journal -- Tue., July 18, 2023","quantity":1,"discount_amount":0,"image":"","sequence":55,"required":0,"status":"active","variants":{"42749067428038":{"id":"42749067428038","title":"","quantity":1,"discount_amount":0,"sequence":55,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-july-18-2023"},"7771089862854":{"id":"7771089862854","title":"Ford Says EV Unit Will Lose $3 Billion This Year | The Wall Street Journal -- Fri., March 24, 2023","quantity":1,"discount_amount":0,"image":"","sequence":56,"required":0,"status":"active","variants":{"42630526501062":{"id":"42630526501062","title":"","quantity":1,"discount_amount":0,"sequence":56,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-march-24-2023"},"7805035413702":{"id":"7805035413702","title":"Foreign Firms Get Most U.S. Climate Incentives | The Wall Street Journal -- Fri., July 21, 2023","quantity":1,"discount_amount":0,"image":"","sequence":57,"required":0,"status":"active","variants":{"42749070409926":{"id":"42749070409926","title":"","quantity":1,"discount_amount":0,"sequence":57,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-july-21-2023"},"7780773855430":{"id":"7780773855430","title":"Fox to Pay $787.5M To Settle Dominion Lawsuit | The Wall Street Journal -- Wed., April 19, 2023","quantity":1,"discount_amount":0,"image":"","sequence":58,"required":0,"status":"active","variants":{"42665401942214":{"id":"42665401942214","title":"","quantity":1,"discount_amount":0,"sequence":58,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-april-19-2023"},"7797751873734":{"id":"7797751873734","title":"FTC Sues Amazon For Prime Enrolling Tactics | The Wall Street Journal -- Thu., June 22, 2023","quantity":1,"discount_amount":0,"image":"","sequence":59,"required":0,"status":"active","variants":{"42721027424454":{"id":"42721027424454","title":"","quantity":1,"discount_amount":0,"sequence":59,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-june-22-2023"},"7788330811590":{"id":"7788330811590","title":"FTC Sues To Block Amgen\u2019s Deal for Horizon | The Wall Street Journal -- Wed., May 17, 2023","quantity":1,"discount_amount":0,"image":"","sequence":60,"required":0,"status":"active","variants":{"42690459861190":{"id":"42690459861190","title":"","quantity":1,"discount_amount":0,"sequence":60,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-may-17-2023"},"7788330188998":{"id":"7788330188998","title":"G-7 Aims To Check Economic Coercion By China | The Wall Street Journal -- Mon., May 15, 2023","quantity":1,"discount_amount":0,"image":"","sequence":61,"required":0,"status":"active","variants":{"42690459140294":{"id":"42690459140294","title":"","quantity":1,"discount_amount":0,"sequence":61,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-may-15-2023"},"7780773626054":{"id":"7780773626054","title":"G-7 Seeks To Lessen Economic Reliance On Beijing | The Wall Street Journal -- Tue., April 18, 2023","quantity":1,"discount_amount":0,"image":"","sequence":62,"required":0,"status":"active","variants":{"42665398927558":{"id":"42665398927558","title":"","quantity":1,"discount_amount":0,"sequence":62,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-april-18-2023"},"7814254592198":{"id":"7814254592198","title":"Georgia Case Holds Pitfalls For Both Sides | The Wall Street Journal -- Wed., August 16, 2023","quantity":1,"discount_amount":0,"image":"","sequence":63,"required":0,"status":"active","variants":{"42774101950662":{"id":"42774101950662","title":"","quantity":1,"discount_amount":0,"sequence":63,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-august-16-2023"},"7805035118790":{"id":"7805035118790","title":"Goldman\u2019s Profit Falls 58% Amid Pullback On Retail | The Wall Street Journal -- Thu., July 20, 2023","quantity":1,"discount_amount":0,"image":"","sequence":64,"required":0,"status":"active","variants":{"42749068738758":{"id":"42749068738758","title":"","quantity":1,"discount_amount":0,"sequence":64,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-july-20-2023"},"7782368477382":{"id":"7782368477382","title":"Google Posts 2nd Straight Fall inAd Revenue | The Wall Street Journal -- Wed., April 26, 2023","quantity":1,"discount_amount":0,"image":"","sequence":65,"required":0,"status":"active","variants":{"42670305116358":{"id":"42670305116358","title":"","quantity":1,"discount_amount":0,"sequence":65,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-april-26-2023"},"7807119458502":{"id":"7807119458502","title":"Google\u2019s Growth Gets Boost From Ad Spending | The Wall Street Journal -- Wed., July 26, 2023","quantity":1,"discount_amount":0,"image":"","sequence":66,"required":0,"status":"active","variants":{"42755553001670":{"id":"42755553001670","title":"","quantity":1,"discount_amount":0,"sequence":66,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-july-26-2023"},"7819078238406":{"id":"7819078238406","title":"Higher Rates Loom Over Market | The Wall Street Journal -- Mon., August 28, 2023","quantity":1,"discount_amount":0,"image":"","sequence":67,"required":0,"status":"active","variants":{"42787399368902":{"id":"42787399368902","title":"","quantity":1,"discount_amount":0,"sequence":67,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-august-28-2023"},"7784442331334":{"id":"7784442331334","title":"Hiring, Wages Buck Headwinds | The Wall Street Journal -- Sat.\/Sun., May 06\/07, 2023","quantity":1,"discount_amount":0,"image":"","sequence":68,"required":0,"status":"active","variants":{"42675526172870":{"id":"42675526172870","title":"","quantity":1,"discount_amount":0,"sequence":68,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-may-06-07-2023"},"7808942080198":{"id":"7808942080198","title":"Home Insurers Charge More, Cover Less | The Wall Street Journal -- Mon., July 31, 2023","quantity":1,"discount_amount":0,"image":"","sequence":69,"required":0,"status":"active","variants":{"42760143503558":{"id":"42760143503558","title":"","quantity":1,"discount_amount":0,"sequence":69,"required":0,"was_deleted":0}},"handle":"copy-of-barbie-leads-robust-ticket-sales-the-wall-street-journal-mon-july-24-2023"},"7782368641222":{"id":"7782368641222","title":"House Approves Debt Bill, Sets Up Big Battle | The Wall Street Journal -- Thu., April 27, 2023","quantity":1,"discount_amount":0,"image":"","sequence":70,"required":0,"status":"active","variants":{"42670305542342":{"id":"42670305542342","title":"","quantity":1,"discount_amount":0,"sequence":70,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-april-27-2023"},"7792928620742":{"id":"7792928620742","title":"House Passes Debt-Ceiling, Spending Deal | The Wall Street Journal -- Thu., June 01, 2023","quantity":1,"discount_amount":0,"image":"","sequence":71,"required":0,"status":"active","variants":{"42704437117126":{"id":"42704437117126","title":"","quantity":1,"discount_amount":0,"sequence":71,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-june-01-2023"},"7819954651334":{"id":"7819954651334","title":"House Prices On Rise Again In U.S. | The Wall Street Journal -- Sat.\/Sun., September 09\/10, 2023","quantity":1,"discount_amount":0,"image":"","sequence":72,"required":0,"status":"active","variants":{"42789632803014":{"id":"42789632803014","title":"","quantity":1,"discount_amount":0,"sequence":72,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-september-09-10-2023"},"7812530208966":{"id":"7812530208966","title":"Hunter Biden Case Gets Special Counsel | The Wall Street Journal -- Sat.\/Sun., August 12\/13, 2023","quantity":1,"discount_amount":0,"image":"","sequence":73,"required":0,"status":"active","variants":{"42768519397574":{"id":"42768519397574","title":"","quantity":1,"discount_amount":0,"sequence":73,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-august-12-13-2023"},"7819822104774":{"id":"7819822104774","title":"Hurricane Idalia Batters Florida, Georgia | The Wall Street Journal -- Thu., August 31, 2023","quantity":1,"discount_amount":0,"image":"","sequence":74,"required":0,"status":"active","variants":{"42789393334470":{"id":"42789393334470","title":"","quantity":1,"discount_amount":0,"sequence":74,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-august-31-2023"},"7819918934214":{"id":"7819918934214","title":"Incidents In U.S. Stir Fear Of Beijing Espionage | The Wall Street Journal -- Tue., September 05, 2023","quantity":1,"discount_amount":0,"image":"","sequence":75,"required":0,"status":"active","variants":{"42789572477126":{"id":"42789572477126","title":"","quantity":1,"discount_amount":0,"sequence":75,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-september-05-2023"},"7812530110662":{"id":"7812530110662","title":"Inflation Eases, Fueling Hope on Fed Rates | The Wall Street Journal -- Fri., August 11, 2023","quantity":1,"discount_amount":0,"image":"","sequence":76,"required":0,"status":"active","variants":{"42768519233734":{"id":"42768519233734","title":"","quantity":1,"discount_amount":0,"sequence":76,"required":0,"was_deleted":0}},"handle":"copy-of-trump-pleads-not-guilty-tovote-plot-the-wall-street-journal-fri-august-04-2023"},"7786305224902":{"id":"7786305224902","title":"Inflation Eases, Keeps Fed Pause in Play | The Wall Street Journal -- Thu., May 11, 2023","quantity":1,"discount_amount":0,"image":"","sequence":77,"required":0,"status":"active","variants":{"42681193955526":{"id":"42681193955526","title":"","quantity":1,"discount_amount":0,"sequence":77,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-may-11-2023"},"7778670018758":{"id":"7778670018758","title":"Inflation Hits Lowest Level Since 2021 | The Wall Street Journal -- Thu., April 13, 2023","quantity":1,"discount_amount":0,"image":"","sequence":78,"required":0,"status":"active","variants":{"42655959646406":{"id":"42655959646406","title":"","quantity":1,"discount_amount":0,"sequence":78,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-april-12-2023"},"7803561115846":{"id":"7803561115846","title":"InflationCoolsto SlowestPace Since 2021 | The Wall Street Journal -- Thu., July 13, 2023","quantity":1,"discount_amount":0,"image":"","sequence":79,"required":0,"status":"active","variants":{"42743688626374":{"id":"42743688626374","title":"","quantity":1,"discount_amount":0,"sequence":79,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-july-13-2023"},"7812529160390":{"id":"7812529160390","title":"Investors Bet Rates Will Stay Elevated For Years | The Wall Street Journal -- Mon., August 07, 2023","quantity":1,"discount_amount":0,"image":"","sequence":88,"required":0,"status":"active","variants":{"42768518185158":{"id":"42768518185158","title":"","quantity":1,"discount_amount":0,"sequence":88,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-august-7-2023"},"7816709013702":{"id":"7816709013702","title":"Jennifer Aniston | WSJ. Magazine, September Women's Fashion 2023","quantity":1,"discount_amount":0,"image":"","sequence":89,"required":0,"status":"active","variants":{"42781052862662":{"id":"42781052862662","title":"","quantity":1,"discount_amount":0,"sequence":89,"required":0,"was_deleted":0}},"handle":"jennifer-aniston-wsj-magazine-september-2023"},"7792929079494":{"id":"7792929079494","title":"Jobs Market Proves Resilient | The Wall Street Journal -- Sat.\/Sun., June 03\/04, 2023","quantity":1,"discount_amount":0,"image":"","sequence":90,"required":0,"status":"active","variants":{"42704437739718":{"id":"42704437739718","title":"","quantity":1,"discount_amount":0,"sequence":90,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-june-03-04-2023"},"7776641515718":{"id":"7776641515718","title":"Jobs, Wages Show Signs of Easing | The Wall Street Journal -- Sat.\/Sun., April 08\/09, 2023","quantity":1,"discount_amount":0,"image":"","sequence":91,"required":0,"status":"active","variants":{"42649832587462":{"id":"42649832587462","title":"","quantity":1,"discount_amount":0,"sequence":91,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-april-08-09-2023"},"7795875348678":{"id":"7795875348678","title":"JPMorgan To Settle Epstein Accusers\u2019 Lawsuit | The Wall Street Journal -- Tue., June 13, 2023","quantity":1,"discount_amount":0,"image":"","sequence":92,"required":0,"status":"active","variants":{"42713209798854":{"id":"42713209798854","title":"","quantity":1,"discount_amount":0,"sequence":92,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-june-13-2023"},"7800706269382":{"id":"7800706269382","title":"Justices Back Role Of State Courts in Elections | The Wall Street Journal -- Wed., June 28, 2023","quantity":1,"discount_amount":0,"image":"","sequence":93,"required":0,"status":"active","variants":{"42730183884998":{"id":"42730183884998","title":"","quantity":1,"discount_amount":0,"sequence":93,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-june-28-2023"},"7808942932166":{"id":"7808942932166","title":"Latest Trump Case Sets High Bar For DOJ | The Wall Street Journal -- Thu., August 03, 2023","quantity":1,"discount_amount":0,"image":"","sequence":94,"required":0,"status":"active","variants":{"42760145862854":{"id":"42760145862854","title":"","quantity":1,"discount_amount":0,"sequence":94,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-august-03-2023"},"7807118999750":{"id":"7807118999750","title":"Lenders Warned Not to Rig Data on Deposits | The Wall Street Journal -- Tue., July 25, 2023","quantity":1,"discount_amount":0,"image":"","sequence":95,"required":0,"status":"active","variants":{"42755551592646":{"id":"42755551592646","title":"","quantity":1,"discount_amount":0,"sequence":95,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-july-25-2023"},"7759391817926":{"id":"7759391817926","title":"Living Legacies | Mansion Global, Winter 2023","quantity":1,"discount_amount":0,"image":"","sequence":96,"required":0,"status":"active","variants":{"42587622965446":{"id":"42587622965446","title":"","quantity":1,"discount_amount":0,"sequence":96,"required":0,"was_deleted":0}},"handle":"living-legacies-mansion-global-winter-2023"},"7780773134534":{"id":"7780773134534","title":"Market Watchers Doubt Rate Halt Will Spur A Rally | The Wall Street Journal -- Mon., April 17, 2023","quantity":1,"discount_amount":0,"image":"","sequence":97,"required":0,"status":"active","variants":{"42665398436038":{"id":"42665398436038","title":"","quantity":1,"discount_amount":0,"sequence":97,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-april-17-2023"},"7814254493894":{"id":"7814254493894","title":"Maui Fire Response, Cause Are Probed | The Wall Street Journal -- Mon., August 14, 2023","quantity":1,"discount_amount":0,"image":"","sequence":98,"required":0,"status":"active","variants":{"42774101721286":{"id":"42774101721286","title":"","quantity":1,"discount_amount":0,"sequence":98,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-august-14-2023"},"7789950468294":{"id":"7789950468294","title":"Meta Hit With EU Record Privacy Penalty | The Wall Street Journal -- Tue., May 23, 2023","quantity":1,"discount_amount":0,"image":"","sequence":99,"required":0,"status":"active","variants":{"42697243754694":{"id":"42697243754694","title":"","quantity":1,"discount_amount":0,"sequence":99,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-may-23-2023"},"7788330287302":{"id":"7788330287302","title":"Microsoft Deal for Activision Wins EU Approval | The Wall Street Journal -- Tue., May 16, 2023","quantity":1,"discount_amount":0,"image":"","sequence":100,"required":0,"status":"active","variants":{"42690459238598":{"id":"42690459238598","title":"","quantity":1,"discount_amount":0,"sequence":100,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-may-16-2023"},"7788331237574":{"id":"7788331237574","title":"Montana Imposes Statewide Ban on TikTok | The Wall Street Journal -- Thu., May 18, 2023","quantity":1,"discount_amount":0,"image":"","sequence":101,"required":0,"status":"active","variants":{"42690460319942":{"id":"42690460319942","title":"","quantity":1,"discount_amount":0,"sequence":101,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-may-18-2023"},"7814254657734":{"id":"7814254657734","title":"Mortgage Rates Highest In 20 Years | The Wall Street Journal -- Fri., August 18, 2023","quantity":1,"discount_amount":0,"image":"","sequence":102,"required":0,"status":"active","variants":{"42774102016198":{"id":"42774102016198","title":"","quantity":1,"discount_amount":0,"sequence":102,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-august-18-2023"},"7815426048198":{"id":"7815426048198","title":"Mortgage Rates Highest Since '01| The Wall Street Journal -- Fri., August 25, 2023","quantity":1,"discount_amount":0,"image":"","sequence":103,"required":0,"status":"active","variants":{"42776708645062":{"id":"42776708645062","title":"","quantity":1,"discount_amount":0,"sequence":103,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-august-25-2023"},"7819951145158":{"id":"7819951145158","title":"Musk Borrowed $1 Billion From SpaceX | The Wall Street Journal -- Wed., September 06, 2023","quantity":1,"discount_amount":0,"image":"","sequence":104,"required":0,"status":"active","variants":{"42789627855046":{"id":"42789627855046","title":"","quantity":1,"discount_amount":0,"sequence":104,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-september-6-2023"},"7797752103110":{"id":"7797752103110","title":"Mutiny Forces Moscow to Lock Down | The Wall Street Journal -- Sat.\/Sun., June 24\/25, 2023","quantity":1,"discount_amount":0,"image":"","sequence":105,"required":0,"status":"active","variants":{"42721027686598":{"id":"42721027686598","title":"","quantity":1,"discount_amount":0,"sequence":105,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-june-24-25-2023"},"7803560919238":{"id":"7803560919238","title":"NATO Sets No Timetable For Kyiv To Join | The Wall Street Journal -- Wed., July 12, 2023","quantity":1,"discount_amount":0,"image":"","sequence":106,"required":0,"status":"active","variants":{"42743688331462":{"id":"42743688331462","title":"","quantity":1,"discount_amount":0,"sequence":106,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-july-12-2023"},"7774049075398":{"id":"7774049075398","title":"Netanyahu Fires Minister, Escalating Protests | The Wall Street Journal -- Mon., March 27, 2023","quantity":1,"discount_amount":0,"image":"","sequence":107,"required":0,"status":"active","variants":{"42640721084614":{"id":"42640721084614","title":"","quantity":1,"discount_amount":0,"sequence":107,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-march-27-2023"},"7786304241862":{"id":"7786304241862","title":"Oil Firms\u2019 Heaps of Cash Lure Investors | The Wall Street Journal -- Tue., May 09, 2023","quantity":1,"discount_amount":0,"image":"","sequence":108,"required":0,"status":"active","variants":{"42681192874182":{"id":"42681192874182","title":"","quantity":1,"discount_amount":0,"sequence":108,"required":0,"was_deleted":0}},"handle":"copy-of-first-republic-seized-sold-to-jpmorgan-the-wall-street-journal-tue-may-02-2023"},"7801739804870":{"id":"7801739804870","title":"Oil Gauge Suggests Price Fall As Saudis Cut Flow | The Wall Street Journal -- Mon., July 03, 2023","quantity":1,"discount_amount":0,"image":"","sequence":109,"required":0,"status":"active","variants":{"42733937426630":{"id":"42733937426630","title":"","quantity":1,"discount_amount":0,"sequence":109,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-july-03-2023"},"7776640401606":{"id":"7776640401606","title":"Oil Prices Shoot Up As Saudis Lead Cut In Output | The Wall Street Journal -- Tue., April 04, 2023","quantity":1,"discount_amount":0,"image":"","sequence":110,"required":0,"status":"active","variants":{"42649829540038":{"id":"42649829540038","title":"","quantity":1,"discount_amount":0,"sequence":110,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-april-04-2023"},"7794973376710":{"id":"7794973376710","title":"PGA Tour, LIV Golf End Rift With Deal To Merge | The Wall Street Journal -- Wed., June 7, 2023","quantity":1,"discount_amount":0,"image":"","sequence":111,"required":0,"status":"active","variants":{"42710703145158":{"id":"42710703145158","title":"","quantity":1,"discount_amount":0,"sequence":111,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-june-7-2023"},"7815426146502":{"id":"7815426146502","title":"Powell Says Fed To Move Carefully On Rates | The Wall Street Journal -- Sat.\/Sun., August 26\/27, 2023","quantity":1,"discount_amount":0,"image":"","sequence":112,"required":0,"status":"active","variants":{"42776708776134":{"id":"42776708776134","title":"","quantity":1,"discount_amount":0,"sequence":112,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-august-26-27-2023"},"7780773986502":{"id":"7780773986502","title":"Price Cuts At Tesla Lead to 24% Drop In Profit | The Wall Street Journal -- Thu., April 20, 2023","quantity":1,"discount_amount":0,"image":"","sequence":113,"required":0,"status":"active","variants":{"42665402368198":{"id":"42665402368198","title":"","quantity":1,"discount_amount":0,"sequence":113,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-april-20-2023"},"7789952073926":{"id":"7789952073926","title":"Prices, Consumer Spending Muddle Fed Path | The Wall Street Journal -- Sat.\/Sun., May 27\/28, 2023","quantity":1,"discount_amount":0,"image":"","sequence":114,"required":0,"status":"active","variants":{"42697253159110":{"id":"42697253159110","title":"","quantity":1,"discount_amount":0,"sequence":114,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-may-27-28-2023"},"7800706138310":{"id":"7800706138310","title":"Prigozhin Denies Coup Bid As Putin Raps Him | The Wall Street Journal -- Tue., June 27, 2023","quantity":1,"discount_amount":0,"image":"","sequence":115,"required":0,"status":"active","variants":{"42730183590086":{"id":"42730183590086","title":"","quantity":1,"discount_amount":0,"sequence":115,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-june-27-2023"},"7812529782982":{"id":"7812529782982","title":"Regional Banks Get Downgrade And Stocks Edge Down | The Wall Street Journal -- Wed., August 09, 2023","quantity":1,"discount_amount":0,"image":"","sequence":116,"required":0,"status":"active","variants":{"42768518906054":{"id":"42768518906054","title":"","quantity":1,"discount_amount":0,"sequence":116,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-august-09-2023"},"7784441643206":{"id":"7784441643206","title":"Regional Banks\u2019 Shares Nosedive | The Wall Street Journal -- Fri., May 05, 2023","quantity":1,"discount_amount":0,"image":"","sequence":117,"required":0,"status":"active","variants":{"42675524141254":{"id":"42675524141254","title":"","quantity":1,"discount_amount":0,"sequence":117,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-may-05-2023"},"7774049272006":{"id":"7774049272006","title":"Regulator Suit Seeks to Ban Binance in U.S. | The Wall Street Journal -- Tue., March 28, 2023","quantity":1,"discount_amount":0,"image":"","sequence":118,"required":0,"status":"active","variants":{"42640722395334":{"id":"42640722395334","title":"","quantity":1,"discount_amount":0,"sequence":118,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-march-28-2023"},"7819917885638":{"id":"7819917885638","title":"Resilient Economy Defies Expectations | The Wall Street Journal -- Sat.\/Sun., September 02\/03, 2023","quantity":1,"discount_amount":0,"image":"","sequence":119,"required":0,"status":"active","variants":{"42789571231942":{"id":"42789571231942","title":"","quantity":1,"discount_amount":0,"sequence":119,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-september-02-03-2023"},"7787926847686":{"id":"7787926847686","title":"Rest Assured | WSJ. Magazine, June 2023","quantity":1,"discount_amount":0,"image":"","sequence":120,"required":0,"status":"active","variants":{"42687643517126":{"id":"42687643517126","title":"","quantity":1,"discount_amount":0,"sequence":120,"required":0,"was_deleted":0}},"handle":"wsj-magazine-june-2023"},"7800706400454":{"id":"7800706400454","title":"Revolt Leader Aimed to Seize Military Chiefs | The Wall Street Journal -- Thu., June 29, 2023","quantity":1,"discount_amount":0,"image":"","sequence":121,"required":0,"status":"active","variants":{"42730184343750":{"id":"42730184343750","title":"","quantity":1,"discount_amount":0,"sequence":121,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-june-29-2023"},"7800699912390":{"id":"7800699912390","title":"Revolt Puts Putin in Weaker Position | The Wall Street Journal -- Mon., June 26, 2023","quantity":1,"discount_amount":0,"image":"","sequence":122,"required":0,"status":"active","variants":{"42730155016390":{"id":"42730155016390","title":"","quantity":1,"discount_amount":0,"sequence":122,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-june-26-2023"},"7814254756038":{"id":"7814254756038","title":"Rising Yields Fatten American Wallets | The Wall Street Journal -- Sat.\/Sun., August 19\/20, 2023","quantity":1,"discount_amount":0,"image":"","sequence":123,"required":0,"status":"active","variants":{"42774102114502":{"id":"42774102114502","title":"","quantity":1,"discount_amount":0,"sequence":123,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-august-19-20-2023"},"7789950304454":{"id":"7789950304454","title":"Russian Forces Largely Control Bakhmut | The Wall Street Journal -- Mon., May 22, 2023","quantity":1,"discount_amount":0,"image":"","sequence":124,"required":0,"status":"active","variants":{"42697243132102":{"id":"42697243132102","title":"","quantity":1,"discount_amount":0,"sequence":124,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-may-22-2023"},"7780774117574":{"id":"7780774117574","title":"Sales of Homes Fell 2.4% In March | The Wall Street Journal -- Fri., April 21, 2023","quantity":1,"discount_amount":0,"image":"","sequence":125,"required":0,"status":"active","variants":{"42665402859718":{"id":"42665402859718","title":"","quantity":1,"discount_amount":0,"sequence":125,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-april-21-2023"},"7793997414598":{"id":"7793997414598","title":"Saudis Curb Oil Output as Producers Quarrel | The Wall Street Journal -- Mon., June 05, 2023","quantity":1,"discount_amount":0,"image":"","sequence":126,"required":0,"status":"active","variants":{"42707991822534":{"id":"42707991822534","title":"","quantity":1,"discount_amount":0,"sequence":126,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-june-05-2023"},"7793997676742":{"id":"7793997676742","title":"SEC Lawsuit Claims Binance Misused Funds | The Wall Street Journal -- Tue., June 06, 2023","quantity":1,"discount_amount":0,"image":"","sequence":127,"required":0,"status":"active","variants":{"42707992281286":{"id":"42707992281286","title":"","quantity":1,"discount_amount":0,"sequence":127,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-june-06-2023"},"7815425917126":{"id":"7815425917126","title":"SEC Sets Sweeping Rules On Private Funds | The Wall Street Journal -- Thu., August 24, 2023","quantity":1,"discount_amount":0,"image":"","sequence":128,"required":0,"status":"active","variants":{"42776708513990":{"id":"42776708513990","title":"","quantity":1,"discount_amount":0,"sequence":128,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-august-24-2023"},"7779650994374":{"id":"7779650994374","title":"Selena Forrest | WSJ. Magazine, April 2023","quantity":1,"discount_amount":0,"image":"","sequence":129,"required":0,"status":"active","variants":{"42658353840326":{"id":"42658353840326","title":"","quantity":1,"discount_amount":0,"sequence":129,"required":0,"was_deleted":0}},"handle":"selena-forrest-wsj-magazine-april-2023"},"7808943292614":{"id":"7808943292614","title":"Slower Hiring Offers the Fed Wiggle Room | The Wall Street Journal -- Sat.\/Sun., August 05\/06, 2023","quantity":1,"discount_amount":0,"image":"","sequence":130,"required":0,"status":"active","variants":{"42760146583750":{"id":"42760146583750","title":"","quantity":1,"discount_amount":0,"sequence":130,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-august-05-06-2023"},"7786305683654":{"id":"7786305683654","title":"SoftBank To Focus Cash on AI in New Offensive | The Wall Street Journal -- Fri., May 12, 2023","quantity":1,"discount_amount":0,"image":"","sequence":131,"required":0,"status":"active","variants":{"42681194414278":{"id":"42681194414278","title":"","quantity":1,"discount_amount":0,"sequence":131,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-may-12-2023"},"7804890415302":{"id":"7804890415302","title":"Splashing Out | Mansion Global, Summer 2023","quantity":1,"discount_amount":0,"image":"","sequence":132,"required":0,"status":"active","variants":{"42748596453574":{"id":"42748596453574","title":"","quantity":1,"discount_amount":0,"sequence":132,"required":0,"was_deleted":0}},"handle":"splashing-out-mansion-global-summer-2023"},"7758351270086":{"id":"7758351270086","title":"Stephanie Seymour | WSJ. Magazine, February 2023","quantity":1,"discount_amount":0,"image":"","sequence":133,"required":0,"status":"active","variants":{"42584058462406":{"id":"42584058462406","title":"","quantity":1,"discount_amount":0,"sequence":133,"required":0,"was_deleted":0}},"handle":"stephanie-seymour-wsj-magazine-february-2023"},"7766403121350":{"id":"7766403121350","title":"Steven Yeun | WSJ. Magazine, March 2023","quantity":1,"discount_amount":0,"image":"","sequence":134,"required":0,"status":"active","variants":{"42610928779462":{"id":"42610928779462","title":"","quantity":1,"discount_amount":0,"sequence":134,"required":0,"was_deleted":0}},"handle":"steven-yeun-wsj-magazine-march-2023"},"7774050189510":{"id":"7774050189510","title":"Stocks Cap Wild Quarter To Notch Big Gains | The Wall Street Journal -- Sat.\/Sun., April 01\/02, 2023","quantity":1,"discount_amount":0,"image":"","sequence":135,"required":0,"status":"active","variants":{"42640726622406":{"id":"42640726622406","title":"","quantity":1,"discount_amount":0,"sequence":135,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-april-01-02-2023"},"7776641351878":{"id":"7776641351878","title":"Stocks Haven\u2019t Looked This Ugly In Years | The Wall Street Journal -- Fri., April 07, 2023","quantity":1,"discount_amount":0,"image":"","sequence":136,"required":0,"status":"active","variants":{"42649831669958":{"id":"42649831669958","title":"","quantity":1,"discount_amount":0,"sequence":136,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-april-07-2023"},"7784440234182":{"id":"7784440234182","title":"Stocks, Oil Fall Ahead Of Rate Decision | The Wall Street Journal -- Wed., May 03, 2023","quantity":1,"discount_amount":0,"image":"","sequence":137,"required":0,"status":"active","variants":{"42675519226054":{"id":"42675519226054","title":"","quantity":1,"discount_amount":0,"sequence":137,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-may-03-2023"},"7795876462790":{"id":"7795876462790","title":"Strategy Clash Triggered Disney CFO Exit | The Wall Street Journal -- Sat.\/Sun., June 17\/18, 2023","quantity":1,"discount_amount":0,"image":"","sequence":138,"required":0,"status":"active","variants":{"42713213894854":{"id":"42713213894854","title":"","quantity":1,"discount_amount":0,"sequence":138,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-june-17-18-2023"},"7780774346950":{"id":"7780774346950","title":"Supreme Court Allows Pill for Abortion | The Wall Street Journal -- Sat.\/Sun., April 22\/23, 2023","quantity":1,"discount_amount":0,"image":"","sequence":139,"required":0,"status":"active","variants":{"42665403449542":{"id":"42665403449542","title":"","quantity":1,"discount_amount":0,"sequence":139,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-april-22-23-2023"},"7819917525190":{"id":"7819917525190","title":"Surge in Consumer Spending Propels Growth | The Wall Street Journal -- Fri., September 01, 2023","quantity":1,"discount_amount":0,"image":"","sequence":140,"required":0,"status":"active","variants":{"42789570576582":{"id":"42789570576582","title":"","quantity":1,"discount_amount":0,"sequence":140,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-september-01-2023"},"7814254624966":{"id":"7814254624966","title":"Ten-Year Treasury Yield Highest Since '08 | The Wall Street Journal -- Thu., August 17, 2023","quantity":1,"discount_amount":0,"image":"","sequence":141,"required":0,"status":"active","variants":{"42774101983430":{"id":"42774101983430","title":"","quantity":1,"discount_amount":0,"sequence":141,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-august-17-2023"},"7815425818822":{"id":"7815425818822","title":"Trade With China Aids Russia's War Effort | The Wall Street Journal -- Tue., August  22, 2023","quantity":1,"discount_amount":0,"image":"","sequence":142,"required":0,"status":"active","variants":{"42776708382918":{"id":"42776708382918","title":"","quantity":1,"discount_amount":0,"sequence":142,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-august-22-2023"},"7795875414214":{"id":"7795875414214","title":"Trump Arraigned in Documents Case | The Wall Street Journal -- Wed., June 14, 2023","quantity":1,"discount_amount":0,"image":"","sequence":143,"required":0,"status":"active","variants":{"42713209864390":{"id":"42713209864390","title":"","quantity":1,"discount_amount":0,"sequence":143,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-june-14-2023"},"7776640598214":{"id":"7776640598214","title":"Trump Charged With 34 Felony Counts | The Wall Street Journal -- Wed., April 05, 2023","quantity":1,"discount_amount":0,"image":"","sequence":144,"required":0,"status":"active","variants":{"42649829867718":{"id":"42649829867718","title":"","quantity":1,"discount_amount":0,"sequence":144,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-april-05-2023"},"7808942866630":{"id":"7808942866630","title":"Trump ChargedWith Election Schemes | The Wall Street Journal -- Wed., August 02, 2023","quantity":1,"discount_amount":0,"image":"","sequence":145,"required":0,"status":"active","variants":{"42760145633478":{"id":"42760145633478","title":"","quantity":1,"discount_amount":0,"sequence":145,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-august-02-2023"},"7794973540550":{"id":"7794973540550","title":"Trump Indicted in Files Case | The Wall Street Journal -- Fri., June 09, 2023","quantity":1,"discount_amount":0,"image":"","sequence":146,"required":0,"status":"active","variants":{"42710704324806":{"id":"42710704324806","title":"","quantity":1,"discount_amount":0,"sequence":146,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-june-09-2023"},"7814254526662":{"id":"7814254526662","title":"Trump Indicted in Racketeering Plot | The Wall Street Journal -- Tue., August  15, 2023","quantity":1,"discount_amount":0,"image":"","sequence":147,"required":0,"status":"active","variants":{"42774101754054":{"id":"42774101754054","title":"","quantity":1,"discount_amount":0,"sequence":147,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-august-15-2023"},"7807119622342":{"id":"7807119622342","title":"Trump Indicted On More Documents Charges | The Wall Street Journal -- Fri., July 28, 2023","quantity":1,"discount_amount":0,"image":"","sequence":148,"required":0,"status":"active","variants":{"42755554410694":{"id":"42755554410694","title":"","quantity":1,"discount_amount":0,"sequence":148,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-july-28-2023"},"7774050091206":{"id":"7774050091206","title":"Trump Indicted Over Hush Money | The Wall Street Journal -- Fri., March 31, 2023","quantity":1,"discount_amount":0,"image":"","sequence":149,"required":0,"status":"active","variants":{"42640725835974":{"id":"42640725835974","title":"","quantity":1,"discount_amount":0,"sequence":149,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-march-31-2023"},"7794973638854":{"id":"7794973638854","title":"Trump Indictment Unsealed | The Wall Street Journal -- Sat.\/Sun., June 10\/11, 2023","quantity":1,"discount_amount":0,"image":"","sequence":150,"required":0,"status":"active","variants":{"42710704423110":{"id":"42710704423110","title":"","quantity":1,"discount_amount":0,"sequence":150,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-june-10-11-2023"},"7786304798918":{"id":"7786304798918","title":"Trump Liable For Sex Abuse, Defamation | The Wall Street Journal -- Wed., May 10, 2023","quantity":1,"discount_amount":0,"image":"","sequence":151,"required":0,"status":"active","variants":{"42681193496774":{"id":"42681193496774","title":"","quantity":1,"discount_amount":0,"sequence":151,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-may-10-2023"},"7808943096006":{"id":"7808943096006","title":"Trump Pleads Not Guilty to Vote Plot | The Wall Street Journal -- Fri., August 04, 2023","quantity":1,"discount_amount":0,"image":"","sequence":152,"required":0,"status":"active","variants":{"42760146157766":{"id":"42760146157766","title":"","quantity":1,"discount_amount":0,"sequence":152,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-august-04-2023"},"7795875053766":{"id":"7795875053766","title":"Trump, Special Counsel Plot Early Strategies | The Wall Street Journal -- Mon., June 12, 2023","quantity":1,"discount_amount":0,"image":"","sequence":153,"required":0,"status":"active","variants":{"42713208389830":{"id":"42713208389830","title":"","quantity":1,"discount_amount":0,"sequence":153,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-june-12-2023"},"7819267014854":{"id":"7819267014854","title":"Trump\u2019s Federal Trial in D.C. Set For March | The Wall Street Journal -- Tue., August  29, 2023","quantity":1,"discount_amount":0,"image":"","sequence":154,"required":0,"status":"active","variants":{"42787998433478":{"id":"42787998433478","title":"","quantity":1,"discount_amount":0,"sequence":154,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-august-29-2023"},"7803560788166":{"id":"7803560788166","title":"Turkey Agrees To Let Sweden In NATO | The Wall Street Journal -- Tue., July 11, 2023","quantity":1,"discount_amount":0,"image":"","sequence":155,"required":0,"status":"active","variants":{"42743688200390":{"id":"42743688200390","title":"","quantity":1,"discount_amount":0,"sequence":155,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-july-11-2023"},"7801740853446":{"id":"7801740853446","title":"U.S. Auto Sales Defy Gloomy Forecasts | The Wall Street Journal -- Thu., July 06, 2023","quantity":1,"discount_amount":0,"image":"","sequence":156,"required":0,"status":"active","variants":{"42733950107846":{"id":"42733950107846","title":"","quantity":1,"discount_amount":0,"sequence":156,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-july-06-2023"},"7801740427462":{"id":"7801740427462","title":"U.S. Eyes Curbing China\u2019s Access To Cloud | The Wall Street Journal -- Wed., July 05, 2023","quantity":1,"discount_amount":0,"image":"","sequence":157,"required":0,"status":"active","variants":{"42733945389254":{"id":"42733945389254","title":"","quantity":1,"discount_amount":0,"sequence":157,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-july-05-2023"},"7819695423686":{"id":"7819695423686","title":"U.S. Lists 10 Drugs Subject to Medicare Price Cuts | The Wall Street Journal -- Wed., August 30, 2023","quantity":1,"discount_amount":0,"image":"","sequence":158,"required":0,"status":"active","variants":{"42788942217414":{"id":"42788942217414","title":"","quantity":1,"discount_amount":0,"sequence":158,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-august-30-2023"},"7815425786054":{"id":"7815425786054","title":"U.S. Tech Scrambles To Abide By New EU Rules | The Wall Street Journal -- Mon., August 21, 2023","quantity":1,"discount_amount":0,"image":"","sequence":159,"required":0,"status":"active","variants":{"42776708317382":{"id":"42776708317382","title":"","quantity":1,"discount_amount":0,"sequence":159,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-august-21-2023"},"7771087765702":{"id":"7771087765702","title":"UBS Agrees to Buy Rival Credit Suisse | The Wall Street Journal -- Mon., March 20, 2023","quantity":1,"discount_amount":0,"image":"","sequence":160,"required":0,"status":"active","variants":{"42630523945158":{"id":"42630523945158","title":"","quantity":1,"discount_amount":0,"sequence":160,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-march-20-2023"},"7792928489670":{"id":"7792928489670","title":"Ukraine, Allies Pursue Peace Summit | The Wall Street Journal -- Wed., May 31, 2023","quantity":1,"discount_amount":0,"image":"","sequence":161,"required":0,"status":"active","variants":{"42704436953286":{"id":"42704436953286","title":"","quantity":1,"discount_amount":0,"sequence":161,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-may-31-2023"},"7801741607110":{"id":"7801741607110","title":"Wages Rise Even as Job Growth Eases | The Wall Street Journal -- Sat.\/Sun., July 08\/09, 2023","quantity":1,"discount_amount":0,"image":"","sequence":162,"required":0,"status":"active","variants":{"42733960396998":{"id":"42733960396998","title":"","quantity":1,"discount_amount":0,"sequence":162,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-july-08-09-2023"},"7801741181126":{"id":"7801741181126","title":"Wagner\u2019s Prigozhin Reported To Be Back In Russia | The Wall Street Journal -- Fri., July 07, 2023","quantity":1,"discount_amount":0,"image":"","sequence":163,"required":0,"status":"active","variants":{"42733955023046":{"id":"42733955023046","title":"","quantity":1,"discount_amount":0,"sequence":163,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-july-07-2023"},"7786303717574":{"id":"7786303717574","title":"West Sees Role for Beijing In Ending Ukraine Conflict | The Wall Street Journal -- Mon., May 08, 2023","quantity":1,"discount_amount":0,"image":"","sequence":164,"required":0,"status":"active","variants":{"42681192382662":{"id":"42681192382662","title":"","quantity":1,"discount_amount":0,"sequence":164,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-may-08-2023"},"7794973507782":{"id":"7794973507782","title":"Wildfire Smoke Shrouds Northeast | The Wall Street Journal -- Thu., June 08, 2023","quantity":1,"discount_amount":0,"image":"","sequence":165,"required":0,"status":"active","variants":{"42710704259270":{"id":"42710704259270","title":"","quantity":1,"discount_amount":0,"sequence":165,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-june-08-2023"},"7717364629702":{"id":"7717364629702","title":"Will Ferrell | WSJ. Magazine, December2022\/January 2023","quantity":1,"discount_amount":0,"image":"","sequence":166,"required":0,"status":"active","variants":{"42490757841094":{"id":"42490757841094","title":"","quantity":1,"discount_amount":0,"sequence":166,"required":0,"was_deleted":0}},"handle":"will-ferrell-wsj-magazine-december2022-january-2023"},"7822400520390":{"id":"7822400520390","title":"Auto Workers Launch Strike at Big Three | The Wall Street Journal -- Fri., September 15, 2023","quantity":1,"discount_amount":0,"image":"","sequence":167,"required":0,"status":"active","variants":{"42795417174214":{"id":"42795417174214","title":"","quantity":1,"discount_amount":0,"sequence":167,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-fri-september-15-2023"},"7822401011910":{"id":"7822401011910","title":"Strike Hamstrings Auto Factories | The Wall Street Journal -- Sat.\/Sun., September 16\/17, 2023","quantity":1,"discount_amount":0,"image":"","sequence":168,"required":0,"status":"active","variants":{"42795419271366":{"id":"42795419271366","title":"","quantity":1,"discount_amount":0,"sequence":168,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-sat-sun-september-16-17-2023"},"7822400258246":{"id":"7822400258246","title":"Increase In Pump Prices Boosts Inflation | The Wall Street Journal -- Thu., September 14, 2023","quantity":1,"discount_amount":0,"image":"","sequence":169,"required":0,"status":"active","variants":{"42795415568582":{"id":"42795415568582","title":"","quantity":1,"discount_amount":0,"sequence":169,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-thu-september-14-2023"},"7822398324934":{"id":"7822398324934","title":"Insurers Mark Up Prices of Generic Drugs | The Wall Street Journal -- Tue., September 12, 2023","quantity":1,"discount_amount":0,"image":"","sequence":170,"required":0,"status":"active","variants":{"42795408752838":{"id":"42795408752838","title":"","quantity":1,"discount_amount":0,"sequence":170,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-tue-september-12-2023"},"7822399733958":{"id":"7822399733958","title":"McCarthy Launches Inquiry to Impeach President | The Wall Street Journal -- Wed., September 13, 2023","quantity":1,"discount_amount":0,"image":"","sequence":171,"required":0,"status":"active","variants":{"42795413602502":{"id":"42795413602502","title":"","quantity":1,"discount_amount":0,"sequence":171,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-wed-september-13-2023"},"7807118868678":{"id":"7807118868678","title":"\u2018Barbie\u2019 Leads Robust Ticket Sales | The Wall Street Journal -- Mon., July 24, 2023","quantity":1,"discount_amount":0,"image":"","sequence":172,"required":0,"status":"active","variants":{"42755551264966":{"id":"42755551264966","title":"","quantity":1,"discount_amount":0,"sequence":172,"required":0,"was_deleted":0}},"handle":"the-wall-street-journal-mon-july-24-2023"}},"required_products":[],"volume_discounts":[{"min_items":5,"max_items":49,"discount_type":"percentage","discount_value":"20","range_type":"range","description":"Buy {{quantity}} or more and get a discount!","savings_text":"Save {{discount_value}}{{discount_unit}}!","free_shipping":"false","min_cart_value":null,"counter":1},{"min_items":50,"max_items":200,"discount_type":"percentage","discount_value":"50","range_type":"range","description":"Buy {{quantity}} or more and get a discount!","savings_text":"Save {{discount_value}}{{discount_unit}}!","free_shipping":"false","min_cart_value":null,"counter":2}],"sections":[]},{"id":415025,"name":"WSJ Magazine Bulk Discount","title":"Buy in bulk and get a discount!","description":"The more you buy, the more you save!","button_text":"Add to cart","discount_warning":"Discounts will be applied at checkout.","discount_type":"percentage","percentage_value":"10","fixed_amount_value":"","fixed_price_value":"","priority":100,"status":"enabled","product_level":"product","total_price_text":"Total: {original_price} {discounted_price}","minimum_requirements":"volume_discounts","minimum_requirements_num":1,"minimum_requirements_n_max_products":null,"show_bundle":"true","bundle_image":"","list_product_names":"true","mix_and_match_display":"false","free_shipping":"false","is_volume_bundle":"true","product_target_type":"specific_products","volume_bundle_combine_quantites":"false","limit_for_customer_tags":[],"use_date_condition":"false","date_from":null,"date_to":null,"tags_additional_options":"","is_standalone_product_bundle":"false","volume_bundle_cart_value_use_all_products":"false","products":{"7816711962822":{"id":"7816711962822","title":"Carlos Alcaraz | WSJ. Magazine, September Men's Style 2023","quantity":1,"discount_amount":0,"image":"","sequence":3,"required":0,"status":"active","variants":{"42781060104390":{"id":"42781060104390","title":"","quantity":1,"discount_amount":0,"sequence":3,"required":0,"was_deleted":0}},"handle":"carlos-alcaraz-wsj-magazine-september-mens-style-2023"},"7838809194694":{"id":"7838809194694","title":"Innovators | WSJ. Magazine, November 2023","quantity":1,"discount_amount":0,"image":"","sequence":4,"required":0,"status":"active","variants":{"42845039263942":{"id":"42845039263942","title":"","quantity":1,"discount_amount":0,"sequence":4,"required":0,"was_deleted":0},"42845039296710":{"id":"42845039296710","title":"","quantity":1,"discount_amount":0,"sequence":5,"required":0,"was_deleted":0},"42845039329478":{"id":"42845039329478","title":"","quantity":1,"discount_amount":0,"sequence":6,"required":0,"was_deleted":0},"42845039362246":{"id":"42845039362246","title":"","quantity":1,"discount_amount":0,"sequence":7,"required":0,"was_deleted":0},"42845039395014":{"id":"42845039395014","title":"","quantity":1,"discount_amount":0,"sequence":8,"required":0,"was_deleted":0},"42845039427782":{"id":"42845039427782","title":"","quantity":1,"discount_amount":0,"sequence":9,"required":0,"was_deleted":0},"42845039460550":{"id":"42845039460550","title":"","quantity":1,"discount_amount":0,"sequence":10,"required":0,"was_deleted":0}},"handle":"copy-of-innovators-wsj-magazine-november-2022"},"7816709013702":{"id":"7816709013702","title":"Jennifer Aniston | WSJ. Magazine, September Women's Fashion 2023","quantity":1,"discount_amount":0,"image":"","sequence":11,"required":0,"status":"active","variants":{"42781052862662":{"id":"42781052862662","title":"","quantity":1,"discount_amount":0,"sequence":11,"required":0,"was_deleted":0}},"handle":"jennifer-aniston-wsj-magazine-september-2023"},"7825658708166":{"id":"7825658708166","title":"Mick Jagger | WSJ. Magazine, October 2023","quantity":1,"discount_amount":0,"image":"","sequence":12,"required":0,"status":"active","variants":{"42803317211334":{"id":"42803317211334","title":"","quantity":1,"discount_amount":0,"sequence":12,"required":0,"was_deleted":0}},"handle":"mick-jagger-wsj-magazine-october-2023"},"7787926847686":{"id":"7787926847686","title":"Rest Assured | WSJ. Magazine, June 2023","quantity":1,"discount_amount":0,"image":"","sequence":13,"required":0,"status":"active","variants":{"42687643517126":{"id":"42687643517126","title":"","quantity":1,"discount_amount":0,"sequence":13,"required":0,"was_deleted":0}},"handle":"wsj-magazine-june-2023"},"7779650994374":{"id":"7779650994374","title":"Selena Forrest | WSJ. Magazine, April 2023","quantity":1,"discount_amount":0,"image":"","sequence":14,"required":0,"status":"active","variants":{"42658353840326":{"id":"42658353840326","title":"","quantity":1,"discount_amount":0,"sequence":14,"required":0,"was_deleted":0}},"handle":"selena-forrest-wsj-magazine-april-2023"},"7758351270086":{"id":"7758351270086","title":"Stephanie Seymour | WSJ. Magazine, February 2023","quantity":1,"discount_amount":0,"image":"","sequence":15,"required":0,"status":"active","variants":{"42584058462406":{"id":"42584058462406","title":"","quantity":1,"discount_amount":0,"sequence":15,"required":0,"was_deleted":0}},"handle":"stephanie-seymour-wsj-magazine-february-2023"},"7766403121350":{"id":"7766403121350","title":"Steven Yeun | WSJ. Magazine, March 2023","quantity":1,"discount_amount":0,"image":"","sequence":16,"required":0,"status":"active","variants":{"42610928779462":{"id":"42610928779462","title":"","quantity":1,"discount_amount":0,"sequence":16,"required":0,"was_deleted":0}},"handle":"steven-yeun-wsj-magazine-march-2023"},"7717364629702":{"id":"7717364629702","title":"Will Ferrell | WSJ. Magazine, December2022\/January 2023","quantity":1,"discount_amount":0,"image":"","sequence":17,"required":0,"status":"active","variants":{"42490757841094":{"id":"42490757841094","title":"","quantity":1,"discount_amount":0,"sequence":17,"required":0,"was_deleted":0}},"handle":"will-ferrell-wsj-magazine-december2022-january-2023"},"7882625777862":{"id":"7882625777862","title":"Travis Kelce | WSJ. Magazine, December 2023\/January 2024","quantity":1,"discount_amount":0,"image":"","sequence":18,"required":0,"status":"active","variants":{"42947052732614":{"id":"42947052732614","title":"","quantity":1,"discount_amount":0,"sequence":18,"required":0,"was_deleted":0},"42947052765382":{"id":"42947052765382","title":"","quantity":1,"discount_amount":0,"sequence":19,"required":0,"was_deleted":0}},"handle":"wsj-magazine-december-2023-january-2024"}},"required_products":[],"volume_discounts":[{"min_items":10,"max_items":14,"discount_type":"fixed_price","discount_value":"10","range_type":"range","description":"Buy {{quantity}} and get a discount!","savings_text":"Only {{discount_unit}}{{discount_value}} per issue!","free_shipping":"false","min_cart_value":null,"counter":1},{"min_items":15,"max_items":24,"discount_type":"fixed_price","discount_value":"9","range_type":"range","description":"Buy {{quantity}} and get a discount!","savings_text":"Only {{discount_unit}}{{discount_value}} per issue!","free_shipping":"false","min_cart_value":null,"counter":2},{"min_items":25,"max_items":49,"discount_type":"fixed_price","discount_value":"8","range_type":"range","description":"Buy {{quantity}} and get a discount!","savings_text":"Only {{discount_unit}}{{discount_value}} per issue!","free_shipping":"false","min_cart_value":null,"counter":3},{"min_items":50,"max_items":100000,"discount_type":"fixed_price","discount_value":"7.50","range_type":"range","description":"Buy {{quantity}} and get a discount!","savings_text":"Only {{discount_unit}}{{discount_value}} per issue!","free_shipping":"false","min_cart_value":null,"counter":4}],"sections":[]}];var bundles=[];var currentDateTime=(new Date()).getTime();for(var z=0;z<dbBundles.length;z++){var enabledBundle=true;if(typeof dbBundles[z].use_date_condition!=='undefined'&&dbBundles[z].use_date_condition==='true'){if(typeof dbBundles[z].date_from!=='undefined'&&dbBundles[z].date_from!==null&&dbBundles[z].date_from.trim()!==''){var fromDate=new Date(dbBundles[z].date_from);if(fromDate.getTime()>currentDateTime){enabledBundle=false;}}
if(typeof dbBundles[z].date_to!=='undefined'&&dbBundles[z].date_to!==null&&dbBundles[z].date_to.trim()!==''){var toDate=new Date(dbBundles[z].date_to);if(toDate.getTime()<currentDateTime){enabledBundle=false;}}}
if(enabledBundle===true){bundles.push(dbBundles[z]);}}
if(typeof Shopify!=='undefined'&&Shopify.hasOwnProperty('currency')&&Shopify.currency.hasOwnProperty('rate')){var rate=Shopify.currency.rate;var currency=Shopify.currency.active;if(rate!=="1.0"){for(var i=0;i<bundles.length;i++){if(bundles[i].discount_type==='products_discounts'||bundles[i].discount_type==='fixed_amount'){bundles[i].fixed_amount_value=utils.convertMoney(bundles[i].fixed_amount_value,rate,currency);for(var pkey in bundles[i].products){var product=bundles[i].products[pkey];product.discount_amount=utils.convertMoney(product.discount_amount,rate,currency);for(var vkey in product.variants){var variant=product.variants[vkey];variant.discount_amount=utils.convertMoney(variant.discount_amount,rate,currency);}}}else if(bundles[i].discount_type==='fixed_price'){bundles[i].fixed_price_value=utils.convertMoney(bundles[i].fixed_price_value,rate,currency,false);}
if(bundles[i].minimum_requirements==='volume_discounts'&&typeof bundles[i].volume_discounts!=='undefined'&&bundles[i].volume_discounts.length>0){for(var z=0;z<bundles[i].volume_discounts.length;z++){if(bundles[i].volume_discounts[z].discount_type==='fixed_amount'){bundles[i].volume_discounts[z].discount_value=utils.convertMoney(bundles[i].volume_discounts[z].discount_value,rate,currency);}
if(bundles[i].volume_discounts[z].discount_type==='fixed_price'){bundles[i].volume_discounts[z].discount_value=utils.convertMoney(bundles[i].volume_discounts[z].discount_value,rate,currency);}
if(bundles[i].volume_discounts[z].min_cart_value!==null&&bundles[i].volume_discounts[z].min_cart_value*1>0){bundles[i].volume_discounts[z].min_cart_value=utils.convertMoney(bundles[i].volume_discounts[z].min_cart_value,rate,currency);}}}
if(bundles[i].discount_type==='products_discounts'&&typeof bundles[i].sections!=='undefined'&&bundles[i].sections.length>0){for(var z=0;z<bundles[i].sections.length;z++){var section=bundles[i].sections[z];if(typeof section.products!=='undefined'){for(var pkey in section.products){var product=section.products[pkey];bundles[i].sections[z].products[pkey].discount_amount=utils.convertMoney(product.discount_amount,rate,currency);for(var vkey in product.variants){var variant=product.variants[vkey];bundles[i].sections[z].products[pkey].variants[vkey].discount_amount=utils.convertMoney(variant.discount_amount,rate,currency);}}}}}}}}
var widgetView={addToCartButton:{showCheckmark:function($button){var htmlContent=$button.html();$button.html(htmlUtils.svgCheckmark);if($button.closest('[data-bndlr-keep-success-indicator]').length===0){var timeout=4000;setTimeout(function(){$button.find('.bndlr-checkmark').first().fadeOut(450,function(){$button.html(htmlContent);});},timeout);}}},getBundleTitle:function(title,name,id){var tagName='h2';var titleHtml='<'+tagName+' class="bndlr-bundle-title">'+title+'</'+tagName+'>';return titleHtml;},getBundleImage:function(imageSrc,title,name,id){var imageHtml='<img class="bndlr-bundle-image" src="'+imageSrc+'" />';return imageHtml;},drawSelectedProducts:function(bundleKey,products){var bundleId=$('[data-bndlr-key="'+bundleKey+'"]').closest('[data-bundle]').attr('data-bundle');bundleId=parseInt(bundleId);var bundle=bndlr.getBundleById(bundleId);var discountedProducts=Library.DiscountedProducts.get(bundle.id);var html='';var statusBoxProductsHtml='';for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;var variantId=products[key].variant_id;var productData;if(bundle.product_level=='product'){productData=discountedProducts[productId];}else{productData=discountedProducts[variantId];}
var selectedProductHtml=bndlr.getSelectedProductHtml(products[key],productData,bundle,key);html+=selectedProductHtml;var statusBoxProductHtml=bndlr.getStatusBoxProductHtml(products[key],productData,bundle);statusBoxProductsHtml+=statusBoxProductHtml;}}
$('[data-bndlr-key="'+bundleKey+'"] .bndlr-mnm-selected-products').html(html);$('#bndlr-mnm-status-box[data-bndlr-bundle-key="'+bundleKey+'"] .bdnlr-mnm-status-box-products-container').html(statusBoxProductsHtml);},MixNMatch:{hideAddtoBundleButtons:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-add-to-bundle').addClass('bndlr-hidden');},showAddtoBundleButtons:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-add-to-bundle').removeClass('bndlr-hidden');},hideAddtoBundleButton:function(bundleKey,productId){$('[data-bndlr-key="'+bundleKey+'"] [data-product-id="'+productId+'"] .bndlr-add-to-bundle').addClass('bndlr-hidden');},showAddtoBundleButton:function(bundleKey,productId){$('[data-bndlr-key="'+bundleKey+'"] [data-product-id="'+productId+'"] .bndlr-add-to-bundle').removeClass('bndlr-hidden');},fadeInSelectedProducts:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-toggle.bndlr-hidden').removeClass('bndlr-hidden');},fadeOutSelectedProducts:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-toggle').addClass('bndlr-hidden');},fadeInAddToCartButton:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-add-to-cart-container.bndlr-hidden').removeClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-add-bundle-to-cart.bndlr-hidden').removeClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-mnm-total-price.bndlr-hidden').removeClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-bundle-checkout-warning.bndlr-hidden').removeClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.sealsubs-target-element-bundle').css({'display':'block'});$('#bndlr-mnm-status-box[data-bndlr-bundle-key="'+bundleKey+'"]').find('.bndlr-status-box-add-to-cart.bndlr-hidden').removeClass('bndlr-hidden');},fadeOutAddToCartButton:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-add-to-cart-container').addClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-add-bundle-to-cart').addClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-mnm-total-price').addClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-bundle-checkout-warning').addClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.sealsubs-target-element-bundle').css({'display':'none'});$('#bndlr-mnm-status-box[data-bndlr-bundle-key="'+bundleKey+'"]').find('.bndlr-status-box-add-to-cart').addClass('bndlr-hidden');},fadeInTieredMnMInstructions:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-tiered-mnm-instructions-text.bndlr-hidden').removeClass('bndlr-hidden');},fadeOutTieredMnMInstructions:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-tiered-mnm-instructions-text').addClass('bndlr-hidden');}},Sectioned:{drawSelectedProducts:function(bundleKey,sections){var bundleId=$('[data-bndlr-key="'+bundleKey+'"]').closest('[data-bundle]').attr('data-bundle');bundleId=parseInt(bundleId);var bundle=bndlr.getBundleById(bundleId);var sectionsDiscountedProducts=Library.SectionedBundlesProducts.get(bundle.id);for(var x in sections){if(sections.hasOwnProperty(x)){var html='';for(var key in sections[x]){if(sections[x].hasOwnProperty(key)){var productId=sections[x][key].product_id;var variantId=sections[x][key].variant_id;var productData;if(bundle.product_level=='product'){productData=sectionsDiscountedProducts[x][productId];}else{productData=sectionsDiscountedProducts[x][variantId];}
var selectedProductHtml=bndlr.getSectionedBundleSelectedProductHtml(sections[x][key],productData,bundle,key,x);html+=selectedProductHtml;}}
$('[data-bndlr-key="'+bundleKey+'"] .bndlr-sectioned-section-status[data-bundler-section-status="'+x+'"] .bndlr-sectioned-section-products').html(html);}}},}};var htmlUtils={moneySpan:function(value,currency,classes,customAttribute,numericValue){var valueNoHtml=value.replace(/(<([^>]+)>)/gi,"");if(typeof customAttribute!=='string'){customAttribute='';}
valueNoHtml=valueNoHtml.replace(/\"/g,"&quot;").replace(/\'/g,"&apos;");var moneyClass=' money ';if(typeof numericValue!=='undefined'){return '<span class="'+classes+' bndlr-money conversion-bear-money '+moneyClass+' gt_currency gt_currency--'+currency+'" '+customAttribute+' data-money-convertible data-currency-'+currency+'="'+valueNoHtml+'" data-currentprice="'+numericValue+'">'+value+'</span>';}else{return '<span class="'+classes+' bndlr-money conversion-bear-money '+moneyClass+'" '+customAttribute+' data-money-convertible data-currency-'+currency+'="'+valueNoHtml+'">'+value+'</span>';}},svgCheckmark:'<svg class="bndlr-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 40 40"><path fill="none" d="M4.1 18.2 l7.1 7.2 l16.7-16.8" /></svg>',svgCheckmarkPreselected:'<svg class="bndlr-preselected-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 40 40"><path fill="none" d="M4.1 18.2 l7.1 7.2 l16.7-16.8" /></svg>'};if(typeof clientSpecifics==='undefined'){var clientSpecifics={};}
function cartChangeDetectorFunction(){this.mutationsInProgress=0;this.dispatchCartDrawerEventTimeout=false;};cartChangeDetectorFunction.prototype.beforeMutation=function(){this.mutationsInProgress++;}
cartChangeDetectorFunction.prototype.afterMutation=function(){var self=this;setTimeout(function(){self.mutationsInProgress--;},100);}
cartChangeDetectorFunction.prototype.getMutationsInProgress=function(){return this.mutationsInProgress;}
cartChangeDetectorFunction.prototype.observeCart=function(){try{var self=this;var callback=function(mutationsList,observer){if(self.getMutationsInProgress()===0){if(typeof self.dispatchCartDrawerEventTimeout!=='undefined'){clearTimeout(self.dispatchCartDrawerEventTimeout);}
self.dispatchCartDrawerEventTimeout=setTimeout(function(){var event=new Event('bndlr:cart_drawer_mutation');window.dispatchEvent(event);},90);}};var observer=new MutationObserver(callback);var cartDrawersList=['#ajaxifyMini','#CartDrawer .drawer__inner','#ajaxifyModal #ajaxifyCart','#qikify-stickycart-app','.sp-cart .sp-dropdown-menu .sp-dropdown-inner .sp-cart-layout','#CartDrawer #CartContainer','#sidebar-cart','#cartSlideoutWrapper','div.right-drawer-vue','#theme-ajax-cart .ajax-cart--mini-cart','.off-canvas--container .cart--root','#cartSidebar','.top-cart-holder .cart-target','.go-cart__drawer.js-go-cart-drawer .go-cart-drawer','.cart-mini .cart-mini-sidebar','#slidedown-cart','#slideout-ajax-cart #mini-cart','#shopify-section-mini-cart #mini-cart','#cart-popup','#cart-drawer','.icart','.cart-drawer[data-cart-drawer]','#shopify-section-cartDrawer','#preact-full-cart','#mini-cart .mini-cart__footer','#mini-cart footer','#offcanvas-cart','.sidebar-drawer-container[data-sidebar-drawer-container]','cart-drawer#CartDrawer'];for(var i=0;i<cartDrawersList.length;i++){if($(cartDrawersList[i]).length){observer.observe($(cartDrawersList[i])[0],{attributes:true,childList:true,subtree:true});}}}catch(e){console.log(e);}}
var cartChangeDetector=new cartChangeDetectorFunction();cartChangeDetector.observeCart();cartChangeDetectorFunction.prototype.hookToAddToCartEvent=function(){(function(open){XMLHttpRequest.prototype.open=function(){var rurl='';if(typeof arguments[1]==='string'&&arguments[1].length>0){rurl=arguments[1];this.addEventListener('load',function(){try{if(typeof rurl==='string'&&rurl.length>0){handleAddToCart(rurl,this.response);}}catch(t){console&&console.warn&&console.warn('[Bundler cart event listener] Error in handleXhrDone:  '+t.message)}})}
return open.apply(this,arguments);}
function handleAddToCart(url,data){var types=['/cart/update.js','/cart/change.js','/cart/change.json','/cart/change','/cart/add.js','/cart/add.json','/cart/add','/cart?view=ajax','/cart?view=json','section_id=cart-drawer','section_id=api-cart-items','section_id=mini-cart'];for(var i=0;i<types.length;i++){if(url.indexOf(types[i])!==-1&&url.indexOf('bundler-cart-call')===-1){var event=new CustomEvent('bndlr:cart_was_modified');document.dispatchEvent(event);i=types.length;}}
var exactMatch=['/cart'];for(var i=0;i<exactMatch.length;i++){if(url==exactMatch[i]&&url.indexOf('bundler-cart-call')===-1){var event=new CustomEvent('bndlr:cart_was_modified');document.dispatchEvent(event);i=types.length;}}}})(XMLHttpRequest.prototype.open);(function(w){if(typeof w.fetch==='function'){try{var oldFetch=w.fetch;w.fetch=function(){var promise=oldFetch.apply(this,arguments);try{if(typeof arguments[0]==='string'&&arguments[0].length>0){var rurl=arguments[0];promise.then(function(data){try{if(typeof rurl==='string'&&rurl.length>0){handleAddToCart(rurl,data);}}catch(t){console&&console.warn&&console.warn('[Bundler cart event listener] Error in fetch:  '+t.message)}});}}catch(e){console.error(e);}
return promise;}}catch(e){console.log(e);}}
function handleAddToCart(url,data){var types=['/cart/update.js','/cart/change.js','/cart/change.json','/cart/change','/cart/add.js','/cart/add.json','/cart/add','/cart?view=ajax','/cart?view=json','section_id=cart-drawer','section_id=api-cart-items','section_id=cart-helper','section_id=mini-cart'];for(var i=0;i<types.length;i++){if(url.indexOf(types[i])!==-1&&url.indexOf('bundler-cart-call')===-1){var event=new CustomEvent('bndlr:cart_was_modified');document.dispatchEvent(event);i=types.length;}}
var regexMatch=['/cart\\?t=\\d+&view=ajax'];for(var i=0;i<regexMatch.length;i++){try{var reg=new RegExp(regexMatch[i]);var found=url.match(reg);if(found!==null&&found.length>0&&url.indexOf('bundler-cart-call')===-1){var event=new CustomEvent('bndlr:cart_was_modified');document.dispatchEvent(event);i=types.length;}}catch(e){}}}})(window);};if(typeof cartChangeDetector!=='undefined'){cartChangeDetector.hookToAddToCartEvent();}
var bndlr={outputBundles:function(){bundlerConsole.log(JSON.parse(JSON.stringify(bundles)));},getBundles:function(){return JSON.parse(JSON.stringify(bundles));},outputProductUrls:function(){var urls=[];for(var i=0;i<bundles.length;i++){for(var key in bundles[i].products){if(bundles[i].products.hasOwnProperty(key)){urls.push(nav.getRootUrl(true)+'products/'+bundles[i].products[key].handle);}}
if(typeof bundles[i].sections!=='undefined'&&bundles[i].sections.length>0){for(var k in bundles[i].sections){if(bundles[i].sections.hasOwnProperty(k)){for(var key in bundles[i].sections[k].products){if(bundles[i].sections[k].products.hasOwnProperty(key)){urls.push(nav.getRootUrl(true)+'products/'+bundles[i].sections[k].products[key].handle);}}}}}}
bundlerConsole.log(JSON.parse(JSON.stringify(urls)));},getProductUrls:function(){var urls=[];for(var i=0;i<bundles.length;i++){for(var key in bundles[i].products){if(bundles[i].products.hasOwnProperty(key)){urls.push(nav.getRootUrl(true)+'products/'+bundles[i].products[key].handle);}}}
return JSON.parse(JSON.stringify(urls));},useBundlerCheckout:true,checkoutParams:{},setCheckoutParams:function(params){if(Object.keys(params).length>0){bndlr.checkoutParams=params;}},preventBundlerCheckout:function(){bndlr.externalAppPreventCheckout.prevent=true;bundlerConsole.log('Third party requested prevention of Bundler checkout');},externalAppPreventCheckout:{prevent:false,counter:0,canCheckout:function(){if(typeof clientSpecifics['can_checkout']!=='undefined'){var canCheckout=clientSpecifics['can_checkout'].get();if(canCheckout===false){return false;}}
try{if(typeof window.PARCELY_APP!=='undefined'&&typeof window.PARCELY_APP.readyForCheckout==='boolean'){if(window.PARCELY_APP.readyForCheckout===false){return false;}}}catch(e){console.log(e.message);}
if(this.prevent){return false;}
return true;}},addCheckoutParams:function(url,excludedKeys){if(typeof excludedKeys==='undefined'){excludedKeys=[];}
var locale=this.getLocale();if(locale!==''&&typeof this.checkoutParams['locale']==='undefined'){this.checkoutParams['locale']=locale;}
if(Object.keys(this.checkoutParams).length>0){if(url.indexOf('?')===-1){url+='?';}else{url+='&';}
for(var key in this.checkoutParams){if(this.checkoutParams.hasOwnProperty(key)&&excludedKeys.indexOf(key)===-1){url+=key+'='+this.checkoutParams[key]+'&';}}
url=url.replace(/\&$/,'');}
return url;},getLocale:function(){try{if(typeof Weglot!=='undefined'&&typeof Weglot.getCurrentLang==='function'){var lang=Weglot.getCurrentLang();if(typeof lang!=='undefined'&&lang!==null&&lang!==''){return lang;}}}catch(e){}
if(typeof Shopify!=='undefined'&&typeof Shopify.locale==='string'){return Shopify.locale}
return '';},hideDynamicCheckoutButtons:function(){DiscountEstimator.runIfCanGetDiscount(function(){if($('#bndlr-dynamic-checkout-cart-css').length===0){$('body').append('<style id="bndlr-dynamic-checkout-cart-css">'+
'#dynamic-checkout-cart {'+
'display:none !important;'+
'}'+
'</style>');}},function(){if($('#bndlr-dynamic-checkout-cart-css').length===1){$('#bndlr-dynamic-checkout-cart-css').remove();}});},init:function(){var self=this;var checkoutSelector="input[type='submit'][name='checkout']:not(.productForm-submit), button[type='submit'][name='checkout']:not(.productForm-submit):not([disabled]), button.checkout-button[name='checkout'], form.cart-form a.btn-checkout, a[href='/checkout'], #dropdown-cart button.btn-checkout, .cart-popup-content a.btn-checkout, .cart__popup a.checkout-button, .widget_shopping_cart_content a[href='/checkout'], .jas_cart_page button.checkout-button, .mini-cart-info button.mini-cart-button, a.checkout-link, a.mini-cart-checkout-button, .shopping_cart_footer .actions button";checkoutSelector+=', #dropdown-cart button.btn[onclick="window.location=\'/checkout\'"], form[action="/cart"] button[name="checkout"], .bundler-checkout-button, input.action_button[type="submit"][value="Checkout"]';checkoutSelector+=', button.Cart__Checkout[type="submit"][name="checkout"] span';checkoutSelector+=', .popup-cart a[href^="/checkout"], #slidecarthq .footer button.button';checkoutSelector+=', button.cart__checkout-cta, button.sidecart__checkout-cta';checkoutSelector+=', button.bc-atc-slide-checkout-btn';checkoutSelector+=', #ajax-cart__content .ajax-cart__button.button--add-to-cart';checkoutSelector+=', .cart_container form.js-cart_content__form button.add_to_cart.action_button';checkoutSelector+=', .cart_container .js-cart_content__form input.action_button[type="submit"]';checkoutSelector+=', #checkout_shipping_continue_btn';checkoutSelector+=', .spurit-occ2-checkout a[name="checkout"][href="/checkout/"]';checkoutSelector+=', #checkout-button';checkoutSelector+=', button.btn-checkout';checkoutSelector+=', button.rebuy-cart__checkout-button';checkoutSelector+=', .go-cart__button[href*="/checkout/"],  .go-cart__button[href*="/checkout?"]';checkoutSelector+=', a[href*="/checkout/"]:not([href*="/a/bundles/checkout/"]):not([href*="/subscriptions/"]), a[href*="/checkout?"]:not([href*="partial.ly"])';checkoutSelector+=', input.cart--button-checkout, a.satcb-cs-checkout-btn';checkoutSelector+=', button#parcelySubmit[data-cart-submit]';checkoutSelector+=', #checkout[type="submit"][name="checkout"], #checkout[type="submit"][name="checkout"] .custom-cobutton';checkoutSelector+=', a[href*="/checkout"]:not([href*="/a/bundles/checkout/"]):not([href*="/subscriptions/"]):not([href*="partial.ly"]):not([href^="https://checkout"])';checkoutSelector+=', .rebuy-cart__flyout-footer .rebuy-cart__flyout-subtotal + .rebuy-cart__flyout-actions > button.rebuy-button:first-child, .rebuy-cart__flyout-footer .rebuy-cart__flyout-subtotal + .rebuy-cart__flyout-actions > button.rebuy-button:first-child span';checkoutSelector+=', .rebuy-cart__checkout-button, .rebuy-cart__checkout-button span, rebuy-cart__checkout-button span i';checkoutSelector+=', .quick-cart__buy-now[data-buy-now-button], .icart-checkout-btn, .icartCheckoutBtn';checkoutSelector+=', button.cart__checkout, button[type="submit"][form="mini-cart-form"]';checkoutSelector+=', button[type="submit"][form="mini-cart-form"] span, button[type="submit"][form="mini-cart-form"] span svg';checkoutSelector+=', .SideCart__footer button[type="submit"]';checkoutSelector+=', div[onclick="clicktocheckoutnormal()"], div[onclick="clicktocheckout()"]';checkoutSelector+=', .mini-cart__actions .mini-cart__checkout, .mini-cart__actions .mini-cart__checkout *';checkoutSelector+=', button.checkout-button[onclick="window.location=\'/checkout\'"]';checkoutSelector+=', [data-ocu-checkout="true"]';checkoutSelector+=', input[type="submit"][name="checkout"].cart__submit';checkoutSelector+=', [data-ocu-checkout="true"], .btncheckout';checkoutSelector+=', form[action="/cart"][method="post"] button[type="submit"]:not([name*="update"]):not([name*="add"])';checkoutSelector+=', a.js-checkout, #mu-checkout-button';checkoutSelector+=', #cart-sidebar-checkout:not([disabled="disabled"]), .checkout-x-buy-now-btn, .checkout-x-buy-now-btn .hs-add--to--cart, .slider-cart-checkout-btn';checkoutSelector+=', button[onclick="window.location=\'/checkout\'"], .ymq-fake-checkout-btn, button.StickyCheckout__button';checkoutSelector+=', input[type="submit"][name="checkout"], a.checkout-button';checkoutSelector+=', .hs-content-checkout-button, .hs-content-checkout-button .hs-add--to--cart, .hs-content-checkout-button .hs-checkout-purchase';checkoutSelector+=', button.cart__checkout-button, button.cart__checkout-button .loader-button__text, button.cart__checkout-button .loader-button__loader, button.cart__checkout-button .loader-button__loader div, button.cart__checkout-button .loader-button__loader div svg';checkoutSelector+=', .cd-cart-checkout-button';checkoutSelector+=', .sezzle-checkout-button, .sezzle-checkout-button .sezzle-button-logo-img';checkoutSelector+=', .Cart__Footer .Cart__Checkout, .cart--checkout-button button, .cart--checkout-button button span, button.js-process-checkout';checkoutSelector+=', .j2t-checkout-link, .j2t-checkout-link span, #cart-checkout, #cart-notification-form button[name="checkout"]';checkoutSelector+=', .zecpe-btn-checkout, .zecpe-btn-checkout span, .mbcOverlayOnCheckout, #checkoutCustom, #wsg-checkout-one';checkoutSelector+=', .icart-chk-btn, .side-cart__checkout button#sideCartButton';checkoutSelector+=', .cart__checkout-button, #actionsArea button[onclick="startCheckoutEvent()"], button.cart--button-checkout, .kaktusc-cart__checkout, .cart__checkout';checkoutSelector+=', #cartform_bottom #actionsArea button, hh-button[href="/checkout"]';var $document=$(document);var $body=$('body');$(checkoutSelector).on('click',function(e){if(bndlr.useBundlerCheckout&&bndlr.externalAppPreventCheckout.canCheckout()){e.preventDefault();e.stopPropagation();$(this).addClass('bndlr-checkout-button-clicked');self.prepareInvoice();}});$document.on('click',checkoutSelector,function(e){if(bndlr.useBundlerCheckout&&bndlr.externalAppPreventCheckout.canCheckout()){e.preventDefault();e.stopPropagation();$(this).addClass('bndlr-checkout-button-clicked');self.prepareInvoice();}});$document.on('click','.bndlr-message-yes',function(){$(this).addClass('bndlr-loading');self.prepareInvoice();});$document.on('bundler_trigger_normal_checkout',function(){bndlr.useBundlerCheckout=false;var cartSelector='form[action="/cart"][method="post"], form.cart[action="/cart"][method="post"], form.cart[method="post"], #cart form';var clickWasHandled=false;var tryToClickOnTheSameButton=true;if(typeof window.PARCELY_APP!=='undefined'){tryToClickOnTheSameButton=false;}
var canUseSealCheckout=false;if(typeof window.SealSubs!=='undefined'&&typeof window.SealSubs.discounts_apply_on_initial_order==='boolean'&&typeof window.SealSubs.checkout==='function'&&SealSubs.discounts_apply_on_initial_order){canUseSealCheckout=true;}
var pageIsUnloading=false;addEventListener('beforeunload',(event)=>{pageIsUnloading=true;});if(tryToClickOnTheSameButton===true){var $clickedButton=$('.bndlr-checkout-button-clicked');if($clickedButton.length===1){if($clickedButton.prop('tagName')!=='A'){clickWasHandled=true;if($clickedButton.is('[disabled]')){$clickedButton.removeAttr('disabled');}
try{$clickedButton.click();}catch(e){clickWasHandled=false;console.error(e);}
if(!canUseSealCheckout){setTimeout(function(){if(pageIsUnloading===false){window.location.href=bndlr.addCheckoutParams('/checkout');}else{}},1000);}}else{}}else if($(cartSelector).find(checkoutSelector).length){clickWasHandled=true;$(cartSelector).find(checkoutSelector).first().click();}}
if(clickWasHandled!==true){if(canUseSealCheckout){if(window.SealSubs.checkout()){clickWasHandled=true;}}}
if(clickWasHandled!==true){window.location.href=bndlr.addCheckoutParams('/checkout');}else{if(!canUseSealCheckout){setTimeout(function(){if(pageIsUnloading===false){window.location.href=bndlr.addCheckoutParams('/checkout');}else{}},1000);}}});$document.on('click','.bndlr-message-close',function(){bndlr.setCookie('bndlr_hide_discount_message','hide',0.003472222);self.closeMessage();});$document.on('click','.bndlr-message-no',function(){self.closeMessage();});$document.on('click','.bndlr-add-to-cart',function(){bndlr.addToCart($(this));});$document.on('keydown','.bndlr-add-to-cart',function(e){if(e.which==13){bndlr.addToCart($(this));}
if(e.which==32){e.preventDefault();bndlr.addToCart($(this));}});$document.on('change','.bndlr-select-variant',function(){var $this=$(this);idleCallback(function(){bndlr.updatePriceDisplay($this);});idleCallback(function(){bndlr.changeDisplayedImage($this);});idleCallback(function(){bndlr.convertCurrency();});});$document.on('show_bundle','body',function(e,$el){self.showBundleOnElementWithHandle($el);});$document.on('click','.bndlr-add-to-bundle',function(){bndlr.MixNMatch.addToBundle($(this));});$document.on('keydown','.bndlr-add-to-bundle',function(e){if(e.which==13){bndlr.MixNMatch.addToBundle($(this));}
if(e.which==32){e.preventDefault();bndlr.MixNMatch.addToBundle($(this));}});$document.on('click','.bndlr-add-bundle-to-cart',function(){bndlr.MixNMatch.addMixAndMatchBundleToCart($(this));});$document.on('keydown','.bndlr-add-bundle-to-cart',function(e){if(e.which==13){bndlr.MixNMatch.addMixAndMatchBundleToCart($(this));}
if(e.which==32){e.preventDefault();bndlr.MixNMatch.addMixAndMatchBundleToCart($(this));}});$document.on('click','.bndlr-mix-and-match .bndlr-close',function(){bndlr.MixNMatch.removeFromBundle($(this));});$document.on('keydown','.bndlr-mix-and-match .bndlr-close',function(e){if(e.which==13){bndlr.MixNMatch.removeFromBundle($(this));}
if(e.which==32){e.preventDefault();bndlr.MixNMatch.removeFromBundle($(this));}});if(this.canAttachMixnMatchAddToCartListeners()){$document.on('click','.bndlr-status-box-add-to-cart',function(){var bundleKey=$(this).closest('[data-bndlr-bundle-key]').attr('data-bndlr-bundle-key');bndlr.MixNMatch.addMixAndMatchBundleToCart($('[data-bndlr-key="'+bundleKey+'"] .bndlr-add-bundle-to-cart').first(),$(this));});$document.on('keydown','.bndlr-status-box-add-to-cart',function(e){if(e.which==13||e.which==32){if(e.which==32){e.preventDefault();}
var bundleKey=$(this).closest('[data-bndlr-bundle-key]').attr('data-bndlr-bundle-key');bndlr.MixNMatch.addMixAndMatchBundleToCart($('[data-bndlr-key="'+bundleKey+'"] .bndlr-add-bundle-to-cart').first(),$(this));}});var MixNMatchScrollTimeout=false;$(window).scroll(function(){if(MixNMatchScrollTimeout!==false){clearTimeout(MixNMatchScrollTimeout);}
MixNMatchScrollTimeout=setTimeout(bndlr.MixNMatch.showHideStatusBox,200);});}
$document.on('click','.bndlr-add-to-sectioned-bundle',function(){bndlr.sectionedAddToBundle($(this));});$document.on('keydown','.bndlr-add-to-sectioned-bundle',function(e){if(e.which==13){bndlr.sectionedAddToBundle($(this));}
if(e.which==32){e.preventDefault();bndlr.sectionedAddToBundle($(this));}});$document.on('click','.bndlr-sectioned-section-name',function(){bndlr.sectionedSelectSection($(this));});$document.on('click','.bndlr-next-section',function(){bndlr.sectionedSelectNextSection($(this));});$document.on('click','[data-bundler-section-status] .bndlr-close',function(){bndlr.sectionedRemoveFromBundle($(this));});$document.on('keydown','[data-bundler-section-status] .bndlr-close',function(e){if(e.which==13){bndlr.sectionedRemoveFromBundle($(this));}
if(e.which==32){e.preventDefault();bndlr.sectionedRemoveFromBundle($(this));}});$document.on('click','.bndlr-add-sectioned-bundle-to-cart',function(){bndlr.sectionedAddBundleToCart($(this));});$document.on('keydown','.bndlr-add-sectioned-bundle-to-cart',function(e){if(e.which==13){bndlr.sectionedAddBundleToCart($(this));}
if(e.which==32){e.preventDefault();bndlr.sectionedAddBundleToCart($(this));}});$document.on('click','button.add_to_cart, #cart_form .js-change-quantity, .product-quantity-box .js-change-quantity, .btn--add-to-cart, .cart-functions  button.button[name="add"], #product-add-to-cart',function(e){debounce('check-for-discounts',function(){setTimeout(function(){DiscountEstimator.showPopup();bndlr.hideDynamicCheckoutButtons();},1000);},100);});document.addEventListener('bndlr:cart_was_modified',function(){debounce('check-for-discounts',function(){DiscountEstimator.showPopup();bndlr.hideDynamicCheckoutButtons();},100);});try{if(typeof window.jQuery==='function'){window.jQuery(document).on('cart.requestComplete',function(){debounce('cart-update',DiscountEstimator.showPopup.bind(DiscountEstimator),10);});}}catch(e){}
$document.on('change','.sidebar-cart .cart__qty-input, .mini-cart__quantity .quantity-selector__value, #shopify-section-cart-template .quantity-selector__value, .ajaxcart__quantity .js-qty__num, .cart-product__quantity .inputCounter',function(){debounce('cart-update',DiscountEstimator.showPopup.bind(DiscountEstimator),700);});$document.on('click','.product-form .product-form__cart-submit, .sidebar-cart [data-cart-remove], .mini-cart__quantity .quantity-selector__button, #shopify-section-cart-template .quantity-selector__button, form.product-single__form .payment-buttons .add-to-cart, .ajaxcart__quantity .js-qty__adjust, .cart-product__quantity .inputCounter__btn',function(){debounce('cart-update',DiscountEstimator.showPopup.bind(DiscountEstimator),700);});try{window.addEventListener('bndlr:cart_drawer_mutation',function(){DiscountEstimator.updateCartDiscounts();});}catch(e){bundlerConsole.log(e);}
try{document.addEventListener('bndlr:cart_was_modified',function(){debounce('cart-update',DiscountEstimator.showPopup.bind(DiscountEstimator),250);});}catch(e){bundlerConsole.log(e);}
var bundleWidgetCreatedTimeout=false;$document.on('bundler_bundle_widget_created',function(){if(bundleWidgetCreatedTimeout!==false){clearTimeout(bundleWidgetCreatedTimeout);}
bundleWidgetCreatedTimeout=setTimeout(function(){$('.bndlr-product').each(function(i,el){$(el).find('.bndlr-select-option').first().trigger('change');});bndlr.convertCurrency();if(($('.bndlr-container:not([data-available="false"]) .bndlr-product-title').first().height()===0&&$('.bndlr-container:not([data-available="false"]) .bndlr-product-title').first().text()!==''&&$('.bndlr-container:not([data-available="false"]) .bndlr-bundle-image').length===0)||($('.bndlr-container:not([data-available="false"]) .bndlr-bundle-image').length>0&&$('.bndlr-container:not([data-available="false"]) .bndlr-bundle-image').first().height()===0)||($('.bndlr-container:not([data-available="false"]) .bndlr-add-to-cart').length>0&&$('.bndlr-container:not([data-available="false"]) .bndlr-add-to-cart').first().height()===0)){$('.bundler-target-element').css({'font-size':'16px','line-height':'1.5'});}
if(typeof window.SealSubs!=='undefined'&&typeof window.SealSubs.refresh!=='undefined'){window.SealSubs.refresh();setTimeout(function(){bndlr.setProductWidth('.bundles-bundler-hop-bundle-container .bundler-target-element');},200);}},500);});document.addEventListener('bundler:mixnmatch_refreshed',function(){if(typeof window.Shopify!=='undefined'&&typeof window.Shopify.theme!=='undefined'&&(window.Shopify.theme.theme_store_id==871||window.Shopify.theme.name.indexOf('Warehouse')!==-1)){debounce('resize-box',function(){var height=document.querySelector('.product-block-list__item--info .card').getBoundingClientRect().height;if(height>200){document.querySelector('.product-block-list__wrapper').style.minHeight=height+'px';}},200);}});$(window).on('resize',function(){if(typeof bndlr.repositionTimeout!=='undefined'){clearTimeout(bndlr.repositonTimeout);}
bndlr.repositonTimeout=setTimeout(bndlr.repositionPlusSigns,50);});$('#SingleOptionSelector-0, #SingleOptionSelector-1').on('change',function(){var variantSelector='#ProductSelect-product-template option:selected, #ProductSelect-product-template option:selected';var variant=$(variantSelector).val();if(typeof variant=='undefined'){var variant=$(variantSelector).val();}
$('select.bndlr-select-variant option[value="'+variant+'"]').parent('select').val(variant);$('select.bndlr-select-variant option[value="'+variant+'"]').parent('select').trigger('change');});try{document.addEventListener('click',function(event){try{if(bndlr.useBundlerCheckout&&(event.target.matches('form[action="/cart/add"] .shopify-payment-button__button')||event.target.matches('form[action="/cart/add"] .shopify-payment-button__button *')||event.target.matches('form[action="/cart/add"] .shopify-payment-button__more-options')||event.target.matches('form[action="/cart/add"] button[onclick*="window.skipToCheckout.externalSkipToCheckout"]')||event.target.matches('form[action="/cart/add"] .lh-buy-now'))&&bndlr.externalAppPreventCheckout.canCheckout()){var form=$(event.target).closest('form');var url=form.attr('action');if(url.indexOf('amazon')===-1){event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();$.ajax({type:"POST",url:url,data:form.serialize(),success:function(data){self.prepareInvoice();}});}}}catch(e){bundlerConsole.log(e.message);}
try{if(bndlr.useBundlerCheckout&&(event.target.matches('form#form_buy_sticky #button-cart-buy'))&&bndlr.externalAppPreventCheckout.canCheckout()){event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();var form=$(event.target).closest('form');var $stickyQuantity=form.find('[name="stickyquantity"]');if($stickyQuantity.length>0){$stickyQuantity.attr('name','quantity');}
var url=form.attr('action');$.ajax({type:"POST",url:url,data:form.serialize(),success:function(data){self.prepareInvoice();}});}}catch(e){bundlerConsole.log(e.message);}},true);}catch(e){bundlerConsole.log(e.message);}
try{document.addEventListener('click',function(event){try{if(bndlr.useBundlerCheckout&&event.target.matches(checkoutSelector)&&bndlr.externalAppPreventCheckout.canCheckout()){event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();try{$(event.target).addClass('bndlr-checkout-button-clicked');}catch(e){console.error(e);}
self.prepareInvoice();}}catch(e){bundlerConsole.log(e.message);}},true);}catch(e){}
var productWidthStandard=230;var productWidthLandingPage=330;if(typeof clientSpecifics['product_dimensions']!=='undefined'){productWidthStandard=clientSpecifics['product_dimensions'].getStandardWidth();productWidthLandingPage=clientSpecifics['product_dimensions'].getLadingPageWidth();}
$body.append('<style>'+
'.bndlr-container {'+
'width:100%;'+
'text-align:center;'+
'margin-top:20px;'+
'padding-top: 20px;'+
'clear: both;'+
'box-sizing: border-box;'+
'line-height:1.5;'+
'}'+
'.bndlr-product {'+
'max-width:230px;'+
'max-width:'+productWidthStandard+'px;'+
'display:inline-block;'+
'vertical-align: top;'+
'margin: 5px 5px;'+
'position:relative;'+
'border: 1px solid rgba(198, 198, 198, 0.55);'+
'padding: 5px 5px;'+
'vertical-align: middle;'+
'box-sizing: border-box;'+
'}'+
'.bndlr-product-overlay {'+
'width:100%;'+
'height:100%;'+
'position:absolute;'+
'top:0;'+
'left:0;'+
'background:rgba(255, 255, 255, 0.5);'+
'box-sizing: border-box;'+
'display:none;'+
'}'+
'.bndlr-product-overlay .bndlr-product-overlay-checkmark  {'+
'position:absolute;'+
'width: auto;'+
'height: 1.5em;'+
'display: block;'+
'background:white;'+
'background: #FFFFFF;'+
'top:0;'+
'right:0;'+
'}'+
'.bndlr-product-overlay .bndlr-product-overlay-checkmark .bndlr-preselected-checkmark {'+
'width: auto;'+
'height: 1.5em;'+
'display: block;'+
'stroke-width: 3;'+
'stroke: rgb(70, 103, 167);'+
'stroke: #4667A7;'+
'margin:0 auto;'+
'}'+
'.bndlr-product:not(:last-of-type)::after {'+
'position: absolute;'+
'display: block;'+
'right: calc(-0.5em - 6px);'+
'top: 50%;'+
'transform: translateY(-50%);'+
'z-index: 9;'+
'z-index: 1;'+
'content: "+";'+
'font-weight: bold;'+
'color: white;'+
'color: #ffffff;'+
'background: #4667a7;'+
'background: #4667a7;'+
'border-radius:50%;'+
'width: 1em;'+
'height: 1em;'+
'line-height: 1.05em;'+
'font-size:25px;'+
'font-family:arial;'+
'}'+
'.bndlr-product.bndlr-no-plus-sign::after {'+
'display:none;'+
'}'+
'.bndlr-container .bndlr-break-plus-signs .bndlr-add-to-cart {'+
'max-width:230px;'+
'}'+
'.bndlr-landing-page .bndlr-product {'+
'max-width:330px;'+
'max-width:'+productWidthLandingPage+'px;'+
'}'+
'.bndlr-landing-page .bndlr-mnm-selected-products .bndlr-product {'+
'max-width:250px;'+
'}'+
'.bndlr-landing-page .bndlr-container {'+
'margin-top:0;'+
'padding-top:0;'+
'}'+
'.bndlr-landing-page .bndlr-break-plus-signs .bndlr-add-to-cart {'+
'max-width:330px;'+
'}'+
'@media screen and (max-width: 554px) {'+
'.bndlr-landing-page .bndlr-container .bndlr-add-to-cart {'+
'max-width:330px;'+
'}'+
'}'+
'.bndlr-break-plus-signs .bndlr-product:not(:last-of-type)::after {'+
'right: calc(-0.5em - 6px);'+
'left: 50%;'+
'transform: translateX(-50%);'+
'bottom: calc(-0.5em - 6px);'+
'top:initial;'+
'}'+
'.bndlr-products-container {'+
'display:inline-block;'+
'padding:7px;'+
'border-radius:2px;'+
'margin-bottom: 20px;'+
'position:relative;'+
'}'+
'.bndlr-inner-products-container {'+
'display:inline-block;'+
'}'+
'.bndlr-mixnmatch .bndlr-inner-products-container {'+
'padding-top:5px;'+
'}'+
'.bndlr-bundle-description {'+
'width:80%;'+
'margin:0 auto;'+
'}'+
'.bndlr-bundle-title {'+
'margin-bottom: 0.3em;'+
'margin-top: 0.2em;'+
'}'+
'.bndlr-container h2.bndlr-bundle-title {'+
'text-align:center;'+
'}'+
'.bndlr-bundle-checkout-warning {'+
'width:80%;'+
'margin:0 auto 0.2em auto;'+
'font-size:0.8em;'+
'opacity:0.8;'+
'margin-top: 0.5em;'+
'}'+
'.bndlr-add-to-cart {'+
'display:block;'+
'width: calc(100% - 10px);'+
'margin:5px auto 0 auto;'+
'background: #4667a7;'+
'background: #4667a7;'+
'padding: 0.6em 0;'+
'color: white;'+
'color: #ffffff;'+
'border-radius: 2px;'+
'cursor: pointer;'+
'max-width: 710px;'+
'}'+
'.bndlr-add-to-cart-container {'+
'display:flex;'+
'width: calc(100% - 10px);'+
'margin:0px auto 0 auto;'+
'max-width: 710px;'+
'padding-top:5px;'+
'}'+
'.bndlr-add-to-cart-container .bndlr-add-to-cart, .bndlr-add-to-cart-container .bndlr-add-bundle-to-cart {'+
'margin:0;'+
'flex: 1 1 auto;'+
'}'+
'.bndlr-add-to-cart-container .bndlr-floating-label {'+
'position: relative;'+
'}'+
'.bndlr-add-to-cart-container .bndlr-floating-label  .bndlr-add-to-cart-quantity-label {'+
'position: absolute;'+
'transition: all .3s ease;'+
'font-size: 0.7em !important;'+
'top: 0;'+
'left: 0.5em;'+
'pointer-events: none;'+
'margin: 0;'+
'padding: 0;'+
'color: rgb(115, 115, 115);'+
'font-weight: normal !important;'+
'line-height: 1.6;'+
'text-transform: none;'+
'letter-spacing: inherit !important;'+
'text-transform: inherit !important;'+
'width: auto;'+
'}'+
'.bndlr-add-to-cart-container .bndlr-add-to-cart-quantity-input {'+
'flex: 1 1 50px;'+
'margin-right: 5px;'+
'max-width: 70px;'+
'font-size: 1em;'+
'padding: .3em;'+
'padding: 0.8em 0.25em 0.25em 0.25em;'+
'line-height: 1.6;'+
'font-family: inherit;'+
'font-weight: inherit;'+
'font-style: inherit;'+
'text-align: center;'+
'box-sizing: border-box;'+
'border-radius: 2px;'+
'margin-top: initial;'+
'margin-bottom: initial;'+
'height: 100%;'+
'overflow: visible;'+
'border: 1px solid rgba(198, 198, 198, 0.55);'+
'}'+
'.bndlr-add-to-bundle {'+
'display:block;'+
'width: 100%;'+
'margin:5px auto 0 auto;'+
'background: #4667a7 !important;'+
'background: rgb(67, 112, 183) !important;'+
'padding: 0.6em 0;'+
'color: white !important;'+
'color: #FFFFFF !important;'+
'border-radius: 2px;'+
'cursor: pointer;'+
'max-width: 710px;'+
'user-select: none;'+
'}'+
'.bndlr-add-to-bundle:active {'+
'opacity:0.5;'+
'}'+
'.bndlr-add-bundle-to-cart {'+
'display:block;'+
'width: 100%;'+
'margin:5px auto 0 auto;'+
'background: #4667a7 !important;'+
'background: #4667a7 !important;'+
'padding: 0.6em 0;'+
'color: white !important;'+
'color: #ffffff !important;'+
'border-radius: 2px;'+
'cursor: pointer;'+
'max-width: 710px;'+
'}'+
'.bndlr-add-sectioned-bundle-to-cart {'+
'display:block;'+
'width: 100%;'+
'margin:5px auto 0 auto;'+
'background: #4667a7 !important;'+
'background: #4667a7 !important;'+
'padding: 0.6em 0;'+
'color: white !important;'+
'color: #FFFFFF !important;'+
'border-radius: 2px;'+
'cursor: pointer;'+
'max-width: 710px;'+
'text-align:center;'+
'user-select: none;'+
'}'+
'.bndlr-add-sectioned-bundle-to-cart.bndlr-disabled {'+
'opacity:0.2;'+
'pointer-events:none;'+
'}'+
'.bndlr-add-to-sectioned-bundle {'+
'display:block;'+
'width: 100%;'+
'margin:5px auto 0 auto;'+
'background: #4667a7 !important;'+
'background: #4667a7 !important;'+
'padding: 0.6em 0;'+
'color: white !important;'+
'color: #FFFFFF !important;'+
'border-radius: 2px;'+
'cursor: pointer;'+
'max-width: 710px;'+
'user-select: none;'+
'}'+
'.bndlr-sectioned-product .bndlr-product-qn-container {'+
'margin-left:5px;'+
'margin-right:5px;'+
'}'+
'.bndlr-sectioned-instructions-text {'+
'margin: 0 auto 0.2em auto;'+
'margin-top: 0px;'+
'font-size: 0.8em;'+
'margin-top: 0.5em;'+
'text-align: center;'+
'color:rgba(14, 27, 77, 1);'+
'color:rgb(14, 27, 77);'+
'opacity: 0.75;'+
'}'+
'.bndlr-add-to-sectioned-bundle:active {'+
'opacity:0.5;'+
'}'+
'.bndlr-add-to-cart[data-active="false"] {'+
'opacity:0.8;'+
'cursor: default;'+
'}'+
'.bndlr-checkmark {'+
'width: auto;'+
'height: 1.5em;'+
'display: block;'+
'stroke-width: 4;'+
'stroke: #ffffff;'+
'margin:0 auto;'+
'stroke-dasharray: 45;'+
'stroke-dashoffset: 45;'+
'-moz-animation: bndlr-stroke 0.35s linear forwards;'+
'-webkit-animation: bndlr-stroke 0.35s linear forwards;'+
'-o-animation: bndlr-stroke 0.35s linear forwards;'+
'-ms-animation: bndlr-stroke 0.35s linear forwards;'+
'animation: bndlr-stroke 0.35s linear forwards;'+
'}'+
'.bndlr-product.bndlr-mix-and-match .bndlr-checkmark {'+
'stroke: #FFFFFF;'+
'}'+
'_:-ms-lang(x), .bndlr-checkmark {'+
'stroke-dasharray: 0px;'+
'stroke-dashoffset: 0px;'+
'}'+
'@keyframes bndlr-stroke {'+
'100% {'+
'stroke-dashoffset: 0px;'+
'}'+
'}'+
'.bndlr-product-image-url {'+
'display: block;'+
'text-decoration: none;'+
'border: none !important;'+
'padding: 0 !important;'+
'}'+
'.bndlr-product-image-url::after {'+
'display: none !important;'+
'}'+
'.bndlr-product-image {'+
'border-radius:2px;'+
'max-width:100%;'+
'width:100%;'+
'height:auto;'+
'display:block;'+
'margin-bottom:5px;'+
'margin-left: 0 !important;'+
'opacity: 1 !important;'+
'}'+
'.bndlr-product-title {'+
'font-weight:bold;'+
'border: none !important;'+
'padding: 0 !important;'+
'color: #282828 !important;'+
'}'+
'.bndlr-product-quantity {'+
'font-weight:bold;'+
'color: #788188;'+
'color: #788188;'+
'display: inline-block;'+
'margin-right: 5px;'+
'}'+
'.bndlr-old-price {'+
'text-decoration: line-through !important;'+
'margin-right:0.25em;'+
'color: #788188 !important;'+
'color: #788188 !important;'+
'font-weight:bold !important;'+
'}'+
'.bndlr-new-price {'+
'color: #788188 !important;'+
'color: rgb(120, 129, 136) !important;'+
'font-weight:bold !important;'+
'}'+
'.bndlr-add-to-cart .bndlr-new-price {'+
'color: inherit !important;'+
'font-weight:inherit !important;'+
'}'+
'.bndlr-old-price-cart-inline {'+
'text-decoration: line-through !important;'+
'margin-right:0.25em;'+
'}'+
'.bndlr-total-price,.bndlr-mnm-total-price {'+
'font-weight:bold;'+
'}'+
'.bndlr-total-price .bndlr-old-price, .bndlr-total-price .bndlr-new-price, .bndlr-mnm-total-price .bndlr-old-price, .bndlr-mnm-total-price .bndlr-new-price {'+
'color:inherit;'+
'}'+
'.bndlr-price-per-unit {'+
'color: #788188 !important;'+
'color: rgb(120, 129, 136) !important;'+
'font-weight:normal !important;'+
'font-style:italic;'+
'font-size: 0.8em;'+
'vertical-align: middle;'+
'vertical-align: top;'+
'}'+
'.bndlr-select-variant {'+
'font-family: inherit;'+
'font-weight: inherit;'+
'font-style: inherit;'+
'-webkit-font-smoothing: antialiased;'+
'-webkit-text-size-adjust: 100%;'+
'border-radius: 2px;'+
'max-width: 100%;'+
'font-size: .82em;'+
'padding: .445em 10px;'+
'padding-right: 10px;'+
'padding-right: 10px;'+
'line-height: 1.6;'+
'border: 1px solid #E3E3E3;'+
'width: 100%;'+
'max-width: 100%;'+
'display: block;'+
'margin-top: 5px;'+
'margin-bottom: 0px !important;'+
'color:rgb(47, 47, 47);'+
'-webkit-appearance: none;'+
'-moz-appearance: none;'+
'appearance: none;'+
'background-image: url(https://cdn-bundler.nice-team.net/app/img/app/dwn.svg?v2) !important;'+
'background-repeat: no-repeat !important;'+
'background-position: right 10px center !important;'+
'background-color: #fff !important;'+
'background-color: #FFFFFF !important;'+
'padding-right: 28px;'+
'text-indent: 0.01px;'+
'text-overflow: "";'+
'cursor: pointer;'+
'background-size: auto;'+
'min-height: unset !important;'+
'height: auto;'+
'}'+
'select.bndlr-select-variant::-ms-expand {'+
'display:none;'+
'}'+
'.bndlr-loading {'+
'color: rgba(0,0,0,0) !important;'+
'position:relative;'+
'}'+
'.bndlr-loading svg.bndlr-checkmark {'+
'opacity:0;'+
'}'+
'.bndlr-loading:after {'+
'display: block;'+
'content: "";'+
'border: 2px solid white;'+
'border: 2px solid #ffffff;'+
'width: 1em;'+
'height: 1em;'+
'border-radius: 50%;'+
'border-top: 2px solid transparent;'+
'position: absolute;'+
'left: 50%;'+
'top: 50%;'+
'animation-name: bndlr-spin;'+
'animation-duration: 500ms;'+
'animation-iteration-count: infinite;'+
'animation-timing-function: linear;'+
'}'+
'@keyframes bndlr-spin {'+
'from {'+
'transform:translateY(-50%) translateX(-50%) rotate(0deg);'+
'}'+
'to {'+
'transform:translateY(-50%) translateX(-50%) rotate(360deg);'+
'}'+
'}'+
'.bndlr-bundle-loading {'+
'height:6rem;'+
'position:relative;'+
'}'+
'.bndlr-bundle-loading:after {'+
'display: block;'+
'content: "";'+
'border: 2px solid #cdcdcd;'+
'width: 3em;'+
'height: 3em;'+
'border-radius: 50%;'+
'border-top: 2px solid transparent;'+
'position: absolute;'+
'left: 50%;'+
'top: 50%;'+
'animation-name: bndlr-spin;'+
'animation-duration: 500ms;'+
'animation-iteration-count: infinite;'+
'animation-timing-function: linear;'+
'}'+
'#bndlr-discount-message {'+
'position:fixed;'+
'display:block;'+
'width:auto;'+
'height:auto;'+
'background:rgb(246, 239, 220);'+
'background:rgb(246, 239, 220);'+
'color:#262626;'+
'color:#262626;'+
'padding: 30px 20px;'+
'right:10px;'+
'bottom:-100%;'+
'z-index:99999;'+
'box-shadow: 1px 1px 2px 1px #a5a5a5;'+
'border-radius: 2px;'+
'text-align:center;'+
'font-size:20px;'+
'border: 3px solid rgb(47, 47, 47);'+
'border: 3px solid rgb(47, 47, 47);'+
'margin-left:10px;'+
'}'+
'.bndlr-message-title {'+
'font-style:italic;'+
'font-size: 0.8em;'+
'font-weight: normal;'+
'}'+
'.bndlr-message-and-text {'+
'font-size: 0.8em;'+
'font-weight: normal;'+
'}'+
'.bndlr-message-question {'+
'font-size: 0.7em;'+
'font-weight: normal;'+
'padding: 0 20px;'+
'margin: 15px 0 10px 0;'+
'}'+
'.bndlr-message-discount-value {'+
'border-top: 1px solid black;'+
'border-top: 1px solid #262626;'+
'border-bottom: 1px solid black;'+
'border-bottom: 1px solid #262626;'+
'font-weight:bold;'+
'margin: 10px;'+
'line-height: 1.5;'+
'}'+
'.bndlr-message-yes {'+
'font-size: 0.7em;'+
'background: rgb(70, 167, 98);'+
'background: rgb(70, 167, 98);'+
'color: white;'+
'color: #ffffff;'+
'display: inline-block;'+
'padding: 5px 15px;'+
'border: 1px solid rgb(0, 0, 0);'+
'border: 1px solid #262626;'+
'border-radius: 2px;'+
'margin:0 10px;'+
'cursor:pointer;'+
'}'+
'.bndlr-message-no {'+
'font-size: 0.7em;'+
'background: transparent;'+
'display: inline-block;'+
'padding: 5px 15px;'+
'border: 1px solid rgb(0, 0, 0);'+
'border: 1px solid #262626;'+
'border-radius: 2px;'+
'margin:0 10px;'+
'cursor:pointer;'+
'}'+
'.bndlr-message-close, .bndlr-message-close:empty {'+
'position:absolute;'+
'width:32px;'+
'height:32px;'+
'top:-5px;'+
'right:-5px;'+
'cursor:pointer;'+
'border: none;'+
'box-sizing: border-box;'+
'display:block;'+
'}'+
'.bndlr-message-close:before, .bndlr-message-close:after {'+
'position: absolute;'+
'left: calc(16px - 1px);'+
'content: "";'+
'height: 16px;'+
'top: 8px;'+
'width: 2px;'+
'background-color: rgb(38, 38, 38);'+
'background-color: rgb(38, 38, 38);'+
'}'+
'.bndlr-message-close:before {'+
'transform: rotate(45deg);'+
'}'+
'.bndlr-message-close:after {'+
'transform: rotate(-45deg);'+
'}'+
'.bndlr-warning {'+
'position:absolute;'+
'bottom:2px;'+
'left:2px;'+
'background:white;'+
'color: #292929;'+
'font-size:1em;'+
'display:block;'+
'padding: 5px;'+
'border-radius:2px !important;'+
'border: 1px solid #cdcdcd;'+
'cursor:help;'+
'left: 50%;'+
'transform: translateX(-50%);'+
'width: 90%;'+
'}'+
'.bndlr-warning-container .bndlr-warning {'+
'position:relative;'+
'left: unset;'+
'transform: unset;'+
'text-align: center;'+
'bottom: unset;'+
'width: auto;'+
'margin: 2px;'+
'}'+
'.bndlr-add-to-cart:focus, .bndlr-select-variant:focus, .bndlr-product a:focus, .bndlr-add-to-bundle:focus, .bndlr-add-bundle-to-cart:focus, .bndlr-close:focus, .bndlr-add-sectioned-bundle-to-cart:focus {'+
'outline:1px dotted rgb(134, 134, 134);'+
'outline-offset: 1px;'+
'}'+
'.bndlr-add-to-cart:focus, .bndlr-select-variant:active, .bndlr-add-to-bundle:focus, .bndlr-add-bundle-to-cart:focus, .bndlr-add-sectioned-bundle-to-cart:focus  {'+
'opacity:0.9;'+
'}'+
'.bndlr-select-variant:hover {'+
'outline:1px solid rgb(221, 221, 221);'+
'}'+
'.rte img.bndlr-product-image {'+
'margin:0;'+
'margin-bottom: 5px;'+
'margin-left: 0 !important;'+
'}'+
'.rte .bundler-target-element a {'+
'text-decoration:initial;'+
'text-underline-position:initial;'+
'}'+
'.rte .bundler-target-element h2::after {'+
'margin:0;'+
'padding:0;'+
'display:none;'+
'}'+
'.rte .bundler-target-element h2 {'+
'margin-top:0.2em;'+
'margin-bottom:0.3em;'+
'}'+
'#jas-content .jas-row .bundler-target-element {'+
'flex:1 1 auto;'+
'}'+
'img.bndlr-bundle-image {'+
'border: 1px solid rgba(198, 198, 198, 0.55);'+
'padding: 5px 5px;'+
'max-width:100%;'+
'max-width:calc(100% - 10px);'+
'width:auto;'+
'margin: 5px;'+
'vertical-align: bottom;'+
'box-sizing: border-box;'+
'}'+
'.bndlr-product-names-list {'+
'max-width: 710px;'+
'margin:0 auto;'+
'padding-bottom: 0.25em;'+
'}'+
'.bndlr-product-names-list .bndlr-price-per-unit {'+
'vertical-align: middle;'+
'padding-left: 0.5em;'+
'font-size: 0.7em;'+
'}'+
'#bndlr-loaded {'+
'width:0;'+
'height:0;'+
'}'+
'.bundler-target-element {'+
'clear:both;'+
'direction:ltr;'+
'}'+
'.bndlr-cross-out {'+
'text-decoration:line-through !important;'+
'}'+
'.bndlr-minus:before {'+
'display:inline;'+
'content:"-";'+
'transform: translateX(-12px);'+
'position: absolute;'+
'}'+
'section#cart form div.row div.total span.bndlr-cart-values {'+
'margin-top:0;'+
'}'+
'span.cart-subtotal__price.bundler-cart-price-info-container[data-cart-subtotal] {'+
'display:inline-block;'+
'}'+
'.template-product section.page.page-product-header[itemtype="http://schema.org/Product"][data-section-type="product"] .bndlr-container {'+
'padding-bottom:100px;'+
'}'+
'.bndlr-error {'+
'text-align: center;'+
'color:rgba(142, 142, 142, 0.46);'+
'font-size: 0.7em;'+
'font-style: italic;'+
'}'+
'span.bndlr-cart-values {'+
'display:inline;'+
'}'+
'.bndlr-mnm-second-container {'+
'display:flex;'+
'flex-direction:column;'+
'}'+
'.bndlr-mnm-selected-products-title {'+
'text-align:center;'+
'padding:5px 10px 0 10px;'+
'font-size: 1.1em;'+
'font-weight: bold;'+
'font-style: italic;'+
'}'+
'.bndlr-mnm-selected-products {'+
'flex: 1 1 50%;'+
'display: flex;'+
'padding:5px 0;'+
'}'+
'.bndlr-mnm-selected-products .bndlr-product {'+
'max-width:200px;'+
'}'+
'.bndlr-mnm-add-to-cart-wrapper {'+
'flex: 1 1 auto;'+
'padding:5px;'+
'}'+
'.bndlr-mnm-selected-products .bndlr-product {'+
'box-shadow: 1px 1px 5px 0px rgb(128, 128, 128);'+
'border:none;'+
'}'+
'.bndlr-mnm-instructions-text {'+
'color: rgb(232, 35, 35);'+
'color: rgb(232, 35, 35);'+
'}'+
'.bndlr-product[data-mnm-required="true"]::before {'+
'display:block;'+
'content:"Required";'+
'content:"Required";'+
'position:absolute;'+
'opacity: 1;'+
'left: 0;'+
'top: 0;'+
'background:rgb(219, 54, 24);'+
'background: rgb(219, 54, 24);'+
'color:white;'+
'color: rgb(255, 255, 255);'+
'padding: 5px 7px;'+
'font-weight: normal;'+
'z-index:1;'+
'border-bottom-right-radius: 2px;'+
'}'+
'#bndlr-mnm-status-box {'+
'position:fixed;'+
'bottom: 1em;'+
'left:50%;'+
'transform:translateX(-50%);'+
'min-width:250px;'+
'max-width:90%;'+
'text-align:center;'+
'z-index:2;'+
'}'+
'@media only screen and (max-width: 440px) {'+
'#bndlr-mnm-status-box {'+
'min-width:90%;'+
'}'+
'}'+
'.bdnlr-mnm-status-box-info-container {'+
'background:black;'+
'background: #000000;'+
'padding: 1em;'+
'border-radius: 5px;'+
'}'+
'.bdnlr-mnm-status-box-products-container {'+
'text-align: center;'+
'padding-left: 5px;'+
'}'+
'.bndlr-status-box-product {'+
'width: 67px;'+
'height: 67px;'+
'display: inline-block;'+
'margin-left: -10px;'+
'margin-bottom: -0.5em;'+
'vertical-align:bottom;'+
'}'+
'.bndlr-status-box-product-quantity {'+
'position: absolute;'+
'margin-top: -0.5em;'+
'margin-left: -0.5em;'+
'color: gray;'+
'color: rgb(128, 128, 128);'+
'font-style: italic;'+
'font-size: 0.8em;'+
'text-shadow: 1px 1px 0px rgb(193, 192, 192);'+
'}'+
'.bndlr-status-box-product-url {'+
'display:block;'+
'}'+
'.bndlr-status-box-product-image {'+
'width: 67px;'+
'border-radius: 50% !important;'+
'height: 67px;'+
'object-fit: cover;'+
'background:white;'+
'box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.7);'+
'}'+
'#bndlr-mnm-status-box .bndlr-mnm-instructions-text {'+
'color: white;'+
'color: #FFFFFF;'+
'}'+
'.bndlr-status-box-add-to-cart {'+
'display:block;'+
'width: 100%;'+
'margin:0 auto;'+
'background: #4667a7;'+
'background: #4667a7;'+
'padding: 0.6em 0;'+
'color: white;'+
'color: #FFFFFF;'+
'border-radius: 2px;'+
'cursor: pointer;'+
'max-width: 710px;'+
'}'+
'.bndlr-tiered-mnm-instructions-text {'+
'color: rgb(0, 0, 0);'+
'color:rgb(0, 0, 0);'+
'border-radius: 4px;'+
'box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.32) inset;'+
'margin: 0.5em auto;'+
'display:inline-block;'+
'font-weight: bold;'+
'background: linear-gradient(90deg, rgb(51, 51, 51) 50%, transparent 0) repeat-x, linear-gradient(90deg, rgb(51, 51, 51) 50%, transparent 0) repeat-x, linear-gradient(0deg, rgb(51, 51, 51) 50%, transparent 0) repeat-y, linear-gradient(0deg, rgb(51, 51, 51) 50%, transparent 0) repeat-y;'+
'background: linear-gradient(90deg, rgb(0, 0, 0) 50%, transparent 0) repeat-x, linear-gradient(90deg, rgb(0, 0, 0) 50%, transparent 0) repeat-x, linear-gradient(0deg, rgb(0, 0, 0) 50%, transparent 0) repeat-y, linear-gradient(0deg, rgb(0, 0, 0) 50%, transparent 0) repeat-y;'+
'background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;'+
'background-position: 0 0, 0 100%, 0 0, 100% 0;'+
'animation: bndlr-linear-gradient-move .3s infinite linear;'+
'transform: translate3d(0,0,0);'+
'overflow: hidden;'+
'padding: 1px;'+
'}'+
'.bndlr-tiered-mnm-instructions-text-inner {'+
'background: rgb(254, 216, 63);'+
'background: rgb(254, 216, 63);'+
'padding: 0.4em 1em;'+
'}'+
'@keyframes bndlr-linear-gradient-move {'+
'100% {'+
'background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;'+
'}'+
'} '+
'.bndlr-visibility-hidden {'+
'visibility:hidden;'+
'opacity:0;'+
'transition: visibility 0.5s, opacity 0.5s linear;'+
'}'+
'.bndlr-visibility-visible {'+
'visibility: visible;'+
'opacity:1;'+
'transition: visibility 0.5s, opacity 0.5s linear;'+
'}'+
'.bndlr-hidden {'+
'display:none !important;'+
'}'+
'.bndlr-close::after {'+
'content: "";'+
'display: block;'+
'height: 2px;'+
'width: 100%;'+
'background-color: rgb(70, 70, 70);'+
'position: absolute;'+
'left: 0;'+
'top: 7px;'+
'outline: 1px solid rgb(255, 255, 255);'+
'}'+
'.bndlr-close::before {'+
'content: "";'+
'display: block;'+
'height: 100%;'+
'width: 2px;'+
'background-color: rgb(70, 70, 70);'+
'position: absolute;'+
'left: 7px;'+
'top: 0;'+
'outline: 1px solid rgb(255, 255, 255);'+
'}'+
'.bndlr-close {'+
'width: 16px;'+
'height: 16px;'+
'-webkit-transform: rotate(45deg);'+
'-x-transform: rotate(45deg);'+
'-o-transform: rotate(45deg);'+
'transform: rotate(45deg);'+
'position: absolute;'+
'right: 3px;'+
'top: 3px;'+
'border: none;'+
'cursor: pointer;'+
'box-sizing: border-box;'+
'}'+
'div.bndlr-close:empty {'+
'display:block;'+
'}'+
'#ajaxifyModal #ajaxifyCart .bndlr-cart-values {'+
'font-size:80%;'+
'}'+
'.bndlr-dn {'+
'display:none;'+
'}'+
'.bndlr-no-click {'+
'pointer-events:none;'+
'}'+
'.bundler-volume-target-element { '+
'clear: both;'+
'}'+
'.bndlr-volume {'+
'text-align:center;'+
'padding-top: 2em;'+
'color:black;'+
'color:#000000;'+
'padding-bottom: 2em;'+
'}'+
'.bndlr-volume-title, h2.bndlr-volume-title {'+
'margin-bottom: 0.3em;'+
'margin-top: 0.2em;'+
'font-size: 1.25em;'+
'line-height: 1.2;'+
'float:none;'+
'width:auto;'+
'}'+
'.bndlr-volume-discounts {'+
'margin-top: 0.75em;'+
'}'+
'.bndlr-volume-discount {'+
'border: 2px solid rgba(189, 189, 189, 0.55);'+
'border: 2px solid rgba(189, 189, 189, 0.55);'+
'padding: 0.75em;'+
'margin-bottom: .5em;'+
'text-align:center;'+
'border-radius:5px;'+
'position:relative;'+
'color:black;'+
'color:#000000;'+
'background:white;'+
'background:#FFFFFF;'+
'}'+
'.bndlr-volume-style-0.bndlr-volume-discount.bndlr-has-savings-text {'+
'padding: 0.5em 0.75em 1.1em 0.75em;'+
'margin-bottom: 1.2em;'+
'}'+
'.bndlr-volume-style-0 .bndlr-volume-saving-text {'+
'position:absolute;'+
'left:50%;'+
'transform:translate(-50%, 50%);'+
'bottom:0;'+
'border-radius:5px;'+
'background:rgb(70, 103, 167);'+
'background:#4667a7;'+
'color:white;'+
'color:#FFFFFF;'+
'font-size:0.75em;'+
'padding:4px 45px;'+
'white-space: nowrap;'+
'font-weight:bold;'+
'line-height:1.6;'+
'}'+
'.bndlr-volume-style-0 .bndlr-volume-saving-text a {'+
'color:white;'+
'color:#FFFFFF;'+
'font-weight:bold;'+
'line-height:1.6;'+
'}'+
'.product-single__box.js-product-single-actions.js-product-single-box .bundler-volume-target-element {'+
'padding-left: 24px;'+
'padding-right: 24px;'+
'}'+
'@media screen and (max-width: 980px) {'+
'.product-single__box.js-product-single-actions.js-product-single-box .bundler-volume-target-element {'+
'padding-left: 18px;'+
'padding-right: 18px;'+
'}'+
'}'+
'.bndlr-volume-discount .bndlr-volume-saving-text {'+
'cursor:pointer;'+
'}'+
'.bndlr-sectioned-mixnmatch {'+
'width:100%;'+
'max-width:1536px;'+
'margin-left:auto;'+
'margin-right:auto;'+
'background: white;'+
'border-radius: 5px;'+
'margin-top: 10px !important;'+
'margin-bottom: 10px !important;'+
'padding: 10px 10px !important;'+
'box-shadow: 1px 1px 1px rgba(128, 128, 128, 0.38);'+
'border: 1px solid rgb(219, 219, 219);'+
'background: rgb(247, 247, 247);'+
'background: rgb(247, 247, 247);'+
'color: #rgb(14, 27, 77);'+
'color: rgb(14, 27, 77);'+
'}'+
'.bndlr-sections-main-container {'+
'display:flex;'+
'justify-content:center;'+
'justify-content:space-between;'+
'}'+
'.bndlr-section-main-title {'+
'margin-bottom: 0.3em;'+
'margin-top: 0.2em;'+
'color: rgb(14, 27, 77);'+
'}'+
'.bndlr-section-description {'+
'width:80%;'+
'margin:0 auto;'+
'margin-bottom: 10px;'+
'opacity: 0.8;'+
'}'+
'.bndlr-sections-container {'+
'flex: 1 1 100%;'+
'}'+
'.bndlr-sections-status-container {'+
'text-align: left;'+
'flex: 0 0 300px;'+
'background:white;'+
'background: rgb(255, 255, 255);'+
'color: rgb(14, 27, 77);'+
'border-left: 2px solid rgb(247, 247, 247);'+
'padding:10px;'+
'border-left: none;'+
'border-radius: 5px;'+
'box-shadow: 0px 0px 2px rgb(128, 128, 128);'+
'}'+
'.bndlr-section-title {'+
'width: 100%;'+
'font-size: 1.4em;'+
'line-height: 2;'+
'}'+
'.bndlr-sectioned-section-name {'+
'display:flex;'+
'align-items: center;'+
'cursor:pointer;'+
'}'+
'.bndlr-section-name-number {'+
'width: calc(1.6em + 2px);'+
'min-width: calc(1.6em + 2px);'+
'max-width: calc(1.6em + 2px);'+
'height: calc(1.6em + 2px);'+
'min-height: calc(1.6em + 2px);'+
'max-height: calc(1.6em + 2px);'+
'border-radius: 50%;'+
'text-align: center;'+
'background: transparent;'+
'border: 2px solid rgb(228, 228, 228);'+
'border: 2px solid rgb(228, 228, 228);'+
'margin: 4px 4px 4px 0;'+
'}'+
'.bndlr-section-name-text {'+
'font-size: 1em;'+
'line-height: 1.2;'+
'margin-bottom: 0px;'+
'margin-top: 0px;'+
'}'+
'.bndlr-section-name-line {'+
'flex-grow: 1;'+
'margin: 0 0.5em;'+
'display: flex;'+
'background: rgb(247, 247, 247);'+
'background: rgb(228, 228, 228);'+
'height: 2px;'+
'align-self: center;'+
'border-radius: 1em;'+
'}'+
'.bndlr-sectioned-available-products {'+
'flex-wrap: wrap;'+
'justify-content: center;'+
'margin-left: -10px;'+
'margin-right: 0;'+
'}'+
'.bndlr-sectioned-section-products {'+
'padding: 0 20px 40px;'+
'padding: 0 0.5em 40px calc(1.6em + 7px);'+
'margin-top: 10px;'+
'}'+
'.bndlr-sectioned-section {'+
'display:flex;'+
'flex-direction:column;'+
'}'+
'.bndlr-sectioned-section .bndlr-next-section {'+
'display:none;'+
'align-self: flex-end;'+
'padding: 0.6em 1.2em;'+
'background: rgb(67, 112, 183);'+
'background: #4667A7;'+
'background: #4667a7;'+
'color: white;'+
'color: #FFFFFF;'+
'border-radius: 2px;'+
'cursor: pointer;'+
'margin-top: 10px;'+
'margin-right: 5px;'+
'}'+
'.bndlr-sectioned-status-box-product-quantity {'+
'position: absolute;'+
'margin-top: -0.5em;'+
'margin-left: -0.5em;'+
'color: gray;'+
'font-style: italic;'+
'font-size: 0.8em;'+
'line-height:1.5;'+
'width:calc(1em * 1.5);'+
'border-radius: 50%;'+
'background: white;'+
'box-shadow: 1px 1px 1px rgba(2, 2, 2, 0.41);'+
'text-align: center;'+
'}'+
'.bndlr-sectioned-status-box-product-image {'+
'width: 67px !important;'+
'height: 67px !important;'+
'object-fit: cover;'+
'background: rgb(255, 255, 255);'+
'box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.7);'+
'display: block;'+
'border-radius:3px;'+
'}'+
'.bndlr-sectioned-status-box-product .bndlr-close {'+
'top:0;'+
'right:0;'+
'}'+
'.bndlr-sectioned-mixnmatch.bndlr-container .bndlr-sections-status-container .bndlr-bundle-checkout-warning {'+
'display:block;'+
'}'+
'.bndlr-sectioned-section-products .bndlr-sectioned-status-box-product {'+
'width: 67px;'+
'height: 67px;'+
'display: inline-block;'+
'margin: 0 10px 10px 0;'+
'vertical-align:bottom;'+
'position:relative;'+
'}'+
'.bndlr-sectioned-status-box-product .sealsubs-target-element.sealsubs-full {'+
'display:none;'+
'}'+
'.bndlr-shine-animation {'+
'position:relative;'+
'overflow:hidden;'+
'}'+
'.bndlr-shine-animation:after {'+
'content:"";'+
'top:0;'+
'left:0;'+
'transform:translateX(-150%);'+
'width:100%;'+
'height:100%;'+
'position: absolute;'+
'z-index:1;'+
'animation: bndlr-shine-keyframes 5s infinite 1s;'+
'background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(128,186,232,0) 99%, rgba(125,185,232,0) 100%); /* FF3.6+ */'+
'background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(50%,rgba(255,255,255,0.8)), color-stop(99%,rgba(128,186,232,0)), color-stop(100%,rgba(125,185,232,0))); /* Chrome,Safari4+ */'+
'background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Chrome10+,Safari5.1+ */'+
'background: -o-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Opera 11.10+ */'+
'background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* IE10+ */'+
'background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* W3C */'+
'}'+
'@keyframes bndlr-shine-keyframes {'+
'0% {'+
'transform:translateX(-150%);'+
'}'+
'20% {'+
'transform:translateX(150%);'+
'}'+
'100% {'+
'transform:translateX(150%);'+
'}'+
'}'+
'.bndlr-sectioned-section[data-requirements-fulfilled="true"] .bndlr-next-section {'+
'display:block;'+
'}'+
'[data-bundler-section] {'+
'display:none;'+
'}'+
'[data-bundler-active-section="0"] [data-bundler-section="0"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="1"] [data-bundler-section="1"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="2"] [data-bundler-section="2"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="3"] [data-bundler-section="3"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="4"] [data-bundler-section="4"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="5"] [data-bundler-section="5"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="6"] [data-bundler-section="6"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="7"] [data-bundler-section="7"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="8"] [data-bundler-section="8"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="9"] [data-bundler-section="9"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="10"] [data-bundler-section="10"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="11"] [data-bundler-section="11"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="12"] [data-bundler-section="12"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="13"] [data-bundler-section="13"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="14"] [data-bundler-section="14"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="15"] [data-bundler-section="15"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="16"] [data-bundler-section="16"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="17"] [data-bundler-section="17"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="18"] [data-bundler-section="18"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="19"] [data-bundler-section="19"] {'+
'display:flex;'+
'}'+
'[data-bundler-active-section="0"] [data-bundler-section-status="0"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="1"] [data-bundler-section-status="1"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="2"] [data-bundler-section-status="2"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="3"] [data-bundler-section-status="3"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="4"] [data-bundler-section-status="4"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="5"] [data-bundler-section-status="5"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="6"] [data-bundler-section-status="6"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="7"] [data-bundler-section-status="7"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="8"] [data-bundler-section-status="8"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="9"] [data-bundler-section-status="9"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="10"] [data-bundler-section-status="10"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="11"] [data-bundler-section-status="11"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="12"] [data-bundler-section-status="12"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="13"] [data-bundler-section-status="13"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="14"] [data-bundler-section-status="14"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="15"] [data-bundler-section-status="15"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="16"] [data-bundler-section-status="16"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="17"] [data-bundler-section-status="17"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="18"] [data-bundler-section-status="18"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'[data-bundler-active-section="19"] [data-bundler-section-status="19"] .bndlr-section-name-line {'+
'background: #4667A7;'+
'background: #4667A7;'+
'}'+
'.bndlr-product.bndlr-sectioned-product {'+
'padding:0px;'+
'border:none;'+
'box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.37);'+
'transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);'+
'}'+
'.bndlr-mix-and-match.bndlr-product.bndlr-sectioned-product .bndlr-product-image-url {'+
'margin-top:0;'+
'margin-bottom:auto;'+
'}'+
'.bndlr-product.bndlr-sectioned-product:hover {'+
'box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);'+
'box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.37);'+
'box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.37);'+
'}'+
'.bndlr-product.bndlr-sectioned-product .bndlr-product-image {'+
'border-bottom-right-radius: 0;'+
'border-bottom-left-radius: 0;'+
'}'+
'.bndlr-product.bndlr-sectioned-product .bndlr-select-variant {'+
'margin: 5px 5px 0px 5px !important;'+
'width: calc(100% - 10px);'+
'}'+
'.bndlr-product.bndlr-sectioned-product .bndlr-product-options-container {'+
'margin: 5px 5px 0px 5px !important;'+
'padding:0;'+
'width: calc(100% - 10px);'+
'}'+
'.bndlr-product.bndlr-sectioned-product .bndlr-product-options-container .bndlr-select-variant {'+
'margin: 5px 6px 0px 5px !important;'+
'width: calc(100% - 11px);'+
'}'+
'.bndlr-product.bndlr-sectioned-product .bndlr-product-options-container .bndlr-select-option {'+
'margin: 5px 0px 5px 5px !important;'+
'margin: 0px !important;'+
'}'+
'.bndlr-add-to-sectioned-bundle {'+
'margin: 5px 5px 0px 5px;'+
'width: calc(100% - 10px);'+
'}'+
'.bndlr-sections-container .bndlr-product.bndlr-sectioned-product {'+
'max-width:220px;'+
'background:white;'+
'background:#FFFFFF;'+
'color:rgb(40, 40, 40);'+
'border-radius: 5px;'+
'padding-bottom:5px;'+
'}'+
'.bndlr-sections-container .bndlr-product.bndlr-sectioned-product .bndlr-product-title {'+
'color:rgb(40, 40, 40) !important;'+
'word-wrap: break-word;'+
'}'+
'.bndlr-sectioned-mixnmatch .bndlr-products-container {'+
'width:100%;'+
'display:block;'+
'padding:0;'+
'margin:0;'+
'}'+
'.bndlr-sections-status-container .bndlr-bundle-checkout-warning {'+
'width:98%;'+
'text-align: center;'+
'}'+
'.bndlr-sectioned-section-status {'+
'position:relative;'+
'min-height:60px;'+
'}'+
'.bndlr-section-name-connector-line {'+
'position: absolute;'+
'left: calc(0.8em + 0px);'+
'height: calc(100% - 1.6em - 14px);'+
'background: transparent;'+
'width: 2px;'+
'top: calc(1.6em + 11px);'+
'overflow:hidden;'+
'}'+
'.bndlr-section-name-connector-line .bndlr-dashed-line {'+
'stroke: rgb(228, 228, 228);'+
'stroke: rgb(228, 228, 228);'+
'stroke-width: 3px;'+
'stroke-dasharray: 7px 2px;'+
'fill: none;'+
'animation: bndlr_dashoffset 8s linear infinite;'+
'}'+
'@keyframes bndlr_dashoffset {'+
'from {'+
'stroke-dashoffset: 43;'+
'-webkit-transform: translate3d(0, 0, 0);'+
'transform: translate3d(0, 0, 0);'+
'}'+
'to {'+
'stroke-dashoffset: 0;'+
'-webkit-transform: translate3d(0, 0, 0);'+
'transform: translate3d(0, 0, 0);'+
'}'+
'}'+
'.bndlr-sectioned-section-name:hover .bndlr-section-name-number {'+
'border-color:#4667A7;'+
'border-color:#4667A7;'+
'}'+
'.bndlr-sectioned-section-name:hover {'+
'color:#4667A7;'+
'color:#4667A7;'+
'}'+
'.bndlr-sectioned-section-name:hover .bndlr-section-name-text {'+
'color:#4667A7;'+
'color:#4667A7;'+
'text-decoration:underline;'+
'}'+
'[data-requirements-fulfilled="true"] .bndlr-section-name-connector-line .bndlr-dashed-line {'+
'stroke:#4667A7;'+
'stroke: #4667A7;'+
'}'+
'[data-requirements-fulfilled="true"] .bndlr-section-name-number {'+
'border-color: #4667A7;'+
'border-color: #4667A7;'+
'background: #4667A7;'+
'background: #4667A7;'+
'color: white;'+
'color: rgb(255, 255, 255);'+
'}'+
'.bndlr-section-name-checkmark {'+
'display:none;'+
'}'+
'.bndlr-section-name-checkmark svg {'+
'stroke:#4667A7;'+
'stroke:#4667A7;'+
'}'+
'[data-requirements-fulfilled="true"] .bndlr-section-name-checkmark {'+
'display:block;'+
'}'+
'[data-requirements-fulfilled="true"] + [data-requirements-fulfilled="false"] .bndlr-section-name-text {'+
'transform-origin:center center;'+
'animation: bndlr-tilt-n-shake-animation 0.35s 5 linear;'+
'}'+
'.bndlr-add-sectioned-bundle-to-cart:not(.bndlr-disabled) {'+
'animation: bndlr-tilt-n-shake-animation 0.35s 1 linear;'+
'}'+
'@keyframes bndlr-tilt-n-shake-animation {'+
'0% { transform: rotate(0deg); }'+
'25% { transform: rotate(5deg); }'+
'50% { transform: rotate(0eg); }'+
'75% { transform: rotate(-5deg); }'+
'100% { transform: rotate(0deg); }'+
'}'+
'@media only screen and (max-width: 768px) {'+
'.bndlr-sections-main-container {'+
'flex-direction: column-reverse;'+
'}'+
'.bndlr-sections-status-container {'+
'margin-left: 0;'+
'margin-bottom: 10px;'+
'border-radius: 0;'+
'}'+
'.bndlr-sections-main-container {'+
'padding-left:0;'+
'padding-right:0;'+
'}'+
'.bndlr-sectioned-mixnmatch .bndlr-products-container {'+
'padding-left:0;'+
'padding-right:0;'+
'}'+
'}'+
'.bndlr-product .shopify-product-reviews-badge:empty {'+
'display:none;'+
'}'+
'#bundler-target-element:empty, .bundler-target-element:empty, .bundler-volume-target-element:empty {'+
'display:block !important;'+
'}'+
'#__pf [data-pf-type="Section"] .bundler-volume-target-element {'+
'max-width:500px;'+
'}'+
'.bndlr-inner-products-container > div:first-child {'+
'display: flex;'+
'flex-wrap: wrap;'+
'justify-content: center;'+
'}'+
'.bndlr-product {'+
'display: flex;'+
'flex-direction: column;'+
'justify-content: center;'+
'}'+
'.bndlr-product-image-url {'+
'margin-top:auto;'+
'margin-bottom:auto;'+
'}'+
'_:-ms-lang(x), .bndlr-inner-products-container > div:first-child {'+
'display: block;'+
'}'+
'_:-ms-lang(x), .bndlr-product {'+
'display: inline-block;'+
'}'+
'_:-ms-lang(x), .bndlr-product-image-url {'+
'margin-top:0;'+
'margin-bottom:0;'+
'}'+
'.bndlr-product-image-url {'+
'margin-top:0;'+
'margin-bottom:auto;'+
'}'+
'.bndlr-bottom-pusher {'+
'margin-bottom:unset;'+
'}'+
'.bndlr-mnm-available-products, .bndlr-mnm-selected-products {'+
'display: flex;'+
'flex-wrap: wrap;'+
'justify-content: center;'+
'}'+
'.bndlr-product.bndlr-mix-and-match {'+
'display: flex;'+
'flex-direction: column;'+
'justify-content: center;'+
'flex: 1 1 auto;'+
'}'+
'.bndlr-mix-and-match .bndlr-product-image-url {'+
'margin-top:auto;'+
'margin-bottom:auto;'+
'}'+
'.bndlr-mix-and-match .bndlr-bottom-pusher {'+
'margin-bottom:unset;'+
'}'+
'_:-ms-lang(x), .bndlr-mnm-available-products, .bndlr-mnm-selected-products {'+
'display: block;'+
'}'+
'_:-ms-lang(x), .bndlr-product.bndlr-mix-and-match {'+
'display: inline-block;'+
'}'+
'_:-ms-lang(x), .bndlr-mix-and-match .bndlr-product-image-url {'+
'margin-top:0;'+
'margin-bottom:0;'+
'}'+
'.bndlr-mix-and-match .bndlr-product-image-url {'+
'margin-top:0;'+
'margin-bottom:auto;'+
'}'+
'.bndlr-mix-and-match .bndlr-bottom-pusher {'+
'margin-bottom:unset;'+
'}'+
'@keyframes bdnlr-bounce {'+
'0%, 10%, 27%, 40%, 50% {'+
'-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);'+
'-webkit-transform: translateZ(0);'+
'animation-timing-function: cubic-bezier(.215, .61, .355, 1);'+
'transform: translateZ(0);'+
'}'+
'20%, 21% {'+
'-webkit-animation-timing-function: cubic-bezier(.755, .05, .855, .06);'+
'-webkit-transform: translate3d(0, -20px, 0);'+
'animation-timing-function: cubic-bezier(.755, .05, .855, .06);'+
'transform: translate3d(0, -20px, 0);'+
'}'+
'35% {'+
'-webkit-animation-timing-function: cubic-bezier(.755, .05, .855, .06);'+
'-webkit-transform: translate3d(0, -10px, 0);'+
'animation-timing-function: cubic-bezier(.755, .05, .855, .06);'+
'transform: translate3d(0, -10px, 0);'+
'}'+
'45% {'+
'-webkit-transform: translate3d(0, -4px, 0);'+
'transform: translate3d(0, -4px, 0);'+
'}'+
'}'+
'.bndlr-add-to-cart, .bndlr-add-bundle-to-cart {'+
'-moz-animation: bdnlr-bounce 2s infinite;'+
'-webkit-animation: bdnlr-bounce 2s infinite;'+
'animation: bdnlr-bounce 2s infinite;'+
'-moz-transform-origin: center bottom;'+
'-webkit-transform-origin: center bottom;'+
'transform-origin: center bottom;'+
'}'+
'.bundler-target-element[data-bndlr-ccid] .bndlr-container {'+
'margin-top:10px;'+
'padding-top:10px;'+
'}'+
'.bndlr-medium .bndlr-product {'+
'max-width:190px;'+
'}'+
'.sealsubs-target-element-bundle {'+
'max-width: 710px;'+
'width:calc(100% - 10px);'+
'margin: 5px auto 0 auto;'+
'}'+
'.bndlr-mnm-add-to-cart-wrapper .sealsubs-target-element-bundle {'+
'width: 100%;'+
'}'+
'.bndlr-product .sealsubs-target-element {'+
'flex: unset;'+
'}'+
'.bundler-widgets-side-by-side, .bundler-widgets-side-by-side #bundler-target-element, .bundler-widgets-side-by-side .side-by-side-inner-element {'+
'display: flex;'+
'clear: both;'+
'max-width: 1500px;'+
'margin: 0 auto;'+
'flex-wrap:wrap;'+
'}'+
'.bundler-widgets-side-by-side .bundler-target-element {'+
'display: flex;'+
'flex: 1 1 auto;'+
'align-self: flex-end;'+
'justify-content: center;'+
'max-width:740px;'+
'min-width: 320px;'+
'}'+
'.bundler-widgets-side-by-side .bndlr-products-container {'+
'display:block;'+
'}'+
'.number_total.bundler-cart-price-info-container-inline {'+
'flex-direction:row !important;'+
'}'+
'.bndlr-product .giraffly_Quickbuy, .bndlr-sectioned-status-box-product .giraffly_Quickbuy {'+
'display:none !important;'+
'}'+
'</style>');if(nav.isShopPage()===false){$body.append('<style>'+
'.bndlr-container {'+
'margin-top:0;'+
'padding-top:0;'+
'}'+
'</style>');}
document.addEventListener('sealsubs:price_update',function(e){bndlr.processPriceUpdate(e.detail);});if(typeof window.Shopify!=='undefined'&&typeof window.Shopify.theme!=='undefined'&&typeof window.Shopify.theme.name==='string'&&(window.Shopify.theme.name==='Flow'||window.Shopify.theme.name.indexOf('Streamline')!==-1)){document.addEventListener('bundler:bundle_widget_created',function(){debounce('window-resize',function(){window.dispatchEvent(new Event('resize'));},200);});}
if(typeof window.Shopify!=='undefined'&&typeof window.Shopify.theme!=='undefined'&&typeof window.Shopify.theme.theme_store_id!=='undefined'&&window.Shopify.theme.theme_store_id===730){document.addEventListener('bundler:bundle_widget_created',function(){debounce('window-resize',function(){},200);});}
if(typeof window.Shopify!=='undefined'&&typeof window.Shopify.theme!=='undefined'&&typeof window.Shopify.theme.theme_store_id!=='undefined'&&window.Shopify.theme.theme_store_id===829){document.addEventListener('bundler:bundle_widget_created',function(){debounce('window-resize',function(){window.dispatchEvent(new Event('resize'));},200);});}
if(typeof clientSpecifics['init']!=='undefined'){clientSpecifics['init'].trigger();}
if(typeof window.OCUApi!=='undefined'){var OCUcallbackBeforeRedirect=function(){var simPromise=new Promise((resolve,reject)=>{return false;});bndlr.prepareInvoice(undefined,undefined,false);return simPromise;}
window.OCUApi.callbackBeforeRedirect=OCUcallbackBeforeRedirect;setTimeout(function(){window.OCUApi.callbackBeforeRedirect=OCUcallbackBeforeRedirect;},2000);setTimeout(function(){window.OCUApi.callbackBeforeRedirect=OCUcallbackBeforeRedirect;},5000);setTimeout(function(){window.OCUApi.callbackBeforeRedirect=OCUcallbackBeforeRedirect;},8000);}
if(typeof window.theme!=='undefined'&&typeof window.theme.goToCheckoutWithDiscount==='function'){var origGotoCheckout=window.theme.goToCheckoutWithDiscount;window.theme.goToCheckoutWithDiscount=function(){window.bndlr.getCheckoutInfo(function(data){if(typeof data.url!=='undefined'&&data.url.length>0){window.location.href=data.url;}else{origGotoCheckout();}});};}},canShowFloatingStatusBox:function(){if(typeof window.BndlrIsBundleLandingPage!=='undefined'&&window.BndlrIsBundleLandingPage===true){return true;}
return false;},canAttachMixnMatchAddToCartListeners:function(){if(typeof window.BndlrIsBundleLandingPage!=='undefined'&&window.BndlrIsBundleLandingPage===true){return true;}
return false;},convertCurrency:function(selector){if(typeof selector==='undefined'){selector='.bndlr-product .bndlr-money, .bndlr-total-price .bndlr-money';}
if(typeof DoublyGlobalCurrency!=='undefined'&&typeof DoublyGlobalCurrency.currentCurrency!=='undefined'&&typeof DoublyGlobalCurrency.convertAll!=='undefined'){try{var newCurrency=DoublyGlobalCurrency.currentCurrency;DoublyGlobalCurrency.convertAll(newCurrency,selector);}catch(e){}}else if(typeof Currency!=='undefined'&&typeof Currency.currentCurrency!=='undefined'&&typeof Currency.convertAll!=='undefined'){var oldCurrency=bndlr.getDefaultCurrency();var newCurrency=Currency.currentCurrency;if(oldCurrency!==newCurrency&&newCurrency!==''&&typeof Shopify!=='undefined'&&typeof Shopify.currency!=='undefined'&&typeof Shopify.currency.rate!=='undefined'&&Shopify.currency.rate==="1.0"){try{Currency.convertAll(oldCurrency,newCurrency,selector);}catch(e){}}}
if(typeof conversionBearAutoCurrencyConverter!=='undefined'&&typeof conversionBearAutoCurrencyConverter.convertPricesOnPage==='function'){conversionBearAutoCurrencyConverter.convertPricesOnPage();}
if(typeof BOLDCURRENCY!=='undefined'&&typeof BOLDCURRENCY.converter!=='undefined'&&typeof BOLDCURRENCY.converter.refresh!=='undefined'){BOLDCURRENCY.converter.refresh();}
if(typeof window.baCurr!=='undefined'&&typeof window.baCurr.refreshConversion==='function'){try{window.baCurr.refreshConversion();}catch(e){console.log(e);}}
if(typeof window.store!=='undefined'&&typeof window.store.update!=='undefined'&&typeof window.GemCurrency!=='undefined'&&typeof window.GemCurrency.currentCurrency!=='undefined'){try{window.store.update('dataCurrency',window.GemCurrency.currentCurrency);}catch(e){console.log(e);}}},canUseCheckout:function(){return bndlr.useBundlerCheckout&&bndlr.externalAppPreventCheckout.canCheckout();},preparingCheckout:false,prepareInvoice:function(fallbackToCheckout,callback,triggerNormalCheckout){if(typeof clientSpecifics['on_prepare_invoice']!=='undefined'){clientSpecifics['on_prepare_invoice'].trigger(fallbackToCheckout,callback,triggerNormalCheckout);}else{bndlr._prepareInvoice(fallbackToCheckout,callback,triggerNormalCheckout);}},_prepareInvoice:function(fallbackToCheckout,callback,triggerNormalCheckout){if(bndlr.preparingCheckout!==false){var lastStartedAt=bndlr.preparingCheckout;if(Date.now()<(lastStartedAt+1500)){return true;}}
bndlr.preparingCheckout=Date.now();if(typeof fallbackToCheckout==='undefined'){fallbackToCheckout=true;}
if(typeof triggerNormalCheckout==='undefined'){triggerNormalCheckout=true;}
var canPrepareInvoice=true;if(typeof clientSpecifics['before_prepare_invoice']!=='undefined'){canPrepareInvoice=clientSpecifics['before_prepare_invoice'].canPrepareInvoice();}
if(canPrepareInvoice===false){return;}
cart.get('default',false).done(function(cartData){var cartNoteSelector='#CartSpecialInstructions, .cart-note__input, #note, [name="cart[note]"], [name="note"]';if($(cartNoteSelector).first().length>0&&$(cartNoteSelector).first().val().length>0){cartData.note=$(cartNoteSelector).first().val();}
try{if(nav.isCartPage()&&$('.bundler-target-element').length===0){var cartItemKeyRegex=/\d+:[a-z0-9]+/;$('[name="updates[]"]').each(function(key,el){if($(el).is(':visible')){var quantityWasFixed=false;var id=$(el).attr('id');if(typeof id!=='string'){id=$(el).attr('data-id');}
if(typeof id==='string'){var match=id.match(cartItemKeyRegex);if(match!==null&&typeof match[0]==='string'){var itemKey=match[0];var itemQuantity=$(el).val()*1;if(itemQuantity>0){for(var j=0;j<cartData.items.length;j++){if(cartData.items[j].key===itemKey&&cartData.items[j].quantity!=itemQuantity){cartData.items[j].quantity=itemQuantity;cartData.items[j].line_price=itemQuantity*cartData.items[j].price;cartData.items[j].original_line_price=itemQuantity*cartData.items[j].original_price;cartData.items[j].final_line_price=itemQuantity*cartData.items[j].final_price;}}
quantityWasFixed=true;}}}
if(quantityWasFixed===false){var index=$(el).attr('data-index');if(typeof index==='string'){var index=index*1;if(index>0){var itemQuantity=$(el).val()*1;if(itemQuantity>0){for(var j=0;j<cartData.items.length;j++){if((j+1)===index&&cartData.items[j].quantity!=itemQuantity){cartData.items[j].quantity=itemQuantity;cartData.items[j].line_price=itemQuantity*cartData.items[j].price;cartData.items[j].original_line_price=itemQuantity*cartData.items[j].original_price;cartData.items[j].final_line_price=itemQuantity*cartData.items[j].final_price;}}
quantityWasFixed=true;}}}}}});}}catch(e){console.error(e);bndlr.preparingCheckout=false;}
try{var cartSelector='form[action="/cart"][method="post"], form.cart[method="post"], #cart form, form[action^="/cart?"][method="post"]';if($(cartSelector).length>0){var url=$(cartSelector).attr('action');var urlParams=url.match(/(?:cart\?)(.*)/);if(urlParams!==null&&typeof urlParams[1]!=='undefined'&&urlParams[1].length>0){var additionalParams=nav.getQueryParams(urlParams[1]);bndlr.setCheckoutParams(additionalParams);}
$(cartSelector).find('input[name^="attributes["], select[name^="attributes["], textarea[name^="attributes["]').each(function(ix,el){if(typeof cartData.attributes==='undefined'){cartData.attributes={}}
var key=$(el).attr('name').replace('attributes[','').replace(']','');var value=$(el).val();var $el=$(el);var addAttribute=true;if($el.attr('type')==='checkbox'){if($el.is(':checked')===false){addAttribute=false;}}
if(addAttribute&&((value!==''&&value!==null)||typeof cartData.attributes[key]=='undefined')){cartData.attributes[key]=value;}});}}catch(e){bundlerConsole.log(e);bndlr.preparingCheckout=false;}
var withExtraInfo=false;if(typeof window.discountOnCartProApp!=='undefined'&&typeof window.discountOnCartProApp.applyCode==='function'){withExtraInfo=true;}
var process=function(){bndlr.getInvoice(cartData,withExtraInfo).done(function(data){if(typeof callback==='function'){callback();}else{bndlr.useInvoice(data,triggerNormalCheckout);}
bndlr.preparingCheckout=false;}).fail(function(f){if(fallbackToCheckout===true){window.location.href=bndlr.addCheckoutParams('/checkout');}else{$('.bndlr-add-to-cart').removeClass('bndlr-loading');}
bndlr.preparingCheckout=false;});};var processWasSet=false;if(processWasSet===false){process();}});},getCartData:function(successCallback){cart.get('default',false).done(function(cartData){var cartNoteSelector='#CartSpecialInstructions, .cart-note__input, #note, [name="cart[note]"], [name="note"]';if($(cartNoteSelector).first().length>0&&$(cartNoteSelector).first().val().length>0){cartData.note=$(cartNoteSelector).first().val();}
try{if(nav.isCartPage()&&$('.bundler-target-element').length===0){var cartItemKeyRegex=/\d+:[a-z0-9]+/;$('[name="updates[]"]').each(function(key,el){var id=$(el).attr('id');if(typeof id==='string'){var match=id.match(cartItemKeyRegex);if(match!==null&&typeof match[0]==='string'){var itemKey=match[0];var itemQuantity=$(el).val()*1;if(itemQuantity>0){for(var j=0;j<cartData.items.length;j++){if(cartData.items[j].key===itemKey&&cartData.items[j].quantity!=itemQuantity){cartData.items[j].quantity=itemQuantity;cartData.items[j].line_price=itemQuantity*cartData.items[j].price;cartData.items[j].original_line_price=itemQuantity*cartData.items[j].original_price;cartData.items[j].final_line_price=itemQuantity*cartData.items[j].final_price;}}}}}});}}catch(e){console.error(e);}
try{var cartSelector='form[action="/cart"][method="post"], form.cart[method="post"], #cart form';if($(cartSelector).length>0){var url=$(cartSelector).attr('action');var urlParams=url.match(/(?:cart\?)(.*)/);if(urlParams!==null&&typeof urlParams[1]!=='undefined'&&urlParams[1].length>0){var additionalParams=nav.getQueryParams(urlParams[1]);bndlr.setCheckoutParams(additionalParams);}
$(cartSelector).find('input[name^="attributes["], select[name^="attributes["], textarea[name^="attributes["]').each(function(ix,el){if(typeof cartData.attributes==='undefined'){cartData.attributes={}}
var key=$(el).attr('name').replace('attributes[','').replace(']','');var value=$(el).val();var $el=$(el);var addAttribute=true;if($el.attr('type')==='checkbox'){if($el.is(':checked')===false){addAttribute=false;}}
if(addAttribute&&((value!==''&&value!==null)||typeof cartData.attributes[key]=='undefined')){cartData.attributes[key]=value;}});}}catch(e){bundlerConsole.log(e);}
if(typeof successCallback==='function'){successCallback(cartData);}});},gettingCheckoutInfo:false,getCheckoutInfo:function(callback){if(bndlr.gettingCheckoutInfo!==false){var lastStartedAt=bndlr.gettingCheckoutInfo;if(Date.now()<(lastStartedAt+1500)){return true;}}
bndlr.gettingCheckoutInfo=Date.now();bndlr.getCartData(function(cartData){if(cartData.items.length>0){bndlr.getInvoice(cartData,true,'getCheckoutInfo').done(function(data){if(typeof callback==='function'){data.can_apply_discount=false;if(typeof data.url!=='undefined'&&data.url!=='/checkout'){data.can_apply_discount=true;}
callback(data);}
bndlr.gettingCheckoutInfo=false;if(typeof data.code==='string'){try{bndlr.setCookie('discount_code',data.code,0);}catch(e){console.log(e);}}}).fail(function(f){if(typeof callback==='function'){callback({can_apply_discount:false});}
bndlr.gettingCheckoutInfo=false;});}else{callback({can_apply_discount:false});}});},getInvoice:function(cartData,withExtraInfo,source){if(typeof withExtraInfo==='undefined'){withExtraInfo=false;}
if(typeof source==='undefined'){source='';}
var additionalGetParams='';if(source!==''){additionalGetParams='&from='+source;}
var exchangeRate=1;if(typeof window.Shopify!=='undefined'&&typeof window.Shopify.currency!=='undefined'&&typeof window.Shopify.currency.rate!=='undefined'){exchangeRate=window.Shopify.currency.rate;}
var country='';if(typeof window.Shopify!=='undefined'&&typeof window.Shopify.country==='string'){country=window.Shopify.country;}
return $.ajax({url:nav.getInvoiceEndpoint(withExtraInfo,additionalGetParams),type:'POST',data:{cart:cartData,er:exchangeRate,country:country},dataType:'json',timeout:15000});},clearDiscounts:function(callback){$.ajax({url:nav.getRootUrl()+'discount/CLEAR',type:'GET',success:function(data,textStatus,jqXHR){callback();},error:function(jqXHR,textStatus,errorThrown){callback();}});},cartContainsDiscountCode:function(positiveCallback,negativeCallback){try{cart.get('default',true).done(function(cartData){var containsDiscountCode=false;if(typeof cartData.items!=='undefined'&&cartData.items.length>0){for(var l=0;l<cartData.items.length;l++){if(typeof cartData.items[l].line_level_discount_allocations!=='undefined'&&cartData.items[l].line_level_discount_allocations.length>0){containsDiscountCode=true;}}}
if(containsDiscountCode===true){positiveCallback();}else{negativeCallback();}});}catch(e){console.log(e);negativeCallback();}},useInvoice:function(invoice,triggerNormalCheckout){if(typeof triggerNormalCheckout==='undefined'){triggerNormalCheckout=true;}
var checkoutWasHandled=false;if(typeof window.discountOnCartProApp!=='undefined'&&typeof window.discountOnCartProApp.applyCode==='function'){if(typeof invoice.code==='string'){try{window.discountOnCartProApp.applyCode(invoice.code);checkoutWasHandled=true;var self=this;document.body.addEventListener('docapp-discount-applied',function(){setTimeout(function(){window.location.href=self.addCheckoutParams('/checkout');},1000);});setTimeout(function(){window.location.href=self.addCheckoutParams('/checkout');},6000);}catch(e){}}}
if(checkoutWasHandled!==true){if(typeof invoice.url!=='undefined'){if(invoice.url==='/checkout'){if(triggerNormalCheckout){$(document).trigger('bundler_trigger_normal_checkout');}else{window.location.href=this.addCheckoutParams('/checkout');}}else{var excludedCheckoutKeys=[];if(invoice.url.indexOf('discount=')!==-1){excludedCheckoutKeys.push('discount');invoice.url=(nav.getRootUrl(true)+invoice.url).replace('//checkout','/checkout');}
try{if(typeof invoice.code==='string'){try{bndlr.setCookie('discount_code',invoice.code,0);}catch(e){console.log(e);}}}catch(e){}
invoice.url=this.addCheckoutParams(invoice.url,excludedCheckoutKeys);BndlrAnalytics.track('initiateCheckout');if((typeof invoice.status_code!=='undefined'&&invoice.status_code==202)||(typeof invoice.code==='string'&&invoice.code.length>0)){console.log('invoice isnt yet ready');var timeout=1000;setTimeout(function(){window.location=invoice.url;},timeout);}else{window.location=invoice.url;}}}else{window.location.href=this.addCheckoutParams('/checkout');}}},showBundleOnElementWithHandle:function($el){var productHandle=$el.attr('data-product-handle');if(productHandle!==false){var self=this;cart.getProductData(nav.getRootUrl(),productHandle).done(function(productData){productData=self.remapProductData(productData);var bundle=self.findBundle(productData.id,productData.variants);var uniqueKey=utils.getRandomString();$el.attr('data-b-key',uniqueKey);var keySelector='[data-b-key="'+uniqueKey+'"]';$el.attr('data-bundle',bundle.id);$el.html('<div class="bndlr-bundle-loading"></div>');if(bundles!==false){self.getProducts(bundle,function(){self.displayBundle(bundle,keySelector);});}});}},canShowBundlesAutomatically:function(){var canShowWidgets=true;return canShowWidgets;},getCustomerTags:function(){return customer.getCustomerTags();},canShowBundle:function(bundle){if(typeof bundle.limit_for_customer_tags==='undefined'||bundle.limit_for_customer_tags.length===0){return true;}
var customerTags=bndlr.getCustomerTags();if(customerTags!==null&&customerTags.length>0){for(var g=0;g<customerTags.length;g++){for(var h=0;h<bundle.limit_for_customer_tags.length;h++){if(customerTags[g].trim()===bundle.limit_for_customer_tags[h].trim()){return true;}}}
return false;}else{if(typeof bundle.tags_additional_options==='string'&&bundle.tags_additional_options==='or_without_tags'){return true;}}
return false;},isInShowBundle:false,resetIsInShowBundle:function(){bndlr.isInShowBundle=false;},showBundle:function(removePreviousBundles){if(typeof window.completelyDisableBundlerApp!=='undefined'&&window.completelyDisableBundlerApp===true){console.log('Bundler is disabled via completelyDisableBundlerApp variable.');return true;}
if(this.isInShowBundle===true){console.log('already showing bundle');return true;}
this.isInShowBundle=true;var bundleFound=false;$('.bundler-target-element[data-bndlr-ccid]').each(function(index,el){$el=$(el);if($el.find('.bndlr-container').length===0&&$el.find('.bundler-volume-target-element').length===0){var code=$el.attr('data-bndlr-ccid');if(typeof code!=='undefined'&&code.length>0){var bndleId=utils.deCompress(code);var bndle=bndlr.getBundleById(bndleId);if(bndle!==false&&typeof bndle.minimum_requirements==='string'){if(bndle.minimum_requirements!=='volume_discounts'){$el.attr('data-bundle',bndleId);$el.html('<div class="bndlr-bundle-loading"></div>');}else{$el.attr('class','bndlr-volume-discount-ccid');}}}}});if($('#bundler-target-element[data-bundle], .bundler-target-element[data-bundle]').length>0){var bundlesList=[];$('#bundler-target-element[data-bundle], .bundler-target-element[data-bundle]').each(function(index,el){$el=$(el);if($el.find('.bndlr-container').length===0){$el.addClass('bundler-target-element');var uniqueKey=$el.attr('data-bndlr-k');if(typeof uniqueKey!=='string'){uniqueKey=utils.getRandomString();$el.attr('data-bndlr-k',uniqueKey);$el.attr('id','_bndl_key_'+uniqueKey);}
var keySelector='#_bndl_key_'+uniqueKey;bundlesList.push({id:$el.attr('data-bundle'),keySelector:keySelector});}});var bundleDataList=[];for(var i=0;i<bundlesList.length;i++){if(bundlesList[i].id.length){bundleDataList[i]={bundle:this.getBundleById(bundlesList[i].id),keySelector:bundlesList[i].keySelector};if(bundleDataList[i].bundle!==false){bundleFound=true;}
if(bundleDataList[i].bundle!==false){if(bndlr.canShowBundle(bundleDataList[i].bundle)===true){var self=this;var bundle=bundleDataList[i].bundle;self.getProducts(bundle,(function(){var bundleTmp=bundle;var keySelectorTmp=bundleDataList[i].keySelector;return function(products){self.setObserver(bundleTmp,keySelectorTmp);self.isInShowBundle=false;}})());}else{document.querySelector(bundleDataList[i].keySelector).innerHTML='';}}}}}
if(this.canShowBundlesAutomatically()===false){this.isInShowBundle=false;return true;}
if(bundleFound===false){var productHandle=nav.getProductHandle();if(productHandle!==false&&((typeof removePreviousBundles!=='undefined'&&removePreviousBundles)||$('.bndlr-automatic').length<=0)){var self=this;cart.getProductData(nav.getRootUrl(true),productHandle).done(function(productData){productData=self.remapProductData(productData);var bundle=self.findBundle(productData.id,productData.variants);if(bundle!==false){if(typeof removePreviousBundles!=='undefined'&&removePreviousBundles){$('.bundler-target-element').remove();}
var uniqueKey=utils.getRandomString();var keySelector='#_bndl_key_'+uniqueKey;self.loopThroughSelectors(function($element,htmlSelector){if($element.length===1&&$element.closest('#judgeme_product_reviews').length===0){var dataBundleAttr=$element.attr('data-bundle');if(typeof dataBundleAttr==='undefined'||dataBundleAttr===false){if(typeof self.productHtmlSelectorsActions[htmlSelector]!=='undefined'){var positioningFunction=self.productHtmlSelectorsActions[htmlSelector];$element[positioningFunction]('<div id="_bndl_key_'+uniqueKey+'" class="bundler-target-element bndlr-automatic" data-bundle="'+bundle.id+'" data-bndlr-k="'+uniqueKey+'"></div>');}else{$element.append('<div id="_bndl_key_'+uniqueKey+'" class="bundler-target-element bndlr-automatic" data-bundle="'+bundle.id+'" data-bndlr-k="'+uniqueKey+'"></div>');}
return false;}}});self.getProducts(bundle,function(){self.setObserver(bundle,keySelector);self.isInShowBundle=false;});}else{this.isInShowBundle=false;}});}else{this.isInShowBundle=false;}}else{this.isInShowBundle=false;}
var self=this;setTimeout(function(){self.isInShowBundle=false;},3000);},loopThroughSelectors:function(callback){for(var i=0;i<this.productHtmlSelectors.length;i++){var htmlSelector=this.productHtmlSelectors[i];if(htmlSelector==='.bundler-target-only-visible-element'){var $element=$(htmlSelector).filter(':visible');}else{var $element=$(htmlSelector);}
if(callback($element,htmlSelector)===false){break;}}},isVariantStockAvailable:function(variant){if(variant.inventory_quantity<=0&&variant.inventory_policy==='deny'){return false;}
return true;},priceOrZero:function(price){if(typeof price==='undefined'||price===''||price===null){return 0;}
return this.getPrice(price);},remapProductData:function(productData,variantId){if(typeof productData.product!=='undefined'&&typeof productData.id==='undefined'){var source=productData.product;var product={id:source.id,title:source.title,handle:source.handle,variants:[],images:[],featured_image:source.images[0].src};var variants=[];for(var z=0;z<source.variants.length;z++){var variant={id:source.variants[z].id,public_title:source.variants[z].public_title,name:source.variants[z].name,title:source.variants[z].title,price:this.getPrice(source.variants[z].price),compare_at_price:this.priceOrZero(source.variants[z].compare_at_price),featured_image:{src:this.getVariantsFeaturedImage(source,source.variants[z])},available:this.isVariantStockAvailable(source.variants[z])};variants.push(variant);}
product.variants=variants;var images=[];for(var z=0;z<source.images.length;z++){images.push(source.images[z].src);}
product.images=images;productData=product;}
if(typeof variantId!=='undefined'&&variantId!==null){var variants=[];for(z=0;z<productData.variants.length;z++){if(productData.variants[z].id==variantId){variants.push(productData.variants[z]);productData.id=productData.variants[z].id;var variantTitle=this.getVariantTitle(productData.variants[z]);if(productData.title!==variantTitle){productData.title=productData.title+' - '+this.getVariantTitle(productData.variants[z]);}else{productData.title=productData.title;}
break;}}
if(variants.length===0){console.warn('Could not get variant '+variantId+' data for product '+productData.title+'!');productData.id=variantId;}
productData.variants=variants;}
if(typeof productData.variants!=='undefined'){for(z=0;z<productData.variants.length;z++){if(typeof productData.variants[z].name==='undefined'&&productData.title!=='undefined'){var variantTitle=this.getVariantTitle(productData.variants[z]);if(productData.title!==variantTitle){productData.variants[z].name=productData.title+' - '+variantTitle;}else{productData.variants[z].name=productData.title;}}
if(typeof productData.variants[z].options==='undefined'){productData.variants[z].options=[];if(typeof productData.variants[z].option1!=='undefined'){productData.variants[z].options.push(productData.variants[z].option1);}
if(typeof productData.variants[z].option2!=='undefined'){productData.variants[z].options.push(productData.variants[z].option2);}
if(typeof productData.variants[z].option3!=='undefined'){productData.variants[z].options.push(productData.variants[z].option3);}}}}
productData.product_id=productData.id;return productData;},getVariantTitle:function(variant){var name=variant.public_title;if(typeof name=='undefined'||name===null){name=variant.name;}
if(typeof name=='undefined'||name===null){name=variant.title;}
return name;},findBundle:function(productId,variants,volumeDiscountType){if(typeof volumeDiscountType==='undefined'){volumeDiscountType=false;}
var currentPriority=0;var foundPreferredVariantBundle=null;var foundNonPreferredVariantBundle=null;var bndls=bundles;if(typeof clientSpecifics['before_find_bundle_reorder']!=='undefined'){bndls=clientSpecifics['before_find_bundle_reorder'].reorder(bndls);}
for(var i=0;i<bndls.length;i++){if(bndls[i].show_bundle!=='true'){continue;}
if(volumeDiscountType===true&&bndls[i].minimum_requirements!=='volume_discounts'){continue;}
if(volumeDiscountType===false&&bndls[i].minimum_requirements==='volume_discounts'){continue;}
if(bndlr.canShowBundle(bndls[i])!==true){continue;}
if(bndls[i].priority!==currentPriority){if(foundPreferredVariantBundle!==null){return foundPreferredVariantBundle;}
if(foundNonPreferredVariantBundle!==null&&volumeDiscountType!==true){return foundNonPreferredVariantBundle;}}
if(volumeDiscountType===true&&bndls[i].minimum_requirements==='volume_discounts'&&bndls[i].product_target_type==='all_products'){return bndls[i];}
currentPriority=bndls[i].priority;if(this.isVariantBundle(bndls[i])===false&&volumeDiscountType===false){if(typeof bndls[i].products[productId]!=='undefined'){return bndls[i];}
if(typeof bndls[i].required_products[productId]!=='undefined'){return bndls[i];}
if(bndls[i].minimum_requirements==='sectioned_n_products'){var sections=bndls[i].sections;for(var k in sections){if(sections.hasOwnProperty(k)){if(typeof sections[k].products[productId]!=='undefined'){return bndls[i];}}}}}else{var preferredVariant=nav.getVariantId();if(preferredVariant===''){var selectedVariant=$('select.product-single__variants[name="id"] option:selected');if(selectedVariant.length){preferredVariant=selectedVariant.val();}}
if(preferredVariant===''){var selectedVariant=$('form[action*="/cart/add"] input[name="id"]');if(selectedVariant.length===1){preferredVariant=selectedVariant.val();}}
if(preferredVariant===''){var selectedVariant=$('form[action*="/cart/add"][data-type="add-to-cart-form"] input[name="id"]');if(selectedVariant.length===1){preferredVariant=selectedVariant.val();}}
if(preferredVariant===''){var selectedVariant=$('#product form[action*="/cart/add"] [name="id"]');if(selectedVariant.length===1){preferredVariant=selectedVariant.val();}}
if(preferredVariant===''){var selectedVariant=$('.product__info-wrapper product-form form[action*="/cart/add"] [name="id"]');if(selectedVariant.length===1){preferredVariant=selectedVariant.val();}}
if(preferredVariant!==''){for(var pid in bndls[i].products){if(bndls[i].products.hasOwnProperty(pid)){var bundleVariants=bndls[i].products[pid].variants;if(typeof bundleVariants[preferredVariant]!=='undefined'){foundPreferredVariantBundle=bndls[i];}}}
if(foundPreferredVariantBundle===null){for(var pid in bndls[i].required_products){if(bndls[i].required_products.hasOwnProperty(pid)){var bundleVariants=bndls[i].required_products[pid].variants;if(typeof bundleVariants[preferredVariant]!=='undefined'){foundPreferredVariantBundle=bndls[i];}}}}}
for(var pid in bndls[i].products){if(bndls[i].products.hasOwnProperty(pid)){var bundleVariants=bndls[i].products[pid].variants;for(var x=0;x<variants.length;x++){var variantId=variants[x].id;if(typeof bundleVariants[variantId]!=='undefined'){foundNonPreferredVariantBundle=bndls[i];}}}}
if(foundNonPreferredVariantBundle===null){for(var pid in bndls[i].required_products){if(bndls[i].required_products.hasOwnProperty(pid)){var bundleVariants=bndls[i].required_products[pid].variants;for(var x=0;x<variants.length;x++){var variantId=variants[x].id;if(typeof bundleVariants[variantId]!=='undefined'){foundNonPreferredVariantBundle=bndls[i];}}}}}}}
if(foundPreferredVariantBundle!==null){return foundPreferredVariantBundle;}
if(foundNonPreferredVariantBundle!==null){return foundNonPreferredVariantBundle;}
if(volumeDiscountType){if(typeof bndls[i]!=='undefined'&&typeof bndls[i].products[productId]!=='undefined'){return bndls[i];}
if(typeof bndls[i]!=='undefined'&&typeof bndls[i].required_products[productId]!=='undefined'){return bndls[i];}}
return false;},isVariantBundle:function(bundle){if(typeof bundle.product_level!=='undefined'&&bundle.product_level=='variant'){return true;}
return false;},getBundleById:function(bundleId){for(var i=0;i<bundles.length;i++){if(typeof bundles[i].id!=='undefined'&&bundles[i].id==bundleId){return bundles[i];}}
return false;},processBundlesWithRetrievedProducts:function(){for(var bundleId in ProductRetrievalRequests){if(ProductRetrievalRequests.hasOwnProperty(bundleId)){var allBundleProductsWereRetrieved=true;for(var handle in ProductRetrievalRequests[bundleId].products){if(ProductRetrievalRequests[bundleId].products.hasOwnProperty(handle)){if(ProductRetrievalRequests[bundleId].products[handle]!=='retrieved'){allBundleProductsWereRetrieved=false;}}}
if(allBundleProductsWereRetrieved){Tools.Products.setLibraries(Library,bundleId);for(var i=0;i<ProductRetrievalRequests[bundleId].callback.length;i++){setTimeout(ProductRetrievalRequests[bundleId].callback[i],1);}
delete ProductRetrievalRequests[bundleId];}}}},handleProductRetrievalError:function(handle){for(var bundleId in ProductRetrievalRequests){if(ProductRetrievalRequests.hasOwnProperty(bundleId)){if(typeof ProductRetrievalRequests[bundleId].products[handle]!=='undefined'){if(typeof ProductRetrievalStatus[handle].error!=='undefined'){errorHandler.displayError(ProductRetrievalStatus[handle].error,bundleId);}}}}},removeProductFromRetrievalRequests:function(handle){for(var bundleId in ProductRetrievalRequests){if(ProductRetrievalRequests.hasOwnProperty(bundleId)){if(typeof ProductRetrievalRequests[bundleId].products[handle]!=='undefined'){delete ProductRetrievalRequests[bundleId].products[handle];}}}},markProductAsRetrieved:function(productData,forHandle){if(typeof productData.product!=='undefined'&&typeof productData.id==='undefined'){productData=productData.product;}
if(typeof forHandle!=='undefined'){var handle=forHandle;}else{var handle=productData.handle;}
if(typeof handle!=='undefined'&&handle!==''&&typeof ProductRetrievalStatus[handle]!=='undefined'){ProductRetrievalStatus[handle].retrieved=true;ProductRetrievalStatus[handle].product_id=productData.id;ProductRetrievalStatus[handle].data=productData}},setProductLibrariesForBundlesInQueue:function(forHandle){var handle=forHandle;if(typeof ProductRetrievalStatus[handle]!=='undefined'&&ProductRetrievalStatus[handle].retrieved===true){var productData=ProductRetrievalStatus[handle].data;for(var bundleId in ProductRetrievalRequests){if(ProductRetrievalRequests.hasOwnProperty(bundleId)){if(typeof ProductRetrievalRequests[bundleId].products[handle]!=='undefined'&&ProductRetrievalRequests[bundleId].products[handle]!='retrieved'){for(var key in ProductRetrievalRequests[bundleId].bundle.products){if(ProductRetrievalRequests[bundleId].bundle.products.hasOwnProperty(key)){var bndlrProduct=ProductRetrievalRequests[bundleId].bundle.products[key];if(bndlrProduct.handle===handle){if(Library.Products.isEmpty(bndlrProduct.id)){if(ProductRetrievalRequests[bundleId].bundle.product_level=='variant'){var remappedData=bndlr.remapProductData(JSON.parse(JSON.stringify(productData)),bndlrProduct.id);}else{var remappedData=bndlr.remapProductData(JSON.parse(JSON.stringify(productData)));}
Library.Products.set(bndlrProduct.id,remappedData);}}}}
if(ProductRetrievalRequests[bundleId].bundle.minimum_requirements==='specific_products'){for(var key in ProductRetrievalRequests[bundleId].bundle.required_products){if(ProductRetrievalRequests[bundleId].bundle.required_products.hasOwnProperty(key)){var bndlrProduct=ProductRetrievalRequests[bundleId].bundle.required_products[key];if(bndlrProduct.handle===handle){if(Library.Products.isEmpty(bndlrProduct.id)){if(ProductRetrievalRequests[bundleId].bundle.product_level=='variant'){var remappedData=bndlr.remapProductData(JSON.parse(JSON.stringify(productData)),bndlrProduct.id);}else{var remappedData=bndlr.remapProductData(JSON.parse(JSON.stringify(productData)));}
Library.Products.set(bndlrProduct.id,remappedData);}}}}}
if(ProductRetrievalRequests[bundleId].bundle.minimum_requirements==='sectioned_n_products'){for(var i=0;i<ProductRetrievalRequests[bundleId].bundle.sections.length;i++){var section=ProductRetrievalRequests[bundleId].bundle.sections[i];for(var key in section.products){if(section.products.hasOwnProperty(key)){var bndlrProduct=section.products[key];if(bndlrProduct.handle===handle){if(Library.Products.isEmpty(bndlrProduct.id)){var remappedData=bndlr.remapProductData(JSON.parse(JSON.stringify(productData)));Library.Products.set(bndlrProduct.id,remappedData);}}}}}}
ProductRetrievalRequests[bundleId].products[handle]='retrieved';}}}}},setVariantProductData:function(productData){if(typeof productData.variants!=='undefined'){for(var i=0;i<productData.variants.length;i++){var variantProductData=bndlr.remapProductData(JSON.parse(JSON.stringify(productData)),productData.variants[i].id);Library.Products.set(variantProductData.id,variantProductData);}}},getProducts:function(bundle,callback){var needsAllProducts=true;var products={};var totalProducts=0;var processedProducts=0;var strippedProducts=JSON.parse(JSON.stringify(bundle.products));Library.DiscountedProducts.set(bundle.id,bundle.products);if(bundle.minimum_requirements==='specific_products'){Library.RequiredProducts.set(bundle.id,bundle.required_products);var requiredProducts=JSON.parse(JSON.stringify(bundle.required_products));Object.keys(requiredProducts).forEach(function(key){strippedProducts[key]=requiredProducts[key];});}
if(bundle.minimum_requirements==='sectioned_n_products'){var sectionedProducts={};var sections=[];for(var sectionId=0;sectionId<bundle.sections.length;sectionId++){sections.push(JSON.parse(JSON.stringify(bundle.sections[sectionId].products)));for(var k in bundle.sections[sectionId].products){if(bundle.sections[sectionId].products.hasOwnProperty(k)){if(typeof sectionedProducts[k]==='undefined'){sectionedProducts[k]=bundle.sections[sectionId].products[k];}}}}
Library.SectionedBundlesProducts.set(bundle.id,sections);Object.keys(sectionedProducts).forEach(function(key){strippedProducts[key]=sectionedProducts[key];});}
if(bundle.minimum_requirements==='sectioned_n_products'||bundle.minimum_requirements==='n_products'){needsAllProducts=false;}
if(typeof ProductRetrievalRequests[bundle.id]==='undefined'){ProductRetrievalRequests[bundle.id]={products:{},callback:[callback],bundle:bundle};}else{ProductRetrievalRequests[bundle.id].callback.push(callback);}
for(var productId in strippedProducts){if(strippedProducts.hasOwnProperty(productId)){var handle=strippedProducts[productId].handle;if(typeof ProductRetrievalRequests[bundle.id].products[handle]==='undefined'){var pid=strippedProducts[productId].id;if(typeof strippedProducts[productId].pid!=='undefined'){pid=strippedProducts[productId].pid;}
ProductRetrievalRequests[bundle.id].products[handle]={retrieving:true,id:strippedProducts[productId].id,pid:pid}}}}
for(var bundleId in ProductRetrievalRequests){if(ProductRetrievalRequests.hasOwnProperty(bundleId)){for(var productHandle in ProductRetrievalRequests[bundleId].products){if(typeof ProductRetrievalStatus[productHandle]==='undefined'){ProductRetrievalStatus[productHandle]={retrieved:false};var productId=ProductRetrievalRequests[bundleId].products[productHandle].pid;cart.getProductData(nav.getRootUrl(true),productHandle+'').done((function(){return function(productData){bndlr.markProductAsRetrieved(productData);bndlr.setProductLibrariesForBundlesInQueue(productData.handle);bndlr.processBundlesWithRetrievedProducts();}})()).fail((function(){var handle=productHandle;var pid=productId;return function(jqXHR){if(jqXHR.status==404){cart.getProductDataJSON(nav.getRootUrl(true),handle).done(function(productData){if(typeof productData.product!=='undefined'){bndlr.markProductAsRetrieved(productData,handle);bndlr.setProductLibrariesForBundlesInQueue(handle);bndlr.processBundlesWithRetrievedProducts();}else{var errorMessage='Bundler: Can\'t get product data: '+nav.getRootUrl(true)+'products/'+handle+'.<br />To show the bundle widget, just make sure that the product is active in your online shop.';if(needsAllProducts){ProductRetrievalStatus[handle]['error']=errorMessage;bndlr.handleProductRetrievalError(handle);}else{bndlr.removeProductFromRetrievalRequests(handle);bndlr.processBundlesWithRetrievedProducts();}}}).fail((function(){var pd=pid;return function(jqXHR){cart.getProductDataViaProxy(nav.getRootUrl(true),pd,handle,function(){var errorMessage='Bundler: Can\'t get product data: '+nav.getRootUrl(true)+'products/'+handle+'.<br />To show the bundle widget, just make sure that the product is active in your online shop.';if(needsAllProducts){ProductRetrievalStatus[handle]['error']=errorMessage;bndlr.handleProductRetrievalError(handle);}else{bndlr.removeProductFromRetrievalRequests(handle);bndlr.processBundlesWithRetrievedProducts();}}).done(function(productData){bndlr.markProductAsRetrieved(productData);bndlr.setProductLibrariesForBundlesInQueue(productData.handle);bndlr.processBundlesWithRetrievedProducts();}).fail(function(){var errorMessage='Bundler: Can\'t get product data: '+nav.getRootUrl(true)+'products/'+handle+'.<br />To show the bundle widget, just make sure that the product is active in your online shop.';if(needsAllProducts){ProductRetrievalStatus[handle]['error']=errorMessage;bndlr.handleProductRetrievalError(handle);}else{bndlr.removeProductFromRetrievalRequests(handle);bndlr.processBundlesWithRetrievedProducts();}});}})());}}})());}else if(ProductRetrievalStatus[productHandle].retrieved===true){bndlr.setProductLibrariesForBundlesInQueue(productHandle);bndlr.processBundlesWithRetrievedProducts();}else if(ProductRetrievalStatus[productHandle].retrieved===false){}}}}},productHtmlSelectors:['#bundler-target-element','.bundler-target-element','.bundler-target-only-visible-element','div.product-template[itemtype="http://schema.org/Product"] .product__content.page-width','#ProductSection-product-template .product.grid','.layout-content-wrapper .product-detail-form','#ProductSection-product-template section[itemtype="http://schema.org/Product"]','single-product.product-page-main','#__pf [data-pf-type="Layout"] [data-pf-type="Column"] [data-pf-type="ProductBox"]:visible','#__pf [data-pf-type="Layout"] [data-pf-type="Column"] [data-checkout="checkout"]:visible','#MainContent #shopify-section-product-template #ProductSection-product-template,product-template__container.page-width','#ProductSection-product-template .product-single.grid','#ProductSection-product-template','.product-main .box_product_page .product-essential','#ProductSection .product-single','div#section-product.product--section[itemtype="//schema.org/Product"] .box__product-content.site-box .site-box-content','div[itemtype="http://schema.org/Product"] #layoutmaincontent','#shopify-section-product-template #section-product-template .product-single .wrapper .product-details .product-single__meta div[itemprop="offers"][itemtype="http://schema.org/Offer"]','#shopify-section-product-template [data-section-id="product-template"] .product-block-list .product-block-list__item--info form.product-form','#shopify-section-product-template .product-section .page-content .page-width','[itemtype="http://schema.org/Product"][data-section-id="product"] .product-detail__wrapper .page-width','div[itemtype="http://schema.org/Product"] + .single-product-layout-type-3 .product-single','div[itemtype="http://schema.org/Product"] .product-single[data-product-id]','div[itemtype="http://schema.org/Product"][data-section-type="product"] .row.product-single','div[itemtype="http://schema.org/Product"] #shopify-section-product-details','.shopify-section div[itemtype="http://schema.org/Product"] ~ .container--product-page','div[itemtype="http://schema.org/Product"]','div[itemtype="//schema.org/Product"]','div[itemtype="http://data-vocabulary.org/Product"] .product_section','#shopify-section-product-template .main_content_area .product_section[itemtype="http://schema.org/Product"]','#ProductSection-product-template-default .product-default .product_top .product-shop','#ProductSection-product-template-default .product_bottom','#shopify-section-single-product-tab','#shopify-section-product-template .sixteen.columns [class|="product"] [itemtype="http://schema.org/Product"]','#shopify-section-product-template div[class^="product-"] div[itemtype="http://schema.org/Product"].product_section','#shopify-section-product-template .product-template .product-right .shopify-product-form','#shopify-section-product-template .section-product .product-single','#shopify-section-product-template.shopify-section--product-template div.one-whole.column[class*="product-"]','#shopify-section-product-template div.product_section.is-flex','#shopify-section-product-template div.product_section','#shopify-section-product-template div.product-section:first','#shopify-section-product-template [data-section-id="product-template"] .product-detail','#shopify-section-product-template','section.grid-hold.product.content','#shopify-section-product [data-section-id="product"] .pro_main_c > div.row','#PageContainer main > div[itemtype="http://schema.org/Product"]','#shopify-section-static-product .product--container article.product--outer','#shopify-section-static-product article.product--outer','#shopify-section-product-detail-main [data-section-id="product-detail-main"]','article[itemtype="http://schema.org/Product"]','#ProductSection-product .product-page .product-single','div[itemtype="http://schema.org/Product"] .ten.columns.omega','#shopify-section-static-product.shopify-section.section-product','div[class^="product-"] div[itemtype="http://schema.org/Product"].product_section','.template-product .shg-product:first','div#product-details[itemtype="http://schema.org/Product"]','div#product_page_content[itemtype="http://schema.org/Product"]','.product-template-section .product_section','#shopify-section-product-template-control div[itemtype="http://schema.org/Product"]:first','#MainContent .module-wrap[data-label="Product"][data-status="dynamic"]','section[itemtype="http://schema.org/Product"]','.template-product .gryffeditor .module-wrap[data-label="Product"]:first','article#single-product .product__right','#PageContainer #shopify-section-product-template-alt','#shopify-section-product .product--template[data-section-id="product"][data-section-type="product"][data-product-template]','div[data-section-type="product"] .product-page .product-single','div[data-section-type="product"]','#ProductSection-product .product-page .product-single:not(.product-single--medium-image)','#template-product .product_section .product__information','div[class*="product-"][itemtype="http://schema.org/Product"]','#shopify-section-product .product-container .product-details-wrapper .product-message','#jas-content .product > .jas-row','.product #shopify-section-product-page-description','.product .product-infors .theiaStickySidebar','#MainContent section[keyword="product"] .gt_container','div[data-type="product"] .lh-product-single .lh-details-product','#shopify-section-static-product .module-wrapper .module-product .product-wrap .product-tabs','.template-product .product-tabs .product-tabs-body #product-tab-description','#shopify-section-product-page article#section-product-page .product-content','.product-template.product-details-section .section.product_section','#PageContainer .product-template .section-description','#shopify-section-product.shopify-section.section--products','#shopify-section-product-template .product .page__content-wrapper','#shopify-section-product-sections-template .product-section .page-content .page-width .product-single__description-full','#shopify-section-bbar-product-template #product-view','#shopify-section-template--product','div[data-section-type="product-page"] .product-page__main','.shopify-section .product-section .page-content','.site-box-container.product--section .box__product-content .site-box-content','#shopify-section-product--static .product-form-product--static','#shopify-section-product--static','#shopify-section-product-description-bottom-template .product_form form.shopify-product-form','#shopify-section-template-product #template-product .container--product','.shopify-section.section-product .product-details-inline','#shopify-section-module-product [data-section-id="module-product"]','#shopify-section-product #content .pro_main_c > .row:first','#shopify-section-product-sections-template .page-content .page-width .product-single__meta','#shopify-section-product-template > div[class^="product-"]','.product-page--right-column--container .product-form--root form.product-form--container','.product.product--large','.product .product__info-container','#shopify-section-product-template-new','.shopify-section section[data-section-type="product"] > div.container','#shopify-section-product-details-template .container .product.product_section','.product .product-details','.pro-page #ProductSection-product-template-default .product-default .product_top','.product-single .product-single__bottom','.Product__InfoWrapper .Product__Info .Container','.shopify-section .product__section.product-template div.row.grid_wrapper .product__section-content','#PageContainer .container .grid.product-single','#shopify-section-product-details-template.shopify-section--product-template .container .product_section.is-flex','.product-block-list__item.product-block-list__item--info .card.card--sticky','.product-id.product-template .product-grid-product-template','#content .shopify-section.section-product-template .product-container[data-section-type="product-template"]','.is-product-main .product-container .product-main','.main__wrapper #content ~ .product__wrapper','.main__wrapper #content.product-page','.product-section .page-content .page-width .breadcrumb + .grid','#shopify-section-product .section-product','.product--container','.product-page-main','.shopify-section.section-product','.shopify-section .product-section:not(.is-modal) .page-content','div.shopify-section--main-product','.AddToCartForm  .item-content [data-key="accordion"]','div.product-area','div.product__section','[itemtype="http://schema.org/Product"] ~ .grid[itemtype="http://schema.org/Product"]','#shopify-section-product-template [itemtype="http://schema.org/Offer"] ~ .container ~ .product-detail','#shopify-section-product-page__product','.product-page--root .product-page--top-panel','.product-page--root','.screen-layer--is-active .screen-layer__inner .product-section.is-modal .page-content .page-width','.section-main-product [data-section-type="main-product"]','.product_section [data-product-details]','.product_section','.content-page-detail','.product.product--wet-pouch','#product_template','#shopify-section-product .product-details','.product-detail__detail.sticky-element .product-detail__options + form.ajax-product-form','[class*="#product-meta-block @type:buy_buttons"','[data-section-type="product"] .product .product__container','.proDetailRightContent','.product__info-container.product__info-container--sticky','[data-pf-type="Section"] [data-pf-type="Row"] [data-pf-type="Column"] > [data-pf-type="ProductBox"] form.pf-product-form','section.product-page-section','#m-product .product-data','.shopify-section [x-data="product()"]','.product-single[data-product-id]','[id*="ProductOverview"].shopify-section','.product .container .product__row .product__col .product-accordion','.product__info-container product-form.product-form','.product__section-contentWrapper','.product__row','.product-section[data-product-handle]:not(.is-modal)','#product-area','.shopify-section.product-section','.module-product .product-wrap','.product-single__details','article#product-description form.product__form-container.product_form','.product-page.product-template.main__section[data-product-id]','.t4s-row__product','#MainContent div[id^="shopify-section-template--"].section-main-product','.f-product-single[data-section-type="main-product"]','product-page.main-product.grid','#ProductSection-product-template form[action*="/cart/add"]','section[data-product-section] .section-content','.product-template[data-section-type="product-page"]','.section.section--tight .product','[data-section-type="product-template"]','.border-grid-color[data-section-type="product"]','.product__top','#product-template','.single-product__form-wrap','.gryffeditor form.AddToCartForm','[class="#section-body-content"] [class="#product"]','#product-box','section.product-detail-wrapper','section.product__container','.block-section .product-page','section[id^="MainProduct-template--"]','#section-product'],productHtmlSelectorsActions:{'#ProductSection-product-template-default .product-default .related-products':'before','#shopify-section-product .product-container .product-details-wrapper .product-message':'before','#shopify-section-product-template .product-template .product-right .shopify-product-form':'after','#shopify-section-product-template [data-section-id="product-template"] .product-block-list .product-block-list__item--info form.product-form':'after','#shopify-section-static-product .module-wrapper .module-product .product-wrap .product-tabs':'after','#PageContainer .product-template .section-description':'after','#shopify-section-product.shopify-section.section--products':'after','#shopify-section-product-sections-template .product-section .page-content .page-width .product-single__description-full':'before','#shopify-section-bbar-product-template #product-view':'after','#shopify-section-product--static .product-form-product--static':'after','#shopify-section-static-product .product--container article.product--outer':'after','#shopify-section-product .product--template[data-section-id="product"][data-section-type="product"][data-product-template]':'after','#shopify-section-product-description-bottom-template .product_form form.shopify-product-form':'after','#shopify-section-module-product [data-section-id="module-product"]':'after','#shopify-section-product #content .pro_main_c > .row:first':'after','#shopify-section-product-template div.product_section.is-flex':'after','.product-page--right-column--container .product-form--root form.product-form--container':'after','#shopify-section-product-details-template .container .product.product_section':'after','#shopify-section-product-details-template.shopify-section--product-template .container .product_section.is-flex':'after','.product .product-details':'after','.pro-page #ProductSection-product-template-default .product-default .product_top':'after','.AddToCartForm  .item-content [data-key="accordion"]':'before','div.product-area':'after','.main__wrapper #content ~ .product__wrapper':'after','[data-section-type="product"] .product .product__container':'after','div[itemtype="http://schema.org/Product"][data-section-type="product"] .row.product-single':'after','#m-product .product-data':'after','.shopify-section [x-data="product()"]':'after','div[itemtype="http://schema.org/Product"] #shopify-section-product-details':'before','.product .container .product__row .product__col .product-accordion':'after','#__pf [data-pf-type="Layout"] [data-pf-type="Column"] [data-checkout="checkout"]:visible':'after','.product__info-container product-form.product-form':'after','.product__row':'after','article#product-description form.product__form-container.product_form':'after','product-page.main-product.grid':'after','#ProductSection-product-template form[action*="/cart/add"]':'after','.product.product--large':'after','.border-grid-color[data-section-type="product"]':'after','.gryffeditor form.AddToCartForm':'after','#product-box':'after','.block-section .product-page':'after','#section-product':'after',},discountedBundleProducts:{},activeBundle:{},objectToArray:function(object){var array=[];var order=[];for(var property in object){if(object.hasOwnProperty(property)){if(object[property].hasOwnProperty('sequence')){var sequence=object[property]['sequence'];if(typeof order[sequence]==='undefined'){order[sequence]=object[property];}else{order.push(object[property]);}}}}
if(order.length>0){for(var i=0;i<order.length;i++){if(typeof order[i]!=='undefined'){array.push(order[i]);}}}else{for(var property in object){if(object.hasOwnProperty(property)){array.push(object[property]);}}}
return array;},widgetCanBeDisplayed:true,renderedBundles:{},setObserver:function(bundle,keySelector,customCallback){var rootMargin='0px 0px 0px 0px';var threshold=0.25;var root=null;if(typeof window.bndlrPOSShowBundles!=='undefined'&&window.bndlrPOSShowBundles===true){rootMargin='0px 0px 500px 0px';threshold=0;root=document;}
if(typeof IntersectionObserver!=='undefined'){var options={root:root,rootMargin:rootMargin,threshold:threshold}
var callback=function(entries,observer){for(var i=0;i<entries.length;i++){var entry=entries[i];if(entry.isIntersecting||entry.boundingClientRect.top<0){observer.unobserve(entry.target);if(typeof customCallback!=='function'){idleCallback(function(){bndlr.displayBundle(bundle,keySelector)});}else{customCallback();}}}};var observer=new IntersectionObserver(callback,options);var target=document.querySelector(keySelector);if(target!==null){observer.observe(target);}}else{this.displayBundle(bundle,keySelector);}},displayBundle:function(bundle,keySelector){this.widgetCanBeDisplayed=true;var bundleKey=utils.getRandomString();var discountedProducts=Library.DiscountedProducts.get(bundle.id);discountedProducts=this.modifyProductsPrices(bundle,discountedProducts);Library.DiscountedProducts.set(bundle.id,discountedProducts);var sectionedBundlesProducts=Library.SectionedBundlesProducts.get(bundle.id);for(var i=0;i<sectionedBundlesProducts.length;i++){for(var k in sectionedBundlesProducts[i]){if(Object.keys(sectionedBundlesProducts[i][k]).length===0){delete sectionedBundlesProducts[i][k];}}
sectionedBundlesProducts[i]=this.modifyProductsPrices(bundle,sectionedBundlesProducts[i],false,'',i);}
Library.SectionedBundlesProducts.set(bundle.id,sectionedBundlesProducts);Tools.Products.setRequiredVariantLinePrices(Library,bundle);var requiredProducts=Library.RequiredProducts.get(bundle.id);var allProducts=Library.Products.get();var orderedProducts=this.objectToArray(bundle.products);var bundleRequiredProducts=[];if(bundle.minimum_requirements=='specific_products'){bundleRequiredProducts=this.objectToArray(bundle.required_products);}
var bundleName=bundle.name.replace('"','').replace(/<[^>]*>?/gm,'');var canDisplayBundle=true;var hideProductsIfImageIsSet=true;if(bundle.mix_and_match_display==='true'&&(bundle.minimum_requirements==='n_products'||bundle.minimum_requirements==='tiered_n_products')){try{var bundleHtml=''+
'<div id="_bndl_'+bundleKey+'" class="bndlr-container bndlr-mixnmatch" data-bndlr-key="'+bundleKey+'" data-bundle-name="'+bundleName+'">'+
'<div class="bndlr-products-container">';bundleHtml+=widgetView.getBundleTitle(bundle.title,bundle.name,bundle.id);bundleHtml+='<div class="bndlr-bundle-description">'+bundle.description+'</div>';bundleHtml+='<div class="bndlr-inner-products-container">';if(bundle.product_level=='variant'&&bundle.bundle_image!==''){bundleHtml+=widgetView.getBundleImage(bundle.bundle_image,bundle.title,bundle.name,bundle.id);}
bundleHtml+='<div class="bndlr-mnm-available-products">';for(var p=0;p<orderedProducts.length;p++){var productId=orderedProducts[p].id;if(typeof discountedProducts[productId]!=='undefined'){var isRequired=(orderedProducts[p].required===1?true:false);var productHtml=this.getMixAndMatchProductHtml(discountedProducts[productId],bundle,isRequired);bundleHtml+=productHtml;}}
bundleHtml+='</div>';bundleHtml+='<div class="bndlr-mnm-second-container">';bundleHtml+='<div class="bndlr-mnm-selected-products-title bndlr-hidden bndlr-toggle">';bundleHtml+='Your bundle:';bundleHtml+='</div>';bundleHtml+='<div class="bndlr-mnm-selected-products bndlr-hidden bndlr-toggle">';bundleHtml+='</div>';bundleHtml+='<div class="bndlr-mnm-add-to-cart-wrapper">';bundleHtml+='<span class="bndlr-mnm-instructions-text">';bundleHtml+=this.MixNMatch.getInstructionsText(bundle,0,true);bundleHtml+='</span>';var acAttr='';acAttr='data-ac-enabled="true"';bundleHtml+='<div class="sealsubs-target-element-bundle sealsubs-target-element" style="display:none" data-product-handles="" '+acAttr+'></div>';if(bundle.total_price_text!==''){bundleHtml+='<div class="bndlr-mnm-total-price bndlr-hidden"></div>';}
bundleHtml+='<div class="bndlr-tiered-mnm-instructions-text bndlr-hidden">';bundleHtml+='<div class="bndlr-tiered-mnm-instructions-text-inner">';bundleHtml+=this.MixNMatch.getInstructionsTextTiered(bundle,0,true);bundleHtml+='</div>';bundleHtml+='</div>';var addToCartButtonText=bundle.button_text;if(bundle.minimum_requirements!=='tiered_n_products'){bundleHtml+='<div class="bndlr-add-bundle-to-cart bndlr-hidden" title="'+addToCartButtonText.replace('"','')+'" data-active="'+this.widgetCanBeDisplayed.toString()+'" tabindex="0" role="button">'+addToCartButtonText+'</div>';}else{bundleHtml+='<div class="bndlr-add-bundle-to-cart bndlr-hidden" title="'+addToCartButtonText.replace('"','')+'" data-active="'+this.widgetCanBeDisplayed.toString()+'" tabindex="0" role="button">'+addToCartButtonText+'</div>';}
bundleHtml+='<div class="bndlr-bundle-checkout-warning bndlr-hidden">'+bundle.discount_warning+'</div>';bundleHtml+='</div>';bundleHtml+='</div>';bundleHtml+='</div>';bundleHtml+='</div>';bundleHtml+='</div>';var htmlSelector='.bundler-target-element[data-bundle="'+bundle.id+'"]';if(this.canShowFloatingStatusBox()&&$('#bndlr-mnm-status-box').length===0){var bundleStatusBox='<div id="bndlr-mnm-status-box" class="bndlr-visibility-visible" data-bndlr-bundle-key="'+bundleKey+'">'+
'<div class="bdnlr-mnm-status-box-products-container">'+
'</div>'+
'<div class="bdnlr-mnm-status-box-info-container">'+
'<span class="bndlr-mnm-instructions-text">'+
this.MixNMatch.getInstructionsText(bundle,0,true)+
'</span>'+
'<div class="bndlr-status-box-add-to-cart bndlr-hidden" title="'+addToCartButtonText.replace('"','')+'" data-active="'+this.widgetCanBeDisplayed.toString()+'" tabindex="0" role="button">'+addToCartButtonText+'</div>';'</div>'+
'</div>';$('body').append(bundleStatusBox);this.MixNMatch.showHideStatusBox();}}catch(e){bundlerConsole.log(e);canDisplayBundle=false;}}else if(bundle.minimum_requirements==='sectioned_n_products'){try{var bundleHtml=''+
'<div id="_bndl_'+bundleKey+'" class="bndlr-container bndlr-sectioned-mixnmatch" data-bndlr-key="'+bundleKey+'" data-bundle-name="'+bundleName+'">'+
'<div class="bndlr-products-container">';bundleHtml+='<div class="bndlr-sections-main-container" data-bundler-active-section="0">';bundleHtml+='<div class="bndlr-sections-container">';bundleHtml+='<div class="b--ndlr-inner-products-container">';for(var n=0;n<bundle.sections.length;n++){var orderedProducts=this.objectToArray(bundle.sections[n].products);bundleHtml+='<div class="bndlr-sectioned-section" data-bundler-section="'+n+'">';bundleHtml+='<h2 class="bndlr-section-main-title" role="heading">'+bundle.sections[n].name+'</h2>';bundleHtml+='<div class="bndlr-section-description">'+bundle.sections[n].description+'</div>';bundleHtml+='<div class="bndlr-sectioned-available-products" data-bundler-section="'+n+'">';for(var p=0;p<orderedProducts.length;p++){var productId=orderedProducts[p].id;if(typeof sectionedBundlesProducts[n][productId]!=='undefined'){var productHtml=this.getSectionedProductHtml(sectionedBundlesProducts[n][productId],bundle,n);bundleHtml+=productHtml;}}
bundleHtml+='</div>';if(n<bundle.sections.length-1){bundleHtml+='<div class="bndlr-next-section bndlr-shine-animation">Move to next section</div>';}
bundleHtml+='</div>';}
bundleHtml+='</div>';bundleHtml+='</div>';bundleHtml+='<div class="bndlr-sections-status-container">';for(var n=0;n<bundle.sections.length;n++){bundleHtml+='<div class="bndlr-sectioned-section-status" data-bundler-section-status="'+n+'" data-requirements-fulfilled="false">';bundleHtml+='<div class="bndlr-sectioned-section-name" >';bundleHtml+='<span class="bndlr-section-name-number">'+(n+1)+'</span>';bundleHtml+=' <span class="bndlr-section-name-text" role="button">'+bundle.sections[n].name+'</span>';bundleHtml+='<span class="bndlr-section-name-checkmark">'+htmlUtils.svgCheckmark+'</span>';bundleHtml+='<span class="bndlr-section-name-line"></span>';bundleHtml+='</div>';bundleHtml+='<div class="bndlr-sectioned-section-products">';bundleHtml+='</div>';bundleHtml+='<div class="bndlr-section-name-connector-line">';bundleHtml+='<svg class="bndlr-dashed-line" height="100%">';bundleHtml+='<line y1="0" x1="0" x2="0" y2="100%"></line>';bundleHtml+='</svg>';bundleHtml+='</div>';bundleHtml+='</div>';}
bundleHtml+='<div class="bndlr-sectioned-instructions-text">';bundleHtml+=this.sectionedGetInstructionsText();bundleHtml+='</div>';var acAttr='';acAttr='data-ac-enabled="true"';bundleHtml+='<div class="sealsubs-target-element-bundle sealsubs-target-element" style="display:none" data-product-handles="" '+acAttr+'></div>';if(bundle.total_price_text!==''){bundleHtml+='<div class="bndlr-sectioned-total-price bndlr-hidden"></div>';}
var addToCartButtonText=bundle.button_text;bundleHtml+='<div class="bndlr-add-sectioned-bundle-to-cart bndlr-disabled" title="'+addToCartButtonText.replace('"','')+'" data-active="'+this.widgetCanBeDisplayed.toString()+'" tabindex="0" role="button">'+addToCartButtonText+'</div>';bundleHtml+='<div class="bndlr-warning-container" style="display:none;"></div>';bundleHtml+='<div class="bndlr-bundle-checkout-warning bndlr-hidden">'+bundle.discount_warning+'</div>';bundleHtml+='</div>';bundleHtml+='</div>';bundleHtml+='</div>';bundleHtml+='</div>';var htmlSelector='.bundler-target-element[data-bundle="'+bundle.id+'"]';}catch(e){bundlerConsole.log(e);canDisplayBundle=false;}}else{try{var bundleHtml=''+
'<div id="_bndl_'+bundleKey+'" class="bndlr-container" data-bndlr-key="'+bundleKey+'" data-bundle-name="'+bundleName+'">'+
'<div class="bndlr-products-container">';bundleHtml+=widgetView.getBundleTitle(bundle.title,bundle.name,bundle.id);bundleHtml+='<div class="bndlr-bundle-description">'+this.replacePricePlaceholders(bundle.description,bundle,bundleKey)+'</div>';bundleHtml+='<div class="bndlr-inner-products-container">';if(bundle.product_level=='variant'&&bundle.bundle_image!==''){bundleHtml+=widgetView.getBundleImage(bundle.bundle_image,bundle.title,bundle.name,bundle.id);}
var style=''
if(bundle.product_level=='variant'&&bundle.bundle_image!==''&&hideProductsIfImageIsSet){style='display:none;';}
bundleHtml+='<div style="'+style+'">';for(var p=0;p<bundleRequiredProducts.length;p++){var productId=bundleRequiredProducts[p].id;if(typeof requiredProducts[productId]!=='undefined'){var productHtml=this.getProductHtml(requiredProducts[productId],bundle,true);bundleHtml+=productHtml;}}
for(var p=0;p<orderedProducts.length;p++){var productId=orderedProducts[p].id;if(typeof discountedProducts[productId]!=='undefined'){var productHtml=this.getProductHtml(discountedProducts[productId],bundle);bundleHtml+=productHtml;}}
bundleHtml+='</div>';if(bundle.product_level=='variant'&&bundle.bundle_image!==''&&bundle.list_product_names==='true'&&hideProductsIfImageIsSet){bundleHtml+='<div class="bndlr-product-names-list">';var listSeparator=', ';for(var p=0;p<orderedProducts.length;p++){var productId=orderedProducts[p].id;if(typeof discountedProducts[productId]!=='undefined'){var productHtml=this.getProductListName(discountedProducts[productId],bundle,false,bundleKey);bundleHtml+=productHtml+listSeparator;}}
for(var p=0;p<bundleRequiredProducts.length;p++){var productId=bundleRequiredProducts[p].id;if(typeof requiredProducts[productId]!=='undefined'){var productHtml=this.getProductListName(requiredProducts[productId],bundle,true,bundleKey);bundleHtml+=productHtml+listSeparator;}}
bundleHtml=bundleHtml.replace(/,\s*$/,'').replace(/,<br \/>$/,'');bundleHtml+='</div>';}
var combinedProducts={};for(var p=0;p<orderedProducts.length;p++){var productId=orderedProducts[p].id;if(typeof allProducts[productId]!=='undefined'){var productHandle=allProducts[productId].handle;combinedProducts[productHandle]=allProducts[productId];}}
for(var p=0;p<bundleRequiredProducts.length;p++){var productId=bundleRequiredProducts[p].id;if(typeof allProducts[productId]!=='undefined'){var productHandle=allProducts[productId].handle;combinedProducts[productHandle]=allProducts[productId];}}
var acAttr='';acAttr='data-ac-enabled="true"';bundleHtml+='<div class="sealsubs-target-element-bundle sealsubs-target-element" data-product-handles="'+utils.getListOfValues(combinedProducts,'handle')+'" '+acAttr+'></div>';if(bundle.total_price_text!==''){bundleHtml+='<div class="bndlr-total-price">'+this.getTotalPriceText(bundle,bundleKey)+'</div>';}
var addToCartButtonText=bundle.button_text;if(this.widgetCanBeDisplayed===false){addToCartButtonText='Out of stock';}
addToCartButtonText=this.replacePricePlaceholders(addToCartButtonText,bundle,bundleKey);bundleHtml+='<div class="bndlr-add-to-cart" title="'+addToCartButtonText.replace(/"/g,'')+'" data-active="'+this.widgetCanBeDisplayed.toString()+'" tabindex="0" role="button">'+addToCartButtonText+'</div>';bundleHtml+='</div>';bundleHtml+='<div class="bndlr-bundle-checkout-warning">'+bundle.discount_warning+'</div>';bundleHtml+='</div>';bundleHtml+='</div>';var htmlSelector='.bundler-target-element[data-bundle="'+bundle.id+'"]';}catch(e){bundlerConsole.log(e);canDisplayBundle=false;}}
if(canDisplayBundle===false){bundlerConsole.log('Skipping bundle',bundle.name);return true;}
if(typeof keySelector==='string'){$element=$(keySelector);}else{$element=$(htmlSelector);}
if($element.length>0){var $bundle=$(bundleHtml);if(this.widgetCanBeDisplayed===false){$bundle.attr('data-available','false');}
var $addtcButton=$bundle.find('.bndlr-add-to-cart');$addtcButton.off('click');$addtcButton.click(function(e){bndlr.addToCart($(this));e.stopPropagation();});$element.html($bundle);bndlr.renderedBundles[bundleKey]=true;this.setProductWidth(htmlSelector,$element);}
idleCallback(function(){var self=this;debounce('reposition-plus-signs'+bundleKey,function(){self.repositionPlusSigns('#_bndl_'+bundleKey,$bundle);},200);$(document).trigger('bundler_bundle_widget_created');try{var event=new CustomEvent("bundler:bundle_widget_created",{detail:{products:JSON.parse(JSON.stringify(allProducts))}});document.dispatchEvent(event);}catch(e){bundlerConsole.log(e);}}.bind(bndlr));},repositionPlusSignsTimeout:false,repositionPlusSigns:function(selector,$element){if(typeof $element!=='undefined'){if($element.length>0){this.repositionPlusSign($element);this.repositionPlusSignForMixNMatch($element);}}else if(typeof selector!=='undefined'){var el=$(selector);if(el.length>0){this.repositionPlusSign(el);this.repositionPlusSignForMixNMatch(el);}}else{$('.bundler-target-element .bndlr-container').each(function(key,el){bndlr.repositionPlusSign($(el));});$('.bundler-target-element .bndlr-mnm-selected-products').each(function(key,el){bndlr.repositionPlusSignForMixNMatch($(el));});}},repositionPlusSign:function($el){if($el.hasClass('bndlr-mixnmatch')||$el.find('.bndlr-mixnmatch').length){return true;}
var totalHeight=0;$el.find('.bndlr-product').each(function(key,el){totalHeight+=$(el).outerHeight(true);});if(Math.floor(totalHeight)==Math.floor($el.find('.bndlr-inner-products-container div').first().height())){$el.find('.bndlr-inner-products-container').addClass('bndlr-break-plus-signs');}else{$el.find('.bndlr-inner-products-container').removeClass('bndlr-break-plus-signs');}},repositionPlusSignForMixNMatch:function($el){var totalHeight=0;$el=$el.find('.bndlr-mnm-selected-products').first();if(typeof $el!=='undefined'){$el.find('.bndlr-product').each(function(key,el){totalHeight+=$(el).outerHeight(true);});if(Math.floor(totalHeight)==Math.floor($el.height())){$el.closest('.bndlr-inner-products-container').addClass('bndlr-break-plus-signs');}else{$el.closest('.bndlr-inner-products-container').removeClass('bndlr-break-plus-signs');}}},setProductWidth:function(bundleSelector,$element){if(typeof $element==='undefined'){$element=$(bundleSelector);}
if($element.length===0){return;}
var boundingClientWidth=$element[0].getBoundingClientRect().width;var paddingValue=14;var isInPopup=false
if($element.closest('.bundles-bundler-hop-full-page-overlay').length>0){var bodyWidth=$('body')[0].getBoundingClientRect().width;if(bodyWidth<400){boundingClientWidth=bodyWidth*0.9-18;if(boundingClientWidth<70){boundingClientWidth=$('body')[0].offsetWidth*0.9-18;}
isInPopup=true;}else{boundingClientWidth=bodyWidth*0.9-18;isInPopup=true;}
paddingValue=0;}
if(boundingClientWidth>0){boundingClientWidth-=paddingValue;var productsNum=$(bundleSelector+' .bndlr-product').length;if(productsNum>=2){if(typeof window.BndlrIsBundleLandingPage!=='undefined'&&window.BndlrIsBundleLandingPage){var productWidth=340;if(typeof clientSpecifics['product_dimensions']!=='undefined'){productWidth=clientSpecifics['product_dimensions'].getLadingPageWidth()+10;}}else{var productWidth=240;if(typeof clientSpecifics['product_dimensions']!=='undefined'){productWidth=clientSpecifics['product_dimensions'].getStandardWidth()+10;}}
var minProducts=2;var minProductWidth=140;if(boundingClientWidth<=550){minProductWidth=120;}
if(isInPopup){minProductWidth=100;}
if(productsNum>6){minProducts=6;}else{minProducts=productsNum;}
if(productWidth*minProducts>boundingClientWidth){var perfectWidth=boundingClientWidth/minProducts-10;var $products=$element.find('.bndlr-product');if(perfectWidth>minProductWidth&&perfectWidth<productWidth){$products.css({'max-width':Math.floor(perfectWidth)});}else{var widthFound=false;if(minProducts%2===0){perfectWidth=boundingClientWidth/2-10;if(perfectWidth>minProductWidth&&perfectWidth<220){$products.css({'max-width':Math.floor(perfectWidth)});widthFound=true;}}
var currentProductsNum=minProducts-1;while(widthFound===false&&currentProductsNum>=1){perfectWidth=boundingClientWidth/currentProductsNum-10;if(perfectWidth>minProductWidth&&perfectWidth<productWidth){$products.css({'max-width':Math.floor(perfectWidth)});widthFound=true;}else{currentProductsNum--;}}
if(widthFound===false){$products.css({'max-width':Math.floor(minProductWidth-10)});}}}}}},sectionedGetTotalPriceText:function(bundle,sections){var pricesHtmls=this.getSectionedPricesHtmls(sections);var modifiedText=bundle.total_price_text;if(pricesHtmls.raw_original_price<=pricesHtmls.raw_discounted_price){modifiedText=modifiedText.replace(/{original_price}\s{0,1}/g,'');}
modifiedText=modifiedText.replace(/{original_price}/g,pricesHtmls.original_price_html);modifiedText=modifiedText.replace(/{discounted_price}/g,pricesHtmls.discounted_price_html);modifiedText=modifiedText.replace(/{savings}/g,pricesHtmls.savings_html);return modifiedText;},getTotalPriceText:function(bundle,bundleKey){var pricesHtmls=this.getPricesHtmls(bundle,bundleKey);var modifiedText=bundle.total_price_text;if(pricesHtmls.raw_original_price<=pricesHtmls.raw_discounted_price){modifiedText=modifiedText.replace(/{original_price}\s{0,1}/g,'');}
modifiedText=modifiedText.replace(/{original_price}/g,pricesHtmls.original_price_html);modifiedText=modifiedText.replace(/{discounted_price}/g,pricesHtmls.discounted_price_html);modifiedText=modifiedText.replace(/{savings}/g,pricesHtmls.savings_html);return modifiedText;},getMixNMatchTotalPriceText:function(bundle,products){var pricesHtmls=this.getPricesHtmls(null,null,products);var modifiedText=bundle.total_price_text;if(pricesHtmls.raw_original_price<=pricesHtmls.raw_discounted_price){modifiedText=modifiedText.replace(/{original_price}\s{0,1}/g,'');}
modifiedText=modifiedText.replace(/{original_price}/g,pricesHtmls.original_price_html);modifiedText=modifiedText.replace(/{discounted_price}/g,pricesHtmls.discounted_price_html);modifiedText=modifiedText.replace(/{savings}/g,pricesHtmls.savings_html);return modifiedText;},replacePricePlaceholders:function(string,bundle,bundleKey){var pricesHtmls=this.getPricesHtmls(bundle,bundleKey);var modifiedText=string.replace(/{original_price}/g,pricesHtmls.original_price_html);modifiedText=modifiedText.replace(/{discounted_price}/g,pricesHtmls.discounted_price_html);modifiedText=modifiedText.replace(/{savings}/g,pricesHtmls.savings_html);return modifiedText;},getPricesHtmls:function(bundle,bundleKey,products){var originalPrice=0;var discountedPrice=0;if(typeof products==='undefined'){var bundleId=bundle.id;var discountedProducts=Library.DiscountedProducts.get(bundleId);for(var productId in discountedProducts){if(discountedProducts.hasOwnProperty(productId)){var product=discountedProducts[productId];discountedPrice+=this.getSelectedVariantPrice(product,bundleKey,bundleId);originalPrice+=this.getSelectedVariantOldPrice(product,bundleKey,bundleId);}}
var requiredProducts=Library.RequiredProducts.get(bundleId);for(var productId in requiredProducts){if(requiredProducts.hasOwnProperty(productId)){var product=requiredProducts[productId];discountedPrice+=this.getSelectedVariantPrice(product,bundleKey,bundleId,true);originalPrice+=this.getSelectedVariantOldPrice(product,bundleKey,bundleId,true);}}}else{for(var key in products){if(products.hasOwnProperty(key)){var dPrice=0;var oPrice=0;var productVariant=products[key].variants[0];oPrice=this.getVariantOldPrice(productVariant);dPrice=this.getVariantDiscountedPrice(productVariant);discountedPrice+=dPrice;originalPrice+=oPrice;}}}
var savings=originalPrice-discountedPrice;if(savings<0){savings=0;}
var currency=this.getDefaultCurrency();var originalPriceHtml=this.formatPrice(originalPrice);originalPriceHtml=htmlUtils.moneySpan(originalPriceHtml,currency.toLowerCase(),'bndlr-old-price','',originalPrice);var discountedPriceHtml=this.formatPrice(discountedPrice,undefined,'down');discountedPriceHtml=htmlUtils.moneySpan(discountedPriceHtml,currency.toLowerCase(),'bndlr-new-price','',discountedPrice);var savingsHtml=this.formatPrice(savings);savingsHtml=htmlUtils.moneySpan(savingsHtml,currency.toLowerCase(),'bndlr-savings','',savings);return{'original_price_html':originalPriceHtml,'discounted_price_html':discountedPriceHtml,'savings_html':savingsHtml,'raw_original_price':originalPrice,'raw_discounted_price':discountedPrice};},getSectionedPricesHtmls:function(sections){var originalPrice=0;var discountedPrice=0;for(var sectionId in sections){var products=sections[sectionId];for(var key in products){if(products.hasOwnProperty(key)){var dPrice=0;var oPrice=0;var productVariant=products[key].variants[0];oPrice=this.getVariantOldPrice(productVariant);dPrice=this.getVariantDiscountedPrice(productVariant);discountedPrice+=dPrice;originalPrice+=oPrice;}}}
var savings=originalPrice-discountedPrice;if(savings<0){savings=0;}
var currency=this.getDefaultCurrency();var originalPriceHtml=this.formatPrice(originalPrice);originalPriceHtml=htmlUtils.moneySpan(originalPriceHtml,currency.toLowerCase(),'bndlr-old-price','',originalPrice);var discountedPriceHtml=this.formatPrice(discountedPrice,undefined,'down');discountedPriceHtml=htmlUtils.moneySpan(discountedPriceHtml,currency.toLowerCase(),'bndlr-new-price','',discountedPrice);var savingsHtml=this.formatPrice(savings);savingsHtml=htmlUtils.moneySpan(savingsHtml,currency.toLowerCase(),'bndlr-savings','',savings);return{'original_price_html':originalPriceHtml,'discounted_price_html':discountedPriceHtml,'savings_html':savingsHtml,'raw_original_price':originalPrice,'raw_discounted_price':discountedPrice};},getSelectedVariant:function(productId,bundleKey,bundleId,forRequiredProduct,sectionId){if(typeof forRequiredProduct==='undefined'){forRequiredProduct=false;}
if(typeof sectionId==='undefined'){sectionId='';}
var reqProductSelector='';if(forRequiredProduct){reqProductSelector='.bndlr-product[data-required="true"]';}else{reqProductSelector='.bndlr-product[data-required="false"]';}
var additionalSelector=reqProductSelector
var sectionSelector='';if(sectionId!==''){sectionSelector='[data-bundler-section="'+sectionId+'"]';additionalSelector=sectionSelector;}
if(typeof this.renderedBundles[bundleKey]!=='undefined'){if(typeof bundleKey!=='undefined'&&bundleKey!==''){var variantId=$('#_bndl_'+bundleKey).find(additionalSelector+' select.bndlr-select-variant.id_'+productId+' option:selected').val();}else if(typeof bundleId!=='undefined'&&bundleId!==''){console.log('Retrieving selected variant id by bundle id');var variantId=$('[data-bundle="'+bundleId+'"] '+additionalSelector+' select.bndlr-select-variant.id_'+productId+' option:selected').val();}else{bundlerConsole.log('bundle id and bundle key are missing');var variantId=$(additionalSelector+' select.bndlr-select-variant.id_'+productId+' option:selected').val();}}
if(typeof variantId==='undefined'){var bundle=this.getBundleById(bundleId);if(bundle.minimum_requirements==='sectioned_n_products'&&sectionId!==''){var sectionedBundlesProducts=Library.SectionedBundlesProducts.get(bundleId);if(typeof sectionedBundlesProducts[sectionId]!=='undefined'){var productsLib=sectionedBundlesProducts[sectionId];}
sectionSelector='[data-bundler-section="'+sectionId+'"]';}else{if(forRequiredProduct){var productsLib=Library.RequiredProducts.get(bundleId);}else{var productsLib=Library.DiscountedProducts.get(bundleId);}}
if(productsLib[productId]!=='undefined'&&((forRequiredProduct===false&&typeof bundle.products!=='undefined'&&typeof bundle.products[productId]!=='undefined')||(forRequiredProduct&&typeof bundle.required_products!=='undefined'&&typeof bundle.required_products[productId]!=='undefined')||(bundle.minimum_requirements==='sectioned_n_products'&&typeof bundle.sections!=='undefined'&&typeof bundle.sections[sectionId]!=='undefined'&&typeof bundle.sections[sectionId].products[productId]!=='undefined'))){var productVariants=productsLib[productId].variants;if(bundle.minimum_requirements==='sectioned_n_products'&&sectionId!==''){var productFromBundle=bundle.sections[sectionId].products[productId];}else{if(forRequiredProduct){var productFromBundle=bundle.required_products[productId];}else{var productFromBundle=bundle.products[productId];}}
for(var vi=0;vi<productVariants.length;vi++){if(typeof productFromBundle.variants[productVariants[vi].id]!=='undefined'){return productVariants[vi].id;}}}
return false;}else{return variantId;}},getPrice:function(price){if(typeof price.indexOf==='function'&&price.indexOf('.')!==-1){price=Math.round(price*100);}
return price;},getTotalOriginalAmount:function(bundle,products,fromPOS,bundleKey){var totalOriginalAmount=0;for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(fromPOS&&typeof products[key].type!=='undefined'&&products[key].type==='required'){continue;}
if(typeof bundle.products[productId]!=='undefined'||(bundle.product_target_type==='all_products'&&bundle.minimum_requirements==='volume_discounts')){var selectedVariant=fromPOS?false:this.getSelectedVariant(productId,bundleKey,bundle.id);if(bundle.product_target_type==='all_products'&&bundle.minimum_requirements==='volume_discounts'){var quantity=products[key].quantity;}else{var quantity=bundle.products[productId].quantity;}
if(fromPOS){quantity=products[key].quantity;}
if(selectedVariant===false){totalOriginalAmount+=this.getPrice(products[key].variants[0].price)*quantity;}else{for(var i=0;i<products[key].variants.length;i++){if(selectedVariant==products[key].variants[i].id){totalOriginalAmount+=this.getPrice(products[key].variants[i].price)*quantity;}}}}}}
return totalOriginalAmount;},applyPercentageDiscount:function(bundle,products,discountRatio,fromPOS,bundleKey,onlyToSelectedVariant){var totalAppliedAmount=0;for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(fromPOS&&typeof products[key].type!=='undefined'&&products[key].type==='required'){continue;}
if(typeof bundle.products[productId]!=='undefined'||(bundle.product_target_type==='all_products'&&bundle.minimum_requirements==='volume_discounts')||bundle.minimum_requirements==='sectioned_n_products'){if(bundle.product_target_type==='all_products'&&bundle.minimum_requirements==='volume_discounts'){var quantity=products[key].quantity;}else if(bundle.minimum_requirements==='sectioned_n_products'){var quantity=1;}else{var quantity=bundle.products[productId].quantity;}
if(fromPOS){quantity=products[key].quantity;}else if(bundle.mix_and_match_display==='true'&&(bundle.minimum_requirements==='n_products'||bundle.minimum_requirements==='tiered_n_products')){quantity=1;}
var selectedVariant=false;if(onlyToSelectedVariant){selectedVariant=fromPOS?false:this.getSelectedVariant(productId,bundleKey,bundle.id);if(selectedVariant===false){selectedVariant=products[key].variants[0].id;}}
var atLeastOneVariantWasConfigured=false;for(var i=0;i<products[key].variants.length;i++){if(onlyToSelectedVariant===false||selectedVariant==products[key].variants[i].id){var productPrice=this.getPrice(products[key].variants[i].price);var price=this.getPrice(products[key].variants[i].price)*quantity;var compareAtLinePrice=this.priceOrZero(products[key].variants[i].compare_at_price)*quantity;products[key].variants[i].linePrice=price;products[key].variants[i].compareAtLinePrice=compareAtLinePrice;var discountAm=Math.round(productPrice*discountRatio)*quantity;if(fromPOS&&typeof window.bndlrNoDecimalsInDiscount!=='undefined'&&window.bndlrNoDecimalsInDiscount){discountAm=Math.round(discountAm/100)*100;}
products[key].variants[i].discountedPrice=price-discountAm;if(typeof products[key].variants[i].deliveriesNum==='number'&&products[key].variants[i].deliveriesNum>1){products[key].variants[i].discountedPrice*=products[key].variants[i].deliveriesNum;}
products[key].variants[i].discountedPriceQuantity=quantity;totalAppliedAmount+=discountAm;if(onlyToSelectedVariant===true){i=products[key].variants.length;}
atLeastOneVariantWasConfigured=true;}}
if(atLeastOneVariantWasConfigured===false){bundlerConsole.log('Could not configure the discount and prices for the product '+products[key].title+' in bundle '+bundle.name+'. Try to remove the product from the bundle, add it back to it and save the bundle to resolve the issue.');}}else{bundlerConsole.log('Could not configure the discount and prices for the product '+products[key].title+' in bundle '+bundle.name+'. Try to remove the product from the bundle, add it back to it and save the bundle to resolve the issue.');}}}
return totalAppliedAmount;},applyRemainingDiscount:function(bundle,products,fromPOS,bundleKey,maxDiscount,appliedAmount){if(appliedAmount!==maxDiscount){var discountDifference=maxDiscount-appliedAmount;for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(fromPOS&&typeof products[key].type!=='undefined'&&products[key].type==='required'){continue;}
if(typeof bundle.products[productId]!=='undefined'){var selectedVariant=fromPOS?false:this.getSelectedVariant(productId,bundleKey,bundle.id);if(selectedVariant===false){selectedVariant=products[key].variants[0].id;}
for(var i=0;i<products[key].variants.length;i++){if(selectedVariant==products[key].variants[i].id){if(products[key].variants[i].discountedPrice>discountDifference){products[key].variants[i].discountedPrice-=discountDifference;discountDifference-=discountDifference;}
i=products[key].variants.length;}}}}}}},sectionedApplyRemainingDiscount:function(bundle,sections,fromPOS,maxDiscount,appliedAmount){if(appliedAmount!==maxDiscount){var discountDifference=maxDiscount-appliedAmount;for(var sectionId in sections){var products=sections[sectionId];for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(fromPOS&&typeof products[key].type!=='undefined'&&products[key].type==='required'){continue;}
var selectedVariant=products[key].variants[0].id;for(var i=0;i<products[key].variants.length;i++){if(selectedVariant==products[key].variants[i].id){if(products[key].variants[i].discountedPrice>discountDifference){products[key].variants[i].discountedPrice-=discountDifference;discountDifference-=discountDifference;}
i=products[key].variants.length;}}}}}}},getSectionedTotalOriginalAmount(bundle,sections){var totalOriginalAmount=0;for(var sectionId in sections){var products=sections[sectionId];for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(typeof bundle.sections[sectionId].products[productId]!=='undefined'){quantity=products[key].quantity;totalOriginalAmount+=this.getPrice(products[key].variants[0].price)*quantity;}}}}
return totalOriginalAmount;},sectionedModifyProductsPrices:function(bundle,sections,fromPOS){if(typeof fromPOS==='undefined'){fromPOS=false;}
function setDiscountedKeysFixedAmount(self,variant,quantity,totalOriginalAmount,maxDiscount,totalDiscountedAmount){var price=self.getPrice(variant.price)*quantity;var discountablePrice=price;var compareAtLinePrice=self.priceOrZero(variant.compare_at_price)*quantity;if(price>compareAtLinePrice){compareAtLinePrice=price;}
variant.linePrice=price;variant.compareAtLinePrice=compareAtLinePrice;if(totalOriginalAmount<=maxDiscount){variant.discountedPrice=0;}else{var discountAmount=Math.round((discountablePrice/totalOriginalAmount)*maxDiscount);variant.discountedPrice=discountablePrice-discountAmount;totalDiscountedAmount+=discountAmount;}
if(typeof variant.deliveriesNum==='number'&&variant.deliveriesNum>1){variant.discountedPrice*=variant.deliveriesNum;}
variant.discountedPriceQuantity=quantity;return totalDiscountedAmount;}
function applyPercentageDiscount(bundle,sections,discountRatio){var totalAppliedAmount=0;for(var sectionId in sections){var products=sections[sectionId];for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(typeof bundle.sections[sectionId].products[productId]!=='undefined'){var quantity=products[key].quantity;for(var i=0;i<products[key].variants.length;i++){var productPrice=bndlr.getPrice(products[key].variants[i].price);var price=bndlr.getPrice(products[key].variants[i].price)*quantity;var compareAtLinePrice=bndlr.priceOrZero(products[key].variants[i].compare_at_price)*quantity;products[key].variants[i].linePrice=price;products[key].variants[i].compareAtLinePrice=compareAtLinePrice;var discountAm=Math.round(productPrice*discountRatio)*quantity;products[key].variants[i].discountedPrice=price-discountAm;if(typeof products[key].variants[i].deliveriesNum==='number'&&products[key].variants[i].deliveriesNum>1){products[key].variants[i].discountedPrice*=products[key].variants[i].deliveriesNum;}
products[key].variants[i].discountedPriceQuantity=quantity;totalAppliedAmount+=discountAm;}}else{bundlerConsole.log('Could not configure the discount and prices for the product '+products[key].title+' in bundle '+bundle.name+'. Try to remove the product from the bundle, add it back to it and save the bundle to resolve the issue.');}}}}
return totalAppliedAmount;}
if(bundle.discount_type=='percentage'){var ratio=bundle.percentage_value/100;applyPercentageDiscount(bundle,sections,ratio);}else if(bundle.discount_type=='fixed_amount'){var maxDiscount=bundle.fixed_amount_value*100;var totalOriginalAmount=this.getSectionedTotalOriginalAmount(bundle,sections);var totalDiscountedAmount=0;for(var sectionId in sections){var products=sections[sectionId];for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(typeof bundle.sections[sectionId].products[productId]!=='undefined'){var quantity=products[key].quantity;totalDiscountedAmount=setDiscountedKeysFixedAmount(this,products[key].variants[0],quantity,totalOriginalAmount,maxDiscount,totalDiscountedAmount);}}}}}else if(bundle.discount_type=='fixed_price'){var finalPrice=bundle.fixed_price_value*100;var fnum=(bundle.fixed_price_value+'').length-5;if(fnum<0){fnum=0;}
finalPrice=finalPrice.toFixed(fnum)*1;var totalOriginalAmount=this.getSectionedTotalOriginalAmount(bundle,sections);var discountAmount=totalOriginalAmount-finalPrice;if(discountAmount<0){discountAmount=0;}
var discountRatio=discountAmount/totalOriginalAmount;var totalAppliedAmount=applyPercentageDiscount(bundle,sections,discountRatio);this.sectionedApplyRemainingDiscount(bundle,sections,fromPOS,discountAmount,totalAppliedAmount);}else if(bundle.discount_type=='products_discounts'){for(var sectionId in sections){var products=sections[sectionId];for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(typeof bundle.sections[sectionId].products[productId]!=='undefined'){var quantity=products[key].quantity;for(var i=0;i<products[key].variants.length;i++){var price=this.getPrice(products[key].variants[i].price)*quantity;var compareAtLinePrice=this.priceOrZero(products[key].variants[i].compare_at_price)*quantity;var finalDiscount=bundle.sections[sectionId].products[productId].discount_amount*100;finalDiscount=finalDiscount*quantity;if(finalDiscount<0){finalDiscount=0;}
products[key].variants[i].linePrice=price;products[key].variants[i].compareAtLinePrice=compareAtLinePrice;var finalPrice=Math.round(price-finalDiscount);if(finalPrice<0){finalPrice=0;}
products[key].variants[i].discountedPrice=finalPrice;if(typeof products[key].variants[i].deliveriesNum==='number'&&products[key].variants[i].deliveriesNum>1){products[key].variants[i].discountedPrice*=products[key].variants[i].deliveriesNum;}
products[key].variants[i].discountedPriceQuantity=quantity;}}}}}}
return sections;},modifyProductsPrices:function(bundle,products,fromPOS,bundleKey,sectionId){function setDiscountedKeysFixedAmount(self,variant,quantity,totalOriginalAmount,maxDiscount,totalDiscountedAmount){var price=self.getPrice(variant.price)*quantity;var discountablePrice=price;var compareAtLinePrice=self.priceOrZero(variant.compare_at_price)*quantity;if(price>compareAtLinePrice){compareAtLinePrice=price;}
variant.linePrice=price;variant.compareAtLinePrice=compareAtLinePrice;if(totalOriginalAmount<=maxDiscount){variant.discountedPrice=0;}else{var discountAmount=Math.round((discountablePrice/totalOriginalAmount)*maxDiscount);variant.discountedPrice=discountablePrice-discountAmount;totalDiscountedAmount+=discountAmount;}
if(typeof variant.deliveriesNum==='number'&&variant.deliveriesNum>1){variant.discountedPrice*=variant.deliveriesNum;}
variant.discountedPriceQuantity=quantity;return totalDiscountedAmount;}
var isDynamicMixAndMatchBundle=false;if(bundle.mix_and_match_display==='true'&&bundle.minimum_requirements==='n_products'){isDynamicMixAndMatchBundle=true;}
var isTieredMixNMatchBundle=false;if(bundle.minimum_requirements==='tiered_n_products'){isTieredMixNMatchBundle=true;}
if(isDynamicMixAndMatchBundle&&fromPOS!==true&&bundle.discount_type!='percentage'&&bundle.discount_type!='products_discounts'){for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(typeof bundle.products[productId]!=='undefined'){var quantity=bundle.products[productId].quantity;for(var i=0;i<products[key].variants.length;i++){var price=this.getPrice(products[key].variants[i].price);var compareAtLinePrice=this.priceOrZero(products[key].variants[i].compare_at_price);if(price>compareAtLinePrice){compareAtLinePrice=price;}
products[key].variants[i].linePrice=price;products[key].variants[i].compareAtLinePrice=price;products[key].variants[i].discountedPrice=price;products[key].variants[i].discountedPriceQuantity=1;}}}}}else if(bundle.minimum_requirements==='sectioned_n_products'&&bundle.discount_type!='percentage'&&bundle.discount_type!=='products_discounts'&&fromPOS!==true){for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;for(var i=0;i<products[key].variants.length;i++){var price=this.getPrice(products[key].variants[i].price);var compareAtLinePrice=this.priceOrZero(products[key].variants[i].compare_at_price);if(price>compareAtLinePrice){compareAtLinePrice=price;}
products[key].variants[i].linePrice=price;products[key].variants[i].compareAtLinePrice=price;products[key].variants[i].discountedPrice=price;products[key].variants[i].discountedPriceQuantity=1;}}}}else if(bundle.minimum_requirements==='sectioned_n_products'&&bundle.discount_type==='products_discounts'&&typeof sectionId!=='undefined'&&fromPOS!==true){for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;for(var i=0;i<products[key].variants.length;i++){var price=this.getPrice(products[key].variants[i].price);var compareAtLinePrice=this.priceOrZero(products[key].variants[i].compare_at_price);if(price>compareAtLinePrice){compareAtLinePrice=price;}
var quantity=1;var finalDiscount=bundle.sections[sectionId].products[productId].discount_amount*100;if(finalDiscount<0){finalDiscount=0;}
products[key].variants[i].linePrice=price;products[key].variants[i].compareAtLinePrice=compareAtLinePrice;var finalPrice=Math.round(price-finalDiscount);if(finalPrice<0){finalPrice=0;}
products[key].variants[i].discountedPrice=finalPrice;products[key].variants[i].discountedPriceQuantity=quantity;}}}}else if(isTieredMixNMatchBundle===true&&fromPOS!==true){this.applyPercentageDiscount(bundle,products,0,fromPOS,bundleKey,false);}else{if(fromPOS===true){var volumeDiscount=[];for(var pkey in products){if(products.hasOwnProperty(pkey)){if(typeof products[pkey]!=='undefined'&&typeof products[pkey].volume_discount!=='undefined'){discountType=products[pkey].volume_discount.discount_type;volumeDiscount=products[pkey].volume_discount;bundle.discount_type=volumeDiscount.discount_type;bundle.percentage_value=volumeDiscount.discount_value;bundle.fixed_amount_value=volumeDiscount.discount_value;bundle.fixed_price_value=volumeDiscount.discount_value;break;}}}}
if(bundle.discount_type=='percentage'){var ratio=bundle.percentage_value/100;this.applyPercentageDiscount(bundle,products,ratio,fromPOS,bundleKey,false);}else if(bundle.discount_type=='fixed_amount'){var maxDiscount=bundle.fixed_amount_value*100;var totalOriginalAmount=this.getTotalOriginalAmount(bundle,products,fromPOS,bundleKey);var totalDiscountedAmount=0;for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(fromPOS&&typeof products[key].type!=='undefined'&&products[key].type==='required'){continue;}
if(typeof bundle.products[productId]!=='undefined'||(bundle.product_target_type==='all_products'&&bundle.minimum_requirements==='volume_discounts')){var selectedVariant=fromPOS?false:this.getSelectedVariant(productId,bundleKey,bundle.id);if(bundle.product_target_type==='all_products'&&bundle.minimum_requirements==='volume_discounts'){var quantity=products[key].quantity;}else{var quantity=bundle.products[productId].quantity;}
if(fromPOS){quantity=products[key].quantity;}
if(selectedVariant===false){totalDiscountedAmount=setDiscountedKeysFixedAmount(this,products[key].variants[0],quantity,totalOriginalAmount,maxDiscount,totalDiscountedAmount);}else{for(var i=0;i<products[key].variants.length;i++){if(selectedVariant==products[key].variants[i].id){totalDiscountedAmount=setDiscountedKeysFixedAmount(this,products[key].variants[i],quantity,totalOriginalAmount,maxDiscount,totalDiscountedAmount);}}}}}}
this.applyRemainingDiscount(bundle,products,fromPOS,bundleKey,maxDiscount,totalDiscountedAmount);}else if(bundle.discount_type=='fixed_price'){var finalPrice=bundle.fixed_price_value*100;var fnum=(bundle.fixed_price_value+'').length-5;if(fnum<0){fnum=0;}
finalPrice=finalPrice.toFixed(fnum)*1;var totalOriginalAmount=this.getTotalOriginalAmount(bundle,products,fromPOS,bundleKey);var discountAmount=totalOriginalAmount-finalPrice;if(discountAmount<0){discountAmount=0;}
var discountRatio=discountAmount/totalOriginalAmount;var totalAppliedAmount=this.applyPercentageDiscount(bundle,products,discountRatio,fromPOS,bundleKey,true);this.applyRemainingDiscount(bundle,products,fromPOS,bundleKey,discountAmount,totalAppliedAmount);}else if(bundle.discount_type=='products_discounts'){for(var key in products){if(products.hasOwnProperty(key)){var productId=products[key].product_id;if(fromPOS&&typeof products[key].type!=='undefined'&&products[key].type==='required'){continue;}
if(typeof bundle.products[productId]!=='undefined'){var quantity=bundle.products[productId].quantity;if(fromPOS){quantity=products[key].quantity;}else if(isDynamicMixAndMatchBundle){quantity=1;}
for(var i=0;i<products[key].variants.length;i++){var price=this.getPrice(products[key].variants[i].price)*quantity;var compareAtLinePrice=this.priceOrZero(products[key].variants[i].compare_at_price)*quantity;var finalDiscount=bundle.products[productId].discount_amount*100;if(bundle.minimum_requirements==='n_products'){finalDiscount=finalDiscount*quantity;}
if(finalDiscount<0){finalDiscount=0;}
products[key].variants[i].linePrice=price;products[key].variants[i].compareAtLinePrice=compareAtLinePrice;var finalPrice=Math.round(price-finalDiscount);if(finalPrice<0){finalPrice=0;}
products[key].variants[i].discountedPrice=finalPrice;if(typeof products[key].variants[i].deliveriesNum==='number'&&products[key].variants[i].deliveriesNum>1){products[key].variants[i].discountedPrice*=products[key].variants[i].deliveriesNum;}
products[key].variants[i].discountedPriceQuantity=quantity;}}}}}}
return products;},isVariantAvailable:function(variantId,productId,bundle,fromRequiredProducts,sectionId){var arrayKey='products';if(fromRequiredProducts){arrayKey='required_products';}
if(typeof sectionId!=='undefined'){if(typeof bundle['sections'][sectionId]['products'][productId]!=='undefined'){if(typeof bundle['sections'][sectionId]['products'][productId].variants[variantId]!=='undefined'){return true;}}}else{if(typeof bundle[arrayKey][productId]!=='undefined'){if(typeof bundle[arrayKey][productId].variants[variantId]!=='undefined'){return true;}}}
return false;},getMixAndMatchProductHtml:function(product,bundle,isRequired){if(Object.keys(product).length===0){return '';}
var variantSelectDisplay='';var options='';var variants='<select class="bndlr-select-variant id_'+product.id+'" aria-label="variant" name="variant_id" ';var numberOfAvailableVariants=0;var allowedVariants=[];for(var i=0;i<product.variants.length;i++){if(this.isVariantAvailable(product.variants[i].id,product.id,bundle,false)){if(product.variants[i].available!==false){numberOfAvailableVariants++;}
allowedVariants.push(product.variants[i]);}}
var variantsAreAvailable=true;if(numberOfAvailableVariants===0){this.widgetCanBeDisplayed=false;variantsAreAvailable=false;console.warn('Bundler: The configured variants for product "'+product.title+'" are not available. If you set the app to hide unavailable variants, then please make sure that the selected variants are in stock. If the issue persists, try to edit the bundle, select the products again and save the bundle.');}
if(allowedVariants.length<=1){variantSelectDisplay='display:none;';}
variants+='style="'+variantSelectDisplay+'"';variants+='>';for(var i=0;i<allowedVariants.length;i++){var name=this.getVariantTitle(allowedVariants[i]);var dataAttrs='';variants+='<option value="'+allowedVariants[i].id+'" '+dataAttrs+'>'+name+'</option>';}
variants+='</select>';var productUrl=nav.getRootUrl(true)+'products/'+product.handle;var featuredImage=this.getFeaturedImage(product,'',bundle.id);var linkTarget='target="_blank"';var productTitle=product.title;var productTitleAttr=productTitle.replace('"','').replace(/<[^>]*>?/gm,'');var addToBundleText='Add to bundle';var addToBundleButtonClass='';if(variantsAreAvailable===false){addToBundleText='Out of stock';addToBundleButtonClass='bndlr-no-click';}
var imageDimensions=this.getImageDimensions(featuredImage,product);var html=''+
'<div class="bndlr-product bndlr-mix-and-match bndlr-no-plus-sign" '+
'data-quantity="1" '+
'data-required="false" '+
'data-mnm-required="'+isRequired.toString()+'" '+
'data-available="'+variantsAreAvailable.toString()+'" '+
'data-product-id="'+product.id+'" '+
'>';html+=''+
'<a href="'+productUrl+'" class="bndlr-product-image-url" '+linkTarget+'>'+
'<img title="'+productTitleAttr+'" class="bndlr-product-image id_'+product.id+'" src="'+this.getProductImage(featuredImage,'500X500')+'" '+this.getSrcSet(featuredImage)+' '+imageDimensions+'>'+
'</a>';html+=''+
'<div class="bndlr-product-qn-container">';html+=''+
'<a href="'+productUrl+'" class="bndlr-product-title" '+linkTarget+' title="'+productTitleAttr+'">'+productTitle+'</a>';html+=''+
'</div>'+
'<div class="bndlr-product-price id_'+product.id+'">'+
this.getProductPriceHtml(product,'',bundle.id,true)+
'</div>';html+='<div class="bndlr-bottom-pusher"></div>'+
options+
variants+
'<div class="bndlr-add-to-bundle '+addToBundleButtonClass+'" title="'+addToBundleText+'" tabindex="0" role="button">'+addToBundleText+'</div>'+
'</div>'+
'';return html;},getSectionedProductHtml:function(product,bundle,sectionId){if(Object.keys(product).length===0){return '';}
var variantSelectDisplay='';var options='';var variants='<select class="bndlr-select-variant id_'+product.id+'" aria-label="variant" name="variant_id" ';var numberOfAvailableVariants=0;var allowedVariants=[];for(var i=0;i<product.variants.length;i++){if(this.isVariantAvailable(product.variants[i].id,product.id,bundle,false,sectionId)){if(product.variants[i].available!==false){numberOfAvailableVariants++;}
allowedVariants.push(product.variants[i]);}}
var variantsAreAvailable=true;if(numberOfAvailableVariants===0){this.widgetCanBeDisplayed=false;variantsAreAvailable=false;console.warn('Bundler: The configured variants for product "'+product.title+'" are not available. If you set the app to hide unavailable variants, then please make sure that the selected variants are in stock. If the issue persists, try to edit the bundle, select the products again and save the bundle.');}
if(allowedVariants.length<=1){variantSelectDisplay='display:none;';}
variants+='style="'+variantSelectDisplay+'"';variants+='>';for(var i=0;i<allowedVariants.length;i++){var name=this.getVariantTitle(allowedVariants[i]);var dataAttrs='';variants+='<option value="'+allowedVariants[i].id+'" '+dataAttrs+'>'+name+'</option>';}
variants+='</select>';var productUrl=nav.getRootUrl(true)+'products/'+product.handle;var featuredImage=this.getFeaturedImage(product,'',bundle.id,false,sectionId);var linkTarget='target="_blank"';var productTitle=product.title;var productTitleAttr=productTitle.replace('"','').replace(/<[^>]*>?/gm,'');var addToBundleText='Add to bundle';var addToBundleButtonClass='';if(variantsAreAvailable===false){addToBundleText='Out of stock';addToBundleButtonClass='bndlr-no-click';}
var imageDimensions=this.getImageDimensions(featuredImage,product);var html=''+
'<div class="bndlr-product bndlr-mix-and-match bndlr-sectioned-product bndlr-no-plus-sign" '+
'data-quantity="1" '+
'data-required="false" '+
'data-mnm-required="false" '+
'data-available="'+variantsAreAvailable.toString()+'" '+
'data-product-id="'+product.id+'" '+
'role="group" aria-label="product"'+
'>';html+=''+
'<a href="'+productUrl+'" class="bndlr-product-image-url" '+linkTarget+'>'+
'<img title="'+productTitleAttr+'" class="bndlr-product-image id_'+product.id+'" src="'+this.getProductImage(featuredImage,'500X500')+'" '+this.getSrcSet(featuredImage)+' '+imageDimensions+'>'+
'</a>';html+=''+
'<div class="bndlr-product-qn-container">';html+=''+
'<a href="'+productUrl+'" class="bndlr-product-title" '+linkTarget+' title="'+productTitleAttr+'">'+productTitle+'</a>';html+=''+
'</div>';html+='<div class="bndlr-product-price id_'+product.id+'">'+
this.getProductPriceHtml(product,'',bundle.id,true,sectionId)+
'</div>';html+='<div class="bndlr-bottom-pusher"></div>';html+=options+
variants+
'<div class="bndlr-add-to-sectioned-bundle '+addToBundleButtonClass+'" title="'+addToBundleText+'" tabindex="0" role="button">'+addToBundleText+'</div>'+
'</div>'+
'';return html;},getStatusBoxProductHtml:function(lineItem,product,bundle){var productUrl=nav.getRootUrl(true)+'products/'+product.handle;var variantName='';var featuredImage='';for(var i=0;i<product.variants.length;i++){if(lineItem.variant_id==product.variants[i].id){if(typeof product.variants[i].featured_image!=='undefined'&&product.variants[i].featured_image!==null){featuredImage=product.variants[i].featured_image.src;}else{featuredImage=this.getVariantsFeaturedImage(product,product.variants[i]);}
variantName=product.variants[i].name;}}
var customProductImage=this.getCustomProductImage(bundle.id,product.id);if(customProductImage!==''){featuredImage=customProductImage;}
var linkTarget='target="_blank"';var variantNameAttr=variantName.replace('"','').replace(/<[^>]*>?/gm,'');var html=''+
'<div class="bndlr-status-box-product">';if(lineItem.quantity>1){html+='<div class="bndlr-status-box-product-quantity">'+lineItem.quantity+'x'+'</div>';}
html+=''+
'<a href="'+productUrl+'" class="bndlr-status-box-product-url" '+linkTarget+'>'+
'<img title="'+variantNameAttr+'" class="bndlr-status-box-product-image addtc-np" src="'+this.getProductImage(featuredImage,'500X500')+'" '+this.getSrcSet(featuredImage)+'>'+
'</a>';html+='</div>';return html;},getSectionedBundleSelectedProductHtml:function(lineItem,product,bundle,lineItemKey,sectionId){var productUrl=nav.getRootUrl(true)+'products/'+product.handle;var variantName='';var featuredImage='';for(var i=0;i<product.variants.length;i++){if(lineItem.variant_id==product.variants[i].id){if(typeof product.variants[i].featured_image!=='undefined'&&product.variants[i].featured_image!==null){featuredImage=product.variants[i].featured_image.src;}else{featuredImage=this.getVariantsFeaturedImage(product,product.variants[i]);}
variantName=product.variants[i].name;}}
var customProductImage=this.getCustomProductImage(bundle.id,product.id);if(customProductImage!==''){featuredImage=customProductImage;}
var linkTarget='target="_blank"';var variantNameAttr=variantName.replace('"','').replace(/<[^>]*>?/gm,'');var acAttr='';acAttr='data-ac-enabled="true"';var html=''+
'<div class="bndlr-sectioned-status-box-product" data-line-item-key="'+lineItemKey+'" data-section-id="'+sectionId+'" data-variant-id="'+lineItem.variant_id+'" role="group" arial-label="product">';if(lineItem.quantity>1){html+='<div class="bndlr-sectioned-status-box-product-quantity">'+lineItem.quantity+'x'+'</div>';}
html+=''+
'<a href="'+productUrl+'" class="bndlr-status-box-product-url" '+linkTarget+'>'+
'<img title="'+variantNameAttr+'" class="bndlr-sectioned-status-box-product-image addtc-np" src="'+this.getProductImage(featuredImage,'500X500')+'" '+this.getSrcSet(featuredImage)+'>'+
'</a>';html+='<div class="bndlr-close" tabindex="0" role="button" aria-label="Remove '+variantNameAttr+'"></div>';html+='<div class="sealsubs-target-element" data-handle="'+product.handle+'" '+acAttr+'></div>';html+='</div>';return html;},getSelectedProductHtml:function(lineItem,product,bundle,lineItemKey){var variantSelectDisplay='';var options='';var productUrl=nav.getRootUrl(true)+'products/'+product.handle;var variantName='';var featuredImage='';for(var i=0;i<product.variants.length;i++){if(lineItem.variant_id==product.variants[i].id){if(typeof product.variants[i].featured_image!=='undefined'&&product.variants[i].featured_image!==null){featuredImage=product.variants[i].featured_image.src;}else{featuredImage=this.getVariantsFeaturedImage(product,product.variants[i]);}
variantName=product.variants[i].name;}}
var customProductImage=this.getCustomProductImage(bundle.id,product.id);if(customProductImage!==''){featuredImage=customProductImage;}
var linkTarget='target="_blank"';var variantNameAttr=variantName.replace('"','').replace(/<[^>]*>?/gm,'');var acAttr='';acAttr='data-ac-enabled="true"';var html=''+
'<div class="bndlr-product bndlr-mix-and-match" data-line-item-key="'+lineItemKey+'" data-variant-id="'+lineItem.variant_id+'">';html+=''+
'<a href="'+productUrl+'" class="bndlr-product-image-url" '+linkTarget+'>'+
'<img title="'+variantNameAttr+'" class="bndlr-product-image id_'+product.id+'" src="'+this.getProductImage(featuredImage,'500X500')+'" '+this.getSrcSet(featuredImage)+'>'+
'</a>';html+=''+
'<div class="bndlr-product-qn-container">'+
'<div class="bndlr-product-quantity">'+
lineItem.quantity+'x'+
'</div>';html+=''+
'<a href="'+productUrl+'" class="bndlr-product-title" '+linkTarget+' title="'+variantNameAttr+'">'+variantName+'</a>';html+=''+
'</div>'+
'<div class="sealsubs-target-element" data-handle="'+product.handle+'" '+acAttr+' data-variant-id="'+lineItem.variant_id+'"></div>'+
'<div class="bndlr-bottom-pusher"></div>'+
'<div class="bndlr-close" tabindex="0" role="button" aria-label="Close"></div>'+
'</div>'+
'';return html;},getProductHtml:function(product,bundle,fromRequiredProducts){var variantSelectDisplay='';var options='';var variants='<select class="bndlr-select-variant id_'+product.id+'" aria-label="variant" name="variant_id" ';if(typeof fromRequiredProducts==='undefined'){fromRequiredProducts=false;}
var numberOfAvailableVariants=0;var allowedVariants=[];for(var i=0;i<product.variants.length;i++){if(this.isVariantAvailable(product.variants[i].id,product.id,bundle,fromRequiredProducts)){if(product.variants[i].available!==false){numberOfAvailableVariants++;}
allowedVariants.push(product.variants[i]);}}
var variantsAreAvailable=true;if(numberOfAvailableVariants===0){this.widgetCanBeDisplayed=false;variantsAreAvailable=false;console.warn('Bundler: The configured variants for product "'+product.title+'" in "'+bundle.name+'" bundle are not available. If you set the app to hide unavailable variants, then please make sure that the selected variants are in stock. If the issue persists, try to edit the bundle, select the products again and save the bundle.');}
if(allowedVariants.length<=1){variantSelectDisplay='display:none;';}
variants+='style="'+variantSelectDisplay+'"';variants+='>';for(var i=0;i<allowedVariants.length;i++){var name=this.getVariantTitle(allowedVariants[i]);var dataAttrs='';variants+='<option value="'+allowedVariants[i].id+'" '+dataAttrs+'>'+name+'</option>';}
variants+='</select>';var productUrl=nav.getRootUrl(true)+'products/'+product.handle;var featuredImage=this.getFeaturedImage(product,'',bundle.id,fromRequiredProducts);var linkTarget='target="_blank"';var productTitle=product.title;var productTitleAttr=productTitle.replace('"','').replace(/<[^>]*>?/gm,'');var productQuantity=this.getProductQuantity(product.id,bundle,fromRequiredProducts);var acAttr='';acAttr='data-ac-enabled="true"';var imageDimensions=this.getImageDimensions(featuredImage,product);var html=''+
'<div class="bndlr-product" '+
'data-quantity="'+productQuantity+'" '+
'data-required="'+fromRequiredProducts.toString()+'" '+
'data-available="'+variantsAreAvailable.toString()+'" '+
'data-product-id="'+product.id+'" '+
'>';html+=''+
'<a href="'+productUrl+'" class="bndlr-product-image-url" '+linkTarget+'>'+
'<img title="'+productTitleAttr+'" class="bndlr-product-image id_'+product.id+'" src="'+this.getProductImage(featuredImage,'500X500')+'" '+this.getSrcSet(featuredImage)+
' '+imageDimensions+'>'+
'</a>';html+=''+
'<div class="bndlr-product-qn-container">'+
this.getQuantityHtml(productQuantity);html+=''+
'<a href="'+productUrl+'" class="bndlr-product-title" '+linkTarget+' title="'+productTitleAttr+'">'+productTitle+'</a>';html+=''+
'</div>'+
'<div class="sealsubs-target-element" data-handle="'+product.handle+'" '+acAttr+'></div>'+
'<div class="bndlr-product-price id_'+product.id+'">'+
this.getProductPriceHtml(product,'',bundle.id,!fromRequiredProducts)+
'</div>'+
'<div class="bndlr-bottom-pusher"></div>';html+=options+
variants+
'<div '+
'class="bndlr-product-overlay" '+
'style="display: var(--preproduct-'+(fromRequiredProducts?'required-':'')+product.id+'-overlay-display, none);" '+
'>'+
'<div '+
'class="bndlr-product-overlay-checkmark" '+
'>'+htmlUtils.svgCheckmarkPreselected+'</div>'+
'</div>'+
'</div>'+
'';return html;},getProductListName:function(product,bundle,requiredProduct,bundleKey){var productUrl=nav.getRootUrl(true)+'products/'+product.handle;var productTitleAttr=product.title.replace('"','').replace(/<[^>]*>?/gm,'');var linkTarget='target="_blank"';var html=''+
this.getProductQuantityHtml(product.id,bundle,requiredProduct)+
'<a href="'+productUrl+'" class="bndlr-product-title" '+linkTarget+' title="'+productTitleAttr+'">'+product.title+'</a>'+
'';return html;},getProductImage:function(imageSrc,size){if(imageSrc===null){imageSrc='//cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081';}else{var resizeMatches=imageSrc.match(/_\d+x\d+\./gi);var resizeMatches2=imageSrc.match(/\d+x\.(jpg|png|webp)\?/gi);if(imageSrc.indexOf('shopify')!==-1&&imageSrc.indexOf('@')===-1&&resizeMatches===null&&resizeMatches2===null){imageSrc=imageSrc.replace(/\.jpg\?/,"_"+size+'.jpg?');imageSrc=imageSrc.replace(/\.jpeg\?/,"_"+size+'.jpeg?');imageSrc=imageSrc.replace(/\.png\?/,"_"+size+'.png?');imageSrc=imageSrc.replace(/\.webp\?/,"_"+size+'.webp?');imageSrc=imageSrc.replace(/\.JPG\?/,"_"+size+'.JPG?');imageSrc=imageSrc.replace(/\.JPEG\?/,"_"+size+'.JPEG?');imageSrc=imageSrc.replace(/\.PNG\?/,"_"+size+'.PNG?');imageSrc=imageSrc.replace(/\.WEBP\?/,"_"+size+'.WEBP?');}}
return imageSrc;},getSrcSet:function(imageSrc,valueOnly){if(typeof valueOnly==='undefined'){valueOnly=false;}
if(typeof window.BndlrIsBundleLandingPage!=='undefined'&&window.BndlrIsBundleLandingPage){var sizes=[318,];}else{var sizes=[218,];}
if(typeof clientSpecifics['image_dimensions']!=='undefined'){sizes=clientSpecifics['image_dimensions'].getSizes();}
var srcset='';var sizeMultiplier=1;for(var i=0;i<sizes.length;i++){srcset+=this.getProductImage(imageSrc,sizes[i]*sizeMultiplier+'X'+sizes[i]*3*sizeMultiplier)+' '+sizes[i]+'w,';}
var sizesAttribute='';sizesAttribute=sizes[0]+'px';srcset=srcset.replace(/,$/,'');if(valueOnly){return srcset;}else{return 'srcset="'+srcset+'"';}},getProductPriceHtml:function(product,bundleKey,bundleId,canBeDiscounted,sectionId,isMixNMatch){if(typeof canBeDiscounted==='undefined'){canBeDiscounted=true;}
if(typeof sectionId==='undefined'){sectionId='';}
if(typeof isMixNMatch==='undefined'){isMixNMatch=false;}
var fromRequiredProducts=!canBeDiscounted;var price=this.getSelectedVariantPrice(product,bundleKey,bundleId,fromRequiredProducts,false,sectionId,isMixNMatch);if(canBeDiscounted){var oldPrice=this.getSelectedVariantOldPrice(product,bundleKey,bundleId,fromRequiredProducts,sectionId);}else{var oldPrice=price;}
var showOldPrice=false;if(oldPrice>price){showOldPrice=true;}
var savings=oldPrice-price;var priceHtml=this.formatPrice(price);var oldPriceHtml=this.formatPrice(oldPrice);var currency=this.getDefaultCurrency();if(showOldPrice){var priceHtml=''+
htmlUtils.moneySpan(oldPriceHtml,currency.toLowerCase(),'bndlr-old-price','aria-label="Original price"',oldPrice)+' '+
htmlUtils.moneySpan(priceHtml,currency.toLowerCase(),'bndlr-new-price','data-savings="'+savings+'" aria-label="Discounted price"',price);}else{var priceHtml=htmlUtils.moneySpan(priceHtml,currency.toLowerCase(),'bndlr-new-price','data-savings="'+savings+'" aria-label="Discounted price"',price);}
return priceHtml;},getVariantData:function(product,variantId){for(var i=0;i<product.variants.length;i++){if(variantId===false){return product.variants[i]}else{if(product.variants[i].id==variantId){return product.variants[i]}}}},getProductQuantityHtml:function(productId,bundle,isRequiredProduct){var quantity=this.getProductQuantity(productId,bundle,isRequiredProduct);return this.getQuantityHtml(quantity);},getQuantityHtml:function(quantity){if(quantity>1){var html='<div class="bndlr-product-quantity">'+quantity+'x</div>';return html;}
return '';},getProductQuantity:function(productId,bundle,isRequiredProduct){if(isRequiredProduct){if(typeof bundle.required_products[productId]!=='undefined'){return bundle.required_products[productId].quantity;}}else{if(typeof bundle.products[productId]!=='undefined'){return bundle.products[productId].quantity;}}
return 1;},getSelectedVariantPrice:function(product,bundleKey,bundleId,fromRequiredProducts,forOneItem,sectionId,isMixNMatch){if(typeof fromRequiredProducts==='undefined'){fromRequiredProducts=false;}
if(typeof forOneItem==='undefined'){forOneItem=false;}
if(typeof sectionId==='undefined'){sectionId='';}
if(typeof isMixNMatch==='undefined'){isMixNMatch=false;}
var selectedVariant=this.getSelectedVariant(product.id,bundleKey,bundleId,fromRequiredProducts,sectionId);for(var i=0;i<product.variants.length;i++){if(selectedVariant===false){return this.getVariantDiscountedPrice(product.variants[i],forOneItem,isMixNMatch);}else{if(product.variants[i].id==selectedVariant){return this.getVariantDiscountedPrice(product.variants[i],forOneItem,isMixNMatch);}}}
return product.price;},getVariantDiscountedPrice:function(variant,forOneItem,isMixNMatch){if(typeof forOneItem==='undefined'){forOneItem=false;}
if(typeof isMixNMatch==='undefined'){isMixNMatch=false;}
var price=0;if(typeof variant.discountedPrice==='undefined'){price=variant.linePrice;}else{price=variant.discountedPrice;}
if(isNaN(price)){price=0;}
if(forOneItem===true){if(typeof variant.discountedPrice==='undefined'||typeof variant.discountedPriceQuantity==='undefined'){price=price;}else{price=Math.round(price/variant.discountedPriceQuantity);}}
return price;},getFirstNonUndefined:function(){for(var i=0;i<arguments.length;++i){if(typeof arguments[i]!=='undefined'){return arguments[i];}}
return undefined;},getSelectedVariantOldPrice:function(product,bundleKey,bundleId,forRequiredProduct,sectionId){if(typeof forRequiredProduct==='undefined'){forRequiredProduct=false;}
if(typeof sectionId==='undefined'){sectionId='';}
var selectedVariant=this.getSelectedVariant(product.id,bundleKey,bundleId,forRequiredProduct,sectionId);for(var i=0;i<product.variants.length;i++){if(selectedVariant===false||product.variants[i].id==selectedVariant){return this.getVariantOldPrice(product.variants[i]);}}
return product.price;},getVariantOldPrice:function(variant){if(variant.hasOwnProperty('priceForAllDeliveries')&&variant.priceForAllDeliveries>0&&variant.priceForAllDeliveries>variant.linePrice){return this.getPrice(variant.linePriceForAllDeliveries);}
if(typeof variant.linePrice==='undefined'){console.trace();}
return this.getPrice(variant.linePrice);},updatePriceDisplay:function($this){var bundleId=$this.closest('[data-bundle]').attr('data-bundle');var bundleKey=$this.closest('[data-bndlr-key]').attr('data-bndlr-key');var bundle=this.getBundleById(bundleId);var sectionId='';var $section=$this.closest('[data-bundler-section]');if($section.length>0){sectionId=$section.attr('data-bundler-section');}
var required='false';var canBeDiscounted=true;var sectionSelector='';if(sectionId!==''){var sectionedBundlesProducts=Library.SectionedBundlesProducts.get(bundle.id);if(typeof sectionedBundlesProducts[sectionId]!=='undefined'){var products=sectionedBundlesProducts[sectionId];}
sectionSelector='[data-bundler-section="'+sectionId+'"]';}else{if($this.closest('[data-required]').attr('data-required')==='true'){required='true';canBeDiscounted=false;var products=Library.RequiredProducts.get(bundleId);}else{required='false';canBeDiscounted=true;var products=Library.DiscountedProducts.get(bundleId);products=this.modifyProductsPrices(bundle,products,false,bundleKey);Library.DiscountedProducts.set(bundleId,products);}}
var isMixNMatch=false;if(bundle.minimum_requirements==='n_products'){isMixNMatch=true;}
for(var productId in products){if(products.hasOwnProperty(productId)){var priceHtml=this.getProductPriceHtml(products[productId],bundleKey,bundleId,canBeDiscounted,undefined,isMixNMatch);$('#_bndl_'+bundleKey).find(sectionSelector+' [data-required="'+required+'"] .bndlr-product-price.id_'+productId).html(priceHtml);}}
$('#_bndl_'+bundleKey).find('.bndlr-total-price').html(this.getTotalPriceText(bundle,bundleKey));},processPriceUpdate:function(eventDetails){var $el=$(eventDetails.element);if(typeof eventDetails.price!=='undefined'){var newPrice=eventDetails.price;var pricePerDelivery=newPrice;var deliveriesNum=1;if(typeof eventDetails.pricePerDelivery==='number'){pricePerDelivery=eventDetails.pricePerDelivery;deliveriesNum=newPrice/pricePerDelivery;}
var isSubscriptionPrice=false;if(typeof eventDetails.isSubscriptionPrice==='boolean'){isSubscriptionPrice=eventDetails.isSubscriptionPrice;}
var isGroupedWidget=false;if(eventDetails.element!=='undefined'){if(eventDetails.element.hasAttribute('data-product-handles')){isGroupedWidget=true;}}
if(isGroupedWidget===true){return true;}
var bundleId=$el.closest('[data-bundle]').attr('data-bundle');var bundleKey=$el.closest('[data-bndlr-key]').attr('data-bndlr-key');if(typeof bundleId==='undefined'||typeof bundleKey==='undefined'){return true;}
var required=false;var canBeDiscounted=true;var isMixNMatch=false;var isSectionedBundle=false;if($el.closest('.bndlr-product.bndlr-mix-and-match[data-line-item-key]').length){var lineItemKey=$el.closest('.bndlr-product.bndlr-mix-and-match[data-line-item-key]').attr('data-line-item-key');isMixNMatch=true;var products=Library.DiscountedProducts.get(bundleId);}else if($el.closest('.bndlr-sectioned-status-box-product[data-line-item-key][data-section-id]').length){var lineItemKey=$el.closest('.bndlr-sectioned-status-box-product[data-line-item-key][data-section-id]').attr('data-line-item-key');var sectionId=$el.closest('.bndlr-sectioned-status-box-product[data-line-item-key][data-section-id]').attr('data-section-id');isSectionedBundle=true;var sectionsDiscountedProducts=Library.SectionedBundlesProducts.get(bundleId);}else if($el.closest('[data-required]').attr('data-required')==='true'){required=true;canBeDiscounted=false;var products=Library.RequiredProducts.get(bundleId);}else{required=false;canBeDiscounted=true;var products=Library.DiscountedProducts.get(bundleId);}
if(isSectionedBundle){if(typeof sectionsDiscountedProducts[sectionId]!=='undefined'){var products=sectionsDiscountedProducts[sectionId];for(var key in products){if(products.hasOwnProperty(key)){for(var pi=0;pi<products[key].variants.length;pi++){if(products[key].variants[pi].id==lineItemKey){products[key].variants[pi].price=pricePerDelivery;products[key].variants[pi].priceForAllDeliveries=newPrice;products[key].variants[pi].deliveriesNum=deliveriesNum;products[key].variants[pi].isSubscriptionPrice=isSubscriptionPrice;products[key].variants[pi].linePriceForAllDeliveries=newPrice*products[key].variants[pi].discountedPriceQuantity;if(products[key].variants[pi].compareAtLinePrice<products[key].variants[pi].linePriceForAllDeliveries){products[key].variants[pi].compareAtLinePrice=products[key].variants[pi].linePriceForAllDeliveries;if(products[key].variants[pi].compare_at_price===''||products[key].variants[pi].compare_at_price===0||products[key].variants[pi].compare_at_price===null){products[key].variants[pi].compare_at_price=newPrice;}}}}}}
sectionsDiscountedProducts[sectionId]=products;}
Library.SectionedBundlesProducts.set(bundleId,sectionsDiscountedProducts);this.sectionedRefreshDisplay(bundleKey);}else if(isMixNMatch){var SelectedMixNMatchProducts=Library.MixAndMatchBundles.get(bundleKey);for(var key in products){if(products.hasOwnProperty(key)){for(var pi=0;pi<products[key].variants.length;pi++){if(products[key].variants[pi].id==lineItemKey){products[key].variants[pi].price=pricePerDelivery;products[key].variants[pi].priceForAllDeliveries=newPrice;products[key].variants[pi].deliveriesNum=deliveriesNum;products[key].variants[pi].isSubscriptionPrice=isSubscriptionPrice;products[key].variants[pi].linePriceForAllDeliveries=newPrice*products[key].variants[pi].discountedPriceQuantity;if(products[key].variants[pi].compareAtLinePrice<products[key].variants[pi].linePriceForAllDeliveries){products[key].variants[pi].compareAtLinePrice=products[key].variants[pi].linePriceForAllDeliveries;if(products[key].variants[pi].compare_at_price===''||products[key].variants[pi].compare_at_price===0||products[key].variants[pi].compare_at_price===null){products[key].variants[pi].compare_at_price=newPrice;}}}}}}
for(var k in SelectedMixNMatchProducts){if(SelectedMixNMatchProducts.hasOwnProperty(k)){for(var key in products){if(products.hasOwnProperty(key)){var containsCurrentVariant=false;for(var pi=0;pi<products[key].variants.length;pi++){if(products[key].variants[pi].id==lineItemKey){containsCurrentVariant=true;}}
if(containsCurrentVariant===true&&SelectedMixNMatchProducts[k].product_id*1==products[key].id*1){if(typeof SelectedMixNMatchProducts[k].product==='undefined'){SelectedMixNMatchProducts[k].product=JSON.parse(JSON.stringify(products[key]));}else{for(var pi=0;pi<products[key].variants.length;pi++){for(var pii=0;pii<SelectedMixNMatchProducts[k].product.variants.length;pii++){if(SelectedMixNMatchProducts[k].product.variants[pii].id==products[key].variants[pi].id){SelectedMixNMatchProducts[k].product.variants[pii]=products[key].variants[pi];}}}}}}}}}
Library.MixAndMatchBundles.set(bundleKey,SelectedMixNMatchProducts);this.MixNMatch.refreshDisplay(bundleKey);}else{var productId=$el.closest('[data-product-id]').attr('data-product-id');if(typeof productId!=='undefined'){var selectedVariant=this.getSelectedVariant(productId,bundleKey,bundleId,required);for(var key in products){if(products.hasOwnProperty(key)){if(typeof products[key].variants!=='undefined'){for(var pi=0;pi<products[key].variants.length;pi++){if(products[key].variants[pi].id==selectedVariant){products[key].variants[pi].price=pricePerDelivery;products[key].variants[pi].priceForAllDeliveries=newPrice;products[key].variants[pi].deliveriesNum=deliveriesNum;products[key].variants[pi].isSubscriptionPrice=isSubscriptionPrice;products[key].variants[pi].linePriceForAllDeliveries=newPrice*products[key].variants[pi].discountedPriceQuantity;if(products[key].variants[pi].compareAtLinePrice<products[key].variants[pi].linePriceForAllDeliveries){products[key].variants[pi].compareAtLinePrice=products[key].variants[pi].linePriceForAllDeliveries;}
if(required){products[key].variants[pi].linePrice=pricePerDelivery;if(typeof deliveriesNum==='number'&&deliveriesNum>1){products[key].variants[pi].price=pricePerDelivery*deliveriesNum;}}}}}}}
if(required){Library.RequiredProducts.set(bundleId,products);}else{Library.DiscountedProducts.set(bundleId,products);}
this.updatePriceDisplay($el);}}}},changeDisplayedImage:function($this){var bundleId=$this.closest('[data-bundle]').attr('data-bundle');var bundleKey=$this.closest('[data-bndlr-key]').attr('data-bndlr-key');var bundle=this.getBundleById(bundleId);var currentProductId='';var $product=$this.closest('[data-product-id]');if($product.length>0){currentProductId=$product.attr('data-product-id');}
var sectionId='';var $section=$this.closest('[data-bundler-section]');if($section.length>0){sectionId=$section.attr('data-bundler-section');}
var required='false';var canBeDiscounted=true;var sectionSelector='';if(sectionId!==''){var sectionedBundlesProducts=Library.SectionedBundlesProducts.get(bundle.id);if(typeof sectionedBundlesProducts[sectionId]!=='undefined'){var products=sectionedBundlesProducts[sectionId];}
sectionSelector='[data-bundler-section="'+sectionId+'"]';}else{if($this.closest('[data-required]').attr('data-required')==='true'){required='true';canBeDiscounted=false;var products=Library.RequiredProducts.get(bundleId);}else{required='false';canBeDiscounted=true;var products=Library.DiscountedProducts.get(bundleId);}}
for(var productId in products){if(products.hasOwnProperty(productId)&&currentProductId!==''&&productId===currentProductId){var featuredImage=this.getFeaturedImage(products[productId],bundleKey,bundleId,!canBeDiscounted,sectionId);if(featuredImage!==null&&featuredImage.length>0){$('.bundler-target-element [data-bndlr-key="'+bundleKey+'"] '+sectionSelector+' [data-required="'+required+'"] .bndlr-product-image.id_'+productId).attr('src',this.getProductImage(featuredImage,'500X500'));$('.bundler-target-element [data-bndlr-key="'+bundleKey+'"] '+sectionSelector+' [data-required="'+required+'"] .bndlr-product-image.id_'+productId).attr('srcset',this.getSrcSet(featuredImage,true));}}}},getImageDimensions:function(imageSrc,product){if(typeof imageSrc!=='string'){return '';}
if(imageSrc.indexOf('https://')===-1){imageSrc='https:'+imageSrc;}
if(typeof product.media!=='undefined'){for(var i=0;i<product.media.length;i++){if(typeof product.media[i].src!=='undefined'&&product.media[i].src===imageSrc){if(typeof product.media[i].width==='number'&&typeof product.media[i].height==='number'){return 'width="'+product.media[i].width+'" height="'+product.media[i].height+'"';}}}}
return '';},getFeaturedImage:function(product,bundleKey,bundleId,fromRequiredProducts,sectionId){if(typeof fromRequiredProducts==='undefined'){fromRequiredProducts=false;}
var featuredImage='';var productId=product.id;if(fromRequiredProducts===false){var customProductImage=this.getCustomProductImage(bundleId,productId);if(customProductImage!==''){return customProductImage;}}
var selectedVariant=this.getSelectedVariant(productId,bundleKey,bundleId,fromRequiredProducts,sectionId);if(selectedVariant===false){if(typeof product.featured_image==='undefined'){featuredImage=this.getVariantsFeaturedImage(product,product.variants[0]);}else{featuredImage=product.featured_image;}}else{for(var i=0;i<product.variants.length;i++){if(selectedVariant==product.variants[i].id){if(typeof product.variants[i].featured_image!=='undefined'&&product.variants[i].featured_image!==null){featuredImage=product.variants[i].featured_image.src;}else{featuredImage=this.getVariantsFeaturedImage(product,product.variants[i]);}}}}
if(featuredImage===''){featuredImage=product.featured_image;}
return featuredImage;},getCustomProductImage:function(bundleId,productId){var bundle=this.getBundleById(bundleId);if(typeof bundle.products[productId]!=='undefined'&&typeof bundle.products[productId].image!=='undefined'){return bundle.products[productId].image;}
return '';},getVariantsFeaturedImage:function(product,variant){var imageSrc='';if(typeof variant.image_id!=='undefined'&&variant.image_id!==null){for(var n=0;n<product.images.length;n++){if(product.images[n].id==variant.image_id){if(typeof product.images[n]=='string'){imageSrc=product.images[n];}else{imageSrc=product.images[n].src;}}}}
if(imageSrc.length==0){if(typeof product.featured_image!=='undefined'){return product.featured_image;}else{return product.image.src;}}
return imageSrc;},formatPrice:function(price,currency,directionFor50){var currencySymbols={'USD':'$','AUD':'$','NZD':'$','EUR':'€','CRC':'₡','GBP':'£','ILS':'₪','INR':'₹','JPY':'¥','KRW':'₩','NGN':'₦','PHP':'₱','PLN':'zł','PYG':'₲','THB':'฿','UAH':'₴','VND':'₫','BRL':'R$',};price=Math.floor(price);if(typeof Shopify!=='undefined'&&typeof Shopify.currency_settings!=='undefined'&&typeof Shopify.currency_settings.money_format!=='undefined'){price=utils.formatMoney(price,Shopify.currency_settings.money_format,(currency||this.getDefaultCurrency()),directionFor50);}else if(typeof window.money_format!=='undefined'){price=utils.formatMoney(price,window.money_format,(currency||this.getDefaultCurrency()),directionFor50);}else if(typeof window.Theme!=='undefined'&&typeof window.Theme.moneyFormat!=='undefined'){price=utils.formatMoney(price,window.Theme.moneyFormat,(currency||this.getDefaultCurrency()),directionFor50);}else if(typeof window.theme!=='undefined'&&typeof window.theme.moneyFormat!=='undefined'){var moneyFormat=window.theme.moneyFormat;price=utils.formatMoney(price,moneyFormat,(currency||this.getDefaultCurrency()),directionFor50);}else if(typeof window.Currency!=='undefined'&&typeof window.Currency.money_format_no_currency==='string'){price=utils.formatMoney(price,window.Currency.money_format_no_currency,(currency||this.getDefaultCurrency()),directionFor50);}else if(typeof window.theme!=='undefined'&&typeof window.theme.settings!=='undefined'&&typeof window.theme.settings.moneyFormat!=='undefined'){try{format=theme.settings.moneyFormat
price=utils.formatMoney(price,format,(currency||this.getDefaultCurrency()),directionFor50);}catch(e){bundlerConsole.log(e);}}else{price=price/100;if(typeof currency==='undefined'){var currency=this.getDefaultCurrency();}
price=price.toLocaleString(undefined,{style:'currency',currency:currency});}
return price;},getDefaultCurrency:function(){if(typeof Shopify!=='undefined'&&typeof Shopify.currency!=='undefined'&&typeof Shopify.currency.active!=='undefined'){var currency=Shopify.currency.active;}else{var currency='USD';}
return currency;},MixNMatch:{addToBundle:function($this){var bundleKey=$this.closest('[data-bndlr-key]').attr('data-bndlr-key');var properties={};var $product=$this.closest('.bndlr-product');var variantId=$product.find('select.bndlr-select-variant[name="variant_id"] option:selected').val();var productId=$product.attr('data-product-id');var quantity=1;var quantityAttr=$product.attr('data-quantity');if(typeof quantityAttr!=='undefined'&&quantityAttr!==null&&quantityAttr*1>0){quantity=quantityAttr*1;}
var numOfRemainingProduct=this.getRemainingMaxProductsNum(bundleKey,numOfRemainingProduct);if(quantity>1&&numOfRemainingProduct!==null&&numOfRemainingProduct<quantity){quantity=numOfRemainingProduct;}
if(typeof variantId==='undefined'){var productTitle=$product.find('.bndlr-product-title').first().text();bndlr.showWarningMessage({responseJSON:{description:'Product: '+productTitle+' is not available.'}},bundleKey);}else{var products=Library.MixAndMatchBundles.get(bundleKey);if(typeof products[variantId]!=='undefined'){products[variantId].quantity+=quantity;}else{products[variantId]={product_id:productId,variant_id:variantId,quantity:quantity}}
Library.MixAndMatchBundles.set(bundleKey,products);widgetView.drawSelectedProducts(bundleKey,products);widgetView.MixNMatch.fadeInSelectedProducts(bundleKey);widgetView.addToCartButton.showCheckmark($this);try{var prodProperties=bndlr.getLineItemProperties($product);var props=JSON.parse(JSON.stringify(prodProperties));var event=new CustomEvent("bndlr:mixnmatch:product_added",{detail:{product_id:productId,variant_id:variantId,quantity:quantity,properties:props}});document.dispatchEvent(event);}catch(e){}}
this.refreshDisplay(bundleKey);},refreshDisplay:function(bundleKey){var htmlId='#_bndl_'+bundleKey;var $element=$(htmlId);var bundleId=$element.closest('[data-bundle]').attr('data-bundle');bundleId=parseInt(bundleId);var bundle=bndlr.getBundleById(bundleId);this.showHideAddToBundleButtons(bundleKey);this.refreshInstructionsText(bundleKey,bundle);var numberOfSelectedProducts=this.getNumOfselectedProducts(bundleKey);var numberofMissingProducts=this.getNumberOfRemainingProducts(bundle,numberOfSelectedProducts);var isMissingRequiredProducts=this.isMissingRequiredProducts(bundleKey,bundle);if(numberofMissingProducts===0&&isMissingRequiredProducts===false){widgetView.MixNMatch.fadeInAddToCartButton(bundleKey);}else{widgetView.MixNMatch.fadeOutAddToCartButton(bundleKey);}
var selectedProducts=Library.MixAndMatchBundles.get(bundleKey);var products=Library.DiscountedProducts.get(bundleId);var recreatedBundle=JSON.parse(JSON.stringify(bundle));recreatedBundle.mix_and_match_display='false';var recreatedProducts={};var applicableVolumeDiscountTier={};if(typeof bundle.volume_discounts!=='undefined'&&bundle.volume_discounts.length>0){var showTieredMixnMatchInstructionsText=false;for(var p=(bundle.volume_discounts.length-1);p>=0;p--){var volumeDiscount=bundle.volume_discounts[p];var minTotal=volumeDiscount.min_items;var max=volumeDiscount.max_items;var rangeType=volumeDiscount.range_type;var maxQuantity=minTotal;if(max=='0'){max=null;}
if(rangeType==='range'&&max!==''&&max!==null){maxQuantity=max;}
if(rangeType==='min_limit_only'){maxQuantity=null;}
if(numberOfSelectedProducts>=minTotal&&(max===null||numberOfSelectedProducts<=max)){applicableVolumeDiscountTier=JSON.parse(JSON.stringify(volumeDiscount));if(p<(bundle.volume_discounts.length-1)){showTieredMixnMatchInstructionsText=true;}
p=0;}}
if(showTieredMixnMatchInstructionsText===true){widgetView.MixNMatch.fadeInTieredMnMInstructions(bundleKey);}else{widgetView.MixNMatch.fadeOutTieredMnMInstructions(bundleKey);}}
for(var key in selectedProducts){if(selectedProducts.hasOwnProperty(key)){var variantId=selectedProducts[key].variant_id;var productId=selectedProducts[key].product_id;var quantity=selectedProducts[key].quantity;var product={};if(bundle.product_level=='product'){product=products[productId];}else{product=products[productId];}
if(typeof selectedProducts[key].product!=='undefined'){product=selectedProducts[key].product;}
var prd=JSON.parse(JSON.stringify(product));for(var i=0;i<product.variants.length;i++){if(product.variants[i].id==variantId){var variant=JSON.parse(JSON.stringify(product.variants[i]));prd.quantity=quantity;prd.variants=[product.variants[i]];}}
if(Object.keys(applicableVolumeDiscountTier).length>0){prd.volume_discount=JSON.parse(JSON.stringify(applicableVolumeDiscountTier));}
recreatedProducts[key]=prd;}}
if(this.getNumberOfRemainingProducts(bundle,numberOfSelectedProducts)===0){recreatedProducts=bndlr.modifyProductsPrices(recreatedBundle,recreatedProducts,true);}
var list='';for(var k in recreatedProducts){if(recreatedProducts.hasOwnProperty(k)){if(typeof recreatedProducts[k].handle!=='undefined'&&typeof recreatedProducts[k].variants[0].id!=='undefined'){list+=recreatedProducts[k].handle+':'+recreatedProducts[k].variants[0].id+',';}else if(typeof recreatedProducts[k].handle!=='undefined'){list+=recreatedProducts[k].handle+',';}}}
list=list.replace(/,+$/,'');$('.bundler-target-element [data-bndlr-key="'+bundleKey+'"] .sealsubs-target-element-bundle').attr('data-product-handles',list);if(typeof window.SealSubs!=='undefined'&&typeof window.SealSubs.refresh==='function'){numberOfSelectedProducts=this.getNumOfselectedProducts(bundleKey);numberofMissingProducts=this.getNumberOfRemainingProducts(bundle,numberOfSelectedProducts);isMissingRequiredProducts=this.isMissingRequiredProducts(bundleKey,bundle);if(numberofMissingProducts===0&&isMissingRequiredProducts===false){window.SealSubs.refresh();}}
var totalPriceText=bndlr.getMixNMatchTotalPriceText(recreatedBundle,recreatedProducts);$element.find('.bndlr-mnm-total-price').html(totalPriceText);bndlr.setProductWidth(htmlId+' .bndlr-mnm-second-container',$element.find('.bndlr-mnm-second-container'));window.requestAnimationFrame(this.showHideStatusBox);if(bndlr.repositionPlusSignsTimeout!=false){clearTimeout(bndlr.repositionPlusSignsTimeout);}
bndlr.repositionPlusSignsTimeout=setTimeout(function(){bndlr.repositionPlusSigns('#_bndl_'+bundleKey);},200);bndlr.convertCurrency('.bndlr-mnm-total-price');try{var event=new CustomEvent("bundler:mixnmatch_refreshed");document.dispatchEvent(event);}catch(e){}},refreshInstructionsText:function(bundleKey,bundle){var numberOfSelectedProducts=this.getNumOfselectedProducts(bundleKey);var isMissingRequiredProducts=this.isMissingRequiredProducts(bundleKey,bundle);var content=this.getInstructionsText(bundle,numberOfSelectedProducts,isMissingRequiredProducts);$('[data-bndlr-key="'+bundleKey+'"] .bndlr-mnm-instructions-text').html(content);$('#bndlr-mnm-status-box[data-bndlr-bundle-key="'+bundleKey+'"] .bndlr-mnm-instructions-text').html(content);var tieredBundleNextDiscountText=bndlr.MixNMatch.getInstructionsTextTiered(bundle,numberOfSelectedProducts);$('[data-bndlr-key="'+bundleKey+'"] .bndlr-tiered-mnm-instructions-text .bndlr-tiered-mnm-instructions-text-inner').html(tieredBundleNextDiscountText);},getNumOfselectedProducts:function(bundleKey){var products=Library.MixAndMatchBundles.get(bundleKey);var productsCount=0;for(var key in products){if(products.hasOwnProperty(key)){productsCount+=products[key].quantity;}}
return productsCount;},isMissingRequiredProducts:function(bundleKey,bundle){var products=Library.MixAndMatchBundles.get(bundleKey);var numOfRequiredProducts=0;var containedRequiredProducts=0;for(var key in bundle.products){if(bundle.products.hasOwnProperty(key)){if(bundle.products[key].required===1){numOfRequiredProducts++;var productIsContained=false;for(var k in products){if(products.hasOwnProperty(k)){if(products[k].product_id==bundle.products[key].id){containedRequiredProducts++;productIsContained=true;break;}}}
if(productIsContained===false){return true;}}}}
if(containedRequiredProducts===numOfRequiredProducts){return false;}else{return true;}},showHideAddToBundleButtons:function(bundleKey){if(bndlr.MixNMatch.canAddMoreProducts(bundleKey)===false){widgetView.MixNMatch.hideAddtoBundleButtons(bundleKey);}else{$('[data-bndlr-key="'+bundleKey+'"] .bndlr-mnm-available-products .bndlr-product').each(function(key,el){var productId=$(el).attr('data-product-id');if(bndlr.MixNMatch.canAddMoreProduct(bundleKey,productId)===false){widgetView.MixNMatch.hideAddtoBundleButton(bundleKey,productId);}else{widgetView.MixNMatch.showAddtoBundleButton(bundleKey,productId);}});}},canAddMoreProducts:function(bundleKey){var bundleId=$('[data-bndlr-key="'+bundleKey+'"]').closest('[data-bundle]').attr('data-bundle');bundleId=parseInt(bundleId);var bundle=bndlr.getBundleById(bundleId);var numberOfSelectedProducts=this.getNumOfselectedProducts(bundleKey);if(typeof bundle.volume_discounts!=='undefined'&&bundle.volume_discounts.length>0){var tieredMixnMatchLimitReached=false;var volumeDiscount=bundle.volume_discounts[(bundle.volume_discounts.length-1)];var max=volumeDiscount.max_items;var rangeType=volumeDiscount.range_type;if(max=='0'){max=null;}
if(rangeType==='range'&&max!==''&&max!==null&&max<=numberOfSelectedProducts){tieredMixnMatchLimitReached=true;}
return!tieredMixnMatchLimitReached;}
if(bundle.minimum_requirements_n_max_products===null){return true;}
if(bundle.minimum_requirements_n_max_products>numberOfSelectedProducts){return true;}
return false;},getRemainingMaxProductsNum:function(bundleKey){var bundleId=$('[data-bndlr-key="'+bundleKey+'"]').closest('[data-bundle]').attr('data-bundle');bundleId=parseInt(bundleId);var bundle=bndlr.getBundleById(bundleId);var numberOfSelectedProducts=this.getNumOfselectedProducts(bundleKey);if(bundle.minimum_requirements_n_max_products===null){return null;}
if(bundle.minimum_requirements_n_max_products>numberOfSelectedProducts){return bundle.minimum_requirements_n_max_products*1-numberOfSelectedProducts*1;}
return 0;},canAddMoreProduct:function(bundleKey,productId){var bundleId=$('[data-bndlr-key="'+bundleKey+'"]').closest('[data-bundle]').attr('data-bundle');bundleId=parseInt(bundleId);var bundle=bndlr.getBundleById(bundleId);var products=Library.MixAndMatchBundles.get(bundleKey);var allowedTotalProductQuantity=bundle.products[productId].quantity;for(var key in products){if(products.hasOwnProperty(key)){if(bundle.product_level=='product'){if(products[key].product_id==productId){allowedTotalProductQuantity-=products[key].quantity;if(allowedTotalProductQuantity<=0){return false;}}}else{if(products[key].variant_id==productId){if(products[key].quantity>=bundle.products[productId].quantity){return false;}else{return true;}}}}}
if(allowedTotalProductQuantity>0){return true;}else{return false;}},removeFromBundle:function($this){var lineItemKey=$this.closest('[data-line-item-key]').attr('data-line-item-key');var bundleKey=$this.closest('[data-bndlr-key]').attr('data-bndlr-key');var products=Library.MixAndMatchBundles.get(bundleKey);if(typeof products[lineItemKey]!=='undefined'){delete products[lineItemKey];Library.MixAndMatchBundles.set(bundleKey,products);widgetView.drawSelectedProducts(bundleKey,products);if(Object.keys(products).length===0){widgetView.MixNMatch.fadeOutSelectedProducts(bundleKey);}
this.refreshDisplay(bundleKey);}},productsToString:function(products){var productsString='';for(var key in products){if(products.hasOwnProperty(key)){productsString+='p-'+products[key].product_id+'-'+products[key].variant_id+'='+products[key].quantity+'&';}}
return productsString;},addMixAndMatchBundleToCart:function($this,$outOfWidgetButton){var bundleKey=$this.closest('[data-bndlr-key]').attr('data-bndlr-key');var $bundleContainer=$this.closest('[data-bndlr-key]');var products=Library.MixAndMatchBundles.get(bundleKey);$this.addClass('bndlr-loading');if(typeof $outOfWidgetButton!=='undefined'){$outOfWidgetButton.addClass('bndlr-loading');}
if(typeof clientSpecifics['add_to_cart_control_mixnmatch']!=='undefined'){var canContinue=clientSpecifics['add_to_cart_control_mixnmatch'].trigger($this);}else{var canContinue=true;}
if(nav.isShopPage()===false){$this.addClass('bndlr-loading');var id=$this.closest('.bundler-target-element').attr('data-bundle');var name=$this.closest('[data-bundle-name]').attr('data-bundle-name');if(typeof window.bndlrPOSShowBundles==='undefined'){var quickCheckout=nav.getQuickCheckoutUrl(name,id);quickCheckout+='?mixnmatch=1&'+this.productsToString(products);window.location.href=quickCheckout;}else if(window.bndlrPOSShowBundles===true){document.dispatchEvent(new CustomEvent('bundlerPOS:add_products_to_cart',{bubbles:true,detail:{products:products}}));}
return true;}
if(canContinue){var queueKey='mixandmatchaddtocart';var items=[];for(var key in products){if(products.hasOwnProperty(key)){(function(){var variantId=products[key].variant_id;var quantity=products[key].quantity;var $el=$bundleContainer.find('.bndlr-mnm-selected-products .bndlr-product[data-line-item-key="'+key+'"]').first();var prodProperties=bndlr.getLineItemProperties($el);var props=JSON.parse(JSON.stringify(prodProperties));var sellingPlan=bndlr.getSellingPlan($el);items.push({id:variantId,quantity:quantity,properties:props,selling_plan:sellingPlan});})();}}
bndlr.addItemsToCart(items,queueKey,bundleKey,$this,$outOfWidgetButton);queue.process(queueKey);}},getInstructionsText:function(bundle,numberOfProducts,isMissingRequiredProducts){var content='';var remainingProducts=this.getNumberOfRemainingProducts(bundle,numberOfProducts);if(remainingProducts>0){content='Your bundle needs {{n}} more item(s).';content=content.replace('{{n}}',remainingProducts);}else if(isMissingRequiredProducts){content='Your bundle is missing the required product(s).';}
return content;},getInstructionsTextTiered:function(bundle,numberOfProducts){var content='';if(typeof bundle.volume_discounts!=='undefined'&&bundle.volume_discounts.length>1){var nextDiscount=this.getNextDiscount(bundle,numberOfProducts);var missingItemsCount=nextDiscount.min_items*1-numberOfProducts;if(missingItemsCount>0){var nextDiscountValue=nextDiscount.discount_value;var nextDiscountType=nextDiscount.discount_type;var discountUnit='';var savings='';if(nextDiscount.discount_type==='percentage'){discountUnit='%';savings=nextDiscountValue+discountUnit;}else{savings=bndlr.formatPrice(nextDiscountValue*100);}
var text='Add {{missing_items_count}} more item(s) to get up to {{discount_value}} OFF!';var keyValue={'missing_items_count':missingItemsCount,'discount_value':savings};content=GlobalUtility.liquidReplaceMulti(text,keyValue);}}
return content;},getNextDiscount:function(bundle,numberOfProducts){var nextDiscount={};for(var i=0;i<bundle.volume_discounts.length;i++){if(bundle.volume_discounts[i].min_items*1>numberOfProducts){nextDiscount=bundle.volume_discounts[i];i=bundle.volume_discounts.length;}}
return nextDiscount;},getNumberOfRemainingProducts:function(bundle,numberOfProducts){var remainingProducts=0;if(typeof bundle.volume_discounts!=='undefined'&&bundle.volume_discounts.length>0&&typeof bundle.volume_discounts[0]!=='undefined'&&typeof bundle.volume_discounts[0].min_items!=='undefined'){remainingProducts=bundle.volume_discounts[0].min_items-numberOfProducts;}else{remainingProducts=bundle.minimum_requirements_num-numberOfProducts;}
if(remainingProducts>0){return remainingProducts;}
return 0;},showHideStatusBox:function(){if($('.bndlr-mnm-add-to-cart-wrapper .bndlr-add-bundle-to-cart').first().is(':visible')===false){$('#bndlr-mnm-status-box').removeClass('bndlr-visibility-hidden').addClass('bndlr-visibility-visible');}else{var cartButton=$('.bndlr-mnm-add-to-cart-wrapper .bndlr-add-bundle-to-cart').first();var cbOffsetTop=cartButton.offset().top;var cbHeight=cartButton.height()+40;var windowHeight=$(window).height();var windowScrollTop=$(window).scrollTop();if((cbOffsetTop+cbHeight)>(windowHeight+windowScrollTop)||(cbOffsetTop)<(windowScrollTop)){$('#bndlr-mnm-status-box').removeClass('bndlr-visibility-hidden').addClass('bndlr-visibility-visible');}else{$('#bndlr-mnm-status-box').removeClass('bndlr-visibility-visible').addClass('bndlr-visibility-hidden');}}}},sectionedAddToBundle:function($this){var bundleKey=$this.closest('[data-bndlr-key]').attr('data-bndlr-key');var properties={};var $product=$this.closest('.bndlr-product');var variantId=$product.find('select.bndlr-select-variant[name="variant_id"] option:selected').val();var productId=$product.attr('data-product-id');var quantity=1;var quantityAttr=$product.attr('data-quantity');if(typeof quantityAttr!=='undefined'&&quantityAttr!==null&&quantityAttr*1>0){quantity=quantityAttr*1;}
var sectionId=$product.closest('[data-bundler-section]').attr('data-bundler-section');var numOfRemainingProduct=this.sectionedGetRemainingMaxProductsNum(bundleKey,sectionId);if(quantity>1&&numOfRemainingProduct!==null&&numOfRemainingProduct<quantity){quantity=numOfRemainingProduct;}
if(typeof variantId==='undefined'){var productTitle=$product.find('.bndlr-product-title').first().text();bndlr.showWarningMessage({responseJSON:{description:'Product: '+productTitle+' is not available.'}},bundleKey);}else{var sections=Library.SectionedBundlesProductsSelected.get(bundleKey);var section={};if(typeof sections[sectionId]!=='undefined'){section=sections[sectionId];}
var prodProperties=bndlr.getLineItemProperties($product);var props=JSON.parse(JSON.stringify(prodProperties));if(typeof section[variantId]!=='undefined'){section[variantId].quantity+=quantity;}else{section[variantId]={product_id:productId,variant_id:variantId,quantity:quantity,properties:props}}
sections[sectionId]=section;Library.SectionedBundlesProductsSelected.set(bundleKey,sections);widgetView.Sectioned.drawSelectedProducts(bundleKey,sections);try{var event=new CustomEvent("bndlr:sectioned_mixnmatch:product_added",{detail:{product_id:productId,variant_id:variantId,quantity:quantity,properties:props}});document.dispatchEvent(event);}catch(e){}}
this.sectionedRefreshDisplay(bundleKey);},goToNextUnfulfilledSection:function(bundleKey){var firstUnfulfilledSection=$('[data-bndlr-key="'+bundleKey+'"] .bndlr-sections-main-container .bndlr-sections-container [data-requirements-fulfilled="false"]').first();if(firstUnfulfilledSection.length>0){var sectionId=firstUnfulfilledSection.attr('data-bundler-section');$('[data-bndlr-key="'+bundleKey+'"] [data-bundler-active-section]').attr('data-bundler-active-section',sectionId*1);}},sectionedSelectSection:function($this){var sectionId=$this.closest('[data-bundler-section-status]').attr('data-bundler-section-status');$this.closest('[data-bndlr-key]').find('[data-bundler-active-section]').attr('data-bundler-active-section',sectionId);},sectionedSelectNextSection:function($this){var sectionId=$this.closest('[data-bundler-section]').attr('data-bundler-section');$this.closest('[data-bndlr-key]').find('[data-bundler-active-section]').attr('data-bundler-active-section',sectionId*1+1);try{var $sectionsContainer=$('.bndlr-sections-container');if($sectionsContainer.length===1){var sectionOffsetTop=$sectionsContainer.offset().top;var sectionHeight=$sectionsContainer.height()+40;var windowHeight=$(window).height();var windowScrollTop=$(window).scrollTop();if((sectionOffsetTop+sectionHeight)>(windowHeight+windowScrollTop)||(sectionOffsetTop)<(windowScrollTop)){$sectionsContainer[0].scrollIntoView({behavior:"smooth"});}}}catch(e){}},sectionedRemoveFromBundle:function($this){var lineItemKey=$this.closest('[data-line-item-key]').attr('data-line-item-key');var bundleKey=$this.closest('[data-bndlr-key]').attr('data-bndlr-key');var sectionId=$this.closest('[data-section-id]').attr('data-section-id');var sections=Library.SectionedBundlesProductsSelected.get(bundleKey);if(typeof sections[sectionId]!=='undefined'&&typeof sections[sectionId][lineItemKey]!=='undefined'){delete sections[sectionId][lineItemKey];}
Library.SectionedBundlesProductsSelected.set(bundleKey,sections);widgetView.Sectioned.drawSelectedProducts(bundleKey,sections);this.sectionedRefreshDisplay(bundleKey);},sectionedGetRemainingMaxProductsNum:function(bundleKey,sectionId){var bundleId=$('[data-bndlr-key="'+bundleKey+'"]').closest('[data-bundle]').attr('data-bundle');bundleId=parseInt(bundleId);var bundle=bndlr.getBundleById(bundleId);if(typeof bundle.sections[sectionId]==='undefined'){return 0;}
var numberOfSelectedProducts=this.sectionedGetNumOfSelectedProducts(bundleKey,sectionId);if(bundle.sections[sectionId].max_items===null||bundle.sections[sectionId].max_items===''){return null;}
if(bundle.sections[sectionId].max_items>numberOfSelectedProducts){return bundle.sections[sectionId].max_items*1-numberOfSelectedProducts*1;}
return 0;},sectionedGetMinimumProductsNum:function(bundleKey,sectionId){var bundleId=$('[data-bndlr-key="'+bundleKey+'"]').closest('[data-bundle]').attr('data-bundle');bundleId=parseInt(bundleId);var bundle=bndlr.getBundleById(bundleId);if(typeof bundle.sections[sectionId]==='undefined'){return 0;}
if(bundle.sections[sectionId].min_items===null){return null;}
return bundle.sections[sectionId].min_items;},sectionedGetNumOfSelectedProducts:function(bundleKey,sectionId){var sections=Library.SectionedBundlesProductsSelected.get(bundleKey);var productsCount=0;if(typeof sections[sectionId]!=='undefined'){var products=sections[sectionId];for(var key in products){if(products.hasOwnProperty(key)){productsCount+=products[key].quantity;}}}
return productsCount;},allRequirementsFulfilled(bundleKey,bundle){var allRequirementsFulfilled=true;for(var i=0;i<bundle.sections.length;i++){if(this.sectionedRequirementsFulfilled(bundleKey,i)===false){allRequirementsFulfilled=false;}else{}}
return allRequirementsFulfilled;},sectionedMarkRequirementsFulfilled(bundleKey,bundle){var allRequirementsFulfilled=true;for(var i=0;i<bundle.sections.length;i++){if(this.sectionedRequirementsFulfilled(bundleKey,i)===false){this.sectionedSetRequirementsFulfilled(bundleKey,i,'false');}else{this.sectionedSetRequirementsFulfilled(bundleKey,i,'true');}}},sectionedRefreshDisplay:function(bundleKey){var htmlId='#_bndl_'+bundleKey;var $element=$(htmlId);var bundleId=$element.closest('[data-bundle]').attr('data-bundle');bundleId=parseInt(bundleId);var bundle=bndlr.getBundleById(bundleId);for(var i=0;i<bundle.sections.length;i++){this.sectionedShowHideAddToBundleButtons(bundleKey,i);}
this.sectionedMarkRequirementsFulfilled(bundleKey,bundle);var allRequirementsFulfilled=this.allRequirementsFulfilled(bundleKey,bundle);if(allRequirementsFulfilled){this.sectionedFadeInAddToCartButton(bundleKey);}else{this.sectionedFadeOutAddToCartButton(bundleKey);}
var recreatedBundle=JSON.parse(JSON.stringify(bundle));var sections=Library.SectionedBundlesProductsSelected.get(bundleKey);var sectionsDiscountedProducts=Library.SectionedBundlesProducts.get(bundleId);var recreatedSections={};var recreatedProducts={};for(var s in sections){if(sections.hasOwnProperty(s)){var section=sections[s];for(var key in section){if(section.hasOwnProperty(key)){var variantId=section[key].variant_id;var productId=section[key].product_id;var quantity=section[key].quantity;var product={};product=sectionsDiscountedProducts[s][productId];var prd=JSON.parse(JSON.stringify(product));for(var i=0;i<product.variants.length;i++){if(product.variants[i].id==variantId){var variant=JSON.parse(JSON.stringify(product.variants[i]));prd.quantity=quantity;prd.variants=[product.variants[i]];}}
if(typeof recreatedSections[s]==='undefined'){recreatedSections[s]={};}
recreatedSections[s][key]=prd;recreatedProducts[productId]=prd;}}}}
recreatedSections=bndlr.sectionedModifyProductsPrices(recreatedBundle,recreatedSections);var totalPriceText=bndlr.sectionedGetTotalPriceText(recreatedBundle,recreatedSections);$element.find('.bndlr-sectioned-total-price').html(totalPriceText);this.sectionedRefreshInstructionsText(bundleKey,bundle);var productHandlesList=utils.getListOfValues(recreatedProducts,'handle');$('.bundler-target-element [data-bndlr-key="'+bundleKey+'"] .sealsubs-target-element-bundle').attr('data-product-handles',productHandlesList);if(typeof window.SealSubs!=='undefined'&&typeof window.SealSubs.refresh==='function'){window.SealSubs.refresh();}},sectionedShowHideAddToBundleButtons:function(bundleKey,sectionId){if(bndlr.sectionedCanAddMoreProducts(bundleKey,sectionId)===false){this.sectionedHideAddToBundleButtons(bundleKey,sectionId);}else{$('[data-bndlr-key="'+bundleKey+'"] [data-bundler-section="'+sectionId+'"].bndlr-sectioned-available-products .bndlr-product').each(function(key,el){var productId=$(el).attr('data-product-id');if(bndlr.sectionedCanAddMoreProduct(bundleKey,productId,sectionId)===false){bndlr.sectionedHideAddtoBundleButton(bundleKey,productId,sectionId);}else{bndlr.sectionedShowAddtoBundleButton(bundleKey,productId,sectionId);}});}},sectionedHideAddToBundleButtons(bundleKey,sectionId){$('[data-bndlr-key="'+bundleKey+'"] [data-bundler-section="'+sectionId+'"]').find('.bndlr-add-to-sectioned-bundle').addClass('bndlr-hidden');},sectionedHideAddtoBundleButton:function(bundleKey,productId,sectionId){$('[data-bndlr-key="'+bundleKey+'"] [data-bundler-section="'+sectionId+'"].bndlr-sectioned-available-products [data-product-id="'+productId+'"] .bndlr-add-to-sectioned-bundle').addClass('bndlr-hidden');},sectionedShowAddtoBundleButton:function(bundleKey,productId,sectionId){$('[data-bndlr-key="'+bundleKey+'"] [data-bundler-section="'+sectionId+'"].bndlr-sectioned-available-products [data-product-id="'+productId+'"] .bndlr-add-to-sectioned-bundle').removeClass('bndlr-hidden');},sectionedFadeInAddToCartButton:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-add-sectioned-bundle-to-cart.bndlr-disabled').removeClass('bndlr-disabled');$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-sectioned-total-price.bndlr-hidden').removeClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-bundle-checkout-warning.bndlr-hidden').removeClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.sealsubs-target-element-bundle').css({'display':'block'});},sectionedFadeOutAddToCartButton:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-add-sectioned-bundle-to-cart').addClass('bndlr-disabled');$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-sectioned-total-price').addClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.bndlr-bundle-checkout-warning').addClass('bndlr-hidden');$('[data-bndlr-key="'+bundleKey+'"]').find('.sealsubs-target-element-bundle').css({'display':'none'});},sectionedSetRequirementsFulfilled:function(bundleKey,sectionId,fulfilled){$('[data-bndlr-key="'+bundleKey+'"] .bndlr-sections-status-container .bndlr-sectioned-section-status[data-bundler-section-status="'+sectionId+'"]').attr('data-requirements-fulfilled',fulfilled);$('[data-bndlr-key="'+bundleKey+'"] .bndlr-sectioned-section[data-bundler-section="'+sectionId+'"]').attr('data-requirements-fulfilled',fulfilled);},sectionedCanAddMoreProduct(bundleKey,productId,sectionId){var bundleId=$('[data-bndlr-key="'+bundleKey+'"]').closest('[data-bundle]').attr('data-bundle');bundleId=parseInt(bundleId);var bundle=bndlr.getBundleById(bundleId);var sections=Library.SectionedBundlesProductsSelected.get(bundleKey);if(typeof sections[sectionId]==='undefined'){return true;}
if(typeof sectionId==='undefined'||typeof bundle.sections[sectionId]==='undefined'){return false;}
var products=sections[sectionId];var allowedTotalProductQuantity=bundle.sections[sectionId].products[productId].quantity;for(var key in products){if(products.hasOwnProperty(key)){if(products[key].product_id==productId){allowedTotalProductQuantity-=products[key].quantity;if(allowedTotalProductQuantity<=0){return false;}}}}
if(allowedTotalProductQuantity>0){return true;}else{return false;}},sectionedCanAddMoreProducts:function(bundleKey,sectionId){var remainingProductsCount=this.sectionedGetRemainingMaxProductsNum(bundleKey,sectionId);if(remainingProductsCount===null){return true;}
if(remainingProductsCount>0){return true;}
return false;},sectionedRequirementsFulfilled:function(bundleKey,sectionId){var minimumProductsCount=this.sectionedGetMinimumProductsNum(bundleKey,sectionId);var selectedProductsCount=this.sectionedGetNumOfSelectedProducts(bundleKey,sectionId);if(minimumProductsCount===null){return false;}
if(minimumProductsCount<=selectedProductsCount){return true;}
return false;},sectionedAddBundleToCart:function($this){var bundleKey=$this.closest('[data-bndlr-key]').attr('data-bndlr-key');var $bundleContainer=$this.closest('[data-bndlr-key]');var sections=Library.SectionedBundlesProductsSelected.get(bundleKey);$this.addClass('bndlr-loading');var canContinue=true;if(nav.isShopPage()===false){$this.addClass('bndlr-loading');var id=$this.closest('.bundler-target-element').attr('data-bundle');var name=$this.closest('[data-bundle-name]').attr('data-bundle-name');var allProducts=[];for(var sectionId in sections){var products=sections[sectionId];for(var key in products){if(products.hasOwnProperty(key)){(function(){var prodProperties=products[key].properties;var props=JSON.parse(JSON.stringify(prodProperties));props['_bundle_section_'+sectionId]='';allProducts.push({product_id:products[key].product_id,variant_id:products[key].variant_id,quantity:products[key].quantity,required:false,properties:props});})();}}}
if(typeof window.bndlrPOSShowBundles==='undefined'){var quickCheckout=nav.getQuickCheckoutUrl(name,id);quickCheckout+='?mixnmatch=1&'+this.productsToString(allProducts);window.location.href=quickCheckout;}else if(window.bndlrPOSShowBundles===true){document.dispatchEvent(new CustomEvent('bundlerPOS:add_products_to_cart',{bubbles:true,detail:{products:allProducts}}));}
return true;}
if(canContinue){var queueKey='sectionedaddtocart';var items=[];for(var sectionId in sections){var products=sections[sectionId];for(var key in products){if(products.hasOwnProperty(key)){(function(){var variantId=products[key].variant_id;var quantity=products[key].quantity;var $el=$bundleContainer.find('.bndlr-sections-status-container .bndlr-sectioned-section-status[data-bundler-section-status="'+sectionId+'"] .bndlr-sectioned-status-box-product[data-line-item-key="'+key+'"]').first();var prodProperties=products[key].properties;var props=JSON.parse(JSON.stringify(prodProperties));props['_bundle_section_'+sectionId]='';var sellingPlan=bndlr.getSellingPlan($el);items.push({id:variantId,quantity:quantity,properties:props,selling_plan:sellingPlan});})();}}}
bndlr.addItemsToCart(items,queueKey,bundleKey,$this);queue.process(queueKey);}},sectionedRefreshInstructionsText:function(bundleKey,bundle){var content=this.sectionedGetInstructionsText(bundleKey,bundle);$('[data-bndlr-key="'+bundleKey+'"] .bndlr-sections-status-container .bndlr-sectioned-instructions-text').html(content);},sectionedGetInstructionsText:function(bundleKey,bundle){if(typeof bundleKey!=='undefined'&&typeof bundle!=='undefined'){var allRequirementsFulfilled=this.allRequirementsFulfilled(bundleKey,bundle);if(allRequirementsFulfilled){return '';}}
var instructionsText='Add products from each section to enable the add to cart button.';return instructionsText;},getLineItemProperties:function($productEl){var properties={};try{$productEl.find('input[name^="properties"]').each(function(i,prop){var val=$(prop).val();var name=$(prop).attr('name').replace('properties[','').replace(']','');properties[name]=val;});}catch(e){bundlerConsole.log(e);}
var productId=$productEl.attr('data-product-id');$bundleContainer=$productEl.closest('[data-bndlr-key]');try{var $subsEl=$bundleContainer.find('.sealsubs-target-element-bundle').first();$subsEl.find('input[name^="properties"]').each(function(i,prop){var val=$(prop).val();var name=$(prop).attr('name').replace('properties[','').replace(']','');properties[name]=val;});if(typeof productId!=='undefined'){$subsEl.find('input[name^="'+productId+'_properties"]').each(function(i,prop){var val=$(prop).val();var name=$(prop).attr('name').replace(productId+'_properties[','').replace(']','');properties[name]=val;});}}catch(e){bundlerConsole.log(e);}
return properties;},getSellingPlan:function($productEl){var sellingPlan='';try{sellingPlan=$productEl.find('input[name^="selling_plan"]').val();}catch(e){bundlerConsole.log(e);}
return sellingPlan;},productsToString:function(products){var productsString='';for(var key in products){if(products.hasOwnProperty(key)){var prefix='';if(products[key].required){prefix='r-';}
productsString+=prefix+'p-'+products[key].product_id+'-'+products[key].variant_id+'='+products[key].quantity+'&';}}
return productsString;},addToCart:function($this){if(typeof clientSpecifics['add_to_cart_control']!=='undefined'){var canContinue=clientSpecifics['add_to_cart_control'].trigger($this.closest('.bundler-target-element'));}else{var canContinue=true;}
if(nav.isShopPage()===false){$this.addClass('bndlr-loading');var id=$this.closest('.bundler-target-element').attr('data-bundle');var name=$this.closest('[data-bundle-name]').attr('data-bundle-name');var products=[];$this.closest('.bndlr-container').find('.bndlr-product').each(function(key,el){var $el=$(el);var required=false;if($(el).attr('data-required')==='true'){required=true;}
var productId=$el.attr('data-product-id');var variantId=$el.find('select.bndlr-select-variant[name="variant_id"] option:selected').val();var quantity=$el.attr('data-quantity');products.push({product_id:productId,variant_id:variantId,quantity:quantity,required:required});});if(typeof window.bndlrPOSShowBundles==='undefined'){var quickCheckout=nav.getQuickCheckoutUrl(name,id);quickCheckout+='?'+this.productsToString(products);window.location.href=quickCheckout;}else if(window.bndlrPOSShowBundles===true){document.dispatchEvent(new CustomEvent('bundlerPOS:add_products_to_cart',{bubbles:true,detail:{products:products}}));}
canContinue=false;}
if(!canContinue){return false;}
if($this.attr('data-active')==='false'){bundlerConsole.log('One or more products in the bundle are unavailable.');return true;}
var bundleKey=$this.closest('[data-bndlr-key]').attr('data-bndlr-key');$this.addClass('bndlr-loading');var queueKey='addtocart';var properties={};var allProductsAreAvailable=true;var items=[];var cartItems=[];try{if($this.closest('[data-cart-items]').length>0){cartItems=JSON.parse($this.closest('[data-cart-items]').attr('data-cart-items'));}}catch(e){console.error(e);}
var preselectedProducts=[];try{if($this.closest('[data-bdnlr-preselected-products]').length>0){preselectedProducts=JSON.parse($this.closest('[data-bdnlr-preselected-products]').attr('data-bdnlr-preselected-products'));}}catch(e){console.error(e);}
var preselectedProductsRequired=[];try{if($this.closest('[data-bdnlr-preselected-products-required]').length>0){preselectedProductsRequired=JSON.parse($this.closest('[data-bdnlr-preselected-products-required]').attr('data-bdnlr-preselected-products-required'));}}catch(e){console.error(e);}
$this.closest('.bndlr-container').find('.bndlr-product').each(function(key,el){var $el=$(el);var prodProperties=bndlr.getLineItemProperties($el);for(var k in properties){if(properties.hasOwnProperty(k)){prodProperties[k]=properties[k];}}
var sellingPlan=bndlr.getSellingPlan($el);var variantId=$(el).find('select.bndlr-select-variant[name="variant_id"] option:selected').val();var quantity=$(el).attr('data-quantity');if($(el).attr('data-required')==='false'){if(preselectedProducts.length>0){for(var j=0;j<preselectedProducts.length;j++){if(preselectedProducts[j].variant_id==variantId){if(preselectedProducts[j].quantity==quantity){return;}}}}}else if($(el).attr('data-required')==='true'){if(preselectedProductsRequired.length>0){for(var j=0;j<preselectedProductsRequired.length;j++){if(preselectedProductsRequired[j].variant_id==variantId){if(preselectedProductsRequired[j].quantity==quantity){return;}}}}}
for(var k=0;k<cartItems.length;k++){if(cartItems[k].quantity>0&&cartItems[k].quantity<quantity&&cartItems[k].variant_id==variantId){quantity=quantity-cartItems[k].quantity;cartItems[k].quantity=0;if(Object.keys(prodProperties).length===0&&cartItems[k].properties!==null&&Object.keys(cartItems[k].properties).length>0){prodProperties=JSON.parse(JSON.stringify(cartItems[k].properties));}}}
if(typeof variantId==='undefined'){var productTitle=$(el).find('.bndlr-product-title').first().text();bndlr.showWarningMessage({responseJSON:{description:'Product: '+productTitle+' is not available.'}},bundleKey);allProductsAreAvailable=false;}else{var props=JSON.parse(JSON.stringify(prodProperties));items.push({id:variantId,quantity:quantity,properties:props,selling_plan:sellingPlan});}});bndlr.addItemsToCart(items,queueKey,bundleKey,$this);if(allProductsAreAvailable){queue.process(queueKey);}else{queue.cancel(queueKey);}},addItemsToCart:function(items,queueKey,bundleKey,$this,$outOfWidgetButton){queue.add(queueKey,function(){cart.addMultipleItemsToCart(nav.getRootUrl(true),items).done(function(response){queue.tick(queueKey);for(var n=0;n<items.length;n++){try{var productId=0;var variantId=items[n].id;for(var m=0;m<response.items.length;m++){if(response.items[m].variant_id==variantId){productId=response.items[m].product_id;break;}}
BndlrAnalytics.track('addtocart',productId,variantId,items[n].quantity);}catch(e){bundlerConsole.log(e);}}}).fail(function(r){$this.removeClass('bndlr-loading');if(typeof $outOfWidgetButton!=='undefined'){$outOfWidgetButton.removeClass('bndlr-loading');}
bndlr.showWarningMessage(r,bundleKey);queue.cancel(queueKey);});},function(){if($this.closest('.bundler-target-element[data-bdnlr-preselected-products]').length>0){$('.bndlr-add-to-cart').removeClass('bndlr-loading');widgetView.addToCartButton.showCheckmark($this);$(document).trigger('bndlr:bundle_added_to_cart');document.dispatchEvent(new CustomEvent('bndlr:bundle_added_to_cart'));$('body').trigger('added.ajaxProduct');cart.updateCart();}else{var urlLocale=nav.getUrlLocale();if(urlLocale!==''){window.location.href='/'+urlLocale+'/cart';}else{window.location.href='/cart';}}});},afterAddToCartAction:function(){$('body').trigger('added.ajaxProduct');cart.updateCart();try{if($('.sticky-cart-button').length===1){document.querySelector('.sticky-cart-button').click();}}catch(e){}
if($('#sidebar-cart').length>0||$('#slidecarthq').length>0||$('form.cart-drawer').length>0||$('#cart-popup').length>0||$('#mini-cart').length>0){setTimeout(function(){DiscountEstimator.showPopup();},1000);}else{DiscountEstimator.showPopup();}},closeMessage:function(){$('#bndlr-discount-message').animate({bottom:'-100%'},1000);},setCookie:function(cname,cvalue,exdays){var d=new Date();if(exdays>0){d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}else{document.cookie=cname+"="+cvalue+";path=/";}},getCookie:function(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";},showWarningMessage:function(response,bundleKey){this.stopAddtcAnimation(bundleKey);var c='This product was not added to cart.';c='undefined'==typeof response.responseJSON?$.parseJSON(response.responseText).description:response.responseJSON.description;if(c==='Cannot find variant'){c='The variant of one of the products can\'t be found. Shop owner can try to remove and add the product back to the bundle configuration to resolve this issue and make sure that the product is available in the online shop.';}
var warningHtml='<div class="bndlr-warning" style="display:none">'+c+'</div>';var warningHtmlDisplay='<div class="bndlr-warning">'+c+'</div>';$.each($('[data-bndlr-key="'+bundleKey+'"] .bndlr-warning'),function(d,e){$(e).remove()});var timeout=4000;if(c.length>50){timeout=Math.floor(c.length/50)*4000;}
var $sectionedTargetElement=$('[data-bndlr-key="'+bundleKey+'"] .bndlr-sections-status-container .bndlr-warning-container');if($sectionedTargetElement.length===1){$sectionedTargetElement.html(warningHtmlDisplay);$sectionedTargetElement.fadeIn(500,function(){setTimeout(function(){$sectionedTargetElement.fadeOut(500);},timeout)})}else{$('[data-bndlr-key="'+bundleKey+'"] .bndlr-products-container').first().append($(warningHtml)),$('[data-bndlr-key="'+bundleKey+'"] .bndlr-warning').fadeIn(500,function(){setTimeout(function(){$('[data-bndlr-key="'+bundleKey+'"] .bndlr-products-container').children('.bndlr-warning').first().fadeOut(500)},timeout)})}},stopAddtcAnimation:function(bundleKey){$('[data-bndlr-key="'+bundleKey+'"] .bndlr-add-to-cart').removeClass('bndlr-loading');}};var DiscountEstimator={showPopup:function(){if(nav.isShopPage()){this.calculateDiscounts();}},updateCartDiscountsTimeout:false,updateCartDiscounts:function(){if(this.updateCartDiscountsTimeout!==false){clearTimeout(this.updateCartDiscountsTimeout);}
this.updateCartDiscountsTimeout=setTimeout(function(){DiscountEstimator.calculateDiscounts(false);},410);},isEligibleForDiscount:'',runIfCanGetDiscount:function(successCallback,failCallback){if(this.isEligibleForDiscount===''){var self=this;var cartEndpoint='default';cart.get(cartEndpoint).done(function(cartData){var discountValue=self.calculateDiscount(cartData);if(discountValue>0){self.isEligibleForDiscount=true;successCallback();}else{self.isEligibleForDiscount=false;if(typeof failCallback==='function'){failCallback();}
setTimeout(function(){self.isEligibleForDiscount='';},400);}});}else{if(this.isEligibleForDiscount===true){successCallback();}else{if(typeof failCallback==='function'){failCallback();}}}},calculateDiscounts:function(showPopup){if(typeof showPopup==='undefined'){showPopup=true;}
var self=this;var cartEndpoint='default';cart.get(cartEndpoint).done(function(cartData){var updatedCart=self.updateCartWithDiscounts(cartData);try{var event=new CustomEvent("bundler:total_cart_values",{detail:updatedCart});document.dispatchEvent(event);}catch(e){console.log(e);}
var totalCompareAtValue=updatedCart.total_amount_original;var discountedTotal=updatedCart.total_amount_discounted;var cartDiscounted=updatedCart.discounted_cart_object;var discountValue=updatedCart.discount_value;var canGetFreeShippingDiscount=updatedCart.can_get_free_shipping_discount;if(showPopup===true){}
self.displayDiscountInCart(discountValue,cartData);if(typeof window.SLIDECART_SET_CART==='function'){if(discountValue>0){var localCartData=JSON.parse(JSON.stringify(cartData));localCartData.total_price=localCartData.original_total_price-discountValue;localCartData.total_discount=discountValue;window.SLIDECART_SET_CART(localCartData);}}});},updateCartWithDiscounts:function(cartData){if(this.containsSellingPlan(cartData)){}
if(typeof cartData.items!=='undefined'&&cartData.items.length>0){for(var d=0;d<cartData.items.length;d++){if(typeof cartData.items[d].original_line_item_id==='undefined'){cartData.items[d].original_line_item_id=d;}}}
var cartDiscounted=JSON.parse(JSON.stringify(cartData));var discountValue=this.calculateDiscount(cartData,cartDiscounted);var canGetFreeShippingDiscount=this.canGetFreeShippingDiscount(cartData);if(discountValue>0&&this.containsSellingPlan(cartData)){canGetFreeShippingDiscount=false;}
if(discountValue<=0){discountValue=0;}
var discountValueForEvent=discountValue;var discountedTotal=cartData.original_total_price-discountValue;var totalCompareAtValue=cartData.original_total_price;cartDiscounted.total_discount=discountValue;cartDiscounted.total_price=discountedTotal;var updatedCart={discount_value:discountValue,total_amount_original:totalCompareAtValue,total_amount_discounted:discountedTotal,discount_amount:(discountValueForEvent>0?discountValueForEvent:0),original_cart_object:JSON.parse(JSON.stringify(cartData)),discounted_cart_object:JSON.parse(JSON.stringify(cartDiscounted)),can_get_free_shipping_discount:canGetFreeShippingDiscount};return updatedCart;},containsSellingPlan:function(cartData){if(typeof cartData.items!=='undefined'){for(var i=0;i<cartData.items.length;i++){if(cartData.items[i].hasOwnProperty('selling_plan_allocation')){return true;}}}
return false;},setSellingPlanMultipliers:function(cartData){if(typeof cartData.items!=='undefined'){for(var i=0;i<cartData.items.length;i++){var multiplier=1;if(cartData.items[i].hasOwnProperty('selling_plan_allocation')&&cartData.items[i].selling_plan_allocation.hasOwnProperty('price')&&cartData.items[i].selling_plan_allocation.hasOwnProperty('per_delivery_price')&&cartData.items[i].selling_plan_allocation.price!==cartData.items[i].selling_plan_allocation.per_delivery_price){multiplier=cartData.items[i].selling_plan_allocation.price/cartData.items[i].selling_plan_allocation.per_delivery_price;}
cartData.items[i].multiplier=multiplier;}}
return cartData;},reducePricesAccordingToMultiplier:function(cartData){if(typeof cartData.items!=='undefined'){for(var i=0;i<cartData.items.length;i++){var multiplier=1;if(typeof cartData.items[i].multiplier==='number'){var multiplier=cartData.items[i].multiplier;if(multiplier>1){var price=cartData.items[i].price;price=price/multiplier;cartData.items[i].price=price;}}}}
return cartData;},addMultipliers:function(applicableCombos,cartData){for(var i=0;i<applicableCombos.length;i++){for(var pkey in applicableCombos[i]){if(applicableCombos[i].hasOwnProperty(pkey)){var product=applicableCombos[i][pkey];var lineItemId=product.line_item_id;if(typeof cartData.items[lineItemId]!=='undefined'&&typeof cartData.items[lineItemId].multiplier==='number'){var multiplier=cartData.items[lineItemId].multiplier;applicableCombos[i][pkey].multiplier=multiplier}}}}
return applicableCombos;},getMultiplier:function(applicableCombo){var multiplier=1;if(typeof applicableCombo.multiplier==='number'){multiplier=applicableCombo.multiplier;}
return multiplier;},canGetFreeShippingDiscount:function(cartData){var isEligibleForFreeShippingDiscount=false;cartData.items=cartData.items.sort(function(a,b){return a.quantity-b.quantity;});var $applicableBundles=this.getApplicableBundles(cartData);var applicableCombos=this.getApplicableCombosAll(cartData,$applicableBundles);var appliedCombos={};applicableCombosLoop:for(var i=0;i<applicableCombos.length;i++){for(var productId in applicableCombos[i]){if(applicableCombos[i].hasOwnProperty(productId)){var item=applicableCombos[i][productId];for(var k=0;k<$applicableBundles.length;k++){if($applicableBundles[k].id==item.bundle_id){var $bundle=$applicableBundles[k];k=$applicableBundles.length;}}
if(typeof $bundle.free_shipping!=='undefined'&&$bundle.free_shipping==='true'){isEligibleForFreeShippingDiscount=true;break applicableCombosLoop;}
if(typeof item.volume_discount!=='undefined'&&typeof item.volume_discount.free_shipping==='string'&&item.volume_discount.free_shipping==='true'){isEligibleForFreeShippingDiscount=true;break applicableCombosLoop;}}}}
return isEligibleForFreeShippingDiscount;},removeBundledItemsFromCart:function(cartItems){for(var k=0;k<bundles.length;k++){var combos=this.getApplicableCombosForBundle(cartItems,bundles[k]);}
return cartItems;},removeBundledItemsFromCartForScopedBundles:function(cartItems,scopedBundles){for(var k=0;k<scopedBundles.length;k++){var combos=this.getApplicableCombosForBundle(cartItems,scopedBundles[k]);}
return cartItems;},calculateDiscount:function(cartDataVar,cartDataReference){var cartData=JSON.parse(JSON.stringify(cartDataVar));cartData.items=cartData.items.sort(function(a,b){return a.quantity-b.quantity;});if(typeof cartDataReference!=='undefined'&&typeof cartDataReference.items!=='undefined'){cartDataReference.items=cartDataReference.items.sort(function(a,b){return a.quantity-b.quantity;});}
cartData=this.setSellingPlanMultipliers(cartData);cartData=this.reducePricesAccordingToMultiplier(cartData);var $applicableBundles=this.getApplicableBundles(cartData);var applicableCombos=this.getApplicableCombosAll(cartData,$applicableBundles);applicableCombos=this.addMultipliers(applicableCombos,cartData);var totalDiscountValue=0;var appliedCombos={};for(var i=0;i<applicableCombos.length;i++){var $bundle=null;var originalAmount=0;var totalBundleDiscountAmount=0;var totalDiscountedAmount=0;var discountPercent=0;for(var productId in applicableCombos[i]){if(typeof appliedCombos[i]=='undefined'){if(applicableCombos[i].hasOwnProperty(productId)){var initialDiscountAmount=totalDiscountValue;var item=applicableCombos[i][productId];if($bundle===null){for(var k=0;k<$applicableBundles.length;k++){if($applicableBundles[k].id==item.bundle_id){$bundle=$applicableBundles[k];k=$applicableBundles.length;}}
originalAmount=this.getTotalOriginalAmount(applicableCombos[i])/100;}
var discountType=$bundle.discount_type;var volumeDiscount=[];if(typeof item.volume_discount!=='undefined'){discountType=item.volume_discount.discount_type;volumeDiscount=item.volume_discount;$bundle.discount_type=item.volume_discount.discount_type;$bundle.percentage_value=item.volume_discount.discount_value;$bundle.fixed_amount_value=item.volume_discount.discount_value;$bundle.fixed_price_value=item.volume_discount.discount_value;}
var itemDiscountAmount=0;if(item.type==='discounted'){if(discountType==='fixed_amount'){var maxAmount=originalAmount;var ratio=(item.price/100*item.quantity)/originalAmount;itemDiscountAmount=ratio*(1*$bundle.fixed_amount_value);if(itemDiscountAmount<0){itemDiscountAmount=0;}
if((totalBundleDiscountAmount+itemDiscountAmount)>(1*$bundle.fixed_amount_value)){itemDiscountAmount=(1*$bundle.fixed_amount_value)-totalBundleDiscountAmount;}
totalBundleDiscountAmount+=itemDiscountAmount;}else if(discountType==='fixed_price'){var ratio=1-(1*$bundle.fixed_price_value)/originalAmount;itemDiscountAmount=item.price/100*item.quantity*ratio;var maxDiscount=originalAmount-(1*$bundle.fixed_price_value);if(itemDiscountAmount<0){itemDiscountAmount=0;}
if((totalBundleDiscountAmount+itemDiscountAmount)>maxDiscount){itemDiscountAmount=maxDiscount-totalBundleDiscountAmount;}
totalBundleDiscountAmount+=itemDiscountAmount;}else if(discountType==='percentage'){itemDiscountAmount=(Math.round(($bundle.percentage_value/100)*item.price)*item.quantity)/100;}else if(discountType==='products_discounts'){var productId=item.product_id;var variantId=item.variant_id;if($bundle.minimum_requirements==='sectioned_n_products'){if(typeof $bundle.sections[item.section_id].products[productId].variants[variantId].discount_amount!=='undefined'){var discountAmount=$bundle.sections[item.section_id].products[productId].variants[variantId].discount_amount*1;var itemPrice=item.price*item.quantity/100;discountAmount=discountAmount*item.quantity;if(itemPrice-discountAmount>=0){itemDiscountAmount=discountAmount;}else{itemDiscountAmount=itemPrice;}}}else{if(typeof $bundle.products[productId].variants[variantId].discount_amount!=='undefined'){var discountAmount=$bundle.products[productId].variants[variantId].discount_amount*1;var itemPrice=item.price*item.quantity/100;if($bundle.minimum_requirements=='n_products'){discountAmount=discountAmount*item.quantity;}
if(itemPrice-discountAmount>=0){itemDiscountAmount=discountAmount;}else{itemDiscountAmount=itemPrice;}}}}}
totalDiscountValue+=itemDiscountAmount*this.getMultiplier(item);var appliedDiscountAmount=totalDiscountValue-initialDiscountAmount;this.reduceCartItemPrice(cartDataReference,appliedDiscountAmount,item);}}}
if(totalDiscountedAmount>0&&discountPercent>0){discountPercent=Math.floor(discountPercent*100)/100;totalDiscountValue+=Math.floor(totalDiscountedAmount*discountPercent)/100;}}
totalDiscountValue=Math.round(totalDiscountValue*100)/100;totalDiscountValue=Math.round(totalDiscountValue*100);return totalDiscountValue;},reduceCartItemPrice:function(cart,discountAmount,item){var lineId=item.line_item_id;discountAmount=Math.round(discountAmount*100);if(typeof cart!=='undefined'&&typeof cart.items!=='undefined'&&typeof cart.items[lineId]!=='undefined'){var linePrice=cart.items[lineId].line_price-discountAmount;cart.items[lineId].line_price=linePrice;}},getTotalOriginalAmount:function(combo){var totalAmount=0;for(var productId in combo){if(combo.hasOwnProperty(productId)){if(typeof combo[productId]!=='undefined'&&combo[productId].type==='discounted'){totalAmount+=bndlr.getPrice(combo[productId].price)*combo[productId].quantity;}}}
return totalAmount;},canApplyBundle:function(items,bundle){var requiredProductsCounter=0;if(bundle.limit_for_customer_tags.length>0){var customerTags=customer.getCustomerTags();try{var customerIsTaggedWithCorrectTag=false;var requiredTags=bundle.limit_for_customer_tags;var customerTags=customer.getCustomerTags();if(customerTags===null||customerTags.length===0){if(typeof bundle.tags_additional_options==='string'&&bundle.tags_additional_options==='or_without_tags'){return true;}else{return false;}}
for(var l=0;l<customerTags.length;l++){for(var m=0;m<requiredTags.length;m++){if(requiredTags[m]===customerTags[l]){customerIsTaggedWithCorrectTag=true;l=customerTags.length;m=requiredTags.length;}}}
if(customerIsTaggedWithCorrectTag===false){return false;}}catch(e){}}
if(bundle.minimum_requirements==='volume_discounts'){return true;}
if(bundle.minimum_requirements==='sectioned_n_products'){return true;}
for(var productId in bundle.products){if(bundle.products.hasOwnProperty(productId)){var isInCart=false;var product=bundle.products[productId];for(var variantId in product.variants){if(product.variants.hasOwnProperty(variantId)){for(var i=0;i<items.length;i++){if(variantId==items[i].variant_id){if(bundle.minimum_requirements==='all_products'||bundle.minimum_requirements==='specific_products'){isInCart=true;}else if(bundle.minimum_requirements==='n_products'){isInCart=true;if(product.quantity<items[i].quantity){requiredProductsCounter+=product.quantity;}else{requiredProductsCounter+=items[i].quantity;}}}}}}
if(bundle.minimum_requirements==='all_products'||bundle.minimum_requirements==='specific_products'){if(isInCart===false){return false;}}}}
if(bundle.minimum_requirements==='n_products'){if(requiredProductsCounter>=bundle.minimum_requirements_num){return true;}else{return false;}}else{return true;}},getApplicableBundles:function(cartData){var $applicableBundles=[];for(var i=0;i<bundles.length;i++){if(this.canApplyBundle(cartData.items,bundles[i])){$applicableBundles.push(bundles[i]);}}
return $applicableBundles;},getApplicableCombosAll:function(cartData,$applicableBundles){var $applicableItems={};var applicableCombos=[];var cartCopy=JSON.parse(JSON.stringify(cartData));var cartItems=JSON.parse(JSON.stringify(cartData.items));for(var k=0;k<$applicableBundles.length;k++){var combos=this.getApplicableCombosForBundle(cartItems,$applicableBundles[k]);for(var i=0;i<combos.length;i++){var canApplyCombo=true;if(typeof combos[i]==='undefined'){continue;}
for(var productId in combos[i]){if(combos[i].hasOwnProperty(productId)){var canApplyProduct=false;var product=combos[i][productId];for(var j=0;j<cartCopy.items.length;j++){var lineItem=cartCopy.items[j];if(lineItem.variant_id==product.variant_id){if(lineItem.quantity>=product.quantity&&j==product.line_item_id){canApplyProduct=true;lineItem.quantity-=product.quantity;}}}
if(canApplyProduct===false){canApplyCombo=false;}}}
if(canApplyCombo){applicableCombos.push(combos[i]);}else{}}}
return applicableCombos;},getApplicableCombosForBundle:function(cartItems,bundle){var combos=[];var comboId=0;var loop=true;var productQuantityCount=0;if(bundle.volume_discounts!=='undefined'&&bundle.volume_discounts.length>0){var totalCartValue=0;if(bundle.volume_bundle_cart_value_use_all_products==='true'){for(var n=0;n<cartItems.length;n++){totalCartValue+=cartItems[n].price*cartItems[n].quantity;}}
for(var p=(bundle.volume_discounts.length-1);p>=0;p--){var volumeDiscount=bundle.volume_discounts[p];loop=true;while(loop){if(comboId>10000){loop=false;bundlerConsole.log('-- Terminating loop --');}
var minTotal=volumeDiscount.min_items;var max=volumeDiscount.max_items;var rangeType=volumeDiscount.range_type;var minCartValue=volumeDiscount.min_cart_value;var totalItemsInCombo=0;var totalProductQuantityInCombo={};var totalValueOfCombo=0;var maxQuantity=minTotal;if(rangeType==='range'&&max!==''&&max!==null){maxQuantity=max;}
if(rangeType==='min_limit_only'||rangeType==='min_cart_value'){maxQuantity=null;}
var originalMaxQuantity=maxQuantity;var requirementWasFulfilled=false;if(bundle.product_target_type==='all_products'){for(var j=0;j<cartItems.length;j++){var productId=cartItems[j]['product_id'];totalProductQuantityInCombo[productId]=0;for(var i=0;i<cartItems.length;i++){if(productId==cartItems[i]['product_id']){var apQuantity=cartItems[i].quantity;var applyCombo=false;if(apQuantity>0){if(maxQuantity!==null&&apQuantity>maxQuantity){apQuantity=maxQuantity;}
if(apQuantity>0){applyCombo=true;if(maxQuantity!==null){maxQuantity-=apQuantity;}}
if(applyCombo){if(typeof combos[comboId]==='undefined'){combos[comboId]={};}
var key=i;var origLineItem=i;if(typeof cartItems[i].orig_line_item_id!=='undefined'){origLineItem=cartItems[i].orig_line_item_id;}
combos[comboId][key]={product_id:productId,variant_id:cartItems[i].variant_id,line_item_id:i,orig_line_item_id:origLineItem,bundle_id:bundle.id,price:cartItems[i].price,quantity:apQuantity,discount_type:bundle.discount_type,type:'discounted',volume_discount:JSON.parse(JSON.stringify(volumeDiscount))};cartItems[i].quantity-=apQuantity;totalItemsInCombo+=apQuantity;totalProductQuantityInCombo[productId]+=apQuantity;totalValueOfCombo+=cartItems[i].price*apQuantity;}}}}
if(bundle.volume_bundle_combine_quantites!=='true'&&rangeType!=='min_cart_value'){if(totalProductQuantityInCombo[productId]<volumeDiscount.min_items*1){this.returnQuantityToCartItem(cartItems,combos[comboId]);combos[comboId]={};}else{requirementWasFulfilled=true;}
maxQuantity=originalMaxQuantity;totalProductQuantityInCombo[productId]=0;comboId++;}}}else{for(var productId in bundle.products){if(bundle.products.hasOwnProperty(productId)){var product=bundle.products[productId];var productVariants=bundle.products[productId].variants;totalProductQuantityInCombo[productId]=0;for(var variantId in productVariants){if(productVariants.hasOwnProperty(variantId)){for(var i=0;i<cartItems.length;i++){if(variantId==cartItems[i].variant_id){if(bundle.minimum_requirements==='tiered_n_products'&&this.bundleMatchesPreferredBundle(cartItems[i],bundle)===false){}else{var apQuantity=cartItems[i].quantity;var applyCombo=false;if(apQuantity>0){if(maxQuantity!==null&&apQuantity>maxQuantity){apQuantity=maxQuantity;}
if(apQuantity>0){applyCombo=true;if(maxQuantity!==null){maxQuantity-=apQuantity;}}
if(applyCombo){if(typeof combos[comboId]==='undefined'){combos[comboId]={};}
var key=i;var origLineItem=i;if(typeof cartItems[i].orig_line_item_id!=='undefined'){origLineItem=cartItems[i].orig_line_item_id;}
combos[comboId][key]={product_id:productId,variant_id:cartItems[i].variant_id,line_item_id:i,orig_line_item_id:origLineItem,bundle_id:bundle.id,price:cartItems[i].price,quantity:apQuantity,discount_type:bundle.discount_type,type:'discounted',volume_discount:JSON.parse(JSON.stringify(volumeDiscount))};cartItems[i].quantity-=apQuantity;totalItemsInCombo+=apQuantity;totalProductQuantityInCombo[productId]+=apQuantity;totalValueOfCombo+=cartItems[i].price*apQuantity;}}}}}}}
if(bundle.volume_bundle_combine_quantites!=='true'&&rangeType!=='min_cart_value'){if(totalProductQuantityInCombo[productId]<volumeDiscount.min_items*1){this.returnQuantityToCartItem(cartItems,combos[comboId]);combos[comboId]={};}else{requirementWasFulfilled=true;}
maxQuantity=originalMaxQuantity;totalProductQuantityInCombo[productId]=0;comboId++;}}}}
if(bundle.volume_bundle_combine_quantites==='true'&&rangeType!=='min_cart_value'){if(totalItemsInCombo<volumeDiscount.min_items*1){this.returnQuantityToCartItem(cartItems,combos[comboId]);combos[comboId]={};}else{requirementWasFulfilled=true;}
comboId++;}
if(rangeType==='min_cart_value'){if(bundle.volume_bundle_cart_value_use_all_products==='true'){if(totalCartValue>=minCartValue*100&&typeof combos[comboId]!=='undefined'&&Object.keys(combos[comboId]).length>0){requirementWasFulfilled=true;}else{this.returnQuantityToCartItem(cartItems,combos[comboId]);combos[comboId]={};}}else{if(totalValueOfCombo>=minCartValue*100){requirementWasFulfilled=true;}else{this.returnQuantityToCartItem(cartItems,combos[comboId]);combos[comboId]={};}}
comboId++;}
if(requirementWasFulfilled===false){loop=false;}}}}else{while(loop){if(comboId>10000){loop=false;bundlerConsole.log('-- Terminating loop --');}
if(bundle.minimum_requirements==='specific_products'){for(var productId in bundle.required_products){if(bundle.required_products.hasOwnProperty(productId)){var product=bundle.required_products[productId];var productVariants=bundle.required_products[productId].variants;cartItemsLoop:for(var i=0;i<cartItems.length;i++){for(var variantId in productVariants){if(productVariants.hasOwnProperty(variantId)){var quantity=product.quantity;if(variantId==cartItems[i].variant_id&&this.bundleMatchesPreferredBundle(cartItems[i],bundle)){var applyCombo=false;var apQuantity=cartItems[i].quantity;if(cartItems[i].quantity>=quantity){apQuantity=quantity;applyCombo=true;}
if(applyCombo){if(typeof combos[comboId]==='undefined'){combos[comboId]={};}
var key=i;var origLineItem=i;if(typeof cartItems[i].orig_line_item_id!=='undefined'){origLineItem=cartItems[i].orig_line_item_id;}
combos[comboId]['required_'+key]={product_id:productId,variant_id:cartItems[i].variant_id,line_item_id:i,orig_line_item_id:origLineItem,bundle_id:bundle.id,price:cartItems[i].price,quantity:apQuantity,discount_type:bundle.discount_type,type:'required'};cartItems[i].quantity-=apQuantity;break cartItemsLoop;}}}}}}}}
productQuantityCount=0;var remainingEachProductQuantity={};if(bundle.minimum_requirements==='n_products'){for(var productId in bundle.products){if(bundle.products.hasOwnProperty(productId)){var product=bundle.products[productId];var productVariants=bundle.products[productId].variants;if(typeof remainingEachProductQuantity[productId]==='undefined'){remainingEachProductQuantity[productId]=product.quantity;}
for(var variantId in productVariants){if(productVariants.hasOwnProperty(variantId)){if(productVariants[variantId].required===1){var quantity=product.quantity;for(var i=0;i<cartItems.length;i++){if(variantId==cartItems[i].variant_id&&this.bundleMatchesPreferredBundle(cartItems[i],bundle)){var applyCombo=false;var apQuantity=cartItems[i].quantity;if(cartItems[i].quantity>0){var remainingQuantity=remainingEachProductQuantity[productId];if(cartItems[i].quantity>remainingQuantity){apQuantity=remainingQuantity;}
if(bundle.minimum_requirements_n_max_products!==null&&bundle.minimum_requirements_n_max_products!==''&&(productQuantityCount+apQuantity)>bundle.minimum_requirements_n_max_products){apQuantity=bundle.minimum_requirements_n_max_products-productQuantityCount;}
if(apQuantity>0){quantity-=apQuantity;remainingEachProductQuantity[productId]-=apQuantity;productQuantityCount+=apQuantity;applyCombo=true;}
if(applyCombo){if(typeof combos[comboId]==='undefined'){combos[comboId]={};}
var key=i;var origLineItem=i;if(typeof cartItems[i].orig_line_item_id!=='undefined'){origLineItem=cartItems[i].orig_line_item_id;}
combos[comboId][key]={product_id:productId,variant_id:cartItems[i].variant_id,line_item_id:i,orig_line_item_id:origLineItem,bundle_id:bundle.id,price:cartItems[i].price,quantity:apQuantity,discount_type:bundle.discount_type,type:'discounted'};cartItems[i].quantity-=apQuantity;}}}}}}}}}}
if(bundle.minimum_requirements==='sectioned_n_products'){var sections=JSON.parse(JSON.stringify(bundle.sections));for(var sectionId=0;sectionId<bundle.sections.length;sectionId++){var products=bundle.sections[sectionId].products;var productSectionTotalQuantityCount=0;var copiedSection=sections[sectionId];for(var productId in products){if(products.hasOwnProperty(productId)){var product=products[productId];var productVariants=products[productId].variants;for(var variantId in productVariants){if(productVariants.hasOwnProperty(variantId)){for(var i=0;i<cartItems.length;i++){if(variantId==cartItems[i].variant_id&&this.bundleMatchesPreferredBundle(cartItems[i],bundle)&&this.itemMatchesPreferredSection(cartItems[i],sectionId)){var applyCombo=false;var apQuantity=cartItems[i].quantity;if(cartItems[i].quantity>0){var remainingQuantity=copiedSection.products[productId].quantity;if(cartItems[i].quantity>remainingQuantity){apQuantity=remainingQuantity;}
if(copiedSection.max_items!==null&&copiedSection.max_items!==''&&(productSectionTotalQuantityCount+apQuantity)>copiedSection.max_items){apQuantity=copiedSection.max_items-productSectionTotalQuantityCount;}
if(apQuantity>0){copiedSection.products[productId].quantity-=apQuantity;productSectionTotalQuantityCount+=apQuantity;applyCombo=true;}
if(applyCombo){if(typeof combos[comboId]==='undefined'){combos[comboId]={};}
var key=i;var origLineItem=i;if(typeof cartItems[i].orig_line_item_id!=='undefined'){origLineItem=cartItems[i].orig_line_item_id;key=i+'_'+sectionId;}
var totalItemQuantity=apQuantity;if(typeof combos[comboId]!=='undefined'&&typeof combos[comboId][key]!=='undefined'){totalItemQuantity+=combos[comboId][key].quantity;}
combos[comboId][key]={product_id:productId,variant_id:cartItems[i].variant_id,line_item_id:i,orig_line_item_id:origLineItem,bundle_id:bundle.id,price:cartItems[i].price,quantity:totalItemQuantity,discount_type:bundle.discount_type,type:'discounted',section_id:sectionId};cartItems[i].quantity-=apQuantity;}}}}}}}}}}
for(var productId in bundle.products){if(bundle.products.hasOwnProperty(productId)){var product=bundle.products[productId];var productVariants=bundle.products[productId].variants;if(typeof remainingEachProductQuantity[productId]==='undefined'){remainingEachProductQuantity[productId]=product.quantity;}
productsLoop:for(var variantId in productVariants){if(productVariants.hasOwnProperty(variantId)){var quantity=product.quantity;variantsLoop:for(var i=0;i<cartItems.length;i++){if(variantId==cartItems[i].variant_id&&this.bundleMatchesPreferredBundle(cartItems[i],bundle)){var applyCombo=false;var apQuantity=cartItems[i].quantity;if((bundle.minimum_requirements==='all_products'||bundle.minimum_requirements==='specific_products')&&cartItems[i].quantity>=quantity){apQuantity=quantity;applyCombo=true;}else if(bundle.minimum_requirements==='n_products'&&cartItems[i].quantity>0){var remainingQuantity=remainingEachProductQuantity[productId];if(cartItems[i].quantity>=remainingQuantity){apQuantity=remainingQuantity;}
if(bundle.minimum_requirements_n_max_products!==null&&bundle.minimum_requirements_n_max_products!==''&&(productQuantityCount+apQuantity)>bundle.minimum_requirements_n_max_products){apQuantity=bundle.minimum_requirements_n_max_products-productQuantityCount;}
if(apQuantity>0){quantity-=apQuantity;remainingEachProductQuantity[productId]-=apQuantity;productQuantityCount+=apQuantity;applyCombo=true;}}
if(applyCombo){if(typeof combos[comboId]==='undefined'){combos[comboId]={};}
if(bundle.minimum_requirements==='n_products'||bundle.minimum_requirements==='specific_products'){var key=i;}else{var key=productId;}
var origLineItem=i;if(typeof cartItems[i].orig_line_item_id!=='undefined'){origLineItem=cartItems[i].orig_line_item_id;}
combos[comboId][key]={product_id:productId,variant_id:cartItems[i].variant_id,line_item_id:i,orig_line_item_id:origLineItem,bundle_id:bundle.id,price:cartItems[i].price,quantity:apQuantity,discount_type:bundle.discount_type,type:'discounted'};cartItems[i].quantity-=apQuantity;if(bundle.minimum_requirements==='n_products'){}else{break productsLoop;}}}}}}}}
var appliedProducts=0;var appliedRequiredProducts=0;var appliedQuantity=0;var numOfRequiredMixNMatchProductsArray={};var numOfRequiredMixNMatchProductsAppliedArray={};if(bundle.minimum_requirements==='all_products'){for(var productId in bundle.products){if(bundle.products.hasOwnProperty(productId)){if(typeof combos[comboId]!=='undefined'&&typeof combos[comboId][productId]!=='undefined'){appliedProducts++;}}}}else if(bundle.minimum_requirements==='n_products'){for(var productId in bundle.products){if(bundle.products.hasOwnProperty(productId)){if(bundle.products[productId].required===1){numOfRequiredMixNMatchProductsArray[productId]=1;}
if(typeof combos[comboId]!=='undefined'){for(var id in combos[comboId]){if(combos[comboId].hasOwnProperty(id)){if(combos[comboId][id].product_id==productId){appliedQuantity+=combos[comboId][id]['quantity'];if(bundle.products[productId].required===1){numOfRequiredMixNMatchProductsAppliedArray[productId]=1;}}}}}}}}else if(bundle.minimum_requirements==='specific_products'){for(var productId in bundle.products){if(bundle.products.hasOwnProperty(productId)){if(typeof combos[comboId]!=='undefined'){for(var id in combos[comboId]){if(combos[comboId].hasOwnProperty(id)){if(combos[comboId][id].type==='discounted'&&combos[comboId][id].product_id==productId){appliedProducts++;}}}}}}
for(var productId in bundle.required_products){if(bundle.required_products.hasOwnProperty(productId)){if(typeof combos[comboId]!=='undefined'){for(var id in combos[comboId]){if(combos[comboId].hasOwnProperty(id)){if(combos[comboId][id].type==='required'&&combos[comboId][id].product_id==productId){appliedRequiredProducts++;}}}}}}}
if(bundle.minimum_requirements==='all_products'){if(appliedProducts!==Object.keys(bundle.products).length){loop=false;if(typeof combos[comboId]!=='undefined'&&Object.keys(combos[comboId]).length){this.returnQuantityToCartItem(cartItems,combos[comboId]);}
delete combos[comboId];}}else if(bundle.minimum_requirements==='n_products'){if(appliedQuantity<bundle.minimum_requirements_num||(bundle.minimum_requirements_n_max_products!==null&&bundle.minimum_requirements_n_max_products!==''&&appliedQuantity>bundle.minimum_requirements_n_max_products)||Object.keys(numOfRequiredMixNMatchProductsAppliedArray).length<Object.keys(numOfRequiredMixNMatchProductsArray).length){loop=false;if(typeof combos[comboId]!=='undefined'&&Object.keys(combos[comboId]).length){this.returnQuantityToCartItem(cartItems,combos[comboId]);}
delete combos[comboId];}}else if(bundle.minimum_requirements==='sectioned_n_products'){var sections=JSON.parse(JSON.stringify(bundle.sections));for(var sectionId=0;sectionId<sections.length;sectionId++){var products=sections[sectionId].products;var copiedSection=sections[sectionId];if(copiedSection.min_items!==null&&copiedSection.min_items!==''&&copiedSection.min_items>0){if(typeof combos[comboId]!=='undefined'){for(var id in combos[comboId]){if(combos[comboId].hasOwnProperty(id)){if(combos[comboId][id].section_id===sectionId){copiedSection.min_items-=combos[comboId][id].quantity;}}}}
if(copiedSection.min_items>0){sectionId=sections.length;this.returnQuantityToCartItem(cartItems,combos[comboId]);delete combos[comboId];loop=false;}}}}else if(bundle.minimum_requirements==='specific_products'){if(appliedProducts!==Object.keys(bundle.products).length||appliedRequiredProducts!==Object.keys(bundle.required_products).length){loop=false;if(typeof combos[comboId]!=='undefined'&&Object.keys(combos[comboId]).length){this.returnQuantityToCartItem(cartItems,combos[comboId]);}
delete combos[comboId];}}else{return false;}
if(bundle.discount_type==='fixed_price'&&typeof combos[comboId]!=='undefined'&&Object.keys(combos[comboId]).length){var totalValue=this.getTotalOriginalAmount(combos[comboId])
if(typeof window.bndlrPOS!=='undefined'){totalValue=totalValue*100;}
if(bundle.fixed_price_value*100>=totalValue){loop=false;this.returnQuantityToCartItem(cartItems,combos[comboId]);delete combos[comboId];}}
comboId++;}}
return combos;},returnQuantityToCartItem:function(cartItems,combo){for(var variantId in combo){if(combo.hasOwnProperty(variantId)){var product=combo[variantId];var lineItemId=product['line_item_id'];if(typeof cartItems[lineItemId]!=='undefined'){cartItems[lineItemId].quantity+=product.quantity;}}}},bundleMatchesPreferredBundle:function(cartItem,bundle){if(typeof window.bndlrPOS!=='undefined'){return true;}
return true;},itemMatchesPreferredSection:function(cartItem,sectionId){if(typeof window.bndlrPOS!=='undefined'){return true;}
var preferredSectionId=this.getSectionIdFromProperties(cartItem);if(preferredSectionId===0){return true;}else if(preferredSectionId===sectionId){return true;}
return false;},getBundleIdFromProperties:function(cartItem){if(typeof cartItem.properties!=='undefined'&&cartItem.properties!==null&&Object.keys(cartItem.properties).length>0){for(var key in cartItem.properties){if(cartItem.properties.hasOwnProperty(key)){if(key.indexOf('_bundler_')!==-1){var value=key.replace('_bundler_','');if(value*1==value){return value*1;}}}}}
return 0;},getSectionIdFromProperties:function(cartItem){if(typeof cartItem.properties!=='undefined'&&cartItem.properties!==null&&Object.keys(cartItem.properties).length>0){for(var key in cartItem.properties){if(cartItem.properties.hasOwnProperty(key)){if(key.indexOf('_bundle_section_')!==-1){var value=key.replace('_bundle_section_','');if(value*1==value){return value*1;}}}}}
return 0;},displayCartValue:function(value,cartData,canGetFreeShipping){if(typeof canGetFreeShipping==='undefined'){canGetFreeShipping=false;}
var currency=cartData.currency;if(value>0||canGetFreeShipping===true){var totalCompareAtValue=cartData.total_price;if($('#bndlr-discount-message').length===0){$('body').append('<div id="bndlr-discount-message" class="bndlr-go-to-checkout"></div>');}
var customText='';var popupTitle='You got';var popupSubtitle='{{savings}} OFF your order';var popupAndText='&';var popupFreeShipping='FREE SHIPPING';var popupQuestion='Apply discount and go to checkout?';var popupYes='Yes, please';var popupNo='No';var priceHtml=htmlUtils.moneySpan(bndlr.formatPrice(value,currency),currency,'bndlr-cart-price');popupTitle=popupTitle.replace('{{savings}}',priceHtml);popupSubtitle=popupSubtitle.replace('{{savings}}',priceHtml);popupQuestion=popupQuestion.replace('{{savings}}',priceHtml);popupYes=popupYes.replace('{{savings}}',priceHtml);popupNo=popupNo.replace('{{savings}}',priceHtml);var discountHtml='';if(value>0&&canGetFreeShipping){discountHtml='<div class="bndlr-message-discount-value">'+
popupSubtitle+
'<div class="bndlr-message-and-text">'+popupAndText+'</div>'+
popupFreeShipping+
'</div>';}else if(value>0){discountHtml='<div class="bndlr-message-discount-value">'+
popupSubtitle+
'</div>';}else if(canGetFreeShipping){discountHtml='<div class="bndlr-message-discount-value">'+
popupFreeShipping+
'</div>';}
$('#bndlr-discount-message').html(''+
'<div class="bndlr-message-title">'+popupTitle+'</div>'+
discountHtml+
customText+
'<div class="bndlr-message-question">'+popupQuestion+'</div>'+
'<div class="bndlr-message-options">'+
'<div class="bndlr-message-yes">'+popupYes+'</div>'+
'<div class="bndlr-message-no">'+popupNo+'</div>'+
'</div>'+
'<div class="bndlr-message-close"></div>'+
'');$('#bndlr-discount-message').animate({bottom:'10px'},1000);bndlr.convertCurrency('.bndlr-cart-price');}},displayDiscountInCart:function(value,cartData){var currency=cartData.currency;var cartDiscountSelector='.order-discount-card-wrapper, .Cart__Discount, .subtotal .cart_savings.sale';if(value>0&&$('#bundler-hide-discounts').length===0){$('body').append('<style id="bundler-hide-discounts">'+
cartDiscountSelector+' {'+
'display:none !important;'+
'}'+
'</style>');}else if(value<=0){$('#bundler-hide-discounts').remove();}
var displayOnDiscount=['.bundler-cart-show-on-discount'];var displayWhenNoDiscount=['.bundler-cart-show-on-0-discount'];var showDiscountsRegardless=false;if(value>0||showDiscountsRegardless){var selectorsConfig={'bundler-cart-price-info-container':['.bundler-cart-price-info-container','.cart-quickview__footer .cart-subtotal__price[data-cart-subtotal]','#cart_form .cart-breakdown .subtotal_amount strong','.cart__footer .cart__item-sub [data-subtotal]','.cart__item-sub [data-subtotal]','.cart__footer .grid .grid__item .grid.grid--full .grid__item.one-half.small--text-right','.cart__subtotal .subtotal ~ span.total-price[data-total-price]','.cart-subtotal__price, .cart__subtotal-price, .template-cart .cart-subtotal--price, .template-cart .cart-subtotal--price small:first-child, .cart-footer__subtotal, .cart-drawer__subtotal-price, .cart-recap__price-line-price','.cart__subtotal:not(.js-cart-subtotal)','#bk-cart-subtotal-price','.jas_cart_page .frm_cart_page .order-total .wh-original-cart-total','#revy-cart-subtotal-price','.wh-original-cart-total .wh-original-price .cart__subtotal','.wh-original-cart-total .wh-original-price','.Cart .Cart__Total span:not(.bndlr-cart-values):not(.wh-cart-total):not(.saso-cart-original-total):not(.saso-cart-total)','.cart form[action="/cart"] .cart__total__value','form[action="/cart"] div.cart .cart__row:last-of-type .grid .grid__item:last-of-type .table-cell:last-of-type p','div.cart-checkout .subtotal .price','form.cart .checkout .total span.price','.cart_totals tr.order-total .shopify-Price-amount.amount','.mini_cart_header .wrap-btcart .summary .total .price','form.cart-form .subtotal-block .subtotal .price','form.cart .cart__footer .grid .grid__item div span:nth-child(2)','form.cart-form .cart-totals .cart-price','#cart-summary .cart-original-total','#cartform .wholesale-original-cart-total','.off-canvas--viewport .off-canvas--main-content .layout--main-content .cart--root .cart--form .cart--footer .cart--total .cart--total--price:visible:first','.cart_totals tr.order-total td','#shopify-section-cart-template .total .price','.cart__footer .cart_tot_price','#shopping-cart #basket-right h4 span.money','.cart-totals .cart-price-info .cart-price span[data-cart-subtotal]','.ajaxcart__footer-total span.money:not(.bndlr-cart-values)','form.cart[action="/cart"] div.cart__row--table','div[data-section-id="cart-template"] #main-checkout-form .bottom-cart-total .cart__subtotal','#shopify-section-template--cart .cart-totals--wrapper #cart-total-final-price','#shopify-section-cart-template .cart-subtotal span.theme-money','.cart__container .cart__footer .cart__footer-right p.ff-heading.fs-heading-base','table.total-checkout .cart-amount','.cart .row.cart-info .cart-subtotal','.subtotal-row .subtotal .amount','.cart--total #xtotalPrice','form.cart .cart-tools .totals .price','#cartform .subtotal span.theme-money','#cartform .subtotal-row .subtotal-amount','form[action="/cart"] .grid .grid__item .cart__price','.main form.cart-form .cart__footer .cart__footer-total span.money:not(.bndlr-cart-values)','.ajaxcart-draw form.cart-form .cart__footer .cart__footer-total span.money:not(.bndlr-cart-values)','.cart__footer .totals .totals__subtotal-value','.ajax-cart__final-details .total .cart-original-total.cart-price','.cart-form .checkout-buttons .cart-totals-table .cart-total-price','.cart-total #subtotal td.subtotal-price','.cart__footer .cart__footer-right .ff-heading.fs-heading-4-base','.cart__recap-block .cart__total-container span.heading.h6 ~ span.heading.h6','.cart-popup__wrapper .product__price__box div.mb-0','#cart_form p.subtotal_amount','.woocommerce-Price-amount.amount','[class="#cart-checkout-subtotal-value"]','.cart-totals .limoniapps-discountninja-cart-subtotal-price','.subtotal-row .total__title + .total__amount','.cart-total-wrapper tr.cart-total-line--total td ~ td','.cart-template__checkout .cart-template__cart-total','.cart__row .grid .grid__item.one-half ~ .grid__item.one-half .h4.cart__subtotal','.sp-cart-original-total','.cart-drawer__footer .totals__subtotal-value','.cart__blocks .totals .totals__total-value','#cart-total-final-price','.totals__total-value','.totals__subtotal-valuecsapps-cart-original-total','.cart-footer .subtotal'],'bundler-cart-price-info-container-inline':['.bundler-cart-price-info-container-inline','.Drawer .Cart__Checkout.Button span[data-money-convertible]:not(.bndlr-cart-values), .cart_container form.js-cart_content__form li.cart_subtotal span.right','#ajaxifyDrawer form.cart-form .cart-subtotal--price small:first-child','header.cart-title .cart-title-total span.money','section.cartitems--container .cart-final-total .cart-subtotal span.money','form#cart_form .cart_subtotal span.right','form.main-cart-form .cart-total-wrapper .cart-total span.sign + span','#nav-shopping-cart-dialog .cart-total .nav-cart-dialog-total-amount','#total-cart-bottom','#total-cart-top','#site-cart #CartTotal span:first','#site-cart #CartTotal span:first, .site-box-content #CartTotal span:first','.js-cart_content__form .js-cart_subtotal span.right:first','#CartDrawer .cart__detail-info span[data-cart-subtotal]','#CartContainer .cart.ajaxcart .ajaxcart__subtotal p','.cart__header-content .cart-price-grid .js-cart-subtotal','.cart-checkout-field .cart-price-grid .js-cart-subtotal','#cartPopup .cart-popup__subtotal .cart-popup__subtotal-price','.footer-row .slidecart-subtotal','.drawer__footer .ajaxcart__price','#cart_form .subtotal-price','.jas-mini-cart .total .shopify-Price-amount .wh-original-cart-total','#CartDrawer .ajaxcart__footer .ajaxcart__subtotal','.bc-atc-slide-subtotal .bc-atc-slide-subtotal-price','#ajaxifyCart .cart-subtotal .cart-subtotal--price','.cart_subtotal.js-cart_subtotal > span.right','.mini-products-list .cart-subtotal-row .product-price','#qikify-stickycart-app .qsc-wrapper .qsc-cart__price-value','form.ajaxcart #common-subtotal .custom-ajaxcart__subtotal.text-right','.sp-cart .sp-dropdown-inner .sp-cart-total-price','form[action="/cart"] span.total-price.money','#CartDrawer #CartContainer .ajaxcart__footer .total span.cart-original-total','form#mini-cart .mini-cart__recap .mini-cart__recap-price-line > span:nth-child(2)','#header-cart-canvas .hc__total__price','#cartSlideoutWrapper #cart-price','#header .ajax-cart__subtotal.ajax-cart__details-row span[class=""]','.cart--total .cart--total--price','.tt-shopcart-col #grandtotal td','#dropdown-cart .has-items .summary .total .price','.minicart .minicart__footer .cart__total:nth-of-type(2)','#template-cart .cart .cart__summary .cart__total:nth-of-type(2)','.custom_checkout_right .custom_checkout_right_inner .sub_right','#header-cart .mini-products-list .total .product-price','#cartSidebarContainer .cart__subtotal .text-right.cart__subtotal-price > p','.cart-summary .cart-detail-info .tt-price','.cart-total-col .cart-tt-price:visible','.go-cart-drawer__subtotal-price','.cart-form .cart-total-price .cart-total-price__value','.cart-mini-subtotal .cart-mini-subtotal-value','#slidedown-cart .summary .total .price','#header .ajax-cart__form .ajax-cart__subtotal span.money','#mobile-header .ajax-cart__form .ajax-cart__subtotal span.money','#cart-summary .wholesale-cart-total','.Drawer__Footer .Cart__Subtotal h4','form[action="/cart"] .cart-list .cart-list__footer-width-container span[style="float: right"]','#CartPageForm .cart__item-sub.cart__item-row [data-subtotal]','.satcb-cs-footer-subtotal .satcb-cs-total','.cart__footer.text-center .cart__footer-page div.cart__item-row span[data-subtotal]','#cart-subtotal','.cart-window-body .cart-total .cart-subtotal .cart-total-price','#cart-content .cart-item-total-price','span[rv-html="cart.total_price | money"]','.widget_shopping_cart .widget_shopping_cart_content .total .shopify-Price-amount.amount','.rebuy-cart__flyout-subtotal-amount','.drawer__inner .drawer__inner-section .cart__subtotal','.quick-cart__total span ~ span[data-subtotal]','.addcart-modal-subtotal span.money','.ajaxcart__footer-total [data-cart-subtotal]','#CartTotal strong','.grouped-bottom .total .price','.groued-info .total .price','.cart-popup-action .total .price','.mini_cart_footer .cart_tot_price','form.cart-form .right-col .total .price','[data-cart-subtotal-price]','.title-price .cart_tot_price','.main form.cart-form .cart__footer .cart__footer-total span.money:not(.bndlr-cart-values)','.saw-cart-original-total [data-cart-subtotal-price]','.mini-product-item .total_price .product-total-cart','.gt_checkout_content .number_total','.check_out_content .number_total','.gt_box_checkout_content .gt_text_total','.Drawer__Footer .Subtotal span[data-money-convertible]:not(.bndlr-cart-values)','.subtotal-wrapper .limoniapps-discountninja-cart-subtotal-price','#mini-cart-subtotal','.cart__footer__value','[x-html="formatMoney(state.total_price)"]','.cart-totals .cart-price','.cart-mini-total .mini-cart-total','.mu-subtotal span:nth-of-type(2)','.cart-summary__line [data-cart-total-price]','.price-total-box .slider-cart-subtotal-wrapper .ot_ajax_cart__subtotal_new','.cart .checkout__button [data-cart-final]','#cart-subtotal-value','.Drawer__Footer button.Cart__Checkout span + span.Button__SeparatorDot + span','.drawer__footer .totals .totals__subtotal-value','.mini-cart__inner .mini-cart__recap .mini-cart__recap-price-line1 > span ~ span:last-of-type','.cart__aside .cart__total .cart__total__price','.cart-subtotal .cart-subtotal-label ~ span.theme-money','.cart-summary__subtotal .cart-summary__subtotal-label ~ .amount','[data-cart-prices] .t4s-cart__totalPrice','.Cart__Footer .Cart__Recap .Cart__Total > span:first-of-type','.cart__grandtotal .jsPrice','.icart-final-total .icart-cart-price','.cart-drawer__details .cart-drawer__cart-total','.mini-cart__total .mini-cart__label + span.amount','.cart-collaterals .cart-subtotal td > span.price > span.amount','.cart-totals .cart-total-grandtotal .cart-total-value','.previewCartTotals.total .previewCartTotals-value','.mini-cart-action .price-content .shopping-cart__total','.cart__aside .cart__total .cart__total__money','.cart-mini-subtotal .cart-mini-subtotal-value','header#header [data-cart-form="mini-cart"] .cart_items ~ ul .js-cart_subtotal span.right','.cart-cells .cart__collaterals .cart__totals tr.cart__total > th ~ td.text-right .price.weight-600','.cstm_total_drawer[data-total]','.quick-cart__footer-subtotal h3.ff-body ~ span.ff-body','.cart__footer-subtotal h3.ff-body ~ span.ff-body','.drop-down-cart-footer .subtotal-price','.cart-drawer-total .cart-drawer-total-value','.cart__total .cart__total__price','.totals-block.grand-total-block span.value','.mini-cart__footer .subtotal .totals__subtotal-value','.mini-cart__drawer-footer .totals ~ .priceflags > span','#cart .js-cart-subtotal','.tt-cart-total-row .tt-cart-total-price','form[action="/cart"] #grandtotal td','.wsg-cart-subtotal','.subtotalPrice','.docapp-est-total [data-est-total]','#CartPage .cart-formbox .cart-total','#CartTotalPrice .transcy-money','loess-cart-drawer-checkout .transcy-money','.tdf-cart-total-parent','#mini__cart .bottom-cart-box .list-unstyled .totle-price strong.h4','.cart-total-details .cart-total-item [data-cart-total-price]','.page-wrap .total .total-price .cart-original-total.cart-price','#mini-cart .total .total-price .cart-original-total.cart-price','.cart-drawer__footer [data-merge="footer"] .subtotal .theme-money','#cart-info form.ajaxcart .ajaxcart__footer label ~ span.money','#cart__popup_total','.boost-pfs-subtotal .boost-pfs-subtotal-price','.shopping-car_total-tilte .total_price','.cart-subtotal th ~ th span.price span.amount','.saso-cart-original-total','.cart-total .total-amount .amount.total-price','.previewCartTotals .previewCartTotals-value','#CartTotalPrice','form.cart__summary .justify-between.totals span ~ span:last-of-type strong','.cd-cart-subtotal-amount','.cart-total-price__value','.page__header--desktop .minicart__total .jsPrice','.page__header--mobile .minicart__total .jsPrice','#upezCart .pplr_subtotal_price','#upezCart .upez--subtotal_price','.upcart-checkout-button-container .UpcartDesignSettings__button.upcart-checkout-button','.cart-recap .nvd_priceS','.cart-form__totals .h-stack.gap-4 + .h-stack.gap-4.justify-between span.h5 + span.h5','.icart-pg-subTotal-flex .icart-pg-discount-price','.cart-mini-subtotal-value','.cart-drawer-subtotal__price','[name="checkout-route-1"] .cart-drawer__button-price','.cart-drawer__button-price','.wh-original-cart-total','.subtotal #cart__total_price'],'bundler-cart-total-original':['.bundler-cart-total-original','#basket-right .subtotal .subtotal-price','#updateform .sp-shopcart-box tr#subtotal td','[data-attribute="cartSubTotal"] .gt_label-sub-total ~ .gt_number_sub_total','.hs-mount-sub-total .hs_subtotal_compare_at_price','.wcp-original-cart-total'],'bundler-cart-total-discounted':['.bundler-cart-total-discounted','#toolbar .toolbar-cart .current-cart .beside-svg .theme-money, header #CartButton #CartCost','.head_cart #CartCost','.cart-count .cartTotalSelector','.header--container .cart--external--total-price','#ajaxifyCart .total .total-price','#basket-right .total .total-price','#updateform .sp-shopcart-box tr#grandtotal td','.total_price #total_price','.large--hide .cart-item-count-header.cart-item-count-header--total','.medium--hide .cart-item-count-header.cart-item-count-header--total','.cart-item-count-header.cart-item-count-header--total','.cart-info .cart-summary__total span.product-price','.summary-total .product-price .current-price','.cart-cost[data-cart-total-value]','#cart-subval .cartDrawer','[data-attribute="cartTotalBox"] .gt_label-total ~ .number_total','[data-attribute="cartTotal"] .gt_label-total ~ .number_total','.hs-mount-sub-total .hs_subtotal_amount','.wcp-cart-total','tr.order-total td .amount #bk-cart-subtotal-price','form[action="/cart"] strong[x-text*="cart.total_price"]','.cart-summary-total [data-cart-total]'],'bundler-cart-discount-value':['.bundler-cart-discount-value','.discounts_normal #discounts_price','.cart-info .cart-summary:nth-child(2) .product-price','.mu-savings span:nth-of-type(2)','.card-body .cart_savings-wrapper-text','form[action="/cart"] span[x-text*="cart.total_discount"]'],'bundler-cart-discount-value-no-minus':['.bundler-cart-discount-value-no-minus','.card__section .cart-recap__amount-saved span','.cart-summary .summary-item + .summary-item .vnd-cart-discount','#total_dis','.Main__Cart .Cart__Checkout #cart-drawer-price','[data-attribute="cartSave"] .gt_label-save ~ .gt_cart-save .gt_number-save','.js-cart-discount [data-cart-discount]'],'bundler-cart-discount-percent':['.bundler-cart-discount-percent'],'bundler-cart-discount-percent-with-sign':['bundler-cart-discount-percent-with-sign','[data-attribute="cartSave"] .gt_label-save ~ .gt_cart-save .gt_percent-save .gt_percent-number--save']};if(typeof clientSpecifics['cart_selectors']!=='undefined'){selectorsConfig=clientSpecifics['cart_selectors'].modify(selectorsConfig);}
var selectorsValues={};var discountedTotal=cartData.original_total_price-value;var totalCompareAtValue=cartData.original_total_price;var discountedTotalFormatted=bndlr.formatPrice(discountedTotal,currency);var discount=bndlr.formatPrice(value,currency);var cartTotal=bndlr.formatPrice(totalCompareAtValue,currency);var currencyAttr='data-currency-'+currency.toLowerCase();var plainDiscountHtml=htmlUtils.moneySpan(discount,currency.toLowerCase(),'bndlr-minus bndlr-cart-values bndlr-cart-discount-value');var discountHtml='<br />'+plainDiscountHtml;var discountedTotalHtml='<br />'+htmlUtils.moneySpan(discountedTotalFormatted,currency.toLowerCase(),'bndlr-cart-values bndlr-cart-discounted-value');var discountedInlineTotalHtml=htmlUtils.moneySpan(discountedTotalFormatted,currency.toLowerCase(),'bndlr-cart-values');var cartTotalHtml=htmlUtils.moneySpan(cartTotal,currency.toLowerCase(),'bndlr-cart-values bndlr-cross-out bndlr-cart-orig-price');var cartTotalNonCrossedOutHtml=htmlUtils.moneySpan(cartTotal,currency.toLowerCase(),'bndlr-cart-values bndlr-cart-orig-price');var priceInfoContainerValue=cartTotalHtml;priceInfoContainerValue+=discountHtml;priceInfoContainerValue+=discountedTotalHtml;selectorsValues['bundler-cart-price-info-container']=priceInfoContainerValue;var priceInfoContainerInlineValue=htmlUtils.moneySpan(cartTotal,currency.toLowerCase(),'bndlr-cart-values bndlr-cart-values-old-price bndlr-cross-out')+'&nbsp;';priceInfoContainerInlineValue+=discountedInlineTotalHtml;selectorsValues['bundler-cart-price-info-container-inline']=priceInfoContainerInlineValue;var cartTotalDiscountedValue=htmlUtils.moneySpan(discountedTotalFormatted,currency.toLowerCase(),'bndlr-cart-values');selectorsValues['bundler-cart-total-discounted']=cartTotalDiscountedValue;selectorsValues['bundler-cart-discount-value']=plainDiscountHtml;selectorsValues['bundler-cart-discount-value-no-minus']=htmlUtils.moneySpan(discount,currency.toLowerCase(),'bndlr-cart-values bndlr-cart-discount-value');selectorsValues['bundler-cart-discount-percent']=Math.round((totalCompareAtValue-discountedTotal)/totalCompareAtValue*100,2);selectorsValues['bundler-cart-discount-percent-with-sign']=Math.round((totalCompareAtValue-discountedTotal)/totalCompareAtValue*100,2)+'%';var discountValue=value;if(value<=0){selectorsValues['bundler-cart-total-original']=cartTotalNonCrossedOutHtml;}else{selectorsValues['bundler-cart-total-original']=cartTotalHtml;}
if(typeof clientSpecifics['cart_discounts']!=='undefined'){clientSpecifics['cart_discounts'].beforeMutation();}
cartChangeDetector.beforeMutation();var previousSelectors=[];for(var selector in selectorsValues){if(selectorsValues.hasOwnProperty(selector)){var value=selectorsValues[selector];var selectors=selectorsConfig[selector];selectorsLoop:for(var i=0;i<selectors.length;i++){if($(selectors[i]).length>0){if(selectors[i].indexOf('.slidecart-subtotal')!==-1){if(typeof window.SLIDECART_SET_CART==='function'){continue;}}
var $tElement=$(selectors[i]).last();for(var e=0;e<previousSelectors.length;e++){if($tElement.hasClass(previousSelectors[e])){break selectorsLoop;}}
if($tElement.hasClass('bndlr-cart-info-override')){if(selectors[i]!=='.'+selector){break selectorsLoop;}}
if($tElement.hasClass('bndlr-cart-values')){continue;}
$(selectors[i]).last().html(value);$(selectors[i]).last().addClass(selector);if(selector==='bundler-cart-price-info-container'){$(selectors[i]).removeAttr('data-money-convertible');}
if(selector==='bundler-cart-discount-value'){$(selectors[i]).last().closest('.bundler-cart-discount-value--parent').addClass('bundler-has-discount');}
if(selector==='bundler-cart-discount-value-no-minus'){$(selectors[i]).last().closest('.bundler-cart-discount-value-no-minus--parent').addClass('bundler-has-discount');}
if(selector==='bundler-cart-price-info-container'){if($tElement.closest('.mini-cart').length===0){break selectorsLoop;}}}}
previousSelectors.push(selector);}}
if(discountValue>0){for(var z=0;z<displayOnDiscount.length;z++){var displaySelector=displayOnDiscount[z];if($(displaySelector).length>0){$(displaySelector).show();}}
for(var z=0;z<displayWhenNoDiscount.length;z++){var displaySelector=displayWhenNoDiscount[z];if($(displaySelector).length>0){$(displaySelector).hide();}}}else{for(var z=0;z<displayOnDiscount.length;z++){var displaySelector=displayOnDiscount[z];if($(displaySelector).length>0){$(displaySelector).hide();}}
for(var z=0;z<displayWhenNoDiscount.length;z++){var displaySelector=displayWhenNoDiscount[z];if($(displaySelector).length>0){$(displaySelector).show();}}}
bndlr.convertCurrency('.bndlr-cart-values');if(typeof clientSpecifics['cart_discounts']!=='undefined'){clientSpecifics['cart_discounts'].afterMutation();}
cartChangeDetector.afterMutation();}else{for(var z=0;z<displayOnDiscount.length;z++){var displaySelector=displayOnDiscount[z];if($(displaySelector).length>0){$(displaySelector).hide();}}
for(var z=0;z<displayWhenNoDiscount.length;z++){var displaySelector=displayWhenNoDiscount[z];if($(displaySelector).length>0){$(displaySelector).show();}}}}};var GlobalUtility={setObserver:function(keySelector,customCallback){if(typeof IntersectionObserver!=='undefined'){var options={root:null,rootMargin:'0px 0px 0px 0px',threshold:.25}
var callback=function(entries,observer){for(var i=0;i<entries.length;i++){var entry=entries[i];if(entry.isIntersecting||entry.boundingClientRect.top<0){observer.unobserve(entry.target);customCallback();}}};var observer=new IntersectionObserver(callback,options);var target=document.querySelector(keySelector);if(target!==null){observer.observe(target);}}else{customCallback();}},liquidReplaceMulti:function(string,keyValue){for(var key in keyValue){if(keyValue.hasOwnProperty(key)){string=this.liquidReplace(string,key,keyValue[key]);}}
return string;},liquidReplace:function(string,key,value){var regex=new RegExp("{{\\s*"+key+"\\s*}}",'i');string=string.replace(regex,value);return string;}};var VolumeDiscounts={targetElementSelectors:{'.bundler-target-element-volume-discounts-visible-only':{'action':'prepend','visible_only':true},'#bundler-target-element-volume-discounts':{'action':'prepend'},'.bundler-target-element-volume-discounts':{'first_only':true,'action':'prepend'},'form[action="/cart/add"].pf-product-form button[data-checkout="checkout"][data-pf-type="ProductATC"]':'after','form.AddToCartForm  .module-wrap.gf_gs-button-check-button[data-key="dynamic-button"]':'append','.buy-buttons-row form[action*="/cart/add"]':'after','.gryffeditor form.AddToCartForm .item-content > .gf_row > div.gf_column + div.gf_column':'append','.product__section--buttons.product-add form':'after','form[action*="/cart/add"]':'after','#add-to-cart-product form[action*="/cart/add"]':'after','form#cart-form[action*="/cart/add"]':'after','form.product-form[action*="/cart/add"]':'after','.product-info #wait_li_form':'after','form.productForm[action*="/cart/add"]':'after','form#AddToCartForm--product-template':'after','form[action*="/cart/add"][data-type="add-to-cart-form"][id*="__main"]':'after','form.shopify-product-form':'after','form#AddToCartForm':'after','#shopify-section-product-template form#product-form':'after','.product-page-info form[action*="/cart/add"]':'after','.product-form-container form.shopify-product-form':'after','#ProductSection-product-template-default form#add-to-cart-form':'after','.modal-wrapper.is-open form.product-form[data-product-handle]':'after','[data-pf-type="Section"]:not(.pf-hide) form.pf-product-form button[data-pf-type="ProductATC"]':{'closest':'[data-pf-type="Block"]','action':'after'},'form.et-product-form-product-template .et-product-single__description':'before','form.et-product-form-product-template':'after','form.product-single__form':'after','.product_section form.shopify-product-form':'after','form[data-type="add-to-cart-form"]':'after','.product__info-wrapper form[data-type="add-to-cart-form"]':'after','.product-info form[action*="/cart/add"]':'after','#shopify-section-template--product form#add-to-cart-form':'after','.product-shop form#add-to-cart-form':'after','.product-page--info-box--container form.product-form--container':'after','.product-detail__type + form[action="/cart/add"], .product-detail__title-area + form[action="/cart/add"]':'after','form#add-to-cart-form':'after','#product-info form.product-action[action*="/cart/add"]':'after','.product-details form[action*="/cart/add"].product-form':'after','form[action="/cart/add"].ProductForm':'after','#ProductSection .product-single__hero form[action="/cart/add"].product-form--wide':'after','.product-form form[data-type="add-to-cart-form"]':'after','.product__info form.product__form':'after','[itemtype="http://schema.org/Offer"] ~ .container ~ .product-detail form[action="/cart/add"]':'after','form[action*="/cart/add"][data-section="template-product"]':'after','form[action*="/cart/add"]':'after','form#cart-form_ppr[action*="/cart/add"]':'after','.Product__Info form.ProductForm':'after','.product__info .product-form':'after','.product-page--block[data-block-type="buy-buttons"]':'after','.sf-prod__info form[action="/cart/add"]':'after','form[action*="/cart/add"]:first':'after','form.product-form--payment-button':'after','product-form.product-form':'after','form[id*="AddToCartForm"][action*="/cart/add"]':'after','.product-form form[action*="/cart/add"][is="product-form"]':'after','form#form_buy[action*="/cart/add"]':'after',},showVolumeDiscountBundle:function(removePreviousWidgets){if(typeof removePreviousWidgets==='undefined'){removePreviousWidgets=false;}
var bundleFound=false;var self=this;$('.bundler-target-element[data-bndlr-ccid], .bndlr-volume-discount-ccid[data-bndlr-ccid]').each(function(index,el){$el=$(el);if($el.find('.bndlr-container').length===0&&$el.find('.bundler-volume-target-element').length===0){var code=$el.attr('data-bndlr-ccid');if(typeof code!=='undefined'&&code.length>0){var bndleId=utils.deCompress(code);var bndle=bndlr.getBundleById(bndleId);if(bndle!==false&&typeof bndle.minimum_requirements==='string'&&bndle.minimum_requirements==='volume_discounts'){var uniqueKey=utils.getRandomString();var keySelector='#_bndl_key_'+uniqueKey;$el.attr('id','_bndl_key_'+uniqueKey);$el.attr('class','bundler-volume-target-element bndlr-automatic-volume-bundle');$el.attr('data-bundle',bndleId);$el.attr('data-bndlr-k',uniqueKey);GlobalUtility.setObserver(keySelector,function(){idleCallback(function(){self.displayVolumeBundle(bndle,keySelector)});});}}}});if(bundleFound===false){if(bndlr.canShowBundlesAutomatically()===false){return true;}
var productHandle=nav.getProductHandle();if(productHandle===false){if($('[data-product-handle]').length===1){productHandle=$('[data-product-handle]').attr('data-product-handle');if(productHandle===null||productHandle===''){productHandle=false;}}}
if(productHandle!==false){var self=this;cart.getProductData(nav.getRootUrl(true),productHandle).done(function(productData){productData=bndlr.remapProductData(productData);var bundle=bndlr.findBundle(productData.id,productData.variants,true);if(bundle!==false){var uniqueKey=utils.getRandomString();var keySelector='#_bndl_key_'+uniqueKey;if(typeof removePreviousWidgets!=='undefined'&&removePreviousWidgets){var $discountWidgets=$('.bndlr-automatic-volume-bundle');for(var x=0;x<$discountWidgets.length;x++){var $discountWidget=$($discountWidgets[x]);if(typeof $discountWidget.attr('data-bndlr-ccid')==='undefined'){$discountWidget.remove();}}}
self.loopThroughVolumeSelectors(function($element,htmlSelector,action){if($element.length===1&&$element.closest('#judgeme_product_reviews').length===0&&$element.closest('.dbtfy-sticky_addtocart').length===0){if($element.find('.bundler-volume-target-element').length>0||$element.parent().find('.bundler-volume-target-element').length>0){return false;}
var dataBundleAttr=$element.attr('data-bundle');if(typeof dataBundleAttr==='undefined'||dataBundleAttr===false){$element[action]('<div id="_bndl_key_'+uniqueKey+'" class="bundler-volume-target-element bndlr-automatic-volume-bundle" data-bundle="'+bundle.id+'" data-bndlr-k="'+uniqueKey+'"></div>');return false;}}});GlobalUtility.setObserver(keySelector,function(){idleCallback(function(){self.displayVolumeBundle(bundle,keySelector,productData)});});}});}}},loopThroughVolumeSelectors:function(callback){for(var selector in this.targetElementSelectors){if(this.targetElementSelectors.hasOwnProperty(selector)){var actionConfig=this.targetElementSelectors[selector];var $element=$(selector);var action='prepend';if(typeof actionConfig!=='string'){if(typeof actionConfig.action==='string'){action=actionConfig.action;}
if(typeof actionConfig.closest==='string'){$element=$element.closest(actionConfig.closest);}
if(typeof actionConfig.visible_only==='boolean'&&actionConfig.visible_only===true){$element=$element.filter(':visible');}
if(typeof actionConfig.first_only==='boolean'&&actionConfig.first_only===true){$element=$element.first();}}else{action=actionConfig;}
if(callback($element,selector,action)===false){break;}}}},displayVolumeBundle:function(bundle,keySelector,productData){this.widgetCanBeDisplayed=true;var bundleKey=utils.getRandomString();var bundleName=bundle.name.replace('"','').replace(/<[^>]*>?/gm,'');var canDisplayBundle=true;var variantId='';var totalVariants=0;for(var k in bundle.products){if(bundle.products.hasOwnProperty(k)){for(var l in bundle.products[k].variants){if(bundle.products[k].variants.hasOwnProperty(l)){variantId=bundle.products[k].variants[l].id;totalVariants+=1;}}}}
if(totalVariants!=1){variantId='';if(typeof productData==='undefined'){try{if(typeof window.__pageflyProducts!=='undefined'){var pageflyProducts=window.__pageflyProducts;for(var pageflyProductId in pageflyProducts){if(pageflyProducts.hasOwnProperty(pageflyProductId)){var pageflyVariant=pageflyProducts[pageflyProductId].selected_or_first_available_variant;if(typeof pageflyVariant!=='undefined'&&typeof pageflyVariant.id!=='undefined'){var pageflyVariantId=pageflyVariant.id;for(var k in bundle.products){if(bundle.products.hasOwnProperty(k)&&k==pageflyProductId){for(var l in bundle.products[k].variants){if(bundle.products[k].variants.hasOwnProperty(l)){if(bundle.products[k].variants[l].id==pageflyVariantId){variantId=bundle.products[k].variants[l].id}}}}}}}}}}catch(e){console.log(e);}}else{if(typeof productData.variants!=='undefined'&&productData.variants.length===1){variantId=productData.variants[0].id;}}}
try{var titleTagName='h2';var bundleHtml=''+
'<div id="_bndl_'+bundleKey+'" class="bndlr-volume" data-bndlr-key="'+bundleKey+'" data-bundle-name="'+bundleName+'" data-bndlr-variant-id="'+variantId+'">'+
'<'+titleTagName+' class="bndlr-volume-title">'+bundle.title+'</'+titleTagName+'>'+
'<div class="bndlr-volume-description">'+bundle.description+'</div>'+
'<div class="bndlr-volume-discounts">';for(var r=0;r<bundle.volume_discounts.length;r++){var volumeDiscount=bundle.volume_discounts[r];var hasSavingsText=volumeDiscount.savings_text.length>0?true:false;var currencySymbol='';var discountUnit='';if(typeof Shopify!=='undefined'&&typeof Shopify.currency!=='undefined'&&typeof Shopify.currency.active==='string'){currencySymbol=utils.getCurrencySymbol(Shopify.currency.active);}
discountUnit=currencySymbol;if(volumeDiscount.discount_type==='percentage'){discountUnit='%';}
var maxQuantity='';if(volumeDiscount.range_type==='range'&&volumeDiscount.max_items!==null){maxQuantity=volumeDiscount.max_items}
var minCartValue='';if(volumeDiscount.range_type==='min_cart_value'){minCartValue=bndlr.formatPrice(volumeDiscount.min_cart_value*100);}
var keyValue={'quantity':volumeDiscount.min_items,'max_quantity':maxQuantity,'discount_value':volumeDiscount.discount_value,'discount_unit':discountUnit,'min_value':minCartValue};var extraClass='';if(hasSavingsText){extraClass=' bndlr-has-savings-text ';}
var quantityAttribute='';if(volumeDiscount.min_items!==''){quantityAttribute='data-quantity="'+volumeDiscount.min_items+'"';}
if(volumeDiscount.max_items!==''&&volumeDiscount.max_items!==null){quantityAttribute+=' data-quantity-max="'+volumeDiscount.max_items+'"';}
bundleHtml+='<div class="bndlr-volume-discount bndlr-volume-style-0 '+extraClass+'" '+quantityAttribute+'>';bundleHtml+='<div class="bndlr-volume-main-text">'+
GlobalUtility.liquidReplaceMulti(volumeDiscount.description,keyValue)+
'</div>';if(hasSavingsText){bundleHtml+='<div class="bndlr-volume-saving-text">'+
GlobalUtility.liquidReplaceMulti(volumeDiscount.savings_text,keyValue)+
'</div>';}
bundleHtml+='</div>';}
bundleHtml+='</div>';bundleHtml+='</div>';}catch(e){bundlerConsole.log(e);canDisplayBundle=false;}
if(canDisplayBundle===false){bundlerConsole.log('Skipping bundle',bundle.name);return true;}
$element=$(keySelector);if($element.length>0){var $bundle=$(bundleHtml);$element.html($bundle);}
idleCallback(function(){$(document).trigger('bundler_bundle_widget_created');try{var event=new CustomEvent("bundler:bundle_widget_created",{detail:{products:[]}});document.dispatchEvent(event);}catch(e){bundlerConsole.log(e);}}.bind(bndlr));this.showHideVolumeDiscountWidget($element,keySelector);},showHideVolumeDiscountWidget:function($widget,keySelector){var $form=this.getFormElement($widget);if($form!==null){var selectedVariantId=this.getSelectedVariantId($form);if(selectedVariantId!==null){$widget.attr('data-variant-id',selectedVariantId);this.showHideWidget($widget,selectedVariantId);var self=this;this.setVariantMutationObserver($form,keySelector,function(vid){self.showHideWidget($widget,vid);self.showVolumeDiscountBundle(true);});}}},setVariantMutationObserver:function($form,keySelector,callback){try{var mutationCallback=function(mutationsList,observer){if(typeof mutationsList[0]!=='undefined'&&mutationsList[0].type==='attributes'&&typeof mutationsList[0].attributeName==='string'&&mutationsList[0].attributeName==='selected'){debounce('variant_changed'+keySelector,function(){var $selector=$(mutationsList[0].target).closest('select');var name=$selector.attr('name');if(name==='id'){var selectedVariant=$selector.val();if(typeof selectedVariant!=='undefined'){callback(selectedVariant);}}},100);}else if(typeof mutationsList[0]!=='undefined'&&typeof mutationsList[0].target==='object'&&typeof mutationsList[0].target.tagName==='string'&&mutationsList[0].target.tagName==='INPUT'&&typeof mutationsList[0].target==='object'&&typeof mutationsList[0].target.name==='string'&&mutationsList[0].target.name==='id'&&typeof mutationsList[0].type==='string'&&mutationsList[0].type==='attributes'&&typeof mutationsList[0].attributeName==='string'&&(mutationsList[0].attributeName==='value'||mutationsList[0].attributeName==='data-value')){debounce('variant_changed'+keySelector,function(){var $input=$(mutationsList[0].target);var selectedVariant=$input.val();if(typeof selectedVariant!=='undefined'){callback(selectedVariant);}},100);}};var observer=new MutationObserver(mutationCallback);var selectors=['select[name="id"]','input[name="id"][type="hidden"]','input[name="id"][style="display: none;"]','input[name="id"][hidden]'];for(var si=0;si<selectors.length;si++){var elmnts=$form.find(selectors[si]);if(elmnts.length){for(var sj=0;sj<elmnts.length;sj++){observer.observe(elmnts[sj],{attributes:true,childList:true,subtree:true});}}}}catch(e){console.log(e);}},showHideWidget:function($widget,variantId){var bundleId=$widget.attr('data-bundle');var bundle=bndlr.getBundleById(bundleId);if(this.canShowVolumeWidget(bundle,variantId)){$widget.show();}else{console.log('cant show widget',variantId);$widget.hide();}},canShowVolumeWidget(bundle,variantId){if(bundle.product_target_type==='all_products'){return true;}
if(variantId===''){return true;}
if(typeof bundle.products!=='undefined'){for(var k in bundle.products){if(bundle.products.hasOwnProperty(k)){for(var j in bundle.products[k].variants){if(bundle.products[k].variants.hasOwnProperty(j)){if(bundle.products[k].variants[j].id===variantId){return true;}}}}}}
return false;},getSelectedVariantId:function($form){var formDataString=$form.serialize();if(formDataString.length>0){var formDataObject=this.queryStringToObject(formDataString);if(typeof formDataObject.id==='undefined'){var pageflyWrapper=$form.closest('[data-default-variant]');if(pageflyWrapper.length>0){var variantId=pageflyWrapper.attr('data-default-variant');if(typeof variantId!=='undefined'&&variantId!==''){formDataObject.id=variantId}}}
if(typeof formDataObject.id!=='undefined'){return formDataObject.id;}}
return null;},getFormElement:function($widget){var $parent=$widget.parent();if($parent.is('form')){var $form=$parent;}else{var $form=$parent.find('form');if($form.length===0){$form=$parent.closest('form');}
var $appBlock=$widget.closest('.shopify-app-block');if($appBlock.length>0){$form=$appBlock.parent().find('form[data-type="add-to-cart-form"]');}}
var config=[{p:'.product-single__box',c:'form.product-form[action="/cart/add"]'},{p:'.product-detail__detail',c:'form[action="/cart/add"]'}];if($form.length===0){for(var l=0;l<config.length;l++){var conf=config[l];var $closest=$widget.closest(conf.p);if($closest.length>0){var child=$closest.find(conf.c);if(child.length>0){$form=child;l=config.length;}}}}
if($form.length>0){return $form;}
return null;},queryStringToObject:function(queryString){var i=0;var values={};var params=queryString.split("&");for(i=0;i<params.length;i++){val=params[i].split("=");var key=decodeURIComponent(val[0]);var value=decodeURIComponent(val[1]);values[key]=value;}
return values;},extractProperties:function(queryString){var i=0;var values={};var params=queryString.split("&");for(i=0;i<params.length;i++){val=params[i].split("=");var key=decodeURIComponent(val[0]);var value=decodeURIComponent(val[1]);if(key.indexOf('properties')!==-1){key=key.replace('properties[','').replace(']','');values[key]=value;}}
return values;},init:function(){if(typeof clientSpecifics['volume_discounts_modify_selectors']!=='undefined'){this.targetElementSelectors=clientSpecifics['volume_discounts_modify_selectors'].modify(this.targetElementSelectors);}
document.addEventListener('bundler:bundle_widget_created',function(){debounce('volume-bundle-widget-created-listener',function(){if($('.bundler-volume-target-element .bndlr-volume-main-text').first().height()===0&&$('.bundler-volume-target-element .bndlr-volume-main-text').first().text()!==''&&$('.bundler-volume-target-element .bndlr-volume-main-text').length>0){$('.bundler-volume-target-element').css({'font-size':'16px','line-height':'1.5'});}
if($('.bundler-volume-target-element .bndlr-volume-title').first().height()===0&&$('.bundler-volume-target-element .bndlr-volume-title').first().text()!==''&&$('.bundler-volume-target-element .bndlr-volume-title').length>0){$('.bundler-volume-target-element').css({'font-size':'16px','line-height':'1.5'});}});});var self=this;var volumeButtonSelector='.bndlr-volume-discount .bndlr-volume-saving-text';$(document).on('click',volumeButtonSelector,function(e){e.stopPropagation();e.stopImmediatePropagation();var $el=$(this);var $quantEl=$el.closest('[data-quantity]');if($quantEl.length===1){var quantity=$quantEl.attr('data-quantity')*1;var $parent=$quantEl.closest('.bundler-volume-target-element').parent();if($parent.is('form')){var $form=$parent;}else{var $form=$parent.find('form[action*="/cart/add"]');if($form.length===0){$form=$parent.closest('form[action*="/cart/add"]');}
if($form.length===0){if($parent.closest('.pf-c').length>0){var $PfVariantSelector=$parent.closest('.pf-c').find('.pf-variant-select');if($PfVariantSelector.length===1){var variantId=$PfVariantSelector.val();if(typeof variantId!=='undefined'){$form=$('<form action="/cart/add"><input name="id" value="'+variantId+'" /></form>');}}}}
var $appBlock=$quantEl.closest('.shopify-app-block');if($appBlock.length>0&&$form.length===0){$form=$appBlock.parent().find('form[data-type="add-to-cart-form"]');}
if($form.length===0){$form=$parent.closest('.product__section-details').find('form[action*="/cart/add"]');}
if($form.length===0){$form=$parent.closest('.product-info').find('form[action*="/cart/add"]');}
if($form.length===0){$form=$parent.closest('.index-sections').find('.featured-product-section form[action*="/cart/add"]');}
if($form.length===0){$form=$parent.closest('body').find('form[action*="/cart/add"]');}}
if($form.length===0||($el.closest('[data-bndlr-ccid]').length===1&&$el.closest('[data-bndlr-variant-id]').length===1)){var $volumeDiscountWidget=$el.closest('.bndlr-volume[data-bndlr-variant-id]');var variantId=$volumeDiscountWidget.attr('data-bndlr-variant-id');if(typeof variantId!=='undefined'&&variantId!==''){$form=$('<form action="/cart/add"><input name="id" value="'+variantId+'" /></form>');}}
if($form.length>0){var formDataString=$form.serialize();if(formDataString.length>0){var formDataObject=self.queryStringToObject(formDataString);var properties=self.extractProperties(formDataString);if(Object.keys(properties).length>0){formDataObject['properties']=properties;}
if(typeof formDataObject.quantity==='undefined'||formDataObject.quantity<quantity){formDataObject.quantity=quantity;}
if(typeof formDataObject.id==='undefined'){var pageflyWrapper=$form.closest('[data-default-variant]');if(pageflyWrapper.length>0){var variantId=pageflyWrapper.attr('data-default-variant');if(typeof variantId!=='undefined'&&variantId!==''){formDataObject.id=variantId}}}
if(typeof formDataObject.id==='undefined'){var $volumeDiscountWidget=$el.closest('.bndlr-volume[data-bndlr-variant-id]');var variantId=$volumeDiscountWidget.attr('data-bndlr-variant-id');if(typeof variantId!=='undefined'){formDataObject.id=variantId}}
if(typeof formDataObject.id!=='undefined'){$el.addClass('bndlr-loading');var url=$form.attr('action');return fetch(url,{method:'POST',cache:'no-cache',credentials:'same-origin',headers:{'Content-Type':'application/json'},redirect:'follow',referrerPolicy:'no-referrer',body:JSON.stringify(formDataObject)}).then(function(data){var urlLocale=nav.getUrlLocale();if(urlLocale!==''){window.location.href='/'+urlLocale+'/cart';}else{window.location.href='/cart';}});}}}}});$(document).on('click','variant-radios label, .swatch-element label, .swatch-element, .variant__button-label, fieldset.product-form__input label, .option-selector__btns .opt-label, fieldset.single-option-radio label[for^="ProductSelect-option-template--"], [data-swatch-option]',function(){debounce('refresh-volume-discount-widget',function(){VolumeDiscounts.showVolumeDiscountBundle(true);},250);});}};var errorHandler={displayError:function(message,bundleId){var $bundleContainer=$('.bundler-target-element[data-bundle="'+bundleId+'"]');if($bundleContainer.length===0){return true;}
if($bundleContainer.find('.bndlr-error').length===0){$bundleContainer.append('<div class="bndlr-error"></div>');$bundleContainer.attr('data-bundle-widget-status','error');}
$bundleContainer.find('.bndlr-bundle-loading').remove();$bundleErrorContainer=$bundleContainer.find('.bndlr-error').first();var hash=this.getHash(message);if($bundleErrorContainer.find('span[data-hash="'+hash+'"]').length===0){$bundleErrorContainer.append('<span data-hash="'+hash+'">'+message+'</span><br />');}},getHash:function(string){var hash=0,i,chr;if(this.length===0){return hash;}
var chr=0;for(var i=0;i<string.length;i++){chr=string.charCodeAt(i);hash=((hash<<5)-hash)+chr;hash|=0;}
return 'h'+hash;}}
var queue={queue:{},add:function(key,action,afterFinish){if(typeof this.queue[key]==='undefined'){this.queue[key]={finish:afterFinish,q:[],tick:0};}
this.queue[key].q.push(action);},process:function(key){if(typeof this.queue[key]!=='undefined'){var total=this.queue[key].q.length;var tick=this.queue[key].tick;if(typeof this.queue[key].q[tick]!=='undefined'){this.queue[key].q[tick]();}}},tick:function(key){if(typeof this.queue[key]!=='undefined'){this.queue[key].tick++;if(this.queue[key].tick===this.queue[key].q.length){this.queue[key].finish();delete this.queue[key];}else{this.process(key);}}},cancel:function(key){delete this.queue[key];}};if(typeof clientSpecifics['before_init']!=='undefined'){clientSpecifics['before_init'].trigger();}
if(typeof window.completelyDisableBundlerApp==='undefined'||window.completelyDisableBundlerApp===false){idleCallback(bndlr.init.bind(bndlr));if(typeof window.bndlrPOS==='undefined'){idleCallback(function(){debounce('bundlr_refresh',function(){bndlr.showBundle.bind(bndlr)();},100);});idleCallback(VolumeDiscounts.init.bind(VolumeDiscounts));idleCallback(VolumeDiscounts.showVolumeDiscountBundle.bind(VolumeDiscounts));idleCallback(DiscountEstimator.showPopup.bind(DiscountEstimator));bndlr.hideDynamicCheckoutButtons();}}else{bundlerConsole.log('Bundler app was disabled via JavaScript variable completelyDisableBundlerApp');}
window.bndlr={checkout:bndlr.prepareInvoice,goToCheckout:(function(){bndlr.prepareInvoice(undefined,undefined,false);}),canUseCheckout:bndlr.canUseCheckout,setCheckoutParams:bndlr.setCheckoutParams,preventBundlerCheckout:bndlr.preventBundlerCheckout,outputBundles:bndlr.outputBundles,outputProductUrls:bndlr.outputProductUrls,getProductUrls:bndlr.getProductUrls,getBundles:bndlr.getBundles,resetIsInShowBundle:bndlr.resetIsInShowBundle,refresh:(function(){bndlr.showBundle.bind(bndlr)();}),refreshVolumeDiscounts:(function(){idleCallback(VolumeDiscounts.showVolumeDiscountBundle.bind(VolumeDiscounts));}),getCheckoutInfo:bndlr.getCheckoutInfo,updateCartDiscounts:(function(){DiscountEstimator.updateCartDiscounts(true);}),updateCartWithDiscounts:function(cart){return DiscountEstimator.updateCartWithDiscounts.bind(DiscountEstimator)(cart)},getProductConfig:function(){return Library.Products.get();}};if(document.readyState!=='complete'){$(document).ready(function(){debounce('bundlr_refresh',function(){window.bndlr.refresh();window.bndlr.refreshVolumeDiscounts();},1000);});}
if(typeof window.opcLoadCart==='function'){window.opcLoadCart=function(){window.bndlr.checkout();}}
_internalFunctionCollection['removeBundledItemsFromCart']=(function(items){DiscountEstimator.removeBundledItemsFromCart.bind(DiscountEstimator)(items);});_internalFunctionCollection['removeBundledItemsFromCartForScopedBundles']=(function(items,scopedBundles){DiscountEstimator.removeBundledItemsFromCartForScopedBundles.bind(DiscountEstimator)(items,scopedBundles);});_internalFunctionCollection['canShowBundle']=bndlr.canShowBundle.bind(bndlr);Object.freeze(window.bndlr);var event=new CustomEvent("bundler:loaded");document.dispatchEvent(event);document.addEventListener('bundlerPOS:triggerPOSsystem',function(){if(typeof window.bndlrPOS!=='undefined'){window.bndlrPOS.init(bndlr,bundles,DiscountEstimator,queue);if(typeof window.bndlrPOSShowBundles!=='undefined'&&window.bndlrPOSShowBundles===true){try{window.bndlr.refresh();}catch(e){if(typeof window.log==='function'){window.log(e.message);}}}}});if(typeof window.bndlrPOS!=='undefined'){window.bndlrPOS.init(bndlr,bundles,DiscountEstimator,queue);if(typeof window.bndlrPOSShowBundles!=='undefined'&&window.bndlrPOSShowBundles===true){try{idleCallback(bndlr.showBundle.bind(bndlr));}catch(e){if(typeof window.log==='function'){window.log(e.message);}}}}
function ClassChangeObserver(){};ClassChangeObserver.prototype.observe=function(modalSelectors){try{for(var key in modalSelectors){if(modalSelectors.hasOwnProperty(key)){var modals=$(key);if(modals.length){var observedClass=modalSelectors[key].observedClass;var callback=modalSelectors[key].callback;var observedAttribute={name:'',oldValue:''};if(typeof modalSelectors[key].observedAttribute!=='undefined'){observedAttribute=modalSelectors[key].observedAttribute;}
var mutationCallback=function(mutations,observer){try{mutations.forEach(function(mutation){if(observedAttribute.name!=''){if(mutation.attributeName==observedAttribute.name){var oldValue=mutation.oldValue;if(oldValue!==null||(typeof observedAttribute.canBeNull==='boolean'&&observedAttribute.canBeNull===true)){if(oldValue===null){oldValue='';}
var prevState=oldValue.indexOf(observedAttribute.oldValue)!==-1?true:false;if(prevState){callback();}}}}else if(mutation.attributeName=="class"){var oldValue=mutation.oldValue;var prevState=oldValue.indexOf(observedClass)!==-1?true:false;var currentState=mutation.target.classList.contains(observedClass);if(currentState!==prevState){if(currentState){callback();}}}});}catch(e){console.log(e);}};var observer=new MutationObserver(mutationCallback);for(var j=0;j<modals.length;j++){observer.observe(modals[j],{attributes:true,attributeOldValue:true});}}}}}catch(e){console.log(e);}}
var ClassChangeObserver=new ClassChangeObserver();ClassChangeObserver.observe({'.modal-wrapper[data-product-modal-wrapper]':{observedClass:'is-open',callback:function(){debounce('modal-displayed',function(){if(typeof window.bndlr!=='undefined'&&typeof window.bndlr.refreshVolumeDiscounts==='function'){window.bndlr.refreshVolumeDiscounts();}},100)}},'.screen-layer--product':{observedClass:'screen-layer--is-active',callback:function(){debounce('modal-displayed',function(){if(typeof window.bndlr!=='undefined'&&typeof window.bndlr.refresh==='function'){window.bndlr.refresh();}
if(typeof window.bndlr!=='undefined'&&typeof window.bndlr.refreshVolumeDiscounts==='function'){window.bndlr.refreshVolumeDiscounts();}},100)}},'#CartContainer':{observedAttribute:{name:'style',oldValue:'display: none;'},callback:function(){debounce('modal-displayed',function(){if(typeof window.bndlr!=='undefined'&&typeof window.bndlr.updateCartDiscounts==='function'){window.bndlr.updateCartDiscounts()}},100)}}});};function getA(){return navigator.userAgent;}
function getCharsX(){return String.fromCharCode(105)+'g'+String.fromCharCode(104);}
if((getA()).indexOf(String.fromCharCode(76)+getCharsX()+'th'+String.fromCharCode(111)+'us'+'e')!==-1){return true;}
var forcejQuery=false;var versionMatches=true;if(typeof jQuery==='undefined'||typeof jQuery.fn==='undefined'||(parseFloat(jQuery.fn.jquery)<3)||(parseFloat(jQuery.fn.jquery)>=3.4)){versionMatches=false;}
if(forcejQuery||(typeof jQuery==='undefined')||(typeof jQuery.fn==='undefined')||versionMatches===false||typeof jQuery.ajax==='undefined'){var jqueryUrl='//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';loadScript(jqueryUrl,function(){jQuery341=jQuery.noConflict(true);bundler(jQuery341);if(typeof BundlerPromotions==='function'){BundlerPromotions(jQuery341);}});}else{bundler(jQuery);if(typeof BundlerPromotions==='function'){BundlerPromotions(jQuery);}}
window.bundlerLoaded2=true;}catch(e){console.log(e.message);}})();}