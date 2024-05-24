var AdvAdsTrackingUtils={hasAd:function(a){for(var e in a)if(Array.isArray(a[e])&&a[e].length)return!0;return!1},param:function(a){return Object.keys(a).map((function(e){return Array.isArray(a[e])?Object.keys(a[e]).map(().join("&"):encodeURIComponent(e)+"="+encodeURIComponent(a[e])})).join("&").replace(/%20/g,"+")},concat:function(){var a=Array.prototype.slice.call(arguments),e={};for(var d in a)for(var t in a[d])void 0===e[t]?e[t]=a[d][t]:"function"==typeof e[t].concat&&(e[t]=e[t].concat(a[d][t]));return e},adsByBlog:function(a,e){var d={};return void 0!==a[e]&&(d[e]=a[e]),d},extend:function(){var a={};for(var e in arguments){var d=arguments[e];for(var t in d)Object.prototype.hasOwnProperty.call(d,t)&&(a[t]=d[t])}return a},inArray:findParentByClassName:getTimestamp:function(){return Date.now||(Date.now=,Math.floor(Date.now()/1e3)},arrayUnique:blogUseGA:function(a){return("ga"===advads_tracking_methods[a]||advads_tracking_parallel[a])&&!!advads_gatracking_uids[a]},post:function(a,e,d){var t=new XMLHttpRequest;return t.timeout=5e3,new Promise((function(r,s){t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&(0===t.status||t.status>=200&&t.status<300?r(t):s({status:t.status,statusText:t.statusText}))},t.open("POST",a,d||!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.send("string"==typeof e?e:AdvAdsTrackingUtils.param(e))}))}},AdvAdsImpressionTracker={ajaxAds:{},passiveAds:{},initialAds:{},removeDelayedAds:function(a){var e=document.querySelectorAll('[data-advadstrackid][data-delayed="1"]'),d=e.length;if(!d)return a;for(var t=0;t<d;t++){var r=parseInt(e[t].dataset.advadstrackid,10),s=parseInt(e[t].dataset.advadstrackbid,10);if(AdvAdsTrackingUtils.hasAd(a)&&void 0!==a[s]){var n=a[s].indexOf(r);n>-1&&a[s].splice(n,1)}}return a},track:function(a,e){if(e=e||"all",AdvAdsTrackingUtils.hasAd(a))for(var d in a){if(AdvAdsTrackingUtils.blogUseGA(d)&&(advadsGATracking.deferedAds=AdvAdsTrackingUtils.concat(advadsGATracking.deferedAds,AdvAdsTrackingUtils.adsByBlog(a,d)),"delayed"===e?this.triggerEvent("advadsGADelayedTrack"):this.triggerEvent("advadsGADeferedTrack"),"ajax"===e&&AdvAdsTrackingUtils.hasAd(AdvAdsTrackingUtils.adsByBlog(this.ajaxAds,d))))for(var t in this.ajaxAds[d]){a[d].indexOf(this.ajaxAds[d][t])>-1&&this.ajaxAds[d].splice(t,1)}"ajax"===e||"frontend"!==advads_tracking_methods[d]&&"onrequest"!==advads_tracking_methods[d]||this.sendTrack(d,a[d]),this.ajaxAds={}}},triggerEvent:sendTrack:function(a,e){e.length&&AdvAdsTrackingUtils.post(advads_tracking_urls[a],{ads:e,action:window.advadsTracking.impressionActionName,referrer:window.location.pathname+window.location.search,bid:a})}};!function(){var a=function(){if("undefined"!=typeof advads_tracking_ads&&(advads_tracking_ads=AdvAdsImpressionTracker.removeDelayedAds(advads_tracking_ads),AdvAdsTrackingUtils.hasAd(advads_tracking_ads)))for(var a in advads_tracking_ads)"frontend"===advads_tracking_methods[a]&&("undefined"!=typeof advads&&void 0!==advads.privacy.is_ad_decoded&&(advads_tracking_ads[a]=advads_tracking_ads[a].filter(advads.privacy.is_ad_decoded)),AdvAdsImpressionTracker.track(advads_tracking_ads),advads_tracking_ads={1:[]})};"undefined"!=typeof advads&&"unknown"===advads.privacy.get_state()?document.addEventListener("advanced_ads_privacy",():advanced_ads_ready(a,"interactive")}(),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);var AdvAdsClickTracker={wrappers:[],overTarget:!1,currentTarget:!1,lastClick:[],elements:["iframe","a.adv-link","button.adv-link"],targets:["aswift_0","aswift_1","aswift_3","aswift_4","aswift_5","aswift_6","aswift_7","aswift_8","aswift_9"],findTargets:function(){AdvAdsClickTracker.wrappers.forEach((function(a){document.querySelectorAll(a).forEach((function(a){null!==a&&AdvAdsClickTracker.elements.forEach((function(e){Array.prototype.push.apply(AdvAdsClickTracker.targets,Array.prototype.slice.call(a.querySelectorAll(e)))}))}))})),AdvAdsClickTracker.targets=AdvAdsClickTracker.targets.filter(AdvAdsTrackingUtils.arrayUnique),this.processTargets()},processTargets:registerTargetHandlers:function(a){a.onmouseover=this.mouseOver,a.onmouseout=this.mouseOut,void 0!==window.attachEvent?top.attachEvent("onblur",this.adClick):void 0!==window.addEventListener&&top.addEventListener("blur",this.adClick,!1)},registerWrapperHandlers:function(){var a;["click","touchend","auxclick"].forEach((function(e){document.addEventListener(e,(function(e){if(!("auxclick"===e.type&&2!==e.which&&1!==e.which||a)){var d=!1;-1!==["a","iframe","button"].indexOf(e.target.localName)&&(d=!0);for(var t=e.target;t&&t!==this;t=t.parentNode){null===t.parentNode||d||-1===["a","iframe","button"].indexOf(t.parentNode.localName)||(d=!0);var r=!1;if(AdvAdsClickTracker.wrappers.forEach((function(a){(t.matches?t.matches(a):t.msMatchesSelector(a))&&(e.target.classList.contains("notrack")||!d&&null===t.querySelector("iframe")||(r=!0))})),r){if(this.currentTarget===e.target)return;AdvAdsClickTracker.ajaxSend(e.target);break}}}}),!1)})),document.addEventListener("touchmove",(function(e){a=!0}),!1),document.addEventListener("touchstart",(,!1)},adClick:mouseOver:function(){AdvAdsClickTracker.overTarget=!0,AdvAdsClickTracker.currentTarget=this},mouseOut:ajaxSend:function(a){var e=a.getAttribute("data-advadstrackid"),d=a.getAttribute("data-advadstrackbid"),t=a.getAttribute("data-advadsredirect");if(null===e){var r=AdvAdsTrackingUtils.findParentByClassName(a,[advadsTracking.targetClass]);e=r.getAttribute("data-advadstrackid"),d=r.getAttribute("data-advadstrackbid"),t=r.getAttribute("data-advadsredirect")}var s=advads_tracking_urls[d],n={action:window.advadsTracking.clickActionName,referrer:window.location.pathname+window.location.search,type:"ajax",ads:[e],bid:d};if(10>AdvAdsTrackingUtils.getTimestamp()-this.lastClick[e])return!1;if(AdvAdsTrackingUtils.blogUseGA(d)&&(advancedAdsGAInstances.getInstance(d).trackClick(e,!1,!1,!1),this.lastClick[e]=AdvAdsTrackingUtils.getTimestamp(),!advads_tracking_parallel[d]))return;if(!t){if(navigator.sendBeacon&&-1===s.indexOf("admin-ajax.php")){var i=JSON.parse(JSON.stringify(n));i.type="beacon",i=new Blob([JSON.stringify(i)],{type:"application/json; charset=UTF-8"}),navigator.sendBeacon(s,i)}else AdvAdsTrackingUtils.post(s,n,!1);this.lastClick[e]=AdvAdsTrackingUtils.getTimestamp()}}};advanced_ads_ready((function(){AdvAdsClickTracker.wrappers=null!==advadsTracking.targetClass&&""!==advadsTracking.targetClass?Array("."+advadsTracking.targetClass,".adsbygoogle"):Array(" ",".adsbygoogle"),window.onpageshow=setTimeout((,1500),AdvAdsClickTracker.registerWrapperHandlers()}),"interactive"),"undefined"!=typeof advanced_ads_pro&&advanced_ads_pro.observers.add((function(a){if(-1!==["inject_passive_ads","inject_ajax_ads","advanced_ads_decode_inserted_ads","inject_placement"].indexOf(a.event)){Array.isArray(a.ad_ids)&&!a.ad_ids.length&&(a.ad_ids={});var e="all",d={};switch("complete"!==document.readyState?document.addEventListener("readystatechange",():AdvAdsClickTracker.findTargets(),a.event){case"inject_passive_ads":for(var t in AdvAdsImpressionTracker.passiveAds=AdvAdsTrackingUtils.concat(AdvAdsImpressionTracker.passiveAds,a.ad_ids),a.ad_ids)if("frontend"===advads_tracking_methods[t]?(d=AdvAdsTrackingUtils.concat(advads_tracking_ads,a.ad_ids),advads_tracking_ads={1:[]}):(e="passive",d=a.ad_ids),"undefined"!=typeof advads&&void 0!==advads.privacy.is_ad_decoded)for(var t in d)d[t]=d[t].filter(advads.privacy.is_ad_decoded);break;case"inject_ajax_ads":var r="undefined"!=typeof advads&&window.advads_options.privacy.enabled&&"iab_tcf_20"===window.advads_options.privacy["consent-method"];for(var t in a.ad_ids)if(AdvAdsTrackingUtils.blogUseGA(t)||r)for(var s in a.ad_ids[t]){var n=document.querySelector('[data-advadstrackid="'+a.ad_ids[t][s]+'"][data-advadstrackbid="'+t+'"]');null!==n&&"undefined"!=typeof advads_items&&void 0!==advads_items.showed&&advads_items.showed.indexOf(n.id)>-1||(void 0===AdvAdsImpressionTracker.ajaxAds[t]&&(AdvAdsImpressionTracker.ajaxAds[t]=[]),AdvAdsImpressionTracker.ajaxAds[t].push(a.ad_ids[t][s]))}e=r&&"frontend"===advads_tracking_methods[t]?"all":"ajax",d=JSON.parse(JSON.stringify(AdvAdsImpressionTracker.ajaxAds));break;case"advanced_ads_decode_inserted_ads":d=a.ad_ids}advanced_ads_pro.busy?document.addEventListener("advanced_ads_pro.idle",(function(){AdvAdsImpressionTracker.track(AdvAdsImpressionTracker.removeDelayedAds(d),e)}),{once:!0}):AdvAdsImpressionTracker.track(AdvAdsImpressionTracker.removeDelayedAds(d),e)}}));