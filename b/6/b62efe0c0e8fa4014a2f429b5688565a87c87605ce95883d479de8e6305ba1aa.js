(function(){var d="cnx_roi",j="cnxclid",s="cnxv2",i="~",k=3,D="https://www.bizrate.com/roi/index.xpml",a=23819,A="1424866";function g(J,F,I,G){var H=new Date();H.setTime(H.getTime()+G*24*60*60*1000);J.cookie=F+"="+I+";expires="+H.toUTCString()+";domain="+C(window.location.hostname)+";path=/;"+(window.location.protocol==="https:"?"SameSite=None;Secure":"")}function C(H){var G=H;var F=!!G.match(/(\.co\.uk|\.co\.nz|\.co\.it|\.co\.at|\.org\.uk)$/i);if(G.indexOf(".")!==-1){G=G.split(".");if(F){G=G[G.length-3]+"."+G[G.length-2]+"."+G[G.length-1]}else{G=G[G.length-2]+"."+G[G.length-1]}}return G}nction o(H){var G=H.reduce(function(K,J){if(J[0]==="config"){K[J[0]]=J[1]}if(J[0]==="event"){var I={};if(!K[J[0]]){I[J[1]]=J.length>2?J[2]:{};K[J[0]]=I}else{I=K[J[0]];I[J[1]]=J.length>2?J[2]:{};K[J[0]]=I}}return K},{});if(!G.event&&(!G.config||!G.config.disableAutoTag)){var F={};F.pageview={};G.event=F}return G}function h(G,F){return G.location.href.indexOf(F+"=")>0}function z(K,J){var G=K.location.search.substring(1),H=G.split("&"),I,F;for(F=0;F<H.length;F++){I=H[F].split("=");if(I[0]===J){return decodeURIComponent(I[1])}}return false}nction r(K,J,I){var H,F=y(K);if(I.event&&I.event.pageview&&I.event.pageview.cnxclid){H=I.event.pageview.cnxclid}else{if(h(J,j)){H=z(J,j)}}if(H){var G=F?F.split(i):[];G.unshift(H);F=G.slice(0,k).join(i);l(K,F)}return F}function E(J){var K=Object.keys(J.event);var I=0,F=K.length;while(I<F){var H=K[I];var G=J.event[H];if(G.product_ids){G.product_ids=p(G.product_ids)}c(H,G);I++}}function p(F){return Array.isArray(F)?F.filter(:[F]}function e(F){return(F&&F!==""&&F!=="0")}function c(G,F){var H=x.get(G.toLowerCase());if(G==="pageview"){if(F.product_ids&&F.product_ids.length>0){if(!F.category_name||F.product_ids.length==1){H=x.get("productview")}else{if(F.category_name){H=x.get("categoryview")}else{if(F.search_term){H=x.get("search")}}}}else{if(window.cnxPageViewHandled){return}if(window.cnxtagConfig&&window.cnxtagConfig.disableAutoTag){return}window.cnxPageViewHandled=true}}if(A&&H){if(H.tblEventBehavior==="sendTblPageViewEvent"){u(H)}if(H.tblEventBehavior==="sendTblNoArgEvent"){q(H)}if(F){if(H.tblEventBehavior==="sendTblProductEvent"){H.productIds=F.product_ids;f(H)}if(H.tblEventBehavior==="sendTblSearchEvent"){H.productIds=F.product_ids;H.searchTerm=F.search_term;t(H)}if(H.tblEventBehavior==="sendTblCategoryEvent"){H.productIds=F.product_ids;H.category=F.category_name;if(e(F.category_id)){H.categoryId=F.category_id}w(H)}if(H.tblEventBehavior==="sendTblPurchaseEvent"){H.orderId=F.order_id;H.currency=F.currency;H.value=F.order_value;H.cartDetails=F.cart_details;b(H)}}}}function u(F){window._tfa.push({id:A,notify:"event",name:F.tblEventName,url:window.location.href})}function q(F){window._tfa.push({id:A,notify:"ecevent",name:F.tblEventName})}function f(F){window._tfa.push({id:A,notify:"ecevent",name:F.tblEventName,productIds:F.productIds})}function w(F){window._tfa.push({id:A,notify:"ecevent",name:F.tblEventName,productIds:F.productIds,category:F.category,categoryId:F.categoryId})}function t(F){window._tfa.push({id:A,notify:"ecevent",name:F.tblEventName,productIds:F.productIds,searchTerm:F.searchTerm})}function b(F){if(!F.cartDetails){F.cartDetails=[{productId:"-1",quantity:1,price:F.value}]}window._tfa.push({id:A,notify:"ecevent",name:F.tblEventName,orderId:F.orderId,currency:F.currency,value:F.value,cartDetails:F.cartDetails})}function B(H,I){var L=H.event.conversion.mid,N=H.event.conversion.cust_type,J=H.event.conversion.order_value,G=H.event.conversion.order_id,K=H.event.conversion.units_ordered,F,M;F=D+"?cnxclid="+encodeURIComponent(btoa(v(I)))+"&cust_type="+n(N)+"&mid="+L+"&order_id="+n(G)+"&order_value="+n(J)+"&units_ordered="+n(K)+"&v="+s;M=new Image(1,1);M.src=F}const x=new Map([["pageview",{tblEventName:"page_view",tblEventBehavior:"sendTblPageViewEvent"}],["homepagevisit",{tblEventName:"HOME_PAGE_VISIT",tblEventBehavior:"sendTblNoArgEvent"}],["addtocart",{tblEventName:"ADD_TO_CART",tblEventBehavior:"sendTblProductEvent"}],["removefromcart",{tblEventName:"REMOVE_FROM_CART",tblEventBehavior:"sendTblProductEvent"}],["addtowishlist",{tblEventName:"ADD_TO_WISH_LIST",tblEventBehavior:"sendTblProductEvent"}],["removefromwishlist",{tblEventName:"REMOVE_FROM_WISH_LIST",tblEventBehavior:"sendTblProductEvent"}],["productview",{tblEventName:"PRODUCT_VIEW",tblEventBehavior:"sendTblProductEvent"}],["search",{tblEventName:"SEARCH",tblEventBehavior:"sendTblSearchEvent"}],["checkout",{tblEventName:"CHECKOUT",tblEventBehavior:"sendTblProductEvent"}],["categoryview",{tblEventName:"CATEGORY_VIEW",tblEventBehavior:"sendTblCategoryEvent"}],["conversion",{tblEventName:"PURCHASE",tblEventBehavior:"sendTblPurchaseEvent"}],["purchase",{tblEventName:"PURCHASE",tblEventBehavior:"sendTblPurchaseEvent"}],]);function m(){if(!window.cnxDataLayer){window.cnxDataLayer=[]}var J=document,I=window,G=I.cnxDataLayer,H=o(G),K=r(J,I,H);if(H.event&&H.event.conversion){B(H,K)}if(A){window._tfa=window._tfa||[];if(H.event){E(H)}!document.createElement("script"),document.getElementsByTagName("script")[0],"//cdn.taboola.com/libtrc/unip/"+A+"/tfa.js","tb_tfa_script")}if(H.config){window.cnxtagConfig=H.config}var F=function(L,M){L.push=function(N){Array.prototype.push.call(L,N);M(L)}};F(window.cnxDataLayer,function(){var L=o(window.cnxDataLayer);if(L.event&&L.event.conversion){B(L,y(document))}E(L);window.cnxDataLayer.pop()});window.cnxDataLayer.length=0}if(document.readyState==="complete"){m()}else{window.addEventListener("load",m())}})();