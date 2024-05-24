var advanced_ads_pro,Advads_passive_cb_Conditions;function Advads_passive_cb_Placement(e,t){if(!("object"==typeof e&&e.hasOwnProperty("id")&&e.hasOwnProperty("type")&&e.hasOwnProperty("ads")&&e.hasOwnProperty("placement_info")&&"object"==typeof e.ads))throw new SyntaxError("Can not create Advads_passive_cb_Placement obj");this.id=e.id,this.ajax_query=e.ajax_query,this.type=e.type,this.element_id=t,this.ads=e.ads,this.ads_for_ab=e.ads_for_ab,this.placement_info=e.placement_info,this.placement_id=advads_pro_utils.isset_nested(this.placement_info,"id")?this.placement_info.id:null,this.group_info=e.group_info,this.group_wrap=e.group_wrap,this.server_info_duration=parseInt(e.server_info_duration,10)||0,this.server_conditions=e.server_conditions,e.inject_before&&advanced_ads_pro.inject_before.push({elementId:this.element_id,data:e.inject_before})}function Advads_passive_cb_Ad(e,t){if("object"!=typeof e||!advads_pro_utils.isset(e.id)||!advads_pro_utils.isset(e.title)||!advads_pro_utils.isset(e.content))throw new SyntaxError("Can not create Advads_passive_cb_Ad obj");this.id=e.id,this.title=e.title,this.content=e.content||"",this.type=e.type,this.expiry_date=parseInt(e.expiry_date)||0,this.visitors=e.visitors,this.once_per_page=e.once_per_page,this.elementid=t||null,this.day_indexes=e.day_indexes||null,this.debugmode=e.debugmode,this.tracking_enabled=void 0===e.tracking_enabled||1==e.tracking_enabled,this.blog_id=e.blog_id||"",this.privacy=e.privacy||{},this.position=e.position||""}function Advads_passive_cb_Group(e,t){if(!(advads_pro_utils.isset(e.group_info.id)&&advads_pro_utils.isset(e.group_info.type)&&advads_pro_utils.isset(e.group_info.weights)&&advads_pro_utils.isset(e.group_info.ordered_ad_ids)&&advads_pro_utils.isset(e.group_info.ad_count)&&advads_pro_utils.isset(e.ads)))throw new SyntaxError("Can not create Advads_passive_cb_Group obj");this.id=e.group_info.id,this.name=e.group_info.name||this.id,this.type=e.group_info.type,this.weights=e.group_info.weights,this.ordered_ad_ids=e.group_info.ordered_ad_ids,this.ad_count=e.group_info.ad_count,this.elementid=t||null,this.slider_options=!!advads_pro_utils.isset(e.group_info.slider_options)&&e.group_info.slider_options,this.refresh_enabled=!!advads_pro_utils.isset(e.group_info.refresh_enabled),advads_pro_utils.isset(e.group_info.refresh_interval_for_ads)?this.refresh_interval=e.group_info.refresh_interval_for_ads:advads_pro_utils.isset(e.group_info.refresh_interval)?this.refresh_interval=e.group_info.refresh_interval:this.refresh_interval=2e3,this.placement=e instanceof Advads_passive_cb_Placement&&e,this.random=e.group_info.random,this.ads=e.ads,this.group_wrap=e.group_wrap,this.is_empty=!0}advanced_ads_pro||(advanced_ads_pro={ads:[],passive_ads:{},deferedAds:[],blockme:!1,blockmeQueue:[],observers:jQuery.Callbacks(),postscribeObservers:jQuery.Callbacks(),random_placements:!1,iterations:0,adblocker_active:!1,injected:0,injected_done:0,options:{action:"advads_ad_select"},inject_before:[],isBusy:!1,set busy(e){this.isBusy=e,document.dispatchEvent(new CustomEvent("advanced_ads_pro."+(e?"busy":"idle")))},get busy(){return this.isBusy},load:function(e){"use strict";var t=e.hasOwnProperty("id")?e.id:null,a=e.hasOwnProperty("method")?e.method:null,i=e.hasOwnProperty("params")&&"object"==typeof e.params?this.add_general_ajax_args(e.params):{},s=e.hasOwnProperty("elementid")?e.elementid:null,r=advanced_ads_pro_ajax_object.lazy_load_module_enabled&&i&&"enabled"===i.lazy_load,n=e.hasOwnProperty("blog_id")?e.blog_id:"",e=e.hasOwnProperty("server_conditions")?e.server_conditions:"";if(s&&1<this.iterations&&jQuery("."+s).empty(),i&&"object"==typeof i){if(!advads_pro_utils.selector_exists(i))return;if(i.test_id&&(o="placement"===i.previous_method?i.previous_id:t,jQuery.inArray(o,this.get_random_placements())<0))return;i.adblocker_active=this.adblocker_active,i=JSON.stringify(i)}var o={ad_id:t,ad_method:a,ad_args:i,elementId:s,blog_id:n,server_conditions:e};r?advanced_ads_pro.lazy_load.add(s,"ajax",o):this.deferedAds[this.deferedAds.length]=o},add_general_ajax_args:function(e){return advads_pro_utils.isset(e.post)&&advads_ajax_queries_args[e.post]&&(e.post=advads_ajax_queries_args[e.post]),e},hasAd:function(e,t,a,i,s){"use strict";e={id:e,type:t,title:a,cb_type:i,elementId:s};this.ads.push(e),this.observers.fire({event:"hasAd",ad:e})},injectBlocked:function(){"use strict";var e,t,a=this.blockmeQueue,i=a.length;for(this.blockmeQueue=[],t=0;t<i;t+=1)e=a[t],this.inject(e[0],e[1])},_inject_before:function(t,a){return t&&advads_pro_utils.each(advanced_ads_pro.inject_before,function(e){e.elementId===t&&(advads_pro_utils.each(e.data,function(e){a.append(e)}),a=jQuery("."+t),e.data=[])}),a},inject:function(e,t){"use strict";var a,i,s=this;if(this.blockme)this.blockmeQueue.push([e,t]);else{this.injected++;for(var r=new RegExp(/^([\s\S]*?)<script[^>]+?data-tcf="waiting-for-consent"[^>]+>(.+?)<\/script>([\s\S]*)$/i),n=r.exec(t);null!==n;){var o=document.createElement("script");o.setAttribute("type","text/plain"),o.textContent=n[2],t=n[1]+advads.privacy.decode_ad(o,!1)+n[3],n=r.exec(t)}try{if(a=t.match(/<script[^>]+src/)&&-1===t.indexOf(" async"),null===e)i=jQuery("head ");else if(!(i=jQuery("."+e)).length)return void this.injected--;a?(this.blockme=!0,(i=s._inject_before(e,i)).each(function(){var e=jQuery(this);advads_postscribe(e,t,{beforeWriteToken:s.beforeWriteToken,afterAsync:function(){s.blockme=!1,s.injectBlocked()},done:function(){s.postscribeObservers.fire({event:"postscribe_done",ref:i,ad:t})},error:function(e){console.error(e),advanced_ads_pro.injected--}})})):(i=s._inject_before(e,i)).each(function(){var e=jQuery(this);advads_postscribe(e,t,{beforeWriteToken:s.beforeWriteToken,done:function(){s.postscribeObservers.fire({event:"postscribe_done",ref:i,ad:t})},error:function(e){console.error(e),advanced_ads_pro.injected--}})})}catch(e){console.error(e),this.injected--}}},beforeWriteToken:function(e){if("startTag"===e.type)for(var t in e.attrs){var a=e.attrs[t];'{"'===a.substring(0,2)&&(a=a.replace(/\"/g,"&quot;"),e.attrs[t]=a)}return"atomicTag"===e.type&&e.src&&(e.src=e.src.replace(/&amp;/g,"&")),e},loadAjaxAds:function(){"use strict";if(!this.deferedAds.length)return advanced_ads_pro.observers.fire({event:"inject_ajax_ads",ad_ids:[]}),void advanced_ads_pro.return_to_idle_injections_done();var e={action:"advads_ad_select",ad_ids:this.ads,deferedAds:this.deferedAds,consent:"undefined"==typeof advads?"not_needed":advads.privacy.get_state()};document.dispatchEvent(new CustomEvent("advads_ajax_ad_select",{detail:e})),this.deferedAds=[],jQuery.ajax({url:advanced_ads_pro_ajax_object.ajax_url,method:"POST",data:e,dataType:"json"}).done(function(e){var t={};if(Array.isArray(e)){advanced_ads_pro.observe_injections();for(var a=0;a<e.length;a++){var i=e[a];if(i.hasOwnProperty("status")&&"success"===i.status&&i.hasOwnProperty("item")&&i.item&&(i.inject_before&&advanced_ads_pro.inject_before.push({elementId:i.elementId,data:i.inject_before}),advanced_ads_pro.inject(i.elementId,i.item,!0),i.hasOwnProperty("ads")&&Array.isArray(i.ads)))for(var s,r=0;r<i.ads.length;r++)advanced_ads_pro.hasAd(i.ads[r].id,i.ads[r].type,i.ads[r].title,"ajax",i.elementId),"ad"===i.ads[r].type&&i.ads[r].tracking_enabled&&(void 0===t[s=i.blog_id||1]&&(t[s]=[]),t[s].push(i.ads[r].id));i.hasOwnProperty("method")&&"placement"===i.method&&advanced_ads_pro.observers.fire({event:"inject_placement",id:i.id,is_empty:!!i.item,cb_type:"ajax"})}advanced_ads_pro.observers.fire({event:"inject_ajax_ads",ad_ids:t}),advads_pro_utils.log("AJAX CB response\n",e),advanced_ads_pro.return_to_idle_injections_done()}}).fail(function(){advanced_ads_pro.return_to_idle_injections_done()})},get_random_placements:function(e){return!1===this.random_placements&&(this.random_placements=[],advads_pro_utils.each_key(e,function(e,t){"object"==typeof t&&(random_placement=advads_pro_utils.get_random_el_by_weight(t.placements))&&this.random_placements.push(random_placement)},this)),this.random_placements},create_non_existent_arrays:function(){0===this.iterations&&(advads_pro_utils.each(["advads_passive_ads","advads_passive_groups","advads_passive_placements"],function(e){advads_pro_utils.isset(window[e])||(window[e]={})}),advads_pro_utils.each(["advads_placement_tests","advads_ajax_queries","advads_has_ads","advads_js_items"],function(e){advads_pro_utils.isset(window[e])||(window[e]=[])}))},process_passive_cb:function(){function t(e){a.busy=!0,a.iterations++,a.lazy_load.clear(),a.adblocker_active=e,a.observe_injections(),advads_pro_utils.each(advads_has_ads,function(e){advanced_ads_pro.hasAd.apply(advanced_ads_pro,e)}),a.get_random_placements(advads_placement_tests),advads_pro_utils.each_key(advads_passive_ads,function(t,a){var e=(t+"").indexOf("_");-1!==e&&(t=t.slice(0,e)),advads_pro_utils.each(a.elementid,function(e){1<advanced_ads_pro.iterations&&jQuery("."+e).empty();e=new Advads_passive_cb_Ad(a.ads[t],e);e.can_display()&&e.output({track:!0,inject:!0,do_has_ad:!0})})}),advads_pro_utils.each_key(advads_passive_groups,function(e,t){advads_pro_utils.each(t.elementid,function(e){1<advanced_ads_pro.iterations&&jQuery("."+e).empty(),new Advads_passive_cb_Group(t,e).output()})}),advads_pro_utils.each_key(advads_passive_placements,function(a,i){advads_pro_utils.each(i.elementid,function(e){1<advanced_ads_pro.iterations&&jQuery("."+e).empty();var t=new Advads_passive_cb_Placement(i,e);t.can_use_passive_cb()?advanced_ads_pro_ajax_object.lazy_load_module_enabled&&i.placement_info.options&&"enabled"===i.placement_info.options.lazy_load?advanced_ads_pro.lazy_load.add(e,"passive",{key:a,placement_id:i.placement_info.id}):t.output():advanced_ads_pro.load(t.ajax_query)})}),advads_pro_utils.isset(window.advads_js_items)&&advads_pro_utils.each_key(advads_js_items,function(e,t){1<advanced_ads_pro.iterations||advads_pro_utils.selector_exists(t.args)&&(t.inject_before&&advanced_ads_pro.inject_before.push({elementId:t.elementid,data:t.inject_before}),advanced_ads_pro.inject(t.elementid,t.output,!0),advads_pro_utils.each(t.has_js_items,function(e){advanced_ads_pro.hasAd(e.id,e.type,e.title),"ad"===e.type&&(advanced_ads_pro.passive_ads[e.blog_id]||(advanced_ads_pro.passive_ads[e.blog_id]=[]),advanced_ads_pro.passive_ads[e.blog_id].push(e.id))}))}),a.observers.fire({event:"inject_passive_ads",ad_ids:a.passive_ads}),a.passive_ads={},a.process_ajax_ads(advads_ajax_queries),a.lazy_load.enable()}var a=this;a.create_non_existent_arrays(),advads_pro_utils.print_debug_arrays();"function"==typeof advanced_ads_check_adblocker?advanced_ads_check_adblocker(function(e){t(e)}):t(!1)},observe_injections:function(){0<advanced_ads_pro.injected_done||advanced_ads_pro.postscribeObservers.add(function(e){"postscribe_done"===e.event&&advanced_ads_pro.injected_done++})},return_to_idle_injections_done:function(){var e=1e3,t=setInterval(function(){e-=10,(advanced_ads_pro.injected_done>=advanced_ads_pro.injected||e<0)&&(advanced_ads_pro.injected=0,advanced_ads_pro.injected_done=0,advanced_ads_pro.busy=!1,clearInterval(t))},10)},process_ajax_ads:function(e){Array.isArray(e)&&advads_pro_utils.each(e,function(e){advanced_ads_pro.load(e)}),this.loadAjaxAds()},lazy_load:{lazy_map:{},did_init:!1,add:function(e,t,a){var i,s=document.getElementById(e);s&&(a.placement_id?i=a.placement_id:"placement"===a.ad_method&&(i=a.ad_id),this.lazy_map[e]={node:s,type:t,data:a,offset:this.get_offset(i)})},get_offset:function(e){var t=0;return t=advanced_ads_pro_ajax_object.lazy_load?advanced_ads_pro_ajax_object.lazy_load.offsets[e]?parseInt(advanced_ads_pro_ajax_object.lazy_load.offsets[e],10):parseInt(advanced_ads_pro_ajax_object.lazy_load.default_offset,10):t},clear:function(){this.lazy_map={}},enable:function(){this.did_init?jQuery(window).trigger("scroll"):(this._create_scroll_handler(),this.did_init=!0)},_create_scroll_handler:function(){var s=this,e=!0;function t(){var i=jQuery(window).height();advads_pro_utils.each_key(s.lazy_map,function(e,t){var a=t.node.getBoundingClientRect(),t=t.offset;0<=a.top+t&&a.bottom-t<=i&&s._display(e)}),e=!1}function a(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return setTimeout(e,16)}).call(window,e)}jQuery(window).on("scroll",function(){e||(e=!0,a(t))}),a(t)},_display:function(e){var t=this.lazy_map[e];t&&(delete this.lazy_map[e],"ajax"===t.type?(advanced_ads_pro.deferedAds.push(t.data),advanced_ads_pro.process_ajax_ads()):(new Advads_passive_cb_Placement(advads_passive_placements[t.data.key],e).output(),advanced_ads_pro.observers.fire({event:"inject_passive_ads",ad_ids:advanced_ads_pro.passive_ads}),advanced_ads_pro.passive_ads={}),advanced_ads_pro.busy=!1)}}},jQuery(document).on("advanced-ads-resize-window",function(e){function t(){for(var e=advanced_ads_pro.ads.length;e--;)"off"!==advanced_ads_pro.ads.cb_method&&advanced_ads_pro.ads.splice(e,1);advanced_ads_pro.process_passive_cb()}advanced_ads_pro.busy?document.addEventListener("advanced_ads_pro.idle",t,{once:!0}):t()}),"undefined"!=typeof advads&&void 0!==advads.privacy.dispatch_event?document.addEventListener("advanced_ads_privacy",function(e){var i;"unknown"===e.detail.previousState||"rejected"===e.detail.previousState&&"accepted"===e.detail.state?(advads_pro_utils.log("reload ads! transition from "+e.detail.previousState+" to "+e.detail.state),"accepted"!==e.detail.state&&"not_needed"!==e.detail.state||(i='script[type="text/plain"][data-tcf="waiting-for-consent"]',document.querySelectorAll(i).forEach(function(e){advanced_ads_pro.passive_ads.hasOwnProperty(e.dataset.bid)||(advanced_ads_pro.passive_ads[e.dataset.bid]=[]),advanced_ads_pro.passive_ads[e.dataset.bid].push(parseInt(e.dataset.id,10)),advads.privacy.decode_ad(e)}),new MutationObserver(function(e){function t(e){void 0!==e.dataset.noTrack&&"impressions"===e.dataset.noTrack||(a.hasOwnProperty(e.dataset.bid)||(a[e.dataset.bid]=[]),a[e.dataset.bid].push(parseInt(e.dataset.id,10))),advads.privacy.decode_ad(e)}var a={};e.forEach(function(e){e.addedNodes.forEach(function(e){void 0!==e.tagName&&void 0!==e.dataset&&"script"===e.tagName.toLowerCase()&&"waiting-for-consent"===e.dataset.tcf?t(e):void 0!==e.dataset&&"waiting-for-consent"===e.dataset.tcf||document.querySelectorAll(i).forEach(t)})}),Object.keys(a).length&&advanced_ads_pro.observers.fire({event:"advanced_ads_decode_inserted_ads",ad_ids:a})}).observe(document,{subtree:!0,childList:!0})),advanced_ads_pro.busy?document.addEventListener("advanced_ads_pro.idle",advanced_ads_pro.process_passive_cb,{once:!0}):advanced_ads_pro.process_passive_cb()):advads_pro_utils.log("no action! transition from "+e.detail.previousState+" to "+e.detail.state)}):(window.advanced_ads_ready||jQuery(document).ready).call(null,function(){advanced_ads_pro.process_passive_cb()}),Advads_passive_cb_Conditions={REFERRER_COOKIE_NAME:"advanced_ads_pro_visitor_referrer",PAGE_IMPRESSIONS_COOKIE_NAME:"advanced_ads_page_impressions",AD_IMPRESSIONS_COOKIE_NAME:"advanced_ads_ad_impressions",SERVER_INFO_COOKIE_NAME:"advanced_ads_pro_server_info",conditions:{mobile:"check_mobile",referrer_url:"check_referrer_url",user_agent:"check_user_agent",request_uri:"check_request_uri",browser_lang:"check_browser_lang",cookie:"check_cookie",page_impressions:"check_page_impressions",ad_impressions:"check_ad_impressions",new_visitor:"check_new_visitor",device_width:"check_browser_width",tablet:"check_tablet",loggedin:"check_loggedin",capability:"check_capability",role:"check_role",geo_targeting:"check_geo_targeting",buddypress_profile_field:"check_buddypress_profile_field"},init:function(){jQuery(document).trigger("advads-passive-cb-conditions",[this]),this.init=function(){}},frontend_check:function(e,t){var a=this.conditions[e.type];return!(a="string"==typeof a?advads_pro_utils.bind(this[a],this):a)||!!a(e,t)},check_mobile:function(e){function a(e,t){return e.test(t)}function t(e){var t=(e=e||navigator.userAgent).split("[FBAN");return void 0!==t[1]&&(e=t[0]),this.apple={phone:a(r,e),ipod:a(n,e),tablet:!a(r,e)&&a(o,e),device:a(r,e)||a(n,e)||a(o,e)},this.amazon={phone:a(c,e),tablet:!a(c,e)&&a(l,e),device:a(c,e)||a(l,e)},this.android={phone:a(c,e)||a(d,e),tablet:!a(c,e)&&!a(d,e)&&(a(l,e)||a(_,e)),device:a(c,e)||a(l,e)||a(d,e)||a(_,e)},this.windows={phone:a(p,e),tablet:a(u,e),device:a(p,e)||a(u,e)},this.other={blackberry:a(T,e),blackberry10:a(h,e),opera:a(b,e),firefox:a(v,e),chrome:a(f,e),device:a(T,e)||a(h,e)||a(b,e)||a(v,e)||a(f,e)},this.seven_inch=a(A,e),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0}function i(){var e=new t;return e.Class=t,e}var s,r,n,o,d,_,c,l,p,u,T,h,b,f,v,A;if(s=this,r=/iPhone/i,n=/iPod/i,o=/iPad/i,d=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,_=/Android/i,c=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,l=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,p=/IEMobile/i,u=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,T=/BlackBerry/i,h=/BB10/i,b=/Opera Mini/i,f=/(CriOS|Chrome)(?=.*\bMobile\b)/i,v=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,A=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=t:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=i():"function"==typeof define&&define.amd?define("isMobile",[],s.isMobile=i()):s.isMobile=i(),advads_pro_utils.isset(e.operator))switch(e.operator){case"is":return this.isMobile.any;case"is_not":return!this.isMobile.any}return!0},check_referrer_url:function(e){var t=advads_pro_utils.extract_cookie_data(advads.get_cookie(this.REFERRER_COOKIE_NAME))||"";return this.helper_check_string(t,e)},check_user_agent:function(e){var t="object"==typeof navigator?navigator.userAgent:"";return this.helper_check_string(t,e)},check_browser_lang:function(e){var t=e.value;if(!t)return!0;var a="object"==typeof navigator?navigator.languages?navigator.languages.join(","):navigator.language||navigator.userLanguage:"";if(!a)return!0;try{var i=new RegExp("\\b"+t+"\\b","i"),s=-1!==a.search(i)}catch(e){return!0}return"is_not"===e.operator?!s:s},check_request_uri:function(e){var t="object"==typeof location?location.href:"";return this.helper_check_string(t,e)},check_cookie:function(e){e.operator&&(e.operator=this.maybe_replace_cookie_operator(e.operator));var t=!advads_pro_utils.isset(e.operator)||"match_not"!==e.operator;if(!advads_pro_utils.isset(e.cookie)||""===e.cookie)return t;var a=advads.get_cookie(e.cookie);return advads_pro_utils.isset(a)?advads_pro_utils.isset(e.value)&&""!==e.value?(e.value=unescape(e.value.replace(/\\(.)/gm,"$1")),this.helper_check_string(a,e)):t:!t},check_page_impressions:function(e){if(advads_pro_utils.isset(e.operator)&&advads_pro_utils.isset(e.value)){var t=0,a=advads_pro_utils.extract_cookie_data(advads.get_cookie(this.PAGE_IMPRESSIONS_COOKIE_NAME));if(advads_pro_utils.isset(a)){var t=parseInt(a,10)||0,i=parseInt(e.value)||0;switch(e.operator){case"is_equal":if(i!==t)return!1;break;case"is_higher":if(t<i)return!1;break;case"is_lower":if(i<t)return!1}}}return!0},check_ad_impressions:function(e,t){if(!advads_pro_utils.isset(e.value)||!advads_pro_utils.isset(e.timeout)||!advads_pro_utils.isset(t.id))return!0;var e=parseInt(e.value)||0,t=this.AD_IMPRESSIONS_COOKIE_NAME+"_"+t.id,a=t+"_timeout";return!(advads_pro_utils.isset(advads.get_cookie(t))&&advads_pro_utils.isset(advads.get_cookie(a))&&e<=(parseInt(advads.get_cookie(t))||0))},check_new_visitor:function(e){if(advads_pro_utils.isset(e.operator)){var t=0;switch(advads_pro_utils.isset(advads.get_cookie(this.PAGE_IMPRESSIONS_COOKIE_NAME))&&(t=parseInt(advads.get_cookie(this.PAGE_IMPRESSIONS_COOKIE_NAME))||0),e.operator){case"is":return 1===t;case"is_not":return 1<t}}return!0},check_browser_width:function(e){if(advads_pro_utils.isset(e.operator)&&advads_pro_utils.isset(e.value)){var t=jQuery(window).width(),a=parseInt(e.value)||0;switch(e.operator){case"is_equal":if(a!==t)return!1;break;case"is_higher":if(t<a)return!1;break;case"is_lower":if(a<t)return!1}}return!0},check_tablet:function(e){if(advads_pro_utils.isset(e.operator)){rules={iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\\b",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",LenovoTablet:"Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",NokiaLumiaTablet:"Lumia 2520",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android.*\\bG1\\b",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9",JXDTablet:"Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",OndaTablet:"\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",AocTablet:"MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",MpmanTablet:"MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",WolderTablet:"miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b",NibiruTablet:"Nibiru M1|Nibiru Jupiter One",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",LeaderTablet:"TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",KocasoTablet:"\\b(TB-1207)\\b",Hudl:"Hudl HT7S3|Hudl 2",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b"};var t,a="object"==typeof navigator?navigator.userAgent:"",i="";for(t in rules){var s=new RegExp(rules[t],"i");if(s.test(a)){i=s;break}}switch(e.operator){case"is":return""!==i;case"is_not":return""===i}}return!0},check_loggedin:function(e){if(advads_pro_utils.isset(e.operator)&&advads_pro_utils.isset(e.type)){var t=this.check_stored(e,function(e,t){return!0===t});switch(e.operator){case"is":return!0===t;case"is_not":return!1===t}}return!0},check_capability:function(e){if(advads_pro_utils.isset(e.operator)&&advads_pro_utils.isset(e.value)&&advads_pro_utils.isset(e.type)){var t=this.check_stored(e,function(e,t){return t===e.value});switch(e.operator){case"can":return!0===t;case"can_not":return!1===t}}return!0},check_role:function(e){if(advads_pro_utils.isset(e.operator)&&advads_pro_utils.isset(e.value)&&advads_pro_utils.isset(e.type)){var t=this.check_stored(e,function(e,t){return t===e.value});switch(e.operator){case"is":return!0===t;case"is_not":return!1===t}}return!0},check_geo_targeting:function(e){return!advads_pro_utils.isset(e.type)||!advads_pro_utils.isset(e.operator)||this.check_stored(e,function(e,t){return"object"!=typeof t||(t.is_sucuri?this.check_geo_sucuri(e,t):this.check_geo_default(e,t))},this)},check_geo_default:function(e,t){var a=e.city?e.city.trim().toLowerCase():"",i=e.region?e.region.trim().toLowerCase():"",s=e.country?e.country.trim():"",r=(""+t.visitor_city).toLowerCase(),n=(""+t.visitor_region).toLowerCase(),o=""+t.continent_code,d=t.country_code;return 0===s.indexOf("CONT_")&&(d="CONT_"+o),"latlon"===e.geo_mode?!this.check_for_valid_lat_lon_options(e)||(o=advads_pro_utils.calculate_distance(parseFloat(t.current_lat),parseFloat(t.current_lon),parseFloat(e.lat),parseFloat(e.lon),e.distance_unit),"gt"===e.distance_condition?o>e.distance:o<=e.distance):"is_not"===e.operator?a?a!==r:i?i!==n:"EU"===s?!t.is_eu_state:s!==d:a?a===r:i?i===n:"EU"===s?t.is_eu_state:s===d},check_for_valid_lat_lon_options:function(e){return advads_pro_utils.is_numeric(e.lat)&&advads_pro_utils.is_numeric(e.lon)&&""!==e.distance_condition&&advads_pro_utils.is_numeric(e.distance)&&""!==e.distance_unit},check_geo_sucuri:function(e,t){e.operator;var a=e.country?e.country.trim():"";return"is_not"===e.operator?"EU"===a?!t.is_eu_state:a!==country_code:"EU"===a?t.is_eu_state:a===country_code},check_buddypress_profile_field:function(e){return!(advads_pro_utils.isset(e.operator)&&advads_pro_utils.isset(e.value)&&advads_pro_utils.isset(e.type)&&advads_pro_utils.isset(e.field))||this.check_stored(e,function(t,e){if("object"!=typeof e)return!0;if(e.field!==t.field)return!1;var a,i=e.data;return Array.isArray(i)?(a=-1!==["contain","start","end","match","regex"].indexOf(t.operator),i.length?a?i.some(function(e){return Advads_passive_cb_Conditions.helper_check_string(e,t)}):i.every(function(e){return Advads_passive_cb_Conditions.helper_check_string(e,t)}):!a):Advads_passive_cb_Conditions.helper_check_string(e.data,t)},this)},check_stored:function(e,t,a){var i,s=Advads_passive_cb_Conditions.get_stored_info()[e.type];if("object"!=typeof s)return!0;for(i in s)if(s.hasOwnProperty(i)){var r=s[i];if("object"==typeof r&&void 0!==r.data)if(t.call(a,e,r.data))return!0}return!1},helper_check_string:function(e,t){var a=t.operator,i=t.value;if("string"!=typeof i||""===i)return!0;var s=!0;switch(a){case"contain":s=-1!==e.indexOf(i);break;case"contain_not":s=-1===e.indexOf(i);break;case"start":s=0===e.lastIndexOf(i,0);break;case"start_not":s=0!==e.lastIndexOf(i,0);break;case"end":s=e.slice(-i.length)===i;break;case"end_not":s=e.slice(-i.length)!==i;break;case"match":s=e===i;break;case"match_not":s=e!==i;break;case"regex":case"regex_not":try{var r=new RegExp(i),s=!!e.match(r);"regex_not"===a&&(s=!s)}catch(e){advads_pro_utils.log('regular expression"'+i+'" in visitor condition is broken')}}return s},get_stored_info:function(){try{var e=JSON.parse(advads.get_cookie(this.SERVER_INFO_COOKIE_NAME))}catch(e){}return"object"!=typeof e||"object"!=typeof e.conditions?{}:e.conditions},maybe_replace_cookie_operator:function(e){var t={show:"match",hide:"match_not"};return t[e]||e}},Advads_passive_cb_Placement.prototype.can_display=function(){if(advads_pro_utils.isset_nested(this.placement_info,"options","test_id")&&jQuery.inArray(this.placement_id,advanced_ads_pro.get_random_placements())<0)return!1;if(advads_pro_utils.isset_nested(this.placement_info,"options","layer_placement","close","enabled")&&this.placement_info.options.layer_placement.close.enabled&&advads_pro_utils.isset_nested(this.placement_info,"options","layer_placement","close","timeout_enabled")&&this.placement_info.options.layer_placement.close.timeout_enabled&&advads_pro_utils.isset(advads.get_cookie("timeout_placement_"+this.placement_info.id)))return!1;if(advads_pro_utils.isset_nested(this.placement_info,"options","close","enabled")&&this.placement_info.options.close.enabled&&advads_pro_utils.isset_nested(this.placement_info,"options","close","timeout_enabled")&&this.placement_info.options.close.timeout_enabled&&advads_pro_utils.isset(advads.get_cookie("timeout_placement_"+this.placement_info.id)))return!1;if(advads_pro_utils.isset_nested(this.placement_info,"options")&&"object"==typeof this.placement_info.options){var e=this.placement_info.options;if(!advads_pro_utils.selector_exists(e))return!1}return!0},Advads_passive_cb_Placement.prototype.can_use_passive_cb=function(){if(this.ajax_query){var e,t=Advads_passive_cb_Conditions.get_stored_info(),a=~~((new Date).getTime()/1e3);for(e in this.server_conditions)if(this.server_conditions.hasOwnProperty(e)){var i=t[this.server_conditions[e].type];if("object"!=typeof i)return!1;i=i[e];if("object"!=typeof i)return!1;if((parseInt(i.time,10)||0)+this.server_info_duration<a)return!1}}return!0},Advads_passive_cb_Placement.prototype.output=function(){var e=!0;switch(this.type){case"ad":if(!this.can_display())break;var t=new Advads_passive_cb_Ad(this.ads[this.id],this.element_id);t.can_display()&&((t=(a=this.get_ad_for_adblocker())?a:t).output({track:!0,inject:!0,do_has_ad:!0}),e=!1);break;case"group":if("object"==typeof this.group_info){if(!this.can_display())break;var a=new Advads_passive_cb_Group(this,this.element_id);a.output(),e=a.is_empty}}advanced_ads_pro.observers.fire({event:"inject_placement",id:this.placement_id,is_empty:e,cb_type:"passive"}),advanced_ads_pro.hasAd(this.placement_id,"placement",this.placement_id,"passive")},Advads_passive_cb_Placement.prototype.get_ad_for_adblocker=function(){if(advanced_ads_pro.adblocker_active&&this.ads_for_ab)for(var e in this.ads_for_ab)return new Advads_passive_cb_Ad(this.ads_for_ab[e],this.element_id);return!1},Advads_passive_cb_Ad.prototype.output=function(e){var t;if(e=e||{},this.debugmode&&(t=this.can_display({ignore_debugmode:!0})?"displayed":"hidden",t=jQuery(this.content).find(".advads-passive-cb-debug").data(t),this.content=this.content.replace("##advanced_ads_passive_cb_debug##",t)),e.do_has_ad&&advanced_ads_pro.hasAd(this.id,"ad",this.title,"passive"),e.track&&this.tracking_enabled&&(advanced_ads_pro.passive_ads[this.blog_id]||(advanced_ads_pro.passive_ads[this.blog_id]=[]),advanced_ads_pro.passive_ads[this.blog_id].push(this.id)),advads_pro_utils.log("output passive ad",this.id,this.elementid,this.content),!e.inject)return this.content;advanced_ads_pro.inject(this.elementid,this.content)},Advads_passive_cb_Ad.prototype.can_display=function(e){return e=e||{},!(!this.debugmode||e.ignore_debugmode)||(""===this.content.trim()?(advads_pro_utils.log("passive ad id",this.id,"cannot be displayed: empty content"),!1):this.can_display_by_visitor()?this.can_display_by_expiry_date()?this.can_display_by_timeout()?this.can_display_by_display_limit()?this.can_display_by_weekday()?this.can_display_by_cfp()?!!this.can_display_by_consent()||(advads_pro_utils.log("passive ad id",this.id,"cannot be displayed: by_consent"),!1):(advads_pro_utils.log("passive ad id",this.id,"cannot be displayed: by_cfp"),!1):(advads_pro_utils.log("passive ad id",this.id,"cannot be displayed: by_weekday"),!1):(advads_pro_utils.log("passive ad id",this.id,"cannot be displayed: by_display_limit"),!1):(advads_pro_utils.log("passive ad id",this.id,"cannot be displayed: by_timeout"),!1):(advads_pro_utils.log("passive ad id",this.id,"cannot be displayed: by_expiry_date"),!1):(advads_pro_utils.log("passive ad id",this.id,"cannot be displayed: by_visitor"),!1))},Advads_passive_cb_Ad.prototype.can_display_by_visitor=function(){if(Array.isArray(this.visitors)&&0!==this.visitors.length){Advads_passive_cb_Conditions.init();for(var e,t=0,a=!1,i=0;i<this.visitors.length;++i)if(e=this.visitors[t],a&&"or"===e.connector)t++;else if(a=Advads_passive_cb_Conditions.frontend_check(e,this))t++;else if(!this.visitors[++t]||"or"!==this.visitors[t].connector)return!1}return!0},Advads_passive_cb_Ad.prototype.can_display_by_expiry_date=function(){return this.expiry_date<=0||this.expiry_date>~~((new Date).getTime()/1e3)},Advads_passive_cb_Ad.prototype.can_display_by_weekday=function(){if(!this.day_indexes)return!0;var e=new Date,t=window.advanced_ads_pro_ajax_object.wp_timezone_offset/60,a=0<=t/60?Math.floor(t/60):Math.ceil(t/60);return 60<(t=e.getUTCMinutes()+t%60)&&(a++,t%=60),e.setHours(e.getUTCHours()+a),e.setMinutes(t),0<=jQuery.inArray(e.getDay(),this.day_indexes)},Advads_passive_cb_Ad.prototype.can_display_by_timeout=function(){return!advads_pro_utils.isset(advads.get_cookie("timeout_"+this.id))},Advads_passive_cb_Ad.prototype.can_display_by_display_limit=function(){if(this.once_per_page)for(var e=0;e<advanced_ads_pro.ads.length;e++)if("ad"===advanced_ads_pro.ads[e].type&&parseInt(advanced_ads_pro.ads[e].id,10)===this.id)return!1;return!0},Advads_passive_cb_Ad.prototype.can_display_by_cfp=function(){return!advads.get_cookie("advads_pro_cfp_ban")},Advads_passive_cb_Ad.prototype.can_display_by_consent=function(){if(!advads.privacy||this.privacy.ignore||"adsense"===this.type&&advads.privacy.is_adsense_npa_enabled()||("image"===this.type||"dummy"===this.type)&&!this.privacy.needs_consent)return!0;var e=advads.privacy.get_state();return"accepted"===e||"not_needed"===e},Advads_passive_cb_Group.prototype.output=function(){var e=this.placement&&this.placement.get_ad_for_adblocker();if(advanced_ads_pro.hasAd(this.id,"group",this.name,"passive"),!e&&this.refresh_enabled)this.output_refresh();else{var t,a=0,i=[];switch(this.type){case"ordered":case"slider":t=this.shuffle_ordered_ads(this.ordered_ad_ids,this.weights);break;case"grid":t=this.random?this.shuffle_ads():this.shuffle_ordered_ads(this.ordered_ad_ids,this.weights);break;default:t=this.shuffle_ads()}if(Array.isArray(t)&&jQuery.isPlainObject(this.ads)){for(var s=0;s<t.length;s++)if(this.ads.hasOwnProperty(t[s])){var r=this.ads[t[s]];if("object"!=typeof r||(r=new Advads_passive_cb_Ad(r,this.elementid)).can_display()&&(e&&(r=e),"slider"===this.type&&this.slider_options||this.group_wrap?i.push(r.output({track:!0,inject:!1,do_has_ad:!0})):r.output({track:!0,inject:!0,do_has_ad:!0}),a++,this.is_empty=!1),a===this.ad_count)break;if(!this.is_empty&&e)break}i.length&&("slider"===this.type&&this.slider_options&&(i=this.output_slider(i)),advanced_ads_pro.inject(this.elementid,this.add_group_wrap(i,a)))}}},Advads_passive_cb_Group.prototype.output_refresh=function(){var _=this.ordered_ad_ids,c=[],l=this,p=!1,u=[],T=0,h=(this.refresh_interval,jQuery("."+l.elementid));function b(e){var t="";return advads_pro_utils.isset_nested(l.placement,"placement_info","options","placement_position")&&(t=l.placement.placement_info.options.placement_position),t=-1===["left","right"].indexOf(t)?e.position:t}h=advanced_ads_pro._inject_before(this.elementid,h),Array.isArray(_)&&jQuery.isPlainObject(this.ads)&&function e(){"ordered"===l.type?t=-1!==(a=_.indexOf(p))?_.slice(a+1).concat(_.slice(0,a)):_:-1!==(a=(t=l.shuffle_ads()).indexOf(p))&&t.splice(a,1);for(var t,a,i,s=t,r=0;r<s.length;r++){var n=s[r],o=l.ads[n];if("object"==typeof o){var d,o=new Advads_passive_cb_Ad(o,l.elementid);if(o.can_display()){0===T?(c=[o.output({track:!0,inject:!1,do_has_ad:!0})],advanced_ads_group_refresh.prepare_wrapper(h,b(o),!0)):(d=jQuery.inArray(n,u)<0,c=[o.output({track:!1,inject:!1,do_has_ad:d})],d=o,i=void 0,jQuery.inArray(d.id,u)<0&&d.tracking_enabled&&((i={})[d.blog_id]=[d.id],advanced_ads_pro.observers.fire({event:"inject_passive_ads",ad_ids:i})),advanced_ads_group_refresh.prepare_wrapper(h,b(o),!1)),u.push(o.id),advanced_ads_pro.inject(l.elementid,l.add_group_wrap(c,1)),l.is_empty=!1,T++,setTimeout(function(){l.placement&&!l.placement.can_display()||e()},(d=n,"object"!=typeof l.refresh_interval?parseInt(l.refresh_interval,10)||2e3:parseInt(l.refresh_interval[d],10)||2e3)),p=o.id;break}}}}()},Advads_passive_cb_Group.prototype.add_group_wrap=function(e,t){if(!e.length)return"";var a="",i="";if(this.group_wrap)for(var s=0;s<this.group_wrap.length;s++){var r=this.group_wrap[s];if(r.min_ads=r.min_ads||1,!("object"!=typeof r||r.min_ads>t))if(r.before&&(a=r.before+a),r.after&&(i+=r.after),"string"==typeof r.each)for(var n=0;n<e.length;n++)e[n]=r.each.replace("%s",e[n]);else if("object"==typeof r.each)for(var o=r.each,n=0;n<e.length;n++){for(var d in o){var _=!1;if(o.hasOwnProperty(d)&&"all"!==d&&(1+n)%parseInt(d,10)==0){e[n]=o[d].replace("%s",e[n]),_=!0;break}}!_&&o.all&&(e[n]=o.all.replace("%s",e[n]))}}return a+e.join("")+i},Advads_passive_cb_Group.prototype.output_slider=function(e){var t;return 1<e.length&&"function"==typeof jQuery.fn.unslider&&(t=e.join("</li><li>"),(e=[]).push('<div id="'+this.slider_options.slider_id+'" class="'+this.slider_options.init_class+" "+this.slider_options.prefix+'slider"><ul><li>'),e.push(t),e.push("</li></ul></div>"),e.push("<script>jQuery(function() { jQuery('."+this.slider_options.init_class+"').unslider({ "+this.slider_options.settings+" }); });<\/script>")),e},Advads_passive_cb_Group.prototype.shuffle_ordered_ads=function(e,t){weight_array=[];for(var a=0;a<e.length;a++){var i=t[e[a]];if(!i)return e;weight_array.push(i)}for(var s,r,n=weight_array.length,o=0,a=1;a<=n;a++)a!=n&&weight_array[a]===weight_array[a-1]||(1!==(r=a-o)&&(s=advads_pro_utils.shuffle_array(e.slice(o,o+r)),r=[o,r].concat(s),Array.prototype.splice.apply(e,r)),o=a);return e},Advads_passive_cb_Group.prototype.shuffle_ads=function(){for(var e=[],t=jQuery.extend({},this.weights);null!==(random_ad_id=advads_pro_utils.get_random_el_by_weight(t));)delete t[random_ad_id],e.push(parseInt(random_ad_id,10));return e});var advads_pro_utils=advads_pro_utils||{debug:window.location&&window.location.hash&&-1!==window.location.hash.indexOf("#debug=true"),each:function(e,t,a){for(var i=e&&e.length||0,s=0;s<i;s++)t.call(a,e[s],s)},each_key:function(e,t,a){if("object"==typeof e)for(var i in e)e.hasOwnProperty(i)&&t.call(a,i,e[i])},log:function(){var e;this.debug&&this.isset(window.console)&&((e=Array.prototype.slice.call(arguments)).unshift("Advanced Ads CB:"),window.console.log.apply(window.console,e))},print_debug_arrays:function(){0===advanced_ads_pro.iterations&&(this.log("passive_ads\n",advads_passive_ads),this.log("passive_groups\n",advads_passive_groups),this.log("passive_placements\n",advads_passive_placements),this.log("ajax_queries\n",advads_ajax_queries),this.log(Advads_passive_cb_Conditions.SERVER_INFO_COOKIE_NAME+"\n",Advads_passive_cb_Conditions.get_stored_info()))},isset:function(e){return void 0!==e},isset_nested:function(e){for(var t=1;t<arguments.length;t++){if(!e||!e.hasOwnProperty(arguments[t]))return!1;e=e[arguments[t]]}return!0},is_numeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},get_random_number:function(e,t){t=e-.5+Math.random()*(t-e+1);return Math.round(t)},get_random_el_by_weight:function(e,t){var a,i=0;if(t=void 0!==t&&t,"object"==typeof e){for(var s in e)s!==t&&e.hasOwnProperty(s)&&(i+=parseInt(e[s])||0);if(i<1)return null;for(var s in a=advads_pro_utils.get_random_number(1,i),e)if(s!==t&&e.hasOwnProperty(s)&&(a-=e[s])<=0)return s}},bind:function(e,t){return function(){return e.apply(t,arguments)}},shuffle_array:function(e){var t,a,i=e.length;if(i)for(;--i;)a=~~(Math.random()*(i+1)),t=e[i],e[i]=e[a],e[a]=t;return e},selector_exists:function(e){e=e[e.inject_by&&"pro_custom_element"!==e.inject_by?"container_id":"pro_custom_element"];if(!e)return!0;var t=jQuery(e);return t.length?!(!advanced_ads_pro_ajax_object.moveintohidden&&!t.filter(":visible").length)||(advads_pro_utils.log("selector is hidden",e),!1):(advads_pro_utils.log("selector does not exist",e),!1)},deg2rad:function(e){return e*Math.PI/180},calculate_distance:function(e,t,i,s,r){return r=r||"km",e=this.deg2rad(e),t=this.deg2rad(t),i=this.deg2rad(i),s=this.deg2rad(s),dLon=s-t,a=Math.pow(Math.cos(i)*Math.sin(dLon),2)+Math.pow(Math.cos(e)*Math.sin(i)-Math.sin(e)*Math.cos(i)*Math.cos(dLon),2),b=Math.sin(e)*Math.sin(i)+Math.cos(e)*Math.cos(i)*Math.cos(dLon),rad=Math.atan2(Math.sqrt(a),b),"mi"==r?3958.755865744*rad:6371*rad},extract_cookie_data(t){try{var e=JSON.parse(t)}catch(e){return t}return"object"!=typeof e?t:e.data}},advanced_ads_group_refresh={element_ids:{},add_query:function(){var s=[];return function(e,t){e.elementid;var a=(new Date).getTime()+t;s[a]=s[a]||[],s[a].push(e),setTimeout(function(){var e=(new Date).getTime(),t=[];for(call_time in s)if(s.hasOwnProperty(call_time)&&e>call_time-1e3){for(var a=s[call_time],i=0;i<a.length;i++)t.push(a[i]);delete s[call_time]}advanced_ads_pro.process_ajax_ads(t)},t)}}(),find_float:function(e){var a=!1;return e.find("div").each(function(e,t){if("left"===this.style.float||"right"==this.style.float)return a=this.style.float,!1}),a},prepare_wrapper:function(e,t,a){a||(this.maybe_increase_sizes(e),e.empty()),this.set_float(e,t)},maybe_increase_sizes:function(e){var t=e.css("float"),a={},t=(!(t=-1===["left","right"].indexOf(t)?!1:t)||(parseInt(e.css("min-width"),10)||0)<(t=e.prop("scrollWidth")||0)&&(a["min-width"]=t),parseInt(e.css("min-height"),10)||0),i=e.prop("scrollHeight")||0;t<i&&(a["min-height"]=i),(a["min-height"]||a["min-width"])&&e.css(a)},set_float:function(e,t){(t=-1===["left","right"].indexOf(t)?!1:t)!==(e.data("prev_float")||!1)&&(e.data("prev_float",t),t?e.css({"min-width":"","min-height":"",float:t}):e.css({"min-width":"","min-height":"",float:""}))}};!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&(exports.advads_postscribe=t()),e.advads_postscribe=t()}(this,function(){return i=[function(e,t,a){"use strict";var a=a(1),a=(a=a)&&a.__esModule?a:{default:a};e.exports=a.default},function(e,t,a){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a,i=arguments[t];for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},t=(t.default=u,a(2)),d=(t=t)&&t.__esModule?t:{default:t},s=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}}(a(4));function _(){}var r={afterAsync:_,afterDequeue:_,afterStreamStart:_,afterWrite:_,autoFix:!0,beforeEnqueue:_,beforeWriteToken:function(e){return e},beforeWrite:function(e){return e},done:_,error:function(e){throw new Error(e.msg)},releaseAsync:!1},c=0,n=[],l=null;function p(){var e,t=n.shift();t&&((e=s.last(t)).afterDequeue(),t.stream=function(e,t,i){(l=new d.default(e,i)).id=c++,l.name=i.name||l.id,u.streams[l.name]=l;var a=e.ownerDocument,s={close:a.close,open:a.open,write:a.write,writeln:a.writeln};function r(e){e=i.beforeWrite(e),l.write(e),i.afterWrite(e)}o(a,{close:_,open:_,write:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return r(t.join(""))},writeln:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return r(t.join("")+"\n")}});var n=l.win.onerror||_;return l.win.onerror=function(e,t,a){i.error({msg:e+" - "+t+": "+a}),n.apply(l.win,[e,t,a])},l.write(t,function(){o(a,s),l.win.onerror=n,i.done(),l=null,p()}),l}.apply(void 0,t),e.afterStreamStart())}function u(e,t,a){if(s.isFunction(a))a={done:a};else if("clear"===a)return n=[],l=null,void(c=0);a=s.defaults(a,r);var i=[e=/^#/.test(e)?window.document.getElementById(e.substr(1)):e.jquery?e[0]:e,t,a];return e.postscribe={cancel:function(){i.stream?i.stream.abort():i[1]=_}},a.beforeEnqueue(i),n.push(i),l||p(),e.postscribe}o(u,{streams:{},queue:n,WriteStream:d.default})},function(e,t,a){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a,i=arguments[t];for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},i=a(3),s=(i=i)&&i.__esModule?i:{default:i},r=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}}(a(4));var c="data-ps-",l="ps-style",p="ps-script";function n(e,t){e=e.getAttribute(c+t);return r.existy(e)?String(e):e}function d(e,t,a){a=2<arguments.length&&void 0!==a?a:null,t=c+t;r.existy(a)&&""!==a?e.setAttribute(t,a):e.removeAttribute(t)}function _(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=this,i=_;if(!(a instanceof i))throw new TypeError("Cannot call a class as a function");this.root=e,this.options=t,this.doc=e.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new s.default("",{autoFix:t.autoFix}),this.actuals=[e],this.proxyHistory="",this.proxyRoot=this.doc.createElement(e.nodeName),this.scriptStack=[],this.writeQueue=[],d(this.proxyRoot,"proxyof",0)}_.prototype.write=function(){var e;for((e=this.writeQueue).push.apply(e,arguments);!this.deferredRemote&&this.writeQueue.length;){var t=this.writeQueue.shift();r.isFunction(t)?this._callFunction(t):this._writeImpl(t)}},_.prototype._callFunction=function(e){var t={type:"function",value:e.name||e.toString()};this._onScriptStart(t),e.call(this.win,this.doc),this._onScriptDone(t)},_.prototype._writeImpl=function(e){this.parser.append(e);for(var t=void 0,a=void 0,i=void 0,s=[];(t=this.parser.readToken())&&!(a=r.isScript(t))&&!(i=r.isStyle(t));)(t=this.options.beforeWriteToken(t))&&s.push(t);0<s.length&&this._writeStaticTokens(s),a&&this._handleScriptToken(t),i&&this._handleStyleToken(t)},_.prototype._writeStaticTokens=function(e){e=this._buildChunk(e);return e.actual?(e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,this._walkChunk(),e):null},_.prototype._buildChunk=function(e){for(var t=this.actuals.length,a=[],i=[],s=[],r=e.length,n=0;n<r;n++){var o,d=e[n],_=d.toString();a.push(_),d.attrs?/^noscript$/i.test(d.tagName)||(o=t++,i.push(_.replace(/(\/?>)/," "+c+"id="+o+" $1")),d.attrs.id!==p&&d.attrs.id!==l&&s.push("atomicTag"===d.type?"":"<"+d.tagName+" "+c+"proxyof="+o+(d.unary?" />":">"))):(i.push(_),s.push("endTag"===d.type?_:""))}return{tokens:e,raw:a.join(""),actual:i.join(""),proxy:s.join("")}},_.prototype._walkChunk=function(){for(var e,t=[this.proxyRoot];r.existy(e=t.shift());){var a=1===e.nodeType;a&&n(e,"proxyof")||(a&&d(this.actuals[n(e,"id")]=e,"id"),(a=e.parentNode&&n(e.parentNode,"proxyof"))&&this.actuals[a].appendChild(e)),t.unshift.apply(t,r.toArray(e.childNodes))}},_.prototype._handleScriptToken=function(e){var t=this,a=this.parser.clear();a&&this.writeQueue.unshift(a),e.src=e.attrs.src||e.attrs.SRC,(e=this.options.beforeWriteToken(e))&&(e.src&&this.scriptStack.length?this.deferredRemote=e:this._onScriptStart(e),this._writeScriptToken(e,function(){t._onScriptDone(e)}))},_.prototype._handleStyleToken=function(e){var t=this.parser.clear();t&&this.writeQueue.unshift(t),e.type=e.attrs.type||e.attrs.TYPE||"text/css",(e=this.options.beforeWriteToken(e))&&this._writeStyleToken(e),t&&this.write()},_.prototype._writeStyleToken=function(e){var t=this._buildStyle(e);this._insertCursor(t,l),e.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=e.content:t.appendChild(this.doc.createTextNode(e.content)))},_.prototype._buildStyle=function(e){var a=this.doc.createElement(e.tagName);return a.setAttribute("type",e.type),r.eachKey(e.attrs,function(e,t){a.setAttribute(e,t)}),a},_.prototype._insertCursor=function(e,t){this._writeImpl('<span id="'+t+'"/>');t=this.doc.getElementById(t);t&&t.parentNode.replaceChild(e,t)},_.prototype._onScriptStart=function(e){e.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(e)},_.prototype._onScriptDone=function(e){e!==this.scriptStack[0]?this.options.error({msg:"Bad script nesting or script finished twice"}):(this.scriptStack.shift(),this.write.apply(this,e.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null))},_.prototype._writeScriptToken=function(e,t){var a=this._buildScript(e),i=this._shouldRelease(a),s=this.options.afterAsync;e.src&&(a.src=e.src,this._scriptLoadHandler(a,i?s:function(){t(),s()}));try{this._insertCursor(a,p),a.src&&!i||t()}catch(e){this.options.error(e),t()}},_.prototype._buildScript=function(e){var a=this.doc.createElement(e.tagName);return r.eachKey(e.attrs,function(e,t){a.setAttribute(e,t)}),e.content&&(a.text=e.content),a},_.prototype._scriptLoadHandler=function(t,a){function i(){t=t.onload=t.onreadystatechange=t.onerror=null}var s=this.options.error;function e(){i(),null!=a&&a(),a=null}function r(e){i(),s(e),null!=a&&a(),a=null}function n(e,t){var a=e["on"+t];null!=a&&(e["_on"+t]=a)}n(t,"load"),n(t,"error"),o(t,{onload:function(){if(t._onload)try{t._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){r({msg:"onload handler failed "+e+" @ "+t.src})}e()},onerror:function(){if(t._onerror)try{t._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){return void r({msg:"onerror handler failed "+e+" @ "+t.src})}r({msg:"remote script failed "+t.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(t.readyState)&&e()}})},_.prototype._shouldRelease=function(e){return!/^script$/i.test(e.nodeName)||!!(this.options.releaseAsync&&e.src&&e.hasAttribute("async"))},t.default=_},function(e,t,a){var i;i=function(){return i=[function(e,t,a){"use strict";var a=a(1),a=(a=a)&&a.__esModule?a:{default:a};e.exports=a.default},function(e,t,a){"use strict";t.__esModule=!0;var d=n(a(2)),i=n(a(3)),s=a(6),_=(s=s)&&s.__esModule?s:{default:s},r=a(5);function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}var o,c={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},l=(p.prototype.append=function(e){this.stream+=e},p.prototype.prepend=function(e){this.stream=e+this.stream},p.prototype._readTokenImpl=function(){var e=this._peekTokenImpl();if(e)return this.stream=this.stream.slice(e.length),e},p.prototype._peekTokenImpl=function(){for(var e in c)if(c.hasOwnProperty(e)&&c[e].test(this.stream)){e=i[e](this.stream);if(e)return"startTag"===e.type&&/script|style/i.test(e.tagName)?null:(e.text=this.stream.substr(0,e.length),e)}},p.prototype.peekToken=function(){return this._peekToken()},p.prototype.readToken=function(){return this._readToken()},p.prototype.readTokens=function(e){for(var t;t=this.readToken();)if(e[t.type]&&!1===e[t.type](t))return},p.prototype.clear=function(){var e=this.stream;return this.stream="",e},p.prototype.rest=function(){return this.stream},p);function p(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=this,s=p;if(!(i instanceof s))throw new TypeError("Cannot call a class as a function");this.stream=t;var r,n=!1,o={};for(r in d)d.hasOwnProperty(r)&&(a.autoFix&&(o[r+"Fix"]=!0),n=n||o[r+"Fix"]);n?(this._readToken=(0,_.default)(this,o,function(){return e._readTokenImpl()}),this._peekToken=(0,_.default)(this,o,function(){return e._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}for(o in(t.default=l).tokenToString=function(e){return e.toString()},l.escapeAttributes=function(e){var t,a={};for(t in e)e.hasOwnProperty(t)&&(a[t]=(0,r.escapeQuotes)(e[t],null));return a},l.supports=d)d.hasOwnProperty(o)&&(l.browserHasFlaw=l.browserHasFlaw||!d[o]&&o)},function(e,t){"use strict";var a=!(t.__esModule=!0),i=!1,s=window.document.createElement("div");try{var r="<P><I></P></I>";s.innerHTML=r,t.tagSoup=a=s.innerHTML!==r}catch(e){t.tagSoup=a=!1}try{s.innerHTML="<P><i><P></P></i></P>",t.selfClose=i=2===s.childNodes.length}catch(e){t.selfClose=i=!1}s=null,t.tagSoup=a,t.selfClose=i},function(e,t,a){"use strict";t.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=(t.comment=function(e){var t=e.indexOf("--\x3e");if(0<=t)return new n.CommentToken(e.substr(4,t-1),t+3)},t.chars=function(e){var t=e.indexOf("<");return new n.CharsToken(0<=t?t:e.length)},t.startTag=i,t.atomicTag=function(e){var t=i(e);if(t){e=e.slice(t.length);if(e.match(new RegExp("</\\s*"+t.tagName+"\\s*>","i"))){e=e.match(new RegExp("([\\s\\S]*?)</\\s*"+t.tagName+"\\s*>","i"));if(e)return new n.AtomicTagToken(t.tagName,e[0].length+t.length,t.attrs,t.booleanAttrs,e[1])}}},t.endTag=function(e){e=e.match(o.endTag);if(e)return new n.EndTagToken(e[1],e[0].length)},a(4)),o={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function i(e){var a,i,s;if(-1!==e.indexOf(">")){e=e.match(o.startTag);if(e){a={},i={},s=e[2],e[2].replace(o.attr,function(e,t){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(a[arguments[5]]="",i[arguments[5]]=!0):a[t]=arguments[2]||arguments[3]||arguments[4]||o.fillAttr.test(t)&&t||"":a[t]="",s=s.replace(e,"")});e={v:new n.StartTagToken(e[1],e[0].length,a,i,!!e[3],s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))};if("object"===(void 0===e?"undefined":r(e)))return e.v}}}},function(e,t,a){"use strict";t.__esModule=!0,t.EndTagToken=t.AtomicTagToken=t.StartTagToken=t.TagToken=t.CharsToken=t.CommentToken=t.Token=void 0;var r=a(5);function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.Token=function e(t,a){n(this,e),this.type=t,this.length=a,this.text=""},t.CommentToken=(i.prototype.toString=function(){return"\x3c!--"+this.content},i);function i(e,t){n(this,i),this.type="comment",this.length=t||(e?e.length:0),this.text="",this.content=e}t.CharsToken=(s.prototype.toString=function(){return this.text},s);function s(e){n(this,s),this.type="chars",this.length=e,this.text=""}var o=t.TagToken=(d.formatTag=function(e){var t,a,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,s="<"+e.tagName;for(t in e.attrs)e.attrs.hasOwnProperty(t)&&(s+=" "+t,a=e.attrs[t],void 0!==e.booleanAttrs&&void 0!==e.booleanAttrs[t]||(s+='="'+(0,r.escapeQuotes)(a)+'"'));return e.rest&&(s+=" "+e.rest),e.unary&&!e.html5Unary?s+="/>":s+=">",null!=i&&(s+=i+"</"+e.tagName+">"),s},d);function d(e,t,a,i,s){n(this,d),this.type=e,this.length=a,this.text="",this.tagName=t,this.attrs=i,this.booleanAttrs=s,this.unary=!1,this.html5Unary=!1}t.StartTagToken=(_.prototype.toString=function(){return o.formatTag(this)},_);function _(e,t,a,i,s,r){n(this,_),this.type="startTag",this.length=t,this.text="",this.tagName=e,this.attrs=a,this.booleanAttrs=i,this.html5Unary=!1,this.unary=s,this.rest=r}t.AtomicTagToken=(c.prototype.toString=function(){return o.formatTag(this,this.content)},c);function c(e,t,a,i,s){n(this,c),this.type="atomicTag",this.length=t,this.text="",this.tagName=e,this.attrs=a,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1,this.content=s}t.EndTagToken=(l.prototype.toString=function(){return"</"+this.tagName+">"},l);function l(e,t){n(this,l),this.type="endTag",this.length=t,this.text="",this.tagName=e}},function(e,t){"use strict";t.__esModule=!0,t.escapeQuotes=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return e?e.replace(/([^"]*)"/g,function(e,t){return/\\/.test(t)?t+'"':t+'\\"'}):t}},function(e,t){"use strict";t.__esModule=!0,t.default=function(i,a,s){var r=function(){var e=[];return e.last=function(){return this[this.length-1]},e.lastTagNameEq=function(e){var t=this.last();return t&&t.tagName&&t.tagName.toUpperCase()===e.toUpperCase()},e.containsTagName=function(e){for(var t,a=0;t=this[a];a++)if(t.tagName===e)return!0;return!1},e}(),n={startTag:function(e){var t=e.tagName;"TR"===t.toUpperCase()&&r.lastTagNameEq("TABLE")?(i.prepend("<TBODY>"),o()):a.selfCloseFix&&d.test(t)&&r.containsTagName(t)?r.lastTagNameEq(t)?c(i,r):(i.prepend("</"+e.tagName+">"),o()):e.unary||r.push(e)},endTag:function(e){r.last()?a.tagSoupFix&&!r.lastTagNameEq(e.tagName)?c(i,r):r.pop():a.tagSoupFix&&(s(),o())}};function o(){var e,t,a;t=s,a=(e=i).stream,t=_(s()),e.stream=a,t&&n[t.type]&&n[t.type](t)}return function(){return o(),_(s())}};var a=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,d=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function _(e){return e&&"startTag"===e.type&&(e.unary=a.test(e.tagName)||e.unary,e.html5Unary=!/\/>$/.test(e.text)),e}function c(e,t){t=t.pop();e.prepend("</"+t.tagName+">")}}],s={},a.m=i,a.c=s,a.p="",a(0);function a(e){if(s[e])return s[e].exports;var t=s[e]={exports:{},id:e,loaded:!1};return i[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}var i,s},e.exports=i()},function(e,t){"use strict";t.__esModule=!0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function s(e){return null!=e}function r(e,t,a){for(var i=void 0,s=e&&e.length||0,i=0;i<s;i++)t.call(a,e[i],i)}function n(e,t,a){for(var i in e)e.hasOwnProperty(i)&&t.call(a,i,e[i])}function a(e,t){return!(!e||"startTag"!==e.type&&"atomicTag"!==e.type||!("tagName"in e))&&!!~e.tagName.toLowerCase().indexOf(t)}t.existy=s,t.isFunction=function(e){return"function"==typeof e},t.each=r,t.eachKey=n,t.defaults=function(a,e){return a=a||{},n(e,function(e,t){s(a[e])||(a[e]=t)}),a},t.toArray=function(a){try{return Array.prototype.slice.call(a)}catch(e){var t=function(){var t=[];return r(a,function(e){t.push(e)}),{v:t}}();if("object"===(void 0===t?"undefined":i(t)))return t.v}},t.last=function(e){return e[e.length-1]},t.isTag=a,t.isScript=function(e){return a(e,"script")},t.isStyle=function(e){return a(e,"style")}}],s={},a.m=i,a.c=s,a.p="",a(0);function a(e){if(s[e])return s[e].exports;var t=s[e]={exports:{},id:e,loaded:!1};return i[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}var i,s});-color: #fff;
    font-family: 'Averia Sans Libre';
    
}
#admissions #admission-step-1-top #grade, #admissions #admission-step-1-top #centre-grade, #admissions #admission-step-1-top #menu-top{
    border: 1px solid #e0e0e0 !important;
    width: 100%!important;
    font-weight: normal !important;
    box-shadow: none !important;
    font-size: 18px !important;
    padding: 10px 20px;
    background-color: #fff;
    font-family: 'Averia Sans Libre';
    color: #9e9e9e;
}
#appointmentModalLabel{
  margin-bottom: 20px;
}

/** center detail page css**/
.location-title h2, .location-title h1{
    text-align: left;
    font-size: 35px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    text-transform: capitalize;
    letter-spacing: 0px;
    line-height: 42px;
}
.single-centre .top-detail-section {
    padding-top: 0px;
}
.single-centre .location-title h1{
     margin-top: 0px;
}
.single-centre .breadcrumbs-container .container-fluid{
    padding-left: 44px;
    padding-right: 44px;
}
.top-detail-section .container-fluid{
    padding-left: 44px;
    padding-right: 44px;
}
.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}
.gallery__item--1{
    border-radius: 8px;
    height: 425px;
    width: 100%;
}
.wrap-new .gallery__item--1{
    width: 100%;
    height: 200px !important;
 }
.gallery__item--2, .gallery__item--1:nth-chlid(5){
  padding-bottom: 20px;
}
.gallery__item--1:nth-child(4){
  position: relative;
}
.gallery-link{
    position: absolute;
    top: 44%;
    left: 50px;
    right: 0;
    color: #fff;
    font-family: 'Balsamiq Sans';
    font-weight: bold;
    z-index: 1;
 }
.gallery__item--1:nth-child(4) a:after{
     content: "";
    background: #000;
    opacity: 60%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    border-radius: 8px;
}
.top-detail-section .gallery-main-wrapper{
    margin-bottom: 48px;
    padding-right: 0px;
}
.top-detail-section .leadform{
      margin-top: 50px;
      background-color: #f7f7f7;
}
.detail-form-img{
      width: 140px;
    margin: 0 auto;
    margin-top: 15px;
    text-align: center;
    max-width: 140px;
}
.leadform h3.lead-title{
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #5ac4be;
    font-family: 'Balsamiq Sans' !important;
    padding-bottom: 0px;
    text-transform: capitalize;
    letter-spacing: 0px;
    margin-top: 0px;
}
.top-detail-section .leadform .form-control{
   background: #fff !important;
}
.top-detail-section .leadform .form-control {
    border-radius: 10px !important;
    background: #fff !important;
    border: 1px solid #e0e0e0 !important;
    font-weight: 500 !important;
    font-family: 'Averia Sans Libre';
    font-size: 18px !important;
}
.top-detail-section .leadform select#program-top, .top-detail-section .leadform select#menu, #program-bottom{
    border: 1px solid #e0e0e0 !important;
    width: 100%!important;
    color: rgb(158, 158, 158);
    font-weight: normal !important;
    box-shadow: none !important;
    font-size: 18px !important;
    padding: 10px 15px;
    background-color: #fff;
    font-family: 'Averia Sans Libre';
    line-height: initial!important;
    appearance: none!important;
    background-image: linear-gradient(45deg, transparent 50%, #9e9e9e 50%), linear-gradient(135deg, #9e9e9e 50%, transparent 50%), linear-gradient(to right, #9e9e9e, #9e9e9e)!important;
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em!important;
    background-size: 5px 5px, 5px 5px, 0px 1.5em!important;
    background-repeat: no-repeat!important;
}
.top-detail-section .review-items-new{
   margin-bottom: 48px;
}
@media (min-width: 992px){
  .mobile-franchise{
    display: none !important;
  }
  .top-detail-section .col-md-9{
    width: 70%;
  }
  .top-detail-section .col-md-3 {
    width: 30%;
}
}
@media (min-width: 768px){
  .top-detail-section .col-sm-6{
    padding-right: 10px;
    padding-left: 10px;
  }
}
.oi-gallery-slider-nav-list{
  position: relative;
}
.oi-gallery-slider .slick-dots li {
    list-style: none;
    width: 26px;
}
.oi-gallery-slider .slick-dots li button {
    background: #ccc;
    height: 8px;
    width: 35px;
    overflow: hidden;
    color: #eee;
    border: none;
    border-radius: 4px;
}
.oi-gallery-slider .slick-dots li.slick-active button{
  background-color: #ff7043;
  color: #ff7043;
}
.oi-gallery-slider .slick-dots{
 position: absolute;
    bottom: -6px;
    list-style: none;
    border-radius: 8px;
    padding-top: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
 }
.oi-gallery-slider .slick-dots li button:before{
  content: "" !important;
  background: none !important;
  box-shadow: none !important;
}
.oi-gallery-slider .slick-dots li{
  list-style: none;
  width: 22px;
  margin: 0 10px;
}
.oi-gallery-slider .slick-dots li 
.oi-gallery-slider .slick-dots li button:before{
 content: none !important;
}
.home-new-gallery{
    padding-bottom: 116px;
}
.skill-section .img-item img{
    width: 75%;
}
.banner-slider-wrap .slick-dots li.slick-active button:before, .banner-slider-wrap .slick-dots li button:before{
    width: 8px !important;
    height: 8px !important;
}
.banner-slider-wrap .slick-dots li{
  height: 8px !important;
  width: 8px !important;
}
.banner-slider-wrap .slick-dots li.slick-active button:before{
  box-shadow: none !important;
}
.review-lists.slick-slider .slick-track, .review-lists.slick-slider .slick-list{
  height: 100%;
}
#school-finder-modal .modal-content{
  padding-bottom: 45px;
}
#school-finder-modal .close{
    top: 25px;
    right: 20px;
}
#school-finder-modal .modal-content .main-wrapper .main-title{
  padding-top: 27px;
}
#school-finder-modal .modal-content .main-wrapper #city{
  margin-bottom: 50px;
}
/** footer changes css **/
footer.new-footer-items{
      padding: 32px 0;
}
footer.new-footer-items .footer-links li.heading{
    font-family: 'Averia Sans Libre';
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
    color: #68738d;
}
footer.new-footer-items .footer-links .menu li a{
    font-family: 'Averia Sans Libre';
    font-size: 18px !important;
    color: #fff;
    font-weight: 500;
}
.initiative-logo .footer_logo{
  width: 188px !important;
}
.subscription-section .email .wpcf7-form-control{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}
.subscription-section .email .btn-go{
   background: linear-gradient(to right, #ff8429, #ff7043);
}
.new-footer-items small{
  font-family: 'Averia Sans Libre';
    font-size: 16px;
    font-weight: 500;
    color: #68738d;
}
.footer-menu-links a{
    font-family: 'Averia Sans Libre';
    font-size: 16px;
    color: #fff;
    font-weight: 500;
}
@media (max-width: 767px){
  footer.new-footer-items .footer-links li.heading{
     font-size: 16px;
  }
  #headerMenu .oi-logo {
    max-width: 34% !important;
    margin-left: 0rem;
}
  footer.new-footer-items .footer-links li.heading{
     padding-bottom: 12px;
  }
  footer.new-footer-items .footer-links .menu li a{
    font-size: 14px !important;
  }
  .initiative-logo .footer_logo {
    width: 99px !important;
}
  .recap-form{
    max-width: 250px;
    margin: 0 auto;
    padding-top: 16px;
  }
  .footer-menu-links{
    text-align: center;
  }
  .policy-text{
     text-align: center;
  }
}
@media(max-width:1024px){
  header .navigation .contact-btn a{
     margin-bottom: 12px;
     padding: 7px 12px 8px;
    font-size: 14px;
    margin-left: 3px;
  }
  .right-menu .nav>li>a{
    padding: 10px 8px;
    font-size: 15px;
  }
  .main-header .block-container{
     padding: 0px 15px;
  }
}
.top-detail-section{
   padding-top: 6px;
}
.top-detail-section .leadform #admission_top .form-group{
      margin-bottom: 25px;
}
.single-centre #schoolFinder_breadcrumb .block-container{
     padding: 0px 24px;
}
.top-detail-section .block-container{
     padding: 0px 24px;
}
.top-detail-section .gallery-main-wrapper{
  padding-left: 3px;
}
.top-detail-section .media{
  margin-top: 20px;
}
.top-detail-section .media a{
    display: flex;
    width: 99.6%;
    justify-content: flex-start;
    align-items: center;
}
.top-detail-section .media .media-body{
       width: 100%;
}
.top-detail-section .media .media-icon{
  width: 35px;
  flex-basis: content;
}
.top-detail-section .media .media-icon i{
  color: #8f8888;
}
.top-detail-section .media .call-icon{
   border: 1px solid #ccc;
   width: 40px;
   height: 40px;
}
.top-detail-section .media .media-body p{
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 24px;
  color: #424242;
  margin-top: 0px;
  font-family: 'Averia Sans Libre';
  margin-bottom: 0px;
}
.top-detail-section .description_sec{
    padding-top: 30px;
}
.top-detail-section .description_sec h3{
    text-align: left;
    font-size: 35px;
    font-weight: 900;
    letter-spacing: 0px;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    line-height: 30px;
}
#prenot{
    background-color: rgba(0,0,0,0.4);
}
#prenot .modal-content{
    max-width: 600px;
    margin: 0 auto;
    margin-top: 80px;
}
#prenot .modal-content .close-popup{
    z-index: 9999;
    position: absolute;
    right: 20px;
    border: none;
    background: none;
    top: 24px;
}
#prenot .pre-top-wrap{
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    padding-top: 24px;
    padding-bottom: 24px;
}
.pre-top-wrap .img-wrap{
    flex: 0 0 35%;
    max-width: 35%;
    padding-left: 30px;
    padding-right: 15px;
}
.pre-top-wrap .img-wrap img{
  width: 100%;
}
#prenot .text-1{
    flex: 0 0 60%;
    max-width: 60%;
    padding-right: 40px;
    margin: 0 auto;
    text-align: left;
}
#prenot .text-1 h6{
    padding-top: 0px;
    font-size: 24px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    line-height: 32px;
}
#prenot .slick-track
{
    display: flex !important;
}
#prenot .slick-list{
  padding-left: 0px!important;
}
#prenot .slick-slide
{
    height: inherit !important;
    padding: 10px;
}
#prenot .pre-modal-slider img{
  height: 130px;
  width: auto;
  border-radius: 8px;
}
.home-new-gallery .oi-gallery-wrapper .item{
  width: 32.33333333%;
}
.card-wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    height: 490px;
}
.card-wrapper a{
    position: absolute;
    left: 0;
    right: 0;
    width: fit-content;
    bottom: -18px;
}
.galnew-img{
   overflow: hidden;
   height: 250px;
   width: 350px;
   border-radius: 10px;
   box-shadow: 0 0 5px 2px rgb(0 0 0 / 5%)!important;
   margin-bottom: 32px;
}
#homeBanner-slider .slick-arrow{
  border: 1px solid #fff;
    background-color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    position: absolute;
    top: 181px;
    opacity: 0.5;
    z-index: 999;
}
#homeBanner-slider .prev-arrow {
    left: 30px;
}
#homeBanner-slider .next-arrow {
    right: 30px;
}
#homeBanner-slider .prev-arrow span{
    border: solid #000;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    text-align: center;
    position: relative;
    top: 1px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    left: 2px;
}
#homeBanner-slider .next-arrow span {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    left: -1px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    text-align: center;
    position: relative;
    top: 1px;
}
#homeBanner-slider .slide-arrow:hover {
    box-shadow: 0 5px 15px rgb(0 0 0 / 18%);
    transition: all 0.3s ease-in-out;
    opacity: 1;
}
#homeBanner-slider .slide-arrow:hover span{
  border-color: #757575;
}
@media(max-width: 767px){
  .top-detail-section .description_sec h3{
     font-size: 21px;
  }
  #error_pincode, #error_pincodes{
    font-size: 14px !important;
    line-height: 21px !important;
  }
  .curriculum-sliders .slick-dots li button{
    height: 6px;
    width: 20px;
  }
  .curriculum-sliders .slick-dots li{
    width: 20px;
  }
 .curriculum-sliders .slick-dots li {
    margin: 0 2px;
}
  .review-lists .review-list{
    padding: 20px;
  }
  .home-pro-list .col-item h3{
    margin-top: 15px;
  }
  .home-pro-list .col-item ul li{
     padding-bottom: 10px;
  }
  .home-pro-list .col-item ul li{
    line-height: 20px;
  }
  .safety-section .main-title h2{
    margin-top: 10px;
  }
  .safety-section .main-title{
    max-width: 220px;
    margin: 0 auto;
  }
  .safety-section .main-title h2{
    line-height: 30px !important;
    font-size: 21px;
    margin-bottom: 10px;
  }
  .home-new-gallery .main-title h2{
    font-size: 21px;
    margin-top: 26px;
    margin-bottom: 5px;
    line-height: 24px;
  }
  .review-section .slick-dots li button, .home-gallery .slick-dots li button{
    width: 20px;
    height: 6px;
  }
  .home-gallery .slick-dots li{
     width: 20px;
    height: 6px;
  }
  .review-section .slick-dots li,.home-gallery .slick-dots li{
    margin: 0 2px;
  }
  .home-new-gallery .main-title h1{
        margin-bottom: 5px;
  }
  .form-section .card{
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-shadow: none;
  }
  .form-section #admission_top .form-control{
    font-size: 16px !important;
    border-radius: 8px !important;
    height: 44px;
  }
  .form-section .form-wrapper #admission_top .btn-orange{
    font-size: 16px !important;
    padding: 8px 12px !important;
  }
  .reviews-wrapper .review-count{
    background-color: #fff;
  }
  .review-section .review-count{
    margin-bottom: 15px;
    border: 2px solid #eeeeee;
  }
  .g-img img{
    padding-top: 10px;
  }
  .review-section .review-count h3{
     font-size: 14px !important;
    margin-top: 0px;
    line-height: 20px;
    letter-spacing: 0px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .review-section .review-wrap-star .stars-wrapper {
    padding-top: 0px;
    padding-bottom: 0px;
}
  .review-section .review-wrap-star .view-text{
     font-size: 15px;
     padding-bottom: 6px;
  }
  .review-lists .slick-dots{
    left: 35%;
  }
  .review-list h3.name {
    margin-bottom: 10px;
  }
  .review-lists .review-list p {
    padding-top: 10px;
    line-height: 21px;
  }
  .banner-section .banner-row .slick-slide img{
    height: auto;
  }
  .banner-section .banner-row .slick-slide img{max-width: 100% !important;}
  .banner-section{
    margin-top: 82px;
  }
}
@media(max-width:480px){
  .curriculum-sliders .slick-list{
     padding-left: 0px!important;
  }
  .cur-slider-item .cg-img img{
    width: 100%;
  }
  .advantages-sec{
    padding-left: 15px;
    padding-right: 15px;
  }
}
#school-finder-modal .modal-dialog{
  max-width: 650px;
}
#school-finder-modal .modal-content{
  padding: 20px 40px;
}
#school-finder-modal .modal-content .main-title h1, #school-finder-modal .modal-content .main-title h2{
  margin-top: 0;
    padding-bottom: 20px;
}
@media(max-width: 767px){
  #school-finder-modal .modal-dialog{
    margin: 0px !important;
    position: fixed;
    top: auto;
    right: auto;
    left: auto;
    bottom: 0;
    width: 100%;
  }
  #school-finder-modal .finder-form-wrapper .btn-wrapper {
    margin-top: 0px;
    display: block;
}
 #school-finder-modal .finder-form-wrapper .btn-wrapper .view-centers {
    width: auto !important;
    font-size: 16px !important;
    margin-top: 0px !important;
    max-width: auto !important; 
}
  #school-finder-modal .modal-content{
    padding: 15px 15px;
  }
   #school-finder-modal .modal-content .main-title h1 {
    padding-bottom: 15px !important;
}
  #school-finder-modal #school-finder-forms .form-group .fa-search{
    font-size: 16px;
    right: 11px;
  }
  #school-finder-modal .finder-form-wrapper .btn-wrapper .view-schools {
    height: 44px;
    margin-bottom: 20px;
    font-size: 16px !important;
}
  #school-finder-modal .finder-form-wrapper .btn-wrapper .view-schools{
        width: 100% !important;
  }
    #school-finder-modal.modal .modal-content{
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
  }
  #school-finder-modal .finder-form-wrapper .btn-wrapper .view-centers{
        padding: 10px 24px 10px;
  }
  #admissions .modal-content #admission-step-1-top .form-control{
    background: #fff !important;
    border: 1px solid #e0e0e0 !important;
    font-size: 16px !important;
    height: 42px !important;
  }
  #admissions #admission-step-1-top #grade, #admissions #admission-step-1-top #centre-grade-top, #admissions #admission-step-1-top #menu-top{
   background: #fff !important;
    border: 1px solid #e0e0e0 !important;
    font-size: 16px !important;
        padding: 10px 15px;
  }
  #admissions #admission-step-1-top .wpcf7-submit{
    color: #fff !important;
    font-weight: bold !important;
  }
  #school-finder-modal .modal-content .main-wrapper .main-title {
    padding-top: 10px;
}
  #school-finder-modal .modal-content .finder-form-wrapper .form-group{
    margin-bottom: 0px !important;
  }
  #admissions.modal .modal-content{
        padding: 15px 15px;
  }
  #appointmentModalLabel{
    padding-top: 10px;
    letter-spacing: 0px;
  }
  #admissions .captcha-image svg{
        margin-top: 0px!important;
  }
  .captcha-image{
    border-color: #e0e0e0 !important;
  }
  #school-finder-modal .close {
    top: 15px;
    right: 15px;
}
.modal.fade .modal-dialog {
  transform: translate3d(0, 100vh, 0);
}

.modal.in .modal-dialog {
  transform: translate3d(0, 0, 0);
}
}
  #admissions #admission-step-1-top .form-control, #admissions #admission-step-1-top #centre-grade-top, #admissions #admission-step-1-top #menu-top{
   /*background: #fff !important;*/
    border: 1px solid #e0e0e0 !important;
    font-family: 'Averia Sans Libre';
 }
#admissions #admission-step-1-top #grade, #admissions #admission-step-1-top #menu-top, #admissions #admission-step-1-top #program-top{ 
  background-image: linear-gradient(45deg, transparent 50%, #9e9e9e 50%), linear-gradient(135deg, #9e9e9e 50%, transparent 50%), linear-gradient(to right, #9e9e9e, #9e9e9e)!important;
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em!important;
    background-size: 5px 5px, 5px 5px, 0px 1.5em!important;
    background-repeat: no-repeat!important;
}
#admissions.modal #admission-step-1-top .modal-content{
   padding: 20px 40px;
}
#admissions.modal .close{
    top: 25px;
    right: 18px;
}
#admissions .captcha-image svg{
        margin-top: 0px!important;
  }
  #admissions .modal-content #admission-step-1-top .form-control{
    height: 46px !important;
  }
.finder-form-wrapper select option:checked{
   color: #424242 !important;
}
.pre-bottom-wrap{
   background-color: #fff3d8;
   border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-top: 25px;
    padding-bottom: 54px;
    padding-left: 20px;
}
#prenot .modal-content{
  padding: 0px;
}
.pre-btn-image h4{
  text-align: center;
  font-size: 18px;
  font-family: 'Averia Sans Libre';
  margin-top: -12px;
  margin-bottom: 0px;
  letter-spacing: 0;
}
.pre-modal-slider .slick-list{padding:0 10% 0 0 !important;}
#prenot .modal-content .slick-dots{
   bottom: -17px;
}
#prenot .modal-content .slick-dots li button:before{
 width: 8px;
 height: 8px;
 background: #fff;
/* border: 1px solid #ccc;*/
}
#prenot .modal-content .slick-dots li.slick-active button:before{
  background-color: #ff7043;
  border: none;
}
@media(max-width: 767px){
  #prenot .pre-modal-slider img{
    height: auto !important;
  }
  #prenot .modal-content .slick-dots {
    bottom: -54px;
   }
  .pre-bottom-wrap{
     padding-left: 10px;
     padding-bottom: 40px;
  }
  #prenot .pre-top-wrap{
       display: block;
      padding-top: 30px;
    padding-bottom: 10px;
  }
  .pre-top-wrap .img-wrap{
    max-width: 30%;
    padding-left: 0px;
    padding-right: 0px;
    margin: 0 auto;
  }
  .pre-btn-image h4{
    font-size: 16px;
    line-height: 22px;
    padding-left: 20px;
    padding-right: 20px;
  }
  #prenot .text-1{
    max-width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    margin: 0 auto;
    text-align: center;
  }
  #prenot .text-1 h6{
    font-size: 21px;
    line-height: 30px;
    margin-bottom: 0px;
  }
  .pre-bottom-wrap{
  padding-top: 30px;
  }
  #prenot .modal-content{
    border-radius: 10px;
    
  }
  .pre-bottom-wrap{
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}
#prenot{
 z-index: 9999!important;
}
#prenot .slick-dots li {
    list-style: none;
    width: 26px;
}
#prenot .slick-dots li button {
    background: #ccc;
    height: 8px;
    width: 35px;
    overflow: hidden;
    color: #eee;
    border: none;
    border-radius: 4px;
}
#prenot .slick-dots li.slick-active button{
  background-color: #ff7043;
  color: #ff7043;
}
#prenot .slick-dots{
 position: absolute;
    bottom: -6px;
    list-style: none;
    border-radius: 8px;
    padding-top: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
 }
#prenot .slick-dots li button:before{
  content: "" !important;
  background: none !important;
  box-shadow: none !important;
}
#prenot .slick-dots li{
  list-style: none;
  width: 22px;
  margin: 0 10px;
}
#prenot .slick-dots li 
#prenot .slick-dots li button:before{
 content: none !important;
}
@media(max-width: 767px){
#prenot .modal-content{
    margin: 0px !important;
    position: fixed;
    top: auto;
    right: auto;
    left: auto;
    bottom: 0;
    width: 100%;
  }
  #prenot .slick-dots li {
    list-style: none;
    width: 20px;
    margin: 0 3px;
}
  #prenot .slick-dots li button{
    height: 6px;
    width: 22px;
  }
}
#admissions .modal-dialog{
  z-index: 1050 !important;
}
/*.oi-gallery-slider .slick-dots li{
  display: inline-block;
}*/
@media(max-width: 767px){
  .parent-login-desk{
    display: none !important;
  }
  .page-template-template-school-finder-centerlisting .serch-finder-btn{
        right: 0px;
  }
  .page-template-template-school-finder-centerlisting #finderpage i{
        top: 20px;
        right: 9px;
  }
  .page-template-template-school-finder-centerlisting #pincode-center-finder{
     font-size: 20px!important;
  }
}
@media(max-width: 380px){
  #finderpage i{
    font-size: 19px;
  }
 .page-template-template-school-finder-centerlisting #pincode-center-finder{
    padding: 14px 10px;
  }
  .page-template-template-school-finder-centerlisting #pincode-center-finder {
    font-size: 14px!important;
  }
  .page-template-template-school-finder-centerlisting #finderpage i {
    top: 15px;
    right: 9px;
}
}
/** centre detail css **/
.single-centre .lightbox .lb-image{
  border: none !important;
  border-radius: 8px !important;
}
.single-centre .lb-outerContainer{
  border-radius: 8px !important;
}
.single-centre .lb-data .lb-close{
    color: #fff;
    font-size: 2em;
    transition: opacity 0.8s;
    position: absolute;
    top: 0px;
    right: 30px;
}
.single-centre .lb-nav a.lb-prev{
  position: absolute;
  width: 20%;
  left: -80px;
}
.single-centre .lb-nav a.lb-next{
  position: absolute;
  width: 20%;
  right: -80px;
}
.pre-modal-slider .slick-arrow {
    border: 1px solid #fff;
    background-color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    position: absolute;
    top: 152px;
    opacity: 1;
    z-index: 999;
}
.pre-modal-slider .slick-arrow.prev-arrow{
  left: 40%;
}
.pre-modal-slider .slick-arrow.next-arrow{
  left: 50%;
}
.pre-modal-slider .slide-arrow:hover span {
    border-color: #ff7043;
}
.pre-modal-slider .prev-arrow span {
    border: solid #9e9e9e;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    text-align: center;
    position: relative;
    top: 0px;
    transform: rotate(45deg);
    -webkit-transform: rotate(-226deg);
    left: 2px;
}
.pre-modal-slider .next-arrow span {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    left: 2px;
    border: solid #9e9e9e;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    text-align: center;
    position: relative;
    top: 0px;
}

@media(max-width: 768px){
  .pre-modal-slider .slick-arrow{
    width: 30px;
    height: 30px;
    top: unset;
    bottom: -30px;
    margin-right: 10px;
  }
}
#admissions::-webkit-scrollbar {
    width: 0px !important;
    display: none;
    overflow-y: overlay;
   -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
#admissions{
  -ms-overflow-style: none;  /* IE and Edge */
     scrollbar-width: none;  /* Firefox */
    overflow-y: overlay;
}
.three-col-items .slide-arrow:hover {
    /* box-shadow: 0 5px 15px rgb(0 0 0 / 18%);*/
    transition: all 0.3s ease-in-out;
    opacity: 1;
    background-color: #ff7043;
    border-color: #ff7043;
}
.three-col-items .slick-arrow {
    border: 1px solid #e0e0e0;
    background-color: #e0e0e0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    position: absolute;
    top: 50%;
    opacity: 0.5;
    z-index: 1;
}

.three-col-items .prev-arrow{
    left: -45px;
}
.three-col-items .prev-arrow span {
    border: solid #000;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    text-align: center;
    position: relative;
    top: 1px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    left: 2px;
}
.three-col-items .next-arrow {
    right: -45px;
}
.three-col-items .next-arrow span {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    left: -1px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    text-align: center;
    position: relative;
    top: 1px;
}
.three-col-items .slide-arrow:hover span {
    border-color: #fff;
}
.gallery-main-wrapper{
  display: flex;
  flex-wrap: nowrap;
}

@media(max-width: 768px){
  .desk-title{display: none;}
 .top-detail-section .gallery-main-wrapper{
     display: none !important;
  }
  .single-centre .top-detail-section{
     padding-top: 98px;
  }
  .location-title h2, .location-title h1{
    font-size: 20px;
    text-align: left !important;
    padding-left: 15px;
    line-height: 30px;
  }
  .faq-section .main-title h2{padding-top: 20px; padding-bottom: 0px;}
  .single-centre .lb-nav a.lb-prev {
    position: absolute;
    width: 20%;
    left: -15px;
}
  .single-centre .lb-nav a.lb-next {
    position: absolute;
    width: 20%;
    right: -15px;
}
  .single-centre .lb-data .lb-close{
    top: -40px;
  }
  #m-detail-gal .gallery__item{
     height: 320px;
  }
  .gallery__item--1{
     border-radius: 0px !important;
  }
  .gallery__img{
     border-radius: 0px !important;
  }
 #m-detail-gal{
  position: relative;
}
 #m-detail-gal .slick-dots li {
    list-style: none;
    width: 26px;
}
 #m-detail-gal .slick-dots li button {
    background: #ccc;
    height: 6px;
    width: 20px;
    overflow: hidden;
    color: #eee;
    border: none;
    border-radius: 4px;
}
 #m-detail-gal .slick-dots li.slick-active button{
  background-color: #ff7043;
  color: #ff7043;
}
 #m-detail-gal .slick-dots{
 position: absolute;
    bottom: -55px;
    list-style: none;
    border-radius: 8px;
    padding-top: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
 }
 #m-detail-gal .slick-dots li button:before{
  content: "" !important;
  background: none !important;
  box-shadow: none !important;
}
 #m-detail-gal .slick-dots li{
  list-style: none;
  width: 20px;
  margin: 0 2px;
}
#m-detail-gal .slick-dots li button:before{
 content: none !important;
}
 .top-detail-section .review-items-new {
    margin-top: 35px;
}
  .review-items-new{
    margin-top: 50px;
  }
.top-detail-section .description_sec {
    padding-top: 10px;
}
  .top-detail-section .description_sec h3{
    margin-bottom: 5px;
  }
  
  
 .page-template-template-updated-frontpage .review-items-new {
    margin-top: 15px;
 }
}
.gallery-main-wrapper .gal-wrap-50{
  flex: 0 0 50%;
  max-width: 50%;
}
.gallery-main-wrapper .detail-gallery-wrap-first{
   margin-right: 10px;
}
.wrap-new{
   display: flex !important;
   flex-flow: row wrap;
   height: 450px;
   padding: 0;
   margin: -10px 0;
}
.wrap-new .gallery__item {
   width: 45%;
   height: 50%;
   margin: 10px;
} 
.single-centre .lightboxOverlay{
  background-color: rgb(28, 28, 28) !important;
}
/** thankyou pop up css **/
#admission-thankyou .modal-content .close-popup {
    z-index: 9999;
    position: absolute;
    right: 20px;
    border: none;
    background: 0 0;
    top: 24px;
    cursor: pointer;
}
#admission-thankyou .pre-top-wrap {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    padding-top: 24px;
    padding-bottom: 24px;
}
#admission-thankyou .modal-header{
  padding: 0px;
}
#admission-thankyou .text-1 {
    flex: 0 0 60%;
    max-width: 60%;
    padding-right: 40px;
    margin: 0 auto;
    text-align: left;
}
#admission-thankyou .text-1 h6 {
    margin-top: 20px;
    font-size: 35px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    line-height: 42px;
    margin-bottom: 0px;
}
#admission-thankyou .text-1 p {
    font-size: 18px;
    font-family: 'Averia Sans Libre';
    margin-bottom: 0;
    font-weight: 700;
    color: #424242;
    margin-top: 0px;
}
#admission-thankyou .slick-track{
  display: flex !important;
}
#admission-thankyou .slick-slide {
    height: inherit !important;
    padding: 10px;
}
#admission-thankyou .pre-modal-slider img {
    height: 130px;
    width: auto;
    border-radius: 8px;
}
@media(max-width: 767px){
#admission-thankyou .modl-content {
    margin: 0px !important;
    position: fixed;
    top: auto;
    right: auto;
    left: auto;
    bottom: 0;
    width: 100%;
    max-width: 100%;
}
#admission-thankyou .pre-top-wrap {
    display: block;
    padding-top: 30px;
    padding-bottom: 10px;
}
#admission-thankyou .text-1 {
    max-width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    margin: 0 auto;
    text-align: center;
}
  #admission-thankyou .text-1 h6 {
    font-size: 21px;
    line-height: 30px;
    margin-bottom: 0px;
    margin-top: 10px;
}
 #admission-thankyou .pre-modal-slider img {
    height: auto !important;
}
 #admission-thankyou .pre-modal-slider .slick-arrow.prev-arrow{
    left: 40% !important;
  }
#admission-thankyou .pre-modal-slider .slick-arrow.next-arrow {
    left: 50% !important;
}
#admission-thankyou .pre-modal-slider .prev-arrow span {
    transform: rotate(-226deg) !important;
    -webkit-transform: rotate(-226deg) !important;
}
#admission-thankyou .pre-modal-slider .next-arrow span {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    left: 0;
}
}
/** fancybox gallery **/
.fancybox-infobar {
  position: absolute;
  top: 100%;
  width: 100%;
  text-align: center;
  padding: 10px;
}

/* Hide while zooming */
.fancybox-is-scaling .fancybox-extra {
  display: none;
}

/* Push content up */
.fancybox-slide--image {
  padding-bottom: 120px;
}
.fancybox-infobar{
  font-size: 16px !important;
}
.fancybox-button{
  height: 50px !important;
  width: 50px !important;
  padding: 5px !important;
}
 .fancybox-button{
     background: transparent !important;
}
.fancybox-navigation .fancybox-button div{
   padding: 0px !important;
}
.gallery__item--1:nth-child(4) a{
    z-index: 999;
    position: absolute;
    height: 100%;
}
@media(max-width: 767px){
  .top-detail-section .block-container{
    padding: 0px 15px;
  }
  .leadform h3.lead-title{
    font-size: 22px;
  }
  .top-detail-section .leadform{
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-shadow: none !important;
    background: none;
  }
}
/**programs single page css **/
.single-programs .page-body{
  background: #fff;
  padding-top: 0px;
}
.single-programs #schoolFinder_breadcrumb .block-container {
    padding: 0px 24px;
}
.single-programs .page-body .block-container {
    padding: 0px 24px;
}
.single-programs .page-body h2.b-title{
    text-align: left;
    font-size: 35px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    text-transform: capitalize;
    letter-spacing: 0px;
    line-height: 42px;
}
.single-programs .page-body h4.program_years_old{
   font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    margin: 0 auto;
    font-family: 'Averia Sans Libre';
    color: #424242;
    padding: 3px 0px;
}
.single-programs .page-body .cont_desc p{
    font-size: 18px;
    font-weight: normal;
    line-height: 27px;
    margin: 0 auto;
    font-family: 'Averia Sans Libre';
    color: #616161;
}
/** end of single programs page css **/
@media(max-width: 767px){
  .top-detail-section .media .media-body p{
    font-size: 15px;
    line-height: 22px;
    max-width: 270px;
  }
  #desc-p p{
    font-size: 15px;
    line-height: 22px;
  }
  .media-left, .media>.pull-left {
    padding-right: 10px!important;
}
.top-detail-section .review-items-new {
    margin-bottom: 28px;
}
  .top-detail-section .leadform .form-control, .top-detail-section .leadform select#program-top, .top-detail-section .leadform select#menu, #program-bottom{
     font-size: 16px !important;
  }
}
.single-programs .programs-wrapper .programs-item .programs-card .content{
  padding: 0px !important;
}
.single-programs .programs-wrapper .programs-item .programs-card .content h4{
    text-align: left;
    font-size: 24px;
    font-weight: bold;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    text-transform: capitalize;
    line-height: 30px;
    letter-spacing: 0px;
    padding-top: 30px;
    height: 84px;
}
.single-programs .programs-wrapper .programs-item .programs-card .content p{
    font-size: 18px;
    font-weight: normal;
    line-height: 27px;
    margin: 0 auto;
    font-family: 'Averia Sans Libre';
    color: #616161;
    text-align: left;
    padding-top: 15px;
}
.programs-wrapper{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    transition: 0.4s;
    padding-top: 3px;
}
.programs-wrapper .programs-item{
    flex: 0 0 45%;
    max-width: 45%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 5px;
    margin: 0px 20px;
}
.programs-wrapper .programs-item .programs-card img{}
.single-program-content-sec{
  padding-top: 0px;
  padding-bottom: 50px;
}
.single-program-content-sec h1{
    text-align: center;
    font-size: 35px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    text-transform: capitalize;
    letter-spacing: 0px;
    line-height: 42px;
    margin-top: 4px;
}
.single-program-content-sec .item-image-wrap, .cta-items{
   text-align: center;
}
.single-program-content-sec .item-image-wrap img{
    width: 35%;
    margin: 0 auto;
}
.item-image-wrap{
  margin-bottom: 40px;
  margin-top: 34px;
}
.cta-items a{
  padding: 12px 24px 12px;
    color: #fff;
    border-radius: 6px;
    background: linear-gradient(to right, #ff8429, #ff7043);
    font-size: 18px;
    font-family: 'Balsamiq Sans';
    font-weight: bold;
    text-transform: uppercase;
}
@media(max-width: 767px){
    .single-programs .programs-wrapper .programs-item .programs-card img {
    width: 250px!important;
    height: 156px !important;
    margin: 0 auto;
   }
  .single-programs .page-body{
     padding-top: 100px;
   }
  .single-programs .page-body .cont_desc p{
        font-size: 14px;
        line-height: 21px;
  }
  .single-programs .page-body h2.b-title{
    font-size: 21px;
    line-height: 30px;
  }
  .single-programs .page-body h4.program_years_old{
    font-size: 15px !important;
    padding: 0px 0px;
  }
  .programs-wrapper{
    display: block;
  }
  .programs-wrapper .programs-item{
    max-width: 100%;
    width: 100%;
    margin-bottom: 25px;
  }
  .single-programs .page-body .block-container{
    padding: 0px 15px;
   }
  .programs-wrapper .programs-item .programs-card{
     text-align: center;
  }
  .single-programs .programs-wrapper .programs-item .programs-card .content h4{
        padding-top: 10px;
       text-align: center !important;
  }
  .programs-wrapper .programs-item .programs-card {
    padding: 0px !important;
  }
  .single-programs .programs-wrapper .programs-item .programs-card .content{
    text-align: center;
  }
  .single-programs .programs-wrapper .programs-item .programs-card .content p{
    text-align: center !important;
    padding-top: 0px;
    margin-top: 2px;
  }
  .single-program-content-sec h1{
     font-size: 21px;
     line-height: 30px;
  }
  .single-program-content-sec .item-image-wrap img{
    width: 100%;
  }
  .single-programs .programs-wrapper .programs-item .programs-card .content h4{
    height: auto !important;
  }
  .programs-wrapper{
    margin-bottom: 40px;
    padding-top: 14px;
  }
  .single-programs .programs-wrapper .programs-item .programs-card .content h4{
    font-size: 18px;
    line-height: 24px;
  }
  .single-programs .programs-wrapper .programs-item .programs-card .content p{
     font-size: 14px;
    line-height: 21px;
  }
  .programs-wrapper .programs-item:nth-child(2){
      margin: 14px 0px;
  }
  .single-programs .leadform #admission-step-1 #admission_top input.form-control{
    font-size: 16px !important;
    border-radius: 8px !important;
    height: 44px;
    padding: 10px 12px !important;
  }
  .single-programs .single-program-content-sec{
    display: none;
  }
  .single-programs .leadform{
    border-radius: 8px !important;
    border: 1px solid #e0e0e0 !important;
    box-shadow: none !important;
  }
  .detail-form-img{
    width: 110px;
    margin: auto;
    margin-top: 15px;
  }
  .contact-new-page .leadform .detail-form-img{
     margin-top: 5px;
     width: 116px;
  }
  .leadform #admission-step-1 #admission_top select{
    font-size: 16px !important;
    border-radius: 8px !important;
    height: 44px;
    padding: 10px 12px !important;
  }
   .single-programs .leadform #admission-step-1 #admission_top select{
    font-size: 16px !important;
    border: 1px solid #e0e0e0 !important;
    width: 100%!important;
    font-weight: normal !important;
    box-shadow: none !important;
    font-family: 'Averia Sans Libre'!important;
    color: rgb(158, 158, 158); 
  }
  .contact-new-page .leadform h3.lead-title{
    font-size: 21px !important;
    line-height: 24px !important;
    padding-top: 11px;
    margin-bottom: 16px;
  }
}
.single-programs #schoolFinder_breadcrumb .breadcrumbs ul{
   margin-top: 78px;
}
 .single-programs .leadform #admission-step-1 #admission_top select{
    font-size: 20px !important;
    border: 1px solid #e0e0e0 !important;
    width: 100%!important;
    font-weight: normal !important;
    box-shadow: none !important;
    font-family: 'Averia Sans Libre'!important;
    color: rgb(158, 158, 158); 
  }
.leadform #admission-step-1 #admission_top select{
  line-height: initial!important;
    appearance: none!important;
    background-image: linear-gradient(45deg, transparent 50%, #9e9e9e 50%), linear-gradient(135deg, #9e9e9e 50%, transparent 50%), linear-gradient(to right, #9e9e9e, #9e9e9e)!important;
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em!important;
    background-size: 5px 5px, 5px 5px, 0px 1.5em!important;
    background-repeat: no-repeat!important;
    background-color: #fff !important;
    border: 1px solid #e0e0e0 !important;
    color: rgb(158, 158, 158);
}
.leadform #admission-step-1 #admission_top input.form-control{
    border-radius: 10px !important;
    background: #fff !important;
    border: 1px solid #e0e0e0 !important;
    font-weight: 500 !important;
    font-family: 'Averia Sans Libre';
    font-size: 20px !important;
}
.programs-wrapper .programs-item .programs-card img{
    width: 385px;
    height: 250px;
 }
@media(max-width: 767px){
   programs-wrapper .programs-item .programs-card img {
    width: auto;
    height: auto;
   }
   .single-programs .leadform #admission-step-1 #admission_top select{
    font-size: 16px !important;
    border: 1px solid #e0e0e0 !important;
    width: 100%!important;
    font-weight: normal !important;
    box-shadow: none !important;
    font-family: 'Averia Sans Libre'!important;
    color: rgb(158, 158, 158); 
  }
  #stickyLogin{
    height: auto !important;
  }
}
/** contact us page css **/
.page-template-template_contact-php .page-body{
  background: #fff !important;
}
.contact-new-page h1.p-title{
    text-align: left;
    font-size: 35px;
    font-weight: bold;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    text-transform: capitalize;
    letter-spacing: 0px;
    line-height: 32px;
    margin-top: 0px;
}
.contact-new-page h2.sub-title{
    text-align: left;
    font-size: 35px;
    font-weight: bold;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    /* text-transform: capitalize; */
    letter-spacing: 0px;
    line-height: 42px;
    padding-top: 44px;
}
.count-items h3{
    font-family: 'Nunito Sans';
    font-size: 44px;
    letter-spacing: 0px;
    font-weight: bold;
    text-align: center;
    margin-top: 7px;
    margin-bottom: 8px;
}
.contact-new-page .count-items.item-first h3{
  color: #5e6db3;
}
.count-items span{
  text-align: center;
  font-family: 'Averia Sans Libre';
  font-size: 20px;
  font-weight: bold;
  color: #424242;
  line-height: 24px;
}
.contact-new-page .count-items.second-first h3{
  color: #5ac4be;
}
.count-items{
  text-align: center;
}
.contact-new-page .count-items.third-first h3{
   color: #99cb54;
}
.contact-new-page .count-items.fourth-first h3{
  color: #fdbb23;
}
.mail-content h3{
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    text-transform: capitalize;
    letter-spacing: 0px;
    line-height: 30px;
    padding-top: 15px;
}
.mail-content p{
    text-align: center;
    font-family: 'Balsamiq Sans';
    font-size: 20px;
    font-weight: bold;
    color: #424242;
    margin-bottom: 5px;
}
.mail-content a{
    text-align: center;
    font-family: 'Balsamiq Sans';
    font-size: 20px;
    font-weight: 500;
    color: #424242;
    text-decoration: underline;
}
.address-content h3{
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    text-transform: capitalize;
    letter-spacing: 0px;
    line-height: 42px;
}
.address-content h6{
    text-align: center;
    font-family: 'Balsamiq Sans';
    font-size: 25px;
    font-weight: bold;
    color: #424242;
    margin-top: 18px;
}
.address-content{
  margin-top: 75px;
}
.add-item p{
    font-size: 18px;
    font-weight: 400;
    color: #424242;
    font-family: 'Averia Sans Libre';
    line-height: 28px;
}
.page-template-template_contact-php hr.hr-line{
    padding: 0px 24px;
    margin: 0px 24px;
    border-top: 2px solid #e0e0e0;
}
.contact-new-page h2.business-title{
    text-align: left;
    font-size: 35px;
    font-weight: bold;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
   /* text-transform: capitalize; */
    letter-spacing: 0px;
    line-height: 42px;
    margin-bottom: 22px;
}
.business-lists li{
    padding-bottom: 24px;
    position: relative;
    padding-left: 40px;
    font-size: 20px;
    font-weight: 400;
    color: #424242;
    font-family: 'Averia Sans Libre';
    line-height: 26px;
}
ul.business-lists li:first-child:before {
    content: "";
    background: url(../images/tick_1.svg);
    position: absolute;
    left: 0px;
    top: 5px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat;
}
ul.business-lists li:nth-child(2):before {
    content: "";
    background: url(../images/tick_2.svg);
    position: absolute;
    left: 0px;
    top: 5px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat;
}
ul.business-lists li:nth-child(3):before {
    content: "";
    background: url(../images/tick_3.svg);
    position: absolute;
    left: 0px;
    top: 5px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat;
}
ul.business-lists li:last-child:before {
    content: "";
    background: url(../images/tick_4.svg);
    position: absolute;
    left: 0px;
    top: 5px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat;
}
.business-points{
    padding-top: 28px;
    padding-left: 10px;
}
.ctaa-know-more a{
    padding: 16px 62px 16px;
    color: #fff !important;
    border-radius: 6px;
    background: linear-gradient(to right, #ff8429, #ff7043);
    font-size: 22px;
    font-family: 'Balsamiq Sans';
    font-weight: bold;
    text-transform: uppercase;
}
.contact-new-page .leadform{
    margin: 0px;
    background-color: #fff;
    /*border: 0px solid #e0e0e0;*/
    border-radius: 10px;
    padding-top: 16px;
}
.page-template-template_contact-php .admission-enquiry-sec .contact-new-page .leadform #admission-step-1 #admission_top #submit{
    color: #fff;
    border-radius: 6px !important;
    background: linear-gradient(to right, #ff8429, #ff7043);
    max-width: none !important;
    font-size: 18px !important;
    font-weight: bold !important;
    letter-spacing: 0px;
    font-family: 'Balsamiq Sans' !important;
    padding: 16px 25px !important;
    line-height: 26px;
    display: block !important;
}
.contact-new-page .leadform h3.lead-title{
      font-size: 27px;
      line-height: 28px;
}
.contact-new-page .leadform .form-control{
    background-color: #fff !important;
    border: 1px solid #e0e0e0 !important;
    font-size: 20px !important;
    font-family: 'Averia Sans Libre';
    font-weight: 500 !important;
}
.contact-new-page .leadform #communication_flag span.first{
  display: flex;
  margin: 0px;
}
.contact-new-page .leadform #communication_flag input{
  flex: 0 0 6%;
    margin: 0px;
}
.contact-new-page .leadform #communication_flag span.wpcf7-list-item-label{
    color: #9e9e9e;
    flex: 0 0 90%;
    margin-left: 10px;
    font-size: 16px !important;
    font-family: 'Averia Sans Libre';
}
.contact-new-page .leadform .captcha-image{
  background-color: #fff !important;
}
.page-template-template_contact-php .admission-enquiry-sec .block-container{
  padding: 0px 24px;
}
.contact-new-page .contact-century-items{
   display: flex;
 }
.contact-new-page .main-title h1{
  font-size: 35px;
  text-align: left;
  line-height: 30px;
  padding-bottom: 10px;
}
.contact-skill-sec p{
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    max-width: 815px;
    text-align: left;
    font-family: "Averia Sans Libre";
    color: rgb(66, 66, 66);
}
.contact-skill-sec{
  text-align: center;
}
.contact-skill-sec img{
  padding-top: 20px;
    padding-bottom: 20px;
    height: 400px;
    width: auto;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
}
.contact-skill-sec .fut-cta-btn{
  text-align: left;
}
.page-template-template_contact-php #schoolFinder_breadcrumb{
  padding: 30px 0 5px;
}
.page-template-template_contact-php .counter-wrappers{
   padding-top: 40px;
}
.d-flex{
  display: flex;
  flex-direction: row;
}
.counter-wrappers .col-sm-3:first-child{
  width:18%;
}
.counter-wrappers .col-sm-3:nth-child(2){
   width: 32%;
}
ul.business-lists{
  margin-bottom: 40px;
}
.contact-new-page .fut-cta-btn a{
    padding: 16px 62px 16px;
}
@media(max-width: 767px){
  .contact-new-page .leadform #communication_flag span.wpcf7-list-item-label{
    font-size: 14px !important;
    line-height: 21px;
  }
  .contact-skill-sec img{
     height: 100% !important;
  }
  .contact-skill-sec .fut-cta-btn{
      text-align: center;
      margin-bottom: 48px;
  }
  .contact-skill-sec .fut-cta-btn a{
    padding: 10px 28px 10px;
    font-size: 15px;
  }
  .contact-skill-sec p{
     padding: 0px 20px;
    font-size: 15px !important;
    line-height: 22px !important;
    text-align: center;
  }
  .contact-new-page .main-title h1{
     text-align: center;
  }
  .page-template-template_contact-php hr.hr-line{
    display: none !important;
  }
  .page-body .contact-new-page .leadform #submit{
    padding: 10px 28px 10px !important;
    font-size: 15px !important;
  }
  .query-address{
     padding-top: 0px;
  }
  .page-template-template_contact-php .admission-enquiry-sec{
    padding-top: 8px;
    padding-bottom: 6px;
  }
  .page-template-template_contact-php .page-body{
     padding-top: 100px;
  }
  .contact-new-page h1.p-title{
    text-align: center;
    font-size: 21px;
  }
  .contact-new-page h2.sub-title{
    text-align: center;
    font-size: 25px;
    line-height: 16px;
  }
  .contact-new-page h2.sub-title{
     text-align: center;
    font-size: 25px;
    line-height: 16px;
    padding-top: 0px;
  }
  .count-items h3{
     font-size: 22px;
     margin-bottom: 5px;
     line-height: 18px;
  }
  .count-items span{
     font-size: 13px;
     line-height: 20px;
  }
  .page-template-template_contact-php .counter-wrappers {
    padding-top: 22px;
}
  .business-points {
    padding-top: 12px;
}
  .contact-new-page h2.business-title{
    text-align: center;
    font-size: 21px;
    line-height: 27px;
    margin-bottom: 8px;
  }
  .business-lists li{
      font-size: 14px;
      line-height: 20px;
      padding-bottom: 8px;
   }
  .contact-new-page .leadform{
     background-color: transparent !important;
     border-radius: 16px !important;
     box-shadow: none !important;
  }
  .ctaa-know-more{
     text-align: center;
     margin-bottom: 48px;
  }
  .ctaa-know-more a{
     padding: 10px 28px 10px;
    font-size: 15px;
  }
  ul.business-lists {
    margin-bottom: 22px;
  }
  .mail-content h3{
    font-size: 21px;
    line-height: 10px;
  }
 .page-template-template_contact-php .admission-enquiry-sec .contact-new-page .leadform #admission-step-1 #admission_top #submit{
    padding: 10px 28px 10px !important;
    font-size: 15px !important;
    max-width: 150px !important;
}
}
.page-body .contact-new-page .leadform #submit{
    color: #fff;
    border-radius: 6px !important;
    background: linear-gradient(to right, #ff8429, #ff7043);
    max-width: none !important;
    font-size: 18px !important;
    font-weight: bold !important;
    letter-spacing: 0px;
    font-family: 'Balsamiq Sans' !important;
    padding: 16px 25px !important;
    line-height: 26px;
    display: block !important;
}
@media(max-width: 767px){
  .contact-new-page .mobile-col-sec {
    padding-top: 20px;
   }
  .page-body .contact-new-page .leadform #submit{
    padding: 10px 28px 10px !important;
    font-size: 15px !important;
    max-width: 150px !important;
  }
  .page-template-template_contact-php .admission-enquiry-sec .block-container {
    padding: 0px 15px;
}
}
.page-body .contact-new-page .leadform .captcha-image{
       max-width: fit-content !important;
       border-radius: 8px !important;
}
.contact-new-page .leadform #admission_top .captcha-image{
   max-width: fit-content !important;
   border-radius: 8px !important;
}
.contact-new-page .content-item ul li:nth-child(2)::before{
   background: url(../images/green_pointer.png) no-repeat;
}
.breadcrumb-arrow li:after {
    content: '/';
    display: inline-block;
    margin: 0 2px 0px 6px;
}
 .admission-enquiry-sec .leadform #admission-step-1 #admission_top select#program-bottom{
     font-size: 20px !important;
  }
@media(max-width: 767px){
  .address-content {
     margin-top: 45px;
   }
  .address-content h3{
    font-size: 21px;
    line-height: 10px;
  }
  .address-content h6{
    font-size: 16px;
    line-height: 18px;
  }
  .leadform #admission-step-1 #admission_top input.form-control{
    font-size: 16px !important;
    border-radius: 8px !important;
    height: 44px;
  }
   .admission-enquiry-sec .leadform #admission-step-1 #admission_top select#program-bottom {
    font-size: 16px !important;
   }
   .f-width{
     padding-left: 0px !important; 
     padding-right: 0px !important;
  }
  .contact-new-page .leadform .form-control{
    font-size: 16px !important;
    border-radius: 8px !important;
    height: 44px;
  }
 }
#schoolFinder_breadcrumb .breadcrumbs ul.breadcrumb-arrow{
  margin-top: 88px;
}
.page-template-template-school-finder-centerlisting #schoolFinder_breadcrumb .breadcrumbs ul.breadcrumb-arrow{
  margin-top:0px;
}
.page-template-template-school-finder-centerlisting #schoolFinder_breadcrumb{
   padding: 0px 0 5px;
}
.page-template-template_contact .block-container{
  padding: 0px 24px;
}
.page-template-template_contact .block-container{
  padding: 0px 24px;
}
.contact-new-page .content-item ul li{
      padding-left: 45px;
}
.contact-new-page .content-item ul li:first-child:before{
  left: 0px;
}
.contact-new-page .content-item ul li:nth-child(2):before{
  left: 0px;
}
.contact-new-page .content-item ul li:last-child:before{
  left: 0px;
}
.contact-new-page .content-item .brand-item {
    margin-left: 0px;
}
@media(max-width: 767px){
  .page-template-template_contact .block-container {
    padding: 0px 15px;
}
}

/* franchise page css **/
.ds-banner-sec{
    background-color: #e4f0fe;
    margin-top: 98px;
    padding: 0px;  
}
.ds-banner-item{
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}
.page-template-template-franchise-with-us .breadcrumbs-container .block-container{
   padding:0px 40px;
}
.page-template-template-franchise-with-us #schoolFinder_breadcrumb{
   padding: 0px 0 5px;
}
.page-template-template-franchise-with-us #schoolFinder_breadcrumb .breadcrumbs ul.breadcrumb-arrow{
   margin-top: 40px;
}
.page-template-template-franchise-with-us .count-items.item-first h3 {
    color: #5e6db3;
}
.page-template-template-franchise-with-us .count-items.second-first h3 {
    color: #5ac4be;
}
.page-template-template-franchise-with-us .count-items.third-first h3 {
    color: #99cb54;
}
.page-template-template-franchise-with-us .count-items.fourth-first h3 {
    color: #fdbb23;
}
.page-template-template-franchise-with-us .block-container {
    padding: 0px 30px;
}
.page-template-template-franchise-with-us h2.business-title {
    text-align: left;
    font-size: 35px;
    font-weight: bold;
    color: rgb(90, 196, 190);
    font-family: "Balsamiq Sans";
    padding-bottom: 0px;
    letter-spacing: 0px;
    line-height: 42px;
    margin-bottom: 22px;
}
.address-franchise-lists{
  display: flex;
}
.f-call{
  flex: 0 0 43%;
  max-width: 43%;
}
.f-location{
  flex: 0 0 50%;
  max-width: 50%;
}
.f-call img, .f-location img{
  height: 48px;
  width: 48px;
}
.page-template-template-franchise-with-us ul.business-lists {
    margin-bottom: 5px;
}
.page-template-template-franchise-with-us .ctaa-know-more{
    padding-top: 50px;
}
.page-template-template-franchise-with-us .f-call span, .page-template-template-franchise-with-us .f-location span{
    font-size: 18px;
    line-height: 24px;
    color: #424242;
    margin-top: 0px;
    font-family: 'Averia Sans Libre';
    margin-bottom: 0px;
    padding-left: 15px;
    font-weight: bold;
}
.award-wrapper h2.a-title{
    text-align: left;
    font-size: 40px;
    font-weight: bold;
    color: rgb(90, 196, 190);
    font-family: "Balsamiq Sans";
    padding-bottom: 0px;
    letter-spacing: 0px;
    line-height: 42px;
    margin-bottom: 12px;
    margin-top: 86px;
}
.award-images-lists .foogallery.fg-dark.fg-shadow-outline .fg-item-inner{
  box-shadow: none !important;
}
.award-images-lists .foogallery.fg-border-thin .fg-item-inner{
   border-width: 0px !important;
}
.award-images-lists .foogallery.fg-dark .fg-item-inner{
  background-color: transparent !important;
}
.award-images-lists .fg-simple_portfolio.fg-transparent.fg-shadow-outline .fg-item-inner{
   box-shadow: none !important;
}
.award-wrapper{
  padding-left: 10px;
}
.award-images-lists .foogallery.fg-simple_portfolio .fg-item:first-child{
  margin-left: 0px !important;
}
.award-images-lists .foogallery.fg-simple_portfolio .fg-item:nth-child(4){
  margin-left: 0px !important;
}
.page-template-template-franchise-with-us-php .sec-division{
      padding-top: 10px;
}
.page-template-template-franchise-with-us-php .sec-division .leadform{
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding-top: 16px;
}
.page-template-template-franchise-with-us-php .leadform{
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding-top: 16px;
}
.page-template-template-franchise-with-us-php .leadform .form-control {
    background-color: #fff !important;
    border: 1px solid #e0e0e0 !important;
    font-size: 20px !important;
    font-family: 'Averia Sans Libre';
    font-weight: 500 !important;
}
.page-template-template-franchise-with-us-php .leadform #communication_flag span.first {
    display: flex;
    margin: 0px;
}
.page-template-template-franchise-with-us-php .leadform #communication_flag input {
    flex: 0 0 6%;
    margin: 0px;
}
.page-template-template-franchise-with-us-php .leadform #communication_flag span.wpcf7-list-item-label {
    color: #9e9e9e;
    flex: 0 0 90%;
    margin-left: 10px;
    font-size: 16px !important;
    font-family: 'Averia Sans Libre';
}
@media(max-width: 767px){
.page-template-template-franchise-with-us-php .leadform #communication_flag span.wpcf7-list-item-label{
    font-size: 14px !important;
  }
}
.ds-banner-items .slick-dots{
  /* position: absolute;*/
    bottom: -32px;
  display: flex;
  justify-content: center;
  list-style: none;
  border-radius: 8px;
  padding-top: 0;
  margin: 0;
  z-index: 1;
 }
.ds-banner-items .slick-dots li{
  list-style: none;
  width: 20px;
}
.ds-banner-items .slick-dots li {
  /*display: none; */
  margin: 0 10px;
}
.ds-banner-items .slick-dots li button{
  background: #eee;
  height: 8px;
  width: 35px;
  overflow: hidden;
  color: #eee;
  border: none;
  border-radius: 4px;
}
.ds-banner-items .slick-dots li button:before{
 content: none !important;
}
.ds-banner-items{
  position: relative;
}
.ds-banner-items .slick-dots li.slick-active button{
  background-color: #ff7043;
  color: #ff7043;
}
.business-points.p-80{
      padding-top: 88px;
}
.page-template-template-franchise-with-us .leadform .captcha-image {
    max-width: fit-content !important;
    border-radius: 8px !important;
}
.page-template-template-franchise-with-us .leadform .captcha-image {
    background-color: #fff !important;
}
.page-template-template-franchise-with-us .leadform #submit {
    color: #fff;
    border-radius: 6px !important;
    background: linear-gradient(to right, #ff8429, #ff7043);
    max-width: none !important;
    font-size: 18px !important;
    font-weight: bold !important;
    letter-spacing: 0px;
    font-family: 'Balsamiq Sans' !important;
    padding: 16px 25px !important;
    line-height: 26px;
    display: block !important;
}
.page-template-template-franchise-with-us .item-image-wrap{
    margin-top: 64px;
}
@media(max-width: 767px){
  .ds-banner-sec{
     margin-top: 82px;
  }
  .page-template-template-franchise-with-us .block-container{
    padding: 0px 15px !important;
  }
  .page-template-template-franchise-with-us h2.business-title{
    font-size:21px;
    line-height: 30px;
    text-align: center;
  }
  .business-points{
    padding-left: 0px;
  }
  .address-franchise-lists {
    display: block;
    padding-top: 15px;
}
  .f-call {
    flex: 0 0 100%;
    max-width: 100%;
    padding-bottom: 12px;
}
  .f-location {
    flex: 0 0 100%;
    max-width: 100%;
}
 .f-call img, .f-location img {
    height: 35px;
    width: 35px;
}
  .page-template-template-franchise-with-us .f-call span, .page-template-template-franchise-with-us .f-location span{
    font-size: 15px;
    padding-left: 1px;
  }
  .award-wrapper h2.a-title{
    font-size: 21px;
    line-height: 30px;
    text-align: center;
    margin-top: 46px;
  }
  .award-images-lists .foogallery.fg-simple_portfolio .fg-item{
        max-width: 160px !important;
        min-width: 160px !important;
  }
  .award-images-lists .foogallery.fg-simple_portfolio .fg-item:nth-child(4) {
    margin-left: 15px !important;
}
  .award-images-lists .foogallery.fg-simple_portfolio .fg-item:first-child {
    margin-left: 15px !important;
}
  .page-template-template-franchise-with-us-php .sec-division .leadform{
    background-color: #fff !important;
    box-shadow: none !important;
  }
  .award-wrapper {
    padding-left: 0px;
 }
 .page-template-template-franchise-with-us-php .item-image-wrap img {
    width: 78%;
}
  .page-template-template-franchise-with-us-php .leadform .form-control{
    font-size: 16px !important;
    border-radius: 8px !important;
    height: 44px;
  }
  .cta-items a{
    padding: 10px 28px 10px;
    font-size: 15px;
  }
  .ds-banner-items .slick-slide{
    height: 216px;
  }
  .ds-banner-items .slick-slide img{
    height: 216px;
  }
  .ds-banner-items .slick-dots{
        bottom: -68px;
  }
  .page-template-template-franchise-with-us-php .sec-division {
    padding-top: 36px;
}
  .ds-banner-items .slick-dots li button {
    height: 6px;
    width: 20px;
}
  .ds-banner-items .slick-dots li{
    margin: 0 2px;
  }
  .business-points.p-80 {
    padding-top: 0px;
}
}
@media (max-width: 410px){
.award-images-lists .foogallery.fg-simple_portfolio .fg-item {
    max-width: 140px !important;
    min-width: 108px !important;
        margin: 8px !important;
  }
  .award-images-lists .foogallery.fg-simple_portfolio .fg-item:nth-child(3){
    margin-left: 15px !important;
  }
  .award-images-lists .foogallery.fg-simple_portfolio .fg-item:nth-child(4) {
    margin-left: 7px !important;
}
} 
/** end of franchise page css **/
.counter-img img{
  max-width: 95%;
}
/**subscribtion form-22-05-23**/
.input-group.dev-subcription p {
  display: contents;
}
/**subscribtion form-22-05-23**/
/** intelli Home Skool Section **/
.intelliskill_section{
   padding: 0px 76px 60px;
}
.intelliskill_section .main-title h2{
  margin-bottom: 0px;
}
.intelliskill_section .shadow-wrapper{
    margin: 0 auto;
    box-shadow: 0px 2px 10px 5px rgb(0 0 0 / 5%);
    border: 2px solid #eee;
    padding: 35px 40px 21px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
}
.sleft-wrapper img{
  width: 160px;
}
.sleft-wrapper{
  text-align: center;
  max-width: 20%;
}
.sleft-wrapper .sbtitles h3{
    text-align: center;
    font-size: 28px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    text-transform: capitalize;
    letter-spacing: 0px;
    line-height: 35px;
    margin-top: 15px;
}
.sright-wrapper .intelli-lists li{
    padding-bottom: 15px;
    position: relative;
    padding-left: 28px;
    font-size: 18px;
    color: #424242;
    text-align: left;
    font-weight: normal;
    line-height: 22px;
    margin: 0 auto;
    list-style-type: none !important;
    font-family: 'Averia Sans Libre';
}
.sright-wrapper .intelli-lists li:first-child:before {
    content: "";
    background: url(../images/tick_1.svg);
    position: absolute;
    left: 0px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat;
}
.sright-wrapper .intelli-lists li:nth-child(2):before {
    content: "";
    background: url(../images/tick_2.svg);
    position: absolute;
    left: 0px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat;
}
.sright-wrapper .intelli-lists li:nth-child(3):before {
    content: "";
    background: url(../images/tick_3.svg);
    position: absolute;
    left: 0px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat;
}
.sright-wrapper .intelli-lists li:last-child:before {
    content: "";
    background: url(../images/tick_4.svg);
    position: absolute;
    left: 0px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat;
}
.intelli-lists{
    padding-left: 60px;
    padding-top: 10px;
}
.sright-wrapper .btn-wrap{
    padding-left: 60px;
    margin-top: 22px;
}
.sright-wrapper .btn-wrap a{
  color: #fff;
    line-height: 29px;
    border-radius: 6px;
    background: linear-gradient(to right, #ff8429, #ff7043);
    text-align: center;
    font-size: 18px;
    font-weight: 900;
    font-family: 'Balsamiq Sans';
    padding: 12px 36px;
    text-transform: uppercase;
    margin: auto;
    margin-bottom: 10px;
}
@media(max-width: 767px){
  .intelliskill_section {
    padding: 0px 10px 30px;
   }
  .intelliskill_section .shadow-wrapper{
    box-shadow: none;
    border: none;
    padding: 0px;
    border-radius: 0px;
    display: block !important;
  }
  .sleft-wrapper {
    text-align: center;
    max-width: 100%;
  }
  .sleft-wrapper .sbtitles h3{
    font-size: 20px;
  }
  .sright-wrapper .intelli-lists li{
    line-height: 20px;
  }
  .intelli-lists{
    padding-top: 0px;
    padding-left: 0px;
  }
  .sright-wrapper .intelli-lists li{
    font-size: 16px;
    padding-left: 35px;
  }
 .sright-wrapper .btn-wrap a {
    padding: 10px 40px 10px;
    color: #fff;
    border-radius: 6px;
    background: linear-gradient(to right, #ff8429 30%, #ff7043 100%);
    font-size: 15px;
    font-family: 'Balsamiq Sans';
    font-weight: bold;
    text-transform: uppercase;
  }
  .sright-wrapper .btn-wrap {
    padding-left: 0px;
    text-align: center;
    margin-top: 15px;
  }
}

/** end of intelli home skool section css **/
/** Center Detail Page UPdate CSS **/
.single-centre #schoolFinder_breadcrumb{
  padding: 31px 0 5px;
}
.single-center .top-detail-section{
 padding-top: 0px;
}
.single-center .top-detail-section .location-title h1{
  margin-top: 0px !important; 
}
/** End of center Detail Page Css **/
/** css of privacy-policy page **/
.page-template-template_privacy_policy #schoolFinder_breadcrumb {
  padding: 30px 10px 5px;
}
.editoral_contents h2.editorial-title{
  text-align: left;
  font-size: 35px;
  font-weight: 900;
  color: #5ac4be;
  font-family: 'Balsamiq Sans';
  padding-bottom: 0px;
  text-transform: capitalize;
  letter-spacing: 0px;
}
.editoral_contents{
padding-top: 0px;
}
.editoral_contents h3{
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  margin: 0 auto;
  font-family: 'Averia Sans Libre';
  color: #424242;
  letter-spacing: 0px;
   padding-top: 10px;
}
.editoral_contents h3.editorial-subtitle{
 padding-top: 4px;
}
.editoral_contents p{
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  margin: 0 auto;
  font-family: 'Averia Sans Libre';
  color: #616161;
  padding-bottom: 15px;
  padding-top: 4px;
}
.editoral_contents .block-container{
padding: 0px 24px;
}
.editoral_contents a{
  color: #2979ff;
  letter-spacing: 0px;
  font-size: 16px;
}
.editoral_contents .block-container{
  padding: 0px 24px;
  }
  .editoral_contents a{
    color: #2979ff;
    letter-spacing: 0px;
    font-size: 16px;
  }
  .page-template-footer_common_template #schoolFinder_breadcrumb .block-container{
    padding:0px 24px;
  }
  .editoral_contents h4{
      font-size: 20px;
      font-weight: bold;
      line-height: 24px;
      margin: 0 auto;
      font-family: 'Averia Sans Libre';
      color: #424242;
      letter-spacing: 0px;
      padding-top: 4px;
    }
    .page-template-footer_common_template #schoolFinder_breadcrumb{
      padding: 30px 0 5px;
    }
   .page-template-footer_common_template .single-program-content-sec .item-image-wrap{
      margin-top: 55px;
      margin-bottom: 48px;
    }
  .page-template-footer_common_template .single-program-content-sec{
    padding-bottom: 60px;
  }
@media(max-width: 767px){
.editoral_contents {
  padding-top: 98px;
 }
.editoral_contents .block-container {
  padding: 0px 15px;
}
.editoral_contents h2.editorial-title{
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 10px;
}
.editoral_contents h3{
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  padding-top: 8px;
}
.editoral_contents p, .editoral_contents a{
   font-size: 14px;
   line-height: 21px;
}
.editoral_contents p{
  padding-bottom: 0px;
  padding-top: 6px;
}
.editoral_contents h4{
  font-size: 14px;
}
.page-template-footer_common_template .single-program-content-sec .item-image-wrap {
  margin-top: 20px;
}
}
/** end of privacy-policy page **/
/** about us page css **/
.page-template-template-about-oi .page-body{
  background-color: #fff;
}
.page-template-template-about-oi .sidebar-nav ul li.active{
  background: linear-gradient(to right, #ff8429 , #ff7043);
}
.page-template-template-about-oi .sidebarnew-menu ul li{
  background: #f7f7f7;
  border-bottom: 1px solid #eee;
}
.page-template-template-about-oi .sidebarnew-menu ul li a{
    font-family: 'Balsamiq Sans';
    color: #424242;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0px;
    padding: 15px 20px;
}
.page-template-template-about-oi .sidebarnew-menu ul li.active a{
  color: #fff !important;
}
.page-template-template-about-oi .sidebarnew-menu ul li:first-child{    
    -moz-border-radius-topleft: 12px;
    -moz-border-radius-topright: 12px;
    -webkit-border-top-left-radius: 12px;
    -webkit-border-top-right-radius: 	12px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
}

.page-template-template-about-oi .sidebarnew-menu ul li:last-child { 
    -moz-border-radius-bottomleft: 12px;
    -moz-border-radius-bottomright: 12px;
    -webkit-border-bottom-left-radius: 12px;
    -webkit-border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}
.page-template-template-about-oi-php #schoolFinder_breadcrumb .block-container{
  padding: 0px 24px;
}
.page-template-template-about-oi-php .page-body .block-container{
  padding: 0px 24px;
}
.page-template-template-about-oi-php .page-body h1.page-main-title{
    font-size: 35px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 15px;
    text-transform: capitalize;
    letter-spacing: 0px;
    margin-top: 0px;
    line-height: 34px;
}
.page-template-template-about-oi .custom-page-body .about-img{
  max-width: 742px;
  padding-bottom: 20px;
}
.page-template-template-about-oi .custom-page-body h3{
    font-size: 24px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    letter-spacing: 0px;
    margin-top: 10px;
    line-height: 36px;
    margin-bottom: 0px;
}
.custom-page-body p{
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    margin: 0 auto;
    font-family: 'Averia Sans Libre';
    color: #616161;
    padding-bottom: 15px;
    padding-top: 4px;
}
.page-template-template-about-oi #schoolFinder_breadcrumb{
  padding: 30px 0 5px;
}
.page-template-template-about-oi .page-body{
  padding-top: 0px;
}
.page-template-template-about-oi .single-program-content-sec .item-image-wrap{
      padding-bottom: 10px;
}
.page-template-template-about-oi .single-program-content-sec{
   padding-bottom: 60px;
}
.page-template-template-about-oi .cta-items a{
   padding: 12px 64px 12px;
}
.page-template-template-about-oi .single-program-content-sec .item-image-wrap img{
  width: 48.8%;
}
.page-template-template-about-oi .single-program-content-sec{
   padding-top: 5px;
}
@media(max-width: 767px){
  .page-template-template-about-oi .page-body {
    padding-top: 100px;
    padding-bottom: 0px;
  }
 .page-template-template-about-oi-php .page-body .block-container {
    padding: 0px 15px;
  }
  .page-template-template-about-oi-php .page-body h1.page-main-title{
    font-size: 21px;
    padding-bottom: 0px;
  }
  .page-template-template-about-oi .custom-page-body h3{
    font-size: 21px;
    line-height: 28px;
  }
  .custom-page-body p{
    font-size: 14px;
    line-height: 21px;
  }
  .page-template-template-about-oi .custom-page-body .about-img{
    margin-bottom: 15px;
  }
  .page-template-template-about-oi .single-program-content-sec .item-image-wrap img{
    width: 100%;
  }
  .page-template-template-about-oi .custom-page-body h3{
    margin-top: 0px;
  }
  .page-template-template-about-oi .custom-page-body .about-img{
     padding-bottom: 6px;
  }
}

/** end of about us css **/
/** intellibaby-parent-toddler-program css ***/
.parent_toddler_banner{
    margin-top: 98px;
    padding: 0px;
    position: relative;
}
.parent_programs_section .intro-btn {
    margin-top: 25px;
}
.parent_toddler_banner .pbanner-row .banner-slide .bg-img {
    max-width: 994px;
    margin: 0 auto;
    text-align: center;
}
.parent_programs_section{
  padding-top: 8px;
  padding-left: 26px;
  padding-right: 26px;
}
.parent_programs_section .parent-titles{
  padding-bottom: 10px;
  padding-top: 30px;
}
.parent-titles{
    text-align: center;
    font-size: 35px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 35px;
    text-transform: capitalize;
    letter-spacing: 0px;
}
.programsTabSection .parent-titles{
      padding-bottom: 20px;
}
.parent_programs_section ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    transition: 0.4s;
    padding-top: 0px;
}

.parent_programs_section ul{
    justify-content: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    transition: 0.4s;
    padding-top: 0px;
    align-items: center;
}
.parent_programs_section ul li{
  flex: 0 0 45%;
    max-width: 45%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 35px;
    padding-left: 18px;
    padding-right: 18px;
}
.parent_programs_section ul li .p-left {
    flex: 0 0 34%;
    max-width: 34%;
    margin-right: 20px;
}
.parent_programs_section ul li .p-right{
    padding-top: 0px;
}
.parent_programs_section ul li .p-right{
    padding-top: 0px;
    flex: 0 0 62%;
}
.parent_programs_section ul li .p-right h3{
    text-align: left;
    font-size: 24px;
    font-weight: bold;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    text-transform: capitalize;
    line-height: 30px;
    letter-spacing: 0px;
    margin-bottom: 5px;
    margin-top: 25px;
}
.parent_programs_section ul li .p-right p{
    font-size: 18px;
    font-weight: normal;
    line-height: 26px;
    margin: 0 auto;
    font-family: 'Averia Sans Libre';
    color: #424242;
}
.parent_programs_section ul li .p-left img {
    width: 100%;
}
.pform-layout .pcard-img{
    flex: 0 0 40%;
    position: relative;
}
.pform-layout .pcard-img figure{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom-left-radius: 16px;
    background-size: cover;
}
.pform-layout .pcard-img{
    flex: 0 0 40%;
    position: relative;
}
.pform-layout .pcard-img figure{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom-left-radius: 16px;
    background-size: cover;
}
.padmission-form-top-img{
  display: none;
}
.form-section .pcard{
    flex-wrap: wrap;
    display: flex;
    max-width: 1100px;
    background: white;
    margin: auto;
    border-radius: 16px;
    z-index: 9;
    transition: all 0.6s ease-in-out;
    box-shadow: 0px 2px 10px 5px rgb(0 0 0 / 5%);
    border: 1px solid #eee;
}
.works-wrapper ul li{
  width: 100%
}
.works-wrapper ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.works-wrapper ul li {
    flex: 0 0 49%;
    max-width: 49%;
    display: flex;
    flex-wrap: nowrap;
    padding-top: 10px;
    padding-bottom: 35px;
    padding-left: 78px;
    padding-right: 78px;
}
.w-right h3{
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    font-family: 'Averia Sans Libre';
    letter-spacing: 0px;
    color: #424242;
    margin-top: 0px;
    margin-bottom: 0px;
}
.w-left{
    flex: 0 0 13.5%;
    max-width: 13.5%;
    margin-right: 20px;
}
.works-wrapper ul li:nth-child(3) .w-left{
  padding-top: 15px;
}
.works-wrapper ul li:nth-child(4) .w-left{
  padding-top: 15px;
}
.works-wrapper{
    border: 1px solid #ffe9b5;
    border-radius: 24px;
    background-color: #fffcf1;
    max-width: 1235px;
    margin: 0 auto;
}
.works_section .works-wrapper{
   padding-top: 36px;
   padding-bottom: 48px;
}
.works-wrapper ul{
  margin-top: -32px;
}
.counseller-btn{
  margin-top: 0px;
}
.counseller-btn a{
    padding: 12px 24px 12px;
    color: #fff;
    border-radius: 6px;
    background: linear-gradient(to right, #ff8429, #ff7043);
    font-size: 18px;
    font-family: 'Balsamiq Sans';
    font-weight: bold;
    text-transform: uppercase;
}
.count-section{
  padding-top: 10px;
  padding-bottom: 30px;
  padding-left: 60px;
  padding-right: 60px;
}
.countsItems h4{
    font-size: 34px;
    font-weight: bold;
    font-family: 'Balsamiq Sans';
    color: #faa74a;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background-color: #ffecc0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.countsItems p{
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    font-family: 'Averia Sans Libre';
    letter-spacing: 0px;
    color: #424242;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 10px 38px;
}
.dev-wrapper{
    border: 1px solid #ffe9b5;
    border-radius: 24px;
    background-color: #fffcf1;
    max-width: 930px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 100%;
}
.d-left-wrapper{
    text-align: center;
    flex: 0 0 50%;
    padding-top: 60px;
}
.d-right-wrapper{
  text-align: center;
  flex: 0 0 50%;
}
.d-img-wrap img{
   width: 332px;
}
.d-left-wrapper h2{
    text-align: center;
    font-size: 35px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0px;
    text-transform: capitalize;
    letter-spacing: 0px;
    line-height: 40px;
}
.d-left-wrapper p{
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    font-family: 'Averia Sans Libre';
    letter-spacing: 0px;
    color: #424242;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 1px 38px;
}
.dev-btn{
   margin-top: 32px;
}
.dev-btn a{
    padding: 12px 18px 12px;
    color: #fff;
    border-radius: 6px;
    background: linear-gradient(to right, #ff8429, #ff7043);
    font-size: 18px;
    font-family: 'Balsamiq Sans';
    font-weight: bold;
    text-transform: uppercase;
}
.d-img-wrap{
  padding-top: 40px;
  padding-bottom: 40px;
}
.programs-level-tabs .panel-heading-nav{
    display: flex;
    justify-content: center;
    background-color: #fff !important;
    border-color: #fff !important;
}
.programs-level-tabs ul.nav-tabs{
  padding-left: 0px !important;
  border-bottom: none !important;
}
.programs-level-tabs .panel-default{
  border: none !important;
}
.programs-level-tabs ul li{
  border: 2px solid #eee;
  margin: 0px 10px;
  border-radius: 8px;
   width: 150px;
   border-radius: 10px;
}
.programs-level-tabs ul li.active{
   border-color: #ff7043;
}
.programs-level-tabs ul li.active a h4, .programs-level-tabs ul li.active a p{
  color: #ff7043;
}
.programs-level-tabs ul li a{
   background-color: #f7f7f7;
   border: none !important;
   margin-right: 0px;
   border-radius: 10px;
}
.programs-level-tabs ul li.active a{
   background: #ffeee2 !important;
}
.programs-level-tabs .pright-wrap ul{
  padding-left: 40px;
}
.programs-level-tabs ul li a h4{
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    color: #424242;
    font-family: 'Balsamiq Sans';
    margin-top: 0px;
    margin-bottom: 0px;
}
.programs-level-tabs ul li a p{
    padding-bottom: 0px !important;
    font-family: 'Averia Sans Libre';
    color: #424242;
    font-size: 18px;
    text-align: center;
    margin-bottom: 0px;
}
.programs-level-tabs .tab-pane{
  max-width: 1010px;
  margin: 0 auto;
}
.pcol-item{
   display: flex;
}
.pcol-item .pleft-wrap{
     flex: 0 0 38%;
    border: 1px solid #e0e0e0;
    border-radius: 24px;
}
.pcol-item .pleft-wrap img{
    border-radius: 24px;
    width: 390px;
    height: 390px;
}
.p-center{
    margin: 0px 45px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pright-wrap{
  align-items: center;
  display: flex;
}
.pright-wrap ul{
    border: 1px solid #ffe9b5;
    border-radius: 24px;
    background-color: #fffcf1;
    height: 238px;
    width: 460px;
    padding-top: 55px;
}
.panel .pright-wrap ul li {
   list-style: none !important;
   list-style-type: none !important;
    position: relative;
    padding-bottom: 20px;
    width: auto;
    color: #424242;
}
.programs-level-tabs .panel .pright-wrap ul li::before {
   content: "\2022";
    color: #ffbe95;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}
.pright-wrap li{
    font-family: 'Averia Sans Libre';
    color: #424242;
    font-size: 20px;
    border: none !important;
}
.programs-level-tabs .nav ul li{
  width: 180px;
}
.programs-level-tabs .panel{
  box-shadow: none !important;
}
@media(max-width: 767px){
  .parent_toddler_banner{
     margin-top: 82px;
  }
  .parent-titles{
     font-size: 21px;
  }
   .parent_programs_section .parent-titles{  
     margin-top: 2px;
     padding-bottom: 0px;
     padding-top: 10px;
     margin: 0 0 0px;
    }
  .parent_programs_section{
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 10px;
  }
  .parent_programs_section ul{
     display: block;
  }
  .parent_programs_section ul li{
     max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-end;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px;
    padding-bottom: 0px;
  }
  .parent_programs_section ul li .p-left{
    flex: 0 0 32%;
    max-width: 32%;
   margin-right: 15px;
  }
  .parent_programs_section ul li .p-right{
    flex: 0 0 63%;
  }
  .parent_programs_section ul li .p-right h3{
    font-size: 16px;
    line-height: 20px;
  }
  .parent_programs_section ul li .p-right p{
     line-height: 20px;
     font-size: 14px;
  }
  .works_section{
     padding-top: 8px;
     padding-bottom: 12px;
  }
  .works-wrapper ul{
     display: block;
  }
  .works-wrapper ul li{
    flex: 0 0 100%;
    max-width: 100%;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
  }
  .w-right h3{
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
  .works_section .works-wrapper{
     padding-top: 20px;
     padding-bottom: 25px;
     border-radius: 12px;
  }
 .works_section .parent-titles{
    padding-bottom: 40px;
     margin-bottom: 0px;
  }
  .counseller-btn a{
    font-size: 15px;
    padding: 10px 20px 10px;
  }
  .count-section{
    padding-top: 10px;
    padding-left: 0px;
    padding-right: 0px;
  }
  .count-section .parent-titles{
    padding-bottom: 0px;
    margin: 0 0 10px;
  }
  .countsItems{
    display: flex;
    align-items: center;
    padding: 7px 0px;
  }
  .countsItems h4{
    flex: 0 0 12%;
    font-size: 17px;
    width: 40px;
    height: 40px;
    margin: inherit;
  }
  .countsItems p{
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding: 6px 20px;
  }
 .countsItems p br{
    display: none;
} 
  .development-section{
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .d-left-wrapper h2{
     font-size: 21px;
     line-height: 30px;
      margin-bottom: 5px;
  }
  .dev-wrapper{
    display: block;
    border-radius: 12px;
  }
  .d-img-wrap{
   padding-top: 20px;
   padding-bottom: 30px;
  }
  .d-left-wrapper{
    padding-top: 20px;
  }
  .programs-level-tabs ul li{
    border: 1px solid #eee;
  }
  .d-left-wrapper p{
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
  }
  .d-left-wrapper p br{
     display: none;
  }
  .dev-btn{
    display: none;
  }
  .dev-btn a{
    font-size: 15px;
    padding: 10px 20px 10px;
    display: none;
  }
  .d-img-wrap img {
    width: 300px;
 } 
  .programsTabSection{
     padding-top: 15px;
  }
  .programsTabSection .parent-titles{
    padding-bottom: 0px;
  }
  .programsTabSection .block-container{
    padding: 0 0px;
  }
  .programsTabSection .block-container .parent-titles{
     padding: 0px 15px;
  }
  .programs-level-tabs ul.nav-tabs{
    display: flex;
    overflow: auto;
  }
 .programs-level-tabs ul.nav-tabs{
   overflow-x: auto;
   overflow-y:hidden;
   flex-wrap: nowrap;
   padding-left: 10px !important;
}
 .programs-level-tabs ul.nav-tabs li {
  white-space: nowrap;
    margin: 0px 5px;
   width: 112px;
    border-radius: 10px;
 }
  .programs-level-tabs ul li a h4{
    font-size: 14px;
  }
  .programs-level-tabs ul li a p{
    font-size: 12px;
    line-height: 15px;
  }
  .pcol-item {
    display: block;
 }
  .programs-level-tabs .panel-heading{
    padding: 0px 0px;
  }
  .pcol-item .pleft-wrap{
    border-radius: 0px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    text-align: center;
  }
  .panel .pright-wrap ul li{
    padding-bottom: 15px;
  }
  .pcol-item .pleft-wrap img{
    border-radius: 12px;
    width: 284px;
    height: 284px;
   }
  .programs-level-tabs .panel{
        margin-bottom: 0px;
  }
  .p-center{
    position: absolute;
    margin-top: -16px;
    width: 30px;
    left: 36%;
  }
  .programs-level-tabs .pright-wrap ul{
    padding-left: 25px;
    border-bottom-left-radius: 12px !important;
    border-bottom-right-radius: 12px !important;
    border-radius: 0px;
    height: auto;
    padding-bottom: 15px;
    width: 460px;
    padding-top: 30px;
  }
  .pform-layout .pcard-img figure{
     display: none;
  }
  .padmission-form-top-img {
    display: block !important;
  }
  .padmission-form-top-img {
    width: 110px;
    margin: auto;
    margin-top: 15px;
  }
  .form-section .pform-layout{
    display: block;
    max-height: fit-content !important;
  }
  .padmission-form-txt {
    font-size: 22px;
    font-weight: 800;
    color: #5ac4be;
    padding: 15px 20px;
    text-align: center;
    font-family: 'Balsamiq Sans';
}
  .programsTabSection{
     padding-bottom: 0px;
  }
  .page-template-parentToddler_template .form-section{
     padding-top: 0px;
  }
  .form-section .pcard {
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-shadow: none;
  }
  .parent_programs_section .intro-btn{
    margin-top: 35px;
  }
}
@media (max-width: 330px){
  .parent_programs_section ul li .p-left{
    margin-right: 12px;
  }
}
html {
  scroll-behavior: smooth;
}
.development-section{
  padding-top: 13px;
}
.programsTabSection{
  padding-bottom: 3px;
}
.page-template-parentToddler_template .form-section{
      padding-bottom: 58px;
}
.page-template-parentToddler_template .form-section .pform-layout .pcard-img{
  flex: 0 0 42%;
}
.page-template-parentToddler_template .form-section .pform-layout .form-wrapper{
   flex: 0 0 58%;
}
/** end of intellibaby-parent-toddler-program css **/

/** Sub Menu Css **/
.nav .open>a, .nav .open>a:focus, .nav .open>a:hover{
  background-color: #fff;
}
.dropdown.open>a{
  color:#ff7043 !important;
}
.subMenuItem a .caret{
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border: solid #616161;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px; 
    margin-top:-3px;
    transition: transform 0.4s linear;
}
.subMenuItem.open a .caret{
  transform: rotate(223deg);
  transition: transform 0.4s linear;
}
.subMenuItem .dropdown-menu{
  top: 64px;
}
#menu-main-menu li.subMenuItem .dropdown-menu li:hover, .subMenuItem .dropdown-menu>li>a:hover{
  background-color: #fff !important;
}
.subMenuItem .dropdown-menu>li>a{
  padding: 6px 30px;
}
.subMenuItem .dropdown-menu>li>a{
    font-family: 'Averia Sans Libre';
    font-size: 18px;
    color: #616161;
    font-weight: 500;
}
.subMenuItem .dropdown-menu{
    border: none;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding-bottom: 20px;
}
header .navigation a:hover .caret{
  border-color: #ff7043;
}
.subMenuItem .dropdown-menu>li>a:hover, .subMenuItem:hover .caret{
  color: #ff7043;
}
.subMenuItem.open a .caret{
  border-color: #ff7043 !important;
  margin-top: 3px;
}
@media(max-width: 767px){
  #menu-main-menu li a:hover{
     background-color: transparent !important;
  }
  .right-menu .nav>li>a {
    display: block;
  }
  .subMenuItem a .caret {
    position: absolute;
    right: 10px;
    margin-top: 5px;
  }
}
.single-centre .programs-offered.home-program-sec{
  padding-top: 40px;
}
.programs-level-tabs ul.nav-tabs::-webkit-scrollbar { 
  width: 0px; 
}
@media (max-width: 767px){
  .subMenuItem .dropdown-menu>li>a{
    font-size: 15px;
  }
  .programs-offered .nav-tabs{
       /* overflow: auto;
        padding-left: 10px !important;
    justify-content: flex-start;
    flex-wrap: nowrap;*/
  }
  .programs-offered .nav-tabs li{
     white-space: nowrap;
     margin: 6px 0px;
    width: auto;
  }
.programs-offered ul.nav-tabs::-webkit-scrollbar { 
  width: 0px; 
}
  body.modal-open .right-menu{
    display: none !important;
  }
  .works-wrapper ul li:nth-child(3) .w-left, .works-wrapper ul li:nth-child(4) .w-left{
     padding-top: 0px;
  }
  .navbar-nav .open .dropdown-menu>li>a{
     padding: 5px 15px 5px 12px;
  }
  .main-header .block-container{
        padding: 0px 0px;
  }
  .dropdown.open a{
    padding-bottom: 0px;
  }
  .right-menu .nav>li>a{
     padding: 10px 17px;
  }
}
/** end of sub menu css **/
.pform-layout .wpcf7-spinner{
  display: none !important;
}
#admission-step-1 #mothertod-grade-page{
 color: rgb(158, 158, 158);
 background-image: linear-gradient(45deg, transparent 50%, #9e9e9e 50%), linear-gradient(135deg, #9e9e9e 50%, transparent 50%), linear-gradient(to right, #9e9e9e, #9e9e9e)!important;
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em!important;
    background-size: 5px 5px, 5px 5px, 0px 1.5em!important;
    background-repeat: no-repeat!important;
}
#mothertoddler-grade #mothertod-grade-top{
    color: #9e9e9e!important;
    line-height: initial!important;
    appearance: none!important;
    background-image: linear-gradient(45deg, transparent 50%, #9e9e9e 50%), linear-gradient(135deg, #9e9e9e 50%, transparent 50%), linear-gradient(to right, #9e9e9e, #9e9e9e)!important;
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em!important;
    background-size: 5px 5px, 5px 5px, 0px 1.5em!important;
    background-repeat: no-repeat!important;
}
/** educational section css **/
.educational-section .edu-wrapper{
   max-width: 767px;
   margin: 0 auto;
}
/*.edu-list .card-wrapper{
  height: 455px;
} */
.edu-list .card-wrapper img{
   width: 160px;
   margin: 0 auto;
}
.edu-wrapper .edu-lists{
  display: flex;
}
.edu-wrapper .edu-lists .edu-list{
    box-shadow: 0px 2px 10px 5px rgb(0 0 0 / 5%);
    margin: 15px;
    border: 2px solid #eee;
    padding: 20px;
    border-radius: 8px;
    max-width: 360px;
}
.edu-list .card-wrapper a{
   color: #fff;
    line-height: 29px;
    border-radius: 6px;
    background: linear-gradient(to right, #ff8429, #ff7043);
    text-align: center;
    font-size: 18px;
    font-weight: 900;
    font-family: 'Balsamiq Sans';
    padding: 8px 36px;
    text-transform: uppercase;
    margin: auto;
    margin-bottom: 20px;
}
.edu-list .card-wrapper h3{
    letter-spacing: 0px;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #5ac4be;
    padding-bottom: 3px;
    text-transform: capitalize;
    line-height: 30px;
    padding-top: 0px;
    font-family: 'Balsamiq Sans';
    margin-bottom: 0px;
}
.edu-list .card-wrapper ul {
    padding-top: 10px;
    padding-bottom: 20px;
}
.edu-list .card-wrapper ul li {
    padding-bottom: 10px;
    position: relative;
    padding-left: 35px;
    font-size: 18px;
    font-weight: 400;
    color: #424242;
    text-align: left;
    font-weight: normal;
    line-height: 22px;
    margin: 0 auto;
    list-style-type: none !important;
    font-family: 'Averia Sans Libre';
}
.edu-list .card-wrapper ul li:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat;
}
.edu-list .card-wrapper ul li:first-child:before{
   background: url(../images/tick_1.svg);
   background-repeat: no-repeat;
}
.edu-list .card-wrapper ul li:nth-child(2):before {
   background: url(../images/tick_2.svg);
   background-repeat: no-repeat;
 }
.edu-list .card-wrapper ul li:nth-child(3):before {
   background: url(../images/tick_3.svg);
  background-repeat: no-repeat;
  }
.edu-list .card-wrapper ul li:last-child:before {
   background: url(../images/tick_4.svg);
   background-repeat: no-repeat;
}
.educational-section{
  padding-top: 2px;
}
.educational-section .main-title h2{
   padding-bottom: 0px;
}
.educational-section .panel-default {
    box-shadow: none !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-bottom: 0px !important;
    border: none;
}
.educational-section .panel-default>.panel-heading {
    background-color: transparent;
    border: none !important;
}
.educational-section .nav-tabs {
    border-bottom: none !important;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 10px !important;
}
.educational-section .nav-tabs li {
    white-space: nowrap;
    margin: 6px 2px;
    width: auto;
}
.educational-section .nav-tabs li a {
    color: #9e9e9e;
    border-radius: 6px;
    background: #eee;
    font-size: 16px;
    font-family: 'Balsamiq Sans';
    font-weight: 600;
}
.educational-section .nav-tabs li.active a {
    background: linear-gradient(to right, #ff8429 30%, #ff7043 100%);
    color: #fff;
 }
.educational-section .nav-tabs li a {
    padding: 8px 15px !important;
}
@media(max-width: 767px){
  .educational-section .main-title h2 {
    padding-bottom: 2px;
    margin: 0 0 5px;
}
  .educational-section .panel .panel-body{
    padding: 0px;
  }
}
/** end of eductional section css **/

#foogallery-gallery-8480.fg-simple_portfolio .fg-item{
  margin: 20px !important;
}
/** tots readiness css **/
.tots-development-section .tot-dev-wrapper{
    max-width: 930px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 100%;
}
.tot-left-wrapper h2{
    text-align: left;
    font-size: 35px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0;
    text-transform: capitalize;
    letter-spacing: 0px;
    line-height: 40px;
}
ul.tot-student-kit-lists li {
    padding-bottom: 10px;
    position: relative;
    padding-left: 28px;
    font-size: 18px;
    font-weight: 400;
    color: #424242;
    text-align: left;
    font-weight: 400;
    line-height: 22px;
    margin: 0 auto;
    list-style-type: none !important;
    font-family: 'Averia Sans Libre'
}

ul.tot-student-kit-lists li:first-child:before {
    content: "";
    background: url(../images/tick_1.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}

ul.tot-student-kit-lists li:nth-child(2):before {
    content: "";
    background: url(../images/tick_2.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}

ul.tot-student-kit-lists li:last-child:before {
    content: "";
    background: url(../images/tick_4.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}

ul.tot-student-kit-lists li:nth-child(3):before {
    content: "";
    background: url(../images/tick_3.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}

ul.tot-student-kit-lists li:last-child:before {
    content: "";
    background: url(../images/tick_4.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}
.totprogram-dev-wrapper{
    max-width: 1239px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 100%;
    border: 1px solid #F5F5F5;
    border-radius: 6px;
    box-shadow: 0px 0px 10px #21212129;
}
.totprogram-dev-wrapper .totprogram-left-wrapper{
   flex: 0 0 40%;
    max-width: 40%;
}
.totprogram-dev-wrapper .totprogram-left-wrapper img{
    width: 357px;
    height: 357px;
}
.totprogram-dev-wrapper .totprogram-right-wrapper{
      padding-top: 39px;
}
.totprogram-dev-wrapper .totprogram-right-wrapper ul.totprogram-student-kit-lists{
      padding-left: 10px;
}
ul.totprogram-student-kit-lists li {
    padding-bottom: 10px;
    position: relative;
    padding-left: 28px;
    font-size: 18px;
    font-weight: 400;
    color: #424242;
    text-align: left;
    font-weight: 400;
    line-height: 22px;
    margin: 0 auto;
    list-style-type: none !important;
    font-family: 'Averia Sans Libre';
}
ul.totprogram-student-kit-lists li:first-child:before {
    content: "";
    background: url(../images/tick_1.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}

ul.totprogram-student-kit-lists li:nth-child(2):before {
    content: "";
    background: url(../images/tick_2.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}

ul.totprogram-student-kit-lists li:last-child:before {
    content: "";
    background: url(../images/tick_4.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}

ul.totprogram-student-kit-lists li:nth-child(3):before {
    content: "";
    background: url(../images/tick_3.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}

ul.totprogram-student-kit-lists li:nth-child(4):before {
    content: "";
    background: url(../images/tick_4.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}
ul.totprogram-student-kit-lists li:nth-child(5):before {
    content: "";
    background: url(../images/tick_6.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}
ul.totprogram-student-kit-lists li:nth-child(6):before {
    content: "";
    background: url(../images/tick_5.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}
ul.totprogram-student-kit-lists li:nth-child(7):before {
    content: "";
    background: url(../images/tick_1.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}
ul.totprogram-student-kit-lists li:nth-child(8):before {
    content: "";
    background: url(/../images/tick_2.svg);
    position: absolute;
    left: -8px;
    top: 3px;
    height: 100%;
    width: 100%;
    display: block;
    background-repeat: no-repeat
}
.acad_year .main-title h2{
  margin-bottom: -6px;
  padding-bottom: 0px;
}
.acad_img_wrap{
    max-width: 940px;
    margin: 0 auto;
}
.tots-col-wrap{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-top: 36px;
  }
.tot-wrpap h3{
    text-align: center;
    padding-top: 16px;
    color: #5ac4be;
    font-size: 24px;
    font-family: 'Balsamiq Sans';
    letter-spacing: 0px;
    font-weight: bold;
    margin-bottom: 0px;
    line-height: 1.2;
    max-width: 225px;
    margin: 0 auto;
}
.parent_programs_section p, .tots_introduction p{
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    max-width: 984px;
    margin: 0 auto;
    text-align: center;
    font-family: 'Averia Sans Libre';
    color: #424242;
}
.tots_introduction h2{
  margin-bottom: 0px;
}
.tots-col-wrap .tot-wrpap{
    width: 25%;
    margin: 0 auto;
    text-align: center;
}
.tot-wrpap img{
    width: 240px;
    height: 160px;
}
.tots_introduction .dev-btn{
  margin-top: 32px;
  text-align: center;
}
.counter-tots-wrapper{
  display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  max-width: 1065px;
}
.counter-tots-wrapper .tots-item {
    width: 15%;
    margin: 0 auto;
    text-align: center;
}
.tots-item img{
  height: 150px;
  width: 150px;
}
.tots-item h3{
    font-size: 18px;
    font-weight: normal;
    line-height: 27px;
    margin: 0 auto;
    text-align: center;
    font-family: 'Averia Sans Libre';
    padding: 8px 0px;
    letter-spacing: 0px;
}
.acad_year{
  padding-top: 35px;
}
.tots_introduction{
  padding-top: 24px;
}
.tots_introduction .main-title h2{
   padding-bottom: 8px;
}
.tots-preschool-locator .tots-pre-wrap{
    width: 100%;
    height: 173px;
    background: transparent linear-gradient(180deg, #C0F38A 0%, #7AEA5F 100%) 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;
    position: relative;
}
.tots-preschool-locator .tots-pre-wrap .tots-img-wrap{
   position: absolute;
    right: 0;
    bottom: 0;
}
.tots-text-wrapper{
  padding-left: 125px;
  padding-top: 33px;
}
.tots-text-wrapper h3{
    text-align: left;
    font-size: 35px;
    font-weight: 900;
    color: #1A8920;
    font-family: 'Balsamiq Sans';
    padding-bottom: 10px;
    text-transform: capitalize;
    letter-spacing: 0px;
    margin-top: 0px;
}
.tots-text-wrapper a{
    color: #fff;
    line-height: 26px;
    border-radius: 6px;
    background: linear-gradient(to right, #ff8429, #ff7043);
    text-align: center;
    font-size: 16px;
    font-weight: 900;
    font-family: 'Balsamiq Sans';
    padding: 10px 36px;
    text-transform: uppercase;
    margin: auto;
    margin-bottom: 20px;
}
.totprogram-right-wrapper h2{
    text-align: left;
    font-size: 35px;
    font-weight: 900;
    color: #5ac4be;
    font-family: 'Balsamiq Sans';
    padding-bottom: 0;
    text-transform: capitalize;
    letter-spacing: 0px;
    line-height: 40px;
}
@media(max-width: 767px){
  .acad_year {
    padding-top: 24px;
    padding-bottom: 16px;
}
  .acad_year .main-title h2{
    margin-bottom: 5px;
  }
  .parent_programs_section p, .tots_introduction p{
     font-size: 15px;
     line-height: 21px;
  }
  .tots-col-wrap .tot-wrpap{
    width: 50%;
  }
  .tot-wrpap img {
    width: 148px;
    height: 110px;
  }
  .tot-wrpap h3{
    font-size: 16px;
    padding-top: 10px;
    line-height: 24px;
  }
  .tots-col-wrap{
     padding-top: 24px;
  }
  .tots_introduction .dev-btn, .tots_introduction .dev-btn a{
     display: block !important;
  }
  .tots-preschool-locator{
     padding-top: 0px;
  }
  .tots-preschool-locator .tots-pre-wrap{
     height: 247px;
  }
  .tots-text-wrapper{
    padding-left: 0px;
    padding-top: 18px;
    text-align: center;
  }
  .tots-text-wrapper h3{
     text-align: center;
     font-size: 20px;
     padding-bottom: 10px;
     margin-top: 0;
     margin-bottom: 0px;
  }
  .tots-text-wrapper a{
     
  }
  .tots-preschool-locator .tots-pre-wrap .tots-img-wrap{
     left: 0;
    text-align: center;
  }
  .tots-preschool-locator .tots-pre-wrap .tots-img-wrap img{
    width: 80%;
    margin: 0 auto;
  }
  .tots-counter-section{
    padding-top: 0px;
  }
  .counter-tots-wrapper .tots-item{
    width: 41%;
  }
  .tots-item img {
    height: 114px;
    width: 114px;
  }
  .parent_programs_section ul li .p-left{
    flex: 0 0 38%;
    max-width: 38%;
  }
  .parent_programs_section ul li .p-right {
    flex: 0 0 54%;
  }
  .parent_programs_section ul li .p-left img{
    vertical-align: top;
  }
  .parent_programs_section ul li{
     align-items: flex-start;
     padding-bottom: 20px;
  }
  .totprogram-dev-wrapper{
     display: block;
    border: none;
    border-radius: 0px;
    box-shadow: none;
  }
  .totsprogram-development-section{
    padding-top: 0px;
  }
  .totprogram-dev-wrapper .totprogram-left-wrapper{
         max-width: 100%;
  }
  .totprogram-dev-wrapper .totprogram-left-wrapper img {
    width: 247px;
    height: 247px;
  }
  .totsprogram-img-wrap{
    text-align: center;
  }
  .ms-title{
    display: none;
  }
  ul.totprogram-student-kit-lists li{
    font-size: 16px;
  }
  .tots-development-section{
    padding-top: 0px;
    padding-bottom: 10px;
  }
  .tots-development-section .tot-dev-wrapper{
    display: block;
  }
  .tots-development-section{
    padding-bottom: 0px;
  }
  .tots-development-section .tot-dev-wrapper{
    display: block;
  }
  .tot-left-wrapper h2{
    font-size: 21px !important;
    line-height: 24px !important;
    text-align: center;
  }
  .page-template-template-totsReadiness-program-php .review-count .g-img:after{
    height: 122px;
  }
}
/** end of tots readiness css **/
