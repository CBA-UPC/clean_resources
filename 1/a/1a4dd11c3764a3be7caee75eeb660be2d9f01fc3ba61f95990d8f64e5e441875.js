!function(){if("function"!=typeof window.CustomEvent){window.CustomEvent=function e(){var e,t=this.parentNode,a=arguments.length;if(t)for(a||t.removeChild(this);a--;)"object"!=typeof(e=arguments[a])?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),a?t.insertBefore(e,this.nextSibling):t.replaceChild(e,this)}Element.prototype.replaceWith||(Element.prototype.replaceWith=e),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=e),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=e),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){var a,o=this.length;for(t=t||window,a=0;a<o;a++)e.call(t,this[a],a,this)})}(),advads={supports_localstorage:function(){"use strict";try{return!(!window||void 0===window.localStorage)&&(window.localStorage.setItem("x","x"),window.localStorage.removeItem("x"),!0)}catch(e){return!1}},max_per_session:function(e,t){var a=1;if(void 0!==t&&0!==parseInt(t)||(t=1),this.cookie_exists(e)){if(this.get_cookie(e)>=t)return!0;a+=parseInt(this.get_cookie(e))}return this.set_cookie(e,a),!1},count_up:function(e,t){var a=1;this.cookie_exists(e)&&(a+=parseInt(this.get_cookie(e))),this.set_cookie(e,a)},set_cookie_exists:function(e){return!!get_cookie(e)||(set_cookie(e,"",0),!1)},get_cookie:set_cookie:function(e,t,a,o,i,n){var s=null==a?null:24*a*60*60;this.set_cookie_sec(e,t,s,o,i,n)},set_cookie_sec:function(e,t,a,o,i,n){var s=new Date;s.setSeconds(s.getSeconds()+parseInt(a)),document.cookie=e+"="+encodeURIComponent(t)+(null==a?"":"; expires="+s.toUTCString())+(null==o?"; path=/":"; path="+o)+(null==i?"":"; domain="+i)+(null==n?"":"; secure")},cookie_exists:function(e){var t=this.get_cookie(e);return null!==t&&""!==t&&void 0!==t},move:function(e,t,a){var o=jQuery(e);if(void 0===a&&(a={}),void 0===a.css&&(a.css={}),void 0===a.method&&(a.method="prependTo"),""===t&&void 0!==a.target)switch(a.target){case"wrapper":var i="left";void 0!==a.offset&&(i=a.offset),t=this.find_wrapper(e,i)}switch((t=void 0===a.moveintohidden?jQuery(t).filter(":visible"):jQuery(t)).length>1&&t.length,a.method){case"insertBefore":o.insertBefore(t);break;case"insertAfter":o.insertAfter(t);break;case"appendTo":o.appendTo(t);break;case"prependTo":o.prependTo(t);break;default:o.prependTo(t)}},set_parent_relative:function(e,t){t=void 0!==t?t:{};var a=jQuery(e).parent();t.use_grandparent&&(a=a.parent()),"static"!==a.css("position")&&""!==a.css("position")||a.css("position","relative")},fix_element:function(e,t){t=void 0!==t?t:{};var a=jQuery(e);t.use_grandparent?this.set_parent_relative(a.parent()):this.set_parent_relative(a),t.is_invisible&&a.show();var o=parseInt(a.offset().top),i=parseInt(a.offset().left);if(t.is_invisible&&a.hide(),"left"===t.offset){var n=jQuery(window).width()-i-a.outerWidth();a.css("position","fixed").css("top",o+"px").css("right",n+"px").css("left","")}else a.css("position","fixed").css("top",o+"px").css("left",i+"px").css("right","")},find_wrapper:function(e,t){var a;return jQuery("body").children().each((function(o,i){if(i.id!==e.substring(1)){var n=jQuery(i);if("right"===t&&n.offset().left+jQuery(n).width()<jQuery(window).width()||"left"===t&&n.offset().left>0)return"static"!==n.css("position")&&""!==n.css("position")||n.css("position","relative"),a=i,!1}})),a},center_fixed_element:function(e){var t=jQuery(e),a=jQuery(window).width()/2-parseInt(t.css("width"))/2;t.css("left",a+"px")},center_vertically:function(e){var t=jQuery(e),a=jQuery(window).height()/2-parseInt(t.css("height"))/2;"fixed"!==t.css("position")&&(a-=topoffset=parseInt(t.offset().top)),t.css("top",a+"px")},close:wait_for_images:function(e,t){var a=0,o=[];e.find('img[src][src!=""]').each((),0===o.length&&t.call(e),jQuery.each(o,(function(i,n){var s=new Image;s.src=n;var r="load error";jQuery(s).one(r,(function i(n){if(jQuery(this).off(r,i),++a==o.length)return t.call(e[0]),!1}))}))},privacy:{state:"unknown",state_executed:!1,get_state:function(){if("unknown"!==window.advads_options.privacy.state)return advads.privacy.state_executed||(advads.privacy.state_executed=!0,advads.privacy.dispatch_event(window.advads_options.privacy.state,!1)),advads.privacy.state;if("custom"===window.advads_options.privacy["consent-method"]){var e=new RegExp(".*?"+window.advads_options.privacy["custom-cookie-value"]+"[^;]*?");let t=advads.get_cookie(window.advads_options.privacy["custom-cookie-name"])||"";advads.privacy.state_executed||(advads.privacy.state_executed=!0,advads.privacy.dispatch_event(t.match(e)?"accepted":"unknown",!0))}advads.privacy.state_executed=!0;var t=0,a=setInterval((function(){switch(600==++t&&clearInterval(a),window.advads_options.privacy["consent-method"]){case"custom":(advads.get_cookie(window.advads_options.privacy["custom-cookie-name"])||"").match(e)&&(clearInterval(a),"accepted"!==advads.privacy.state&&advads.privacy.dispatch_event("accepted",!0));break;case"iab_tcf_20":if(void 0===window.__tcfapi)return;clearInterval(a),window.__tcfapi("addEventListener",2,(function(e,t){if(t&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||null===e.eventStatus&&void 0!==window.googlefc&&(void 0!==e.purpose||!e.gdprApplies))){var a="useractioncomplete"===e.eventStatus;if(!e.gdprApplies)return void("not_needed"!==advads.privacy.state&&advads.privacy.dispatch_event("not_needed",a));if(e.purpose.consents[1])return void("accepted"!==advads.privacy.state&&advads.privacy.dispatch_event("accepted",a));"rejected"!==advads.privacy.state&&advads.privacy.dispatch_event("rejected",a)}}))}}),100);return advads.privacy.state},is_adsense_npa_enabled:function(){return!window.advads_options||!window.advads_options.privacy||!(!window.advads_options.privacy["show-non-personalized-adsense"]||"custom"!==window.advads_options.privacy["consent-method"])},dispatch_event:function(e,t){var a=advads.privacy.state;advads.privacy.state=e,window.advanced_ads_ready_queue.push((function(){document.dispatchEvent(new CustomEvent("advanced_ads_privacy",{detail:{state:e,previousState:a,userAction:t}}))}))},is_ad_decoded:function(e){return null===document.querySelector('script[data-tcf="waiting-for-consent"][data-id="'+e+'"]')},decode_ad:function(e,t){t="boolean"!=typeof t||t;var a=decodeURIComponent(Array.prototype.map.call(atob(e.textContent),().join(""));if(!t)return a;e.replaceWith(document.createRange().createContextualFragment(a))}}},window.advanced_ads_ready_queue.push(advads.privacy.get_state),document.addEventListener("advanced_ads_privacy",(function(e){"accepted"!==e.detail.state&&"not_needed"!==e.detail.state||e.detail.userAction||"loading"===document.readyState||document.querySelectorAll('script[type="text/plain"][data-tcf="waiting-for-consent"]').forEach(advads.privacy.decode_ad)}));