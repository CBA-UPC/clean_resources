import{getLocalData,LOGGERS,updateLocalConfiguration}from"../base/config.js";import{addParams,debug,delegate,fetchHtml,fetchJson,objDataset,resolve}from"../base/croco.js";import{sendEvent}from"../base/event-tracker.js";import{loader}from"../base/loader.js";import{initLoginPanel}from"../modules/authentication.js";let $wishlistPageWrapper=null;export const toggleWishlistProducts=(t,i=document)=>{i&&[...i.querySelectorAll(".js-wishlist-add-item")].forEach(i=>{i.classList.toggle("is-active",!!(t||[]).find(t=>t===i.dataset.id))})};export const renderWishlist=async(t,i,o,l)=>{const h=document.querySelector(".js-wishlist-link");if(l){await getLocalData("wishlist").then(async t=>{await updateLocalConfiguration("wishlist",{...t,refColors:i,totalItems:o})})}if(h&&t){const{render:m}=await import("../vendors/lit-html/lit-html.js");const{tplCounter:u}=await import("../templates/components/helpers.tpl.js");let t=document.querySelector(".js-wishlist-counter");if(!t){t=document.createElement("span");t.className="js-wishlist-counter";h.appendChild(t)}t&&m(u(false,o||0),t)}};const updateWishlistProducts=async(data={})=>{const{initNotification:t}=await import("../base/notifications.js");const[i,o,l=[]]=resolve(["notification","totalItems","refColors"],data);if(i){const{title,text,link,success:h}=i;let content={title:title,description:text};if(link){content.links=[link]}if(title||text){t({metadata:{context:h?"loginPanel":"redirect",childContext:"wishlist"},content:{...content,icon:"check",iconClass:`icon-validation rounded${h?" is-success":""}`,timeout:4500,group:h?"wishlistAddOrRemove":"wishlistError"}})}if($wishlistPageWrapper){const m=$wishlistPageWrapper.dataset.wishlistId;if(!m){const u=objDataset($wishlistPageWrapper,"refreshCallback");u&&u(data)}}loader.done()}getLocalData("wishlist").then(async t=>{updateLocalConfiguration("wishlist",{...t,refColors:l,totalItems:o});toggleWishlistProducts(l);if($wishlistPageWrapper){const{updateActionsButtons:i}=await import("../../critical/wishlist-critical.js");i(data)}renderWishlist(t,l,o)})};const addWishlistParams=url=>{if($wishlistPageWrapper){url=addParams(url,{fields:"productItems,wording,wishlist",full:true});if($wishlistPageWrapper.dataset.wishlistId){url=addParams(url,{wishlistId:$wishlistPageWrapper.dataset.wishlistId})}}return url.replace("format=json","")};export const getDataFromHtml=$html=>{let data={};if($html){const $data=$html.querySelector(".js-wishlist-data");let wishlistData=null;try{wishlistData=JSON.parse($data&&$data.textContent)}catch(error){debug("warn",LOGGERS.DEFAULT,"invalid JSON string",$data)}if(wishlistData){data={...wishlistData}}data.$items=[...$html.querySelectorAll(".js-product-tile-api")].map($tile=>{if(!(window.fetchedWishlistItems&&window.fetchedWishlistItems.find(t=>t.item_id===$tile.dataset.id))){const tracking=$tile.querySelector(".js-product-tile-tracking");tracking&&eval(tracking.textContent.replace(/productListData/g,"fetchedWishlistItems"))}return $tile});if(window.fetchedWishlistItems){if(!window.productListData){window.productListData=[]}window.productListData=window.productListData.concat(window.fetchedWishlistItems)}}return data};export const updateWishlistProduct=(t,productId,i,o)=>{loader.begin();const url=addWishlistParams(t);const l=$wishlistPageWrapper?fetchHtml(url).then(data=>getDataFromHtml(data)):fetchJson(url);return l.then(async data=>{updateWishlistProducts(data);const t=resolve("pageViewData.page_data.name",window);if(resolve("notification.context",data)==="WISHLIST.MAX_ITEMS_LIMIT"){sendEvent("wishlist_full",{event_data:{area:t}},null,o)}else if(productId){if(i){let product=window.productListData&&window.productListData.find(t=>t.item_id===productId);if(!product){const event=window.dataLayer&&window.dataLayer.find(({event,ecommerce:t})=>{return event==="view_item"&&resolve("items.0.item_id",t)===productId});if(event){product=resolve("ecommerce.items.0",event)}}if(product){const[value,currency]=resolve(["price","currency"],product);sendEvent("add_to_wishlist",{ecommerce:{items:[product],currency:currency,value:value}},null,o)}}else{sendEvent("remove_from_wishlist",{event_data:{action:"deletion",area:t,value:productId}},null,o)}}loader.done()})};export const wishlistInit=()=>{$wishlistPageWrapper=document.querySelector(".js-wishlist-page");getLocalData("wishlist").then(async t=>{const[i=[],W,o]=resolve(["refColors","loginUrl","totalItems"],t);renderWishlist(t,i,o);delegate(document.body,".js-wishlist-add-item","click",async e=>{const o=e.delegateTarget;const t=o.closest(".js-recommendations-list");const i=o.closest(".js-plp-tiles");const l=o.closest(".js-vto-wishlist");const h=t&&objDataset(t,"tracking");let m={};if(i){m={item_list_name:"category",item_list_id:resolve("pageViewData.page_data.name",window)}}else if(t&&!!h?.updateItems){m=h.updateItems}else if(l){const{DEFAULT_LIST_NAME:p}=await import("../base/event-tracker.js");m={item_list_name:p.VIRTUAL_FITTING}}m&&(m.keysToDelete=["index"]);e.preventDefault();e.stopPropagation();const u=resolve("refColors",await getLocalData("wishlist"))||[];const productId=o.dataset.id;if(u.includes(productId)||!productId){const g=o.dataset.removeUrl;if(g){updateWishlistProduct(g,productId,false)}}else{const v=o.dataset.addUrl;if(W){const{openLoginPopinRefit:P}=await import("../modules/authentication.js");P({url:addParams(W,{original:window.location.href}),context:"add-to-wishlist",options:{noStack:true,hasKeyboard:true,noPadding:true},callbacks:{nextStep:response=>{const[t,i]=resolve(["currentStep","redirectUrl"],response);if(!["forgotPassword","signinRetail"].includes(t)&&!i){updateWishlistProduct(v,productId,true,m).then(async()=>{const t=o.dataset.loginRedirectUrl;if(t){window.location=t}else{location.reload()}})}}}})}else if(v){updateWishlistProduct(v,productId,true,m)}}},true);toggleWishlistProducts(i)});initLoginPanel("wishlist")};