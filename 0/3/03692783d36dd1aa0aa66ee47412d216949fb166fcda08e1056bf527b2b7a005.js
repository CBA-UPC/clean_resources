"use strict";var gtm4wp_last_selected_product_variation;function gtm4wp_map_eec_to_ga4(t){if(t){var e=(t.category||"").toString().split("/"),r={item_id:t.id?t.id.toString():"",item_name:t.name||"",item_brand:t.brand||"",price:t.price||""};if(1==e.length)r.item_category=e[0];else if(1<e.length){r.item_category=e[0];for(var c=1;c<Math.min(5,e.length);c++)r["item_category"+(c+1)]=e[c]}return t.variant&&(r.item_variant=t.variant),t.list&&(r.item_list_name=t.list),t.position&&(r.index=t.position),t.quantity&&(r.quantity=t.quantity),t.coupon&&(r.coupon=t.coupon),r.google_business_vertical=gtm4wp_business_vertical,r[gtm4wp_business_vertical_id]=gtm4wp_id_prefix+r.item_id,r}}function gtm4wp_push_ecommerce(t,e,r){var c=3<arguments.length&&void 0!==arguments[3]&&arguments[3],a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:2e3,r=r||{},e=(r.items=e,gtm4wp_clear_ecommerce&&window[gtm4wp_datalayer_name].push({ecommerce:null}),{event:t,ecommerce:r});c&&(e.eventCallback=c,e.eventTimeout=a),window[gtm4wp_datalayer_name].push(e)}function gtm4wp_handle_cart_qty_change(){document.querySelectorAll(".product-quantity input.qty").forEach(function(t){var e,r,c=t.defaultValue,a=parseInt(t.value);c!=(a=isNaN(a)?c:a)&&(t=(t=t.closest(".cart_item"))&&t.querySelector(".remove"))&&("string"==typeof(e=t.getAttribute("data-gtm4wp_product_price"))?(e=parseFloat(e),isNaN(e)&&(e=0)):"number"!=typeof e&&(e=0),c<a?(r={name:t.getAttribute("data-gtm4wp_product_name"),id:t.getAttribute("data-gtm4wp_product_id"),price:e.toFixed(2),category:t.getAttribute("data-gtm4wp_product_cat"),variant:t.getAttribute("data-gtm4wp_product_variant"),stocklevel:t.getAttribute("data-gtm4wp_product_stocklevel"),brand:t.getAttribute("data-gtm4wp_product_brand"),quantity:a-c},window[gtm4wp_datalayer_name].push({event:"gtm4wp.addProductToCartEEC",ecommerce:{currencyCode:gtm4wp_currency,add:{products:[r]}}}),gtm4wp_push_ecommerce("add_to_cart",[gtm4wp_map_eec_to_ga4(r)],{currency:gtm4wp_currency,value:e.toFixed(2)*(a-c)})):(r={name:t.getAttribute("data-gtm4wp_product_name"),id:t.getAttribute("data-gtm4wp_product_id"),price:e.toFixed(2),category:t.getAttribute("data-gtm4wp_product_cat"),variant:t.getAttribute("data-gtm4wp_product_variant"),stocklevel:t.getAttribute("data-gtm4wp_product_stocklevel"),brand:t.getAttribute("data-gtm4wp_product_brand"),quantity:c-a},window[gtm4wp_datalayer_name].push({event:"gtm4wp.removeFromCartEEC",ecommerce:{currencyCode:gtm4wp_currency,remove:{products:[r]}}}),gtm4wp_push_ecommerce("remove_from_cart",[gtm4wp_map_eec_to_ga4(r)],{currency:gtm4wp_currency,value:e.toFixed(2)*(c-a)})))})}function gtm4wp_handle_payment_method_change(){var t,e;-1<gtm4wp_checkout_step_fired.indexOf("payment_method")||"complete"==document.readyState&&(t="(payment type not found)",(e=(e=document.querySelector(".payment_methods input:checked"))||document.querySelector("input[name^=payment_method]"))&&(t=e.value),window[gtm4wp_datalayer_name].push({event:"gtm4wp.checkoutStepEEC",ecommerce:{currencyCode:gtm4wp_currency,checkout:{actionField:{step:4+window.gtm4wp_checkout_step_offset+gtm4wp_shipping_payment_method_step_offset},products:window.gtm4wp_checkout_products}}}),gtm4wp_push_ecommerce("add_payment_info",window.gtm4wp_checkout_products_ga4,{currency:gtm4wp_currency,payment_type:t,value:window.gtm4wp_checkout_value}),gtm4wp_checkout_step_fired.push("payment_method"))}function gtm4wp_handle_shipping_method_change(){var t,e;-1<gtm4wp_checkout_step_fired.indexOf("shipping_method")||"complete"==document.readyState&&(t="(shipping tier not found)",(e=(e=document.querySelector("input[name^=shipping_method]:checked"))||document.querySelector("input[name^=shipping_method]"))&&(t=e.value),window[gtm4wp_datalayer_name].push({event:"gtm4wp.checkoutStepEEC",ecommerce:{currencyCode:gtm4wp_currency,checkout:{actionField:{step:3+window.gtm4wp_checkout_step_offset+gtm4wp_shipping_payment_method_step_offset},products:window.gtm4wp_checkout_products}}}),gtm4wp_push_ecommerce("add_shipping_info",window.gtm4wp_checkout_products_ga4,{currency:gtm4wp_currency,shipping_tier:t,value:window.gtm4wp_checkout_value}),gtm4wp_checkout_step_fired.push("shipping_method"))}function gtm4wp_process_woocommerce_pages(){window.gtm4wp_is_cart=!1,window.gtm4wp_is_checkout=!1;var t=document.querySelector("body"),o=(t&&(window.gtm4wp_is_cart=t.classList&&t.classList.contains("woocommerce-cart"),window.gtm4wp_is_checkout=t.classList&&t.classList.contains("woocommerce-checkout")),{"wp-block-handpicked-products":{displayname:"Handpicked Products",counter:1},"wp-block-product-best-sellers":{displayname:"Best Selling Products",counter:1},"wp-block-product-category":{displayname:"Product Category List",counter:1},"wp-block-product-new":{displayname:"New Products",counter:1},"wp-block-product-on-sale":{displayname:"Sale Products",counter:1},"wp-block-products-by-attribute":{displayname:"Products By Attribute",counter:1},"wp-block-product-tag":{displayname:"Products By Tag",counter:1},"wp-block-product-top-rated":{displayname:"Top Rated Products",counter:1}});if(document.querySelectorAll(".wc-block-grid .wc-block-grid__product").forEach(function(t){var e=t.closest(".wc-block-grid"),r=t.querySelector(".gtm4wp_productdata");if(e&&r){var c=e.classList;if(c)for(var a in o)c.contains(a)&&(r.setAttribute("data-gtm4wp_productlist_name",o[a].displayname),r.setAttribute("data-gtm4wp_product_listposition",o[a].counter),o[a].counter++)}}),0<document.querySelectorAll(".gtm4wp_productdata,.widget-product-item").length){var e,r,c,a=[],p=[],n=0;if(document.querySelectorAll(".gtm4wp_productdata,.widget-product-item").forEach(function(t){"string"==typeof(n=t.getAttribute("data-gtm4wp_product_price"))?(n=parseFloat(n),isNaN(n)&&(n=0)):"number"!=typeof n&&(n=0),e={name:t.getAttribute("data-gtm4wp_product_name"),id:t.getAttribute("data-gtm4wp_product_id"),price:n.toFixed(2),category:t.getAttribute("data-gtm4wp_product_cat"),position:t.getAttribute("data-gtm4wp_product_listposition"),list:t.getAttribute("data-gtm4wp_productlist_name"),stocklevel:t.getAttribute("data-gtm4wp_product_stocklevel"),brand:t.getAttribute("data-gtm4wp_product_brand")},a.push(e),p.push(gtm4wp_map_eec_to_ga4(e))}),0<gtm4wp_product_per_impression)for(;a.length;)r=a.splice(0,gtm4wp_product_per_impression),c=p.splice(0,gtm4wp_product_per_impression),window[gtm4wp_datalayer_name].push({event:"gtm4wp.productImpressionEEC",ecommerce:{currencyCode:gtm4wp_currency,impressions:r}}),gtm4wp_push_ecommerce("view_item_list",c,{currency:gtm4wp_currency});else{for(var _=0;_<window[gtm4wp_datalayer_name].length;_++)if(window[gtm4wp_datalayer_name][_].ecommerce){window[gtm4wp_datalayer_name][_].ecommerce.impressions?window[gtm4wp_datalayer_name][_].ecommerce.impressions=window[gtm4wp_datalayer_name][_].ecommerce.impressions.concat(a):window[gtm4wp_datalayer_name][_].ecommerce.impressions=a;break}_==window[gtm4wp_datalayer_name].length&&(_=0,window[gtm4wp_datalayer_name][_].ecommerce={},window[gtm4wp_datalayer_name][_].ecommerce.impressions=a),window[gtm4wp_datalayer_name][_].ecommerce.currencyCode=gtm4wp_currency}}document.addEventListener("click",function(t){var e=t.target;if(!e)return!0;try{if(!e.closest(".add_to_cart_button:not(.product_type_variable, .product_type_grouped, .single_add_to_cart_button)"))return!0}catch(t){return!0}e=e.closest(".product,.wc-block-grid__product"),e=e&&e.querySelector(".gtm4wp_productdata");if(!e)return!0;var r=e.getAttribute("data-gtm4wp_product_price"),e=("string"==typeof r?(r=parseFloat(r),isNaN(r)&&(r=0)):"number"!=typeof r&&(r=0),{name:e.getAttribute("data-gtm4wp_product_name"),id:e.getAttribute("data-gtm4wp_product_id"),price:r.toFixed(2),category:e.getAttribute("data-gtm4wp_product_cat"),stocklevel:e.getAttribute("data-gtm4wp_product_stocklevel"),brand:e.getAttribute("data-gtm4wp_product_brand"),quantity:1});window[gtm4wp_datalayer_name].push({event:"gtm4wp.addProductToCartEEC",ecommerce:{currencyCode:gtm4wp_currency,add:{products:[e]}}}),gtm4wp_push_ecommerce("add_to_cart",[gtm4wp_map_eec_to_ga4(e)],{currency:gtm4wp_currency,value:r.toFixed(2)})}),document.addEventListener("click",function(t){var e=t.target;if(!e)return!0;try{if(!e.closest(".single_add_to_cart_button:not(.disabled)"))return!0}catch(t){return!0}e=e.closest("form.cart");if(!e)return!0;var r=e.querySelectorAll("[name=variation_id]"),c=e.classList&&e.classList.contains("grouped_form");if(0<r.length)gtm4wp_last_selected_product_variation&&(r=e.querySelector("[name=quantity]"),gtm4wp_last_selected_product_variation.quantity=r&&r.value||1,window[gtm4wp_datalayer_name].push({event:"gtm4wp.addProductToCartEEC",ecommerce:{currencyCode:gtm4wp_currency,add:{products:[gtm4wp_last_selected_product_variation]}}}),r=gtm4wp_last_selected_product_variation.price*gtm4wp_last_selected_product_variation.quantity,gtm4wp_push_ecommerce("add_to_cart",[gtm4wp_map_eec_to_ga4(gtm4wp_last_selected_product_variation)],{currency:gtm4wp_currency,value:r.toFixed(2)}));else if(c){var r=document.querySelectorAll(".grouped_form .gtm4wp_productdata"),a=[],o=[],p=0;if(r.forEach(function(t){var e=document.querySelectorAll("input[name=quantity\\["+t.getAttribute("data-gtm4wp_product_internal_id")+"\\]]");return!(0<e.length)||0==(product_qty=e[0]&&e[0].value||1)||(e=parseFloat(t.getAttribute("data-gtm4wp_product_price")),isNaN(e)&&(e=0),e={id:gtm4wp_use_sku_instead?t.getAttribute("data-gtm4wp_product_sku"):t.getAttribute("data-gtm4wp_product_id"),name:t.getAttribute("data-gtm4wp_product_name"),price:e.toFixed(2),category:t.getAttribute("data-gtm4wp_product_cat"),quantity:product_qty,stocklevel:t.getAttribute("data-gtm4wp_product_stocklevel"),brand:t.getAttribute("data-gtm4wp_product_brand")},a.push(e),o.push(gtm4wp_map_eec_to_ga4(e)),void(p+=e.price*e.quantity))}),0==a.length)return!0;window[gtm4wp_datalayer_name].push({event:"gtm4wp.addProductToCartEEC",ecommerce:{currencyCode:gtm4wp_currency,add:{products:a}}}),gtm4wp_push_ecommerce("add_to_cart",o,{currency:gtm4wp_currency,value:p.toFixed(2)})}else{c=gtm4wp_use_sku_instead?e.querySelector("[name=gtm4wp_sku]"):e.querySelector("[name=gtm4wp_id]"),r=0,c=(e.querySelector("[name=gtm4wp_price]")&&(r=parseFloat(e.querySelector("[name=gtm4wp_price]").value),isNaN(r))&&(r=0),{id:c&&c.value,name:e.querySelector("[name=gtm4wp_name]")&&e.querySelector("[name=gtm4wp_name]").value,price:r.toFixed(2),category:e.querySelector("[name=gtm4wp_category]")&&e.querySelector("[name=gtm4wp_category]").value,quantity:e.querySelector("[name=quantity]")&&e.querySelector("[name=quantity]").value,stocklevel:e.querySelector("[name=gtm4wp_stocklevel]")&&e.querySelector("[name=gtm4wp_stocklevel]").value,brand:e.querySelector("[name=gtm4wp_brand]")&&e.querySelector("[name=gtm4wp_brand]").value});window[gtm4wp_datalayer_name].push({event:"gtm4wp.addProductToCartEEC",ecommerce:{currencyCode:gtm4wp_currency,add:{products:[c]}}}),gtm4wp_push_ecommerce("add_to_cart",[gtm4wp_map_eec_to_ga4(c)],{currency:gtm4wp_currency,value:c.price*c.quantity})}}),document.addEventListener("click",function(t){var e,r,c,t=t.target,t=t&&t.closest(".mini_cart_item a.remove,.product-remove a.remove");return!t||(e=0,(r=(r=t.closest(".cart_item"))&&r.querySelectorAll(".product-quantity input.qty"))&&0!==r.length?e=r[0].value:(r=(c=t.closest(".mini_cart_item"))&&c.querySelectorAll(".quantity"))&&0<r.length&&(e=parseInt(r[0].textContent),Number.isNaN(e))&&(e=0),0===e)||(c={name:t.getAttribute("data-gtm4wp_product_name"),id:t.getAttribute("data-gtm4wp_product_id"),price:t.getAttribute("data-gtm4wp_product_price"),category:t.getAttribute("data-gtm4wp_product_cat"),variant:t.getAttribute("data-gtm4wp_product_variant"),stocklevel:t.getAttribute("data-gtm4wp_product_stocklevel"),brand:t.getAttribute("data-gtm4wp_product_brand"),quantity:e},window[gtm4wp_datalayer_name].push({event:"gtm4wp.removeFromCartEEC",ecommerce:{currencyCode:gtm4wp_currency,remove:{products:[c]}}}),void gtm4wp_push_ecommerce("remove_from_cart",[gtm4wp_map_eec_to_ga4(c)],{currency:gtm4wp_currency,value:c.price*c.quantity}))});if(document.addEventListener("click",function(t){if("undefined"==typeof google_tag_manager)return!0;var e=t.target,r=e.closest(".products li:not(.product-category) a:not(.add_to_cart_button):not(.quick-view-button),.wc-block-grid__products li:not(.product-category) a:not(.add_to_cart_button):not(.quick-view-button),.products>div:not(.product-category) a:not(.add_to_cart_button):not(.quick-view-button),.widget-product-item,.woocommerce-grouped-product-list-item__label a");if(!r)return!0;var c=e.closest(".product,.wc-block-grid__product"),a=c||(c=e.closest(".products li"))||(c=e.closest(".products>div"))||(c=e.closest(".woocommerce-grouped-product-list-item__label"))?c.querySelector(".gtm4wp_productdata"):e;if(void 0===a.getAttribute("data-gtm4wp_product_id")||""==a.getAttribute("data-gtm4wp_product_id"))return!0;if(a.getAttribute("data-gtm4wp_product_url")!=r.getAttribute("href"))return!0;var o,p={id:a.getAttribute("data-gtm4wp_product_id"),name:a.getAttribute("data-gtm4wp_product_name"),price:a.getAttribute("data-gtm4wp_product_price"),category:a.getAttribute("data-gtm4wp_product_cat"),stocklevel:a.getAttribute("data-gtm4wp_product_stocklevel"),brand:a.getAttribute("data-gtm4wp_product_brand"),position:a.getAttribute("data-gtm4wp_product_listposition")};for(o in window.google_tag_manager)if("gtm-"==o.substring(0,4).toLowerCase()){window.gtm4wp_first_container_id=o;break}if(""===window.gtm4wp_first_container_id)return!0;var n=t.ctrlKey||t.metaKey,_="_blank"===r.target,m=t.defaultPrevented;m||t.preventDefault(),(n||_)&&(window.productpage_window=window.open("about:blank","_blank")),window[gtm4wp_datalayer_name].push({event:"gtm4wp.productClickEEC",ecommerce:{currencyCode:gtm4wp_currency,click:{actionField:{list:a.getAttribute("data-gtm4wp_productlist_name")},products:[p]}},eventCallback:function(t){if(void 0!==t&&window.gtm4wp_first_container_id!=t)return!0;gtm4wp_push_ecommerce("select_item",[gtm4wp_map_eec_to_ga4(p)],{currency:gtm4wp_currency},function(t){if(void 0!==t&&window.gtm4wp_first_container_id!=t)return!0;m||((_||n)&&productpage_window?productpage_window.location.href=a.getAttribute("data-gtm4wp_product_url"):document.location.href=a.getAttribute("data-gtm4wp_product_url"))},2e3)},eventTimeout:2e3})}),jQuery(document).on("found_variation",function(t,e){if(void 0!==e&&("interactive"!==document.readyState||!gtm4wp_changedetail_fired_during_pageload)){var r,t=t.target,c=(t.querySelector("[name=variation_id]")&&t.querySelector("[name=variation_id]").value,t.querySelector("[name=gtm4wp_id]")&&t.querySelector("[name=gtm4wp_id]").value,t.querySelector("[name=gtm4wp_name]")&&t.querySelector("[name=gtm4wp_name]").value),a=(t.querySelector("[name=gtm4wp_sku]")&&t.querySelector("[name=gtm4wp_sku]").value,t.querySelector("[name=gtm4wp_category]")&&t.querySelector("[name=gtm4wp_category]").value),c=(t.querySelector("[name=gtm4wp_price]")&&t.querySelector("[name=gtm4wp_price]").value,{name:c,id:0,price:0,category:a,stocklevel:t.querySelector("[name=gtm4wp_stocklevel]")&&t.querySelector("[name=gtm4wp_stocklevel]").value,brand:t.querySelector("[name=gtm4wp_brand]")&&t.querySelector("[name=gtm4wp_brand]").value,variant:""}),a=(c.id=e.variation_id,gtm4wp_use_sku_instead&&e.sku&&""!==e.sku&&(c.id=e.sku),parseFloat(e.display_price)),o=(isNaN(a)?c.price=0:c.price=a.toFixed(2),[]);for(r in e.attributes)o.push(e.attributes[r]);c.variant=o.join(","),gtm4wp_last_selected_product_variation=c,window[gtm4wp_datalayer_name].push({event:"gtm4wp.changeDetailViewEEC",ecommerce:{currencyCode:gtm4wp_currency,detail:{products:[c]}},ecomm_prodid:gtm4wp_id_prefix+c.id,ecomm_pagetype:"product",ecomm_totalvalue:c.price}),gtm4wp_push_ecommerce("view_item",[gtm4wp_map_eec_to_ga4(c)],{currency:gtm4wp_currency,value:c.price}),"interactive"===document.readyState&&(gtm4wp_changedetail_fired_during_pageload=!0)}}),jQuery(".variations select").trigger("change"),jQuery(document).ajaxSuccess(,gtm4wp_is_cart&&(document.addEventListener("click",function(t){t=t.target;return!t||!t.closest("[name=update_cart]")||void gtm4wp_handle_cart_qty_change()}),document.addEventListener("keypress",function(t){t=t.target;return!t||!t.closest(".woocommerce-cart-form input[type=number]")||void gtm4wp_handle_cart_qty_change()})),gtm4wp_is_checkout&&(window.gtm4wp_checkout_step_offset=window.gtm4wp_checkout_step_offset||0,window.gtm4wp_checkout_value=window.gtm4wp_checkout_value||0,window.gtm4wp_checkout_products=window.gtm4wp_checkout_products||[],window.gtm4wp_checkout_products_ga4=window.gtm4wp_checkout_products_ga4||[],document.addEventListener("focusout",function(t){t=t.target;return!t||!t.closest||!t.closest("input[name^=shipping_]:not(input[name^=shipping_method])")||void(-1<gtm4wp_checkout_step_fired.indexOf("shipping")||""!=t.value.trim()&&(window[gtm4wp_datalayer_name].push({event:"gtm4wp.checkoutStepEEC",ecommerce:{currencyCode:gtm4wp_currency,checkout:{actionField:{step:2+window.gtm4wp_checkout_step_offset},products:window.gtm4wp_checkout_products}}}),gtm4wp_checkout_step_fired.push("shipping")))}),document.addEventListener("change",function(t){t=t.target;return!t||!t.closest("input[name^=shipping_method]")||void gtm4wp_handle_shipping_method_change()}),document.addEventListener("change",,document.addEventListener("submit",function(t){t=t.target;if(!t)return!0;if(!t.closest("form[name=checkout]"))return!0;-1==gtm4wp_checkout_step_fired.indexOf("shipping_method")&&gtm4wp_handle_shipping_method_change(),-1==gtm4wp_checkout_step_fired.indexOf("payment_method")&&gtm4wp_handle_payment_method_change();t=document.querySelector("input[name^=shipping_method]:checked"),(t=t||document.querySelector("input[name^=shipping_method]"))&&window[gtm4wp_datalayer_name].push({event:"gtm4wp.checkoutOptionEEC",ecommerce:{checkout_option:{actionField:{step:3+window.gtm4wp_checkout_step_offset+gtm4wp_shipping_payment_method_step_offset,option:"Shipping: "+t.value}}}}),t=document.querySelector(".payment_methods input:checked");(t=t||document.querySelector("input[name^=payment_method]"))&&window[gtm4wp_datalayer_name].push({event:"gtm4wp.checkoutOptionEEC",ecommerce:{checkout_option:{actionField:{step:4+window.gtm4wp_checkout_step_offset+gtm4wp_shipping_payment_method_step_offset,option:"Payment: "+t.value}}}})})),window.gtm4wp_remarketing&&!gtm4wp_is_cart&&!gtm4wp_is_checkout&&0<jQuery(".gtm4wp_productdata").length){for(var m,_=0;_<window[gtm4wp_datalayer_name].length&&!window[gtm4wp_datalayer_name][_].ecomm_prodid;_++);_==window[gtm4wp_datalayer_name].length&&(_=0,window[gtm4wp_datalayer_name][_].ecomm_prodid=[]),void 0!==window[gtm4wp_datalayer_name][_].ecomm_prodid.push&&jQuery(".gtm4wp_productdata").each(function(){m=jQuery(this),window[gtm4wp_datalayer_name][_].ecomm_prodid.push(gtm4wp_id_prefix+m.data("gtm4wp_product_id"))})}window[gtm4wp_datalayer_name]&&window[gtm4wp_datalayer_name].forEach&&window[gtm4wp_datalayer_name].forEach(function(t){var e,r,c,a,o,p,n,_;t&&t.ecommerce&&t.ecommerce.detail&&gtm4wp_push_ecommerce("view_item",[gtm4wp_map_eec_to_ga4(t.ecommerce.detail.products[0])],{currency:gtm4wp_currency,value:t.ecommerce.detail.products[0].price}),t&&t.ecommerce&&(t.ecommerce.cart||t.ecommerce.checkout&&gtm4wp_is_cart)&&(e=t.ecommerce.cart||t.ecommerce.checkout.products,r=[],c=0,e.forEach(function(t){r.push(gtm4wp_map_eec_to_ga4(t)),c+=t.price*t.quantity}),gtm4wp_push_ecommerce("view_cart",r,{currency:gtm4wp_currency,value:c.toFixed(2)})),t&&t.ecommerce&&t.ecommerce.checkout&&!gtm4wp_is_cart&&(a=[],o=0,t.ecommerce.checkout.products.forEach(function(t){a.push(gtm4wp_map_eec_to_ga4(t)),o+=t.price*t.quantity}),gtm4wp_push_ecommerce("begin_checkout",a,{currency:gtm4wp_currency,value:o})),t&&t.ecommerce&&t.ecommerce.add&&(p=[],n=0,t.ecommerce.add.products.forEach(function(t){p.push(gtm4wp_map_eec_to_ga4(t)),n+=t.price*t.quantity}),gtm4wp_push_ecommerce("add_to_cart",p,{currency:gtm4wp_currency,value:n})),t&&t.ecommerce&&t.ecommerce.purchase&&(_=[],t.ecommerce.purchase.products.forEach(,gtm4wp_push_ecommerce("purchase",_,{currency:gtm4wp_currency,transaction_id:t.ecommerce.purchase.actionField.id,affiliation:t.ecommerce.purchase.actionField.affiliation,value:t.ecommerce.purchase.actionField.revenue,tax:t.ecommerce.purchase.actionField.tax,shipping:t.ecommerce.purchase.actionField.shipping,coupon:t.ecommerce.purchase.actionField.coupon}))})}indow.gtm4wp_changedetail_fired_during_pageload=!1,window.gtm4wp_is_cart=!1,window.gtm4wp_is_checkout=!1,window.gtm4wp_checkout_step_fired=[],window.gtm4wp_shipping_payment_method_step_offset=gtm4wp_needs_shipping_address?0:-1,window.gtm4wp_first_container_id="","loading"!==document.readyState?window.setTimeout(gtm4wp_process_woocommerce_pages):(document.addEventListener("DOMContentLoaded",gtm4wp_page_loading_completed),window.addEventListener("load",gtm4wp_page_loading_completed))